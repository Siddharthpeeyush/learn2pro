// Learn2Pro v2 — Quantitative Aptitude.
// Own-style AI-written content. Standard aptitude methods are used for facts
// only; every problem, number and setting is invented here.
import type { Subject } from '../lib/types';

export const quantitativeAptitude: Subject = {
  id: 'quantitative-aptitude',
  name: {
    hinglish: 'Quantitative Aptitude',
    english: 'Quantitative Aptitude',
    hindi: 'मात्रात्मक योग्यता',
  },
  tagline: {
    hinglish: 'Percent, profit, speed, average — har hisaab step by step, exam wale traps ke saath.',
    english: 'Percentages, profit, speed and averages — every calculation step by step, with the traps exams actually set.',
    hindi: 'प्रतिशत, लाभ-हानि, चाल और औसत — हर हिसाब कदम-दर-कदम, परीक्षा के जाल के साथ।',
  },
  icon: '🔢',
  color: '#84cc16',
  category: 'aptitude',
  articles: [
    {
      id: 'quant-percentages',
      subjectId: 'quantitative-aptitude',
      title: {
        hinglish: 'Percentages — har percent ka matlab',
        english: 'Percentages — What Every Percent Really Means',
        hindi: 'प्रतिशत — हर प्रतिशत का असली मतलब',
      },
      summary: {
        hinglish: 'Percent ka matlab, badhotri aur katauti ka hisaab, aur woh successive change wala trap jisme sabse zyada log fasste hain.',
        english: 'What a percent means, how to work out increases and decreases, and the successive-change trap that catches the most people.',
        hindi: 'प्रतिशत का अर्थ, वृद्धि और कमी का हिसाब, और क्रमिक बदलाव वाला जाल जिसमें सबसे ज़्यादा लोग फँसते हैं।',
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
              'Percent ka matlab hota hai har sau mein se kitna. Jab hum kehte hain 20 percent, to iska matlab hai 100 mein se 20. Isiliye percent ko hamesha ek base number se jodna padta hai — bina base ke percent ka koi matlab nahi hota. 20 percent of 400 aur 20 percent of 900 bilkul alag jawab dete hain, kyunki base alag hai. Percent ko fraction mein badalna sabse pehla kadam hai: 20 percent matlab 20/100, jo 1/5 ke barabar hai. Isi tarah 25 percent matlab 1/4, 50 percent matlab 1/2, aur 10 percent matlab 1/10. Ye chhote fractions yaad rakhne se exam mein calculation bahut tez ho jata hai. Percent nikalne ka formula simple hai: (hissa / kul) × 100. Agar 40 students mein se 8 ladkiyan hain, to 8/40 × 100 = 20 percent. Yaad rakho, percent hamesha ek comparison hai — ek number dusre number ke mukable kitna bada ya chhota hai.',
            english:
              'A percent means how much out of every hundred. When we say 20 percent, we mean 20 out of 100. That is why a percent always needs a base number — without a base, a percent means nothing. 20 percent of 400 and 20 percent of 900 give completely different answers, because the base is different. The first step is turning a percent into a fraction: 20 percent means 20/100, which equals 1/5. Similarly, 25 percent means 1/4, 50 percent means 1/2, and 10 percent means 1/10. Remembering these small fractions makes exam calculations much faster. The formula for finding a percent is simple: (part / whole) × 100. If 8 out of 40 students are girls, then 8/40 × 100 = 20 percent. Remember, a percent is always a comparison — how big or small one number is compared with another number.',
            hindi:
              'प्रतिशत का अर्थ है हर सौ में से कितना। जब हम 20 प्रतिशत कहते हैं, तो इसका मतलब है 100 में से 20। इसलिए प्रतिशत को हमेशा एक आधार संख्या से जोड़ना पड़ता है — बिना आधार के प्रतिशत का कोई अर्थ नहीं होता। 400 का 20 प्रतिशत और 900 का 20 प्रतिशत बिल्कुल अलग उत्तर देते हैं, क्योंकि आधार अलग है। प्रतिशत को भिन्न में बदलना पहला कदम है: 20 प्रतिशत का अर्थ है 20/100, जो 1/5 के बराबर है। इसी तरह 25 प्रतिशत का अर्थ है 1/4, 50 प्रतिशत का अर्थ है 1/2, और 10 प्रतिशत का अर्थ है 1/10। ये छोटी भिन्नें याद रखने से परीक्षा में गणना बहुत तेज़ हो जाती है। प्रतिशत निकालने का सूत्र सरल है: (हिस्सा / कुल) × 100। अगर 40 विद्यार्थियों में से 8 लड़कियाँ हैं, तो 8/40 × 100 = 20 प्रतिशत। याद रखें, प्रतिशत हमेशा एक तुलना है — एक संख्या दूसरी संख्या के मुकाबले कितनी बड़ी या छोटी है।',
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
              'Soch lo tum ek dukaan par gaye aur ek jacket par likha hai 800 rupees, 25 percent off. Dukaandaar kehta hai sirf 600 rupees dene hain. Kya ye sahi hai? Chalo check karte hain: 25 percent of 800 matlab 800 × 25/100 = 200 rupees ki chhoot. To daam hoga 800 − 200 = 600 rupees. Dukaandaar sahi keh raha hai. Ab ek aur roz ka scene: tumhare papa ki salary 40,000 rupees hai aur har mahine 65 percent kharch ho jata hai. To kharcha = 40,000 × 65/100 = 26,000 rupees, aur bachat = 40,000 − 26,000 = 14,000 rupees. Yehi percent exam mein bhi aata hai — bas numbers badal jate hain, kahani wahi rehti hai. Salary, discount, marks, GST — har jagah percent hi chal raha hai. Isiliye percent samajhna sirf exam ke liye nahi, roz ki zindagi ke liye bhi zaroori hai.',
            english:
              'Imagine you go to a shop and a jacket is marked 800 rupees, 25 percent off. The shopkeeper says you only have to pay 600 rupees. Is that right? Let us check: 25 percent of 800 means 800 × 25/100 = 200 rupees off. So the price becomes 800 − 200 = 600 rupees. The shopkeeper is right. Here is another everyday scene: your father earns a salary of 40,000 rupees and 65 percent is spent every month. So the spending = 40,000 × 65/100 = 26,000 rupees, and the saving = 40,000 − 26,000 = 14,000 rupees. This same percent appears in exams too — only the numbers change, the story stays the same. Salary, discount, marks, GST — percent is running everywhere. That is why understanding percent matters not only for exams, but for daily life as well.',
            hindi:
              'मान लो तुम एक दुकान पर गए और एक जैकेट पर लिखा है 800 रुपये, 25 प्रतिशत की छूट। दुकानदार कहता है सिर्फ़ 600 रुपये देने हैं। क्या यह सही है? चलो जाँचते हैं: 800 का 25 प्रतिशत मतलब 800 × 25/100 = 200 रुपये की छूट। तो दाम होगा 800 − 200 = 600 रुपये। दुकानदार सही कह रहा है। अब एक और रोज़ का दृश्य: तुम्हारे पापा की तनख़्वाह 40,000 रुपये है और हर महीने 65 प्रतिशत खर्च हो जाता है। तो खर्च = 40,000 × 65/100 = 26,000 रुपये, और बचत = 40,000 − 26,000 = 14,000 रुपये। यही प्रतिशत परीक्षा में भी आता है — बस संख्याएँ बदल जाती हैं, कहानी वही रहती है। तनख़्वाह, छूट, अंक, GST — हर जगह प्रतिशत ही चल रहा है। इसलिए प्रतिशत समझना सिर्फ़ परीक्षा के लिए नहीं, रोज़ की ज़िंदगी के लिए भी ज़रूरी है।',
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
              'Example 1: 20 percent of 450 kitna hota hai? Step 1: percent ko fraction banao — 20 percent = 20/100. Step 2: base se multiply karo — 450 × 20/100. Step 3: pehle 450/100 = 4.5, phir 4.5 × 20 = 90. Jawab: 90. Shortcut: 10 percent of 450 = 45, to 20 percent = 45 × 2 = 90. Example 2: ek shirt ka daam 800 rupees hai. Pehle daam 25 percent badhta hai, phir 10 percent discount milta hai. Final daam kya hoga? Step 1: badhotri ke baad daam = 800 × 125/100 = 1,000 rupees. Step 2: discount ke baad = 1,000 × 90/100 = 900 rupees. Step 3: kul badlav = 900 − 800 = 100 rupees zyada, matlab 100/800 × 100 = 12.5 percent zyada. Dhyaan do: 25 percent upar aur 10 percent neeche ka matlab 15 percent upar nahi hota — kyunki dusra percent naye daam par lagta hai. Example 3: ek exam mein 360 marks 500 mein se mile. Percent = 360/500 × 100 = 72 percent.',
            english:
              'Example 1: What is 20 percent of 450? Step 1: turn the percent into a fraction — 20 percent = 20/100. Step 2: multiply by the base — 450 × 20/100. Step 3: first 450/100 = 4.5, then 4.5 × 20 = 90. Answer: 90. Shortcut: 10 percent of 450 = 45, so 20 percent = 45 × 2 = 90. Example 2: a shirt costs 800 rupees. First the price rises by 25 percent, then you get a 10 percent discount. What is the final price? Step 1: after the rise, the price = 800 × 125/100 = 1,000 rupees. Step 2: after the discount = 1,000 × 90/100 = 900 rupees. Step 3: the total change = 900 − 800 = 100 rupees more, which means 100/800 × 100 = 12.5 percent more. Notice: 25 percent up and 10 percent down does not mean 15 percent up — because the second percent applies to the new price. Example 3: in an exam you score 360 marks out of 500. Percent = 360/500 × 100 = 72 percent.',
            hindi:
              'उदाहरण 1: 450 का 20 प्रतिशत कितना होता है? चरण 1: प्रतिशत को भिन्न बनाओ — 20 प्रतिशत = 20/100। चरण 2: आधार से गुणा करो — 450 × 20/100। चरण 3: पहले 450/100 = 4.5, फिर 4.5 × 20 = 90। उत्तर: 90। आसान तरीका: 450 का 10 प्रतिशत = 45, तो 20 प्रतिशत = 45 × 2 = 90। उदाहरण 2: एक शर्ट का दाम 800 रुपये है। पहले दाम 25 प्रतिशत बढ़ता है, फिर 10 प्रतिशत की छूट मिलती है। अंतिम दाम क्या होगा? चरण 1: बढ़ोतरी के बाद दाम = 800 × 125/100 = 1,000 रुपये। चरण 2: छूट के बाद = 1,000 × 90/100 = 900 रुपये। चरण 3: कुल बदलाव = 900 − 800 = 100 रुपये ज़्यादा, मतलब 100/800 × 100 = 12.5 प्रतिशत ज़्यादा। ध्यान दो: 25 प्रतिशत ऊपर और 10 प्रतिशत नीचे का मतलब 15 प्रतिशत ऊपर नहीं होता — क्योंकि दूसरा प्रतिशत नए दाम पर लगता है। उदाहरण 3: एक परीक्षा में 500 में से 360 अंक मिले। प्रतिशत = 360/500 × 100 = 72 प्रतिशत।',
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
              'Sabse badi galti hai base bhool jana. Log 20 percent badha ke phir 20 percent ghata dete hain aur sochte hain wapas wahi number aa jayega — lekin aisa nahi hota, kyunki dusra percent badhe hue number par lagta hai. 100 par 20 percent badhao to 120 hota hai, phir 120 par 20 percent ghatao to 24 kam hota hai, jawab 96 aata hai, 100 nahi. Ye galti isliye hoti hai kyunki dimaag percent ko fixed rakam samajh leta hai, jabki percent hamesha base par depend karta hai. Dusri galti hai percent points aur percent ko milana. Agar interest 10 percent se 12 percent ho gaya, to badhotri 2 percent points ki hai, lekin percent ke hisaab se 20 percent ki badhotri hai (2/10 × 100). Teesri galti hai jaldi mein 10 percent nikalte waqt decimal galat rakhna — 450 ka 10 percent 45 hota hai, 4.5 nahi. Hamesha pehle ek zero hatao, phir socho.',
            english:
              'The biggest mistake is forgetting the base. People add 20 percent and then subtract 20 percent and think they will get back the same number — but that does not happen, because the second percent applies to the increased number. Raise 100 by 20 percent and you get 120; then cut 120 by 20 percent and you lose 24, so the answer is 96, not 100. This mistake happens because the mind treats a percent like a fixed amount, while a percent always depends on its base. The second mistake is mixing up percentage points and percent. If interest rises from 10 percent to 12 percent, the rise is 2 percentage points, but in percent terms it is a 20 percent rise (2/10 × 100). The third mistake is placing the decimal wrong in a hurry while finding 10 percent — 10 percent of 450 is 45, not 4.5. Always remove one zero first, then think.',
            hindi:
              'सबसे बड़ी गलती है आधार भूल जाना। लोग 20 प्रतिशत बढ़ाकर फिर 20 प्रतिशत घटा देते हैं और सोचते हैं वही संख्या वापस आ जाएगी — लेकिन ऐसा नहीं होता, क्योंकि दूसरा प्रतिशत बढ़ी हुई संख्या पर लगता है। 100 पर 20 प्रतिशत बढ़ाओ तो 120 होता है, फिर 120 पर 20 प्रतिशत घटाओ तो 24 कम होता है, उत्तर 96 आता है, 100 नहीं। यह गलती इसलिए होती है क्योंकि दिमाग़ प्रतिशत को निश्चित रकम समझ लेता है, जबकि प्रतिशत हमेशा आधार पर निर्भर करता है। दूसरी गलती है प्रतिशत बिंदु और प्रतिशत को मिलाना। अगर ब्याज 10 प्रतिशत से 12 प्रतिशत हो गया, तो बढ़ोतरी 2 प्रतिशत बिंदु की है, लेकिन प्रतिशत के हिसाब से 20 प्रतिशत की बढ़ोतरी है (2/10 × 100)। तीसरी गलती है जल्दी में 10 प्रतिशत निकालते समय दशमलव ग़लत रखना — 450 का 10 प्रतिशत 45 होता है, 4.5 नहीं। हमेशा पहले एक शून्य हटाओ, फिर सोचो।',
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
              'Successive change ka formula yaad rakho: agar pehle x percent aur phir y percent badlav ho, to kul badlav = x + y + (x × y)/100 percent hota hai. Upar wale example mein x = 25, y = −10, to kul = 25 − 10 + (25 × −10)/100 = 15 − 2.5 = 12.5 percent — wahi jawab jo step by step mila tha. Ye formula tab kaam aata hai jab dono badlav ek ke baad ek hon. Ek aur shortcut: kisi number ka 5 percent nikalna ho to pehle 10 percent nikalo aur aadha kar do. 240 ka 10 percent 24 hai, to 5 percent 12 hoga. 1 percent nikalna ho to number ko 100 se divide karo. Edge case: 100 percent se zyada badhotri bhi ho sakti hai — 100 percent badhna matlab number double ho jana, 200 percent badhna matlab teen guna. Exam mein aksar poochte hain ki 150 percent of 80 kya hai — jawab 120 hai, kyunki 80 × 150/100 = 120. Trap ye hai ki log 100 percent se zyada dekh ke ghabra jate hain, jabki hisaab wahi rehta hai.',
            english:
              'Remember the formula for successive change: if there is first a change of x percent and then a change of y percent, the total change = x + y + (x × y)/100 percent. In the example above, x = 25 and y = −10, so the total = 25 − 10 + (25 × −10)/100 = 15 − 2.5 = 12.5 percent — the same answer we got step by step. This formula works when the two changes happen one after the other. Another shortcut: to find 5 percent of a number, first find 10 percent and halve it. 10 percent of 240 is 24, so 5 percent is 12. To find 1 percent, divide the number by 100. Edge case: a rise of more than 100 percent is possible — a 100 percent rise means the number doubles, and a 200 percent rise means it triples. Exams often ask what 150 percent of 80 is — the answer is 120, because 80 × 150/100 = 120. The trap is that people panic when they see more than 100 percent, while the calculation stays exactly the same.',
            hindi:
              'क्रमिक बदलाव का सूत्र याद रखो: अगर पहले x प्रतिशत और फिर y प्रतिशत बदलाव हो, तो कुल बदलाव = x + y + (x × y)/100 प्रतिशत होता है। ऊपर वाले उदाहरण में x = 25, y = −10, तो कुल = 25 − 10 + (25 × −10)/100 = 15 − 2.5 = 12.5 प्रतिशत — वही उत्तर जो कदम-दर-कदम मिला था। यह सूत्र तब काम आता है जब दोनों बदलाव एक के बाद एक हों। एक और आसान तरीका: किसी संख्या का 5 प्रतिशत निकालना हो तो पहले 10 प्रतिशत निकालो और आधा कर दो। 240 का 10 प्रतिशत 24 है, तो 5 प्रतिशत 12 होगा। 1 प्रतिशत निकालना हो तो संख्या को 100 से भाग दो। ख़ास मामला: 100 प्रतिशत से ज़्यादा बढ़ोतरी भी हो सकती है — 100 प्रतिशत बढ़ना मतलब संख्या दोगुनी हो जाना, 200 प्रतिशत बढ़ना मतलब तीन गुना। परीक्षा में अक्सर पूछते हैं कि 80 का 150 प्रतिशत क्या है — उत्तर 120 है, क्योंकि 80 × 150/100 = 120। जाल यह है कि लोग 100 प्रतिशत से ज़्यादा देखकर घबरा जाते हैं, जबकि हिसाब वही रहता है।',
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
              'Soch lo jacket wale example mein discount 25 percent ki jagah 50 percent hota. To chhoot = 800 × 50/100 = 400, aur daam = 400 rupees. Ab socho pehle discount mile aur phir daam badhe — kya final daam wahi rahega? 800 par 10 percent discount = 720, phir 25 percent badhotri = 720 × 125/100 = 900. Haan, wahi 900! Kyunki multiply karne ka order badalne se jawab nahi badalta: 800 × 1.25 × 0.90 aur 800 × 0.90 × 1.25 dono barabar hain. Lekin agar badhotri aur katauti ka percent barabar ho, to final daam hamesha kam hota hai — 20 percent upar phir 20 percent neeche matlab 4 percent ka nuksaan. Ye isliye kyunki katauti bade number par lagti hai. Exam mein jab bhi do badlav dikhen, pehle socho ki base kab badal raha hai, phir hisaab lagao.',
            english:
              'Suppose in the jacket example the discount were 50 percent instead of 25 percent. Then the discount = 800 × 50/100 = 400, and the price = 400 rupees. Now suppose the discount came first and the rise came after — would the final price stay the same? 10 percent off 800 = 720, then a 25 percent rise = 720 × 125/100 = 900. Yes, still 900! Because changing the order of multiplication does not change the answer: 800 × 1.25 × 0.90 and 800 × 0.90 × 1.25 are equal. But if the rise and the cut are the same percent, the final price is always lower — 20 percent up and then 20 percent down means a 4 percent loss. That is because the cut applies to the bigger number. Whenever an exam shows two changes, first think about when the base changes, and only then calculate.',
            hindi:
              'मान लो जैकेट वाले उदाहरण में छूट 25 प्रतिशत की जगह 50 प्रतिशत होती। तो छूट = 800 × 50/100 = 400, और दाम = 400 रुपये। अब सोचो पहले छूट मिले और फिर दाम बढ़े — क्या अंतिम दाम वही रहेगा? 800 पर 10 प्रतिशत की छूट = 720, फिर 25 प्रतिशत की बढ़ोतरी = 720 × 125/100 = 900। हाँ, वही 900! क्योंकि गुणा का क्रम बदलने से उत्तर नहीं बदलता: 800 × 1.25 × 0.90 और 800 × 0.90 × 1.25 दोनों बराबर हैं। लेकिन अगर बढ़ोतरी और कटौती का प्रतिशत बराबर हो, तो अंतिम दाम हमेशा कम होता है — 20 प्रतिशत ऊपर फिर 20 प्रतिशत नीचे मतलब 4 प्रतिशत का नुकसान। यह इसलिए क्योंकि कटौती बड़ी संख्या पर लगती है। परीक्षा में जब भी दो बदलाव दिखें, पहले सोचो कि आधार कब बदल रहा है, फिर हिसाब लगाओ।',
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
              'Percent matlab har sau mein se kitna, aur hamesha ek base ke saath aata hai. Formula yaad rakho: (hissa / kul) × 100, aur value nikalne ke liye base × percent/100. 10, 25 aur 50 percent ke fraction (1/10, 1/4, 1/2) yaad rakhne se speed badhti hai. Do badlav ek ke baad ek hon to dusra percent naye base par lagta hai — isiliye 20 percent upar phir 20 percent neeche ka matlab 4 percent neeche hota hai, wapas zero nahi. Successive change ka formula hai x + y + (x × y)/100. Agli baar jab dukaan par discount dikhe ya salary slip par katauti dikhe, to pehle base pehchano, phir hisaab lagao — exam mein bhi aur zindagi mein bhi yahi kaam aayega.',
            english:
              'A percent means how much out of every hundred, and it always comes with a base. Remember the formulas: (part / whole) × 100 to find a percent, and base × percent/100 to find a value. Remembering the fractions for 10, 25 and 50 percent (1/10, 1/4, 1/2) builds speed. When two changes happen one after another, the second percent applies to the new base — that is why 20 percent up and then 20 percent down means 4 percent down, not back to zero. The successive-change formula is x + y + (x × y)/100. Next time you see a discount in a shop or a deduction on a salary slip, first identify the base, then calculate — that skill pays off in exams and in life.',
            hindi:
              'प्रतिशत का अर्थ है हर सौ में से कितना, और यह हमेशा एक आधार के साथ आता है। सूत्र याद रखो: प्रतिशत निकालने के लिए (हिस्सा / कुल) × 100, और मान निकालने के लिए आधार × प्रतिशत/100। 10, 25 और 50 प्रतिशत की भिन्नें (1/10, 1/4, 1/2) याद रखने से गति बढ़ती है। दो बदलाव एक के बाद एक हों तो दूसरा प्रतिशत नए आधार पर लगता है — इसलिए 20 प्रतिशत ऊपर फिर 20 प्रतिशत नीचे का मतलब 4 प्रतिशत नीचे होता है, वापस शून्य नहीं। क्रमिक बदलाव का सूत्र है x + y + (x × y)/100। अगली बार जब दुकान पर छूट दिखे या तनख़्वाह की पर्ची पर कटौती दिखे, तो पहले आधार पहचानो, फिर हिसाब लगाओ — परीक्षा में भी और ज़िंदगी में भी यही काम आएगा।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Percent nikalne ke 3 steps',
          english: '3 steps to work out a percent',
          hindi: 'प्रतिशत निकालने के 3 चरण',
        },
        nodes: [
          {
            t: {
              hinglish: 'Base pehchano',
              english: 'Identify the base',
              hindi: 'आधार पहचानो',
            },
            s: {
              hinglish: 'Kis number ka percent chahiye?',
              english: 'Which number is the percent of?',
              hindi: 'किस संख्या का प्रतिशत चाहिए?',
            },
          },
          {
            t: {
              hinglish: 'Percent ko fraction banao',
              english: 'Turn the percent into a fraction',
              hindi: 'प्रतिशत को भिन्न बनाओ',
            },
            s: {
              hinglish: '20% = 20/100 = 1/5',
              english: '20% = 20/100 = 1/5',
              hindi: '20% = 20/100 = 1/5',
            },
          },
          {
            t: {
              hinglish: 'Multiply karo, jawab pao',
              english: 'Multiply and get the answer',
              hindi: 'गुणा करो, उत्तर पाओ',
            },
            s: {
              hinglish: '450 × 20/100 = 90',
              english: '450 × 20/100 = 90',
              hindi: '450 × 20/100 = 90',
            },
          },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: '700 ka 35 percent kitna hota hai?',
            english: 'What is 35 percent of 700?',
            hindi: '700 का 35 प्रतिशत कितना होता है?',
          },
          opts: [
            { hinglish: '235', english: '235', hindi: '235' },
            { hinglish: '245', english: '245', hindi: '245' },
            { hinglish: '255', english: '255', hindi: '255' },
            { hinglish: '265', english: '265', hindi: '265' },
          ],
          ans: 1,
          expl: {
            hinglish: '700 × 35/100 = 245. Pehle 700/100 = 7, phir 7 × 35 = 245.',
            english: '700 × 35/100 = 245. First 700/100 = 7, then 7 × 35 = 245.',
            hindi: '700 × 35/100 = 245। पहले 700/100 = 7, फिर 7 × 35 = 245।',
          },
        },
        {
          q: {
            hinglish: '120 rupees par 15 percent badhotri ke baad daam kya hoga?',
            english: 'What is the price of 120 rupees after a 15 percent rise?',
            hindi: '120 रुपये पर 15 प्रतिशत बढ़ोतरी के बाद दाम क्या होगा?',
          },
          opts: [
            { hinglish: '132 rupees', english: '132 rupees', hindi: '132 रुपये' },
            { hinglish: '135 rupees', english: '135 rupees', hindi: '135 रुपये' },
            { hinglish: '138 rupees', english: '138 rupees', hindi: '138 रुपये' },
            { hinglish: '140 rupees', english: '140 rupees', hindi: '140 रुपये' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Badhotri = 120 × 15/100 = 18. Naya daam = 120 + 18 = 138 rupees.',
            english: 'Rise = 120 × 15/100 = 18. New price = 120 + 18 = 138 rupees.',
            hindi: 'बढ़ोतरी = 120 × 15/100 = 18। नया दाम = 120 + 18 = 138 रुपये।',
          },
        },
        {
          q: {
            hinglish: 'Ek number pehle 20 percent badhta hai, phir 20 percent kam hota hai. Kul badlav kya hai?',
            english: 'A number first rises by 20 percent, then falls by 20 percent. What is the total change?',
            hindi: 'एक संख्या पहले 20 प्रतिशत बढ़ती है, फिर 20 प्रतिशत कम होती है। कुल बदलाव क्या है?',
          },
          opts: [
            { hinglish: 'Koi badlav nahi', english: 'No change', hindi: 'कोई बदलाव नहीं' },
            { hinglish: '4 percent badhotri', english: '4 percent rise', hindi: '4 प्रतिशत बढ़ोतरी' },
            { hinglish: '4 percent kami', english: '4 percent fall', hindi: '4 प्रतिशत कमी' },
            { hinglish: '8 percent kami', english: '8 percent fall', hindi: '8 प्रतिशत कमी' },
          ],
          ans: 2,
          expl: {
            hinglish: '100 → 120 → 120 ka 20 percent = 24, to 120 − 24 = 96. Matlab 4 percent ki kami.',
            english: '100 → 120 → 20 percent of 120 = 24, so 120 − 24 = 96. That is a 4 percent fall.',
            hindi: '100 → 120 → 120 का 20 प्रतिशत = 24, तो 120 − 24 = 96। मतलब 4 प्रतिशत की कमी।',
          },
        },
        {
          q: {
            hinglish: '45, 150 ka kitna percent hai?',
            english: '45 is what percent of 150?',
            hindi: '45, 150 का कितना प्रतिशत है?',
          },
          opts: [
            { hinglish: '25 percent', english: '25 percent', hindi: '25 प्रतिशत' },
            { hinglish: '30 percent', english: '30 percent', hindi: '30 प्रतिशत' },
            { hinglish: '35 percent', english: '35 प्रतिशत', hindi: '35 प्रतिशत' },
            { hinglish: '40 percent', english: '40 percent', hindi: '40 प्रतिशत' },
          ],
          ans: 1,
          expl: {
            hinglish: '45/150 × 100 = 0.3 × 100 = 30 percent.',
            english: '45/150 × 100 = 0.3 × 100 = 30 percent.',
            hindi: '45/150 × 100 = 0.3 × 100 = 30 प्रतिशत।',
          },
        },
        {
          q: {
            hinglish: 'Ek sheher ki aabaadi 50,000 hai aur har saal 10 percent badhti hai. 2 saal baad aabaadi kitni hogi?',
            english: 'A town has 50,000 people and grows by 10 percent every year. What is the population after 2 years?',
            hindi: 'एक शहर की आबादी 50,000 है और हर साल 10 प्रतिशत बढ़ती है। 2 साल बाद आबादी कितनी होगी?',
          },
          opts: [
            { hinglish: '60,000', english: '60,000', hindi: '60,000' },
            { hinglish: '60,500', english: '60,500', hindi: '60,500' },
            { hinglish: '61,000', english: '61,000', hindi: '61,000' },
            { hinglish: '55,000', english: '55,000', hindi: '55,000' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Pehle saal: 50,000 × 1.1 = 55,000. Dusre saal: 55,000 × 1.1 = 60,500. Dusra saal naye base par lagta hai.',
            english: 'First year: 50,000 × 1.1 = 55,000. Second year: 55,000 × 1.1 = 60,500. The second year applies to the new base.',
            hindi: 'पहले साल: 50,000 × 1.1 = 55,000। दूसरे साल: 55,000 × 1.1 = 60,500। दूसरा साल नए आधार पर लगता है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Percent ki practice',
          english: 'Percent practice',
          hindi: 'प्रतिशत का अभ्यास',
        },
        task: {
          hinglish:
            'Neeche wale 3 sawal kagaz par solve karo, phir starter code mein apne answers likh kar Run dabao — script batayega kaun sa sahi hai. Q1: 250 ka 18 percent kitna hai? (Jawab: 45) Q2: 600 rupees ki shirt par 20 percent discount hai. Kitne rupees dene honge? (Jawab: 480 rupees) Q3: Ek student ko 500 mein se 360 marks mile. Uska percent kitna hai? (Jawab: 72 percent) Method: percent ke liye (hissa / kul) × 100, value ke liye base × percent/100.',
          english:
            'Solve the 3 questions below on paper, then type your answers in the starter code and press Run — the script will tell you which ones are right. Q1: What is 18 percent of 250? (Answer: 45) Q2: A shirt costs 600 rupees with a 20 percent discount. How much do you pay? (Answer: 480 rupees) Q3: A student scores 360 marks out of 500. What is the percent? (Answer: 72 percent) Method: for a percent use (part / whole) × 100; for a value use base × percent/100.',
          hindi:
            'नीचे वाले 3 सवाल काग़ज़ पर हल करो, फिर स्टार्टर कोड में अपने उत्तर लिखकर Run दबाओ — स्क्रिप्ट बताएगी कौन सा सही है। Q1: 250 का 18 प्रतिशत कितना है? (उत्तर: 45) Q2: 600 रुपये की शर्ट पर 20 प्रतिशत की छूट है। कितने रुपये देने होंगे? (उत्तर: 480 रुपये) Q3: एक विद्यार्थी को 500 में से 360 अंक मिले। उसका प्रतिशत कितना है? (उत्तर: 72 प्रतिशत) तरीका: प्रतिशत के लिए (हिस्सा / कुल) × 100, मान के लिए आधार × प्रतिशत/100।',
        },
        language: 'python',
        starter:
          '# Apne 3 answers yahan likho, phir Run dabao.\nanswers = [None, None, None]\ncorrect = [45, 480, 72]\nfor i in range(3):\n    if answers[i] == correct[i]:\n        print(f"Q{i+1}: sahi hai!")\n    else:\n        print(f"Q{i+1}: abhi sahi answer nahi mila. Sahi answer: {correct[i]}")\n',
        expected: 'Teeno sahi hone par script har sawal ke saamne "sahi hai!" print karega.',
      },
      readMinutes: 10,
    },
    {
      id: 'quant-profit-loss',
      subjectId: 'quantitative-aptitude',
      title: {
        hinglish: 'Profit & loss — khareeda kitne ka, becha kitne ka',
        english: 'Profit and Loss — What You Paid Versus What You Sold For',
        hindi: 'लाभ और हानि — ख़रीदा कितने का, बेचा कितने का',
      },
      summary: {
        hinglish: 'Cost price, selling price, profit percent hamesha cost par, discount aur marked price ka khel — sab step by step.',
        english: 'Cost price, selling price, profit percent always on cost, and the game of discount and marked price — all step by step.',
        hindi: 'क्रय मूल्य, विक्रय मूल्य, लाभ प्रतिशत हमेशा लागत पर, और छूट व अंकित मूल्य का खेल — सब कदम-दर-कदम।',
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
              'Profit aur loss ka hisaab sirf do numbers par chalta hai: cost price (CP), matlab tumne cheez kitne mein khareedi, aur selling price (SP), matlab tumne use kitne mein becha. Agar SP, CP se zyada hai to profit hota hai; agar SP kam hai to loss hota hai. Profit = SP − CP, aur loss = CP − SP. Lekin exam mein asal khel profit percent ka hota hai, aur yahan ek golden rule hai: profit percent aur loss percent hamesha cost price par nikalte hain, selling price par nahi. Formula hai profit percent = (profit / CP) × 100. Ye rule isliye hai kyunki profit tumhare lagaye hue paise par hota hai — tumne 500 lagaye aur 150 kamaye, to tumhara return 30 percent hai. Ek aur term hai marked price (MP), matlab dukaan par chipkaya hua daam, aur discount usi MP par milta hai. SP = MP − discount. Ye teen numbers — CP, MP, SP — profit-loss ke har sawal mein ghoomte hain.',
            english:
              'Profit and loss run on just two numbers: cost price (CP), what you paid to buy a thing, and selling price (SP), what you sold it for. If SP is more than CP, there is a profit; if SP is less, there is a loss. Profit = SP − CP, and loss = CP − SP. But the real game in exams is profit percent, and here is one golden rule: profit percent and loss percent are always worked out on the cost price, never on the selling price. The formula is profit percent = (profit / CP) × 100. This rule exists because profit is earned on the money you put in — you invested 500 and earned 150, so your return is 30 percent. Another term is marked price (MP), the price printed on the tag, and the discount is given on that MP. SP = MP − discount. These three numbers — CP, MP, SP — appear in every profit and loss question.',
            hindi:
              'लाभ और हानि का हिसाब सिर्फ़ दो संख्याओं पर चलता है: क्रय मूल्य (CP), मतलब तुमने चीज़ कितने में ख़रीदी, और विक्रय मूल्य (SP), मतलब तुमने उसे कितने में बेचा। अगर SP, CP से ज़्यादा है तो लाभ होता है; अगर SP कम है तो हानि होती है। लाभ = SP − CP, और हानि = CP − SP। लेकिन परीक्षा में असली खेल लाभ प्रतिशत का होता है, और यहाँ एक सुनहरा नियम है: लाभ प्रतिशत और हानि प्रतिशत हमेशा क्रय मूल्य पर निकलते हैं, विक्रय मूल्य पर नहीं। सूत्र है लाभ प्रतिशत = (लाभ / CP) × 100। यह नियम इसलिए है क्योंकि लाभ तुम्हारे लगाए हुए पैसे पर होता है — तुमने 500 लगाए और 150 कमाए, तो तुम्हारा प्रतिफल 30 प्रतिशत है। एक और शब्द है अंकित मूल्य (MP), मतलब दुकान पर चिपकाया हुआ दाम, और छूट उसी MP पर मिलती है। SP = MP − छूट। ये तीन संख्याएँ — CP, MP, SP — लाभ-हानि के हर सवाल में घूमती हैं।',
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
              'Tumhare chacha ne 500 rupees mein ek kurta khareeda aur use 650 rupees mein bech diya. Profit = 650 − 500 = 150 rupees. Profit percent = 150/500 × 100 = 30 percent. Matlab unhone apne 500 rupees par 30 percent kamaya. Ab dukaan wala scene: ek dukaan par ek bag ka marked price 1,250 rupees hai aur 20 percent discount hai. To SP = 1,250 × 80/100 = 1,000 rupees. Agar dukaan wale ne bag 800 rupees mein khareeda tha, to profit = 1,000 − 800 = 200 rupees, aur profit percent = 200/800 × 100 = 25 percent. Dekho, discount marked price par lagta hai, lekin profit cost price par nikalta hai — ye farak samajhna hi aadha sawal solve karna hai. Roz bazaar mein yehi hisaab chal raha hai, bas hum use dhyaan se nahi dekhte.',
            english:
              'Your uncle bought a kurta for 500 rupees and sold it for 650 rupees. Profit = 650 − 500 = 150 rupees. Profit percent = 150/500 × 100 = 30 percent. That means he earned 30 percent on his 500 rupees. Now the shop scene: a bag has a marked price of 1,250 rupees with a 20 percent discount. So SP = 1,250 × 80/100 = 1,000 rupees. If the shopkeeper had bought the bag for 800 rupees, the profit = 1,000 − 800 = 200 rupees, and the profit percent = 200/800 × 100 = 25 percent. See, the discount applies to the marked price, but the profit is worked out on the cost price — understanding this difference is half the question solved. This same calculation runs in the market every day; we just do not notice it.',
            hindi:
              'तुम्हारे चाचा ने 500 रुपये में एक कुर्ता ख़रीदा और उसे 650 रुपये में बेच दिया। लाभ = 650 − 500 = 150 रुपये। लाभ प्रतिशत = 150/500 × 100 = 30 प्रतिशत। मतलब उन्होंने अपने 500 रुपये पर 30 प्रतिशत कमाया। अब दुकान वाला दृश्य: एक दुकान पर एक बैग का अंकित मूल्य 1,250 रुपये है और 20 प्रतिशत की छूट है। तो SP = 1,250 × 80/100 = 1,000 रुपये। अगर दुकानदार ने बैग 800 रुपये में ख़रीदा था, तो लाभ = 1,000 − 800 = 200 रुपये, और लाभ प्रतिशत = 200/800 × 100 = 25 प्रतिशत। देखो, छूट अंकित मूल्य पर लगती है, लेकिन लाभ क्रय मूल्य पर निकलता है — यह फ़र्क़ समझना ही आधा सवाल हल करना है। रोज़ बाज़ार में यही हिसाब चल रहा है, बस हम उसे ध्यान से नहीं देखते।',
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
              'Example 1: CP 500 hai, SP 650 hai. Profit = 650 − 500 = 150. Profit percent = 150/500 × 100 = 30 percent. Example 2: CP 1,200 hai aur 10 percent loss hai. To SP = 1,200 × 90/100 = 1,080 rupees. Loss = 1,200 − 1,080 = 120 rupees, aur check karo: 120/1,200 × 100 = 10 percent — sahi hai. Example 3: CP 800 hai, aur dukaan daar 25 percent profit par bechna chahta hai. To SP = 800 × 125/100 = 1,000 rupees. Ab isse ulta sawal: agar SP 1,100 hai aur profit 10 percent hai, to CP kya hai? SP = CP × 110/100, to CP = 1,100 × 100/110 = 1,000 rupees. Yaad rakho, SP se CP nikalne ke liye 100 se multiply karo aur (100 + profit percent) se divide karo. Loss wale case mein (100 − loss percent) se divide karte hain. Jaise SP 720 hai aur loss 10 percent hai, to CP = 720 × 100/90 = 800 rupees.',
            english:
              'Example 1: CP is 500 and SP is 650. Profit = 650 − 500 = 150. Profit percent = 150/500 × 100 = 30 percent. Example 2: CP is 1,200 and there is a 10 percent loss. So SP = 1,200 × 90/100 = 1,080 rupees. Loss = 1,200 − 1,080 = 120 rupees, and check: 120/1,200 × 100 = 10 percent — correct. Example 3: CP is 800, and the shopkeeper wants to sell at a 25 percent profit. So SP = 800 × 125/100 = 1,000 rupees. Now the reverse question: if SP is 1,100 and profit is 10 percent, what is CP? SP = CP × 110/100, so CP = 1,100 × 100/110 = 1,000 rupees. Remember, to find CP from SP, multiply by 100 and divide by (100 + profit percent). In a loss case, divide by (100 − loss percent). For example, if SP is 720 and loss is 10 percent, then CP = 720 × 100/90 = 800 rupees.',
            hindi:
              'उदाहरण 1: CP 500 है, SP 650 है। लाभ = 650 − 500 = 150। लाभ प्रतिशत = 150/500 × 100 = 30 प्रतिशत। उदाहरण 2: CP 1,200 है और 10 प्रतिशत की हानि है। तो SP = 1,200 × 90/100 = 1,080 रुपये। हानि = 1,200 − 1,080 = 120 रुपये, और जाँच करो: 120/1,200 × 100 = 10 प्रतिशत — सही है। उदाहरण 3: CP 800 है, और दुकानदार 25 प्रतिशत लाभ पर बेचना चाहता है। तो SP = 800 × 125/100 = 1,000 रुपये। अब इससे उल्टा सवाल: अगर SP 1,100 है और लाभ 10 प्रतिशत है, तो CP क्या है? SP = CP × 110/100, तो CP = 1,100 × 100/110 = 1,000 रुपये। याद रखो, SP से CP निकालने के लिए 100 से गुणा करो और (100 + लाभ प्रतिशत) से भाग दो। हानि वाले मामले में (100 − हानि प्रतिशत) से भाग देते हैं। जैसे SP 720 है और हानि 10 प्रतिशत है, तो CP = 720 × 100/90 = 800 रुपये।',
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
              'Sabse common galti hai profit percent ko selling price par nikalna. CP 400 hai, SP 460 hai, to profit 60 hai. Log 60/460 × 100 kar dete hain aur 13 percent likh dete hain — galat. Sahi hai 60/400 × 100 = 15 percent, kyunki profit hamesha lagaye hue paise par nikalta hai. Ye galti isliye hoti hai kyunki dimaag ko bada number (SP) base lagta hai, jabki base hamesha CP hota hai. Dusri galti hai discount aur profit ko ek hi number par lagana. Discount MP par lagta hai, profit CP par — dono ka base alag hai. Teesri galti hai CP nikalte waqt ulta divide karna: SP 1,100 aur profit 10 percent ho to log 1,100 × 110/100 kar dete hain, jabki CP chhota hota hai, to divide karna hai — 1,100 × 100/110 = 1,000. Ek simple check: profit ho to CP hamesha SP se kam hota hai; loss ho to CP hamesha SP se zyada hota hai.',
            english:
              'The most common mistake is working out profit percent on the selling price. CP is 400, SP is 460, so profit is 60. People compute 60/460 × 100 and write 13 percent — wrong. The correct answer is 60/400 × 100 = 15 percent, because profit is always worked out on the money invested. This mistake happens because the mind takes the bigger number (SP) as the base, while the base is always CP. The second mistake is applying discount and profit to the same number. Discount applies to MP, profit to CP — their bases are different. The third mistake is dividing the wrong way when finding CP: with SP 1,100 and 10 percent profit, people compute 1,100 × 110/100, while CP is smaller, so you must divide — 1,100 × 100/110 = 1,000. One simple check: with a profit, CP is always less than SP; with a loss, CP is always more than SP.',
            hindi:
              'सबसे आम गलती है लाभ प्रतिशत को विक्रय मूल्य पर निकालना। CP 400 है, SP 460 है, तो लाभ 60 है। लोग 60/460 × 100 कर देते हैं और 13 प्रतिशत लिख देते हैं — ग़लत। सही है 60/400 × 100 = 15 प्रतिशत, क्योंकि लाभ हमेशा लगाए हुए पैसे पर निकलता है। यह गलती इसलिए होती है क्योंकि दिमाग़ को बड़ी संख्या (SP) आधार लगती है, जबकि आधार हमेशा CP होता है। दूसरी गलती है छूट और लाभ को एक ही संख्या पर लगाना। छूट MP पर लगती है, लाभ CP पर — दोनों का आधार अलग है। तीसरी गलती है CP निकालते समय उल्टा भाग देना: SP 1,100 और लाभ 10 प्रतिशत हो तो लोग 1,100 × 110/100 कर देते हैं, जबकि CP छोटा होता है, तो भाग देना है — 1,100 × 100/110 = 1,000। एक सरल जाँच: लाभ हो तो CP हमेशा SP से कम होता है; हानि हो तो CP हमेशा SP से ज़्यादा होता है।',
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
              'Ek famous edge case hai: do cheezein ek hi daam par bechi jayein, ek par x percent profit aur dusri par x percent loss. To hamesha loss hota hai, aur loss percent = x²/100. Jaise dono 1,000 rupees mein bechi gayein, ek par 20 percent profit, dusri par 20 percent loss. Pehli ka CP = 1,000 × 100/120 = 833.33, dusri ka CP = 1,000 × 100/80 = 1,250. Kul CP = 2,083.33, kul SP = 2,000, loss = 83.33, loss percent = 83.33/2,083.33 × 100 = 4 percent — aur 20²/100 = 4 bhi hai. Shortcut: jab SP aur profit percent diye hon to CP = SP × 100/(100 + profit percent). Jab do baari khareed-bikri ho, jaise A ne B ko 10 percent profit par becha aur B ne C ko 10 percent loss par becha, to kul hisaab multiply se hota hai: 1,000 × 1.10 × 0.90 = 990. Ye chain wale sawal exam mein bahut aate hain.',
            english:
              'One famous edge case: two items are sold at the same price, one at x percent profit and the other at x percent loss. There is always a loss, and the loss percent = x²/100. For example, both are sold for 1,000 rupees, one at 20 percent profit and the other at 20 percent loss. The first CP = 1,000 × 100/120 = 833.33, the second CP = 1,000 × 100/80 = 1,250. Total CP = 2,083.33, total SP = 2,000, loss = 83.33, loss percent = 83.33/2,083.33 × 100 = 4 percent — and 20²/100 = 4 as well. Shortcut: when SP and profit percent are given, CP = SP × 100/(100 + profit percent). When there are two rounds of buying and selling, such as A selling to B at 10 percent profit and B selling to C at 10 percent loss, the total works by multiplication: 1,000 × 1.10 × 0.90 = 990. These chain questions appear very often in exams.',
            hindi:
              'एक प्रसिद्ध ख़ास मामला है: दो चीज़ें एक ही दाम पर बेची जाएँ, एक पर x प्रतिशत लाभ और दूसरी पर x प्रतिशत हानि। तो हमेशा हानि होती है, और हानि प्रतिशत = x²/100। जैसे दोनों 1,000 रुपये में बेची गईं, एक पर 20 प्रतिशत लाभ, दूसरी पर 20 प्रतिशत हानि। पहली का CP = 1,000 × 100/120 = 833.33, दूसरी का CP = 1,000 × 100/80 = 1,250। कुल CP = 2,083.33, कुल SP = 2,000, हानि = 83.33, हानि प्रतिशत = 83.33/2,083.33 × 100 = 4 प्रतिशत — और 20²/100 = 4 भी है। आसान तरीका: जब SP और लाभ प्रतिशत दिए हों तो CP = SP × 100/(100 + लाभ प्रतिशत)। जब दो बार ख़रीद-बिक्री हो, जैसे A ने B को 10 प्रतिशत लाभ पर बेचा और B ने C को 10 प्रतिशत हानि पर बेचा, तो कुल हिसाब गुणा से होता है: 1,000 × 1.10 × 0.90 = 990। ये श्रृंखला वाले सवाल परीक्षा में बहुत आते हैं।',
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
              'Soch lo CP 800 ki jagah 1,000 hota aur SP wahi 1,000 rehta. To profit zero ho jata — na profit, na loss. Ab socho SP 1,000 se badh kar 1,200 ho jaye, CP 800 hi rahe. To profit = 400, profit percent = 400/800 × 100 = 50 percent. Matlab SP mein sirf 200 ki badhotri ne profit percent ko 25 se 50 kar diya — kyunki CP chhota hai, SP ka har badlav percent mein bada dikhta hai. Ab discount badal ke dekho: MP 1,250 par discount 20 percent ki jagah 40 percent ho jaye to SP = 1,250 × 60/100 = 750, jo CP 800 se kam hai — ab profit ki jagah loss ho gaya, 50 rupees ka. Yehi samajh kaam aati hai: dukaan wale ko pata hota hai ki discount kitna de sakta hai bina loss ke. Exam mein jab bhi ek number badlo, pehle socho ki profit badhega ya ghatega, phir hisaab lagao.',
            english:
              'Suppose CP were 1,000 instead of 800 and SP stayed 1,000. Then profit becomes zero — no profit, no loss. Now suppose SP rises from 1,000 to 1,200 while CP stays 800. Then profit = 400, profit percent = 400/800 × 100 = 50 percent. So a rise of only 200 in SP doubled the profit percent from 25 to 50 — because CP is small, every change in SP looks big in percent terms. Now change the discount: with MP 1,250, if the discount were 40 percent instead of 20 percent, SP = 1,250 × 60/100 = 750, which is less than CP 800 — now there is a loss of 50 rupees instead of a profit. This is the understanding that matters: a shopkeeper knows how much discount can be given without a loss. In exams, whenever you change one number, first think whether the profit will rise or fall, then calculate.',
            hindi:
              'मान लो CP 800 की जगह 1,000 होता और SP वही 1,000 रहता। तो लाभ शून्य हो जाता — न लाभ, न हानि। अब सोचो SP 1,000 से बढ़कर 1,200 हो जाए, CP 800 ही रहे। तो लाभ = 400, लाभ प्रतिशत = 400/800 × 100 = 50 प्रतिशत। मतलब SP में सिर्फ़ 200 की बढ़ोतरी ने लाभ प्रतिशत को 25 से 50 कर दिया — क्योंकि CP छोटा है, SP का हर बदलाव प्रतिशत में बड़ा दिखता है। अब छूट बदलकर देखो: MP 1,250 पर छूट 20 प्रतिशत की जगह 40 प्रतिशत हो जाए तो SP = 1,250 × 60/100 = 750, जो CP 800 से कम है — अब लाभ की जगह 50 रुपये की हानि हो गई। यही समझ काम आती है: दुकानदार को पता होता है कि बिना हानि के कितनी छूट दे सकता है। परीक्षा में जब भी एक संख्या बदलो, पहले सोचो कि लाभ बढ़ेगा या घटेगा, फिर हिसाब लगाओ।',
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
              'Profit = SP − CP, loss = CP − SP, aur percent hamesha CP par nikalta hai. SP nikalna ho to CP × (100 ± percent)/100 use karo; CP nikalna ho to SP × 100/(100 ± percent) use karo. Discount hamesha MP par lagta hai, profit hamesha CP par — dono ka base alag hai. Do cheezein ek hi daam par becho, ek par profit aur dusri par barabar loss, to kul loss x²/100 percent hota hai. Chain wali khareed-bikri mein multiply karte jao. Sabse zaroori check: profit ho to CP < SP, loss ho to CP > SP — agar tumhara jawab iske ulta aa raha hai, to hisaab phir se lagao.',
            english:
              'Profit = SP − CP, loss = CP − SP, and the percent is always worked out on CP. To find SP use CP × (100 ± percent)/100; to find CP use SP × 100/(100 ± percent). Discount always applies to MP, profit always to CP — their bases are different. Sell two items at the same price, one at a profit and the other at an equal loss, and the total loss is x²/100 percent. In chain buying and selling, keep multiplying. The most important check: with a profit CP < SP, with a loss CP > SP — if your answer comes out the other way round, calculate again.',
            hindi:
              'लाभ = SP − CP, हानि = CP − SP, और प्रतिशत हमेशा CP पर निकलता है। SP निकालना हो तो CP × (100 ± प्रतिशत)/100 उपयोग करो; CP निकालना हो तो SP × 100/(100 ± प्रतिशत) उपयोग करो। छूट हमेशा MP पर लगती है, लाभ हमेशा CP पर — दोनों का आधार अलग है। दो चीज़ें एक ही दाम पर बेचो, एक पर लाभ और दूसरी पर बराबर हानि, तो कुल हानि x²/100 प्रतिशत होती है। श्रृंखला वाली ख़रीद-बिक्री में गुणा करते जाओ। सबसे ज़रूरी जाँच: लाभ हो तो CP < SP, हानि हो तो CP > SP — अगर तुम्हारा उत्तर इसके उल्टा आ रहा है, तो हिसाब फिर से लगाओ।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Profit-loss ka flow',
          english: 'The profit-loss flow',
          hindi: 'लाभ-हानि का प्रवाह',
        },
        nodes: [
          {
            t: {
              hinglish: 'CP pehchano',
              english: 'Identify CP',
              hindi: 'CP पहचानो',
            },
            s: {
              hinglish: 'Kitne mein khareeda?',
              english: 'What did you pay?',
              hindi: 'कितने में ख़रीदा?',
            },
          },
          {
            t: {
              hinglish: 'SP nikalo',
              english: 'Find SP',
              hindi: 'SP निकालो',
            },
            s: {
              hinglish: 'MP minus discount',
              english: 'MP minus discount',
              hindi: 'MP घटा छूट',
            },
          },
          {
            t: {
              hinglish: 'Percent CP par',
              english: 'Percent on CP',
              hindi: 'प्रतिशत CP पर',
            },
            s: {
              hinglish: '(SP − CP) / CP × 100',
              english: '(SP − CP) / CP × 100',
              hindi: '(SP − CP) / CP × 100',
            },
          },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'CP 400 hai, SP 460 hai. Profit percent kitna hai?',
            english: 'CP is 400 and SP is 460. What is the profit percent?',
            hindi: 'CP 400 है, SP 460 है। लाभ प्रतिशत कितना है?',
          },
          opts: [
            { hinglish: '13 percent', english: '13 percent', hindi: '13 प्रतिशत' },
            { hinglish: '15 percent', english: '15 percent', hindi: '15 प्रतिशत' },
            { hinglish: '12 percent', english: '12 percent', hindi: '12 प्रतिशत' },
            { hinglish: '10 percent', english: '10 percent', hindi: '10 प्रतिशत' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Profit = 460 − 400 = 60. Profit percent = 60/400 × 100 = 15 percent. Base CP hota hai, SP nahi.',
            english: 'Profit = 460 − 400 = 60. Profit percent = 60/400 × 100 = 15 percent. The base is CP, not SP.',
            hindi: 'लाभ = 460 − 400 = 60। लाभ प्रतिशत = 60/400 × 100 = 15 प्रतिशत। आधार CP होता है, SP नहीं।',
          },
        },
        {
          q: {
            hinglish: 'CP 900 hai aur 20 percent loss hai. SP kitna hoga?',
            english: 'CP is 900 and there is a 20 percent loss. What is SP?',
            hindi: 'CP 900 है और 20 प्रतिशत की हानि है। SP कितना होगा?',
          },
          opts: [
            { hinglish: '700 rupees', english: '700 rupees', hindi: '700 रुपये' },
            { hinglish: '720 rupees', english: '720 rupees', hindi: '720 रुपये' },
            { hinglish: '740 rupees', english: '740 rupees', hindi: '740 रुपये' },
            { hinglish: '760 rupees', english: '760 rupees', hindi: '760 रुपये' },
          ],
          ans: 1,
          expl: {
            hinglish: 'SP = 900 × 80/100 = 720 rupees. Loss 20 percent matlab SP, CP ka 80 percent hai.',
            english: 'SP = 900 × 80/100 = 720 rupees. A 20 percent loss means SP is 80 percent of CP.',
            hindi: 'SP = 900 × 80/100 = 720 रुपये। 20 प्रतिशत की हानि मतलब SP, CP का 80 प्रतिशत है।',
          },
        },
        {
          q: {
            hinglish: 'SP 1,100 hai aur profit 10 percent hai. CP kitna hai?',
            english: 'SP is 1,100 and profit is 10 percent. What is CP?',
            hindi: 'SP 1,100 है और लाभ 10 प्रतिशत है। CP कितना है?',
          },
          opts: [
            { hinglish: '900 rupees', english: '900 rupees', hindi: '900 रुपये' },
            { hinglish: '990 rupees', english: '990 rupees', hindi: '990 रुपये' },
            { hinglish: '1,000 rupees', english: '1,000 rupees', hindi: '1,000 रुपये' },
            { hinglish: '1,010 rupees', english: '1,010 rupees', hindi: '1,010 रुपये' },
          ],
          ans: 2,
          expl: {
            hinglish: 'CP = 1,100 × 100/110 = 1,000 rupees. Profit ho to CP, SP se kam hota hai — 1,000 hi sahi baithta hai.',
            english: 'CP = 1,100 × 100/110 = 1,000 rupees. With a profit, CP is less than SP — only 1,000 fits.',
            hindi: 'CP = 1,100 × 100/110 = 1,000 रुपये। लाभ हो तो CP, SP से कम होता है — सिर्फ़ 1,000 ही सही बैठता है।',
          },
        },
        {
          q: {
            hinglish: 'MP 2,000 hai, discount 25 percent hai, aur CP 1,200 hai. Profit percent kitna hai?',
            english: 'MP is 2,000, discount is 25 percent, and CP is 1,200. What is the profit percent?',
            hindi: 'MP 2,000 है, छूट 25 प्रतिशत है, और CP 1,200 है। लाभ प्रतिशत कितना है?',
          },
          opts: [
            { hinglish: '20 percent', english: '20 percent', hindi: '20 प्रतिशत' },
            { hinglish: '30 percent', english: '30 प्रतिशत', hindi: '30 प्रतिशत' },
            { hinglish: '25 percent', english: '25 percent', hindi: '25 प्रतिशत' },
            { hinglish: '15 percent', english: '15 percent', hindi: '15 प्रतिशत' },
          ],
          ans: 2,
          expl: {
            hinglish: 'SP = 2,000 × 75/100 = 1,500. Profit = 1,500 − 1,200 = 300. Profit percent = 300/1,200 × 100 = 25 percent.',
            english: 'SP = 2,000 × 75/100 = 1,500. Profit = 1,500 − 1,200 = 300. Profit percent = 300/1,200 × 100 = 25 percent.',
            hindi: 'SP = 2,000 × 75/100 = 1,500। लाभ = 1,500 − 1,200 = 300। लाभ प्रतिशत = 300/1,200 × 100 = 25 प्रतिशत।',
          },
        },
        {
          q: {
            hinglish: 'Do cheezein 1,000 rupees mein bechi gayein — ek par 20 percent profit, dusri par 20 percent loss. Kul natija kya hai?',
            english: 'Two items are sold for 1,000 rupees each — one at 20 percent profit, the other at 20 percent loss. What is the total result?',
            hindi: 'दो चीज़ें 1,000 रुपये में बेची गईं — एक पर 20 प्रतिशत लाभ, दूसरी पर 20 प्रतिशत हानि। कुल नतीजा क्या है?',
          },
          opts: [
            { hinglish: 'Na profit, na loss', english: 'No profit, no loss', hindi: 'न लाभ, न हानि' },
            { hinglish: '4 percent profit', english: '4 percent profit', hindi: '4 प्रतिशत लाभ' },
            { hinglish: '4 percent loss', english: '4 percent loss', hindi: '4 प्रतिशत हानि' },
            { hinglish: '20 percent loss', english: '20 percent loss', hindi: '20 प्रतिशत हानि' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Kul CP = 833.33 + 1,250 = 2,083.33, kul SP = 2,000. Loss 83.33, matlab 4 percent loss. Formula: 20²/100 = 4 percent loss.',
            english: 'Total CP = 833.33 + 1,250 = 2,083.33, total SP = 2,000. Loss 83.33, which is a 4 percent loss. Formula: 20²/100 = 4 percent loss.',
            hindi: 'कुल CP = 833.33 + 1,250 = 2,083.33, कुल SP = 2,000। हानि 83.33, मतलब 4 प्रतिशत हानि। सूत्र: 20²/100 = 4 प्रतिशत हानि।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Profit-loss ki practice',
          english: 'Profit-loss practice',
          hindi: 'लाभ-हानि का अभ्यास',
        },
        task: {
          hinglish:
            'Neeche wale 3 sawal kagaz par solve karo, phir starter code mein apne answers likh kar Run dabao. Q1: CP 250 hai, SP 300 hai. Profit percent kitna hai? (Jawab: 20 percent — answer mein sirf 20 likho) Q2: CP 1,500 hai aur 20 percent profit chahiye. SP kitna rakhna hoga? (Jawab: 1,800 rupees) Q3: 20 percent discount ke baad SP 720 hai. Marked price kitna tha? (Jawab: 900 rupees) Method: profit percent hamesha CP par; SP se CP nikalne ke liye SP × 100/(100 + profit percent).',
          english:
            'Solve the 3 questions below on paper, then type your answers in the starter code and press Run. Q1: CP is 250 and SP is 300. What is the profit percent? (Answer: 20 percent — type just 20) Q2: CP is 1,500 and you want a 20 percent profit. What should SP be? (Answer: 1,800 rupees) Q3: After a 20 percent discount, SP is 720. What was the marked price? (Answer: 900 rupees) Method: profit percent is always on CP; to find CP from SP use SP × 100/(100 + profit percent).',
          hindi:
            'नीचे वाले 3 सवाल काग़ज़ पर हल करो, फिर स्टार्टर कोड में अपने उत्तर लिखकर Run दबाओ। Q1: CP 250 है, SP 300 है। लाभ प्रतिशत कितना है? (उत्तर: 20 प्रतिशत — उत्तर में सिर्फ़ 20 लिखो) Q2: CP 1,500 है और 20 प्रतिशत लाभ चाहिए। SP कितना रखना होगा? (उत्तर: 1,800 रुपये) Q3: 20 प्रतिशत की छूट के बाद SP 720 है। अंकित मूल्य कितना था? (उत्तर: 900 रुपये) तरीका: लाभ प्रतिशत हमेशा CP पर; SP से CP निकालने के लिए SP × 100/(100 + लाभ प्रतिशत)।',
        },
        language: 'python',
        starter:
          '# Apne 3 answers yahan likho, phir Run dabao.\nanswers = [None, None, None]\ncorrect = [20, 1800, 900]\nfor i in range(3):\n    if answers[i] == correct[i]:\n        print(f"Q{i+1}: sahi hai!")\n    else:\n        print(f"Q{i+1}: abhi sahi answer nahi mila. Sahi answer: {correct[i]}")\n',
        expected: 'Teeno sahi hone par script har sawal ke saamne "sahi hai!" print karega.',
      },
      readMinutes: 10,
    },
    {
      id: 'quant-time-speed-distance',
      subjectId: 'quantitative-aptitude',
      title: {
        hinglish: 'Time, speed & distance — train, car aur race ka hisaab',
        english: 'Time, Speed and Distance — Trains, Cars and Races',
        hindi: 'समय, चाल और दूरी — ट्रेन, कार और दौड़ का हिसाब',
      },
      summary: {
        hinglish: 'Speed = distance/time, km/h ko m/s mein badalna, average speed ka trap aur relative speed — sab worked examples ke saath.',
        english: 'Speed = distance/time, converting km/h to m/s, the average-speed trap and relative speed — all with worked examples.',
        hindi: 'चाल = दूरी/समय, km/h को m/s में बदलना, औसत चाल का जाल और सापेक्ष चाल — सब हल किए हुए उदाहरणों के साथ।',
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
              'Time, speed aur distance ka rishta ek hi formula par chalta hai: speed = distance / time. Isi ko ghuma kar distance = speed × time aur time = distance / speed bhi milta hai. Teen mein se do pata hon to teesra nikal sakte ho. Unit ka dhyaan rakhna sabse zaroori hai: agar distance kilometre mein hai aur time ghante mein hai, to speed km/h mein aayegi; agar distance metre mein hai aur time second mein hai, to speed m/s mein aayegi. Dono ko kabhi mix mat karo. Conversion yaad rakho: 1 km/h = 5/18 m/s, aur 1 m/s = 18/5 km/h. Matlab km/h se m/s mein badalne ke liye 5/18 se multiply karo, aur m/s se km/h mein badalne ke liye 18/5 se multiply karo. Jaise 90 km/h = 90 × 5/18 = 25 m/s. Ye conversion train aur race wale sawalon mein har baar aata hai.',
            english:
              'Time, speed and distance rest on a single formula: speed = distance / time. Turning it around gives distance = speed × time and time = distance / speed. If you know any two of the three, you can find the third. Watching the units is the most important part: if distance is in kilometres and time in hours, speed comes out in km/h; if distance is in metres and time in seconds, speed comes out in m/s. Never mix the two. Remember the conversion: 1 km/h = 5/18 m/s, and 1 m/s = 18/5 km/h. So to change km/h into m/s, multiply by 5/18, and to change m/s into km/h, multiply by 18/5. For example, 90 km/h = 90 × 5/18 = 25 m/s. This conversion appears in almost every train and race question.',
            hindi:
              'समय, चाल और दूरी का रिश्ता एक ही सूत्र पर चलता है: चाल = दूरी / समय। इसी को घुमाकर दूरी = चाल × समय और समय = दूरी / चाल भी मिलता है। तीन में से दो पता हों तो तीसरा निकाल सकते हो। इकाई का ध्यान रखना सबसे ज़रूरी है: अगर दूरी किलोमीटर में है और समय घंटे में है, तो चाल km/h में आएगी; अगर दूरी मीटर में है और समय सेकंड में है, तो चाल m/s में आएगी। दोनों को कभी मिलाओ मत। रूपांतरण याद रखो: 1 km/h = 5/18 m/s, और 1 m/s = 18/5 km/h। मतलब km/h से m/s में बदलने के लिए 5/18 से गुणा करो, और m/s से km/h में बदलने के लिए 18/5 से गुणा करो। जैसे 90 km/h = 90 × 5/18 = 25 m/s। यह रूपांतरण ट्रेन और दौड़ वाले सवालों में हर बार आता है।',
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
              'Tumhare ghar se coaching 60 km door hai aur tum 1.5 ghante mein pahunchte ho. To tumhari average speed = 60/1.5 = 40 km/h. Ab socho tumne pehle 120 km, 40 km/h ki speed se tay kiye aur agle 120 km, 60 km/h ki speed se. Kul distance 240 km hui. Pehla hissa 120/40 = 3 ghante mein, dusra hissa 120/60 = 2 ghante mein. Kul time 5 ghante, to average speed = 240/5 = 48 km/h. Dhyaan do — average speed 50 nahi hai, jo 40 aur 60 ka simple average hota. Kyunki slow speed par zyada time laga, average slow speed ki taraf jhukta hai. Yehi trap exam mein baar-baar aata hai. Train ke sawal mein bhi wahi formula hai: 72 km/h ki speed se 2.5 ghante mein train 72 × 2.5 = 180 km chalegi.',
            english:
              'Your coaching centre is 60 km from home and you reach it in 1.5 hours. So your average speed = 60/1.5 = 40 km/h. Now suppose you covered the first 120 km at 40 km/h and the next 120 km at 60 km/h. Total distance is 240 km. The first part took 120/40 = 3 hours, the second part 120/60 = 2 hours. Total time is 5 hours, so average speed = 240/5 = 48 km/h. Notice — the average speed is not 50, which would be the simple average of 40 and 60. Because more time was spent at the slow speed, the average leans towards the slow speed. This same trap appears again and again in exams. Train questions use the same formula: at 72 km/h for 2.5 hours, a train covers 72 × 2.5 = 180 km.',
            hindi:
              'तुम्हारे घर से कोचिंग 60 km दूर है और तुम 1.5 घंटे में पहुँचते हो। तो तुम्हारी औसत चाल = 60/1.5 = 40 km/h। अब सोचो तुमने पहले 120 km, 40 km/h की चाल से तय किए और अगले 120 km, 60 km/h की चाल से। कुल दूरी 240 km हुई। पहला हिस्सा 120/40 = 3 घंटे में, दूसरा हिस्सा 120/60 = 2 घंटे में। कुल समय 5 घंटे, तो औसत चाल = 240/5 = 48 km/h। ध्यान दो — औसत चाल 50 नहीं है, जो 40 और 60 का साधारण औसत होता। क्योंकि धीमी चाल पर ज़्यादा समय लगा, औसत धीमी चाल की तरफ़ झुकता है। यही जाल परीक्षा में बार-बार आता है। ट्रेन के सवाल में भी वही सूत्र है: 72 km/h की चाल से 2.5 घंटे में ट्रेन 72 × 2.5 = 180 km चलेगी।',
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
              'Example 1: 60 km ki doori 1.5 ghante mein tay hui. Speed = 60/1.5 = 40 km/h. Decimal se bachne ke liye 60/1.5 ko 600/15 likho — jawab 40 aayega. Example 2: train 72 km/h ki speed se 2.5 ghante chalti hai. Distance = 72 × 2.5 = 180 km. 2.5 ko 5/2 likh lo: 72 × 5/2 = 36 × 5 = 180. Example 3: do trains ek dusre ki taraf aa rahi hain, ek 60 km/h aur dusri 40 km/h ki speed se. Unke beech ki doori 300 km hai. Relative speed = 60 + 40 = 100 km/h, kyunki dono ek dusre ki taraf aa rahi hain. Milne ka time = 300/100 = 3 ghante. Agar dono ek hi direction mein ja rahi hoti, to relative speed fark hoti: 60 − 40 = 20 km/h. Ek aur: 300 km ki doori 50 km/h ki speed se tay karni hai. Time = 300/50 = 6 ghante.',
            english:
              'Example 1: 60 km is covered in 1.5 hours. Speed = 60/1.5 = 40 km/h. To avoid decimals, write 60/1.5 as 600/15 — the answer is 40. Example 2: a train runs at 72 km/h for 2.5 hours. Distance = 72 × 2.5 = 180 km. Write 2.5 as 5/2: 72 × 5/2 = 36 × 5 = 180. Example 3: two trains move towards each other, one at 60 km/h and the other at 40 km/h. The distance between them is 300 km. Relative speed = 60 + 40 = 100 km/h, because both are moving towards each other. Time to meet = 300/100 = 3 hours. If both were moving in the same direction, the relative speed would be the difference: 60 − 40 = 20 km/h. One more: to cover 300 km at 50 km/h, time = 300/50 = 6 hours.',
            hindi:
              'उदाहरण 1: 60 km की दूरी 1.5 घंटे में तय हुई। चाल = 60/1.5 = 40 km/h। दशमलव से बचने के लिए 60/1.5 को 600/15 लिखो — उत्तर 40 आएगा। उदाहरण 2: ट्रेन 72 km/h की चाल से 2.5 घंटे चलती है। दूरी = 72 × 2.5 = 180 km। 2.5 को 5/2 लिख लो: 72 × 5/2 = 36 × 5 = 180। उदाहरण 3: दो ट्रेनें एक-दूसरे की तरफ़ आ रही हैं, एक 60 km/h और दूसरी 40 km/h की चाल से। उनके बीच की दूरी 300 km है। सापेक्ष चाल = 60 + 40 = 100 km/h, क्योंकि दोनों एक-दूसरे की तरफ़ आ रही हैं। मिलने का समय = 300/100 = 3 घंटे। अगर दोनों एक ही दिशा में जा रही होतीं, तो सापेक्ष चाल अंतर होती: 60 − 40 = 20 km/h। एक और: 300 km की दूरी 50 km/h की चाल से तय करनी है। समय = 300/50 = 6 घंटे।',
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
              'Sabse badi galti hai do speeds ka simple average nikal lena. 40 aur 60 ka average 50 hota hai, lekin average speed 48 nikli — kyunki average speed hamesha total distance / total time hoti hai, speeds ka average nahi. Ye galti isliye hoti hai kyunki dimaag average ko seedha jod-bhaag samajhta hai, jabki yahan time ka weight alag hai. Dusri galti hai unit mix karna: km/h wali speed ko metre wali distance se multiply kar dena. Pehle unit ek karo, phir hisaab lagao. Teesri galti hai relative speed mein plus-minus ulta karna: aamne-saamne aane par speeds judti hain, ek hi direction mein ghata hoti hai. Log jaldi mein ulta kar dete hain. Ek check hamesha karo: jawab ki unit dekho — speed maang rahe hain to km/h ya m/s aana chahiye, ghanta nahi.',
            english:
              'The biggest mistake is taking the simple average of two speeds. The average of 40 and 60 is 50, but the average speed came out as 48 — because average speed is always total distance / total time, not the average of the speeds. This mistake happens because the mind treats an average as a plain add-and-divide, while here time carries different weight. The second mistake is mixing units: multiplying a speed in km/h by a distance in metres. First make the units match, then calculate. The third mistake is getting plus and minus backwards in relative speed: when two things move towards each other, speeds add; in the same direction, they subtract. People reverse this in a hurry. Always do one check: look at the unit of your answer — if speed is asked, the answer should be in km/h or m/s, not in hours.',
            hindi:
              'सबसे बड़ी गलती है दो चालों का साधारण औसत निकाल लेना। 40 और 60 का औसत 50 होता है, लेकिन औसत चाल 48 निकली — क्योंकि औसत चाल हमेशा कुल दूरी / कुल समय होती है, चालों का औसत नहीं। यह गलती इसलिए होती है क्योंकि दिमाग़ औसत को सीधा जोड़-भाग समझता है, जबकि यहाँ समय का भार अलग है। दूसरी गलती है इकाई मिलाना: km/h वाली चाल को मीटर वाली दूरी से गुणा कर देना। पहले इकाई एक करो, फिर हिसाब लगाओ। तीसरी गलती है सापेक्ष चाल में जमा-घटा उल्टा करना: आमने-सामने आने पर चालें जुड़ती हैं, एक ही दिशा में घटती हैं। लोग जल्दी में उल्टा कर देते हैं। एक जाँच हमेशा करो: उत्तर की इकाई देखो — चाल माँग रहे हैं तो km/h या m/s आना चाहिए, घंटा नहीं।',
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
              'Barabar distance par aana-jaana ho to average speed ka shortcut hai: 2xy/(x + y). Jaise jaate waqt 40 km/h aur aate waqt 60 km/h ho, to average speed = 2 × 40 × 60/(40 + 60) = 4,800/100 = 48 km/h — wahi jawab jo step by step mila. Ye formula sirf tab kaam karta hai jab aane-jaane ki distance barabar ho. Dusra shortcut: speed double kar do to wahi distance aadhe time mein tay hoti hai. 4 ghante ka safar 2 ghante ka ho jata hai. Teesra: train ki lambai wale sawalon mein train ko apni lambai + platform ya pul ki lambai tay karni hoti hai — sirf platform ki lambai nahi. Jaise 100 metre lambi train ko 200 metre ke pul ko paar karne ke liye 300 metre chalna hota hai. Ye baat aksar bhool jati hai aur sawal galat ho jata hai. Edge case: agar speed zero ho to time infinite hota hai — khade hokar kahin nahi pahunchoge.',
            english:
              'When the distance is the same on the way out and the way back, there is a shortcut for average speed: 2xy/(x + y). For example, going at 40 km/h and returning at 60 km/h, average speed = 2 × 40 × 60/(40 + 60) = 4,800/100 = 48 km/h — the same answer we got step by step. This formula only works when the two distances are equal. A second shortcut: double the speed and the same distance takes half the time. A 4-hour journey becomes 2 hours. A third point: in train-length questions, the train must cover its own length plus the length of the platform or bridge — not just the platform. For example, a 100-metre train crossing a 200-metre bridge must travel 300 metres. This is often forgotten and the question goes wrong. Edge case: if speed is zero, time is infinite — standing still gets you nowhere.',
            hindi:
              'बराबर दूरी पर आना-जाना हो तो औसत चाल का आसान तरीका है: 2xy/(x + y)। जैसे जाते समय 40 km/h और आते समय 60 km/h हो, तो औसत चाल = 2 × 40 × 60/(40 + 60) = 4,800/100 = 48 km/h — वही उत्तर जो कदम-दर-कदम मिला। यह सूत्र सिर्फ़ तब काम करता है जब आने-जाने की दूरी बराबर हो। दूसरा आसान तरीका: चाल दोगुनी कर दो तो वही दूरी आधे समय में तय होती है। 4 घंटे का सफ़र 2 घंटे का हो जाता है। तीसरा: ट्रेन की लंबाई वाले सवालों में ट्रेन को अपनी लंबाई + प्लेटफ़ॉर्म या पुल की लंबाई तय करनी होती है — सिर्फ़ प्लेटफ़ॉर्म की लंबाई नहीं। जैसे 100 मीटर लंबी ट्रेन को 200 मीटर के पुल को पार करने के लिए 300 मीटर चलना होता है। यह बात अक्सर भूल जाती है और सवाल ग़लत हो जाता है। ख़ास मामला: अगर चाल शून्य हो तो समय अनंत होता है — खड़े होकर कहीं नहीं पहुँचोगे।',
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
              'Soch lo 240 km ka safar hai: pehle 120 km, 40 ki speed se aur agle 120 km, 60 ki speed se — average speed 48 nikli. Ab agar dusra hissa 120 ki speed se tay karo, to time = 120/120 = 1 ghanta, kul time = 3 + 1 = 4 ghante, average speed = 240/4 = 60 km/h. Matlab dusre hisse ki speed double karne se average sirf 48 se 60 hui, 80 nahi — kyunki pehla slow hissa ab bhi 3 ghante le raha hai. Ab socho dono trains ki speed badal do: 60 aur 40 ki jagah 80 aur 70 ho, to relative speed 150 ho jati hai aur 300 km ki doori 2 ghante mein tay hoti hai. Exam mein jab bhi ek speed badlo, pehle socho ki time kitna badlega — time hi asal mein average ko control karta hai, speed nahi.',
            english:
              'Take the 240 km journey: the first 120 km at 40 km/h and the next 120 km at 60 km/h — average speed 48. Now if the second part is covered at 120 km/h, time = 120/120 = 1 hour, total time = 3 + 1 = 4 hours, average speed = 240/4 = 60 km/h. So doubling the second speed only raised the average from 48 to 60, not to 80 — because the first slow part still takes 3 hours. Now change both trains: instead of 60 and 40, make them 80 and 70; relative speed becomes 150 and the 300 km gap closes in 2 hours. In exams, whenever you change one speed, first think how much the time will change — time is what really controls the average, not speed.',
            hindi:
              '240 km का सफ़र लो: पहले 120 km, 40 की चाल से और अगले 120 km, 60 की चाल से — औसत चाल 48 निकली। अब अगर दूसरा हिस्सा 120 की चाल से तय करो, तो समय = 120/120 = 1 घंटा, कुल समय = 3 + 1 = 4 घंटे, औसत चाल = 240/4 = 60 km/h। मतलब दूसरे हिस्से की चाल दोगुनी करने से औसत सिर्फ़ 48 से 60 हुई, 80 नहीं — क्योंकि पहला धीमा हिस्सा अब भी 3 घंटे ले रहा है। अब दोनों ट्रेनों की चाल बदल दो: 60 और 40 की जगह 80 और 70 हो, तो सापेक्ष चाल 150 हो जाती है और 300 km की दूरी 2 घंटे में तय होती है। परीक्षा में जब भी एक चाल बदलो, पहले सोचो कि समय कितना बदलेगा — समय ही असल में औसत को नियंत्रित करता है, चाल नहीं।',
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
              'Speed = distance/time, distance = speed × time, time = distance/speed — ek formula, teen roop. Unit pehle ek karo: km/h ko m/s mein badalne ke liye 5/18 se multiply karo. Average speed hamesha total distance/total time hoti hai; barabar distance par aane-jaane ke liye 2xy/(x + y) use karo. Aamne-saamne aane par relative speed judti hai, ek hi direction mein ghatti hai. Train ki lambai wale sawalon mein train ki apni lambai bhi jodo. Aakhir mein unit check karo — speed ka jawab hamesha km/h ya m/s mein aana chahiye.',
            english:
              'Speed = distance/time, distance = speed × time, time = distance/speed — one formula, three forms. Match the units first: to change km/h into m/s, multiply by 5/18. Average speed is always total distance/total time; for equal distances out and back, use 2xy/(x + y). Moving towards each other, relative speed adds; in the same direction, it subtracts. In train-length questions, add the train own length too. Finally, check the unit — a speed answer must always come in km/h or m/s.',
            hindi:
              'चाल = दूरी/समय, दूरी = चाल × समय, समय = दूरी/चाल — एक सूत्र, तीन रूप। इकाई पहले एक करो: km/h को m/s में बदलने के लिए 5/18 से गुणा करो। औसत चाल हमेशा कुल दूरी/कुल समय होती है; बराबर दूरी पर आने-जाने के लिए 2xy/(x + y) उपयोग करो। आमने-सामने आने पर सापेक्ष चाल जुड़ती है, एक ही दिशा में घटती है। ट्रेन की लंबाई वाले सवालों में ट्रेन की अपनी लंबाई भी जोड़ो। आख़िर में इकाई जाँचो — चाल का उत्तर हमेशा km/h या m/s में आना चाहिए।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Speed wale sawal ka flow',
          english: 'The flow for a speed question',
          hindi: 'चाल वाले सवाल का प्रवाह',
        },
        nodes: [
          {
            t: {
              hinglish: 'Unit ek karo',
              english: 'Match the units',
              hindi: 'इकाई एक करो',
            },
            s: {
              hinglish: 'km/h ya m/s — ek chuno',
              english: 'km/h or m/s — pick one',
              hindi: 'km/h या m/s — एक चुनो',
            },
          },
          {
            t: {
              hinglish: 'Formula lagao',
              english: 'Apply the formula',
              hindi: 'सूत्र लगाओ',
            },
            s: {
              hinglish: 'Speed = distance / time',
              english: 'Speed = distance / time',
              hindi: 'चाल = दूरी / समय',
            },
          },
          {
            t: {
              hinglish: 'Average alag se',
              english: 'Average is separate',
              hindi: 'औसत अलग से',
            },
            s: {
              hinglish: 'Kul distance / kul time',
              english: 'Total distance / total time',
              hindi: 'कुल दूरी / कुल समय',
            },
          },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: '90 km/h kitne m/s ke barabar hai?',
            english: '90 km/h equals how many m/s?',
            hindi: '90 km/h कितने m/s के बराबर है?',
          },
          opts: [
            { hinglish: '20 m/s', english: '20 m/s', hindi: '20 m/s' },
            { hinglish: '25 m/s', english: '25 m/s', hindi: '25 m/s' },
            { hinglish: '30 m/s', english: '30 m/s', hindi: '30 m/s' },
            { hinglish: '18 m/s', english: '18 m/s', hindi: '18 m/s' },
          ],
          ans: 1,
          expl: {
            hinglish: '90 × 5/18 = 25 m/s. 90/18 = 5, aur 5 × 5 = 25.',
            english: '90 × 5/18 = 25 m/s. 90/18 = 5, and 5 × 5 = 25.',
            hindi: '90 × 5/18 = 25 m/s। 90/18 = 5, और 5 × 5 = 25।',
          },
        },
        {
          q: {
            hinglish: '300 km ki doori 50 km/h ki speed se kitne time mein tay hogi?',
            english: 'How long does it take to cover 300 km at 50 km/h?',
            hindi: '300 km की दूरी 50 km/h की चाल से कितने समय में तय होगी?',
          },
          opts: [
            { hinglish: '5 ghante', english: '5 hours', hindi: '5 घंटे' },
            { hinglish: '6 ghante', english: '6 hours', hindi: '6 घंटे' },
            { hinglish: '7 ghante', english: '7 hours', hindi: '7 घंटे' },
            { hinglish: '8 ghante', english: '8 hours', hindi: '8 घंटे' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Time = distance/speed = 300/50 = 6 ghante.',
            english: 'Time = distance/speed = 300/50 = 6 hours.',
            hindi: 'समय = दूरी/चाल = 300/50 = 6 घंटे।',
          },
        },
        {
          q: {
            hinglish: 'Do trains ek dusre ki taraf 60 km/h aur 40 km/h ki speed se aa rahi hain. Beech ki doori 300 km hai. Kitne time baad milengi?',
            english: 'Two trains move towards each other at 60 km/h and 40 km/h. The gap is 300 km. After how long do they meet?',
            hindi: 'दो ट्रेनें एक-दूसरे की तरफ़ 60 km/h और 40 km/h की चाल से आ रही हैं। बीच की दूरी 300 km है। कितने समय बाद मिलेंगी?',
          },
          opts: [
            { hinglish: '2 ghante', english: '2 hours', hindi: '2 घंटे' },
            { hinglish: '2.5 ghante', english: '2.5 hours', hindi: '2.5 घंटे' },
            { hinglish: '3 ghante', english: '3 hours', hindi: '3 घंटे' },
            { hinglish: '4 ghante', english: '4 hours', hindi: '4 घंटे' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Relative speed = 60 + 40 = 100 km/h. Time = 300/100 = 3 ghante.',
            english: 'Relative speed = 60 + 40 = 100 km/h. Time = 300/100 = 3 hours.',
            hindi: 'सापेक्ष चाल = 60 + 40 = 100 km/h। समय = 300/100 = 3 घंटे।',
          },
        },
        {
          q: {
            hinglish: 'Ek car 4 ghante mein ek safar karti hai. Agar speed double kar di jaye to wahi safar kitne time mein hoga?',
            english: 'A car takes 4 hours for a journey. If the speed is doubled, how long will the same journey take?',
            hindi: 'एक कार 4 घंटे में एक सफ़र करती है। अगर चाल दोगुनी कर दी जाए तो वही सफ़र कितने समय में होगा?',
          },
          opts: [
            { hinglish: '1 ghanta', english: '1 hour', hindi: '1 घंटा' },
            { hinglish: '2 ghante', english: '2 hours', hindi: '2 घंटे' },
            { hinglish: '3 ghante', english: '3 hours', hindi: '3 घंटे' },
            { hinglish: '8 ghante', english: '8 hours', hindi: '8 घंटे' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Speed double ho to time aadha hota hai: 4/2 = 2 ghante.',
            english: 'When speed doubles, time halves: 4/2 = 2 hours.',
            hindi: 'चाल दोगुनी हो तो समय आधा होता है: 4/2 = 2 घंटे।',
          },
        },
        {
          q: {
            hinglish: 'Ek aadmi 120 km jaata hai 40 km/h se aur wapas 120 km aata hai 60 km/h se. Uski average speed kitni hai?',
            english: 'A man travels 120 km at 40 km/h and returns 120 km at 60 km/h. What is his average speed?',
            hindi: 'एक आदमी 120 km जाता है 40 km/h से और वापस 120 km आता है 60 km/h से। उसकी औसत चाल कितनी है?',
          },
          opts: [
            { hinglish: '50 km/h', english: '50 km/h', hindi: '50 km/h' },
            { hinglish: '48 km/h', english: '48 km/h', hindi: '48 km/h' },
            { hinglish: '45 km/h', english: '45 km/h', hindi: '45 km/h' },
            { hinglish: '52 km/h', english: '52 km/h', hindi: '52 km/h' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Kul distance 240 km, kul time 3 + 2 = 5 ghante. Average speed = 240/5 = 48 km/h. Speeds ka simple average 50 galat hota.',
            english: 'Total distance 240 km, total time 3 + 2 = 5 hours. Average speed = 240/5 = 48 km/h. The simple average of the speeds, 50, is wrong.',
            hindi: 'कुल दूरी 240 km, कुल समय 3 + 2 = 5 घंटे। औसत चाल = 240/5 = 48 km/h। चालों का साधारण औसत 50 ग़लत होता।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Speed-distance ki practice',
          english: 'Speed-distance practice',
          hindi: 'चाल-दूरी का अभ्यास',
        },
        task: {
          hinglish:
            'Neeche wale 3 sawal kagaz par solve karo, phir starter code mein apne answers likh kar Run dabao. Q1: 150 km ki doori 2.5 ghante mein tay hui. Speed kitni thi? (Jawab: 60 km/h) Q2: 80 km/h ki speed se 3 ghante mein kitni doori tay hogi? (Jawab: 240 km) Q3: 54 km/h kitne m/s ke barabar hai? (Jawab: 15 m/s) Method: speed = distance/time; km/h se m/s ke liye 5/18 se multiply karo.',
          english:
            'Solve the 3 questions below on paper, then type your answers in the starter code and press Run. Q1: 150 km is covered in 2.5 hours. What was the speed? (Answer: 60 km/h) Q2: How far do you travel in 3 hours at 80 km/h? (Answer: 240 km) Q3: 54 km/h equals how many m/s? (Answer: 15 m/s) Method: speed = distance/time; to change km/h into m/s, multiply by 5/18.',
          hindi:
            'नीचे वाले 3 सवाल काग़ज़ पर हल करो, फिर स्टार्टर कोड में अपने उत्तर लिखकर Run दबाओ। Q1: 150 km की दूरी 2.5 घंटे में तय हुई। चाल कितनी थी? (उत्तर: 60 km/h) Q2: 80 km/h की चाल से 3 घंटे में कितनी दूरी तय होगी? (उत्तर: 240 km) Q3: 54 km/h कितने m/s के बराबर है? (उत्तर: 15 m/s) तरीका: चाल = दूरी/समय; km/h से m/s के लिए 5/18 से गुणा करो।',
        },
        language: 'python',
        starter:
          '# Apne 3 answers yahan likho, phir Run dabao.\nanswers = [None, None, None]\ncorrect = [60, 240, 15]\nfor i in range(3):\n    if answers[i] == correct[i]:\n        print(f"Q{i+1}: sahi hai!")\n    else:\n        print(f"Q{i+1}: abhi sahi answer nahi mila. Sahi answer: {correct[i]}")\n',
        expected: 'Teeno sahi hone par script har sawal ke saamne "sahi hai!" print karega.',
      },
      readMinutes: 10,
    },
    {
      id: 'quant-averages-ratios',
      subjectId: 'quantitative-aptitude',
      title: {
        hinglish: 'Averages & ratios — ausat aur anupaat',
        english: 'Averages and Ratios — Means and Proportions',
        hindi: 'औसत और अनुपात — औसत और अनुपात',
      },
      summary: {
        hinglish: 'Average ka matlab kul jod, naya number judne par kya badalta hai, aur ratio ko hisson mein baantna — exam ke favourite sawal.',
        english: 'Average means total sum, what changes when a new number joins, and splitting by ratio — the exam favourite questions.',
        hindi: 'औसत का मतलब कुल जोड़, नया नंबर जुड़ने पर क्या बदलता है, और अनुपात से हिस्सों में बाँटना — परीक्षा के पसंदीदा सवाल।',
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
              'Average matlab hai kul jod ko count se divide karna: average = kul jod / kitne numbers hain. Isi ko ulta karke kul jod = average × count bhi milta hai — ye ulta roop exam mein zyada kaam aata hai. Jaise 5 students ke marks 70, 80, 90, 60 aur 75 hain. Kul jod = 70 + 80 + 90 + 60 + 75 = 375, aur average = 375/5 = 75. Ratio ka matlab hai do numbers ke beech ka comparison: 3:5 ka matlab hai pehla number 3 hisse ka aur dusra 5 hisse ka. Agar dono ka kul jod 64 hai, to kul hisse = 3 + 5 = 8, ek hissa = 64/8 = 8, to pehla number = 3 × 8 = 24 aur dusra = 5 × 8 = 40. Ratio ko hamesha hisson mein socho — ye soch sawal ko aasan bana deti hai. Average aur ratio aksar ek hi sawal mein aate hain, jaise do groups ka average nikalna.',
            english:
              'Average means dividing the total sum by the count: average = total sum / how many numbers there are. Turning it around gives total sum = average × count — this reversed form is used even more in exams. For example, 5 students score 70, 80, 90, 60 and 75. Total = 70 + 80 + 90 + 60 + 75 = 375, and average = 375/5 = 75. A ratio is a comparison between two numbers: 3:5 means the first number is 3 parts and the second is 5 parts. If their total is 64, total parts = 3 + 5 = 8, one part = 64/8 = 8, so the first number = 3 × 8 = 24 and the second = 5 × 8 = 40. Always think of a ratio in parts — that way of thinking makes questions easy. Average and ratio often appear in the same question, such as finding the average of two groups.',
            hindi:
              'औसत का मतलब है कुल जोड़ को गिनती से भाग देना: औसत = कुल जोड़ / कितनी संख्याएँ हैं। इसी को उल्टा करके कुल जोड़ = औसत × गिनती भी मिलता है — यह उल्टा रूप परीक्षा में ज़्यादा काम आता है। जैसे 5 विद्यार्थियों के अंक 70, 80, 90, 60 और 75 हैं। कुल जोड़ = 70 + 80 + 90 + 60 + 75 = 375, और औसत = 375/5 = 75। अनुपात का मतलब है दो संख्याओं के बीच की तुलना: 3:5 का मतलब है पहली संख्या 3 हिस्से की और दूसरी 5 हिस्से की। अगर दोनों का कुल जोड़ 64 है, तो कुल हिस्से = 3 + 5 = 8, एक हिस्सा = 64/8 = 8, तो पहली संख्या = 3 × 8 = 24 और दूसरी = 5 × 8 = 40। अनुपात को हमेशा हिस्सों में सोचो — यह सोच सवाल को आसान बना देती है। औसत और अनुपात अक्सर एक ही सवाल में आते हैं, जैसे दो समूहों का औसत निकालना।',
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
              'Tumhare ghar mein 4 log hain aur sabki umar ka average 25 saal hai. To kul umar = 25 × 4 = 100 saal. Ab ek naya mehman aa jata hai jiski umar 40 saal hai. Ab kul umar = 100 + 40 = 140, log = 5, naya average = 140/5 = 28 saal. Dekho, average 25 se 28 ho gaya kyunki naya number average se bada tha. Ratio ka roz ka scene: tum aur tumhara bhai pocket money 2:3 ke ratio mein paate ho aur kul 50 rupees milte hain. Kul hisse = 5, ek hissa = 50/5 = 10, to tumhe 2 × 10 = 20 rupees aur bhai ko 3 × 10 = 30 rupees milte hain. Cricket mein bhi average chalti hai: ek batsman ne 5 match mein kul 375 run banaye to uska average 75 hai. Yehi average exam mein numbers ke roop mein aata hai.',
            english:
              'There are 4 people in your home and the average of their ages is 25 years. So total age = 25 × 4 = 100 years. Now a guest arrives who is 40 years old. Total age becomes 100 + 40 = 140, people = 5, new average = 140/5 = 28 years. See, the average rose from 25 to 28 because the new number was bigger than the average. A daily ratio scene: you and your brother get pocket money in the ratio 2:3 and the total is 50 rupees. Total parts = 5, one part = 50/5 = 10, so you get 2 × 10 = 20 rupees and your brother gets 3 × 10 = 30 rupees. Cricket runs on averages too: a batsman who scores 375 runs in 5 matches has an average of 75. This same average appears in exams in number form.',
            hindi:
              'तुम्हारे घर में 4 लोग हैं और सबकी उम्र का औसत 25 साल है। तो कुल उम्र = 25 × 4 = 100 साल। अब एक नया मेहमान आ जाता है जिसकी उम्र 40 साल है। अब कुल उम्र = 100 + 40 = 140, लोग = 5, नया औसत = 140/5 = 28 साल। देखो, औसत 25 से 28 हो गया क्योंकि नया नंबर औसत से बड़ा था। अनुपात का रोज़ का दृश्य: तुम और तुम्हारा भाई पॉकेट मनी 2:3 के अनुपात में पाते हो और कुल 50 रुपये मिलते हैं। कुल हिस्से = 5, एक हिस्सा = 50/5 = 10, तो तुम्हें 2 × 10 = 20 रुपये और भाई को 3 × 10 = 30 रुपये मिलते हैं। क्रिकेट में भी औसत चलता है: एक बल्लेबाज़ ने 5 मैच में कुल 375 रन बनाए तो उसका औसत 75 है। यही औसत परीक्षा में संख्याओं के रूप में आता है।',
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
              'Example 1: numbers 70, 80, 90, 60, 75 ka average nikalo. Step 1: kul jod = 70 + 80 + 90 + 60 + 75 = 375. Step 2: count = 5. Step 3: average = 375/5 = 75. Example 2: 64 ko 3:5 ke ratio mein baanto. Step 1: kul hisse = 3 + 5 = 8. Step 2: ek hissa = 64/8 = 8. Step 3: pehla = 3 × 8 = 24, dusra = 5 × 8 = 40. Check: 24 + 40 = 64 — sahi. Example 3: 4 numbers ka average 25 hai, to kul jod = 25 × 4 = 100. Ab ek number 40 jod do: kul jod = 140, count = 5, naya average = 140/5 = 28. Ye ulta hisaab exam mein sabse zyada aata hai — average diya hota hai, kul jod nikalna hota hai. Ek aur: pehle 4 numbers ka average 10 hai (kul 40), agle 4 ka average 20 hai (kul 80). Sab 8 ka kul jod = 120, average = 120/8 = 15.',
            english:
              'Example 1: find the average of 70, 80, 90, 60, 75. Step 1: total = 70 + 80 + 90 + 60 + 75 = 375. Step 2: count = 5. Step 3: average = 375/5 = 75. Example 2: split 64 in the ratio 3:5. Step 1: total parts = 3 + 5 = 8. Step 2: one part = 64/8 = 8. Step 3: first = 3 × 8 = 24, second = 5 × 8 = 40. Check: 24 + 40 = 64 — correct. Example 3: the average of 4 numbers is 25, so total = 25 × 4 = 100. Now add a number 40: total = 140, count = 5, new average = 140/5 = 28. This reversed calculation appears most in exams — the average is given, and you must find the total. One more: the first 4 numbers average 10 (total 40), the next 4 average 20 (total 80). All 8 total 120, average = 120/8 = 15.',
            hindi:
              'उदाहरण 1: संख्याओं 70, 80, 90, 60, 75 का औसत निकालो। चरण 1: कुल जोड़ = 70 + 80 + 90 + 60 + 75 = 375। चरण 2: गिनती = 5। चरण 3: औसत = 375/5 = 75। उदाहरण 2: 64 को 3:5 के अनुपात में बाँटो। चरण 1: कुल हिस्से = 3 + 5 = 8। चरण 2: एक हिस्सा = 64/8 = 8। चरण 3: पहला = 3 × 8 = 24, दूसरा = 5 × 8 = 40। जाँच: 24 + 40 = 64 — सही। उदाहरण 3: 4 संख्याओं का औसत 25 है, तो कुल जोड़ = 25 × 4 = 100। अब एक संख्या 40 जोड़ दो: कुल जोड़ = 140, गिनती = 5, नया औसत = 140/5 = 28। यह उल्टा हिसाब परीक्षा में सबसे ज़्यादा आता है — औसत दिया होता है, कुल जोड़ निकालना होता है। एक और: पहली 4 संख्याओं का औसत 10 है (कुल 40), अगली 4 का औसत 20 है (कुल 80)। सभी 8 का कुल जोड़ = 120, औसत = 120/8 = 15।',
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
              'Sabse badi galti hai do groups ke average ka simple average nikal lena. Pehle 4 numbers ka average 10 aur agle 4 ka 20 hai — yahan simple average 15 sahi hai kyunki dono groups mein count barabar hai. Lekin agar pehle group mein 2 numbers hon aur dusre mein 6, to simple average galat hoga — kul jod se hisaab lagana padega. Ye galti isliye hoti hai kyunki average ko ek aam number samajh liya jata hai, jabki uske peeche count chhupa hota hai. Dusri galti hai ratio ko seedha number samajhna: 3:5 ka matlab 3 aur 5 nahi hai, matlab hai 3 hisse aur 5 hisse — asli number kul jod par depend karta hai. Teesri galti hai naya number judne par purana average hi use kar lena. Average tabhi badlega jab naya number purane average se bada ya chhota hoga; agar naya number average ke barabar ho to average wahi rehta hai.',
            english:
              'The biggest mistake is taking the simple average of two groups averages. The first 4 numbers average 10 and the next 4 average 20 — here the simple average 15 is correct because both groups have equal counts. But if the first group had 2 numbers and the second had 6, the simple average would be wrong — you must calculate from the totals. This mistake happens because an average is treated like an ordinary number, while a count is hidden behind it. The second mistake is treating a ratio as plain numbers: 3:5 does not mean 3 and 5, it means 3 parts and 5 parts — the real numbers depend on the total. The third mistake is reusing the old average when a new number joins. The average only changes when the new number is bigger or smaller than the old average; if the new number equals the average, the average stays the same.',
            hindi:
              'सबसे बड़ी गलती है दो समूहों के औसत का साधारण औसत निकाल लेना। पहली 4 संख्याओं का औसत 10 और अगली 4 का 20 है — यहाँ साधारण औसत 15 सही है क्योंकि दोनों समूहों में गिनती बराबर है। लेकिन अगर पहले समूह में 2 संख्याएँ हों और दूसरे में 6, तो साधारण औसत ग़लत होगा — कुल जोड़ से हिसाब लगाना पड़ेगा। यह गलती इसलिए होती है क्योंकि औसत को एक आम संख्या समझ लिया जाता है, जबकि उसके पीछे गिनती छिपी होती है। दूसरी गलती है अनुपात को सीधा संख्या समझना: 3:5 का मतलब 3 और 5 नहीं है, मतलब है 3 हिस्से और 5 हिस्से — असली संख्या कुल जोड़ पर निर्भर करती है। तीसरी गलती है नया नंबर जुड़ने पर पुराना औसत ही उपयोग कर लेना। औसत तभी बदलेगा जब नया नंबर पुराने औसत से बड़ा या छोटा होगा; अगर नया नंबर औसत के बराबर हो तो औसत वही रहता है।',
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
              'Ek shortcut hai naya average nikalne ka: agar purana average A hai, count n hai, aur naya number x judta hai, to naya average = A + (x − A)/(n + 1). Jaise average 25, count 4, naya number 40: naya average = 25 + (40 − 25)/5 = 25 + 3 = 28 — wahi jawab. Ye formula isliye kaam karta hai kyunki naya number sirf apne aur average ke fark ko baant ta hai. Ratio ka shortcut: agar A:B = 3:4 hai aur B = 28 hai, to ek hissa = 28/4 = 7, to A = 3 × 7 = 21. Hamesha pehle ek hissa nikalo. Edge case: average nikalte waqt zero bhi ek number hota hai — 0, 10, 20 ka average 10 hai, 15 nahi, kyunki count 3 hai. Log zero ko ginna bhool jate hain. Ek aur edge case: ratio ko hamesha simplest form mein likho — 6:8 likhne ki jagah 3:4 likho, warna hisse galat ho jayenge.',
            english:
              'Here is a shortcut for a new average: if the old average is A, the count is n, and a new number x joins, the new average = A + (x − A)/(n + 1). For example, average 25, count 4, new number 40: new average = 25 + (40 − 25)/5 = 25 + 3 = 28 — the same answer. This formula works because the new number only shares the gap between itself and the average. A ratio shortcut: if A:B = 3:4 and B = 28, one part = 28/4 = 7, so A = 3 × 7 = 21. Always find one part first. Edge case: zero also counts as a number when finding an average — the average of 0, 10, 20 is 10, not 15, because the count is 3. People forget to count zero. Another edge case: always write a ratio in simplest form — write 3:4 instead of 6:8, or the parts will go wrong.',
            hindi:
              'एक आसान तरीका है नया औसत निकालने का: अगर पुराना औसत A है, गिनती n है, और नया नंबर x जुड़ता है, तो नया औसत = A + (x − A)/(n + 1)। जैसे औसत 25, गिनती 4, नया नंबर 40: नया औसत = 25 + (40 − 25)/5 = 25 + 3 = 28 — वही उत्तर। यह सूत्र इसलिए काम करता है क्योंकि नया नंबर सिर्फ़ अपने और औसत के अंतर को बाँटता है। अनुपात का आसान तरीका: अगर A:B = 3:4 है और B = 28 है, तो एक हिस्सा = 28/4 = 7, तो A = 3 × 7 = 21। हमेशा पहले एक हिस्सा निकालो। ख़ास मामला: औसत निकालते समय शून्य भी एक संख्या होता है — 0, 10, 20 का औसत 10 है, 15 नहीं, क्योंकि गिनती 3 है। लोग शून्य को गिनना भूल जाते हैं। एक और ख़ास मामला: अनुपात को हमेशा सरलतम रूप में लिखो — 6:8 लिखने की जगह 3:4 लिखो, वरना हिस्से ग़लत हो जाएँगे।',
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
              'Soch lo 4 numbers ka average 25 hai (kul 100) aur naya number 40 ki jagah 10 jud jaye. To kul jod = 110, naya average = 110/5 = 22. Matlab average 25 se gir kar 22 ho gaya — kyunki naya number average se chhota tha. Ab socho naya number 25 hi ho, to kul jod = 125, average = 125/5 = 25 — koi badlav nahi. Ye rule yaad rakho: naya number average se bada ho to average badhega, chhota ho to ghatega, barabar ho to wahi rahega. Ratio mein socho: 64 ko 3:5 ki jagah 1:1 mein baanto to dono ko 32-32 milenge. Ratio badalne se hisson ka size badalta hai, kul jod nahi. Exam mein jab bhi ek number badlo, pehle ye disha socho — badhega ya ghatega — phir hisaab lagao, galti kam hogi.',
            english:
              'Suppose the average of 4 numbers is 25 (total 100) and the new number is 10 instead of 40. Then total = 110, new average = 110/5 = 22. So the average fell from 25 to 22 — because the new number was smaller than the average. Now suppose the new number is exactly 25; then total = 125, average = 125/5 = 25 — no change. Remember this rule: if the new number is bigger than the average, the average rises; if smaller, it falls; if equal, it stays. In ratio terms: split 64 in 1:1 instead of 3:5 and both get 32 each. Changing the ratio changes the size of the parts, not the total. In exams, whenever you change one number, first think about the direction — will it rise or fall — then calculate; mistakes will drop.',
            hindi:
              'मान लो 4 संख्याओं का औसत 25 है (कुल 100) और नया नंबर 40 की जगह 10 जुड़ जाए। तो कुल जोड़ = 110, नया औसत = 110/5 = 22। मतलब औसत 25 से गिरकर 22 हो गया — क्योंकि नया नंबर औसत से छोटा था। अब सोचो नया नंबर 25 ही हो, तो कुल जोड़ = 125, औसत = 125/5 = 25 — कोई बदलाव नहीं। यह नियम याद रखो: नया नंबर औसत से बड़ा हो तो औसत बढ़ेगा, छोटा हो तो घटेगा, बराबर हो तो वही रहेगा। अनुपात में सोचो: 64 को 3:5 की जगह 1:1 में बाँटो तो दोनों को 32-32 मिलेंगे। अनुपात बदलने से हिस्सों का आकार बदलता है, कुल जोड़ नहीं। परीक्षा में जब भी एक संख्या बदलो, पहले यह दिशा सोचो — बढ़ेगा या घटेगा — फिर हिसाब लगाओ, ग़लती कम होगी।',
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
              'Average = kul jod / count, aur kul jod = average × count — ulta hisaab exam mein zyada aata hai. Naya number judne par pehle kul jod nikalo, phir naya average nikalo; shortcut hai A + (x − A)/(n + 1). Ratio ko hamesha hisson mein socho: kul hisse jodo, ek hissa nikalo, phir multiply karo. Do groups ka average nikalte waqt count ka weight mat bhoolo — kul jod se hisaab lagao. Zero bhi ginna hai, ratio simplest form mein likhna hai. Aakhir mein check karo: average hamesha sabse chhote aur sabse bade number ke beech mein hota hai — agar bahar aa raha hai to hisaab galat hai.',
            english:
              'Average = total / count, and total = average × count — the reversed calculation appears more in exams. When a new number joins, first find the total, then the new average; the shortcut is A + (x − A)/(n + 1). Always think of a ratio in parts: add the total parts, find one part, then multiply. When averaging two groups, do not forget the weight of the count — calculate from the totals. Zero counts too, and a ratio must be in simplest form. Finally, check: the average is always between the smallest and the largest number — if it falls outside, the calculation is wrong.',
            hindi:
              'औसत = कुल जोड़ / गिनती, और कुल जोड़ = औसत × गिनती — उल्टा हिसाब परीक्षा में ज़्यादा आता है। नया नंबर जुड़ने पर पहले कुल जोड़ निकालो, फिर नया औसत निकालो; आसान तरीका है A + (x − A)/(n + 1)। अनुपात को हमेशा हिस्सों में सोचो: कुल हिस्से जोड़ो, एक हिस्सा निकालो, फिर गुणा करो। दो समूहों का औसत निकालते समय गिनती का भार मत भूलो — कुल जोड़ से हिसाब लगाओ। शून्य भी गिनना है, अनुपात सरलतम रूप में लिखना है। आख़िर में जाँच करो: औसत हमेशा सबसे छोटी और सबसे बड़ी संख्या के बीच में होता है — अगर बाहर आ रहा है तो हिसाब ग़लत है।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Average wale sawal ka flow',
          english: 'The flow for an average question',
          hindi: 'औसत वाले सवाल का प्रवाह',
        },
        nodes: [
          {
            t: {
              hinglish: 'Kul jod nikalo',
              english: 'Find the total',
              hindi: 'कुल जोड़ निकालो',
            },
            s: {
              hinglish: 'Average × count',
              english: 'Average × count',
              hindi: 'औसत × गिनती',
            },
          },
          {
            t: {
              hinglish: 'Badlav jodo ya ghatao',
              english: 'Add or remove the change',
              hindi: 'बदलाव जोड़ो या घटाओ',
            },
            s: {
              hinglish: 'Naya number jodo',
              english: 'Add the new number',
              hindi: 'नया नंबर जोड़ो',
            },
          },
          {
            t: {
              hinglish: 'Naya average nikalo',
              english: 'Find the new average',
              hindi: 'नया औसत निकालो',
            },
            s: {
              hinglish: 'Naya kul / nayi count',
              english: 'New total / new count',
              hindi: 'नया कुल / नई गिनती',
            },
          },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: '10, 20, 30 aur 40 ka average kitna hai?',
            english: 'What is the average of 10, 20, 30 and 40?',
            hindi: '10, 20, 30 और 40 का औसत कितना है?',
          },
          opts: [
            { hinglish: '20', english: '20', hindi: '20' },
            { hinglish: '25', english: '25', hindi: '25' },
            { hinglish: '30', english: '30', hindi: '30' },
            { hinglish: '22', english: '22', hindi: '22' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Kul jod = 10 + 20 + 30 + 40 = 100. Average = 100/4 = 25.',
            english: 'Total = 10 + 20 + 30 + 40 = 100. Average = 100/4 = 25.',
            hindi: 'कुल जोड़ = 10 + 20 + 30 + 40 = 100। औसत = 100/4 = 25।',
          },
        },
        {
          q: {
            hinglish: '50 ko 2:3 ke ratio mein baanto. Chhota hissa kitna hoga?',
            english: 'Split 50 in the ratio 2:3. What is the smaller part?',
            hindi: '50 को 2:3 के अनुपात में बाँटो। छोटा हिस्सा कितना होगा?',
          },
          opts: [
            { hinglish: '15', english: '15', hindi: '15' },
            { hinglish: '20', english: '20', hindi: '20' },
            { hinglish: '25', english: '25', hindi: '25' },
            { hinglish: '30', english: '30', hindi: '30' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Kul hisse = 5, ek hissa = 50/5 = 10. Chhota hissa = 2 × 10 = 20.',
            english: 'Total parts = 5, one part = 50/5 = 10. Smaller part = 2 × 10 = 20.',
            hindi: 'कुल हिस्से = 5, एक हिस्सा = 50/5 = 10। छोटा हिस्सा = 2 × 10 = 20।',
          },
        },
        {
          q: {
            hinglish: '5 numbers ka average 24 hai. Ek aur number 30 jod diya jaye to naya average kitna hoga?',
            english: 'The average of 5 numbers is 24. If one more number, 30, is added, what is the new average?',
            hindi: '5 संख्याओं का औसत 24 है। एक और संख्या 30 जोड़ दी जाए तो नया औसत कितना होगा?',
          },
          opts: [
            { hinglish: '24', english: '24', hindi: '24' },
            { hinglish: '25', english: '25', hindi: '25' },
            { hinglish: '26', english: '26', hindi: '26' },
            { hinglish: '27', english: '27', hindi: '27' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Kul jod = 24 × 5 = 120. Naya kul = 150, count = 6. Naya average = 150/6 = 25.',
            english: 'Total = 24 × 5 = 120. New total = 150, count = 6. New average = 150/6 = 25.',
            hindi: 'कुल जोड़ = 24 × 5 = 120। नया कुल = 150, गिनती = 6। नया औसत = 150/6 = 25।',
          },
        },
        {
          q: {
            hinglish: 'A:B = 3:4 hai aur B = 28 hai. A kitna hai?',
            english: 'A:B = 3:4 and B = 28. What is A?',
            hindi: 'A:B = 3:4 है और B = 28 है। A कितना है?',
          },
          opts: [
            { hinglish: '18', english: '18', hindi: '18' },
            { hinglish: '21', english: '21', hindi: '21' },
            { hinglish: '24', english: '24', hindi: '24' },
            { hinglish: '20', english: '20', hindi: '20' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Ek hissa = 28/4 = 7. A = 3 × 7 = 21.',
            english: 'One part = 28/4 = 7. A = 3 × 7 = 21.',
            hindi: 'एक हिस्सा = 28/4 = 7। A = 3 × 7 = 21।',
          },
        },
        {
          q: {
            hinglish: 'Pehle 4 numbers ka average 10 hai aur agle 4 numbers ka average 20 hai. Sab 8 numbers ka average kitna hai?',
            english: 'The first 4 numbers average 10 and the next 4 numbers average 20. What is the average of all 8 numbers?',
            hindi: 'पहली 4 संख्याओं का औसत 10 है और अगली 4 संख्याओं का औसत 20 है। सभी 8 संख्याओं का औसत कितना है?',
          },
          opts: [
            { hinglish: '12', english: '12', hindi: '12' },
            { hinglish: '15', english: '15', hindi: '15' },
            { hinglish: '18', english: '18', hindi: '18' },
            { hinglish: '14', english: '14', hindi: '14' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Kul jod = 40 + 80 = 120. Average = 120/8 = 15. Dono groups mein count barabar hai, isliye simple average bhi 15 hi aata hai.',
            english: 'Total = 40 + 80 = 120. Average = 120/8 = 15. Both groups have equal counts, so the simple average is also 15 here.',
            hindi: 'कुल जोड़ = 40 + 80 = 120। औसत = 120/8 = 15। दोनों समूहों में गिनती बराबर है, इसलिए साधारण औसत भी 15 ही आता है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Average-ratio ki practice',
          english: 'Average-ratio practice',
          hindi: 'औसत-अनुपात का अभ्यास',
        },
        task: {
          hinglish:
            'Neeche wale 3 sawal kagaz par solve karo, phir starter code mein apne answers likh kar Run dabao. Q1: 5, 15 aur 25 ka average kitna hai? (Jawab: 15) Q2: 72 ko 5:7 ke ratio mein baanto. Chhota hissa kitna hoga? (Jawab: 30) Q3: 4 numbers ka average 30 hai. Unme 20 aur 40 jod diye jayein to 6 numbers ka naya average kitna hoga? (Jawab: 30) Method: pehle kul jod nikalo (average × count), phir badlav jodo, phir naya average nikalo.',
          english:
            'Solve the 3 questions below on paper, then type your answers in the starter code and press Run. Q1: What is the average of 5, 15 and 25? (Answer: 15) Q2: Split 72 in the ratio 5:7. What is the smaller part? (Answer: 30) Q3: The average of 4 numbers is 30. If 20 and 40 are added, what is the new average of the 6 numbers? (Answer: 30) Method: first find the total (average × count), then add the change, then find the new average.',
          hindi:
            'नीचे वाले 3 सवाल काग़ज़ पर हल करो, फिर स्टार्टर कोड में अपने उत्तर लिखकर Run दबाओ। Q1: 5, 15 और 25 का औसत कितना है? (उत्तर: 15) Q2: 72 को 5:7 के अनुपात में बाँटो। छोटा हिस्सा कितना होगा? (उत्तर: 30) Q3: 4 संख्याओं का औसत 30 है। उनमें 20 और 40 जोड़ दिए जाएँ तो 6 संख्याओं का नया औसत कितना होगा? (उत्तर: 30) तरीका: पहले कुल जोड़ निकालो (औसत × गिनती), फिर बदलाव जोड़ो, फिर नया औसत निकालो।',
        },
        language: 'python',
        starter:
          '# Apne 3 answers yahan likho, phir Run dabao.\nanswers = [None, None, None]\ncorrect = [15, 30, 30]\nfor i in range(3):\n    if answers[i] == correct[i]:\n        print(f"Q{i+1}: sahi hai!")\n    else:\n        print(f"Q{i+1}: abhi sahi answer nahi mila. Sahi answer: {correct[i]}")\n',
        expected: 'Teeno sahi hone par script har sawal ke saamne "sahi hai!" print karega.',
      },
      readMinutes: 10,
    },
    {
      id: 'quant-number-systems',
      subjectId: 'quantitative-aptitude',
      title: {
        hinglish: 'Number systems — divisibility, HCF-LCM aur unit digit',
        english: 'Number Systems — Divisibility, HCF-LCM and Unit Digits',
        hindi: 'संख्या पद्धति — विभाज्यता, HCF-LCM और इकाई अंक',
      },
      summary: {
        hinglish: 'Bina divide kiye kaise pata karein number divide hota hai ya nahi, HCF-LCM ka farak, aur badi powers ka unit digit — exam ke tez sawal.',
        english: 'How to tell if a number divides without dividing, the difference between HCF and LCM, and unit digits of big powers — the fast exam questions.',
        hindi: 'बिना भाग दिए कैसे पता करें संख्या विभाजित होती है या नहीं, HCF और LCM का फ़र्क़, और बड़ी घातों का इकाई अंक — परीक्षा के तेज़ सवाल।',
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
              'Number system ka matlab hai numbers ke rules samajhna — kaun sa number kis se divide hota hai, do numbers ka sabse bada common divisor (HCF) kya hai, aur sabse chhota common multiple (LCM) kya hai. Divisibility rules bina lamba divide kiye jawab dete hain: 2 se divide hone ke liye number even hona chahiye; 3 se divide hone ke liye digits ka jod 3 se divide hona chahiye; 5 se divide hone ke liye last digit 0 ya 5 hona chahiye; 9 se divide hone ke liye digits ka jod 9 se divide hona chahiye; 4 se divide hone ke liye last do digits 4 se divide hone chahiye. HCF matlab highest common factor — do numbers ko divide karne wala sabse bada number. LCM matlab lowest common multiple — dono se divide hone wala sabse chhota number. Jaise 12 aur 18 ka HCF 6 hai aur LCM 36 hai. Ye dono har exam mein aate hain.',
            english:
              'Number system means understanding the rules of numbers — which number divides by what, the highest common factor (HCF) of two numbers, and their lowest common multiple (LCM). Divisibility rules give the answer without long division: a number divides by 2 if it is even; by 3 if the sum of its digits divides by 3; by 5 if the last digit is 0 or 5; by 9 if the sum of its digits divides by 9; by 4 if the last two digits divide by 4. HCF means the highest common factor — the biggest number that divides both numbers. LCM means the lowest common multiple — the smallest number that both numbers divide. For example, the HCF of 12 and 18 is 6 and the LCM is 36. Both appear in every exam.',
            hindi:
              'संख्या पद्धति का मतलब है संख्याओं के नियम समझना — कौन सी संख्या किससे विभाजित होती है, दो संख्याओं का सबसे बड़ा समापवर्तक (HCF) क्या है, और सबसे छोटा समापवर्त्य (LCM) क्या है। विभाज्यता के नियम बिना लंबा भाग दिए उत्तर देते हैं: 2 से विभाजित होने के लिए संख्या सम होनी चाहिए; 3 से विभाजित होने के लिए अंकों का जोड़ 3 से विभाजित होना चाहिए; 5 से विभाजित होने के लिए अंतिम अंक 0 या 5 होना चाहिए; 9 से विभाजित होने के लिए अंकों का जोड़ 9 से विभाजित होना चाहिए; 4 से विभाजित होने के लिए अंतिम दो अंक 4 से विभाजित होने चाहिए। HCF का मतलब है सबसे बड़ा समापवर्तक — दोनों संख्याओं को विभाजित करने वाली सबसे बड़ी संख्या। LCM का मतलब है सबसे छोटा समापवर्त्य — दोनों से विभाजित होने वाली सबसे छोटी संख्या। जैसे 12 और 18 का HCF 6 है और LCM 36 है। ये दोनों हर परीक्षा में आते हैं।',
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
              'Tumhare paas 12 aur 18 size ke do ribbon hain aur tumhe unhe barabar tukdon mein kaatna hai, bina kuch waste kiye. Sabse bada tukda kitna hoga? Ye HCF hai: 12 aur 18 ka HCF 6 hai, to 6 cm ke tukde kaat sakte ho. Ab ulta scene: ek ghanti har 12 minute mein bajti hai aur dusri har 18 minute mein. Dono ek saath kab bajengi? Ye LCM hai: 12 aur 18 ka LCM 36 hai, to dono har 36 minute mein ek saath bajengi. Divisibility ka roz ka use: tumhe check karna hai ki 7,254 number 3 se divide hota hai ya nahi. Digits ka jod = 7 + 2 + 5 + 4 = 18, aur 18, 3 se divide hota hai, to 7,254 bhi 3 se divide hota hai. 18, 9 se bhi divide hota hai, to 7,254, 9 se bhi divide hota hai. Bina divide kiye jawab mil gaya.',
            english:
              'You have two ribbons of 12 and 18 units and you must cut them into equal pieces without wasting anything. What is the biggest piece? That is the HCF: the HCF of 12 and 18 is 6, so you can cut 6 cm pieces. Now the reverse scene: one bell rings every 12 minutes and another every 18 minutes. When do they ring together? That is the LCM: the LCM of 12 and 18 is 36, so they ring together every 36 minutes. Daily use of divisibility: you must check whether 7,254 divides by 3. Sum of digits = 7 + 2 + 5 + 4 = 18, and 18 divides by 3, so 7,254 also divides by 3. Since 18 also divides by 9, 7,254 divides by 9 too. You got the answer without dividing.',
            hindi:
              'तुम्हारे पास 12 और 18 आकार के दो रिबन हैं और तुम्हें उन्हें बराबर टुकड़ों में काटना है, बिना कुछ बर्बाद किए। सबसे बड़ा टुकड़ा कितना होगा? यह HCF है: 12 और 18 का HCF 6 है, तो 6 cm के टुकड़े काट सकते हो। अब उल्टा दृश्य: एक घंटी हर 12 मिनट में बजती है और दूसरी हर 18 मिनट में। दोनों एक साथ कब बजेंगी? यह LCM है: 12 और 18 का LCM 36 है, तो दोनों हर 36 मिनट में एक साथ बजेंगी। विभाज्यता का रोज़ का उपयोग: तुम्हें जाँचना है कि 7,254 संख्या 3 से विभाजित होती है या नहीं। अंकों का जोड़ = 7 + 2 + 5 + 4 = 18, और 18, 3 से विभाजित होता है, तो 7,254 भी 3 से विभाजित होता है। 18, 9 से भी विभाजित होता है, तो 7,254, 9 से भी विभाजित होता है। बिना भाग दिए उत्तर मिल गया।',
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
              'Example 1: kya 7,254, 6 se divide hota hai? Step 1: 6 se divide hone ke liye number ko 2 aur 3 dono se divide hona chahiye. Step 2: 7,254 even hai, to 2 se divide hota hai. Step 3: digits ka jod 18 hai, jo 3 se divide hota hai. Step 4: dono shartein poori hain, to 7,254, 6 se divide hota hai. Example 2: 12 aur 18 ka HCF aur LCM nikalo. Step 1: 12 = 2 × 2 × 3, 18 = 2 × 3 × 3. Step 2: common factors 2 aur 3 hain, to HCF = 2 × 3 = 6. Step 3: LCM ke liye sabse badi power lo: 2² × 3² = 4 × 9 = 36. Example 3: 100 ko 7 se divide karne par remainder kitna hoga? 7 × 14 = 98, to remainder = 100 − 98 = 2. Unit digit ka example: 2 ki power 10 ka unit digit kya hai? 2 ki powers ke unit digit 2, 4, 8, 6 ka cycle banate hain. 10 ko 4 se divide karo: remainder 2, to unit digit cycle ka dusra number, matlab 4 hai.',
            english:
              'Example 1: does 7,254 divide by 6? Step 1: to divide by 6, a number must divide by both 2 and 3. Step 2: 7,254 is even, so it divides by 2. Step 3: the digit sum is 18, which divides by 3. Step 4: both conditions hold, so 7,254 divides by 6. Example 2: find the HCF and LCM of 12 and 18. Step 1: 12 = 2 × 2 × 3, 18 = 2 × 3 × 3. Step 2: the common factors are 2 and 3, so HCF = 2 × 3 = 6. Step 3: for the LCM take the highest powers: 2² × 3² = 4 × 9 = 36. Example 3: what is the remainder when 100 is divided by 7? 7 × 14 = 98, so remainder = 100 − 98 = 2. A unit-digit example: what is the unit digit of 2 to the power 10? The unit digits of powers of 2 cycle through 2, 4, 8, 6. Divide 10 by 4: remainder 2, so the unit digit is the second number in the cycle, which is 4.',
            hindi:
              'उदाहरण 1: क्या 7,254, 6 से विभाजित होता है? चरण 1: 6 से विभाजित होने के लिए संख्या को 2 और 3 दोनों से विभाजित होना चाहिए। चरण 2: 7,254 सम है, तो 2 से विभाजित होता है। चरण 3: अंकों का जोड़ 18 है, जो 3 से विभाजित होता है। चरण 4: दोनों शर्तें पूरी हैं, तो 7,254, 6 से विभाजित होता है। उदाहरण 2: 12 और 18 का HCF और LCM निकालो। चरण 1: 12 = 2 × 2 × 3, 18 = 2 × 3 × 3। चरण 2: उभयनिष्ठ गुणनखंड 2 और 3 हैं, तो HCF = 2 × 3 = 6। चरण 3: LCM के लिए सबसे बड़ी घात लो: 2² × 3² = 4 × 9 = 36। उदाहरण 3: 100 को 7 से भाग देने पर शेषफल कितना होगा? 7 × 14 = 98, तो शेषफल = 100 − 98 = 2। इकाई अंक का उदाहरण: 2 की घात 10 का इकाई अंक क्या है? 2 की घातों के इकाई अंक 2, 4, 8, 6 का चक्र बनाते हैं। 10 को 4 से भाग दो: शेषफल 2, तो इकाई अंक चक्र का दूसरा नंबर, मतलब 4 है।',
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
              'Sabse badi galti hai HCF aur LCM ko ulta kar lena. Yaad rakho: HCF hamesha diye gaye numbers se chhota ya barabar hota hai, LCM hamesha bada ya barabar hota hai. Agar tumhara HCF, number se bada aa raha hai, to hisaab galat hai. Ye galti isliye hoti hai kyunki dono ke naam ek jaise lagte hain. Dusri galti hai 6 se divisibility check karte waqt sirf 3 se check karna — 6 ke liye 2 aur 3 dono chahiye. Jaise 7,253 ke digits ka jod 17 hai, jo 3 se divide nahi hota, lekin agar jod 18 hota aur number odd hota, to bhi 6 se divide nahi hota. Teesri galti hai unit digit wale sawalon mein poori power nikalne ki koshish karna — 2 ki power 10 nikalna aasan hai, lekin 7 ki power 50 nahi. Cycle wala tareeka hamesha use karo: power ko 4 se divide karo, remainder dekho.',
            english:
              'The biggest mistake is swapping HCF and LCM. Remember: HCF is always smaller than or equal to the given numbers, and LCM is always bigger than or equal to them. If your HCF comes out bigger than the numbers, the calculation is wrong. This mistake happens because the two names sound alike. The second mistake is checking only divisibility by 3 when testing for 6 — for 6 you need both 2 and 3. For example, the digit sum of 7,253 is 17, which does not divide by 3; but even if the sum were 18 and the number were odd, it still would not divide by 6. The third mistake is trying to work out the full power in unit-digit questions — 2 to the power 10 is easy, but 7 to the power 50 is not. Always use the cycle method: divide the power by 4 and look at the remainder.',
            hindi:
              'सबसे बड़ी गलती है HCF और LCM को उल्टा कर लेना। याद रखो: HCF हमेशा दी गई संख्याओं से छोटा या बराबर होता है, LCM हमेशा बड़ा या बराबर होता है। अगर तुम्हारा HCF, संख्या से बड़ा आ रहा है, तो हिसाब ग़लत है। यह गलती इसलिए होती है क्योंकि दोनों के नाम एक जैसे लगते हैं। दूसरी गलती है 6 से विभाज्यता जाँचते समय सिर्फ़ 3 से जाँचना — 6 के लिए 2 और 3 दोनों चाहिए। जैसे 7,253 के अंकों का जोड़ 17 है, जो 3 से विभाजित नहीं होता, लेकिन अगर जोड़ 18 होता और संख्या विषम होती, तो भी 6 से विभाजित नहीं होता। तीसरी गलती है इकाई अंक वाले सवालों में पूरी घात निकालने की कोशिश करना — 2 की घात 10 निकालना आसान है, लेकिन 7 की घात 50 नहीं। चक्र वाला तरीका हमेशा उपयोग करो: घात को 4 से भाग दो, शेषफल देखो।',
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
              'Ek shortcut hai: HCF × LCM = dono numbers ka product. Jaise 12 × 18 = 216, aur HCF × LCM = 6 × 36 = 216 — barabar. Agar ek nikalna bhool jao to dusre se nikal sakte ho. Dusra shortcut: 1 se 20 tak ka jod nikalna ho to formula hai n(n + 1)/2. Jaise 1 + 2 + ... + 20 = 20 × 21/2 = 210. Ye formula exam mein baar-baar aata hai. Teesra: 11 se divisibility ke liye alternate digits ka fark 0 ya 11 ka multiple hona chahiye — jaise 132, 1 − 3 + 2 = 0, to 132, 11 se divide hota hai (132/11 = 12). Edge case: 0 ka HCF kisi bhi number ke saath wahi number hota hai, aur 1 ka HCF har number ke saath 1 hota hai. Aur yaad rakho, do consecutive numbers ka HCF hamesha 1 hota hai — jaise 14 aur 15 ka HCF 1 hai.',
            english:
              'One shortcut: HCF × LCM = the product of the two numbers. For example, 12 × 18 = 216, and HCF × LCM = 6 × 36 = 216 — equal. If you forget one, you can find it from the other. A second shortcut: to add 1 to 20, the formula is n(n + 1)/2. So 1 + 2 + ... + 20 = 20 × 21/2 = 210. This formula appears again and again in exams. A third: for divisibility by 11, the difference of alternate digits must be 0 or a multiple of 11 — for example, 1 − 3 + 2 = 0, so 132 divides by 11 (132/11 = 12). Edge case: the HCF of 0 with any number is that number, and the HCF of 1 with any number is 1. And remember, the HCF of two consecutive numbers is always 1 — for example, the HCF of 14 and 15 is 1.',
            hindi:
              'एक आसान तरीका है: HCF × LCM = दोनों संख्याओं का गुणनफल। जैसे 12 × 18 = 216, और HCF × LCM = 6 × 36 = 216 — बराबर। अगर एक निकालना भूल जाओ तो दूसरे से निकाल सकते हो। दूसरा आसान तरीका: 1 से 20 तक का जोड़ निकालना हो तो सूत्र है n(n + 1)/2। जैसे 1 + 2 + ... + 20 = 20 × 21/2 = 210। यह सूत्र परीक्षा में बार-बार आता है। तीसरा: 11 से विभाज्यता के लिए एकांतर अंकों का अंतर 0 या 11 का गुणज होना चाहिए — जैसे 1 − 3 + 2 = 0, तो 132, 11 से विभाजित होता है (132/11 = 12)। ख़ास मामला: 0 का HCF किसी भी संख्या के साथ वही संख्या होता है, और 1 का HCF हर संख्या के साथ 1 होता है। और याद रखो, दो लगातार संख्याओं का HCF हमेशा 1 होता है — जैसे 14 और 15 का HCF 1 है।',
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
              'Soch lo 12 aur 18 ki jagah 12 aur 20 ho jayein. To HCF = 4 hai (12 = 2 × 2 × 3, 20 = 2 × 2 × 5, common 2 × 2 = 4) aur LCM = 60 hai (2² × 3 × 5 = 60). Check: 4 × 60 = 240 = 12 × 20 — sahi. Ab socho 7,254 ki jagah 7,255 ho jaye. Ab number odd hai, to 2 se divide nahi hota, isliye 6 se bhi nahi hoga, chahe digits ka jod 19 ho ya kuch aur. Ek digit badalne se divisibility badal sakti hai — isiliye last digit pehle dekho. Unit digit mein socho: 2 ki power 10 ka unit digit 4 tha; agar power 11 hoti to remainder 3 hota aur unit digit 8 hota. Power mein 1 ka fark bhi unit digit badal deta hai. Exam mein jab bhi number badlo, pehle socho kaun sa rule tootega.',
            english:
              'Suppose instead of 12 and 18 the numbers are 12 and 20. Then HCF = 4 (12 = 2 × 2 × 3, 20 = 2 × 2 × 5, common 2 × 2 = 4) and LCM = 60 (2² × 3 × 5 = 60). Check: 4 × 60 = 240 = 12 × 20 — correct. Now suppose 7,254 becomes 7,255. Now the number is odd, so it does not divide by 2, and therefore not by 6 either, whatever the digit sum is. Changing one digit can change divisibility — that is why you look at the last digit first. In unit digits: the unit digit of 2 to the power 10 was 4; if the power were 11, the remainder would be 3 and the unit digit would be 8. A difference of 1 in the power changes the unit digit. In exams, whenever you change a number, first think about which rule will break.',
            hindi:
              'मान लो 12 और 18 की जगह 12 और 20 हो जाएँ। तो HCF = 4 है (12 = 2 × 2 × 3, 20 = 2 × 2 × 5, उभयनिष्ठ 2 × 2 = 4) और LCM = 60 है (2² × 3 × 5 = 60)। जाँच: 4 × 60 = 240 = 12 × 20 — सही। अब सोचो 7,254 की जगह 7,255 हो जाए। अब संख्या विषम है, तो 2 से विभाजित नहीं होता, इसलिए 6 से भी नहीं होगा, चाहे अंकों का जोड़ 19 हो या कुछ और। एक अंक बदलने से विभाज्यता बदल सकती है — इसलिए अंतिम अंक पहले देखो। इकाई अंक में सोचो: 2 की घात 10 का इकाई अंक 4 था; अगर घात 11 होती तो शेषफल 3 होता और इकाई अंक 8 होता। घात में 1 का फ़र्क़ भी इकाई अंक बदल देता है। परीक्षा में जब भी संख्या बदलो, पहले सोचो कौन सा नियम टूटेगा।',
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
              'Divisibility rules bina divide kiye jawab dete hain: 2 ke liye even, 3 aur 9 ke liye digits ka jod, 5 ke liye last digit 0 ya 5, 6 ke liye 2 aur 3 dono. HCF hamesha numbers se chhota ya barabar, LCM hamesha bada ya barabar hota hai, aur HCF × LCM = product. 1 se n tak ka jod = n(n + 1)/2. Unit digit ke liye power ka cycle yaad rakho: power ko 4 se divide karo, remainder dekho. Aakhir mein check karo: agar HCF, number se bada aa raha hai ya LCM, number se chhota aa raha hai, to hisaab galat hai — phir se lagao.',
            english:
              'Divisibility rules give answers without dividing: even for 2, digit sum for 3 and 9, last digit 0 or 5 for 5, and both 2 and 3 for 6. HCF is always smaller than or equal to the numbers, LCM is always bigger than or equal, and HCF × LCM = product. The sum from 1 to n = n(n + 1)/2. For unit digits, remember the power cycle: divide the power by 4 and look at the remainder. Finally, check: if the HCF comes out bigger than the number, or the LCM smaller than the number, the calculation is wrong — do it again.',
            hindi:
              'विभाज्यता के नियम बिना भाग दिए उत्तर देते हैं: 2 के लिए सम, 3 और 9 के लिए अंकों का जोड़, 5 के लिए अंतिम अंक 0 या 5, 6 के लिए 2 और 3 दोनों। HCF हमेशा संख्याओं से छोटा या बराबर, LCM हमेशा बड़ा या बराबर होता है, और HCF × LCM = गुणनफल। 1 से n तक का जोड़ = n(n + 1)/2। इकाई अंक के लिए घात का चक्र याद रखो: घात को 4 से भाग दो, शेषफल देखो। आख़िर में जाँच करो: अगर HCF, संख्या से बड़ा आ रहा है या LCM, संख्या से छोटा आ रहा है, तो हिसाब ग़लत है — फिर से लगाओ।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Divisibility check ka flow',
          english: 'The flow for a divisibility check',
          hindi: 'विभाज्यता जाँच का प्रवाह',
        },
        nodes: [
          {
            t: {
              hinglish: 'Last digit dekho',
              english: 'Look at the last digit',
              hindi: 'अंतिम अंक देखो',
            },
            s: {
              hinglish: '2 aur 5 ka test',
              english: 'The test for 2 and 5',
              hindi: '2 और 5 की जाँच',
            },
          },
          {
            t: {
              hinglish: 'Digits ka jod karo',
              english: 'Add the digits',
              hindi: 'अंकों का जोड़ करो',
            },
            s: {
              hinglish: '3 aur 9 ka test',
              english: 'The test for 3 and 9',
              hindi: '3 और 9 की जाँच',
            },
          },
          {
            t: {
              hinglish: 'Dono shartein jodo',
              english: 'Combine both conditions',
              hindi: 'दोनों शर्तें जोड़ो',
            },
            s: {
              hinglish: '6 ke liye 2 + 3 chahiye',
              english: 'For 6 you need 2 + 3',
              hindi: '6 के लिए 2 + 3 चाहिए',
            },
          },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'Sabse chhoti sankhya kaun si hai jo 4 aur 6 dono se divide hoti hai?',
            english: 'What is the smallest number that divides by both 4 and 6?',
            hindi: 'सबसे छोटी संख्या कौन सी है जो 4 और 6 दोनों से विभाजित होती है?',
          },
          opts: [
            { hinglish: '10', english: '10', hindi: '10' },
            { hinglish: '12', english: '12', hindi: '12' },
            { hinglish: '18', english: '18', hindi: '18' },
            { hinglish: '24', english: '24', hindi: '24' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Ye LCM hai: 4 = 2 × 2, 6 = 2 × 3, to LCM = 2 × 2 × 3 = 12.',
            english: 'This is the LCM: 4 = 2 × 2, 6 = 2 × 3, so LCM = 2 × 2 × 3 = 12.',
            hindi: 'यह LCM है: 4 = 2 × 2, 6 = 2 × 3, तो LCM = 2 × 2 × 3 = 12।',
          },
        },
        {
          q: {
            hinglish: '1 + 2 + 3 + ... + 20 ka jod kitna hai?',
            english: 'What is the sum 1 + 2 + 3 + ... + 20?',
            hindi: '1 + 2 + 3 + ... + 20 का जोड़ कितना है?',
          },
          opts: [
            { hinglish: '200', english: '200', hindi: '200' },
            { hinglish: '210', english: '210', hindi: '210' },
            { hinglish: '220', english: '220', hindi: '220' },
            { hinglish: '190', english: '190', hindi: '190' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Formula n(n + 1)/2: 20 × 21/2 = 210.',
            english: 'Formula n(n + 1)/2: 20 × 21/2 = 210.',
            hindi: 'सूत्र n(n + 1)/2: 20 × 21/2 = 210।',
          },
        },
        {
          q: {
            hinglish: 'Kya 945, 9 se divide hota hai?',
            english: 'Does 945 divide by 9?',
            hindi: 'क्या 945, 9 से विभाजित होता है?',
          },
          opts: [
            { hinglish: 'Haan, kyunki digits ka jod 18 hai', english: 'Yes, because the digit sum is 18', hindi: 'हाँ, क्योंकि अंकों का जोड़ 18 है' },
            { hinglish: 'Nahi, kyunki last digit 5 hai', english: 'No, because the last digit is 5', hindi: 'नहीं, क्योंकि अंतिम अंक 5 है' },
            { hinglish: 'Haan, kyunki number odd hai', english: 'Yes, because the number is odd', hindi: 'हाँ, क्योंकि संख्या विषम है' },
            { hinglish: 'Nahi, kyunki 9 + 4 + 5 = 17 hai', english: 'No, because 9 + 4 + 5 = 17', hindi: 'नहीं, क्योंकि 9 + 4 + 5 = 17 है' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Digits ka jod = 9 + 4 + 5 = 18, aur 18, 9 se divide hota hai. Isliye 945 bhi 9 se divide hota hai.',
            english: 'Digit sum = 9 + 4 + 5 = 18, and 18 divides by 9. So 945 also divides by 9.',
            hindi: 'अंकों का जोड़ = 9 + 4 + 5 = 18, और 18, 9 से विभाजित होता है। इसलिए 945 भी 9 से विभाजित होता है।',
          },
        },
        {
          q: {
            hinglish: '24 aur 36 ka HCF kitna hai?',
            english: 'What is the HCF of 24 and 36?',
            hindi: '24 और 36 का HCF कितना है?',
          },
          opts: [
            { hinglish: '6', english: '6', hindi: '6' },
            { hinglish: '8', english: '8', hindi: '8' },
            { hinglish: '12', english: '12', hindi: '12' },
            { hinglish: '18', english: '18', hindi: '18' },
          ],
          ans: 2,
          expl: {
            hinglish: '24 = 2 × 2 × 2 × 3, 36 = 2 × 2 × 3 × 3. Common = 2 × 2 × 3 = 12.',
            english: '24 = 2 × 2 × 2 × 3, 36 = 2 × 2 × 3 × 3. Common = 2 × 2 × 3 = 12.',
            hindi: '24 = 2 × 2 × 2 × 3, 36 = 2 × 2 × 3 × 3। उभयनिष्ठ = 2 × 2 × 3 = 12।',
          },
        },
        {
          q: {
            hinglish: '3 ki power 4 ka unit digit kya hai?',
            english: 'What is the unit digit of 3 to the power 4?',
            hindi: '3 की घात 4 का इकाई अंक क्या है?',
          },
          opts: [
            { hinglish: '3', english: '3', hindi: '3' },
            { hinglish: '9', english: '9', hindi: '9' },
            { hinglish: '7', english: '7', hindi: '7' },
            { hinglish: '1', english: '1', hindi: '1' },
          ],
          ans: 3,
          expl: {
            hinglish: '3 ki power 4 = 81, isliye unit digit 1 hai. Cycle se: 3, 9, 7, 1 — chauthe number 1 hai.',
            english: '3 to the power 4 = 81, so the unit digit is 1. By cycle: 3, 9, 7, 1 — the fourth number is 1.',
            hindi: '3 की घात 4 = 81, इसलिए इकाई अंक 1 है। चक्र से: 3, 9, 7, 1 — चौथा नंबर 1 है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Number systems ki practice',
          english: 'Number systems practice',
          hindi: 'संख्या पद्धति का अभ्यास',
        },
        task: {
          hinglish:
            'Neeche wale 3 sawal kagaz par solve karo, phir starter code mein apne answers likh kar Run dabao. Q1: 8 aur 12 ka LCM kitna hai? (Jawab: 24) Q2: 5,832 ke digits ka jod kitna hai? (Jawab: 18 — aur iska matlab hai ki 5,832, 9 se divide hota hai) Q3: 1 + 2 + ... + 50 ka jod kitna hai? (Jawab: 1,275) Method: LCM ke liye prime factors lo; jod ke liye n(n + 1)/2 use karo.',
          english:
            'Solve the 3 questions below on paper, then type your answers in the starter code and press Run. Q1: What is the LCM of 8 and 12? (Answer: 24) Q2: What is the sum of the digits of 5,832? (Answer: 18 — which also means 5,832 divides by 9) Q3: What is the sum 1 + 2 + ... + 50? (Answer: 1,275) Method: for LCM use prime factors; for the sum use n(n + 1)/2.',
          hindi:
            'नीचे वाले 3 सवाल काग़ज़ पर हल करो, फिर स्टार्टर कोड में अपने उत्तर लिखकर Run दबाओ। Q1: 8 और 12 का LCM कितना है? (उत्तर: 24) Q2: 5,832 के अंकों का जोड़ कितना है? (उत्तर: 18 — और इसका मतलब है कि 5,832, 9 से विभाजित होता है) Q3: 1 + 2 + ... + 50 का जोड़ कितना है? (उत्तर: 1,275) तरीका: LCM के लिए अभाज्य गुणनखंड लो; जोड़ के लिए n(n + 1)/2 उपयोग करो।',
        },
        language: 'python',
        starter:
          '# Apne 3 answers yahan likho, phir Run dabao.\nanswers = [None, None, None]\ncorrect = [24, 18, 1275]\nfor i in range(3):\n    if answers[i] == correct[i]:\n        print(f"Q{i+1}: sahi hai!")\n    else:\n        print(f"Q{i+1}: abhi sahi answer nahi mila. Sahi answer: {correct[i]}")\n',
        expected: 'Teeno sahi hone par script har sawal ke saamne "sahi hai!" print karega.',
      },
      readMinutes: 10,
    },
    {
      id: 'quant-time-work',
      subjectId: 'quantitative-aptitude',
      title: {
        hinglish: 'Time & work — ek saath kaam, kitne din mein khatam',
        english: 'Time and Work — Working Together, How Many Days to Finish',
        hindi: 'समय और कार्य — एक साथ काम, कितने दिन में ख़त्म',
      },
      summary: {
        hinglish: 'Ek din ka kaam = 1/din, saath kaam karne par rates judte hain, aur aadmi-din ka hisaab — exam ka sabse scoring topic.',
        english: 'One day work = 1/days, rates add when working together, and the man-days calculation — the most scoring exam topic.',
        hindi: 'एक दिन का काम = 1/दिन, साथ काम करने पर दरें जुड़ती हैं, और आदमी-दिन का हिसाब — परीक्षा का सबसे स्कोरिंग विषय।',
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
              'Time and work ka poora topic ek hi idea par chalta hai: agar ek aadmi poora kaam 10 din mein karta hai, to ek din mein woh kaam ka 1/10 hissa karta hai. Is 1/10 ko uski rate kehte hain. Jab do log saath kaam karte hain, to unki rates jud jati hain. Jaise A kaam 10 din mein karta hai (rate 1/10) aur B 15 din mein karta hai (rate 1/15), to saath mein rate = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6. Matlab saath mein ek din mein kaam ka 1/6 hissa hota hai, to poora kaam 6 din mein khatam hoga. Dusra idea hai aadmi-din ka: agar 5 workers 8 din mein kaam karte hain, to kul kaam = 5 × 8 = 40 worker-days. Ab 8 workers hon to time = 40/8 = 5 din. Kaam fixed rehta hai, aadmi badhne se time kam hota hai. Ye dono ideas mil kar har time-work sawal solve kar dete hain.',
            english:
              'The whole topic of time and work runs on one idea: if a person finishes a job in 10 days, then in one day he does 1/10 of the job. This 1/10 is called his rate. When two people work together, their rates add up. For example, A does the job in 10 days (rate 1/10) and B in 15 days (rate 1/15), so together the rate = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6. That means together they do 1/6 of the job in one day, so the whole job finishes in 6 days. The second idea is man-days: if 5 workers do the job in 8 days, total work = 5 × 8 = 40 worker-days. With 8 workers, time = 40/8 = 5 days. The work stays fixed; more people means less time. These two ideas together solve every time-and-work question.',
            hindi:
              'समय और कार्य का पूरा विषय एक ही विचार पर चलता है: अगर एक आदमी पूरा काम 10 दिन में करता है, तो एक दिन में वह काम का 1/10 हिस्सा करता है। इस 1/10 को उसकी दर कहते हैं। जब दो लोग साथ काम करते हैं, तो उनकी दरें जुड़ जाती हैं। जैसे A काम 10 दिन में करता है (दर 1/10) और B 15 दिन में करता है (दर 1/15), तो साथ में दर = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6। मतलब साथ में एक दिन में काम का 1/6 हिस्सा होता है, तो पूरा काम 6 दिन में ख़त्म होगा। दूसरा विचार है आदमी-दिन का: अगर 5 मज़दूर 8 दिन में काम करते हैं, तो कुल काम = 5 × 8 = 40 worker-days। अब 8 मज़दूर हों तो समय = 40/8 = 5 दिन। काम निश्चित रहता है, आदमी बढ़ने से समय कम होता है। ये दोनों विचार मिलकर हर समय-कार्य सवाल हल कर देते हैं।',
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
              'Tumhare ghar mein ek kamra paint karna hai. Ramesh akele 10 din mein karta hai, Suresh akele 15 din mein karta hai. Dono saath lag jayein to kitne din lagenge? Ramesh ki rate 1/10, Suresh ki 1/15. Saath rate = 1/10 + 1/15 = 1/6, to kaam 6 din mein khatam. Ab mazaak wali baat: dono ko alag-alag 10 aur 15 din lagte hain, saath mein 6 din — 5 din nahi, kyunki rates judti hain, din nahi. Dusra scene: 5 mazdoor ek deewaar 8 din mein banate hain. Agar 8 mazdoor lag jayein to time = 5 × 8/8 = 5 din. Kul kaam 40 mazdoor-din hai, jo badalta nahi. Teesra scene: ek tank ko ek pipe 6 ghante mein bharta hai aur ek leak use 12 ghante mein khaali karta hai. Dono saath hon to net rate = 1/6 − 1/12 = 1/12, to tank 12 ghante mein bharega.',
            english:
              'A room in your house needs painting. Ramesh alone takes 10 days, Suresh alone takes 15 days. If both work together, how many days will it take? Ramesh rate is 1/10, Suresh is 1/15. Together the rate = 1/10 + 1/15 = 1/6, so the job finishes in 6 days. Now the funny part: alone they take 10 and 15 days, together 6 days — not 5, because rates add, not days. Second scene: 5 workers build a wall in 8 days. With 8 workers, time = 5 × 8/8 = 5 days. Total work is 40 worker-days, which never changes. Third scene: one pipe fills a tank in 6 hours and a leak empties it in 12 hours. Together the net rate = 1/6 − 1/12 = 1/12, so the tank fills in 12 hours.',
            hindi:
              'तुम्हारे घर में एक कमरा पेंट करना है। रमेश अकेले 10 दिन में करता है, सुरेश अकेले 15 दिन में करता है। दोनों साथ लग जाएँ तो कितने दिन लगेंगे? रमेश की दर 1/10, सुरेश की 1/15। साथ दर = 1/10 + 1/15 = 1/6, तो काम 6 दिन में ख़त्म। अब मज़ेदार बात: दोनों को अलग-अलग 10 और 15 दिन लगते हैं, साथ में 6 दिन — 5 दिन नहीं, क्योंकि दरें जुड़ती हैं, दिन नहीं। दूसरा दृश्य: 5 मज़दूर एक दीवार 8 दिन में बनाते हैं। अगर 8 मज़दूर लग जाएँ तो समय = 5 × 8/8 = 5 दिन। कुल काम 40 मज़दूर-दिन है, जो बदलता नहीं। तीसरा दृश्य: एक पाइप टंकी को 6 घंटे में भरता है और एक रिसाव उसे 12 घंटे में ख़ाली करता है। दोनों साथ हों तो शुद्ध दर = 1/6 − 1/12 = 1/12, तो टंकी 12 घंटे में भरेगी।',
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
              'Example 1: A kaam 10 din mein, B 15 din mein karta hai. Saath mein kitne din? Step 1: A ki rate = 1/10, B ki rate = 1/15. Step 2: saath rate = 1/10 + 1/15 = 5/30 = 1/6. Step 3: time = 1/(1/6) = 6 din. Example 2: A aur B saath kaam 12 din mein karte hain, A akele 20 din mein karta hai. B akele kitne din mein karega? Step 1: saath rate = 1/12, A ki rate = 1/20. Step 2: B ki rate = 1/12 − 1/20 = 5/60 − 3/60 = 2/60 = 1/30. Step 3: B akele 30 din mein karega. Example 3: 5 workers 8 din mein kaam karte hain. 8 workers kitne din mein karenge? Step 1: kul kaam = 5 × 8 = 40 worker-days. Step 2: time = 40/8 = 5 din. Ye teeno patterns — saath kaam, ek ko nikalna, aur mazdoor badalna — exam ke 90 percent sawal cover karte hain.',
            english:
              'Example 1: A does a job in 10 days, B in 15 days. Together, how many days? Step 1: A rate = 1/10, B rate = 1/15. Step 2: together rate = 1/10 + 1/15 = 5/30 = 1/6. Step 3: time = 1/(1/6) = 6 days. Example 2: A and B together do a job in 12 days; A alone does it in 20 days. In how many days will B alone do it? Step 1: together rate = 1/12, A rate = 1/20. Step 2: B rate = 1/12 − 1/20 = 5/60 − 3/60 = 2/60 = 1/30. Step 3: B alone takes 30 days. Example 3: 5 workers do a job in 8 days. In how many days will 8 workers do it? Step 1: total work = 5 × 8 = 40 worker-days. Step 2: time = 40/8 = 5 days. These three patterns — working together, finding one worker, and changing the number of workers — cover 90 percent of exam questions.',
            hindi:
              'उदाहरण 1: A काम 10 दिन में, B 15 दिन में करता है। साथ में कितने दिन? चरण 1: A की दर = 1/10, B की दर = 1/15। चरण 2: साथ दर = 1/10 + 1/15 = 5/30 = 1/6। चरण 3: समय = 1/(1/6) = 6 दिन। उदाहरण 2: A और B साथ काम 12 दिन में करते हैं, A अकेले 20 दिन में करता है। B अकेले कितने दिन में करेगा? चरण 1: साथ दर = 1/12, A की दर = 1/20। चरण 2: B की दर = 1/12 − 1/20 = 5/60 − 3/60 = 2/60 = 1/30। चरण 3: B अकेले 30 दिन में करेगा। उदाहरण 3: 5 मज़दूर 8 दिन में काम करते हैं। 8 मज़दूर कितने दिन में करेंगे? चरण 1: कुल काम = 5 × 8 = 40 worker-days। चरण 2: समय = 40/8 = 5 दिन। ये तीन पैटर्न — साथ काम, एक को निकालना, और मज़दूर बदलना — परीक्षा के 90 प्रतिशत सवाल कवर करते हैं।',
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
              'Sabse badi galti hai dinon ko seedha jod ya ghata dena. A 10 din mein karta hai, B 15 din mein — log saath ka time (10 + 15)/2 = 12.5 ya 10 − 15 jaisa kuch likh dete hain. Sahi tareeka hai rates jodna, din nahi. Ye galti isliye hoti hai kyunki dimaag dinon ko hi jodne ki koshish karta hai, jabki judne wali cheez rate hai. Dusri galti hai B nikalte waqt galat ghata: saath rate 1/12 aur A ki rate 1/20 ho to B ki rate = 1/12 − 1/20 = 1/30 hoti hai, 1/8 nahi. Log dinon ko ghata dete hain (20 − 12 = 8) aur galat jawab likh dete hain. Teesri galti hai pipe aur leak wale sawalon mein sign bhoolna: leak kaam ko kam karta hai, isliye uski rate minus hoti hai. Agar leak ki rate bharne wale se zyada ho to tank kabhi nahi bharega — net rate negative ho jayegi.',
            english:
              'The biggest mistake is adding or subtracting the days directly. A takes 10 days, B takes 15 days — people write the together-time as (10 + 15)/2 = 12.5 or something like 10 − 15. The right way is to add the rates, not the days. This mistake happens because the mind tries to add the days, while the thing that adds is the rate. The second mistake is subtracting wrongly when finding B: with together rate 1/12 and A rate 1/20, B rate = 1/12 − 1/20 = 1/30, not 1/8. People subtract the days (20 − 12 = 8) and write the wrong answer. The third mistake is forgetting the sign in pipe-and-leak questions: the leak reduces the work, so its rate is minus. If the leak rate is bigger than the filling rate, the tank will never fill — the net rate becomes negative.',
            hindi:
              'सबसे बड़ी गलती है दिनों को सीधा जोड़ या घटा देना। A 10 दिन में करता है, B 15 दिन में — लोग साथ का समय (10 + 15)/2 = 12.5 या 10 − 15 जैसा कुछ लिख देते हैं। सही तरीका है दरें जोड़ना, दिन नहीं। यह गलती इसलिए होती है क्योंकि दिमाग़ दिनों को ही जोड़ने की कोशिश करता है, जबकि जुड़ने वाली चीज़ दर है। दूसरी गलती है B निकालते समय ग़लत घटा: साथ दर 1/12 और A की दर 1/20 हो तो B की दर = 1/12 − 1/20 = 1/30 होती है, 1/8 नहीं। लोग दिनों को घटा देते हैं (20 − 12 = 8) और ग़लत उत्तर लिख देते हैं। तीसरी गलती है पाइप और रिसाव वाले सवालों में चिह्न भूलना: रिसाव काम को कम करता है, इसलिए उसकी दर ऋणात्मक होती है। अगर रिसाव की दर भरने वाले से ज़्यादा हो तो टंकी कभी नहीं भरेगी — शुद्ध दर ऋणात्मक हो जाएगी।',
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
              'Ek shortcut hai saath kaam ka: A x din mein aur B y din mein kaam karein to saath time = xy/(x + y). Jaise A 6 din, B 12 din: saath time = 6 × 12/(6 + 12) = 72/18 = 4 din. Ye formula rates jodne ka hi shortcut hai. Dusra shortcut hai efficiency ka: agar A, B se double tez hai aur B 12 din mein kaam karta hai, to A 6 din mein karega. Saath rate = 1/6 + 1/12 = 3/12 = 1/4, to saath time 4 din. Teesra: agar koi aadmi beech mein chhod kar chala jaye to pehle uske kaam ke din gin lo, phir bacha hua kaam dusre se karwao. Jaise A aur B saath 12 din mein kaam karte hain, lekin A 4 din baad chhod deta hai — to 4 din mein 4/12 = 1/3 kaam hua, bacha 2/3 kaam B akela karega. Edge case: agar dono ki rate barabar ho to saath time aadha ho jata hai — 8 din wala kaam 4 din mein.',
            english:
              'One shortcut for working together: if A takes x days and B takes y days, together time = xy/(x + y). For example, A 6 days, B 12 days: together time = 6 × 12/(6 + 12) = 72/18 = 4 days. This formula is just a shortcut for adding rates. A second shortcut is efficiency: if A is twice as fast as B and B takes 12 days, A takes 6 days. Together rate = 1/6 + 1/12 = 3/12 = 1/4, so together time is 4 days. A third: if someone leaves midway, first count the days he worked, then let the other finish the rest. For example, A and B together take 12 days, but A leaves after 4 days — in 4 days 4/12 = 1/3 of the work is done, and B alone does the remaining 2/3. Edge case: if both rates are equal, the together time is halved — an 8-day job finishes in 4 days.',
            hindi:
              'एक आसान तरीका है साथ काम का: A x दिन में और B y दिन में काम करें तो साथ समय = xy/(x + y)। जैसे A 6 दिन, B 12 दिन: साथ समय = 6 × 12/(6 + 12) = 72/18 = 4 दिन। यह सूत्र दरें जोड़ने का ही आसान तरीका है। दूसरा आसान तरीका है दक्षता का: अगर A, B से दोगुना तेज़ है और B 12 दिन में काम करता है, तो A 6 दिन में करेगा। साथ दर = 1/6 + 1/12 = 3/12 = 1/4, तो साथ समय 4 दिन। तीसरा: अगर कोई आदमी बीच में छोड़कर चला जाए तो पहले उसके काम के दिन गिन लो, फिर बचा हुआ काम दूसरे से करवाओ। जैसे A और B साथ 12 दिन में काम करते हैं, लेकिन A 4 दिन बाद छोड़ देता है — तो 4 दिन में 4/12 = 1/3 काम हुआ, बचा 2/3 काम B अकेला करेगा। ख़ास मामला: अगर दोनों की दर बराबर हो तो साथ समय आधा हो जाता है — 8 दिन वाला काम 4 दिन में।',
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
              'Soch lo A 10 din ki jagah 5 din mein kaam karne lage, B wahi 15 din mein kare. To saath rate = 1/5 + 1/15 = 3/15 + 1/15 = 4/15, time = 15/4 = 3.75 din. Matlab A ki speed double karne se saath time 6 se 3.75 ho gaya — aadha nahi hua, kyunki B ab bhi slow hai. Ab socho workers badal do: 5 workers ki jagah 10 workers lag jayein to time = 40/10 = 4 din. Workers double karne se time aadha ho gaya — kyunki yahan kaam seedha workers par depend karta hai. Lekin saath kaam wale case mein ek worker ki speed badhane se time aadha nahi hota. Ye farak samajhna zaroori hai: aadmi-din wale sawalon mein aadmi aur time ulta proportional hain, lekin rate wale sawalon mein dono ki rates judti hain.',
            english:
              'Suppose A starts finishing the job in 5 days instead of 10, while B still takes 15 days. Then together rate = 1/5 + 1/15 = 3/15 + 1/15 = 4/15, time = 15/4 = 3.75 days. So doubling A speed cut the together time from 6 to 3.75 — not half, because B is still slow. Now change the workers: with 10 workers instead of 5, time = 40/10 = 4 days. Doubling the workers halved the time — because here the work depends directly on workers. But in the together-work case, speeding up one worker does not halve the time. Understanding this difference matters: in man-days questions, people and time are inversely proportional, but in rate questions, the two rates add.',
            hindi:
              'मान लो A 10 दिन की जगह 5 दिन में काम करने लगे, B वही 15 दिन में करे। तो साथ दर = 1/5 + 1/15 = 3/15 + 1/15 = 4/15, समय = 15/4 = 3.75 दिन। मतलब A की गति दोगुनी करने से साथ समय 6 से 3.75 हो गया — आधा नहीं हुआ, क्योंकि B अब भी धीमा है। अब सोचो मज़दूर बदल दो: 5 मज़दूरों की जगह 10 मज़दूर लग जाएँ तो समय = 40/10 = 4 दिन। मज़दूर दोगुने करने से समय आधा हो गया — क्योंकि यहाँ काम सीधा मज़दूरों पर निर्भर करता है। लेकिन साथ काम वाले मामले में एक मज़दूर की गति बढ़ाने से समय आधा नहीं होता। यह फ़र्क़ समझना ज़रूरी है: आदमी-दिन वाले सवालों में आदमी और समय व्युत्क्रमानुपाती हैं, लेकिन दर वाले सवालों में दोनों की दरें जुड़ती हैं।',
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
              'Ek din ka kaam = 1/kul din — yahi rate hai. Saath kaam karne par rates judti hain, aur time = 1/saath rate hota hai. Shortcut: saath time = xy/(x + y). Ek worker nikalna ho to rates ghatao: B ki rate = saath rate − A ki rate. Mazdoor badalne par kul kaam (aadmi × din) fixed rehta hai. Pipe bharta hai to rate plus, leak khaali karta hai to rate minus. Aakhir mein check karo: saath kaam ka time hamesha sabse tez worker ke time se kam hota hai — agar zyada aa raha hai to hisaab galat hai.',
            english:
              'One day work = 1/total days — that is the rate. Working together, rates add, and time = 1/together rate. Shortcut: together time = xy/(x + y). To find one worker, subtract rates: B rate = together rate − A rate. When workers change, total work (people × days) stays fixed. A pipe filling adds its rate; a leak emptying subtracts its rate. Finally, check: the together time is always less than the fastest worker time — if it comes out more, the calculation is wrong.',
            hindi:
              'एक दिन का काम = 1/कुल दिन — यही दर है। साथ काम करने पर दरें जुड़ती हैं, और समय = 1/साथ दर होता है। आसान तरीका: साथ समय = xy/(x + y)। एक मज़दूर निकालना हो तो दरें घटाओ: B की दर = साथ दर − A की दर। मज़दूर बदलने पर कुल काम (आदमी × दिन) निश्चित रहता है। पाइप भरता है तो दर जमा, रिसाव ख़ाली करता है तो दर घटा। आख़िर में जाँच करो: साथ काम का समय हमेशा सबसे तेज़ मज़दूर के समय से कम होता है — अगर ज़्यादा आ रहा है तो हिसाब ग़लत है।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Time-work ka flow',
          english: 'The time-work flow',
          hindi: 'समय-कार्य का प्रवाह',
        },
        nodes: [
          {
            t: {
              hinglish: 'Rate nikalo',
              english: 'Find the rate',
              hindi: 'दर निकालो',
            },
            s: {
              hinglish: '1 din ka kaam = 1/din',
              english: '1 day work = 1/days',
              hindi: '1 दिन का काम = 1/दिन',
            },
          },
          {
            t: {
              hinglish: 'Rates jodo ya ghatao',
              english: 'Add or subtract rates',
              hindi: 'दरें जोड़ो या घटाओ',
            },
            s: {
              hinglish: 'Saath = jodo, ek = ghatao',
              english: 'Together = add, one = subtract',
              hindi: 'साथ = जोड़ो, एक = घटाओ',
            },
          },
          {
            t: {
              hinglish: 'Time nikalo',
              english: 'Find the time',
              hindi: 'समय निकालो',
            },
            s: {
              hinglish: 'Time = 1/rate',
              english: 'Time = 1/rate',
              hindi: 'समय = 1/दर',
            },
          },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'A kaam 6 din mein karta hai, B 12 din mein karta hai. Dono saath kitne din mein karenge?',
            english: 'A does a job in 6 days, B in 12 days. In how many days will they do it together?',
            hindi: 'A काम 6 दिन में करता है, B 12 दिन में करता है। दोनों साथ कितने दिन में करेंगे?',
          },
          opts: [
            { hinglish: '3 din', english: '3 days', hindi: '3 दिन' },
            { hinglish: '4 din', english: '4 days', hindi: '4 दिन' },
            { hinglish: '5 din', english: '5 days', hindi: '5 दिन' },
            { hinglish: '6 din', english: '6 days', hindi: '6 दिन' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Saath rate = 1/6 + 1/12 = 3/12 = 1/4. Time = 4 din. Shortcut: 6 × 12/(6 + 12) = 72/18 = 4.',
            english: 'Together rate = 1/6 + 1/12 = 3/12 = 1/4. Time = 4 days. Shortcut: 6 × 12/(6 + 12) = 72/18 = 4.',
            hindi: 'साथ दर = 1/6 + 1/12 = 3/12 = 1/4। समय = 4 दिन। आसान तरीका: 6 × 12/(6 + 12) = 72/18 = 4।',
          },
        },
        {
          q: {
            hinglish: '12 aadmi ek kaam 10 din mein karte hain. 15 aadmi use kitne din mein karenge?',
            english: '12 men do a job in 10 days. In how many days will 15 men do it?',
            hindi: '12 आदमी एक काम 10 दिन में करते हैं। 15 आदमी उसे कितने दिन में करेंगे?',
          },
          opts: [
            { hinglish: '6 din', english: '6 days', hindi: '6 दिन' },
            { hinglish: '7 din', english: '7 days', hindi: '7 दिन' },
            { hinglish: '8 din', english: '8 days', hindi: '8 दिन' },
            { hinglish: '9 din', english: '9 days', hindi: '9 दिन' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Kul kaam = 12 × 10 = 120 aadmi-din. Time = 120/15 = 8 din.',
            english: 'Total work = 12 × 10 = 120 man-days. Time = 120/15 = 8 days.',
            hindi: 'कुल काम = 12 × 10 = 120 आदमी-दिन। समय = 120/15 = 8 दिन।',
          },
        },
        {
          q: {
            hinglish: 'A aur B saath kaam 8 din mein karte hain. B akele 24 din mein karta hai. A akele kitne din mein karega?',
            english: 'A and B together do a job in 8 days. B alone does it in 24 days. In how many days will A alone do it?',
            hindi: 'A और B साथ काम 8 दिन में करते हैं। B अकेले 24 दिन में करता है। A अकेले कितने दिन में करेगा?',
          },
          opts: [
            { hinglish: '10 din', english: '10 days', hindi: '10 दिन' },
            { hinglish: '12 din', english: '12 days', hindi: '12 दिन' },
            { hinglish: '16 din', english: '16 days', hindi: '16 दिन' },
            { hinglish: '18 din', english: '18 days', hindi: '18 दिन' },
          ],
          ans: 1,
          expl: {
            hinglish: 'A ki rate = 1/8 − 1/24 = 3/24 − 1/24 = 2/24 = 1/12. A akele 12 din mein karega.',
            english: 'A rate = 1/8 − 1/24 = 3/24 − 1/24 = 2/24 = 1/12. A alone takes 12 days.',
            hindi: 'A की दर = 1/8 − 1/24 = 3/24 − 1/24 = 2/24 = 1/12। A अकेले 12 दिन में करेगा।',
          },
        },
        {
          q: {
            hinglish: 'Ek pipe tank ko 6 ghante mein bharta hai aur ek leak use 12 ghante mein khaali karta hai. Dono saath khule hon to tank kitne ghante mein bharega?',
            english: 'A pipe fills a tank in 6 hours and a leak empties it in 12 hours. With both open, in how many hours will the tank fill?',
            hindi: 'एक पाइप टंकी को 6 घंटे में भरता है और एक रिसाव उसे 12 घंटे में ख़ाली करता है। दोनों साथ खुले हों तो टंकी कितने घंटे में भरेगी?',
          },
          opts: [
            { hinglish: '6 ghante', english: '6 hours', hindi: '6 घंटे' },
            { hinglish: '9 ghante', english: '9 hours', hindi: '9 घंटे' },
            { hinglish: '12 ghante', english: '12 hours', hindi: '12 घंटे' },
            { hinglish: '18 ghante', english: '18 hours', hindi: '18 घंटे' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Net rate = 1/6 − 1/12 = 2/12 − 1/12 = 1/12. Time = 12 ghante.',
            english: 'Net rate = 1/6 − 1/12 = 2/12 − 1/12 = 1/12. Time = 12 hours.',
            hindi: 'शुद्ध दर = 1/6 − 1/12 = 2/12 − 1/12 = 1/12। समय = 12 घंटे।',
          },
        },
        {
          q: {
            hinglish: 'A, B se double tez hai. B kaam 12 din mein karta hai. Dono saath kitne din mein karenge?',
            english: 'A is twice as fast as B. B does a job in 12 days. In how many days will they do it together?',
            hindi: 'A, B से दोगुना तेज़ है। B काम 12 दिन में करता है। दोनों साथ कितने दिन में करेंगे?',
          },
          opts: [
            { hinglish: '3 din', english: '3 days', hindi: '3 दिन' },
            { hinglish: '4 din', english: '4 days', hindi: '4 दिन' },
            { hinglish: '6 din', english: '6 days', hindi: '6 दिन' },
            { hinglish: '8 din', english: '8 days', hindi: '8 दिन' },
          ],
          ans: 1,
          expl: {
            hinglish: 'A 6 din mein karega (12/2). Saath rate = 1/6 + 1/12 = 1/4. Time = 4 din.',
            english: 'A takes 6 days (12/2). Together rate = 1/6 + 1/12 = 1/4. Time = 4 days.',
            hindi: 'A 6 दिन में करेगा (12/2)। साथ दर = 1/6 + 1/12 = 1/4। समय = 4 दिन।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Time-work ki practice',
          english: 'Time-work practice',
          hindi: 'समय-कार्य का अभ्यास',
        },
        task: {
          hinglish:
            'Neeche wale 3 sawal kagaz par solve karo, phir starter code mein apne answers likh kar Run dabao. Q1: A kaam 8 din mein karta hai, B bhi 8 din mein karta hai. Dono saath kitne din mein karenge? (Jawab: 4 din) Q2: 10 workers ek kaam 6 din mein karte hain. 12 workers kitne din mein karenge? (Jawab: 5 din) Q3: A aur B saath kaam 10 din mein karte hain, A akele 15 din mein karta hai. B akele kitne din mein karega? (Jawab: 30 din) Method: rate = 1/din; saath kaam mein rates jodo; aadmi badalne par kul kaam (aadmi × din) fixed rakho.',
          english:
            'Solve the 3 questions below on paper, then type your answers in the starter code and press Run. Q1: A does a job in 8 days, B also in 8 days. In how many days will they do it together? (Answer: 4 days) Q2: 10 workers do a job in 6 days. In how many days will 12 workers do it? (Answer: 5 days) Q3: A and B together do a job in 10 days; A alone does it in 15 days. In how many days will B alone do it? (Answer: 30 days) Method: rate = 1/days; add rates for together work; when workers change, keep total work (people × days) fixed.',
          hindi:
            'नीचे वाले 3 सवाल काग़ज़ पर हल करो, फिर स्टार्टर कोड में अपने उत्तर लिखकर Run दबाओ। Q1: A काम 8 दिन में करता है, B भी 8 दिन में करता है। दोनों साथ कितने दिन में करेंगे? (उत्तर: 4 दिन) Q2: 10 मज़दूर एक काम 6 दिन में करते हैं। 12 मज़दूर कितने दिन में करेंगे? (उत्तर: 5 दिन) Q3: A और B साथ काम 10 दिन में करते हैं, A अकेले 15 दिन में करता है। B अकेले कितने दिन में करेगा? (उत्तर: 30 दिन) तरीका: दर = 1/दिन; साथ काम में दरें जोड़ो; आदमी बदलने पर कुल काम (आदमी × दिन) निश्चित रखो।',
        },
        language: 'python',
        starter:
          '# Apne 3 answers yahan likho, phir Run dabao.\nanswers = [None, None, None]\ncorrect = [4, 5, 30]\nfor i in range(3):\n    if answers[i] == correct[i]:\n        print(f"Q{i+1}: sahi hai!")\n    else:\n        print(f"Q{i+1}: abhi sahi answer nahi mila. Sahi answer: {correct[i]}")\n',
        expected: 'Teeno sahi hone par script har sawal ke saamne "sahi hai!" print karega.',
      },
      readMinutes: 10,
    },
  ],
};
