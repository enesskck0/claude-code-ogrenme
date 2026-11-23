// icerik/birim-06.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b06",
  "sira": 6,
  "baslik": "Kanca (hook)",
  "amac": "Kancanın Claude Code'un her seferinde uyguladığı kesin kural olduğunu anlatabilmek; bir komut durduğunda, Claude sen söylemeden bir şey bildiğinde ya da kendiliğinden düzelttiğinde bunun hangi kancadan ve hangi andan geldiğini ayırt edebilmek.",
  "dersler": [
    {
      "id": "b06-d1",
      "baslik": "Kanca (hook) nedir; kesin kural",
      "hedefler": [
        "Modelin karar verdiği talimat ile Claude Code'un her seferinde uyguladığı kural arasındaki farkı anlatabilir.",
        "Bir kuralın kancaya taşınacağını ya da metinde kalacağını ayırt edebilir."
      ],
      "anlatim": [
        "İstemini, CLAUDE.md'yi ve skill'leri model okur, uyup uymamaya kendisi karar verir. Çoğu zaman uyar ama garanti yoktur.",
        "Kancayı (hook) ise sen ayarlarsın; Claude Code onu model ne düşünürse düşünsün her seferinde çalıştırır. Bu türe kesin (deterministic) talimat denir.",
        "Belgenin ölçüsü: vurguladığın halde Claude'un yine kaçırdığı satır kancaya aittir. Tersi de geçerli: yalnız tercih için yazılmış kanca silinir, karar Claude'a kalır.",
        "Bizim CLAUDE.md'de kanca gibi mekanizma yalnız geri alınamaz zarar, güvenlik sınırı, para, dışa gönderim ve sana ulaşıp tekrar eden hata için yazılır.",
        "Biçim ve üslup kuralına mekanizma yazılmaz: kayarsa söylersin, ancak tekrar ederse mekanizmayı hak eder."
      ],
      "terimler": [
        {
          "tr": "kanca",
          "en": "hook",
          "aciklama": "Claude Code'un oturumun belli anlarında kendiliğinden çalıştırdığı, senin ayarladığın komut."
        },
        {
          "tr": "kesin talimat",
          "en": "deterministic",
          "aciklama": "Modelin kararına bırakılmayan, Claude Code'un her seferinde uyguladığı talimat."
        }
      ],
      "sorular": [
        {
          "id": "b06-d1-s1",
          "tur": "bosluk",
          "kart": 0,
          "soru": "CLAUDE.md \"her değişiklikten sonra testi koş\" diyor; Claude test koşmadan \"bitti\" dedi, çünkü ___.",
          "secenekler": [
            "CLAUDE.md bu oturumda yüklenmedi",
            "model bu turda satıra uymadı",
            "testi koşturan kanca bozuldu"
          ],
          "dogru": 1,
          "ipucu": "Satırı kim okuyor ve uyup uymamaya kim karar veriyor, düşün.",
          "aciklama": "CLAUDE.md satırını model okur ve o turda uyup uymamaya kendisi karar verir; çoğu zaman uyar ama garanti yoktur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir satırı ne kadar güçlü yazarsan yaz, Claude'un o turda ona uyup uymaması yine Claude'un kararıdır."
          }
        },
        {
          "id": "b06-d1-s7",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Claude \"src/gen yasağını bilmiyordum\" dedi ama oradaki düzenlemesi yine durdu, çünkü yasağı ___ uyguluyor.",
          "secenekler": [
            "CLAUDE.md'deki satır kendiliğinden",
            "bir kanca her seferinde",
            "Claude'un son anda hatırladığı kural"
          ],
          "dogru": 1,
          "ipucu": "Kuralı bilmeyen Claude'u kim durdurabilir, düşün.",
          "aciklama": "Kanca modelin kararına bağlı değildir; Claude Code onu her seferinde çalıştırır. CLAUDE.md satırı ise ancak Claude okuyup uyarsa işe yarar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Kesin tür, model ne karar verirse versin bazı şeylerin her zaman olmasını ya da hiç olmamasını istediğinde kullanılır; örneğin src/gen klasöründeki üretilmiş istemciyi hiç düzenlememek."
          }
        },
        {
          "id": "b06-d1-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "CLAUDE.md'deki \"kayıt dosyalarına kabukla yazma\" satırını vurguladın; Claude yine iki kez kaçırdı. Ne istersin?",
          "secenekler": [
            "Kuralın bir kancaya taşınmasını",
            "Satırın büyük harfle yeniden yazılmasını",
            "Kuralın bir skill'e taşınmasını"
          ],
          "dogru": 0,
          "ipucu": "Vurguya rağmen kaçırılan satır için belgenin ölçüsünü hatırla.",
          "aciklama": "Vurguladığın halde kaçırılan satır kancaya aittir; kanca Claude'un hatırlamasına bağlı kalmaz. Skill'i de model okur, büyük harf de garanti vermez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir CLAUDE.md satırına vurgu eklemeye devam ettiğin halde Claude onu kaçırıyorsa, bu o satırın bir kancaya ait olduğunun işaretidir."
          }
        },
        {
          "id": "b06-d1-s4",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bir kanca başlıkları hep aynı biçime çeviriyor, başka biçim istediğinde de. Ne yapılır?",
          "secenekler": [
            "Kancaya bir istisna listesi eklenir",
            "Biçim isteğin CLAUDE.md'ye vurguyla yazılır",
            "Kaldırılır; başlığı her seferinde Claude belirler"
          ],
          "dogru": 2,
          "ipucu": "Bu kanca bir zararı mı önlüyor, yoksa bir tercihi mi zorluyor?",
          "aciklama": "Yalnız tercih için yazılmış kanca silinir ve karar Claude'a bırakılır; başlık biçimi bir tercihtir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/best-practices",
            "kopya": "best-practices.md",
            "okuma": "2026-11-15",
            "dayanak": "Yalnız tercih için yazılmış kanca silinir ve karar Claude'a bırakılır."
          }
        },
        {
          "id": "b06-d1-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude iki kanca öneriyor: biri her rapora kaynak eklenmesini zorlayacak, öteki onaysız e-postayı durduracak. Kurala göre?",
          "secenekler": [
            "İkisi de yazılır; kanca daha güvenli",
            "Yalnız e-posta kancası yazılır",
            "İkisi de yazılmaz; kurallar metinde kalır"
          ],
          "dogru": 1,
          "ipucu": "Bizim kuralın saydığı türleri düşün; kaynak ekleme hangisine girer?",
          "aciklama": "Bizde mekanizma yalnız geri alınamaz zarar, güvenlik, para, dışa gönderim ve tekrar eden hata için yazılır. Kaynak ekleme bu türlerden değildir, metinde kalır.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Satır, mekanizmanın yalnız geri alınamaz zarar, güvenlik sınırı, para, dışa gönderim ve tekrar eden hata kurallarına yazılacağını söyler.",
            "soz": "yalnız şu kurallara yazılır: geri alınamaz zarar, güvenlik sınırı, para, dışa gönderim"
          }
        },
        {
          "id": "b06-d1-s8",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude kısa paragraf kuralını bir kez kaçırdı, \"buna kanca yazayım\" diyor. Ne dersin?",
          "secenekler": [
            "Yaz; kaçan her satır kancaya aittir",
            "Yazma; biçime asla kanca yazılmaz",
            "Şimdilik hayır; ilk kayışta söylemek yeter"
          ],
          "dogru": 2,
          "ipucu": "Kuralın türünü ve kaçırmanın kaçıncı kez olduğunu birlikte düşün.",
          "aciklama": "Biçim ve üslup kuralına mekanizma yazılmaz; kayınca söylenir. Ancak tekrar ederse mekanizmayı hak eder.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Satır, biçim ve üslup kuralına mekanizma yazılmayacağını, kayma tekrar ederse mekanizmayı hak edeceğini söyler.",
            "soz": "Biçim ve üslup kuralına mekanizma yazılmaz; kayarsa söylerim, tekrar ederse mekanizmayı hak eder"
          }
        }
      ]
    },
    {
      "id": "b06-d2",
      "baslik": "Olaylar (events)",
      "hedefler": [
        "Kancaların bağlandığı anları (oturum başı, istem, araçtan önce ve sonra, tur sonu, alt ajanın açılışı ve bitişi) anlatabilir.",
        "Bir kanca iletisinin ya da notunun hangi anda çalışan kancadan geldiğini ayırt edebilir."
      ],
      "anlatim": [
        "Her kanca bir olaya (event), yani oturumda belli bir ana bağlanır. SessionStart oturum başlarken ya da sürdürülürken çalışır; bizde açılış kancası ona bağlı.",
        "UserPromptSubmit istemini gönderince, Claude onu işlemeden önce çalışır; bizde saat damgası kancası ona bağlı.",
        "PreToolUse bir araç çağrısı çalışmadan önce, PostToolUse çağrı başarıyla bittikten sonra çalışır. PostToolUse geldiğinde araç işini çoktan yapmıştır.",
        "Stop, Claude cevabını bitirince çalışır. SubagentStart bir alt ajan açılınca, SubagentStop alt ajan işini bitirince çalışır.",
        "Bizim ayarda yedi olayın her birine kanca kayıtlı. Aynı olaya birden çok kanca bağlı olabilir: bizde PreToolUse altında on kayıt var."
      ],
      "terimler": [
        {
          "tr": "olay",
          "en": "event",
          "aciklama": "Oturumda Claude Code'un kanca çalıştırabildiği belirli an; istem gönderilince ya da araç çağrısından önce gibi."
        }
      ],
      "sorular": [
        {
          "id": "b06-d2-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Dünkü sohbeti bugün sürdürdün; açılış kancası saati yeniden bastı. Neden?",
          "secenekler": [
            "Uygulama sohbeti yepyeni bir oturum olarak açtı",
            "Sürdürmek de oturum başlangıcı sayılır",
            "Kanca her saat başı kendiliğinden çalışır"
          ],
          "dogru": 1,
          "ipucu": "Olayın yalnız yeni açılışı mı, kaldığın yerden dönüşü de mi kapsadığını düşün.",
          "aciklama": "SessionStart oturum başlarken ya da sürdürülürken çalışır; dünkü sohbete dönmek de bir başlangıç sayılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "Olay tablosuna göre SessionStart oturum başlarken ya da sürdürülürken, UserPromptSubmit istem gönderilip Claude işlemeden önce, PreToolUse araç çağrısı çalışmadan önce, Stop ise Claude cevabını bitirince çalışır."
          }
        },
        {
          "id": "b06-d2-s6",
          "tur": "coktan",
          "kart": 1,
          "soru": "Claude sen söylemeden o anki saati doğru yazdı; hiçbir komut da koşmadı. Saati nereden biliyor?",
          "secenekler": [
            "Bilgisayarın saatine kendisi bakıyor",
            "Sohbet başındaki saatten sayarak buluyor",
            "Her isteminde çalışan bir kanca bağlamına yazıyor"
          ],
          "dogru": 2,
          "ipucu": "Sen mesaj gönderdiğin an Claude'dan önce neyin çalıştığını düşün.",
          "aciklama": "Saat damgası kancası her istemde saati ölçer ve Claude'un bağlamına tek satır ekler; Claude saati bu satırdan okur.",
          "kaynak": {
            "adres": ".claude/hooks/saat_damgasi.py",
            "okuma": "2026-11-24",
            "dayanak": "Kanca her kullanıcı turunda İstanbul saatini ölçer ve bağlama tek satır ekler.",
            "soz": "Her kullanıcı turunda Europe/Istanbul saatini ölçer ve bağlama tek satır ekler"
          }
        },
        {
          "id": "b06-d2-s2",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude bir dosyayı düzenledi; bir kanca uyardı ama dosya yine değişti. Kanca neden engelleyemedi?",
          "secenekler": [
            "Araçtan sonra çalışan kancaydı",
            "Kanca bozuk, durdurma kodu vermedi",
            "Düzenleme önceden onaylanmıştı"
          ],
          "dogru": 0,
          "ipucu": "Uyarı düzenlemeden önce mi geldi, sonra mı; buna göre neyi durdurabilir?",
          "aciklama": "PostToolUse araç çağrısı başarıyla bittikten sonra çalışır; o an dosya çoktan değişmiştir. Engellemek için çağrıdan önce çalışan kanca gerekir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "PostToolUse, bir araç çağrısı başarılı olduktan sonra çalışır."
          }
        },
        {
          "id": "b06-d2-s5",
          "tur": "bosluk",
          "kart": 2,
          "soru": "Araç sonrası bir kanca kabuk komutlarını kaydediyor; hata veren komut kayda düşmedi, çünkü kanca ___.",
          "secenekler": [
            "hata kodu yüzünden kendisi de durdu",
            "yalnız başarılı çağrıdan sonra çalışır",
            "kaydı bir sonraki komutla birlikte düşecek"
          ],
          "dogru": 1,
          "ipucu": "Araç sonrası olayının hangi çağrılardan sonra geldiğini düşün.",
          "aciklama": "PostToolUse yalnız araç çağrısı başarıyla bitince çalışır; hata veren komuttan sonra bu kanca hiç devreye girmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "PostToolUse, bir araç çağrısı başarılı olduktan sonra çalışır."
          }
        },
        {
          "id": "b06-d2-s3",
          "tur": "coktan",
          "kart": 3,
          "soru": "Ana sohbette tur sonu kancası her cevapta çalışıyor. Bir alt ajan cevabını bitirince de çalışır mı?",
          "secenekler": [
            "Evet; her cevap sonu aynı olaydır",
            "Hayır; alt ajanın bitişi ayrı olaydır"
          ],
          "dogru": 1,
          "ipucu": "Ana sohbetin tur sonu ile alt ajanın işini bitirmesi aynı an mı, düşün.",
          "aciklama": "Stop ana sohbette Claude cevabını bitirince çalışır; alt ajanın bitişi ayrı olaydır (SubagentStop). Alt ajanın sonunu yakalamak için kanca o olaya bağlanır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "SubagentStart bir alt ajan oluşturulduğunda, SubagentStop alt ajan işini bitirdiğinde çalışır."
          }
        },
        {
          "id": "b06-d2-s7",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude'un dosya yazması durdu; yazma kontrolü kancası geçirmişti. Kaynağı ne olabilir?",
          "secenekler": [
            "Claude kendi kararıyla vazgeçti",
            "Araç sonrası bir kanca geri aldı",
            "Yazmadan önce çalışan öteki kancalardan biri"
          ],
          "dogru": 2,
          "ipucu": "Aynı anda kaç kancanın sırada olabileceğini düşün.",
          "aciklama": "Bir olaya birden çok kanca bağlı olabilir; biri geçirse de öteki durdurabilir. Bizde yazmadan önce birkaç kanca çalışır.",
          "kaynak": {
            "adres": ".claude/settings.json",
            "okuma": "2026-11-24",
            "dayanak": "Ayar dosyasında PreToolUse olayının altında ayrı eşleştiricili birden çok kayıt vardır.",
            "soz": "\"PreToolUse\": ["
          }
        }
      ]
    },
    {
      "id": "b06-d3",
      "baslik": "Eşleştirici (matcher)",
      "hedefler": [
        "Eşleştiricinin araç olaylarında kancayı araç adına göre süzdüğünü anlatabilir.",
        "Bir kancanın neden çalışmadığını ya da beklenmedik yerde çalıştığını eşleştiriciden ayırt edebilir."
      ],
      "anlatim": [
        "Eşleştirici (matcher) bir kancanın olayın hangi durumunda çalışacağını süzer. Eşleştiricisi olmayan kanca olayının her gelişinde çalışır.",
        "Araçtan önce ve sonra çalışan olaylarda eşleştirici aracın adına bakar, dosyanın adına değil. Dosyaya göre seçimi gerekirse kancanın kendisi yapar.",
        "Dik çizgi (|) “ya da” demektir: Edit|Write yalnız Edit ya da Write aracında çalışır. Bash yalnız kabuk komutlarını çalıştıran araçtır.",
        "Nokta ya da yıldız taşıyan eşleştirici kalıptır: mcp__.* adında mcp__ geçen her araca uyar. Öteki eşleştirici tam adla karşılaştırılır.",
        "Bizde doğrulayıcı kilidinin eşleştiricisi düzenleme araçları ve Bash'tir: doğrulayıcı alt ajanı koşarken ana sohbetin bu çağrıları durur."
      ],
      "terimler": [
        {
          "tr": "eşleştirici",
          "en": "matcher",
          "aciklama": "Kancanın olayın hangi durumunda çalışacağını süzen alan; araç olaylarında araç adına bakar."
        }
      ],
      "sorular": [
        {
          "id": "b06-d3-s2",
          "tur": "coktan",
          "kart": 0,
          "soru": "Yalnız yazmada çalışması gereken kanca, her okumada da çalışıyor. En olası kaynak?",
          "secenekler": [
            "Kanca araç sonrası olayına bağlanmış",
            "Eşleştiricisi boş bırakılmış",
            "Okuma araçları her kancayı tetikler"
          ],
          "dogru": 1,
          "ipucu": "Kancayı daraltan şey yoksa kanca nerede çalışır, düşün.",
          "aciklama": "Eşleştiricisi olmayan kanca olayının her gelişinde, yani her araçta çalışır. Yazma araçlarının adı yazılınca daralır.",
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
          "soru": "Eşleştiricisine \"DURUM.md\" yazılan kanca, DURUM.md düzenlenince hiç çalışmıyor; çünkü eşleştirici ___ bakar.",
          "secenekler": [
            "dosyanın klasörlü tam yoluna",
            "yalnız aracın adına",
            "tırnak içindeki dosya adına"
          ],
          "dogru": 1,
          "ipucu": "Araç olaylarında eşleştiricinin neyin adına baktığını düşün.",
          "aciklama": "Araç olaylarında eşleştirici aracın adına bakar; \"DURUM.md\" adlı bir araç olmadığı için kanca hiç çalışmaz. Dosyaya göre seçimi kancanın kendisi yapar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "PreToolUse, PostToolUse ve benzeri araç olaylarında eşleştiricinin süzdüğü alan araç adıdır."
          }
        },
        {
          "id": "b06-d3-s7",
          "tur": "coktan",
          "kart": 2,
          "soru": "Edit|Write eşleştiricili kanca her dosya değişikliğini kaydediyor. Claude dosyayı kabuk komutuyla değiştirdi, kayıt düşmedi. Neden?",
          "secenekler": [
            "Kabukla değişiklik kaydedilemez",
            "Değişikliği yapan araç Bash'ti",
            "Kanca yalnız yeni dosyada çalışır"
          ],
          "dogru": 1,
          "ipucu": "Kabuk komutunu hangi araç çalıştırır, eşleştiricide o var mı?",
          "aciklama": "Kabuk komutu Bash aracıyla çalışır; Edit|Write onu kapsamaz. Her değişikliği görmek isteyen kanca Bash'i de eşlemeli ya da tur sonu kancası kullanmalı.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude dosyaları kabuk komutlarıyla da oluşturup değiştirebilir; her dosya değişikliğini görmesi gereken kanca için bir Stop kancası ya da Bash eşleşmesi de eklenir."
          }
        },
        {
          "id": "b06-d3-s6",
          "tur": "coktan",
          "kart": 3,
          "soru": "Kanca dosya yazan her araçta çalışmalı; Claude eşleştiriciye yalnız \"Edit\" yazdı. Yeterli mi?",
          "secenekler": [
            "Hayır; Write ve MultiEdit ayrı adlardır",
            "Evet; adında Edit geçen her araç yakalanır"
          ],
          "dogru": 0,
          "ipucu": "Bu eşleştiricide nokta ya da yıldız var mı; yoksa nasıl karşılaştırılır?",
          "aciklama": "Nokta ya da yıldız taşımayan eşleştirici tam adla karşılaştırılır; \"Edit\" yalnız Edit aracını yakalar, Write ve MultiEdit ayrıca yazılmalı.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks",
            "kopya": "hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Yalnız harf, rakam, alt çizgi, tire, boşluk, virgül ve dik çizgi taşıyan eşleştirici tam ad ya da dik çizgiyle ayrılmış tam adlar listesi olarak, başka işaret taşıyan eşleştirici ise başa ve sona bağlanmamış düzenli ifade olarak değerlendirilir."
          }
        },
        {
          "id": "b06-d3-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "Yalnız Slack aracı için yazılan kanca takvim aracında da çalışıyor; eşleştiricisi mcp__.* biçiminde. Neden?",
          "secenekler": [
            "Takvim aracı Slack'in parçası sayılır",
            "Önceki Slack çağrısının kancası sürdü",
            "Bu kalıp bütün MCP araçlarını kapsar"
          ],
          "dogru": 2,
          "ipucu": "Eşleştiricideki nokta ve yıldızın ne işe yaradığını düşün.",
          "aciklama": "Nokta ya da yıldız taşıyan eşleştirici kalıptır; mcp__.* adında mcp__ geçen her araca, yani bütün MCP araçlarına uyar. Yalnız Slack için o aracın adı yazılmalı.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks",
            "kopya": "hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Yalnız harf, rakam, alt çizgi, tire, boşluk, virgül ve dik çizgi taşıyan eşleştirici tam ad ya da dik çizgiyle ayrılmış tam adlar listesi olarak, başka işaret taşıyan eşleştirici ise başa ve sona bağlanmamış düzenli ifade olarak değerlendirilir."
          }
        },
        {
          "id": "b06-d3-s4",
          "tur": "coktan",
          "kart": 4,
          "soru": "Doğrulayıcı alt ajanı koşarken Claude'un düzenlemesi ve kabuk komutu durdu, ama dosya okuması geçti. Neden?",
          "secenekler": [
            "Okuma kancalardan hep muaftır",
            "Kilidin eşleştiricisinde okuma araçları yok",
            "Doğrulayıcı okumaları kendisi onaylar"
          ],
          "dogru": 1,
          "ipucu": "Kilidin hangi araçlara bağlı olduğunu düşün.",
          "aciklama": "Doğrulayıcı kilidinin eşleştiricisi yalnız düzenleme araçlarını ve Bash'i sayar; okuma araçları listede olmadığı için kilit onlarda çalışmaz.",
          "kaynak": {
            "adres": ".claude/hooks/dogrulayici_kilidi.py",
            "okuma": "2026-11-24",
            "dayanak": "Kancanın başlığı, PreToolUse'da düzenleme araçları ve Bash eşleşmesiyle çalıştığını söyler.",
            "soz": "Doğrulayıcı kilidi (PreToolUse Edit|Write|MultiEdit|NotebookEdit|Bash"
          }
        }
      ]
    },
    {
      "id": "b06-d4",
      "baslik": "Durdurmak: çıkış kodu 2",
      "hedefler": [
        "Bir kanca durdurunca araç çağrısına ne olduğunu ve Claude'un nedeni nereden öğrendiğini anlatabilir.",
        "Kancanın geçirmesinin onay olmadığını, uyarı basmasının da durdurmak olmadığını ayırt edebilir."
      ],
      "anlatim": [
        "Kanca bitince bir çıkış kodu (exit code) bırakır: 0 “itirazım yok”, 2 “durdur” demektir. Araçtan önce çalışan kanca 2 ile çıkarsa çağrı hiç çalışmaz.",
        "Durduran kancanın hata akışına (stderr) yazdığı ileti Claude'a geri bildirim olarak gider; Claude nedeni görür ve yolunu değiştirir.",
        "1 hata gibi görünür ama durdurmaz; iş sürer. Durduran yalnız 2'dir.",
        "0 da onay değildir: kanca geçirse bile araç çağrısı yine normal izin akışından geçer.",
        "Bizde koruma kancası her kabuk komutundan önce çalışır; ör. DURUM.md gibi kayıt dosyasına kabukla yazmayı durdurur. İletisi tek “Ne yapılmalı” satırı taşır."
      ],
      "terimler": [
        {
          "tr": "çıkış kodu",
          "en": "exit code",
          "aciklama": "Kanca bitince Claude Code'a bıraktığı sayı; 0 itiraz yok, 2 durdur demektir."
        },
        {
          "tr": "hata akışı",
          "en": "stderr",
          "aciklama": "Kancanın hata ve gerekçe iletisini yazdığı çıkış kanalı; durdurmada Claude'a geri bildirim olur."
        }
      ],
      "sorular": [
        {
          "id": "b06-d4-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bir kanca Claude'un dosyaya yazacak kabuk komutunu durdurdu. Dosyayı eski haline döndürmek için ne yaparsın?",
          "secenekler": [
            "Geri sarma noktasına dönersin",
            "Gerek yok; komut hiç çalışmadı",
            "Claude'dan dosyayı onarmasını istersin"
          ],
          "dogru": 1,
          "ipucu": "Kanca çağrıdan önce mi sonra mı devreye girdi; dosyaya dokunulmuş olabilir mi?",
          "aciklama": "Araçtan önce çalışan kanca 2 ile çıkınca çağrı hiç çalışmaz; dosya değişmediği için geri alınacak bir şey yoktur.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/hooks",
            "kopya": "ders-101-12-hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "PreToolUse kancaları araç çağrılarını çalışmadan önce durdurabilir; çıkış 2'de işlem durur ve hata akışındaki ileti Claude'a geri bildirim olarak gider."
          }
        },
        {
          "id": "b06-d4-s3",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Bir kanca komutu durdurdu; Claude hemen başka yol önerip nedenini anlattı, çünkü ___.",
          "secenekler": [
            "durdurulan komutu kendisi tahmin etti",
            "kuralı CLAUDE.md'den çıkardı",
            "durdurma gerekçesi ona yazıldı"
          ],
          "dogru": 2,
          "ipucu": "Durdurma anında Claude'a neyin ulaştığını düşün.",
          "aciklama": "Durduran kancanın hata akışına yazdığı ileti Claude'a geri bildirim olarak gider; Claude nedeni oradan görür ve yolunu değiştirir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/hooks",
            "kopya": "ders-101-12-hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Çıkış kodu 2 işlemi durdurur ve hata akışındaki ileti Claude'a geri bildirim olarak gider, böylece Claude neden durdurulduğunu bilir ve yolunu değiştirebilir."
          }
        },
        {
          "id": "b06-d4-s2",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bir kanca yasak komutta hata verip uyarı bastı, ama komut yine çalıştı. Ne anlarsın?",
          "secenekler": [
            "Claude kancanın uyarısını yok saydı",
            "Kancanın hatası durdurma sayılmaz",
            "Kanca bozuk, hiç çalışmadı"
          ],
          "dogru": 1,
          "ipucu": "Hata vermek ile durdurmak kancada aynı sinyal mi, düşün.",
          "aciklama": "Kancanın hata vermesi işi durdurmaz, komut yine çalışır; yalnız durdurma kodu durdurur. Claude'dan kancanın durdurma koduyla çıkmasını istersin.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/hooks",
            "kopya": "ders-action-05-hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Çıkış 1 hata gibi görünse de durdurmaz ve Claude komutu yine çalıştırır; bir şeyi durdurmak istiyorsan 1 değil 2 ile çıkılır."
          }
        },
        {
          "id": "b06-d4-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "Bir kanca Claude'un komutunu geçirdi, ama izin penceresi yine açıldı. Neden?",
          "secenekler": [
            "Kanca bozuldu, onayı iletemedi",
            "Kanca onayı yalnız ilk komutta geçerli",
            "Kancanın geçirmesi onay sayılmaz"
          ],
          "dogru": 2,
          "ipucu": "“İtirazım yok” ile “onaylıyorum” aynı şey mi?",
          "aciklama": "Kanca 0 ile çıkınca yalnız itirazı olmadığını söyler; çağrı yine normal izin akışından geçer ve izin sorulabilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "PreToolUse kancasından 0 ile çıkınca araç çağrısı yine normal izin akışından geçer, çünkü 0 onu onaylamaz."
          }
        },
        {
          "id": "b06-d4-s4",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude DURUM.md'ye kabukla satır eklemek istedi, durduruldu; aynı satırı düzenleme aracıyla ekleyince geçti. Neden?",
          "secenekler": [
            "Koruma yalnız kabuk komutlarına bakıyor",
            "İkinci denemede kanca gevşedi",
            "Düzenleme aracı kancaları atlar"
          ],
          "dogru": 0,
          "ipucu": "Koruma kancası hangi aracın çağrısından önce çalışıyordu?",
          "aciklama": "Koruma kancası yalnız kabuk komutlarından önce çalışır ve kayıt dosyasına kabukla yazmayı durdurur; düzenleme aracı bu kancadan geçmez.",
          "kaynak": {
            "adres": ".claude/hooks/koruma.py",
            "okuma": "2026-11-24",
            "dayanak": "Kabuk koruması, hedefi CLAUDE.md, DURUM.md, KARARLAR.md, GECIS.md ya da .claude/ altı olan kabukla yazmayı durdurur.",
            "soz": "1. Kayıt dosyasına kabukla yazma: hedef bu klasörün CLAUDE.md, DURUM.md, KARARLAR.md, GECIS.md dosyası ya da .claude/"
          }
        },
        {
          "id": "b06-d4-s8",
          "tur": "coktan",
          "kart": 4,
          "soru": "Koruma kancası komutu durdurdu; Claude yalnız \"durduruldu\" dedi. Ondan ne istersin?",
          "secenekler": [
            "Komutu başka bir araçla denemesini",
            "İletideki “Ne yapılmalı” satırını göstermesini",
            "Kancayı bu iş için kapatmasını"
          ],
          "dogru": 1,
          "ipucu": "Kancanın iletisi kime gidiyordu ve içinde ne vardı?",
          "aciklama": "Koruma kancasının iletisi Claude'a gider ve tek “Ne yapılmalı” satırı taşır; o satır sorunun kaynağını ve çıkış yolunu gösterir. Aynı komut yine durur.",
          "kaynak": {
            "adres": ".claude/hooks/koruma.py",
            "okuma": "2026-11-24",
            "dayanak": "Bir kural tutunca çağrı çıkış 2 ile durur; her bulgu ve tek \"Ne yapılmalı\" satırı hata akışına yazılır.",
            "soz": "çağrı çıkış 2 ile durur, her bulgu ve tek \"Ne yapılmalı\" satırı stderr'e yazılır"
          }
        }
      ]
    },
    {
      "id": "b06-d5",
      "baslik": "Bağlama not eklemek (additionalContext)",
      "hedefler": [
        "Kancanın durdurmadan Claude'a not bırakabildiğini ve bu notun sana görünmediğini anlatabilir.",
        "Claude'un sen söylemeden bildiği ya da kendiliğinden düzelttiği bir şeyin kanca notundan gelip gelmediğini ayırt edebilir."
      ],
      "anlatim": [
        "Kanca durdurmadan da konuşabilir: 0 ile çıkar ve ek bağlam (additionalContext) alanına bir not yazar. Not Claude'un bağlamına eklenir.",
        "Claude notu kendi bir sonraki adımında okur, senin yeni mesajını beklemez. Not sohbet ekranında sana mesaj olarak görünmez.",
        "Not, kancanın çalıştığı anın yanına düşer: istem kancasında isteminin yanına, araç sonrası kancasında aracın sonucunun yanına.",
        "Tur sonu (Stop) kancasının notu Claude cevabını bitirince gelir; konuşma sürer ve Claude nota göre işe devam edebilir.",
        "Bizde saat kancası her istemde saati not olarak ekler; bağlam 300 ya da 500 bin eşiğini aşınca da, eşik başına bir kez, bağlam satırı ekler.",
        "İzin sayısı kancası tur sonunda çalışır: izin penceresi için ölçmeden sayı veren cümle görürse durdurmadan not bırakır."
      ],
      "terimler": [
        {
          "tr": "ek bağlam",
          "en": "additionalContext",
          "aciklama": "Kancanın JSON çıktısında, Claude'un bağlamına eklenecek metni taşıyan alan."
        }
      ],
      "sorular": [
        {
          "id": "b06-d5-s1",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Yalnız not bırakması gereken kanca, Claude'un dosya yazmasını hiç geçirmiyor. Kancadaki en olası hata: ___.",
          "secenekler": [
            "eşleştiricisinin boş bırakılması",
            "durduran çıkış koduyla bitmesi",
            "notunu sohbet ekranına yazması"
          ],
          "dogru": 1,
          "ipucu": "Not bırakan kanca ile durduran kanca hangi noktada ayrılıyordu, düşün.",
          "aciklama": "Not bırakan kanca 0 ile çıkar ve notu ek bağlama yazar; 2 ile çıkarsa çağrı durur. Boş eşleştirici kancayı her araçta çalıştırır ama tek başına durdurmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks",
            "kopya": "hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "additionalContext alanı kancadan gelen metni Claude'un bağlam penceresine taşır; Claude onu bir sonraki model isteğinde okur, ama metin arayüzde sohbet mesajı olarak görünmez."
          }
        },
        {
          "id": "b06-d5-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Claude \"kancanın notuna göre düzeltiyorum\" dedi; ama sen ekranda hiçbir not görmedin. Neden?",
          "secenekler": [
            "Not ekranın köşesinde bir an görünüp kaybolur",
            "Not bir hata yüzünden kayboldu",
            "Not yalnız Claude'un bağlamına girer"
          ],
          "dogru": 2,
          "ipucu": "Notun kime yazıldığını düşün: sana mı, Claude'a mı?",
          "aciklama": "Ek bağlam notu Claude'un bağlamına eklenir ve Claude'un bir sonraki adımında okunur; sohbet ekranında sana mesaj olarak görünmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks",
            "kopya": "hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "additionalContext alanı kancadan gelen metni Claude'un bağlam penceresine taşır; Claude onu bir sonraki model isteğinde okur, ama metin arayüzde sohbet mesajı olarak görünmez."
          }
        },
        {
          "id": "b06-d5-s5",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude her isteminde o anki git dalını bilsin istiyorsun. Hangi tarifi verirsin?",
          "secenekler": [
            "İstem kancası dalı nota eklesin",
            "Dalın adı CLAUDE.md'ye yazılsın",
            "Araçtan önceki kanca dalı denetleyip durdursun"
          ],
          "dogru": 0,
          "ipucu": "Her istemde değişebilen bilgiyi sabit bir dosya taşıyabilir mi?",
          "aciklama": "Dal değişebildiği için sabit bir CLAUDE.md satırı eskir. İstem gönderilince çalışan kanca dalı not olarak her isteme ekler; durdurmaya gerek yoktur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "UserPromptSubmit kancalarında bağlama metin eklemek için hookSpecificOutput.additionalContext kullanılır; belgedeki örnek çıktı her isteme o anki dalın durumunu ekler."
          }
        },
        {
          "id": "b06-d5-s3",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Claude \"bitti\" dedikten hemen sonra, sen yazmadan bir düzeltme daha yaptı; çünkü ___.",
          "secenekler": [
            "kendi cevabını baştan okuyup denetledi",
            "istemin ikinci kez gönderildi",
            "tur sonu kancası ona not bıraktı"
          ],
          "dogru": 2,
          "ipucu": "Claude cevabını bitirdiği an çalışan bir şey var mı, düşün.",
          "aciklama": "Tur sonu kancasının notu Claude cevabını bitirince gelir; konuşma sürer ve Claude nota göre işe devam eder.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks",
            "kopya": "hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Stop ve SubagentStop'ta not turun sonunda belirir; konuşma sürer, böylece Claude geri bildirime göre davranabilir."
          }
        },
        {
          "id": "b06-d5-s4",
          "tur": "coktan",
          "kart": 4,
          "soru": "Bağlam 300 bin notu bir kez geldi, sonra hiç gelmedi; arada sıkıştırma olmadı. Ne gösterir?",
          "secenekler": [
            "Bağlam yeniden eşiğin altına indi",
            "Saat kancası bozuldu",
            "Not her eşikte yalnız bir kez gelir"
          ],
          "dogru": 2,
          "ipucu": "Kancanın aynı eşik için kaç kez not yazdığını düşün.",
          "aciklama": "Saat kancası bağlam satırını her eşik için bir kez ekler; bağlam eşiğin altına inmedikçe yeniden yazmaz. Notun gelmemesi bağlamın küçüldüğünü göstermez.",
          "kaynak": {
            "adres": ".claude/hooks/saat_damgasi.py",
            "okuma": "2026-11-24",
            "dayanak": "Kanca bağlam satırını eşik başına bir kez basar; bağlam eşiğin altına inmedikçe yeniden basmaz.",
            "soz": "sonra bağlam eşiğin altına inmediyse yeniden basılmaz"
          }
        },
        {
          "id": "b06-d5-s6",
          "tur": "coktan",
          "kart": 5,
          "soru": "Claude ölçmeden \"bir kez şifre ister\" yazdı; tur durmadı. İzin sayısı kancası çalışmadı mı?",
          "secenekler": [
            "Çalışmadı; çalışsa turu durdururdu",
            "Çalıştı; durdurmaz, yalnız not bırakır",
            "Çalışmadı; yalnız komutlara bakar"
          ],
          "dogru": 1,
          "ipucu": "Bu kancanın yakaladığı cümlede turu durdurup durdurmadığını düşün.",
          "aciklama": "İzin sayısı kancası tur sonunda ölçmeden verilen izin sayısını yakalar ama turu durdurmaz; Claude'a not bırakır, Claude sayıyı düzeltir.",
          "kaynak": {
            "adres": ".claude/hooks/izin_sayisi.py",
            "okuma": "2026-11-24",
            "dayanak": "Tur metninde izin ya da şifre penceresi için ölçü işaretsiz sayı veren cümle varsa kanca durdurmadan not verir.",
            "soz": "durdurmadan not verir: çıkış 0, stdout'a tek satır JSON"
          }
        }
      ]
    },
    {
      "id": "b06-d6",
      "baslik": "Sıkıştırmadan sonra çalışan kanca",
      "hedefler": [
        "SessionStart olayının sıkıştırmadan (compaction) sonra da çalıştığını anlatabilir.",
        "Sıkıştırmadan sonra bağlama giren ya da girmeyen bir bilginin hangi kancadan geldiğini ayırt edebilir."
      ],
      "anlatim": [
        "Bağlam dolunca Claude Code konuşmayı özetler: buna sıkıştırma (compaction) denir. SessionStart olayı sıkıştırmadan hemen sonra da çalışır.",
        "Özetlerken ayrıntı kaybolabilir. SessionStart kancasının yazdığı metin özetlenmiş bağlama eklenir; kaybolmaması gereken bilgi böyle geri verilir.",
        "Kancanın girdisindeki kaynak (source) alanı oturumun nasıl başladığını söyler: startup, resume, clear ya da compact. Eşleştirici compact olursa kanca yalnız sıkıştırmadan sonra çalışır.",
        "Sıkıştırmadan sonra PostCompact olayı da çalışır ama çıktısı konuşmaya girmez. Bilgiyi geri vermek için compact eşleştiricili SessionStart kancası kullanılır.",
        "Bizde açılış kancasının eşleştiricisi yok, her SessionStart'ta çalışır. Yeni açılışta ve temizlemede saatin altına açık işlerden ve son kararlardan bir açılış özeti basar.",
        "Döngüde sıkıştırma olursa açılış kancası saatin altına bir satır ekler: döngü sürüyor; devir kartı ve kuyruk dosyası baştan okunur."
      ],
      "terimler": [
        {
          "tr": "sıkıştırma",
          "en": "compaction",
          "aciklama": "Bağlam penceresi dolarken Claude Code'un konuşmayı özetle değiştirmesi."
        },
        {
          "tr": "kaynak",
          "en": "source",
          "aciklama": "SessionStart girdisinde oturumun nasıl başladığını söyleyen alan: startup, resume, clear, compact ya da fork."
        }
      ],
      "sorular": [
        {
          "id": "b06-d6-s1",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Sohbet özetlendi; hemen ardından Claude'un bağlamına yeni saat satırını ___ bastı.",
          "secenekler": [
            "istem kancası",
            "oturum başı kancası",
            "Claude'un tur sonu kancası"
          ],
          "dogru": 1,
          "ipucu": "Özetten sonra konuşmanın yeniden başlamış sayılıp sayılmadığını düşün.",
          "aciklama": "SessionStart yalnız oturum açılınca değil, sıkıştırmadan hemen sonra da çalışır; saat satırını bu olaya bağlı kanca basar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "compact kaynağıyla eşleşen SessionStart kancalarını Claude Code sıkıştırmadan sonra çalıştırır ve çıktılarını sıkıştırılmış bağlama ekler."
          }
        },
        {
          "id": "b06-d6-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Her sıkıştırmadan sonra Claude açık işler listesini unutuyor. Claude'a ne önerirsin?",
          "secenekler": [
            "Listeyi sohbete bir kez daha yazmasını",
            "Oturum başında çalışan bir kancanın listeyi basmasını",
            "Özetini daha uzun tutmasını"
          ],
          "dogru": 1,
          "ipucu": "Sohbette yazılan şey ile özetten sonra yeniden eklenen metin arasındaki farkı düşün.",
          "aciklama": "Sohbete yazılan bilgi bir sonraki özette yine kaybolabilir. SessionStart kancasının yazdığı metin her sıkıştırmadan sonra bağlama yeniden eklenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks-guide",
            "kopya": "hooks-guide.md",
            "okuma": "2026-11-15",
            "dayanak": "Bağlam penceresi dolunca sıkıştırma konuşmayı özetler; önemli bağlamı her sıkıştırmadan sonra yeniden vermek için compact eşleştiricili SessionStart kancası kullanılır."
          }
        },
        {
          "id": "b06-d6-s8",
          "tur": "coktan",
          "kart": 2,
          "soru": "Yalnız sıkıştırmadan sonra çalışması gereken bir kanca, her yeni sohbette de çalışıyor. En olası kaynak?",
          "secenekler": [
            "Eşleştiricisi compact diye yazılmamış",
            "Yeni sohbet de bir sıkıştırma sayılır",
            "Kanca sıkıştırmayı yanlış ölçüyor"
          ],
          "dogru": 0,
          "ipucu": "Kancanın oturumun hangi başlangıcında çalışacağını neyin seçtiğini düşün.",
          "aciklama": "Eşleştirici compact olursa SessionStart kancası yalnız sıkıştırmadan sonra çalışır; eşleştirici yoksa yeni açılışta da çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks",
            "kopya": "hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Eşleştiricisi “*”, boş ya da hiç yazılmamış kanca, olayın her gerçekleşmesinde çalışır."
          }
        },
        {
          "id": "b06-d6-s7",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Claude'un yazdığı PostCompact kancası son commit'leri basıyor, ama özetten sonra Claude onları görmüyor; çünkü ___.",
          "secenekler": [
            "kanca özetten önce çalışıyor",
            "bu olayın çıktısı Claude'a ulaşmaz",
            "son commit'ler sıkıştırılmış özete sığmadı"
          ],
          "dogru": 1,
          "ipucu": "Adı uygun görünen olayın çıktısının nereye gittiğini düşün.",
          "aciklama": "PostCompact da sıkıştırmadan sonra çalışır ama çıktısı konuşmaya girmez. Bilgiyi geri vermek için compact eşleştiricili SessionStart kancası kullanılır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/hooks",
            "kopya": "ders-action-05-hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Sıkıştırmadan sonra bağlamı yeniden vermek için PostCompact değil, compact eşleştiricili SessionStart kullanılır; çıktısını konuşmaya gerçekten geri sokan odur."
          }
        },
        {
          "id": "b06-d6-s3",
          "tur": "coktan",
          "kart": 4,
          "soru": "Sohbet özetlendi; açılış kancası saati bastı ama açık işler özeti bu kez gelmedi. Neden?",
          "secenekler": [
            "Kanca özetten sonra yarım çalışır",
            "Açık işler özetle birlikte silindi",
            "Başlangıç türü compact; özet ona basılmaz"
          ],
          "dogru": 2,
          "ipucu": "Kancanın, oturumun nasıl başladığına göre ne bastığını düşün.",
          "aciklama": "Açılış kancası açılış özetini yalnız yeni açılışta ve temizlemede basar; sıkıştırmadan sonra kaynak compact olduğu için saat ve gerekirse döngü satırı gelir.",
          "kaynak": {
            "adres": ".claude/hooks/acilis.py",
            "okuma": "2026-11-24",
            "dayanak": "Açılış özeti yalnız source startup ya da clear olduğunda ve kökte DURUM.md ya da KARARLAR.md varken basılır.",
            "soz": "source \"startup\" ya da \"clear\" ise ve kökte DURUM.md ya da KARARLAR.md"
          }
        },
        {
          "id": "b06-d6-s4",
          "tur": "coktan",
          "kart": 5,
          "soru": "Gece döngüsünde sohbet özetlendi; Claude hemen devir kartını ve kuyruk dosyasını baştan okudu. Neden?",
          "secenekler": [
            "Özet Claude'a her şeyi unutturdu",
            "Açılış kancası ona işin sürdüğünü bildirdi",
            "Kuyruk dosyası kendini yeniden yükledi"
          ],
          "dogru": 1,
          "ipucu": "Döngüde özetten sonra açılış kancasının saatin altına ne eklediğini düşün.",
          "aciklama": "Döngüde sıkıştırma olunca açılış kancası saatin altına döngünün sürdüğünü, devir kartı ve kuyruk dosyasının baştan okunacağını söyleyen satırı ekler.",
          "kaynak": {
            "adres": ".claude/hooks/acilis.py",
            "okuma": "2026-11-24",
            "dayanak": "Kaynak compact ise ve döngü işareti varsa saatin altına döngünün sürdüğünü, devir kartı ve kuyruk dosyasının baştan okunacağını söyleyen satır eklenir.",
            "soz": "altına bir satır eklenir: döngü sürüyor, sohbet özetlendi; devir kartı ve kuyruk dosyası baştan okunur"
          }
        }
      ]
    },
    {
      "id": "b06-d7",
      "baslik": "Bizde kanca yazmak; Claude Code kancası ile git kancası",
      "hedefler": [
        "Bizde yeni bir kancanın testi, kaydı ve gerçek kayıtta denenmesiyle birlikte yazıldığını anlatabilir.",
        "Commit sırasında çalışan git kancasını (git hook) Claude Code kancasından ayırt edebilir."
      ],
      "anlatim": [
        "Bizde yeni kanca kanca-denetim skill'iyle yazılır. İlk adım, aynı işi yapan bir kanca ya da kontrol olup olmadığını aramaktır.",
        "Claude Code kancası .claude/settings.json'a olayı ve eşleştiricisiyle kaydedilir; bu kayıt olmadan kanca dosyası hiç çalışmaz.",
        "Kanca bir kez gerçek kayıtta (KARARLAR, DURUM gibi) koşulur ve uyarı sayısı rapora yazılır; testler ve denetim de aynı işte koşar.",
        "Kanca yazılınca her durdurmaya iki test yazılır: biri durdurması gereken yerde durdurduğunu, öteki yersiz durdurmadığını sınar.",
        "Ayar dosyası değişikliği her seferinde sana sorulur; kanca ekleme ve değiştirme ise sorulmaz, testi yazılır ve doğrulayıcı (verifier) denetler.",
        "Kanca klasöründeki pre-commit ve commit-msg birer git kancasıdır: onları Claude Code değil git, commit sırasında çalıştırır."
      ],
      "terimler": [
        {
          "tr": "git kancası",
          "en": "git hook",
          "aciklama": "Git'in commit gibi anlarda çalıştırdığı betik; Claude Code kancası değildir ve settings.json'a kaydedilmez."
        }
      ],
      "sorular": [
        {
          "id": "b06-d7-s9",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude \"kayıt dosyasına kabukla yazmayı durduran bir kanca yazayım\" diyor. İlk ne sorarsın?",
          "secenekler": [
            "Kancanın testi önce mi yazılacak?",
            "Böyle bir koruma zaten var mı?",
            "Kayıt settings.json'a ne zaman eklenecek?"
          ],
          "dogru": 1,
          "ipucu": "Yeni kanca yazılmadan önceki adımı düşün.",
          "aciklama": "kanca-denetim önce aynı işi yapan kanca ya da kontrol aranmasını ister. Bizde koruma kancası bu işi zaten yapıyor; aranmasa aynı işi iki kanca yapardı.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Skill'in ilk adımı, aynı işi yapan kanca ya da kontrol olup olmadığını aramaktır.",
            "soz": "Önce ara: aynı işi yapan kanca ya da kontrol var mı"
          }
        },
        {
          "id": "b06-d7-s8",
          "tur": "coktan",
          "kart": 1,
          "soru": "Claude yeni kancayı klasöre koydu, testi de geçti; ama oturumda kanca hiç çalışmıyor. En olası kaynak?",
          "secenekler": [
            "Eşleştiricisi boş bırakılmış",
            "Kanca ancak commit'ten sonra etkinleşir",
            "Ayar dosyasında kaydı yok"
          ],
          "dogru": 2,
          "ipucu": "Claude Code bir kancanın varlığını nereden öğreniyor, düşün.",
          "aciklama": "Claude Code kancayı settings.json'daki kayıttan tanır; kayıt yoksa dosya klasörde dursa da hiç çalışmaz.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/hooks",
            "kopya": "ders-101-12-hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Kancalar settings.json'da tanımlanır: bir olay seçilir, istenirse hangi araçlara uygulanacağını söyleyen bir eşleştirici konur ve çalışacak komut verilir."
          }
        },
        {
          "id": "b06-d7-s1",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude yeni kancanın bittiğini söyledi; testleri geçti. Kurala göre neyi sorarsın?",
          "secenekler": [
            "Senin onayının alınıp alınmadığını",
            "Gerçek dosyalarda kaç uyarı verdiğini",
            "Kuralın CLAUDE.md'ye de yazılıp yazılmadığını"
          ],
          "dogru": 1,
          "ipucu": "Testlerin göremediği neyi sınamak gerekir, düşün.",
          "aciklama": "Test yetmez; kanca bir kez gerçek kayıtta (KARARLAR, DURUM gibi) koşulur ve uyarı sayısı rapora yazılır. Kanca ekleme sana sorulmaz.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Kanca yazılınca testinden sonra bir kez gerçek kayıtta koşulur ve uyarı sayısı rapora yazılır.",
            "soz": "Sonra bir kez gerçek kayıtta (KARARLAR, DURUM, kütük) koşulur, uyarı sayısı rapora yazılır."
          }
        },
        {
          "id": "b06-d7-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude yeni kancaya, yasak komutu durdurduğunu gösteren tek test yazdı. Kurala göre hangi test eksik?",
          "secenekler": [
            "Kancanın hızını ölçen test",
            "Her araçta çalıştığını sınayan test",
            "Zararsız komutu geçirdiğini sınayan test"
          ],
          "dogru": 2,
          "ipucu": "Kancanın yapabileceği iki tür hatayı düşün.",
          "aciklama": "Her durdurma için iki test gerekir: bozma testi durdurması gereken yerde durdurduğunu, yanlış alarm testi zararsız komutu geçirdiğini sınar.",
          "kaynak": {
            "adres": ".claude/skills/sistem-metni/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Kural, her durdurma için bir bozma testi ve bir yanlış alarm testi ister.",
            "soz": "Kanca ya da kontrol yazılınca testi de yazılır: her durdurma için bir bozma testi ve bir yanlış alarm testi"
          }
        },
        {
          "id": "b06-d7-s3",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude bir kancayı değiştirdi ve sana sormadı; testini yazdı, doğrulayıcı onayladı. Kurala uygun mu?",
          "secenekler": [
            "Evet; bu iş için onay gerekmez",
            "Hayır; ayar ve kanca hep sorulur",
            "Hayır; kanca kesin kural, değişmez"
          ],
          "dogru": 0,
          "ipucu": "Ayar dosyası ile kanca değişikliği arasında kuralın yaptığı ayrımı düşün.",
          "aciklama": "Ayar dosyası değişikliği her seferinde sorulur, ama kanca ekleme ve değiştirme hariçtir: testi yazılır ve doğrulayıcı denetler.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Her seferinde sorulanlar listesinde settings.json vardır, kanca ekleme ve değiştirme hariç; bunlar testi ve doğrulayıcısıyla sorulmaz.",
            "soz": "kanca ekleme ve değiştirme hariç: testi ve doğrulayıcısıyla sorulmaz"
          }
        },
        {
          "id": "b06-d7-s5",
          "tur": "bosluk",
          "kart": 5,
          "soru": "Claude commit yapmak istedi; commit durdu ve denetim bulgu satırları basıldı. Durduran, ___.",
          "secenekler": [
            "Claude Code'un kabuk koruma kancası",
            "doğrulayıcı alt ajanı",
            "git'in kendi çalıştırdığı bir kanca"
          ],
          "dogru": 2,
          "ipucu": "Commit sırasında kimin çalıştırdığı kancaları düşün.",
          "aciklama": "Commit'i git'in pre-commit kancası durdurur: sahnedeki içerikte denetimi koşar, bulgu varsa commit durur. Onu Claude Code değil git çalıştırır.",
          "kaynak": {
            "adres": ".claude/hooks/pre-commit",
            "okuma": "2026-11-24",
            "dayanak": "Git commit kancası sahnedeki içerikte denetimi koşar; bulgu varsa commit durur ve bulgu satırları basılır.",
            "soz": "Bulgu varsa (çıkış 1) commit durur ve bulgu satırları basılır."
          }
        },
        {
          "id": "b06-d7-s6",
          "tur": "coktan",
          "kart": 5,
          "soru": "Claude \"pre-commit kancasını settings.json'a da kaydedeyim\" diyor. Ne dersin?",
          "secenekler": [
            "Kaydetsin; yoksa çalışmaz",
            "Gerek yok; onu git çalıştırır",
            "Kaydetsin; iki yerde dursun"
          ],
          "dogru": 1,
          "ipucu": "Bu kancayı Claude Code mu çalıştırıyor, yoksa başka bir program mı?",
          "aciklama": "pre-commit bir git kancasıdır; git onu kendi ayarıyla bulur ve commit sırasında çalıştırır. settings.json'a kaydı gerekmez.",
          "kaynak": {
            "adres": ".claude/skills/kanca-denetim/SKILL.md",
            "okuma": "2026-11-24",
            "dayanak": "Kanca settings.json'a kaydedilir; git kancaları aynı klasörde durur ve core.hooksPath bu klasörü gösterir.",
            "soz": "Git kancası (`pre-commit`, `commit-msg`) aynı klasörde, `core.hooksPath` bu klasör"
          }
        }
      ]
    }
  ]
});
