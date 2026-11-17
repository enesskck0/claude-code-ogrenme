// icerik/birim-04.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b04",
  "sira": 4,
  "baslik": "CLAUDE.md ve hafıza",
  "amac": "Claude'un oturumdan oturuma neyi nasıl taşıdığını öğrenmek: CLAUDE.md'nin yeri ve yazımı, içe aktarma, otomatik hafıza, .claude klasörü ve bizim kayıt dosyalarımız.",
  "dersler": [
    {
      "id": "b04-d1",
      "baslik": "CLAUDE.md nedir",
      "hedefler": [
        "CLAUDE.md'nin her oturumda yüklenen kalıcı talimat dosyası olduğunu anlatabilir.",
        "CLAUDE.md'yi otomatik hafızadan (auto memory) kim yazdığı ve ne taşıdığıyla ayırt edebilir."
      ],
      "anlatim": [
        "Her Claude Code oturumu boş bir bağlam penceresiyle (context window) başlar. Önceki konuşmayı kendiliğinden bilmez.",
        "Bilgiyi oturumdan oturuma iki düzenek taşır: senin yazdığın CLAUDE.md dosyası ve Claude'un kendi tuttuğu otomatik hafıza.",
        "CLAUDE.md düz metin bir talimat dosyasıdır; Claude onu her oturumun başında okur. Masaüstü uygulamasının Code sekmesi de aynı dosyayı kullanır.",
        "CLAUDE.md'yi sen yazarsın, içinde talimatlar ve kurallar olur. Otomatik hafızayı Claude yazar, içinde öğrendikleri ve senin düzeltmelerin olur.",
        "CLAUDE.md de otomatik hafıza da her konuşmanın başında yüklenir.",
        "'Bunu hatırla' dersen Claude onu otomatik hafızaya yazar. CLAUDE.md'ye girmesini istiyorsan bunu açıkça söylersin."
      ],
      "terimler": [
        {"tr": "otomatik hafıza", "en": "auto memory", "aciklama": "Claude'un senin düzeltmelerine ve tercihlerine göre kendi yazdığı notlar."},
        {"tr": "bağlam penceresi", "en": "context window", "aciklama": "Claude'un bir oturumda gördüğü metnin tamamı; her oturum boş bir pencereyle başlar."}
      ],
      "sorular": [
        {
          "id": "b04-d1-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Resmi belgeye göre her Claude Code oturumu nasıl başlar?",
          "secenekler": ["Boş bir bağlam penceresiyle", "Önceki konuşmayla", "Son üç oturumun özetiyle"],
          "dogru": 0,
          "ipucu": "CLAUDE.md'ye neden gerek duyulduğunu düşün: Claude neyi kendiliğinden bilmiyor?",
          "aciklama": "Her oturum boş bir bağlam penceresiyle başlar. Bu yüzden kalıcı bilgiyi CLAUDE.md ve otomatik hafıza taşır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Her Claude Code oturumu boş bir bağlam penceresiyle başlar ve bilgiyi oturumlar arasında iki düzenek taşır: CLAUDE.md dosyaları ve otomatik hafıza."
          }
        },
        {
          "id": "b04-d1-s2",
          "tur": "bosluk",
          "kart": 1,
          "soru": "CLAUDE.md'yi sen yazarsın; otomatik hafızayı ise ___ yazar.",
          "secenekler": ["Claude kendisi", "şirketin BT ekibi", "ekip arkadaşların"],
          "dogru": 0,
          "ipucu": "Kartta iki düzeneği kimin tuttuğunu anlatan cümleyi hatırla.",
          "aciklama": "CLAUDE.md'yi sen yazarsın, otomatik hafızayı Claude kendisi yazar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Karşılaştırma tablosuna göre CLAUDE.md'yi kullanıcı yazar, otomatik hafızayı ise Claude yazar."
          }
        },
        {
          "id": "b04-d1-s3",
          "tur": "eslestir",
          "kart": 3,
          "soru": "Her satırı doğru karşılığıyla eşle.",
          "ciftler": [
            ["CLAUDE.md'yi yazan", "Sen"],
            ["Otomatik hafızayı yazan", "Claude"],
            ["CLAUDE.md'nin içeriği", "Talimatlar ve kurallar"],
            ["Otomatik hafızanın içeriği", "Öğrenilenler ve kalıplar"]
          ],
          "ipucu": "Talimat vermek ile çalışırken öğrenmek arasındaki farkı düşün: hangisi kimin işi?",
          "aciklama": "Talimatları sen yazarsın; Claude ise çalışırken öğrendiklerini kendisi not eder.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Karşılaştırma tablosunda CLAUDE.md'yi sen yazarsın ve talimat ile kural içerir, otomatik hafızayı Claude yazar ve öğrenilenler ile kalıplar içerir."
          }
        },
        {
          "id": "b04-d1-s4",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bizim CLAUDE.md'nin ilk satırı: 'proje — bu klasörde çalışan asistanın giriş dosyası'. Claude bu dosyayı ne zaman okur?",
          "secenekler": ["Yalnız sen 'CLAUDE.md'yi oku' dediğinde", "Yalnız klasördeki ilk oturumda, bir kez", "Her oturumun başında, kendiliğinden", "Bir dosyayı düzenlemeden hemen önce"],
          "dogru": 2,
          "ipucu": "Kartta CLAUDE.md'nin hangi anda okunduğunu anlatan cümleyi hatırla.",
          "aciklama": "CLAUDE.md her oturumun başında kendiliğinden okunur. 'Giriş dosyası' adı da bu yüzden yerindedir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/the-claude-md-file",
            "kopya": "ders-101-08-claude-md.md",
            "okuma": "2026-11-15",
            "dayanak": "CLAUDE.md projenin köküne eklenen bir Markdown dosyasıdır ve Claude Code onu her oturum başlattığında kendiliğinden okur."
          }
        },
        {
          "id": "b04-d1-s5",
          "tur": "dogru-yanlis",
          "kart": 4,
          "soru": "CLAUDE.md de otomatik hafıza da her konuşmanın başında yüklenir.",
          "dogru": true,
          "ipucu": "İki hafıza sisteminin ne zaman yüklendiğini anlatan cümleyi düşün.",
          "aciklama": "İkisi de her konuşmanın başında yüklenir. Otomatik hafızadan MEMORY.md'nin baştaki 200 satırı ya da 25KB'ı gelir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code'un birbirini tamamlayan iki hafıza sisteminin ikisi de her konuşmanın başında yüklenir."
          }
        },
        {
          "id": "b04-d1-s6",
          "tur": "coktan",
          "kart": 5,
          "soru": "Bir kuralın otomatik hafızaya değil CLAUDE.md'ye girmesini istiyorsun. Claude'a hangisini yazarsın?",
          "secenekler": ["'Bunu hatırla' yazarım", "'Bunu CLAUDE.md'ye ekle' yazarım", "Bir şey yazmam; Claude düzeltmeyi kendisi CLAUDE.md'ye taşır"],
          "dogru": 1,
          "ipucu": "Kartta 'hatırla' isteğinin nereye yazıldığını anlatan cümleyi düşün.",
          "aciklama": "'Hatırla' dersen Claude bunu otomatik hafızaya kaydeder. CLAUDE.md'ye girmesi için bunu açıkça istersin.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude'dan bir şeyi hatırlamasını istersen onu otomatik hafızaya kaydeder; CLAUDE.md'ye eklemek için bunu doğrudan istersin."
          }
        },
        {
          "id": "b04-d1-s7",
          "tur": "coktan",
          "kart": 2,
          "soru": "Sen Claude Code'u masaüstü uygulamasının Code sekmesinde kullanıyorsun. Projedeki CLAUDE.md orada da okunur mu?",
          "secenekler": ["Evet, terminaldeki gibi okunur", "Hayır, yalnız terminal sürümü okur", "Yalnız @ ile elle eklersen okunur"],
          "dogru": 0,
          "ipucu": "Kartta Code sekmesi için söylenen cümleyi hatırla.",
          "aciklama": "Masaüstü ve terminal aynı yapılandırma dosyalarını okur. Projedeki CLAUDE.md ve CLAUDE.local.md ikisinde de kullanılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Masaüstü sayfasına göre projedeki CLAUDE.md ve CLAUDE.local.md dosyalarını hem masaüstü hem terminal kullanır."
          }
        }
      ]
    },
    {
      "id": "b04-d2",
      "baslik": "CLAUDE.md nerede durur",
      "hedefler": [
        "Kurum, kullanıcı, proje ve yerel katmanları yerleriyle anlatabilir.",
        "Bizim CLAUDE.md'nin proje katmanında olduğunu anlatabilir.",
        "Katmanların üst üste eklendiğini, birbirinin yerine geçmediğini ayırt edebilir."
      ],
      "anlatim": [
        "CLAUDE.md dört yerde durabilir ve her yerin kapsamı (scope) farklıdır. En genişi kurum politikası (managed policy): şirketin BT ekibi yönetir, bir sistem klasöründe durur.",
        "Kullanıcı katmanı ev klasöründeki ~/.claude/CLAUDE.md dosyasıdır; bütün projelerinde yalnız senin için geçerlidir.",
        "Proje katmanı kökteki (proje klasörünün en üstü, ./) CLAUDE.md ya da .claude/CLAUDE.md'dir, git ile ekiple paylaşılır. Yerel ./CLAUDE.local.md yalnız senin ve bu projenindir, git'e girmez.",
        "Bizim CLAUDE.md bu klasörün kökünde durur ve klasör git ile tutulur. Bu klasörde CLAUDE.local.md yok.",
        "Bulunan dosyalar birbirinin yerine geçmez, arka arkaya bağlama eklenir. Sıra genelden özele gider: kurum, kullanıcı, proje, sonra aynı klasördeki CLAUDE.local.md.",
        "Alt klasördeki bir CLAUDE.md açılışta yüklenmez. Claude o klasörde bir dosyayı okuyunca ya da düzenleyince yüklenir."
      ],
      "terimler": [
        {"tr": "kapsam", "en": "scope", "aciklama": "Bir CLAUDE.md'nin kimi ve hangi projeleri etkilediği."},
        {"tr": "kurum politikası", "en": "managed policy", "aciklama": "Şirketin BT ekibinin yönettiği, kurumdaki herkese uygulanan CLAUDE.md."}
      ],
      "sorular": [
        {
          "id": "b04-d2-s1",
          "tur": "eslestir",
          "kart": 2,
          "soru": "Her katmanı dosyasının yeriyle eşle.",
          "ciftler": [
            ["Kurum politikası", "Sistem klasörü; BT ekibi yönetir"],
            ["Kullanıcı", "~/.claude/CLAUDE.md"],
            ["Proje", "./CLAUDE.md ya da ./.claude/CLAUDE.md"],
            ["Yerel", "./CLAUDE.local.md"]
          ],
          "ipucu": "Hangisi ev klasöründe, hangisi proje klasöründe durur, onu düşün.",
          "aciklama": "Kullanıcı dosyası ev klasöründeki .claude içinde, proje ve yerel dosyalar proje kökünde durur. Kurum dosyası işletim sistemine göre bir sistem klasöründedir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Konum tablosunda kurum politikası BT ekibinin yönettiği sistem klasöründe, kullanıcı talimatları ~/.claude/CLAUDE.md'de, proje talimatları ./CLAUDE.md ya da ./.claude/CLAUDE.md'de, yerel talimatlar ./CLAUDE.local.md'de durur."
          }
        },
        {
          "id": "b04-d2-s2",
          "tur": "sirala",
          "kart": 4,
          "soru": "Claude CLAUDE.md dosyalarını bağlama hangi sırayla ekler? İlk geleni en üste koy.",
          "adimlar": ["Kurum politikası", "Kullanıcı talimatları", "Proje talimatları", "Yerel talimatlar"],
          "ipucu": "Sıra en geniş kapsamdan en dar kapsama gider.",
          "aciklama": "Tablo yükleme sırasıyla, en genelden en özele dizilidir. Bu yüzden proje talimatı kullanıcı talimatından sonra gelir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Tablo dosyaları yükleme sırasıyla en geniş kapsamdan en özele doğru verir; böylece proje talimatı bağlamda kullanıcı talimatından sonra yer alır."
          }
        },
        {
          "id": "b04-d2-s3",
          "tur": "coktan",
          "kart": 3,
          "soru": "Bizim CLAUDE.md bu klasörün kökünde duruyor ve klasör git ile tutuluyor. Bu dosya hangi katmandadır?",
          "secenekler": ["Kullanıcı katmanı", "Kurum politikası", "Yerel katman", "Proje katmanı"],
          "dogru": 3,
          "ipucu": "Dosyanın yerine bak: ev klasöründe mi, proje kökünde mi?",
          "aciklama": "Proje kökündeki CLAUDE.md proje talimatıdır ve sürüm denetimiyle paylaşılır. Yerel katman olsaydı adı CLAUDE.local.md olurdu.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Proje talimatları ./CLAUDE.md ya da ./.claude/CLAUDE.md'de durur ve ekip üyeleriyle sürüm denetimi üzerinden paylaşılır."
          }
        },
        {
          "id": "b04-d2-s4",
          "tur": "dogru-yanlis",
          "kart": 4,
          "soru": "Birden çok CLAUDE.md bulunursa en özel olanı ötekilerin yerine geçer, ötekiler okunmaz.",
          "dogru": false,
          "ipucu": "Bulunan dosyaların bağlama nasıl girdiğini anlatan cümleyi hatırla.",
          "aciklama": "Bulunan dosyaların tamamı bağlama eklenir, biri ötekini silmez. Daha özel olan yalnız daha sonra okunur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Bulunan bütün dosyalar birbirinin yerine geçmez, bağlamda arka arkaya eklenir."
          }
        },
        {
          "id": "b04-d2-s5",
          "tur": "coktan",
          "kart": 2,
          "soru": "Yalnız bu projede ve yalnız senin için geçerli bir not yazacaksın; git'e girmesin. Hangi dosyaya yazarsın?",
          "secenekler": ["./CLAUDE.local.md", "~/.claude/CLAUDE.md", "./CLAUDE.md", "Kurum politikası dosyası"],
          "dogru": 0,
          "ipucu": "Kartta hem 'yalnız sen' hem 'yalnız bu proje' denen katmanı hatırla.",
          "aciklama": "CLAUDE.local.md kişisel ve projeye özel tercihler içindir. .gitignore'a eklenince git'e girmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Yerel talimatlar ./CLAUDE.local.md'de durur, kişisel ve projeye özel tercihler içindir ve .gitignore'a eklenir."
          }
        },
        {
          "id": "b04-d2-s6",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bütün projelerinde geçerli olacak kişisel bir tercihin var. Hangi dosyaya yazılır?",
          "secenekler": ["./CLAUDE.local.md", "~/.claude/CLAUDE.md", "./CLAUDE.md", "./docs/CLAUDE.md"],
          "dogru": 1,
          "ipucu": "Tek projeye değil, bütün projelere uyan katmanı düşün.",
          "aciklama": "Kullanıcı dosyası ev klasöründedir ve bütün projelerinde yalnız sana uygulanır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Kullanıcı talimatları ~/.claude/CLAUDE.md'de durur ve bütün projeler için kişisel tercihleri taşır."
          }
        },
        {
          "id": "b04-d2-s7",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Kurum politikası dosyasını ___ yönetir ve sen onu dışarıda bırakamazsın.",
          "secenekler": ["her çalışan kendisi", "Anthropic'in kurumsal destek ekibi", "şirketin platform ya da BT ekibi"],
          "dogru": 2,
          "ipucu": "Bu dosya kurumun tamamı için yazılır; onu kimin denetlediğini düşün.",
          "aciklama": "Kurum politikası platform ya da BT ekibinin denetlediği kurum dosyasıdır. Dışarıda bırakılamadığı için kurum kuralı her zaman devrededir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/a-claude-md-that-follows",
            "kopya": "ders-action-02-claude-md-that-follows.md",
            "okuma": "2026-11-15",
            "dayanak": "Kurum politikası, platform ekibinin denetlediği kurum düzeyi dosyadır ve dışarıda bırakılamaz."
          }
        },
        {
          "id": "b04-d2-s8",
          "tur": "coktan",
          "kart": 5,
          "soru": "Alt klasördeki bir CLAUDE.md ne zaman yüklenir?",
          "secenekler": ["Oturum açılırken, kökteki dosyayla birlikte", "Claude o klasördeki bir dosyayla çalışınca", "Yalnız sen o klasörde yeni oturum açınca"],
          "dogru": 1,
          "ipucu": "Kartta açılışta yüklenen dosyalarla sonradan yüklenenleri ayıran cümleyi düşün.",
          "aciklama": "Alt klasördeki CLAUDE.md açılışta yüklenmez. Claude o klasörde bir dosyayı okuyunca ya da düzenleyince yüklenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Alt klasörlerdeki CLAUDE.md dosyaları açılışta değil, Claude o alt klasörde başka bir dosyayı okuyunca, yazınca ya da düzenleyince yüklenir."
          }
        }
      ]
    },
    {
      "id": "b04-d3",
      "baslik": "İyi talimat yazmak",
      "hedefler": [
        "CLAUDE.md için 200 satır altı hedefini ve nedenini anlatabilir.",
        "'Claude bunu kodu okuyarak bulabilir mi, gidip bakar mı' testini bir satıra uygulayıp anlatabilir.",
        "Vurgu eklemek yerine kancaya (hook) taşınacak kuralı ayırt edebilir."
      ],
      "anlatim": [
        "Claude CLAUDE.md'yi zorunlu bir ayar gibi değil, bağlam olarak okur.",
        "Satır somut ve sınanabilir olunca Claude daha iyi uyar: 'Kodu düzgün biçimlendir' yerine '2 boşluklu girinti kullan'.",
        "Her CLAUDE.md dosyası için 200 satırın altı hedeflenir. Uzun dosya bağlamda daha çok yer kaplar ve uyumu düşürür.",
        "Bizde denetim.py adlı denetim betiği (küçük program), D1 adlı kontrolünde CLAUDE.md'nin boyut tavanını aşıp aşmadığına bakar. Tavan satırla değil, dosya boyutu birimi baytla ölçülür.",
        "Yazmadan önce iki soru sor: Claude bunu kodu okuyarak bulabilir mi, gidip bakar mı? İkisi de evetse yazma.",
        "Bizde sistem-metni skill'inin kontrol listesi şu maddeyle başlar: 'Model bunu kendi bilir mi? Biliyorsa yazılmaz.'",
        "Bir satıra ÖNEMLİ diye vurgu ekledin ve Claude yine kaçırıyorsa, o satır kancaya aittir. Kanca belli bir anda kendiliğinden koşar ve eylemi gerçekten durdurabilir."
      ],
      "terimler": [
        {"tr": "kanca", "en": "hook", "aciklama": "Belli bir anda kendiliğinden koşan komut; Claude ne karar verirse versin uygulanır ve bir eylemi durdurabilir."}
      ],
      "sorular": [
        {
          "id": "b04-d3-s1",
          "tur": "bosluk",
          "kart": 2,
          "soru": "Resmi belge her CLAUDE.md dosyası için ___ satırın altını hedeflemeyi önerir.",
          "secenekler": ["50", "500", "200", "1000"],
          "dogru": 2,
          "ipucu": "Anlatım kartındaki sayıyı hatırla; uzun dosya uyumu düşürür.",
          "aciklama": "Hedef dosya başına 200 satırın altıdır. Uzun dosya bağlamda daha çok yer kaplar ve Claude'un uyumunu düşürür.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Her CLAUDE.md dosyası için 200 satırın altı hedeflenir; uzun dosyalar daha çok bağlam tüketir ve uyumu azaltır."
          }
        },
        {
          "id": "b04-d3-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "CLAUDE.md'ye hangi satırı yazarsan Claude daha güvenilir uyar?",
          "secenekler": ["Değişikliklerini mutlaka test et", "Kodu her zaman düzgün biçimlendir", "Her zaman çok dikkatli ol", "Commit'ten önce npm test koş"],
          "dogru": 3,
          "ipucu": "Sonradan bakıp yapılıp yapılmadığını anlayabileceğin satırı seç.",
          "aciklama": "Somut satır sınanabilir: komutun koşulup koşulmadığı görülür. Belirsiz satırı Claude da senin gibi farklı yorumlayabilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Talimatlar sınanabilecek kadar somut yazılır, 'Değişikliklerini test et' yerine 'Commit'ten önce npm test koş' gibi."
          }
        },
        {
          "id": "b04-d3-s3",
          "tur": "coktan",
          "kart": 4,
          "soru": "Klasör düzenin dosyalarda açıkça görünüyor ve Claude her işte dosyalara zaten bakıyor. İki soruluk teste göre bunu CLAUDE.md'ye yazar mısın?",
          "secenekler": ["Evet, her şey CLAUDE.md'de olmalı", "Hayır, iki cevap da evet; kendisi bulur", "Evet, ama ÖNEMLİ diye işaretleyerek"],
          "dogru": 1,
          "ipucu": "Test iki soru sorar; ikisinin de cevabı evet olunca ne yapılır?",
          "aciklama": "Claude kodu okuyarak bulabiliyor ve gidip bakıyorsa satır gereksizdir. Yazmak yalnız dosyayı uzatır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude bunu kodu okuyarak bulabiliyor ve gerçekten gidip bakıyorsa, iki cevap da evet olduğu için satır yazılmaz."
          }
        },
        {
          "id": "b04-d3-s4",
          "tur": "dogru-yanlis",
          "kart": 4,
          "soru": "Ekibin toplantıda aldığı ve hiçbir dosyada yazmayan bir karar, CLAUDE.md'ye yazılmaya uygundur.",
          "dogru": true,
          "ipucu": "Claude bu bilgiyi kodu okuyarak bulabilir mi?",
          "aciklama": "Depoda hiç yazılmamış bilgiyi Claude kodu okuyarak bulamaz. Bu yüzden onu CLAUDE.md'ye yazmak işe yarar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude'un bulamadığı bilgi depoda hiç yer almamış bilgidir, örneğin ekibin bir toplantıda aldığı karar."
          }
        },
        {
          "id": "b04-d3-s5",
          "tur": "coktan",
          "kart": 6,
          "soru": "CLAUDE.md'de 'src/gen/ klasörünü düzenleme' satırı var, başına ÖNEMLİ de ekledin; Claude yine arada düzenliyor. Ne yaparsın?",
          "secenekler": ["Satırı kancaya taşırım, kanca durdurur", "Satırı büyük harfle bir kez daha yazarım", "Satırı dosyanın en başına taşırım", "Aynı satırı üç ayrı yere kopyalarım"],
          "dogru": 0,
          "ipucu": "Vurguyu artırmak işe yaramadı; kararı Claude'a bırakmayan araç hangisi?",
          "aciklama": "Vurgu eklendiği hâlde kaçan satır kancaya aittir. Kanca, Claude ne karar verirse versin eylemi durdurabilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir CLAUDE.md satırına vurgu eklemeye devam ettiğin hâlde Claude onu kaçırıyorsa, bu satırın bir kancaya ait olduğunun işaretidir."
          }
        },
        {
          "id": "b04-d3-s6",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Claude CLAUDE.md'yi zorunlu bir ayar gibi değil, ___ olarak okur.",
          "secenekler": ["bağlam", "komut listesi", "kesin kural"],
          "dogru": 0,
          "ipucu": "Kartta Claude'un CLAUDE.md'yi nasıl okuduğunu anlatan cümleyi hatırla.",
          "aciklama": "Claude CLAUDE.md'yi bağlam olarak okur, zorunlu ayar olarak değil. Kesin uyulması gereken kural için kanca gerekir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude CLAUDE.md dosyalarını zorunlu yapılandırma olarak değil bağlam olarak ele alır."
          }
        },
        {
          "id": "b04-d3-s7",
          "tur": "coktan",
          "kart": 3,
          "soru": "denetim.py'de CLAUDE_TAVAN 17524 değerini alır; yorumda 'D1: bayt' yazar. Bu değer ne yapar?",
          "secenekler": ["CLAUDE.md'ye satır tavanı koyar", "Okunacak dosya sayısını sınırlar", "CLAUDE.md'ye bayt tavanı koyar", "CLAUDE.md'yi yeniden yazdırır"],
          "dogru": 2,
          "ipucu": "Kartta denetim betiğinin CLAUDE.md için koyduğu tavanın birimini hatırla.",
          "aciklama": "Değer satır değil bayt cinsinden bir tavandır. Denetim betiği D1 kontrolünde CLAUDE.md'nin bu tavanı aşıp aşmadığına bakar.",
          "kaynak": {
            "adres": "denetim.py:173",
            "okuma": "2026-11-17",
            "dayanak": "denetim.py CLAUDE_TAVAN değerini 17524 bayt olarak tanımlar ve satırın notu bunu D1 kontrolüne bağlar.",
            "soz": "CLAUDE_TAVAN, SKILL_TAVAN, KART_TAVAN = 17524, 10000, 3000 # D1: bayt"
          }
        },
        {
          "id": "b04-d3-s8",
          "tur": "coktan",
          "kart": 5,
          "soru": "sistem-metni skill'inin kontrol listesi 'Model bunu kendi bilir mi? Biliyorsa yazılmaz.' maddesiyle başlar. Bu madde neyi sağlar?",
          "secenekler": ["Kuralların büyük harfle yazılmasını", "Modelin zaten bildiği şeyin yazılmamasını", "Dosyanın 200 satıra tamamlanmasını"],
          "dogru": 1,
          "ipucu": "Maddedeki soruya cevap evet olunca ne yapıldığını düşün.",
          "aciklama": "Madde, modelin kendi bildiği şeyi talimattan dışarıda bırakır. Resmi belgedeki 'kodu okuyarak bulabilir mi' testiyle aynı yöne bakar.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md:16",
            "okuma": "2026-11-17",
            "dayanak": "sistem-metni skill'inin kontrol listesindeki ilk madde, modelin kendi bildiği şeyin yazılmamasını söyler.",
            "soz": "Model bunu kendi bilir mi? Biliyorsa yazılmaz."
          }
        }
      ]
    },
    {
      "id": "b04-d4",
      "baslik": "İçe aktarma (import)",
      "hedefler": [
        "CLAUDE.md içindeki @ satırının başka bir dosyayı da bağlama yüklediğini anlatabilir.",
        "Bizim CLAUDE.md'nin son satırının hangi dosyayı yüklediğini anlatabilir.",
        "İçe aktarmanın dosyayı düzenlediğini ama bağlam yükünü azaltmadığını ayırt edebilir."
      ],
      "anlatim": [
        "CLAUDE.md içine @ ve bir dosya yolu yazarsan, örneğin '@README.md', o dosya da CLAUDE.md ile birlikte bağlama yüklenir.",
        "Göreli yol, '@README.md' gibi tam adresi olmayan kısa yoldur. Claude onu çözerken, yani hangi dosya olduğunu bulurken, @ satırını yazan dosyanın yerini esas alır.",
        "Aktarılan dosya da başka dosya aktarabilir, en çok dört adım derinliğe kadar.",
        "Bizim CLAUDE.md'nin son satırı tek başına '@AGENTS.md'. Yani AGENTS.md her oturumda CLAUDE.md ile birlikte yüklenir.",
        "Claude aktarılan dosyayı @ satırının durduğu yere açar. Bizde bu yer dosyanın sonu.",
        "İçe aktarma uzun bir dosyayı düzenler ama yükü azaltmaz: aktarılan her şey açılışta yine okunur.",
        "Üç özel durum: ters tırnak (backtick) içindeki @yol aktarılmaz; boşluklu yolda boşluktan önce ters bölü (\\) gelir; proje dışı yolda ilk seferde onay sorulur."
      ],
      "terimler": [
        {"tr": "içe aktarma", "en": "import", "aciklama": "CLAUDE.md içinde @ ve dosya yoluyla başka bir dosyayı da bağlama yükletmek."},
        {"tr": "ters tırnak", "en": "backtick", "aciklama": "Klavyedeki ` işareti; içine yazılan @yol içe aktarılmaz, düz metin kalır."}
      ],
      "sorular": [
        {
          "id": "b04-d4-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "CLAUDE.md'ye '@docs/git-talimatlari.md' satırını eklersen ne olur?",
          "secenekler": ["Claude yalnız dosyanın adını görür, içini okumaz", "O dosya da CLAUDE.md ile birlikte yüklenir", "Dosya CLAUDE.md'nin içine kalıcı olarak kopyalanır", "Claude o dosyayı yalnız sen isteyince açar"],
          "dogru": 1,
          "ipucu": "@ işaretinin CLAUDE.md içinde ne yaptığını düşün.",
          "aciklama": "@ ile verilen dosya açılır ve onu anan CLAUDE.md ile birlikte bağlama yüklenir. CLAUDE.md'nin kendisi değişmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "CLAUDE.md dosyaları @yol sözdizimiyle başka dosyaları içe aktarabilir; aktarılan dosyalar açılır ve onları anan CLAUDE.md ile birlikte bağlama yüklenir."
          }
        },
        {
          "id": "b04-d4-s2",
          "tur": "coktan",
          "kart": 3,
          "soru": "Bizim CLAUDE.md'nin son satırında hangi dosya içe aktarılıyor?",
          "secenekler": ["DURUM.md", "KARARLAR.md", "AGENTS.md", "README.md"],
          "dogru": 2,
          "ipucu": "Kartta her oturumda CLAUDE.md ile birlikte yüklenen dosyayı hatırla.",
          "aciklama": "Son satırda yalnız '@AGENTS.md' yazar. Bu yüzden AGENTS.md her oturumda CLAUDE.md ile birlikte yüklenir.",
          "kaynak": {
            "adres": "CLAUDE.md:116",
            "okuma": "2026-11-17",
            "dayanak": "CLAUDE.md'nin son satırı yalnız @AGENTS.md içe aktarmasını taşır.",
            "soz": "Europe/Istanbul date`). @AGENTS.md"
          }
        },
        {
          "id": "b04-d4-s3",
          "tur": "coktan",
          "kart": 4,
          "soru": "Bizde '@AGENTS.md' CLAUDE.md'nin en son satırında. AGENTS.md'nin metni bağlamda nereye açılır?",
          "secenekler": ["@ satırının durduğu yere, yani sona", "Her zaman CLAUDE.md'nin en başına", "Ayrı bir oturumda, CLAUDE.md'den bağımsız", "Hiç açılmaz; yalnız adı görünür"],
          "dogru": 0,
          "ipucu": "Kartta aktarılan dosyanın metne nerede açıldığını anlatan cümleyi hatırla.",
          "aciklama": "Claude açılışta aktarılan dosyayı satırın durduğu yerde metne açar. Bizde satır en sonda olduğu için AGENTS.md metni CLAUDE.md'nin ardından gelir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/a-claude-md-that-follows",
            "kopya": "ders-action-02-claude-md-that-follows.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude açılışta içe aktarılan dosyaları, onlara işaret edilen yerde metnin içine açar."
          }
        },
        {
          "id": "b04-d4-s4",
          "tur": "dogru-yanlis",
          "kart": 5,
          "soru": "Uzun bir CLAUDE.md'yi @ ile parçalara bölmek, Claude'un okuduğu bağlamı azaltır.",
          "dogru": false,
          "ipucu": "Aktarılan dosyaların ne zaman yüklendiğini düşün.",
          "aciklama": "Aktarılan dosyalar onları anan CLAUDE.md ile birlikte yüklenir, yük aynı kalır. İçe aktarma düzen içindir, küçültmek için değil.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "İçe aktarmalar uzun bir dosyayı düzenlemeye yardım eder ama bağlam maliyetini azaltmaz, çünkü aktarılan dosyalar onları anan CLAUDE.md ile birlikte yüklenir."
          }
        },
        {
          "id": "b04-d4-s5",
          "tur": "coktan",
          "kart": 1,
          "soru": "@ satırına göreli bir yol yazdın. Claude bu yolu neye göre çözer?",
          "secenekler": ["Claude'u başlattığın klasöre göre", "Ev klasörüne göre", "@ satırını yazan dosyanın yerine göre"],
          "dogru": 2,
          "ipucu": "Kartta göreli yolun neye göre çözüldüğünü anlatan cümleyi hatırla.",
          "aciklama": "Göreli yol, aktarmayı yazan dosyaya göre çözülür, çalışma klasörüne göre değil.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Göreli yollar çalışma klasörüne göre değil, içe aktarmayı içeren dosyaya göre çözülür."
          }
        },
        {
          "id": "b04-d4-s6",
          "tur": "eslestir",
          "kart": 6,
          "soru": "CLAUDE.md'deki her yazımı sonucuyla eşle.",
          "ciftler": [
            ["@README.md", "README dosyasını bağlama yükler"],
            ["Ters tırnak içinde @README.md", "Düz metin kalır, dosya yüklenmez"],
            ["@Design\\ Docs/api.md", "Boşluklu klasördeki dosyayı yükler"],
            ["@~/.claude/notlarim.md", "Proje dışı dosya; ilk seferde onay sorulur"]
          ],
          "ipucu": "Ters tırnak, ters bölü ve proje dışı yol için üç ayrı kuralı düşün.",
          "aciklama": "Ters tırnak içindeki yol aktarılmaz, boşluktan önce ters bölü gerekir. Proje dışı dosya için Claude Code onu gördüğü anda bir kez onay penceresi açar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Ters tırnak içindeki @yol düz metin kalır, boşluklu yolda her boşluktan önce ters bölü gerekir ve proje dosyasındaki proje dışı aktarma ilk karşılaşmada onay penceresi açar."
          }
        },
        {
          "id": "b04-d4-s7",
          "tur": "bosluk",
          "kart": 2,
          "soru": "Aktarılan bir dosya da başka dosya aktarabilir; bu zincir en çok ___ adım derin olabilir.",
          "secenekler": ["dört", "iki", "on", "sekiz"],
          "dogru": 0,
          "ipucu": "Kartta aktarma zinciri için verilen üst sınırı hatırla.",
          "aciklama": "Aktarılan dosyalar başka dosyaları da aktarabilir. En fazla derinlik dört adımdır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "İçe aktarılan dosyalar başka dosyaları da içe aktarabilir, en çok dört adım derinliğe kadar."
          }
        }
      ]
    },
    {
      "id": "b04-d5",
      "baslik": "Otomatik hafıza (auto memory)",
      "hedefler": [
        "Claude'un düzeltmelerine ve tercihlerine göre kendi notlarını tutabildiğini anlatabilir.",
        "Otomatik hafızanın bizde neden kapalı olduğunu iki satırdan okuyup anlatabilir."
      ],
      "anlatim": [
        "Otomatik hafızada notları Claude kendisi yazar; senin düzeltmelerine ve tercihlerine göre tutar.",
        "Notlar dört türdedir: rolün ve tercihlerin (user), verdiğin düzeltmeler (feedback), koddan çıkmayan proje bilgisi (project), dış kaynakların yeri (reference).",
        "Notlar ev klasöründe, ~/.claude/projects/<proje>/memory/ altında durur ve makineye yereldir.",
        "Otomatik hafıza yerel oturumlarda varsayılan olarak açıktır.",
        "Otomatik hafıza klasöründe MEMORY.md adlı dizin dosyası (index) durur. MEMORY.md'nin ilk 200 satırı ya da ilk 25KB'ı (kilobayt, dosya boyutu) her konuşmanın başında yüklenir.",
        "Tek bir projede kapatmak için o projenin ayar dosyasına autoMemoryEnabled değeri false yazılır.",
        "Bizde otomatik hafıza kapalı: .claude/settings.json'da autoMemoryEnabled değeri false. Nedeni CLAUDE.md'deki şu satır: 'Claude Code'un kendi hafıza klasörü kullanılmaz; her şey bu klasörde yaşar.'"
      ],
      "terimler": [
        {"tr": "otomatik hafıza", "en": "auto memory", "aciklama": "Claude'un oturumlar arasında kendi tuttuğu notlar; bizde kapalı."},
        {"tr": "dizin dosyası", "en": "index", "aciklama": "MEMORY.md; her not için bir satır tutar, başı her konuşmanın başında yüklenir."}
      ],
      "sorular": [
        {
          "id": "b04-d5-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Otomatik hafıza nedir?",
          "secenekler": ["Senin elle yazdığın bir talimat dosyası", "Claude'un kendi tuttuğu notlar", "Bir oturumun konuşma kaydının tamamı", "Şirketin BT ekibinin yazdığı kurallar"],
          "dogru": 1,
          "ipucu": "Notları kimin yazdığını düşün.",
          "aciklama": "Otomatik hafızayı Claude kendisi yazar. Talimat dosyası olan CLAUDE.md'yi ise sen yazarsın.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Otomatik hafıza, Claude'un senin düzeltmelerine ve tercihlerine göre kendi yazdığı notlardır."
          }
        },
        {
          "id": "b04-d5-s2",
          "tur": "eslestir",
          "kart": 1,
          "soru": "Claude'un tuttuğu dört not türünü içerikleriyle eşle.",
          "ciftler": [
            ["user", "Rolün, uzmanlığın, çalışma tercihlerin"],
            ["feedback", "Verdiğin düzeltmeler, onayladığın yaklaşımlar"],
            ["project", "Koddan çıkmayan süren iş, son tarih ve kararlar"],
            ["reference", "Proje dışındaki bilginin nerede olduğu"]
          ],
          "ipucu": "Kartta her not türünün adı, anlattığı içeriğin hemen yanında parantez içinde geçer.",
          "aciklama": "Claude her notun türünü dosyanın başındaki type alanına yazar. Dört tür user, feedback, project ve reference'tır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude dört tür not tutar: user rolünü ve tercihlerini, feedback düzeltmelerini, project koddan çıkarılamayan iş ve kararları, reference proje dışındaki bilginin yerini taşır."
          }
        },
        {
          "id": "b04-d5-s3",
          "tur": "dogru-yanlis",
          "kart": 3,
          "soru": "Otomatik hafıza, yerel oturumlarda varsayılan olarak açıktır.",
          "dogru": true,
          "ipucu": "Kartta otomatik hafızanın yerel oturumlardaki varsayılan durumunu hatırla.",
          "aciklama": "Yerel oturumlarda varsayılan olarak açıktır. Bu yüzden bizde kapalı olması için ayar dosyasında ayrı bir satır var.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Otomatik hafıza yerel oturumlarda varsayılan olarak açıktır."
          }
        },
        {
          "id": "b04-d5-s4",
          "tur": "coktan",
          "kart": 6,
          "soru": "Bizim .claude/settings.json dosyasında otomatik hafızayı kapatan ayarın adı hangisi?",
          "secenekler": ["autoMemoryEnabled", "sandbox", "permissions", "autoMemoryDirectory"],
          "dogru": 0,
          "ipucu": "Kapatmak için açık ya da kapalı değeri alan ayar gerekir; adında 'açık' anlamı olanı düşün.",
          "aciklama": "Dosyada autoMemoryEnabled değeri false, yani bu projede otomatik hafıza kapalıdır. autoMemoryDirectory ise notların duracağı yeri değiştirir.",
          "kaynak": {
            "adres": ".claude/settings.json:2",
            "okuma": "2026-11-17",
            "dayanak": ".claude/settings.json dosyası autoMemoryEnabled değerini false yapar.",
            "soz": "\"autoMemoryEnabled\": false"
          }
        },
        {
          "id": "b04-d5-s5",
          "tur": "coktan",
          "kart": 5,
          "soru": "Bir projenin kendi ayar dosyasında autoMemoryEnabled değeri false yapılırsa ne olur?",
          "secenekler": ["Bütün projelerde otomatik hafıza kapanır", "CLAUDE.md artık yüklenmez", "Yalnız o projede otomatik hafıza kapanır", "Claude var olan notları siler"],
          "dogru": 2,
          "ipucu": "Ayarın hangi dosyaya yazıldığına bak: kullanıcı ayarı mı, proje ayarı mı?",
          "aciklama": "Tek bir projede kapatmak için o projenin ayarlarına autoMemoryEnabled yazılır. CLAUDE.md bundan etkilenmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Otomatik hafızayı tek bir projede kapatmak için o projenin ayarlarında autoMemoryEnabled değeri verilir."
          }
        },
        {
          "id": "b04-d5-s6",
          "tur": "coktan",
          "kart": 6,
          "soru": "CLAUDE.md'de şu satır var: 'Claude Code'un kendi hafıza klasörü kullanılmaz; her şey bu klasörde yaşar.' Buna göre kalıcı bilgi nerede tutulur?",
          "secenekler": ["Claude Code'un hafıza klasöründe", "Bu proje klasörünün kendi dosyalarında", "Yalnız konuşmanın içinde", "Ayrı bir bulut hesabında"],
          "dogru": 1,
          "ipucu": "Satırın noktalı virgülden sonraki yarısına bak.",
          "aciklama": "Satır Claude Code'un hafıza klasörünü dışarıda bırakır ve her şeyin bu klasörde yaşamasını ister. Ayar dosyasındaki autoMemoryEnabled false değeri de otomatik hafızayı kapatır.",
          "kaynak": {
            "adres": "CLAUDE.md:16",
            "okuma": "2026-11-17",
            "dayanak": "CLAUDE.md'ye göre Claude Code'un kendi hafıza klasörü kullanılmaz ve her şey bu klasörde yaşar.",
            "soz": "Claude Code'un kendi hafıza klasörü kullanılmaz; her şey bu klasörde yaşar."
          }
        },
        {
          "id": "b04-d5-s7",
          "tur": "bosluk",
          "kart": 4,
          "soru": "MEMORY.md'nin ilk 200 satırı ya da ilk 25KB'ı, hangisi önce dolarsa, ___ yüklenir.",
          "secenekler": ["yalnız sen istediğinde", "haftada bir kez", "her konuşmanın başında"],
          "dogru": 2,
          "ipucu": "Dizin dosyasının neden kısa tutulduğunu düşün.",
          "aciklama": "MEMORY.md'nin baş kısmı her konuşmanın başında yüklenir. Sınırın ötesi açılışta yüklenmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "MEMORY.md'nin ilk 200 satırı ya da ilk 25KB'ı, hangisi önce gelirse, her konuşmanın başında yüklenir."
          }
        },
        {
          "id": "b04-d5-s8",
          "tur": "coktan",
          "kart": 2,
          "soru": "Otomatik hafıza notları nerede durur?",
          "secenekler": ["Proje kökündeki CLAUDE.md'nin içinde", "Proje içindeki .claude/memory/ klasöründe", "Anthropic'in sunucusunda", "~/.claude/projects/<proje>/memory/"],
          "dogru": 3,
          "ipucu": "Notların makineye yerel olduğunu ve her projenin kendi klasörünü aldığını düşün.",
          "aciklama": "Her projenin hafıza klasörü ev klasöründeki ~/.claude/projects/<proje>/memory/ altındadır. Notlar makineye yereldir, başka makineyle paylaşılmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Her proje kendi hafıza klasörünü ~/.claude/projects/<proje>/memory/ altında alır."
          }
        }
      ]
    },
    {
      "id": "b04-d6",
      "baslik": ".claude klasörünün haritası",
      "hedefler": [
        "skills, agents, settings.json ve kancaların (hook) yerini işleriyle eşleyip anlatabilir.",
        "Ev klasöründeki ~/.claude ile projedeki .claude klasörünün farkını ayırt edebilir."
      ],
      "anlatim": [
        "Claude Code ayarlarını iki yerden okur: proje klasöründen ve ev klasöründeki ~/.claude'dan. ~/.claude içindekiler kişiseldir, bütün projelerinde geçerlidir.",
        "Proje dosyaları git'e girer ve ekiple paylaşılabilir. settings.local.json ise kişisel ayar değişikliklerin içindir, git dışında tutulur.",
        "Claude'un kendine tuttuğu otomatik hafıza notları ev klasöründeki ~/.claude içinde, projects/<proje>/memory/ altında durur.",
        "CLAUDE.md bağlam ve kurallar; settings.json izinler ve kancalar; skills/<ad>/SKILL.md /ad ile çağrılan yetenek; agents/*.md alt ajan (subagent) tanımı. <ad> ve * yerine bir ad gelir.",
        "Çoğu kullanıcı yalnız CLAUDE.md ve settings.json'u düzenler. Klasörün geri kalanı isteğe bağlıdır, gerektikçe eklenir.",
        "Bizde ajanlar .claude/agents/ altında, skill'ler .claude/skills/ altında durur.",
        "Bizde kancalar .claude/settings.json içindeki hooks bölümünde kayıtlı. Örneğin oturum açılınca koşan acilis.py betiği .claude/hooks/ içinde durur."
      ],
      "terimler": [
        {"tr": "kanca", "en": "hook", "aciklama": "Belli bir anda kendiliğinden koşan komut; bizde settings.json'daki hooks bölümünde kayıtlı."},
        {"tr": "alt ajan", "en": "subagent", "aciklama": "Kendi istemi ve araçları olan, ana oturumun iş verdiği yardımcı; tanımı agents/*.md dosyasında."}
      ],
      "sorular": [
        {
          "id": "b04-d6-s1",
          "tur": "eslestir",
          "kart": 3,
          "soru": "Yapmak istediğin işi düzenleyeceğin dosyayla eşle.",
          "ciftler": [
            ["Claude'a proje bağlamı ve kurallar vermek", "CLAUDE.md"],
            ["Araç çağrısına izin vermek ya da engellemek", "settings.json içindeki permissions"],
            ["/ad ile çağrılan bir yetenek eklemek", "skills/<ad>/SKILL.md"],
            ["Kendi araçları olan bir alt ajan tanımlamak", "agents/*.md"]
          ],
          "ipucu": "Her dosyanın adı işine dair bir ipucu taşır.",
          "aciklama": "Her özelleştirme türü kendi dosyasında yaşar; resmi tablo hangi işin hangi dosyaya ait olduğunu gösterir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/claude-directory",
            "kopya": "claude-directory.md",
            "okuma": "2026-11-15",
            "dayanak": "Doğru dosyayı seçme tablosu proje bağlamı için CLAUDE.md'yi, izin ya da engel için settings.json permissions'ı, /ad ile çağrılan yetenek için skills/<ad>/SKILL.md'yi, alt ajan için agents/*.md'yi gösterir."
          }
        },
        {
          "id": "b04-d6-s2",
          "tur": "coktan",
          "kart": 5,
          "soru": "Bizim klasörde alt ajan tanımları nerede durur?",
          "secenekler": [".claude/skills/", ".claude/agents/", ".claude/hooks/", "kuyruk/"],
          "dogru": 1,
          "ipucu": "Kartta bizim ajanların hangi klasörde durduğunu anlatan cümleyi hatırla.",
          "aciklama": "CLAUDE.md ajanların .claude/agents/ altında olduğunu söyler. Bu, resmi belgedeki agents/*.md yeriyle aynıdır.",
          "kaynak": {
            "adres": "CLAUDE.md:107",
            "okuma": "2026-11-17",
            "dayanak": "CLAUDE.md'ye göre ajanlar .claude/agents/ altındadır.",
            "soz": "Ajanlar `.claude/agents/` altında"
          }
        },
        {
          "id": "b04-d6-s3",
          "tur": "coktan",
          "kart": 6,
          "soru": "Bizim kancalarımız hangi dosyada kayıtlı?",
          "secenekler": ["CLAUDE.md'nin sonunda", "AGENTS.md içinde", "DURUM.md'nin açık işler bölümünde", ".claude/settings.json içinde"],
          "dogru": 3,
          "ipucu": "Kartta kancaların hangi dosyanın hangi bölümünde kayıtlı olduğunu hatırla.",
          "aciklama": "Kancalar .claude/settings.json'daki hooks bölümünde kayıtlıdır. Koşturdukları betikler, örneğin acilis.py, .claude/hooks/ içinde durur.",
          "kaynak": {
            "adres": ".claude/settings.json:54",
            "okuma": "2026-11-17",
            "dayanak": ".claude/settings.json dosyasında kancalar hooks bölümünde kayıtlıdır.",
            "soz": "\"hooks\": { \"SessionStart\": ["
          }
        },
        {
          "id": "b04-d6-s4",
          "tur": "coktan",
          "kart": 0,
          "soru": "Ev klasöründeki ~/.claude içindeki dosyalar kimi etkiler?",
          "secenekler": ["Yalnız seni, bütün projelerinde", "Bu projede ekipteki herkesi", "Yalnız şirketin BT ekibini"],
          "dogru": 0,
          "ipucu": "Kişisel ayar ile ekiple paylaşılan ayarı ayıran cümleyi düşün.",
          "aciklama": "~/.claude kişisel yapılandırmadır ve bütün projelerinde geçerlidir. Proje dosyaları ise git ile ekiple paylaşılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/claude-directory",
            "kopya": "claude-directory.md",
            "okuma": "2026-11-15",
            "dayanak": "Proje dosyaları git'e girerek ekiple paylaşılır; ~/.claude içindeki dosyalar bütün projelerinde geçerli kişisel yapılandırmadır."
          }
        },
        {
          "id": "b04-d6-s5",
          "tur": "dogru-yanlis",
          "kart": 1,
          "soru": "settings.local.json dosyası git'e girer ve ekiple paylaşılır.",
          "dogru": false,
          "ipucu": "Dosya adındaki 'local' sözcüğünü düşün.",
          "aciklama": "settings.local.json kişisel geçersiz kılmalar içindir ve git dışında tutulur. Ekiple paylaşılan proje ayarı settings.json'dır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/claude-directory",
            "kopya": "claude-directory.md",
            "okuma": "2026-11-15",
            "dayanak": "Kişisel geçersiz kılmaları git dışında tutmak için düzenlenecek dosya, yalnız projeye ait settings.local.json'dır."
          }
        },
        {
          "id": "b04-d6-s6",
          "tur": "coktan",
          "kart": 2,
          "soru": "Otomatik hafıza notları proje .claude klasöründe mi, ev klasöründeki ~/.claude'da mı durur?",
          "secenekler": ["Proje .claude klasöründe, git'e girer", "İkisinde de birer kopya olur", "Yalnız ev klasöründeki ~/.claude'da"],
          "dogru": 2,
          "ipucu": "Otomatik hafızanın kişisel mi, ekiple paylaşılan mı olduğunu düşün.",
          "aciklama": "Otomatik hafıza yalnız ev klasöründe durur ve git'e girmez. Bu yüzden ekiple paylaşılmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/claude-directory",
            "kopya": "claude-directory.md",
            "okuma": "2026-11-15",
            "dayanak": "Dosya başvuru tablosu projects/<proje>/memory/ klasörünü yalnız genel kapsamlı, Claude'un oturumlar arası kendine notları olarak gösterir."
          }
        },
        {
          "id": "b04-d6-s7",
          "tur": "bosluk",
          "kart": 4,
          "soru": "Çoğu kullanıcı yalnız CLAUDE.md ve ___ dosyasını düzenler; klasörün geri kalanı isteğe bağlıdır.",
          "secenekler": ["settings.json", "settings.local.json", "agents/*.md"],
          "dogru": 0,
          "ipucu": "Kartta çoğu kullanıcının hangi dosyaları düzenlediğini anlatan cümleyi hatırla.",
          "aciklama": "Çoğu kullanıcı yalnız CLAUDE.md ve settings.json'u düzenler. Skill, kural ve alt ajan gerektikçe eklenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/claude-directory",
            "kopya": "claude-directory.md",
            "okuma": "2026-11-15",
            "dayanak": "Çoğu kullanıcı yalnız CLAUDE.md ve settings.json'u düzenler; klasörün geri kalanı isteğe bağlıdır."
          }
        }
      ]
    },
    {
      "id": "b04-d7",
      "baslik": "Bizim kayıt dosyaları: DURUM, KARARLAR, devir kartı",
      "hedefler": [
        "DURUM.md, KARARLAR.md ve devir kartının görevini anlatabilir.",
        "Bir KARARLAR maddesinin ve Düzeltme satırının biçimini okuyup anlatabilir."
      ],
      "anlatim": [
        "İşe başlamadan proje-baglam skill'i, devir kartı (son oturumdan kalan kart) ve DURUM.md okunur. Güncel durum devir kartında; görev alanı, öncelikler ve açık işler DURUM.md'de yaşar.",
        "Soru kapısı: cevabı kullanıcıda olan ve bir işi bekleten soru, DURUM.md'nin Sorulacaklar bölümünde kendi satırını taşır.",
        "KARARLAR.md karar ve düzeltme günlüğüdür. Karar, tarih başlığı altında numaralı maddedir; numara 1001'den sırayla artar.",
        "Maddede kullanıcının sözü kullanıcı: ile başlar ve tırnak içinde aynen yazılır. Claude'un yorumu ayrı bir 'Claude okuması:' parçasındadır.",
        "kayit-yazma skill'ine göre Claude kayıt dosyalarını Edit ya da Write aracıyla yazar. Kabuk komutuyla ya da Python gibi bir programla yazmayı koruma.py kancası durdurur.",
        "Hata, maddenin altına tek satırlık Düzeltme olarak yazılır: '- Düzeltme:', konu öneki (prefix), ne yanlış yapıldı, doğrusu, kaçıncı görülüş ve fark eden.",
        "CLAUDE.md'ye göre yanlış yönlendirme KARARLAR'a '- Düzeltme: yönlendirme:' önekiyle yazılır.",
        "Aynı konudaki hata üçüncü kez kullanıcıya ulaşınca kural yazılır. Biçim ve üslup kuralına kanca gibi mekanizma baştan yazılmaz; kayarsa söylenir, tekrar ederse mekanizmayı hak eder."
      ],
      "terimler": [
        {"tr": "önek", "en": "prefix", "aciklama": "Düzeltme satırında konuyu gösteren baş parça, örneğin 'yönlendirme:'."}
      ],
      "sorular": [
        {
          "id": "b04-d7-s1",
          "tur": "eslestir",
          "kart": 0,
          "soru": "CLAUDE.md'ye göre her bilgiyi tutulduğu ya da okunduğu yerle eşle.",
          "ciftler": [
            ["Güncel durum", "Devir kartı"],
            ["Görev alanı, öncelikler ve açık işler", "DURUM.md"],
            ["İşe başlamadan okunan bağlam skill'i", "proje-baglam"]
          ],
          "ipucu": "Kart güncel durumu ve açık işleri iki ayrı yere koyar.",
          "aciklama": "Güncel durum kartta, görev alanı, öncelikler ve açık işler DURUM'da yaşar. İşe başlamadan üçü birlikte okunur.",
          "kaynak": {
            "adres": "CLAUDE.md:91",
            "okuma": "2026-11-17",
            "dayanak": "CLAUDE.md'ye göre işe başlamadan proje-baglam skill'i, devir kartı ve DURUM.md okunur; güncel durum kartta, görev alanı, öncelikler ve açık işler DURUM'da yaşar.",
            "soz": "Güncel durum kartta, görev alanı, öncelikler ve açık işler DURUM'da"
          }
        },
        {
          "id": "b04-d7-s2",
          "tur": "coktan",
          "kart": 2,
          "soru": "KARARLAR.md kendini başlığında nasıl tanımlar?",
          "secenekler": ["Görev alanı, öncelikler ve açık işler", "Tek giriş noktası", "Karar ve düzeltme günlüğü", "Oturum özeti"],
          "dogru": 2,
          "ipucu": "Kartta KARARLAR.md'yi tanımlayan cümleyi hatırla.",
          "aciklama": "KARARLAR.md'nin başlığı onu karar ve düzeltme günlüğü diye tanımlar. 'Tek giriş noktası' ise DURUM.md'nin kendi tanımıdır.",
          "kaynak": {
            "adres": "KARARLAR.md:1",
            "okuma": "2026-11-17",
            "dayanak": "KARARLAR.md'nin ilk satırı dosyayı karar ve düzeltme günlüğü olarak adlandırır.",
            "soz": "KARARLAR — karar ve düzeltme günlüğü"
          }
        },
        {
          "id": "b04-d7-s3",
          "tur": "sirala",
          "kart": 5,
          "soru": "Bir Düzeltme satırının parçalarını yazılış sırasına koy.",
          "adimlar": ["- Düzeltme:", "Konu öneki, örneğin yönlendirme:", "Ne yanlış yapıldı", "Doğrusu", "Kaçıncı görülüş ve fark eden"],
          "ipucu": "Kartta Düzeltme satırının parçalarının sayıldığı cümleyi soldan sağa düşün.",
          "aciklama": "Kalıp '- Düzeltme:' ve konu önekiyle başlar, ardından ne yanlış yapıldığı, doğrusu ve görülüş sayısı gelir. Fark eden parantezde yazılır.",
          "kaynak": {
            "adres": "KARARLAR.md:3",
            "okuma": "2026-11-17",
            "dayanak": "KARARLAR.md'ye göre Düzeltme satırı konu önekiyle, ne yanlış yapıldığıyla, doğrusuyla ve kaçıncı görülüş olduğuyla yazılır, fark eden parantezde gösterilir.",
            "soz": "`- Düzeltme: <konu>: <ne yanlış yapıldı>"
          }
        },
        {
          "id": "b04-d7-s4",
          "tur": "coktan",
          "kart": 6,
          "soru": "Bir satır '- Düzeltme: yönlendirme:' ile başlıyor ve '2. görülüş (fark eden: kullanıcı)' ile bitiyor. Bu satır neyi kaydeder?",
          "secenekler": ["Kullanıcının onayladığı yeni ve numaralı bir kararı", "İkinci kez görülen bir yanlış yönlendirmeyi", "Kancanın durdurduğu bir hatayı", "Cevap bekleyen açık bir soruyu"],
          "dogru": 1,
          "ipucu": "Düzeltme satırının bir kararı mı, bir hatayı mı kaydettiğini düşün; satırın sonundaki sayıya da bak.",
          "aciklama": "'yönlendirme' öneki kullanıcıya yaptırılan adımdaki yanlış yönlendirme içindir. Satırın sonundaki 2. görülüş, aynı düzeltmenin iki kez yaşandığını söyler.",
          "kaynak": {
            "adres": "CLAUDE.md:24",
            "okuma": "2026-11-17",
            "dayanak": "CLAUDE.md'ye göre yanlış yönlendirme KARARLAR'a '- Düzeltme: yönlendirme:' önekiyle yazılır.",
            "soz": "Yanlış yönlendirme KARARLAR'a `- Düzeltme: yönlendirme:` önekiyle yazılır."
          }
        },
        {
          "id": "b04-d7-s5",
          "tur": "coktan",
          "kart": 7,
          "soru": "Aynı konudaki bir hata üçüncü kez kullanıcıya ulaştı. Kurala göre ne yapılır?",
          "secenekler": ["Kural yazılır", "Yalnız bir Düzeltme satırı daha eklenir", "Eski Düzeltme satırları silinir", "Kullanıcıya haber vermeden geçilir"],
          "dogru": 0,
          "ipucu": "Kartta aynı konunun üçüncü kez kullanıcıya ulaşması için söylenen kuralı hatırla.",
          "aciklama": "Aynı konu üçüncü kez kullanıcıya ulaşınca kural yazılır. Mekanizma ise yalnız belli koşullarda eklenir.",
          "kaynak": {
            "adres": "CLAUDE.md:113",
            "okuma": "2026-11-17",
            "dayanak": "CLAUDE.md'ye göre aynı konu üçüncü kez kullanıcıya ulaşınca kural yazılır, mekanizma ise yalnız bölüm 5'teki koşullarda eklenir.",
            "soz": "Aynı konu üçüncü kez kullanıcıya ulaşınca kural yazılır"
          }
        },
        {
          "id": "b04-d7-s6",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Cevabı kullanıcıda olan ve bir işi bekleten soru, DURUM.md'nin ___ bölümünde kendi satırını taşır.",
          "secenekler": ["Açık işler", "Kapanış denetimi", "Sorulacaklar"],
          "dogru": 2,
          "ipucu": "Kartta kullanıcının cevabını bekleyen sorular için ayrılan bölümü hatırla.",
          "aciklama": "Soru kapısı bu tür her soruya DURUM'da kendi satırını verir. Cevaplanan soru silinmez, arşiv bölümüne iner.",
          "kaynak": {
            "adres": "CLAUDE.md:49",
            "okuma": "2026-11-17",
            "dayanak": "CLAUDE.md'ye göre cevabı kullanıcıda olan ve bir işi bekleten her soru DURUM'un Sorulacaklar bölümünde kendi satırını taşır.",
            "soz": "kendi satırını taşır; cevaplanan soru arşiv bölümüne düşer, silinmez"
          }
        },
        {
          "id": "b04-d7-s7",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude KARARLAR.md'ye yeni bir satır ekleyecek. kayit-yazma skill'ine göre hangi yolla yazar?",
          "secenekler": ["Kabuk komutuyla", "Python betiğiyle", "Otomatik hafıza notuyla", "Edit ya da Write aracıyla"],
          "dogru": 3,
          "ipucu": "Kartta koruma.py kancasının hangi yazma yollarını durdurduğunu hatırla.",
          "aciklama": "Kayıt dosyaları Edit ya da Write aracıyla yazılır. Kabukla ve yorumlayıcıyla yazmayı koruma.py kancası durdurur.",
          "kaynak": {
            "adres": ".claude/skills/kayit-yazma/SKILL.md:14",
            "okuma": "2026-11-17",
            "dayanak": "kayit-yazma skill'inin ilk adımına göre kayıt dosyası Edit ya da Write aracıyla yazılır, kabukla ve yorumlayıcıyla yazmayı koruma.py durdurur.",
            "soz": "Edit ya da Write aracıyla yazılır. Kabukla ve yorumlayıcıyla yazmayı `koruma.py` durdurur."
          }
        },
        {
          "id": "b04-d7-s8",
          "tur": "coktan",
          "kart": 3,
          "soru": "Bir KARARLAR maddesinde kullanıcının sözü nasıl yazılır?",
          "secenekler": ["Claude'un kendi cümleleriyle özetlenerek", "Kullanıcı: ile, tırnak içinde ve aynen", "Yalnız onay durumu yazılır, sözün kendisi yazılmaz"],
          "dogru": 1,
          "ipucu": "Kullanıcının sözünün Claude'un yorumuyla karışmaması için nasıl yazıldığını düşün.",
          "aciklama": "Kullanıcının sözü tırnakla aynen yazılır, böylece yorumla karışmaz. Claude'un yorumu ayrı 'Claude okuması:' parçasındadır.",
          "kaynak": {
            "adres": "KARARLAR.md:3",
            "okuma": "2026-11-17",
            "dayanak": "KARARLAR.md'ye göre maddede kullanıcının sözü kullanıcı: ile tırnak içinde aynen, yorum ise ayrı Claude okuması: parçasıyla yazılır.",
            "soz": "yorum ayrı `Claude okuması:` ile"
          }
        }
      ]
    }
  ]
});
