// icerik/birim-05.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b05",
  "sira": 5,
  "baslik": "Skill",
  "amac": "Skill'in ne olduğunu, ne zaman açıldığını, bağlamda ne kadar yer tuttuğunu, CLAUDE.md ve kancadan farkını öğrenirsin; bir skill beklediğin gibi çalışmayınca kaynağını bulup Claude'dan doğru düzeltmeyi istersin.",
  "dersler": [
    {
      "id": "b05-d1",
      "baslik": "Skill nedir",
      "hedefler": [
        "Skill'in bir işi Claude'a bir kez öğreten talimat dosyası olduğunu anlatabilir.",
        "Bir talimatın skill'e mi, CLAUDE.md'ye mi, sohbete mi gideceğini ayırt edebilir.",
        "Bizim klasörde hangi işte hangi skill'in okunduğunu ayırt edebilir."
      ],
      "anlatim": [
        "Skill, Claude'a bir işi bir kez öğreten talimat dosyasıdır. İş o konuya girince Claude onu sen istemeden uygular.",
        "Claude'a aynı şeyi tekrar tekrar anlatıyorsan o bir skill adayıdır. Bizim sistem-metni skill'i ekler: tek seferlik iş skill olmaz.",
        "Skill belirli bir işe özgü bilgi içindir, örneğin commit mesajı biçimi. Her zaman geçerli kural CLAUDE.md'ye yazılır; o her oturumda yüklenir.",
        "Bizim CLAUDE.md her işe bir skill eşler: sistem metni (CLAUDE.md, skill, ajan dosyası) değişirken sistem-metni, kayıt satırı (KARARLAR maddesi gibi) yazılırken kayit-yazma okunur.",
        "Skill'i adıyla da açabilirsin: istem kutusuna / yazıp listeden seçersin, eğik çizgi komutu (slash command) gibi. Yazmazsan Claude isteğine uyanı kendisi seçer."
      ],
      "terimler": [
        {
          "tr": "eğik çizgi komutu",
          "en": "slash command",
          "aciklama": "İstem kutusuna / ile başlayarak yazdığın komut; bir skill'i adıyla açmak da böyle olur."
        }
      ],
      "sorular": [
        {
          "id": "b05-d1-s1",
          "tur": "coktan",
          "kart": 2,
          "soru": "'Cevaplar hep Türkçe olsun' kuralını skill'e yazdırdın; bazı cevaplar yine İngilizce. Kaynağı ne?",
          "secenekler": [
            "Claude skill'leri yalnız ilk mesajda okuyor",
            "Skill yalnız ilgili işte açılıyor",
            "Skill'deki kural ancak sen adını yazınca geçerli"
          ],
          "dogru": 1,
          "ipucu": "Skill'in hangi anlarda devrede olduğunu, bu kuralın hangi anlarda gerektiğini düşün.",
          "aciklama": "Skill yalnız işi ona uyduğunda açılır; her cevapta geçerli olması gereken kural CLAUDE.md'ye yazılır, çünkü o her oturumda yüklenir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-agent-skills/skills-vs-other-claude-code-features",
            "kopya": "ders-skills-04-skills-vs-other-features.md",
            "okuma": "2026-11-15",
            "dayanak": "CLAUDE.md her konuşmaya yüklenir ve her zaman geçerli proje kuralları için en iyisidir; skill'ler isteğe göre yüklenir ve işe özgü uzmanlık için en iyisidir."
          }
        },
        {
          "id": "b05-d1-s2",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude raporlarını hep aynı başlıklarla yazıyor; sen bunu bu oturumda hiç istemedin. En olası kaynak ne?",
          "secenekler": [
            "Rapor işine uyan bir skill",
            "Modelin rapor alışkanlığı; değişmez",
            "Claude'un geçen haftaki raporları hatırlaması"
          ],
          "dogru": 0,
          "ipucu": "Bu oturumda söylenmemiş bir talimatın nerede durabileceğini düşün.",
          "aciklama": "Skill bir kez yazılır, iş onun konusuna girince Claude onu sen istemeden uygular. Claude önceki sohbetleri hatırlamaz, model de değişmez değildir; tekrar eden biçim bir dosyadan gelir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/skills",
            "kopya": "ders-101-10-skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Skill, Claude'a bir işi bir kez öğreten bir markdown dosyasıdır ve Claude bu bilgiyi ilgili olduğu her durumda kendiliğinden uygular."
          }
        },
        {
          "id": "b05-d1-s5",
          "tur": "coktan",
          "kart": 4,
          "soru": "Sabah özeti skill'ini, Claude'un seçmesini beklemeden hemen çalıştırmak istiyorsun. Ne yaparsın?",
          "secenekler": [
            "Claude'a 'sabah özetini hazırla' yazarsın",
            "Oturumu kapatıp yeniden açarsın",
            "Eğik çizgiyle skill listesini açıp seçersin"
          ],
          "dogru": 2,
          "ipucu": "Eğik çizginin istem kutusunda ne işe yaradığını düşün.",
          "aciklama": "Skill'i / ile listeden kendin açarsın. 'Özeti hazırla' yazmak isteği açıklamalarla karşılaştırıp seçimi yine Claude'a bırakır; oturumu yeniden açmak da skill'i çalıştırmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir skill'i doğrudan açmak için istem kutusuna / yazarsın ya da + düğmesine basıp Slash commands'i seçersin; listede proje skill'leri de vardır."
          }
        },
        {
          "id": "b05-d1-s6",
          "tur": "coktan",
          "kart": 1,
          "soru": "Eski raporları bu hafta bir kez yeni klasöre taşıtacaksın. Claude 'talimat uzun, skill yapalım' diyor. Ne dersin?",
          "secenekler": [
            "Evet; uzun talimat skill'de daha iyi işler",
            "Hayır; sohbette vermek yeter",
            "Evet; ileride benzeri gelirse hazır olur",
            "Hayır; CLAUDE.md'ye yazılsın, her oturum görsün"
          ],
          "dogru": 1,
          "ipucu": "Skill'in hangi zahmeti ortadan kaldırdığını ve bu işin kaç kez yapılacağını düşün.",
          "aciklama": "Skill aynı şeyi tekrar tekrar anlatmamak içindir; bizim kural tek seferlik işi skill yapmaz. Her oturum gerekmeyen bir talimat CLAUDE.md'ye de girmez.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Skill yazarken bölümü tek seferlik işin skill olmayacağını söyler.",
            "soz": "Tek seferlik iş skill olmaz"
          }
        },
        {
          "id": "b05-d1-s7",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Claude bir ajan dosyasına yeni talimat ekliyor, hiçbir skill okumadı. Önce ___ skill'ini okumasını istersin.",
          "secenekler": [
            "ajan-gorevi",
            "sistem-metni",
            "kayit-yazma",
            "ajan-kimligi"
          ],
          "dogru": 1,
          "ipucu": "Ajan dosyasının hangi tür metin sayıldığını düşün.",
          "aciklama": "Ajan dosyası sistem metnidir; değişirken sistem-metni okunur. ajan-gorevi bir ajana iş verirken, kayit-yazma kayıt satırı yazılırken açılır; ajan-kimligi ise ajanların ortak kuralıdır, değişiklik yöntemi değil.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Satır, sistem metni değişirken sistem-metni, ajana iş verirken ajan-gorevi, kayıt satırı yazılırken kayit-yazma skill'inin okunacağını söyler; sistem-metni'nin açıklaması ajan dosyasını sistem metni sayar.",
            "soz": "sistem metni değişirken `sistem-metni`; ajana iş verirken `ajan-gorevi`"
          }
        },
        {
          "id": "b05-d1-s8",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude KARARLAR'a bir madde yazdı; numarası bir öncekinin aynısı çıktı. Claude'a ilk ne sorarsın?",
          "secenekler": [
            "CLAUDE.md'yi yeniden yükledin mi?",
            "Yazmadan önce sistem-metni'ni okudun mu?",
            "Yazmadan önce kayit-yazma'yı okudun mu?"
          ],
          "dogru": 2,
          "ipucu": "KARARLAR maddesinin hangi tür satır olduğunu düşün.",
          "aciklama": "KARARLAR maddesi bir kayıt satırıdır; numarayı sonuncunun bir fazlası diye ölçmek kayit-yazma'nın adımıdır. sistem-metni kural metni içindir, CLAUDE.md zaten her oturumda yüklüdür.",
          "kaynak": {
            "adres": ".claude/skills/kayit-yazma/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Açıklama skill'in KARARLAR maddesi yazılırken açıldığını, adım da maddenin numarasının sonuncunun bir fazlası olarak ölçüldüğünü söyler.",
            "soz": "Numara sonuncunun bir fazlası"
          }
        }
      ]
    },
    {
      "id": "b05-d2",
      "baslik": "SKILL.md'nin iskeleti",
      "hedefler": [
        "Bir proje skill'inin nerede durduğunu ve adının nereden geldiğini anlatabilir.",
        "Claude'un bir skill'i açıklamasına bakarak seçtiğini anlatabilir.",
        "Skill yanlış adla görünür ya da yanlış işte açılırsa kaynağını ayırt edebilir."
      ],
      "anlatim": [
        "Proje skill'i kendi klasöründe, SKILL.md dosyasında durur. En üstte iki --- çizgisi arasında ön bilgi (frontmatter) vardır, altında talimatlar.",
        "Ön bilgideki name alanı skill'in / listesindeki adıdır. Yazılmazsa skill'in durduğu klasörün adı kullanılır.",
        "Açıklama alanı (description) skill'in ne yaptığını ve ne zaman kullanılacağını söyler.",
        "Oturum başında Claude skill'lerin yalnız adını ve açıklamasını bilir. İsteğini açıklamalarla karşılaştırır, uyan skill'in tamamını o zaman okur."
      ],
      "terimler": [
        {
          "tr": "ön bilgi",
          "en": "frontmatter",
          "aciklama": "SKILL.md'nin en üstünde iki --- çizgisi arasındaki alanlar; skill'in adı ve açıklaması burada yazılır."
        },
        {
          "tr": "açıklama alanı",
          "en": "description",
          "aciklama": "Skill'in ne yaptığını ve ne zaman kullanılacağını söyleyen alan; Claude skill'i buna bakarak seçer."
        }
      ],
      "sorular": [
        {
          "id": "b05-d2-s2",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Rapor isterken Claude, kayıt satırı için kurulmuş bir skill'i açtı. En olası neden: o skill'in ___ isteğine uydu.",
          "secenekler": [
            "talimatlarındaki bir sözcük",
            "açıklaması",
            "klasörünün adı"
          ],
          "dogru": 1,
          "ipucu": "Claude bir skill'i seçmeden önce onun hangi parçasını görüyor?",
          "aciklama": "Claude isteğini skill açıklamalarıyla karşılaştırır ve uyanı açar; talimatlar açılmadan okunmaz. Yanlış skill açılıyorsa önce açıklamasına bakılır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-agent-skills/creating-your-first-skill",
            "kopya": "ders-skills-02-creating-first-skill.md",
            "okuma": "2026-11-15",
            "dayanak": "İstek gönderdiğinde Claude mesajını mevcut bütün skill'lerin açıklamalarıyla karşılaştırır ve eşleşme bulunca SKILL.md dosyasının tamamını okur."
          }
        },
        {
          "id": "b05-d2-s6",
          "tur": "coktan",
          "kart": 1,
          "soru": "Claude skill'i 'r1' klasörüne koydu; / listesinde 'rapor' değil 'r1' görünüyor. Kaynağı ne?",
          "secenekler": [
            "Liste hep klasörün adını gösterir",
            "Açıklama isteğe uymuyor",
            "Ön bilgide name alanı yok"
          ],
          "dogru": 2,
          "ipucu": "Listedeki adın hangi iki yerden gelebileceğini düşün.",
          "aciklama": "name alanı yazılmazsa klasörün adı kullanılır; name yazılsaydı listede o görünürdü. Açıklama adı değil, skill'in ne zaman açılacağını belirler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "name alanı / menüsünde görünen komut adıdır ve yazılmazsa klasörün adı kullanılır."
          }
        },
        {
          "id": "b05-d2-s7",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude yeni skill'in açıklamasına yalnız 'KARARLAR maddesi ve DURUM satırı yazar' yazdı. Ne eksik?",
          "secenekler": [
            "Ne zaman açılıp ne zaman açılmayacağı",
            "Skill'in kaç adımdan oluştuğu",
            "Hiçbir şey; ne yaptığını söylüyor"
          ],
          "dogru": 0,
          "ipucu": "İyi bir açıklamanın cevaplaması gereken iki soruyu düşün.",
          "aciklama": "Açıklama skill'in ne yaptığını ve ne zaman kullanılacağını söyler; yalnız işi sayan açıklama Claude'a skill'i hangi istekte açacağını söylemez. Adım sayısı seçimi etkilemez.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-agent-skills/configuration-and-multi-file-skills",
            "kopya": "ders-skills-03-configuration-multi-file.md",
            "okuma": "2026-11-15",
            "dayanak": "İyi bir açıklama iki soruyu yanıtlar: skill ne yapar ve Claude onu ne zaman kullanmalı?"
          }
        },
        {
          "id": "b05-d2-s9",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude bir skill'in açıklamasını kısalttı, talimatlarına dokunmadı. Bundan sonra ne değişebilir?",
          "secenekler": [
            "Skill'in / listesindeki adı",
            "Hiçbir şey; açıklamayı yalnız insanlar okur",
            "Skill'in hangi isteklerde kendiliğinden açılacağı"
          ],
          "dogru": 2,
          "ipucu": "Claude'un bir skill'i seçerken neye baktığını düşün.",
          "aciklama": "Claude isteğini açıklamalarla karşılaştırıp uyan skill'i açar; açıklama değişince skill başka isteklerde açılabilir ya da açılmayabilir. Listedeki adı name alanı verir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-agent-skills/creating-your-first-skill",
            "kopya": "ders-skills-02-creating-first-skill.md",
            "okuma": "2026-11-15",
            "dayanak": "İstek gönderdiğinde Claude mesajını mevcut bütün skill'lerin açıklamalarıyla karşılaştırır ve eşleşme bulunca SKILL.md dosyasının tamamını okur."
          }
        },
        {
          "id": "b05-d2-s10",
          "tur": "coktan",
          "kart": 0,
          "soru": "/ listesinde gördüğün bir proje skill'inin talimatını değiştirmek istiyorsun. Claude'dan hangisini düzeltmesini istersin?",
          "secenekler": [
            "O skill'in klasöründeki SKILL.md dosyasını",
            "CLAUDE.md'deki skill satırını",
            "Masaüstü uygulamasının ayarlarını"
          ],
          "dogru": 0,
          "ipucu": "Proje skill'inin talimatlarının hangi dosyada yazdığını düşün.",
          "aciklama": "Proje skill'inin talimatları kendi klasöründeki SKILL.md'de, ön bilginin altındadır. CLAUDE.md'deki satır yalnız hangi işte hangi skill'in okunacağını söyler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Proje skill'leri .claude/skills/<skill-adı>/SKILL.md yolunda durur ve o depodaki oturumlarda yüklenir."
          }
        },
        {
          "id": "b05-d2-s12",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Claude yeni talimatı SKILL.md'de iki --- çizgisinin arasına yazdı. Skill açılıyor ama talimat uygulanmıyor; o satırlar ___ sayılıyor.",
          "secenekler": [
            "ön bilgi; talimat değil",
            "yalnız / ile açılınca geçen talimat",
            "eski sürümden kalan metin"
          ],
          "dogru": 0,
          "ipucu": "İki çizgi arasının dosyada hangi işe ayrıldığını düşün.",
          "aciklama": "İki --- çizgisinin arası ön bilgidir (ad, açıklama gibi alanlar); Claude'un uyacağı talimatlar ikinci çizginin altına yazılır. Talimatı oraya taşıtmak gerekir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-agent-skills/creating-your-first-skill",
            "kopya": "ders-skills-02-creating-first-skill.md",
            "okuma": "2026-11-15",
            "dayanak": "Önce skills klasöründe skill için bir klasör açılır, sonra içine SKILL.md konur; ön bilgi çizgiler arasında durur, ikinci çizgilerin altındaki her şey Claude'un uyacağı talimattır."
          }
        }
      ]
    },
    {
      "id": "b05-d3",
      "baslik": "Öteki ön bilgi alanları",
      "hedefler": [
        "Bir skill'in beklenmedik davranışını hangi ön bilgi alanının yaptığını ayırt edebilir.",
        "Yan etkili bir skill'i yalnız senin açabileceğin hale getirmeyi anlatabilir.",
        "Ajan dosyasındaki skills alanının skill'i ajana baştan yüklediğini anlatabilir."
      ],
      "anlatim": [
        "disable-model-invocation: true yazılan skill'i Claude kendi başına açamaz; yalnız sen adını yazınca açılır.",
        "Bu alan yayına alma, mesaj gönderme gibi yan etkili işler içindir. Böyle bir skill'in açıklaması da Claude'un bağlamına girmez.",
        "allowed-tools, skill'in açıldığı turda listelenen araçlara önceden onay (pre-approve) verir. Onay sen yeni mesaj gönderince biter.",
        "allowed-tools öteki araçları yasaklamaz: listede olmayan araç her zamanki izinle sorulur.",
        "context: fork skill'i ayrı bir alt ajanda (subagent) koşturur. O ajan senin konuşma geçmişini görmez.",
        "Bu yüzden fork, açık bir görev veren skill'de anlamlıdır. Yalnız kılavuz bilgisi alan ajan anlamlı bir sonuç döndürmez.",
        "Bizim ajan dosyalarında (ör. scout.md) skills alanının altında ajan-kimligi yazar. Bu, o skill'in tamamını ajan açılırken beklemeden yükler."
      ],
      "terimler": [
        {
          "tr": "önceden onay",
          "en": "pre-approve",
          "aciklama": "Bir aracın kullanımda izin sorulmadan çalışmasına önceden izin vermek; allowed-tools bunu skill'in açıldığı tur için yapar."
        },
        {
          "tr": "alt ajan",
          "en": "subagent",
          "aciklama": "Kendi ayrı bağlamında çalışıp sonucu ana konuşmaya döndüren yardımcı Claude."
        }
      ],
      "sorular": [
        {
          "id": "b05-d3-s2",
          "tur": "coktan",
          "kart": 0,
          "soru": "Siteyi yayına alan skill'i Claude 'kod hazır görünüyor' deyip kendisi açtı. Bir daha olmasın diye Claude'a ne yazdırırsın?",
          "secenekler": [
            "Talimatların başına 'önce bana sor' adımı",
            "Açıklamaya 'bunu kendin açma' cümlesi",
            "Ön bilgiye, yalnız senin açacağın alan"
          ],
          "dogru": 2,
          "ipucu": "Hangi yazının skill açılmadan önce, Claude'un yorumuna kalmadan iş gördüğünü düşün.",
          "aciklama": "disable-model-invocation: true ile Claude skill'i kendi başına açamaz, yalnız sen açarsın. Talimattaki adım skill açıldıktan sonra okunur; açıklamadaki cümle ise Claude'un yorumuna kalır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "disable-model-invocation: true ile Claude skill'i kendi başına açamaz; bu, yan etkisi olan ya da zamanlamasını senin belirlemek istediğin işler içindir, çünkü kod hazır göründü diye Claude'un yayına almaya karar vermesini istemezsin."
          }
        },
        {
          "id": "b05-d3-s3",
          "tur": "coktan",
          "kart": 3,
          "soru": "allowed-tools'ta yalnız Bash var. Claude'un dosyaya yazamayacağını sanıyordun; izin isteyip yazdı. Bu ne demek?",
          "secenekler": [
            "Skill bozuk; Write kapalı olmalıydı",
            "Liste yasak koymaz; öteki araç izinle çalışır",
            "Claude listeyi atladı"
          ],
          "dogru": 1,
          "ipucu": "Alanın araçları kapatıp kapatmadığını düşün.",
          "aciklama": "allowed-tools yalnız listelenen araçlara önceden onay verir; öteki araçlar yasaklanmaz, her zamanki gibi izinle sorulur. Listede olan Bash ise sormadan koşar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "allowed-tools hangi araçların kullanılabileceğini kısıtlamaz: her araç çağrılabilir kalır ve listede olmayan araçları izin ayarların yönetir."
          }
        },
        {
          "id": "b05-d3-s4",
          "tur": "coktan",
          "kart": 2,
          "soru": "Skill açıkken Bash sormadan koştu; yeni mesaj yazınca aynı komut izin istedi. Neden?",
          "secenekler": [
            "Onay her komutta bir kez geçer",
            "Önceden onay yeni mesajınla bitti",
            "Skill yeni mesajla bağlamdan çıktı"
          ],
          "dogru": 1,
          "ipucu": "Önceden onayın neye bağlı olduğunu düşün.",
          "aciklama": "allowed-tools onayı yalnız skill'in açıldığı tur içindir; sen bir sonraki mesajını gönderince biter. Açılan skill ise bağlamdan çıkmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Onay, sen bir sonraki mesajını gönderince sona erer; skill'i yeniden açmak onu o tur için yeniden uygular."
          }
        },
        {
          "id": "b05-d3-s5",
          "tur": "coktan",
          "kart": 6,
          "soru": "Alt ajan, görevine yazmadığın ortak kurallara (kişisel veri yazmamak gibi) uyuyor. Kaynağı ne?",
          "secenekler": [
            "Ajan CLAUDE.md'yi ana oturum gibi yüklüyor",
            "Ajan dosyası ajan-kimligi'ni yüklüyor",
            "Alt ajan ana sohbeti baştan okuyor"
          ],
          "dogru": 1,
          "ipucu": "Ajan dosyasındaki skills alanının ne zaman iş gördüğünü düşün.",
          "aciklama": "Ajan dosyasındaki skills alanı ajan-kimligi'nin tamamını ajan açılırken yükler; ortak kurallar oradadır. Ajanlar CLAUDE.md'yi yüklemez, ana sohbeti de görmez.",
          "kaynak": {
            "adres": ".claude/skills/ajan-kimligi/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Açıklama, ajan kimliği skill'inin ajan dosyalarının skills alanıyla ajana baştan yüklendiğini ve ana oturumun kurallarının CLAUDE.md'de olduğunu söyler.",
            "soz": "Ajan dosyalarının skills alanıyla ajana baştan yüklenir"
          }
        },
        {
          "id": "b05-d3-s6",
          "tur": "bosluk",
          "kart": 4,
          "soru": "context: fork olan skill, az önce verdiğiniz karardan habersiz döndü. Çünkü skill ___ koştu.",
          "secenekler": [
            "kendi bağlamı olan başka bir ajanda",
            "eski bir sürümüyle",
            "sıkışmış bir bağlamda"
          ],
          "dogru": 0,
          "ipucu": "Skill'in nerede koştuğunu ve oranın neyi bildiğini düşün.",
          "aciklama": "context: fork skill'i ayrı bir alt ajanda koşturur; o ajan konuşma geçmişini görmez. Bu yüzden talimatın kendi başına anlaşılır olması gerekir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Alt ajan konuşma geçmişini görmez, bu yüzden skill'in talimatları kendi başına anlaşılır olmalıdır."
          }
        },
        {
          "id": "b05-d3-s7",
          "tur": "coktan",
          "kart": 5,
          "soru": "Claude 'yazım kuralları skill'ine context: fork ekleyelim' diyor. Ne dersin?",
          "secenekler": [
            "Evet; her skill ayrı ajanda iyi koşar",
            "Hayır; görevsiz kuralla ajan sonuç üretmez",
            "Hayır; fork yalnız allowed-tools ile çalışır"
          ],
          "dogru": 1,
          "ipucu": "Ayrı ajanın eline yapacak bir iş geçip geçmediğini düşün.",
          "aciklama": "fork yalnız açık bir görev veren skill'de anlamlıdır; yalnız kural alan ajan anlamlı bir sonuç döndürmez. fork için allowed-tools gerekmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "context: fork yalnız açık talimat taşıyan skill'lerde anlamlıdır; görevsiz kılavuz alan alt ajan anlamlı bir çıktı döndürmez."
          }
        },
        {
          "id": "b05-d3-s8",
          "tur": "coktan",
          "kart": 1,
          "soru": "Claude 'böyle bir skill bilmiyorum' diyor ama skill / listesinde görünüyor. Kaynağı ne?",
          "secenekler": [
            "SKILL.md kendi klasöründe değil",
            "Bağlam dolunca skill silinmiş",
            "disable-model-invocation: true"
          ],
          "dogru": 2,
          "ipucu": "Hangi skill'in açıklamasının Claude'a hiç gösterilmediğini düşün.",
          "aciklama": "disable-model-invocation: true olan skill'in açıklaması bağlama girmez, Claude onu bilmez; sen yine / ile açabilirsin. Yapı bozuk olsaydı listede de görünmezdi.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "disable-model-invocation: true olan skill'de açıklama bağlamda yer almaz, tam skill açıldığında yüklenir."
          }
        }
      ]
    },
    {
      "id": "b05-d4",
      "baslik": "Skill'in bağlam maliyeti",
      "hedefler": [
        "Skill açıklamasının her oturumda, gövdesinin yalnız açılınca yer tuttuğunu anlatabilir.",
        "Sıkıştırmadan sonra bir skill'in sonu atlanırsa ne yapacağını anlatabilir.",
        "Bizim klasördeki skill boyut kuralına göre bir eklemenin nasıl gireceğini anlatabilir."
      ],
      "anlatim": [
        "Bağlam penceresi (context window) Claude'un oturumda bildiği her şeyi tutar. Oturum başında buraya skill'lerin yalnız adı ve açıklaması girer.",
        "Skill'in gövdesi açılınca bağlama girer ve oturum boyunca orada kalır. Her satırı sonraki isteklerde de yer kaplar.",
        "Bağlam dolunca konuşma özetlenir; buna sıkıştırma (compaction) denir. Açılmış büyük skill'ler sonra kırpılarak geri eklenir; kırpma dosyanın başını korur.",
        "Sıkıştırmadan sonra bir skill'in yalnız başı kalmış olabilir. Skill'i yeniden açmak tam içeriğini geri getirir.",
        "Gövdeyi kısa tut: resmi belge SKILL.md'yi 500 satırın altında tutmayı, ayrıntılı başvuru bilgisini ayrı dosyaya koymayı önerir.",
        "Bizde SKILL.md tavanı 10.000 bayttır. Tavanın %90'ını geçmiş dosyaya ekleme, en az eklenen kadar bayt çıkarılır ya da taşınırsa girer."
      ],
      "terimler": [
        {
          "tr": "bağlam penceresi",
          "en": "context window",
          "aciklama": "Claude'un bir oturumda bildiği her şeyin tutulduğu alan: talimatlar, okunan dosyalar, konuşma."
        },
        {
          "tr": "sıkıştırma",
          "en": "compaction",
          "aciklama": "Bağlam dolunca konuşmanın özetlenip yer açılması."
        }
      ],
      "sorular": [
        {
          "id": "b05-d4-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude 'skill çok, bağlam dolmasın, beşini silelim' diyor; hiçbiri açılmadı. Ne dersin?",
          "secenekler": [
            "Silelim; her skill her oturum tam yüklenir",
            "Gerek yok; her biri yalnız açıklamasıyla yer tutar",
            "Hepsini tek skill'de birleştirelim"
          ],
          "dogru": 1,
          "ipucu": "Açılmamış bir skill'in bağlamda ne kadar yer tuttuğunu düşün.",
          "aciklama": "Oturum başında yalnız adlar ve açıklamalar yüklenir, açılmayan skill'in maliyeti düşüktür. Hepsini birleştirmek açılınca daha büyük bir gövde getirir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Skill açıklamaları oturum başında, tam içerik ise kullanıldığında yüklenir ve skill'in bağlam maliyeti kullanılana kadar düşüktür."
          }
        },
        {
          "id": "b05-d4-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Sabah 600 satırlık skill açıldı; öğleden sonra bağlam beklenenden dolu. Bir neden?",
          "secenekler": [
            "Bağlam yalnız senin mesajlarınla doluyor",
            "Skill her istekte baştan yeniden ekleniyor",
            "Açılan gövde hâlâ her istekte yer tutuyor"
          ],
          "dogru": 2,
          "ipucu": "Açılmış bir skill'in sonraki isteklerde nerede durduğunu düşün.",
          "aciklama": "Açılan skill konuşmaya bir kez eklenir ve oturum boyunca kalır; her satırı sonraki isteklerde de yer tutar. Bu yüzden gövdeyi kısa tutmak yer kazandırır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Skill açıldıktan sonra içeriği turlar boyunca bağlamda kalır, bu yüzden her satırı tekrar eden bir token maliyetidir."
          }
        },
        {
          "id": "b05-d4-s3",
          "tur": "coktan",
          "kart": 3,
          "soru": "Uzun oturumda sıkıştırmadan sonra Claude bir skill'in son adımlarını atlamaya başladı. İlk ne yaparsın?",
          "secenekler": [
            "Skill dosyasının sonunu düzelttirirsin; bozulmuş",
            "O skill'i bir kez daha açtırırsın",
            "Skill'in açıklamasını uzattırırsın"
          ],
          "dogru": 1,
          "ipucu": "Sıkıştırmadan sonra skill'in hangi kısmının kalmış olabileceğini düşün.",
          "aciklama": "Sıkıştırmadan sonra skill'in yalnız başı kalmış olabilir; dosya bozulmamıştır. Skill'i yeniden açmak tam içeriğini geri getirir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Konuşma sıkıştırıldıysa tam içeriği geri getirmek için skill'i yeniden aç; sıkıştırmadan sonra açılmış skill'in yalnız başı tutulabilir."
          }
        },
        {
          "id": "b05-d4-s4",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude skill'e, uzun oturumlarda da geçerli kalması gereken bir kural ekleyecek. Nereye yazmasını istersin?",
          "secenekler": [
            "Dosyanın üst kısmına",
            "Dosyanın sonuna, son söz olarak",
            "Ayrı bir dosyaya, bağlantıyla"
          ],
          "dogru": 0,
          "ipucu": "Kırpma olursa dosyanın hangi kısmının kaldığını düşün.",
          "aciklama": "Sıkıştırmada büyük skill kırpılır ve dosyanın başı kalır; önemli kural üstte olursa kırpmadan sağ çıkar. Sondaki kural ilk düşer, ayrı dosya ise yalnız gerekince okunur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Kırpma dosyanın başını korur, bu yüzden en önemli talimatları SKILL.md'nin üst kısmına koy."
          }
        },
        {
          "id": "b05-d4-s5",
          "tur": "bosluk",
          "kart": 5,
          "soru": "Claude 9.500 baytlık skill'e 300 bayt kural eklemek istiyor. Bizim kurala göre bu ekleme ___ girer.",
          "secenekler": [
            "doğrudan; 10.000'in altında kalıyor",
            "en az 300 bayt yer açılırsa",
            "asla; tavana çok yakın"
          ],
          "dogru": 1,
          "ipucu": "9.500 baytın tavanın yüzde kaçı olduğunu hesapla.",
          "aciklama": "9.500 bayt 10.000'in %90'ını geçer; böyle dosyaya ekleme ancak en az eklenen kadar bayt çıkarılarak ya da taşınarak girer. Ekleme yasak değildir, yeri açılır.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Kontrol listesinin büyüme maddesi SKILL.md tavanını 10.000 bayt sayar; tavanın %90'ı ve üstündeki dosyaya eklemenin ancak en az eklenen kadar bayt çıkarılarak ya da taşınarak girdiğini söyler.",
            "soz": "ancak en az eklenen kadar bayt çıkarılarak ya da taşınarak girer"
          }
        },
        {
          "id": "b05-d4-s7",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude bir skill'e 2.000 satırlık bir API belgesini olduğu gibi yapıştırmayı öneriyor. Ne istersin?",
          "secenekler": [
            "Belgenin tamamı SKILL.md'ye girsin",
            "Ayrı dosyada dursun, skill bağlantı versin",
            "Kısa özetini koysun, gerisini atsın"
          ],
          "dogru": 1,
          "ipucu": "Büyük başvuru bilgisinin her açılışta bağlama girmesi gerekip gerekmediğini düşün.",
          "aciklama": "Ayrı dosya yalnız gerektiğinde okunur, SKILL.md kısa kalır ve ayrıntı kaybolmaz. Gerisini atmak gereken bilgiyi yok eder.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/skills",
            "kopya": "skills.md",
            "okuma": "2026-11-15",
            "dayanak": "Yardımcı dosyalar SKILL.md'yi özde tutar ve ayrıntılı başvuru belgesi yalnız gerektiğinde yüklenir; SKILL.md'yi 500 satırın altında tut, ayrıntıyı ayrı dosyalara taşı."
          }
        }
      ]
    },
    {
      "id": "b05-d5",
      "baslik": "Skill mi, CLAUDE.md mi, kanca mı",
      "hedefler": [
        "Bir duruma göre CLAUDE.md, skill, kanca ve MCP arasından doğru özelliği ayırt edebilir.",
        "Metne yazılan yasağın rica, kancanın garanti olduğunu anlatabilir.",
        "Bizim klasörde kanca gibi mekanizmanın hangi kurallara yazıldığını anlatabilir."
      ],
      "anlatim": [
        "Kanca (hook) bir olay olunca Claude karar vermeden koşar. Skill'deki talimatı ise Claude yorumlar; sonuç işten işe değişebilir.",
        "Tetikler (trigger): aynı yöntemi üçüncü kez yapıştırıyorsan skill; iş istisnasız her seferinde olmalıysa kanca; Claude'un göremediği veri gerekirse MCP. Her oturumda gereken kural CLAUDE.md'ye.",
        "CLAUDE.md'deki ya da skill'deki 'şunu asla yapma' cümlesi bir ricadır, garanti değil. Garanti, işi durduran bir kancadır.",
        "Bizim sistem-metni skill'i sorar: her oturum mu gerekli, tek işte mi? Tek işteyse bilgi o işin skill'ine gider, CLAUDE.md'de tek satır adres kalır.",
        "Bizde mekanizma (kanca, denetim kontrolü) yalnız geri alınamaz zarar, güvenlik sınırı, para, dışa gönderim ve sana ulaşıp tekrar eden hata kuralına yazılır. Biçim kuralına yazılmaz."
      ],
      "terimler": [
        {
          "tr": "kanca",
          "en": "hook",
          "aciklama": "Belirli bir olay olunca Claude karar vermeden koşan otomatik iş."
        },
        {
          "tr": "tetik",
          "en": "trigger",
          "aciklama": "Bir özelliği eklemenin zamanının geldiğini gösteren durum; örneğin aynı yöntemi üçüncü kez yapıştırmak."
        }
      ],
      "sorular": [
        {
          "id": "b05-d5-s1",
          "tur": "eslestir",
          "kart": 1,
          "soru": "Durumu, ekleteceğin özellikle eşleştir.",
          "ciftler": [
            [
              "Aynı kontrol listesini üçüncü kez yapıştırıyorsun",
              "Skill"
            ],
            [
              "Claude'un göremediği bir sekmeden veri kopyalıyorsun",
              "MCP bağlantısı"
            ],
            [
              "Her oturumda geçerli bir üslup kuralın var",
              "CLAUDE.md satırı"
            ]
          ],
          "ipucu": "Her durumda bilginin ne zaman gerektiğine ve Claude için nerede durduğuna bak.",
          "aciklama": "Tekrar eden yöntem skill olur, Claude'un göremediği sistem MCP ile bağlanır, her oturum gereken kural CLAUDE.md'ye yazılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Aynı yöntemi üçüncü kez yapıştırıyorsan skill'e, Claude'un göremediği sistemden veri kopyalıyorsan MCP sunucusuna başvurulur; CLAUDE.md her oturumda yüklenen kurallar içindir."
          }
        },
        {
          "id": "b05-d5-s2",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude yalnız kayıt yazarken gereken bir adımı 'önemli' diye CLAUDE.md'ye eklemek istiyor. Bizim kurala göre?",
          "secenekler": [
            "CLAUDE.md'ye; önemli kural hep görünmeli",
            "kayit-yazma'ya; CLAUDE.md'de en çok adresi",
            "İkisine de, kayit-yazma'ya ve CLAUDE.md'ye"
          ],
          "dogru": 1,
          "ipucu": "Bu adımın hangi anlarda gerektiğini düşün.",
          "aciklama": "Tek işte gereken bilgi o işin skill'ine gider, CLAUDE.md'de en çok adresi kalır. Aynı bilgiyi iki yere yazmak çelişki doğurur; bizde Düzeltme sayımı gerçekten kayit-yazma'nın adımıdır.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md",
            "okuma": "2026-11-17",
            "dayanak": "Kontrol listesi her değişiklikte sorar: her oturum mu gerekli, tek işte mi; tek işteyse o işin skill'ine gider, CLAUDE.md'de tek satır adres kalır.",
            "soz": "Her oturum mu gerekli, tek işte mi? Tek işteyse o işin skill'ine; CLAUDE.md'de tek satır adres."
          }
        },
        {
          "id": "b05-d5-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude: 'CLAUDE.md'ye KARARLAR'ı silmeme kuralını yazdım, artık bu kesin.' Ne dersin?",
          "secenekler": [
            "Doğru; CLAUDE.md her seferinde uygulanır",
            "Yazı rica sayılır; kesinliği kanca verir",
            "Kuralı skill'e de yazarsa kesinleşir"
          ],
          "dogru": 1,
          "ipucu": "Metindeki bir yasağı Claude'un atlayıp atlayamayacağını düşün.",
          "aciklama": "CLAUDE.md'deki ya da skill'deki yasak bir ricadır; Claude atlayabilir. Silmeyi durduran bir kanca ise kuralı Claude'dan bağımsız uygular.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "CLAUDE.md'de ya da skill'de yazan \"asla .env'i düzenleme\" gibi bir talimat garanti değil ricadır; düzenlemeyi durduran bir PreToolUse kancası ise zorunlu kılar."
          }
        },
        {
          "id": "b05-d5-s4",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Aynı skill iki oturumda biraz farklı sonuç verdi, aynı olaya bağlı kanca hep aynı. Çünkü skill'deki talimatı ___.",
          "secenekler": [
            "Claude her seferinde yorumlar",
            "her oturum başka bir model okur",
            "kanca her seferinde düzeltir"
          ],
          "dogru": 0,
          "ipucu": "Hangisinde sonucun Claude'un kararına bağlı olduğunu düşün.",
          "aciklama": "Kanca olayında Claude karar vermeden koşar, sonucu değişmez; skill'deki talimatı Claude her seferinde yorumlar. Dosya değişmeden de skill'in sonucu değişebilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Kanca olayında Claude karar vermeden koşar; skill'deki talimatları ise Claude yorumlar ve sonuç değişebilir."
          }
        },
        {
          "id": "b05-d5-s5",
          "tur": "coktan",
          "kart": 1,
          "soru": "Her müşteri e-postası gönderilmeden önce bir kontrolün istisnasız koşmasını istiyorsun. Ne kurdurursun?",
          "secenekler": [
            "CLAUDE.md'de bir kural satırı",
            "Gönderim adımlarını anlatan bir skill",
            "Gönderim olayına bağlı bir kanca"
          ],
          "dogru": 2,
          "ipucu": "Claude'un hatırlamasına bağlı olmayan yolu düşün.",
          "aciklama": "Her seferinde, Claude'a bağlı olmadan koşması gereken iş kancanın işidir. CLAUDE.md satırı ve skill Claude'un uymasına kalır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/features-overview",
            "kopya": "features-overview.md",
            "okuma": "2026-11-15",
            "dayanak": "Kanca, her eşleşen olayda koşması gereken otomasyon içindir; örneğin her dosya düzenlemesinden sonra ESLint'i koşturmak."
          }
        },
        {
          "id": "b05-d5-s8",
          "tur": "coktan",
          "kart": 4,
          "soru": "Başlık biçimi ara sıra kayıyor, sana hiç ulaşmadı. Claude 'denetim kontrolü yazalım' diyor. Ne dersin?",
          "secenekler": [
            "Yazılır; tekrar eden her hata kontrol ister",
            "Yazılmaz; biçim kayması bunu hak etmez",
            "Yazılır, ama önce testi gelir",
            "Yazılmaz; kontrol yalnız para işinde olur"
          ],
          "dogru": 1,
          "ipucu": "Bizde mekanizmanın hangi tür kurallara ayrıldığını düşün.",
          "aciklama": "Biçim ve üslup kuralına mekanizma yazılmaz; kayarsa sana söylenir, sana ulaşıp tekrar ederse mekanizmayı hak eder. Mekanizma listesi paradan geniştir, test yazmak da kararı değiştirmez.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Satır, mekanizmanın yalnız geri alınamaz zarar, güvenlik sınırı, para, dışa gönderim ve kullanıcıya ulaşıp tekrar eden hata kuralına yazıldığını, biçim ve üslup kuralına yazılmadığını söyler.",
            "soz": "Biçim ve üslup kuralına mekanizma yazılmaz"
          }
        }
      ]
    },
    {
      "id": "b05-d6",
      "baslik": "Bizim bir skill'i okumak",
      "hedefler": [
        "kanca-denetim skill'inin ne zaman açıldığını ve neye karar vermediğini anlatabilir.",
        "Bir skill değişikliğini Claude'a nasıl tarif edeceğini anlatabilir.",
        "Bir skill açılmıyor ya da listede görünmüyorsa nereye bakılacağını ayırt edebilir."
      ],
      "anlatim": [
        "kanca-denetim yeni kanca ya da denetim kontrolü eklenirken açılır. Hangi kuralın kanca olacağına o değil, sistem-metni karar verir.",
        "kanca-denetim'in bitiş şartı testlerin geçmesini, denetim.py'nin temiz çıkmasını ve işi ayrıca kontrol eden doğrulayıcının Geçti demesini ister.",
        "Bir adımı değiştirmek istersen Claude'a dosyayı ve adımı adıyla söyle. Neyin değişeceğini ve bitince neye bakılacağını baştan yaz.",
        "Skill beklediğin istekte açılmıyorsa sorun çoğu zaman açıklamadadır. İşi isterken kullandığın tetikleyici ifadeyi (trigger phrase) açıklamaya ekletirsin.",
        "sistem-metni'ne göre davranışı değişen skill commit'ten önce tetik sınamasından geçer: üç cümle; biri açılmalı, biri açılmamalı, biri sınırda.",
        "Skill / listesinde hiç görünmüyorsa önce yapıya bak: SKILL.md kendi klasöründe durmalı, adı harfi harfine SKILL.md olmalı."
      ],
      "terimler": [
        {
          "tr": "tetikleyici ifade",
          "en": "trigger phrase",
          "aciklama": "Bir işi isterken kullandığın ve skill'in açıklamasına eklenince skill'in açılmasını kolaylaştıran sözcükler."
        }
      ],
      "sorular": [
        {
          "id": "b05-d6-s2",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude yeni bir kural için hemen kanca-denetim'i açıp kanca yazmaya başladı. Ne atlandı?",
          "secenekler": [
            "Hiçbir şey; karar kanca-denetim'in",
            "Kuralın kanca hak edip etmediği kararı",
            "Testlerin önceden bir kez koşulması"
          ],
          "dogru": 1,
          "ipucu": "kanca-denetim'in neye karar vermediğini düşün.",
          "aciklama": "kanca-denetim yalnız mekanik adımları taşır; hangi kuralın kanca olacağına sistem-metni ile karar verilir. Testler kanca yazıldıktan sonra koşulur.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Sınır bölümü, hangi kuralın kanca ya da kontrol olacağının sistem-metni'nde olduğunu, bu skill'de yalnız mekanik adımlar bulunduğunu söyler.",
            "soz": "Hangi kuralın kanca ya da kontrol olacağı"
          }
        },
        {
          "id": "b05-d6-s4",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude'a şunu yazdın: 'kanca-denetim'in ilk adımına README'ye bakmayı ekle.' Tarife ne eklemelisin?",
          "secenekler": [
            "Değişikliğin nedenini",
            "Claude'un hangi araçla düzenleyeceğini",
            "İşin bitti sayılacağı ölçütü"
          ],
          "dogru": 2,
          "ipucu": "Tarifte dosya ve adım var; bitmiş halin nasıl anlaşılacağı var mı?",
          "aciklama": "Dosyayı ve adımı anan, bitince neye bakılacağını (ör. denetim.py temiz) söyleyen tarif bir düzeltme turu kazandırır. Aracı Claude kendisi seçer; neden ise bitmiş hali tarif etmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Dosyanın adını verir, belirtiyi tarif eder ve düzelmiş halin neye benzeyeceğini baştan söylersen genellikle bir düzeltme turundan kurtulursun."
          }
        },
        {
          "id": "b05-d6-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "'Denetime yeni kontrol ekle' dediğinde kanca-denetim açılmıyor. Kalıcı çözüm için Claude'dan ne istersin?",
          "secenekler": [
            "Bu ifadeyi skill'in açıklamasına eklemesini",
            "Skill'in adını isteğine benzetmesini",
            "Talimat gövdesine 'kontrol' sözcüğünü eklemesini"
          ],
          "dogru": 0,
          "ipucu": "Claude'un skill'i seçerken dosyanın hangi parçasına baktığını düşün.",
          "aciklama": "Skill açılmıyorsa neden çoğu zaman açıklamadır; işi nasıl istediğini karşılayan ifade eklenince eşleşme kolaylaşır. Gövde açılmadan okunmaz, ad ise listedeki adı verir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-agent-skills/troubleshooting-skills",
            "kopya": "ders-skills-06-troubleshooting.md",
            "okuma": "2026-11-15",
            "dayanak": "Skill açılmıyorsa neden neredeyse her zaman açıklamadır; istekleri gerçekte nasıl dile getirdiğini karşılayan tetikleyici ifadeler ekle."
          }
        },
        {
          "id": "b05-d6-s6",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude kayit-yazma için tetik sınaması yapıyor; 'KARARLAR'a madde yaz' ve 'Raporu düzelt' istemlerini denedi. Üçüncü istem hangisi olmalı?",
          "secenekler": [
            "KARARLAR'a bir madde daha yaz",
            "Rapordaki kararı KARARLAR'a da işle",
            "Devir kartını yaz"
          ],
          "dogru": 1,
          "ipucu": "Denenen iki istemden biri açmalı, biri açmamalı; eksik olan hangi türden istem?",
          "aciklama": "Tetik sınaması üç cümleyle yapılır: biri açılmalı, biri açılmamalı, biri sınırda. Rapor ile kararı karıştıran istem sınırdadır; öteki ikisi denenmiş türlerin tekrarıdır.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Skill yazarken bölümü, yeni ya da davranışı değişen iş skill'inin commit'ten önce denendiğini ve tetik sınamasının üç cümleyle (açılmalı, açılmamalı, sınırda) yapıldığını söyler.",
            "soz": "tetik sınaması üç cümleyle (açılmalı, açılmamalı, sınırda)"
          }
        },
        {
          "id": "b05-d6-s7",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Claude yeni kancayı yazdı; testler geçti, denetim.py temiz. Kurala göre iş, ___ Geçti demeden bitmez.",
          "secenekler": [
            "sen",
            "ayrı bir doğrulayıcı",
            "denetim.py ikinci kez"
          ],
          "dogru": 1,
          "ipucu": "Bitiş şartının testlerden ve denetimden başka neyi saydığını düşün.",
          "aciklama": "kanca-denetim'in bitiş şartı testler ve temiz denetimin yanında ayrı bir doğrulayıcının Geçti demesini de ister. Senin onayın ya da denetimi yeniden koşmak bunun yerini tutmaz.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Bitiş şartı testlerin kalan 0 vermesini, denetim.py'nin temiz olmasını ve doğrulayıcının Geçti demesini sayar.",
            "soz": "`denetim.py` temiz; doğrulayıcı Geçti"
          }
        },
        {
          "id": "b05-d6-s8",
          "tur": "coktan",
          "kart": 5,
          "soru": "Claude yeni bir skill kurduğunu söyledi ama skill / listesinde hiç yok. İlk neye bakılır?",
          "secenekler": [
            "Açıklamanın isteğine uyup uymadığına",
            "Dosyanın yerine ve adına",
            "disable-model-invocation alanına"
          ],
          "dogru": 1,
          "ipucu": "Skill hiç yüklenmiyorsa sorunun içerikte mi yapıda mı olduğunu düşün.",
          "aciklama": "Listede hiç görünmeyen skill'de önce yapıya bakılır: SKILL.md kendi klasöründe ve tam bu adla durmalı. Açıklama kendiliğinden açılmayı etkiler; disable-model-invocation olan skill ise listede görünür.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/introduction-to-agent-skills/troubleshooting-skills",
            "kopya": "ders-skills-06-troubleshooting.md",
            "okuma": "2026-11-15",
            "dayanak": "Skill yüklenmiyorsa SKILL.md'nin skills kökünde değil adlı bir klasörün içinde olduğuna ve dosya adının tam SKILL.md olduğuna bak."
          }
        }
      ]
    }
  ]
});
