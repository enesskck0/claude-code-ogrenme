// icerik/birim-11.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b11",
  "sira": 11,
  "baslik": "Ayar dosyaları",
  "amac": "Claude Code'un ayar dosyalarını, hangisinin kimi etkilediğini ve çakışınca hangisinin kazandığını öğrenip bir ayar ya da kanca beklendiği gibi çalışmadığında kaynağını bulabilmek.",
  "dersler": [
    {
      "id": "b11-d1",
      "baslik": "settings.json nedir, kim için",
      "hedefler": [
        "Kullanıcı, paylaşılan proje ve yerel proje kapsamlarını (scope) ve kimi etkilediklerini anlatabilir",
        "Git'e giren ayar dosyasını git dışında kalandan ayırt edebilir"
      ],
      "anlatim": [
        "Ayar dosyası (settings file) Claude Code'un davranışını değiştiren JSON anahtarlarını taşır. Kurulumla gelmez; dosyayı sen, Claude Code ya da kurumun oluşturur.",
        "Yoldaki ~ ev klasörünü gösterir: kullanıcı dosyası ~/.claude/settings.json her projende yalnız seni etkiler. Paylaşılan proje dosyası .claude/settings.json projenin içindedir, klasördeki herkesi etkiler.",
        "Yerel proje dosyası .claude/settings.local.json yalnız seni, yalnız bu projede etkiler. Bir Bash iznine 'Yes, and don't ask again' dersen onay buraya yazılır.",
        "Bizde .claude/settings.json git'e girer. .claude/settings.local.json ise .gitignore'da yazılı olduğu için git dışında kalır.",
        "Klasörümüzde kendi kancaları olan bir paket var: ikinci beyin paketi. Onun kanca ayarları .claude/settings.local.json'da durur.",
        ".claude/settings.local.json git'e girmediği için değişikliği commit'te görünmez. denetim.py'nin D13 kontrolü onu son bilinen halinin damgasıyla karşılaştırır, fark görünce uyarır."
      ],
      "terimler": [
        {
          "tr": "ayar dosyası",
          "en": "settings file",
          "aciklama": "Claude Code'un davranışını değiştiren anahtarları taşıyan JSON dosyası."
        },
        {
          "tr": "kapsam",
          "en": "scope",
          "aciklama": "Bir ayarın kimleri ve hangi projeleri etkilediği."
        }
      ],
      "sorular": [
        {
          "id": "b11-d1-s2",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Claude'a kullanıcı ayar dosyanı sordun, 'böyle bir dosya yok' dedi. Bu durum ___.",
          "secenekler": [
            "kurulumun yarım kaldığını gösterir",
            "olağandır; dosya ilk ayar değişikliğinde yazılır",
            "ayarların hesabında saklandığını gösterir"
          ],
          "dogru": 1,
          "ipucu": "Bu dosyanın ne zaman ortaya çıktığını düşün.",
          "aciklama": "Kurulum hiçbir ayar dosyası açmaz. Kullanıcı dosyasını sen açarsın ya da Claude Code bir seçeneği ilk değiştirdiğinde yazar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code'u kurmak hiçbir ayar dosyası oluşturmaz; kullanıcı dosyasını sen oluşturursun ya da Claude Code bir seçeneği ilk değiştirdiğinde yazar."
          }
        },
        {
          "id": "b11-d1-s7",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bir ayar birden bütün projelerinde geçerli oldu. Claude onu hangi dosyaya yazmış olabilir?",
          "secenekler": [
            "Yolu ~ ile başlayan dosyaya",
            "Projenin içindeki .claude/settings.json'a",
            "Her projeye ayrı kopyalanan bir dosyaya"
          ],
          "dogru": 0,
          "ipucu": "Yolun başındaki işaretin neyi gösterdiğini düşün.",
          "aciklama": "Bütün projelerde geçen ayar ev klasöründeki kullanıcı dosyasındadır, yolu ~ ile başlar. Projenin içindeki dosya yalnız o projeyi etkiler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Kullanıcı dosyası ~/.claude/settings.json bu makinedeki her projede seni etkiler, yalın .claude ise projenin içindeki klasördür."
          }
        },
        {
          "id": "b11-d1-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "'Yes, and don't ask again' dediğin komut o projede artık sorulmuyor, başka projede yine onay istiyor. Neden?",
          "secenekler": [
            "Onay oturum kapanınca silinir",
            "Onay kullanıcı dosyasına yazıldı, o da tek projede okunur",
            "Onay yalnız o projenin yerel dosyasına yazıldı"
          ],
          "dogru": 2,
          "ipucu": "Onayın hangi kapsamdaki dosyaya yazıldığını düşün.",
          "aciklama": "Claude Code bu onayı o projenin .claude/settings.local.json dosyasına yazar; öteki projeler kendi yerel dosyalarını okur. Kullanıcı dosyasına yazılsaydı her projede geçerdi.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir Bash komutu için 'Yes, and don't ask again' seçersen Claude Code bu onayı .claude/settings.local.json dosyasına allow kuralı olarak kaydeder."
          }
        },
        {
          "id": "b11-d1-s4",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Yerel dosyandaki bir kanca ayarı değişti ama hiçbir commit bunu göstermiyor, çünkü dosya ___.",
          "secenekler": [
            "henüz commit edilmedi",
            "git dışında tutuluyor",
            "ayar dosyası olduğu için git izlemez"
          ],
          "dogru": 1,
          "ipucu": ".gitignore'da hangi dosyanın yazılı olduğunu düşün.",
          "aciklama": ".gitignore .claude/settings.local.json'u git dışında tutar, bu yüzden değişikliği hiç commit'e girmez. Paylaşılan .claude/settings.json ise git'e girer.",
          "kaynak": {
            "adres": ".gitignore",
            "okuma": "2026-11-24",
            "dayanak": ".gitignore, .claude/settings.local.json dosyasını git dışında tutar.",
            "soz": ".claude/settings.local.json"
          }
        },
        {
          "id": "b11-d1-s5",
          "tur": "coktan",
          "kart": 4,
          "soru": "İkinci beyin paketinin kancaları hiç çalışmıyor, öteki kancalarımız çalışıyor. İlk hangi dosyaya bakılır?",
          "secenekler": [
            "Yerel proje dosyasına",
            "Paylaşılan proje dosyasına",
            "Kullanıcı ayar dosyasına"
          ],
          "dogru": 0,
          "ipucu": "Paketin kanca ayarlarını hangi dosyanın taşıdığını düşün.",
          "aciklama": "Paketin kanca ayarları .claude/settings.local.json'dadır. Bu dosya yoksa D13 paketin kancalarının çalışmadığını yazar.",
          "kaynak": {
            "adres": "denetim.py",
            "okuma": "2026-11-24",
            "dayanak": "D13, kanca ayar dosyası .claude/settings.local.json yoksa paketin kancalarının çalışmadığını yazar.",
            "soz": "damga var, kanca ayar dosyası yok (paketin kancaları çalışmaz)"
          }
        },
        {
          "id": "b11-d1-s6",
          "tur": "coktan",
          "kart": 5,
          "soru": "Denetim 'kanca ayar dosyası değişti' diye uyardı; sen bir şey değiştirmedin. Ne yaparsın?",
          "secenekler": [
            "Damgayı yenilerim, uyarı kapanır",
            "Git'ten önceki hali geri alırım",
            "Damgayı yenilemeden kaynağı araştırtırım"
          ],
          "dogru": 2,
          "ipucu": "Bilmediğin bir değişikliği onaylamanın ve git'te olmayan bir hali aramanın sonucunu düşün.",
          "aciklama": "Damgayı yenilemek değişikliği onaylamaktır; bilmediğin değişiklikte önce kaynağı bulunur. Dosya git dışında olduğu için git'te önceki hali yoktur.",
          "kaynak": {
            "adres": "denetim.py",
            "okuma": "2026-11-24",
            "dayanak": "D13 uyarısı, değişiklik bilerek yapıldıysa damganın yenilenmesini, değilse git'te önceki hal olmadığı için kullanıcıya söylenmesini ister.",
            "soz": "değilse git'teki önceki hal yok, kullanıcıya söyle"
          }
        }
      ]
    },
    {
      "id": "b11-d2",
      "baslik": "Öncelik sırası",
      "hedefler": [
        "Beş ayar katmanını (level) yüksekten alçağa sırasıyla anlatabilir",
        "Aynı anahtar iki yerde olunca hangisinin kazandığını, listelerin ve kancaların ise birleştiğini ayırt edebilir"
      ],
      "anlatim": [
        "Ayar katmanları yüksekten alçağa: kurum, komut satırı (--settings), yerel proje (.claude/settings.local.json), paylaşılan proje (.claude/settings.json), kullanıcı (~/.claude/settings.json).",
        "Aynı anahtar birden çok yerde yazılıysa Claude Code en yüksek katmanın değerini kullanır. Bu sıraya öncelik (precedence) denir.",
        "Liste tutan anahtarlar farklı işler: izin listesi (permissions.allow) iki dosyada varsa Claude Code ikisini birleştirir. Kancalar da dosyalar arasında birleşir.",
        "Yerel proje dosyası paylaşılan proje dosyasının üstündedir ve yalnız seni etkiler."
      ],
      "terimler": [
        {
          "tr": "öncelik",
          "en": "precedence",
          "aciklama": "Aynı ayar birden çok yerde olunca hangisinin geçerli olduğunu belirleyen sıra."
        },
        {
          "tr": "katman",
          "en": "level",
          "aciklama": "Öncelik sırasındaki her basamak: kurum, komut satırı, yerel proje, paylaşılan proje, kullanıcı."
        }
      ],
      "sorular": [
        {
          "id": "b11-d2-s4",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Yerel dosyana false yazdın ama ipucu satırı hâlâ görünüyor; onu açık tutan büyük olasılıkla ___.",
          "secenekler": [
            "kullanıcı dosyan",
            "kurum ayarı",
            "paylaşılan proje dosyası"
          ],
          "dogru": 1,
          "ipucu": "Yerel dosyanın üstünde hangi katmanların kaldığını düşün.",
          "aciklama": "Yerel dosyanın üstünde yalnız komut satırı ve kurum ayarı vardır; kurum ayarını hiçbir kişisel dosya değiştiremez. Kullanıcı ve paylaşılan dosya yerelin altındadır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Kurum ayarı bu anahtarı true yaparsa kullanıcı, proje ya da yerel ayara yazılan hiçbir şey ve --settings onu kapatamaz, çünkü en üst katman kurumdur."
          }
        },
        {
          "id": "b11-d2-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Kullanıcı dosyana autoMemoryEnabled true yazdın; öteki projelerde hafıza açık, bu klasörde kapalı. Neden?",
          "secenekler": [
            "Bu klasörün proje dosyası false diyor ve üstte",
            "Kullanıcı dosyası yalnız yeni projelerde okunur",
            "Bu klasörde hafıza hiçbir dosyayla açılamaz"
          ],
          "dogru": 0,
          "ipucu": "Aynı anahtar iki katmanda yazılıysa hangisinin geçtiğini düşün.",
          "aciklama": "Bizim .claude/settings.json'da autoMemoryEnabled false yazar. Paylaşılan proje kullanıcı katmanının üstünde olduğu için bu klasörde false geçer.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Aynı anahtar birden çok yerde olunca Claude Code onu belirleyen en yüksek katmanın değerini kullanır ve paylaşılan proje kullanıcının üstündedir."
          }
        },
        {
          "id": "b11-d2-s5",
          "tur": "coktan",
          "kart": 2,
          "soru": "Proje dosyasının izin listesinde A, kullanıcı dosyanınkinde B komutu var. Bu projede hangisi sormadan koşar?",
          "secenekler": [
            "Yalnız A, proje dosyası üstte",
            "Yalnız B, kendi dosyan önce gelir",
            "A ve B birlikte"
          ],
          "dogru": 2,
          "ipucu": "Liste tutan bir anahtarla tek değer tutan anahtarın farkını düşün.",
          "aciklama": "İzin listesi gibi liste anahtarlarında Claude Code birini seçmez, listeleri birleştirir. Bu yüzden iki komut da sormadan koşar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Aynı liste anahtarı, ör. permissions.allow, birden çok dosyada olursa Claude Code birini seçmek yerine listeleri birleştirir."
          }
        },
        {
          "id": "b11-d2-s7",
          "tur": "coktan",
          "kart": 2,
          "soru": "Yerel dosyana bir kanca ekledin; o da paylaşılan dosyadaki kancalar da çalışıyor. Bu ne gösterir?",
          "secenekler": [
            "Öncelik bozuk; yerel dosya ötekileri ezmeliydi",
            "Olağan; iki dosyanın kancaları birlikte çalışır",
            "Kancalardan biri iki kez kaydedilmiş"
          ],
          "dogru": 1,
          "ipucu": "Tek değer tutan anahtarla kancaların dosyalar arasında nasıl davrandığını karşılaştır.",
          "aciklama": "Kancalar dosyalar arasında birbirinin yerine geçmez, birleşir. Bu yüzden iki dosyadaki kancalar birlikte çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings-reference",
            "kopya": "settings-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "Kancalar dosyalar arasında birbirinin yerine geçmez, birleşir."
          }
        },
        {
          "id": "b11-d2-s3",
          "tur": "coktan",
          "kart": 3,
          "soru": "Takımın paylaşılan dosyası bir anahtarı true yapıyor. Takımı etkilemeden kendi false değerini geçirmek için nereye yazarsın?",
          "secenekler": [
            "Kullanıcı dosyana",
            "CLAUDE.md'ye bir cümle olarak",
            "Yerel proje dosyasına"
          ],
          "dogru": 2,
          "ipucu": "Paylaşılan projenin üstünde duran ve yalnız seni etkileyen katmanı düşün.",
          "aciklama": "Yerel proje dosyası paylaşılanın üstündedir ve yalnız seni etkiler. Kullanıcı dosyası paylaşılanın altında kaldığı için orada ezilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Değeri o projedeki .claude/settings.local.json'a eklersen, yerel proje paylaşılan projenin üstünde olduğu için yalnız senin oturumların değişir."
          }
        },
        {
          "id": "b11-d2-s8",
          "tur": "coktan",
          "kart": 3,
          "soru": "Paylaşılan dosyaya eklenen ayar arkadaşlarında işliyor, sende işlemiyor. En olası kaynak?",
          "secenekler": [
            "Kullanıcı dosyanda aynı anahtar farklı",
            "Yerel dosyanda aynı anahtar farklı",
            "Paylaşılan dosya yalnız ilk açılışta okunur"
          ],
          "dogru": 1,
          "ipucu": "Paylaşılan dosyanın üstünde ve altında hangi kişisel dosyaların durduğunu düşün.",
          "aciklama": "Yerel proje dosyası paylaşılanın üstündedir ve yalnız seni etkiler; aynı anahtar orada başka değerdeyse sende o geçer. Kullanıcı dosyası paylaşılanın altında kaldığı için ezemez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Değeri o projedeki .claude/settings.local.json'a eklersen, yerel proje paylaşılan projenin üstünde olduğu için yalnız senin oturumların değişir."
          }
        }
      ]
    },
    {
      "id": "b11-d3",
      "baslik": "Bizim settings.json haritası",
      "hedefler": [
        "Bizim .claude/settings.json'daki kum havuzu (sandbox), izinler (permissions), kancalar (hooks) ve eklentiler (enabledPlugins) bölümlerini ayırt edebilir",
        "Bir belirtiden hangi bölüme bakılacağını anlatabilir"
      ],
      "anlatim": [
        "Bizim .claude/settings.json beş üst anahtar taşır. İlki autoMemoryEnabled false: Claude otomatik hafızadan okumaz, oraya yazmaz.",
        "Kum havuzu (sandbox), Claude'un çalıştırdığı Bash komutlarını dosya sisteminden ve ağdan yalıtır. İçindeki enabled true onu açar.",
        "İzinler (permissions) hangi aracın sormadan kullanılacağını, hangisinde sorulacağını, hangisinin engelleneceğini belirler. Bizde yalnız deny, yani engellenenler listesi var.",
        "Kancalar (hooks) belirli anlarda kendi betiklerimizi çalıştırır. SessionStart, PreToolUse ve Stop gibi adlar kanca olayıdır (hook event): kancanın hangi anda çalışacağını söyler.",
        "PreToolUse araç çağrısından önceki andır; eşleştirici (matcher) bunu belirli araçlara daraltır. Bizde koruma.py'yi çağıran kancanın eşleştiricisinde Bash geçer."
      ],
      "terimler": [
        {
          "tr": "kum havuzu",
          "en": "sandbox",
          "aciklama": "Claude'un çalıştırdığı Bash komutlarını dosya sisteminden ve ağdan yalıtan katman."
        },
        {
          "tr": "izinler",
          "en": "permissions",
          "aciklama": "Hangi aracın sormadan, sorarak ya da hiç kullanılamayacağını belirleyen kurallar."
        },
        {
          "tr": "eşleştirici",
          "en": "matcher",
          "aciklama": "Kancanın hangi araçta çalışacağını seçen metin, ör. Bash ya da Edit|Write."
        },
        {
          "tr": "kanca olayı",
          "en": "hook event",
          "aciklama": "Kancanın çalıştığı an, ör. oturum açılışı ya da araç çağrısından önce."
        }
      ],
      "sorular": [
        {
          "id": "b11-d3-s6",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude 'bunu otomatik hafızama yazdım, sonraki oturumda hatırlarım' dedi. Bu sözü nasıl karşılarsın?",
          "secenekler": [
            "Tamam; otomatik hafıza her projede açıktır",
            "Hatırlamaz; bu klasörde otomatik hafıza kapalı",
            "Hatırlamaz; otomatik hafıza her oturum sonunda silinir"
          ],
          "dogru": 1,
          "ipucu": "Bu klasörde o anahtarın değerini düşün.",
          "aciklama": "Bizim ayarda autoMemoryEnabled false; Claude otomatik hafızayı ne okur ne yazar. Bu yüzden 'hatırlarım' sözü bu klasörde tutmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings-reference",
            "kopya": "settings-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "autoMemoryEnabled false olduğunda Claude otomatik hafıza klasöründen okumaz ve oraya yazmaz."
          }
        },
        {
          "id": "b11-d3-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bash komutu bir klasöre yazamadı, Edit aracı aynı klasöre yazabildi. Kaynağı ne olabilir?",
          "secenekler": [
            "Klasör salt okunur hale gelmiş",
            "Bash aracı hiçbir yerde dosyaya yazamaz, yalnız okur",
            "Kum havuzu Edit'i değil, Bash'i yalıtıyor"
          ],
          "dogru": 2,
          "ipucu": "Yalıtmanın hangi araca uygulandığını düşün.",
          "aciklama": "Kum havuzu yalnız Claude'un Bash komutlarını dosya sisteminden ve ağdan yalıtır; Edit aracı onun dışındadır. Klasör salt okunur olsaydı Edit de yazamazdı.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings-reference",
            "kopya": "settings-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "sandbox.enabled true olduğunda Claude Code Bash komutlarını kum havuzunda çalıştırır."
          }
        },
        {
          "id": "b11-d3-s3",
          "tur": "bosluk",
          "kart": 2,
          "soru": "Claude bir allow kuralı eklerse bizim settings.json'un izinler bölümünde ___.",
          "secenekler": [
            "ilk allow listesi açılır",
            "var olan allow listesi bir satır uzar",
            "kural kum havuzuna taşınır"
          ],
          "dogru": 0,
          "ipucu": "Bizim izinler bölümünde bugün hangi listenin bulunduğunu hatırla.",
          "aciklama": "Bizim permissions bölümünde yalnız deny listesi var; allow kuralı ilk kez sormadan izin veren bir liste açar. Kum havuzu erişimi daraltır, izin vermez.",
          "kaynak": {
            "adres": ".claude/settings.json",
            "okuma": "2026-11-24",
            "dayanak": "permissions bölümünün altında yalnız deny listesi açılır, allow ve ask anahtarı yoktur.",
            "soz": "\"permissions\": { \"deny\": ["
          }
        },
        {
          "id": "b11-d3-s1",
          "tur": "eslestir",
          "kart": 3,
          "soru": "Belirtiyi settings.json'daki kaynağıyla eşleştir.",
          "ciftler": [
            [
              "Bash komutu bizim bir betiğimizin uyarısıyla durdu",
              "hooks (kancalar)"
            ],
            [
              "Bir araç sana hiç sorulmadan engellendi",
              "permissions (izinler)"
            ],
            [
              "Bash komutu çalıştı ama ağa çıkamadı",
              "sandbox (kum havuzu)"
            ]
          ],
          "ipucu": "Hangisi betik çalıştırır, hangisi aracı baştan engeller, hangisi çalışan komutun erişimini daraltır, düşün.",
          "aciklama": "Kendi betiklerimizi belirli anlarda çalıştıran hooks, aracı engelleyen permissions, çalışan Bash komutunu ağdan ve dosya sisteminden yalıtan sandbox.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings-reference",
            "kopya": "settings-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "Anahtar dizinine göre sandbox Bash komutlarını dosya sisteminden ve ağdan yalıtır, permissions izin, sorma ve engelleme kurallarını koyar, hooks yaşam döngüsünün belli anlarında kendi komutlarını çalıştırır."
          }
        },
        {
          "id": "b11-d3-s7",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude yeni bir kanca betiği yazdı ama kanca hiç çalışmıyor. İlk neyi sorarsın?",
          "secenekler": [
            "Kanca CLAUDE.md'de kural olarak yazıldı mı",
            "Kanca settings.json'da bir olaya bağlandı mı",
            "Kanca eklentiler listesinde açık mı"
          ],
          "dogru": 1,
          "ipucu": "Betiğin hangi anda çalışacağını Claude Code nereden öğreniyor, düşün.",
          "aciklama": "Betik kendi başına çalışmaz; settings.json'un hooks bölümünde bir kanca olayına bağlanınca çalışır. CLAUDE.md kanca kaydı taşımaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings-reference",
            "kopya": "settings-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "hooks anahtarı kanca olaylarına göre düzenlenir; her olay eşleştirici gruplarını, her grup da çalışacak komutları taşır."
          }
        },
        {
          "id": "b11-d3-s5",
          "tur": "bosluk",
          "kart": 4,
          "soru": "koruma.py bir Bash komutunu durdurduysa o komut ___.",
          "secenekler": [
            "hiç çalışmamıştır",
            "çalışıp geri alınmıştır",
            "yarısına kadar çalışmıştır"
          ],
          "dogru": 0,
          "ipucu": "Kancanın komuta göre hangi anda çalıştığını düşün.",
          "aciklama": "koruma.py PreToolUse kancasıdır, araç çağrısından önce çalışır. Durdurduğu komut hiç koşmaz, geri alınacak bir şey de kalmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings-reference",
            "kopya": "settings-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "PreToolUse altında matcher Bash olan örnek kanca, her Bash araç çağrısından önce bir betik çalıştırır."
          }
        }
      ]
    },
    {
      "id": "b11-d4",
      "baslik": "Ayar değişikliği kapısı",
      "hedefler": [
        "settings.json değişikliğinin her seferinde sorulduğunu, kanca (hook) eklemenin testi ve doğrulayıcısıyla (verifier) sorulmadan yapılabildiğini ayırt edebilir",
        "Sorulmadan yapılan riskli işin nerede kaydedildiğini anlatabilir"
      ],
      "anlatim": [
        "CLAUDE.md bazı işleri her seferinde sana sordurur. .claude/settings.json ve .claude/settings.local.json değişikliği bu listededir.",
        "Tek istisna kanca ekleme ve değiştirmedir: kanca testi ve doğrulayıcısıyla geliyorsa sorulmaz.",
        "settings.json izin listesini ve kum havuzunu taşır. CLAUDE.md'nin plan kapısı izin ayarı değişikliğini geri alınamayan işler arasında sayar: önce plan sunulur ve durulur.",
        "kanca-denetim skill'i yeni kanca için sırayı koyar: önce ara, sonra kod ve test, kayıt, gerçek kayıtlarda koşu ve doğrulayıcı.",
        "Listedeki bir iş sana sorulmadan yapılırsa olay KARARLAR'a 'Düzeltme: onaysız riskli iş:' önekiyle yazılır."
      ],
      "terimler": [
        {
          "tr": "kanca",
          "en": "hook",
          "aciklama": "Belirli bir anda kendiliğinden çalışan betik; bizimkiler .claude/hooks altında."
        },
        {
          "tr": "doğrulayıcı",
          "en": "verifier",
          "aciklama": "İşi yapandan ayrı, değişikliği sınayan alt ajan."
        }
      ],
      "sorular": [
        {
          "id": "b11-d4-s3",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bir saat önce Claude'un settings.json'da bir eklentiyi açmasına evet dedin. Şimdi aynı eklentiyi kapatmak istiyor. Ne olur?",
          "secenekler": [
            "Az önceki evet yeter, sormadan kapatır",
            "Yine sana sorulur",
            "Tek satırla bildirip kapatır"
          ],
          "dogru": 1,
          "ipucu": "Listedeki bir işin \"her seferinde\" sorulmasının az önceki evete ne yaptığını düşün.",
          "aciklama": "Bu listedeki işler her seferinde sorulur; geçen haftaki onay bugünkü değişikliğe geçmez. Tek satırla bildirip yapmak yalnız listede olmayan onaylı işler içindir.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Listedeki işler her seferinde basitçe sorulur, önceki onay geçmez.",
            "soz": "Her seferinde basitçe sorulanlar, önceki onay geçmez"
          }
        },
        {
          "id": "b11-d4-s9",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude 'izni git dışındaki yerel dosyaya ekledim, kimseyi etkilemez' deyip sana sormadı. Ne dersin?",
          "secenekler": [
            "Doğru; git dışı dosya sorulmaz",
            "Yanlış; yerel dosya da her seferinde sorulur",
            "Doğru; yalnız paylaşılan dosya sorulur"
          ],
          "dogru": 1,
          "ipucu": "Her seferinde sorulanlar listesinde hangi ayar dosyalarının bulunduğunu düşün.",
          "aciklama": "Her seferinde sorulanlar listesinde iki ayar dosyası da vardır. Yerel dosyanın git dışında olması onu listeden çıkarmaz.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Her seferinde sorulanlar listesinde .claude/settings.json ile birlikte .claude/settings.local.json da vardır.",
            "soz": "`.claude/settings.json` ve `.claude/settings.local.json` (kanca ekleme ve değiştirme hariç: testi ve doğrulayıcısıyla sorulmaz)"
          }
        },
        {
          "id": "b11-d4-s5",
          "tur": "coktan",
          "kart": 1,
          "soru": "Claude yeni kancayı testiyle yazdı, doğrulayıcı geçti dedi ve settings.json'a sormadan kaydetti. Ne dersin?",
          "secenekler": [
            "Uygun; bu sorulmayan istisnadır",
            "Uygun değil; settings.json her seferinde sorulur",
            "Uygun değil; kanca önce plan kapısından geçer"
          ],
          "dogru": 0,
          "ipucu": "Her seferinde sorulan işlerin içindeki tek ayrığı düşün.",
          "aciklama": "Kanca ekleme ve değiştirme, testi ve doğrulayıcısıyla geldiğinde sorulmaz. settings.json'daki öteki değişiklikler sorulur.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "settings.json sorulan işlerdendir, ama kanca ekleme ve değiştirme testi ve doğrulayıcısıyla sorulmaz.",
            "soz": "kanca ekleme ve değiştirme hariç: testi ve doğrulayıcısıyla sorulmaz"
          }
        },
        {
          "id": "b11-d4-s4",
          "tur": "bosluk",
          "kart": 2,
          "soru": "Claude kum havuzuna yeni bir yazma izni ekleyecekse kurala göre ___.",
          "secenekler": [
            "tek satırla bildirip yapar",
            "önce plan sunup durur",
            "testini yazıp sormadan yapar"
          ],
          "dogru": 1,
          "ipucu": "Kum havuzunun hangi dosyada, hangi tür ayarla durduğunu düşün.",
          "aciklama": "Kum havuzu settings.json'daki bir izin ayarıdır. Plan kapısı izin ayarı değişikliğinde önce plan sunulmasını ve durulmasını ister.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Plan kapısına göre geri alınamayan bir şeye, ör. izin ve dış sistem ayarı değişikliğine dokunan işte önce plan sunulur ve durulur.",
            "soz": "izin ve dış sistem ayarı değişikliği"
          }
        },
        {
          "id": "b11-d4-s8",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude 'oturum açılışında saati yazan bir kanca yazayım' dedi. Kurala göre önce ne istersin?",
          "secenekler": [
            "Önce testini yazmasını",
            "Kuralı CLAUDE.md'ye yazmasını",
            "Aynı işi yapan kanca var mı, aramasını"
          ],
          "dogru": 2,
          "ipucu": "Yeni kanca sırasının ilk adımını düşün.",
          "aciklama": "Skill yazmadan önce aynı işi yapan kanca ya da kontrol aranmasını ister. Bizde oturum açılışında çalışan bir kanca zaten olabilir.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Yeni kancada ilk adım aynı işi yapan kanca ya da kontrol olup olmadığını aramaktır.",
            "soz": "Önce ara: aynı işi yapan kanca ya da kontrol var mı"
          }
        },
        {
          "id": "b11-d4-s6",
          "tur": "coktan",
          "kart": 4,
          "soru": "Geçen ay Claude'un sana sormadan yaptığı işleri toplu görmek istiyorsun. Nerede ararsın?",
          "secenekler": [
            "KARARLAR'daki düzeltme kayıtlarında",
            "Git commit mesajlarında",
            "settings.json'un içinde"
          ],
          "dogru": 0,
          "ipucu": "Sorulmadan yapılan işin hangi önekle yazıldığını düşün.",
          "aciklama": "Listedeki işin sorulmadan yapılması KARARLAR'a 'Düzeltme: onaysız riskli iş:' önekiyle yazılır. O önekle arayınca hepsi bulunur.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Listedeki işin sorulmadan yapılması KARARLAR'a 'Düzeltme: onaysız riskli iş:' önekiyle yazılır.",
            "soz": "Listedeki işin sorulmadan yapılması KARARLAR'a `- Düzeltme: onaysız riskli iş:` önekiyle yazılır"
          }
        }
      ]
    },
    {
      "id": "b11-d5",
      "baslik": "Eklenti (plugin)",
      "hedefler": [
        "Eklentinin (plugin) skill, kanca, alt ajan ve MCP sunucusunu tek kurulabilir pakette topladığını anlatabilir",
        "Bizim ayarda eklentilerin açık mı kapalı mı olduğunu ayırt edebilir"
      ],
      "anlatim": [
        "Eklenti (plugin) skill'leri, kancaları, alt ajanları ve MCP sunucularını tek kurulabilir birimde toplar. Aynı kurulumu başka depolarda kullanmak ya da dağıtmak için yapılır.",
        "Eklenti senin ayarının üstüne yazmaz, yanında çalışır. Onun PreToolUse kancası da seninki de her araç çağrısında çalışır.",
        "Pazar yerinde (marketplace) listelenmek güvenilir olmak demek değildir. Eklenti senin yetkinle kod çalıştırır; skill'i için kursan bile kancaları da gelir.",
        "Eklenti skill'lerinin başında eklentinin adı bulunur, ör. /eklenti-adi:review. Böylece birden çok eklenti bir arada durabilir.",
        "Bizim .claude/settings.json'daki enabledPlugins on iki eklenti girişi taşır; her birinin değeri false, yani o eklentiler bu projede kapalıdır."
      ],
      "terimler": [
        {
          "tr": "eklenti",
          "en": "plugin",
          "aciklama": "Skill, kanca, alt ajan ve MCP sunucusunu tek kurulabilir pakette toplayan birim."
        },
        {
          "tr": "pazar yeri",
          "en": "marketplace",
          "aciklama": "Eklentilerin listelendiği ve kurulduğu ortak kaynak."
        }
      ],
      "sorular": [
        {
          "id": "b11-d5-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Yalnız bir eklenti kurdun; ardından Claude'un araçları arasında yeni bir MCP sunucusu belirdi. Kaynağı?",
          "secenekler": [
            "Eklenti sunucuyu kendi paketinde getirdi",
            "Eklenti kurulunca Claude Code ek sunucu indirdi",
            "Kullanıcı ayarındaki eski bir sunucu kendiliğinden açıldı"
          ],
          "dogru": 0,
          "ipucu": "Bir eklentinin içinde neler taşınabildiğini düşün.",
          "aciklama": "Eklenti skill'lerle birlikte kancaları, alt ajanları ve MCP sunucularını da tek pakette getirir. Kurduğun anda bunlar da gelir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Eklenti, skill'leri, kancaları, alt ajanları ve MCP sunucularını tek kurulabilir birimde toplayan paketleme katmanıdır."
          }
        },
        {
          "id": "b11-d5-s8",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bu klasördeki üç skill'i ve iki kancayı başka bir proje klasöründe de kullanmak istiyorsun. Ne önerirsin?",
          "secenekler": [
            "Dosyaları elle kopyalayıp her yerde ayrı güncellemek",
            "Kendi skill ve kancalarını bir eklentide toplamak",
            "Pazar yerinden benzer bir eklenti bulup kurmak"
          ],
          "dogru": 1,
          "ipucu": "Aynı kurulumu birden çok yere taşımanın tek paketlik yolunu düşün.",
          "aciklama": "Kendi skill ve kancaların bir eklentide toplanınca aynı kurulum başka depolarda tek paketle kullanılır. Elle kopyalar ayrı ayrı eskir, pazar yerindeki benzeri ise senin kurulumun değildir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Eklenti, aynı kurulumu başka depolarda kullanmak için skill'leri, kancaları, alt ajanları ve MCP sunucularını tek kurulabilir birimde toplar."
          }
        },
        {
          "id": "b11-d5-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Eklentinin kancası bir Bash komutunu durdurdu. Senin koruma kancan da çalışıyor mu?",
          "secenekler": [
            "Hayır; eklentininki onun yerini aldı",
            "Hayır; bir ana tek kanca bağlanır",
            "Evet; ikisi de her çağrıda çalışır"
          ],
          "dogru": 2,
          "ipucu": "Eklentinin bileşenlerinin seninkilerle nasıl bir arada durduğunu düşün.",
          "aciklama": "Eklenti yapılandırmanın üstüne yazmaz; onun PreToolUse kancası da seninki de her araç çağrısında çalışır. Bu yüzden senin koruma kancan da çalışmaya devam eder.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/plugins",
            "kopya": "ders-action-09-plugins.md",
            "okuma": "2026-11-15",
            "dayanak": "Eklenti yapılandırmanın üstüne yazmaz, bileşenleri seninkilerin yanında çalışır; onun PreToolUse kancası da seninki de her araç çağrısında çalışır."
          }
        },
        {
          "id": "b11-d5-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bir eklentiyi yalnız skill'leri için kuracaksın; pazar yerinde çok indirilmiş. Kurmadan önce ne yaparsın?",
          "secenekler": [
            "Çok indirildiği için güvenip kurarım",
            "Yalnız skill'lerinin metnini okurum",
            "Kancalarına, ajanlarına ve MCP sunucularına bakarım"
          ],
          "dogru": 2,
          "ipucu": "Eklentinin hangi yetkiyle kod çalıştırdığını ve kurunca neyin geldiğini düşün.",
          "aciklama": "Eklenti senin yetkinle kod çalıştırır ve skill'i için kursan bile kancaları da gelir. Listelenmiş ya da çok indirilmiş olmak güvenilir olmak demek değildir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/plugins",
            "kopya": "ders-action-09-plugins.md",
            "okuma": "2026-11-15",
            "dayanak": "Eklenti senin yetkinle kod çalıştırdığı için kurmadan önce kancalarına, ajanlarına ve MCP sunucularına bakılır."
          }
        },
        {
          "id": "b11-d5-s6",
          "tur": "bosluk",
          "kart": 3,
          "soru": "marketing eklentisindeki review skill'ini çağırmak için ___ yazarsın.",
          "secenekler": [
            "/review",
            "/marketing:review",
            "/review marketing"
          ],
          "dogru": 1,
          "ipucu": "Eklenti skill'lerinin adının nasıl yazıldığını hatırla.",
          "aciklama": "Eklenti skill'lerinin başında eklentinin adı vardır. Böylece iki review birbirine karışmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Eklenti skill'leri ad alanlıdır, ör. /my-plugin:review, böylece birden çok eklenti bir arada durabilir."
          }
        },
        {
          "id": "b11-d5-s5",
          "tur": "coktan",
          "kart": 4,
          "soru": "operations eklentisi bu bilgisayarda kurulu; skill'leri başka projede görünüyor, bu klasörde görünmüyor. Kaynağı?",
          "secenekler": [
            "Kullanıcı ayarın onu false ile kapatıyor",
            "Proje ayarı onu false ile kapatıyor",
            "Eklentiler yalnız terminal oturumunda açılır"
          ],
          "dogru": 1,
          "ipucu": "Bu klasörün ayarında eklenti girişlerinin değerini düşün.",
          "aciklama": "Bizim enabledPlugins girişlerinin her biri false; false o eklentiyi bu projede kapatır. Kullanıcı ayarı kapatsaydı başka projede de görünmezdi.",
          "kaynak": {
            "adres": ".claude/settings.json",
            "okuma": "2026-11-24",
            "dayanak": "enabledPlugins altındaki on iki girişin her biri false değerini taşır, operations da bunlardandır.",
            "soz": "\"enabledPlugins\": {"
          }
        }
      ]
    },
    {
      "id": "b11-d6",
      "baslik": "Yüklenen ayarı doğrulamak",
      "hedefler": [
        "/context, /status, /hooks, /mcp ve /doctor komutlarının neyi gösterdiğini ayırt edebilir",
        "Bir ayar ya da kanca etkisiz kaldığında nereye bakılacağını anlatabilir"
      ],
      "anlatim": [
        "İlk bakış /context: CLAUDE.md, skill ve MCP araçlarının bağlam penceresinde (context window) olup olmadığını gösterir.",
        "/context dosyanın yüklendiğini gösteriyor ama Claude kurala uymuyorsa sorun büyük olasılıkla yüklemede değil, kuralın yazılışındadır.",
        "Ayar etkisizse dosya yüklenmemiş ya da başka bir kapsam onu ezmiş olabilir. /status o oturumda yüklenen ayar dosyalarını sayar.",
        "/hooks etkin kancaları, /mcp bağlı MCP sunucularını ve durumlarını, /doctor kurulum sağlığını ve geçersiz ayar dosyalarını gösterir.",
        "Kanca ayarı düzenlenince değişiklik çalışan oturuma kısa bir beklemeyle geçer; yeniden başlatmak gerekmez.",
        "Bizde yeni PreToolUse ya da Stop kancası, araclar/kanca_oynat.py ile geçmiş sohbetlerdeki gerçek çağrılarda oynatılır; kaç kez durduracağı önceden sayılır."
      ],
      "terimler": [
        {
          "tr": "bağlam penceresi",
          "en": "context window",
          "aciklama": "Claude'un o oturumda aynı anda gördüğü her şey: CLAUDE.md, skill açıklamaları, araçlar ve konuşma."
        }
      ],
      "sorular": [
        {
          "id": "b11-d6-s2",
          "tur": "coktan",
          "kart": 0,
          "soru": "CLAUDE.md'ye eklediğin kuralı Claude hiç uygulamıyor. Dosya oturuma yüklenmiş mi, görmek için ne yazarsın?",
          "secenekler": [
            "/permissions",
            "/doctor",
            "/context"
          ],
          "dogru": 2,
          "ipucu": "Oturumda yer kaplayan her şeyi döken komutu düşün.",
          "aciklama": "/context bağlam penceresini bölüm bölüm gösterir; CLAUDE.md orada yoksa yüklenmemiştir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "CLAUDE.md, kurallar ya da skill açıklamaları hiç yüklenmiş mi diye doğrulamak için önce /context koşulur."
          }
        },
        {
          "id": "b11-d6-s3",
          "tur": "coktan",
          "kart": 1,
          "soru": "/context CLAUDE.md'yi gösteriyor ama Claude kurala yine uymuyor. Sonraki hamlen ne olur?",
          "secenekler": [
            "Kuralı daha açık ve çelişkisiz yazdırmak",
            "Oturumu yeniden açıp kuralı tekrar yükletmek",
            "Kuralı settings.json'a taşımak"
          ],
          "dogru": 0,
          "ipucu": "Yükleme sorunu elendiyse geriye ne kaldığını düşün.",
          "aciklama": "Dosya yüklendiyse sorun talimatın yazılışıdır. Belirsiz, çelişen ya da çok uzamış dosyada kalan kural daha az uygulanır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "/context dosyanın yüklendiğini doğruluyor ama Claude talimata uymuyorsa sorun büyük olasılıkla yüklenmede değil, talimatın nasıl yazıldığındadır."
          }
        },
        {
          "id": "b11-d6-s5",
          "tur": "coktan",
          "kart": 2,
          "soru": "settings.json'a bir anahtar yazdın ama Claude Code hiç yazmamışsın gibi davranıyor. İlk ne yaparsın?",
          "secenekler": [
            "/context ile bağlama bakarım",
            "/status ile yüklenen dosyalara bakarım",
            "Anahtarı üç ayar dosyasına birden yazarım"
          ],
          "dogru": 1,
          "ipucu": "Önce dosyanın gerçekten okunup okunmadığını öğrenmek gerekir.",
          "aciklama": "Etkisiz ayarda önce /status ile hangi ayar dosyalarının yüklendiğine bakılır, sonra belirti aranır. /context ayar dosyalarını değil bağlamı gösterir, anahtarı çoğaltmak da nedeni göstermez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir anahtarı ayarladığın halde Claude Code öyle davranmıyorsa önce /status ile hangi dosyaları yüklediğine bakılır, sonra belirti bulunur."
          }
        },
        {
          "id": "b11-d6-s1",
          "tur": "eslestir",
          "kart": 3,
          "soru": "Belirtiyi ilk bakılacak komutla eşleştir.",
          "ciftler": [
            [
              "Elle düzenlediğin ayar dosyasındaki hiçbir ayar işlemiyor",
              "/doctor"
            ],
            [
              "Claude bağlı bir dış hizmetin araçlarını bulamıyor",
              "/mcp"
            ],
            [
              "Eklediğin skill'in oturumda yer kaplayıp kaplamadığını merak ediyorsun",
              "/context"
            ]
          ],
          "ipucu": "Her komutun hangi parçanın durumunu gösterdiğini düşün.",
          "aciklama": "/doctor geçersiz ayar dosyalarını, /mcp bağlı MCP sunucularını ve durumlarını, /context bağlamda yer kaplayan skill ve araçları gösterir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "/context bağlamı kaplayan her şeyi, /mcp bağlı MCP sunucularını ve durumlarını, /doctor kurulum sağlığını ve geçersiz ayar dosyalarını gösterir."
          }
        },
        {
          "id": "b11-d6-s7",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude kanca ayarını değiştirdi ve 'etkisi için oturumu kapatıp aç' dedi. Ne dersin?",
          "secenekler": [
            "Haklı; ayarlar yalnız yeni bir oturum açılınca okunur",
            "Gerekmez; açık oturum değişikliği kendiliğinden alır",
            "Haklı; bilgisayarı da yeniden başlatmak gerekir"
          ],
          "dogru": 1,
          "ipucu": "Ayar dosyası değişince çalışan oturumun bunu kendiliğinden alıp almadığını düşün.",
          "aciklama": "settings.json düzenlenince değişiklik kısa bir beklemeden sonra çalışan oturuma geçer. Yeniden başlatmak gerekmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "settings.json'u düzenlediğinde değişiklik kısa bir dosya kararlılığı beklemesinden sonra çalışan oturumda geçerli olur, yeniden başlatman gerekmez."
          }
        },
        {
          "id": "b11-d6-s8",
          "tur": "coktan",
          "kart": 5,
          "soru": "Claude yeni bir PreToolUse kancası yazdı, testleri geçti. Gerçek işleri boşuna durdurur mu diye ne istersin?",
          "secenekler": [
            "Testleri bir kez daha koşmasını",
            "Eski sohbetlerde oynatıp kaç çağrıyı durduracağını saymasını",
            "Bir hafta kullanıp şikâyet gelirse kapatmayı"
          ],
          "dogru": 1,
          "ipucu": "Testlerin sınadığı durumlarla gerçekten yapılmış çağrıların farkını düşün.",
          "aciklama": "Testler yazarın düşündüğü durumları sınar; geçmiş sohbetlerdeki gerçek çağrılarda oynatmak kancanın kaç kez durduracağını önceden gösterir.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "PreToolUse ve Stop kancasında araclar/kanca_oynat.py gerçek dökümlerle çağrı, durdurma, not ve hata sayar.",
            "soz": "gerçek dökümlerle çağrı, durdurma, not ve hata sayar"
          }
        }
      ]
    }
  ]
});
