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
        "Claude Code'a verdiğin talimat iki türlüdür. İstemini, CLAUDE.md'yi ve skill'leri model okur; ne yapacağına kendisi karar verir. Çoğu zaman uyar ama garanti yoktur. Kancayı (hook) ise sen ayarlarsın ve Claude Code onu her seferinde çalıştırır, model ne karar verirse versin. Bu ikinci türe kesin (deterministic) talimat denir.",
        "Ne zaman kanca? Belgenin ölçüsü şu: CLAUDE.md'deki bir satırı ne kadar vurgularsan vurgula Claude yine kaçırıyorsa, o satır kancaya aittir. Tersi de geçerli: yalnız tercih olan bir iş için kanca yazılmışsa silinir, karar Claude'a bırakılır. Örnek: üretilmiş dosyaların durduğu bir klasörü hiç düzenlememek kanca işidir.",
        "Bizim klasörde de aynı ilke yazılı. CLAUDE.md satır 53: “Mekanizmasız kural dilektir, aynı hata tekrar eder.” sistem-metni skill'i, satır 34: “Kesin kural yalnız metne bırakılmaz; her seferinde olması gereken mekanik iş kancaya verilir.”"
      ],
      "terimler": [
        {"tr": "kanca", "en": "hook", "aciklama": "Claude Code'un oturumun belli anlarında kendiliğinden çalıştırdığı, senin ayarladığın komut."},
        {"tr": "kesin talimat", "en": "deterministic", "aciklama": "Modelin kararına bırakılmayan, Claude Code'un her seferinde uyguladığı talimat."}
      ],
      "sorular": [
        {
          "id": "b06-d1-s1",
          "tur": "coktan",
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
          "soru": "CLAUDE.md'ye “her düzenlemeden sonra biçimlendiriciyi çalıştır” yazdın, üç kez vurguladın; Claude yine arada atlıyor. Belgeye göre ne yaparsın?",
          "secenekler": ["Satırı bir kez daha, büyük harfle yazarım", "Bu işi bir kancaya taşırım", "Satırı silerim, başka bir şey eklemem", "Satırı bir skill'e taşırım"],
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
          "soru": "CLAUDE.md satır 53: “Bir kural yazdığında ihlalini yakalayacak mekanizmayı da yaz.” Bu satır sana ne söylüyor?",
          "secenekler": ["Kuralın yanına onu yakalayan bir denetim ya da betik de yazılır", "Kural yalnız CLAUDE.md'ye yazılır, başka iş gerekmez", "Kural bozulunca kullanıcıya hemen soru açılır", "Mekanizma yalnız kullanıcı isterse yazılır"],
          "dogru": 0,
          "ipucu": "Kartta mekanizmasız kurala ne dendiğini hatırla.",
          "aciklama": "Satır, kuralın yanında onu yakalayacak bir denetim kontrolü, damga ya da betik ister. Mekanizması olmayan kural yalnız dilek sayılır.",
          "kaynak": {
            "adres": "CLAUDE.md:53",
            "okuma": "2026-11-15",
            "dayanak": "Bir kural yazıldığında ihlalini yakalayacak mekanizma da yazılır, örneğin denetim kontrolü, damga ya da betik; mekanizmasız kural dilektir ve aynı hata tekrar eder."
          }
        },
        {
          "id": "b06-d1-s6",
          "tur": "bosluk",
          "soru": "sistem-metni skill'ine göre kesin kural yalnız metne bırakılmaz; her seferinde olması gereken mekanik iş ___ verilir.",
          "secenekler": ["kullanıcıya", "bir alt ajana", "CLAUDE.md'ye", "kancaya"],
          "dogru": 3,
          "ipucu": "Her seferinde çalışması kimin elinde garanti, düşün.",
          "aciklama": "Her seferinde olması gereken iş Claude'un hatırlamasına bırakılmaz; kanca onu her seferinde yapar.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md:34",
            "okuma": "2026-11-15",
            "dayanak": "Yeni ya da taşınan her kural mekanizmasıyla yazılır; kesin kural yalnız metne bırakılmaz, her seferinde olması gereken mekanik iş kancaya verilir."
          }
        },
        {
          "id": "b06-d1-s7",
          "tur": "coktan",
          "soru": "Claude'un üretilmiş dosyaların durduğu src/gen klasörünü hiç düzenlememesini istiyorsun. Hangi tarif bunu garanti eder?",
          "secenekler": ["CLAUDE.md'ye “src/gen'i asla düzenleme” satırını kalın harfle ekle.", "src/gen'e yazan her çağrıyı durduran bir kanca yaz.", "Her sohbetin başında bu kuralı istemine ekle."],
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
        "Her kanca bir olaya (event) bağlanır. Claude Code oturumda o ana gelince olaya kayıtlı kancaları çalıştırır. SessionStart: oturum başlarken ya da sürdürülürken. UserPromptSubmit: istemini gönderince, Claude işlemeden önce. PreToolUse: bir araç çağrısı çalışmadan önce. PostToolUse: araç çağrısı başarıyla bitince.",
        "Stop: Claude cevabını bitirince. SubagentStart: bir alt ajan açılınca. SubagentStop: alt ajan işini bitirince. Başka olaylar da var; bizim ayarda kullanılan yedisi bunlar. Bir olaya birden çok kanca kayıtlı olabilir; olay gelince eşleşen kancalar aynı anda çalışır.",
        "Bizim .claude/settings.json dosyasında yedisi de kayıtlı: SessionStart satır 49'da (acilis.py), UserPromptSubmit satır 61'de (saat damgası), PreToolUse satır 73'te (korumalar), SubagentStart satır 184'te, SubagentStop satır 196'da, PostToolUse satır 217'de, Stop satır 241'de."
      ],
      "terimler": [
        {"tr": "olay", "en": "event", "aciklama": "Oturumda Claude Code'un kanca çalıştırabildiği belirli an; istem gönderilince ya da araç çağrısından önce gibi."}
      ],
      "sorular": [
        {
          "id": "b06-d2-s1",
          "tur": "eslestir",
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
          "soru": "SubagentStart bir alt ajan açılınca, SubagentStop alt ajan işini bitirince çalışır.",
          "dogru": true,
          "ipucu": "Subagent alt ajan demek; Start ve Stop'un anlamına bak.",
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
          "soru": "Bizim ayarda doğrulayıcı kilidi kancası, verifier adlı alt ajan açılınca çalışıyor. Bu kayıt .claude/settings.json'da hangi olayın altındadır?",
          "secenekler": ["SubagentStop", "PreToolUse", "SubagentStart", "UserPromptSubmit"],
          "dogru": 2,
          "ipucu": "Alt ajanın açılış anını yakalayan olayı düşün.",
          "aciklama": "Satır 184'te SubagentStart açılır ve altındaki kayıt verifier ajanında dogrulayici_kilidi.py'yi çalıştırır.",
          "kaynak": {
            "adres": ".claude/settings.json:184",
            "okuma": "2026-11-15",
            "dayanak": "settings.json satır 184'te SubagentStart olayı başlar ve altındaki kayıt verifier eşleşmesiyle dogrulayici_kilidi.py'yi çalıştırır."
          }
        },
        {
          "id": "b06-d2-s5",
          "tur": "sirala",
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
          "soru": ".claude/settings.json satır 61'de saat damgası kancası UserPromptSubmit olayına kayıtlı. Bu kanca ne zaman çalışır?",
          "secenekler": ["Claude cevabını bitirince, turun sonunda", "Bir araç çağrısı başarıyla bittikten hemen sonra", "Bir alt ajan işini bitirdiği anda", "İstem gönderilince, Claude işlemeden önce"],
          "dogru": 3,
          "ipucu": "Olayın adını parçalarına ayır: User, Prompt, Submit.",
          "aciklama": "UserPromptSubmit, sen istem gönderince Claude onu işlemeden önce çalışır. Satır 61'deki kayıt saat_damgasi.py'yi tam o an çalıştırır.",
          "kaynak": {
            "adres": ".claude/settings.json:61",
            "okuma": "2026-11-15",
            "dayanak": "settings.json satır 61'de UserPromptSubmit olayı başlar ve altındaki kayıt saat_damgasi.py'yi çalıştırır."
          }
        },
        {
          "id": "b06-d2-s7",
          "tur": "dogru-yanlis",
          "soru": "Bizim .claude/settings.json dosyasında PostToolUse olayına hiç kanca kayıtlı değil.",
          "dogru": false,
          "ipucu": "Kartta yedi olayın hangi satırlarda kayıtlı olduğu sayılıyor.",
          "aciklama": "Satır 217'de PostToolUse açılır; altında Write|Edit ve Bash eşleşmeli iki kayıt var.",
          "kaynak": {
            "adres": ".claude/settings.json:217",
            "okuma": "2026-11-15",
            "dayanak": "settings.json satır 217'de PostToolUse olayı başlar; altında Write|Edit eşleşmeli seçim sayfası notu ve Bash eşleşmeli paket Bash kaydı olmak üzere iki kayıt vardır."
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
        "Eşleştiricisi olmayan kanca, olayının her gerçekleşmesinde çalışır. Eşleştirici bunu daraltır. PreToolUse ve PostToolUse gibi araç olaylarında araç adına bakar. Eşleştirici Bash ise kanca Bash aracında, Edit|Write ise yalnız Edit ya da Write aracında çalışır; Read ya da başka bir araçta çalışmaz.",
        "Dik çizgi (|) “ya da” demektir. Yalnız harf, rakam, alt çizgi, tire, boşluk, virgül ve dik çizgi taşıyan eşleştirici tam adla karşılaştırılır. Nokta ya da yıldız gibi başka bir işaret taşıyorsa düzenli ifade sayılır: mcp__.* adında mcp__ geçen her araçta çalışır.",
        "Bizde: settings.json satır 75'te eşleştirici Bash; kabuk koruması koruma.py, Bash çağrılarından önce çalışır. Satır 119'da Edit|Write|MultiEdit|NotebookEdit; yazma koruması bu dört araçtan önce çalışır. Satır 86'da Read|Grep|Glob; okuma koruması bu üç araçtan önce çalışır."
      ],
      "terimler": [
        {"tr": "eşleştirici", "en": "matcher", "aciklama": "Kancanın olayın hangi durumunda çalışacağını süzen alan; araç olaylarında araç adına bakar."}
      ],
      "sorular": [
        {
          "id": "b06-d3-s1",
          "tur": "coktan",
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
          "soru": ".claude/settings.json satır 86'da okuma korumasının kaydı PreToolUse altında, eşleştiricisi Read|Grep|Glob. Bu kanca ne zaman çalışır?",
          "secenekler": ["Claude Edit ya da Write ile bir dosyayı düzenlemeden önce", "Read, Grep ya da Glob işini bitirdikten sonra", "Read, Grep ya da Glob aracı çalışmadan önce", "Claude Bash ile bir kabuk komutu çalıştırmadan önce"],
          "dogru": 2,
          "ipucu": "Olay adındaki Pre ne zamanı anlatıyor, dik çizgi hangi adları ayırıyor; ikisini birleştir.",
          "aciklama": "Kayıt PreToolUse altında olduğu için çağrıdan önce çalışır; dik çizgi üç aracın her birini kapsar.",
          "kaynak": {
            "adres": ".claude/settings.json:86",
            "okuma": "2026-11-15",
            "dayanak": "PreToolUse altındaki bu kayıtta eşleştirici Read|Grep|Glob ve çalışan komut okuma_kontrol.py'dir."
          }
        },
        {
          "id": "b06-d3-s5",
          "tur": "eslestir",
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
          "soru": "Bir kancanın yalnız Claude Edit ya da Write aracıyla dosya yazarken çalışmasını istiyorsun. Claude'a hangi tarifi verirsin?",
          "secenekler": ["PreToolUse kancası ekle, eşleştiricisi boş kalsın.", "PreToolUse kancası ekle, eşleştiricisi Bash olsun.", "PreToolUse kancası ekle, eşleştiricisi Edit|Write olsun.", "PreToolUse kancası ekle, eşleştiricisi Edit|Write|Bash|Read olsun."],
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
          "tur": "dogru-yanlis",
          "soru": "Edit|Write eşleştiricili kanca, Claude bir dosyayı kabuk komutuyla değiştirdiğinde de çalışır.",
          "dogru": false,
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
        "Kanca işini bitirince bir çıkış kodu verir. 0: itirazım yok, iş sürer. 2: durdur. PreToolUse kancası 2 ile çıkarsa araç çağrısı hiç çalışmaz. Kancanın hata akışına yazdığı ileti Claude'a geri bildirim olarak gider; Claude neden durdurulduğunu görür ve yolunu değiştirir.",
        "Dikkat: 1 hata gibi görünür ama durdurmaz; Claude komutu yine çalıştırır. Durdurmak istiyorsan 2 kullan. 0 da onay değildir: PreToolUse'da 0 ile çıkınca çağrı normal izin akışından geçer. Bazı olaylar durdurulamaz; SessionStart'ta 2, iletiyi yalnız sana gösterir ve iş sürer.",
        "Bizde örnek: koruma.py her Bash çağrısından önce çalışır. Örneğin kayıt dosyasına kabukla yazan ya da kaydedilmemiş işi silen bir git komutu görürse çağrı çıkış 2 ile durur; her bulgu ve tek “Ne yapılmalı” satırı hata akışına yazılır."
      ],
      "terimler": [
        {"tr": "çıkış kodu", "en": "exit code", "aciklama": "Kanca bitince Claude Code'a bıraktığı sayı; 0 itiraz yok, 2 durdur demektir."},
        {"tr": "hata akışı", "en": "stderr", "aciklama": "Kancanın hata ve gerekçe iletisini yazdığı çıkış kanalı; çıkış 2'de Claude'a geri bildirim olur."}
      ],
      "sorular": [
        {
          "id": "b06-d4-s1",
          "tur": "coktan",
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
          "soru": "koruma.py'nin başındaki açıklama (satır 3), bir kural tutunca ne olduğunu söylüyor. Hangisi?",
          "secenekler": ["Çıkış 1 ile durur; bulgular yalnız bir kayıt dosyasına yazılır", "Çıkış 0 ile biter; bulgular CLAUDE.md'nin sonuna eklenir", "Kanca kullanıcıya soru açar ve cevabı gelene kadar bekler", "Çıkış 2 ile durur; bulgular ve “Ne yapılmalı” satırı hata akışına yazılır"],
          "dogru": 3,
          "ipucu": "Bu derste durduran sayı hangisiydi?",
          "aciklama": "koruma.py durdurmak için 2 ile çıkar ve gerekçeyi hata akışına yazar; Claude o iletiyi görür.",
          "kaynak": {
            "adres": ".claude/hooks/koruma.py:3",
            "okuma": "2026-11-15",
            "dayanak": "Aşağıdaki durumlardan biri varsa çağrı çıkış 2 ile durur, her bulgu ve tek “Ne yapılmalı” satırı stderr'e yazılır."
          }
        },
        {
          "id": "b06-d4-s5",
          "tur": "dogru-yanlis",
          "soru": "PreToolUse kancası 0 ile çıkarsa bu, çağrıyı onaylamak demektir; izin sorusu da atlanır.",
          "dogru": false,
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
        "Kanca durdurmadan da konuşabilir. 0 ile çıkar ve Claude Code'a yapılı bir çıktı (JSON) yazar. Bu çıktıda additionalContext alanına konan metin Claude'un bağlamına eklenir. Claude notu bir sonraki istekte okur; sohbet ekranında sana mesaj olarak görünmez.",
        "Not nerede belirir? SessionStart'ta konuşmanın başında, UserPromptSubmit'te gönderdiğin istemin yanında, PostToolUse'da aracın sonucunun yanında. Stop'ta turun sonunda belirir; konuşma sürer, Claude notu görüp ona göre davranabilir.",
        "Bizde saat damgası kancası (saat_damgasi.py) her istemde İstanbul saatini ölçer ve bağlama tek satır ekler: “Saat: GG.AA.YYYY SS:DD Europe/Istanbul”. Saat ölçülmeden yazılmaz, bu satırdan okunur. izin_sayisi.py ise bir Stop kancasıdır; sorunlu cümle bulursa turu durdurmadan not bırakır."
      ],
      "terimler": [
        {"tr": "ek bağlam", "en": "additionalContext", "aciklama": "Kancanın JSON çıktısında, Claude'un bağlamına eklenecek metni taşıyan alan."}
      ],
      "sorular": [
        {
          "id": "b06-d5-s1",
          "tur": "coktan",
          "soru": "Bir kanca, çağrıyı durdurmadan Claude'a not bırakmak istiyor. Hangi yol doğru?",
          "secenekler": ["2 ile çıkıp notu hata akışına yazmak", "0 ile çıkıp notu additionalContext alanına yazmak", "1 ile çıkıp notu ekrana basmak", "Notu CLAUDE.md'nin sonuna eklemek"],
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
          "tur": "dogru-yanlis",
          "soru": "Bir Stop kancası additionalContext ile not bırakırsa konuşma sürer ve Claude bu nota göre davranabilir.",
          "dogru": true,
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
          "soru": "Saat damgası kancası her kullanıcı turunda İstanbul saatini ölçer ve bağlama ___ ekler.",
          "secenekler": ["tek satır", "bütün DURUM dosyasını", "bir uyarı penceresi", "yeni bir sohbet"],
          "dogru": 0,
          "ipucu": "Notun kısa olduğunu, “Saat:” ile başladığını hatırla.",
          "aciklama": "Kanca “Saat: GG.AA.YYYY SS:DD Europe/Istanbul” biçiminde tek satır ekler; saat bu satırdan okunur.",
          "kaynak": {
            "adres": ".claude/hooks/saat_damgasi.py:3",
            "okuma": "2026-11-15",
            "dayanak": "Kanca her kullanıcı turunda Europe/Istanbul saatini ölçer ve bağlama tek satır ekler; saat ölçülmeden yazılmaz, bu satırdan okunur."
          }
        },
        {
          "id": "b06-d5-s5",
          "tur": "coktan",
          "soru": "Her istemde Claude'un o anki git dalını bilmesini istiyorsun. Claude'a hangi tarifi verirsin?",
          "secenekler": ["Bir PreToolUse kancası yaz; her araçtan önce dalı kontrol edip 2 ile çıksın.", "CLAUDE.md'ye bugünkü dalın adını yaz.", "Bir UserPromptSubmit kancası yaz; dalı additionalContext ile eklesin."],
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
          "soru": "izin_sayisi.py bir Stop kancası. Turdaki metinde sorunlu bir cümle bulunca ne yapar?",
          "secenekler": ["Turu 2 ile durdurur ve gerekçeyi hata akışına yazar", "Sorunlu cümleyi metinden kendiliğinden siler", "Kullanıcıya ayrı bir pencerede soru açar", "Turu durdurmadan Claude'a not bırakır"],
          "dogru": 3,
          "ipucu": "Kartta izin_sayisi.py'nin turu durdurup durdurmadığı yazıyor.",
          "aciklama": "Kanca durdurmaz; 0 ile çıkar ve additionalContext taşıyan tek satır JSON yazar.",
          "kaynak": {
            "adres": ".claude/hooks/izin_sayisi.py:3",
            "okuma": "2026-11-15",
            "dayanak": "Turun asistan metinlerinde izin ya da şifre penceresi için sayı veren, ölçü işareti taşımayan cümle varsa kanca durdurmadan not verir: çıkış 0 ve stdout'a tek satır JSON."
          }
        },
        {
          "id": "b06-d5-s7",
          "tur": "eslestir",
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
        "Konuşma uzayıp bağlam penceresi dolunca Claude Code konuşmayı özetler; buna sıkıştırma denir. Özetlerken önemli ayrıntı kaybolabilir. SessionStart olayı yalnız oturum açılınca değil, sıkıştırmadan hemen sonra da çalışır. Kancanın yazdığı metin sıkıştırılmış bağlama eklenir; kaybolmaması gereken bilgi böyle geri verilir.",
        "SessionStart kancasının girdisinde kaynak (source) alanı var: startup, resume, clear, compact ya da fork. Eşleştirici compact olursa kanca yalnız sıkıştırmadan sonra çalışır. Dikkat: bağlamı geri vermek için PostCompact değil, compact eşleştiricili SessionStart kullanılır; çıktısı konuşmaya geri giren odur.",
        "Bizde SessionStart kaydında eşleştirici yok; yani acilis.py her SessionStart'ta, sıkıştırmadan sonra da çalışır ve hep saati basar. Kaynak compact ise ve kökte .claude/dongu-baglam.json işareti varsa saatin altına bir satır ekler: döngü sürüyor, sohbet özetlendi; devir kartı ve kuyruk dosyası baştan okunur."
      ],
      "terimler": [
        {"tr": "sıkıştırma", "en": "compaction", "aciklama": "Bağlam penceresi dolarken Claude Code'un konuşmayı özetle değiştirmesi."},
        {"tr": "kaynak", "en": "source", "aciklama": "SessionStart girdisinde oturumun nasıl başladığını söyleyen alan: startup, resume, clear, compact ya da fork."}
      ],
      "sorular": [
        {
          "id": "b06-d6-s1",
          "tur": "dogru-yanlis",
          "soru": "SessionStart olayı yalnız yeni bir oturum açılınca çalışır; sıkıştırmadan sonra çalışmaz.",
          "dogru": false,
          "ipucu": "Kaynak alanının alabildiği değerleri hatırla.",
          "aciklama": "compact eşleştiricili bir SessionStart kancası sıkıştırmadan hemen sonra çalışır.",
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
          "soru": "Sıkıştırmadan sonra Claude'a önemli bir bilgiyi yeniden vermek istiyorsun. Belge hangi kancayı öneriyor?",
          "secenekler": ["PostCompact kancası", "compact eşleştiricili SessionStart kancası", "Her araç çağrısından önce çalışan PreToolUse kancası", "Claude cevabını bitirince çalışan Stop kancası"],
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
          "soru": "Döngü sürerken sohbet sıkıştırıldı ve kökte .claude/dongu-baglam.json işareti var. acilis.py saatin altına ne ekler?",
          "secenekler": ["Açık işler ve son KARARLAR başlıklarından oluşan açılış özeti", "Döngü sürüyor, devir kartı ve kuyruk baştan okunur", "Bağlam eşiğinin aşıldığını söyleyen uyarı", "Bütün DURUM dosyası"],
          "dogru": 1,
          "ipucu": "Sohbet özetlendi ama döngü sürüyor; Claude'un neyi yeniden okuması gerekir, düşün.",
          "aciklama": "Kaynak compact ve işaret varsa kanca, döngünün sürdüğünü ve devir kartıyla kuyruk dosyasının baştan okunacağını söyleyen satırı ekler. Açılış özeti yalnız startup ve clear'da basılır.",
          "kaynak": {
            "adres": ".claude/hooks/acilis.py:6",
            "okuma": "2026-11-15",
            "dayanak": "Olayın source alanı compact ise ve kökte .claude/dongu-baglam.json işareti varsa saatin altına bir satır eklenir: döngü sürüyor, sohbet özetlendi; devir kartı ve kuyruk dosyası baştan okunur, iş Sonuç hücresi boş işten sürer."
          }
        },
        {
          "id": "b06-d6-s5",
          "tur": "dogru-yanlis",
          "soru": "Kaynak compact olsa bile kökte .claude/dongu-baglam.json işareti yoksa acilis.py yalnız saati basar.",
          "dogru": true,
          "ipucu": "Ek satır için kaç koşulun birlikte gerektiğini hatırla.",
          "aciklama": "Özet satırı için iki koşul birlikte gerekir: kaynak compact ve işaret var. Biri eksikse kanca yalnız saati basar.",
          "kaynak": {
            "adres": ".claude/hooks/acilis.py:20",
            "okuma": "2026-11-15",
            "dayanak": "Öteki her durumda, yani kaynak başka, işaret yok, girdi bozuk ya da işaret beklenmeyen biçimdeyse kanca yalnız saati basar."
          }
        },
        {
          "id": "b06-d6-s6",
          "tur": "sirala",
          "soru": "Uzun bir konuşmada olanları sıraya diz.",
          "adimlar": ["Bağlam penceresi dolmaya yaklaşır", "Claude Code konuşmayı özetler", "compact eşleştiricili SessionStart kancası çalışır", "Kancanın çıktısı sıkıştırılmış bağlama eklenir"],
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
          "soru": "Sıkıştırmadan sonra Claude'un son commit'leri yeniden görmesini istiyorsun. Hangi tarif uygun?",
          "secenekler": ["Bir Stop kancası ekle; commit'leri 2 ile çıkarak göstersin.", "PostCompact kancası ekle; sıkıştırma bitince git log --oneline -5 çıktısını bassın.", "compact eşleştiricili SessionStart kancası ekle; git log --oneline -5 bassın."],
          "dogru": 2,
          "ipucu": "Hangi kancanın çıktısı sıkıştırmadan sonra bağlama giriyordu?",
          "aciklama": "Çıktısı sıkıştırmadan sonra konuşmaya geri giren, compact eşleştiricili SessionStart kancasıdır; PostCompact'ınki girmez, Stop ise tur sonunda çalışır. git log --oneline -5 son commit'leri gösterir.",
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
        "Bizde yeni kanca kanca-denetim skill'iyle yazılır. Önce aynı işi yapan kanca aranır. Kod ve test yan yana durur: .claude/hooks/<ad>.py ve test_<ad>.py. Kanca .claude/settings.json'a olay ve eşleşmesiyle kaydedilir. Sonra gerçek kayıtta denenir, bağlı belgelerdeki sayılar güncellenir, testler ve denetim koşar; hepsi aynı commit'te.",
        "sistem-metni kuralı: kanca yazılınca testi de yazılır; her durdurma için bir bozma testi ve bir yanlış alarm testi. Kanca ekleme ve değiştirme, her seferinde kullanıcıya sorulan işlerden değildir; testi ve doğrulayıcısıyla yapılır (CLAUDE.md satır 46).",
        "Kanca klasöründe pre-commit ve commit-msg dosyaları da var, ama bunlar git kancasıdır. Onları Claude Code değil git çalıştırır: pre-commit commit'e girecek içerikte denetimi koşar, bulgu varsa commit durur. settings.json'da kayıtları yok; git config core.hooksPath .claude/hooks ayarıyla etkinleşirler."
      ],
      "terimler": [
        {"tr": "git kancası", "en": "git hook", "aciklama": "Git'in commit gibi anlarda çalıştırdığı betik; Claude Code kancası değildir ve settings.json'a kaydedilmez."}
      ],
      "sorular": [
        {
          "id": "b06-d7-s1",
          "tur": "sirala",
          "soru": "kanca-denetim skill'ine göre yeni bir kancanın adımlarını sıraya diz.",
          "adimlar": ["Aynı işi yapan kanca var mı diye ara", "Kancayı ve testini yan yana yaz", "Kancayı settings.json'a olay ve eşleşmesiyle kaydet", "Gerçek kayıtta koş, uyarı sayısını yaz", "Bağlı belgeleri güncelle, testleri ve denetimi koş"],
          "ipucu": "Yazmadan önce ne yapılır, kayıttan sonra ne denenir, düşün.",
          "aciklama": "Skill önce aramayı, sonra kod ve testi, kaydı, gerçek kayıtta koşuyu ve en sonda belgelerle sınamayı ister.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md:16",
            "okuma": "2026-11-15",
            "dayanak": "Adımlar sırasıyla şunlardır: önce aynı işi yapan kanca aranır, kod ve test yan yana yazılır, kanca settings.json'a kaydedilir, gerçek kayıtta koşulur, bağlı belgeler güncellenir ve testlerle denetim koşulur."
          }
        },
        {
          "id": "b06-d7-s2",
          "tur": "coktan",
          "soru": "kanca-denetim skill'ine göre yeni bir kanca hangi dosyalarla gelir?",
          "secenekler": ["Yalnız .claude/hooks/<ad>.py", "Kanca dosyası ve yanında test_<ad>.py", "Yalnız settings.json'daki kayıt", "Kanca dosyası ve CLAUDE.md'ye eklenen bir kural satırı"],
          "dogru": 1,
          "ipucu": "Bu dersin ilk kartında yan yana duran iki dosyayı hatırla.",
          "aciklama": "Kanca .claude/hooks/<ad>.py, testi .claude/hooks/test_<ad>.py dosyasıdır; ikisi aynı işte yazılır.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md:17",
            "okuma": "2026-11-15",
            "dayanak": "Kod ve test yan yana durur: kanca .claude/hooks/<ad>.py, testi .claude/hooks/test_<ad>.py dosyasıdır."
          }
        },
        {
          "id": "b06-d7-s3",
          "tur": "dogru-yanlis",
          "soru": "Bizde kanca eklemek ya da değiştirmek, her seferinde kullanıcıya sorulması gereken işler listesindedir.",
          "dogru": false,
          "ipucu": "Kartta kanca ekleme ve değiştirmenin neyle güvenceye alındığı yazıyor.",
          "aciklama": "Liste settings.json değişikliğini sayar ama kanca ekleme ve değiştirmeyi dışarıda bırakır. Bunlar testi ve doğrulayıcısıyla sorulmadan yapılır.",
          "kaynak": {
            "adres": "CLAUDE.md:46",
            "okuma": "2026-11-15",
            "dayanak": "Her seferinde sorulanlar listesinde settings.json ve settings.local.json vardır, kanca ekleme ve değiştirme hariç; bunlar testi ve doğrulayıcısıyla sorulmaz."
          }
        },
        {
          "id": "b06-d7-s4",
          "tur": "coktan",
          "soru": "sistem-metni skill'ine göre bir kanca yazılınca testinde en az ne bulunur?",
          "secenekler": ["Bir kez elle denemek yeter, ayrıca test yazılmaz", "Kullanıcının yazılı onayı", "Her durdurmaya bir bozma ve bir yanlış alarm testi", "Test gerekmez, kanca zaten kesin kuraldır"],
          "dogru": 2,
          "ipucu": "Kanca hem durdurmalı hem de yersiz durdurmamalı; ikisi de sınanır.",
          "aciklama": "Kural her durdurma için iki test ister: bir bozma testi ve bir yanlış alarm testi.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md:36",
            "okuma": "2026-11-15",
            "dayanak": "Kanca ya da kontrol yazılınca testi de yazılır: her durdurma için bir bozma testi ve bir yanlış alarm testi."
          }
        },
        {
          "id": "b06-d7-s5",
          "tur": "dogru-yanlis",
          "soru": ".claude/hooks/pre-commit dosyası bir Claude Code kancasıdır; settings.json'daki bir olaya kayıtlıdır.",
          "dogru": false,
          "ipucu": "Bu dosyayı kim çalıştırıyor: Claude Code mu, git mi?",
          "aciklama": "pre-commit bir git commit kancasıdır; onu Claude Code değil git çalıştırır ve git config ile etkinleşir.",
          "kaynak": {
            "adres": ".claude/hooks/pre-commit:2",
            "okuma": "2026-11-15",
            "dayanak": "Dosya bir git commit kancasıdır: commit'e girecek, sahnedeki içerikte denetim.py --sahne koşar."
          }
        },
        {
          "id": "b06-d7-s6",
          "tur": "eslestir",
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
            "okuma": "2026-11-15",
            "dayanak": "Kanca settings.json'a olay ve eşleşmesiyle kaydedilir; git kancaları, pre-commit ve commit-msg, aynı klasörde durur ve core.hooksPath bu klasörü gösterir."
          }
        },
        {
          "id": "b06-d7-s7",
          "tur": "coktan",
          "soru": "Claude'dan yeni bir kanca istiyorsun. Hangi tarif bizim kurala uyar?",
          "secenekler": ["Kancayı yaz ve settings.json'a kaydet; testini sonraki bir işte ayrıca yazarız.", "Kancayı testiyle yaz, settings.json'a kaydet; üçü aynı commit'te.", "Kancayı .claude/hooks'a koy, kayıt gerekmez; git onu kendisi bulur."],
          "dogru": 1,
          "ipucu": "Kanca, testi ve kaydı ayrı işlere bölünebilir mi, düşün.",
          "aciklama": "Bitiş şartı kodu, testi, settings kaydını ve bağlı belgeleri aynı commit'te ister. Claude Code kancası settings.json'a kaydedilerek tanımlanır.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md:25",
            "okuma": "2026-11-15",
            "dayanak": "Bitiş şartı: kod ve testi var, testler kalan 0 ile geçer; settings kaydı, GECIS satırı, README sayısı ve denetim başlığı aynı commit'tedir."
          }
        },
        {
          "id": "b06-d7-s8",
          "tur": "bosluk",
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
