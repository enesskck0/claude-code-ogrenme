// icerik/birim-09.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b09",
  "sira": 9,
  "baslik": "Oturum yönetimi ve bağlam",
  "amac": "Uzun bir sohbette bağlamın nasıl dolup sıkıştırıldığını, eski oturuma ve önceki bir istemin noktasına dönmeyi, bizim açılış, iş geçişi ve kapanış düzenimizi öğrenirsin; bir şey ters gidince hangi parçaya bakacağını bilirsin.",
  "dersler": [
    {
      "id": "b09-d1",
      "baslik": "Bağlam dolunca: sıkıştırma (compaction)",
      "hedefler": [
        "Bağlamı neyin doldurduğunu ve dolunca oturumun neden sürdüğünü anlatabilir.",
        "Sıkıştırmadan sonra neyin kalıp neyin kaybolabileceğini ayırt edebilir.",
        "Bizim 'Durum diskte yaşar' kuralının ve kapanıştaki devrin neden önemli olduğunu anlatabilir."
      ],
      "anlatim": [
        "Bağlam penceresi (context window) Claude'un bu oturumdaki sınırlı çalışma belleğidir. Yazdığın her istem, okuduğu her dosya ve koştuğu her komutun çıktısı orada yer kaplar.",
        "Sınıra yaklaşınca Claude Code sohbeti kendiliğinden sıkıştırır: eski konuşmayı özetler, gereksiz araç çıktılarını atar. Oturum bitmez, iş sürer.",
        "Sıkıştırmanın bedeli var: özette ayrıntı kaybolabilir. Diskteki dosyalar ise özetlenmez, yerinde durur.",
        "Bizim kural da buna dayanır: CLAUDE.md'de 'Durum diskte yaşar. Önemli çıktı üretildiği anda diske yazılır, kapanış beklenmez' satırı var.",
        "Bizde ayrıca bir eşik var: CLAUDE.md'ye göre Claude kapanışı bağlam 500 bini geçince önerir. Yarım iş devir kartıyla yeni sohbete aktarılır."
      ],
      "terimler": [
        {
          "tr": "sıkıştırma",
          "en": "compaction",
          "aciklama": "Bağlam dolarken sohbet geçmişinin özetlenip yer açılması."
        },
        {
          "tr": "bağlam penceresi",
          "en": "context window",
          "aciklama": "Claude'un oturumda bildiği her şeyin durduğu, sınırlı çalışma belleği."
        }
      ],
      "sorular": [
        {
          "id": "b09-d1-s1",
          "tur": "coktan",
          "kart": 1,
          "soru": "Düzenleme sürerken bağlam %95'e çıktı. Sen karışmazsan ne olur?",
          "secenekler": [
            "Oturum %100'de kapanır, düzenleme yarım kalır",
            "Sohbet kendiliğinden toparlanır, iş sürer",
            "Claude eski dosyaları silip yer açar"
          ],
          "dogru": 1,
          "ipucu": "Dolan bağlamın oturumu bitirip bitirmediğini düşün.",
          "aciklama": "Sınıra yaklaşınca Claude Code sohbeti kendiliğinden sıkıştırır; oturum bitmez, düzenleme sürer. Dosyalara dokunulmaz, araya girmen gerekmez.",
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
          "soru": "Claude bir saat önce koşan testin çıktısını artık ayrıntısıyla hatırlamıyor. En olası neden?",
          "secenekler": [
            "Bağlam sıkıştırıldı, eski çıktı atıldı",
            "Çıktılar bir saat sonra silinir",
            "Oturum arka planda yeniden başladı"
          ],
          "dogru": 0,
          "ipucu": "Bağlam dolunca hangi çıktıların gözden çıkarıldığını düşün.",
          "aciklama": "Bağlam sınıra gelince sohbet sıkıştırılır: eski konuşma özetlenir, gereksiz sayılan araç çıktıları atılır. Ayrıntı gerekiyorsa testi yeniden koşturursun.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/context-management",
            "kopya": "ders-101-06-context-management.md",
            "okuma": "2026-11-15",
            "dayanak": "Sıkıştırma önemli ayrıntıları özetler ve gereksiz araç çağrısı sonuçlarını çıkararak yer açar."
          }
        },
        {
          "id": "b09-d1-s5",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Claude yarım saatlik bir araştırmanın sonucunu yalnız sohbete yazdı. Kurala göre sonuç ___ bir dosyaya yazılmalı.",
          "secenekler": [
            "şimdi",
            "kapanışta",
            "500 bin geçince"
          ],
          "dogru": 0,
          "ipucu": "Kuralın kapanışı beklemek için ne dediğini hatırla.",
          "aciklama": "Kural önemli çıktının üretildiği anda diske yazılmasını ister, kapanışı beklemez. Sohbet sıkıştırılır ya da kapanırsa yalnız sohbette duran sonuç kaybolabilir.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Satır, durumun diskte yaşadığını, önemli çıktının üretildiği anda diske yazıldığını ve kapanışın beklenmediğini söyler.",
            "soz": "Durum diskte yaşar. Önemli çıktı üretildiği anda diske yazılır, kapanış beklenmez"
          }
        },
        {
          "id": "b09-d1-s6",
          "tur": "coktan",
          "kart": 0,
          "soru": "Sen yalnız üç kısa mesaj yazdın, ama bağlam yarıya geldi. En olası kaynak ne?",
          "secenekler": [
            "Yüzde zamanla kendiliğinden artar",
            "Klasördeki bütün dosyalar, okunmasa da",
            "Hesaptaki eski sohbetler",
            "Claude'un okuduğu dosyalar ve komut çıktıları"
          ],
          "dogru": 3,
          "ipucu": "Senin yazdıkların dışında bağlama neyin girdiğini düşün.",
          "aciklama": "Bağlamda yalnız mesajların değil, Claude'un okuduğu her dosya ve koştuğu her komutun çıktısı da yer kaplar. Okunmayan dosyalar ve başka sohbetler girmez; yüzde zamanla değil içerikle artar.",
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
          "kart": 4,
          "soru": "İş yarıda ama bağlam 500 bini geçti; kapanışı kabul ettin. Yarım iş yeni sohbete nasıl geçer?",
          "secenekler": [
            "Geçmez; baştan anlatırsın",
            "Kapanışta yazılan kartla",
            "Sohbet olduğu gibi kopyalanır"
          ],
          "dogru": 1,
          "ipucu": "Kapanışın yarım işi yeni sohbete nasıl taşıdığını düşün.",
          "aciklama": "Claude kapanışı bağlam 500 bini geçince önerir; yarım iş devir kartına yazılır ve sonraki sohbet oradan sürer. Öneriyi kabul etmek işi kaybettirmez.",
          "kaynak": {
            "adres": ".claude/skills/kapanis/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Kapanış devir kartının Açık satırına yalnız bu oturumdan kalan işi yazar; sonraki açılış kartı okur.",
            "soz": "yalnız bu oturumdan kalan iş"
          }
        },
        {
          "id": "b09-d1-s8",
          "tur": "coktan",
          "kart": 2,
          "soru": "Sohbet sıkıştırıldı. Claude 'düzenlemeler kaybolmuş olabilir, baştan yapayım mı?' diye sordu. Ne dersin?",
          "secenekler": [
            "Evet; sıkıştırma onları da özetledi",
            "Hayır; düzenlemeler dosyalarda duruyor",
            "Evet; dosyalar sohbetin başındaki haline döndü"
          ],
          "dogru": 1,
          "ipucu": "Sıkıştırmanın neye dokunduğunu, neye dokunmadığını düşün.",
          "aciklama": "Sıkıştırma yalnız sohbet geçmişini özetler; diskteki dosyalar yerinde durur. Baştan düzenlemek boşuna iş ve yeni hata riski demektir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Sıkıştırmadan sonra okunan ya da düzenlenen dosyalardan en son değişen beşe kadarı diskten yeniden okunur; dosyalar sohbet gibi özetlenmez."
          }
        }
      ]
    },
    {
      "id": "b09-d2",
      "baslik": "/compact, /clear ve /context",
      "hedefler": [
        "Aynı işe devam ederken /compact, ilgisiz yeni işe geçerken /clear seçmeyi ayırt edebilir.",
        "/context'in yalnız gösterdiğini, yer açmadığını anlatabilir.",
        "/compact'a odak yazmanın ne işe yaradığını anlatabilir.",
        "Uzun bir aradan sonra yeni sohbetin ne zaman önerildiğini anlatabilir."
      ],
      "anlatim": [
        "/compact sohbeti o ana kadar özetler; yer açar ama ne üzerinde çalıştığını hatırlar. Aynı işe devam ediyorsan ve sınıra dayandıysan onu seç.",
        "/clear her şeyi kaldırır, sıfırdan başlarsın. Yeni bir işe başlıyorsan onu seç; eski sohbet yeni işe önyargı taşımasın.",
        "/context bağlamın boyunu, en çok yer kaplayan kategorileri ve bir dökümünü gösterir. Masaüstünde onu istem kutusuna yazarsın.",
        "Odaklı sıkıştırma (compact with a focus): /compact'ın ardına neyin tutulacağını yazarsın, ör. /compact fiyat tablosu işine odaklan. Özet senin seçtiğini tutar.",
        "Bizde her iş geçişinde bağlam ölçülür. is-gecisi skill'i: 'Bir saatten uzun aradan sonra 250 bin üstü bağlamla devam edilmez, yeni sohbet önerilir.'"
      ],
      "terimler": [
        {
          "tr": "odaklı sıkıştırma",
          "en": "compact with a focus",
          "aciklama": "/compact komutuna ne tutulacağını yazarak özeti senin seçtiğin konuya yöneltmek."
        }
      ],
      "sorular": [
        {
          "id": "b09-d2-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Site metninin ilk bölümü bitti, ikincisi aynı işin devamı. Bağlam %80. Ne yaparsın?",
          "secenekler": [
            "/clear yazarsın",
            "/compact yazarsın",
            "Yeni sohbet açarsın"
          ],
          "dogru": 1,
          "ipucu": "Yer açarken yarım işin hatırasını tutan yolu düşün.",
          "aciklama": "/compact sohbeti özetleyip yer açar ama ne üzerinde çalıştığını hatırlar; aynı işe devamda doğru seçim odur. /clear işi de unutturur.",
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
          "soru": "Fiyat listesi işi bitti; bağlam yalnız %20 dolu. Şimdi ilgisiz bir işe, müşteri mesajı taslağına geçeceksin. Ne yaparsın?",
          "secenekler": [
            "Aynı sohbette sürersin",
            "/compact yazarsın",
            "/clear yazarsın"
          ],
          "dogru": 2,
          "ipucu": "Burada sorunun yer darlığı olup olmadığını düşün.",
          "aciklama": "/clear her şeyi kaldırır; ilgisiz yeni işe geçerken eski sohbetin yeni işe önyargı taşımaması için seçilir, bağlam boş olsa da.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/context-management",
            "kopya": "ders-101-06-context-management.md",
            "okuma": "2026-11-15",
            "dayanak": "Yeni bir özelliğe başlarken /clear kullanılır, çünkü önceki sohbetin yeni işe önyargı katması istenmez."
          }
        },
        {
          "id": "b09-d2-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bağlam %85 iken /context yazdın; ardından yüzde hiç düşmedi. Neden?",
          "secenekler": [
            "Yer açma bir sonraki mesajında başlar",
            "/context yalnız durumu gösterir, yer açmaz",
            "Yüzde ancak %90 geçilince düşer",
            "/context masaüstünde çalışmaz"
          ],
          "dogru": 1,
          "ipucu": "Komutun bir şeyi değiştirip değiştirmediğini düşün.",
          "aciklama": "/context bağlamın boyunu ve en çok yer kaplayan kategorileri gösterir; yer açmak için /compact ya da /clear gerekir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/context-management",
            "kopya": "ders-101-06-context-management.md",
            "okuma": "2026-11-15",
            "dayanak": "/context komutu bağlam boyunun genel görünümünü, en çok yer kaplayan kategorileri ve dökümü gösteren bir görsel verir."
          }
        },
        {
          "id": "b09-d2-s4",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Bir komuttan sonra Claude bir saattir denediğiniz yolları bilmiyor, özet de yok; yazılan komut büyük olasılıkla ___.",
          "secenekler": [
            "/clear",
            "/compact",
            "/context"
          ],
          "dogru": 0,
          "ipucu": "Hangi komutun hiçbir özet bırakmadığını düşün.",
          "aciklama": "/clear her şeyi kaldırır ve özet bırakmaz; /compact ne üzerinde çalıştığını tutar, /context yalnız gösterir.",
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
          "kart": 3,
          "soru": "Sohbette müşteri taslağı ve site renkleri konuşuldu; sırada yalnız taslak var. /compact koşacaksın. En iyisi?",
          "secenekler": [
            "/compact, sonra 'taslağa dönelim' demek",
            "/compact müşteri taslağına odaklan",
            "/clear, sonra taslağı yeniden anlatmak"
          ],
          "dogru": 1,
          "ipucu": "Özetin yönünü ne zaman ve nereye yazdığın belirler.",
          "aciklama": "/compact'ın ardına neyin tutulacağını yazınca özet, otomatik seçimin önemli sandığını değil senin seçtiğini tutar. Sonradan söylemek özette düşen ayrıntıyı geri getirmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "/compact komutuna talimat yazınca özet, otomatik geçişin önemli sandığını değil senin seçtiğini tutar."
          }
        },
        {
          "id": "b09-d2-s6",
          "tur": "bosluk",
          "kart": 4,
          "soru": "İki saatlik aradan sonra döndün; bağlam 280 bin. Kurala göre ___.",
          "secenekler": [
            "300 binin altında, iş sürer",
            "yeni sohbete geçmek önerilir",
            "önce /compact koşulur, iş sürer"
          ],
          "dogru": 1,
          "ipucu": "Hem aranın süresine hem bağlamın büyüklüğüne bak.",
          "aciklama": "Ara bir saatten uzun ve bağlam 250 binin üstünde; kural bu durumda aynı sohbette sürmeyi değil yeni sohbeti önerir.",
          "kaynak": {
            "adres": ".claude/skills/is-gecisi/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Bir saatten uzun aradan sonra 250 bin üstü bağlamla devam edilmez, yeni sohbet önerilir.",
            "soz": "Bir saatten uzun aradan sonra 250 bin üstü bağlamla devam edilmez, yeni sohbet önerilir."
          }
        }
      ]
    },
    {
      "id": "b09-d3",
      "baslik": "Sıkıştırmada ne kalır",
      "hedefler": [
        "Sıkıştırmadan sonra diskten yeniden gelen ile özetlenen şeyi ayırt edebilir.",
        "Sıkıştırmadan sonra açılış kancasının neden yeniden koştuğunu anlatabilir.",
        "Bir skill'in sıkıştırmadan sonra neden eksik uygulanabileceğini anlatabilir."
      ],
      "anlatim": [
        "Proje kökündeki CLAUDE.md sıkıştırmadan sonra diskten yeniden yüklenir. Okunan ya da düzenlenen dosyalardan en son değişen beşe kadarı da yeniden okunur.",
        "Kancaların önceden eklediği notlar sohbetle birlikte özetlenir. Kaynağı 'compact' olan açılış kancası (SessionStart hook) ise sıkıştırmadan sonra yeniden koşar.",
        "Döngüde (sen yokken kuyruktan iş koşan düzen) acilis.py bunu kullanır: özetten sonra kuyruk dosyası baştan okunur, iş Sonuç hücresi boş işten sürer.",
        "Önceden açılmış skill'lerin gövdesi de geri eklenir, ama skill başına ve toplamda bir üst sınırla. Sınır aşılınca en eski açılan önce düşer.",
        "Büyük skill kırpılır ve kırpma dosyanın başını tutar. Bu yüzden en önemli talimat SKILL.md'nin üstüne yazılır."
      ],
      "terimler": [
        {
          "tr": "açılış kancası",
          "en": "SessionStart hook",
          "aciklama": "Oturum başlarken ya da sıkıştırmadan sonra koşan, bağlama not ekleyebilen kanca."
        }
      ],
      "sorular": [
        {
          "id": "b09-d3-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Açılışta bir kancanın eklediği uyarı vardı; sıkıştırmadan sonra Claude uyarının ayrıntısını bilmiyor. Neden?",
          "secenekler": [
            "Kanca sıkıştırmada kapandı, not silindi",
            "Not konuşmayla birlikte özetlendi",
            "Notlar diskten okunur; dosya değişti"
          ],
          "dogru": 1,
          "ipucu": "Kanca notunun diskte mi, konuşmanın içinde mi durduğunu düşün.",
          "aciklama": "Kancaların önceden eklediği notlar konuşmanın parçasıdır, sohbetle birlikte özetlenir; diskten yeniden yüklenmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Kancaların daha önce eklediği bağlam, sohbetin geri kalanıyla birlikte özetlenir."
          }
        },
        {
          "id": "b09-d3-s3",
          "tur": "coktan",
          "kart": 1,
          "soru": "Sohbet sıkıştırıldıktan hemen sonra bir açılış kancası koştu; oturum yeni açılmadı. Bu olağan mı?",
          "secenekler": [
            "Olağan; sıkıştırma da kancayı tetikler",
            "Değil; açılış kancası yalnız açılışta koşar",
            "Değil; kanca bozuk"
          ],
          "dogru": 0,
          "ipucu": "Açılış kancasının hangi durumlarda koştuğunu düşün.",
          "aciklama": "Kaynağı 'compact' olan açılış kancası sıkıştırmadan sonra da koşar ve çıktısını sıkıştırılmış bağlama ekler; bu olağandır, kanca bozuk değildir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "compact kaynağıyla eşleşen açılış kancalarını Claude Code koşar ve çıktılarını sıkıştırılmış bağlama ekler."
          }
        },
        {
          "id": "b09-d3-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "Altı skill sırayla açıldı. Sıkıştırmadan sonra ilk açılanın adımları uygulanmıyor, ötekiler yerinde. Neden?",
          "secenekler": [
            "Toplam sınıra sığmadı, en eskisi düştü",
            "İlk skill'in işi bitti sayıldı",
            "İlk skill sohbetle birlikte özetlendi"
          ],
          "dogru": 0,
          "ipucu": "Skill'lerin geri eklenirken bir sınıra takılıp takılmadığını düşün.",
          "aciklama": "Açılmış skill'ler sıkıştırmadan sonra skill başına ve toplamda bir sınırla geri eklenir; sınır aşılınca en eski açılan önce düşer. Gerekirse o skill'i yeniden açtırırsın.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Sıkıştırmadan sonra açılmış skill gövdeleri skill başına ve toplamda bir sınırla yeniden eklenir; sınır aşılınca en eski açılan önce düşer."
          }
        },
        {
          "id": "b09-d3-s6",
          "tur": "coktan",
          "kart": 2,
          "soru": "Döngüde sohbet özetlendi; Claude kuyrukta bitmiş bir işi yeniden yapıyor. Ne hatırlatırsın?",
          "secenekler": [
            "Özette bitti denmeyen ilk işe geçmesini",
            "Kuyruğu baştan okuyup Sonuç'u boş işe geçmesini",
            "Kuyruktaki ilk işten yeniden başlamasını"
          ],
          "dogru": 1,
          "ipucu": "Özetten sonra hangi dosyanın baştan okunduğunu düşün.",
          "aciklama": "acilis.py döngüde özetten sonra devir kartı ile kuyruk dosyasının baştan okunmasını, işin Sonuç hücresi boş işten sürmesini söyler. Özet hangi işin bittiğini kaybedebilir.",
          "kaynak": {
            "adres": ".claude/hooks/acilis.py",
            "okuma": "2026-11-24",
            "dayanak": "Döngüde sohbet özetlenince eklenen satır devir kartı ile kuyruk dosyasının baştan okunacağını ve işin Sonuç hücresi boş işten süreceğini söyler.",
            "soz": "devir kartı ve kuyruk dosyası baştan okunur, iş Sonuç hücresi boş işten sürer"
          }
        },
        {
          "id": "b09-d3-s7",
          "tur": "coktan",
          "kart": 4,
          "soru": "Uzun bir skill'in son kuralı sıkıştırmadan sonra uygulanmıyor, baştakiler uygulanıyor. Kaynağı ne?",
          "secenekler": [
            "Son kural başka bir skill'deki kuralla çelişti",
            "Skill kırpıldı, yalnız başı geri geldi",
            "Sıkıştırma skill'in sonunu sildi"
          ],
          "dogru": 1,
          "ipucu": "Kırpmanın dosyanın hangi ucunu tuttuğunu düşün.",
          "aciklama": "Büyük skill sıkıştırmadan sonra kırpılarak geri eklenir ve kırpma dosyanın başını tutar; en önemli kural bu yüzden üste yazılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Kırpma dosyanın başını tuttuğu için en önemli talimatlar SKILL.md'nin üstüne yakın yazılmalıdır."
          }
        },
        {
          "id": "b09-d3-s8",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Sıkıştırmadan sonra Claude sabah düzenlediği bir dosyayı yeniden açtı. Bu ___.",
          "secenekler": [
            "bir hata; düzenlenen her dosya geri gelir",
            "olağan; yalnız en son birkaç dosya kendiliğinden gelir",
            "bir hata; dosya sıkıştırmada bozuldu"
          ],
          "dogru": 1,
          "ipucu": "Sıkıştırmadan sonra kaç dosyanın kendiliğinden geri geldiğini düşün.",
          "aciklama": "Sıkıştırmadan sonra okunan ya da düzenlenen dosyalardan yalnız en son değişen beşe kadarı yeniden okunur; daha eskisi gerekince Claude onu yeniden açar. Bu bir hata değildir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Sayfadaki tabloya göre sıkıştırmadan sonra okunan ya da düzenlenen dosyalardan en son değişen beşe kadarı yeniden okunur."
          }
        }
      ]
    },
    {
      "id": "b09-d4",
      "baslik": "Oturuma devam ve adlandırma",
      "hedefler": [
        "Kapanan ya da /clear ile sıfırlanan oturuma dönülebildiğini anlatabilir.",
        "Masaüstünde eski oturuma dönmeyi ve bağlam doluluğunu görmeyi anlatabilir.",
        "Oturum adından o sohbette kapanışın koşup koşmadığını ayırt edebilir."
      ],
      "anlatim": [
        "Oturum (session), bir proje klasörüne bağlı, kaydedilmiş bir sohbettir. Claude Code onu sürekli kaydeder; uygulamadan çıksan ya da /clear yazsan da ona dönebilirsin.",
        "Masaüstünde eski bir oturuma dönmek için kenar çubuğundaki listede ona tıklarsın. Terminaldeki 'claude --resume' ve 'claude --continue' komutlarının karşılığı budur.",
        "Bağlamın doluluğunu oturum ayrıntıları panelindeki Context kartının başlığında yüzde olarak görürsün. Kategori dökümü için istem kutusuna /context yazarsın.",
        "Bizde her sohbete numaralı ad verilir: açılışta 'N · açılış' konur, kapanışta ad 'N · iş adı' olur. N sohbetin numarasıdır.",
        "Adı elle verdiysen açılış da kapanış da seninkini esas alır. Açıklayıcı ad, oturumu listede bulmanı kolaylaştırır."
      ],
      "terimler": [
        {
          "tr": "oturum",
          "en": "session",
          "aciklama": "Bir proje klasörüne bağlı, sürekli kaydedilen sohbet; kaldığın yerden sürdürülebilir."
        }
      ],
      "sorular": [
        {
          "id": "b09-d4-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bir belgede 'kaldığın oturuma dönmek için claude --resume yaz' diyor. Sen masaüstü uygulamasındasın. Ne yaparsın?",
          "secenekler": [
            "İstem kutusuna claude --resume yazarsın",
            "Ayarlardan terminal kipini açarsın",
            "Kenar çubuğundaki listeden o oturumu açarsın"
          ],
          "dogru": 2,
          "ipucu": "Masaüstünde oturumların nerede listelendiğini düşün.",
          "aciklama": "Terminaldeki claude --resume ve --continue komutlarının masaüstü karşılığı kenar çubuğundaki listede oturuma tıklamaktır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "--resume ve --continue'nun masaüstü karşılığı kenar çubuğunda bir oturuma tıklamak ya da terminalde başlatılan oturum için istem kutusuna /resume yazmaktır."
          }
        },
        {
          "id": "b09-d4-s3",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude bir düzenlemenin ortasındayken uygulama çöktü. Oturuma dönünce Claude neyi bilir?",
          "secenekler": [
            "Çökmeye kadarki konuşmayı",
            "Yalnız düzgün kapatılmışsa konuşmayı",
            "Yalnız elle kaydettiğin yere kadarını"
          ],
          "dogru": 0,
          "ipucu": "Oturumun ne zaman kaydedildiğini düşün.",
          "aciklama": "Claude Code oturumu sen çalışırken sürekli kaydeder; çöken uygulamayı açıp oturuma dönünce Claude çökmeye kadarki konuşmayı bilir. Elle kaydetmen gerekmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sessions",
            "kopya": "sessions.md",
            "okuma": "2026-11-15",
            "dayanak": "Oturumlar çalışırken yerel döküm dosyalarına sürekli kaydedilir, bu yüzden çıktıktan ya da /clear koştuktan sonra birine dönebilirsin."
          }
        },
        {
          "id": "b09-d4-s5",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude açılışta haftalık kullanımın %90 olduğunu söyledi; Context kartı ise %20 gösteriyor. Çelişki mi?",
          "secenekler": [
            "Evet; biri yanlış ölçüyor",
            "Hayır; kart yalnız bu oturumun bağlamı",
            "Hayır; kart son mesajı ölçer"
          ],
          "dogru": 1,
          "ipucu": "Haftalık kullanım ile bu oturumun bağlamının aynı şey olup olmadığını düşün.",
          "aciklama": "Context kartı yalnız bu oturumun bağlam doluluğunu gösterir; açılışta söylenen yüzde hesabın haftalık kullanımıdır. İkisi ayrı şeyleri ölçer.",
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
          "kart": 3,
          "soru": "Kenar çubuğunda dünkü sohbet hâlâ '238 · açılış' adıyla duruyor. Bu ne gösterir?",
          "secenekler": [
            "O sohbette kapanış adımları koşmamış",
            "Olağan; kapanışta ad değişmez",
            "Kapanış koştu; ad ancak ertesi açılışta değişir"
          ],
          "dogru": 0,
          "ipucu": "Adın açılışta ve kapanışta neye dönüştüğünü düşün.",
          "aciklama": "Açılış 'N · açılış' adını koyar, kapanış onu 'N · iş adı' yapar; ad açılıştaki gibi kaldıysa o sohbette kapanış koşmamıştır.",
          "kaynak": {
            "adres": ".claude/skills/kapanis/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Kapanışta oturumun adı 'N · iş adı' yapılır; açılışta konan 'N · açılış' adı böylece değişir.",
            "soz": "Ad `set_session_title` ile \"N · iş adı\" yapılır"
          }
        },
        {
          "id": "b09-d4-s7",
          "tur": "bosluk",
          "kart": 4,
          "soru": "Sohbetin adını kendin 'fiyat tablosu' yaptın; kapanış koşunca ad ___ olur.",
          "secenekler": [
            "'N · fiyat tablosu'",
            "'fiyat tablosu'",
            "'N · iş adı'"
          ],
          "dogru": 1,
          "ipucu": "Elle verilen ad ile kapanışın vereceği ad çakışınca hangisinin kaldığını düşün.",
          "aciklama": "Kapanış adı 'N · iş adı' yapar, ama adı elle verdiysen seninki esas kalır.",
          "kaynak": {
            "adres": ".claude/skills/kapanis/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Kullanıcı adı elle değiştirdiyse kapanış onun verdiği adı esas alır.",
            "soz": "kullanıcı adı elle değiştirdiyse onunki esas"
          }
        },
        {
          "id": "b09-d4-s8",
          "tur": "coktan",
          "kart": 0,
          "soru": "/clear yazdın; sonra eski konuşmadaki önemli bir ayrıntıyı hatırladın. Ne yaparsın?",
          "secenekler": [
            "Ayrıntı kayboldu; hatırladığını yeniden yazarsın",
            "/compact ile eski konuşmayı geri getirirsin",
            "Eski oturuma dönüp bakarsın; kayıtlı duruyor"
          ],
          "dogru": 2,
          "ipucu": "/clear'ın bağlamı mı, kaydı mı sildiğini düşün.",
          "aciklama": "/clear bağlamı sıfırlar ama eski oturum kayıtlı kalır; ona dönüp ayrıntıya bakabilirsin.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sessions",
            "kopya": "sessions.md",
            "okuma": "2026-11-15",
            "dayanak": "Oturumlar çalışırken yerel döküm dosyalarına sürekli kaydedilir, bu yüzden çıktıktan ya da /clear koştuktan sonra birine dönebilirsin."
          }
        }
      ]
    },
    {
      "id": "b09-d5",
      "baslik": "Geri sarma (checkpoint, /rewind)",
      "hedefler": [
        "Geri sarma menüsünü açmayı ve bir istemi seçince neyin geri döndüğünü anlatabilir.",
        "Geri sarmanın geri getirmediği değişiklikleri (kabuk komutu, alt ajan) ayırt edebilir.",
        "Bizde her iş bitince commit atılmasının neden gerektiğini anlatabilir."
      ],
      "anlatim": [
        "Claude Code, bir tur başlatan her istemden önce kodun halini kaydeder; buna geri sarma noktası (checkpoint) denir. Noktalar sohbetle kaydedilir, sürdürdüğün oturumda da durur.",
        "Geri dönmek için /rewind yazarsın ya da istem kutusu boşken iki kez Esc'ye basarsın. Menüde bir istemi seçip kodu, sohbeti ya da ikisini geri alırsın.",
        "Claude Code, Claude'un dosya düzenlemelerini kendiliğinden izler. Yalnız kabuk komutuyla (Bash) değişen dosya izlenmez, olduğu gibi kalır.",
        "Alt ajanın düzenlediği öteki dosyalar da genelde geri gelmez. Bunlar için git gibi sürüm denetimi gerekir.",
        "Bizim kural: CLAUDE.md'de 'klasör git ile tutulur, her iş bitince commit atılır' satırı var. Geri sarma oturum içi hızlı kurtarmadır, git'in yerini tutmaz."
      ],
      "terimler": [
        {
          "tr": "geri sarma noktası",
          "en": "checkpoint",
          "aciklama": "Bir tur başlatan her istemden önce kodun kaydedilen hali; geri sarınca buna dönülür."
        },
        {
          "tr": "geri sarma",
          "en": "rewind",
          "aciklama": "Kodu, sohbeti ya da ikisini birden önceki bir istemin noktasına döndürmek."
        }
      ],
      "sorular": [
        {
          "id": "b09-d5-s1",
          "tur": "coktan",
          "kart": 1,
          "soru": "Kutuda yarım mesaj varken geri sarmak için iki kez Esc'ye bastın; menü açılmadı. Neden?",
          "secenekler": [
            "Menü yalnız /rewind ile açılır",
            "Henüz geri sarma noktası yok",
            "Çift Esc yalnız boş kutuda açar"
          ],
          "dogru": 2,
          "ipucu": "Esc'ye bastığın anda kutunun ne durumda olduğuna bak.",
          "aciklama": "Menü /rewind ile ya da istem kutusu boşken iki kez Esc ile açılır; kutuda yazı varken çift Esc yazıyı temizler. Kutu boşalınca yeniden basarsın.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Geri sarma menüsünü açmak için /rewind koşulur ya da istem kutusu boşken iki kez Esc'ye basılır; kutuda yazı varsa çift Esc onu temizler."
          }
        },
        {
          "id": "b09-d5-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Kodu geri aldın; düzenlenen dosyalar döndü, ama terminalde adı değiştirilen klasör yeni adıyla duruyor. Neden?",
          "secenekler": [
            "Kabukta yapılanı geri sarma izlemez",
            "Sohbet de geri alınmalıydı",
            "Klasörler sonraki istemde döner"
          ],
          "dogru": 0,
          "ipucu": "Geri sarmanın hangi değişiklikleri izlediğini düşün.",
          "aciklama": "Claude Code yalnız Claude'un dosya düzenlemelerini izler; kabuk komutuyla yapılan değişiklik olduğu gibi kalır. Onu git ile geri alırsın.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Yalnız Bash komutlarının değiştirdiği dosya izlenmez ve olduğu gibi kalır, geri almak için git gibi sürüm denetimi kullanılır."
          }
        },
        {
          "id": "b09-d5-s4",
          "tur": "coktan",
          "kart": 0,
          "soru": "Dünkü oturumu yeniden açtın; Claude'un dün yaptığı bir düzenlemeyi geri sarmak istiyorsun. Olur mu?",
          "secenekler": [
            "Olmaz; noktalar uygulama kapanınca silinir",
            "Olur; noktalar oturumla birlikte geldi",
            "Olmaz; yalnız git ile döner"
          ],
          "dogru": 1,
          "ipucu": "Geri sarma noktalarının neyle birlikte kaydedildiğini düşün.",
          "aciklama": "Geri sarma noktaları sohbetle birlikte kaydedilir; oturumu sürdürdüğünde dünkü noktalara da dönebilirsin.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code geri sarma noktalarını sohbetle birlikte kaydeder, bu yüzden oturumu sürdürdükten sonra da /rewind koşabilirsin."
          }
        },
        {
          "id": "b09-d5-s5",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Bir alt ajan birçok dosyayı değiştirecek; ters giderse dönebilmek için işten önce ___ istersin.",
          "secenekler": [
            "geri sarma noktası alınmasını",
            "yaptıklarının listesini",
            "commit atılmasını"
          ],
          "dogru": 2,
          "ipucu": "Alt ajanın düzenlemelerinin senin geri sarma noktalarına girip girmediğini düşün.",
          "aciklama": "Alt ajanın öteki dosyalardaki düzenlemeleri geri sarmayla genelde geri gelmez; işten önce atılan commit, git ile o hale dönmeni sağlar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Öteki alt ajanlarda geri sarma yalnız Claude'un sohbette zaten düzenlediği dosyaları geri getirir, alt ajanın öteki dosyalardaki düzenlemeleri kalır ve git gibi sürüm denetimiyle geri alınır."
          }
        },
        {
          "id": "b09-d5-s7",
          "tur": "bosluk",
          "kart": 4,
          "soru": "Claude sabahtan beri dört iş bitirdi, git geçmişinde hiç kayıt yok. Kurala göre commitler ___ atılmalıydı.",
          "secenekler": [
            "kapanışta, toplu olarak",
            "her biri bittiği anda",
            "bağlam 500 bini geçince"
          ],
          "dogru": 1,
          "ipucu": "Kuralın commit'i hangi olaya bağladığını düşün.",
          "aciklama": "Kural her iş bitince commit ister; böylece bir iş bozulursa yalnız ona dönülür. Kapanışa bırakılan toplu kayıtta dönüş öteki işleri de götürür.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Satır klasörün git ile tutulduğunu ve her iş bitince commit atıldığını söyler.",
            "soz": "klasör git ile tutulur, her iş bitince commit atılır"
          }
        },
        {
          "id": "b09-d5-s9",
          "tur": "coktan",
          "kart": 1,
          "soru": "Tek dosyayı düzeltmek için bir istemin kodunu geri aldın; beş dosya birden eski haline döndü. Neden?",
          "secenekler": [
            "Geri sarma hata yaptı",
            "Nokta istemden önceki bütün kodu tutar",
            "Sohbeti de geri aldın"
          ],
          "dogru": 1,
          "ipucu": "Geri sarma noktasının istemden önce neyin halini kaydettiğini düşün.",
          "aciklama": "Geri sarma noktası istemden önce kodun bütün halini kaydeder; o istemin kodunu geri alınca istemin bütün düzenlemeleri döner. Sohbeti geri almak ise kodu değiştirmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code bir tur başlatan her istemden önce kodun halini kaydeder; geri sarınca o noktaya dönülür."
          }
        }
      ]
    },
    {
      "id": "b09-d6",
      "baslik": "Bizde oturum düzeni: açılış, iş geçişi, kapanış",
      "hedefler": [
        "Açılışta okunan devir kartı ile DURUM.md'nin hangi bilgiyi taşıdığını ayırt edebilir.",
        "İş geçişinde ve kapanışta hangi kaydın yapıldığını anlatabilir.",
        "300 ve 500 bin bağlam eşiklerinde ne olduğunu anlatabilir."
      ],
      "anlatim": [
        "İşe başlamadan devir kartı ve DURUM.md okunur. Kart son sohbetten kalanı, DURUM ise bütün açık işleri taşır.",
        "Sohbet sürerken bir iş bitince is-gecisi açılır: commit atılır, biten iş DURUM'daki listeden çıkar, bağlam ölçülür.",
        "Oturumun geçici alanı indirilen dosyaların durduğu, sohbet bitince silinen yerdir. Kapanıştaki devir testi devam için gerekeni diske indirir.",
        "Devir kartını kapanış yazar, sonraki açılış okur. Kartın Sonraki adım satırı sıradaki işi yazar; açılış o işi koşar.",
        "Kartın Beyin satırı sıradaki sohbetin modelini ve eforunu (çaba düzeyi) yazar. Kapanış mesajındaki yeni sohbet önerisi buradan gelir.",
        "İş geçişinde bağlam ölçülür. 500 bin üstünde yeni işten önce kapanış önerilir.",
        "300 ile 500 bin arasında kapanış yalnız sıradaki iş birden çok ajanlı büyük işse önerilir, öteki işler sürer.",
        "Saat damgası kancası (UserPromptSubmit) 300 ve 500 bin aşılınca eşik başına bir kez 'Bağlam:' satırı basar. Kancanın dosyası saat_damgasi.py."
      ],
      "terimler": [
        {
          "tr": "kullanıcı turu kancası",
          "en": "UserPromptSubmit",
          "aciklama": "Her kullanıcı mesajında koşan kanca olayı; saat_damgasi.py bununla bağlama saat ve gerekirse bağlam satırı ekler."
        }
      ],
      "sorular": [
        {
          "id": "b09-d6-s1",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bir iş bitti, sohbet sürüyor; ama DURUM'da o iş hâlâ açık. Hangi adım atlanmış?",
          "secenekler": [
            "Kapanış; DURUM yalnız orada güncellenir",
            "İşin bitişinde açılan kayıt (is-gecisi)",
            "Adım yok; DURUM'u sen güncellersin"
          ],
          "dogru": 1,
          "ipucu": "Sohbet sürerken bir iş bitince hangi düzenin açıldığını düşün.",
          "aciklama": "Sohbet sürerken iş bitince is-gecisi açılır; biten iş kanıtıyla DURUM'daki satırdan çıkar. Adım atlanınca iş açık görünür.",
          "kaynak": {
            "adres": ".claude/skills/is-gecisi/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "İş geçişinde biten iş kanıtıyla DURUM'daki satırdan çıkar ve arşive iner.",
            "soz": "biten iş kanıtıyla satırdan çıkar"
          }
        },
        {
          "id": "b09-d6-s2",
          "tur": "coktan",
          "kart": 3,
          "soru": "Dün 'yarın site metnine geçeriz' dediniz; bugün yeni sohbette Claude başka iş önerdi. Önce neye bakarsın?",
          "secenekler": [
            "KARARLAR'ın son maddesine",
            "Devir kartındaki sıradaki iş satırına",
            "Kenar çubuğundaki dünkü sohbetin adına"
          ],
          "dogru": 1,
          "ipucu": "Açılışın sıradaki işi neyden aldığını düşün.",
          "aciklama": "Kapanış devir kartının Sonraki adım satırına sıradaki işi yazar, açılış o işi koşar; yanlış iş önerildiyse önce o satıra bakılır.",
          "kaynak": {
            "adres": ".claude/skills/acilis/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Kartın Sonraki adım satırı iş adı taşıyorsa açılışta o iş koşar.",
            "soz": "satırı iş adı taşıyorsa o iş koşar"
          }
        },
        {
          "id": "b09-d6-s3",
          "tur": "bosluk",
          "kart": 4,
          "soru": "Kapanış mesajı yeni sohbet için düşük bir efor önerdi; bu değer devir kartının ___ satırından gelir.",
          "secenekler": [
            "Sonraki adım",
            "Beyin",
            "Açık"
          ],
          "dogru": 1,
          "ipucu": "Sıradaki sohbetin modelini ve eforunu hangi yazının taşıdığını düşün.",
          "aciklama": "Kapanış mesajındaki 'Yeni sohbet' önerisi devir kartının Beyin satırından alınır; o satır sıradaki sohbetin modelini ve eforunu yazar.",
          "kaynak": {
            "adres": ".claude/skills/kapanis/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Kapanış mesajının son satırındaki model ve efor değerleri devir kartının Beyin satırından alınır.",
            "soz": "değerler kartın `Beyin:` satırından"
          }
        },
        {
          "id": "b09-d6-s4",
          "tur": "coktan",
          "kart": 5,
          "soru": "Bir iş bitti; bağlam 540 bin, sıradaki iş küçük bir düzeltme. Ne olur?",
          "secenekler": [
            "İş küçük olduğu için kapanış önerilmez",
            "Sohbet kendiliğinden kapanır",
            "Kapanış önerilir, düzeltme sonraki sohbete kalır"
          ],
          "dogru": 2,
          "ipucu": "Ölçülen değerin hangi eşiğin üstünde olduğuna bak.",
          "aciklama": "500 binin üstünde işin büyüklüğüne bakılmaz; yeni işten önce kapanış önerilir.",
          "kaynak": {
            "adres": ".claude/skills/is-gecisi/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "500 bin üstü bağlamda yeni işten önce kapanış önerilir.",
            "soz": "500 bin üstü: yeni işten önce kapanış önerilir."
          }
        },
        {
          "id": "b09-d6-s5",
          "tur": "coktan",
          "kart": 6,
          "soru": "Bağlam 400 bin; Claude kapanış önermeden tek dosyalık küçük bir düzeltmeye geçti. Hata mı?",
          "secenekler": [
            "Hata; 300 binden sonra kapanış şart",
            "Hata değil; küçük iş sürer",
            "Hata; önce /compact koşulmalıydı"
          ],
          "dogru": 1,
          "ipucu": "300 ile 500 bin arasında kapanışın hangi işte önerildiğine bak.",
          "aciklama": "300-500 bin arasında kapanış yalnız sıradaki iş birden çok ajanlı büyük işse önerilir; küçük iş aynı sohbette sürer.",
          "kaynak": {
            "adres": ".claude/skills/is-gecisi/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "300-500 bin arasında kapanış yalnız sıradaki iş birden çok ajanlı büyük işse önerilir, öteki işler sürer.",
            "soz": "300-500 bin: kapanış yalnız sıradaki iş birden çok ajanlı büyük işse önerilir"
          }
        },
        {
          "id": "b09-d6-s6",
          "tur": "bosluk",
          "kart": 7,
          "soru": "'Bağlam:' uyarısı 310 binde geldi; bağlam aynı kaldı, on mesajdır yeniden gelmiyor. Kanca ___.",
          "secenekler": [
            "bozuk; her mesajda basmalıydı",
            "kapanışı bekliyor; orada yineler",
            "doğru çalışıyor; her eşikte tek kez basar"
          ],
          "dogru": 2,
          "ipucu": "Kancanın aynı eşik için kaç kez yazdığını düşün.",
          "aciklama": "saat_damgasi.py her eşik için 'Bağlam:' satırını bir kez basar; bağlam eşiğin altına inip yeniden aşmadıkça yinelemez. 500 bin aşılınca yeni bir satır gelir.",
          "kaynak": {
            "adres": ".claude/hooks/saat_damgasi.py",
            "okuma": "2026-11-24",
            "dayanak": "Satır eşik başına bir kez basılır, bağlam o satırdan sonra eşiğin altına inmediyse yeniden basılmaz.",
            "soz": "Eşik başına bir kez: dökümde"
          }
        },
        {
          "id": "b09-d6-s7",
          "tur": "coktan",
          "kart": 0,
          "soru": "Yeni sohbette Claude dünkü işi biliyor ama üç gün önce açık kalan işi anmıyor. Hangi okuma eksik?",
          "secenekler": [
            "Devir kartı okunmamış",
            "KARARLAR.md okunmamış",
            "CLAUDE.md okunmamış",
            "DURUM.md okunmamış"
          ],
          "dogru": 3,
          "ipucu": "Dünkü iş ile eski açık işin hangi dosyada durduğunu ayır.",
          "aciklama": "Devir kartı yalnız son sohbetten kalanı taşır; bütün açık işler DURUM.md'de durur. Eski açık iş anılmıyorsa DURUM okunmamış olabilir.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Satır, güncel durumun kartta, görev alanı, öncelikler ve açık işlerin DURUM'da yaşadığını söyler.",
            "soz": "öncelikler ve açık işler DURUM'da"
          }
        },
        {
          "id": "b09-d6-s8",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bu oturumda bir kaynak metin indirildi; yarınki iş onun üstünde çalışacak. Kapanışta ne olmalı?",
          "secenekler": [
            "Metin indirildiği yerde kalır, yarın okunur",
            "Yalnız rapor yazılır, kaynak gerekmez",
            "Kaynak metin de klasöre kaydedilir"
          ],
          "dogru": 2,
          "ipucu": "İndirilen dosyanın sohbet bitince nerede olduğunu düşün.",
          "aciklama": "İndirilen dosya oturumun geçici alanındadır ve sohbet bitince silinir; sonraki iş kaynak metne dayanacaksa devir testi kaynağı da diske indirir.",
          "kaynak": {
            "adres": ".claude/skills/kapanis/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Sonraki iş kaynak metin üstünde çalışacaksa kaynak da diske iner.",
            "soz": "Sonraki iş kaynak metin üstünde çalışacaksa kaynak da diske iner"
          }
        }
      ]
    }
  ]
});
