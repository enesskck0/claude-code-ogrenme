// Yol ekranının dere kenarı çizimi (ogrenme/TASARIM.md bölüm 12, KARARLAR 1389). Saf: DOM'a dokunmaz, Node testinde koşar.
// Taşın biçimi, minerali ve dokusu ders kimliğinden türer (FNV-1a karması, mulberry32 dizisi): aynı ders her açılışta aynı taş;
// rastgele sayı üreteci kullanılmaz. Yolda yan yana iki taş aynı minerale düşerse ikincisi kendi kimliğinden türeyen bir adım kayar (taslar).
// Birimin kıyısı yol sırasından (kiyi), kıyıdaki bitkiler birim kimliğinden (bitkiler). Koordinatlar piksel: taş kutusu A 84, B 72
// (index.html'deki .tas ölçüsüyle aynı; test karşılaştırır). Tarayıcıda globalThis.OGRENME_DERE; yoksa arayuz.js taşları düz çizer.
(function (kok) {
  'use strict';

  var KUTU = { a: 84, b: 72 };
  var HALKA = 1.2; // sıradaki taşın su halkası: taş biçiminin bu kadar büyütülmüşü
  var MINERALLER = ['granit', 'kumtasi', 'arduvaz', 'jasp', 'serpantin', 'mermer', 'cakmaktasi', 'okr'];
  var KIYILAR = ['yosun', 'kum', 'cakil', 'kil', 'liken', 'turba'];
  var DOKULAR = { a: ['benek', 'katman', 'damar', 'catlak'], b: ['cizgi', 'nokta', 'ucgen', 'carpi'] };
  // A'nın zikzağı (TASARIM bölüm 3): satır sırasıyla kay-0, kay-p, kay-0, kay-n; zikzak biriminde taşın yatay kayması.
  var KAY = [0, 1, 0, -1];
  // Kıyıdaki bitkiler, 32x40 kutuda; A yuvarlak uçlu eğri, B düz ve köşeli çizgi. Hepsi tek renkte çizgi (dolgu yok).
  var BITKI = {
    a: {
      ot: 'M10 38C10 30 8 24 4 18M16 38C16 28 17 20 15 10M22 38C22 31 24 26 28 22',
      yaprak: 'M10 38C11 33 12 29 14 25M14 25C12 17 17 9 26 5C27 15 22 22 14 25ZM14 25L24 8',
      saz: 'M12 38V22M12 6V2M10 12C10 6 14 6 14 12V18C14 22 10 22 10 18ZM20 38C20 30 21 24 25 17',
      cakil: 'M5 34C5 30 13 29 14 33C15 37 5 38 5 34ZM17 36C17 33 24 32 25 35C26 38 17 39 17 36ZM22 32C22 26 23 22 26 18'
    },
    b: {
      ot: 'M10 38L6 20M16 38L16 8M22 38L28 22',
      yaprak: 'M12 38L14 26M14 26L9 15L18 4L23 15ZM14 26L18 4',
      saz: 'M12 38V20M10 20H14V8H10ZM12 8V2M20 38L24 18',
      cakil: 'M4 34L10 30L16 34L10 38ZM18 35L23 31L28 35L23 39Z'
    }
  };

  // FNV-1a, 32 bit.
  function karma(metin) {
    var s = String(metin), h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
    return h >>> 0;
  }
  // mulberry32: aynı tohum aynı diziyi verir.
  function dizi(tohum) {
    var a = tohum >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function ondalik(n) { var v = Math.round(n * 10) / 10; return v === 0 ? 0 : v; }
  function nokta(p) { return ondalik(p[0]) + ' ' + ondalik(p[1]); }

  // A: yumuşak çakıl. 8 nokta; yarıçap 30 x 0,88-1,08, bir ekseni 0,86-1 basık, rastgele açıyla döndürülmüş.
  function yumusakKoseler(r) {
    var n = 8, R = 30, basik = 0.86 + 0.14 * r(), donus = r() * 2 * Math.PI, nk = [];
    for (var k = 0; k < n; k++) {
      var t = (k + (r() - 0.5) * 0.35) * 2 * Math.PI / n, s = R * (0.88 + 0.2 * r());
      var x = Math.cos(t) * s, y = Math.sin(t) * s * basik;
      nk.push([x * Math.cos(donus) - y * Math.sin(donus), x * Math.sin(donus) + y * Math.cos(donus)]);
    }
    return nk;
  }
  // B: köşeli taş. 4-6 köşe (4 köşeli olan yamuk bir baklava), tepe köşesi yukarıda; yarıçap 27 x 0,84-1,04.
  function koseliKoseler(r) {
    var n = 4 + Math.floor(r() * 3), R = 27, bas = -Math.PI / 2 + (r() - 0.5) * 0.5, nk = [];
    for (var k = 0; k < n; k++) {
      var t = bas + (k + (r() - 0.5) * 0.3) * 2 * Math.PI / n, s = R * (0.84 + 0.2 * r());
      nk.push([Math.cos(t) * s, Math.sin(t) * s]);
    }
    return nk;
  }
  function yerles(nk, m, olcek) { return nk.map(function (q) { return [m + q[0] * olcek, m + q[1] * olcek]; }); }
  // Kapalı Catmull-Rom eğrisi, kübik Bézier parçalarıyla (noktalardan geçer, köşesiz).
  function egriYol(p) {
    var n = p.length, d = 'M' + nokta(p[0]);
    for (var i = 0; i < n; i++) {
      var p0 = p[(i - 1 + n) % n], p1 = p[i], p2 = p[(i + 1) % n], p3 = p[(i + 2) % n];
      d += 'C' + nokta([p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]) + ' ' +
        nokta([p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]) + ' ' + nokta(p2);
    }
    return d + 'Z';
  }
  function koseliYol(p) { return 'M' + p.map(nokta).join('L') + 'Z'; }

  // Doku: taşın bir köşesi yönünde, taşın içinde, ortadaki simgeden uzakta küçük işaretler.
  // P(a, b): merkezden a kadar dışa (köşeye doğru), b kadar yana; o: işaretin büyüklüğü (A 1,3, B 1,2).
  function dokuYolu(tur, c, u, o) {
    var w = [-u[1], u[0]];
    function P(a, b) { return nokta([c[0] + (u[0] * a + w[0] * b) * o, c[1] + (u[1] * a + w[1] * b) * o]); }
    function benek(a, b) { return 'M' + P(a - 1.2, b) + 'L' + P(a, b + 1.2) + 'L' + P(a + 1.2, b) + 'L' + P(a, b - 1.2) + 'Z'; }
    switch (tur) {
      case 'benek': return benek(0, -4) + benek(2.5, 1) + benek(0.5, 5);
      case 'katman': return 'M' + P(0, -5) + 'Q' + P(1, 0) + ' ' + P(0, 5) + 'M' + P(3, -4) + 'Q' + P(4, 0) + ' ' + P(3, 4);
      case 'damar': return 'M' + P(-1, -6) + 'C' + P(2, -3) + ' ' + P(-1, 2) + ' ' + P(1.5, 6);
      case 'catlak': return 'M' + P(0, -5) + 'L' + P(2, -2) + 'L' + P(0, 1) + 'L' + P(2.5, 4.5);
      case 'cizgi': return 'M' + P(0, -4.5) + 'L' + P(0, 4.5) + 'M' + P(3, -3.5) + 'L' + P(3, 3.5);
      case 'nokta': return benek(0, -2.5) + benek(0, 2.5) + benek(3, -2.5) + benek(3, 2.5);
      case 'ucgen': return 'M' + P(0, -4) + 'L' + P(3.5, 0) + 'L' + P(0, 4) + 'Z';
      default: return 'M' + P(-0.5, -3.5) + 'L' + P(3, 3.5) + 'M' + P(3, -3.5) + 'L' + P(-0.5, 3.5);
    }
  }

  // Tek taş: kimlikten mineral (1-8), doku, gövde yolu, sıradaki taşın halkası. yon: 'a' (Lokum) ya da 'b' (Kilim).
  function tas(id, yon) {
    yon = yon === 'b' ? 'b' : 'a';
    var h = karma(id), r = dizi(h), kutu = KUTU[yon], m = kutu / 2;
    var doku = DOKULAR[yon][Math.floor(r() * DOKULAR[yon].length)];
    var nk = yon === 'b' ? koseliKoseler(r) : yumusakKoseler(r);
    var ciz = yon === 'b' ? koseliYol : egriYol;
    var k = Math.floor(r() * nk.length), v = nk[k], uz = Math.sqrt(v[0] * v[0] + v[1] * v[1]);
    var u = [v[0] / uz, v[1] / uz], f = yon === 'b' ? 0.6 : 0.66;
    var koseler = yerles(nk, m, 1);
    return {
      id: String(id), yon: yon, kutu: kutu,
      mineral: h % MINERALLER.length + 1,
      doku: doku,
      koseler: koseler.map(function (p) { return [ondalik(p[0]), ondalik(p[1])]; }),
      govde: ciz(koseler),
      halka: ciz(yerles(nk, m, HALKA)),
      dokuYolu: dokuYolu(doku, [m + v[0] * f, m + v[1] * f], u, yon === 'b' ? 1.2 : 1.3)
    };
  }

  // Yoldaki bütün taşlar, yol sırasıyla. Komşu iki taş aynı minerali almaz.
  function taslar(idler, yon) {
    var once = 0;
    return idler.map(function (id) {
      var t = tas(id, yon);
      if (t.mineral === once) t.mineral = (t.mineral - 1 + 1 + karma(id + '#') % (MINERALLER.length - 1)) % MINERALLER.length + 1;
      once = t.mineral;
      return t;
    });
  }

  // Birimin kıyısı (1-6): yol sırasıyla döner, komşu iki birim aynı kıyıyı almaz.
  function kiyi(sira) { return sira % KIYILAR.length + 1; }

  // A'da iki taş arasındaki dere parçası: viewBox -200..200 x 0..100, x zikzak biriminin 100 katı; dikeyde esner.
  function dereYolu(x1, x2) {
    var a = ondalik(100 * x1), b = ondalik(100 * x2);
    return 'M' + a + ' 0C' + a + ' 50 ' + b + ' 50 ' + b + ' 100';
  }

  // B'de birimin dere bandı: 72 genişlikte, kenarları 10 pikselde bir girip çıkan zikzak (kilimin "su yolu" motifi).
  function dereBandi(yukseklik) {
    var H = Math.max(KUTU.b, Math.round(yukseklik)), sol = [], sag = [];
    for (var y = 0, k = 0; ; y += 10, k++) {
      var yy = Math.min(y, H);
      sol.push([k % 2 ? 8 : 2, yy]);
      sag.push([k % 2 ? 64 : 70, yy]);
      if (yy >= H) break;
    }
    var cizgi = function (l) { return 'M' + l.map(nokta).join('L'); };
    return {
      genislik: KUTU.b, yukseklik: H,
      su: cizgi(sol) + 'L' + sag.slice().reverse().map(nokta).join('L') + 'Z',
      sol: cizgi(sol), sag: cizgi(sag)
    };
  }

  // Kıyıdaki bitkiler: sayısı birimin satır sayısıyla (A satırın 0,6'sı, B 0,35'i, kimlikten +0-1; A 3-8, B 2-5);
  // A'da iki yanda sırayla, B'de sağdaki şeritte. ust: kıyının yüzde kaçında.
  function bitkiler(birimId, yon, satirSayisi) {
    yon = yon === 'b' ? 'b' : 'a';
    var r = dizi(karma('kiyi:' + birimId)), turler = Object.keys(BITKI[yon]), s = satirSayisi > 0 ? satirSayisi : 8;
    var n = yon === 'b' ? Math.min(5, Math.max(2, Math.round(s * 0.35) + Math.floor(r() * 2))) : Math.min(8, Math.max(3, Math.round(s * 0.6) + Math.floor(r() * 2)));
    var yan = r() < 0.5 ? 'sol' : 'sag', once = -1, liste = [];
    for (var k = 0; k < n; k++) {
      var t = Math.floor(r() * turler.length);
      if (t === once) t = (t + 1) % turler.length;
      once = t;
      liste.push({ tur: turler[t], yan: yon === 'b' ? 'sag' : yan, ust: Math.round(6 + (k + 0.5) * 88 / n + (r() - 0.5) * 8) });
      yan = yan === 'sol' ? 'sag' : 'sol';
    }
    return liste;
  }

  var api = {
    KUTU: KUTU, HALKA: HALKA, MINERALLER: MINERALLER, KIYILAR: KIYILAR, DOKULAR: DOKULAR, KAY: KAY, BITKI: BITKI,
    karma: karma, tas: tas, taslar: taslar, kiyi: kiyi, dereYolu: dereYolu, dereBandi: dereBandi, bitkiler: bitkiler
  };
  kok.OGRENME_DERE = api;
  if (typeof module !== 'undefined' && module && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
