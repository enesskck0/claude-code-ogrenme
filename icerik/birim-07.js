// icerik/birim-07.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b07",
  "sira": 7,
  "baslik": "Alt ajan (subagent)",
  "amac": "Alt ajanın ne olduğunu, ne zaman kullanıldığını anlatabilmek ve bizim klasördeki ajan dosyalarını okuyup ne yaptıklarını söyleyebilmek.",
  "dersler": [
    {
      "id": "b07-d1",
      "baslik": "Alt ajan nedir",
      "hedefler": [
        "Alt ajanın ayrı bir bağlam penceresinde çalışıp ana oturuma yalnız özet döndürdüğünü anlatabilir.",
        "Alt ajanın ana oturumun bağlamını temiz tutma faydasını ve bedelini anlatabilir."
      ],
      "anlatim": [
        "Alt ajan (subagent), Claude Code'un iş devrettiği yardımcıdır. Kendi bağlam penceresinde (context window) dosya okur, arar ve bitince ana oturuma yalnız özet döner.",
        "Okuduğu dosyalar ve yaptığı aramalar ajanın kendi penceresinde kalır; ana oturumun bağlamına yazılmaz.",
        "Bağlam penceresi sınırlıdır; her okuma ve arama sonucu orada birikir. Dolunca Claude konuşmanın eski kısımlarını kaçırmaya başlar.",
        "Alt ajanın bir bedeli var: ana oturum yalnız özeti görür, ajanın sonuca nasıl vardığını görmez.",
        "Ajanın başlangıç bağlamında iki şey vardır: ajan dosyasındaki sistem talimatı (system prompt) ve ana oturumun senin isteğinden yazdığı görev metni.",
        "CLAUDE.md'de yazar: bizim ajanlar .claude/agents/ altındadır, CLAUDE.md'yi yüklemez; ortak kuralları ajan-kimligi skill'indedir."
      ],
      "terimler": [
        {"tr": "alt ajan", "en": "subagent", "aciklama": "Ana oturumun iş devrettiği, kendi bağlamında çalışıp özet döndüren yardımcı."},
        {"tr": "bağlam penceresi", "en": "context window", "aciklama": "Konuşmadaki her mesajın, okumanın ve arama sonucunun biriktiği sınırlı alan."},
        {"tr": "sistem talimatı", "en": "system prompt", "aciklama": "Ajan dosyasındaki, ajanın rolünü ve davranışını tanımlayan metin."}
      ],
      "sorular": [
        {
          "id": "b07-d1-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bir alt ajan işini bitirince ana oturuma ne döner?",
          "secenekler": ["Okuduğu bütün dosyaların tam metni", "Yalnız işin özeti", "Bütün arama sonuçları ve araç çağrıları", "Ana oturumun bağlamının bir kopyası"],
          "dogru": 1,
          "ipucu": "Ajanın ana oturumu neden temiz tuttuğunu düşün.",
          "aciklama": "Ajan ara işi kendi penceresinde yapar; ana oturuma yalnız özet gelir. Bu yüzden ana bağlam dolmaz.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/what-are-subagents",
            "kopya": "ders-subagents-01-what-are-subagents.md",
            "okuma": "2026-11-15",
            "dayanak": "Her alt ajan kendi bağlam penceresinde çalışır, işini yapar ve ana konuşmaya bir özet döndürür."
          }
        },
        {
          "id": "b07-d1-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Alt ajanın okuduğu dosyalar ve yaptığı aramalar nerede kalır?",
          "secenekler": ["Ana oturumun bağlamında, özetin yanında", "Ajanın kendi bağlam penceresinde", "Önce ajanda, bitince ana oturuma kopyalanır"],
          "dogru": 1,
          "ipucu": "Ana oturuma neyin döndüğünü düşün.",
          "aciklama": "Dosya okumaları, aramalar ve araç çağrıları ajanın kendi bağlamında kalır, ana konuşmayı doldurmaz.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/what-are-subagents",
            "kopya": "ders-subagents-01-what-are-subagents.md",
            "okuma": "2026-11-15",
            "dayanak": "Ara adımlar, yani dosya okumaları, aramalar ve araç çağrıları ayrı kalır ve ana konuşmayı hiç doldurmaz."
          }
        },
        {
          "id": "b07-d1-s3",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Alt ajanın bedeli şu: ana oturum, ajanın sonuca ___ görmez.",
          "secenekler": ["nasıl vardığını", "hangi görevle başladığını", "ne zaman bitirdiğini"],
          "dogru": 0,
          "ipucu": "Ana oturuma yalnız özet geldiğini hatırla.",
          "aciklama": "Ana oturum görevi kendisi yazar ve özeti alır; arada ajanın izlediği yolu görmez.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/what-are-subagents",
            "kopya": "ders-subagents-01-what-are-subagents.md",
            "okuma": "2026-11-15",
            "dayanak": "Bunun bedeli, ana konuşmanın alt ajanın sonuca nasıl vardığını görmemesidir."
          }
        },
        {
          "id": "b07-d1-s4",
          "tur": "coktan",
          "kart": 2,
          "soru": "Uzun bir sohbettesin. Bir kuralın geçtiği yeri bulmak için 15 dosya okumak gerekiyor, sana tek cevap lazım. En uygun yol hangisi?",
          "secenekler": ["Ana oturum 15 dosyayı kendisi okusun", "Dosyaları sohbete tek tek yapıştır", "Bir alt ajan arasın, ana oturuma yalnız cevabı getirsin"],
          "dogru": 2,
          "ipucu": "Hangi yolda 15 dosyanın içeriği senin bağlamına girmez?",
          "aciklama": "Alt ajan dosyaları kendi bağlamında okur; ana bağlam yalnız soruyu ve özeti kaydeder.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/what-are-subagents",
            "kopya": "ders-subagents-01-what-are-subagents.md",
            "okuma": "2026-11-15",
            "dayanak": "Ana bağlam penceresi yalnız soruyu ve özeti kaydeder, yol boyunca okunan 15 dosyayı değil."
          }
        },
        {
          "id": "b07-d1-s5",
          "tur": "eslestir",
          "kart": 4,
          "soru": "Her parçayı alt ajanın işindeki yeriyle eşleştir.",
          "ciftler": [
            ["Ajanın sistem talimatı", "Ajan dosyasından gelir"],
            ["Ajanın görev metni", "Ana oturum senin isteğinden yazar"],
            ["Ajanın okumaları ve aramaları", "Ajanın kendi penceresinde kalır"],
            ["Ajanın vardığı sonuç", "Özet olarak ana oturuma döner"]
          ],
          "ipucu": "Ajanın neyle başladığını, işi nerede yaptığını ve sonunda sana neyin geldiğini düşün.",
          "aciklama": "Ajan, dosyasındaki talimat ve ana oturumun yazdığı görev metniyle başlar; okumaları kendi penceresinde kalır, ana oturuma yalnız özet döner.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/what-are-subagents",
            "kopya": "ders-subagents-01-what-are-subagents.md",
            "okuma": "2026-11-15",
            "dayanak": "Ajan, ayar dosyasındaki sistem talimatı ve ana ajanın senin isteğine göre yazdığı görev metniyle başlar; dosya okumaları ve aramalar ayrı kalır, bitince ana konuşmaya yalnız özet gelir."
          }
        },
        {
          "id": "b07-d1-s6",
          "tur": "dogru-yanlis",
          "kart": 5,
          "soru": "CLAUDE.md'ye göre bizim ajanlarımız işe başlarken CLAUDE.md'yi yükler ve kurallarını oradan alır.",
          "dogru": false,
          "ipucu": "Ajanların ortak kurallarının nereden geldiğini hatırla.",
          "aciklama": "Yanlış. Ajanlar CLAUDE.md'yi yüklemez; ortak kuralları ajan-kimligi skill'inden gelir.",
          "kaynak": {
            "adres": "CLAUDE.md:107",
            "okuma": "2026-11-17",
            "dayanak": "Ajanlar .claude/agents/ altındadır, bu dosyayı yüklemezler, ortak kuralları ajan-kimligi skill'indedir.",
            "soz": "bu dosyayı yüklemezler, ortak kuralları `ajan-kimligi` skill'inde"
          }
        },
        {
          "id": "b07-d1-s7",
          "tur": "sirala",
          "kart": 4,
          "soru": "Bir alt ajanın işini baştan sona sırala.",
          "adimlar": [
            "Ana oturum senin isteğinden bir görev metni yazar",
            "Ajan kendi talimatı ve görev metniyle, kendi bağlamında başlar",
            "Ajan dosya okur, arar, işini yapar",
            "Ana oturuma yalnız özet döner"
          ],
          "ipucu": "Ajanın başlangıç bağlamında ne olduğunu düşün, oradan başla.",
          "aciklama": "Görev metni ana oturumdan gelir, ajan işi kendi bağlamında yapar ve sonunda yalnız özet döner.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/what-are-subagents",
            "kopya": "ders-subagents-01-what-are-subagents.md",
            "okuma": "2026-11-15",
            "dayanak": "Alt ajanın başlangıç bağlamında ayar dosyasındaki talimat ve ana ajanın isteğine göre yazdığı görev metni vardır; ajan sonra kendi başına çalışır ve bitince ana konuşmaya yalnız özet gelir."
          }
        }
      ]
    },
    {
      "id": "b07-d2",
      "baslik": "Yerleşik ajanlar",
      "hedefler": [
        "Explore, Plan ve genel amaçlı (general-purpose) yerleşik ajanları işlerine göre ayırt edebilir.",
        "Explore ve Plan'ın CLAUDE.md dosyalarını yüklemeden başladığını anlatabilir."
      ],
      "anlatim": [
        "Claude Code'la hazır gelen alt ajanlara yerleşik ajan (built-in subagent) denir. Explore bunlardan biridir: hızlı arama ve kod keşfi yapar, yalnız okur.",
        "Plan adlı yerleşik ajan da yalnız okur: plan modunda (plan mode) Claude, plan sunmadan önce araştırmayı ona verir.",
        "Genel amaçlı (general-purpose) ajan ise hem keşif hem değişiklik isteyen çok adımlı işleri yapar.",
        "Explore ve Plan, araştırma hızlı ve ucuz olsun diye CLAUDE.md dosyaları ve git durum özeti olmadan başlar.",
        "Öteki yerleşik ajanlar ve senin yazdığın ajanlar CLAUDE.md'yi ve git durum özetini yükler. Ajan dosyasına omitClaudeMd yazılırsa ajan CLAUDE.md'siz başlar.",
        "Bizde benzer işi scout yapar; ajan dosyasında 'Yalnız okur, hiçbir dosyayı değiştirmez' ve 'omitClaudeMd: true' yazar. Ama yerleşik değildir, bizim yazdığımız bir dosyadır."
      ],
      "terimler": [
        {"tr": "yerleşik ajan", "en": "built-in subagent", "aciklama": "Claude Code ile hazır gelen, uygun işte Claude'un kendiliğinden kullandığı alt ajan."},
        {"tr": "genel amaçlı ajan", "en": "general-purpose", "aciklama": "Hem keşif hem değişiklik gereken çok adımlı işler için, alt ajanlara açık bütün araçlarla çalışan yerleşik ajan."},
        {"tr": "plan modu", "en": "plan mode", "aciklama": "Ana konuşmanın salt okunur kaldığı, Claude'un önce araştırıp plan sunduğu mod."}
      ],
      "sorular": [
        {
          "id": "b07-d2-s1",
          "tur": "eslestir",
          "kart": 2,
          "soru": "Her yerleşik ajanı işiyle eşleştir.",
          "ciftler": [
            ["Explore", "Hızlı arama ve kod keşfi; yalnız okur"],
            ["Plan", "Plan modunda, plan sunmadan önce araştırır"],
            ["Genel amaçlı", "Keşif ve değişiklik isteyen çok adımlı iş"]
          ],
          "ipucu": "Hangisinin değişiklik yapabildiğini düşün.",
          "aciklama": "Explore ve Plan salt okunurdur, Plan, plan modunda çalışır; genel amaçlı ajan hem keşfeder hem değiştirir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Explore kod tabanında arama için hızlı, salt okunur ajandır; Plan, plan modunda plan sunmadan önce bağlam toplar; genel amaçlı ajan hem keşif hem eylem gerektiren karmaşık, çok adımlı işler içindir."
          }
        },
        {
          "id": "b07-d2-s2",
          "tur": "coktan",
          "kart": 4,
          "soru": "Senin yazdığın bir ajanın CLAUDE.md'siz başlaması için ne gerekir?",
          "secenekler": ["Ayar gerekmez, zaten CLAUDE.md'siz başlar", "Ajan dosyasına omitClaudeMd yazmak", "Ajana yalnız okuma araçları vermek"],
          "dogru": 1,
          "ipucu": "Hangi alanın bu davranışı açtığını hatırla.",
          "aciklama": "Kendi ajanların CLAUDE.md'yi yükler; yüklemesin istiyorsan ajan dosyasına omitClaudeMd yazılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Explore ve Plan CLAUDE.md dosyaları ve git durum özeti olmadan başlar; öteki yerleşik ajanlar ve özel ajanlar, omitClaudeMd ayarlanmadıkça ikisini de yükler."
          }
        },
        {
          "id": "b07-d2-s3",
          "tur": "coktan",
          "kart": 3,
          "soru": "Explore ve Plan neden CLAUDE.md ve git durum özeti olmadan başlar?",
          "secenekler": ["Bu dosyaları okuma izinleri olmadığı için", "Araştırma hızlı ve ucuz olsun diye", "CLAUDE.md yalnız terminalde okunduğu için", "Senin kurallarını değiştirmesinler diye"],
          "dogru": 1,
          "ipucu": "Bu iki ajanın asıl işinin araştırma olduğunu düşün.",
          "aciklama": "Belge nedeni açıkça söyler: araştırma hızlı ve ucuz kalsın diye bu iki ajan daha az şeyle başlar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Explore ve Plan, araştırmayı hızlı ve ucuz tutmak için CLAUDE.md dosyaları ve git durum özeti olmadan başlar."
          }
        },
        {
          "id": "b07-d2-s4",
          "tur": "coktan",
          "kart": 1,
          "soru": "Plan modundasın ve Claude, plan sunmadan önce kodu anlamak için araştırma yapacak. Bu araştırmayı hangi yerleşik ajana verir?",
          "secenekler": ["Genel amaçlı ajan", "Explore", "Plan"],
          "dogru": 2,
          "ipucu": "Kartlarda hangi yerleşik ajanın bu moda bağlı anlatıldığını hatırla.",
          "aciklama": "Plan modunda Claude araştırmayı Plan ajanına verir; keşif çıktısı ayrı bağlamda kalır, ana konuşma salt okunur kalır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Plan modunda Claude kod tabanını anlaması gerekince araştırmayı Plan ajanına devreder."
          }
        },
        {
          "id": "b07-d2-s5",
          "tur": "coktan",
          "kart": 0,
          "soru": "Yerleşik Explore ajanına hangi iş verilemez?",
          "secenekler": ["Bir dosyaya yeni satır yazmak", "Klasörde bir sözcüğün geçtiği yerleri aramak", "Bir dosyayı açıp baştan sona okumak"],
          "dogru": 0,
          "ipucu": "Explore'un dosyalarla neler yapabildiğini düşün.",
          "aciklama": "Explore salt okunurdur; Write ve Edit araçları ona kapalıdır, bu yüzden dosyaya yazamaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Explore'un araçları salt okunurdur; Write ve Edit reddedilir."
          }
        },
        {
          "id": "b07-d2-s6",
          "tur": "dogru-yanlis",
          "kart": 5,
          "soru": "scout.md'de 'omitClaudeMd: true' yazıyor. Bu satır sayesinde scout da Explore gibi CLAUDE.md dosyalarını yüklemeden başlar.",
          "dogru": true,
          "ipucu": "Özel bir ajanın CLAUDE.md'siz başlaması için ne gerektiğini hatırla.",
          "aciklama": "Doğru. Özel ajanlar normalde CLAUDE.md yükler; omitClaudeMd ayarı onları CLAUDE.md'siz başlatır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Özel bir ajanın tanımında omitClaudeMd ayarlanırsa ajan kullanıcı, proje ve yerel CLAUDE.md dosyaları olmadan başlar."
          }
        }
      ]
    },
    {
      "id": "b07-d3",
      "baslik": "Ajan dosyasının ön bilgisi",
      "hedefler": [
        "Ajan dosyasının ön bilgisindeki (frontmatter) ad (name), açıklama (description), araçlar (tools), model seçimi (model), çaba düzeyi (effort), tur tavanı (maxTurns), skill listesi (skills) ve CLAUDE.md'siz başlatma (omitClaudeMd) alanlarının ne yaptığını anlatabilir.",
        "Bir ajanın yapamayacağı işi tools satırından ayırt edebilir."
      ],
      "anlatim": [
        "Ajan dosyasının en üstündeki ön bilgide (frontmatter) yalnız name ve description zorunludur. Claude işi hangi ajana vereceğine description'a bakarak karar verir.",
        "tools alanı ajanın kullanabileceği araçları sayar. Bu alan yazılmazsa ajan, alt ajanlara açık bütün araçları alır.",
        "Ajanın modelini model, çaba düzeyini effort, en çok kaç tur döneceğini maxTurns belirler. skills ise adı yazılan skill'in tamamını ajanın bağlamına baştan yükler.",
        "omitClaudeMd: true yazılırsa ajan CLAUDE.md'siz başlar. Adı yanlış yazılan alanı (ör. maxTurns yerine maxturns) Claude Code hata vermeden yok sayar.",
        "Bizden örnek: scout.md'de 'tools: Read, Grep, Glob' satırı var. Bunlar okuma ve arama araçlarıdır; düzenleme ve komut aracı yoktur, yani scout dosya değiştiremez."
      ],
      "terimler": [
        {"tr": "ön bilgi", "en": "frontmatter", "aciklama": "Dosyanın en üstünde iki '---' satırı arasındaki ayar alanları."},
        {"tr": "tur tavanı", "en": "maxTurns", "aciklama": "Alt ajanın durmadan önce dönebileceği en çok tur sayısı."}
      ],
      "sorular": [
        {
          "id": "b07-d3-s1",
          "tur": "eslestir",
          "kart": 2,
          "soru": "Her alanı ne yaptığıyla eşleştir.",
          "ciftler": [
            ["description", "Claude'un işi bu ajana ne zaman vereceği"],
            ["tools", "Ajanın kullanabileceği araçlar"],
            ["maxTurns", "Ajan durmadan önce en çok kaç tur döner"],
            ["skills", "Ajanın bağlamına baştan yüklenen skill'ler"]
          ],
          "ipucu": "Alan adlarının İngilizce anlamından yola çık.",
          "aciklama": "Bu dört alan ajanın ne zaman, hangi araçla, ne kadar süre ve hangi bilgiyle çalışacağını belirler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Ön bilgi tablosunda description ajana ne zaman iş verileceğini, tools kullanabileceği araçları, maxTurns durmadan önceki en çok tur sayısını, skills başlangıçta bağlama yüklenecek skill'leri söyler."
          }
        },
        {
          "id": "b07-d3-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Ajan dosyasına tools satırı yazılmazsa ne olur?",
          "secenekler": ["Ajan hiçbir araç kullanamaz", "Ajan, alt ajanlara açık bütün araçları alır", "Ajan yalnız okuma araçlarını alır"],
          "dogru": 1,
          "ipucu": "Alan yazılmayınca ajanın neyi devraldığını düşün.",
          "aciklama": "tools yazılmazsa ajan, alt ajanlara açık bütün araçları devralır; kısıtlamak için satırı yazmak gerekir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "tools yazılmazsa ajan alt ajanlara açık bütün araçları devralır."
          }
        },
        {
          "id": "b07-d3-s3",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Ajan dosyasında zorunlu olan yalnız iki alan var: name ve ___.",
          "secenekler": ["model", "description", "tools", "omitClaudeMd"],
          "dogru": 1,
          "ipucu": "Claude'un ajanı ne zaman çağıracağını hangi alandan anladığını düşün.",
          "aciklama": "Yalnız name ve description zorunludur; öteki alanlar isteğe bağlıdır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Ön bilgide yalnız name ve description zorunludur."
          }
        },
        {
          "id": "b07-d3-s4",
          "tur": "coktan",
          "kart": 4,
          "soru": "scout.md'de 'tools: Read, Grep, Glob' satırı var. Scout'a hangi iş verilemez?",
          "secenekler": ["Bir kuralın geçtiği dosyaları bulmak", "Bir dosyayı okuyup özetlemek", "Bir log dosyasında hata satırı aramak", "Dosyadaki yazım hatasını düzeltmek"],
          "dogru": 3,
          "ipucu": "Listede düzenleme yapan bir araç var mı?",
          "aciklama": "Glob, Grep ve Read okuma araçlarıdır; Edit ya da Write olmadan ajan dosya değiştiremez.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/designing-effective-subagents",
            "kopya": "ders-subagents-03-designing.md",
            "okuma": "2026-11-15",
            "dayanak": "Araştırma yapan salt okunur ajana yalnız Glob, Grep ve Read yeter; bu ajan dosyaları yanlışlıkla değiştiremez."
          }
        },
        {
          "id": "b07-d3-s5",
          "tur": "coktan",
          "kart": 4,
          "soru": "Web'den bir sayfa okunacak. arastirmaci.md'nin tools satırında WebSearch ve WebFetch var, scout.md'ninkinde yok. İş hangi ajana gider?",
          "secenekler": ["arastirmaci", "scout", "Fark etmez"],
          "dogru": 0,
          "ipucu": "Web'e çıkan araçlar hangi tools satırında?",
          "aciklama": "Web araçları yalnız arastirmaci'da var; ajan dosyası da web okuması gereken her araştırmanın ona verildiğini söyler.",
          "kaynak": {
            "adres": ".claude/agents/arastirmaci.md:3",
            "okuma": "2026-11-17",
            "dayanak": "arastirmaci web araştırma ajanıdır; web okuması gereken her araştırma ona verilir.",
            "soz": "web okuması gereken her araştırma buna verilir"
          }
        },
        {
          "id": "b07-d3-s6",
          "tur": "dogru-yanlis",
          "kart": 2,
          "soru": "scout.md'deki 'skills: - ajan-kimligi' satırı yüzünden bu skill'in yalnız açıklaması değil tamamı scout'un bağlamına baştan yüklenir.",
          "dogru": true,
          "ipucu": "Ana konuşmadaki skill'lerle alt ajandakileri karşılaştır.",
          "aciklama": "Doğru. skills alanı skill'in tam içeriğini ajanın bağlamına başlangıçta koyar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "skills alanındaki skill'lerin yalnız açıklaması değil tam içeriği başlangıçta alt ajanın bağlamına konur."
          }
        },
        {
          "id": "b07-d3-s7",
          "tur": "coktan",
          "kart": 3,
          "soru": "Ajan dosyasında bir alanın adını yanlış yazarsan (ör. omitClaudeMd yerine omitclaudemd) ne olur?",
          "secenekler": ["Ajan hiç açılmaz, ekranda hata verir", "Alan hata vermeden yok sayılır", "Claude Code adı kendisi düzeltip kullanır"],
          "dogru": 1,
          "ipucu": "Claude Code'un tanımadığı bir alan adıyla karşılaşınca ne yaptığını düşün.",
          "aciklama": "Alan adı birebir doğru yazılmalı; Claude Code tanımadığı alanı hata vermeden yok sayar, bu yüzden yanlışlık fark edilmeyebilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Çok sözcüklü alan adları camelCase yazılır ve tabloyla birebir aynı olmalıdır; Claude Code tanımadığı alanı hata bildirmeden yok sayar."
          }
        }
      ]
    },
    {
      "id": "b07-d4",
      "baslik": "Ne zaman ajan, ne zaman ana oturum",
      "hedefler": [
        "Çok dosya okuyan, sonucu özetle dönebilen yan işin ajana gittiğini anlatabilir.",
        "Ana oturumda kalması gereken işleri ayırt edebilir.",
        "Bizde varsayılanın ana oturum olduğunu ve ajanın hangi üç durumda çağrıldığını anlatabilir."
      ],
      "anlatim": [
        "Tek soru sor: ara iş önemli mi? Yalnız sonuç lazımsa işi alt ajana ver; her adımı görmen gerekiyorsa ana oturumda (main conversation) tut.",
        "Çok dosya okuyan, özetle dönebilen yan iş (side task) ajana yakışır. Sık düzeltme, küçük değişiklik ve aynı bağlamdaki plan, uygulama, test ana oturumda kalır.",
        "Kaçınılacak kullanımlar da var. Ajana 'Sen bir uzmansın' diye rol vermek bir şey katmaz; Claude bu bilgiye zaten sahiptir.",
        "Birbirine bağlı adımları ajan zincirine bölme; iş el değiştirirken bilgi kaybolur. Test koşan ajan da hata ayıklamak için gereken çıktıyı gizler.",
        "CLAUDE.md'deki kural şu: işi varsayılan olarak ana oturum yapar; ajan yalnız ajan-gorevi bölüm 1'deki durumlarda çağrılır.",
        "Ajan yalnız üç durumda çağrılır: okunacak malzeme beynin, yani ana oturumun bağlamını dolduracaksa; bağımsız işler aynı anda yürüyecekse; işe ayrı göz gerekiyorsa."
      ],
      "terimler": [
        {"tr": "ana oturum", "en": "main conversation", "aciklama": "Seninle konuştuğun asıl sohbet; bizde beyin diye anılır."},
        {"tr": "yan iş", "en": "side task", "aciklama": "Asıl işe yardım eden, sonucu özetle dönebilen ayrı iş; ör. arama ya da keşif."}
      ],
      "sorular": [
        {
          "id": "b07-d4-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Alt ajan mı ana oturum mu diye karar verirken sorulacak tek soru hangisi?",
          "secenekler": ["İş kaç dakika sürecek?", "Ajan dosyası hazır mı?", "Ara iş önemli mi?"],
          "dogru": 2,
          "ipucu": "Ajanın ana oturumdan neyi sakladığını düşün.",
          "aciklama": "Ara iş önemsizse ve yalnız sonuç lazımsa ajan; ara işi görüp tepki vermen gerekiyorsa ana oturum.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/using-subagents-effectively",
            "kopya": "ders-subagents-04-using-effectively.md",
            "okuma": "2026-11-15",
            "dayanak": "Karar verirken tek soru sorulur: ara iş önemli mi; hayırsa iş alt ajana verilir, evetse ana oturumda kalır."
          }
        },
        {
          "id": "b07-d4-s2",
          "tur": "dogru-yanlis",
          "kart": 3,
          "soru": "Her adımı bir öncekinin bulduğuna bağlı olan bir hata düzeltme işi, sırayla çalışan üç ajana bölününce iyi sonuç verir.",
          "dogru": false,
          "ipucu": "Ajanlar arasında iş el değiştirirken ne olabileceğini düşün.",
          "aciklama": "Yanlış. Adımlar birbirinin bulduğuna bağlıysa ajan zinciri bozulur; devirde bilgi kaybolur.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/using-subagents-effectively",
            "kopya": "ders-subagents-04-using-effectively.md",
            "okuma": "2026-11-15",
            "dayanak": "Sıralı ajan zincirleri her adım bir öncekinin bulduğuna bağlıysa başarısız olur; hata düzeltme neredeyse hep böyledir ve devirde bilgi kaybolur."
          }
        },
        {
          "id": "b07-d4-s3",
          "tur": "eslestir",
          "kart": 3,
          "soru": "Kaçınılacak her ajan kullanımını sorunuyla eşleştir.",
          "ciftler": [
            ["'Sen bir Python uzmanısın' diyen ajan", "Claude bu bilgiye zaten sahip, katkısı yok"],
            ["Birbirine bağlı adımlarda ajan zinciri", "El değiştirirken bilgi kaybolur"],
            ["Test koşan ajan", "Hata ayıklamak için gereken çıktıyı gizler"]
          ],
          "ipucu": "Her birinde ana oturumun neyi kaybettiğini düşün.",
          "aciklama": "Ajan ancak ana oturumun yapamadığı bir şey yapıyorsa değer katar; bu üç kullanımda katmaz ya da bilgi kaybettirir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/using-subagents-effectively",
            "kopya": "ders-subagents-04-using-effectively.md",
            "okuma": "2026-11-15",
            "dayanak": "Uzmanlık iddia eden ajanlar bir şey katmaz, sıralı zincirlerde devirde bilgi kaybolur, test koşan ajanlar hata ayıklamak için gereken bilgiyi gizler."
          }
        },
        {
          "id": "b07-d4-s4",
          "tur": "coktan",
          "kart": 1,
          "soru": "Hangi iş alt ajana en uygun?",
          "secenekler": ["Seninle konuşarak bir planı adım adım düzeltmek", "Bir dosyada tek bir sözcüğü değiştirmek", "Planlama, uygulama ve testi aynı bağlamda yürütmek", "Onlarca dosyada bir kuralın yerini bulmak"],
          "dogru": 3,
          "ipucu": "Hangisinin ara çıktısını bir daha görmen gerekmez?",
          "aciklama": "Tarama çok çıktı üretir ama sana yalnız sonuç lazım; ötekiler sık gidip gelme, ortak bağlam ya da hızlı değişiklik ister.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Görev ana bağlamda gerekmeyen uzun çıktı üretiyorsa ve iş kendi içinde bitip özet dönebiliyorsa alt ajan kullanılır."
          }
        },
        {
          "id": "b07-d4-s5",
          "tur": "coktan",
          "kart": 5,
          "soru": "ajan-gorevi bölüm 1'e göre bizde hangisi ajan çağırma nedenlerinden biri?",
          "secenekler": ["Okunacak malzeme beynin bağlamını dolduracaksa", "İş küçük ve hızlı bitecekse", "Plan, uygulama ve test aynı bağlamdaysa"],
          "dogru": 0,
          "ipucu": "Ajanın asıl faydasının bağlamla ilgili olduğunu hatırla.",
          "aciklama": "Bölüm 1 üç durum sayar: bağlamı dolduracak okuma, aynı anda yürüyecek bağımsız işler ve ayrı göz gereken iş.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md:12",
            "okuma": "2026-11-17",
            "dayanak": "Ajan yalnız üç durumda çağrılır: okunacak malzeme beynin bağlamını dolduracaksa, bağımsız işler aynı anda yürüyecekse, işe ayrı göz gerekiyorsa.",
            "soz": "Ajan yalnız üç durumda çağrılır: okunacak malzeme beynin bağlamını dolduracaksa"
          }
        },
        {
          "id": "b07-d4-s6",
          "tur": "bosluk",
          "kart": 4,
          "soru": "CLAUDE.md'ye göre bizde bir işi varsayılan olarak ___ yapar.",
          "secenekler": ["bir alt ajan", "ana oturum", "scout ajanı"],
          "dogru": 1,
          "ipucu": "Ajanın bizde istisna mı kural mı olduğunu düşün.",
          "aciklama": "Ajan istisnadır; yalnız ajan-gorevi bölüm 1'deki durumlarda çağrılır.",
          "kaynak": {
            "adres": "CLAUDE.md:109",
            "okuma": "2026-11-17",
            "dayanak": "Ajana verme eşiği: işi varsayılan olarak ana oturum yapar; ajan yalnız ajan-gorevi bölüm 1'deki durumlarda çağrılır.",
            "soz": "işi varsayılan olarak ana oturum yapar"
          }
        },
        {
          "id": "b07-d4-s7",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude'a yazılacak üç tariften hangisi alt ajanı en iyi kullanır?",
          "secenekler": ["Sen bir kural uzmanı alt ajansın; klasördeki bütün kuralları incele ve bana anlat", "Alt ajan 'Kaldı sırası' geçen yerleri bulsun, bana yalnız dosya:satır dönsün", "Alt ajan klasörü tarasın, okuduğu her dosyanın tam metnini bana getirsin"],
          "dogru": 1,
          "ipucu": "Hangi tarif sana yolculuğu değil sonucu getirir?",
          "aciklama": "İyi tarif sonucu ister; uzman rolü bir şey katmaz, tam metin istemek de ajanın faydasını yok eder.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/using-subagents-effectively",
            "kopya": "ders-subagents-04-using-effectively.md",
            "okuma": "2026-11-15",
            "dayanak": "Alt ajan, nasıl bulunduğunun dökümü değil sonuç gerektiğinde iyi çalışır; 'sen bir uzmansın' diyen ajanlar ise bir şey katmaz."
          }
        }
      ]
    },
    {
      "id": "b07-d5",
      "baslik": "İyi ajan tasarımı",
      "hedefler": [
        "İyi ajanın dört ilkesini (net açıklama, yapılandırılmış çıktı, engel bildirimi, sınırlı araç) anlatabilir.",
        "Bizdeki cevap boyu kancasının hangi ajan cevabını geri çevirdiğini anlatabilir."
      ],
      "anlatim": [
        "İyi ajanın dört ilkesinden ilki net açıklamadır (description): ajanın ne zaman çağrılacağını ve ona yazılacak görevi şekillendirir.",
        "İkinci ilke çıktı biçimidir (output format) ve en önemli iyileştirmedir. Ajan her başlığı doldurunca işinin bittiğini anlar, gereğinden uzun çalışmaz.",
        "Üçüncü ilke engel bildirimidir (reporting obstacles). Çıktıya bir engeller bölümü eklersen ajanın yolda bulduğu çözümler ana oturuma ulaşır.",
        "Bizde ajan-kimligi skill'i, engel varsa ajanın cevabının ilk satırına 'engel:' ve nedenini yazıp durmasını ister.",
        "Dördüncü ilke sınırlı araçtır: ajana yalnız işinin gerektirdiği araç verilir. Bu, istenmeyen yan etkiyi önler ve rolü netleştirir.",
        "Bizde bir kanca (hook) cevap boyunu tutar: ajan_cevap_boyu.py. Dosyası .claude/agents/ altında olan ajanın cevabı 3.072 baytı geçerse kanca onu bir kez geri çevirir.",
        "Dosyası olmayan ajanlar, yani genel amaçlı ajan, Explore ve Claude Code'un iç ajanları bu kancaya takılmaz."
      ],
      "terimler": [
        {"tr": "çıktı biçimi", "en": "output format", "aciklama": "Ajanın cevabında doldurması gereken başlıklar; ajan hepsini doldurunca işinin bittiğini anlar."},
        {"tr": "engel bildirimi", "en": "reporting obstacles", "aciklama": "Ajanın yolda karşılaştığı sorunları ve bulduğu çözümleri cevabında yazması."},
        {"tr": "kanca", "en": "hook", "aciklama": "Belli bir olayda kendiliğinden çalışan betik; ajan_cevap_boyu.py alt ajan dururken (SubagentStop) çalışır."}
      ],
      "sorular": [
        {
          "id": "b07-d5-s1",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bir ajana yapılabilecek en önemli tek iyileştirme hangisi?",
          "secenekler": ["Ona 'sen bir uzmansın' diye rol vermek", "Talimatında çıktı biçimi tanımlamak", "Daha büyük bir model seçmek"],
          "dogru": 1,
          "ipucu": "Ajanın işinin bittiğini neden anladığını düşün.",
          "aciklama": "Çıktı biçimi ajana doğal bir durma noktası verir ve gereğinden uzun çalışmasını önler.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/designing-effective-subagents",
            "kopya": "ders-subagents-03-designing.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir ajana yapılabilecek en önemli tek iyileştirme, talimatında çıktı biçimi tanımlamaktır."
          }
        },
        {
          "id": "b07-d5-s2",
          "tur": "coktan",
          "kart": 0,
          "soru": "Ajanın açıklaması (description) neyi şekillendirir?",
          "secenekler": ["Yalnız ajanın ne zaman çağrılacağını", "Ne zaman çağrılacağını ve ona yazılacak görevi", "Yalnız ajana hangi araçların verileceğini"],
          "dogru": 1,
          "ipucu": "Ana oturum görev metnini yazarken neye bakar?",
          "aciklama": "Ana oturum görev metnini açıklamaya bakarak yazar; açıklama ajana ne söyleneceğini de şekillendirir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/designing-effective-subagents",
            "kopya": "ders-subagents-03-designing.md",
            "okuma": "2026-11-15",
            "dayanak": "Ana ajan alt ajanı başlatırken görev metnini açıklamaya bakarak yazar; açıklama yalnız ne zaman çalışacağını değil ajana ne söyleneceğini de belirler."
          }
        },
        {
          "id": "b07-d5-s3",
          "tur": "eslestir",
          "kart": 4,
          "soru": "Her ajan türünü vermen gereken araçlarla eşleştir.",
          "ciftler": [
            ["Araştırma yapan salt okunur ajan", "Glob, Grep, Read"],
            ["Kod gözden geçiren ajan", "Bash var, Edit ve Write yok"],
            ["Kodu değiştiren ajan", "Edit ve Write verilir"]
          ],
          "ipucu": "Her ajanın işi için en az neye ihtiyaç duyduğunu düşün.",
          "aciklama": "Ajana yalnız işinin gerektirdiği araç verilir; bu istenmeyen yan etkiyi önler ve rolü netleştirir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/designing-effective-subagents",
            "kopya": "ders-subagents-03-designing.md",
            "okuma": "2026-11-15",
            "dayanak": "Araştırma ajanına yalnız Glob, Grep ve Read, gözden geçirene git diff için Bash ama Edit ve Write değil, kod değiştiren ajana Edit ve Write verilir."
          }
        },
        {
          "id": "b07-d5-s4",
          "tur": "coktan",
          "kart": 5,
          "soru": "ajan_cevap_boyu.py hangi durumda bir ajanın cevabını geri çevirir?",
          "secenekler": ["Dosyası .claude/agents/ altında olan ajanın cevabı 1.000 sözcüğü geçerse", "Explore dahil her ajanın cevabı 3.072 baytı geçerse", "Dosyası .claude/agents/ altında olan ajanın cevabı 3.072 baytı geçerse", "Ajanın cevabında İngilizce sözcük varsa"],
          "dogru": 2,
          "ipucu": "Kancanın hangi ajanlara baktığını ve cevabı neyle ölçtüğünü birlikte düşün.",
          "aciklama": "Kanca yalnız dosyası olan ajanlara bakar ve tavanı bayt olarak ölçer; tavan 3.072 bayttır.",
          "kaynak": {
            "adres": ".claude/hooks/ajan_cevap_boyu.py:8",
            "okuma": "2026-11-17",
            "dayanak": "Kanca, ajan .claude/agents/ altında dosyası olan bir ajansa ve son cevabının bayt sayısı 3.072'yi geçiyorsa durdurur.",
            "soz": "dosyası olan bir ajanın adı, last_assistant_message'ın UTF-8 bayt sayısı 3.072'yi geçiyor"
          }
        },
        {
          "id": "b07-d5-s5",
          "tur": "dogru-yanlis",
          "kart": 6,
          "soru": "Yerleşik Explore ajanı uzun bir cevap verirse ajan_cevap_boyu.py onu da geri çevirir.",
          "dogru": false,
          "ipucu": "Explore'un .claude/agents/ altında dosyası olup olmadığını düşün.",
          "aciklama": "Yanlış. Dosyası olmayan ajanlar, yani genel amaçlı, Explore ve Claude Code'un iç ajanları kancadan geçer.",
          "kaynak": {
            "adres": ".claude/hooks/ajan_cevap_boyu.py:10",
            "okuma": "2026-11-17",
            "dayanak": "Dosyası olmayan ajanlar (general-purpose, Explore, fork, Claude Code'un iç ajanları) geçer.",
            "soz": "dosyası olmayan ajan (general-purpose, Explore, fork, Claude Code'un iç ajanları"
          }
        },
        {
          "id": "b07-d5-s6",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bir gözden geçirme ajanının yolda bulduğu çözümler ana oturuma ulaşsın istiyorsun. Talimatına ne eklersin?",
          "secenekler": ["Çıktıya 'Karşılaşılan engeller' bölümü", "'Sen deneyimli bir gözden geçiricisin' cümlesi", "Daha yüksek bir tur tavanı (maxTurns)"],
          "dogru": 0,
          "ipucu": "Ajandan bir bilgiyi güvenilir biçimde almanın yolu, onu çıktı biçiminde istemektir.",
          "aciklama": "Engeller bölümü kurulum sorunlarını, geçici çözümleri ve özel ayar isteyen komutları özete taşır; ana oturum bunları yeniden keşfetmez.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/designing-effective-subagents",
            "kopya": "ders-subagents-03-designing.md",
            "okuma": "2026-11-15",
            "dayanak": "Bu bilgiyi almanın yolu çıktı biçiminde açıkça istemektir; şablona 'Karşılaşılan engeller' bölümü eklemek onu güvenilir biçimde ortaya çıkarır."
          }
        },
        {
          "id": "b07-d5-s7",
          "tur": "bosluk",
          "kart": 3,
          "soru": "ajan-kimligi'ne göre bizde ajan bir engelle karşılaşırsa cevabının ilk satırına ___ yazar ve durur.",
          "secenekler": ["'Kaldı:' ve nedenini", "'engel:' ve nedenini", "'uyarı:' ve nedenini"],
          "dogru": 1,
          "ipucu": "Kartta ajan-kimligi skill'inin cevabın ilk satırı için ne istediğini hatırla.",
          "aciklama": "Engel varsa ajan cevabını 'engel:' ve nedeniyle açar ve orada durur; Kaldı ise doğrulayıcının sonucudur.",
          "kaynak": {
            "adres": ".claude/skills/ajan-kimligi/SKILL.md:37",
            "okuma": "2026-11-17",
            "dayanak": "Engel varsa (dosya yok, araç çalışmıyor, görev belirsiz, önceki hal yok) ilk satıra 'engel:' ve nedeni yazılır, ajan durur.",
            "soz": "`engel: <neden>` ve dur"
          }
        }
      ]
    },
    {
      "id": "b07-d6",
      "baslik": "Doğrulayıcı: bağımsız kontrol",
      "hedefler": [
        "Taze bağlamlı bir gözden geçiricinin neden işe yaradığını anlatabilir.",
        "Bizde doğrulayıcının (verifier) yalnız riskli işte çağrıldığını ve riskli işin ne olduğunu ayırt edebilir."
      ],
      "anlatim": [
        "Kodu yazan oturum kendi değişikliğinin en iyi yargıcı değildir. Taze bağlamlı (fresh context) gözden geçirici, işin geçmişini görmediği için yazarın kendince açıklayıp geçtiği sorunları yakalar.",
        "Aynı işi ajana vermek cevabı iyileştirmez; işe yarayan, gerekçeyi görmemiş gözdür.",
        "Gözden geçiriciye ne arayacağını söyle: plana göre denetlesin, doğruluğu bozan açığı yazsın, biçimi atlasın. Sorun bulması istenen gözden geçirici her zaman bir şey bulur.",
        "Bizde bu işi doğrulayıcı (verifier) ajanı yapar: değişikliği bağımsız kontrol eder, düzeltme yapmaz; sonuç Geçti ya da Kaldı.",
        "Doğrulayıcı testleri kendisi koşar; üretenin 'geçti' demesine güvenmez. Koşamadığı maddeye 'ölçülemedi' yazar, o zaman Geçti diyemez.",
        "Doğrulayıcı yalnız riskli işte çağrılır: müşteriye giden metin, ürün kodu, birden çok dosyaya yayılan kural ya da betik değişikliği, sana giden rakamlı rapor ve öneri."
      ],
      "terimler": [
        {"tr": "doğrulayıcı", "en": "verifier", "aciklama": "Başka bir ajanın ya da beynin işini bağımsız kontrol eden, düzeltme yapmayan ve Geçti ya da Kaldı diyen ajanımız."},
        {"tr": "taze bağlam", "en": "fresh context", "aciklama": "İşin nasıl yapıldığını görmemiş, o konuşmanın geçmişi olmadan başlayan oturum ya da ajan."}
      ],
      "sorular": [
        {
          "id": "b07-d6-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Taze bağlamlı bir gözden geçirici neden işe yarar?",
          "secenekler": ["Daha büyük bir modelle çalıştığı için", "İşin nasıl yapıldığını görmediği için", "Ana oturumdan daha çok araca sahip olduğu için"],
          "dogru": 1,
          "ipucu": "Yazarın aklında olup gözden geçiricinin aklında olmayan şeyi düşün.",
          "aciklama": "Yaklaşımda payı olmayan göz, yazarın kendine açıkladığı sorunları görür; fark modelde değil bağlamdadır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/trust-it-verifying-unsupervised-runs",
            "kopya": "ders-action-08-verifying-unsupervised.md",
            "okuma": "2026-11-15",
            "dayanak": "Kodun nasıl kurulduğunu hatırlamayan ikinci gözden geçirici, yaklaşımda payı olmadığı için ilk koşunun kendine açıkladığı şeyleri yakalar."
          }
        },
        {
          "id": "b07-d6-s2",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Aynı işi ana oturum yerine bir alt ajana vermek cevabı ___.",
          "secenekler": ["her zaman iyileştirir", "kendiliğinden iyileştirmez", "yalnız uzun işlerde iyileştirir"],
          "dogru": 1,
          "ipucu": "Devretmek ile taze gözle gözden geçirmek aynı şey mi?",
          "aciklama": "Ajana devretmek cevabı iyileştirmez; işe yarayan, gerekçeyi görmemiş taze gözden geçiricidir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Aynı işi alt ajana vermek cevabı iyileştirmez; taze gözden geçirici ise gerekçeyi görmediği için yardımcı olur."
          }
        },
        {
          "id": "b07-d6-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude'a yazılacak üç gözden geçirme tarifinden hangisi daha iyi?",
          "secenekler": ["Alt ajan işi baştan sona incelesin, biçim dahil bulabildiği bütün sorunları yazsın", "İşi yazan oturum kendi değişikliğini bir kez daha gözden geçirsin", "Alt ajan işi plana göre denetlesin, doğruluğu bozan açığı yazsın, biçimi atlasın"],
          "dogru": 2,
          "ipucu": "Sorun bulması istenen gözden geçiricinin ne yapacağını düşün.",
          "aciklama": "Plana göre denetim ve 'biçimi atla' sınırı gözden geçiriciyi doğruluğa odaklar; yoksa her zaman bir şey bulur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Gözden geçirme istemi işi plana göre denetletmeli, doğruluğu etkileyen açıkları raporlatmalı ve biçimi atlatmalıdır; sorun bulması istenen gözden geçirici her zaman bir şey bulur."
          }
        },
        {
          "id": "b07-d6-s4",
          "tur": "dogru-yanlis",
          "kart": 3,
          "soru": "verifier.md'ye göre doğrulayıcı bulduğu hatayı kendisi düzeltir, sonra Geçti der.",
          "dogru": false,
          "ipucu": "Bağımsız kontrol edenin işe el sürüp sürmediğini düşün.",
          "aciklama": "Yanlış. Doğrulayıcı bağımsız kontrol eder ve düzeltme yapmaz; sonucu kanıtıyla Geçti ya da Kaldı'dır.",
          "kaynak": {
            "adres": ".claude/agents/verifier.md:3",
            "okuma": "2026-11-17",
            "dayanak": "Doğrulayıcı değişikliği ya da taslağı bağımsız kontrol eder, testleri kendisi koşar, düzeltme yapmaz; sonuç kanıtıyla Geçti ya da Kaldı.",
            "soz": "bağımsız kontrol eder, testleri kendisi koşar, düzeltme yapmaz"
          }
        },
        {
          "id": "b07-d6-s5",
          "tur": "coktan",
          "kart": 5,
          "soru": "Bizde hangi iş doğrulayıcıya gider?",
          "secenekler": ["Müşteriye gidecek bir site metni", "Bir dosyanın yerini bulmak", "Bir dosyayı okuyup açıklamak"],
          "dogru": 0,
          "ipucu": "Riskli işin tanımında kime giden metinler sayılıyor?",
          "aciklama": "Müşteriye giden metin riskli iş sayılır, bu yüzden doğrulayıcıya gider; arama ve açıklama riskli iş listesinde yok.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md:39",
            "okuma": "2026-11-17",
            "dayanak": "Riskli iş: müşteriye giden metin, ürün kodu, birden çok dosyaya yayılan kural ya da betik değişikliği; kullanıcıya giden rakamlı rapor ve öneri.",
            "soz": "Riskli iş: müşteriye giden metin, ürün kodu"
          }
        },
        {
          "id": "b07-d6-s6",
          "tur": "bosluk",
          "kart": 5,
          "soru": "CLAUDE.md'de şu satır var: 'Doğrulayıcı yalnız ___ işte.'",
          "secenekler": ["uzun süren", "riskli", "küçük"],
          "dogru": 1,
          "ipucu": "Müşteriye giden metin ile ürün kodunun ortak yanını düşün.",
          "aciklama": "Doğrulayıcı her işte çağrılmaz; yalnız ajan-gorevi bölüm 3'te tanımlanan riskli işte.",
          "kaynak": {
            "adres": "CLAUDE.md:111",
            "okuma": "2026-11-17",
            "dayanak": "Doğrulayıcı yalnız riskli işte çağrılır (ajan-gorevi bölüm 3).",
            "soz": "Doğrulayıcı yalnız riskli işte"
          }
        },
        {
          "id": "b07-d6-s7",
          "tur": "coktan",
          "kart": 4,
          "soru": "verifier.md'ye göre üreten 'testler geçti' derse doğrulayıcı ne yapar?",
          "secenekler": ["Söze güvenir, testleri yeniden koşmaz", "Testleri kendisi koşar", "Üretenden test çıktısını ister"],
          "dogru": 1,
          "ipucu": "Bağımsız kontrolün ne demek olduğunu düşün.",
          "aciklama": "Doğrulayıcı testleri kendisi koşar; koşamadığı maddeye 'ölçülemedi' yazar ve o zaman Geçti diyemez.",
          "kaynak": {
            "adres": ".claude/agents/verifier.md:16",
            "okuma": "2026-11-17",
            "dayanak": "Testleri kendin koş; üretenin 'geçti' demesine güvenme; koşamadığına 'ölçülemedi' yaz, o zaman sonuç Geçti olamaz.",
            "soz": "Testleri kendin koş; üretenin \"geçti\" demesine güvenme"
          }
        }
      ]
    },
    {
      "id": "b07-d7",
      "baslik": "Paralel çalışma seçenekleri",
      "hedefler": [
        "Alt ajan, ajan ekibi (agent team) ve dinamik iş akışı (dynamic workflow) arasındaki farkı ayırt edebilir.",
        "CLAUDE.md'nin ajan ekibi bölümündeki 'en basit yoldan başla' ilkesini okuyup anlatabilir."
      ],
      "anlatim": [
        "Alt ajan, tek oturumun içinde yan işi kendi bağlamında yapar; sonucu onu başlatan konuşmaya özet olarak döner.",
        "Ajan ekibi (agent team) ise bir liderin yönettiği, ortak görev listesi olan ve birbirine doğrudan mesaj atan oturumlardır. Deneyseldir ve varsayılan olarak kapalıdır.",
        "Dinamik iş akışı (dynamic workflow) bir betiktir: Claude'un kararına değil, yazılı plana göre işleyen bir program. Çok sayıda alt ajanı koşturup sonuçlarını birbirine karşı denetler.",
        "Dinamik iş akışı, bir avuç alt ajana sığmayan işte anılır: bütün kodun denetimi ya da 500 dosyalık taşıma gibi.",
        "Bizim ilke CLAUDE.md'de: 'en basit yoldan başla, karmaşıklığı kanıt gelince ekle.'",
        "CLAUDE.md'ye göre beyin bu ana oturumdur; mimari, güvenlik ve veri bütünlüğü kararı beyinde kalır.",
        "Bizde aynı anda koşan ajanların yazma yolları baştan ayrıdır; böylece iki ajan aynı dosyaya yazmaz."
      ],
      "terimler": [
        {"tr": "ajan ekibi", "en": "agent team", "aciklama": "Bir liderin yönettiği, ortak görev listesi olan ve birbirine mesaj atan oturumlar; deneysel ve varsayılan olarak kapalı."},
        {"tr": "dinamik iş akışı", "en": "dynamic workflow", "aciklama": "Çok sayıda alt ajanı koşturup sonuçlarını birbirine karşı denetleyen betik."}
      ],
      "sorular": [
        {
          "id": "b07-d7-s1",
          "tur": "eslestir",
          "kart": 2,
          "soru": "Her çalışma yolunu tanımıyla eşleştir.",
          "ciftler": [
            ["Alt ajan", "Tek oturumda yan işi yapıp özet döner"],
            ["Ajan ekibi", "Lider yönetir, üyeler birbirine mesaj atar"],
            ["Dinamik iş akışı", "Betik çok sayıda alt ajanı koşturup sonuçları karşılaştırır"]
          ],
          "ipucu": "İşi kimin yönettiğine bak: Claude mı, bir lider mi, bir betik mi.",
          "aciklama": "Üçü işi bölmenin farklı yollarıdır; fark, işi kimin yürüttüğünde ve sonuçların nereye gittiğindedir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/agents",
            "kopya": "agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Alt ajanlar tek oturumda yan işi kendi bağlamında yapıp özet döner; ajan ekipleri bir liderin yönettiği, ortak görev listeli ve birbirine mesaj atan oturumlardır; dinamik iş akışları çok sayıda alt ajanı koşturup sonuçlarını birbirine karşı denetleyen betiklerdir."
          }
        },
        {
          "id": "b07-d7-s2",
          "tur": "dogru-yanlis",
          "kart": 1,
          "soru": "Ajan ekibi özelliği deneyseldir ve varsayılan olarak kapalıdır.",
          "dogru": true,
          "ipucu": "Kartta ajan ekibi anlatılırken en sona eklenen iki niteliği hatırla.",
          "aciklama": "Doğru. Belge ajan ekiplerini deneysel ve varsayılan olarak kapalı diye işaretler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/agents",
            "kopya": "agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Ajan ekipleri deneyseldir ve varsayılan olarak kapalıdır."
          }
        },
        {
          "id": "b07-d7-s3",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bir alt ajan bulduğu sonucu kime bildirir?",
          "secenekler": ["Ekibin öteki üyelerine doğrudan", "Kendisini başlatan konuşmaya", "Yalnız sana, ayrı bir ekranda"],
          "dogru": 1,
          "ipucu": "Alt ajanın tek bir oturumun içinde çalıştığını hatırla.",
          "aciklama": "Alt ajan sonucu onu başlatan konuşmaya döner; birbirine doğrudan mesaj atanlar ajan ekibinin üyeleridir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/agents",
            "kopya": "agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Alt ajanlar sonuçlarını kendilerini başlatan konuşmaya bildirir; ajan ekibinin üyeleri ise birbirine doğrudan mesaj atar."
          }
        },
        {
          "id": "b07-d7-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "Bir iş bir avuç alt ajana sığmıyor ve bulguların birbirine karşı denetlenmesi gerekiyor. Belge hangi yolu anar?",
          "secenekler": ["Tek bir alt ajan", "Ana oturumda tek tek elle", "Dinamik iş akışı"],
          "dogru": 2,
          "ipucu": "Hangi yol sonuçları birbirine karşı denetler?",
          "aciklama": "Dinamik iş akışı bir avuç alt ajanı aşan ya da bulguların karşılaştırılmasını isteyen işler için anılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/agents",
            "kopya": "agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir iş bir avuç alt ajanı aşınca ya da bulguların birbirine karşı denetlenmesi istenince dinamik iş akışı kullanılır."
          }
        },
        {
          "id": "b07-d7-s5",
          "tur": "bosluk",
          "kart": 4,
          "soru": "CLAUDE.md'deki ilke: 'en basit yoldan başla, karmaşıklığı ___ ekle.'",
          "secenekler": ["kanıt gelince", "kullanıcı isteyince", "ilk günden"],
          "dogru": 0,
          "ipucu": "İlke karmaşıklığı neye bağlıyor?",
          "aciklama": "Karmaşık yol kendiliğinden seçilmez; önce basit yol denenir, ek karmaşıklık kanıtla gelir.",
          "kaynak": {
            "adres": "CLAUDE.md:107",
            "okuma": "2026-11-17",
            "dayanak": "İlke: en basit yoldan başla, karmaşıklığı kanıt gelince ekle.",
            "soz": "en basit yoldan başla, karmaşıklığı kanıt gelince ekle"
          }
        },
        {
          "id": "b07-d7-s6",
          "tur": "bosluk",
          "kart": 5,
          "soru": "CLAUDE.md'ye göre mimari, güvenlik ve veri bütünlüğü kararı ___ kalır.",
          "secenekler": ["işi yapan ajanda", "beyinde", "doğrulayıcıda"],
          "dogru": 1,
          "ipucu": "Kartta bu üç kararın kimde kaldığını hatırla.",
          "aciklama": "Bu üç tür karar beyinde, yani ana oturumda kalır; ajana bırakılmaz.",
          "kaynak": {
            "adres": "CLAUDE.md:107",
            "okuma": "2026-11-17",
            "dayanak": "Mimari, güvenlik ve veri bütünlüğü kararı beyinde kalır.",
            "soz": "Mimari, güvenlik ve veri bütünlüğü kararı beyinde kalır"
          }
        },
        {
          "id": "b07-d7-s7",
          "tur": "coktan",
          "kart": 6,
          "soru": "Bizde iki ajan aynı anda çalışacak. Birbirinin dosyasına yazmasınlar diye kural ne der?",
          "secenekler": ["İkisi aynı dosyaya yazar, beyin birleştirir", "Eşzamanlı ajanların yazma yolları baştan ayrıdır", "Biri yazarken öteki yalnız okuyabilir"],
          "dogru": 1,
          "ipucu": "Ajanların iş başlamadan önce neyi birbirinden ayırdığını düşün.",
          "aciklama": "Kural yazma yollarını iş başlamadan ayırır; böylece iki ajan aynı dosyaya yazmaz.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md:12",
            "okuma": "2026-11-17",
            "dayanak": "Eşzamanlı ajanların yazma yolları baştan ayrıdır.",
            "soz": "Eşzamanlı ajanların yazma yolları baştan ayrıdır"
          }
        }
      ]
    }
  ]
});
