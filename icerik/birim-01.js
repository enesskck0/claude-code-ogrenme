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
        "Claude Code ile sohbetteki Claude arasındaki farkı bir cümleyle anlatabilir.",
        "Bu klasöre hangi oturumun yazabildiğini ayırt edebilir."
      ],
      "anlatim": [
        "Claude Code bir yapay zeka ajanıdır (AI agent): hedefe ulaşana kadar döngü içinde eylem yapar. Kodu okur, dosya düzenler, komut koşar, gerekince webde arar.",
        "Sohbette kodu sen kopyalayıp yapıştırırsın. Claude Code ise dosyalarına ve terminaline doğrudan erişir, işi kendisi yapar.",
        "Claude Code terminalde, webde ve masaüstü uygulamasında açılır; her birine yüzey (surface) denir. Bu klasöre yalnız masaüstü Code sekmesindeki yerel oturum yazar."
      ],
      "terimler": [
        {"tr": "yapay zeka ajanı", "en": "AI agent", "aciklama": "Bir hedefe ulaşmak için ortamıyla etkileşip döngü içinde eylem yapan yazılım."},
        {"tr": "yüzey", "en": "surface", "aciklama": "Claude Code'a eriştiğin yer: terminal, VS Code, JetBrains, masaüstü uygulaması ya da web."}
      ],
      "sorular": [
        {
          "id": "b01-d1-s1",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bir hatayı sohbetteki Claude'a sordun; kodu görmeden genel öneri verdi. Claude Code'da ne değişir?",
          "secenekler": [
            "Daha uzun bir genel öneri listesi yazar",
            "İlgili dosyaları kendisi açıp okur",
            "Kodu senin yapıştırmanı bekler"
          ],
          "dogru": 1,
          "ipucu": "Dosyalara kimin eriştiğini düşün.",
          "aciklama": "Claude Code dosyalarına doğrudan erişir; kodu sana sormadan açıp okur ve cevabını gerçek koda dayandırır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/what-is-claude-code",
            "kopya": "ders-101-01-what-is-claude-code.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude.ai'den farklı olarak Claude Code'un dosyalarına, terminaline ve bütün kod tabanına doğrudan erişimi vardır ve kodu kopyalayıp yapıştırmak yerine işi kendisi yapar."
          }
        },
        {
          "id": "b01-d1-s3",
          "tur": "eslestir",
          "kart": 0,
          "soru": "İsteğini Claude'un kullanacağı yetenekle eşleştir.",
          "ciftler": [
            [
              "'Bu özellik nasıl çalışıyor, anlat'",
              "Kodu okumak"
            ],
            [
              "'Eski adı bütün dosyalarda değiştir'",
              "Dosya düzenlemek"
            ],
            [
              "'Testleri koş, sonucu söyle'",
              "Komut koşmak"
            ],
            [
              "'Bu aracın güncel belgesini bul'",
              "Webde aramak"
            ]
          ],
          "ipucu": "Her istekte Claude'un neye dokunması gerektiğine bak: dosyaya mı, terminale mi, webe mi?",
          "aciklama": "Anlatmak için kod okunur, ad değiştirmek dosya düzenlemektir, test terminalde komutla koşar, güncel belge webde aranır.",
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
          "kart": 2,
          "soru": "Telefondaki Claude uygulamasından bu klasördeki dosyayı düzeltmesini istedin; bilgisayarındaki dosya değişmedi. En olası neden?",
          "secenekler": [
            "Değişiklik bilgisayara ertesi gün eşitlenir",
            "Dosya korumalı; hiçbir oturum değiştiremez",
            "Telefondaki uygulama bu klasöre yazabilen yüzey değil"
          ],
          "dogru": 2,
          "ipucu": "Bu klasöre hangi oturumun yazdığını düşün.",
          "aciklama": "Bizim kurala göre bu klasöre yalnız masaüstü Code sekmesindeki yerel oturum yazar; telefondaki uygulama başka bir yüzeydir.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Satır, bu klasöre yalnız masaüstü Code sekmesindeki yerel oturumun yazdığını söyler.",
            "soz": "Bu klasöre yalnız Claude Code (masaüstü Code sekmesi, yerel oturum) yazar"
          }
        },
        {
          "id": "b01-d1-s5",
          "tur": "coktan",
          "kart": 1,
          "soru": "Sohbette Claude'a bir kod parçası yazdırdın, dosyaya kendin yapıştırman gerekiyor. Aynı işi Claude Code'a verirsen ne değişir?",
          "secenekler": [
            "Kodu yazar, yapıştırmak sana kalır",
            "Değişikliği dosyada kendisi yapar",
            "Yalnız açıklar, dosyaya dokunmaz"
          ],
          "dogru": 1,
          "ipucu": "Ajanla sohbet arasındaki farkı hatırla.",
          "aciklama": "Sohbet asistanı senin uygulaman gereken metni verir; Claude Code araçlarıyla değişikliği kendisi yapar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/glossary",
            "kopya": "glossary.md",
            "okuma": "2026-11-15",
            "dayanak": "Ajan tabanlı kodlamada yapay zeka dosya okur, komut koşar ve değişikliği kendisi yapar; sohbet tabanlı asistan ise yalnız senin uygulaman gereken metinle cevap verir."
          }
        },
        {
          "id": "b01-d1-s8",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude bir hatayı düzeltirken kendiliğinden bir web sayfasında belge okumaya başladı. Ne yaparsın?",
          "secenekler": [
            "Durdurursun; görevden saptı",
            "Bırakırsın; belge bulmak da işin parçası",
            "Oturumu kapatırsın; dışarıya bağlandı"
          ],
          "dogru": 1,
          "ipucu": "Ajanın hedefe ulaşmak için hangi işleri yapabildiğini düşün.",
          "aciklama": "Claude Code gerekince webde belge arar; hatayı çözmek için belge okuması işin olağan bir adımıdır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/what-is-claude-code",
            "kopya": "ders-101-01-what-is-claude-code.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code kod tabanını okuyup bir özelliği açıklayabilir, projedeki dosyaları düzenleyebilir, terminal komutu koşup çıktıya göre sonraki adıma karar verebilir ve gerektiğinde webde belge arayabilir."
          }
        },
        {
          "id": "b01-d1-s9",
          "tur": "coktan",
          "kart": 2,
          "soru": "Masaüstü uygulamasında 'şu dosyayı düzelt' yazdın; Claude yeni metni verip 'bunu dosyaya yapıştır' dedi. En olası kaynak?",
          "secenekler": [
            "İzin modu dosya yazmayı kapatmış",
            "Code sekmesinde değil, sohbettesin",
            "Dosya açılamayacak kadar büyük"
          ],
          "dogru": 1,
          "ipucu": "Metni senin yapıştırmanı hangi yüzeyin beklediğini düşün.",
          "aciklama": "Sohbette yapıştırmayı sen yaparsın; Code sekmesindeki Claude Code ise dosyaya doğrudan erişip değişikliği kendisi yapar.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/what-is-claude-code",
            "kopya": "ders-101-01-what-is-claude-code.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude.ai'den farklı olarak Claude Code'un dosyalarına, terminaline ve bütün kod tabanına doğrudan erişimi vardır ve kodu kopyalayıp yapıştırmak yerine işi kendisi yapar."
          }
        }
      ]
    },
    {
      "id": "b01-d2",
      "baslik": "Ajan döngüsü (agentic loop)",
      "hedefler": [
        "Ajan döngüsünün üç evresini anlatabilir.",
        "Claude'un o an döngünün hangi evresinde olduğunu ayırt edebilir.",
        "Döngü sürerken araya girip yön verebileceğini anlatabilir.",
        "Yazma korumasının döngüde ne zaman devreye girdiğini anlatabilir."
      ],
      "anlatim": [
        "Claude'a bir istem (prompt) yazıp iş verdiğinde üç evreden geçer: işi anlamak için bağlam toplar, eylem yapar, sonucu doğrular.",
        "Sonuç istemi karşılıyorsa iş biter. Karşılamıyorsa Claude başa döner ve yeniden dener.",
        "Döngü işe göre uzar ya da kısalır: kod hakkında bir soru yalnız bağlam toplamayla bitebilir. Bir hata düzeltmesi ise üç evreyi defalarca döner.",
        "Sen de döngünün içindesin: masaüstünde durdurma düğmesiyle Claude'u hemen durdurabilirsin. Ya da düzeltmeni yazıp Enter'a basarak onu durdurmadan yön verebilirsin.",
        "Bizim CLAUDE.md doğrulama evresini kurala bağlar: değişiklik bir testle sınanır. Satır şöyle der: 'Sınanmamış değişiklik bitmiş sayılmaz'.",
        "Bizim klasörde Claude dosyaya yazmadan hemen önce yazma koruması kendiliğinden koşar; klasör dışına yazmayı durdurur."
      ],
      "terimler": [
        {"tr": "ajan döngüsü", "en": "agentic loop", "aciklama": "Claude'un her işte geçtiği çevrim: bağlam topla, eylem yap, sonucu doğrula, iş bitene kadar tekrarla."},
        {"tr": "istem", "en": "prompt", "aciklama": "Claude Code'a yazıp gönderdiğin mesaj; döngü onunla başlar."}
      ],
      "sorular": [
        {
          "id": "b01-d2-s1",
          "tur": "coktan",
          "kart": 1,
          "soru": "Claude bir hatayı düzeltti, testi koştu, test yine kaldı. Şimdi aynı dosyayı yeniden düzenliyor. Ne oluyor?",
          "secenekler": [
            "Bozuldu; oturumu kapatman gerekir",
            "Sonuç tutmadı, yeniden deniyor",
            "İzinsiz yeniden başladı; bu bir hata"
          ],
          "dogru": 1,
          "ipucu": "Doğrulama tutmayınca döngünün ne yaptığını düşün.",
          "aciklama": "Doğrulama istemi karşılamazsa Claude başa döner ve yeniden dener; aynı dosyayı yeniden düzenlemesi döngünün olağan parçasıdır.",
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
          "soru": "Claude'a bir hata düzeltmesi verdin. İlk birkaç dakika yalnız dosya okudu, hiçbir şeyi değiştirmedi. Ne oluyor?",
          "secenekler": [
            "Bağlam topluyor; önce sorunu anlıyor",
            "Takıldı; durdurup yeniden başlatmalısın",
            "İş bitti; değişiklik gerekmiyor"
          ],
          "dogru": 0,
          "ipucu": "Bir şeyi düzeltmeden önce ne yapmak gerektiğini düşün.",
          "aciklama": "Döngü bağlam toplamayla başlar: Claude değişiklik yapmadan önce kodu okuyup sorunu anlar, sonra eylem ve doğrulama gelir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/how-claude-code-works",
            "kopya": "how-claude-code-works.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude'a bir iş verdiğinde üç evreden geçer: bağlam toplama, eylem yapma ve sonuçları doğrulama."
          }
        },
        {
          "id": "b01-d2-s4",
          "tur": "dogru-yanlis",
          "kart": 2,
          "soru": "Kod hakkında yalnız bir soru sordun; Claude dosya okuyup cevapladı, test koşmadı. Bu, döngüde bir eksiktir.",
          "dogru": false,
          "ipucu": "Bir soruyu cevaplamak için Claude'un bir şey değiştirmesi gerekir mi?",
          "aciklama": "Yanlış: döngü işe göre kısalır; kod hakkında bir soru yalnız bağlam toplamayla bitebilir, değişiklik olmadığı için sınanacak bir şey de yoktur.",
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
          "kart": 3,
          "soru": "Claude yanlış dosyayı düzenlemeye başladı ama öteki adımları doğru. En az kayıpla ne yaparsın?",
          "secenekler": [
            "Durdurma düğmesine basıp baştan anlatırsın",
            "Bitirmesini bekler, sonra düzeltirsin",
            "Doğru dosyanın adını yazıp gönderirsin"
          ],
          "dogru": 2,
          "ipucu": "Claude çalışırken yazıp göndermenin ne yaptığını hatırla.",
          "aciklama": "Yazıp gönderdiğin düzeltme çalışan işi kesmeden yön verir; durdurma düğmesi ise işi hemen keser.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude'u istediğin an yönlendirebilirsin: durdurma düğmesine basıp hemen kesersin ya da düzeltmeni yazıp Enter'a basarak çalışan eylemi durdurmadan gönderirsin."
          }
        },
        {
          "id": "b01-d2-s6",
          "tur": "bosluk",
          "kart": 4,
          "soru": "Claude üç dosyayı düzeltti, yalnız birini sınadı ve 'hepsi bitti' dedi. Kurala göre ___ bitmiş sayılır.",
          "secenekler": [
            "üç dosya da",
            "yalnız sınanan dosya",
            "sen onaylayınca üçü de"
          ],
          "dogru": 1,
          "ipucu": "Kuralın bir değişikliği bitmiş saymak için ne istediğini düşün.",
          "aciklama": "Kural her değişikliğin sınanmasını ister; sınanmayan iki dosya Claude bitti dese de, sen onaylasan da bitmiş sayılmaz.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Satır, değiştirilen şeyin basit bir testle sınanmasını ve sınanmamış değişikliğin bitmiş sayılmamasını ister.",
            "soz": "Sınanmamış değişiklik bitmiş sayılmaz"
          }
        },
        {
          "id": "b01-d2-s7",
          "tur": "sirala",
          "kart": 5,
          "soru": "'Bu dosyadaki hatayı düzelt' dedin. Bizim klasörde olanları sıraya koy.",
          "adimlar": [
            "Claude dosyayı okuyup hatayı bulur",
            "Yazma koruması koşar",
            "Claude dosyayı düzenler",
            "Claude değişikliği testle sınar"
          ],
          "ipucu": "Korumanın yazmadan önce mi sonra mı koştuğunu düşün.",
          "aciklama": "Claude önce okuyup anlar; yazmadan hemen önce yazma koruması koşar, sonra düzenleme yapılır ve en son test gelir.",
          "kaynak": {
            "adres": ".claude/settings.json",
            "okuma": "2026-11-24",
            "dayanak": "Ayar dosyası yazma korumasını Edit ve Write araçlarından önce çalışacak biçimde bağlar.",
            "soz": "Yazma koruması: git klasörü ve klasör dışı"
          }
        }
      ]
    },
    {
      "id": "b01-d3",
      "baslik": "Araçlar (tools)",
      "hedefler": [
        "Read, Edit, Write, Bash, WebFetch, Agent ve Skill araçlarını yaptıkları işle birlikte anlatabilir.",
        "Hangi aracın senden izin istediğini, hangisinin istemediğini ayırt edebilir.",
        "Bir koruma devreye girdiğinde Claude'un hangi araçla ne yaptığını ayırt edebilir."
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
          "soru": "Claude'un kullandığı aracı o an yaptığı işle eşleştir.",
          "ciftler": [
            [
              "Read",
              "Bir dosyanın içine bakıyor"
            ],
            [
              "Edit",
              "Bir dosyada tek bir yeri değiştiriyor"
            ],
            [
              "Bash",
              "Terminalde bir komut koşuyor"
            ],
            [
              "WebFetch",
              "Bir web adresinden sayfa getiriyor"
            ]
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
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude var olan bir rapora Write ile yeni bölüm ekledi; raporun eski bölümleri kayboldu. Kaynağı ne olabilir?",
          "secenekler": [
            "Dosya çok uzun olduğu için kesildi",
            "Eklemek yerine dosya baştan yazıldı",
            "Kaydetme yarıda kaldı"
          ],
          "dogru": 1,
          "ipucu": "Write'ın var olan bir dosyaya ne yaptığını düşün.",
          "aciklama": "Write dosya yaratır ya da var olanın üzerine yazar; eklemek için Edit kullanılmazsa eski içerik gider.",
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
          "soru": "Elle onay (Manual) modundasın. Claude birkaç dosyayı okudu, sana hiç sormadı. Neden?",
          "secenekler": [
            "Claude izin kuralını atladı",
            "Dosya okumak onay istemez",
            "Bu dosyalara önceden izin vermiştin"
          ],
          "dogru": 1,
          "ipucu": "Bakmakla değiştirmek arasındaki farkı düşün.",
          "aciklama": "Read, çalışma klasörü içindeki dosyalar için izin istemez; Edit, Write ve Bash ise önce sorar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/tools-reference",
            "kopya": "tools-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "İzin sütunu aracın elle onay modunda çalışma klasörü içindeki yollar için sorup sormadığını gösterir ve Read bu sütunda 'Hayır' diye işaretlidir."
          }
        },
        {
          "id": "b01-d3-s4",
          "tur": "coktan",
          "kart": 4,
          "soru": "Elle onay modunda Claude bir listeleme komutunu sormadan koştu, başka bir komutta onay istedi. Neden?",
          "secenekler": [
            "Önceki bir onayın onu da kapsadı",
            "Salt bakan komutlar sorulmayabilir",
            "Komut kısaysa onay istenmez"
          ],
          "dogru": 1,
          "ipucu": "Komutun bir şeyi değiştirip değiştirmediğini düşün.",
          "aciklama": "Bash izin isteyen bir araçtır, ama yalnız okuyan bazı yerleşik komutları sormadan koşar; değiştiren komutta yine sorar.",
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
          "soru": "Claude bir hatayı düzeltmeden önce Glob aracını kullandı. O an ne yapıyor?",
          "secenekler": [
            "Dosyalarda değişiklik yapıyor",
            "Dosyalara bakıp arıyor",
            "Webde arama yapıyor",
            "Terminalde komut koşuyor"
          ],
          "dogru": 1,
          "ipucu": "Bu araçların dosyayı değiştirip değiştirmediğini düşün.",
          "aciklama": "Glob adı bir biçime uyan dosyaları bulur; dosyaya bakar, bir şey değiştirmez.",
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
          "soru": "Elle onay modundasın. Claude'a bir belge sayfasının adresini verdin; sayfayı getirmeden önce onay istedi. Neden?",
          "secenekler": [
            "WebFetch izin isteyen bir araçtır",
            "Adres güvensiz göründüğü için",
            "Sayfa bir dosyaya kaydedileceği için"
          ],
          "dogru": 0,
          "ipucu": "Adresten içerik getiren aracı ve hangi araçların sana sorduğunu hatırla.",
          "aciklama": "WebFetch verilen adresten içerik çeker ve izin gerektiren araçlar arasındadır; bu yüzden elle onay modunda önce sorar.",
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
          "kart": 0,
          "soru": "Ayar dosyamızdaki korumalardan üçü: okuma, yazma ve kabuk koruması. Claude Grep aracını kullanırken biri devreye girdi. Hangisi?",
          "secenekler": [
            "Kabuk koruması",
            "Yazma koruması",
            "Okuma koruması"
          ],
          "dogru": 2,
          "ipucu": "Grep aracının dosyaya ne yaptığını düşün.",
          "aciklama": "Grep dosya içeriğinde arar, yani dosyaya bakar; ayar dosyası okuma korumasını Read, Grep ve Glob araçlarına bağlar.",
          "kaynak": {
            "adres": ".claude/settings.json",
            "okuma": "2026-11-24",
            "dayanak": "Ayar dosyası okuma korumasını Read, Grep ve Glob araçlarına bağlar.",
            "soz": "Read|Grep|Glob"
          }
        }
      ]
    },
    {
      "id": "b01-d4",
      "baslik": "Bağlam penceresi (context window)",
      "hedefler": [
        "Bağlam penceresini Claude'un çalışma belleği olarak anlatabilir.",
        "Yeni bir oturumun neyi bilip neyi bilmediğini ayırt edebilir.",
        "Bağlam dolunca ne olduğunu ve kalıcı kuralın nereye yazıldığını anlatabilir."
      ],
      "anlatim": [
        "Bağlam, Claude'un sınırlı çalışma belleğidir; doluluğunu masaüstündeki Context kartında görürsün. Her mesaj, okunan her dosya ve komut çıktısı orada yer kaplar.",
        "Sen yazmadan bağlama CLAUDE.md, açıksa otomatik hafıza (auto memory) ve skill açıklamaları yüklenir. Önceki oturumların konuşması gelmez.",
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
          "id": "b01-d4-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bugün Claude'la önemli bir karar verdin; yarın yeni oturumda bilinmesi gerekiyor. Ne yaparsın?",
          "secenekler": [
            "Hiçbir şey; Claude dünkü konuşmayı hatırlar",
            "Kararı CLAUDE.md'ye yazdırırsın",
            "Claude'a 'bunu unutma' demen yeter"
          ],
          "dogru": 1,
          "ipucu": "Yeni oturum açıldığında bağlama neyin geldiğini düşün.",
          "aciklama": "Yeni oturum önceki konuşmayı yüklemez ama CLAUDE.md her oturumun başında yüklenir; kalıcı olması gereken karar bu yüzden oraya yazılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Belge, oturum başında CLAUDE.md, otomatik hafıza ve skill açıklamalarının yüklendiğini söyler; önceki konuşma bu listede yoktur."
          }
        },
        {
          "id": "b01-d4-s3",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude'dan klasördeki bütün eski raporları tek tek okumasını istedin. Bu, bağlamı nasıl etkiler?",
          "secenekler": [
            "Etkilemez; dosyalar diskte kalır",
            "Yalnız son okunan rapor bağlamda kalır",
            "Bağlam hızla dolar"
          ],
          "dogru": 2,
          "ipucu": "Okunan bir dosyanın nereye girdiğini düşün.",
          "aciklama": "Okunan her dosya bağlam penceresine eklenir; çok sayıda dosya okutmak sınırlı alanı hızla doldurur.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/context-management",
            "kopya": "ders-101-06-context-management.md",
            "okuma": "2026-11-15",
            "dayanak": "Sen istem yazdığında, Claude bir dosya okuduğunda ya da bir araç çağırıp sonucunu aldığında, bunların hepsi bağlam penceresine eklenir."
          }
        },
        {
          "id": "b01-d4-s4",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bir skill'in içinde yazan bir adımı Claude bu oturumda hiç uygulamadı. Kaynağı ne olabilir?",
          "secenekler": [
            "Skill'ler yalnız ilk oturumda okunur",
            "Skill çağrılmadı, tam metni gelmedi",
            "Bağlam doldu, skill dosyası silindi"
          ],
          "dogru": 1,
          "ipucu": "Skill'in tam metninin bağlama ne zaman girdiğini düşün.",
          "aciklama": "Oturum başında yalnız skill açıklaması bağlamdadır; tam metin skill kullanılınca yüklenir. Kullanılmayan skill'in adımları Claude'un önünde değildir.",
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
          "kart": 4,
          "soru": "Context kartı bağlamın neredeyse dolduğunu gösteriyor; sıradaki iş kırk dosya okumak. En iyi hamlen hangisi?",
          "secenekler": [
            "Aynı sohbette sürdürürsün; dolunca kendisi özetler",
            "İşi yeni bir sohbette başlatırsın"
          ],
          "dogru": 1,
          "ipucu": "Bağlam dolunca konuşmaya ne olduğunu ve kuralın ne önerdiğini düşün.",
          "aciklama": "Dolan bağlam özetlenir ve ayrıntı kaybolabilir; bizim kural da sohbet şişince yeni sohbete geçmeyi önerir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/how-claude-code-works",
            "kopya": "how-claude-code-works.md",
            "okuma": "2026-11-15",
            "dayanak": "Özet isteklerini ve önemli kod parçalarını tutar ama konuşmanın başındaki ayrıntılı talimatlar kaybolabilir, bu yüzden kalıcı kuralları konuşma geçmişine güvenmek yerine CLAUDE.md'ye koy."
          }
        },
        {
          "id": "b01-d4-s6",
          "tur": "coktan",
          "kart": 3,
          "soru": "Sohbetin başında 'cevapları kısa yaz' dedin. Oturum çok uzadı, Claude yine uzun yazmaya başladı. En olası kaynak?",
          "secenekler": [
            "Claude talimatı bilerek bıraktı",
            "Bağlam doldu, oturum baştan başladı",
            "Konuşma özetlenirken baştaki talimat düştü"
          ],
          "dogru": 2,
          "ipucu": "Bağlam dolmaya yaklaşınca konuşmaya ne olduğunu düşün.",
          "aciklama": "Sıkıştırmada konuşma özetlenir ve baştaki ayrıntılı talimat kaybolabilir; kalıcı olması gereken kuralı CLAUDE.md'ye yazdırırsın.",
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
          "kart": 4,
          "soru": "Claude çalışırken 'bu sohbeti kapatıp yenisine geçelim' önerdi. Bizim kurala göre en olası neden?",
          "secenekler": [
            "Bağlam 500 bin sınırını aştı",
            "Oturum belli bir süreyi geçti",
            "Mesaj sayısı belli bir sınıra ulaştı"
          ],
          "dogru": 0,
          "ipucu": "Sohbet şişince bu derste anlatılan hangi alanın dolduğunu düşün.",
          "aciklama": "Satır, kapanışın bağlam 500 bini geçince, sıradaki iş yeni sohbet isteyince ya da iş kalmayınca önerileceğini söyler.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
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
          "tur": "eslestir",
          "kart": 0,
          "soru": "Claude'un yaptığını yanılma biçimiyle eşleştir.",
          "ciftler": [
            [
              "'Başlığı kısalt' dedin, başlığı sildi",
              "Niyetini yanlış anladı"
            ],
            [
              "Düzeltmeden sonra sayfa açılmıyor",
              "Koda hata ekledi"
            ],
            [
              "Tek satırlık iş için üç yeni dosya kurdu",
              "Çözümü gereğinden karmaşık kurdu"
            ]
          ],
          "ipucu": "Her durumda Claude neyi yanlış yaptı: isteği mi, kodu mu, kurduğu yapıyı mı?",
          "aciklama": "İsteği yanlış yorumlamak niyeti yanlış anlamaktır, açılmayan sayfa eklenen hatadır, küçük işe büyük yapı kurmak gereğinden karmaşıklıktır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/what-is-claude-code",
            "kopya": "ders-101-01-what-is-claude-code.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code kusursuz değildir: niyetini yanlış anlayabilir, hata ekleyebilir ya da çözümü gereğinden karmaşık kurabilir."
          }
        },
        {
          "id": "b01-d5-s2",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude bir dosyada yaptığı değişiklikle metni bozdu. Ne yapabilirsin?",
          "secenekler": [
            "Metni elle yeniden yazarsın; geri dönüş yok",
            "Düzenlemeden önce alınan kopyaya dönersin",
            "Oturumu kapatırsın; değişiklik kaydolmaz"
          ],
          "dogru": 1,
          "ipucu": "Dosya düzenlemelerinin geri alınıp alınamadığını düşün.",
          "aciklama": "Claude bir dosyayı düzenlemeden önce anlık kopyasını alır; bu geri sarma noktasıyla dosyayı önceki hâline döndürürsün.",
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
          "soru": "Claude canlı siteye yanlış bir sürüm yayınladı. Geri sarma noktası bunu geri alır mı?",
          "secenekler": [
            "Evet; yayın da bir dosya değişikliğidir",
            "Evet; her işin kopyası alınır",
            "Hayır; yayın bilgisayarın dışında oldu"
          ],
          "dogru": 2,
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
          "soru": "Claude her dosya değişikliğinden önce sana onay soruyor ve bu seni yavaşlatıyor. Kaynağı ne?",
          "secenekler": [
            "Mod seçicide Manual seçili",
            "Claude emin olmadığı için soruyor",
            "Oturum yeni açıldığı için ilk işler soruluyor"
          ],
          "dogru": 0,
          "ipucu": "Claude'un sana ne zaman sorduğunu hangi ayarın belirlediğini düşün.",
          "aciklama": "Manual modda Claude dosya düzenlemeden ve komut koşmadan önce sorar; daha az soru istersen mod seçiciden başka bir mod seçersin.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Manual modda Claude dosya düzenlemeden ya da komut koşmadan önce sorar ve her değişikliği kabul ya da ret edersin."
          }
        },
        {
          "id": "b01-d5-s5",
          "tur": "coktan",
          "kart": 1,
          "soru": "Claude'un ilk denemesi istediğin gibi olmadı. En iyi sonraki hamlen hangisi?",
          "secenekler": [
            "Oturumu kapatıp isteği baştan yazarsın",
            "Aynı isteği değiştirmeden yeniden gönderirsin",
            "Neyin eksik olduğunu yazıp devam ettirirsin"
          ],
          "dogru": 2,
          "ipucu": "Baştan başlamakla üstüne eklemek arasındaki farkı düşün.",
          "aciklama": "Claude Code bir konuşmadır: deneme tutmazsa baştan başlamazsın, neyin eksik olduğunu yazarak üstüne ilerlersin.",
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
          "soru": "Daha az soran bir mod seçtin; Claude yine de bir dosyayı silmeden önce durup plan sundu. Neden?",
          "secenekler": [
            "Mod seçimi kaydedilmedi, Manual'da kaldı",
            "Klasörün kapıları mod seçiminden bağımsızdır",
            "Seçtiğin mod her işte plan ister"
          ],
          "dogru": 1,
          "ipucu": "Kapıların hangi modlarda geçerli olduğunu düşün.",
          "aciklama": "Satır, kapıların her izin modunda geçerli olduğunu söyler; daha az soran bir mod seçmek plan kapısını kaldırmaz.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "İzin modunu kullanıcı seçer ve bu dosyadaki ve skill'lerdeki kapılar her modda geçerlidir.",
            "soz": "İzin modunu kullanıcı seçer; bu dosyadaki ve skill'lerdeki kapılar her modda geçerlidir"
          }
        },
        {
          "id": "b01-d5-s7",
          "tur": "coktan",
          "kart": 7,
          "soru": "Claude'a bir işi yapıp yapamayacağını sordun; 'emin değilim' dedi. Bu cevap ne anlama gelir?",
          "secenekler": [
            "O işi hiçbir şekilde yapamayacağını söylüyor",
            "Senin onayını bekliyor",
            "Yapabileceğinden emin değil, söz vermiyor"
          ],
          "dogru": 2,
          "ipucu": "Kuralın Claude'dan ne zaman 'yaparım' demesini istediğini düşün.",
          "aciklama": "Kural gereği Claude yalnız eminse 'yaparım' der; 'emin değilim' işin imkânsız olduğunu değil, Claude'un söz vermediğini gösterir.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Bir işi yapabileceğimi yalnız eminsem söylerim, emin değilsem 'emin değilim' derim.",
            "soz": "Bir işi yapabileceğimi yalnız eminsem söylerim"
          }
        },
        {
          "id": "b01-d5-s8",
          "tur": "coktan",
          "kart": 5,
          "soru": "Onay vermekten sıkıldın; Claude'a bütün komutlarda serbest yetki vermeyi düşünüyorsun. Neyi kaybedersin?",
          "secenekler": [
            "Claude'un dosya okuma yeteneğini",
            "Yanlış bir komutu çalışmadan durdurma fırsatını",
            "Dosya değişikliklerinin geri sarma noktalarını"
          ],
          "dogru": 1,
          "ipucu": "Onay isteminin sana bir işi ne zaman gösterdiğini düşün.",
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
        "Sıkıştırma (compaction), CLAUDE.md, kanca (hook), alt ajan (subagent) ve MCP (Model Context Protocol) terimlerinin karşılığını anlatabilir.",
        "Bir belirtinin sıkıştırmadan, kancadan, alt ajandan ya da MCP'den gelip gelmediğini ayırt edebilir."
      ],
      "anlatim": [
        "CLAUDE.md senin yazdığın kalıcı talimat dosyasıdır; otomatik hafıza ise Claude'un kendine tuttuğu notlardır. Bizim klasörde otomatik hafıza kapalıdır.",
        "Sıkıştırma (compaction): bağlam sınıra yaklaşınca konuşmanın otomatik özetlenmesi. Proje kökündeki CLAUDE.md sıkıştırmadan sonra diskten yeniden okunur.",
        "Kanca (hook): Claude Code'un belli bir anında, örneğin bir araç çalışmadan önce, kendiliğinden koşan, senin tanımladığın komut. Modelin o anki kararına bağlı değildir.",
        "Alt ajan (subagent): kendi bağlam penceresinde ayrı bir işi yapıp ana sohbete özet döndüren yardımcı.",
        "MCP (Model Context Protocol): Claude'u dış veri kaynaklarına ve hizmetlere bağlayan açık standart.",
        "Bizim CLAUDE.md'de 'Sade Türkçe yaz: iç terim yerine karşılığı' satırı var. Satır örnek olarak 'doğrulayıcı onayladı' ve 'kaydedildi' sözlerini verir."
      ],
      "terimler": [
        {"tr": "sıkıştırma", "en": "compaction", "aciklama": "Bağlam sınıra yaklaşınca konuşmanın otomatik özetlenmesi; elle /compact ile de başlatılır."},
        {"tr": "CLAUDE.md", "en": "CLAUDE.md", "aciklama": "Senin Claude için yazdığın, her oturum başında yüklenen kalıcı talimat dosyası."},
        {"tr": "kanca", "en": "hook", "aciklama": "Claude Code'un belli bir anında kendiliğinden koşan, senin tanımladığın komut."},
        {"tr": "alt ajan", "en": "subagent", "aciklama": "Kendi bağlam penceresinde ayrı bir işi yapıp ana sohbete özet döndüren yardımcı."},
        {"tr": "MCP, model bağlam protokolü", "en": "Model Context Protocol", "aciklama": "Yapay zeka araçlarını dış veri kaynaklarına ve hizmetlere bağlayan açık standart."}
      ],
      "sorular": [
        {
          "id": "b01-d6-s1",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bağlam doluluğunu gösteren Context kartı, sen bir şey silmeden yüzde 90'dan 30'a indi. En olası kaynak?",
          "secenekler": [
            "Claude okuduğu dosyaları sildi",
            "Konuşma kendiliğinden özetlendi",
            "Oturum kendiliğinden yeniden başladı"
          ],
          "dogru": 1,
          "ipucu": "Bağlam sınıra yaklaşınca konuşmaya ne olduğunu düşün.",
          "aciklama": "Bağlam sınıra yaklaşınca konuşma otomatik özetlenir; özet daha az yer kapladığı için doluluk birden düşer.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/glossary",
            "kopya": "glossary.md",
            "okuma": "2026-11-15",
            "dayanak": "Sözlüğe göre sıkıştırma, bağlam sınıra yaklaşınca konuşmanın otomatik özetlenmesidir."
          }
        },
        {
          "id": "b01-d6-s2",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude'dan Slack'teki bir mesajı okumasını istedin; 'buna erişimim yok' dedi. Kaynağı ne olabilir?",
          "secenekler": [
            "İzin modu Manual olduğu için okuyamadı",
            "Slack bağlantısı (MCP) kurulmamış",
            "Bağlam penceresi dolduğu için okuyamadı"
          ],
          "dogru": 1,
          "ipucu": "Claude'u dış hizmetlere neyin bağladığını düşün.",
          "aciklama": "MCP sunucuları Claude'a Slack gibi hizmetler için araç verir; böyle bir bağlantı yoksa Claude o hizmete erişemez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/glossary",
            "kopya": "glossary.md",
            "okuma": "2026-11-15",
            "dayanak": "MCP, yapay zeka araçlarını dış veri kaynaklarına ve hizmetlere bağlayan açık bir standarttır."
          }
        },
        {
          "id": "b01-d6-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bir koruma kancası Claude'un komutunu durdurdu. Claude'a 'bir daha dene' dersen ne olur?",
          "secenekler": [
            "Kanca aynı komutu yine durdurur",
            "Claude bu kez korumayı atlayabilir",
            "Kanca bir kez durdurur, ikincide geçirir"
          ],
          "dogru": 0,
          "ipucu": "Kancanın çalışıp çalışmamasını kimin belirlediğini düşün.",
          "aciklama": "Kanca modelin o anki kararına bağlı değildir, belli anda hep çalışır; aynı komut yine takılır, bu yüzden 'bir daha dene' yerine nedenini sorarsın.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/glossary",
            "kopya": "glossary.md",
            "okuma": "2026-11-15",
            "dayanak": "Kancalar belirlenimlidir: modelin takdirine göre değil, yaşam döngüsünün sabit anlarında çalışır."
          }
        },
        {
          "id": "b01-d6-s4",
          "tur": "coktan",
          "kart": 1,
          "soru": "Uzun bir oturumda sıkıştırma oldu. Hangi kural kesin olarak yerinde kalır?",
          "secenekler": [
            "Sohbetin ilk mesajında verdiğin kural",
            "Claude'a en son tekrarladığın kural",
            "CLAUDE.md dosyasına yazılmış kural"
          ],
          "dogru": 2,
          "ipucu": "Sohbetin dışında, diskte duran talimatı düşün.",
          "aciklama": "Proje kökündeki CLAUDE.md sıkıştırmadan sonra diskten yeniden okunur; yalnız sohbette verilen talimat kaybolabilir.",
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
          "soru": "Elli belge taranıp özetlenecek; ana sohbetin bağlamı zaten yarı dolu. Claude'dan ne istersin?",
          "secenekler": [
            "Belgeleri ana sohbette tek tek okumasını",
            "Taramayı bir alt ajana vermesini",
            "Önce sıkıştırma yapıp sonra okumasını"
          ],
          "dogru": 1,
          "ipucu": "Büyük okumanın hangi bağlamda yapılacağını düşün.",
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
          "kart": 5,
          "soru": "Claude sana 'verifier PASS, commit hazır' yazdı. Bizim kurala göre ne dersin?",
          "secenekler": [
            "Gündelik Türkçeyle yeniden yazmasını istersin",
            "Bir şey demezsin; teknik terim daha kesin",
            "Terimlerin yanına çeviri eklemesini istersin"
          ],
          "dogru": 0,
          "ipucu": "Kuralın iç terimler için ne istediğini düşün.",
          "aciklama": "Kural iç terim yerine sade karşılık ister; aynı haber 'doğrulayıcı onayladı, kaydedilmeye hazır' gibi yazılmalıydı.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Sade Türkçe yaz: iç terim yerine karşılığını kullan, örneğin 'doğrulayıcı onayladı' ya da 'kaydedildi'.",
            "soz": "Sade Türkçe yaz: iç terim yerine karşılığı"
          }
        },
        {
          "id": "b01-d6-s7",
          "tur": "coktan",
          "kart": 0,
          "soru": "Geçen hafta bir tercihini sohbette söyledin. Bu hafta yeni oturumda Claude onu bilmiyor. Neden?",
          "secenekler": [
            "Tercih hiçbir dosyaya yazılmadı",
            "Claude tercihi bilerek yok saydı",
            "Otomatik hafıza tercihi kaydetmeyi unuttu"
          ],
          "dogru": 0,
          "ipucu": "Bizim klasörde otomatik hafızanın durumunu düşün.",
          "aciklama": "Bizim klasörde otomatik hafıza kapalıdır; sohbette söylenen tercih yalnız bir dosyaya yazılırsa kalıcı olur.",
          "kaynak": {
            "adres": ".claude/settings.json",
            "okuma": "2026-11-24",
            "dayanak": "Ayar dosyası otomatik hafızayı kapatır.",
            "soz": "\"autoMemoryEnabled\": false"
          }
        }
      ]
    }
  ]
});
