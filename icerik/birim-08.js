// icerik/birim-08.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b08",
  "sira": 8,
  "baslik": "MCP",
  "amac": "Claude'u dış servislere bağlayan MCP'yi tanımak; bir sunucu ya da bağlı hesap aracı çalışmadığında ya da durduğunda sorunun hangi parçadan geldiğini bulabilmek.",
  "dersler": [
    {
      "id": "b08-d1",
      "baslik": "MCP nedir",
      "hedefler": [
        "Claude'un bir dış sisteme ancak bağlı bir MCP sunucusuyla eriştiğini anlatabilir.",
        "Bir sistemi bağlamanın ne zaman işe yaradığını ayırt edebilir.",
        "Dış içerik çeken sunucunun taşıdığı riski anlatabilir."
      ],
      "anlatim": [
        "MCP (Model Context Protocol), Claude Code'u dış araçlara bağlayan açık bir standarttır. Bağlanan her MCP sunucusu (MCP server) Claude'a yeni araçlar (tool) verir.",
        "Sunucu bağlıyken Claude o sistemi, senin yapıştırdığın veriyle değil, doğrudan okuyup orada iş yapabilir.",
        "Başka bir uygulamadan sohbete sürekli veri kopyalıyorsan, o sistemi bağlamanın zamanı gelmiştir.",
        "Bizde araştırma ajanı kaynakları Exa adlı MCP sunucusuyla bulur. Exa sorgusuna müşteri işletmesinin adı ve kişisel veri girmez.",
        "Sunucuya güvenmeden bağlama. Dış içerik çeken sunucu istem enjeksiyonu (prompt injection) riski taşır: içerikteki metin Claude'a talimat gibi gelebilir."
      ],
      "terimler": [
        {
          "tr": "MCP",
          "en": "Model Context Protocol",
          "aciklama": "Claude Code'u dış araçlara ve veri kaynaklarına bağlayan açık standart."
        },
        {
          "tr": "MCP sunucusu",
          "en": "MCP server",
          "aciklama": "Bir servisin araçlarını Claude'a sunan bağlantı; bizdeki örneği Exa."
        },
        {
          "tr": "araç",
          "en": "tool",
          "aciklama": "Claude'un bir iş yapmak için çağırdığı tek işlev; MCP sunucusu yeni araçlar ekler."
        },
        {
          "tr": "istem enjeksiyonu",
          "en": "prompt injection",
          "aciklama": "Dışarıdan gelen metnin Claude'a talimat gibi davranma riski."
        }
      ],
      "sorular": [
        {
          "id": "b08-d1-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Onay sorularında daha önce görmediğin, takvimle ilgili araç adları çıkmaya başladı. Bunlar nereden geliyor?",
          "secenekler": [
            "Claude Code'un yeni sürümüyle gelen araçlar",
            "Bağlanan bir sunucunun verdiği araçlar",
            "Claude'un o an kendi yazdığı araçlar"
          ],
          "dogru": 1,
          "ipucu": "Claude yeni araçları hangi yoldan kazanır?",
          "aciklama": "Bağlanan her MCP sunucusu Claude'a yeni araçlar verir; takvim sunucusu bağlanınca onun araçları onay sorularında görünür. Claude Code sürümü takvim aracı getirmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp",
            "kopya": "mcp.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code, yapay zekâ ile araç bağlantıları için açık kaynaklı bir standart olan MCP üzerinden yüzlerce dış araca ve veri kaynağına bağlanabilir."
          }
        },
        {
          "id": "b08-d1-s7",
          "tur": "bosluk",
          "kart": 0,
          "soru": "Bir not uygulaması kendi MCP sunucusunu yazdı. Bu sunucu Claude Code'a ___.",
          "ipucu": "MCP'nin kimin yazdığı sunucuları kabul ettiğini düşün.",
          "aciklama": "MCP açık bir standarttır; yalnız Anthropic'in yazdığı sunucular değil, ona uyan her sunucu bağlanabilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp",
            "kopya": "mcp.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code, yapay zekâ ile araç bağlantıları için açık kaynaklı bir standart olan MCP üzerinden yüzlerce dış araca ve veri kaynağına bağlanabilir."
          },
          "secenekler": [
            "bağlanabilir",
            "bağlanamaz; yalnız Anthropic'in sunucuları bağlanır",
            "yalnız tarayıcıdaki Claude sohbetine bağlanır"
          ],
          "dogru": 0
        },
        {
          "id": "b08-d1-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "İş takip aracının sunucusu bağlı. Bir kayda az önce yeni yorum eklendi. Claude'un onu görmesi için ne yaparsın?",
          "secenekler": [
            "Yorumu kopyalayıp sohbete yapıştırırsın",
            "Sunucuyu kesip yeniden bağlarsın",
            "Gerek yok; kaydı sistemden kendisi okur"
          ],
          "dogru": 2,
          "ipucu": "Bağlı sunucuyla Claude veriyi nereden alıyor, onu düşün.",
          "aciklama": "Bağlı sunucuyla Claude sistemi doğrudan okur, yapıştırılmış ya da saklanmış bir kopyaya bakmaz. Bu yüzden kaydın şimdiki halini kendisi görür.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp",
            "kopya": "mcp.md",
            "okuma": "2026-11-15",
            "dayanak": "Sunucu bağlandığında Claude, senin yapıştırdığın veriyle çalışmak yerine o sistemi doğrudan okuyabilir ve orada iş yapabilir."
          }
        },
        {
          "id": "b08-d1-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Hangisi bir sistemi bağlatma zamanının geldiğini gösterir?",
          "secenekler": [
            "Her gün panelden sohbete veri taşıyorsun",
            "Claude aynı dosyayı sık sık okuyor",
            "Bağlam erken doluyor",
            "Claude'a her gün aynı soruyu soruyorsun"
          ],
          "dogru": 0,
          "ipucu": "Taşıma işini kimin yaptığına bak.",
          "aciklama": "Başka bir uygulamadan sohbete sürekli veri taşımak, o sistemi bağlama işaretidir. Öteki durumların hiçbiri dış bir sisteme erişim eksikliği değildir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp",
            "kopya": "mcp.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir iş takip aracı ya da izleme paneli gibi başka bir araçtan sohbete veri kopyaladığını fark ettiğinde bir sunucu bağla."
          }
        },
        {
          "id": "b08-d1-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "Araştırma ajanından bir müşterinin rakiplerini araştırmasını istedin. Exa sorgularında müşterinin işletme adı hiç geçmiyor. Neden?",
          "secenekler": [
            "Exa işletme adlarıyla arama yapamıyor",
            "Ajan görevi eksik anlamış",
            "Ajanın kuralı bu adı dışarı göndermiyor"
          ],
          "dogru": 2,
          "ipucu": "Exa dışarıdaki bir servis; ona ne yazıldığını düşün.",
          "aciklama": "Ajan dosyası Exa sorgusuna müşteri işletmesinin adını ve kişisel veriyi yazmayı yasaklar. Ajan sektörü ve ürünü arar; bu bir hata değildir.",
          "kaynak": {
            "adres": ".claude/agents/arastirmaci.md",
            "okuma": "2026-11-24",
            "dayanak": "Ajan dosyası, Exa sorgusuna müşteri işletmesinin adının, kişi adının ve kişisel verinin girmeyeceğini söyler.",
            "soz": "Exa sorgusuna müşteri işletmesinin adı, kişi adı ve kişisel veri girmez"
          }
        },
        {
          "id": "b08-d1-s6",
          "tur": "coktan",
          "kart": 4,
          "soru": "Web sayfası çeken bir sunucuyla sayfa özetletirken Claude istemediğin bir dosyayı silmeye kalktı. En olası kaynak?",
          "secenekler": [
            "Sunucunun aracı bozuk çalışıyor",
            "Sayfaya gizlenmiş bir yönerge",
            "İzin modu silmeye izin veriyor"
          ],
          "dogru": 1,
          "ipucu": "Claude o an neyi okuyordu, onu düşün.",
          "aciklama": "Dış içerik çeken sunucu istem enjeksiyonu riski taşır: sayfadaki metin Claude'a talimat gibi gelebilir. İzin modu yalnız neye izin verildiğini belirler, silme fikrini doğurmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp",
            "kopya": "mcp.md",
            "okuma": "2026-11-15",
            "dayanak": "Her sunucuya bağlamadan önce ona güvendiğini doğrula; dış içerik çeken sunucular seni istem enjeksiyonu riskine açabilir."
          }
        }
      ]
    },
    {
      "id": "b08-d2",
      "baslik": "Sunucu eklemek ve kapsam",
      "hedefler": [
        "Bir sunucunun hangi kapsamda kime açıldığını ayırt edebilir.",
        "Bizde Exa'nın ajan dosyalarında tanımlı olduğunu ve ana sohbete gelmediğini anlatabilir.",
        "Masaüstünde bir bağlayıcıyı nereden yönettiğini anlatabilir."
      ],
      "anlatim": [
        "Masaüstünde bağlayıcıyı (connector) yazı kutusunun yanındaki + düğmesinden eklersin. Kenar çubuğunda Customize, Connectors bölümünden yönetir, bağlantısını kesersin.",
        "Terminalde eklenen sunucu üç kapsamdan (scope) birine yazılır. Yerel kapsam yalnız sana ve yalnız bu projeye açıktır; varsayılan budur.",
        "Proje kapsamı proje kökündeki .mcp.json dosyasıdır; projeyi kopyalayan herkes kullanır. Claude Code böyle bir sunucuyu ilk gördüğünde onay sorar.",
        "Kullanıcı kapsamı yalnız sana ama bütün projelerine açıktır. Kaydı ev klasöründeki ~/.claude.json dosyasında durur.",
        "Bizde .mcp.json yok. Exa, araştırma ve hukuk ajanlarının dosyalarında, mcpServers alanında tanımlı.",
        "Ajan dosyasında tanımlanan sunucu ajan başlarken bağlanır, ajan bitince bağlantı kesilir. Araçlarını yalnız ajan alır, ana sohbet almaz."
      ],
      "terimler": [
        {
          "tr": "bağlayıcı",
          "en": "connector",
          "aciklama": "Masaüstünde ekrandan kurulan MCP sunucusu."
        },
        {
          "tr": "kapsam",
          "en": "scope",
          "aciklama": "Bir MCP sunucusunun kime ve hangi projelere açık olduğu."
        }
      ],
      "sorular": [
        {
          "id": "b08-d2-s7",
          "tur": "coktan",
          "kart": 0,
          "soru": "Masaüstünde artık kullanmadığın bir bağlayıcının bağlantısını kesmek istiyorsun. Nereye gidersin?",
          "secenekler": [
            "Yazı kutusunun yanındaki + düğmesine",
            "Kenar çubuğundaki Customize altına",
            "Klasördeki ayar dosyasına"
          ],
          "dogru": 1,
          "ipucu": "Eklemek ile yönetmek aynı yerde mi, onu düşün.",
          "aciklama": "Bağlayıcılar kenar çubuğundaki Customize altında, Connectors bölümünden yönetilir ve kesilir. + düğmesi yalnız ekler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Bağlayıcıları yönetmek ya da bağlantısını kesmek için kenar çubuğunda Customize'a tıklayıp Connectors bölümünü aç."
          }
        },
        {
          "id": "b08-d2-s2",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Claude'a terminalde kapsam söylemeden bir sunucu ekletirsen, sunucu ___ açılır.",
          "secenekler": [
            "bütün projelerinde sana",
            "yalnız sende, yalnız bu projede",
            "projeyi kopyalayan herkese"
          ],
          "dogru": 1,
          "ipucu": "Kapsam söylenmeyince hangisinin seçildiğini düşün.",
          "aciklama": "Varsayılan kapsam yereldir: sunucu yalnız sana ve yalnız bu projeye açılır. Bütün projeler için kullanıcı kapsamını söylemen gerekir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp-quickstart",
            "kopya": "mcp-quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "Yerel kapsam ~/.claude.json içinde bu projenin kaydında durur, yalnız sana ve yalnız bu projeye açıktır ve varsayılandır."
          }
        },
        {
          "id": "b08-d2-s6",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bir arkadaşının projesini kopyalayıp açtın. Sen hiçbir şey eklemediğin halde Claude Code bir sunucu için onay soruyor. Sunucu nereden geliyor?",
          "secenekler": [
            "Projenin içindeki .mcp.json dosyasından",
            "Projeyle gelen ~/.claude.json kaydından",
            "Arkadaşının hesabındaki bağlayıcıdan"
          ],
          "dogru": 0,
          "ipucu": "Hangi kapsam projeyle birlikte taşınır?",
          "aciklama": "Proje kapsamlı sunucu proje kökündeki .mcp.json dosyasındadır ve projeyle birlikte gelir. Claude Code onu ilk görünce onay sorar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp-quickstart",
            "kopya": "mcp-quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "Yerel kapsam yalnız sana ve yalnız bu projeye açıktır ve varsayılandır, proje kapsamı proje kökündeki .mcp.json ile projeyi kopyalayan herkese açılır, kullanıcı kapsamı ise ~/.claude.json içinde en üstteki mcpServers anahtarında durur ve yalnız sana, bütün projelerde açıktır."
          }
        },
        {
          "id": "b08-d2-s8",
          "tur": "eslestir",
          "kart": 3,
          "soru": "Sunucuyu eklerken seçilen kapsamı, projeni kopyalayan arkadaşında olacakla eşleştir.",
          "ciftler": [
            [
              "Yerel kapsam",
              "Ona gitmez; sende yalnız bu projede"
            ],
            [
              "Kullanıcı kapsamı",
              "Ona gitmez; sende bütün projelerde"
            ],
            [
              "Proje kapsamı",
              "Ona da gelir; önce onay sorulur"
            ]
          ],
          "ipucu": "Kaydın projeyle birlikte taşınıp taşınmadığını düşün.",
          "aciklama": "Yalnız proje kapsamının kaydı projenin içindedir ve onay sorusuyla arkadaşına da gelir. Yerel ve kullanıcı kapsamının kaydı sende kalır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp-quickstart",
            "kopya": "mcp-quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "Yerel kapsam yalnız sana ve yalnız bu projeye açıktır ve varsayılandır, proje kapsamı proje kökündeki .mcp.json ile projeyi kopyalayan herkese açılır, kullanıcı kapsamı ise ~/.claude.json içinde en üstteki mcpServers anahtarında durur ve yalnız sana, bütün projelerde açıktır."
          }
        },
        {
          "id": "b08-d2-s3",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude'a 'Exa'nın ayarını .mcp.json'da düzelt' dedin; Claude böyle bir dosya olmadığını söyledi. Ne oluyor?",
          "secenekler": [
            "Dosya silinmiş; geri getirilmeli",
            "Exa ajan dosyalarında tanımlı",
            "Dosya ev klasöründe durur"
          ],
          "dogru": 1,
          "ipucu": "Bizde Exa hangi dosyalarda tanımlı?",
          "aciklama": "Bizde .mcp.json hiç yok; Exa araştırma ve hukuk ajanlarının dosyalarında tanımlı. Düzeltme oraya yapılır.",
          "kaynak": {
            "adres": "inceleme/2026-11-07-buluttan-calisma.md",
            "okuma": "2026-11-24",
            "dayanak": "Depomuzda .mcp.json dosyası yoktur ve bu ls -a ile ölçülmüştür.",
            "soz": "Depomuzda `.mcp.json` yok"
          }
        },
        {
          "id": "b08-d2-s4",
          "tur": "coktan",
          "kart": 5,
          "soru": "Ana sohbette Claude'a 'Exa ile ara' dedin; elinde Exa aracı olmadığını söyledi. En olası neden?",
          "secenekler": [
            "Exa'nın bağlantısı kopmuş",
            "Exa yalnız ajan çalışırken bağlanıyor",
            "Exa yalnız terminalde çalışır"
          ],
          "dogru": 1,
          "ipucu": "Exa nerede tanımlı ve araçlarını kim alıyor?",
          "aciklama": "Ajan dosyasında tanımlı sunucu ajan başlarken bağlanır, araçlarını yalnız ajan alır. Ana sohbette Exa aracı olmaması bu yüzden olağandır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Alt ajan dosyasında satır içi tanımlanan sunucular alt ajan başlarken bağlanır ve alt ajan bitince bağlantıları kesilir."
          }
        }
      ]
    },
    {
      "id": "b08-d3",
      "baslik": "MCP araç adı ve izin kuralı",
      "hedefler": [
        "Bir MCP araç adında bağlı hesabın kimliğini ve aracı ayırt edebilir.",
        "Reddetme, sor ve izin ver kurallarının hangi sırayla bakıldığını ve sonucunu anlatabilir.",
        "Bir kancanın neden hiçbir MCP aracında çalışmadığını anlatabilir."
      ],
      "anlatim": [
        "Her MCP aracının tam adı mcp__<sunucu>__<araç> kalıbındadır. Bağlı hesapta sunucu adı okunur bir ad değil, uzun bir kimliktir.",
        "İzin kuralları üç türdür: izin ver (allow), sor (ask), reddet (deny). Önce reddet, sonra sor, sonra izin ver bakılır; ilk eşleşen kazanır.",
        "Bizim .claude/settings.json dosyası bağlı hesapların yazan araçlarını reddeder: Drive'da dosya oluşturmak, takvime etkinlik eklemek gibi. Kuralı model değil Claude Code uygular.",
        "Bu yüzden geniş bir reddetme kuralı (deny rule), ona uyan daha dar bir izin kuralı olsa da aracı engeller.",
        "Kancanın eşleştiricisinde (matcher) bir sunucunun bütün araçları için sona .* gelir: mcp__memory__.* gibi. Düz mcp__memory hiçbir araçla eşleşmez."
      ],
      "terimler": [
        {
          "tr": "reddetme kuralı",
          "en": "deny rule",
          "aciklama": "Belirtilen aracın kullanılmasını engelleyen izin kuralı."
        },
        {
          "tr": "sor",
          "en": "ask",
          "aciklama": "Araç kullanılmadan önce onay isteyen kural türü."
        },
        {
          "tr": "eşleştirici",
          "en": "matcher",
          "aciklama": "Kancanın hangi araç adlarında çalışacağını seçen kalıp."
        }
      ],
      "sorular": [
        {
          "id": "b08-d3-s2",
          "tur": "coktan",
          "kart": 0,
          "soru": "Bir durdurma iletisinde araç adı mcp__68cf3b14-7439-…__create_event diye geçiyor. Ortadaki uzun parça ne?",
          "secenekler": [
            "Oluşturulacak etkinliğin kimliği",
            "Bağlı hesabın sunucu adı",
            "Bu oturumun numarası"
          ],
          "dogru": 1,
          "ipucu": "Adın kalıbında ortada hangi parça durur?",
          "aciklama": "Ad mcp__<sunucu>__<araç> kalıbındadır; bağlı hesapta sunucu adı uzun bir kimliktir. Sondaki create_event araçtır.",
          "kaynak": {
            "adres": ".claude/hooks/mcp_yazma.py",
            "okuma": "2026-11-24",
            "dayanak": "Kanca dosyası araç adını sunucu ve araç diye ayırır ve bağlı hesabın sunucu adının kimlik biçiminde olduğunu söyler.",
            "soz": "Bağlı hesap (sunucu adı claude.ai bağlantısı gibi kimlik biçiminde"
          }
        },
        {
          "id": "b08-d3-s5",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bir araca hem sor hem izin ver kuralı uyuyor; Claude her seferinde onay istiyor. Neden?",
          "secenekler": [
            "İzin ver kuralı yalnız bir kez geçerli",
            "Sor kuralına önce bakılır",
            "Kuralların en yenisi kazanır"
          ],
          "dogru": 1,
          "ipucu": "Kurallara hangi sırayla bakıldığını düşün.",
          "aciklama": "Sıra önce reddet, sonra sor, sonra izin ver; ilk eşleşen kazanır. Sor kuralı önce eşleştiği için onay istenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Kurallar sırayla değerlendirilir: önce reddet, sonra sor, sonra izin ver; bu sırada ilk eşleşen sonucu belirler ve kuralın ne kadar özel olduğu sırayı değiştirmez."
          }
        },
        {
          "id": "b08-d3-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude'dan bağlı Drive'daki bir dosyayı güncellemesini istedin; araç sana hiç sorulmadan engellendi. En olası kaynak?",
          "secenekler": [
            "Claude'un riskli bulup kendi vazgeçmesi",
            "Ayar dosyasındaki reddetme kuralı",
            "Drive bağlantısının kopması"
          ],
          "dogru": 1,
          "ipucu": "Sorulmadan engelleyen şey hangisi?",
          "aciklama": "Ayar dosyası bağlı hesapların yazan araçlarını reddeder ve bu kuralı model değil Claude Code uygular. Kopan bağlantı ya da Claude'un kendi kararı, aracı sana sormadan engelleyen bir kural değildir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Reddetme kuralları Claude Code'un belirtilen aracı kullanmasını engeller."
          }
        },
        {
          "id": "b08-d3-s8",
          "tur": "coktan",
          "kart": 2,
          "soru": "Drive'a yazma engellendi; Claude'a sohbette 'bu sefer izin veriyorum, yaz' dedin. Ne olur?",
          "secenekler": [
            "Yine engellenir; kural Claude'un kararı değil",
            "Senin iznini görüp yazar",
            "Önce sana bir kez sorar, sonra yazar"
          ],
          "dogru": 0,
          "ipucu": "Reddetme kuralını kimin uyguladığını düşün.",
          "aciklama": "Reddetme kuralını Claude Code uygular; sohbette verdiğin izin onu kaldırmaz. Araç, kural ayar dosyasından kalkmadan çalışmaz.",
          "kaynak": {
            "adres": ".claude/settings.json",
            "okuma": "2026-11-24",
            "dayanak": "Ayar dosyasının reddetme listesinde bağlı takvim hesabının davete cevap verme aracı vardır.",
            "soz": "mcp__68cf3b14-7439-466d-b24c-9a3afb830dec__respond_to_event"
          }
        },
        {
          "id": "b08-d3-s4",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Reddetme listesindeki takvim aracı için Claude tek etkinliğe izin veren dar bir kural ekledi. Bu durumda araç ___.",
          "secenekler": [
            "yine engellenir",
            "bu etkinlik için çalışır",
            "önce sana sorar, sonra çalışır"
          ],
          "dogru": 0,
          "ipucu": "Daha özel olmak sırayı değiştirir mi?",
          "aciklama": "Geniş bir reddetme kuralı, dar bir izin kuralına uyan çağrıyı da engeller. Aracı açmanın yolu reddetme kuralını değiştirmektir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Geniş bir reddetme kuralı, daha dar bir izin kuralına da uyan çağrılar dahil eşleşen her çağrıyı engeller; izin kuralı reddetme kuralından istisna açamaz."
          }
        },
        {
          "id": "b08-d3-s6",
          "tur": "coktan",
          "kart": 4,
          "soru": "Memory sunucusunun araçları için eklenen kanca hiç çalışmıyor; eşleştiricide mcp__memory yazıyor. Neden?",
          "secenekler": [
            "Sonunda .* eksik; hiçbir araca uymuyor",
            "Kanca yalnız oturum açılırken bir kez çalışır",
            "Memory sunucusu kanca kabul etmez"
          ],
          "dogru": 0,
          "ipucu": "Eşleştiricide sunucu adından sonra ne gelmeli?",
          "aciklama": "Düz mcp__memory tam metin olarak karşılaştırılır ve hiçbir araç adına uymaz. Bütün araçlar için sonuna .* eklenir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/hooks",
            "kopya": "hooks.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir sunucunun her aracını eşleştirmek için sunucu önekinin sonuna .* eklenir ve bu zorunludur, çünkü mcp__memory gibi yalnız düz karakterli bir eşleştirici tam metin olarak karşılaştırılır ve hiçbir araçla eşleşmez."
          }
        }
      ]
    },
    {
      "id": "b08-d4",
      "baslik": "MCP'nin bağlam maliyeti",
      "hedefler": [
        "Oturum başında bağlamın neden boş olmadığını anlatabilir.",
        "Kullanmadığın sunucuyu kapatma önerisinin nedenini anlatabilir.",
        "Bir sunucuyu ajan dosyasında tanımlamanın ya da komut satırı aracını seçmenin bağlam kazancını ayırt edebilir."
      ],
      "anlatim": [
        "Bağlam penceresi (context window), Claude'un oturumda bildiği her şeyin durduğu yerdir. Sen yazmadan önce oraya CLAUDE.md, otomatik hafıza, MCP araç adları ve skill açıklamaları yüklenir.",
        "Araç araması (tool search) varsayılan olarak açıktır. Bir MCP aracının tam tanımı, Claude ona ihtiyaç duyana kadar bağlama girmez.",
        "Yine de her sunucu araç adlarını ve talimatlarını yükler; kullanmasan bile biraz yer kaplar. Bu yüzden belge, işle ilgisi olmayan sunucuları kapatmayı önerir.",
        "Exa, .mcp.json'da değil, araştırma ve hukuk ajanlarının dosyalarında tanımlı. Sunucuyu böyle alt ajanda tanımlamak, araç açıklamalarının ana sohbetin bağlamında yer tutmasını önler.",
        "Bir aracın komut satırı (CLI) karşılığı varsa, örneğin GitHub için gh, o daha az bağlam harcar."
      ],
      "terimler": [
        {
          "tr": "bağlam penceresi",
          "en": "context window",
          "aciklama": "Claude'un oturumda bildiği her şeyin durduğu yer."
        },
        {
          "tr": "araç araması",
          "en": "tool search",
          "aciklama": "MCP araçlarının tam tanımını gerekene kadar bağlam dışında tutan, varsayılan açık özellik."
        },
        {
          "tr": "komut satırı",
          "en": "CLI",
          "aciklama": "Terminalde yazılarak çalışan program; GitHub için gh gibi."
        }
      ],
      "sorular": [
        {
          "id": "b08-d4-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Yeni bir oturum açtın, henüz bir şey yazmadın; bağlam kısmen dolu görünüyor. Neden?",
          "secenekler": [
            "Önceki oturumun konuşması taşındı",
            "Klasördeki bütün dosyalar okundu",
            "Oturum başında kurallar ve araç listeleri yüklendi"
          ],
          "dogru": 2,
          "ipucu": "Sen yazmadan önce bağlama kendiliğinden neler girer?",
          "aciklama": "Sen yazmadan önce bağlama CLAUDE.md, otomatik hafıza, MCP araç adları ve skill açıklamaları yüklenir. Önceki konuşma ve klasörün bütün dosyaları yüklenmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Sen bir şey yazmadan önce bağlama CLAUDE.md, otomatik hafıza, MCP araç adları ve skill açıklamaları yüklenir."
          }
        },
        {
          "id": "b08-d4-s6",
          "tur": "coktan",
          "kart": 1,
          "soru": "Yirmi araçlı bir sunucu bağladın; bağlamın beklediğinden çok az arttı. Bu nasıl olur?",
          "secenekler": [
            "Sunucu henüz bağlanmamış olmalı",
            "Araçların tam tanımı gerekene kadar yüklenmez",
            "Araçlar yalnız ajanlara yüklenir"
          ],
          "dogru": 1,
          "ipucu": "Varsayılan olarak açık olan özelliği düşün.",
          "aciklama": "Araç araması açıkken bir aracın tam tanımı, Claude ona ihtiyaç duyana kadar bağlama girmez. Başta yalnız adlar ve talimatlar yer tutar.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/mcp",
            "kopya": "ders-101-11-mcp.md",
            "okuma": "2026-11-15",
            "dayanak": "Araç araması varsayılan olarak açıktır, bu yüzden Claude Code her MCP aracının tam tanımını Claude ona ihtiyaç duyana kadar bağlamın dışında tutar."
          }
        },
        {
          "id": "b08-d4-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bu projede yalnız yazı yazacaksın; GitHub ve veritabanı sunucuların bağlı. Ne yaparsın?",
          "secenekler": [
            "Açık bırakırsın; araç araması varken yer tutmazlar",
            "İkisini bu proje için kapatırsın",
            "Açık bırakırsın; kullanılmayan sunucu yüklenmez"
          ],
          "dogru": 1,
          "ipucu": "Araç araması açıkken bile her sunucu ne yükler?",
          "aciklama": "Araç araması açıkken de her sunucu araç adlarını ve talimatlarını yükler, kullanılmasa da yer tutar. Bu işte gereksiz olanı kapatmak yer açar.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/context-management",
            "kopya": "ders-101-06-context-management.md",
            "okuma": "2026-11-15",
            "dayanak": "Her sunucu yine de biraz yer kapladığı için, bu projeyle ilgisi olmayan işler için kurulu sunucuların varsa onları kapatmayı düşün."
          }
        },
        {
          "id": "b08-d4-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "Ayda birkaç kez, tek iş için bir arama sunucusu ekleteceksin. Ana sohbetin bağlamı için en iyisi?",
          "secenekler": [
            "Proje kökündeki .mcp.json'a ekletmek",
            "Kullanıcı kapsamına ekletmek",
            "Yalnız o işi yapan ajanın dosyasında tanımlatmak"
          ],
          "dogru": 2,
          "ipucu": "Exa bizde nerede tanımlı ve neden?",
          "aciklama": "Alt ajanda tanımlanan sunucunun araçlarını yalnız o ajan alır; ana sohbetin bağlamı onları taşımaz. Öteki iki yol sunucuyu ana sohbete de getirir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir MCP sunucusunu ana sohbetten tamamen uzak tutmak ve araç açıklamalarının orada bağlam harcamasını önlemek için onu .mcp.json yerine alt ajan dosyasında satır içi tanımla; araçları alt ajan alır, ana sohbet almaz."
          }
        },
        {
          "id": "b08-d4-s4",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude 'GitHub için sunucu bağlayalım mı?' diyor; bilgisayarında gh kurulu. Bağlam için hangisi iyi?",
          "secenekler": [
            "gh'yi kullanmak; daha az yer tutar",
            "Sunucuyu bağlamak; daha az yer tutar",
            "İkisini birlikte kullanmak"
          ],
          "dogru": 0,
          "ipucu": "Komut satırı aracı bağlama ne ekler?",
          "aciklama": "Komut satırı aracı her araç için bağlama liste eklemez. Bu yüzden karşılığı varsa bağlamı daha verimli kullanır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/mcp",
            "kopya": "ders-101-11-mcp.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir aracın GitHub için gh ya da AWS için aws gibi komut satırı karşılığı varsa, her araç için liste eklemediğinden komut satırı bağlamı daha verimli kullanır."
          }
        },
        {
          "id": "b08-d4-s7",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Claude, bağlı sunucuların bütün araç açıklamalarını CLAUDE.md'ye kopyalamayı öneriyor. Bu kopya bağlamı ___.",
          "secenekler": [
            "hiç doldurmaz; araç araması onları bekletir",
            "her oturumun başından doldurur",
            "yalnız o araçlar kullanılınca doldurur"
          ],
          "dogru": 1,
          "ipucu": "CLAUDE.md ne zaman yüklenir, araç tanımları ne zaman?",
          "aciklama": "CLAUDE.md sen yazmadan önce her oturumda yüklenir; oraya kopyalanan açıklamalar her seferinde yer tutar. Araç araması yalnız sunucudan gelen tam tanımları bekletir, CLAUDE.md'yi değil.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/context-window",
            "kopya": "context-window.md",
            "okuma": "2026-11-15",
            "dayanak": "Sen bir şey yazmadan önce bağlama CLAUDE.md, otomatik hafıza, MCP araç adları ve skill açıklamaları yüklenir."
          }
        }
      ]
    },
    {
      "id": "b08-d5",
      "baslik": "Bizde dış sisteme yazma kapısı",
      "hedefler": [
        "Dış sisteme yazmanın her seferinde sorulduğunu ve önceki onayın geçmediğini anlatabilir.",
        "Bir işin hiç olmaması için CLAUDE.md satırı ile kanca ya da izin kuralı arasındaki farkı ayırt edebilir.",
        "MCP yazma koruması kancasının ne zaman koştuğunu ve neyi durdurduğunu anlatabilir."
      ],
      "anlatim": [
        "CLAUDE.md her seferinde sorulan işleri sayar; önceki onay geçmez. Bunlardan biri dış sisteme yazmadır: takvim, hatırlatıcı, zamanlanmış görev, git'i uzağa gönderme.",
        "Belgeye göre CLAUDE.md yol gösterir; izinler ve kancalar ise Claude ne karar verirse versin sınırı uygular. Bu yüzden kural yalnız yazıda kalmaz.",
        "Bizde her MCP aracı çağrılmadan önce bir araç öncesi kanca (PreToolUse) koşar. Koşarken ekranda 'Hesap ve Apple yazma koruması' yazar.",
        "Kanca, bağlı hesapta adı okuma listesinde (get, list, read gibi) olmayan aracı ve Apple Hatırlatıcılar ile Takvim'de okuma dışı işlemi durdurur.",
        "Durdurduğunda ekrana 'Araç durdu' diye başlayan bir ileti ve ne yapılacağını yazar."
      ],
      "terimler": [
        {
          "tr": "araç öncesi kanca",
          "en": "PreToolUse",
          "aciklama": "Claude bir aracı çağırmadan hemen önce çalışan kanca olayı."
        }
      ],
      "sorular": [
        {
          "id": "b08-d5-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Dün takvime etkinlik eklemesi için Claude'a onay verdin. Bugün yeni etkinlikte yine soruyor. Neden?",
          "secenekler": [
            "Dünkü onayın kaydı silinmiş",
            "Kural bu işi her seferinde sordurur",
            "Claude dünkü konuşmayı hatırlamıyor"
          ],
          "dogru": 1,
          "ipucu": "Takvime yazmak hangi işler arasında?",
          "aciklama": "Dış sisteme yazma her seferinde sorulur ve önceki onay geçmez. Claude dünkü onayı hatırlasa da yine sorar.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Her seferinde basitçe sorulan ve önceki onayın geçmediği işler arasında dış sisteme yazma, örneğin takvim ve hatırlatıcı, vardır.",
            "soz": "Her seferinde basitçe sorulanlar, önceki onay geçmez"
          }
        },
        {
          "id": "b08-d5-s2",
          "tur": "coktan",
          "kart": 0,
          "soru": "CLAUDE.md'ye göre hangisi her seferinde sana sorulan bir iş?",
          "secenekler": [
            "Takvimdeki yarınki etkinlikleri okumak",
            "Klasördeki bir notu düzeltmek",
            "Testleri koşmak",
            "Bir hatırlatıcının saatini değiştirmek"
          ],
          "dogru": 3,
          "ipucu": "Dış bir sisteme yazan hangisi?",
          "aciklama": "Hatırlatıcıyı değiştirmek dış sisteme yazmadır ve her seferinde sorulur. Okumak ve klasör içindeki işler bu listede yok.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Dış sisteme yazma, yani takvim, hatırlatıcı, zamanlanmış görev ve git'i uzağa gönderme (yedek deposuna kapanış gönderimi hariç), her seferinde sorulur ve önceki onay geçmez.",
            "soz": "dış sisteme yazma (takvim, hatırlatıcı, zamanlanmış görev"
          }
        },
        {
          "id": "b08-d5-s5",
          "tur": "coktan",
          "kart": 1,
          "soru": "CLAUDE.md'deki kurala rağmen Claude bir işi iki kez yaptı; bunun hiç olmamasını istiyorsun. Ne istersin?",
          "secenekler": [
            "Kuralı CLAUDE.md'de büyük harfle, en üste yazmasını",
            "İşi bir kanca ya da izin kuralıyla durdurmasını",
            "Kuralı her oturum başında hatırlatmasını"
          ],
          "dogru": 1,
          "ipucu": "Hangisi Claude ne karar verirse versin işler?",
          "aciklama": "CLAUDE.md yol gösterir, uymak Claude'un kararına kalır. Kanca ve izin kuralı ise sınırı her durumda uygular.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "CLAUDE.md Claude'a projenin nasıl işlediğini anlatır, izinler ve kancalar ise Claude ne karar verirse versin sınırları uygular."
          }
        },
        {
          "id": "b08-d5-s3",
          "tur": "coktan",
          "kart": 2,
          "soru": "Claude bir takvim aracıyla okurken ekranda bir an 'Hesap ve Apple yazma koruması' yazdı. Bu ne?",
          "secenekler": [
            "Aracın durdurulduğunu gösteren uyarı",
            "Her MCP çağrısından önce koşan kanca",
            "Hesap bağlantısının yenilenmesi"
          ],
          "dogru": 1,
          "ipucu": "Bu yazı hangi anda çıkıyor?",
          "aciklama": "Bu yazı, her MCP aracından önce koşan kancanın durum iletisidir. Kanca koşması aracın durduğu anlamına gelmez; okuma geçer.",
          "kaynak": {
            "adres": ".claude/settings.json",
            "okuma": "2026-11-24",
            "dayanak": "Ayar dosyası mcp_yazma.py kancasını mcp__.* eşleştiricisiyle bu durum iletisiyle bağlar.",
            "soz": "Hesap ve Apple yazma koruması"
          }
        },
        {
          "id": "b08-d5-s7",
          "tur": "coktan",
          "kart": 3,
          "soru": "Bağlı hesapta yalnız okuyan yeni bir araç, ilk kullanımda kancaya takıldı. Neden?",
          "secenekler": [
            "Kanca bağlı hesapta her aracı durdurur",
            "Adı kancanın okuma listesine uymuyor",
            "Kanca her aracı ilk kullanımda durdurur"
          ],
          "dogru": 1,
          "ipucu": "Kanca bir aracın okuduğunu neye bakarak anlıyor?",
          "aciklama": "Kanca aracın ne yaptığına değil adına bakar; adı okuma listesine uymayan okuma aracı ilk kullanımda durur. Bu ad listeye testiyle bir kez eklenir.",
          "kaynak": {
            "adres": ".claude/hooks/mcp_yazma.py",
            "okuma": "2026-11-24",
            "dayanak": "Kanca dosyası, adı listeye uymayan okuma aracının ilk kullanımda durduğunu ve listeye testiyle eklendiğini söyler.",
            "soz": "adı listeye uymayan okuma aracı ilk kullanımda durur"
          }
        },
        {
          "id": "b08-d5-s4",
          "tur": "bosluk",
          "kart": 4,
          "soru": "Claude Apple Hatırlatıcılar'a hatırlatıcı eklemeye çalışınca ekranda 'Araç durdu' ile başlayan ileti çıktı. İletiyi ___ yazdı.",
          "secenekler": [
            "ayar dosyasındaki reddetme kuralı",
            "Hatırlatıcılar uygulamasının kendisi",
            "MCP araçlarından önce koşan kanca"
          ],
          "dogru": 2,
          "ipucu": "'Araç durdu' iletisini kim yazar?",
          "aciklama": "Kanca Apple Hatırlatıcılar'da okuma dışı işlemi durdurur ve 'Araç durdu' iletisini yazar. Reddetme kuralı bu iletiyi yazmaz.",
          "kaynak": {
            "adres": ".claude/hooks/mcp_yazma.py",
            "okuma": "2026-11-24",
            "dayanak": "Kanca Apple Hatırlatıcılar ve Takvim'de okuma dışı işlemi durdurur ve 'Araç durdu' ile başlayan ileti yazar.",
            "soz": "Araç durdu: Apple Hatırlatıcılar/Takvim'de okuma dışı işlem"
          }
        }
      ]
    },
    {
      "id": "b08-d6",
      "baslik": "MCP sorununu bulmak",
      "hedefler": [
        "Bir sunucu çalışmadığında durumunu nereden göreceğini anlatabilir.",
        "Kapalı, başarısız ve sıfır araçlı sunucu belirtilerinin kaynağını ayırt edebilir.",
        "Ajan dosyasındaki sunucunun neden yüklenmeyebileceğini anlatabilir."
      ],
      "anlatim": [
        "Bir sunucu çalışmıyorsa ilk iş durumuna bakmaktır. Terminalde oturum içinde /mcp, sunucuları ve bağlantı durumlarını (connection status) gösterir.",
        "Masaüstünde Claude'a oturumda hangi bağlayıcıların olduğunu sorabilir, Customize, Connectors bölümüne bakabilirsin.",
        "Sıfır araç gösteren bağlı sunucuda /mcp içinden yeniden bağlan (Reconnect) seç. Hâlâ sıfırsa claude --debug=mcp ile başlat; hata kaydında sunucunun yazdıklarını oku.",
        "Proje sunucusu kapalıysa ilk onay sorusunu kapatmış olabilirsin. Terminalde claude mcp reset-project-choices çalıştırıp yeniden başlatınca soru tekrar gelir.",
        "Başlamayan sunucu /mcp içinde başarısız görünür. Sık neden komuttaki göreli dosya yoludur (relative path): yol Claude Code'u başlattığın klasöre göre okunur.",
        "Exa gibi ajan dosyasında tanımlı sunucuyu Claude Code, ancak dosyanın geldiği klasöre güvendiğini onayladıktan sonra yükler. Onay yoksa satır içi sunucuları atlar."
      ],
      "terimler": [
        {
          "tr": "bağlantı durumu",
          "en": "connection status",
          "aciklama": "Sunucunun bağlı, başarısız ya da giriş bekliyor olduğunu gösteren bilgi."
        },
        {
          "tr": "yeniden bağlan",
          "en": "Reconnect",
          "aciklama": "/mcp panelinde sunucuyu yeniden bağlayan seçenek."
        },
        {
          "tr": "göreli dosya yolu",
          "en": "relative path",
          "aciklama": "Komuttaki dosya yolu; .mcp.json'un yerine göre değil, Claude Code'u başlattığın klasöre göre okunur."
        }
      ],
      "sorular": [
        {
          "id": "b08-d6-s7",
          "tur": "coktan",
          "kart": 0,
          "soru": "Terminalde /mcp yazdın; Claude'un kullanamadığı sunucu listede hiç yok. En olası neden?",
          "secenekler": [
            "Sunucu burada hiç eklenmemiş",
            "Sunucunun bağlantısı kopmuş",
            "Sunucunun aracı reddedilmiş"
          ],
          "dogru": 0,
          "ipucu": "/mcp hangi sunucuları gösterir?",
          "aciklama": "/mcp eklenmiş her sunucuyu bağlantı durumuyla gösterir; bağlantısı kopan sunucu da listede durur. Listede hiç yoksa burada eklenmemiştir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/mcp-quickstart",
            "kopya": "mcp-quickstart.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir sunucu bağlanmazsa önce oturum içinde /mcp ya da kabuktan claude mcp list ile durumuna bak, sonra belirtiyi aşağıdakilerle eşleştir."
          }
        },
        {
          "id": "b08-d6-s4",
          "tur": "coktan",
          "kart": 1,
          "soru": "Masaüstünde yeni bir bağlayıcı ekledin; bu oturuma gerçekten gelip gelmediğini görmek istiyorsun. En kısa yol?",
          "secenekler": [
            "Ayar dosyasını açıp bakmak",
            "Claude'a bu oturumdaki bağlayıcıları sormak",
            "Bağlayıcıyı silip yeniden eklemek"
          ],
          "dogru": 1,
          "ipucu": "Oturumda neyin bulunduğunu kim bilir?",
          "aciklama": "Masaüstünde oturumdaki bağlayıcıları Claude'a sorabilirsin. Bağlayıcılar ayar dosyasında değil, Customize altında yönetilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Oturumunda hangi bağlayıcıların kurulu olduğunu Claude'a sorabilirsin."
          }
        },
        {
          "id": "b08-d6-s2",
          "tur": "bosluk",
          "kart": 2,
          "soru": "Sunucu sıfır araç gösteriyor; /mcp içinden yeniden bağlamak da işe yaramadı. Sıradaki hamlen: ___.",
          "secenekler": [
            "araç aramasını kapatıp tam tanımları baştan yüklemek",
            "hata kaydıyla başlatıp sunucunun yazdıklarını okumak",
            "sunucuyu proje kapsamına taşıyıp yeniden eklemek"
          ],
          "dogru": 1,
          "ipucu": "Sunucunun kendisi ne söylüyor, onu nereden görürsün?",
          "aciklama": "Yeniden bağlanmak işe yaramazsa Claude Code hata kaydıyla başlatılır ve sunucunun yazdıkları okunur. Araç araması araçları gizlemez, kapsam da araç sayısını değiştirmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "Bağlı görünüp sıfır araç listeleyen sunucu için /mcp içinden Reconnect seç; sayı sıfırda kalırsa claude --debug=mcp çalıştırıp hata kaydında sunucunun stderr çıktısını oku."
          }
        },
        {
          "id": "b08-d6-s3",
          "tur": "coktan",
          "kart": 3,
          "soru": "Projedeki .mcp.json'da tanımlı sunucu sende kapalı görünüyor, arkadaşında açık. En olası neden?",
          "secenekler": [
            "Sunucu arkadaşının kullanıcı kapsamında",
            "Sende ilk soruda onay verilmemiş",
            "Sunucu yalnız masaüstünde açılır"
          ],
          "dogru": 1,
          "ipucu": "Proje sunucusu ilk açılışta ne ister?",
          "aciklama": "Proje sunucusu bir kerelik onay ister; soru kapatılırsa sunucu kapalı kalır. Seçimler sıfırlanınca soru yeniden gelir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "Proje kapsamlı sunucular bir kerelik onay ister ve onay sorusunu kapattıysan sunucu kapalı kalır."
          }
        },
        {
          "id": "b08-d6-s5",
          "tur": "bosluk",
          "kart": 4,
          "soru": "Sunucu bir klasörden başlatınca çalışıyor, başka klasörden başlatınca /mcp'de başarısız görünüyor. Kaynağı büyük olasılıkla ___.",
          "secenekler": [
            "sunucunun yerel kapsamda olması",
            "sunucunun bağlantısının kopması",
            "komutta göreli yazılmış bir dosya yolu"
          ],
          "dogru": 2,
          "ipucu": "Hangi şey Claude Code'u başlattığın yere göre değişir?",
          "aciklama": "Göreli dosya yolu, Claude Code'u başlattığın klasöre göre okunur; klasör değişince yol boşa çıkar. Yerel kapsamlı sunucu başka projede başarısız değil, hiç görünmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/debug-your-config",
            "kopya": "debug-your-config.md",
            "okuma": "2026-11-15",
            "dayanak": "Onayı kapatılan proje sunucusu kapalı kalır, başlamayan sunucu /mcp içinde başarısız görünür ve sık nedeni command ya da args içindeki göreli dosya yollarıdır, bağlı görünüp sıfır araç listeleyen sunucu için ise /mcp içinden Reconnect seçilir."
          }
        },
        {
          "id": "b08-d6-s6",
          "tur": "coktan",
          "kart": 5,
          "soru": "Exa araştırma ajanının dosyasında tanımlı, ama ajan çalışınca Exa araçları gelmiyor. Olası neden hangisi?",
          "secenekler": [
            "Projede .mcp.json dosyası yok",
            "Klasöre güven onayı verilmemiş",
            "Exa'nın araçları reddetme listesinde",
            "Exa yalnız ana sohbete bağlanır"
          ],
          "dogru": 1,
          "ipucu": "Ajan dosyasındaki sunucu hangi şart sağlanınca yüklenir?",
          "aciklama": "Ajan dosyasındaki satır içi sunucu, klasöre güven onayı verilmeden yüklenmez. Bizde .mcp.json zaten yok ve Exa onsuz çalışır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sub-agents",
            "kopya": "sub-agents.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code, projenin .claude/agents/ klasöründeki bir ajan dosyasından satır içi MCP sunucusunu ancak dosyanın geldiği klasöre güvendikten sonra yükler."
          }
        }
      ]
    }
  ]
});
