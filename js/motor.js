// Öğrenme motoru: saf mantık, ekrana dokunmaz (ogrenme/ICERIK-BICIMI.md; kurallar inceleme/2026-11-15-ogrenme-arastirmasi-2-b.md T1-T10 ve beynin kararları).
// Dışa verilenler: AYARLAR, gunAnahtari, gunEkle, gunFarki, haftaBasi, icerikDizini, yeniDurum, durumGecerli, dersSorulari, dersAkisi, yol, dersBaslat, siradakiKart, kartGec, dersIlerleme, tekrarBaslat, birimTekrariBaslat, yerlesimBirimleri, yerlesimBaslat, birimSinaviBaslat, mevcutSoru, soruGorunumu, ipucuAl, cevapla, oturumBitir, acilis, seriBilgisi, onarimHakki, gunlukHedef, hedefAyarla, vadesiGelenler, tekrarSonucu, ogrenildiMi, puan, anlasilmadiIsaretle, anlasilmadiOrani, yerlesimGeriAl, yerlesimBilgisi, BASARILAR, basariDurumu, basariGuncelle, haftalikOzet
// Saat (simdi: ms ya da Date) ve rastgelelik (tohum: sayı) parametreyle gelir. Durum ve oturum değiştirilmez, yenisi döner.
// Gün sınırı cihazın yerel gece yarısı, hafta pazartesi başlar. Tekrar birimi soru (içerikte kavram alanı yok).
// Tarayıcıda klasik betik: globalThis.OGRENME_MOTOR. Node'da: module.exports. Dış kütüphane yok.
(function (kok) {
  'use strict';

  // Sayıların kaynağı: araştırma 2-b satır 95-170 (T1-T10) ve beynin kararları.
  var AYARLAR = {
    kutuAralik: [1, 3, 7, 16, 35],  // T3: kutu 1-5 aralığı (gün); kutu 5'ten sonra 35 günde bir
    tekrarTavani: 12,               // T3, karar 1: günde en çok 12 soru tekrar
    boslukMs: 2 * 60 * 1000,        // T5: iki cevap arası 2 dakikadan uzun boşluk sayılmaz
    hedefDakika: 15,                // T5: varsayılan günlük hedef
    hedefSecenek: [5, 10, 15, 20],  // T5: ayarlanabilir değerler
    seriTekrarSoru: 5,              // T4: seri günü için tekrar oturumu en az 5 soru
    kopusGun: 3,                    // T4: üç gün ve üstü ara seriyi sıfırlar
    donumNoktalari: [7, 30, 100],   // T4
    yerlesimSoru: 4,                // KARARLAR 1411: seviye belirlemede birim başına en çok 4 soru
    yerlesimGecme: 3,               // KARARLAR 1411: 3 doğru birimi geçirir (2. yanlışta birim biter)
    birimSinaviSoru: 5,             // KARARLAR 1411: birimi sınavla geç, 5 soru
    birimSinaviGecme: 4,            // KARARLAR 1411: 4 doğru yeter (2. yanlışta biter)
    yerlesimKutu: 2,                // T3, T6: sınavla geçilen soru kutu 2'ye girer
    ogrenildiGun: 3,                // T3, karar 1: 3 ayrı günde ilk denemede doğru
    ogrenildiKutu: 4,               // T3: kutu 4'e ulaşmış
    kisiselTekrarAralik: 3,         // T10: her 2-3 dersten sonra kişisel tekrar (3 alındı)
    birimTekrariSoru: 10,           // T10 karışık birim tekrarı; sayı T'de yok, T1 ders üst sınırı (10) alındı
    haftaGun: 7,                    // TASARIM bölüm 11: son yedi gün sayfası, bugün dahil 7 takvim günü
    gecmisGun: 35,                  // TASARIM bölüm 11: cevap geçmişinde bugün dahil son 35 gün kalır, eskisi budanır
    zorlananEnCok: 3                // TASARIM bölüm 11: en çok zorlanılan en çok 3 ders
  };
  AYARLAR.kutuAralik = Object.freeze(AYARLAR.kutuAralik);
  AYARLAR.hedefSecenek = Object.freeze(AYARLAR.hedefSecenek);
  AYARLAR.donumNoktalari = Object.freeze(AYARLAR.donumNoktalari);
  Object.freeze(AYARLAR);

  var TURLER = { 'coktan': true, 'dogru-yanlis': true, 'bosluk': true, 'eslestir': true, 'sirala': true };
  var SECMELI = { 'coktan': true, 'bosluk': true };   // ikinci denemede ilk seçilen yanlış pasif (T7 madde 6)
  var URETIM = { 'bosluk': true, 'sirala': true };    // T2 soru 5-6: yönlendirilmiş üretim

  // ---------- zaman ve gün ----------

  function ms(simdi) {
    var t = simdi instanceof Date ? simdi.getTime() : simdi;
    if (typeof t !== 'number' || !isFinite(t)) throw new TypeError('simdi: ms sayısı ya da Date olmalı');
    return t;
  }
  function iki(n) { return (n < 10 ? '0' : '') + n; }
  function gunAnahtari(simdi) {
    var d = new Date(ms(simdi));
    return d.getFullYear() + '-' + iki(d.getMonth() + 1) + '-' + iki(d.getDate());
  }
  function gunNo(gun) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(gun);
    if (!m) throw new TypeError('gün YYYY-AA-GG olmalı: ' + gun);
    return Math.round(Date.UTC(+m[1], +m[2] - 1, +m[3]) / 86400000);
  }
  function nodanGun(n) {
    var d = new Date(n * 86400000);
    return d.getUTCFullYear() + '-' + iki(d.getUTCMonth() + 1) + '-' + iki(d.getUTCDate());
  }
  function gunEkle(gun, n) { return nodanGun(gunNo(gun) + n); }
  function gunFarki(a, b) { return gunNo(b) - gunNo(a); }
  function haftaBasi(gun) {
    var n = gunNo(gun);
    var hg = new Date(n * 86400000).getUTCDay(); // 0 pazar, 1 pazartesi
    return nodanGun(n - ((hg + 6) % 7));
  }

  // ---------- rastgelelik (tohumlu) ----------

  function rastgele(tohum) {
    if (typeof tohum !== 'number' || !isFinite(tohum)) throw new TypeError('tohum sayı olmalı');
    var a = Math.floor(Math.abs(tohum)) >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function karistir(dizi, rnd) {
    var d = dizi.slice();
    for (var i = d.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var g = d[i]; d[i] = d[j]; d[j] = g;
    }
    return d;
  }
  function sirali(n) { var d = []; for (var i = 0; i < n; i++) d.push(i); return d; }
  // Sıralama ve eşleştirmede karışık sıra doğru sıranın aynısı çıkarsa bir kaydırılır (soru kendiliğinden çözülmüş görünmesin).
  function karisikSira(n, rnd) {
    var d = karistir(sirali(n), rnd);
    if (n > 1 && d.every(function (x, i) { return x === i; })) d.push(d.shift());
    return d;
  }
  function kopya(x) { return JSON.parse(JSON.stringify(x)); }
  function nesne(x) { return x !== null && typeof x === 'object' && !Array.isArray(x); }

  // ---------- içerik dizini ----------

  // birimler: globalThis.OGRENME_ICERIK dizisi. Birimler sira alanına göre, dersler dosyadaki sırayla yol sırasıdır.
  function icerikDizini(birimler) {
    var liste = (birimler || []).map(function (b, i) { return { b: b, i: i }; });
    liste.sort(function (x, y) { return (x.b.sira - y.b.sira) || (x.i - y.i); });
    var dizin = { birimler: [], birimMap: {}, dersler: [], dersMap: {}, soruMap: {}, soruDers: {}, soruBirim: {} };
    liste.forEach(function (x) {
      var b = x.b;
      var bk = { id: b.id, baslik: b.baslik, dersIdleri: [] };
      (b.dersler || []).forEach(function (d) {
        // kartSayisi: anlatım kartı sayısı (TASARIM bölüm 14: kartlı ders akışı).
        var dk = { id: d.id, baslik: d.baslik, birimId: b.id, sira: dizin.dersler.length, soruIdleri: [],
          kartSayisi: Array.isArray(d.anlatim) ? d.anlatim.length : 0 };
        (d.sorular || []).forEach(function (s) {
          dizin.soruMap[s.id] = s;
          dizin.soruDers[s.id] = d.id;
          dizin.soruBirim[s.id] = b.id;
          dk.soruIdleri.push(s.id);
        });
        dizin.dersler.push(dk);
        dizin.dersMap[d.id] = dk;
        bk.dersIdleri.push(d.id);
      });
      dizin.birimler.push(bk);
      dizin.birimMap[b.id] = bk;
    });
    return dizin;
  }

  // ---------- durum ----------

  function yeniDurum(simdi) {
    return {
      surum: 1,
      olusturma: gunAnahtari(simdi),
      ayarlar: { hedefDakika: AYARLAR.hedefDakika },
      dersler: {},       // dersId -> { durum: 'tamam' | 'atlandi', gun, kaynak? }
      birimTekrari: {},  // birimId -> gün
      tekrar: {},        // soruId -> { kutu, vade, enYuksekKutu, sonTekrar, kaynak }
      sorular: {},       // soruId -> { gorulme, ilkDogruGunler: [], anlasilmadi }
      gunluk: {},        // gün -> { sureMs, tekrarSayisi, hedefTamam }
      seri: { sayi: 0, enUzun: 0, sonGun: null, onarimHaftasi: null, takvim: {} },
      yerlesim: null,
      basarilar: {},     // işaret kodu -> kazanıldığı gün (TASARIM bölüm 10); 15.11 biçimindeki kayıtta yok
      gecmis: {}         // gün -> dersId -> { cevap, dogru, yanlis, anlasilmadi } (TASARIM bölüm 11); 15.11 biçimlerinde yok
    };
  }

  function gunMu(x) { return typeof x === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x); }
  function tamSayi(x) { return typeof x === 'number' && Math.floor(x) === x && x >= 0; }
  function durumGecerli(d) {
    if (!nesne(d) || d.surum !== 1) return false;
    if (!nesne(d.ayarlar) || AYARLAR.hedefSecenek.indexOf(d.ayarlar.hedefDakika) < 0) return false;
    var alanlar = ['dersler', 'birimTekrari', 'tekrar', 'sorular', 'gunluk'];
    for (var i = 0; i < alanlar.length; i++) if (!nesne(d[alanlar[i]])) return false;
    var s = d.seri;
    if (!nesne(s) || !tamSayi(s.sayi) || !tamSayi(s.enUzun) || !nesne(s.takvim)) return false;
    if (s.sonGun !== null && !gunMu(s.sonGun)) return false;
    if (s.onarimHaftasi !== null && !gunMu(s.onarimHaftasi)) return false;
    var ids = Object.keys(d.tekrar);
    for (var j = 0; j < ids.length; j++) {
      var k = d.tekrar[ids[j]];
      if (!nesne(k) || !tamSayi(k.kutu) || k.kutu < 1 || k.kutu > 5 || !gunMu(k.vade)) return false;
    }
    var sids = Object.keys(d.sorular);
    for (var m = 0; m < sids.length; m++) {
      var q = d.sorular[sids[m]];
      if (!nesne(q) || !tamSayi(q.gorulme) || !Array.isArray(q.ilkDogruGunler) || !tamSayi(q.anlasilmadi)) return false;
    }
    if (d.yerlesim !== null && !nesne(d.yerlesim)) return false;
    // TASARIM bölüm 13: kalanBirimler ve sonuclar isteğe bağlı (bu sürümden önceki biçim { gun, gecilenBirimler, takilanBirim } geçerli kalır).
    if (d.yerlesim !== null) {
      var y = d.yerlesim;
      if (y.kalanBirimler !== undefined && !Array.isArray(y.kalanBirimler)) return false;
      if (y.sonuclar !== undefined) {
        if (!nesne(y.sonuclar)) return false;
        var yids = Object.keys(y.sonuclar);
        for (var yi = 0; yi < yids.length; yi++) {
          var ys = y.sonuclar[yids[yi]];
          if (!nesne(ys) || !tamSayi(ys.dogru) || !tamSayi(ys.sorulan) || ys.dogru > ys.sorulan) return false;
        }
      }
    }
    // basarilar isteğe bağlı: 15.11 biçimindeki kayıtta ve kodda yok, o kayıt geçerli kalır.
    if (d.basarilar !== undefined) {
      if (!nesne(d.basarilar)) return false;
      var bids = Object.keys(d.basarilar);
      for (var n = 0; n < bids.length; n++) if (!gunMu(d.basarilar[bids[n]])) return false;
    }
    // gecmis isteğe bağlı (TASARIM bölüm 11): 15.11 sabah ve akşam biçimindeki kayıtta yok, o kayıt geçerli kalır.
    if (d.gecmis !== undefined) {
      if (!nesne(d.gecmis)) return false;
      var gler = Object.keys(d.gecmis);
      for (var p = 0; p < gler.length; p++) {
        var gk = d.gecmis[gler[p]];
        if (!gunMu(gler[p]) || !nesne(gk)) return false;
        var dids = Object.keys(gk);
        for (var r = 0; r < dids.length; r++) {
          var dk = gk[dids[r]];
          if (!nesne(dk) || !tamSayi(dk.cevap) || !tamSayi(dk.dogru) || !tamSayi(dk.yanlis) || !tamSayi(dk.anlasilmadi)) return false;
        }
      }
    }
    return true;
  }

  function soruKayit(d, id) {
    return d.sorular[id] || (d.sorular[id] = { gorulme: 0, ilkDogruGunler: [], anlasilmadi: 0 });
  }
  function gunlukKayit(d, gun) {
    return d.gunluk[gun] || (d.gunluk[gun] = { sureMs: 0, tekrarSayisi: 0, hedefTamam: false });
  }
  // Cevap geçmişi (TASARIM bölüm 11): alan yoksa açılır (15.11 biçimindeki kayıt); her yazışta bugünden gecmisGun gün
  // ve daha eski günler silinir, kayıt şişmez. gunluk budanmaz (işaretler bütün günleri sayar).
  function gecmisKayit(d, gun, dersId) {
    if (!nesne(d.gecmis)) d.gecmis = {};
    Object.keys(d.gecmis).forEach(function (g) { if (gunFarki(g, gun) >= AYARLAR.gecmisGun) delete d.gecmis[g]; });
    var gk = d.gecmis[gun] || (d.gecmis[gun] = {});
    return gk[dersId] || (gk[dersId] = { cevap: 0, dogru: 0, yanlis: 0, anlasilmadi: 0 });
  }
  function dersBittiMi(durum, dersId) { return !!durum.dersler[dersId]; } // tamam ya da atlandi
  function birimBittiMi(dizin, durum, birimId) {
    return dizin.birimMap[birimId].dersIdleri.every(function (id) { return dersBittiMi(durum, id); });
  }

  // ---------- ders içi sıra (T2, karar 3 ve 02:53 düzeltmesi) ----------

  // Doğru-yanlış dışı sorular T2 tür sırasıyla: ilk 2 çoktan seçmeli (tanıma), eşleştirme, boşluk (kelime bankası),
  // sıralama, kalan çoktan seçmeli (okuma ve zor uygulama). Aynı grupta yazarın sırası korunur.
  // Doğru-yanlışların hepsi sorulur: ilk iki sıraya konmaz, art arda gelmez (yer yetmezse kalanı sona eklenir).
  function dySerpistir(digerleri, dyler) {
    var sonuc = [], k = 0;
    for (var i = 0; i < digerleri.length; i++) {
      sonuc.push(digerleri[i]);
      if (i >= 1 && k < dyler.length) sonuc.push(dyler[k++]);
    }
    while (k < dyler.length) sonuc.push(dyler[k++]);
    return sonuc;
  }
  function dersSorulari(dizin, dersId) {
    var ders = dizin.dersMap[dersId];
    if (!ders) throw new Error('ders yok: ' + dersId);
    return turSirasi(dizin, ders.soruIdleri);
  }
  // dersSorulari'nın kuralı, verilen soru listesine (bütün ders ya da tek kartın soruları) uygulanır.
  function turSirasi(dizin, ids) {
    var gruplar = [[], [], [], [], []], dyler = [], coktan = 0;
    ids.forEach(function (id) {
      var tur = dizin.soruMap[id].tur;
      if (tur === 'dogru-yanlis') dyler.push(id);
      else if (tur === 'coktan') { gruplar[coktan < 2 ? 0 : 4].push(id); coktan++; }
      else if (tur === 'eslestir') gruplar[1].push(id);
      else if (tur === 'bosluk') gruplar[2].push(id);
      else if (tur === 'sirala') gruplar[3].push(id);
    });
    return dySerpistir([].concat.apply([], gruplar), dyler);
  }

  function dyMi(dizin, id) { return dizin.soruMap[id].tur === 'dogru-yanlis'; }

  // TASARIM bölüm 14: kart ve hemen sorusu. Sorunun kart alanı geçerli mi (tam sayı, 0 ile kart sayısı arası).
  function kartGecerli(k, kartSayisi) { return typeof k === 'number' && Math.floor(k) === k && k >= 0 && k < kartSayisi; }
  // Döner: { kartli, sira: soru kimlikleri, once: { soruId: [kart no] } (o sorudan hemen önce gösterilecek kartlar),
  // son: [kart no] (son sorudan sonra; sorusu olmayan son kartlar ya da hiç soru yoksa bütün kartlar) }.
  // Dersin bütün sorularında geçerli kart varsa kart 0, kart 1, kart 0'ın soruları, kart 2, kart 1'in soruları ... son kartın
  // soruları en sonda (bir kart gecikme); yoksa (ya da yarım kullanımda) önce bütün
  // kartlar, sonra dersSorulari sırası. Yarım ya da geçersiz kullanımı içerik denetimi yakalar; burada eski akışa düşülür.
  function dersAkisi(dizin, dersId) {
    var ders = dizin.dersMap[dersId];
    if (!ders) throw new Error('ders yok: ' + dersId);
    var K = ders.kartSayisi || 0;
    var kartli = K > 0 && ders.soruIdleri.length > 0 && ders.soruIdleri.every(function (id) { return kartGecerli(dizin.soruMap[id].kart, K); });
    var sira = [], once = {}, bekleyen = [];
    if (kartli) {
      // Bir kart gecikme (KARARLAR 1567'nin yan sohbeti, 24.11): kart k'nın soruları kart k+1'den sonra gelir; son kartın
      // soruları en sonda. Cevap az önce okunan cümleden okunmasın diye.
      var gruplar = [];
      for (var g = 0; g < K; g++) {
        gruplar.push(turSirasi(dizin, ders.soruIdleri.filter(function (id) { return dizin.soruMap[id].kart === g; })));
      }
      var grupEkle = function (grup) {
        if (!grup.length) return;
        if (bekleyen.length) { once[grup[0]] = bekleyen; bekleyen = []; }
        sira = sira.concat(grup);
      };
      for (var k = 0; k < K; k++) {
        bekleyen.push(k);
        if (k >= 1) grupEkle(gruplar[k - 1]);
      }
      grupEkle(gruplar[K - 1]);
    } else {
      sira = dersSorulari(dizin, dersId);
      bekleyen = sirali(K);
      if (sira.length && K) { once[sira[0]] = bekleyen; bekleyen = []; }
    }
    return { kartli: kartli, sira: sira, once: once, son: bekleyen };
  }

  // T1, karar 3: önceki derslerden 1 eski soru; ilk 2 ve son 2 sıraya konmaz; doğru-yanlışsa yanında doğru-yanlış olmaz.
  // Döner: { sira: soru kimlikleri, eskiKonum: eski sorunun sıra no'su ya da -1 }.
  function eskiSoruEkle(dizin, ders, ids, rnd) {
    var L = ids.length + 1, yok = { sira: ids.slice(), eskiKonum: -1 };
    if (L < 5 || ders.sira === 0) return yok;
    var adaylar = [];
    for (var i = 0; i < ders.sira; i++) {
      dizin.dersler[i].soruIdleri.forEach(function (id) { if (TURLER[dizin.soruMap[id].tur]) adaylar.push(id); });
    }
    adaylar = karistir(adaylar, rnd);
    for (var a = 0; a < adaylar.length; a++) {
      var eski = adaylar[a], yerler = [];
      for (var y = 2; y <= L - 3; y++) {
        if (dyMi(dizin, eski) && ((y > 0 && dyMi(dizin, ids[y - 1])) || (y < ids.length && dyMi(dizin, ids[y])))) continue;
        yerler.push(y);
      }
      if (yerler.length) {
        var konum = yerler[Math.floor(rnd() * yerler.length)];
        var sonuc = ids.slice();
        sonuc.splice(konum, 0, eski);
        return { sira: sonuc, eskiKonum: konum };
      }
    }
    return yok;
  }

  // ---------- oturum ----------

  function oge(soruId, rol, birimId) {
    return { soru: soruId, rol: rol, birim: birimId || null, deneme: 0, ipucu: false, ilkYanlis: null, sonuc: null };
  }
  function yeniOturum(tur, hedef, ogeler, simdi) {
    var t = ms(simdi);
    return { tur: tur, hedef: hedef, baslangic: t, sonOlay: t, ogeler: ogeler, konum: 0, bitti: ogeler.length === 0 };
  }
  function sinavMi(o) { return o.tur === 'yerlesim' || o.tur === 'birim-sinavi'; }

  function dersAcik(dizin, durum, dersId) {
    var d = dizin.dersMap[dersId];
    if (dersBittiMi(durum, dersId)) return true;
    return d.sira === 0 || dersBittiMi(durum, dizin.dersler[d.sira - 1].id);
  }

  function dersBaslat(dizin, durum, dersId, simdi, tohum) {
    var ders = dizin.dersMap[dersId];
    if (!ders) throw new Error('ders yok: ' + dersId);
    if (!dersAcik(dizin, durum, dersId)) throw new Error('ders kilitli: ' + dersId);
    var rnd = rastgele(tohum);
    var a = dersAkisi(dizin, dersId);
    var e = eskiSoruEkle(dizin, ders, a.sira, rnd);
    var ogeler = e.sira.map(function (id, i) { return oge(id, i === e.eskiKonum ? 'eski' : 'ders'); });
    // TASARIM bölüm 14: kartPlan[i] = { kart, once }: kart, sıra no'su "once" olan sorudan hemen önce gösterilir
    // (once = asıl soru sayısı: son sorudan sonra). Eski soru ve sona eklenen yeniden soru kart taşımaz.
    var plan = [];
    e.sira.forEach(function (id, i) {
      if (i !== e.eskiKonum && a.once[id]) a.once[id].forEach(function (k) { plan.push({ kart: k, once: i }); });
    });
    a.son.forEach(function (k) { plan.push({ kart: k, once: e.sira.length }); });
    var o = yeniOturum('ders', dersId, ogeler, simdi);
    o.kartPlan = plan;
    o.kartGecilen = 0;
    o.kartToplam = ders.kartSayisi || 0;
    return o;
  }

  // Şimdi gösterilecek kartın sıra no'su (0'dan) ya da null (sıra soruda). Kartsız oturumda (tekrar, sınav) hep null.
  function siradakiKart(oturum) {
    if (!oturum || !Array.isArray(oturum.kartPlan)) return null;
    var p = oturum.kartPlan[oturum.kartGecilen];
    return p && p.once <= oturum.konum ? p.kart : null;
  }
  // Gösterilen kartı geçer; yeni oturum döner (eskisi değişmez).
  function kartGec(oturum) {
    if (siradakiKart(oturum) === null) throw new Error('sırada kart yok');
    var o = kopya(oturum);
    o.kartGecilen++;
    return o;
  }
  // İlerleme çubuğunun oranı: (geçilen kart + kesinleşen soru) / (kart + soru). Yeniden soru payı ve paydayı birlikte
  // artırır, çubuk geri gitmez; ders bitip kartlar geçilince 1.
  function dersIlerleme(oturum) {
    if (!oturum || !oturum.ogeler) return 0;
    var kart = Array.isArray(oturum.kartPlan) ? oturum.kartPlan.length : 0;
    var gecilen = Array.isArray(oturum.kartPlan) ? oturum.kartGecilen : 0;
    var toplam = kart + oturum.ogeler.length;
    return toplam ? (gecilen + oturum.konum) / toplam : 0;
  }

  // T3: vadesi gelen sorular, en gecikmiş önce.
  function vadesiGelenler(durum, simdi) {
    var gun = gunAnahtari(simdi);
    return Object.keys(durum.tekrar).filter(function (id) {
      return gunFarki(durum.tekrar[id].vade, gun) >= 0;
    }).sort(function (a, b) {
      var f = gunFarki(durum.tekrar[b].vade, durum.tekrar[a].vade);
      return f !== 0 ? f : a.localeCompare(b, 'en', { numeric: true });
    });
  }

  // T3, karar 1: günde en çok 12 soru; fazlası vadesinde kalır, ertesi gün en gecikmişten başlanır.
  function tekrarBaslat(dizin, durum, simdi) {
    var gun = gunAnahtari(simdi);
    var yapilan = (durum.gunluk[gun] && durum.gunluk[gun].tekrarSayisi) || 0;
    var kalan = Math.max(0, AYARLAR.tekrarTavani - yapilan);
    var ids = vadesiGelenler(durum, simdi).filter(function (id) {
      return dizin.soruMap[id] && TURLER[dizin.soruMap[id].tur];
    }).slice(0, kalan);
    return yeniOturum('tekrar', null, ids.map(function (id) { return oge(id, 'tekrar'); }), simdi);
  }

  // T10: birimin bütün dersleri bitince karışık birim tekrarı.
  function birimTekrariBaslat(dizin, durum, birimId, simdi, tohum) {
    var b = dizin.birimMap[birimId];
    if (!b) throw new Error('birim yok: ' + birimId);
    if (!b.dersIdleri.every(function (id) { return dersBittiMi(durum, id); })) throw new Error('birim tekrarı kilitli: ' + birimId);
    var rnd = rastgele(tohum);
    var havuzlar = b.dersIdleri.map(function (d) { return karistir(dersSorulari(dizin, d), rnd); });
    var secilen = [];
    while (secilen.length < AYARLAR.birimTekrariSoru && havuzlar.some(function (h) { return h.length; })) {
      havuzlar.forEach(function (h) { if (secilen.length < AYARLAR.birimTekrariSoru && h.length) secilen.push(h.shift()); });
    }
    secilen = karistir(secilen, rnd);
    var sira = dySerpistir(secilen.filter(function (id) { return !dyMi(dizin, id); }), secilen.filter(function (id) { return dyMi(dizin, id); }));
    return yeniOturum('birim-tekrari', birimId, sira.map(function (id) { return oge(id, 'ders'); }), simdi);
  }

  // T6: birimin farklı derslerinden soru; en az 1 üretim (boşluk ya da sıralama); doğru-yanlış yok (2 seçenek tahmine açık, T2 ve T7 madde 6 dayanağı B8).
  function sinavaUygun(dizin, id) { var t = dizin.soruMap[id].tur; return !!TURLER[t] && t !== 'dogru-yanlis'; }
  function sinavSoruSayisi(dizin, birimId) {
    var n = 0;
    dizin.birimMap[birimId].dersIdleri.forEach(function (d) {
      dizin.dersMap[d].soruIdleri.forEach(function (id) { if (sinavaUygun(dizin, id)) n++; });
    });
    return n;
  }
  function sinavSorulari(dizin, birimId, adet, rnd) {
    var b = dizin.birimMap[birimId];
    var havuzlar = karistir(b.dersIdleri, rnd).map(function (d) {
      return {
        ids: karistir(dizin.dersMap[d].soruIdleri.filter(function (id) { return sinavaUygun(dizin, id); }), rnd),
        kullanildi: false
      };
    });
    var secilen = [];
    for (var i = 0; i < havuzlar.length && secilen.length < adet; i++) {
      var k = havuzlar[i].ids.findIndex(function (id) { return URETIM[dizin.soruMap[id].tur]; });
      if (k >= 0) { secilen.push(havuzlar[i].ids.splice(k, 1)[0]); havuzlar[i].kullanildi = true; break; }
    }
    havuzlar.forEach(function (h) {
      if (secilen.length < adet && !h.kullanildi && h.ids.length) { secilen.push(h.ids.shift()); h.kullanildi = true; }
    });
    while (secilen.length < adet && havuzlar.some(function (h) { return h.ids.length; })) {
      havuzlar.forEach(function (h) { if (secilen.length < adet && h.ids.length) secilen.push(h.ids.shift()); });
    }
    return karistir(secilen, rnd);
  }

  // TASARIM bölüm 13: sınav oturumu birim birim; her birimin soru sayısı, geçme eşiği (soru sayısını aşmaz), doğru ve sorulan sayısı.
  // Soru sayısı 0 olan birim oturuma girmez.
  function sinavOturumu(dizin, tur, hedef, birimIdleri, adet, esik, simdi, rnd) {
    var ogeler = [], sira = [], sonuc = {};
    birimIdleri.forEach(function (bId) {
      var ids = sinavSorulari(dizin, bId, adet, rnd);
      if (!ids.length) return;
      sira.push(bId);
      sonuc[bId] = { soru: ids.length, esik: Math.min(esik, ids.length), dogru: 0, sorulan: 0 };
      ids.forEach(function (id) { ogeler.push(oge(id, 'sinav', bId)); });
    });
    var o = yeniOturum(tur, hedef, ogeler, simdi);
    o.birimler = sira;
    o.birimSonuc = sonuc;
    o.gecilenBirimler = [];
    o.kalanBirimler = [];
    return o;
  }

  // TASARIM bölüm 13: konu seçme listesi, yol sırasıyla. bitti: bütün dersleri tamam ya da atlandı; secilebilir: bitmemiş ve sorusu var.
  function yerlesimBirimleri(dizin, durum) {
    return dizin.birimler.map(function (b) {
      var bitti = birimBittiMi(dizin, durum, b.id), soru = sinavSoruSayisi(dizin, b.id);
      return { birim: b.id, baslik: b.baslik, bitti: bitti, soru: soru, secilebilir: !bitti && soru > 0 };
    });
  }

  // KARARLAR 1411: yalnız seçilen birimler, yol sırasıyla. birimIdleri verilmezse seçilebilir birimlerin hepsi.
  function yerlesimBaslat(dizin, durum, simdi, tohum, birimIdleri) {
    var rnd = rastgele(tohum);
    var secilebilir = yerlesimBirimleri(dizin, durum).filter(function (x) { return x.secilebilir; }).map(function (x) { return x.birim; });
    var istenen = birimIdleri === undefined ? secilebilir : birimIdleri;
    if (!Array.isArray(istenen)) throw new TypeError('birimIdleri dizi olmalı');
    istenen.forEach(function (id) {
      if (!dizin.birimMap[id]) throw new Error('birim yok: ' + id);
      if (secilebilir.indexOf(id) < 0) throw new Error('birim seçilemez (dersleri bitmiş ya da sorusu yok): ' + id);
    });
    var sirali = secilebilir.filter(function (id) { return istenen.indexOf(id) >= 0; });
    return sinavOturumu(dizin, 'yerlesim', null, sirali, AYARLAR.yerlesimSoru, AYARLAR.yerlesimGecme, simdi, rnd);
  }

  // KARARLAR 1411: "bu birimi sınavla geç" bütün dersleri bitmemiş her birim için; 5 soru, 4 doğru yeter.
  function birimSinaviBaslat(dizin, durum, birimId, simdi, tohum) {
    if (!dizin.birimMap[birimId]) throw new Error('birim yok: ' + birimId);
    if (birimBittiMi(dizin, durum, birimId)) throw new Error('birim sınavı yalnız dersleri bitmemiş birim için: ' + birimId);
    if (!sinavSoruSayisi(dizin, birimId)) throw new Error('birim sınavı için soru yok: ' + birimId);
    var rnd = rastgele(tohum);
    return sinavOturumu(dizin, 'birim-sinavi', birimId, [birimId], AYARLAR.birimSinaviSoru, AYARLAR.birimSinaviGecme, simdi, rnd);
  }

  // ---------- gösterim (karar 5: seçenek sırası her gösterimde tohumla karışır, cevap asıl sıra numarasıyla verilir) ----------

  function soruGorunumu(soru, tohum, pasif) {
    var rnd = rastgele(tohum);
    var g = { id: soru.id, tur: soru.tur, soru: soru.soru };
    if (SECMELI[soru.tur]) {
      g.secenekler = karistir(sirali(soru.secenekler.length), rnd).map(function (i) {
        return { metin: soru.secenekler[i], asil: i, pasif: pasif === i };
      });
    } else if (soru.tur === 'dogru-yanlis') {
      g.secenekler = [{ metin: 'Doğru', asil: true, pasif: false }, { metin: 'Yanlış', asil: false, pasif: false }];
    } else if (soru.tur === 'eslestir') {
      g.sol = soru.ciftler.map(function (c, i) { return { metin: c[0], asil: i }; });
      g.sag = karisikSira(soru.ciftler.length, rnd).map(function (i) { return { metin: soru.ciftler[i][1], asil: i }; });
    } else if (soru.tur === 'sirala') {
      g.adimlar = karisikSira(soru.adimlar.length, rnd).map(function (i) { return { metin: soru.adimlar[i], asil: i }; });
    }
    return g;
  }

  function mevcutSoru(dizin, oturum, tohum) {
    if (oturum.bitti) return null;
    var og = oturum.ogeler[oturum.konum];
    var soru = dizin.soruMap[og.soru];
    var g = soruGorunumu(soru, tohum, og.ilkYanlis);
    g.rol = og.rol;
    g.deneme = og.deneme;
    g.sira = oturum.konum + 1;
    g.toplam = oturum.ogeler.length;
    g.ipucuVar = !sinavMi(oturum) && !!soru.ipucu;  // T6: sınavda ipucu yok
    if (sinavMi(oturum) && oturum.birimSonuc && oturum.birimSonuc[og.birim]) {
      // TASARIM bölüm 13: hangi konu (kaçıncı, toplam) ve o konudaki soru sırası (birimin en çok soru sayısı içinde).
      var bs = oturum.birimSonuc[og.birim];
      g.birim = og.birim;
      g.konu = oturum.birimler.indexOf(og.birim) + 1;
      g.konuToplam = oturum.birimler.length;
      g.birimSira = bs.sorulan + 1;
      g.birimToplam = bs.soru;
    }
    return g;
  }

  // T7 madde 1: cevaptan önce isteğe bağlı ipucu; kullanılırsa doğru cevap yardımlı sayılır.
  function ipucuAl(dizin, oturum) {
    if (oturum.bitti || sinavMi(oturum)) return { oturum: oturum, ipucu: null };
    var o = kopya(oturum);
    var og = o.ogeler[o.konum];
    og.ipucu = true;
    return { oturum: o, ipucu: dizin.soruMap[og.soru].ipucu || null };
  }

  // ---------- cevap ----------

  // Cevap biçimi (asıl sıra numaralarıyla): coktan ve bosluk sayı; dogru-yanlis true ya da false;
  // eslestir dizi, c[sol] = sağın asıl numarası; sirala dizi, öğrencinin sırasıyla adımların asıl numaraları.
  function permutasyon(c, n) {
    if (!Array.isArray(c) || c.length !== n) return false;
    var g = {};
    for (var i = 0; i < n; i++) {
      var x = c[i];
      if (typeof x !== 'number' || Math.floor(x) !== x || x < 0 || x >= n || g[x]) return false;
      g[x] = true;
    }
    return true;
  }
  function cevapGecerli(soru, c) {
    if (SECMELI[soru.tur]) return typeof c === 'number' && Math.floor(c) === c && c >= 0 && c < soru.secenekler.length;
    if (soru.tur === 'dogru-yanlis') return typeof c === 'boolean';
    if (soru.tur === 'eslestir') return permutasyon(c, soru.ciftler.length);
    if (soru.tur === 'sirala') return permutasyon(c, soru.adimlar.length);
    return false;
  }
  function cevapDogru(soru, c) {
    if (soru.tur === 'eslestir' || soru.tur === 'sirala') return c.every(function (x, i) { return x === i; });
    return c === soru.dogru;
  }
  function dogruCevap(soru) {
    if (soru.tur === 'eslestir') return sirali(soru.ciftler.length);
    if (soru.tur === 'sirala') return sirali(soru.adimlar.length);
    return soru.dogru;
  }

  function aralik(kutu) { return AYARLAR.kutuAralik[Math.min(Math.max(kutu, 1), 5) - 1]; }
  function yeniKayit(kutu, gun, kaynak) {
    return { kutu: kutu, vade: gunEkle(gun, aralik(kutu)), enYuksekKutu: kutu, sonTekrar: null, kaynak: kaynak };
  }

  // T3: ilk denemede doğru üst kutu (en çok 5); ipucuyla ya da ikinci denemede doğru aynı kutu, aralık yeniden başlar;
  // iki denemede de yanlış kutu 1. Aralık cevap gününden sayılır; gecikme kutuyu düşürmez.
  function tekrarSonucu(kayit, sonuc, gun) {
    var k = kopya(kayit);
    if (sonuc === 'dogru') k.kutu = Math.min(k.kutu + 1, 5);
    else if (sonuc === 'yanlis') k.kutu = 1;
    else if (sonuc !== 'yardimli') throw new Error('sonuç dogru, yardimli ya da yanlis olmalı');
    k.vade = gunEkle(gun, aralik(k.kutu));
    k.enYuksekKutu = Math.max(k.enYuksekKutu || 0, k.kutu);
    k.sonTekrar = gun;
    return k;
  }

  function ilkDogruGun(st, gun) { if (st.ilkDogruGunler.indexOf(gun) < 0) st.ilkDogruGunler.push(gun); }

  // Sorunun bu oturumdaki sonucu kesinleşti: kutu, ders sonu yeniden sorma (karar 4), sonraki soru.
  function kesinlesti(d, o, og, gun) {
    if (o.tur === 'tekrar') {
      if (og.rol === 'tekrar') {
        d.tekrar[og.soru] = tekrarSonucu(d.tekrar[og.soru], og.sonuc, gun);
        gunlukKayit(d, gun).tekrarSayisi++;
      }
    } else {
      // ders ve birim tekrarı: ilk doğruda kutu 1'e girer (T3); ders sonundaki yeniden soruda yine yanlışsa kutu 1 (T7 madde 5).
      var k = d.tekrar[og.soru];
      if (og.sonuc !== 'yanlis') {
        if (!k) d.tekrar[og.soru] = yeniKayit(1, gun, 'ders');
      } else if (og.rol === 'yeniden') {
        if (!k) d.tekrar[og.soru] = yeniKayit(1, gun, 'ders');
        else { k.kutu = 1; k.vade = gunEkle(gun, aralik(1)); k.sonTekrar = gun; }
      }
    }
    if (og.sonuc === 'yanlis' && og.rol !== 'yeniden') o.ogeler.push(oge(og.soru, 'yeniden', og.birim));
    o.konum++;
    if (o.konum >= o.ogeler.length) o.bitti = true;
  }

  // KARARLAR 1411, TASARIM bölüm 13: birim, doğru sayısı eşiğe ulaşınca geçer; yanlış sayısı (soru - eşik)'i aşınca kalır
  // (4 soruda 3: 2. yanlışta; 5 soruda 4: 2. yanlışta). Birim bitince kalan soruları atlanır; sınav ilk yanlışta bitmez.
  function sinavIlerle(o, og, dogru) {
    var s = o.birimSonuc[og.birim];
    s.sorulan++;
    if (dogru) s.dogru++;
    var gecti = s.dogru >= s.esik, kaldi = s.sorulan - s.dogru > s.soru - s.esik;
    o.konum++;
    if (gecti || kaldi) {
      while (o.konum < o.ogeler.length && o.ogeler[o.konum].birim === og.birim) o.konum++;
      (gecti ? o.gecilenBirimler : o.kalanBirimler).push(og.birim);
    }
    if (o.konum >= o.ogeler.length) o.bitti = true;
  }

  // sonuc.durum: 'dogru' | 'tekrar-dene' | 'yanlis' | 'kaydedildi' (sınav, geri bildirim yok) | 'gecersiz'.
  function cevapla(dizin, durum, oturum, cevap, simdi) {
    if (oturum.bitti) throw new Error('oturum bitti');
    var t = ms(simdi);
    var og0 = oturum.ogeler[oturum.konum];
    var soru = dizin.soruMap[og0.soru];
    if (!cevapGecerli(soru, cevap) || (og0.ilkYanlis !== null && SECMELI[soru.tur] && cevap === og0.ilkYanlis)) {
      return { durum: durum, oturum: oturum, sonuc: { durum: 'gecersiz' } };
    }
    var d = kopya(durum), o = kopya(oturum);
    var og = o.ogeler[o.konum];
    var gun = gunAnahtari(t);

    // T5: etkin süre; iki cevap arası 2 dakikadan uzun boşluk sayılmaz. Süre cevabın gününe yazılır.
    var g = gunlukKayit(d, gun);
    var fark = t - o.sonOlay;
    if (fark > 0 && fark <= AYARLAR.boslukMs) g.sureMs += fark;
    o.sonOlay = t;
    var bugunlukTamam = !g.hedefTamam && g.sureMs >= d.ayarlar.hedefDakika * 60000;
    if (bugunlukTamam) g.hedefTamam = true;

    og.deneme++;
    var st = soruKayit(d, og.soru);
    if (og.deneme === 1) st.gorulme++;
    var dogru = cevapDogru(soru, cevap);
    // TASARIM bölüm 11: her sorunun ilk denemesi cevabın gününe, sorunun dersine yazılır; ders sonundaki yeniden sorma sayılmaz.
    // Doğru: ilk denemede ipucusuz doğru (E7'deki "ilk denemede bildin"); yanlış: ilk deneme yanlış; ipuçlu doğru ikisi de değil.
    if (og.deneme === 1 && og.rol !== 'yeniden' && dizin.soruDers[og.soru]) {
      var gs = gecmisKayit(d, gun, dizin.soruDers[og.soru]);
      gs.cevap++;
      if (dogru && !og.ipucu) gs.dogru++;
      else if (!dogru) gs.yanlis++;
    }
    var sonuc;
    if (sinavMi(o)) {
      // T6: ipucu, ikinci deneme ve soru başı geri bildirim yok.
      og.sonuc = dogru ? 'dogru' : 'yanlis';
      og.cevap = cevap;
      if (dogru) ilkDogruGun(st, gun);
      sinavIlerle(o, og, dogru);
      sonuc = { durum: 'kaydedildi' };
    } else if (dogru) {
      og.sonuc = (og.deneme === 1 && !og.ipucu) ? 'dogru' : 'yardimli';
      if (og.sonuc === 'dogru') ilkDogruGun(st, gun);
      sonuc = { durum: 'dogru', yardimli: og.sonuc === 'yardimli', aciklama: soru.aciklama, kaynak: soru.kaynak };
      kesinlesti(d, o, og, gun);
    } else if (og.deneme === 1 && soru.tur !== 'dogru-yanlis') {
      // T7 madde 2: ilk yanlışta doğru cevap gösterilmez; ipucu ve tekrar dene. Madde 6: doğru-yanlışta ikinci deneme yok.
      og.ilkYanlis = SECMELI[soru.tur] ? cevap : null;
      sonuc = { durum: 'tekrar-dene', ipucu: soru.ipucu || null };
    } else {
      // T7 madde 3: doğru cevap, açıklama ve kaynak.
      og.sonuc = 'yanlis';
      sonuc = { durum: 'yanlis', dogruCevap: dogruCevap(soru), aciklama: soru.aciklama, kaynak: soru.kaynak };
      kesinlesti(d, o, og, gun);
    }
    if (bugunlukTamam) sonuc.bugunlukTamam = true;
    sonuc.bitti = o.bitti;
    return { durum: d, oturum: o, sonuc: sonuc };
  }

  // ---------- seri ve haftalık onarım (T4) ----------

  // Son çalışılan (ya da onarılan) günden bugüne kadar kaçırılan günleri işler. Hak hafta başına 1, pazartesi yenilenir, birikmez:
  // kaçırılan gün kendi haftasının hakkı kullanılmadıysa kapanır. Kaçırılanların hepsi kapanamıyorsa hak harcanmaz, seri sıfırlanır.
  // 3 ve üstü kaçırılan gün: seri sıfırlanır, uzun ara bildirilir. "Geri kazan" yok (karar 2).
  function seriIsle(d, gun) {
    var s = d.seri, olay = { onarilan: [], koptu: false, uzunAra: false };
    if (s.sonGun === null) return olay;
    var ara = gunFarki(s.sonGun, gun) - 1;
    if (ara <= 0) return olay;
    if (ara >= AYARLAR.kopusGun) olay.uzunAra = true;
    if (s.sayi === 0) return olay;
    if (olay.uzunAra) { s.sayi = 0; olay.koptu = true; return olay; }
    var gunler = [], haftalar = [];
    for (var i = 1; i <= ara; i++) {
      var gg = gunEkle(s.sonGun, i);
      gunler.push(gg);
      haftalar.push(haftaBasi(gg));
    }
    var kapanir = haftalar.every(function (h, j) { return h !== s.onarimHaftasi && haftalar.indexOf(h) === j; });
    if (!kapanir) { s.sayi = 0; olay.koptu = true; return olay; }
    gunler.forEach(function (x) { s.takvim[x] = 'onarim'; });
    s.onarimHaftasi = haftalar[haftalar.length - 1];
    s.sonGun = gunler[gunler.length - 1];
    olay.onarilan = gunler;
    return olay;
  }

  // Seri günü: o gün en az 1 ders ya da en az 5 soruluk tekrar oturumu bitti. Onarılan gün seriyi korur, sayıyı artırmaz.
  function seriGunu(d, gun) {
    var olay = seriIsle(d, gun), s = d.seri;
    if (s.takvim[gun] === 'calisti') { olay.yeniGun = false; olay.sayi = s.sayi; return olay; }
    if (s.sonGun !== null && gunFarki(s.sonGun, gun) < 0) {   // saat geri alındı: sayıya dokunma
      s.takvim[gun] = 'calisti'; olay.yeniGun = false; olay.sayi = s.sayi; return olay;
    }
    var devam = s.sayi > 0 && s.sonGun !== null && gunFarki(s.sonGun, gun) === 1;
    s.sayi = devam ? s.sayi + 1 : 1;
    s.takvim[gun] = 'calisti';
    s.sonGun = gun;
    if (s.sayi > s.enUzun) s.enUzun = s.sayi;
    olay.yeniGun = true;
    olay.sayi = s.sayi;
    if (AYARLAR.donumNoktalari.indexOf(s.sayi) >= 0) olay.donum = s.sayi;
    return olay;
  }

  // Uygulama her açılışta çağırır: kaçırılan günler işlenir (onarım kendiliğinden kullanılır).
  function acilis(durum, simdi) {
    var d = kopya(durum);
    var olaylar = seriIsle(d, gunAnahtari(simdi));
    return { durum: d, olaylar: olaylar };
  }

  function onarimHakki(durum, simdi) {
    return durum.seri.onarimHaftasi === haftaBasi(gunAnahtari(simdi)) ? 0 : 1;
  }

  function seriBilgisi(durum, simdi) {
    var d = kopya(durum), gun = gunAnahtari(simdi);
    seriIsle(d, gun);
    return {
      sayi: d.seri.sayi,
      enUzun: d.seri.enUzun,
      onarimHakki: onarimHakki(d, simdi),
      bugunCalisti: d.seri.takvim[gun] === 'calisti',
      takvim: d.seri.takvim
    };
  }

  // ---------- oturum sonu ----------

  function birimiAtla(dizin, d, birimId, gun, kaynak) {
    dizin.birimMap[birimId].dersIdleri.forEach(function (dId) {
      if (!d.dersler[dId]) d.dersler[dId] = { durum: 'atlandi', gun: gun, kaynak: kaynak };
      dersSorulari(dizin, dId).forEach(function (sId) {
        if (!d.tekrar[sId]) d.tekrar[sId] = yeniKayit(AYARLAR.yerlesimKutu, gun, kaynak);
      });
    });
  }

  function oturumBitir(dizin, durum, oturum, simdi) {
    if (!oturum.bitti) throw new Error('oturum bitmedi');
    var d = kopya(durum), gun = gunAnahtari(simdi), olaylar = {};
    var asil = oturum.ogeler.filter(function (x) { return x.rol !== 'yeniden'; });
    if (oturum.tur === 'ders') {
      var k = d.dersler[oturum.hedef];
      if (!k || k.durum !== 'tamam') d.dersler[oturum.hedef] = { durum: 'tamam', gun: gun };
      olaylar.soruSayisi = asil.length;
      olaylar.ilkDenemedeDogru = asil.filter(function (x) { return x.sonuc === 'dogru'; }).length;
      olaylar.seri = seriGunu(d, gun);
    } else if (oturum.tur === 'tekrar' || oturum.tur === 'birim-tekrari') {
      if (oturum.tur === 'birim-tekrari') d.birimTekrari[oturum.hedef] = gun;
      olaylar.soruSayisi = asil.length;
      if (asil.length >= AYARLAR.seriTekrarSoru) olaylar.seri = seriGunu(d, gun);
    } else {
      oturum.gecilenBirimler.forEach(function (b) { birimiAtla(dizin, d, b, gun, oturum.tur); });
      if (oturum.tur === 'yerlesim') d.yerlesim = yerlesimKaydi(dizin, d.yerlesim, oturum, gun);
      olaylar.gecilenBirimler = oturum.gecilenBirimler.slice();
      olaylar.kalanBirimler = oturum.kalanBirimler.slice();
      // TASARIM bölüm 13: sonuç ekranında seçilen her birim için bir satır, yol sırasıyla.
      olaylar.birimSonuclari = oturum.birimler.map(function (b) {
        var s = oturum.birimSonuc[b];
        return { birim: b, dogru: s.dogru, sorulan: s.sorulan, gecti: oturum.gecilenBirimler.indexOf(b) >= 0 };
      });
      // T6: sonuç ekranında yanlışların doğrusu.
      olaylar.yanlislar = oturum.ogeler.filter(function (x) { return x.sonuc === 'yanlis'; }).map(function (x) {
        var s = dizin.soruMap[x.soru];
        return { soru: x.soru, verilen: x.cevap, dogruCevap: dogruCevap(s), aciklama: s.aciklama };
      });
    }
    return { durum: d, olaylar: olaylar };
  }

  // TASARIM bölüm 13: yeniden yapılınca geçilenler öncekilerle birleşir; kalanlardan sonradan geçilen çıkar; sonuçta son sınav yazılır.
  // Eski biçimin (bu sürümden önceki) takilanBirim'i kalanlara katılır. Birimler yol sırasıyla (dizinde olmayan sonda, geldiği sırayla).
  function yerlesimKaydi(dizin, eski, oturum, gun) {
    var e = nesne(eski) ? eski : {};
    var sira = function (liste) {
      var yolda = dizin.birimler.map(function (b) { return b.id; }).filter(function (id) { return liste.indexOf(id) >= 0; });
      return yolda.concat(liste.filter(function (id, i) { return !dizin.birimMap[id] && liste.indexOf(id) === i; }));
    };
    var gecilen = sira((Array.isArray(e.gecilenBirimler) ? e.gecilenBirimler : []).concat(oturum.gecilenBirimler));
    var eskiKalan = Array.isArray(e.kalanBirimler) ? e.kalanBirimler : (typeof e.takilanBirim === 'string' ? [e.takilanBirim] : []);
    var kalan = sira(eskiKalan.concat(oturum.kalanBirimler)).filter(function (id) { return gecilen.indexOf(id) < 0; });
    var sonuclar = nesne(e.sonuclar) ? kopya(e.sonuclar) : {};
    oturum.birimler.forEach(function (b) { sonuclar[b] = { dogru: oturum.birimSonuc[b].dogru, sorulan: oturum.birimSonuc[b].sorulan }; });
    return { gun: gun, gecilenBirimler: gecilen, kalanBirimler: kalan, sonuclar: sonuclar };
  }

  // E10 bilgisi (TASARIM bölüm 13): iki biçimde de geçilen birim sayısı gecilenBirimler'in uzunluğu. Seviye belirleme yoksa null.
  function yerlesimBilgisi(durum) {
    var y = durum.yerlesim;
    if (!nesne(y)) return null;
    var kalan = Array.isArray(y.kalanBirimler) ? y.kalanBirimler.length : (typeof y.takilanBirim === 'string' ? 1 : 0);
    return { gun: gunMu(y.gun) ? y.gun : null, gecilen: Array.isArray(y.gecilenBirimler) ? y.gecilenBirimler.length : 0, kalan: kalan };
  }

  // T6: yerleştirme geri alınır; yerleştirmeyle atlanan dersler açılır, hiç tekrar edilmemiş kutu 2 kayıtları silinir.
  function yerlesimGeriAl(durum) {
    var d = kopya(durum);
    Object.keys(d.dersler).forEach(function (id) {
      var k = d.dersler[id];
      if (k.durum === 'atlandi' && k.kaynak === 'yerlesim') delete d.dersler[id];
    });
    Object.keys(d.tekrar).forEach(function (id) {
      var k = d.tekrar[id];
      if (k.kaynak === 'yerlesim' && !k.sonTekrar) delete d.tekrar[id];
    });
    d.yerlesim = null;
    return d;
  }

  // ---------- ilerleme yolu (T10) ----------

  // Birimler sırayla; her birimde dersler, her 3 dersten sonra (birimin son dersi değilse) kişisel tekrar, sonda birim tekrarı.
  // Ders düğümü: 'tamam' | 'atlandi' | 'acik' | 'kilitli'; ders bitince sonraki açılır. İlk açık ders etkindir.
  function yol(dizin, durum, simdi) {
    var gelenler = vadesiGelenler(durum, simdi).filter(function (id) { return dizin.soruMap[id]; });
    var birimBekleyen = {};
    gelenler.forEach(function (id) { var b = dizin.soruBirim[id]; birimBekleyen[b] = (birimBekleyen[b] || 0) + 1; });
    var etkinVar = false;
    return dizin.birimler.map(function (b) {
      var dugumler = [];
      b.dersIdleri.forEach(function (dId, i) {
        var k = durum.dersler[dId];
        var dd = k ? k.durum : (dersAcik(dizin, durum, dId) ? 'acik' : 'kilitli');
        var dg = { tur: 'ders', id: dId, durum: dd, etkin: false };
        if (dd === 'acik' && !etkinVar) { dg.etkin = true; etkinVar = true; }
        dugumler.push(dg);
        if ((i + 1) % AYARLAR.kisiselTekrarAralik === 0 && i + 1 < b.dersIdleri.length) {
          dugumler.push({ tur: 'kisisel-tekrar', id: b.id + '-kt' + ((i + 1) / AYARLAR.kisiselTekrarAralik), durum: k ? 'acik' : 'kilitli', bekleyen: gelenler.length });
        }
      });
      var hepsi = birimBittiMi(dizin, durum, b.id);
      dugumler.push({ tur: 'birim-tekrari', id: b.id + '-bt', durum: durum.birimTekrari[b.id] ? 'tamam' : (hepsi ? 'acik' : 'kilitli') });
      // KARARLAR 1411: birim sınavı dersleri bitmemiş (ve sınava uygun sorusu olan) her birimde açılır.
      var sinavAcik = !hepsi && sinavSoruSayisi(dizin, b.id) > 0;
      return { birimId: b.id, baslik: b.baslik, sinavAcik: sinavAcik, bekleyenTekrar: birimBekleyen[b.id] || 0, dugumler: dugumler };
    });
  }

  // ---------- günlük hedef (T5) ----------

  function gunlukHedef(durum, simdi) {
    var g = durum.gunluk[gunAnahtari(simdi)] || {};
    var sure = g.sureMs || 0, hedef = durum.ayarlar.hedefDakika * 60000;
    return { hedefDakika: durum.ayarlar.hedefDakika, sureMs: sure, dakika: Math.floor(sure / 60000), oran: Math.min(1, sure / hedef), tamam: sure >= hedef };
  }
  function hedefAyarla(durum, dakika) {
    if (AYARLAR.hedefSecenek.indexOf(dakika) < 0) throw new Error('günlük hedef 5, 10, 15 ya da 20 dakika olmalı');
    var d = kopya(durum);
    d.ayarlar.hedefDakika = dakika;
    return d;
  }

  // ---------- puan (karar 8: yalnız ilerleme) ----------

  function ogrenildiMi(durum, soruId) {
    var k = durum.tekrar[soruId], s = durum.sorular[soruId];
    return !!k && !!s && (k.enYuksekKutu || 0) >= AYARLAR.ogrenildiKutu && s.ilkDogruGunler.length >= AYARLAR.ogrenildiGun;
  }
  function puan(dizin, durum) {
    var biten = dizin.dersler.filter(function (d) { return dersBittiMi(durum, d.id); }).length;
    var toplam = dizin.dersler.length;
    var ogrenilen = Object.keys(dizin.soruMap).filter(function (id) { return ogrenildiMi(durum, id); }).length;
    return { bitenDers: biten, toplamDers: toplam, yuzde: toplam ? Math.floor(100 * biten / toplam) : 0, ogrenilenSoru: ogrenilen };
  }

  // ---------- anlaşılmadı (karar 6, H6 ölçümü) ----------

  // dizin isteğe bağlı: verilirse (arayüz verir) işaret o günün cevap geçmişine sorunun dersiyle de yazılır (TASARIM bölüm 11).
  function anlasilmadiIsaretle(durum, soruId, simdi, dizin) {
    var d = kopya(durum);
    var s = soruKayit(d, soruId);
    s.anlasilmadi++;
    s.anlasilmadiSon = gunAnahtari(simdi);
    if (dizin && dizin.soruDers && dizin.soruDers[soruId]) gecmisKayit(d, s.anlasilmadiSon, dizin.soruDers[soruId]).anlasilmadi++;
    return d;
  }
  function anlasilmadiOrani(durum) {
    var ids = Object.keys(durum.sorular);
    var gorulen = ids.filter(function (id) { return durum.sorular[id].gorulme > 0; }).length;
    var isaretli = ids.filter(function (id) { return durum.sorular[id].anlasilmadi > 0; }).length;
    return { isaretli: isaretli, gorulen: gorulen, oran: gorulen ? isaretli / gorulen : 0 };
  }

  // ---------- başarı işaretleri (TASARIM bölüm 10; KARARLAR 1385 madde 7) ----------

  // En çok 12 işaret. Ölçü durumda zaten olan alanlardan hesaplanır (yeni sayaç yok), böylece 15.11 biçimindeki kayıtta da
  // o güne kadarki ilerlemeden çıkar. esik: sayı ya da 'yari' / 'hepsi' (yoldaki ders sayısından; en az 1).
  var BASARILAR = [
    { id: 'ilk-ders', olcu: 'dersteBiten', esik: 1 },
    { id: 'ders-10', olcu: 'dersteBiten', esik: 10 },
    { id: 'ilk-birim', olcu: 'bitenBirim', esik: 1 },
    { id: 'yol-yarisi', olcu: 'bitenDers', esik: 'yari' },
    { id: 'yol-sonu', olcu: 'bitenDers', esik: 'hepsi' },
    { id: 'birim-tekrari', olcu: 'birimTekrari', esik: 1 },
    { id: 'tekrar-50', olcu: 'tekrarSoru', esik: 50 },
    { id: 'dogru-100', olcu: 'ilkDenemeDogru', esik: 100 },
    { id: 'ogrenilen-25', olcu: 'ogrenilenSoru', esik: 25 },
    { id: 'seri-7', olcu: 'enUzunSeri', esik: AYARLAR.donumNoktalari[0] },
    { id: 'seri-30', olcu: 'enUzunSeri', esik: AYARLAR.donumNoktalari[1] },
    { id: 'hedef-ilk', olcu: 'doluGun', esik: 1 }
  ].map(function (b) { return Object.freeze(b); });
  Object.freeze(BASARILAR);

  function basariOlculeri(dizin, durum) {
    var dersler = durum.dersler || {};
    var dersteBiten = dizin.dersler.filter(function (x) { return dersler[x.id] && dersler[x.id].durum === 'tamam'; }).length;
    var bitenDers = dizin.dersler.filter(function (x) { return dersBittiMi(durum, x.id); }).length;
    var bitenBirim = dizin.birimler.filter(function (b) {
      return b.dersIdleri.length > 0 && b.dersIdleri.every(function (id) { return dersBittiMi(durum, id); });
    }).length;
    var tekrarSoru = 0, doluGun = 0, ilkDenemeDogru = 0;
    Object.keys(durum.gunluk || {}).forEach(function (g) {
      var k = durum.gunluk[g];
      tekrarSoru += tamSayi(k.tekrarSayisi) ? k.tekrarSayisi : 0;
      if (k.hedefTamam === true) doluGun++;
    });
    Object.keys(durum.sorular || {}).forEach(function (id) { ilkDenemeDogru += durum.sorular[id].ilkDogruGunler.length; });
    return {
      dersteBiten: dersteBiten, bitenDers: bitenDers, bitenBirim: bitenBirim,
      birimTekrari: Object.keys(durum.birimTekrari || {}).filter(function (id) { return dizin.birimMap[id]; }).length,
      tekrarSoru: tekrarSoru, ilkDenemeDogru: ilkDenemeDogru, ogrenilenSoru: puan(dizin, durum).ogrenilenSoru,
      enUzunSeri: durum.seri.enUzun, doluGun: doluGun, toplamDers: dizin.dersler.length
    };
  }
  function basariEsigi(b, toplamDers) {
    if (b.esik === 'yari') return Math.max(1, Math.ceil(toplamDers / 2));
    if (b.esik === 'hepsi') return Math.max(1, toplamDers);
    return b.esik;
  }

  // Her işaretin hali, BASARILAR sırasıyla: { id, deger, esik, kazanildi, gun }. Kayıtlı işaret, kuralı artık tutmasa da kazanılmıştır.
  function basariDurumu(dizin, durum) {
    var o = basariOlculeri(dizin, durum);
    var kayit = nesne(durum.basarilar) ? durum.basarilar : {};
    return BASARILAR.map(function (b) {
      var esik = basariEsigi(b, o.toplamDers), deger = o[b.olcu];
      return { id: b.id, deger: deger, esik: esik, kazanildi: !!kayit[b.id] || deger >= esik, gun: kayit[b.id] || null };
    });
  }

  // Kuralı tutan ve henüz yazılmamış işaretleri bugünün tarihiyle yazar; hiçbirini silmez. Döner: { durum (kopya), yeni: [kod] }.
  // Bildirip bildirmemek çağıranın işi: açılışta ve içe aktarmada sessiz, oturum ve sınav sonunda bildirilir (TASARIM 10B).
  function basariGuncelle(dizin, durum, simdi) {
    var gun = gunAnahtari(simdi);
    var d = kopya(durum), yeni = [];
    if (!nesne(d.basarilar)) d.basarilar = {};
    basariDurumu(dizin, d).forEach(function (b) {
      if (!d.basarilar[b.id] && b.deger >= b.esik) { d.basarilar[b.id] = gun; yeni.push(b.id); }
    });
    return { durum: d, yeni: yeni };
  }

  // ---------- son yedi gün (TASARIM bölüm 11; KARARLAR 1385 madde 8) ----------

  // Bugün dahil son haftaGun takvim günü (yerel gece yarısı), eskiden yeniye. Her gün: { gun, haftaGunu (0 pazar), bugun, sureMs,
  // dakika, calisti, veriYok, cevap, dogru, oran }. Dakika gunluk'tan (ilk sürümden beri tutuluyor); cevap ve doğru gecmis'ten.
  // gunluk'ta kaydı olup gecmis'te olmayan gün (bu sürümden önce çalışılmış) veriYok: cevap, dogru ve oran null, uydurulmaz.
  // zorlananlar: (yanlış + anlaşılmadı) / cevap büyükten küçüğe; eşitse yanlış + anlaşılmadı sayısı; o da eşitse yol sırası.
  // Durumu değiştirmez.
  function haftalikOzet(dizin, durum, simdi) {
    var bugun = gunAnahtari(simdi);
    var gunluk = nesne(durum.gunluk) ? durum.gunluk : {};
    var gecmis = nesne(durum.gecmis) ? durum.gecmis : {};
    var hedefMs = durum.ayarlar.hedefDakika * 60000;
    var gunler = [], dersler = {};
    var top = { sureMs: 0, dakika: 0, cevap: 0, dogru: 0, oran: null, calisilanGun: 0, veriYokGun: 0 };
    function topla(g, gc) {
      Object.keys(gc).forEach(function (id) {
        var k = gc[id];
        g.cevap += k.cevap; g.dogru += k.dogru;
        var t = dersler[id] || (dersler[id] = { cevap: 0, yanlis: 0, anlasilmadi: 0 });
        t.cevap += k.cevap; t.yanlis += k.yanlis; t.anlasilmadi += k.anlasilmadi;
      });
    }
    for (var i = AYARLAR.haftaGun - 1; i >= 0; i--) {
      var gun = gunEkle(bugun, -i);
      var gl = nesne(gunluk[gun]) ? gunluk[gun] : null, gc = nesne(gecmis[gun]) ? gecmis[gun] : null;
      var sure = gl && tamSayi(gl.sureMs) ? gl.sureMs : 0;
      var g = { gun: gun, haftaGunu: new Date(gunNo(gun) * 86400000).getUTCDay(), bugun: i === 0, sureMs: sure, dakika: Math.floor(sure / 60000),
        calisti: false, veriYok: false, cevap: 0, dogru: 0, oran: null };
      if (gc) topla(g, gc);
      else if (gl) { g.veriYok = true; g.cevap = null; g.dogru = null; }
      if (g.cevap) g.oran = g.dogru / g.cevap;
      g.calisti = !!gl || g.cevap > 0;
      top.sureMs += sure; top.dakika += g.dakika;
      if (g.cevap) { top.cevap += g.cevap; top.dogru += g.dogru; }
      if (g.calisti) top.calisilanGun++;
      if (g.veriYok) top.veriYokGun++;
      gunler.push(g);
    }
    if (top.cevap) top.oran = top.dogru / top.cevap;
    var enUzun = Math.max.apply(null, gunler.map(function (x) { return x.sureMs; }));
    var zorlananlar = Object.keys(dersler).filter(function (id) {
      return dizin.dersMap[id] && dersler[id].yanlis + dersler[id].anlasilmadi > 0;
    }).map(function (id) {
      var t = dersler[id];
      return { ders: id, birim: dizin.dersMap[id].birimId, cevap: t.cevap, yanlis: t.yanlis, anlasilmadi: t.anlasilmadi,
        oran: (t.yanlis + t.anlasilmadi) / Math.max(1, t.cevap), acik: dersAcik(dizin, durum, id) };
    }).sort(function (a, b) {
      return (b.oran - a.oran) || ((b.yanlis + b.anlasilmadi) - (a.yanlis + a.anlasilmadi)) || (dizin.dersMap[a.ders].sira - dizin.dersMap[b.ders].sira);
    }).slice(0, AYARLAR.zorlananEnCok);
    return {
      bugun: bugun, gunler: gunler, toplam: top, zorlananlar: zorlananlar, bos: top.calisilanGun === 0,
      hedefDakika: durum.ayarlar.hedefDakika, olcekMs: Math.max(hedefMs, enUzun)
    };
  }

  var api = {
    AYARLAR: AYARLAR,
    gunAnahtari: gunAnahtari,
    gunEkle: gunEkle,
    gunFarki: gunFarki,
    haftaBasi: haftaBasi,
    icerikDizini: icerikDizini,
    yeniDurum: yeniDurum,
    durumGecerli: durumGecerli,
    dersSorulari: dersSorulari,
    dersAkisi: dersAkisi,
    yol: yol,
    dersBaslat: dersBaslat,
    siradakiKart: siradakiKart,
    kartGec: kartGec,
    dersIlerleme: dersIlerleme,
    tekrarBaslat: tekrarBaslat,
    birimTekrariBaslat: birimTekrariBaslat,
    yerlesimBirimleri: yerlesimBirimleri,
    yerlesimBaslat: yerlesimBaslat,
    birimSinaviBaslat: birimSinaviBaslat,
    mevcutSoru: mevcutSoru,
    soruGorunumu: soruGorunumu,
    ipucuAl: ipucuAl,
    cevapla: cevapla,
    oturumBitir: oturumBitir,
    acilis: acilis,
    seriBilgisi: seriBilgisi,
    onarimHakki: onarimHakki,
    gunlukHedef: gunlukHedef,
    hedefAyarla: hedefAyarla,
    vadesiGelenler: vadesiGelenler,
    tekrarSonucu: tekrarSonucu,
    ogrenildiMi: ogrenildiMi,
    puan: puan,
    anlasilmadiIsaretle: anlasilmadiIsaretle,
    anlasilmadiOrani: anlasilmadiOrani,
    yerlesimGeriAl: yerlesimGeriAl,
    yerlesimBilgisi: yerlesimBilgisi,
    BASARILAR: BASARILAR,
    basariDurumu: basariDurumu,
    basariGuncelle: basariGuncelle,
    haftalikOzet: haftalikOzet
  };
  kok.OGRENME_MOTOR = api;
  if (typeof module !== 'undefined' && module && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
