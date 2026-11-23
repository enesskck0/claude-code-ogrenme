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
        "CLAUDE.md'nin her oturumda okunan kalıcı talimat dosyası olduğunu anlatabilir.",
        "Bilginin bir oturumdan ötekine neyle taşındığını, neyle taşınmadığını ayırt edebilir.",
        "CLAUDE.md'yi otomatik hafızadan (auto memory) kimin yazdığıyla ayırt edebilir."
      ],
      "anlatim": [
        "Her oturum boş bir bağlam penceresiyle (context window) başlar; önceki konuşmayı bilmez. Bilgiyi oturumlar arasında iki düzenek taşır: CLAUDE.md ve otomatik hafıza.",
        "CLAUDE.md düz metin bir talimat dosyasıdır. Claude onu her oturumun başında, sen istemeden okur.",
        "CLAUDE.md'yi sen yazarsın, içinde kurallar olur; otomatik hafızayı Claude yazar, içinde öğrendikleri ve düzeltmelerin olur. İkisi de her konuşmanın başında yüklenir.",
        "'Bunu hatırla' dersen Claude onu otomatik hafızaya yazar. CLAUDE.md'ye girmesini istiyorsan bunu açıkça söylersin."
      ],
      "terimler": [
        {
          "tr": "bağlam penceresi",
          "en": "context window",
          "aciklama": "Claude'un bir oturumda gördüğü metnin tamamı; her oturum boş bir pencereyle başlar."
        },
        {
          "tr": "otomatik hafıza",
          "en": "auto memory",
          "aciklama": "Claude'un senin düzeltmelerine ve tercihlerine göre kendi yazdığı notlar."
        }
      ],
      "sorular": [
        {
          "id": "b04-d1-s10",
          "tur": "dogru-yanlis",
          "kart": 0,
          "soru": "Aynı anda açık iki oturumdan birinde konuştuğun bir şeyi öteki oturum da bilir.",
          "dogru": false,
          "ipucu": "Her oturumun neyle başladığını düşün.",
          "aciklama": "Her oturum kendi bağlam penceresiyle, boş başlar; bir oturumdaki konuşma ötekine geçmez. Ortak bilgi ancak CLAUDE.md gibi bir dosyadan gelir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Her Claude Code oturumu boş bir bağlam penceresiyle başlar ve bilgiyi oturumlar arasında iki düzenek taşır: CLAUDE.md dosyaları ve otomatik hafıza."
          }
        },
        {
          "id": "b04-d1-s4",
          "tur": "coktan",
          "kart": 1,
          "soru": "Yeni oturum açtın. Claude'un proje kurallarına uyması için ilk mesajına ne eklersin?",
          "secenekler": [
            "'Önce CLAUDE.md'yi oku'; yoksa okunmaz",
            "Kuralların kopyası; dosya kısaltılarak okunur",
            "Ek cümle gerekmez; dosya zaten okunur"
          ],
          "dogru": 2,
          "ipucu": "CLAUDE.md'nin hangi anda okunduğunu düşün.",
          "aciklama": "CLAUDE.md her oturumun başında kendiliğinden okunur. İlk mesajda okumasını istemek ya da kuralları kopyalamak gerekmez.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/the-claude-md-file",
            "kopya": "ders-101-08-claude-md.md",
            "okuma": "2026-11-15",
            "dayanak": "CLAUDE.md projenin köküne eklenen bir Markdown dosyasıdır ve Claude Code onu her oturum başlattığında kendiliğinden okur."
          }
        },
        {
          "id": "b04-d1-s8",
          "tur": "coktan",
          "kart": 1,
          "soru": "CLAUDE.md'deki bir kural artık yanlış; sohbette Claude'a yenisini söyledin. Yarın yeni oturumda ne olur?",
          "secenekler": [
            "Dünkü sözüne göre davranır",
            "Eski satıra göre davranır",
            "İkisini birlikte uygulamaya çalışır"
          ],
          "dogru": 1,
          "ipucu": "Yeni bir oturumun neyi okuyup neyi bilmediğini düşün.",
          "aciklama": "Sohbetteki söz sonraki oturuma taşınmaz, dosya ise her oturumun başında yeniden okunur. Satırın kendisini değiştirtmen gerekir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Her Claude Code oturumu boş bir bağlam penceresiyle başlar ve bilgiyi oturumlar arasında iki düzenek taşır: CLAUDE.md dosyaları ve otomatik hafıza."
          }
        },
        {
          "id": "b04-d1-s9",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Claude bir kurala neden uyduğunu açıklayamıyor. Kuralı görmek için CLAUDE.md'yi ___.",
          "secenekler": [
            "kendin bir metin düzenleyicide açarsın",
            "yalnız Claude'a okutursun, biçimi kapalı",
            "Code sekmesinin ayarlarında bulursun"
          ],
          "dogru": 0,
          "ipucu": "Kartta dosyanın ne tür bir dosya olduğunu anlatan söze bak.",
          "aciklama": "CLAUDE.md düz metin bir talimat dosyasıdır; herhangi bir metin düzenleyicide açılıp okunur. Claude bir kurala uyuyorsa satırı orada kendin arayabilirsin.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/the-claude-md-file",
            "kopya": "ders-101-08-claude-md.md",
            "okuma": "2026-11-15",
            "dayanak": "CLAUDE.md projenin köküne eklenen bir Markdown dosyasıdır ve Claude Code onu her oturum başlattığında kendiliğinden okur."
          }
        },
        {
          "id": "b04-d1-s2",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bir projede Claude, hiçbir dosyaya yazmadığın bir tercihini yeni oturumda kendiliğinden uyguluyor. En olası kaynak?",
          "secenekler": [
            "Claude'un kendi tuttuğu notlar",
            "Önceki konuşmanın bu oturuma yüklenmesi",
            "Claude'un CLAUDE.md'yi kendiliğinden yeniden yazması"
          ],
          "dogru": 0,
          "ipucu": "Oturumlar arası bilgi taşıyan iki düzenekten hangisini Claude'un yazdığını düşün.",
          "aciklama": "Otomatik hafızayı Claude kendisi yazar ve her konuşmanın başında yüklenir; senin yazmadığın tercih oradan gelebilir. Önceki konuşma ise taşınmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Karşılaştırma tablosuna göre CLAUDE.md'yi kullanıcı yazar, otomatik hafızayı ise Claude yazar; ikisi de her konuşmanın başında yüklenir."
          }
        },
        {
          "id": "b04-d1-s6",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude'a 'bunu hatırla: tarihleri gün.ay.yıl yaz' dedin. Bir hafta sonra CLAUDE.md'ye baktın, kural yok. Neden?",
          "secenekler": [
            "İstek Claude'un kendi notlarına gitti",
            "CLAUDE.md'ye yalnız sen elle yazabilirsin",
            "Kural yalnız o oturumda geçerliydi"
          ],
          "dogru": 0,
          "ipucu": "'Hatırla' isteğinin hangi düzeneğe gittiğini düşün.",
          "aciklama": "'Hatırla' dersen Claude bunu otomatik hafızaya yazar, CLAUDE.md'ye değil. Dosyaya girmesini istiyorsan bunu açıkça söylersin.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude'dan bir şeyi hatırlamasını istersen onu otomatik hafızaya kaydeder; CLAUDE.md'ye eklemek için bunu doğrudan istersin."
          }
        }
      ]
    },
    {
      "id": "b04-d2",
      "baslik": "CLAUDE.md nerede durur",
      "hedefler": [
        "Kişisel, proje ve yerel CLAUDE.md'nin kimi etkilediğini kapsamıyla (scope) anlatabilir.",
        "Birden çok CLAUDE.md bulununca hepsinin bağlama eklendiğini ayırt edebilir.",
        "Alt klasördeki CLAUDE.md'nin ne zaman yüklendiğini anlatabilir."
      ],
      "anlatim": [
        "CLAUDE.md'nin durduğu yer kapsamını belirler. Ev klasöründeki ~/.claude/CLAUDE.md, bütün projelerinde yalnız senin için geçerlidir.",
        "Proje kökündeki CLAUDE.md git ile paylaşılır; yanındaki CLAUDE.local.md yalnız senindir, git'e girmez. Bizim CLAUDE.md bu klasörün kökünde durur.",
        "Bulunan CLAUDE.md dosyaları birbirinin yerine geçmez; hepsi arka arkaya bağlama eklenir.",
        "Alt klasördeki bir CLAUDE.md açılışta yüklenmez. Claude o klasörde bir dosyayı okuyunca ya da düzenleyince yüklenir."
      ],
      "terimler": [
        {
          "tr": "kapsam",
          "en": "scope",
          "aciklama": "Bir CLAUDE.md'nin kimi ve hangi projeleri etkilediği."
        }
      ],
      "sorular": [
        {
          "id": "b04-d2-s6",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Her projende 'teknik terim yerine sade Türkçe anlat' kuralı geçerli olsun istiyorsun; bir kez ___ yazdırırsın.",
          "secenekler": [
            "bu klasörün kökündeki CLAUDE.md'ye",
            "ev klasöründeki kişisel CLAUDE.md'ye",
            "bu sohbetin ilk mesajına"
          ],
          "dogru": 1,
          "ipucu": "Kuralın kaç projede geçerli olacağını ve dosyanın yerinin bunu nasıl belirlediğini düşün.",
          "aciklama": "Ev klasöründeki CLAUDE.md bütün projelerinde yalnız senin için geçerlidir. Bir projenin kökündeki dosya yalnız o projeyi etkiler, sohbet ise sonraki oturuma taşınmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Kullanıcı talimatları ~/.claude/CLAUDE.md'de durur ve bütün projeler için kişisel tercihleri taşır."
          }
        },
        {
          "id": "b04-d2-s1",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bu klasörü başka bilgisayara git ile indirdin; evde uyulan bir kurala orada uyulmuyor. Kaynağı?",
          "secenekler": [
            "Kökteki CLAUDE.md git'e hiç girmez",
            "Proje dosyası yalnız yazıldığı bilgisayarda okunur",
            "Kural kişisel dosyadaydı, git'e girmedi"
          ],
          "dogru": 2,
          "ipucu": "Hangi CLAUDE.md'lerin git ile taşındığını düşün.",
          "aciklama": "Kökteki CLAUDE.md git ile gelir; ev klasöründeki dosya ve CLAUDE.local.md ise kişiseldir, git'e girmez. Kural onlardan birindeyse öteki bilgisayarda yoktur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Proje talimatları sürüm denetimiyle ekiple paylaşılır; kullanıcı talimatları ~/.claude/CLAUDE.md'de, yerel talimatlar .gitignore'a eklenen ./CLAUDE.local.md'de durur."
          }
        },
        {
          "id": "b04-d2-s5",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bu klasörde bir haftalık deneme için Claude'a geçici bir talimat bırakacaksın; git geçmişine girmesin. Nereye yazdırırsın?",
          "secenekler": [
            "Kökte yeni bir CLAUDE.local.md'ye",
            "Kökteki CLAUDE.md'ye, sonra silersin",
            "Ev klasöründeki kişisel CLAUDE.md'ye"
          ],
          "dogru": 0,
          "ipucu": "Hem git dışında kalan hem yalnız bu projeyi etkileyen dosyayı düşün.",
          "aciklama": "CLAUDE.local.md yalnız senin ve bu projenindir, git'e girmez. Ev klasöründeki dosya da git'e girmez ama bütün projelerine uygulanır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Yerel talimatlar ./CLAUDE.local.md'de durur, kişisel ve projeye özel tercihler içindir ve .gitignore'a eklenir."
          }
        },
        {
          "id": "b04-d2-s4",
          "tur": "bosluk",
          "kart": 2,
          "soru": "Kişisel CLAUDE.md'nde 'İngilizce yaz', projeninkinde 'Türkçe yaz' var; Claude bazen karışık yazıyor, çünkü ___.",
          "secenekler": [
            "proje dosyası kişiseli siler",
            "ikisi de bağlama girer, çelişki kalır",
            "kişisel dosya yalnız tek başınayken okunur"
          ],
          "dogru": 1,
          "ipucu": "Birden çok CLAUDE.md bulununca ne olduğunu düşün.",
          "aciklama": "Dosyalar birbirinin yerine geçmez, hepsi bağlama eklenir. Çelişen iki satır birlikte okunur; birini kaldırtman gerekir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Bulunan bütün dosyalar birbirinin yerine geçmez, bağlamda arka arkaya eklenir."
          }
        },
        {
          "id": "b04-d2-s8",
          "tur": "coktan",
          "kart": 3,
          "soru": "inceleme/ altına bir CLAUDE.md koydun. Yeni oturumda Claude kökteki bir işte o dosyanın kuralına uymadı. Neden?",
          "secenekler": [
            "Kökteki CLAUDE.md onu geçersiz kıldı",
            "Alt klasöre konan CLAUDE.md hiç okunmaz",
            "Yalnız o klasörde çalışınca yüklenir"
          ],
          "dogru": 2,
          "ipucu": "Alt klasördeki dosyanın açılışta mı, sonra mı yüklendiğini düşün.",
          "aciklama": "Alt klasördeki CLAUDE.md açılışta yüklenmez; Claude o klasörde bir dosyayı okuyunca ya da düzenleyince yüklenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Alt klasörlerdeki CLAUDE.md dosyaları açılışta değil, Claude o alt klasörde başka bir dosyayı okuyunca, yazınca ya da düzenleyince yüklenir."
          }
        },
        {
          "id": "b04-d2-s9",
          "tur": "coktan",
          "kart": 3,
          "soru": "Yalnız rapor yazarken gereken uzun bir kural listen var. Öteki işlerde açılış yükünü artırmadan nereye yazdırırsın?",
          "secenekler": [
            "Rapor klasörüne ayrı bir CLAUDE.md'ye",
            "Rapor klasörüne kurallar.md adıyla",
            "Kökteki CLAUDE.md'nin sonuna"
          ],
          "dogru": 0,
          "ipucu": "Hangi CLAUDE.md'nin açılışta değil, gerekince yüklendiğini düşün.",
          "aciklama": "Alt klasördeki CLAUDE.md yalnız Claude o klasörde çalışınca yüklenir; kökteki dosya her açılışta okunur. Başka adla konan dosya kendiliğinden yüklenmez.",
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
        "CLAUDE.md'nin bağlam olduğunu, kesin uyumu garanti etmediğini anlatabilir.",
        "Belirsiz bir satırı somut ve sınanabilir olandan ayırt edebilir.",
        "Yazılmaması gereken satırı iki soruluk testle ayırt edebilir.",
        "Vurguyla düzelmeyen kuralın kancaya (hook) taşınacağını anlatabilir."
      ],
      "anlatim": [
        "Claude CLAUDE.md'yi zorunlu bir ayar gibi değil, bağlam olarak okur. Kurala çoğu zaman uyar ama uyum garanti değildir.",
        "Satır somut ve sınanabilir olunca Claude daha iyi uyar: 'Kodu düzgün biçimlendir' yerine '2 boşluklu girinti kullan'.",
        "Her CLAUDE.md için 200 satırın altı hedeflenir. Uzun dosya bağlamda daha çok yer kaplar ve uyumu düşürür.",
        "Bizde denetim betiği (küçük bir program) CLAUDE.md'nin boyutuna tavan koyar. Tavan satırla değil, dosya boyutu birimi baytla ölçülür.",
        "Yazmadan önce iki soru sor: Claude bunu kodu okuyarak bulabilir mi, gidip bakar mı? İkisi de evetse yazma.",
        "Bizde sistem-metni skill'inin kontrol listesi şu maddeyle başlar: 'Model bunu kendi bilir mi? Biliyorsa yazılmaz.'",
        "Bir satıra ÖNEMLİ diye vurgu ekledin ve Claude yine kaçırıyorsa, o satır kancaya aittir. Kanca belli bir anda kendiliğinden koşar ve eylemi durdurabilir."
      ],
      "terimler": [
        {
          "tr": "kanca",
          "en": "hook",
          "aciklama": "Belli bir anda kendiliğinden koşan komut; Claude ne karar verirse versin uygulanır ve bir eylemi durdurabilir."
        }
      ],
      "sorular": [
        {
          "id": "b04-d3-s6",
          "tur": "coktan",
          "kart": 0,
          "soru": "CLAUDE.md'ye 'dosya silmeden önce bana sor' yazdın. Bu, sormadan silmeyi kesin engeller mi?",
          "secenekler": [
            "Evet; dosya her oturumda yüklenir",
            "Hayır; dosya bağlamdır, uyum kesin değil",
            "Hayır; dosya yalnız istenince okunur"
          ],
          "dogru": 1,
          "ipucu": "Claude'un CLAUDE.md'yi nasıl okuduğunu ve bunun neyi garanti ettiğini düşün.",
          "aciklama": "CLAUDE.md her oturumda yüklenir ama zorunlu ayar değil, bağlamdır; Claude çoğu zaman uyar, kesin uyum garanti değildir. Hiç kaçmaması gereken kural için başka bir yol gerekir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude CLAUDE.md dosyalarını zorunlu yapılandırma olarak değil bağlam olarak ele alır."
          }
        },
        {
          "id": "b04-d3-s2",
          "tur": "bosluk",
          "kart": 1,
          "soru": "CLAUDE.md'de 'değişiklikten sonra kontrol et' yazıyor; Claude göz atıp 'kontrol ettim' dedi, testi koşmadı. Çünkü satır ___.",
          "secenekler": [
            "başında ÖNEMLİ taşımıyor",
            "dosyanın en son satırlarında kalmış",
            "neyin yapılacağını söylemiyor"
          ],
          "dogru": 2,
          "ipucu": "Satırı okuyan biri ne yapacağını kesin bilir mi, onu düşün.",
          "aciklama": "'Kontrol et' belirsizdir; Claude göz atmayı da kontrol sayabilir. 'Değişiklikten sonra testleri koş' gibi sınanabilir bir satıra daha iyi uyulur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Talimatlar sınanabilecek kadar somut yazılır, 'Değişikliklerini test et' yerine 'Commit'ten önce npm test koş' gibi."
          }
        },
        {
          "id": "b04-d3-s1",
          "tur": "coktan",
          "kart": 2,
          "soru": "CLAUDE.md 600 satıra çıktı; Claude bazı kuralları atlamaya başladı. En olası kaynak?",
          "secenekler": [
            "Dosya uzadı; uzun dosyada uyum düşer",
            "Uzun dosya bazı oturumlarda hiç yüklenmez",
            "Claude uzun dosyanın yalnız başını okur"
          ],
          "dogru": 0,
          "ipucu": "Dosyanın uzunluğu ile uyum arasındaki bağı düşün.",
          "aciklama": "Uzun dosya bağlamda daha çok yer kaplar ve uyumu düşürür. 200 satır bir kesme sınırı değil, hedeftir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Her CLAUDE.md dosyası için 200 satırın altı hedeflenir; uzun dosyalar daha çok bağlam tüketir ve uyumu azaltır."
          }
        },
        {
          "id": "b04-d3-s7",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Claude CLAUDE.md'ye uzun bir bölüm ekledi; dosya 180 satır, denetim yine bulgu verdi, çünkü dosya ___.",
          "secenekler": [
            "150 satır sınırını geçti",
            "bayt tavanını aştı",
            "eski bir kuralla çelişiyor"
          ],
          "dogru": 1,
          "ipucu": "Betiğin CLAUDE.md'yi hangi birimle ölçtüğünü düşün.",
          "aciklama": "Bizim denetim betiği CLAUDE.md tavanını satırla değil baytla ölçer. Satır az olsa da uzun satırlar dosyayı tavanın üstüne çıkarabilir.",
          "kaynak": {
            "adres": "denetim.py",
            "okuma": "2026-11-24",
            "dayanak": "denetim.py CLAUDE_TAVAN değerini 17524 bayt olarak tanımlar ve satırın notu bunu D1 kontrolüne bağlar.",
            "soz": "CLAUDE_TAVAN, SKILL_TAVAN, KART_TAVAN = 17524, 10000, 3000 # D1: bayt"
          }
        },
        {
          "id": "b04-d3-s3",
          "tur": "coktan",
          "kart": 4,
          "soru": "CLAUDE.md'ye 'raporlar inceleme/ klasöründe' satırını ekleyeceksin; Claude her işte klasörleri listeliyor. Ne yaparsın?",
          "secenekler": [
            "Eklersin; her bilgi CLAUDE.md'de durmalı",
            "Eklemezsin; klasör adı CLAUDE.md'ye hiç yazılmaz",
            "Eklemezsin; Claude bunu bakarak bulur"
          ],
          "dogru": 2,
          "ipucu": "İki sorunun ikisine de evet denebiliyor mu, ona bak.",
          "aciklama": "Claude bunu klasöre bakarak bulabiliyor ve gerçekten bakıyorsa iki cevap da evettir; satır yalnız dosyayı uzatır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude bunu kodu okuyarak bulabiliyor ve gerçekten gidip bakıyorsa, iki cevap da evet olduğu için satır yazılmaz."
          }
        },
        {
          "id": "b04-d3-s8",
          "tur": "coktan",
          "kart": 5,
          "soru": "Claude'un skill taslağında 'JSON'da anahtarlar çift tırnakla yazılır' maddesi var. Kontrol listesine göre ne olur?",
          "secenekler": [
            "Madde çıkar; model bunu zaten bilir",
            "Madde kalır; açıkça yazılan kural iyidir",
            "Madde ÖNEMLİ diye işaretlenir"
          ],
          "dogru": 0,
          "ipucu": "Listenin ilk sorusunu bu maddeye sor.",
          "aciklama": "Kontrol listesinin ilk maddesi modelin kendi bildiği şeyi yazdırmaz; JSON yazımını model zaten bilir, madde yalnız yer kaplar.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "sistem-metni skill'inin kontrol listesindeki ilk madde, modelin kendi bildiği şeyin yazılmamasını söyler.",
            "soz": "Model bunu kendi bilir mi? Biliyorsa yazılmaz."
          }
        },
        {
          "id": "b04-d3-s5",
          "tur": "coktan",
          "kart": 6,
          "soru": "CLAUDE.md'deki 'eski maddeleri silme' satırına ÖNEMLİ ekledin; Claude yine bir madde sildi. Ne yaparsın?",
          "secenekler": [
            "Satırı büyük harfle yeniden yazarsın",
            "Kuralı durduran bir kancaya taşırsın",
            "Satırı dosyanın en başına alırsın"
          ],
          "dogru": 1,
          "ipucu": "Vurgu işe yaramadıysa, kararı Claude'a bırakmayan aracı düşün.",
          "aciklama": "Vurguya rağmen kaçan satır kancaya aittir; kanca Claude ne karar verirse versin eylemi durdurabilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir CLAUDE.md satırına vurgu eklemeye devam ettiğin hâlde Claude onu kaçırıyorsa, bu satırın bir kancaya ait olduğunun işaretidir."
          }
        }
      ]
    },
    {
      "id": "b04-d4",
      "baslik": "İçe aktarma (import)",
      "hedefler": [
        "CLAUDE.md içindeki @ satırının başka bir dosyayı da bağlama yüklediğini anlatabilir.",
        "Aktarılmayan bir dosyanın nedenini (@ yok, ters tırnak, göreli yol) ayırt edebilir.",
        "İçe aktarmanın dosyayı düzenlediğini ama bağlam yükünü azaltmadığını anlatabilir."
      ],
      "anlatim": [
        "CLAUDE.md içine @ ve bir dosya yolu yazarsan, örneğin '@README.md', o dosya da CLAUDE.md ile birlikte bağlama yüklenir.",
        "Aktarılan dosya da başka dosya aktarabilir. Göreli yol, yani tam adressiz kısa yol, @ satırını yazan dosyanın yerine göre çözülür.",
        "Bizim CLAUDE.md'nin son satırı tek başına '@AGENTS.md'. Yani AGENTS.md her oturumda CLAUDE.md ile birlikte yüklenir.",
        "İçe aktarma uzun bir dosyayı düzenler ama yükü azaltmaz: aktarılan her şey açılışta yine okunur.",
        "Ters tırnak (backtick) içindeki @yol aktarılmaz, düz metin kalır. Proje dışındaki bir dosya aktarılırken ilk seferde onay sorulur."
      ],
      "terimler": [
        {
          "tr": "içe aktarma",
          "en": "import",
          "aciklama": "CLAUDE.md içinde @ ve dosya yoluyla başka bir dosyayı da bağlama yükletmek."
        },
        {
          "tr": "ters tırnak",
          "en": "backtick",
          "aciklama": "Klavyedeki ` işareti; içine yazılan @yol içe aktarılmaz, düz metin kalır."
        }
      ],
      "sorular": [
        {
          "id": "b04-d4-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "CLAUDE.md her oturumda docs/git.md'deki kuralları da yüklesin istiyorsun. Ne yazdırırsın?",
          "secenekler": [
            "'Kurallar docs/git.md'de' cümlesini",
            "Bir satıra '@docs/git.md'",
            "docs/git.md'yi köke taşıtırsın"
          ],
          "dogru": 1,
          "ipucu": "Bir dosyanın CLAUDE.md ile birlikte yüklenmesi için yolun nasıl yazıldığını düşün.",
          "aciklama": "Dosyayı yalnız anmak onu yüklemez; yol @ ile yazılınca dosya CLAUDE.md ile birlikte bağlama girer.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "CLAUDE.md dosyaları @yol sözdizimiyle başka dosyaları içe aktarabilir; aktarılan dosyalar açılır ve onları anan CLAUDE.md ile birlikte bağlama yüklenir."
          }
        },
        {
          "id": "b04-d4-s5",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Kökteki CLAUDE.md'nin aktardığı rehber/ana.md içine '@ekler.md' yazdın; kökteki ekler.md yüklenmedi, çünkü yol ___ çözüldü.",
          "secenekler": [
            "ev klasörüne göre",
            "bir üst klasörün köküne göre",
            "rehber/ klasörüne göre"
          ],
          "dogru": 2,
          "ipucu": "Göreli yolun hangi dosyanın yerine göre çözüldüğünü düşün.",
          "aciklama": "Göreli yol, @ satırını yazan dosyanın yerine göre çözülür; rehber/ana.md'deki '@ekler.md' rehber/ekler.md'yi arar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Göreli yollar çalışma klasörüne göre değil, içe aktarmayı içeren dosyaya göre çözülür; içe aktarılan dosyalar başka dosyaları da içe aktarabilir."
          }
        },
        {
          "id": "b04-d4-s2",
          "tur": "coktan",
          "kart": 2,
          "soru": "AGENTS.md'deki bir kuralı Claude'a hiç okutmadın; yine de her oturumda uyguluyor. Neden?",
          "secenekler": [
            "CLAUDE.md onu @ ile her açılışta aktarıyor",
            "Claude kökteki bütün .md dosyalarını okur",
            "Önceki bir oturumda okunduğu için hatırlıyor"
          ],
          "dogru": 0,
          "ipucu": "Bizim CLAUDE.md'nin son satırını düşün.",
          "aciklama": "CLAUDE.md'nin son satırı '@AGENTS.md'dir; bu yüzden AGENTS.md her oturumda CLAUDE.md ile birlikte yüklenir.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "CLAUDE.md'nin son satırı yalnız @AGENTS.md içe aktarmasını taşır.",
            "soz": "Europe/Istanbul date`). @AGENTS.md"
          }
        },
        {
          "id": "b04-d4-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "Uzun CLAUDE.md'de kurallar kaçıyor; Claude 'yarısını ayrı dosyaya alıp @ ile aktarayım' diyor. Çözer mi?",
          "secenekler": [
            "Çözer; aktarılan dosya gerekince okunur",
            "Çözmez; o dosya da açılışta yüklenir",
            "Çözmez; @ satırı yalnız ilk oturumda çalışır"
          ],
          "dogru": 1,
          "ipucu": "Aktarılan dosyanın ne zaman yüklendiğini düşün.",
          "aciklama": "İçe aktarma dosyayı düzenler ama yükü azaltmaz; aktarılan dosya CLAUDE.md ile birlikte açılışta yüklenir, bağlam aynı kalır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "İçe aktarmalar uzun bir dosyayı düzenlemeye yardım eder ama bağlam maliyetini azaltmaz, çünkü aktarılan dosyalar onları anan CLAUDE.md ile birlikte yüklenir."
          }
        },
        {
          "id": "b04-d4-s6",
          "tur": "bosluk",
          "kart": 4,
          "soru": "CLAUDE.md'de 'ayrıntı için `@rehber.md`' satırı var ama rehber yüklenmiyor, çünkü yol ___.",
          "secenekler": [
            "küçük harfle yazılmış, büyük olmalıydı",
            "dosyanın sonunda değil",
            "ters tırnak içinde, düz metin kalmış"
          ],
          "dogru": 2,
          "ipucu": "Satırda yolun etrafındaki işarete bak.",
          "aciklama": "Ters tırnak içindeki @yol aktarılmaz, düz metin kalır. Tırnaksız '@rehber.md' yazılınca dosya yüklenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Ters tırnak içindeki @yol düz metin kalır, boşluklu yolda her boşluktan önce ters bölü gerekir ve proje dosyasındaki proje dışı aktarma ilk karşılaşmada onay penceresi açar."
          }
        },
        {
          "id": "b04-d4-s8",
          "tur": "coktan",
          "kart": 4,
          "soru": "Oturum açılınca Claude ev klasöründeki bir dosya için onay istedi; sen istememiştin. Kaynağı?",
          "secenekler": [
            "Bir CLAUDE.md o dosyayı @ ile aktarıyor",
            "Claude dosyayı düzenlemek istiyor",
            "Açılışta her dosya için onay sorulur"
          ],
          "dogru": 0,
          "ipucu": "Proje dışındaki bir dosyanın açılışta nasıl yüklenebileceğini düşün.",
          "aciklama": "Proje dışındaki bir dosya @ ile aktarılınca ilk karşılaşmada onay penceresi açılır. Oturum başındaki soru bu yüzdendir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Ters tırnak içindeki @yol düz metin kalır, boşluklu yolda her boşluktan önce ters bölü gerekir ve proje dosyasındaki proje dışı aktarma ilk karşılaşmada onay penceresi açar."
          }
        }
      ]
    },
    {
      "id": "b04-d5",
      "baslik": "Otomatik hafıza (auto memory)",
      "hedefler": [
        "Otomatik hafızanın her projeye ayrı ve varsayılan olarak açık olduğunu anlatabilir.",
        "Otomatik hafızayı tek projede kapatmakla bütün projelerde kapatmayı ayırt edebilir.",
        "Bizde otomatik hafıza kapalıyken kalıcı bilginin nereye yazıldığını anlatabilir."
      ],
      "anlatim": [
        "Otomatik hafıza açıkken Claude, düzeltmelerine ve tercihlerine göre kendi notlarını yazar. Notlar ev klasöründe durur, her proje kendi klasörünü alır.",
        "Otomatik hafıza yerel oturumlarda varsayılan olarak açıktır. Not dizini MEMORY.md'nin yalnız ilk 200 satırı ya da 25KB'ı her konuşmanın başında yüklenir.",
        "Tek projede kapatmak için o projenin ayar dosyasına autoMemoryEnabled: false yazılır. Ev klasöründeki kişisel ayara yazılırsa bütün projelerde kapanır.",
        "Bizde kapalı: .claude/settings.json'da autoMemoryEnabled false. CLAUDE.md'de de şu satır var: 'Claude Code'un kendi hafıza klasörü kullanılmaz; her şey bu klasörde yaşar.'"
      ],
      "terimler": [
        {
          "tr": "otomatik hafıza",
          "en": "auto memory",
          "aciklama": "Claude'un oturumlar arasında kendi tuttuğu notlar; bizde kapalı."
        }
      ],
      "sorular": [
        {
          "id": "b04-d5-s8",
          "tur": "coktan",
          "kart": 0,
          "soru": "İki projende de otomatik hafıza açık. A'da Claude bir düzeltmeni hatırlıyor, B'de hatırlamıyor. Neden?",
          "secenekler": [
            "Notlar yalnız son açılan projede okunur",
            "Notlar her projeye ayrı tutulur",
            "B'nin CLAUDE.md'si hafızayı ezdi"
          ],
          "dogru": 1,
          "ipucu": "Notların ev klasöründe nasıl bölünerek durduğunu düşün.",
          "aciklama": "Her proje kendi hafıza klasörünü alır; A'da yazılan not B'de yüklenmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Her proje kendi hafıza klasörünü ~/.claude/projects/<proje>/memory/ altında alır."
          }
        },
        {
          "id": "b04-d5-s3",
          "tur": "dogru-yanlis",
          "kart": 1,
          "soru": "Yeni açtığın bir projede hiçbir ayara dokunmazsan, Claude orada düzeltmelerini kendi notlarına yazmaz.",
          "dogru": false,
          "ipucu": "Otomatik hafızanın varsayılan durumunu düşün.",
          "aciklama": "Otomatik hafıza yerel oturumlarda varsayılan olarak açıktır; kapatmazsan Claude yeni projede de kendi notlarını tutar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "Otomatik hafıza yerel oturumlarda varsayılan olarak açıktır."
          }
        },
        {
          "id": "b04-d5-s7",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Claude'un not dizini çok uzadı; bazı notlar oturum başında yüklenmiyor, çünkü açılışta dizinin ___ yüklenir.",
          "secenekler": [
            "yalnız sonu",
            "yalnız son haftası",
            "yalnız başı"
          ],
          "dogru": 2,
          "ipucu": "Dizinin ne kadarının açılışta yüklendiğini düşün.",
          "aciklama": "MEMORY.md'nin yalnız ilk 200 satırı ya da ilk 25KB'ı her konuşmanın başında yüklenir; sınırın ötesi açılışta gelmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/memory",
            "kopya": "memory.md",
            "okuma": "2026-11-15",
            "dayanak": "MEMORY.md'nin ilk 200 satırı ya da ilk 25KB'ı, hangisi önce gelirse, her konuşmanın başında yüklenir."
          }
        },
        {
          "id": "b04-d5-s5",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bir projede otomatik hafızayı kapattırdın; öteki projelerde de Claude not tutmuyor. Kaynağı?",
          "secenekler": [
            "Satır projenin değil, senin genel ayarına girdi",
            "Bir projede kapanınca hepsinde kapanır",
            "Bütün projelerin notları tek ortak klasörde durur"
          ],
          "dogru": 0,
          "ipucu": "Ayarın yazıldığı dosyanın kaç projeyi etkilediğini düşün.",
          "aciklama": "Tek projede kapatmak için o projenin ayar dosyası kullanılır; ev klasöründeki kişisel ayara yazılan değer bütün projelerde geçerlidir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/claude-directory",
            "kopya": "claude-directory.md",
            "okuma": "2026-11-15",
            "dayanak": "Proje dosyaları git'e girerek ekiple paylaşılır; ~/.claude içindeki dosyalar bütün projelerinde geçerli kişisel yapılandırmadır."
          }
        },
        {
          "id": "b04-d5-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "Ev klasöründe Claude'un hafıza notlarına baktın; bu projenin not klasörü boş. En olası neden?",
          "secenekler": [
            "Notlar proje klasörünün içinde tutuluyor",
            "Bu klasörün ayarı otomatik hafızayı kapatıyor",
            "Notlar oturum kapanınca yazılır"
          ],
          "dogru": 1,
          "ipucu": "Bu klasörün ayar dosyasında otomatik hafıza için ne yazdığını düşün.",
          "aciklama": "Bu klasörde .claude/settings.json'da autoMemoryEnabled false; otomatik hafıza kapalı olduğu için Claude bu proje için not yazmaz.",
          "kaynak": {
            "adres": ".claude/settings.json",
            "okuma": "2026-11-24",
            "dayanak": ".claude/settings.json dosyası autoMemoryEnabled değerini false yapar.",
            "soz": "\"autoMemoryEnabled\": false"
          }
        },
        {
          "id": "b04-d5-s6",
          "tur": "coktan",
          "kart": 3,
          "soru": "Bu klasörde Claude bir hatasından ders çıkardı, 'not edeyim' dedi. Kurala göre nereye yazmalı?",
          "secenekler": [
            "Claude'un ev klasöründeki hafıza notlarına",
            "Hiçbir yere; sohbette söylemesi yeter",
            "Bu proje klasöründeki bir dosyaya"
          ],
          "dogru": 2,
          "ipucu": "CLAUDE.md'deki satırın noktalı virgülden sonraki yarısını düşün.",
          "aciklama": "CLAUDE.md'ye göre Claude Code'un kendi hafıza klasörü kullanılmaz, her şey bu klasörde yaşar; kalıcı not klasördeki bir dosyaya yazılır.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "CLAUDE.md'ye göre Claude Code'un kendi hafıza klasörü kullanılmaz ve her şey bu klasörde yaşar.",
            "soz": "Claude Code'un kendi hafıza klasörü kullanılmaz; her şey bu klasörde yaşar."
          }
        }
      ]
    },
    {
      "id": "b04-d6",
      "baslik": ".claude klasörünün haritası",
      "hedefler": [
        "CLAUDE.md, settings.json, skill ve alt ajan (subagent) dosyalarını işleriyle eşleyip anlatabilir.",
        "Alt ajanların CLAUDE.md'yi yüklemediğini anlatabilir.",
        "Bir kancanın (hook) kaydının ve betiğinin nerede durduğunu ayırt edebilir."
      ],
      "anlatim": [
        "CLAUDE.md bağlam ve kurallar; settings.json izinler ve kancalar; skills/<ad>/SKILL.md /ad ile çağrılan yetenek; agents/*.md alt ajan tanımı. <ad> ve * yerine bir ad gelir.",
        "Bizde ajanlar .claude/agents/ altında durur. Ajanlar CLAUDE.md'yi yüklemez; ortak kuralları ajan-kimligi skill'indedir.",
        "Bizde skill'ler .claude/skills/ altında durur. CLAUDE.md, olay anında hangi skill'in önce okunacağını söyler: kapanışta kapanis gibi.",
        "Bizde kancalar settings.json'daki hooks bölümünde kayıtlı, betikleri .claude/hooks/ içinde. Örneğin acilis.py oturum açılınca koşar, bağlama saati basar."
      ],
      "terimler": [
        {
          "tr": "kanca",
          "en": "hook",
          "aciklama": "Belli bir anda kendiliğinden koşan komut; bizde settings.json'daki hooks bölümünde kayıtlı."
        },
        {
          "tr": "alt ajan",
          "en": "subagent",
          "aciklama": "Kendi istemi ve araçları olan, ana oturumun iş verdiği yardımcı; tanımı agents/*.md dosyasında."
        }
      ],
      "sorular": [
        {
          "id": "b04-d6-s1",
          "tur": "eslestir",
          "kart": 0,
          "soru": "Yapmak istediğin değişikliği düzenlenecek dosyayla eşleştir.",
          "ciftler": [
            [
              "Raporların hep Türkçe başlıkla açılması",
              "CLAUDE.md"
            ],
            [
              "/rapor diye çağıracağın yeni bir iş tarifi",
              "skills/<ad>/SKILL.md"
            ],
            [
              "Kendi araç listesi olan yeni bir yardımcı",
              "agents/*.md"
            ]
          ],
          "ipucu": "Her isteğin bir kural mı, çağrılan bir yetenek mi, yardımcı mı olduğuna bak.",
          "aciklama": "Kurallar CLAUDE.md'de, /ad ile çağrılan yetenek skills altında, kendi araçları olan yardımcı agents altında durur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/claude-directory",
            "kopya": "claude-directory.md",
            "okuma": "2026-11-15",
            "dayanak": "Doğru dosyayı seçme tablosu proje bağlamı için CLAUDE.md'yi, izin ya da engel için settings.json permissions'ı, /ad ile çağrılan yetenek için skills/<ad>/SKILL.md'yi, alt ajan için agents/*.md'yi gösterir."
          }
        },
        {
          "id": "b04-d6-s10",
          "tur": "dogru-yanlis",
          "kart": 0,
          "soru": "Bir komutun her seferinde onay istemeden koşması için CLAUDE.md'ye 'bu komutu sormadan koş' yazmak yeterlidir.",
          "dogru": false,
          "ipucu": "İzinlerle kuralların aynı dosyada durup durmadığını düşün.",
          "aciklama": "İzinler settings.json'da durur. CLAUDE.md bağlamdır, onay penceresini kapatmaz.",
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
          "kart": 1,
          "soru": "Claude yeni bir yardımcı ajanın tanımını .claude/skills/ altına yazdı; ajan hiç çağrılamıyor. En olası kaynak?",
          "secenekler": [
            "Ajan önce CLAUDE.md'de anılmalı",
            "Tanım .claude/agents/ altında olmalı",
            "Ajana settings.json'da izin verilmeli"
          ],
          "dogru": 1,
          "ipucu": "Bizde ajan tanımlarının hangi klasörde durduğunu düşün.",
          "aciklama": "Bizde ajan tanımları .claude/agents/ altında durur; skills altına yazılan dosya ajan olarak tanınmaz.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "CLAUDE.md'ye göre ajanlar .claude/agents/ altındadır.",
            "soz": "Ajanlar `.claude/agents/` altında; bu dosyayı yüklemezler"
          }
        },
        {
          "id": "b04-d6-s9",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bir projede '/rapor' yazdın; Claude böyle bir komut tanımadığını söyledi. İlk neye baktırırsın?",
          "secenekler": [
            "settings.json'da /rapor'a izin var mı",
            "CLAUDE.md'de /rapor tanımlı mı",
            "skills/ altında rapor adlı skill var mı"
          ],
          "dogru": 2,
          "ipucu": "/ad ile çağrılan yeteneğin hangi klasörde durduğunu düşün.",
          "aciklama": "/ad ile çağrılan yetenek skills/<ad>/SKILL.md'de durur; o klasör yoksa komut tanınmaz. İzin ve CLAUDE.md komut tanımlamaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/claude-directory",
            "kopya": "claude-directory.md",
            "okuma": "2026-11-15",
            "dayanak": "Doğru dosyayı seçme tablosu proje bağlamı için CLAUDE.md'yi, izin ya da engel için settings.json permissions'ı, /ad ile çağrılan yetenek için skills/<ad>/SKILL.md'yi, alt ajan için agents/*.md'yi gösterir."
          }
        },
        {
          "id": "b04-d6-s3",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude yeni bir kanca betiği yazıp .claude/hooks/ içine koydu; kanca hiç koşmuyor. En olası eksik?",
          "secenekler": [
            "Kanca settings.json'a kaydedilmedi",
            "Betik CLAUDE.md'de anılmadı",
            "Betik agents/ altında olmalıydı"
          ],
          "dogru": 0,
          "ipucu": "Bir kancanın koşması için betiğin yanında neyin gerektiğini düşün.",
          "aciklama": "Kancanın ne zaman koşacağı settings.json'daki hooks bölümünde kayıtlıdır; .claude/hooks/ içindeki betik kaydı olmadan koşmaz.",
          "kaynak": {
            "adres": ".claude/settings.json",
            "okuma": "2026-11-24",
            "dayanak": ".claude/settings.json dosyasında kancalar hooks bölümünde kayıtlıdır.",
            "soz": "\"hooks\": { \"SessionStart\": ["
          }
        },
        {
          "id": "b04-d6-s8",
          "tur": "coktan",
          "kart": 3,
          "soru": "Yeni oturumun ilk cevabında Claude, sen söylemeden o anın saatini biliyor. Nereden?",
          "secenekler": [
            "Claude bilgisayarın saatini kendisi bilir",
            "Bir kanca saati bağlama bastı",
            "CLAUDE.md'de saat yazıyor"
          ],
          "dogru": 1,
          "ipucu": "Oturum açılınca kendiliğinden koşan parçayı düşün.",
          "aciklama": "Bizde kancalar ölçülmüş saati Claude'un bağlamına basar; acilis.py oturum açılınca koşar. Claude saati kendiliğinden bilmez.",
          "kaynak": {
            "adres": ".claude/hooks/acilis.py",
            "okuma": "2026-11-24",
            "dayanak": "Açılış kancası oturum açılınca bağlama ölçülmüş saati basar.",
            "soz": "Bağlama ölçülmüş saati basar"
          }
        }
      ]
    },
    {
      "id": "b04-d7",
      "baslik": "Bizim kayıt dosyaları: DURUM, KARARLAR, devir kartı",
      "hedefler": [
        "DURUM.md, KARARLAR.md ve devir kartında neyin durduğunu ayırt edebilir.",
        "Bir hatanın Düzeltme satırına mı, sayaca mı gittiğini ayırt edebilir.",
        "Düzeltme satırındaki konu önekini (prefix) ve 'kural o an:' parçasını okuyup anlatabilir.",
        "Hatadan doğan kuralın nereye gittiğini ve hangi kuralın hemen yazıldığını anlatabilir."
      ],
      "anlatim": [
        "İşe başlamadan proje-baglam skill'i, devir kartı ve DURUM.md okunur. Güncel durum kartta; görev alanı, öncelikler ve açık işler DURUM.md'de yaşar.",
        "Cevabı kullanıcıda olan ve bir işi bekleten soru, DURUM.md'nin Sorulacaklar bölümünde kendi satırını taşır. Cevaplanınca silinmez, arşive iner.",
        "KARARLAR.md karar ve düzeltme günlüğüdür. Yalnız ileriye hüküm taşıyan karar, tarih başlığı altında numaralı madde olarak girer.",
        "Maddede kullanıcının sözü kullanıcı: ile başlar ve tırnak içinde aynen yazılır. Claude'un yorumu ayrı bir 'Claude okuması:' parçasındadır.",
        "Kayıt dosyaları Edit ya da Write aracıyla yazılır. Kabuk komutuyla ya da Python gibi bir programla yazmayı koruma.py kancası durdurur.",
        "Kullanıcıya ulaşan ya da doğrulayıcının yakaladığı hata, maddenin altına tek satırlık Düzeltme olarak yazılır. Claude'un kendi fark ettiği hata yalnız sayaçta sayılır.",
        "Düzeltme satırı konu önekiyle başlar, örneğin 'yönlendirme:'. 'kural o an:' parçası hata anında konuyu kapsayan kural satırını ya da 'yok' yazar.",
        "Hatadan doğan kural o oturumda kural dosyasına yazılmaz; Düzeltme satırıyla geliştiricinin kural ekleme kapısına gider.",
        "Para, güvenlik sınırı, geri alınamaz zarar ve dışa gönderim kuralı ile kullanıcının kendi sözüyle verdiği kural beklemez, hemen yazılır."
      ],
      "terimler": [
        {
          "tr": "önek",
          "en": "prefix",
          "aciklama": "Düzeltme satırında konuyu gösteren baş parça, örneğin 'yönlendirme:'."
        }
      ],
      "sorular": [
        {
          "id": "b04-d7-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude'a 'site işi öne geçsin' dedin. Claude öncelik sırasını hangi dosyada güncellemeli?",
          "secenekler": [
            "Devir kartında",
            "DURUM.md'de",
            "CLAUDE.md'de"
          ],
          "dogru": 1,
          "ipucu": "Güncel durum ile öncelik ve açık işlerin ayrı yerlerde durduğunu düşün.",
          "aciklama": "Devir kartı güncel durumu taşır; görev alanı, öncelikler ve açık işler DURUM.md'de yaşar. CLAUDE.md'ye iş sırası yazılmaz.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "CLAUDE.md'ye göre güncel durum devir kartında, görev alanı, öncelikler ve açık işler DURUM'da yaşar.",
            "soz": "Güncel durum kartta, görev alanı, öncelikler ve açık işler DURUM'da"
          }
        },
        {
          "id": "b04-d7-s6",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Claude'un sana sorduğu ve cevabını beklediği bir soruyu arıyorsan, ilk bakılacak yer ___.",
          "secenekler": [
            "KARARLAR.md'nin son maddeleri",
            "devir kartının sonu",
            "DURUM.md'deki ayrı bölüm"
          ],
          "dogru": 2,
          "ipucu": "Cevabı sende olan sorular için ayrılan yeri düşün.",
          "aciklama": "Cevabı kullanıcıda olan ve bir işi bekleten her soru DURUM.md'nin Sorulacaklar bölümünde kendi satırını taşır; cevaplanınca arşive iner.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "CLAUDE.md'ye göre cevabı kullanıcıda olan ve bir işi bekleten her soru DURUM'un Sorulacaklar bölümünde kendi satırını taşır.",
            "soz": "kendi satırını taşır; cevaplanan soru arşiv bölümüne düşer, silinmez"
          }
        },
        {
          "id": "b04-d7-s2",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude bir sayfadaki bozuk bağlantıyı onardı, iş bitti. KARARLAR.md'ye madde yazılır mı?",
          "secenekler": [
            "Hayır; yalnız sonrasını bağlayan karar girer",
            "Evet; yapılan her iş madde olur",
            "Hayır; yalnız kullanıcının istediği iş girer"
          ],
          "dogru": 0,
          "ipucu": "Günlüğe neyin girdiğini, bitmiş bir işin sonrasını bağlayıp bağlamadığını düşün.",
          "aciklama": "KARARLAR.md'ye yalnız ileriye hüküm taşıyan karar girer; yapılıp biten iş kayıt mesajında kalır. Onarılan bağlantı sonrası için bir hüküm taşımaz.",
          "kaynak": {
            "adres": "KARARLAR.md",
            "okuma": "2026-11-24",
            "dayanak": "KARARLAR.md'nin baş açıklamasına göre günlüğe yalnız ileriye hüküm taşıyan karar girer, yapılıp biten iş girmez.",
            "soz": "Ne girer: yalnız ileriye hüküm taşıyan karar"
          }
        },
        {
          "id": "b04-d7-s8",
          "tur": "coktan",
          "kart": 3,
          "soru": "Bir KARARLAR maddesinde 'kullanıcı:' ile tırnakta, söylemediğin ama anlamı yakın bir cümle var. Doğru mu?",
          "secenekler": [
            "Doğru; anlam korunduysa yeniden yazılabilir",
            "Yanlış; tırnakta sözün aynısı durmalı",
            "Yanlış; kullanıcının sözü maddeye hiç girmez"
          ],
          "dogru": 1,
          "ipucu": "Kullanıcının sözü ile Claude'un yorumunun nasıl ayrıldığını düşün.",
          "aciklama": "Kullanıcının sözü tırnak içinde aynen yazılır; Claude'un anlattığı ayrı 'Claude okuması:' parçasına girer. Yakın anlamlı cümle tırnakta durursa söz ile yorum karışır.",
          "kaynak": {
            "adres": "KARARLAR.md",
            "okuma": "2026-11-24",
            "dayanak": "KARARLAR.md'ye göre maddede kullanıcının sözü kullanıcı: ile tırnak içinde aynen, yorum ise ayrı Claude okuması: parçasıyla yazılır.",
            "soz": "yorum ayrı `Claude okuması:` ile"
          }
        },
        {
          "id": "b04-d7-s7",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude KARARLAR.md'ye kabuk komutuyla bir satır eklemek istedi; komut koşmadan durduruldu. En olası kaynak?",
          "secenekler": [
            "KARARLAR.md her türlü yazmaya kapalı",
            "Sohbetin izin modu kabuğu kapatmış",
            "Kayıt dosyasına kabukla yazmayı durduran kanca"
          ],
          "dogru": 2,
          "ipucu": "Kayıt dosyalarının hangi yolla yazıldığını ve öteki yolu neyin durdurduğunu düşün.",
          "aciklama": "Kayıt dosyaları Edit ya da Write aracıyla yazılır; kabukla ya da programla yazmayı koruma.py kancası durdurur. Dosya kapalı değil, yol yanlıştır.",
          "kaynak": {
            "adres": ".claude/skills/kayit-yazma/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "kayit-yazma skill'inin ilk adımına göre kayıt dosyası Edit ya da Write aracıyla yazılır, kabukla ve yorumlayıcıyla yazmayı koruma.py durdurur.",
            "soz": "Edit ya da Write aracıyla yazılır. Kabukla ve yorumlayıcıyla yazmayı `koruma.py` durdurur."
          }
        },
        {
          "id": "b04-d7-s4",
          "tur": "coktan",
          "kart": 5,
          "soru": "Claude bir ayarın yerini yanlış söyledi; bulamadın ve ona yazdın. Hata nasıl kaydedilir?",
          "secenekler": [
            "Düzeltme satırıyla KARARLAR'a; hata sana ulaştı",
            "Yalnız Claude'un kendi sayacında sayılır",
            "Kaydedilmez; düzeltilmesi yeter"
          ],
          "dogru": 0,
          "ipucu": "Hatanın sana ulaşıp ulaşmadığını düşün.",
          "aciklama": "Kullanıcıya ulaşan hata KARARLAR'da madde altına Düzeltme satırı olarak yazılır; yanlış yönlendirme 'yönlendirme' önekini alır. Yalnız Claude'un kendi fark ettiği hata sayaçta sayılır.",
          "kaynak": {
            "adres": "KARARLAR.md",
            "okuma": "2026-11-24",
            "dayanak": "KARARLAR.md'ye göre Düzeltme satırı kullanıcıya ulaşan ya da kullanıcının ve doğrulayıcının yakaladığı hatada yazılır.",
            "soz": "Düzeltme yalnız kullanıcıya ulaşan ya da kullanıcının ve doğrulayıcının yakaladığı hatada"
          }
        },
        {
          "id": "b04-d7-s9",
          "tur": "bosluk",
          "kart": 6,
          "soru": "Bir Düzeltme'de 'kural o an:' CLAUDE.md'den bir satırı gösteriyor. Demek ki o satır hatadan önce ___.",
          "secenekler": [
            "yoktu, hata üzerine eklendi",
            "zaten vardı",
            "vardı ama hatayla bozuldu"
          ],
          "dogru": 1,
          "ipucu": "Parçanın hangi anı anlattığını düşün.",
          "aciklama": "'kural o an:' hatanın anında konuyu kapsayan kural satırını gösterir; kural yazılıyken çiğnenmiştir. Bu durumda yeni kural metni yerine dar bir önlem aranır.",
          "kaynak": {
            "adres": ".claude/skills/kayit-yazma/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "kayit-yazma skill'ine göre 'kural o an:' parçası hatanın anında konuyu kapsayan kural satırıdır ya da yok.",
            "soz": "parçası hatanın anında konuyu kapsayan kural satırıdır"
          }
        },
        {
          "id": "b04-d7-s5",
          "tur": "coktan",
          "kart": 7,
          "soru": "Bir biçim hatasını ikinci kez yakaladın; Claude 'CLAUDE.md'ye yeni kural ekleyeyim' diyor. Kurala göre?",
          "secenekler": [
            "Kural hemen CLAUDE.md'ye yazılır",
            "Üçüncü görülüşte kural yazılır, şimdi beklenir",
            "Satır KARARLAR'a girer; öneriyi geliştirici değerlendirir"
          ],
          "dogru": 2,
          "ipucu": "Hatadan doğan kuralın o oturumda mı, başka yerde mi ele alındığını düşün.",
          "aciklama": "Hatadan doğan kural o oturumda kural dosyasına yazılmaz; Düzeltme satırıyla geliştiricinin kural ekleme kapısına gider. Biçim hatası hemen yazılan kurallardan değildir.",
          "kaynak": {
            "adres": ".claude/skills/kayit-yazma/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "kayit-yazma skill'ine göre hatadan doğan kural o oturumda kural dosyasına yazılmaz, geliştiricinin kural ekleme kapısına gider.",
            "soz": "Hatadan doğan kural o oturumda kural dosyasına yazılmaz, geliştiricinin kural ekleme kapısına gider"
          }
        },
        {
          "id": "b04-d7-s10",
          "tur": "coktan",
          "kart": 8,
          "soru": "Claude, sormadan ücretli bir hizmete abone olmaya kalktı; doğrulayıcı yakaladı. Bundan doğan kural ne zaman yazılır?",
          "secenekler": [
            "Hemen, aynı oturumda",
            "Geliştiricinin bir sonraki inceleme turunda",
            "Aynı hata üçüncü kez görülünce"
          ],
          "dogru": 0,
          "ipucu": "Hangi konulardaki kuralın kapıyı beklemediğini düşün.",
          "aciklama": "Para, güvenlik sınırı, geri alınamaz zarar ve dışa gönderim kuralı hemen yazılır; konu zaten yazılıysa yeni metin yerine dar bir önlem eklenir.",
          "kaynak": {
            "adres": ".claude/skills/kayit-yazma/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "kayit-yazma skill'ine göre para, güvenlik sınırı, geri alınamaz zarar ve dışa gönderim kuralı geliştiricinin kapısını beklemeden hemen yazılır.",
            "soz": "para, güvenlik sınırı, geri alınamaz zarar ve dışa gönderim kuralı hemen yazılır"
          }
        }
      ]
    }
  ]
});
