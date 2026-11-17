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
        "Bağlam penceresi (context window) Claude'un sınırlı çalışma belleğidir. Sınıra yaklaşınca Claude Code sohbeti kendiliğinden sıkıştırır; dolan bağlam oturumu bitirmez.",
        "Yazdığın her istem, okuduğu her dosya, koştuğu her araç bağlamda yer kaplar. Sıkıştırma önemli ayrıntıları özetler, gereksiz araç sonuçlarını çıkarır.",
        "Sıkıştırmanın bedeli var: özetlemede ayrıntı kaybolabilir. Sıkıştırma sohbet geçmişini özetler; diskteki dosya yerinde durur.",
        "Bizim kural da diske dayanır: CLAUDE.md'de 'Durum diskte yaşar. Önemli çıktı üretildiği anda diske yazılır, kapanış beklenmez' satırı var.",
        "Sıkıştırmayı /compact komutuyla elle de başlatabilirsin. Otomatik sıkıştırma onunla aynı biçimde çalışır.",
        "Bizde ayrıca bir eşik var: CLAUDE.md'ye göre Claude kapanışı bağlam 500 bini geçince önerir. Kapanışta iş, devir kartıyla yeni sohbete aktarılır."
      ],
      "terimler": [
        {"tr": "sıkıştırma", "en": "compaction", "aciklama": "Bağlam dolarken sohbet geçmişinin özetlenip yer açılması."},
        {"tr": "bağlam penceresi", "en": "context window", "aciklama": "Claude'un oturumda bildiği her şeyin durduğu, sınırlı çalışma belleği."}
      ],
      "sorular": [
        {
          "id": "b09-d1-s1",
          "tur": "coktan",
          "kart": 0,
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
          "kart": 1,
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
          "kart": 2,
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
          "tur": "bosluk",
          "kart": 4,
          "soru": "Otomatik sıkıştırma, elle ___ yazdığında olan işin aynısını yapar.",
          "secenekler": [
            "/clear",
            "/context",
            "/rewind",
            "/compact"
          ],
          "dogru": 3,
          "ipucu": "Kartta sıkıştırmayı elle nasıl başlattığını hatırla.",
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
          "kart": 3,
          "soru": "CLAUDE.md'deki 'Durum diskte yaşar' kuralına göre önemli bir çıktı ne zaman diske yazılır?",
          "secenekler": [
            "Kapanışta, toplu olarak",
            "Bağlam 500 bini geçince",
            "Üretildiği anda, beklemeden",
            "Sen isteyince"
          ],
          "dogru": 2,
          "ipucu": "Kuralın kapanışı beklemek için ne dediğini hatırla.",
          "aciklama": "Kural durumun diskte yaşadığını söyler; önemli çıktı üretildiği anda yazılır, kapanış beklenmez.",
          "kaynak": {
            "adres": "CLAUDE.md:37",
            "okuma": "2026-11-17",
            "dayanak": "Durum diskte yaşar; önemli çıktı üretildiği anda diske yazılır, kapanış beklenmez.",
            "soz": "Durum diskte yaşar. Önemli çıktı üretildiği anda diske yazılır, kapanış beklenmez"
          }
        },
        {
          "id": "b09-d1-s6",
          "tur": "sirala",
          "kart": 1,
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
          "kart": 5,
          "soru": "CLAUDE.md'ye göre Claude kapanışı bağlam hangi büyüklüğü geçince önerir?",
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
            "okuma": "2026-11-17",
            "dayanak": "Claude kapanışı bağlam 500 bini geçince, sıradaki iş yeni sohbet isteyince ya da iş kalmayınca önerir.",
            "soz": "kapanışı bağlam 500 bini geçince"
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
        "/compact sohbeti o ana kadar özetler; yer açar ama ne üzerinde çalıştığını hatırlar. Aynı işe devam ediyorsan ve sınıra dayandıysan onu seç.",
        "/clear her şeyi kaldırır, sıfırdan başlarsın. Yeni bir işe başlıyorsan onu seç; eski sohbet yeni işe önyargı taşımasın.",
        "/context bağlamın boyunu, en çok yer kaplayan kategorileri ve bir dökümünü gösterir. Masaüstünde /context ve /compact'ı istem kutusuna yazarsın.",
        "Uzun oturumu toparlarken kursun önerisi: önce /context ile ölç, sonra işe göre /compact ya da /clear koş, sonra yeniden ölç.",
        "Odaklı sıkıştırma (compact with a focus): /compact'ın ardına odağı yazarsın, ör. /compact birim 9 yazımına odaklan. Özet, otomatik geçişin önemli sandığını değil senin seçtiğini tutar.",
        "Bizde her iş geçişinde bağlam ölçülür. is-gecisi skill'i: 'Bir saatten uzun aradan sonra 250 bin üstü bağlamla devam edilmez, yeni sohbet önerilir.'"
      ],
      "terimler": [
        {"tr": "odaklı sıkıştırma", "en": "compact with a focus", "aciklama": "/compact komutuna ne tutulacağını yazarak özeti senin seçtiğin konuya yöneltmek."}
      ],
      "sorular": [
        {
          "id": "b09-d2-s1",
          "tur": "coktan",
          "kart": 0,
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
          "kart": 1,
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
          "kart": 2,
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
          "kart": 1,
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
          "kart": 4,
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
          "kart": 5,
          "soru": "İki saat ara verdin ve bağlam 280 bin. is-gecisi'nin kuralına göre ne olur?",
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
            "okuma": "2026-11-17",
            "dayanak": "Bir saatten uzun aradan sonra 250 bin üstü bağlamla devam edilmez, yeni sohbet önerilir.",
            "soz": "Bir saatten uzun aradan sonra 250 bin üstü bağlamla devam edilmez, yeni sohbet önerilir."
          }
        },
        {
          "id": "b09-d2-s7",
          "tur": "sirala",
          "kart": 3,
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
        "Proje kökündeki CLAUDE.md sıkıştırmadan sonra diskten yeniden yüklenir, tam metniyle durur. Okunan ya da düzenlenen dosyalardan en son değişen beşe kadarı yeniden okunur.",
        "Kancaların daha önce eklediği bağlam ise sohbetin geri kalanıyla birlikte özetlenir.",
        "Buna karşılık kaynağı 'compact' olan açılış kancası (SessionStart hook) sıkıştırmadan sonra koşar. Çıktısı sıkıştırılmış bağlama eklenir.",
        "Bizim acilis.py bunu kullanır: kaynak 'compact' ise ve döngü işareti varsa saatin altına 'döngü sürüyor, sohbet özetlendi' satırını ekler.",
        "Önceden açılmış skill'lerin gövdesi de geri eklenir, ama skill başına ve toplamda bir üst sınırla. Sınır aşılınca en eski açılan önce düşer.",
        "Büyük skill kırpılır ve kırpma dosyanın başını tutar. Bu yüzden en önemli talimat SKILL.md'nin üstüne yazılır."
      ],
      "terimler": [
        {"tr": "açılış kancası", "en": "SessionStart hook", "aciklama": "Oturum başlarken ya da sıkıştırmadan sonra koşan, bağlama not ekleyebilen kanca."}
      ],
      "sorular": [
        {
          "id": "b09-d3-s1",
          "tur": "coktan",
          "kart": 0,
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
          "kart": 1,
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
          "tur": "bosluk",
          "kart": 2,
          "soru": "Kaynağı compact olan açılış kancası sıkıştırmadan ___ koşar; çıktısı sıkıştırılmış bağlama eklenir.",
          "secenekler": [
            "sonra",
            "önce",
            "sırasında"
          ],
          "dogru": 0,
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
          "kart": 4,
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
          "kart": 3,
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
            "okuma": "2026-11-17",
            "dayanak": "Olayın source alanı compact ise ve kökte .claude/dongu-baglam.json işareti varsa saatin altına bir satır eklenir.",
            "soz": "olayın \"source\" alanı \"compact\" ise ve kökte"
          }
        },
        {
          "id": "b09-d3-s6",
          "tur": "coktan",
          "kart": 3,
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
            "okuma": "2026-11-17",
            "dayanak": "Eklenen satır döngünün sürdüğünü, sohbetin özetlendiğini, devir kartı ile kuyruk dosyasının baştan okunacağını söyler.",
            "soz": "döngü sürüyor, sohbet özetlendi; devir kartı ve kuyruk dosyası baştan okunur"
          }
        },
        {
          "id": "b09-d3-s7",
          "tur": "bosluk",
          "kart": 5,
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
        "Oturum (session), bir proje klasörüne bağlı, kaydedilmiş bir sohbettir. Claude Code onu sen çalışırken sürekli kaydeder; çıksan da kaldığın yerden dönebilirsin.",
        "Terminalde 'claude --continue' bu klasördeki en son oturumu, 'claude --resume' oturum seçiciyi (session picker) açar. Masaüstünde ikisinin karşılığı kenar çubuğundaki listede bir oturuma tıklamaktır.",
        "'claude --resume oturum-adı' adı verilen oturumu doğrudan sürdürür. /resume ise açık oturumun içinden başka oturuma geçirir.",
        "Oturumu yeniden adlandırmak için onu açıp başlık çubuğundaki adına tıklarsın.",
        "Bağlamın doluluğunu yeni düzende oturum ayrıntıları panelindeki Context kartının başlığında yüzde olarak görürsün. İstem kutusuna /context yazınca kategori dökümü gelir.",
        "Bizde her sohbete numaralı ad verilir: açılışta 'N · açılış', kapanışta 'N · iş adı'. N sohbetin numarasıdır.",
        "Adı elle verdiysen acilis skill'ine göre seninki esas kalır. Açıklayıcı ad, oturumu listede bulmanı kolaylaştırır."
      ],
      "terimler": [
        {"tr": "oturum", "en": "session", "aciklama": "Bir proje klasörüne bağlı, sürekli kaydedilen sohbet; kaldığın yerden sürdürülebilir."},
        {"tr": "oturum seçici", "en": "session picker", "aciklama": "Terminalde eski oturumlardan birini seçip açtığın liste."}
      ],
      "sorular": [
        {
          "id": "b09-d4-s1",
          "tur": "eslestir",
          "kart": 2,
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
          "kart": 1,
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
          "kart": 0,
          "soru": "Claude Code'dan çıkınca oturum kaybolur; kaldığın yere dönemezsin.",
          "dogru": false,
          "ipucu": "Kartın oturumun kaydedilmesi hakkında ne dediğini hatırla.",
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
          "kart": 3,
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
          "kart": 4,
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
          "kart": 5,
          "soru": "acilis skill'inde ad set_session_title ile 'N · açılış' yapılır. 190 numaralı sohbeti açtın; oturumun adı ne olur?",
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
            "okuma": "2026-11-17",
            "dayanak": "Açılışta ad set_session_title ile 'N · açılış' yapılır, N sohbetin numarasıdır.",
            "soz": "Ad `set_session_title` ile \"N · açılış\""
          }
        },
        {
          "id": "b09-d4-s7",
          "tur": "bosluk",
          "kart": 6,
          "soru": "acilis skill'ine göre oturumun adını elle verdiysen ___ esas kalır.",
          "secenekler": [
            "açılışın verdiği ad",
            "senin verdiğin ad",
            "en son verilen ad"
          ],
          "dogru": 1,
          "ipucu": "İki ad çakışınca kimin seçiminin kaldığını düşün.",
          "aciklama": "Skill açıkça söyler: adı elle verdiysen seninki esastır.",
          "kaynak": {
            "adres": ".claude/skills/acilis/SKILL.md:12",
            "okuma": "2026-11-17",
            "dayanak": "Kullanıcı adı elle verdiyse onun verdiği ad esastır.",
            "soz": "kullanıcı adı elle verdiyse onunki esas"
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
        "Claude Code, bir tur başlatan her istemden önce kodun halini kaydeder; buna geri sarma noktası (checkpoint) denir. Bunlar sohbetle kaydedilir, sürdürdüğün oturumda da durur.",
        "Geri dönmek için /rewind yazarsın ya da istem kutusu boşken iki kez Esc'ye basarsın. Menüde gönderdiğin istemler listelenir; birini seçip ne yapılacağını seçersin.",
        "Üç geri alma seçeneği var: kodu ve sohbeti birlikte, yalnız sohbeti (kod kalır) ya da yalnız kodu (sohbet kalır) geri al.",
        "Özetleme seçenekleri de var: buradan sonrasını ya da buraya kadarını özetle. Dosyalara dokunmaz, bağlamda yer açar; hedefli bir /compact gibidir.",
        "Claude Code, Claude'un dosya düzenlemelerini kendiliğinden izler. Yalnız kabuk komutuyla (Bash) değişen dosya izlenmez, olduğu gibi kalır.",
        "Alt ajanın düzenlediği öteki dosyalar da genelde geri gelmez. Bunlar için git gibi sürüm denetimi gerekir.",
        "Bizim kural: CLAUDE.md'de 'klasör git ile tutulur, her iş bitince commit atılır' satırı var.",
        "Geri sarma noktası oturum içi hızlı kurtarmadır, git'in yerini tutmaz. Kalıcı geçmiş için git kullanılmaya devam edilir."
      ],
      "terimler": [
        {"tr": "geri sarma noktası", "en": "checkpoint", "aciklama": "Bir tur başlatan her istemden önce kodun kaydedilen hali; geri sarınca buna dönülür."},
        {"tr": "geri sarma", "en": "rewind", "aciklama": "Kodu, sohbeti ya da ikisini birden önceki bir istemin noktasına döndürmek."}
      ],
      "sorular": [
        {
          "id": "b09-d5-s1",
          "tur": "coktan",
          "kart": 1,
          "soru": "Geri sarma menüsünü nasıl açarsın?",
          "secenekler": [
            "/clear yazıp sohbeti sıfırlayarak",
            "/rewind ya da boş kutuda çift Esc ile",
            "Oturumu arşivleyip kenar çubuğundan yeniden açarak",
            "/context yazıp listeden istem seçerek"
          ],
          "dogru": 1,
          "ipucu": "Kartta geri dönmenin nasıl başlatıldığını hatırla.",
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
          "kart": 3,
          "soru": "Menü seçeneğini sonucuyla eşleştir.",
          "ciftler": [
            ["Kodu ve sohbeti geri al (Restore code and conversation)", "İkisi de döner"],
            ["Sohbeti geri al (Restore conversation)", "Kod kalır"],
            ["Kodu geri al (Restore code)", "Sohbet kalır"],
            ["Buradan sonrasını özetle (Summarize from here)", "Yer açılır"]
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
          "kart": 4,
          "soru": "Claude'un yalnız kabuk komutuyla (Bash) değiştirdiği bir dosyayı /rewind geri getirir.",
          "dogru": false,
          "ipucu": "Geri sarma noktasının hangi araçla yapılan değişikliği izlediğini düşün.",
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
          "tur": "bosluk",
          "kart": 0,
          "soru": "Geri sarma noktaları ___ birlikte kaydedilir; bu yüzden oturuma sonradan dönsen de geri sarabilirsin.",
          "secenekler": [
            "sohbetle",
            "git geçmişiyle",
            "proje ayarlarıyla"
          ],
          "dogru": 0,
          "ipucu": "Geri sarma noktasının neyle birlikte kaydedildiğini düşün.",
          "aciklama": "Geri sarma noktaları sohbetle kaydedildiği için sürdürdüğün oturumda da geri sarabilirsin.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code geri sarma noktalarını sohbetle birlikte kaydeder, bu yüzden oturumu sürdürdükten sonra da /rewind koşabilirsin."
          }
        },
        {
          "id": "b09-d5-s5",
          "tur": "coktan",
          "kart": 5,
          "soru": "Bir alt ajan, Claude'un bu sohbette hiç düzenlemediği dosyaları değiştirdi. /rewind bu değişiklikleri geri alır mı?",
          "secenekler": [
            "Evet, her düzenleme geri sarma noktasında durur",
            "Evet, ama yalnız sohbeti geri al seçilirse",
            "Hayır, alt ajanın düzenlemeleri kalır, git gerekir",
            "Evet, ama yalnız ilk 30 günde"
          ],
          "dogru": 2,
          "ipucu": "Alt ajanın düzenlemelerinin senin oturumunun geri sarma noktalarına girip girmediğini düşün.",
          "aciklama": "Alt ajanın öteki dosyalardaki düzenlemeleri geri sarma noktasına girmez ve kalır; bunları git ile geri alırsın.",
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
          "kart": 7,
          "soru": "Bizde her iş bitince commit atılır. Geri sarma noktası varken bu neden hâlâ gerekli?",
          "secenekler": [
            "Geri sarma noktası oturum içi kurtarmadır; kalıcı geçmiş git'te",
            "Geri sarma noktası yalnız sohbeti geri alır, kodu hiç almaz",
            "Geri sarma noktası kalıcıdır; commit atmak yalnız bir alışkanlıktır"
          ],
          "dogru": 0,
          "ipucu": "Geri sarma noktasının ne kadar süreli bir kurtarma için tasarlandığını düşün.",
          "aciklama": "Belge geri sarma noktalarını oturum düzeyinde hızlı kurtarma diye tanımlar; kalıcı geçmiş için git kullanılmaya devam edilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Geri sarma noktaları oturum düzeyinde hızlı kurtarma içindir; kalıcı sürüm geçmişi için git gibi sürüm denetimi kullanılmaya devam edilir."
          }
        },
        {
          "id": "b09-d5-s7",
          "tur": "coktan",
          "kart": 6,
          "soru": "CLAUDE.md'ye göre bizde commit ne zaman atılır?",
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
            "okuma": "2026-11-17",
            "dayanak": "Klasör git ile tutulur, her iş bitince commit atılır.",
            "soz": "klasör git ile tutulur, her iş bitince commit atılır"
          }
        },
        {
          "id": "b09-d5-s8",
          "tur": "sirala",
          "kart": 2,
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
        "CLAUDE.md'ye göre işe başlamadan devir kartı ve DURUM.md okunur. Açılışta acilis skill'i devir kartını, açık işleri ve son kararları okur.",
        "Bir iş bitip sıradakine geçerken is-gecisi, sen 'sohbeti kapatıyoruz' deyince kapanis açılır. Sen yokken kuyruktan iş koşan döngüde, kayıtların güncellendiği kayıt noktasında dongu açılır.",
        "Kapanışın sırası: devir testi, devir kartı ve DURUM.md, KARARLAR.md, denetim, commit, kapanış mesajı.",
        "Oturumun geçici alanı, indirilen dosyaların durduğu ve sohbet bitince silinen yerdir. Kapanıştaki devir testi, devam etmek için neyin gerektiğini sorar ve gerekeni diske indirir.",
        "Devir kartını kapanış yazar, sonraki açılış okur. Sonraki adım satırı sıradaki işi, Bitti sayılır onun bitti ölçütünü yazar.",
        "Bitti satırı kapanan işi ve kaynak yolunu, Açık yalnız bu oturumdan kalanı, Neden gerekçeyi yazar. Beyin, sıradaki ana oturumun modelini ve eforunu (çaba düzeyi) yazar.",
        "İş geçişinde bağlam ölçülür. 500 bin üstünde yeni işten önce kapanış önerilir.",
        "300 ile 500 bin arasında kapanış yalnız sıradaki iş birden çok ajanlı büyük işse önerilir, öteki işler sürer.",
        "Saat damgası kancası (UserPromptSubmit) 300 ve 500 bin aşılınca eşik başına bir kez 'Bağlam:' satırı basar. Kancanın dosyası saat_damgasi.py."
      ],
      "terimler": [
        {"tr": "kullanıcı turu kancası", "en": "UserPromptSubmit", "aciklama": "Her kullanıcı mesajında koşan kanca olayı; saat_damgasi.py bununla bağlama saat ve gerekirse bağlam satırı ekler."}
      ],
      "sorular": [
        {
          "id": "b09-d6-s1",
          "tur": "eslestir",
          "kart": 1,
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
            "okuma": "2026-11-17",
            "dayanak": "is-gecisi bir iş bitip sıradakine geçilirken açılır, oturum açılışında acilis, kapanışta kapanis, döngünün kayıt noktasında dongu kullanılır.",
            "soz": "Oturum açılışında (acilis), kapanışta (kapanis), döngünün kayıt noktasında (dongu)"
          }
        },
        {
          "id": "b09-d6-s2",
          "tur": "coktan",
          "kart": 4,
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
            "okuma": "2026-11-17",
            "dayanak": "Sonraki adım satırı iş adıyla ve işin kaynak kararının numarasıyla yazılır, sıradaki iş yoksa 'Sonraki adım: yok' yazılır.",
            "soz": "iş adıyla ve işin kaynak kararının numarasıyla"
          }
        },
        {
          "id": "b09-d6-s3",
          "tur": "eslestir",
          "kart": 5,
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
            "okuma": "2026-11-17",
            "dayanak": "Bitti satırı kapanan işi ve kaynak dosya yolunu, Açık satırı yalnız bu oturumdan kalan işi, Neden satırı kararların gerekçesini, Beyin satırı sıradaki sohbetin modelini ve eforunu taşır.",
            "soz": "kapanan iş ve kaynak dosya yolu"
          }
        },
        {
          "id": "b09-d6-s4",
          "tur": "coktan",
          "kart": 6,
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
            "okuma": "2026-11-17",
            "dayanak": "500 bin üstü bağlamda yeni işten önce kapanış önerilir.",
            "soz": "500 bin üstü: yeni işten önce kapanış önerilir."
          }
        },
        {
          "id": "b09-d6-s5",
          "tur": "coktan",
          "kart": 7,
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
            "okuma": "2026-11-17",
            "dayanak": "300-500 bin arasında kapanış yalnız sıradaki iş birden çok ajanlı büyük işse önerilir, öteki işler sürer.",
            "soz": "300-500 bin: kapanış yalnız sıradaki iş birden çok ajanlı büyük işse önerilir"
          }
        },
        {
          "id": "b09-d6-s6",
          "tur": "dogru-yanlis",
          "kart": 8,
          "soru": "saat_damgasi.py bağlam 300 bini aştıktan sonra her turda yeniden 'Bağlam:' satırı basar.",
          "dogru": false,
          "ipucu": "Kancanın aynı eşik için kaç kez yazdığına bak.",
          "aciklama": "Satır eşik başına bir kez basılır; bağlam eşiğin altına inip yeniden aşmadıkça tekrarlanmaz.",
          "kaynak": {
            "adres": ".claude/hooks/saat_damgasi.py:12",
            "okuma": "2026-11-17",
            "dayanak": "Satır eşik başına bir kez basılır, bağlam o satırdan sonra eşiğin altına inmediyse yeniden basılmaz.",
            "soz": "Eşik başına bir kez: dökümde"
          }
        },
        {
          "id": "b09-d6-s7",
          "tur": "bosluk",
          "kart": 0,
          "soru": "CLAUDE.md'ye göre işe başlamadan devir kartı ve ___ okunur.",
          "secenekler": [
            "SKILL.md",
            "README.md",
            "DURUM.md"
          ],
          "dogru": 2,
          "ipucu": "Kartta işe başlamadan neyin okunduğunu hatırla.",
          "aciklama": "Satır işe başlamadan proje-baglam skill'inin, devir kartının ve DURUM.md'nin okunmasını ister.",
          "kaynak": {
            "adres": "CLAUDE.md:91",
            "okuma": "2026-11-17",
            "dayanak": "İşe başlamadan proje-baglam skill'i, devir kartı ve DURUM.md okunur.",
            "soz": "İşe başlamadan proje-baglam skill'ini, devir kartını"
          }
        },
        {
          "id": "b09-d6-s8",
          "tur": "coktan",
          "kart": 3,
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
            "okuma": "2026-11-17",
            "dayanak": "Sonraki iş kaynak metin üstünde çalışacaksa kaynak da diske iner.",
            "soz": "Sonraki iş kaynak metin üstünde çalışacaksa kaynak da diske iner"
          }
        },
        {
          "id": "b09-d6-s9",
          "tur": "sirala",
          "kart": 2,
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
            "adres": ".claude/skills/kapanis/SKILL.md:3",
            "okuma": "2026-11-17",
            "dayanak": "Kapanış sırasıyla devir testi, devir kartı ve DURUM, KARARLAR kaydı, denetim, commit ve kapanış mesajından oluşur.",
            "soz": "devir testi, devir kartı (Last-Session üst kartı) ve DURUM açık işler, KARARLAR kaydı, denetim, commit ve kullanıcıya kapanış mesajı"
          }
        }
      ]
    }
  ]
});
