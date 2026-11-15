// Cihazdaki kayıt (ogrenme/ICERIK-BICIMI.md, js/depo.js): tek localStorage anahtarı, sürüm alanlı JSON; dışa ve içe aktarma kodu.
// Dışa verilenler: ANAHTAR, SURUM, KOD_ONEKI, BILDIRIM, saklamaBul, ac, kaydet, disaAktar, kodCoz, iceAktar, crc32
// Durumu motor kurar ve denetler (yeniDurum, durumGecerli parametreyle gelir); depo yalnız saklar. Saat dışarıdan (simdi).
// Kayıt zarfı: {"surum":1,"durum":{...},"yedek":null|{"zaman","neden","metin"}}. Bozuk kayıt ve içe aktarmadan önceki
// kayıt aynı anahtarın "yedek" alanına konur (ikinci anahtar açılmaz). Saklama yoksa bellekte çalışır ve "bellek" bildirir.
// Dışa aktarma kodu tek satır: OGR1.<base64url JSON>.<CRC-32 onaltılık>. Tarayıcıda globalThis.OGRENME_DEPO, Node'da module.exports.
(function (kok) {
  'use strict';

  var ANAHTAR = 'ogrenme-kayit';
  var SURUM = 1;
  var KOD_ONEKI = 'OGR' + SURUM;

  var BILDIRIM = {
    bellek: 'Bu tarayıcı kayıt tutmaya izin vermiyor; ilerlemen sayfa kapanınca silinir. Saklamak için dışa aktarma kodunu kopyala.',
    bozuk: 'Kayıt okunamadı. Eski hali yedeklendi, yeni bir başlangıç açıldı.',
    yedeklenemedi: 'Kayıt okunamadı ve yedeklenecek yer yok. Eski kayda dokunulmadı; bu oturumdaki ilerleme yalnız bellekte.',
    yazilamadi: 'İlerleme kaydedilemedi: tarayıcının saklama alanı dolu ya da kapalı.',
    bicim: 'Kod tanınmadı. Kodun tamamını kopyaladığından emin ol.',
    saglama: 'Kod bozulmuş: bir harfi eksik ya da değişmiş.',
    surum: 'Bu kod uygulamanın başka bir sürümünden.',
    durum: 'Kodun içindeki kayıt okunamadı.'
  };

  function ms(simdi) {
    var t = simdi instanceof Date ? simdi.getTime() : simdi;
    if (typeof t !== 'number' || !isFinite(t)) throw new TypeError('simdi: ms sayısı ya da Date olmalı');
    return t;
  }
  function nesneMi(x) { return x !== null && typeof x === 'object' && !Array.isArray(x); }

  // ---------- sağlama ve kodlama ----------

  var CRC_TABLO = (function () {
    var t = [];
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      t[n] = c >>> 0;
    }
    return t;
  })();
  // CRC-32 (IEEE); metin ASCII (kodun gövdesi base64url).
  function crc32(metin) {
    var c = 0xFFFFFFFF;
    for (var i = 0; i < metin.length; i++) c = CRC_TABLO[(c ^ metin.charCodeAt(i)) & 0xFF] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }
  function hex8(n) { return ('00000000' + n.toString(16)).slice(-8); }

  var ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  function b64Yaz(b) {
    var s = '', i = 0, n;
    for (; i + 2 < b.length; i += 3) {
      n = (b[i] << 16) | (b[i + 1] << 8) | b[i + 2];
      s += ABC[(n >> 18) & 63] + ABC[(n >> 12) & 63] + ABC[(n >> 6) & 63] + ABC[n & 63];
    }
    if (b.length - i === 1) {
      n = b[i] << 16;
      s += ABC[(n >> 18) & 63] + ABC[(n >> 12) & 63];
    } else if (b.length - i === 2) {
      n = (b[i] << 16) | (b[i + 1] << 8);
      s += ABC[(n >> 18) & 63] + ABC[(n >> 12) & 63] + ABC[(n >> 6) & 63];
    }
    return s;
  }
  function b64Oku(s) {
    if (s.length % 4 === 1) return null;
    var cikti = [], tampon = 0, bit = 0;
    for (var i = 0; i < s.length; i++) {
      var v = ABC.indexOf(s.charAt(i));
      if (v < 0) return null;
      tampon = ((tampon << 6) | v) & 0xFFFFFF;
      bit += 6;
      if (bit >= 8) { bit -= 8; cikti.push((tampon >> bit) & 0xFF); }
    }
    return new Uint8Array(cikti);
  }

  // ---------- zarf ----------

  function zarfCoz(ham, dogrula) {
    var z;
    try { z = JSON.parse(ham); } catch (e) { return { tamam: false, neden: 'json' }; }
    if (!nesneMi(z)) return { tamam: false, neden: 'bicim' };
    if (z.surum !== SURUM) return { tamam: false, neden: 'surum' };
    if (!dogrula(z.durum)) return { tamam: false, neden: 'durum' };
    return { tamam: true, durum: z.durum, yedek: nesneMi(z.yedek) ? z.yedek : null };
  }

  // ---------- saklama ----------

  // localStorage'ı dener; yoksa ya da tarayıcı izin vermiyorsa (file://, gizli pencere) null.
  function saklamaBul(ortam) {
    try {
      var s = ortam && ortam.localStorage;
      if (!s) return null;
      var k = ANAHTAR + '-deneme';
      s.setItem(k, '1');
      s.removeItem(k);
      return s;
    } catch (e) {
      return null;
    }
  }

  // secenek: { saklama (saklamaBul sonucu ya da null), yeniDurum(simdi), dogrula(durum) (isteğe bağlı), simdi }.
  // Döner: depo nesnesi { durum, kalici, bildirim: null | 'bellek' | 'bozuk' | 'yedeklenemedi', yedek }.
  function ac(secenek) {
    var s = secenek || {};
    if (typeof s.yeniDurum !== 'function') throw new TypeError('yeniDurum işlevi gerekli');
    var depo = { saklama: s.saklama || null, kalici: false, bildirim: null, durum: null, yedek: null, dogrula: s.dogrula || nesneMi };
    var ham = null, okundu = false;
    if (depo.saklama) {
      try { ham = depo.saklama.getItem(ANAHTAR); okundu = true; } catch (e) { okundu = false; }
    }
    if (!okundu) {
      depo.durum = s.yeniDurum(s.simdi);
      depo.bildirim = 'bellek';
      return depo;
    }
    depo.kalici = true;
    if (ham === null) {
      depo.durum = s.yeniDurum(s.simdi);
      return depo;
    }
    var z = zarfCoz(ham, depo.dogrula);
    if (z.tamam) {
      depo.durum = z.durum;
      depo.yedek = z.yedek;
      return depo;
    }
    // Bozuk ya da bilinmeyen sürüm: ham metin yedeğe, yeni durum. Yazılamazsa eski kayda dokunulmaz, bellekte sürer.
    depo.durum = s.yeniDurum(s.simdi);
    depo.yedek = { zaman: ms(s.simdi), neden: z.neden, metin: ham };
    var k = kaydet(depo, depo.durum);
    if (k.tamam) depo.bildirim = 'bozuk';
    else { depo.kalici = false; depo.bildirim = 'yedeklenemedi'; }
    return depo;
  }

  // Döner: { tamam, kalici, hata?: 'durum' | 'yazilamadi' }. Geçersiz durum yazılmaz.
  function kaydet(depo, durum) {
    if (!depo.dogrula(durum)) return { tamam: false, kalici: depo.kalici, hata: 'durum' };
    depo.durum = durum;
    if (!depo.kalici) return { tamam: true, kalici: false };
    try {
      depo.saklama.setItem(ANAHTAR, JSON.stringify({ surum: SURUM, durum: durum, yedek: depo.yedek }));
      return { tamam: true, kalici: true };
    } catch (e) {
      return { tamam: false, kalici: true, hata: 'yazilamadi' };
    }
  }

  // ---------- dışa ve içe aktarma ----------

  function disaAktar(durum) {
    var govde = b64Yaz(new TextEncoder().encode(JSON.stringify({ surum: SURUM, durum: durum })));
    return KOD_ONEKI + '.' + govde + '.' + hex8(crc32(govde));
  }

  // Döner: { tamam: true, durum } ya da { tamam: false, hata: 'bicim' | 'saglama' | 'surum' | 'durum' }.
  // Yapıştırmada araya giren boşluk ve satır sonu atılır.
  function kodCoz(kod, dogrula) {
    dogrula = dogrula || nesneMi;
    if (typeof kod !== 'string') return { tamam: false, hata: 'bicim' };
    var p = kod.replace(/\s+/g, '').split('.');
    if (p.length !== 3 || !/^OGR\d+$/.test(p[0])) return { tamam: false, hata: 'bicim' };
    if (p[0] !== KOD_ONEKI) return { tamam: false, hata: 'surum' };
    var sag = p[2].toLowerCase();
    if (!p[1] || !/^[0-9a-f]{8}$/.test(sag)) return { tamam: false, hata: 'bicim' };
    if (hex8(crc32(p[1])) !== sag) return { tamam: false, hata: 'saglama' };
    var b = b64Oku(p[1]);
    if (!b) return { tamam: false, hata: 'bicim' };
    var json;
    try { json = new TextDecoder('utf-8', { fatal: true }).decode(b); } catch (e) { return { tamam: false, hata: 'bicim' }; }
    var z = zarfCoz(json, dogrula);
    if (!z.tamam) return { tamam: false, hata: z.neden === 'surum' ? 'surum' : 'durum' };
    return { tamam: true, durum: z.durum };
  }

  // Kodu çözer, geçerliyse bu cihazdaki durumu yedeğe koyup yenisini yazar. Yazılamazsa hiçbir şey değişmez.
  function iceAktar(depo, kod, simdi) {
    var c = kodCoz(kod, depo.dogrula);
    if (!c.tamam) return c;
    var oncekiYedek = depo.yedek, oncekiDurum = depo.durum;
    depo.yedek = { zaman: ms(simdi), neden: 'ice-aktarma', metin: JSON.stringify(oncekiDurum) };
    var k = kaydet(depo, c.durum);
    if (!k.tamam) {
      depo.yedek = oncekiYedek;
      depo.durum = oncekiDurum;
      return { tamam: false, hata: k.hata };
    }
    return { tamam: true, durum: c.durum, kalici: k.kalici };
  }

  var api = {
    ANAHTAR: ANAHTAR,
    SURUM: SURUM,
    KOD_ONEKI: KOD_ONEKI,
    BILDIRIM: BILDIRIM,
    saklamaBul: saklamaBul,
    ac: ac,
    kaydet: kaydet,
    disaAktar: disaAktar,
    kodCoz: kodCoz,
    iceAktar: iceAktar,
    crc32: crc32
  };
  kok.OGRENME_DEPO = api;
  if (typeof module !== 'undefined' && module && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
