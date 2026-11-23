// icerik/birim-07.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b07",
  "sira": 7,
  "baslik": "Alt ajan (subagent)",
  "amac": "Alt ajanın nasıl çalıştığını, ne zaman kullanıldığını ve bir ajan işi ters gidince kaynağın nerede olabileceğini öğrenirsin; bizim klasördeki ajan kurallarını da tanırsın.",
  "dersler": [
    {
      "id": "b07-d1",
      "baslik": "Alt ajan nedir",
      "hedefler": [
        "Alt ajanın ayrı bir bağlam penceresinde çalışıp ana oturuma yalnız özet döndürdüğünü anlatabilir.",
        "Alt ajanın ana oturumun bağlamını temiz tutma faydasını ve bedelini anlatabilir.",
        "Bir ajan bir kurala uymadığında kuralın ajana hangi yoldan ulaştığını ayırt edebilir."
      ],
      "anlatim": [
        "Alt ajan (subagent), Claude Code'un iş devrettiği yardımcıdır. Kendi bağlam penceresinde (context window) dosya okur, arar ve bitince ana oturuma yalnız özet döner.",
        "Bağlam penceresi sınırlıdır; her okuma ve arama sonucu orada birikir. Dolunca Claude konuşmanın eski kısımlarını kaçırmaya başlar.",
        "Alt ajanın bir bedeli var: ana oturum yalnız özeti görür, ajanın sonuca nasıl vardığını görmez.",
        "Ajanın başlangıç bağlamında iki şey vardır: ajan dosyasındaki sistem talimatı (system prompt) ve ana oturumun senin isteğinden yazdığı görev metni.",
        "CLAUDE.md'de yazar: bizim ajanlar .claude/agents/ altındadır, CLAUDE.md'yi yüklemez; ortak kuralları ajan-kimligi skill'indedir."
      ],
      "terimler": [
        {
          "tr": "alt ajan",
          "en": "subagent",
          "aciklama": "Ana oturumun iş devrettiği, kendi bağlamında çalışıp özet döndüren yardımcı."
        },
        {
          "tr": "bağlam penceresi",
          "en": "context window",
          "aciklama": "Konuşmadaki her mesajın, okumanın ve arama sonucunun biriktiği sınırlı alan."
        },
        {
          "tr": "sistem talimatı",
          "en": "system prompt",
          "aciklama": "Ajan dosyasındaki, ajanın rolünü ve davranışını tanımlayan metin."
        }
      ],
      "sorular": [
        {
          "id": "b07-d1-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Ajan bir raporu inceledi. İçindeki bir sayıyı sorunca Claude 'açıp bakmam gerek' dedi. Neden?",
          "secenekler": [
            "Claude okuduğu sayıları aklında tutmaz",
            "Raporu ajan okudu, Claude'a özet geldi",
            "Ajan bitince rapor erişime kapandı"
          ],
          "dogru": 1,
          "ipucu": "Raporun metninin kimin bağlamına girdiğini düşün.",
          "aciklama": "Raporu ajan kendi bağlamında okudu; ana oturuma yalnız özeti geldi. Özette olmayan sayı için dosyanın yeniden açılması gerekir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/what-are-subagents",
            "kopya": "ders-subagents-01-what-are-subagents.md",
            "okuma": "2026-11-15",
            "dayanak": "Her alt ajan kendi bağlam penceresinde çalışır, işini yapar ve ana konuşmaya bir özet döndürür."
          }
        },
        {
          "id": "b07-d1-s2",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Ajan 30 dosya okuyup kısa bir özet döndü. Ana oturumun bağlamına ___ eklenir.",
          "secenekler": [
            "özet ile 30 dosyanın tam metni",
            "özet ile ajanın bütün arama adımları",
            "görev metni ile özet"
          ],
          "dogru": 2,
          "ipucu": "Ajanın okumalarının hangi pencerede kaldığını düşün.",
          "aciklama": "Ajan dosyaları kendi penceresinde okur. Ana oturumun bağlamına yalnız ajana yazdığı görev metni ve dönen özet girer.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/what-are-subagents",
            "kopya": "ders-subagents-01-what-are-subagents.md",
            "okuma": "2026-11-15",
            "dayanak": "Ana bağlam penceresi yalnız soruyu ve özeti kaydeder, yol boyunca okunan 15 dosyayı değil."
          }
        },
        {
          "id": "b07-d1-s4",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bir ajana 300 dosya okutuldu; cevabında ilk dosyalardaki bulguları unutmuş görünüyor. En olası kaynak?",
          "secenekler": [
            "Ajanın kendi penceresi de doldu",
            "Ajanlar yalnız son okunanı tutar",
            "Ana oturumun bağlamı doldu"
          ],
          "dogru": 0,
          "ipucu": "Ajanın da bir bağlam penceresi olduğunu ve pencerenin sınırını düşün.",
          "aciklama": "Ajan kendi bağlam penceresinde çalışır ve o pencere de sınırlıdır; dolunca eski kısımlar kaçar. Bu kadar büyük iş birkaç ajana bölünür.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/what-are-subagents",
            "kopya": "ders-subagents-01-what-are-subagents.md",
            "okuma": "2026-11-15",
            "dayanak": "Her alt ajan kendi bağlam penceresinde çalışır, işini yapar ve ana konuşmaya bir özet döndürür."
          }
        },
        {
          "id": "b07-d1-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Ajan 'bu kural klasörde yok' dedi; sen bir dosyada gördüğünü biliyorsun. Ne istersin?",
          "secenekler": [
            "Claude'un ajanın arama adımlarını göstermesini",
            "Baktığı yerleri de yazarak yeniden aratmasını",
            "Aynı ajanı aynı görevle yeniden çalıştırmasını"
          ],
          "dogru": 1,
          "ipucu": "Claude'un ajanın yolundan neyi gördüğünü düşün.",
          "aciklama": "Ana oturum ajanın sonuca nasıl vardığını görmez, adımlarını gösteremez. Baktığı yerleri yazdırırsan neyi atladığını görürsün.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/what-are-subagents",
            "kopya": "ders-subagents-01-what-are-subagents.md",
            "okuma": "2026-11-15",
            "dayanak": "Bunun bedeli, ana konuşmanın alt ajanın sonuca nasıl vardığını görmemesidir."
          }
        },
        {
          "id": "b07-d1-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude'a sohbette 'eski raporları sayma' dedin; çağrılan ajan yine saydı. En olası kaynak?",
          "secenekler": [
            "Ajan notu okudu ama kaçırdı",
            "Ajanın bağlamı doluydu, not kaçtı",
            "Not görev metnine yazılmadı"
          ],
          "dogru": 2,
          "ipucu": "Ajanın işe başlarken elinde hangi iki metnin olduğunu düşün.",
          "aciklama": "Ajan sohbeti görmez; kendi talimatıyla ve ana oturumun yazdığı görev metniyle, boş bir bağlamla başlar. Not görev metnine girmediyse ajan onu hiç duymadı.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/what-are-subagents",
            "kopya": "ders-subagents-01-what-are-subagents.md",
            "okuma": "2026-11-15",
            "dayanak": "Ajan, ayar dosyasındaki sistem talimatı ve ana ajanın senin isteğine göre yazdığı görev metniyle başlar; dosya okumaları ve aramalar ayrı kalır, bitince ana konuşmaya yalnız özet gelir."
          }
        },
        {
          "id": "b07-d1-s6",
          "tur": "coktan",
          "kart": 4,
          "soru": "CLAUDE.md'ye eklenen kurala ana oturum uyuyor, bizim ajanlar uymuyor. En olası kaynak?",
          "secenekler": [
            "Ajanlar kuralı başka dosyadan alır; orada yok",
            "Ajanlar okur, kendine ait saymaz",
            "Kural ajanlara ancak yeni sohbette ulaşır"
          ],
          "dogru": 0,
          "ipucu": "Bizim ajanların ortak kurallarını nereden aldığını düşün.",
          "aciklama": "Bizim ajanlar CLAUDE.md'yi hiç yüklemez, yeni sohbette de; ortak kuralları ajan-kimligi skill'indedir. Kural ajanlara da gerekiyorsa oraya ya da görev metnine yazılır.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Ajanlar .claude/agents/ altındadır, CLAUDE.md'yi yüklemezler, ortak kuralları ajan-kimligi skill'indedir.",
            "soz": "bu dosyayı yüklemezler, ortak kuralları `ajan-kimligi` skill'inde"
          }
        }
      ]
    },
    {
      "id": "b07-d2",
      "baslik": "Yerleşik ajanlar",
      "hedefler": [
        "Explore, Plan ve genel amaçlı (general-purpose) yerleşik ajanları işlerine göre ayırt edebilir.",
        "Hangi ajanın CLAUDE.md'yi yüklediğini ve bunun bir aramanın sonucunu nasıl etkilediğini anlatabilir."
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
        {
          "tr": "yerleşik ajan",
          "en": "built-in subagent",
          "aciklama": "Claude Code ile hazır gelen, uygun işte Claude'un kendiliğinden kullandığı alt ajan."
        },
        {
          "tr": "genel amaçlı ajan",
          "en": "general-purpose",
          "aciklama": "Hem keşif hem değişiklik gereken çok adımlı işler için, alt ajanlara açık bütün araçlarla çalışan yerleşik ajan."
        },
        {
          "tr": "plan modu",
          "en": "plan mode",
          "aciklama": "Ana konuşmanın salt okunur kaldığı, Claude'un önce araştırıp plan sunduğu mod."
        }
      ],
      "sorular": [
        {
          "id": "b07-d2-s5",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude yazım hatasını bulup düzeltme işini Explore'a verdi; hata yerinde duruyor. En olası kaynak?",
          "secenekler": [
            "Explore düzeltmeyi senin onayına bıraktı",
            "Explore proje kurallarını bilmeden başladı",
            "Explore bulabilir ama dosyaya yazamaz"
          ],
          "dogru": 2,
          "ipucu": "Explore'un dosyalarla neler yapabildiğini düşün.",
          "aciklama": "Explore yalnız okur; Write ve Edit araçları ona kapalıdır. Düzeltme, değişiklik yapabilen bir ajana ya da ana oturuma kalır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Explore'un araçları salt okunurdur; Write ve Edit reddedilir."
          }
        },
        {
          "id": "b07-d2-s4",
          "tur": "coktan",
          "kart": 1,
          "soru": "Plan modunda Claude kodu araştırıp plan sundu. Araştırma ana bağlamı neden doldurmadı?",
          "secenekler": [
            "Plan modunda Claude dosya okumadan plan yazar",
            "Araştırmayı Plan ajanı kendi bağlamında yaptı",
            "Plan modunda okunanlar sıkıştırılıp saklanır"
          ],
          "dogru": 1,
          "ipucu": "Plan modunda araştırmanın kime verildiğini düşün.",
          "aciklama": "Plan modunda Claude araştırmayı Plan ajanına verir; okumalar o alt ajanın bağlamında kalır, ana oturuma yalnız sonuç gelir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Plan modunda Claude kod tabanını anlaması gerekince araştırmayı Plan ajanına devreder."
          }
        },
        {
          "id": "b07-d2-s1",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude işi yerleşik bir ajana verdi; dönünce iki dosya değişmişti. Ne düşünürsün?",
          "secenekler": [
            "Olağan: genel amaçlı ajan değiştirebilir",
            "Aksaklık: yerleşik ajanlar dosyaya yazamaz",
            "Ana oturum yazdı; alt ajanlar yazamaz"
          ],
          "dogru": 0,
          "ipucu": "Yerleşik ajanların hepsinin aynı araçlarla gelip gelmediğini düşün.",
          "aciklama": "Explore ve Plan yalnız okur, ama genel amaçlı ajan keşifle birlikte değişiklik de yapar. Dosya değiştiyse iş büyük olasılıkla ona verilmiştir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Explore kod tabanında arama için hızlı, salt okunur ajandır; Plan, plan modunda plan sunmadan önce bağlam toplar; genel amaçlı ajan hem keşif hem eylem gerektiren karmaşık, çok adımlı işler içindir."
          }
        },
        {
          "id": "b07-d2-s3",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Arama, CLAUDE.md'deki bir proje kuralını gerektiriyor ve Explore'a gidecek. Kural ___ yazılmalı.",
          "secenekler": [
            "Explore'a giden görev metnine",
            "CLAUDE.md'de daha üst bir yere",
            "aramadan sonra Claude'un özetine"
          ],
          "dogru": 0,
          "ipucu": "Explore'un işe başlarken neyi yüklemediğini düşün.",
          "aciklama": "Explore ve Plan CLAUDE.md'siz başlar, kural nerede durursa dursun onu görmez. Ajan görev metnini alır; gereken kural oraya yazılırsa arama doğru yapılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Explore ve Plan, araştırmayı hızlı ve ucuz tutmak için CLAUDE.md dosyaları ve git durum özeti olmadan başlar."
          }
        },
        {
          "id": "b07-d2-s2",
          "tur": "coktan",
          "kart": 4,
          "soru": "Yeni eklenen bir ajan, öteki ajanların aksine CLAUDE.md kurallarına uyuyor. En olası kaynak?",
          "secenekler": [
            "CLAUDE.md'de bu ajana özel bir bölüm var",
            "Yeni ajanın modeli ötekilerden güçlü",
            "Dosyasında CLAUDE.md'siz başlatma satırı yok"
          ],
          "dogru": 2,
          "ipucu": "Senin yazdığın bir ajanın neyi varsayılan olarak yüklediğini düşün.",
          "aciklama": "Yazılan ajanlar CLAUDE.md'yi varsayılan olarak yükler; yüklememesi için dosyasına omitClaudeMd yazılır. O satır yoksa ajan CLAUDE.md kurallarını da alır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Explore ve Plan CLAUDE.md dosyaları ve git durum özeti olmadan başlar; öteki yerleşik ajanlar ve özel ajanlar, omitClaudeMd ayarlanmadıkça ikisini de yükler."
          }
        },
        {
          "id": "b07-d2-s6",
          "tur": "coktan",
          "kart": 5,
          "soru": "Scout'un cevap biçimini değiştirmek istiyorsun. Değişiklik nereye yazılır?",
          "secenekler": [
            "Claude Code'un yerleşik ajan ayarlarına",
            "CLAUDE.md'ye; scout kurallarını oradan alır",
            "Explore'un ayarına; scout onun kopyasıdır",
            "Klasördeki scout ajan dosyasına"
          ],
          "dogru": 3,
          "ipucu": "Scout'un hazır mı geldiğini, yoksa burada mı yazıldığını düşün.",
          "aciklama": "Scout yerleşik değildir, bizim yazdığımız bir ajan dosyasıdır; davranışı o dosyada değişir. CLAUDE.md'yi ise hiç yüklemez.",
          "kaynak": {
            "adres": ".claude/agents/scout.md",
            "okuma": "2026-11-24",
            "dayanak": "Scout'un rolü ve çıktı başlıkları klasördeki kendi ajan dosyasında yazılıdır.",
            "soz": "Sen proje klasörünün keşif ajanısın: okur, bulur, özetlersin."
          }
        }
      ]
    },
    {
      "id": "b07-d3",
      "baslik": "Ajan dosyasının ön bilgisi",
      "hedefler": [
        "Ajan dosyasının ön bilgisindeki (frontmatter) alanların ajanın ne zaman, hangi araçla, ne kadar ve hangi bilgiyle çalışacağını belirlediğini anlatabilir.",
        "Bir ajan beklenmedik davrandığında ön bilgide nereye bakılacağını ayırt edebilir."
      ],
      "anlatim": [
        "Ajan dosyasının en üstündeki ön bilgide (frontmatter) yalnız name ve description zorunludur. Claude işi hangi ajana vereceğine description'a bakarak karar verir.",
        "tools alanı ajanın kullanabileceği araçları sayar. Bu alan yazılmazsa ajan, alt ajanlara açık bütün araçları alır.",
        "Ajanın modelini model, çaba düzeyini effort, en çok kaç tur döneceğini tur tavanı (maxTurns) belirler. skills, adı yazılan skill'in tamamını ajanın bağlamına baştan yükler.",
        "omitClaudeMd: true yazılırsa ajan CLAUDE.md'siz başlar. Adı yanlış yazılan alanı (ör. maxTurns yerine maxturns) Claude Code hata vermeden yok sayar.",
        "Bizden örnek: scout.md'de 'tools: Read, Grep, Glob' satırı var. Bunlar yalnız okuma ve arama araçlarıdır; scout dosya değiştiremez."
      ],
      "terimler": [
        {
          "tr": "ön bilgi",
          "en": "frontmatter",
          "aciklama": "Dosyanın en üstünde iki '---' satırı arasındaki ayar alanları."
        },
        {
          "tr": "tur tavanı",
          "en": "maxTurns",
          "aciklama": "Alt ajanın durmadan önce dönebileceği en çok tur sayısı."
        }
      ],
      "sorular": [
        {
          "id": "b07-d3-s3",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bir ajan işe tam uyuyor ama Claude onu hiç çağırmıyor. Dosyasında ilk neye bakılır?",
          "secenekler": [
            "Açıklaması bu işi anlatıyor mu",
            "Modeli bu işe yeterli mi",
            "Adı işin adıyla aynı mı"
          ],
          "dogru": 0,
          "ipucu": "Claude'un işi hangi ajana vereceğine neye bakarak karar verdiğini düşün.",
          "aciklama": "Claude işi hangi ajana vereceğine açıklamaya (description) bakarak karar verir. Açıklama işi anlatmıyorsa ajan seçilmez.",
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
          "soru": "Yalnız okusun diye yazılan bir ajan dosya değiştirdi; araç listesi yok. En olası kaynak?",
          "secenekler": [
            "Değiştiren ana oturumdur; listesiz ajan okur",
            "Liste yoksa her aracı kullanabilir",
            "Aracı ana oturumdan ödünç aldı"
          ],
          "dogru": 1,
          "ipucu": "Araç listesi yazılmayınca ajanın neyi devraldığını düşün.",
          "aciklama": "Araç listesi (tools) yazılmayan ajan, alt ajanlara açık bütün araçları alır. Yalnız okusun isteniyorsa liste yazılmalıdır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "tools yazılmazsa ajan alt ajanlara açık bütün araçları devralır."
          }
        },
        {
          "id": "b07-d3-s1",
          "tur": "coktan",
          "kart": 2,
          "soru": "Uzun bir taramada ajan yarım bir cevapla döndü; hata iletisi yok. En olası kaynak?",
          "secenekler": [
            "Açıklaması işin yarısını kapsıyordu",
            "Araç listesi aramayı yarıda kesti",
            "Dosyasındaki tur tavanına ulaştı"
          ],
          "dogru": 2,
          "ipucu": "Ajanın en çok ne kadar çalışacağını hangi alanın belirlediğini düşün.",
          "aciklama": "Tur tavanı (maxTurns) ajanın en çok kaç tur döneceğini belirler. Tavana gelen ajan iş bitmeden durur ve yarım cevapla döner.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Kural, tur tavanına takılıp yarım dönen işi ayrıca anar.",
            "soz": "Tur tavanına takılıp yarım dönen iş ilk Kaldı sayılır."
          }
        },
        {
          "id": "b07-d3-s6",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bir ajan ajan-kimligi'nin kurallarına uyuyor ama kayit-yazma skill'indeki biçimi bilmiyor. Dosyasında ilk neye bakılır?",
          "secenekler": [
            "Açıklamasında kayit-yazma geçiyor mu",
            "Skill listesinde kayit-yazma var mı",
            "Tur tavanı skill'i okumaya yetiyor mu"
          ],
          "dogru": 1,
          "ipucu": "Bir skill'in ajanın bağlamına baştan girmesini hangi alanın sağladığını düşün.",
          "aciklama": "skills alanı yalnız adı yazılan skill'leri ajanın bağlamına baştan yükler. kayit-yazma orada yoksa ajan o biçimi bilmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "skills alanındaki skill'lerin yalnız açıklaması değil tam içeriği başlangıçta alt ajanın bağlamına konur."
          }
        },
        {
          "id": "b07-d3-s7",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Ajanın dosyasına tur tavanı yazıldı ama ajan aşıyor, hata da yok. Büyük olasılıkla alan adı ___.",
          "secenekler": [
            "yanlış yazıldığı için yok sayıldı",
            "doğru ama yalnız ana oturumu sınırlıyor",
            "görev metniyle geçersiz kılındı"
          ],
          "dogru": 0,
          "ipucu": "Claude Code'un tanımadığı bir alan adıyla karşılaşınca ne yaptığını düşün.",
          "aciklama": "Alan adı birebir doğru yazılmalı; Claude Code tanımadığı alanı hata vermeden yok sayar. maxturns gibi küçük bir harf farkı ayarı boşa çıkarır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Çok sözcüklü alan adları camelCase yazılır ve tabloyla birebir aynı olmalıdır; Claude Code tanımadığı alanı hata bildirmeden yok sayar."
          }
        },
        {
          "id": "b07-d3-s4",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude testleri scout'a koşturmak istiyor. scout.md'de 'tools: Read, Grep, Glob' yazıyor. Ne dersin?",
          "secenekler": [
            "Olmaz: scout CLAUDE.md'siz başlar",
            "Olur: Read testi açıp sonucu verir",
            "Olmaz: listede komut aracı yok"
          ],
          "dogru": 2,
          "ipucu": "Test koşmak için hangi tür araç gerektiğini düşün.",
          "aciklama": "Read, Grep ve Glob yalnız okur ve arar; test koşmak için komut aracı (Bash) gerekir. Testi ana oturum ya da komut aracı olan bir ajan koşar.",
          "kaynak": {
            "adres": ".claude/agents/scout.md",
            "okuma": "2026-11-24",
            "dayanak": "Scout'un araç satırında yalnız Read, Grep ve Glob vardır.",
            "soz": "tools: Read, Grep, Glob"
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
        "CLAUDE.md'ye göre işi varsayılan olarak ana oturum yapar. Ajan yalnız üç durumda çağrılır: bağlamı dolduracak okuma, aynı anda yürüyecek bağımsız işler, ayrı göz gereken iş."
      ],
      "terimler": [
        {
          "tr": "ana oturum",
          "en": "main conversation",
          "aciklama": "Seninle konuştuğun asıl sohbet; bizde beyin diye anılır."
        },
        {
          "tr": "yan iş",
          "en": "side task",
          "aciklama": "Asıl işe yardım eden, sonucu özetle dönebilen ayrı iş; ör. arama ya da keşif."
        }
      ],
      "sorular": [
        {
          "id": "b07-d4-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bir kuralın işleyişini, bakılan dosyalarla birlikte görmek istiyorsun. Claude ajan öneriyor. Ne dersin?",
          "secenekler": [
            "Ana oturumda; kural işi ajana gitmez",
            "Ana oturumda; yolu görmem gerek",
            "Ajana; Claude yolu sonra anlatır",
            "Ajana; ajan yolu özetine koyar"
          ],
          "dogru": 1,
          "ipucu": "Bu işte senin için sonucun mu, ara adımların mı önemli olduğunu düşün.",
          "aciklama": "Ara iş senin için önemliyse iş ana oturumda kalır; ajanın yolunu Claude da görmez, özet de her adımı taşımaz. Kural işi olması tek başına bir neden değildir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/using-subagents-effectively",
            "kopya": "ders-subagents-04-using-effectively.md",
            "okuma": "2026-11-15",
            "dayanak": "Karar verirken tek soru sorulur: ara iş önemli mi; hayırsa iş alt ajana verilir, evetse ana oturumda kalır."
          }
        },
        {
          "id": "b07-d4-s4",
          "tur": "coktan",
          "kart": 1,
          "soru": "Rengi Claude'la deneyerek ayarlıyorsun, her denemede 'biraz daha koyu' diyorsun. Claude ajan öneriyor. Ne dersin?",
          "secenekler": [
            "Hayır, renk işi ajana verilemez",
            "Hayır, her turda yön veriyorum",
            "Evet, ajan önceki denemeleri görür"
          ],
          "dogru": 1,
          "ipucu": "Sık gidip gelen bir işte ajanın seninle nasıl konuşabildiğini düşün.",
          "aciklama": "Sık düzeltme isteyen iş ana oturumda kalır. Ajan seninle konuşmaz ve önceki denemeleri görmez; bitince yalnız özet döner.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Görev ana bağlamda gerekmeyen uzun çıktı üretiyorsa ve iş kendi içinde bitip özet dönebiliyorsa alt ajan kullanılır."
          }
        },
        {
          "id": "b07-d4-s7",
          "tur": "coktan",
          "kart": 2,
          "soru": "Hangi tarif alt ajanı en iyi kullanır?",
          "secenekler": [
            "'Kaldı sırası' nerede geçiyor, yalnız yerini dön",
            "Sen bir kural uzmanısın, kuralları incele",
            "Klasörü tara, her dosyanın tam metnini getir"
          ],
          "dogru": 0,
          "ipucu": "Hangi tarifin sana yolculuğu değil sonucu getirdiğini düşün.",
          "aciklama": "İyi tarif yalnız sonucu ister. Uzman rolü bir şey katmaz; tam metin istemek de ajanın bağlamı koruma faydasını yok eder.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/using-subagents-effectively",
            "kopya": "ders-subagents-04-using-effectively.md",
            "okuma": "2026-11-15",
            "dayanak": "Alt ajan, nasıl bulunduğunun dökümü değil sonuç gerektiğinde iyi çalışır; 'sen bir uzmansın' diyen ajanlar ise bir şey katmaz."
          }
        },
        {
          "id": "b07-d4-s2",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude hatayı üç ajana bölmek istiyor: biri bulsun, biri nedenini çıkarsın, biri düzeltsin. Ne dersin?",
          "secenekler": [
            "Olmaz: üç ajan birden çağrılamaz",
            "Olmaz: adımlar birbirinin bulduğuna dayanıyor",
            "Olur: her ajan taze bakar"
          ],
          "dogru": 1,
          "ipucu": "Ajanlar arasında iş el değiştirirken ne olabileceğini düşün.",
          "aciklama": "Her adım bir öncekinin bulduğuna bağlıysa ajan zinciri bozulur; devirde bilgi kaybolur. Hata düzeltme bu yüzden tek bağlamda kalır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/using-subagents-effectively",
            "kopya": "ders-subagents-04-using-effectively.md",
            "okuma": "2026-11-15",
            "dayanak": "Sıralı ajan zincirleri her adım bir öncekinin bulduğuna bağlıysa başarısız olur; hata düzeltme neredeyse hep böyledir ve devirde bilgi kaybolur."
          }
        },
        {
          "id": "b07-d4-s3",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Testleri bir ajan koştu, 'iki test kaldı' dedi; Claude nedeni bulamıyor, çünkü ___.",
          "secenekler": [
            "test dökümü Claude'un bağlamını doldurdu",
            "ajan testleri koşmadan tahmin etti",
            "gereken test çıktısı ajanda kaldı"
          ],
          "dogru": 2,
          "ipucu": "Hata ayıklamak için Claude'un neyi görmesi gerektiğini düşün.",
          "aciklama": "Test koşan ajan, hata ayıklamak için gereken çıktıyı ana oturumdan gizler; Claude yalnız 'kaldı' özetini görür. Testi ana oturum koşarsa çıktıyı kendisi görür.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/using-subagents-effectively",
            "kopya": "ders-subagents-04-using-effectively.md",
            "okuma": "2026-11-15",
            "dayanak": "Uzmanlık iddia eden ajanlar bir şey katmaz, sıralı zincirlerde devirde bilgi kaybolur, test koşan ajanlar hata ayıklamak için gereken bilgiyi gizler."
          }
        },
        {
          "id": "b07-d4-s5",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude birbirinden bağımsız iki işi aynı anda yürütmek için iki ajan çağırdı. Kurala göre?",
          "secenekler": [
            "Uygun: kuraldaki durumlardan biri",
            "Uygun: ajan çağırmak her zaman serbest",
            "Kural dışı: yalnız bağlam dolacaksa"
          ],
          "dogru": 0,
          "ipucu": "Ajan çağırmanın üç nedenini hatırla.",
          "aciklama": "Bizde ajan üç durumda çağrılır; aynı anda yürüyecek bağımsız işler bunlardan biridir. Ajan çağırmak yalnız bağlamın dolmasına bağlı değildir.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Bölüm 1 ajanın üç durumda çağrıldığını sayar; biri bağımsız işlerin aynı anda yürümesidir.",
            "soz": "bağımsız işler aynı anda yürüyecekse"
          }
        },
        {
          "id": "b07-d4-s6",
          "tur": "bosluk",
          "kart": 4,
          "soru": "Claude iki sayfalık bir dosyayı özetlemek için ajan açmak istiyor. Bizim kurala göre bu işi ___ yapar.",
          "secenekler": [
            "Explore ajanı",
            "ana oturum kendisi",
            "bir alt ajan, bağlam korunsun diye"
          ],
          "dogru": 1,
          "ipucu": "Bizde işi varsayılan olarak kimin yaptığını düşün.",
          "aciklama": "Bizde işi varsayılan olarak ana oturum yapar; iki sayfa bağlamı doldurmaz, üç durumdan hiçbiri yok. Explore da bir alt ajandır.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Ajana verme eşiği: işi varsayılan olarak ana oturum yapar; ajan yalnız ajan-gorevi bölüm 1'deki durumlarda çağrılır.",
            "soz": "işi varsayılan olarak ana oturum yapar"
          }
        }
      ]
    },
    {
      "id": "b07-d5",
      "baslik": "İyi ajan tasarımı",
      "hedefler": [
        "İyi ajanın ilkelerini (net açıklama, çıktı biçimi, engel bildirimi) anlatabilir.",
        "Bizdeki cevap boyu kancasının hangi ajan cevabını ne zaman geri çevirdiğini anlatabilir."
      ],
      "anlatim": [
        "İyi ajanın ilkelerinden ilki net açıklamadır (description): ajanın ne zaman çağrılacağını ve ona yazılacak görevi şekillendirir.",
        "İkinci ilke çıktı biçimidir (output format) ve en önemli iyileştirmedir. Ajan her başlığı doldurunca işinin bittiğini anlar, gereğinden uzun çalışmaz.",
        "Üçüncü ilke engel bildirimidir (reporting obstacles). Çıktıya bir engeller bölümü eklersen ajanın yolda bulduğu çözümler ana oturuma ulaşır.",
        "Bizde bir kanca (hook) cevap boyunu tutar. Dosyası .claude/agents/ altında olan ajanın cevabı 3.072 baytı geçerse kanca onu bir kez geri çevirir.",
        "Dosyası olmayan ajanlar, yani genel amaçlı ajan, Explore ve Claude Code'un iç ajanları bu kancaya takılmaz."
      ],
      "terimler": [
        {
          "tr": "çıktı biçimi",
          "en": "output format",
          "aciklama": "Ajanın cevabında doldurması gereken başlıklar; ajan hepsini doldurunca işinin bittiğini anlar."
        },
        {
          "tr": "engel bildirimi",
          "en": "reporting obstacles",
          "aciklama": "Ajanın yolda karşılaştığı sorunları ve bulduğu çözümleri cevabında yazması."
        },
        {
          "tr": "kanca",
          "en": "hook",
          "aciklama": "Belli bir olayda kendiliğinden çalışan betik; cevap boyu kancası alt ajan dururken (SubagentStop) çalışır."
        }
      ],
      "sorular": [
        {
          "id": "b07-d5-s2",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude bir ajana hep gereğinden geniş görev yazıyor. Ajan dosyasında ilk neye bakılır?",
          "secenekler": [
            "Araç listesine",
            "Tur tavanına",
            "Model satırına",
            "Açıklamasına"
          ],
          "dogru": 3,
          "ipucu": "Ana oturumun görev metnini yazarken ajan dosyasında neye baktığını düşün.",
          "aciklama": "Ana oturum görev metnini ajanın açıklamasına bakarak yazar. Açıklama geniş ya da belirsizse görev de öyle olur.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/designing-effective-subagents",
            "kopya": "ders-subagents-03-designing.md",
            "okuma": "2026-11-15",
            "dayanak": "Ana ajan alt ajanı başlatırken görev metnini açıklamaya bakarak yazar; açıklama yalnız ne zaman çalışacağını değil ajana ne söyleneceğini de belirler."
          }
        },
        {
          "id": "b07-d5-s1",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bir ajan aradığını bulduğu halde çalışmayı sürdürüyor. En çok ne işe yarar?",
          "secenekler": [
            "'Sen bir uzmansın' rolü",
            "Doldurması gereken başlıklar",
            "Daha büyük bir model",
            "Daha düşük bir tur tavanı"
          ],
          "dogru": 1,
          "ipucu": "Ajanın işinin bittiğini neden anladığını düşün.",
          "aciklama": "Çıktı biçimi ajana doğal bir durma noktası verir; başlıklar dolunca iş biter. Düşük tur tavanı ise işin bitip bitmediğine bakmadan keser.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/designing-effective-subagents",
            "kopya": "ders-subagents-03-designing.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir ajana yapılabilecek en önemli tek iyileştirme, talimatında çıktı biçimi tanımlamaktır."
          }
        },
        {
          "id": "b07-d5-s6",
          "tur": "coktan",
          "kart": 2,
          "soru": "Ajan bir komutun özel ayarla çalıştığını buldu ama özetine yazmadı. Bir dahaki görevde ne istersin?",
          "secenekler": [
            "Bütün dökümünü ana oturuma getirmesini",
            "Tur tavanını yükseltmeyi",
            "Cevapta karşılaştığı engelleri yazmasını"
          ],
          "dogru": 2,
          "ipucu": "Ajandan bir bilgiyi güvenilir biçimde almanın yolunun onu çıktıda istemek olduğunu düşün.",
          "aciklama": "Çıktıya engeller bölümü eklenince ajanın yolda bulduğu sorunlar ve çözümler özete girer. Bütün döküm ise ana bağlamı doldurur.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-subagents/designing-effective-subagents",
            "kopya": "ders-subagents-03-designing.md",
            "okuma": "2026-11-15",
            "dayanak": "Bu bilgiyi almanın yolu çıktı biçiminde açıkça istemektir; şablona 'Karşılaşılan engeller' bölümü eklemek onu güvenilir biçimde ortaya çıkarır."
          }
        },
        {
          "id": "b07-d5-s4",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Ajanın cevabına 'Cevap 4.210 bayt, tavan 3.072' iletisini ___ gönderdi.",
          "secenekler": [
            "bizim klasördeki bir kanca",
            "bağlamı dolan ana oturum",
            "Claude Code'un genel sınırı"
          ],
          "dogru": 0,
          "ipucu": "Ajan dururken çalışan parçayı düşün.",
          "aciklama": "Dosyası olan ajanın cevabı 3.072 baytı geçince bizdeki kanca onu bir kez geri çevirir ve ayrıntıyı dosyaya yazmasını ister.",
          "kaynak": {
            "adres": ".claude/hooks/ajan_cevap_boyu.py",
            "okuma": "2026-11-24",
            "dayanak": "Kanca, ajan .claude/agents/ altında dosyası olan bir ajansa ve son cevabının bayt sayısı 3.072'yi geçiyorsa durdurur.",
            "soz": "dosyası olan bir ajanın adı, last_assistant_message'ın UTF-8 bayt sayısı 3.072'yi geçiyor"
          }
        },
        {
          "id": "b07-d5-s8",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Kanca bir ajanın uzun cevabını geri çevirdi; ikinci cevap yine uzundu ama geldi. Çünkü kanca ___.",
          "secenekler": [
            "tavanı her denemede yükseltir",
            "ikinci duruşta karışmaz",
            "ana oturumca kapatıldı"
          ],
          "dogru": 1,
          "ipucu": "Kancanın aynı ajanı kaç kez geri çevirdiğini düşün.",
          "aciklama": "Kanca ajanı bir kez geri çevirir; ikinci duruşta döngü olmasın diye geçirir. Cevap uzun kalsa da gelir.",
          "kaynak": {
            "adres": ".claude/hooks/ajan_cevap_boyu.py",
            "okuma": "2026-11-24",
            "dayanak": "Kanca ikinci duruşta (stop_hook_active doğru) geçer, döngü olmaz.",
            "soz": "ikinci duruş (stop_hook_active true, döngü olmaz)"
          }
        },
        {
          "id": "b07-d5-s5",
          "tur": "coktan",
          "kart": 4,
          "soru": "Genel amaçlı ajanın uzun cevabı geçti, scout'unki geri çevrildi. Neden?",
          "secenekler": [
            "Genel amaçlı ajanın tavanı daha yüksek",
            "Kanca bir oturumda tek ajanı yakalar",
            "Genel amaçlı ajanın klasörde dosyası yok"
          ],
          "dogru": 2,
          "ipucu": "Kancanın hangi ajanlara baktığını düşün.",
          "aciklama": "Kanca yalnız .claude/agents/ altında dosyası olan ajanlara bakar. Genel amaçlı ajanın orada dosyası yok, cevabı ölçülmez.",
          "kaynak": {
            "adres": ".claude/hooks/ajan_cevap_boyu.py",
            "okuma": "2026-11-24",
            "dayanak": "Dosyası olmayan ajanlar (general-purpose, Explore, fork, Claude Code'un iç ajanları) geçer.",
            "soz": "dosyası olmayan ajan (general-purpose, Explore, fork, Claude Code'un iç ajanları"
          }
        }
      ]
    },
    {
      "id": "b07-d6",
      "baslik": "Doğrulayıcı: bağımsız kontrol",
      "hedefler": [
        "Taze bağlamlı bir gözden geçiricinin neden işe yaradığını anlatabilir.",
        "Bizde doğrulayıcının (verifier) yalnız riskli işte çağrıldığını ve riskli işin ne olduğunu ayırt edebilir.",
        "Doğrulayıcı koşarken ana oturumun neden yazamadığını anlatabilir."
      ],
      "anlatim": [
        "Kodu yazan oturum kendi değişikliğinin en iyi yargıcı değildir. Taze bağlamlı (fresh context) gözden geçirici, işin geçmişini görmediği için yazarın kendince açıklayıp geçtiği sorunları yakalar.",
        "Aynı işi ajana vermek cevabı iyileştirmez; işe yarayan, gerekçeyi görmemiş gözdür.",
        "Gözden geçiriciye ne arayacağını söyle: plana göre denetlesin, doğruluğu bozan açığı yazsın, biçimi atlasın. Sorun bulması istenen gözden geçirici her zaman bir şey bulur.",
        "Bizde bu işi doğrulayıcı (verifier) ajanı yapar: değişikliği bağımsız kontrol eder, düzeltme yapmaz; sonuç Geçti ya da Kaldı.",
        "Doğrulayıcı testleri kendisi koşar; üretenin 'geçti' demesine güvenmez. Koşamadığı maddeye 'ölçülemedi' yazar, o zaman Geçti diyemez.",
        "Doğrulayıcı koşarken ana oturum bu klasöre yazamaz; yazdığı değişiklik denetlenen farka karışır. Denerse bir kanca durdurur.",
        "Doğrulayıcı yalnız riskli işte çağrılır: müşteriye giden metin, ürün kodu, birden çok dosyaya yayılan kural ya da betik değişikliği, sana giden rakamlı rapor ve öneri."
      ],
      "terimler": [
        {
          "tr": "doğrulayıcı",
          "en": "verifier",
          "aciklama": "Başka bir ajanın ya da beynin işini bağımsız kontrol eden, düzeltme yapmayan ve Geçti ya da Kaldı diyen ajanımız."
        },
        {
          "tr": "taze bağlam",
          "en": "fresh context",
          "aciklama": "İşin nasıl yapıldığını görmemiş, o konuşmanın geçmişi olmadan başlayan oturum ya da ajan."
        }
      ],
      "sorular": [
        {
          "id": "b07-d6-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude değişikliği yaptı, 'kendim kontrol ettim' dedi. Gözden kaçan olmasın diye ne istersin?",
          "secenekler": [
            "Claude'un bir kez daha, dikkatle bakmasını",
            "Aynı oturumda daha büyük modelle bakmayı",
            "Yapılışını görmemiş bir ajana baktırmayı"
          ],
          "dogru": 2,
          "ipucu": "Yazarın aklında olup gözden geçiricinin aklında olmayan şeyi düşün.",
          "aciklama": "İşi yapan oturum kendine açıkladığı sorunları yeniden göremez; işin geçmişini görmemiş göz onları yakalar. Fark modelde değil bağlamdadır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/trust-it-verifying-unsupervised-runs",
            "kopya": "ders-action-08-verifying-unsupervised.md",
            "okuma": "2026-11-15",
            "dayanak": "Kodun nasıl kurulduğunu hatırlamayan ikinci gözden geçirici, yaklaşımda payı olmadığı için ilk koşunun kendine açıkladığı şeyleri yakalar."
          }
        },
        {
          "id": "b07-d6-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Claude 'raporu bir ajana yazdırayım, daha iyi olur' dedi. Bu gerekçe tutar mı?",
          "secenekler": [
            "Tutmaz: devretmek tek başına iyileştirmez",
            "Tutmaz: ajan rapor yazamaz, yalnız okur",
            "Tutar: ajanın bağlamı temiz"
          ],
          "dogru": 0,
          "ipucu": "Devretmek ile taze gözle gözden geçirmenin aynı şey olup olmadığını düşün.",
          "aciklama": "Aynı işi ajana vermek cevabı kendiliğinden iyileştirmez. İşe yarayan, gerekçeyi görmemiş bir gözün işi sonradan denetlemesidir.",
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
          "soru": "Gözden geçirici ajan, iş kusursuz olsa bile hep bir sorun buluyor. En olası kaynak?",
          "secenekler": [
            "Ajanın modeli küçük şeyleri büyütüyor",
            "Görevde neyin aranacağı söylenmemiş",
            "İşin geçmişini görmediği için yanılıyor"
          ],
          "dogru": 1,
          "ipucu": "Görevde neyin arandığının nasıl söylendiğini düşün.",
          "aciklama": "Sorun bulması istenen gözden geçirici her zaman bir şey bulur. Görev plana göre denetlemesini, doğruluğu bozanı yazmasını ve biçimi atlamasını söylemeli.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Gözden geçirme istemi işi plana göre denetletmeli, doğruluğu etkileyen açıkları raporlatmalı ve biçimi atlatmalıdır; sorun bulması istenen gözden geçirici her zaman bir şey bulur."
          }
        },
        {
          "id": "b07-d6-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "Doğrulayıcı 'Kaldı' dedi ve hatanın yerini gösterdi, ama düzeltmedi. Bu bir aksaklık mı?",
          "secenekler": [
            "Hayır: düzeltmeyi senin onaylaman gerekir",
            "Evet: düzeltip Geçti demeliydi",
            "Hayır: düzeltmek onun işi değil"
          ],
          "dogru": 2,
          "ipucu": "Bağımsız kontrol edenin işe el sürüp sürmediğini düşün.",
          "aciklama": "Doğrulayıcı bağımsız kontrol eder ve düzeltme yapmaz; sonucu kanıtıyla Geçti ya da Kaldı'dır. Düzeltmeyi işi yapan taraf yapar.",
          "kaynak": {
            "adres": ".claude/agents/verifier.md",
            "okuma": "2026-11-24",
            "dayanak": "Doğrulayıcı değişikliği ya da taslağı bağımsız kontrol eder, testleri kendisi koşar, düzeltme yapmaz; sonuç kanıtıyla Geçti ya da Kaldı.",
            "soz": "bağımsız kontrol eder, testleri kendisi koşar, düzeltme yapmaz"
          }
        },
        {
          "id": "b07-d6-s7",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude 'testler geçti' dedi; doğrulayıcı bir maddeye 'ölçülemedi' yazdı. Sonuç?",
          "secenekler": [
            "Kaldı: Claude'un sözü yanlış çıktı",
            "Geçti: ölçülemeyen madde nota düşer",
            "Doğrulayıcı hüküm vermez, Claude'a sorar",
            "Kaldı: ölçülemeyen madde Geçti'yi engeller"
          ],
          "dogru": 3,
          "ipucu": "Doğrulayıcının üretenin sözüne ne kadar güvendiğini düşün.",
          "aciklama": "Doğrulayıcı üretenin 'geçti' sözüne güvenmez, testi kendisi koşar. Koşamadığı maddeye 'ölçülemedi' yazar; o zaman sonuç Geçti olamaz.",
          "kaynak": {
            "adres": ".claude/agents/verifier.md",
            "okuma": "2026-11-24",
            "dayanak": "Testleri kendin koş, üretenin 'geçti' demesine güvenme; koşamadığına 'ölçülemedi' yaz, o zaman sonuç Geçti olamaz.",
            "soz": "koşamadığına \"ölçülemedi\" yaz, o zaman sonuç Geçti olamaz"
          }
        },
        {
          "id": "b07-d6-s8",
          "tur": "sirala",
          "kart": 5,
          "soru": "Claude bir değişiklik yaptı ve doğrulayıcı çağrıldı; o sırada aklına küçük bir düzeltme geldi. Olanları sırala.",
          "adimlar": [
            "Doğrulayıcı farkı ve testleri denetler",
            "Doğrulayıcı hükmünü verir",
            "Claude düzeltmeyi klasöre yazar"
          ],
          "ipucu": "Doğrulayıcı denetlerken klasöre yazılan bir değişikliğin neye yol açtığını düşün.",
          "aciklama": "Doğrulayıcı koşarken ana oturumun yazdığı değişiklik denetlenen farka karışır ve Kaldı verdirir; kanca bu yüzden yazmayı durdurur. Düzeltme hükümden sonra yazılır.",
          "kaynak": {
            "adres": ".claude/hooks/dogrulayici_kilidi.py",
            "okuma": "2026-11-24",
            "dayanak": "Doğrulayıcı koşarken ana oturumun klasöre yazdığı değişiklik denetlenen farka görevde olmayan yol olarak girer ve Kaldı verdirir; kanca yazmayı durdurur.",
            "soz": "doğrulayıcının baktığı farka görevinde olmayan yol olarak girer ve Kaldı verdirir"
          }
        },
        {
          "id": "b07-d6-s5",
          "tur": "coktan",
          "kart": 6,
          "soru": "Bugün dört iş bitti. Bizim kurala göre hangisinde doğrulayıcı beklersin?",
          "secenekler": [
            "Tek dosyada bir kural yazım düzeltmesi",
            "Sayılarla sana sunulan bir öneri",
            "Bir dosyayı açıklayan uzun özet",
            "Kütüğe eklenen yeni satır"
          ],
          "dogru": 1,
          "ipucu": "Riskli iş listesinde hangi tür raporun sayıldığını düşün.",
          "aciklama": "Sana giden rakamlı rapor ve öneri riskli iş sayılır, doğrulayıcıya gider. Tek dosyadaki kural düzeltmesi, açıklama ve kütük satırı listede yok.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Riskli iş: müşteriye giden metin, ürün kodu, birden çok dosyaya yayılan kural ya da betik değişikliği; kullanıcıya giden rakamlı rapor ve öneri.",
            "soz": "kullanıcıya giden rakamlı rapor ve öneri"
          }
        }
      ]
    },
    {
      "id": "b07-d7",
      "baslik": "Paralel çalışma seçenekleri",
      "hedefler": [
        "Alt ajan, ajan ekibi (agent team) ve dinamik iş akışı (dynamic workflow) arasındaki farkı ayırt edebilir.",
        "CLAUDE.md'nin ajan ekibi bölümündeki 'en basit yoldan başla' ilkesini bir öneri üzerinde anlatabilir."
      ],
      "anlatim": [
        "Alt ajan, tek oturumun içinde yan işi kendi bağlamında yapar; sonucu onu başlatan konuşmaya özet olarak döner.",
        "Ajan ekibi (agent team) ise bir liderin yönettiği, ortak görev listesi olan ve birbirine doğrudan mesaj atan oturumlardır. Deneyseldir ve varsayılan olarak kapalıdır.",
        "Dinamik iş akışı (dynamic workflow), çok sayıda alt ajanı koşturup sonuçlarını karşılaştıran bir betiktir. Bir avuç ajana sığmayan işte anılır, ör. 500 dosyalık taşıma.",
        "Bizim ilke CLAUDE.md'de: 'en basit yoldan başla, karmaşıklığı kanıt gelince ekle.'",
        "CLAUDE.md'ye göre beyin bu ana oturumdur; mimari, güvenlik ve veri bütünlüğü kararı beyinde kalır.",
        "Bizde aynı anda koşan ajanların yazma yolları baştan ayrıdır; böylece iki ajan aynı dosyaya yazmaz."
      ],
      "terimler": [
        {
          "tr": "ajan ekibi",
          "en": "agent team",
          "aciklama": "Bir liderin yönettiği, ortak görev listesi olan ve birbirine mesaj atan oturumlar; deneysel ve varsayılan olarak kapalı."
        },
        {
          "tr": "dinamik iş akışı",
          "en": "dynamic workflow",
          "aciklama": "Çok sayıda alt ajanı koşturup sonuçlarını birbirine karşı denetleyen betik."
        }
      ],
      "sorular": [
        {
          "id": "b07-d7-s3",
          "tur": "bosluk",
          "kart": 0,
          "soru": "İki alt ajan aynı anda çalıştı; biri ötekinin bulduğunu kullanmadı. Çünkü alt ajanın sonucu ___ döner.",
          "secenekler": [
            "öteki ajanlara doğrudan",
            "yalnız kendisini çağırana",
            "senin ayrı ekranına"
          ],
          "dogru": 1,
          "ipucu": "Alt ajanın sonucunu kime bildirdiğini düşün.",
          "aciklama": "Alt ajanlar sonuçlarını yalnız kendilerini başlatan konuşmaya döner, birbirine mesaj atmaz. Birbirine yazanlar ajan ekibinin üyeleridir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/agents",
            "kopya": "agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Alt ajanlar sonuçlarını kendilerini başlatan konuşmaya bildirir; ajan ekibinin üyeleri ise birbirine doğrudan mesaj atar."
          }
        },
        {
          "id": "b07-d7-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Claude'a 'ajanlar ekip olsun, birbirine yazsın' dedin; Claude bunu hemen yapamayacağını söyledi. En olası kaynak?",
          "secenekler": [
            "Ekip için önce iş akışı betiği gerekir",
            "Ajan ekibi deneysel, kendiliğinden kapalı"
          ],
          "dogru": 1,
          "ipucu": "Ajan ekibi özelliğinin bugünkü durumunu düşün.",
          "aciklama": "Ajan ekibi deneyseldir ve varsayılan olarak kapalıdır; açılmadan kurulamaz. İş akışı betiği ayrı bir yoldur, ekibin ön şartı değildir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/agents",
            "kopya": "agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Ajan ekipleri deneyseldir ve varsayılan olarak kapalıdır."
          }
        },
        {
          "id": "b07-d7-s4",
          "tur": "eslestir",
          "kart": 2,
          "soru": "Her işi en uygun çalışma yoluyla eşleştir.",
          "ciftler": [
            [
              "Bir dosyada tek ayrıntıyı bul, yeri dönsün",
              "Alt ajan"
            ],
            [
              "Ajanlar bulgularını birbirine yazıp tartışsın",
              "Ajan ekibi"
            ],
            [
              "2.000 dosya taşınsın, sonuçlar birbirine karşı sınansın",
              "Dinamik iş akışı"
            ]
          ],
          "ipucu": "Her işte sonuçların nereye gittiğine ve kaç ajan gerektiğine bak.",
          "aciklama": "Tek yan iş alt ajana, birbirine yazan oturumlar ajan ekibine, bir avuç ajana sığmayan ve sonuçları karşılaştırılan iş dinamik iş akışına düşer.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/agents",
            "kopya": "agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Alt ajanlar tek oturumda yan işi kendi bağlamında yapıp özet döner; ajan ekipleri bir liderin yönettiği, ortak görev listeli ve birbirine mesaj atan oturumlardır; dinamik iş akışları çok sayıda alt ajanı koşturup sonuçlarını birbirine karşı denetleyen betiklerdir."
          }
        },
        {
          "id": "b07-d7-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "12 dosyalık bir denetim için Claude çok ajanlı bir betik öneriyor. İlkeye göre?",
          "secenekler": [
            "Uygun değil: betik yazmak yasak",
            "Uygun: çok ajan daha güvenilir",
            "Ana oturum ya da tek ajanla başlasın"
          ],
          "dogru": 2,
          "ipucu": "Karmaşıklığın ne zaman eklendiğini düşün.",
          "aciklama": "İlke en basit yoldan başlamayı ister; karmaşıklık kanıt gelince eklenir. 12 dosya için ana oturum ya da tek ajan yeter.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "İlke: en basit yoldan başla, karmaşıklığı kanıt gelince ekle.",
            "soz": "en basit yoldan başla, karmaşıklığı kanıt gelince ekle"
          }
        },
        {
          "id": "b07-d7-s6",
          "tur": "coktan",
          "kart": 4,
          "soru": "Bir ajanın raporunda 'kayıtların saklandığı yapıyı baştan değiştirmeye karar verdim' yazıyor. Bu karar kimindir?",
          "secenekler": [
            "Ana oturumun; ajan bu kararı veremez",
            "Ajanın; işi o yapıyor",
            "Doğrulayıcının; bağımsız göz o"
          ],
          "dogru": 0,
          "ipucu": "Hangi kararların ajana bırakılmadığını düşün.",
          "aciklama": "Kayıtların saklanış yapısı mimari ve veri bütünlüğü kararıdır; beyinde, yani ana oturumda kalır. Ajan bu kararı kendisi veremez.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Mimari, güvenlik ve veri bütünlüğü kararı beyinde kalır.",
            "soz": "Mimari, güvenlik ve veri bütünlüğü kararı beyinde kalır"
          }
        },
        {
          "id": "b07-d7-s7",
          "tur": "coktan",
          "kart": 5,
          "soru": "Aynı anda çalışan iki ajandan birinin yazdığı satırlar, öteki bitince kaybolmuş. Ne atlanmış?",
          "secenekler": [
            "İkinci ajana okuma izni verilmemiş",
            "Ajanlar sırayla değil aynı anda başlatılmış",
            "Her ajana ayrı dosya verilmemiş"
          ],
          "dogru": 2,
          "ipucu": "Aynı anda koşan ajanlar için iş başlamadan neyin ayrıldığını düşün.",
          "aciklama": "Eşzamanlı ajanların yazma yolları baştan ayrılır; ayrılmazsa ikisi aynı dosyaya yazar ve biri ötekinin satırlarını ezer.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "CLAUDE.md'ye göre birbirine bağlı olmayan işler aynı anda yürür, iki iş aynı dosyaya yazmaz.",
            "soz": "iki iş aynı dosyaya yazmaz"
          }
        }
      ]
    }
  ]
});
