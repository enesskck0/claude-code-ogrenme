// icerik/birim-09.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b09",
  "sira": 9,
  "baslik": "Oturum yönetimi ve bağlam",
  "amac": "Uzun bir sohbette bağlamın nasıl dolup sıkıştırıldığını, eski oturuma dönmeyi, geri sarmayı ve bizim açılış, iş geçişi, kapanış düzenimizi okuyup anlatabilmek.",
  "dersler": [
    {
      "id": "b09-d1",
      "baslik": "Bağlam dolunca: sıkıştırma (compaction)",
      "hedefler": [
        "Bağlam sınıra yaklaşınca otomatik sıkıştırmanın ne yaptığını anlatabilir.",
        "Sıkıştırmada ayrıntı kaybolabileceğini anlatabilir.",
        "Bizim 'durum diskte yaşar' kuralını ve 500 bin kapanış önerisini anlatabilir."
      ],
      "anlatim": [
        "Bağlam penceresi (context window) Claude'un çalışma belleğidir. Yazdığın her istem, okuduğu her dosya, koştuğu her araç burada yer kaplar ve yer sınırlıdır. Sınıra yaklaşınca Claude Code sohbeti kendiliğinden sıkıştırır: önemli ayrıntıları özetler, gereksiz araç sonuçlarını çıkarır. Böylece dolan bağlam oturumu bitirmez, iş sürer.",
        "Bedeli var: özetlemede ayrıntı kaybolabilir. Sıkıştırma sohbet geçmişini özetler; diskteki dosya yerinde durur. Bizim kural da diske dayanır: 'Durum diskte yaşar. Önemli çıktı üretildiği anda diske yazılır, kapanış beklenmez' (CLAUDE.md satır 37).",
        "Sıkıştırmayı /compact komutuyla elle de başlatabilirsin; otomatik sıkıştırma onunla aynı biçimde çalışır. Otomatik sıkıştırmanın tam hangi noktada koşacağı modele ve ayarlara bağlıdır. Bizde ayrıca bir eşik var: bağlam 500 bini geçince Claude kapanışı önerir (CLAUDE.md satır 38). Kapanışta iş, devir kartıyla yeni sohbete aktarılır."
      ],
      "terimler": [
        {"tr": "sıkıştırma", "en": "compaction", "aciklama": "Bağlam dolarken sohbet geçmişinin özetlenip yer açılması."},
        {"tr": "bağlam penceresi", "en": "context window", "aciklama": "Claude'un oturumda bildiği her şeyin durduğu, sınırlı çalışma belleği."}
      ],
      "sorular": [
        {
          "id": "b09-d1-s1",
          "tur": "coktan",
          "soru": "Bağlam penceresi sınıra yaklaşınca Claude Code ne yapar?",
          "secenekler": [
            "Oturumu kapatır, yeni sohbet açmanı ister",
            "Kendiliğinden sıkıştırır, iş sürer",
            "Okunan dosyaları diskten siler",
            "Sen bir komut yazana kadar durur"
          ],
          "dogru": 1,
          "ipucu": "Dolan bağlamın oturumu bitirip bitirmediğini düşün.",
          "aciklama": "Claude Code sınıra yaklaşınca kendiliğinden sıkıştırır, bu yüzden dolan bağlam oturumu bitirmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code sınıra yaklaşırken kendiliğinden sıkıştırır, bu yüzden dolan bağlam penceresi oturumu bitirmez."
          }
        },
        {
          "id": "b09-d1-s2",
          "tur": "coktan",
          "soru": "Otomatik sıkıştırma bağlamda yer açmak için ne yapar?",
          "secenekler": [
            "Önemli ayrıntıları özetler, gereksiz araç sonuçlarını çıkarır",
            "Bütün mesajları siler, sohbette yalnız en son yazdığın istemi bırakır",
            "Okunan dosyaları kısaltıp diske geri yazar",
            "Eski mesajları başka bir oturuma taşır"
          ],
          "dogru": 0,
          "ipucu": "Yer açarken neyin tutulup neyin bırakıldığını düşün.",
          "aciklama": "Sıkıştırma önemli ayrıntıları özetleyip gereksiz araç sonuçlarını çıkararak yer açar.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/context-management",
            "kopya": "ders-101-06-context-management.md",
            "okuma": "2026-11-15",
            "dayanak": "Sıkıştırma önemli ayrıntıları özetler ve gereksiz araç çağrısı sonuçlarını çıkararak yer açar."
          }
        },
        {
          "id": "b09-d1-s3",
          "tur": "dogru-yanlis",
          "soru": "Sıkıştırmada ayrıntı kaybolmaz; özet sohbetteki her şeyi taşır.",
          "dogru": false,
          "ipucu": "Özetlemenin bir bedeli olup olmadığını düşün.",
          "aciklama": "Kurs açıkça uyarır: sıkıştırma ayrıntı kaybettirebilir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/context-management",
            "kopya": "ders-101-06-context-management.md",
            "okuma": "2026-11-15",
            "dayanak": "Bu sürecin ayrıntı kaybettirebileceği ayrıca not edilir."
          }
        },
        {
          "id": "b09-d1-s4",
          "tur": "dogru-yanlis",
          "soru": "Otomatik sıkıştırma, elle /compact yazdığında olan işin aynısını yapar.",
          "dogru": true,
          "ipucu": "Kartta elle başlatılan sıkıştırmanın otomatik olanla nasıl karşılaştırıldığını hatırla.",
          "aciklama": "Belgeye göre otomatik geçiş, /compact adımıyla aynı biçimde çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Otomatik geçiş, /compact adımıyla aynı biçimde çalışır."
          }
        },
        {
          "id": "b09-d1-s5",
          "tur": "coktan",
          "soru": "CLAUDE.md satır 37'ye göre önemli bir çıktı ne zaman diske yazılır?",
          "secenekler": [
            "Kapanışta, toplu olarak",
            "Bağlam 500 bini geçince",
            "Üretildiği anda, beklemeden",
            "Sen isteyince"
          ],
          "dogru": 2,
          "ipucu": "Satır kapanışı beklemekle ilgili ne diyor, ona bak.",
          "aciklama": "Kural durumun diskte yaşadığını söyler; önemli çıktı üretildiği anda yazılır, kapanış beklenmez.",
          "kaynak": {
            "adres": "CLAUDE.md:37",
            "okuma": "2026-11-15",
            "dayanak": "Durum diskte yaşar; önemli çıktı üretildiği anda diske yazılır, kapanış beklenmez."
          }
        },
        {
          "id": "b09-d1-s6",
          "tur": "sirala",
          "soru": "Uzun bir oturumda olanları sırala.",
          "adimlar": [
            "Her istem, dosya ve araç sonucu bağlama eklenir",
            "Bağlam sınıra yaklaşır",
            "Bağlam kendiliğinden sıkıştırılır",
            "Özetle yer açılır"
          ],
          "ipucu": "Önce neyin yer kapladığını, sonra sınırda ne olduğunu düşün.",
          "aciklama": "Her istem ve araç sonucu bağlamı doldurur; sınıra yaklaşınca sıkıştırma özetleyip yer açar.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/context-management",
            "kopya": "ders-101-06-context-management.md",
            "okuma": "2026-11-15",
            "dayanak": "Her istem, dosya okuma ve araç sonucu bağlama eklenir; sınıra yaklaşınca bağlam kendiliğinden sıkıştırılır ve yer açılır."
          }
        },
        {
          "id": "b09-d1-s7",
          "tur": "coktan",
          "soru": "CLAUDE.md satır 38'e göre Claude kapanışı bağlam hangi büyüklüğü geçince önerir?",
          "secenekler": [
            "100 bin",
            "200 bin",
            "500 bin",
            "1 milyon"
          ],
          "dogru": 2,
          "ipucu": "Kartta bizim eşiğimiz için verilen sayıyı hatırla.",
          "aciklama": "Satır kapanışın bağlam 500 bini geçince, yeni sohbet gerektiren işte ya da iş kalmayınca önerildiğini söyler.",
          "kaynak": {
            "adres": "CLAUDE.md:38",
            "okuma": "2026-11-15",
            "dayanak": "Claude kapanışı bağlam 500 bini geçince, sıradaki iş yeni sohbet isteyince ya da iş kalmayınca önerir."
          }
        }
      ]
    },
    {
      "id": "b09-d2",
      "baslik": "/compact, /clear ve /context",
      "hedefler": [
        "Aynı işe devam ederken /compact, yeni işe geçerken /clear seçmeyi anlatabilir.",
        "/context komutunun neyi gösterdiğini anlatabilir.",
        "/compact komutuna odak yazmanın ne işe yaradığını anlatabilir."
      ],
      "anlatim": [
        "Üç komut, üç iş. /compact sohbeti o ana kadar özetler; yer açar ama ne üzerinde çalıştığını hatırlar. /clear her şeyi kaldırır, sıfırdan başlarsın. /context bağlamın boyunu, en çok yer kaplayan kategorileri ve bir dökümünü gösterir. Masaüstünde /context ve /compact'ı istem kutusuna yazarsın.",
        "Kaba kural: aynı işe devam ediyorsan ve sınıra dayandıysan /compact. Yeni bir işe başlıyorsan /clear; eski sohbet yeni işe önyargı taşımasın. Her oturumda bilinmesi gereken şeyi CLAUDE.md'ye yaz; Claude onu her seferinde baştan keşfetmek zorunda kalmaz.",
        "/compact'a odak da yazabilirsin; buna odaklı sıkıştırma (compact with a focus) denir. Örnek: /compact birim 9 yazımına odaklan. O zaman özet, otomatik geçişin önemli sandığını değil senin seçtiğini tutar. Bizde ayrıca her iş geçişinde bağlam ölçülür (is-gecisi skill'i, Bağlam bölümü)."
      ],
      "terimler": [
        {"tr": "odaklı sıkıştırma", "en": "compact with a focus", "aciklama": "/compact komutuna ne tutulacağını yazarak özeti senin seçtiğin konuya yöneltmek."}
      ],
      "sorular": [
        {
          "id": "b09-d2-s1",
          "tur": "coktan",
          "soru": "Uzun bir işin ortasındasın, bağlam sınıra dayandı ama aynı işe devam edeceksin. Hangi komutu yazarsın?",
          "secenekler": [
            "/clear",
            "/compact",
            "/context",
            "/memory"
          ],
          "dogru": 1,
          "ipucu": "Önceki çalışmanın hatırasını tutarken yer açan komutu düşün.",
          "aciklama": "/compact yer açar ama ne üzerinde çalıştığını unutturmaz; aynı işe devamda doğru seçim odur.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/context-management",
            "kopya": "ders-101-06-context-management.md",
            "okuma": "2026-11-15",
            "dayanak": "Belirli bir özellik üzerinde çalışırken sınıra dayanıp devam etmen gerekiyorsa /compact kullanılır."
          }
        },
        {
          "id": "b09-d2-s2",
          "tur": "coktan",
          "soru": "Bir işi bitirdin, ilgisiz yeni bir işe başlayacaksın. Eski sohbetin yeni işe önyargı katmasını istemiyorsun. Hangi komut?",
          "secenekler": [
            "/compact",
            "/context",
            "/clear",
            "/rewind"
          ],
          "dogru": 2,
          "ipucu": "Önceki sohbetten hiçbir şey taşımayan komutu düşün.",
          "aciklama": "/clear her şeyi kaldırır; yeni işe temiz bir bağlamla başlarsın.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/context-management",
            "kopya": "ders-101-06-context-management.md",
            "okuma": "2026-11-15",
            "dayanak": "Yeni bir özelliğe başlarken /clear kullanılır, çünkü önceki sohbetin yeni işe önyargı katması istenmez."
          }
        },
        {
          "id": "b09-d2-s3",
          "tur": "bosluk",
          "soru": "Bağlamın boyunu ve en çok yer kaplayan kategorileri görmek için istem kutusuna ___ yazarsın.",
          "secenekler": [
            "/context",
            "/compact",
            "/clear",
            "/resume"
          ],
          "dogru": 0,
          "ipucu": "Durumu gösteren komutu, işlem yapan komutlardan ayır.",
          "aciklama": "/context bağlam boyunun genel görünümünü, en çok yer kaplayan kategorileri ve dökümünü gösterir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/context-management",
            "kopya": "ders-101-06-context-management.md",
            "okuma": "2026-11-15",
            "dayanak": "/context komutu bağlam boyunun genel görünümünü, en çok yer kaplayan kategorileri ve dökümü gösteren bir görsel verir."
          }
        },
        {
          "id": "b09-d2-s4",
          "tur": "dogru-yanlis",
          "soru": "/clear sohbeti özetler ve ne üzerinde çalıştığını hatırlar.",
          "dogru": false,
          "ipucu": "Özetleyen komut ile her şeyi kaldıran komutu ayır.",
          "aciklama": "Özetleyip hatırlayan /compact'tır; /clear her şeyi kaldırır ve sıfırdan başlatır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/context-management",
            "kopya": "ders-101-06-context-management.md",
            "okuma": "2026-11-15",
            "dayanak": "/clear her şeyi kaldırır ve önceki oturumun hatırası olmadan sıfırdan başlatır."
          }
        },
        {
          "id": "b09-d2-s5",
          "tur": "coktan",
          "soru": "Aynı işte uzun bir adıma geçmeden sıkıştıracaksın ve özetin neyi tutacağını sen seçmek istiyorsun. Ne yazarsın?",
          "secenekler": [
            "Yalnız /compact",
            "/clear ve ardından ne istediğin",
            "/compact ve ardından özetin neye odaklanacağı",
            "/context ve ardından neye odaklanacağı"
          ],
          "dogru": 2,
          "ipucu": "Özetin yönünü komutun yanına yazdığın talimat belirler.",
          "aciklama": "/compact'a talimat yazınca özet, otomatik geçişin tahminini değil senin seçtiğini tutar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "/compact komutuna talimat yazınca özet, otomatik geçişin önemli sandığını değil senin seçtiğini tutar."
          }
        },
        {
          "id": "b09-d2-s6",
          "tur": "coktan",
          "soru": "is-gecisi skill'i: 'Bir saatten uzun aradan sonra 250 bin üstü bağlamla devam edilmez, yeni sohbet önerilir.' İki saat ara verdin, bağlam 280 bin. Ne olur?",
          "secenekler": [
            "Yeni sohbet önerilir",
            "Aynı sohbette devam edilir",
            "Hemen /compact koşulur",
            "Bağlam ölçülmez, iş sürer"
          ],
          "dogru": 0,
          "ipucu": "Hem aranın süresine hem bağlamın büyüklüğüne bak.",
          "aciklama": "Ara bir saatten uzun ve bağlam 250 binin üstünde; kural bu durumda yeni sohbet önerir.",
          "kaynak": {
            "adres": ".claude/skills/is-gecisi/SKILL.md:32",
            "okuma": "2026-11-15",
            "dayanak": "Bir saatten uzun aradan sonra 250 bin üstü bağlamla devam edilmez, yeni sohbet önerilir."
          }
        },
        {
          "id": "b09-d2-s7",
          "tur": "sirala",
          "soru": "Uzun süredir çalıştığın bir oturumda bağlamı toparlayacaksın. Kursun önerdiği adımları sırala.",
          "adimlar": [
            "/context ile en çok neyin yer kapladığına bak",
            "Aynı işe devamsa /compact, yeni işse /clear koş",
            "/context'i yeniden koşup neyin değiştiğine bak"
          ],
          "ipucu": "Önce ölç, sonra işlem yap, sonra yeniden ölç.",
          "aciklama": "Kurs önce /context ile ölçmeyi, sonra işe göre /compact ya da /clear seçmeyi, en sonda yeniden ölçmeyi önerir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/context-management",
            "kopya": "ders-101-06-context-management.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir süredir çalıştığın oturumda /context koşup en çok yer kaplayanı bul, aynı işe devamsa /compact, yeni işse /clear koş, sonra neyin değiştiğini görmek için /context'i yeniden koş."
          }
        }
      ]
    },
    {
      "id": "b09-d3",
      "baslik": "Sıkıştırmada ne kalır",
      "hedefler": [
        "Sıkıştırmadan sonra kök CLAUDE.md'nin diskten yeniden yüklendiğini anlatabilir.",
        "Kancaların önceden eklediği bağlamın özetlendiğini, kaynağı compact olan açılış kancasının ise sonradan koştuğunu ayırt edebilir.",
        "Büyük bir skill'de önemli talimatın neden üste yazıldığını anlatabilir."
      ],
      "anlatim": [
        "Sıkıştırma sohbet geçmişini özetler ama her şeyi aynı biçimde ele almaz. Proje kökündeki CLAUDE.md diskten yeniden yüklenir; bizim kurallar sıkıştırmadan sonra da tam metniyle durur. Claude'un okuduğu ya da düzenlediği dosyalardan en son değişen beşe kadarı yeniden okunur.",
        "Kancaların daha önce eklediği bağlam ise sohbetin geri kalanıyla birlikte özetlenir. Buna karşılık kaynağı 'compact' olan açılış kancası (SessionStart hook) sıkıştırmadan sonra koşar, çıktısı yeni bağlama eklenir. Bizim acilis.py bunu kullanır: kaynak 'compact' ise ve döngü işareti varsa saatin altına 'döngü sürüyor, sohbet özetlendi' satırını ekler.",
        "Daha önce açılmış skill'lerin gövdesi de geri eklenir, ama skill başına ve toplamda bir üst sınırla. Büyük skill kırpılır, sınır aşılınca en eski açılan önce düşer. Kırpma dosyanın başını tutar; bu yüzden en önemli talimat SKILL.md'nin üstüne yazılır."
      ],
      "terimler": [
        {"tr": "açılış kancası", "en": "SessionStart hook", "aciklama": "Oturum başlarken ya da sıkıştırmadan sonra koşan, bağlama not ekleyebilen kanca."}
      ],
      "sorular": [
        {
          "id": "b09-d3-s1",
          "tur": "coktan",
          "soru": "Sıkıştırmadan sonra proje kökündeki CLAUDE.md'ye ne olur?",
          "secenekler": [
            "Özete karışır, tam metni kaybolur",
            "Diskten yeniden yüklenir, tam metniyle durur",
            "Bir sonraki oturuma kadar yüklenmez",
            "Yalnız başlıkları kalır"
          ],
          "dogru": 1,
          "ipucu": "Kurallarının sıkıştırmadan sonra da tam metinle durup durmadığını düşün.",
          "aciklama": "Kök CLAUDE.md sohbetin parçası gibi özetlenmez, diskten yeniden eklenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Proje kökündeki CLAUDE.md ve kapsamsız kurallar sıkıştırmadan sonra diskten yeniden eklenir."
          }
        },
        {
          "id": "b09-d3-s2",
          "tur": "dogru-yanlis",
          "soru": "Kancaların daha önce bağlama eklediği notlar sıkıştırmada aynen korunur.",
          "dogru": false,
          "ipucu": "Kanca notunun sohbetin bir parçası mı, diskteki bir dosya mı olduğunu düşün.",
          "aciklama": "Kancaların önceden eklediği bağlam sohbetin geri kalanıyla birlikte özetlenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Kancaların daha önce eklediği bağlam, sohbetin geri kalanıyla birlikte özetlenir."
          }
        },
        {
          "id": "b09-d3-s3",
          "tur": "dogru-yanlis",
          "soru": "Kaynağı compact olan açılış kancaları sıkıştırmadan sonra koşar ve çıktıları sıkıştırılmış bağlama eklenir.",
          "dogru": true,
          "ipucu": "Önceki notun özetlenmesi ile kancanın yeniden koşmasını ayır.",
          "aciklama": "Claude Code compact kaynağıyla eşleşen açılış kancalarını koşar ve çıktılarını sıkıştırılmış bağlama ekler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "compact kaynağıyla eşleşen açılış kancalarını Claude Code koşar ve çıktılarını sıkıştırılmış bağlama ekler."
          }
        },
        {
          "id": "b09-d3-s4",
          "tur": "eslestir",
          "soru": "Sıkıştırmadan sonra ne olur? Eşleştir.",
          "ciftler": [
            ["Kök CLAUDE.md", "Diskten yeniden eklenir"],
            ["Kancaların önceki notları", "Sohbetle birlikte özetlenir"],
            ["Okunan ya da düzenlenen dosyalar", "En son değişen beşe kadarı yeniden okunur"],
            ["Açılmış skill gövdeleri", "Sınırla yeniden eklenir, en eskisi önce düşer"]
          ],
          "ipucu": "Diskte duran ile sohbetin içinde kalan şeyi ayır.",
          "aciklama": "Diskten gelen kurallar geri yüklenir, sohbetin içindeki kanca notları özetlenir; dosya ve skill gövdeleri sınırlı biçimde geri gelir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Sayfadaki tabloya göre kök CLAUDE.md diskten yeniden eklenir, kancaların eklediği bağlam özetlenir, okunan ya da düzenlenen dosyalardan beşe kadarı yeniden okunur ve skill gövdeleri sınırla yeniden eklenir."
          }
        },
        {
          "id": "b09-d3-s5",
          "tur": "coktan",
          "soru": "acilis.py'nin baş yorumu: olayın kaynağı 'compact' ise ve döngü işareti varsa saatin altına bir satır eklenir. Bu satır ne zaman basılır?",
          "secenekler": [
            "Her yeni sohbetin ilk mesajında",
            "Her kullanıcı turunda",
            "Döngüde, sıkıştırmadan sonra",
            "Sen /clear yazınca"
          ],
          "dogru": 2,
          "ipucu": "compact kaynağının hangi olayı anlattığını düşün.",
          "aciklama": "compact kaynağı sıkıştırmadan sonraki açılışı anlatır; döngü işareti de varsa satır basılır.",
          "kaynak": {
            "adres": ".claude/hooks/acilis.py:4",
            "okuma": "2026-11-15",
            "dayanak": "Olayın source alanı compact ise ve kökte .claude/dongu-baglam.json işareti varsa saatin altına bir satır eklenir."
          }
        },
        {
          "id": "b09-d3-s6",
          "tur": "coktan",
          "soru": "acilis.py'nin döngüde eklediği satır: 'döngü sürüyor, sohbet özetlendi; devir kartı ve kuyruk dosyası baştan okunur'. Özetten sonra Claude nerede kaldığını nereden bulur?",
          "secenekler": [
            "Yalnız sohbetin özetinden, başka yere bakmadan",
            "Devir kartı ile kuyruk dosyasından",
            "Kenar çubuğundaki oturum adından",
            "Denetimi baştan koşup çıktısından"
          ],
          "dogru": 1,
          "ipucu": "Satırın özetten sonra neyi baştan okuttuğuna bak.",
          "aciklama": "Satır döngünün sürdüğünü söyler ve Claude'u devir kartı ile kuyruk dosyasını baştan okumaya yönlendirir.",
          "kaynak": {
            "adres": ".claude/hooks/acilis.py:6",
            "okuma": "2026-11-15",
            "dayanak": "Eklenen satır döngünün sürdüğünü, sohbetin özetlendiğini, devir kartı ile kuyruk dosyasının baştan okunacağını söyler."
          }
        },
        {
          "id": "b09-d3-s7",
          "tur": "bosluk",
          "soru": "Sıkıştırmada büyük bir skill kırpılırsa dosyanın başı kalır; bu yüzden en önemli talimat SKILL.md'nin ___ yazılır.",
          "secenekler": [
            "sonuna",
            "ortasına",
            "üstüne"
          ],
          "dogru": 2,
          "ipucu": "Kırpmanın dosyanın hangi ucunu tuttuğuna bak.",
          "aciklama": "Kırpma dosyanın başını tuttuğu için en önemli talimat üste yazılırsa sıkıştırmadan sonra da kalır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Kırpma dosyanın başını tuttuğu için en önemli talimatlar SKILL.md'nin üstüne yakın yazılmalıdır."
          }
        }
      ]
    },
    {
      "id": "b09-d4",
      "baslik": "Oturuma devam ve adlandırma",
      "hedefler": [
        "Terminaldeki --continue ile --resume arasındaki farkı anlatabilir.",
        "Masaüstünde eski bir oturuma dönmeyi ve oturumu yeniden adlandırmayı anlatabilir.",
        "Masaüstünde bağlamın ne kadar dolu olduğunu nereden göreceğini anlatabilir."
      ],
      "anlatim": [
        "Oturum (session), bir proje klasörüne bağlı, kaydedilmiş bir sohbettir. Claude Code onu sen çalışırken sürekli kaydeder; çıksan da kaldığın yerden dönebilirsin. Terminalde 'claude --continue' bu klasördeki en son oturumu açar; 'claude --resume' ise oturum seçiciyi (session picker) açar, listeden seçersin.",
        "Sen masaüstündesin. Orada bu iki komutun karşılığı kenar çubuğundaki listede bir oturuma tıklamaktır. Oturumu yeniden adlandırmak için onu açıp başlık çubuğundaki adına tıklarsın. Bağlamın doluluğunu yeni düzende oturum ayrıntıları panelindeki Context kartının başlığında yüzde olarak görürsün; istem kutusuna /context yazınca kategori dökümü gelir.",
        "Bizde her sohbete numaralı ad verilir: açılışta 'N · açılış', kapanışta 'N · iş adı'. Adı elle verdiysen seninki esas kalır (acilis skill'i, adım 0). Açıklayıcı ad, oturumu listede bulmanı kolaylaştırır."
      ],
      "terimler": [
        {"tr": "oturum", "en": "session", "aciklama": "Bir proje klasörüne bağlı, sürekli kaydedilen sohbet; kaldığın yerden sürdürülebilir."},
        {"tr": "oturum seçici", "en": "session picker", "aciklama": "Terminalde eski oturumlardan birini seçip açtığın liste."}
      ],
      "sorular": [
        {
          "id": "b09-d4-s1",
          "tur": "eslestir",
          "soru": "Terminalde: komutu işiyle eşleştir.",
          "ciftler": [
            ["claude --continue", "Bu klasördeki en son oturumu açar"],
            ["claude --resume", "Oturum seçiciyi açar"],
            ["claude --resume oturum-adı", "Adı verilen oturumu doğrudan sürdürür"],
            ["/resume", "Açık oturumun içinden başka oturuma geçer"]
          ],
          "ipucu": "Biri listeyi açar, biri hiç sormadan en sonuncuya döner.",
          "aciklama": "--continue en son oturumu açar, --resume seçiciyi; ad verilirse o oturum doğrudan sürer.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sessions",
            "kopya": "sessions.md",
            "okuma": "2026-11-15",
            "dayanak": "claude --continue bu klasördeki en son oturumu, claude --resume oturum seçiciyi açar, ad verilirse o oturum doğrudan sürer, /resume ise açık oturumdan başka oturuma geçirir."
          }
        },
        {
          "id": "b09-d4-s2",
          "tur": "coktan",
          "soru": "Masaüstündesin ve dünkü bir oturuma dönmek istiyorsun. Terminaldeki --resume ve --continue'nun masaüstü karşılığı hangisi?",
          "secenekler": [
            "İstem kutusuna /clear yazıp göndermek",
            "Kenar çubuğundaki listede o oturuma tıklamak",
            "Uygulamayı kapatıp yeniden açmak",
            "Ayarlardan yeni ortam kurmak"
          ],
          "dogru": 1,
          "ipucu": "Masaüstünde oturumların listelendiği yeri düşün.",
          "aciklama": "Masaüstünde eski oturuma kenar çubuğundan tıklayarak dönersin; terminalde başlattığın oturum için /resume da yazabilirsin.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "--resume ve --continue'nun masaüstü karşılığı kenar çubuğunda bir oturuma tıklamak ya da terminalde başlatılan oturum için istem kutusuna /resume yazmaktır."
          }
        },
        {
          "id": "b09-d4-s3",
          "tur": "dogru-yanlis",
          "soru": "Claude Code'dan çıkınca oturum kaybolur; kaldığın yere dönemezsin.",
          "dogru": false,
          "ipucu": "Oturumun çalışırken nereye kaydedildiğini düşün.",
          "aciklama": "Oturumlar çalışırken yerel döküm dosyalarına sürekli kaydedilir, bu yüzden çıktıktan sonra da dönebilirsin.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sessions",
            "kopya": "sessions.md",
            "okuma": "2026-11-15",
            "dayanak": "Oturumlar çalışırken yerel döküm dosyalarına sürekli kaydedilir, bu yüzden çıktıktan ya da /clear koştuktan sonra birine dönebilirsin."
          }
        },
        {
          "id": "b09-d4-s4",
          "tur": "coktan",
          "soru": "Masaüstünde bir oturumun adını değiştirmek istiyorsun. Ne yaparsın?",
          "secenekler": [
            "Açıp başlık çubuğundaki adına tıklarsın",
            "Oturumu arşivleyip yeniden açarsın",
            "İstem kutusuna /context yazıp adı değiştirirsin"
          ],
          "dogru": 0,
          "ipucu": "Açık oturumun adı ekranın hangi çubuğunda görünür?",
          "aciklama": "Masaüstünde ad, oturumu açıp başlık çubuğundaki başlığa tıklayarak değişir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir oturumu yeniden adlandırmak için onu açıp başlık çubuğundaki oturum başlığına tıklarsın."
          }
        },
        {
          "id": "b09-d4-s5",
          "tur": "coktan",
          "soru": "Masaüstünün yeni düzeninde bu oturumun bağlamının ne kadar dolu olduğunu nerede görürsün?",
          "secenekler": [
            "Ayarlar penceresindeki hesap sayfasında",
            "Kenar çubuğunda oturum adının yanında",
            "Ayrıntılar panelindeki Context kartında",
            "Göremezsin, bu bilgi yalnız terminalde var"
          ],
          "dogru": 2,
          "ipucu": "Sohbetin yanında oturumla ilgili kartların durduğu paneli düşün.",
          "aciklama": "Yeni düzende Context kartının başlığı bağlam doluluğunu yüzde olarak gösterir; kartı açınca kategori dökümü gelir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Yeni düzende oturum ayrıntıları panelindeki Context kartının başlığı bağlam doluluğunu yüzde olarak gösterir."
          }
        },
        {
          "id": "b09-d4-s6",
          "tur": "coktan",
          "soru": "acilis skill'i adım 0: ad set_session_title ile 'N · açılış' yapılır. 190 numaralı sohbeti açtın; oturumun adı ne olur?",
          "secenekler": [
            "açılış · 190",
            "proje — açılış",
            "190 · açılış",
            "Sohbet 190"
          ],
          "dogru": 2,
          "ipucu": "Numaranın adın başında mı sonunda mı durduğuna bak.",
          "aciklama": "Açılışta ad 'N · açılış' kalıbıyla verilir; N sohbet numarasıdır.",
          "kaynak": {
            "adres": ".claude/skills/acilis/SKILL.md:12",
            "okuma": "2026-11-15",
            "dayanak": "Açılışta ad set_session_title ile 'N · açılış' yapılır, N sohbetin numarasıdır."
          }
        },
        {
          "id": "b09-d4-s7",
          "tur": "dogru-yanlis",
          "soru": "acilis skill'ine göre oturumun adını elle verdiysen, açılış kendi verdiği adı değil seninkini esas alır.",
          "dogru": true,
          "ipucu": "Elle verdiğin ad ile açılışın verdiği ad çakışınca hangisinin kaldığını düşün.",
          "aciklama": "Skill açıkça söyler: adı elle verdiysen seninki esastır.",
          "kaynak": {
            "adres": ".claude/skills/acilis/SKILL.md:12",
            "okuma": "2026-11-15",
            "dayanak": "Kullanıcı adı elle verdiyse onun verdiği ad esastır."
          }
        }
      ]
    },
    {
      "id": "b09-d5",
      "baslik": "Geri sarma (checkpoint, /rewind)",
      "hedefler": [
        "Geri sarma menüsünün /rewind ya da boş istemde iki kez Esc ile açıldığını anlatabilir.",
        "Kodu, sohbeti ya da ikisini birden geri almayı ayırt edebilir.",
        "Yalnız kabuk komutuyla değişen dosyanın ve alt ajanın öteki dosyalardaki düzenlemesinin geri gelmediğini, bunun için git gerektiğini anlatabilir."
      ],
      "anlatim": [
        "Claude Code, Claude'un dosya düzenlemelerini kendiliğinden izler. Bir tur başlatan her istemden önce kodun hali kaydedilir; buna kontrol noktası (checkpoint) denir. Kontrol noktaları sohbetle birlikte kaydedilir; oturumu sonradan sürdürsen de /rewind çalışır. Geri dönmek için /rewind yazarsın ya da istem kutusu boşken iki kez Esc'ye basarsın. Menüde gönderdiğin istemler listelenir; birini seçip ne yapılacağını seçersin.",
        "Menüdeki seçenekler: kodu ve sohbeti birlikte geri al; yalnız sohbeti geri al, kod kalır; yalnız kodu geri al, sohbet kalır; buradan sonrasını ya da buraya kadarını özetle; vazgeç. Özetleme seçenekleri dosyalara dokunmaz, bağlamda yer açar; hedefli bir /compact gibidir.",
        "Sınırları var. Yalnız kabuk komutuyla (Bash) değişen dosya izlenmez, olduğu gibi kalır. Alt ajanın düzenlediği öteki dosyalar da genelde geri gelmez. Bunlar için git gibi sürüm denetimi gerekir. Bizde her iş bitince commit atılır (CLAUDE.md satır 112). Kontrol noktası oturum içi hızlı kurtarmadır, git'in yerini tutmaz."
      ],
      "terimler": [
        {"tr": "kontrol noktası", "en": "checkpoint", "aciklama": "Bir tur başlatan her istemden önce kodun kaydedilen hali; geri sarınca buna dönülür."},
        {"tr": "geri sarma", "en": "rewind", "aciklama": "Kodu, sohbeti ya da ikisini birden önceki bir istemin noktasına döndürmek."}
      ],
      "sorular": [
        {
          "id": "b09-d5-s1",
          "tur": "coktan",
          "soru": "Geri sarma menüsünü nasıl açarsın?",
          "secenekler": [
            "/clear yazıp sohbeti sıfırlayarak",
            "/rewind ya da boş kutuda çift Esc ile",
            "Oturumu arşivleyip kenar çubuğundan yeniden açarak",
            "/context yazıp listeden istem seçerek"
          ],
          "dogru": 1,
          "ipucu": "Komutun adı menünün işini söyler.",
          "aciklama": "Menü /rewind ile ya da istem kutusu boşken iki kez Esc ile açılır; kutuda yazı varsa çift Esc onu temizler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Geri sarma menüsünü açmak için /rewind koşulur ya da istem kutusu boşken iki kez Esc'ye basılır."
          }
        },
        {
          "id": "b09-d5-s2",
          "tur": "eslestir",
          "soru": "Menü seçeneğini sonucuyla eşleştir.",
          "ciftler": [
            ["Kodu ve sohbeti geri al (Restore code and conversation)", "Kod da sohbet de o noktaya döner"],
            ["Sohbeti geri al (Restore conversation)", "Sohbet o mesaja döner, kod olduğu gibi kalır"],
            ["Kodu geri al (Restore code)", "Dosya değişiklikleri geri alınır, sohbet kalır"],
            ["Buradan sonrasını özetle (Summarize from here)", "O noktadan sonrası özete sıkışır, yer açılır"]
          ],
          "ipucu": "Her seçenekte neyin geri gidip neyin yerinde kaldığına bak.",
          "aciklama": "Üç geri alma seçeneği kodu, sohbeti ya da ikisini döndürür; özetleme seçeneği ise bağlamda yer açar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Menüde kodu ve sohbeti birlikte, yalnız sohbeti ya da yalnız kodu geri alma seçenekleri ile buradan sonrasını özetleyip yer açma seçeneği vardır."
          }
        },
        {
          "id": "b09-d5-s3",
          "tur": "dogru-yanlis",
          "soru": "Claude'un yalnız kabuk komutuyla (Bash) değiştirdiği bir dosyayı /rewind geri getirir.",
          "dogru": false,
          "ipucu": "Kontrol noktasının hangi araçla yapılan değişikliği izlediğini düşün.",
          "aciklama": "Yalnız kabuk komutlarının değiştirdiği dosya izlenmez ve olduğu gibi kalır; onu git gibi sürüm denetimiyle geri alırsın.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Yalnız Bash komutlarının değiştirdiği dosya izlenmez ve olduğu gibi kalır, geri almak için git gibi sürüm denetimi kullanılır."
          }
        },
        {
          "id": "b09-d5-s4",
          "tur": "dogru-yanlis",
          "soru": "Kontrol noktaları sohbetle birlikte kaydedilir; oturuma sonradan dönsen de /rewind kullanabilirsin.",
          "dogru": true,
          "ipucu": "Kontrol noktasının neyle birlikte kaydedildiğini düşün.",
          "aciklama": "Kontrol noktaları sohbetle kaydedildiği için sürdürdüğün oturumda da /rewind çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code kontrol noktalarını sohbetle birlikte kaydeder, bu yüzden oturumu sürdürdükten sonra da /rewind koşabilirsin."
          }
        },
        {
          "id": "b09-d5-s5",
          "tur": "coktan",
          "soru": "Arka planda çalışan bir alt ajan, Claude'un bu sohbette hiç düzenlemediği dosyaları değiştirdi. /rewind bu değişiklikleri geri alır mı?",
          "secenekler": [
            "Evet, her düzenleme kontrol noktasında durur",
            "Evet, ama yalnız sohbeti geri al seçilirse",
            "Hayır, alt ajanın düzenlemeleri kalır, git gerekir",
            "Evet, ama yalnız ilk 30 gün içinde"
          ],
          "dogru": 2,
          "ipucu": "Alt ajanın düzenlemelerinin senin oturumunun kontrol noktalarına girip girmediğini düşün.",
          "aciklama": "Alt ajanın öteki dosyalardaki düzenlemeleri kontrol noktasına girmez ve kalır; bunları git ile geri alırsın.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Öteki alt ajanlarda geri sarma yalnız Claude'un sohbette zaten düzenlediği dosyaları geri getirir, alt ajanın öteki dosyalardaki düzenlemeleri kalır ve git gibi sürüm denetimiyle geri alınır."
          }
        },
        {
          "id": "b09-d5-s6",
          "tur": "coktan",
          "soru": "Bizde her iş bitince commit atılır (CLAUDE.md satır 112). Kontrol noktası varken bu neden hâlâ gerekli?",
          "secenekler": [
            "Kontrol noktası oturum içi kurtarmadır; kalıcı geçmiş git'te",
            "Kontrol noktası yalnız sohbeti geri alır, kodu hiç almaz",
            "Kontrol noktası kalıcıdır; commit atmak yalnız bir alışkanlıktır"
          ],
          "dogru": 0,
          "ipucu": "Kontrol noktasının ne kadar süreli bir kurtarma için tasarlandığını düşün.",
          "aciklama": "Belge kontrol noktalarını oturum düzeyinde hızlı kurtarma diye tanımlar; kalıcı geçmiş için git kullanılmaya devam edilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Kontrol noktaları oturum düzeyinde hızlı kurtarma içindir; kalıcı sürüm geçmişi için git gibi sürüm denetimi kullanılmaya devam edilir."
          }
        },
        {
          "id": "b09-d5-s7",
          "tur": "coktan",
          "soru": "CLAUDE.md satır 112'ye göre bizde commit ne zaman atılır?",
          "secenekler": [
            "Yalnız kapanışta",
            "Her iş bitince",
            "Bağlam 500 bini geçince",
            "Sen her istediğinde"
          ],
          "dogru": 1,
          "ipucu": "Satır sürüm kaydını bir olaya bağlar; o olay ne?",
          "aciklama": "Satır klasörün git ile tutulduğunu ve her iş bitince commit atıldığını söyler.",
          "kaynak": {
            "adres": "CLAUDE.md:112",
            "okuma": "2026-11-15",
            "dayanak": "Klasör git ile tutulur, her iş bitince commit atılır."
          }
        },
        {
          "id": "b09-d5-s8",
          "tur": "sirala",
          "soru": "Claude yanlış bir düzenleme yaptı; kodu son isteminden önceki hale döndüreceksin. Adımları sırala.",
          "adimlar": [
            "/rewind yaz ya da boş istemde iki kez Esc'ye bas",
            "Listeden dönmek istediğin istemi seç",
            "Kodu geri al seçeneğini seç"
          ],
          "ipucu": "Önce menüyü aç, sonra noktayı, en son eylemi seç.",
          "aciklama": "Menü açılır, gönderdiğin istemlerden biri seçilir, sonra eylem seçilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Menü /rewind ya da boş istemde iki kez Esc ile açılır, gönderilen istemler listelenir, bir nokta seçilip eylem seçilir."
          }
        }
      ]
    },
    {
      "id": "b09-d6",
      "baslik": "Bizde oturum düzeni: açılış, iş geçişi, kapanış",
      "hedefler": [
        "Açılışta, iş geçişinde ve kapanışta hangi skill'in açıldığını ayırt edebilir.",
        "Devir kartının hangi satırları taşıdığını anlatabilir.",
        "300 ve 500 bin bağlam eşiklerinde ne olduğunu anlatabilir."
      ],
      "anlatim": [
        "Açılışta sen 'proje — açılış' yazarsın, acilis skill'i devir kartını, açık işleri ve son kararları okur. Bir iş bitip sıradakine geçerken is-gecisi skill'i commit atar, DURUM satırını yazar, bağlamı ölçer. Sen 'sohbeti kapatıyoruz' deyince kapanis skill'i açılır; sırası: devir testi, devir kartı ve DURUM.md, KARARLAR.md, denetim, commit, kapanış mesajı. Döngünün kayıt noktasında ise dongu skill'i açılır.",
        "Devir kartını kapanış yazar, sonraki açılış okur. Satırları: Bitti, Açık, Neden, Sonraki adım, Kaynaklar, Belirsiz, Karar, Bitti sayılır, kullanıcı bloğu, Ders, Beyin. Sonraki adım sıradaki işi, Bitti sayılır onun bitti ölçütünü yazar. Kart yalnız klasörde olmayanı yazar: bilginin yerini verir, CLAUDE.md, skill ve rapordaki metni kopyalamaz. İşe başlamadan devir kartı ve DURUM.md okunur (CLAUDE.md satır 91).",
        "İş geçişinde bağlam ölçülür. 500 bin üstünde yeni işten önce kapanış önerilir. 300 ile 500 bin arasında kapanış yalnız sıradaki iş birden çok ajanlı büyük işse önerilir, öteki işler sürer. Saat damgası kancası (UserPromptSubmit) 300 ve 500 bin aşılınca eşik başına bir kez 'Bağlam:' satırı basar. Oturumun geçici alanındaki her şey sohbetle ölür; kapanıştaki devir testi gerekeni diske indirir."
      ],
      "terimler": [
        {"tr": "kullanıcı turu kancası", "en": "UserPromptSubmit", "aciklama": "Her kullanıcı mesajında koşan kanca olayı; saat_damgasi.py bununla bağlama saat ve gerekirse bağlam satırı ekler."}
      ],
      "sorular": [
        {
          "id": "b09-d6-s1",
          "tur": "eslestir",
          "soru": "Anı, o anda açılan skill'le eşleştir.",
          "ciftler": [
            ["Oturum açılışı", "acilis"],
            ["Bir iş bitti, sohbet sürüyor", "is-gecisi"],
            ["Oturum kapanışı", "kapanis"],
            ["Döngünün kayıt noktası", "dongu"]
          ],
          "ipucu": "Her skill'in adının hangi anı anlattığını düşün.",
          "aciklama": "is-gecisi yalnız iki iş arasında açılır; açılış, kapanış ve döngünün kayıt noktası kendi skill'lerindedir.",
          "kaynak": {
            "adres": ".claude/skills/is-gecisi/SKILL.md:3",
            "okuma": "2026-11-15",
            "dayanak": "is-gecisi bir iş bitip sıradakine geçilirken açılır, oturum açılışında acilis, kapanışta kapanis, döngünün kayıt noktasında dongu kullanılır."
          }
        },
        {
          "id": "b09-d6-s2",
          "tur": "coktan",
          "soru": "Devir kartında sıradaki işin ne olduğu hangi satırda yazar?",
          "secenekler": [
            "Bitti:",
            "Sonraki adım:",
            "Bitti sayılır:",
            "Ders:"
          ],
          "dogru": 1,
          "ipucu": "Sıradaki işin kendisini yazan satırı, o işin ölçütünü yazan satırdan ayır.",
          "aciklama": "Sonraki adım satırı sıradaki işi adıyla ve kaynak kararının numarasıyla yazar; Bitti sayılır ise o işin bitti ölçütüdür.",
          "kaynak": {
            "adres": ".claude/skills/kapanis/SKILL.md:29",
            "okuma": "2026-11-15",
            "dayanak": "Sonraki adım satırı iş adıyla ve işin kaynak kararının numarasıyla yazılır, sıradaki iş yoksa 'Sonraki adım: yok' yazılır."
          }
        },
        {
          "id": "b09-d6-s3",
          "tur": "eslestir",
          "soru": "Devir kartı satırını taşıdığı bilgiyle eşleştir.",
          "ciftler": [
            ["Bitti:", "Kapanan iş ve kaynak dosya yolu"],
            ["Açık:", "Yalnız bu oturumdan kalan iş"],
            ["Neden:", "Kararların gerekçesi"],
            ["Beyin:", "Sıradaki sohbetin modeli ve eforu"]
          ],
          "ipucu": "Her satır adının hangi soruya cevap verdiğini düşün.",
          "aciklama": "Kartta biten iş, kalan iş, gerekçe ve sıradaki sohbetin modeli ayrı satırlarda durur.",
          "kaynak": {
            "adres": ".claude/skills/kapanis/SKILL.md:26",
            "okuma": "2026-11-15",
            "dayanak": "Bitti satırı kapanan işi ve kaynak dosya yolunu, Açık satırı yalnız bu oturumdan kalan işi, Neden satırı kararların gerekçesini, Beyin satırı sıradaki sohbetin modelini ve eforunu taşır."
          }
        },
        {
          "id": "b09-d6-s4",
          "tur": "coktan",
          "soru": "İş geçişinde bağlam 540 bin ölçüldü. is-gecisi'ne göre ne olur?",
          "secenekler": [
            "Yeni işten önce kapanış önerilir",
            "Kapanış yalnız büyük işte önerilir",
            "Bir şey olmaz, iş sürer",
            "Sohbet kendiliğinden kapanır"
          ],
          "dogru": 0,
          "ipucu": "Ölçülen değer hangi eşiğin üstünde?",
          "aciklama": "500 binin üstünde kural yeni işten önce kapanış önerir.",
          "kaynak": {
            "adres": ".claude/skills/is-gecisi/SKILL.md:30",
            "okuma": "2026-11-15",
            "dayanak": "500 bin üstü bağlamda yeni işten önce kapanış önerilir."
          }
        },
        {
          "id": "b09-d6-s5",
          "tur": "coktan",
          "soru": "İş geçişinde bağlam 400 bin, sıradaki iş tek dosyalık küçük bir düzeltme. is-gecisi'ne göre ne olur?",
          "secenekler": [
            "Kapanış önerilir",
            "Hemen /clear koşulur",
            "Kapanış önerilmez, sıradaki iş sürer",
            "Sohbet kendiliğinden kapanır"
          ],
          "dogru": 2,
          "ipucu": "300 ile 500 bin arasında kapanışın hangi tür işte önerildiğine bak.",
          "aciklama": "300-500 bin arasında kapanış yalnız birden çok ajanlı büyük işte önerilir; küçük iş sürer.",
          "kaynak": {
            "adres": ".claude/skills/is-gecisi/SKILL.md:31",
            "okuma": "2026-11-15",
            "dayanak": "300-500 bin arasında kapanış yalnız sıradaki iş birden çok ajanlı büyük işse önerilir, öteki işler sürer."
          }
        },
        {
          "id": "b09-d6-s6",
          "tur": "dogru-yanlis",
          "soru": "saat_damgasi.py bağlam 300 bini aştıktan sonra her turda yeniden 'Bağlam:' satırı basar.",
          "dogru": false,
          "ipucu": "Kancanın aynı eşik için kaç kez yazdığına bak.",
          "aciklama": "Satır eşik başına bir kez basılır; bağlam eşiğin altına inip yeniden aşmadıkça tekrarlanmaz.",
          "kaynak": {
            "adres": ".claude/hooks/saat_damgasi.py:12",
            "okuma": "2026-11-15",
            "dayanak": "Satır eşik başına bir kez basılır, bağlam o satırdan sonra eşiğin altına inmediyse yeniden basılmaz."
          }
        },
        {
          "id": "b09-d6-s7",
          "tur": "dogru-yanlis",
          "soru": "CLAUDE.md'ye göre işe başlamadan önce devir kartı ve DURUM.md okunur.",
          "dogru": true,
          "ipucu": "Kartta işe başlamadan neyin okunduğunu hatırla.",
          "aciklama": "Satır işe başlamadan proje-baglam skill'inin, devir kartının ve DURUM.md'nin okunmasını ister.",
          "kaynak": {
            "adres": "CLAUDE.md:91",
            "okuma": "2026-11-15",
            "dayanak": "İşe başlamadan proje-baglam skill'i, devir kartı ve DURUM.md okunur."
          }
        },
        {
          "id": "b09-d6-s8",
          "tur": "coktan",
          "soru": "Oturumda geçici alana bir kaynak metin indirdin; sıradaki iş onun üstünde çalışacak. Kapanıştaki devir testine göre ne yapılır?",
          "secenekler": [
            "Geçici alanda kalır, sonraki sohbet oradan okur",
            "Kaynak metin de diske iner",
            "Yalnız rapor yazılır, kaynak gerekmez"
          ],
          "dogru": 1,
          "ipucu": "Geçici alandaki şeyin sohbet bitince ne olduğuna bak.",
          "aciklama": "Geçici alandaki her şey sohbetle ölür; sonraki iş kaynak metne dayanacaksa kaynak da diske iner.",
          "kaynak": {
            "adres": ".claude/skills/kapanis/SKILL.md:20",
            "okuma": "2026-11-15",
            "dayanak": "Sonraki iş kaynak metin üstünde çalışacaksa kaynak da diske iner."
          }
        },
        {
          "id": "b09-d6-s9",
          "tur": "sirala",
          "soru": "Kapanış adımlarını sırala.",
          "adimlar": [
            "Devir testi yapılır",
            "Devir kartı ve DURUM.md yazılır",
            "KARARLAR.md'ye kayıt düşülür",
            "Denetim koşulur",
            "Commit atılır, kapanış mesajı yazılır"
          ],
          "ipucu": "Önce neyin diske inmesi gerektiğine bakılır, en sonda sohbete yazılır.",
          "aciklama": "kapanis skill'i adımları sırayla yapar: devir testi, kart ve DURUM, KARARLAR, denetim, commit ve kapanış mesajı.",
          "kaynak": {
            "adres": ".claude/skills/kapanis/SKILL.md:8",
            "okuma": "2026-11-15",
            "dayanak": "Adımlar sırayla yapılır: devir testi, devir kartı ve DURUM.md, KARARLAR.md, denetim, commit ve yedek, kapanış mesajı."
          }
        }
      ]
    }
  ]
});
