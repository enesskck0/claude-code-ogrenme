// icerik/birim-12.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b12",
  "sira": 12,
  "baslik": "En iyi uygulamalar ve uzun işler",
  "amac": "Kuralı metinden mekanizmaya taşımayı, kurulumu zamanla büyütmeyi, işi kanıtla bitirmeyi ve uzun, gözetimsiz koşuyu yönetmeyi öğrenirsin; sonunda bizim bir kuralı okuyup bir değişikliği Claude'a tarif edersin.",
  "dersler": [
    {
      "id": "b12-d1",
      "baslik": "Kural metni mi, mekanizma mı",
      "hedefler": [
        "Claude'un okuyup karar verdiği talimat ile Claude Code'un her seferinde uyguladığı kuralı ayırt edebilir.",
        "Bir CLAUDE.md satırına vurgu eklemek işe yaramıyorsa o satırın neden kancaya taşınacağını anlatabilir.",
        "Bizde hangi kurala mekanizma yazıldığını ve bunun nereye kaydedildiğini anlatabilir."
      ],
      "anlatim": [
        "Claude'a verdiğin talimatı (istem, CLAUDE.md, skill) Claude okur ve uyup uymamaya kendisi karar verir. Satırı ne kadar güçlü yazarsan yaz, garanti yoktur.",
        "Kanca (hook), yasak kuralı (deny rule) ya da kurum ayarını ise Claude Code, yani uygulamanın kendisi her seferinde uygular. Modelin ne düşündüğüne bakmaz.",
        "Bir CLAUDE.md satırına vurgu ekleyip durduğun halde Claude onu kaçırıyorsa satırın yeri kancadır.",
        "Tersi de geçerli: yalnız bir tercih için kancan varsa onu sil, kararı Claude'a bırak.",
        "CLAUDE.md'de biçim ve üslup kuralına mekanizma yazılmaz; kayınca söylenir, tekrar ederse önerilir. Mekanizma geri alınamaz zarar, güvenlik, para, dışa gönderim ve tekrar eden hataya yazılır.",
        "sistem-metni skill'i bu koşulların dışındaki kuralı 'yalnız metin' sayar. Bir kuralın mekanizması kuralın yanına değil, KARARLAR maddesine yazılır."
      ],
      "terimler": [
        {
          "tr": "kanca",
          "en": "hook",
          "aciklama": "Claude Code'un belli bir anda (araç çağrısından önce, tur biterken gibi) her seferinde çalıştırdığı betik."
        },
        {
          "tr": "yasak kuralı",
          "en": "deny rule",
          "aciklama": "Bir aracın ya da işin hiç yapılmamasını sağlayan izin ayarı; modelin kararına bağlı değildir."
        }
      ],
      "sorular": [
        {
          "id": "b12-d1-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude CLAUDE.md'deki 'kaynağı yaz' satırına dün uydu, bugün uymadı; dosya aynı. Neden?",
          "secenekler": [
            "Oturum CLAUDE.md'yi bu kez yüklemedi",
            "Uymak yine Claude'un kararı",
            "Claude Code satırı bir kez uygulayıp kapattı"
          ],
          "dogru": 1,
          "ipucu": "Bu satırı kimin okuyup ne yapacağına kimin karar verdiğini düşün.",
          "aciklama": "CLAUDE.md satırı Claude'un okuyup kendisinin karar verdiği bir talimattır; bir gün uyup ertesi gün uymaması bu yüzden olağandır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre istem, CLAUDE.md ya da skill gibi talimatları model okur ve ne yapacağına kendisi karar verir, bunlara uyacağının garantisi yoktur."
          }
        },
        {
          "id": "b12-d1-s6",
          "tur": "coktan",
          "kart": 1,
          "soru": "Claude'un müşteri klasörüne hiç yazmamasını kesin istiyorsun. Hangisi bunu modelden bağımsız sağlar?",
          "secenekler": [
            "CLAUDE.md'de 'ASLA' satırı",
            "Yasakları sayan bir skill",
            "İzinlerdeki yasak kuralı",
            "İstemin başındaki uyarı"
          ],
          "dogru": 2,
          "ipucu": "Seçeneklerden hangisini Claude okuyup tartıyor, hangisini uygulama uyguluyor?",
          "aciklama": "Yasak kuralını Claude Code her seferinde uygular; CLAUDE.md satırı, skill ve istem ise Claude'un okuyup uymaya karar verdiği talimatlardır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre bir şeyin her seferinde olması gerekiyorsa kanca, yasak kuralı ya da kurum ayarı yapılır, çünkü CLAUDE.md yönergeler içindir ve Claude bir yönergenin uymadığına karar verebilir."
          }
        },
        {
          "id": "b12-d1-s4",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude 'testler geçmeden commit atma' satırını kaçırıyor; ÖNEMLİ ekledin, yine kaçırdı. Sıradaki adım?",
          "secenekler": [
            "Satırı üç kez tekrarlamak",
            "Kuralı bir skill'e taşımak",
            "Kuralı bir kancaya taşımak",
            "Satırı dosyanın başına almak"
          ],
          "dogru": 2,
          "ipucu": "Vurgu, sonucu Claude'un kararından çıkarıyor mu, düşün.",
          "aciklama": "Vurgu işe yaramıyorsa kural her seferinde uygulanmalıdır; bunu kanca sağlar. Skill de CLAUDE.md gibi Claude'un okuduğu bir talimattır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgedeki ipucuna göre bir CLAUDE.md satırına vurgu ekleyip durduğun halde Claude onu yine kaçırıyorsa bu, o satırın kancaya ait olduğunun işaretidir."
          }
        },
        {
          "id": "b12-d1-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "Bir kanca her cevabı madde işaretiyle yazdırıyor; bazı cevaplar böyle okunaksız. Belgeye göre ne yaparsın?",
          "secenekler": [
            "Kancayı silip seçimi Claude'a bırakmak",
            "Kancaya okunaksız durumlar için istisna eklemek",
            "Kuralı CLAUDE.md'ye de yazmak"
          ],
          "dogru": 0,
          "ipucu": "Madde işareti bir zorunluluk mu, bir tercih mi?",
          "aciklama": "Madde işareti bir tercihtir; belgeye göre yalnız tercih için kurulan kanca silinir ve karar Claude'a bırakılır, Claude önündeki içeriğe bakarak seçer.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre yalnız tercih olan şeyler için kancan varsa onları silip kararı Claude'a bırakırsın."
          }
        },
        {
          "id": "b12-d1-s7",
          "tur": "bosluk",
          "kart": 4,
          "soru": "Claude bir cevapta gereksiz İngilizce terim kullandı; ilk kez. Bizim kurala göre yapılacak şey ___.",
          "secenekler": [
            "bunu Claude'a söylemek",
            "hemen bir kanca yazmak",
            "satırı büyük harfle yazmak"
          ],
          "dogru": 0,
          "ipucu": "Dil ve üslup hangi kural türüne giriyor?",
          "aciklama": "Bu bir üslup kaymasıdır; bizde biçim ve üslup kuralına mekanizma yazılmaz, kayma söylenir. Tekrar ederse mekanizma önerilir, onayı sen verirsin.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "CLAUDE.md, biçim ve üslup kuralına mekanizma yazılmayacağını, kayınca söyleneceğini ve tekrar ederse mekanizmayı hak edeceğini söyler.",
            "soz": "Biçim ve üslup kuralına mekanizma yazılmaz; kayarsa söylerim, tekrar ederse mekanizmayı hak eder"
          }
        },
        {
          "id": "b12-d1-s8",
          "tur": "coktan",
          "kart": 5,
          "soru": "Claude bir kuralı kaçırdı, hiçbir kanca durdurmadı. Kuralın mekanizması var mı diye bizde nereye bakarsın?",
          "secenekler": [
            "Kural satırının hemen yanına",
            "KARARLAR'daki kural maddesine",
            "Claude'a uyup uymayacağını sorarak"
          ],
          "dogru": 1,
          "ipucu": "Kuralın gerekçesi ve mekanizmasının nerede tutulduğunu düşün.",
          "aciklama": "Bizde kural metni yalnız kuralı taşır; mekanizması ya da 'yalnız metin' notu KARARLAR maddesindedir. Not 'yalnız metin' diyorsa kaçırmayı durduracak bir şey yoktur.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "sistem-metni skill'ine göre kuralın gerekçesi, tarihi ve mekanizması kuralın yanına değil KARARLAR maddesine yazılır.",
            "soz": "Kuralın gerekçesi, tarihi ve mekanizması kuralın yanına değil KARARLAR maddesine yazılır"
          }
        }
      ]
    },
    {
      "id": "b12-d2",
      "baslik": "Kurulumu zamanla büyütmek",
      "hedefler": [
        "Resmi tetiklerde hangi durumun hangi özelliği eklettiğini anlatabilir.",
        "Bizde hatadan doğan kuralın oturumda yazılmayıp geliştiricinin kural ekleme kapısına gittiğini anlatabilir.",
        "Düzeltme satırındaki 'kural o an' parçasının neyi gösterdiğini ayırt edebilir."
      ],
      "anlatim": [
        "Her şeyi baştan kurman gerekmez. Resmi belgede her özelliğin bir tetiği (trigger) var; özellik o durum gelince eklenir.",
        "Tetikler: iki kez yanlış yapılan kural CLAUDE.md'ye, üçüncü kez yapıştırılan yönerge skill'e, her seferinde sormadan olacak iş kancaya, ikinci depodaki kurulum eklentiye (plugin) gider.",
        "Bir yan iş sohbeti bir daha bakmayacağın çıktıyla dolduruyorsa onu alt ajana (subagent) ver; o işi kendi bağlamında yapıp yalnız özet getirir.",
        "Bizde yol farklı: hatadan doğan kural o oturumda kural dosyasına yazılmaz. Geliştirici ajanının kural ekleme kapısına gider.",
        "Sana ulaşan ya da doğrulayıcının yakaladığı hata KARARLAR'a Düzeltme satırı olarak girer. Claude'un kendi fark ettiği hata ise yalnız sayılır.",
        "Satır kaçıncı görülüş olduğunu ve 'kural o an' parçasını taşır: hata anında konuyu kapsayan kural satırı ya da 'yok'.",
        "Kapı önce sorar: konu zaten yazılı mıydı, yazılıyken mi çiğnendi? Öyleyse yeni kural metni önerilmez; dar bir mekanizma, doğrulayıcıya soru ya da 'öneri yok' çıkar.",
        "Para, güvenlik sınırı, geri alınamaz zarar ve dışa gönderim kuralı kapıyı beklemez, hemen yazılır. Senin kendi sözünle verdiğin kural da öyle."
      ],
      "terimler": [
        {
          "tr": "tetik",
          "en": "trigger",
          "aciklama": "Bir özelliği ekleme zamanının geldiğini gösteren, tanınır durum."
        },
        {
          "tr": "alt ajan",
          "en": "subagent",
          "aciklama": "İşi kendi ayrı bağlamında yapıp ana sohbete yalnız özet döndüren yardımcı."
        },
        {
          "tr": "eklenti",
          "en": "plugin",
          "aciklama": "Skill, kanca, alt ajan ve MCP sunucularını tek kurulabilir pakette toplayan katman."
        }
      ],
      "sorular": [
        {
          "id": "b12-d2-s3",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude yeni projenin ilk günü on skill ve beş kanca kurmayı öneriyor. Ne dersin?",
          "secenekler": [
            "Hepsini şimdi kur; sonra zor olur",
            "Her özelliği tetiği gelince ekle",
            "Yalnız kancaları şimdi kur"
          ],
          "dogru": 1,
          "ipucu": "Bir özelliği eklemenin zamanını neyin belirlediğini düşün.",
          "aciklama": "Belge her şeyi baştan kurmanın gerekmediğini söyler; her özellik kendi tetiği, yani tanınır bir durum gelince eklenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre her şeyi baştan yapılandırman gerekmez, her özelliğin tanınır bir tetiği vardır."
          }
        },
        {
          "id": "b12-d2-s1",
          "tur": "eslestir",
          "kart": 1,
          "soru": "Her durumu, resmi tetiğe göre eklenecek özellikle eşle.",
          "ciftler": [
            [
              "Her yeni raporda aynı biçim tarifini baştan yazıp duruyorsun",
              "Skill yaz"
            ],
            [
              "Her dosya kaydından sonra testler kendiliğinden koşsun",
              "Kanca yaz"
            ],
            [
              "Bir arkadaşın kurulumunu kendi bilgisayarında tek adımda kursun",
              "Eklenti (plugin) yap"
            ]
          ],
          "ipucu": "Her durumda neyin tekrar ettiğine bak: senin yazdığın bir metin mi, kendiliğinden olacak bir iş mi, bütün bir kurulum mu?",
          "aciklama": "Her seferinde yeniden yazdığın tarif skill olur, sana sormadan kendiliğinden olacak iş kancaya gider, başka yerde kurulacak bütün bir düzen eklentiyle taşınır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgedeki tabloya göre üçüncü kez yapıştırılan yönerge skill'e, her seferinde sormadan olması istenen iş kancaya, ikinci depoda gereken kurulum eklentiye gider."
          }
        },
        {
          "id": "b12-d2-s2",
          "tur": "bosluk",
          "kart": 2,
          "soru": "Alt ajanın taradığı bir dosyanın ayrıntısı özette yok ve sana lazım. En kısa yol, o dosyayı ___.",
          "secenekler": [
            "Claude'a yeniden okutmak",
            "Claude'a, ajanın okuduğundan hatırlayıp anlattırmak",
            "bağlamı sıkıştırıp geri getirmek"
          ],
          "dogru": 0,
          "ipucu": "Ajanın okuduğu metin ana sohbetin bağlamına hiç girdi mi?",
          "aciklama": "Alt ajan dosyaları kendi bağlamında okur, ana sohbete yalnız özeti getirir; özette olmayan ayrıntı ana sohbette yoktur, dosya yeniden okunur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgedeki tabloya göre bir yan iş sohbeti bir daha başvurmayacağın çıktıyla dolduruyorsa o iş bir alt ajandan geçirilir; alt ajan işi kendi bağlamında yapıp yalnız özet döndürür."
          }
        },
        {
          "id": "b12-d2-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude sıradan bir hatadan sonra 'CLAUDE.md'ye şimdi kural ekliyorum' dedi. Bizim kurala göre ne dersin?",
          "secenekler": [
            "Olur; resmi belge de iki yanlıştan sonra bunu önerir",
            "Olur; erken kural iyidir",
            "Dur; kural geliştiricinin kapısına gider"
          ],
          "dogru": 2,
          "ipucu": "Bizde hatadan doğan kuralın o oturumda nereye gittiğini düşün.",
          "aciklama": "Resmi tetik iki yanlıştan sonra CLAUDE.md'ye eklemeyi önerir; bizde hatadan doğan kural o oturumda yazılmaz, geliştiricinin kural ekleme kapısına gider.",
          "kaynak": {
            "adres": ".claude/skills/kayit-yazma/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "kayit-yazma skill'ine göre hatadan doğan kural o oturumda kural dosyasına yazılmaz, geliştiricinin kural ekleme kapısına gider.",
            "soz": "Hatadan doğan kural o oturumda kural dosyasına yazılmaz, geliştiricinin kural ekleme kapısına gider"
          }
        },
        {
          "id": "b12-d2-s4",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude aynı hatayı ikinci kez yaptı, sen fark ettin. Bizim kurala göre hata nereye yazılır?",
          "secenekler": [
            "Yalnız Claude'un hata sayacına",
            "KARARLAR'daki bir Düzeltme satırına",
            "Hiçbir yere; üçüncü kez beklenir"
          ],
          "dogru": 1,
          "ipucu": "Hatayı kimin fark ettiğine bak.",
          "aciklama": "Sana ulaşan hata KARARLAR'a Düzeltme satırı olarak yazılır; yalnız sayaca giden, Claude'un kendi fark ettiği hatadır. Kayıt için görülüş sayısı beklenmez.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "CLAUDE.md'ye göre Düzeltme satırı kullanıcıya ulaşan ya da kullanıcının ve doğrulayıcının yakaladığı hatada yazılır, Claude'un kendi fark ettiği hata yalnız sayılır.",
            "soz": "Düzeltme satırı yalnız kullanıcıya ulaşan ya da kullanıcının ve doğrulayıcının yakaladığı hatada yazılır"
          }
        },
        {
          "id": "b12-d2-s6",
          "tur": "bosluk",
          "kart": 5,
          "soru": "Düzeltme satırında 'kural o an' bir CLAUDE.md satırını gösteriyorsa hata, kural ___ olmuştur.",
          "secenekler": [
            "henüz yokken",
            "yazılıyken",
            "silindikten sonra"
          ],
          "dogru": 1,
          "ipucu": "'O an' sözünün hangi ana baktığını düşün.",
          "aciklama": "Bu parça, hata olduğu anda konuyu kapsayan kural satırıdır; satır gösteriliyorsa kural yazılıydı ve sorun yokluğu değil, uygulanmamasıdır.",
          "kaynak": {
            "adres": ".claude/skills/kayit-yazma/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "kayit-yazma skill'ine göre kural o an parçası hatanın anında konuyu kapsayan kural satırıdır ya da yok yazılır.",
            "soz": "parçası hatanın anında konuyu kapsayan kural satırıdır"
          }
        },
        {
          "id": "b12-d2-s8",
          "tur": "coktan",
          "kart": 6,
          "soru": "Geliştiricinin kapısı, hatanın konusunun CLAUDE.md'de zaten yazılı olduğunu buldu. Ne önerir?",
          "secenekler": [
            "Aynı konuya daha sert yazılmış yeni kural",
            "Yeni metin değil; dar mekanizma ya da öneri yok",
            "Eski satırı silip baştan yazmak"
          ],
          "dogru": 1,
          "ipucu": "Yazılı bir kural çiğnendiyse ona bir satır daha eklemek neyi değiştirir?",
          "aciklama": "Yazılıyken çiğnenen kurala yeni metin eklemek işe yaramaz; kapı dar bir mekanizma, doğrulayıcıya soru ya da öneri yok der.",
          "kaynak": {
            "adres": ".claude/agents/gelistirici.md",
            "okuma": "2026-11-24",
            "dayanak": "Geliştirici ajanının dosyasına göre kapının ilk sorusu konunun zaten yazılı olup olmadığıdır, yazılıysa yeni metin önerilmez.",
            "soz": "öyleyse yeni metin önerilmez"
          }
        },
        {
          "id": "b12-d2-s9",
          "tur": "coktan",
          "kart": 7,
          "soru": "Hatadan sonra kendin 'raporlar bir sayfayı geçmesin' dedin. Kural ne zaman yazılır?",
          "secenekler": [
            "Hemen, kapıyı beklemeden",
            "Geliştiricinin sonraki turunda",
            "Üçüncü kez sana ulaşınca",
            "Hiç; konu para değil"
          ],
          "dogru": 0,
          "ipucu": "Kuralı kimin söylediğine bak.",
          "aciklama": "Senin kendi sözünle verdiğin kural da para ve güvenlik kuralları gibi beklemeden yazılır; kapıya giden, Claude'un hatadan çıkardığı kuraldır.",
          "kaynak": {
            "adres": ".claude/skills/kayit-yazma/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "kayit-yazma skill'ine göre para, güvenlik sınırı, geri alınamaz zarar ve dışa gönderim kuralı hemen yazılır, kullanıcının kendi sözüyle verdiği kural da.",
            "soz": "kullanıcının kendi sözüyle verdiği kural da"
          }
        }
      ]
    },
    {
      "id": "b12-d3",
      "baslik": "Doğrulama: test ve denetim",
      "hedefler": [
        "Claude'a geçti ya da kaldı diyen bir kontrol vermenin neden işe yaradığını anlatabilir.",
        "İstemle verilen 'devam et' ile Stop kancasının farkını ayırt edebilir.",
        "Bizde bir değişikliğin ne zaman bitmiş sayıldığını anlatabilir."
      ],
      "anlatim": [
        "Claude iş bitmiş göründüğünde durur. Koşabileceği bir kontrol yoksa tek dayanağı bu görüntüdür ve test eden sen olursun.",
        "Ona geçti ya da kaldı diyen bir kontrol ver, örneğin çıkış kodu (exit code). Claude değişikliği yapar, kontrolü koşar, bozulanı düzeltir ve yeniden koşar.",
        "'Testler geçene kadar devam et' istemiyle kararı Claude verir. Stop kancasını (Stop hook) ise Claude Code uygular: betik durmaya izin vermezse Claude işe döner.",
        "Hangisini seçersen seç kanıt iste: koşulan komut ve çıktısı.",
        "Bizde bu işin bir parçası denetim.py'dir. Yalnız okur, hiçbir dosyayı değiştirmez; her bulguyu ne yapılması gerektiğiyle tek satırda bildirir.",
        "CLAUDE.md'de şu söz var: 'Sınanmamış değişiklik bitmiş sayılmaz.' Değiştirdiğin şeyi basit bir testle sınar, sonucunu yazarsın."
      ],
      "terimler": [
        {
          "tr": "Stop kancası",
          "en": "Stop hook",
          "aciklama": "Claude turu bitirmeye çalıştığında çalışan kanca; betik izin vermezse Claude işe geri döner."
        },
        {
          "tr": "çıkış kodu",
          "en": "exit code",
          "aciklama": "Bir komutun ya da betiğin bitince verdiği sayı; Claude bunu okuyup işin geçip geçmediğini anlar."
        }
      ],
      "sorular": [
        {
          "id": "b12-d3-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude'un 'bitti' dediği işlerde hataları hep sen buluyorsun. En olası kaynak ne?",
          "secenekler": [
            "Verdiğin işler Claude için fazla uzun",
            "Claude'un kendi koşabileceği bir sınama yok",
            "İzin modu Claude'un sınama yapmasını engelliyor"
          ],
          "dogru": 1,
          "ipucu": "Claude işin bittiğine neye bakarak karar veriyor?",
          "aciklama": "Koşabileceği bir kontrol yoksa Claude yalnız işin bitmiş görünmesine dayanır; hataları yakalamak sana kalır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre Claude'un koşabileceği bir kontrol yoksa elindeki tek dayanak işin bitmiş görünmesidir ve test eden sen olursun, her hata sen fark edene kadar kalır."
          }
        },
        {
          "id": "b12-d3-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Claude bir sayfayı düzeltecek. İşini kendi doğrulayabilmesi için ona ne verirsin?",
          "secenekler": [
            "Sayfanın açıldığını sınayan bir komut",
            "'İyi görünüyor mu' diye kendine sormasını",
            "Değişikliği baştan sona bir kez daha okumasını"
          ],
          "dogru": 0,
          "ipucu": "Hangisi koşulunca yoruma yer bırakmayan bir sonuç verir?",
          "aciklama": "Sonucu açıkça söyleyen bir kontrol varsa Claude değiştirir, koşar, bozulanı düzeltip yeniden koşar; döngüyü kendisi kapatır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre geçti ya da kaldı diyen bir kontrolü olan Claude değişikliği yapar, kontrolü koşar, bir şey bozulduysa çıktıyı okuyup düzeltir ve kontrolü yeniden koşar."
          }
        },
        {
          "id": "b12-d3-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude 'bitti' demek üzereyken işe döndü, testleri yeniden koşuyor; sen bir şey yazmadın. Kaynağı ne olabilir?",
          "secenekler": [
            "İzin modu senin onayını bekliyor",
            "Tur sonunda çalışan bir kanca",
            "Sıkıştırma onu başa döndürdü"
          ],
          "dogru": 1,
          "ipucu": "Claude turu bitirmeye çalışırken hangi parça devreye girer?",
          "aciklama": "Stop kancası Claude turu bitirmeye çalışınca koşar; betik izin vermezse Claude işe geri döner. Bunu model değil Claude Code uygular.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre Stop kancası Claude turu bitirmeye çalıştığında betiği koşar ve betik 2 koduyla çıkarsa Claude'u işe geri gönderir."
          }
        },
        {
          "id": "b12-d3-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude testleri koştuğunu söyledi. Hangi mesajı kanıt sayarsın?",
          "secenekler": [
            "Tüm testler geçti, her şey yolunda",
            "Testleri koştum, sorun çıkmadı; ayrıntı istersen yazarım",
            "bash araclar/testler.sh koştu; çıktı: geçti 48, kaldı 0"
          ],
          "dogru": 2,
          "ipucu": "Hangi mesajı okuyunca neyin koşulduğunu ve ne çıktığını kendin görürsün?",
          "aciklama": "Kanıt neyin koşulduğunu ve sonucunu gösterir; 'geçti' ya da 'sorun çıkmadı' sözü tek başına az şey söyler, onu okumak testi yeniden koşmaktan da hızlıdır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre hangi kontrolü seçersen seç Claude'dan kanıt, yani koştuğu komutu ve çıktısını istersin, çünkü tek başına tüm testler geçti sözü çok az şey söyler."
          }
        },
        {
          "id": "b12-d3-s6",
          "tur": "bosluk",
          "kart": 4,
          "soru": "denetim.py bir bulgu bildirdi; bir saat sonra dosya hâlâ aynı, çünkü denetim ___.",
          "secenekler": [
            "düzeltmeyi sonraki koşuda yapar",
            "dosyalara yazmaz",
            "düzeltip kaydetmeyi unuttu"
          ],
          "dogru": 1,
          "ipucu": "Denetimin dosyalara yazıp yazmadığını düşün.",
          "aciklama": "denetim.py yalnız okur ve bulguyu bildirir; düzeltmeyi Claude ya da başka bir iş yapmadıkça dosya değişmez.",
          "kaynak": {
            "adres": "denetim.py",
            "okuma": "2026-11-24",
            "dayanak": "denetim.py baş yorumuna göre betik yalnız okur ve hiçbir dosyayı değiştirmez.",
            "soz": "Yalnız okur, hiçbir dosyayı değiştirmez."
          }
        },
        {
          "id": "b12-d3-s7",
          "tur": "coktan",
          "kart": 5,
          "soru": "Claude bir ayar satırını değiştirip 'çok basit, sınamaya gerek yok, bitti' dedi. Kurala göre ne dersin?",
          "secenekler": [
            "Haklı; basit iş sınama istemez",
            "Sınanıp sonucu yazılmalı",
            "Commit atıldıysa bitmiştir"
          ],
          "dogru": 1,
          "ipucu": "Kural basit değişiklik için bir istisna tanıyor mu?",
          "aciklama": "Kural değişikliğin büyüklüğüne bakmaz: sınanmamış değişiklik bitmiş sayılmaz, basit bir testle sınanıp sonucu yazılır.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "CLAUDE.md'ye göre değiştirdiğin şey basit bir testle sınanır ve sonucu yazılır, sınanmamış değişiklik bitmiş sayılmaz.",
            "soz": "Sınanmamış değişiklik bitmiş sayılmaz"
          }
        }
      ]
    },
    {
      "id": "b12-d4",
      "baslik": "Uzun ve gözetimsiz koşu",
      "hedefler": [
        "Uzun oturumu yönlendiren plan modu, odaklı sıkıştırma, geri sarma ve baştan başlamayı ayırt edebilir.",
        "Gözetimsiz bir koşuyu ne kadar ve neyle başlayarak doğrulayacağını anlatabilir.",
        "Bizim döngünün hangi işi aldığını ve nerede durduğunu anlatabilir."
      ],
      "anlatim": [
        "Uzun işte önce kapsamı belirle: plan modunda (plan mode) Claude dosyaya dokunmadan araştırır ve plan sunar, sen okursun.",
        "Koşarken sıkıştırma (compaction) gerekirse /compact komutunun arkasına odak yaz; özet o odağı tutar.",
        "Claude yanlış yola saparsa geri sarma (rewind) menüsüyle önceki bir isteme döner, kodu ya da konuşmayı geri alırsın.",
        "Aynı şeyi iki kez düzelttin ve hâlâ yanlışsa üçüncü düzeltmeyi yazma. /clear ile baştan başla, öğrendiğini yeni isteme kat.",
        "Gece kendi başına koşacak işi bırakmadan önce sor: Claude bitti'nin neye benzediğini biliyor mu? Testleri kancayla zorunlu kıl.",
        "Koşu bitince özetle değil değişiklik farkıyla (diff) başla. Sonra işi görmemiş taze bir gözden ikinci görüş al.",
        "Bizim döngü sen yokken kuyruktan iş koşar. dongu skill'ine göre ona yalnız bitti ölçütü makineyle ölçülen, geri alınabilir iş girer.",
        "Döngüde durma iki eşiklidir. Yumuşak eşikte yeni iş başlamaz, açık iş biter; sert eşikte açık iş güvenli noktada durur."
      ],
      "terimler": [
        {
          "tr": "plan modu",
          "en": "plan mode",
          "aciklama": "Claude'un dosyaya dokunmadan araştırıp plan sunduğu izin modu."
        },
        {
          "tr": "sıkıştırma",
          "en": "compaction",
          "aciklama": "Konuşmanın özetlenip bu özetin eski mesajların yerine yeni bağlam olarak kullanılması."
        },
        {
          "tr": "geri sarma",
          "en": "rewind",
          "aciklama": "Önceki bir istemdeki geri sarma noktasına (checkpoint) kodu, konuşmayı ya da ikisini birden geri almak."
        },
        {
          "tr": "değişiklik farkı",
          "en": "diff",
          "aciklama": "Bir dosyada eklenen ve silinen satırları gösteren karşılaştırma."
        }
      ],
      "sorular": [
        {
          "id": "b12-d4-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Otuz dosyalık bir ad değişikliğinden önce Claude'un neye dokunacağını, hiçbir dosya değişmeden görmek istiyorsun. Ne yaparsın?",
          "secenekler": [
            "Elle onay modunda düzenlemeleri tek tek onaylamak",
            "Plan modunda plan isteyip okumak",
            "'Önce dosyaları say, sonra başla' demek"
          ],
          "dogru": 1,
          "ipucu": "Hangi seçenekte Claude araştırırken dosyalar hiç değişmez?",
          "aciklama": "Plan modunda Claude dosyaya dokunmadan araştırır ve plan sunar; kapsamı iş başlamadan görürsün. Elle onayda iş çoktan başlamıştır; \"önce say\" ise bir talimattır, dosyaya dokunmamayı uygulama sağlamaz.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/steering-long-sessions",
            "kopya": "ders-action-01-steering-long-sessions.md",
            "okuma": "2026-11-15",
            "dayanak": "Derse göre uzun oturum iki alışkanlığa dayanır, Claude başlamadan işin kapsamını belirlemek ve Claude koşarken onu yönlendirmek."
          }
        },
        {
          "id": "b12-d4-s3",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bağlam dolmak üzere; ödeme sayfası ayrıntıları sıkıştırmadan sonra da kalsın istiyorsun. Ne yaparsın?",
          "secenekler": [
            "Sıkıştırmayı bekleyip sonra hatırlatmak",
            "/compact arkasına odak olarak ödemeyi yazmak",
            "Ayrıntıları büyük harfle yinelemek"
          ],
          "dogru": 1,
          "ipucu": "Özetin neyi tutacağını kim belirleyebilir?",
          "aciklama": "Odak yazmadan sıkıştırırsan önemli bir ayrıntı özetten düşebilir; komutun arkasına yazdığın odak özeti yönlendirir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/steering-long-sessions",
            "kopya": "ders-action-01-steering-long-sessions.md",
            "okuma": "2026-11-15",
            "dayanak": "Derse göre /compact komutundan sonra yazdığın her şey özetin neyi tutacağını biçimlendirir."
          }
        },
        {
          "id": "b12-d4-s2",
          "tur": "coktan",
          "kart": 2,
          "soru": "Geri sarmayla son istemden önceye döndün; konuşma geri geldi ama dosyalar değişik kaldı. Neden?",
          "secenekler": [
            "Geri sarma dosyalara hiç dokunmaz",
            "Geri sarmada yalnız konuşma geri alındı",
            "Dosyalar geri sarmadan sonra yeniden yazıldı"
          ],
          "dogru": 1,
          "ipucu": "Geri sarma menüsünde neyi geri alacağını sen seçersin.",
          "aciklama": "Geri sarma kodu, konuşmayı ya da ikisini birden geri alabilir; yalnız konuşma seçildiyse dosyalar olduğu gibi kalır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/steering-long-sessions",
            "kopya": "ders-action-01-steering-long-sessions.md",
            "okuma": "2026-11-15",
            "dayanak": "Derse göre Claude yanlış yola saparsa geri sarma son geri sarma noktasına (checkpoint) döndürür; terim açıklamasına göre kod, konuşma ya da ikisi birden geri alınabilir."
          }
        },
        {
          "id": "b12-d4-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "Aynı başlık düzenini iki kez düzelttirdin, yine yanlış. Belgeye göre en iyi hamle?",
          "secenekler": [
            "Daha ayrıntılı üçüncü bir düzeltme",
            "Öğrendiğinle temiz sohbette tek istem",
            "Sıkıştırıp aynı düzeltmeyi yinelemek"
          ],
          "dogru": 1,
          "ipucu": "Yeni bir düzeltme hangi konuşmanın üstüne eklenir?",
          "aciklama": "Bir düzeltme daha, iki başarısız denemeyi taşıyan konuşmaya eklenir; temiz başlangıç ve daha iyi istem neredeyse her zaman daha iyi çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre aynı şeyi iki kez düzelttiğin halde hâlâ yanlışsa /clear ile baştan başlayıp öğrendiklerini katan tek yeni istem neredeyse her zaman üçüncü düzeltmeden iyi çalışır."
          }
        },
        {
          "id": "b12-d4-s7",
          "tur": "coktan",
          "kart": 4,
          "soru": "Gece koşacak görevi yazdın: 'giriş sayfasını iyileştir.' Bırakmadan önce eksik olan en önemli şey ne?",
          "secenekler": [
            "Hangi modelle koşacağı",
            "İşin ne olunca bitmiş sayılacağı",
            "Kaç dosya okuyacağı",
            "Sonunda yazacağı özetin uzunluğu"
          ],
          "dogru": 1,
          "ipucu": "Sen yokken Claude durma zamanını neye bakarak bilecek?",
          "aciklama": "'İyileştir' bir bitiş tarif etmez; Claude bitti'nin neye benzediğini bilmezse ne zaman duracağını da bilemez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre bir işi kendi başına bırakmadan önce bitti'nin neye benzediğini bilip bilmediği, kendi işini sınayıp sınayamadığı, neye dokunabileceği, onu neyin durduracağı ve sonucun nereye gidip kimin onaylayacağı sorulur."
          }
        },
        {
          "id": "b12-d4-s6",
          "tur": "coktan",
          "kart": 5,
          "soru": "Gece koşusunun özeti üç dosya anıyor; sonradan anılmayan bir ayar dosyasının da değiştiği çıktı. Bunu en erken nerede görürdün?",
          "secenekler": [
            "Claude'un özetinin sonunda",
            "Testlerin sonucunda",
            "Değişiklik farkında"
          ],
          "dogru": 2,
          "ipucu": "Hangisi Claude'un anlattığını değil, dosyalarda olanı gösterir?",
          "aciklama": "Derli toplu bir özet beklemediğin bir dosyaya dokunulduğunu göstermeyebilir; değişiklik farkı her değişen dosyayı gösterir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/trust-it-verifying-unsupervised-runs",
            "kopya": "ders-action-08-verifying-unsupervised.md",
            "okuma": "2026-11-15",
            "dayanak": "Derse göre işe Claude'un yaptıklarını anlatan özetle değil, değişiklik farkının kendisiyle başlanır."
          }
        },
        {
          "id": "b12-d4-s8",
          "tur": "coktan",
          "kart": 6,
          "soru": "Döngüye 'sitenin renklerini güzelleştir' işini koymak istiyorsun. Girer mi?",
          "secenekler": [
            "Girer; renk geri alınabilir",
            "Girmez; bitişine makine karar veremez",
            "Girer; sabah sen onaylarsın"
          ],
          "dogru": 1,
          "ipucu": "Sen yokken işin bittiğine kim karar verecek?",
          "aciklama": "Döngüye yalnız bitti ölçütü makineyle ölçülen ve geri alınabilen iş girer; geri alınabilmek tek başına yetmez, güzelliğe ancak sen karar verirsin.",
          "kaynak": {
            "adres": ".claude/skills/dongu/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "dongu skill'ine göre döngüye girebilen işin bitti ölçütü makineyle ölçülür, kullanıcının kararını gerektirmez ve iş geri alınabilir.",
            "soz": "Bitti ölçütü makineyle ölçülür"
          }
        },
        {
          "id": "b12-d4-s9",
          "tur": "bosluk",
          "kart": 7,
          "soru": "Döngü eşiğe geldi; Claude yeni iş başlatmadı ama elindeki işi bitiriyor. Bu, ___ eşiğin davranışıdır.",
          "secenekler": [
            "sert",
            "yumuşak",
            "bozulmuş bir"
          ],
          "dogru": 1,
          "ipucu": "Hangi eşik açık işin sürmesine izin veriyor?",
          "aciklama": "Yumuşak eşikte yeni iş başlamaz, açık iş biter; sert eşikte ise açık iş güvenli bir noktada durur.",
          "kaynak": {
            "adres": ".claude/skills/dongu/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "dongu skill'ine göre yumuşak eşikte yeni iş başlamaz ve açık iş biter, sert eşikte açık iş güvenli noktada durur.",
            "soz": "yumuşak eşikte yeni iş başlamaz, açık iş biter"
          }
        }
      ]
    },
    {
      "id": "b12-d5",
      "baslik": "Çıktı stili ve öğrenme kipi",
      "hedefler": [
        "Çıktı stilinin bir oturumdaki rolü, tonu ve cevap biçimini değiştirdiğini anlatabilir.",
        "Açıklayıcı (Explanatory) ve Öğrenme (Learning) stillerini ekranda görünen belirtilerinden ayırt edebilir.",
        "Masaüstünde stilin nasıl seçildiğini ve bizde bu ayarın neden sorulduğunu anlatabilir."
      ],
      "anlatim": [
        "Çıktı stili (output style) bir oturumdaki her cevapta Claude'un rolünü, tonunu ve cevap biçimini belirler. Aynı isteği her istemde tekrarlamazsın.",
        "Varsayılan (Default) stil dışında dört yerleşik stil var. Proactive sormadan başlar, Concise sonuçla açar ve kısa yazar.",
        "Explanatory stilinde Claude işi yapar, seçimlerinin nedenini sohbette kısa Insight bloklarıyla anlatır. Bu açıklamalar dosyana yorum olarak yazılmaz.",
        "Learning stili Insight bloklarına ek olarak, tasarım kararı olan küçük bir kod parçasını sana bırakır. Yerini kodda TODO(human) notuyla işaretler, sen yazana kadar bekler.",
        "Stil bir talimattır, garanti değildir. Her seferinde olması gereken iş için kanca gerekir.",
        "Masaüstünde stil bir ayar dosyasındaki alanla seçilir; değer büyük-küçük harfe duyarlıdır. Stil adıyla tam eşleşmeyen değer varsayılan stili verir.",
        "Bizde bu ayar dosyalarının değişikliği CLAUDE.md'deki 'Her seferinde basitçe sorulanlar' listesindedir; kanca ekleme testi ve doğrulayıcısıyla yapılırsa sorulmaz."
      ],
      "terimler": [
        {
          "tr": "çıktı stili",
          "en": "output style",
          "aciklama": "Bir oturum boyunca Claude'un rolünü, tonunu ve cevap biçimini belirleyen talimatlar."
        },
        {
          "tr": "açıklayıcı stil",
          "en": "Explanatory",
          "aciklama": "Claude'un seçimlerinin nedenini kısa Insight bloklarıyla anlattığı yerleşik stil."
        },
        {
          "tr": "öğrenme stili",
          "en": "Learning",
          "aciklama": "Açıklamaya ek olarak bazı kod parçalarını senin yazmanı isteyen yerleşik stil."
        }
      ],
      "sorular": [
        {
          "id": "b12-d5-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Yeni oturumda Claude her cevabı uzun bir girişle açıyor; istemlerin dünküyle aynı. Kaynağı ne olabilir?",
          "secenekler": [
            "Claude'un izin modu değişmiş",
            "Çıktı stili değişmiş",
            "Bağlam dolmak üzere, özetleniyor"
          ],
          "dogru": 1,
          "ipucu": "Cevabın biçimini oturum boyunca hangi ayar belirler?",
          "aciklama": "Çıktı stili bir oturum boyunca cevapların rolünü, tonunu ve biçimini belirler; istem aynıyken biçim değiştiyse ilk bakılacak yer stildir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/output-styles",
            "kopya": "output-styles.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre çıktı stili, bir oturumdaki her cevapta Claude'un rolünü, tonunu ve cevap biçimini belirleyen talimatlar kümesidir."
          }
        },
        {
          "id": "b12-d5-s5",
          "tur": "coktan",
          "kart": 1,
          "soru": "Cevaplar sana fazla uzun geliyor; her istemde 'kısa yaz' demekten yoruldun. Ne yaparsın?",
          "secenekler": [
            "Concise stilini seçmek",
            "Proactive stilini seçmek",
            "İzin modunu değiştirmek"
          ],
          "dogru": 0,
          "ipucu": "Aynı isteği her istemde tekrarlamamak için hangi özellik vardı?",
          "aciklama": "Concise stili sonuçla açar, girişi ve tekrar özetini atlar; isteği her istemde yazman gerekmez. Proactive ise sormadan başlar, kısaltmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/output-styles",
            "kopya": "output-styles.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgedeki tabloya göre Concise stili, varsayılan cevaplar istediğinden uzun olduğunda kullanılır ve cevaplar sonuçla açılıp giriş ile tekrar özeti atlanır."
          }
        },
        {
          "id": "b12-d5-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Explanatory stilini açtın; Claude'un seçimlerinin nedenini dosyalarda yorum olarak arıyorsun ama bulamıyorsun. Neden?",
          "secenekler": [
            "Stil açılmamış; ayarı yeniden kurmalısın",
            "Açıklamalar ayrı bir rapor dosyasına yazılır",
            "Açıklamalar yalnız sohbette görünür"
          ],
          "dogru": 2,
          "ipucu": "Açıklamanın koda mı, konuşmaya mı eklendiğini düşün.",
          "aciklama": "Explanatory açıklamaları sohbette Insight bloğu olarak görünür; dosyaya yorum olarak yazılmaz, bu yüzden dosyada bulunmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/output-styles",
            "kopya": "output-styles.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre Explanatory açıklamaları sohbette Insight etiketli blokta görünür ve dosyalara yorum olarak yazılmaz."
          }
        },
        {
          "id": "b12-d5-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude bir dosyaya TODO(human) notu bıraktı ve devam etmeden bekliyor. Kaynağı ne olabilir?",
          "secenekler": [
            "Bir kanca Claude'u durdurdu",
            "Learning stili açık",
            "Claude bir hata yüzünden işi yarım bıraktı"
          ],
          "dogru": 1,
          "ipucu": "Notun kime seslendiğine bak.",
          "aciklama": "Learning stili tasarım kararı olan küçük bir parçayı sana bırakır, yerini bu notla işaretler ve sen yazana kadar bekler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/output-styles",
            "kopya": "output-styles.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgedeki tabloya göre Learning stili, iş yine biterken elinle kod yazma alıştırması istediğinde kullanılır."
          }
        },
        {
          "id": "b12-d5-s6",
          "tur": "bosluk",
          "kart": 4,
          "soru": "Çıktı stiline 'her değişiklikten sonra testleri koş' yazdın; Claude bazen koşmuyor. Bunun her seferinde olması için ___ gerekir.",
          "secenekler": [
            "daha sert yazılmış bir stil",
            "bir kanca",
            "her istemde hatırlatma"
          ],
          "dogru": 1,
          "ipucu": "Stili kim uyguluyor: Claude mu, uygulama mı?",
          "aciklama": "Stil Claude'un uyduğu bir talimattır, garanti vermez; her seferinde olması gereken işi kanca sağlar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/output-styles",
            "kopya": "output-styles.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre çıktı stili Claude'a uyacağı talimatlar verir ama bir şeyin her zaman olacağını ya da hiç olmayacağını garanti etmez."
          }
        },
        {
          "id": "b12-d5-s8",
          "tur": "coktan",
          "kart": 5,
          "soru": "Ayarda stil alanına explanatory yazdın; Claude hâlâ varsayılan gibi, Insight yok. En olası kaynak?",
          "secenekler": [
            "Değer stil adıyla harfi harfine eşleşmiyor",
            "Explanatory masaüstünde çalışmaz",
            "Insight yalnız ilk cevapta görünür"
          ],
          "dogru": 0,
          "ipucu": "Yazdığın değeri stilin adıyla harf harf karşılaştır.",
          "aciklama": "Değer büyük-küçük harfe duyarlıdır; stil adıyla tam eşleşmeyen değer varsayılan stili verir. Masaüstünde stil bu ayarla seçilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/output-styles",
            "kopya": "output-styles.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre outputStyle değeri büyük-küçük harfe duyarlıdır ve explanatory gibi bir stil adıyla tam eşleşmeyen değer Default stili verir."
          }
        },
        {
          "id": "b12-d5-s9",
          "tur": "coktan",
          "kart": 6,
          "soru": "Claude bugün bir rapor yazacak, testi ve doğrulayıcısıyla bir kanca ekleyecek, ayar dosyasına stil satırı ekleyecek. Hangisinde sana sorması gerekir?",
          "secenekler": [
            "Raporu yazarken",
            "Kancayı eklerken",
            "Stil satırını eklerken"
          ],
          "dogru": 2,
          "ipucu": "Ayar dosyasının hangi değişikliğinin sorulmaktan muaf olduğunu hatırla.",
          "aciklama": "Ayar dosyası değişikliği her seferinde basitçe sorulur; testi ve doğrulayıcısıyla yapılan kanca ekleme bundan muaftır, klasörde rapor yazmak listede değildir.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "CLAUDE.md'ye göre .claude/settings.json ve .claude/settings.local.json değişikliği, kanca ekleme ve değiştirme hariç, her seferinde basitçe sorulur ve önceki onay geçmez.",
            "soz": "`.claude/settings.local.json` (kanca ekleme ve değiştirme hariç"
          }
        }
      ]
    },
    {
      "id": "b12-d6",
      "baslik": "Bitirme görevi: oku, anlat, tarif et",
      "hedefler": [
        "Bizde yeni bir kanca için hangi sınamaların istendiğini anlatabilir.",
        "Bir değişikliği görev kalıbıyla Claude'a nasıl yazacağını anlatabilir.",
        "Belirsiz bir istemle somut bir istemi birbirinden ayırt edebilir."
      ],
      "anlatim": [
        "Bizde kanca ya da kontrol yazılınca testi de yazılır: her durdurma için bir bozma ve bir yanlış alarm testi. Sonra bir kez gerçek kayıtta koşulur.",
        "Değişikliği Claude'a görev kalıbıyla yazarsın (ajan-gorevi skill'i). Görev kısa yazılır; nasıl yapılacağı yazılmaz.",
        "Kalıbın alanları: amaç, dokunulacak yollar, önce okunacaklar, bitti ölçütü (definition of done), kenar durumları (beklenmeyen halde ne yapılacağı). Bitti ölçütü ölçülebilir, komutla sınanabilir bir şarttır.",
        "Resmi öneri de benzer: dosyayı adıyla an, belirtiyi anlat, düzeldi'nin neye benzediğini baştan söyle.",
        "Son test: istemini (prompt) işi az bilen bir iş arkadaşına göster; o karışırsa Claude da karışır. Claude'u bağlamı bilmeyen yeni bir çalışan gibi düşün."
      ],
      "terimler": [
        {
          "tr": "bitti ölçütü",
          "en": "definition of done",
          "aciklama": "İşin bittiğini gösteren, ölçülebilir ve mümkünse komutla sınanabilir şart."
        },
        {
          "tr": "istem",
          "en": "prompt",
          "aciklama": "Claude'a yazdığın istek metni."
        }
      ],
      "sorular": [
        {
          "id": "b12-d6-s3",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude yeni kancanın bozuk kaydı durdurduğunu sınayıp 'bitti' dedi. Kurala göre ne eksik?",
          "secenekler": [
            "Eksik yok; durdurduğu görüldü",
            "Doğru kaydı geçirdiğinin testi ve gerçek kayıtta koşu",
            "Senin ekranda denemen"
          ],
          "dogru": 1,
          "ipucu": "Bir kanca iki yönden yanılabilir: durdurması gerekeni geçirir ya da geçirmesi gerekeni durdurur.",
          "aciklama": "Bozma testi kancanın kötü kaydı durdurduğunu, yanlış alarm testi doğru kaydı geçirdiğini gösterir; ardından kanca bir kez gerçek kayıtta koşulur.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "sistem-metni skill'ine göre kanca ya da kontrol yazılınca testi de yazılır, her durdurma için bir bozma testi ve bir yanlış alarm testi, sonra bir kez gerçek kayıtta koşulur.",
            "soz": "her durdurma için bir bozma testi ve bir yanlış alarm testi"
          }
        },
        {
          "id": "b12-d6-s6",
          "tur": "coktan",
          "kart": 1,
          "soru": "Alt ajanın görevinde yalnız şu var: 'dosyayı aç, üçüncü paragrafı sil, kaydet.' Kalıba göre sorun ne?",
          "secenekler": [
            "Adımlar yeterince ayrıntılı değil",
            "Yapılış var, istenen sonuç yok",
            "Görev uzun yazılmalı"
          ],
          "dogru": 1,
          "ipucu": "Kalıp görevde neyi yazdırmaz?",
          "aciklama": "Görev kısa yazılır ve nasıl yapılacağı yazılmaz; bu metin yalnız adım veriyor, işin amacını ve bitişini söylemiyor.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "ajan-gorevi skill'ine göre görev kısa yazılır ve nasıl yapılacağı yazılmaz.",
            "soz": "Görev kısa yazılır; nasıl yapılacağı yazılmaz."
          }
        },
        {
          "id": "b12-d6-s5",
          "tur": "coktan",
          "kart": 2,
          "soru": "Görev: 'rapor sayfasını hızlandır.' Hangi bitti ölçütü kalıba uyar?",
          "secenekler": [
            "Sayfa eskisinden belirgin biçimde hızlı açılsın",
            "Ölçen komut 2 saniyenin altını göstersin",
            "Kod sade ve okunur hale gelsin"
          ],
          "dogru": 1,
          "ipucu": "Hangisinin tuttuğunu bir komut koşarak anlayabilirsin?",
          "aciklama": "Bitti ölçütü ölçülebilir ve komutla sınanabilir olmalı; \"belirgin hızlı\" ve \"sade\" ölçülemez, süre sınırı ölçülür.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "ajan-gorevi skill'ine göre Bitti ölçütü alanı ölçülebilir ve komutla sınanabilir bir şarttır.",
            "soz": "ölçülebilir, komutla sınanabilir şart"
          }
        },
        {
          "id": "b12-d6-s9",
          "tur": "eslestir",
          "kart": 2,
          "soru": "Ajanın sorununu görevde eksik kalan alanla eşleştir.",
          "ciftler": [
            [
              "Ajan yazılı bir kuralı bilmeden çiğnedi",
              "Önce okunacaklar"
            ],
            [
              "Ajan görevde olmayan bir dosyayı da değiştirdi",
              "Dokunulacak yollar"
            ],
            [
              "Dosya yokken ajan ne yapacağını bilemedi",
              "Kenar durumları"
            ]
          ],
          "ipucu": "Her sorunda ajana hangi bilginin eksik verildiğini düşün.",
          "aciklama": "Ajan klasörü bilmez: okuyacağı kuralı önce okunacaklar, dokunabileceği yeri dokunulacak yollar, beklenmeyen halde ne yapacağını kenar durumları söyler.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "ajan-gorevi skill'ine göre görev kalıbında önce okunacaklar, dokunulacak yollar ve beklenmeyen hal gelince ne yapılacağını söyleyen kenar durumları ayrı alanlardır.",
            "soz": "beklenmeyen hal gelince ne yapılacağı"
          }
        },
        {
          "id": "b12-d6-s4",
          "tur": "bosluk",
          "kart": 3,
          "soru": "İsteminde dosya (src/auth/) ve belirti (süre dolunca giriş bozuluyor) var. Resmi öneriye göre eksik olan ___.",
          "secenekler": [
            "işin adım adım nasıl yapılacağı",
            "düzelmiş halin neye benzediği",
            "'dikkatli ol' uyarısı"
          ],
          "dogru": 1,
          "ipucu": "Resmi önerinin üç parçasından hangisi istemde yok?",
          "aciklama": "Öneri dosyayı adıyla anmayı, belirtiyi anlatmayı ve düzelmiş halin neye benzediğini baştan söylemeyi ister; bu istemde üçüncüsü yok, adım tarifi ise gerekmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre dosyayı adıyla anar, belirtiyi anlatır ve düzeldi'nin neye benzediğini baştan söylersen genelde bir düzeltme turundan kurtulursun."
          }
        },
        {
          "id": "b12-d6-s8",
          "tur": "coktan",
          "kart": 4,
          "soru": "İsteminde yalnız 'geçen haftaki gibi yap' var. Rehbere göre sorun ne?",
          "secenekler": [
            "Bağlamı bilmeyen biri 'geçen hafta'yı bilemez",
            "Sorun yok; Claude geçen haftayı kendiliğinden hatırlar",
            "İstem fazla kısa, uzatılmalı"
          ],
          "dogru": 0,
          "ipucu": "Bu istemi işe yeni başlamış biri okusa ne anlardı?",
          "aciklama": "Rehber Claude'u bağlamı bilmeyen yeni bir çalışana benzetir; az bilen birinin anlamayacağı istem Claude'un da kafasını karıştırır. Sorun uzunluk değil, eksik bağlamdır.",
          "kaynak": {
            "adres": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
            "kopya": "prompting-best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Rehbere göre ana test, istemini işi az bilen bir iş arkadaşına gösterip uygulamasını istemektir, onun kafası karışırsa Claude'un da karışır."
          }
        }
      ]
    }
  ]
});
