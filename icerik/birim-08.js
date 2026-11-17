// icerik/birim-08.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b08",
  "sira": 8,
  "baslik": "MCP",
  "amac": "Claude'u dış servislere bağlayan MCP'yi tanımak; bizim klasörde Exa'nın nerede tanımlandığını ve MCP araçlarını hangi kural ve kancanın koruduğunu okuyup anlatabilmek.",
  "dersler": [
    {
      "id": "b08-d1",
      "baslik": "MCP nedir",
      "hedefler": [
        "MCP'nin Claude Code'u dış araçlara ve veri kaynaklarına bağlayan açık bir standart olduğunu anlatabilir.",
        "Web araması ve takvim gibi bir MCP örneğini ne işe yaradığıyla anlatabilir."
      ],
      "anlatim": [
        "MCP (Model Context Protocol), Claude Code'u dış araçlara ve veri kaynaklarına bağlayan açık bir standarttır.",
        "Bağlanan her MCP sunucusu (MCP server) Claude'a yeni araçlar (tool) verir. Claude o sistemi okuyup orada iş yapabilir.",
        "Başka bir uygulamadan sohbete sürekli veri kopyalıyorsan, o sistemi bağlamanın zamanı gelmiştir.",
        "Sunucu bağlıyken Claude'dan iş takip aracındaki bir kaydın anlattığı özelliği eklemesini, izleme panelinde kullanımı incelemesini, veritabanında kullanıcı bilgisi sorgulamasını, e-postada davet taslağı hazırlamasını isteyebilirsin.",
        "Bizim klasörde araştırma ajanı kaynak bulmak için Exa adlı MCP sunucusunu kullanır. Ajanın dosyasında 'Kaynakları Exa ile bulursun' yazar.",
        "Sunucuya güvenmeden bağlama. Dış içerik çeken sunucu istem enjeksiyonu (prompt injection) riski taşır."
      ],
      "terimler": [
        {"tr": "MCP", "en": "Model Context Protocol", "aciklama": "Claude Code'u dış araçlara ve veri kaynaklarına bağlayan açık standart."},
        {"tr": "MCP sunucusu", "en": "MCP server", "aciklama": "Bir servisin araçlarını Claude'a sunan bağlantı; bizdeki örneği Exa."},
        {"tr": "araç", "en": "tool", "aciklama": "Claude'un bir iş yapmak için çağırdığı tek işlev; MCP sunucusu yeni araçlar ekler."},
        {"tr": "bağlayıcı", "en": "connector", "aciklama": "Masaüstünde ekrandan kurulan MCP sunucusu."},
        {"tr": "istem enjeksiyonu", "en": "prompt injection", "aciklama": "Dışarıdan gelen metnin Claude'a talimat gibi davranma riski."}
      ],
      "sorular": [
        {
          "id": "b08-d1-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "MCP (Model Context Protocol) en kısa haliyle nedir?",
          "secenekler": [
            "Claude'un yazdığı kodu otomatik olarak test eden program",
            "Claude Code'u dış araçlara bağlayan açık standart",
            "Claude'un konuşma geçmişini saklayan dosya biçimi",
            "Claude Code'un masaüstü sürümünün adı"
          ],
          "dogru": 1,
          "ipucu": "Adındaki protokol sözcüğü iki şey arasındaki bağlantı kuralını anlatır.",
          "aciklama": "MCP açık kaynaklı bir standarttır. Bağlanan sunucular Claude Code'a araçlara, veritabanlarına ve API'lere erişim verir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp",
            "kopya": "mcp.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code, yapay zekâ ile araç bağlantıları için açık kaynaklı bir standart olan MCP üzerinden yüzlerce dış araca ve veri kaynağına bağlanabilir."
          }
        },
        {
          "id": "b08-d1-s2",
          "tur": "dogru-yanlis",
          "kart": 1,
          "soru": "Bir MCP sunucusu bağlandığında Claude yalnız yazıyla cevap verir; o sistemde iş yapamaz.",
          "dogru": false,
          "ipucu": "Bağlantıdan sonra Claude'un o sistemle neler yapabildiğini düşün.",
          "aciklama": "Yanlış. Sunucu bağlanınca Claude, senin yapıştırdığın veri yerine o sistemi doğrudan okuyup orada iş yapabilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp",
            "kopya": "mcp.md",
            "okuma": "2026-11-15",
            "dayanak": "Sunucu bağlandığında Claude, senin yapıştırdığın veriyle çalışmak yerine o sistemi doğrudan okuyabilir ve orada iş yapabilir."
          }
        },
        {
          "id": "b08-d1-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Her sabah bir izleme panelinden sayıları kopyalayıp sohbete yapıştırıyorsun. Belgeye göre ne yapmak uygun?",
          "secenekler": [
            "O paneli bir MCP sunucusu olarak bağlamak",
            "Sayıları CLAUDE.md dosyasına kalıcı olarak yazmak",
            "Her sabah aynı yapıştırmayı daha uzun bir istemle yapmak",
            "Yapıştırmayı engelleyen bir kanca yazmak"
          ],
          "dogru": 0,
          "ipucu": "Kopyalama işini senin yerine kimin yapabileceğini düşün.",
          "aciklama": "Belge, başka bir araçtan sohbete veri kopyaladığını fark edince o sistemi bağlamayı önerir. Bağlanınca Claude veriyi kendisi okur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp",
            "kopya": "mcp.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir iş takip aracı ya da izleme paneli gibi başka bir araçtan sohbete veri kopyaladığını fark ettiğinde bir sunucu bağla."
          }
        },
        {
          "id": "b08-d1-s4",
          "tur": "eslestir",
          "kart": 3,
          "soru": "Sunucu bağlıyken isteyebileceğin işleri, işin yapıldığı servisle eşleştir.",
          "ciftler": [
            ["İş takip aracı", "Kayıttaki özelliği eklemek"],
            ["İzleme paneli", "Bir özelliğin kullanımını incelemek"],
            ["Veritabanı", "Kullanıcı bilgisini sorgulamak"],
            ["E-posta", "Davet taslakları hazırlamak"]
          ],
          "ipucu": "Her işin hangi bilgiye dayandığını, o bilginin de hangi serviste durduğunu düşün.",
          "aciklama": "Her sunucu kendi servisindeki bilgiyi Claude'a açar: iş kaydı iş takip aracında, kullanım verisi izleme panelinde, kullanıcı bilgisi veritabanında, taslak e-postada durur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp",
            "kopya": "mcp.md",
            "okuma": "2026-11-15",
            "dayanak": "MCP sunucuları bağlıyken Claude Code'dan iş takip aracındaki bir özelliği eklemesini, izleme verisini incelemesini, veritabanını sorgulamasını ve Gmail taslakları hazırlamasını isteyebilirsin."
          }
        },
        {
          "id": "b08-d1-s5",
          "tur": "coktan",
          "kart": 4,
          "soru": "Araştırma ajanının dosyasında mcpServers altında exa tanımlı. Bu ajan Exa'yı ne için kullanır?",
          "secenekler": [
            "Takvime etkinlik eklemek için",
            "Klasörü düzenlemek için",
            "Web'deki kaynakları bulmak için",
            "Sana mesaj göndermek için"
          ],
          "dogru": 2,
          "ipucu": "Araştırma ajanının işinin ne olduğunu düşün.",
          "aciklama": "Araştırma ajanı web'i okuyan ajandır. Dosyası ona kaynakları Exa ile bulmasını söyler.",
          "kaynak": {
            "adres": ".claude/agents/arastirmaci.md:17",
            "okuma": "2026-11-17",
            "dayanak": "Araştırma ajanı kaynakları Exa ile bulur ve karar taşıyan her kaynağın sayfasını açıp okur.",
            "soz": "Kaynakları Exa ile bulursun"
          }
        },
        {
          "id": "b08-d1-s6",
          "tur": "coktan",
          "kart": 5,
          "soru": "Belgeye göre bir MCP sunucusunu bağlamadan önce ne yapmalısın?",
          "secenekler": [
            "Claude Code'u yeniden başlatmalısın",
            "Ona güvendiğini doğrulamalısın",
            "Sunucunun adını CLAUDE.md'ye yazmalısın"
          ],
          "dogru": 1,
          "ipucu": "Dışarıdan gelen bir metnin Claude'a ne söyleyebileceğini düşün.",
          "aciklama": "Belge, bağlamadan önce sunucuya güvendiğini doğrulamanı ister. Dış içerik çeken sunucu istem enjeksiyonu riski taşır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp",
            "kopya": "mcp.md",
            "okuma": "2026-11-15",
            "dayanak": "Her sunucuya bağlamadan önce ona güvendiğini doğrula; dış içerik çeken sunucular seni istem enjeksiyonu riskine açabilir."
          }
        }
      ]
    },
    {
      "id": "b08-d2",
      "baslik": "Sunucu eklemek ve kapsam",
      "hedefler": [
        "Yerel (local), proje (project) ve kullanıcı (user) kapsamlarını kayıt yerleriyle ayırt edebilir.",
        "Bizde proje MCP dosyası olmadığını, Exa'nın ajan dosyalarında tanımlandığını anlatabilir."
      ],
      "anlatim": [
        "Terminalde sunucu claude mcp add ile eklenir. Masaüstünde bağlayıcıyı (connector) yazı kutusunun yanındaki + düğmesinden eklersin, kenar çubuğunda Customize, Connectors bölümünden yönetirsin.",
        "Sunucu üç kapsamdan (scope) birine yazılır. Yerel kapsam yalnız sana ve yalnız bu projeye açıktır; varsayılan budur.",
        "Proje kapsamı proje kökündeki .mcp.json dosyasıdır; projeyi kopyalayan herkes kullanır. Claude Code böyle bir sunucuyu ilk gördüğünde sana onay sorar.",
        "Kullanıcı kapsamı yalnız sana ama bütün projelerine açıktır. Kaydı ev klasöründeki ~/.claude.json dosyasında, en üstteki mcpServers bölümünde durur.",
        "Bizde .mcp.json yok. Exa, araştırma ve hukuk ajanlarının dosyalarında, mcpServers alanında tanımlı.",
        "Exa'nın tanımındaki type: http, ağ üzerinden bağlanılan uzak bir servis demektir. Bilgisayarında çalışan yerel programlar için başka bir tür kullanılır.",
        "Ajan dosyasında böyle tanımlanan sunucu ajan başlarken bağlanır, ajan bitince bağlantı kesilir. Araçlarını yalnız ajan alır, ana sohbet almaz."
      ],
      "terimler": [
        {"tr": "kapsam", "en": "scope", "aciklama": "Bir MCP sunucusunun kime ve hangi projelere açık olduğu."},
        {"tr": "yerel kapsam", "en": "local", "aciklama": "Yalnız sen ve yalnız bu proje; varsayılan kapsam."},
        {"tr": "proje kapsamı", "en": "project", "aciklama": "Proje kökündeki .mcp.json; projeyi kopyalayan herkese açılır."},
        {"tr": "kullanıcı kapsamı", "en": "user", "aciklama": "Yalnız sen, bütün projelerin."},
        {"tr": "bağlayıcı", "en": "connector", "aciklama": "Masaüstünde ekrandan kurulan MCP sunucusu."}
      ],
      "sorular": [
        {
          "id": "b08-d2-s1",
          "tur": "eslestir",
          "kart": 3,
          "soru": "Kapsamları, kimin kullanabildiği ve kaydın nerede durduğuyla eşleştir.",
          "ciftler": [
            ["Yerel kapsam", "Yalnız sen, yalnız bu proje; varsayılan"],
            ["Proje kapsamı", "Proje kökündeki .mcp.json; projeyi kopyalayan herkes"],
            ["Kullanıcı kapsamı", "Yalnız sen, bütün projeler; ~/.claude.json en üstte"]
          ],
          "ipucu": "Kimin kullandığına ve kaç projede geçerli olduğuna bak.",
          "aciklama": "Kapsam, sunucuyu kimin ve hangi projelerde kullanacağını belirler. Ekiple paylaşılan tek kapsam proje kapsamıdır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp-quickstart",
            "kopya": "mcp-quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "Yerel kapsam yalnız sana ve yalnız bu projeye açıktır ve varsayılandır, proje kapsamı proje kökündeki .mcp.json ile projeyi kopyalayan herkese açılır, kullanıcı kapsamı ise ~/.claude.json içinde en üstteki mcpServers anahtarında durur ve yalnız sana, bütün projelerde açıktır."
          }
        },
        {
          "id": "b08-d2-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Terminalde claude mcp add ile kapsam belirtmeden bir sunucu eklersen sunucu hangi kapsama yazılır?",
          "secenekler": [
            "Kullanıcı kapsamına",
            "Proje kapsamına",
            "Yerel kapsama",
            "Kapsamsız kalır ve çalışmaz"
          ],
          "dogru": 2,
          "ipucu": "Kapsamlardan hangisinin varsayılan diye anlatıldığını hatırla.",
          "aciklama": "Belgeye göre varsayılan kapsam yereldir. Böyle eklenen sunucu yalnız sana ve yalnız bu projeye açılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp-quickstart",
            "kopya": "mcp-quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "Yerel kapsam ~/.claude.json içinde bu projenin kaydında durur, yalnız sana ve yalnız bu projeye açıktır ve varsayılandır."
          }
        },
        {
          "id": "b08-d2-s3",
          "tur": "dogru-yanlis",
          "kart": 4,
          "soru": "Bizim klasörün kökünde, Exa'yı tanımlayan bir .mcp.json dosyası var.",
          "dogru": false,
          "ipucu": "Exa'nın tanımının hangi dosyada durduğunu hatırla.",
          "aciklama": "Yanlış. Bizde .mcp.json yok; Exa ajan dosyalarında tanımlı.",
          "kaynak": {
            "adres": "inceleme/2026-11-07-buluttan-calisma.md:37",
            "okuma": "2026-11-17",
            "dayanak": "Depomuzda .mcp.json dosyası yoktur ve bu ls -a ile ölçülmüştür.",
            "soz": "Depomuzda `.mcp.json` yok"
          }
        },
        {
          "id": "b08-d2-s4",
          "tur": "coktan",
          "kart": 6,
          "soru": "arastirmaci.md'de Exa, mcpServers alanında satır içi tanımlı. Belgeye göre böyle tanımlanan sunucu ne zaman bağlanır?",
          "secenekler": [
            "Claude Code her açıldığında, ana sohbet için",
            "Ajan başlarken bağlanır, ajan bitince bağlantı kesilir",
            "Projeyi kopyalayan herkeste kalıcı olarak",
            "Yalnız sen /mcp yazdığında"
          ],
          "dogru": 1,
          "ipucu": "Sunucunun kimin dosyasında tanımlandığına bak.",
          "aciklama": "Alt ajan dosyasındaki satır içi sunucu o ajana aittir. Ajan başlarken bağlanır, işi bitince bağlantı kesilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Alt ajan dosyasında satır içi tanımlanan sunucular alt ajan başlarken bağlanır ve alt ajan bitince bağlantıları kesilir."
          }
        },
        {
          "id": "b08-d2-s5",
          "tur": "bosluk",
          "kart": 5,
          "soru": "Exa'nın tanımında type: http yazıyor. Belgeye göre HTTP sunucuları ___ içindir.",
          "secenekler": [
            "uzaktaki servisler",
            "bilgisayarında çalışan yerel programlar",
            "yalnız masaüstü uygulaması"
          ],
          "dogru": 0,
          "ipucu": "http sözcüğünün ağ üzerinden konuşmayı anlattığını düşün.",
          "aciklama": "HTTP sunucusunu servisin sağlayıcısı barındırır ve bağlantı ağ üzerinden kurulur. Bilgisayarında çalışan yerel programlar için başka bir tür kullanılır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/mcp",
            "kopya": "ders-101-11-mcp.md",
            "okuma": "2026-11-15",
            "dayanak": "HTTP sunucuları uzaktaki servisler içindir; servisin sağlayıcısı tarafından barındırılır ve ağ üzerinden bağlanır."
          }
        },
        {
          "id": "b08-d2-s6",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bir projenin .mcp.json dosyasındaki sunucuyu Claude Code ilk gördüğünde ne olur?",
          "secenekler": [
            "Sunucu sormadan çalışmaya başlar",
            "Claude Code sana onay sorar",
            "Sunucu kullanıcı kapsamına taşınır"
          ],
          "dogru": 1,
          "ipucu": "Başkasının deposunu açtığında neyin korunması gerektiğini düşün.",
          "aciklama": "Claude Code proje kapsamlı sunucuyu ilk gördüğünde onay sorar. Böylece kopyaladığın bir depo bilgisayarında izinsiz program başlatamaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp-quickstart",
            "kopya": "mcp-quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code proje kapsamlı bir sunucuyu ilk gördüğünde onay ister; bu soru, kopyaladığın bir deponun izin almadan bilgisayarında işlem başlatmasını önler."
          }
        },
        {
          "id": "b08-d2-s7",
          "tur": "coktan",
          "kart": 0,
          "soru": "Masaüstü uygulamasında bağlı bağlayıcıları görmek ya da birinin bağlantısını kesmek istiyorsun. Nereye bakarsın?",
          "secenekler": [
            "Yazı kutusunun altındaki model seçicisine",
            "Klasördeki .claude/settings.json dosyasına",
            "Terminaldeki /permissions paneline",
            "Customize altındaki Connectors bölümüne"
          ],
          "dogru": 3,
          "ipucu": "Bağlayıcıların, skill'lerin ve eklentilerin bir arada yönetildiği yeri düşün.",
          "aciklama": "Masaüstünde bağlayıcılar kenar çubuğundaki Customize altında, Connectors bölümünden yönetilir. Oturumda hangi bağlayıcıların olduğunu Claude'a da sorabilirsin.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Bağlayıcıları yönetmek ya da bağlantısını kesmek için kenar çubuğunda Customize'a tıklayıp Connectors bölümünü aç."
          }
        }
      ]
    },
    {
      "id": "b08-d3",
      "baslik": "MCP araç adı ve izin kuralı",
      "hedefler": [
        "Bir MCP araç adında sunucu ve araç parçalarını ayırt edebilir.",
        "settings.json'daki bir reddetme kuralının (deny rule) hangi işi engellediğini anlatabilir."
      ],
      "anlatim": [
        "Her MCP aracının tam adı aynı kalıptadır: mcp__<sunucu>__<araç>. Örnek: mcp__github__search_repositories, GitHub sunucusunun arama aracıdır.",
        "İzin kuralları üç türdür: izin ver (allow), sor (ask), reddet (deny). Sıra her zaman önce reddet, sonra sor, sonra izin ver; ilk eşleşen kazanır.",
        "Bizim .claude/settings.json dosyası bağlı hesapların yazan araçlarını reddeder: Drive'da dosya oluşturmak, takvime etkinlik eklemek gibi. Reddetme kuralı aracı engeller; kuralı model değil Claude Code uygular.",
        "Bağlı hesabın sunucu adı okunur bir ad değil, uzun bir kimliktir. Reddetme listesinde mcp__<kimlik>__create_event var: sunucu takvim hesabı, araç create_event, yani etkinlik oluşturmak.",
        "Ajan dosyasının tools satırında sondaki yıldız o sunucunun bütün araçları demektir: mcp__exa__*.",
        "Kancanın eşleştiricisinde (matcher) ise sona .* gelir: mcp__memory__.* gibi. Düz yazılan mcp__memory hiçbir araçla eşleşmez."
      ],
      "terimler": [
        {"tr": "reddetme kuralı", "en": "deny rule", "aciklama": "Belirtilen aracın kullanılmasını engelleyen izin kuralı."},
        {"tr": "izin ver", "en": "allow", "aciklama": "Aracın onay sorulmadan kullanılmasına izin veren kural türü."},
        {"tr": "sor", "en": "ask", "aciklama": "Araç kullanılmadan önce onay isteyen kural türü."},
        {"tr": "eşleştirici", "en": "matcher", "aciklama": "Kancanın hangi araç adlarında çalışacağını seçen kalıp."}
      ],
      "sorular": [
        {
          "id": "b08-d3-s1",
          "tur": "eslestir",
          "kart": 0,
          "soru": "mcp__github__search_repositories adını parçalarıyla eşleştir.",
          "ciftler": [
            ["mcp__", "Her MCP aracında aynı olan baş"],
            ["github", "Sunucunun adı"],
            ["search_repositories", "Aracın adı"]
          ],
          "ipucu": "Parçaları iki alt çizgi birbirinden ayırır.",
          "aciklama": "MCP araç adı mcp__ ile başlar, sonra sunucunun adı, iki alt çizgi ve aracın adı gelir. Bu örnekte sunucu github, araç search_repositories.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "MCP araçları yerleşik araçlardan farklı bir ad kalıbı kullanır: mcp__<sunucu>__<araç>; burada sunucu MCP sunucusunun adı, araç ise onun sunduğu araçtır, örneğin mcp__github__search_repositories."
          }
        },
        {
          "id": "b08-d3-s2",
          "tur": "coktan",
          "kart": 3,
          "soru": "settings.json'daki reddetme listesinde mcp__<kimlik>__delete_event adı da var; <kimlik> takvim hesabının uzun kimliğidir. Bu adda aracın adı hangi parça?",
          "secenekler": [
            "Takvim hesabının kimliği",
            "mcp__<kimlik>",
            "delete_event",
            "settings.json"
          ],
          "dogru": 2,
          "ipucu": "Son iki alt çizgiden sonra ne kaldığına bak.",
          "aciklama": "Ad son iki alt çizgiden bölünür; sondaki delete_event araçtır. Ortadaki uzun kimlik bağlı hesabın sunucu adıdır.",
          "kaynak": {
            "adres": ".claude/hooks/mcp_yazma.py:3",
            "okuma": "2026-11-17",
            "dayanak": "MCP yazma kancası araç adını mcp__<sunucu>__<araç> diye ayırır ve son iki alt çizgiden böler.",
            "soz": "Araç adı mcp__<sunucu>__<araç> diye ayrılır"
          }
        },
        {
          "id": "b08-d3-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "settings.json'daki reddetme listesinde takvim hesabının create_event aracı var. Claude bu araçla takvime etkinlik eklemeye çalışırsa ne olur?",
          "secenekler": [
            "Claude Code aracın kullanılmasını engeller",
            "Önce sana sorulur, onay verirsen araç çalışır",
            "Araç çalışır, yalnız bir kayda yazılır",
            "Yalnız gece oturumlarında engellenir"
          ],
          "dogru": 0,
          "ipucu": "Listenin üç kural türünden hangisine ait olduğuna bak.",
          "aciklama": "Reddetme kuralı aracı engeller, onay sormaz. Her kullanımda onay istemek sor kuralının işidir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Reddetme kuralları Claude Code'un belirtilen aracı kullanmasını engeller."
          }
        },
        {
          "id": "b08-d3-s4",
          "tur": "dogru-yanlis",
          "kart": 1,
          "soru": "Bir araç hem geniş bir reddetme kuralına hem de daha dar bir izin kuralına uyuyorsa dar olan kazanır ve araç çalışır.",
          "dogru": false,
          "ipucu": "Kuralların hangi sırayla okunduğunu hatırla.",
          "aciklama": "Yanlış. Geniş bir reddetme kuralı, dar bir izin kuralına uyan çağrıyı da engeller; izin kuralı reddetmeden istisna açamaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Geniş bir reddetme kuralı, daha dar bir izin kuralına da uyan çağrılar dahil eşleşen her çağrıyı engeller; izin kuralı reddetme kuralından istisna açamaz."
          }
        },
        {
          "id": "b08-d3-s5",
          "tur": "sirala",
          "kart": 1,
          "soru": "Claude Code izin kurallarını hangi sırayla değerlendirir? İlk bakılandan sona doğru sırala.",
          "adimlar": [
            "Reddetme kuralları",
            "Sor kuralları",
            "İzin ver kuralları"
          ],
          "ipucu": "En katı kural önce bakılır.",
          "aciklama": "Sıra önce reddet, sonra sor, sonra izin ver. Bu sırada ilk eşleşen kural sonucu belirler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Kurallar sırayla değerlendirilir: önce reddet, sonra sor, sonra izin ver; bu sırada ilk eşleşen sonucu belirler ve kuralın ne kadar özel olduğu sırayı değiştirmez."
          }
        },
        {
          "id": "b08-d3-s6",
          "tur": "bosluk",
          "kart": 5,
          "soru": "Bir kancanın memory sunucusunun bütün araçlarında çalışması için eşleştirici (matcher) ___ yazılır.",
          "secenekler": [
            "mcp__memory",
            "mcp__memory__.*",
            "memory",
            "mcp__memory__create_entities"
          ],
          "dogru": 1,
          "ipucu": "Yalnız düz harflerden oluşan bir eşleştiricinin nasıl karşılaştırıldığını düşün.",
          "aciklama": "Sunucunun bütün araçları için önekin sonuna .* eklenir; mcp__memory__create_entities yalnız tek bir aracı tutar. Düz mcp__memory ise tam metin olarak karşılaştırılır ve hiçbir araçla eşleşmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks",
            "kopya": "hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir sunucunun her aracını eşleştirmek için sunucu önekinin sonuna .* eklenir ve bu zorunludur, çünkü mcp__memory gibi yalnız düz karakterli bir eşleştirici tam metin olarak karşılaştırılır ve hiçbir araçla eşleşmez."
          }
        },
        {
          "id": "b08-d3-s7",
          "tur": "coktan",
          "kart": 4,
          "soru": "Araştırma ajanının dosyasında tools satırında mcp__exa__* yazıyor. Bu ne demek?",
          "secenekler": [
            "Ajan yalnız exa adlı tek bir aracı kullanabilir",
            "Ajan bağlı bütün MCP sunucularını kullanabilir",
            "Exa'nın araçları bu ajana kapatılır",
            "Ajan exa'nın bütün araçlarını kullanabilir"
          ],
          "dogru": 3,
          "ipucu": "Sondaki yıldızın neyin yerine geçtiğini düşün.",
          "aciklama": "tools alanında mcp__<sunucu>__* o sunucunun bütün araçlarını verir. Burada sunucu exa olduğu için ajan Exa'nın bütün araçlarını kullanabilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Alt ajana tek bir sunucunun bütün araçlarını vermek için tools alanına mcp__github__* biçiminde yazılır."
          }
        }
      ]
    },
    {
      "id": "b08-d4",
      "baslik": "MCP'nin bağlam maliyeti",
      "hedefler": [
        "Oturum başında MCP sunucularından önce yalnız araç adlarının ve talimatların yüklendiğini anlatabilir.",
        "Kullanmadığın sunucuyu kapatma önerisinin nedenini anlatabilir."
      ],
      "anlatim": [
        "Bağlam penceresi (context window), Claude'un oturumda bildiği her şeyin durduğu yerdir. Sen yazmadan önce oraya CLAUDE.md, otomatik hafıza, MCP araç adları ve skill açıklamaları yüklenir.",
        "Araç araması (tool search) varsayılan olarak açıktır. Bir MCP aracının tam tanımı, Claude ona ihtiyaç duyana kadar bağlama girmez.",
        "Yine de her sunucu araç adlarını ve talimatlarını yükler; kullanmasan bile biraz yer kaplar. Bu yüzden belge, işle ilgisi olmayan sunucuları kapatmayı önerir.",
        "Exa, .mcp.json'da değil, araştırma ve hukuk ajanlarının dosyalarında tanımlı. Sunucuyu böyle alt ajanda tanımlamak, araç açıklamalarının ana sohbetin bağlamında yer tutmasını önler.",
        "Bir aracın komut satırı (CLI) karşılığı varsa, örneğin GitHub için gh, o daha az bağlam harcar."
      ],
      "terimler": [
        {"tr": "bağlam penceresi", "en": "context window", "aciklama": "Claude'un oturumda bildiği her şeyin durduğu yer."},
        {"tr": "araç araması", "en": "tool search", "aciklama": "MCP araçlarının tam tanımını gerekene kadar bağlam dışında tutan, varsayılan açık özellik."},
        {"tr": "komut satırı", "en": "CLI", "aciklama": "Terminalde yazılarak çalışan program; GitHub için gh gibi."}
      ],
      "sorular": [
        {
          "id": "b08-d4-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Belgeye göre sen daha bir şey yazmadan bağlama hangisi yüklenir?",
          "secenekler": [
            "Her MCP aracının bütün ayrıntıları",
            "Bağlı MCP sunucularındaki araçların adları",
            "Klasördeki bütün dosyaların içeriği",
            "Önceki oturumların bütün konuşmaları"
          ],
          "dogru": 1,
          "ipucu": "Oturum başında yüklenen, kısa olan parçayı düşün.",
          "aciklama": "Sen yazmadan önce bağlama CLAUDE.md, otomatik hafıza, skill açıklamaları ve MCP araç adları yüklenir. MCP'den bu aşamada gelen, araçların adlarıdır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Sen bir şey yazmadan önce bağlama CLAUDE.md, otomatik hafıza, MCP araç adları ve skill açıklamaları yüklenir."
          }
        },
        {
          "id": "b08-d4-s2",
          "tur": "dogru-yanlis",
          "kart": 2,
          "soru": "Bağlı bir MCP sunucusunu hiç kullanmasan da bağlamda biraz yer kaplar.",
          "dogru": true,
          "ipucu": "Oturum başında sunucudan neyin yüklendiğini hatırla.",
          "aciklama": "Doğru. Sunucu kullanılmasa da araç adları ve talimatları bağlama girer; her bağlı sunucu biraz yer tutar.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/mcp",
            "kopya": "ders-101-11-mcp.md",
            "okuma": "2026-11-15",
            "dayanak": "MCP sunucuları, onları o an kullanmasan bile araç adlarını ve talimatlarını bağlam penceresine ekler."
          }
        },
        {
          "id": "b08-d4-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bu projede hiç kullanmadığın üç sunucu bağlı duruyor. Belgenin önerisi hangisi?",
          "secenekler": [
            "Açık tut, kullanılmayan sunucu yer kaplamaz",
            "Üçünü de proje kapsamına taşı",
            "İlgisiz sunucuları kapatmayı düşün",
            "Oturumu her saat yeniden başlat"
          ],
          "dogru": 2,
          "ipucu": "Kullanılmayan bir sunucunun neye mal olduğunu düşün.",
          "aciklama": "Her bağlı sunucu bağlamda biraz yer tutar. Bu yüzden belge, ilgisiz olanları kapatmayı önerir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/context-management",
            "kopya": "ders-101-06-context-management.md",
            "okuma": "2026-11-15",
            "dayanak": "Her sunucu yine de biraz yer kapladığı için, bu projeyle ilgisi olmayan işler için kurulu sunucuların varsa onları kapatmayı düşün."
          }
        },
        {
          "id": "b08-d4-s4",
          "tur": "coktan",
          "kart": 4,
          "soru": "GitHub'la çalışacaksın ve bilgisayarında gh komut satırı aracı kurulu. Bağlam açısından hangisi daha az yer tutar?",
          "secenekler": [
            "gh komut satırı aracı",
            "GitHub MCP sunucusu",
            "İkisi de aynı yeri tutar",
            "İkisini birlikte kullanmak"
          ],
          "dogru": 0,
          "ipucu": "Hangisinin her aracı için bağlama bir liste eklediğini düşün.",
          "aciklama": "Komut satırı aracı, her araç için bağlama liste eklemez. Bu yüzden karşılığı varsa bağlamı daha verimli kullanır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/mcp",
            "kopya": "ders-101-11-mcp.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir aracın GitHub için gh ya da AWS için aws gibi komut satırı karşılığı varsa, her araç için liste eklemediğinden komut satırı bağlamı daha verimli kullanır."
          }
        },
        {
          "id": "b08-d4-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "Exa, .mcp.json yerine yalnız ajan dosyasında tanımlı. Exa'nın araç açıklamaları ana sohbetin bağlamında ne olur?",
          "secenekler": [
            "Her oturumun başında yüklenir",
            "Yer tutmaz",
            "Ajan başlayınca oraya da yüklenir"
          ],
          "dogru": 1,
          "ipucu": "Sunucunun nerede tanımlandığına ve araçlarını kimin aldığına bak.",
          "aciklama": "Alt ajanda satır içi tanımlanan sunucunun araçlarını yalnız o ajan alır. Ana sohbetin bağlamı bu açıklamaları taşımaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir MCP sunucusunu ana sohbetten tamamen uzak tutmak ve araç açıklamalarının orada bağlam harcamasını önlemek için onu .mcp.json yerine alt ajan dosyasında satır içi tanımla; araçları alt ajan alır, ana sohbet almaz."
          }
        },
        {
          "id": "b08-d4-s6",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Araç araması varsayılan olarak açıkken bir MCP aracının tam tanımı, Claude ___ bağlama girmez.",
          "secenekler": [
            "işini bitirene kadar",
            "ona ihtiyaç duyana kadar",
            "senden onay alana kadar",
            "ilk cevabını yazana kadar"
          ],
          "dogru": 1,
          "ipucu": "Tam tanımın ne zaman işe yarayacağını düşün.",
          "aciklama": "Araç araması varsayılan olarak açıktır. Bir aracın tam tanımı ancak Claude o araca ihtiyaç duyunca yüklenir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/mcp",
            "kopya": "ders-101-11-mcp.md",
            "okuma": "2026-11-15",
            "dayanak": "Araç araması varsayılan olarak açıktır, bu yüzden Claude Code her MCP aracının tam tanımını Claude ona ihtiyaç duyana kadar bağlamın dışında tutar."
          }
        }
      ]
    },
    {
      "id": "b08-d5",
      "baslik": "Bizde dış sisteme yazma kapısı",
      "hedefler": [
        "Dış sisteme yazmanın her seferinde sana sorulduğunu ve önceki onayın geçmediğini anlatabilir.",
        "MCP yazma koruması kancasının görevini settings.json kaydından ve baş yorumundan anlatabilir."
      ],
      "anlatim": [
        "CLAUDE.md her seferinde sorulan işleri sayar; önceki onay geçmez. Bunlardan biri dış sisteme yazmadır: takvim, hatırlatıcı, zamanlanmış görev, git'i uzağa gönderme.",
        "Kural yalnız yazıda kalmaz, kanca da korur. Belgeye göre CLAUDE.md yol gösterir; izinler ve kancalar ise Claude ne karar verirse versin sınırı uygular.",
        "İzin kurallarında da seçim var: reddetme kuralı aracı engeller, sor kuralı ise Claude aracı kullanmaya çalıştığında onay ister.",
        "settings.json'daki araç öncesi kanca (PreToolUse) kaydı, eşleştirici (matcher) mcp__.* ile her MCP aracı çağrılmadan önce mcp_yazma.py dosyasını koşar.",
        "Kanca, bağlı hesapta adı okuma listesinde olmayan aracı ve Apple Hatırlatıcılar ile Takvim'de okuma dışı işlemi durdurur. Liste kanca dosyasındadır: get, list, read gibi adlar."
      ],
      "terimler": [
        {"tr": "araç öncesi kanca", "en": "PreToolUse", "aciklama": "Claude bir aracı çağırmadan hemen önce çalışan kanca olayı."},
        {"tr": "eşleştirici", "en": "matcher", "aciklama": "Kancanın hangi araç adlarında çalışacağını seçen kalıp; bizde mcp__.*."}
      ],
      "sorular": [
        {
          "id": "b08-d5-s1",
          "tur": "dogru-yanlis",
          "kart": 0,
          "soru": "Dün takvime etkinlik eklemeye onay verdiysen, bugün yeni bir etkinlik için Claude sana yeniden sormaz.",
          "dogru": false,
          "ipucu": "Önceki onayın bir sonraki işe geçip geçmediğini hatırla.",
          "aciklama": "Yanlış. Dış sisteme yazma her seferinde sorulur; önceki onay bir sonraki işe geçmez.",
          "kaynak": {
            "adres": "CLAUDE.md:46",
            "okuma": "2026-11-17",
            "dayanak": "Her seferinde basitçe sorulan ve önceki onayın geçmediği işler arasında dış sisteme yazma, örneğin takvim ve hatırlatıcı, vardır.",
            "soz": "Her seferinde basitçe sorulanlar, önceki onay geçmez"
          }
        },
        {
          "id": "b08-d5-s2",
          "tur": "coktan",
          "kart": 0,
          "soru": "CLAUDE.md'ye göre hangisi her seferinde sorulan bir dış sisteme yazmadır?",
          "secenekler": [
            "Klasördeki bir notu düzeltmek",
            "Bir web sayfasını okumak",
            "Takvime yeni bir etkinlik eklemek",
            "Testleri koşmak"
          ],
          "dogru": 2,
          "ipucu": "Hangisinin bu klasörün dışında bir şeyi değiştirdiğini düşün.",
          "aciklama": "Takvim dış bir sistemdir ve ona yazmak her seferinde sorulur. Okumak ve klasör içinde düzeltme yapmak bu listede yok.",
          "kaynak": {
            "adres": "CLAUDE.md:46",
            "okuma": "2026-11-17",
            "dayanak": "Dış sisteme yazma, yani takvim, hatırlatıcı, zamanlanmış görev ve git'i uzağa gönderme (yedek deposuna kapanış gönderimi hariç), her seferinde sorulur ve önceki onay geçmez.",
            "soz": "dış sisteme yazma (takvim, hatırlatıcı, zamanlanmış görev"
          }
        },
        {
          "id": "b08-d5-s3",
          "tur": "coktan",
          "kart": 3,
          "soru": "settings.json'daki kayıt: eşleştirici mcp__.*, komut mcp_yazma.py, durum iletisi Hesap ve Apple yazma koruması. Bu kanca ne zaman çalışır?",
          "secenekler": [
            "Oturum açılırken bir kez",
            "Her MCP aracı çağrılmadan önce",
            "Claude cevabını bitirince",
            "Yalnız Bash komutlarından sonra"
          ],
          "dogru": 1,
          "ipucu": "Kaydın hangi kanca olayına bağlı olduğunu ve mcp__.* kalıbının hangi araçları tuttuğunu düşün.",
          "aciklama": "Kayıt araç öncesi kanca olayının altındadır ve mcp__.* her MCP aracının adıyla eşleşir. Bu yüzden kanca her MCP aracı çağrılmadan önce çalışır.",
          "kaynak": {
            "adres": ".claude/hooks/mcp_yazma.py:1",
            "okuma": "2026-11-17",
            "dayanak": "mcp_yazma.py, PreToolUse olayında mcp__.* ile eşleşen araçlar için çalışan bağlı hesap ve Apple yazma kontrolüdür.",
            "soz": "Bağlı hesap ve Apple yazma kontrolü (PreToolUse, mcp__.*"
          }
        },
        {
          "id": "b08-d5-s4",
          "tur": "eslestir",
          "kart": 4,
          "soru": "Kartta anlatılan mcp_yazma.py kancasına göre her işi, kancanın ne yaptığıyla eşleştir.",
          "ciftler": [
            ["Drive'da dosya oluşturmak", "Durur: bağlı hesapta okuma dışı araç"],
            ["Apple Takvim'e etkinlik eklemek", "Durur: Apple'da okuma dışı işlem"],
            ["Apple Hatırlatıcılar'daki listeyi okumak", "Geçer: okuma işlemi"]
          ],
          "ipucu": "Her işin okuma mı yazma mı olduğuna, Apple'da mı bağlı hesapta mı yapıldığına bak.",
          "aciklama": "Kanca bağlı hesapta okuma listesinde olmayan aracı ve Apple'da okuma dışı işlemi durdurur, okumayı geçirir. Apple araçlarında okumayı action alanının read olmasından anlar.",
          "kaynak": {
            "adres": ".claude/hooks/mcp_yazma.py:14",
            "okuma": "2026-11-17",
            "dayanak": "Kanca bağlı hesapta adı okuma listesinde olmayan aracı ve Apple Hatırlatıcılar ile Takvim'de action read olmayan işlemi durdurur; okuma listesindeki araçlar, Apple'da action read ve yalnız okuyan calendar_calendars geçer.",
            "soz": "Apple Hatırlatıcılar ve Takvim: araç adı reminders_tasks"
          }
        },
        {
          "id": "b08-d5-s5",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Belgeye göre CLAUDE.md yol gösterir; izinler ve kancalar ise Claude ne karar verirse versin ___.",
          "secenekler": [
            "sınırı uygular",
            "yalnız öneride bulunur",
            "kararı Claude'a bırakır"
          ],
          "dogru": 0,
          "ipucu": "Güvence ile yol göstermenin farkını düşün.",
          "aciklama": "Belge, hiç olmaması gereken işler için CLAUDE.md yerine izin ya da kanca kullanmayı önerir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "CLAUDE.md Claude'a projenin nasıl işlediğini anlatır, izinler ve kancalar ise Claude ne karar verirse versin sınırları uygular."
          }
        },
        {
          "id": "b08-d5-s6",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bir aracın engellenmesini değil, her kullanımda sana sorulmasını istiyorsun. Claude'a hangi izin kuralı türünü yazmasını tarif edersin?",
          "secenekler": [
            "İzin ver kuralı",
            "Reddetme kuralı",
            "Kancayı kapatmak",
            "Sor kuralı"
          ],
          "dogru": 3,
          "ipucu": "Üç kural türünden hangisinin onay penceresi açtığını düşün.",
          "aciklama": "Sor kuralı aracı engellemez, Claude aracı kullanmaya çalıştığında onay ister. Reddetme kuralı ise aracı engeller.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Sor kuralları, Claude belirtilen aracı kullanmaya çalıştığında onay ister."
          }
        }
      ]
    },
    {
      "id": "b08-d6",
      "baslik": "MCP sorununu bulmak",
      "hedefler": [
        "/mcp komutunun sunucuları ve bağlantı durumlarını gösterdiğini anlatabilir.",
        "Sunucu çalışmadığında bakılacak yerlerin sırasını anlatabilir."
      ],
      "anlatim": [
        "Bir sunucu çalışmıyorsa ilk iş durumuna bakmaktır. Terminalde oturum içinde /mcp, sunucuları ve bağlantı durumlarını (connection status) gösterir.",
        "Masaüstünde Claude'a oturumda hangi bağlayıcıların olduğunu sorabilir, Customize, Connectors bölümüne bakabilirsin.",
        "Sıfır araç gösteren bağlı sunucuda /mcp içinden yeniden bağlan (Reconnect) seç. Hâlâ sıfırsa Claude Code'u terminalde claude --debug=mcp ile başlat; hata kaydında sunucunun yazdıklarını oku.",
        "Proje sunucusu kapalıysa ilk onay sorusunu kapatmış olabilirsin. Terminalde claude mcp reset-project-choices çalıştırıp Claude Code'u yeniden başlatınca soru tekrar gelir.",
        "Başlamayan sunucu /mcp içinde başarısız görünür. Sık neden komuttaki göreli dosya yoludur (relative path): yol Claude Code'u başlattığın klasöre göre okunur.",
        "Exa gibi ajan dosyasında tanımlı sunucuyu Claude Code, ancak dosyanın geldiği klasöre güvendiğini onayladıktan sonra yükler. Onay yoksa o dosyadaki satır içi sunucuları atlar."
      ],
      "terimler": [
        {"tr": "bağlantı durumu", "en": "connection status", "aciklama": "Sunucunun bağlı, başarısız ya da giriş bekliyor olduğunu gösteren bilgi."},
        {"tr": "yeniden bağlan", "en": "Reconnect", "aciklama": "/mcp panelinde sunucuyu yeniden bağlayan seçenek."},
        {"tr": "göreli dosya yolu", "en": "relative path", "aciklama": "Komuttaki dosya yolu; .mcp.json'un yerine göre değil, Claude Code'u başlattığın klasöre göre okunur."}
      ],
      "sorular": [
        {
          "id": "b08-d6-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Terminalde bir oturumun içindeyken /mcp komutu sana ne gösterir?",
          "secenekler": [
            "Bütün izin kurallarını ve geldikleri dosyaları",
            "Sunucularını ve bağlantı durumlarını",
            "Bağlamda kalan boş yeri",
            "Kayıtlı kancaların listesini"
          ],
          "dogru": 1,
          "ipucu": "Komutun adının hangi özellikten geldiğine bak.",
          "aciklama": "/mcp sunucuları ve bağlantı durumlarını gösterir. İzin kuralları /permissions, kancalar /hooks ile listelenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "Sunucularını ve bağlantı durumlarını görmek için /mcp komutunu çalıştır."
          }
        },
        {
          "id": "b08-d6-s2",
          "tur": "sirala",
          "kart": 2,
          "soru": "Sunucu bağlı görünüyor ama sıfır araç listeliyor. Belgedeki adımları sırala.",
          "adimlar": [
            "/mcp ile sunucunun durumuna bak",
            "/mcp içinden Reconnect seç",
            "Sayı sıfırda kalırsa terminalde claude --debug=mcp ile başlat",
            "Hata kaydında sunucunun yazdıklarını oku"
          ],
          "ipucu": "Önce bak, sonra en kolay çareyi dene, en son kayda in.",
          "aciklama": "Belge önce /mcp ile durumu görmeyi, sonra Reconnect'i söyler. Sayı sıfırda kalırsa hata kaydında sunucunun yazdıkları okunur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "Bağlı görünüp sıfır araç listeleyen sunucu için /mcp içinden Reconnect seç; sayı sıfırda kalırsa claude --debug=mcp çalıştırıp hata kaydında sunucunun stderr çıktısını oku."
          }
        },
        {
          "id": "b08-d6-s3",
          "tur": "dogru-yanlis",
          "kart": 3,
          "soru": "Bir projenin .mcp.json sunucusu için ilk onay sorusunu kapattıysan, o sunucu kapalı kalır.",
          "dogru": true,
          "ipucu": "Proje sunucusunun ilk açılışta senden ne istediğini hatırla.",
          "aciklama": "Doğru. Onay sorusu kapatılırsa sunucu kapalı kalır; soruyu yeniden görmek için terminalde claude mcp reset-project-choices çalıştırıp Claude Code'u yeniden başlatırsın.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "Proje kapsamlı sunucular bir kerelik onay ister ve onay sorusunu kapattıysan sunucu kapalı kalır."
          }
        },
        {
          "id": "b08-d6-s4",
          "tur": "coktan",
          "kart": 1,
          "soru": "Masaüstündesin ve bir bağlayıcının bu oturumda olup olmadığını merak ediyorsun. Belgeye göre hangisini yapabilirsin?",
          "secenekler": [
            "Model seçicisine bakmak",
            "Terminalde /permissions panelini açmak",
            "Claude'a oturumdaki bağlayıcıları sormak",
            "Terminalde /hooks listesine bakmak"
          ],
          "dogru": 2,
          "ipucu": "Masaüstünde komut yazmadan, sohbetin kendisiyle ne öğrenebileceğini düşün.",
          "aciklama": "Masaüstü belgesi, oturumdaki bağlayıcıları Claude'a sorabileceğini söyler. Yönetmek ya da kesmek için Customize altındaki Connectors bölümü kullanılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Oturumunda hangi bağlayıcıların kurulu olduğunu Claude'a sorabilirsin."
          }
        },
        {
          "id": "b08-d6-s5",
          "tur": "eslestir",
          "kart": 4,
          "soru": "Belirtiyi, kartta anlatılan ilk yapılacak işle eşleştir.",
          "ciftler": [
            ["Proje sunucusu kapalı, ilk onay sorusunu kapatmıştın", "Terminalde onay seçimlerini sıfırla, yeniden başlat"],
            ["Sunucu /mcp içinde başarısız görünüyor", "Komuttaki göreli dosya yollarına bak"],
            ["Bağlı görünüyor ama sıfır araç listeliyor", "/mcp içinden Reconnect seç"]
          ],
          "ipucu": "Her belirtide sunucunun hangi aşamada takıldığını düşün: onay, başlama ya da araç listesi.",
          "aciklama": "Onayı kapatılan proje sunucusu, seçimler sıfırlanıp soru tekrar gelene kadar kapalı kalır; başlamayan sunucuda sık neden göreli dosya yoludur, çünkü yol Claude Code'u başlattığın klasöre göre okunur. Bağlı görünüp araç listelemeyen sunucu ise başlamıştır, ilk çare /mcp içinden yeniden bağlanmaktır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "Onayı kapatılan proje sunucusu kapalı kalır, başlamayan sunucu /mcp içinde başarısız görünür ve sık nedeni command ya da args içindeki göreli dosya yollarıdır, bağlı görünüp sıfır araç listeleyen sunucu için ise /mcp içinden Reconnect seçilir."
          }
        },
        {
          "id": "b08-d6-s6",
          "tur": "coktan",
          "kart": 5,
          "soru": "Exa araştırma ajanının dosyasında tanımlı ama ajan çalışınca Exa araçları gelmiyor. Belgeye göre olası neden hangisi?",
          "secenekler": [
            "Klasöre henüz güven onayı verilmemiş",
            "Ajanın maxTurns değeri çok yüksek tutulmuş",
            "Projede .mcp.json dosyası bulunmuyor",
            "settings.json'da bir Stop kancası tanımlı"
          ],
          "dogru": 0,
          "ipucu": "Satır içi sunucuların yüklenmeden önce hangi onaya bağlı olduğunu düşün.",
          "aciklama": "Ajan dosyasındaki satır içi sunucu, klasöre güven onayı verilmeden yüklenmez. Onay yoksa Claude Code o dosyadaki satır içi sunucuları atlar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code, projenin .claude/agents/ klasöründeki bir ajan dosyasından satır içi MCP sunucusunu ancak dosyanın geldiği klasöre güvendikten sonra yükler."
          }
        },
        {
          "id": "b08-d6-s7",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bir sunucu bağlanmıyor. Belgeye göre ilk adımın hangisi olmalı?",
          "secenekler": [
            "Sunucuyu silip yeniden eklemek",
            "Durumuna /mcp ile bakmak",
            "Claude Code'u yeniden kurmak"
          ],
          "dogru": 1,
          "ipucu": "Bir şeyi değiştirmeden önce neyi görmen gerektiğini düşün.",
          "aciklama": "Belge önce oturum içinde /mcp ya da terminalde claude mcp list ile durumu görmeyi, sonra belirtiyi eşleştirmeyi söyler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp-quickstart",
            "kopya": "mcp-quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir sunucu bağlanmazsa önce oturum içinde /mcp ya da kabuktan claude mcp list ile durumuna bak, sonra belirtiyi aşağıdakilerle eşleştir."
          }
        }
      ]
    }
  ]
});
