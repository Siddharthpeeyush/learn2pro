// Learn2Pro v2 — Logical Reasoning.
// Own-style AI-written content. Standard reasoning methods are used for facts
// only; every series, puzzle and setting is invented here.
import type { Subject } from '../lib/types';

export const logicalReasoning: Subject = {
  id: 'logical-reasoning',
  name: {
    hinglish: 'Logical Reasoning',
    english: 'Logical Reasoning',
    hindi: 'तार्किक क्षमता',
  },
  tagline: {
    hinglish: 'Series, blood relation, coding, seating, puzzles aur direction — pattern pehchanne ki aadat, step by step.',
    english: 'Series, blood relations, coding, seating, puzzles and direction — the habit of spotting patterns, step by step.',
    hindi: 'श्रृंखला, रक्त संबंध, कोडिंग, बैठक व्यवस्था, पहेलियाँ और दिशा — पैटर्न पहचानने की आदत, कदम-दर-कदम।',
  },
  icon: '🧠',
  color: '#f97316',
  category: 'aptitude',
  articles: [
    {
      id: 'logic-number-series',
      subjectId: 'logical-reasoning',
      title: {
        hinglish: 'Number & letter series — pattern pehchano',
        english: 'Number and Letter Series — Spot the Pattern',
        hindi: 'संख्या और अक्षर श्रृंखला — पैटर्न पहचानो',
      },
      summary: {
        hinglish: 'Difference, multiply, square aur letter gaps — series ka agla number nikalne ke 4 tareeke, traps ke saath.',
        english: 'Differences, multiplication, squares and letter gaps — four ways to find the next term in a series, with the traps.',
        hindi: 'अंतर, गुणा, वर्ग और अक्षर अंतर — श्रृंखला का अगला पद निकालने के 4 तरीके, जाल के साथ।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish:
              'Series ka matlab hai numbers ya letters ki ek line jisme ek chhupa hua rule chalta hai. Tumhara kaam hai woh rule dhoondhna aur agla term nikalna. Rule aam taur par chaar tarah ka hota hai: difference ka rule (har baar ek fixed number judta ya ghat ta hai), multiply ka rule (har baar ek fixed number se multiply hota hai), square ya cube ka rule (1, 4, 9, 16 jaise squares aate hain), aur mixed rule (do rules ek saath chalte hain). Letters ki series mein har letter ki position hoti hai: A = 1, B = 2, C = 3, aur aise hi Z = 26 tak. Letter series bhi number series hi hoti hai, bas numbers ki jagah letters likhe hote hain. Jaise A, C, F, J ka matlab hai 1, 3, 6, 10 — gap 1, 2, 3 badh raha hai. Series solve karne ka pehla kadam hamesha ek hi hai: pehle do-teen terms ke beech ka fark ya ratio likho.',
            english:
              'A series is a line of numbers or letters with a hidden rule running through it. Your job is to find that rule and work out the next term. The rule is usually one of four kinds: a difference rule (a fixed number is added or subtracted each time), a multiply rule (each term is multiplied by a fixed number), a square or cube rule (squares like 1, 4, 9, 16 appear), or a mixed rule (two rules run together). In letter series, every letter has a position: A = 1, B = 2, C = 3, all the way to Z = 26. A letter series is really a number series, just written with letters. For example, A, C, F, J means 1, 3, 6, 10 — the gaps 1, 2, 3 are growing. The first step in solving any series is always the same: write down the difference or ratio between the first two or three terms.',
            hindi:
              'श्रृंखला का मतलब है संख्याओं या अक्षरों की एक पंक्ति जिसमें एक छिपा हुआ नियम चलता है। तुम्हारा काम है वह नियम खोजना और अगला पद निकालना। नियम आमतौर पर चार तरह का होता है: अंतर का नियम (हर बार एक निश्चित संख्या जुड़ती या घटती है), गुणा का नियम (हर बार एक निश्चित संख्या से गुणा होता है), वर्ग या घन का नियम (1, 4, 9, 16 जैसे वर्ग आते हैं), और मिश्रित नियम (दो नियम एक साथ चलते हैं)। अक्षर श्रृंखला में हर अक्षर की स्थिति होती है: A = 1, B = 2, C = 3, और ऐसे ही Z = 26 तक। अक्षर श्रृंखला भी संख्या श्रृंखला ही होती है, बस संख्याओं की जगह अक्षर लिखे होते हैं। जैसे A, C, F, J का मतलब है 1, 3, 6, 10 — अंतर 1, 2, 3 बढ़ रहा है। श्रृंखला हल करने का पहला कदम हमेशा एक ही है: पहले दो-तीन पदों के बीच का अंतर या अनुपात लिखो।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असल ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish:
              'Soch lo tumhare dost ne ek khel banaya hai: woh numbers bolta hai — 2, 6, 12, 20, 30 — aur tumhe agla number bolna hai. Agar tum fark likho to dikhega: 6 − 2 = 4, 12 − 6 = 6, 20 − 12 = 8, 30 − 20 = 10. Fark 4, 6, 8, 10 hai — har baar 2 badh raha hai. To agla fark 12 hoga aur agla number = 30 + 12 = 42. Yehi series ka khel hai. Letters ka example: ek teacher board par likhti hai A, C, F, J, O — agla letter kya hoga? Position likho: A = 1, C = 3, F = 6, J = 10, O = 15. Gap hai +2, +3, +4, +5. Agla gap +6 hoga, to agla number = 15 + 6 = 21, matlab letter U. Cricket mein bhi series dikhti hai: ek batsman ke scores 3, 9, 27, 81 hon to agla 243 hoga — har baar teen guna. Pattern dekhna ek aadat hai, aur ye aadat practice se banti hai.',
            english:
              'Imagine your friend made up a game: he says numbers — 2, 6, 12, 20, 30 — and you must say the next number. If you write the differences, you see: 6 − 2 = 4, 12 − 6 = 6, 20 − 12 = 8, 30 − 20 = 10. The differences are 4, 6, 8, 10 — growing by 2 each time. So the next difference is 12 and the next number = 30 + 12 = 42. That is the series game. A letters example: a teacher writes A, C, F, J, O on the board — what is the next letter? Write the positions: A = 1, C = 3, F = 6, J = 10, O = 15. The gaps are +2, +3, +4, +5. The next gap is +6, so the next number = 15 + 6 = 21, which means the letter U. Series appear in cricket too: if a batsman scores 3, 9, 27, 81, the next is 243 — three times each time. Spotting patterns is a habit, and the habit comes from practice.',
            hindi:
              'मान लो तुम्हारे दोस्त ने एक खेल बनाया है: वह संख्याएँ बोलता है — 2, 6, 12, 20, 30 — और तुम्हें अगली संख्या बोलनी है। अगर तुम अंतर लिखो तो दिखेगा: 6 − 2 = 4, 12 − 6 = 6, 20 − 12 = 8, 30 − 20 = 10। अंतर 4, 6, 8, 10 है — हर बार 2 बढ़ रहा है। तो अगला अंतर 12 होगा और अगली संख्या = 30 + 12 = 42। यही श्रृंखला का खेल है। अक्षरों का उदाहरण: एक शिक्षिका बोर्ड पर लिखती है A, C, F, J, O — अगला अक्षर क्या होगा? स्थिति लिखो: A = 1, C = 3, F = 6, J = 10, O = 15। अंतर है +2, +3, +4, +5। अगला अंतर +6 होगा, तो अगली संख्या = 15 + 6 = 21, मतलब अक्षर U। क्रिकेट में भी श्रृंखला दिखती है: एक बल्लेबाज़ के स्कोर 3, 9, 27, 81 हों तो अगला 243 होगा — हर बार तीन गुना। पैटर्न देखना एक आदत है, और यह आदत अभ्यास से बनती है।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step, worked example ke saath',
            english: 'Step-by-step, with a worked example',
            hindi: 'कदम-दर-कदम, हल किए हुए उदाहरण के साथ',
          },
          body: {
            hinglish:
              'Example 1: 2, 6, 12, 20, 30, ? Step 1: fark nikalo — 4, 6, 8, 10. Step 2: fark ka fark nikalo — 2, 2, 2. Fark barabar badh raha hai, to agla fark = 10 + 2 = 12. Step 3: agla number = 30 + 12 = 42. Check: ye n × (n + 1) bhi hai — 1 × 2 = 2, 2 × 3 = 6, 3 × 4 = 12, 4 × 5 = 20, 5 × 6 = 30, 6 × 7 = 42. Dono tareeke se wahi jawab. Example 2: 3, 9, 27, 81, ? Step 1: fark dekho — 6, 18, 54. Step 2: ratio dekho — 9/3 = 3, 27/9 = 3, 81/27 = 3. Har baar 3 guna ho raha hai. Step 3: agla = 81 × 3 = 243. Example 3: A, C, F, J, O, ? Step 1: position likho — 1, 3, 6, 10, 15. Step 2: gap nikalo — 2, 3, 4, 5. Step 3: agla gap 6, agla number 21, letter U.',
            english:
              'Example 1: 2, 6, 12, 20, 30, ? Step 1: find the differences — 4, 6, 8, 10. Step 2: find the difference of the differences — 2, 2, 2. The differences grow evenly, so the next difference = 10 + 2 = 12. Step 3: the next number = 30 + 12 = 42. Check: this is also n × (n + 1) — 1 × 2 = 2, 2 × 3 = 6, 3 × 4 = 12, 4 × 5 = 20, 5 × 6 = 30, 6 × 7 = 42. Both ways give the same answer. Example 2: 3, 9, 27, 81, ? Step 1: look at the differences — 6, 18, 54. Step 2: look at the ratio — 9/3 = 3, 27/9 = 3, 81/27 = 3. Each term is 3 times the last. Step 3: next = 81 × 3 = 243. Example 3: A, C, F, J, O, ? Step 1: write the positions — 1, 3, 6, 10, 15. Step 2: find the gaps — 2, 3, 4, 5. Step 3: the next gap is 6, the next number is 21, the letter is U.',
            hindi:
              'उदाहरण 1: 2, 6, 12, 20, 30, ? चरण 1: अंतर निकालो — 4, 6, 8, 10। चरण 2: अंतर का अंतर निकालो — 2, 2, 2। अंतर बराबर बढ़ रहा है, तो अगला अंतर = 10 + 2 = 12। चरण 3: अगली संख्या = 30 + 12 = 42। जाँच: यह n × (n + 1) भी है — 1 × 2 = 2, 2 × 3 = 6, 3 × 4 = 12, 4 × 5 = 20, 5 × 6 = 30, 6 × 7 = 42। दोनों तरीक़ों से वही उत्तर। उदाहरण 2: 3, 9, 27, 81, ? चरण 1: अंतर देखो — 6, 18, 54। चरण 2: अनुपात देखो — 9/3 = 3, 27/9 = 3, 81/27 = 3। हर बार 3 गुना हो रहा है। चरण 3: अगला = 81 × 3 = 243। उदाहरण 3: A, C, F, J, O, ? चरण 1: स्थिति लिखो — 1, 3, 6, 10, 15। चरण 2: अंतर निकालो — 2, 3, 4, 5। चरण 3: अगला अंतर 6, अगली संख्या 21, अक्षर U।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur ye hoti kyun hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और ये क्यों होती हैं',
          },
          body: {
            hinglish:
              'Sabse badi galti hai sirf pehla fark dekh kar rule maan lena. Jaise 2, 6, 12 mein fark 4 aur 6 hai — log sochte hain fark 2 badh raha hai aur agla fark 8 hoga, lekin poori series check kiye bina ye andaza hota hai. Hamesha kam se kam 3 fark check karo. Ye galti isliye hoti hai kyunki dimaag jaldi jawab chahta hai aur pehla pattern hi pakad leta hai. Dusri galti hai letter series mein position likhna bhool jana. A, E, I, M dekh kar log sochte hain gap 4 hai — ye sahi hai, lekin bina position likhe agla letter nikalna mushkil ho jata hai. Hamesha A = 1 se likhna shuru karo. Teesri galti hai square aur cube ko pehchanne mein deri: 121, 144, 169, 196 dekh kar log fark nikalte rehte hain, jabki ye 11, 12, 13, 14 ke squares hain. Agar fark ajeeb lag raha ho to square ya cube check karo.',
            english:
              'The biggest mistake is accepting a rule after looking at only the first difference. In 2, 6, 12 the differences are 4 and 6 — people guess the difference grows by 2 and the next difference is 8, but that is a guess without checking the whole series. Always check at least 3 differences. This mistake happens because the mind wants a quick answer and grabs the first pattern it sees. The second mistake is forgetting to write positions in a letter series. Looking at A, E, I, M, people see the gap is 4 — that is right, but without writing positions it is hard to find the next letter. Always start writing from A = 1. The third mistake is being slow to spot squares and cubes: looking at 121, 144, 169, 196, people keep finding differences, while these are the squares of 11, 12, 13, 14. If the differences look strange, check squares or cubes.',
            hindi:
              'सबसे बड़ी गलती है सिर्फ़ पहला अंतर देखकर नियम मान लेना। जैसे 2, 6, 12 में अंतर 4 और 6 है — लोग सोचते हैं अंतर 2 बढ़ रहा है और अगला अंतर 8 होगा, लेकिन पूरी श्रृंखला जाँचे बिना यह अंदाज़ा होता है। हमेशा कम से कम 3 अंतर जाँचो। यह गलती इसलिए होती है क्योंकि दिमाग़ जल्दी उत्तर चाहता है और पहला पैटर्न ही पकड़ लेता है। दूसरी गलती है अक्षर श्रृंखला में स्थिति लिखना भूल जाना। A, E, I, M देखकर लोग सोचते हैं अंतर 4 है — यह सही है, लेकिन बिना स्थिति लिखे अगला अक्षर निकालना मुश्किल हो जाता है। हमेशा A = 1 से लिखना शुरू करो। तीसरी गलती है वर्ग और घन को पहचानने में देरी: 121, 144, 169, 196 देखकर लोग अंतर निकालते रहते हैं, जबकि ये 11, 12, 13, 14 के वर्ग हैं। अगर अंतर अजीब लग रहा हो तो वर्ग या घन जाँचो।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases aur shortcuts (trap samajh ke)',
            english: 'Edge cases and shortcuts (know the trap)',
            hindi: 'ख़ास मामले और आसान तरीके (जाल समझकर)',
          },
          body: {
            hinglish:
              'Ek shortcut hai: agar fark har baar ek jaisa badh raha ho to fark ka fark constant hota hai — use second difference kehte hain. 2, 6, 12, 20 mein second difference 2 hai, to agla fark hamesha pichle fark + 2 hota hai. Dusra shortcut hai alternate terms dekhna: kabhi-kabhi odd position wale terms ka alag rule hota hai aur even wale ka alag. Jaise 5, 3, 10, 6, 20, 12 mein odd terms 5, 10, 20 (double ho rahe hain) aur even terms 3, 6, 12 (double ho rahe hain). Trap ye hai ki poori series ko ek rule se samjhane ki koshish karo to kuch nahi milega. Teesra: Fibonacci jaisi series mein har term pichle do ka jod hota hai — 1, 1, 2, 3, 5, 8, 13. Agar fark badhta ja raha ho aur ratio samajh na aa raha ho to pichle do terms ko jod kar dekho.',
            english:
              'One shortcut: if the difference grows by the same amount each time, the difference of the differences is constant — this is called the second difference. In 2, 6, 12, 20 the second difference is 2, so the next difference is always the last difference + 2. A second shortcut is to look at alternate terms: sometimes the odd-position terms follow one rule and the even-position terms another. For example, in 5, 3, 10, 6, 20, 12, the odd terms are 5, 10, 20 (doubling) and the even terms are 3, 6, 12 (doubling). The trap is trying to explain the whole series with one rule, when nothing fits. A third: in a Fibonacci-like series, each term is the sum of the previous two — 1, 1, 2, 3, 5, 8, 13. If the differences keep growing and no ratio makes sense, try adding the previous two terms.',
            hindi:
              'एक आसान तरीका है: अगर अंतर हर बार एक जैसा बढ़ रहा हो तो अंतर का अंतर स्थिर होता है — इसे द्वितीय अंतर कहते हैं। 2, 6, 12, 20 में द्वितीय अंतर 2 है, तो अगला अंतर हमेशा पिछले अंतर + 2 होता है। दूसरा आसान तरीका है एकांतर पद देखना: कभी-कभी विषम स्थान वाले पदों का अलग नियम होता है और सम स्थान वाले पदों का अलग। जैसे 5, 3, 10, 6, 20, 12 में विषम पद 5, 10, 20 (दोगुने हो रहे हैं) और सम पद 3, 6, 12 (दोगुने हो रहे हैं) हैं। जाल यह है कि पूरी श्रृंखला को एक नियम से समझाने की कोशिश करो तो कुछ नहीं मिलेगा। तीसरा: फ़िबोनाची जैसी श्रृंखला में हर पद पिछले दो का जोड़ होता है — 1, 1, 2, 3, 5, 8, 13। अगर अंतर बढ़ता जा रहा हो और अनुपात समझ न आ रहा हो तो पिछले दो पदों को जोड़कर देखो।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish:
              'Soch lo series 2, 6, 12, 20, 30 mein 30 ki jagah 32 ho jaye. To fark honge 4, 6, 8, 12 — second difference 2, 2, 4 ho jata hai, jo constant nahi hai. Matlab rule toot gaya — ab koi simple rule nahi bachega. Yehi series ki pehchan hai: ek number badalne se poora pattern badal jata hai. Ab socho letter series A, C, F, J, O mein O ki jagah P ho jaye. To gap honge 2, 3, 4, 6 — rule toot gaya. Exam mein jab ek term ajeeb lage to use galti mat samjho — ho sakta hai woh alternate series ka hissa ho ya tumhara rule hi galat ho. Pehle series ko do hisso mein baant kar dekho, phir naya rule dhoondho. Aur yaad rakho, har series ka ek hi sahi rule nahi hota — kabhi-kabhi do rules ek hi jawab dete hain.',
            english:
              'Suppose in the series 2, 6, 12, 20, 30, the 30 becomes 32. Then the differences are 4, 6, 8, 12 — the second differences become 2, 2, 4, which is not constant. The rule breaks — now no simple rule fits. That is the nature of a series: changing one number changes the whole pattern. Now suppose in the letter series A, C, F, J, O, the O becomes P. Then the gaps are 2, 3, 4, 6 — the rule breaks. In exams, when one term looks odd, do not treat it as a mistake — it may belong to an alternate series, or your rule may be wrong. First try splitting the series into two parts, then look for a new rule. And remember, a series does not always have one single right rule — sometimes two rules give the same answer.',
            hindi:
              'मान लो श्रृंखला 2, 6, 12, 20, 30 में 30 की जगह 32 हो जाए। तो अंतर होंगे 4, 6, 8, 12 — द्वितीय अंतर 2, 2, 4 हो जाता है, जो स्थिर नहीं है। मतलब नियम टूट गया — अब कोई सरल नियम नहीं बचेगा। यही श्रृंखला की पहचान है: एक संख्या बदलने से पूरा पैटर्न बदल जाता है। अब सोचो अक्षर श्रृंखला A, C, F, J, O में O की जगह P हो जाए। तो अंतर होंगे 2, 3, 4, 6 — नियम टूट गया। परीक्षा में जब एक पद अजीब लगे तो उसे ग़लती मत समझो — हो सकता है वह एकांतर श्रृंखला का हिस्सा हो या तुम्हारा नियम ही ग़लत हो। पहले श्रृंखला को दो हिस्सों में बाँटकर देखो, फिर नया नियम खोजो। और याद रखो, हर श्रृंखला का एक ही सही नियम नहीं होता — कभी-कभी दो नियम एक ही उत्तर देते हैं।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish:
              'Series solve karne ka order hai: pehle fark likho, phir fark ka fark, phir ratio, phir square ya cube check karo. Letter series mein pehle position likho (A = 1 ... Z = 26). Agar ek rule na mile to alternate terms alag se dekho, aur Fibonacci jaisa jod bhi try karo. Kam se kam 3 fark check kiye bina rule mat maano. Aakhir mein apna rule poori series par lagakar check karo — agar har term match karta hai to rule sahi hai, nahi to naya rule dhoondho.',
            english:
              'The order for solving a series is: first write the differences, then the difference of the differences, then the ratio, then check squares or cubes. In a letter series, first write the positions (A = 1 ... Z = 26). If one rule does not fit, look at alternate terms separately, and also try a Fibonacci-like sum. Never accept a rule without checking at least 3 differences. Finally, test your rule on the whole series — if every term matches, the rule is right; if not, look for a new rule.',
            hindi:
              'श्रृंखला हल करने का क्रम है: पहले अंतर लिखो, फिर अंतर का अंतर, फिर अनुपात, फिर वर्ग या घन जाँचो। अक्षर श्रृंखला में पहले स्थिति लिखो (A = 1 ... Z = 26)। अगर एक नियम न मिले तो एकांतर पद अलग से देखो, और फ़िबोनाची जैसा जोड़ भी आज़माओ। कम से कम 3 अंतर जाँचे बिना नियम मत मानो। आख़िर में अपना नियम पूरी श्रृंखला पर लगाकर जाँचो — अगर हर पद मेल खाता है तो नियम सही है, नहीं तो नया नियम खोजो।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Series solve karne ka flow',
          english: 'The flow for solving a series',
          hindi: 'श्रृंखला हल करने का प्रवाह',
        },
        nodes: [
          {
            t: {
              hinglish: 'Fark likho',
              english: 'Write the differences',
              hindi: 'अंतर लिखो',
            },
            s: {
              hinglish: 'Har term ka fark',
              english: 'Difference of each term',
              hindi: 'हर पद का अंतर',
            },
          },
          {
            t: {
              hinglish: 'Ratio ya square check karo',
              english: 'Check ratio or squares',
              hindi: 'अनुपात या वर्ग जाँचो',
            },
            s: {
              hinglish: 'Fark na mile to ye dekho',
              english: 'If no difference fits, check this',
              hindi: 'अंतर न मिले तो यह देखो',
            },
          },
          {
            t: {
              hinglish: 'Rule poori series par check karo',
              english: 'Test the rule on the whole series',
              hindi: 'नियम पूरी श्रृंखला पर जाँचो',
            },
            s: {
              hinglish: 'Har term match hona chahiye',
              english: 'Every term must match',
              hindi: 'हर पद मेल खाना चाहिए',
            },
          },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: '5, 10, 20, 40, ? — agla number kya hoga?',
            english: '5, 10, 20, 40, ? — what is the next number?',
            hindi: '5, 10, 20, 40, ? — अगली संख्या क्या होगी?',
          },
          opts: [
            { hinglish: '60', english: '60', hindi: '60' },
            { hinglish: '70', english: '70', hindi: '70' },
            { hinglish: '80', english: '80', hindi: '80' },
            { hinglish: '50', english: '50', hindi: '50' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Har term double ho raha hai: 5 × 2 = 10, 10 × 2 = 20, 20 × 2 = 40. Agla = 40 × 2 = 80.',
            english: 'Each term doubles: 5 × 2 = 10, 10 × 2 = 20, 20 × 2 = 40. Next = 40 × 2 = 80.',
            hindi: 'हर पद दोगुना हो रहा है: 5 × 2 = 10, 10 × 2 = 20, 20 × 2 = 40। अगला = 40 × 2 = 80।',
          },
        },
        {
          q: {
            hinglish: '121, 144, 169, 196, ? — agla number kya hoga?',
            english: '121, 144, 169, 196, ? — what is the next number?',
            hindi: '121, 144, 169, 196, ? — अगली संख्या क्या होगी?',
          },
          opts: [
            { hinglish: '215', english: '215', hindi: '215' },
            { hinglish: '220', english: '220', hindi: '220' },
            { hinglish: '225', english: '225', hindi: '225' },
            { hinglish: '230', english: '230', hindi: '230' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Ye squares hain: 11² = 121, 12² = 144, 13² = 169, 14² = 196. Agla = 15² = 225.',
            english: 'These are squares: 11² = 121, 12² = 144, 13² = 169, 14² = 196. Next = 15² = 225.',
            hindi: 'ये वर्ग हैं: 11² = 121, 12² = 144, 13² = 169, 14² = 196। अगला = 15² = 225।',
          },
        },
        {
          q: {
            hinglish: 'B, D, G, K, P, ? — agla letter kya hoga?',
            english: 'B, D, G, K, P, ? — what is the next letter?',
            hindi: 'B, D, G, K, P, ? — अगला अक्षर क्या होगा?',
          },
          opts: [
            { hinglish: 'T', english: 'T', hindi: 'T' },
            { hinglish: 'U', english: 'U', hindi: 'U' },
            { hinglish: 'V', english: 'V', hindi: 'V' },
            { hinglish: 'W', english: 'W', hindi: 'W' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Position: B = 2, D = 4, G = 7, K = 11, P = 16. Gap hai +2, +3, +4, +5. Agla gap +6, to 16 + 6 = 22, matlab V.',
            english: 'Positions: B = 2, D = 4, G = 7, K = 11, P = 16. Gaps are +2, +3, +4, +5. Next gap +6, so 16 + 6 = 22, which means V.',
            hindi: 'स्थिति: B = 2, D = 4, G = 7, K = 11, P = 16। अंतर है +2, +3, +4, +5। अगला अंतर +6, तो 16 + 6 = 22, मतलब V।',
          },
        },
        {
          q: {
            hinglish: '1, 1, 2, 3, 5, 8, ? — agla number kya hoga?',
            english: '1, 1, 2, 3, 5, 8, ? — what is the next number?',
            hindi: '1, 1, 2, 3, 5, 8, ? — अगली संख्या क्या होगी?',
          },
          opts: [
            { hinglish: '11', english: '11', hindi: '11' },
            { hinglish: '12', english: '12', hindi: '12' },
            { hinglish: '13', english: '13', hindi: '13' },
            { hinglish: '14', english: '14', hindi: '14' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Har term pichle do ka jod hai: 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8. Agla = 5 + 8 = 13.',
            english: 'Each term is the sum of the previous two: 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8. Next = 5 + 8 = 13.',
            hindi: 'हर पद पिछले दो का जोड़ है: 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8। अगला = 5 + 8 = 13।',
          },
        },
        {
          q: {
            hinglish: '100, 90, 81, 73, 66, ? — agla number kya hoga?',
            english: '100, 90, 81, 73, 66, ? — what is the next number?',
            hindi: '100, 90, 81, 73, 66, ? — अगली संख्या क्या होगी?',
          },
          opts: [
            { hinglish: '58', english: '58', hindi: '58' },
            { hinglish: '59', english: '59', hindi: '59' },
            { hinglish: '60', english: '60', hindi: '60' },
            { hinglish: '61', english: '61', hindi: '61' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Fark hai −10, −9, −8, −7. Agla fark −6 hoga, to 66 − 6 = 60.',
            english: 'Differences are −10, −9, −8, −7. The next difference is −6, so 66 − 6 = 60.',
            hindi: 'अंतर है −10, −9, −8, −7। अगला अंतर −6 होगा, तो 66 − 6 = 60।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Series ki practice',
          english: 'Series practice',
          hindi: 'श्रृंखला का अभ्यास',
        },
        task: {
          hinglish:
            'Neeche wale 3 sawal kagaz par solve karo, phir starter code mein apne answers likh kar Run dabao. Q1: 7, 14, 28, 56, ? — agla number kya hoga? (Jawab: 112) Q2: A, E, I, M, ? — agla letter ka number kya hoga? (Jawab: 17, matlab letter Q) Q3: 2, 5, 10, 17, 26, ? — agla number kya hoga? (Jawab: 37) Method: pehle fark likho, phir fark ka fark, phir ratio; letter mein position likho.',
          english:
            'Solve the 3 questions below on paper, then type your answers in the starter code and press Run. Q1: 7, 14, 28, 56, ? — what is the next number? (Answer: 112) Q2: A, E, I, M, ? — what is the position number of the next letter? (Answer: 17, which means the letter Q) Q3: 2, 5, 10, 17, 26, ? — what is the next number? (Answer: 37) Method: first write the differences, then the difference of the differences, then the ratio; for letters, write the positions.',
          hindi:
            'नीचे वाले 3 सवाल काग़ज़ पर हल करो, फिर स्टार्टर कोड में अपने उत्तर लिखकर Run दबाओ। Q1: 7, 14, 28, 56, ? — अगली संख्या क्या होगी? (उत्तर: 112) Q2: A, E, I, M, ? — अगले अक्षर का संख्या स्थान क्या होगा? (उत्तर: 17, मतलब अक्षर Q) Q3: 2, 5, 10, 17, 26, ? — अगली संख्या क्या होगी? (उत्तर: 37) तरीका: पहले अंतर लिखो, फिर अंतर का अंतर, फिर अनुपात; अक्षर में स्थिति लिखो।',
        },
        language: 'python',
        starter:
          '# Apne 3 answers yahan likho, phir Run dabao.\nanswers = [None, None, None]\ncorrect = [112, 17, 37]\nfor i in range(3):\n    if answers[i] == correct[i]:\n        print(f"Q{i+1}: sahi hai!")\n    else:\n        print(f"Q{i+1}: abhi sahi answer nahi mila. Sahi answer: {correct[i]}")\n',
        expected: 'Teeno sahi hone par script har sawal ke saamne "sahi hai!" print karega.',
      },
      readMinutes: 10,
    },
    {
      id: 'logic-blood-relations',
      subjectId: 'logical-reasoning',
      title: {
        hinglish: 'Blood relations — rishton ka hisaab',
        english: 'Blood Relations — Working Out Family Relationships',
        hindi: 'रक्त संबंध — रिश्तों का हिसाब',
      },
      summary: {
        hinglish: 'Family tree banao, har rishta tod kar samjho — mama, bua, saala, bhabhi jaise uljhe sawal seedhe tareeke se.',
        english: 'Draw the family tree and break every relation apart — tangled questions about uncles, aunts and in-laws, the simple way.',
        hindi: 'परिवार वृक्ष बनाओ, हर रिश्ता तोड़कर समझो — मामा, बुआ, साला, भाभी जैसे उलझे सवाल सीधे तरीक़े से।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish:
              'Blood relation ke sawalon mein ek family ke logon ke beech ka rishta poocha jata hai. Jaise Ravi, Meena ka beta hai aur Meena, Arun ki patni hai — to Ravi, Arun ka kya hoga? Jawab hai beta. Ye sawal isliye mushkil lagte hain kyunki rishton ko seedha nahi, ghuma kar poocha jata hai. Jaise meri dadi ke iklaute bete ki beti — ye meri behen hoti hai, kyunki dadi ka iklauta beta mere papa hain aur unki beti meri behen hai. Is topic ka sabse achha tareeka hai family tree banana: upar parents, neeche bachche, aur beech mein shadi ka line. Har baar jab naya rishta mile to use tree mein jod do. Phir aakhir mein poocha gaya rishta tree se padh lo. Tree banane se ghuma hua sawal bhi seedha ho jata hai.',
            english:
              'Blood relation questions ask about the relationship between people in a family. For example, Ravi is the son of Meena, and Meena is the wife of Arun — so what is Ravi to Arun? The answer is son. These questions feel hard because relations are asked in a twisted way. For example, the daughter of my grandmother only son — that is my sister, because my grandmother only son is my father, and his daughter is my sister. The best method for this topic is drawing a family tree: parents on top, children below, and a marriage line in between. Every time you get a new relation, add it to the tree. Then read the asked relation from the tree. Drawing the tree makes even a twisted question simple.',
            hindi:
              'रक्त संबंध के सवालों में एक परिवार के लोगों के बीच का रिश्ता पूछा जाता है। जैसे रवि, मीना का बेटा है और मीना, अरुण की पत्नी है — तो रवि, अरुण का क्या होगा? उत्तर है बेटा। ये सवाल इसलिए मुश्किल लगते हैं क्योंकि रिश्तों को सीधा नहीं, घुमाकर पूछा जाता है। जैसे मेरी दादी के इकलौते बेटे की बेटी — यह मेरी बहन होती है, क्योंकि दादी का इकलौता बेटा मेरे पापा हैं और उनकी बेटी मेरी बहन है। इस विषय का सबसे अच्छा तरीका है परिवार वृक्ष बनाना: ऊपर माता-पिता, नीचे बच्चे, और बीच में शादी की रेखा। हर बार जब नया रिश्ता मिले तो उसे वृक्ष में जोड़ दो। फिर आख़िर में पूछा गया रिश्ता वृक्ष से पढ़ लो। वृक्ष बनाने से घुमा हुआ सवाल भी सीधा हो जाता है।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असल ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish:
              'Soch lo ek shaadi mein tum ek aadmi se milte ho aur woh kehta hai: meri maa ki maa ka beta mera mama hai. Ye to seedha hai. Ab woh kehta hai: woh ladki mere nana ki iklauti beti ki beti hai. Zara socho: nana ki iklauti beti matlab meri maa, aur maa ki beti matlab meri behen. To woh ladki meri behen hai. Ab ek aur: Amit ki maa Sunita hai, Sunita ka bhai Rohit hai. To Rohit, Amit ka kya hai? Sunita, Amit ki maa hai, aur maa ka bhai mama hota hai — to Rohit, Amit ka mama hai. Yehi tareeka exam mein kaam aata hai: pehle beech ka rishta dhoondho, phir aakhri rishta nikalo. Family tree mein Sunita ko beech mein rakho, upar uske parents, neeche Amit, aur side mein Rohit — sab kuch saaf dikhega.',
            english:
              'Imagine you meet a man at a wedding and he says: the son of my mother mother is my maternal uncle. That is simple. Now he says: that girl is the daughter of my grandfather only daughter. Think: my grandfather only daughter means my mother, and my mother daughter means my sister. So that girl is my sister. One more: Amit mother is Sunita, and Sunita brother is Rohit. What is Rohit to Amit? Sunita is Amit mother, and a mother brother is a maternal uncle — so Rohit is Amit maternal uncle. This is the method that works in exams: first find the middle relation, then work out the final one. In the family tree, put Sunita in the middle, her parents above, Amit below, and Rohit to the side — everything becomes clear.',
            hindi:
              'मान लो एक शादी में तुम एक आदमी से मिलते हो और वह कहता है: मेरी माँ की माँ का बेटा मेरा मामा है। यह तो सीधा है। अब वह कहता है: वह लड़की मेरे नाना की इकलौती बेटी की बेटी है। ज़रा सोचो: नाना की इकलौती बेटी मतलब मेरी माँ, और माँ की बेटी मतलब मेरी बहन। तो वह लड़की मेरी बहन है। अब एक और: अमित की माँ सुनीता है, सुनीता का भाई रोहित है। तो रोहित, अमित का क्या है? सुनीता, अमित की माँ है, और माँ का भाई मामा होता है — तो रोहित, अमित का मामा है। यही तरीका परीक्षा में काम आता है: पहले बीच का रिश्ता खोजो, फिर आख़िरी रिश्ता निकालो। परिवार वृक्ष में सुनीता को बीच में रखो, ऊपर उसके माता-पिता, नीचे अमित, और बगल में रोहित — सब कुछ साफ़ दिखेगा।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step, worked example ke saath',
            english: 'Step-by-step, with a worked example',
            hindi: 'कदम-दर-कदम, हल किए हुए उदाहरण के साथ',
          },
          body: {
            hinglish:
              'Example 1: Ravi, Meena ka beta hai. Meena, Arun ki patni hai. Ravi, Arun ka kya hai? Step 1: Meena, Ravi ki maa hai. Step 2: Meena, Arun ki patni hai, to Arun, Ravi ke papa hain. Step 3: Ravi, Arun ka beta hai. Example 2: ek aurat ek photo ki taraf ishaara karke kehti hai — ye meri dadi ke iklaute bete ki beti hai. Woh ladki kaun hai? Step 1: dadi ka iklauta beta matlab mere papa. Step 2: papa ki beti matlab meri behen. Step 3: woh ladki meri behen hai. Example 3: Amit ki maa Sunita hai, Sunita ka bhai Rohit hai. Rohit, Amit ka kya hai? Step 1: Sunita, Amit ki maa hai. Step 2: Rohit, Sunita ka bhai hai, matlab maa ka bhai. Step 3: maa ka bhai mama hota hai, to Rohit, Amit ka mama hai. Har example mein ek hi pattern hai: beech wale rishton ko tod kar seedha karo, phir aakhri rishta nikalo.',
            english:
              'Example 1: Ravi is the son of Meena. Meena is the wife of Arun. What is Ravi to Arun? Step 1: Meena is Ravi mother. Step 2: Meena is Arun wife, so Arun is Ravi father. Step 3: Ravi is Arun son. Example 2: a woman points at a photo and says — she is the daughter of my grandmother only son. Who is that girl? Step 1: my grandmother only son means my father. Step 2: my father daughter means my sister. Step 3: that girl is my sister. Example 3: Amit mother is Sunita, Sunita brother is Rohit. What is Rohit to Amit? Step 1: Sunita is Amit mother. Step 2: Rohit is Sunita brother, which means the mother brother. Step 3: a mother brother is a maternal uncle, so Rohit is Amit maternal uncle. Every example follows the same pattern: break the middle relations apart, then work out the final relation.',
            hindi:
              'उदाहरण 1: रवि, मीना का बेटा है। मीना, अरुण की पत्नी है। रवि, अरुण का क्या है? चरण 1: मीना, रवि की माँ है। चरण 2: मीना, अरुण की पत्नी है, तो अरुण, रवि के पापा हैं। चरण 3: रवि, अरुण का बेटा है। उदाहरण 2: एक औरत एक फ़ोटो की तरफ़ इशारा करके कहती है — यह मेरी दादी के इकलौते बेटे की बेटी है। वह लड़की कौन है? चरण 1: दादी का इकलौता बेटा मतलब मेरे पापा। चरण 2: पापा की बेटी मतलब मेरी बहन। चरण 3: वह लड़की मेरी बहन है। उदाहरण 3: अमित की माँ सुनीता है, सुनीता का भाई रोहित है। रोहित, अमित का क्या है? चरण 1: सुनीता, अमित की माँ है। चरण 2: रोहित, सुनीता का भाई है, मतलब माँ का भाई। चरण 3: माँ का भाई मामा होता है, तो रोहित, अमित का मामा है। हर उदाहरण में एक ही पैटर्न है: बीच वाले रिश्तों को तोड़कर सीधा करो, फिर आख़िरी रिश्ता निकालो।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur ye hoti kyun hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और ये क्यों होती हैं',
          },
          body: {
            hinglish:
              'Sabse badi galti hai bolne wale ko bhool jana — sawal mein my ka matlab bolne wala hota hai, tum nahi. Jaise meri maa ka bhai mera mama hai, lekin agar sawal mein woh kehta hai uski maa ka bhai to woh uska mama hai, tumhara nahi. Log jaldi mein my ko apne se jod lete hain. Ye galti isliye hoti hai kyunki dimaag khud ko beech mein rakh leta hai. Dusri galti hai iklauta shabd ko ignore karna. Dadi ke iklaute bete ki beti meri behen hai — lekin agar beta iklauta nahi hota to woh ladki meri cousin bhi ho sakti thi. Iklauta shabd poora jawab badal deta hai. Teesri galti hai mama aur chacha ko milana: maa ka bhai mama hota hai, papa ka bhai chacha hota hai. Dono uncle hain, lekin Hindi mein alag naam hain aur exam mein alag option hote hain.',
            english:
              'The biggest mistake is forgetting who is speaking — in a question, my means the speaker, not you. For example, my mother brother is my maternal uncle, but if the question says his mother brother, that is his maternal uncle, not yours. People in a hurry attach my to themselves. This mistake happens because the mind puts itself in the middle. The second mistake is ignoring the word only. The daughter of my grandmother only son is my sister — but if the son were not the only one, that girl could also be my cousin. The word only changes the whole answer. The third mistake is mixing up maternal and paternal uncles: a mother brother is a maternal uncle, a father brother is a paternal uncle. Both are uncles, but in Hindi they have different names, and exams give them as different options.',
            hindi:
              'सबसे बड़ी गलती है बोलने वाले को भूल जाना — सवाल में my का मतलब बोलने वाला होता है, तुम नहीं। जैसे मेरी माँ का भाई मेरा मामा है, लेकिन अगर सवाल में वह कहता है उसकी माँ का भाई तो वह उसका मामा है, तुम्हारा नहीं। लोग जल्दी में my को अपने से जोड़ लेते हैं। यह गलती इसलिए होती है क्योंकि दिमाग़ ख़ुद को बीच में रख लेता है। दूसरी गलती है इकलौता शब्द को नज़रअंदाज़ करना। दादी के इकलौते बेटे की बेटी मेरी बहन है — लेकिन अगर बेटा इकलौता नहीं होता तो वह लड़की मेरी चचेरी बहन भी हो सकती थी। इकलौता शब्द पूरा उत्तर बदल देता है। तीसरी गलती है मामा और चाचा को मिलाना: माँ का भाई मामा होता है, पापा का भाई चाचा होता है। दोनों अंकल हैं, लेकिन हिंदी में अलग नाम हैं और परीक्षा में अलग विकल्प होते हैं।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases aur shortcuts (trap samajh ke)',
            english: 'Edge cases and shortcuts (know the trap)',
            hindi: 'ख़ास मामले और आसान तरीके (जाल समझकर)',
          },
          body: {
            hinglish:
              'Ek shortcut hai: sawal ko ulta padho — aakhir se shuru karo. Jaise meri dadi ke iklaute bete ki beti — aakhir se shuru karo: beti kiski? Dadi ke bete ki. Dadi ka beta kaun? Mere papa. To beti meri behen hui. Ulta padhne se ghuma hua rishta seedha ho jata hai. Dusra shortcut hai gender ka dhyaan rakhna: beta aur beti mein fark hota hai, aur exam mein aksar gender se hi jawab badalta hai. Jaise X, Y ka beta hai aur Y, Z ki patni hai — to X, Z ka beta hai. Lekin agar X beti hoti to jawab beti hota. Teesra edge case: jab sawal mein sirf naam diye hon aur gender na diya ho, to jawab nahi nikal sakta — jaise A, B ka bhai hai, B, C ki maa hai, to A, C ka mama hai (ye nikal sakta hai), lekin agar sirf ye diya ho ki A, B ka bachcha hai to beta ya beti — ye nahi pata chalega. Exam mein aise sawal ka jawab cannot be determined hota hai.',
            english:
              'One shortcut: read the question backwards — start from the end. For example, the daughter of my grandmother only son — start from the end: whose daughter? The daughter of my grandmother son. Who is my grandmother son? My father. So the daughter is my sister. Reading backwards straightens a twisted relation. A second shortcut is to watch the gender: son and daughter are different, and exams often change the answer through gender. For example, X is the son of Y and Y is the wife of Z — so X is the son of Z. But if X were a daughter, the answer would be daughter. A third edge case: when a question gives only names and no gender, the answer cannot be found — for example, A is the brother of B and B is the mother of C, so A is the maternal uncle of C (this can be found), but if it only says A is the child of B, you cannot tell son or daughter. In exams, the answer to such a question is cannot be determined.',
            hindi:
              'एक आसान तरीका है: सवाल को उल्टा पढ़ो — आख़िर से शुरू करो। जैसे मेरी दादी के इकलौते बेटे की बेटी — आख़िर से शुरू करो: बेटी किसकी? दादी के बेटे की। दादी का बेटा कौन? मेरे पापा। तो बेटी मेरी बहन हुई। उल्टा पढ़ने से घुमा हुआ रिश्ता सीधा हो जाता है। दूसरा आसान तरीका है लिंग का ध्यान रखना: बेटा और बेटी में फ़र्क़ होता है, और परीक्षा में अक्सर लिंग से ही उत्तर बदलता है। जैसे X, Y का बेटा है और Y, Z की पत्नी है — तो X, Z का बेटा है। लेकिन अगर X बेटी होती तो उत्तर बेटी होता। तीसरा ख़ास मामला: जब सवाल में सिर्फ़ नाम दिए हों और लिंग न दिया हो, तो उत्तर नहीं निकल सकता — जैसे A, B का भाई है, B, C की माँ है, तो A, C का मामा है (यह निकल सकता है), लेकिन अगर सिर्फ़ यह दिया हो कि A, B का बच्चा है तो बेटा या बेटी — यह नहीं पता चलेगा। परीक्षा में ऐसे सवाल का उत्तर cannot be determined होता है।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish:
              'Soch lo example 2 mein dadi ke iklaute bete ki jagah dadi ke bete likha ho — iklauta shabd hata do. To woh ladki meri behen bhi ho sakti hai aur meri cousin (chacha ki beti) bhi. Jawab pakka nahi rahega. Ek shabd badalne se sawal ka jawab badal jata hai — isiliye har shabd padho. Ab socho example 3 mein Sunita ka bhai Rohit ki jagah Sunita ki behen Rita ho jaye. To Rita, Amit ki mausi hogi, mama nahi. Bhai ki jagah behen ne rishta badal diya. Ab socho Ravi wale example mein Meena, Arun ki patni ki jagah Arun ki behen hoti. To Ravi, Arun ka bhanja hota, beta nahi. Har baar ek rishta badlo aur dekho aakhri jawab kaise badalta hai — ye practice tumhe exam mein tez bana degi.',
            english:
              'Suppose in example 2, instead of my grandmother only son, it just says my grandmother son — remove the word only. Then that girl could be my sister or my cousin (my paternal uncle daughter). The answer is no longer certain. Changing one word changes the answer — that is why you must read every word. Now suppose in example 3, instead of Sunita brother Rohit, it is Sunita sister Rita. Then Rita is Amit maternal aunt, not maternal uncle. Sister instead of brother changed the relation. Now suppose in the Ravi example, Meena is Arun sister instead of Arun wife. Then Ravi is Arun nephew, not son. Each time, change one relation and see how the final answer changes — this practice will make you fast in exams.',
            hindi:
              'मान लो उदाहरण 2 में दादी के इकलौते बेटे की जगह दादी के बेटे लिखा हो — इकलौता शब्द हटा दो। तो वह लड़की मेरी बहन भी हो सकती है और मेरी चचेरी बहन (चाचा की बेटी) भी। उत्तर पक्का नहीं रहेगा। एक शब्द बदलने से सवाल का उत्तर बदल जाता है — इसलिए हर शब्द पढ़ो। अब सोचो उदाहरण 3 में सुनीता का भाई रोहित की जगह सुनीता की बहन रीता हो जाए। तो रीता, अमित की मौसी होगी, मामा नहीं। भाई की जगह बहन ने रिश्ता बदल दिया। अब सोचो रवि वाले उदाहरण में मीना, अरुण की पत्नी की जगह अरुण की बहन होती। तो रवि, अरुण का भांजा होता, बेटा नहीं। हर बार एक रिश्ता बदलो और देखो आख़िरी उत्तर कैसे बदलता है — यह अभ्यास तुम्हें परीक्षा में तेज़ बना देगा।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish:
              'Blood relation ka best tareeka hai family tree banana: parents upar, bachche neeche, shadi ka line beech mein. Har rishta tod kar seedha karo — dadi ka iklauta beta matlab papa, maa ka bhai matlab mama. Sawal ko ulta padhna bhi kaam aata hai. Iklauta, beta-beti aur mama-chacha jaise shabdon par khaas dhyaan do — yehi exam ke trap hain. Agar gender nahi diya hai to jawab cannot be determined ho sakta hai. Aakhir mein tree se jawab padho aur check karo ki har kadam sahi hai.',
            english:
              'The best method for blood relations is drawing a family tree: parents on top, children below, marriage line in between. Break every relation apart — my grandmother only son means father, a mother brother means maternal uncle. Reading the question backwards also helps. Pay special attention to words like only, son-daughter and maternal-paternal uncle — these are the exam traps. If gender is not given, the answer may be cannot be determined. Finally, read the answer from the tree and check that every step is right.',
            hindi:
              'रक्त संबंध का सबसे अच्छा तरीका है परिवार वृक्ष बनाना: माता-पिता ऊपर, बच्चे नीचे, शादी की रेखा बीच में। हर रिश्ता तोड़कर सीधा करो — दादी का इकलौता बेटा मतलब पापा, माँ का भाई मतलब मामा। सवाल को उल्टा पढ़ना भी काम आता है। इकलौता, बेटा-बेटी और मामा-चाचा जैसे शब्दों पर ख़ास ध्यान दो — यही परीक्षा के जाल हैं। अगर लिंग नहीं दिया है तो उत्तर cannot be determined हो सकता है। आख़िर में वृक्ष से उत्तर पढ़ो और जाँचो कि हर कदम सही है।',
          },
        },
      ],
      diagram: {
        kind: 'boxes',
        title: {
          hinglish: 'Family tree kaise banayein',
          english: 'How to draw a family tree',
          hindi: 'परिवार वृक्ष कैसे बनाएँ',
        },
        nodes: [
          {
            t: {
              hinglish: 'Upar: parents',
              english: 'Top: parents',
              hindi: 'ऊपर: माता-पिता',
            },
            s: {
              hinglish: 'Dada-dadi ya nana-nani',
              english: 'Grandparents',
              hindi: 'दादा-दादी या नाना-नानी',
            },
          },
          {
            t: {
              hinglish: 'Beech: unke bachche',
              english: 'Middle: their children',
              hindi: 'बीच: उनके बच्चे',
            },
            s: {
              hinglish: 'Maa-papa, chacha, mama',
              english: 'Parents, uncles, aunts',
              hindi: 'माँ-पापा, चाचा, मामा',
            },
          },
          {
            t: {
              hinglish: 'Neeche: tum aur bhai-behen',
              english: 'Bottom: you and siblings',
              hindi: 'नीचे: तुम और भाई-बहन',
            },
            s: {
              hinglish: 'Poocha gaya rishta yahin milega',
              english: 'The asked relation is found here',
              hindi: 'पूछा गया रिश्ता यहीं मिलेगा',
            },
          },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'Meri maa ka bhai mera kya hota hai?',
            english: 'What is my mother brother to me?',
            hindi: 'मेरी माँ का भाई मेरा क्या होता है?',
          },
          opts: [
            { hinglish: 'Chacha', english: 'Paternal uncle', hindi: 'चाचा' },
            { hinglish: 'Mama', english: 'Maternal uncle', hindi: 'मामा' },
            { hinglish: 'Mausi', english: 'Maternal aunt', hindi: 'मौसी' },
            { hinglish: 'Fufa', english: 'Paternal aunt husband', hindi: 'फूफा' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Maa ka bhai mama hota hai. Chacha papa ka bhai hota hai.',
            english: 'A mother brother is a maternal uncle. A father brother is a paternal uncle.',
            hindi: 'माँ का भाई मामा होता है। चाचा पापा का भाई होता है।',
          },
        },
        {
          q: {
            hinglish: 'A, B ka bhai hai. B, C ki maa hai. A, C ka kya hai?',
            english: 'A is the brother of B. B is the mother of C. What is A to C?',
            hindi: 'A, B का भाई है। B, C की माँ है। A, C का क्या है?',
          },
          opts: [
            { hinglish: 'Chacha', english: 'Paternal uncle', hindi: 'चाचा' },
            { hinglish: 'Mama', english: 'Maternal uncle', hindi: 'मामा' },
            { hinglish: 'Papa', english: 'Father', hindi: 'पापा' },
            { hinglish: 'Dada', english: 'Grandfather', hindi: 'दादा' },
          ],
          ans: 1,
          expl: {
            hinglish: 'B, C ki maa hai aur A, B ka bhai hai — matlab A, C ki maa ka bhai hai, jo mama hota hai.',
            english: 'B is C mother and A is B brother — so A is the brother of C mother, which is a maternal uncle.',
            hindi: 'B, C की माँ है और A, B का भाई है — मतलब A, C की माँ का भाई है, जो मामा होता है।',
          },
        },
        {
          q: {
            hinglish: 'P, Q ka papa hai. Q, R ki behen hai. P, R ka kya hai?',
            english: 'P is the father of Q. Q is the sister of R. What is P to R?',
            hindi: 'P, Q का पापा है। Q, R की बहन है। P, R का क्या है?',
          },
          opts: [
            { hinglish: 'Mama', english: 'Maternal uncle', hindi: 'मामा' },
            { hinglish: 'Chacha', english: 'Paternal uncle', hindi: 'चाचा' },
            { hinglish: 'Papa', english: 'Father', hindi: 'पापा' },
            { hinglish: 'Bhai', english: 'Brother', hindi: 'भाई' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Q aur R bhai-behen hain, isliye dono ke papa ek hi hain. P, Q ka papa hai, to P, R ka bhi papa hai.',
            english: 'Q and R are siblings, so they share the same father. P is Q father, so P is also R father.',
            hindi: 'Q और R भाई-बहन हैं, इसलिए दोनों के पापा एक ही हैं। P, Q का पापा है, तो P, R का भी पापा है।',
          },
        },
        {
          q: {
            hinglish: 'X, Y ka beta hai. Y, Z ki patni hai. Z, W ka beta hai. X, W ka kya hai?',
            english: 'X is the son of Y. Y is the wife of Z. Z is the son of W. What is X to W?',
            hindi: 'X, Y का बेटा है। Y, Z की पत्नी है। Z, W का बेटा है। X, W का क्या है?',
          },
          opts: [
            { hinglish: 'Beta', english: 'Son', hindi: 'बेटा' },
            { hinglish: 'Pota', english: 'Grandson', hindi: 'पोता' },
            { hinglish: 'Bhanja', english: 'Nephew', hindi: 'भांजा' },
            { hinglish: 'Bhai', english: 'Brother', hindi: 'भाई' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Y, Z ki patni hai aur X, Y ka beta hai, to X, Z ka beta hai. Z, W ka beta hai, to X, W ka pota hai.',
            english: 'Y is Z wife and X is Y son, so X is Z son. Z is W son, so X is W grandson.',
            hindi: 'Y, Z की पत्नी है और X, Y का बेटा है, तो X, Z का बेटा है। Z, W का बेटा है, तो X, W का पोता है।',
          },
        },
        {
          q: {
            hinglish: 'Rahul ki behen ki maa Sunita hai. Sunita ke pati Rahul ke kya hain?',
            english: 'Rahul sister mother is Sunita. What is Sunita husband to Rahul?',
            hindi: 'राहुल की बहन की माँ सुनीता है। सुनीता के पति राहुल के क्या हैं?',
          },
          opts: [
            { hinglish: 'Chacha', english: 'Paternal uncle', hindi: 'चाचा' },
            { hinglish: 'Mama', english: 'Maternal uncle', hindi: 'मामा' },
            { hinglish: 'Papa', english: 'Father', hindi: 'पापा' },
            { hinglish: 'Dada', english: 'Grandfather', hindi: 'दादा' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Rahul ki behen ki maa matlab Rahul ki bhi maa hai. Sunita, Rahul ki maa hai, to uske pati Rahul ke papa hain.',
            english: 'Rahul sister mother is also Rahul mother. Sunita is Rahul mother, so her husband is Rahul father.',
            hindi: 'राहुल की बहन की माँ मतलब राहुल की भी माँ है। सुनीता, राहुल की माँ है, तो उसके पति राहुल के पापा हैं।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Blood relation ki practice',
          english: 'Blood relation practice',
          hindi: 'रक्त संबंध का अभ्यास',
        },
        task: {
          hinglish:
            'Neeche wale 3 sawal kagaz par solve karo — family tree bana kar. Phir starter code mein apne answers likh kar Run dabao. Q1: Mere papa ki behen meri kya hoti hai? (Jawab: bua — answer mein "paternal aunt" likho) Q2: A, B ki maa hai. B, C ka bhai hai. A, C ki kya hai? (Jawab: mother — answer mein "mother" likho) Q3: K, L ka beta hai. L, M ki patni hai. M, N ka papa hai. K, N ka kya hai? (Jawab: brother — answer mein "brother" likho) Method: pehle beech ka rishta tod kar seedha karo, phir aakhri rishta nikalo.',
          english:
            'Solve the 3 questions below on paper — draw a family tree. Then type your answers in the starter code and press Run. Q1: What is my father sister to me? (Answer: paternal aunt — type "paternal aunt") Q2: A is the mother of B. B is the brother of C. What is A to C? (Answer: mother — type "mother") Q3: K is the son of L. L is the wife of M. M is the father of N. What is K to N? (Answer: brother — type "brother") Method: first break the middle relation apart, then work out the final relation.',
          hindi:
            'नीचे वाले 3 सवाल काग़ज़ पर हल करो — परिवार वृक्ष बनाकर। फिर स्टार्टर कोड में अपने उत्तर लिखकर Run दबाओ। Q1: मेरे पापा की बहन मेरी क्या होती है? (उत्तर: बुआ — उत्तर में "paternal aunt" लिखो) Q2: A, B की माँ है। B, C का भाई है। A, C की क्या है? (उत्तर: mother — उत्तर में "mother" लिखो) Q3: K, L का बेटा है। L, M की पत्नी है। M, N का पापा है। K, N का क्या है? (उत्तर: brother — उत्तर में "brother" लिखो) तरीका: पहले बीच का रिश्ता तोड़कर सीधा करो, फिर आख़िरी रिश्ता निकालो।',
        },
        language: 'python',
        starter:
          '# Apne 3 answers yahan likho (chhote akshar mein), phir Run dabao.\nanswers = ["", "", ""]\ncorrect = ["paternal aunt", "mother", "brother"]\nfor i in range(3):\n    if answers[i].strip().lower() == correct[i]:\n        print(f"Q{i+1}: sahi hai!")\n    else:\n        print(f"Q{i+1}: abhi sahi answer nahi mila. Sahi answer: {correct[i]}")\n',
        expected: 'Teeno sahi hone par script har sawal ke saamne "sahi hai!" print karega.',
      },
      readMinutes: 10,
    },
    {
      id: 'logic-coding-decoding',
      subjectId: 'logical-reasoning',
      title: {
        hinglish: 'Coding-decoding — secret code ko todna',
        english: 'Coding-Decoding — Cracking the Secret Code',
        hindi: 'कोडिंग-डिकोडिंग — गुप्त कोड को तोड़ना',
      },
      summary: {
        hinglish: 'Letter shift, ulta alphabet, number code aur reverse — code ka rule dhoondhna aur use karke naya word decode karna.',
        english: 'Letter shifts, reverse alphabet, number codes and reversals — find the code rule and use it to decode a new word.',
        hindi: 'अक्षर बदलाव, उल्टा वर्णमाला, संख्या कोड और उल्टा — कोड का नियम खोजना और उससे नया शब्द डिकोड करना।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish:
              'Coding-decoding mein ek word ko ek rule se badal kar code banaya jata hai, aur tumhe woh rule dhoondh kar dusre word ka code nikalna hota hai. Sabse common rule hai letter shift: har letter ko ek fixed jagah aage ya peeche kar do. Jaise CAT ka code DBU hai — C se D (+1), A se B (+1), T se U (+1). Har letter ek jagah aage badha. Dusra rule hai reverse: word ko ulta likh do — MATH ka code HTAM hai. Teesra rule hai number code: har letter ko uski position se badlo — A = 1, B = 2, C = 3. Jaise CAT = 3 + 1 + 20 = 24. Chautha rule hai ulta alphabet: A ki jagah Z, B ki jagah Y — matlab 27 minus position. Jaise ZOO ka code ALL hota hai, kyunki Z ki jagah A aur O ki jagah L aata hai. Har code mein pehle ye dekho ki letters aage badhe, peeche gaye, ulte hue ya number bane.',
            english:
              'In coding-decoding, a word is changed into a code by a rule, and you must find that rule and work out the code of another word. The most common rule is the letter shift: move every letter a fixed number of places forward or back. For example, the code of CAT is DBU — C to D (+1), A to B (+1), T to U (+1). Every letter moved one place forward. The second rule is reversal: write the word backwards — the code of MATH is HTAM. The third rule is the number code: replace every letter with its position — A = 1, B = 2, C = 3. For example, CAT = 3 + 1 + 20 = 24. The fourth rule is the reverse alphabet: A becomes Z, B becomes Y — that means 27 minus the position. For example, the code of ZOO is ALL, because Z becomes A and O becomes L. In every code, first check whether the letters moved forward, moved back, got reversed or became numbers.',
            hindi:
              'कोडिंग-डिकोडिंग में एक शब्द को एक नियम से बदलकर कोड बनाया जाता है, और तुम्हें वह नियम खोजकर दूसरे शब्द का कोड निकालना होता है। सबसे आम नियम है अक्षर बदलाव: हर अक्षर को एक निश्चित स्थान आगे या पीछे कर दो। जैसे CAT का कोड DBU है — C से D (+1), A से B (+1), T से U (+1)। हर अक्षर एक स्थान आगे बढ़ा। दूसरा नियम है उल्टा: शब्द को उल्टा लिख दो — MATH का कोड HTAM है। तीसरा नियम है संख्या कोड: हर अक्षर को उसकी स्थिति से बदलो — A = 1, B = 2, C = 3। जैसे CAT = 3 + 1 + 20 = 24। चौथा नियम है उल्टी वर्णमाला: A की जगह Z, B की जगह Y — मतलब 27 घटा स्थिति। जैसे ZOO का कोड ALL होता है, क्योंकि Z की जगह A और O की जगह L आता है। हर कोड में पहले यह देखो कि अक्षर आगे बढ़े, पीछे गए, उल्टे हुए या संख्या बने।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असल ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish:
              'Soch lo tum aur tumhara dost secret message bhejte ho. Tum kehte ho DOG ka code EPH hai. Dost kaise samjhega? Woh dekhega: D se E (+1), O se P (+1), G se H (+1). Rule mil gaya — har letter ek aage. Ab woh CAT ka code nikal sakta hai: C se D, A se B, T se U — matlab DBU. Number code ka scene: ek exam mein likha hai SUN = 54. Kaise? S = 19, U = 21, N = 14. Jod = 19 + 21 + 14 = 54. To MOON ka code hoga M = 13, O = 15, O = 15, N = 14, jod = 57. Reverse code ka scene: tumhare bhai ne PLAY likha aur code mein YALP likh diya — bas ulta kar diya. Ye chaaro rules exam mein baar-baar aate hain, bas words badal jate hain. Rule dhoondhna hi asli kaam hai; code likhna to uske baad aasan hai.',
            english:
              'Imagine you and your friend send secret messages. You say the code of DOG is EPH. How will your friend understand? He will see: D to E (+1), O to P (+1), G to H (+1). The rule is found — every letter moves one forward. Now he can work out the code of CAT: C to D, A to B, T to U — which means DBU. A number code scene: an exam says SUN = 54. How? S = 19, U = 21, N = 14. Sum = 19 + 21 + 14 = 54. So the code of MOON is M = 13, O = 15, O = 15, N = 14, sum = 57. A reverse code scene: your brother wrote PLAY and wrote YALP as the code — he just reversed it. These four rules appear again and again in exams; only the words change. Finding the rule is the real work; writing the code after that is easy.',
            hindi:
              'मान लो तुम और तुम्हारा दोस्त गुप्त संदेश भेजते हो। तुम कहते हो DOG का कोड EPH है। दोस्त कैसे समझेगा? वह देखेगा: D से E (+1), O से P (+1), G से H (+1)। नियम मिल गया — हर अक्षर एक आगे। अब वह CAT का कोड निकाल सकता है: C से D, A से B, T से U — मतलब DBU। संख्या कोड का दृश्य: एक परीक्षा में लिखा है SUN = 54। कैसे? S = 19, U = 21, N = 14। जोड़ = 19 + 21 + 14 = 54। तो MOON का कोड होगा M = 13, O = 15, O = 15, N = 14, जोड़ = 57। उल्टा कोड का दृश्य: तुम्हारे भाई ने PLAY लिखा और कोड में YALP लिख दिया — बस उल्टा कर दिया। ये चारों नियम परीक्षा में बार-बार आते हैं, बस शब्द बदल जाते हैं। नियम खोजना ही असली काम है; कोड लिखना तो उसके बाद आसान है।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step, worked example ke saath',
            english: 'Step-by-step, with a worked example',
            hindi: 'कदम-दर-कदम, हल किए हुए उदाहरण के साथ',
          },
          body: {
            hinglish:
              'Example 1: CAT ka code DBU hai. DOG ka code kya hoga? Step 1: har letter ka shift nikalo — C se D = +1, A se B = +1, T se U = +1. Step 2: rule hai har letter +1. Step 3: DOG par lagao — D se E, O se P, G se H. Jawab: EPH. Example 2: MATH ka code HTAM hai. GAME ka code kya hoga? Step 1: MATH ko ulta likho — H, T, A, M. Wahi HTAM hai. Step 2: rule hai reverse. Step 3: GAME ko ulta likho — E, M, A, G. Jawab: EMAG. Example 3: CAT = 24 hai. DOG ka number code kya hoga? Step 1: CAT mein C = 3, A = 1, T = 20, jod = 24 — rule hai letters ki position ka jod. Step 2: DOG mein D = 4, O = 15, G = 7, jod = 4 + 15 + 7 = 26. Jawab: 26. Har example mein pehle rule nikala, phir use naye word par lagaya — yehi order hamesha rakho.',
            english:
              'Example 1: the code of CAT is DBU. What is the code of DOG? Step 1: find the shift of each letter — C to D = +1, A to B = +1, T to U = +1. Step 2: the rule is every letter +1. Step 3: apply it to DOG — D to E, O to P, G to H. Answer: EPH. Example 2: the code of MATH is HTAM. What is the code of GAME? Step 1: write MATH backwards — H, T, A, M. That is HTAM. Step 2: the rule is reversal. Step 3: write GAME backwards — E, M, A, G. Answer: EMAG. Example 3: CAT = 24. What is the number code of DOG? Step 1: in CAT, C = 3, A = 1, T = 20, sum = 24 — the rule is the sum of letter positions. Step 2: in DOG, D = 4, O = 15, G = 7, sum = 4 + 15 + 7 = 26. Answer: 26. In every example, first find the rule, then apply it to the new word — always keep this order.',
            hindi:
              'उदाहरण 1: CAT का कोड DBU है। DOG का कोड क्या होगा? चरण 1: हर अक्षर का बदलाव निकालो — C से D = +1, A से B = +1, T से U = +1। चरण 2: नियम है हर अक्षर +1। चरण 3: DOG पर लगाओ — D से E, O से P, G से H। उत्तर: EPH। उदाहरण 2: MATH का कोड HTAM है। GAME का कोड क्या होगा? चरण 1: MATH को उल्टा लिखो — H, T, A, M। वही HTAM है। चरण 2: नियम है उल्टा। चरण 3: GAME को उल्टा लिखो — E, M, A, G। उत्तर: EMAG। उदाहरण 3: CAT = 24 है। DOG का संख्या कोड क्या होगा? चरण 1: CAT में C = 3, A = 1, T = 20, जोड़ = 24 — नियम है अक्षरों की स्थिति का जोड़। चरण 2: DOG में D = 4, O = 15, G = 7, जोड़ = 4 + 15 + 7 = 26। उत्तर: 26। हर उदाहरण में पहले नियम निकाला, फिर उसे नए शब्द पर लगाया — यही क्रम हमेशा रखो।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur ye hoti kyun hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और ये क्यों होती हैं',
          },
          body: {
            hinglish:
              'Sabse badi galti hai sirf pehla letter check karke rule maan lena. Jaise CAT se DBU mein C se D +1 hai, lekin ho sakta hai dusre letter ka shift alag ho — jaise +1, +2, +3 ka rule ho. Hamesha har letter ka shift alag se nikalo. Ye galti isliye hoti hai kyunki dimaag pehla pattern hi final maan leta hai. Dusri galti hai Z ke aage badhne par atak jana: Z ke baad A aata hai — alphabet gol ghumta hai. Jaise Y + 2 = A hota hai, Z nahi. Log Z ke baad ruk jate hain ya galat letter likh dete hain. Teesri galti hai number code mein jod ki jagah multiply kar dena ya position galat likhna: O ki position 15 hai, 14 nahi. A = 1 se ginna shuru karo aur har baar check karo. Chauthi galti hai reverse aur shift ko milana: agar code ulta dikh raha hai to pehle reverse check karo, shift baad mein.',
            english:
              'The biggest mistake is accepting a rule after checking only the first letter. In CAT to DBU, C to D is +1, but the second letter shift could be different — for example, a rule of +1, +2, +3. Always find the shift of every letter separately. This mistake happens because the mind treats the first pattern as final. The second mistake is getting stuck when moving past Z: after Z comes A — the alphabet wraps around. For example, Y + 2 = A, not Z. People stop after Z or write the wrong letter. The third mistake is multiplying instead of adding in a number code, or writing the wrong position: O is position 15, not 14. Start counting from A = 1 and check each time. The fourth mistake is mixing reversal with shift: if the code looks reversed, check reversal first and shift afterwards.',
            hindi:
              'सबसे बड़ी गलती है सिर्फ़ पहला अक्षर जाँचकर नियम मान लेना। जैसे CAT से DBU में C से D +1 है, लेकिन हो सकता है दूसरे अक्षर का बदलाव अलग हो — जैसे +1, +2, +3 का नियम हो। हमेशा हर अक्षर का बदलाव अलग से निकालो। यह गलती इसलिए होती है क्योंकि दिमाग़ पहला पैटर्न ही अंतिम मान लेता है। दूसरी गलती है Z के आगे बढ़ने पर अटक जाना: Z के बाद A आता है — वर्णमाला गोल घूमती है। जैसे Y + 2 = A होता है, Z नहीं। लोग Z के बाद रुक जाते हैं या ग़लत अक्षर लिख देते हैं। तीसरी गलती है संख्या कोड में जोड़ की जगह गुणा कर देना या स्थिति ग़लत लिखना: O की स्थिति 15 है, 14 नहीं। A = 1 से गिनना शुरू करो और हर बार जाँचो। चौथी गलती है उल्टा और बदलाव को मिलाना: अगर कोड उल्टा दिख रहा है तो पहले उल्टा जाँचो, बदलाव बाद में।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases aur shortcuts (trap samajh ke)',
            english: 'Edge cases and shortcuts (know the trap)',
            hindi: 'ख़ास मामले और आसान तरीके (जाल समझकर)',
          },
          body: {
            hinglish:
              'Ek shortcut hai: pehle aur aakhri letter ka shift dekho — agar dono ka shift barabar hai to rule simple shift hai. Agar pehla letter ulta dikh raha hai to reverse rule try karo. Dusra shortcut hai reverse alphabet ka formula: code letter ki position = 27 − original position. Jaise O = 15, to code = 27 − 15 = 12, matlab L. ZOO ka code ALL isi se aata hai: Z = 26, to 27 − 26 = 1, matlab A; O = 15, to 12, matlab L. Teesra edge case: kabhi-kabhi code mein vowels ko alag rule lagta hai — jaise sirf vowels badalte hain aur consonants wahi rehte hain. Agar code mein sirf kuch letters badle hon to wahi letters check karo. Chautha: number code mein kabhi jod hota hai, kabhi multiply — jaise CAT = 3 × 1 × 20 = 60 bhi ho sakta hai. Pehle jod try karo, phir multiply.',
            english:
              'One shortcut: look at the shift of the first and last letters — if both shifts are equal, the rule is a simple shift. If the first letter looks reversed, try the reversal rule. A second shortcut is the reverse-alphabet formula: code letter position = 27 − original position. For example, O = 15, so code = 27 − 15 = 12, which means L. The code of ZOO, ALL, comes from this: Z = 26, so 27 − 26 = 1, which means A; O = 15, so 12, which means L. A third edge case: sometimes a different rule applies only to vowels — only the vowels change and the consonants stay the same. If only some letters changed in the code, check those letters. A fourth: in a number code, sometimes it is a sum and sometimes a product — for example, CAT could also be 3 × 1 × 20 = 60. Try the sum first, then the product.',
            hindi:
              'एक आसान तरीका है: पहले और आख़िरी अक्षर का बदलाव देखो — अगर दोनों का बदलाव बराबर है तो नियम सरल बदलाव है। अगर पहला अक्षर उल्टा दिख रहा है तो उल्टा नियम आज़माओ। दूसरा आसान तरीका है उल्टी वर्णमाला का सूत्र: कोड अक्षर की स्थिति = 27 − मूल स्थिति। जैसे O = 15, तो कोड = 27 − 15 = 12, मतलब L। ZOO का कोड ALL इसी से आता है: Z = 26, तो 27 − 26 = 1, मतलब A; O = 15, तो 12, मतलब L। तीसरा ख़ास मामला: कभी-कभी कोड में स्वरों को अलग नियम लगता है — जैसे सिर्फ़ स्वर बदलते हैं और व्यंजन वही रहते हैं। अगर कोड में सिर्फ़ कुछ अक्षर बदले हों तो वही अक्षर जाँचो। चौथा: संख्या कोड में कभी जोड़ होता है, कभी गुणा — जैसे CAT = 3 × 1 × 20 = 60 भी हो सकता है। पहले जोड़ आज़माओ, फिर गुणा।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish:
              'Soch lo CAT ka code DBU ki jagah ECV ho jaye. To shift hoga +2, +2, +2 — rule badal gaya, lekin tareeka wahi hai. DOG ka code hoga FQI: D + 2 = F, O + 2 = Q, G + 2 = I. Ab socho shift +1 ki jagah −1 ho jaye: CAT ka code BZS hoga — C − 1 = B, A − 1 = Z, T − 1 = S. Dekho, A − 1 = Z hota hai, kyunki alphabet gol ghumta hai. Ab socho number code mein jod ki jagah multiply ho: CAT = 3 × 1 × 20 = 60, to DOG = 4 × 15 × 7 = 420. Ek rule badalne se poora code badal jata hai — isiliye pehle rule pakka karo, phir code nikalo. Exam mein jab bhi code ajeeb lage to pehle ye socho: shift hai, reverse hai, ya number hai?',
            english:
              'Suppose the code of CAT becomes ECV instead of DBU. Then the shift is +2, +2, +2 — the rule changed, but the method stays the same. The code of DOG becomes FQI: D + 2 = F, O + 2 = Q, G + 2 = I. Now suppose the shift is −1 instead of +1: the code of CAT becomes BZS — C − 1 = B, A − 1 = Z, T − 1 = S. See, A − 1 = Z, because the alphabet wraps around. Now suppose the number code uses multiplication instead of addition: CAT = 3 × 1 × 20 = 60, so DOG = 4 × 15 × 7 = 420. Changing one rule changes the whole code — that is why you must fix the rule first, then work out the code. In exams, whenever a code looks strange, first ask: is it a shift, a reversal, or a number?',
            hindi:
              'मान लो CAT का कोड DBU की जगह ECV हो जाए। तो बदलाव होगा +2, +2, +2 — नियम बदल गया, लेकिन तरीका वही है। DOG का कोड होगा FQI: D + 2 = F, O + 2 = Q, G + 2 = I। अब सोचो बदलाव +1 की जगह −1 हो जाए: CAT का कोड BZS होगा — C − 1 = B, A − 1 = Z, T − 1 = S। देखो, A − 1 = Z होता है, क्योंकि वर्णमाला गोल घूमती है। अब सोचो संख्या कोड में जोड़ की जगह गुणा हो: CAT = 3 × 1 × 20 = 60, तो DOG = 4 × 15 × 7 = 420। एक नियम बदलने से पूरा कोड बदल जाता है — इसलिए पहले नियम पक्का करो, फिर कोड निकालो। परीक्षा में जब भी कोड अजीब लगे तो पहले यह सोचो: बदलाव है, उल्टा है, या संख्या है?',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish:
              'Coding mein pehle rule dhoondho: har letter ka shift nikalo, reverse check karo, ya number code ka jod nikalo. Shift mein A = 1 se ginna shuru karo aur Z ke baad A aata hai, ye mat bhoolo. Reverse alphabet ka formula hai 27 − position. Number code mein pehle jod try karo, phir multiply. Rule milne ke baad hi naye word par lagao, aur aakhir mein apna code wapas check karo — kya wohi rule diye gaye example par bhi lagta hai? Agar haan to jawab sahi hai.',
            english:
              'In coding, first find the rule: work out the shift of every letter, check reversal, or find the number-code sum. In a shift, start counting from A = 1, and do not forget that after Z comes A. The reverse-alphabet formula is 27 − position. In a number code, try the sum first, then the product. Only after finding the rule, apply it to the new word, and finally check your code back — does the same rule also fit the given example? If yes, the answer is right.',
            hindi:
              'कोडिंग में पहले नियम खोजो: हर अक्षर का बदलाव निकालो, उल्टा जाँचो, या संख्या कोड का जोड़ निकालो। बदलाव में A = 1 से गिनना शुरू करो और Z के बाद A आता है, यह मत भूलो। उल्टी वर्णमाला का सूत्र है 27 − स्थिति। संख्या कोड में पहले जोड़ आज़माओ, फिर गुणा। नियम मिलने के बाद ही नए शब्द पर लगाओ, और आख़िर में अपना कोड वापस जाँचो — क्या वही नियम दिए गए उदाहरण पर भी लगता है? अगर हाँ तो उत्तर सही है।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Code todne ka flow',
          english: 'The flow for cracking a code',
          hindi: 'कोड तोड़ने का प्रवाह',
        },
        nodes: [
          {
            t: {
              hinglish: 'Har letter ka shift nikalo',
              english: 'Find each letter shift',
              hindi: 'हर अक्षर का बदलाव निकालो',
            },
            s: {
              hinglish: 'A = 1 se ginna shuru karo',
              english: 'Start counting from A = 1',
              hindi: 'A = 1 से गिनना शुरू करो',
            },
          },
          {
            t: {
              hinglish: 'Reverse ya number check karo',
              english: 'Check reversal or numbers',
              hindi: 'उल्टा या संख्या जाँचो',
            },
            s: {
              hinglish: 'Shift na mile to ye dekho',
              english: 'If no shift fits, check this',
              hindi: 'बदलाव न मिले तो यह देखो',
            },
          },
          {
            t: {
              hinglish: 'Rule naye word par lagao',
              english: 'Apply the rule to the new word',
              hindi: 'नियम नए शब्द पर लगाओ',
            },
            s: {
              hinglish: 'Phir example par wapas check karo',
              english: 'Then check it back on the example',
              hindi: 'फिर उदाहरण पर वापस जाँचो',
            },
          },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'Agar APPLE ka code BQQMF hai, to BALL ka code kya hoga?',
            english: 'If the code of APPLE is BQQMF, what is the code of BALL?',
            hindi: 'अगर APPLE का कोड BQQMF है, तो BALL का कोड क्या होगा?',
          },
          opts: [
            { hinglish: 'CBMM', english: 'CBMM', hindi: 'CBMM' },
            { hinglish: 'CBMN', english: 'CBMN', hindi: 'CBMN' },
            { hinglish: 'DBMM', english: 'DBMM', hindi: 'DBMM' },
            { hinglish: 'CBNN', english: 'CBNN', hindi: 'CBNN' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Har letter +1 hai: A se B, P se Q, P se Q, L se M, E se F. BALL mein B se C, A se B, L se M, L se M — matlab CBMM.',
            english: 'Every letter is +1: A to B, P to Q, P to Q, L to M, E to F. In BALL, B to C, A to B, L to M, L to M — which means CBMM.',
            hindi: 'हर अक्षर +1 है: A से B, P से Q, P से Q, L से M, E से F। BALL में B से C, A से B, L से M, L से M — मतलब CBMM।',
          },
        },
        {
          q: {
            hinglish: 'Agar CAT = 24 hai (letters ki position ka jod), to BAT kitna hoga?',
            english: 'If CAT = 24 (sum of letter positions), what is BAT?',
            hindi: 'अगर CAT = 24 है (अक्षरों की स्थिति का जोड़), तो BAT कितना होगा?',
          },
          opts: [
            { hinglish: '22', english: '22', hindi: '22' },
            { hinglish: '23', english: '23', hindi: '23' },
            { hinglish: '24', english: '24', hindi: '24' },
            { hinglish: '25', english: '25', hindi: '25' },
          ],
          ans: 1,
          expl: {
            hinglish: 'B = 2, A = 1, T = 20. Jod = 2 + 1 + 20 = 23.',
            english: 'B = 2, A = 1, T = 20. Sum = 2 + 1 + 20 = 23.',
            hindi: 'B = 2, A = 1, T = 20। जोड़ = 2 + 1 + 20 = 23।',
          },
        },
        {
          q: {
            hinglish: 'Agar ZOO ka code ALL hai, to kaun sa rule use hua hai?',
            english: 'If the code of ZOO is ALL, which rule was used?',
            hindi: 'अगर ZOO का कोड ALL है, तो कौन सा नियम उपयोग हुआ है?',
          },
          opts: [
            { hinglish: 'Har letter +1', english: 'Every letter +1', hindi: 'हर अक्षर +1' },
            { hinglish: 'Word ko ulta likha', english: 'Word written backwards', hindi: 'शब्द को उल्टा लिखा' },
            { hinglish: 'Ulta alphabet (27 − position)', english: 'Reverse alphabet (27 − position)', hindi: 'उल्टी वर्णमाला (27 − स्थिति)' },
            { hinglish: 'Har letter −1', english: 'Every letter −1', hindi: 'हर अक्षर −1' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Z = 26, to 27 − 26 = 1, matlab A. O = 15, to 27 − 15 = 12, matlab L. Isliye ZOO ka code ALL hai.',
            english: 'Z = 26, so 27 − 26 = 1, which means A. O = 15, so 27 − 15 = 12, which means L. So the code of ZOO is ALL.',
            hindi: 'Z = 26, तो 27 − 26 = 1, मतलब A। O = 15, तो 27 − 15 = 12, मतलब L। इसलिए ZOO का कोड ALL है।',
          },
        },
        {
          q: {
            hinglish: 'Agar MANGO ka code NBOHP hai, to ORANGE ka code kya hoga?',
            english: 'If the code of MANGO is NBOHP, what is the code of ORANGE?',
            hindi: 'अगर MANGO का कोड NBOHP है, तो ORANGE का कोड क्या होगा?',
          },
          opts: [
            { hinglish: 'PSBOHF', english: 'PSBOHF', hindi: 'PSBOHF' },
            { hinglish: 'PSBPHE', english: 'PSBPHE', hindi: 'PSBPHE' },
            { hinglish: 'QTBOHF', english: 'QTBOHF', hindi: 'QTBOHF' },
            { hinglish: 'PSBOHE', english: 'PSBOHE', hindi: 'PSBOHE' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Har letter +1 hai: M se N, A se B, N se O, G se H, O se P. ORANGE mein O se P, R se S, A se B, N se O, G se H, E se F — matlab PSBOHF.',
            english: 'Every letter is +1: M to N, A to B, N to O, G to H, O to P. In ORANGE, O to P, R to S, A to B, N to O, G to H, E to F — which means PSBOHF.',
            hindi: 'हर अक्षर +1 है: M से N, A से B, N से O, G से H, O से P। ORANGE में O से P, R से S, A से B, N से O, G से H, E से F — मतलब PSBOHF।',
          },
        },
        {
          q: {
            hinglish: 'Agar SUN = 54 hai (letters ki position ka jod), to MOON kitna hoga?',
            english: 'If SUN = 54 (sum of letter positions), what is MOON?',
            hindi: 'अगर SUN = 54 है (अक्षरों की स्थिति का जोड़), तो MOON कितना होगा?',
          },
          opts: [
            { hinglish: '55', english: '55', hindi: '55' },
            { hinglish: '56', english: '56', hindi: '56' },
            { hinglish: '57', english: '57', hindi: '57' },
            { hinglish: '58', english: '58', hindi: '58' },
          ],
          ans: 2,
          expl: {
            hinglish: 'M = 13, O = 15, O = 15, N = 14. Jod = 13 + 15 + 15 + 14 = 57.',
            english: 'M = 13, O = 15, O = 15, N = 14. Sum = 13 + 15 + 15 + 14 = 57.',
            hindi: 'M = 13, O = 15, O = 15, N = 14। जोड़ = 13 + 15 + 15 + 14 = 57।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Coding ki practice',
          english: 'Coding practice',
          hindi: 'कोडिंग का अभ्यास',
        },
        task: {
          hinglish:
            'Neeche wale 3 sawal kagaz par solve karo, phir starter code mein apne answers likh kar Run dabao. Q1: Agar DOG ka code EPH hai (+1 rule), to CAT ka code kya hoga? (Jawab: DBU — answer mein "DBU" likho) Q2: Agar BAD = 7 hai (letters ki position ka jod), to CAB kitna hoga? (Jawab: 6) Q3: Agar rule reverse hai, to PLAY ka code kya hoga? (Jawab: YALP — answer mein "YALP" likho) Method: pehle har letter ka shift nikalo ya jod nikalo, phir rule lagao.',
          english:
            'Solve the 3 questions below on paper, then type your answers in the starter code and press Run. Q1: If the code of DOG is EPH (+1 rule), what is the code of CAT? (Answer: DBU — type "DBU") Q2: If BAD = 7 (sum of letter positions), what is CAB? (Answer: 6) Q3: If the rule is reversal, what is the code of PLAY? (Answer: YALP — type "YALP") Method: first find each letter shift or the sum, then apply the rule.',
          hindi:
            'नीचे वाले 3 सवाल काग़ज़ पर हल करो, फिर स्टार्टर कोड में अपने उत्तर लिखकर Run दबाओ। Q1: अगर DOG का कोड EPH है (+1 नियम), तो CAT का कोड क्या होगा? (उत्तर: DBU — उत्तर में "DBU" लिखो) Q2: अगर BAD = 7 है (अक्षरों की स्थिति का जोड़), तो CAB कितना होगा? (उत्तर: 6) Q3: अगर नियम उल्टा है, तो PLAY का कोड क्या होगा? (उत्तर: YALP — उत्तर में "YALP" लिखो) तरीका: पहले हर अक्षर का बदलाव निकालो या जोड़ निकालो, फिर नियम लगाओ.',
        },
        language: 'python',
        starter:
          '# Apne 3 answers yahan likho, phir Run dabao.\nanswers = ["", None, ""]\ncorrect = ["DBU", 6, "YALP"]\nfor i in range(3):\n    a = answers[i]\n    if isinstance(a, str):\n        a = a.strip().upper()\n    if a == correct[i]:\n        print(f"Q{i+1}: sahi hai!")\n    else:\n        print(f"Q{i+1}: abhi sahi answer nahi mila. Sahi answer: {correct[i]}")\n',
        expected: 'Teeno sahi hone par script har sawal ke saamne "sahi hai!" print karega.',
      },
      readMinutes: 10,
    },
    {
      id: 'logic-seating-arrangement',
      subjectId: 'logical-reasoning',
      title: {
        hinglish: 'Seating arrangement — kaun kahan baitha hai',
        english: 'Seating Arrangement — Who Sits Where',
        hindi: 'बैठक व्यवस्था — कौन कहाँ बैठा है',
      },
      summary: {
        hinglish: 'Row aur circle mein baithne ke sawal — left-right ka matlab, opposite aur immediate neighbour, sab ek diagram se.',
        english: 'Row and circle seating questions — what left and right mean, opposites and immediate neighbours, all from one diagram.',
        hindi: 'पंक्ति और वृत्त में बैठने के सवाल — बाएँ-दाएँ का मतलब, आमने-सामने और पड़ोसी, सब एक आरेख से।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish:
              'Seating arrangement mein kuch log ek line mein ya ek gol ghere mein baithe hote hain, aur unke baithne ke baare mein kuch clues diye hote hain. Tumhe un clues se poora arrangement banana hota hai aur phir sawal ka jawab dena hota hai. Row mein log aam taur par north ki taraf dekh rahe hote hain — matlab unka left tumhara left hota hai aur unka right tumhara right hota hai. Circle mein log centre ki taraf dekh rahe hote hain — isliye unka left aur right ulta lagta hai. Jaise circle mein upar baithe aadmi ka left tumhare hisaab se right side par hota hai. Do shabd bahut aate hain: immediate matlab bilkul bagal mein, aur opposite matlab bilkul saamne. Jaise 6 logon ke circle mein ek ke opposite woh hota hai jo usse 3 jagah door hai. Arrangement banane ka tareeka hai: pehle fixed clue lo, phir baaki logon ko ek-ek karke rakho.',
            english:
              'In seating arrangement, some people sit in a row or in a circle, and clues are given about where they sit. You must build the full arrangement from the clues and then answer the question. In a row, people usually face north — so their left is your left and their right is your right. In a circle, people face the centre — so their left and right look reversed. For example, for the person sitting at the top of a circle, his left is on your right side. Two words appear very often: immediate means right next to, and opposite means directly across. In a circle of 6 people, the opposite of one person is the one 3 places away. The method for building an arrangement is: take the fixed clue first, then place the remaining people one by one.',
            hindi:
              'बैठक व्यवस्था में कुछ लोग एक पंक्ति में या एक गोल घेरे में बैठे होते हैं, और उनके बैठने के बारे में कुछ संकेत दिए होते हैं। तुम्हें उन संकेतों से पूरी व्यवस्था बनानी होती है और फिर सवाल का उत्तर देना होता है। पंक्ति में लोग आमतौर पर उत्तर की तरफ़ देख रहे होते हैं — मतलब उनका बायाँ तुम्हारा बायाँ होता है और उनका दायाँ तुम्हारा दायाँ होता है। वृत्त में लोग केंद्र की तरफ़ देख रहे होते हैं — इसलिए उनका बायाँ और दायाँ उल्टा लगता है। जैसे वृत्त में ऊपर बैठे आदमी का बायाँ तुम्हारे हिसाब से दाईं तरफ़ होता है। दो शब्द बहुत आते हैं: immediate मतलब बिल्कुल बगल में, और opposite मतलब बिल्कुल सामने। जैसे 6 लोगों के वृत्त में एक के सामने वह होता है जो उससे 3 जगह दूर है। व्यवस्था बनाने का तरीका है: पहले निश्चित संकेत लो, फिर बाक़ी लोगों को एक-एक करके रखो।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असल ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish:
              'Soch lo class mein 5 dost ek line mein baithe hain: D, C, A, B, E. A beech mein baitha hai, B uske turant right mein hai, C uske turant left mein hai, D left end par hai aur E right end par hai. Agar koi poochhe ki B ke left mein kaun hai to jawab A hai — kyunki B ke turant left mein A baitha hai. Ab circle ka scene: ek gol table par 4 dost baithe hain — A upar (north), B right (east), C neeche (south), D left (west). A, C ke opposite hai. B, A ke turant left mein hai — kyunki A centre ki taraf dekh raha hai, uska left east side par hai, jahan B baitha hai. Ab poochho C ke turant right mein kaun hai? C neeche baitha hai aur centre ki taraf dekh raha hai, uska right east side par hai — wahan B baitha hai. To jawab B hai. Ye left-right ka ulta hona hi circle ka sabse bada trap hai.',
            english:
              'Imagine 5 friends sit in a row in class: D, C, A, B, E. A sits in the middle, B sits immediately to his right, C sits immediately to his left, D sits at the left end and E sits at the right end. If someone asks who sits to the left of B, the answer is A — because A sits immediately to the left of B. Now a circle scene: 4 friends sit around a round table — A at the top (north), B on the right (east), C at the bottom (south), D on the left (west). A is opposite C. B sits immediately to the left of A — because A faces the centre, his left is on the east side, where B sits. Now ask: who sits immediately to the right of C? C sits at the bottom facing the centre, so his right is on the east side — where B sits. So the answer is B. This reversal of left and right is the biggest trap in circle questions.',
            hindi:
              'मान लो कक्षा में 5 दोस्त एक पंक्ति में बैठे हैं: D, C, A, B, E। A बीच में बैठा है, B उसके तुरंत दाएँ है, C उसके तुरंत बाएँ है, D बाएँ छोर पर है और E दाएँ छोर पर है। अगर कोई पूछे कि B के बाएँ कौन है तो उत्तर A है — क्योंकि B के तुरंत बाएँ A बैठा है। अब वृत्त का दृश्य: एक गोल मेज़ पर 4 दोस्त बैठे हैं — A ऊपर (उत्तर), B दाएँ (पूर्व), C नीचे (दक्षिण), D बाएँ (पश्चिम)। A, C के सामने है। B, A के तुरंत बाएँ है — क्योंकि A केंद्र की तरफ़ देख रहा है, उसका बायाँ पूर्व दिशा में है, जहाँ B बैठा है। अब पूछो C के तुरंत दाएँ कौन है? C नीचे बैठा है और केंद्र की तरफ़ देख रहा है, उसका दायाँ पूर्व दिशा में है — वहाँ B बैठा है। तो उत्तर B है। यह बाएँ-दाएँ का उल्टा होना ही वृत्त का सबसे बड़ा जाल है।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step, worked example ke saath',
            english: 'Step-by-step, with a worked example',
            hindi: 'कदम-दर-कदम, हल किए हुए उदाहरण के साथ',
          },
          body: {
            hinglish:
              'Example 1: 5 log ek row mein north ki taraf dekh rahe hain. A beech mein hai, B uske turant right mein hai, C uske turant left mein hai, D left end par hai, E right end par hai. Arrangement kya hoga? Step 1: A beech mein hai, matlab position 3 par. Step 2: B, A ke turant right mein hai, matlab position 4 par. Step 3: C, A ke turant left mein hai, matlab position 2 par. Step 4: D left end par hai, matlab position 1 par. Step 5: bacha E, position 5 par. Arrangement: D C A B E. Example 2: 6 log ek row mein baithe hain. P, left se teesra hai. Q, P ke right se dusra hai. R, right end par hai. S, P aur Q ke beech mein hai. T, left se dusra hai. Step 1: P position 3 par hai. Step 2: Q, P ke right se dusra hai, matlab position 5 par. Step 3: R right end par hai, matlab position 6 par. Step 4: S, P aur Q ke beech mein hai, matlab position 4 par. Step 5: T position 2 par hai. Step 6: bacha U position 1 par. Arrangement: U T P S Q R.',
            english:
              'Example 1: 5 people sit in a row facing north. A is in the middle, B sits immediately to his right, C immediately to his left, D at the left end, E at the right end. What is the arrangement? Step 1: A is in the middle, which means position 3. Step 2: B sits immediately to the right of A, which means position 4. Step 3: C sits immediately to the left of A, which means position 2. Step 4: D is at the left end, which means position 1. Step 5: the remaining E goes to position 5. Arrangement: D C A B E. Example 2: 6 people sit in a row. P is third from the left. Q is second to the right of P. R is at the right end. S sits between P and Q. T is second from the left. Step 1: P is at position 3. Step 2: Q is second to the right of P, which means position 5. Step 3: R is at the right end, which means position 6. Step 4: S sits between P and Q, which means position 4. Step 5: T is at position 2. Step 6: the remaining U goes to position 1. Arrangement: U T P S Q R.',
            hindi:
              'उदाहरण 1: 5 लोग एक पंक्ति में उत्तर की तरफ़ देख रहे हैं। A बीच में है, B उसके तुरंत दाएँ है, C उसके तुरंत बाएँ है, D बाएँ छोर पर है, E दाएँ छोर पर है। व्यवस्था क्या होगी? चरण 1: A बीच में है, मतलब स्थिति 3 पर। चरण 2: B, A के तुरंत दाएँ है, मतलब स्थिति 4 पर। चरण 3: C, A के तुरंत बाएँ है, मतलब स्थिति 2 पर। चरण 4: D बाएँ छोर पर है, मतलब स्थिति 1 पर। चरण 5: बचा E, स्थिति 5 पर। व्यवस्था: D C A B E। उदाहरण 2: 6 लोग एक पंक्ति में बैठे हैं। P, बाएँ से तीसरा है। Q, P के दाएँ से दूसरा है। R, दाएँ छोर पर है। S, P और Q के बीच में है। T, बाएँ से दूसरा है। चरण 1: P स्थिति 3 पर है। चरण 2: Q, P के दाएँ से दूसरा है, मतलब स्थिति 5 पर। चरण 3: R दाएँ छोर पर है, मतलब स्थिति 6 पर। चरण 4: S, P और Q के बीच में है, मतलब स्थिति 4 पर। चरण 5: T स्थिति 2 पर है। चरण 6: बचा U स्थिति 1 पर। व्यवस्था: U T P S Q R।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur ye hoti kyun hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और ये क्यों होती हैं',
          },
          body: {
            hinglish:
              'Sabse badi galti hai circle mein left-right ulta kar dena. Row mein north face karne par left tumhara left hota hai, lekin circle mein centre face karne par upar wale ka left tumhare right side par hota hai. Log row wala left circle mein bhi laga dete hain aur jawab galat ho jata hai. Ye galti isliye hoti hai kyunki dimaag khud ko wahi khada samajhta hai jahan woh baitha hai, baithne wale ki jagah se nahi sochta. Hamesha khud ko us aadmi ki jagah par rakh kar socho: woh kis taraf dekh raha hai? Dusri galti hai second to the right aur immediate right ko milana. Second to the right matlab ek aadmi chhod kar dusra — jaise P position 3 par ho to second to the right position 5 hota hai, 4 nahi. Teesri galti hai opposite ko galat ginna: 6 logon ke circle mein opposite 3 jagah door hota hai, 2 nahi. Hamesha circle mein opposite = kul log / 2 jagah door.',
            english:
              'The biggest mistake is reversing left and right in a circle. In a row facing north, left is your left, but in a circle facing the centre, the left of the person at the top is on your right side. People apply the row left to the circle too and get the answer wrong. This mistake happens because the mind imagines itself standing where it sits, instead of thinking from the seated person place. Always put yourself in that person place and ask: which way is he facing? The second mistake is mixing up second to the right with immediate right. Second to the right means skipping one person — for example, if P is at position 3, second to the right is position 5, not 4. The third mistake is counting the opposite wrongly: in a circle of 6 people, the opposite is 3 places away, not 2. Always remember, in a circle, opposite = total people / 2 places away.',
            hindi:
              'सबसे बड़ी गलती है वृत्त में बाएँ-दाएँ उल्टा कर देना। पंक्ति में उत्तर की तरफ़ देखने पर बायाँ तुम्हारा बायाँ होता है, लेकिन वृत्त में केंद्र की तरफ़ देखने पर ऊपर वाले का बायाँ तुम्हारे दाईं तरफ़ होता है। लोग पंक्ति वाला बायाँ वृत्त में भी लगा देते हैं और उत्तर ग़लत हो जाता है। यह गलती इसलिए होती है क्योंकि दिमाग़ ख़ुद को वहीं खड़ा समझता है जहाँ वह बैठा है, बैठने वाले की जगह से नहीं सोचता। हमेशा ख़ुद को उस आदमी की जगह पर रखकर सोचो: वह किस तरफ़ देख रहा है? दूसरी गलती है second to the right और immediate right को मिलाना। Second to the right मतलब एक आदमी छोड़कर दूसरा — जैसे P स्थिति 3 पर हो तो second to the right स्थिति 5 होता है, 4 नहीं। तीसरी गलती है opposite को ग़लत गिनना: 6 लोगों के वृत्त में opposite 3 जगह दूर होता है, 2 नहीं। हमेशा वृत्त में opposite = कुल लोग / 2 जगह दूर।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases aur shortcuts (trap samajh ke)',
            english: 'Edge cases and shortcuts (know the trap)',
            hindi: 'ख़ास मामले और आसान तरीके (जाल समझकर)',
          },
          body: {
            hinglish:
              'Ek shortcut hai: row mein left se position di ho to right se position nikalne ka formula hai kul log − left position + 1. Jaise 10 logon ki row mein A left se teesra hai, to right se = 10 − 3 + 1 = 8th hoga. Dusra shortcut: circle mein fixed aadmi ko pehle rakho, phir uske opposite ko rakho, phir neighbours ko. Opposite sabse fixed hota hai, isliye usse shuru karo. Teesra edge case: agar sawal mein kaha ho ki kuch log centre ki taraf dekh rahe hain aur kuch bahar ki taraf, to left-right dono ke liye ulta ho jata hai. Bahar dekhne wale ka left, centre dekhne wale ke left se ulta hota hai. Exam mein aise mixed sawal kam aate hain, lekin jab aayein to har aadmi ki facing pehle likh lo. Chautha: agar arrangement poori tarah fix na ho raha ho to do possible arrangement banao aur dekho kaun sa sawal ka jawab deta hai — kabhi-kabhi sawal ka jawab dono mein ek hi hota hai.',
            english:
              'One shortcut: in a row, if a position from the left is given, the position from the right is total people − left position + 1. For example, in a row of 10 people, if A is third from the left, then from the right he is 10 − 3 + 1 = 8th. A second shortcut: in a circle, place the fixed person first, then his opposite, then the neighbours. The opposite is the most fixed, so start with it. A third edge case: if a question says some people face the centre and some face outwards, left and right reverse for each group. The left of a person facing outwards is the reverse of the left of a person facing the centre. Mixed questions like this are rare in exams, but when they appear, first write down each person facing direction. A fourth: if the arrangement cannot be fully fixed, draw two possible arrangements and see which one answers the question — sometimes both give the same answer.',
            hindi:
              'एक आसान तरीका है: पंक्ति में बाएँ से स्थिति दी हो तो दाएँ से स्थिति निकालने का सूत्र है कुल लोग − बाईं स्थिति + 1। जैसे 10 लोगों की पंक्ति में A बाएँ से तीसरा है, तो दाएँ से = 10 − 3 + 1 = 8वाँ होगा। दूसरा आसान तरीका: वृत्त में निश्चित आदमी को पहले रखो, फिर उसके सामने वाले को रखो, फिर पड़ोसियों को। सामने वाला सबसे निश्चित होता है, इसलिए उससे शुरू करो। तीसरा ख़ास मामला: अगर सवाल में कहा हो कि कुछ लोग केंद्र की तरफ़ देख रहे हैं और कुछ बाहर की तरफ़, तो बाएँ-दाएँ दोनों के लिए उल्टा हो जाता है। बाहर देखने वाले का बायाँ, केंद्र देखने वाले के बाएँ से उल्टा होता है। परीक्षा में ऐसे मिश्रित सवाल कम आते हैं, लेकिन जब आएँ तो हर आदमी की दिशा पहले लिख लो। चौथा: अगर व्यवस्था पूरी तरह निश्चित न हो रही हो तो दो संभावित व्यवस्थाएँ बनाओ और देखो कौन सी सवाल का उत्तर देती है — कभी-कभी सवाल का उत्तर दोनों में एक ही होता है।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish:
              'Soch lo example 1 mein B, A ke turant right ki jagah turant left mein hota. To arrangement badal jata: D right end par nahi, C position 4 par hota aur B position 2 par. Arrangement hota D B A C E. Ek shabd badalne se poora arrangement badal gaya. Ab socho circle wale example mein log centre ki jagah bahar ki taraf dekh rahe hon. To A ka left west side par hota, east par nahi — B, A ke left ki jagah right mein hota. Facing badalne se left-right poora ulta ho jata hai. Ab socho row mein log north ki jagah south ki taraf dekh rahe hon. To unka left tumhare right side par hota — phir se ulta. Exam mein sabse pehle ye padho: log kis taraf dekh rahe hain? Ye ek line poora sawal badal deti hai.',
            english:
              'Suppose in example 1, B sits immediately to the left of A instead of immediately to the right. Then the arrangement changes: D is not at the right end, C goes to position 4 and B to position 2. The arrangement becomes D B A C E. Changing one word changed the whole arrangement. Now suppose in the circle example, people face outwards instead of towards the centre. Then A left is on the west side, not the east — B sits to the right of A instead of the left. Changing the facing reverses left and right completely. Now suppose the row faces south instead of north. Then their left is on your right side — reversed again. In exams, first read this: which way are people facing? That one line changes the whole question.',
            hindi:
              'मान लो उदाहरण 1 में B, A के तुरंत दाएँ की जगह तुरंत बाएँ होता। तो व्यवस्था बदल जाती: D दाएँ छोर पर नहीं, C स्थिति 4 पर होता और B स्थिति 2 पर। व्यवस्था होती D B A C E। एक शब्द बदलने से पूरी व्यवस्था बदल गई। अब सोचो वृत्त वाले उदाहरण में लोग केंद्र की जगह बाहर की तरफ़ देख रहे हों। तो A का बायाँ पश्चिम दिशा में होता, पूर्व में नहीं — B, A के बाएँ की जगह दाएँ होता। दिशा बदलने से बाएँ-दाएँ पूरा उल्टा हो जाता है। अब सोचो पंक्ति में लोग उत्तर की जगह दक्षिण की तरफ़ देख रहे हों। तो उनका बायाँ तुम्हारे दाईं तरफ़ होता — फिर से उल्टा। परीक्षा में सबसे पहले यह पढ़ो: लोग किस तरफ़ देख रहे हैं? यह एक पंक्ति पूरा सवाल बदल देती है।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish:
              'Seating mein pehle facing padho — row mein north, circle mein centre. Phir fixed clue se shuru karo aur ek-ek karke logon ko rakho. Immediate matlab bilkul bagal mein, second matlab ek chhod kar, opposite matlab circle mein kul/2 jagah door. Row mein right se position = kul − left + 1. Circle mein left-right ke liye khud ko us aadmi ki jagah par rakh kar socho. Aakhir mein poora arrangement likh kar sawal ka jawab padho — bina arrangement ke andaza mat lagao.',
            english:
              'In seating, first read the facing — north in a row, centre in a circle. Then start with the fixed clue and place people one by one. Immediate means right next to, second means skipping one, opposite means total/2 places away in a circle. In a row, position from the right = total − left + 1. In a circle, for left and right, put yourself in that person place and think. Finally, write the full arrangement and read the answer from it — never guess without an arrangement.',
            hindi:
              'बैठक में पहले दिशा पढ़ो — पंक्ति में उत्तर, वृत्त में केंद्र। फिर निश्चित संकेत से शुरू करो और एक-एक करके लोगों को रखो। Immediate मतलब बिल्कुल बगल में, second मतलब एक छोड़कर, opposite मतलब वृत्त में कुल/2 जगह दूर। पंक्ति में दाएँ से स्थिति = कुल − बायाँ + 1। वृत्त में बाएँ-दाएँ के लिए ख़ुद को उस आदमी की जगह पर रखकर सोचो। आख़िर में पूरी व्यवस्था लिखकर सवाल का उत्तर पढ़ो — बिना व्यवस्था के अंदाज़ा मत लगाओ।',
          },
        },
      ],
      diagram: {
        kind: 'boxes',
        title: {
          hinglish: 'Row kaise banayein',
          english: 'How to build a row',
          hindi: 'पंक्ति कैसे बनाएँ',
        },
        nodes: [
          {
            t: {
              hinglish: 'Facing padho',
              english: 'Read the facing',
              hindi: 'दिशा पढ़ो',
            },
            s: {
              hinglish: 'North ya centre?',
              english: 'North or centre?',
              hindi: 'उत्तर या केंद्र?',
            },
          },
          {
            t: {
              hinglish: 'Fixed clue rakho',
              english: 'Place the fixed clue',
              hindi: 'निश्चित संकेत रखो',
            },
            s: {
              hinglish: 'Beech ya end wala pehle',
              english: 'Middle or end first',
              hindi: 'बीच या छोर वाला पहले',
            },
          },
          {
            t: {
              hinglish: 'Baaki ko ek-ek karke rakho',
              english: 'Place the rest one by one',
              hindi: 'बाक़ी को एक-एक करके रखो',
            },
            s: {
              hinglish: 'Immediate, second, opposite',
              english: 'Immediate, second, opposite',
              hindi: 'Immediate, second, opposite',
            },
          },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: '5 log ek row mein north ki taraf dekh rahe hain. M beech mein hai, N uske turant right mein hai, O uske turant left mein hai, P left end par hai, Q right end par hai. Right end par kaun hai?',
            english: '5 people sit in a row facing north. M is in the middle, N sits immediately to his right, O immediately to his left, P at the left end, Q at the right end. Who is at the right end?',
            hindi: '5 लोग एक पंक्ति में उत्तर की तरफ़ देख रहे हैं। M बीच में है, N उसके तुरंत दाएँ है, O उसके तुरंत बाएँ है, P बाएँ छोर पर है, Q दाएँ छोर पर है। दाएँ छोर पर कौन है?',
          },
          opts: [
            { hinglish: 'M', english: 'M', hindi: 'M' },
            { hinglish: 'N', english: 'N', hindi: 'N' },
            { hinglish: 'P', english: 'P', hindi: 'P' },
            { hinglish: 'Q', english: 'Q', hindi: 'Q' },
          ],
          ans: 3,
          expl: {
            hinglish: 'Arrangement hai P O M N Q. Right end par position 5 par Q hai.',
            english: 'The arrangement is P O M N Q. At the right end, position 5, is Q.',
            hindi: 'व्यवस्था है P O M N Q। दाएँ छोर पर स्थिति 5 पर Q है।',
          },
        },
        {
          q: {
            hinglish: '7 logon ki row mein A left se 4th hai. A, right se kitna hai?',
            english: 'In a row of 7 people, A is 4th from the left. What is A from the right?',
            hindi: '7 लोगों की पंक्ति में A बाएँ से 4था है। A, दाएँ से कितना है?',
          },
          opts: [
            { hinglish: '3rd', english: '3rd', hindi: '3rd' },
            { hinglish: '4th', english: '4th', hindi: '4th' },
            { hinglish: '5th', english: '5th', hindi: '5th' },
            { hinglish: '2nd', english: '2nd', hindi: '2nd' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Right se position = 7 − 4 + 1 = 4th. A beech mein hai, isliye dono taraf se 4th hai.',
            english: 'Position from the right = 7 − 4 + 1 = 4th. A is in the middle, so he is 4th from both sides.',
            hindi: 'दाएँ से स्थिति = 7 − 4 + 1 = 4था। A बीच में है, इसलिए दोनों तरफ़ से 4था है।',
          },
        },
        {
          q: {
            hinglish: '6 log ek circle mein centre ki taraf dekh rahe hain. A, D ke opposite hai. B, A ke turant right mein hai. C, B ke opposite hai. A ke left se dusra kaun hai?',
            english: '6 people sit in a circle facing the centre. A is opposite D. B sits immediately to the right of A. C is opposite B. Who is second to the left of A?',
            hindi: '6 लोग एक वृत्त में केंद्र की तरफ़ देख रहे हैं। A, D के सामने है। B, A के तुरंत दाएँ है। C, B के सामने है। A के बाएँ से दूसरा कौन है?',
          },
          opts: [
            { hinglish: 'B', english: 'B', hindi: 'B' },
            { hinglish: 'C', english: 'C', hindi: 'C' },
            { hinglish: 'D', english: 'D', hindi: 'D' },
            { hinglish: 'E', english: 'E', hindi: 'E' },
          ],
          ans: 1,
          expl: {
            hinglish: 'A ko 12 baje rakho, to D 6 baje hai. A ka right anticlockwise hai, to B 10 baje hai. C, B ke opposite hai, to C 4 baje hai. A ka left clockwise hai: pehla left 2 baje, dusra left 4 baje — wahan C hai.',
            english: 'Put A at 12 o clock, so D is at 6 o clock. A right is anticlockwise, so B is at 10 o clock. C is opposite B, so C is at 4 o clock. A left is clockwise: first left at 2 o clock, second left at 4 o clock — C is there.',
            hindi: 'A को 12 बजे रखो, तो D 6 बजे है। A का दायाँ वामावर्त है, तो B 10 बजे है। C, B के सामने है, तो C 4 बजे है। A का बायाँ दक्षिणावर्त है: पहला बायाँ 2 बजे, दूसरा बायाँ 4 बजे — वहाँ C है।',
          },
        },
        {
          q: {
            hinglish: '10 logon ki row mein A left se 3rd hai. A, right se kitna hai?',
            english: 'In a row of 10 people, A is 3rd from the left. What is A from the right?',
            hindi: '10 लोगों की पंक्ति में A बाएँ से 3रा है। A, दाएँ से कितना है?',
          },
          opts: [
            { hinglish: '7th', english: '7th', hindi: '7th' },
            { hinglish: '8th', english: '8th', hindi: '8th' },
            { hinglish: '9th', english: '9th', hindi: '9th' },
            { hinglish: '6th', english: '6th', hindi: '6th' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Right se position = 10 − 3 + 1 = 8th.',
            english: 'Position from the right = 10 − 3 + 1 = 8th.',
            hindi: 'दाएँ से स्थिति = 10 − 3 + 1 = 8वाँ।',
          },
        },
        {
          q: {
            hinglish: '7 log ek row mein baithe hain. B beech mein hai (4th). C, B ke left se dusra hai. C, left se kitna hai?',
            english: '7 people sit in a row. B is in the middle (4th). C is second to the left of B. What is C from the left?',
            hindi: '7 लोग एक पंक्ति में बैठे हैं। B बीच में है (4था)। C, B के बाएँ से दूसरा है। C, बाएँ से कितना है?',
          },
          opts: [
            { hinglish: '1st', english: '1st', hindi: '1st' },
            { hinglish: '2nd', english: '2nd', hindi: '2nd' },
            { hinglish: '3rd', english: '3rd', hindi: '3rd' },
            { hinglish: '4th', english: '4th', hindi: '4th' },
          ],
          ans: 1,
          expl: {
            hinglish: 'B position 4 par hai. Uske left se dusra matlab position 4 − 2 = 2. To C, left se 2nd hai.',
            english: 'B is at position 4. Second to his left means position 4 − 2 = 2. So C is 2nd from the left.',
            hindi: 'B स्थिति 4 पर है। उसके बाएँ से दूसरा मतलब स्थिति 4 − 2 = 2। तो C, बाएँ से 2रा है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Seating ki practice',
          english: 'Seating practice',
          hindi: 'बैठक व्यवस्था का अभ्यास',
        },
        task: {
          hinglish:
            'Neeche wale 3 sawal kagaz par arrangement bana kar solve karo, phir starter code mein apne answers likh kar Run dabao. Q1: 5 logon ki row mein A beech mein hai, B uske turant right mein hai, D uske turant left mein hai, C left end par hai. Right end par kaun hai? (Jawab: E — answer mein "E" likho) Q2: 11 logon ki row mein A left se 6th hai. A, right se kitna hai? (Jawab: 6) Q3: 4 log ek circle mein baithe hain. A, C ke opposite hai. B, A ke turant left mein hai. A ke turant right mein kaun hai? (Jawab: D — answer mein "D" likho) Method: pehle facing padho, phir fixed clue rakho, phir arrangement poora karo.',
          english:
            'Solve the 3 questions below on paper by drawing the arrangement, then type your answers in the starter code and press Run. Q1: In a row of 5 people, A is in the middle, B sits immediately to his right, D immediately to his left, C at the left end. Who is at the right end? (Answer: E — type "E") Q2: In a row of 11 people, A is 6th from the left. What is A from the right? (Answer: 6) Q3: 4 people sit in a circle. A is opposite C. B sits immediately to the left of A. Who sits immediately to the right of A? (Answer: D — type "D") Method: first read the facing, then place the fixed clue, then complete the arrangement.',
          hindi:
            'नीचे वाले 3 सवाल काग़ज़ पर व्यवस्था बनाकर हल करो, फिर स्टार्टर कोड में अपने उत्तर लिखकर Run दबाओ। Q1: 5 लोगों की पंक्ति में A बीच में है, B उसके तुरंत दाएँ है, D उसके तुरंत बाएँ है, C बाएँ छोर पर है। दाएँ छोर पर कौन है? (उत्तर: E — उत्तर में "E" लिखो) Q2: 11 लोगों की पंक्ति में A बाएँ से 6ठा है। A, दाएँ से कितना है? (उत्तर: 6) Q3: 4 लोग एक वृत्त में बैठे हैं। A, C के सामने है। B, A के तुरंत बाएँ है। A के तुरंत दाएँ कौन है? (उत्तर: D — उत्तर में "D" लिखो) तरीका: पहले दिशा पढ़ो, फिर निश्चित संकेत रखो, फिर व्यवस्था पूरी करो।',
        },
        language: 'python',
        starter:
          '# Apne 3 answers yahan likho, phir Run dabao.\nanswers = ["", None, ""]\ncorrect = ["E", 6, "D"]\nfor i in range(3):\n    a = answers[i]\n    if isinstance(a, str):\n        a = a.strip().upper()\n    if a == correct[i]:\n        print(f"Q{i+1}: sahi hai!")\n    else:\n        print(f"Q{i+1}: abhi sahi answer nahi mila. Sahi answer: {correct[i]}")\n',
        expected: 'Teeno sahi hone par script har sawal ke saamne "sahi hai!" print karega.',
      },
      readMinutes: 10,
    },
    {
      id: 'logic-puzzles',
      subjectId: 'logical-reasoning',
      title: {
        hinglish: 'Puzzles — floor aur box wale sawal',
        english: 'Puzzles — Floor and Box Questions',
        hindi: 'पहेलियाँ — मंज़िल और डिब्बा वाले सवाल',
      },
      summary: {
        hinglish: 'Kaun kis floor par rehta hai, kaun sa box kiske upar hai — clues ko table mein likho aur ek-ek karke jagah fix karo.',
        english: 'Who lives on which floor, which box is on top of which — write the clues in a table and fix one place at a time.',
        hindi: 'कौन किस मंज़िल पर रहता है, कौन सा डिब्बा किसके ऊपर है — संकेतों को तालिका में लिखो और एक-एक करके जगह निश्चित करो।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish:
              'Floor aur box wale puzzles mein kuch log alag-alag floors par rehte hain ya kuch boxes ek ke upar ek rakhe hote hain, aur unke baare mein clues diye hote hain. Tumhe un clues se poori arrangement banana hoti hai. Sabse pehle ye samajh lo: floor 1 matlab ground floor (sabse neeche), aur floor 5 matlab sabse upar. Box mein bhi wahi hai: neeche wala box sabse pehle rakha jata hai, upar wala sabse aakhir mein. Clues aam taur par aise hote hain: A, B se do floor upar rehta hai; C, B ke turant upar rehta hai; D, sabse neeche rehta hai. In clues ko seedha table mein likh lo — floor number ek taraf, naam dusri taraf. Phir fixed clue se shuru karo aur ek-ek karke jagah bharo. Jo jagah khaali bache, wahan bacha hua naam aayega.',
            english:
              'In floor and box puzzles, some people live on different floors or some boxes are stacked one above another, and clues are given about them. You must build the full arrangement from the clues. First understand this: floor 1 means the ground floor (the lowest), and floor 5 means the topmost. In boxes it is the same: the bottom box is placed first, the top box last. Clues usually look like this: A lives two floors above B; C lives immediately above B; D lives at the bottom. Write these clues straight into a table — floor number on one side, name on the other. Then start with the fixed clue and fill one place at a time. Whatever place is left empty gets the remaining name.',
            hindi:
              'मंज़िल और डिब्बा वाली पहेलियों में कुछ लोग अलग-अलग मंज़िलों पर रहते हैं या कुछ डिब्बे एक के ऊपर एक रखे होते हैं, और उनके बारे में संकेत दिए होते हैं। तुम्हें उन संकेतों से पूरी व्यवस्था बनानी होती है। सबसे पहले यह समझ लो: मंज़िल 1 मतलब भूतल (सबसे नीचे), और मंज़िल 5 मतलब सबसे ऊपर। डिब्बे में भी वही है: नीचे वाला डिब्बा सबसे पहले रखा जाता है, ऊपर वाला सबसे आख़िर में। संकेत आमतौर पर ऐसे होते हैं: A, B से दो मंज़िल ऊपर रहता है; C, B के तुरंत ऊपर रहता है; D, सबसे नीचे रहता है। इन संकेतों को सीधा तालिका में लिख लो — मंज़िल संख्या एक तरफ़, नाम दूसरी तरफ़। फिर निश्चित संकेत से शुरू करो और एक-एक करके जगह भरो। जो जगह ख़ाली बचे, वहाँ बचा हुआ नाम आएगा।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असल ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish:
              'Soch lo ek building mein 5 floors hain aur 5 dost rehte hain: A, B, C, D, E. Clues hain: A sabse upar wale floor par rehta hai. B, A se do floor neeche rehta hai. C, B ke turant upar rehta hai. D, floor 1 par rehta hai. To arrangement kya hoga? A floor 5 par hai. B, A se do floor neeche hai, matlab floor 3 par. C, B ke turant upar hai, matlab floor 4 par. D floor 1 par hai. Bacha E, floor 2 par. Arrangement: floor 5 — A, floor 4 — C, floor 3 — B, floor 2 — E, floor 1 — D. Ab box ka scene: 4 boxes hain — Red, Blue, Green, Yellow. Red, Blue ke upar hai. Green sabse neeche hai. Yellow, Red ke turant neeche hai. To upar se neeche: Red, Yellow, Blue, Green. Blue, neeche se dusra hai. Dekho, dono mein ek hi tareeka hai: fixed clue pehle, phir relative clues.',
            english:
              'Imagine a building with 5 floors and 5 friends living there: A, B, C, D, E. The clues are: A lives on the top floor. B lives two floors below A. C lives immediately above B. D lives on floor 1. What is the arrangement? A is on floor 5. B is two floors below A, which means floor 3. C is immediately above B, which means floor 4. D is on floor 1. The remaining E goes to floor 2. Arrangement: floor 5 — A, floor 4 — C, floor 3 — B, floor 2 — E, floor 1 — D. Now a box scene: there are 4 boxes — Red, Blue, Green, Yellow. Red is above Blue. Green is at the bottom. Yellow is immediately below Red. So from top to bottom: Red, Yellow, Blue, Green. Blue is second from the bottom. See, both use the same method: fixed clue first, then relative clues.',
            hindi:
              'मान लो एक इमारत में 5 मंज़िलें हैं और 5 दोस्त रहते हैं: A, B, C, D, E। संकेत हैं: A सबसे ऊपर वाली मंज़िल पर रहता है। B, A से दो मंज़िल नीचे रहता है। C, B के तुरंत ऊपर रहता है। D, मंज़िल 1 पर रहता है। तो व्यवस्था क्या होगी? A मंज़िल 5 पर है। B, A से दो मंज़िल नीचे है, मतलब मंज़िल 3 पर। C, B के तुरंत ऊपर है, मतलब मंज़िल 4 पर। D मंज़िल 1 पर है। बचा E, मंज़िल 2 पर। व्यवस्था: मंज़िल 5 — A, मंज़िल 4 — C, मंज़िल 3 — B, मंज़िल 2 — E, मंज़िल 1 — D। अब डिब्बे का दृश्य: 4 डिब्बे हैं — Red, Blue, Green, Yellow। Red, Blue के ऊपर है। Green सबसे नीचे है। Yellow, Red के तुरंत नीचे है। तो ऊपर से नीचे: Red, Yellow, Blue, Green। Blue, नीचे से दूसरा है। देखो, दोनों में एक ही तरीका है: निश्चित संकेत पहले, फिर सापेक्ष संकेत।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step, worked example ke saath',
            english: 'Step-by-step, with a worked example',
            hindi: 'कदम-दर-कदम, हल किए हुए उदाहरण के साथ',
          },
          body: {
            hinglish:
              'Example 1: 5 floors, 5 log P, Q, R, S, T. Clues: S sabse upar hai. P, Q se upar hai. Q, R se upar hai. R, floor 2 par hai. Step 1: S floor 5 par hai (fixed). Step 2: R floor 2 par hai (fixed). Step 3: Q, R se upar hai aur P, Q se upar hai — matlab upar se neeche order hai S, P, Q, R. Step 4: R floor 2 par hai, to Q floor 3 par, P floor 4 par, S floor 5 par. Step 5: bacha T floor 1 par. Arrangement: 5 — S, 4 — P, 3 — Q, 2 — R, 1 — T. Example 2: 4 boxes — Red, Blue, Green, Yellow. Red, Blue ke upar hai. Green sabse neeche hai. Yellow, Red ke turant neeche hai. Step 1: Green sabse neeche hai (position 4). Step 2: Yellow, Red ke turant neeche hai, to dono ek saath hain. Step 3: Red, Blue ke upar hai. Step 4: upar se neeche order hai Red, Yellow, Blue, Green. Example 3: 5 floors mein M even floor par hai, N, M ke turant upar hai, O floor 5 par hai, P floor 1 par hai. Step 1: O floor 5, P floor 1. Step 2: M even hai — 2 ya 4. Step 3: agar M floor 4 par ho to N floor 5 par hota, lekin wahan O hai — galat. Step 4: isliye M floor 2 par hai, N floor 3 par, aur bacha Q floor 4 par.',
            english:
              'Example 1: 5 floors, 5 people P, Q, R, S, T. Clues: S is at the top. P is above Q. Q is above R. R is on floor 2. Step 1: S is on floor 5 (fixed). Step 2: R is on floor 2 (fixed). Step 3: Q is above R and P is above Q — so the order from top to bottom is S, P, Q, R. Step 4: R is on floor 2, so Q is on floor 3, P on floor 4, S on floor 5. Step 5: the remaining T goes to floor 1. Arrangement: 5 — S, 4 — P, 3 — Q, 2 — R, 1 — T. Example 2: 4 boxes — Red, Blue, Green, Yellow. Red is above Blue. Green is at the bottom. Yellow is immediately below Red. Step 1: Green is at the bottom (position 4). Step 2: Yellow is immediately below Red, so the two are together. Step 3: Red is above Blue. Step 4: the order from top to bottom is Red, Yellow, Blue, Green. Example 3: on 5 floors, M lives on an even floor, N lives immediately above M, O lives on floor 5, P lives on floor 1. Step 1: O is on floor 5, P on floor 1. Step 2: M is even — 2 or 4. Step 3: if M were on floor 4, N would be on floor 5, but O is there — wrong. Step 4: so M is on floor 2, N on floor 3, and the remaining Q on floor 4.',
            hindi:
              'उदाहरण 1: 5 मंज़िलें, 5 लोग P, Q, R, S, T। संकेत: S सबसे ऊपर है। P, Q से ऊपर है। Q, R से ऊपर है। R, मंज़िल 2 पर है। चरण 1: S मंज़िल 5 पर है (निश्चित)। चरण 2: R मंज़िल 2 पर है (निश्चित)। चरण 3: Q, R से ऊपर है और P, Q से ऊपर है — मतलब ऊपर से नीचे क्रम है S, P, Q, R। चरण 4: R मंज़िल 2 पर है, तो Q मंज़िल 3 पर, P मंज़िल 4 पर, S मंज़िल 5 पर। चरण 5: बचा T मंज़िल 1 पर। व्यवस्था: 5 — S, 4 — P, 3 — Q, 2 — R, 1 — T। उदाहरण 2: 4 डिब्बे — Red, Blue, Green, Yellow। Red, Blue के ऊपर है। Green सबसे नीचे है। Yellow, Red के तुरंत नीचे है। चरण 1: Green सबसे नीचे है (स्थिति 4)। चरण 2: Yellow, Red के तुरंत नीचे है, तो दोनों एक साथ हैं। चरण 3: Red, Blue के ऊपर है। चरण 4: ऊपर से नीचे क्रम है Red, Yellow, Blue, Green। उदाहरण 3: 5 मंज़िलों में M सम मंज़िल पर है, N, M के तुरंत ऊपर है, O मंज़िल 5 पर है, P मंज़िल 1 पर है। चरण 1: O मंज़िल 5 पर, P मंज़िल 1 पर। चरण 2: M सम है — 2 या 4। चरण 3: अगर M मंज़िल 4 पर हो तो N मंज़िल 5 पर होता, लेकिन वहाँ O है — ग़लत। चरण 4: इसलिए M मंज़िल 2 पर है, N मंज़िल 3 पर, और बचा Q मंज़िल 4 पर।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur ye hoti kyun hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और ये क्यों होती हैं',
          },
          body: {
            hinglish:
              'Sabse badi galti hai upar aur neeche ko ulta samajhna. Floor 1 sabse neeche hota hai, sabse upar nahi. Log jaldi mein floor 1 ko top maan lete hain aur poora arrangement ulta bana dete hain. Ye galti isliye hoti hai kyunki hum upar se ginna shuru karte hain, jabki floor neeche se gine jate hain. Dusri galti hai above aur immediately above ko milana. Above ka matlab hai kahin bhi upar — do floor upar bhi ho sakta hai. Immediately above ka matlab hai bilkul turant upar — ek hi floor upar. Jaise C, B ke upar hai to C floor 4 ya 5 par ho sakta hai, lekin C, B ke turant upar hai to C sirf floor 4 par ho sakta hai (agar B floor 3 par ho). Teesri galti hai khaali jagah ko bhool jana: agar 5 floors mein 4 log fix ho gaye to paanchva wahi bachega jo khaali jagah par hai — use alag se dhoondhne ki zaroorat nahi hai.',
            english:
              'The biggest mistake is mixing up above and below. Floor 1 is the lowest, not the topmost. People in a hurry treat floor 1 as the top and build the whole arrangement upside down. This mistake happens because we start counting from the top, while floors are counted from the bottom. The second mistake is mixing up above with immediately above. Above means anywhere higher — it could be two floors above. Immediately above means directly above — exactly one floor above. For example, if C is above B, C could be on floor 4 or 5, but if C is immediately above B, C can only be on floor 4 (if B is on floor 3). The third mistake is forgetting the empty place: if 4 out of 5 floors are fixed, the fifth person goes to the empty place — there is no need to search for him separately.',
            hindi:
              'सबसे बड़ी गलती है ऊपर और नीचे को उल्टा समझना। मंज़िल 1 सबसे नीचे होती है, सबसे ऊपर नहीं। लोग जल्दी में मंज़िल 1 को सबसे ऊपर मान लेते हैं और पूरी व्यवस्था उल्टी बना देते हैं। यह गलती इसलिए होती है क्योंकि हम ऊपर से गिनना शुरू करते हैं, जबकि मंज़िल नीचे से गिनी जाती हैं। दूसरी गलती है above और immediately above को मिलाना। Above का मतलब है कहीं भी ऊपर — दो मंज़िल ऊपर भी हो सकता है। Immediately above का मतलब है बिल्कुल तुरंत ऊपर — एक ही मंज़िल ऊपर। जैसे C, B के ऊपर है तो C मंज़िल 4 या 5 पर हो सकता है, लेकिन C, B के तुरंत ऊपर है तो C सिर्फ़ मंज़िल 4 पर हो सकता है (अगर B मंज़िल 3 पर हो)। तीसरी गलती है ख़ाली जगह को भूल जाना: अगर 5 मंज़िलों में 4 लोग निश्चित हो गए तो पाँचवाँ वही बचेगा जो ख़ाली जगह पर है — उसे अलग से खोजने की ज़रूरत नहीं है।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases aur shortcuts (trap samajh ke)',
            english: 'Edge cases and shortcuts (know the trap)',
            hindi: 'ख़ास मामले और आसान तरीके (जाल समझकर)',
          },
          body: {
            hinglish:
              'Ek shortcut hai: hamesha table banao — upar se neeche 5, 4, 3, 2, 1 likho aur har clue ke saath ek naam bharo. Table ke bina dimaag mein arrangement rakhna mushkil hai aur galti hoti hai. Dusra shortcut: jo clue sabse fixed hai use pehle rakho — jaise sabse upar, sabse neeche, ya floor number diya ho. Relative clues (A, B se upar hai) ko baad mein rakho, kyunki woh akele kuch nahi kehte. Teesra edge case: agar do logon ke beech mein ek floor khaali ho to use immediately above mat samjho. Jaise A floor 5 par hai aur B floor 3 par hai — A, B se do floor upar hai, turant upar nahi. Chautha: agar sawal mein kaha ho ki A, B ke upar hai lekin kitne upar nahi bataya, to dono possible jagah try karo aur dekho kaun si poori arrangement banati hai — galat wali khud hi khatam ho jayegi, jaise example 3 mein M floor 4 wali possibility khatam ho gayi thi.',
            english:
              'One shortcut: always draw a table — write 5, 4, 3, 2, 1 from top to bottom and fill one name with each clue. Keeping an arrangement in your head without a table is hard and causes mistakes. A second shortcut: place the most fixed clue first — such as the topmost, the bottommost, or a given floor number. Place relative clues (A is above B) later, because alone they say nothing. A third edge case: if one floor is empty between two people, do not treat it as immediately above. For example, A is on floor 5 and B on floor 3 — A is two floors above B, not immediately above. A fourth: if a question says A is above B but does not say how far above, try both possible places and see which one completes the arrangement — the wrong one will eliminate itself, just like the M-on-floor-4 possibility was eliminated in example 3.',
            hindi:
              'एक आसान तरीका है: हमेशा तालिका बनाओ — ऊपर से नीचे 5, 4, 3, 2, 1 लिखो और हर संकेत के साथ एक नाम भरो। तालिका के बिना दिमाग़ में व्यवस्था रखना मुश्किल है और ग़लती होती है। दूसरा आसान तरीका: जो संकेत सबसे निश्चित है उसे पहले रखो — जैसे सबसे ऊपर, सबसे नीचे, या मंज़िल संख्या दी हो। सापेक्ष संकेतों (A, B से ऊपर है) को बाद में रखो, क्योंकि वे अकेले कुछ नहीं कहते। तीसरा ख़ास मामला: अगर दो लोगों के बीच में एक मंज़िल ख़ाली हो तो उसे immediately above मत समझो। जैसे A मंज़िल 5 पर है और B मंज़िल 3 पर है — A, B से दो मंज़िल ऊपर है, तुरंत ऊपर नहीं। चौथा: अगर सवाल में कहा हो कि A, B के ऊपर है लेकिन कितने ऊपर नहीं बताया, तो दोनों संभावित जगह आज़माओ और देखो कौन सी पूरी व्यवस्था बनाती है — ग़लत वाली ख़ुद ही ख़त्म हो जाएगी, जैसे उदाहरण 3 में M मंज़िल 4 वाली संभावना ख़त्म हो गई थी।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish:
              'Soch lo example 1 mein R floor 2 ki jagah floor 3 par hota. To Q floor 4 par, P floor 5 par hota, lekin S bhi floor 5 par hai — takraav ho gaya. Matlab R floor 3 par nahi ho sakta, kyunki S ko jagah nahi milegi. Ek number badalne se poora arrangement toot sakta hai. Ab socho box wale example mein Yellow, Red ke turant neeche ki jagah Red ke turant upar hota. To order badal jata: Yellow, Red, Blue, Green — upar se neeche. Ab Blue, neeche se dusra hi rehta hai, lekin Yellow sabse upar aa gaya. Ab socho floor wale example mein D floor 1 ki jagah floor 5 par hota aur A floor 5 ki jagah floor 1 par. To poora arrangement ulta ho jata. Exam mein jab bhi ek clue badlo, pehle socho kaun si jagah takrayegi — takraav hi batata hai ki naya arrangement possible hai ya nahi.',
            english:
              'Suppose in example 1, R were on floor 3 instead of floor 2. Then Q would be on floor 4 and P on floor 5, but S is also on floor 5 — a clash. So R cannot be on floor 3, because S would have no place. Changing one number can break the whole arrangement. Now suppose in the box example, Yellow were immediately above Red instead of immediately below. Then the order changes: Yellow, Red, Blue, Green — from top to bottom. Blue is still second from the bottom, but Yellow is now at the top. Now suppose in the floor example, D were on floor 5 instead of floor 1 and A on floor 1 instead of floor 5. Then the whole arrangement flips. In exams, whenever you change one clue, first think about which place will clash — the clash itself tells you whether the new arrangement is possible.',
            hindi:
              'मान लो उदाहरण 1 में R मंज़िल 2 की जगह मंज़िल 3 पर होता। तो Q मंज़िल 4 पर, P मंज़िल 5 पर होता, लेकिन S भी मंज़िल 5 पर है — टकराव हो गया। मतलब R मंज़िल 3 पर नहीं हो सकता, क्योंकि S को जगह नहीं मिलेगी। एक संख्या बदलने से पूरी व्यवस्था टूट सकती है। अब सोचो डिब्बे वाले उदाहरण में Yellow, Red के तुरंत नीचे की जगह Red के तुरंत ऊपर होता। तो क्रम बदल जाता: Yellow, Red, Blue, Green — ऊपर से नीचे। अब Blue, नीचे से दूसरा ही रहता है, लेकिन Yellow सबसे ऊपर आ गया। अब सोचो मंज़िल वाले उदाहरण में D मंज़िल 1 की जगह मंज़िल 5 पर होता और A मंज़िल 5 की जगह मंज़िल 1 पर। तो पूरी व्यवस्था उल्टी हो जाती। परीक्षा में जब भी एक संकेत बदलो, पहले सोचो कौन सी जगह टकराएगी — टकराव ही बताता है कि नई व्यवस्था संभव है या नहीं।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish:
              'Floor puzzle mein pehle table banao: upar se neeche 5, 4, 3, 2, 1. Floor 1 sabse neeche hota hai. Fixed clue pehle rakho, phir relative clues. Above ka matlab kahin bhi upar, immediately above ka matlab bilkul turant upar — dono ko mat milao. Khaali jagah par bacha hua naam aayega. Agar do possibilities hon to dono try karo — galat wali khud khatam ho jayegi. Aakhir mein har clue ko arrangement par check karo: agar ek bhi clue match nahi karta to arrangement galat hai.',
            english:
              'In a floor puzzle, first draw a table: 5, 4, 3, 2, 1 from top to bottom. Floor 1 is the lowest. Place the fixed clue first, then the relative clues. Above means anywhere higher, immediately above means directly above — do not mix them. The remaining name goes to the empty place. If there are two possibilities, try both — the wrong one will eliminate itself. Finally, check every clue against the arrangement: if even one clue does not match, the arrangement is wrong.',
            hindi:
              'मंज़िल पहेली में पहले तालिका बनाओ: ऊपर से नीचे 5, 4, 3, 2, 1। मंज़िल 1 सबसे नीचे होती है। निश्चित संकेत पहले रखो, फिर सापेक्ष संकेत। Above का मतलब कहीं भी ऊपर, immediately above का मतलब बिल्कुल तुरंत ऊपर — दोनों को मत मिलाओ। ख़ाली जगह पर बचा हुआ नाम आएगा। अगर दो संभावनाएँ हों तो दोनों आज़माओ — ग़लत वाली ख़ुद ख़त्म हो जाएगी। आख़िर में हर संकेत को व्यवस्था पर जाँचो: अगर एक भी संकेत मेल नहीं खाता तो व्यवस्था ग़लत है।',
          },
        },
      ],
      diagram: {
        kind: 'boxes',
        title: {
          hinglish: 'Floor puzzle ka table',
          english: 'The table for a floor puzzle',
          hindi: 'मंज़िल पहेली की तालिका',
        },
        nodes: [
          {
            t: {
              hinglish: 'Floor 5 — sabse upar',
              english: 'Floor 5 — topmost',
              hindi: 'मंज़िल 5 — सबसे ऊपर',
            },
            s: {
              hinglish: 'Fixed clue yahin rakho',
              english: 'Put the fixed clue here',
              hindi: 'निश्चित संकेत यहीं रखो',
            },
          },
          {
            t: {
              hinglish: 'Floor 3 — beech',
              english: 'Floor 3 — middle',
              hindi: 'मंज़िल 3 — बीच',
            },
            s: {
              hinglish: 'Relative clues yahan milte hain',
              english: 'Relative clues meet here',
              hindi: 'सापेक्ष संकेत यहाँ मिलते हैं',
            },
          },
          {
            t: {
              hinglish: 'Floor 1 — sabse neeche',
              english: 'Floor 1 — lowest',
              hindi: 'मंज़िल 1 — सबसे नीचे',
            },
            s: {
              hinglish: 'Ground floor, top nahi',
              english: 'Ground floor, not the top',
              hindi: 'भूतल, सबसे ऊपर नहीं',
            },
          },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: '4 floors hain. A sabse upar (floor 4) par hai, B uske turant neeche hai, C sabse neeche hai. D kis floor par hai?',
            english: 'There are 4 floors. A is at the top (floor 4), B is immediately below him, C is at the bottom. On which floor is D?',
            hindi: '4 मंज़िलें हैं। A सबसे ऊपर (मंज़िल 4) पर है, B उसके तुरंत नीचे है, C सबसे नीचे है। D किस मंज़िल पर है?',
          },
          opts: [
            { hinglish: 'Floor 1', english: 'Floor 1', hindi: 'मंज़िल 1' },
            { hinglish: 'Floor 2', english: 'Floor 2', hindi: 'मंज़िल 2' },
            { hinglish: 'Floor 3', english: 'Floor 3', hindi: 'मंज़िल 3' },
            { hinglish: 'Floor 4', english: 'Floor 4', hindi: 'मंज़िल 4' },
          ],
          ans: 1,
          expl: {
            hinglish: 'A floor 4 par, B floor 3 par, C floor 1 par. Bacha D floor 2 par hai.',
            english: 'A is on floor 4, B on floor 3, C on floor 1. The remaining D is on floor 2.',
            hindi: 'A मंज़िल 4 पर, B मंज़िल 3 पर, C मंज़िल 1 पर। बचा D मंज़िल 2 पर है।',
          },
        },
        {
          q: {
            hinglish: '5 boxes ek ke upar ek rakhe hain. X beech mein hai (upar se 3rd), Y uske turant upar hai, Z sabse neeche hai, W, X ke turant neeche hai. Sabse upar kaun hai?',
            english: '5 boxes are stacked. X is in the middle (3rd from the top), Y is immediately above X, Z is at the bottom, W is immediately below X. Who is at the top?',
            hindi: '5 डिब्बे एक के ऊपर एक रखे हैं। X बीच में है (ऊपर से 3रा), Y उसके तुरंत ऊपर है, Z सबसे नीचे है, W, X के तुरंत नीचे है। सबसे ऊपर कौन है?',
          },
          opts: [
            { hinglish: 'Y', english: 'Y', hindi: 'Y' },
            { hinglish: 'V', english: 'V', hindi: 'V' },
            { hinglish: 'X', english: 'X', hindi: 'X' },
            { hinglish: 'W', english: 'W', hindi: 'W' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Upar se neeche: pehla ?, dusra Y, teesra X, chautha W, paanchva Z. Bacha V sabse upar hai.',
            english: 'From top to bottom: first ?, second Y, third X, fourth W, fifth Z. The remaining V is at the top.',
            hindi: 'ऊपर से नीचे: पहला ?, दूसरा Y, तीसरा X, चौथा W, पाँचवाँ Z। बचा V सबसे ऊपर है।',
          },
        },
        {
          q: {
            hinglish: '6 floors hain. A floor 6 par hai, B floor 3 par hai, C, B ke turant upar hai, D floor 1 par hai, E, A ke turant neeche hai. F kis floor par hai?',
            english: 'There are 6 floors. A is on floor 6, B is on floor 3, C is immediately above B, D is on floor 1, E is immediately below A. On which floor is F?',
            hindi: '6 मंज़िलें हैं। A मंज़िल 6 पर है, B मंज़िल 3 पर है, C, B के तुरंत ऊपर है, D मंज़िल 1 पर है, E, A के तुरंत नीचे है। F किस मंज़िल पर है?',
          },
          opts: [
            { hinglish: 'Floor 2', english: 'Floor 2', hindi: 'मंज़िल 2' },
            { hinglish: 'Floor 3', english: 'Floor 3', hindi: 'मंज़िल 3' },
            { hinglish: 'Floor 4', english: 'Floor 4', hindi: 'मंज़िल 4' },
            { hinglish: 'Floor 5', english: 'Floor 5', hindi: 'मंज़िल 5' },
          ],
          ans: 0,
          expl: {
            hinglish: 'A floor 6, E floor 5, C floor 4, B floor 3, D floor 1. Bacha F floor 2 par hai.',
            english: 'A is on floor 6, E on floor 5, C on floor 4, B on floor 3, D on floor 1. The remaining F is on floor 2.',
            hindi: 'A मंज़िल 6 पर, E मंज़िल 5 पर, C मंज़िल 4 पर, B मंज़िल 3 पर, D मंज़िल 1 पर। बचा F मंज़िल 2 पर है।',
          },
        },
        {
          q: {
            hinglish: '5 boxes hain. T sabse upar hai, P, Q se upar hai, Q, R se upar hai, S sabse neeche hai. Beech mein (upar se 3rd) kaun hai?',
            english: 'There are 5 boxes. T is at the top, P is above Q, Q is above R, S is at the bottom. Who is in the middle (3rd from the top)?',
            hindi: '5 डिब्बे हैं। T सबसे ऊपर है, P, Q से ऊपर है, Q, R से ऊपर है, S सबसे नीचे है। बीच में (ऊपर से 3रा) कौन है?',
          },
          opts: [
            { hinglish: 'P', english: 'P', hindi: 'P' },
            { hinglish: 'Q', english: 'Q', hindi: 'Q' },
            { hinglish: 'R', english: 'R', hindi: 'R' },
            { hinglish: 'T', english: 'T', hindi: 'T' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Upar se neeche order hai T, P, Q, R, S. Upar se 3rd matlab Q hai.',
            english: 'The order from top to bottom is T, P, Q, R, S. 3rd from the top means Q.',
            hindi: 'ऊपर से नीचे क्रम है T, P, Q, R, S। ऊपर से 3रा मतलब Q है।',
          },
        },
        {
          q: {
            hinglish: '5 floors hain. M even floor par hai, N, M ke turant upar hai, O floor 5 par hai, P floor 1 par hai. Q kis floor par hai?',
            english: 'There are 5 floors. M lives on an even floor, N lives immediately above M, O lives on floor 5, P lives on floor 1. On which floor is Q?',
            hindi: '5 मंज़िलें हैं। M सम मंज़िल पर है, N, M के तुरंत ऊपर है, O मंज़िल 5 पर है, P मंज़िल 1 पर है। Q किस मंज़िल पर है?',
          },
          opts: [
            { hinglish: 'Floor 2', english: 'Floor 2', hindi: 'मंज़िल 2' },
            { hinglish: 'Floor 3', english: 'Floor 3', hindi: 'मंज़िल 3' },
            { hinglish: 'Floor 4', english: 'Floor 4', hindi: 'मंज़िल 4' },
            { hinglish: 'Floor 5', english: 'Floor 5', hindi: 'मंज़िल 5' },
          ],
          ans: 2,
          expl: {
            hinglish: 'M floor 4 par nahi ho sakta, kyunki tab N floor 5 par hota jahan O hai. Isliye M floor 2 par, N floor 3 par, aur bacha Q floor 4 par hai.',
            english: 'M cannot be on floor 4, because then N would be on floor 5, where O is. So M is on floor 2, N on floor 3, and the remaining Q on floor 4.',
            hindi: 'M मंज़िल 4 पर नहीं हो सकता, क्योंकि तब N मंज़िल 5 पर होता जहाँ O है। इसलिए M मंज़िल 2 पर, N मंज़िल 3 पर, और बचा Q मंज़िल 4 पर है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Puzzles ki practice',
          english: 'Puzzles practice',
          hindi: 'पहेलियों का अभ्यास',
        },
        task: {
          hinglish:
            'Neeche wale 3 sawal kagaz par table bana kar solve karo, phir starter code mein apne answers likh kar Run dabao. Q1: 4 floors hain. A floor 4 par hai, B floor 2 par hai, C, B ke turant upar hai. D kis floor par hai? (Jawab: 1 — answer mein 1 likho) Q2: 4 boxes hain. Red sabse upar hai, Blue sabse neeche hai, Green, Red ke turant neeche hai. Yellow upar se kis position par hai? (Upar se order hai Red, Green, Yellow, Blue — to Yellow upar se 3rd hai. Answer mein 3 likho) Q3: 5 floors hain. P floor 5 par hai, Q floor 1 par hai, R, P ke turant neeche hai, S, Q ke turant upar hai. Beech mein (floor 3) kaun hai? (Jawab: T — answer mein "T" likho) Method: table banao, fixed clue pehle rakho, khaali jagah par bacha naam rakho.',
          english:
            'Solve the 3 questions below on paper by drawing a table, then type your answers in the starter code and press Run. Q1: There are 4 floors. A is on floor 4, B is on floor 2, C is immediately above B. On which floor is D? (Answer: 1 — type 1) Q2: There are 4 boxes. Red is at the top, Blue is at the bottom, Green is immediately below Red. What is the position of Yellow from the top? (The order from the top is Red, Green, Yellow, Blue — so Yellow is 3rd from the top. Type 3) Q3: There are 5 floors. P is on floor 5, Q is on floor 1, R is immediately below P, S is immediately above Q. Who is in the middle (floor 3)? (Answer: T — type "T") Method: draw a table, place the fixed clue first, put the remaining name in the empty place.',
          hindi:
            'नीचे वाले 3 सवाल काग़ज़ पर तालिका बनाकर हल करो, फिर स्टार्टर कोड में अपने उत्तर लिखकर Run दबाओ। Q1: 4 मंज़िलें हैं। A मंज़िल 4 पर है, B मंज़िल 2 पर है, C, B के तुरंत ऊपर है। D किस मंज़िल पर है? (उत्तर: 1 — उत्तर में 1 लिखो) Q2: 4 डिब्बे हैं। Red सबसे ऊपर है, Blue सबसे नीचे है, Green, Red के तुरंत नीचे है। Yellow ऊपर से किस स्थिति पर है? (ऊपर से क्रम है Red, Green, Yellow, Blue — तो Yellow ऊपर से 3रा है। उत्तर में 3 लिखो) Q3: 5 मंज़िलें हैं। P मंज़िल 5 पर है, Q मंज़िल 1 पर है, R, P के तुरंत नीचे है, S, Q के तुरंत ऊपर है। बीच में (मंज़िल 3) कौन है? (उत्तर: T — उत्तर में "T" लिखो) तरीका: तालिका बनाओ, निश्चित संकेत पहले रखो, ख़ाली जगह पर बचा नाम रखो।',
        },
        language: 'python',
        starter:
          '# Apne 3 answers yahan likho, phir Run dabao.\nanswers = [None, None, ""]\ncorrect = [1, 3, "T"]\nfor i in range(3):\n    a = answers[i]\n    if isinstance(a, str):\n        a = a.strip().upper()\n    if a == correct[i]:\n        print(f"Q{i+1}: sahi hai!")\n    else:\n        print(f"Q{i+1}: abhi sahi answer nahi mila. Sahi answer: {correct[i]}")\n',
        expected: 'Teeno sahi hone par script har sawal ke saamne "sahi hai!" print karega.',
      },
      readMinutes: 10,
    },
    {
      id: 'logic-direction-sense',
      subjectId: 'logical-reasoning',
      title: {
        hinglish: 'Direction sense — kis taraf gaye, kitni door pahunche',
        english: 'Direction Sense — Which Way You Went and How Far You Got',
        hindi: 'दिशा ज्ञान — किस तरफ़ गए, कितनी दूर पहुँचे',
      },
      summary: {
        hinglish: 'North-south-east-west, left-right turns aur Pythagoras se seedhi doori — direction ke sawal bina map ke bhi solve hote hain.',
        english: 'North-south-east-west, left-right turns and straight-line distance with Pythagoras — direction questions solve without a map.',
        hindi: 'उत्तर-दक्षिण-पूर्व-पश्चिम, बाएँ-दाएँ मोड़ और पाइथागोरस से सीधी दूरी — दिशा के सवाल बिना नक्शे के भी हल होते हैं।',
      },
      sections: [
        {
          heading: {
            hinglish: 'Ye kya hai',
            english: 'What it is',
            hindi: 'यह क्या है',
          },
          body: {
            hinglish:
              'Direction sense mein ek aadmi kisi disha mein chalta hai, phir mudta hai, phir chalta hai — aur tumhe batana hota hai ki woh shuru se kitni door hai aur kis disha mein hai. Chaar main dishaein hain: north (upar), south (neeche), east (right), west (left). Inke beech mein chaar aur dishaein hain: north-east, north-west, south-east, south-west. Turn ka matlab samajhna sabse zaroori hai: agar tum north ki taraf dekh rahe ho aur right mudo to east ki taraf ho jaoge; phir right mudo to south; phir right mudo to west; phir right mudo to wapas north. Matlab chaar right turn ke baad wahi disha wapas aati hai. Left turn ulta chalta hai: north se left mudo to west, phir south, phir east, phir north. Seedhi doori nikalne ke liye Pythagoras theorem use hota hai: agar tum 3 km north aur 4 km east gaye ho to seedhi doori = 3² + 4² ka square root = 25 ka square root = 5 km.',
            english:
              'In direction sense, a person walks in one direction, then turns, then walks again — and you must tell how far he is from the start and in which direction. There are four main directions: north (up), south (down), east (right), west (left). Between them are four more directions: north-east, north-west, south-east, south-west. Understanding turns is the most important part: if you face north and turn right, you face east; turn right again and you face south; turn right again and you face west; turn right again and you are back to north. So after four right turns, you face the same direction again. A left turn goes the other way: from north, turn left to west, then south, then east, then north. To find the straight-line distance, use the Pythagoras theorem: if you walked 3 km north and 4 km east, the straight distance = square root of 3² + 4² = square root of 25 = 5 km.',
            hindi:
              'दिशा ज्ञान में एक आदमी किसी दिशा में चलता है, फिर मुड़ता है, फिर चलता है — और तुम्हें बताना होता है कि वह शुरू से कितनी दूर है और किस दिशा में है। चार मुख्य दिशाएँ हैं: उत्तर (ऊपर), दक्षिण (नीचे), पूर्व (दाएँ), पश्चिम (बाएँ)। इनके बीच में चार और दिशाएँ हैं: उत्तर-पूर्व, उत्तर-पश्चिम, दक्षिण-पूर्व, दक्षिण-पश्चिम। मोड़ का मतलब समझना सबसे ज़रूरी है: अगर तुम उत्तर की तरफ़ देख रहे हो और दाएँ मुड़ो तो पूर्व की तरफ़ हो जाओगे; फिर दाएँ मुड़ो तो दक्षिण; फिर दाएँ मुड़ो तो पश्चिम; फिर दाएँ मुड़ो तो वापस उत्तर। मतलब चार दाएँ मोड़ के बाद वही दिशा वापस आती है। बायाँ मोड़ उल्टा चलता है: उत्तर से बाएँ मुड़ो तो पश्चिम, फिर दक्षिण, फिर पूर्व, फिर उत्तर। सीधी दूरी निकालने के लिए पाइथागोरस प्रमेय उपयोग होता है: अगर तुम 3 km उत्तर और 4 km पूर्व गए हो तो सीधी दूरी = 3² + 4² का वर्गमूल = 25 का वर्गमूल = 5 km।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example',
            english: 'Real-life example',
            hindi: 'असल ज़िंदगी का उदाहरण',
          },
          body: {
            hinglish:
              'Soch lo Ravi apne ghar se 3 km north chalta hai, phir 4 km east chalta hai. Woh ghar se kitni door hai? Map par dekho to woh ek right-angle triangle banata hai: north 3 km, east 4 km. Seedhi doori = 5 km hai, aur disha north-east hai. Matlab Ravi ghar se 5 km door, north-east disha mein hai. Ab turn ka scene: tum north ki taraf dekh rahe ho. Right mudo to east, phir right mudo to south, phir left mudo to east. Aakhir mein tum east ki taraf dekh rahe ho. Check karo: north se right = east, east se right = south, south se left = east. Sahi hai. Ek aur roz ka scene: tumhare ghar se school east mein hai. Agar tum school se ghar wapas aa rahe ho to tum west ki taraf chal rahe ho — ulta disha. Ye ulta hona hi direction ka pehla rule hai.',
            english:
              'Imagine Ravi walks 3 km north from his house, then 4 km east. How far is he from home? On a map, he makes a right-angle triangle: north 3 km, east 4 km. The straight distance = 5 km, and the direction is north-east. So Ravi is 5 km from home, in the north-east direction. Now a turn scene: you face north. Turn right to east, then turn right to south, then turn left to east. In the end, you face east. Check: north to right = east, east to right = south, south to left = east. Correct. Another daily scene: your school is to the east of your house. If you walk back home from school, you walk towards the west — the opposite direction. This reversal is the first rule of direction.',
            hindi:
              'मान लो रवि अपने घर से 3 km उत्तर चलता है, फिर 4 km पूर्व चलता है। वह घर से कितनी दूर है? नक्शे पर देखो तो वह एक समकोण त्रिभुज बनाता है: उत्तर 3 km, पूर्व 4 km। सीधी दूरी = 5 km है, और दिशा उत्तर-पूर्व है। मतलब रवि घर से 5 km दूर, उत्तर-पूर्व दिशा में है। अब मोड़ का दृश्य: तुम उत्तर की तरफ़ देख रहे हो। दाएँ मुड़ो तो पूर्व, फिर दाएँ मुड़ो तो दक्षिण, फिर बाएँ मुड़ो तो पूर्व। आख़िर में तुम पूर्व की तरफ़ देख रहे हो। जाँच करो: उत्तर से दायाँ = पूर्व, पूर्व से दायाँ = दक्षिण, दक्षिण से बायाँ = पूर्व। सही है। एक और रोज़ का दृश्य: तुम्हारे घर से स्कूल पूर्व में है। अगर तुम स्कूल से घर वापस आ रहे हो तो तुम पश्चिम की तरफ़ चल रहे हो — उल्टी दिशा। यह उल्टा होना ही दिशा का पहला नियम है।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step, worked example ke saath',
            english: 'Step-by-step, with a worked example',
            hindi: 'कदम-दर-कदम, हल किए हुए उदाहरण के साथ',
          },
          body: {
            hinglish:
              'Example 1: Ravi 3 km north chalta hai, phir 4 km east chalta hai. Ghar se seedhi doori kitni hai? Step 1: north aur east ka right angle banta hai. Step 2: Pythagoras lagao — doori = 3² + 4² ka square root = 9 + 16 ka square root = 25 ka square root = 5 km. Step 3: disha hai north-east, kyunki north aur east dono mein gaya hai. Example 2: tum north ki taraf dekh rahe ho. Right mudo, phir right mudo, phir left mudo. Ab kis taraf dekh rahe ho? Step 1: north se right = east. Step 2: east se right = south. Step 3: south se left = east. Jawab: east. Example 3: ek aadmi 6 km south chalta hai, phir left mud kar 8 km east chalta hai. Ghar se kitni door hai? Step 1: south 6 km, east 8 km — right angle banta hai. Step 2: doori = 6² + 8² ka square root = 36 + 64 ka square root = 100 ka square root = 10 km. Step 3: disha south-east hai.',
            english:
              'Example 1: Ravi walks 3 km north, then 4 km east. What is the straight distance from home? Step 1: north and east make a right angle. Step 2: apply Pythagoras — distance = square root of 3² + 4² = square root of 9 + 16 = square root of 25 = 5 km. Step 3: the direction is north-east, because he went both north and east. Example 2: you face north. Turn right, then turn right again, then turn left. Which way do you face now? Step 1: north to right = east. Step 2: east to right = south. Step 3: south to left = east. Answer: east. Example 3: a man walks 6 km south, then turns left and walks 8 km east. How far is he from home? Step 1: south 6 km, east 8 km — a right angle is formed. Step 2: distance = square root of 6² + 8² = square root of 36 + 64 = square root of 100 = 10 km. Step 3: the direction is south-east.',
            hindi:
              'उदाहरण 1: रवि 3 km उत्तर चलता है, फिर 4 km पूर्व चलता है। घर से सीधी दूरी कितनी है? चरण 1: उत्तर और पूर्व का समकोण बनता है। चरण 2: पाइथागोरस लगाओ — दूरी = 3² + 4² का वर्गमूल = 9 + 16 का वर्गमूल = 25 का वर्गमूल = 5 km। चरण 3: दिशा है उत्तर-पूर्व, क्योंकि उत्तर और पूर्व दोनों में गया है। उदाहरण 2: तुम उत्तर की तरफ़ देख रहे हो। दाएँ मुड़ो, फिर दाएँ मुड़ो, फिर बाएँ मुड़ो। अब किस तरफ़ देख रहे हो? चरण 1: उत्तर से दायाँ = पूर्व। चरण 2: पूर्व से दायाँ = दक्षिण। चरण 3: दक्षिण से बायाँ = पूर्व। उत्तर: पूर्व। उदाहरण 3: एक आदमी 6 km दक्षिण चलता है, फिर बाएँ मुड़कर 8 km पूर्व चलता है। घर से कितनी दूर है? चरण 1: दक्षिण 6 km, पूर्व 8 km — समकोण बनता है। चरण 2: दूरी = 6² + 8² का वर्गमूल = 36 + 64 का वर्गमूल = 100 का वर्गमूल = 10 km। चरण 3: दिशा दक्षिण-पूर्व है।',
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur ye hoti kyun hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और ये क्यों होती हैं',
          },
          body: {
            hinglish:
              'Sabse badi galti hai chali hui doori aur seedhi doori ko milana. Ravi 3 km north aur 4 km east gaya — kul chali hui doori 7 km hai, lekin ghar se seedhi doori 5 km hai. Log 3 + 4 = 7 likh dete hain, jo galat hai. Seedhi doori ke liye Pythagoras lagta hai, jod nahi. Ye galti isliye hoti hai kyunki dimaag seedha rasta bhool jata hai aur chale hue raste ko hi doori maan leta hai. Dusri galti hai left-right ulta kar dena: north se left mudo to west hota hai, east nahi. Log jaldi mein left ko right samajh lete hain. Hamesha pehle likho ki tum kis taraf dekh rahe ho, phir turn lagao. Teesri galti hai disha ka naam galat likhna: north aur east gaye ho to disha north-east hai, south-east nahi. Disha mein dono hisson ka naam aata hai — pehle north ya south, phir east ya west.',
            english:
              'The biggest mistake is mixing up the distance walked with the straight-line distance. Ravi walked 3 km north and 4 km east — the total distance walked is 7 km, but the straight distance from home is 5 km. People write 3 + 4 = 7, which is wrong. For the straight distance, Pythagoras applies, not addition. This mistake happens because the mind forgets the straight path and treats the walked path as the distance. The second mistake is reversing left and right: from north, a left turn gives west, not east. People in a hurry take left for right. Always first write down which way you face, then apply the turn. The third mistake is naming the direction wrongly: if you went north and east, the direction is north-east, not south-east. A direction name carries both parts — first north or south, then east or west.',
            hindi:
              'सबसे बड़ी गलती है चली हुई दूरी और सीधी दूरी को मिलाना। रवि 3 km उत्तर और 4 km पूर्व गया — कुल चली हुई दूरी 7 km है, लेकिन घर से सीधी दूरी 5 km है। लोग 3 + 4 = 7 लिख देते हैं, जो ग़लत है। सीधी दूरी के लिए पाइथागोरस लगता है, जोड़ नहीं। यह गलती इसलिए होती है क्योंकि दिमाग़ सीधा रास्ता भूल जाता है और चले हुए रास्ते को ही दूरी मान लेता है। दूसरी गलती है बाएँ-दाएँ उल्टा कर देना: उत्तर से बाएँ मुड़ो तो पश्चिम होता है, पूर्व नहीं। लोग जल्दी में बाएँ को दायाँ समझ लेते हैं। हमेशा पहले लिखो कि तुम किस तरफ़ देख रहे हो, फिर मोड़ लगाओ। तीसरी गलती है दिशा का नाम ग़लत लिखना: उत्तर और पूर्व गए हो तो दिशा उत्तर-पूर्व है, दक्षिण-पूर्व नहीं। दिशा में दोनों हिस्सों का नाम आता है — पहले उत्तर या दक्षिण, फिर पूर्व या पश्चिम।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases aur shortcuts (trap samajh ke)',
            english: 'Edge cases and shortcuts (know the trap)',
            hindi: 'ख़ास मामले और आसान तरीके (जाल समझकर)',
          },
          body: {
            hinglish:
              'Ek shortcut hai: 3-4-5, 5-12-13 aur 6-8-10 jaise Pythagoras triplets yaad rakho. Exam mein aksar yehi numbers aate hain, to square root nikalne ki zaroorat nahi padti — 3 aur 4 dikhe to seedhi doori 5 likh do, 5 aur 12 dikhe to 13, 6 aur 8 dikhe to 10. Dusra shortcut: chaar right turn ya chaar left turn ke baad wahi disha wapas aati hai. Agar sawal mein 5 right turn hon to pehle 4 ko kaat do — bacha 1 right turn hi matter karta hai. Teesra edge case: agar aadmi wapas usi raste se laut aaye to seedhi doori zero ho jati hai — jaise 2 km north, phir 2 km south laut aao to wahi jagah par ho. Chautha: agar do log ek dusre ke saamne khade hon to ek ka north dusre ka south hota hai. Jaise A, B ke east mein hai to B, A ke west mein hai — ye ulta rishta har direction sawal mein kaam aata hai.',
            english:
              'One shortcut: remember Pythagoras triplets like 3-4-5, 5-12-13 and 6-8-10. Exams often use these very numbers, so you do not need to work out the square root — if you see 3 and 4, write the straight distance as 5; if you see 5 and 12, write 13; if you see 6 and 8, write 10. A second shortcut: after four right turns or four left turns, you face the same direction again. If a question has 5 right turns, first cancel 4 — only 1 right turn matters. A third edge case: if a person returns by the same path, the straight distance becomes zero — for example, walk 2 km north, then walk 2 km south back, and you are at the same place. A fourth: if two people stand facing each other, one north is the other south. For example, if A is to the east of B, then B is to the west of A — this reversed relation works in every direction question.',
            hindi:
              'एक आसान तरीका है: 3-4-5, 5-12-13 और 6-8-10 जैसे पाइथागोरस त्रिक याद रखो। परीक्षा में अक्सर यही संख्याएँ आती हैं, तो वर्गमूल निकालने की ज़रूरत नहीं पड़ती — 3 और 4 दिखे तो सीधी दूरी 5 लिख दो, 5 और 12 दिखे तो 13, 6 और 8 दिखे तो 10। दूसरा आसान तरीका: चार दाएँ मोड़ या चार बाएँ मोड़ के बाद वही दिशा वापस आती है। अगर सवाल में 5 दाएँ मोड़ हों तो पहले 4 को काट दो — बचा 1 दायाँ मोड़ ही मायने रखता है। तीसरा ख़ास मामला: अगर आदमी वापस उसी रास्ते से लौट आए तो सीधी दूरी शून्य हो जाती है — जैसे 2 km उत्तर, फिर 2 km दक्षिण लौट आओ तो वही जगह पर हो। चौथा: अगर दो लोग एक-दूसरे के सामने खड़े हों तो एक का उत्तर दूसरे का दक्षिण होता है। जैसे A, B के पूर्व में है तो B, A के पश्चिम में है — यह उल्टा रिश्ता हर दिशा सवाल में काम आता है।',
          },
        },
        {
          heading: {
            hinglish: 'Agar ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish:
              'Soch lo Ravi 3 km north aur 4 km east ki jagah 3 km north aur 4 km west jata hai. To seedhi doori wahi 5 km rehti hai, lekin disha north-west ho jati hai, north-east nahi. Doori wahi, disha badal gayi. Ab socho woh 4 km east ki jagah 4 km north aur jata hai — matlab kul 7 km north. To seedhi doori 7 km hai aur disha north hai. Ab koi triangle nahi banta, kyunki dono ek hi line mein hain. Ab turn badal kar dekho: north se right, right, left ki jagah right, left, left karo. To north se right = east, east se left = north, north se left = west. Aakhir mein west ki taraf dekh rahe ho — pehle wale east se bilkul ulta. Ek turn badalne se aakhri disha badal jati hai — isiliye har turn ko ek-ek karke likho.',
            english:
              'Suppose Ravi goes 3 km north and 4 km west instead of 3 km north and 4 km east. Then the straight distance stays 5 km, but the direction becomes north-west, not north-east. Same distance, different direction. Now suppose instead of 4 km east, he goes 4 km further north — that is 7 km north in total. Then the straight distance is 7 km and the direction is north. Now no triangle is formed, because both legs are on the same line. Now change the turns: instead of right, right, left from north, do right, left, left. Then north to right = east, east to left = north, north to left = west. In the end, you face west — the exact opposite of the earlier east. Changing one turn changes the final direction — that is why you must write every turn one by one.',
            hindi:
              'मान लो रवि 3 km उत्तर और 4 km पूर्व की जगह 3 km उत्तर और 4 km पश्चिम जाता है। तो सीधी दूरी वही 5 km रहती है, लेकिन दिशा उत्तर-पश्चिम हो जाती है, उत्तर-पूर्व नहीं। दूरी वही, दिशा बदल गई। अब सोचो वह 4 km पूर्व की जगह 4 km उत्तर और जाता है — मतलब कुल 7 km उत्तर। तो सीधी दूरी 7 km है और दिशा उत्तर है। अब कोई त्रिभुज नहीं बनता, क्योंकि दोनों एक ही रेखा में हैं। अब मोड़ बदलकर देखो: उत्तर से right, right, left की जगह right, left, left करो। तो उत्तर से दायाँ = पूर्व, पूर्व से बायाँ = उत्तर, उत्तर से बायाँ = पश्चिम। आख़िर में पश्चिम की तरफ़ देख रहे हो — पहले वाले पूर्व से बिल्कुल उल्टा। एक मोड़ बदलने से आख़िरी दिशा बदल जाती है — इसलिए हर मोड़ को एक-एक करके लिखो।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish:
              'Direction mein pehle facing likho, phir har turn ko ek-ek karke lagao: north se right = east, left = west. Chaar turn ke baad wahi disha wapas aati hai. Seedhi doori ke liye Pythagoras lagao — chali hui doori ko jod kar mat likho. 3-4-5, 5-12-13, 6-8-10 triplets yaad rakho. Disha ka naam dono hisson se banta hai — north-east, south-west. Aakhir mein check karo: kya tumhari doori chali hui doori se kam hai? Seedhi doori hamesha chali hui doori se kam ya barabar hoti hai — agar zyada aa rahi hai to hisaab galat hai.',
            english:
              'In direction, first write the facing, then apply every turn one by one: from north, right = east, left = west. After four turns, the same direction returns. For the straight distance, use Pythagoras — do not add the walked distance. Remember the triplets 3-4-5, 5-12-13, 6-8-10. A direction name is made of both parts — north-east, south-west. Finally, check: is your distance less than the distance walked? The straight distance is always less than or equal to the distance walked — if it comes out more, the calculation is wrong.',
            hindi:
              'दिशा में पहले दिशा लिखो, फिर हर मोड़ को एक-एक करके लगाओ: उत्तर से दायाँ = पूर्व, बायाँ = पश्चिम। चार मोड़ के बाद वही दिशा वापस आती है। सीधी दूरी के लिए पाइथागोरस लगाओ — चली हुई दूरी को जोड़कर मत लिखो। 3-4-5, 5-12-13, 6-8-10 त्रिक याद रखो। दिशा का नाम दोनों हिस्सों से बनता है — उत्तर-पूर्व, दक्षिण-पश्चिम। आख़िर में जाँच करो: क्या तुम्हारी दूरी चली हुई दूरी से कम है? सीधी दूरी हमेशा चली हुई दूरी से कम या बराबर होती है — अगर ज़्यादा आ रही है तो हिसाब ग़लत है।',
          },
        },
      ],
      diagram: {
        kind: 'boxes',
        title: {
          hinglish: 'Disha ka compass',
          english: 'The direction compass',
          hindi: 'दिशा का कंपास',
        },
        nodes: [
          {
            t: {
              hinglish: 'North — upar',
              english: 'North — up',
              hindi: 'उत्तर — ऊपर',
            },
            s: {
              hinglish: 'Right = East, Left = West',
              english: 'Right = East, Left = West',
              hindi: 'दायाँ = पूर्व, बायाँ = पश्चिम',
            },
          },
          {
            t: {
              hinglish: 'East — right, West — left',
              english: 'East — right, West — left',
              hindi: 'पूर्व — दायाँ, पश्चिम — बायाँ',
            },
            s: {
              hinglish: 'Aamne-saamne ulta hota hai',
              english: 'Opposite sides reverse',
              hindi: 'आमने-सामने उल्टा होता है',
            },
          },
          {
            t: {
              hinglish: 'South — neeche',
              english: 'South — down',
              hindi: 'दक्षिण — नीचे',
            },
            s: {
              hinglish: 'Right = West, Left = East',
              english: 'Right = West, Left = East',
              hindi: 'दायाँ = पश्चिम, बायाँ = पूर्व',
            },
          },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'Tum east ki taraf dekh rahe ho. Left mudo to kis taraf dekhoge?',
            english: 'You face east. If you turn left, which way will you face?',
            hindi: 'तुम पूर्व की तरफ़ देख रहे हो। बाएँ मुड़ो तो किस तरफ़ देखोगे?',
          },
          opts: [
            { hinglish: 'North', english: 'North', hindi: 'उत्तर' },
            { hinglish: 'South', english: 'South', hindi: 'दक्षिण' },
            { hinglish: 'West', english: 'West', hindi: 'पश्चिम' },
            { hinglish: 'East', english: 'East', hindi: 'पूर्व' },
          ],
          ans: 0,
          expl: {
            hinglish: 'East se left mudo to north hota hai. East se right mudo to south hota.',
            english: 'From east, a left turn gives north. From east, a right turn gives south.',
            hindi: 'पूर्व से बाएँ मुड़ो तो उत्तर होता है। पूर्व से दाएँ मुड़ो तो दक्षिण होता है।',
          },
        },
        {
          q: {
            hinglish: 'Ek aadmi 4 km north chalta hai, phir 3 km west chalta hai. Ghar se kitni door hai?',
            english: 'A man walks 4 km north, then 3 km west. How far is he from home?',
            hindi: 'एक आदमी 4 km उत्तर चलता है, फिर 3 km पश्चिम चलता है। घर से कितनी दूर है?',
          },
          opts: [
            { hinglish: '5 km, north-west', english: '5 km, north-west', hindi: '5 km, उत्तर-पश्चिम' },
            { hinglish: '7 km, north-west', english: '7 km, north-west', hindi: '7 km, उत्तर-पश्चिम' },
            { hinglish: '5 km, north-east', english: '5 km, north-east', hindi: '5 km, उत्तर-पूर्व' },
            { hinglish: '7 km, north-east', english: '7 km, उत्तर-पूर्व', hindi: '7 km, उत्तर-पूर्व' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Doori = 4² + 3² ka square root = 25 ka square root = 5 km. Disha north-west hai, kyunki north aur west gaya hai.',
            english: 'Distance = square root of 4² + 3² = square root of 25 = 5 km. Direction is north-west, because he went north and west.',
            hindi: 'दूरी = 4² + 3² का वर्गमूल = 25 का वर्गमूल = 5 km। दिशा उत्तर-पश्चिम है, क्योंकि उत्तर और पश्चिम गया है।',
          },
        },
        {
          q: {
            hinglish: 'Tum south ki taraf dekh rahe ho. Right mudo, phir right mudo. Ab kis taraf dekh rahe ho?',
            english: 'You face south. Turn right, then turn right again. Which way do you face now?',
            hindi: 'तुम दक्षिण की तरफ़ देख रहे हो। दाएँ मुड़ो, फिर दाएँ मुड़ो। अब किस तरफ़ देख रहे हो?',
          },
          opts: [
            { hinglish: 'South', english: 'South', hindi: 'दक्षिण' },
            { hinglish: 'North', english: 'North', hindi: 'उत्तर' },
            { hinglish: 'East', english: 'East', hindi: 'पूर्व' },
            { hinglish: 'West', english: 'West', hindi: 'पश्चिम' },
          ],
          ans: 1,
          expl: {
            hinglish: 'South se right = west, west se right = north. Do right turn ke baad disha ulta ho jati hai.',
            english: 'South to right = west, west to right = north. After two right turns, the direction reverses.',
            hindi: 'दक्षिण से दायाँ = पश्चिम, पश्चिम से दायाँ = उत्तर। दो दाएँ मोड़ के बाद दिशा उल्टी हो जाती है।',
          },
        },
        {
          q: {
            hinglish: 'A, B ke 10 metre east mein hai. C, B ke 10 metre north mein hai. A, C ke kis disha mein hai?',
            english: 'A is 10 m east of B. C is 10 m north of B. In which direction is A from C?',
            hindi: 'A, B के 10 मीटर पूर्व में है। C, B के 10 मीटर उत्तर में है। A, C के किस दिशा में है?',
          },
          opts: [
            { hinglish: 'North-east', english: 'North-east', hindi: 'उत्तर-पूर्व' },
            { hinglish: 'South-east', english: 'South-east', hindi: 'दक्षिण-पूर्व' },
            { hinglish: 'North-west', english: 'North-west', hindi: 'उत्तर-पश्चिम' },
            { hinglish: 'South-west', english: 'South-west', hindi: 'दक्षिण-पश्चिम' },
          ],
          ans: 1,
          expl: {
            hinglish: 'B ko (0,0) rakho: A hai (10,0), C hai (0,10). C se A ki taraf dekho to east aur south dono taraf jana hai — matlab south-east.',
            english: 'Put B at (0,0): A is at (10,0), C is at (0,10). From C towards A, you go both east and south — which means south-east.',
            hindi: 'B को (0,0) रखो: A है (10,0), C है (0,10)। C से A की तरफ़ देखो तो पूर्व और दक्षिण दोनों तरफ़ जाना है — मतलब दक्षिण-पूर्व।',
          },
        },
        {
          q: {
            hinglish: 'Ek aadmi 2 km north chalta hai, phir right mud kar 2 km east chalta hai, phir right mud kar 2 km south chalta hai. Woh shuru se kitni door hai aur kis disha mein?',
            english: 'A man walks 2 km north, then turns right and walks 2 km east, then turns right and walks 2 km south. How far is he from the start, and in which direction?',
            hindi: 'एक आदमी 2 km उत्तर चलता है, फिर दाएँ मुड़कर 2 km पूर्व चलता है, फिर दाएँ मुड़कर 2 km दक्षिण चलता है। वह शुरू से कितनी दूर है और किस दिशा में?',
          },
          opts: [
            { hinglish: '2 km east', english: '2 km east', hindi: '2 km पूर्व' },
            { hinglish: '2 km west', english: '2 km west', hindi: '2 km पश्चिम' },
            { hinglish: '4 km east', english: '4 km east', hindi: '4 km पूर्व' },
            { hinglish: '6 km south', english: '6 km south', hindi: '6 km दक्षिण' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Position: (0,0) se (0,2), phir (2,2), phir (2,0). Shuru se doori 2 km hai aur disha east hai.',
            english: 'Positions: (0,0) to (0,2), then (2,2), then (2,0). Distance from the start is 2 km and the direction is east.',
            hindi: 'स्थिति: (0,0) से (0,2), फिर (2,2), फिर (2,0)। शुरू से दूरी 2 km है और दिशा पूर्व है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Direction ki practice',
          english: 'Direction practice',
          hindi: 'दिशा का अभ्यास',
        },
        task: {
          hinglish:
            'Neeche wale 3 sawal kagaz par solve karo — pehle facing likho, phir har turn lagao. Phir starter code mein apne answers likh kar Run dabao. Q1: Tum west ki taraf dekh rahe ho. Left mudo to kis taraf dekhoge? (Jawab: south — answer mein "south" likho) Q2: Ek aadmi 5 km east chalta hai, phir 12 km north chalta hai. Ghar se seedhi doori kitni hai? (Jawab: 13 km — answer mein 13 likho) Q3: Tum north ki taraf dekh rahe ho. 180 degree mudo to kis taraf dekhoge? (Jawab: south — answer mein "south" likho) Method: turn ko ek-ek karke lagao; seedhi doori ke liye Pythagoras use karo (5-12-13 triplet yaad rakho).',
          english:
            'Solve the 3 questions below on paper — first write the facing, then apply every turn. Then type your answers in the starter code and press Run. Q1: You face west. If you turn left, which way will you face? (Answer: south — type "south") Q2: A man walks 5 km east, then 12 km north. What is the straight distance from home? (Answer: 13 km — type 13) Q3: You face north. If you turn 180 degrees, which way will you face? (Answer: south — type "south") Method: apply turns one by one; for straight distance use Pythagoras (remember the 5-12-13 triplet).',
          hindi:
            'नीचे वाले 3 सवाल काग़ज़ पर हल करो — पहले दिशा लिखो, फिर हर मोड़ लगाओ। फिर स्टार्टर कोड में अपने उत्तर लिखकर Run दबाओ। Q1: तुम पश्चिम की तरफ़ देख रहे हो। बाएँ मुड़ो तो किस तरफ़ देखोगे? (उत्तर: south — उत्तर में "south" लिखो) Q2: एक आदमी 5 km पूर्व चलता है, फिर 12 km उत्तर चलता है। घर से सीधी दूरी कितनी है? (उत्तर: 13 km — उत्तर में 13 लिखो) Q3: तुम उत्तर की तरफ़ देख रहे हो। 180 डिग्री मुड़ो तो किस तरफ़ देखोगे? (उत्तर: south — उत्तर में "south" लिखो) तरीका: मोड़ को एक-एक करके लगाओ; सीधी दूरी के लिए पाइथागोरस उपयोग करो (5-12-13 त्रिक याद रखो)।',
        },
        language: 'python',
        starter:
          '# Apne 3 answers yahan likho (chhote akshar mein), phir Run dabao.\nanswers = ["", None, ""]\ncorrect = ["south", 13, "south"]\nfor i in range(3):\n    a = answers[i]\n    if isinstance(a, str):\n        a = a.strip().lower()\n    if a == correct[i]:\n        print(f"Q{i+1}: sahi hai!")\n    else:\n        print(f"Q{i+1}: abhi sahi answer nahi mila. Sahi answer: {correct[i]}")\n',
        expected: 'Teeno sahi hone par script har sawal ke saamne "sahi hai!" print karega.',
      },
      readMinutes: 10,
    },
  ],
};
