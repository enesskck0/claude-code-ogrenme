// icerik/birim-05.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b05",
  "sira": 5,
  "baslik": "Skill",
  "amac": "Skill'in ne olduğunu, SKILL.md dosyasının nasıl kurulduğunu, bağlamda ne kadar yer tuttuğunu, CLAUDE.md ve kancadan farkını ve bizim klasördeki bir skill'i okuyup değişikliğini Claude'a nasıl tarif edeceğini öğrenirsin.",
  "dersler": [
    {
      "id": "b05-d1",
      "baslik": "Skill nedir",
      "hedefler": [
        "Skill'in tekrar eden talimat ve iş akışını paketleyen dosya olduğunu anlatabilir.",
        "Başvuru skill'i (reference skill) ile eylem skill'ini (action skill) ayırt edebilir."
      ],
      "anlatim": [
        "Skill, Claude'a bir işi bir kez öğreten talimat dosyasıdır. Claude bu bilgiyi iş ilgili olduğunda kendiliğinden uygular.",
        "Claude'a aynı şeyi tekrar tekrar anlatıyorsan, o bir skill adayıdır.",
        "Skill en iyi belirli işlere özgü bilgide çalışır, örneğin commit mesajı biçimi. CLAUDE.md ise her oturumda kendiliğinden yüklenir, her zaman geçerli kural içindir.",
        "Bizde örnek: CLAUDE.md'de \"sistem metni değişirken `sistem-metni`; kayıt satırı yazılırken `kayit-yazma`\" satırı var. O iş gelince o skill okunur.",
        "Başvuru skill'i oturum boyunca kullanılacak bilgi verir, örneğin bir yazım kılavuzu. Eylem skill'i Claude'a belirli bir işi adım adım yaptırır, örneğin `/deploy` ile yayına alma.",
        "Claude isteğini skill açıklamalarıyla karşılaştırır ve uyanı açar. Eğik çizgi komutu (slash command) gibi senin yazmanı beklemez."
      ],
      "terimler": [
        {"tr": "başvuru skill'i", "en": "reference skill", "aciklama": "Claude'un oturum boyunca kullandığı bilgiyi taşıyan skill; örneğin bir yazım kılavuzu."},
        {"tr": "eylem skill'i", "en": "action skill", "aciklama": "Claude'a belirli bir işi yaptıran skill; örneğin yayına alma adımları."},
        {"tr": "eğik çizgi komutu", "en": "slash command", "aciklama": "İstem kutusuna / ile başlayarak yazdığın komut; bir skill'i adıyla açmak da böyle olur."}
      ],
      "sorular": [
        {
          "id": "b05-d1-s1",
          "tur": "coktan",
          "kart": 2,
          "soru": "Skill en çok hangi bilgide işe yarar?",
          "secenekler": [
            "Belirli işe özgü bilgi, örneğin commit mesajı biçimi",
            "Her oturumda geçerli genel proje kuralı",
            "Dış bir hizmete bağlanma",
            "Her dosya kaydında koşan iş"
          ],
          "dogru": 0,
          "ipucu": "Skill her konuşmada değil, ilgili iş gelince devreye girer.",
          "aciklama": "Skill'ler belirli işlere uygulanan özel bilgide en iyi çalışır, örneğin tercih ettiğin commit mesajı biçimi. Her konuşmada geçerli kural ise CLAUDE.md'ye yazılır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-agent-skills/what-are-skills",
            "kopya": "ders-skills-01-what-are-skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Skill'ler en iyi, belirli işlere uygulanan özel bilgide çalışır: ekibin kod inceleme ölçütleri ya da tercih ettiğin commit mesajı biçimi gibi."
          }
        },
        {
          "id": "b05-d1-s2",
          "tur": "dogru-yanlis",
          "kart": 0,
          "soru": "Skill, Claude'a bir işi bir kez öğretir; Claude o bilgiyi iş ilgili olduğunda kendiliğinden uygular.",
          "dogru": true,
          "ipucu": "Skill'in amacı, aynı anlatımı her seferinde tekrarlamamak.",
          "aciklama": "Doğru: skill bir kez yazılır, Claude onu ilgili her durumda uygular. Böylece aynı talimatı her seferinde yapıştırmazsın.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/skills",
            "kopya": "ders-101-10-skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Skill, Claude'a bir işi bir kez öğreten bir markdown dosyasıdır ve Claude bu bilgiyi ilgili olduğu her durumda kendiliğinden uygular."
          }
        },
        {
          "id": "b05-d1-s3",
          "tur": "eslestir",
          "kart": 4,
          "soru": "Her birini ne yaptığıyla eşleştir.",
          "ciftler": [
            ["Başvuru skill'i", "Oturum boyunca kullanılacak bilgi verir"],
            ["Eylem skill'i", "Claude'a belirli bir işi yaptırır"],
            ["CLAUDE.md", "Her oturumda kendiliğinden yüklenir"]
          ],
          "ipucu": "Örnekleri düşün: yazım kılavuzu, /deploy akışı ve her oturum okunan giriş dosyası.",
          "aciklama": "Başvuru skill'i bilgi, eylem skill'i iş verir. CLAUDE.md ise skill gibi isteğe göre değil, her oturumda yüklenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Skill'ler başvuru ya da eylem olabilir: başvuru skill'i oturum boyunca kullanılan bilgiyi verir, eylem skill'i Claude'a belirli bir işi yaptırır; CLAUDE.md ise her oturumda kendiliğinden yüklenir."
          }
        },
        {
          "id": "b05-d1-s4",
          "tur": "coktan",
          "kart": 4,
          "soru": "`kayit-yazma` skill'inin gövdesinde numaralı altı adım var. Bu hangi çeşide yakın?",
          "secenekler": [
            "Başvuru skill'i: kılavuz bilgisi verir",
            "Kanca: olay olunca kendiliğinden koşar",
            "Eylem skill'i: işi adım adım yaptırır"
          ],
          "dogru": 2,
          "ipucu": "Numaralı adımlar bilgi mi veriyor, yoksa bir işin nasıl yapılacağını mı sıralıyor?",
          "aciklama": "Belirli bir işi adım adım yaptıran içerik eylem tarafıdır. Başvuru skill'i ise iş sırası değil, uygulanacak bilgi taşır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Görev içeriği (task content), dağıtım, commit ya da kod üretimi gibi belirli bir eylem için Claude'a adım adım talimat verir."
          }
        },
        {
          "id": "b05-d1-s5",
          "tur": "coktan",
          "kart": 5,
          "soru": "Eğik çizgi komutunu sen yazarsın. Skill için hangisi doğru?",
          "secenekler": [
            "Skill de yalnız sen adını yazınca çalışır",
            "İsteğin açıklamasına uyunca Claude onu kendisi açar",
            "Skill yalnız oturum başında bir kez çalışır"
          ],
          "dogru": 1,
          "ipucu": "Claude isteğini neyle karşılaştırıyordu?",
          "aciklama": "Eğik çizgi komutunu senin yazman gerekir; skill'i ise Claude durumu tanıyınca kendisi uygular.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-agent-skills/what-are-skills",
            "kopya": "ders-skills-01-what-are-skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Eğik çizgi komutlarını açıkça yazman gerekir, skill'leri ise gerekmez; Claude durumu tanıyınca onları uygular."
          }
        },
        {
          "id": "b05-d1-s6",
          "tur": "coktan",
          "kart": 1,
          "soru": "Claude'a aynı kontrol listesini üçüncü kez yapıştırıyorsun. Ne yaparsın?",
          "secenekler": [
            "Listeyi her seferinde yine yapıştırırım",
            "Listeyi bir skill olarak kaydederim",
            "Bir dış hizmet bağlantısı kurarım",
            "Listeyi bir kancaya çeviririm"
          ],
          "dogru": 1,
          "ipucu": "Kartta, Claude'a aynı şeyi tekrar tekrar anlatmanın neye işaret ettiği söyleniyordu.",
          "aciklama": "Aynı yöntemi üçüncü kez yapıştırmak, onu skill'e çevirme işaretidir. Liste bir kez yazılır, Claude gerektiğinde açar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Aynı yöntemi ya da çok adımlı işi sohbete üçüncü kez yapıştırıyorsan, onu bir skill olarak kaydet."
          }
        },
        {
          "id": "b05-d1-s7",
          "tur": "coktan",
          "kart": 3,
          "soru": "CLAUDE.md'deki skill satırına göre sistem metni değişirken önce hangi skill okunur?",
          "secenekler": [
            "kayit-yazma",
            "ajan-gorevi",
            "kanca-denetim",
            "sistem-metni"
          ],
          "dogru": 3,
          "ipucu": "Kartta CLAUDE.md'den verilen örneği hatırla.",
          "aciklama": "Bu satır her işe bir skill eşler: sistem metni değişirken sistem-metni, ajana iş verirken ajan-gorevi, kayıt satırı yazılırken kayit-yazma okunur.",
          "kaynak": {
            "adres": "CLAUDE.md:10",
            "okuma": "2026-11-17",
            "dayanak": "Olay anında önce okunan skill satırı, sistem metni değişirken sistem-metni, ajana iş verirken ajan-gorevi, kayıt satırı yazılırken kayit-yazma skill'ini sayar.",
            "soz": "sistem metni değişirken `sistem-metni`; ajana iş verirken `ajan-gorevi`; kayıt satırı yazılırken `kayit-yazma`"
          }
        }
      ]
    },
    {
      "id": "b05-d2",
      "baslik": "SKILL.md'nin iskeleti",
      "hedefler": [
        "Bir proje skill'inin dosya yolunu anlatabilir.",
        "Ön bilgideki (frontmatter) ad (name) ve açıklama (description) alanlarını okuyup anlatabilir.",
        "Claude'un bir skill'i açıklamasına bakarak açtığını anlatabilir."
      ],
      "anlatim": [
        "Proje skill'i kendi klasöründe, bir SKILL.md dosyasında durur: `.claude/skills/<ad>/SKILL.md`.",
        "Dosyanın en üstünde iki `---` çizgisi arasına ön bilgi yazılır. İkinci çizginin altına talimatlar gelir.",
        "`name` skill'in adıdır ve `/` menüsünde görünür. Yazılmazsa klasörün adı kullanılır.",
        "`description` skill'in ne yaptığını ve ne zaman kullanılacağını söyler.",
        "Bizde örnek: kayit-yazma skill'inin ilk dört satırı ön bilgidir. İçinde `name: kayit-yazma` satırı ve onun altında açıklama satırı var.",
        "Oturum başında Claude yalnız adları ve açıklamaları yükler. İsteğini bu açıklamalarla karşılaştırır ve uyan skill'in tamamını okur.",
        "Skill'i adıyla da açabilirsin: masaüstünde istem kutusuna `/` yaz ya da + düğmesinden \"Slash commands\" seç. Listede proje skill'lerin de görünür."
      ],
      "terimler": [
        {"tr": "ön bilgi", "en": "frontmatter", "aciklama": "SKILL.md'nin en üstünde iki --- çizgisi arasındaki alanlar; skill'in adı ve açıklaması burada yazılır."},
        {"tr": "açıklama alanı", "en": "description", "aciklama": "Skill'in ne yaptığını ve ne zaman kullanılacağını söyleyen alan; Claude skill'i buna bakarak seçer."}
      ],
      "sorular": [
        {
          "id": "b05-d2-s1",
          "tur": "sirala",
          "kart": 1,
          "soru": "Yeni bir proje skill'i kurmanın adımlarını sırala.",
          "adimlar": [
            ".claude/skills altında skill'in adıyla bir klasör aç",
            "Klasörün içine SKILL.md dosyasını koy",
            "En üste iki --- arasına ön bilgiyi yaz",
            "İkinci --- çizgisinin altına talimatları yaz"
          ],
          "ipucu": "Önce yer, sonra dosya, sonra dosyanın içi yukarıdan aşağı.",
          "aciklama": "Skill bir klasör ve içindeki SKILL.md dosyasıdır. Dosyada önce ön bilgi, onun altında talimatlar gelir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-agent-skills/creating-your-first-skill",
            "kopya": "ders-skills-02-creating-first-skill.md",
            "okuma": "2026-11-15",
            "dayanak": "Önce skills klasöründe skill için bir klasör açılır, sonra içine SKILL.md konur; ön bilgi çizgiler arasında durur, ikinci çizgilerin altındaki her şey Claude'un uyacağı talimattır."
          }
        },
        {
          "id": "b05-d2-s2",
          "tur": "coktan",
          "kart": 5,
          "soru": "Claude bir skill'i kendiliğinden ne zaman açar?",
          "secenekler": [
            "Her oturum başında, bütün skill'leri sırayla",
            "İsteğin skill açıklamasına uyduğunda",
            "Skill dosyası her değiştiğinde",
            "Yalnız sen skill'in adını yazdığında"
          ],
          "dogru": 1,
          "ipucu": "Oturum başında Claude skill'in hangi parçasını biliyordu?",
          "aciklama": "Claude isteğini bütün skill açıklamalarıyla karşılaştırır ve uyanı açar. Bu yüzden açıklama en önemli alandır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-agent-skills/creating-your-first-skill",
            "kopya": "ders-skills-02-creating-first-skill.md",
            "okuma": "2026-11-15",
            "dayanak": "İstek gönderdiğinde Claude mesajını mevcut bütün skill'lerin açıklamalarıyla karşılaştırır ve eşleşme bulunca SKILL.md dosyasının tamamını okur."
          }
        },
        {
          "id": "b05-d2-s3",
          "tur": "dogru-yanlis",
          "kart": 5,
          "soru": "Claude Code oturum başında bütün SKILL.md dosyalarını baştan sona okur.",
          "dogru": false,
          "ipucu": "Oturum başında bağlama skill'in ne kadarı giriyordu?",
          "aciklama": "Yanlış: başlangıçta yalnız ad ve açıklama yüklenir. Dosyanın tamamı skill açılınca okunur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Normal bir oturumda skill açıklamaları bağlama yüklenir, skill'in tam içeriği ise yalnız açılınca yüklenir."
          }
        },
        {
          "id": "b05-d2-s4",
          "tur": "coktan",
          "kart": 4,
          "soru": "kayit-yazma'nın açıklaması kısaca: \"KARARLAR maddesi yazılırken açılır; rapor yazılırken kullanılmaz.\" Bu satır ne işe yarar?",
          "secenekler": [
            "Skill'i yalnız senin açabilmeni sağlar",
            "Skill'in / menüsündeki adını belirler",
            "Skill'in hangi işte açılacağını söyler"
          ],
          "dogru": 2,
          "ipucu": "Satırdaki \"açılır\" ve \"kullanılmaz\" sözcükleri neyi anlatıyor?",
          "aciklama": "Açıklama skill'in ne zaman açılıp ne zaman kullanılmadığını söyler; Claude seçimi buna göre yapar. Adı ise name alanı belirler.",
          "kaynak": {
            "adres": ".claude/skills/kayit-yazma/SKILL.md:3",
            "okuma": "2026-11-17",
            "dayanak": "Açıklama, skill'in KARARLAR maddesi, Düzeltme satırı ve DURUM satırı yazılırken açıldığını, devir kartı, kuyruk satırı ve rapor yazılırken kullanılmadığını söyler.",
            "soz": "KARARLAR maddesi, Düzeltme satırı ya da hata sayacı artışı"
          }
        },
        {
          "id": "b05-d2-s5",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Proje skill'inin dosya yolu: .claude/skills/<ad>/___",
          "secenekler": [
            "README.md",
            "SKILL.md",
            "CLAUDE.md",
            "settings.json"
          ],
          "dogru": 1,
          "ipucu": "Kartta verilen yolun sonunda hangi dosya duruyordu?",
          "aciklama": "Her proje skill'i kendi adını taşıyan klasörde, SKILL.md dosyasında durur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Proje skill'leri .claude/skills/<skill-adı>/SKILL.md yolunda durur ve o depodaki oturumlarda yüklenir."
          }
        },
        {
          "id": "b05-d2-s6",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bir SKILL.md'nin ön bilgisinde `name` alanı yoksa skill `/` menüsünde hangi adla görünür?",
          "secenekler": [
            "Skill'in durduğu klasörün adıyla",
            "Açıklamasının ilk sözcüğüyle",
            "SKILL adıyla",
            "Menüde hiç görünmez"
          ],
          "dogru": 0,
          "ipucu": "Skill dosyası hangi klasörün içinde duruyordu?",
          "aciklama": "name yazılmazsa klasörün adı kullanılır. Bu yüzden klasöre skill'in adını verirsin.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "name alanı / menüsünde görünen komut adıdır ve yazılmazsa klasörün adı kullanılır."
          }
        },
        {
          "id": "b05-d2-s7",
          "tur": "coktan",
          "kart": 3,
          "soru": "Hangi açıklama skill'in doğru anda açılmasına daha çok yardım eder?",
          "secenekler": [
            "Kayıt işleri için.",
            "KARARLAR maddesi yazılırken açılır; devir kartında kullanılmaz.",
            "Bu skill çok önemlidir; Claude her zaman dikkatle uymalıdır."
          ],
          "dogru": 1,
          "ipucu": "İyi açıklama iki soruyu yanıtlar: skill ne yapar, ne zaman kullanılır?",
          "aciklama": "Hangi işte açılıp hangisinde kullanılmadığını söyleyen açıklama, Claude'un isteği eşlemesine yardım eder. Yalnız konuyu ya da önemini söyleyen açıklama skill'in ne zaman açılacağını söylemez.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-agent-skills/configuration-and-multi-file-skills",
            "kopya": "ders-skills-03-configuration-multi-file.md",
            "okuma": "2026-11-15",
            "dayanak": "İyi bir açıklama iki soruyu yanıtlar: skill ne yapar ve Claude onu ne zaman kullanmalı?"
          }
        },
        {
          "id": "b05-d2-s8",
          "tur": "coktan",
          "kart": 6,
          "soru": "Masaüstünde bir skill'i adıyla açmanın yolu hangisi?",
          "secenekler": [
            "Skill'in klasörünü çift tıklayıp açmak",
            "Oturumu kapatıp yeniden açmak",
            "İstem kutusuna / yazmak ya da + düğmesinden seçmek"
          ],
          "dogru": 2,
          "ipucu": "Kartta skill'i adıyla açmanın iki yolu sayılıyordu.",
          "aciklama": "İstem kutusuna / yazmak ya da + düğmesinde Slash commands'i seçmek listeyi açar. Proje skill'lerin de bu listededir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir skill'i doğrudan açmak için istem kutusuna / yazarsın ya da + düğmesine basıp Slash commands'i seçersin; listede proje skill'leri de vardır."
          }
        }
      ]
    },
    {
      "id": "b05-d3",
      "baslik": "Öteki ön bilgi alanları",
      "hedefler": [
        "disable-model-invocation, allowed-tools ve context: fork alanlarını işleriyle ayırt edebilir.",
        "Bir ön bilgi alanının skill'e etkisini bir cümleyle anlatabilir.",
        "Ajan dosyasındaki skills alanının skill'i ajana baştan yüklediğini anlatabilir."
      ],
      "anlatim": [
        "Ön bilgide başka alanlar da var. `disable-model-invocation: true` yazarsan Claude skill'i kendi başına açamaz, yalnız sen adını yazınca açılır.",
        "`disable-model-invocation` yayına alma, mesaj gönderme gibi yan etkisi olan işler içindir. Böyle bir skill'in açıklaması da bağlama girmez.",
        "`allowed-tools`, skill'in açıldığı turda listelenen araçlara önceden onay (pre-approve) verir: Claude onları sormadan kullanır. Onay sen yeni mesaj gönderince biter.",
        "`allowed-tools` öteki araçları yasaklamaz: listesinde olmayan araç her zamanki izinle sorulur.",
        "`context: fork` skill'i ayrı bir alt ajanda (subagent) koşturur. O ajan senin konuşma geçmişini görmez.",
        "Bu yüzden fork, açık bir görev veren skill'de anlamlıdır. Yalnız kılavuz alan ajan anlamlı bir sonuç döndürmez.",
        "Bizim ajan dosyalarında yakın bir alan var: `.claude/agents/scout.md` içinde `skills:` altında `- ajan-kimligi` yazar. Bu, o skill'in tamamını ajan açılırken beklemeden yükler."
      ],
      "terimler": [
        {"tr": "önceden onay", "en": "pre-approve", "aciklama": "Bir aracın kullanımda izin sorulmadan çalışmasına önceden izin vermek; allowed-tools bunu skill'in açıldığı tur için yapar."},
        {"tr": "alt ajan", "en": "subagent", "aciklama": "Kendi ayrı bağlamında çalışıp sonucu ana konuşmaya döndüren yardımcı Claude."}
      ],
      "sorular": [
        {
          "id": "b05-d3-s1",
          "tur": "eslestir",
          "kart": 4,
          "soru": "Ön bilgi alanını etkisiyle eşleştir.",
          "ciftler": [
            ["disable-model-invocation: true", "Claude skill'i kendi başına açamaz"],
            ["allowed-tools", "Listelenen araçlar o turda sormadan kullanılır"],
            ["context: fork", "Skill ayrı bir alt ajanda koşar"]
          ],
          "ipucu": "Her alanı tanıtan kartı ayrı ayrı hatırla.",
          "aciklama": "Her alan tek bir şeyi değiştirir: kimin açacağını, hangi aracın sorulmayacağını ya da skill'in nerede koşacağını.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "disable-model-invocation: true Claude'un skill'i kendiliğinden yüklemesini engeller, allowed-tools listelenen araçların o turda izin sorulmadan kullanılmasını sağlar, context: fork skill'i ayrı bir alt ajan bağlamında koşturur."
          }
        },
        {
          "id": "b05-d3-s2",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bir skill uygulamayı yayına alıyor. Claude'un bunu \"kod hazır görünüyor\" diye kendi başına başlatmasını istemiyorsun. Hangi alanı eklersin?",
          "secenekler": [
            "allowed-tools: Bash(git commit *)",
            "context: fork",
            "disable-model-invocation: true",
            "model: sonnet"
          ],
          "dogru": 2,
          "ipucu": "Asıl soru şu: skill'i kim başlatabilsin?",
          "aciklama": "Bu alanla Claude skill'i kendi başına açamaz, yalnız sen adını yazınca çalışır. Yan etkisi olan işler için önerilen yol budur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "disable-model-invocation: true ile Claude skill'i kendi başına açamaz; bu, yan etkisi olan ya da zamanlamasını senin belirlemek istediğin işler içindir, çünkü kod hazır göründü diye Claude'un yayına almaya karar vermesini istemezsin."
          }
        },
        {
          "id": "b05-d3-s3",
          "tur": "coktan",
          "kart": 3,
          "soru": "allowed-tools listesinde olmayan bir aracı Claude kullanmak isterse ne olur?",
          "secenekler": [
            "Araç yasaktır, hiç kullanılamaz",
            "Her zamanki izinle sorulur",
            "Sormadan kullanılır"
          ],
          "dogru": 1,
          "ipucu": "Alan araç ekleyip çıkarıyor mu, yoksa yalnız izin sorusunu mu atlatıyor?",
          "aciklama": "Alan yalnız listelenen araçlara önceden onay verir; öteki araçlar yine kullanılabilir ve her zamanki izinle sorulur. Araç kaldırmak için ayrı bir alan, disallowed-tools vardır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "allowed-tools hangi araçların kullanılabileceğini kısıtlamaz: her araç çağrılabilir kalır ve listede olmayan araçları izin ayarların yönetir."
          }
        },
        {
          "id": "b05-d3-s4",
          "tur": "coktan",
          "kart": 2,
          "soru": "allowed-tools ile verilen önceden onay ne zaman biter?",
          "secenekler": [
            "Oturum kapanınca",
            "Sonraki mesajını gönderince",
            "Skill dosyası silinince",
            "Bilgisayar yeniden başlayınca"
          ],
          "dogru": 1,
          "ipucu": "Onay, skill'in açıldığı tura bağlıdır.",
          "aciklama": "Onay yalnız skill'in açıldığı tur için geçerlidir. Skill yeniden açılırsa onay o tur için yeniden verilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Onay, sen bir sonraki mesajını gönderince sona erer; skill'i yeniden açmak onu o tur için yeniden uygular."
          }
        },
        {
          "id": "b05-d3-s5",
          "tur": "coktan",
          "kart": 6,
          "soru": "scout.md'de `skills:` altında `ajan-kimligi` yazıyor. Bu ne sağlar?",
          "secenekler": [
            "ajan-kimligi skill'i ajan açılırken baştan yüklenir",
            "Ajan ajan-kimligi skill'ini hiç kullanamaz",
            "ajan-kimligi yalnız sen adını yazınca açılır",
            "Ajan ajan-kimligi dosyasını düzenleyebilir"
          ],
          "dogru": 0,
          "ipucu": "Kartta ajan dosyasındaki skills alanının skill'i ne zaman yüklediği anlatılıyordu.",
          "aciklama": "Ajan dosyasındaki skills listesi, skill'in tamamını ajan açılırken bağlamına koyar. Ana oturum bu skill'i çağırmaz.",
          "kaynak": {
            "adres": ".claude/skills/ajan-kimligi/SKILL.md:3",
            "okuma": "2026-11-17",
            "dayanak": "Ajan kimliği skill'i, ajan dosyalarının skills alanıyla ajana baştan yüklenir ve ana oturum onu çağırmaz.",
            "soz": "Ajan dosyalarının skills alanıyla ajana baştan yüklenir"
          }
        },
        {
          "id": "b05-d3-s6",
          "tur": "bosluk",
          "kart": 4,
          "soru": "context: fork yazılan skill ayrı bir alt ajanda koşar; o ajan senin ___ görmez, bu yüzden talimatlar kendi başına anlaşılır olmalı.",
          "secenekler": [
            "skill talimatlarını",
            "konuşma geçmişini",
            "skill'deki görevini"
          ],
          "dogru": 1,
          "ipucu": "Ayrı bir bağlamda başlayan ajan, sizin önceki yazışmanızdan ne bilir?",
          "aciklama": "Alt ajan skill içeriğini istem olarak alır ama konuşma geçmişini görmez. Talimat tek başına yeterli değilse ajan anlamlı bir sonuç döndüremez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Alt ajan konuşma geçmişini görmez, bu yüzden skill'in talimatları kendi başına anlaşılır olmalıdır."
          }
        },
        {
          "id": "b05-d3-s7",
          "tur": "coktan",
          "kart": 5,
          "soru": "Hangi skill'e context: fork eklemek anlamlıdır?",
          "secenekler": [
            "Açık adımlarla bir araştırma görevi veren skill",
            "Yalnız \"şu yazım kurallarını kullan\" diyen kılavuz skill'i",
            "Boş gövdeli, yalnız açıklaması olan skill"
          ],
          "dogru": 0,
          "ipucu": "Ayrı ajan yalnız skill'in içeriğini alır; eline yapacak bir iş geçmeli.",
          "aciklama": "context: fork yalnız açık talimatlı skill'de anlamlıdır. Görevsiz bir kılavuzu alan ajan anlamlı bir sonuç döndürmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "context: fork yalnız açık talimat taşıyan skill'lerde anlamlıdır; görevsiz kılavuz alan alt ajan anlamlı bir çıktı döndürmez."
          }
        },
        {
          "id": "b05-d3-s8",
          "tur": "dogru-yanlis",
          "kart": 1,
          "soru": "disable-model-invocation: true olan bir skill'in açıklaması, sen açana kadar bağlama girmez.",
          "dogru": true,
          "ipucu": "Claude bu skill'i kendi açamıyorsa, açıklamasını bilmesine gerek var mı?",
          "aciklama": "Doğru: Claude kendi açamadığı için açıklama bağlama konmaz; skill'in tamamı sen açınca yüklenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "disable-model-invocation: true olan skill'de açıklama bağlamda yer almaz, tam skill açıldığında yüklenir."
          }
        }
      ]
    },
    {
      "id": "b05-d4",
      "baslik": "Skill'in bağlam maliyeti",
      "hedefler": [
        "Skill açıklamasının her oturumda, gövdesinin yalnız açılınca yüklendiğini anlatabilir.",
        "Sıkıştırmada (compaction) uzun skill gövdesinin kırpılabildiğini ve önemli talimatın neden üste yazıldığını anlatabilir.",
        "Bizim klasördeki skill boyut tavanını okuyup anlatabilir."
      ],
      "anlatim": [
        "Bağlam penceresi (context window), Claude'un o oturumda bildiği her şeyi tutar. Sen bir şey yazmadan önce CLAUDE.md ile skill'lerin adı ve açıklaması buraya yüklenir.",
        "Skill'in gövdesi ise yalnız skill açılınca girer ve oturum boyunca orada kalır. Yani her satırı sonraki isteklerde de yer kaplar.",
        "Bağlam dolunca konuşma özetlenir; buna sıkıştırma denir. Açılmış skill gövdeleri sonra yeniden eklenir, ama skill başına en çok 5.000, toplamda 25.000 token kadar.",
        "En eski açılan skill önce düşer, büyük skill kırpılır. Kırpma dosyanın başını korur; bu yüzden en önemli talimatı SKILL.md'nin üstüne yaz.",
        "Sıkıştırmadan sonra skill'in yalnız başı kalabilir. Skill'i yeniden açmak tam içeriğini geri getirir.",
        "Gövdeyi kısa tut: resmi belge SKILL.md'yi 500 satırın altında tutmayı, ayrıntılı başvuru bilgisini ayrı dosyaya koymayı önerir.",
        "Bizde tavan bayt olarak konmuş: `denetim.py` dosyasındaki SKILL_TAVAN 10.000 bayttır. `sistem-metni` skill'i de skill'in 10.000 bayt altında kalmasını ister."
      ],
      "terimler": [
        {"tr": "bağlam penceresi", "en": "context window", "aciklama": "Claude'un bir oturumda bildiği her şeyin tutulduğu alan: talimatlar, okunan dosyalar, konuşma."},
        {"tr": "sıkıştırma", "en": "compaction", "aciklama": "Bağlam dolunca konuşmanın özetlenip yer açılması."},
        {"tr": "token", "en": "token", "aciklama": "Claude'un metni ölçtüğü küçük parça; bağlamın boyu ve skill'in yeri token ile ölçülür."}
      ],
      "sorular": [
        {
          "id": "b05-d4-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Sen hiçbir şey yazmadan, oturum başında bir skill'in nesi bağlama yüklenir?",
          "secenekler": [
            "Gövdesinin tamamı",
            "Gövdesinin ilk 5.000 token'ı",
            "Adı ve açıklaması",
            "Yardımcı dosyaları"
          ],
          "dogru": 2,
          "ipucu": "Claude'un hangi skill'in ne zaman işe yarayacağını bilmesi için neye ihtiyacı var?",
          "aciklama": "Başlangıçta yalnız adlar ve açıklamalar yüklenir, bu yüzden maliyet düşüktür. Gövde skill açılınca gelir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Skill açıklamaları oturum başında, tam içerik ise kullanıldığında yüklenir ve skill'in bağlam maliyeti kullanılana kadar düşüktür."
          }
        },
        {
          "id": "b05-d4-s2",
          "tur": "dogru-yanlis",
          "kart": 1,
          "soru": "Bir skill açıldıktan sonra gövdesi bağlamda kalır; her satırı sonraki isteklerde de yer kaplar.",
          "dogru": true,
          "ipucu": "Claude skill dosyasını her turda yeniden mi okuyor, yoksa bir kez mi ekliyor?",
          "aciklama": "Doğru: açılan skill konuşmaya bir kez eklenir ve orada kalır. Bu yüzden gövdeyi kısa tutmak her istekte yer kazandırır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Skill açıldıktan sonra içeriği turlar boyunca bağlamda kalır, bu yüzden her satırı tekrar eden bir token maliyetidir."
          }
        },
        {
          "id": "b05-d4-s3",
          "tur": "coktan",
          "kart": 4,
          "soru": "Sıkıştırmadan sonra Claude bir skill'in sonundaki adımları uygulamıyor. İlk ne yaparsın?",
          "secenekler": [
            "Skill'i yeniden açıp tam içeriğini geri getiririm",
            "Skill'in açıklamasını uzatırım",
            "Skill'in tamamını CLAUDE.md'ye kopyalarım",
            "Yeni bir klasör açarım"
          ],
          "dogru": 0,
          "ipucu": "Sıkıştırmadan sonra skill'in yalnız başı kalmış olabilir; tamamını nasıl geri getirirsin?",
          "aciklama": "Skill'i yeniden açmak tam içeriğini geri getirir. Sıkıştırmadan sonra yalnız skill'in başı tutulmuş olabilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Konuşma sıkıştırıldıysa tam içeriği geri getirmek için skill'i yeniden aç; sıkıştırmadan sonra açılmış skill'in yalnız başı tutulabilir."
          }
        },
        {
          "id": "b05-d4-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "Bir skill'in en önemli kuralı dosyanın sonunda. Claude'a hangi tarifi verirsin?",
          "secenekler": [
            "Kuralı sona büyük harfle bir kez daha yaz.",
            "Kuralı SKILL.md'nin en üstüne taşı.",
            "Kuralı açıklama satırından çıkar."
          ],
          "dogru": 1,
          "ipucu": "Kırpma olursa dosyanın hangi kısmı kalıyordu?",
          "aciklama": "Sıkıştırmada büyük skill kırpılır ve dosyanın başı kalır. Önemli kural üstte olursa kırpmadan sağ çıkar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Kırpma dosyanın başını korur, bu yüzden en önemli talimatları SKILL.md'nin üst kısmına koy."
          }
        },
        {
          "id": "b05-d4-s5",
          "tur": "bosluk",
          "kart": 6,
          "soru": "denetim.py'ye göre bizim skill dosyalarının bayt tavanı ___ bayttır.",
          "secenekler": [
            "17.524",
            "3.000",
            "24.000",
            "10.000"
          ],
          "dogru": 3,
          "ipucu": "Kartta SKILL_TAVAN için verilen sayıyı hatırla.",
          "aciklama": "denetim.py'deki satır CLAUDE_TAVAN, SKILL_TAVAN ve KART_TAVAN değerlerini 17524, 10000 ve 3000 diye koyar. Skill için tavan 10.000 bayttır.",
          "kaynak": {
            "adres": "denetim.py:173",
            "okuma": "2026-11-17",
            "dayanak": "Satır CLAUDE.md tavanını 17.524 bayt, skill tavanını 10.000 bayt, devir kartı tavanını 3.000 karakter olarak koyar.",
            "soz": "CLAUDE_TAVAN, SKILL_TAVAN, KART_TAVAN = 17524, 10000, 3000"
          }
        },
        {
          "id": "b05-d4-s6",
          "tur": "bosluk",
          "kart": 2,
          "soru": "Sıkıştırmadan sonra açılmış skill gövdeleri yeniden eklenir, ama skill başına en çok ___ token kadar.",
          "secenekler": [
            "25.000",
            "5.000",
            "500"
          ],
          "dogru": 1,
          "ipucu": "Kartta skill başına ve toplam için iki ayrı sınır vardı.",
          "aciklama": "Skill başına 5.000, toplamda 25.000 token sınırı var ve en eski açılan skill önce düşer. Büyük skill'in yalnız başı kalır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Açılmış skill gövdeleri sıkıştırmadan sonra yeniden eklenir ama skill başına 5.000, toplamda 25.000 token ile sınırlıdır ve önce en eskiler düşer."
          }
        },
        {
          "id": "b05-d4-s7",
          "tur": "coktan",
          "kart": 5,
          "soru": "Skill'e 2.000 satırlık bir API belgesi eklemek istiyorsun. Hangi tarif doğru?",
          "secenekler": [
            "Belgenin tamamını SKILL.md'ye yapıştır.",
            "Belgeyi ayrı dosyaya koy, SKILL.md'den bağlantı ver.",
            "Belgeyi CLAUDE.md'ye ekle, her oturumda yüklensin."
          ],
          "dogru": 1,
          "ipucu": "Büyük başvuru bilgisi her skill açılışında bağlama girmek zorunda mı?",
          "aciklama": "SKILL.md kısa kalır, ayrıntılı belge yalnız gerektiğinde okunur. Resmi belge SKILL.md'yi 500 satırın altında tutmayı önerir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Yardımcı dosyalar SKILL.md'yi özde tutar ve ayrıntılı başvuru belgesi yalnız gerektiğinde yüklenir; SKILL.md'yi 500 satırın altında tut, ayrıntıyı ayrı dosyalara taşı."
          }
        }
      ]
    },
    {
      "id": "b05-d5",
      "baslik": "Skill mi, CLAUDE.md mi, kanca mı",
      "hedefler": [
        "Verilen bir duruma göre CLAUDE.md, skill ve kanca (hook) arasından doğru özelliği ayırt edebilir.",
        "Yalnız bir işte gereken bilginin skill'e, her oturum gerekenin CLAUDE.md'ye gittiğini anlatabilir.",
        "Her seferinde olması gereken kuralın neden kancaya verildiğini anlatabilir."
      ],
      "anlatim": [
        "CLAUDE.md her oturumda yüklenir, her zaman geçerli kural içindir. Skill isteğe göre yüklenir, yalnız bazı işlerde gereken bilgi ve iş akışı içindir.",
        "Kanca bir olay olunca Claude karar vermeden koşar. Skill'deki talimatı ise Claude yorumlar, sonuç değişebilir.",
        "Tetikler (trigger): Claude kuralı iki kez yanlış uygularsa CLAUDE.md, yöntemi üçüncü kez yapıştırıyorsan skill. İş sormadan her seferinde olmalıysa kanca, Claude'un göremediği veri gerekirse MCP.",
        "CLAUDE.md'deki ya da skill'deki \"şunu asla yapma\" bir ricadır, garanti değil. Garanti kancadır.",
        "Bizde sistem-metni skill'inin kontrol listesi sorar: \"Her oturum mu gerekli, tek işte mi?\" Tek işteyse bilgi o işin skill'ine gider, CLAUDE.md'de tek satır adres kalır.",
        "Bizim sistem-metni skill'ine göre kanca gibi mekanizma yalnız CLAUDE.md'nin saydığı kurallara yazılır: geri alınamaz zarar, güvenlik sınırı, para, dışa gönderim, sana ulaşıp tekrar eden hata."
      ],
      "terimler": [
        {"tr": "kanca", "en": "hook", "aciklama": "Belirli bir olay olunca Claude karar vermeden koşan otomatik iş."},
        {"tr": "tetik", "en": "trigger", "aciklama": "Bir özelliği eklemenin zamanının geldiğini gösteren durum; örneğin aynı yöntemi üçüncü kez yapıştırmak."}
      ],
      "sorular": [
        {
          "id": "b05-d5-s1",
          "tur": "eslestir",
          "kart": 2,
          "soru": "Durumu, eklenecek özellikle eşleştir.",
          "ciftler": [
            ["Claude kuralı iki kez yanlış uyguluyor", "CLAUDE.md'ye ekle"],
            ["Aynı yöntemi üçüncü kez yapıştırıyorsun", "Skill olarak kaydet"],
            ["Bir iş sormadan her seferinde olmalı", "Kanca yaz"],
            ["Claude'un göremediği sekmeden veri kopyalıyorsun", "Dış hizmeti MCP ile bağla"]
          ],
          "ipucu": "Her durumda kimin hatırlaması gerektiğine bak: Claude mı, otomatik bir iş mi, dış bir bağlantı mı?",
          "aciklama": "Resmi belgedeki tetik tablosu her özelliği tanınır bir durumla eşler. Özellikler bu durumlar ortaya çıktıkça eklenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude bir kuralı iki kez yanlış yaparsa CLAUDE.md'ye, aynı yöntemi üçüncü kez yapıştırıyorsan skill'e, Claude'un göremediği sistemden veri kopyalıyorsan MCP sunucusuna, bir şeyin sormadan her seferinde olmasını istiyorsan kancaya başvurulur."
          }
        },
        {
          "id": "b05-d5-s2",
          "tur": "coktan",
          "kart": 4,
          "soru": "\"Kayıttan önce Düzeltme sayımı yap\" bilgisi yalnız kayıt yazarken gerekiyor. Bizde nereye yazılır?",
          "secenekler": [
            "kayit-yazma skill'ine; CLAUDE.md'de yalnız adres kalır",
            "CLAUDE.md'nin gövdesine, uzun haliyle",
            "Bir kancaya",
            "Her ajan dosyasına"
          ],
          "dogru": 0,
          "ipucu": "sistem-metni'nin kontrol listesi bu tür bilgi için ne soruyordu: her oturum mu gerekli, tek işte mi?",
          "aciklama": "Tek işte gereken bilgi o işin skill'ine gider, CLAUDE.md'de yalnız adres kalır. Bizde Düzeltme sayımı gerçekten kayit-yazma'nın 3. adımıdır.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md:20",
            "okuma": "2026-11-17",
            "dayanak": "Kontrol listesi her değişiklikte sorar: her oturum mu gerekli, tek işte mi; tek işteyse o işin skill'ine gider, CLAUDE.md'de tek satır adres kalır.",
            "soz": "Her oturum mu gerekli, tek işte mi? Tek işteyse o işin skill'ine; CLAUDE.md'de tek satır adres."
          }
        },
        {
          "id": "b05-d5-s3",
          "tur": "coktan",
          "kart": 3,
          "soru": "CLAUDE.md'ye ya da bir skill'e yazılan \"asla .env dosyasını düzenleme\" talimatı nedir?",
          "secenekler": [
            "Bir garanti: her seferinde uygulanır",
            "Bir rica: Claude atlayabilir",
            "Bir yasak: düzenleme aracı kapanır"
          ],
          "dogru": 1,
          "ipucu": "Kartta metindeki talimatla kancanın farkını hatırla.",
          "aciklama": "Metindeki talimat bir ricadır, garanti değildir. Düzenlemeyi durduran bir kanca ise kuralı zorunlu kılar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "CLAUDE.md'de ya da skill'de yazan \"asla .env'i düzenleme\" gibi bir talimat garanti değil ricadır; düzenlemeyi durduran bir PreToolUse kancası ise zorunlu kılar."
          }
        },
        {
          "id": "b05-d5-s4",
          "tur": "coktan",
          "kart": 1,
          "soru": "Kanca ile skill arasındaki fark hangisi?",
          "secenekler": [
            "Kanca her istekte yer kaplar, skill hiç kaplamaz",
            "Kanca Claude karar vermeden koşar; skill'i Claude yorumlar",
            "Kanca yalnız sen adını yazınca çalışır"
          ],
          "dogru": 1,
          "ipucu": "Hangisinde sonuç her seferinde aynı, hangisinde Claude'un yorumuna bağlı?",
          "aciklama": "Kanca olayında kendiliğinden koşar, sonucu Claude'a bağlı değildir. Skill'deki talimatı Claude yorumlar, sonuç değişebilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Kanca olayında Claude karar vermeden koşar; skill'deki talimatları ise Claude yorumlar ve sonuç değişebilir."
          }
        },
        {
          "id": "b05-d5-s5",
          "tur": "coktan",
          "kart": 2,
          "soru": "Her dosya düzenlemesinden sonra biçim denetiminin sormadan koşmasını istiyorsun. Hangisini kurarsın?",
          "secenekler": [
            "Bir skill",
            "CLAUDE.md'ye bir satır",
            "Bir alt ajan",
            "Bir kanca"
          ],
          "dogru": 3,
          "ipucu": "Claude'un hatırlamasına mı, yoksa olaya bağlı otomatik bir işe mi ihtiyacın var?",
          "aciklama": "Her eşleşen olayda koşması gereken otomatik iş kancanın işidir. Resmi belgedeki örnek de budur: her dosya düzenlemesinden sonra denetim aracını koşturmak.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Kanca, her eşleşen olayda koşması gereken otomasyon içindir; örneğin her dosya düzenlemesinden sonra ESLint'i koşturmak."
          }
        },
        {
          "id": "b05-d5-s6",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Skill'ler isteğe göre yüklenir; CLAUDE.md ise ___ yüklenir.",
          "secenekler": [
            "yalnız sen istediğinde",
            "her konuşmada",
            "haftada bir kez"
          ],
          "dogru": 1,
          "ipucu": "Her zaman geçerli kurallar nerede duruyordu?",
          "aciklama": "CLAUDE.md her konuşmaya girer, bu yüzden her zaman geçerli kurallar içindir. Skill ise yalnız eşleşen işte yüklenir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-agent-skills/skills-vs-other-claude-code-features",
            "kopya": "ders-skills-04-skills-vs-other-features.md",
            "okuma": "2026-11-15",
            "dayanak": "CLAUDE.md her konuşmaya yüklenir ve her zaman geçerli proje kuralları için en iyisidir; skill'ler isteğe göre yüklenir ve işe özgü uzmanlık için en iyisidir."
          }
        },
        {
          "id": "b05-d5-s7",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude skill'deki bir kuralı ara sıra atlıyor ama kural hep geçerli olmalı. Ne yaparsın?",
          "secenekler": [
            "Kuralı büyük harfle ve ÖNEMLİ diye yaz.",
            "Kuralı açıklamaya ekle.",
            "Kuralı Claude'dan bağımsız koşan kancaya taşı."
          ],
          "dogru": 2,
          "ipucu": "Claude'un uymasına bağlı kalmayan bir yol var mı?",
          "aciklama": "Her seferinde geçerli olması gereken kural kancaya taşınır, çünkü kanca Claude skill'e uysa da uymasa da olayında koşar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude her seferinde geçerli olması gereken bir kuralı atladıysa kuralı bir kancaya taşı; kanca, Claude skill'e uysa da uymasa da olayı her olduğunda koşar."
          }
        },
        {
          "id": "b05-d5-s8",
          "tur": "dogru-yanlis",
          "kart": 5,
          "soru": "Bizim sistem-metni skill'ine göre her kurala bir kanca ya da denetim kontrolü yazılır.",
          "dogru": false,
          "ipucu": "Kartta bizim skill'in mekanizmayı hangi kurallara ayırdığını hatırla.",
          "aciklama": "Yanlış: mekanizma yalnız CLAUDE.md'deki koşullarda yazılır; öteki kural açıkça \"yalnız metin\" olarak kalır.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md:31",
            "okuma": "2026-11-17",
            "dayanak": "Satır, kanca, betik, test ya da denetim kontrolü gibi mekanizmanın yalnız CLAUDE.md bölüm 5'teki koşullarda yazıldığını, öteki kuralın açıkça yalnız metin olduğunu söyler.",
            "soz": "yalnız CLAUDE.md bölüm 5'teki koşullarda yazılır"
          }
        }
      ]
    },
    {
      "id": "b05-d6",
      "baslik": "Bizim bir skill'i okumak",
      "hedefler": [
        "`kanca-denetim` skill'inin ne zaman açıldığını ve ne zaman kullanılmadığını anlatabilir.",
        "`kanca-denetim` skill'inin adımlarını sırasıyla anlatabilir.",
        "Skill'deki bir adımı değiştirmeyi Claude'a nasıl tarif edeceğini anlatabilir."
      ],
      "anlatim": [
        "Bizim bir skill'i okuyalım: `.claude/skills/kanca-denetim/SKILL.md`. Açıklaması, yeni kanca ya da `denetim.py` kontrolü eklenirken, değişirken ya da silinirken açıldığını söyler.",
        "Aynı açıklama ne zaman kullanılmadığını da yazar: kuralın metni ve mekanizma seçimi `sistem-metni`'nin işidir; ikinci beyin paketinin kancaları da dışarıdadır.",
        "Altı adım: önce benzerini ara; kodu ve testini yan yana yaz; kancayı ayarlara kaydet; KARARLAR gibi gerçek kayıt dosyalarında dene; belgeleri güncelle; testleri koş.",
        "kanca-denetim'in bitiş şartı, işin bitmiş sayılması için bütün testlerin geçmesini, `denetim.py`'nin sorun bulmamasını ve işi ayrıca kontrol eden doğrulayıcının Geçti demesini ister.",
        "Bir adımı değiştirmek istersen Claude'a dosyayı ve adımı adıyla söyle. Neyin değişeceğini ve bitince neye bakılacağını baştan yaz.",
        "Skill beklediğin istekte açılmıyorsa sorun çoğu zaman açıklamadadır. İşi isterken kullandığın tetikleyici ifadeyi (trigger phrase) açıklamaya ekletirsin.",
        "`sistem-metni`'ne göre davranışı değişen skill commit'ten önce tetik sınamasından geçer: üç cümle; biri açılmalı, biri açılmamalı, biri sınırda.",
        "Skill listede hiç görünmüyorsa önce yapıya bak: SKILL.md kendi klasöründe durmalı, adı harfi harfine SKILL.md olmalı."
      ],
      "terimler": [
        {"tr": "tetikleyici ifade", "en": "trigger phrase", "aciklama": "Bir işi isterken kullandığın ve skill'in açıklamasına eklenince skill'in açılmasını kolaylaştıran sözcükler."}
      ],
      "sorular": [
        {
          "id": "b05-d6-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "`kanca-denetim`'in açıklamasına göre bu skill hangi işte açılır?",
          "secenekler": [
            "Kuralın metni ve mekanizma seçimi yapılırken",
            "Yeni kanca ya da kontrol eklenirken",
            "İkinci beyin paketinin kancaları değişirken",
            "KARARLAR maddesi yazılırken"
          ],
          "dogru": 1,
          "ipucu": "Kartta açıklamanın ne zaman açıldığını söyleyen kısmını hatırla.",
          "aciklama": "Skill kanca ya da denetim kontrolü eklenirken, değişirken ya da silinirken açılır. Kuralın metni sistem-metni'nin işidir, paketin kancaları ise bu skill'in dışındadır.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md:3",
            "okuma": "2026-11-17",
            "dayanak": "Açıklama, skill'in bu klasöre yeni kanca ya da denetim.py kontrolü eklenirken, var olan biri değişirken ya da silinirken açıldığını, kural metni, mekanizma seçimi, ikinci beyin paketinin kancaları ve kanca dışı betik işinde kullanılmadığını söyler.",
            "soz": "Bu klasöre yeni kanca ya da denetim.py kontrolü eklenirken"
          }
        },
        {
          "id": "b05-d6-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "`kanca-denetim`'e göre hangi kuralın kanca olacağına karar vermek hangi skill'in işidir?",
          "secenekler": [
            "kanca-denetim'in kendisinin",
            "sistem-metni'nin",
            "kayit-yazma'nın"
          ],
          "dogru": 1,
          "ipucu": "Kartta açıklamanın ne zaman kullanılmadığını söyleyen kısmını hatırla.",
          "aciklama": "Hangi kuralın kanca ya da kontrol olacağı sistem-metni'nin işidir. kanca-denetim'de yalnız mekanik adımlar var.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md:10",
            "okuma": "2026-11-17",
            "dayanak": "Hangi kuralın kanca ya da kontrol olacağı sistem-metni skill'inin \"Kural yazınca mekanizmasıyla\" bölümündedir; bu skill'de yalnız mekanik adımlar vardır.",
            "soz": "Hangi kuralın kanca ya da kontrol olacağı"
          }
        },
        {
          "id": "b05-d6-s3",
          "tur": "sirala",
          "kart": 2,
          "soru": "Şu beş adımı `kanca-denetim`'deki sırasına koy.",
          "adimlar": [
            "Aynı işi yapan kanca ya da kontrol var mı, ara",
            "Kodu ve testini yan yana yaz",
            "Kancayı .claude/settings.json'a kaydet",
            "Gerçek kayıtta bir kez koş, uyarı sayısını rapora yaz",
            "Testleri ve denetim.py'yi koş"
          ],
          "ipucu": "Önce ara, sonra yaz, en sonda sına.",
          "aciklama": "Skill önce tekrar olmasın diye aramayı, sonra kod ve testi, kaydı ve gerçek koşuyu ister; en sonda testler ve denetim koşulur. Aradaki 5. adım bağlı belgeleri günceller.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md:16",
            "okuma": "2026-11-17",
            "dayanak": "Adımlar bölümü sırasıyla aramayı, kod ve testi yan yana yazmayı, settings.json kaydını, gerçek kayıtta koşuyu, bağlı belgeleri ve en sonda sınamayı sayar.",
            "soz": "Önce ara: aynı işi yapan kanca ya da kontrol var mı"
          }
        },
        {
          "id": "b05-d6-s4",
          "tur": "coktan",
          "kart": 4,
          "soru": "`kanca-denetim`'in ilk adımına \"README.md'ye de bak\" eklensin. Hangi tarif daha iyi?",
          "secenekler": [
            "Adımları düzelt, README bir yerde olsun.",
            "README.md'yi bütün skill'lere ekle.",
            "kanca-denetim'in ilk adımına ekle; bitince denetim.py temiz olsun."
          ],
          "dogru": 2,
          "ipucu": "Hangi tarif dosyayı adıyla anıyor ve bitmiş halin neye benzeyeceğini söylüyor?",
          "aciklama": "Skill'i ve adımı adıyla anan, bitince neye bakılacağını söyleyen tarif Claude'a işi açıkça verir. Öteki tarifler hangi dosyanın hangi adımının değişeceğini ya da bitmiş hali söylemez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Dosyanın adını verir, belirtiyi tarif eder ve düzelmiş halin neye benzeyeceğini baştan söylersen genellikle bir düzeltme turundan kurtulursun."
          }
        },
        {
          "id": "b05-d6-s5",
          "tur": "coktan",
          "kart": 5,
          "soru": "\"Denetime yeni kontrol ekle\" dediğinde kanca-denetim açılmıyor. Hangi tarif doğru?",
          "secenekler": [
            "kanca-denetim'in açıklamasına bu ifadeyi ekle.",
            "kanca-denetim'in adımlarını kısalt, gövde daha kolay okunsun.",
            "kanca-denetim'i sil, aynısını yeniden yaz."
          ],
          "dogru": 0,
          "ipucu": "Claude skill'i seçerken dosyanın hangi parçasına bakıyordu?",
          "aciklama": "Skill açılmıyorsa neden neredeyse her zaman açıklamadır. İşi nasıl istediğini karşılayan ifadeler eklenince eşleşme kolaylaşır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-agent-skills/troubleshooting-skills",
            "kopya": "ders-skills-06-troubleshooting.md",
            "okuma": "2026-11-15",
            "dayanak": "Skill açılmıyorsa neden neredeyse her zaman açıklamadır; istekleri gerçekte nasıl dile getirdiğini karşılayan tetikleyici ifadeler ekle."
          }
        },
        {
          "id": "b05-d6-s6",
          "tur": "bosluk",
          "kart": 6,
          "soru": "sistem-metni'ne göre değişen bir skill'in tetik sınaması üç cümleyle yapılır: biri açılmalı, biri açılmamalı, biri de ___.",
          "secenekler": [
            "sınırda",
            "çok uzun",
            "İngilizce"
          ],
          "dogru": 0,
          "ipucu": "Açılmalı ile açılmamalı arasında kalan, karar vermesi zor bir istek düşün.",
          "aciklama": "Üç cümle skill'in doğru yerde açıldığını, yanlış yerde açılmadığını ve kararsız kalınan durumu sınar. Değişen skill commit'ten önce böyle denenir.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md:39",
            "okuma": "2026-11-17",
            "dayanak": "Yeni ya da davranışı değişen iş skill'i commit'ten önce gerçekçi istemlerle denenir ve tetik sınaması üç cümleyle yapılır: açılmalı, açılmamalı, sınırda.",
            "soz": "tetik sınaması üç cümleyle (açılmalı, açılmamalı, sınırda)"
          }
        },
        {
          "id": "b05-d6-s7",
          "tur": "dogru-yanlis",
          "kart": 3,
          "soru": "`kanca-denetim`'in bitiş şartına göre iş bitmeden doğrulayıcının da Geçti demesi gerekir.",
          "dogru": true,
          "ipucu": "Kartta bitiş şartının testlerden başka neyi istediğini hatırla.",
          "aciklama": "Doğru: bitiş şartı testlerin ve denetimin temiz olmasının yanında doğrulayıcının Geçti demesini de ister.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md:25",
            "okuma": "2026-11-17",
            "dayanak": "Bitiş şartı kodun ve testin varlığını, testler.sh'in kalan 0 vermesini, denetim.py'nin temiz olmasını ve doğrulayıcının Geçti demesini sayar.",
            "soz": "`denetim.py` temiz; doğrulayıcı Geçti"
          }
        },
        {
          "id": "b05-d6-s8",
          "tur": "coktan",
          "kart": 7,
          "soru": "\"Hangi skill'ler var\" diye sorunca skill listede görünmüyor. İlk neye bakılır?",
          "secenekler": [
            "Açıklamanın kaç sözcük olduğuna",
            "Bağlamın o an ne kadar dolu olduğuna",
            "Dosyanın kendi klasöründe, adının tam SKILL.md olmasına"
          ],
          "dogru": 2,
          "ipucu": "Skill hiç yüklenmiyorsa sorun içerikte değil, yapıdadır.",
          "aciklama": "Yüklenmeyen skill'de önce yapıya bakılır: SKILL.md skills kökünde değil, kendi klasöründe durmalı ve adı harfi harfine SKILL.md olmalı.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-agent-skills/troubleshooting-skills",
            "kopya": "ders-skills-06-troubleshooting.md",
            "okuma": "2026-11-15",
            "dayanak": "Skill yüklenmiyorsa SKILL.md'nin skills kökünde değil adlı bir klasörün içinde olduğuna ve dosya adının tam SKILL.md olduğuna bak."
          }
        }
      ]
    }
  ]
});
