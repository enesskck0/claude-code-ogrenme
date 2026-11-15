// Servis çalışanı: telefonda ana ekrandan ve internetsiz açılış için (inceleme/2026-11-15-ogrenme-telefon-plani.md bölüm 3).
// index.html onu yalnız file: dışındaki adreste kaydeder; laptopta çift tıklamayla açılışta çalışmaz.
// DOSYALAR: index.html, tanım dosyası, index.html'in yüklediği her betik, arayuz.js'in açtığı gorsel/ çizimleri ve simgeler.
// Liste ogrenme/test/telefon.test.js ile index.html'e ve gorsel/ klasörüne eşit tutulur; yayın kopyası yalnız bu listeyi taşır.
// SURUM yayın kopyasında ogrenme/araclar/yayin_hazirla.py ile içerikten (SHA-256) yazılır; içerik değişince önbellek adı değişir.
// Her istek önce ağdan istenir ve yanıt önbelleğe yazılır; ağ yoksa önbellekten verilir; sayfa önbellekte de yoksa index.html.
'use strict';

var SURUM = '3b8e4f7744c4';
var ONBELLEK = 'ogrenme-' + SURUM;
var DOSYALAR = [
  'index.html',
  'manifest.webmanifest',
  'icerik/birim-01.js',
  'icerik/birim-02.js',
  'icerik/birim-03.js',
  'icerik/birim-04.js',
  'icerik/birim-05.js',
  'icerik/birim-06.js',
  'icerik/birim-07.js',
  'icerik/birim-08.js',
  'icerik/birim-09.js',
  'icerik/birim-10.js',
  'icerik/birim-11.js',
  'icerik/birim-12.js',
  'js/motor.js',
  'js/depo.js',
  'js/ses.js',
  'js/hareket.js',
  'js/dere.js',
  'js/arayuz.js',
  'gorsel/basari-birim-tekrari-bos.svg',
  'gorsel/basari-birim-tekrari.svg',
  'gorsel/basari-ders-10-bos.svg',
  'gorsel/basari-ders-10.svg',
  'gorsel/basari-dogru-100-bos.svg',
  'gorsel/basari-dogru-100.svg',
  'gorsel/basari-hedef-ilk-bos.svg',
  'gorsel/basari-hedef-ilk.svg',
  'gorsel/basari-ilk-birim-bos.svg',
  'gorsel/basari-ilk-birim.svg',
  'gorsel/basari-ilk-ders-bos.svg',
  'gorsel/basari-ilk-ders.svg',
  'gorsel/basari-ogrenilen-25-bos.svg',
  'gorsel/basari-ogrenilen-25.svg',
  'gorsel/basari-seri-30-bos.svg',
  'gorsel/basari-seri-30.svg',
  'gorsel/basari-seri-7-bos.svg',
  'gorsel/basari-seri-7.svg',
  'gorsel/basari-tekrar-50-bos.svg',
  'gorsel/basari-tekrar-50.svg',
  'gorsel/basari-yol-sonu-bos.svg',
  'gorsel/basari-yol-sonu.svg',
  'gorsel/basari-yol-yarisi-bos.svg',
  'gorsel/basari-yol-yarisi.svg',
  'gorsel/cakil-destek.svg',
  'gorsel/cakil-dusunuyor.svg',
  'gorsel/cakil-selam-kirp.svg',
  'gorsel/cakil-selam.svg',
  'gorsel/cakil-sevinc.svg',
  'gorsel/cakil-uykulu.svg',
  'gorsel/simge-180.png',
  'gorsel/simge-192.png',
  'gorsel/simge-512.png'
];

self.addEventListener('install', function (olay) {
  olay.waitUntil(caches.open(ONBELLEK).then(function (onbellek) {
    // cache: 'reload' tarayıcının kendi HTTP önbelleğini atlar; yeni sürüm eski dosyayla kurulmaz.
    return onbellek.addAll(DOSYALAR.map(function (d) { return new Request(d, { cache: 'reload' }); }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (olay) {
  olay.waitUntil(caches.keys().then(function (adlar) {
    return Promise.all(adlar.filter(function (ad) {
      return ad.indexOf('ogrenme-') === 0 && ad !== ONBELLEK;
    }).map(function (ad) { return caches.delete(ad); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (olay) {
  var istek = olay.request;
  if (istek.method !== 'GET' || new URL(istek.url).origin !== self.location.origin) return;
  olay.respondWith(fetch(istek).then(function (yanit) {
    if (yanit && yanit.ok && yanit.type === 'basic') {
      var kopya = yanit.clone();
      olay.waitUntil(caches.open(ONBELLEK).then(function (onbellek) { return onbellek.put(istek, kopya); }));
    }
    return yanit;
  }).catch(function () {
    return caches.open(ONBELLEK).then(function (onbellek) {
      return onbellek.match(istek, { ignoreSearch: true }).then(function (bulunan) {
        if (bulunan) return bulunan;
        if (istek.mode === 'navigate') return onbellek.match(new URL('index.html', self.registration.scope).href);
        return undefined;
      });
    }).then(function (bulunan) { return bulunan || Response.error(); });
  }));
});
