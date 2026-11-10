// Learn2Pro v2 — Computer Networks (CSE).
// Written by AI in Learn2Pro's own style. Facts checked against standard
// networking concepts; all examples, wording and numbers are original.
import type { Subject } from '../lib/types';

export const computerNetworks: Subject = {
  id: 'computer-networks',
  name: {
    hinglish: 'Computer Networks',
    english: 'Computer Networks',
    hindi: 'कंप्यूटर नेटवर्क',
  },
  tagline: {
    hinglish: 'Phone se website tak data kaise pahunchta hai — IP, TCP, DNS aur routing, number ke saath.',
    english: 'How data travels from your phone to a website — IP, TCP, DNS and routing, with real numbers.',
    hindi: 'फ़ोन से वेबसाइट तक डेटा कैसे पहुँचता है — IP, TCP, DNS और रूटिंग, नंबर के साथ।',
  },
  icon: '🌐',
  color: '#ec4899',
  category: 'cse',
  articles: [
    {
      id: 'cn-intro',
      subjectId: 'computer-networks',
      title: {
        hinglish: 'Network kya hai — OSI aur TCP/IP model',
        english: 'What is a network — the OSI and TCP/IP models',
        hindi: 'नेटवर्क क्या है — OSI और TCP/IP मॉडल',
      },
      summary: {
        hinglish: 'Network ka matlab hai do ya zyada device ka judna aur data baantna. OSI ki 7 layer aur TCP/IP ki 4 layer seekho.',
        english: 'A network means two or more devices connected and sharing data. Learn the 7 layers of OSI and the 4 layers of TCP/IP.',
        hindi: 'नेटवर्क का मतलब है दो या ज़्यादा डिवाइस का जुड़ना और डेटा बाँटना। OSI की 7 layer और TCP/IP की 4 layer सीखो।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish: 'Computer network ka matlab hai do ya zyada devices ka aapas mein judna taaki woh data aur resources baant sakein. Aapka phone, ghar ka Wi-Fi router aur internet — ye sab ek network hai. Network ke bina aapka phone sirf calculator aur camera hota. Data bhejne ka kaam layer mein banta hota hai, taaki har layer ek chhota kaam kare. OSI model mein 7 layers hain: Physical (taar, signal), Data Link (MAC address, ek hi network mein bhejna), Network (IP address, ek network se dusre tak), Transport (TCP/UDP, sahi order mein pahunchana), Session (connection banaye rakhna), Presentation (data ka format, encryption), Application (jo app aap dekhte ho — browser, WhatsApp).',
            english: 'A computer network means two or more devices connected to each other so they can share data and resources. Your phone, your home Wi-Fi router and the internet — all of that is a network. Without a network, your phone would be just a calculator and a camera. Sending data is divided into layers, so each layer does one small job. The OSI model has 7 layers: Physical (cables, signals), Data Link (MAC address, sending inside one network), Network (IP address, from one network to another), Transport (TCP/UDP, delivering in the right order), Session (keeping the connection alive), Presentation (data format, encryption), and Application (the app you see — browser, WhatsApp).',
            hindi: 'कंप्यूटर नेटवर्क का मतलब है दो या ज़्यादा डिवाइस का आपस में जुड़ना ताकि वह डेटा और resources बाँट सकें। आपका फ़ोन, घर का Wi-Fi राउटर और इंटरनेट — यह सब एक नेटवर्क है। नेटवर्क के बिना आपका फ़ोन सिर्फ़ कैलकुलेटर और कैमरा होता। डेटा भेजने का काम layer में बँटा होता है, ताकि हर layer एक छोटा काम करे। OSI मॉडल में 7 layers हैं: Physical (तार, सिग्नल), Data Link (MAC address, एक ही नेटवर्क में भेजना), Network (IP address, एक नेटवर्क से दूसरे तक), Transport (TCP/UDP, सही क्रम में पहुँचाना), Session (कनेक्शन बनाए रखना), Presentation (डेटा का फ़ॉर्मैट, encryption), Application (जो ऐप आप देखते हो — ब्राउज़र, WhatsApp)।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असली ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish: 'Sochiye aap Speed Post se ek gift bhej rahe ho. Pehle aap gift ko dabbe mein band karte ho aur upar pata likhte ho (Application layer). Phir dabbe ko kagaz mein lapet kar seal karte ho (Presentation — format aur safety). Phir post office mein jaakar bolte ho "ye parcel bhej do" aur receipt lete ho (Session — connection). Phir post office wale parcel par PIN code lagate hain taaki woh sahi sheher jaye (Network — IP). Phir parcel ko sheher ke andar wale truck mein daalte hain (Data Link — ek hi sheher mein). Aakhir mein truck sadak par chalta hai (Physical — taar aur signal). Har step ek layer hai. Network mein bhi wahi: har layer apna kaam sahi kare, tabhi message pahunchta hai.',
            english: 'Imagine you are sending a gift by Speed Post. First you pack the gift in a box and write the address on top (Application layer). Then you wrap the box in paper and seal it (Presentation — format and safety). Then you go to the post office, say “please send this parcel”, and take a receipt (Session — the connection). Then the post office puts a PIN code on the parcel so it goes to the right city (Network — IP). Then the parcel goes into a truck inside the city (Data Link — inside one city). Finally the truck drives on the road (Physical — cables and signals). Each step is a layer. A network is the same: the message arrives only if every layer does its job right.',
            hindi: 'सोचिए आप Speed Post से एक गिफ़्ट भेज रहे हैं। पहले आप गिफ़्ट को डिब्बे में बंद करते हैं और ऊपर पता लिखते हैं (Application layer)। फिर डिब्बे को काग़ज़ में लपेटकर सील करते हैं (Presentation — फ़ॉर्मैट और सुरक्षा)। फिर पोस्ट ऑफिस में जाकर बोलते हैं "यह पार्सल भेज दो" और रसीद लेते हैं (Session — कनेक्शन)। फिर पोस्ट ऑफिस वाले पार्सल पर PIN कोड लगाते हैं ताकि वह सही शहर जाए (Network — IP)। फिर पार्सल को शहर के अंदर वाले ट्रक में डालते हैं (Data Link — एक ही शहर में)। आखिर में ट्रक सड़क पर चलता है (Physical — तार और सिग्नल)। हर स्टेप एक layer है। नेटवर्क में भी वही: हर layer अपना काम सही करे, तभी मैसेज पहुँचता है।',
          },
        },
        {
          heading: {
            hinglish: 'Step by step — worked example',
            english: 'Step by step — worked example',
            hindi: 'स्टेप बाय स्टेप — हल किया हुआ उदाहरण',
          },
          body: {
            hinglish: 'Worked example 1 — encapsulation ka hisaab. Aap 1000 bytes ka message bhejte ho. Transport layer TCP header jodta hai: 20 bytes. Network layer IP header jodta hai: 20 bytes. Data Link layer Ethernet header 14 bytes aur trailer 4 bytes jodta hai. Total packet = 1000 + 20 + 20 + 14 + 4 = 1058 bytes. Overhead = 58 bytes, matlab 58 ÷ 1058 × 100 = 5.5% packet sirf pata aur control ke liye kharch hota hai. Worked example 2 — layer ka safar. Aap "hi" likhte ho (Application). Transport use segment banata hai aur port number lagata hai (jaise WhatsApp port 443). Network IP address lagata hai (aapka phone 192.168.1.5, server 142.250.80.4). Data Link MAC address lagata hai aur Wi-Fi par bhejta hai. Physical layer use radio signal mein badalta hai. Dusri taraf ulta hota hai: signal se packet, packet se IP, IP se port, port se app — aur "hi" screen par.',
            english: 'Worked example 1 — the encapsulation maths. You send a 1000-byte message. The Transport layer adds a TCP header: 20 bytes. The Network layer adds an IP header: 20 bytes. The Data Link layer adds an Ethernet header of 14 bytes and a trailer of 4 bytes. Total packet = 1000 + 20 + 20 + 14 + 4 = 1058 bytes. Overhead = 58 bytes, meaning 58 ÷ 1058 × 100 = 5.5% of the packet is spent only on address and control. Worked example 2 — the journey through the layers. You type “hi” (Application). Transport makes it a segment and adds a port number (like WhatsApp on port 443). Network adds IP addresses (your phone 192.168.1.5, the server 142.250.80.4). Data Link adds the MAC address and sends it over Wi-Fi. The Physical layer turns it into a radio signal. On the other side it reverses: signal to packet, packet to IP, IP to port, port to app — and “hi” appears on screen.',
            hindi: 'हल किया हुआ उदाहरण 1 — encapsulation का हिसाब। आप 1000 bytes का मैसेज भेजते हैं। Transport layer TCP header जोड़ता है: 20 bytes। Network layer IP header जोड़ता है: 20 bytes। Data Link layer Ethernet header 14 bytes और trailer 4 bytes जोड़ता है। कुल packet = 1000 + 20 + 20 + 14 + 4 = 1058 bytes। Overhead = 58 bytes, मतलब 58 ÷ 1058 × 100 = 5.5% packet सिर्फ़ पता और कंट्रोल के लिए खर्च होता है। उदाहरण 2 — layer का सफ़र। आप "hi" लिखते हैं (Application)। Transport उसे segment बनाता है और port number लगाता है (जैसे WhatsApp port 443)। Network IP address लगाता है (आपका फ़ोन 192.168.1.5, सर्वर 142.250.80.4)। Data Link MAC address लगाता है और Wi-Fi पर भेजता है। Physical layer उसे रेडियो सिग्नल में बदलता है। दूसरी तरफ़ उल्टा होता है: सिग्नल से packet, packet से IP, IP से port, port से ऐप — और "hi" स्क्रीन पर।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur kyun hote hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और क्यों होती हैं',
          },
          body: {
            hinglish: 'Galti 1: "OSI aur TCP/IP ek hi hain" — nahi. OSI 7 layer ka model hai, TCP/IP 4 layer ka asal protocol hai. Ye galti isliye hoti hai kyunki dono mein layer ke naam milte-julte hain. Galti 2: "IP address aur MAC address ek hi hain" — nahi. IP address badal sakta hai (jaise ghar badlo to PIN code badalta hai), MAC address device ke saath chipka rehta hai (jaise ghar ka number plate). Galti 3: "Layer ka order ulta yaad karna" — bhejte waqt upar se neeche (Application se Physical), paate waqt neeche se upar. Galti 4: "Internet = network" — internet duniya bhar ke networks ka network hai; aapka ghar ka Wi-Fi bhi ek network hai, bina internet ke bhi chal sakta hai.',
            english: 'Mistake 1: “OSI and TCP/IP are the same” — no. OSI is a 7-layer model, TCP/IP is the real 4-layer protocol. This mistake happens because the layer names look similar. Mistake 2: “IP address and MAC address are the same” — no. An IP address can change (like a PIN code changes when you move house), while a MAC address stays stuck to the device (like a house number plate). Mistake 3: remembering the layer order backwards — sending goes top to bottom (Application to Physical), receiving goes bottom to top.',
            hindi: 'गलती 1: "OSI और TCP/IP एक ही हैं" — नहीं। OSI 7 layer का मॉडल है, TCP/IP 4 layer का असल protocol है। यह गलती इसलिए होती है क्योंकि दोनों में layer के नाम मिलते-जुलते हैं। गलती 2: "IP address और MAC address एक ही हैं" — नहीं। IP address बदल सकता है (जैसे घर बदलो तो PIN कोड बदलता है), MAC address डिवाइस के साथ चिपका रहता है (जैसे घर की नंबर प्लेट)। गलती 3: "Layer का order उल्टा याद करना" — भेजते समय ऊपर से नीचे (Application से Physical), पाते समय नीचे से ऊपर। गलती 4: "Internet = network" — इंटरनेट दुनिया भर के networks का नेटवर्क है; आपका घर का Wi-Fi भी एक नेटवर्क है, बिना इंटरनेट के भी चल सकता है।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास मामले',
          },
          body: {
            hinglish: 'Edge case 1: ek hi device par do apps ek hi port maangein — OS sirf ek ko deta hai, dusre ko error milta hai (port already in use). Edge case 2: Wi-Fi band ho to Physical layer hi fail — upar ki layers kitni bhi sahi hon, data nahi jayega. Edge case 3: IP address galat ho to packet sahi network tak hi nahi pahunchega — jaise galat PIN code wala parcel.',
            english: 'Edge case 1: two apps on one device ask for the same port — the OS gives it to only one, and the other gets an error (port already in use). Edge case 2: if Wi-Fi is off, the Physical layer itself fails — however right the upper layers are, no data goes out. Edge case 3: if the IP address is wrong, the packet never reaches the right network — like a parcel with a wrong PIN code.',
            hindi: 'खास मामला 1: एक ही डिवाइस पर दो ऐप्स एक ही port माँगें — OS सिर्फ़ एक को देता है, दूसरे को error मिलता है (port already in use)। खास मामला 2: Wi-Fi बंद हो तो Physical layer ही fail — ऊपर की layers कितनी भी सही हों, डेटा नहीं जाएगा। खास मामला 3: IP address गलत हो तो packet सही नेटवर्क तक ही नहीं पहुँचेगा — जैसे गलत PIN कोड वाला पार्सल।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal diya to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दिया तो क्या होगा?',
          },
          body: {
            hinglish: 'Agar layers ko hata diya jaye aur sab kaam ek hi layer kare, to har app ko khud IP, port aur signal sambhalna padega — browser likhna namumkin ho jayega. Isi liye layer wala design jeetta hai.',
            english: 'If the layers were removed and one layer did all the work, every app would have to handle IP, ports and signals itself — writing a browser would become impossible. That is why the layered design wins.',
            hindi: 'अगर layers को हटा दिया जाए और सब काम एक ही layer करे, तो हर ऐप को खुद IP, port और सिग्नल संभालना पड़ेगा — ब्राउज़र लिखना नामुमकिन हो जाएगा। इसीलिए layer वाला डिज़ाइन जीतता है।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'Network = judna + baantna. OSI mein 7 layers, TCP/IP mein 4. Har layer apna header jodti hai — 1000 bytes ka message 1058 bytes ka packet ban jata hai. IP address badal sakta hai, MAC address device se chipka rehta hai. Agle article mein IP address ka poora hisaab — subnetting ke saath.',
            english: 'Network = connecting + sharing. OSI has 7 layers, TCP/IP has 4. Every layer adds its header — a 1000-byte message becomes a 1058-byte packet. An IP address can change; a MAC address stays stuck to the device. In the next article, the full IP address maths — with subnetting.',
            hindi: 'नेटवर्क = जुड़ना + बाँटना। OSI में 7 layers, TCP/IP में 4। हर layer अपना header जोड़ती है — 1000 bytes का मैसेज 1058 bytes का packet बन जाता है। IP address बदल सकता है, MAC address डिवाइस से चिपका रहता है। अगले आर्टिकल में IP address का पूरा हिसाब — subnetting के साथ।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Message ka safar — neeche jana',
          english: 'A message’s journey — going down',
          hindi: 'मैसेज का सफ़र — नीचे जाना',
        },
        nodes: [
          { t: { hinglish: 'Application', english: 'Application', hindi: 'Application' }, s: { hinglish: '"hi" likha', english: '"hi" typed', hindi: '"hi" लिखा' } },
          { t: { hinglish: 'Transport', english: 'Transport', hindi: 'Transport' }, s: { hinglish: '+ TCP header 20 bytes, port', english: '+ TCP header 20 bytes, port', hindi: '+ TCP header 20 bytes, port' } },
          { t: { hinglish: 'Network', english: 'Network', hindi: 'Network' }, s: { hinglish: '+ IP header 20 bytes, IP address', english: '+ IP header 20 bytes, IP address', hindi: '+ IP header 20 bytes, IP address' } },
          { t: { hinglish: 'Data Link', english: 'Data Link', hindi: 'Data Link' }, s: { hinglish: '+ Ethernet 14 + 4 bytes, MAC', english: '+ Ethernet 14 + 4 bytes, MAC', hindi: '+ Ethernet 14 + 4 bytes, MAC' } },
          { t: { hinglish: 'Physical', english: 'Physical', hindi: 'Physical' }, s: { hinglish: 'Radio signal — 1058 bytes', english: 'Radio signal — 1058 bytes', hindi: 'रेडियो सिग्नल — 1058 bytes' } },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: '1000 bytes ke message par TCP 20, IP 20, Ethernet 14 + 4 bytes judte hain. Total packet kitna hoga?',
            english: 'A 1000-byte message gets TCP 20, IP 20, and Ethernet 14 + 4 bytes added. What is the total packet size?',
            hindi: '1000 bytes के मैसेज पर TCP 20, IP 20, Ethernet 14 + 4 bytes जुड़ते हैं। कुल packet कितना होगा?',
          },
          opts: [
            { hinglish: '1000 bytes', english: '1000 bytes', hindi: '1000 bytes' },
            { hinglish: '1040 bytes', english: '1040 bytes', hindi: '1040 bytes' },
            { hinglish: '1058 bytes', english: '1058 bytes', hindi: '1058 bytes' },
            { hinglish: '1020 bytes', english: '1020 bytes', hindi: '1020 bytes' },
          ],
          ans: 2,
          expl: {
            hinglish: '1000 + 20 + 20 + 14 + 4 = 1058 bytes. Overhead 58 bytes hai.',
            english: '1000 + 20 + 20 + 14 + 4 = 1058 bytes. The overhead is 58 bytes.',
            hindi: '1000 + 20 + 20 + 14 + 4 = 1058 bytes। Overhead 58 bytes है।',
          },
        },
        {
          q: {
            hinglish: 'IP address aur MAC address mein kya farq hai?',
            english: 'What is the difference between an IP address and a MAC address?',
            hindi: 'IP address और MAC address में क्या फ़र्क है?',
          },
          opts: [
            { hinglish: 'Dono ek hi hain', english: 'Both are the same', hindi: 'दोनों एक ही हैं' },
            { hinglish: 'IP badal sakta hai, MAC device se chipka rehta hai', english: 'IP can change, MAC stays stuck to the device', hindi: 'IP बदल सकता है, MAC डिवाइस से चिपका रहता है' },
            { hinglish: 'MAC badal sakta hai, IP nahi', english: 'MAC can change, IP cannot', hindi: 'MAC बदल सकता है, IP नहीं' },
            { hinglish: 'IP sirf Wi-Fi mein hota hai', english: 'IP exists only in Wi-Fi', hindi: 'IP सिर्फ़ Wi-Fi में होता है' },
          ],
          ans: 1,
          expl: {
            hinglish: 'IP logical address hai jo network badalne par badalta hai; MAC hardware address hai jo factory mein lagta hai.',
            english: 'IP is a logical address that changes when the network changes; MAC is a hardware address set in the factory.',
            hindi: 'IP logical address है जो नेटवर्क बदलने पर बदलता है; MAC hardware address है जो फ़ैक्टरी में लगता है।',
          },
        },
        {
          q: {
            hinglish: 'OSI model mein kitni layers hain aur TCP/IP mein kitni?',
            english: 'How many layers are in the OSI model and in TCP/IP?',
            hindi: 'OSI मॉडल में कितनी layers हैं और TCP/IP में कितनी?',
          },
          opts: [
            { hinglish: 'OSI 4, TCP/IP 7', english: 'OSI 4, TCP/IP 7', hindi: 'OSI 4, TCP/IP 7' },
            { hinglish: 'OSI 7, TCP/IP 4', english: 'OSI 7, TCP/IP 4', hindi: 'OSI 7, TCP/IP 4' },
            { hinglish: 'Dono mein 5', english: '5 in both', hindi: 'दोनों में 5' },
            { hinglish: 'OSI 5, TCP/IP 5', english: 'OSI 5, TCP/IP 5', hindi: 'OSI 5, TCP/IP 5' },
          ],
          ans: 1,
          expl: {
            hinglish: 'OSI mein 7 layers hain; asal duniya ka TCP/IP model 4 layers mein kaam karta hai.',
            english: 'OSI has 7 layers; the real-world TCP/IP model works in 4 layers.',
            hindi: 'OSI में 7 layers हैं; असली दुनिया का TCP/IP मॉडल 4 layers में काम करता है।',
          },
        },
        {
          q: {
            hinglish: 'Kaunsa statement GALAT hai?',
            english: 'Which statement is WRONG?',
            hindi: 'कौन सा कथन गलत है?',
          },
          opts: [
            { hinglish: 'Bhejte waqt data Application se Physical ki taraf jata hai', english: 'When sending, data goes from Application down to Physical', hindi: 'भेजते समय डेटा Application से Physical की तरफ़ जाता है' },
            { hinglish: 'Har layer apna header jodti hai', english: 'Every layer adds its own header', hindi: 'हर layer अपना header जोड़ती है' },
            { hinglish: 'Ghar ka Wi-Fi bina internet ke bhi ek network hai', english: 'Home Wi-Fi is a network even without the internet', hindi: 'घर का Wi-Fi बिना इंटरनेट के भी एक नेटवर्क है' },
            { hinglish: 'OSI model hi asal mein internet chalata hai', english: 'The OSI model is what actually runs the internet', hindi: 'OSI मॉडल ही असल में इंटरनेट चलाता है' },
          ],
          ans: 3,
          expl: {
            hinglish: 'Asal mein TCP/IP internet chalata hai; OSI sirf samjhane aur exam ka model hai.',
            english: 'In reality TCP/IP runs the internet; OSI is only a model for learning and exams.',
            hindi: 'असल में TCP/IP इंटरनेट चलाता है; OSI सिर्फ़ समझने और exam का मॉडल है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Packet size ka hisaab',
          english: 'Work out packet size',
          hindi: 'Packet size का हिसाब',
        },
        task: {
          hinglish: 'Pen-paper task: message 500 bytes ka hai. TCP 20, IP 20, Ethernet 14 + 4 judte hain. (a) Total packet kitna? (b) Overhead kitne percent hai? Neeche script chalao aur milao. Done tab jab dono jawab match karein.',
          english: 'Pen-and-paper task: the message is 500 bytes. TCP adds 20, IP 20, Ethernet 14 + 4. (a) What is the total packet? (b) What percent is overhead? Run the script below and match. You are done when both answers match.',
          hindi: 'पेन-पेपर टास्क: मैसेज 500 bytes का है। TCP 20, IP 20, Ethernet 14 + 4 जुड़ते हैं। (a) कुल packet कितना? (b) Overhead कितने प्रतिशत है? नीचे स्क्रिप्ट चलाओ और मिलाओ। जब दोनों जवाब मिल जाएँ, तब टास्क पूरा।',
        },
        language: 'python',
        starter: 'msg = 500\noverhead = 20 + 20 + 14 + 4\ntotal = msg + overhead\nprint("Total packet:", total, "bytes")\nprint("Overhead percent:", round(overhead / total * 100, 1), "%")\n',
        expected: 'Total 558 bytes. Overhead 58 bytes = 10.4%. (Chhote message par overhead percent zyada hota hai.)',
      },
      readMinutes: 11,
    },
    {
      id: 'cn-ip-subnet',
      subjectId: 'computer-networks',
      title: {
        hinglish: 'IP Addressing aur Subnetting',
        english: 'IP addressing and subnetting',
        hindi: 'IP Addressing और Subnetting',
      },
      summary: {
        hinglish: 'Har device ka ek pata hota hai — IP address. Subnetting se ek bade network ko chhote hisso mein baantna seekho, number ke saath.',
        english: 'Every device has an address — the IP address. Learn to split a big network into smaller parts with subnetting, with real numbers.',
        hindi: 'हर डिवाइस का एक पता होता है — IP address। Subnetting से एक बड़े नेटवर्क को छोटे हिस्सों में बाँटना सीखो, नंबर के साथ।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish: 'IP address ek device ka network wala pata hai — jaise ghar ka pata. IPv4 mein ye 32 bits ka hota hai, 4 hisson mein likha jata hai, jaise 192.168.1.5. Har hissa 0 se 255 tak hota hai. IP address ke do hisse hote hain: network part (kaunsi gali) aur host part (ghar number). Subnet mask batata hai kahan network khatm aur host shuru hota hai. Mask mein 1 wale bits network hain, 0 wale host. Jaise /24 mask mein pehle 24 bits network, aakhri 8 bits host. Subnetting ka matlab hai ek bade network ko chhote-chhote network mein baantna — jaise ek badi colony ko sector mein baantna. Har subnet ka apna network address (pehla pata) aur broadcast address (aakhri pata) hota hai; beech wale pata devices ko milte hain.',
            english: 'An IP address is a device’s address on the network — like a home address. In IPv4 it is 32 bits long, written in 4 parts, like 192.168.1.5. Each part ranges from 0 to 255. An IP address has two parts: the network part (which street) and the host part (the house number). The subnet mask tells where the network ends and the host begins. In the mask, the 1 bits are the network and the 0 bits are the host. For example, in a /24 mask the first 24 bits are network and the last 8 bits are host. Subnetting means splitting one big network into smaller networks — like dividing a big colony into sectors. Every subnet has its own network address (the first address) and broadcast address (the last address); the addresses in between go to devices.',
            hindi: 'IP address एक डिवाइस का नेटवर्क वाला पता है — जैसे घर का पता। IPv4 में यह 32 bits का होता है, 4 हिस्सों में लिखा जाता है, जैसे 192.168.1.5। हर हिस्सा 0 से 255 तक होता है। IP address के दो हिस्से होते हैं: network part (कौन सी गली) और host part (घर नंबर)। Subnet mask बताता है कहाँ नेटवर्क खत्म और host शुरू होता है। Mask में 1 वाले bits नेटवर्क हैं, 0 वाले host। जैसे /24 mask में पहले 24 bits नेटवर्क, आखिरी 8 bits host। Subnetting का मतलब है एक बड़े नेटवर्क को छोटे-छोटे नेटवर्क में बाँटना — जैसे एक बड़ी कॉलोनी को सेक्टर में बाँटना। हर subnet का अपना network address (पहला पता) और broadcast address (आखिरी पता) होता है; बीच वाले पते डिवाइस को मिलते हैं।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असली ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish: 'Sochiye ek sheher ka PIN code system. PIN code 110001 mein "110" sheher ka hissa hai (network part) aur "001" mohalla hai (host part). Postman pehle PIN code se sheher dhoondhta hai, phir mohalla. IP bhi aisa hi hai. Aapke ghar ka router 192.168.1.0/24 network hai — "192.168.1" gali hai, aakhri number ghar hai. Aapka phone 192.168.1.5, laptop 192.168.1.6, TV 192.168.1.7. Subnetting jaise hai ek bade school ko class mein baantna: Class A ke roll number 1–30, Class B ke 31–60. Har class ka apna teacher (gateway) hai, aur ek class ka shor dusri class tak nahi jata. Isi liye bade office apne network ko subnet mein baantte hain — ek department ka traffic dusre ko slow nahi karta.',
            english: 'Think of a city’s PIN code system. In PIN code 110001, “110” is the city part (network part) and “001” is the neighbourhood (host part). The postman first finds the city from the PIN code, then the neighbourhood. IP works the same way. Your home router is the 192.168.1.0/24 network — “192.168.1” is the street, and the last number is the house. Your phone is 192.168.1.5, the laptop 192.168.1.6, the TV 192.168.1.7. Subnetting is like dividing a big school into classes: Class A has roll numbers 1–30, Class B has 31–60. Each class has its own teacher (gateway), and one class’s noise does not reach the other class. That is why big offices split their network into subnets — one department’s traffic does not slow down another.',
            hindi: 'एक शहर के PIN कोड सिस्टम को सोचिए। PIN कोड 110001 में "110" शहर का हिस्सा है (network part) और "001" मोहल्ला है (host part)। पोस्टमैन पहले PIN कोड से शहर ढूँढता है, फिर मोहल्ला। IP भी ऐसा ही है। आपके घर का राउटर 192.168.1.0/24 नेटवर्क है — "192.168.1" गली है, आखिरी नंबर घर है। आपका फ़ोन 192.168.1.5, लैपटॉप 192.168.1.6, TV 192.168.1.7। Subnetting जैसे है एक बड़े स्कूल को क्लास में बाँटना: Class A के रोल नंबर 1–30, Class B के 31–60। हर क्लास का अपना टीचर (gateway) है, और एक क्लास का शोर दूसरी क्लास तक नहीं जाता। इसीलिए बड़े ऑफिस अपने नेटवर्क को subnet में बाँटते हैं — एक department का traffic दूसरे को स्लो नहीं करता।',
          },
        },
        {
          heading: {
            hinglish: 'Step by step — worked example',
            english: 'Step by step — worked example',
            hindi: 'स्टेप बाय स्टेप — हल किया हुआ उदाहरण',
          },
          body: {
            hinglish: 'Worked example 1 — /24 network. 192.168.1.0/24 mein host bits = 32 − 24 = 8. Kul addresses = 2^8 = 256 (0 se 255). Network address 192.168.1.0, broadcast 192.168.1.255. Use hone wale hosts = 256 − 2 = 254 (192.168.1.1 se 192.168.1.254). Worked example 2 — /26 subnet. 192.168.1.0/24 ko /26 mein baanto. Host bits = 32 − 26 = 6, har subnet mein kul addresses = 2^6 = 64, hosts = 64 − 2 = 62. Subnet banenge 2^(26−24) = 4. Range: Subnet 1: 192.168.1.0 – 63 (network .0, broadcast .63, hosts .1 – .62). Subnet 2: 192.168.1.64 – 127 (network .64, broadcast .127, hosts .65 – .126). Subnet 3: 192.168.1.128 – 191. Subnet 4: 192.168.1.192 – 255. Worked example 3 — host kahan hai? Host 192.168.1.100/26 kis subnet mein hai? 100 number 64 aur 127 ke beech mein hai, to Subnet 2 mein. Uska network address 192.168.1.64, broadcast 192.168.1.127, aur woh .65 se .126 ke beech ka ek host hai.',
            english: 'Worked example 1 — a /24 network. In 192.168.1.0/24, host bits = 32 − 24 = 8. Total addresses = 2^8 = 256 (0 to 255). Network address 192.168.1.0, broadcast 192.168.1.255. Usable hosts = 256 − 2 = 254 (192.168.1.1 to 192.168.1.254). Worked example 2 — /26 subnets. Split 192.168.1.0/24 into /26. Host bits = 32 − 26 = 6, total addresses per subnet = 2^6 = 64, hosts = 64 − 2 = 62. Number of subnets = 2^(26−24) = 4. Ranges: Subnet 1: 192.168.1.0 – 63 (network .0, broadcast .63, hosts .1 – .62). Subnet 2: 192.168.1.64 – 127 (network .64, broadcast .127, hosts .65 – .126). Subnet 3: 192.168.1.128 – 191. Subnet 4: 192.168.1.192 – 255. Worked example 3 — where is this host? Which subnet is host 192.168.1.100/26 in? 100 lies between 64 and 127, so Subnet 2. Its network address is 192.168.1.64, broadcast 192.168.1.127, and it is one of the hosts from .65 to .126.',
            hindi: 'हल किया हुआ उदाहरण 1 — /24 नेटवर्क। 192.168.1.0/24 में host bits = 32 − 24 = 8। कुल addresses = 2^8 = 256 (0 से 255)। Network address 192.168.1.0, broadcast 192.168.1.255। इस्तेमाल होने वाले hosts = 256 − 2 = 254 (192.168.1.1 से 192.168.1.254)। उदाहरण 2 — /26 subnet। 192.168.1.0/24 को /26 में बाँटो। Host bits = 32 − 26 = 6, हर subnet में कुल addresses = 2^6 = 64, hosts = 64 − 2 = 62। Subnet बनेंगे 2^(26−24) = 4। Range: Subnet 1: 192.168.1.0 – 63 (network .0, broadcast .63, hosts .1 – .62)। Subnet 2: 192.168.1.64 – 127 (network .64, broadcast .127, hosts .65 – .126)। Subnet 3: 192.168.1.128 – 191। Subnet 4: 192.168.1.192 – 255। उदाहरण 3 — host कहाँ है? Host 192.168.1.100/26 किस subnet में है? 100 नंबर 64 और 127 के बीच में है, तो Subnet 2 में। उसका network address 192.168.1.64, broadcast 192.168.1.127, और वह .65 से .126 के बीच का एक host है।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur kyun hote hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और क्यों होती हैं',
          },
          body: {
            hinglish: 'Galti 1: "−2 karna bhool jana" — network aur broadcast address host ko nahi milte, isliye hamesha 2 ghatao. Ye sabse common galti hai. Galti 2: "192.168.1.0 ko host samajhna" — .0 network address hai, kisi device ko nahi milta. Galti 3: "Subnet mask ko IP se mila dena" — 255.255.255.0 mask hai, address nahi. Galti 4: "Har IP internet par dikhta hai" — nahi. 192.168.x.x, 10.x.x.x aur 172.16–31.x.x private hain, sirf ghar/office ke andar chalte hain; internet par inki jagah router ka public IP dikhta hai (NAT). Galti 5: "/26 mein 64 hosts milenge" — nahi, 64 addresses mein se 62 hosts milenge.',
            english: 'Mistake 1: forgetting the “−2” — the network and broadcast addresses never go to a host, so always subtract 2. This is the most common mistake. Mistake 2: thinking 192.168.1.0 is a host — .0 is the network address and is never given to a device. Mistake 3: confusing the subnet mask with an IP — 255.255.255.0 is a mask, not an address. Mistake 4: “Every IP is visible on the internet” — no. 192.168.x.x, 10.x.x.x and 172.16–31.x.x are private; they work only inside a home or office, and on the internet the router’s public IP shows instead (NAT).',
            hindi: 'गलती 1: "−2 करना भूल जाना" — network और broadcast address host को नहीं मिलते, इसलिए हमेशा 2 घटाओ। यह सबसे common गलती है। गलती 2: "192.168.1.0 को host समझना" — .0 network address है, किसी डिवाइस को नहीं मिलता। गलती 3: "Subnet mask को IP से मिला देना" — 255.255.255.0 mask है, address नहीं। गलती 4: "हर IP इंटरनेट पर दिखता है" — नहीं। 192.168.x.x, 10.x.x.x और 172.16–31.x.x private हैं, सिर्फ़ घर/ऑफ़िस के अंदर चलते हैं; इंटरनेट पर इनकी जगह राउटर का public IP दिखता है (NAT)। गलती 5: "/26 में 64 hosts मिलेंगे" — नहीं, 64 addresses में से 62 hosts मिलेंगे।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास मामले',
          },
          body: {
            hinglish: 'Edge case 1: /31 network — sirf 2 addresses, dono point-to-point link ke liye use hote hain (do router ke beech), hosts zero maane jate hain. Edge case 2: /32 — ek hi address, ek khaas device ko dikhane ke liye (loopback 127.0.0.1). Edge case 3: IPv6 — 128 bits ka address, jaise 2001:db8::1, isme itne address hain ki har ret ke dane ko bhi IP mil sakta hai.',
            english: 'Edge case 2: /32 — a single address, used to point at one specific device (loopback 127.0.0.1). Edge case 3: IPv6 — a 128-bit address, like 2001:db8::1, with so many addresses that every grain of sand could get one.',
            hindi: 'खास मामला 1: /31 नेटवर्क — सिर्फ़ 2 addresses, दोनों point-to-point link के लिए इस्तेमाल होते हैं (दो राउटर के बीच), hosts zero माने जाते हैं। खास मामला 2: /32 — एक ही address, एक खास डिवाइस को दिखाने के लिए (loopback 127.0.0.1)। खास मामला 3: IPv6 — 128 bits का address, जैसे 2001:db8::1, इसमें इतने address हैं कि हर रेत के दाने को भी IP मिल सकता है।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal diya to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दिया तो क्या होगा?',
          },
          body: {
            hinglish: 'Agar /24 ki jagah /25 kar dein, to 2 subnet banenge (128 addresses wale) aur hosts 126-126 milenge. Agar /26 ki jagah /27 kar dein, to subnet 8 banenge aur har ek mein sirf 30 hosts milenge. Mask chhota karo to network bada, host zyada; mask bada karo to network chhote, host kam.',
            english: 'If /24 is changed to /25, there will be 2 subnets (128 addresses each) with 126 hosts each. If /26 is changed to /27, there will be 8 subnets with only 30 hosts each. A smaller mask means a bigger network with more hosts; a bigger mask means smaller networks with fewer hosts.',
            hindi: 'अगर /24 की जगह /25 कर दें, तो 2 subnet बनेंगे (128 addresses वाले) और hosts 126-126 मिलेंगे। अगर /26 की जगह /27 कर दें, तो subnet 8 बनेंगे और हर एक में सिर्फ़ 30 hosts मिलेंगे। Mask छोटा करो तो नेटवर्क बड़ा, host ज़्यादा; mask बड़ा करो तो नेटवर्क छोटे, host कम।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'IP = network part + host part. Formula: kul addresses = 2^(32−n), hosts = kul − 2. /24 mein 254 hosts, /26 mein 4 subnet aur har ek mein 62 hosts. .0 network hai, aakhri broadcast hai. Private IP ghar ke andar, public IP internet par. Agle article mein TCP vs UDP — kab bharosa chahiye, kab speed.',
            english: 'IP = network part + host part. Formula: total addresses = 2^(32−n), hosts = total − 2. A /24 has 254 hosts; a /26 gives 4 subnets with 62 hosts each. .0 is the network, the last one is broadcast. Private IPs stay inside the home; public IPs go on the internet. In the next article: TCP vs UDP — when you need trust, and when you need speed.',
            hindi: 'IP = network part + host part। फॉर्मूला: कुल addresses = 2^(32−n), hosts = कुल − 2। /24 में 254 hosts, /26 में 4 subnet और हर एक में 62 hosts। .0 नेटवर्क है, आखिरी broadcast है। Private IP घर के अंदर, public IP इंटरनेट पर। अगले आर्टिकल में TCP vs UDP — कब भरोसा चाहिए, कब स्पीड।',
          },
        },
      ],
      diagram: {
        kind: 'boxes',
        title: {
          hinglish: '192.168.1.0/24 ke 4 subnet (/26)',
          english: '4 subnets of 192.168.1.0/24 (/26)',
          hindi: '192.168.1.0/24 के 4 subnet (/26)',
        },
        nodes: [
          { t: { hinglish: 'Subnet 1: .0 – .63', english: 'Subnet 1: .0 – .63', hindi: 'Subnet 1: .0 – .63' }, s: { hinglish: 'Hosts .1 – .62', english: 'Hosts .1 – .62', hindi: 'Hosts .1 – .62' } },
          { t: { hinglish: 'Subnet 2: .64 – .127', english: 'Subnet 2: .64 – .127', hindi: 'Subnet 2: .64 – .127' }, s: { hinglish: 'Hosts .65 – .126', english: 'Hosts .65 – .126', hindi: 'Hosts .65 – .126' } },
          { t: { hinglish: 'Subnet 3: .128 – .191', english: 'Subnet 3: .128 – .191', hindi: 'Subnet 3: .128 – .191' }, s: { hinglish: 'Hosts .129 – .190', english: 'Hosts .129 – .190', hindi: 'Hosts .129 – .190' } },
          { t: { hinglish: 'Subnet 4: .192 – .255', english: 'Subnet 4: .192 – .255', hindi: 'Subnet 4: .192 – .255' }, s: { hinglish: 'Hosts .193 – .254', english: 'Hosts .193 – .254', hindi: 'Hosts .193 – .254' } },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: '192.168.1.0/24 mein kitne use hone wale hosts hain?',
            english: 'How many usable hosts are in 192.168.1.0/24?',
            hindi: '192.168.1.0/24 में कितने इस्तेमाल होने वाले hosts हैं?',
          },
          opts: [
            { hinglish: '256', english: '256', hindi: '256' },
            { hinglish: '254', english: '254', hindi: '254' },
            { hinglish: '255', english: '255', hindi: '255' },
            { hinglish: '62', english: '62', hindi: '62' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Kul 2^8 = 256 addresses, network (.0) aur broadcast (.255) hata kar 254 hosts bachte hain.',
            english: 'Total 2^8 = 256 addresses; removing the network (.0) and broadcast (.255) leaves 254 hosts.',
            hindi: 'कुल 2^8 = 256 addresses, network (.0) और broadcast (.255) हटाकर 254 hosts बचते हैं।',
          },
        },
        {
          q: {
            hinglish: 'Host 192.168.1.100/26 kis subnet mein hai aur uska broadcast kya hai?',
            english: 'Which subnet is host 192.168.1.100/26 in, and what is its broadcast?',
            hindi: 'Host 192.168.1.100/26 किस subnet में है और उसका broadcast क्या है?',
          },
          opts: [
            { hinglish: 'Subnet .0, broadcast .63', english: 'Subnet .0, broadcast .63', hindi: 'Subnet .0, broadcast .63' },
            { hinglish: 'Subnet .64, broadcast .127', english: 'Subnet .64, broadcast .127', hindi: 'Subnet .64, broadcast .127' },
            { hinglish: 'Subnet .128, broadcast .191', english: 'Subnet .128, broadcast .191', hindi: 'Subnet .128, broadcast .191' },
            { hinglish: 'Subnet .192, broadcast .255', english: 'Subnet .192, broadcast .255', hindi: 'Subnet .192, broadcast .255' },
          ],
          ans: 1,
          expl: {
            hinglish: '100 number 64–127 ke beech hai, to subnet 192.168.1.64, broadcast aakhri pata 192.168.1.127.',
            english: '100 lies between 64 and 127, so the subnet is 192.168.1.64 and the broadcast is the last address, 192.168.1.127.',
            hindi: '100 नंबर 64–127 के बीच है, तो subnet 192.168.1.64, broadcast आखिरी पता 192.168.1.127।',
          },
        },
        {
          q: {
            hinglish: '10.0.0.0/8 mein kitne hosts milenge?',
            english: 'How many hosts are in 10.0.0.0/8?',
            hindi: '10.0.0.0/8 में कितने hosts मिलेंगे?',
          },
          opts: [
            { hinglish: '254', english: '254', hindi: '254' },
            { hinglish: '65,534', english: '65,534', hindi: '65,534' },
            { hinglish: '16,777,214', english: '16,777,214', hindi: '16,777,214' },
            { hinglish: '16,777,216', english: '16,777,216', hindi: '16,777,216' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Host bits 24, kul 2^24 = 16,777,216, minus 2 = 16,777,214 hosts.',
            english: 'Host bits are 24, total 2^24 = 16,777,216, minus 2 = 16,777,214 hosts.',
            hindi: 'Host bits 24, कुल 2^24 = 16,777,216, minus 2 = 16,777,214 hosts।',
          },
        },
        {
          q: {
            hinglish: 'Kaunsa statement GALAT hai?',
            english: 'Which statement is WRONG?',
            hindi: 'कौन सा कथन गलत है?',
          },
          opts: [
            { hinglish: '192.168.1.0 network address hai', english: '192.168.1.0 is the network address', hindi: '192.168.1.0 network address है' },
            { hinglish: '192.168.1.255 broadcast address hai', english: '192.168.1.255 is the broadcast address', hindi: '192.168.1.255 broadcast address है' },
            { hinglish: '192.168.1.5 ko kisi device ko diya ja sakta hai', english: '192.168.1.5 can be given to a device', hindi: '192.168.1.5 को किसी डिवाइस को दिया जा सकता है' },
            { hinglish: '192.168.1.0 ko phone ko IP ke roop mein diya ja sakta hai', english: '192.168.1.0 can be given to a phone as its IP', hindi: '192.168.1.0 को फ़ोन को IP के रूप में दिया जा सकता है' },
          ],
          ans: 3,
          expl: {
            hinglish: '.0 network address hai — ye kisi device ko nahi milta, sirf poore network ko dikhata hai.',
            english: '.0 is the network address — it is never given to a device; it only names the whole network.',
            hindi: '.0 network address है — यह किसी डिवाइस को नहीं मिलता, सिर्फ़ पूरे नेटवर्क को दिखाता है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Subnet ka hisaab',
          english: 'Work out a subnet',
          hindi: 'Subnet का हिसाब',
        },
        task: {
          hinglish: 'Pen-paper task: network 192.168.10.0/25 hai. (a) Kitne subnet banenge /25 mein? (b) Har subnet mein kitne hosts? (c) Dusre subnet ka network aur broadcast address kya hoga? Neeche script chalao aur milao. Done tab jab teeno jawab match karein.',
          english: 'Pen-and-paper task: the network is 192.168.10.0/25. (a) How many subnets are there in /25? (b) How many hosts per subnet? (c) What are the network and broadcast addresses of the second subnet? Run the script below and match. You are done when all three answers match.',
          hindi: 'पेन-पेपर टास्क: नेटवर्क 192.168.10.0/25 है। (a) /25 में कितने subnet बनेंगे? (b) हर subnet में कितने hosts? (c) दूसरे subnet का network और broadcast address क्या होगा? नीचे स्क्रिप्ट चलाओ और मिलाओ। जब तीनों जवाब मिल जाएँ, तब टास्क पूरा।',
        },
        language: 'python',
        starter: 'print("Subnets:", 2 ** (25 - 24))\nprint("Addresses per subnet:", 2 ** (32 - 25))\nprint("Hosts per subnet:", 2 ** (32 - 25) - 2)\nprint("Second subnet network: 192.168.10.128")\nprint("Second subnet broadcast: 192.168.10.255")\n',
        expected: '(a) 2 subnets. (b) 126 hosts each. (c) Second subnet: network 192.168.10.128, broadcast 192.168.10.255, hosts .129–.254.',
      },
      readMinutes: 12,
    },
    {
      id: 'cn-tcp-udp',
      subjectId: 'computer-networks',
      title: {
        hinglish: 'TCP vs UDP — bharosa ya speed?',
        english: 'TCP vs UDP — trust or speed?',
        hindi: 'TCP vs UDP — भरोसा या स्पीड?',
      },
      summary: {
        hinglish: 'TCP har packet ki delivery pakki karta hai, UDP bina ruke bhejta hai. Handshake, sequence number aur kab kaunsa use karein — seekho.',
        english: 'TCP guarantees every packet’s delivery; UDP sends without stopping. Learn the handshake, sequence numbers and when to use which.',
        hindi: 'TCP हर packet की delivery पक्की करता है, UDP बिना रुके भेजता है। Handshake, sequence number और कब कौन सा इस्तेमाल करें — सीखो।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish: 'TCP aur UDP Transport layer ke do tareeke hain data bhejne ke. TCP (Transmission Control Protocol) bharose wala hai: pehle connection banata hai (3-way handshake), har packet ko number deta hai (sequence number), galat ya khoye packet ko dobara bhejta hai, aur order sahi rakhta hai. Isiliye file download, website aur email mein TCP chalta hai. UDP (User Datagram Protocol) tez hai lekin bharosa nahi deta: na connection, na number, na dobara bhejna — jo bheja, woh gaya. Agar packet kho jaye to koi parwah nahi. Isiliye live video, online game aur DNS query mein UDP chalta hai — wahan ek frame kho jaye to koi dobara nahi maangta, agla frame aa jata hai.',
            english: 'TCP and UDP are the Transport layer’s two ways of sending data. TCP (Transmission Control Protocol) is reliable: it first builds a connection (3-way handshake), gives every packet a number (sequence number), resends lost or damaged packets, and keeps the order right. That is why file downloads, websites and email use TCP. UDP (User Datagram Protocol) is fast but gives no guarantee: no connection, no numbers, no resending — what is sent is sent. If a packet is lost, nobody cares. That is why live video, online games and DNS queries use UDP — if one frame is lost, nobody asks again; the next frame arrives.',
            hindi: 'TCP और UDP Transport layer के दो तरीके हैं डेटा भेजने के। TCP (Transmission Control Protocol) भरोसे वाला है: पहले कनेक्शन बनाता है (3-way handshake), हर packet को नंबर देता है (sequence number), गलत या खोए packet को दोबारा भेजता है, और order सही रखता है। इसीलिए फ़ाइल डाउनलोड, वेबसाइट और ईमेल में TCP चलता है। UDP (User Datagram Protocol) तेज़ है लेकिन भरोसा नहीं देता: न कनेक्शन, न नंबर, न दोबारा भेजना — जो भेजा, वह गया। अगर packet खो जाए तो कोई परवाह नहीं। इसीलिए लाइव वीडियो, ऑनलाइन गेम और DNS query में UDP चलता है — वहाँ एक frame खो जाए तो कोई दोबारा नहीं माँगता, अगला frame आ जाता है।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असली ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish: 'TCP jaise hai registered post. Pehle postman aakar bolta hai "parcel hai, sign karo" (handshake), phir har parcel par number lagta hai, aur aap receipt par sign karte ho (acknowledgement). Agar parcel kho jaye to post office dobara bhejta hai. Isiliye exam ka admit card registered post se aata hai — ek bhi kagaz kho nahi sakta. UDP jaise hai radio par gaana sun-na. Radio station gaana bajata hai, aap sun rahe ho ya nahi, usko farq nahi padta. Agar beech mein ek second ki awaaz kat jaye, to koi dobara nahi bajata — agla gaana aa jata hai. Dono ki apni jagah hai — admit card mein bharosa chahiye, cricket mein speed.',
            english: 'TCP is like registered post. First the postman comes and says “there is a parcel, please sign” (handshake), then every parcel gets a number, and you sign the receipt (acknowledgement). If a parcel is lost, the post office sends it again. That is why an exam admit card comes by registered post — not a single paper may be lost. UDP is like listening to a song on the radio. The station plays the song whether or not you are listening. If one second of sound is cut, nobody plays it again — the next song arrives. Each has its place — an admit card needs trust, cricket needs speed.',
            hindi: 'TCP जैसे है registered post। पहले पोस्टमैन आकर बोलता है "पार्सल है, sign करो" (handshake), फिर हर पार्सल पर नंबर लगता है, और आप रसीद पर sign करते हैं (acknowledgement)। अगर पार्सल खो जाए तो पोस्ट ऑफिस दोबारा भेजता है। इसीलिए exam का admit card registered post से आता है — एक भी काग़ज़ खो नहीं सकता। UDP जैसे है रेडियो पर गाना सुनना। रेडियो स्टेशन गाना बजाता है, आप सुन रहे हो या नहीं, उसको फ़र्क नहीं पड़ता। अगर बीच में एक सेकंड की आवाज़ कट जाए, तो कोई दोबारा नहीं बजाता — अगला गाना आ जाता है। दोनों की अपनी जगह है — admit card में भरोसा चाहिए, क्रिकेट में स्पीड।',
          },
        },
        {
          heading: {
            hinglish: 'Step by step — worked example',
            english: 'Step by step — worked example',
            hindi: 'स्टेप बाय स्टेप — हल किया हुआ उदाहरण',
          },
          body: {
            hinglish: 'Worked example 1 — 3-way handshake. Aapka phone (client) server ko SYN bhejta hai, sequence number 100. Server jawab deta hai SYN-ACK: apna sequence number 500, aur acknowledgement 101 (matlab "100 mil gaya, ab 101 bhej"). Phone aakhir mein ACK bhejta hai: sequence 101, acknowledgement 501 (matlab "500 mil gaya, ab 501 bhej"). Ab connection ban gaya — data bhej sakte ho. Worked example 2 — kitne segments? 1 MB ki file = 1,048,576 bytes. TCP ka maximum segment size (MSS) 1460 bytes hai. Segments = 1,048,576 ÷ 1460 = 718.2, to 719 segments lagenge. Check: 1460 × 718 = 10,48,280, bacha 296 bytes — woh 719th segment mein jayega.',
            english: 'Worked example 1 — the 3-way handshake. Your phone (client) sends SYN to the server, sequence number 100. The server replies SYN-ACK: its own sequence number 500, and acknowledgement 101 (meaning “100 received, now send 101”). The phone finally sends ACK: sequence 101, acknowledgement 501 (meaning “500 received, now send 501”). The connection is now built — data can flow. Worked example 2 — how many segments? A 1 MB file = 1,048,576 bytes. TCP’s maximum segment size (MSS) is 1460 bytes. Segments = 1,048,576 ÷ 1460 = 718.2, so 719 segments are needed. Check: 1460 × 718 = 1,048,280, leaving 296 bytes — those go in the 719th segment.',
            hindi: 'हल किया हुआ उदाहरण 1 — 3-way handshake। आपका फ़ोन (client) सर्वर को SYN भेजता है, sequence number 100। सर्वर जवाब देता है SYN-ACK: अपना sequence number 500, और acknowledgement 101 (मतलब "100 मिल गया, अब 101 भेज")। फ़ोन आखिर में ACK भेजता है: sequence 101, acknowledgement 501 (मतलब "500 मिल गया, अब 501 भेज")। अब कनेक्शन बन गया — डेटा भेज सकते हो। उदाहरण 2 — कितने segments? 1 MB की फ़ाइल = 1,048,576 bytes। TCP का maximum segment size (MSS) 1460 bytes है। Segments = 1,048,576 ÷ 1460 = 718.2, तो 719 segments लगेंगे। Check: 1460 × 718 = 10,48,280, बचा 296 bytes — वह 719th segment में जाएगा।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur kyun hote hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और क्यों होती हैं',
          },
          body: {
            hinglish: 'Galti 1: "TCP hamesha UDP se behtar hai" — nahi. Live video mein TCP use karo to khoya packet dobara aane tak video ruk jayega; UDP mein video chalta rahega. Galti 2: "UDP mein order galat ho sakta hai" — sahi hai, UDP order ki guarantee nahi deta; isiliye game aur video app khud order sambhalte hain. Galti 3: "Handshake mein 2 packet kaafi hain" — nahi, 3 chahiye: SYN, SYN-ACK, ACK. Do se server ko pata nahi chalega ki client ne uska jawab suna ya nahi. Galti 4: "Sequence number packet ka number hai" — asal mein ye byte ka number hai; 1460 bytes ka segment sequence number 1460 se badhta hai, 1 se nahi.',
            english: 'Mistake 1: “TCP is always better than UDP” — no. If live video used TCP, the video would pause until a lost packet came again; with UDP the video keeps playing. Mistake 2: “In UDP the order can be wrong” — that is true; UDP gives no order guarantee, which is why game and video apps handle order themselves. Mistake 3: “2 packets are enough for the handshake” — no, 3 are needed: SYN, SYN-ACK, ACK. With two, the server would not know whether the client heard its reply. Mistake 4: “The sequence number is the packet’s number” — actually it is the byte’s number; a 1460-byte segment raises the sequence number by 1460, not by 1.',
            hindi: 'गलती 1: "TCP हमेशा UDP से बेहतर है" — नहीं। लाइव वीडियो में TCP इस्तेमाल करो तो खोया packet दोबारा आने तक वीडियो रुक जाएगा; UDP में वीडियो चलता रहेगा। गलती 2: "UDP में order गलत हो सकता है" — सही है, UDP order की guarantee नहीं देता; इसीलिए गेम और वीडियो ऐप खुद order संभालते हैं। गलती 3: "Handshake में 2 packet काफ़ी हैं" — नहीं, 3 चाहिए: SYN, SYN-ACK, ACK। दो से सर्वर को पता नहीं चलेगा कि client ने उसका जवाब सुना या नहीं। गलती 4: "Sequence number packet का नंबर है" — असल में यह byte का नंबर है; 1460 bytes का segment sequence number 1460 से बढ़ता है, 1 से नहीं।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास मामले',
          },
          body: {
            hinglish: 'Edge case 1: TCP connection band karna bhi 4 packet ka kaam hai (FIN, ACK, FIN, ACK) — kholna 3, band karna 4. Edge case 2: UDP packet bada ho jaye (MTU se zyada) to IP use tukdon mein kaat deta hai (fragmentation); ek tukda kho jaye to poora packet bekar. Edge case 3: network bahut slow ho to TCP apni speed khud kam kar leta hai (congestion control) — jaise bheed dekh kar gaadi slow karna. UDP aisa nahi karta, woh bhejta rehta hai. Edge case 4: ek hi packet do baar aa jaye (duplicate) — TCP sequence number se pehchan kar dusri copy hata deta hai.',
            english: 'Edge case 1: closing a TCP connection also takes 4 packets (FIN, ACK, FIN, ACK) — opening takes 3, closing takes 4. Edge case 2: if a UDP packet grows bigger than the MTU, IP cuts it into pieces (fragmentation); if one piece is lost, the whole packet is useless. Edge case 3: if the network is very slow, TCP slows itself down (congestion control) — like slowing a car when you see a crowd. UDP does not do that; it keeps sending. Edge case 4: if the same packet arrives twice (a duplicate), TCP recognises it by sequence number and drops the second copy.',
            hindi: 'खास मामला 1: TCP कनेक्शन बंद करना भी 4 packet का काम है (FIN, ACK, FIN, ACK) — खोलना 3, बंद करना 4। खास मामला 2: UDP packet बड़ा हो जाए (MTU से ज़्यादा) तो IP उसे टुकड़ों में काट देता है (fragmentation); एक टुकड़ा खो जाए तो पूरा packet बेकार। खास मामला 3: नेटवर्क बहुत स्लो हो तो TCP अपनी स्पीड खुद कम कर लेता है (congestion control) — जैसे भीड़ देखकर गाड़ी स्लो करना। UDP ऐसा नहीं करता, वह भेजता रहता है। खास मामला 4: एक ही packet दो बार आ जाए (duplicate) — TCP sequence number से पहचानकर दूसरी कॉपी हटा देता है।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal diya to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दिया तो क्या होगा?',
          },
          body: {
            hinglish: 'Agar file download UDP se karo to khoye packet ki wajah se file kharab ho jayegi — zip file khulegi hi nahi. Agar live video TCP se karo to har khoye packet par video atak jayega. Agar handshake hata diya jaye, to server ko pata nahi chalega client zinda hai ya nahi, aur aadhe connection bhar jayenge. Har protocol apne kaam ke liye bana hai — bharosa chahiye to TCP, speed chahiye to UDP.',
            english: 'If a file download used UDP, lost packets would corrupt the file — a zip file would not open at all. If live video used TCP, the video would freeze on every lost packet. If the handshake were removed, the server would not know whether the client is alive, and half-open connections would pile up. Every protocol is built for its job — TCP when you need trust, UDP when you need speed.',
            hindi: 'अगर फ़ाइल डाउनलोड UDP से करो तो खोए packet की वजह से फ़ाइल खराब हो जाएगी — zip फ़ाइल खुलेगी ही नहीं। अगर लाइव वीडियो TCP से करो तो हर खोए packet पर वीडियो अटक जाएगा। अगर handshake हटा दिया जाए, तो सर्वर को पता नहीं चलेगा client ज़िंदा है या नहीं, और आधे कनेक्शन भर जाएँगे। हर protocol अपने काम के लिए बना है — भरोसा चाहिए तो TCP, स्पीड चाहिए तो UDP।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'TCP = connection + sequence number + acknowledgement + dobara bhejna. Handshake 3 packet ka hai. UDP = bina connection, bina guarantee, lekin tez. 1 MB file ko 1460 bytes ke hisaab se 719 TCP segments lagte hain. File, website, email — TCP. Live video, game, DNS — UDP. Agle article mein dekhenge website kholte waqt DNS aur HTTP kya karte hain.',
            english: 'TCP = connection + sequence number + acknowledgement + resending. The handshake is 3 packets. UDP = no connection, no guarantee, but fast. A 1 MB file needs 719 TCP segments at 1460 bytes each. Files, websites, email — TCP. Live video, games, DNS — UDP. In the next article we will see what DNS and HTTP do when you open a website.',
            hindi: 'TCP = कनेक्शन + sequence number + acknowledgement + दोबारा भेजना। Handshake 3 packet का है। UDP = बिना कनेक्शन, बिना guarantee, लेकिन तेज़। 1 MB फ़ाइल को 1460 bytes के हिसाब से 719 TCP segments लगते हैं। फ़ाइल, वेबसाइट, ईमेल — TCP। लाइव वीडियो, गेम, DNS — UDP। अगले आर्टिकल में देखेंगे वेबसाइट खोलते समय DNS और HTTP क्या करते हैं।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: '3-way handshake',
          english: '3-way handshake',
          hindi: '3-way handshake',
        },
        nodes: [
          { t: { hinglish: 'Phone → Server: SYN', english: 'Phone → Server: SYN', hindi: 'फ़ोन → सर्वर: SYN' }, s: { hinglish: 'Sequence 100', english: 'Sequence 100', hindi: 'Sequence 100' } },
          { t: { hinglish: 'Server → Phone: SYN-ACK', english: 'Server → Phone: SYN-ACK', hindi: 'सर्वर → फ़ोन: SYN-ACK' }, s: { hinglish: 'Sequence 500, Ack 101', english: 'Sequence 500, Ack 101', hindi: 'Sequence 500, Ack 101' } },
          { t: { hinglish: 'Phone → Server: ACK', english: 'Phone → Server: ACK', hindi: 'फ़ोन → सर्वर: ACK' }, s: { hinglish: 'Sequence 101, Ack 501', english: 'Sequence 101, Ack 501', hindi: 'Sequence 101, Ack 501' } },
          { t: { hinglish: 'Connection ready — data bhejo', english: 'Connection ready — send data', hindi: 'कनेक्शन तैयार — डेटा भेजो' }, s: { hinglish: 'Ab TCP segments chalenge', english: 'Now TCP segments flow', hindi: 'अब TCP segments चलेंगे' } },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'Handshake mein server SYN-ACK bhejta hai: sequence 500, ack 101. Iska matlab kya hai?',
            english: 'In the handshake the server sends SYN-ACK: sequence 500, ack 101. What does this mean?',
            hindi: 'Handshake में सर्वर SYN-ACK भेजता है: sequence 500, ack 101। इसका मतलब क्या है?',
          },
          opts: [
            { hinglish: '"Mera sequence 500 hai, aur tumhara 100 mil gaya, ab 101 bhej"', english: '"My sequence is 500, and I got your 100, now send 101"', hindi: '"मेरा sequence 500 है, और तुम्हारा 100 मिल गया, अब 101 भेज"' },
            { hinglish: '"Mera sequence 101 hai, tumhara 500 mil gaya"', english: '"My sequence is 101, I got your 500"', hindi: '"मेरा sequence 101 है, तुम्हारा 500 मिल गया"' },
            { hinglish: '"Connection band karo"', english: '"Close the connection"', hindi: '"कनेक्शन बंद करो"' },
            { hinglish: '"Data bhejo, sequence 101"', english: '"Send data, sequence 101"', hindi: '"डेटा भेजो, sequence 101"' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Ack 101 ka matlab hai "100 tak mil gaya, ab 101 chahiye" aur sequence 500 server ka apna number hai.',
            english: 'Ack 101 means “received up to 100, now I want 101”, and sequence 500 is the server’s own number.',
            hindi: 'Ack 101 का मतलब है "100 तक मिल गया, अब 101 चाहिए" और sequence 500 सर्वर का अपना नंबर है।',
          },
        },
        {
          q: {
            hinglish: '1,048,576 bytes ki file, MSS 1460 — kitne TCP segments lagenge?',
            english: 'A 1,048,576-byte file, MSS 1460 — how many TCP segments are needed?',
            hindi: '1,048,576 bytes की फ़ाइल, MSS 1460 — कितने TCP segments लगेंगे?',
          },
          opts: [
            { hinglish: '718', english: '718', hindi: '718' },
            { hinglish: '719', english: '719', hindi: '719' },
            { hinglish: '720', english: '720', hindi: '720' },
            { hinglish: '1000', english: '1000', hindi: '1000' },
          ],
          ans: 1,
          expl: {
            hinglish: '1,048,576 ÷ 1460 = 718.2 — 718 poore segment aur bacha 296 bytes 719th segment mein jayega.',
            english: '1,048,576 ÷ 1460 = 718.2 — 718 full segments, and the remaining 296 bytes go in the 719th segment.',
            hindi: '1,048,576 ÷ 1460 = 718.2 — 718 पूरे segment और बचा 296 bytes 719th segment में जाएगा।',
          },
        },
        {
          q: {
            hinglish: 'Live video call ke liye TCP ki jagah UDP kyun use hota hai?',
            english: 'Why is UDP used instead of TCP for a live video call?',
            hindi: 'लाइव वीडियो कॉल के लिए TCP की जगह UDP क्यों इस्तेमाल होता है?',
          },
          opts: [
            { hinglish: 'UDP mein har packet ki delivery pakki hoti hai', english: 'In UDP every packet’s delivery is guaranteed', hindi: 'UDP में हर packet की delivery पक्की होती है' },
            { hinglish: 'UDP tez hai — khoya frame dobara nahi maanga jata, video rukta nahi', english: 'UDP is fast — a lost frame is not asked again, so the video does not freeze', hindi: 'UDP तेज़ है — खोया frame दोबारा नहीं माँगा जाता, वीडियो रुकता नहीं' },
            { hinglish: 'UDP mein handshake hota hai', english: 'UDP has a handshake', hindi: 'UDP में handshake होता है' },
            { hinglish: 'UDP order ki guarantee deta hai', english: 'UDP guarantees order', hindi: 'UDP order की guarantee देता है' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Live video mein ek frame kho jaye to koi farq nahi padta; TCP dobara bhej kar video ko atakata, UDP aage badhta rehta hai.',
            english: 'In live video a lost frame does not matter; TCP would freeze the video by resending, while UDP keeps moving forward.',
            hindi: 'लाइव वीडियो में एक frame खो जाए तो कोई फ़र्क नहीं पड़ता; TCP दोबारा भेजकर वीडियो को अटकाता, UDP आगे बढ़ता रहता है।',
          },
        },
        {
          q: {
            hinglish: 'Kaunsa statement GALAT hai?',
            english: 'Which statement is WRONG?',
            hindi: 'कौन सा कथन गलत है?',
          },
          opts: [
            { hinglish: 'TCP khoye packet ko dobara bhejta hai', english: 'TCP resends lost packets', hindi: 'TCP खोए packet को दोबारा भेजता है' },
            { hinglish: 'UDP mein connection nahi banta', english: 'UDP builds no connection', hindi: 'UDP में कनेक्शन नहीं बनता' },
            { hinglish: 'Sequence number byte ka number hota hai', english: 'The sequence number is the byte’s number', hindi: 'Sequence number byte का नंबर होता है' },
            { hinglish: 'DNS query TCP se hoti hai kyunki woh tez hai', english: 'DNS queries use TCP because it is fast', hindi: 'DNS query TCP से होती है क्योंकि वह तेज़ है' },
          ],
          ans: 3,
          expl: {
            hinglish: 'DNS query UDP se hoti hai — ek packet jata hai, ek jawab aata hai; TCP slow hota kyunki pehle handshake chahiye.',
            english: 'DNS queries use UDP — one packet out, one answer back; TCP is slower because it needs a handshake first.',
            hindi: 'DNS query UDP से होती है — एक packet जाता है, एक जवाब आता है; TCP स्लो होता क्योंकि पहले handshake चाहिए।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Segments ginna seekho',
          english: 'Learn to count segments',
          hindi: 'Segments गिनना सीखो',
        },
        task: {
          hinglish: 'Pen-paper task: file 500,000 bytes ki hai, MSS 1460 bytes hai. (a) Kitne TCP segments lagenge? (b) Aakhri segment mein kitne bytes honge? Neeche script chalao aur milao. Done tab jab dono jawab match karein.',
          english: 'Pen-and-paper task: the file is 500,000 bytes, MSS is 1460 bytes. (a) How many TCP segments are needed? (b) How many bytes are in the last segment? Run the script below and match. You are done when both answers match.',
          hindi: 'पेन-पेपर टास्क: फ़ाइल 500,000 bytes की है, MSS 1460 bytes है। (a) कितने TCP segments लगेंगे? (b) आखिरी segment में कितने bytes होंगे? नीचे स्क्रिप्ट चलाओ और मिलाओ। जब दोनों जवाब मिल जाएँ, तब टास्क पूरा।',
        },
        language: 'python',
        starter: 'import math\nsize = 500000\nmss = 1460\nsegs = math.ceil(size / mss)\nlast = size - (segs - 1) * mss\nprint("Segments:", segs)\nprint("Last segment bytes:", last)\n',
        expected: 'Segments: 343 (342.46 round up). Last segment: 500,000 − 342 × 1460 = 680 bytes.',
      },
      readMinutes: 12,
    },
    {
      id: 'cn-dns-http',
      subjectId: 'computer-networks',
      title: {
        hinglish: 'DNS aur HTTP — website kaise khulti hai',
        english: 'DNS and HTTP — how a website opens',
        hindi: 'DNS और HTTP — वेबसाइट कैसे खुलती है',
      },
      summary: {
        hinglish: 'Aap naam likhte ho, browser IP dhoondhta hai, phir HTTP se page maangta hai. Poora safar step by step, time ke saath.',
        english: 'You type a name, the browser finds the IP, then asks for the page with HTTP. The whole journey step by step, with timings.',
        hindi: 'आप नाम लिखते हैं, ब्राउज़र IP ढूँढता है, फिर HTTP से पेज माँगता है। पूरा सफ़र स्टेप बाय स्टेप, समय के साथ।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish: 'DNS (Domain Name System) internet ki phone directory hai — naam ko IP address mein badalta hai. Aap "example.com" likhte ho, DNS use 93.184.216.34 jaise IP mein badal deta hai, kyunki computer naam nahi, number samajhta hai. HTTP (HyperText Transfer Protocol) woh bhasha hai jisme browser server se page maangta hai. Browser bhejta hai GET request ("mujhe ye page do"), server jawab deta hai status code ke saath — 200 matlab mil gaya, 404 matlab page nahi mila, 500 matlab server mein gadbad. HTTPS wahi HTTP hai, bas beech mein encryption (TLS) laga hota hai taaki koi beech mein padh na sake.',
            english: 'DNS (Domain Name System) is the internet’s phone directory — it turns a name into an IP address. You type “example.com”, and DNS turns it into an IP like 93.184.216.34, because computers understand numbers, not names. HTTP (HyperText Transfer Protocol) is the language in which the browser asks the server for a page. The browser sends a GET request (“give me this page”), and the server answers with a status code — 200 means found, 404 means the page was not found, 500 means something is wrong on the server. HTTPS is the same HTTP, but with encryption (TLS) in between so nobody in the middle can read it.',
            hindi: 'DNS (Domain Name System) इंटरनेट की फ़ोन डायरेक्टरी है — नाम को IP address में बदलता है। आप "example.com" लिखते हैं, DNS उसे 93.184.216.34 जैसे IP में बदल देता है, क्योंकि कंप्यूटर नाम नहीं, नंबर समझता है। HTTP (HyperText Transfer Protocol) वह भाषा है जिसमें ब्राउज़र सर्वर से पेज माँगता है। ब्राउज़र भेजता है GET request ("मुझे यह पेज दो"), सर्वर जवाब देता है status code के साथ — 200 मतलब मिल गया, 404 मतलब पेज नहीं मिला, 500 मतलब सर्वर में गड़बड़। HTTPS वही HTTP है, बस बीच में encryption (TLS) लगा होता है ताकि कोई बीच में पढ़ न सके।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असली ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish: 'Sochiye aapko apne dost Ramesh ko phone karna hai. Aapko uska number yaad nahi, sirf naam yaad hai. Aap phone ki contact list (DNS) kholte ho, "Ramesh" dhoondhte ho, number milta hai (IP address), phir call lagate ho (HTTP request). Agar number na mile to "contact nahi mila" — wahi DNS ka NXDOMAIN error hai. Phir call par aap bolte ho "hello, mujhe kal wali photo bhej do" (GET request) aur dost jawab deta hai (200 OK + photo). Agar dost ka phone band ho to call hi nahi lagegi — wahi server down hai.',
            english: 'Imagine you want to call your friend Ramesh. You do not remember his number, only his name. You open the phone’s contact list (DNS), find “Ramesh”, get the number (the IP address), then place the call (the HTTP request). If the number is not there, you get “contact not found” — that is DNS’s NXDOMAIN error. Then on the call you say “hello, send me yesterday’s photo” (a GET request) and your friend answers (200 OK + the photo). If your friend’s phone is off, the call never connects — that is the server being down.',
            hindi: 'सोचिए आपको अपने दोस्त रमेश को फ़ोन करना है। आपको उसका नंबर याद नहीं, सिर्फ़ नाम याद है। आप फ़ोन की contact list (DNS) खोलते हैं, "रमेश" ढूँढते हैं, नंबर मिलता है (IP address), फिर कॉल लगाते हैं (HTTP request)। अगर नंबर न मिले तो "contact नहीं मिला" — वही DNS का NXDOMAIN error है। फिर कॉल पर आप बोलते हैं "hello, मुझे कल वाली फ़ोटो भेज दो" (GET request) और दोस्त जवाब देता है (200 OK + फ़ोटो)। अगर दोस्त का फ़ोन बंद हो तो कॉल ही नहीं लगेगी — वही सर्वर down है।',
          },
        },
        {
          heading: {
            hinglish: 'Step by step — worked example',
            english: 'Step by step — worked example',
            hindi: 'स्टेप बाय स्टेप — हल किया हुआ उदाहरण',
          },
          body: {
            hinglish: 'Worked example 1 — poora safar, time ke saath. Aap example.com kholte ho. Step 1: browser apni cache mein IP dhoondhta hai — nahi mila. Step 2: DNS query jati hai, jawab aata hai 93.184.216.34 — maan lo 30 ms lage. Step 3: TCP handshake — 3 packet, maan lo 40 ms. Step 4: TLS handshake (HTTPS) — maan lo 60 ms. Step 5: HTTP GET request, server 200 OK ke saath page bhejta hai — maan lo 50 ms. Kul time = 30 + 40 + 60 + 50 = 180 ms. Dusri baar wahi site kholo to DNS aur TLS cache se bachte hain, time 50 ms ke aas-paas reh jata hai. Worked example 2 — download time. Page 2 MB ka hai, speed 100 Mbps hai. 2 MB = 16 Mb (2 × 8). Time = 16 ÷ 100 = 0.16 second.',
            english: 'Worked example 1 — the whole journey, with timings. You open example.com. Step 1: the browser looks for the IP in its cache — not found. Step 2: a DNS query goes out, the answer comes back as 93.184.216.34 — say it takes 30 ms. Step 3: the TCP handshake — 3 packets, say 40 ms. Step 4: the TLS handshake (HTTPS) — say 60 ms. Step 5: the HTTP GET request, and the server sends the page with 200 OK — say 50 ms. Total time = 30 + 40 + 60 + 50 = 180 ms. Open the same site a second time and DNS and TLS are saved from cache, so the time drops to around 50 ms. Worked example 2 — download time. The page is 2 MB, the speed is 100 Mbps. 2 MB = 16 Mb (2 × 8). Time = 16 ÷ 100 = 0.16 seconds.',
            hindi: 'हल किया हुआ उदाहरण 1 — पूरा सफ़र, समय के साथ। आप example.com खोलते हैं। Step 1: ब्राउज़र अपनी cache में IP ढूँढता है — नहीं मिला। Step 2: DNS query जाती है, जवाब आता है 93.184.216.34 — मान लो 30 ms लगे। Step 3: TCP handshake — 3 packet, मान लो 40 ms। Step 4: TLS handshake (HTTPS) — मान लो 60 ms। Step 5: HTTP GET request, सर्वर 200 OK के साथ पेज भेजता है — मान लो 50 ms। कुल समय = 30 + 40 + 60 + 50 = 180 ms। दूसरी बार वही साइट खोलो तो DNS और TLS cache से बचते हैं, समय 50 ms के आस-पास रह जाता है। उदाहरण 2 — डाउनलोड समय। पेज 2 MB का है, स्पीड 100 Mbps है। 2 MB = 16 Mb (2 × 8)। Time = 16 ÷ 100 = 0.16 सेकंड।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur kyun hote hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और क्यों होती हैं',
          },
          body: {
            hinglish: 'Galti 1: "DNS aur HTTP ek hi hain" — nahi. DNS naam ko IP mein badalta hai, HTTP page maangta hai. DNS pehle hota hai, HTTP baad mein. Galti 2: "404 matlab server down hai" — nahi. 404 matlab server zinda hai, page nahi mila. Server down ho to connection hi nahi banta. Galti 3: "HTTPS matlab site safe hai" — nahi, HTTPS sirf connection ko encrypt karta hai; galat site bhi HTTPS par chal sakti hai. Taala dekh kar password mat do, site ka naam check karo. Galti 4: "DNS query har baar hoti hai" — nahi, browser aur OS IP ko cache karte hain, isliye dusri baar site jaldi khulti hai.',
            english: 'Mistake 1: “DNS and HTTP are the same” — no. DNS turns a name into an IP; HTTP asks for the page. DNS comes first, HTTP after. Mistake 2: “404 means the server is down” — no. 404 means the server is alive but the page was not found. If the server is down, no connection is made at all. Mistake 3: “HTTPS means the site is safe” — no, HTTPS only encrypts the connection; a wrong site can also run on HTTPS. Do not give your password just because you see a lock — check the site’s name. Mistake 4: “A DNS query happens every time” — no, the browser and the OS cache the IP, which is why the site opens faster the second time.',
            hindi: 'गलती 1: "DNS और HTTP एक ही हैं" — नहीं। DNS नाम को IP में बदलता है, HTTP पेज माँगता है। DNS पहले होता है, HTTP बाद में। गलती 2: "404 मतलब सर्वर down है" — नहीं। 404 मतलब सर्वर ज़िंदा है, पेज नहीं मिला। सर्वर down हो तो कनेक्शन ही नहीं बनता। गलती 3: "HTTPS मतलब साइट safe है" — नहीं, HTTPS सिर्फ़ कनेक्शन को encrypt करता है; गलत साइट भी HTTPS पर चल सकती है। ताला देखकर पासवर्ड मत दो, साइट का नाम चेक करो। गलती 4: "DNS query हर बार होती है" — नहीं, ब्राउज़र और OS IP को cache करते हैं, इसीलिए दूसरी बार साइट जल्दी खुलती है।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास मामले',
          },
          body: {
            hinglish: 'Edge case 1: DNS jawab galat de — koi beech mein DNS ko badal de (DNS spoofing) to aap galat site par pahunch jayenge; isiliye DNSSEC aur DoH use hote hain. Edge case 2: ek naam ke kai IP — badi site ke kai server hote hain, DNS har baar alag IP de sakta hai (load balancing). Edge case 4: redirect — server 301 bhej kar bolta hai "page yahan nahi, wahan gaya hai", browser khud wahan chala jata hai.',
            english: 'Edge case 1: DNS gives a wrong answer — if someone in the middle changes DNS (DNS spoofing), you land on the wrong site; that is why DNSSEC and DoH are used. Edge case 2: one name with many IPs — a big site has many servers, and DNS can give a different IP each time (load balancing). Edge case 4: redirect — the server sends 301 saying “the page is not here, it moved there”, and the browser goes there by itself.',
            hindi: 'खास मामला 1: DNS जवाब गलत दे — कोई बीच में DNS को बदल दे (DNS spoofing) तो आप गलत साइट पर पहुँच जाएँगे; इसीलिए DNSSEC और DoH इस्तेमाल होते हैं। खास मामला 2: एक नाम के कई IP — बड़ी साइट के कई सर्वर होते हैं, DNS हर बार अलग IP दे सकता है (load balancing)। खास मामला 4: redirect — सर्वर 301 भेजकर बोलता है "पेज यहाँ नहीं, वहाँ गया है", ब्राउज़र खुद वहाँ चला जाता है।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal diya to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दिया तो क्या होगा?',
          },
          body: {
            hinglish: 'Agar DNS hata diya jaye, to aapko har site ka IP number yaad rakhna padega — 93.184.216.34 type karna "example.com" se bahut mushkil hai. Agar HTTPS hata diya jaye, to Wi-Fi par baitha koi bhi aapka password padh sakta hai.',
            english: 'If DNS were removed, you would have to remember every site’s IP number — typing 93.184.216.34 is much harder than “example.com”. If HTTPS were removed, anyone sitting on the same Wi-Fi could read your password.',
            hindi: 'अगर DNS हटा दिया जाए, तो आपको हर साइट का IP नंबर याद रखना पड़ेगा — 93.184.216.34 टाइप करना "example.com" से बहुत मुश्किल है। अगर HTTPS हटा दिया जाए, तो Wi-Fi पर बैठा कोई भी आपका पासवर्ड पढ़ सकता है।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'DNS naam ko IP mein badalta hai, HTTP page maangta hai, HTTPS us baat ko encrypt karta hai. Pehli baar site kholne mein DNS + TCP + TLS + HTTP mil kar ~180 ms lagte hain. 200 matlab mil gaya, 404 matlab page nahi mila, 500 matlab server mein gadbad. Agle article mein routing — packet sahi rasta kaise dhoondhta hai.',
            english: 'DNS turns a name into an IP, HTTP asks for the page, HTTPS encrypts that talk. Opening a site the first time takes DNS + TCP + TLS + HTTP together, around 180 ms. 200 means found, 404 means the page was not found, 500 means something is wrong on the server. In the next article: routing — how a packet finds the right path.',
            hindi: 'DNS नाम को IP में बदलता है, HTTP पेज माँगता है, HTTPS उस बात को encrypt करता है। पहली बार साइट खोलने में DNS + TCP + TLS + HTTP मिलकर ~180 ms लगते हैं। 200 मतलब मिल गया, 404 मतलब पेज नहीं मिला, 500 मतलब सर्वर में गड़बड़। अगले आर्टिकल में रूटिंग — packet सही रास्ता कैसे ढूँढता है।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Website kholne ka safar',
          english: 'The journey of opening a website',
          hindi: 'वेबसाइट खोलने का सफ़र',
        },
        nodes: [
          { t: { hinglish: '1. DNS query', english: '1. DNS query', hindi: '1. DNS query' }, s: { hinglish: 'example.com → 93.184.216.34 (30 ms)', english: 'example.com → 93.184.216.34 (30 ms)', hindi: 'example.com → 93.184.216.34 (30 ms)' } },
          { t: { hinglish: '2. TCP handshake', english: '2. TCP handshake', hindi: '2. TCP handshake' }, s: { hinglish: 'SYN, SYN-ACK, ACK (40 ms)', english: 'SYN, SYN-ACK, ACK (40 ms)', hindi: 'SYN, SYN-ACK, ACK (40 ms)' } },
          { t: { hinglish: '3. TLS handshake', english: '3. TLS handshake', hindi: '3. TLS handshake' }, s: { hinglish: 'Encryption set up (60 ms)', english: 'Encryption set up (60 ms)', hindi: 'Encryption set up (60 ms)' } },
          { t: { hinglish: '4. HTTP GET', english: '4. HTTP GET', hindi: '4. HTTP GET' }, s: { hinglish: '200 OK + page (50 ms)', english: '200 OK + page (50 ms)', hindi: '200 OK + page (50 ms)' } },
          { t: { hinglish: 'Kul: 180 ms', english: 'Total: 180 ms', hindi: 'कुल: 180 ms' }, s: { hinglish: 'Dusri baar ~50 ms (cache)', english: 'Second time ~50 ms (cache)', hindi: 'दूसरी बार ~50 ms (cache)' } },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'Pehli baar site kholne mein DNS 30 ms, TCP 40 ms, TLS 60 ms, HTTP 50 ms lage. Kul kitna time?',
            english: 'Opening a site the first time takes DNS 30 ms, TCP 40 ms, TLS 60 ms, HTTP 50 ms. What is the total time?',
            hindi: 'पहली बार साइट खोलने में DNS 30 ms, TCP 40 ms, TLS 60 ms, HTTP 50 ms लगे। कुल कितना समय?',
          },
          opts: [
            { hinglish: '130 ms', english: '130 ms', hindi: '130 ms' },
            { hinglish: '150 ms', english: '150 ms', hindi: '150 ms' },
            { hinglish: '180 ms', english: '180 ms', hindi: '180 ms' },
            { hinglish: '200 ms', english: '200 ms', hindi: '200 ms' },
          ],
          ans: 2,
          expl: {
            hinglish: '30 + 40 + 60 + 50 = 180 ms. Dusri baar cache ki wajah se kam lagta hai.',
            english: '30 + 40 + 60 + 50 = 180 ms. The second time takes less because of the cache.',
            hindi: '30 + 40 + 60 + 50 = 180 ms। दूसरी बार cache की वजह से कम लगता है।',
          },
        },
        {
          q: {
            hinglish: '2 MB ka page, 100 Mbps speed — download mein kitna time lagega?',
            english: 'A 2 MB page, 100 Mbps speed — how long will the download take?',
            hindi: '2 MB का पेज, 100 Mbps स्पीड — डाउनलोड में कितना समय लगेगा?',
          },
          opts: [
            { hinglish: '0.02 second', english: '0.02 seconds', hindi: '0.02 सेकंड' },
            { hinglish: '0.16 second', english: '0.16 seconds', hindi: '0.16 सेकंड' },
            { hinglish: '2 second', english: '2 seconds', hindi: '2 सेकंड' },
            { hinglish: '1.6 second', english: '1.6 seconds', hindi: '1.6 सेकंड' },
          ],
          ans: 1,
          expl: {
            hinglish: '2 MB = 16 Mb, 16 ÷ 100 = 0.16 second. MB ko Mb mein badalna mat bhoolo (×8).',
            english: '2 MB = 16 Mb, 16 ÷ 100 = 0.16 seconds. Do not forget to convert MB to Mb (×8).',
            hindi: '2 MB = 16 Mb, 16 ÷ 100 = 0.16 सेकंड। MB को Mb में बदलना मत भूलो (×8)।',
          },
        },
        {
          q: {
            hinglish: 'Server ne 404 bheja. Iska matlab kya hai?',
            english: 'The server sent 404. What does it mean?',
            hindi: 'सर्वर ने 404 भेजा। इसका मतलब क्या है?',
          },
          opts: [
            { hinglish: 'Server band hai', english: 'The server is down', hindi: 'सर्वर बंद है' },
            { hinglish: 'Server mil gaya, page nahi mila', english: 'The server was found, but the page was not', hindi: 'सर्वर मिल गया, पेज नहीं मिला' },
            { hinglish: 'Internet band hai', english: 'The internet is off', hindi: 'इंटरनेट बंद है' },
            { hinglish: 'DNS fail ho gaya', english: 'DNS failed', hindi: 'DNS fail हो गया' },
          ],
          ans: 1,
          expl: {
            hinglish: '404 server ka jawab hai — matlab server zinda hai, bas woh page nahi mila.',
            english: '404 is the server’s answer — it means the server is alive, but that page was not found.',
            hindi: '404 सर्वर का जवाब है — मतलब सर्वर ज़िंदा है, बस वह पेज नहीं मिला।',
          },
        },
        {
          q: {
            hinglish: 'Kaunsa statement GALAT hai?',
            english: 'Which statement is WRONG?',
            hindi: 'कौन सा कथन गलत है?',
          },
          opts: [
            { hinglish: 'DNS naam ko IP mein badalta hai', english: 'DNS turns a name into an IP', hindi: 'DNS नाम को IP में बदलता है' },
            { hinglish: 'HTTPS connection ko encrypt karta hai', english: 'HTTPS encrypts the connection', hindi: 'HTTPS कनेक्शन को encrypt करता है' },
            { hinglish: 'HTTPS wali har site bharose wali hoti hai', english: 'Every site with HTTPS is trustworthy', hindi: 'HTTPS वाली हर साइट भरोसे वाली होती है' },
            { hinglish: 'Browser IP ko cache karta hai', english: 'The browser caches the IP', hindi: 'ब्राउज़र IP को cache करता है' },
          ],
          ans: 2,
          expl: {
            hinglish: 'HTTPS sirf connection encrypt karta hai — galat site bhi HTTPS par chal sakti hai, isiliye site ka naam check karo.',
            english: 'HTTPS only encrypts the connection — a wrong site can also run on HTTPS, so check the site’s name.',
            hindi: 'HTTPS सिर्फ़ कनेक्शन encrypt करता है — गलत साइट भी HTTPS पर चल सकती है, इसीलिए साइट का नाम चेक करो।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Download time nikalo',
          english: 'Work out download time',
          hindi: 'डाउनलोड समय निकालो',
        },
        task: {
          hinglish: 'Pen-paper task: video 50 MB ki hai, speed 25 Mbps hai. (a) Download mein kitne second lagenge? (b) Agar speed 50 Mbps ho jaye to kitna time? Neeche script chalao aur milao. Done tab jab dono jawab match karein.',
          english: 'Pen-and-paper task: a video is 50 MB, speed is 25 Mbps. (a) How many seconds will the download take? (b) If the speed becomes 50 Mbps, how long? Run the script below and match. You are done when both answers match.',
          hindi: 'पेन-पेपर टास्क: वीडियो 50 MB की है, स्पीड 25 Mbps है। (a) डाउनलोड में कितने सेकंड लगेंगे? (b) अगर स्पीड 50 Mbps हो जाए तो कितना समय? नीचे स्क्रिप्ट चलाओ और मिलाओ। जब दोनों जवाब मिल जाएँ, तब टास्क पूरा।',
        },
        language: 'python',
        starter: 'size_mb = 50\nspeed1 = 25\nspeed2 = 50\nprint("25 Mbps par:", size_mb * 8 / speed1, "second")\nprint("50 Mbps par:", size_mb * 8 / speed2, "second")\n',
        expected: '(a) 50 × 8 = 400 Mb ÷ 25 = 16 second. (b) 400 ÷ 50 = 8 second.',
      },
      readMinutes: 12,
    },
    {
      id: 'cn-routing',
      subjectId: 'computer-networks',
      title: {
        hinglish: 'Routing Basics — packet sahi rasta kaise dhoondhta hai',
        english: 'Routing basics — how a packet finds the right path',
        hindi: 'रूटिंग Basics — packet सही रास्ता कैसे ढूँढता है',
      },
      summary: {
        hinglish: 'Router packet ko ek network se dusre tak pahunchata hai. Routing table, longest prefix match aur Dijkstra ka hisaab seekho.',
        english: 'A router carries a packet from one network to another. Learn the routing table, longest prefix match and Dijkstra’s maths.',
        hindi: 'राउटर packet को एक नेटवर्क से दूसरे तक पहुँचाता है। Routing table, longest prefix match और Dijkstra का हिसाब सीखो।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish: 'Routing ka matlab hai packet ke liye sahi rasta chunna. Jab aapka phone kisi website ko packet bhejta hai, to woh seedha server tak nahi jata — beech mein kai router padte hain. Har router ke paas ek routing table hoti hai — ek list jo batati hai kis network ke liye packet kis taraf bhejna hai. Router packet ke destination IP ko table se milata hai aur sabse sahi match wala rasta chunta hai — isko longest prefix match kehte hain (jo entry sabse zyada specific ho, woh jeet-ti hai). Do tareeke hain table bharne ke: static routing (admin haath se likhta hai) aur dynamic routing (router aapas mein baat karke rasta seekhte hain — OSPF, BGP jaise protocol). Sabse chhota rasta nikalne ka famous algorithm hai Dijkstra — woh har node tak ka sabse kam kharcha wala rasta dhoondhta hai.',
            english: 'Routing means choosing the right path for a packet. When your phone sends a packet to a website, it does not go straight to the server — many routers lie in between. Every router has a routing table — a list that says which way to send a packet for each network. The router matches the packet’s destination IP against the table and picks the best matching path — this is called longest prefix match (the most specific entry wins). There are two ways to fill the table: static routing (the admin writes it by hand) and dynamic routing (routers learn paths by talking to each other — protocols like OSPF and BGP). The famous algorithm for finding the shortest path is Dijkstra — it finds the lowest-cost path to every node.',
            hindi: 'Routing का मतलब है packet के लिए सही रास्ता चुनना। जब आपका फ़ोन किसी वेबसाइट को packet भेजता है, तो वह सीधे सर्वर तक नहीं जाता — बीच में कई राउटर पड़ते हैं। हर राउटर के पास एक routing table होती है — एक list जो बताती है किस नेटवर्क के लिए packet किस तरफ़ भेजना है। राउटर packet के destination IP को table से मिलाता है और सबसे सही match वाला रास्ता चुनता है — इसको longest prefix match कहते हैं (जो entry सबसे ज़्यादा specific हो, वह जीतती है)। दो तरीके हैं table भरने के: static routing (admin हाथ से लिखता है) और dynamic routing (राउटर आपस में बात करके रास्ता सीखते हैं — OSPF, BGP जैसे protocol)। सबसे छोटा रास्ता निकालने का मशहूर algorithm है Dijkstra — वह हर node तक का सबसे कम खर्चा वाला रास्ता ढूँढता है।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असली ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish: 'Sochiye aap Delhi se Patna ja rahe ho. Aapke paas ek map hai (routing table) jisme likha hai: "Patna ke liye NH-19 lo, phir left". Raste mein har chauraha (router) aapko agla mod batata hai — koi ek chauraha poora rasta nahi batata, sirf agla kadam. Agar ek rasta band ho (jaam ya sadak kharab), to chauraha aapko dusre raste se bhej deta hai — yahi dynamic routing hai. Longest prefix match jaise hai: aap "Bihar, Patna, Boring Road" bolte ho — pehle Bihar wala board milega, phir Patna wala, phir Boring Road wala; jo board sabse specific hai, wohi sahi rasta deta hai.',
            english: 'Imagine you are travelling from Delhi to Patna. You have a map (the routing table) that says: “For Patna, take NH-19, then turn left”. On the way, every crossing (router) tells you only the next turn — no single crossing tells you the whole route, only the next step. If one road is closed (a jam or a broken road), the crossing sends you by another road — that is dynamic routing. Longest prefix match is like this: you say “Bihar, Patna, Boring Road” — first you find the Bihar board, then the Patna board, then the Boring Road board; the most specific board gives the right way.',
            hindi: 'सोचिए आप दिल्ली से पटना जा रहे हैं। आपके पास एक map है (routing table) जिसमें लिखा है: "पटना के लिए NH-19 लो, फिर left"। रास्ते में हर चौराहा (राउटर) आपको अगला मोड़ बताता है — कोई एक चौराहा पूरा रास्ता नहीं बताता, सिर्फ़ अगला कदम। अगर एक रास्ता बंद हो (जाम या सड़क खराब), तो चौराहा आपको दूसरे रस्ते से भेज देता है — यही dynamic routing है। Longest prefix match जैसे है: आप "बिहार, पटना, Boring Road" बोलते हैं — पहले बिहार वाला बोर्ड मिलेगा, फिर पटना वाला, फिर Boring Road वाला; जो बोर्ड सबसे specific है, वही सही रास्ता देता है।',
          },
        },
        {
          heading: {
            hinglish: 'Step by step — worked example',
            english: 'Step by step — worked example',
            hindi: 'स्टेप बाय स्टेप — हल किया हुआ उदाहरण',
          },
          body: {
            hinglish: 'Worked example 1 — longest prefix match. Router ki table: 192.168.1.0/24 → Rasta A; 192.168.1.64/26 → Rasta B. Packet ka destination 192.168.1.100 hai. Dono entry match karti hain (100 number 0–255 mein bhi hai aur 64–127 mein bhi). Jeet-ta hai /26, kyunki woh zyada specific hai — packet Rasta B se jayega. Worked example 2 — Dijkstra. Chaar sheher (node): A, B, C, D. Raste ka kharcha: A–B 2, A–C 5, B–C 1, B–D 4, C–D 2. A se D ka sabse sasta rasta dhoondho. Raste: A–B–D = 2 + 4 = 6; A–C–D = 5 + 2 = 7; A–B–C–D = 2 + 1 + 2 = 5. Sabse sasta = 5, rasta A–B–C–D. Dijkstra aise hi har node ka sabse kam kharcha nikalta hai — pehle A se B (2), phir B se C (2 + 1 = 3), phir C se D (3 + 2 = 5).',
            english: 'Worked example 1 — longest prefix match. The router’s table: 192.168.1.0/24 → Path A; 192.168.1.64/26 → Path B. The packet’s destination is 192.168.1.100. Both entries match (100 lies in 0–255 and also in 64–127). The /26 wins because it is more specific — the packet goes by Path B. Worked example 2 — Dijkstra. Four cities (nodes): A, B, C, D. Path costs: A–B 2, A–C 5, B–C 1, B–D 4, C–D 2. Find the cheapest path from A to D. Paths: A–B–D = 2 + 4 = 6; A–C–D = 5 + 2 = 7; A–B–C–D = 2 + 1 + 2 = 5. Cheapest = 5, path A–B–C–D. Dijkstra finds the lowest cost to every node the same way — first A to B (2), then B to C (2 + 1 = 3), then C to D (3 + 2 = 5).',
            hindi: 'हल किया हुआ उदाहरण 1 — longest prefix match। राउटर की table: 192.168.1.0/24 → रास्ता A; 192.168.1.64/26 → रास्ता B। Packet का destination 192.168.1.100 है। दोनों entry match करती हैं (100 नंबर 0–255 में भी है और 64–127 में भी)। जीतता है /26, क्योंकि वह ज़्यादा specific है — packet रास्ता B से जाएगा। उदाहरण 2 — Dijkstra। चार शहर (node): A, B, C, D। रस्ते का खर्चा: A–B 2, A–C 5, B–C 1, B–D 4, C–D 2। A से D का सबसे सस्ता रास्ता ढूँढो। रस्ते: A–B–D = 2 + 4 = 6; A–C–D = 5 + 2 = 7; A–B–C–D = 2 + 1 + 2 = 5। सबसे सस्ता = 5, रास्ता A–B–C–D। Dijkstra ऐसे ही हर node का सबसे कम खर्चा निकालता है — पहले A से B (2), फिर B से C (2 + 1 = 3), फिर C से D (3 + 2 = 5)।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur kyun hote hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और क्यों होती हैं',
          },
          body: {
            hinglish: 'Galti 1: "Router aur switch ek hi hain" — nahi. Switch ek hi network ke andar packet bhejta hai (MAC se), router ek network se dusre network tak bhejta hai (IP se). Galti 2: "Longest prefix mein chhota number jeet-ta hai" — ulta hai: /26, /24 se zyada specific hai, isliye /26 jeet-ta hai. Galti 3: "Dijkstra sirf ek rasta nikalta hai" — nahi, woh har node tak ka sabse sasta rasta nikalta hai, ek-ek karke.',
            english: 'Mistake 1: “A router and a switch are the same” — no. A switch sends packets inside one network (by MAC); a router sends them from one network to another (by IP). Mistake 2: “In longest prefix match the smaller number wins” — it is the opposite: /26 is more specific than /24, so /26 wins. Mistake 3: “Dijkstra finds only one path” — no, it finds the cheapest path to every node, one by one.',
            hindi: 'गलती 1: "राउटर और स्विच एक ही हैं" — नहीं। स्विच एक ही नेटवर्क के अंदर packet भेजता है (MAC से), राउटर एक नेटवर्क से दूसरे नेटवर्क तक भेजता है (IP से)। गलती 2: "Longest prefix में छोटा नंबर जीतता है" — उल्टा है: /26, /24 से ज़्यादा specific है, इसलिए /26 जीतता है। गलती 3: "Dijkstra सिर्फ़ एक रास्ता निकालता है" — नहीं, वह हर node तक का सबसे सस्ता रास्ता निकालता है, एक-एक करके।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास मामले',
          },
          body: {
            hinglish: 'Edge case 1: routing loop — do router ek dusre ko packet bhejte rahein aur packet kabhi pahunche nahi; TTL (Time To Live) isse rokta hai — har hop par TTL 1 kam hota hai, 0 hote hi packet khatm. Edge case 2: ek hi destination ke do barabar raste — router load share kar sakta hai ya ek ko backup rakh sakta hai. Edge case 3: default route na ho aur table mein entry na ho — packet drop ho jata hai aur "destination unreachable" jawab aata hai.',
            english: 'Edge case 1: routing loop — two routers keep sending a packet to each other and it never arrives; TTL (Time To Live) stops this — it drops by 1 at each hop, and the packet dies at 0. Edge case 2: two equal paths to one destination — the router can share the load or keep one as backup. Edge case 3: no default route and no entry in the table — the packet is dropped and a “destination unreachable” answer comes back.',
            hindi: 'खास मामला 1: routing loop — दो राउटर एक दूसरे को packet भेजते रहें और packet कभी पहुँचे नहीं; TTL (Time To Live) इसे रोकता है — हर hop पर TTL 1 कम होता है, 0 होते ही packet खत्म। खास मामला 2: एक ही destination के दो बराबर रस्ते — राउटर load share कर सकता है या एक को backup रख सकता है। खास मामला 3: default route न हो और table में entry न हो — packet drop हो जाता है और "destination unreachable" जवाब आता है।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal diya to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दिया तो क्या होगा?',
          },
          body: {
            hinglish: 'Agar TTL hata diya jaye, to loop wala packet hamesha ke liye ghoomta rahega aur network bhar jayega. Agar router ki table khaali ho, to woh sirf default route se bhejega — sab packet ek hi taraf jayenge. Agar dynamic routing ki jagah sirf static use karein, to rasta band hote hi packet atak jayenge, kyunki koi naya rasta seekhne wala nahi hoga.',
            english: 'If TTL were removed, a looping packet would circle forever and flood the network. If a router’s table were empty, it would send everything only by the default route — all packets would go one way. If only static routing were used instead of dynamic, packets would get stuck the moment a path closed, because nobody would learn a new path. If the straight path were chosen every time instead of Dijkstra, everyone would pile onto the crowded road.',
            hindi: 'अगर TTL हटा दिया जाए, तो loop वाला packet हमेशा के लिए घूमता रहेगा और नेटवर्क भर जाएगा। अगर राउटर की table खाली हो, तो वह सिर्फ़ default route से भेजेगा — सब packet एक ही तरफ़ जाएँगे। अगर dynamic routing की जगह सिर्फ़ static इस्तेमाल करें, तो रास्ता बंद होते ही packet अटक जाएँगे, क्योंकि कोई नया रास्ता सीखने वाला नहीं होगा।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'Router IP dekh kar rasta chunta hai, switch MAC dekh kar. Longest prefix match mein sabse specific entry jeet-ti hai — /26, /24 se jeet-ta hai. Dijkstra har node tak ka sabse sasta rasta nikalta hai (hamari example mein A se D = 5, rasta A–B–C–D). TTL loop ko rokta hai. Agle article mein network security — firewall, encryption aur password ki samajh.',
            english: 'A router chooses the path by IP; a switch by MAC. In longest prefix match the most specific entry wins — /26 beats /24. Dijkstra finds the cheapest path to every node (in our example A to D = 5, path A–B–C–D). TTL stops loops. In the next article: network security — firewalls, encryption and passwords.',
            hindi: 'राउटर IP देखकर रास्ता चुनता है, स्विच MAC देखकर। Longest prefix match में सबसे specific entry जीतती है — /26, /24 से जीतता है। Dijkstra हर node तक का सबसे सस्ता रास्ता निकालता है (हमारी example में A से D = 5, रास्ता A–B–C–D)। TTL loop को रोकता है। अगले आर्टिकल में नेटवर्क सुरक्षा — firewall, encryption और पासवर्ड की समझ।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Dijkstra — A se D tak',
          english: 'Dijkstra — from A to D',
          hindi: 'Dijkstra — A से D तक',
        },
        nodes: [
          { t: { hinglish: 'A se B = 2', english: 'A to B = 2', hindi: 'A से B = 2' }, s: { hinglish: 'Sabse pehle B pakka', english: 'B is settled first', hindi: 'सबसे पहले B पक्का' } },
          { t: { hinglish: 'B se C = 2 + 1 = 3', english: 'B to C = 2 + 1 = 3', hindi: 'B से C = 2 + 1 = 3' }, s: { hinglish: 'A–C seedha 5 se sasta', english: 'Cheaper than direct A–C (5)', hindi: 'A–C सीधे 5 से सस्ता' } },
          { t: { hinglish: 'C se D = 3 + 2 = 5', english: 'C to D = 3 + 2 = 5', hindi: 'C से D = 3 + 2 = 5' }, s: { hinglish: 'A–B–D (6) aur A–C–D (7) se sasta', english: 'Cheaper than A–B–D (6) and A–C–D (7)', hindi: 'A–B–D (6) और A–C–D (7) से सस्ता' } },
          { t: { hinglish: 'Sabse sasta: A–B–C–D = 5', english: 'Cheapest: A–B–C–D = 5', hindi: 'सबसे सस्ता: A–B–C–D = 5' }, s: { hinglish: 'Dijkstra ka jawab', english: 'Dijkstra’s answer', hindi: 'Dijkstra का जवाब' } },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'Table: 192.168.1.0/24 → A, 192.168.1.64/26 → B. Destination 192.168.1.100 kis raste se jayega?',
            english: 'Table: 192.168.1.0/24 → A, 192.168.1.64/26 → B. Which path will destination 192.168.1.100 take?',
            hindi: 'Table: 192.168.1.0/24 → A, 192.168.1.64/26 → B। Destination 192.168.1.100 किस रस्ते से जाएगा?',
          },
          opts: [
            { hinglish: 'Rasta A, kyunki /24 pehle likha hai', english: 'Path A, because /24 is written first', hindi: 'रास्ता A, क्योंकि /24 पहले लिखा है' },
            { hinglish: 'Rasta B, kyunki /26 zyada specific hai', english: 'Path B, because /26 is more specific', hindi: 'रास्ता B, क्योंकि /26 ज़्यादा specific है' },
            { hinglish: 'Dono se, packet bat jayega', english: 'Both — the packet will split', hindi: 'दोनों से, packet बँट जाएगा' },
            { hinglish: 'Koi rasta nahi, packet drop hoga', english: 'No path — the packet will be dropped', hindi: 'कोई रास्ता नहीं, packet drop होगा' },
          ],
          ans: 1,
          expl: {
            hinglish: '100 dono range mein aata hai, lekin longest prefix match mein /26 jeet-ta hai — woh zyada specific hai.',
            english: '100 falls in both ranges, but in longest prefix match /26 wins — it is more specific.',
            hindi: '100 दोनों range में आता है, लेकिन longest prefix match में /26 जीतता है — वह ज़्यादा specific है।',
          },
        },
        {
          q: {
            hinglish: 'Dijkstra example mein A se D ka sabse sasta rasta kaunsa hai aur kharcha kitna?',
            english: 'In the Dijkstra example, what is the cheapest path from A to D and what is its cost?',
            hindi: 'Dijkstra example में A से D का सबसे सस्ता रास्ता कौन सा है और खर्चा कितना?',
          },
          opts: [
            { hinglish: 'A–B–D, kharcha 6', english: 'A–B–D, cost 6', hindi: 'A–B–D, खर्चा 6' },
            { hinglish: 'A–C–D, kharcha 7', english: 'A–C–D, cost 7', hindi: 'A–C–D, खर्चा 7' },
            { hinglish: 'A–B–C–D, kharcha 5', english: 'A–B–C–D, cost 5', hindi: 'A–B–C–D, खर्चा 5' },
            { hinglish: 'A–C–B–D, kharcha 10', english: 'A–C–B–D, cost 10', hindi: 'A–C–B–D, खर्चा 10' },
          ],
          ans: 2,
          expl: {
            hinglish: 'A–B–C–D = 2 + 1 + 2 = 5, jo A–B–D (6) aur A–C–D (7) dono se kam hai.',
            english: 'A–B–C–D = 2 + 1 + 2 = 5, which is less than both A–B–D (6) and A–C–D (7).',
            hindi: 'A–B–C–D = 2 + 1 + 2 = 5, जो A–B–D (6) और A–C–D (7) दोनों से कम है।',
          },
        },
        {
          q: {
            hinglish: 'TTL ka kaam kya hai?',
            english: 'What is the job of TTL?',
            hindi: 'TTL का काम क्या है?',
          },
          opts: [
            { hinglish: 'Packet ko tez karna', english: 'Making the packet faster', hindi: 'Packet को तेज़ करना' },
            { hinglish: 'Routing loop mein packet ko hamesha ke liye ghoomne se rokna', english: 'Stopping a packet from circling forever in a routing loop', hindi: 'Routing loop में packet को हमेशा के लिए घूमने से रोकना' },
            { hinglish: 'Packet ko encrypt karna', english: 'Encrypting the packet', hindi: 'Packet को encrypt करना' },
            { hinglish: 'IP address badalna', english: 'Changing the IP address', hindi: 'IP address बदलना' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Har hop par TTL 1 kam hota hai; 0 hote hi packet khatm ho jata hai, isliye loop mein packet hamesha nahi ghoomta.',
            english: 'TTL drops by 1 at each hop; the packet dies at 0, so it cannot circle in a loop forever.',
            hindi: 'हर hop पर TTL 1 कम होता है; 0 होते ही packet खत्म हो जाता है, इसलिए loop में packet हमेशा नहीं घूमता।',
          },
        },
        {
          q: {
            hinglish: 'Kaunsa statement GALAT hai?',
            english: 'Which statement is WRONG?',
            hindi: 'कौन सा कथन गलत है?',
          },
          opts: [
            { hinglish: 'Router IP se rasta chunta hai, switch MAC se', english: 'A router chooses the path by IP, a switch by MAC', hindi: 'राउटर IP से रास्ता चुनता है, स्विच MAC से' },
            { hinglish: 'Dynamic routing mein router aapas mein rasta seekhte hain', english: 'In dynamic routing, routers learn paths from each other', hindi: 'Dynamic routing में राउटर आपस में रास्ता सीखते हैं' },
            { hinglish: 'Packet ka aane aur jaane ka rasta hamesha ek hi hota hai', english: 'A packet’s going and returning paths are always the same', hindi: 'Packet का आने और जाने का रास्ता हमेशा एक ही होता है' },
            { hinglish: 'Default route tab kaam aata hai jab table mein entry na ho', english: 'The default route is used when the table has no entry', hindi: 'Default route तब काम आता है जब table में entry न हो' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Aane aur jaane ka rasta alag ho sakta hai — routing har taraf se alag faisla leta hai.',
            english: 'The going and returning paths can differ — routing decides separately in each direction.',
            hindi: 'आने और जाने का रास्ता अलग हो सकता है — routing हर तरफ़ से अलग फ़ैसला लेता है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Dijkstra khud lagao',
          english: 'Work out Dijkstra yourself',
          hindi: 'Dijkstra खुद लगाओ',
        },
        task: {
          hinglish: 'Pen-paper task: node A, B, C. Kharcha: A–B 3, B–C 2, A–C 10. (a) A se C ka sabse sasta rasta kaunsa hai? (b) Kharcha kitna? (c) Seedha rasta kitna mehenga padta? Neeche script chalao aur milao. Done tab jab teeno jawab match karein.',
          english: 'Pen-and-paper task: nodes A, B, C. Costs: A–B 3, B–C 2, A–C 10. (a) What is the cheapest path from A to C? (b) What is its cost? (c) How much more expensive is the direct path? Run the script below and match. You are done when all three answers match.',
          hindi: 'पेन-पेपर टास्क: node A, B, C। खर्चा: A–B 3, B–C 2, A–C 10। (a) A से C का सबसे सस्ता रास्ता कौन सा है? (b) खर्चा कितना? (c) सीधा रास्ता कितना महँगा पड़ता? नीचे स्क्रिप्ट चलाओ और मिलाओ। जब तीनों जवाब मिल जाएँ, तब टास्क पूरा।',
        },
        language: 'python',
        starter: 'ab, bc, ac = 3, 2, 10\nvia_b = ab + bc\nprint("A-B-C kharcha:", via_b)\nprint("A-C seedha kharcha:", ac)\nprint("Sabse sasta rasta: A-B-C" if via_b < ac else "Sabse sasta rasta: A-C")\nprint("Seedha rasta kitna mehenga:", ac - via_b)\n',
        expected: '(a) A–B–C. (b) 5. (c) Seedha rasta 10 ka hai, 5 zyada mehenga.',
      },
      readMinutes: 12,
    },
    {
      id: 'cn-security',
      subjectId: 'computer-networks',
      title: {
        hinglish: 'Network Security Basics — firewall, encryption, password',
        english: 'Network security basics — firewall, encryption, passwords',
        hindi: 'नेटवर्क सुरक्षा Basics — firewall, encryption, पासवर्ड',
      },
      summary: {
        hinglish: 'Network ko hamle se kaise bachayein — firewall ke rules, encryption ke hisaab aur mazboot password ki samajh.',
        english: 'How to protect a network from attacks — firewall rules, encryption maths and strong passwords.',
        hindi: 'नेटवर्क को हमले से कैसे बचाएँ — firewall के rules, encryption के हिसाब और मज़बूत पासवर्ड की समझ।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish: 'Network security ka matlab hai apne network aur data ko galat logon se bachana. Teen bade hathiyaar hain. Firewall: network ke gate par khada chaukidar — rule ke hisaab se packet ko andar aane deta hai ya rokta hai. Jaise "sirf port 443 wala traffic aane do, baaki sab roko". Encryption: data ko aise badal dena ki beech mein koi padh na sake — sirf jis ke paas key hai wohi kholega. Symmetric encryption mein ek hi key se taala lagta hai aur khulta hai; asymmetric mein do key hoti hain — public key se taala lagta hai, private key se khulta hai. Authentication: ye pakka karna ki samne wala wahi hai jo woh kehta hai — password, OTP ya fingerprint se.',
            english: 'Network security means protecting your network and data from the wrong people. There are three big tools. Firewall: the guard standing at the network’s gate — it lets a packet in or stops it according to rules. For example, “allow only traffic on port 443, block the rest”. Encryption: changing data so nobody in the middle can read it — only the one with the key can open it. In symmetric encryption one key both locks and unlocks; in asymmetric there are two keys — the public key locks, the private key unlocks. Authentication: making sure the person opposite is really who they claim to be — by password, OTP or fingerprint.',
            hindi: 'नेटवर्क सुरक्षा का मतलब है अपने नेटवर्क और डेटा को गलत लोगों से बचाना। तीन बड़े हथियार हैं। Firewall: नेटवर्क के गेट पर खड़ा चौकीदार — rule के हिसाब से packet को अंदर आने देता है या रोकता है। जैसे "सिर्फ़ port 443 वाला traffic आने दो, बाकी सब रोको"। Encryption: डेटा को ऐसे बदल देना कि बीच में कोई पढ़ न सके — सिर्फ़ जिसके पास key है वही खोलेगा। Symmetric encryption में एक ही key से ताला लगता है और खुलता है; asymmetric में दो key होती हैं — public key से ताला लगता है, private key से खुलता है। Authentication: यह पक्का करना कि सामने वाला वही है जो वह कहता है — पासवर्ड, OTP या fingerprint से।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असली ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish: 'Sochiye aapke ghar ka main gate. Firewall wahi gate aur chaukidar hai — chaukidar ke paas list hai: "doodh wala andar, anjaan aadmi bahar". Encryption jaise hai chitthi ko taale wale dabbe mein band karna — dabba koi bhi utha le, andar kya hai, woh sirf chabi wala jaanta hai. Symmetric encryption jaise hai ek hi chabi se taala lagana aur kholna — chabi dono ke paas hai. Asymmetric jaise hai post box: koi bhi chitthi daal sakta hai (public key), lekin nikaal sirf wahi sakta hai jis ke paas andar ki chabi hai (private key).',
            english: 'Think of your home’s main gate. The firewall is that gate and its guard — the guard has a list: “milkman inside, stranger outside”. Encryption is like locking a letter in a box with a lock — anyone can pick up the box, but only the one with the key knows what is inside. Symmetric encryption is like locking and unlocking with the same key — both sides have the key. Asymmetric is like a post box: anyone can drop a letter in (public key), but only the one with the inner key can take it out (private key).',
            hindi: 'सोचिए आपके घर का main gate। Firewall वही गेट और चौकीदार है — चौकीदार के पास list है: "दूध वाला अंदर, अनजान आदमी बाहर"। Encryption जैसे है चिट्ठी को ताले वाले डिब्बे में बंद करना — डिब्बा कोई भी उठा ले, अंदर क्या है, वह सिर्फ़ चाबी वाला जानता है। Symmetric encryption जैसे है एक ही चाबी से ताला लगाना और खोलना — चाबी दोनों के पास है। Asymmetric जैसे है पोस्ट बॉक्स: कोई भी चिट्ठी डाल सकता है (public key), लेकिन निकाल सिर्फ़ वही सकता है जिसके पास अंदर की चाबी है (private key)।',
          },
        },
        {
          heading: {
            hinglish: 'Step by step — worked example',
            english: 'Step by step — worked example',
            hindi: 'स्टेप बाय स्टेप — हल किया हुआ उदाहरण',
          },
          body: {
            hinglish: 'Worked example 1 — Caesar cipher. Har akshar ko 3 aage badhao. "HELLO" banta hai "KHOOR": H→K, E→H, L→O, L→O, O→R. Ulta karne ke liye 3 peeche jao. Ye cipher bahut kamzor hai — sirf 25 shift ho sakte hain, koi bhi try karke tod dega. Worked example 2 — key kitni chahiye? 10 log hain, har do ke beech alag symmetric key chahiye. Keys = n × (n − 1) ÷ 2 = 10 × 9 ÷ 2 = 45 keys. Asymmetric mein har ek ko sirf apna key pair chahiye — 10 pair. Isiliye bade network mein asymmetric behtar hai. Worked example 3 — firewall rule order. Rule 1: port 22 (SSH) sirf office IP se allow. Rule 2: baaki sab block. Agar rule 2 pehle aa jaye to office IP bhi block ho jayega — isliye firewall rule upar se neeche check karta hai, pehla match jeet-ta hai.',
            english: 'Worked example 1 — Caesar cipher. Move every letter 3 steps forward. “HELLO” becomes “KHOOR”: H→K, E→H, L→O, L→O, O→R. To reverse it, move 3 steps back. This cipher is very weak — there are only 25 possible shifts, and anyone can break it by trying them. Worked example 2 — how many keys are needed? There are 10 people, and every pair needs a different symmetric key. Keys = n × (n − 1) ÷ 2 = 10 × 9 ÷ 2 = 45 keys. In asymmetric, each person needs only their own key pair — 10 pairs. That is why asymmetric is better in a big network. Worked example 3 — firewall rule order. Rule 1: port 22 (SSH) allowed only from the office IP. Rule 2: block everything else. If rule 2 came first, even the office IP would be blocked — which is why a firewall checks rules from top to bottom, and the first match wins.',
            hindi: 'हल किया हुआ उदाहरण 1 — Caesar cipher। हर अक्षर को 3 आगे बढ़ाओ। "HELLO" बनता है "KHOOR": H→K, E→H, L→O, L→O, O→R। उल्टा करने के लिए 3 पीछे जाओ। यह cipher बहुत कमज़ोर है — सिर्फ़ 25 shift हो सकते हैं, कोई भी try करके तोड़ देगा। उदाहरण 2 — key कितनी चाहिए? 10 लोग हैं, हर दो के बीच अलग symmetric key चाहिए। Keys = n × (n − 1) ÷ 2 = 10 × 9 ÷ 2 = 45 keys। Asymmetric में हर एक को सिर्फ़ अपना key pair चाहिए — 10 pair। इसीलिए बड़े नेटवर्क में asymmetric बेहतर है। उदाहरण 3 — firewall rule order। Rule 1: port 22 (SSH) सिर्फ़ office IP से allow। Rule 2: बाकी सब block। अगर rule 2 पहले आ जाए तो office IP भी block हो जाएगा — इसीलिए firewall rule ऊपर से नीचे चेक करता है, पहला match जीतता है।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur kyun hote hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और क्यों होती हैं',
          },
          body: {
            hinglish: 'Galti 1: "Firewall lag gaya, ab sab safe hai" — nahi. Firewall bahar ke hamle rokta hai, lekin phishing link par click karne se nahi bacha sakta. Galti 2: "Encryption matlab authentication" — nahi. Encryption data chhupata hai, authentication pehchan pakki karta hai — dono alag kaam hain. Galti 3: "Mazboot password ka matlab lamba password" — sirf lamba kaafi nahi; "password123" lamba hai lekin kamzor hai, kyunki woh common hai. Galti 4: "OTP kisi ko bata dena" — bank, dost ya police — koi bhi OTP nahi maangta; maange to woh hamla hai.',
            english: 'Mistake 1: “The firewall is on, so everything is safe now” — no. A firewall stops outside attacks, but it cannot save you from clicking a phishing link. Mistake 2: “Encryption means authentication” — no. Encryption hides data; authentication confirms identity — two different jobs. Mistake 3: “A strong password means a long password” — length alone is not enough; “password123” is long but weak because it is common. Mistake 4: “Sharing an OTP with someone” — no bank, friend or police officer asks for an OTP; if someone asks, it is an attack.',
            hindi: 'गलती 1: "Firewall लग गया, अब सब safe है" — नहीं। Firewall बाहर के हमले रोकता है, लेकिन phishing link पर click करने से नहीं बचा सकता। गलती 2: "Encryption मतलब authentication" — नहीं। Encryption डेटा छुपाता है, authentication पहचान पक्की करता है — दोनों अलग काम हैं। गलती 3: "मज़बूत पासवर्ड का मतलब लंबा पासवर्ड" — सिर्फ़ लंबा काफ़ी नहीं; "password123" लंबा है लेकिन कमज़ोर है, क्योंकि वह common है। गलती 4: "OTP किसी को बता देना" — बैंक, दोस्त या पुलिस — कोई भी OTP नहीं माँगता; माँगे तो वह हमला है।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास मामले',
          },
          body: {
            hinglish: 'Edge case 1: firewall ke rule mein galti — ek galat rule poora office band kar sakta hai; isiliye rule badalne se pehle test karte hain. Edge case 2: private key kho jaye — asymmetric mein private key kho jaye to data kabhi nahi khulega; isiliye backup zaroori hai. Edge case 3: DDoS mein hamla ek jagah se nahi, hazaaron device se aata hai (botnet) — ek IP block karne se kuch nahi hoga.',
            english: 'Edge case 1: a mistake in a firewall rule — one wrong rule can shut a whole office; that is why rules are tested before changing them. Edge case 2: losing the private key — in asymmetric encryption, if the private key is lost the data can never be opened; that is why a backup matters. Edge case 3: in a DDoS attack the traffic comes not from one place but from thousands of devices (a botnet) — blocking one IP does nothing.',
            hindi: 'खास मामला 1: firewall के rule में गलती — एक गलत rule पूरा ऑफिस बंद कर सकता है; इसीलिए rule बदलने से पहले test करते हैं। खास मामला 2: private key खो जाए — asymmetric में private key खो जाए तो डेटा कभी नहीं खुलेगा; इसीलिए backup ज़रूरी है। खास मामला 3: DDoS में हमला एक जगह से नहीं, हज़ारों डिवाइस से आता है (botnet) — एक IP block करने से कुछ नहीं होगा।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal diya to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दिया तो क्या होगा?',
          },
          body: {
            hinglish: 'Agar firewall hata diya jaye, to har packet seedha andar aa jayega — server par har port khula dikhega aur hamla aasan ho jayega. Agar encryption hata diya jaye, to Wi-Fi par baitha koi bhi aapke message padh lega. Agar password ki jagah sirf naam se login ho, to koi bhi kisi ke bhi account mein ghus jayega. Security ek layer nahi, kai layer hoti hai — firewall + encryption + mazboot password + update, sab ek saath.',
            english: 'If the firewall were removed, every packet would walk straight in — every port on the server would look open and attacks would become easy. If encryption were removed, anyone on the Wi-Fi could read your messages. If login needed only a name instead of a password, anyone could walk into anyone’s account. Security is not one layer but many layers — firewall + encryption + strong password + updates, all together.',
            hindi: 'अगर firewall हटा दिया जाए, तो हर packet सीधे अंदर आ जाएगा — सर्वर पर हर port खुला दिखेगा और हमला आसान हो जाएगा। अगर encryption हटा दिया जाए, तो Wi-Fi पर बैठा कोई भी आपके मैसेज पढ़ लेगा। अगर पासवर्ड की जगह सिर्फ़ नाम से login हो, तो कोई भी किसी के भी account में घुस जाएगा। Security एक layer नहीं, कई layer होती है — firewall + encryption + मज़बूत पासवर्ड + update, सब एक साथ।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'Firewall gate ka chaukidar hai, encryption data ka taala hai, authentication pehchan ki jaanch hai. Symmetric mein ek key, asymmetric mein key pair. 10 logon ke liye symmetric mein 45 key chahiye, asymmetric mein 10 pair. Caesar cipher mein HELLO → KHOOR. Phishing, DDoS aur man-in-the-middle se savdhan raho — aur OTP kabhi kisi ko mat batao. Networks subject yahin khatm — ab aap IP, TCP, DNS, routing aur security ka hisaab kar sakte ho.',
            english: 'The firewall is the guard at the gate, encryption is the lock on the data, authentication is the identity check. Symmetric uses one key, asymmetric uses a key pair. For 10 people, symmetric needs 45 keys, asymmetric needs 10 pairs. In Caesar cipher, HELLO → KHOOR. Stay careful of phishing, DDoS and man-in-the-middle — and never share an OTP with anyone. That ends the Networks subject — you can now work out IP, TCP, DNS, routing and security.',
            hindi: 'Firewall गेट का चौकीदार है, encryption डेटा का ताला है, authentication पहचान की जाँच है। Symmetric में एक key, asymmetric में key pair। 10 लोगों के लिए symmetric में 45 key चाहिए, asymmetric में 10 pair। Caesar cipher में HELLO → KHOOR। Phishing, DDoS और man-in-the-middle से सावधान रहो — और OTP कभी किसी को मत बताओ। Networks subject यहीं खत्म — अब आप IP, TCP, DNS, routing और security का हिसाब कर सकते हो।',
          },
        },
      ],
      diagram: {
        kind: 'boxes',
        title: {
          hinglish: 'Security ki teen parat',
          english: 'The three layers of security',
          hindi: 'सुरक्षा की तीन परत',
        },
        nodes: [
          { t: { hinglish: 'Firewall', english: 'Firewall', hindi: 'Firewall' }, s: { hinglish: 'Gate ka chaukidar — rule se packet rokna ya aane dena', english: 'Guard at the gate — block or allow packets by rule', hindi: 'गेट का चौकीदार — rule से packet रोकना या आने देना' } },
          { t: { hinglish: 'Encryption', english: 'Encryption', hindi: 'Encryption' }, s: { hinglish: 'Data ka taala — symmetric 1 key, asymmetric key pair', english: 'Lock on data — symmetric 1 key, asymmetric key pair', hindi: 'डेटा का ताला — symmetric 1 key, asymmetric key pair' } },
          { t: { hinglish: 'Authentication', english: 'Authentication', hindi: 'Authentication' }, s: { hinglish: 'Pehchan ki jaanch — password, OTP, fingerprint', english: 'Identity check — password, OTP, fingerprint', hindi: 'पहचान की जाँच — पासवर्ड, OTP, fingerprint' } },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'Caesar cipher (shift 3) mein "HELLO" kya banega?',
            english: 'In Caesar cipher (shift 3), what does "HELLO" become?',
            hindi: 'Caesar cipher (shift 3) में "HELLO" क्या बनेगा?',
          },
          opts: [
            { hinglish: 'HELLO', english: 'HELLO', hindi: 'HELLO' },
            { hinglish: 'KHOOR', english: 'KHOOR', hindi: 'KHOOR' },
            { hinglish: 'EBIIL', english: 'EBIIL', hindi: 'EBIIL' },
            { hinglish: 'JGNNQ', english: 'JGNNQ', hindi: 'JGNNQ' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Har akshar 3 aage: H→K, E→H, L→O, L→O, O→R — isliye KHOOR.',
            english: 'Every letter moves 3 forward: H→K, E→H, L→O, L→O, O→R — so KHOOR.',
            hindi: 'हर अक्षर 3 आगे: H→K, E→H, L→O, L→O, O→R — इसलिए KHOOR।',
          },
        },
        {
          q: {
            hinglish: '10 log hain. Symmetric encryption mein kitni alag keys chahiye?',
            english: 'There are 10 people. How many different keys does symmetric encryption need?',
            hindi: '10 लोग हैं। Symmetric encryption में कितनी अलग keys चाहिए?',
          },
          opts: [
            { hinglish: '10', english: '10', hindi: '10' },
            { hinglish: '20', english: '20', hindi: '20' },
            { hinglish: '45', english: '45', hindi: '45' },
            { hinglish: '100', english: '100', hindi: '100' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Har jode ke liye alag key: 10 × 9 ÷ 2 = 45 keys. Asymmetric mein sirf 10 key pair kaafi hote.',
            english: 'Every pair needs its own key: 10 × 9 ÷ 2 = 45 keys. In asymmetric, just 10 key pairs are enough.',
            hindi: 'हर जोड़े के लिए अलग key: 10 × 9 ÷ 2 = 45 keys। Asymmetric में सिर्फ़ 10 key pair काफ़ी होते।',
          },
        },
        {
          q: {
            hinglish: 'Firewall rule: Rule 1 — port 22 sirf office IP se allow; Rule 2 — baaki sab block. Office IP se port 22 par kya hoga?',
            english: 'Firewall rules: Rule 1 — port 22 allowed only from the office IP; Rule 2 — block everything else. What happens on port 22 from the office IP?',
            hindi: 'Firewall rule: Rule 1 — port 22 सिर्फ़ office IP से allow; Rule 2 — बाकी सब block। Office IP से port 22 पर क्या होगा?',
          },
          opts: [
            { hinglish: 'Block hoga, kyunki Rule 2 sab block karta hai', english: 'Blocked, because Rule 2 blocks everything', hindi: 'Block होगा, क्योंकि Rule 2 सब block करता है' },
            { hinglish: 'Allow hoga, kyunki Rule 1 pehle match karta hai', english: 'Allowed, because Rule 1 matches first', hindi: 'Allow होगा, क्योंकि Rule 1 पहले match करता है' },
            { hinglish: 'Dono rule ek saath lagenge', english: 'Both rules apply together', hindi: 'दोनों rule एक साथ लगेंगे' },
            { hinglish: 'Port 22 hamesha block rehta hai', english: 'Port 22 is always blocked', hindi: 'Port 22 हमेशा block रहता है' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Firewall rule upar se neeche check karta hai — pehla match jeet-ta hai, isliye office IP Rule 1 se allow ho jayega.',
            english: 'A firewall checks rules from top to bottom — the first match wins, so the office IP is allowed by Rule 1.',
            hindi: 'Firewall rule ऊपर से नीचे चेक करता है — पहला match जीतता है, इसलिए office IP Rule 1 से allow हो जाएगा।',
          },
        },
        {
          q: {
            hinglish: 'Kaunsa statement GALAT hai?',
            english: 'Which statement is WRONG?',
            hindi: 'कौन सा कथन गलत है?',
          },
          opts: [
            { hinglish: 'Encryption data chhupata hai, authentication pehchan pakki karta hai', english: 'Encryption hides data; authentication confirms identity', hindi: 'Encryption डेटा छुपाता है, authentication पहचान पक्की करता है' },
            { hinglish: 'Bank kabhi OTP nahi maangta', english: 'A bank never asks for an OTP', hindi: 'बैंक कभी OTP नहीं माँगता' },
            { hinglish: 'Firewall lagane se phishing se bhi bachav ho jata hai', english: 'A firewall also protects against phishing', hindi: 'Firewall लगाने से phishing से भी बचाव हो जाता है' },
            { hinglish: 'DDoS mein hazaaron device se packet aate hain', english: 'In a DDoS, packets come from thousands of devices', hindi: 'DDoS में हज़ारों डिवाइस से packet आते हैं' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Firewall bahar ke packet rokta hai, lekin aap khud phishing link par click karo to woh nahi rok sakta.',
            english: 'A firewall stops outside packets, but it cannot stop you from clicking a phishing link yourself.',
            hindi: 'Firewall बाहर के packet रोकता है, लेकिन आप खुद phishing link पर click करो तो वह नहीं रोक सकता।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Caesar cipher aur keys ka hisaab',
          english: 'Work out Caesar cipher and keys',
          hindi: 'Caesar cipher और keys का हिसाब',
        },
        task: {
          hinglish: 'Pen-paper task: (a) Caesar cipher shift 3 se "CAT" ko encrypt karo. (b) 6 log hain — symmetric mein kitni keys chahiye? (c) 4 ank ke PIN mein kitne combination hote hain? Neeche script chalao aur milao. Done tab jab teeno jawab match karein.',
          english: 'Pen-and-paper task: (a) Encrypt "CAT" with Caesar cipher shift 3. (b) There are 6 people — how many keys does symmetric need? (c) How many combinations does a 4-digit PIN have? Run the script below and match. You are done when all three answers match.',
          hindi: 'पेन-पेपर टास्क: (a) Caesar cipher shift 3 से "CAT" को encrypt करो। (b) 6 लोग हैं — symmetric में कितनी keys चाहिए? (c) 4 अंक के PIN में कितने combination होते हैं? नीचे स्क्रिप्ट चलाओ और मिलाओ। जब तीनों जवाब मिल जाएँ, तब टास्क पूरा।',
        },
        language: 'python',
        starter: 'def caesar(word, shift):\n    return "".join(chr((ord(c) - 65 + shift) % 26 + 65) for c in word)\nprint("CAT ->", caesar("CAT", 3))\nn = 6\nprint("Symmetric keys for 6 people:", n * (n - 1) // 2)\nprint("4-digit PIN combinations:", 10 ** 4)\n',
        expected: '(a) CAT → FDW (C→F, A→D, T→W). (b) 15 keys. (c) 10,000 combinations.',
      },
      readMinutes: 12,
    },
  ],
};
