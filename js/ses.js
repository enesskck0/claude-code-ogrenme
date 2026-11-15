// Uygulamanın sesleri (ogrenme/TASARIM.md bölüm 8 "Sesler"): ses dosyası ve dış adres yok; Web Audio osilatörüyle cihazda üretilir.
// Saf parçalar: frekans(nota) ve notalar(ad) Node testinde koşar. oynatici(w) tarayıcıda çalar; Web Audio yoksa sessiz kalır.
// Kapalı "Sesler" anahtarında arayuz.js oynatıcıyı hiç kurmaz. Tarayıcıda globalThis.OGRENME_SES, Node'da module.exports.
(function (kok) {
  'use strict';

  var ADLAR = ['dokunus', 'dogru', 'yanlis', 'kutlama'];

  // Nota adı (C4, F#5, Bb3) eşit aralıklı dizide frekansa: A4 = 440 Hz. Tanınmayan ad NaN verir.
  var YARIM = { C: -9, D: -7, E: -5, F: -4, G: -2, A: 0, B: 2 };
  function frekans(nota) {
    var m = /^([A-G])(#|b)?(-?\d)$/.exec(String(nota));
    if (!m) return NaN;
    var yarim = YARIM[m[1]] + (m[2] === '#' ? 1 : (m[2] === 'b' ? -1 : 0)) + (Number(m[3]) - 4) * 12;
    return Math.round(440 * Math.pow(2, yarim / 12) * 100) / 100;
  }

  // Her ses: notalar listesi. bas ve sure milisaniye; ses tepe düzeyi (0-1); kayma varsa nota sonunda o notaya iner ya da çıkar.
  var DIZI = {
    dokunus: [{ nota: 'E6', bas: 0, sure: 40, dalga: 'triangle', ses: 0.05 }],
    dogru: [
      { nota: 'C6', bas: 0, sure: 120, dalga: 'triangle', ses: 0.16 },
      { nota: 'F6', bas: 70, sure: 130, dalga: 'triangle', ses: 0.16 }
    ],
    yanlis: [{ nota: 'E4', kayma: 'D4', bas: 0, sure: 220, dalga: 'sine', ses: 0.12 }],
    kutlama: [
      { nota: 'D5', bas: 0, sure: 90, dalga: 'triangle', ses: 0.14 },
      { nota: 'E5', bas: 90, sure: 90, dalga: 'triangle', ses: 0.14 },
      { nota: 'G5', bas: 180, sure: 90, dalga: 'triangle', ses: 0.14 },
      { nota: 'A5', bas: 270, sure: 90, dalga: 'triangle', ses: 0.14 },
      { nota: 'D6', bas: 360, sure: 400, dalga: 'triangle', ses: 0.12 }
    ]
  };

  // Saf: sesin notaları, frekansıyla. Bilinmeyen ad boş liste verir.
  function notalar(ad) {
    var d = Object.prototype.hasOwnProperty.call(DIZI, ad) ? DIZI[ad] : [];
    return d.map(function (n) {
      var o = { nota: n.nota, frekans: frekans(n.nota), bas: n.bas, sure: n.sure, dalga: n.dalga, ses: n.ses };
      if (n.kayma) { o.kayma = n.kayma; o.kaymaFrekans = frekans(n.kayma); }
      return o;
    });
  }
  // Saf: sesin başından son notanın bitişine kadar geçen süre (ms).
  function toplamSure(ad) {
    return notalar(ad).reduce(function (en, n) { return Math.max(en, n.bas + n.sure); }, 0);
  }

  // Tarayıcıda çalar. w: pencere. ac() bağlamı kurar ya da askıdan alır (ilk dokunuşta çağrılır, iOS kuralı);
  // cal(ad) notaları zamanlar. Web Audio yoksa ya da kurulamazsa ikisi de false döner, hata atmaz.
  function oynatici(w) {
    var Kurucu = w ? (w.AudioContext || w.webkitAudioContext) : null;
    var bag = null, olmaz = typeof Kurucu !== 'function';
    function ac() {
      if (olmaz) return null;
      if (!bag) {
        try { bag = new Kurucu(); } catch (e) { olmaz = true; return null; }
        try {
          var tampon = bag.createBuffer(1, 1, 22050), kaynak = bag.createBufferSource();
          kaynak.buffer = tampon;
          kaynak.connect(bag.destination);
          kaynak.start(0);
        } catch (e) { /* sessiz tampon çalınamadı; bağlam yine kullanılır */ }
      }
      if (bag.state === 'suspended' && typeof bag.resume === 'function') {
        try { var s = bag.resume(); if (s && typeof s.catch === 'function') s.catch(function () {}); } catch (e) { /* askıda kalır */ }
      }
      return bag;
    }
    function cal(ad) {
      var liste = notalar(ad);
      if (!liste.length) return false;
      var b = ac();
      if (!b) return false;
      try {
        var t0 = (b.currentTime || 0) + 0.02;
        liste.forEach(function (n) {
          var o = b.createOscillator(), g = b.createGain();
          var bas = t0 + n.bas / 1000, son = bas + n.sure / 1000;
          o.type = n.dalga;
          o.frequency.setValueAtTime(n.frekans, bas);
          if (n.kayma) o.frequency.linearRampToValueAtTime(n.kaymaFrekans, son);
          g.gain.setValueAtTime(0.0001, bas);
          g.gain.linearRampToValueAtTime(n.ses, bas + 0.005);
          g.gain.exponentialRampToValueAtTime(0.0001, son);
          o.connect(g);
          g.connect(b.destination);
          o.start(bas);
          o.stop(son + 0.02);
        });
        return true;
      } catch (e) { return false; }
    }
    return { ac: function () { return !!ac(); }, cal: cal };
  }

  var api = { ADLAR: ADLAR, frekans: frekans, notalar: notalar, toplamSure: toplamSure, oynatici: oynatici };
  kok.OGRENME_SES = api;
  if (typeof module !== 'undefined' && module && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
