// Öğrenme uygulamasının ekranları (ogrenme/TASARIM.md bölüm 2 iki yön ve bölüm 3 iskelet; ogrenme/ICERIK-BICIMI.md).
// Kurallar: inceleme/2026-11-15-ogrenme-arastirmasi-2-b.md T4-T10; TASARIM ile çelişen yerde T kuralı ve kullanıcının seçimi geçer.
// Beynin kararları: (1) ekranın gösterdiği her metin METIN nesnesinde; (2) puan sayısı yok, ilerleme biten ders / toplam ders ve
// öğrenilen soru; (3) iki yön Ayarlar'dan değişir, seçim cihazda (GORUNUM_ANAHTARI), varsayılan A; (4) CSS index.html'de, dış adres yok;
// (5) resmi kaynak bağlantı, klasör kaynağı düz metin; (6) "Anlaşılmadı" geri bildirim panelinde, motorun kaydına gider.
// (7) ses ve hareket TASARIM.md bölüm 8'de: sesler js/ses.js, JS süreleri js/hareket.js; ikisi yoksa uygulama sessiz ve hareketsiz sürer.
// (8) koyu tema TASARIM.md bölüm 9'da: Ayarlar'da Otomatik (cihazın gece kipi), Açık, Koyu; seçim GORUNUM_ANAHTARI'nda, html'e .koyu.
// (9) başarı işaretleri TASARIM.md bölüm 10'da: kurallar js/motor.js'te (basariDurumu, basariGuncelle), çizimler gorsel/basari-*.svg;
// açılışta ve içe aktarmada sessiz yazılır, oturum ve sınav sonunda tek bildirimle söylenir; hepsi E11'de. Kod adı "basari" (eşleştirmenin sayı işaretiyle karışmaz).
// (10) son yedi gün (haftalık ilerleme) TASARIM.md bölüm 11'de: hesap js/motor.js haftalikOzet; E12 çizer. Girişler: E3 hedef halkası,
// E3 sağ paneli ve E10 "İlerleme". Grafik CSS ızgarası, dış kütüphane yok.
// (11) yol ekranı dere kenarı TASARIM.md bölüm 12'de: taşın biçimi, minerali ve dokusu ders kimliğinden (js/dere.js, belirlenimli);
// birimin kıyısı, dere ve bitkiler satır içi SVG, durağan. dere.js yoksa taşlar düz çizilir.
// Yükleme sırası: icerik/birim-*.js, js/motor.js, js/depo.js, js/ses.js, js/hareket.js, js/dere.js, js/arayuz.js (klasik betik). Node'da saf parçalar module.exports ile (test).
(function (kok) {
  'use strict';

  // ---------- ekranın bütün metni (karar 1) ----------
  // Yer tutucular {ad} biçiminde, yaz() doldurur. Sayıya ek gelmez (ek sözcüğe gelir: "6 sorudan 5 tanesini").
  var METIN = {
    belgeBasligi: 'Claude Code öğrenme',
    genel: {
      kapat: 'Kapat',
      devam: 'Devam',
      vazgec: 'Vazgeç',
      yolaDon: 'Yola dön',
      yolaGit: 'Yola git',
      dersiKapat: 'Dersi kapat, yola dön',
      oturumuKapat: 'Tekrarı kapat, yola dön',
      ilerleme: 'İlerleme',
      yuklenemedi: 'Uygulamanın dosyaları eksik yüklendi. Klasörü bütün olarak açtığından emin ol.'
    },
    gezinme: { etiket: 'Bölümler', yol: 'Yol', tekrar: 'Tekrar', sozluk: 'Sözlük', ayarlar: 'Ayarlar' },
    birimAdi: 'Birim {no}: {baslik}',
    karsilama: {
      cakil: 'Ben Çakıl. Günde {dakika} dakika, taş taş ilerleriz.',
      baslik: "Claude Code'u taş taş öğren",
      cumleler: [
        'Günde {dakika} dakika yeter; bir ders birkaç dakika sürer.',
        'Önce kısa bir anlatım okursun, sonra soruları cevaplarsın.',
        'Yanlışta önce ipucu gelir; ikinci denemeden sonra doğrusunu ve nedenini görürsün.'
      ],
      sinav: 'Bildiğim yerleri atla',
      sinavAciklama: 'Bildiğini düşündüğün konuları seçersin; her konuda en çok {soru} soru gelir, {gecme} doğru o konuyu atlatır.',
      bastan: 'Baştan başla',
      aktar: 'Başka cihazdaki ilerlemeni getir'
    },
    // Seviye belirleme (TASARIM bölüm 13; kod içi ad yerlesim). Birim sınavı aynı ekranları kullanır.
    sinav: {
      yerlesimAd: 'Seviye belirleme',
      konuBaslik: 'Bildiğin konuları seç',
      konuAciklama: 'Bildiğini düşündüğün konuları işaretle; yalnız onlar sorulur. Her konuda en çok {soru} soru gelir, {gecme} doğru yeter.',
      konuAciklama2: 'Geçtiğin konunun dersleri atlanır, soruları tekrarda karşına çıkar. Kaldığın konu yolda olduğu gibi kalır.',
      konuListe: 'Konular',
      konuBitti: 'Bitti',
      konuSayac: '{sayi} konu seçtin.',
      konuSayacYok: 'Henüz konu seçmedin.',
      konuYok: 'Bütün konuların dersleri bitmiş; sorulacak konu kalmadı.',
      konuSor: 'Seçtiğin konuları sor',
      cakilKonu: 'Bildiğin konuları seç; gerisini yolda birlikte yürürüz.',
      yerlesimUst: 'Konu {konu} / {konuToplam}, {birim}',
      konuSoru: 'Soru {sira} / {toplam}',
      birimUst: 'Birim sınavı: soru {sira} / {toplam}',
      birak: 'Sınavı bırak',
      cevapla: 'Cevapla',
      cakil: 'Bu sınavda ipucu yok; her soruya bir kez cevap verirsin.',
      sonucBaslik: 'Seviye belirleme bitti',
      birimSonucBaslik: 'Birim sınavı bitti',
      cakilSonuc: 'Bildiklerini ayırdık. Kaldığın taş yolda seni bekliyor.',
      cakilSonucYok: 'Bu konular yolda duruyor. Ders ders ilerleriz.',
      sonucListe: 'Konuların sonucu',
      gecti: 'Geçti: {sorulan} soruda {dogru} doğru.',
      kaldi: 'Kaldı: {sorulan} soruda {dogru} doğru.',
      gecilenYok: 'Bu sınavda konu geçilmedi; yol olduğu gibi kaldı.',
      siradaki: 'Yolda sıradaki ders: {ders}, {birim}.',
      hepsi: 'Yoldaki bütün dersler bitti.',
      birimGecti: 'Bu birimi sınavla geçtin; soruları tekrarda karşına çıkacak.',
      birimKaldi: 'Bu birimde kalıyorsun; dersleri sırayla açabilirsin.',
      yanlisBaslik: 'Yanlış cevapladığın soru',
      senin: 'Senin cevabın:',
      dogru: 'Doğru cevap:',
      geriAlBilgi: "Seviye belirlemeyi istersen Ayarlar'dan geri alabilirsin."
    },
    yol: {
      baslik: 'Yol',
      seriEtiket: 'Seri: {sayi} gün. Seri ve onarım hakkı için aç.',
      hedefEtiket: 'Bugün {hedef} dakikalık hedefin {dakika} dakikası doldu.',
      ilerlemeKisa: '{biten} / {toplam} ders',
      tekrarEtiketi: 'tekrar: {sayi} soru',
      sinavla: 'Bu birimi sınavla geç',
      basla: 'Başla',
      kisiselTekrar: 'Kişisel tekrar',
      birimTekrari: 'Birim tekrarı',
      durum: { tamam: 'Bitti', atlandi: 'Sınavla geçildi', acik: 'Sıradaki ders', kilitli: 'Kilitli' },
      tekrarDurum: { acik: 'Açık', tamam: 'Yapıldı', kilitli: 'Kilitli' },
      bekleyen: '{sayi} soru bekliyor',
      dugumEtiket: '{ad}. {durum}.',
      kilitli: 'Bu taş kilitli. Önce sıradaki dersi bitir.',
      kisiselKilitli: 'Kişisel tekrar, önündeki üç ders bitince açılır.',
      birimTekrariKilitli: 'Birim tekrarı, birimin bütün dersleri bitince açılır.',
      panelHedef: 'Bugün {hedef} dakikalık hedefin {dakika} dakikası doldu.',
      panelHedefTamam: 'Bugünkü {hedef} dakikalık hedefin tamam.',
      panelSeri: '{sayi} gündür aralıksız çalışıyorsun.',
      panelSeriYok: 'Serin bugün bir dersle başlar.',
      onarimVar: 'Bu hafta 1 onarım hakkın var.',
      onarimYok: 'Bu haftaki onarım hakkın kullanıldı.',
      panelIlerleme: 'Yolda {toplam} dersten {biten} tanesi bitti; {ogrenilen} soruyu öğrendin.',
      cakilSelam: 'Kaldığın taş yolda işaretli. Hazır olunca başla.',
      cakilUykulu: 'Birkaç bilgi uykuya daldı. Beş dakikada uyandırırız.',
      cakilBitti: 'Yolun sonuna geldin. Tekrarlar sürüyor.',
      donus: 'Yeniden hoş geldin. Kaldığın taş burada.',
      donusTekrar: 'Önce bekleyen tekrarlara bakabilirsin.',
      onarildi: 'Dünü onardım. Bu haftaki hakkın bitti.',
      onarildiCok: 'Kaçırdığın günleri onardım. Bu haftaki hakkın bitti.',
      koptu: 'Seri sıfırlandı. Bugün bir dersle yeniden başlar.'
    },
    seri: {
      baslik: 'Seri',
      sayi: '{sayi} gündür aralıksız çalışıyorsun.',
      bir: 'Serin bugün başladı.',
      sifir: 'Serin şu an sıfır. Bugün bir ders bitirince başlar.',
      bugunYok: 'Bugün bir ders ya da en az {tekrar} soruluk tekrar bitirirsen seri sürer.',
      onarimVar: 'Bu hafta 1 onarım hakkın var. Bir gün kaçırırsan ertesi açılışta o gün kendiliğinden onarılır.',
      onarimYok: 'Bu haftaki onarım hakkın kullanıldı. Pazartesi yenilenir.',
      enUzun: 'En uzun serin: {sayi} gün.',
      takvim: 'Son 7 gün',
      gunEtiket: '{gun}: {durum}',
      gunDurum: { calisti: 'çalıştın', onarim: 'onarıldı', bos: 'çalışılmadı' },
      gunler: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
      gunKisa: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
      aciklama: 'Onay çalıştığın günü, yama onarılan günü gösterir.'
    },
    ders: {
      cakil: 'Bu derste şunları öğreneceksin.',
      kartSayac: 'Kart {sira} / {toplam}',
      terimler: 'Bu karttaki terimler',
      terimAc: '{tr}: açıklamayı aç',
      ingilizce: 'İngilizcesi: {en}'
    },
    soru: {
      kontrol: 'Kontrol et',
      ipucu: 'İpucu',
      secenekler: 'Seçenekler',
      sectigin: 'seçtiğin',
      dogruEtiket: 'doğru cevap',
      dogru: 'Doğru',
      yanlis: 'Yanlış',
      sayac: 'Soru {sira} / {toplam}',
      boslukBos: 'Boşluk, henüz boş',
      boslukDolu: 'Boşlukta: {metin}. Geri almak için dokun.',
      banka: 'Boşluğa gelecek parça',
      eslestirSol: 'Sol sütun',
      eslestirSag: 'Sağ sütun',
      eslestirYardim: 'Önce soldan bir öğe seç, sonra sağdan eşini.',
      eslestirOnce: 'Önce soldan bir öğe seç.',
      eslestirSifirla: 'Baştan eşleştir',
      rozet: '{no}. çift',
      siralaSenin: 'Senin sıran',
      siralaAdimlar: 'Adımlar',
      siralaYardim: 'Adımlara doğru sırayla dokun. Yanlış koyduğuna yeniden dokunursan geri döner.',
      siralaBos: '{no}. yer boş',
      siralaYerde: '{no}. sırada: {metin}. Geri almak için dokun.'
    },
    geri: {
      dogru: 'Doğru',
      neden: 'Neden?',
      ardArda: 'Art arda {sayi} soruyu ilk denemede bildin.',
      ipucuBaslik: 'İpucu',
      ipucuCakil: 'Bir daha bakalım.',
      ipucuYok: 'Sorudaki anahtar sözcüğü yeniden oku.',
      tekrarDene: 'Tekrar dene',
      yanlisBaslik: 'Doğru cevap',
      yanlisCakil: 'Bu zor bir soruydu. Doğrusu ve nedeni şurada.',
      cift: '{sol}: {sag}',
      adim: '{no}. {metin}',
      kaynakAc: 'Kaynağı aç',
      kaynakKlasor: 'Kaynak, bu klasörde: {adres}',
      anlasilmadi: 'Anlaşılmadı',
      anlasilmadiNot: 'Not alındı.',
      bugunlukTamam: 'Bugünkü {dakika} dakikalık hedefin doldu. Bu oturumu bitirip yarın sürdürmen yeter.'
    },
    sonu: {
      dersBaslik: 'Ders tamam',
      tekrarBaslik: 'Tekrar tamam',
      birimTekrariBaslik: 'Birim tekrarı tamam',
      dersCakil: 'Bu dersi bitirdin. Yarın bir sorusunu yeniden soracağım.',
      tekrarCakil: 'Tekrarı bitirdin. Uykudaki bilgiler uyandı.',
      birimTekrariCakil: 'Bu birimin karışık tekrarını bitirdin.',
      ilkDeneme: '{toplam} sorudan {dogru} tanesini ilk denemede bildin.',
      hedef: 'Bugün {hedef} dakikalık hedefin {dakika} dakikası doldu.',
      hedefTamam: 'Bugünkü {hedef} dakikalık hedefin tamam.',
      seri: '{sayi} gündür aralıksız çalışıyorsun.',
      seriBir: 'Serin bugün başladı.',
      donum: '{sayi} günlük seriye ulaştın.',
      seriSayilmadi: 'Bu tekrar seriye sayılmadı; seri için bir ders ya da en az {sayi} soruluk tekrar gerekir.',
      ilerleme: 'Yolda {toplam} dersten {biten} tanesi bitti.',
      bugunlukYeter: 'Bugünlük yeter. Yarın kaldığın taştan sürdürürsün.',
      sonraki: 'Sonraki ders'
    },
    tekrar: {
      baslik: 'Tekrar',
      bekliyor: 'Bugün {sayi} soru tekrar bekliyor.',
      yok: 'Bugün tekrar yok.',
      tavan: 'Bugünkü {sayi} soruluk tekrarı bitirdin. Kalanlar yarın gelir.',
      aciklama: 'Tekrar soruları daha önce gördüğün sorulardır; doğru bildikçe araları uzar.',
      listeBaslik: 'Birimlere göre',
      birimSatir: '{sayi} soru',
      basla: 'Tekrara başla',
      ust: 'Tekrar {sira} / {toplam}',
      birimUst: 'Birim tekrarı {sira} / {toplam}'
    },
    sozluk: {
      baslik: 'Sözlük',
      ara: 'Türkçe ya da İngilizce ara',
      araEtiket: 'Sözlükte ara',
      bos: 'Aramana uyan terim yok.',
      diger: 'Diğer',
      sec: 'Ayrıntı için bir terim seç.',
      ilkDers: 'İlk geçtiği ders: {ders}',
      kilitli: 'İlk geçtiği ders: {ders}. Bu ders henüz kilitli.'
    },
    ayarlar: {
      baslik: 'Ayarlar',
      gorunus: 'Görünüş',
      gorunusAciklama: 'İki görünüşten birini seç. Seçim yalnız bu cihazda saklanır.',
      yonA: 'Lokum: yumuşak ve yuvarlak',
      yonB: 'Kilim: keskin ve çizgili',
      hedef: 'Günlük hedef',
      hedefSimdi: 'Günlük hedef: {dakika} dakika',
      hedefSecenek: '{dakika} dakika',
      hareket: 'Hareketi azalt',
      ses: 'Sesler',
      tema: 'Tema',
      temaAciklama: 'Otomatik seçiliyken cihaz gece kipine geçince uygulama da koyulaşır.',
      temaOtomatik: 'Otomatik',
      temaAcik: 'Açık',
      temaKoyu: 'Koyu',
      acik: 'Açık',
      kapali: 'Kapalı',
      ilerleme: 'İlerleme',
      ilerlemeDers: 'Yolda {toplam} dersten {biten} tanesi bitti.',
      ilerlemeSoru: 'Öğrendiğin soru: {sayi}. Bir soru, üç ayrı günde ilk denemede doğru bilinince öğrenilmiş sayılır.',
      anlasilmadi: 'Anlaşılmadı dediğin soru: {isaretli} (gördüğün {gorulen} soru içinde).',
      tasi: 'İlerlemeni taşı',
      tasiAciklama: 'Dışa aktar bir kod verir. Kodu öbür cihazda İçe aktar alanına yapıştırınca ilerleme oraya geçer. Görünüş seçimi kodla taşınmaz.',
      disa: 'Dışa aktar',
      ice: 'İçe aktar',
      kodEtiket: 'İlerleme kodu',
      kopyala: 'Kopyala',
      kopyalandi: 'Kod kopyalandı.',
      kopyalanamadi: 'Kopyalanamadı; kodu seçip elle kopyala.',
      yapistir: 'Öbür cihazdan aldığın kodu buraya yapıştır',
      yukle: 'Kodu yükle',
      yuklendi: 'İlerleme yüklendi.',
      onayBaslik: 'İlerleme değişecek',
      onayMetin: 'Bu cihazdaki ilerleme silinip koddakiyle değişecek.',
      degistir: 'Değiştir',
      yerlesim: 'Seviye belirleme',
      yerlesimBilgi: 'Seviye belirlemeyle geçtiğin konu: {sayi}.',
      yerlesimAciklama: 'Bildiğin konuları seçip kısa sorularla atlayabilirsin. Yeniden yapınca geçtiğin konular öncekilere eklenir.',
      yerlesimYeniden: 'Seviye belirlemeyi yeniden yap',
      yerlesimGeriAl: 'Seviye belirlemeyi geri al',
      yerlesimOnayBaslik: 'Seviye belirleme geri alınacak',
      yerlesimOnayMetin: 'Seviye belirlemeyle geçilen dersler bitmemiş sayılır; o derslerin henüz tekrar edilmemiş soruları tekrar listesinden çıkar.',
      geriAl: 'Geri al',
      geriAlindi: 'Seviye belirleme geri alındı.',
      sifirla: 'Her şeyi sıfırla',
      sifirlaOnayBaslik: 'Her şey sıfırlanacak',
      sifirlaOnayMetin: 'Bu cihazdaki bütün ilerleme silinir ve uygulama ilk açılıştaki gibi başlar. Önce dışa aktarma kodunu almak istersen vazgeç.',
      sifirlaEvet: 'Sıfırla'
    },
    basari: {
      baslik: 'İşaretler',
      ozet: '{toplam} işaretten {kazanilan} tanesini kazandın.',
      ozetYok: 'Henüz işaret kazanmadın. İlk ders ilk işareti getirir.',
      aciklama: 'Her işaret yolda attığın bir adımı gösterir. Kazandığın işaret, seri bozulsa da sende kalır.',
      kazanilanlar: 'Kazandıkların',
      onundekiler: 'Önündekiler',
      kazanildi: 'Kazandın.',
      henuz: 'Henüz kazanılmadı.',
      henuzSayi: 'Henüz kazanılmadı; şu an {deger} / {esik}.',
      dugmeEtiket: 'İşaretler: {toplam} işaretten {kazanilan} tanesini kazandın.',
      yeni: 'Yeni işaret: {ad}.',
      yeniCok: 'Yeni işaret: {ad} ve {sayi} işaret daha.',
      bak: 'İşaretlere bak',
      // Kod motorun BASARILAR listesiyle aynı; {esik} motordaki eşik, {toplam} yoldaki ders sayısı.
      isaretler: {
        'ilk-ders': { ad: 'İlk taş', kural: 'İlk dersini bitir; sınavla geçilen ders sayılmaz.' },
        'ders-10': { ad: 'On taş', kural: '{esik} ders bitir; sınavla geçilenler sayılmaz.' },
        'ilk-birim': { ad: 'Birim tamam', kural: 'Bir birimin bütün derslerini bitir; sınavla geçilenler de sayılır.' },
        'yol-yarisi': { ad: 'Yolun yarısı', kural: 'Yoldaki {toplam} dersten {esik} tanesini bitir; sınavla geçilenler de sayılır.' },
        'yol-sonu': { ad: 'Yolun sonu', kural: 'Yoldaki {toplam} dersin hepsini bitir; sınavla geçilenler de sayılır.' },
        'birim-tekrari': { ad: 'Karışık tekrar', kural: 'Bir birim tekrarını bitir.' },
        'tekrar-50': { ad: 'Elli tekrar', kural: 'Tekrar oturumlarında {esik} soru cevapla.' },
        'dogru-100': { ad: 'Yüz doğru', kural: '{esik} kez ilk denemede doğru bil; aynı soru günde bir kez sayılır.' },
        'ogrenilen-25': { ad: 'Kök salan bilgi', kural: '{esik} soru öğren. Bir soru, üç ayrı günde ilk denemede doğru bilinince öğrenilmiş sayılır.' },
        'seri-7': { ad: 'Yedi gün', kural: '{esik} gün aralıksız çalış.' },
        'seri-30': { ad: 'Otuz gün', kural: '{esik} gün aralıksız çalış.' },
        'hedef-ilk': { ad: 'Dolu gün', kural: 'Bir günde günlük hedefini doldur.' }
      }
    },
    // E12 (TASARIM bölüm 11). Gün adları METIN.seri.gunler ve gunKisa'dan; değer en çok üç rakam (17 piksellik yazı 44 piksele sığsın).
    hafta: {
      baslik: 'Son yedi gün',
      ozet: '{gun} günde çalıştın; toplam {dakika} dakika.',
      ozetBos: 'Son yedi günde çalışma yok. İlk cevabınla birlikte burası dolmaya başlar.',
      dakikaBaslik: 'Günlük dakika',
      dakikaAciklama: 'Soldan sağa son yedi gün, en sağdaki bugün. Kesik çizgi günlük hedefin: {hedef} dakika.',
      dogruBaslik: 'İlk denemede doğru (yüzde)',
      dogruAciklama: 'Her gün, ilk kez cevapladığın sorulardan ilk denemede ipucusuz bildiklerinin yüzdesi.',
      dogruOzet: 'Bu günlerde {cevap} sorudan {dogru} tanesini ilk denemede bildin.',
      dogruYok: 'Bu günlerde soru cevaplamadın.',
      veriYok: '"yok" yazan günlerde çalıştın, ama doğru oranı ve zorlandığın dersler o günlerde henüz kaydedilmiyordu.',
      zorBaslik: 'En çok zorlandığın dersler',
      zorAciklama: 'Sıra, yanlış ilk cevaplarının ve Anlaşılmadı işaretlerinin o dersteki cevaplarına oranına göre.',
      zorYanlis: '{cevap} soruda {yanlis} yanlış ilk cevap.',
      zorAnlasilmadi: '{cevap} soruda {anlasilmadi} Anlaşılmadı işareti.',
      zorIkisi: '{cevap} soruda {yanlis} yanlış ilk cevap, {anlasilmadi} Anlaşılmadı işareti.',
      zorYok: 'Bu hafta yanlış ilk cevabın ya da Anlaşılmadı işaretin yok.',
      zorKayitYok: 'Cevapların kaydedildikçe zorlandığın dersler burada görünür.',
      yeniden: 'Dersi yeniden çalış',
      yenidenEtiket: 'Dersi yeniden çalış: {ders}',
      kilitli: 'Bu ders henüz kilitli; yolda sırası gelince açılır.',
      bugun: 'Bugün',
      yok: 'yok',
      dakikaEtiket: '{gun}: {dakika} dakika.',
      dogruEtiket: '{gun}: {cevap} sorudan {dogru} tanesi ilk denemede doğru.',
      cevapYokEtiket: '{gun}: soru cevaplanmadı.',
      veriYokEtiket: '{gun}: kayıt yok.',
      halkaAc: 'Son yedi günü aç.',
      bak: 'Son yedi güne bak'
    },
    depo: {
      bellek: "Bu tarayıcı kayıt tutmaya izin vermiyor; ilerlemen sayfa kapanınca silinir. Saklamak için Ayarlar'dan dışa aktarma kodunu al.",
      bozuk: 'Kayıt okunamadı. Eski hali yedeklendi, yeni bir başlangıç açıldı.',
      yedeklenemedi: 'Kayıt okunamadı ve yedeklenecek yer yok. Eski kayda dokunulmadı; bu oturumdaki ilerleme yalnız bellekte.',
      yazilamadi: 'İlerleme kaydedilemedi: tarayıcının saklama alanı dolu ya da kapalı.',
      hata: {
        bicim: 'Kod tanınmadı. Kodun tamamını kopyaladığından emin ol.',
        saglama: 'Kod bozulmuş: bir harfi eksik ya da değişmiş.',
        surum: 'Bu kod uygulamanın başka bir sürümünden.',
        durum: 'Kodun içindeki kayıt okunamadı.',
        yazilamadi: 'İlerleme kaydedilemedi: tarayıcının saklama alanı dolu ya da kapalı.'
      }
    }
  };

  // ---------- ekran kökleri (TASARIM.md bölüm 3 tablosu) ----------
  var EKRANLAR = {
    E1: { kok: 'e1', duzen: 'acilis' },
    E2: { kok: 'e2', duzen: 'odak' },
    E3: { kok: 'e3', duzen: 'gezinmeli' },
    E4: { kok: 'e4', duzen: 'odak' },
    E5: { kok: 'e5', duzen: 'odak' },
    E6: { kok: 'e6', duzen: null },
    E7: { kok: 'e7', duzen: 'odak' },
    E8: { kok: 'e8', duzen: 'gezinmeli' },
    E9: { kok: 'e9', duzen: 'gezinmeli' },
    E10: { kok: 'e10', duzen: 'gezinmeli' },
    E11: { kok: 'e11', duzen: 'gezinmeli' },
    E12: { kok: 'e12', duzen: 'gezinmeli' }
  };
  var CEVAP_EKRANI = { 'coktan': 'E5a', 'dogru-yanlis': 'E5b', 'bosluk': 'E5c', 'eslestir': 'E5d', 'sirala': 'E5e' };
  var TUSLA_SECILEN = { 'coktan': true, 'dogru-yanlis': true, 'bosluk': true };
  var GORUNUM_ANAHTARI = 'ogrenme-gorunum';
  var LAPTOP = '(min-width: 1024px)';
  var AZ_HAREKET = '(prefers-reduced-motion: reduce)';
  var GECE_KIPI = '(prefers-color-scheme: dark)';
  var TEMALAR = ['otomatik', 'acik', 'koyu'];
  var KIRP = { acik: 'gorsel/cakil-selam.svg', kapali: 'gorsel/cakil-selam-kirp.svg' };
  var TEK_SEFER = ['nefes', 'ifade-gecis', 'nabiz', 'zipla', 'kutla-zipla'];
  var SVGNS = 'http://www.w3.org/2000/svg'; // ad alanı; bir şey yüklemez
  var SIMGE = {
    onay: ['M5 12.5l4.5 4.5L19 7.5'],
    carpi: ['M6.5 6.5l11 11', 'M17.5 6.5l-11 11'],
    kilit: ['M7.5 11V8a4.5 4.5 0 0 1 9 0v3', 'M5.5 11h13v9h-13z'],
    tekrar: ['M18.5 12a6.5 6.5 0 1 1-1.9-4.6', 'M18.5 4.5v4h-4'],
    filiz: ['M12 20.5v-8', 'M12 12.5c0-3.8 2.8-6 6.5-6 0 3.8-2.8 6-6.5 6z', 'M12 14.5c0-3-2.3-4.8-5.5-4.8 0 3 2.3 4.8 5.5 4.8z'],
    kitap: ['M4 5.5h5.5a2.5 2.5 0 0 1 2.5 2.5v11a2 2 0 0 0-2-2H4z', 'M20 5.5h-5.5A2.5 2.5 0 0 0 12 8v11a2 2 0 0 1 2-2h6z'],
    yol: ['M6 19.5c0-5 12-3 12-8s-8-3-8-7', 'M6 19.5h.01', 'M10 4.5h.01'],
    ayar: ['M4 7h9', 'M17 7h3', 'M15 5v4', 'M4 17h3', 'M11 17h9', 'M9 15v4'],
    yama: ['M8.5 4.5l11 11-4 4-11-11z', 'M11 11.5h.01', 'M13 13.5h.01'],
    bos: ['M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0'],
    tas: ['M4 15.5c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5c0 2.8-3.4 4-8 4s-8-1.2-8-4z', 'M12 9c0-3 2-5 5.5-5 0 3-2 5-5.5 5z']
  };

  // ---------- saf parçalar (Node testinde koşar) ----------

  function yaz(sablon, degerler) {
    return String(sablon).replace(/\{(\w+)\}/g, function (tam, ad) {
      return degerler && degerler[ad] !== undefined && degerler[ad] !== null ? String(degerler[ad]) : tam;
    });
  }

  // Görünüş tercihi (karar 3): { yon: 'a' | 'b', azHareket, karsilama, ses, tema }. Bozuk ya da yoksa varsayılan A.
  // Ses (TASARIM bölüm 8) aynı anahtarda; varsayılan açık, yalnız açıkça false yazılmışsa kapalı.
  // Tema (TASARIM bölüm 9) aynı anahtarda: 'otomatik' | 'acik' | 'koyu'; eksik, bozuk ya da tanınmayan değerde 'otomatik'
  // (15.11 biçimindeki kayıtta tema alanı yok: Otomatik açılır, öteki alanlar korunur).
  function gorunumCoz(ham) {
    var g = { yon: 'a', azHareket: false, karsilama: false, ses: true, tema: 'otomatik' };
    if (typeof ham !== 'string') return g;
    var o;
    try { o = JSON.parse(ham); } catch (e) { return g; }
    if (!o || typeof o !== 'object') return g;
    if (o.yon === 'a' || o.yon === 'b') g.yon = o.yon;
    g.azHareket = o.azHareket === true;
    g.karsilama = o.karsilama === true;
    g.ses = o.ses !== false;
    if (TEMALAR.indexOf(o.tema) >= 0) g.tema = o.tema;
    return g;
  }

  // Ekrana koyu tema gelir mi: "Koyu" her zaman, "Açık" hiçbir zaman, "Otomatik" cihaz gece kipindeyse.
  function koyuMu(tema, cihazGece) {
    if (tema === 'koyu') return true;
    if (tema === 'acik') return false;
    return cihazGece === true;
  }

  // Karar 5: resmi adres (https) bağlantı olur, klasör kaynağı düz metin kalır. Başka biçim bağlantı olmaz.
  // Klasör kaynağı yalnız depo kökünden dosya yoludur, satır numarası yok (KARARLAR 1418): "Kaynak, bu klasörde: CLAUDE.md".
  function kaynakParcasi(kaynak) {
    if (!kaynak || typeof kaynak.adres !== 'string' || !kaynak.adres) return null;
    if (/^https:\/\/[^\s"'<>]+$/.test(kaynak.adres)) return { tur: 'baglanti', adres: kaynak.adres, metin: METIN.geri.kaynakAc };
    return { tur: 'metin', metin: yaz(METIN.geri.kaynakKlasor, { adres: kaynak.adres }) };
  }

  // Klavye (T9, TASARIM bölüm 3): 1-5 seçenek seçer, Enter kontrol eder ve devam ettirir.
  // b: { ekran: 'kart' | 'soru' | 'sinav' | null, tur, secenekSayisi, secimVar, panelAcik, altSayfaAcik,
  //      hedef: 'alan' | 'secenek' | 'dugme' | null (odaktaki öğe), degistirici }.
  // Odakta düğme varken Enter düğmenin kendi işini yapar (null). Seçenekteyken ve seçim varsa Enter kontrol eder.
  function tusEylemi(tus, b) {
    b = b || {};
    if (b.degistirici || b.hedef === 'alan') return null;
    if (tus === 'Escape') return b.altSayfaAcik ? { eylem: 'kapat' } : null;
    if (b.altSayfaAcik) return null;
    var soruEkrani = b.ekran === 'soru' || b.ekran === 'sinav';
    if (/^[1-5]$/.test(tus)) {  // en çok 5 şık (ICERIK-BICIMI.md "Şık sayısı", 24.11)
      var n = Number(tus);
      if (!soruEkrani || b.panelAcik || !TUSLA_SECILEN[b.tur] || n > (b.secenekSayisi || 0)) return null;
      return { eylem: 'sec', sira: n - 1 };
    }
    if (tus === 'Enter') {
      if (b.hedef === 'dugme') return null;
      if (b.ekran === 'kart') return { eylem: 'devam' };
      if (soruEkrani && b.panelAcik) return { eylem: 'panel' };
      if (soruEkrani && b.secimVar) return { eylem: 'kontrol' };
      return null;
    }
    return null;
  }

  function kucukTr(s) { return String(s || '').toLocaleLowerCase('tr'); }
  // Arama: büyük-küçük harf ve Türkçe işaretler fark etmez (cagri = çağrı, ai = AI).
  function aramaBicimi(s) {
    return kucukTr(s).replace(/ı/g, 'i').replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ö/g, 'o')
      .replace(/ş/g, 's').replace(/ü/g, 'u').replace(/\s+/g, ' ').trim();
  }

  // İçerikte hedefler "... anlatabilir." biçiminde; ekranda kullanıcıya "sen" diye söylenir.
  function hedefSen(h) {
    var t = String(h || '').trim().replace(/bilir(\.?)$/, 'bilirsin$1');
    if (t && !/[.?]$/.test(t)) t += '.';
    return t;
  }

  // E4 kartları: yalnız anlatım kartları, içerikteki sırayla (TASARIM bölüm 14: hedef kartı yok; kart no motorun kart no'su).
  // Her terim, adının geçtiği ilk karta; geçmiyorsa son karta.
  function kartlar(ders) {
    var liste = [];
    ((ders && ders.anlatim) || []).forEach(function (m) { liste.push({ tur: 'anlatim', metin: m, terimler: [] }); });
    ((ders && ders.terimler) || []).forEach(function (t) {
      if (!liste.length) return;
      var yer = -1;
      for (var i = 0; i < liste.length && yer < 0; i++) {
        var m = kucukTr(liste[i].metin);
        if ((t.tr && m.indexOf(kucukTr(t.tr)) >= 0) || (t.en && m.indexOf(kucukTr(t.en)) >= 0)) yer = i;
      }
      if (yer < 0) yer = liste.length - 1;
      liste[yer].terimler.push(t);
    });
    return liste;
  }

  // Sözlük (E9): her terim bir kez, yol sırasında ilk geçtiği dersle; Türkçe alfabe sırası.
  function sozlukKur(birimler) {
    var sirali = (birimler || []).map(function (b, i) { return { b: b, i: i }; });
    sirali.sort(function (x, y) { return (x.b.sira - y.b.sira) || (x.i - y.i); });
    var gorulen = {}, liste = [];
    sirali.forEach(function (x, bi) {
      (x.b.dersler || []).forEach(function (ders) {
        (ders.terimler || []).forEach(function (t) {
          var k = kucukTr(t.tr).trim();
          if (!k || gorulen[k]) return;
          gorulen[k] = true;
          liste.push({ anahtar: k, tr: t.tr, en: t.en || '', aciklama: t.aciklama || '', dersId: ders.id, dersBaslik: ders.baslik, birimNo: bi + 1 });
        });
      });
    });
    liste.sort(function (a, b) { return a.tr.localeCompare(b.tr, 'tr'); });
    return liste;
  }
  function sozlukSuz(liste, sorgu) {
    var s = aramaBicimi(sorgu);
    if (!s) return liste.slice();
    return liste.filter(function (e) { return aramaBicimi(e.tr).indexOf(s) >= 0 || aramaBicimi(e.en).indexOf(s) >= 0; });
  }
  function harfBasi(tr) {
    var c = String(tr || '').trim().charAt(0).toLocaleUpperCase('tr');
    return /^[A-ZÇĞİÖŞÜ]$/.test(c) ? c : null;
  }

  // Bir cevabın ekrandaki satırları (soru içerikteki haliyle; cevap motorun asıl numaralarıyla).
  function cevapMetni(soru, cevap) {
    if (soru.tur === 'coktan' || soru.tur === 'bosluk') return [String(soru.secenekler[cevap])];
    if (soru.tur === 'dogru-yanlis') return [cevap ? METIN.soru.dogru : METIN.soru.yanlis];
    if (soru.tur === 'eslestir') {
      return soru.ciftler.map(function (c, i) {
        var sag = soru.ciftler[cevap[i]];
        return yaz(METIN.geri.cift, { sol: c[0], sag: sag ? sag[1] : '' });
      });
    }
    if (soru.tur === 'sirala') {
      return cevap.map(function (a, i) { return yaz(METIN.geri.adim, { no: i + 1, metin: soru.adimlar[a] }); });
    }
    return [];
  }
  function dogruCevapAsil(soru) {
    if (soru.tur === 'eslestir') return soru.ciftler.map(function (c, i) { return i; });
    if (soru.tur === 'sirala') return soru.adimlar.map(function (a, i) { return i; });
    return soru.dogru;
  }

  // ---------- tarayıcıdaki uygulama ----------

  function baslat(w) {
    var d = w.document;
    var M = w.OGRENME_MOTOR, D = w.OGRENME_DEPO, ICERIK = w.OGRENME_ICERIK;
    var htmlEl = d.documentElement;
    d.title = METIN.belgeBasligi;
    // index.html'deki ilk boyama kuralı (gece kipinde koyu zemin) betik çalışınca kalkar; tema aşağıda gorunumUygula ile gelir.
    // Yükleme hatasında da kalkar ki hata metni açık zeminde okunsun.
    htmlEl.classList.add('tema-kurulu');

    var K = {};
    Object.keys(EKRANLAR).forEach(function (kod) { K[kod] = d.getElementById(EKRANLAR[kod].kok); });
    var gezinmeEl = d.getElementById('gezinme');
    var bildirimEl = d.getElementById('bildirim');
    var ortuEl = d.getElementById('ortu');
    var altSayfaEl = d.getElementById('alt-sayfa');
    var eksik = !M || !D || !Array.isArray(ICERIK) || !ICERIK.length || !gezinmeEl || !bildirimEl || !ortuEl || !altSayfaEl ||
      Object.keys(K).some(function (k) { return !K[k]; });
    if (eksik) {
      if (d.body) { var hp = d.createElement('p'); hp.className = 'yukleme-hatasi'; hp.textContent = METIN.genel.yuklenemedi; d.body.appendChild(hp); }
      return null;
    }

    var dizin = M.icerikDizini(ICERIK);
    var dersVeri = {}, birimVeri = {}, birimNo = {};
    ICERIK.forEach(function (b) { birimVeri[b.id] = b; (b.dersler || []).forEach(function (x) { dersVeri[x.id] = x; }); });
    dizin.birimler.forEach(function (b, i) { birimNo[b.id] = i + 1; });
    var SOZLUK = sozlukKur(ICERIK);

    function simdi() { return Date.now(); }
    function yeniTohum() { return Math.floor(Math.random() * 4294967296); }

    var saklama = D.saklamaBul(w);
    var depo = D.ac({ saklama: saklama, yeniDurum: M.yeniDurum, dogrula: M.durumGecerli, simdi: simdi() });
    var gorunum = gorunumCoz(saklamaOku(GORUNUM_ANAHTARI));

    var U = {
      durum: depo.durum, ekran: null, ekranTur: null, duyuru: null,
      oturum: null, oturumTur: null, ders: null, kartlar: [],
      g: null, tohum: 0, secim: null, panel: null, ipucu: null, ardArda: 0, bugunlukTamam: false,
      anlasilmadiDendi: false, eslestirUyari: false, odak: {}, govdeEl: null, kontrolEl: null, solCakil: null,
      dersSonrasi: null, altOnceki: null, sozlukSorgu: '', sozlukSecili: null, aktarim: null, aktarimMesaj: null, yolKaydir: true,
      anlik: null, oncekiOran: null, yolSonrasi: null, canliCakil: null, nabizTas: null, konuSecim: null, konuDonus: null
    };

    function saklamaOku(anahtar) {
      if (!saklama) return null;
      try { return saklama.getItem(anahtar); } catch (e) { return null; }
    }
    function gorunumKaydet() {
      if (!saklama) return;
      try { saklama.setItem(GORUNUM_ANAHTARI, JSON.stringify(gorunum)); } catch (e) { /* tercih bellekte kalır */ }
    }
    function gorunumUygula() {
      htmlEl.classList.remove('yon-a');
      htmlEl.classList.remove('yon-b');
      htmlEl.classList.add('yon-' + gorunum.yon);
      if (gorunum.azHareket) htmlEl.classList.add('az-hareket'); else htmlEl.classList.remove('az-hareket');
      if (koyuMu(gorunum.tema, cihazGeceMi())) htmlEl.classList.add('koyu'); else htmlEl.classList.remove('koyu');
    }
    // Cihazın gece kipi (TASARIM bölüm 9); matchMedia yoksa ya da hata verirse gündüz sayılır.
    function cihazGeceMi() {
      try { return !!(w.matchMedia && w.matchMedia(GECE_KIPI).matches); } catch (e) { return false; }
    }

    // ---------- ses ve hareket (TASARIM.md bölüm 8) ----------
    // Ses: "Sesler" kapalıyken oynatıcı kurulmaz, ona çağrı gitmez. Hareket: hareketi azaltta (anahtar ya da cihaz tercihi)
    // ve zamanlayıcı yokken H.sureler(true) her süreyi 0 verir; zamanlayıcıyla tetiklenen hiçbir canlanma kurulmaz.
    var SES = w.OGRENME_SES || null, H = w.OGRENME_HAREKET || null;
    // Yol ekranının dere kenarı çizimi (TASARIM.md bölüm 12, js/dere.js); yoksa taşlar düz çizilir.
    var DR = w.OGRENME_DERE || null;
    var zamanVar = typeof w.setTimeout === 'function';
    var sesCalar = null;
    function sesHazir() {
      if (!gorunum.ses || !SES) return null;
      if (!sesCalar) sesCalar = SES.oynatici(w);
      return sesCalar;
    }
    function sesCal(ad) { var o = sesHazir(); if (o) o.cal(ad); }
    function sesAc() { var o = sesHazir(); if (o) o.ac(); }
    function azHareketMi() {
      if (gorunum.azHareket || !zamanVar || !H) return true;
      try { return !!(w.matchMedia && w.matchMedia(AZ_HAREKET).matches); } catch (e) { return false; }
    }
    function sonra(ms, f) { return zamanVar ? w.setTimeout(f, ms) : null; }
    // Tek seferlik CSS hareketini yeniden başlatır: sınıf kalkar, düzen okunur, sınıf geri gelir.
    function oynat(e, sinif) {
      if (!e || !e.classList) return;
      TEK_SEFER.forEach(function (x) { e.classList.remove(x); });
      void e.offsetWidth;
      e.classList.add(sinif);
    }
    function ifadeDegistir(img, ifade) {
      if (!img) return;
      var yeni = 'gorsel/cakil-' + ifade + '.svg';
      if (img.getAttribute('src') === yeni) return;
      img.setAttribute('src', yeni);
      oynat(img, 'ifade-gecis');
    }
    function kirp(img, ms) {
      if (!ms || img.getAttribute('src') !== KIRP.acik) return;
      img.setAttribute('src', KIRP.kapali);
      sonra(ms, function () { if (img.getAttribute('src') === KIRP.kapali) img.setAttribute('src', KIRP.acik); });
    }
    // Canlanma döngüsü: adım başına etkin taşa nabız, Çakıl'a nefes ya da göz kırpma (H.canlanmaAdimi). Aralık 0 ise kurulmaz.
    // Her ekran değişiminde (goster) baştan kurulur: ilk adım ekran açıldıktan bir aralık sonra gelir, ekranın tek seferlik
    // hareketlerini (kutlama dahil) kesmez. Eski zincir nesil numarasından tanınır ve kendini bitirir.
    var canlanma = { zaman: null, adim: 0, nesil: 0, onYuklendi: false };
    function canlanmaBaslat() {
      if (canlanma.zaman !== null && typeof w.clearTimeout === 'function') w.clearTimeout(canlanma.zaman);
      canlanma.zaman = null;
      var n = ++canlanma.nesil;
      if (azHareketMi()) return;
      var s = H.sureler(false);
      if (!s.canlanmaAraligi) return;
      if (!canlanma.onYuklendi && typeof w.Image === 'function') {
        canlanma.onYuklendi = true;
        try { new w.Image().src = KIRP.kapali; } catch (x) { /* ön yükleme yapılamadı */ }
      }
      canlanma.zaman = sonra(s.canlanmaAraligi, function () { canlanmaAdimi(n); });
    }
    function canlanmaAdimi(n) {
      if (n !== canlanma.nesil) return;
      canlanma.zaman = null;
      if (azHareketMi()) return;
      var s = H.sureler(false);
      var a = H.canlanmaAdimi(++canlanma.adim);
      if (a.nabiz && U.nabizTas) oynat(U.nabizTas, 'nabiz');
      if (U.canliCakil) {
        if (a.cakil === 'kirp') kirp(U.canliCakil, s.kirpma);
        else oynat(U.canliCakil, 'nefes');
      }
      canlanma.zaman = sonra(s.canlanmaAraligi, function () { canlanmaAdimi(n); });
    }
    // Yolda kilitli düğümler; oturum bitince önceki hal ile karşılaştırılır (M10 taşın oturması, M12 bandın parlaması).
    function kilitliDugumler() {
      var k = {};
      M.yol(dizin, U.durum, simdi()).forEach(function (b) { b.dugumler.forEach(function (dg) { if (dg.durum === 'kilitli') k[dg.id] = true; }); });
      return k;
    }
    function yeniAcilanlar(once) {
      var y = {};
      M.yol(dizin, U.durum, simdi()).forEach(function (b) { b.dugumler.forEach(function (dg) { if (once[dg.id] && dg.durum !== 'kilitli') y[dg.id] = true; }); });
      return y;
    }
    function durumKaydet(yeni) {
      U.durum = yeni;
      var k = D.kaydet(depo, yeni);
      if (!k.tamam && k.hata === 'yazilamadi') bildir(METIN.depo.yazilamadi);
      return k;
    }

    // ---------- DOM yardımcıları ----------

    function el(etiket, sinif, metin) {
      var e = d.createElement(etiket);
      if (sinif) e.className = sinif;
      if (metin !== undefined && metin !== null) e.textContent = metin;
      return e;
    }
    function dugme(sinif, metin, tik) {
      var b = el('button', sinif, metin);
      b.setAttribute('type', 'button');
      if (tik) b.addEventListener('click', tik);
      return b;
    }
    function ekle(ebeveyn) {
      for (var i = 1; i < arguments.length; i++) if (arguments[i]) ebeveyn.appendChild(arguments[i]);
      return ebeveyn;
    }
    function temizle(e) { while (e.firstChild) e.removeChild(e.firstChild); return e; }
    function simge(ad, sinif) {
      var s = d.createElementNS(SVGNS, 'svg');
      s.setAttribute('viewBox', '0 0 24 24');
      s.setAttribute('class', 'simge' + (sinif ? ' ' + sinif : ''));
      s.setAttribute('aria-hidden', 'true');
      s.setAttribute('focusable', 'false');
      (SIMGE[ad] || []).forEach(function (yolV) {
        var p = d.createElementNS(SVGNS, 'path');
        p.setAttribute('d', yolV);
        s.appendChild(p);
      });
      return s;
    }
    function cakil(ifade, sinif) {
      var i = el('img', 'cakil ' + (sinif || ''));
      i.setAttribute('src', 'gorsel/cakil-' + ifade + '.svg');
      i.setAttribute('alt', '');
      i.setAttribute('width', '160');
      i.setAttribute('height', '160');
      if (!/cakil-64/.test(sinif || '')) U.canliCakil = i;
      return i;
    }
    function balon(metin) { return el('p', 'balon', metin); }
    function cubuk(oran, sinif, etiket) {
      var c = el('div', 'cubuk ' + (sinif || ''));
      c.setAttribute('role', 'progressbar');
      c.setAttribute('aria-valuemin', '0');
      c.setAttribute('aria-valuemax', '100');
      c.setAttribute('aria-valuenow', String(Math.round(Math.max(0, Math.min(1, oran)) * 100)));
      if (etiket) c.setAttribute('aria-label', etiket);
      var ic = el('div', 'cubuk-dolu');
      ic.style.setProperty('--oran', String(Math.max(0, Math.min(1, oran))));
      c.appendChild(ic);
      return c;
    }
    function odakla(e) {
      if (!e) return;
      try { e.focus({ preventScroll: true }); } catch (x) { e.focus(); }
    }
    function baslikEl(etiket, sinif, metin) {
      var h = el(etiket, sinif, metin);
      h.setAttribute('tabindex', '-1');
      return h;
    }
    function laptopMu() { return !!(w.matchMedia && w.matchMedia(LAPTOP).matches); }
    function odakKayit(e, anahtar) { e.setAttribute('data-odak', anahtar); U.odak[anahtar] = e; return e; }
    function birimAdi(birimId) { return yaz(METIN.birimAdi, { no: birimNo[birimId], baslik: dizin.birimMap[birimId].baslik }); }
    function sinavMi() { return U.oturumTur === 'yerlesim' || U.oturumTur === 'birim-sinavi'; }

    function bildir(metin) {
      temizle(bildirimEl);
      ekle(bildirimEl, el('p', 'bildirim-metin', metin), dugme('metin-dugme', METIN.genel.kapat, function () { bildirimEl.hidden = true; }));
      bildirimEl.hidden = false;
    }

    // ---------- başarı işaretleri (TASARIM.md bölüm 10) ----------
    // Kural ve kayıt motorda; burada çizim, bildirim ve sayfa. Açılışta ve içe aktarmada basariGuncelle sessiz çağrılır.

    function basariResmi(id, kazanildi, sinif) {
      var i = el('img', sinif);
      i.setAttribute('src', 'gorsel/basari-' + id + (kazanildi ? '' : '-bos') + '.svg');
      i.setAttribute('alt', '');
      i.setAttribute('width', '96');
      i.setAttribute('height', '96');
      return i;
    }
    function basariOzeti() {
      var liste = M.basariDurumu(dizin, U.durum);
      return { liste: liste, toplam: liste.length, kazanilan: liste.filter(function (b) { return b.kazanildi; }).length };
    }
    function basariOzetMetni(o) {
      return o.kazanilan ? yaz(METIN.basari.ozet, { toplam: o.toplam, kazanilan: o.kazanilan }) : METIN.basari.ozetYok;
    }
    // Tek bildirim: ilk yeni işaretin çizimi ve adı, birden çoksa "ve N işaret daha". Kendiliğinden kapanmaz; odak taşınmaz.
    function basariBildir(yeni) {
      if (!yeni.length) return;
      var ad = METIN.basari.isaretler[yeni[0]].ad;
      var metin = yeni.length > 1 ? yaz(METIN.basari.yeniCok, { ad: ad, sayi: yeni.length - 1 }) : yaz(METIN.basari.yeni, { ad: ad });
      temizle(bildirimEl);
      var bakB = dugme('metin-dugme', METIN.basari.bak, function () { bildirimEl.hidden = true; cizE11(); });
      var kapatB = dugme('metin-dugme', METIN.genel.kapat, function () { bildirimEl.hidden = true; });
      ekle(bildirimEl, ekle(el('div', 'basari-uyari'), basariResmi(yeni[0], true, 'basari-mini'), el('p', 'bildirim-metin', metin),
        ekle(el('div', 'dugmeler'), bakB, kapatB)));
      bildirimEl.hidden = false;
    }
    // Oturum, sınav sonu ve oturumu bırakma: yeni kazanılan varsa yazar ve bildirir. Kayıt yazılamadıysa o bildirim kalır.
    function basariKontrol() {
      var b = M.basariGuncelle(dizin, U.durum, simdi());
      if (!b.yeni.length) return;
      if (durumKaydet(b.durum).tamam) basariBildir(b.yeni);
    }

    // ---------- gezinme ve ekran değişimi ----------

    var GEZINME = [
      { kod: 'E3', metin: METIN.gezinme.yol, simge: 'yol', ac: function () { U.yolKaydir = true; cizE3(); } },
      { kod: 'E8', metin: METIN.gezinme.tekrar, simge: 'tekrar', ac: function () { cizE8(); } },
      { kod: 'E9', metin: METIN.gezinme.sozluk, simge: 'kitap', ac: function () { cizE9(); } },
      { kod: 'E10', metin: METIN.gezinme.ayarlar, simge: 'ayar', ac: function () { U.aktarim = null; U.aktarimMesaj = null; cizE10(); } }
    ];
    gezinmeEl.setAttribute('aria-label', METIN.gezinme.etiket);
    GEZINME.forEach(function (g) {
      var b = dugme('gezinme-oge', null, g.ac);
      ekle(b, el('span', 'gezinme-isaret'), simge(g.simge), el('span', 'gezinme-ad', g.metin));
      b.setAttribute('data-kod', g.kod);
      g.el = b;
      gezinmeEl.appendChild(b);
    });

    function goster(kod) {
      Object.keys(EKRANLAR).forEach(function (k) { if (k !== 'E6') K[k].hidden = k !== kod; });
      var duzen = EKRANLAR[kod].duzen;
      htmlEl.setAttribute('data-duzen', duzen);
      gezinmeEl.hidden = duzen !== 'gezinmeli';
      GEZINME.forEach(function (g) {
        if (g.kod === kod) g.el.setAttribute('aria-current', 'page'); else g.el.removeAttribute('aria-current');
      });
      if (U.ekran !== kod && w.scrollTo) w.scrollTo(0, 0);
      U.ekran = kod;
      U.ekranTur = null;
      U.canliCakil = null; U.nabizTas = null;
      if (kod !== 'E4' && kod !== 'E5') U.oncekiOran = null;
      canlanmaBaslat();
      if (kod !== 'E5') { U.panel = null; K.E6.hidden = true; }
    }

    // ---------- alt sayfa (terim, seri, onay) ----------

    function altSayfaAc(kur) {
      U.altOnceki = d.activeElement;
      temizle(altSayfaEl);
      var ilk = kur(altSayfaEl);
      altSayfaEl.hidden = false;
      ortuEl.hidden = false;
      odakla(ilk);
    }
    function altSayfaKapat() {
      if (altSayfaEl.hidden) return;
      altSayfaEl.hidden = true;
      ortuEl.hidden = true;
      temizle(altSayfaEl);
      if (U.altOnceki && U.altOnceki.focus) odakla(U.altOnceki);
      U.altOnceki = null;
    }
    ortuEl.addEventListener('click', altSayfaKapat);
    function onayAc(baslik, metin, evet, eylem) {
      altSayfaAc(function (kokE) {
        var h = baslikEl('h2', 'ara-baslik', baslik);
        h.setAttribute('id', 'alt-sayfa-baslik');
        kokE.setAttribute('aria-labelledby', 'alt-sayfa-baslik');
        var hayirB = dugme('dugme ikincil', METIN.genel.vazgec, altSayfaKapat);
        var evetB = dugme('dugme birincil', evet, function () { altSayfaKapat(); eylem(); });
        ekle(kokE, h, el('p', null, metin), ekle(el('div', 'dugmeler yan-yana'), hayirB, evetB));
        return hayirB;
      });
    }
    function terimAc(t) {
      altSayfaAc(function (kokE) {
        var h = baslikEl('h2', 'ara-baslik', t.tr);
        h.setAttribute('id', 'alt-sayfa-baslik');
        kokE.setAttribute('aria-labelledby', 'alt-sayfa-baslik');
        var kapatB = dugme('dugme ikincil', METIN.genel.kapat, altSayfaKapat);
        ekle(kokE, h, t.en ? el('p', 'ikincil-metin', yaz(METIN.ders.ingilizce, { en: t.en })) : null,
          el('p', null, t.aciklama), ekle(el('div', 'dugmeler'), kapatB));
        return h;
      });
    }
    function seriAc() {
      var s = M.seriBilgisi(U.durum, simdi());
      altSayfaAc(function (kokE) {
        var h = baslikEl('h2', 'ara-baslik', METIN.seri.baslik);
        h.setAttribute('id', 'alt-sayfa-baslik');
        kokE.setAttribute('aria-labelledby', 'alt-sayfa-baslik');
        var satirlar = [];
        if (s.sayi === 0) satirlar.push(METIN.seri.sifir);
        else satirlar.push(s.sayi === 1 ? METIN.seri.bir : yaz(METIN.seri.sayi, { sayi: s.sayi }));
        if (s.sayi > 0 && !s.bugunCalisti) satirlar.push(yaz(METIN.seri.bugunYok, { tekrar: M.AYARLAR.seriTekrarSoru }));
        satirlar.push(s.onarimHakki ? METIN.seri.onarimVar : METIN.seri.onarimYok);
        if (s.enUzun > 0) satirlar.push(yaz(METIN.seri.enUzun, { sayi: s.enUzun }));
        var ust = ekle(el('div', 'cakil-satir'), cakil('destek', 'cakil-64'), h);
        var takvim = el('ol', 'takvim');
        takvim.setAttribute('aria-label', METIN.seri.takvim);
        var bugun = M.gunAnahtari(simdi());
        for (var i = 6; i >= 0; i--) {
          var gun = M.gunEkle(bugun, -i);
          var p = gun.split('-');
          var hg = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2])).getDay();
          var dd = s.takvim[gun] === 'calisti' ? 'calisti' : (s.takvim[gun] === 'onarim' ? 'onarim' : 'bos');
          var li = el('li', 'takvim-gun ' + dd);
          li.setAttribute('aria-label', yaz(METIN.seri.gunEtiket, { gun: METIN.seri.gunler[hg], durum: METIN.seri.gunDurum[dd] }));
          var kisa = el('span', 'takvim-ad', METIN.seri.gunKisa[hg]);
          kisa.setAttribute('aria-hidden', 'true');
          ekle(li, kisa, simge(dd === 'calisti' ? 'onay' : (dd === 'onarim' ? 'yama' : 'bos')));
          takvim.appendChild(li);
        }
        var kapatB = dugme('dugme ikincil', METIN.genel.kapat, altSayfaKapat);
        ekle(kokE, ust);
        satirlar.forEach(function (m) { kokE.appendChild(el('p', null, m)); });
        ekle(kokE, el('h3', 'kucuk-baslik', METIN.seri.takvim), takvim, el('p', 'ikincil-metin', METIN.seri.aciklama),
          ekle(el('div', 'dugmeler'), kapatB));
        return h;
      });
    }

    // ---------- E1 karşılama ----------

    function cizE1() {
      goster('E1');
      var kokE = temizle(K.E1);
      var dk = U.durum.ayarlar.hedefDakika;
      var h = baslikEl('h1', 'buyuk-baslik', METIN.karsilama.baslik);
      var cumleler = el('div', 'cumleler');
      METIN.karsilama.cumleler.forEach(function (c) { cumleler.appendChild(el('p', null, yaz(c, { dakika: dk }))); });
      var sinavB = dugme('dugme birincil', METIN.karsilama.sinav, function () { gorunum.karsilama = true; gorunumKaydet(); konuSecAc('E1'); });
      var bastanB = dugme('dugme ikincil', METIN.karsilama.bastan, function () { gorunum.karsilama = true; gorunumKaydet(); U.yolKaydir = true; cizE3(); });
      var aktarB = dugme('metin-dugme', METIN.karsilama.aktar, function () { U.aktarim = 'ice'; U.aktarimMesaj = null; cizE10(); });
      ekle(kokE, ekle(el('div', 'acilis'),
        ekle(el('div', 'acilis-sol'), cakil('selam', 'cakil-buyuk'), balon(yaz(METIN.karsilama.cakil, { dakika: dk }))),
        ekle(el('div', 'acilis-sag'), h, cumleler, el('p', 'ikincil-metin', yaz(METIN.karsilama.sinavAciklama, { soru: M.AYARLAR.yerlesimSoru, gecme: M.AYARLAR.yerlesimGecme })),
          ekle(el('div', 'acilis-dugmeler'), sinavB, bastanB), aktarB)));
      odakla(h);
    }

    // ---------- E3 ilerleme yolu ----------

    // Halka E3 üst çubuğunda E12'yi açan düğmenin içindedir (TASARIM bölüm 11); adı düğmede, çizim ekran okuyucudan gizli.
    function hedefHalkasi(h) {
      var kap = el('span', 'hedef-halka');
      kap.setAttribute('aria-hidden', 'true');
      var s = d.createElementNS(SVGNS, 'svg');
      s.setAttribute('viewBox', '0 0 44 44');
      s.setAttribute('aria-hidden', 'true');
      s.setAttribute('focusable', 'false');
      var cevre = 2 * Math.PI * 17;
      var iz = d.createElementNS(SVGNS, 'circle');
      iz.setAttribute('class', 'halka-iz');
      iz.setAttribute('cx', '22'); iz.setAttribute('cy', '22'); iz.setAttribute('r', '17');
      var dolu = d.createElementNS(SVGNS, 'circle');
      dolu.setAttribute('class', 'halka-dolu');
      dolu.setAttribute('cx', '22'); dolu.setAttribute('cy', '22'); dolu.setAttribute('r', '17');
      dolu.setAttribute('stroke-dasharray', (cevre * h.oran).toFixed(2) + ' ' + cevre.toFixed(2));
      dolu.setAttribute('transform', 'rotate(-90 22 22)');
      ekle(s, iz, dolu);
      kap.appendChild(s);
      return kap;
    }
    function kilimAyrac() {
      var s = d.createElementNS(SVGNS, 'svg');
      s.setAttribute('class', 'kilim-ayrac');
      s.setAttribute('viewBox', '0 0 480 12');
      s.setAttribute('preserveAspectRatio', 'xMinYMin slice');
      s.setAttribute('aria-hidden', 'true');
      for (var i = 0; i < 40; i++) {
        var p = d.createElementNS(SVGNS, 'polygon');
        p.setAttribute('points', (i * 12) + ',12 ' + (i * 12 + 6) + ',0 ' + (i * 12 + 12) + ',12');
        p.setAttribute('class', 'ucgen u' + (i % 3 + 1));
        s.appendChild(p);
      }
      return s;
    }
    // Dere kenarı çizimleri (TASARIM bölüm 12): hepsi aria-hidden, durağan; biçimleri js/dere.js verir.
    function cizim(sinif, kutu, esnek) {
      var s = d.createElementNS(SVGNS, 'svg');
      s.setAttribute('class', sinif);
      s.setAttribute('viewBox', kutu);
      if (esnek) s.setAttribute('preserveAspectRatio', 'none');
      s.setAttribute('aria-hidden', 'true');
      s.setAttribute('focusable', 'false');
      return s;
    }
    function cizgiYolu(dd, sinif) {
      var p = d.createElementNS(SVGNS, 'path');
      p.setAttribute('class', sinif);
      p.setAttribute('d', dd);
      return p;
    }
    function tasCizimi(t, etkin) {
      var s = cizim('tas-cizim mineral-' + t.mineral + ' doku-' + t.doku, '0 0 ' + t.kutu + ' ' + t.kutu);
      ekle(s, cizgiYolu(t.govde, 'tas-taban'), cizgiYolu(t.govde, 'tas-govde'), cizgiYolu(t.dokuYolu, 'tas-doku'));
      if (etkin) s.appendChild(cizgiYolu(t.halka, 'tas-halka'));
      return s;
    }
    // A: bir taştan sonrakine dere parçası (x zikzak biriminde); ek: 'giris' ya da 'son'.
    function dereParcasi(x1, x2, ek) {
      var dd = DR.dereYolu(x1, x2);
      return ekle(cizim('dere-parca' + (ek ? ' ' + ek : ''), '-200 0 400 100', true), cizgiYolu(dd, 'dere-kiyi'), cizgiYolu(dd, 'dere-su'));
    }
    // B: birim boyunca dere bandı (satır en az 80, kıyının iç boşluğu 24).
    function dereBandi(satirSayisi) {
      var b = DR.dereBandi(satirSayisi * 80 + 24);
      return ekle(cizim('dere-bant', '0 0 ' + b.genislik + ' ' + b.yukseklik, true),
        cizgiYolu(b.su, 'dere-su-alan'), cizgiYolu(b.sol, 'dere-kiyi-cizgi'), cizgiYolu(b.sag, 'dere-kiyi-cizgi'));
    }
    function bitkiCizimi(bk, yon) {
      var s = cizim('bitki bitki-' + bk.tur + ' ' + bk.yan, '0 0 32 40');
      s.style.setProperty('--ust', bk.ust + '%');
      s.appendChild(cizgiYolu(DR.BITKI[yon][bk.tur], 'bitki-cizgi'));
      return s;
    }
    function dugumDugmesi(dg, b, bicim, sonrasi) {
      var ad, durumMetni, simgeAd;
      if (dg.tur === 'ders') {
        ad = dizin.dersMap[dg.id].baslik;
        durumMetni = METIN.yol.durum[dg.durum];
        simgeAd = dg.durum === 'kilitli' ? 'kilit' : (dg.durum === 'acik' ? 'kitap' : 'onay');
      } else {
        ad = dg.tur === 'kisisel-tekrar' ? METIN.yol.kisiselTekrar : METIN.yol.birimTekrari;
        durumMetni = dg.tur === 'kisisel-tekrar' && dg.durum === 'acik' && dg.bekleyen ? yaz(METIN.yol.bekleyen, { sayi: dg.bekleyen }) : METIN.yol.tekrarDurum[dg.durum];
        simgeAd = dg.durum === 'kilitli' ? 'kilit' : 'tekrar';
      }
      var btn = dugme('dugum durum-' + dg.durum + (dg.etkin ? ' etkin' : '') + (dg.tur !== 'ders' ? ' tekrar-dugumu' : ''), null, function () {
        if (dg.durum === 'kilitli') {
          bildir(dg.tur === 'ders' ? METIN.yol.kilitli : (dg.tur === 'kisisel-tekrar' ? METIN.yol.kisiselKilitli : METIN.yol.birimTekrariKilitli));
          return;
        }
        if (dg.tur === 'ders') dersAc(dg.id);
        else if (dg.tur === 'kisisel-tekrar') cizE8();
        else birimTekrariAc(b.birimId);
      });
      btn.setAttribute('aria-label', yaz(METIN.yol.dugumEtiket, { ad: ad, durum: durumMetni }));
      if (dg.etkin) btn.setAttribute('aria-current', 'step');
      var tas = el('span', 'tas');
      if (bicim) { tas.classList.add('cizimli'); tas.appendChild(tasCizimi(bicim, dg.etkin)); }
      tas.appendChild(simge(simgeAd));
      if (U.dersSonrasi && dg.id === U.dersSonrasi) tas.classList.add('yeni-tamam');
      if (sonrasi && sonrasi[dg.id]) tas.classList.add('yeni-acik');
      var metin = ekle(el('span', 'dugum-metin'), el('span', 'dugum-ad', ad), el('span', 'dugum-durum', durumMetni));
      metin.setAttribute('aria-hidden', 'true');
      ekle(btn, tas, metin);
      if (dg.etkin) {
        var bl = ekle(el('span', 'basla-balon'), el('span', 'basla-yazi', METIN.yol.basla), el('span', 'basla-ad', ad));
        bl.setAttribute('aria-hidden', 'true');
        btn.appendChild(bl);
      }
      return btn;
    }
    function cizE3() {
      // Yeni açılan düğümler yalnız oturum sonundan (E7) ya da sınav sonucundan (E2) yola dönüşte oynar.
      var sonrasi = U.ekran === 'E7' || U.ekran === 'E2' ? U.yolSonrasi : null;
      U.yolSonrasi = null;
      goster('E3');
      var kokE = temizle(K.E3);
      var t = simdi();
      var yolV = M.yol(dizin, U.durum, t), p = M.puan(dizin, U.durum), h = M.gunlukHedef(U.durum, t), s = M.seriBilgisi(U.durum, t);
      var bekleyen = M.vadesiGelenler(U.durum, t).filter(function (id) { return dizin.soruMap[id]; }).length;
      var orta = el('div', 'orta');
      var h1 = baslikEl('h1', 'gizli-etiket', METIN.yol.baslik);
      var seriB = dugme('simge-dugme seri-dugme', null, seriAc);
      seriB.setAttribute('aria-label', yaz(METIN.yol.seriEtiket, { sayi: s.sayi }));
      ekle(seriB, simge('filiz'), el('span', 'seri-sayi', String(s.sayi)));
      var bo = basariOzeti();
      var basariB = dugme('simge-dugme basari-dugme', null, function () { cizE11(); });
      basariB.setAttribute('aria-label', yaz(METIN.basari.dugmeEtiket, { toplam: bo.toplam, kazanilan: bo.kazanilan }));
      basariB.appendChild(simge('tas'));
      var hedefMetni = yaz(METIN.yol.hedefEtiket, { hedef: h.hedefDakika, dakika: Math.min(h.dakika, h.hedefDakika) });
      var haftaB = dugme('simge-dugme hafta-dugme', null, function () { cizE12(); });
      haftaB.setAttribute('aria-label', hedefMetni + ' ' + METIN.hafta.halkaAc);
      haftaB.appendChild(hedefHalkasi(h));
      ekle(orta, h1, ekle(el('header', 'ust-cubuk yol-ust'), seriB, haftaB, basariB,
        el('p', 'ilerleme-kisa', yaz(METIN.yol.ilerlemeKisa, { biten: p.bitenDers, toplam: p.toplamDers }))));
      if (U.duyuru) {
        var kapatD = dugme('metin-dugme', METIN.genel.kapat, function () { U.duyuru = null; cizE3(); });
        orta.appendChild(ekle(el('div', 'duyuru'), el('p', null, U.duyuru.metin), kapatD));
      }
      var yolEl = el('ol', 'yol');
      var sayac = 0, etkinEl = null;
      // Dere kenarı (TASARIM bölüm 12): taşın biçimi ve minerali ders kimliğinden, yol sırasıyla (komşu iki taş aynı mineral almaz).
      var yonK = gorunum.yon === 'b' ? 'b' : 'a';
      var bicimler = DR ? DR.taslar([].concat.apply([], yolV.map(function (b) { return b.dugumler.map(function (dg) { return dg.id; }); })), yonK) : null;
      yolV.forEach(function (b, bi) {
        var li = el('li', 'birim');
        var bant = ekle(el('div', 'birim-bant'), el('h2', 'ara-baslik birim-adi', birimAdi(b.birimId)));
        if (b.bekleyenTekrar) bant.appendChild(el('p', 'tekrar-etiketi', yaz(METIN.yol.tekrarEtiketi, { sayi: b.bekleyenTekrar })));
        if (sonrasi && b.dugumler.some(function (dg) { return dg.tur === 'birim-tekrari' && sonrasi[dg.id]; })) bant.classList.add('parla');
        ekle(li, bant, kilimAyrac());
        if (b.sinavAcik) li.appendChild(dugme('metin-dugme sinavla', METIN.yol.sinavla, function () { birimSinaviAc(b.birimId); }));
        var ol = el('ol', 'dugumler');
        var kiyiEl = DR ? el('div', 'kiyi kiyi-' + DR.kiyi(bi)) : null;
        if (kiyiEl) {
          if (yonK === 'b') kiyiEl.appendChild(dereBandi(b.dugumler.length));
          DR.bitkiler(b.birimId, yonK, b.dugumler.length).forEach(function (bk) { kiyiEl.appendChild(bitkiCizimi(bk, yonK)); });
        }
        var son = b.dugumler.length - 1;
        b.dugumler.forEach(function (dg, i) {
          var satir = el('li', 'dugum-satir kay-' + ['0', 'p', '0', 'n'][i % 4]);
          if (DR && yonK === 'a') {
            var x = DR.KAY[i % 4];
            if (i === 0) satir.appendChild(dereParcasi(x, x, 'giris'));
            satir.appendChild(i < son ? dereParcasi(x, DR.KAY[(i + 1) % 4]) : dereParcasi(x, x, 'son'));
          }
          var btn = dugumDugmesi(dg, b, bicimler ? bicimler[sayac] : null, sonrasi);
          sayac++;
          if (dg.etkin) etkinEl = btn;
          satir.appendChild(btn);
          ol.appendChild(satir);
        });
        li.appendChild(kiyiEl ? ekle(kiyiEl, ol) : ol);
        yolEl.appendChild(li);
      });
      orta.appendChild(yolEl);
      U.nabizTas = etkinEl ? etkinEl.firstChild : null;

      var ifade = 'selam', soz = etkinEl ? METIN.yol.cakilSelam : METIN.yol.cakilBitti;
      if (bekleyen) { ifade = 'uykulu'; soz = METIN.yol.cakilUykulu; }
      if (U.duyuru) { ifade = U.duyuru.ifade; soz = U.duyuru.metin; }
      var panelCakil = cakil(ifade, 'cakil-120' + (U.dersSonrasi ? ' zipla' : ''));
      var seriMetni = s.sayi > 0 ? yaz(METIN.yol.panelSeri, { sayi: s.sayi }) : METIN.yol.panelSeriYok;
      var sag = ekle(el('aside', 'sag-panel'),
        ekle(el('div', 'cakil-satir dikey'), panelCakil, balon(soz)),
        cubuk(h.oran, 'hedef-cubugu', hedefMetni),
        el('p', null, h.tamam ? yaz(METIN.yol.panelHedefTamam, { hedef: h.hedefDakika }) : yaz(METIN.yol.panelHedef, { hedef: h.hedefDakika, dakika: Math.min(h.dakika, h.hedefDakika) })),
        ekle(el('div', 'dugmeler'), dugme('metin-dugme', METIN.hafta.bak, function () { cizE12(); })),
        el('p', null, seriMetni + ' ' + (M.onarimHakki(U.durum, t) ? METIN.yol.onarimVar : METIN.yol.onarimYok)),
        el('p', null, yaz(METIN.yol.panelIlerleme, { toplam: p.toplamDers, biten: p.bitenDers, ogrenilen: p.ogrenilenSoru })));
      ekle(kokE, orta, sag);
      U.dersSonrasi = null;
      odakla(h1);
      if (U.yolKaydir && etkinEl && etkinEl.scrollIntoView) {
        try { etkinEl.scrollIntoView({ block: 'center' }); } catch (x) { etkinEl.scrollIntoView(); }
      }
      U.yolKaydir = false;
    }

    // ---------- oturum başlatma ----------

    function dersAc(dersId) {
      var o;
      try { o = M.dersBaslat(dizin, U.durum, dersId, simdi(), yeniTohum()); } catch (e) { bildir(METIN.yol.kilitli); return; }
      U.oturum = o; U.oturumTur = 'ders'; U.ders = dersVeri[dersId]; U.kartlar = kartlar(U.ders);
      U.ardArda = 0; U.bugunlukTamam = false;
      siradakiAdim();
    }
    // TASARIM bölüm 14: sırayı motor söyler (M.siradakiKart); kart varsa E4, yoksa soru ya da oturum sonu.
    // Kartsız oturumlarda (tekrar, sınav) siradakiKart hep null.
    function siradakiAdim() {
      if (M.siradakiKart(U.oturum) !== null) cizE4();
      else if (U.oturum.bitti) oturumSonu();
      else soruAc();
    }
    function tekrarAc() {
      var o = M.tekrarBaslat(dizin, U.durum, simdi());
      if (!o.ogeler.length) { cizE8(); return; }
      U.oturum = o; U.oturumTur = 'tekrar'; U.ders = null; U.kartlar = []; U.ardArda = 0; U.bugunlukTamam = false;
      soruAc();
    }
    function birimTekrariAc(birimId) {
      var o;
      try { o = M.birimTekrariBaslat(dizin, U.durum, birimId, simdi(), yeniTohum()); } catch (e) { bildir(METIN.yol.birimTekrariKilitli); return; }
      U.oturum = o; U.oturumTur = 'birim-tekrari'; U.ders = null; U.kartlar = []; U.ardArda = 0; U.bugunlukTamam = false;
      if (o.bitti) { oturumSonu(); return; }
      soruAc();
    }
    // ---------- seviye belirleme: konu seçme (TASARIM bölüm 13; E2 kökünde) ----------

    // donus: 'E1' ya da 'E10'; "Vazgeç" oraya döner. Seçim ekran açıkken U.konuSecim'de tutulur.
    function konuSecAc(donus) {
      U.konuDonus = donus === 'E10' ? 'E10' : 'E1';
      U.konuSecim = {};
      cizKonuSec();
    }
    function konuVazgec() {
      U.konuSecim = null;
      if (U.konuDonus === 'E10') { U.aktarim = null; U.aktarimMesaj = null; cizE10(); } else cizE1();
    }
    function cizKonuSec() {
      goster('E2');
      U.ekranTur = 'konu';
      var kokE = temizle(K.E2);
      var liste = M.yerlesimBirimleri(dizin, U.durum);
      var secilebilir = liste.filter(function (x) { return x.secilebilir; });
      var h1 = baslikEl('h1', 'ara-baslik', METIN.sinav.konuBaslik);
      var sayi = { soru: M.AYARLAR.yerlesimSoru, gecme: M.AYARLAR.yerlesimGecme };
      var sag = ekle(el('div', 'odak-sag'), h1);
      var sorB = dugme('dugme birincil', METIN.sinav.konuSor, function () {
        var secilen = secilebilir.filter(function (x) { return U.konuSecim[x.birim]; }).map(function (x) { return x.birim; });
        if (!secilen.length) return;
        U.konuSecim = null;
        yerlesimAc(secilen);
      });
      var sayacEl = el('p', 'ikincil-metin');
      sayacEl.setAttribute('aria-live', 'polite');
      function guncelle() {
        var n = secilebilir.filter(function (x) { return U.konuSecim[x.birim]; }).length;
        sayacEl.textContent = n ? yaz(METIN.sinav.konuSayac, { sayi: n }) : METIN.sinav.konuSayacYok;
        sorB.disabled = n === 0;
      }
      if (secilebilir.length) {
        ekle(sag, el('p', null, yaz(METIN.sinav.konuAciklama, sayi)), el('p', 'ikincil-metin', METIN.sinav.konuAciklama2));
        var ul = el('ul', 'liste konu-liste');
        ul.setAttribute('aria-label', METIN.sinav.konuListe);
        liste.forEach(function (x) {
          var li = el('li');
          if (!x.secilebilir) {
            li.className = 'liste-satir';
            ekle(li, el('span', null, birimAdi(x.birim)), el('span', 'ikincil-metin', METIN.sinav.konuBitti));
            ul.appendChild(li);
            return;
          }
          var b = dugme('secenek konu-secenek', null, null);
          b.setAttribute('role', 'checkbox');
          b.setAttribute('data-birim', x.birim);
          var ciz = function () {
            var acik = !!U.konuSecim[x.birim];
            temizle(b);
            b.setAttribute('aria-checked', acik ? 'true' : 'false');
            if (acik) b.classList.add('secili'); else b.classList.remove('secili');
            ekle(b, simge(acik ? 'onay' : 'bos', 'secenek-simge'), el('span', 'secenek-metin', birimAdi(x.birim)));
          };
          b.addEventListener('click', function () {
            if (U.konuSecim[x.birim]) delete U.konuSecim[x.birim]; else U.konuSecim[x.birim] = true;
            ciz();
            guncelle();
          });
          ciz();
          ul.appendChild(ekle(li, b));
        });
        ekle(sag, ul, sayacEl);
        guncelle();
      } else {
        sag.appendChild(el('p', null, METIN.sinav.konuYok));
        sorB = null;
      }
      sag.appendChild(ekle(el('div', 'sonuc-dugmeler'), sorB, dugme('dugme ikincil', METIN.genel.vazgec, konuVazgec)));
      var ust = ekle(el('header', 'ust-cubuk odak-ust sinav-ust'), el('p', 'ust-metin', METIN.sinav.yerlesimAd));
      ekle(kokE, ust, ekle(el('div', 'odak-govde'),
        ekle(el('div', 'odak-sol'), cakil('selam', 'cakil-120'), balon(METIN.sinav.cakilKonu)), sag));
      odakla(h1);
    }

    function yerlesimAc(birimIdleri) {
      try { U.oturum = M.yerlesimBaslat(dizin, U.durum, simdi(), yeniTohum(), birimIdleri); } catch (e) { cizKonuSec(); return; }
      U.oturumTur = 'yerlesim'; U.ders = null; U.kartlar = [];
      if (U.oturum.bitti) { sinavBitir(); return; }
      soruAc();
    }
    function birimSinaviAc(birimId) {
      try { U.oturum = M.birimSinaviBaslat(dizin, U.durum, birimId, simdi(), yeniTohum()); } catch (e) { bildir(METIN.yol.kilitli); return; }
      U.oturumTur = 'birim-sinavi'; U.ders = null; U.kartlar = [];
      if (U.oturum.bitti) { sinavBitir(); return; }
      soruAc();
    }
    function oturumuBirak() {
      U.oturum = null; U.oturumTur = null; U.panel = null;
      U.yolKaydir = true;
      basariKontrol(); // cevaplar her soruda kaydedildi; yarıda bırakılan oturumda hak edilen işaret de bildirilir
      cizE3();
    }

    function ilerlemeOrani() { return M.dersIlerleme(U.oturum); } // TASARIM bölüm 14: kartlar ve sorular birlikte
    function odakUst(kapatMetni) {
      var ust = el('header', 'ust-cubuk odak-ust');
      var kapat = dugme('simge-dugme kapat', null, oturumuBirak);
      kapat.setAttribute('aria-label', kapatMetni);
      kapat.appendChild(simge('carpi'));
      var oran = ilerlemeOrani(), c = cubuk(oran, 'ilerleme-cubugu', METIN.genel.ilerleme);
      if (U.oncekiOran !== null && U.oncekiOran < oran && !azHareketMi()) {
        c.firstChild.style.setProperty('--onceki', String(U.oncekiOran));
        c.firstChild.classList.add('akar');
      }
      U.oncekiOran = oran;
      ekle(ust, kapat, c);
      return ust;
    }

    // ---------- E4 ders anlatımı ----------

    function cizE4() {
      goster('E4');
      U.ekranTur = 'kart';
      var kokE = temizle(K.E4);
      var ders = U.ders, no = M.siradakiKart(U.oturum), kart = U.kartlar[no];
      var h = baslikEl('h1', 'ara-baslik', ders.baslik);
      var kartEl = el('article', 'kart');
      kartEl.appendChild(el('p', null, kart.metin));
      var cipler = null;
      if (kart.terimler.length) {
        cipler = el('div', 'cipler');
        cipler.setAttribute('role', 'group');
        cipler.setAttribute('aria-label', METIN.ders.terimler);
        kart.terimler.forEach(function (t) {
          var c = dugme('terim-cip', t.tr, function () { terimAc(t); });
          c.setAttribute('aria-label', yaz(METIN.ders.terimAc, { tr: t.tr }));
          cipler.appendChild(c);
        });
      }
      var devamB = dugme('dugme birincil', METIN.genel.devam, kartDevam);
      var solHedef = el('ul', 'hedef-listesi');
      (ders.hedefler || []).map(hedefSen).forEach(function (x) { solHedef.appendChild(el('li', null, x)); });
      ekle(kokE, odakUst(METIN.genel.dersiKapat), ekle(el('div', 'odak-govde'),
        ekle(el('div', 'odak-sol'), cakil('selam', 'cakil-160'), balon(METIN.ders.cakil), solHedef),
        ekle(el('div', 'odak-sag'), h, kartEl,
          el('p', 'ikincil-metin', yaz(METIN.ders.kartSayac, { sira: no + 1, toplam: U.kartlar.length })), cipler,
          ekle(el('div', 'eylem-cubugu'), devamB))));
      if (U.oturum.kartGecilen === 0) odakla(h); else odakla(devamB);
    }
    function kartDevam() {
      if (M.siradakiKart(U.oturum) === null) return;
      if (w.scrollTo) w.scrollTo(0, 0);
      U.oturum = M.kartGec(U.oturum);
      siradakiAdim();
    }

    // ---------- E5 soru ve E2 sınav ----------

    function bosSecim(tur) {
      if (tur === 'eslestir') return { es: {}, sira: [], bekleyen: null };
      if (tur === 'sirala') return { sira: [] };
      return null;
    }
    function secimTamam() {
      var g = U.g, s = U.secim;
      if (!g) return false;
      if (g.tur === 'coktan' || g.tur === 'bosluk') return typeof s === 'number';
      if (g.tur === 'dogru-yanlis') return typeof s === 'boolean';
      if (g.tur === 'eslestir') return !!s && s.sira.length === g.sol.length;
      if (g.tur === 'sirala') return !!s && s.sira.length === g.adimlar.length;
      return false;
    }
    function cevapUret() {
      var g = U.g, s = U.secim;
      if (g.tur === 'eslestir') { var c = []; g.sol.forEach(function (x) { c[x.asil] = s.es[x.asil]; }); return c; }
      if (g.tur === 'sirala') return s.sira.slice();
      return s;
    }

    function soruAc() {
      if (w.scrollTo) w.scrollTo(0, 0);
      U.tohum = yeniTohum();
      U.g = M.mevcutSoru(dizin, U.oturum, U.tohum);
      U.secim = bosSecim(U.g.tur);
      U.panel = null; U.ipucu = null; U.anlasilmadiDendi = false; U.eslestirUyari = false;
      soruCiz();
    }

    function soruCiz() {
      var sinav = sinavMi();
      var kod = sinav ? 'E2' : 'E5';
      goster(kod);
      U.ekranTur = sinav ? 'sinav' : 'soru';
      var kokE = temizle(K[kod]);
      K.E5.classList.remove('panel-acik');
      var g = U.g;
      var ust;
      if (sinav) {
        ust = el('header', 'ust-cubuk odak-ust sinav-ust');
        // TASARIM bölüm 13: seviye belirlemede hangi konu (kaçıncı, toplam, başlık) ve o konudaki soru sırası.
        var ustMetin = U.oturumTur === 'yerlesim'
          ? ekle(el('div', 'sinav-ust-metin'),
            el('p', 'ust-metin', yaz(METIN.sinav.yerlesimUst, { konu: g.konu, konuToplam: g.konuToplam, birim: birimAdi(g.birim) })),
            el('p', 'ikincil-metin', yaz(METIN.sinav.konuSoru, { sira: g.birimSira, toplam: g.birimToplam })))
          : el('p', 'ust-metin', yaz(METIN.sinav.birimUst, { sira: g.birimSira, toplam: g.birimToplam }));
        ekle(ust, ustMetin, dugme('metin-dugme', METIN.sinav.birak, oturumuBirak));
      } else {
        ust = odakUst(U.oturumTur === 'ders' ? METIN.genel.dersiKapat : METIN.genel.oturumuKapat);
        if (U.oturumTur !== 'ders') {
          ust.appendChild(el('p', 'ust-metin', yaz(U.oturumTur === 'tekrar' ? METIN.tekrar.ust : METIN.tekrar.birimUst, { sira: g.sira, toplam: g.toplam })));
        }
      }
      U.solCakil = cakil('selam', 'cakil-120');
      var solAlt = U.ders ? U.ders.baslik : birimAdi(dizin.soruBirim[g.id]);
      var sol = ekle(el('div', 'odak-sol'), U.solCakil,
        sinav ? balon(METIN.sinav.cakil) : null,
        el('p', null, yaz(METIN.soru.sayac, sinav ? { sira: g.birimSira, toplam: g.birimToplam } : { sira: g.sira, toplam: g.toplam })),
        el('p', 'ikincil-metin', solAlt));
      U.govdeEl = el('div', 'soru-govde');
      U.kontrolEl = dugme('dugme birincil kontrol-dugme', sinav ? METIN.sinav.cevapla : METIN.soru.kontrol, kontrol);
      var sag = ekle(el('div', 'odak-sag'), U.govdeEl);
      if (!sinav) sag.appendChild(K.E6);
      sag.appendChild(ekle(el('div', 'eylem-cubugu'), U.kontrolEl));
      ekle(kokE, ust, ekle(el('div', 'odak-govde'), sol, sag));
      soruGovdesiCiz();
      panelCiz();
      if (!U.panel) odakla(U.govdeEl.firstChild && U.govdeEl.firstChild.firstChild);
    }

    // Soru başlığı, ipucu ve cevap alanı. Seçim değişince yalnız bu bölüm yeniden çizilir; odak aynı öğeye döner.
    function soruGovdesiCiz(odakIstek) {
      var onceki = odakIstek || (d.activeElement && d.activeElement.getAttribute ? d.activeElement.getAttribute('data-odak') : null);
      U.odak = {};
      var g = U.g, govde = temizle(U.govdeEl);
      govde.className = 'soru-govde' + (U.anlik ? ' anlik-' + U.anlik : '');
      var bant = el('div', 'soru-bant');
      var h = baslikEl('h1', 'soru-metni');
      h.setAttribute('data-soru', g.id);
      if (g.tur === 'bosluk') {
        var parca = g.soru.split('___');
        h.appendChild(d.createTextNode(parca[0]));
        h.appendChild(boslukKutusu());
        h.appendChild(d.createTextNode(parca.slice(1).join('___')));
      } else {
        h.textContent = g.soru;
      }
      bant.appendChild(h);
      govde.appendChild(bant);
      if (!sinavMi() && g.ipucuVar && g.deneme === 0 && !U.panel) {
        if (U.ipucu) {
          govde.appendChild(ekle(el('div', 'ipucu-kutu'), el('p', 'ipucu-baslik', METIN.geri.ipucuBaslik), el('p', null, U.ipucu)));
        } else {
          govde.appendChild(odakKayit(dugme('metin-dugme ipucu-dugme', METIN.soru.ipucu, ipucuIste), 'ipucu'));
        }
      }
      var alan = el('div', 'cevap-alani tur-' + g.tur);
      alan.setAttribute('data-ekran', CEVAP_EKRANI[g.tur]);
      if (g.tur === 'coktan') coktanCiz(alan);
      else if (g.tur === 'dogru-yanlis') dogruYanlisCiz(alan);
      else if (g.tur === 'bosluk') boslukCiz(alan);
      else if (g.tur === 'eslestir') eslestirCiz(alan);
      else if (g.tur === 'sirala') siralaCiz(alan);
      govde.appendChild(alan);
      U.kontrolEl.disabled = !secimTamam() || !!U.panel;
      if (onceki) {
        var hedefE = U.odak[onceki];
        if (hedefE && !hedefE.disabled) odakla(hedefE);
        else if (onceki !== 'ipucu') odakla(U.kontrolEl.disabled ? h : U.kontrolEl);
      }
    }

    function ipucuIste() {
      var r = M.ipucuAl(dizin, U.oturum);
      U.oturum = r.oturum;
      U.ipucu = r.ipucu || METIN.geri.ipucuYok;
      soruGovdesiCiz('kontrol');
    }

    // Panel açıkken seçeneğin sonucu: 'dogru' | 'yanlis-secim' | 'dogru-cevap' | null.
    function secenekSonucu(asil) {
      var p = U.panel;
      if (!p) return null;
      var secili = U.secim === asil;
      if (p.durum === 'dogru') return secili ? 'dogru' : null;
      if (p.durum === 'tekrar-dene') return secili ? 'yanlis-secim' : null;
      if (p.durum === 'yanlis') {
        if (asil === p.dogruCevap) return 'dogru-cevap';
        return secili ? 'yanlis-secim' : null;
      }
      return null;
    }
    function secenekIcerigi(b, metin, sonucV, secili, pasif, tusNo) {
      if (tusNo) { var t = el('span', 'tus-cip', String(tusNo)); t.setAttribute('aria-hidden', 'true'); b.appendChild(t); }
      b.appendChild(el('span', 'secenek-metin', metin));
      var etiket = null, simgeAd = null;
      if (pasif || sonucV === 'yanlis-secim') { simgeAd = 'carpi'; etiket = METIN.soru.sectigin; }
      else if (sonucV === 'dogru') simgeAd = 'onay';
      else if (sonucV === 'dogru-cevap') { simgeAd = 'onay'; etiket = METIN.soru.dogruEtiket; }
      else if (secili) simgeAd = 'onay';
      if (etiket) b.appendChild(el('span', 'durum-etiket', etiket));
      if (simgeAd) b.appendChild(simge(simgeAd, 'secenek-simge'));
    }
    function sec(asil) {
      if (U.panel) return;
      U.secim = asil;
      sesCal('dokunus');
      soruGovdesiCiz();
    }
    function secSira(i) {
      var g = U.g;
      if (!g || !g.secenekler || !g.secenekler[i] || g.secenekler[i].pasif) return;
      sesCal('dokunus');
      if (g.tur === 'bosluk') { U.secim = g.secenekler[i].asil; soruGovdesiCiz('kutu'); return; }
      U.secim = g.secenekler[i].asil;
      soruGovdesiCiz('s' + i);
    }

    function coktanCiz(alan) {
      var liste = el('div', 'secenekler');
      liste.setAttribute('role', 'group');
      liste.setAttribute('aria-label', METIN.soru.secenekler);
      U.g.secenekler.forEach(function (s, i) {
        var sonucV = secenekSonucu(s.asil), secili = U.secim === s.asil;
        var b = dugme('secenek' + (secili && !U.panel ? ' secili' : '') + (s.pasif ? ' pasif' : '') + (sonucV ? ' ' + sonucV : ''), null, function () { sec(s.asil); });
        b.setAttribute('aria-pressed', secili ? 'true' : 'false');
        if (s.pasif || U.panel) b.disabled = true;
        secenekIcerigi(b, s.metin, sonucV, secili, s.pasif, i + 1);
        liste.appendChild(odakKayit(b, 's' + i));
      });
      alan.appendChild(liste);
    }
    function dogruYanlisCiz(alan) {
      var liste = el('div', 'dy-dugmeler');
      liste.setAttribute('role', 'group');
      liste.setAttribute('aria-label', METIN.soru.secenekler);
      U.g.secenekler.forEach(function (s, i) {
        var sonucV = secenekSonucu(s.asil), secili = U.secim === s.asil;
        var b = dugme('dy-dugme' + (secili && !U.panel ? ' secili' : '') + (sonucV ? ' ' + sonucV : ''), null, function () { sec(s.asil); });
        b.setAttribute('aria-pressed', secili ? 'true' : 'false');
        b.setAttribute('data-deger', String(s.asil));
        if (U.panel) b.disabled = true;
        var tus = el('span', 'tus-cip', String(i + 1));
        tus.setAttribute('aria-hidden', 'true');
        ekle(b, tus, simge(s.asil ? 'onay' : 'carpi', 'dy-simge'), el('span', 'secenek-metin', s.asil ? METIN.soru.dogru : METIN.soru.yanlis));
        if (sonucV === 'yanlis-secim') b.appendChild(el('span', 'durum-etiket', METIN.soru.sectigin));
        if (sonucV === 'dogru-cevap') b.appendChild(el('span', 'durum-etiket', METIN.soru.dogruEtiket));
        liste.appendChild(odakKayit(b, 's' + i));
      });
      alan.appendChild(liste);
    }
    function boslukKutusu() {
      var g = U.g, secili = null;
      g.secenekler.forEach(function (s) { if (s.asil === U.secim) secili = s; });
      var sonucV = secili ? secenekSonucu(secili.asil) : null;
      var b = dugme('bosluk-kutu' + (secili ? ' dolu' : '') + (sonucV ? ' ' + sonucV : ''), secili ? secili.metin : null, function () {
        if (U.panel || !secili) return;
        U.secim = null;
        soruGovdesiCiz('c0');
      });
      b.setAttribute('aria-label', secili ? yaz(METIN.soru.boslukDolu, { metin: secili.metin }) : METIN.soru.boslukBos);
      b.disabled = !!U.panel;
      return odakKayit(b, 'kutu');
    }
    function boslukCiz(alan) {
      var liste = el('div', 'cipler banka');
      liste.setAttribute('role', 'group');
      liste.setAttribute('aria-label', METIN.soru.banka);
      U.g.secenekler.forEach(function (s, i) {
        var kutuda = U.secim === s.asil;
        var sonucV = U.panel && U.panel.durum === 'yanlis' && s.asil === U.panel.dogruCevap ? 'dogru-cevap' : null;
        var b = dugme('cip-secenek' + (kutuda ? ' kutuda' : '') + (s.pasif ? ' pasif' : '') + (sonucV ? ' ' + sonucV : ''), null, function () {
          if (U.panel || s.pasif) return;
          U.secim = s.asil;
          sesCal('dokunus');
          soruGovdesiCiz('kutu');
        });
        if (kutuda) b.setAttribute('aria-hidden', 'true');
        if (kutuda || s.pasif || U.panel) b.disabled = true;
        secenekIcerigi(b, s.metin, sonucV, false, s.pasif, i + 1);
        liste.appendChild(odakKayit(b, 'c' + i));
      });
      alan.appendChild(liste);
    }
    function eslestirCiz(alan) {
      var g = U.g, s = U.secim;
      var izgara = el('div', 'eslestir');
      var solS = el('div', 'eslestir-sutun');
      solS.setAttribute('role', 'group');
      solS.setAttribute('aria-label', METIN.soru.eslestirSol);
      var sagS = el('div', 'eslestir-sutun');
      sagS.setAttribute('role', 'group');
      sagS.setAttribute('aria-label', METIN.soru.eslestirSag);
      var sagdaki = {};
      Object.keys(s.es).forEach(function (sol) { sagdaki[s.es[sol]] = Number(sol); });
      function rozet(no) {
        var r = el('span', 'rozet', String(no));
        r.setAttribute('aria-label', yaz(METIN.soru.rozet, { no: no }));
        return r;
      }
      g.sol.forEach(function (x, i) {
        var eslesti = s.es[x.asil] !== undefined;
        var b = dugme('eslestir-oge' + (eslesti ? ' eslesti' : '') + (s.bekleyen === x.asil ? ' secili' : ''), null, function () {
          if (U.panel || eslesti) return;
          s.bekleyen = s.bekleyen === x.asil ? null : x.asil;
          U.eslestirUyari = false;
          soruGovdesiCiz('l' + i);
        });
        b.setAttribute('aria-pressed', s.bekleyen === x.asil ? 'true' : 'false');
        if (eslesti) b.appendChild(rozet(s.sira.indexOf(x.asil) + 1));
        b.appendChild(el('span', 'secenek-metin', x.metin));
        if (eslesti || U.panel) b.disabled = true;
        solS.appendChild(odakKayit(b, 'l' + i));
      });
      g.sag.forEach(function (x, i) {
        var eslesti = sagdaki[x.asil] !== undefined;
        var b = dugme('eslestir-oge' + (eslesti ? ' eslesti' : ''), null, function () {
          if (U.panel || eslesti) return;
          if (s.bekleyen === null) { U.eslestirUyari = true; soruGovdesiCiz('r' + i); return; }
          s.es[s.bekleyen] = x.asil;
          s.sira.push(s.bekleyen);
          sesCal('dokunus');
          s.bekleyen = null;
          U.eslestirUyari = false;
          var sonrakiSol = -1;
          g.sol.forEach(function (y, j) { if (sonrakiSol < 0 && s.es[y.asil] === undefined) sonrakiSol = j; });
          soruGovdesiCiz(sonrakiSol >= 0 ? 'l' + sonrakiSol : 'kontrol');
        });
        if (eslesti) b.appendChild(rozet(s.sira.indexOf(sagdaki[x.asil]) + 1));
        b.appendChild(el('span', 'secenek-metin', x.metin));
        if (eslesti || U.panel) b.disabled = true;
        sagS.appendChild(odakKayit(b, 'r' + i));
      });
      ekle(izgara, solS, sagS);
      var yardim = el('p', 'ikincil-metin', U.eslestirUyari ? METIN.soru.eslestirOnce : METIN.soru.eslestirYardim);
      yardim.setAttribute('role', 'status');
      ekle(alan, yardim, izgara);
      if (s.sira.length && !U.panel) {
        alan.appendChild(odakKayit(dugme('metin-dugme', METIN.soru.eslestirSifirla, function () {
          U.secim = bosSecim('eslestir');
          soruGovdesiCiz('l0');
        }), 'sifirla'));
      }
    }
    function siralaCiz(alan) {
      var g = U.g, s = U.secim, metinler = {};
      g.adimlar.forEach(function (x) { metinler[x.asil] = x.metin; });
      var senin = el('ol', 'sirala-liste');
      senin.setAttribute('aria-label', METIN.soru.siralaSenin);
      for (var i = 0; i < g.adimlar.length; i++) {
        var li = el('li');
        if (i < s.sira.length) {
          (function (konum, asil) {
            var b = dugme('sirala-oge yerde', null, function () {
              if (U.panel) return;
              s.sira.splice(konum, 1);
              soruGovdesiCiz(s.sira.length > konum ? 'y' + konum : 'a0');
            });
            b.setAttribute('aria-label', yaz(METIN.soru.siralaYerde, { no: konum + 1, metin: metinler[asil] }));
            ekle(b, el('span', 'rozet', String(konum + 1)), el('span', 'secenek-metin', metinler[asil]));
            if (U.panel) b.disabled = true;
            li.appendChild(odakKayit(b, 'y' + konum));
          })(i, s.sira[i]);
        } else {
          var bos = el('span', 'sirala-bos', String(i + 1));
          bos.setAttribute('aria-label', yaz(METIN.soru.siralaBos, { no: i + 1 }));
          li.appendChild(bos);
        }
        senin.appendChild(li);
      }
      var banka = el('div', 'sirala-banka');
      banka.setAttribute('role', 'group');
      banka.setAttribute('aria-label', METIN.soru.siralaAdimlar);
      var kalan = g.adimlar.filter(function (x) { return s.sira.indexOf(x.asil) < 0; });
      kalan.forEach(function (x, j) {
        var b = dugme('sirala-oge', null, function () {
          if (U.panel) return;
          s.sira.push(x.asil);
          sesCal('dokunus');
          soruGovdesiCiz(kalan.length > 1 ? 'a' + Math.min(j, kalan.length - 2) : 'kontrol');
        });
        b.appendChild(el('span', 'secenek-metin', x.metin));
        if (U.panel) b.disabled = true;
        banka.appendChild(odakKayit(b, 'a' + j));
      });
      ekle(alan, el('p', 'ikincil-metin', METIN.soru.siralaYardim),
        el('h2', 'kucuk-baslik', METIN.soru.siralaSenin), senin,
        kalan.length ? el('h2', 'kucuk-baslik', METIN.soru.siralaAdimlar) : null, kalan.length ? banka : null);
    }

    function kontrol() {
      if (U.panel || !secimTamam()) return;
      var r = M.cevapla(dizin, U.durum, U.oturum, cevapUret(), simdi());
      if (r.sonuc.durum === 'gecersiz') return;
      U.oturum = r.oturum;
      durumKaydet(r.durum);
      var s = r.sonuc;
      if (s.bugunlukTamam) U.bugunlukTamam = true;
      if (s.durum === 'kaydedildi') {
        if (U.oturum.bitti) sinavBitir(); else soruAc();
        return;
      }
      if (s.durum === 'dogru' && !s.yardimli) U.ardArda++; else U.ardArda = 0;
      U.panel = s;
      // Cevap anı (TASARIM bölüm 8 M2-M5): ses ve tek seferlik hareket sınıfı yalnız bu çizimde.
      U.anlik = s.durum === 'dogru' ? 'dogru' : 'yanlis';
      sesCal(U.anlik);
      soruGovdesiCiz();
      panelCiz();
      U.anlik = null;
    }

    // ---------- E6 geri bildirim paneli ----------

    function kaynakEl(kaynak) {
      var k = kaynakParcasi(kaynak);
      if (!k) return null;
      if (k.tur === 'metin') return el('p', 'kaynak-metni ikincil-metin', k.metin);
      var a = el('a', 'kaynak-baglanti', k.metin);
      a.setAttribute('href', k.adres);
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
      return a;
    }
    function satirlarEl(satirlar) {
      if (satirlar.length === 1) return el('p', 'cevap-satiri', satirlar[0]);
      var ul = el('ul', 'duz-liste');
      satirlar.forEach(function (x) { ul.appendChild(el('li', null, x)); });
      return ul;
    }
    function panelCiz() {
      var p = U.panel, P = temizle(K.E6);
      if (!p) { P.hidden = true; K.E5.classList.remove('panel-acik'); return; }
      var soru = dizin.soruMap[U.g.id];
      var tur = p.durum === 'dogru' ? 'dogru' : (p.durum === 'tekrar-dene' ? 'ipucu' : 'yanlis');
      P.className = 'panel ' + tur;
      P.setAttribute('role', 'region');
      P.setAttribute('aria-labelledby', 'panel-baslik');
      var h = baslikEl('h2', 'panel-baslik ara-baslik');
      h.setAttribute('id', 'panel-baslik');
      var birincil;
      if (tur === 'dogru') {
        ekle(h, simge('onay', U.anlik === 'dogru' ? 'ciz' : null), el('span', null, METIN.geri.dogru));
        P.appendChild(h);
        if (U.ardArda > 0 && U.ardArda % 5 === 0) P.appendChild(el('p', null, yaz(METIN.geri.ardArda, { sayi: U.ardArda })));
        var neden = el('details', 'neden');
        ekle(neden, el('summary', 'metin-dugme', METIN.geri.neden), el('p', null, p.aciklama), kaynakEl(p.kaynak));
        P.appendChild(neden);
        birincil = dugme('dugme birincil', METIN.genel.devam, panelDevam);
      } else if (tur === 'ipucu') {
        ekle(h, el('span', null, METIN.geri.ipucuBaslik));
        ekle(P, ekle(el('div', 'cakil-satir'), cakil('dusunuyor', 'cakil-64 panel-cakil'), balon(METIN.geri.ipucuCakil)), h,
          el('p', null, p.ipucu || METIN.geri.ipucuYok));
        birincil = dugme('dugme birincil', METIN.geri.tekrarDene, panelDevam);
        ifadeDegistir(U.solCakil, 'dusunuyor');
      } else {
        ekle(h, el('span', null, METIN.geri.yanlisBaslik));
        ekle(P, ekle(el('div', 'cakil-satir'), cakil('destek', 'cakil-64 panel-cakil'), balon(METIN.geri.yanlisCakil)), h,
          satirlarEl(cevapMetni(soru, p.dogruCevap)), el('p', null, p.aciklama), kaynakEl(p.kaynak));
        birincil = dugme('dugme birincil', METIN.genel.devam, panelDevam);
        ifadeDegistir(U.solCakil, 'destek');
      }
      if (U.bugunlukTamam && p.bugunlukTamam) P.appendChild(el('p', null, yaz(METIN.geri.bugunlukTamam, { dakika: U.durum.ayarlar.hedefDakika })));
      var anl = U.anlasilmadiDendi
        ? el('p', 'ikincil-metin anlasilmadi-not', METIN.geri.anlasilmadiNot)
        : dugme('metin-dugme anlasilmadi', METIN.geri.anlasilmadi, anlasilmadi);
      U.panelBirincil = birincil;
      P.appendChild(ekle(el('div', 'panel-eylem'), anl, birincil));
      P.hidden = false;
      K.E5.classList.add('panel-acik');
      odakla(h);
    }
    function anlasilmadi() {
      durumKaydet(M.anlasilmadiIsaretle(U.durum, U.g.id, simdi(), dizin)); // dizin: işaret son yedi günün sayfasına da yazılır
      U.anlasilmadiDendi = true;
      panelCiz();
      odakla(U.panelBirincil);
    }
    function panelDevam() {
      if (!U.panel) return;
      if (U.panel.durum === 'tekrar-dene') {
        U.panel = null;
        U.g = M.mevcutSoru(dizin, U.oturum, U.tohum);
        U.secim = bosSecim(U.g.tur);
        panelCiz();
        ifadeDegistir(U.solCakil, 'selam');
        soruGovdesiCiz();
        odakla(U.govdeEl.firstChild && U.govdeEl.firstChild.firstChild);
        return;
      }
      U.panel = null;
      siradakiAdim(); // dersin sıradaki kartı (TASARIM bölüm 14), soru ya da oturum sonu
    }

    // ---------- oturum sonu: E7 ve E2 sonucu ----------

    function oturumSonu() {
      var o = U.oturum, tur = U.oturumTur;
      var kilitli = kilitliDugumler();
      var r = M.oturumBitir(dizin, U.durum, o, simdi());
      durumKaydet(r.durum);
      U.yolSonrasi = yeniAcilanlar(kilitli);
      var asil = o.ogeler.filter(function (x) { return x.rol !== 'yeniden'; });
      var bilgi = {
        tur: tur, olaylar: r.olaylar, dersId: tur === 'ders' ? o.hedef : null,
        toplam: asil.length, dogru: asil.filter(function (x) { return x.sonuc === 'dogru'; }).length
      };
      if (tur === 'ders') U.dersSonrasi = o.hedef;
      U.oturum = null; U.oturumTur = null;
      cizE7(bilgi);
      basariKontrol();
    }
    function sonrakiDers(dersId) {
      var ders = dizin.dersMap[dersId];
      var sonraki = ders ? dizin.dersler[ders.sira + 1] : null;
      if (!sonraki) return null;
      var acik = false;
      M.yol(dizin, U.durum, simdi()).forEach(function (b) {
        b.dugumler.forEach(function (dg) { if (dg.id === sonraki.id && dg.durum !== 'kilitli') acik = true; });
      });
      return acik ? sonraki.id : null;
    }
    function cizE7(bilgi) {
      goster('E7');
      var kokE = temizle(K.E7);
      var t = simdi(), h = M.gunlukHedef(U.durum, t), p = M.puan(dizin, U.durum);
      var baslik = bilgi.tur === 'ders' ? METIN.sonu.dersBaslik : (bilgi.tur === 'tekrar' ? METIN.sonu.tekrarBaslik : METIN.sonu.birimTekrariBaslik);
      var soz = bilgi.tur === 'ders' ? METIN.sonu.dersCakil : (bilgi.tur === 'tekrar' ? METIN.sonu.tekrarCakil : METIN.sonu.birimTekrariCakil);
      var h1 = baslikEl('h1', 'buyuk-baslik', baslik);
      var cumleler = el('div', 'cumleler');
      var plan = H ? H.kutlamaPlani(bilgi.dogru, azHareketMi(), yeniTohum()) : null;
      cumleler.appendChild(ilkDenemeCumlesi(bilgi, plan));
      cumleler.appendChild(el('p', null, h.tamam ? yaz(METIN.sonu.hedefTamam, { hedef: h.hedefDakika })
        : yaz(METIN.sonu.hedef, { hedef: h.hedefDakika, dakika: Math.min(h.dakika, h.hedefDakika) })));
      cumleler.appendChild(cubuk(h.oran, 'hedef-cubugu', yaz(METIN.yol.hedefEtiket, { hedef: h.hedefDakika, dakika: Math.min(h.dakika, h.hedefDakika) })));
      var seri = bilgi.olaylar.seri;
      if (seri) {
        cumleler.appendChild(el('p', null, seri.sayi > 1 ? yaz(METIN.sonu.seri, { sayi: seri.sayi }) : METIN.sonu.seriBir));
        if (seri.donum) cumleler.appendChild(el('p', null, yaz(METIN.sonu.donum, { sayi: seri.donum })));
      } else if (bilgi.tur !== 'ders') {
        cumleler.appendChild(el('p', null, yaz(METIN.sonu.seriSayilmadi, { sayi: M.AYARLAR.seriTekrarSoru })));
      }
      cumleler.appendChild(el('p', null, yaz(METIN.sonu.ilerleme, { toplam: p.toplamDers, biten: p.bitenDers })));
      if (h.tamam) cumleler.appendChild(el('p', null, METIN.sonu.bugunlukYeter));
      var sonraki = bilgi.tur === 'ders' ? sonrakiDers(bilgi.dersId) : null;
      var yolaB = dugme('dugme ' + (sonraki && !h.tamam ? 'ikincil' : 'birincil'), METIN.genel.yolaDon, function () { U.yolKaydir = true; cizE3(); });
      var sonrakiB = sonraki ? dugme('dugme ' + (h.tamam ? 'ikincil' : 'birincil'), METIN.sonu.sonraki, function () { dersAc(sonraki); }) : null;
      ekle(kokE, ekle(el('div', 'odak-govde sonuc'),
        ekle(el('div', 'odak-sol'), kutlamaKabi(plan), balon(soz)),
        ekle(el('div', 'odak-sag'), h1, cumleler, ekle(el('div', 'sonuc-dugmeler'), h.tamam ? yolaB : sonrakiB, h.tamam ? sonrakiB : yolaB))));
      sesCal('kutlama');
      odakla(h1);
    }
    // E7 ilk cümlesi. Sayaç oynayacaksa (plan birden çok adım) görünen kopya sayar ve aria-hidden; ekran okuyucu son cümleyi okur.
    function ilkDenemeCumlesi(bilgi, plan) {
      var tam = yaz(METIN.sonu.ilkDeneme, { toplam: bilgi.toplam, dogru: bilgi.dogru });
      var parca = METIN.sonu.ilkDeneme.split('{dogru}');
      if (!plan || plan.sayac.length < 2 || parca.length < 2) return el('p', null, tam);
      var sayi = el('span', 'sayac', String(plan.sayac[0].deger));
      var gorunen = ekle(el('span', 'sayan'), d.createTextNode(yaz(parca[0], { toplam: bilgi.toplam })), sayi,
        d.createTextNode(yaz(parca.slice(1).join('{dogru}'), { toplam: bilgi.toplam })));
      gorunen.setAttribute('aria-hidden', 'true');
      plan.sayac.slice(1).forEach(function (a) { sonra(a.t, function () { sayi.textContent = String(a.deger); }); });
      return ekle(el('p'), el('span', 'gizli-etiket', tam), gorunen);
    }
    // K2-K3: Çakıl ve arkasındaki parçacıklar. Hareketi azaltta plan boş: parçacık yok, zıplama yok.
    function kutlamaKabi(plan) {
      var kap = el('div', 'kutlama');
      var parcalar = (plan ? plan.parcalar : []).map(function (p) {
        var e = el('span', 'parca ' + (p.tur === 'yaprak' ? 'yaprak-parca' : 'tas-parca'));
        e.setAttribute('aria-hidden', 'true');
        e.style.setProperty('--dx', p.dx + 'px');
        e.style.setProperty('--dy', p.dy + 'px');
        e.style.setProperty('--donus', p.donus + 'deg');
        e.style.setProperty('--gecikme', p.gecikme + 'ms');
        e.style.setProperty('--boy', p.boy + 'px');
        return kap.appendChild(e);
      });
      var c = kap.appendChild(cakil('sevinc', 'cakil-buyuk' + (plan && plan.zipla ? ' kutla-zipla' : '')));
      if (parcalar.length) {
        sonra(H.sureler(false).parcaTemizlik, function () { parcalar.forEach(function (e) { if (e.parentNode) e.parentNode.removeChild(e); }); });
      }
      U.canliCakil = c;
      return kap;
    }
    function sinavBitir() {
      var o = U.oturum, tur = U.oturumTur;
      var kilitli = kilitliDugumler();
      var r = M.oturumBitir(dizin, U.durum, o, simdi());
      durumKaydet(r.durum);
      U.yolSonrasi = yeniAcilanlar(kilitli);
      U.oturum = null; U.oturumTur = null;
      goster('E2');
      var kokE = temizle(K.E2);
      var ol = r.olaylar;
      var h1 = baslikEl('h1', 'buyuk-baslik', tur === 'yerlesim' ? METIN.sinav.sonucBaslik : METIN.sinav.birimSonucBaslik);
      var sag = ekle(el('div', 'odak-sag'), h1);
      if (tur !== 'yerlesim') sag.appendChild(el('p', null, ol.gecilenBirimler.length ? METIN.sinav.birimGecti : METIN.sinav.birimKaldi));
      // TASARIM bölüm 13: seçilen her birim için bir satır; simge ve söz birlikte (renk tek başına bilgi taşımaz).
      if (ol.birimSonuclari.length) {
        var ul = el('ul', 'liste sonuc-liste');
        ol.birimSonuclari.forEach(function (x) {
          ul.appendChild(ekle(el('li', 'liste-satir'), simge(x.gecti ? 'onay' : 'carpi'),
            ekle(el('span', 'secenek-metin'), el('span', 'kucuk-baslik', birimAdi(x.birim)),
              el('span', 'ikincil-metin', ' ' + yaz(x.gecti ? METIN.sinav.gecti : METIN.sinav.kaldi, { sorulan: x.sorulan, dogru: x.dogru })))));
        });
        ekle(sag, el('h2', 'ara-baslik', METIN.sinav.sonucListe), ul);
      }
      if (tur === 'yerlesim') {
        if (!ol.gecilenBirimler.length) sag.appendChild(el('p', null, METIN.sinav.gecilenYok));
        var sonraki = null;
        M.yol(dizin, U.durum, simdi()).forEach(function (b) { b.dugumler.forEach(function (dg) { if (dg.etkin) sonraki = dg.id; }); });
        sag.appendChild(el('p', null, sonraki
          ? yaz(METIN.sinav.siradaki, { ders: dersVeri[sonraki].baslik, birim: birimAdi(dizin.dersMap[sonraki].birimId) })
          : METIN.sinav.hepsi));
      }
      ol.yanlislar.forEach(function (y) {
        var soru = dizin.soruMap[y.soru];
        ekle(sag, el('h2', 'ara-baslik', METIN.sinav.yanlisBaslik), el('p', null, soru.soru),
          el('p', 'kucuk-baslik', METIN.sinav.senin), satirlarEl(cevapMetni(soru, y.verilen)),
          el('p', 'kucuk-baslik', METIN.sinav.dogru), satirlarEl(cevapMetni(soru, y.dogruCevap)),
          el('p', null, y.aciklama));
      });
      if (tur === 'yerlesim' && ol.gecilenBirimler.length) sag.appendChild(el('p', 'ikincil-metin', METIN.sinav.geriAlBilgi));
      sag.appendChild(ekle(el('div', 'sonuc-dugmeler'), dugme('dugme birincil', METIN.genel.yolaGit, function () { U.yolKaydir = true; cizE3(); })));
      ekle(kokE, ekle(el('div', 'odak-govde sonuc'),
        ekle(el('div', 'odak-sol'), cakil(ol.gecilenBirimler.length ? 'sevinc' : 'destek', 'cakil-buyuk'),
          balon(ol.gecilenBirimler.length ? METIN.sinav.cakilSonuc : METIN.sinav.cakilSonucYok)), sag));
      odakla(h1);
      basariKontrol();
    }

    // ---------- E8 tekrar girişi ----------

    function cizE8() {
      goster('E8');
      var kokE = temizle(K.E8);
      var t = simdi();
      var o = M.tekrarBaslat(dizin, U.durum, t);
      var vade = M.vadesiGelenler(U.durum, t).filter(function (id) { return dizin.soruMap[id]; }).length;
      var n = o.ogeler.length;
      var h1 = baslikEl('h1', 'ara-baslik', METIN.tekrar.baslik);
      var soz = n ? yaz(METIN.tekrar.bekliyor, { sayi: n }) : (vade ? yaz(METIN.tekrar.tavan, { sayi: M.AYARLAR.tekrarTavani }) : METIN.tekrar.yok);
      var orta = ekle(el('div', 'orta tek-sutun'), h1, ekle(el('div', 'cakil-satir'), cakil(n ? 'uykulu' : 'selam', 'cakil-120'), balon(soz)));
      if (n) {
        var say = {};
        o.ogeler.forEach(function (x) { var b = dizin.soruBirim[x.soru]; say[b] = (say[b] || 0) + 1; });
        var ul = el('ul', 'liste');
        dizin.birimler.forEach(function (b) {
          if (say[b.id]) ul.appendChild(ekle(el('li', 'liste-satir'), el('span', null, birimAdi(b.id)), el('span', 'ikincil-metin', yaz(METIN.tekrar.birimSatir, { sayi: say[b.id] }))));
        });
        ekle(orta, el('h2', 'kucuk-baslik', METIN.tekrar.listeBaslik), ul);
      }
      orta.appendChild(el('p', 'ikincil-metin', METIN.tekrar.aciklama));
      var eylem = n ? dugme('dugme birincil', METIN.tekrar.basla, tekrarAc) : dugme('dugme birincil', METIN.genel.yolaDon, function () { U.yolKaydir = true; cizE3(); });
      orta.appendChild(ekle(el('div', 'eylem-cubugu'), eylem));
      kokE.appendChild(orta);
      odakla(h1);
    }

    // ---------- E9 sözlük ----------

    function cizE9(odakAra) {
      goster('E9');
      var kokE = temizle(K.E9);
      var h1 = baslikEl('h1', 'ara-baslik', METIN.sozluk.baslik);
      var etiket = el('label', 'gizli-etiket', METIN.sozluk.araEtiket);
      etiket.setAttribute('for', 'sozluk-ara');
      var ara = el('input', 'arama');
      ara.setAttribute('id', 'sozluk-ara');
      ara.setAttribute('type', 'search');
      ara.setAttribute('autocomplete', 'off');
      ara.setAttribute('placeholder', METIN.sozluk.ara);
      ara.value = U.sozlukSorgu;
      ara.addEventListener('input', function () { U.sozlukSorgu = ara.value; listeCiz(); });
      var liste = el('div', 'sozluk-liste');
      var ayrinti = el('div', 'sozluk-ayrinti');
      ayrinti.setAttribute('aria-live', 'polite');
      function ayrintiCiz(e) {
        var kutu = el('div', 'terim-ayrinti');
        ekle(kutu, el('h3', 'ara-baslik', e.tr), e.en ? el('p', 'ikincil-metin', yaz(METIN.ders.ingilizce, { en: e.en })) : null, el('p', null, e.aciklama));
        var acik = false;
        M.yol(dizin, U.durum, simdi()).forEach(function (b) { b.dugumler.forEach(function (dg) { if (dg.id === e.dersId && dg.durum !== 'kilitli') acik = true; }); });
        if (acik) kutu.appendChild(dugme('metin-dugme', yaz(METIN.sozluk.ilkDers, { ders: e.dersBaslik }), function () { dersAc(e.dersId); }));
        else kutu.appendChild(el('p', 'ikincil-metin', yaz(METIN.sozluk.kilitli, { ders: e.dersBaslik })));
        return kutu;
      }
      function listeCiz() {
        temizle(liste);
        temizle(ayrinti);
        var laptop = laptopMu();
        var bulunan = sozlukSuz(SOZLUK, U.sozlukSorgu);
        if (!bulunan.length) { liste.appendChild(el('p', 'ikincil-metin', METIN.sozluk.bos)); return; }
        var harf, ul = null;
        U.sozlukOdak = {};
        bulunan.forEach(function (e) {
          var hb = harfBasi(e.tr);
          if (hb !== harf) {
            harf = hb;
            liste.appendChild(el('h2', 'harf ara-baslik', hb || METIN.sozluk.diger));
            ul = el('ul', 'sozluk-satirlari');
            liste.appendChild(ul);
          }
          var li = el('li');
          var secili = U.sozlukSecili === e.anahtar;
          var b = dugme('sozluk-satir' + (secili ? ' secili' : ''), null, function () {
            U.sozlukSecili = secili ? null : e.anahtar;
            listeCiz();
            odakla(U.sozlukOdak[e.anahtar]);
          });
          U.sozlukOdak[e.anahtar] = b;
          b.setAttribute('aria-expanded', secili ? 'true' : 'false');
          ekle(b, el('span', 'sozluk-tr', e.tr), e.en ? el('span', 'sozluk-en ikincil-metin', e.en) : null);
          li.appendChild(b);
          if (secili) {
            if (laptop) ayrinti.appendChild(ayrintiCiz(e)); else li.appendChild(ayrintiCiz(e));
          }
          ul.appendChild(li);
        });
        if (laptop && !U.sozlukSecili) ayrinti.appendChild(el('p', 'ikincil-metin', METIN.sozluk.sec));
      }
      listeCiz();
      ekle(kokE, ekle(el('div', 'sozluk'), h1, etiket, ara, ekle(el('div', 'sozluk-govde'), liste, ayrinti)));
      odakla(odakAra ? ara : h1);
    }

    // ---------- E11 işaretler (TASARIM bölüm 10) ----------

    function basariSatiri(b) {
      var m = METIN.basari.isaretler[b.id];
      var durumMetni = b.kazanildi ? METIN.basari.kazanildi
        : (b.esik > 1 ? yaz(METIN.basari.henuzSayi, { deger: Math.min(b.deger, b.esik), esik: b.esik }) : METIN.basari.henuz);
      var li = el('li', 'basari-satir' + (b.kazanildi ? ' kazanildi' : ''));
      li.setAttribute('data-basari', b.id);
      ekle(li, basariResmi(b.id, b.kazanildi, 'basari-resim'),
        ekle(el('div', 'basari-metin'), el('p', 'basari-ad', m.ad), el('p', null, yaz(m.kural, { esik: b.esik, toplam: dizin.dersler.length })),
          ekle(el('p', 'basari-durum'), simge(b.kazanildi ? 'onay' : 'bos'), el('span', null, durumMetni))));
      return li;
    }
    function cizE11() {
      goster('E11');
      var kokE = temizle(K.E11);
      var o = basariOzeti();
      var h1 = baslikEl('h1', 'ara-baslik', METIN.basari.baslik);
      var orta = ekle(el('div', 'orta tek-sutun'), h1, el('p', null, basariOzetMetni(o)), el('p', 'ikincil-metin', METIN.basari.aciklama));
      [[true, METIN.basari.kazanilanlar], [false, METIN.basari.onundekiler]].forEach(function (g) {
        var grup = o.liste.filter(function (b) { return b.kazanildi === g[0]; });
        if (!grup.length) return;
        var ul = el('ul', 'basari-liste');
        grup.forEach(function (b) { ul.appendChild(basariSatiri(b)); });
        ekle(orta, el('h2', 'kucuk-baslik', g[1]), ul);
      });
      kokE.appendChild(orta);
      odakla(h1);
    }

    // ---------- E12 son yedi gün (TASARIM bölüm 11) ----------

    // Yedi sütunlu grafik: tur 'dakika' ya da 'dogru'. Her sütun bir li: görünmeyen tam cümle, görünen kısa değer, çubuk ve gün adı.
    function haftaGrafigi(tur, o) {
      var ol = el('ol', 'hafta-grafik hafta-' + tur);
      ol.setAttribute('aria-label', tur === 'dakika' ? METIN.hafta.dakikaBaslik : METIN.hafta.dogruBaslik);
      if (tur === 'dakika') ol.style.setProperty('--hedef', String(o.hedefDakika * 60000 / o.olcekMs));
      o.gunler.forEach(function (g) {
        var ad = g.bugun ? METIN.hafta.bugun : METIN.seri.gunler[g.haftaGunu];
        var oran = 0, deger = '', cumle, sinif = 'hafta-gun' + (g.bugun ? ' bugun' : '');
        if (tur === 'dakika') {
          oran = g.sureMs / o.olcekMs;
          deger = String(g.dakika);
          cumle = yaz(METIN.hafta.dakikaEtiket, { gun: ad, dakika: g.dakika });
        } else if (g.veriYok) {
          deger = METIN.hafta.yok;
          sinif += ' veri-yok';
          cumle = yaz(METIN.hafta.veriYokEtiket, { gun: ad });
        } else if (g.cevap) {
          oran = g.oran;
          deger = String(Math.round(g.oran * 100));
          cumle = yaz(METIN.hafta.dogruEtiket, { gun: ad, cevap: g.cevap, dogru: g.dogru });
        } else {
          cumle = yaz(METIN.hafta.cevapYokEtiket, { gun: ad });
        }
        var sutun = el('span', 'hafta-sutun');
        if (oran > 0) {
          var c = el('span', 'hafta-cubuk');
          c.style.setProperty('--oran', String(Math.max(oran, 0.04))); // görünür kalsın
          sutun.appendChild(c);
        }
        var gorunen = [el('span', 'hafta-deger', deger), sutun, el('span', 'hafta-ad', METIN.seri.gunKisa[g.haftaGunu])];
        gorunen.forEach(function (x) { x.setAttribute('aria-hidden', 'true'); });
        ol.appendChild(ekle(el('li', sinif), el('span', 'gizli-etiket', cumle), gorunen[0], gorunen[1], gorunen[2]));
      });
      return ol;
    }
    function zorSatiri(z) {
      var ders = dizin.dersMap[z.ders];
      var sablon = z.anlasilmadi ? (z.yanlis ? METIN.hafta.zorIkisi : METIN.hafta.zorAnlasilmadi) : METIN.hafta.zorYanlis;
      var kisaYol;
      if (z.acik) {
        kisaYol = dugme('metin-dugme hafta-yeniden', METIN.hafta.yeniden, function () { dersAc(z.ders); });
        kisaYol.setAttribute('aria-label', yaz(METIN.hafta.yenidenEtiket, { ders: ders.baslik }));
      } else {
        kisaYol = el('p', 'ikincil-metin', METIN.hafta.kilitli);
      }
      var li = el('li', 'hafta-satir');
      li.setAttribute('data-ders', z.ders);
      return ekle(li, el('p', 'hafta-ders', ders.baslik), el('p', 'ikincil-metin', birimAdi(z.birim)),
        el('p', null, yaz(sablon, { cevap: z.cevap, yanlis: z.yanlis, anlasilmadi: z.anlasilmadi })), kisaYol);
    }
    function cizE12() {
      goster('E12');
      var kokE = temizle(K.E12);
      var o = M.haftalikOzet(dizin, U.durum, simdi());
      var h1 = baslikEl('h1', 'ara-baslik', METIN.hafta.baslik);
      var orta = ekle(el('div', 'orta tek-sutun'), h1,
        el('p', null, o.bos ? METIN.hafta.ozetBos : yaz(METIN.hafta.ozet, { gun: o.toplam.calisilanGun, dakika: o.toplam.dakika })));
      orta.appendChild(ekle(el('section', 'hafta-kart'), el('h2', 'kucuk-baslik', METIN.hafta.dakikaBaslik),
        el('p', 'ikincil-metin', yaz(METIN.hafta.dakikaAciklama, { hedef: o.hedefDakika })), haftaGrafigi('dakika', o)));
      orta.appendChild(ekle(el('section', 'hafta-kart'), el('h2', 'kucuk-baslik', METIN.hafta.dogruBaslik),
        el('p', 'ikincil-metin', METIN.hafta.dogruAciklama), haftaGrafigi('dogru', o),
        el('p', null, o.toplam.cevap ? yaz(METIN.hafta.dogruOzet, { cevap: o.toplam.cevap, dogru: o.toplam.dogru }) : METIN.hafta.dogruYok),
        o.toplam.veriYokGun ? el('p', 'ikincil-metin', METIN.hafta.veriYok) : null));
      var zor = ekle(el('section', 'hafta-zor'), el('h2', 'kucuk-baslik', METIN.hafta.zorBaslik));
      if (o.zorlananlar.length) {
        var ul = el('ul', 'hafta-liste');
        o.zorlananlar.forEach(function (z) { ul.appendChild(zorSatiri(z)); });
        ekle(zor, el('p', 'ikincil-metin', METIN.hafta.zorAciklama), ul);
      } else {
        zor.appendChild(el('p', null, o.toplam.cevap ? METIN.hafta.zorYok : METIN.hafta.zorKayitYok));
      }
      orta.appendChild(zor);
      kokE.appendChild(orta);
      odakla(h1);
    }

    // ---------- E10 ayarlar ve ilerleme aktarma ----------

    function secimDugmesi(metin, secili, tik) {
      var b = dugme('dugme ikincil secim' + (secili ? ' secili' : ''), null, tik);
      b.setAttribute('aria-pressed', secili ? 'true' : 'false');
      if (secili) b.appendChild(simge('onay'));
      b.appendChild(el('span', null, metin));
      return b;
    }
    function cizE10(odakAnahtar) {
      goster('E10');
      var kokE = temizle(K.E10);
      var p = M.puan(dizin, U.durum), a = M.anlasilmadiOrani(U.durum);
      var odakE = null;
      var h1 = baslikEl('h1', 'ara-baslik', METIN.ayarlar.baslik);
      var kol = ekle(el('div', 'ayarlar'), h1);

      var yonB = el('div', 'secim-grup');
      [['a', METIN.ayarlar.yonA], ['b', METIN.ayarlar.yonB]].forEach(function (x) {
        var b = secimDugmesi(x[1], gorunum.yon === x[0], function () { gorunum.yon = x[0]; gorunumKaydet(); gorunumUygula(); cizE10('yon-' + x[0]); });
        if (odakAnahtar === 'yon-' + x[0]) odakE = b;
        yonB.appendChild(b);
      });
      kol.appendChild(ekle(el('section', 'ayar-bolum'), el('h2', 'kucuk-baslik', METIN.ayarlar.gorunus), el('p', 'ikincil-metin', METIN.ayarlar.gorunusAciklama), yonB));

      var hedefB = el('div', 'secim-grup');
      M.AYARLAR.hedefSecenek.forEach(function (dk) {
        var b = secimDugmesi(yaz(METIN.ayarlar.hedefSecenek, { dakika: dk }), U.durum.ayarlar.hedefDakika === dk, function () {
          durumKaydet(M.hedefAyarla(U.durum, dk));
          cizE10('hedef-' + dk);
        });
        if (odakAnahtar === 'hedef-' + dk) odakE = b;
        hedefB.appendChild(b);
      });
      kol.appendChild(ekle(el('section', 'ayar-bolum'), el('h2', 'kucuk-baslik', METIN.ayarlar.hedef),
        el('p', null, yaz(METIN.ayarlar.hedefSimdi, { dakika: U.durum.ayarlar.hedefDakika })), hedefB));

      function anahtarSatiri(ad, acik, tik) {
        var b = dugme('anahtar-satir', null, tik);
        b.setAttribute('role', 'switch');
        b.setAttribute('aria-checked', acik ? 'true' : 'false');
        ekle(b, el('span', 'anahtar-ad', ad),
          ekle(el('span', 'anahtar-sag'), el('span', 'anahtar-durum ikincil-metin', acik ? METIN.ayarlar.acik : METIN.ayarlar.kapali), el('span', 'anahtar')));
        return b;
      }
      var anahtar = anahtarSatiri(METIN.ayarlar.hareket, gorunum.azHareket, function () {
        gorunum.azHareket = !gorunum.azHareket; gorunumKaydet(); gorunumUygula(); canlanmaBaslat(); cizE10('hareket');
      });
      if (odakAnahtar === 'hareket') odakE = anahtar;
      // Sesler (TASARIM bölüm 8): açılınca örnek dokunuş sesi çalar; kapalıyken ses üreticisine çağrı gitmez.
      var sesAnahtari = anahtarSatiri(METIN.ayarlar.ses, gorunum.ses, function () {
        gorunum.ses = !gorunum.ses; gorunumKaydet(); sesCal('dokunus'); cizE10('ses');
      });
      sesAnahtari.classList.add('ses-anahtari');
      if (odakAnahtar === 'ses') odakE = sesAnahtari;
      kol.appendChild(ekle(el('section', 'ayar-bolum'), anahtar, sesAnahtari));

      // Tema (TASARIM bölüm 9): Otomatik cihazın gece kipini izler; seçim görünüş tercihiyle aynı anahtarda.
      var temaB = el('div', 'secim-grup tema-secim');
      [['otomatik', METIN.ayarlar.temaOtomatik], ['acik', METIN.ayarlar.temaAcik], ['koyu', METIN.ayarlar.temaKoyu]].forEach(function (x) {
        var b = secimDugmesi(x[1], gorunum.tema === x[0], function () { gorunum.tema = x[0]; gorunumKaydet(); gorunumUygula(); cizE10('tema-' + x[0]); });
        b.setAttribute('data-tema', x[0]);
        if (odakAnahtar === 'tema-' + x[0]) odakE = b;
        temaB.appendChild(b);
      });
      kol.appendChild(ekle(el('section', 'ayar-bolum'), el('h2', 'kucuk-baslik', METIN.ayarlar.tema), el('p', 'ikincil-metin', METIN.ayarlar.temaAciklama), temaB));

      kol.appendChild(ekle(el('section', 'ayar-bolum'), el('h2', 'kucuk-baslik', METIN.ayarlar.ilerleme),
        el('p', null, yaz(METIN.ayarlar.ilerlemeDers, { toplam: p.toplamDers, biten: p.bitenDers })),
        el('p', null, yaz(METIN.ayarlar.ilerlemeSoru, { sayi: p.ogrenilenSoru })),
        el('p', 'ikincil-metin', yaz(METIN.ayarlar.anlasilmadi, { isaretli: a.isaretli, gorulen: a.gorulen })),
        el('p', null, basariOzetMetni(basariOzeti())),
        ekle(el('div', 'dugmeler'), dugme('metin-dugme', METIN.basari.bak, function () { cizE11(); }),
          dugme('metin-dugme', METIN.hafta.bak, function () { cizE12(); }))));

      var tasi = ekle(el('section', 'ayar-bolum'), el('h2', 'kucuk-baslik', METIN.ayarlar.tasi), el('p', 'ikincil-metin', METIN.ayarlar.tasiAciklama));
      var disaB = dugme('dugme ikincil' + (U.aktarim === 'disa' ? ' secili' : ''), METIN.ayarlar.disa, function () { U.aktarim = 'disa'; U.aktarimMesaj = null; cizE10('kod'); });
      var iceB = dugme('dugme ikincil' + (U.aktarim === 'ice' ? ' secili' : ''), METIN.ayarlar.ice, function () { U.aktarim = 'ice'; U.aktarimMesaj = null; cizE10('kod'); });
      tasi.appendChild(ekle(el('div', 'dugmeler yan-yana'), disaB, iceB));
      if (U.aktarim) {
        var et = el('label', 'kucuk-baslik', U.aktarim === 'disa' ? METIN.ayarlar.kodEtiket : METIN.ayarlar.yapistir);
        et.setAttribute('for', 'kod-alani');
        var alan = el('textarea', 'kod-alani');
        alan.setAttribute('id', 'kod-alani');
        alan.setAttribute('rows', '4');
        alan.setAttribute('spellcheck', 'false');
        alan.setAttribute('autocomplete', 'off');
        var mesaj = el('p', 'aktarim-mesaj', U.aktarimMesaj || '');
        mesaj.setAttribute('role', 'status');
        var islem;
        if (U.aktarim === 'disa') {
          alan.value = D.disaAktar(U.durum);
          alan.setAttribute('readonly', '');
          islem = dugme('dugme birincil', METIN.ayarlar.kopyala, function () { kopyala(alan, mesaj); });
        } else {
          islem = dugme('dugme birincil', METIN.ayarlar.yukle, function () { koduYukle(alan.value, mesaj); });
        }
        if (odakAnahtar === 'kod') odakE = alan;
        ekle(tasi, et, alan, ekle(el('div', 'dugmeler'), islem), mesaj);
      }
      kol.appendChild(tasi);

      // TASARIM bölüm 13: "Seviye belirlemeyi yeniden yap" her zaman; bilgi ve geri alma yalnız kayıt varken (iki biçimde de).
      var yb = M.yerlesimBilgisi(U.durum);
      var yerlesimB = ekle(el('section', 'ayar-bolum'), el('h2', 'kucuk-baslik', METIN.ayarlar.yerlesim),
        yb ? el('p', null, yaz(METIN.ayarlar.yerlesimBilgi, { sayi: yb.gecilen })) : null,
        el('p', 'ikincil-metin', METIN.ayarlar.yerlesimAciklama));
      var yerlesimD = ekle(el('div', 'dugmeler'), dugme('dugme ikincil', METIN.ayarlar.yerlesimYeniden, function () { konuSecAc('E10'); }));
      kol.appendChild(ekle(yerlesimB, yerlesimD));
      if (yb) {
        ekle(yerlesimD, dugme('dugme ikincil', METIN.ayarlar.yerlesimGeriAl, function () {
            onayAc(METIN.ayarlar.yerlesimOnayBaslik, METIN.ayarlar.yerlesimOnayMetin, METIN.ayarlar.geriAl, function () {
              durumKaydet(M.yerlesimGeriAl(U.durum));
              bildir(METIN.ayarlar.geriAlindi);
              cizE10();
            });
          }));
      }

      kol.appendChild(ekle(el('section', 'ayar-bolum'), ekle(el('div', 'dugmeler'), dugme('dugme ikincil tehlike', METIN.ayarlar.sifirla, function () {
        onayAc(METIN.ayarlar.sifirlaOnayBaslik, METIN.ayarlar.sifirlaOnayMetin, METIN.ayarlar.sifirlaEvet, function () {
          durumKaydet(M.yeniDurum(simdi()));
          gorunum.karsilama = false;
          gorunumKaydet();
          U.duyuru = null;
          cizE1();
        });
      }))));

      kokE.appendChild(kol);
      odakla(odakE || h1);
    }
    function kopyala(alan, mesaj) {
      function eski() {
        var oldu = false;
        try { alan.select(); oldu = !!(d.execCommand && d.execCommand('copy')); } catch (e) { oldu = false; }
        mesaj.textContent = oldu ? METIN.ayarlar.kopyalandi : METIN.ayarlar.kopyalanamadi;
      }
      var pano = w.navigator && w.navigator.clipboard;
      if (pano && pano.writeText) {
        pano.writeText(alan.value).then(function () { mesaj.textContent = METIN.ayarlar.kopyalandi; }, eski);
      } else {
        eski();
      }
    }
    function koduYukle(kod, mesaj) {
      var c = D.kodCoz(kod, M.durumGecerli);
      if (!c.tamam) { mesaj.textContent = METIN.depo.hata[c.hata] || METIN.depo.hata.bicim; return; }
      onayAc(METIN.ayarlar.onayBaslik, METIN.ayarlar.onayMetin, METIN.ayarlar.degistir, function () {
        var r = D.iceAktar(depo, kod, simdi());
        if (!r.tamam) { U.aktarimMesaj = METIN.depo.hata[r.hata] || METIN.depo.hata.durum; cizE10('kod'); return; }
        var ac = M.acilis(depo.durum, simdi());
        durumKaydet(M.basariGuncelle(dizin, ac.durum, simdi()).durum); // sessiz: koddaki ilerlemenin hak ettiği işaretler
        gorunum.karsilama = true;
        gorunumKaydet();
        U.aktarim = null;
        U.aktarimMesaj = null;
        bildir(METIN.ayarlar.yuklendi);
        cizE10();
      });
    }

    // ---------- klavye ----------

    function odaktakiTur(t) {
      var ad = t && t.tagName ? String(t.tagName).toLowerCase() : '';
      if (ad === 'input' || ad === 'textarea' || ad === 'select' || (t && t.isContentEditable)) return 'alan';
      var s = t && t.classList;
      if (s && (s.contains('secenek') || s.contains('cip-secenek') || s.contains('dy-dugme'))) return 'secenek';
      if (ad === 'button' || ad === 'a' || ad === 'summary') return 'dugme';
      return null;
    }
    function odakTuzagi(e) {
      var odaklanir = [];
      (function gez(n) {
        (n.childNodes || []).forEach(function (c) {
          if (c.nodeType !== 1) return;
          var ad = String(c.tagName).toLowerCase();
          if ((ad === 'button' || ad === 'a' || ad === 'textarea' || ad === 'input') && !c.disabled) odaklanir.push(c);
          gez(c);
        });
      })(altSayfaEl);
      if (!odaklanir.length) return;
      var ilk = odaklanir[0], son = odaklanir[odaklanir.length - 1];
      if (e.shiftKey && (d.activeElement === ilk || !altSayfaEl.contains(d.activeElement))) { e.preventDefault(); odakla(son); }
      else if (!e.shiftKey && (d.activeElement === son || !altSayfaEl.contains(d.activeElement))) { e.preventDefault(); odakla(ilk); }
    }
    d.addEventListener('keydown', function (e) {
      var baglam = {
        ekran: U.ekranTur,
        tur: U.g ? U.g.tur : null,
        secenekSayisi: U.g && U.g.secenekler ? U.g.secenekler.length : 0,
        secimVar: (U.ekranTur === 'soru' || U.ekranTur === 'sinav') && secimTamam(),
        panelAcik: !!U.panel,
        altSayfaAcik: !altSayfaEl.hidden,
        hedef: odaktakiTur(e.target),
        degistirici: !!(e.ctrlKey || e.metaKey || e.altKey)
      };
      var r = tusEylemi(e.key, baglam);
      if (!r) {
        if (e.key === 'Tab' && baglam.altSayfaAcik) odakTuzagi(e);
        return;
      }
      e.preventDefault();
      if (r.eylem === 'sec') secSira(r.sira);
      else if (r.eylem === 'kontrol') kontrol();
      else if (r.eylem === 'devam') kartDevam();
      else if (r.eylem === 'panel') { if (U.panelBirincil) U.panelBirincil.click(); }
      else if (r.eylem === 'kapat') altSayfaKapat();
    });
    // iOS kuralı: ses bağlamı ilk kullanıcı dokunuşunda kurulur, askıdaysa sürdürülür (Sesler kapalıysa hiçbir şey yapmaz).
    ['touchend', 'click', 'keydown'].forEach(function (t) { d.addEventListener(t, function () { sesAc(); }, true); });
    if (w.matchMedia) {
      var mq = w.matchMedia(LAPTOP);
      var degisti = function () { if (U.ekran === 'E9') cizE9(); };
      if (mq && mq.addEventListener) mq.addEventListener('change', degisti);
      else if (mq && mq.addListener) mq.addListener(degisti);
      var mqAz = w.matchMedia(AZ_HAREKET);
      if (mqAz && mqAz.addEventListener) mqAz.addEventListener('change', canlanmaBaslat);
      else if (mqAz && mqAz.addListener) mqAz.addListener(canlanmaBaslat);
      // Otomatik temada cihaz gece kipine girip çıkınca sayfa yenilenmeden uyar (Açık ve Koyu'da sınıf değişmez).
      var mqGece = w.matchMedia(GECE_KIPI);
      var geceDegisti = function () { gorunumUygula(); };
      if (mqGece && mqGece.addEventListener) mqGece.addEventListener('change', geceDegisti);
      else if (mqGece && mqGece.addListener) mqGece.addListener(geceDegisti);
    }

    // ---------- açılış ----------

    gorunumUygula();
    var acilisV = M.acilis(U.durum, simdi());
    // Sessiz: 15.11 biçimindeki kayıtta o güne kadar hak edilen işaretler bildirimsiz yazılır (bildirim yağmuru yok).
    durumKaydet(M.basariGuncelle(dizin, acilisV.durum, simdi()).durum);
    var ol = acilisV.olaylar;
    var bekleyen = M.vadesiGelenler(U.durum, simdi()).length;
    if (ol.uzunAra) U.duyuru = { metin: METIN.yol.donus + (bekleyen ? ' ' + METIN.yol.donusTekrar : ''), ifade: 'selam' };
    else if (ol.onarilan.length) U.duyuru = { metin: ol.onarilan.length > 1 ? METIN.yol.onarildiCok : METIN.yol.onarildi, ifade: 'destek' };
    else if (ol.koptu) U.duyuru = { metin: METIN.yol.koptu, ifade: 'destek' };
    if (depo.bildirim && METIN.depo[depo.bildirim]) bildir(METIN.depo[depo.bildirim]);

    var bos = !Object.keys(U.durum.dersler).length && !U.durum.yerlesim && !Object.keys(U.durum.tekrar).length;
    if (bos && !gorunum.karsilama) cizE1(); else cizE3();

    // Test ve hata ayıklama için okuma kapısı (durum değiştirmez).
    return { durum: function () { return U.durum; }, ekran: function () { return U.ekran; } };
  }

  var api = {
    METIN: METIN,
    EKRANLAR: EKRANLAR,
    CEVAP_EKRANI: CEVAP_EKRANI,
    GORUNUM_ANAHTARI: GORUNUM_ANAHTARI,
    yaz: yaz,
    gorunumCoz: gorunumCoz,
    koyuMu: koyuMu,
    kaynakParcasi: kaynakParcasi,
    tusEylemi: tusEylemi,
    hedefSen: hedefSen,
    kartlar: kartlar,
    sozlukKur: sozlukKur,
    sozlukSuz: sozlukSuz,
    harfBasi: harfBasi,
    cevapMetni: cevapMetni,
    dogruCevapAsil: dogruCevapAsil,
    baslat: baslat
  };
  kok.OGRENME_ARAYUZ = api;
  if (typeof module !== 'undefined' && module && module.exports) {
    module.exports = api;
  } else if (kok.document) {
    var calistir = function () { kok.OGRENME_ARAYUZ_UYGULAMA = baslat(kok); };
    if (kok.document.readyState === 'loading') kok.document.addEventListener('DOMContentLoaded', calistir);
    else calistir();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
