// icerik/birim-01.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b01",
  "sira": 1,
  "baslik": "Claude Code nedir",
  "amac": "Claude Code'un ne olduğunu, bir işi nasıl yürüttüğünü ve temel terimlerini öğrenirsin; sonunda bizim klasördeki birkaç kural satırını okuyup ne dediğini söyleyebilirsin.",
  "dersler": [
    {
      "id": "b01-d1",
      "baslik": "Claude Code ve sohbetteki Claude",
      "hedefler": [
        "Claude Code'un dosya okuyan, düzenleyen ve komut koşan bir ajan olduğunu anlatabilir.",
        "Claude Code ile sohbetteki Claude arasındaki farkı bir cümleyle anlatabilir."
      ],
      "anlatim": [
        "Claude Code ajan tabanlı bir kodlama aracıdır (agentic coding tool). Kod tabanını okur, dosyaları düzenler, komut koşar, gerekince webde belge arar.",
        "Terminalde, VS Code'da, JetBrains'te, webde ve masaüstü uygulamasında çalışır. Bu yerlerin her birine yüzey (surface) denir.",
        "Sohbette kodu sen kopyalayıp yapıştırırsın. Claude Code ise dosyalarına ve terminaline doğrudan erişir, işi kendisi yapar.",
        "CLAUDE.md, Claude'a kalıcı talimat yazdığın dosyadır. Bizim CLAUDE.md'ye göre bu klasöre yalnız Claude Code yazar: masaüstü uygulamasının Code sekmesinde, senin bilgisayarında açılan yerel oturum.",
        "Bir hedef için ortamıyla etkileşip eylem yapan, döngü içinde çalışan yazılıma yapay zeka ajanı (AI agent) denir. Claude Code böyle bir ajandır.",
        "Claude Code kod yazmayan işlerde de yardım eder: örneğin belge yazmada ya da dosya aramada."
      ],
      "terimler": [
        {"tr": "ajan tabanlı kodlama aracı", "en": "agentic coding tool", "aciklama": "Kod tabanını okuyan, dosya düzenleyen ve komut koşan yapay zeka aracı."},
        {"tr": "yapay zeka ajanı", "en": "AI agent", "aciklama": "Bir hedefe ulaşmak için ortamıyla etkileşip eylem yapan yazılım."},
        {"tr": "yüzey", "en": "surface", "aciklama": "Claude Code'a eriştiğin yer: terminal, VS Code, JetBrains, masaüstü uygulaması ya da claude.ai."}
      ],
      "sorular": [
        {
          "id": "b01-d1-s1",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude Code'u sohbetteki Claude'dan ayıran temel fark hangisi?",
          "secenekler": [
            "Daha uzun ve ayrıntılı cevaplar yazması",
            "Dosyalarına doğrudan erişip işi kendisi yapması",
            "Kodu senin kopyalayıp yapıştırman için hazırlaması"
          ],
          "dogru": 1,
          "ipucu": "Kopyala yapıştır işini kimin yaptığını düşün.",
          "aciklama": "Sohbette kodu sen taşırsın; Claude Code ise dosyalara ve terminale doğrudan erişip işi kendisi yapar.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/what-is-claude-code",
            "kopya": "ders-101-01-what-is-claude-code.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude.ai'den farklı olarak Claude Code'un dosyalarına, terminaline ve bütün kod tabanına doğrudan erişimi vardır ve kodu kopyalayıp yapıştırmak yerine işi kendisi yapar."
          }
        },
        {
          "id": "b01-d1-s2",
          "tur": "dogru-yanlis",
          "kart": 1,
          "soru": "Claude Code yalnız terminalde çalışır; masaüstü uygulamasında kullanılamaz.",
          "dogru": false,
          "ipucu": "Claude Code'un açılabildiği yerleri say.",
          "aciklama": "Yanlış: Claude Code terminalin yanında IDE'de, masaüstü uygulamasında ve tarayıcıda da kullanılabilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/overview",
            "kopya": "overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code terminalde, IDE'de, masaüstü uygulamasında ve tarayıcıda kullanılabilir."
          }
        },
        {
          "id": "b01-d1-s3",
          "tur": "eslestir",
          "kart": 0,
          "soru": "Claude Code'un yapabildiği işi örneğiyle eşleştir.",
          "ciftler": [
            ["Kod tabanını okumak", "Bir özelliği açıklamak, bir hatanın izini sürmek"],
            ["Dosya düzenlemek", "Bir işlevi kullanan her dosyayı güncellemek"],
            ["Terminal komutu koşmak", "Testleri çalıştırıp çıktıya göre sonraki adımı seçmek"],
            ["Webde aramak", "Gereken belgeyi bulmak"]
          ],
          "ipucu": "Her örnekte Claude'un neye dokunduğuna bak: dosyaya mı, terminale mi, webe mi?",
          "aciklama": "Okumak anlamak içindir, düzenlemek dosyayı değiştirir, komut koşmak test ve kurulum yapar, web araması belge bulur.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/what-is-claude-code",
            "kopya": "ders-101-01-what-is-claude-code.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code kod tabanını okuyup bir özelliği açıklayabilir, projedeki dosyaları düzenleyebilir, terminal komutu koşup çıktıya göre sonraki adıma karar verebilir ve gerektiğinde webde belge arayabilir."
          }
        },
        {
          "id": "b01-d1-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "CLAUDE.md'de 'Bu klasöre yalnız Claude Code (masaüstü Code sekmesi, yerel oturum) yazar' satırı var. Buna göre bu klasördeki bir dosyayı kim değiştirir?",
          "secenekler": [
            "Masaüstü Code sekmesindeki yerel oturum",
            "Claude.ai'deki sohbet penceresi",
            "Telefondaki Claude uygulamasıyla açılan sohbet"
          ],
          "dogru": 0,
          "ipucu": "Kartta talimat dosyasının bu klasöre kimin yazdığı için ne dediğini hatırla.",
          "aciklama": "Kural, yazma işini tek yere bağlar: masaüstündeki Code sekmesinde açılan yerel oturum.",
          "kaynak": {
            "adres": "CLAUDE.md:5",
            "okuma": "2026-11-15",
            "dayanak": "Bu klasöre yalnız Claude Code, yani masaüstü Code sekmesindeki yerel oturum yazar.",
            "soz": "Bu klasöre yalnız Claude Code (masaüstü Code sekmesi, yerel oturum) yazar"
          }
        },
        {
          "id": "b01-d1-s5",
          "tur": "coktan",
          "kart": 2,
          "soru": "Sohbette Claude'a bir kod parçası yazdırdın, dosyaya kendin yapıştırman gerekiyor. Aynı işi Claude Code'a verirsen ne değişir?",
          "secenekler": [
            "Kodu yine yazar, yapıştırmak sana kalır",
            "Yalnız kodu açıklar, dosyaya dokunmaz",
            "Dosyayı kendisi açıp değişikliği kendisi yapar"
          ],
          "dogru": 2,
          "ipucu": "Ajan tabanlı kodlamanın sohbetten farkını hatırla.",
          "aciklama": "Sohbet asistanı senin uygulaman gereken metni verir; Claude Code araçlarıyla değişikliği kendisi yapar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/glossary",
            "kopya": "glossary.md",
            "okuma": "2026-11-15",
            "dayanak": "Ajan tabanlı kodlamada yapay zeka dosya okur, komut koşar ve değişikliği kendisi yapar; sohbet tabanlı asistan ise yalnız senin uygulaman gereken metinle cevap verir."
          }
        },
        {
          "id": "b01-d1-s6",
          "tur": "bosluk",
          "kart": 4,
          "soru": "Bir hedefe ulaşmak için ortamıyla etkileşen ve eylem yapan yazılıma ___ denir.",
          "secenekler": [
            "arama motoru",
            "yapay zeka ajanı",
            "metin düzenleyici"
          ],
          "dogru": 1,
          "ipucu": "Claude Code'un neden sohbetten farklı çalıştığını anlatan sözcüğü düşün.",
          "aciklama": "Kurs, bu yazılımı ortamıyla etkileşip hedef için eylem yapan ve döngü içinde çalışan bir yapı diye tanımlar.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/what-is-claude-code",
            "kopya": "ders-101-01-what-is-claude-code.md",
            "okuma": "2026-11-15",
            "dayanak": "Yapay zeka ajanı, ortamıyla etkileşebilen ve belirlenmiş bir hedefi tamamlamak için eylem yapabilen yazılımdır."
          }
        },
        {
          "id": "b01-d1-s7",
          "tur": "coktan",
          "kart": 5,
          "soru": "Belge yazmak ya da dosyada sözcük aramak gibi kod yazmayan bir işi Claude Code'a verebilir misin?",
          "secenekler": [
            "Hayır, yalnız kod yazar",
            "Evet, bunlarda da yardım eder",
            "Yalnız sohbetteki Claude yapar"
          ],
          "dogru": 1,
          "ipucu": "Claude Code'un dosya okuyup komut koşabildiğini hatırla.",
          "aciklama": "Claude Code kodlamada güçlüdür ama komut satırından yapılabilen her işte, belge yazma ve dosya arama dahil, yardım eder.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/how-claude-code-works",
            "kopya": "how-claude-code-works.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code kodlamada güçlüdür ama komut satırından yapabileceğin her işte yardım edebilir: belge yazmak, derleme koşmak, dosya aramak, konu araştırmak gibi."
          }
        }
      ]
    },
    {
      "id": "b01-d2",
      "baslik": "Ajan döngüsü (agentic loop)",
      "hedefler": [
        "Ajan döngüsünün üç evresini sırasıyla anlatabilir.",
        "Bir istemdeki adımın hangi evreye ait olduğunu ayırt edebilir.",
        "Döngü sürerken araya girip yön verebileceğini anlatabilir."
      ],
      "anlatim": [
        "Claude'a bir istem (prompt) yazıp iş verdiğinde üç evreden geçer: işi anlamak için bağlam toplar, eylem yapar, sonucu doğrular.",
        "Sonuç istemi karşılıyorsa iş biter. Karşılamıyorsa Claude başa döner ve yeniden dener.",
        "Evreler iç içe geçer: Claude kodu anlamak için dosya arar, değişiklik için dosyayı düzenler, işini sınamak için test koşar.",
        "Döngü işe göre uzar ya da kısalır: kod hakkında bir soru yalnız bağlam toplamayla bitebilir. Bir hata düzeltmesi ise üç evreyi defalarca döner.",
        "Sen de döngünün içindesin: masaüstünde durdurma düğmesiyle Claude'u hemen durdurabilirsin. Ya da düzeltmeni yazıp Enter'a basarak onu durdurmadan yön verebilirsin.",
        "Bizim CLAUDE.md'de şu satır var: 'Sınanmamış değişiklik bitmiş sayılmaz'. Satır döngünün bir evresini kurala bağlar."
      ],
      "terimler": [
        {"tr": "ajan döngüsü", "en": "agentic loop", "aciklama": "Claude'un her işte geçtiği çevrim: bağlam topla, eylem yap, sonucu doğrula, iş bitene kadar tekrarla."},
        {"tr": "istem", "en": "prompt", "aciklama": "Claude Code'a yazıp gönderdiğin mesaj; döngü onunla başlar."}
      ],
      "sorular": [
        {
          "id": "b01-d2-s1",
          "tur": "sirala",
          "kart": 1,
          "soru": "Ajan döngüsünün adımlarını sıraya koy.",
          "adimlar": [
            "Sen Claude Code'a bir istem yazarsın",
            "Claude iş için gereken bağlamı toplar",
            "Bir eylem yapar, örneğin dosya düzenler ya da komut koşar",
            "Sonucun istemi karşılayıp karşılamadığını doğrular",
            "Karşılıyorsa bitirip bekler, karşılamıyorsa başa dönüp yeniden dener"
          ],
          "ipucu": "İş senden başlar ve kontrolle biter.",
          "aciklama": "Döngü istemle başlar, bağlam ve eylemle sürer, doğrulamayla ya biter ya yeniden döner.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/how-claude-code-works",
            "kopya": "ders-101-02-how-claude-code-works.md",
            "okuma": "2026-11-15",
            "dayanak": "Sen istemi girersin, Claude gereken bağlamı toplar, eylem yapar, sonucun istemi karşılayıp karşılamadığını doğrular ve karşılamıyorsa başa dönüp yeniden dener."
          }
        },
        {
          "id": "b01-d2-s2",
          "tur": "coktan",
          "kart": 0,
          "soru": "Ajan döngüsünün üç evresi hangisi?",
          "secenekler": [
            "Dosya okuma, dosya yazma, kaydetme",
            "Bağlam toplama, eylem, doğrulama",
            "Plan yazma, onay alma, yayınlama",
            "Soru sorma, cevap verme, özetleme"
          ],
          "dogru": 1,
          "ipucu": "Önce anlamak, sonra yapmak, en son kontrol etmek.",
          "aciklama": "Claude bir işte bağlam toplar, eylem yapar ve sonucu doğrular; bu evreler iç içe geçer.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/how-claude-code-works",
            "kopya": "how-claude-code-works.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude'a bir iş verdiğinde üç evreden geçer: bağlam toplama, eylem yapma ve sonuçları doğrulama."
          }
        },
        {
          "id": "b01-d2-s3",
          "tur": "eslestir",
          "kart": 2,
          "soru": "'Bozuk testleri düzelt' dedin. Claude'un yaptığı adımı ait olduğu evreyle eşleştir.",
          "ciftler": [
            ["Kodu anlamak için ilgili dosyaları aramak", "Bağlam toplama"],
            ["Hatayı gidermek için dosyayı düzenlemek", "Eylem"],
            ["Düzeltmeden sonra testleri yeniden koşmak", "Sonucu doğrulama"]
          ],
          "ipucu": "Her adımda Claude öğreniyor mu, değiştiriyor mu, kontrol mü ediyor?",
          "aciklama": "Aramak bağlam toplar, düzenlemek eylemdir, testi yeniden koşmak işi doğrular.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/how-claude-code-works",
            "kopya": "how-claude-code-works.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude döngü boyunca araç kullanır: kodu anlamak için dosya arar, değişiklik için düzenler, işini kontrol etmek için test koşar."
          }
        },
        {
          "id": "b01-d2-s4",
          "tur": "dogru-yanlis",
          "kart": 3,
          "soru": "Kod hakkında basit bir soru da her zaman üç evrenin hepsinden geçer.",
          "dogru": false,
          "ipucu": "Bir soruyu cevaplamak için Claude'un bir şey değiştirmesi gerekir mi?",
          "aciklama": "Yanlış: döngü işe uyar; kod hakkında bir soru yalnız bağlam toplamayla bitebilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/how-claude-code-works",
            "kopya": "how-claude-code-works.md",
            "okuma": "2026-11-15",
            "dayanak": "Döngü istediğine uyar: kod tabanı hakkında bir soru yalnız bağlam toplamayı gerektirebilir, bir hata düzeltmesi ise üç evreyi defalarca döner."
          }
        },
        {
          "id": "b01-d2-s5",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude çalışırken yanlış dosyaya yöneldiğini gördün. Masaüstünde ne yapabilirsin?",
          "secenekler": [
            "Bitirmesini beklersin, çalışırken araya girilemez",
            "Oturumu kapatıp her şeye baştan başlarsın",
            "Durdurursun ya da düzeltmeni yazıp gönderirsin"
          ],
          "dogru": 2,
          "ipucu": "Sen de döngünün içindesin; Claude çalışırken ona nasıl karışabileceğini hatırla.",
          "aciklama": "Durdurma düğmesi Claude'u hemen keser; yazıp gönderdiğin düzeltme ise çalışan işi kesmeden sonraki adıma yön verir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude'u istediğin an yönlendirebilirsin: durdurma düğmesine basıp hemen kesersin ya da düzeltmeni yazıp Enter'a basarak çalışan eylemi durdurmadan gönderirsin."
          }
        },
        {
          "id": "b01-d2-s6",
          "tur": "coktan",
          "kart": 5,
          "soru": "CLAUDE.md'deki 'Sınanmamış değişiklik bitmiş sayılmaz' kuralı döngünün hangi evresinin atlanmamasını ister?",
          "secenekler": [
            "Doğrulama",
            "Bağlam toplama",
            "Eylem yapma"
          ],
          "dogru": 0,
          "ipucu": "Test, iş yapıldıktan sonra neye bakar?",
          "aciklama": "Test, yapılan değişikliğin işe yarayıp yaramadığını kontrol eder; bu, döngünün doğrulama evresidir.",
          "kaynak": {
            "adres": "CLAUDE.md:52",
            "okuma": "2026-11-15",
            "dayanak": "Değiştirdiğin şeyi basit bir testle sına ve sonucunu yaz; sınanmamış değişiklik bitmiş sayılmaz.",
            "soz": "Sınanmamış değişiklik bitmiş sayılmaz"
          }
        }
      ]
    },
    {
      "id": "b01-d3",
      "baslik": "Araçlar (tools)",
      "hedefler": [
        "Read, Edit, Write, Bash, WebFetch, Agent ve Skill araçlarını yaptıkları işle birlikte anlatabilir.",
        "Hangi aracın senden izin istediğini, hangisinin istemediğini tablodan ayırt edebilir.",
        "Bizim ayar dosyasındaki bir satırda geçen araç adlarının ne iş yaptığını anlatabilir."
      ],
      "anlatim": [
        "Araç (tool), Claude'un yapabildiği bir eylemdir. Read dosya okur, Grep dosya içeriğinde arar, Glob adı belli bir biçime uyan dosyaları bulur.",
        "Edit dosyada hedefli değişiklik yapar. Bash kabuk komutu (shell command) koşar, WebFetch verilen adresten içerik çeker.",
        "Write dosya yaratır ya da üzerine yazar. Agent ayrı bir işi yapan yardımcı bir alt ajan başlatır; Skill hazır bir tarifi, yani bir skill'i, çalıştırır.",
        "Manual (elle onay) modunda değişiklikler sana onaylatılır. Resmi belgedeki araç tablosunun izin gerekir (Permission required) sütununa göre Edit, Write, Bash, WebFetch sorar; Read, Agent sormaz.",
        "İki istisna var: Read çalışma klasörü dışındaki bir yol için sorar. Bash ise yalnız okuyan bazı yerleşik komutları sormadan koşar."
      ],
      "terimler": [
        {"tr": "araç", "en": "tool", "aciklama": "Claude'un yapabildiği bir eylem: dosya okumak, kod düzenlemek, komut koşmak, webde aramak, alt ajan başlatmak."},
        {"tr": "kabuk komutu", "en": "shell command", "aciklama": "Terminale yazılan komut; Claude bunu Bash aracıyla koşar."},
        {"tr": "izin gerekir", "en": "Permission required", "aciklama": "Araç tablosunda, aracın elle onay modunda çalışma klasörü içinde sana sorup sormadığını gösteren sütun."}
      ],
      "sorular": [
        {
          "id": "b01-d3-s1",
          "tur": "eslestir",
          "kart": 1,
          "soru": "Aracı yaptığı işle eşleştir.",
          "ciftler": [
            ["Read", "Dosyanın içeriğini okur"],
            ["Edit", "Dosyada hedefli değişiklik yapar"],
            ["Bash", "Kabuk komutu koşar"],
            ["WebFetch", "Verilen adresten içerik çeker"]
          ],
          "ipucu": "Araçların İngilizce adları işlerini ele verir.",
          "aciklama": "Read okur, Edit hedefli düzenler, Bash terminalde komut koşar, WebFetch bir web adresinden içerik getirir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/tools-reference",
            "kopya": "tools-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "Araç tablosuna göre Read dosya içeriğini okur, Edit belirli dosyalarda hedefli düzenleme yapar, Bash ortamında kabuk komutu koşar, WebFetch belirtilen adresten içerik çeker."
          }
        },
        {
          "id": "b01-d3-s2",
          "tur": "eslestir",
          "kart": 2,
          "soru": "Bu üç aracı da işiyle eşleştir.",
          "ciftler": [
            ["Write", "Dosya yaratır ya da üzerine yazar"],
            ["Agent", "Kendi bağlam penceresi olan bir alt ajan başlatır"],
            ["Skill", "Bir skill'i ana sohbetin içinde çalıştırır"]
          ],
          "ipucu": "Hangisi yeni bir yardımcı açar, hangisi hazır bir tarifi çalıştırır?",
          "aciklama": "Write dosyayı baştan yazar, Agent ayrı bağlamlı bir alt ajan açar, Skill bir skill'i ana sohbette yürütür.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/tools-reference",
            "kopya": "tools-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "Araç tablosuna göre Write dosya yaratır ya da üzerine yazar, Agent kendi bağlam penceresi olan bir alt ajan başlatır, Skill bir skill'i ana sohbetin içinde çalıştırır."
          }
        },
        {
          "id": "b01-d3-s3",
          "tur": "coktan",
          "kart": 3,
          "soru": "Araç tablosuna göre hangisi, elle onay modunda çalışma klasörü içinde senden izin istemeden çalışır?",
          "secenekler": [
            "Edit",
            "Bash",
            "Read",
            "Write"
          ],
          "dogru": 2,
          "ipucu": "Bakmakla değiştirmek arasındaki farkı düşün.",
          "aciklama": "Read tabloda izin gerekmez diye işaretli; Edit, Write ve Bash ise önce sorar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/tools-reference",
            "kopya": "tools-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "İzin sütunu aracın elle onay modunda çalışma klasörü içindeki yollar için sorup sormadığını gösterir ve Read bu sütunda 'Hayır' diye işaretlidir."
          }
        },
        {
          "id": "b01-d3-s4",
          "tur": "dogru-yanlis",
          "kart": 4,
          "soru": "Bash tabloda 'izin gerekir' diye işaretlidir, ama yalnız okuyan bazı komutları sormadan koşar.",
          "dogru": true,
          "ipucu": "Kartta izin sütunu için anlatılan istisnaları hatırla.",
          "aciklama": "Doğru: Bash izin isteyen araçtır, ama yerleşik bir salt okuyan komut listesini sormadan çalıştırır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/tools-reference",
            "kopya": "tools-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "Bash izin gerekir diye işaretlidir ama yerleşik bir salt okuma komutları kümesini sormadan koşar."
          }
        },
        {
          "id": "b01-d3-s5",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bizim .claude/settings.json'da bir satır Read, Grep ve Glob'u birlikte anar. Üçünün ortak işi ne?",
          "secenekler": [
            "Kabuk komutu koşmak",
            "Dosya okumak ve aramak",
            "Web sayfası çekmek",
            "Dosyaya yazmak ya da dosya yaratmak"
          ],
          "dogru": 1,
          "ipucu": "Bu araçlar dosyayı değiştiriyor mu, yoksa ona bakıyor mu?",
          "aciklama": "Read dosya okur, Grep dosya içeriğinde arar, Glob kalıba göre dosya bulur; üçü de bakar, değiştirmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/tools-reference",
            "kopya": "tools-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "Araç tablosuna göre Glob kalıba göre dosya bulur, Grep dosya içeriğinde kalıp arar, Read dosya içeriğini okur."
          }
        },
        {
          "id": "b01-d3-s6",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude'a bir web adresi verip o sayfadaki belgeyi okumasını istedin. Hangi araç kullanılır ve elle onay modunda izin ister mi?",
          "secenekler": [
            "WebFetch; önce izin ister",
            "WebFetch; izin istemez",
            "Read; izin istemez",
            "Edit; izin ister"
          ],
          "dogru": 0,
          "ipucu": "Adresten içerik getiren aracı ve kartta hangi araçların sana sorduğunu hatırla.",
          "aciklama": "WebFetch verilen adresten içerik çeker ve tabloda izin gerekir diye işaretlidir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/tools-reference",
            "kopya": "tools-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "WebFetch belirtilen adresten içerik çeker ve tabloda izin gerekir sütunu 'Evet' der."
          }
        },
        {
          "id": "b01-d3-s7",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bizim .claude/settings.json'da bir koruma Edit, Write, MultiEdit ve NotebookEdit adlarına bağlı. Bu koruma Claude ne yaparken devreye girer?",
          "secenekler": [
            "Dosya okurken",
            "Kabuk komutu koşarken",
            "Webden içerik çekerken",
            "Dosyaya yazarken"
          ],
          "dogru": 3,
          "ipucu": "Edit ve Write adlarını kartta öğrendiğin işleriyle düşün.",
          "aciklama": "Edit dosyada değişiklik yapar, Write dosya yaratır ya da üzerine yazar; bu adlara bağlı koruma bu yüzden Claude dosyaya yazarken devreye girer.",
          "kaynak": {
            "adres": ".claude/settings.json:125",
            "okuma": "2026-11-17",
            "dayanak": "Satırdaki eşleşme, bloğun korumasını Edit, Write, MultiEdit ve NotebookEdit araç adlarına bağlar.",
            "soz": "Edit|Write|MultiEdit|NotebookEdit"
          }
        }
      ]
    },
    {
      "id": "b01-d4",
      "baslik": "Bağlam penceresi (context window)",
      "hedefler": [
        "Bağlam penceresini Claude'un çalışma belleği olarak anlatabilir.",
        "Oturum başında, ilk mesajdan önce bağlama neyin yüklendiğini anlatabilir.",
        "Okunan her dosyanın yer kapladığını ve bağlam dolunca ne olduğunu anlatabilir."
      ],
      "anlatim": [
        "Bağlam, Claude'un çalışma belleğidir. Alan sınırlıdır; bu yüzden onu iyi kullanmak önemlidir.",
        "Yazdığın her mesaj, okuduğu her dosya, koştuğu her komutun çıktısı bağlamda yer kaplar.",
        "Masaüstünde bağlamın doluluğunu Context kartında görürsün ya da istem kutusuna /context yazarsın.",
        "Sen yazmadan bağlama CLAUDE.md, otomatik hafıza (auto memory) ve skill'lerin, yani hazır tariflerin, açıklamaları yüklenir. Önceki oturumların konuşması gelmez; her oturum temiz bir bağlamla başlar.",
        "Bir skill'in, yani hazır tarifin, tam metni oturum başında bağlama girmez; yalnız skill kullanıldığında gelir.",
        "Bağlam dolmaya yaklaşınca Claude Code konuşmayı otomatik özetler; buna sıkıştırma (compaction) denir. Ayrıntı kaybolabilir; kalıcı kuralı bu yüzden sohbete değil CLAUDE.md'ye yazarsın.",
        "Bizim CLAUDE.md sohbetin şişmesine dikkat ister. Bağlam 500 bini geçince Claude kapanışı, yani bu sohbeti bitirip yeni sohbete geçmeyi önerir."
      ],
      "terimler": [
        {"tr": "bağlam penceresi", "en": "context window", "aciklama": "Oturumun çalışma belleği: konuşma, dosya içerikleri, komut çıktıları, CLAUDE.md ve yüklenen skill'ler burada durur."},
        {"tr": "sıkıştırma", "en": "compaction", "aciklama": "Bağlam sınıra yaklaşınca konuşmanın otomatik özetlenmesi."},
        {"tr": "otomatik hafıza", "en": "auto memory", "aciklama": "Claude'un senin düzeltme ve tercihlerinden kendisi için yazdığı notlar."}
      ],
      "sorular": [
        {
          "id": "b01-d4-s1",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Bağlam penceresi, oturumun ___ gibidir: konuşma, dosya içerikleri ve komut çıktıları burada tutulur.",
          "secenekler": [
            "kalıcı kayıt arşivi",
            "çalışma belleği",
            "yedek diski"
          ],
          "dogru": 1,
          "ipucu": "Bir şeyi o an aklında tutmakla bir yere kalıcı yazmak arasındaki farkı düşün.",
          "aciklama": "Sözlük bağlam penceresini oturumun çalışma belleği diye tanımlar; kalıcı talimat ise CLAUDE.md gibi dosyalarda durur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/glossary",
            "kopya": "glossary.md",
            "okuma": "2026-11-15",
            "dayanak": "Bağlam penceresi oturumun çalışma belleğidir ve konuşma geçmişini, dosya içeriklerini, komut çıktılarını, CLAUDE.md'yi, otomatik hafızayı, yüklenen skill'leri ve sistem talimatlarını tutar."
          }
        },
        {
          "id": "b01-d4-s2",
          "tur": "coktan",
          "kart": 3,
          "soru": "Sen daha hiçbir şey yazmadan oturum başında bağlama ne yüklenir?",
          "secenekler": [
            "CLAUDE.md, otomatik hafıza ve skill açıklamaları",
            "Klasördeki bütün dosyaların ve alt klasörlerin tam içeriği",
            "Önceki oturumların bütün konuşma geçmişi"
          ],
          "dogru": 0,
          "ipucu": "Claude'un her oturumda bilmesi gereken kısa şeyleri düşün; tam dosyalar çok yer kaplar.",
          "aciklama": "Başta yalnız kısa ve kalıcı parçalar yüklenir; dosyalar okununca, skill'in tam metni kullanılınca gelir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Sen bir şey yazmadan önce CLAUDE.md, otomatik hafıza, MCP araç adları ve skill açıklamaları bağlama yüklenir."
          }
        },
        {
          "id": "b01-d4-s3",
          "tur": "dogru-yanlis",
          "kart": 1,
          "soru": "Claude'un okuduğu her dosya bağlam penceresinde yer kaplar.",
          "dogru": true,
          "ipucu": "Claude çalışırken bağlama neyin eklendiğini düşün.",
          "aciklama": "Doğru: istem, okunan dosya ve araç sonucu, hepsi bağlam penceresine eklenir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/context-management",
            "kopya": "ders-101-06-context-management.md",
            "okuma": "2026-11-15",
            "dayanak": "Sen istem yazdığında, Claude bir dosya okuduğunda ya da bir araç çağırıp sonucunu aldığında, bunların hepsi bağlam penceresine eklenir."
          }
        },
        {
          "id": "b01-d4-s4",
          "tur": "bosluk",
          "kart": 4,
          "soru": "Oturum başında bağlamda skill'in yalnız açıklaması durur; tam metni ___ yüklenir.",
          "secenekler": [
            "oturum açılınca",
            "ilk mesajını yazınca",
            "skill kullanıldığında"
          ],
          "dogru": 2,
          "ipucu": "Tam metnin ne zaman gerektiğini düşün.",
          "aciklama": "Oturum başında yalnız skill açıklamaları görünür; tam metin skill kullanılınca yüklenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/how-claude-code-works",
            "kopya": "how-claude-code-works.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude oturum başında skill açıklamalarını görür, ama skill'in tam içeriği yalnız skill kullanıldığında yüklenir."
          }
        },
        {
          "id": "b01-d4-s5",
          "tur": "coktan",
          "kart": 2,
          "soru": "Uzun bir oturumda bağlamın ne kadar dolduğunu masaüstünde görmek istiyorsun. Ne yaparsın?",
          "secenekler": [
            "Uygulamayı kapatıp yeniden açarsın",
            "Claude'dan bütün dosyaları yeniden okumasını istersin",
            "Context kartına bakar ya da /context yazarsın"
          ],
          "dogru": 2,
          "ipucu": "Kapatıp açmak ya da yeniden okumak bağlamı ölçmez; ölçen yeri düşün.",
          "aciklama": "Context kartı doluluğu yüzde olarak gösterir; /context ise bağlamı kategori kategori döker.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Güncel düzende oturum ayrıntıları panelindeki Context kartının başlığı bağlamın doluluğunu yüzde olarak gösterir ve iki düzende de istem kutusuna /context yazınca kategori kategori döküm çıkar."
          }
        },
        {
          "id": "b01-d4-s6",
          "tur": "coktan",
          "kart": 5,
          "soru": "Sohbetin başında Claude'a önemli bir kural söyledin; oturum uzadı ve sıkıştırma oldu. Kuralın kaybolmaması için en doğru yer neresiydi?",
          "secenekler": [
            "Sohbetteki ilk mesaj",
            "CLAUDE.md talimat dosyası",
            "Sıkıştırmanın özeti"
          ],
          "dogru": 1,
          "ipucu": "Sıkıştırmada sohbetteki ayrıntı kaybolabilir; kuralı sohbetin dışında tutan yeri düşün.",
          "aciklama": "Sıkıştırmada sohbetin başındaki ayrıntılı talimat kaybolabilir; kalıcı kural bu yüzden CLAUDE.md'ye yazılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/how-claude-code-works",
            "kopya": "how-claude-code-works.md",
            "okuma": "2026-11-15",
            "dayanak": "Özet isteklerini ve önemli kod parçalarını tutar ama konuşmanın başındaki ayrıntılı talimatlar kaybolabilir, bu yüzden kalıcı kuralları konuşma geçmişine güvenmek yerine CLAUDE.md'ye koy."
          }
        },
        {
          "id": "b01-d4-s7",
          "tur": "coktan",
          "kart": 6,
          "soru": "Bizim CLAUDE.md sohbetin şişmesine dikkat edilmesini ister. Buna göre Claude kapanışı hangi durumda önerir?",
          "secenekler": [
            "Her on mesajda bir",
            "Yalnız kullanıcı kapanış isteyince",
            "Her gün aynı saatte",
            "Bağlam 500 bini geçince"
          ],
          "dogru": 3,
          "ipucu": "Sohbet şişince bu derste anlatılan hangi alan dolar, onu düşün.",
          "aciklama": "Satır, kapanışın bağlam 500 bini geçince, sıradaki iş yeni sohbet isteyince ya da iş kalmayınca önerileceğini söyler.",
          "kaynak": {
            "adres": "CLAUDE.md:38",
            "okuma": "2026-11-15",
            "dayanak": "Claude kapanışı bağlam 500 bini geçince, sıradaki iş yeni sohbet isteyince ya da iş kalmayınca önerir.",
            "soz": "kapanışı bağlam 500 bini geçince"
          }
        }
      ]
    },
    {
      "id": "b01-d5",
      "baslik": "Claude yanılabilir: döngüde kalmak",
      "hedefler": [
        "Claude'un üç yanılma biçimini anlatabilir.",
        "İzinlerin ve geri sarma noktalarının neden var olduğunu anlatabilir.",
        "Bizim klasörde izin modu ile kapıların ilişkisini anlatabilir."
      ],
      "anlatim": [
        "Claude Code da kusursuz değildir. Niyetini yanlış anlayabilir, koda hata ekleyebilir ya da çözümü gereğinden karmaşık kurabilir.",
        "Döngüde kalmak (staying in the loop), Claude'un yaptığını izleyip gerektiğinde yön vermektir. İlk deneme tutmazsa baştan başlamazsın, üstüne düzeltme yazarak ilerlersin.",
        "Geri sarma noktası (checkpoint): Claude bir dosyayı düzenlemeden önce içeriğin anlık kopyasını alır. İstersen dosyayı geri sararsın.",
        "Veritabanı ya da yayın gibi uzak sistemlere giden işler geri sarılamaz. Onları izinlerle sen denetlersin.",
        "İzin modu (permission mode), Claude'un sana sormadan neyi yapabileceğini belirler. Masaüstündeki mod seçicide Manual, her değişikliği sana onaylatır.",
        "İzinleri atlarken dikkatli ol: Claude'a komut koşmada serbest yetki vermek, bir hatayı olmadan önce yakalamanı zorlaştırır.",
        "CLAUDE.md'de 'İzin modunu kullanıcı seçer; bu dosyadaki ve skill'lerdeki kapılar her modda geçerlidir' satırı var. Kapı, Claude'un durup plan sunduğu ya da sana sorduğu kuraldır.",
        "CLAUDE.md'deki bir satır da Claude'un bir işi yapabileceğini yalnız eminse söylemesini, değilse 'emin değilim' demesini ister."
      ],
      "terimler": [
        {"tr": "döngüde kalmak", "en": "staying in the loop", "aciklama": "Claude çalışırken ne yaptığını izleyip gerektiğinde yön vermek."},
        {"tr": "geri sarma noktası", "en": "checkpoint", "aciklama": "Claude bir dosyayı düzenlemeden önce aldığı anlık kopya; dosya değişikliğini geri sarmayı sağlar."},
        {"tr": "izin modu", "en": "permission mode", "aciklama": "Claude'un sana sormadan neyi yapabileceğini belirleyen temel ayar."}
      ],
      "sorular": [
        {
          "id": "b01-d5-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude Code hangi üç biçimde yanılabilir?",
          "secenekler": [
            "Dosyaları okuyamamak, komut koşamamak, webde arama yapamamak",
            "Niyeti yanlış anlamak, hata eklemek, fazla karmaşık kurmak",
            "Yavaş çalışmak, çok yer kaplamak, geç cevap vermek"
          ],
          "dogru": 1,
          "ipucu": "Claude'un bir işi yaparken nerede yanlışa düşebileceğini düşün.",
          "aciklama": "Kurs, Claude Code'un niyetini yanlış anlayabileceğini, hata ekleyebileceğini ya da çözümü gereğinden karmaşık kurabileceğini söyler.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/what-is-claude-code",
            "kopya": "ders-101-01-what-is-claude-code.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code kusursuz değildir: niyetini yanlış anlayabilir, hata ekleyebilir ya da çözümü gereğinden karmaşık kurabilir."
          }
        },
        {
          "id": "b01-d5-s2",
          "tur": "dogru-yanlis",
          "kart": 2,
          "soru": "Claude bir dosyayı düzenlemeden önce içeriğin anlık kopyasını alır; bu yüzden dosya düzenlemeleri geri alınabilir.",
          "dogru": true,
          "ipucu": "Geri sarma noktasının ne zaman alındığını düşün.",
          "aciklama": "Doğru: düzenlemeden önce alınan anlık kopya, işler ters giderse dosyayı önceki hâline sarmayı sağlar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/how-claude-code-works",
            "kopya": "how-claude-code-works.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude bir dosyayı düzenlemeden önce o anki içeriğin anlık kopyasını alır, bu yüzden dosya düzenlemeleri geri alınabilir."
          }
        },
        {
          "id": "b01-d5-s3",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude canlı yayına yanlış bir sürüm gönderdi. Geri sarma noktası bunu geri sarar mı?",
          "secenekler": [
            "Evet, yayın da bir dosya değişikliğidir",
            "Hayır, uzak sistemdeki işler sarılmaz",
            "Evet, her işin kopyası alınır"
          ],
          "dogru": 1,
          "ipucu": "Geri sarma noktası neyin kopyasını alır?",
          "aciklama": "Geri sarma noktaları yalnız dosya değişikliklerini kapsar; uzak sistemleri etkileyen işler izin modu ve izin kurallarıyla denetlenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/how-claude-code-works",
            "kopya": "how-claude-code-works.md",
            "okuma": "2026-11-15",
            "dayanak": "Uzak sistemleri etkileyen işler, yani veritabanları, API'ler ve yayınlar, geri sarma noktasıyla geri alınamaz; onları izin modu ve izin kurallarıyla denetlersin."
          }
        },
        {
          "id": "b01-d5-s4",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude'un her dosya değişikliğini ve komutunu önce sana sormasını istiyorsun. Masaüstündeki mod seçiciden hangisini seçersin?",
          "secenekler": [
            "Auto",
            "Accept edits",
            "Manual",
            "Plan"
          ],
          "dogru": 2,
          "ipucu": "Hangi mod işi tek tek senin onayına bırakır?",
          "aciklama": "Manual, dosya düzenlemeden ve komut koşmadan önce sorar; her değişikliği görüp kabul ya da ret edersin.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Manual modda Claude dosya düzenlemeden ya da komut koşmadan önce sorar ve her değişikliği kabul ya da ret edersin."
          }
        },
        {
          "id": "b01-d5-s5",
          "tur": "sirala",
          "kart": 1,
          "soru": "İlk deneme tam olmadığında ne olur? Konuşmanın adımlarını sıraya koy.",
          "adimlar": [
            "Kısaca istediğini yazarsın: giriş hatasını düzelt",
            "Claude araştırır ve bir çözüm dener",
            "Tam olmadığını ve sorunun nerede olduğunu yazarsın",
            "Claude yaklaşımını değiştirir"
          ],
          "ipucu": "Baştan başlamazsın; üstüne eklersin.",
          "aciklama": "Claude Code bir konuşmadır: deneme tutmazsa baştan başlamazsın, düzeltmeyle ilerlersin.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/how-claude-code-works",
            "kopya": "how-claude-code-works.md",
            "okuma": "2026-11-15",
            "dayanak": "İlk deneme doğru olmadığında baştan başlamazsın, üstüne düzeltme yazarak ilerlersin."
          }
        },
        {
          "id": "b01-d5-s6",
          "tur": "coktan",
          "kart": 6,
          "soru": "CLAUDE.md'de 'İzin modunu kullanıcı seçer; bu dosyadaki ve skill'lerdeki kapılar her modda geçerlidir' satırı var. Kullanıcı Auto modunu seçerse plan kapısı ne olur?",
          "secenekler": [
            "Yine geçerlidir; mod kapıyı kaldırmaz",
            "Kalkar; Auto modda Claude sormadan devam eder",
            "Yalnız Manual modda geçerli olur"
          ],
          "dogru": 0,
          "ipucu": "Satırın kapılar hakkında söylediğine bak.",
          "aciklama": "Satır, kapıların her izin modunda geçerli olduğunu söyler; modu değiştirmek kapıyı kaldırmaz.",
          "kaynak": {
            "adres": "CLAUDE.md:29",
            "okuma": "2026-11-15",
            "dayanak": "İzin modunu kullanıcı seçer ve bu dosyadaki ve skill'lerdeki kapılar her modda geçerlidir.",
            "soz": "İzin modunu kullanıcı seçer; bu dosyadaki ve skill'lerdeki kapılar her modda geçerlidir"
          }
        },
        {
          "id": "b01-d5-s7",
          "tur": "coktan",
          "kart": 7,
          "soru": "Bizim CLAUDE.md'ye göre Claude bir işi yapabileceğinden emin değilse ne yapar?",
          "secenekler": [
            "Yapabilirim der, dener",
            "Açıkça 'emin değilim' der",
            "Sessizce işe başlar"
          ],
          "dogru": 1,
          "ipucu": "Satır, Claude'un neyi yalnız emin olduğunda söylediğini anlatır.",
          "aciklama": "Kural, Claude'un bir işi yapabileceğini yalnız eminse söylemesini, değilse açıkça 'emin değilim' demesini ister.",
          "kaynak": {
            "adres": "CLAUDE.md:25",
            "okuma": "2026-11-15",
            "dayanak": "Bir işi yapabileceğimi yalnız eminsem söylerim, emin değilsem 'emin değilim' derim.",
            "soz": "Bir işi yapabileceğimi yalnız eminsem söylerim"
          }
        },
        {
          "id": "b01-d5-s8",
          "tur": "coktan",
          "kart": 5,
          "soru": "İzinleri atlarken neden dikkatli olmalısın?",
          "secenekler": [
            "Bir hatayı olmadan önce yakalaman zorlaşır",
            "İzinler kapalıyken Claude dosya okuyamaz",
            "İzinleri atlamak bağlam penceresini küçültür"
          ],
          "dogru": 0,
          "ipucu": "Hata olmadan önce onu kim, ne zaman görebilir?",
          "aciklama": "İzin istemi bir işi yapılmadan önce görmeni sağlar; izinleri atlarsan bir hatayı olmadan yakalamak zorlaşır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/how-claude-code-works",
            "kopya": "ders-101-02-how-claude-code-works.md",
            "okuma": "2026-11-15",
            "dayanak": "İzinleri atlarken dikkatli ol: Claude Code'a komut koşmada serbest yetki vermek, bir hatanın olmadan önce yakalanmasını zorlaştırır."
          }
        }
      ]
    },
    {
      "id": "b01-d6",
      "baslik": "Sözlük: temel terimler",
      "hedefler": [
        "Ajan döngüsü (agentic loop), sıkıştırma (compaction), CLAUDE.md, kanca (hook), alt ajan (subagent) ve MCP (Model Context Protocol) terimlerinin karşılığını anlatabilir.",
        "Her terimi bir cümleyle tanımlayıp birbirinden ayırt edebilir."
      ],
      "anlatim": [
        "CLAUDE.md, senin yazdığın ve her oturum başında yüklenen kalıcı talimat dosyasıdır. Otomatik hafıza ise Claude'un senin düzeltme ve tercihlerinden kendisi için yazdığı notlardır.",
        "Sıkıştırma (compaction): bağlam sınıra yaklaşınca konuşmanın otomatik özetlenmesi. Proje kökündeki CLAUDE.md sıkıştırmadan sonra diskten yeniden okunur.",
        "Kanca (hook): Claude Code'un belli bir anında, örneğin bir araç çalışmadan önce, kendiliğinden koşan, senin tanımladığın komut. Modelin o anki kararına bağlı değildir.",
        "Alt ajan (subagent): kendi bağlam penceresinde ayrı bir işi yapıp ana sohbete özet döndüren yardımcı.",
        "Ajan döngüsü (agentic loop): Claude'un her işte bağlam toplayıp eylem yaptığı, sonucu doğrulayıp bitene kadar tekrarladığı çevrim.",
        "MCP (Model Context Protocol): Claude'u dış veri kaynaklarına ve hizmetlere bağlayan açık standart.",
        "Bizim CLAUDE.md'de 'Sade Türkçe yaz: iç terim yerine karşılığı' satırı var. Satır örnek olarak 'doğrulayıcı onayladı' ve 'kaydedildi' sözlerini verir."
      ],
      "terimler": [
        {"tr": "ajan döngüsü", "en": "agentic loop", "aciklama": "Claude'un her işte geçtiği bağlam toplama, eylem ve doğrulama çevrimi; iş bitene kadar tekrarlanır."},
        {"tr": "sıkıştırma", "en": "compaction", "aciklama": "Bağlam sınıra yaklaşınca konuşmanın otomatik özetlenmesi; elle /compact ile de başlatılır."},
        {"tr": "CLAUDE.md", "en": "CLAUDE.md", "aciklama": "Senin Claude için yazdığın, her oturum başında yüklenen kalıcı talimat dosyası."},
        {"tr": "kanca", "en": "hook", "aciklama": "Claude Code'un belli bir anında kendiliğinden koşan, senin tanımladığın komut."},
        {"tr": "alt ajan", "en": "subagent", "aciklama": "Kendi bağlam penceresinde ayrı bir işi yapıp ana sohbete özet döndüren yardımcı."},
        {"tr": "MCP, model bağlam protokolü", "en": "Model Context Protocol", "aciklama": "Yapay zeka araçlarını dış veri kaynaklarına ve hizmetlere bağlayan açık standart."}
      ],
      "sorular": [
        {
          "id": "b01-d6-s1",
          "tur": "eslestir",
          "kart": 4,
          "soru": "Terimi tanımıyla eşleştir.",
          "ciftler": [
            ["Ajan döngüsü", "Bağlam topla, eylem yap, doğrula, bitene kadar tekrarla"],
            ["Sıkıştırma", "Bağlam dolmaya yaklaşınca konuşmanın otomatik özetlenmesi"],
            ["Kanca", "Belli bir anda kendiliğinden koşan komut"],
            ["Alt ajan", "Kendi bağlamında iş yapıp ana sohbete özet döndüren yardımcı"]
          ],
          "ipucu": "Tanımlardaki anahtar sözcüğe bak: hangisi tekrar, hangisi özet, hangisi ayrı bir yardımcı?",
          "aciklama": "Döngü işi yürütür, sıkıştırma bağlamı küçültür, kanca belli anda kendiliğinden çalışır, alt ajan işi kendi bağlamında yapar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/glossary",
            "kopya": "glossary.md",
            "okuma": "2026-11-15",
            "dayanak": "Sözlüğe göre ajan döngüsü bağlam toplama, eylem ve doğrulamanın iş bitene kadar tekrarı, sıkıştırma bağlam sınıra yaklaşınca konuşmanın otomatik özeti, kanca yaşam döngüsünün belli bir anında kendiliğinden çalışan işleyici, alt ajan ise kendi bağlamında çalışıp özet döndüren yardımcıdır."
          }
        },
        {
          "id": "b01-d6-s2",
          "tur": "coktan",
          "kart": 5,
          "soru": "MCP ne işe yarar?",
          "secenekler": [
            "Konuşmayı otomatik özetler",
            "Dosya değişikliklerini geri sarar",
            "Claude'u dış veri kaynaklarına bağlar",
            "Her oturum başında talimat dosyası yükler"
          ],
          "dogru": 2,
          "ipucu": "Adındaki protokol sözcüğü bir bağlantı biçimini anlatır.",
          "aciklama": "MCP açık bir standarttır; MCP sunucuları Claude'a Slack, veritabanı ya da tarayıcı gibi hizmetler için yeni araçlar verir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/glossary",
            "kopya": "glossary.md",
            "okuma": "2026-11-15",
            "dayanak": "MCP, yapay zeka araçlarını dış veri kaynaklarına ve hizmetlere bağlayan açık bir standarttır."
          }
        },
        {
          "id": "b01-d6-s3",
          "tur": "dogru-yanlis",
          "kart": 2,
          "soru": "Kancalar, modelin o anki kararına göre bazen çalışır, bazen çalışmaz.",
          "dogru": false,
          "ipucu": "Kancanın ne zaman çalıştığını kim belirler?",
          "aciklama": "Yanlış: kancalar yaşam döngüsünün sabit anlarında çalışır; modelin takdirine bağlı değildir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/glossary",
            "kopya": "glossary.md",
            "okuma": "2026-11-15",
            "dayanak": "Kancalar belirlenimlidir: modelin takdirine göre değil, yaşam döngüsünün sabit anlarında çalışır."
          }
        },
        {
          "id": "b01-d6-s4",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Sıkıştırmadan sonra proje kökündeki ___ diskten yeniden okunur; yalnız sohbette verilen talimat kaybolabilir.",
          "secenekler": [
            "CLAUDE.md dosyası",
            "konuşma geçmişi",
            "web araması"
          ],
          "dogru": 0,
          "ipucu": "Senin yazdığın kalıcı talimat dosyasını düşün.",
          "aciklama": "Proje kökündeki CLAUDE.md ve otomatik hafıza sıkıştırmadan sağ çıkar; yalnız sohbette verilen talimat çıkmayabilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/glossary",
            "kopya": "glossary.md",
            "okuma": "2026-11-15",
            "dayanak": "Proje kökündeki CLAUDE.md ve otomatik hafıza sıkıştırmadan sağ çıkar, ama yalnız konuşmada verilen talimatlar çıkmayabilir."
          }
        },
        {
          "id": "b01-d6-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude'a 'Bu araştırmayı bir alt ajana ver' dedin. Ana sohbetin bundan kazancı ne?",
          "secenekler": [
            "Alt ajan ana sohbetin bağlam penceresini büyütür",
            "Büyük okumalar onun bağlamında kalır, sana özet döner",
            "Alt ajan işini bitirince ana sohbeti kendiliğinden kapatır"
          ],
          "dogru": 1,
          "ipucu": "Alt ajanın bağlam penceresi kimin?",
          "aciklama": "Alt ajan kendi bağlam penceresinde çalışır ve ana sohbete yalnız özet döndürür; böylece büyük araştırmalar ana bağlamı doldurmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/glossary",
            "kopya": "glossary.md",
            "okuma": "2026-11-15",
            "dayanak": "Alt ajan kendi bağlam penceresinde çalışır, devredilen işi yapıp ana konuşmaya özet döndürür ve büyük araştırmaları ana bağlamın dışında tutmak için kullanılır."
          }
        },
        {
          "id": "b01-d6-s6",
          "tur": "coktan",
          "kart": 6,
          "soru": "Bizim CLAUDE.md 'Sade Türkçe yaz: iç terim yerine karşılığı' der. Claude sana bir işin onaylandığını hangi biçimde yazmalı?",
          "secenekler": [
            "Verifier PASS döndü",
            "D27 yeşil, commit hazır",
            "Doğrulayıcı onayladı"
          ],
          "dogru": 2,
          "ipucu": "Kartta bu satır için verilen örnekleri hatırla.",
          "aciklama": "Satır iç terim yerine sade karşılık ister ve örnek olarak 'doğrulayıcı onayladı' ile 'kaydedildi' sözlerini verir.",
          "kaynak": {
            "adres": "CLAUDE.md:82",
            "okuma": "2026-11-15",
            "dayanak": "Sade Türkçe yaz: iç terim yerine karşılığını kullan, örneğin 'doğrulayıcı onayladı' ya da 'kaydedildi'.",
            "soz": "Sade Türkçe yaz: iç terim yerine karşılığı"
          }
        },
        {
          "id": "b01-d6-s7",
          "tur": "coktan",
          "kart": 0,
          "soru": "CLAUDE.md ile otomatik hafıza arasındaki fark ne?",
          "secenekler": [
            "CLAUDE.md'yi sen, otomatik hafızayı Claude yazar",
            "İkisini de yalnız Claude yazar",
            "Otomatik hafıza her oturumda silinir, CLAUDE.md silinmez"
          ],
          "dogru": 0,
          "ipucu": "Hangisini kimin yazdığını düşün.",
          "aciklama": "Sözlüğe göre otomatik hafıza, senin yazdığın CLAUDE.md'nin Claude tarafından yazılan karşılığıdır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/glossary",
            "kopya": "glossary.md",
            "okuma": "2026-11-15",
            "dayanak": "Otomatik hafıza, Claude'un senin düzeltme ve tercihlerinden kendisi için yazdığı notlardır ve senin yazdığın CLAUDE.md'nin Claude tarafından yazılan karşılığıdır."
          }
        }
      ]
    }
  ]
});
