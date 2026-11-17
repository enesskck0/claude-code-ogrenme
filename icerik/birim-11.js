// icerik/birim-11.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b11",
  "sira": 11,
  "baslik": "Ayar dosyaları",
  "amac": "Claude Code'un ayar dosyalarını, hangisinin kimi etkilediğini ve çakışınca hangisinin kazandığını öğrenip bizim .claude/settings.json dosyasını okuyabilmek.",
  "dersler": [
    {
      "id": "b11-d1",
      "baslik": "settings.json nedir, kim için",
      "hedefler": [
        "Kullanıcı, paylaşılan proje, yerel proje ve kurum kapsamlarını (scope) ve kimi etkilediklerini anlatabilir",
        "Git'e giren ayar dosyasını git dışında kalandan ayırt edebilir"
      ],
      "anlatim": [
        "Ayar dosyası (settings file) Claude Code'un davranışını değiştiren JSON anahtarlarını taşır. Kurulum hiçbir ayar dosyası açmaz; dosyayı sen, Claude Code ya da kurumun oluşturur.",
        "Yoldaki ~ ev klasörünü gösterir: kullanıcı dosyası ~/.claude/settings.json her projende yalnız seni etkiler. Paylaşılan proje dosyası .claude/settings.json projenin içindedir, klasördeki herkesi etkiler.",
        "Yerel proje dosyası .claude/settings.local.json yalnız seni, yalnız bu projede etkiler. Dördüncü kapsam, kurumun dağıttığı yönetilen ayardır (managed settings).",
        "Bir Bash iznine 'Yes, and don't ask again' dersen Claude Code bu onayı yerel proje dosyasına yazar.",
        "Bizde .claude/settings.json git'e girer. .claude/settings.local.json ise .gitignore'da yazılı olduğu için git dışında kalır.",
        "Klasörümüzde kendi kancaları olan bir paket var: ikinci beyin paketi. .claude/settings.local.json onun kanca ayarlarını ve izinlerini taşır.",
        ".claude/settings.local.json git'e girmediği için değişikliği commit'te görünmez. denetim.py'nin D13 kontrolü dosyayı, son bilinen halinden alınmış bir damgayla karşılaştırıp değişikliği yakalar."
      ],
      "terimler": [
        {"tr": "ayar dosyası", "en": "settings file", "aciklama": "Claude Code'un davranışını değiştiren anahtarları taşıyan JSON dosyası."},
        {"tr": "kapsam", "en": "scope", "aciklama": "Bir ayarın kimleri ve hangi projeleri etkilediği."},
        {"tr": "yönetilen ayar", "en": "managed settings", "aciklama": "Kurumun dağıttığı, kişinin kendi dosyalarıyla değiştiremediği ayar."}
      ],
      "sorular": [
        {
          "id": "b11-d1-s1",
          "tur": "eslestir",
          "kart": 2,
          "soru": "Her ayar dosyasını kimi etkilediğiyle eşleştir.",
          "ciftler": [
            ["~/.claude/settings.json", "Bu bilgisayardaki her projede yalnız sen"],
            [".claude/settings.json", "Bu klasörde çalışan herkes"],
            [".claude/settings.local.json", "Yalnız sen, yalnız bu projede"],
            ["managed-settings.json", "Kurumun ayarı dağıttığı herkes"]
          ],
          "ipucu": "Yolun ev klasöründe mi proje içinde mi başladığına ve adında local geçip geçmediğine bak.",
          "aciklama": "Dosyanın yeri kimi etkileyeceğini belirler. Ev klasöründeki dosya seni her projede, proje dosyası klasördeki herkesi, local olan yalnız seni bu projede etkiler; kurum ayarını kurum dağıtır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Kullanıcı dosyası bu makinedeki her projede seni, paylaşılan proje dosyası klasörde çalışan herkesi, yerel proje dosyası yalnız bu projede seni, yönetilen ayar kurumun dağıttığı herkesi etkiler."
          }
        },
        {
          "id": "b11-d1-s2",
          "tur": "dogru-yanlis",
          "kart": 0,
          "soru": "Claude Code'u kurduğunda ~/.claude/settings.json dosyası kendiliğinden oluşur.",
          "dogru": false,
          "ipucu": "Kurulum ile ilk ayar değişikliği arasındaki farkı düşün.",
          "aciklama": "Kurulum hiçbir ayar dosyası açmaz. Kullanıcı dosyasını sen açarsın ya da Claude Code bir seçeneği ilk değiştirdiğinde yazar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code'u kurmak hiçbir ayar dosyası oluşturmaz; kullanıcı dosyasını sen oluşturursun ya da Claude Code bir seçeneği ilk değiştirdiğinde yazar."
          }
        },
        {
          "id": "b11-d1-s3",
          "tur": "coktan",
          "kart": 3,
          "soru": "Terminalde Claude bir Bash komutu için izin istedi, sen 'Yes, and don't ask again' seçtin. Bu onay kural olarak hangi dosyaya yazılır?",
          "secenekler": ["Paylaşılan proje dosyasına", "Kurumun yönetilen ayar dosyasına", "Yerel proje dosyasına", "Kullanıcı dosyasına"],
          "dogru": 2,
          "ipucu": "Bu onay takım arkadaşlarına gitmeli mi, öteki projelerine taşmalı mı, düşün.",
          "aciklama": "Claude Code bu onayı yerel proje dosyasına (.claude/settings.local.json) allow kuralı olarak kaydeder. Dosya git dışında kaldığı için takım arkadaşların etkilenmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir Bash komutu için 'Yes, and don't ask again' seçersen Claude Code bu onayı .claude/settings.local.json dosyasına allow kuralı olarak kaydeder."
          }
        },
        {
          "id": "b11-d1-s4",
          "tur": "coktan",
          "kart": 4,
          "soru": "Bizim klasörde hangi ayar dosyası git'e girmez?",
          "secenekler": [".claude/settings.json", ".claude/settings.local.json", "CLAUDE.md", "denetim.py"],
          "dogru": 1,
          "ipucu": "Yalnız sana ait olması gereken ayar dosyasını düşün.",
          "aciklama": ".gitignore'da .claude/settings.local.json satırı var; bu satır dosyayı git dışında tutar. Paylaşılan .claude/settings.json ise git'e girer.",
          "kaynak": {
            "adres": ".gitignore:14",
            "okuma": "2026-11-17",
            "dayanak": ".gitignore, .claude/settings.local.json dosyasını git dışında tutar.",
            "soz": ".claude/settings.local.json"
          }
        },
        {
          "id": "b11-d1-s5",
          "tur": "bosluk",
          "kart": 5,
          "soru": ".gitignore'daki nota göre git dışında tutulan .claude/settings.local.json, ikinci beyin paketinin ___ taşır.",
          "secenekler": ["kanca ayarlarını ve izinlerini", "kullanıcının sohbet geçmişini", "yalnız tema ve renk seçimlerini", "CLAUDE.md'nin bir kopyasını"],
          "dogru": 0,
          "ipucu": "İkinci beyin paketinin belirli anlarda kendiliğinden çalışan parçalarını düşün.",
          "aciklama": ".gitignore'daki not, paketin öteki dosyalarının git'e girdiğini; yalnız mutlak yolları ve izinleri taşıyan kanca ayar dosyasıyla iki kilit dosyasının git dışında kaldığını söyler.",
          "kaynak": {
            "adres": ".gitignore:13",
            "okuma": "2026-11-17",
            "dayanak": "İkinci beyin paketinin dosyaları izlenir; yalnız kanca ayar dosyası (mutlak yollar, izinler), yazma kilidi ve sıkıştırma kilidi git dışıdır.",
            "soz": "yalnız kanca ayar dosyası (mutlak yollar, izinler), yazma kilidi ve sıkıştırma kilidi git dışı"
          }
        },
        {
          "id": "b11-d1-s6",
          "tur": "coktan",
          "kart": 6,
          "soru": "Git dışında kalan .claude/settings.local.json bizde nasıl gözetilir?",
          "secenekler": ["Her commit'te GitHub yedeğine gönderilir", "Claude Code her oturum açılışında dosyayı sıfırlayıp yeniden yazar", "Gözetilmez; değişse kimse fark etmez", "denetim.py'nin D13 kontrolü onu damgayla karşılaştırır"],
          "dogru": 3,
          "ipucu": "Commit'te görünmeyen bir değişikliği yakalamak için dosyayı neyle karşılaştırmak gerekir, düşün.",
          "aciklama": "Dosya git'e girmediği için değişikliği commit'te görünmez. D13 onu damga dosyasıyla karşılaştırır; bilerek yapılan değişiklikte damga araclar/ayar_damgasi.py ile yenilenir.",
          "kaynak": {
            "adres": "denetim.py:40",
            "okuma": "2026-11-17",
            "dayanak": "D13, git dışı kanca ayar dosyası .claude/settings.local.json'u .claude/settings.local.sha256 damgasıyla karşılaştırır.",
            "soz": "git dışı kanca ayar dosyası .claude/settings.local.json, .claude/settings.local.sha256 damgasıyla karşılaştırılır"
          }
        },
        {
          "id": "b11-d1-s7",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Dosya yollarında ~/.claude ev klasöründeki .claude klasörüdür; başında ~ olmayan .claude ise ___ .claude klasörüdür.",
          "secenekler": ["kurumun sunucusundaki", "projenin içindeki", "masaüstü uygulamasının"],
          "dogru": 1,
          "ipucu": "Paylaşılan proje dosyasının yolunu hatırla.",
          "aciklama": "~ işareti ev klasörünü gösterir. Tek başına .claude, üzerinde çalıştığın projenin içindeki klasördür.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "~/.claude ev klasöründeki .claude klasörü, yalın .claude ise projenin içindeki .claude klasörüdür."
          }
        }
      ]
    },
    {
      "id": "b11-d2",
      "baslik": "Öncelik sırası",
      "hedefler": [
        "Beş ayar katmanını (level) yüksekten alçağa sırasıyla anlatabilir",
        "Aynı anahtar iki yerde olunca hangisinin kazandığını ayırt edebilir"
      ],
      "anlatim": [
        "Ayar katmanları yüksekten alçağa: kurum, komut satırı (--settings), yerel proje (.claude/settings.local.json), paylaşılan proje (.claude/settings.json), kullanıcı (~/.claude/settings.json).",
        "Aynı anahtar birden çok yerde yazılıysa Claude Code en yüksek katmanın değerini kullanır. Bu sıraya öncelik (precedence) denir.",
        "Liste tutan anahtarlar farklı işler: izin listesi (permissions.allow) iki dosyada varsa Claude Code ikisini birleştirir. Kancalar da dosyalar arasında birleşir.",
        "Takım dosyasına dokunmadan kendi değerini bir projede geri almanın yolu o projenin yerel dosyasıdır. Yerel proje paylaşılanın üstündedir ve yalnız seni etkiler."
      ],
      "terimler": [
        {"tr": "öncelik", "en": "precedence", "aciklama": "Aynı ayar birden çok yerde olunca hangisinin geçerli olduğunu belirleyen sıra."},
        {"tr": "katman", "en": "level", "aciklama": "Öncelik sırasındaki her basamak: kurum, komut satırı, yerel proje, paylaşılan proje, kullanıcı."}
      ],
      "sorular": [
        {
          "id": "b11-d2-s1",
          "tur": "sirala",
          "kart": 0,
          "soru": "Ayar katmanlarını en yüksek öncelikten en düşüğe doğru sırala.",
          "adimlar": [
            "Kurum ayarı (managed)",
            "Komut satırı (--settings)",
            "Yerel proje (.claude/settings.local.json)",
            "Paylaşılan proje (.claude/settings.json)",
            "Kullanıcı (~/.claude/settings.json)"
          ],
          "ipucu": "En üstte senin değiştiremediğin, en altta her projene yayılan katman var.",
          "aciklama": "Üstteki katman aynı anahtarı alttakilerin hepsinde ezer. Yerel dosyan paylaşılanın, paylaşılan dosya kullanıcı dosyanın üstündedir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Öncelik yüksekten alçağa şöyledir: yönetilen ayar, komut satırı, yerel proje, paylaşılan proje, kullanıcı."
          }
        },
        {
          "id": "b11-d2-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Takımın .claude/settings.json dosyası bir anahtarı true, senin ~/.claude/settings.json dosyan false yapıyor. O projede hangisi geçerli?",
          "secenekler": ["Senin false değerin", "Takımın true değeri", "Claude her seferinde sorar", "Son kaydedilen değer"],
          "dogru": 1,
          "ipucu": "Sıralamada paylaşılan proje ile kullanıcı katmanının yerine bak.",
          "aciklama": "Paylaşılan proje kullanıcı katmanının üstünde olduğu için o projede takımın değeri geçer. Öteki projelerde senin değerin geçerli kalır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Paylaşılan proje kullanıcının üstünde olduğu için Claude Code proje değerini kullanır ve bu yalnız o projede geçerli olur."
          }
        },
        {
          "id": "b11-d2-s3",
          "tur": "coktan",
          "kart": 3,
          "soru": "Takımın proje dosyası bir anahtarı true yapıyor. Kendi false değerini yalnız o projede, takımı etkilemeden nasıl geçirirsin?",
          "secenekler": ["Takımın .claude/settings.json dosyasını değiştiririm", "Değeri ~/.claude/settings.json dosyasına yeniden yazarım", "Değeri o projenin .claude/settings.local.json dosyasına yazarım", "CLAUDE.md'ye bir cümle eklerim"],
          "dogru": 2,
          "ipucu": "Paylaşılan projenin üstünde duran ve yalnız sana ait olan katmanı düşün.",
          "aciklama": "Yerel proje paylaşılan projenin üstündedir ve yalnız seni etkiler. Takım arkadaşlarının oturumları değişmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Değeri o projedeki .claude/settings.local.json'a eklersen, yerel proje paylaşılan projenin üstünde olduğu için yalnız senin oturumların değişir."
          }
        },
        {
          "id": "b11-d2-s4",
          "tur": "dogru-yanlis",
          "kart": 1,
          "soru": "Kurumun yönetilen ayarı, Claude çalışırken çıkan ipucu satırını (spinnerTipsEnabled) açık tutuyor. Kendi yerel proje dosyana false yazarak onu kapatabilirsin.",
          "dogru": false,
          "ipucu": "Kurum ayarının sıralamadaki yerini hatırla.",
          "aciklama": "Kurum ayarı en üst katmandır; kullanıcı, proje ya da yerel dosya ve --settings onu değiştiremez. Değişmesi gerekiyorsa yöneticiye sorulur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Kurum ayarı bu anahtarı true yaparsa kullanıcı, proje ya da yerel ayara yazılan hiçbir şey ve --settings onu kapatamaz, çünkü en üst katman kurumdur."
          }
        },
        {
          "id": "b11-d2-s5",
          "tur": "bosluk",
          "kart": 2,
          "soru": "permissions.allow gibi bir liste hem kullanıcı hem proje dosyasında varsa Claude Code ___.",
          "secenekler": ["iki listeyi birleştirir", "yalnız proje listesini kullanır", "yalnız kullanıcı listesini kullanır", "hangisini seçeceğini sana sorar"],
          "dogru": 0,
          "ipucu": "Liste tutan anahtarlarla tek değer tutan anahtarlar aynı mı işler, düşün.",
          "aciklama": "Liste anahtarlarında Claude Code birini seçmez, listeleri birleştirir. Böylece her dosya ötekinin girdisini silmeden kendi girdisini ekler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Aynı liste anahtarı, ör. permissions.allow, birden çok dosyada olursa Claude Code birini seçmek yerine listeleri birleştirir."
          }
        },
        {
          "id": "b11-d2-s6",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bizim .claude/settings.json'da autoMemoryEnabled false yazıyor. Kendi ~/.claude/settings.json dosyana true yazarsan bu klasörde ne olur?",
          "secenekler": ["Hafıza kapalı kalır", "Otomatik hafıza açılır", "Claude Code ayar hatası verir", "Hafıza yarı açık olur"],
          "dogru": 0,
          "ipucu": "Bu dosya paylaşılan proje katmanında, seninki kullanıcı katmanında.",
          "aciklama": "Tek değer tutan bir anahtarda en yüksek katman kazanır. Paylaşılan proje kullanıcının üstünde olduğu için bu klasörde false geçerlidir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Aynı anahtar birden çok yerde olunca Claude Code onu belirleyen en yüksek katmanın değerini kullanır ve paylaşılan proje kullanıcının üstündedir."
          }
        },
        {
          "id": "b11-d2-s7",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bizim kancalar .claude/settings.json'da, ikinci beyin paketinin kancaları .claude/settings.local.json'da. Oturumda hangileri çalışır?",
          "secenekler": ["Yalnız yerel dosyadakiler, çünkü yerel proje üstte", "Yalnız paylaşılan dosyadakiler", "Hangisi daha çok kanca taşıyorsa o dosyadakiler", "İkisi de; kancalar dosyalar arasında birleşir"],
          "dogru": 3,
          "ipucu": "Kancaların tek değer mi, birleşen bir yapı mı olduğunu düşün.",
          "aciklama": "Kancalar dosyalar arasında birbirinin yerine geçmez, birleşir. Bu yüzden iki dosyadaki kancalar birlikte çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings-reference",
            "kopya": "settings-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "Kancalar dosyalar arasında birbirinin yerine geçmez, birleşir."
          }
        }
      ]
    },
    {
      "id": "b11-d3",
      "baslik": "Bizim settings.json haritası",
      "hedefler": [
        "Bizim .claude/settings.json'daki kum havuzu (sandbox), izinler (permissions), kancalar (hooks) ve eklentiler (enabledPlugins) bölümlerini ayırt edebilir",
        "Her bölümün işini bir cümleyle anlatabilir"
      ],
      "anlatim": [
        "Bizim .claude/settings.json beş üst anahtarla ilerler. İlki autoMemoryEnabled false: otomatik hafıza kapalı.",
        "Kum havuzu (sandbox), Claude'un çalıştırdığı Bash komutlarını dosya sisteminden ve ağdan yalıtır. İçindeki enabled true onu açar.",
        "İzinler (permissions) hangi aracın sormadan kullanılacağını, hangisinde sorulacağını, hangisinin engelleneceğini belirler. Bizde yalnız deny, yani engellenenler listesi var.",
        "Kancalar (hooks) belirli anlarda kendi betiklerimizi çalıştırır. SessionStart, PreToolUse ve Stop gibi adlar kanca olayıdır (hook event): kancanın hangi anda çalışacağını söyler.",
        "PreToolUse araç çağrısından önceki andır; eşleştirici (matcher) Bash bunu Bash aracına daraltır. Bizde eşleştiricisinde Bash geçen PreToolUse kancası koruma.py'yi çağırır.",
        "enabledPlugins eklentileri tek tek açar ya da kapatır. Bizde on iki girişin her biri false, yani bu eklentiler bu projede kapalı."
      ],
      "terimler": [
        {"tr": "kum havuzu", "en": "sandbox", "aciklama": "Claude'un çalıştırdığı Bash komutlarını dosya sisteminden ve ağdan yalıtan katman."},
        {"tr": "izinler", "en": "permissions", "aciklama": "Hangi aracın sormadan, sorarak ya da hiç kullanılamayacağını belirleyen kurallar."},
        {"tr": "eşleştirici", "en": "matcher", "aciklama": "Kancanın hangi araçta çalışacağını seçen metin, ör. Bash ya da Edit|Write."},
        {"tr": "kanca olayı", "en": "hook event", "aciklama": "Kancanın çalıştığı an, ör. oturum açılışı ya da araç çağrısından önce."}
      ],
      "sorular": [
        {
          "id": "b11-d3-s1",
          "tur": "eslestir",
          "kart": 5,
          "soru": "Bizim settings.json'daki her bölümü yaptığı işle eşleştir.",
          "ciftler": [
            ["sandbox", "Bash komutlarını dosya sisteminden ve ağdan yalıtır"],
            ["permissions", "Hangi aracın izinli, sorulu ya da engelli olduğunu belirler"],
            ["hooks", "Belirli anlarda kendi komutlarımızı çalıştırır"],
            ["enabledPlugins", "Eklentileri tek tek açar ya da kapatır"]
          ],
          "ipucu": "Her bölümün içinde ne yazdığını hatırla: enabled, deny, matcher, false.",
          "aciklama": "sandbox yalıtır, permissions izin verir, sorar ya da engeller, hooks belirli anlarda betik çalıştırır, enabledPlugins eklentileri açıp kapatır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings-reference",
            "kopya": "settings-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "Anahtar dizinine göre sandbox Bash komutlarını dosya sisteminden ve ağdan yalıtır, permissions izin, sorma ve engelleme kurallarını koyar, hooks yaşam döngüsünün belli anlarında kendi komutlarını çalıştırır, enabledPlugins eklentileri tek tek açıp kapatır."
          }
        },
        {
          "id": "b11-d3-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bizim settings.json'da sandbox içinde enabled true yazıyor. Bu ne yapar?",
          "secenekler": ["Claude'un Bash komutlarını kum havuzunda çalıştırır", "Claude'un dosya düzenlemelerini onaya bağlar", "Eklentileri kum havuzunda dener", "Otomatik hafızayı açar"],
          "dogru": 0,
          "ipucu": "Kum havuzunun hangi aracın komutlarını yalıttığını düşün.",
          "aciklama": "sandbox.enabled true olunca Claude Code Bash komutlarını kum havuzunda çalıştırır. Kum havuzu bu komutların dosya sistemine ve ağa erişimini sınırlar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings-reference",
            "kopya": "settings-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "sandbox.enabled true olduğunda Claude Code Bash komutlarını kum havuzunda çalıştırır."
          }
        },
        {
          "id": "b11-d3-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bizim settings.json'da permissions bölümünün içinde hangi kural listesi var?",
          "secenekler": ["allow ve deny birlikte", "Yalnız ask", "allow, ask ve deny", "Yalnız deny"],
          "dogru": 3,
          "ipucu": "Kartta bizim permissions bölümü için ne dendiğini hatırla.",
          "aciklama": "permissions altında yalnız deny listesi açılır; allow ve ask yok. Yani bu bölüm yalnız engelleme kuralı koyar.",
          "kaynak": {
            "adres": ".claude/settings.json:26",
            "okuma": "2026-11-17",
            "dayanak": "permissions bölümünün altında yalnız deny listesi açılır, allow ve ask anahtarı yoktur.",
            "soz": "\"permissions\": { \"deny\": ["
          }
        },
        {
          "id": "b11-d3-s4",
          "tur": "bosluk",
          "kart": 2,
          "soru": "permissions altındaki deny listesine giren bir kural, eşleşen araç kullanımını ___.",
          "secenekler": ["sormadan onaylar", "engeller", "her seferinde sorar", "yalnız kayda geçirir"],
          "dogru": 1,
          "ipucu": "Kartta permissions'ın ayırdığı üç durumu hatırla; deny sözcüğünün anlamı hangisine uyar?",
          "aciklama": "deny listesi Claude Code'un engellediği araç kullanımlarını sayar. Eşleşen kullanım yapılmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings-reference",
            "kopya": "settings-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "permissions.deny, Claude Code'un engellediği araç kullanımlarının listesidir."
          }
        },
        {
          "id": "b11-d3-s5",
          "tur": "coktan",
          "kart": 4,
          "soru": "Bizim settings.json'da PreToolUse altında eşleştiricisinde Bash geçen kanca koruma.py'yi çağırıyor. Bu kanca ne zaman çalışır?",
          "secenekler": ["Oturum açılırken bir kez", "Claude cevabını bitirdiğinde", "Her Bash komutundan önce", "Yalnız sen onay verdiğinde"],
          "dogru": 2,
          "ipucu": "PreToolUse adındaki Pre ve Tool parçalarına bak.",
          "aciklama": "PreToolUse araç çağrısından önceki andır, matcher Bash bunu Bash aracına daraltır. Böylece koruma.py her Bash komutundan önce çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings-reference",
            "kopya": "settings-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "PreToolUse altında matcher Bash olan örnek kanca, her Bash araç çağrısından önce bir betik çalıştırır."
          }
        },
        {
          "id": "b11-d3-s6",
          "tur": "dogru-yanlis",
          "kart": 0,
          "soru": "Bizim settings.json'daki autoMemoryEnabled false yüzünden Claude otomatik hafıza klasöründen okumaz ve oraya yazmaz.",
          "dogru": true,
          "ipucu": "false değerinin bu anahtarda ne anlama geldiğini düşün.",
          "aciklama": "autoMemoryEnabled false olunca Claude otomatik hafıza klasörünü ne okur ne yazar. Anahtarın varsayılan değeri true'dur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings-reference",
            "kopya": "settings-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "autoMemoryEnabled false olduğunda Claude otomatik hafıza klasöründen okumaz ve oraya yazmaz."
          }
        },
        {
          "id": "b11-d3-s7",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude'a 'Bash komutlarından önce çalışacak yeni bir kanca ekle' dedin. Kanca kaydı settings.json'un hangi bölümüne girer?",
          "secenekler": ["permissions", "hooks", "sandbox", "enabledPlugins"],
          "dogru": 1,
          "ipucu": "Olay adlarını (SessionStart, PreToolUse) taşıyan bölümü düşün.",
          "aciklama": "Kancalar hooks altında olay adına göre kaydedilir. Her olay eşleştirici gruplarını, her grup da çalışacak komutları taşır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings-reference",
            "kopya": "settings-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "hooks anahtarı kanca olaylarına göre düzenlenir; her olay eşleştirici gruplarını, her grup da çalışacak komutları taşır."
          }
        }
      ]
    },
    {
      "id": "b11-d4",
      "baslik": "Ayar değişikliği kapısı",
      "hedefler": [
        "settings.json değişikliğinin her seferinde sorulduğunu, kanca (hook) eklemenin testi ve doğrulayıcısıyla (verifier) sorulmadan yapılabildiğini ayırt edebilir",
        "Bu ayrımın nedenini anlatabilir"
      ],
      "anlatim": [
        "CLAUDE.md her seferinde sana sorulan işleri sayar; önceki onay geçmez. .claude/settings.json ve .claude/settings.local.json bu listededir.",
        "Tek istisna kanca ekleme ve değiştirmedir: kanca testi ve doğrulayıcısıyla geliyorsa sorulmaz.",
        "settings.json izin listesini ve kum havuzunu taşır. CLAUDE.md'nin plan kapısı izin ayarı değişikliğini geri alınamayan işler arasında sayar: önce plan sunulur ve durulur.",
        "kanca-denetim skill'i yeni kanca için şu sırayı ister: önce ara, kod ve testi yaz, settings.json'a ekle, gerçek kayıtlarda koştur, sonda sına, doğrulayıcıya ver.",
        "Her seferinde sorulması gereken bir iş sorulmadan yapılırsa KARARLAR'a 'Düzeltme: onaysız riskli iş:' önekiyle yazılır."
      ],
      "terimler": [
        {"tr": "kanca", "en": "hook", "aciklama": "Belirli bir anda kendiliğinden çalışan betik; bizimkiler .claude/hooks altında."},
        {"tr": "doğrulayıcı", "en": "verifier", "aciklama": "İşi yapandan ayrı, değişikliği sınayan alt ajan."}
      ],
      "sorular": [
        {
          "id": "b11-d4-s1",
          "tur": "coktan",
          "kart": 1,
          "soru": "CLAUDE.md'ye göre hangisi her seferinde sana sorulur?",
          "secenekler": ["Testi ve doğrulayıcısı olan bir kancayı kaydetmek", "settings.json'daki izin listesine satır eklemek", "Bir taslak dosyada yazım hatası düzeltmek", "Değişiklikten sonra testleri koşmak"],
          "dogru": 1,
          "ipucu": "Kartta her seferinde sorulan işler arasında hangi dosyaların sayıldığını ve kancanın istisnasını hatırla.",
          "aciklama": ".claude/settings.json değişikliği her seferinde sorulanlar listesindedir. Kanca kaydı ise testi ve doğrulayıcısıyla geldiğinde istisnadır.",
          "kaynak": {
            "adres": "CLAUDE.md:46",
            "okuma": "2026-11-17",
            "dayanak": "Her seferinde sorulanlar listesinde .claude/settings.json ve .claude/settings.local.json vardır; kanca ekleme ve değiştirme testi ve doğrulayıcısıyla sorulmaz.",
            "soz": "bu bölümdeki satırlar ve `.claude/settings.json` ve `.claude/settings.local.json`"
          }
        },
        {
          "id": "b11-d4-s2",
          "tur": "dogru-yanlis",
          "kart": 1,
          "soru": "Yeni bir kanca testi ve doğrulayıcısıyla birlikte geliyorsa .claude/settings.json'a sana sorulmadan kaydedilebilir.",
          "dogru": true,
          "ipucu": "Kanca eklemenin hangi şartla istisna olduğunu düşün.",
          "aciklama": "Kanca ekleme ve değiştirme, testi ve doğrulayıcısıyla geldiğinde soru listesinin dışındadır. settings.json'daki öteki değişiklikler sorulur.",
          "kaynak": {
            "adres": "CLAUDE.md:46",
            "okuma": "2026-11-17",
            "dayanak": "settings.json sorulan işlerdendir, ama kanca ekleme ve değiştirme testi ve doğrulayıcısıyla sorulmaz.",
            "soz": "kanca ekleme ve değiştirme hariç: testi ve doğrulayıcısıyla sorulmaz"
          }
        },
        {
          "id": "b11-d4-s3",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Geçen hafta bir settings.json değişikliğine onay verdin. Bu haftaki yeni settings.json değişikliği ___.",
          "secenekler": ["sorulmadan yapılır", "yine sana sorulur", "yalnız tek satırla bildirilir"],
          "dogru": 1,
          "ipucu": "Kartta önceki onay için ne dendiğini hatırla.",
          "aciklama": "Bu listedeki işler her seferinde sorulur. Önceki onay sonraki işe geçmez.",
          "kaynak": {
            "adres": "CLAUDE.md:46",
            "okuma": "2026-11-17",
            "dayanak": "Listedeki işler her seferinde basitçe sorulur, önceki onay geçmez.",
            "soz": "Her seferinde basitçe sorulanlar, önceki onay geçmez"
          }
        },
        {
          "id": "b11-d4-s4",
          "tur": "coktan",
          "kart": 2,
          "soru": "settings.json'daki deny listesinden bir satır silmek plan kapısında nasıl sayılır?",
          "secenekler": ["Sıradan iş; sormadan başlanır", "Küçük düzeltme; tek satırla bildirilir", "İzin ayarı; önce plan sunulup durulur", "Kanca değişikliği; testle sorulmadan yapılır"],
          "dogru": 2,
          "ipucu": "deny listesinin hangi tür ayar olduğunu ve kartta geri alınamayan işler arasında neyin sayıldığını düşün.",
          "aciklama": "Plan kapısı izin ve dış sistem ayarı değişikliğini geri alınamayan işler arasında sayar. deny listesi bizim izin ayarımızdır.",
          "kaynak": {
            "adres": "CLAUDE.md:43",
            "okuma": "2026-11-17",
            "dayanak": "Plan kapısına göre geri alınamayan bir şeye, ör. izin ve dış sistem ayarı değişikliğine dokunan işte önce plan sunulur ve durulur.",
            "soz": "izin ve dış sistem ayarı değişikliği"
          }
        },
        {
          "id": "b11-d4-s5",
          "tur": "coktan",
          "kart": 1,
          "soru": "Kanca ekleme hangi şartla sana sorulmadan yapılabilir?",
          "secenekler": ["Kancanın testi ve doğrulayıcısı varsa", "Kanca yalnız gece çalışıyorsa", "Kanca beş satırdan kısaysa", "Kanca git dışındaki yerel dosyaya kaydediliyorsa"],
          "dogru": 0,
          "ipucu": "Kartta kanca istisnasının hangi iki şeye bağlandığını hatırla.",
          "aciklama": "İstisna yalnız kancanın testine ve doğrulayıcısına bağlıdır. Git dışındaki .claude/settings.local.json da her seferinde sorulanlar listesindedir.",
          "kaynak": {
            "adres": "CLAUDE.md:46",
            "okuma": "2026-11-17",
            "dayanak": "Her seferinde sorulanlar arasında .claude/settings.local.json da vardır; kanca ekleme ve değiştirme testi ve doğrulayıcısıyla sorulmaz.",
            "soz": "`.claude/settings.local.json` (kanca ekleme ve değiştirme hariç: testi ve doğrulayıcısıyla sorulmaz)"
          }
        },
        {
          "id": "b11-d4-s6",
          "tur": "coktan",
          "kart": 4,
          "soru": "Listedeki bir iş, ör. bir settings.json değişikliği, sana sorulmadan yapıldı. Kurala göre ne olur?",
          "secenekler": ["Bir şey olmaz; iş zaten yapıldı", "Değişiklik kendiliğinden geri alınır", "Claude sana e-posta gönderir", "KARARLAR'a 'Düzeltme: onaysız riskli iş:' önekiyle yazılır"],
          "dogru": 3,
          "ipucu": "Sorulmadan yapılan işin sonradan görülebilmesi için ne yapılır, düşün.",
          "aciklama": "Kural bunu ister: listedeki bir iş sorulmadan yapılırsa KARARLAR'a 'Düzeltme: onaysız riskli iş:' önekiyle yazılır.",
          "kaynak": {
            "adres": "CLAUDE.md:46",
            "okuma": "2026-11-17",
            "dayanak": "Listedeki işin sorulmadan yapılması KARARLAR'a 'Düzeltme: onaysız riskli iş:' önekiyle yazılır.",
            "soz": "Listedeki işin sorulmadan yapılması KARARLAR'a `- Düzeltme: onaysız riskli iş:` önekiyle yazılır"
          }
        },
        {
          "id": "b11-d4-s7",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude'a yazılacak üç tariften hangisi bizim kurala uyar?",
          "secenekler": ["deny listesinden iki satırı sil, testleri koş, bana sorma.", "Kum havuzunu kapat, testleri koş, işi bitince tek satırla bildir.", "Kancayı testiyle yaz, settings.json'a kaydet, doğrulayıcıya ver."],
          "dogru": 2,
          "ipucu": "Hangi tarif istisnanın iki şartını taşıyor, bak.",
          "aciklama": "Kanca kaydı testi ve doğrulayıcısıyla sorulmadan yapılabilir. deny listesi ve kum havuzu ise settings.json'un sorulan kısmıdır; testleri koşmak bunu değiştirmez.",
          "kaynak": {
            "adres": "CLAUDE.md:46",
            "okuma": "2026-11-17",
            "dayanak": "settings.json değişikliği her seferinde sorulur; kanca ekleme ve değiştirme testi ve doğrulayıcısıyla sorulmaz.",
            "soz": "`.claude/settings.json` ve `.claude/settings.local.json` (kanca ekleme ve değiştirme hariç: testi ve doğrulayıcısıyla sorulmaz)"
          }
        },
        {
          "id": "b11-d4-s8",
          "tur": "sirala",
          "kart": 3,
          "soru": "Bizde yeni kanca eklerken izlenen adımları sırala.",
          "adimlar": [
            "Aynı işi yapan kanca var mı diye ara",
            "Kancayı ve testini yan yana yaz",
            "Kancayı settings.json'a olay ve eşleşmesiyle ekle",
            "Gerçek kayıtlarla bir kez koştur",
            "Testleri ve denetimi koş, doğrulayıcıya ver"
          ],
          "ipucu": "Yazmadan önce ne yapılır, ayara ekledikten sonra ne sınanır, düşün.",
          "aciklama": "kanca-denetim skill'i önce aramayı, sonra kod ve testi, settings.json'a eklemeyi, gerçek kayıtlarda koşuyu, en sonda sınamayı ve doğrulayıcıyı ister.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md:16",
            "okuma": "2026-11-17",
            "dayanak": "Adımlar sırasıyla önce aramak, kodu ve testi yan yana yazmak, settings.json'a kaydetmek, gerçek kayıtta koşmak, bağlı belgeleri güncellemek ve sınayıp doğrulayıcıya vermektir.",
            "soz": "Önce ara: aynı işi yapan kanca ya da kontrol var mı"
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
        "Eklentiler pazar yerinde (marketplace) listelenir ama bu güvenilir oldukları demek değildir. Eklenti senin yetkinle kod çalıştırır; kurmadan önce kancalarına, ajanlarına ve MCP sunucularına bak.",
        "Eklenti skill'lerinin başında eklentinin adı bulunur, ör. /eklenti-adi:review. Böylece birden çok eklenti bir arada durabilir.",
        "Bizim .claude/settings.json'daki enabledPlugins, eklentileri eklenti-adı@pazar-yeri-adı biçimindeki anahtarlarla açar ya da kapatır.",
        "Bizde on iki girişin her biri false: o eklentiler bu projede kapalı.",
        "Proje ayarı kullanıcı ayarının üstündedir. Bu yüzden bir projenin açtığı eklentiyi kendin için kapatmanın yeri yerel dosyadır."
      ],
      "terimler": [
        {"tr": "eklenti", "en": "plugin", "aciklama": "Skill, kanca, alt ajan ve MCP sunucusunu tek kurulabilir pakette toplayan birim."},
        {"tr": "pazar yeri", "en": "marketplace", "aciklama": "Eklentilerin listelendiği ve kurulduğu ortak kaynak."}
      ],
      "sorular": [
        {
          "id": "b11-d5-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Eklenti (plugin) nedir?",
          "secenekler": ["Claude'un modelini değiştiren bir ayar anahtarı", "Skill, kanca ve alt ajanları tek pakette toplayan birim", "Yalnız terminalde çalışan tek bir komut", "CLAUDE.md'nin takımla git üzerinden paylaşılan ortak kopyası"],
          "dogru": 1,
          "ipucu": "Aynı kurulumu başka bir klasöre taşımak isteseydin neye ihtiyaç duyardın, düşün.",
          "aciklama": "Eklenti skill'leri, kancaları, alt ajanları ve MCP sunucularını tek kurulabilir birimde toplar. Aynı kurulumu başka depolarda kullanmak ya da paylaşmak için yapılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Eklenti, skill'leri, kancaları, alt ajanları ve MCP sunucularını tek kurulabilir birimde toplayan paketleme katmanıdır."
          }
        },
        {
          "id": "b11-d5-s2",
          "tur": "dogru-yanlis",
          "kart": 1,
          "soru": "Bir eklenti kurduğunda onun kancaları senin kendi kancalarının yerine geçer.",
          "dogru": false,
          "ipucu": "Eklentinin bileşenleri seninkilerle nasıl bir arada durur, düşün.",
          "aciklama": "Eklenti yapılandırmanın üstüne yazmaz; bileşenleri seninkilerin yanında çalışır. Onun PreToolUse kancası da seninki de her araç çağrısında çalışır.",
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
          "soru": "Bir eklentiyi yalnız skill'leri için kurmak istiyorsun. Kurmadan önce ne yapmalısın?",
          "secenekler": ["Pazar yerinde listelendiyse güvenilirdir, hemen kurarım", "Önce kurar, sonra ne yaptığına bakarım", "Kancalarına, ajanlarına ve MCP sunucularına bakarım", "Yalnız skill'lerinin adını okurum"],
          "dogru": 2,
          "ipucu": "Eklenti hangi yetkiyle kod çalıştırır, düşün.",
          "aciklama": "Eklenti senin yetkinle kod çalıştırır ve skill'i için kursan bile kancaları da gelir. Listelenmiş olmak güvenilir olmak demek değildir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/plugins",
            "kopya": "ders-action-09-plugins.md",
            "okuma": "2026-11-15",
            "dayanak": "Eklenti senin yetkinle kod çalıştırdığı için kurmadan önce kancalarına, ajanlarına ve MCP sunucularına bakılır."
          }
        },
        {
          "id": "b11-d5-s4",
          "tur": "bosluk",
          "kart": 4,
          "soru": "settings.json'daki operations@synced anahtarında @ işaretinden sonraki synced, ___ adıdır.",
          "secenekler": ["eklentinin", "kancanın", "eklenti sürümünün", "pazar yerinin"],
          "dogru": 3,
          "ipucu": "Anahtarın biçimini düşün: iki ad, ortada @.",
          "aciklama": "enabledPlugins anahtarları eklenti-adı@pazar-yeri-adı biçimindedir. Yani operations eklentinin, synced pazar yerinin adıdır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings-reference",
            "kopya": "settings-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "enabledPlugins eklentileri eklenti-adı@pazar-yeri-adı biçimindeki anahtarlarla açar ya da kapatır."
          }
        },
        {
          "id": "b11-d5-s5",
          "tur": "coktan",
          "kart": 5,
          "soru": "Bizim settings.json'daki enabledPlugins bölümü neyi gösterir?",
          "secenekler": ["Listedeki on iki eklenti bu projede kapalı", "Listedeki on iki eklenti bu projede açık", "Eklentiler yalnız terminal oturumlarında açık", "Eklenti listesi boş"],
          "dogru": 0,
          "ipucu": "Kartta bu girişlerin değeri anlatılıyor; o değerin eklentiye ne yaptığını düşün.",
          "aciklama": "On iki girişin her biri false taşır; false o eklentiyi bu projede kapatır.",
          "kaynak": {
            "adres": ".claude/settings.json:280",
            "okuma": "2026-11-17",
            "dayanak": "enabledPlugins altındaki on iki girişin her biri false değerini taşır.",
            "soz": "\"enabledPlugins\": {"
          }
        },
        {
          "id": "b11-d5-s6",
          "tur": "coktan",
          "kart": 3,
          "soru": "İki ayrı eklentide review adlı birer skill var. Neden çakışmazlar?",
          "secenekler": ["Claude birini rastgele kapatır", "Yalnız ilk kurulan çalışır", "Her biri eklenti adıyla çağrılır, ör. /eklenti-adi:review", "Eklentiler skill taşıyamaz"],
          "dogru": 2,
          "ipucu": "Eklenti skill'lerinin adının nasıl yazıldığını hatırla.",
          "aciklama": "Eklenti skill'leri ad alanlıdır: başlarında eklentinin adı vardır. Böylece birden çok eklenti bir arada durabilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Eklenti skill'leri ad alanlıdır, ör. /my-plugin:review, böylece birden çok eklenti bir arada durabilir."
          }
        },
        {
          "id": "b11-d5-s7",
          "tur": "coktan",
          "kart": 6,
          "soru": "Bir projenin .claude/settings.json dosyası bir eklentiyi açıyor. Onu yalnız kendin için, o projede kapatmak istiyorsun. false değerini hangi dosyaya yazarsın?",
          "secenekler": ["Yerel proje dosyasına", "Kullanıcı dosyasına", "CLAUDE.md'ye", "Paylaşılan proje dosyasına"],
          "dogru": 0,
          "ipucu": "Kullanıcı katmanının proje katmanına göre yerini hatırla.",
          "aciklama": "Paylaşılan dosya herkesi etkiler, kullanıcı dosyası ise projenin altında kalır. Yerel proje dosyası (.claude/settings.local.json) projenin üstündedir ve yalnız seni etkiler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings-reference",
            "kopya": "settings-reference.md",
            "okuma": "2026-11-15",
            "dayanak": "Kullanıcı dosyasındaki false projenin açtığı eklentiyi kapatmaz; kendi makinende kapatmak için .claude/settings.local.json'a false yazılır."
          }
        }
      ]
    },
    {
      "id": "b11-d6",
      "baslik": "Yüklenen ayarı doğrulamak",
      "hedefler": [
        "/context, /hooks, /mcp ve /doctor komutlarının neyi gösterdiğini ayırt edebilir",
        "Bir ayar etkisiz kaldığında bakılacak sırayı anlatabilir"
      ],
      "anlatim": [
        "Bir ayar etkisizse dosya yüklenmemiş, beklenmedik yerden yüklenmiş ya da ezilmiş olabilir. En sık neden, başka bir kapsamın onu ezmesidir.",
        "İlk bakış /context: CLAUDE.md, skill ve MCP araçlarının bağlam penceresinde (context window) olup olmadığını gösterir.",
        "/context dosyanın yüklendiğini gösteriyor ama Claude kurala uymuyorsa sorun büyük olasılıkla yüklemede değil, kuralın yazılışındadır.",
        "/status hangi ayar dosyalarının yüklendiğini sayar. settings.json'a yazdığın anahtar etkisizse önce ona bakılır.",
        "/hooks etkin kancaları, /mcp bağlı MCP sunucularını ve durumlarını, /doctor kurulum sağlığını ve geçersiz ayar dosyalarını gösterir.",
        "Kanca /hooks listesinde görünüyor ama tetiklenmiyorsa olağan neden eşleştiricidir (matcher). O da doğruysa terminalde claude --debug ile oturum açıp araç çağrısını canlı izlersin.",
        "Kanca ayarı düzenlenince değişiklik çalışan oturuma kısa bir beklemeyle geçer; yeniden başlatmak gerekmez.",
        "Bizde yeni PreToolUse ya da Stop kancasını araclar/kanca_oynat.py, geçmiş sohbet kayıtlarındaki gerçek çağrılarla dener. Kancanın kaç kez durdurduğunu, not bıraktığını ve hata verdiğini sayar."
      ],
      "terimler": [
        {"tr": "bağlam penceresi", "en": "context window", "aciklama": "Claude'un o oturumda aynı anda gördüğü her şey: CLAUDE.md, skill açıklamaları, araçlar ve konuşma."},
        {"tr": "eşleştirici", "en": "matcher", "aciklama": "Kancanın hangi araçta çalışacağını seçen metin, ör. Bash."}
      ],
      "sorular": [
        {
          "id": "b11-d6-s1",
          "tur": "eslestir",
          "kart": 4,
          "soru": "Her komutu gösterdiği şeyle eşleştir.",
          "ciftler": [
            ["/context", "Bağlam penceresinde neyin yer kapladığı"],
            ["/hooks", "Etkin kanca yapılandırmaları"],
            ["/mcp", "Bağlı MCP sunucuları ve durumları"],
            ["/doctor", "Kurulum sağlığı ve geçersiz ayar dosyaları"]
          ],
          "ipucu": "Her komutun adını bir konu başlığı gibi oku.",
          "aciklama": "/context bağlamı, /hooks kancaları, /mcp MCP sunucularını, /doctor kurulumun ve ayar dosyalarının sağlığını gösterir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "/context bağlamı kaplayan her şeyi, /hooks etkin kanca yapılandırmalarını, /mcp bağlı MCP sunucularını ve durumlarını, /doctor kurulum sağlığını ve geçersiz ayar dosyalarını gösterir."
          }
        },
        {
          "id": "b11-d6-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "CLAUDE.md'ye eklediğin bir kuralı Claude hiç uygulamıyor. Dosyanın yüklenip yüklenmediğini görmek için önce hangi komutu yazarsın?",
          "secenekler": ["/permissions", "/context", "/hooks", "/doctor"],
          "dogru": 1,
          "ipucu": "Hangi komut oturumda yer kaplayan her şeyi bölüm bölüm döker, düşün.",
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
          "kart": 2,
          "soru": "/context, CLAUDE.md'nin yüklendiğini gösteriyor ama Claude kurala yine uymuyor. Resmi sayfaya göre sorun büyük olasılıkla nerede?",
          "secenekler": ["Kuralın nasıl yazıldığında", "Ayar dosyasının bozuk olmasında", "MCP sunucusunun bağlanamamasında", "Bilgisayarın yavaşlığında"],
          "dogru": 0,
          "ipucu": "Yükleme sorunu elendiyse geriye ne kalır, düşün.",
          "aciklama": "Dosya yüklendiyse sorun yükleme değil, talimatın yazılışıdır. Belirsiz, çelişen ya da çok uzamış dosyada kalan kural daha az uygulanır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "/context dosyanın yüklendiğini doğruluyor ama Claude talimata uymuyorsa sorun büyük olasılıkla yüklenmede değil, talimatın nasıl yazıldığındadır."
          }
        },
        {
          "id": "b11-d6-s4",
          "tur": "sirala",
          "kart": 5,
          "soru": "Tanımladığın bir kanca hiç tetiklenmiyor. Resmi sayfadaki bakış sırasına göre adımları diz.",
          "adimlar": [
            "/hooks ile kancanın yüklenip yüklenmediğine bak",
            "Eşleştiricideki araç adının yazımını denetle",
            "Terminalde claude --debug ile bir oturum aç",
            "Kancayı tetikleyecek araç çağrısını yaptırıp kaydı izle"
          ],
          "ipucu": "Önce kancanın yüklenip yüklenmediği, sonra neden tetiklenmediği sorulur.",
          "aciklama": "Listede olmayan kanca hiç yüklenmemiştir; listede olup tetiklenmeyende olağan neden eşleştiricidir. O da değilse claude --debug ile açılan oturumda araç çağrısı yaptırılıp kanca canlı izlenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "Önce /hooks koşulur; kanca görünüp çalışmıyorsa olağan neden matcher'dır, yine çalışmıyorsa claude --debug ile oturum başlatılıp araç çağrısı tetiklenir ve kanca değerlendirmesi canlı izlenir."
          }
        },
        {
          "id": "b11-d6-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "settings.json'a bir anahtar yazdın ama Claude Code hiç yazmamışsın gibi davranıyor. Resmi sayfaya göre ilk adım ne?",
          "secenekler": ["Claude Code'u silip yeniden kurmak", "Aynı anahtarı üç dosyaya birden yazmak", "/status ile yüklenen ayar dosyalarına bakmak", "Bilgisayarı yeniden başlatmak"],
          "dogru": 2,
          "ipucu": "Önce dosyanın gerçekten okunup okunmadığını öğrenmek gerekir.",
          "aciklama": "Resmi sayfa etkisiz ayarda önce /status ile yüklenen dosyalara bakmayı, sonra belirtiyi bulmayı söyler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/settings",
            "kopya": "settings.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir anahtarı ayarladığın halde Claude Code öyle davranmıyorsa önce /status ile hangi dosyaları yüklediğine bakılır, sonra belirti bulunur."
          }
        },
        {
          "id": "b11-d6-s6",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bir ayar etkisiz görünüyorsa resmi sayfaya göre en olağan neden nedir?",
          "secenekler": ["Claude'un ayarı unutması", "Ayar dosyasının çok kısa olması", "İnternet bağlantısının yavaş olması", "Başka bir kapsamın onu ezmesi"],
          "dogru": 3,
          "ipucu": "Öncelik dersinde katmanların birbirine ne yaptığını hatırla.",
          "aciklama": "Ayarlar kapsamlar arasında birleşir ve yakın kapsam geniş olanı ezer. Ortam değişkenleri de ayrı bir ezme katmanı gibi davranır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir ayar etkisiz görünüyorsa yazdığın değeri genellikle başka bir kapsam ya da ortam değişkeni eziyordur."
          }
        },
        {
          "id": "b11-d6-s7",
          "tur": "dogru-yanlis",
          "kart": 6,
          "soru": "settings.json'daki bir kancayı değiştirdikten sonra etkisini görmek için oturumu mutlaka yeniden başlatmalısın.",
          "dogru": false,
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
          "kart": 7,
          "soru": "Bizde yeni bir PreToolUse kancası eklendi. kanca-denetim skill'ine göre onu geçmiş sohbet kayıtlarıyla hangi betik dener?",
          "secenekler": ["araclar/ayar_damgasi.py", "denetim.py --sahne", "araclar/kanca_oynat.py", ".claude/hooks/koruma.py"],
          "dogru": 2,
          "ipucu": "Kartta kancanın durdurma, not ve hata sayısını çıkaran aracı hatırla.",
          "aciklama": "kanca_oynat.py PreToolUse ve Stop kancalarını geçmiş sohbet kayıtlarındaki gerçek çağrılarla çalıştırır; durdurma, not ve hata sayar ve yalnız okur.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md:19",
            "okuma": "2026-11-17",
            "dayanak": "PreToolUse ve Stop kancasında araclar/kanca_oynat.py gerçek dökümlerle çağrı, durdurma, not ve hata sayar.",
            "soz": "gerçek dökümlerle çağrı, durdurma, not ve hata sayar"
          }
        }
      ]
    }
  ]
});
