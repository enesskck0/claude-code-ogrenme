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
        "Bizim \"mekanizmasız kural dilektir\" ilkesinin resmi öneriyle nasıl eşleştiğini anlatabilir."
      ],
      "anlatim": [
        "Claude'a verdiğin talimat iki türlüdür. İstem, CLAUDE.md ya da skill'i Claude okur ve ne yapacağına kendisi karar verir; çoğu zaman uyar ama garanti yoktur. Kanca (hook), yasak kuralı (deny rule) ya da kurum ayarını ise Claude Code, yani uygulamanın kendisi her seferinde uygular; modelin ne düşündüğüne bakmaz.",
        "Resmi belge, Claude Code'un kesin uyguladığı aracı konuya göre sayar: ne yapılacağı için kanca, neye dokunabileceği için yasak kuralı, ne zaman bittiği için test, ne kadar harcayacağı için harcama sınırı. Bir CLAUDE.md satırına vurgu ekleyip durduğun halde Claude onu kaçırıyorsa satırın yeri kancadır. Tersi de geçerli: yalnız tercih için kancan varsa sil, kararı Claude'a bırak.",
        "Bizim CLAUDE.md satır 53 aynı fikri şöyle söyler: \"Mekanizmasız kural dilektir, aynı hata tekrar eder.\" Mekanizma denetim kontrolü, damga ya da betik olabilir. sistem-metni skill'i de ekler: kesin kural yalnız metne bırakılmaz, her seferinde olması gereken mekanik iş kancaya verilir."
      ],
      "terimler": [
        {"tr": "kanca", "en": "hook", "aciklama": "Claude Code'un belli bir anda (araç çağrısından önce, tur biterken gibi) her seferinde çalıştırdığı betik."},
        {"tr": "yasak kuralı", "en": "deny rule", "aciklama": "Bir aracın ya da işin hiç yapılmamasını sağlayan izin ayarı; modelin kararına bağlı değildir."}
      ],
      "sorular": [
        {
          "id": "b12-d1-s1",
          "tur": "coktan",
          "soru": "Resmi belgeye göre CLAUDE.md'ye yazdığın bir talimat için hangisi doğru?",
          "secenekler": [
            "Claude Code onu her seferinde, modelden bağımsız uygular",
            "Yalnız izin penceresi açıldığında devreye girer",
            "Claude okur ve ne yapacağına kendisi karar verir"
          ],
          "dogru": 2,
          "ipucu": "CLAUDE.md'yi kimin okuduğunu, kancayı kimin çalıştırdığını düşün.",
          "aciklama": "CLAUDE.md, istem ve skill modelin okuduğu talimattır; çoğu zaman uyulur ama garantisi yoktur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre istem, CLAUDE.md ya da skill gibi talimatları model okur ve ne yapacağına kendisi karar verir, bunlara uyacağının garantisi yoktur."
          }
        },
        {
          "id": "b12-d1-s2",
          "tur": "eslestir",
          "soru": "Her konuyu, Claude Code'un o konuda kesin uyguladığı araçla eşle.",
          "ciftler": [
            ["Ne yapılacağı", "Kanca"],
            ["Neye dokunabileceği", "Yasak kuralı"],
            ["Ne zaman bittiği", "Test"],
            ["Ne kadar harcayacağı", "Harcama sınırı"]
          ],
          "ipucu": "Araçların adı ne yaptıklarını söyler: hangisi yasaklar, hangisi ölçer, hangisi sınırlar?",
          "aciklama": "Bu dört aracı Claude Code uygular; model ne düşünürse düşünsün sonuç aynıdır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgedeki tabloda Claude Code'un kesin uyguladığı sütunda ne yapılacağı için kancalar, neye dokunulacağı için yasak kuralları, ne zaman bittiği için testler, ne kadar harcanacağı için harcama sınırı yer alır."
          }
        },
        {
          "id": "b12-d1-s3",
          "tur": "dogru-yanlis",
          "soru": "Bir CLAUDE.md satırını büyük harfle ve 'ASLA' diye yazarsan Claude'un her seferinde uyacağı garanti olur.",
          "dogru": false,
          "ipucu": "Satırı kimin okuyup kimin karar verdiğini hatırla.",
          "aciklama": "Satır ne kadar güçlü yazılsa da ona o turda uyup uymamak yine Claude'un kararıdır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre bir satırı ne kadar güçlü yazarsan yaz, Claude'un belli bir turda o satıra uyup uymaması yine Claude'un kararıdır."
          }
        },
        {
          "id": "b12-d1-s4",
          "tur": "coktan",
          "soru": "Claude bir CLAUDE.md satırını kaçırıyor; satıra 'ÖNEMLİ' ekledin, yine kaçırdı. Belgeye göre sıradaki adım ne?",
          "secenekler": [
            "Satırı daha büyük harfle bir kez daha yazmak",
            "Satırı kancaya taşımak",
            "Satırı her istemin başına kopyalamak"
          ],
          "dogru": 1,
          "ipucu": "Vurgu eklemek sonucu modelin kararından çıkarıyor mu, düşün.",
          "aciklama": "Vurgu işe yaramıyorsa kural her seferinde uygulanmalıdır; bunu kanca sağlar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgedeki ipucuna göre bir CLAUDE.md satırına vurgu ekleyip durduğun halde Claude onu yine kaçırıyorsa bu, o satırın kancaya ait olduğunun işaretidir."
          }
        },
        {
          "id": "b12-d1-s5",
          "tur": "dogru-yanlis",
          "soru": "Belgeye göre yalnız bir tercih için kanca yazdıysan o kancayı silip kararı Claude'a bırakabilirsin.",
          "dogru": true,
          "ipucu": "Kancanın hangi tür kural için olduğunu hatırla.",
          "aciklama": "Kanca istisnası olmayan kural içindir; tercihlerde Claude önündeki koda bakarak çoğu zaman daha iyi karar verir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre yalnız tercih olan şeyler için kancan varsa onları silip kararı Claude'a bırakırsın."
          }
        },
        {
          "id": "b12-d1-s6",
          "tur": "coktan",
          "soru": "CLAUDE.md satır 53 \"Mekanizmasız kural dilektir\" der. Resmi belgedeki hangi öneri bu ilkeyle aynı yöne bakar?",
          "secenekler": [
            "Her seferinde olacak işi kancaya ya da yasak kuralına taşımak",
            "Bütün kuralları tek bir CLAUDE.md dosyasında toplamak",
            "Önemli kuralı her istemde yeniden yazmak"
          ],
          "dogru": 0,
          "ipucu": "Hangi seçenek kuralı modelin hafızasından çıkarıyor?",
          "aciklama": "İkisi de aynı şeyi söyler: her seferinde olması gereken kural metinde kalmaz, onu uygulayan bir mekanizmaya bağlanır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre bir şeyin her seferinde olması gerekiyorsa kanca, yasak kuralı ya da kurum ayarı yapılır, çünkü CLAUDE.md yönergeler içindir ve Claude bir yönergenin uymadığına karar verebilir."
          }
        },
        {
          "id": "b12-d1-s7",
          "tur": "bosluk",
          "soru": "CLAUDE.md satır 53: Bir kural yazdığında ihlalini yakalayacak ___ da yaz.",
          "secenekler": ["açıklamayı", "mekanizmayı", "yorum satırını"],
          "dogru": 1,
          "ipucu": "Satır üç örnek sayar: denetim kontrolü, damga ya da betik.",
          "aciklama": "Satır ihlali yakalayacak bir denetim kontrolü, damga ya da betik ister; yoksa aynı hata tekrar eder.",
          "kaynak": {
            "adres": "CLAUDE.md:53",
            "okuma": "2026-11-15",
            "dayanak": "CLAUDE.md satır 53 kural yazılınca ihlalini yakalayacak mekanizmanın da (denetim kontrolü, damga ya da betik) yazılmasını ister ve mekanizmasız kuralı dilek sayar."
          }
        },
        {
          "id": "b12-d1-s8",
          "tur": "coktan",
          "soru": "sistem-metni skill'ine göre her seferinde olması gereken mekanik iş nereye verilir?",
          "secenekler": ["CLAUDE.md'ye ek satır olarak", "Ajan dosyasına", "Kancaya"],
          "dogru": 2,
          "ipucu": "Bu derste her seferinde uygulanan araç hangisiydi, hatırla.",
          "aciklama": "Skill kesin kuralı yalnız metne bırakmaz; her seferinde olması gereken mekanik işi kancaya verir.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md:34",
            "okuma": "2026-11-15",
            "dayanak": "sistem-metni skill'ine göre kesin kural yalnız metne bırakılmaz ve her seferinde olması gereken mekanik iş kancaya verilir."
          }
        }
      ]
    },
    {
      "id": "b12-d2",
      "baslik": "Kurulumu zamanla büyütmek",
      "hedefler": [
        "Resmi tetik tablosunda hangi durumun hangi özelliği eklettiğini anlatabilir.",
        "Bizim üçüncü görülüşte kural eşiğini resmi iki kez yanlış tetiğinden ayırt edebilir.",
        "Düzeltme satırının ve D19 kontrolünün görülüş sayımındaki yerini anlatabilir."
      ],
      "anlatim": [
        "Her şeyi baştan kurman gerekmez. Resmi belgede her özelliğin bir tetiği (trigger) var: Claude bir kuralı iki kez yanlış yaparsa CLAUDE.md'ye ekle; aynı yönergeyi üçüncü kez yapıştırıyorsan skill yap; yan iş sohbeti bir daha bakmayacağın çıktıyla dolduruyorsa alt ajana (subagent) ver; bir şey her seferinde sormadan olsun istiyorsan kanca yaz; aynı kurulum ikinci depoda gerekiyorsa eklenti (plugin) yap.",
        "Bizim eşik biraz farklı. CLAUDE.md satır 113: aynı hata ya da düzeltme üçüncü kez görülünce kural ve mekanizması yazılır; ilk iki görülüşte KARARLAR'daki Düzeltme satırı yeter. Yani resmi öneri ikinci yanlışta CLAUDE.md'ye yazar; biz ilk ikisini kayda geçirir, üçüncüde kuralı mekanizmasıyla birlikte yazarız.",
        "Görülüşü saymak için Düzeltme satırının biçimi sabittir (KARARLAR.md satır 3): konu öneki, ne yanlış yapıldı, doğrusu, kaçıncı görülüş olduğu ve fark eden. denetim.py'deki D19 kontrolü bu biçimi denetler, çünkü satır başında olmayan ya da öneki farklı yazılan Düzeltme sayımdan kaçar."
      ],
      "terimler": [
        {"tr": "tetik", "en": "trigger", "aciklama": "Bir özelliği ekleme zamanının geldiğini gösteren, tanınır durum."},
        {"tr": "alt ajan", "en": "subagent", "aciklama": "İşi kendi ayrı bağlamında yapıp ana sohbete yalnız özet döndüren yardımcı."},
        {"tr": "eklenti", "en": "plugin", "aciklama": "Skill, kanca, alt ajan ve MCP sunucularını tek kurulabilir pakette toplayan katman."}
      ],
      "sorular": [
        {
          "id": "b12-d2-s1",
          "tur": "eslestir",
          "soru": "Resmi tetiklere göre her durumu eklenecek özellikle eşle.",
          "ciftler": [
            ["Claude bir kuralı iki kez yanlış yapıyor", "CLAUDE.md'ye ekle"],
            ["Aynı yönergeyi üçüncü kez sohbete yapıştırıyorsun", "Skill olarak yaz"],
            ["Bir şey her seferinde sormadan olsun istiyorsun", "Kanca yaz"],
            ["Aynı kurulum ikinci bir depoda gerekiyor", "Eklenti olarak paketle"]
          ],
          "ipucu": "Önce her durumun ne sıklıkta ve nerede tekrarlandığına bak.",
          "aciklama": "Her özelliğin tanınır bir tetiği var; özellik tetik gelince eklenir, önceden değil.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgedeki tabloya göre iki kez yanlış yapılan kural CLAUDE.md'ye, üçüncü kez yapıştırılan yönerge skill'e, her seferinde sormadan olması istenen iş kancaya, ikinci depoda gereken kurulum eklentiye gider."
          }
        },
        {
          "id": "b12-d2-s2",
          "tur": "coktan",
          "soru": "Bir yan iş, sohbetini bir daha bakmayacağın çıktıyla dolduruyor. Resmi tetiklere göre ne yaparsın?",
          "secenekler": [
            "Yan işi alt ajana vermek",
            "Bir çıktı stili seçmek",
            "CLAUDE.md'ye yeni satır yazmak"
          ],
          "dogru": 0,
          "ipucu": "Hangi özellik kendi ayrı bağlamında çalışıp yalnız özet döndürür?",
          "aciklama": "Alt ajan işi ayrı bağlamda yapar ve sohbete yalnız özeti getirir, böylece ana sohbet temiz kalır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgedeki tabloya göre bir yan iş sohbeti bir daha başvurmayacağın çıktıyla dolduruyorsa o iş bir alt ajandan geçirilir."
          }
        },
        {
          "id": "b12-d2-s3",
          "tur": "dogru-yanlis",
          "soru": "Resmi belgeye göre Claude Code'daki her özelliği işin en başında kurman gerekir.",
          "dogru": false,
          "ipucu": "Tetik bir tarih mi, bir durum mu?",
          "aciklama": "Belge her şeyi baştan kurmanın gerekmediğini söyler; her özellik kendi tetiği gelince eklenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre her şeyi baştan yapılandırman gerekmez, her özelliğin tanınır bir tetiği vardır."
          }
        },
        {
          "id": "b12-d2-s4",
          "tur": "coktan",
          "soru": "Claude aynı hatayı ikinci kez yaptı. Bizim kurala göre ne olur?",
          "secenekler": [
            "Kural ve mekanizması hemen yazılır",
            "Kayıt tutulmaz, üçüncü görülüş beklenir",
            "Yalnız Düzeltme satırı yazılır"
          ],
          "dogru": 2,
          "ipucu": "Bizim eşikte kuralın yazılması için kaç görülüş gerekiyordu?",
          "aciklama": "Hata iki kez görüldüyse Düzeltme satırı yeter; kural ve mekanizma üçüncü görülüşte yazılır.",
          "kaynak": {
            "adres": "CLAUDE.md:113",
            "okuma": "2026-11-15",
            "dayanak": "CLAUDE.md satır 113'e göre aynı hata ya da düzeltme üçüncü kez görülünce kural ve mekanizması yazılır, ilk iki görülüşte KARARLAR'daki Düzeltme satırı yeter."
          }
        },
        {
          "id": "b12-d2-s5",
          "tur": "coktan",
          "soru": "Resmi tetik ile bizim eşik arasındaki fark hangisi?",
          "secenekler": [
            "Resmi öneri üçüncü yanlışı bekler, biz ilk yanlışta kanca yazarız",
            "Resmi öneri ikinci yanlışta CLAUDE.md'ye yazar, biz üçüncüde",
            "İkisi de ilk yanlışta CLAUDE.md'ye satır eklemeyi ister"
          ],
          "dogru": 1,
          "ipucu": "Resmi tetikte kaç yanlış yetiyordu, bizim eşikte kaç görülüş gerekiyordu?",
          "aciklama": "Resmi öneri iki yanlışta CLAUDE.md'ye eklemeyi önerir; bizde iki görülüşe kadar Düzeltme satırı yeter, üçüncüde kural mekanizmasıyla yazılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgedeki tabloya göre Claude bir kuralı ya da komutu iki kez yanlış yaparsa o bilgi CLAUDE.md'ye eklenir."
          }
        },
        {
          "id": "b12-d2-s6",
          "tur": "bosluk",
          "soru": "KARARLAR.md satır 3'e göre Düzeltme satırı, kaçıncı ___ olduğunu ve fark edeni taşır.",
          "secenekler": ["döngü turu", "görülüş", "commit"],
          "dogru": 1,
          "ipucu": "Üçüncü kez kuralı tetikleyen sayımı düşün.",
          "aciklama": "Satırdaki görülüş sayısı, üçüncü görülüş kuralının ne zaman işleyeceğini gösterir.",
          "kaynak": {
            "adres": "KARARLAR.md:3",
            "okuma": "2026-11-15",
            "dayanak": "KARARLAR.md satır 3'e göre Düzeltme satırı konu önekini, ne yanlış yapıldığını, doğrusunu, kaçıncı görülüş olduğunu ve fark edeni taşır."
          }
        },
        {
          "id": "b12-d2-s7",
          "tur": "coktan",
          "soru": "denetim.py'deki D19 kontrolü neye bakar?",
          "secenekler": [
            "KARARLAR.md'deki Düzeltme satırlarının biçimine",
            "CLAUDE.md ve skill dosyalarının boyutuna",
            "Devir kartındaki sonraki adım satırına"
          ],
          "dogru": 0,
          "ipucu": "D19 olmasa görülüş sayımından ne kaçabilirdi, hatırla.",
          "aciklama": "D19, Düzeltme satırının konu öneki, görülüş ve fark eden alanlarını taşıyıp taşımadığını denetler; biçimi bozuk satır sayımdan kaçar.",
          "kaynak": {
            "adres": "denetim.py:68",
            "okuma": "2026-11-15",
            "dayanak": "denetim.py satır 68'e göre D19, KARARLAR.md'de Düzeltme ile başlayan satırın konu önekini, görülüş sayısını ve fark eden alanını taşıyıp taşımadığını denetler."
          }
        }
      ]
    },
    {
      "id": "b12-d3",
      "baslik": "Doğrulama: test ve denetim",
      "hedefler": [
        "Claude'a geçti ya da kaldı diyen bir kontrol vermenin neden işe yaradığını anlatabilir.",
        "Testin ve Stop kancasının bitti sözünü kanıta nasıl bağladığını anlatabilir.",
        "denetim.py'nin ne yaptığını baş yorumundan anlatabilir."
      ],
      "anlatim": [
        "Claude iş bitmiş göründüğünde durur. Koşabileceği bir kontrol yoksa tek dayanağı bu görüntüdür; test eden sen olursun. Ona geçti ya da kaldı diyen bir şey verirsen, örneğin bir test dosyası ya da betiğin çıkış kodu (exit code), Claude değişikliği yapar, kontrolü koşar, bozulan varsa çıktıyı okuyup düzeltir ve yeniden koşar.",
        "Kontrolün sıkılığı sana kalmış. İstemde \"testler geçene kadar devam et\" dersen kararı Claude verir. Stop kancası (Stop hook) ise Claude turu bitirmeye çalıştığında betiğini koşar; betik 2 koduyla çıkarsa Claude işe geri döner ve bunu Claude Code uygular. Hangisini seçersen seç kanıt iste: koşulan komut ve çıktısı.",
        "Bizde bu işin bir parçası denetim.py'dedir. Baş yorumu otuz kontrolü (D1-D30) sayar ve \"Yalnız okur, hiçbir dosyayı değiştirmez\" der; çıkış 0 temiz, 1 bulgu, 2 kullanım hatasıdır. Yeni kancada kanca-denetim skill'i testler.sh'te kalan 0 ve denetim.py temiz ister. CLAUDE.md satır 52: değişikliği basit bir testle sına, sonucunu yaz; sınanmamış değişiklik bitmiş sayılmaz."
      ],
      "terimler": [
        {"tr": "Stop kancası", "en": "Stop hook", "aciklama": "Claude turu bitirmeye çalıştığında çalışan kanca; betik 2 koduyla çıkarsa Claude işe geri döner."},
        {"tr": "çıkış kodu", "en": "exit code", "aciklama": "Bir komutun ya da betiğin bitince verdiği sayı; Claude bunu okuyup işin geçip geçmediğini anlar."}
      ],
      "sorular": [
        {
          "id": "b12-d3-s1",
          "tur": "coktan",
          "soru": "Resmi belgeye göre Claude'un koşabileceği bir kontrol yoksa ne olur?",
          "secenekler": [
            "Claude işi bitirmeyi reddeder",
            "Test eden sen olursun",
            "Claude Code kendiliğinden test yazar"
          ],
          "dogru": 1,
          "ipucu": "Claude'un elinde \"bitmiş görünüyor\" dışında ne kalıyor?",
          "aciklama": "Kontrol yoksa Claude yalnız işin bitmiş görünmesine dayanır; hataları yakalama işi sana kalır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre Claude'un koşabileceği bir kontrol yoksa elindeki tek dayanak işin bitmiş görünmesidir ve test eden sen olursun, her hata sen fark edene kadar kalır."
          }
        },
        {
          "id": "b12-d3-s2",
          "tur": "sirala",
          "soru": "Geçti ya da kaldı diyen bir kontrol verildiğinde Claude'un döngüsünü sırala.",
          "adimlar": [
            "Değişikliği yapar",
            "Kontrolü koşar",
            "Bozulan varsa çıktıyı okuyup düzeltir",
            "Kontrolü yeniden koşar"
          ],
          "ipucu": "Düzeltmeden önce neyin bozulduğunu bilmesi gerekir.",
          "aciklama": "Claude önce değiştirir, sonra ölçer; bozulan varsa düzeltip yeniden ölçer, böylece döngüyü kendisi kapatır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre geçti ya da kaldı diyen bir kontrolü olan Claude değişikliği yapar, kontrolü koşar, bir şey bozulduysa çıktıyı okuyup düzeltir ve kontrolü yeniden koşar."
          }
        },
        {
          "id": "b12-d3-s3",
          "tur": "dogru-yanlis",
          "soru": "Stop kancasının betiği 2 koduyla çıkarsa Claude turu bitirmek yerine işe geri gönderilir.",
          "dogru": true,
          "ipucu": "Kancada hangi çıkış kodunun durdurduğunu hatırla.",
          "aciklama": "Stop kancası Claude turu bitirmeye çalışınca koşar; 2 koduyla çıkış Claude'u çalışmaya geri gönderir.",
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
          "soru": "Claude \"Tüm testler geçti\" dedi. Belgeye göre ondan ne istemelisin?",
          "secenekler": [
            "Testlerin geçtiğini söyleyen kısa bir özet",
            "Testleri senin yeniden koşmanı",
            "Koştuğu komutu ve çıktısını"
          ],
          "dogru": 2,
          "ipucu": "Kendin koşmadan neye bakarak emin olabilirsin?",
          "aciklama": "Yalnız \"geçti\" demek az şey söyler; komut ve çıktısını okumak testi yeniden koşmaktan hızlıdır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre hangi kontrolü seçersen seç Claude'dan kanıt, yani koştuğu komutu ve çıktısını istersin, çünkü tek başına tüm testler geçti sözü çok az şey söyler."
          }
        },
        {
          "id": "b12-d3-s5",
          "tur": "bosluk",
          "soru": "denetim.py baş yorumuna göre betik 0 koduyla çıkarsa sonuç ___ demektir.",
          "secenekler": ["temiz", "bulgu var", "kullanım hatası"],
          "dogru": 0,
          "ipucu": "Üç kodun her biri ayrı bir sonuç anlatır; sorun çıkmadığında hangisi döner, düşün.",
          "aciklama": "denetim.py'de 0 temiz, 1 bulgu, 2 kullanım hatası demektir.",
          "kaynak": {
            "adres": "denetim.py:23",
            "okuma": "2026-11-15",
            "dayanak": "denetim.py satır 23'e göre çıkış kodu 0 temiz, 1 bulgu, 2 kullanım hatası anlamına gelir."
          }
        },
        {
          "id": "b12-d3-s6",
          "tur": "dogru-yanlis",
          "soru": "denetim.py bulduğu hatayı kendisi düzeltir.",
          "dogru": false,
          "ipucu": "denetim.py'nin dosyalara dokunup dokunmadığını hatırla.",
          "aciklama": "denetim.py yalnız okur, hiçbir dosyayı değiştirmez; bulguyu ne yapılması gerektiğiyle birlikte tek satırda bildirir.",
          "kaynak": {
            "adres": "denetim.py:16",
            "okuma": "2026-11-15",
            "dayanak": "denetim.py satır 16'ya göre betik yalnız okur ve hiçbir dosyayı değiştirmez."
          }
        },
        {
          "id": "b12-d3-s7",
          "tur": "coktan",
          "soru": "CLAUDE.md satır 52'ye göre hangi değişiklik bitmiş sayılır?",
          "secenekler": [
            "Claude'un bitti dediği ve özetini yazdığı",
            "Testle sınanıp sonucu yazılan",
            "Commit'e girip devir kartına yazılan"
          ],
          "dogru": 1,
          "ipucu": "Satır 52 hangi değişikliği bitmiş saymıyordu, onun tersini düşün.",
          "aciklama": "Satır değişikliğin basit bir testle sınanmasını ve sonucun yazılmasını ister; sınanmamış değişiklik bitmiş sayılmaz.",
          "kaynak": {
            "adres": "CLAUDE.md:52",
            "okuma": "2026-11-15",
            "dayanak": "CLAUDE.md satır 52'ye göre değiştirdiğin şey basit bir testle sınanır ve sonucu yazılır, sınanmamış değişiklik bitmiş sayılmaz."
          }
        },
        {
          "id": "b12-d3-s8",
          "tur": "coktan",
          "soru": "kanca-denetim skill'i yeni bir kancayı sınarken hangi ölçütü ister?",
          "secenekler": [
            "testler.sh'te kalan 0 ve denetim.py temiz",
            "kullanıcının ekranda bir kez denemesi",
            "Kancanın bir hafta hatasız çalışması"
          ],
          "dogru": 0,
          "ipucu": "Bitti sözünü kanıta bağlayan ölçütün komutla sınanabildiğini hatırla.",
          "aciklama": "Sınama adımı iki ölçüt verir: test betiğinde kalan 0 ve denetimin temiz çıkması.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md:21",
            "okuma": "2026-11-15",
            "dayanak": "kanca-denetim skill'inin sınama adımına göre bash araclar/testler.sh kalan 0 vermeli ve python3 denetim.py temiz çıkmalıdır."
          }
        }
      ]
    },
    {
      "id": "b12-d4",
      "baslik": "Uzun ve gözetimsiz koşu",
      "hedefler": [
        "Uzun oturumu yönlendiren plan, odaklı sıkıştırma ve geri sarma araçlarını anlatabilir.",
        "Gözetimsiz bir koşuyu ne kadar doğrulayacağının ölçüsünü anlatabilir.",
        "Bizim döngünün hangi işi aldığını ve nerede durduğunu anlatabilir."
      ],
      "anlatim": [
        "Uzun işte iki alışkanlık var: başlamadan kapsamı belirle, koşarken yönlendir. Plan modunda (plan mode) Claude dosyaya dokunmadan araştırıp plan verir; planı gerçekten oku. Sıkıştırırken (compaction) /compact arkasına odak yaz, özet onu tutar. Claude saparsa geri sar (rewind). Aynı şeyi iki kez düzelttin ve hâlâ yanlışsa üçüncü düzeltme yerine /clear ile baştan başla, öğrendiğini yeni isteme kat.",
        "Gözetimsiz koşuda ölçü basit: ne kadar az izlediysen o kadar çok doğrula. İzlediğin kısa oturumda hızlı bir bakış yeter. Gece kendi başına koşacak işi bırakmadan önce sor: Claude bitti'nin neye benzediğini biliyor mu? Testleri kancayla zorunlu kıl. Koşu bitince özetle değil değişiklik farkıyla (diff) başla ve işi görmemiş taze bir gözden ikinci görüş al.",
        "Bizim döngü, sen yokken kuyruktan iş koşar. dongu skill'ine göre döngüye yalnız bitti ölçütü makineyle ölçülen, geri alınabilir iş girer. Durma iki eşiklidir: yumuşak eşikte yeni iş başlamaz, açık iş biter; sert eşikte açık iş güvenli noktada durur. Döngüde sana soru açılmaz."
      ],
      "terimler": [
        {"tr": "plan modu", "en": "plan mode", "aciklama": "Claude'un dosyaya dokunmadan araştırıp plan sunduğu izin modu."},
        {"tr": "sıkıştırma", "en": "compaction", "aciklama": "Konuşmanın özetlenip özetin yeni bağlam olarak kullanılması; eski mesajlar silinir."},
        {"tr": "geri sarma", "en": "rewind", "aciklama": "Önceki bir istemdeki geri sarma noktasına (checkpoint) kodu, konuşmayı ya da ikisini birden geri almak."},
        {"tr": "değişiklik farkı", "en": "diff", "aciklama": "Bir dosyada eklenen ve silinen satırları gösteren karşılaştırma."}
      ],
      "sorular": [
        {
          "id": "b12-d4-s1",
          "tur": "sirala",
          "soru": "Uzun bir işi derste anlatılan alışkanlıklara göre sırala.",
          "adimlar": [
            "Plan modunda Claude'dan plan iste",
            "Planı dikkatle oku, eksik varsa Claude'a eklet",
            "Claude koşarken sıkıştırma ve geri sarmayla yönlendir"
          ],
          "ipucu": "Önce kapsam, sonra yönlendirme.",
          "aciklama": "Önce plan modunda kapsam belirlenir ve plan okunur; Claude çalışırken de sıkıştırma ve geri sarmayla yönlendirilir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/steering-long-sessions",
            "kopya": "ders-action-01-steering-long-sessions.md",
            "okuma": "2026-11-15",
            "dayanak": "Derse göre uzun oturum iki alışkanlığa dayanır, Claude başlamadan işin kapsamını belirlemek ve Claude koşarken onu yönlendirmek."
          }
        },
        {
          "id": "b12-d4-s2",
          "tur": "eslestir",
          "soru": "Her durumu derste önerilen araçla eşle.",
          "ciftler": [
            ["İşe başlamadan yaklaşımı görmek istiyorsun", "Plan modu"],
            ["Bağlam doluyor, yalnız API işi önemli", "Arkasına odak yazılmış /compact"],
            ["Claude yanlış yola saptı, önceki isteme dönmek istiyorsun", "Geri sarma menüsü"]
          ],
          "ipucu": "Her aracın ne zaman kullanıldığına bak: işten önce mi, iş sırasında mı?",
          "aciklama": "Plan modu işten önce, odaklı sıkıştırma bağlam dolarken, geri sarma Claude saptığında kullanılır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/steering-long-sessions",
            "kopya": "ders-action-01-steering-long-sessions.md",
            "okuma": "2026-11-15",
            "dayanak": "Derse göre iş plan modunda kapsamlanır, /compact arkasına yazılan odakla özetin neyi tutacağı belirlenir ve Claude yanlış yola saparsa geri sarma son geri sarma noktasına (checkpoint) döndürür."
          }
        },
        {
          "id": "b12-d4-s3",
          "tur": "dogru-yanlis",
          "soru": "/compact komutunun arkasına yazdığın odak, özetin neyi tutacağını belirler.",
          "dogru": true,
          "ipucu": "Komutun arkasına yazdığın sözün özete etkisini düşün.",
          "aciklama": "Odak yazmadan sıkıştırırsan önemli bir şey özetten düşebilir; komutun arkasına yazdığın şey özeti yönlendirir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/steering-long-sessions",
            "kopya": "ders-action-01-steering-long-sessions.md",
            "okuma": "2026-11-15",
            "dayanak": "Derse göre /compact komutundan sonra yazdığın her şey özetin neyi tutacağını biçimlendirir."
          }
        },
        {
          "id": "b12-d4-s4",
          "tur": "coktan",
          "soru": "Aynı şeyi iki kez düzelttin, Claude hâlâ yanlış yapıyor. Belgeye göre en iyi hamle ne?",
          "secenekler": [
            "Daha uzun ve ayrıntılı bir üçüncü düzeltme yazmak",
            "/clear ile baştan başlayıp yeni istem yazmak",
            "Oturumu sıkıştırıp aynı düzeltmeyi tekrarlamak"
          ],
          "dogru": 1,
          "ipucu": "Üçüncü düzeltme, iki başarısız denemeyi taşıyan konuşmaya eklenir.",
          "aciklama": "Üçüncü düzeltme iki başarısız denemeyi içeren konuşmaya eklenir; temiz başlangıç ve daha iyi istem neredeyse her zaman daha iyi çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre aynı şeyi iki kez düzelttiğin halde hâlâ yanlışsa /clear ile baştan başlayıp öğrendiklerini katan tek yeni istem neredeyse her zaman üçüncü düzeltmeden iyi çalışır."
          }
        },
        {
          "id": "b12-d4-s5",
          "tur": "coktan",
          "soru": "Derse göre gözetimsiz bir koşuyu ne kadar doğrulamalısın?",
          "secenekler": [
            "Ne kadar az izlediysen o kadar çok",
            "Her koşuda aynı kısa bakışla",
            "Özet temizse doğrulamadan"
          ],
          "dogru": 0,
          "ipucu": "İzlediğin kısa oturumla gece koşan işi karşılaştır.",
          "aciklama": "Kimse izlemediyse ne olduğunu sonradan kurman gerekir, bu yüzden gözetimsiz koşu gerçek bir kontrol ister.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/trust-it-verifying-unsupervised-runs",
            "kopya": "ders-action-08-verifying-unsupervised.md",
            "okuma": "2026-11-15",
            "dayanak": "Derse göre ne kadar az izlediysen o kadar çok doğrularsın, kısa ve izlenen oturumda hızlı bir bakış yeter ama gözetimsiz koşu gerçek bir kontrol ister."
          }
        },
        {
          "id": "b12-d4-s6",
          "tur": "dogru-yanlis",
          "soru": "Gözetimsiz bir koşudan sonra işe Claude'un yazdığı özeti okuyarak başlamalısın.",
          "dogru": false,
          "ipucu": "Özet sana hangi dosyaya dokunulduğunu her zaman söyler mi?",
          "aciklama": "Derli toplu bir özet, beklemediğin bir dosyaya dokunulduğunu göstermeyebilir; bunu değişiklik farkı gösterir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/trust-it-verifying-unsupervised-runs",
            "kopya": "ders-action-08-verifying-unsupervised.md",
            "okuma": "2026-11-15",
            "dayanak": "Derse göre işe Claude'un yaptıklarını anlatan özetle değil, değişiklik farkının kendisiyle başlanır."
          }
        },
        {
          "id": "b12-d4-s7",
          "tur": "coktan",
          "soru": "Bir işi gece kendi başına koşmaya bırakmadan önce resmi belge hangi soruyu sormanı ister?",
          "secenekler": [
            "Hangi modelle koşacağını biliyor mu?",
            "Kaç dosya okuyacağını biliyor mu?",
            "Bitti'nin neye benzediğini biliyor mu?",
            "Özetinin ne kadar uzun olacağını biliyor mu?"
          ],
          "dogru": 2,
          "ipucu": "İşin sonunu tarif eden soruyu ara.",
          "aciklama": "Belgenin beş sorusundan biri budur; ötekiler kendi işini sınayıp sınayamadığı, neye dokunabileceği, onu neyin durduracağı ve sonucu kimin onaylayacağıdır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre bir işi kendi başına bırakmadan önce bitti'nin neye benzediğini bilip bilmediği, kendi işini sınayıp sınayamadığı, neye dokunabileceği, onu neyin durduracağı ve sonucun nereye gidip kimin onaylayacağı sorulur."
          }
        },
        {
          "id": "b12-d4-s8",
          "tur": "coktan",
          "soru": "dongu skill'ine göre hangi iş döngüye girebilir?",
          "secenekler": [
            "Bitti ölçütü senin görünüş onayına bağlı iş",
            "Makineyle ölçülen, geri alınabilir iş",
            "Müşteriye gidecek, geri alınamayan metin"
          ],
          "dogru": 1,
          "ipucu": "Sen yokken kararı kim verecek, düşün.",
          "aciklama": "Döngüde sen yoksun; bu yüzden yalnız sonucu makineyle ölçülen ve geri alınabilen iş girer, görünüş onayı ve müşteri metni girmez.",
          "kaynak": {
            "adres": ".claude/skills/dongu/SKILL.md:18",
            "okuma": "2026-11-15",
            "dayanak": "dongu skill'ine göre döngüye girebilen işin bitti ölçütü makineyle ölçülür, kullanıcının kararını gerektirmez ve iş geri alınabilir."
          }
        },
        {
          "id": "b12-d4-s9",
          "tur": "bosluk",
          "soru": "dongu skill'ine göre ___ eşikte yeni iş başlamaz, açık iş biter.",
          "secenekler": ["yumuşak", "sert", "haftalık"],
          "dogru": 0,
          "ipucu": "İki eşikten hangisi açık işin bitmesine izin veriyor?",
          "aciklama": "Yumuşak eşikte açık iş bitirilir; sert eşikte açık iş güvenli noktada durur.",
          "kaynak": {
            "adres": ".claude/skills/dongu/SKILL.md:34",
            "okuma": "2026-11-15",
            "dayanak": "dongu skill'ine göre yumuşak eşikte yeni iş başlamaz ve açık iş biter, sert eşikte açık iş güvenli noktada durur."
          }
        }
      ]
    },
    {
      "id": "b12-d5",
      "baslik": "Çıktı stili ve öğrenme kipi",
      "hedefler": [
        "Çıktı stilinin bir oturumdaki rolü, tonu ve cevap biçimini değiştirdiğini anlatabilir.",
        "Açıklayıcı (Explanatory) ve Öğrenme (Learning) stillerini birbirinden ayırt edebilir.",
        "Masaüstünde stilin nasıl seçildiğini ve bizde bu ayarın neden sorulduğunu anlatabilir."
      ],
      "anlatim": [
        "Çıktı stili (output style), bir oturumdaki her cevapta Claude'un rolünü, tonunu ve cevap biçimini belirleyen talimatlardır; aynı isteği her istemde tekrarlamazsın. Varsayılan (Default) stil dışında dört yerleşik stil var: Proactive sormadan başlar, Concise sonuçla açar ve kısa yazar, Explanatory ve Learning ise açıklama ekler.",
        "Explanatory stilinde Claude işi her zamanki gibi yapar, seçimlerinin nedenini sohbette kısa Insight bloklarıyla anlatır; bu açıklamalar dosyana yorum olarak yazılmaz. Learning stilinde aynı bloklara ek olarak, gerçek bir tasarım kararı olan küçük bir kod parçasını sana bırakır, yeri TODO(human) ile işaretler ve sen yazana kadar bekler.",
        "Stil bir talimattır, garanti değildir; her seferinde olması gereken iş için kanca gerekir. Masaüstünde stil, bir ayar dosyasındaki outputStyle alanıyla seçilir (örneğin .claude/settings.local.json); terminalde /output-style komutu da vardır. Değer büyük-küçük harfe duyarlıdır; stil adıyla tam eşleşmeyen değer varsayılan stili verir. Bizde bu dosyaların değişikliği CLAUDE.md satır 46'ya göre her seferinde sana sorulur."
      ],
      "terimler": [
        {"tr": "çıktı stili", "en": "output style", "aciklama": "Bir oturum boyunca Claude'un rolünü, tonunu ve cevap biçimini belirleyen talimatlar."},
        {"tr": "açıklayıcı stil", "en": "Explanatory", "aciklama": "Claude'un seçimlerinin nedenini kısa Insight bloklarıyla anlattığı yerleşik stil."},
        {"tr": "öğrenme stili", "en": "Learning", "aciklama": "Açıklamaya ek olarak bazı kod parçalarını senin yazmanı isteyen yerleşik stil."}
      ],
      "sorular": [
        {
          "id": "b12-d5-s1",
          "tur": "coktan",
          "soru": "Çıktı stili neyi değiştirir?",
          "secenekler": [
            "Claude'un izin modunu",
            "Cevapların rolünü, tonunu ve biçimini",
            "Claude'un dokunabileceği dosyaları"
          ],
          "dogru": 1,
          "ipucu": "Stilin adındaki \"çıktı\" sözcüğüne odaklan.",
          "aciklama": "Çıktı stili bir oturum boyunca cevapların rolünü, tonunu ve biçimini belirleyen talimatlardır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/output-styles",
            "kopya": "output-styles.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre çıktı stili, bir oturumdaki her cevapta Claude'un rolünü, tonunu ve cevap biçimini belirleyen talimatlar kümesidir."
          }
        },
        {
          "id": "b12-d5-s2",
          "tur": "eslestir",
          "soru": "Her yerleşik stili yaptığı işle eşle.",
          "ciftler": [
            ["Proactive", "Sormadan başlar, sıradan kararlarda makul varsayım yapar"],
            ["Concise", "Sonuçla açar, girişi ve tekrar özetini atlar"],
            ["Explanatory", "Seçimlerin nedenini kısa Insight bloklarıyla anlatır"],
            ["Learning", "Açıklamanın yanında bazı kod parçalarını sana bırakır"]
          ],
          "ipucu": "Stillerin İngilizce adları ne yaptıklarını ima eder.",
          "aciklama": "Dört stil de varsayılan talimatları korur ve üstüne kendi davranışını ekler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/output-styles",
            "kopya": "output-styles.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgedeki tabloya göre Proactive sormadan başlayıp makul varsayım yapar, Concise sonuçla açılıp girişi ve tekrar özetini atlar, Explanatory seçimlerin nedenini Insight bloklarıyla anlatır, Learning ise bazı kod parçalarını senin yazmanı ister."
          }
        },
        {
          "id": "b12-d5-s3",
          "tur": "dogru-yanlis",
          "soru": "Explanatory stilindeki açıklamalar dosyalarına yorum satırı olarak yazılır.",
          "dogru": false,
          "ipucu": "Insight blokları nerede görünüyordu?",
          "aciklama": "Açıklamalar sohbette, kodun önünde ya da arkasında Insight bloğu olarak görünür; dosyaya yorum olarak yazılmaz.",
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
          "soru": "Kod yazmayı elinle denemek istiyorsun ama iş de bitsin. Hangi stil uygun?",
          "secenekler": ["Concise", "Proactive", "Learning"],
          "dogru": 2,
          "ipucu": "Hangi stil kodun bir kısmını sana bırakıyordu?",
          "aciklama": "Bu stilde Claude sıradan işi kendisi yapar, tasarım kararı içeren küçük parçayı sana bırakır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/output-styles",
            "kopya": "output-styles.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgedeki tabloya göre Learning stili, iş yine biterken elinle kod yazma alıştırması istediğinde kullanılır."
          }
        },
        {
          "id": "b12-d5-s5",
          "tur": "coktan",
          "soru": "Cevaplar sana fazla uzun geliyor ve her istemde \"kısa yaz\" demekten yoruldun. Ne yaparsın?",
          "secenekler": [
            "Concise stilini seçerim",
            "Learning stilini seçerim",
            "İzin modunu değiştiririm"
          ],
          "dogru": 0,
          "ipucu": "Aynı isteği her istemde tekrarlamamak için hangi özellik vardı?",
          "aciklama": "Concise stili sonuçla açar, girişi ve tekrar özetini atlar; isteği her istemde yazman gerekmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/output-styles",
            "kopya": "output-styles.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgedeki tabloya göre Concise stili, varsayılan cevaplar istediğinden uzun olduğunda kullanılır ve cevaplar sonuçla açılıp giriş ile tekrar özeti atlanır."
          }
        },
        {
          "id": "b12-d5-s6",
          "tur": "dogru-yanlis",
          "soru": "Bir çıktı stili, bir şeyin her seferinde olacağını garanti eder.",
          "dogru": false,
          "ipucu": "Bu birimde gördüğün iki talimat türünü hatırla.",
          "aciklama": "Stil Claude'un uyduğu bir talimattır; her seferinde olması gereken iş için kanca kullanılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/output-styles",
            "kopya": "output-styles.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre çıktı stili Claude'a uyacağı talimatlar verir ama bir şeyin her zaman olacağını ya da hiç olmayacağını garanti etmez."
          }
        },
        {
          "id": "b12-d5-s7",
          "tur": "bosluk",
          "soru": "Masaüstü uygulamasında stil, bir ayar dosyasındaki ___ alanıyla seçilir.",
          "secenekler": ["permissions", "outputStyle", "hooks"],
          "dogru": 1,
          "ipucu": "Alan adı stilin İngilizce adından gelir.",
          "aciklama": "Belgeye göre masaüstünde stil, örneğin .claude/settings.local.json dosyasındaki bu alanla seçilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/output-styles",
            "kopya": "output-styles.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre masaüstü uygulamasında stil, bir ayar dosyasındaki (örneğin .claude/settings.local.json) outputStyle alanı ayarlanarak seçilir."
          }
        },
        {
          "id": "b12-d5-s8",
          "tur": "coktan",
          "soru": "Ayar dosyasına outputStyle değerini küçük harfle 'explanatory' yazarsan ne olur?",
          "secenekler": [
            "Explanatory stili açılır",
            "Claude Code hata verip açılmaz",
            "Varsayılan stil kullanılır"
          ],
          "dogru": 2,
          "ipucu": "Stil adıyla harfi harfine eşleşmeyen bir değere ne olduğunu hatırla.",
          "aciklama": "Değer büyük-küçük harfe duyarlıdır; stil adıyla tam eşleşmeyen değer varsayılan (Default) stili verir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/output-styles",
            "kopya": "output-styles.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre outputStyle değeri büyük-küçük harfe duyarlıdır ve explanatory gibi bir stil adıyla tam eşleşmeyen değer Default stili verir."
          }
        },
        {
          "id": "b12-d5-s9",
          "tur": "dogru-yanlis",
          "soru": "Bizde Claude, .claude/settings.local.json dosyasına outputStyle eklemeden önce sana sorar.",
          "dogru": true,
          "ipucu": "Bizde ayar dosyalarına dokunmanın kuralını hatırla.",
          "aciklama": "Bu dosyanın değişikliği her seferinde sorulanlar listesindedir; yalnız kanca ekleme ve değiştirme bu sorudan muaftır.",
          "kaynak": {
            "adres": "CLAUDE.md:46",
            "okuma": "2026-11-15",
            "dayanak": "CLAUDE.md satır 46'ya göre .claude/settings.json ve .claude/settings.local.json değişikliği, kanca ekleme ve değiştirme hariç, her seferinde sorulur."
          }
        }
      ]
    },
    {
      "id": "b12-d6",
      "baslik": "Bitirme görevi: oku, anlat, tarif et",
      "hedefler": [
        "CLAUDE.md satır 53'ü sistem-metni ve kanca-denetim skill'leriyle birbirine bağlayarak anlatabilir.",
        "Bir değişikliği görev kalıbıyla Claude'a nasıl yazacağını anlatabilir.",
        "Belirsiz bir istemle somut bir istemi birbirinden ayırt edebilir."
      ],
      "anlatim": [
        "Zinciri izle. CLAUDE.md satır 53 kuralı koyar: mekanizmasız kural dilektir. sistem-metni skill'i hangi kuralın kanca ya da kontrol olacağını söyler ve her durdurma için bir bozma ve bir yanlış alarm testi ister. kanca-denetim skill'i mekanik adımları verir: önce ara, kanca ile testini yan yana yaz, settings.json'a kaydet, gerçek kayıtta koş, testler ve denetim temiz çıksın.",
        "Değişikliği Claude'a görev kalıbıyla yazarsın (ajan-gorevi skill'i): amaç ve neden, dokunulacak yollar, önce okunacaklar, bitti ölçütü (definition of done) ve kenar durumları. Nasıl yapılacağını yazmazsın. Resmi öneri de benzer: dosyayı adıyla an, belirtiyi anlat, düzeldi'nin neye benzediğini baştan söyle.",
        "Son bir test: istemini (prompt) işi az bilen bir iş arkadaşına göster; o karışırsa Claude da karışır. Claude'u zeki ama bizim alışkanlıklarımızı bilmeyen yeni bir çalışan gibi düşün. Ne istediğini ne kadar açık söylersen sonuç o kadar iyi olur."
      ],
      "terimler": [
        {"tr": "bitti ölçütü", "en": "definition of done", "aciklama": "İşin bittiğini gösteren, ölçülebilir ve mümkünse komutla sınanabilir şart."},
        {"tr": "istem", "en": "prompt", "aciklama": "Claude'a yazdığın istek metni."}
      ],
      "sorular": [
        {
          "id": "b12-d6-s1",
          "tur": "sirala",
          "soru": "kanca-denetim skill'ine göre bizde yeni bir kanca eklemenin adımlarını sırala.",
          "adimlar": [
            "Aynı işi yapan kanca ya da kontrol var mı diye ara",
            "Kancayı ve testini yan yana yaz",
            "Kancayı settings.json'a olayı ve eşleşmesiyle kaydet",
            "Bir kez gerçek kayıtta koş",
            "testler.sh ve denetim.py ile sına"
          ],
          "ipucu": "Yazmadan önce ne yapılır, en sonda ne yapılır?",
          "aciklama": "Skill önce aynı işi yapan kanca olup olmadığına bakar, en sonda test betiği ve denetimle sınar.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md:16",
            "okuma": "2026-11-15",
            "dayanak": "kanca-denetim skill'inin adımları sırayla aramak, kanca ile testini yan yana yazmak, settings.json'a kaydetmek, gerçek kayıtta koşmak, bağlı belgeleri güncellemek ve testler ile denetimle sınamaktır."
          }
        },
        {
          "id": "b12-d6-s2",
          "tur": "coktan",
          "soru": "kanca-denetim skill'ine göre hangi kuralın kanca ya da kontrol olacağı hangi skill'de yazar?",
          "secenekler": ["sistem-metni", "kanca-denetim", "ajan-gorevi"],
          "dogru": 0,
          "ipucu": "Zincirde mekanizma seçimi ile mekanik adımlar ayrı skill'lerdeydi.",
          "aciklama": "kanca-denetim yalnız mekanik adımları taşır; mekanizma seçimi ve test şartı öteki skill'dedir.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md:10",
            "okuma": "2026-11-15",
            "dayanak": "kanca-denetim skill'ine göre hangi kuralın kanca ya da kontrol olacağı ve test şartı sistem-metni skill'inin kural yazma bölümündedir, kanca-denetim yalnız mekanik adımları taşır."
          }
        },
        {
          "id": "b12-d6-s3",
          "tur": "dogru-yanlis",
          "soru": "sistem-metni skill'ine göre bir kanca yazılınca her durdurma için bir bozma testi ve bir yanlış alarm testi de yazılır.",
          "dogru": true,
          "ipucu": "Mekanizma seçen skill'in teste dair şartını hatırla.",
          "aciklama": "Skill kanca ya da kontrol yazılınca testinin de yazılmasını ister: her durdurma için bir bozma ve bir yanlış alarm testi.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md:36",
            "okuma": "2026-11-15",
            "dayanak": "sistem-metni skill'ine göre kanca ya da kontrol yazılınca testi de yazılır, her durdurma için bir bozma testi ve bir yanlış alarm testi."
          }
        },
        {
          "id": "b12-d6-s4",
          "tur": "coktan",
          "soru": "Hangisi Claude'a daha iyi bir tarif?",
          "secenekler": [
            "Giriş hatasını düzelt",
            "Süre dolunca giriş bozuluyor; src/auth/'a bak, hatayı gösteren test yaz, düzelt",
            "Giriş sisteminde bir sorun var gibi; dikkatlice, adım adım ve en iyi şekilde düzelt"
          ],
          "dogru": 1,
          "ipucu": "Hangisi dosyayı, belirtiyi ve düzelmiş halin nasıl görüneceğini söylüyor?",
          "aciklama": "Somut istem Claude'a koddan okuyamayacağı bilgiyi verir; adım adım gibi sözler ise sıradan istem metnidir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belgeye göre dosyayı adıyla anar, belirtiyi anlatır ve düzeldi'nin neye benzediğini baştan söylersen genelde bir düzeltme turundan kurtulursun."
          }
        },
        {
          "id": "b12-d6-s5",
          "tur": "bosluk",
          "soru": "ajan-gorevi skill'ine göre görevdeki ___ alanı ölçülebilir, komutla sınanabilir bir şarttır.",
          "secenekler": ["Bitti ölçütü", "Amaç ve neden", "Kenar durumları"],
          "dogru": 0,
          "ipucu": "İşin bittiğini neyle ölçeceğini düşün.",
          "aciklama": "Bu alan komutla sınanabildiği için işin bitip bitmediği ölçülerek anlaşılır.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md:21",
            "okuma": "2026-11-15",
            "dayanak": "ajan-gorevi skill'ine göre Bitti ölçütü alanı ölçülebilir ve komutla sınanabilir bir şarttır."
          }
        },
        {
          "id": "b12-d6-s6",
          "tur": "dogru-yanlis",
          "soru": "ajan-gorevi skill'ine göre görevde işin nasıl yapılacağı adım adım yazılır.",
          "dogru": false,
          "ipucu": "Görev kalıbında neyin yazılmadığını hatırla.",
          "aciklama": "Görev kısa yazılır ve nasıl yapılacağı yazılmaz; görev amacı, yolları ve bitti ölçütünü taşır.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md:16",
            "okuma": "2026-11-15",
            "dayanak": "ajan-gorevi skill'ine göre görev kısa yazılır ve nasıl yapılacağı yazılmaz."
          }
        },
        {
          "id": "b12-d6-s7",
          "tur": "coktan",
          "soru": "kanca-denetim skill'ine bir adım ekletmek istiyorsun. Hangi tarif görev kalıbına uyar?",
          "secenekler": [
            "kanca-denetim'i iyileştir, gerisini sen bil",
            "Önce 14. satırı oku, sonra şu sözcüğü değiştir, sonra dosyayı kaydet",
            "Amacı, dokunulacak dosyayı, bitti ölçütünü ve kenar durumunu yaz"
          ],
          "dogru": 2,
          "ipucu": "Kalıp neyi ister, neyi yazdırmaz?",
          "aciklama": "Kalıp amacı, yolları, bitti ölçütünü ve kenar durumlarını ister; adım tarifi yazdırmaz, belirsiz istek de ölçüt vermez.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md:16",
            "okuma": "2026-11-15",
            "dayanak": "ajan-gorevi skill'ine göre görev kısa yazılır, nasıl yapılacağı yazılmaz ve görev amaç, dokunulacak yollar, bitti ölçütü ve kenar durumları alanlarını taşır."
          }
        },
        {
          "id": "b12-d6-s8",
          "tur": "coktan",
          "soru": "Resmi istem rehberindeki ana test hangisi?",
          "secenekler": [
            "İstemi olabildiğince kısa tut",
            "İstemi işi az bilen bir iş arkadaşına göster",
            "İstemi büyük harfle ve tekrarla güçlendir"
          ],
          "dogru": 1,
          "ipucu": "Rehber Claude'u kime benzetiyordu?",
          "aciklama": "Rehber Claude'u bağlamı bilmeyen yeni bir çalışana benzetir; az bilen birinin kafasını karıştıran istem Claude'un da kafasını karıştırır.",
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
