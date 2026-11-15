// JS ile zamanlanan hareketlerin süreleri ve planları (ogrenme/TASARIM.md bölüm 8). Saf: DOM'a dokunmaz, Node testinde koşar.
// CSS süreleri index.html'de; buradakiler JS'in zamanladıkları (göz kırpma, canlanma döngüsü, kutlamanın sayacı ve parçacıkları).
// Sınır (G3, KARARLAR 1385): kutlama dışında tek hareket en çok 320 ms; kutlama gecikmeler dahil en çok 1.500 ms.
// Hareketi azalt: sureler(true) her değeri 0 verir; 0 aralık "döngü kurulmaz" demektir. Tarayıcıda globalThis.OGRENME_HAREKET.
(function (kok) {
  'use strict';

  var SINIR = { hareket: 320, kutlama: 1500 };

  // Milisaniye (parcaSayisi adet). parcaSure CSS'teki en uzun parçacık süresiyle aynı tutulur (test karşılaştırır).
  var SURE = {
    kirpma: 120,
    canlanmaAraligi: 2400,
    sayacGecikme: 240,
    sayacSure: 640,
    parcaSure: 900,
    parcaGecikmeEnCok: 240,
    parcaSayisi: 10,
    parcaUzakEnAz: 60,
    parcaUzakEnCok: 100,
    parcaTemizlik: 1500
  };

  function sureler(az) {
    var s = {};
    Object.keys(SURE).forEach(function (k) { s[k] = az ? 0 : SURE[k]; });
    return s;
  }

  // Tohumlu sözde rastgele (mulberry32): aynı tohum aynı parçacıkları verir.
  function rastgele(tohum) {
    var a = tohum >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Kutlamanın parçacıkları: Çakıl'ın arkasından yukarı doğru yelpaze (dikeyden iki yana 90 derece, uçlarda ±9 derece oynama).
  // Her üçüncü parça yaprak (1, 4, 7), ötekiler taş. dx ve dy piksel, donus derece, gecikme ms, boy piksel.
  function parcaciklar(sayi, tohum) {
    var r = rastgele(tohum), liste = [];
    for (var i = 0; i < sayi; i++) {
      var pay = sayi > 1 ? i / (sayi - 1) - 0.5 : 0;
      var aci = -Math.PI / 2 + pay * Math.PI + (r() - 0.5) * 0.3;
      var uzak = SURE.parcaUzakEnAz + r() * (SURE.parcaUzakEnCok - SURE.parcaUzakEnAz);
      liste.push({
        tur: i % 3 === 1 ? 'yaprak' : 'tas',
        dx: Math.round(Math.cos(aci) * uzak),
        dy: Math.round(Math.sin(aci) * uzak),
        donus: Math.round((r() - 0.5) * 360),
        gecikme: Math.round(r() * SURE.parcaGecikmeEnCok),
        boy: 8 + Math.round(r() * 6)
      });
    }
    return liste;
  }

  // Sayaç adımları: [{ t (ms), deger }]. İlk adım 0'da 0'ı yazar; sona doğru yavaşlar (ease-out'un tersi).
  // Hareketi azaltta ya da son 0 iken tek adım: 0. ms'de son değer.
  function sayacAdimlari(son, az) {
    son = Math.max(0, Math.floor(Number(son) || 0));
    var s = sureler(!!az);
    if (az || son === 0) return [{ t: 0, deger: son }];
    var adim = [{ t: 0, deger: 0 }];
    for (var k = 1; k <= son; k++) {
      adim.push({ t: s.sayacGecikme + Math.round(s.sayacSure * (1 - Math.sqrt(1 - k / son))), deger: k });
    }
    return adim;
  }

  // Kutlama planı (E7): Çakıl zıplar mı, sayaç adımları, parçacıklar, JS'in zamanladığı en geç bitiş (ms).
  // Zıplama CSS'te (index.html --kutla-zipla-anim), ses js/ses.js'te; ikisi test edilirken ayrıca toplanır.
  function kutlamaPlani(dogru, az, tohum) {
    var s = sureler(!!az);
    var sayac = sayacAdimlari(dogru, az);
    var parcalar = az ? [] : parcaciklar(s.parcaSayisi, tohum >>> 0);
    var bitis = sayac[sayac.length - 1].t;
    parcalar.forEach(function (p) { bitis = Math.max(bitis, p.gecikme + s.parcaSure); });
    return { zipla: !az, sayac: sayac, parcalar: parcalar, bitis: bitis };
  }

  // Canlanma döngüsünün n. adımı (1'den başlar): etkin taş her adımda nabız atar; Çakıl tek adımda nefes alır, çiftte göz kırpar.
  function canlanmaAdimi(n) {
    return { nabiz: true, cakil: n % 2 === 0 ? 'kirp' : 'nefes' };
  }

  var api = {
    SINIR: SINIR, SURE: SURE, sureler: sureler, parcaciklar: parcaciklar, sayacAdimlari: sayacAdimlari,
    kutlamaPlani: kutlamaPlani, canlanmaAdimi: canlanmaAdimi
  };
  kok.OGRENME_HAREKET = api;
  if (typeof module !== 'undefined' && module && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
