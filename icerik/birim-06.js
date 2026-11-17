// icerik/birim-06.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b06",
  "sira": 6,
  "baslik": "Kanca (hook)",
  "amac": "Kancanın Claude Code'un her seferinde uyguladığı kesin kural olduğunu; hangi olayda ve hangi araçta çalıştığını, nasıl durdurduğunu ya da not bıraktığını anlatabilmek; bizim klasördeki kancaları okuyup bir değişikliği Claude'a tarif edebilmek.",
  "dersler": [
    {
      "id": "b06-d1",
      "baslik": "Kanca (hook) nedir; kesin kural",
      "hedefler": [
        "Modelin karar verdiği talimat ile Claude Code'un her seferinde uyguladığı kural arasındaki farkı anlatabilir.",
        "Bir kuralın ne zaman kancaya taşınacağını anlatabilir."
      ],
      "anlatim": [
        "İstemini, CLAUDE.md'yi ve skill'leri model okur ve uyup uymamaya kendisi karar verir. Çoğu zaman uyar ama garanti yoktur.",
        "Kancayı (hook) ise sen ayarlarsın; Claude Code onu her seferinde çalıştırır, model ne karar verirse versin. Bu türe kesin (deterministic) talimat denir.",
        "Ne zaman kanca? Belgenin ölçüsü: CLAUDE.md'deki bir satırı ne kadar vurgularsan vurgula Claude yine kaçırıyorsa, o satır kancaya aittir.",
        "Tersi de geçerli: yalnız tercih olan bir iş için kanca yazılmışsa silinir, karar Claude'a bırakılır.",
        "Örnek: üretilmiş dosyaların durduğu bir klasörü hiç düzenlememek kanca işidir.",
        "Bizim CLAUDE.md'de ölçü şu: kanca gibi mekanizma yalnız geri alınamaz zarar, güvenlik sınırı, para, dışa gönderim ve sana ulaşıp tekrar eden hata için yazılır.",
        "sistem-metni skill'i de aynı ölçüyü taşır: mekanizma yalnız bu koşullarda yazılır, öteki kural açıkça “yalnız metin”dir."
      ],
      "terimler": [
        {"tr": "kanca", "en": "hook", "aciklama": "Claude Code'un oturumun belli anlarında kendiliğinden çalıştırdığı, senin ayarladığın komut."},
        {"tr": "kesin talimat", "en": "deterministic", "aciklama": "Modelin kararına bırakılmayan, Claude Code'un her seferinde uyguladığı talimat."}
      ],
      "sorular": [
        {
          "id": "b06-d1-s1",
          "tur": "coktan",
          "kart": 1,
          "soru": "Aşağıdakilerden hangisini Claude Code, model ne karar verirse versin her seferinde uygular?",
          "secenekler": ["CLAUDE.md'ye yazdığın bir kural", "Bir skill'in içindeki adım", "Ayara kayıtlı bir kanca", "Sohbete yazdığın istem"],
          "dogru": 2,
          "ipucu": "Hangisini model okuyup yorumluyor, hangisini Claude Code doğrudan çalıştırıyor, ayır.",
          "aciklama": "Kanca kesin talimattır; Claude Code onu her seferinde çalıştırır. CLAUDE.md, skill ve istemi ise model okur ve uyup uymamaya kendisi karar verir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Kesin talimatı sen ayarlarsın ve Claude Code onu çalıştırmak zorundadır; bu bir kanca, bir yasak kuralı ya da yönetilen bir ayar olabilir ve model ne karar verirse versin her seferinde uygulanır."
          }
        },
        {
          "id": "b06-d1-s2",
          "tur": "dogru-yanlis",
          "kart": 0,
          "soru": "Bir kuralı CLAUDE.md'ye çok sert bir dille yazarsan Claude'un ona her turda uyması garanti olur.",
          "dogru": false,
          "ipucu": "Satırı kim okuyor ve son kararı kim veriyor, düşün.",
          "aciklama": "Ne kadar sert yazarsan yaz, CLAUDE.md satırına o turda uyup uymamak yine Claude'un kararıdır. Garanti istiyorsan kanca gerekir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir satırı ne kadar güçlü yazarsan yaz, Claude'un o turda ona uyup uymaması yine Claude'un kararıdır."
          }
        },
        {
          "id": "b06-d1-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "CLAUDE.md'ye “her düzenlemeden sonra biçimlendiriciyi çalıştır” yazdın ve vurguladın; Claude yine atlıyor. Ne yaparsın?",
          "secenekler": ["Satırı büyük harfle yeniden yazarım", "Bu işi bir kancaya taşırım", "Satırı silerim", "Satırı bir skill'e taşırım"],
          "dogru": 1,
          "ipucu": "Kartta, vurguya rağmen kaçırılan satır için verilen ölçüyü hatırla.",
          "aciklama": "Vurguladığın halde kaçırılan satır, kancaya ait olduğunun işaretidir. Kanca her düzenlemeden sonra çalışır, Claude'un hatırlamasına bağlı kalmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir CLAUDE.md satırına vurgu eklemeye devam ettiğin halde Claude onu kaçırıyorsa, bu o satırın bir kancaya ait olduğunun işaretidir."
          }
        },
        {
          "id": "b06-d1-s4",
          "tur": "eslestir",
          "kart": 3,
          "soru": "Her durumu doğru açıklamayla eşleştir.",
          "ciftler": [
            ["CLAUDE.md'deki bir satır", "Model okur, uyup uymamaya kendisi karar verir"],
            ["Ayara kayıtlı bir kanca", "Claude Code her seferinde çalıştırır"],
            ["Vurguya rağmen kaçırılan satır", "Kancaya taşınmalı"],
            ["Yalnız tercih için yazılmış kanca", "Silinmeli, karar Claude'a kalmalı"]
          ],
          "ipucu": "Önce kimin karar verdiğini, sonra kartın taşıma ve silme önerisini düşün.",
          "aciklama": "CLAUDE.md'yi model yorumlar, kancayı Claude Code uygular. Belge kaçırılan satırı kancaya taşımayı, yalnız tercih olan kancayı silmeyi önerir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Model CLAUDE.md'yi okuyup ne yapacağına kendisi karar verir, kancayı Claude Code her seferinde uygular; vurguya rağmen kaçırılan satır kancaya aittir, yalnız tercih için yazılmış kanca ise silinir ve karar Claude'a bırakılır."
          }
        },
        {
          "id": "b06-d1-s5",
          "tur": "coktan",
          "kart": 5,
          "soru": "CLAUDE.md'deki ölçüye göre hangi kural kanca gibi bir mekanizmayı hak eder?",
          "secenekler": ["Başlıkların büyük harfle yazılması", "Dışa gönderimi sınırlayan kural", "Cevaplarda kısa paragraf tercihi", "Liste maddelerinin sıralanışı"],
          "dogru": 1,
          "ipucu": "Kartta sayılan kural türlerini hatırla; biçim tercihi aralarında var mı?",
          "aciklama": "Satır mekanizmayı geri alınamaz zarar, güvenlik sınırı, para, dışa gönderim ve tekrar eden hata kurallarına ayırır. Biçim ve üslup kuralına mekanizma yazılmaz.",
          "kaynak": {
            "adres": "CLAUDE.md:53",
            "okuma": "2026-11-17",
            "dayanak": "Satır, mekanizmanın yalnız geri alınamaz zarar, güvenlik sınırı, para, dışa gönderim ve tekrar eden hata kurallarına yazılacağını, biçim ve üslup kuralına yazılmayacağını söyler.",
            "soz": "yalnız şu kurallara yazılır: geri alınamaz zarar, güvenlik sınırı, para, dışa gönderim"
          }
        },
        {
          "id": "b06-d1-s6",
          "tur": "bosluk",
          "kart": 6,
          "soru": "sistem-metni skill'ine göre mekanizma yalnız belli koşullarda yazılır; öteki kural açıkça ___.",
          "secenekler": ["kullanıcıya sorulur", "bir kancaya verilir", "yalnız metindir", "bir alt ajana verilir"],
          "dogru": 2,
          "ipucu": "Mekanizma yazılmayan kural nerede kalır, düşün.",
          "aciklama": "Skill mekanizmayı yalnız belli koşullara ayırır; öteki kural yalnız metin olarak kalır ve bu açıkça yazılır.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md:31",
            "okuma": "2026-11-17",
            "dayanak": "Mekanizma yalnız CLAUDE.md'deki koşullarda yazılır; öteki kural açıkça yalnız metindir.",
            "soz": "öteki kural açıkça \"yalnız metin\"dir"
          }
        },
        {
          "id": "b06-d1-s7",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude'un üretilmiş dosyaların durduğu src/gen klasörünü hiç düzenlememesini istiyorsun. Hangi tarif bunu garanti eder?",
          "secenekler": ["CLAUDE.md'ye “src/gen'i asla düzenleme” satırını kalın yaz.", "src/gen'e yazan her çağrıyı durduran bir kanca yaz.", "Her sohbetin başında bu kuralı istemine ekle."],
          "dogru": 1,
          "ipucu": "Garanti sözüne dikkat: hangisinde karar modele kalmıyor?",
          "aciklama": "CLAUDE.md ve istem modelin kararına kalır. Kanca, model ne karar verirse versin çağrıyı her seferinde durdurur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Kesin tür, model ne karar verirse versin bazı şeylerin her zaman olmasını ya da hiç olmamasını istediğinde kullanılır; örneğin src/gen klasöründeki üretilmiş istemciyi hiç düzenlememek."
          }
        }
      ]
    },
    {
      "id": "b06-d2",
      "baslik": "Olaylar (events)",
      "hedefler": [
        "SessionStart, UserPromptSubmit, PreToolUse, PostToolUse, Stop, SubagentStart ve SubagentStop olaylarının ne zaman çalıştığını anlatabilir.",
        "Bizim ayar dosyasında bu yedi olayın kaydını bulup hangi kancanın bağlı olduğunu anlatabilir."
      ],
      "anlatim": [
        "Her kanca bir olaya (event) bağlanır. SessionStart oturum başlarken ya da sürdürülürken, UserPromptSubmit istemini gönderince, Claude işlemeden önce çalışır.",
        "PreToolUse bir araç çağrısı çalışmadan önce, PostToolUse araç çağrısı başarıyla bitince çalışır.",
        "Stop, Claude cevabını bitirince çalışır. SubagentStart bir alt ajan açılınca, SubagentStop alt ajan işini bitirince çalışır.",
        "Bizim .claude/settings.json dosyasında bu yedi olayın her birine kanca kayıtlı. Bir olaya birden çok kanca kayıtlı olabilir: PostToolUse'un altında iki kayıt var."
      ],
      "terimler": [
        {"tr": "olay", "en": "event", "aciklama": "Oturumda Claude Code'un kanca çalıştırabildiği belirli an; istem gönderilince ya da araç çağrısından önce gibi."}
      ],
      "sorular": [
        {
          "id": "b06-d2-s1",
          "tur": "eslestir",
          "kart": 2,
          "soru": "Her olayı çalıştığı anla eşleştir.",
          "ciftler": [
            ["SessionStart", "Oturum başlarken ya da sürdürülürken"],
            ["UserPromptSubmit", "İstem gönderilince, Claude işlemeden önce"],
            ["PreToolUse", "Bir araç çağrısı çalışmadan önce"],
            ["Stop", "Claude cevabını bitirince"]
          ],
          "ipucu": "Adlardaki Start, Pre ve Stop parçaları ipucu verir.",
          "aciklama": "Olay adı ne zaman çalıştığını söyler: Pre öncesini, Stop bitişi, SessionStart oturumun açılışını anlatır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "Olay tablosuna göre SessionStart oturum başlarken ya da sürdürülürken, UserPromptSubmit istem gönderilip Claude işlemeden önce, PreToolUse araç çağrısı çalışmadan önce, Stop ise Claude cevabını bitirince çalışır."
          }
        },
        {
          "id": "b06-d2-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Claude bir dosyayı düzenledi ve araç çağrısı başarıyla bitti. Hemen ardından hangi olay çalışır?",
          "secenekler": ["PreToolUse", "PostToolUse", "Stop", "SessionStart"],
          "dogru": 1,
          "ipucu": "Çağrı bitti; adında “sonra” anlamı taşıyan olayı ara.",
          "aciklama": "PostToolUse bir araç çağrısı başarıyla bittikten sonra çalışır. PreToolUse ise çağrıdan önce çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "PostToolUse, bir araç çağrısı başarılı olduktan sonra çalışır."
          }
        },
        {
          "id": "b06-d2-s3",
          "tur": "dogru-yanlis",
          "kart": 2,
          "soru": "SubagentStart bir alt ajan açılınca, SubagentStop alt ajan işini bitirince çalışır.",
          "dogru": true,
          "ipucu": "Kartta iki alt ajan olayının hangi anlarda çalıştığı yazıyor; soruyla karşılaştır.",
          "aciklama": "İki olay alt ajanın açılışını ve bitişini yakalar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "SubagentStart bir alt ajan oluşturulduğunda, SubagentStop alt ajan işini bitirdiğinde çalışır."
          }
        },
        {
          "id": "b06-d2-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "Bizim ayarda doğrulayıcı kilidi kancası, verifier adlı alt ajan açılınca çalışıyor. Bu kayıt .claude/settings.json'da hangi olayın altındadır?",
          "secenekler": ["SubagentStop", "PreToolUse", "SubagentStart", "UserPromptSubmit"],
          "dogru": 2,
          "ipucu": "Alt ajanın açılış anını yakalayan olayı düşün.",
          "aciklama": "Alt ajanın açılışını SubagentStart yakalar; ayardaki bu kayıt verifier ajanında dogrulayici_kilidi.py'yi çalıştırır.",
          "kaynak": {
            "adres": ".claude/settings.json:190",
            "okuma": "2026-11-17",
            "dayanak": "settings.json'da SubagentStart olayı başlar ve altındaki kayıt verifier eşleşmesiyle dogrulayici_kilidi.py'yi çalıştırır.",
            "soz": "\"SubagentStart\": [ { \"matcher\": \"verifier\","
          }
        },
        {
          "id": "b06-d2-s5",
          "tur": "sirala",
          "kart": 2,
          "soru": "Sen bir istem gönderiyorsun, Claude bir araç kullanıp cevabını bitiriyor. Olayları oluş sırasına diz.",
          "adimlar": ["UserPromptSubmit", "PreToolUse", "PostToolUse", "Stop"],
          "ipucu": "İstem araçtan, araç da cevabın bitişinden önce gelir.",
          "aciklama": "İstem işlenmeden önce UserPromptSubmit, araçtan önce PreToolUse, araçtan sonra PostToolUse, cevap bitince Stop çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "UserPromptSubmit istem işlenmeden önce, PreToolUse araç çağrısı çalışmadan önce, PostToolUse çağrı başarılı olunca, Stop ise Claude cevabını bitirince çalışır."
          }
        },
        {
          "id": "b06-d2-s6",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bizde saat damgası kancası UserPromptSubmit olayına kayıtlı. Bu kanca ne zaman çalışır?",
          "secenekler": ["Claude cevabını bitirince", "Bir araç çağrısı başarıyla bittikten sonra", "Bir alt ajan işini bitirince", "İstem gönderilince, işlenmeden önce"],
          "dogru": 3,
          "ipucu": "Olayın adını parçalarına ayır: User, Prompt, Submit.",
          "aciklama": "UserPromptSubmit, sen istem gönderince Claude onu işlemeden önce çalışır. Ayardaki kayıt saat_damgasi.py'yi tam o an çalıştırır.",
          "kaynak": {
            "adres": ".claude/settings.json:67",
            "okuma": "2026-11-17",
            "dayanak": "settings.json'da UserPromptSubmit olayı başlar ve altındaki kayıt saat_damgasi.py'yi çalıştırır.",
            "soz": "\"UserPromptSubmit\": ["
          }
        },
        {
          "id": "b06-d2-s7",
          "tur": "coktan",
          "kart": 3,
          "soru": "Bizim .claude/settings.json dosyasında PostToolUse olayının altında kaç kayıt var?",
          "secenekler": ["Hiç kayıt yok", "Tek kayıt", "İki kayıt", "Yedi kayıt"],
          "dogru": 2,
          "ipucu": "Kartta PostToolUse için söyleneni hatırla.",
          "aciklama": "PostToolUse olayının altında Write|Edit ve Bash eşleşmeli iki kayıt var.",
          "kaynak": {
            "adres": ".claude/settings.json:223",
            "okuma": "2026-11-17",
            "dayanak": "settings.json'da PostToolUse olayı başlar; altında Write|Edit eşleşmeli seçim sayfası notu ve Bash eşleşmeli paket Bash kaydı olmak üzere iki kayıt vardır.",
            "soz": "\"PostToolUse\": [ { \"matcher\": \"Write|Edit\","
          }
        }
      ]
    },
    {
      "id": "b06-d3",
      "baslik": "Eşleştirici (matcher)",
      "hedefler": [
        "Eşleştiricinin araç olaylarında kancayı araç adına göre süzdüğünü anlatabilir.",
        "Edit|Write gibi bir eşleşmeyi okuyup kancanın hangi araçlarda çalıştığını anlatabilir."
      ],
      "anlatim": [
        "Eşleştiricisi olmayan kanca, olayının her gerçekleşmesinde çalışır. Eşleştirici bunu daraltır.",
        "PreToolUse araç çağrısından önce, PostToolUse sonra çalışır. Bu araç olaylarında eşleştirici araç adına bakar.",
        "Eşleştirici Bash ise kanca yalnız kabuk komutlarını çalıştıran Bash aracında çalışır. Edit|Write ise yalnız Edit ya da Write aracında çalışır.",
        "Dik çizgi (|) “ya da” demektir. Yalnız harf, rakam, alt çizgi, tire, boşluk, virgül ve dik çizgi taşıyan eşleştirici tam adla karşılaştırılır.",
        "Nokta ya da yıldız gibi başka bir işaret taşıyan eşleştirici tam ad değil, kalıp (düzenli ifade) sayılır: mcp__.* adında mcp__ geçen her araçta çalışır.",
        "Bizim .claude/settings.json'da okuma korumasının kaydı PreToolUse altında duruyor; eşleştiricisi Read|Grep|Glob."
      ],
      "terimler": [
        {"tr": "eşleştirici", "en": "matcher", "aciklama": "Kancanın olayın hangi durumunda çalışacağını süzen alan; araç olaylarında araç adına bakar."}
      ],
      "sorular": [
        {
          "id": "b06-d3-s1",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bir PostToolUse kancasının eşleştiricisi Edit|Write. Claude, Read aracıyla bir dosya okursa ne olur?",
          "secenekler": ["Kanca çalışır", "Kanca çalışmaz", "Kanca okumayı durdurur", "Kanca iki kez çalışır"],
          "dogru": 1,
          "ipucu": "Dik çizginin iki yanındaki adlara bak; Read orada var mı?",
          "aciklama": "Edit|Write yalnız Edit ya da Write aracında çalışır. Read bu listede olmadığı için kanca çalışmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "Edit|Write eşleştiricisi yalnız Claude Edit ya da Write aracını kullandığında çalışır; Bash, Read ya da başka bir araçta çalışmaz."
          }
        },
        {
          "id": "b06-d3-s2",
          "tur": "dogru-yanlis",
          "kart": 0,
          "soru": "Eşleştiricisi olmayan bir kanca, olayının her gerçekleşmesinde çalışır.",
          "dogru": true,
          "ipucu": "Süzgeç yoksa ne süzülür, düşün.",
          "aciklama": "Eşleştirici yalnız daraltmak içindir; yoksa kanca olayın her gelişinde çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "Eşleştiricisi olmayan kanca, olayının her gerçekleşmesinde çalışır."
          }
        },
        {
          "id": "b06-d3-s3",
          "tur": "bosluk",
          "kart": 1,
          "soru": "PreToolUse ve PostToolUse olaylarında eşleştirici kancayı ___ göre süzer.",
          "secenekler": ["çağrılan aracın adına", "dosyanın adına", "oturumun saatine", "istemin uzunluğuna"],
          "dogru": 0,
          "ipucu": "Bu olaylar bir çağrının önünde ve arkasında durur; çağrıyı ne ayırt eder?",
          "aciklama": "Araç olaylarında eşleştirici araç adına bakar: Bash, Edit|Write ya da mcp__.* gibi.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "PreToolUse, PostToolUse ve benzeri araç olaylarında eşleştiricinin süzdüğü alan araç adıdır."
          }
        },
        {
          "id": "b06-d3-s4",
          "tur": "coktan",
          "kart": 5,
          "soru": "Okuma korumasının eşleştiricisi Read|Grep|Glob ve olayı PreToolUse. Ne zaman çalışır?",
          "secenekler": ["Edit ya da Write'tan önce", "Read, Grep ya da Glob'dan sonra", "Read, Grep ya da Glob'dan önce", "Bash komutundan önce"],
          "dogru": 2,
          "ipucu": "Olay adındaki Pre ne zamanı anlatıyor, dik çizgi hangi adları ayırıyor; ikisini birleştir.",
          "aciklama": "Kayıt PreToolUse altında olduğu için çağrıdan önce çalışır; dik çizgi üç aracın her birini kapsar.",
          "kaynak": {
            "adres": ".claude/settings.json:92",
            "okuma": "2026-11-17",
            "dayanak": "PreToolUse altındaki bu kayıtta eşleştirici Read|Grep|Glob ve çalışan komut okuma_kontrol.py'dir.",
            "soz": "\"matcher\": \"Read|Grep|Glob\""
          }
        },
        {
          "id": "b06-d3-s5",
          "tur": "eslestir",
          "kart": 4,
          "soru": "Her eşleştiriciyi kancanın çalıştığı araçlarla eşleştir.",
          "ciftler": [
            ["Bash", "Bash aracı, yani kabuk komutları"],
            ["Edit|Write", "Edit ya da Write aracı"],
            ["Read|Grep|Glob", "Read, Grep ya da Glob aracı"],
            ["mcp__.*", "Adında mcp__ geçen her araç"]
          ],
          "ipucu": "Dik çizgi “ya da” demek; nokta ve yıldız ise bir kalıp kurar.",
          "aciklama": "Düz adlar tam adla karşılaştırılır, dik çizgi seçenekleri ayırır. mcp__.* ise düzenli ifadedir ve adında mcp__ geçen her araca uyar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks",
            "kopya": "hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Yalnız harf, rakam, alt çizgi, tire, boşluk, virgül ve dik çizgi taşıyan eşleştirici tam ad ya da dik çizgiyle ayrılmış tam adlar listesi olarak, başka işaret taşıyan eşleştirici ise başa ve sona bağlanmamış düzenli ifade olarak değerlendirilir."
          }
        },
        {
          "id": "b06-d3-s6",
          "tur": "coktan",
          "kart": 3,
          "soru": "Kancanın yalnız Edit ya da Write aracında çalışmasını istiyorsun. Claude'a eşleştirici için hangi tarifi verirsin?",
          "secenekler": ["Eşleştiriciyi boş bırak.", "Eşleştirici Bash olsun.", "Eşleştirici Edit|Write olsun.", "Eşleştirici Edit|Write|Bash|Read olsun."],
          "dogru": 2,
          "ipucu": "Her eşleştiricinin kaç aracı kapsadığını say; sen yalnız iki araç istiyorsun.",
          "aciklama": "Edit|Write yalnız bu iki araçta çalışır. Boş eşleştirici her araçta, Bash yalnız Bash'te çalışır; Edit|Write|Bash|Read ise Bash ve Read'de de çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "Edit|Write eşleştiricisi yalnız Claude Edit ya da Write aracını kullandığında çalışır."
          }
        },
        {
          "id": "b06-d3-s7",
          "tur": "coktan",
          "kart": 2,
          "soru": "Kancanın eşleştiricisi Edit|Write. Claude bir dosyayı kabuk komutuyla değiştirirse kanca ne yapar?",
          "secenekler": ["Çalışmaz; kabuk komutu Bash aracıyla çalışır", "Çalışır, çünkü sonuçta dosya yine değişmiştir", "Çalışır ve kabuk komutunu durdurur"],
          "dogru": 0,
          "ipucu": "Kabuk komutu hangi araçla çalışır?",
          "aciklama": "Kabuk komutu Bash aracıyla çalışır, Edit|Write onu kapsamaz. Her dosya değişikliğini görmek isteyen kanca Bash'i de eşlemeli ya da bir Stop kancası kullanmalı.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude dosyaları kabuk komutlarıyla da oluşturup değiştirebilir; her dosya değişikliğini görmesi gereken kanca için bir Stop kancası ya da Bash eşleşmesi de eklenir."
          }
        }
      ]
    },
    {
      "id": "b06-d4",
      "baslik": "Durdurmak: çıkış kodu 2",
      "hedefler": [
        "Çıkış kodu (exit code) 0 olunca işin sürdüğünü, 2 olunca durduğunu anlatabilir.",
        "Durdurma iletisinin hata akışından (stderr) Claude'a geri bildirim olarak gittiğini anlatabilir."
      ],
      "anlatim": [
        "Kanca bitince bir çıkış kodu verir: 0 “itiraz yok, iş sürer”, 2 “durdur” demektir. PreToolUse kancası 2 ile çıkarsa araç çağrısı hiç çalışmaz.",
        "Kancanın hata akışına yazdığı ileti Claude'a geri bildirim olarak gider; Claude neden durdurulduğunu görür ve yolunu değiştirir.",
        "Dikkat: 1 hata gibi görünür ama durdurmaz; Claude komutu yine çalıştırır. Durdurmak istiyorsan 2 kullan.",
        "0 da onay değildir: PreToolUse'da 0 ile çıkınca çağrı yine normal izin akışından geçer.",
        "Bizde koruma.py her Bash çağrısından önce çalışır. Bir kural tutarsa çağrı çıkış 2 ile durur; bulgular ve tek “Ne yapılmalı” satırı hata akışına yazılır."
      ],
      "terimler": [
        {"tr": "çıkış kodu", "en": "exit code", "aciklama": "Kanca bitince Claude Code'a bıraktığı sayı; 0 itiraz yok, 2 durdur demektir."},
        {"tr": "hata akışı", "en": "stderr", "aciklama": "Kancanın hata ve gerekçe iletisini yazdığı çıkış kanalı; çıkış 2'de Claude'a geri bildirim olur."}
      ],
      "sorular": [
        {
          "id": "b06-d4-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bir PreToolUse kancası çıkış kodu 2 ile biterse ne olur?",
          "secenekler": ["Araç çağrısı çalışmaz, durur", "Çağrı onaylanır, izin sorulmaz", "Çağrı her zamanki gibi sürer", "Oturum kapanır"],
          "dogru": 0,
          "ipucu": "PreToolUse çağrıdan önce çalışır; 2 hangi işi görür?",
          "aciklama": "2 durdurma kodudur; PreToolUse çağrıdan önce çalıştığı için çağrı hiç gerçekleşmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "Çıkış 2 işlemi durdurur ve hata akışına yazılan ileti Claude'un geri bildirimi olur."
          }
        },
        {
          "id": "b06-d4-s2",
          "tur": "dogru-yanlis",
          "kart": 2,
          "soru": "Bir kancanın işi durdurması için çıkış kodu 1 de yeterlidir.",
          "dogru": false,
          "ipucu": "1 bir hata gibi görünür; ama durdurur mu?",
          "aciklama": "1 durdurmaz, Claude komutu yine çalıştırır. Durdurmak için 2 gerekir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/hooks",
            "kopya": "ders-action-05-hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Çıkış 1 hata gibi görünse de durdurmaz ve Claude komutu yine çalıştırır; bir şeyi durdurmak istiyorsan 1 değil 2 ile çıkılır."
          }
        },
        {
          "id": "b06-d4-s3",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Çıkış 2 ile duran PreToolUse kancasının hata akışına yazdığı ileti ___ gider.",
          "secenekler": ["yalnız bir kayıt dosyasına", "yalnız sana, ekranda bir uyarı olarak", "Claude'a geri bildirim olarak", "bir sonraki oturuma"],
          "dogru": 2,
          "ipucu": "Claude neden durdurulduğunu nereden öğreniyor, düşün.",
          "aciklama": "İleti Claude'a geri bildirim olarak gider; Claude neden durdurulduğunu öğrenir ve yolunu değiştirir. İletiyi yalnız sana göstermek, SessionStart gibi durdurulamayan olaylarda olur.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/hooks",
            "kopya": "ders-101-12-hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Çıkış kodu 2 işlemi durdurur ve hata akışındaki ileti Claude'a geri bildirim olarak gider, böylece Claude neden durdurulduğunu bilir ve yolunu değiştirebilir."
          }
        },
        {
          "id": "b06-d4-s4",
          "tur": "coktan",
          "kart": 4,
          "soru": "koruma.py'ye göre bir kural tutunca ne olur?",
          "secenekler": ["Çıkış 1 ile durur, bulgu kayda yazılır", "Çıkış 0 ile sürer, bulgu CLAUDE.md'ye eklenir", "Kullanıcıya soru açıp cevabı bekler", "Çıkış 2 ile durur, bulgu hata akışına yazılır"],
          "dogru": 3,
          "ipucu": "Bu derste durduran sayı hangisiydi?",
          "aciklama": "koruma.py durdurmak için 2 ile çıkar ve gerekçeyi hata akışına yazar; Claude o iletiyi görür.",
          "kaynak": {
            "adres": ".claude/hooks/koruma.py:9",
            "okuma": "2026-11-17",
            "dayanak": "Aşağıdaki durumlardan biri varsa çağrı çıkış 2 ile durur, her bulgu ve tek “Ne yapılmalı” satırı stderr'e yazılır.",
            "soz": "çağrı çıkış 2 ile durur, her bulgu ve tek \"Ne yapılmalı\" satırı stderr'e yazılır"
          }
        },
        {
          "id": "b06-d4-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "PreToolUse kancası 0 ile çıktı. Araç çağrısına ne olur?",
          "secenekler": ["Onaylanır, izin sorusu atlanır", "Yine normal izin akışından geçer", "Durdurulur, ileti Claude'a gider"],
          "dogru": 1,
          "ipucu": "0 “itirazım yok” mu demek, “onaylıyorum” mu?",
          "aciklama": "0 onay değildir; çağrı yine normal izin akışından geçer.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "PreToolUse kancasından 0 ile çıkınca araç çağrısı yine normal izin akışından geçer, çünkü 0 onu onaylamaz."
          }
        },
        {
          "id": "b06-d4-s6",
          "tur": "eslestir",
          "kart": 2,
          "soru": "Her çıkış kodunu sonucuyla eşleştir.",
          "ciftler": [
            ["0", "İtiraz yok, iş sürer"],
            ["2", "Durdurur, ileti Claude'a gider"],
            ["1", "Hata gibi görünür ama durdurmaz"]
          ],
          "ipucu": "Durduran tek sayı hangisi, önce onu bul.",
          "aciklama": "0 başarıdır, 2 durdurur. Başka her kod, 1 dahil, durdurmaz ve iş sürer.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/hooks",
            "kopya": "ders-action-05-hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "0 başarıdır, 2 durduran hatadır ve hata akışı Claude'a bağlam olarak gider, başka her kod ise durdurmaz ve Claude devam eder."
          }
        },
        {
          "id": "b06-d4-s7",
          "tur": "sirala",
          "kart": 4,
          "soru": "koruma.py tehlikeli bir kabuk komutunu nasıl durdurur? Adımları sıraya diz.",
          "adimlar": ["Claude bir Bash komutu çalıştırmak ister", "Komut çalışmadan önce PreToolUse kancası çalışır", "Kanca sorunu görür ve 2 ile çıkar", "Komut çalışmaz, ileti Claude'a gider", "Claude iletiye bakıp yolunu değiştirir"],
          "ipucu": "PreToolUse adındaki “Pre” sırayı belirler.",
          "aciklama": "PreToolUse çağrıdan önce çalıştığı için 2, komutu daha çalışmadan durdurur; ileti Claude'a döner.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/hooks",
            "kopya": "ders-101-12-hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "PreToolUse kancaları araç çağrılarını çalışmadan önce durdurabilir; çıkış 2'de işlem durur ve hata akışındaki ileti Claude'a geri bildirim olarak gider."
          }
        }
      ]
    },
    {
      "id": "b06-d5",
      "baslik": "Bağlama not eklemek (additionalContext)",
      "hedefler": [
        "Kancanın durdurmadan Claude'a not bırakabildiğini anlatabilir.",
        "Saat damgası kancasının her turda bağlama ne eklediğini anlatabilir."
      ],
      "anlatim": [
        "Kanca durdurmadan da konuşabilir: 0 ile çıkar ve yapılı bir çıktı (JSON) yazar. Bu çıktının additionalContext alanındaki metin Claude'un bağlamına eklenir.",
        "Claude notu bir sonraki istekte okur; sohbet ekranında sana mesaj olarak görünmez.",
        "Not nerede belirir? SessionStart'ta konuşmanın başında, UserPromptSubmit'te gönderdiğin istemin yanında, PostToolUse'da aracın sonucunun yanında.",
        "Stop'ta not turun sonunda belirir; konuşma sürer, Claude notu görüp ona göre davranabilir.",
        "Bizde saat damgası kancası her istemde İstanbul saatini ölçer ve bağlama tek satır ekler: “Saat: GG.AA.YYYY SS:DD Europe/Istanbul”. Saat ölçülmeden yazılmaz, bu satırdan okunur.",
        "izin_sayisi.py ise bir Stop kancasıdır; sorunlu cümle bulursa turu durdurmadan not bırakır."
      ],
      "terimler": [
        {"tr": "ek bağlam", "en": "additionalContext", "aciklama": "Kancanın JSON çıktısında, Claude'un bağlamına eklenecek metni taşıyan alan."}
      ],
      "sorular": [
        {
          "id": "b06-d5-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Kanca çağrıyı durdurmadan Claude'a not bırakmak istiyor. Hangi yol doğru?",
          "secenekler": ["2 ile çıkıp hata akışına yazmak", "0 ile çıkıp additionalContext alanına yazmak", "1 ile çıkıp ekrana basmak", "CLAUDE.md'nin sonuna eklemek"],
          "dogru": 1,
          "ipucu": "Durdurmayan çıkış kodunu ve bağlama metin taşıyan alanı birlikte düşün.",
          "aciklama": "2 durdurur; 0 ile çıkıp additionalContext doldurmak ise işi durdurmadan Claude'un bağlamına metin ekler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks",
            "kopya": "hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "additionalContext alanı kancadan gelen metni Claude'un bağlam penceresine taşır; Claude onu bir sonraki model isteğinde okur, ama metin arayüzde sohbet mesajı olarak görünmez."
          }
        },
        {
          "id": "b06-d5-s2",
          "tur": "dogru-yanlis",
          "kart": 1,
          "soru": "Kancanın additionalContext ile bıraktığı not, sohbet ekranında sana bir mesaj olarak görünür.",
          "dogru": false,
          "ipucu": "Notu kim okuyor, düşün: sen mi, Claude mu?",
          "aciklama": "Not Claude'un bağlamına eklenir ve Claude onu bir sonraki istekte okur; sohbet ekranında mesaj olarak görünmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks",
            "kopya": "hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "additionalContext alanı kancadan gelen metni Claude'un bağlam penceresine taşır; Claude onu bir sonraki model isteğinde okur, ama metin arayüzde sohbet mesajı olarak görünmez."
          }
        },
        {
          "id": "b06-d5-s3",
          "tur": "coktan",
          "kart": 3,
          "soru": "Bir Stop kancası additionalContext ile not bıraktı. Sonra ne olur?",
          "secenekler": ["Konuşma sürer; Claude nota göre davranabilir", "Tur hemen durur ve not silinir", "Oturum kapanır, not bir sonraki oturumda okunur"],
          "dogru": 0,
          "ipucu": "Stop'ta notun turun neresinde belirdiğini hatırla.",
          "aciklama": "Stop ve SubagentStop'ta not turun sonunda belirir. Konuşma sürer, Claude geri bildirime göre iş yapabilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks",
            "kopya": "hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Stop ve SubagentStop'ta not turun sonunda belirir; konuşma sürer, böylece Claude geri bildirime göre davranabilir."
          }
        },
        {
          "id": "b06-d5-s4",
          "tur": "bosluk",
          "kart": 4,
          "soru": "Saat damgası kancası her kullanıcı turunda İstanbul saatini ölçer ve bağlama ___ ekler.",
          "secenekler": ["tek satır", "bütün DURUM dosyasını", "bir uyarı penceresi", "yeni bir sohbet"],
          "dogru": 0,
          "ipucu": "Kartta saat damgası kancasının bağlama ne eklediği yazıyor.",
          "aciklama": "Kanca “Saat: GG.AA.YYYY SS:DD Europe/Istanbul” biçiminde tek satır ekler; saat bu satırdan okunur.",
          "kaynak": {
            "adres": ".claude/hooks/saat_damgasi.py:3",
            "okuma": "2026-11-17",
            "dayanak": "Kanca her kullanıcı turunda Europe/Istanbul saatini ölçer ve bağlama tek satır ekler; saat ölçülmeden yazılmaz, bu satırdan okunur.",
            "soz": "Her kullanıcı turunda Europe/Istanbul saatini ölçer ve bağlama tek satır ekler"
          }
        },
        {
          "id": "b06-d5-s5",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude her istemde o anki git dalını bilsin istiyorsun. Hangi tarifi verirsin?",
          "secenekler": ["PreToolUse kancası dalı denetleyip çıkış koduyla durdursun.", "CLAUDE.md'ye bugünkü dalın adı yazılsın.", "UserPromptSubmit kancası dalı additionalContext'e eklesin."],
          "dogru": 2,
          "ipucu": "Her istemde çalışan olayı ve durdurmadan not bırakan alanı birleştir.",
          "aciklama": "Belgedeki örnek tam bunu yapar: UserPromptSubmit kancası additionalContext ile her isteme dalın durumunu ekler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "UserPromptSubmit kancalarında bağlama metin eklemek için hookSpecificOutput.additionalContext kullanılır; belgedeki örnek çıktı her isteme o anki dalın durumunu ekler."
          }
        },
        {
          "id": "b06-d5-s6",
          "tur": "coktan",
          "kart": 5,
          "soru": "Stop kancası izin_sayisi.py sorunlu bir cümle bulunca ne yapar?",
          "secenekler": ["Turu 2 ile durdurur, gerekçeyi hata akışına yazar", "Sorunlu cümleyi kendisi siler", "Kullanıcıya soru açar", "Turu durdurmadan Claude'a not bırakır"],
          "dogru": 3,
          "ipucu": "Kartta izin_sayisi.py'nin turu durdurup durdurmadığı yazıyor.",
          "aciklama": "Kanca durdurmaz; 0 ile çıkar ve additionalContext taşıyan tek satır JSON yazar.",
          "kaynak": {
            "adres": ".claude/hooks/izin_sayisi.py:3",
            "okuma": "2026-11-17",
            "dayanak": "Turun asistan metinlerinde izin ya da şifre penceresi için sayı veren, ölçü işareti taşımayan cümle varsa kanca durdurmadan not verir: çıkış 0 ve stdout'a tek satır JSON.",
            "soz": "durdurmadan not verir: çıkış 0, stdout'a tek satır JSON"
          }
        },
        {
          "id": "b06-d5-s7",
          "tur": "eslestir",
          "kart": 3,
          "soru": "Kancanın notu Claude'un bağlamında nerede belirir? Olaylarla eşleştir.",
          "ciftler": [
            ["SessionStart", "Konuşmanın başında, ilk istemden önce"],
            ["UserPromptSubmit", "Gönderilen istemin yanında"],
            ["PostToolUse", "Aracın sonucunun yanında"],
            ["Stop", "Turun sonunda; konuşma sürer"]
          ],
          "ipucu": "Her olayın çalıştığı anı düşün; not o anın yanına düşer.",
          "aciklama": "Not, kancanın çalıştığı ana eklenir: oturum başı, istem, araç sonucu ya da tur sonu.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks",
            "kopya": "hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Notun yeri olaya göre değişir: SessionStart'ta konuşmanın başında, UserPromptSubmit'te gönderilen istemin yanında, PostToolUse'da araç sonucunun yanında, Stop'ta turun sonunda."
          }
        }
      ]
    },
    {
      "id": "b06-d6",
      "baslik": "Sıkıştırmadan sonra çalışan kanca",
      "hedefler": [
        "SessionStart olayının sıkıştırmadan (compaction) sonra da çalıştığını anlatabilir.",
        "Açılış kancasının sıkıştırmadan sonra bağlama ne eklediğini anlatabilir."
      ],
      "anlatim": [
        "Bağlam penceresi dolunca Claude Code konuşmayı özetler; buna sıkıştırma denir. SessionStart olayı yalnız oturum açılınca değil, sıkıştırmadan hemen sonra da çalışır.",
        "Özetlerken önemli ayrıntı kaybolabilir. Kancanın yazdığı metin sıkıştırılmış bağlama eklenir; kaybolmaması gereken bilgi böyle geri verilir.",
        "SessionStart kancasına verilen girdideki kaynak (source) alanı oturumun nasıl başladığını söyler: ör. startup, resume, clear, compact. Eşleştirici compact olursa kanca yalnız sıkıştırmadan sonra çalışır.",
        "Sıkıştırmadan sonra PostCompact adlı bir olay da çalışır, ama onun çıktısı konuşmaya girmez. Bağlamı geri vermek için compact eşleştiricili SessionStart kullanılır.",
        "Bizde SessionStart kaydında eşleştirici yok; yani acilis.py her SessionStart'ta, sıkıştırmadan sonra da çalışır ve hep saati basar.",
        "Döngüde (kuyruk dosyasındaki işler sırayla yapılırken) sıkıştırma olursa acilis.py saatin altına “döngü sürüyor; devir kartı ve kuyruk baştan okunur” ekler. Döngüyü .claude/dongu-baglam.json işaret dosyası gösterir."
      ],
      "terimler": [
        {"tr": "sıkıştırma", "en": "compaction", "aciklama": "Bağlam penceresi dolarken Claude Code'un konuşmayı özetle değiştirmesi."},
        {"tr": "kaynak", "en": "source", "aciklama": "SessionStart girdisinde oturumun nasıl başladığını söyleyen alan: startup, resume, clear, compact ya da fork."}
      ],
      "sorular": [
        {
          "id": "b06-d6-s1",
          "tur": "dogru-yanlis",
          "kart": 0,
          "soru": "SessionStart olayı yalnız yeni bir oturum açılınca çalışır; sıkıştırmadan sonra çalışmaz.",
          "dogru": false,
          "ipucu": "Konuşma özetlendikten hemen sonra ne olduğunu düşün.",
          "aciklama": "SessionStart sıkıştırmadan hemen sonra da çalışır; compact eşleştiricili bir SessionStart kancası tam o an devreye girer.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/hooks",
            "kopya": "ders-action-05-hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "compact eşleştiricili bir SessionStart kancası sıkıştırmadan hemen sonra çalışır ve yazdığı özet bağlama geri girer."
          }
        },
        {
          "id": "b06-d6-s2",
          "tur": "coktan",
          "kart": 3,
          "soru": "Sıkıştırmadan sonra önemli bir bilgiyi Claude'a yeniden vermek için hangi kanca önerilir?",
          "secenekler": ["PostCompact kancası", "compact eşleştiricili SessionStart kancası", "Her araçtan önce çalışan PreToolUse kancası", "Tur sonunda çalışan Stop kancası"],
          "dogru": 1,
          "ipucu": "Adı uygun görünen olay her zaman doğru olan değildir; çıktısı konuşmaya gireni ara.",
          "aciklama": "Belge PostCompact'ı değil, compact eşleştiricili SessionStart'ı önerir. Çıktısı konuşmaya geri giren odur.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/hooks",
            "kopya": "ders-action-05-hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Sıkıştırmadan sonra bağlamı yeniden vermek için PostCompact değil, compact eşleştiricili SessionStart kullanılır; çıktısını konuşmaya gerçekten geri sokan odur."
          }
        },
        {
          "id": "b06-d6-s3",
          "tur": "bosluk",
          "kart": 2,
          "soru": "Sıkıştırmadan sonra çalışan SessionStart kancasının girdisinde kaynak alanının değeri ___ olur.",
          "secenekler": ["startup", "resume", "compact", "clear"],
          "dogru": 2,
          "ipucu": "Değer, oturumun nasıl başladığını anlatır; burada oturum bir özetle sürüyor.",
          "aciklama": "compact kaynağıyla eşleşen SessionStart kancalarını Claude Code sıkıştırmadan sonra çalıştırır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "compact kaynağıyla eşleşen SessionStart kancalarını Claude Code sıkıştırmadan sonra çalıştırır ve çıktılarını sıkıştırılmış bağlama ekler."
          }
        },
        {
          "id": "b06-d6-s4",
          "tur": "coktan",
          "kart": 5,
          "soru": "Sohbet sıkıştırıldı ve kökte .claude/dongu-baglam.json işareti var. acilis.py saatin altına ne ekler?",
          "secenekler": ["Açılış özeti", "Döngü sürüyor; devir kartı ve kuyruk baştan okunur", "Bağlam eşiği uyarısı", "Bütün DURUM dosyası"],
          "dogru": 1,
          "ipucu": "Sohbet özetlendi ama döngü sürüyor; Claude'un neyi yeniden okuması gerekir, düşün.",
          "aciklama": "Kaynak compact ve işaret varsa kanca, döngünün sürdüğünü ve devir kartıyla kuyruk dosyasının baştan okunacağını söyleyen satırı ekler. Açılış özeti yalnız startup ve clear'da basılır.",
          "kaynak": {
            "adres": ".claude/hooks/acilis.py:6",
            "okuma": "2026-11-17",
            "dayanak": "Olayın source alanı compact ise ve kökte .claude/dongu-baglam.json işareti varsa saatin altına bir satır eklenir: döngü sürüyor, sohbet özetlendi; devir kartı ve kuyruk dosyası baştan okunur, iş Sonuç hücresi boş işten sürer.",
            "soz": "altına bir satır eklenir: döngü sürüyor, sohbet özetlendi; devir kartı ve kuyruk dosyası baştan okunur"
          }
        },
        {
          "id": "b06-d6-s5",
          "tur": "coktan",
          "kart": 5,
          "soru": "Kaynak compact ama kökte .claude/dongu-baglam.json işareti yok. acilis.py ne basar?",
          "secenekler": ["Saati ve döngü satırını", "Yalnız saati", "Saati ve bütün DURUM dosyasını"],
          "dogru": 1,
          "ipucu": "Ek satır için kaç koşulun birlikte gerektiğini hatırla.",
          "aciklama": "Ek satır için iki koşul birlikte gerekir: kaynak compact ve işaret var. Biri eksikse kanca yalnız saati basar.",
          "kaynak": {
            "adres": ".claude/hooks/acilis.py:26",
            "okuma": "2026-11-17",
            "dayanak": "Öteki her durumda, yani kaynak başka, işaret yok, girdi bozuk ya da işaret beklenmeyen biçimdeyse kanca yalnız saati basar.",
            "soz": "Öteki her durumda (source başka, işaret yok, girdi bozuk"
          }
        },
        {
          "id": "b06-d6-s6",
          "tur": "sirala",
          "kart": 1,
          "soru": "Uzun bir konuşmada olanları sıraya diz.",
          "adimlar": ["Bağlam penceresi dolmaya yaklaşır", "Claude Code konuşmayı özetler", "SessionStart kancası çalışır", "Kancanın çıktısı sıkıştırılmış bağlama eklenir"],
          "ipucu": "Kanca neyin ardından çalışıyordu?",
          "aciklama": "Önce pencere dolar ve sıkıştırma olur; SessionStart kancası ondan sonra çalışır ve çıktısı yeni bağlama girer.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "Bağlam penceresi dolunca sıkıştırma konuşmayı özetler; önemli bağlamı her sıkıştırmadan sonra yeniden vermek için compact eşleştiricili SessionStart kancası kullanılır."
          }
        },
        {
          "id": "b06-d6-s7",
          "tur": "coktan",
          "kart": 3,
          "soru": "Sıkıştırmadan sonra Claude son commit'leri yeniden görsün istiyorsun. Hangi tarif uygun?",
          "secenekler": ["Stop kancası 2 ile çıkıp commit'leri göstersin.", "PostCompact kancası son commit'leri bassın.", "compact eşleştiricili SessionStart kancası son commit'leri bassın."],
          "dogru": 2,
          "ipucu": "Hangi kancanın çıktısı sıkıştırmadan sonra bağlama giriyordu?",
          "aciklama": "Çıktısı sıkıştırmadan sonra konuşmaya geri giren, compact eşleştiricili SessionStart kancasıdır; PostCompact'ınki girmez. Kancanın komutu git log --oneline -5 olabilir, son commit'leri gösterir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "Örnekteki echo yerine değişen çıktı üreten herhangi bir komut konabilir, örneğin son commit'leri göstermek için git log --oneline -5."
          }
        },
        {
          "id": "b06-d6-s8",
          "tur": "coktan",
          "kart": 4,
          "soru": "Bizim .claude/settings.json'daki SessionStart kaydında eşleştirici yok. Buna göre acilis.py ne zaman çalışır?",
          "secenekler": ["Yalnız ilk açılışta (startup)", "Yalnız sıkıştırmadan sonra (compact)", "Her SessionStart'ta, sıkıştırmadan sonra da", "Hiç çalışmaz, eşleştirici zorunlu"],
          "dogru": 2,
          "ipucu": "Eşleştiricisi olmayan kancanın neyi süzdüğünü düşün.",
          "aciklama": "Eşleştirici yazılmamışsa kanca olayın her gelişinde çalışır; acilis.py de bu yüzden kaynağı kendisi okuyup ne basacağını seçer.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks",
            "kopya": "hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Eşleştiricisi “*”, boş ya da hiç yazılmamış kanca, olayın her gerçekleşmesinde çalışır."
          }
        }
      ]
    },
    {
      "id": "b06-d7",
      "baslik": "Bizde kanca yazmak; Claude Code kancası ile git kancası",
      "hedefler": [
        "Kancanın, testinin ve settings kaydının aynı işte yapıldığını anlatabilir.",
        "Git kancasını (git hook) Claude Code kancasından ayırt edebilir."
      ],
      "anlatim": [
        "Bizde yeni kanca kanca-denetim skill'iyle yazılır. Önce aynı işi yapan kanca aranır; sonra kanca .claude/hooks/<ad>.py, testi test_<ad>.py olarak yan yana yazılır.",
        "Kanca .claude/settings.json'a olay ve eşleşmesiyle kaydedilir; Claude Code kancası bu dosyada tanımlanır.",
        "Sonra kanca KARARLAR ve DURUM gibi gerçek kayıt dosyalarında denenir; bağlı belgeler güncellenir, testler ve denetim koşar; hepsi aynı commit'te.",
        "sistem-metni kuralı: kanca yazılınca testi de yazılır. Her durdurmaya iki test: bozma testi durdurması gereken yerde durdurduğunu, yanlış alarm testi yersiz durdurmadığını sınar.",
        "CLAUDE.md'ye göre .claude/settings.json değişikliği her seferinde sana sorulur. Kanca ekleme ve değiştirme sorulmaz: testi yazılır, doğrulayıcı (verifier) alt ajanı işi kontrol eder.",
        "Kanca klasöründe pre-commit ve commit-msg dosyaları da var, ama bunlar git kancasıdır: onları Claude Code değil git çalıştırır.",
        "Git kancalarının settings.json'da kaydı yok; git'in core.hooksPath ayarı kanca klasörünü gösterir ve onları böyle etkinleştirir."
      ],
      "terimler": [
        {"tr": "git kancası", "en": "git hook", "aciklama": "Git'in commit gibi anlarda çalıştırdığı betik; Claude Code kancası değildir ve settings.json'a kaydedilmez."}
      ],
      "sorular": [
        {
          "id": "b06-d7-s1",
          "tur": "sirala",
          "kart": 2,
          "soru": "kanca-denetim skill'ine göre yeni bir kancanın adımlarını sıraya diz.",
          "adimlar": ["Aynı işi yapan kanca var mı diye ara", "Kancayı ve testini yan yana yaz", "Kancayı settings.json'a kaydet", "Gerçek kayıtta dene", "Belgeleri güncelle, testleri ve denetimi koş"],
          "ipucu": "Yazmadan önce ne yapılır, kayıttan sonra ne denenir, düşün.",
          "aciklama": "Skill önce aramayı, sonra kod ve testi, kaydı, gerçek kayıtta koşuyu ve en sonda belgelerle sınamayı ister.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md:16",
            "okuma": "2026-11-17",
            "dayanak": "Adımlar sırasıyla şunlardır: önce aynı işi yapan kanca aranır, kod ve test yan yana yazılır, kanca settings.json'a kaydedilir, gerçek kayıtta koşulur, bağlı belgeler güncellenir ve testlerle denetim koşulur.",
            "soz": "Önce ara: aynı işi yapan kanca ya da kontrol var mı"
          }
        },
        {
          "id": "b06-d7-s2",
          "tur": "coktan",
          "kart": 0,
          "soru": "kanca-denetim skill'ine göre yeni bir kanca hangi dosyalarla gelir?",
          "secenekler": ["Yalnız .claude/hooks/<ad>.py", "Kanca dosyası ve yanında test_<ad>.py", "Yalnız settings.json'daki kayıt", "Kanca dosyası ve CLAUDE.md'ye eklenen bir kural satırı"],
          "dogru": 1,
          "ipucu": "Kartta yan yana yazılan iki dosyayı hatırla.",
          "aciklama": "Kanca .claude/hooks/<ad>.py, testi .claude/hooks/test_<ad>.py dosyasıdır; ikisi aynı işte yazılır.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md:17",
            "okuma": "2026-11-17",
            "dayanak": "Kod ve test yan yana durur: kanca .claude/hooks/<ad>.py, testi .claude/hooks/test_<ad>.py dosyasıdır.",
            "soz": "Kod ve test yan yana: kanca"
          }
        },
        {
          "id": "b06-d7-s3",
          "tur": "dogru-yanlis",
          "kart": 4,
          "soru": "Bizde kanca eklemek ya da değiştirmek, her seferinde sana sorulması gereken işlerdendir.",
          "dogru": false,
          "ipucu": "Kartta kanca ekleme ve değiştirmenin neyle güvenceye alındığı yazıyor.",
          "aciklama": "Liste settings.json değişikliğini sayar ama kanca ekleme ve değiştirmeyi dışarıda bırakır. Bunlar testi ve doğrulayıcısıyla sorulmadan yapılır.",
          "kaynak": {
            "adres": "CLAUDE.md:46",
            "okuma": "2026-11-17",
            "dayanak": "Her seferinde sorulanlar listesinde settings.json ve settings.local.json vardır, kanca ekleme ve değiştirme hariç; bunlar testi ve doğrulayıcısıyla sorulmaz.",
            "soz": "kanca ekleme ve değiştirme hariç: testi ve doğrulayıcısıyla sorulmaz"
          }
        },
        {
          "id": "b06-d7-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "sistem-metni kuralına göre kanca testinde en az ne bulunur?",
          "secenekler": ["Elle bir deneme", "Kullanıcının onayı", "Her durdurmaya bir bozma ve bir yanlış alarm testi", "Test gerekmez, kanca kesin kuraldır"],
          "dogru": 2,
          "ipucu": "Kanca hem durdurmalı hem de yersiz durdurmamalı; ikisi de sınanır.",
          "aciklama": "Kural her durdurma için iki test ister: bir bozma testi ve bir yanlış alarm testi.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md:33",
            "okuma": "2026-11-17",
            "dayanak": "Kanca ya da kontrol yazılınca testi de yazılır: her durdurma için bir bozma testi ve bir yanlış alarm testi.",
            "soz": "Kanca ya da kontrol yazılınca testi de yazılır: her durdurma için bir bozma testi ve bir yanlış alarm testi"
          }
        },
        {
          "id": "b06-d7-s5",
          "tur": "coktan",
          "kart": 5,
          "soru": ".claude/hooks/pre-commit dosyası kanca klasöründe duruyor. Onu kim çalıştırır?",
          "secenekler": ["Claude Code, settings.json'daki bir olayla", "Git, commit sırasında", "Claude, her cevabın sonunda"],
          "dogru": 1,
          "ipucu": "Dosyanın git kancası mı, Claude Code kancası mı olduğunu düşün.",
          "aciklama": "pre-commit bir git commit kancasıdır; onu Claude Code değil git çalıştırır ve git config ile etkinleşir.",
          "kaynak": {
            "adres": ".claude/hooks/pre-commit:2",
            "okuma": "2026-11-17",
            "dayanak": "Dosya bir git commit kancasıdır: commit'e girecek, sahnedeki içerikte denetim.py --sahne koşar.",
            "soz": "Git commit kancası: commit'e girecek (sahnedeki) içerikte denetim.py --sahne koşar"
          }
        },
        {
          "id": "b06-d7-s6",
          "tur": "eslestir",
          "kart": 6,
          "soru": "Her öğeyi doğru açıklamayla eşleştir.",
          "ciftler": [
            ["Claude Code kancası", "settings.json'a olay ve eşleşmesiyle kaydedilir"],
            ["pre-commit ve commit-msg", "Kanca klasöründe duran iki git kancası"],
            ["core.hooksPath ayarı", "Git'e kanca klasörünü gösterir"]
          ],
          "ipucu": "Önce hangisinin bir ayar, hangisinin dosya olduğunu ayır; Claude Code kendi ayar dosyasını okur.",
          "aciklama": "Claude Code kancası settings.json kaydıyla çalışır. pre-commit ve commit-msg aynı klasördeki git kancalarıdır; core.hooksPath ayarı git'e bu klasörü gösterir.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md:18",
            "okuma": "2026-11-17",
            "dayanak": "Kanca settings.json'a olay ve eşleşmesiyle kaydedilir; git kancaları, pre-commit ve commit-msg, aynı klasörde durur ve core.hooksPath bu klasörü gösterir.",
            "soz": "olay ve eşleşmesiyle. Git kancası"
          }
        },
        {
          "id": "b06-d7-s7",
          "tur": "coktan",
          "kart": 2,
          "soru": "Yeni kanca için hangi tarif bizim kurala uyar?",
          "secenekler": ["Kancayı yaz, kaydet; testi sonraki işe kalsın.", "Kancayı testiyle yaz ve kaydet; üçü aynı commit'te.", "Kancayı .claude/hooks'a koy; kayıt gerekmez."],
          "dogru": 1,
          "ipucu": "Kanca, testi ve kaydı ayrı işlere bölünebilir mi, düşün.",
          "aciklama": "Bitiş şartı kodu, testi, settings kaydını ve bağlı belgeleri aynı commit'te ister. Claude Code kancası settings.json'a kaydedilerek tanımlanır.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md:25",
            "okuma": "2026-11-17",
            "dayanak": "Bitiş şartı: kod ve testi var, testler kalan 0 ile geçer; settings kaydı, GECIS satırı, README sayısı ve denetim başlığı aynı commit'tedir.",
            "soz": "settings kaydı, GECIS satırı, README sayısı ve denetim başlığı aynı commit'te"
          }
        },
        {
          "id": "b06-d7-s8",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Claude Code kancası ___ tanımlanır: bir olay seçilir, istersen eşleştirici verilir ve çalışacak komut yazılır.",
          "secenekler": ["git config ayarında", "settings.json dosyasında", "CLAUDE.md'nin içinde", "bir skill'in adımlarında"],
          "dogru": 1,
          "ipucu": "Bizde kancaların kaydı hangi ayar dosyasındaydı?",
          "aciklama": "Claude Code kancaları settings.json'da tanımlanır; git kancası ise git'in kendi ayarıyla etkinleşir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/hooks",
            "kopya": "ders-101-12-hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Kancalar settings.json'da tanımlanır: bir olay seçilir, istenirse hangi araçlara uygulanacağını söyleyen bir eşleştirici konur ve çalışacak komut verilir."
          }
        }
      ]
    }
  ]
});
