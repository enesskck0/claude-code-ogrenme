// icerik/birim-10.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b10",
  "sira": 10,
  "baslik": "İşi Claude'a doğru tarif etmek",
  "amac": "İşi Claude'a açık, gerekçeli ve ölçülebilir bir bitti ölçütüyle tarif etmeyi; bizdeki ajan görev kalıbını okuyup kullanmayı öğrenirsin.",
  "dersler": [
    {
      "id": "b10-d1",
      "baslik": "Açık ve doğrudan olmak",
      "hedefler": [
        "Claude'u bağlamı bilmeyen yeni bir çalışan gibi düşünme testini anlatabilir.",
        "İstemde çıktı biçimini ve sınırı açıkça istemenin yerini ayırt edebilir.",
        "Bizdeki itiraz görevinin eksik bilgiyi nasıl yakaladığını anlatabilir."
      ],
      "anlatim": [
        "Claude'u parlak ama yeni bir çalışan gibi düşün: senin alışkanlıklarını ve iş akışını bilmiyor.",
        "Ne istediğini ne kadar açık anlatırsan sonuç o kadar iyi olur. Claude Code 101 kursu da istemini (prompt) olabildiğince tarif edici yazmanı söyler.",
        "Kısa bir test var: istemini işten habersiz bir arkadaşına göster. O şaşırırsa Claude da şaşırır.",
        "İstemde iki şeyi açık söyle: çıktı nasıl görünsün (biçim) ve hangi kısıtlara uyulsun (sınır).",
        "Adımların sırası önemliyse istemde onları numaralı ya da maddeli yaz.",
        "İşin gerektirdiğinden fazlasını istiyorsan bunu açıkça iste. Claude'un belirsiz bir istemden tahmin etmesine bırakma.",
        "Bizim CLAUDE.md'deki itiraz görevi: isteğinde hata ya da kritik bilgi eksiği varsa Claude işe başlamadan söyler, nedenini ve olası sonucunu yazar."
      ],
      "terimler": [
        {"tr": "istem", "en": "prompt", "aciklama": "Claude'a yazdığın iş tarifi, yani mesajın kendisi."}
      ],
      "sorular": [
        {
          "id": "b10-d1-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Resmi rehber Claude'u nasıl biri gibi düşünmeni öneriyor?",
          "secenekler": [
            "Projeyi baştan beri bilen bir ekip arkadaşı",
            "Parlak ama iş akışını bilmeyen yeni bir çalışan",
            "Her şeyi kendiliğinden bilen bir uzman"
          ],
          "dogru": 1,
          "ipucu": "Claude zeki, ama senin işine dair neyi bilmiyor, onu düşün.",
          "aciklama": "Rehber Claude'u bağlamı bilmeyen yeni bir çalışana benzetir. Bu yüzden ne istediğini ne kadar kesin anlatırsan sonuç o kadar iyi olur.",
          "kaynak": {
            "adres": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
            "kopya": "prompting-best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Rehber Claude'u, senin kurallarını ve iş akışlarını bilmeyen parlak ama yeni bir çalışan gibi düşünmeni ve ne istediğini olabildiğince kesin anlatmanı söyler."
          }
        },
        {
          "id": "b10-d1-s2",
          "tur": "coktan",
          "kart": 2,
          "soru": "İstemini işten habersiz bir arkadaşına gösterdin ve o şaşırdı. Rehberin testine göre bu ne demek?",
          "secenekler": [
            "Claude da şaşırır",
            "Arkadaşın işi bilmiyor, sonuç önemsiz",
            "İstem Claude için yeterince açık"
          ],
          "dogru": 0,
          "ipucu": "Testte arkadaşın kimin yerine konuyor, onu düşün.",
          "aciklama": "Bağlamı az bilen biri istemi okurken şaşırıyorsa Claude da şaşırır. Bu, istemi daha açık yazman gerektiğini gösterir.",
          "kaynak": {
            "adres": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
            "kopya": "prompting-best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Anahtar test, istemini işten az haberi olan bir arkadaşına gösterip izlemesini istemektir; o şaşırırsa Claude da şaşırır."
          }
        },
        {
          "id": "b10-d1-s3",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Rehbere göre istediğin çıktının ___ ve sınırları konusunda açık olmalısın.",
          "secenekler": ["biçimi", "teslim saati", "model adı"],
          "dogru": 0,
          "ipucu": "Çıktının sana nasıl görüneceğini düşün.",
          "aciklama": "Rehber, istediğin çıktının biçimini ve uyulacak kısıtları açıkça yazmanı ister.",
          "kaynak": {
            "adres": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
            "kopya": "prompting-best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "İstediğin çıktının biçimi ve kısıtları konusunda açık ol."
          }
        },
        {
          "id": "b10-d1-s4",
          "tur": "coktan",
          "kart": 5,
          "soru": "Basit sürümden fazlasını istiyorsun. Hangisi rehbere uyar?",
          "secenekler": [
            "Analiz panosu yap.",
            "Analiz panosu yap; ne kadarını istediğimi sen kestir, zaten anlarsın.",
            "Analiz panosu yap; temelin ötesine geç, ilgili özellikleri ekle."
          ],
          "dogru": 2,
          "ipucu": "Fazlasını istediğini hangi istem açıkça söylüyor?",
          "aciklama": "Rehberin örneğinde daha etkili istem, istenen kapsamı açıkça yazar. Claude fazlasını belirsiz bir istemden çıkarmak zorunda kalmaz.",
          "kaynak": {
            "adres": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
            "kopya": "prompting-best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "İşin gerektirdiğinden fazlasını istiyorsan, modelin bunu belirsiz istemden çıkarmasına güvenmek yerine açıkça iste."
          }
        },
        {
          "id": "b10-d1-s5",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude'dan sırası önemli üç adımlık bir iş istiyorsun. Rehbere göre adımları nasıl yazarsın?",
          "secenekler": [
            "Tek paragrafta, aklına geldiği sırayla",
            "Numaralı liste ya da maddelerle",
            "Yalnız son adımı yaz, gerisini Claude bulsun"
          ],
          "dogru": 1,
          "ipucu": "Sıra ya da eksiksizlik önemliyse rehber hangi yazımı öneriyor?",
          "aciklama": "Sıra ya da eksiksizlik önemliyse rehber adımları numaralı liste ya da maddelerle yazmanı önerir.",
          "kaynak": {
            "adres": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
            "kopya": "prompting-best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Adımların sırası ya da eksiksizliği önemliyse talimatları numaralı liste ya da madde imleriyle sıralı adımlar halinde ver."
          }
        },
        {
          "id": "b10-d1-s6",
          "tur": "coktan",
          "kart": 6,
          "soru": "İtiraz görevine göre isteğinde kritik bilgi eksikse Claude ne yapar?",
          "secenekler": [
            "Makul bir tahminle başlar, eksiği iş bitince söyler",
            "İşe başlamadan söyler, nedenini ve olası sonucunu yazar",
            "İşi bitirir, eksiği kapanış mesajında yazar"
          ],
          "dogru": 1,
          "ipucu": "Kartta itirazın ne zaman ve neyle birlikte yapıldığına bak.",
          "aciklama": "İtiraz görevi eksik bilgiyi işin başında yakalamak içindir. Claude nedenini ve olası sonucunu da yazar.",
          "kaynak": {
            "adres": "CLAUDE.md:72",
            "okuma": "2026-11-17",
            "dayanak": "İstekte hata görülürse, ne demek istendiği anlaşılmadıysa ya da kritik bilgi eksikse Claude işe başlamadan söyler, nedeni ve olası sonucu yazar.",
            "soz": "işe başlamadan söyle, nedeni ve olası sonucu yaz"
          }
        },
        {
          "id": "b10-d1-s7",
          "tur": "dogru-yanlis",
          "kart": 1,
          "soru": "Claude Code 101 kursunun ilk istem dersi, istemini olabildiğince tarif edici yazmanı önerir.",
          "dogru": true,
          "ipucu": "Kartta istemi ne kadar açık anlattığınla sonucun nasıl çıktığı arasındaki bağı düşün.",
          "aciklama": "Doğru. Dersin özeti istemini olabildiğince tarif edici yazmanı söyler.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/your-first-prompt",
            "kopya": "ders-101-04-your-first-prompt.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code kullanırken istemini olabildiğince tarif edici yazmaya çalış."
          }
        }
      ]
    },
    {
      "id": "b10-d2",
      "baslik": "Claude'un göremediğini söylemek",
      "hedefler": [
        "Somut bir istemin dosyayı, belirtiyi ve düzelmiş hali neden taşıdığını anlatabilir.",
        "Belirsiz bir istemle somut bir istemi ayırt edebilir.",
        "Elindeki dosyayı ya da görüntüyü tarif etmek yerine vermeyi anlatabilir."
      ],
      "anlatim": [
        "Claude işe kodunu okuyarak başlar. Bulamadığı şey depoda hiç olmayan bilgidir: toplantıda alınan bir karar, tek kişinin kafasındaki bir adım.",
        "Somut bir istem (specific prompt) dosyanın adını, belirtiyi ve düzelmiş halin neye benzediğini baştan söyler. Bu çoğu zaman bir düzeltme turunu kurtarır.",
        "Örnek: 'giriş hatasını düzelt' yerine 'oturum süresi dolunca giriş bozuluyor; girişle ilgili klasöre bak, hatayı gösteren bir test yaz, sonra düzelt'.",
        "İki makul yol arasında tercihin varsa baştan söyle. Claude bunu koddan okuyamaz.",
        "Keşif yapıyor, belli bir şeyi düzeltmiyorsan 'bu dosyada neyi iyileştirirsin?' gibi belirsiz bir istem de yerindedir. Bedeli, yolda biraz daha çok düzeltmektir.",
        "Elindeki şeyi tarif etme, ver. Masaüstünde hata görüntüsünü + düğmesiyle eklersin ya da isteme sürükleyip bırakırsın.",
        "Bizde bir kural daha var: mesajlarını çoğu zaman sesle yazdırıyorsun. İsim, oran ya da tarih işe girecekse Claude önce teyit eder."
      ],
      "terimler": [
        {"tr": "somut istem", "en": "specific prompt", "aciklama": "Dosyayı, belirtiyi ve düzelmiş halin neye benzediğini söyleyen istem."}
      ],
      "sorular": [
        {
          "id": "b10-d2-s1",
          "tur": "coktan",
          "kart": 1,
          "soru": "Somut bir istem hangi üç şeyi baştan söyler?",
          "secenekler": [
            "Model, efor ve oturum süresi",
            "Dosya adı, belirti ve düzelmiş hal",
            "Renk, yazı tipi ve ekran boyu"
          ],
          "dogru": 1,
          "ipucu": "Bir hatayı düzelttirirken Claude'un hangi bilgileri koddan çıkaramayacağını düşün.",
          "aciklama": "Bu üçü baştan söylenince Claude neyi aradığını ve ne zaman bittiğini bilir. Sayfa bunun çoğu zaman bir düzeltme turunu kurtardığını söyler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Dosyayı adlandırır, belirtiyi anlatır ve 'düzeldi'nin neye benzediğini baştan söylersen çoğu zaman sonradan bir düzeltme turundan kurtulursun."
          }
        },
        {
          "id": "b10-d2-s2",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude'un kodu okuyarak bulamadığı bilgi hangisi?",
          "secenekler": [
            "Bir dosyada yazan işlevin adı",
            "Test dosyalarının hangi klasörde durduğu",
            "Ekibin toplantıda aldığı bir karar"
          ],
          "dogru": 2,
          "ipucu": "Claude neyi okuyabilir, neyi okuyamaz, onu ayır.",
          "aciklama": "Toplantı kararı ya da birinin kafasındaki adım depoda yazılı değilse Claude onu okuyarak bulamaz. Dosyadaki ad ve klasör düzeni ise koddan okunur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude'un bulamadığı, depoda hiç olmamış bilgidir: ekibin toplantıda aldığı karar ya da tek kişinin kafasındaki dağıtım süreci gibi."
          }
        },
        {
          "id": "b10-d2-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Hangisi somut bir istem?",
          "secenekler": [
            "Giriş hatasını düzelt.",
            "Girişte bir sorun var galiba, kullanıcılar şikayet ediyor; bakıp düzeltir misin?",
            "Süre dolunca giriş bozuluyor; girişle ilgili klasöre bak, hatayı gösteren test yaz."
          ],
          "dogru": 2,
          "ipucu": "Hangisinde belirti ve bakılacak yer var?",
          "aciklama": "Girişle ilgili klasörü anan istem belirtiyi, bakılacak yeri ve hatayı gösteren testi söyler. Öteki ikisinde belirti ya da bakılacak yer yok, Claude tahmine kalır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "'Giriş hatasını düzelt' yerine 'kullanıcılar oturum süresi dolunca girişin başarısız olduğunu söylüyor; src/auth/ altındaki token yenilemeye bak, hatayı yeniden üreten başarısız bir test yaz, sonra düzelt' dene."
          }
        },
        {
          "id": "b10-d2-s4",
          "tur": "bosluk",
          "kart": 3,
          "soru": "İki makul yol arasında bir tercihin varsa onu ___ söyle, çünkü Claude bunu koddan okuyamaz.",
          "secenekler": ["iş bitince", "baştan", "yalnız sorarsa"],
          "dogru": 1,
          "ipucu": "Tercih ne zaman söylenirse Claude yanlış yola hiç girmez?",
          "aciklama": "Tercih koddan okunamadığı için Claude onu ancak sen söylersen bilir. Önceden söylenince yanlış yolla zaman kaybedilmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "İki makul yaklaşım arasındaki tercihi Claude koddan okuyamaz; hangisini seçtiği senin için önemliyse baştan söyle."
          }
        },
        {
          "id": "b10-d2-s5",
          "tur": "coktan",
          "kart": 5,
          "soru": "Masaüstündesin, elinde hatanın ekran görüntüsü var. Ne yaparsın?",
          "secenekler": [
            "Görüntüyü + düğmesiyle ekle ya da sürükleyip bırak",
            "Hatayı kendi sözlerinle uzun uzun anlat",
            "Hiç söyleme; Claude kodu okuyunca hatayı bulur"
          ],
          "dogru": 0,
          "ipucu": "Claude'un ihtiyaç duyduğu şey zaten elindeyse onu nasıl verirsin?",
          "aciklama": "Resmi sayfalar elindeki şeyi tarif etmek yerine vermeni söyler. Masaüstünde görüntü istem kutusunun yanındaki + düğmesiyle ya da sürükleyip bırakarak eklenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Görüntü, PDF ve başka dosyaları istem kutusunun yanındaki + düğmesiyle ekleyebilir ya da doğrudan isteme sürükleyip bırakabilirsin; bu, hataların ekran görüntülerini paylaşmak için kullanışlıdır."
          }
        },
        {
          "id": "b10-d2-s6",
          "tur": "bosluk",
          "kart": 6,
          "soru": "Sesle yazdırdığın mesajda işe girecek bir tarih var. Bizim kurala göre Claude o tarihi ___.",
          "secenekler": ["olduğu gibi kullanır", "önce teyit eder", "kendisi düzeltir"],
          "dogru": 1,
          "ipucu": "Bizim kuralın sesle yazdırılan mesajlar için ne istediğini düşün.",
          "aciklama": "Kural, isim, oran ya da tarih işleme girecekse Claude'un önce teyit etmesini ister.",
          "kaynak": {
            "adres": "CLAUDE.md:74",
            "okuma": "2026-11-17",
            "dayanak": "Kullanıcı mesajlarını çoğu zaman sesle yazdırır; isim, oran ya da tarih işleme girecekse önce teyit edilir.",
            "soz": "İsim, oran veya tarih işleme girecekse önce teyit et"
          }
        },
        {
          "id": "b10-d2-s7",
          "tur": "dogru-yanlis",
          "kart": 4,
          "soru": "Belli bir şeyi düzeltmek yerine keşif yapıyorsan 'bu dosyada neyi iyileştirirsin?' gibi belirsiz bir istem de tamamen uygundur.",
          "dogru": true,
          "ipucu": "Keşif ile belli bir hatayı düzeltmenin farkını düşün.",
          "aciklama": "Doğru. Keşifte belirsiz istem uygundur; bedeli, yol boyunca biraz daha çok düzeltme yapmaktır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belli bir şeyi düzeltmek yerine keşif yaparken 'bu dosyada neyi iyileştirirsin?' gibi belirsiz bir istem tamamen yerindedir; yolda biraz daha çok düzeltirsin, bedeli budur."
          }
        }
      ]
    },
    {
      "id": "b10-d3",
      "baslik": "Gerekçe vermek",
      "hedefler": [
        "Talimata nedenini eklemenin Claude'a ne kazandırdığını anlatabilir.",
        "Gerekçeli bir talimatla gerekçesiz bir talimatı ayırt edebilir.",
        "Bizdeki kural yazma ilkesinde sebebin yerini anlatabilir."
      ],
      "anlatim": [
        "Talimatın arkasındaki gerekçeyi (motivation) söylemek Claude'a amacını anlatır. Böylece daha hedefe yönelik cevap verir.",
        "Resmi örnek: 'ASLA üç nokta kullanma' yerine 'Cevabın sesli okunacak, okuma motoru üç noktayı nasıl söyleyeceğini bilmez, bu yüzden kullanma.' Claude açıklamadan genelleme yapabilir.",
        "Bizim CLAUDE.md'de de yazılı: 'Kural kaydederken bir sebep olmalı; istisnai durum kural yapılmaz.'",
        "Plan kapısındaki plan da neyin çıkacağını yazarken her biri için gerekçe taşır."
      ],
      "terimler": [
        {"tr": "gerekçe", "en": "motivation", "aciklama": "Bir talimatın neden istendiğini söyleyen açıklama."}
      ],
      "sorular": [
        {
          "id": "b10-d3-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Talimatın nedenini söylemek ne sağlar?",
          "secenekler": [
            "Claude'un cevabı daha kısa ve maddeler halinde yazmasını",
            "Claude'un daha hızlı çalışmasını",
            "Talimatın uzun oturumda hiçbir turda çiğnenmemesini",
            "Claude'un amacı anlayıp hedefe yönelik cevap vermesini"
          ],
          "dogru": 3,
          "ipucu": "Neden bilinince Claude hangi bilgiye sahip olur?",
          "aciklama": "Gerekçe Claude'a hedeflerin hakkında daha çok bilgi verir, o da cevabını buna göre yöneltir.",
          "kaynak": {
            "adres": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
            "kopya": "prompting-best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Talimatların arkasındaki bağlamı ya da gerekçeyi vermek, örneğin bir davranışın neden önemli olduğunu açıklamak, Claude'a hedeflerin hakkında daha çok bilgi verir ve daha hedefe yönelik cevaplar vermesine yardım eder."
          }
        },
        {
          "id": "b10-d3-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Hangi talimat rehberin önerdiği biçimde?",
          "secenekler": [
            "ASLA üç nokta kullanma.",
            "Cevabın sesli okunacak, okuma motoru üç noktayı okuyamaz; kullanma.",
            "Üç nokta kullanma; bu çok önemli, KESİNLİKLE ve HİÇBİR ZAMAN kullanma."
          ],
          "dogru": 1,
          "ipucu": "Hangi talimat Claude'a nedenini de söylüyor?",
          "aciklama": "Sesli okumayı anan talimat yasağın nedenini söyler, Claude da bu açıklamadan genelleme yapabilir. Büyük harf ve vurgu neden söylemez.",
          "kaynak": {
            "adres": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
            "kopya": "prompting-best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Rehberin örneğinde 'ASLA üç nokta kullanma' yerine, cevabın sesli okunacağını ve okuma motorunun üç noktayı telaffuz edemeyeceğini söyleyen talimat daha etkili sayılır."
          }
        },
        {
          "id": "b10-d3-s3",
          "tur": "dogru-yanlis",
          "kart": 1,
          "soru": "Rehbere göre Claude, bir talimatın açıklamasından genelleme yapabilir.",
          "dogru": true,
          "ipucu": "Sesli okuma örneğinin hemen ardındaki cümleyi düşün.",
          "aciklama": "Doğru. Neden bilinince Claude yalnız o satırı değil, arkasındaki amacı da göz önüne alabilir.",
          "kaynak": {
            "adres": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
            "kopya": "prompting-best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude açıklamadan genelleme yapabilir."
          }
        },
        {
          "id": "b10-d3-s4",
          "tur": "bosluk",
          "kart": 2,
          "soru": "Bizim CLAUDE.md'ye göre kural kaydederken bir ___ olmalı; istisnai durum kural yapılmaz.",
          "secenekler": ["sebep", "tarih", "onay numarası"],
          "dogru": 0,
          "ipucu": "Kartta tırnak içindeki satırın ilk yarısını hatırla.",
          "aciklama": "Satır, nedeni olmayan kuralın kaydedilmemesini ister. Tek seferlik istisnai durum da kural yapılmaz.",
          "kaynak": {
            "adres": "CLAUDE.md:101",
            "okuma": "2026-11-17",
            "dayanak": "Kural kaydederken bir sebep olmalı; istisnai durum kural yapılmaz.",
            "soz": "Kural kaydederken bir sebep olmalı; istisnai durum kural yapılmaz"
          }
        },
        {
          "id": "b10-d3-s5",
          "tur": "coktan",
          "kart": 1,
          "soru": "Soruların kısa olmasını istiyorsun. Hangisi gerekçe taşır?",
          "secenekler": [
            "En çok 200 karakter tut; bu kural kesindir, tartışılmaz.",
            "SORULAR KISA OLSUN, bu çok önemli.",
            "En çok 200 karakter tut, çünkü telefonda okunacaklar."
          ],
          "dogru": 2,
          "ipucu": "Hangisinde 'neden' sorusunun cevabı var?",
          "aciklama": "Telefonu anan tarif hem ölçüyü hem nedenini söyler. Yalnız ölçü vermek, kesinlik vurgusu ya da büyük harf neden söylemez.",
          "kaynak": {
            "adres": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
            "kopya": "prompting-best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Talimatın arkasındaki gerekçeyi, örneğin bir davranışın neden önemli olduğunu açıklamak Claude'un daha hedefe yönelik cevap vermesine yardım eder."
          }
        },
        {
          "id": "b10-d3-s6",
          "tur": "coktan",
          "kart": 3,
          "soru": "CLAUDE.md'deki plan kapısına göre plan, neyin çıkacağını yazarken her biri için ne ekler?",
          "secenekler": ["Bir teslim tarihi", "Bir sorumlu adı", "Bir gerekçe"],
          "dogru": 2,
          "ipucu": "Kartta planın, çıkacak her şey için neyi taşıdığına bak.",
          "aciklama": "Plan, neyin çıkacağını ve her biri için nedenini yazar. Böylece yalnız ne olacağını değil neden olacağını da görürsün.",
          "kaynak": {
            "adres": "CLAUDE.md:43",
            "okuma": "2026-11-17",
            "dayanak": "Plan kapısındaki plan bulgu özeti, yapılacaklar sırası, neyin çıkacağı ve her biri için gerekçe, riskler, en güçlü karşı argüman ve en az iki seçenek taşır.",
            "soz": "neyin çıkacağı ve her biri için gerekçe"
          }
        }
      ]
    },
    {
      "id": "b10-d4",
      "baslik": "Bitti ölçütü ve kontrol vermek",
      "hedefler": [
        "Claude'a koşabileceği bir kontrol vermenin neden işe yaradığını anlatabilir.",
        "Ölçülebilir bir bitti ölçütüyle ölçülemeyeni ayırt edebilir.",
        "Claude'dan kanıt istemenin nedenini anlatabilir."
      ],
      "anlatim": [
        "Claude iş bitmiş göründüğünde durur. Elinde işin gerçekten bitip bitmediğini söyleyen bir şey yoksa hataları yakalayan sen olursun.",
        "Ona geçti ya da kaldı diye dönen bir kontrol (check) ver: test dosyası, betik ya da ekran görüntüsü. Claude kontrolü koşar, bozulanı düzeltir.",
        "Kontrolü istemde verirsen ne zaman yeterli olduğuna Claude karar verir. Stop kancasını ise Claude Code zorlar; üçüncü yol, kodu yazmamış yeni bir alt ajandır.",
        "Hangi yolu seçersen seç, kanıt iste: koşulan komut ve çıktısı ya da ekran görüntüsü. 'Bütün testler geçti' tek başına az şey söyler.",
        "Testlerin geçmesi de tek başına yetmez: bir test sırf geçsin diye gevşetilmiş olabilir. Bu yüzden değişiklik farkı da okunur.",
        "Bizim ajan görev kalıbında bitti ölçütü ölçülebilir, komutla sınanabilir bir şarttır. Örnek: dosya var, her derste en az 6 soru, ünlem sayısı 0.",
        "CLAUDE.md'de de yazılı: 'Değiştirdiğin şeyi basit bir testle sına ve sonucunu yaz. Sınanmamış değişiklik bitmiş sayılmaz.'"
      ],
      "terimler": [
        {"tr": "kontrol", "en": "check", "aciklama": "Claude'un koşup geçti ya da kaldı sonucunu okuyabildiği şey: test, betik, ekran görüntüsü."}
      ],
      "sorular": [
        {
          "id": "b10-d4-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude'un elinde işin bitip bitmediğini söyleyen bir şey yoksa ne olur?",
          "secenekler": [
            "İşi hiç bitirmez, sen durdurana dek sürer",
            "Bitmiş görününce durur, hatayı sen fark edersin",
            "Durmadan önce kendi test dosyasını yazmak zorunda kalır"
          ],
          "dogru": 1,
          "ipucu": "Claude'un durma kararı neye dayanır, onu düşün.",
          "aciklama": "Kontrol yoksa Claude'un elinde yalnız işin bitmiş görünmesi vardır. Bu durumda test eden sen olursun ve hata sen fark edene kadar kalır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude iş bitmiş göründüğünde durur; işin gerçekten bitip bitmediğini söyleyen koşulabilir bir şeyi yoksa test takımı sen olursun ve her hata sen fark edene kadar orada kalır."
          }
        },
        {
          "id": "b10-d4-s2",
          "tur": "eslestir",
          "kart": 2,
          "soru": "Kontrolün yollarını, son sözün kimde olduğuyla eşleştir.",
          "ciftler": [
            ["İstemde 'testleri koş, geçene dek sürdür'", "Ne zaman yeterli olduğuna Claude karar verir"],
            ["Stop kancası", "Claude Code her seferinde zorlar"],
            ["Kodu yazmayan biri", "Konuşmayı görmemiş yeni bir alt ajan inceler"]
          ],
          "ipucu": "Bir uçta Claude'un kendi kararı, öbür uçta Claude Code'un zorlaması var.",
          "aciklama": "İstemdeki kontrolde son söz Claude'dadır, Stop kancasını ise Claude Code her seferinde uygular. Kodu yazmamış gözden geçirici, kodu üreten düşünceden etkilenmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Kontrol istemde verilebilir ve Claude ne zaman yeterli olduğuna kendi karar verir, Stop kancası olarak Claude Code tarafından zorlanabilir ya da konuşmayı hiç görmemiş yeni bir alt ajanla kodu yazmamış birine yaptırılabilir."
          }
        },
        {
          "id": "b10-d4-s3",
          "tur": "coktan",
          "kart": 5,
          "soru": "Hangisi ölçülebilir, komutla sınanabilir bir bitti ölçütü?",
          "secenekler": [
            "Sayfa güzel ve düzenli görünsün, herkes beğensin.",
            "İş düzgün bitsin.",
            "Testler geçsin ve dosyada ünlem sayısı 0 olsun.",
            "Claude memnun kalana kadar sürsün."
          ],
          "dogru": 2,
          "ipucu": "Hangisini bir komutla sayıp evet ya da hayır diyebilirsin?",
          "aciklama": "Test sonucu ve ünlem sayısı bir komutla ölçülür. Güzel ya da düzgün olmak ölçülemez, kişiye göre değişir.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md:21",
            "okuma": "2026-11-17",
            "dayanak": "Görev kalıbındaki bitti ölçütü ölçülebilir, komutla sınanabilir bir şarttır.",
            "soz": "ölçülebilir, komutla sınanabilir şart"
          }
        },
        {
          "id": "b10-d4-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude 'bütün testler geçti' dedi. Resmi sayfaya göre kanıt olarak ne istersin?",
          "secenekler": [
            "Bu sözü yeterli sayar, başka şey istemezsin",
            "Koşulan komutu ve çıktısını",
            "Kaç testin geçtiğini söylemesini"
          ],
          "dogru": 1,
          "ipucu": "Bir söz ile görebildiğin bir kanıt arasındaki farkı düşün.",
          "aciklama": "Sayfa koşulan komutu ve çıktısını ya da ekran görüntüsünü istemeni söyler. 'Bütün testler geçti' tek başına çok az şey anlatır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Hangi yolu seçersen seç Claude'dan kanıt iste, yani koştuğu komutu ve çıktısını ya da ekran görüntüsünü; tek başına 'bütün testler geçti' sana çok az şey söyler."
          }
        },
        {
          "id": "b10-d4-s5",
          "tur": "bosluk",
          "kart": 6,
          "soru": "CLAUDE.md'ye göre ___ değişiklik bitmiş sayılmaz.",
          "secenekler": ["küçük", "sınanmamış", "gece yapılan"],
          "dogru": 1,
          "ipucu": "Satırın baş kısmı değişikliğin basit bir testle yoklanmasını ister.",
          "aciklama": "Kural, değişikliğin basit bir testle sınanmasını ve sonucunun yazılmasını ister. Test yoksa iş bitmiş sayılmaz.",
          "kaynak": {
            "adres": "CLAUDE.md:52",
            "okuma": "2026-11-17",
            "dayanak": "Değiştirdiğin şeyi basit bir testle sına ve sonucunu yaz; sınanmamış değişiklik bitmiş sayılmaz.",
            "soz": "Sınanmamış değişiklik bitmiş sayılmaz"
          }
        },
        {
          "id": "b10-d4-s6",
          "tur": "coktan",
          "kart": 1,
          "soru": "Hangi istem Claude'a koşabileceği bir kontrol veriyor?",
          "secenekler": [
            "Düzelt, testleri koş, geçene dek sürdür; çıktıyı göster.",
            "Düzelt, emin olunca bana kısaca 'bitti' de.",
            "Düzelt, ben sonra bakarım."
          ],
          "dogru": 0,
          "ipucu": "Hangisinde geçti ya da kaldı diye dönen bir şey var?",
          "aciklama": "Testleri koşturan istem kontrolü isteme koyar ve çıktıyı kanıt olarak ister. Sayfaya göre bu yol kurulum gerektirmeden her işte çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "İstemde 'sonra testleri koş ve geçene kadar sürdür' demek, Claude'un ne zaman yeterli olduğuna kendisinin karar verdiği ve her işte kurulumsuz çalışan yoldur."
          }
        },
        {
          "id": "b10-d4-s7",
          "tur": "dogru-yanlis",
          "kart": 4,
          "soru": "Testlerin geçmesi tek başına yetmez; bir test sırf geçsin diye gevşetilmiş olabilir, bu yüzden fark da okunur.",
          "dogru": true,
          "ipucu": "Kartın testler ve değişiklik farkı hakkında ne dediğini hatırla.",
          "aciklama": "Doğru. Fark okunarak hiçbir testin sırf geçsin diye zayıflatılmadığı da kontrol edilir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/verification-skills",
            "kopya": "ders-action-03-verification-skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir test ne olursa olsun geçecek biçimde sessizce gevşetilebilir; bu yüzden beceri farkı okur ve testlerin zayıflatılmadığını doğrular."
          }
        }
      ]
    },
    {
      "id": "b10-d5",
      "baslik": "Ne istediğini bilmezken: Claude seni sorgulasın",
      "hedefler": [
        "'Beni sorgula, sonra tarifi dosyaya yaz' isteminin nasıl kurulduğunu anlatabilir.",
        "Tarif dosyası yazıldıktan sonra yeni oturum açmanın nedenini anlatabilir.",
        "Bizde Claude'un sana soru sorma biçimini anlatabilir."
      ],
      "anlatim": [
        "Ne istediğini tam bilmiyorsan her şeyi önceden çözmen gerekmez. Claude'dan seni sorgulamasını (interview) iste.",
        "Örnek istem: 'Bunu henüz düşünmedim. Tarifi yazabilecek hale gelene kadar beni sorgula, sonra SPEC.md dosyasına yaz.'",
        "Claude karar vermediğin yerler için çoktan seçmeli sorular sorar. Cevaplar bir tarif oluşturana kadar sürer.",
        "SPEC.md yazılınca işi yeni bir oturumda başlat. Yapım temiz bir bağlamla ve yazılı bir bitti tanımıyla başlar.",
        "Bizde 'durum diskte yaşar': önemli çıktı üretildiği anda diske yazılır, kapanış beklenmez.",
        "Bizim soru biçimi kuralı: Claude notunu anlamadıysa tahmin etmez, seçenekli sorar. Seçenekler a, b, c harfiyle gelir, önerdiği '(önerilen)' diye işaretlenir."
      ],
      "terimler": [
        {"tr": "sorgulamak", "en": "interview", "aciklama": "Claude'un, tarif yazılabilecek hale gelene kadar sana soru sorması."}
      ],
      "sorular": [
        {
          "id": "b10-d5-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Ne istediğini tam bilmiyorsan resmi sayfa ne öneriyor?",
          "secenekler": [
            "Her şeyi kendin çözene kadar Claude'a hiç yazmamak",
            "Claude'dan seni sorgulamasını istemek",
            "Claude'a 'en iyisini sen bil' deyip serbest bırakmak"
          ],
          "dogru": 1,
          "ipucu": "Eksik kararları kimin, nasıl ortaya çıkaracağını düşün.",
          "aciklama": "Sayfa, işi önceden çözmen gerekmediğini, Claude'un seni sorgulayabileceğini söyler. Sorular karar vermediğin yerleri ortaya çıkarır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Ne istediğini tam bilmediğinde isteme başlamadan her şeyi çözmen gerekmez; bunun yerine Claude'dan seni sorgulamasını iste."
          }
        },
        {
          "id": "b10-d5-s2",
          "tur": "sirala",
          "kart": 3,
          "soru": "Ne istediğini bilmediğin bir işte adımları sıraya koy.",
          "adimlar": [
            "Fikrini ve henüz düşünmediğini Claude'a söyle",
            "Tarif yazılabilene kadar seni sorgulamasını iste",
            "Claude'un çoktan seçmeli sorularını cevapla",
            "Claude tarifi SPEC.md dosyasına yazsın",
            "Yeni bir oturum aç ve işi bu dosyadan yaptır"
          ],
          "ipucu": "Dosya yazılmadan yeni oturuma geçilmez.",
          "aciklama": "Önce sorgulama tarifi çıkarır, tarif dosyaya yazılır, yapım yeni oturumda başlar. Böylece yapım temiz bağlamla ve yazılı bir bitti tanımıyla başlar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude'dan, tarifi yazabilecek hale gelene kadar seni sorgulamasını ve sonra SPEC.md'ye yazmasını iste; SPEC.md oluşunca yapım için yeni bir oturum başlat."
          }
        },
        {
          "id": "b10-d5-s3",
          "tur": "dogru-yanlis",
          "kart": 2,
          "soru": "Sorgulama sırasında Claude, karar vermediğin noktalar için çoktan seçmeli sorular getirir.",
          "dogru": true,
          "ipucu": "Kartta Claude'un sorgulama sırasında sorduğu soruların biçimine bak.",
          "aciklama": "Doğru. Claude henüz netleştirmediğin yerler için çoktan seçmeli sorularla döner ve cevaplar bir tarif oluşturana kadar sorar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude henüz netleştirmediğin kısımlar hakkında çoktan seçmeli sorularla döner ve cevaplar bir tarif oluşturana kadar sormayı sürdürür."
          }
        },
        {
          "id": "b10-d5-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "SPEC.md yazılınca işi neden yeni oturumda başlatırsın?",
          "secenekler": [
            "Eski oturum yazılan SPEC.md dosyasını artık okuyamadığı için",
            "Yeni oturum daha ucuz olduğu için",
            "Temiz bağlamla ve yazılı bitti tanımıyla başlamak için"
          ],
          "dogru": 2,
          "ipucu": "Uzun bir sorgulamadan sonra oturumda neler birikmiş olur?",
          "aciklama": "Yeni oturum sorgulamanın kalabalığını taşımaz ve elinde yazılı tarif vardır. Aynı dosya sonra gözden geçirmede de ölçü olur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "SPEC.md oluşunca yapım için yeni bir oturum başlat ki yapım temiz bir bağlamla ve yazılı bir bitti tanımıyla başlasın."
          }
        },
        {
          "id": "b10-d5-s5",
          "tur": "coktan",
          "kart": 1,
          "soru": "Uygulamaya hatırlatma eklemek istiyorsun, ayrıntıyı düşünmedin. Hangi istemle başlarsın?",
          "secenekler": [
            "Henüz düşünmedim; beni sorgula, sonra tarifi dosyaya yaz.",
            "Hatırlatma özelliği ekle; bütün ayrıntıları sen kendin belirle.",
            "Hatırlatma ekle, en iyisini sen bil."
          ],
          "dogru": 0,
          "ipucu": "Hangi istem Claude'a henüz karar vermediğini söylüyor?",
          "aciklama": "Sorgulama isteyen istem eksik kararları sorularla ortaya çıkarır ve sonucu dosyaya yazdırır. Öteki ikisi ayrıntıyı Claude'un tahminine bırakır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Ne istediğini tam bilmediğinde Claude'dan, tarifi yazabilecek hale gelene kadar seni sorgulamasını ve sonra dosyaya yazmasını iste."
          }
        },
        {
          "id": "b10-d5-s6",
          "tur": "coktan",
          "kart": 5,
          "soru": "Claude notunu anlamadı. Bizim soru biçimi kuralına göre ne yapar?",
          "secenekler": [
            "En makul anlamı tahmin edip devam eder",
            "Tahmin etmez, seçenekli bir soru sorar",
            "Notu atlar, sonraki işe geçer"
          ],
          "dogru": 1,
          "ipucu": "Soru biçimi kuralının anlaşılmayan not için ne dediğini düşün.",
          "aciklama": "Not anlaşılmadıysa Claude tahmin etmez, seçenekli bir soru sorar.",
          "kaynak": {
            "adres": "CLAUDE.md:47",
            "okuma": "2026-11-17",
            "dayanak": "Kullanıcının notu anlaşılmadıysa tahmin edilmez, seçenekli sorulur.",
            "soz": "Notumu anlamadıysan tahmin etme, seçenekli sor"
          }
        },
        {
          "id": "b10-d5-s7",
          "tur": "bosluk",
          "kart": 4,
          "soru": "CLAUDE.md'ye göre durum diskte yaşar: önemli çıktı ___ diske yazılır, kapanış beklenmez.",
          "secenekler": ["kapanışta", "üretildiği anda", "kullanıcı onaylayınca"],
          "dogru": 1,
          "ipucu": "Satırın sonu kapanışın beklenmediğini söylüyor; buna göre zamanı düşün.",
          "aciklama": "Satır, önemli çıktının hemen diske yazılmasını ister, kapanışı beklemez. SPEC.md gibi bir tarif dosyası da bu ilkeye uyar.",
          "kaynak": {
            "adres": "CLAUDE.md:37",
            "okuma": "2026-11-17",
            "dayanak": "Durum diskte yaşar; önemli çıktı üretildiği anda diske yazılır, kapanış beklenmez.",
            "soz": "Önemli çıktı üretildiği anda diske yazılır, kapanış beklenmez"
          }
        }
      ]
    },
    {
      "id": "b10-d6",
      "baslik": "Keşfet, planla, kodla, kaydet",
      "hedefler": [
        "Keşfet, planla, kodla, kaydet adımlarını sırasıyla anlatabilir.",
        "Her adımda Claude'dan ne istendiğini ayırt edebilir.",
        "Masaüstünde plan moduna nasıl geçildiğini anlatabilir."
      ],
      "anlatim": [
        "Claude Code 101 kursu, kurstan tek şey alacaksan bu akış olsun der: keşfet (explore), planla, kodla, kaydet. Çoğu kişi doğrudan kod isteyip sonra çok düzeltir.",
        "İlk iki adımın en hızlı yolu plan modudur (plan mode): Claude dosyaları okur, inceler, bir eylem planı getirir; sen onaylayana kadar düzenleme yapmaz.",
        "Masaüstünde modu istem kutusunun altındaki mod seçiciden Plan diye seçersin. Terminaldeki Shift+Tab masaüstünde mod değiştirmez.",
        "Plan gelince oku; yön düzeltmenin en iyi yeri burasıdır, çünkü henüz kod yazılmadı. Plan iyiyse onayla, Claude maddeleri uygular.",
        "Kaydet adımında önce bir alt ajan işi gözden geçirir. Sonra Claude kayıt (commit) mesajını senin üslubunla yazar.",
        "Bizde büyük iş başlatan mesajdan sonra Claude ilk satırda okumasını yazar: ne yapacağı, neyi yapmayacağı, çıktı nasıl görünecek.",
        "Plan kapısı: iş birden çok oturuma yayılacaksa, silme gibi geri alınamaz bir şeye dokunuyorsa ya da yazılı bir kuralı değiştiriyorsa Claude önce plan sunup durur."
      ],
      "terimler": [
        {"tr": "keşfet", "en": "explore", "aciklama": "Claude'un işe başlamadan ilgili dosyaları okuyup bağlam toplaması."},
        {"tr": "plan modu", "en": "plan mode", "aciklama": "Claude'un dosya düzenlemeden inceleyip plan önerdiği mod."},
        {"tr": "kayıt", "en": "commit", "aciklama": "Değişikliğin git'e mesajıyla birlikte kaydedilmesi."}
      ],
      "sorular": [
        {
          "id": "b10-d6-s1",
          "tur": "sirala",
          "kart": 0,
          "soru": "Claude Code 101'deki akışın adımlarını sıraya koy.",
          "adimlar": [
            "Keşfet: Claude ilgili dosyaları okur",
            "Planla: Claude bir eylem planı getirir, sen incelersin",
            "Kodla: onaylanan plan uygulanır",
            "Kaydet: iş gözden geçirilir, commit atılır"
          ],
          "ipucu": "Kod yazılmadan önce iki adım var.",
          "aciklama": "Önce bağlam toplanır ve plan kurulur, kod ancak ondan sonra gelir. Kayıt en sona kalır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/the-explore-plan-code-commit-workflow",
            "kopya": "ders-101-05-explore-plan-code-commit.md",
            "okuma": "2026-11-15",
            "dayanak": "Kurs, Claude Code ile etkili çalışmak için keşfet, planla, kodla ve kaydet akışını izlemeni söyler."
          }
        },
        {
          "id": "b10-d6-s2",
          "tur": "coktan",
          "kart": 3,
          "soru": "Kursa göre yön düzeltmenin en iyi yeri neresi?",
          "secenekler": [
            "Kod yazıldıktan sonra, kayıttan önce",
            "Plan adımı, kod yazılmadan önce",
            "Kayıttan sonra, yeni işe geçerken"
          ],
          "dogru": 1,
          "ipucu": "Hangi anda değiştirilecek kod henüz yoktur?",
          "aciklama": "Kurs, plan adımını kod yazılmadan önce geldiği için yön düzeltmenin en iyi yeri sayar.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/the-explore-plan-code-commit-workflow",
            "kopya": "ders-101-05-explore-plan-code-commit.md",
            "okuma": "2026-11-15",
            "dayanak": "Burası yön düzeltmenin en iyi yeridir, çünkü henüz hiç kod yazılmamıştır."
          }
        },
        {
          "id": "b10-d6-s3",
          "tur": "eslestir",
          "kart": 4,
          "soru": "Her adımı, o adımda Claude'dan istenenle eşleştir.",
          "ciftler": [
            ["Keşfet", "Proje için gereken bağlamı topla"],
            ["Planla", "Başarıyı ölçeceğin bir eylem planı çıkar"],
            ["Kodla", "Son sonuca varana dek benimle karşılıklı çalış"],
            ["Kaydet", "Gözden geçir, kayıt mesajını yaz"]
          ],
          "ipucu": "Her adımın adı, o adımda ne yapıldığını zaten söylüyor.",
          "aciklama": "Keşfet bağlamı verir, planla ölçüyü kurar, kodla karşılıklı çalışmadır, kaydet gözden geçirip gönderir. Her adımda Claude'dan başka bir şey istenir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/the-explore-plan-code-commit-workflow",
            "kopya": "ders-101-05-explore-plan-code-commit.md",
            "okuma": "2026-11-15",
            "dayanak": "Keşfet Claude'a gereken bağlamı verir, planla başarıyı ölçeceği eylem planını kurar, kodla son sonuca varana kadar karşılıklı çalışmadır, kaydet de kodu gözden geçirip göndermeye yarar."
          }
        },
        {
          "id": "b10-d6-s4",
          "tur": "coktan",
          "kart": 2,
          "soru": "Masaüstündeki Code sekmesinde plan moduna geçmek istiyorsun. Ne yaparsın?",
          "secenekler": [
            "Shift+Tab tuşlarına basarsın",
            "Ayarlar menüsünden yeni bir Plan projesi açarsın",
            "İstem kutusunun altındaki mod seçiciden Plan'ı seçersin"
          ],
          "dogru": 2,
          "ipucu": "Masaüstü ile terminal bu konuda farklı çalışıyor.",
          "aciklama": "Masaüstünde mod, istem kutusunun altındaki mod seçiciyle değişir. Shift+Tab modlar arasında yalnız terminalde dolaşır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Masaüstünde izin modunu istem kutusunun altındaki satırdaki mod seçiciyle istediğin an değiştirirsin; Shift+Tab masaüstünde terminaldeki gibi modlar arasında dolaşmaz."
          }
        },
        {
          "id": "b10-d6-s5",
          "tur": "dogru-yanlis",
          "kart": 1,
          "soru": "Plan modunda Claude dosyaları okur ve bir plan önerir, ama sen onaylayana kadar dosyalarda düzenleme yapmaz.",
          "dogru": true,
          "ipucu": "Modun adı neyi öne koyduğunu söylüyor.",
          "aciklama": "Doğru. Plan modu, değişikliği diske dokunmadan önce görmek içindir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/common-workflows",
            "kopya": "common-workflows.md",
            "okuma": "2026-11-15",
            "dayanak": "Plan modunda Claude dosyaları okur ve bir plan önerir, ama sen onaylayana kadar düzenleme yapmaz."
          }
        },
        {
          "id": "b10-d6-s6",
          "tur": "coktan",
          "kart": 6,
          "soru": "Plan kapısına göre Claude hangi işte önce plan sunup durur?",
          "secenekler": [
            "Tek dosyadaki bir yazım hatasını düzeltirken",
            "Silme gibi geri alınamayan bir işte",
            "Bir dosyayı okuyup kısa özet çıkarırken"
          ],
          "dogru": 1,
          "ipucu": "Kapının saydığı durumları hatırla: oturum sayısı, geri dönüş, kural değişikliği.",
          "aciklama": "Plan kapısı birden çok oturuma yayılan, geri alınamayan ya da yazılmış bir kuralı değiştiren işte açılır. Öteki işlere Claude sormadan başlar.",
          "kaynak": {
            "adres": "CLAUDE.md:43",
            "okuma": "2026-11-17",
            "dayanak": "İş birden fazla oturuma yayılacaksa, silme gibi geri alınamayan bir şeye dokunuyorsa ya da yazılmış bir kuralı değiştiriyorsa önce plan sunulur ve orada durulur.",
            "soz": "geri alınamayan bir şeye dokunuyorsa"
          }
        },
        {
          "id": "b10-d6-s7",
          "tur": "bosluk",
          "kart": 5,
          "soru": "Büyük iş başlatan mesajdan sonra Claude ilk satırda ___ yazar: ne yapacağı, neyi yapmayacağı, çıktının nasıl görüneceği.",
          "secenekler": ["okumasını", "teşekkürünü", "tahmini süreyi"],
          "dogru": 0,
          "ipucu": "Claude isteği nasıl anladığını gösteriyor.",
          "aciklama": "Bu satır Claude'un isteği nasıl anladığını işin başında gösterir. Sonra sormadan başlar.",
          "kaynak": {
            "adres": "CLAUDE.md:22",
            "okuma": "2026-11-17",
            "dayanak": "Büyük iş başlatan mesajdan sonra Claude ilk satırda okumasını yazar: ne yapacağı, neyi yapmayacağı ve çıktının nasıl görüneceği; sonra sormadan başlar.",
            "soz": "ilk satırda okumamı yazarım"
          }
        }
      ]
    },
    {
      "id": "b10-d7",
      "baslik": "Bizde görev tarifi: ajan görev kalıbı",
      "hedefler": [
        "Görev kalıbının Amaç, Dokunulacak yollar, Bitti ölçütü ve Kenar durumları alanlarını anlatabilir.",
        "Küçük bir değişikliğin bu kalıpla Claude'a nasıl tarif edileceğini anlatabilir.",
        "Sonucu tarif etmekle adımları tek tek yazmayı ayırt edebilir."
      ],
      "anlatim": [
        "Bizde ana oturum bir ajana iş verirken görev kalıbını kullanır. İlk kural: görev kısa yazılır, nasıl yapılacağı yazılmaz.",
        "Kalıptaki alanlardan dördü: Amaç işin kimin için olduğunu, Dokunulacak yollar sınırı, Bitti ölçütü bitişi, Kenar durumları beklenmeyen hali söyler.",
        "Örnek görev: amaç, birim 10 dosyasını yazmak; yol, yalnız ogrenme/icerik/birim-10.js; bitti, her derste en az 6 soru ve ünlem sayısı 0.",
        "Resmi istem kütüphanesi aynı yere varır: adımları değil sonucu tarif et, dosyaları Claude bulsun.",
        "Kütüphane ölçülebilir hedef de ister: ölçütle birlikte eşiği de ver, ör. paket boyutu 200 KB altında olsun.",
        "AI Fluency kursu, işi yapay zekâya açıkça anlatma becerisine tarif (Description) der. Bu, kursun dört yetkinliğinden biridir."
      ],
      "terimler": [
        {"tr": "tarif", "en": "Description", "aciklama": "AI Fluency kursunun dört yetkinliğinden biri: yapay zekâyla açık iletişim kurmak."}
      ],
      "sorular": [
        {
          "id": "b10-d7-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bizim görev kalıbına göre ajana verilen görevde ne yazılmaz?",
          "secenekler": [
            "İşin amacı ve nedeni",
            "Dokunulacak yollar",
            "İşin nasıl yapılacağı",
            "Ölçülebilir bitti ölçütü"
          ],
          "dogru": 2,
          "ipucu": "Kalıp görevin kısa yazılmasını ister; kısa kalsın diye neyi ajana bırakırsın?",
          "aciklama": "Görev sonucu ve sınırı söyler, yolu ajana bırakır. Resmi istem kütüphanesi de adımları değil sonucu tarif etmeyi önerir.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md:16",
            "okuma": "2026-11-17",
            "dayanak": "Görev kısa yazılır; nasıl yapılacağı yazılmaz.",
            "soz": "Görev kısa yazılır; nasıl yapılacağı yazılmaz"
          }
        },
        {
          "id": "b10-d7-s2",
          "tur": "eslestir",
          "kart": 1,
          "soru": "Görev kalıbının alanlarını taşıdıkları bilgiyle eşleştir.",
          "ciftler": [
            ["Amaç", "Kimin için, hangi iş ya da karar bekliyor"],
            ["Dokunulacak yollar", "Yalnız bu yollar; dokunulmayacaklar adıyla"],
            ["Bitti ölçütü", "Komutla sınanabilen, ölçülebilir şart"],
            ["Kenar durumları", "Beklenmeyen hal gelince ne yapılacağı"]
          ],
          "ipucu": "Her alanın adı neyi taşıdığına dair ipucu verir.",
          "aciklama": "Amaç nedeni ve kimin için olduğunu, yollar sınırı, bitti ölçütü işin ne zaman bittiğini, kenar durumları beklenmeyen hali karşılar.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md:16",
            "okuma": "2026-11-17",
            "dayanak": "Görev kalıbı amaç ve nedeni, yalnız dokunulacak yolları, komutla sınanabilir bitti ölçütünü ve beklenmeyen hal için kenar durumlarını alan olarak sayar.",
            "soz": "Alanlar: - Amaç ve neden (kimin için, ne karar ya da iş bekliyor)"
          }
        },
        {
          "id": "b10-d7-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Hangisi 'Dokunulacak yollar' alanına uygun bir satır?",
          "secenekler": [
            "Gerekli gördüğün her dosyaya yazabilirsin.",
            "Yalnız ogrenme/icerik/birim-10.js; başka dosya değişmez.",
            "Bitince bana haber ver."
          ],
          "dogru": 1,
          "ipucu": "Alan, yolları adıyla ve sınırlı ister.",
          "aciklama": "Alan yalnız yazılacak yolları adıyla verir ve ötekileri dışarıda tutar. Her dosyaya izin vermek sınır koymaz.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md:19",
            "okuma": "2026-11-17",
            "dayanak": "Dokunulacak yollar yalnız bunlardır, dokunulmayacak yollar da adıyla yazılır.",
            "soz": "Dokunulacak yollar (yalnız bunlar) ve dokunulmayacak yollar, adıyla"
          }
        },
        {
          "id": "b10-d7-s4",
          "tur": "dogru-yanlis",
          "kart": 3,
          "soru": "Resmi istem kütüphanesine göre iyi bir istem, Claude'un izleyeceği her adımı tek tek yazmalıdır.",
          "dogru": false,
          "ipucu": "Kütüphanenin Claude'a neyi tarif etmeni önerdiğini hatırla.",
          "aciklama": "Yanlış. Kütüphane adımları değil sonucu tarif etmeni, dosyaları Claude'un bulmasını önerir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/prompt-library",
            "kopya": "prompt-library.md",
            "okuma": "2026-11-15",
            "dayanak": "Adımları değil sonucu tarif et: ne istediğini söyle, dosyaları Claude bulsun."
          }
        },
        {
          "id": "b10-d7-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "Kapanış skill'inde bir cümle netleşsin istiyorsun. Hangi tarif kalıba uyar?",
          "secenekler": [
            "Amaç: cümle netleşsin. Yol: yalnız kapanis/SKILL.md. Bitti: denetim temiz.",
            "Kapanış skill'ini düzelt, nasıl istersen.",
            "Dosyayı aç, cümleyi bul, eski sözcüğü sil, yenisini yaz, sonra kaydet."
          ],
          "dogru": 0,
          "ipucu": "Hangisi amacı, sınırı ve bitişi söylüyor, yolu Claude'a bırakıyor?",
          "aciklama": "Doğru tarif amacı, yazılacak yolu ve ölçülebilir bitişi verir, nasıl yapılacağını yazmaz. Öteki ikisinden biri sınır koymaz, biri yalnız adım sayar.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md:16",
            "okuma": "2026-11-17",
            "dayanak": "Görev kısa yazılır, nasıl yapılacağı yazılmaz ve amaç, dokunulacak yollar ile ölçülebilir bitti ölçütü alanlarını taşır.",
            "soz": "Görev kısa yazılır; nasıl yapılacağı yazılmaz"
          }
        },
        {
          "id": "b10-d7-s6",
          "tur": "bosluk",
          "kart": 4,
          "soru": "İstem kütüphanesine göre hedef performans ya da kapsamsa ölçütü ve ___ ver ki işin ne zaman bittiği belirsiz kalmasın.",
          "secenekler": ["rengi", "yazarı", "eşiği"],
          "dogru": 2,
          "ipucu": "Kartta paket boyutu için verilen sayının ne işe yaradığını düşün.",
          "aciklama": "Ölçüt ile eşik birlikte verilince bitiş tartışmasız olur. Kütüphanedeki örnek paket boyutunu 200 KB altına indirmeyi ister.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/prompt-library",
            "kopya": "prompt-library.md",
            "okuma": "2026-11-15",
            "dayanak": "Hedef performans ya da kapsam olduğunda ölçütü ve eşiği ver ki işin bitişi tartışmasız olsun."
          }
        },
        {
          "id": "b10-d7-s7",
          "tur": "coktan",
          "kart": 5,
          "soru": "AI Fluency kursunun dört yetkinliğinden hangisi yapay zekâya ne istediğini açıkça anlatmakla ilgili?",
          "secenekler": [
            "Delegation (devretme)",
            "Description (tarif)",
            "Discernment (ayırt etme)",
            "Diligence (özen)"
          ],
          "dogru": 1,
          "ipucu": "Kartta kursun, işi açıkça anlatma becerisine verdiği adı hatırla.",
          "aciklama": "Kurs açık iletişimi Description başlığında öğretir: ürünü, süreci ve beklenen performansı tarif etmek. Görev kalıbı da işi Claude'a tarif etmenin bizdeki yoludur.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/ai-fluency-framework-foundations",
            "kopya": "kurs-ai-fluency.md",
            "okuma": "2026-11-15",
            "dayanak": "Kurs dört yetkinliği Delegation, Description, Discernment ve Diligence diye sayar ve yapay zekâyla açık iletişimi Ürün, Süreç ve Performans Tarifi (Description) üzerinden öğretir."
          }
        }
      ]
    }
  ]
});
