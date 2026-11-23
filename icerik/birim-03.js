// icerik/birim-03.js (biçim: ogrenme/ICERIK-BICIMI.md)
(globalThis.OGRENME_ICERIK = globalThis.OGRENME_ICERIK || []).push({
  "id": "b03",
  "sira": 3,
  "baslik": "İzinler ve izin modları",
  "amac": "Claude'un hangi işi sana sormadan yapacağını belirleyen izin modlarını, izin kurallarını ve kum havuzunu tanımak; bir iş beklenmedik biçimde sorulduğunda, reddedildiğinde ya da engellendiğinde kaynağını bulabilmek.",
  "dersler": [
    {
      "id": "b03-d1",
      "baslik": "İzin sistemi neden var",
      "hedefler": [
        "Okumanın, dosya düzenlemenin ve komut çalıştırmanın Manual modda ne zaman sorulduğunu ayırt edebilir.",
        "“Bir daha sorma” onayının komutta ve dosya düzenlemede ne kadar sürdüğünü anlatabilir.",
        "İzin kuralı ile CLAUDE.md'deki talimatın farkını ayırt edebilir."
      ],
      "anlatim": [
        "Manual modda okumak sormadan olur; dosya düzenlemek ve çoğu kabuk komutu (Bash) için izin penceresi (permission prompt) açılır. Yalnız okuyan yerleşik komutlar sorulmaz.",
        "Pencere Claude'un ne yapacağını ve seçeneklerini gösterir. Komut için “Yes, and don't ask again” (bir daha sorma) dersen kural .claude/settings.local.json dosyasına yazılır.",
        "Bu komut kuralı sonraki oturumlarda da geçer. Dosya düzenleme onayı ise dosyaya yazılmaz, yalnız oturum bitene kadar sürer.",
        "Model, yani Claude, ne yapmaya çalışacağına karar verir; izin kurallarını ise Claude Code aracı uygular. CLAUDE.md'deki talimat modelin kararını yönlendirir, izin kuralını değiştirmez."
      ],
      "terimler": [
        {
          "tr": "izin penceresi",
          "en": "permission prompt",
          "aciklama": "Claude bir işi yapmadan önce açılan, ne yapacağını ve seçeneklerini gösteren onay kutusu."
        }
      ],
      "sorular": [
        {
          "id": "b03-d1-s3",
          "tur": "bosluk",
          "kart": 2,
          "soru": "Manual'dasın; test komutu bugün sormadan koştu, geçen hafta soruluyordu. Çünkü geçen hafta ___.",
          "secenekler": [
            "o komuta 'bir daha sorma' dedin",
            "Claude komutu güvenli buldu",
            "komut yalnız okuyan bir komuta döndü"
          ],
          "dogru": 0,
          "ipucu": "Komut onayının bir dosyaya yazılıp sonraki oturumlarda geçip geçmediğini düşün.",
          "aciklama": "Komut için verilen “bir daha sorma” onayı ayar dosyasına yazılır ve sonraki oturumlarda da geçer. Claude kendine izin veremez, bir komut da kendiliğinden salt okunur olmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "“Yes, and don't ask again” seçilip onay kalıcı kaydedildiğinde, örneğin bir Bash komutu için, Claude Code kuralı git deposunun kökündeki .claude/settings.local.json dosyasına yazar."
          }
        },
        {
          "id": "b03-d1-s4",
          "tur": "coktan",
          "kart": 2,
          "soru": "Dün düzenlemeye 'bir daha sorma' dedin; bugün Claude düzenlemeden önce yine soruyor. Neden?",
          "secenekler": [
            "Onay kaydedilirken bir hata oldu",
            "Claude dünkü onayı unuttu",
            "O onay dünkü oturumla birlikte bitti"
          ],
          "dogru": 2,
          "ipucu": "Düzenleme onayının bir dosyaya kaydedilip kaydedilmediğini düşün.",
          "aciklama": "Dosya düzenleme onayı dosyaya yazılmaz, yalnız oturum bitene kadar sürer. Yeni oturumda Manual yine sorar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Dosya değiştirme onayı dosyaya kaydedilmez; tablodaki gibi oturum bitene kadar sürer."
          }
        },
        {
          "id": "b03-d1-s5",
          "tur": "coktan",
          "kart": 3,
          "soru": "Claude'un bir silme komutunu hiçbir koşulda çalıştıramamasını istiyorsun. Ne yaptırırsın?",
          "secenekler": [
            "CLAUDE.md'ye 'çalıştırma' satırı yazdırırsın",
            "Ayara o komutu yasaklayan kural yazdırırsın",
            "Her oturumun başında Claude'a hatırlatırsın"
          ],
          "dogru": 1,
          "ipucu": "Hangisi Claude'un niyetine, hangisi Claude Code'un uyguladığı kurala dayanıyor, ayır.",
          "aciklama": "İzin kurallarını Claude Code uygular; CLAUDE.md ve sohbetteki talimat yalnız Claude'un ne yapmaya çalışacağını yönlendirir. Unutulan talimat komutu durdurmaz, kural durdurur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "İzin kurallarını model değil Claude Code uygular; istemdeki ya da CLAUDE.md'deki talimatlar Claude'un ne yapmaya çalışacağını şekillendirir, Claude Code'un neye izin verdiğini değiştirmez."
          }
        },
        {
          "id": "b03-d1-s6",
          "tur": "coktan",
          "kart": 0,
          "soru": "Manual'dasın. 'Testleri koş' deyip bilgisayardan kalktın; döndüğünde iş ilerlememiş. Kaynağı?",
          "secenekler": [
            "Claude testleri bulamadı, bekliyor",
            "Test komutu bir izin penceresinde bekliyor",
            "Bağlam doldu, Claude durdu"
          ],
          "dogru": 1,
          "ipucu": "Manual'da hangi işlerin senin cevabını beklediğini düşün.",
          "aciklama": "Manual modda kabuk komutları, yalnız okuyan yerleşik komutlar dışında, izin penceresi açar ve cevabını bekler. Test komutu kod çalıştırdığı için sorulur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Bash komutları onay ister, yerleşik salt okunur komut kümesi hariç."
          }
        },
        {
          "id": "b03-d1-s7",
          "tur": "coktan",
          "kart": 3,
          "soru": "CLAUDE.md'ye 'testleri sormadan koş' yazdırdın; Claude test için yine izin istiyor. Neden?",
          "secenekler": [
            "Claude satırı okudu, güvenlik için sordu",
            "Talimat yalnız Auto modunda geçer",
            "Satır izin ayarı değil; onayı araç ister"
          ],
          "dogru": 2,
          "ipucu": "İzin penceresini kimin açtığını düşün: model mi, araç mı?",
          "aciklama": "CLAUDE.md'deki talimat Claude'un ne yapmaya çalışacağını yönlendirir, izin kurallarını değiştirmez. İzin penceresini Claude değil Claude Code açar; sorulmaması için ayarda bir izin kuralı gerekir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "İzin kurallarını model değil Claude Code uygular; istemdeki ya da CLAUDE.md'deki talimatlar Claude'un ne yapmaya çalışacağını şekillendirir, Claude Code'un neye izin verdiğini değiştirmez."
          }
        },
        {
          "id": "b03-d1-s8",
          "tur": "coktan",
          "kart": 1,
          "soru": "Bir silme komutuna 'bir daha sorma' dedin, sonra vazgeçtin. O izin kuralı nerede duruyor?",
          "secenekler": [
            "Bu klasörün yerel ayar dosyasında",
            "CLAUDE.md'nin kurallar bölümünde",
            "Claude'un otomatik hafızasında"
          ],
          "dogru": 0,
          "ipucu": "İzin penceresinde verilen kalıcı onayın nereye yazıldığını düşün.",
          "aciklama": "Komut için verilen 'bir daha sorma' kuralı .claude/settings.local.json dosyasına yazılır; geri almak için kural o dosyadan çıkarılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "“Yes, and don't ask again” seçilip onay kalıcı kaydedildiğinde, örneğin bir Bash komutu için, Claude Code kuralı git deposunun kökündeki .claude/settings.local.json dosyasına yazar."
          }
        }
      ]
    },
    {
      "id": "b03-d2",
      "baslik": "Altı izin modu (permission mode)",
      "hedefler": [
        "Modların her birinde neyin sormadan çalıştığını anlatabilir.",
        "Verilen bir iş için uygun modu ayırt edebilir.",
        "Bir işin sorulmadan reddedilmesinin ya da engellenmesinin hangi moddan geldiğini ayırt edebilir."
      ],
      "anlatim": [
        "Manual sormadan yalnız okur, gerisini sana sorar; hassas iş içindir. Bypass permissions (bypassPermissions) her şeyi denetimsiz yapar; yalnız bilgisayarına zarar veremeyeceği ayrı bir ortam içindir.",
        "Accept edits (acceptEdits) dosya düzenlemeyi ve sık dosya komutlarını da sormadan yapar; düzenlemeleri sonradan gözden geçirirsin. Plan okur ama kaynak dosyayı düzenlemez; kodu tanımak içindir.",
        "Auto her şeyi arka planda güvenlik denetimiyle yapar: ayrı bir sınıflandırıcı model (classifier) eylemleri senin yerine gözden geçirir. Uzun işlerde izin sorusu yorgunluğunu azaltır.",
        "Don't ask (dontAsk) çalışma klasöründe okur, önceden izin verilen araçları çalıştırır; soracak olan her şey reddedilir. Masaüstünde yok, yalnız terminalde (CLI) var."
      ],
      "terimler": [
        {
          "tr": "izin modu",
          "en": "permission mode",
          "aciklama": "Claude'un hangi işi sana sormadan yapabileceğini belirleyen oturum ayarı."
        },
        {
          "tr": "sınıflandırıcı",
          "en": "classifier",
          "aciklama": "Auto modunda eylemleri çalışmadan önce senin yerine gözden geçiren ayrı model."
        }
      ],
      "sorular": [
        {
          "id": "b03-d2-s1",
          "tur": "coktan",
          "kart": 1,
          "soru": "Accept edits açık; düzenlemeler sorulmuyor ama test komutu soruldu. Neden?",
          "secenekler": [
            "Komutlar bu modda bir kez sorulur, sonra geçer",
            "Test, bu modun sormadığı işlerden değil",
            "Test komutları her modda sorulur"
          ],
          "dogru": 1,
          "ipucu": "Bu modun düzenlemenin yanında hangi tür komutları serbest bıraktığını düşün.",
          "aciklama": "Accept edits dosya düzenlemeyi ve sık dosya komutlarını sormadan yapar; test komutu bunlardan değildir, sorulur. Auto gibi modlarda ise test komutu sorulmadan çalışabilir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Mod tablosunda default yalnız okumayı, acceptEdits okuma, dosya düzenleme ve sık dosya komutlarını, auto arka plan güvenlik denetimiyle her şeyi, bypassPermissions ise her şeyi sormadan çalıştırır."
          }
        },
        {
          "id": "b03-d2-s2",
          "tur": "eslestir",
          "kart": 1,
          "soru": "Her işi ona en uygun modla eşleştir.",
          "ciftler": [
            [
              "Ödeme kodu değişecek; her adımı kendin görmek istiyorsun",
              "Manual"
            ],
            [
              "Yirmi dosyada yazım düzeltmesi; sonunda topluca bakacaksın",
              "Accept edits"
            ],
            [
              "Yabancı bir kodu tanıyacaksın; hiçbir dosya değişmesin",
              "Plan"
            ]
          ],
          "ipucu": "Her işte ne kadar gözetim istediğini ve dosyanın değişip değişmeyeceğini düşün.",
          "aciklama": "Manual her eylemi sana onaylatır; Accept edits düzenlemeyi sormadan yapar, gözden geçirmeyi sonraya bırakır. Plan okur ve önerir ama dosyayı düzenlemez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Manual modu tabloda ayar adı default ile geçer; tablonun en uygun sütununda default her eylemi kendin gözden geçirmek ve hassas iş, acceptEdits gözden geçirdiğin kod üzerinde çalışmak (düzenlemeleri tek tek onaylamak yerine sonradan gözden geçirmek), plan değiştirmeden önce kod tabanını keşfetmek, auto uzun işler ve izin sorusu yorgunluğunu azaltmak içindir."
          }
        },
        {
          "id": "b03-d2-s3",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Terminalde dontAsk ile gece işi koştu; sabah bir adım yapılmamış, bekleyen onay yok. Adımın aracı ___.",
          "secenekler": [
            "önceden izinli değildi",
            "sınıflandırıcıya takıldı",
            "gereksiz bulunup atlandı"
          ],
          "dogru": 0,
          "ipucu": "Bu modda sorulacak bir iş çıkınca ne olduğunu düşün.",
          "aciklama": "dontAsk önceden izin verilen araçları çalıştırır, soracak olan her şeyi reddeder; iş onay beklemeden sürer. Sınıflandırıcı Auto modunun parçasıdır.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-in-action/permission-modes",
            "kopya": "ders-action-04-permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Don't ask, onay verecek kimsenin olmadığı durumlar için doğru seçimdir; Claude önceden izin verilen araçları çalıştırır, soracak olan her şey kendiliğinden reddedilir."
          }
        },
        {
          "id": "b03-d2-s4",
          "tur": "coktan",
          "kart": 0,
          "soru": "Kendi bilgisayarında Bypass permissions açık kalmış; Claude bir klasörü sormadan sildi. Bu nasıl oldu?",
          "secenekler": [
            "Claude silmeyi güvenli bulup kendine izin verdi",
            "Bu modda hiçbir iş sorulmaz ve denetlenmez",
            "Silme için önceden bir onay verilmiş"
          ],
          "dogru": 1,
          "ipucu": "Bu modun sormadan yaptığı işlerde bir denetim kalıp kalmadığını düşün.",
          "aciklama": "Bypass permissions her şeyi denetimsiz yapar; bu yüzden yalnız bilgisayarına zarar veremeyeceği yalıtılmış kap ya da sanal makine içindir. Önceden onay ya da Claude'un kararı gerekmez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "bypassPermissions yalnız yalıtılmış kaplar ve sanal makineler için uygundur."
          }
        },
        {
          "id": "b03-d2-s6",
          "tur": "coktan",
          "kart": 2,
          "soru": "Auto açık, ayarda yasak kuralı yok. Rapor istedin; Claude dosyayı dışarı göndermeye kalktı, gönderim olmadı, soru da gelmedi. Kaynağı?",
          "secenekler": [
            "Ayrı bir model, isteğini aşan eylemi durdurdu",
            "Auto dosya göndermeyi hiç yapamaz",
            "Gönderim onay bekliyor; pencereyi görmedin"
          ],
          "dogru": 0,
          "ipucu": "Auto modunda eylemlere senin yerine kimin baktığını düşün.",
          "aciklama": "Auto modunda ayrı bir sınıflandırıcı model eylemleri çalışmadan önce inceler ve isteğinin ötesine geçeni engeller. Rapor istemek dosyayı dışarı göndermeyi kapsamaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Ayrı bir sınıflandırıcı model eylemleri çalışmadan önce inceler ve isteğinin ötesine geçen her şeyi engeller."
          }
        },
        {
          "id": "b03-d2-s8",
          "tur": "coktan",
          "kart": 2,
          "soru": "Saatler sürecek işte Claude komut da koşacak; arada başında olmayacaksın ama eylemler bir denetimden geçsin. Hangi mod?",
          "secenekler": [
            "Accept edits",
            "Auto",
            "Bypass permissions"
          ],
          "dogru": 1,
          "ipucu": "Hangi modun sormadan çalışırken arka planda bir denetim yaptığını düşün.",
          "aciklama": "Auto uzun işlerde sormadan çalışır ve eylemleri bir sınıflandırıcıya denetletir. Accept edits komutları sorar ve iş sen yokken bekler, Bypass permissions hiç denetlemez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Mod tablosunda default yalnız okumayı, acceptEdits okuma, dosya düzenleme ve sık dosya komutlarını, auto arka plan güvenlik denetimiyle her şeyi, bypassPermissions ise her şeyi sormadan çalıştırır."
          }
        }
      ]
    },
    {
      "id": "b03-d3",
      "baslik": "Plan modu (plan mode)",
      "hedefler": [
        "Plan modunda Claude'un neyi yapıp neyi yapmadığını anlatabilir.",
        "Plan geldiğinde hangi devam seçeneğinin işine uyduğunu ayırt edebilir.",
        "Claude'un plan kapısında neden durduğunu anlatabilir."
      ],
      "anlatim": [
        "Plan modunda Claude dosyaları okur, keşif için komut çalıştırır ve bir plan yazar. Ama kaynak dosyalarını düzenlemez.",
        "Düzenlemeler sen planı onaylayana kadar kapalı kalır. Masaüstünde Plan'ı mod seçiciden seçersin; seçim yalnız o oturum için geçer.",
        "Plan hazır olunca Claude nasıl devam edeceğini sorar: onaylayıp başlamak, düzenlemeleri tek tek onaylamak ya da planlamaya devam edip neyin değişeceğini söylemek.",
        "Onaylamadan önce bak: plan beklediğin dosyaları adlandırıyor mu? Değilse eksiği söyle, yeni planı oku.",
        "Plan kapısı (CLAUDE.md): iş birden fazla oturuma yayılacaksa ya da silme, izin değişikliği gibi geri alınamaz bir işe dokunuyorsa Claude önce plan sunar, durur."
      ],
      "terimler": [
        {
          "tr": "plan modu",
          "en": "plan mode",
          "aciklama": "Claude'un dosyaları okuyup araştırdığı, kaynak dosyalarını düzenlemeden plan önerdiği izin modu."
        }
      ],
      "sorular": [
        {
          "id": "b03-d3-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Plan modundasın; Claude kodu tanırken bir arama komutu koştu. Bu ne anlama gelir?",
          "secenekler": [
            "Plan modu kapandı; düzenleme başlayacak",
            "Olağan; bu mod araştırırken komut da koşar",
            "Claude modu çiğnedi; işi durdurmalısın"
          ],
          "dogru": 1,
          "ipucu": "Bu modda yasak olanın tam olarak ne olduğunu düşün.",
          "aciklama": "Plan modunda Claude okur, keşif için komut çalıştırır ve plan yazar; yalnız kaynak dosyalarını düzenlemez. Komut görmek modun kapandığını göstermez.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Plan modunda Claude dosyaları okur, keşif için kabuk komutları çalıştırır ve bir plan yazar, ama kaynak dosyalarını düzenlemez."
          }
        },
        {
          "id": "b03-d3-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Düzelt dedin. Claude dosyaları okudu, uzun bir cevap yazıp durdu; ne dosya değişti ne izin penceresi açıldı. Kaynağı?",
          "secenekler": [
            "Manual seçili; düzenleme izni bekliyor",
            "Claude hatayı bulamayıp vazgeçti",
            "Plan seçili; senin onayını bekliyor"
          ],
          "dogru": 2,
          "ipucu": "İzin penceresi açılmadığına göre Claude neyi bekliyor olabilir, düşün.",
          "aciklama": "Plan modunda düzenlemeler sen planı onaylayana kadar kapalıdır; Claude planı yazıp bekler. Manual olsaydı düzenleme için izin penceresi açılırdı.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Plan modu Claude'a değişiklikleri yapmadan araştırmasını ve önermesini söyler; bypass açık etkileşimli terminal oturumları dışında düzenlemeler sen planı onaylayana kadar engelli kalır."
          }
        },
        {
          "id": "b03-d3-s4",
          "tur": "eslestir",
          "kart": 2,
          "soru": "Plan geldi. Her durumu en uygun devam seçeneğiyle eşleştir.",
          "ciftler": [
            [
              "Plan değişecek bir dosyayı atlamış",
              "Planlamaya devam et, eksiği söyle"
            ],
            [
              "Plan doğru ama müşteri verisi tutan dosyaya dokunuyor",
              "Düzenlemeleri tek tek onayla"
            ],
            [
              "Plan doğru, dokunduğu dosyalar sıradan",
              "Onaylayıp başlat"
            ]
          ],
          "ipucu": "Hangi durumda düzenleme hiç başlamamalı, hangisinde her değişikliği yazılmadan görmek istersin, düşün.",
          "aciklama": "Eksik planı onaylarsan düzenleme eksik başlar; planlamaya devam edip eksiği söylersin. Hassas dosyada tek tek onay her değişikliği yazılmadan gösterir, sıradan işte onaylayıp başlatmak yeter.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Plan hazır olunca Claude onaylayıp başlamayı, düzenlemeleri tek tek onaylamayı ya da planlamaya devam etmeyi sunar; No, keep planning seçeneği plan modunda kalır ve neyin değişeceğini söylemeni sağlar."
          }
        },
        {
          "id": "b03-d3-s5",
          "tur": "bosluk",
          "kart": 4,
          "soru": "Claude işe başlamadan plan sunup durdu; çünkü iş ___.",
          "secenekler": [
            "yirmi dosyada yazım düzeltiyor",
            "uzun bir belgeyi özetliyor",
            "bir izin ayarını değiştiriyor",
            "yeni bir dosya ekliyor"
          ],
          "dogru": 2,
          "ipucu": "Hangi işin sonucunu geri almanın zor olduğunu düşün.",
          "aciklama": "Plan kapısı birden fazla oturuma yayılan ya da izin değişikliği gibi geri alınamaz işlerde devreye girer. Yirmi dosyalık yazım düzeltmesi tek oturumda biter ve geri alınabilir.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Plan kapısı, birden fazla oturuma yayılan ya da gönderim, silme, izin ve dış sistem ayarı değişikliği gibi geri alınamayan işlerde önce plan sunulmasını ister.",
            "soz": "silme, izin ve dış sistem ayarı değişikliği"
          }
        },
        {
          "id": "b03-d3-s7",
          "tur": "coktan",
          "kart": 1,
          "soru": "Dün bu klasörde Plan'la çalıştın. Bugün Claude plan yazmadan düzenleme istemeye başladı. Kaynağı?",
          "secenekler": [
            "Plan seçimi dünkü oturumla bitti",
            "Dünkü oturum kapanınca plan onaylanmış sayıldı",
            "Plan modu her sabah kendiliğinden kapanır"
          ],
          "dogru": 0,
          "ipucu": "Plan seçiminin ne kadar süre geçerli olduğunu düşün.",
          "aciklama": "Masaüstünde Plan seçimi yalnız o oturum için geçer; yeni oturum başka bir modla açılır. Oturumu kapatmak planı onaylamaz, zaman da modu kapatmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Yerel oturumda seçilen mod klasör başına hatırlanır, ama Plan'ı seçersen yalnız bu oturum için geçerli olur."
          }
        },
        {
          "id": "b03-d3-s8",
          "tur": "coktan",
          "kart": 3,
          "soru": "Plan yalnız 'giriş hatasını düzelteceğim' diyor. Onaylamadan önce ne yaparsın?",
          "secenekler": [
            "Onaylarsın; ayrıntı düzenlemede görünür",
            "Hangi dosyaları değiştireceğini sorarsın",
            "Planı reddedip isteği baştan yazarsın"
          ],
          "dogru": 1,
          "ipucu": "Onaydan önce planda neyin adının geçmesi gerektiğini düşün.",
          "aciklama": "Onaydan önce planın beklediğin dosyaları adlandırıp adlandırmadığına bakılır; adlandırmıyorsa eksik söylenir ve yeni plan okunur. Reddedip baştan yazmak gereksizdir.",
          "kaynak": {
            "adres": "https://academy.claude.com/courses/claude-code-101/your-first-prompt",
            "kopya": "ders-101-04-your-first-prompt.md",
            "okuma": "2026-11-15",
            "dayanak": "Plan moduna geçip küçük bir değişiklik iste; planı kabul etmeden önce beklediğin dosyaları adlandırıp adlandırmadığına bak, adlandırmıyorsa eksiği söyle ve yeni planı oku."
          }
        }
      ]
    },
    {
      "id": "b03-d4",
      "baslik": "İzin kuralı (permission rule): allow, ask, deny",
      "hedefler": [
        "Bir komutun neden sorulduğunu ya da engellendiğini kuralların sırasından (önce deny, sonra ask, sonra allow) ayırt edebilir.",
        "Bir kuralın aracın tamamını mı yoksa tek bir kullanımını mı gösterdiğini ayırt edebilir."
      ],
      "anlatim": [
        "Üç tür izin kuralı var: allow sormadan izin verir, ask sorar, deny engeller. Önce deny, sonra ask, sonra allow'a bakılır; ilk eşleşen kazanır.",
        "Kural bir aracın tamamını ya da parantez içinde belli bir kullanımını gösterir. Örneğin Skill(ad) tek bir skill'i, Bash(aws *) bütün aws komutlarını gösterir.",
        "Kuralın daha dar olması sırayı değiştirmez. Geniş bir yasak kuralı (deny rule), daha dar bir allow kuralına uyan kullanımı (çağrıyı) da engeller.",
        "Claude'u dış hizmetlere bağlayan her MCP sunucusu araçlar getirir. Kuralda mcp__sunucu__araç tek bir aracı, sonu yıldızlı mcp__sunucu__* bütün araçlarını gösterir."
      ],
      "terimler": [
        {
          "tr": "izin kuralı",
          "en": "permission rule",
          "aciklama": "Bir aracı ya da aracın belli bir kullanımını izinli, sorulu ya da yasak yapan ayar satırı."
        },
        {
          "tr": "yasak kuralı",
          "en": "deny rule",
          "aciklama": "Eşleşen aracın ya da çağrının kullanılmasını engelleyen izin kuralı."
        }
      ],
      "sorular": [
        {
          "id": "b03-d4-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Manual'dasın. Bir komuta ask kuralı eklettin ama komut hiç sorulmadan geri çevriliyor. Kaynağı?",
          "secenekler": [
            "Ask kuralı yeni oturumda işler",
            "Ona bir deny kuralı da uyuyor",
            "Manual ask kuralını reddeder"
          ],
          "dogru": 1,
          "ipucu": "Kurallara hangi sırayla bakıldığını düşün.",
          "aciklama": "Önce deny kurallarına bakılır; eşleşen deny komutu engeller, ask'a sıra gelmez. Ask kuralı tek başına olsaydı Manual'da sorulurdu.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Kurallar sırayla değerlendirilir: önce deny, sonra ask, sonra allow; bu sırada ilk eşleşen sonucu belirler ve kuralın ne kadar özel olduğu sırayı değiştirmez."
          }
        },
        {
          "id": "b03-d4-s4",
          "tur": "coktan",
          "kart": 3,
          "soru": "Bir sunucunun yalnız dosya oluşturma aracını yasaklattın; şimdi o sunucunun hiçbir aracı çalışmıyor. Kaynağı?",
          "secenekler": [
            "Kural sunucunun tamamını gösteriyor",
            "Tek araç yasaklanınca bütün sunucu kapanır",
            "Sunucunun yeniden bağlanması gerekiyor"
          ],
          "dogru": 0,
          "ipucu": "Kuralın tek bir araç adıyla mı bittiğini düşün.",
          "aciklama": "mcp__sunucu__araç biçimi tek bir aracı, sonu yıldızlı mcp__sunucu__* biçimi sunucunun bütün araçlarını gösterir. Tek aracı yasaklamak sunucuyu kapatmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir MCP sunucusunun her aracını eşlemek için mcp__<sunucu>__* yazılır, tek bir aracı eşlemek için tam adı mcp__<sunucu>__<araç> yazılır."
          }
        },
        {
          "id": "b03-d4-s5",
          "tur": "coktan",
          "kart": 2,
          "soru": "Bütün aws komutları yasak; yalnız listelemeyi açmak istiyorsun. Claude'a ne dersin?",
          "secenekler": [
            "Listeleme için bir allow kuralı ekle",
            "Listelemeyi ask kuralına koy, sorunca onaylarım",
            "Yasağı daralt, sonra listelemeye izin ver"
          ],
          "dogru": 2,
          "ipucu": "Önce hangi tür kurala bakıldığını hatırla.",
          "aciklama": "Allow kuralı deny kuralından istisna açamaz; ask'a da deny'dan sonra bakılır. Listelemenin çalışması için önce yasak, listelemeyi kapsamayacak biçimde daraltılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir allow kuralı, bir deny kuralından istisna açamaz."
          }
        },
        {
          "id": "b03-d4-s6",
          "tur": "coktan",
          "kart": 0,
          "soru": "Test komutu için allow kuralı eklettin ama Claude her seferinde yine soruyor. Kaynağı?",
          "secenekler": [
            "Manual mod allow kurallarını yok sayar",
            "Allow kuralı yeni oturumda işler",
            "Ona bir ask kuralı da uyuyor"
          ],
          "dogru": 2,
          "ipucu": "Allow'dan önce hangi tür kurala bakıldığını düşün.",
          "aciklama": "Ask kurallarına allow'dan önce bakılır; eşleşen ask kuralı, allow da uysa onay ister. Manual allow kurallarına uyar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Eşleşen bir ask kuralı, aynı çağrıya daha özel bir allow kuralı da uysa onay ister."
          }
        },
        {
          "id": "b03-d4-s8",
          "tur": "bosluk",
          "kart": 1,
          "soru": "Auto açık. aws s3 ls için ask kuralı istedin; şimdi her aws komutu soruluyor, ötekiler sorulmuyor. Kural ___ yazılmış.",
          "secenekler": [
            "Bash(aws s3 *) biçiminde",
            "Bash(aws *) biçiminde",
            "parantezsiz, Bash biçiminde"
          ],
          "dogru": 1,
          "ipucu": "Kuralın parantez içinde neyi gösterdiğini düşün.",
          "aciklama": "Bash(aws *) bütün aws komutlarını gösterir; parantezsiz Bash bütün komutları kapsar. Yalnız tek bir kullanım için parantezde o kullanım yazılır, Bash(aws s3 ls) gibi.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Kural bir aracın tamamını ya da parantez içinde belli bir kullanımını gösterir; Bash(aws *) bütün aws komutlarını, Bash(aws s3 ls) ise daha dar bir kullanımı eşler."
          }
        },
        {
          "id": "b03-d4-s9",
          "tur": "coktan",
          "kart": 3,
          "soru": "Bir sunucunun hiçbir aracı kullanılmasın dedin; Claude kuralı mcp__github__create_issue diye yazdı. Ne olur?",
          "secenekler": [
            "Sunucunun bütün araçları kapanır",
            "Yalnız o araç kapanır, ötekiler açık kalır",
            "Kural geçersiz olur, hiçbir araç kapanmaz"
          ],
          "dogru": 1,
          "ipucu": "Kuralın sonunda tek bir araç adı mı, yıldız mı olduğuna bak.",
          "aciklama": "mcp__sunucu__araç biçimi tek bir aracı gösterir; sunucunun bütün araçları için sonu yıldızlı mcp__github__* yazılır. İstediğin bu değilse kuralı düzelttirirsin.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permissions",
            "kopya": "permissions.md",
            "okuma": "2026-11-15",
            "dayanak": "Bir MCP sunucusunun her aracını eşlemek için mcp__<sunucu>__* yazılır, tek bir aracı eşlemek için tam adı mcp__<sunucu>__<araç> yazılır."
          }
        }
      ]
    },
    {
      "id": "b03-d5",
      "baslik": "Hiçbir modun kendiliğinden onaylamadığı işler",
      "hedefler": [
        "Açık bir ask kuralının hiçbir modda kendiliğinden onaylanmadığını anlatabilir.",
        "Deny kuralının her modda, Bypass permissions'ta bile engellediğini anlatabilir.",
        "CLAUDE.md'ye göre her seferinde sorulan işleri ve istisnasını ayırt edebilir."
      ],
      "anlatim": [
        "Bazı işleri hiçbir mod kendiliğinden onaylamaz, bypassPermissions dahil. Biri, açık bir sor kuralına (ask rule) uyan araçtır.",
        "Soru sorma aracı (AskUserQuestion) gibi senin cevabını bekleyen araçlar da böyledir. dontAsk modunda bu işler sana sorulmaz; allow kuralı olsa bile reddedilir.",
        "Auto modunda ise açık ask kuralı yine sana sorar.",
        "Mod yalnız temeli kurar; kurallar onun üstüne eklenir. Deny kuralı her modda engeller, bypassPermissions'ta bile; allow kurallarının ise bu modda etkisi yoktur.",
        "CLAUDE.md'ye göre mesaj gönderme ve ücretli harcama her seferinde sorulur, önceki onay geçmez. Ayar dosyası değişikliği de sorulur, kanca ekleme ve değiştirme hariç."
      ],
      "terimler": [
        {
          "tr": "sor kuralı",
          "en": "ask rule",
          "aciklama": "Eşleşen araç her kullanılmadan önce onay isteyen izin kuralı."
        },
        {
          "tr": "soru sorma aracı",
          "en": "AskUserQuestion",
          "aciklama": "Claude'un sana seçenekli soru sorduğu yerleşik araç; senin cevabını beklediği için hiçbir mod onu kendiliğinden onaylamaz."
        }
      ],
      "sorular": [
        {
          "id": "b03-d5-s1",
          "tur": "bosluk",
          "kart": 3,
          "soru": "Bypass açık bir deneme ortamında Claude bir komutu çalıştıramadı, sana sorulmadı da. Komutu ___ durdurdu.",
          "secenekler": [
            "sınıflandırıcı model",
            "ona uyan bir deny kuralı",
            "Bypass'ın dosya sınırı"
          ],
          "dogru": 1,
          "ipucu": "Modun temeli kurduğunu, hangi kuralın her modda geçtiğini düşün.",
          "aciklama": "Deny kuralları Bypass permissions dahil her modda engeller. Sınıflandırıcı Auto modunun parçasıdır; Bypass her işi denetimsiz yapar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Deny kuralları bypassPermissions dahil her modda engeller."
          }
        },
        {
          "id": "b03-d5-s2",
          "tur": "coktan",
          "kart": 0,
          "soru": "Deneme ortamında Bypass permissions açacaksın; push yine hep önüne gelsin istiyorsun. Ne yaparsın?",
          "secenekler": [
            "Push için bir allow kuralı koyarsın",
            "Push için bir ask kuralı koyarsın",
            "Manual'a dönersin; Bypass'ta bu olmaz"
          ],
          "dogru": 1,
          "ipucu": "Hangi kuralın en serbest modda bile sana döndüğünü düşün.",
          "aciklama": "Açık bir ask kuralına uyan aracı hiçbir mod kendiliğinden onaylamaz, Bypass permissions dahil. Allow kuralı ise sormadan izin verir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Claude Code, açık bir ask kuralına uyan araçları bypassPermissions dahil hiçbir modda kendiliğinden onaylamaz."
          }
        },
        {
          "id": "b03-d5-s4",
          "tur": "coktan",
          "kart": 2,
          "soru": "Auto açık. Claude çoğu işi sormadan yapıyor ama veri silen komuttan önce izin penceresi açtı. Kaynağı?",
          "secenekler": [
            "Mod kendiliğinden Manual'a döndü",
            "Auto komutları her zaman sorar",
            "Ona uyan bir ask kuralı var"
          ],
          "dogru": 2,
          "ipucu": "Auto'nun kaldırmadığı soruları düşün.",
          "aciklama": "Auto modu sıradan izin sorularını kaldırır ama açık ask kuralları yine soru açtırır. Auto komutları da çoğunlukla sormadan çalıştırır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Auto modunda açık ask kuralları yine de onay sorusu açtırır."
          }
        },
        {
          "id": "b03-d5-s6",
          "tur": "coktan",
          "kart": 4,
          "soru": "Aynı oturumda aynı müşteriye ikinci mesajı gönderecek; ilkine onay vermiştin. Claude yine soruyor. Neden?",
          "secenekler": [
            "Claude ilk onayı unuttu",
            "Claude ilk gönderimi başarısız sandı",
            "Bu işte önceki onay sonrakine taşınmaz"
          ],
          "dogru": 2,
          "ipucu": "Hangi işlerde önceki onayın sayılmadığını düşün.",
          "aciklama": "CLAUDE.md'ye göre mesaj gönderme her seferinde sorulur, önceki onay geçmez. Soruyu Claude'un unutması değil, kural doğurur.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Her seferinde sorulanlar arasında mesaj gönderme vardır ve önceki onay geçmez.",
            "soz": "Her seferinde basitçe sorulanlar, önceki onay geçmez: mesaj gönderme"
          }
        },
        {
          "id": "b03-d5-s7",
          "tur": "coktan",
          "kart": 1,
          "soru": "dontAsk ile uzun iş koştu; Claude'un sana soracağı seçim sorusu hiç gelmedi. Kaynağı?",
          "secenekler": [
            "Soru penceresi arka planda açık kaldı",
            "Bu mod cevap bekleyen aracı reddeder",
            "Allow kuralı yoktu; olsaydı sorardı"
          ],
          "dogru": 1,
          "ipucu": "Bu modda sana sorulacak bir şey çıkınca ne olduğunu düşün.",
          "aciklama": "Soru sorma aracı senin cevabını bekler; dontAsk modu onu, allow kuralı olsa bile reddeder. Bekleyen bir soru penceresi kalmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "dontAsk modu, allow kuralın eşleşse bile yerleşik AskUserQuestion aracını reddeder."
          }
        },
        {
          "id": "b03-d5-s8",
          "tur": "coktan",
          "kart": 4,
          "soru": "Claude ayar dosyasına testiyle bir kanca ekledi, sana sormadı. Kural çiğnendi mi?",
          "secenekler": [
            "Evet; ayar dosyasındaki her değişiklik sorulur",
            "Hayır; kanca eklemek sorulmayan istisnadır"
          ],
          "dogru": 1,
          "ipucu": "Ayar dosyası değişikliğinde hangi işin ayrı tutulduğunu düşün.",
          "aciklama": "Ayar dosyası değişikliği her seferinde sorulur, ama kanca ekleme ve değiştirme hariçtir. Kanca, testi ve doğrulayıcısıyla sorulmadan eklenir.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "Ayar dosyalarının değişikliği her seferinde sorulur, kanca ekleme ve değiştirme hariç: testi ve doğrulayıcısıyla sorulmaz.",
            "soz": "kanca ekleme ve değiştirme hariç: testi ve doğrulayıcısıyla sorulmaz"
          }
        }
      ]
    },
    {
      "id": "b03-d6",
      "baslik": "Kum havuzu (sandbox)",
      "hedefler": [
        "Kum havuzunun yalnız kabuk komutlarını sınırladığını anlatabilir.",
        "Bir komutun neden bir klasöre yazamadığını ya da bir siteye bağlanamadığını ayırt edebilir."
      ],
      "anlatim": [
        "Kum havuzu, işletim sisteminin Claude'un çalıştırdığı kabuk komutu (shell command) çevresine çektiği sınırdır. Bu komutların hangi dosyalara ve alan adlarına ulaşacağını sen belirlersin.",
        "Kum havuzu yalnız kabuk komutlarını kapsar. Read, Edit, Write gibi dosya araçları onun dışındadır, izin kurallarına uyar.",
        "Kancalar ve yerel MCP sunucuları da sınırın dışındadır; senin tam erişiminle çalışır.",
        "Kum havuzu varsayılan olarak kapalıdır. Açıkken komutlar ağa doğrudan çıkamaz; her bağlantı izinli alan adları listesine göre denetlenir.",
        "Bizim .claude/settings.json dosyasında kum havuzu açık. allowWrite listesi yazmaya bir yol ekler: ~/Library/Application Support/beyin-v3."
      ],
      "terimler": [
        {
          "tr": "kum havuzu",
          "en": "sandbox",
          "aciklama": "İşletim sisteminin, kabuk komutlarının ulaşabileceği dosyaları ve ağ adreslerini sınırladığı sınır."
        },
        {
          "tr": "kabuk komutu",
          "en": "shell command",
          "aciklama": "Claude'un Bash aracıyla çalıştırdığı terminal komutu."
        }
      ],
      "sorular": [
        {
          "id": "b03-d6-s1",
          "tur": "coktan",
          "kart": 0,
          "soru": "Claude'un komutu çalıştı ama bir klasöre yazarken hata verdi; izin penceresi açılmadı. Kaynağı?",
          "secenekler": [
            "Bir izin kuralı engelledi",
            "Kum havuzu o klasörü kapatıyor",
            "Klasör başka bir programda açık"
          ],
          "dogru": 1,
          "ipucu": "Komut çalıştıktan sonra onu neyin sınırlayabileceğini düşün.",
          "aciklama": "Kum havuzu, işletim sisteminin kabuk komutlarının çevresine çektiği sınırdır; komut çalışır ama sınırın dışına erişemez. İzin kuralı ise komutu çalışmadan önce durdurur.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sandboxing",
            "kopya": "sandboxing.md",
            "okuma": "2026-11-15",
            "dayanak": "Kum havuzu, Claude'un çalıştırdığı kabuk komutlarının çevresine işletim sisteminin uyguladığı bir sınırdır; bu komutların hangi dosyalara ve alan adlarına ulaşacağını sen belirlersin."
          }
        },
        {
          "id": "b03-d6-s2",
          "tur": "coktan",
          "kart": 1,
          "soru": "Kum havuzunda okumaya kapalı bir klasöre Claude'un komutu giremedi, Read aracı girdi. Neden?",
          "secenekler": [
            "Read yönetici yetkisiyle çalışır",
            "Read komut değil; kum havuzu onu sarmaz",
            "Read'e verdiğin onay kapatmayı aştı"
          ],
          "dogru": 1,
          "ipucu": "Kum havuzunun hangi tür işi sardığını düşün.",
          "aciklama": "Kum havuzu yalnız kabuk komutlarını kapsar; Read gibi dosya araçları onun dışındadır ve izin kurallarına uyar. Bu yüzden okumaya kapatma Read'i durdurmaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sandboxing",
            "kopya": "sandboxing.md",
            "okuma": "2026-11-15",
            "dayanak": "Read, Edit, Write gibi dosya araçları izin kurallarına uyar ve bir denyRead girdisi Read aracını durdurmaz."
          }
        },
        {
          "id": "b03-d6-s3",
          "tur": "coktan",
          "kart": 4,
          "soru": "Kum havuzu açıkken Claude'un komutu beyin-v3 klasörüne yazdı. Kum havuzu bunu neden durdurmadı?",
          "secenekler": [
            "Kum havuzu yalnız okumayı sınırlar",
            "Bu yol ayarda yazmaya eklenmiş",
            "Kum havuzu yalnız ağı sınırlar"
          ],
          "dogru": 1,
          "ipucu": "Ayar dosyasında kum havuzuna yazma yolu ekleyen listeyi düşün.",
          "aciklama": "Bizim ayar dosyasında kum havuzunun allowWrite listesi ~/Library/Application Support/beyin-v3 yolunu yazmaya ekler. Kum havuzu hem dosyaları hem ağı sınırlar.",
          "kaynak": {
            "adres": ".claude/settings.json",
            "okuma": "2026-11-24",
            "dayanak": "Kum havuzu ayarında filesystem.allowWrite listesi ~/Library/Application Support/beyin-v3 yolunu taşır.",
            "soz": "~/Library/Application Support/beyin-v3"
          }
        },
        {
          "id": "b03-d6-s6",
          "tur": "coktan",
          "kart": 3,
          "soru": "Kum havuzu açık; Claude'un komutu bir siteye bağlanamadı, tarayıcında site açılıyor. Kaynağı?",
          "secenekler": [
            "Bir deny kuralı siteyi engelledi",
            "Site, komutların çıkabildiği listede yok",
            "Site komutlara kapalı, yalnız tarayıcıya açık"
          ],
          "dogru": 1,
          "ipucu": "Kum havuzu açıkken komutların ağa nasıl çıktığını düşün.",
          "aciklama": "Kum havuzu açıkken komutlar ağa doğrudan çıkamaz; her bağlantı izinli alan adları listesine göre denetlenir. Listede olmayan siteye komut bağlanamaz.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sandboxing",
            "kopya": "sandboxing.md",
            "okuma": "2026-11-15",
            "dayanak": "Ağ için doğrudan çıkış yoktur; bağlantılar her adresi izinli alan adlarına göre denetleyen bir vekilden geçer ve bu liste boş başlar."
          }
        },
        {
          "id": "b03-d6-s7",
          "tur": "coktan",
          "kart": 2,
          "soru": "Kum havuzu açık; bir kanca, komutların yazamadığı bir klasöre yazdı. Kaynağı?",
          "secenekler": [
            "Kanca bu sınıra girmez; senin yetkinle koşar",
            "Kum havuzu kancalarda yalnız okumayı sınırlar",
            "Kanca Claude'dan izin alıp yazdı"
          ],
          "dogru": 0,
          "ipucu": "Kum havuzunun neyi sardığını, kancanın kimin adına çalıştığını düşün.",
          "aciklama": "Kancalar ve yerel MCP sunucuları kum havuzunun dışında, senin tam erişiminle çalışır. Kum havuzu yalnız Claude'un kabuk komutlarını sarar.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/sandboxing",
            "kopya": "sandboxing.md",
            "okuma": "2026-11-15",
            "dayanak": "Kum havuzu kabuk komutlarını sarar; Read, Edit, Write gibi dosya araçları izin kurallarına uyar, kancalar ve yerel MCP sunucuları ise senin tam erişiminle çalışır."
          }
        },
        {
          "id": "b03-d6-s8",
          "tur": "bosluk",
          "kart": 4,
          "soru": "Başka projede Claude'un komutları her yere yazabiliyor, bu klasörde yazamıyor; çünkü kum havuzu ___.",
          "secenekler": [
            "yalnız Manual modunda işler",
            "yalnız burada açık",
            "yalnız masaüstü uygulamasında işler"
          ],
          "dogru": 1,
          "ipucu": "Kum havuzunun varsayılan olarak açık mı kapalı mı geldiğini düşün.",
          "aciklama": "Kum havuzu varsayılan olarak kapalıdır; bizim ayar dosyası onu açar. Mod ya da uygulama bunu değiştirmez.",
          "kaynak": {
            "adres": ".claude/settings.json",
            "okuma": "2026-11-24",
            "dayanak": "Ayar dosyasının kum havuzu bölümü enabled true ile açılır.",
            "soz": "\"sandbox\": { \"enabled\": true"
          }
        }
      ]
    },
    {
      "id": "b03-d7",
      "baslik": "Masaüstünde mod seçmek; bizim kural",
      "hedefler": [
        "Modu oturum sırasında değiştirebileceğini ve yeni oturumun hangi modla açıldığına bakmayı anlatabilir.",
        "Auto modunda Claude'un neden yine durup sorabildiğini ayırt edebilir."
      ],
      "anlatim": [
        "Masaüstünde izin modunu istem kutusunun altındaki mod seçici (mode selector) değiştirir, terminalde Shift+Tab. Modu oturum sırasında istediğin an değiştirebilirsin.",
        "Yerel oturumda seçtiğin mod o klasör için hatırlanır; yeni oturum ayardaki bir varsayılanla da açılabilir. İlk mesajdan önce seçiciye bak.",
        "Mod seçicide Manual, Accept edits ve Plan hep vardır. Auto ve Bypass permissions ise ancak açıldıklarında seçicide görünür.",
        "Auto modu Claude'u soru sormadan çalışmaya iter. Ama istemin ya da bir skill açıkça soruya dayanıyorsa Claude yine sorar.",
        "CLAUDE.md: 'İzin modunu kullanıcı seçer; bu dosyadaki ve skill'lerdeki kapılar her modda geçerlidir.' Bu yüzden Auto'da da birden fazla oturuma yayılan iş önce plan ister."
      ],
      "terimler": [
        {
          "tr": "mod seçici",
          "en": "mode selector",
          "aciklama": "Masaüstü Code sekmesinde, istem kutusunun altındaki satırda izin modunu değiştirdiğin seçici."
        }
      ],
      "sorular": [
        {
          "id": "b03-d7-s2",
          "tur": "coktan",
          "kart": 0,
          "soru": "Manual'la başladın; otuz mesaj sonra düzenlemeleri artık sormadan yaptırmak istiyorsun. Ne yaparsın?",
          "secenekler": [
            "Yeni oturum açarsın; mod başta seçilir",
            "Seçiciden şimdi Accept edits'e geçersin",
            "Claude'a 'artık sorma' yazarsın"
          ],
          "dogru": 1,
          "ipucu": "Modun oturum içinde ne zaman değiştirilebildiğini düşün.",
          "aciklama": "Modu oturum sırasında istediğin an mod seçiciden değiştirebilirsin; yeni oturuma gerek yoktur. Sohbette 'sorma' demek izin penceresini kaldırmaz, onu mod ve kurallar belirler.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "İzin modlarını istem kutusunun altındaki satırdaki mod seçiciyle istediğin an değiştirebilirsin."
          }
        },
        {
          "id": "b03-d7-s3",
          "tur": "coktan",
          "kart": 1,
          "soru": "Yeni oturumu açıp hemen işi yazdın. Claude dosyaları sormadan değiştirdi; Manual bekliyordun. Kaynağı?",
          "secenekler": [
            "Manual ilk mesajda sormaz, sonrakilerde sorar",
            "Oturum, klasörün hatırlanan moduyla açıldı",
            "Claude işi küçük bulup izin istemedi"
          ],
          "dogru": 1,
          "ipucu": "Yeni oturumun hangi modla açıldığını neyin belirlediğini düşün.",
          "aciklama": "Yerel oturumda seçilen mod klasör için hatırlanır, yeni oturum ayardaki bir varsayılanla da açılabilir. Bu yüzden ilk mesajdan önce seçiciye bakılır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Yeni yerel oturum ~/.claude/settings.json ya da yönetilen ayarlardaki bir defaultMode ile açılabilir, bu yüzden ilk mesajdan önce seçiciyi kontrol et."
          }
        },
        {
          "id": "b03-d7-s5",
          "tur": "coktan",
          "kart": 4,
          "soru": "Auto açık. Claude birkaç oturum sürecek bir taşıma işine plan sunmadan başladı. Ne yaparsın?",
          "secenekler": [
            "Bırakırsın; Auto'da plan kapısı uygulanmaz",
            "Plan moduna geçersin; kapı yalnız orada işler",
            "Durdurup önce plan istersin"
          ],
          "dogru": 2,
          "ipucu": "Kapıların hangi modlarda geçerli olduğunu düşün.",
          "aciklama": "CLAUDE.md'ye göre kapılar her modda geçerlidir; birden fazla oturuma yayılan iş Auto'da da önce plan ister. Plan kapısı bir talimattır, Plan modu değildir.",
          "kaynak": {
            "adres": "CLAUDE.md",
            "okuma": "2026-11-24",
            "dayanak": "İzin modunu kullanıcı seçer; bu dosyadaki ve skill'lerdeki kapılar her modda geçerlidir.",
            "soz": "İzin modunu kullanıcı seçer; bu dosyadaki ve skill'lerdeki kapılar her modda geçerlidir."
          }
        },
        {
          "id": "b03-d7-s6",
          "tur": "coktan",
          "kart": 3,
          "soru": "Auto açık. Bir skill çalışırken Claude durup sana seçenekli bir soru sordu. Kaynağı?",
          "secenekler": [
            "Sınıflandırıcı model skill'i durdurdu",
            "Skill senden cevap istiyor; Auto bunu kaldırmaz",
            "Skill çalışırken mod Manual'a döner"
          ],
          "dogru": 1,
          "ipucu": "Auto'nun hangi soruları yine de bıraktığını düşün.",
          "aciklama": "Auto Claude'u soru sormadan çalışmaya iter, ama istem ya da skill açıkça soruya dayanıyorsa Claude yine sorar. Sınıflandırıcı soru sormaz, eylemi engeller.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Auto modu Claude'u açıklayıcı soru sormadan çalışmaya iter, ama istemin ya da bir skill açıkça soruya dayanıyorsa Claude yine sorar."
          }
        },
        {
          "id": "b03-d7-s8",
          "tur": "bosluk",
          "kart": 2,
          "soru": "Masaüstünde mod seçiciyi açtın, Auto listede yok. Çünkü Auto ___.",
          "secenekler": [
            "yalnız terminalde vardır",
            "henüz açılmamış; açılınca görünür",
            "yalnız Plan'dan sonra seçilebilir"
          ],
          "dogru": 1,
          "ipucu": "Seçicide hangi modların hep, hangilerinin koşullu göründüğünü düşün.",
          "aciklama": "Masaüstü mod seçicisinde Manual, Accept edits ve Plan hep vardır; Auto ve Bypass permissions açık olduğunda görünür. Yalnız terminalde olan mod dontAsk'tır.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/desktop",
            "kopya": "desktop.md",
            "okuma": "2026-11-15",
            "dayanak": "Masaüstü mod seçicisinde Manual, Accept edits ve Plan vardır; Auto ve Bypass permissions açık olduğunda görünür."
          }
        },
        {
          "id": "b03-d7-s9",
          "tur": "coktan",
          "kart": 3,
          "soru": "Auto açık. Claude sormadan bir başlık seçti, beğenmedin. Bir dahakine ne yaparsın?",
          "secenekler": [
            "İstemde seçimi sana bırakmasını yazarsın",
            "Manual'a geçersin; Manual seçimleri sorar",
            "Başlık seçimini ask kuralına bağlatırsın"
          ],
          "dogru": 0,
          "ipucu": "Auto'da Claude'un hangi durumda yine soru sorduğunu düşün.",
          "aciklama": "Auto Claude'u sormadan çalışmaya iter, ama istem açıkça soruya dayanıyorsa Claude yine sorar. Manual seçim sormaz, araç izni sorar; ask kuralı da araç çağrısı içindir.",
          "kaynak": {
            "adres": "https://code.claude.com/docs/en/permission-modes",
            "kopya": "permission-modes.md",
            "okuma": "2026-11-15",
            "dayanak": "Auto modu Claude'u açıklayıcı soru sormadan çalışmaya iter, ama istemin ya da bir skill açıkça soruya dayanıyorsa Claude yine sorar."
          }
        }
      ]
    }
  ]
});
