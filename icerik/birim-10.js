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
        "Claude'u parlak ama yeni bir çalışan gibi düşün: genel bilgisi çok, senin alışkanlıklarını bilmiyor. Bu klasörde de Claude'un kendi bildiği şey kural olarak yazılmaz.",
        "Kısa bir test var: istemini (prompt) işten habersiz bir arkadaşına göster. O şaşırırsa Claude da şaşırır.",
        "İstemde iki şeyi açık söyle: çıktı nasıl görünsün (biçim) ve hangi kısıtlara uyulsun (sınır).",
        "İşin gerektirdiğinden fazlasını istiyorsan bunu açıkça iste. Claude'un belirsiz bir istemden tahmin etmesine bırakma.",
        "İtiraz görevi: isteğinde hata, kritik eksik ya da daha kolay bir yol varsa Claude başlamadan söyler, nedenini ve sonucunu yazar. Israr edersen senin dediğin yapılır."
      ],
      "terimler": [
        {
          "tr": "istem",
          "en": "prompt",
          "aciklama": "Claude'a yazdığın iş tarifi, yani mesajın kendisi."
        }
      ],
      "sorular": [
        {
          "id": "b10-d1-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude'a kalıcı bir not ekleteceksin. Kurala göre hangisi yazılmaya değer?",
          "secenekler": [
            "Faturaları her ay hangi klasörde topladığın",
            "İyi bir e-postanın kibar yazılması gerektiği",
            "Türkçe metinde yazım kurallarına uyulması"
          ],
          "dogru": 0,
          "ipucu": "Claude'un zaten bildiğini yalnız senin bildiğinden ayır.",
          "aciklama": "Bu klasörde Claude'un kendi bildiği şey kural olarak yazılmaz; yazılmaya değen, yalnız senin bildiğin alışkanlıktır. Kibar e-posta ve yazım kuralları Claude'un genel bilgisidir.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Kural yazılmadan önce modelin bunu kendi bilip bilmediği sorulur; biliyorsa yazılmaz.",
            "soz": "Model bunu kendi bilir mi? Biliyorsa yazılmaz"
          }
        },
        {
          "id": "b10-d1-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "İstemini göndermeden önce sınamak istiyorsun. Hangisi en iyi sınar?",
          "secenekler": [
            "İşi iyi bilen bir arkadaşına okutmak",
            "İstemi kısaltıp öyle göndermek",
            "İşten habersiz birine okutmak"
          ],
          "dogru": 2,
          "ipucu": "Claude işini ne kadar biliyor; sınayan kişi de o kadar bilmeli.",
          "aciklama": "Bağlamı bilmeyen biri istemde şaşırırsa Claude da şaşırır. İşi bilen biri eksikleri kendi bilgisiyle doldurur, sorunu göremez.",
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
          "kart": 2,
          "soru": "İstemine çıktının tablo olacağını yazdın. Bir de ___ açıkça söylemelisin.",
          "secenekler": [
            "işe hangi dosyadan başlayacağını",
            "hangi dosyalara dokunulmayacağını",
            "hangi modelin kullanılacağını"
          ],
          "dogru": 1,
          "ipucu": "Çıktının görünüşünden sonra istemde açık olması gereken öbür şeyi düşün.",
          "aciklama": "İstemde biçimin yanında uyulacak sınır da açık söylenir; dokunulmayacak dosyalar bir sınırdır. Başlangıç dosyası ya da model, neye uyulacağını söylemez.",
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
          "kart": 3,
          "soru": "Giriş sayfası istedin; çalışıyor ama çok sade, sen daha zenginini umuyordun. En olası neden?",
          "secenekler": [
            "Claude kestirmeliydi; bir hata yaptı",
            "Fazlasını istediğini yazmadın",
            "Claude her işte önce en sade sürümü kurar"
          ],
          "dogru": 1,
          "ipucu": "Ne kadarını istediğini istemde kim söyledi?",
          "aciklama": "Temelin ötesini istiyorsan bunu açıkça yazman gerekir; Claude belirsiz istemden ne kadarını istediğini tahmin eder. Sabit bir önce sade sürüm kuralı yok.",
          "kaynak": {
            "adres": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
            "kopya": "prompting-best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "İşin gerektirdiğinden fazlasını istiyorsan, modelin bunu belirsiz istemden çıkarmasına güvenmek yerine açıkça iste."
          }
        },
        {
          "id": "b10-d1-s6",
          "tur": "bosluk",
          "kart": 4,
          "soru": "Claude işe başlamadan 'bunu daha kısa bir yoldan yapabilirim' dedi, nedenini ve sonucunu yazdı. Bu, kurala ___.",
          "secenekler": [
            "uygun; kolay yol da söylenir",
            "aykırı; yalnız istenen yapılır",
            "aykırı; öneri iş bitince yapılır"
          ],
          "dogru": 0,
          "ipucu": "İtiraz görevinin hangi durumlarda işe başlamadan konuşmayı istediğini düşün.",
          "aciklama": "İtiraz görevi hata ve kritik eksiğin yanında daha kolay bir yolu da işe başlamadan, nedeni ve sonucuyla söyletir. Israr edersen yine senin istediğin yapılır.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Claude daha kolay bir yol biliyorsa işe başlamadan söyler, nedeni ve olası sonucu yazar.",
            "soz": "veya daha kolay bir yol biliyorsan işe başlamadan söyle"
          }
        },
        {
          "id": "b10-d1-s8",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude yönteminde bir sakınca gördü, nedenini yazdı; sen yine kendi yönteminde kalıyorsun. Ne olur?",
          "secenekler": [
            "Sakınca kalkmadan iş başlamaz",
            "Claude kendi ara yolunu seçip öyle yapar",
            "İş senin istediğin yoldan yürür"
          ],
          "dogru": 2,
          "ipucu": "Kararın sonunda kimde olduğunu düşün.",
          "aciklama": "İtiraz görevi Claude'a söyleme ve gerekçe yazma işi verir, karar senin kalır. Israr edersen senin dediğin yapılır.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Claude itiraz etse de kullanıcı ısrar ederse onun dediği şekilde yapılır.",
            "soz": "Israr edersem benim dediğim şekilde yaparız"
          }
        }
      ]
    },
    {
      "id": "b10-d2",
      "baslik": "Claude'un göremediğini söylemek",
      "hedefler": [
        "Somut bir istemin dosyayı, belirtiyi ve düzelmiş hali neden taşıdığını anlatabilir.",
        "Claude'un koddan okuyamadığı bilgiyi ayırt edebilir.",
        "Elindeki dosyayı ya da görüntüyü tarif etmek yerine vermeyi anlatabilir."
      ],
      "anlatim": [
        "Claude işe kodunu okuyarak başlar. Bulamadığı şey depoda hiç olmayan bilgidir: toplantıda alınan bir karar, tek kişinin kafasındaki bir adım.",
        "Somut bir istem (specific prompt) dosyanın adını, belirtiyi ve düzelmiş halin neye benzediğini baştan söyler. Bu çoğu zaman bir düzeltme turunu kurtarır.",
        "İki makul yol arasında tercihin varsa baştan söyle. Claude bunu koddan okuyamaz.",
        "Keşif yapıyor, belli bir şeyi düzeltmiyorsan 'bu dosyada neyi iyileştirirsin?' gibi belirsiz bir istem de yerindedir. Bedeli, yolda biraz daha çok düzeltmektir.",
        "Elindeki şeyi tarif etme, ver. Masaüstünde hata görüntüsünü ya da bir PDF'yi + düğmesiyle ya da sürükleyerek isteme eklersin.",
        "Bizde bir kural daha var: mesajlarını çoğu zaman sesle yazdırıyorsun. İsim, oran ya da tarih işe girecekse Claude önce teyit eder."
      ],
      "terimler": [
        {
          "tr": "somut istem",
          "en": "specific prompt",
          "aciklama": "Dosyayı, belirtiyi ve düzelmiş halin neye benzediğini söyleyen istem."
        }
      ],
      "sorular": [
        {
          "id": "b10-d2-s1",
          "tur": "coktan",
          "kart": 1,
          "soru": "'Formu düzelt' yazdın; Claude bir şey düzeltti ama senin derdin başkaydı. İstemde ne eksikti?",
          "secenekler": [
            "Hatanın ne kadar acil olduğu",
            "Formun neden önemli olduğu",
            "Ne olunca bozulduğu, düzelince ne görüleceği"
          ],
          "dogru": 2,
          "ipucu": "Claude hangi hatayı kastettiğini nereden anlayacaktı?",
          "aciklama": "Belirtiyi ve düzelmiş hali söylemeyince Claude hangi hatayı aradığını bilemez, kendi bulduğunu düzeltir. Aciliyet ya da önem hangi hatayı kastettiğini söylemez.",
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
          "soru": "Claude'a fiyat sayfasını düzelttireceksin. Hangisini istemde mutlaka söylemelisin?",
          "secenekler": [
            "Dün kendi kendine verdiğin 'KDV dahil' kararını",
            "Fiyat dosyasının hangi klasörde olduğunu",
            "Sayfanın hangi yazı tipini kullandığını"
          ],
          "dogru": 0,
          "ipucu": "Claude bunlardan hangisini dosyaları okuyarak bulamaz?",
          "aciklama": "Kendi kendine verdiğin karar hiçbir dosyada yazmaz; Claude onu ancak sen söylersen bilir. Dosyanın yeri ve yazı tipi koddan okunur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude'un bulamadığı, depoda hiç olmamış bilgidir: ekibin toplantıda aldığı karar ya da tek kişinin kafasındaki dağıtım süreci gibi."
          }
        },
        {
          "id": "b10-d2-s4",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bir hatanın iki makul çözümü vardı; Claude istemediğin yolu seçti, kod doğru çalışıyor. Kaynağı ne?",
          "secenekler": [
            "Claude kodu eksik okudu",
            "Tercihini söylemedin; koddan okunmaz",
            "Claude hep daha kısa çözümü seçer"
          ],
          "dogru": 1,
          "ipucu": "Senin hangi yolu sevdiğin kodun neresinde yazıyor?",
          "aciklama": "İki makul yol arasındaki tercih kodda yazmaz; söylemezsen Claude birini seçer. Kodu daha çok okumak bu tercihi göstermez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "İki makul yaklaşım arasındaki tercihi Claude koddan okuyamaz; hangisini seçtiği senin için önemliyse baştan söyle."
          }
        },
        {
          "id": "b10-d2-s7",
          "tur": "coktan",
          "kart": 3,
          "soru": "Yeni bir klasörde hata aramıyorsun, fikir istiyorsun. 'Burada ne eksik?' yazmak yerinde mi?",
          "secenekler": [
            "Hayır; istem dosyayı ve belirtiyi taşımalı",
            "Evet; fikir ararken belirsiz istem uygun",
            "Hayır; Claude belirsiz istemle başlamaz"
          ],
          "dogru": 1,
          "ipucu": "Belli bir hatayı düzeltmekle fikir toplamak arasındaki farkı düşün.",
          "aciklama": "Keşifte belirsiz istem yerindedir; bedeli yolda biraz daha çok düzeltmektir. Dosya ve belirti, belli bir hatayı düzelttirirken gerekir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Belli bir şeyi düzeltmek yerine keşif yaparken 'bu dosyada neyi iyileştirirsin?' gibi belirsiz bir istem tamamen yerindedir; yolda biraz daha çok düzeltirsin, bedeli budur."
          }
        },
        {
          "id": "b10-d2-s5",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude'a bir PDF faturadaki tutarları kontrol ettireceksin. Masaüstünde nasıl verirsin?",
          "secenekler": [
            "Önce metne çevirip yapıştırırım; PDF okunmaz",
            "Dosyayı olduğu gibi isteme eklerim",
            "Tutarları kendim tek tek yazarım"
          ],
          "dogru": 1,
          "ipucu": "Claude'un ihtiyaç duyduğu şey zaten elinde mi?",
          "aciklama": "Elindeki şeyi tarif etmek yerine ver: görüntü ve PDF + düğmesiyle ya da sürükleyerek isteme eklenir. Çevirmek ya da elle yazmak yeni yanlışa açıktır.",
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
          "kart": 5,
          "soru": "Mesajında 'oranı yüzde on beş yap' yazıyordu; Claude 'yüzde 15, doğru mu?' diye sordu. Bunu ___ yüzünden sordu.",
          "secenekler": [
            "oranı yanlış bulduğu",
            "her sayının onay istediği",
            "mesajın sesle yazılmış olabileceği"
          ],
          "dogru": 2,
          "ipucu": "Bu mesajın nasıl yazılmış olabileceğini düşün.",
          "aciklama": "Mesajların çoğu sesle yazıldığı için isim, oran ya da tarih işe girmeden teyit edilir. Claude oranı yanlış bulmuyor, doğru duyulup duyulmadığını soruyor.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Kullanıcı mesajlarını çoğu zaman sesle yazdırır; isim, oran ya da tarih işleme girecekse önce teyit edilir.",
            "soz": "İsim, oran veya tarih işleme girecekse önce teyit et"
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
        "Talimatın arkasındaki gerekçeyi (motivation) söylemek Claude'a amacını anlatır. Claude bu açıklamadan genelleme yapabilir.",
        "Resmi örnek: 'ASLA üç nokta kullanma' yerine 'Cevabın sesli okunacak, okuma motoru üç noktayı nasıl söyleyeceğini bilmez, bu yüzden kullanma.'",
        "Bizim CLAUDE.md'de: 'Kural kaydederken bir sebep olmalı; istisnai durum kural yapılmaz.' Sebep kuralın yanına değil, KARARLAR maddesine yazılır.",
        "Plan kapısındaki plan da neyin çıkacağını yazarken her biri için gerekçe taşır.",
        "Bu klasörde kural yazılırken büyük harf, 'asla', 'her zaman' gibi vurgu yalnız gerçek bir sınır için kullanılır."
      ],
      "terimler": [
        {
          "tr": "gerekçe",
          "en": "motivation",
          "aciklama": "Bir talimatın neden istendiğini söyleyen açıklama."
        }
      ],
      "sorular": [
        {
          "id": "b10-d3-s1",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude 'başlıklar kısa olsun' kuralına 'ASLA' ve 'her zaman' sözlerini bilerek koymadı. Neden?",
          "secenekler": [
            "Kural satırları büyük harf taşıyamaz",
            "Bu satır gerçek bir sınır değil",
            "Claude vurgu sözcüklerini hiç kullanmaz"
          ],
          "dogru": 1,
          "ipucu": "Bu klasörde vurgunun hangi kurallara ayrıldığını düşün.",
          "aciklama": "Vurgu bu klasörde yalnız gerçek sınırlar için kullanılır; başlık uzunluğu bir üslup kuralıdır.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Vurgu ve kaygı sözleri (büyük harf, 'her zaman', 'asla') yalnız gerçek bir sınır için kullanılır.",
            "soz": "yalnız gerçek bir sınır için"
          }
        },
        {
          "id": "b10-d3-s3",
          "tur": "coktan",
          "kart": 1,
          "soru": "'Üç nokta kullanma; cevap sesli okunacak' dedin. Claude ok işaretini de kullanmadı. Neden?",
          "secenekler": [
            "Yasağın amacını bilip benzerine uyguladı",
            "Talimatı yanlış anlayıp fazlasını yasakladı",
            "Ok işaretini zaten hiç kullanmaz"
          ],
          "dogru": 0,
          "ipucu": "Claude yasağın arkasındaki amacı biliyor muydu?",
          "aciklama": "Claude talimatın nedenini bilince yalnız o satırı değil amacı da uygular. Sesli okunamayan başka işaretten de kaçınması bu genellemedir.",
          "kaynak": {
            "adres": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
            "kopya": "prompting-best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude açıklamadan genelleme yapabilir."
          }
        },
        {
          "id": "b10-d3-s5",
          "tur": "coktan",
          "kart": 0,
          "soru": "'Müşteri adlarını rapora yazma' dedin; Claude bir e-posta taslağına ad yazdı. En kalıcı düzeltme hangisi?",
          "secenekler": [
            "'ASLA' sözüyle büyük harflerle yazarım",
            "Adların neden gizli olduğunu eklerim",
            "E-posta için ayrı yasak eklerim"
          ],
          "dogru": 1,
          "ipucu": "Claude yasağı başka yerlere nasıl taşıyabilir?",
          "aciklama": "Nedeni bilen Claude yasağı benzer yerlere de uygular. Ayrı yasak yalnız o yeri kapatır, büyük harf ise nedeni söylemez.",
          "kaynak": {
            "adres": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
            "kopya": "prompting-best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Talimatın gerekçesini vermek Claude'un hedefe yönelik cevap vermesine yardım eder ve Claude açıklamadan genelleme yapabilir."
          }
        },
        {
          "id": "b10-d3-s4",
          "tur": "coktan",
          "kart": 2,
          "soru": "Acil bir müşteri için 'bugün raporu İngilizce yaz' dedin. Bu kalıcı kural olmalı mı?",
          "secenekler": [
            "Evet; her isteğin kural olur",
            "Evet; sebebi var, acil müşteri",
            "Hayır; bir kerelik istisna"
          ],
          "dogru": 2,
          "ipucu": "Kuralın tek seferlik durumlar için ne dediğini düşün.",
          "aciklama": "Kural kaydı bir sebep ister ama istisnai durum kural yapılmaz. Acil müşteri bir sebeptir, yine de bu istek o güne aittir.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Kural kaydederken bir sebep olmalı; istisnai durum kural yapılmaz.",
            "soz": "Kural kaydederken bir sebep olmalı; istisnai durum kural yapılmaz"
          }
        },
        {
          "id": "b10-d3-s7",
          "tur": "bosluk",
          "kart": 2,
          "soru": "CLAUDE.md'de bir kuralın neden konduğu yazmıyor. Nedenini bulmak için ___ bakarsın.",
          "secenekler": [
            "satırın altındaki nota",
            "KARARLAR'daki maddesine",
            "kuralın skill dosyasına"
          ],
          "dogru": 1,
          "ipucu": "Bu klasörde sebebin kural satırında durup durmadığını düşün.",
          "aciklama": "Kuralın sebebi, tarihi ve mekanizması kural satırına değil KARARLAR maddesine yazılır; kural metni yalnız kuralı taşır.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Kuralın gerekçesi, tarihi ve mekanizması kuralın yanına değil KARARLAR maddesine yazılır.",
            "soz": "kuralın yanına değil KARARLAR maddesine yazılır"
          }
        },
        {
          "id": "b10-d3-s6",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude'un planında bir dosyanın silineceği yazıyor, nedeni yok. Kurala göre bu plan nasıl?",
          "secenekler": [
            "Tamam; plan sunulması yeter",
            "Tamam; neden yalnız sorulursa yazılır",
            "Eksik; çıkan her şeyin nedeni yazılmalı"
          ],
          "dogru": 2,
          "ipucu": "Planın çıkan şeylerden hangileri için gerekçe taşıdığını düşün.",
          "aciklama": "Plan kapısındaki plan çıkan her şey için gerekçe taşır; nedeni yazmayan madde eksiktir. Planın sunulmuş olması bu eksiği kapatmaz.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Plan kapısındaki plan neyin çıkacağını ve her biri için gerekçeyi taşır.",
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
        "Bizim ajan görev kalıbında bitti ölçütü ölçülebilir, komutla sınanabilir bir şarttır. Örnek: dosya var, her derste en az 6 soru, ünlem sayısı 0."
      ],
      "terimler": [
        {
          "tr": "kontrol",
          "en": "check",
          "aciklama": "Claude'un koşup geçti ya da kaldı sonucunu okuyabildiği şey: test, betik, ekran görüntüsü."
        }
      ],
      "sorular": [
        {
          "id": "b10-d4-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude 'bitti' dedi; sayfayı açınca bir düğme çalışmıyor. Claude bunu neden fark etmedi?",
          "secenekler": [
            "Model düğme işinde zayıf kaldı",
            "Elinde işi sınayacak bir şey yoktu",
            "Düğme işini bilerek sonraki tura bıraktı"
          ],
          "dogru": 1,
          "ipucu": "Claude durma kararını neye bakarak verir?",
          "aciklama": "Claude iş bitmiş göründüğünde durur; sınayacak bir şeyi yoksa hatayı ancak sen görürsün. Sorun modelde değil, kontrolün yokluğundadır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude iş bitmiş göründüğünde durur; işin gerçekten bitip bitmediğini söyleyen koşulabilir bir şeyi yoksa test takımı sen olursun ve her hata sen fark edene kadar orada kalır."
          }
        },
        {
          "id": "b10-d4-s6",
          "tur": "coktan",
          "kart": 1,
          "soru": "Doğru sonucunu bildiğin beş örnekle bir hesaplamayı düzelttireceksin. Örnekleri nasıl kullanırsın?",
          "secenekler": [
            "İsteme koyup sonuçları onlarla sınamasını isterim",
            "İş bitince örnekleri kendim denerim",
            "Vermem; Claude kendi örneğini bulur"
          ],
          "dogru": 0,
          "ipucu": "Hatayı kimin yakalamasını istersin: senin mi, Claude'un mu?",
          "aciklama": "Örnekler Claude'un koşup geçti ya da kaldı diye okuyabildiği bir kontroldür; bozulanı kendisi düzeltir. Sonradan sen denersen hatayı yine sen yakalarsın.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude'a işin bitip bitmediğini söyleyen koşulabilir bir şey vermezsen test takımı sen olursun; istemde testleri koşup geçene kadar sürdürmesini söylemek kurulumsuz çalışan yoldur."
          }
        },
        {
          "id": "b10-d4-s2",
          "tur": "bosluk",
          "kart": 2,
          "soru": "'Testler geçene dek sürdür' dedin; Claude iki test kalmışken durdu. Çünkü istemdeki kontrolde durma kararını ___ verir.",
          "secenekler": [
            "Claude'un kendisi",
            "Stop kancası",
            "Claude Code"
          ],
          "dogru": 0,
          "ipucu": "Kontrolü nereye koydun ve orada son söz kimde?",
          "aciklama": "Kontrol istemdeyse ne zaman yeteceğine Claude kendisi karar verir. Her seferinde zorlanmasını istiyorsan Claude Code'un uyguladığı Stop kancası gerekir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Kontrol istemde verilebilir ve Claude ne zaman yeterli olduğuna kendi karar verir, Stop kancası olarak Claude Code tarafından zorlanabilir ya da konuşmayı hiç görmemiş yeni bir alt ajanla kodu yazmamış birine yaptırılabilir."
          }
        },
        {
          "id": "b10-d4-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude 'bütün bağlantılar çalışıyor' dedi. Kanıt olarak hangisi en iyisi?",
          "secenekler": [
            "Hangi bağlantıları düzelttiğinin listesi",
            "Kaç bağlantıya baktığını ayrıntısıyla yazması",
            "Bağlantıları sınayan komutun çıktısı"
          ],
          "dogru": 2,
          "ipucu": "Bir söz ile senin görebildiğin bir şey arasındaki farkı düşün.",
          "aciklama": "Kanıt görebildiğin şeydir: koşulan komut ve çıktısı ya da ekran görüntüsü. Düzeltme listesi ve bakılan sayı yapılanı söyler, sonucu göstermez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Hangi yolu seçersen seç Claude'dan kanıt iste, yani koştuğu komutu ve çıktısını ya da ekran görüntüsünü; tek başına 'bütün testler geçti' sana çok az şey söyler."
          }
        },
        {
          "id": "b10-d4-s7",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude 'testler geçiyor' dedi ve çıktıyı gösterdi. Onaylamadan önce ne daha istersin?",
          "secenekler": [
            "Testleri bir kez daha koşmasını",
            "Birkaç yeni test daha yazmasını",
            "Testlerde neyin değiştiğini göstermesini"
          ],
          "dogru": 2,
          "ipucu": "Testin kendisinin de değişmiş olabileceğini düşün.",
          "aciklama": "Bir test sırf geçsin diye gevşetilmiş olabilir; bunu yalnız değişiklik farkı gösterir. Aynı testi yeniden koşmak gevşetilmiş testi de geçirir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/verification-skills",
            "kopya": "ders-action-03-verification-skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir test ne olursa olsun geçecek biçimde sessizce gevşetilebilir; bu yüzden beceri farkı okur ve testlerin zayıflatılmadığını doğrular."
          }
        },
        {
          "id": "b10-d4-s3",
          "tur": "coktan",
          "kart": 5,
          "soru": "Ajan görevinde 'Bitti ölçütü: sayfa güzel görünsün' yazıyor. Kalıba göre bu ölçüt nasıl?",
          "secenekler": [
            "Kalıba uymaz; bir komutla sınanamaz",
            "Uyar; ajan ekran görüntüsüyle gösterir",
            "Uyar; işi denetleyen ajan beğenirse biter"
          ],
          "dogru": 0,
          "ipucu": "Kalıbın bitti ölçütünden neyi şart koştuğunu düşün.",
          "aciklama": "Kalıpta bitti ölçütü komutla sınanabilir bir şarttır; güzellik geçti ya da kaldı diye ölçülmez. Ekran görüntüsü de beğeniyi değil görünüşü gösterir.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Görev kalıbındaki bitti ölçütü ölçülebilir, komutla sınanabilir bir şarttır.",
            "soz": "ölçülebilir, komutla sınanabilir şart"
          }
        }
      ]
    },
    {
      "id": "b10-d5",
      "baslik": "Ne istediğini bilmezken: Claude seni sorgulasın",
      "hedefler": [
        "Ne istediğini bilmezken Claude'dan seni sorgulamasını istemeyi anlatabilir.",
        "Tarif dosyası yazıldıktan sonra yeni oturum açmanın nedenini anlatabilir.",
        "Bizde Claude'un sana soru sorma biçimini anlatabilir."
      ],
      "anlatim": [
        "Ne istediğini tam bilmiyorsan her şeyi önceden çözmen gerekmez. Claude'dan seni sorgulamasını (interview), sonra tarifi bir dosyaya yazmasını iste.",
        "Claude karar vermediğin yerler için çoktan seçmeli sorular sorar. Cevaplar bir tarif oluşturana kadar sürer.",
        "Tarif dosyası yazılınca işi yeni bir oturumda başlat. Yapım temiz bir bağlamla ve yazılı bir bitti tanımıyla başlar.",
        "Bizde 'durum diskte yaşar': önemli çıktı üretildiği anda diske yazılır, kapanış beklenmez. Ara bulgu DURUM dosyasına tek satır girer.",
        "Soru biçimi: Claude notunu anlamadıysa tahmin etmez, seçenekli sorar. Seçenekler a, b, c harfiyle gelir; önerdiği '(önerilen)' diye işaretlenir.",
        "Bir seçimi yapacak bilgin yoksa 'bilgim yok' de. Claude önce ayrı 3-5 maddeyle neye bakılacağını anlatır, seçimi sana bırakır."
      ],
      "terimler": [
        {
          "tr": "sorgulamak",
          "en": "interview",
          "aciklama": "Claude'un, tarif yazılabilecek hale gelene kadar sana soru sorması."
        }
      ],
      "sorular": [
        {
          "id": "b10-d5-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bildirim özelliği istiyorsun ama nasıl olacağını hiç düşünmedin. İlk mesajın ne olur?",
          "secenekler": [
            "Önce her ayrıntıyı kendim çözerim",
            "Beni sorularla netleştirmesini isterim",
            "'En iyisini sen bil' derim"
          ],
          "dogru": 1,
          "ipucu": "Henüz vermediğin kararları kim, nasıl ortaya çıkarabilir?",
          "aciklama": "Her şeyi önceden çözmen gerekmez; Claude seni sorgulayıp eksik kararları ortaya çıkarır. 'En iyisini sen bil' ayrıntıyı tahmine bırakır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Ne istediğini tam bilmediğinde isteme başlamadan her şeyi çözmen gerekmez; bunun yerine Claude'dan seni sorgulamasını iste."
          }
        },
        {
          "id": "b10-d5-s3",
          "tur": "coktan",
          "kart": 1,
          "soru": "Sorgulamada Claude 'giriş e-postayla mı, telefonla mı?' diye sordu. Bu soru neden geldi?",
          "secenekler": [
            "Claude bu konuyu bilmediği için sana soruyor",
            "İsteğin anlaşılmadı, baştan soruyor",
            "Bunu henüz seçmedin; tarif için gerekiyor"
          ],
          "dogru": 2,
          "ipucu": "Claude'un sorgulamada hangi yerleri sorduğunu düşün.",
          "aciklama": "Sorgulamada Claude senin henüz karar vermediğin yerleri seçenekli sorularla sorar; cevaplar tarifi oluşturur. Soru bilgisizlikten ya da yanlış anlamadan gelmez.",
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
          "kart": 2,
          "soru": "Sorgulamanın oturumunda yapıma geçtin; Claude konuşmada geçen ama tarifte olmayan bir fikri uyguladı. Neden?",
          "secenekler": [
            "Konuşmadaki her söz tarife kendiliğinden eklenir",
            "Oturum bütün konuşmayı taşıyordu",
            "Claude tarifi yalnız öneri sayar"
          ],
          "dogru": 1,
          "ipucu": "Yeni bir oturumun eskisinden farkı neydi?",
          "aciklama": "Aynı oturum sorgulamadaki bütün konuşmayı bağlamında taşır. Yeni oturum temiz bağlamla ve yalnız yazılı tarifle başlar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "SPEC.md oluşunca yapım için yeni bir oturum başlat ki yapım temiz bir bağlamla ve yazılı bir bitti tanımıyla başlasın."
          }
        },
        {
          "id": "b10-d5-s7",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Claude araştırmanın ortasında bir ara bulgu çıkardı. Kurala göre bu bulgu ___ yazılır.",
          "secenekler": [
            "kapanışta, rapora",
            "hemen, DURUM'a kısa bir satırla",
            "hemen, ayrı bir rapor dosyasına"
          ],
          "dogru": 1,
          "ipucu": "Kuralın ara bulgunun zamanı ve yeri için ne dediğini düşün.",
          "aciklama": "Önemli çıktı beklemeden diske yazılır; ara bulgu ayrı rapor değil, DURUM'a tek satırdır. Rapor yalnız bir kararı değiştirecekse yazılır.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Rapor ancak bir kararı değiştirecekse yazılır; ara bulgu DURUM'a tek satır girer.",
            "soz": "Ara bulgu DURUM'a tek satır"
          }
        },
        {
          "id": "b10-d5-s6",
          "tur": "coktan",
          "kart": 4,
          "soru": "'Şu rapor işi, geçen sefer gibi' diye yarım bir not yazdın. Kurala göre Claude ne yapar?",
          "secenekler": [
            "Son raporu bulup yeniden yapar",
            "Raporu seçenek sunarak sorar",
            "Ne demek istediğini açık uçlu sorar"
          ],
          "dogru": 1,
          "ipucu": "Kuralın anlaşılmayan not için ne dediğini düşün.",
          "aciklama": "Not anlaşılmadıysa Claude tahmin etmez, a, b, c seçenekli sorar. Son raporu kendiliğinden yapmak tahmindir; açık uçlu soru da kuralın biçimi değil.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Kullanıcının notu anlaşılmadıysa tahmin edilmez, seçenekli sorulur.",
            "soz": "Notumu anlamadıysan tahmin etme, seçenekli sor"
          }
        },
        {
          "id": "b10-d5-s8",
          "tur": "coktan",
          "kart": 5,
          "soru": "Claude 'önbellek a) 1 saat b) 1 gün' diye sordu; anlamını bilmiyorsun. En iyi hamlen?",
          "secenekler": [
            "Bilmediğini yazarsın; Claude önce açıklar",
            "Önerileni seçersin; anlaman gerekmez",
            "Bilmediğini yazarsın; Claude önerileni seçer"
          ],
          "dogru": 0,
          "ipucu": "Kuralın, bilmediğin bir seçimde Claude'a ne yaptırdığını düşün.",
          "aciklama": "'Bilgim yok' dersen Claude önce 3-5 maddeyle neye bakılacağını anlatır, seçimi sana bırakır. Claude seçip geçmez, anlamadan seçmek de bu yolu boşa çıkarır.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Kullanıcı 'anlamadım' ya da 'bilgim yok' dediğinde sorudan önce ayrı 3-5 maddeyle neye bakılacağı anlatılır, seçim ona bırakılır.",
            "soz": "sorudan önce ayrı 3-5 maddeyle neye bakılacağını anlat"
          }
        }
      ]
    },
    {
      "id": "b10-d6",
      "baslik": "Keşfet, planla, kodla, kaydet",
      "hedefler": [
        "Keşfet, planla, kodla, kaydet akışında koddan önce plan istemenin nedenini anlatabilir.",
        "Plan modunda ve plan gelince ne yapacağını ayırt edebilir.",
        "Bizde Claude'un okuma satırını ve plan kapısını anlatabilir."
      ],
      "anlatim": [
        "Claude Code 101 kursu, kurstan tek şey alacaksan bu akış olsun der: keşfet (explore), planla, kodla, kaydet. Çoğu kişi doğrudan kod isteyip sonra çok düzeltir.",
        "İlk iki adımın en hızlı yolu plan modudur (plan mode): Claude dosyaları okur, inceler, bir eylem planı getirir; sen onaylayana kadar düzenleme yapmaz.",
        "Masaüstünde modu istem kutusunun altındaki mod seçiciden Plan diye seçersin. Terminaldeki Shift+Tab masaüstünde mod değiştirmez.",
        "Plan gelince oku; yön düzeltmenin en iyi yeri burasıdır, çünkü henüz kod yazılmadı. Plan iyiyse onayla, Claude maddeleri uygular.",
        "Bizde büyük iş başlatan mesajdan sonra Claude ilk satırda okumasını yazar: ne yapacağı, neyi yapmayacağı, çıktı nasıl görünecek. Sonra sormadan başlar.",
        "Plan kapısı: iş birkaç oturuma yayılıyorsa, geri alınamazsa (silme, takvim gibi dış sisteme yazma) ya da yazılı kuralı değiştiriyorsa Claude önce plan sunar, durur."
      ],
      "terimler": [
        {
          "tr": "keşfet",
          "en": "explore",
          "aciklama": "Claude'un işe başlamadan ilgili dosyaları okuyup bağlam toplaması."
        },
        {
          "tr": "plan modu",
          "en": "plan mode",
          "aciklama": "Claude'un dosya düzenlemeden inceleyip plan önerdiği mod."
        }
      ],
      "sorular": [
        {
          "id": "b10-d6-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Büyük bir özelliği tek mesajla yazdırdın; sonra üç tur düzeltme gitti. Akışa göre neyi atladın?",
          "secenekler": [
            "Önce okutup bir plan istemeyi",
            "Daha güçlü bir model seçmeyi",
            "Kodu yazdırıp hemen kaydetmeyi"
          ],
          "dogru": 0,
          "ipucu": "Kod yazılmadan önce gelen adımları düşün.",
          "aciklama": "Akış koddan önce keşfet ve planla adımlarını koyar; doğrudan kod isteyen sonra çok düzeltir. Kaydetmek ya da model değiştirmek atlanan planın yerini tutmaz.",
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
          "soru": "Plan geldi; bir maddede Claude hiç kullanmadığın bir klasöre yazacak. Ne yaparsın?",
          "secenekler": [
            "Onaylarım; kod bitince o kısmı düzelttiririm",
            "Planı reddedip işi yeni oturumda isterim",
            "Onaylamadan o maddeyi düzeltmesini yazarım"
          ],
          "dogru": 2,
          "ipucu": "Yön değiştirmek hangi anda en ucuz?",
          "aciklama": "Kod henüz yazılmadığı için yön düzeltmenin en iyi yeri plandır. Bütün planı atmak gerekmez, yalnız o madde düzelir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/the-explore-plan-code-commit-workflow",
            "kopya": "ders-101-05-explore-plan-code-commit.md",
            "okuma": "2026-11-15",
            "dayanak": "Burası yön düzeltmenin en iyi yeridir, çünkü henüz hiç kod yazılmamıştır."
          }
        },
        {
          "id": "b10-d6-s4",
          "tur": "bosluk",
          "kart": 2,
          "soru": "Masaüstünde Shift+Tab'a bastın, mod değişmedi. Çünkü bu kısayol modu yalnız ___ değiştirir.",
          "secenekler": [
            "terminalde",
            "yeni oturumda",
            "izin ayarı açıkken"
          ],
          "dogru": 0,
          "ipucu": "Masaüstü ile terminal mod değiştirmede aynı mı çalışıyor?",
          "aciklama": "Shift+Tab modları yalnız terminalde değiştirir; masaüstünde mod, istem kutusunun altındaki mod seçiciden seçilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Masaüstünde izin modunu istem kutusunun altındaki satırdaki mod seçiciyle istediğin an değiştirirsin; Shift+Tab masaüstünde terminaldeki gibi modlar arasında dolaşmaz."
          }
        },
        {
          "id": "b10-d6-s5",
          "tur": "coktan",
          "kart": 1,
          "soru": "Plan modu açıkken 'başlığı düzelt' dedin; Claude dosyayı değiştirmeden bir plan yazdı. Ne yaparsın?",
          "secenekler": [
            "Hata sanıp isteği yinelerim",
            "Planı okuyup onaylarım",
            "Başlığı kendim düzeltirim; bu modda yazamaz"
          ],
          "dogru": 1,
          "ipucu": "Bu moddaki Claude'un dosyaya ne zaman dokunduğunu düşün.",
          "aciklama": "Plan modunda Claude okur ve plan önerir, sen onaylayana kadar düzenleme yapmaz. Onaylayınca planı uygular; isteği yinelemek ya da kendin yazmak gerekmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/common-workflows",
            "kopya": "common-workflows.md",
            "okuma": "2026-11-15",
            "dayanak": "Plan modunda Claude dosyaları okur ve bir plan önerir, ama sen onaylayana kadar düzenleme yapmaz."
          }
        },
        {
          "id": "b10-d6-s6",
          "tur": "bosluk",
          "kart": 5,
          "soru": "Tek dosyadaki uzun bir metni baştan yazdırdın; Claude plan sunmadan işe başladı. Çünkü bu iş ___.",
          "secenekler": [
            "geri alınabilir ve tek oturumda biter",
            "plan kapısı yalnız Auto modda açılır",
            "Claude uzun metinde planı atlayabilir"
          ],
          "dogru": 0,
          "ipucu": "Plan kapısını açan üç durumu bu işle tek tek karşılaştır.",
          "aciklama": "Plan kapısı iş birkaç oturuma yayılınca, geri alınamayınca ya da yazılı kural değişince açılır; tek oturumluk, geri alınabilir bir yeniden yazım bunlardan değildir. Kapı her modda geçerlidir.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Plan kapısı iş birden fazla oturuma yayılınca, geri alınamayan bir şeye dokununca ya da yazılı kural değişince açılır.",
            "soz": "iş birden fazla oturuma yayılacaksa, geri alınamayan bir şeye dokunuyorsa"
          }
        },
        {
          "id": "b10-d6-s7",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude'un okuma satırı 'yalnız giriş bölümünü yazacağım' diyor; sen bütününü istiyordun. Ne yaparsın?",
          "secenekler": [
            "Bitince eksik kalan bölümleri ayrıca isterim",
            "Hemen durdurup bütününü istediğimi yazarım",
            "Bir şey demem; yanlışsa Claude sorar"
          ],
          "dogru": 1,
          "ipucu": "Okuma satırından sonra Claude soru sorar mı?",
          "aciklama": "Claude okumasını yazdıktan sonra sormadan başlar; yanlış okumayı yakalamanın en ucuz anı o satırdır. Bitince istemek işi iki kez yaptırır.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Büyük iş başlatan mesajdan sonra Claude ilk satırda okumasını yazar ve sormadan başlar.",
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
        "Sonucu tarif etmekle adımları tek tek yazmayı ayırt edebilir.",
        "Bir işte söylediğin net sözün denetimde nasıl izlendiğini anlatabilir."
      ],
      "anlatim": [
        "Bizde ana oturum bir ajana iş verirken görev kalıbını kullanır. İlk kural: görev kısa yazılır, nasıl yapılacağı yazılmaz.",
        "Kalıptaki alanlardan dördü: Amaç işin kimin için olduğunu, Dokunulacak yollar sınırı, Bitti ölçütü bitişi, Kenar durumları beklenmeyen hali söyler.",
        "Resmi istem kütüphanesi aynı yere varır: adımları değil sonucu tarif et, dosyaları Claude bulsun.",
        "Kütüphane ölçülebilir hedef de ister: ölçütle birlikte eşiği (threshold) de ver, ör. paket boyutu 200 KB altında olsun.",
        "İşi denetleyen ajanın (doğrulayıcı) görevinde 'kullanıcının sözü' alanı var: işe ait net sözlerin. Tutmayan söz sana 'bitti' denmeden söylenir; iş geri çevrilmez.",
        "Kalıpta 'Sayı ve iddia kaynakları' alanı da var: görevdeki her sayı dosya satırı ya da sayan komutla gelir. Plandan kopyalanan sayı kaynak sayılmaz."
      ],
      "terimler": [
        {
          "tr": "eşik",
          "en": "threshold",
          "aciklama": "Bir ölçütte işi bitmiş saymak için geçilmesi gereken değer, ör. 200 KB altı."
        }
      ],
      "sorular": [
        {
          "id": "b10-d7-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Ana oturumun bir ajana verdiği görevi okudun: amaç, yollar, bitti ölçütü var; adımlar yok. Bu ne?",
          "secenekler": [
            "Eksik; ajan adımsız başlayamaz",
            "Kalıba uygun; yolu ajan seçer",
            "Yarım; adımlar yazılmayı unutulmuş"
          ],
          "dogru": 1,
          "ipucu": "Kalıbın görev uzunluğu için koyduğu kuralı düşün.",
          "aciklama": "Görev kalıbı sonucu ve sınırı yazar, nasıl yapılacağını ajana bırakır. Adımların olmaması eksik değil, kuralın gereğidir.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Görev kısa yazılır; nasıl yapılacağı yazılmaz.",
            "soz": "Görev kısa yazılır; nasıl yapılacağı yazılmaz"
          }
        },
        {
          "id": "b10-d7-s2",
          "tur": "coktan",
          "kart": 5,
          "soru": "Görevde 'eski birimde 40 soru var (kaynak: plan)' yazıyor. Kalıba göre bu sayı ne durumda?",
          "secenekler": [
            "Geçerli; plan yazılı bir kaynaktır",
            "Kaynaksız; sayı yeniden ölçülmeli",
            "Geçerli; yanlışsa doğrulayıcı yakalar"
          ],
          "dogru": 1,
          "ipucu": "Kalıbın sayıların kaynağı için neyi kabul etmediğini düşün.",
          "aciklama": "Görevdeki her sayı dosya satırı ya da sayan komutla gelir; plandan kopyalanan sayı kaynak sayılmaz. Doğrulayıcıya bırakmak yanlış sayıyla iş yaptırır.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Görevdeki her sayı kaynağıyla yazılır; plandan ya da eski rapordan kopyalanan sayı kaynak sayılmaz.",
            "soz": "plandan ya da eski rapordan kopyalanan sayı kaynak sayılmaz"
          }
        },
        {
          "id": "b10-d7-s4",
          "tur": "coktan",
          "kart": 2,
          "soru": "On adımlık bir tarif yazdın; bir adımdaki dosya adı yanlıştı ve iş takıldı. Daha iyi yol hangisi?",
          "secenekler": [
            "Adımları daha ayrıntılı yazmak",
            "Sonucu yazıp dosyayı ona buldurmak",
            "Adı düzeltip aynı adımları yollamak"
          ],
          "dogru": 1,
          "ipucu": "Claude'a yolu mu, varılacak yeri mi tarif etmek daha az kırılır?",
          "aciklama": "Adımları değil sonucu tarif etmen, dosyaları Claude'un bulması önerilir. Her yazılan adım yeni bir yanlışa açıktır.",
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
          "kart": 1,
          "soru": "Amacın kapanış skill'inde bir cümleyi netleştirmek. Görevin geri kalanı hangisi olursa kalıba uyar?",
          "secenekler": [
            "Yol: yalnız kapanış skill'i. Bitti: denetim temiz.",
            "Adımlar: dosyayı aç, cümleyi bul, yenisini yaz.",
            "Yol: gereken her dosya. Bitti: sen karar ver."
          ],
          "dogru": 0,
          "ipucu": "Kalıbın sınır ve bitiş için ne istediğini, neyi yazdırmadığını düşün.",
          "aciklama": "Kalıp yolu adıyla sınırlar, bitişi ölçülebilir yazar ve nasıl yapılacağını ajana bırakır. Adım saymak ve sınırsız yol kalıba uymaz.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Görev kalıbı yalnız dokunulacak yolları adıyla ve ölçülebilir bir bitti ölçütünü taşır, nasıl yapılacağını yazmaz.",
            "soz": "Dokunulacak yollar (yalnız bunlar) ve dokunulmayacak yollar, adıyla"
          }
        },
        {
          "id": "b10-d7-s6",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Bitti ölçütü 'sayfa hızlı açılsın' idi; ajan bitti dedi, sen yavaş buluyorsun. Bu anlaşmazlık ___ yüzünden çıktı.",
          "secenekler": [
            "ajanın ölçütü hiç sınamaması",
            "ölçütte bir eşik olmaması",
            "sayfanın yanlış cihazda denenmesi"
          ],
          "dogru": 1,
          "ipucu": "'Hızlı' sözünü bir komut nasıl sınar?",
          "aciklama": "Ölçütle birlikte eşik verilmeyince 'hızlı' kişiye göre değişir, bitiş tartışmalı olur. Eşik, ör. 2 saniyenin altı, sınamayı herkes için aynı yapar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/prompt-library",
            "kopya": "prompt-library.md",
            "okuma": "2026-11-15",
            "dayanak": "Hedef performans ya da kapsam olduğunda ölçütü ve eşiği ver ki işin bitişi tartışmasız olsun."
          }
        },
        {
          "id": "b10-d7-s8",
          "tur": "coktan",
          "kart": 4,
          "soru": "'Yazılar büyük olsun' demiştin; iş bitti dendi ama yazılar küçük. Kurala göre ne olmalıydı?",
          "secenekler": [
            "Denetleyici işi kendiliğinden geri çevirmeliydi",
            "Sözün tutmadığı önceden sana bildirilmeliydi",
            "Bu söz göreve girmez, sohbette kalır"
          ],
          "dogru": 1,
          "ipucu": "Denetleyen ajan bir sözün tutmadığını görünce ne yapar, ne yapmaz?",
          "aciklama": "Denetleyen ajan senin sözünü raporlar, işi geri çevirmez; tutmayan söz sana 'bitti' denmeden söylenir. Burada bitti dendiyse söz atlanmış demektir.",
          "kaynak": {
            "adres": ".claude/skills/ajan-gorevi/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Doğrulayıcı kullanıcının sözlerini raporlar, işi geri çevirmez; karşılanmayan söz kullanıcıya 'bitti' denmeden söylenir.",
            "soz": "Doğrulayıcı sözleri raporlar, işi geri çevirmez"
          }
        }
      ]
    }
  ]
});
