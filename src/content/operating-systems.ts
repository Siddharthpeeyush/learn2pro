// Learn2Pro v2 — Operating Systems (CSE).
// Written by AI in Learn2Pro's own style. Facts checked against standard
// OS concepts; all examples, wording and numbers are original.
import type { Subject } from '../lib/types';

export const operatingSystems: Subject = {
  id: 'operating-systems',
  name: {
    hinglish: 'Operating Systems',
    english: 'Operating Systems',
    hindi: 'ऑपरेटिंग सिस्टम',
  },
  tagline: {
    hinglish: 'Phone aur laptop ke andar ka manager — process, memory, files aur deadlock, step by step.',
    english: 'The manager inside your phone and laptop — processes, memory, files and deadlocks, step by step.',
    hindi: 'फ़ोन और लैपटॉप के अंदर का मैनेजर — प्रोसेस, मेमोरी, फ़ाइलें और डेडलॉक, आसान भाषा में।',
  },
  icon: '⚙️',
  color: '#06b6d4',
  category: 'cse',
  articles: [
    {
      id: 'os-intro',
      subjectId: 'operating-systems',
      title: {
        hinglish: 'Operating System kya hai aur uske kaam',
        english: 'What is an operating system and what does it do',
        hindi: 'ऑपरेटिंग सिस्टम क्या है और उसके काम',
      },
      summary: {
        hinglish: 'OS hardware aur apps ke beech ka manager hai — CPU, memory, files aur devices ko baant-ta hai taaki sab apps aaram se chalein.',
        english: 'The OS is the manager between hardware and apps — it shares the CPU, memory, files and devices so every app runs smoothly.',
        hindi: 'OS हार्डवेयर और ऐप्स के बीच का मैनेजर है — CPU, मेमोरी, फ़ाइलें और डिवाइस बाँटता है ताकि हर ऐप आराम से चले।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish: 'Operating system (OS) woh software hai jo computer ke hardware aur aapke apps ke beech mein baithta hai. OS ke bina har app ko khud hardware se baat karni padti — har app ko printer, keyboard, disk aur network ka alag-alag tareeka seekhna padta, jo namumkin ke barabar hai. OS ke chaar bade kaam hain: process chalana, memory baantna, files sambhalna, aur devices ko control karna. Kernel OS ka dil hai — woh hissa jo hardware se seedha baat karta hai. Baaki cheezein jaise settings app, file manager aur desktop, kernel ke upar chalti hain. Isi liye OS ko system software kehte hain — yeh woh neev hai jis par baaki sab khada hai.',
            english: 'An operating system (OS) is the software that sits between a computer’s hardware and your apps. Without an OS, every app would have to talk to the hardware itself — every app would need to learn its own way of using the printer, keyboard, disk and network, which is nearly impossible. The OS has four big jobs: running processes, sharing memory, managing files, and controlling devices. The kernel is the heart of the OS — the part that talks directly to the hardware. Everything else, like the settings app, the file manager and the desktop, runs on top of the kernel. That is why the OS is called system software — it is the foundation everything else stands on.',
            hindi: 'ऑपरेटिंग सिस्टम (OS) वह सॉफ़्टवेयर है जो कंप्यूटर के हार्डवेयर और आपके ऐप्स के बीच में बैठता है। OS के बिना हर ऐप को खुद हार्डवेयर से बात करनी पड़ती — हर ऐप को प्रिंटर, कीबोर्ड, डिस्क और नेटवर्क का अलग तरीका सीखना पड़ता, जो लगभग नामुमकिन है। OS के चार बड़े काम हैं: प्रोसेस चलाना, मेमोरी बाँटना, फ़ाइलें संभालना और डिवाइस चलाना। कर्नेल OS का दिल है — वह हिस्सा जो हार्डवेयर से सीधे बात करता है। बाकी चीज़ें जैसे सेटिंग्स ऐप, फ़ाइल मैनेजर और डेस्कटॉप, कर्नेल के ऊपर चलती हैं। इसीलिए OS को सिस्टम सॉफ़्टवेयर कहते हैं — यही वह नींव है जिस पर बाकी सब खड़ा है।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असली ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish: 'Sochiye ek railway station ka station master. Train (apps) aati-jaati rehti hain, lekin platform (CPU), waiting room (memory) aur ticket counter (disk) ek hi hain. Station master decide karta hai kaunsi train kis platform par kab rukegi, kis passenger ko waiting room milega, aur kaun pehle jayega. OS bilkul wahi station master hai. Aap ek saath gaana sun rahe ho, photo download kar rahe ho aur message bhi likh rahe ho — OS teeno apps ko CPU ke chhote-chhote time slices deta hai, itni tezi se ki aapko lagta hai sab ek saath chal raha hai.',
            english: 'Think of a railway station master. Trains (apps) keep coming and going, but there is only one set of platforms (the CPU), one waiting room (memory) and one ticket counter (the disk). The station master decides which train stops at which platform and when, who gets the waiting room, and who goes first. The OS is exactly that station master. You are listening to music, downloading a photo and typing a message at the same time — the OS gives all three apps tiny slices of CPU time, so fast that it feels like everything runs together.',
            hindi: 'एक रेलवे स्टेशन के स्टेशन मास्टर को सोचिए। ट्रेनें (ऐप्स) आती-जाती रहती हैं, लेकिन प्लेटफ़ॉर्म (CPU), वेटिंग रूम (मेमोरी) और टिकट काउंटर (डिस्क) एक ही हैं। स्टेशन मास्टर तय करता है कौन सी ट्रेन किस प्लेटफ़ॉर्म पर कब रुकेगी, किस यात्री को वेटिंग रूम मिलेगा और कौन पहले जाएगा। OS बिल्कुल वही स्टेशन मास्टर है। आप एक साथ गाना सुन रहे हैं, फ़ोटो डाउनलोड कर रहे हैं और मैसेज भी लिख रहे हैं — OS तीनों ऐप्स को CPU के छोटे-छोटे समय के टुकड़े देता है, इतनी तेज़ी से कि आपको लगता है सब एक साथ चल रहा है।',
          },
        },
        {
          heading: {
            hinglish: 'Step by step — worked example',
            english: 'Step by step — worked example',
            hindi: 'स्टेप बाय स्टेप — हल किया हुआ उदाहरण',
          },
          body: {
            hinglish: 'Maan lijiye aapke phone mein 8 GB RAM hai aur aap photo gallery kholte ho. Step 1: aap icon par tap karte ho — tap ki khabar OS ke input driver tak jaati hai. Step 2: OS disk par gallery app dhoondhta hai aur uska code memory mein load karta hai. Step 3: OS hisaab lagata hai — OS khud 1.5 GB use kar raha hai, Chrome pehle se 2 GB le chuka hai, music app 0.5 GB le chuka hai. Bacha hua = 8 − 1.5 − 2 − 0.5 = 4 GB. Gallery ko 1 GB chahiye, to mil jata hai. Step 4: OS gallery ke liye ek process banata hai, use process ID deta hai aur CPU time deta hai. Step 5: gallery screen par khulti hai. Dusra worked example: ek hi printer par 3 log print bhejte hain — OS unhe line mein lagata hai (print queue). Pehle wale ka kaam khatm hote hi dusre ka number aata hai, isliye teeno ki print sahi nikalti hai, ek ke upar ek nahi chhapti.',
            english: 'Suppose your phone has 8 GB of RAM and you open the photo gallery. Step 1: you tap the icon — the tap reaches the OS through the input driver. Step 2: the OS finds the gallery app on the disk and loads its code into memory. Step 3: the OS does the maths — the OS itself uses 1.5 GB, Chrome already takes 2 GB, the music app takes 0.5 GB. What is left = 8 − 1.5 − 2 − 0.5 = 4 GB. The gallery needs 1 GB, so it gets it. Step 4: the OS creates a process for the gallery, gives it a process ID and CPU time. Step 5: the gallery opens on screen. Second worked example: three people send prints to one printer — the OS lines them up in a print queue. As soon as the first job finishes, the second one starts, so all three print correctly instead of printing on top of each other.',
            hindi: 'मान लीजिए आपके फ़ोन में 8 GB RAM है और आप फ़ोटो गैलरी खोलते हैं। Step 1: आप आइकन पर टैप करते हैं — टैप की खबर OS के इनपुट ड्राइवर तक जाती है। Step 2: OS डिस्क पर गैलरी ऐप ढूँढता है और उसका कोड मेमोरी में लोड करता है। Step 3: OS हिसाब लगाता है — OS खुद 1.5 GB इस्तेमाल कर रहा है, Chrome पहले से 2 GB ले चुका है, म्यूज़िक ऐप 0.5 GB ले चुका है। बचा हुआ = 8 − 1.5 − 2 − 0.5 = 4 GB। गैलरी को 1 GB चाहिए, तो मिल जाता है। Step 4: OS गैलरी के लिए एक प्रोसेस बनाता है, उसे प्रोसेस ID देता है और CPU समय देता है। Step 5: गैलरी स्क्रीन पर खुलती है। दूसरा उदाहरण: एक ही प्रिंटर पर 3 लोग प्रिंट भेजते हैं — OS उन्हें लाइन में लगाता है (प्रिंट queue)। पहले वाले का काम खत्म होते ही दूसरे का नंबर आता है, इसलिए तीनों की प्रिंट सही निकलती है, एक के ऊपर एक नहीं छपती।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur kyun hote hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और क्यों होती हैं',
          },
          body: {
            hinglish: 'Galti 1: "OS aur kernel ek hi cheez hai" — nahi. Kernel OS ka andar wala hissa hai; OS mein kernel ke saath file manager, settings aur tools bhi aate hain. Ye galti isliye hoti hai kyunki dono ka naam ek saath liya jata hai. Galti 2: "Zyada RAM matlab phone kabhi slow nahi hoga" — galat. Agar ek app CPU ko 100% kha raha hai ya disk bhari hui hai, to 16 GB RAM bhi phone ko tez nahi karegi. Slow hone ki wajah hamesha memory nahi hoti. Galti 3: "App band karne se process khatm ho jata hai" — aksar nahi. Bahut se apps background mein chalte rehte hain; isliye settings mein jaakar force stop karna padta hai.',
            english: 'Mistake 1: “The OS and the kernel are the same thing” — no. The kernel is the inner part of the OS; the OS also includes the file manager, settings and tools. This mistake happens because both names are used together. Mistake 2: “More RAM means the phone can never be slow” — wrong. If one app eats 100% of the CPU or the disk is full, even 16 GB of RAM will not make the phone fast. Slowness is not always caused by memory. Mistake 3: “Closing an app ends its process” — often not. Many apps keep running in the background, which is why you sometimes have to force-stop them in settings.',
            hindi: 'गलती 1: "OS और कर्नेल एक ही चीज़ है" — नहीं। कर्नेल OS का अंदर वाला हिस्सा है; OS में कर्नेल के साथ फ़ाइल मैनेजर, सेटिंग्स और टूल्स भी आते हैं। यह गलती इसलिए होती है क्योंकि दोनों का नाम एक साथ लिया जाता है। गलती 2: "ज़्यादा RAM मतलब फ़ोन कभी स्लो नहीं होगा" — गलत। अगर एक ऐप CPU का 100% खा रहा है या डिस्क भरी हुई है, तो 16 GB RAM भी फ़ोन को तेज़ नहीं करेगी। स्लो होने की वजह हमेशा मेमोरी नहीं होती। गलती 3: "ऐप बंद करने से प्रोसेस खत्म हो जाता है" — अक्सर नहीं। बहुत से ऐप्स बैकग्राउंड में चलते रहते हैं; इसीलिए सेटिंग्स में जाकर force stop करना पड़ता है।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास मामले',
          },
          body: {
            hinglish: 'Edge case 1: boot ke waqt OS abhi load hi nahi hua — to screen par kaun kaam karta hai? Bootloader aur BIOS/UEFI naam ke chhote program hardware ko jagate hain aur phir OS ko bulate hain. Edge case 2: OS crash (blue screen) — kernel mein hi galti aaye to OS khud ko bacha nahi sakta, isliye poora system ruk jata hai. Edge case 3: ek hi waqt par do apps camera maangein — OS sirf ek ko deta hai, dusre ko "camera busy" milta hai.',
            english: 'Edge case 1: during boot the OS has not loaded yet — so what works on the screen? Small programs called the bootloader and BIOS/UEFI wake up the hardware and then call the OS. Edge case 2: an OS crash (blue screen) — if the fault is inside the kernel itself, the OS cannot save itself, so the whole system stops. Edge case 3: two apps ask for the camera at the same time — the OS gives it to only one, and the other gets “camera busy”.',
            hindi: 'खास मामला 1: बूट के समय OS अभी लोड ही नहीं हुआ — तो स्क्रीन पर कौन काम करता है? बूटलोडर और BIOS/UEFI नाम के छोटे प्रोग्राम हार्डवेयर को जगाते हैं और फिर OS को बुलाते हैं। खास मामला 2: OS क्रैश (ब्लू स्क्रीन) — कर्नेल में ही गलती आए तो OS खुद को बचा नहीं सकता, इसलिए पूरा सिस्टम रुक जाता है। खास मामला 3: एक ही समय पर दो ऐप्स कैमरा माँगें — OS सिर्फ़ एक को देता है, दूसरे को "camera busy" मिलता है।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal diya to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दिया तो क्या होगा?',
          },
          body: {
            hinglish: 'Agar OS ko hata diya jaye to har app ko khud printer driver, disk aur network likhna padega — ek simple calculator app bhi hazaaron lines ka ho jayega. Agar OS memory baantna band kar de, to pehli app saari memory kha legi aur dusri app khul hi nahi payegi. Isi liye OS ka kaam "control karna" nahi, "fair baantna" hai.',
            english: 'If the OS were removed, every app would have to write its own printer driver, disk and network code — even a simple calculator app would become thousands of lines long. If the OS stopped sharing memory, the first app would eat all the memory and the second app would never open. That is why the OS’s job is not “controlling” but “sharing fairly”.',
            hindi: 'अगर OS को हटा दिया जाए तो हर ऐप को खुद प्रिंटर ड्राइवर, डिस्क और नेटवर्क लिखना पड़ेगा — एक साधारण कैलकुलेटर ऐप भी हज़ारों लाइनों का हो जाएगा। अगर OS मेमोरी बाँटना बंद कर दे, तो पहली ऐप सारी मेमोरी खा लेगी और दूसरी ऐप खुल ही नहीं पाएगी। इसीलिए OS का काम "कंट्रोल करना" नहीं, "निष्पक्ष बाँटना" है।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'OS hardware aur apps ke beech ka manager hai. Uske chaar kaam yaad rakho: process chalana, memory baantna, files sambhalna, devices control karna. Kernel OS ka dil hai. Agle article mein dekhenge ki OS ek app ko kaise "process" bana kar chalata hai.',
            english: 'The OS is the manager between hardware and apps. Remember its four jobs: running processes, sharing memory, managing files, and controlling devices. The kernel is the heart of the OS. In the next article we will see how the OS turns an app into a “process” and runs it.',
            hindi: 'OS हार्डवेयर और ऐप्स के बीच का मैनेजर है। उसके चार काम याद रखो: प्रोसेस चलाना, मेमोरी बाँटना, फ़ाइलें संभालना, डिवाइस चलाना। कर्नेल OS का दिल है। अगले आर्टिकल में देखेंगे कि OS एक ऐप को कैसे "प्रोसेस" बनाकर चलाता है।',
          },
        },
      ],
      diagram: {
        kind: 'boxes',
        title: {
          hinglish: 'OS kahan baithta hai',
          english: 'Where the OS sits',
          hindi: 'OS कहाँ बैठता है',
        },
        nodes: [
          { t: { hinglish: 'Apps — WhatsApp, Chrome, Gallery', english: 'Apps — WhatsApp, Chrome, Gallery', hindi: 'ऐप्स — WhatsApp, Chrome, Gallery' } },
          { t: { hinglish: 'Operating System', english: 'Operating System', hindi: 'ऑपरेटिंग सिस्टम' }, s: { hinglish: 'Kernel + file manager + settings', english: 'Kernel + file manager + settings', hindi: 'कर्नेल + फ़ाइल मैनेजर + सेटिंग्स' } },
          { t: { hinglish: 'Hardware — CPU, RAM, Disk, Camera', english: 'Hardware — CPU, RAM, Disk, Camera', hindi: 'हार्डवेयर — CPU, RAM, Disk, Camera' } },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'OS ka sabse pehla kaam kya hai?',
            english: 'What is the operating system’s first job?',
            hindi: 'OS का सबसे पहला काम क्या है?',
          },
          opts: [
            { hinglish: 'Hardware aur apps ke beech manager banna', english: 'Acting as the manager between hardware and apps', hindi: 'हार्डवेयर और ऐप्स के बीच मैनेजर बनना' },
            { hinglish: 'Internet ki speed badhana', english: 'Increasing internet speed', hindi: 'इंटरनेट की स्पीड बढ़ाना' },
            { hinglish: 'Sirf wallpaper badalna', english: 'Only changing the wallpaper', hindi: 'सिर्फ़ वॉलपेपर बदलना' },
            { hinglish: 'Battery ko charge karna', english: 'Charging the battery', hindi: 'बैटरी को चार्ज करना' },
          ],
          ans: 0,
          expl: {
            hinglish: 'OS hardware aur apps ke beech baith kar CPU, memory aur devices baant-ta hai — yahi uska main kaam hai.',
            english: 'The OS sits between hardware and apps and shares the CPU, memory and devices — that is its main job.',
            hindi: 'OS हार्डवेयर और ऐप्स के बीच बैठकर CPU, मेमोरी और डिवाइस बाँटता है — यही उसका मुख्य काम है।',
          },
        },
        {
          q: {
            hinglish: 'Kernel kya hai?',
            english: 'What is the kernel?',
            hindi: 'कर्नेल क्या है?',
          },
          opts: [
            { hinglish: 'Phone ka cover', english: 'The phone’s cover', hindi: 'फ़ोन का कवर' },
            { hinglish: 'OS ka woh hissa jo hardware se seedha baat karta hai', english: 'The part of the OS that talks directly to the hardware', hindi: 'OS का वह हिस्सा जो हार्डवेयर से सीधे बात करता है' },
            { hinglish: 'Ek photo editing app', english: 'A photo editing app', hindi: 'एक फ़ोटो एडिटिंग ऐप' },
            { hinglish: 'Internet ka cable', english: 'The internet cable', hindi: 'इंटरनेट की केबल' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Kernel OS ka dil hai — wahi hardware ko seedha command deta hai, baaki sab uske upar chalta hai.',
            english: 'The kernel is the heart of the OS — it gives commands directly to the hardware, and everything else runs on top of it.',
            hindi: 'कर्नेल OS का दिल है — वही हार्डवेयर को सीधे कमांड देता है, बाकी सब उसके ऊपर चलता है।',
          },
        },
        {
          q: {
            hinglish: '8 GB RAM mein OS 1.5 GB, Chrome 2 GB aur music app 0.5 GB le chuke hain. Gallery ko 1 GB chahiye — milega?',
            english: 'In 8 GB of RAM, the OS takes 1.5 GB, Chrome 2 GB and the music app 0.5 GB. The gallery needs 1 GB — will it get it?',
            hindi: '8 GB RAM में OS 1.5 GB, Chrome 2 GB और म्यूज़िक ऐप 0.5 GB ले चुके हैं। गैलरी को 1 GB चाहिए — मिलेगा?',
          },
          opts: [
            { hinglish: 'Nahi, RAM khatm ho gayi', english: 'No, the RAM is finished', hindi: 'नहीं, RAM खत्म हो गई' },
            { hinglish: 'Haan, 4 GB bacha hai', english: 'Yes, 4 GB is still free', hindi: 'हाँ, 4 GB बचा है' },
            { hinglish: 'Sirf 0.5 GB bacha hai', english: 'Only 0.5 GB is left', hindi: 'सिर्फ़ 0.5 GB बचा है' },
            { hinglish: 'Phone hang ho jayega', english: 'The phone will hang', hindi: 'फ़ोन हैंग हो जाएगा' },
          ],
          ans: 1,
          expl: {
            hinglish: '8 − 1.5 − 2 − 0.5 = 4 GB bacha hai, aur gallery ko sirf 1 GB chahiye, to aaram se milega.',
            english: '8 − 1.5 − 2 − 0.5 = 4 GB is left, and the gallery needs only 1 GB, so it will get it easily.',
            hindi: '8 − 1.5 − 2 − 0.5 = 4 GB बचा है, और गैलरी को सिर्फ़ 1 GB चाहिए, तो आराम से मिलेगा।',
          },
        },
        {
          q: {
            hinglish: 'Kaunsa statement GALAT hai?',
            english: 'Which statement is WRONG?',
            hindi: 'कौन सा कथन गलत है?',
          },
          opts: [
            { hinglish: 'OS apps ko CPU time baant-ta hai', english: 'The OS shares CPU time between apps', hindi: 'OS ऐप्स को CPU समय बाँटता है' },
            { hinglish: 'OS ke bina har app ko hardware khud sambhalna padta', english: 'Without an OS every app would have to handle hardware itself', hindi: 'OS के बिना हर ऐप को हार्डवेयर खुद संभालना पड़ता' },
            { hinglish: 'OS sirf laptop mein hota hai, washing machine mein nahi', english: 'An OS exists only in laptops, not in washing machines', hindi: 'OS सिर्फ़ लैपटॉप में होता है, वॉशिंग मशीन में नहीं' },
            { hinglish: 'Kernel hardware se seedha baat karta hai', english: 'The kernel talks directly to the hardware', hindi: 'कर्नेल हार्डवेयर से सीधे बात करता है' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Washing machine, ATM aur car dashboard mein bhi chhote OS hote hain — OS sirf laptop ki cheez nahi hai.',
            english: 'Washing machines, ATMs and car dashboards also have small operating systems — the OS is not only a laptop thing.',
            hindi: 'वॉशिंग मशीन, ATM और कार डैशबोर्ड में भी छोटे OS होते हैं — OS सिर्फ़ लैपटॉप की चीज़ नहीं है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Memory ka hisaab lagao',
          english: 'Work out the memory maths',
          hindi: 'मेमोरी का हिसाब लगाओ',
        },
        task: {
          hinglish: 'Pen-paper task: phone mein 6 GB RAM hai. OS 1 GB, game 2.5 GB, browser 1.5 GB le chuke hain. (a) Kitni RAM bachi? (b) Kya 1.5 GB wala video editor khulega? (c) Agar game band kar diya jaye to kitni bachegi? Neeche diya script chalao — ye wahi hisaab karke dikhata hai. Done tab mana jayega jab tumhare haath ke jawab script ke jawab se mil jayein.',
          english: 'Pen-and-paper task: a phone has 6 GB of RAM. The OS takes 1 GB, a game 2.5 GB, the browser 1.5 GB. (a) How much RAM is left? (b) Will a 1.5 GB video editor open? (c) If the game is closed, how much is left? Run the script below — it does the same maths. You are done when your hand-worked answers match the script’s answers.',
          hindi: 'पेन-पेपर टास्क: फ़ोन में 6 GB RAM है। OS 1 GB, गेम 2.5 GB, ब्राउज़र 1.5 GB ले चुके हैं। (a) कितनी RAM बची? (b) क्या 1.5 GB वाला वीडियो एडिटर खुलेगा? (c) अगर गेम बंद कर दिया जाए तो कितनी बचेगी? नीचे दिया स्क्रिप्ट चलाओ — यह वही हिसाब करके दिखाता है। जब तुम्हारे हाथ के जवाब स्क्रिप्ट के जवाब से मिल जाएँ, तब टास्क पूरा माना जाएगा।',
        },
        language: 'python',
        starter: 'total = 6.0\nos_use = 1.0\ngame = 2.5\nbrowser = 1.5\nleft = total - os_use - game - browser\nprint("RAM bachi:", left, "GB")\nprint("Video editor (1.5 GB) khulega?", left >= 1.5)\nprint("Game band karne par bachegi:", left + game, "GB")\n',
        expected: 'RAM bachi: 1.0 GB. Video editor nahi khulega (1.0 < 1.5). Game band karne par 3.5 GB bachegi.',
      },
      readMinutes: 10,
    },
    {
      id: 'os-processes',
      subjectId: 'operating-systems',
      title: {
        hinglish: 'Process aur Thread — app kaise chalti hai',
        english: 'Processes and threads — how an app runs',
        hindi: 'प्रोसेस और थ्रेड — ऐप कैसे चलती है',
      },
      summary: {
        hinglish: 'Process ek chal raha program hai, apni alag memory ke saath. Thread usi process ke andar ka chhota kaam hai jo memory share karta hai.',
        english: 'A process is a program in execution, with its own memory. A thread is a smaller job inside that process that shares its memory.',
        hindi: 'प्रोसेस एक चल रहा प्रोग्राम है, अपनी अलग मेमोरी के साथ। थ्रेड उसी प्रोसेस के अंदर का छोटा काम है जो मेमोरी शेयर करता है।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish: 'Program disk par pada hua code hai — jaise kitaab shelf par padi hai. Jab OS us program ko chalata hai, to woh process ban jata hai — jaise kitaab khol kar padhna shuru kar diya. Har process ko OS teen cheezein deta hai: apni memory jagah, apna CPU time, aur ek unique process ID (PID). Process ke andar thread hota hai — ek chhota kaam karne wala rasta. Ek process mein ek ya bahut saare threads ho sakte hain. Sab threads ek hi memory share karte hain, isliye ek thread jo likhta hai woh dusra thread padh sakta hai. Process ke paanch state hote hain: New (ban raha hai), Ready (CPU ka intezar), Running (CPU par chal raha), Waiting (kisi cheez ka intezar, jaise file ya network), Terminated (khatm). OS in states ke beech process ko ghumata rehta hai — isi ko process scheduling kehte hain.',
            english: 'A program is code lying on the disk — like a book sitting on a shelf. When the OS runs that program, it becomes a process — like opening the book and starting to read. The OS gives every process three things: its own memory space, its own CPU time, and a unique process ID (PID). Inside a process there is a thread — a small path that does one job. One process can have one or many threads. All threads share the same memory, so what one thread writes, another thread can read. A process has five states: New (being created), Ready (waiting for the CPU), Running (on the CPU), Waiting (waiting for something, like a file or the network), and Terminated (finished). The OS keeps moving processes between these states — that is called process scheduling.',
            hindi: 'प्रोग्राम डिस्क पर पड़ा हुआ कोड है — जैसे किताब शेल्फ़ पर पड़ी है। जब OS उस प्रोग्राम को चलाता है, तो वह प्रोसेस बन जाता है — जैसे किताब खोलकर पढ़ना शुरू कर दिया। हर प्रोसेस को OS तीन चीज़ें देता है: अपनी मेमोरी जगह, अपना CPU समय और एक यूनिक प्रोसेस ID (PID)। प्रोसेस के अंदर थ्रेड होता है — एक छोटा काम करने वाला रास्ता। एक प्रोसेस में एक या बहुत सारे थ्रेड हो सकते हैं। सब थ्रेड एक ही मेमोरी शेयर करते हैं, इसलिए एक थ्रेड जो लिखता है वह दूसरा थ्रेड पढ़ सकता है। प्रोसेस के पाँच state होते हैं: New (बन रहा है), Ready (CPU का इंतज़ार), Running (CPU पर चल रहा), Waiting (किसी चीज़ का इंतज़ार, जैसे फ़ाइल या नेटवर्क), Terminated (खत्म)। OS इन states के बीच प्रोसेस को घुमाता रहता है — इसी को प्रोसेस scheduling कहते हैं।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असली ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish: 'Sochiye ek dhaba. Har customer ka order ek process hai — alag table, alag khana, alag bill. Ek order ke andar threads hain: ek aadmi roti bana raha hai, dusra sabzi bana raha hai, teesra thali saja raha hai. Teeno ek hi rasoi (memory) share karte hain aur ek hi order ke liye kaam karte hain. Lekin agar rasoi mein ek thread galti se namak ki jagah cheeni daal de, to poora order kharab ho jata hai — kyunki threads memory share karte hain, ek ki galti sab par asar karti hai.',
            english: 'Think of a roadside eatery. Every customer’s order is a process — a separate table, separate food, separate bill. Inside one order there are threads: one person makes the flatbread, another cooks the vegetable dish, a third arranges the plate. All three share the same kitchen (memory) and work for the same order. But if one thread in the kitchen puts sugar instead of salt by mistake, the whole order is spoiled — because threads share memory, one thread’s mistake affects everyone. A browser works the same way: every tab is a separate process, so if one tab crashes the other tabs survive. And inside one tab there are many threads — one loads the page, another plays the video.',
            hindi: 'एक ढाबे को सोचिए। हर ग्राहक का ऑर्डर एक प्रोसेस है — अलग टेबल, अलग खाना, अलग बिल। एक ऑर्डर के अंदर थ्रेड हैं: एक आदमी रोटी बना रहा है, दूसरा सब्ज़ी बना रहा है, तीसरा थाली सजा रहा है। तीनों एक ही रसोई (मेमोरी) शेयर करते हैं और एक ही ऑर्डर के लिए काम करते हैं। लेकिन अगर रसोई में एक थ्रेड गलती से नमक की जगह चीनी डाल दे, तो पूरा ऑर्डर खराब हो जाता है — क्योंकि थ्रेड मेमोरी शेयर करते हैं, एक की गलती सब पर असर करती है।',
          },
        },
        {
          heading: {
            hinglish: 'Step by step — worked example',
            english: 'Step by step — worked example',
            hindi: 'स्टेप बाय स्टेप — हल किया हुआ उदाहरण',
          },
          body: {
            hinglish: 'Worked example 1 — fork: ek program mein fork() do baar likha hai. Pehla fork 1 process ko 2 bana deta hai. Dusra fork dono processes mein chalta hai, to 2 se 4 ho jate hain. Formula: n baar fork = 2^n processes. Yahan 2^2 = 4 processes. Worked example 2 — memory: 5 alag processes, har ek 50 MB leta hai, to total 5 × 50 = 250 MB. Wahi kaam 1 process mein 5 threads se karo, to threads memory share karte hain — maan lo shared data 50 MB aur har thread ka chhota stack 1 MB, to total = 50 + 5 × 1 = 55 MB. Farq saaf hai: 250 MB vs 55 MB — isiliye thread halka hota hai. Worked example 3 — context switch: CPU ek process se dusre par badalta hai. Pehle OS purane process ki halat (registers, program counter) save karta hai, phir naye process ki halat load karta hai.',
            english: 'Worked example 1 — fork: a program calls fork() twice. The first fork turns 1 process into 2. The second fork runs in both processes, so 2 becomes 4. Formula: n forks = 2^n processes. Here 2^2 = 4 processes. Worked example 2 — memory: 5 separate processes, each taking 50 MB, use 5 × 50 = 250 MB in total. Do the same work with 5 threads in 1 process: threads share memory — suppose the shared data is 50 MB and each thread’s small stack is 1 MB, so total = 50 + 5 × 1 = 55 MB. The difference is clear: 250 MB vs 55 MB — that is why a thread is lighter. Worked example 3 — context switch: the CPU changes from one process to another. First the OS saves the old process’s state (registers, program counter), then loads the new process’s state.',
            hindi: 'हल किया हुआ उदाहरण 1 — fork: एक प्रोग्राम में fork() दो बार लिखा है। पहला fork 1 प्रोसेस को 2 बना देता है। दूसरा fork दोनों प्रोसेस में चलता है, तो 2 से 4 हो जाते हैं। फॉर्मूला: n बार fork = 2^n प्रोसेस। यहाँ 2^2 = 4 प्रोसेस। उदाहरण 2 — मेमोरी: 5 अलग प्रोसेस, हर एक 50 MB लेता है, तो कुल 5 × 50 = 250 MB। वही काम 1 प्रोसेस में 5 थ्रेड से करो, तो थ्रेड मेमोरी शेयर करते हैं — मान लो शेयर किया हुआ डेटा 50 MB और हर थ्रेड का छोटा स्टैक 1 MB, तो कुल = 50 + 5 × 1 = 55 MB। फ़र्क साफ़ है: 250 MB बनाम 55 MB — इसीलिए थ्रेड हल्का होता है। उदाहरण 3 — context switch: CPU एक प्रोसेस से दूसरे पर बदलता है। पहले OS पुराने प्रोसेस की हालत (रजिस्टर, प्रोग्राम काउंटर) सेव करता है, फिर नए प्रोसेस की हालत लोड करता है।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur kyun hote hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और क्यों होती हैं',
          },
          body: {
            hinglish: 'Galti 1: "Thread aur process ek hi hai" — nahi. Process ki apni memory hoti hai, thread ki nahi. Ye galti isliye hoti hai kyunki dono "kaam karne wali cheez" lagte hain. Galti 2: "Zyada threads hamesha tez" — galat. 100 threads ek hi CPU par ladenge to switching ka kharcha badh jayega aur kaam slow ho jayega. Sahi threads CPU cores ke hisaab se hone chahiye. Galti 4: "Do thread ek saath ek hi variable badal sakte hain, koi problem nahi" — bahut badi problem hai, isko race condition kehte hain; isiliye lock (mutex) use hota hai.',
            english: 'Mistake 1: “A thread and a process are the same” — no. A process has its own memory; a thread does not. This mistake happens because both look like “things that do work”. Mistake 2: “More threads are always faster” — wrong. 100 threads fighting over one CPU increase switching cost and slow the work down. The right number of threads depends on the CPU cores. Mistake 4: “Two threads can change the same variable together, no problem” — that is a big problem, called a race condition; that is why locks (mutex) are used.',
            hindi: 'गलती 1: "थ्रेड और प्रोसेस एक ही है" — नहीं। प्रोसेस की अपनी मेमोरी होती है, थ्रेड की नहीं। यह गलती इसलिए होती है क्योंकि दोनों "काम करने वाली चीज़" लगते हैं। गलती 2: "ज़्यादा थ्रेड हमेशा तेज़" — गलत। 100 थ्रेड एक ही CPU पर लड़ेंगे तो स्विचिंग का खर्चा बढ़ जाएगा और काम स्लो हो जाएगा। सही थ्रेड CPU cores के हिसाब से होने चाहिए। गलती 4: "दो थ्रेड एक साथ एक ही variable बदल सकते हैं, कोई समस्या नहीं" — बहुत बड़ी समस्या है, इसको race condition कहते हैं; इसीलिए lock (mutex) इस्तेमाल होता है।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास मामले',
          },
          body: {
            hinglish: 'Edge case 1: orphan process — parent khatm ho jaye aur child chalta rahe, to OS child ko adopt kar leta hai (init process uska naya parent ban jata hai). Edge case 2: ek process ke saare threads ek hi variable ko ek saath badlein — bina lock ke jawab galat aayega; 100 baar +1 karne par bhi total 100 se kam aa sakta hai. Edge case 3: thread crash — ek thread crash ho to poora process mar jata hai, kyunki memory shared hai.',
            english: 'Edge case 1: orphan process — if the parent ends while the child still runs, the OS adopts the child (the init process becomes its new parent). Edge case 2: all threads of a process change one variable together — without a lock the answer comes out wrong; even after adding 1 a hundred times, the total can be less than 100. Edge case 3: a thread crash — if one thread crashes, the whole process dies, because the memory is shared.',
            hindi: 'खास मामला 1: orphan process — parent खत्म हो जाए और child चलता रहे, तो OS child को adopt कर लेता है (init process उसका नया parent बन जाता है)। खास मामला 2: एक प्रोसेस के सारे थ्रेड एक ही variable को एक साथ बदलें — बिना lock के जवाब गलत आएगा; 100 बार +1 करने पर भी कुल 100 से कम आ सकता है। खास मामला 3: thread crash — एक थ्रेड क्रैश हो तो पूरा प्रोसेस मर जाता है, क्योंकि मेमोरी shared है।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal diya to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दिया तो क्या होगा?',
          },
          body: {
            hinglish: 'Agar har tab ko alag process ki jagah ek hi process mein thread bana diya jaye, to memory bachegi (250 MB ki jagah 55 MB), lekin ek tab crash hote hi poora browser band ho jayega. Agar OS context switch karna band kar de, to ek hi app CPU par kabza kar legi aur baaki apps freeze ho jayengi. Har design mein trade-off hai: alag memory = safety, shared memory = speed.',
            english: 'If every tab were made a thread in one process instead of a separate process, memory would be saved (55 MB instead of 250 MB), but one crashing tab would close the whole browser. If the OS stopped context switching, one app would grab the CPU and the other apps would freeze. Every design has a trade-off: separate memory = safety, shared memory = speed.',
            hindi: 'अगर हर टैब को अलग प्रोसेस की जगह एक ही प्रोसेस में थ्रेड बना दिया जाए, तो मेमोरी बचेगी (250 MB की जगह 55 MB), लेकिन एक टैब क्रैश होते ही पूरा ब्राउज़र बंद हो जाएगा। अगर OS context switch करना बंद कर दे, तो एक ही ऐप CPU पर कब्ज़ा कर लेगी और बाकी ऐप्स freeze हो जाएँगी। हर डिज़ाइन में trade-off है: अलग मेमोरी = सुरक्षा, shared मेमोरी = स्पीड।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'Process = chal raha program, apni memory ke saath. Thread = usi process ke andar ka halka kaam, shared memory ke saath. States yaad rakho: New → Ready → Running → Waiting → Terminated. Agle article mein CPU ko baantne ke algorithms dekhenge.',
            english: 'Process = a program in execution, with its own memory. Thread = a light job inside that process, with shared memory. Remember the states: New → Ready → Running → Waiting → Terminated. In the next article we will look at the algorithms that share the CPU.',
            hindi: 'प्रोसेस = चल रहा प्रोग्राम, अपनी मेमोरी के साथ। थ्रेड = उसी प्रोसेस के अंदर का हल्का काम, shared मेमोरी के साथ। States याद रखो: New → Ready → Running → Waiting → Terminated। अगले आर्टिकल में CPU को बाँटने के algorithms देखेंगे।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Process ke states',
          english: 'Process states',
          hindi: 'प्रोसेस के states',
        },
        nodes: [
          { t: { hinglish: 'New', english: 'New', hindi: 'New' }, s: { hinglish: 'Process ban raha hai', english: 'Process is being created', hindi: 'प्रोसेस बन रहा है' } },
          { t: { hinglish: 'Ready', english: 'Ready', hindi: 'Ready' }, s: { hinglish: 'CPU ka intezar', english: 'Waiting for the CPU', hindi: 'CPU का इंतज़ार' } },
          { t: { hinglish: 'Running', english: 'Running', hindi: 'Running' }, s: { hinglish: 'CPU par chal raha', english: 'Running on the CPU', hindi: 'CPU पर चल रहा' } },
          { t: { hinglish: 'Waiting', english: 'Waiting', hindi: 'Waiting' }, s: { hinglish: 'File/network ka intezar', english: 'Waiting for a file or network', hindi: 'फ़ाइल/नेटवर्क का इंतज़ार' } },
          { t: { hinglish: 'Terminated', english: 'Terminated', hindi: 'Terminated' }, s: { hinglish: 'Kaam khatm', english: 'Work finished', hindi: 'काम खत्म' } },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'Program aur process mein kya farq hai?',
            english: 'What is the difference between a program and a process?',
            hindi: 'प्रोग्राम और प्रोसेस में क्या फ़र्क है?',
          },
          opts: [
            { hinglish: 'Koi farq nahi', english: 'There is no difference', hindi: 'कोई फ़र्क नहीं' },
            { hinglish: 'Program disk par pada code hai, process us code ka chalna hai', english: 'A program is code lying on disk; a process is that code running', hindi: 'प्रोग्राम डिस्क पर पड़ा कोड है, प्रोसेस उस कोड का चलना है' },
            { hinglish: 'Process disk par pada hai, program memory mein', english: 'A process lies on disk, a program in memory', hindi: 'प्रोसेस डिस्क पर पड़ा है, प्रोग्राम मेमोरी में' },
            { hinglish: 'Program hamesha tez hota hai', english: 'A program is always faster', hindi: 'प्रोग्राम हमेशा तेज़ होता है' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Program nishkriya code hai; jab OS use chalata hai aur memory + PID deta hai, tab woh process ban jata hai.',
            english: 'A program is idle code; when the OS runs it and gives it memory and a PID, it becomes a process.',
            hindi: 'प्रोग्राम निष्क्रिय कोड है; जब OS उसे चलाता है और मेमोरी + PID देता है, तब वह प्रोसेस बन जाता है।',
          },
        },
        {
          q: {
            hinglish: 'Ek program mein fork() 3 baar hai. Kul kitne processes banenge?',
            english: 'A program calls fork() 3 times. How many processes are created in total?',
            hindi: 'एक प्रोग्राम में fork() 3 बार है। कुल कितने प्रोसेस बनेंगे?',
          },
          opts: [
            { hinglish: '3', english: '3', hindi: '3' },
            { hinglish: '6', english: '6', hindi: '6' },
            { hinglish: '8', english: '8', hindi: '8' },
            { hinglish: '4', english: '4', hindi: '4' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Har fork processes ko double karta hai: 2^3 = 8. Pehla fork 2, dusra 4, teesra 8 banata hai.',
            english: 'Every fork doubles the processes: 2^3 = 8. The first fork makes 2, the second 4, the third 8.',
            hindi: 'हर fork प्रोसेस को दोगुना करता है: 2^3 = 8। पहला fork 2, दूसरा 4, तीसरा 8 बनाता है।',
          },
        },
        {
          q: {
            hinglish: '5 processes har ek 50 MB lete hain. 1 process mein 5 threads (50 MB shared + har thread 1 MB stack) kitni memory lenge?',
            english: '5 processes take 50 MB each. How much memory will 5 threads in 1 process take (50 MB shared + 1 MB stack per thread)?',
            hindi: '5 प्रोसेस हर एक 50 MB लेते हैं। 1 प्रोसेस में 5 थ्रेड (50 MB shared + हर थ्रेड 1 MB स्टैक) कितनी मेमोरी लेंगे?',
          },
          opts: [
            { hinglish: '250 MB', english: '250 MB', hindi: '250 MB' },
            { hinglish: '55 MB', english: '55 MB', hindi: '55 MB' },
            { hinglish: '50 MB', english: '50 MB', hindi: '50 MB' },
            { hinglish: '5 MB', english: '5 MB', hindi: '5 MB' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Threads memory share karte hain: 50 + 5 × 1 = 55 MB, jabki alag processes 250 MB lete.',
            english: 'Threads share memory: 50 + 5 × 1 = 55 MB, while separate processes take 250 MB.',
            hindi: 'थ्रेड मेमोरी शेयर करते हैं: 50 + 5 × 1 = 55 MB, जबकि अलग प्रोसेस 250 MB लेते।',
          },
        },
        {
          q: {
            hinglish: 'Kaunsa statement GALAT hai?',
            english: 'Which statement is WRONG?',
            hindi: 'कौन सा कथन गलत है?',
          },
          opts: [
            { hinglish: 'Ek thread crash poora process maar deta hai', english: 'One crashing thread kills the whole process', hindi: 'एक थ्रेड क्रैश पूरा प्रोसेस मार देता है' },
            { hinglish: 'Ek process crash dusre process ko nahi maarta', english: 'One crashing process does not kill another process', hindi: 'एक प्रोसेस क्रैश दूसरे प्रोसेस को नहीं मारता' },
            { hinglish: 'Single-core CPU par threads sach mein parallel chalte hain', english: 'On a single-core CPU, threads truly run in parallel', hindi: 'Single-core CPU पर थ्रेड सच में parallel चलते हैं' },
            { hinglish: 'Context switch mein OS purani state save karta hai', english: 'In a context switch the OS saves the old state', hindi: 'Context switch में OS पुरानी state सेव करता है' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Single-core par sirf ek thread ek waqt par chalta hai — OS unhe baari-baari chalata hai, ye parallelism nahi, concurrency hai.',
            english: 'On a single core only one thread runs at a time — the OS runs them turn by turn; that is concurrency, not parallelism.',
            hindi: 'Single-core पर सिर्फ़ एक थ्रेड एक समय पर चलता है — OS उन्हें बारी-बारी चलाता है, यह parallelism नहीं, concurrency है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Fork aur thread memory ka hisaab',
          english: 'Work out fork and thread memory',
          hindi: 'Fork और थ्रेड मेमोरी का हिसाब',
        },
        task: {
          hinglish: 'Pen-paper task: (a) fork() 4 baar hai — kul kitne processes? (b) 4 processes har ek 80 MB lete hain — total kitna? (c) Wahi kaam 1 process mein 4 threads se: shared data 80 MB + har thread 2 MB stack — total kitna? Neeche script chalao aur apne jawab milao. Done tab jab teeno jawab match karein.',
          english: 'Pen-and-paper task: (a) fork() runs 4 times — how many processes in total? (b) 4 processes take 80 MB each — what is the total? (c) The same work with 4 threads in 1 process: shared data 80 MB + 2 MB stack per thread — what is the total? Run the script below and match your answers. You are done when all three answers match.',
          hindi: 'पेन-पेपर टास्क: (a) fork() 4 बार है — कुल कितने प्रोसेस? (b) 4 प्रोसेस हर एक 80 MB लेते हैं — कुल कितना? (c) वही काम 1 प्रोसेस में 4 थ्रेड से: shared डेटा 80 MB + हर थ्रेड 2 MB स्टैक — कुल कितना? नीचे स्क्रिप्ट चलाओ और अपने जवाब मिलाओ। जब तीनों जवाब मिल जाएँ, तब टास्क पूरा।',
        },
        language: 'python',
        starter: 'print("Processes after 4 forks:", 2 ** 4)\nprint("4 processes x 80 MB:", 4 * 80, "MB")\nprint("4 threads: 80 + 4 x 2 =", 80 + 4 * 2, "MB")\n',
        expected: '(a) 16 processes. (b) 320 MB. (c) 88 MB.',
      },
      readMinutes: 11,
    },
    {
      id: 'os-scheduling',
      subjectId: 'operating-systems',
      title: {
        hinglish: 'CPU Scheduling — FCFS, SJN, Round Robin',
        english: 'CPU scheduling — FCFS, SJN, Round Robin',
        hindi: 'CPU शेड्यूलिंग — FCFS, SJN, Round Robin',
      },
      summary: {
        hinglish: 'CPU ek hai, process bahut — scheduler decide karta hai kaun pehle chalega. FCFS, SJN aur Round Robin ko number ke saath samjho.',
        english: 'One CPU, many processes — the scheduler decides who runs first. Learn FCFS, SJN and Round Robin with real numbers.',
        hindi: 'CPU एक है, प्रोसेस बहुत — शेड्यूलर तय करता है कौन पहले चलेगा। FCFS, SJN और Round Robin को नंबर के साथ समझो।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish: 'CPU scheduling ka matlab hai: jab kai process Ready state mein CPU ka intezar kar rahe hon, to OS kis ko pehle CPU de? Waiting time = process ne CPU ke liye kitna intezar kiya. Turnaround time = process aaya kab aur khatm kab hua, uske beech ka total time. Formula: Turnaround time = Completion time − Arrival time; Waiting time = Turnaround time − Burst time: jo pehle aaya woh pehle chalega — railway ticket counter ki line jaisa. SJN (Shortest Job Next): jiska burst time sabse chhota, woh pehle — chhota kaam pehle nipta do. Round Robin: har process ko ek fixed time slice (quantum) milta hai, phir line ke peeche — sabko baari-baari mauka.',
            english: 'CPU scheduling means: when many processes wait in the Ready state for the CPU, which one does the OS give the CPU to first? Waiting time = how long a process waited for the CPU. Turnaround time = the total time from when the process arrived to when it finished. Formula: Turnaround time = Completion time − Arrival time; Waiting time = Turnaround time − Burst time: whoever came first runs first — like a railway ticket counter queue. SJN (Shortest Job Next): the smallest burst time goes first — finish the small job quickly. Round Robin: every process gets a fixed time slice (quantum), then goes to the back of the queue — everyone gets a turn.',
            hindi: 'CPU scheduling का मतलब है: जब कई प्रोसेस Ready state में CPU का इंतज़ार कर रहे हों, तो OS किसको पहले CPU दे? Waiting time = प्रोसेस ने CPU के लिए कितना इंतज़ार किया। Turnaround time = प्रोसेस आया कब और खत्म कब हुआ, उसके बीच का कुल समय। फॉर्मूला: Turnaround time = Completion time − Arrival time; Waiting time = Turnaround time − Burst time: जो पहले आया वह पहले चलेगा — रेलवे टिकट काउंटर की लाइन जैसा। SJN (Shortest Job Next): जिसका burst time सबसे छोटा, वह पहले — छोटा काम पहले निपटा दो। Round Robin: हर प्रोसेस को एक fixed time slice (quantum) मिलता है, फिर लाइन के पीछे — सबको बारी-बारी मौका।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असली ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish: 'Sochiye ek dhaba mein ek hi tawa hai aur 4 order aaye hain. FCFS: jo order pehle aaya, uski roti pehle — fair, lekin agar pehle order mein 20 roti hain to baaki teeno bhooke baithe rahenge. Round Robin: har order ko tawa par 2 minute milte hain, phir agla — sabko lagta hai unka kaam chal raha hai, koi bhooka nahi baithta.',
            english: 'Think of a small eatery with one griddle and 4 orders. FCFS: the order that came first gets its flatbread first — fair, but if the first order has 20 flatbreads, the other three sit hungry. Round Robin: every order gets the griddle for 2 minutes, then the next — everyone feels their work is moving, and nobody sits hungry.',
            hindi: 'एक ढाबे में एक ही तवा है और 4 ऑर्डर आए हैं, यह सोचिए। FCFS: जो ऑर्डर पहले आया, उसकी रोटी पहले — fair, लेकिन अगर पहले ऑर्डर में 20 रोटी हैं तो बाकी तीनों भूखे बैठे रहेंगे। Round Robin: हर ऑर्डर को तवे पर 2 मिनट मिलते हैं, फिर अगला — सबको लगता है उनका काम चल रहा है, कोई भूखा नहीं बैठता।',
          },
        },
        {
          heading: {
            hinglish: 'Step by step — worked example',
            english: 'Step by step — worked example',
            hindi: 'स्टेप बाय स्टेप — हल किया हुआ उदाहरण',
          },
          body: {
            hinglish: 'Ek hi data, teen algorithms. Processes: P1 arrival 0, burst 8; P2 arrival 1, burst 4; P3 arrival 2, burst 9; P4 arrival 3, burst 5. FCFS: order P1, P2, P3, P4. Completion: P1 = 8, P2 = 12, P3 = 21, P4 = 26. Turnaround = completion − arrival: P1 8, P2 11, P3 19, P4 23. Average turnaround = (8 + 11 + 19 + 23) / 4 = 61 / 4 = 15.25. Waiting = turnaround − burst: P1 0, P2 7, P3 10, P4 18. Average waiting = 35 / 4 = 8.75. SJN (non-preemptive): t=0 par sirf P1 hai, chalta hai 0–8. t=8 par ready: P2 (4), P3 (9), P4 (5) — sabse chhota P2, chalta hai 8–12. Phir P4 (5) 12–17, phir P3 17–26. Completion: P1 8, P2 12, P4 17, P3 26. Turnaround: P1 8, P2 11, P3 24, P4 14. Average = 57 / 4 = 14.25. Waiting: P1 0, P2 7, P3 15, P4 9. Average = 31 / 4 = 7.75. Round Robin, quantum 4: P1 0–4, P2 4–8 (khatm), P1 8–12 (khatm), P3 12–16, P4 16–20, P3 20–24, P4 24–25 (khatm), P3 25–26 (khatm). Completion: P1 12, P2 8, P3 26, P4 25. Turnaround: P1 12, P2 7, P3 24, P4 22. Average = 65 / 4 = 16.25. Waiting: P1 4, P2 3, P3 15, P4 17. Average = 39 / 4 = 9.75.',
            english: 'One data set, three algorithms. Processes: P1 arrival 0, burst 8; P2 arrival 1, burst 4; P3 arrival 2, burst 9; P4 arrival 3, burst 5. FCFS: order P1, P2, P3, P4. Completion: P1 = 8, P2 = 12, P3 = 21, P4 = 26. Turnaround = completion − arrival: P1 8, P2 11, P3 19, P4 23. Average turnaround = (8 + 11 + 19 + 23) / 4 = 61 / 4 = 15.25. Waiting = turnaround − burst: P1 0, P2 7, P3 10, P4 18. Average waiting = 35 / 4 = 8.75. SJN (non-preemptive): at t=0 only P1 exists, it runs 0–8. At t=8 the ready ones are P2 (4), P3 (9), P4 (5) — the smallest is P2, it runs 8–12. Then P4 (5) 12–17, then P3 17–26. Completion: P1 8, P2 12, P4 17, P3 26. Turnaround: P1 8, P2 11, P3 24, P4 14. Average = 57 / 4 = 14.25. Waiting: P1 0, P2 7, P3 15, P4 9. Average = 31 / 4 = 7.75. Round Robin, quantum 4: P1 0–4, P2 4–8 (done), P1 8–12 (done), P3 12–16, P4 16–20, P3 20–24, P4 24–25 (done), P3 25–26 (done). Completion: P1 12, P2 8, P3 26, P4 25. Turnaround: P1 12, P2 7, P3 24, P4 22. Average = 65 / 4 = 16.25. Waiting: P1 4, P2 3, P3 15, P4 17. Average = 39 / 4 = 9.75.',
            hindi: 'एक ही डेटा, तीन algorithms। प्रोसेस: P1 arrival 0, burst 8; P2 arrival 1, burst 4; P3 arrival 2, burst 9; P4 arrival 3, burst 5। FCFS: क्रम P1, P2, P3, P4। Completion: P1 = 8, P2 = 12, P3 = 21, P4 = 26। Turnaround = completion − arrival: P1 8, P2 11, P3 19, P4 23। औसत turnaround = (8 + 11 + 19 + 23) / 4 = 61 / 4 = 15.25। Waiting = turnaround − burst: P1 0, P2 7, P3 10, P4 18। औसत waiting = 35 / 4 = 8.75। SJN (non-preemptive): t=0 पर सिर्फ़ P1 है, चलता है 0–8। t=8 पर ready: P2 (4), P3 (9), P4 (5) — सबसे छोटा P2, चलता है 8–12। फिर P4 (5) 12–17, फिर P3 17–26। Completion: P1 8, P2 12, P4 17, P3 26। Turnaround: P1 8, P2 11, P3 24, P4 14। औसत = 57 / 4 = 14.25। Waiting: P1 0, P2 7, P3 15, P4 9। औसत = 31 / 4 = 7.75। Round Robin, quantum 4: P1 0–4, P2 4–8 (खत्म), P1 8–12 (खत्म), P3 12–16, P4 16–20, P3 20–24, P4 24–25 (खत्म), P3 25–26 (खत्म)। Completion: P1 12, P2 8, P3 26, P4 25। Turnaround: P1 12, P2 7, P3 24, P4 22। औसत = 65 / 4 = 16.25। Waiting: P1 4, P2 3, P3 15, P4 17। औसत = 39 / 4 = 9.75।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur kyun hote hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और क्यों होती हैं',
          },
          body: {
            hinglish: 'Galti 1: Waiting time ko turnaround time samajh lena. Turnaround mein burst time bhi shamil hai; waiting = turnaround − burst. Ye galti isliye hoti hai kyunki dono "intezar" jaise lagte hain. Galti 2: SJN mein arrival time bhool jana — t=0 par sirf P1 aaya tha, isliye wahi chala, bhale hi P2 chhota tha. Jo process abhi aaya hi nahi, woh schedule nahi ho sakta. Galti 3: Round Robin mein quantum khatm hone par process ko "khatm" maan lena — woh sirf line ke peeche jata hai, bacha hua burst baad mein chalta hai.',
            english: 'Mistake 1: confusing waiting time with turnaround time. Turnaround includes the burst time; waiting = turnaround − burst. This happens because both sound like “waiting”. Mistake 2: forgetting arrival time in SJN — at t=0 only P1 had arrived, so it ran, even though P2 was smaller. A process that has not arrived yet cannot be scheduled. Mistake 3: thinking a process is “finished” when its Round Robin quantum ends — it only goes to the back of the queue; its remaining burst runs later.',
            hindi: 'गलती 1: Waiting time को turnaround time समझ लेना। Turnaround में burst time भी शामिल है; waiting = turnaround − burst। यह गलती इसलिए होती है क्योंकि दोनों "इंतज़ार" जैसे लगते हैं। गलती 2: SJN में arrival time भूल जाना — t=0 पर सिर्फ़ P1 आया था, इसलिए वही चला, भले ही P2 छोटा था। जो प्रोसेस अभी आया ही नहीं, वह schedule नहीं हो सकता। गलती 3: Round Robin में quantum खत्म होने पर प्रोसेस को "खत्म" मान लेना — वह सिर्फ़ लाइन के पीछे जाता है, बचा हुआ burst बाद में चलता है।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास मामले',
          },
          body: {
            hinglish: 'Edge case 1: SJN mein starvation — chhote process aate rahein to bada process kabhi nahi chalega; iska ilaaj aging hai (lambe intezar wale ki priority badhao). Edge case 2: Round Robin mein quantum bahut chhota (jaise 1) — har baar context switch ka kharcha, CPU kaam se zyada switch mein busy. Quantum bahut bada — Round Robin FCFS ban jata hai.',
            english: 'Edge case 1: starvation in SJN — if small processes keep arriving, the big process may never run; the cure is aging (raise the priority of the one that waited long). Edge case 2: a very small Round Robin quantum (like 1) — the cost of switching every time keeps the CPU busier switching than working. A very large quantum turns Round Robin into FCFS.',
            hindi: 'खास मामला 1: SJN में starvation — छोटे प्रोसेस आते रहें तो बड़ा प्रोसेस कभी नहीं चलेगा; इसका इलाज aging है (लंबे इंतज़ार वाले की priority बढ़ाओ)। खास मामला 2: Round Robin में quantum बहुत छोटा (जैसे 1) — हर बार context switch का खर्चा, CPU काम से ज़्यादा स्विच में busy। Quantum बहुत बड़ा — Round Robin FCFS बन जाता है।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal diya to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दिया तो क्या होगा?',
          },
          body: {
            hinglish: 'Agar quantum 4 se badha kar 10 kar dein, to Round Robin mein P1 ek hi baar mein 0–8 khatm ho jayega aur result FCFS ke kareeb aa jayega. Agar arrival time sabka 0 kar dein, to SJN ka order sirf burst se tay hoga: P2 (4), P4 (5), P1 (8), P3 (9). Algorithm badalne se wahi data, alag jawab — isiliye exam mein pehle algorithm ka naam padho, phir hisaab lagao.',
            english: 'If the quantum is raised from 4 to 10, then in Round Robin P1 would finish in one go from 0–8 and the result would come close to FCFS. If all arrival times were 0, the SJN order would come only from burst: P2 (4), P4 (5), P1 (8), P3 (9). Changing the algorithm changes the answer for the same data — which is why in an exam you should read the algorithm’s name first, then do the maths.',
            hindi: 'अगर quantum 4 से बढ़ाकर 10 कर दें, तो Round Robin में P1 एक ही बार में 0–8 खत्म हो जाएगा और result FCFS के करीब आ जाएगा। अगर arrival time सबका 0 कर दें, तो SJN का क्रम सिर्फ़ burst से तय होगा: P2 (4), P4 (5), P1 (8), P3 (9)। Algorithm बदलने से वही डेटा, अलग जवाब — इसीलिए exam में पहले algorithm का नाम पढ़ो, फिर हिसाब लगाओ।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'SJN average waiting sabse kam deta hai, lekin starvation ka risk hai. Round Robin sabko baari deta hai, response tez milta hai, lekin average waiting thoda zyada ho sakta hai. Formula yaad rakho: Turnaround = Completion − Arrival; Waiting = Turnaround − Burst. Agle article mein memory ka hisaab dekhenge.',
            english: 'SJN gives the lowest average waiting, but risks starvation. Round Robin gives everyone a turn, so responses are fast, but average waiting can be a little higher. Remember the formulas: Turnaround = Completion − Arrival; Waiting = Turnaround − Burst. In the next article we will look at the memory maths.',
            hindi: 'SJN औसत waiting सबसे कम देता है, लेकिन starvation का risk है। Round Robin सबको बारी देता है, response तेज़ मिलता है, लेकिन औसत waiting थोड़ा ज़्यादा हो सकता है। फॉर्मूला याद रखो: Turnaround = Completion − Arrival; Waiting = Turnaround − Burst। अगले आर्टिकल में मेमोरी का हिसाब देखेंगे।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Round Robin — quantum 4',
          english: 'Round Robin — quantum 4',
          hindi: 'Round Robin — quantum 4',
        },
        nodes: [
          { t: { hinglish: 'P1 0–4', english: 'P1 0–4', hindi: 'P1 0–4' }, s: { hinglish: 'Bacha 4', english: '4 left', hindi: 'बचा 4' } },
          { t: { hinglish: 'P2 4–8', english: 'P2 4–8', hindi: 'P2 4–8' }, s: { hinglish: 'Khatm', english: 'Done', hindi: 'खत्म' } },
          { t: { hinglish: 'P1 8–12', english: 'P1 8–12', hindi: 'P1 8–12' }, s: { hinglish: 'Khatm', english: 'Done', hindi: 'खत्म' } },
          { t: { hinglish: 'P3 12–16', english: 'P3 12–16', hindi: 'P3 12–16' }, s: { hinglish: 'Bacha 5', english: '5 left', hindi: 'बचा 5' } },
          { t: { hinglish: 'P4 16–20', english: 'P4 16–20', hindi: 'P4 16–20' }, s: { hinglish: 'Bacha 1', english: '1 left', hindi: 'बचा 1' } },
          { t: { hinglish: 'P3 20–24, P4 24–25, P3 25–26', english: 'P3 20–24, P4 24–25, P3 25–26', hindi: 'P3 20–24, P4 24–25, P3 25–26' }, s: { hinglish: 'Sab khatm', english: 'All done', hindi: 'सब खत्म' } },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'Upar wale example mein FCFS ka average waiting time kitna hai?',
            english: 'In the example above, what is the average waiting time under FCFS?',
            hindi: 'ऊपर वाले उदाहरण में FCFS का औसत waiting time कितना है?',
          },
          opts: [
            { hinglish: '7.75', english: '7.75', hindi: '7.75' },
            { hinglish: '8.75', english: '8.75', hindi: '8.75' },
            { hinglish: '9.75', english: '9.75', hindi: '9.75' },
            { hinglish: '15.25', english: '15.25', hindi: '15.25' },
          ],
          ans: 1,
          expl: {
            hinglish: 'FCFS waiting: P1 0, P2 7, P3 10, P4 18 — total 35, average 35/4 = 8.75.',
            english: 'FCFS waiting: P1 0, P2 7, P3 10, P4 18 — total 35, average 35/4 = 8.75.',
            hindi: 'FCFS waiting: P1 0, P2 7, P3 10, P4 18 — कुल 35, औसत 35/4 = 8.75।',
          },
        },
        {
          q: {
            hinglish: 'SJN mein t=8 par kaun chala aur kyun?',
            english: 'In SJN, who ran at t=8 and why?',
            hindi: 'SJN में t=8 पर कौन चला और क्यों?',
          },
          opts: [
            { hinglish: 'P3, kyunki woh sabse pehle aaya', english: 'P3, because it arrived first', hindi: 'P3, क्योंकि वह सबसे पहले आया' },
            { hinglish: 'P2, kyunki ready mein uska burst sabse chhota tha (4)', english: 'P2, because among the ready ones its burst was the smallest (4)', hindi: 'P2, क्योंकि ready में उसका burst सबसे छोटा था (4)' },
            { hinglish: 'P4, kyunki uska arrival sabse baad mein tha', english: 'P4, because its arrival was the latest', hindi: 'P4, क्योंकि उसका arrival सबसे बाद में था' },
            { hinglish: 'P1 phir se, kyunki woh pehla tha', english: 'P1 again, because it was first', hindi: 'P1 फिर से, क्योंकि वह पहला था' },
          ],
          ans: 1,
          expl: {
            hinglish: 't=8 par ready the P2 (4), P3 (9), P4 (5). SJN sabse chhota burst chunta hai — P2 ka 4.',
            english: 'At t=8 the ready ones were P2 (4), P3 (9), P4 (5). SJN picks the smallest burst — P2’s 4.',
            hindi: 't=8 पर ready थे P2 (4), P3 (9), P4 (5)। SJN सबसे छोटा burst चुनता है — P2 का 4।',
          },
        },
        {
          q: {
            hinglish: 'Round Robin (quantum 4) mein P4 kab khatm hua?',
            english: 'In Round Robin (quantum 4), when did P4 finish?',
            hindi: 'Round Robin (quantum 4) में P4 कब खत्म हुआ?',
          },
          opts: [
            { hinglish: 't=20', english: 't=20', hindi: 't=20' },
            { hinglish: 't=17', english: 't=17', hindi: 't=17' },
            { hinglish: 't=25', english: 't=25', hindi: 't=25' },
            { hinglish: 't=26', english: 't=26', hindi: 't=26' },
          ],
          ans: 2,
          expl: {
            hinglish: 'P4 chala 16–20 (bacha 1), phir 24–25 mein aakhri 1 unit khatm hua — completion 25.',
            english: 'P4 ran 16–20 (1 left), then finished its last 1 unit at 24–25 — completion 25.',
            hindi: 'P4 चला 16–20 (बचा 1), फिर 24–25 में आखिरी 1 unit खत्म हुआ — completion 25।',
          },
        },
        {
          q: {
            hinglish: 'Kaunsa statement GALAT hai?',
            english: 'Which statement is WRONG?',
            hindi: 'कौन सा कथन गलत है?',
          },
          opts: [
            { hinglish: 'SJN ka average waiting FCFS se kam tha', english: 'SJN’s average waiting was lower than FCFS', hindi: 'SJN का औसत waiting FCFS से कम था' },
            { hinglish: 'Round Robin mein koi process zyada der bilkul ruka nahi', english: 'In Round Robin no process was left completely stuck for long', hindi: 'Round Robin में कोई प्रोसेस ज़्यादा देर बिल्कुल रुका नहीं' },
            { hinglish: 'Waiting time = Turnaround time + Burst time', english: 'Waiting time = Turnaround time + Burst time', hindi: 'Waiting time = Turnaround time + Burst time' },
            { hinglish: 'FCFS mein convoy effect ho sakta hai', english: 'The convoy effect can happen in FCFS', hindi: 'FCFS में convoy effect हो सकता है' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Sahi formula: Waiting = Turnaround − Burst. Plus karne se ulta jawab aayega.',
            english: 'The correct formula is: Waiting = Turnaround − Burst. Adding gives the wrong answer.',
            hindi: 'सही फॉर्मूला: Waiting = Turnaround − Burst। Plus करने से उल्टा जवाब आएगा।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'FCFS ka hisaab khud lagao',
          english: 'Work out FCFS yourself',
          hindi: 'FCFS का हिसाब खुद लगाओ',
        },
        task: {
          hinglish: 'Pen-paper task: 3 processes — A arrival 0 burst 5, B arrival 2 burst 3, C arrival 4 burst 6. FCFS se (a) har ek ka completion time, (b) turnaround time, (c) waiting time aur average waiting nikalo. Neeche script wahi hisaab karke dikhata hai — pehle haath se karo, phir milao. Done tab jab tumhare teeno jawab script se mil jayein.',
          english: 'Pen-and-paper task: 3 processes — A arrival 0 burst 5, B arrival 2 burst 3, C arrival 4 burst 6. With FCFS find (a) each completion time, (b) turnaround time, (c) waiting time and average waiting. The script below does the same maths — do it by hand first, then match. You are done when all three answers match the script.',
          hindi: 'पेन-पेपर टास्क: 3 प्रोसेस — A arrival 0 burst 5, B arrival 2 burst 3, C arrival 4 burst 6। FCFS से (a) हर एक का completion time, (b) turnaround time, (c) waiting time और औसत waiting निकालो। नीचे स्क्रिप्ट वही हिसाब करके दिखाता है — पहले हाथ से करो, फिर मिलाओ। जब तुम्हारे तीनों जवाब स्क्रिप्ट से मिल जाएँ, तब टास्क पूरा।',
        },
        language: 'python',
        starter: 'procs = [("A", 0, 5), ("B", 2, 3), ("C", 4, 6)]\nt = 0\nwaits = []\nfor name, arr, burst in procs:\n    t = max(t, arr) + burst\n    tat = t - arr\n    wt = tat - burst\n    waits.append(wt)\n    print(name, "completion:", t, "turnaround:", tat, "waiting:", wt)\nprint("Average waiting:", sum(waits) / len(waits))\n',
        expected: 'A completion 5, turnaround 5, waiting 0. B completion 8, turnaround 6, waiting 3. C completion 14, turnaround 10, waiting 4. Average waiting 7/3 = 2.33.',
      },
      readMinutes: 13,
    },
    {
      id: 'os-memory',
      subjectId: 'operating-systems',
      title: {
        hinglish: 'Memory Management aur Paging',
        english: 'Memory management and paging',
        hindi: 'मेमोरी मैनेजमेंट और पेजिंग',
      },
      summary: {
        hinglish: 'RAM chhoti hai, apps bade — paging memory ko barabar tukdon mein baant kar har app ko uski jagah deta hai. Address ka hisaab seekho.',
        english: 'RAM is small, apps are big — paging splits memory into equal pieces and gives every app its place. Learn the address maths.',
        hindi: 'RAM छोटी है, ऐप्स बड़े — पेजिंग मेमोरी को बराबर टुकड़ों में बाँटकर हर ऐप को उसकी जगह देता है। Address का हिसाब सीखो।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish: 'Memory management ka kaam hai RAM ko apps mein baantna taaki har app ko apni jagah mile aur koi dusre ki jagah na chhoo sake. Sabse mashhoor tareeka hai paging. Isme RAM aur program dono ko barabar size ke tukdon mein kaata jata hai — program ke tukde ko page kehte hain, RAM ke tukde ko frame. Page size aam taur par 4 KB hota hai. Har process ki ek page table hoti hai jo batati hai uska page number kis frame number mein pada hai. Program logical address use karta hai (page number + offset), OS use physical address mein badal deta hai (frame number + offset). Offset wahi rehta hai, sirf page number frame number se badal jata hai. Virtual memory iska bada bhai hai — jab RAM bhar jaye to kam use hone wale pages disk par rakh diye jate hain aur zaroorat par wapas laaye jate hain.',
            english: 'Memory management shares RAM between apps so every app gets its own place and nobody touches another’s place. The most famous method is paging. In it, both RAM and the program are cut into equal-sized pieces — a piece of the program is called a page, a piece of RAM is called a frame. Page size is usually 4 KB. Every process has a page table that says which frame number its page number lies in. A program uses a logical address (page number + offset), and the OS converts it into a physical address (frame number + offset). The offset stays the same; only the page number is replaced by the frame number. Virtual memory is its bigger brother — when RAM fills up, rarely used pages are kept on disk and brought back when needed.',
            hindi: 'मेमोरी मैनेजमेंट का काम है RAM को ऐप्स में बाँटना ताकि हर ऐप को अपनी जगह मिले और कोई दूसरे की जगह न छू सके। सबसे मशहूर तरीका है पेजिंग। इसमें RAM और प्रोग्राम दोनों को बराबर साइज़ के टुकड़ों में काटा जाता है — प्रोग्राम के टुकड़े को page कहते हैं, RAM के टुकड़े को frame। Page size आमतौर पर 4 KB होता है। हर प्रोसेस की एक page table होती है जो बताती है उसका page number किस frame number में पड़ा है। प्रोग्राम logical address इस्तेमाल करता है (page number + offset), OS उसे physical address में बदल देता है (frame number + offset)। Offset वही रहता है, सिर्फ़ page number frame number से बदल जाता है। Virtual memory इसका बड़ा भाई है — जब RAM भर जाए तो कम इस्तेमाल होने वाले pages डिस्क पर रख दिए जाते हैं और ज़रूरत पर वापस लाए जाते हैं।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असली ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish: 'Sochiye ek post office mein 100 locker hain, har locker ek jaisa size ka (frame). Aapki chitthi (program) ko 3 locker chahiye, lekin khaali locker number 5, 17 aur 42 hain — paas-paas nahi, bikher hue hain. Postmaster (OS) ek register (page table) mein likhta hai: aapka page 0 locker 5 mein, page 1 locker 17 mein, page 2 locker 42 mein. Bilkul waise hi paging mein app ko lagta hai uski memory ek saath hai, jabki RAM mein uske page alag-alag frame mein pade hain.',
            english: 'Think of a post office with 100 lockers, all the same size (frames). Your letter (program) needs 3 lockers, but the empty lockers are numbers 5, 17 and 42 — not next to each other, scattered. The postmaster (OS) writes in a register (page table): your page 0 is in locker 5, page 1 in locker 17, page 2 in locker 42. Paging works exactly like that: an app feels its memory is together, while its pages actually sit in separate frames in RAM.',
            hindi: 'एक पोस्ट ऑफिस में 100 लॉकर हैं, हर लॉकर एक जैसा साइज़ का (frame), यह सोचिए। आपकी चिट्ठी (प्रोग्राम) को 3 लॉकर चाहिए, लेकिन खाली लॉकर नंबर 5, 17 और 42 हैं — पास-पास नहीं, बिखरे हुए हैं। पोस्टमास्टर (OS) एक रजिस्टर (page table) में लिखता है: आपका page 0 लॉकर 5 में, page 1 लॉकर 17 में, page 2 लॉकर 42 में। बिल्कुल वैसे ही पेजिंग में ऐप को लगता है उसकी मेमोरी एक साथ है, जबकि RAM में उसके page अलग-अलग frame में पड़े हैं।',
          },
        },
        {
          heading: {
            hinglish: 'Step by step — worked example',
            english: 'Step by step — worked example',
            hindi: 'स्टेप बाय स्टेप — हल किया हुआ उदाहरण',
          },
          body: {
            hinglish: 'Worked example 1 — address split. Page size 4 KB = 4096 bytes. Logical address 19986 diya hai. Page number = 19986 ÷ 4096 = 4 (kyunki 4 × 4096 = 16384, aur 5 × 4096 = 20480 jo 19986 se bada hai). Offset = 19986 − 16384 = 3602. Page table kehti hai page 4 frame 7 mein hai. Physical address = 7 × 4096 + 3602 = 28672 + 3602 = 32274. Dekho: offset 3602 dono jagah wahi raha, sirf page 4 ki jagah frame 7 aaya. Worked example 2 — kitne pages? 32-bit address, page size 4 KB. Offset ke liye 12 bits chahiye (2^12 = 4096). Page number ke liye 32 − 12 = 20 bits. Kul pages = 2^20 = 10,48,576. Worked example 3 — internal fragmentation. Process 10300 bytes ka hai, page 4096 bytes ka. Pages chahiye = 10300 ÷ 4096 = 2.51, to 3 pages lagenge = 3 × 4096 = 12288 bytes. Waste = 12288 − 10300 = 1988 bytes — ye aakhri page ki khaali jagah hai jo kisi aur ko nahi mil sakti.',
            english: 'Worked example 1 — splitting an address. Page size 4 KB = 4096 bytes. The logical address is 19986. Page number = 19986 ÷ 4096 = 4 (because 4 × 4096 = 16384, and 5 × 4096 = 20480, which is bigger than 19986). Offset = 19986 − 16384 = 3602. The page table says page 4 is in frame 7. Physical address = 7 × 4096 + 3602 = 28672 + 3602 = 32274. See: the offset 3602 stayed the same in both places; only page 4 was replaced by frame 7. Worked example 2 — how many pages? A 32-bit address, page size 4 KB. The offset needs 12 bits (2^12 = 4096). The page number gets 32 − 12 = 20 bits. Total pages = 2^20 = 1,048,576. Worked example 3 — internal fragmentation. A process is 10300 bytes, a page is 4096 bytes. Pages needed = 10300 ÷ 4096 = 2.51, so 3 pages are used = 3 × 4096 = 12288 bytes. Waste = 12288 − 10300 = 1988 bytes — the empty space in the last page that nobody else can use.',
            hindi: 'हल किया हुआ उदाहरण 1 — address बाँटना। Page size 4 KB = 4096 bytes। Logical address 19986 दिया है। Page number = 19986 ÷ 4096 = 4 (क्योंकि 4 × 4096 = 16384, और 5 × 4096 = 20480 जो 19986 से बड़ा है)। Offset = 19986 − 16384 = 3602। Page table कहती है page 4 frame 7 में है। Physical address = 7 × 4096 + 3602 = 28672 + 3602 = 32274। देखो: offset 3602 दोनों जगह वही रहा, सिर्फ़ page 4 की जगह frame 7 आया। उदाहरण 2 — कितने pages? 32-bit address, page size 4 KB। Offset के लिए 12 bits चाहिए (2^12 = 4096)। Page number के लिए 32 − 12 = 20 bits। कुल pages = 2^20 = 10,48,576। उदाहरण 3 — internal fragmentation। प्रोसेस 10300 bytes का है, page 4096 bytes का। Pages चाहिए = 10300 ÷ 4096 = 2.51, तो 3 pages लगेंगे = 3 × 4096 = 12288 bytes। Waste = 12288 − 10300 = 1988 bytes — यह आखिरी page की खाली जगह है जो किसी और को नहीं मिल सकती।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur kyun hote hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और क्यों होती हैं',
          },
          body: {
            hinglish: 'Galti 1: Page aur frame ko ek samajhna. Page program ka tukda hai (logical), frame RAM ka tukda hai (physical). Ye galti isliye hoti hai kyunki dono ka size barabar hota hai. Galti 2: Offset badal jata hai samajhna — nahi, offset dono address mein same rehta hai, sirf page number frame number se badalta hai. Galti 3: "Paging se fragmentation khatm ho jata hai" — galat. External fragmentation khatm hota hai (kyunki page kahin bhi ja sakta hai), lekin internal fragmentation rehta hai (aakhri page ki khaali jagah).',
            english: 'Mistake 1: treating page and frame as the same. A page is a piece of the program (logical); a frame is a piece of RAM (physical). This mistake happens because both have the same size. Mistake 2: thinking the offset changes — no, the offset stays the same in both addresses; only the page number is replaced by the frame number. Mistake 3: “Paging removes fragmentation” — wrong. External fragmentation goes away (because a page can go anywhere), but internal fragmentation stays (the empty space in the last page).',
            hindi: 'गलती 1: Page और frame को एक समझना। Page प्रोग्राम का टुकड़ा है (logical), frame RAM का टुकड़ा है (physical)। यह गलती इसलिए होती है क्योंकि दोनों का साइज़ बराबर होता है। गलती 2: Offset बदल जाता है समझना — नहीं, offset दोनों address में same रहता है, सिर्फ़ page number frame number से बदलता है। गलती 3: "Paging से fragmentation खत्म हो जाता है" — गलत। External fragmentation खत्म होता है (क्योंकि page कहीं भी जा सकता है), लेकिन internal fragmentation रहता है (आखिरी page की खाली जगह)।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास मामले',
          },
          body: {
            hinglish: 'Edge case 1: page fault — process kisi page ko maange jo RAM mein nahi, disk par hai. OS use disk se laata hai; isme time lagta hai, isiliye page fault zyada ho to system slow ho jata hai (thrashing). Edge case 4: logical address bilkul page boundary par ho (jaise 16384) — to offset 0 hota hai aur page number 4, galti se 3 samajhne par jawab galat hoga.',
            english: 'Edge case 1: page fault — a process asks for a page that is not in RAM but on disk. The OS brings it from disk; that takes time, so too many page faults slow the system down (thrashing). Edge case 4: a logical address exactly on a page boundary (like 16384) — the offset is 0 and the page number is 4; mistaking it for 3 gives the wrong answer.',
            hindi: 'खास मामला 1: page fault — प्रोसेस किसी page को माँगे जो RAM में नहीं, डिस्क पर है। OS उसे डिस्क से लाता है; इसमें समय लगता है, इसीलिए page fault ज़्यादा हो तो सिस्टम स्लो हो जाता है (thrashing)। खास मामला 4: logical address बिल्कुल page boundary पर हो (जैसे 16384) — तो offset 0 होता है और page number 4, गलती से 3 समझने पर जवाब गलत होगा।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal diya to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दिया तो क्या होगा?',
          },
          body: {
            hinglish: 'Agar page size 4 KB se 8 KB kar dein, to offset ke liye 13 bits lagenge aur page number ke liye 19 bits. Address 19986 ka page number badal jayega: 19986 ÷ 8192 = 2, offset = 19986 − 16384 = 3602 — offset wahi, page number badla. Agar virtual memory band kar dein, to RAM bharte hi naye app khulna band ho jayenge.',
            english: 'If the page size is changed from 4 KB to 8 KB, the offset would need 13 bits and the page number 19 bits. Address 19986 would get a different page number: 19986 ÷ 8192 = 2, offset = 19986 − 16384 = 3602 — the offset stays, the page number changes. If virtual memory were switched off, new apps would stop opening the moment RAM filled up.',
            hindi: 'अगर page size 4 KB से 8 KB कर दें, तो offset के लिए 13 bits लगेंगे और page number के लिए 19 bits। Address 19986 का page number बदल जाएगा: 19986 ÷ 8192 = 2, offset = 19986 − 16384 = 3602 — offset वही, page number बदला। अगर virtual memory बंद कर दें, तो RAM भरते ही नए ऐप खुलना बंद हो जाएँगे।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'Paging mein program pages mein aur RAM frames mein kat-ti hai. Page table page ko frame se jodti hai. Logical address = page number + offset; physical address = frame number + offset. Offset kabhi nahi badalta. Internal fragmentation aakhri page ki khaali jagah hai. Agle article mein files kaise save hoti hain, woh dekhenge.',
            english: 'In paging, the program is cut into pages and RAM into frames. The page table links a page to a frame. Logical address = page number + offset; physical address = frame number + offset. The offset never changes. Internal fragmentation is the empty space in the last page. In the next article we will see how files are saved.',
            hindi: 'पेजिंग में प्रोग्राम pages में और RAM frames में कटती है। Page table page को frame से जोड़ती है। Logical address = page number + offset; physical address = frame number + offset। Offset कभी नहीं बदलता। Internal fragmentation आखिरी page की खाली जगह है। अगले आर्टिकल में फ़ाइलें कैसे सेव होती हैं, वह देखेंगे।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Logical address se physical address tak',
          english: 'From logical address to physical address',
          hindi: 'Logical address से physical address तक',
        },
        nodes: [
          { t: { hinglish: 'Logical address 19986', english: 'Logical address 19986', hindi: 'Logical address 19986' }, s: { hinglish: 'Page 4 + offset 3602', english: 'Page 4 + offset 3602', hindi: 'Page 4 + offset 3602' } },
          { t: { hinglish: 'Page table', english: 'Page table', hindi: 'Page table' }, s: { hinglish: 'Page 4 → Frame 7', english: 'Page 4 → Frame 7', hindi: 'Page 4 → Frame 7' } },
          { t: { hinglish: 'Physical address 32274', english: 'Physical address 32274', hindi: 'Physical address 32274' }, s: { hinglish: 'Frame 7 + offset 3602', english: 'Frame 7 + offset 3602', hindi: 'Frame 7 + offset 3602' } },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'Page size 4096 hai, logical address 19986 hai. Page number aur offset kya honge?',
            english: 'Page size is 4096, logical address is 19986. What are the page number and offset?',
            hindi: 'Page size 4096 है, logical address 19986 है। Page number और offset क्या होंगे?',
          },
          opts: [
            { hinglish: 'Page 4, offset 3602', english: 'Page 4, offset 3602', hindi: 'Page 4, offset 3602' },
            { hinglish: 'Page 5, offset 3602', english: 'Page 5, offset 3602', hindi: 'Page 5, offset 3602' },
            { hinglish: 'Page 4, offset 4096', english: 'Page 4, offset 4096', hindi: 'Page 4, offset 4096' },
            { hinglish: 'Page 3, offset 3602', english: 'Page 3, offset 3602', hindi: 'Page 3, offset 3602' },
          ],
          ans: 0,
          expl: {
            hinglish: '19986 ÷ 4096 = 4 (4 × 4096 = 16384), offset = 19986 − 16384 = 3602.',
            english: '19986 ÷ 4096 = 4 (4 × 4096 = 16384), offset = 19986 − 16384 = 3602.',
            hindi: '19986 ÷ 4096 = 4 (4 × 4096 = 16384), offset = 19986 − 16384 = 3602।',
          },
        },
        {
          q: {
            hinglish: 'Page 4 frame 7 mein hai, offset 3602 hai. Physical address kya hoga?',
            english: 'Page 4 is in frame 7, offset is 3602. What is the physical address?',
            hindi: 'Page 4 frame 7 में है, offset 3602 है। Physical address क्या होगा?',
          },
          opts: [
            { hinglish: '28672', english: '28672', hindi: '28672' },
            { hinglish: '19986', english: '19986', hindi: '19986' },
            { hinglish: '32274', english: '32274', hindi: '32274' },
            { hinglish: '36020', english: '36020', hindi: '36020' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Physical = frame × page size + offset = 7 × 4096 + 3602 = 28672 + 3602 = 32274.',
            english: 'Physical = frame × page size + offset = 7 × 4096 + 3602 = 28672 + 3602 = 32274.',
            hindi: 'Physical = frame × page size + offset = 7 × 4096 + 3602 = 28672 + 3602 = 32274।',
          },
        },
        {
          q: {
            hinglish: '10300 bytes ka process, 4096 bytes ke page — kitni memory use hogi aur kitni waste?',
            english: 'A 10300-byte process, 4096-byte pages — how much memory is used and how much is wasted?',
            hindi: '10300 bytes का प्रोसेस, 4096 bytes के page — कितनी मेमोरी इस्तेमाल होगी और कितनी waste?',
          },
          opts: [
            { hinglish: '10300 use, 0 waste', english: '10300 used, 0 wasted', hindi: '10300 use, 0 waste' },
            { hinglish: '12288 use, 1988 waste', english: '12288 used, 1988 wasted', hindi: '12288 use, 1988 waste' },
            { hinglish: '8192 use, 2108 waste', english: '8192 used, 2108 wasted', hindi: '8192 use, 2108 waste' },
            { hinglish: '16384 use, 6084 waste', english: '16384 used, 6084 wasted', hindi: '16384 use, 6084 waste' },
          ],
          ans: 1,
          expl: {
            hinglish: '3 pages lagenge (2.51 round up), 3 × 4096 = 12288, waste = 12288 − 10300 = 1988 bytes.',
            english: '3 pages are needed (2.51 rounded up), 3 × 4096 = 12288, waste = 12288 − 10300 = 1988 bytes.',
            hindi: '3 pages लगेंगे (2.51 round up), 3 × 4096 = 12288, waste = 12288 − 10300 = 1988 bytes।',
          },
        },
        {
          q: {
            hinglish: 'Kaunsa statement GALAT hai?',
            english: 'Which statement is WRONG?',
            hindi: 'कौन सा कथन गलत है?',
          },
          opts: [
            { hinglish: 'Page program ka tukda hai, frame RAM ka', english: 'A page is a piece of the program, a frame is a piece of RAM', hindi: 'Page प्रोग्राम का टुकड़ा है, frame RAM का' },
            { hinglish: 'Offset logical aur physical address mein same rehta hai', english: 'The offset stays the same in logical and physical addresses', hindi: 'Offset logical और physical address में same रहता है' },
            { hinglish: 'Paging se internal fragmentation bilkul khatm ho jata hai', english: 'Paging completely removes internal fragmentation', hindi: 'Paging से internal fragmentation बिल्कुल खत्म हो जाता है' },
            { hinglish: 'Page fault par OS page ko disk se laata hai', english: 'On a page fault the OS brings the page from disk', hindi: 'Page fault पर OS page को डिस्क से लाता है' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Paging external fragmentation khatm karta hai, internal nahi — aakhri page ki khaali jagah waste rehti hai.',
            english: 'Paging removes external fragmentation, not internal — the empty space in the last page stays wasted.',
            hindi: 'Paging external fragmentation खत्म करता है, internal नहीं — आखिरी page की खाली जगह waste रहती है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Paging ka address nikalo',
          english: 'Work out a paging address',
          hindi: 'Paging का address निकालो',
        },
        task: {
          hinglish: 'Pen-paper task: page size 4096 bytes. Logical address 12345 hai, aur page table kehti hai uska page frame 3 mein hai. (a) Page number aur offset nikalo. (b) Physical address nikalo. Neeche script chalao aur milao. Done tab jab dono jawab match karein.',
          english: 'Pen-and-paper task: page size is 4096 bytes. The logical address is 12345, and the page table says its page is in frame 3. (a) Find the page number and offset. (b) Find the physical address. Run the script below and match. You are done when both answers match.',
          hindi: 'पेन-पेपर टास्क: page size 4096 bytes। Logical address 12345 है, और page table कहती है उसका page frame 3 में है। (a) Page number और offset निकालो। (b) Physical address निकालो। नीचे स्क्रिप्ट चलाओ और मिलाओ। जब दोनों जवाब मिल जाएँ, तब टास्क पूरा।',
        },
        language: 'python',
        starter: 'addr = 12345\npage_size = 4096\npage = addr // page_size\noffset = addr % page_size\nframe = 3\nphysical = frame * page_size + offset\nprint("Page:", page, "Offset:", offset)\nprint("Physical address:", physical)\n',
        expected: 'Page 3 (3 × 4096 = 12288), offset 57. Physical = 3 × 4096 + 57 = 12345.',
      },
      readMinutes: 12,
    },
    {
      id: 'os-files',
      subjectId: 'operating-systems',
      title: {
        hinglish: 'File Systems — file kaise save hoti hai',
        english: 'File systems — how a file is saved',
        hindi: 'फ़ाइल सिस्टम — फ़ाइल कैसे सेव होती है',
      },
      summary: {
        hinglish: 'File sirf naam nahi hai — disk par blocks, directory aur metadata ka poora system hai. Allocation ke tareeke aur hisaab seekho.',
        english: 'A file is not just a name — it is a whole system of blocks, directories and metadata on disk. Learn the allocation methods and the maths.',
        hindi: 'फ़ाइल सिर्फ़ नाम नहीं है — डिस्क पर blocks, directory और metadata का पूरा सिस्टम है। Allocation के तरीके और हिसाब सीखो।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish: 'File system OS ka woh hissa hai jo decide karta hai file disk par kahan aur kaise rakhi jayegi, aur use wapas kaise dhoondha jayega. Disk chhote-chhote blocks mein banti hoti hai (aam taur par 4 KB). Har file ke baare mein metadata hota hai — naam, size, banane ki date, aur kis ke paas permission hai. Ye metadata directory mein ya inode naam ki structure mein rehta hai. File kholne par OS pehle directory mein naam dhoondhta hai, phir metadata se pata karta hai file ke blocks disk par kahan pade hain, phir un blocks ko padh kar file dikhata hai. Teen allocation tareeke mashhoor hain. Contiguous: file ke saare blocks ek ke baad ek, paas-paas. Linked: har block agle block ka pata rakhta hai, blocks kahin bhi ho sakte hain. Indexed: ek index block mein saare block numbers ki list hoti hai, jaise kitaab ke peeche index.',
            english: 'The file system is the part of the OS that decides where and how a file is kept on disk, and how it is found again. A disk is made of small blocks (usually 4 KB). Every file has metadata — name, size, creation date, and who has permission. This metadata lives in a directory or in a structure called an inode. When you open a file, the OS first looks up the name in the directory, then uses the metadata to find where the file’s blocks lie on disk, then reads those blocks to show the file. Three allocation methods are famous. Contiguous: all the file’s blocks lie one after another, side by side. Linked: every block holds the address of the next block, so blocks can be anywhere. Indexed: an index block holds a list of all the block numbers, like the index at the back of a book.',
            hindi: 'फ़ाइल सिस्टम OS का वह हिस्सा है जो तय करता है फ़ाइल डिस्क पर कहाँ और कैसे रखी जाएगी, और उसे वापस कैसे ढूँढा जाएगा। डिस्क छोटे-छोटे blocks में बँटी होती है (आमतौर पर 4 KB)। हर फ़ाइल के बारे में metadata होता है — नाम, साइज़, बनाने की तारीख़, और किसके पास permission है। यह metadata directory में या inode नाम की structure में रहता है। फ़ाइल खोलने पर OS पहले directory में नाम ढूँढता है, फिर metadata से पता करता है फ़ाइल के blocks डिस्क पर कहाँ पड़े हैं, फिर उन blocks को पढ़कर फ़ाइल दिखाता है। तीन allocation तरीके मशहूर हैं। Contiguous: फ़ाइल के सारे blocks एक के बाद एक, पास-पास। Linked: हर block अगले block का पता रखता है, blocks कहीं भी हो सकते हैं। Indexed: एक index block में सारे block numbers की list होती है, जैसे किताब के पीछे index।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असली ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish: 'Sochiye ek school library. Har kitaab (file) ke liye ek card hota hai — naam, lekhak, shelf number (metadata). Contiguous allocation jaise hai kitaab ke saare pages ek hi jagah bandhe hue hon — padhna tez hai, lekin beech mein page daalna mushkil. Indexed allocation jaise hai kitaab ke pehle page par poori list — "page 1 shelf 2, page 2 shelf 9" — seedha kisi bhi page par jaa sakte ho.',
            english: 'Think of a school library. Every book (file) has a card — name, author, shelf number (metadata). Contiguous allocation is like all the pages of a book bound together in one place — fast to read, but hard to insert a page in the middle. Indexed allocation is like a full list on the first page — “page 1 on shelf 2, page 2 on shelf 9” — you can jump straight to any page.',
            hindi: 'एक स्कूल लाइब्रेरी को सोचिए। हर किताब (फ़ाइल) के लिए एक कार्ड होता है — नाम, लेखक, शेल्फ़ नंबर (metadata)। Contiguous allocation जैसे है किताब के सारे पेज एक ही जगह बँधे हुए हों — पढ़ना तेज़ है, लेकिन बीच में पेज डालना मुश्किल। Indexed allocation जैसे है किताब के पहले पेज पर पूरी list — "page 1 शेल्फ़ 2, page 2 शेल्फ़ 9" — सीधे किसी भी पेज पर जा सकते हो।',
          },
        },
        {
          heading: {
            hinglish: 'Step by step — worked example',
            english: 'Step by step — worked example',
            hindi: 'स्टेप बाय स्टेप — हल किया हुआ उदाहरण',
          },
          body: {
            hinglish: 'Worked example 1 — blocks ginna. Block size 4 KB hai, file 100 KB ki hai. Blocks = 100 ÷ 4 = 25 blocks. Agar file 102 KB ki ho to 102 ÷ 4 = 25.5, to 26 blocks lagenge aur aakhri block mein 2 KB use hoga, 2 KB khaali rahega. Worked example 2 — badi file. 1 MB = 1024 KB. Blocks = 1024 ÷ 4 = 256 blocks. To 1 MB file ke liye 256 blocks, direct pointers se hi mil jate hain — indirect ki zaroorat nahi. Worked example 3 — file kholna. Aap /photos/diwali.jpg kholte ho. Step 1: OS root directory mein "photos" dhoondhta hai. Step 2: photos directory mein "diwali.jpg" ka inode milta hai. Step 3: inode se block numbers milte hain. Step 4: OS blocks padh kar photo dikhata hai.',
            english: 'Worked example 1 — counting blocks. Block size is 4 KB, the file is 100 KB. Blocks = 100 ÷ 4 = 25 blocks. If the file is 102 KB, then 102 ÷ 4 = 25.5, so 26 blocks are needed and the last block uses 2 KB, leaving 2 KB empty. Worked example 2 — a big file. 1 MB = 1024 KB. Blocks = 1024 ÷ 4 = 256 blocks. For a 1 MB file, 256 blocks are reached through direct pointers alone — no indirect block is needed. Worked example 3 — opening a file. You open /photos/diwali.jpg. Step 1: the OS looks up “photos” in the root directory. Step 2: it finds the inode of “diwali.jpg” in the photos directory. Step 3: the inode gives the block numbers. Step 4: the OS reads the blocks and shows the photo.',
            hindi: 'हल किया हुआ उदाहरण 1 — blocks गिनना। Block size 4 KB है, फ़ाइल 100 KB की है। Blocks = 100 ÷ 4 = 25 blocks। अगर फ़ाइल 102 KB की हो तो 102 ÷ 4 = 25.5, तो 26 blocks लगेंगे और आखिरी block में 2 KB इस्तेमाल होगा, 2 KB खाली रहेगा। उदाहरण 2 — बड़ी फ़ाइल। 1 MB = 1024 KB। Blocks = 1024 ÷ 4 = 256 blocks। तो 1 MB फ़ाइल के लिए 256 blocks, direct pointers से ही मिल जाते हैं — indirect की ज़रूरत नहीं। उदाहरण 3 — फ़ाइल खोलना। आप /photos/diwali.jpg खोलते हैं। Step 1: OS root directory में "photos" ढूँढता है। Step 2: photos directory में "diwali.jpg" का inode मिलता है। Step 3: inode से block numbers मिलते हैं। Step 4: OS blocks पढ़कर फ़ोटो दिखाता है।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur kyun hote hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और क्यों होती हैं',
          },
          body: {
            hinglish: 'Galti 1: "File delete karne se data turant mit jata hai" — nahi. OS sirf directory entry hata deta hai, blocks tab tak rehte hain jab tak un par naya data na likha jaye. Isiliye deleted photo kabhi-kabhi recover ho jati hai. Galti 2: "File ka naam hi file hai" — naam sirf directory entry hai; asal file blocks aur inode hain. Ek hi file ke do naam (hard link) ho sakte hain. Galti 3: "Contiguous hamesha best hai" — padhne mein tez hai, lekin file badhne par paas mein jagah na mile to poori file ko kahin aur copy karna padta hai.',
            english: 'Mistake 1: “Deleting a file erases the data at once” — no. The OS only removes the directory entry; the blocks stay until new data is written over them. That is why a deleted photo can sometimes be recovered. Mistake 2: “The file’s name is the file” — the name is only a directory entry; the real file is its blocks and inode. One file can have two names (a hard link). Mistake 3: “Contiguous is always best” — it is fast to read, but when a file grows and there is no space beside it, the whole file must be copied elsewhere.',
            hindi: 'गलती 1: "फ़ाइल delete करने से डेटा तुरंत मिट जाता है" — नहीं। OS सिर्फ़ directory entry हटा देता है, blocks तब तक रहते हैं जब तक उन पर नया डेटा न लिखा जाए। इसीलिए deleted फ़ोटो कभी-कभी recover हो जाती है। गलती 2: "फ़ाइल का नाम ही फ़ाइल है" — नाम सिर्फ़ directory entry है; असल फ़ाइल blocks और inode हैं। एक ही फ़ाइल के दो नाम (hard link) हो सकते हैं। गलती 3: "Contiguous हमेशा best है" — पढ़ने में तेज़ है, लेकिन फ़ाइल बढ़ने पर पास में जगह न मिले तो पूरी फ़ाइल को कहीं और कॉपी करना पड़ता है।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास मामले',
          },
          body: {
            hinglish: 'Edge case 1: file likhte waqt light chali jaye — aadha block likha, aadha nahi. Isse bachne ke liye journaling file system pehle diary (journal) mein likhta hai "ye karna hai", phir kaam karta hai. Edge case 2: ek hi file ko do apps ek saath likhein — bina lock ke dono ka data mil kar kharab ho jayega. Edge case 3: file ka size 0 bytes — uske liye koi block nahi lagta, sirf inode aur naam kaafi hain.',
            english: 'Edge case 1: the power goes out while writing a file — half a block is written, half is not. To guard against this, a journaling file system first writes in a diary (journal) “this is what I will do”, then does the work. Edge case 2: two apps write the same file together — without a lock, both sets of data mix and the file is spoiled. Edge case 3: a file of size 0 bytes — it needs no block at all, only an inode and a name.',
            hindi: 'खास मामला 1: फ़ाइल लिखते समय लाइट चली जाए — आधा block लिखा, आधा नहीं। इससे बचने के लिए journaling फ़ाइल सिस्टम पहले डायरी (journal) में लिखता है "यह करना है", फिर काम करता है। खास मामला 2: एक ही फ़ाइल को दो ऐप्स एक साथ लिखें — बिना lock के दोनों का डेटा मिलकर खराब हो जाएगा। खास मामला 3: फ़ाइल का साइज़ 0 bytes — उसके लिए कोई block नहीं लगता, सिर्फ़ inode और नाम काफ़ी हैं।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal diya to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दिया तो क्या होगा?',
          },
          body: {
            hinglish: 'Agar block size 4 KB se 1 KB kar dein, to 100 KB file ko 100 blocks lagenge — zyada blocks, zyada hisaab, lekin waste kam. Agar indexed ki jagah linked allocation use karein, to beech ki file padhna slow ho jayega kyunki har block se agle tak chalna padega. Har file system apne kaam ke hisaab se block size chunta hai.',
            english: 'If the block size is changed from 4 KB to 1 KB, a 100 KB file would need 100 blocks — more blocks, more bookkeeping, but less waste. If linked allocation were used instead of indexed, reading the middle of a file would get slow because you must walk from block to block. Every file system picks its block size for its own work.',
            hindi: 'अगर block size 4 KB से 1 KB कर दें, तो 100 KB फ़ाइल को 100 blocks लगेंगे — ज़्यादा blocks, ज़्यादा हिसाब, लेकिन waste कम। अगर indexed की जगह linked allocation इस्तेमाल करें, तो बीच की फ़ाइल पढ़ना स्लो हो जाएगा क्योंकि हर block से अगले तक चलना पड़ेगा। हर फ़ाइल सिस्टम अपने काम के हिसाब से block size चुनता है।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'File = naam (directory) + metadata (inode) + data (blocks). Contiguous tez padhta hai, linked kahin bhi jagah leta hai, indexed seedha kisi bhi block par jaata hai. Delete karne se sirf naam mit-ta hai, data tab tak rehta hai jab tak overwrite na ho. Agle article mein deadlock — jab do process ek dusre ka intezar karte-karte atak jayein.',
            english: 'File = name (directory) + metadata (inode) + data (blocks). Contiguous reads fast, linked takes space anywhere, indexed jumps straight to any block. Deleting removes only the name; the data stays until overwritten. In the next article: deadlock — when two processes get stuck waiting for each other.',
            hindi: 'फ़ाइल = नाम (directory) + metadata (inode) + डेटा (blocks)। Contiguous तेज़ पढ़ता है, linked कहीं भी जगह लेता है, indexed सीधे किसी भी block पर जाता है। Delete करने से सिर्फ़ नाम मिटता है, डेटा तब तक रहता है जब तक overwrite न हो। अगले आर्टिकल में deadlock — जब दो प्रोसेस एक दूसरे का इंतज़ार करते-करते अटक जाएँ।',
          },
        },
      ],
      diagram: {
        kind: 'boxes',
        title: {
          hinglish: 'File ke teen hisse',
          english: 'The three parts of a file',
          hindi: 'फ़ाइल के तीन हिस्से',
        },
        nodes: [
          { t: { hinglish: 'Directory entry', english: 'Directory entry', hindi: 'Directory entry' }, s: { hinglish: 'Naam: diwali.jpg', english: 'Name: diwali.jpg', hindi: 'नाम: diwali.jpg' } },
          { t: { hinglish: 'Inode (metadata)', english: 'Inode (metadata)', hindi: 'Inode (metadata)' }, s: { hinglish: 'Size, date, permissions, block list', english: 'Size, date, permissions, block list', hindi: 'Size, date, permissions, block list' } },
          { t: { hinglish: 'Data blocks', english: 'Data blocks', hindi: 'Data blocks' }, s: { hinglish: 'Disk par 4 KB ke tukde', english: '4 KB pieces on disk', hindi: 'डिस्क पर 4 KB के टुकड़े' } },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'Block size 4 KB hai, file 102 KB ki hai. Kitne blocks lagenge?',
            english: 'Block size is 4 KB, the file is 102 KB. How many blocks are needed?',
            hindi: 'Block size 4 KB है, फ़ाइल 102 KB की है। कितने blocks लगेंगे?',
          },
          opts: [
            { hinglish: '25', english: '25', hindi: '25' },
            { hinglish: '25.5', english: '25.5', hindi: '25.5' },
            { hinglish: '26', english: '26', hindi: '26' },
            { hinglish: '24', english: '24', hindi: '24' },
          ],
          ans: 2,
          expl: {
            hinglish: '102 ÷ 4 = 25.5 — aadha block nahi milta, to 26 blocks lagenge, aakhri mein 2 KB khaali.',
            english: '102 ÷ 4 = 25.5 — you cannot get half a block, so 26 blocks are needed, with 2 KB empty in the last one.',
            hindi: '102 ÷ 4 = 25.5 — आधा block नहीं मिलता, तो 26 blocks लगेंगे, आखिरी में 2 KB खाली।',
          },
        },
        {
          q: {
            hinglish: '1 MB file, 4 KB blocks — kitne blocks? (1 MB = 1024 KB)',
            english: 'A 1 MB file, 4 KB blocks — how many blocks? (1 MB = 1024 KB)',
            hindi: '1 MB फ़ाइल, 4 KB blocks — कितने blocks? (1 MB = 1024 KB)',
          },
          opts: [
            { hinglish: '100', english: '100', hindi: '100' },
            { hinglish: '256', english: '256', hindi: '256' },
            { hinglish: '1024', english: '1024', hindi: '1024' },
            { hinglish: '512', english: '512', hindi: '512' },
          ],
          ans: 1,
          expl: {
            hinglish: '1024 ÷ 4 = 256 blocks.',
            english: '1024 ÷ 4 = 256 blocks.',
            hindi: '1024 ÷ 4 = 256 blocks।',
          },
        },
        {
          q: {
            hinglish: 'File delete karne par asal mein kya hota hai?',
            english: 'What actually happens when a file is deleted?',
            hindi: 'फ़ाइल delete करने पर असल में क्या होता है?',
          },
          opts: [
            { hinglish: 'Blocks turant mit jate hain', english: 'The blocks are erased at once', hindi: 'Blocks तुरंत मिट जाते हैं' },
            { hinglish: 'Sirf directory entry hat-ti hai, blocks tab tak rehte hain', english: 'Only the directory entry is removed; the blocks stay', hindi: 'सिर्फ़ directory entry हटती है, blocks तब तक रहते हैं' },
            { hinglish: 'Inode turant naya ban jata hai', english: 'A new inode is created at once', hindi: 'Inode तुरंत नया बन जाता है' },
            { hinglish: 'Poori disk format ho jati hai', english: 'The whole disk is formatted', hindi: 'पूरी डिस्क format हो जाती है' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Delete sirf naam hatata hai; blocks tab tak bache rehte hain jab tak un par naya data na likha jaye — isiliye recovery mumkin hai.',
            english: 'Delete only removes the name; the blocks stay until new data is written over them — which is why recovery is possible.',
            hindi: 'Delete सिर्फ़ नाम हटाता है; blocks तब तक बचे रहते हैं जब तक उन पर नया डेटा न लिखा जाए — इसीलिए recovery मुमकिन है।',
          },
        },
        {
          q: {
            hinglish: 'Kaunsa statement GALAT hai?',
            english: 'Which statement is WRONG?',
            hindi: 'कौन सा कथन गलत है?',
          },
          opts: [
            { hinglish: 'Linked allocation mein blocks kahin bhi ho sakte hain', english: 'In linked allocation blocks can be anywhere', hindi: 'Linked allocation में blocks कहीं भी हो सकते हैं' },
            { hinglish: 'Indexed allocation mein index block mein block numbers hote hain', english: 'In indexed allocation the index block holds the block numbers', hindi: 'Indexed allocation में index block में block numbers होते हैं' },
            { hinglish: 'Contiguous mein file badhne par kabhi problem nahi hoti', english: 'In contiguous allocation a growing file never causes a problem', hindi: 'Contiguous में फ़ाइल बढ़ने पर कभी problem नहीं होती' },
            { hinglish: 'Inode mein file ka size aur permissions hote hain', english: 'The inode holds the file’s size and permissions', hindi: 'Inode में फ़ाइल का size और permissions होते हैं' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Contiguous mein file badhe aur paas mein jagah na ho to poori file ko kahin aur copy karna padta hai — ye uski sabse badi kamzori hai.',
            english: 'In contiguous allocation, if a file grows and there is no space beside it, the whole file must be copied elsewhere — its biggest weakness.',
            hindi: 'Contiguous में फ़ाइल बढ़े और पास में जगह न हो तो पूरी फ़ाइल को कहीं और कॉपी करना पड़ता है — यह उसकी सबसे बड़ी कमज़ोरी है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Blocks ginna seekho',
          english: 'Learn to count blocks',
          hindi: 'Blocks गिनना सीखो',
        },
        task: {
          hinglish: 'Pen-paper task: block size 4 KB hai. (a) 50 KB ki file ko kitne blocks lagenge? (b) 2 MB ki file ko kitne blocks lagenge? (c) 10 KB ki file mein aakhri block mein kitni jagah khaali rahegi? Neeche script chalao aur milao. Done tab jab teeno jawab match karein.',
          english: 'Pen-and-paper task: block size is 4 KB. (a) How many blocks does a 50 KB file need? (b) How many blocks does a 2 MB file need? (c) In a 10 KB file, how much space stays empty in the last block? Run the script below and match. You are done when all three answers match.',
          hindi: 'पेन-पेपर टास्क: block size 4 KB है। (a) 50 KB की फ़ाइल को कितने blocks लगेंगे? (b) 2 MB की फ़ाइल को कितने blocks लगेंगे? (c) 10 KB की फ़ाइल में आखिरी block में कितनी जगह खाली रहेगी? नीचे स्क्रिप्ट चलाओ और मिलाओ। जब तीनों जवाब मिल जाएँ, तब टास्क पूरा।',
        },
        language: 'python',
        starter: 'import math\nblock = 4\nprint("50 KB file:", math.ceil(50 / block), "blocks")\nprint("2 MB file:", math.ceil(2048 / block), "blocks")\nprint("10 KB file, last block empty:", 3 * block - 10, "KB")\n',
        expected: '(a) 13 blocks (12.5 round up). (b) 512 blocks. (c) 2 KB empty (3 blocks = 12 KB, 12 − 10 = 2).',
      },
      readMinutes: 11,
    },
    {
      id: 'os-deadlocks',
      subjectId: 'operating-systems',
      title: {
        hinglish: 'Deadlock — jab sab ek dusre ka intezar karein',
        english: 'Deadlock — when everyone waits for each other',
        hindi: 'Deadlock — जब सब एक दूसरे का इंतज़ार करें',
      },
      summary: {
        hinglish: 'Do process ek dusre ke resource ka intezar karte-karte hamesha ke liye atak jayein — yahi deadlock hai. Chaar shartein aur Banker algorithm seekho.',
        english: 'Two processes wait forever for each other’s resource — that is deadlock. Learn the four conditions and the Banker’s algorithm.',
        hindi: 'दो प्रोसेस एक दूसरे के resource का इंतज़ार करते-करते हमेशा के लिए अटक जाएँ — यही deadlock है। चार शर्तें और Banker algorithm सीखो।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish: 'Deadlock tab hota hai jab do ya zyada process aise atak jayein ki koi bhi aage na badh sake — har ek us resource ka intezar kar raha hai jo dusre ke paas hai. Deadlock ke liye chaar shartein ek saath honi chahiye. Mutual exclusion: ek resource ek waqt par sirf ek process use kar sakta hai. Hold and wait: process ek resource pakde hue dusre ka intezar karta hai. No preemption: resource zabardasti chheena nahi ja sakta, process khud chhode tabhi milega. Circular wait: process gol ghum kar ek dusre ka intezar karte hain — A B ka intezar karta hai, B A ka.',
            english: 'Deadlock happens when two or more processes get stuck so that none can move forward — each one waits for a resource held by another. Four conditions must all hold together for deadlock. Mutual exclusion: one resource can be used by only one process at a time. Hold and wait: a process holds one resource while waiting for another. No preemption: a resource cannot be snatched away; it is given only when the process releases it itself. Circular wait: processes wait for each other in a circle — A waits for B, B waits for A.',
            hindi: 'Deadlock तब होता है जब दो या ज़्यादा प्रोसेस ऐसे अटक जाएँ कि कोई भी आगे न बढ़ सके — हर एक उस resource का इंतज़ार कर रहा है जो दूसरे के पास है। Deadlock के लिए चार शर्तें एक साथ होनी चाहिए। Mutual exclusion: एक resource एक समय पर सिर्फ़ एक प्रोसेस इस्तेमाल कर सकता है। Hold and wait: प्रोसेस एक resource पकड़े हुए दूसरे का इंतज़ार करता है। No preemption: resource ज़बरदस्ती छीना नहीं जा सकता, प्रोसेस खुद छोड़े तभी मिलेगा। Circular wait: प्रोसेस गोल घूमकर एक दूसरे का इंतज़ार करते हैं — A B का इंतज़ार करता है, B A का।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असली ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish: 'Sochiye ek patli gali mein do gaadi aamne-saamne aa gayi hain. Gaadi A aage nahi badh sakti kyunki B rasta roke khadi hai; B aage nahi badh sakti kyunki A rasta roke khadi hai. Chaaron shartein dikh rahi hain: gali ek waqt par ek gaadi ki hai (mutual exclusion), dono apni jagah pakde hue hain aur aage ki jagah maang rahi hain (hold and wait), koi gaadi ko zabardasti dhakel nahi sakta (no preemption), aur dono ek dusre ka intezar kar rahi hain (circular wait).',
            english: 'Think of two cars meeting face to face in a narrow lane. Car A cannot move forward because B blocks the way; B cannot move forward because A blocks the way. Both keep honking, neither reverses — that is deadlock. All four conditions are visible: the lane fits one car at a time (mutual exclusion), both hold their spot and ask for the space ahead (hold and wait), nobody can push a car away by force (no preemption), and both wait for each other (circular wait). The same happens on a single railway track: if two trains meet face to face, one must go back to a loop line.',
            hindi: 'एक पतली गली में दो गाड़ियाँ आमने-सामने आ गई हैं, यह सोचिए। गाड़ी A आगे नहीं बढ़ सकती क्योंकि B रास्ता रोके खड़ी है; B आगे नहीं बढ़ सकती क्योंकि A रास्ता रोके खड़ी है। चारों शर्तें दिख रही हैं: गली एक समय पर एक गाड़ी की है (mutual exclusion), दोनों अपनी जगह पकड़े हुए हैं और आगे की जगह माँग रही हैं (hold and wait), कोई गाड़ी को ज़बरदस्ती धकेल नहीं सकता (no preemption), और दोनों एक दूसरे का इंतज़ार कर रही हैं (circular wait)।',
          },
        },
        {
          heading: {
            hinglish: 'Step by step — worked example',
            english: 'Step by step — worked example',
            hindi: 'स्टेप बाय स्टेप — हल किया हुआ उदाहरण',
          },
          body: {
            hinglish: 'Worked example 1 — printer aur scanner. Process P1 ke paas printer hai, use scanner chahiye. Process P2 ke paas scanner hai, use printer chahiye. P1 scanner ka intezar karta hai, P2 printer ka — gol ghum kar intezar, deadlock. Dono mein se koi ek apna resource chhode to deadlock tootega. Worked example 2 — Banker algorithm. Available resources = (3, 3, 2). Process ki Need = Max − Allocation. P0: allocation (0,1,0), max (7,5,3), need (7,4,3). P1: allocation (2,0,0), max (3,2,2), need (1,2,2). P2: allocation (3,0,2), max (9,0,2), need (6,0,0). P3: allocation (2,1,1), max (2,2,2), need (0,1,1). P4: allocation (0,0,2), max (4,3,3), need (4,3,1). Safe sequence dhoondhte hain. P1 ki need (1,2,2) available (3,3,2) se kam hai — P1 chalega, khatm hone par available = (3+2, 3+0, 2+0) = (5,3,2). Ab P3 ki need (0,1,1) available se kam — P3 chalega, available = (7,4,3). Ab P4 ki need (4,3,1) available se kam — P4 chalega, available = (7,4,5). Ab P0 ki need (7,4,3) available se kam — P0 chalega, available = (7,5,5). Aakhir mein P2 ki need (6,0,0) available se kam — P2 chalega. Safe sequence: P1, P3, P4, P0, P2. System safe hai, deadlock nahi hoga.',
            english: 'Worked example 1 — printer and scanner. Process P1 holds the printer and needs the scanner. Process P2 holds the scanner and needs the printer. P1 waits for the scanner, P2 waits for the printer — waiting in a circle, deadlock. If either one gives up its resource, the deadlock breaks. Worked example 2 — the Banker’s algorithm. Available resources = (3, 3, 2). A process’s Need = Max − Allocation. P0: allocation (0,1,0), max (7,5,3), need (7,4,3). P1: allocation (2,0,0), max (3,2,2), need (1,2,2). P2: allocation (3,0,2), max (9,0,2), need (6,0,0). P3: allocation (2,1,1), max (2,2,2), need (0,1,1). P4: allocation (0,0,2), max (4,3,3), need (4,3,1). Let us find a safe sequence. P1’s need (1,2,2) is less than the available (3,3,2) — P1 runs, and when it finishes the available becomes (3+2, 3+0, 2+0) = (5,3,2). Now P3’s need (0,1,1) is less than the available — P3 runs, available = (7,4,3). Now P4’s need (4,3,1) is less — P4 runs, available = (7,4,5). Now P0’s need (7,4,3) is less — P0 runs, available = (7,5,5). Finally P2’s need (6,0,0) is less — P2 runs. Safe sequence: P1, P3, P4, P0, P2. The system is safe; no deadlock will happen.',
            hindi: 'हल किया हुआ उदाहरण 1 — प्रिंटर और स्कैनर। प्रोसेस P1 के पास प्रिंटर है, उसे स्कैनर चाहिए। प्रोसेस P2 के पास स्कैनर है, उसे प्रिंटर चाहिए। P1 स्कैनर का इंतज़ार करता है, P2 प्रिंटर का — गोल घूमकर इंतज़ार, deadlock। दोनों में से कोई एक अपना resource छोड़े तो deadlock टूटेगा। उदाहरण 2 — Banker algorithm। Available resources = (3, 3, 2)। प्रोसेस की Need = Max − Allocation। P0: allocation (0,1,0), max (7,5,3), need (7,4,3)। P1: allocation (2,0,0), max (3,2,2), need (1,2,2)। P2: allocation (3,0,2), max (9,0,2), need (6,0,0)। P3: allocation (2,1,1), max (2,2,2), need (0,1,1)। P4: allocation (0,0,2), max (4,3,3), need (4,3,1)। Safe sequence ढूँढते हैं। P1 की need (1,2,2) available (3,3,2) से कम है — P1 चलेगा, खत्म होने पर available = (3+2, 3+0, 2+0) = (5,3,2)। अब P3 की need (0,1,1) available से कम — P3 चलेगा, available = (7,4,3)। अब P4 की need (4,3,1) available से कम — P4 चलेगा, available = (7,4,5)। अब P0 की need (7,4,3) available से कम — P0 चलेगा, available = (7,5,5)। आखिर में P2 की need (6,0,0) available से कम — P2 चलेगा। Safe sequence: P1, P3, P4, P0, P2। सिस्टम safe है, deadlock नहीं होगा।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur kyun hote hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और क्यों होती हैं',
          },
          body: {
            hinglish: 'Galti 1: "Deadlock aur starvation ek hi hai" — nahi. Deadlock mein koi bhi aage nahi badh sakta; starvation mein ek process intezar karta rehta hai jabki dusre chalte rehte hain. Galti 3: "Banker algorithm deadlock ko rokta hai" — nahi, woh deadlock se bachta hai (avoidance) — safe state mein rehta hai, prevention nahi karta. Galti 5: Need ka hisaab ulta karna — Need = Max − Allocation, Allocation − Max nahi.',
            english: 'Mistake 1: “Deadlock and starvation are the same” — no. In deadlock nobody can move forward; in starvation one process keeps waiting while others keep running. Mistake 3: “The Banker’s algorithm prevents deadlock” — no, it avoids deadlock (avoidance) by staying in a safe state; it does not prevent it. Mistake 5: working out Need backwards — Need = Max − Allocation, not Allocation − Max.',
            hindi: 'गलती 1: "Deadlock और starvation एक ही है" — नहीं। Deadlock में कोई भी आगे नहीं बढ़ सकता; starvation में एक प्रोसेस इंतज़ार करता रहता है जबकि दूसरे चलते रहते हैं। गलती 3: "Banker algorithm deadlock को रोकता है" — नहीं, वह deadlock से बचता है (avoidance) — safe state में रहता है, prevention नहीं करता। गलती 5: Need का हिसाब उल्टा करना — Need = Max − Allocation, Allocation − Max नहीं।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास मामले',
          },
          body: {
            hinglish: 'Edge case 1: ek hi process, ek hi resource — deadlock nahi ho sakta, kyunki circular wait ke liye kam se kam do process chahiye. Edge case 2: resource ki ek se zyada copy hon — jaise 3 printer. Ek process ek printer pakde hue dusre ka intezar kare to bhi deadlock nahi hoga jab tak teeno printer khatm na ho jayein. Edge case 3: process apna resource khud chhod de — deadlock toot jata hai, isiliye timeout wala design achha hota hai (kuch der intezar karo, phir chhod do).',
            english: 'Edge case 1: one process, one resource — deadlock cannot happen, because circular wait needs at least two processes. Edge case 2: a resource has more than one copy — like 3 printers. If a process holds one printer and waits for another, there is still no deadlock unless all three printers are taken. Edge case 3: a process gives up its resource itself — the deadlock breaks, which is why a design with a timeout is good (wait a while, then give up).',
            hindi: 'खास मामला 1: एक ही प्रोसेस, एक ही resource — deadlock नहीं हो सकता, क्योंकि circular wait के लिए कम से कम दो प्रोसेस चाहिए। खास मामला 2: resource की एक से ज़्यादा कॉपी हों — जैसे 3 प्रिंटर। एक प्रोसेस एक प्रिंटर पकड़े हुए दूसरे का इंतज़ार करे तो भी deadlock नहीं होगा जब तक तीनों प्रिंटर खत्म न हो जाएँ। खास मामला 3: प्रोसेस अपना resource खुद छोड़ दे — deadlock टूट जाता है, इसीलिए timeout वाला डिज़ाइन अच्छा होता है (कुछ देर इंतज़ार करो, फिर छोड़ दो)।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal diya to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दिया तो क्या होगा?',
          },
          body: {
            hinglish: 'Agar available resources (3,3,2) se (7,5,3) kar dein, to P0 ki need (7,4,3) turant poori ho jayegi aur safe sequence P0 se shuru ho sakti hai. Agar preemption allow kar dein (resource chheen sakte hain), to deadlock ki shart toot jayegi — lekin chheena hua kaam dobara karna padega, jaise printer se aadha print chheen lo to dobara print karna hoga.',
            english: 'If the available resources are raised from (3,3,2) to (7,5,3), then P0’s need (7,4,3) is met at once and a safe sequence could start with P0. If preemption were allowed (a resource can be snatched), the deadlock condition would break — but the snatched work would have to be redone, like taking a half-printed page from the printer means printing again.',
            hindi: 'अगर available resources (3,3,2) से (7,5,3) कर दें, तो P0 की need (7,4,3) तुरंत पूरी हो जाएगी और safe sequence P0 से शुरू हो सकती है। अगर preemption allow कर दें (resource छीन सकते हैं), तो deadlock की शर्त टूट जाएगी — लेकिन छीना हुआ काम दोबारा करना पड़ेगा, जैसे प्रिंटर से आधा प्रिंट छीन लो तो दोबारा प्रिंट करना होगा।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'Deadlock ke liye chaar shartein chahiye: mutual exclusion, hold and wait, no preemption, circular wait. Ek bhi todo, deadlock nahi. Banker algorithm mein Need = Max − Allocation, aur safe sequence mil jaye to system safe hai. Hamari example mein safe sequence P1, P3, P4, P0, P2 thi. OS subject yahin khatm — ab aap process, scheduling, paging, files aur deadlock ka poora hisaab kar sakte ho.',
            english: 'Deadlock needs four conditions: mutual exclusion, hold and wait, no preemption, and circular wait. Break even one, and there is no deadlock. In the Banker’s algorithm, Need = Max − Allocation, and if a safe sequence is found the system is safe. In our example the safe sequence was P1, P3, P4, P0, P2. That ends the OS subject — you can now work out processes, scheduling, paging, files and deadlock fully.',
            hindi: 'Deadlock के लिए चार शर्तें चाहिए: mutual exclusion, hold and wait, no preemption, circular wait। एक भी तोड़ो, deadlock नहीं। Banker algorithm में Need = Max − Allocation, और safe sequence मिल जाए तो सिस्टम safe है। हमारी example में safe sequence P1, P3, P4, P0, P2 थी। OS subject यहीं खत्म — अब आप प्रोसेस, scheduling, paging, files और deadlock का पूरा हिसाब कर सकते हो।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Banker algorithm — safe sequence',
          english: 'Banker’s algorithm — safe sequence',
          hindi: 'Banker algorithm — safe sequence',
        },
        nodes: [
          { t: { hinglish: 'Available (3,3,2)', english: 'Available (3,3,2)', hindi: 'Available (3,3,2)' }, s: { hinglish: 'Shuruaat', english: 'Start', hindi: 'शुरुआत' } },
          { t: { hinglish: 'P1 chalta hai', english: 'P1 runs', hindi: 'P1 चलता है' }, s: { hinglish: 'Need (1,2,2) → Available (5,3,2)', english: 'Need (1,2,2) → Available (5,3,2)', hindi: 'Need (1,2,2) → Available (5,3,2)' } },
          { t: { hinglish: 'P3 chalta hai', english: 'P3 runs', hindi: 'P3 चलता है' }, s: { hinglish: 'Need (0,1,1) → Available (7,4,3)', english: 'Need (0,1,1) → Available (7,4,3)', hindi: 'Need (0,1,1) → Available (7,4,3)' } },
          { t: { hinglish: 'P4 chalta hai', english: 'P4 runs', hindi: 'P4 चलता है' }, s: { hinglish: 'Need (4,3,1) → Available (7,4,5)', english: 'Need (4,3,1) → Available (7,4,5)', hindi: 'Need (4,3,1) → Available (7,4,5)' } },
          { t: { hinglish: 'P0, phir P2', english: 'P0, then P2', hindi: 'P0, फिर P2' }, s: { hinglish: 'Safe sequence: P1, P3, P4, P0, P2', english: 'Safe sequence: P1, P3, P4, P0, P2', hindi: 'Safe sequence: P1, P3, P4, P0, P2' } },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'Banker example mein pehle kaun chala aur kyun?',
            english: 'In the Banker example, who ran first and why?',
            hindi: 'Banker example में पहले कौन चला और क्यों?',
          },
          opts: [
            { hinglish: 'P0, kyunki woh pehla hai', english: 'P0, because it is first', hindi: 'P0, क्योंकि वह पहला है' },
            { hinglish: 'P1, kyunki uski need (1,2,2) available (3,3,2) se kam thi', english: 'P1, because its need (1,2,2) was less than the available (3,3,2)', hindi: 'P1, क्योंकि उसकी need (1,2,2) available (3,3,2) से कम थी' },
            { hinglish: 'P2, kyunki uski need sabse badi thi', english: 'P2, because its need was the biggest', hindi: 'P2, क्योंकि उसकी need सबसे बड़ी थी' },
            { hinglish: 'P3, kyunki uski need zero thi', english: 'P3, because its need was zero', hindi: 'P3, क्योंकि उसकी need zero थी' },
          ],
          ans: 1,
          expl: {
            hinglish: 'P0 ki need (7,4,3) aur P2 ki need (6,0,0) available se zyada thi. P1 aur P3 dono chal sakte the; P1 ko pehle chuna gaya.',
            english: 'P0’s need (7,4,3) and P2’s need (6,0,0) were more than the available. Both P1 and P3 could run; P1 was picked first.',
            hindi: 'P0 की need (7,4,3) और P2 की need (6,0,0) available से ज़्यादा थी। P1 और P3 दोनों चल सकते थे; P1 को पहले चुना गया।',
          },
        },
        {
          q: {
            hinglish: 'P1 ke khatm hone ke baad available kya hua?',
            english: 'After P1 finished, what did the available become?',
            hindi: 'P1 के खत्म होने के बाद available क्या हुआ?',
          },
          opts: [
            { hinglish: '(3,3,2)', english: '(3,3,2)', hindi: '(3,3,2)' },
            { hinglish: '(5,3,2)', english: '(5,3,2)', hindi: '(5,3,2)' },
            { hinglish: '(7,4,3)', english: '(7,4,3)', hindi: '(7,4,3)' },
            { hinglish: '(1,2,2)', english: '(1,2,2)', hindi: '(1,2,2)' },
          ],
          ans: 1,
          expl: {
            hinglish: 'P1 apna allocation (2,0,0) wapas karta hai: (3+2, 3+0, 2+0) = (5,3,2).',
            english: 'P1 returns its allocation (2,0,0): (3+2, 3+0, 2+0) = (5,3,2).',
            hindi: 'P1 अपना allocation (2,0,0) वापस करता है: (3+2, 3+0, 2+0) = (5,3,2)।',
          },
        },
        {
          q: {
            hinglish: 'Deadlock ki kaunsi shart ko todna sabse mushkil hai aur kyun?',
            english: 'Which deadlock condition is hardest to break, and why?',
            hindi: 'Deadlock की कौन सी शर्त को तोड़ना सबसे मुश्किल है और क्यों?',
          },
          opts: [
            { hinglish: 'Mutual exclusion — kuch resources share nahi ho sakte', english: 'Mutual exclusion — some resources cannot be shared', hindi: 'Mutual exclusion — कुछ resources शेयर नहीं हो सकते' },
            { hinglish: 'Circular wait — ye kabhi hoti hi nahi', english: 'Circular wait — it never happens', hindi: 'Circular wait — यह कभी होती ही नहीं' },
            { hinglish: 'Hold and wait — iska koi hal nahi', english: 'Hold and wait — it has no fix', hindi: 'Hold and wait — इसका कोई हल नहीं' },
            { hinglish: 'No preemption — ye hamesha tooti rehti hai', english: 'No preemption — it is always broken', hindi: 'No preemption — यह हमेशा टूटी रहती है' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Printer jaise resource ko do process ek saath use nahi kar sakte — mutual exclusion ko todna aksar namumkin hota hai.',
            english: 'A resource like a printer cannot be used by two processes at once — breaking mutual exclusion is often impossible.',
            hindi: 'प्रिंटर जैसे resource को दो प्रोसेस एक साथ इस्तेमाल नहीं कर सकते — mutual exclusion को तोड़ना अक्सर नामुमकिन होता है।',
          },
        },
        {
          q: {
            hinglish: 'Kaunsa statement GALAT hai?',
            english: 'Which statement is WRONG?',
            hindi: 'कौन सा कथन गलत है?',
          },
          opts: [
            { hinglish: 'Deadlock mein koi process aage nahi badh sakta', english: 'In deadlock no process can move forward', hindi: 'Deadlock में कोई प्रोसेस आगे नहीं बढ़ सकता' },
            { hinglish: 'Need = Max − Allocation', english: 'Need = Max − Allocation', hindi: 'Need = Max − Allocation' },
            { hinglish: 'Starvation aur deadlock ek hi cheez hain', english: 'Starvation and deadlock are the same thing', hindi: 'Starvation और deadlock एक ही चीज़ हैं' },
            { hinglish: 'Safe sequence mil jaye to system safe hai', english: 'If a safe sequence is found, the system is safe', hindi: 'Safe sequence मिल जाए तो सिस्टम safe है' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Starvation mein ek process intezar karta hai jabki dusre chalte hain; deadlock mein sab atak jate hain — dono alag hain.',
            english: 'In starvation one process waits while others run; in deadlock all are stuck — the two are different.',
            hindi: 'Starvation में एक प्रोसेस इंतज़ार करता है जबकि दूसरे चलते हैं; deadlock में सब अटक जाते हैं — दोनों अलग हैं।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Banker algorithm ka hisaab',
          english: 'Work out the Banker’s algorithm',
          hindi: 'Banker algorithm का हिसाब',
        },
        task: {
          hinglish: 'Pen-paper task: Available = (2,1,0). P0: allocation (0,0,0), max (2,1,0). P1: allocation (1,0,0), max (2,1,1). (a) Dono ki Need nikalo. (b) Kaun pehle chal sakta hai? (c) Safe sequence likho. Neeche script wahi hisaab karta hai — pehle haath se karo, phir milao. Done tab jab teeno jawab match karein.',
          english: 'Pen-and-paper task: Available = (2,1,0). P0: allocation (0,0,0), max (2,1,0). P1: allocation (1,0,0), max (2,1,1). (a) Find both Needs. (b) Who can run first? (c) Write the safe sequence. The script below does the same maths — do it by hand first, then match. You are done when all three answers match.',
          hindi: 'पेन-पेपर टास्क: Available = (2,1,0)। P0: allocation (0,0,0), max (2,1,0)। P1: allocation (1,0,0), max (2,1,1)। (a) दोनों की Need निकालो। (b) कौन पहले चल सकता है? (c) Safe sequence लिखो। नीचे स्क्रिप्ट वही हिसाब करता है — पहले हाथ से करो, फिर मिलाओ। जब तीनों जवाब मिल जाएँ, तब टास्क पूरा।',
        },
        language: 'python',
        starter: 'avail = [2, 1, 0]\nneed0 = [2 - 0, 1 - 0, 0 - 0]\nneed1 = [2 - 1, 1 - 0, 1 - 0]\nprint("P0 need:", need0)\nprint("P1 need:", need1)\nprint("P0 chal sakta hai?", all(n <= a for n, a in zip(need0, avail)))\nprint("P1 chal sakta hai?", all(n <= a for n, a in zip(need1, avail)))\n',
        expected: 'P0 need (2,1,0), P1 need (1,1,1). P0 chal sakta hai (need <= available). P1 nahi (teensra resource 1 > 0). Safe sequence: P0, phir P1.',
      },
      readMinutes: 12,
    },
  ],
};
