// icerik/birim-02.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b02",
  "sira": 2,
  "baslik": "İlk adımlar, masaüstü uygulamada",
  "amac": "Masaüstü uygulamasının Code sekmesinde oturum açmayı, dosya vermeyi, değişikliği gözden geçirmeyi, eğik çizgi komutlarını, sık iş akışlarını ve commit'i öğrenirsin; bir şey ters gidince önce nereye bakacağını da.",
  "dersler": [
    {
      "id": "b02-d1",
      "baslik": "Masaüstünde oturum açmak",
      "hedefler": [
        "Yerel (Local) ve bulut (Cloud) oturumun farkını ve bunun dosyalarına etkisini anlatabilir.",
        "Oturumların birbirinden bağımsız olduğunu ve bunun sonucunu anlatabilir.",
        "Bu klasörde hangi oturumun çalıştığını ve yanlış seçimin belirtisini ayırt edebilir."
      ],
      "anlatim": [
        "Code sekmesi Claude Code'u uygulamanın içinde getirir. Ayrıca Node.js ya da komut satırı aracı (CLI) kurman gerekmez.",
        "Code sekmesinde her konuşma bir oturumdur (session). Her oturumun kendi sohbet geçmişi ve klasörü vardır, öteki oturumlardan bağımsızdır.",
        "Yerel (Local) oturum bilgisayarında, dosyalarına doğrudan erişerek çalışır. Bulut (Cloud) oturum Anthropic'in altyapısında, klasör yerine depo (repository) üzerinde çalışır ve uygulamayı kapatsan da sürer.",
        "İlk mesajdan önce, istem kutusunun altındaki satırdan ortamı, klasörü ve modeli seçersin. Ortam seçicide (environment selector) Local'i seçer, Open folder ile çalışacağın klasörü açarsın.",
        "Bizim CLAUDE.md: 'Bu klasörde açılan her oturum yalnız bu işe aittir. Bu klasöre yalnız Claude Code (masaüstü Code sekmesi, yerel oturum) yazar.'"
      ],
      "terimler": [
        {
          "tr": "oturum",
          "en": "session",
          "aciklama": "Code sekmesinde Claude ile yapılan, kendi geçmişi ve kendi klasörü olan konuşma."
        },
        {
          "tr": "komut satırı aracı",
          "en": "CLI",
          "aciklama": "Claude Code'un terminalde çalışan biçimi; Code sekmesi için ayrıca kurulması gerekmez."
        },
        {
          "tr": "ortam seçici",
          "en": "environment selector",
          "aciklama": "İstem kutusunun altındaki satırın ilk düğmesi; Claude'un nerede çalışacağını seçer."
        }
      ],
      "sorular": [
        {
          "id": "b02-d1-s7",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bir internet rehberi, Code sekmesini kullanmadan önce Node.js kurmanı söylüyor. Ne yaparsın?",
          "secenekler": [
            "Önce Node.js kurarım, sonra Code sekmesini açarım",
            "Uygulamayı bırakıp komut satırı aracını (CLI) kurarım",
            "Kurmadan Code sekmesini açarım"
          ],
          "dogru": 2,
          "ipucu": "Masaüstü uygulamasının içinde zaten neyin geldiğini düşün.",
          "aciklama": "Masaüstü uygulaması Claude Code'u içinde getirir; Code sekmesi için Node.js ya da komut satırı aracı kurmak gerekmez. Rehber başka bir kullanım biçimini anlatıyor olabilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop-quickstart",
            "kopya": "desktop-quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "Masaüstü uygulaması Claude Code'u içerir, bu yüzden Code sekmesini kullanmak için Node.js ya da CLI kurman gerekmez."
          }
        },
        {
          "id": "b02-d1-s3",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Aynı klasörde iki oturum açık. Birinde düzeltilen başlık, öteki oturum aynı dosyayı yazınca eski haline döndü; çünkü öteki oturum ___.",
          "secenekler": [
            "bu düzeltmeyi hiç görmedi",
            "düzeltmeyi bilerek geri aldı",
            "dosyayı kaydetmeden kapattı"
          ],
          "dogru": 0,
          "ipucu": "Bir oturumda olanın ötekinin geçmişine girip girmediğini düşün.",
          "aciklama": "Her oturumun kendi sohbet geçmişi vardır ve ötekilerden bağımsızdır; öteki oturum dosyanın eski halini bildiği için onu yazdı.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Code sekmesinde her konuşma bir oturumdur ve kendi sohbet geçmişi ile proje klasörü vardır, öteki oturumlardan bağımsızdır."
          }
        },
        {
          "id": "b02-d1-s2",
          "tur": "coktan",
          "kart": 2,
          "soru": "Yeni oturum açarken klasör yerine depo seçmen isteniyor; bilgisayarındaki klasörler listede yok. En olası kaynak?",
          "secenekler": [
            "Klasörlerine erişim izni kapalı",
            "Oturum türü olarak bulut (Cloud) seçili",
            "Uygulamanın güncellenmesi gerekiyor"
          ],
          "dogru": 1,
          "ipucu": "Hangi oturum türünün klasörle değil depoyla çalıştığını düşün.",
          "aciklama": "Bulut oturum Anthropic'in altyapısında, bilgisayarındaki klasör yerine depo üzerinde çalışır; bu klasörün işi için yerel oturum seçilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Yerel ortam senin makinende dosyalarına doğrudan erişerek çalışır; bulut ortam Anthropic'in yönettiği altyapıda çalışır ve bulut oturumunda proje klasörü yerine depolar seçilir."
          }
        },
        {
          "id": "b02-d1-s1",
          "tur": "coktan",
          "kart": 3,
          "soru": "Yeni bir oturumda Claude, projenle hiç ilgisi olmayan dosyalardan söz ediyor. En olası kaynak?",
          "secenekler": [
            "Claude önceki oturumdaki projeyi hatırlıyor",
            "Oturum açılırken başka bir klasör seçilmiş",
            "Claude bilgisayardaki bütün klasörleri tarıyor"
          ],
          "dogru": 1,
          "ipucu": "Oturumu açarken satırda neleri seçtiğini düşün.",
          "aciklama": "Claude oturumun klasöründe çalışır ve klasör ilk mesajdan önce satırdan seçilir. Önceki oturumun geçmişi yeni oturuma geçmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop-quickstart",
            "kopya": "desktop-quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "İlk oturumda önce ortam seçicide Local grubunun en üstündeki giriş ve yanındaki düğmeden Open folder ile proje klasörü, sonra model seçilir, en son Claude'a ne yapacağı yazılır."
          }
        },
        {
          "id": "b02-d1-s4",
          "tur": "coktan",
          "kart": 4,
          "soru": "Bu klasörde uzun bir iş başlatacaksın; uygulamayı kapatınca da sürsün istiyorsun. Kurala göre hangi oturum?",
          "secenekler": [
            "Yerel; bulutta başlatmam",
            "Bulut; sonucu sonra klasöre alırım",
            "Fark etmez; kural yalnız telefonu kapsar"
          ],
          "dogru": 0,
          "ipucu": "Satırın parantez içinde hangi oturum türünü andığını düşün.",
          "aciklama": "Kurala göre bu klasöre yalnız masaüstü Code sekmesindeki yerel oturum yazar; bulut oturumun kolaylığı bu kuralı değiştirmez.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Satır, bu klasöre yalnız masaüstü Code sekmesindeki yerel oturumun yazdığını söyler.",
            "soz": "Bu klasöre yalnız Claude Code (masaüstü Code sekmesi, yerel oturum) yazar"
          }
        },
        {
          "id": "b02-d1-s8",
          "tur": "coktan",
          "kart": 4,
          "soru": "Bu klasörde açık oturumda, bu işle ilgisi olmayan kişisel bir yazışma için Claude'dan yardım isteyeceksin. Kurala göre?",
          "secenekler": [
            "Burada sorarım; Claude her işe yardım eder",
            "O iş için bu klasörün dışında ayrı oturum açarım",
            "Burada sorarım, yalnız dosyaya yazdırmam"
          ],
          "dogru": 1,
          "ipucu": "Satırın bu klasörde açılan oturumun kime ait olduğunu söylediğini düşün.",
          "aciklama": "Kurala göre bu klasörde açılan her oturum yalnız bu işe aittir; başka bir iş, dosyaya yazılmasa da, bu klasörün dışında ayrı bir oturumda yapılır.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Satır, bu klasörde açılan her oturumun yalnız bu işe ait olduğunu söyler.",
            "soz": "Bu klasörde açılan her oturum yalnız bu işe aittir"
          }
        }
      ]
    },
    {
      "id": "b02-d2",
      "baslik": "İstem kutusu ve dosya eklemek (@)",
      "hedefler": [
        "@ ile bir dosyayı konuşmaya eklemenin ne zaman gerektiğini anlatabilir.",
        "Resim ya da ekran görüntüsü eklemenin ne zaman işe yaradığını anlatabilir.",
        "Claude'u durdurmak ile çalışırken düzeltme göndermeyi ayırt edebilir."
      ],
      "anlatim": [
        "İstem kutusuna (prompt box) istediğini yazıp Enter'a basarsın. @ ve dosya adı o dosyayı konuşmanın bağlamına ekler; / ise komut menüsünü açar.",
        "Her dosyayı eklemek zorunda değilsin. Claude proje dosyalarını gerektikçe kendisi okur.",
        "Resim, PDF ve başka dosyaları + düğmesiyle eklersin (attachment) ya da sürükleyip bırakırsın. Hata ekranını ya da tasarım taslağını anlatmak yerine görüntüsünü verirsin.",
        "Claude çalışırken durdurma düğmesi işi hemen keser. Düzeltmeyi yazıp Enter'a basarsan iş durmaz; Claude onu o anki adımı bitirince okur, sonra yön değiştirir.",
        "Claude'dan sana giden şey için CLAUDE.md'de kural var: kopyalayacağın ya da açacağın şey dosya olarak gönderilir, tıklanır bağlantısıyla verilir. 'Şuraya git' diye yol tarif edilmez.",
        "Aynı kurala göre kısa metin sohbete yazılır; uzun metin açılınca görünen dosya olarak gelir."
      ],
      "terimler": [
        {
          "tr": "istem kutusu",
          "en": "prompt box",
          "aciklama": "Claude'a ne yapacağını yazdığın kutu; Enter ile gönderilir."
        },
        {
          "tr": "dosya eki",
          "en": "attachment",
          "aciklama": "İstem kutusunun yanındaki + düğmesiyle ya da sürükleyip bırakarak eklenen resim, PDF ya da başka dosya."
        }
      ],
      "sorular": [
        {
          "id": "b02-d2-s1",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Adları benzeyen iki rapordan Claude yanlışını okudu; doğrusunu kesin vermek için isteme ___ yazarsın.",
          "secenekler": [
            "/ ve raporun adını",
            "@ ve raporun adını",
            "raporun adını tırnak içinde"
          ],
          "dogru": 1,
          "ipucu": "İki işaretten hangisinin dosyayı bağlama eklediğini, hangisinin menü açtığını düşün.",
          "aciklama": "@ ve dosya adı o dosyayı doğrudan konuşmanın bağlamına ekler; Claude'un tahmin etmesine gerek kalmaz. / ise komut menüsünü açar, tırnak da dosyayı eklemez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Dosya eklemek için @ ve ardından dosya adını yazarsın, dosya konuşmanın bağlamına eklenir."
          }
        },
        {
          "id": "b02-d2-s3",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bir hatayı düzelttireceksin ama hangi dosyalarda olduğunu bilmiyorsun. Ne yaparsın?",
          "secenekler": [
            "Önce dosyaları bulup @ ile eklerim",
            "Claude'dan bütün klasörü okumasını isterim",
            "Hatayı anlatırım; dosyaları Claude kendisi bulur"
          ],
          "dogru": 2,
          "ipucu": "Claude'un proje dosyalarına ne zaman kendisi baktığını düşün.",
          "aciklama": "Claude proje dosyalarını gerektikçe kendisi okur; bağlamı elle eklemen gerekmez. Bütün klasörü okutmak ise bağlamı boşuna doldurur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/quickstart",
            "kopya": "quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code proje dosyalarını gerektikçe okur, bağlamı elle eklemen gerekmez."
          }
        },
        {
          "id": "b02-d2-s2",
          "tur": "coktan",
          "kart": 2,
          "soru": "Uygulamanda uzun bir hata metni çıktı. Claude'a nasıl iletirsin?",
          "secenekler": [
            "Ekranın görüntüsünü isteme eklerim",
            "Ne yazdığını kendi sözlerimle özetlerim",
            "'Hata verdi' derim; gerisini Claude bulur"
          ],
          "dogru": 0,
          "ipucu": "Hatayı anlatmak ile hatanın kendisini vermek arasındaki farkı düşün.",
          "aciklama": "Claude'un ihtiyacı olan şey elindeyse anlatmak yerine onu verirsin; hata ekranının görüntüsü + düğmesiyle ya da sürükleyerek eklenir. Özet ayrıntıyı kaybettirir, 'hata verdi' ise Claude'a hiçbir iz vermez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude'un ihtiyacı olan şey elindeyse tarif etmek yerine onu ver, örneğin tasarımın ya da hatanın ekran görüntüsünü isteme yapıştır."
          }
        },
        {
          "id": "b02-d2-s4",
          "tur": "sirala",
          "kart": 3,
          "soru": "Claude ayar dosyasını düzenlerken 'ayar dosyasına dokunma' yazıp Enter'a bastın. Olanları sırala.",
          "adimlar": [
            "Claude ayar dosyasındaki değişikliği tamamlar",
            "Claude 'dokunma' notunu okur",
            "Claude ayar dosyasını bırakıp başka yöne döner"
          ],
          "ipucu": "Enter'la giden düzeltmenin çalışan adımı kesip kesmediğini düşün.",
          "aciklama": "Enter'la giden düzeltme çalışan adımı durdurmaz; Claude onu adım bitince okur, sonra yön değiştirir. Hemen kesmek için durdurma düğmesine basılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Durdurma düğmesi işi hemen keser, yazıp Enter'la gönderdiğin düzeltme ise çalışan adımı durdurmaz ve Claude onu o adım bitince okur."
          }
        },
        {
          "id": "b02-d2-s6",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude kopyalayacağın uzun bir istem hazırladı ve 'masaüstündeki taslaklar klasöründe, açıp kopyala' yazdı. Ne istersin?",
          "secenekler": [
            "Metni sohbete parça parça yapıştırmasını",
            "Klasörün tam yolunu da yazmasını",
            "Dosyayı tıklanır bağlantıyla göndermesini"
          ],
          "dogru": 2,
          "ipucu": "Kuralın yol tarifi için ne dediğini düşün.",
          "aciklama": "Kurala göre kopyalayacağın ya da açacağın şey dosya olarak gönderilir ve tıklanır bağlantısıyla verilir; yol tarif edilmez.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Satır, kullanıcının kopyalayacağı ya da açacağı şeyin dosya olarak gönderilip tıklanır bağlantısıyla verileceğini, yol tarif edilmeyeceğini söyler.",
            "soz": "dosya olarak gönderilir (Code'da SendUserFile) ve tıklanır bağlantısıyla verilir"
          }
        },
        {
          "id": "b02-d2-s8",
          "tur": "coktan",
          "kart": 5,
          "soru": "Claude'dan iki satırlık bir cevap istedin; sohbete yazdı, dosya göndermedi. Bu ne demek?",
          "secenekler": [
            "Kurala uygun; iki satır dosyalık değil",
            "Kural ihlali; her metin dosyayla gelmeli",
            "Bu oturumda dosya gönderimi kapalı"
          ],
          "dogru": 0,
          "ipucu": "Kuralın metnin uzunluğuna göre ne dediğini düşün.",
          "aciklama": "Kurala göre kısa metin sohbete yazılır, uzun metin açılınca görünen dosya olarak gider. İki satırlık taslak sohbette kalır.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Satır, kısa metnin sohbete yazıldığını, uzun metnin açılınca görünen dosya olarak gittiğini söyler.",
            "soz": "Kısa metin sohbete yazılır, uzun metin açılınca görünen dosya"
          }
        }
      ]
    },
    {
      "id": "b02-d3",
      "baslik": "Değişikliği gözden geçirmek (diff view)",
      "hedefler": [
        "Fark görünümünün değişikliği silinen ve eklenen satırlarla, dosya dosya gösterdiğini anlatabilir.",
        "Özetin söylemediği bir değişikliği yakalamak için neye bakılacağını ayırt edebilir.",
        "Kod okumadan bir değişikliği nasıl onaylayacağını anlatabilir."
      ],
      "anlatim": [
        "Fark (diff), bir değişikliğin öncesi ve sonrasıdır: silinen ve eklenen satırlar, dosya dosya. Claude dosya değiştirince +12 -1 gibi satır sayıları görünür; tıklayınca fark açılır.",
        "Farkta bir satırın yanındaki + ile yorum yazarsın; yorumları macOS'ta Cmd+Enter ile birlikte gönderirsin. Claude istenen değişikliği yapar, yeni bir fark çıkar.",
        "Özete tek başına güvenme, farka bak. İkinci bakış isteyenler: istemediğin değişiklik (ör. değişen bir ayar değeri) ve zayıflatılan testler.",
        "/code-review değişikliği oturum geçmişi olmadan, temiz bir bağlamda inceler. Bu kod incelemesi (code review) bulduklarını raporlar; sen istemedikçe hiçbir şeyi düzenlemez.",
        "Bizim CLAUDE.md'de şu satır var: 'onay gereken yerde neyin değişeceğini bir iki cümleyle, sade dille söyle'.",
        "Aynı satıra göre teknik bir seçimde sana teknik ad değil, altındaki tercih sorulur."
      ],
      "terimler": [
        {
          "tr": "fark görünümü",
          "en": "diff view",
          "aciklama": "Claude'un yaptığı değişikliği silinen ve eklenen satırlarla, dosya dosya gösteren ekran."
        },
        {
          "tr": "kod incelemesi",
          "en": "code review",
          "aciklama": "Değişikliğin oturum geçmişi olmadan, temiz bir bağlamda bir kez daha gözden geçirilmesi."
        }
      ],
      "sorular": [
        {
          "id": "b02-d3-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude 'hiçbir dosyayı değiştirmedim' dedi; ama oturumda +4 -2 görünüyor. Ne yaparsın?",
          "secenekler": [
            "Önemsemem; sayılar okunan satırları gösterir",
            "Oturumu kapatıp açarım; sayılar sıfırlanır",
            "Sayılara tıklayıp farka bakarım"
          ],
          "dogru": 2,
          "ipucu": "+ ve - ile verilen sayıların neyi saydığını düşün.",
          "aciklama": "Satır sayıları Claude bir dosyayı değiştirince görünür: 4 satır eklenmiş, 2 satır silinmiş. Söylenenle görünen uyuşmuyorsa farka bakarsın.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude dosyaları değiştirince satır sayıları görünür; fark görünümünü açmak için satır sayılarına tıklarsın."
          }
        },
        {
          "id": "b02-d3-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Farkta bir raporun üç cümlesinde düzeltme istiyorsun. Claude'a nasıl iletirsin?",
          "secenekler": [
            "Satırlara + ile yorum yazıp birlikte gönderirim",
            "Her düzeltmeyi ayrı mesajla tek tek gönderirim",
            "Raporu baştan yazmasını isterim"
          ],
          "dogru": 0,
          "ipucu": "Kartta farkın içinden nasıl düzeltme istendiğini düşün.",
          "aciklama": "Farkta satırın yanındaki + ile yorum yazılır ve yorumlar birlikte gönderilir; Claude hepsini yapar, sen sonucu yeni bir fark olarak görürsün.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Satırın yanındaki + ile yorum eklenir, yorumlar macOS'ta Cmd+Enter ile toplu gönderilir ve Claude yorumlara göre yaptığı değişikliği yeni bir fark olarak gösterir."
          }
        },
        {
          "id": "b02-d3-s4",
          "tur": "bosluk",
          "kart": 2,
          "soru": "Claude 'testlerin hepsi geçiyor' dedi; farkta ilk, testlerin ___ bakarsın.",
          "secenekler": [
            "kaç satır tuttuğuna",
            "gevşetilip gevşetilmediğine",
            "dosya adlarına"
          ],
          "dogru": 1,
          "ipucu": "Kartta ikinci bakış isteyenler arasında ne sayıldığını düşün.",
          "aciklama": "Testler kod düzeldiği için de, testin kendisi zayıflatıldığı için de geçebilir. Zayıflatılan testler ikinci bakışı hak edenler arasındadır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/code-review",
            "kopya": "ders-101-07-code-review.md",
            "okuma": "2026-11-15",
            "dayanak": "Her seferinde ikinci bakış isteyenler arasında istemediğin değişiklikler ve zayıflatılan testler vardır."
          }
        },
        {
          "id": "b02-d3-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "/code-review koştun; bulgular listelendi ama hiçbir dosya değişmedi. Bu ne gösterir?",
          "secenekler": [
            "İnceleme yarıda kesildi; yeniden koşmalısın",
            "Bulgular önemsiz bulunduğu için düzeltilmedi",
            "Olağan; inceleme sen istemedikçe düzenlemez"
          ],
          "dogru": 2,
          "ipucu": "Kod incelemesinin bulduklarıyla ne yaptığını düşün.",
          "aciklama": "/code-review bulduklarını raporlar ve sen istemedikçe hiçbir dosyayı düzenlemez; düzeltmeyi ayrıca istersin.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/code-review",
            "kopya": "ders-101-07-code-review.md",
            "okuma": "2026-11-15",
            "dayanak": "/code-review değişikliği oturum geçmişi olmadan, temiz bir bağlamda inceler ve sen istemedikçe hiçbir şeyi düzenlemez."
          }
        },
        {
          "id": "b02-d3-s3",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude onay isterken yalnız kod farkını gösterdi, 'onaylıyor musun?' dedi. Ne yaparsın?",
          "secenekler": [
            "Değişikliğin sonucunu kısaca, düz dille anlatmasını isterim",
            "Kodu satır satır açıklamasını isterim",
            "Farkı okuyup anladığım kadarıyla onaylarım"
          ],
          "dogru": 0,
          "ipucu": "Kod farkının senin için ne anlam taşıdığını düşün.",
          "aciklama": "Kurala göre onay gereken yerde neyin değişeceği bir iki cümleyle, sade dille söylenir. Kodun satır satır açıklaması da sana kararın sonucunu söylemez.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Kod farkı onayı kullanıcı için anlam taşımaz: onay gereken yerde neyin değişeceği bir iki cümleyle, sade dille söylenir.",
            "soz": "onay gereken yerde neyin değişeceğini bir iki cümleyle, sade dille söyle"
          }
        },
        {
          "id": "b02-d3-s8",
          "tur": "coktan",
          "kart": 5,
          "soru": "Claude 'Luxon mu, date-fns mi kullanayım?' diye sordu. Kurala göre nasıl sormalıydı?",
          "secenekler": [
            "Hangisinin daha yaygın kullanıldığını söyleyerek",
            "Ne istediğini sorarak: hız mı, sadelik mi",
            "İkisinin teknik artı ve eksilerini sıralayarak"
          ],
          "dogru": 1,
          "ipucu": "Teknik ad sana bir şey anlatmıyorsa sorunun neye dönmesi gerektiğini düşün.",
          "aciklama": "Kurala göre teknik seçimde teknik ad değil, altındaki tercih sorulur. Yaygınlık da teknik artı ve eksiler de seni senin tercihine götürmez.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Satır, teknik seçimde kullanıcıya teknik adın değil altındaki tercihin sorulacağını söyler.",
            "soz": "teknik seçimde altındaki tercih sorulur, teknik ad değil"
          }
        }
      ]
    },
    {
      "id": "b02-d4",
      "baslik": "Eğik çizgi komutları (slash commands)",
      "hedefler": [
        "Bağlam komutlarından hangisinin hangi durumda kullanılacağını ayırt edebilir.",
        "Bir dış bağlantı ya da komut cevabı beklenmedik olduğunda neye bakılacağını anlatabilir.",
        "Bir skill'in / menüsünden ve klasör kuralındaki sözle başladığını anlatabilir."
      ],
      "anlatim": [
        "Eğik çizgi komutları (slash commands) Claude Code'u oturumun içinden yönetir. / yazınca menüde yerleşik komutlar ve skill'ler, yani tekrar kullanılabilir hazır istemler, birlikte görünür.",
        "/compact şimdiye kadarki konuşmayı özetleyip yer açar, aynı konuşma sürer. /clear boş bağlamla yeni bir konuşma başlatır.",
        "/context bağlamın neyle dolduğunu gösterir. /rewind konuşmayı ya da kodu önceki bir noktaya geri sarar.",
        "Ayar komutları: /memory CLAUDE.md dosyalarını düzenletir, /hooks kanca ayarlarını gösterir, /mcp Claude'u dış hizmetlere bağlayan MCP bağlantılarını yönetir. /agents alt ajan oluşturmasını Claude'dan istemeni hatırlatır.",
        "Terminalde panel açan komutlar Code sekmesinde farklı davranır. Örneğin /permissions burada 'isn't available in this environment' cevabını verir.",
        "Skill'i başka yoldan da başlatabilirsin. Bizim CLAUDE.md'de şu satır var: kullanıcı 'proje — açılış' yazarsa acilis skill'ini koş."
      ],
      "terimler": [
        {
          "tr": "eğik çizgi komutları",
          "en": "slash commands",
          "aciklama": "İstem kutusunda / ile başlayan, Claude Code'u oturumun içinden yöneten komutlar."
        },
        {
          "tr": "skill",
          "en": "skill",
          "aciklama": "Gerektiğinde çağırdığın, tekrar kullanılabilir hazır istem; / menüsünde adıyla görünür."
        }
      ],
      "sorular": [
        {
          "id": "b02-d4-s7",
          "tur": "coktan",
          "kart": 0,
          "soru": "/ yazdın; menüde yerleşik komutların arasında 'kapanis' ve 'dongu' gibi adlar da var. Bunlar ne?",
          "secenekler": [
            "Claude'un yarım kalmış eski komutları",
            "Bu klasörün skill'leri",
            "Başka bir oturumdan kalan kayıtlar"
          ],
          "dogru": 1,
          "ipucu": "/ menüsünde yerleşik komutlarla birlikte başka neyin göründüğünü düşün.",
          "aciklama": "/ menüsünde yerleşik komutlar, kendi skill'lerin ve eklenti skill'leri birlikte görünür; bu klasörün kapanış ve döngü skill'leri de oradadır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop-quickstart",
            "kopya": "desktop-quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "/ yazınca ya da + düğmesinden Slash commands'ı seçince yerleşik komutları, kendi skill'lerini ve eklenti skill'lerini gezersin."
          }
        },
        {
          "id": "b02-d4-s3",
          "tur": "coktan",
          "kart": 1,
          "soru": "Uzun bir işin ortasında /compact yazdın. Ne olur?",
          "secenekler": [
            "Geçmiş silinir, boş bir sohbet başlar",
            "Özet yeni bir oturuma taşınır, eski oturum kapanır",
            "Geçmiş kısaltılır, aynı sohbette devam edersin"
          ],
          "dogru": 2,
          "ipucu": "Kartta /compact ile /clear arasındaki farkı düşün.",
          "aciklama": "/compact konuşmayı özetleyip yer açar ve aynı konuşma sürer; /clear ise boş bağlamla yeni bir konuşma başlatır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/commands",
            "kopya": "commands.md",
            "okuma": "2026-11-15",
            "dayanak": "Aynı konuşmayı sürdürürken bağlamda yer açmak için /clear yerine /compact kullanılır."
          }
        },
        {
          "id": "b02-d4-s1",
          "tur": "coktan",
          "kart": 2,
          "soru": "Oturum kısa sürede doldu; neyin bu kadar yer tuttuğunu görmek istiyorsun. Hangi komutu yazarsın?",
          "secenekler": [
            "/compact",
            "/memory",
            "/rewind",
            "/context"
          ],
          "dogru": 3,
          "ipucu": "Komutlardan hangisinin yalnız durumu gösterdiğini düşün.",
          "aciklama": "/context bağlamın neyle dolduğunu gösterir. /compact yer açar ama neyin yer tuttuğunu göstermez, /memory CLAUDE.md dosyalarını açar, /rewind önceki bir noktaya geri sarar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/commands",
            "kopya": "commands.md",
            "okuma": "2026-11-15",
            "dayanak": "/context bağlam kullanımını gösterir, /compact konuşmayı özetleyerek yer açar, /rewind konuşmayı ya da kodu önceki bir noktaya geri sarar."
          }
        },
        {
          "id": "b02-d4-s2",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Claude her oturumda aynı kurala uyuyor; kuralın yazılı olduğu CLAUDE.md dosyalarını ___ ile açarsın.",
          "secenekler": [
            "/hooks",
            "/agents",
            "/memory",
            "/context"
          ],
          "dogru": 2,
          "ipucu": "Ayar komutlarından hangisinin CLAUDE.md dosyalarıyla ilgili olduğunu düşün.",
          "aciklama": "/memory CLAUDE.md dosyalarını düzenletir; bir kuralın nereden geldiğini görmek için oraya bakılır. /hooks kancaları, /context bağlamın doluluğunu gösterir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/commands",
            "kopya": "commands.md",
            "okuma": "2026-11-15",
            "dayanak": "/memory CLAUDE.md dosyalarını düzenler, /hooks kanca ayarlarını gösterir, /mcp MCP sunucu bağlantılarını yönetir."
          }
        },
        {
          "id": "b02-d4-s6",
          "tur": "coktan",
          "kart": 4,
          "soru": "Code sekmesinde bir komut yazdın; 'isn't available in this environment' cevabı geldi. En olası kaynak?",
          "secenekler": [
            "Bu ortamda izin kapalı; ayardan açılmalı",
            "Komut terminalde panel açan türden",
            "Komut eski; yeni sürümde kaldırıldı"
          ],
          "dogru": 1,
          "ipucu": "Bu cevabın hangi tür komutlarda geldiğini düşün.",
          "aciklama": "Terminalde panel açan komutlar Code sekmesinde bu cevabı verir; komut kaldırılmış ya da izni kapatılmış değildir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Argüman alan bir biçimi olmayan /permissions gibi komutlar Code sekmesinde isn't available in this environment cevabını verir."
          }
        },
        {
          "id": "b02-d4-s4",
          "tur": "coktan",
          "kart": 5,
          "soru": "Yeni oturumda 'proje — açılış' yazdın; Claude kendiliğinden uzun bir hazırlık başlattı. Neden?",
          "secenekler": [
            "CLAUDE.md'deki bir satır bu sözü skill'e bağlıyor",
            "İlk mesaj her zaman bir skill başlatır",
            "Bu söz / menüsünde yerleşik bir komut"
          ],
          "dogru": 0,
          "ipucu": "Bir skill'in / menüsü dışında nasıl başlatılabildiğini düşün.",
          "aciklama": "Bizim CLAUDE.md, 'proje — açılış' yazılınca acilis skill'inin koşulmasını söyler; / menüsü bir skill'i başlatmanın tek yolu değildir.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Kullanıcı 'proje — açılış' yazarsa acilis skill'i koşulur.",
            "soz": "yazarsa `acilis` skill'ini koş"
          }
        }
      ]
    },
    {
      "id": "b02-d5",
      "baslik": "Sık iş akışları",
      "hedefler": [
        "Hata düzeltirken Claude'a neyi baştan vermek gerektiğini anlatabilir.",
        "Claude'un sormadan başladığı işi kural ihlalinden ayırt edebilir.",
        "Plan kapısının hangi işte devreye girdiğini anlatabilir."
      ],
      "anlatim": [
        "İş akışı (workflow), sık yapılan bir işin hazır adımlarıdır. Hata düzeltmede önce hatayı gösterirsin, sonra birkaç düzeltme yolu istersin, en son seçtiğini uygulatırsın.",
        "Hatayı gösterirken yeniden üretme adımlarını, yani hatayı tekrar ortaya çıkaran adımları da söylersin.",
        "İstemde dosyanın yerini ve belirtiyi baştan söylersen çoğu zaman sonradan bir düzeltme turundan kurtulursun.",
        "CLAUDE.md'deki plan kapısı: iş birden fazla oturuma yayılacaksa, geri alınamayan bir şeye dokunuyorsa ya da yazdığın bir kuralı değiştiriyorsa Claude önce plan sunar ve durur.",
        "Aynı satıra göre bu koşulların dışındaki işe Claude sormadan başlar."
      ],
      "terimler": [
        {
          "tr": "iş akışı",
          "en": "workflow",
          "aciklama": "Sık yapılan bir işin adım adım izlenen hazır yolu."
        }
      ],
      "sorular": [
        {
          "id": "b02-d5-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Hatayı gösterdin; Claude hemen tek bir düzeltme yazmaya girişti. Akışa göre önce ne istersin?",
          "secenekler": [
            "Bitirmesini; beğenmezsen geri almasını",
            "Birkaç düzeltme yolu sunmasını",
            "Bütün projeyi okuyup özetlemesini"
          ],
          "dogru": 1,
          "ipucu": "Akışta düzeltmenin uygulanmasından önce hangi adımın geldiğini düşün.",
          "aciklama": "Hata düzeltme akışında hatayı gösterdikten sonra birkaç düzeltme yolu istenir; uygulanacak olanı sen seçersin.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/common-workflows",
            "kopya": "common-workflows.md",
            "okuma": "2026-11-15",
            "dayanak": "Hata düzeltme tarifi üç adımdır: hatayı Claude'la paylaş, düzeltme önerileri iste, düzeltmeyi uygulat."
          }
        },
        {
          "id": "b02-d5-s7",
          "tur": "coktan",
          "kart": 1,
          "soru": "Claude 'hatayı göremiyorum, bende her şey çalışıyor' dedi. İsteminde en olası eksik ne?",
          "secenekler": [
            "Hatanın hangi adımlarla yeniden çıktığı",
            "Hatanın ne zaman başladığına dair tahminin",
            "Claude'a 'dikkatli bak' uyarısı"
          ],
          "dogru": 0,
          "ipucu": "Claude'un hatayı kendi tarafında görebilmesi için neye ihtiyacı olduğunu düşün.",
          "aciklama": "Yeniden üretme adımları hatayı tekrar ortaya çıkarır; Claude hatayı göremezse düzeltemez. Bu yüzden hatayı gösterirken bu adımlar da söylenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/common-workflows",
            "kopya": "common-workflows.md",
            "okuma": "2026-11-15",
            "dayanak": "Hatayı yeniden üretme adımlarını Claude'a söyle."
          }
        },
        {
          "id": "b02-d5-s6",
          "tur": "bosluk",
          "kart": 2,
          "soru": "Claude'a 'giriş bozuk, düzelt' yazdın; başka bir şeyi düzeltti, ikinci tur gerekti. İsteme baştan ___ yazsaydın bu tur çoğu zaman gerekmezdi.",
          "secenekler": [
            "işin acil olduğunu",
            "kodun nasıl yazılacağını",
            "hatanın hangi dosyada, nasıl göründüğünü"
          ],
          "dogru": 2,
          "ipucu": "Kartta istemde baştan söylenmesi önerilen iki şeyi düşün.",
          "aciklama": "Dosyanın yerini ve belirtiyi baştan söyleyen istem çoğu zaman sonradan bir düzeltme turu kazandırır. Aciliyet ya da kodun nasıl yazılacağı bu iki bilgiyi vermez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Dosyanın adını verip belirtiyi anlatır ve düzelmiş halin neye benzeyeceğini baştan söylersen çoğu zaman sonradan bir düzeltme turundan kurtulursun."
          }
        },
        {
          "id": "b02-d5-s9",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Claude'dan, her seferinde sana sorduğu bir adımı artık sormamasını istedin. Kapıya göre bu iş ___ sayılır.",
          "secenekler": [
            "sıradan bir düzenleme",
            "yalnız o oturumu ilgilendiren iş",
            "senin koyduğun bir kapıyı kaldıran iş"
          ],
          "dogru": 2,
          "ipucu": "Sana sorulan bir adımı kimin koyduğunu düşün.",
          "aciklama": "Sana sorulan bir adımı kaldırmak, senin koyduğun bir kapıyı kaldırır; bu yüzden plan kapısına girer ve önce plan sunulur.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Satır, kullanıcıya sorulan bir kapıyı ya da koyduğu bir sınırı kaldıran değişikliği de plan kapısına girecek kural değişikliği sayar.",
            "soz": "Plan kapısı: iş birden fazla oturuma yayılacaksa"
          }
        },
        {
          "id": "b02-d5-s8",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude'dan bir rapordaki on yazım hatasını düzeltmesini istedin; plan sunmadan, sormadan başladı. Bu ne demek?",
          "secenekler": [
            "Olağan; iş kapının koşullarına girmiyor",
            "Kural ihlali; her iş önce plan ister",
            "Plan kapısı bu oturumda kapalı"
          ],
          "dogru": 0,
          "ipucu": "Kapının hangi işlerde devreye girdiğini, öteki işlerde ne olduğunu düşün.",
          "aciklama": "Yazım düzeltmesi birden çok oturuma yayılmaz, geri alınamaz değildir ve kuralını değiştirmez; kurala göre bu tür işe Claude sormadan başlar.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Satır, plan kapısının koşulları dışındaki işe sormadan başlanacağını söyler.",
            "soz": "Bunun dışındaki işe sormadan başla"
          }
        },
        {
          "id": "b02-d5-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "Üç güne, her gün yeni sohbete bölünecek bir iş verdin. Claude'dan ilk ne beklersin?",
          "secenekler": [
            "Bugünkü kısmı hemen yapmaya başlamasını",
            "Plan sunup onayını beklemesini",
            "İşi üç sohbete kendisi bölüp başlatmasını"
          ],
          "dogru": 1,
          "ipucu": "Plan kapısının hangi işlerde devreye girdiğini düşün.",
          "aciklama": "Plan kapısına göre birden fazla oturuma yayılacak işte Claude önce plan sunar ve orada durur; iş senin onayınla başlar.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "İş birden fazla oturuma yayılacaksa, geri alınamayan bir şeye dokunuyorsa ya da kullanıcının yazdığı bir kuralı değiştiriyorsa önce plan sunulur ve orada durulur.",
            "soz": "Plan kapısı: iş birden fazla oturuma yayılacaksa"
          }
        }
      ]
    },
    {
      "id": "b02-d6",
      "baslik": "Git ve kalıcı kayıt (commit)",
      "hedefler": [
        "Commit ile geri sarma noktasının farkını ve hangisine ne zaman güvenileceğini anlatabilir.",
        "Commit'ten önce yapılacak kontrolleri anlatabilir.",
        "Bu klasörde commit ve uzağa gönderim kuralını ayırt edebilir."
      ],
      "anlatim": [
        "Git, klasörün değişiklik geçmişini tutar; her commit bu geçmişe eklenen kalıcı bir kayıttır. Claude'un geri sarma noktaları (checkpoint) ise yalnız oturum içinde hızlı kurtarma içindir.",
        "Kursun önerdiği iş akışı dört adımdır: Keşfet, Planla, Kodla, Commit. En kolay yön düzeltmesi planda, kod yazılmadan önce yapılır.",
        "Commit'ten önce değişikliği kendin dene ve bir inceleyici alt ajana baktır. Alt ajan oturumun önyargısını taşımaz.",
        "Bizim CLAUDE.md'de şu satır var: 'klasör git ile tutulur, her iş bitince commit atılır'.",
        "CLAUDE.md'ye göre git geçmişini uzak depoya, yani dışarıdaki bir sisteme göndermek her seferinde sana sorulur. Sohbet kapanışında yedek deposuna gönderim bunun dışındadır."
      ],
      "terimler": [
        {
          "tr": "kalıcı kayıt",
          "en": "commit",
          "aciklama": "Değişikliklerin git geçmişine eklenen kalıcı kaydı; gerektiğinde git ile bu kayda dönülür."
        },
        {
          "tr": "geri sarma noktası",
          "en": "checkpoint",
          "aciklama": "Claude'un oturum içinde hızlı kurtarma için tuttuğu nokta; git'in yerini tutmaz."
        }
      ],
      "sorular": [
        {
          "id": "b02-d6-s2",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Bir hafta önceki hale dönmek istiyorsun ve o oturumlar kapandı; bunun için ___ güvenirsin.",
          "secenekler": [
            "Claude'un geri sarma noktalarına",
            "git geçmişindeki commit'lere",
            "Claude'un o haftayı hatırlamasına"
          ],
          "dogru": 1,
          "ipucu": "Geri sarma noktasının hangi süre için tutulduğunu düşün.",
          "aciklama": "Geri sarma noktaları oturum içinde hızlı kurtarma içindir; kalıcı geçmiş ve eski hale dönüş git commit'leriyle olur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/checkpointing",
            "kopya": "checkpointing.md",
            "okuma": "2026-11-15",
            "dayanak": "Geri sarma noktaları oturum içinde hızlı kurtarma içindir; kalıcı sürüm geçmişi için commit ve dallarla git gibi sürüm denetimini kullanmaya devam et."
          }
        },
        {
          "id": "b02-d6-s6",
          "tur": "coktan",
          "kart": 1,
          "soru": "Claude'un kodu üç kez yanlış yöne gitti; her seferinde farkta düzelttin. Kursa göre neyi atlıyorsun?",
          "secenekler": [
            "Her değişiklikten sonra commit atmayı",
            "Daha çok test yazdırmayı",
            "İşe başlamadan planı gözden geçirmeyi"
          ],
          "dogru": 2,
          "ipucu": "Yön düzeltmesinin hangi adımda en kolay olduğunu düşün.",
          "aciklama": "Kursa göre en kolay yön düzeltmesi planda, kod yazılmadan önce yapılır; yön farkta düzeltilirse iş her seferinde yeniden yazılır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/the-explore-plan-code-commit-workflow",
            "kopya": "ders-101-05-explore-plan-code-commit.md",
            "okuma": "2026-11-15",
            "dayanak": "Kursun önerdiği iş akışı sırasıyla Keşfet, Planla, Kodla ve Commit adımlarından oluşur; en kolay yön düzeltmesi planda, kod yazılmadan önce yapılır."
          }
        },
        {
          "id": "b02-d6-s7",
          "tur": "coktan",
          "kart": 2,
          "soru": "İş bitti; commit'ten önce bir kez daha kontrol ettirmek istiyorsun. Kime ettirirsin?",
          "secenekler": [
            "Ayrı bir inceleyici alt ajan",
            "İşi yapan oturum; neyi neden yaptığını bilir",
            "Claude'un özeti yeter"
          ],
          "dogru": 0,
          "ipucu": "Oturumun kendi işine bakarken neyi taşıdığını düşün.",
          "aciklama": "Alt ajan ana oturumun önyargısını taşımaz, işe temiz gözle bakar; bu yüzden commit'ten önce inceleyici alt ajan önerilir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/the-explore-plan-code-commit-workflow",
            "kopya": "ders-101-05-explore-plan-code-commit.md",
            "okuma": "2026-11-15",
            "dayanak": "Commit'ten önce işine bakması için bir alt ajan kod inceleyicisi çalıştır; alt ajan ana ajanın oturumdan gelen önyargısını taşımaz."
          }
        },
        {
          "id": "b02-d6-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude 'iş bitti' deyip yeni işe geçti; git geçmişinde bu işin kaydı yok. Ne yaparsın?",
          "secenekler": [
            "Bir şey demem; kayıtlar hafta sonu toplu atılır",
            "Kaydı atmasını isterim",
            "Geri sarma noktası almasını isterim"
          ],
          "dogru": 1,
          "ipucu": "Kuralın commit'i hangi anda istediğini düşün.",
          "aciklama": "Kurala göre her iş bitince commit atılır; kayıt yoksa yeni işe geçmeden önce istenir. Geri sarma noktası oturum içi kurtarmadır, kalıcı kayıt değildir.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Sürüm kaydı: klasör git ile tutulur, her iş bitince commit atılır.",
            "soz": "klasör git ile tutulur, her iş bitince commit atılır"
          }
        },
        {
          "id": "b02-d6-s5",
          "tur": "coktan",
          "kart": 4,
          "soru": "Dün git'i uzak depoya göndermesine onay verdin; bugün Claude aynı gönderim için yine soruyor. Neden?",
          "secenekler": [
            "Claude dünkü onayı unuttu",
            "Dünkü gönderim yarım kaldı",
            "Kural uzağa gönderimi her seferinde sorduruyor"
          ],
          "dogru": 2,
          "ipucu": "Uzağa gönderimde önceki onayın geçip geçmediğini düşün.",
          "aciklama": "Kurala göre git'i uzağa göndermek dış sisteme yazmaktır ve her seferinde sorulur; önceki onay geçmez.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Dış sisteme yazma, git'i uzağa gönderme dahil, her seferinde sorulur ve önceki onay geçmez; yedek deposuna kapanış gönderimi bunun dışındadır.",
            "soz": "git'i uzağa gönderme; yedek deposuna kapanış gönderimi hariç"
          }
        },
        {
          "id": "b02-d6-s8",
          "tur": "coktan",
          "kart": 4,
          "soru": "Sohbetin kapanışında Claude, sana sormadan yedek deposuna gönderim yaptı. Bu ne demek?",
          "secenekler": [
            "Kurala uygun; kapanıştaki yedek gönderimi sorulmaz",
            "Kural ihlali; her gönderim sorulmalıydı",
            "Gönderim yanlışlıkla oldu, geri alınmalı"
          ],
          "dogru": 0,
          "ipucu": "Kartta uzağa gönderim kuralının dışında tutulan durumu düşün.",
          "aciklama": "Kurala göre git'i uzağa göndermek her seferinde sorulur; sohbet kapanışındaki yedek deposu gönderimi bunun dışındadır.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Git'i uzağa gönderme her seferinde sorulur; yedek deposuna kapanış gönderimi bunun dışındadır.",
            "soz": "git'i uzağa gönderme; yedek deposuna kapanış gönderimi hariç"
          }
        }
      ]
    }
  ]
});
