// icerik/birim-03.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b03",
  "sira": 3,
  "baslik": "İzinler ve izin modları",
  "amac": "Claude'un hangi işi sana sormadan yapacağını belirleyen izin sistemini, altı izin modunu, izin kurallarını ve kum havuzunu tanımak; bizim ayar dosyasındaki ve CLAUDE.md'deki izin satırlarını okuyup anlatabilmek.",
  "dersler": [
    {
      "id": "b03-d1",
      "baslik": "İzin sistemi neden var",
      "hedefler": [
        "Okuma, dosya düzenleme ve komut çalıştırma arasındaki izin farkını anlatabilir.",
        "İzin penceresindeki seçeneklerin ne demek olduğunu anlatabilir.",
        "İzin kuralı ile CLAUDE.md'deki talimatın farkını ayırt edebilir."
      ],
      "anlatim": [
        "Claude Code dosya okur, dosya düzenler, komut çalıştırır. Hangisinde sana soracağını izin sistemi belirler. Manual modda çalışma klasöründeki dosyayı okumak sormadan olur. Dosya düzenlemek ve çoğu kabuk komutu (Bash) için önce bir izin penceresi (permission prompt) açılır; yalnız yerleşik salt okunur komutlar sormadan çalışır.",
        "Pencere Claude'un ne yapacağını ve seçeneklerini gösterir. Belgedeki terminal örneğinde dört seçenek var: Yes; Yes, and don't ask again; Yes, and switch to auto mode; No. Bir komut için “bir daha sorma” dersen kural deponun .claude/settings.local.json dosyasına yazılır, sonraki oturumlarda da geçer. Dosya düzenleme onayı ise yalnız oturum bitene kadar sürer.",
        "Bir ayrım önemli: izin kurallarını model değil Claude Code uygular. CLAUDE.md'deki talimat Claude'un ne yapmaya çalışacağını şekillendirir ama Claude Code'un neye izin verdiğini değiştirmez. Bizim CLAUDE.md:29 satırı da bir talimattır: izin modunu kullanıcı seçer, kapılar her modda geçerlidir."
      ],
      "terimler": [
        {"tr": "izin penceresi", "en": "permission prompt", "aciklama": "Claude bir işi yapmadan önce açılan, ne yapacağını ve seçeneklerini gösteren onay kutusu."}
      ],
      "sorular": [
        {
          "id": "b03-d1-s1",
          "tur": "eslestir",
          "soru": "Manual modda her iş türünü izin davranışıyla eşleştir.",
          "ciftler": [
            ["Çalışma klasöründe dosya okumak", "Onay istemez"],
            ["Kabuk komutu çalıştırmak", "Sorar; “bir daha sorma” depoda kalıcı olur"],
            ["Dosya düzenlemek", "Sorar; “bir daha sorma” oturum bitince biter"]
          ],
          "ipucu": "Hangi onayın bir dosyaya kaydedildiğini, hangisinin oturumla bittiğini düşün.",
          "aciklama": "Çalışma klasöründe okuma onaysızdır. Komut onayı ayar dosyasına kaydedilir, dosya düzenleme onayı kaydedilmez ve oturumla biter.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Manual modda çalışma klasöründe okuma onay istemez, kabuk komutu ve dosya düzenleme onay ister; “bir daha sorma” komutta depo için kalıcıdır, dosya düzenlemede oturum sonuna kadar sürer."
          }
        },
        {
          "id": "b03-d1-s2",
          "tur": "dogru-yanlis",
          "soru": "Manual modda Claude, çalışma klasöründeki bir dosyayı okumak için de senden izin ister.",
          "dogru": false,
          "ipucu": "Okumanın, dosya düzenleme ve komut çalıştırmadan farkını düşün.",
          "aciklama": "Yanlış: çalışma klasöründe ve eklenen klasörlerde dosya okumak onay istemez. Onay, düzenleme ve çoğu komut içindir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Dosya okuma ve Grep gibi salt okunur araçlar, çalışma klasörü ve eklenen klasörler içinde onay istemez."
          }
        },
        {
          "id": "b03-d1-s3",
          "tur": "coktan",
          "soru": "Claude bir kabuk komutu için izin istedi, sen “Yes, and don't ask again” seçtin. Bu onay nereye kaydedilir?",
          "secenekler": [
            "Proje kökündeki CLAUDE.md dosyasına",
            ".claude/settings.local.json dosyasına",
            "Hiçbir yere; oturum kapanınca onay unutulur",
            "Claude'un kendi hafıza klasörüne"
          ],
          "dogru": 1,
          "ipucu": "Kural bir sonraki oturumda da geçerli olacaksa bir ayar dosyasında yaşamalı.",
          "aciklama": "Bash komutu ya da WebFetch alan adı için kalıcı onay, git deposunun kökündeki .claude/settings.local.json dosyasına yazılır. Kural o depodaki sonraki oturumlarda da geçer.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "“Yes, and don't ask again” seçilip onay kalıcı kaydedildiğinde, örneğin bir Bash komutu için, Claude Code kuralı git deposunun kökündeki .claude/settings.local.json dosyasına yazar."
          }
        },
        {
          "id": "b03-d1-s4",
          "tur": "coktan",
          "soru": "Manual modda Claude bir dosyayı düzenlemek istedi, sen “bir daha sorma” seçeneğini seçtin. Yarın yeni oturum açınca ne olur?",
          "secenekler": [
            "Düzenleme için yine sorar",
            "Hiç sormaz; onay kalıcıdır",
            "Komutlar için de artık sormaz"
          ],
          "dogru": 0,
          "ipucu": "Dosya düzenleme onayının bir dosyaya kaydedilip kaydedilmediğini düşün.",
          "aciklama": "Dosya değiştirme onayı dosyaya kaydedilmez, oturum bitene kadar sürer. Yeni oturumda Manual mod yine sorar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Dosya değiştirme onayı dosyaya kaydedilmez; tablodaki gibi oturum bitene kadar sürer."
          }
        },
        {
          "id": "b03-d1-s5",
          "tur": "coktan",
          "soru": "Claude'un belli bir komutu hiç çalıştıramamasını istiyorsun ve bunu Claude Code'un kendisi zorla uygulasın. Hangi tarif doğru?",
          "secenekler": [
            "CLAUDE.md'ye “bu komutu çalıştırma” satırı ekle",
            "Sohbette bir kez “bunu yapma” de",
            "Ayar dosyasına o komut için bir deny kuralı ekle"
          ],
          "dogru": 2,
          "ipucu": "Hangisi modelin niyetine, hangisi Claude Code'un uyguladığı kurala dayanıyor, ayır.",
          "aciklama": "İzin kurallarını Claude Code uygular; CLAUDE.md ve sohbetteki talimat yalnız Claude'un ne yapmaya çalışacağını şekillendirir. Bizde ayar dosyası değişikliği, kanca ekleme ve değiştirme hariç, her seferinde kullanıcıya sorulur (CLAUDE.md:46).",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "İzin kurallarını model değil Claude Code uygular; istemdeki ya da CLAUDE.md'deki talimatlar Claude'un ne yapmaya çalışacağını şekillendirir, Claude Code'un neye izin verdiğini değiştirmez."
          }
        },
        {
          "id": "b03-d1-s6",
          "tur": "bosluk",
          "soru": "Manual modda kabuk komutları onay ister; yalnız yerleşik ___ komutlar sormadan çalışır.",
          "secenekler": [
            "salt okunur",
            "dosya silen",
            "ağa bağlanan"
          ],
          "dogru": 0,
          "ipucu": "Hangi tür komutun hiçbir şeyi değiştirmediğini düşün.",
          "aciklama": "Kabuk komutları Manual modda onay ister; istisna, yerleşik salt okunur komut kümesidir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Bash komutları onay ister, yerleşik salt okunur komut kümesi hariç."
          }
        }
      ]
    },
    {
      "id": "b03-d2",
      "baslik": "Altı izin modu (permission mode)",
      "hedefler": [
        "Altı modun her birinde neyin sormadan çalıştığını anlatabilir.",
        "Verilen bir iş için uygun modu ayırt edebilir."
      ],
      "anlatim": [
        "İzin modu, Claude'un sana sormadan ne yapabileceğini belirler; her mod kolaylık ile gözetim arasında başka bir denge kurar. Manual (ayar adı default): yalnız okuma; her eylemi kendin gözden geçirmek ve hassas iş için. Accept edits (acceptEdits): okuma, dosya düzenleme ve mkdir, mv gibi sık dosya komutları; düzenlemeleri tek tek onaylamak yerine sonradan gözden geçirmek için.",
        "Plan: okuma; Auto kullanılabiliyorsa bir sınıflandırıcının (classifier) onayladığı komutlar da. Kaynak dosyayı düzenlemez; değiştirmeden önce kodu tanımak için. Auto: her şey, arka planda güvenlik denetimiyle; sınıflandırıcı eylemleri senin yerine gözden geçirir. Uzun işler ve izin sorusu yorgunluğunu azaltmak için. Masaüstünde Auto, kullanılabilir olduğunda görünür.",
        "Don't ask (dontAsk): çalışma klasöründe okuma ve önceden izin verilen araçlar; soracak olan reddedilir (kurulu bir mod eklentisi bazılarını onaylayabilir). Masaüstünde yok, yalnız terminalde (CLI). Bypass permissions (bypassPermissions): her şey; yalnız yalıtılmış kap ve sanal makine için. Masaüstünde Pro, Max ve Ultra'da Ayarlar'daki anahtarla, Team ve Enterprise'da kuruluş politikasıyla açılır."
      ],
      "terimler": [
        {"tr": "izin modu", "en": "permission mode", "aciklama": "Claude'un hangi işi sana sormadan yapabileceğini belirleyen oturum ayarı."},
        {"tr": "sınıflandırıcı", "en": "classifier", "aciklama": "Auto modunda eylemleri çalışmadan önce senin yerine gözden geçiren ayrı model."}
      ],
      "sorular": [
        {
          "id": "b03-d2-s1",
          "tur": "eslestir",
          "soru": "Her modu, sormadan çalıştırdığı işlerle eşleştir.",
          "ciftler": [
            ["Manual (default)", "Yalnız okuma"],
            ["Accept edits (acceptEdits)", "Okuma, dosya düzenleme ve sık dosya komutları"],
            ["Auto (auto)", "Her şey, arka planda güvenlik denetimiyle"],
            ["Bypass permissions", "Her şey, denetimsiz; yalnız yalıtılmış ortamda"]
          ],
          "ipucu": "Hangi mod arka planda bir denetim yapıyor, hangisi hiç yapmıyor, ayır.",
          "aciklama": "Manual yalnız okumayı, Accept edits düzenlemeyi de sormadan yapar. Auto her şeyi bir güvenlik denetimiyle, Bypass permissions denetimsiz çalıştırır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Mod tablosunda default yalnız okumayı, acceptEdits okuma, dosya düzenleme ve sık dosya komutlarını, auto arka plan güvenlik denetimiyle her şeyi, bypassPermissions ise her şeyi sormadan çalıştırır."
          }
        },
        {
          "id": "b03-d2-s2",
          "tur": "eslestir",
          "soru": "Her işi ona en uygun modla eşleştir.",
          "ciftler": [
            ["Her eylemi kendin gözden geçirmek, hassas iş", "Manual"],
            ["Düzenlemeleri sonradan topluca gözden geçirmek", "Accept edits"],
            ["Değiştirmeden önce kodu tanımak", "Plan"],
            ["Uzun işlerde izin sorusu yorgunluğunu azaltmak", "Auto"]
          ],
          "ipucu": "Her modun sende ne kadar gözetim bıraktığını düşün.",
          "aciklama": "Manual her eylemi senin onayına bırakır; Accept edits düzenlemeyi sormadan yapar, gözden geçirmeyi sonraya bırakır. Plan değiştirmeden keşfeder, Auto ise uzun işte eylemleri senin yerine bir sınıflandırıcıya denetletip soru yorgunluğunu azaltır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Manual modu tabloda ayar adı default ile geçer; tablonun en uygun sütununda default her eylemi kendin gözden geçirmek ve hassas iş, acceptEdits gözden geçirdiğin kod üzerinde çalışmak (düzenlemeleri tek tek onaylamak yerine sonradan gözden geçirmek), plan değiştirmeden önce kod tabanını keşfetmek, auto uzun işler ve izin sorusu yorgunluğunu azaltmak içindir."
          }
        },
        {
          "id": "b03-d2-s3",
          "tur": "coktan",
          "soru": "Terminalde, başında kimsenin olmadığı bir gece işi: Claude yalnız önceden izin verilen araçları kullansın, soracak olan her şey reddedilsin. Hangi mod?",
          "secenekler": [
            "acceptEdits",
            "dontAsk",
            "plan",
            "bypassPermissions"
          ],
          "dogru": 1,
          "ipucu": "Kimse onay veremeyecekse iş bir onay penceresinde takılıp kalmamalı.",
          "aciklama": "Don't ask, onay verecek kimsenin olmadığı otomatik işler içindir; soracak olan her şey reddedilir, iş takılmaz. Bypass permissions ise denetimi tamamen kaldırır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/permission-modes",
            "kopya": "ders-action-04-permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Don't ask, onay verecek kimsenin olmadığı durumlar için doğru seçimdir; Claude önceden izin verilen araçları çalıştırır, soracak olan her şey kendiliğinden reddedilir."
          }
        },
        {
          "id": "b03-d2-s4",
          "tur": "dogru-yanlis",
          "soru": "Bypass permissions, kendi bilgisayarında günlük iş için önerilen moddur.",
          "dogru": false,
          "ipucu": "Bu mod hiç denetim yapmaz; nerede zarar veremeyeceğini düşün.",
          "aciklama": "Yanlış: belge bu modu yalnız yalıtılmış kaplar ve sanal makineler için önerir. Orada Claude Code ana bilgisayarına zarar veremez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "bypassPermissions yalnız yalıtılmış kaplar ve sanal makineler için uygundur."
          }
        },
        {
          "id": "b03-d2-s5",
          "tur": "coktan",
          "soru": "Masaüstü Code sekmesinin mod seçicisinde hangisi yoktur?",
          "secenekler": [
            "Plan",
            "Accept edits",
            "dontAsk",
            "Manual"
          ],
          "dogru": 2,
          "ipucu": "Bir mod masaüstünde değil, yalnız terminalde var.",
          "aciklama": "dontAsk yalnız terminalde (CLI) kullanılabilir. Masaüstü mod seçicisinde Manual, Accept edits ve Plan var; Auto ve Bypass permissions açık olduğunda görünür.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "dontAsk izin modu yalnız CLI'da kullanılabilir."
          }
        },
        {
          "id": "b03-d2-s6",
          "tur": "bosluk",
          "soru": "Auto modunda eylemleri, çalışmadan önce ayrı bir ___ gözden geçirir.",
          "secenekler": [
            "kanca betiği",
            "sınıflandırıcı model",
            "CLAUDE.md satırı"
          ],
          "dogru": 1,
          "ipucu": "Anlatımda Auto için kimin senin yerine baktığı yazıyordu.",
          "aciklama": "Auto modunda ayrı bir sınıflandırıcı model eylemleri çalışmadan önce inceler ve isteğinin ötesine geçeni engeller.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Ayrı bir sınıflandırıcı model eylemleri çalışmadan önce inceler ve isteğinin ötesine geçen her şeyi engeller."
          }
        },
        {
          "id": "b03-d2-s7",
          "tur": "coktan",
          "soru": "Kendi bilgisayarında değişiklikleri tek tek onaylamak yerine iş bitince fark görünümünde topluca gözden geçirmek istiyorsun. Hangi mod?",
          "secenekler": [
            "Accept edits",
            "Manual",
            "Plan",
            "Bypass permissions"
          ],
          "dogru": 0,
          "ipucu": "Hangi mod düzenlemeyi sormadan yapıp gözden geçirmeyi sonraya bırakır?",
          "aciklama": "Accept edits, değişikliği her adımda onaylamak yerine sonradan gözden geçirmek için önerilir. Manual her düzenlemeyi sorar, Plan hiç düzenlemez, Bypass permissions ise yalnız yalıtılmış kap ve sanal makine içindir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Değişiklikleri satır satır onaylamak yerine sonradan editörde ya da git diff ile gözden geçirmek istediğinde acceptEdits kullanılır."
          }
        }
      ]
    },
    {
      "id": "b03-d3",
      "baslik": "Plan modu (plan mode)",
      "hedefler": [
        "Plan modunun dosyayı değiştirmeden araştırdığını anlatabilir.",
        "Planı onaylamadan önce neye bakılacağını anlatabilir.",
        "Plan modunu bizim plan kapısından ayırt edebilir."
      ],
      "anlatim": [
        "Plan modunda Claude dosyaları okur, keşif için komut çalıştırır ve bir plan yazar, ama kaynak dosyalarını düzenlemez. Düzenlemeler sen planı onaylayana kadar kapalı kalır (terminalde bypass açıksa istisna var). Masaüstünde mod seçiciden Plan'ı seçersin; seçim yalnız o oturum için geçer.",
        "Plan hazır olunca Claude nasıl devam edeceğini sorar: onaylayıp başlamak, her düzenlemeyi tek tek onaylamak ya da planlamaya devam edip neyin değişeceğini söylemek. Onaylamadan önce bak: plan beklediğin dosyaları adlandırıyor mu? Değilse eksiği söyle, yeni planı oku.",
        "Bizim plan kapısı (CLAUDE.md:43) bir izin modu değil, talimattır. İş birden fazla oturuma yayılacaksa, geri alınamayan bir şeye dokunuyorsa ya da kullanıcının yazdığı bir kuralı değiştiriyorsa Claude önce plan sunar ve durur. Planda örneğin bulgu özeti, yapılacaklar sırası, riskler, en güçlü karşı argüman ve en az iki seçenek bulunur."
      ],
      "terimler": [
        {"tr": "plan modu", "en": "plan mode", "aciklama": "Claude'un dosyaları okuyup araştırdığı, kaynak dosyalarını düzenlemeden plan önerdiği izin modu."}
      ],
      "sorular": [
        {
          "id": "b03-d3-s1",
          "tur": "dogru-yanlis",
          "soru": "Plan modunda Claude dosyaları okuyabilir ve keşif için komut çalıştırabilir.",
          "dogru": true,
          "ipucu": "Plan modu araştırma için var; araştırma neleri gerektirir, düşün.",
          "aciklama": "Doğru: Plan modunda Claude okur, keşif için kabuk komutu çalıştırır ve plan yazar. Yalnız kaynak dosyalarını düzenlemez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Plan modunda Claude dosyaları okur, keşif için kabuk komutları çalıştırır ve bir plan yazar, ama kaynak dosyalarını düzenlemez."
          }
        },
        {
          "id": "b03-d3-s2",
          "tur": "coktan",
          "soru": "Plan modunda Claude hangisini yapmaz?",
          "secenekler": [
            "Dosyaları okumak",
            "Kaynak dosyayı düzenlemek",
            "Bir plan yazmak",
            "Keşif için komut çalıştırmak"
          ],
          "dogru": 1,
          "ipucu": "Modun adı, işin hangi aşamasında durduğunu söylüyor.",
          "aciklama": "Plan modu değişiklik önerir ama yapmaz; düzenleme sen planı onaylayana kadar kapalıdır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Plan modu Claude'a değişiklikleri yapmadan araştırmasını ve önermesini söyler; bypass açık etkileşimli terminal oturumları dışında düzenlemeler sen planı onaylayana kadar engelli kalır."
          }
        },
        {
          "id": "b03-d3-s3",
          "tur": "sirala",
          "soru": "Plan moduyla küçük bir değişiklik yaptırmanın adımlarını sırala.",
          "adimlar": [
            "Mod seçiciden Plan'ı seç (terminalde Shift+Tab)",
            "Yapacağın küçük değişikliği yaz",
            "Claude'un hazırladığı planı oku",
            "Plan beklediğin dosyaları adlandırıyor mu, bak",
            "Uygunsa onayla, değilse eksiği söyle"
          ],
          "ipucu": "Mod seçilmeden plan gelmez, bakılmadan onay verilmez.",
          "aciklama": "Önce mod, sonra istem, sonra plan gelir. Onaydan önceki kontrol, planın beklediğin dosyaları adlandırıp adlandırmadığıdır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/your-first-prompt",
            "kopya": "ders-101-04-your-first-prompt.md",
            "okuma": "2026-11-15",
            "dayanak": "Plan moduna geçip küçük bir değişiklik iste; planı kabul etmeden önce beklediğin dosyaları adlandırıp adlandırmadığına bak, adlandırmıyorsa eksiği söyle ve yeni planı oku."
          }
        },
        {
          "id": "b03-d3-s4",
          "tur": "coktan",
          "soru": "Plan geldi ama değişmesi gereken bir dosyayı atlamış. En doğru hamle hangisi?",
          "secenekler": [
            "Onayla, sonra eksik dosyayı ayrıca iste",
            "Planlamaya devam et ve eksik dosyayı söyle",
            "Oturumu kapatıp yenisini aç"
          ],
          "dogru": 1,
          "ipucu": "Onay ekranındaki seçeneklerden biri seni plan modunda tutar.",
          "aciklama": "Planlamaya devam seçeneği plan modunda kalıp Claude'a neyin değişeceğini söylemeni sağlar. Onaylarsan plan modundan çıkılır ve düzenleme başlar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "No, keep planning seçeneği plan modunda kalır ve Claude'a neyin değişeceğini söylemeni sağlar."
          }
        },
        {
          "id": "b03-d3-s5",
          "tur": "coktan",
          "soru": "CLAUDE.md:43'teki plan kapısı hangi durumda devreye girer?",
          "secenekler": [
            "Claude yalnız bir dosyayı okuyup özetleyecekse",
            "Mod seçicide Plan seçiliyse",
            "İş birden fazla oturuma yayılacaksa",
            "Soru kısa bir bilgi sorusuysa"
          ],
          "dogru": 2,
          "ipucu": "Kapı seçili moda değil, işin kendisine bakar: ne kadar sürdüğüne ve neye dokunduğuna.",
          "aciklama": "Plan kapısı işin büyüklüğüne ve geri alınamazlığına bakar, seçili moda değil. Birden fazla oturuma yayılan iş bu koşullardan biridir.",
          "kaynak": {
            "adres": "CLAUDE.md:43",
            "okuma": "2026-11-15",
            "dayanak": "İş birden fazla oturuma yayılacaksa, geri alınamayan bir şeye dokunuyorsa ya da kullanıcının yazdığı bir kuralı değiştiriyorsa önce plan sunulur ve orada durulur."
          }
        },
        {
          "id": "b03-d3-s6",
          "tur": "coktan",
          "soru": "Plan modu ile bizim plan kapısı arasındaki fark hangisi?",
          "secenekler": [
            "Plan modunu Claude Code uygular; plan kapısı bir talimat",
            "İkisi aynıdır; plan kapısı plan modunun Türkçe adıdır",
            "Plan kapısı yalnız mod seçicide Plan seçiliyken geçerlidir"
          ],
          "dogru": 0,
          "ipucu": "Biri izin sisteminin parçası, öteki yazılı bir kural; kimin uyguladığına bak.",
          "aciklama": "İzin modlarını Claude Code uygular, CLAUDE.md'deki kurallar ise Claude'un ne yapmaya çalışacağını yönlendirir. CLAUDE.md:29'a göre kapılar her modda geçerlidir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "İzin kurallarını model değil Claude Code uygular; istemdeki ya da CLAUDE.md'deki talimatlar Claude'un ne yapmaya çalışacağını şekillendirir, Claude Code'un neye izin verdiğini değiştirmez."
          }
        },
        {
          "id": "b03-d3-s7",
          "tur": "dogru-yanlis",
          "soru": "Masaüstünde bir oturumda Plan'ı seçersen, bu seçim o klasördeki sonraki oturumlara da taşınır.",
          "dogru": false,
          "ipucu": "Plan seçiminin ne kadar süre geçerli kaldığını düşün.",
          "aciklama": "Yanlış: Plan seçimi yalnız o oturum için geçer. Yerel oturumda başka bir mod seçersen o mod klasör için hatırlanır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Yerel oturumda seçilen mod klasör başına hatırlanır, ama Plan'ı seçersen yalnız bu oturum için geçerli olur."
          }
        }
      ]
    },
    {
      "id": "b03-d4",
      "baslik": "İzin kuralı (permission rule): allow, ask, deny",
      "hedefler": [
        "Kuralların değerlendirme sırasını (önce deny, sonra ask, sonra allow) anlatabilir.",
        "Skill(...) ve mcp__... biçimli bir kuralın neyi engellediğini anlatabilir."
      ],
      "anlatim": [
        "Üç tür kural var. Allow sormadan izin verir, ask her seferinde sorar, deny engeller. Sıra hep aynı: önce deny, sonra ask, sonra allow; bu sırada ilk eşleşen kazanır, kuralın daha dar olması sırayı değiştirmez. Geniş bir yasak kuralı (deny rule), daha dar bir allow kuralını da kapsar.",
        "Kural biçimi Araç ya da Araç(belirteç). Skill(ad) tek bir skill'i, mcp__sunucu__araç bir MCP sunucusunun tek aracını gösterir; sonu yıldızlı mcp__sunucu__* ise bütün araçlarını. anthropic-skills: öneki, claude.ai hesabından eşitlenen (synced) skill'lere ayrılmıştır. Bizim .claude/settings.json dosyasında deny listesi 20. satırda başlar: öteki işin skill'leri dahil bazı eşitlenen skill'ler ve bazı MCP araçları orada yasaklı."
      ],
      "terimler": [
        {"tr": "izin kuralı", "en": "permission rule", "aciklama": "Bir aracı ya da aracın belli bir kullanımını izinli, sorulu ya da yasak yapan ayar satırı."},
        {"tr": "yasak kuralı", "en": "deny rule", "aciklama": "Eşleşen aracın ya da çağrının kullanılmasını engelleyen izin kuralı."},
        {"tr": "eşitlenen skill", "en": "synced skill", "aciklama": "claude.ai hesabından Claude Code'a gelen skill; tam adı anthropic-skills: önekiyle başlar."}
      ],
      "sorular": [
        {
          "id": "b03-d4-s1",
          "tur": "sirala",
          "soru": "Claude Code izin kurallarını hangi sırayla değerlendirir? İlk bakılandan başlayarak sırala.",
          "adimlar": [
            "deny: engelle",
            "ask: sor",
            "allow: sormadan izin ver"
          ],
          "ipucu": "Eşleşen kurallardan sırada önde olan kazanır; hangi kuralın asla delinmemesi gerektiğini düşün.",
          "aciklama": "Sıra deny, ask, allow; bu sırada ilk eşleşen sonucu belirler. Kuralın daha dar olması bu sırayı değiştirmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Kurallar sırayla değerlendirilir: önce deny, sonra ask, sonra allow; bu sırada ilk eşleşen sonucu belirler ve kuralın ne kadar özel olduğu sırayı değiştirmez."
          }
        },
        {
          "id": "b03-d4-s2",
          "tur": "coktan",
          "soru": "Ayarda deny kuralı Bash(aws *), allow kuralı Bash(aws s3 ls) var. Claude aws s3 ls çalıştırmak isterse ne olur?",
          "secenekler": [
            "Sormadan çalışır; dar kural kazanır",
            "Engellenir; geniş deny dar allow'u da kapsar",
            "Sana sorulur; kurallar çakıştığı için"
          ],
          "dogru": 1,
          "ipucu": "Değerlendirme sırasında önce hangi tür kurala bakılır?",
          "aciklama": "Geniş bir deny kuralı, daha dar bir allow kuralına uyan çağrıyı da engeller. Allow, deny'dan istisna açamaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Bash(aws *) gibi geniş bir deny kuralı, Bash(aws s3 ls) gibi daha dar bir allow kuralına da uyan çağrılar dahil eşleşen her çağrıyı engeller."
          }
        },
        {
          "id": "b03-d4-s3",
          "tur": "coktan",
          "soru": ".claude/settings.json:21 satırı, deny listesinde öteki işin bir skill'ini Skill(anthropic-skills:...) biçiminde adlandırıyor. Bu satır ne yapar?",
          "secenekler": [
            "O skill'in kullanılmasını engeller",
            "O skill'i her kullanımda önce sana sorar",
            "Bütün skill'leri kapatır",
            "O skill'i sormadan açar"
          ],
          "dogru": 0,
          "ipucu": "Satırın hangi listede durduğuna bak: allow, ask ya da deny.",
          "aciklama": "Satır permissions altındaki deny listesindedir, yani o skill'i engeller. Yalnız adı geçen skill etkilenir, öteki skill'ler değil.",
          "kaynak": {
            "adres": ".claude/settings.json:21",
            "okuma": "2026-11-15",
            "dayanak": "Satır, permissions altındaki deny listesinde öteki işin bir skill'ini Skill(anthropic-skills:...) biçiminde adlandıran kuralı taşır."
          }
        },
        {
          "id": "b03-d4-s4",
          "tur": "coktan",
          "soru": "Bizim .claude/settings.json:32 satırı mcp__454acdce-8de0-4030-8886-5d9267285447__create_file kuralını deny listesine koyar. Bu kural neyi gösterir?",
          "secenekler": [
            "O sunucunun bütün araçlarını",
            "Bütün MCP sunucularının dosya araçlarını",
            "O sunucunun yalnız create_file aracını"
          ],
          "dogru": 2,
          "ipucu": "Kural tam bir araç adıyla mı bitiyor, yoksa sonu yıldızlı mı?",
          "aciklama": "Tam ad mcp__sunucu__araç biçiminde yazılınca tek bir aracı gösterir. Sunucunun bütün araçları için sonu yıldızlı biçim kullanılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir MCP sunucusunun her aracını eşlemek için mcp__<sunucu>__* yazılır, tek bir aracı eşlemek için tam adı mcp__<sunucu>__<araç> yazılır."
          }
        },
        {
          "id": "b03-d4-s5",
          "tur": "dogru-yanlis",
          "soru": "Bir allow kuralı, daha geniş bir deny kuralının içinden istisna açabilir.",
          "dogru": false,
          "ipucu": "Değerlendirme sırasını hatırla.",
          "aciklama": "Yanlış: allow kuralı deny kuralından istisna açamaz. Önce deny'a bakılır ve eşleşen çağrı engellenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir allow kuralı, bir deny kuralından istisna açamaz."
          }
        },
        {
          "id": "b03-d4-s6",
          "tur": "bosluk",
          "soru": "Bir çağrıya hem ask kuralı hem daha dar bir allow kuralı uyuyorsa Claude Code ___.",
          "secenekler": [
            "yine sorar",
            "sormadan çalıştırır",
            "çağrıyı reddeder"
          ],
          "dogru": 0,
          "ipucu": "Sırada ask, allow'dan önce gelir.",
          "aciklama": "Ask, allow'dan önce değerlendirilir; eşleşen ask kuralı, daha dar bir allow kuralı da uysa onay ister.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Eşleşen bir ask kuralı, aynı çağrıya daha özel bir allow kuralı da uysa onay ister."
          }
        },
        {
          "id": "b03-d4-s7",
          "tur": "coktan",
          "soru": "Bizim deny satırlarında Skill(anthropic-skills:...) biçimi var. anthropic-skills öneki hangi skill'i gösterir?",
          "secenekler": [
            "Bu klasörün .claude/skills altındaki bir skill'i",
            "claude.ai hesabından eşitlenen bir skill'i",
            "Claude Code ile gelen yerleşik bir komutu"
          ],
          "dogru": 1,
          "ipucu": "Önek, skill'in nereden geldiğini söyler.",
          "aciklama": "anthropic-skills adı yalnız claude.ai'dan eşitlenen skill'lere ayrılmıştır. Bu biçimdeki deny kuralı, masaüstü o skill'i oturuma eklenti olarak getirdiğinde de onu engeller.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code, anthropic-skills adını ve bu adın altındaki anthropic-skills:pdf gibi her adı claude.ai'dan eşitlenen skill'lere ayırır."
          }
        }
      ]
    },
    {
      "id": "b03-d5",
      "baslik": "Hiçbir modun kendiliğinden onaylamadığı işler",
      "hedefler": [
        "Açık ask kuralına uyan aracın ve senin cevabını isteyen aracın hiçbir modda kendiliğinden onaylanmadığını anlatabilir.",
        "Deny kuralının bypassPermissions modunda bile geçerli olduğunu anlatabilir.",
        "CLAUDE.md:46'daki her seferinde sorulan işleri ayırt edebilir."
      ],
      "anlatim": [
        "Bazı işleri hiçbir mod kendiliğinden onaylamaz, bypassPermissions dahil. Örnekler: açık bir sor kuralına (ask rule) uyan araç ve soru sorma aracı (AskUserQuestion) gibi senin cevabını bekleyen araçlar. Bunlar için ya sana sorulur ya reddedilir: Auto modunda açık ask kuralı yine sorar, dontAsk modunda hiç sorulmaz, reddedilir.",
        "Mod yalnız temeli kurar; izin kuralları onun üstüne eklenir. Deny kuralı her modda engeller, bypassPermissions'ta bile. Buna karşılık allow kurallarının bypassPermissions'ta etkisi yoktur.",
        "Bizim klasörde de benzer bir liste var: CLAUDE.md:46. Örneğin mesaj gönderme, ücretli harcama ve git geçmişini geri alma her seferinde sorulur; önceki onay geçmez. Ayar dosyası değişikliği de sorulur, kanca ekleme ve değiştirme hariç. CLAUDE.md:29'a göre bu kapılar her modda geçerlidir."
      ],
      "terimler": [
        {"tr": "sor kuralı", "en": "ask rule", "aciklama": "Eşleşen araç her kullanılmadan önce onay isteyen izin kuralı."},
        {"tr": "soru sorma aracı", "en": "AskUserQuestion", "aciklama": "Claude'un sana seçenekli soru sorduğu yerleşik araç; senin cevabını beklediği için hiçbir mod onu kendiliğinden onaylamaz."}
      ],
      "sorular": [
        {
          "id": "b03-d5-s1",
          "tur": "dogru-yanlis",
          "soru": "Ayardaki bir deny kuralı, bypassPermissions modunda da engellemeye devam eder.",
          "dogru": true,
          "ipucu": "Mod temeli kurar, kurallar üstüne eklenir.",
          "aciklama": "Doğru: deny kuralları bypassPermissions dahil her modda engeller.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Deny kuralları bypassPermissions dahil her modda engeller."
          }
        },
        {
          "id": "b03-d5-s2",
          "tur": "coktan",
          "soru": "Hangisini hiçbir izin modu kendiliğinden onaylamaz, bypassPermissions dahil?",
          "secenekler": [
            "Çalışma klasöründe dosya okumayı",
            "Sık dosya komutu mkdir'i",
            "Açık bir ask kuralına uyan aracı",
            "Salt okunur bir kabuk komutunu"
          ],
          "dogru": 2,
          "ipucu": "Senin koyduğun bir kuralın her modda sana dönmesi gereken durumu düşün.",
          "aciklama": "Açık ask kuralına uyan araç hiçbir modda kendiliğinden onaylanmaz. Okuma ve mkdir gibi işler bazı modlarda sormadan çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code, açık bir ask kuralına uyan araçları bypassPermissions dahil hiçbir modda kendiliğinden onaylamaz."
          }
        },
        {
          "id": "b03-d5-s3",
          "tur": "coktan",
          "soru": "Terminalde dontAsk modundasın. Claude, açık bir ask kuralına uyan bir aracı çağırmak istiyor. Ne olur?",
          "secenekler": [
            "Sana sorulur",
            "Çağrı reddedilir",
            "Sormadan çalışır"
          ],
          "dogru": 1,
          "ipucu": "Bu modun adı, sana hiç soru gelmeyeceğini söylüyor.",
          "aciklama": "dontAsk hiç sormaz; ask kuralına uyan çağrıyı sormak yerine reddeder.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "dontAsk modunda Claude Code, açık ask kurallarına uyan çağrıları sormak yerine reddeder."
          }
        },
        {
          "id": "b03-d5-s4",
          "tur": "coktan",
          "soru": "Auto modundasın ve ayarda Bash(git push *) için bir ask kuralı var. Claude push etmek isterse ne olur?",
          "secenekler": [
            "Sınıflandırıcı karar verir, sana sorulmaz",
            "Push hiç çalışmaz, reddedilir",
            "Sana sorulur; açık ask kuralı Auto'da da sorar"
          ],
          "dogru": 2,
          "ipucu": "Hiçbir modun kendiliğinden onaylamadığı işleri hatırla.",
          "aciklama": "Auto modu sıradan izin sorularını kaldırır ama açık ask kuralları yine soru açtırır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Auto modunda açık ask kuralları yine de onay sorusu açtırır."
          }
        },
        {
          "id": "b03-d5-s5",
          "tur": "dogru-yanlis",
          "soru": "bypassPermissions modunda allow kurallarının etkisi yoktur.",
          "dogru": true,
          "ipucu": "Bu mod zaten neyi atlıyor, düşün.",
          "aciklama": "Doğru: belge allow kurallarının bypassPermissions'ta etkisi olmadığını söyler. Deny kuralları ise bu modda da geçerlidir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Allow kurallarının bypassPermissions'ta etkisi yoktur."
          }
        },
        {
          "id": "b03-d5-s6",
          "tur": "coktan",
          "soru": "CLAUDE.md:46'ya göre hangisi, önceden onay verilmiş olsa da her seferinde sorulur?",
          "secenekler": [
            "Ayar dosyasına kanca eklemek",
            "Mesaj göndermek",
            "Klasördeki bir dosyayı okumak"
          ],
          "dogru": 1,
          "ipucu": "Her seferinde sorulanlar listesinde neyin hariç tutulduğunu hatırla.",
          "aciklama": "Mesaj gönderme listededir ve önceki onay geçmez. Kanca ekleme ise açıkça hariç tutulur, testi ve doğrulayıcısıyla sorulmadan yapılır.",
          "kaynak": {
            "adres": "CLAUDE.md:46",
            "okuma": "2026-11-15",
            "dayanak": "Her seferinde sorulanlar arasında mesaj gönderme vardır ve önceki onay geçmez; ayar dosyalarında kanca ekleme ve değiştirme ise testi ve doğrulayıcısıyla sorulmaz."
          }
        },
        {
          "id": "b03-d5-s7",
          "tur": "bosluk",
          "soru": "Terminalde dontAsk modunda soru sorma aracı AskUserQuestion, bir allow kuralı olsa bile ___.",
          "secenekler": [
            "reddedilir",
            "sana sorulur",
            "sormadan çalışır"
          ],
          "dogru": 0,
          "ipucu": "Bu araç senin cevabını ister; bu mod ise hiç cevap toplamaz.",
          "aciklama": "dontAsk hiç soru sormadığı için cevap bekleyen bu aracı, allow kuralı olsa da reddeder.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "dontAsk modu, allow kuralın eşleşse bile yerleşik AskUserQuestion aracını reddeder."
          }
        }
      ]
    },
    {
      "id": "b03-d6",
      "baslik": "Kum havuzu (sandbox)",
      "hedefler": [
        "Kum havuzunun kabuk komutlarının dosya ve ağ erişimini sınırladığını anlatabilir.",
        "Bizim ayarda yazmaya açılan ve okumaya kapatılan yolu ayırt edebilir."
      ],
      "anlatim": [
        "Kum havuzu, işletim sisteminin Claude'un çalıştırdığı kabuk komutu (shell command) çevresine çektiği sınırdır. Bu komutların hangi dosyalara ve hangi alan adlarına ulaşacağını sen belirlersin. Yalnız kabuk komutlarını kapsar: Read, Edit, Write gibi dosya araçları izin kurallarına uyar; kancalar ve yerel MCP sunucuları ise sınırın dışında, tam erişimle çalışır.",
        "Kum havuzu varsayılan olarak kapalıdır. Açıkken komut çalışma klasörüne, eklediğin klasörlere ve kullanıcıya ait geçici klasöre yazabilir; makinenin çoğunu okuyabilir. Ağa doğrudan çıkamaz: her bağlantı izinli alan adları listesine göre denetlenir ve bu liste boş başlar.",
        "Bizim .claude/settings.json dosyasında kum havuzu açık (4. satır). 7. satır yazmaya bir yol ekler: ~/Library/Application Support/beyin-v3. 10. satır okumayı kapatır: öteki işin klasörü. Bu kapatma yalnız kabuk komutlarını durdurur, Read aracını durdurmaz."
      ],
      "terimler": [
        {"tr": "kum havuzu", "en": "sandbox", "aciklama": "İşletim sisteminin, kabuk komutlarının ulaşabileceği dosyaları ve ağ adreslerini sınırladığı sınır."},
        {"tr": "kabuk komutu", "en": "shell command", "aciklama": "Claude'un Bash aracıyla çalıştırdığı terminal komutu."}
      ],
      "sorular": [
        {
          "id": "b03-d6-s1",
          "tur": "coktan",
          "soru": "Kum havuzu neyi sınırlar?",
          "secenekler": [
            "Kabuk komutlarının dosya ve ağ erişimini",
            "Claude'un oturumda hangi skill'leri açabileceğini",
            "Claude'un hangi modelle çalışacağını"
          ],
          "dogru": 0,
          "ipucu": "Bir şeyin çevresine çekilen sınırı düşün; neyin çevresine?",
          "aciklama": "Kum havuzu, kabuk komutlarının ve başlattıkları süreçlerin ulaşabileceği dosyaları ve alan adlarını işletim sistemi düzeyinde sınırlar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sandboxing",
            "kopya": "sandboxing.md",
            "okuma": "2026-11-15",
            "dayanak": "Kum havuzu, Claude'un çalıştırdığı kabuk komutlarının çevresine işletim sisteminin uyguladığı bir sınırdır; bu komutların hangi dosyalara ve alan adlarına ulaşacağını sen belirlersin."
          }
        },
        {
          "id": "b03-d6-s2",
          "tur": "dogru-yanlis",
          "soru": "Kum havuzu, Claude'un Read ve Edit gibi dosya araçlarını da sınırlar.",
          "dogru": false,
          "ipucu": "Kum havuzunun neyi sardığını hatırla.",
          "aciklama": "Yanlış: kum havuzu yalnız kabuk komutlarını kapsar. Dosya araçları, MCP sunucuları ve kancalar onun dışında çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sandboxing",
            "kopya": "sandboxing.md",
            "okuma": "2026-11-15",
            "dayanak": "Kum havuzu yalnız kabuk komutlarını kapsar; Claude'un dosya araçları, MCP sunucuları ve kancalar onun dışında çalışır."
          }
        },
        {
          "id": "b03-d6-s3",
          "tur": "coktan",
          "soru": "Bizim .claude/settings.json:7 satırında allowWrite altında ~/Library/Application Support/beyin-v3 yolu var. Bu ne demek?",
          "secenekler": [
            "Kum havuzundaki komutlar bu klasörü okuyamaz",
            "Kum havuzundaki komutlar bu klasöre de yazabilir",
            "Bu klasör, oturumun yeni çalışma klasörü olur"
          ],
          "dogru": 1,
          "ipucu": "allowWrite adındaki iki sözcüğü Türkçeye çevir.",
          "aciklama": "Satır, kum havuzu ayarının allowWrite (yazmaya izin ver) listesinde durur; bu yüzden kum havuzundaki komutlar bu yola da yazabilir.",
          "kaynak": {
            "adres": ".claude/settings.json:7",
            "okuma": "2026-11-15",
            "dayanak": "Kum havuzu ayarında filesystem.allowWrite listesi ~/Library/Application Support/beyin-v3 yolunu taşır."
          }
        },
        {
          "id": "b03-d6-s4",
          "tur": "coktan",
          "soru": "Bizim .claude/settings.json:10 satırındaki denyRead, kum havuzundaki komutlara hangi klasörü kapatır?",
          "secenekler": [
            "Çalışma klasörünü",
            "~/Library/Application Support/beyin-v3",
            "Öteki işin klasörünü"
          ],
          "dogru": 2,
          "ipucu": "Okumaya kapatılan yol, yazmaya açılandan ayrı bir listede durur.",
          "aciklama": "denyRead listesindeki yol öteki işin klasörüdür; kum havuzundaki komutlar onu okuyamaz. O klasörün okunmaması CLAUDE.md:14'te de kuraldır.",
          "kaynak": {
            "adres": ".claude/settings.json:10",
            "okuma": "2026-11-15",
            "dayanak": "Kum havuzu ayarında filesystem.denyRead listesi öteki işin klasörünün yolunu taşır."
          }
        },
        {
          "id": "b03-d6-s5",
          "tur": "coktan",
          "soru": "denyRead ile öteki işin klasörü kapalı. Claude oradaki bir dosyayı Read aracıyla okumaya kalkarsa kum havuzu bunu durdurur mu?",
          "secenekler": [
            "Hayır; denyRead Read aracını durdurmaz",
            "Evet; denyRead bütün araçları durdurur",
            "Yalnız Auto modunda durdurur"
          ],
          "dogru": 0,
          "ipucu": "Kum havuzu neyi sarıyordu, Read aracı onun içinde mi?",
          "aciklama": "denyRead yalnız kabuk komutlarını durdurur; Read gibi dosya araçları izin kurallarına uyar. O klasörü okumama kuralı ayrıca CLAUDE.md:14'te talimat olarak durur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sandboxing",
            "kopya": "sandboxing.md",
            "okuma": "2026-11-15",
            "dayanak": "Read, Edit, Write gibi dosya araçları izin kurallarına uyar ve bir denyRead girdisi Read aracını durdurmaz."
          }
        },
        {
          "id": "b03-d6-s6",
          "tur": "bosluk",
          "soru": "Kum havuzu açıkken komutlar ağa doğrudan çıkamaz; her bağlantı izinli ___ listesine göre denetlenir.",
          "secenekler": [
            "dosya adları",
            "alan adları",
            "skill adları"
          ],
          "dogru": 1,
          "ipucu": "Ağ bağlantısında hedef neyle tanınır?",
          "aciklama": "Bağlantılar makinedeki bir vekilden geçer, vekil her adresi izinli alan adlarına göre denetler. Bu liste boş başlar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sandboxing",
            "kopya": "sandboxing.md",
            "okuma": "2026-11-15",
            "dayanak": "Ağ için doğrudan çıkış yoktur; bağlantılar her adresi izinli alan adlarına göre denetleyen bir vekilden geçer ve bu liste boş başlar."
          }
        },
        {
          "id": "b03-d6-s7",
          "tur": "eslestir",
          "soru": "Kum havuzu açıkken hangisi nerede çalışır, eşleştir.",
          "ciftler": [
            ["Kabuk komutları", "Kum havuzu sınırının içinde"],
            ["Read, Edit, Write gibi dosya araçları", "Sınırın dışında; izin kurallarına uyar"],
            ["Kancalar ve yerel MCP sunucuları", "Sınırın dışında; senin tam erişiminle"]
          ],
          "ipucu": "Kum havuzu yalnız bir tür işi sarar.",
          "aciklama": "Kum havuzu kabuk komutlarını sarar. Dosya araçları izin kurallarına uyar, kancalar ve yerel MCP sunucuları tam erişimle çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sandboxing",
            "kopya": "sandboxing.md",
            "okuma": "2026-11-15",
            "dayanak": "Kum havuzu kabuk komutlarını sarar; Read, Edit, Write gibi dosya araçları izin kurallarına uyar, kancalar ve yerel MCP sunucuları ise senin tam erişiminle çalışır."
          }
        }
      ]
    },
    {
      "id": "b03-d7",
      "baslik": "Masaüstünde mod seçmek; bizim kural",
      "hedefler": [
        "Masaüstündeki mod seçicinin terminaldeki Shift+Tab ile aynı işi gördüğünü anlatabilir.",
        "Modu kullanıcının seçtiğini ve kapıların her modda geçerli olduğunu bizim satırdan anlatabilir."
      ],
      "anlatim": [
        "Terminalde (CLI) mod Shift+Tab ile değişir. Masaüstünde aynı işi Code sekmesinde, istem kutusunun altındaki satırdaki mod seçici (mode selector) görür. Modu oturum sırasında istediğin an değiştirebilirsin. Her değişikliği kendin onaylamak istersen Manual'a geç. Ayar adları: Manual default, Accept edits acceptEdits, Bypass permissions bypassPermissions; dontAsk yalnız terminalde.",
        "Yerel oturumda seçtiğin mod o klasör için hatırlanır ve projenin .claude/ ayarlarındaki varsayılanın önüne geçer. Yeni oturum yine de ~/.claude/settings.json ya da yönetilen ayarlardaki bir varsayılanla açılabilir; bu yüzden ilk mesajdan önce seçiciye bak. Plan'ı seçersen yalnız o oturum için geçer.",
        "Bizim kural CLAUDE.md:29: izin modunu kullanıcı seçer; CLAUDE.md'deki ve skill'lerdeki kapılar her modda geçerlidir. Auto modu Claude'u soru sormadan çalışmaya iter, ama istemin ya da bir skill açıkça soruya dayanıyorsa Claude yine sorar. Yani Auto'da da plan kapısında durulur."
      ],
      "terimler": [
        {"tr": "mod seçici", "en": "mode selector", "aciklama": "Masaüstü Code sekmesinde, istem kutusunun altındaki satırda izin modunu değiştirdiğin seçici."}
      ],
      "sorular": [
        {
          "id": "b03-d7-s1",
          "tur": "coktan",
          "soru": "Terminalde izin modunu Shift+Tab ile değiştiriyorsun. Masaüstü Code sekmesinde bunun karşılığı ne?",
          "secenekler": [
            "İstem kutusunun altındaki mod seçici",
            "Ayarlar'daki model seçimi",
            "Kenar çubuğunda oturumları listeleyen alan"
          ],
          "dogru": 0,
          "ipucu": "Modu oturum sırasında değiştirdiğin yer, yazı yazdığın yere yakındır.",
          "aciklama": "Belge, terminalde Shift+Tab ile, masaüstünde mod seçiciyle mod değiştirildiğini söyler. İkisi aynı işi görür.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "İzin modu CLI'da Shift+Tab ile, VS Code'da mod göstergesiyle, masaüstünde mod seçiciyle değiştirilir."
          }
        },
        {
          "id": "b03-d7-s2",
          "tur": "dogru-yanlis",
          "soru": "Masaüstünde izin modunu yalnız oturum başında seçebilirsin, oturum sırasında değiştiremezsin.",
          "dogru": false,
          "ipucu": "Mod seçicinin ne zaman kullanılabildiğine bak.",
          "aciklama": "Yanlış: modu oturum sırasında istediğin an mod seçiciden değiştirebilirsin.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "İzin modlarını istem kutusunun altındaki satırdaki mod seçiciyle istediğin an değiştirebilirsin."
          }
        },
        {
          "id": "b03-d7-s3",
          "tur": "coktan",
          "soru": "Yeni bir yerel oturum açtın. İlk mesajı yazmadan önce ne yapmalısın?",
          "secenekler": [
            "Oturumu kapatıp yeniden açmak",
            "Mod seçicide hangi modun seçili olduğuna bakmak",
            "~/.claude/settings.json dosyasını silmek"
          ],
          "dogru": 1,
          "ipucu": "Yeni oturum, beklemediğin bir varsayılan modla açılabilir.",
          "aciklama": "Yeni yerel oturum ~/.claude/settings.json ya da yönetilen ayarlardaki bir varsayılanla açılabilir. Bu yüzden mesaj yazmadan önce seçiciye bakmak gerekir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Yeni yerel oturum ~/.claude/settings.json ya da yönetilen ayarlardaki bir defaultMode ile açılabilir, bu yüzden ilk mesajdan önce seçiciyi kontrol et."
          }
        },
        {
          "id": "b03-d7-s4",
          "tur": "coktan",
          "soru": "CLAUDE.md:29'a göre izin modunu kim seçer, kapılar ne zaman geçerlidir?",
          "secenekler": [
            "Claude seçer; kapılar yalnız Manual'da geçerli",
            "Kullanıcı seçer; kapılar yalnız Plan'da geçerli",
            "Kullanıcı seçer; kapılar her modda geçerli"
          ],
          "dogru": 2,
          "ipucu": "Satır iki şey söyler: biri kişi, biri kapsam.",
          "aciklama": "Satıra göre modu kullanıcı seçer. CLAUDE.md'deki ve skill'lerdeki kapılar seçilen moda bakmaz, her modda geçerlidir.",
          "kaynak": {
            "adres": "CLAUDE.md:29",
            "okuma": "2026-11-15",
            "dayanak": "İzin modunu kullanıcı seçer; bu dosyadaki ve skill'lerdeki kapılar her modda geçerlidir."
          }
        },
        {
          "id": "b03-d7-s5",
          "tur": "coktan",
          "soru": "Kullanıcı Auto modunu seçti ve birden fazla oturuma yayılacak bir iş verdi. Bizim kurallara göre Claude ne yapar?",
          "secenekler": [
            "Önce plan sunar ve orada durur",
            "Auto seçili olduğu için plan sunmadan başlar",
            "Modu kendisi Manual'a çevirir, sonra başlar"
          ],
          "dogru": 0,
          "ipucu": "Modu kimin seçtiğini ve kapıların kapsamını söyleyen kuralı hatırla.",
          "aciklama": "Birden fazla oturuma yayılan iş plan kapısına girer (CLAUDE.md:43). Kapılar her modda geçerli olduğu için Auto'da da önce plan gelir.",
          "kaynak": {
            "adres": "CLAUDE.md:29",
            "okuma": "2026-11-15",
            "dayanak": "İzin modunu kullanıcı seçer; bu dosyadaki ve skill'lerdeki kapılar her modda geçerlidir."
          }
        },
        {
          "id": "b03-d7-s6",
          "tur": "dogru-yanlis",
          "soru": "Auto modunda Claude, bir skill açıkça soru sormaya dayanıyorsa yine de sana sorar.",
          "dogru": true,
          "ipucu": "Auto soru sormamaya iter; ama bunun bir istisnası var.",
          "aciklama": "Doğru: Auto modu Claude'u soru sormadan çalışmaya iter, ama istemin ya da bir skill açıkça soruya dayanıyorsa Claude yine sorar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Auto modu Claude'u açıklayıcı soru sormadan çalışmaya iter, ama istemin ya da bir skill açıkça soruya dayanıyorsa Claude yine sorar."
          }
        },
        {
          "id": "b03-d7-s7",
          "tur": "eslestir",
          "soru": "Her modun ayar adını masaüstündeki karşılığıyla eşleştir.",
          "ciftler": [
            ["default", "Manual"],
            ["acceptEdits", "Accept edits"],
            ["bypassPermissions", "Bypass permissions"],
            ["dontAsk", "Masaüstünde yok, yalnız terminalde"]
          ],
          "ipucu": "Ayar adlarının çoğu etiketin bitişik yazılışına benzer; benzemeyenleri ayrıca düşün.",
          "aciklama": "Manual'ın ayar adı default, Accept edits'in acceptEdits, Bypass permissions'ın bypassPermissions'tır. dontAsk masaüstünde yoktur, yalnız terminalde kullanılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Masaüstü tablosunda Manual default, Accept edits acceptEdits, Bypass permissions bypassPermissions ayar adına karşılık gelir ve dontAsk modu yalnız CLI'da vardır."
          }
        }
      ]
    }
  ]
});
