// icerik/birim-02.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b02",
  "sira": 2,
  "baslik": "İlk adımlar, masaüstü uygulamada",
  "amac": "Masaüstü uygulamasının Code sekmesinde oturum açmayı, dosya vermeyi, değişikliği gözden geçirmeyi, eğik çizgi komutlarını, sık iş akışlarını ve commit'i tanımak.",
  "dersler": [
    {
      "id": "b02-d1",
      "baslik": "Masaüstünde oturum açmak",
      "hedefler": [
        "Code sekmesinde oturum açıp klasör seçme adımlarını sırasıyla anlatabilir.",
        "Yerel (Local) ve bulut (Cloud) oturumun farkını anlatabilir."
      ],
      "anlatim": [
        "Claude Code, masaüstü uygulamasında Code sekmesidir. Code'a tıklayınca yükseltme (upgrade) istemi çıkarsa önce ücretli bir plana abone olman gerekir. Uygulama Claude Code'u içinde getirir; Code sekmesi için ayrıca Node.js ya da komut satırı aracı (CLI) kurman gerekmez. Code sekmesinde her konuşma bir oturumdur (session): kendi sohbet geçmişi ve kendi proje klasörü vardır, öteki oturumlardan bağımsızdır.",
        "İlk mesajı yazmadan önce istem kutusunun altındaki satırdan ortamı, klasörü, izin modunu ve modeli seçersin. Satırdaki ilk düğme ortam seçicidir (environment selector). Yerel (Local) seçersen Claude senin bilgisayarında, dosyalarına doğrudan erişerek çalışır. Bulut (Cloud) seçersen oturum varsayılan olarak Anthropic'in yönettiği altyapıda çalışır ve uygulamayı kapatsan da sürer; bu durumda klasör yerine depo (repository) seçersin.",
        "Bizim klasörde kural açık: bu klasöre yalnız Claude Code yazar, masaüstü Code sekmesinde ve yerel oturumda (CLAUDE.md satır 5). Yani burada iş açarken ortam seçicide Local grubunun en üstündeki girişi, sonra klasör düğmesinde Open folder ile proje klasörünü seçersin."
      ],
      "terimler": [
        {"tr": "oturum", "en": "session", "aciklama": "Code sekmesinde Claude ile yapılan, kendi geçmişi ve kendi klasörü olan konuşma."},
        {"tr": "ortam seçici", "en": "environment selector", "aciklama": "İstem kutusunun altındaki satırın ilk düğmesi; Claude'un nerede çalışacağını seçer."},
        {"tr": "komut satırı aracı", "en": "CLI", "aciklama": "Claude Code'un terminalde çalışan biçimi; Code sekmesi için ayrıca kurulması gerekmez."}
      ],
      "sorular": [
        {
          "id": "b02-d1-s1",
          "tur": "sirala",
          "soru": "Code sekmesinde ilk oturumu açma adımlarını sıraya koy.",
          "adimlar": [
            "Code sekmesine tıkla",
            "Ortam seçicide Local grubunun en üstündeki girişi seç",
            "Klasör düğmesinde Open folder ile proje klasörünü seç",
            "Model seçiciden bir model seç",
            "Claude'a ne yapmasını istediğini yaz"
          ],
          "ipucu": "Önce sekme, sonra istem kutusunun altındaki satır soldan sağa, en son mesaj.",
          "aciklama": "Belge önce Code sekmesini açtırır, sonra satırdaki ortam ve klasör düğmelerini, sonra modeli seçtirir. İş en son yazılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop-quickstart",
            "kopya": "desktop-quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "Kurulumda Code sekmesi açılır, ilk oturumda önce ortam seçicide Local grubunun en üstündeki giriş ve yanındaki düğmeden Open folder ile proje klasörü, sonra model seçilir, en son Claude'a ne yapacağı yazılır."
          }
        },
        {
          "id": "b02-d1-s2",
          "tur": "coktan",
          "soru": "Yerel (Local) oturumla bulut (Cloud) oturumun farkı hangisi?",
          "secenekler": [
            "İkisi de aynı yerde çalışır; yalnız adları farklıdır",
            "Yerel oturum senin bilgisayarında çalışır; bulut, uygulama kapansa da sürer",
            "Yerel oturum yalnız sohbet eder; dosya düzenlemeyi yalnız bulut oturum yapabilir",
            "Bulut oturum yalnız Windows'ta açılır"
          ],
          "dogru": 1,
          "ipucu": "Uygulamayı kapattığında hangisinin çalışmaya devam ettiğini düşün.",
          "aciklama": "Yerel ortam senin makinende dosyalarına doğrudan erişir. Bulut ortam varsayılan olarak Anthropic'in altyapısında çalışır ve uygulama kapansa da sürer.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Yerel ortam senin makinende dosyalarına doğrudan erişerek çalışır, bulut ortam ise varsayılan olarak Anthropic'in yönettiği altyapıda çalışır ve uygulamayı kapatsan da oturum sürer."
          }
        },
        {
          "id": "b02-d1-s3",
          "tur": "dogru-yanlis",
          "soru": "Code sekmesinde her oturumun kendi sohbet geçmişi ve kendi proje klasörü vardır; öteki oturumlardan bağımsızdır.",
          "dogru": true,
          "ipucu": "Kenar çubuğunda birkaç oturumu yan yana yürütebildiğini hatırla.",
          "aciklama": "Doğru: belge her konuşmayı kendi geçmişi ve klasörü olan, ötekilerden bağımsız bir oturum diye tanımlar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Code sekmesinde her konuşma bir oturumdur ve kendi sohbet geçmişi ile proje klasörü vardır, öteki oturumlardan bağımsızdır."
          }
        },
        {
          "id": "b02-d1-s4",
          "tur": "coktan",
          "soru": "CLAUDE.md satır 5: bu klasöre yalnız Claude Code (masaüstü Code sekmesi, yerel oturum) yazar. Bu klasörde iş yapacak oturum hangi türde olmalı?",
          "secenekler": [
            "Bulut (Cloud)",
            "Uzak makine (SSH)",
            "Yerel (Local)"
          ],
          "dogru": 2,
          "ipucu": "Satırda parantez içinde hangi oturum türünün adı geçtiğine bak.",
          "aciklama": "Satır 5 bu klasöre yalnız masaüstü Code sekmesindeki yerel oturumun yazdığını söyler. Bulut ve uzak makine oturumu bu kuralın dışında kalır.",
          "kaynak": {
            "adres": "CLAUDE.md:5",
            "okuma": "2026-11-15",
            "dayanak": "Bu klasöre yalnız Claude Code yazar: masaüstü Code sekmesi, yerel oturum."
          }
        },
        {
          "id": "b02-d1-s5",
          "tur": "bosluk",
          "soru": "Bulut (Cloud) ortamını seçtiğinde satırda klasör yerine ___ seçersin.",
          "secenekler": [
            "izin kuralı",
            "depo (repository)",
            "ekran görüntüsü"
          ],
          "dogru": 1,
          "ipucu": "Satırdaki klasör düğmesinin bulut oturumunda neye dönüştüğünü düşün.",
          "aciklama": "Belgeye göre bulut oturumunda klasör yerine depo seçilir. Bulut oturumu birden çok depoyla da çalışabilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Bulut oturumunda proje klasörü yerine depolar seçilir."
          }
        },
        {
          "id": "b02-d1-s6",
          "tur": "coktan",
          "soru": "Code sekmesine tıkladın ve yükseltme (upgrade) istemi çıktı. Bu ne demek?",
          "secenekler": [
            "Önce ücretli bir plana abone olman gerekir",
            "Önce Node.js ve komut satırı aracını (CLI) kurman gerekir",
            "Uygulamayı silip yeniden kurman gerekir"
          ],
          "dogru": 0,
          "ipucu": "Yükseltmenin bir kurulumla mı, planınla mı ilgili olduğunu düşün.",
          "aciklama": "Belge bu istemin çözümünü önce ücretli bir plana abone olmak diye verir. Masaüstü uygulaması Claude Code'u içinde getirdiği için Node.js ya da CLI gerekmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop-quickstart",
            "kopya": "desktop-quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "Code sekmesine tıklayınca yükseltme istemi çıkarsa önce ücretli bir plana abone olman gerekir."
          }
        },
        {
          "id": "b02-d1-s7",
          "tur": "dogru-yanlis",
          "soru": "Code sekmesini kullanmak için bilgisayarına ayrıca Node.js ya da komut satırı aracı (CLI) kurman gerekir.",
          "dogru": false,
          "ipucu": "Masaüstü uygulamasının içinde zaten neyin geldiğini düşün.",
          "aciklama": "Yanlış: masaüstü uygulaması Claude Code'u içinde getirir, Code sekmesi için Node.js ya da CLI kurmak gerekmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop-quickstart",
            "kopya": "desktop-quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "Masaüstü uygulaması Claude Code'u içerir, bu yüzden Code sekmesini kullanmak için Node.js ya da CLI kurman gerekmez."
          }
        }
      ]
    },
    {
      "id": "b02-d2",
      "baslik": "İstem kutusu ve dosya eklemek (@)",
      "hedefler": [
        "`@` ile bir dosyayı konuşmaya eklemeyi anlatabilir.",
        "Ekran görüntüsü eklemenin ne zaman işe yaradığını anlatabilir.",
        "Claude'u durdurmak ile çalışırken düzeltme göndermeyi ayırt edebilir."
      ],
      "anlatim": [
        "İstem kutusuna (prompt box) Claude'dan istediğini yazıp Enter'a basarsın. Claude çalışırken yön verebilirsin: durdurma düğmesi işi hemen keser. Düzeltmeyi yazıp Enter'a basarsan iş durmaz; Claude düzeltmeni o anki adımı bitirince okur ve sonraki adımdan önce yönünü değiştirir.",
        "Bir dosyayı vermek için `@` yazıp dosya adını yazarsın; dosya konuşmanın bağlamına girer. Bulut oturumunda `@` dosyaları ancak ilk mesajı gönderdikten sonra listeler. Resim, PDF ve başka dosyaları kutunun yanındaki + düğmesinden eklersin (attachment) ya da sürükleyip bırakırsın. Bu, hata ekran görüntüsü, tasarım taslağı ya da başvuru belgesi paylaşmak için işe yarar.",
        "Her dosyayı eklemek zorunda değilsin: Claude proje dosyalarını gerektikçe kendisi okur. Bizim klasörde ters yön de kurallı: Claude sana kopyalayacağın ya da açacağın bir şey verecekse onu dosya olarak gönderir ve tıklanır bağlantısını verir, 'şuraya git' diye yol tarif etmez (CLAUDE.md satır 102)."
      ],
      "terimler": [
        {"tr": "istem kutusu", "en": "prompt box", "aciklama": "Claude'a ne yapacağını yazdığın kutu; Enter ile gönderilir."},
        {"tr": "dosya eki", "en": "attachment", "aciklama": "İstem kutusunun yanındaki + düğmesiyle ya da sürükleyip bırakarak eklenen resim, PDF ya da başka dosya."}
      ],
      "sorular": [
        {
          "id": "b02-d2-s1",
          "tur": "bosluk",
          "soru": "Bir dosyayı konuşmaya eklemek için istem kutusuna ___ işaretini ve ardından dosya adını yazarsın.",
          "secenekler": [
            "/",
            "@",
            "#"
          ],
          "dogru": 1,
          "ipucu": "Bu işaret e-posta adreslerinde de geçer.",
          "aciklama": "@ ve dosya adı, o dosyayı konuşmanın bağlamına ekler. Eğik çizgi ise komut menüsünü açar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Dosya eklemek için @ ve ardından dosya adını yazarsın, dosya konuşmanın bağlamına eklenir."
          }
        },
        {
          "id": "b02-d2-s2",
          "tur": "coktan",
          "soru": "Uygulamanda bir düğme yanlış yerde duruyor. Bunu Claude'a göstermenin en iyi yolu hangisi?",
          "secenekler": [
            "Ekranı sözle, uzun uzun tarif ederim",
            "Bir şey eklemem; Claude ekranımı kendisi görür",
            "Ekran görüntüsünü istem kutusuna ekler, sorunu kısaca yazarım"
          ],
          "dogru": 2,
          "ipucu": "Claude'un ihtiyacı olan şey elindeyse onu tarif etmek mi, vermek mi daha iyi?",
          "aciklama": "Belge, Claude'un ihtiyacı olan şey elindeyse onu anlatmak yerine vermeni önerir: tasarımın ya da hatanın ekran görüntüsünü isteme yapıştırırsın.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude'un ihtiyacı olan şey elindeyse tarif etmek yerine onu ver, örneğin tasarımın ya da hatanın ekran görüntüsünü isteme yapıştır."
          }
        },
        {
          "id": "b02-d2-s3",
          "tur": "dogru-yanlis",
          "soru": "Claude'un bir proje dosyasını görebilmesi için onu her seferinde @ ile eklemen gerekir.",
          "dogru": false,
          "ipucu": "Claude proje klasöründeki dosyaları kendisi okuyabilir mi, düşün.",
          "aciklama": "Yanlış: Claude proje dosyalarını gerektikçe kendisi okur, bağlamı elle eklemen gerekmez. @ ise belirli bir dosyayı doğrudan konuşmaya çekmek içindir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/quickstart",
            "kopya": "quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code proje dosyalarını gerektikçe okur, bağlamı elle eklemen gerekmez."
          }
        },
        {
          "id": "b02-d2-s4",
          "tur": "coktan",
          "soru": "Claude çalışırken yanlış dosyaya yöneldiğini gördün. O anki adımı bitirsin ama sonra yön değiştirsin istiyorsun. Ne yaparsın?",
          "secenekler": [
            "Düzeltmeyi yazıp Enter'a basarım",
            "Durdurma düğmesine basarım",
            "Oturumu kapatıp yeni bir oturum açarım"
          ],
          "dogru": 0,
          "ipucu": "İki yol var: biri işi hemen keser, öteki kesmeden araya girer.",
          "aciklama": "Yazıp Enter'la gönderdiğin düzeltme çalışan adımı durdurmaz; Claude onu adım bitince okur. Durdurma düğmesi ise işi hemen keser.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Durdurma düğmesi işi hemen keser, yazıp Enter'la gönderdiğin düzeltme ise çalışan adımı durdurmaz ve Claude onu o adım bitince okur."
          }
        },
        {
          "id": "b02-d2-s5",
          "tur": "eslestir",
          "soru": "Her aracı istem kutusundaki işiyle eşleştir.",
          "ciftler": [
            ["@ ve dosya adı", "Dosyayı konuşmanın bağlamına ekler"],
            ["+ düğmesi", "Resim, PDF gibi dosya ekler"],
            ["Durdurma düğmesi", "Çalışan işi hemen keser"],
            ["Yazıp Enter", "Çalışan işi kesmeden düzeltme gönderir"]
          ],
          "ipucu": "Hangisinin işi kestiğini, hangisinin kesmediğini ayır.",
          "aciklama": "@ ve + ikisi de bir şey ekler: biri dosyayı adıyla, öteki dosya ya da resim olarak. Durdurma keser, Enter'la giden düzeltme kesmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "İstem kutusunda @ ve dosya adı dosyayı bağlama ekler, + düğmesi resim ve PDF gibi dosyaları ekler, durdurma düğmesi işi hemen keser, Enter'la gönderilen düzeltme ise işi durdurmaz."
          }
        },
        {
          "id": "b02-d2-s6",
          "tur": "coktan",
          "soru": "Claude sana kopyalayacağın uzun bir istem metni hazırladı. CLAUDE.md satır 102'ye göre onu sana nasıl verir?",
          "secenekler": [
            "Dosyanın yolunu yazar, gidip kopyalamanı ister",
            "Dosya gönderir, tıklanır bağlantısını verir",
            "Metni parça parça sohbete yapıştırır"
          ],
          "dogru": 1,
          "ipucu": "Claude'un sana 'şuraya git' diye yol tarif edip etmediğini düşün.",
          "aciklama": "Satır 102, kopyalayacağın ya da açacağın şeyin dosya olarak gönderilip tıklanır bağlantısıyla verilmesini ister. Uzun metin açılınca görünen dosya olarak gider.",
          "kaynak": {
            "adres": "CLAUDE.md:102",
            "okuma": "2026-11-15",
            "dayanak": "Kullanıcının kopyalayacağı ya da açacağı şey dosya olarak gönderilir ve tıklanır bağlantısıyla verilir; şuraya git, kopyala diye yol tarif edilmez."
          }
        },
        {
          "id": "b02-d2-s7",
          "tur": "dogru-yanlis",
          "soru": "Bulut oturumunda @ dosya listesini ancak ilk mesajını gönderdikten sonra gösterir.",
          "dogru": true,
          "ipucu": "Bulut oturumunda @ listesinin ne zaman dolduğunu düşün.",
          "aciklama": "Doğru: bulut oturumunda @ dosyaları ilk mesajdan sonra listeler. Liste boşsa ilk mesajı dosyasız gönderip dosyayı sonraki mesajda anarsın.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Bulut oturumunda @ dosyaları ancak ilk mesajı gönderdikten sonra listeleyebilir."
          }
        }
      ]
    },
    {
      "id": "b02-d3",
      "baslik": "Değişikliği gözden geçirmek (diff view)",
      "hedefler": [
        "Fark görünümünün değişikliği silinen ve eklenen satırlarla, dosya dosya gösterdiğini anlatabilir.",
        "Kod farkı yerine sade bir özet isteyebileceğini anlatabilir.",
        "Bir değişiklikte ikinci bakış isteyen yerleri ayırt edebilir."
      ],
      "anlatim": [
        "Fark (diff), bir değişikliğin öncesi ve sonrasıdır: silinen ve eklenen satırlar, dosya dosya. Claude dosyaları değiştirince +12 -1 gibi satır sayıları görünür; onlara ya da oturumun başlık çubuğundaki Changes (değişiklikler) düğmesine tıklayınca fark görünümü açılır. Bir satırın yanındaki + ile yorum yazarsın, Claude istenen değişikliği yapar ve sen bunu yeni bir fark olarak görürsün.",
        "Özete tek başına güvenme, farka bak. İkinci bakışı en çok şunlar hak eder: istemediğin değişiklikler, zayıflatılan testler, yeni paketler ya da koda doğrudan yazılmış değerler. İstem kutusuna /code-review yazarsan Claude değişikliği temiz bir bağlamda inceler; bu kod incelemesi (code review) sen istemedikçe bir şey düzenlemez.",
        "Kod okumak sana bir şey anlatmıyorsa sorun değil. Bizim klasörde kural şu: onay gereken yerde Claude neyin değişeceğini bir iki cümleyle, sade dille söyler (CLAUDE.md satır 21). Sen de istediğin an 'bu değişiklik ne yaptı, sade dille anlat' diye sorabilirsin."
      ],
      "terimler": [
        {"tr": "fark görünümü", "en": "diff view", "aciklama": "Claude'un yaptığı değişikliği silinen ve eklenen satırlarla, dosya dosya gösteren ekran."},
        {"tr": "kod incelemesi", "en": "code review", "aciklama": "Değişikliğin oturum geçmişi olmadan, temiz bir bağlamda bir kez daha gözden geçirilmesi."}
      ],
      "sorular": [
        {
          "id": "b02-d3-s1",
          "tur": "coktan",
          "soru": "Fark (diff) sana neyi gösterir?",
          "secenekler": [
            "Claude'un yaptığı işin kısa özetini",
            "Silinen ve eklenen satırları, dosya dosya",
            "Yalnız değişen dosyaların adlarını",
            "Claude'un oturum boyunca okuduğu bütün dosyaların listesini"
          ],
          "dogru": 1,
          "ipucu": "Bir değişikliği anlamak için neyi neyle karşılaştırırsın, düşün.",
          "aciklama": "Fark, bir değişikliğin öncesi ve sonrasıdır: hangi satırların silinip hangilerinin eklendiğini dosya dosya gösterir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/code-review",
            "kopya": "ders-101-07-code-review.md",
            "okuma": "2026-11-15",
            "dayanak": "Fark, bir değişikliğin öncesi ve sonrasıdır: silinen satırlar ve eklenen satırlar, dosya dosya."
          }
        },
        {
          "id": "b02-d3-s2",
          "tur": "sirala",
          "soru": "Code sekmesinde değişikliği gözden geçirip yorumla düzelttirme adımlarını sıraya koy.",
          "adimlar": [
            "+12 -1 gibi satır sayılarına tıklayıp fark görünümünü aç",
            "Değişiklikleri dosya dosya incele",
            "Bir satırın yanındaki + ile yorum kutusunu aç, yorumunu yazıp Enter'a bas",
            "Bütün yorumları macOS'ta Cmd+Enter ile birlikte gönder",
            "Claude'un yorumlara göre çıkardığı yeni farkı incele"
          ],
          "ipucu": "Önce açarsın, sonra okursun; yorumlar tek tek yazılır, birlikte gönderilir.",
          "aciklama": "Fark görünümü satır sayılarından açılır, yorumlar tek tek eklenip toplu gönderilir. Claude yorumları okuyup istenen değişikliği yapar ve bunu yeni bir fark olarak görürsün.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Satır sayılarına tıklayınca fark görünümü açılır, satırın yanındaki + ile yorum eklenir, yorumlar macOS'ta Cmd+Enter ile toplu gönderilir ve Claude yorumlara göre yaptığı değişikliği yeni bir fark olarak gösterir."
          }
        },
        {
          "id": "b02-d3-s3",
          "tur": "coktan",
          "soru": "Claude onay gerektiren bir değişiklik yapacak. CLAUDE.md satır 21'e göre sana nasıl sorar?",
          "secenekler": [
            "Kod farkını ekranda gösterip her satır için ayrı ayrı onay ister",
            "Sormadan uygular, sonra farkı gönderir",
            "Neyin değişeceğini bir iki cümleyle, sade dille söyler"
          ],
          "dogru": 2,
          "ipucu": "Kod okumak sana bir şey anlatmadığında kuralın Claude'dan ne istediğini hatırla.",
          "aciklama": "Satır 21'e göre kod farkı onayı senin için anlam taşımaz. Bu yüzden onay gereken yerde Claude değişikliği sade dille anlatır.",
          "kaynak": {
            "adres": "CLAUDE.md:21",
            "okuma": "2026-11-15",
            "dayanak": "Kod farkı onayı kullanıcı için anlam taşımaz: onay gereken yerde neyin değişeceği bir iki cümleyle, sade dille söylenir."
          }
        },
        {
          "id": "b02-d3-s4",
          "tur": "coktan",
          "soru": "Claude'un özetinde 'giriş formunu düzelttim' yazıyor. Farka baktığında hangisi ikinci bakışı en çok hak eder?",
          "secenekler": [
            "İstemediğin bir ayarın da değişmesi",
            "Özetin kısa yazılmış olması",
            "Değişikliğin tek dosyada kalması"
          ],
          "dogru": 0,
          "ipucu": "Claude dosyadayken senin söylemediğin bir şeye dokunmuş olabilir mi, düşün.",
          "aciklama": "Belge her seferinde ikinci bakış isteyenlerin başında istemediğin değişiklikleri sayar, örneğin Claude dosyadayken düzenlenmiş bir ayar değeri. Zayıflatılan testler ve yeni paketler de bu listededir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/code-review",
            "kopya": "ders-101-07-code-review.md",
            "okuma": "2026-11-15",
            "dayanak": "Her seferinde ikinci bakış isteyenlerin başında istemediğin değişiklikler gelir, örneğin Claude dosyadayken düzenlenen bir ayar değeri."
          }
        },
        {
          "id": "b02-d3-s5",
          "tur": "dogru-yanlis",
          "soru": "/code-review bulduklarını raporlar; sen istemedikçe hiçbir dosyayı düzenlemez.",
          "dogru": true,
          "ipucu": "İnceleyicinin görevi bulmak mı, düzeltmek mi, düşün.",
          "aciklama": "Doğru: /code-review değişikliği temiz bir bağlamda inceler ve bulgularını bildirir. Sen istemedikçe bir şey düzenlemez.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/code-review",
            "kopya": "ders-101-07-code-review.md",
            "okuma": "2026-11-15",
            "dayanak": "/code-review değişikliği oturum geçmişi olmadan, temiz bir bağlamda inceler ve sen istemedikçe hiçbir şeyi düzenlemez."
          }
        },
        {
          "id": "b02-d3-s6",
          "tur": "dogru-yanlis",
          "soru": "Claude'un yazdığı özet yeterlidir; değişikliğin farkına bakmaya gerek yoktur.",
          "dogru": false,
          "ipucu": "Kodu yazan oturumun kendi işini yargılamakta ne kadar iyi olduğunu düşün.",
          "aciklama": "Yanlış: belge yalnız özete güvenmeden önce gerçek farkı okumanı söyler. Kodu yazan oturum, o değişikliğin en iyi yargıcı olmayabilir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/code-review",
            "kopya": "ders-101-07-code-review.md",
            "okuma": "2026-11-15",
            "dayanak": "Yalnız özete güvenmeden önce dosya değişikliklerinin gerçek farkını oku."
          }
        },
        {
          "id": "b02-d3-s7",
          "tur": "bosluk",
          "soru": "Fark görünümünü açmak için satır sayılarına ya da oturumun başlık çubuğundaki ___ düğmesine tıklarsın.",
          "secenekler": [
            "Browser",
            "Terminal",
            "Changes"
          ],
          "dogru": 2,
          "ipucu": "Başlık çubuğunda Claude'un yaptıklarını toplayan düğmeyi düşün.",
          "aciklama": "Fark görünümü satır sayılarından ya da başlık çubuğundaki Changes (değişiklikler) düğmesinden açılır. Browser tarayıcı bölmesini, Terminal ise komut çalıştırdığın bölmeyi açar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Fark görünümünü açmak için satır sayılarına tıklarsın, oturumun başlık çubuğundaki Changes düğmesine de tıklayabilirsin."
          }
        }
      ]
    },
    {
      "id": "b02-d4",
      "baslik": "Eğik çizgi komutları (slash commands)",
      "hedefler": [
        "/context, /compact, /clear, /rewind, /memory, /hooks, /agents ve /mcp komutlarını işleriyle eşleyip anlatabilir.",
        "Skill'lerin de / menüsünde göründüğünü anlatabilir.",
        "Terminalde panel açan komutların Code sekmesinde farklı davrandığını anlatabilir."
      ],
      "anlatim": [
        "Eğik çizgi komutları (slash commands) Claude Code'u oturumun içinden yönetir. İstem kutusuna / yazarsın ya da + düğmesinden Slash commands'ı seçersin. Menüde yerleşik komutlar, kendi skill'lerin ve eklenti skill'leri birlikte görünür. Komut yalnız mesajın başında tanınır; ardından yazdığın metin komuta gider.",
        "Bağlam için dört komut: /context bağlamın neyle dolduğunu gösterir; /compact şimdiye kadarki konuşmayı özetleyip yer açar, aynı konuşma sürer; /clear boş bağlamla yeni bir konuşma başlatır; /rewind konuşmayı ya da kodu önceki bir noktaya geri sarar. Code sekmesinde /context dökümü sohbete yazar.",
        "Ayar tarafında: /memory CLAUDE.md dosyalarını düzenletir, /hooks kanca ayarlarını gösterir, /agents alt ajan istemeyi hatırlatır, /mcp MCP sunucu bağlantılarını yönetir. Dikkat: terminalde panel açan komutlar Code sekmesinde farklı davranır. Örneğin /permissions burada 'isn't available in this environment' cevabını verir."
      ],
      "terimler": [
        {"tr": "eğik çizgi komutları", "en": "slash commands", "aciklama": "İstem kutusunda / ile başlayan, Claude Code'u oturumun içinden yöneten komutlar."},
        {"tr": "skill", "en": "skill", "aciklama": "Gerektiğinde çağırdığın, tekrar kullanılabilir hazır istem; / menüsünde adıyla görünür."}
      ],
      "sorular": [
        {
          "id": "b02-d4-s1",
          "tur": "eslestir",
          "soru": "Bağlam komutlarını işleriyle eşleştir.",
          "ciftler": [
            ["/context", "Bağlamın neyle dolduğunu gösterir"],
            ["/compact", "Konuşmayı özetleyip bağlamda yer açar"],
            ["/clear", "Boş bağlamla yeni bir konuşma başlatır"],
            ["/rewind", "Konuşmayı ya da kodu önceki bir noktaya geri sarar"]
          ],
          "ipucu": "Komut adlarının İngilizce anlamını düşün: bağlam, sıkıştır, temizle, geri sar.",
          "aciklama": "/compact aynı konuşmayı sürdürerek yer açar, /clear ise yeni bir konuşma başlatır. /rewind önceki bir noktaya döner, /context yalnız durumu gösterir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/commands",
            "kopya": "commands.md",
            "okuma": "2026-11-15",
            "dayanak": "/context bağlam kullanımını gösterir, /compact konuşmayı özetleyerek yer açar, /clear boş bağlamla yeni bir konuşma başlatır, /rewind konuşmayı ya da kodu önceki bir noktaya geri sarar."
          }
        },
        {
          "id": "b02-d4-s2",
          "tur": "eslestir",
          "soru": "Ayar komutlarını işleriyle eşleştir.",
          "ciftler": [
            ["/memory", "CLAUDE.md dosyalarını düzenlemeyi açar"],
            ["/hooks", "Kanca ayarlarını gösterir"],
            ["/agents", "Alt ajan oluşturmayı Claude'dan istemeyi hatırlatır"],
            ["/mcp", "MCP sunucu bağlantılarını yönetir"]
          ],
          "ipucu": "Hafıza, kanca, ajan ve sunucu kelimelerini komut adlarında ara.",
          "aciklama": "/memory hafıza dosyası olan CLAUDE.md içindir, /hooks kancaları gösterir. /agents bugünkü sürümde alt ajanı Claude'dan istemeyi hatırlatır, /mcp sunucu bağlantılarını yönetir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/commands",
            "kopya": "commands.md",
            "okuma": "2026-11-15",
            "dayanak": "/memory CLAUDE.md dosyalarını düzenler, /hooks kanca ayarlarını gösterir, /agents alt ajanları Claude'dan istemeyi hatırlatır, /mcp MCP sunucu bağlantılarını yönetir."
          }
        },
        {
          "id": "b02-d4-s3",
          "tur": "coktan",
          "soru": "Oturum uzadı. Aynı konuşmaya devam etmek ama bağlamda yer açmak istiyorsun. Hangi komut?",
          "secenekler": [
            "/clear",
            "/compact",
            "/rewind",
            "/context"
          ],
          "dogru": 1,
          "ipucu": "Biri yeni konuşma başlatır, öteki aynı konuşmayı özetler.",
          "aciklama": "/clear yeni ve boş bir konuşma başlatır, /context yalnız bağlamın durumunu gösterir. Aynı konuşmayı sürdürüp yer açmak için belge /compact'ı önerir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/commands",
            "kopya": "commands.md",
            "okuma": "2026-11-15",
            "dayanak": "Aynı konuşmayı sürdürürken bağlamda yer açmak için /clear yerine /compact kullanılır."
          }
        },
        {
          "id": "b02-d4-s4",
          "tur": "coktan",
          "soru": "CLAUDE.md satır 9: kullanıcı 'proje — açılış' yazarsa acilis skill'ini koş. Buna göre açılış skill'i ne zaman koşar?",
          "secenekler": [
            "Her mesajdan önce, sen istemeden kendiliğinden",
            "Yalnız / menüsünden adıyla seçildiğinde",
            "Sen 'proje — açılış' yazdığında"
          ],
          "dogru": 2,
          "ipucu": "Satırda 'yazarsa' kelimesinden önce kimin ne yaptığına bak.",
          "aciklama": "Satır 9, açılış ifadesi yazıldığında acilis skill'inin koşmasını söyler. Yani / menüsü bir skill'i başlatmanın tek yolu değildir.",
          "kaynak": {
            "adres": "CLAUDE.md:9",
            "okuma": "2026-11-15",
            "dayanak": "Kullanıcı 'proje — açılış' yazarsa acilis skill'i koşulur."
          }
        },
        {
          "id": "b02-d4-s5",
          "tur": "coktan",
          "soru": "Klasördeki .claude/skills/kapanis/SKILL.md dosyasının 2. satırı 'name: kapanis'. Bu skill / menüsünde hangi adla görünür?",
          "secenekler": [
            "/kapanis",
            "/SKILL",
            "/skills-kapanis"
          ],
          "dogru": 0,
          "ipucu": "Skill dosyasındaki name alanının menüde ne işe yaradığını düşün.",
          "aciklama": "Skill'in name alanı / menüsünde görünen komut adıdır. Bu yüzden kapanış skill'ini menüde bu adla bulursun.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Skill'in name alanı / menüsünde görünen komut adıdır; yazılmazsa klasörün adı kullanılır."
          }
        },
        {
          "id": "b02-d4-s6",
          "tur": "coktan",
          "soru": "Code sekmesinde /permissions yazdın. Ne olur?",
          "secenekler": [
            "İzin kurallarını düzenleyeceğin ayrı bir panel açılır",
            "'isn't available in this environment' cevabı gelir",
            "Komut sessizce yok sayılır"
          ],
          "dogru": 1,
          "ipucu": "Terminalde panel açan komutların Code sekmesinde nasıl davrandığını hatırla.",
          "aciklama": "Terminalde panel açan ve argüman alan bir biçimi olmayan komutlar Code sekmesinde bu cevabı verir. İzin kurallarını yönetmek için ayar dosyası doğrudan düzenlenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Argüman alan bir biçimi olmayan /permissions gibi komutlar Code sekmesinde isn't available in this environment cevabını verir."
          }
        },
        {
          "id": "b02-d4-s7",
          "tur": "dogru-yanlis",
          "soru": "Code sekmesinde / yazınca menüde yalnız yerleşik komutlar görünür; skill'ler orada görünmez.",
          "dogru": false,
          "ipucu": "+ düğmesindeki Slash commands menüsünde neleri gezebildiğini düşün.",
          "aciklama": "Yanlış: / menüsünde yerleşik komutlar, kendi skill'lerin ve eklenti skill'leri birlikte görünür. Skill'ler gerektiğinde çağırdığın tekrar kullanılabilir istemlerdir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop-quickstart",
            "kopya": "desktop-quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "/ yazınca ya da + düğmesinden Slash commands'ı seçince yerleşik komutları, kendi skill'lerini ve eklenti skill'lerini gezersin."
          }
        }
      ]
    },
    {
      "id": "b02-d5",
      "baslik": "Sık iş akışları",
      "hedefler": [
        "Kodu anlamak, hata düzeltmek ve önce planlamak akışlarını sayıp anlatabilir.",
        "Bu akışlardan birinin adımlarını sırasıyla anlatabilir."
      ],
      "anlatim": [
        "İş akışı (workflow), sık yapılan bir işin hazır adımlarıdır. Kodu anlamak için önce geniş sorularla başlarsın, 'bu proje ne yapıyor?' gibi, sonra belirli parçalara inersin. Hata düzeltmek için önce hatayı Claude'a gösterirsin, sonra birkaç düzeltme yolu istersin, en son seçtiğini uygulatırsın. Hatayı gösterirken onu yeniden üretme adımlarını, yani hatayı tekrar ortaya çıkaran adımları da söylersin.",
        "Önce planlamak için mod seçicide Plan'ı seçersin; bu plan modudur (plan mode). Claude dosyaları okur, keşif için komut çalıştırır, bir plan önerir ama kaynak kodunu düzenlemez. Planı onaylayınca Accept edits ya da Manual moduna geçip uygulatırsın. Terminaldeki Shift+Tab'ın masaüstü karşılığı bu mod seçicidir.",
        "Bizim klasörde plan kapısı var (CLAUDE.md satır 43): iş birden fazla oturuma yayılacaksa, geri alınamayan bir şeye dokunuyorsa ya da senin yazdığın bir kuralı değiştiriyorsa Claude önce plan sunar ve orada durur. Plan, başka şeylerin yanında bulgu özeti, yapılacaklar sırası ve numaralı en az iki gerçek seçenek taşır."
      ],
      "terimler": [
        {"tr": "iş akışı", "en": "workflow", "aciklama": "Sık yapılan bir işin adım adım izlenen hazır yolu."},
        {"tr": "plan modu", "en": "plan mode", "aciklama": "Claude'un okuyup keşfettiği, plan önerdiği ama kaynak kodunu düzenlemediği izin modu."}
      ],
      "sorular": [
        {
          "id": "b02-d5-s1",
          "tur": "sirala",
          "soru": "Hata düzeltme akışının adımlarını sıraya koy.",
          "adimlar": [
            "Hatayı Claude'a göster",
            "Birkaç düzeltme yolu öner diye iste",
            "Seçtiğin düzeltmeyi uygulat"
          ],
          "ipucu": "Önce Claude'un sorunu görmesi, sonra seçenekler, en son değişiklik.",
          "aciklama": "Belgedeki tarif önce hatayı paylaşmak, sonra düzeltme önerisi istemek, en son düzeltmeyi uygulatmaktır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/common-workflows",
            "kopya": "common-workflows.md",
            "okuma": "2026-11-15",
            "dayanak": "Hata düzeltme tarifi üç adımdır: hatayı Claude'la paylaş, düzeltme önerileri iste, düzeltmeyi uygulat."
          }
        },
        {
          "id": "b02-d5-s2",
          "tur": "coktan",
          "soru": "Yeni bir projeyi anlamaya çalışıyorsun. Belgenin önerdiği soru sırası hangisi?",
          "secenekler": [
            "Önce tek bir dosyanın ayrıntısı, sonra genel bakış",
            "Önce kodu değiştirmek, sonra ne yaptığını sormak",
            "Önce geniş sorularla genel bakış, sonra belirli parçalar"
          ],
          "dogru": 2,
          "ipucu": "Bir haritaya önce uzaktan mı, yakından mı bakarsın?",
          "aciklama": "Belge geniş sorularla başlayıp sonra belirli alanlara inmeni önerir. Önce genel bakış, sonra ayrıntı gelir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/common-workflows",
            "kopya": "common-workflows.md",
            "okuma": "2026-11-15",
            "dayanak": "Geniş sorularla başla, sonra belirli alanlara in."
          }
        },
        {
          "id": "b02-d5-s3",
          "tur": "coktan",
          "soru": "Büyük bir değişiklikten önce Claude'un yaklaşımını görmek, hiçbir dosyanın düzenlenmemesini istiyorsun. Mod seçicide hangisini seçersin?",
          "secenekler": [
            "Accept edits",
            "Plan",
            "Auto"
          ],
          "dogru": 1,
          "ipucu": "Hangi mod önce yol haritası çıkarır?",
          "aciklama": "Bu modda Claude dosya düzenlemeden bir yaklaşım önerir; büyük bir yeniden düzenlemeden önce işe yarar. Accept edits ve Auto ise değişiklik yapar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop-quickstart",
            "kopya": "desktop-quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "Plan modunda Claude hiçbir dosyayı düzenlemeden bir yaklaşım önerir ve bu büyük bir yeniden düzenlemeden önce işe yarar."
          }
        },
        {
          "id": "b02-d5-s4",
          "tur": "dogru-yanlis",
          "soru": "Plan modunda Claude dosyaları okuyabilir ve keşif için komut çalıştırabilir, ama kaynak kodunu düzenlemez.",
          "dogru": true,
          "ipucu": "Plan modunun okuma ile yazma arasında nereye çizgi çektiğini düşün.",
          "aciklama": "Doğru: plan modunda Claude okur ve keşif komutları çalıştırır, sonra kaynak kodunu düzenlemeden bir plan önerir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Plan modunda Claude keşif için dosya okur ve komut çalıştırır, sonra kaynak kodunu düzenlemeden bir plan önerir."
          }
        },
        {
          "id": "b02-d5-s5",
          "tur": "coktan",
          "soru": "CLAUDE.md satır 43'teki plan kapısına göre hangi işte Claude önce plan sunup durur?",
          "secenekler": [
            "Birden fazla oturuma yayılacak bir iş",
            "Bir dosyayı değiştirmeden yalnız okumak",
            "Bir sorunun cevabını sohbette yazmak"
          ],
          "dogru": 0,
          "ipucu": "Yalnız okumanın ya da sohbette cevap yazmanın bir şeyi değiştirip değiştirmediğini düşün.",
          "aciklama": "Satır 43, birden fazla oturuma yayılacak işi plan kapısının koşulları arasında sayar. Yalnız okumak ya da sohbette cevap yazmak bu koşullara girmez.",
          "kaynak": {
            "adres": "CLAUDE.md:43",
            "okuma": "2026-11-15",
            "dayanak": "İş birden fazla oturuma yayılacaksa, geri alınamayan bir şeye dokunuyorsa ya da kullanıcının yazdığı bir kuralı değiştiriyorsa önce plan sunulur ve orada durulur."
          }
        },
        {
          "id": "b02-d5-s6",
          "tur": "coktan",
          "soru": "Claude'a bir hatayı düzelttireceksin. Hangi istem daha iyi?",
          "secenekler": [
            "Giriş hatasını düzelt",
            "Giriş sayfasında bir şeyler ters gidiyor, ne olduğunu bilmiyorum, sen bulup düzelt",
            "Oturum süresi dolunca giriş başarısız; src/auth/ içindeki yenilemeye bak, düzelt"
          ],
          "dogru": 2,
          "ipucu": "Hangisi dosyanın yerini ve belirtiyi söylüyor?",
          "aciklama": "Belge dosyanın yerini ve belirtiyi baştan söyleyen istemin çoğu zaman sonradan bir düzeltme turu kazandırdığını yazar. Genel kalan istem, kısa da olsa uzun da olsa, Claude'a bu bilgiyi vermez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Dosyanın adını verip belirtiyi anlatır ve düzelmiş halin neye benzeyeceğini baştan söylersen çoğu zaman sonradan bir düzeltme turundan kurtulursun."
          }
        },
        {
          "id": "b02-d5-s7",
          "tur": "bosluk",
          "soru": "Hata düzeltme akışında öneri: hatayı ___ adımlarını da Claude'a söyle.",
          "secenekler": [
            "kullanıcıdan gizlemenin",
            "yeniden üretmenin",
            "kayıt dosyasından silmenin"
          ],
          "dogru": 1,
          "ipucu": "Hatayı Claude'a gösterirken başka neyi de söylediğini hatırla.",
          "aciklama": "Yeniden üretme adımları, hatayı tekrar ortaya çıkaran adımlardır; belge bunları Claude'a söylemeni önerir. Hatanın ara sıra mı, her seferinde mi çıktığını söylemek de önerilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/common-workflows",
            "kopya": "common-workflows.md",
            "okuma": "2026-11-15",
            "dayanak": "Hatayı yeniden üretme adımlarını Claude'a söyle."
          }
        }
      ]
    },
    {
      "id": "b02-d6",
      "baslik": "Git ve kalıcı kayıt (commit)",
      "hedefler": [
        "Commit'in (kalıcı kayıt) git geçmişine eklenen ve geri dönebileceğin bir kayıt olduğunu anlatabilir.",
        "Claude'dan commit istemeyi sade bir cümleyle anlatabilir.",
        "Bu klasörde commit'in ne zaman atıldığını ve git'te neyin sorulduğunu ayırt edebilir."
      ],
      "anlatim": [
        "Git, klasördeki değişikliklerin geçmişini tutan sürüm denetimi (version control) aracıdır. Commit (kalıcı kayıt), bu geçmişe eklenen kayıttır. Claude'un geri sarma noktaları (checkpoint) oturum içinde hızlı kurtarma için tasarlanmıştır; kalıcı sürüm geçmişi ve geri dönüş için git kullanılır.",
        "Git'i konuşarak kullanırsın: 'hangi dosyaları değiştirdim?' ya da 'değişikliklerimi açıklayıcı bir mesajla commit et' yazman yeter. Commit'ten önce değişikliği kendin dene ve bir inceleyici alt ajana baktır. Sonra Claude commit mesajını senin tarzında yazar.",
        "Bizim klasörde kural: klasör git ile tutulur ve her iş bitince commit atılır (CLAUDE.md satır 112). Ama git'i uzak depoya göndermek (yedek deposuna kapanış gönderimi hariç) ve git geçmişini geri almak her seferinde sana sorulur (CLAUDE.md satır 46)."
      ],
      "terimler": [
        {"tr": "kalıcı kayıt", "en": "commit", "aciklama": "Değişikliklerin git geçmişine eklenen kalıcı kaydı; gerektiğinde git ile bu kayda dönülür."},
        {"tr": "geri sarma noktası", "en": "checkpoint", "aciklama": "Claude'un oturum içinde hızlı kurtarma için tuttuğu nokta; git'in yerini tutmaz."},
        {"tr": "sürüm denetimi", "en": "version control", "aciklama": "Dosyaların değişiklik geçmişini tutan sistem; çoğu projenin kullandığı git gibi."}
      ],
      "sorular": [
        {
          "id": "b02-d6-s1",
          "tur": "coktan",
          "soru": "Commit en iyi hangisiyle tanımlanır?",
          "secenekler": [
            "Oturum içindeki geçici geri sarma noktası",
            "Sürüm geçmişine eklenen kalıcı kayıt",
            "Claude'un yaptığı işin kısa özeti",
            "Bağlamı özetleyip yer açan komut"
          ],
          "dogru": 1,
          "ipucu": "Geri sarma noktası ile git commit'i arasındaki ayrımı düşün.",
          "aciklama": "Belge geri sarma noktalarını oturum içi hızlı kurtarma, git commit'lerini kalıcı sürüm geçmişi diye ayırır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Geri sarma noktaları oturum içinde hızlı kurtarma içindir; kalıcı sürüm geçmişi için commit ve dallarla git gibi sürüm denetimini kullanmaya devam et."
          }
        },
        {
          "id": "b02-d6-s2",
          "tur": "dogru-yanlis",
          "soru": "Claude'un geri sarma noktaları (checkpoint) git'in yerini tutar; ayrıca commit atmana gerek yoktur.",
          "dogru": false,
          "ipucu": "Geri sarmanın ne için tasarlandığını hatırla.",
          "aciklama": "Yanlış: belge geri sarmanın sürüm denetiminin yerini tutmadığını söyler. Kalıcı geçmiş ve geri dönüş için git commit'leri gerekir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Geri sarma noktaları sürüm denetiminin yerini tutmaz; kalıcı sürüm geçmişi için git kullanmaya devam edilir."
          }
        },
        {
          "id": "b02-d6-s3",
          "tur": "coktan",
          "soru": "Değişikliklerini kaydetmek istiyorsun. Claude'a hangisini yazarsın?",
          "secenekler": [
            "Bana git commit komutunu yaz, ben kendim çalıştırayım",
            "Dosyaların bir kopyasını masaüstüne at",
            "Değişikliklerimi açıklayıcı bir mesajla commit et"
          ],
          "dogru": 2,
          "ipucu": "Git işini konuşarak yaptırabildiğini hatırla.",
          "aciklama": "Claude Code git işlerini konuşmaya çevirir; ne istediğini yazman yeter. Komutu sana yazdırmak bu klasörün kuralına da aykırıdır (CLAUDE.md satır 23).",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/quickstart",
            "kopya": "quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code git işlerini konuşmaya çevirir; örneğin değişikliklerimi açıklayıcı bir mesajla commit et diye yazabilirsin."
          }
        },
        {
          "id": "b02-d6-s4",
          "tur": "coktan",
          "soru": "Claude bu klasörde bir işi bitirdi. CLAUDE.md satır 112'ye göre sıradaki adım hangisi?",
          "secenekler": [
            "Biten işi bir commit'le git geçmişine kaydetmek",
            "Commit'i hafta sonuna bırakmak",
            "Değişikliği kaydetmeden yeni işe geçmek"
          ],
          "dogru": 0,
          "ipucu": "Kuralın commit'i hangi anda istediğini hatırla.",
          "aciklama": "Satır 112'ye göre klasör git ile tutulur ve her iş bitince commit atılır. Böylece her iş geçmişte ayrı bir kayıt olarak kalır.",
          "kaynak": {
            "adres": "CLAUDE.md:112",
            "okuma": "2026-11-15",
            "dayanak": "Sürüm kaydı: klasör git ile tutulur, her iş bitince commit atılır."
          }
        },
        {
          "id": "b02-d6-s5",
          "tur": "coktan",
          "soru": "CLAUDE.md satır 46'ya göre bu klasörde hangisi her seferinde sana sorulur?",
          "secenekler": [
            "Her iş bitince değişikliği yerel bir commit ile git geçmişine kaydetmek",
            "Hangi dosyaların değiştiğine bakmak",
            "Git'i uzak depoya göndermek (yedek deposuna kapanış gönderimi hariç)"
          ],
          "dogru": 2,
          "ipucu": "Yerel bir kayıt ile uzak depoya gönderim arasındaki farkı düşün.",
          "aciklama": "Satır 46, git'i uzağa göndermeyi dış sisteme yazma sayar ve her seferinde sorar; yedek deposuna kapanış gönderimi bunun dışındadır. Yerel commit bu listede yoktur.",
          "kaynak": {
            "adres": "CLAUDE.md:46",
            "okuma": "2026-11-15",
            "dayanak": "Dış sisteme yazma, git'i uzağa gönderme dahil, her seferinde sorulur ve önceki onay geçmez; yedek deposuna kapanış gönderimi bunun dışındadır."
          }
        },
        {
          "id": "b02-d6-s6",
          "tur": "sirala",
          "soru": "Kursun önerdiği dört adımlı iş akışını sıraya koy.",
          "adimlar": [
            "Keşfet: Claude ilgili dosyaları okur",
            "Planla: Claude bir eylem planı çıkarır, sen gözden geçirirsin",
            "Kodla: plan onaylanınca Claude uygular",
            "Commit: test edip gözden geçirdikten sonra kaydedersin"
          ],
          "ipucu": "Kod yazılmadan önce iki adım, yazıldıktan sonra bir adım var.",
          "aciklama": "Kurs sırayı Keşfet, Planla, Kodla, Commit diye verir. En kolay yön düzeltmesi planda, kod yazılmadan önce yapılır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/the-explore-plan-code-commit-workflow",
            "kopya": "ders-101-05-explore-plan-code-commit.md",
            "okuma": "2026-11-15",
            "dayanak": "Kursun önerdiği iş akışı sırasıyla Keşfet, Planla, Kodla ve Commit adımlarından oluşur."
          }
        },
        {
          "id": "b02-d6-s7",
          "tur": "bosluk",
          "soru": "Commit'ten önce işine temiz gözle bakması için bir ___ çalıştırman önerilir.",
          "secenekler": [
            "bağlam sıkıştırma komutu",
            "kod inceleyici alt ajan",
            "yeni oturum adı"
          ],
          "dogru": 1,
          "ipucu": "Oturumun önyargısını taşımayan bir göz düşün.",
          "aciklama": "Kurs commit'ten önce bir alt ajan kod inceleyicisi çalıştırmanı önerir. Alt ajan ana oturumun önyargısını taşımaz.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/the-explore-plan-code-commit-workflow",
            "kopya": "ders-101-05-explore-plan-code-commit.md",
            "okuma": "2026-11-15",
            "dayanak": "Commit'ten önce işine bakması için bir alt ajan kod inceleyicisi çalıştır; alt ajan ana ajanın oturumdan gelen önyargısını taşımaz."
          }
        }
      ]
    }
  ]
});
