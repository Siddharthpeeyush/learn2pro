// Learn2Pro v2 — Verbal Ability / English (aptitude).
// All content written by AI in our own style. Facts only from reference
// sites; every passage, question, example and explanation is invented here.
import type { Subject, LText, ArticleSection } from '../lib/types';

const H_WHAT: LText = {
  hinglish: 'Ye kya hai',
  english: 'What it is',
  hindi: 'यह क्या है',
};
const H_REAL: LText = {
  hinglish: 'Real-life example',
  english: 'Real-life example',
  hindi: 'वास्तविक जीवन का उदाहरण',
};
const H_STEPS: LText = {
  hinglish: 'Step-by-step, worked example ke saath',
  english: 'Step-by-step with a worked example',
  hindi: 'चरण-दर-चरण, हल किए गए उदाहरण के साथ',
};
const H_MISTAKES: LText = {
  hinglish: 'Common mistakes — aur ye kyun hote hain',
  english: 'Common mistakes — and why they happen',
  hindi: 'आम गलतियाँ — और वे क्यों होती हैं',
};
const H_EDGE: LText = {
  hinglish: 'Edge cases',
  english: 'Edge cases',
  hindi: 'विशेष स्थितियाँ',
};
const H_CHANGE: LText = {
  hinglish: 'Agar ye badal diya to kya hoga?',
  english: 'What if you change this?',
  hindi: 'अगर यह बदल दिया तो क्या होगा?',
};
const H_SUMMARY: LText = {
  hinglish: 'Summary',
  english: 'Summary',
  hindi: 'सारांश',
};

function s(heading: LText, hinglish: string, english: string, hindi: string): ArticleSection {
  return { heading, body: { hinglish, english, hindi } };
}

export const verbalAbility: Subject = {
  id: 'verbal-ability',
  name: {
    hinglish: 'Verbal Ability / English',
    english: 'Verbal Ability / English',
    hindi: 'वर्बल एबिलिटी / अंग्रेज़ी',
  },
  tagline: {
    hinglish: 'Passage, grammar, words aur sentence — English section me full marks laane ka tareeka.',
    english: 'Passages, grammar, words and sentences — how to score full marks in the English section.',
    hindi: 'पैसेज, व्याकरण, शब्द और वाक्य — अंग्रेज़ी सेक्शन में पूरे अंक लाने का तरीका।',
  },
  icon: '📖',
  color: '#eab308',
  category: 'aptitude',
  articles: [
    {
      id: 'verbal-comprehension',
      subjectId: 'verbal-ability',
      title: {
        hinglish: 'Reading comprehension — passage ko marks ke liye kaise padhein',
        english: 'Reading comprehension — how to read a passage for marks',
        hindi: 'रीडिंग कॉम्प्रिहेंशन — अंक के लिए पैसेज कैसे पढ़ें',
      },
      summary: {
        hinglish: 'Passage ko do baar padhne ki zaroorat nahi. Pehle sawaal padho, phir passage ko ek plan ke saath padho, aur har answer ko passage ki line se prove karo.',
        english: 'You do not need to read a passage twice. Read the questions first, read the passage with a plan, and prove every answer with a line from the passage.',
        hindi: 'पैसेज को दो बार पढ़ने की ज़रूरत नहीं है। पहले सवाल पढ़ें, फिर योजना के साथ पैसेज पढ़ें, और हर उत्तर को पैसेज की पंक्ति से साबित करें।',
      },
      sections: [
        s(
          H_WHAT,
          "Reading comprehension (RC) ka matlab hai: ek chhota passage diya jata hai, uske neeche 4-5 sawaal hote hain, aur tumhe passage ke andar se hi unke jawab dhoondhne hote hain. Jawab tumhari general knowledge se nahi, passage se aana chahiye. Exam me RC sabse zyada marks wala hissa hota hai, kyunki ek passage se 5 sawaal judte hain — ek passage samajh lo to 5 marks pakke. Teen tarah ke sawaal aate hain. Pehla, direct sawaal: jawab passage me seedha likha hota hai, jaise 'library kab khuli?' Doosra, inference sawaal: jawab seedha nahi likha, lekin passage ki lines se nikaala ja sakta hai, jaise 'lekhak ko kya lagta hai?' Teesra, vocabulary sawaal: passage ke ek shabd ka matlab poocha jata hai, aur matlab usi sentence ke aas-paas se samajhna hota hai. RC me speed nahi, accuracy jeet ti hai. Jo student passage ko samajh kar padhta hai, woh 5 me se 4-5 sahi karta hai; jo sirf jaldi padhta hai, woh 2-3 par atak jata hai.",
          "Reading comprehension (RC) means this: you are given a short passage, and below it there are 4 to 5 questions, and you must find their answers inside the passage itself. The answer should come from the passage, not from your general knowledge. In exams, RC is the highest-marks part, because one passage carries 5 questions — understand one passage and 5 marks are secure. Three kinds of questions appear. First, direct questions: the answer is written plainly in the passage, like 'when did the library open?' Second, inference questions: the answer is not written plainly, but it can be drawn from the lines of the passage, like 'what does the writer think?' Third, vocabulary questions: the meaning of a word from the passage is asked, and the meaning must be understood from the words around that sentence. In RC, accuracy wins, not speed. A student who reads to understand gets 4 or 5 out of 5 right; a student who only reads fast gets stuck at 2 or 3.",
          "रीडिंग कॉम्प्रिहेंशन (RC) का अर्थ है: एक छोटा पैसेज दिया जाता है, उसके नीचे 4-5 सवाल होते हैं, और उनके उत्तर पैसेज के अंदर से ही खोजने होते हैं। उत्तर सामान्य ज्ञान से नहीं, पैसेज से आना चाहिए। परीक्षा में RC सबसे ज़्यादा अंक वाला हिस्सा होता है, क्योंकि एक पैसेज से 5 सवाल जुड़ते हैं — एक पैसेज समझ लो तो 5 अंक पक्के। तीन तरह के सवाल आते हैं। पहला, सीधा सवाल: उत्तर पैसेज में साफ़ लिखा होता है, जैसे 'पुस्तकालय कब खुला?' दूसरा, अनुमान वाला सवाल: उत्तर सीधे नहीं लिखा, लेकिन पैसेज की पंक्तियों से निकाला जा सकता है, जैसे 'लेखक को क्या लगता है?' तीसरा, शब्दार्थ वाला सवाल: पैसेज के एक शब्द का अर्थ पूछा जाता है, और अर्थ उसी वाक्य के आस-पास से समझना होता है। RC में गति नहीं, सटीकता जीतती है। जो छात्र समझकर पढ़ता है, वह 5 में से 4-5 सही करता है; जो सिर्फ़ जल्दी पढ़ता है, वह 2-3 पर अटक जाता है।",
        ),
        s(
          H_REAL,
          "Socho tum railway station par ho aur train 20 minute late hai. Board par ek notice laga hai: 'Train number 12801, platform 4 se 6:40 par chalegi. Yatri kripya apna saman sambhalein. Canteen platform 2 par hai.' Ab koi tumse pooche: train kab chalegi? Tum notice me dhoondh kar bologe: 6:40 par. Koi pooche: canteen kahan hai? Tum bologe: platform 2 par. Tumne yahi RC kiya — ek text padha, sawaal samjha, aur text ke andar se jawab nikala. Tumne apni marzi se jawab nahi banaya; tumne notice me jo likha tha, wahi bola. Exam ka passage bhi ek lamba notice hai. Fark sirf itna hai ki passage me kuch jawab seedhe likhe hote hain aur kuch chhupe hote hain. Jaise notice me 'yatri kripya apna saman sambhalein' se samajh aata hai ki station par chori ka darr hai — ye likha nahi, lekin samajh aata hai. Wahi inference hai. Roz ki zindagi me tum RC har din karte ho: WhatsApp message padh kar samajhna, exam ka instruction padhna, ya doctor ki parchi padhna — sab RC hi hai.",
          "Imagine you are at a railway station and the train is 20 minutes late. A notice on the board says: 'Train number 12801 will leave from platform 4 at 6:40. Passengers, please keep your luggage safe. The canteen is on platform 2.' Now someone asks you: when will the train leave? You search the notice and say: at 6:40. Someone asks: where is the canteen? You say: on platform 2. You just did RC — you read a text, understood the question, and took the answer from inside the text. You did not invent an answer; you said what was written in the notice. An exam passage is also a long notice. The only difference is that in a passage some answers are written plainly and some are hidden. For example, from 'passengers, please keep your luggage safe' you understand that theft is a worry at the station — it is not written, but it is understood. That is inference. In daily life you do RC every day: understanding a WhatsApp message, reading exam instructions, or reading a doctor's prescription — all of it is RC.",
          "सोचो तुम रेलवे स्टेशन पर हो और ट्रेन 20 मिनट लेट है। बोर्ड पर एक नोटिस लगा है: 'ट्रेन संख्या 12801, प्लेटफ़ॉर्म 4 से 6:40 पर चलेगी। यात्री कृपया अपना सामान सँभालें। कैंटीन प्लेटफ़ॉर्म 2 पर है।' अब कोई तुमसे पूछे: ट्रेन कब चलेगी? तुम नोटिस में खोजकर कहोगे: 6:40 पर। कोई पूछे: कैंटीन कहाँ है? तुम कहोगे: प्लेटफ़ॉर्म 2 पर। तुमने यही RC किया — एक पाठ पढ़ा, सवाल समझा, और पाठ के अंदर से उत्तर निकाला। तुमने अपनी मर्ज़ी से उत्तर नहीं बनाया; तुमने नोटिस में जो लिखा था, वही कहा। परीक्षा का पैसेज भी एक लंबा नोटिस है। फ़र्क़ सिर्फ़ इतना है कि पैसेज में कुछ उत्तर सीधे लिखे होते हैं और कुछ छिपे होते हैं। जैसे 'यात्री कृपया अपना सामान सँभालें' से समझ आता है कि स्टेशन पर चोरी का डर है — यह लिखा नहीं, लेकिन समझ आता है। वही अनुमान है। रोज़ की ज़िंदगी में तुम RC हर दिन करते हो: व्हाट्सऐप संदेश पढ़कर समझना, परीक्षा के निर्देश पढ़ना, या डॉक्टर की पर्ची पढ़ना — सब RC ही है।",
        ),
        s(
          H_STEPS,
          "Method 4 steps ka hai. Step 1: pehle sawaal padho, passage nahi. Sawaalon ko padh kar tumhe pata chal jayega ki kya dhoondhna hai — naam, date, wajah, ya lekhak ki rai. Step 2: ab passage padho, aur jin lines me sawaal ka jawab ho sakta hai, unke neeche line kheench lo. Step 3: har sawaal ka jawab passage ki line se match karo. Agar option me ek bhi shabd passage se alag hai — jaise passage me 'kuch' likha hai aur option me 'sab' — to woh option galat hai. Step 4: jo sawaal samajh na aaye, use aakhri me karo, aur guess karne se pehle do options ko pakka galat prove karo.\n\nWorked example 1 — passage padho: 'Nandpur gaon me ek purani, tooti hui library thi. 2019 me gaon ki ek teacher, Meena Devi, ne apne ghar ki 200 kitabein library ko deen. Phir gaon ke log bhi kitabein dene lage. Do saal me library me 3,000 kitabein ho gayin. Aaj library me har shaam 40 bacche padhte hain, aur gaon ke log kehte hain ki library ne gaon ki soch badal di.' Sawaal 1: Library me kitabein kaise badhin? Jawab: pehle Meena Devi ne 200 kitabein deen, phir gaon ke log dene lage — do saal me 3,000 ho gayin. Sawaal 2: 'Library ne gaon ki soch badal di' — iska matlab kya hai? Jawab: library sirf kitabein nahi deti, woh gaon ke logon ke vichar badal rahi hai; bacche roz padhne aate hain, isse pata chalta hai ki padhai ab gaon ki aadat ban gayi hai.\n\nWorked example 2 — inference: passage: 'Raju ko naye school me pehle din koi dost nahi mila. Lunch me woh akela baitha. Doosre din usne apna tiffin ek ladke se share kiya. Teesre din woh chaar doston ke saath khel raha tha.' Sawaal: Raju ke baare me kya kaha ja sakta hai? Jawab: Raju haar nahi manta — usne pehle din akelapan jhela, phir khud pehal ki, aur dost bana liye. Passage me 'haar nahi manta' likha nahi hai, lekin uske actions se ye saaf nikalta hai. Yahi inference hai: jo likha hai, usse jo samajh aata hai.",
          "The method has 4 steps. Step 1: read the questions first, not the passage. Reading the questions tells you what to look for — a name, a date, a reason, or the writer's opinion. Step 2: now read the passage, and underline the lines that may hold the answer. Step 3: match every answer with a line from the passage. If even one word in an option differs from the passage — for example the passage says 'some' and the option says 'all' — that option is wrong. Step 4: leave a question you do not understand for the end, and before guessing, prove two options definitely wrong.\n\nWorked example 1 — read the passage: 'Nandpur village had an old, broken library. In 2019, a teacher from the village, Meena Devi, gave 200 books from her home to the library. Then the villagers also started giving books. In two years the library had 3,000 books. Today 40 children study in the library every evening, and the villagers say the library has changed the thinking of the village.' Question 1: How did the books in the library grow? Answer: first Meena Devi gave 200 books, then the villagers started giving books — in two years there were 3,000. Question 2: What does 'the library has changed the thinking of the village' mean? Answer: the library does not only give books, it is changing how the villagers think; children come to study every day, which shows that studying has now become a habit in the village.\n\nWorked example 2 — inference. Passage: 'Raju found no friend on his first day at the new school. At lunch he sat alone. On the second day he shared his lunch box with a boy. On the third day he was playing with four friends.' Question: What can be said about Raju? Answer: Raju does not give up — he bore the loneliness of the first day, then took the first step himself, and made friends. The passage never says 'does not give up', but it clearly follows from his actions. That is inference: what you understand from what is written.",
          "विधि 4 चरणों की है। चरण 1: पहले सवाल पढ़ें, पैसेज नहीं। सवाल पढ़कर पता चल जाएगा कि क्या खोजना है — नाम, तारीख़, वजह, या लेखक की राय। चरण 2: अब पैसेज पढ़ें, और जिन पंक्तियों में सवाल का उत्तर हो सकता है, उनके नीचे रेखा खींच लें। चरण 3: हर सवाल का उत्तर पैसेज की पंक्ति से मिलाएँ। अगर विकल्प में एक भी शब्द पैसेज से अलग है — जैसे पैसेज में 'कुछ' लिखा है और विकल्प में 'सब' — तो वह विकल्प गलत है। चरण 4: जो सवाल समझ न आए, उसे आख़िर में करें, और अनुमान लगाने से पहले दो विकल्पों को पक्का गलत साबित करें।\n\nहल किया गया उदाहरण 1 — पैसेज पढ़ें: 'नंदपुर गाँव में एक पुरानी, टूटी हुई लाइब्रेरी थी। 2019 में गाँव की एक शिक्षिका, मीना देवी, ने अपने घर की 200 किताबें लाइब्रेरी को दीं। फिर गाँव के लोग भी किताबें देने लगे। दो साल में लाइब्रेरी में 3,000 किताबें हो गईं। आज लाइब्रेरी में हर शाम 40 बच्चे पढ़ते हैं, और गाँव के लोग कहते हैं कि लाइब्रेरी ने गाँव की सोच बदल दी।' सवाल 1: लाइब्रेरी में किताबें कैसे बढ़ीं? उत्तर: पहले मीना देवी ने 200 किताबें दीं, फिर गाँव के लोग देने लगे — दो साल में 3,000 हो गईं। सवाल 2: 'लाइब्रेरी ने गाँव की सोच बदल दी' — इसका क्या अर्थ है? उत्तर: लाइब्रेरी सिर्फ़ किताबें नहीं देती, वह गाँव के लोगों के विचार बदल रही है; बच्चे रोज़ पढ़ने आते हैं, इससे पता चलता है कि पढ़ाई अब गाँव की आदत बन गई है।\n\nहल किया गया उदाहरण 2 — अनुमान। पैसेज: 'राजू को नए स्कूल में पहले दिन कोई दोस्त नहीं मिला। दोपहर के खाने में वह अकेला बैठा। दूसरे दिन उसने अपना टिफ़िन एक लड़के से बाँटा। तीसरे दिन वह चार दोस्तों के साथ खेल रहा था।' सवाल: राजू के बारे में क्या कहा जा सकता है? उत्तर: राजू हार नहीं मानता — उसने पहले दिन का अकेलापन सहा, फिर ख़ुद पहल की, और दोस्त बना लिए। पैसेज में 'हार नहीं मानता' लिखा नहीं है, लेकिन उसके कामों से यह साफ़ निकलता है। यही अनुमान है: जो लिखा है, उससे जो समझ आता है।",
        ),
        s(
          H_MISTAKES,
          "Galti 1: passage ko bina sawaal padhe padhna. Aisa kyun hota hai? Kyunki school me humein hamesha pehle passage padhna sikhaya gaya. Lekin exam me time kam hota hai, aur bina target ke padhne se dimaag me kuch tikta nahi — tum passage padh kar bhool jate ho ki dhoondhna kya tha. Galti 2: apni knowledge se jawab dena. Jaise passage me likha ho ki 'gaaon me bijli sirf 4 ghante aati hai', aur tum general knowledge se bol do ki 'gaon me bijli ki kami hai kyunki sarkar dhyaan nahi deti' — ye passage me nahi likha, isliye galat hai. Jawab sirf passage ke andar se aana chahiye. Galti 3: 'all', 'always', 'never', 'only' wale options ko bina soche chunna. Ye extreme shabd aksar galat hote hain, kyunki passage me aam taur par 'kuch', 'aksar', 'kabhi-kabhi' jaisi naram baatein likhi hoti hain. Galti 4: pehle option par ruk jana. Pehla option sahi lag sakta hai, lekin teesra option passage se bilkul match karta ho — isliye chaaron options padho, phir chuno.",
          "Mistake 1: reading the passage without reading the questions first. Why does this happen? Because in school we were always taught to read the passage first. But in an exam time is short, and reading without a target leaves nothing in the mind — you read the passage and forget what you were looking for. Mistake 2: answering from your own knowledge. For example, if the passage says 'the village gets electricity for only 4 hours', and you answer from general knowledge that 'the village lacks electricity because the government does not care' — that is not written in the passage, so it is wrong. The answer must come only from inside the passage. Mistake 3: choosing options with 'all', 'always', 'never' or 'only' without thinking. These extreme words are often wrong, because passages usually carry soft words like 'some', 'often' or 'sometimes'. Mistake 4: stopping at the first option. The first option may look right, but the third option may match the passage exactly — so read all four options, then choose.",
          "गलती 1: सवाल पढ़े बिना पैसेज पढ़ना। ऐसा क्यों होता है? क्योंकि स्कूल में हमें हमेशा पहले पैसेज पढ़ना सिखाया गया। लेकिन परीक्षा में समय कम होता है, और बिना लक्ष्य के पढ़ने से दिमाग़ में कुछ टिकता नहीं — तुम पैसेज पढ़कर भूल जाते हो कि खोजना क्या था। गलती 2: अपने ज्ञान से उत्तर देना। जैसे पैसेज में लिखा हो कि 'गाँव में बिजली सिर्फ़ 4 घंटे आती है', और तुम सामान्य ज्ञान से बोल दो कि 'गाँव में बिजली की कमी है क्योंकि सरकार ध्यान नहीं देती' — यह पैसेज में नहीं लिखा, इसलिए गलत है। उत्तर सिर्फ़ पैसेज के अंदर से आना चाहिए। गलती 3: 'सब', 'हमेशा', 'कभी नहीं', 'केवल' वाले विकल्पों को बिना सोचे चुनना। ये चरम शब्द अक्सर गलत होते हैं, क्योंकि पैसेज में आम तौर पर 'कुछ', 'अक्सर', 'कभी-कभी' जैसी नरम बातें लिखी होती हैं। गलती 4: पहले विकल्प पर रुक जाना। पहला विकल्प सही लग सकता है, लेकिन तीसरा विकल्प पैसेज से बिल्कुल मेल खाता हो — इसलिए चारों विकल्प पढ़ें, फिर चुनें।",
        ),
        s(
          H_EDGE,
          "Edge case 1: passage bahut lamba ho aur time kam ho. Tab poora passage mat padho — pehla aur aakhri paragraph poora padho, beech ke paragraphs ki pehli line padho. Zyada tar main idea pehle aur aakhri paragraph me hota hai. Edge case 2: sawaal me 'NOT true' ya 'EXCEPT' likha ho. Ye ulta sawaal hai — teen options sahi honge, ek galat; tumhe galat wala chunnna hai. Jaldi me student sahi wala chun leta hai. Edge case 3: do options lagbhag ek jaise hon. Tab dono ko passage ki line se word-by-word compare karo — aksar ek shabd ka fark hota hai, jaise 'badlaav aaya' vs 'badlaav aane wala hai'. Edge case 4: passage me number aur date bahut hon. Unhe yaad karne ki koshish mat karo; sawaal aane par wapas dhoondh lo. Number yaad karne me time barbaad hota hai.",
          "Edge case 1: the passage is very long and time is short. Then do not read the whole passage — read the first and last paragraphs fully, and read the first line of the middle paragraphs. Most of the main idea sits in the first and last paragraphs. Edge case 2: the question says 'NOT true' or 'EXCEPT'. This is a reverse question — three options will be true and one false; you must pick the false one. In a hurry, students pick a true one. Edge case 3: two options look almost the same. Then compare both with the passage line word by word — often there is a one-word difference, like 'change came' versus 'change is about to come'. Edge case 4: the passage has many numbers and dates. Do not try to memorise them; find them again when the question comes. Memorising numbers wastes time.",
          "विशेष स्थिति 1: पैसेज बहुत लंबा हो और समय कम हो। तब पूरा पैसेज मत पढ़ें — पहला और आख़िरी पैराग्राफ़ पूरा पढ़ें, बीच के पैराग्राफ़ की पहली पंक्ति पढ़ें। ज़्यादातर मुख्य विचार पहले और आख़िरी पैराग्राफ़ में होता है। विशेष स्थिति 2: सवाल में 'सही नहीं है' या 'के अलावा' लिखा हो। यह उल्टा सवाल है — तीन विकल्प सही होंगे, एक गलत; तुम्हें गलत वाला चुनना है। जल्दी में छात्र सही वाला चुन लेता है। विशेष स्थिति 3: दो विकल्प लगभग एक जैसे हों। तब दोनों को पैसेज की पंक्ति से शब्द-दर-शब्द मिलाएँ — अक्सर एक शब्द का फ़र्क़ होता है, जैसे 'बदलाव आया' बनाम 'बदलाव आने वाला है'। विशेष स्थिति 4: पैसेज में संख्या और तारीख़ बहुत हों। उन्हें याद करने की कोशिश मत करो; सवाल आने पर वापस खोज लो। संख्याएँ याद करने में समय बर्बाद होता है।",
        ),
        s(
          H_CHANGE,
          "Agar tum sawaal pehle padhne ki aadat badal kar passage pehle padhne lago, to kya hoga? Tum passage padhoge, phir sawaal padhoge, phir jawab ke liye passage dobara padhoge — matlab ek hi passage teen baar. Time double ho jayega aur 5 marks ke liye 10 minute lag jayenge. Agar tum underline karna band kar do, to kya hoga? Jawab dhoondhte time tumhe har baar poora passage phir se scan karna padega, aur galti ka chance badh jayega. Agar tum 'NOT true' wale sawaal ko dhyaan se padhna shuru kar do, to kya hoga? Ek hi aadat se tumhare 1-2 marks bach jayenge, kyunki ulta sawaal har paper me aata hai. Chhoti aadat badlo, bada fark dekho — RC me method hi marks hai.",
          "If you change the habit of reading the questions first and start reading the passage first, what happens? You read the passage, then read the questions, then read the passage again for the answers — the same passage three times. Time doubles, and 5 marks take 10 minutes. If you stop underlining, what happens? Every time you search for an answer you must scan the whole passage again, and the chance of error rises. If you start reading 'NOT true' questions with care, what happens? One habit alone saves you 1 or 2 marks, because a reverse question appears in every paper. Change a small habit, see a big difference — in RC, the method itself is the marks.",
          "अगर तुम सवाल पहले पढ़ने की आदत बदलकर पैसेज पहले पढ़ने लगो, तो क्या होगा? तुम पैसेज पढ़ोगे, फिर सवाल पढ़ोगे, फिर उत्तर के लिए पैसेज दोबारा पढ़ोगे — मतलब एक ही पैसेज तीन बार। समय दोगुना हो जाएगा और 5 अंक के लिए 10 मिनट लग जाएँगे। अगर तुम रेखांकन करना बंद कर दो, तो क्या होगा? उत्तर खोजते समय तुम्हें हर बार पूरा पैसेज फिर से देखना पड़ेगा, और गलती का मौका बढ़ जाएगा। अगर तुम 'सही नहीं है' वाले सवाल को ध्यान से पढ़ना शुरू कर दो, तो क्या होगा? एक ही आदत से तुम्हारे 1-2 अंक बच जाएँगे, क्योंकि उल्टा सवाल हर पेपर में आता है। छोटी आदत बदलो, बड़ा फ़र्क़ देखो — RC में तरीक़ा ही अंक है।",
        ),
        s(
          H_SUMMARY,
          "RC me jeetne ka formula yaad rakho: pehle sawaal, phir passage, phir line se proof. Direct sawaal ka jawab passage me seedha milta hai; inference sawaal ka jawab actions aur lines se nikalta hai; vocabulary ka matlab aas-paas ke shabdon se samajh aata hai. Extreme shabdon wale options se bacho, chaaron options padho, aur 'NOT true' wale sawaal ko do baar padho. Roz ek passage ki practice karo — 15 din me tumhari accuracy 3 se badh kar 5 tak pahunch jayegi.",
          "Remember the winning formula for RC: questions first, then the passage, then proof from a line. A direct question is answered plainly in the passage; an inference question is answered from actions and lines; a vocabulary meaning is understood from the words around it. Avoid options with extreme words, read all four options, and read a 'NOT true' question twice. Practise one passage every day — in 15 days your accuracy will rise from 3 to 5.",
          "RC में जीतने का सूत्र याद रखो: पहले सवाल, फिर पैसेज, फिर पंक्ति से प्रमाण। सीधे सवाल का उत्तर पैसेज में सीधे मिलता है; अनुमान वाले सवाल का उत्तर कामों और पंक्तियों से निकलता है; शब्दार्थ आस-पास के शब्दों से समझ आता है। चरम शब्दों वाले विकल्पों से बचो, चारों विकल्प पढ़ें, और 'सही नहीं है' वाले सवाल को दो बार पढ़ें। रोज़ एक पैसेज का अभ्यास करो — 15 दिन में तुम्हारी सटीकता 3 से बढ़कर 5 तक पहुँच जाएगी।",
        ),
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'RC karne ka order',
          english: 'The order for solving RC',
          hindi: 'RC हल करने का क्रम',
        },
        nodes: [
          { t: { hinglish: '1. Sawaal padho', english: '1. Read the questions', hindi: '1. सवाल पढ़ें' } },
          { t: { hinglish: '2. Passage padho', english: '2. Read the passage', hindi: '2. पैसेज पढ़ें' } },
          { t: { hinglish: '3. Line underline karo', english: '3. Underline the line', hindi: '3. पंक्ति रेखांकित करें' } },
          { t: { hinglish: '4. Line se match karke chuno', english: '4. Match with the line and choose', hindi: '4. पंक्ति से मिलाकर चुनें' } },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'Passage: "Meena Devi ne apne ghar ki 200 kitabein library ko deen. Phir gaon ke log bhi kitabein dene lage." Library me kitabein kaise badhin?',
            english: 'Passage: "Meena Devi gave 200 books from her home to the library. Then the villagers also started giving books." How did the books in the library grow?',
            hindi: 'पैसेज: "मीना देवी ने अपने घर की 200 किताबें लाइब्रेरी को दीं। फिर गाँव के लोग भी किताबें देने लगे।" लाइब्रेरी में किताबें कैसे बढ़ीं?',
          },
          opts: [
            { hinglish: 'Sarkar ne 3,000 kitabein bhejin', english: 'The government sent 3,000 books', hindi: 'सरकार ने 3,000 किताबें भेजीं' },
            { hinglish: 'Meena Devi ne shuruaat ki, phir gaon ke log jud gaye', english: 'Meena Devi started it, then the villagers joined in', hindi: 'मीना देवी ने शुरुआत की, फिर गाँव के लोग जुड़ गए' },
            { hinglish: 'Bacchon ne apni kitabein bech deen', english: 'The children sold their books', hindi: 'बच्चों ने अपनी किताबें बेच दीं' },
            { hinglish: 'Library ne kitabein khareedin', english: 'The library bought the books', hindi: 'लाइब्रेरी ने किताबें खरीदीं' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Passage me saaf likha hai: pehle Meena Devi ne 200 kitabein deen, phir gaon ke log dene lage. Baaki options passage me kahin nahi hain.',
            english: 'The passage says it plainly: first Meena Devi gave 200 books, then the villagers started giving books. The other options appear nowhere in the passage.',
            hindi: 'पैसेज में साफ़ लिखा है: पहले मीना देवी ने 200 किताबें दीं, फिर गाँव के लोग देने लगे। बाकी विकल्प पैसेज में कहीं नहीं हैं।',
          },
        },
        {
          q: {
            hinglish: 'Passage: "Raju pehle din akela baitha. Doosre din usne tiffin share kiya. Teesre din woh chaar doston ke saath khel raha tha." Raju ke baare me kya nikalta hai?',
            english: 'Passage: "Raju sat alone on the first day. On the second day he shared his lunch box. On the third day he was playing with four friends." What can be concluded about Raju?',
            hindi: 'पैसेज: "राजू पहले दिन अकेला बैठा। दूसरे दिन उसने टिफ़िन बाँटा। तीसरे दिन वह चार दोस्तों के साथ खेल रहा था।" राजू के बारे में क्या निकलता है?',
          },
          opts: [
            { hinglish: 'Raju ko dost banana pasand nahi', english: 'Raju does not like making friends', hindi: 'राजू को दोस्त बनाना पसंद नहीं' },
            { hinglish: 'Raju ne khud pehal ki aur dost bana liye', english: 'Raju took the first step himself and made friends', hindi: 'राजू ने ख़ुद पहल की और दोस्त बना लिए' },
            { hinglish: 'Raju ko school pasand nahi aaya', english: 'Raju did not like the school', hindi: 'राजू को स्कूल पसंद नहीं आया' },
            { hinglish: 'Raju hamesha akela rehta hai', english: 'Raju always stays alone', hindi: 'राजू हमेशा अकेला रहता है' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Ye inference hai: uske actions — tiffin share karna, doston ke saath khelna — se pata chalta hai ki usne khud pehal ki. Baaki options uske actions ke ulta hain.',
            english: 'This is inference: his actions — sharing his lunch box, playing with friends — show that he took the first step himself. The other options go against his actions.',
            hindi: 'यह अनुमान है: उसके काम — टिफ़िन बाँटना, दोस्तों के साथ खेलना — से पता चलता है कि उसने ख़ुद पहल की। बाकी विकल्प उसके कामों के उल्टे हैं।',
          },
        },
        {
          q: {
            hinglish: 'Kaun sa option RC me sabse zyada galat hota hai?',
            english: 'Which kind of option is most often wrong in RC?',
            hindi: 'RC में किस तरह का विकल्प सबसे ज़्यादा गलत होता है?',
          },
          opts: [
            { hinglish: 'Jisme "kuch" ya "aksar" likha ho', english: 'One that says "some" or "often"', hindi: 'जिसमें "कुछ" या "अक्सर" लिखा हो' },
            { hinglish: 'Jisme "sab", "hamesha" ya "kabhi nahi" likha ho', english: 'One that says "all", "always" or "never"', hindi: 'जिसमें "सब", "हमेशा" या "कभी नहीं" लिखा हो' },
            { hinglish: 'Jo passage ki line se bilkul match kare', english: 'One that matches a line of the passage exactly', hindi: 'जो पैसेज की पंक्ति से बिल्कुल मेल खाए' },
            { hinglish: 'Jo sabse chhota ho', english: 'One that is the shortest', hindi: 'जो सबसे छोटा हो' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Extreme shabd jaise "sab" aur "hamesha" passage ki naram baaton se match nahi karte, isliye aise options aksar galat hote hain.',
            english: 'Extreme words like "all" and "always" do not match the soft statements of a passage, so such options are often wrong.',
            hindi: 'चरम शब्द जैसे "सब" और "हमेशा" पैसेज की नरम बातों से मेल नहीं खाते, इसलिए ऐसे विकल्प अक्सर गलत होते हैं।',
          },
        },
        {
          q: {
            hinglish: 'Sawaal me "NOT true" likha ho to tumhe kya chunnna hai?',
            english: 'If a question says "NOT true", what must you choose?',
            hindi: 'अगर सवाल में "सही नहीं है" लिखा हो तो तुम्हें क्या चुनना है?',
          },
          opts: [
            { hinglish: 'Jo option passage se sabse zyada match kare', english: 'The option that matches the passage the most', hindi: 'जो विकल्प पैसेज से सबसे ज़्यादा मेल खाए' },
            { hinglish: 'Jo option passage ke hisaab se galat ho', english: 'The option that is wrong as per the passage', hindi: 'जो विकल्प पैसेज के हिसाब से गलत हो' },
            { hinglish: 'Pehla option', english: 'The first option', hindi: 'पहला विकल्प' },
            { hinglish: 'Sabse lamba option', english: 'The longest option', hindi: 'सबसे लंबा विकल्प' },
          ],
          ans: 1,
          expl: {
            hinglish: '"NOT true" ulta sawaal hai — teen options sahi honge, ek galat. Tumhe wahi ek galat wala chunnna hai.',
            english: '"NOT true" is a reverse question — three options will be true and one false. You must pick that one false option.',
            hindi: '"सही नहीं है" उल्टा सवाल है — तीन विकल्प सही होंगे, एक गलत। तुम्हें वही एक गलत वाला चुनना है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Ek passage, 3 sawaal — khud likho aur jawab do',
          english: 'One passage, 3 questions — write them yourself and answer them',
          hindi: 'एक पैसेज, 3 सवाल — ख़ुद लिखो और उत्तर दो',
        },
        task: {
          hinglish: 'Apne gaon ya mohalle ke baare me 8-10 lines ka ek chhota passage likho (koi dukaan, park, ya school). Phir us par 3 sawaal likho: ek direct, ek inference, ek "NOT true" wala. Phir khud unke jawab likho aur har jawab ke saath passage ki woh line likho jisse jawab prove hota hai. Done tab mano jab teeno jawabon ke saath unki proof-line likhi ho.',
          english: 'Write a short passage of 8 to 10 lines about your village or neighbourhood (a shop, a park, or a school). Then write 3 questions on it: one direct, one inference, and one "NOT true" question. Then write the answers yourself, and with each answer write the line from the passage that proves it. You are done when all three answers carry their proof line.',
          hindi: 'अपने गाँव या मोहल्ले के बारे में 8-10 पंक्तियों का एक छोटा पैसेज लिखो (कोई दुकान, पार्क, या स्कूल)। फिर उस पर 3 सवाल लिखो: एक सीधा, एक अनुमान वाला, एक "सही नहीं है" वाला। फिर ख़ुद उनके उत्तर लिखो और हर उत्तर के साथ पैसेज की वह पंक्ति लिखो जिससे उत्तर साबित होता है। तब पूरा मानो जब तीनों उत्तरों के साथ उनकी प्रमाण-पंक्ति लिखी हो।',
        },
        language: 'python',
        starter: '# Task: apna passage aur 3 sawaal yahan string me likho, phir print karo.\npassage = "Yahan apna 8-10 lines ka passage likho."\nprint(passage)\nprint("Q1 (direct): ")\nprint("Q2 (inference): ")\nprint("Q3 (NOT true): ")\n',
        expected: 'Passage ke saath 3 sawaal (direct, inference, NOT true) aur har jawab ke saath uski proof-line print honi chahiye.',
      },
      readMinutes: 10,
    },
    {
      id: 'verbal-grammar',
      subjectId: 'verbal-ability',
      title: {
        hinglish: 'Grammar — tenses aur subject-verb agreement',
        english: 'Grammar — tenses and subject-verb agreement',
        hindi: 'व्याकरण — काल और कर्ता-क्रिया सहमति',
      },
      summary: {
        hinglish: 'Tense ka matlab hai "kab", aur subject-verb agreement ka matlab hai "kaun, kitne". Dono ko ek simple test se pakdo: pehle subject dhoondho, phir time dhoondho, phir verb chuno.',
        english: 'Tense means "when", and subject-verb agreement means "who, how many". Catch both with one simple test: find the subject first, then the time, then choose the verb.',
        hindi: 'काल का अर्थ है "कब", और कर्ता-क्रिया सहमति का अर्थ है "कौन, कितने"। दोनों को एक सरल जाँच से पकड़ो: पहले कर्ता खोजो, फिर समय खोजो, फिर क्रिया चुनो।',
      },
      sections: [
        s(
          H_WHAT,
          "Tense batata hai ki kaam kab hua: past (pehle), present (abhi), ya future (baad me). Subject-verb agreement (SVA) ka rule simple hai: singular subject ke saath singular verb, plural subject ke saath plural verb. Jaise 'He plays' sahi hai, 'He play' galat hai; 'They play' sahi hai, 'They plays' galat hai. Exam me in dono se 4-6 sawaal aate hain — error spotting, sentence correction, aur fill in the blanks me. Tense ke 3 main time hain aur har time ke 4 roop hote hain (simple, continuous, perfect, perfect continuous), lekin exam me zyada tar simple aur continuous hi pooche jate hain. SVA me mushkil tab aati hai jab subject aur verb ke beech me extra shabd aa jate hain, jaise 'The box of chocolates is on the table' — yahan subject 'box' hai (singular), 'chocolates' nahi; isliye verb 'is' aayega, 'are' nahi. Jo student subject ko pehchan leta hai, woh SVA kabhi galat nahi karta.",
          "Tense tells you when the action happened: past (before), present (now), or future (later). The rule of subject-verb agreement (SVA) is simple: a singular subject takes a singular verb, and a plural subject takes a plural verb. For example, 'He plays' is right and 'He play' is wrong; 'They play' is right and 'They plays' is wrong. Exams ask 4 to 6 questions from these two topics — in error spotting, sentence correction, and fill in the blanks. Each of the 3 main times has 4 forms (simple, continuous, perfect, perfect continuous), but exams mostly ask simple and continuous. SVA gets tricky when extra words come between the subject and the verb, like 'The box of chocolates is on the table' — here the subject is 'box' (singular), not 'chocolates'; so the verb is 'is', not 'are'. A student who can spot the subject never gets SVA wrong.",
          "काल बताता है कि काम कब हुआ: भूत (पहले), वर्तमान (अभी), या भविष्य (बाद में)। कर्ता-क्रिया सहमति (SVA) का नियम सरल है: एकवचन कर्ता के साथ एकवचन क्रिया, बहुवचन कर्ता के साथ बहुवचन क्रिया। जैसे 'He plays' सही है, 'He play' गलत है; 'They play' सही है, 'They plays' गलत है। परीक्षा में इन दोनों से 4-6 सवाल आते हैं — त्रुटि पहचान, वाक्य सुधार, और रिक्त स्थान भरने में। 3 मुख्य कालों के 4-4 रूप होते हैं (साधारण, निरंतर, पूर्ण, पूर्ण निरंतर), लेकिन परीक्षा में ज़्यादातर साधारण और निरंतर ही पूछे जाते हैं। SVA तब मुश्किल होता है जब कर्ता और क्रिया के बीच अतिरिक्त शब्द आ जाते हैं, जैसे 'The box of chocolates is on the table' — यहाँ कर्ता 'box' है (एकवचन), 'chocolates' नहीं; इसलिए क्रिया 'is' आएगी, 'are' नहीं। जो छात्र कर्ता को पहचान लेता है, वह SVA कभी गलत नहीं करता।",
        ),
        s(
          H_REAL,
          "Socho tum apne dost ko phone par bata rahe ho: 'Kal main market gaya tha, aaj main padh raha hoon, aur kal main exam doonga.' Tumne bina soche teen tense use kar liye: gaya tha (past), padh raha hoon (present continuous), doonga (future). Ab socho tum kehte: 'Kal main market jata hoon.' Dost turant bolega: 'Kal? Ya aaj?' Kyunki tense galat ho to time ka matlab hi badal jata hai. Wahi exam me hota hai: tense galat ho to sentence ka matlab badal jata hai. SVA bhi roz ki baat hai. Tum kehte ho: 'Mere paas ek pen hai.' Koi nahi kehta: 'Mere paas ek pen hain.' Kyunki 'ek pen' singular hai, isliye 'hai' aata hai. English me wahi rule hai: 'One pen is here', 'Two pens are here'. Tum Hindi me ye rule bina soche use karte ho — English me sirf use pehchan na hai.",
          "Imagine you are telling a friend on the phone: 'Yesterday I went to the market, today I am studying, and tomorrow I will take the exam.' Without thinking, you used three tenses: went (past), am studying (present continuous), will take (future). Now imagine you said: 'Yesterday I go to the market.' Your friend would at once ask: 'Yesterday? Or today?' Because a wrong tense changes the meaning of time itself. The same happens in exams: a wrong tense changes the meaning of the sentence. SVA is also a daily matter. You say: 'I have one pen.' Nobody says: 'I have one pen are.' Because 'one pen' is singular, so 'is' follows. English has the same rule: 'One pen is here', 'Two pens are here'. You use this rule in Hindi without thinking — in English you only need to recognise it.",
          "सोचो तुम अपने दोस्त को फ़ोन पर बता रहे हो: 'कल मैं बाज़ार गया था, आज मैं पढ़ रहा हूँ, और कल मैं परीक्षा दूँगा।' तुमने बिना सोचे तीन काल इस्तेमाल कर लिए: गया था (भूत), पढ़ रहा हूँ (वर्तमान निरंतर), दूँगा (भविष्य)। अब सोचो तुम कहते: 'कल मैं बाज़ार जाता हूँ।' दोस्त तुरंत बोलेगा: 'कल? या आज?' क्योंकि काल गलत हो तो समय का अर्थ ही बदल जाता है। वही परीक्षा में होता है: काल गलत हो तो वाक्य का अर्थ बदल जाता है। SVA भी रोज़ की बात है। तुम कहते हो: 'मेरे पास एक पेन है।' कोई नहीं कहता: 'मेरे पास एक पेन हैं।' क्योंकि 'एक पेन' एकवचन है, इसलिए 'है' आता है। अंग्रेज़ी में वही नियम है: 'One pen is here', 'Two pens are here'। तुम हिंदी में यह नियम बिना सोचे इस्तेमाल करते हो — अंग्रेज़ी में सिर्फ़ उसे पहचानना है।",
        ),
        s(
          H_STEPS,
          "Step 1: sentence me pehle subject dhoondho — kaun ya kya kaam kar raha hai? Step 2: time dhoondho — 'yesterday', 'now', 'tomorrow', 'every day', 'since 2019' jaise shabd time batate hain. Step 3: time ke hisaab se tense chuno, aur subject ke hisaab se verb ka singular/plural roop chuno. Step 4: sentence ko zor se padh kar suno — galat verb kaan ko khatakta hai.\n\nWorked example 1 — tense: sentence hai 'She ___ (go) to school every day.' Time wala shabd hai 'every day' — matlab roz ki aadat, present simple. Subject 'She' singular hai, isliye verb me 's' lagega: 'She goes to school every day.' Ab isi ko past me badlo: 'She ___ (go) to school yesterday.' 'Yesterday' past batata hai, isliye 'went': 'She went to school yesterday.' Aur future: 'She will go to school tomorrow.'\n\nWorked example 2 — SVA trap: 'The boys who live near the river ___ (play) football.' Subject kaun hai? 'The boys' — plural. Beech me 'who live near the river' extra hai, woh subject nahi hai. Isliye verb plural: 'play'. Sahi sentence: 'The boys who live near the river play football.'\n\nWorked example 3 — tricky subject: 'Neither of the answers ___ (is/are) correct.' 'Neither of' ke baad hamesha singular verb aata hai, kyunki matlab hai 'dono me se ek bhi nahi'. Sahi: 'Neither of the answers is correct.' Aise hi 'Each of the students is present' — 'each' hamesha singular hota hai.",
          "Step 1: first find the subject in the sentence — who or what is doing the action? Step 2: find the time — words like 'yesterday', 'now', 'tomorrow', 'every day' and 'since 2019' tell the time. Step 3: choose the tense by the time, and choose the singular or plural form of the verb by the subject. Step 4: read the sentence aloud — a wrong verb sounds wrong to the ear.\n\nWorked example 1 — tense: the sentence is 'She ___ (go) to school every day.' The time word is 'every day' — a daily habit, present simple. The subject 'She' is singular, so the verb takes 's': 'She goes to school every day.' Now change the same sentence to the past: 'She ___ (go) to school yesterday.' 'Yesterday' shows the past, so 'went': 'She went to school yesterday.' And the future: 'She will go to school tomorrow.'\n\nWorked example 2 — an SVA trap: 'The boys who live near the river ___ (play) football.' Who is the subject? 'The boys' — plural. The middle part 'who live near the river' is extra; it is not the subject. So the verb is plural: 'play'. Correct sentence: 'The boys who live near the river play football.'\n\nWorked example 3 — a tricky subject: 'Neither of the answers ___ (is/are) correct.' After 'Neither of', the verb is always singular, because the meaning is 'not even one of the two'. Correct: 'Neither of the answers is correct.' In the same way, 'Each of the students is present' — 'each' is always singular.",
          "चरण 1: वाक्य में पहले कर्ता खोजो — कौन या क्या काम कर रहा है? चरण 2: समय खोजो — 'yesterday', 'now', 'tomorrow', 'every day', 'since 2019' जैसे शब्द समय बताते हैं। चरण 3: समय के हिसाब से काल चुनो, और कर्ता के हिसाब से क्रिया का एकवचन/बहुवचन रूप चुनो। चरण 4: वाक्य को ज़ोर से पढ़कर सुनो — गलत क्रिया कान को खटकती है।\n\nहल किया गया उदाहरण 1 — काल: वाक्य है 'She ___ (go) to school every day.' समय वाला शब्द है 'every day' — मतलब रोज़ की आदत, वर्तमान साधारण। कर्ता 'She' एकवचन है, इसलिए क्रिया में 's' लगेगा: 'She goes to school every day.' अब इसी को भूत में बदलो: 'She ___ (go) to school yesterday.' 'Yesterday' भूत बताता है, इसलिए 'went': 'She went to school yesterday.' और भविष्य: 'She will go to school tomorrow.'\n\nहल किया गया उदाहरण 2 — SVA जाल: 'The boys who live near the river ___ (play) football.' कर्ता कौन है? 'The boys' — बहुवचन। बीच में 'who live near the river' अतिरिक्त है, वह कर्ता नहीं है। इसलिए क्रिया बहुवचन: 'play'। सही वाक्य: 'The boys who live near the river play football.'\n\nहल किया गया उदाहरण 3 — मुश्किल कर्ता: 'Neither of the answers ___ (is/are) correct.' 'Neither of' के बाद हमेशा एकवचन क्रिया आती है, क्योंकि अर्थ है 'दोनों में से एक भी नहीं'। सही: 'Neither of the answers is correct.' ऐसे ही 'Each of the students is present' — 'each' हमेशा एकवचन होता है।",
        ),
        s(
          H_MISTAKES,
          "Galti 1: 'since' aur 'for' me confuse hona. 'Since' point of time ke saath aata hai — 'since 2019', 'since morning'. 'For' duration ke saath aata hai — 'for 5 years', 'for 2 hours'. Aisa kyun hota hai? Kyunki Hindi me dono ke liye 'se' use hota hai, isliye dimaag dono ko ek samajhta hai. Galti 2: plural lage wale singular subject — 'news', 'mathematics', 'furniture' singular hote hain: 'The news is good', 'Mathematics is tough'. Inke aakhir me 's' dekh kar student plural verb laga deta hai. Galti 3: 'I' ke saath 'was' ki jagah 'were' ya ulta. Yaad rakho: 'I was', 'you were', 'he was', 'they were'. Galti 4: present continuous ko har jagah use karna — 'I am knowing the answer' galat hai, kyunki 'know' ek state verb hai, action nahi. Sahi hai 'I know the answer'. State verbs (know, like, love, believe, want) ka continuous nahi banta.",
          "Mistake 1: confusing 'since' and 'for'. 'Since' goes with a point of time — 'since 2019', 'since morning'. 'For' goes with a duration — 'for 5 years', 'for 2 hours'. Why does this happen? Because in Hindi one word, 'se', covers both, so the mind treats them as one. Mistake 2: singular subjects that look plural — 'news', 'mathematics' and 'furniture' are singular: 'The news is good', 'Mathematics is tough'. Students see the 's' at the end and put a plural verb. Mistake 3: mixing up 'was' and 'were' with 'I'. Remember: 'I was', 'you were', 'he was', 'they were'. Mistake 4: using the present continuous everywhere — 'I am knowing the answer' is wrong, because 'know' is a state verb, not an action. The correct form is 'I know the answer'. State verbs (know, like, love, believe, want) do not take the continuous form.",
          "गलती 1: 'since' और 'for' में भ्रम। 'Since' समय-बिंदु के साथ आता है — 'since 2019', 'since morning'। 'For' अवधि के साथ आता है — 'for 5 years', 'for 2 hours'। ऐसा क्यों होता है? क्योंकि हिंदी में दोनों के लिए 'से' इस्तेमाल होता है, इसलिए दिमाग़ दोनों को एक समझता है। गलती 2: बहुवचन लगे वाले एकवचन कर्ता — 'news', 'mathematics', 'furniture' एकवचन होते हैं: 'The news is good', 'Mathematics is tough'। इनके अंत में 's' देखकर छात्र बहुवचन क्रिया लगा देता है। गलती 3: 'I' के साथ 'was' की जगह 'were' या उल्टा। याद रखो: 'I was', 'you were', 'he was', 'they were'। गलती 4: वर्तमान निरंतर को हर जगह इस्तेमाल करना — 'I am knowing the answer' गलत है, क्योंकि 'know' एक अवस्था क्रिया है, कार्य नहीं। सही है 'I know the answer'। अवस्था क्रियाओं (know, like, love, believe, want) का निरंतर रूप नहीं बनता।",
        ),
        s(
          H_EDGE,
          "Edge case 1: 'and' se jude do subject — 'Ravi and Sita are coming' (plural). Lekin agar dono ek hi cheez hon, to singular: 'Bread and butter is my breakfast' — yahan bread-butter ek khana hai. Edge case 2: 'or' / 'nor' se jude subject — verb nazdeek wale subject ke hisaab se aata hai: 'Either the teacher or the students are late' (students nazdeek hai, plural), lekin 'Either the students or the teacher is late' (teacher nazdeek hai, singular). Edge case 3: collective noun — 'The team is winning' (team ek unit hai) lekin 'The team are arguing among themselves' (members alag-alag). Exam me aam taur par singular mana jata hai. Edge case 4: 'There is / There are' — verb uske baad wale noun ke hisaab se: 'There is a book', 'There are two books'.",
          "Edge case 1: two subjects joined by 'and' — 'Ravi and Sita are coming' (plural). But if both are one thing, it is singular: 'Bread and butter is my breakfast' — here bread and butter are one meal. Edge case 2: subjects joined by 'or' or 'nor' — the verb follows the nearer subject: 'Either the teacher or the students are late' (students is nearer, plural), but 'Either the students or the teacher is late' (teacher is nearer, singular). Edge case 3: a collective noun — 'The team is winning' (the team is one unit) but 'The team are arguing among themselves' (the members act separately). In exams it is usually treated as singular. Edge case 4: 'There is / There are' — the verb follows the noun after it: 'There is a book', 'There are two books'.",
          "विशेष स्थिति 1: 'and' से जुड़े दो कर्ता — 'Ravi and Sita are coming' (बहुवचन)। लेकिन अगर दोनों एक ही चीज़ हों, तो एकवचन: 'Bread and butter is my breakfast' — यहाँ ब्रेड-बटर एक खाना है। विशेष स्थिति 2: 'or' / 'nor' से जुड़े कर्ता — क्रिया नज़दीक वाले कर्ता के हिसाब से आती है: 'Either the teacher or the students are late' (students नज़दीक है, बहुवचन), लेकिन 'Either the students or the teacher is late' (teacher नज़दीक है, एकवचन)। विशेष स्थिति 3: सामूहिक संज्ञा — 'The team is winning' (टीम एक इकाई है) लेकिन 'The team are arguing among themselves' (सदस्य अलग-अलग हैं)। परीक्षा में आम तौर पर एकवचन माना जाता है। विशेष स्थिति 4: 'There is / There are' — क्रिया उसके बाद वाले संज्ञा के हिसाब से: 'There is a book', 'There are two books'।",
        ),
        s(
          H_CHANGE,
          "Agar tum 'every day' wale sentence me 'goes' ki jagah 'went' laga do, to kya hoga? Matlab badal jayega — roz ki aadat, ek purani baat ban jayegi. 'She goes to school every day' matlab woh abhi bhi jati hai; 'She went' matlab woh pehle jati thi, ab nahi. Agar tum subject ko pehchanna band kar do aur verb ko nazdeek wale noun se milane lago, to kya hoga? 'The box of chocolates are on the table' jaisi galti hogi — box singular hai, chocolates nahi. Aur agar tum 'since' ki jagah 'for' likh do — 'I have lived here for 2019' — to sentence ka matlab hi khatm ho jata hai, kyunki 'for' ke baad duration chahiye, saal nahi. Tense aur SVA me ek shabd badlo, poora matlab badal jata hai — isiliye exam inhe itna poochta hai.",
          "If you put 'went' instead of 'goes' in an 'every day' sentence, what happens? The meaning changes — a daily habit becomes an old event. 'She goes to school every day' means she still goes; 'She went' means she used to go, not now. If you stop spotting the subject and match the verb with the nearest noun instead, what happens? You get errors like 'The box of chocolates are on the table' — the box is singular, not the chocolates. And if you write 'for' instead of 'since' — 'I have lived here for 2019' — the sentence loses its meaning, because 'for' needs a duration, not a year. Change one word in tense or SVA and the whole meaning changes — that is why exams ask these so much.",
          "अगर तुम 'every day' वाले वाक्य में 'goes' की जगह 'went' लगा दो, तो क्या होगा? अर्थ बदल जाएगा — रोज़ की आदत, एक पुरानी बात बन जाएगी। 'She goes to school every day' मतलब वह अभी भी जाती है; 'She went' मतलब वह पहले जाती थी, अब नहीं। अगर तुम कर्ता को पहचानना बंद कर दो और क्रिया को नज़दीक वाले संज्ञा से मिलाने लगो, तो क्या होगा? 'The box of chocolates are on the table' जैसी गलती होगी — box एकवचन है, chocolates नहीं। और अगर तुम 'since' की जगह 'for' लिख दो — 'I have lived here for 2019' — तो वाक्य का अर्थ ही ख़त्म हो जाता है, क्योंकि 'for' के बाद अवधि चाहिए, साल नहीं। काल और SVA में एक शब्द बदलो, पूरा अर्थ बदल जाता है — इसलिए परीक्षा इन्हें इतना पूछती है।",
        ),
        s(
          H_SUMMARY,
          "Yaad rakho: time shabd tense batata hai ('yesterday' = past, 'every day' = present simple, 'tomorrow' = future), aur subject verb ka number batata hai (singular subject = singular verb). 'Since' point of time, 'for' duration. 'Each', 'neither', 'news', 'mathematics' singular hain. State verbs ka continuous nahi banta. Roz 10 sentence likho — 5 past, 5 present — aur har sentence me subject ko underline karo. Ek hafte me tense aur SVA tumhari aadat ban jayenge.",
          "Remember: the time word tells the tense ('yesterday' = past, 'every day' = present simple, 'tomorrow' = future), and the subject tells the number of the verb (singular subject = singular verb). 'Since' is a point of time, 'for' is a duration. 'Each', 'neither', 'news' and 'mathematics' are singular. State verbs do not take the continuous form. Write 10 sentences every day — 5 past, 5 present — and underline the subject in each one. In one week, tense and SVA will become your habit.",
          "याद रखो: समय शब्द काल बताता है ('yesterday' = भूत, 'every day' = वर्तमान साधारण, 'tomorrow' = भविष्य), और कर्ता क्रिया की संख्या बताता है (एकवचन कर्ता = एकवचन क्रिया)। 'Since' समय-बिंदु, 'for' अवधि। 'Each', 'neither', 'news', 'mathematics' एकवचन हैं। अवस्था क्रियाओं का निरंतर रूप नहीं बनता। रोज़ 10 वाक्य लिखो — 5 भूत, 5 वर्तमान — और हर वाक्य में कर्ता को रेखांकित करो। एक हफ़्ते में काल और SVA तुम्हारी आदत बन जाएँगे।",
        ),
      ],
      mcqs: [
        {
          q: {
            hinglish: 'Sahi sentence chuno: "She ___ to school every day."',
            english: 'Choose the correct sentence: "She ___ to school every day."',
            hindi: 'सही वाक्य चुनो: "She ___ to school every day."',
          },
          opts: [
            { hinglish: 'go', english: 'go', hindi: 'go' },
            { hinglish: 'goes', english: 'goes', hindi: 'goes' },
            { hinglish: 'went', english: 'went', hindi: 'went' },
            { hinglish: 'going', english: 'going', hindi: 'going' },
          ],
          ans: 1,
          expl: {
            hinglish: '"Every day" roz ki aadat batata hai — present simple. Subject "She" singular hai, isliye verb me "s" lagega: "goes".',
            english: '"Every day" shows a daily habit — present simple. The subject "She" is singular, so the verb takes "s": "goes".',
            hindi: '"Every day" रोज़ की आदत बताता है — वर्तमान साधारण। कर्ता "She" एकवचन है, इसलिए क्रिया में "s" लगेगा: "goes"।',
          },
        },
        {
          q: {
            hinglish: 'Sahi sentence chuno: "The box of chocolates ___ on the table."',
            english: 'Choose the correct sentence: "The box of chocolates ___ on the table."',
            hindi: 'सही वाक्य चुनो: "The box of chocolates ___ on the table."',
          },
          opts: [
            { hinglish: 'are', english: 'are', hindi: 'are' },
            { hinglish: 'is', english: 'is', hindi: 'is' },
            { hinglish: 'were', english: 'were', hindi: 'were' },
            { hinglish: 'have', english: 'have', hindi: 'have' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Subject "box" hai (singular), "chocolates" nahi. Isliye singular verb "is" aayega, "are" nahi.',
            english: 'The subject is "box" (singular), not "chocolates". So the singular verb "is" follows, not "are".',
            hindi: 'कर्ता "box" है (एकवचन), "chocolates" नहीं। इसलिए एकवचन क्रिया "is" आएगी, "are" नहीं।',
          },
        },
        {
          q: {
            hinglish: 'Sahi sentence chuno: "I have lived here ___ 2019."',
            english: 'Choose the correct sentence: "I have lived here ___ 2019."',
            hindi: 'सही वाक्य चुनो: "I have lived here ___ 2019."',
          },
          opts: [
            { hinglish: 'for', english: 'for', hindi: 'for' },
            { hinglish: 'from', english: 'from', hindi: 'from' },
            { hinglish: 'since', english: 'since', hindi: 'since' },
            { hinglish: 'at', english: 'at', hindi: 'at' },
          ],
          ans: 2,
          expl: {
            hinglish: '"2019" ek point of time hai, duration nahi. Point of time ke saath "since" aata hai; "for" ke saath duration aati hai, jaise "for 5 years".',
            english: '"2019" is a point of time, not a duration. A point of time takes "since"; "for" takes a duration, like "for 5 years".',
            hindi: '"2019" एक समय-बिंदु है, अवधि नहीं। समय-बिंदु के साथ "since" आता है; "for" के साथ अवधि आती है, जैसे "for 5 years"।',
          },
        },
        {
          q: {
            hinglish: 'Kaun sa sentence galat hai?',
            english: 'Which sentence is wrong?',
            hindi: 'कौन सा वाक्य गलत है?',
          },
          opts: [
            { hinglish: 'Neither of the answers is correct.', english: 'Neither of the answers is correct.', hindi: 'Neither of the answers is correct.' },
            { hinglish: 'Each of the students is present.', english: 'Each of the students is present.', hindi: 'Each of the students is present.' },
            { hinglish: 'I am knowing the answer.', english: 'I am knowing the answer.', hindi: 'I am knowing the answer.' },
            { hinglish: 'The news is good.', english: 'The news is good.', hindi: 'The news is good.' },
          ],
          ans: 2,
          expl: {
            hinglish: '"Know" ek state verb hai — uska continuous nahi banta. Sahi hai "I know the answer." Baaki teeno sentence sahi hain.',
            english: '"Know" is a state verb — it does not take the continuous form. The correct form is "I know the answer." The other three sentences are right.',
            hindi: '"Know" एक अवस्था क्रिया है — उसका निरंतर रूप नहीं बनता। सही है "I know the answer." बाकी तीनों वाक्य सही हैं।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: '10 sentence likho — subject underline karo',
          english: 'Write 10 sentences — underline the subject',
          hindi: '10 वाक्य लिखो — कर्ता रेखांकित करो',
        },
        task: {
          hinglish: '10 sentence likho: 4 present simple ("every day" wale), 3 past ("yesterday" wale), 3 future ("tomorrow" wale). Har sentence me subject ko CAPITAL letters me likho, jaise "SHE goes to school every day." Phir har sentence ko zor se padho aur check karo ki verb subject se match karta hai ya nahi. Done tab mano jab 10 ke 10 sentence me subject capital ho aur verb sahi ho.',
          english: 'Write 10 sentences: 4 present simple (with "every day"), 3 past (with "yesterday"), 3 future (with "tomorrow"). Write the subject of each sentence in CAPITAL letters, like "SHE goes to school every day." Then read each sentence aloud and check whether the verb matches the subject. You are done when all 10 sentences have the subject in capitals and the verb is correct.',
          hindi: '10 वाक्य लिखो: 4 वर्तमान साधारण ("every day" वाले), 3 भूत ("yesterday" वाले), 3 भविष्य ("tomorrow" वाले)। हर वाक्य में कर्ता को बड़े अक्षरों में लिखो, जैसे "SHE goes to school every day." फिर हर वाक्य को ज़ोर से पढ़ो और जाँचो कि क्रिया कर्ता से मेल खाती है या नहीं। तब पूरा मानो जब 10 के 10 वाक्यों में कर्ता बड़े अक्षरों में हो और क्रिया सही हो।',
        },
        language: 'python',
        starter: '# Task: apne 10 sentences yahan likho, subject CAPITAL me.\nsentences = [\n    "SHE goes to school every day.",\n]\nfor s in sentences:\n    print(s)\nprint("Total sentences:", len(sentences))\n',
        expected: '10 sentences print hone chahiye — 4 present, 3 past, 3 future — har ek me subject capital letters me.',
      },
      readMinutes: 10,
    },
    {
      id: 'verbal-vocabulary',
      subjectId: 'verbal-ability',
      title: {
        hinglish: 'Vocabulary — synonyms, antonyms aur word roots',
        english: 'Vocabulary — synonyms, antonyms and word roots',
        hindi: 'शब्दावली — समानार्थी, विलोम और शब्द मूल',
      },
      summary: {
        hinglish: 'Words ratne se vocabulary nahi badhti — roots se badhti hai. Ek root seekho to 10 words samajh aate hain. Synonym ka matlab "same jaisa", antonym ka matlab "ulta" — aur dono ko hamesha sentence me seekho, list me nahi.',
        english: 'Vocabulary does not grow by memorising words — it grows from roots. Learn one root and you understand 10 words. A synonym means "almost the same", an antonym means "the opposite" — and always learn both inside a sentence, never in a list.',
        hindi: 'शब्दावली शब्द रटने से नहीं बढ़ती — मूल से बढ़ती है। एक मूल सीखो तो 10 शब्द समझ आते हैं। समानार्थी का अर्थ "लगभग समान", विलोम का अर्थ "उल्टा" — और दोनों को हमेशा वाक्य में सीखो, सूची में नहीं।',
      },
      sections: [
        s(
          H_WHAT,
          "Vocabulary ke 3 hisse hote hain. Synonym matlab ek jaise meaning wala shabd — jaise 'happy' ka synonym 'joyful' hai. Antonym matlab ulta meaning wala shabd — 'happy' ka antonym 'sad' hai. Word root matlab shabd ka woh tukda jisse uska meaning banta hai — jaise 'dict' ka matlab hai 'bolna', isliye 'predict' (pehle se bolna), 'dictate' (bol kar likhwana) aur 'dictionary' (shabdon ki kitab) — teeno me 'dict' hai, teeno ka connection bolne se hai. Exam me vocabulary ke 4-5 sawaal aate hain: synonym chuno, antonym chuno, passage ke shabd ka matlab batao, ya khaali jagah me sahi shabd bharo. Jo student sirf word-list ratta hai, woh exam me naye shabd dekh kar haar jata hai. Jo student roots seekhta hai, woh naya shabd dekh kar bhi uska matlab andaza laga leta hai — kyunki usne shabd ka tukda pehchana hota hai.",
          "Vocabulary has 3 parts. A synonym is a word with a similar meaning — 'joyful' is a synonym of 'happy'. An antonym is a word with the opposite meaning — 'sad' is an antonym of 'happy'. A word root is the piece of a word that builds its meaning — for example, 'dict' means 'to speak', so 'predict' (to speak before), 'dictate' (to speak so someone writes) and 'dictionary' (a book of words) all carry 'dict', and all connect to speaking. Exams ask 4 to 5 vocabulary questions: pick the synonym, pick the antonym, give the meaning of a word from the passage, or fill the blank with the right word. A student who only memorises word lists loses when a new word appears in the exam. A student who learns roots can guess the meaning of a new word too — because they recognise the piece inside it.",
          "शब्दावली के 3 हिस्से होते हैं। समानार्थी का अर्थ समान अर्थ वाला शब्द — 'happy' का समानार्थी 'joyful' है। विलोम का अर्थ उल्टा अर्थ वाला शब्द — 'happy' का विलोम 'sad' है। शब्द मूल का अर्थ शब्द का वह टुकड़ा जिससे उसका अर्थ बनता है — जैसे 'dict' का अर्थ है 'बोलना', इसलिए 'predict' (पहले से बोलना), 'dictate' (बोलकर लिखवाना) और 'dictionary' (शब्दों की किताब) — तीनों में 'dict' है, तीनों का संबंध बोलने से है। परीक्षा में शब्दावली के 4-5 सवाल आते हैं: समानार्थी चुनो, विलोम चुनो, पैसेज के शब्द का अर्थ बताओ, या खाली जगह में सही शब्द भरो। जो छात्र सिर्फ़ शब्द-सूची रटता है, वह परीक्षा में नया शब्द देखकर हार जाता है। जो छात्र मूल सीखता है, वह नया शब्द देखकर भी उसका अर्थ अंदाज़ा लगा लेता है — क्योंकि उसने शब्द का टुकड़ा पहचाना होता है।",
        ),
        s(
          H_REAL,
          "Socho tum ek naye shahar me ho aur board par likha hai 'Pharmacy'. Tumne ye shabd pehle nahi padha, lekin tum 'pharm' ko pehchante ho — dawai se juda hai. Tum samajh jate ho ki yahan dawai milegi. Wahi root ka kaam hai. Ya socho tumhare dost ne kaha: 'Aaj weather bahut pleasant hai.' Tumne 'pleasant' shabd nahi suna, lekin sentence se samajh aata hai — dost khush hai, mausam achha hai, to 'pleasant' ka matlab achha hoga. Roz ki zindagi me tum words ka matlab aise hi nikaalte ho — aas-paas ke shabdon se. Exam me bhi wahi karna hai. Aur synonyms ka roz ka use dekho: tum kehte ho 'mujhe bhookh lagi hai', phir kehte ho 'mujhe zor ki bhookh lagi hai' — 'zor ki' ne 'bhookh' ko strong bana diya. English me bhi wahi hai: 'hungry' se strong hai 'starving'. Synonym sirf same nahi hota — kabhi strong, kabhi soft hota hai.",
          "Imagine you are in a new city and a board says 'Pharmacy'. You have never read this word, but you recognise 'pharm' — it connects to medicine. You understand that medicine is sold here. That is the work of a root. Or imagine your friend says: 'Today the weather is very pleasant.' You have never heard 'pleasant', but the sentence tells you — your friend is happy, the weather is good, so 'pleasant' must mean good. In daily life you work out the meaning of words just like this — from the words around them. Do the same in the exam. And see the daily use of synonyms: you say 'I am hungry', then you say 'I am very hungry' — 'very' made 'hungry' stronger. English is the same: 'starving' is stronger than 'hungry'. A synonym is not only the same — sometimes it is stronger, sometimes softer.",
          "सोचो तुम एक नए शहर में हो और बोर्ड पर लिखा है 'Pharmacy'। तुमने यह शब्द पहले नहीं पढ़ा, लेकिन तुम 'pharm' को पहचानते हो — दवाई से जुड़ा है। तुम समझ जाते हो कि यहाँ दवाई मिलेगी। वही मूल का काम है। या सोचो तुम्हारे दोस्त ने कहा: 'आज मौसम बहुत pleasant है।' तुमने 'pleasant' शब्द नहीं सुना, लेकिन वाक्य से समझ आता है — दोस्त ख़ुश है, मौसम अच्छा है, तो 'pleasant' का अर्थ अच्छा होगा। रोज़ की ज़िंदगी में तुम शब्दों का अर्थ ऐसे ही निकालते हो — आस-पास के शब्दों से। परीक्षा में भी वही करना है। और समानार्थी का रोज़ का इस्तेमाल देखो: तुम कहते हो 'मुझे भूख लगी है', फिर कहते हो 'मुझे ज़ोर की भूख लगी है' — 'ज़ोर की' ने 'भूख' को मज़बूत बना दिया। अंग्रेज़ी में भी वही है: 'hungry' से मज़बूत है 'starving'। समानार्थी सिर्फ़ समान नहीं होता — कभी मज़बूत, कभी नरम होता है।",
        ),
        s(
          H_STEPS,
          "Root seekhne ka method: pehle root aur uska matlab yaad karo, phir us root se 3 words banao, phir har word ko ek sentence me use karo. 10 sabse kaam ke roots ye hain: 'dict' = bolna (predict, dictate, dictionary), 'port' = le jana (transport, import, portable), 'scrib/script' = likhna (describe, prescription, manuscript), 'tele' = door (telephone, television, telescope), 'bio' = zindagi (biology, biography, antibiotic), 'graph' = likhna/kheenchna (photograph, autograph, geography), 'phon' = awaaz (telephone, microphone, symphony), 'chron' = samay (chronic, chronology, synchronise), 'spec' = dekhna (inspect, spectator, respect), 'bene' = achha (benefit, benevolent, beneficial).\n\nWorked example 1 — naya shabd decode karo: 'portable' shabd dekho. Root 'port' = le jana, aur 'able' = sakna. Matlab: jise le jaya ja sake — 'portable fan' matlab woh pankha jise kahin bhi le ja sakte ho. Ab 'transport' dekho: 'trans' = paar, 'port' = le jana — ek jagah se doosri jagah le jana. Bina dictionary ke matlab nikal gaya.\n\nWorked example 2 — synonym vs near-synonym: 'The king was generous' aur 'The king was charitable' — dono ka matlab hai 'dene wala', lekin 'generous' ka matlab hai dil khol kar dena, 'charitable' ka matlab hai gareebon ki madad ke liye dena. Exam me option me dono aayein to sentence dekho — kis sense me use hua hai?\n\nWorked example 3 — context se matlab: sentence hai 'The lecture was tedious, and half the class fell asleep.' 'Tedious' ka matlab kya hai? Aas-paas dekho — aadhi class so gayi, matlab lecture boring tha. 'Tedious' ka matlab hai boring, lamba aur thaka dene wala. Context hi dictionary hai.",
          "The method for learning roots: first remember the root and its meaning, then make 3 words from that root, then use each word in a sentence. The 10 most useful roots are: 'dict' = to speak (predict, dictate, dictionary), 'port' = to carry (transport, import, portable), 'scrib/script' = to write (describe, prescription, manuscript), 'tele' = far (telephone, television, telescope), 'bio' = life (biology, biography, antibiotic), 'graph' = to write or draw (photograph, autograph, geography), 'phon' = sound (telephone, microphone, symphony), 'chron' = time (chronic, chronology, synchronise), 'spec' = to see (inspect, spectator, respect), 'bene' = good (benefit, benevolent, beneficial).\n\nWorked example 1 — decode a new word: look at 'portable'. The root 'port' = to carry, and 'able' = can be. Meaning: something that can be carried — a 'portable fan' is a fan you can take anywhere. Now look at 'transport': 'trans' = across, 'port' = to carry — to carry from one place to another. The meaning came out without a dictionary.\n\nWorked example 2 — synonym versus near-synonym: 'The king was generous' and 'The king was charitable' — both mean 'a giver', but 'generous' means giving with an open heart, while 'charitable' means giving to help the poor. If both appear as options in the exam, look at the sentence — in which sense is it used?\n\nWorked example 3 — meaning from context: the sentence is 'The lecture was tedious, and half the class fell asleep.' What does 'tedious' mean? Look around it — half the class slept, so the lecture was boring. 'Tedious' means boring, long and tiring. Context itself is the dictionary.",
          "मूल सीखने की विधि: पहले मूल और उसका अर्थ याद करो, फिर उस मूल से 3 शब्द बनाओ, फिर हर शब्द को एक वाक्य में इस्तेमाल करो। 10 सबसे काम के मूल ये हैं: 'dict' = बोलना (predict, dictate, dictionary), 'port' = ले जाना (transport, import, portable), 'scrib/script' = लिखना (describe, prescription, manuscript), 'tele' = दूर (telephone, television, telescope), 'bio' = ज़िंदगी (biology, biography, antibiotic), 'graph' = लिखना/खींचना (photograph, autograph, geography), 'phon' = आवाज़ (telephone, microphone, symphony), 'chron' = समय (chronic, chronology, synchronise), 'spec' = देखना (inspect, spectator, respect), 'bene' = अच्छा (benefit, benevolent, beneficial)।\n\nहल किया गया उदाहरण 1 — नया शब्द समझो: 'portable' शब्द देखो। मूल 'port' = ले जाना, और 'able' = सकना। अर्थ: जिसे ले जाया जा सके — 'portable fan' मतलब वह पंखा जिसे कहीं भी ले जा सकते हो। अब 'transport' देखो: 'trans' = पार, 'port' = ले जाना — एक जगह से दूसरी जगह ले जाना। बिना शब्दकोश के अर्थ निकल गया।\n\nहल किया गया उदाहरण 2 — समानार्थी बनाम निकट-समानार्थी: 'The king was generous' और 'The king was charitable' — दोनों का अर्थ है 'देने वाला', लेकिन 'generous' का अर्थ है दिल खोलकर देना, 'charitable' का अर्थ है ग़रीबों की मदद के लिए देना। परीक्षा में विकल्प में दोनों आएँ तो वाक्य देखो — किस अर्थ में इस्तेमाल हुआ है?\n\nहल किया गया उदाहरण 3 — संदर्भ से अर्थ: वाक्य है 'The lecture was tedious, and half the class fell asleep.' 'Tedious' का अर्थ क्या है? आस-पास देखो — आधी कक्षा सो गई, मतलब व्याख्यान उबाऊ था। 'Tedious' का अर्थ है उबाऊ, लंबा और थका देने वाला। संदर्भ ही शब्दकोश है।",
        ),
        s(
          H_MISTAKES,
          "Galti 1: synonym ko exact same samajhna. 'Big' aur 'huge' dono bade ke liye hain, lekin 'a huge ant' ajeeb lagta hai aur 'a big problem' ke liye 'huge problem' zyada strong hai. Synonym hamesha same jagah fit nahi hota — use sentence ke hisaab se chuno. Aisa kyun hota hai? Kyunki hum dictionary ka pehla meaning yaad kar lete hain, lekin shabd ka 'feel' nahi seekhte. Galti 2: antonym me 'un' ya 'in' laga kar kaam chalana — 'happy' ka antonym 'unhappy' hai, theek hai, lekin 'honest' ka antonym 'dishonest' hai, 'unhonest' nahi. Prefix har shabd ke saath same nahi lagta. Galti 3: word-list ratna aur sentence me use na karna. List se yaad kiya shabd exam me pehchan me nahi aata, kyunki dimaag ne use kabhi kaam karte nahi dekha. Har naya shabd ek sentence me likho — tabhi woh tumhara hoga. Galti 4: 'affect' aur 'effect' ko ek samajhna. 'Affect' verb hai (asar karna), 'effect' noun hai (asar). 'The rain affected the match' sahi hai, 'The rain effected the match' galat hai.",
          "Mistake 1: treating a synonym as exactly the same. 'Big' and 'huge' both mean large, but 'a huge ant' sounds strange, and for 'a big problem', 'huge problem' is stronger. A synonym does not fit everywhere — choose it by the sentence. Why does this happen? Because we memorise the first meaning from the dictionary but never learn the 'feel' of the word. Mistake 2: making an antonym by adding 'un' or 'in' — the antonym of 'happy' is 'unhappy', fine, but the antonym of 'honest' is 'dishonest', not 'unhonest'. The same prefix does not fit every word. Mistake 3: memorising a word list and never using the words in a sentence. A word memorised from a list is not recognised in the exam, because the mind never saw it at work. Write every new word in a sentence — only then does it become yours. Mistake 4: treating 'affect' and 'effect' as one. 'Affect' is a verb (to influence), 'effect' is a noun (the result). 'The rain affected the match' is right; 'The rain effected the match' is wrong.",
          "गलती 1: समानार्थी को बिल्कुल समान समझना। 'Big' और 'huge' दोनों बड़े के लिए हैं, लेकिन 'a huge ant' अजीब लगता है और 'a big problem' के लिए 'huge problem' ज़्यादा मज़बूत है। समानार्थी हमेशा समान जगह फ़िट नहीं होता — उसे वाक्य के हिसाब से चुनो। ऐसा क्यों होता है? क्योंकि हम शब्दकोश का पहला अर्थ याद कर लेते हैं, लेकिन शब्द का 'अहसास' नहीं सीखते। गलती 2: विलोम में 'un' या 'in' लगाकर काम चलाना — 'happy' का विलोम 'unhappy' है, ठीक है, लेकिन 'honest' का विलोम 'dishonest' है, 'unhonest' नहीं। उपसर्ग हर शब्द के साथ समान नहीं लगता। गलती 3: शब्द-सूची रटना और वाक्य में इस्तेमाल न करना। सूची से याद किया शब्द परीक्षा में पहचान में नहीं आता, क्योंकि दिमाग़ ने उसे कभी काम करते नहीं देखा। हर नया शब्द एक वाक्य में लिखो — तभी वह तुम्हारा होगा। गलती 4: 'affect' और 'effect' को एक समझना। 'Affect' क्रिया है (असर करना), 'effect' संज्ञा है (असर)। 'The rain affected the match' सही है, 'The rain effected the match' गलत है।",
        ),
        s(
          H_EDGE,
          "Edge case 1: ek shabd ke do matlab — 'bat' ka matlab hai chamgaadad bhi aur ballebazi ka balla bhi. Exam me sentence dekho: 'He hit the ball with a bat' me bat ka matlab balla hai. Edge case 2: phrasal verb — 'give up' ka matlab 'haar manna' hai, 'give' ka matlab nahi. Phrasal verbs ko poora ek unit samjho. Edge case 3: negative prefix wale shabd — 'irregular' (not regular), 'impossible' (not possible), 'illegal' (not legal). 'Ir', 'im', 'il' — teeno ka matlab 'not' hai, bas shabd ke pehle akshar ke hisaab se badalte hain. Edge case 4: British vs American spelling — 'colour' aur 'color' dono sahi hain; exam me jo spelling passage me ho, wahi use karo.",
          "Edge case 1: one word with two meanings — 'bat' means a flying animal and also a cricket bat. In the exam, look at the sentence: in 'He hit the ball with a bat', bat means the cricket bat. Edge case 2: phrasal verbs — 'give up' means to surrender, not the meaning of 'give'. Treat a phrasal verb as one whole unit. Edge case 3: words with a negative prefix — 'irregular' (not regular), 'impossible' (not possible), 'illegal' (not legal). 'Ir', 'im' and 'il' all mean 'not'; they only change by the first letter of the word. Edge case 4: British versus American spelling — 'colour' and 'color' are both right; in the exam, use the spelling that appears in the passage.",
          "विशेष स्थिति 1: एक शब्द के दो अर्थ — 'bat' का अर्थ है चमगादड़ भी और बल्लेबाज़ी का बल्ला भी। परीक्षा में वाक्य देखो: 'He hit the ball with a bat' में bat का अर्थ बल्ला है। विशेष स्थिति 2: वाक्यांश क्रिया — 'give up' का अर्थ 'हार मानना' है, 'give' का अर्थ नहीं। वाक्यांश क्रिया को पूरा एक इकाई समझो। विशेष स्थिति 3: नकारात्मक उपसर्ग वाले शब्द — 'irregular' (not regular), 'impossible' (not possible), 'illegal' (not legal)। 'Ir', 'im', 'il' — तीनों का अर्थ 'not' है, बस शब्द के पहले अक्षर के हिसाब से बदलते हैं। विशेष स्थिति 4: ब्रिटिश बनाम अमेरिकी वर्तनी — 'colour' और 'color' दोनों सही हैं; परीक्षा में जो वर्तनी पैसेज में हो, वही इस्तेमाल करो।",
        ),
        s(
          H_CHANGE,
          "Agar tum roots seekhna band kar do aur sirf 500 words ki list ratne lago, to kya hoga? List ke 500 words to yaad ho jayenge, lekin exam me 501st word aate hi tum atak jaoge — kyunki tumne shabd ko tod kar samajhna nahi seekha. Agar tum har naya shabd ek sentence me likhna shuru kar do, to kya hoga? Ek hafte me tumhare 30-40 words aise honge jinhe tum pehchanoge bhi aur use bhi kar paoge — aur exam me woh words options me dikhte hi pehchan me aa jayenge. Agar tum 'affect' aur 'effect' ka fark ek baar samajh lo, to kya hoga? Ye dono har exam me aate hain — ek chhota fark, ek pakka mark.",
          "If you stop learning roots and only memorise a list of 500 words, what happens? The 500 words in the list will be remembered, but the moment the 501st word appears in the exam, you will get stuck — because you never learned to break a word apart and understand it. If you start writing every new word in a sentence, what happens? In one week you will have 30 to 40 words that you both recognise and can use — and in the exam those words will be recognised the moment they appear in the options. If you understand the difference between 'affect' and 'effect' once, what happens? Both appear in every exam — one small difference, one sure mark.",
          "अगर तुम मूल सीखना बंद कर दो और सिर्फ़ 500 शब्दों की सूची रटने लगो, तो क्या होगा? सूची के 500 शब्द तो याद हो जाएँगे, लेकिन परीक्षा में 501वाँ शब्द आते ही तुम अटक जाओगे — क्योंकि तुमने शब्द को तोड़कर समझना नहीं सीखा। अगर तुम हर नया शब्द एक वाक्य में लिखना शुरू कर दो, तो क्या होगा? एक हफ़्ते में तुम्हारे 30-40 शब्द ऐसे होंगे जिन्हें तुम पहचानोगे भी और इस्तेमाल भी कर पाओगे — और परीक्षा में वे शब्द विकल्पों में दिखते ही पहचान में आ जाएँगे। अगर तुम 'affect' और 'effect' का फ़र्क़ एक बार समझ लो, तो क्या होगा? ये दोनों हर परीक्षा में आते हैं — एक छोटा फ़र्क़, एक पक्का अंक।",
        ),
        s(
          H_SUMMARY,
          "Vocabulary ka shortcut hai root: 'dict' bolna, 'port' le jana, 'scrib' likhna, 'tele' door, 'bio' zindagi. Synonym hamesha exact same nahi hota — sentence dekho. Antonym me prefix har baar same nahi lagta. Har naya shabd ek sentence me likho, aur passage me naye shabd ka matlab uske aas-paas se nikaalo. Roz 2 roots aur 5 naye words — 30 din me 150 words tumhare honge, aur naye shabdon se darr khatm ho jayega.",
          "The shortcut for vocabulary is the root: 'dict' is to speak, 'port' is to carry, 'scrib' is to write, 'tele' is far, 'bio' is life. A synonym is never exactly the same — look at the sentence. The prefix of an antonym is not the same every time. Write every new word in a sentence, and work out the meaning of a new word in a passage from the words around it. Two roots and 5 new words every day — in 30 days, 150 words will be yours, and the fear of new words will be gone.",
          "शब्दावली का शॉर्टकट है मूल: 'dict' बोलना, 'port' ले जाना, 'scrib' लिखना, 'tele' दूर, 'bio' ज़िंदगी। समानार्थी हमेशा बिल्कुल समान नहीं होता — वाक्य देखो। विलोम में उपसर्ग हर बार समान नहीं लगता। हर नया शब्द एक वाक्य में लिखो, और पैसेज में नए शब्द का अर्थ उसके आस-पास से निकालो। रोज़ 2 मूल और 5 नए शब्द — 30 दिन में 150 शब्द तुम्हारे होंगे, और नए शब्दों से डर ख़त्म हो जाएगा।",
        ),
      ],
      mcqs: [
        {
          q: {
            hinglish: '"Portable" ka matlab kya hai? (Root: port = le jana)',
            english: 'What does "portable" mean? (Root: port = to carry)',
            hindi: '"Portable" का अर्थ क्या है? (मूल: port = ले जाना)',
          },
          opts: [
            { hinglish: 'Jo bahut bhaari ho', english: 'Something very heavy', hindi: 'जो बहुत भारी हो' },
            { hinglish: 'Jise aasani se le jaya ja sake', english: 'Something that can be carried easily', hindi: 'जिसे आसानी से ले जाया जा सके' },
            { hinglish: 'Jo kabhi kharab na ho', english: 'Something that never breaks', hindi: 'जो कभी ख़राब न हो' },
            { hinglish: 'Jo bahut mehenga ho', english: 'Something very costly', hindi: 'जो बहुत महँगा हो' },
          ],
          ans: 1,
          expl: {
            hinglish: '"Port" ka matlab hai le jana, "able" ka matlab hai sakna. Dono mil kar banta hai: jise le jaya ja sake.',
            english: '"Port" means to carry, and "able" means can be. Together they mean: something that can be carried.',
            hindi: '"Port" का अर्थ है ले जाना, "able" का अर्थ है सकना। दोनों मिलकर बनता है: जिसे ले जाया जा सके।',
          },
        },
        {
          q: {
            hinglish: '"The lecture was tedious, and half the class fell asleep." — "tedious" ka matlab kya hai?',
            english: '"The lecture was tedious, and half the class fell asleep." — What does "tedious" mean?',
            hindi: '"The lecture was tedious, and half the class fell asleep." — "tedious" का अर्थ क्या है?',
          },
          opts: [
            { hinglish: 'Bahut interesting', english: 'Very interesting', hindi: 'बहुत रोचक' },
            { hinglish: 'Bahut chhota', english: 'Very short', hindi: 'बहुत छोटा' },
            { hinglish: 'Boring aur lamba', english: 'Boring and long', hindi: 'उबाऊ और लंबा' },
            { hinglish: 'Bahut mushkil', english: 'Very difficult', hindi: 'बहुत मुश्किल' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Aadhi class so gayi — isse pata chalta hai lecture boring aur thaka dene wala tha. Context se matlab nikalta hai.',
            english: 'Half the class fell asleep — that shows the lecture was boring and tiring. The meaning comes from the context.',
            hindi: 'आधी कक्षा सो गई — इससे पता चलता है व्याख्यान उबाऊ और थका देने वाला था। अर्थ संदर्भ से निकलता है।',
          },
        },
        {
          q: {
            hinglish: '"Happy" ka sahi antonym kaun sa hai?',
            english: 'Which is the correct antonym of "happy"?',
            hindi: '"Happy" का सही विलोम कौन सा है?',
          },
          opts: [
            { hinglish: 'Unhappy', english: 'Unhappy', hindi: 'Unhappy' },
            { hinglish: 'Inhappy', english: 'Inhappy', hindi: 'Inhappy' },
            { hinglish: 'Dishappy', english: 'Dishappy', hindi: 'Dishappy' },
            { hinglish: 'Nonhappy', english: 'Nonhappy', hindi: 'Nonhappy' },
          ],
          ans: 0,
          expl: {
            hinglish: '"Happy" ka antonym "unhappy" hai. Prefix har shabd ke saath same nahi lagta — "inhappy" ya "dishappy" shabd hi nahi hain.',
            english: 'The antonym of "happy" is "unhappy". The prefix is not the same for every word — "inhappy" and "dishappy" are not words at all.',
            hindi: '"Happy" का विलोम "unhappy" है। उपसर्ग हर शब्द के साथ समान नहीं लगता — "inhappy" या "dishappy" शब्द ही नहीं हैं।',
          },
        },
        {
          q: {
            hinglish: 'Sahi sentence chuno:',
            english: 'Choose the correct sentence:',
            hindi: 'सही वाक्य चुनो:',
          },
          opts: [
            { hinglish: 'The rain effected the match.', english: 'The rain effected the match.', hindi: 'The rain effected the match.' },
            { hinglish: 'The rain affected the match.', english: 'The rain affected the match.', hindi: 'The rain affected the match.' },
            { hinglish: 'The rain affect the match.', english: 'The rain affect the match.', hindi: 'The rain affect the match.' },
            { hinglish: 'The rain effects the match badly.', english: 'The rain effects the match badly.', hindi: 'The rain effects the match badly.' },
          ],
          ans: 1,
          expl: {
            hinglish: '"Affect" verb hai (asar karna) — "The rain affected the match" sahi hai. "Effect" noun hai (asar), isliye "effected" yahan galat hai.',
            english: '"Affect" is a verb (to influence) — "The rain affected the match" is right. "Effect" is a noun (the result), so "effected" is wrong here.',
            hindi: '"Affect" क्रिया है (असर करना) — "The rain affected the match" सही है। "Effect" संज्ञा है (असर), इसलिए "effected" यहाँ गलत है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: '10 naye words root se decode karo',
          english: 'Decode 10 new words from their roots',
          hindi: '10 नए शब्द मूल से समझो',
        },
        task: {
          hinglish: 'In 10 words ko root se tod kar unka matlab likho, phir har word ko ek sentence me use karo: predict, transport, describe, telephone, biology, photograph, microphone, chronology, inspector, benefit. Har word ke liye 2 lines likho — line 1: root + matlab; line 2: apna sentence. Done tab mano jab 10 ke 10 words ke sentence likhe hon aur har sentence me word sahi sense me use hua ho.',
          english: 'Break these 10 words apart by their roots and write their meanings, then use each word in a sentence: predict, transport, describe, telephone, biology, photograph, microphone, chronology, inspector, benefit. Write 2 lines per word — line 1: the root and the meaning; line 2: your own sentence. You are done when all 10 words have a sentence and each word is used in the right sense.',
          hindi: 'इन 10 शब्दों को मूल से तोड़कर उनका अर्थ लिखो, फिर हर शब्द को एक वाक्य में इस्तेमाल करो: predict, transport, describe, telephone, biology, photograph, microphone, chronology, inspector, benefit। हर शब्द के लिए 2 पंक्तियाँ लिखो — पंक्ति 1: मूल + अर्थ; पंक्ति 2: अपना वाक्य। तब पूरा मानो जब 10 के 10 शब्दों के वाक्य लिखे हों और हर वाक्य में शब्द सही अर्थ में इस्तेमाल हुआ हो।',
        },
        language: 'python',
        starter: '# Task: har word ke liye root + matlab + apna sentence likho.\nwords = ["predict", "transport", "describe", "telephone", "biology",\n         "photograph", "microphone", "chronology", "inspector", "benefit"]\nfor w in words:\n    print(w, "-> root: , matlab: , sentence: ")\n',
        expected: '10 lines print honi chahiye, har line me ek word ka root, matlab aur ek sahi sentence.',
      },
      readMinutes: 10,
    },
    {
      id: 'verbal-error-spotting',
      subjectId: 'verbal-ability',
      title: {
        hinglish: 'Error spotting — galti ko 30 second me kaise pakdo',
        english: 'Error spotting — how to catch the error in 30 seconds',
        hindi: 'त्रुटि पहचान — गलती को 30 सेकंड में कैसे पकड़ें',
      },
      summary: {
        hinglish: 'Error spotting me sentence ko 4 hisso me baant kar check karo: subject-verb, tense, article/preposition, aur pronoun. Galti aksar wahi hoti hai jahan tum dekhte nahi — beech wale hisse me.',
        english: 'In error spotting, split the sentence into 4 parts and check each one: subject-verb, tense, article and preposition, and pronoun. The error is usually where you do not look — in the middle part.',
        hindi: 'त्रुटि पहचान में वाक्य को 4 हिस्सों में बाँटकर जाँचो: कर्ता-क्रिया, काल, आर्टिकल/संबंधबोधक, और सर्वनाम। गलती अक्सर वहीं होती है जहाँ तुम देखते नहीं — बीच वाले हिस्से में।',
      },
      sections: [
        s(
          H_WHAT,
          "Error spotting me ek sentence diya jata hai, jo 4 hisso (A, B, C, D) me baanta hota hai. Tumhe batana hota hai ki kis hisse me galti hai — ya koi galti nahi hai. Galti 5 tarah ki hoti hai: subject-verb agreement ki galti ('He play' ki jagah 'He plays'), tense ki galti ('I am knowing'), article ki galti ('a university' ki jagah 'an university' — 'university' ki awaaz 'y' se shuru hoti hai, isliye 'a'), preposition ki galti ('interested in' ki jagah 'interested on'), aur pronoun ki galti ('Each student must bring his book' — 'his' ki jagah 'their' ya 'his or her'). Ye section sabse zyada scoring hota hai, kyunki isme rule pata ho to jawab 30 second me mil jata hai. Lekin isme ek trap hai: sentence ko jaldi me padh kar dimaag khud hi galti ko sahi kar deta hai. Tum 'He play football' padho to dimaag 'plays' sun leta hai. Isliye error spotting me sentence ko dheere, hissa-dar-hissa padhna hota hai.",
          "In error spotting, you are given a sentence split into 4 parts (A, B, C, D). You must say which part has the error — or that there is no error. Errors are of 5 kinds: a subject-verb agreement error ('He play' instead of 'He plays'), a tense error ('I am knowing'), an article error ('an university' instead of 'a university' — 'university' starts with a 'y' sound, so it takes 'a'), a preposition error ('interested on' instead of 'interested in'), and a pronoun error ('Each student must bring his book' — 'his' should be 'their' or 'his or her'). This section scores the most, because if you know the rule, the answer comes in 30 seconds. But it has a trap: when you read a sentence fast, your mind corrects the error on its own. Read 'He play football' and your mind hears 'plays'. That is why error spotting needs a slow, part-by-part reading.",
          "त्रुटि पहचान में एक वाक्य दिया जाता है, जो 4 हिस्सों (A, B, C, D) में बाँटा होता है। तुम्हें बताना होता है कि किस हिस्से में गलती है — या कोई गलती नहीं है। गलती 5 तरह की होती है: कर्ता-क्रिया सहमति की गलती ('He play' की जगह 'He plays'), काल की गलती ('I am knowing'), आर्टिकल की गलती ('a university' की जगह 'an university' — 'university' की आवाज़ 'y' से शुरू होती है, इसलिए 'a'), संबंधबोधक की गलती ('interested in' की जगह 'interested on'), और सर्वनाम की गलती ('Each student must bring his book' — 'his' की जगह 'their' या 'his or her')। यह सेक्शन सबसे ज़्यादा अंक देने वाला होता है, क्योंकि इसमें नियम पता हो तो उत्तर 30 सेकंड में मिल जाता है। लेकिन इसमें एक जाल है: वाक्य को जल्दी में पढ़कर दिमाग़ ख़ुद ही गलती को सही कर देता है। तुम 'He play football' पढ़ो तो दिमाग़ 'plays' सुन लेता है। इसलिए त्रुटि पहचान में वाक्य को धीरे, हिस्सा-दर-हिस्सा पढ़ना होता है।",
        ),
        s(
          H_REAL,
          "Socho tum ek dukaan par gaye aur board par likha hai: 'Yahan sabhi prakar ke samaan milta hai.' Tum turant samajh jate ho ki 'milta hai' galat hai — 'samaan' ke liye 'milta hai' theek hai, lekin 'sabhi prakar ke samaan' ke liye bhi 'milta hai' hi aayega kyunki 'samaan' singular hai. Tumne error spot kar li — bina grammar ka naam jaane. Ya socho kisi ne message likha: 'Mujhe tumse ek baat kehna hai, kal subah 10 baje milo.' Tum padhte hi samajh jate ho ki 'milo' ki jagah 'milna' hona chahiye tha, ya sentence adhura hai. Roz ki zindagi me tum dusron ki galtiyan aise hi pakadte ho. Error spotting bas iska exam version hai: sentence ko 4 hisso me baanto, har hisse ko alag se check karo, aur jis hisse me kuch ajeeb lage, wahi galti hai.",
          "Imagine you go to a shop and the board says: 'All kind of goods are sold here.' At once you sense that something is off — 'kind' is singular, so the verb should be 'is', not 'are'. You just spotted an error — without knowing the name of the grammar rule. Or imagine someone writes a message: 'I am needing your help tomorrow morning at 10.' As you read it, you sense that 'am needing' is wrong — the right form is 'I need your help'. In daily life you catch other people's mistakes just like this. Error spotting is only the exam version of it: split the sentence into 4 parts, check each part separately, and the part that feels strange is the error.",
          "सोचो तुम एक दुकान पर गए और बोर्ड पर लिखा है: 'यहाँ सभी प्रकार के सामान मिलता है।' तुम तुरंत समझ जाते हो कि कुछ गड़बड़ है — लेकिन असल में 'मिलता है' 'सामान' के साथ सही है, क्योंकि 'सामान' एकवचन है। तुमने त्रुटि पकड़ ली — बिना व्याकरण का नाम जाने। या सोचो किसी ने संदेश लिखा: 'मुझे तुमसे एक बात कहना है, कल सुबह 10 बजे मिलो।' तुम पढ़ते ही समझ जाते हो कि वाक्य अधूरा है। रोज़ की ज़िंदगी में तुम दूसरों की गलतियाँ ऐसे ही पकड़ते हो। त्रुटि पहचान बस इसका परीक्षा संस्करण है: वाक्य को 4 हिस्सों में बाँटो, हर हिस्से को अलग से जाँचो, और जिस हिस्से में कुछ अजीब लगे, वही गलती है।",
        ),
        s(
          H_STEPS,
          "Method 5 steps ka hai. Step 1: sentence ko 4 hisso me baanto aur har hisse ko alag padho. Step 2: pehle subject aur verb ko check karo — kya verb subject se match karta hai? Step 3: tense check karo — kya time wala shabd aur verb ka tense ek hai? Step 4: article (a/an/the) aur preposition (in/on/at/to) check karo. Step 5: pronoun check karo — 'he/she/they' sahi person ke liye use hua hai ya nahi?\n\nWorked example 1: 'One of the boys (A) / have finished (B) / his homework (C) / before lunch. (D)' Hissa A check karo: 'One of the boys' — subject 'One' hai, singular. Hissa B: 'have finished' — plural verb hai, galat. Sahi hoga 'has finished'. Jawab: B. Kyun? Kyunki 'one of' ke baad hamesha singular verb aata hai.\n\nWorked example 2: 'She is (A) / more smarter (B) / than her sister. (C) / No error (D)' Hissa B: 'more smarter' — 'smarter' khud hi comparative hai, uske saath 'more' nahi lagta. Sahi hai 'smarter' ya 'more smart'. Jawab: B.\n\nWorked example 3: 'The teacher asked (A) / the students (B) / to submit there assignments (C) / by Monday. (D)' Hissa C: 'there assignments' — 'there' ka matlab hai 'wahan', lekin yahan chahiye 'their' (unka). 'There/their/they are' — teeno ki awaaz ek hai, matlab alag. Jawab: C.",
          "The method has 5 steps. Step 1: split the sentence into 4 parts and read each part separately. Step 2: first check the subject and the verb — does the verb match the subject? Step 3: check the tense — does the time word agree with the verb tense? Step 4: check the article (a/an/the) and the preposition (in/on/at/to). Step 5: check the pronoun — is 'he/she/they' used for the right person?\n\nWorked example 1: 'One of the boys (A) / have finished (B) / his homework (C) / before lunch. (D)' Check part A: 'One of the boys' — the subject is 'One', singular. Part B: 'have finished' — a plural verb, wrong. The correct form is 'has finished'. Answer: B. Why? Because after 'one of', the verb is always singular.\n\nWorked example 2: 'She is (A) / more smarter (B) / than her sister. (C) / No error (D)' Part B: 'more smarter' — 'smarter' is already comparative, so 'more' does not go with it. The correct form is 'smarter' or 'more smart'. Answer: B.\n\nWorked example 3: 'The teacher asked (A) / the students (B) / to submit there assignments (C) / by Monday. (D)' Part C: 'there assignments' — 'there' means 'that place', but here we need 'their' (belonging to them). 'There', 'their' and 'they are' all sound the same but mean different things. Answer: C.",
          "विधि 5 चरणों की है। चरण 1: वाक्य को 4 हिस्सों में बाँटो और हर हिस्से को अलग पढ़ो। चरण 2: पहले कर्ता और क्रिया को जाँचो — क्या क्रिया कर्ता से मेल खाती है? चरण 3: काल जाँचो — क्या समय वाला शब्द और क्रिया का काल एक है? चरण 4: आर्टिकल (a/an/the) और संबंधबोधक (in/on/at/to) जाँचो। चरण 5: सर्वनाम जाँचो — 'he/she/they' सही व्यक्ति के लिए इस्तेमाल हुआ है या नहीं?\n\nहल किया गया उदाहरण 1: 'One of the boys (A) / have finished (B) / his homework (C) / before lunch. (D)' हिस्सा A जाँचो: 'One of the boys' — कर्ता 'One' है, एकवचन। हिस्सा B: 'have finished' — बहुवचन क्रिया है, गलत। सही होगा 'has finished'। उत्तर: B। क्यों? क्योंकि 'one of' के बाद हमेशा एकवचन क्रिया आती है।\n\nहल किया गया उदाहरण 2: 'She is (A) / more smarter (B) / than her sister. (C) / No error (D)' हिस्सा B: 'more smarter' — 'smarter' ख़ुद ही तुलनात्मक है, उसके साथ 'more' नहीं लगता। सही है 'smarter' या 'more smart'। उत्तर: B।\n\nहल किया गया उदाहरण 3: 'The teacher asked (A) / the students (B) / to submit there assignments (C) / by Monday. (D)' हिस्सा C: 'there assignments' — 'there' का अर्थ है 'वहाँ', लेकिन यहाँ चाहिए 'their' (उनका)। 'There/their/they are' — तीनों की आवाज़ एक है, अर्थ अलग। उत्तर: C।",
        ),
        s(
          H_MISTAKES,
          "Galti 1: poora sentence ek saath padhna. Aisa kyun hota hai? Kyunki dimaag sentence ko flow me padhta hai aur galti ko auto-correct kar deta hai. Hissa-dar-hissa padhne se dimaag ko rukna padta hai, aur galti dikhti hai. Galti 2: 'No error' ko kabhi na chunna. Bahut se student sochte hain ki har sentence me galti hoti hi hai — lekin 4 me se 1 sentence sahi bhi hota hai. Agar teeno check pass ho jayein to 'No error' chuno, daro mat. Galti 3: article ko awaaz se nahi, akshar se check karna. 'An hour' sahi hai (hour ki awaaz 'a' se shuru hoti hai), 'a hour' galat hai. 'A university' sahi hai (awaaz 'y' se shuru hoti hai). Rule hai: article awaaz se lagta hai, akshar se nahi. Galti 4: double comparative ya double superlative — 'more better', 'most tallest' — dono galat hain. Comparative me ya 'more' lagao, ya 'er' — dono nahi.",
          "Mistake 1: reading the whole sentence at once. Why does this happen? Because the mind reads the sentence in flow and auto-corrects the error. Reading part by part forces the mind to stop, and the error shows up. Mistake 2: never choosing 'No error'. Many students think every sentence must have an error — but 1 in 4 sentences is actually correct. If all three checks pass, choose 'No error' without fear. Mistake 3: checking the article by letter instead of by sound. 'An hour' is right (hour starts with an 'a' sound), 'a hour' is wrong. 'A university' is right (the sound starts with 'y'). The rule is: the article follows the sound, not the letter. Mistake 4: double comparatives or double superlatives — 'more better' and 'most tallest' are both wrong. In a comparative, use either 'more' or 'er' — never both.",
          "गलती 1: पूरा वाक्य एक साथ पढ़ना। ऐसा क्यों होता है? क्योंकि दिमाग़ वाक्य को प्रवाह में पढ़ता है और गलती को ऑटो-सही कर देता है। हिस्सा-दर-हिस्सा पढ़ने से दिमाग़ को रुकना पड़ता है, और गलती दिखती है। गलती 2: 'No error' को कभी न चुनना। बहुत से छात्र सोचते हैं कि हर वाक्य में गलती होती ही है — लेकिन 4 में से 1 वाक्य सही भी होता है। अगर तीनों जाँच पास हो जाएँ तो 'No error' चुनो, डरो मत। गलती 3: आर्टिकल को आवाज़ से नहीं, अक्षर से जाँचना। 'An hour' सही है (hour की आवाज़ 'a' से शुरू होती है), 'a hour' गलत है। 'A university' सही है (आवाज़ 'y' से शुरू होती है)। नियम है: आर्टिकल आवाज़ से लगता है, अक्षर से नहीं। गलती 4: दोहरा तुलनात्मक या दोहरा सर्वोत्तम — 'more better', 'most tallest' — दोनों गलत हैं। तुलनात्मक में या 'more' लगाओ, या 'er' — दोनों नहीं।",
        ),
        s(
          H_EDGE,
          "Edge case 1: galti hisse ke beech me ho — jaise 'The boys, along with their teacher, is going' — 'along with' ke baad wala hissa subject nahi badalta; subject abhi bhi 'The boys' hai, isliye verb 'are' hoga. Edge case 2: sentence bilkul sahi ho lekin ajeeb lage — jaise 'The data is correct.' 'Data' plural lagta hai, lekin exam me aksar singular mana jata hai. Edge case 3: preposition ka fixed pair — 'good at', 'interested in', 'afraid of', 'depend on' — ye pairs ratne padte hain, rule se nahi nikalte. Edge case 4: 'No error' wala sentence — agar tumne 3 baar check kar liya aur kuch nahi mila, to 'No error' hi jawab hai; zabardasti galti mat dhoondho.",
          "Edge case 1: the error sits between parts — for example, 'The boys, along with their teacher, is going' — the part after 'along with' does not change the subject; the subject is still 'The boys', so the verb is 'are'. Edge case 2: the sentence is fully correct but looks strange — like 'The data is correct.' 'Data' looks plural, but in exams it is usually treated as singular. Edge case 3: fixed preposition pairs — 'good at', 'interested in', 'afraid of', 'depend on' — these pairs must be memorised; they do not come from a rule. Edge case 4: a 'No error' sentence — if you have checked three times and found nothing, then 'No error' is the answer; do not force yourself to find an error.",
          "विशेष स्थिति 1: गलती हिस्से के बीच में हो — जैसे 'The boys, along with their teacher, is going' — 'along with' के बाद वाला हिस्सा कर्ता नहीं बदलता; कर्ता अभी भी 'The boys' है, इसलिए क्रिया 'are' होगी। विशेष स्थिति 2: वाक्य बिल्कुल सही हो लेकिन अजीब लगे — जैसे 'The data is correct.' 'Data' बहुवचन लगता है, लेकिन परीक्षा में अक्सर एकवचन माना जाता है। विशेष स्थिति 3: संबंधबोधक का निश्चित जोड़ा — 'good at', 'interested in', 'afraid of', 'depend on' — ये जोड़े रटने पड़ते हैं, नियम से नहीं निकलते। विशेष स्थिति 4: 'No error' वाला वाक्य — अगर तुमने 3 बार जाँच कर ली और कुछ नहीं मिला, तो 'No error' ही उत्तर है; ज़बरदस्ती गलती मत खोजो।",
        ),
        s(
          H_CHANGE,
          "Agar tum hisse-dar-hissa check karna band kar do aur poora sentence ek nazar me padhne lago, to kya hoga? Tumhari accuracy gir jayegi — kyunki dimaag galti ko dekh kar bhi 'sahi' kar deta hai. Agar tum 'along with' wale rule ko samajh lo, to kya hoga? Aise trap sentences me tum kabhi nahi fasoge, kyunki tum jaan jaoge ki beech wala hissa subject nahi badalta. Agar tum article ko awaaz se check karna shuru kar do, to kya hoga? 'An hour' aur 'a university' jaise sawaal tumhare liye free marks ban jayenge. Error spotting me ek rule = ek mark. Har rule jo tum seekhte ho, woh seedha marks me badalta hai.",
          "If you stop checking part by part and start reading the whole sentence in one glance, what happens? Your accuracy will fall — because the mind sees the error and still 'corrects' it. If you understand the 'along with' rule, what happens? You will never fall for such trap sentences, because you will know that the middle part does not change the subject. If you start checking the article by sound, what happens? Questions like 'an hour' and 'a university' become free marks for you. In error spotting, one rule equals one mark. Every rule you learn turns straight into marks.",
          "अगर तुम हिस्सा-दर-हिस्सा जाँचना बंद कर दो और पूरा वाक्य एक नज़र में पढ़ने लगो, तो क्या होगा? तुम्हारी सटीकता गिर जाएगी — क्योंकि दिमाग़ गलती को देखकर भी 'सही' कर देता है। अगर तुम 'along with' वाले नियम को समझ लो, तो क्या होगा? ऐसे जाल वाले वाक्यों में तुम कभी नहीं फँसोगे, क्योंकि तुम जान जाओगे कि बीच वाला हिस्सा कर्ता नहीं बदलता। अगर तुम आर्टिकल को आवाज़ से जाँचना शुरू कर दो, तो क्या होगा? 'An hour' और 'a university' जैसे सवाल तुम्हारे लिए मुफ़्त अंक बन जाएँगे। त्रुटि पहचान में एक नियम = एक अंक। हर नियम जो तुम सीखते हो, वह सीधे अंकों में बदलता है।",
        ),
        s(
          H_SUMMARY,
          "Error spotting ka formula: baanto, phir check karo — subject-verb, tense, article/preposition, pronoun. 'One of' ke baad singular verb. 'More' aur 'er' dono ek saath nahi. Article awaaz se lagta hai, akshar se nahi. 'There/their/they are' alag hain. Aur agar kuch na mile to 'No error' chuno. Roz 10 sentence ki practice karo — 2 hafte me tum 30 second me galti pakadne lagoge.",
          "The formula for error spotting: split, then check — subject-verb, tense, article and preposition, pronoun. After 'one of', the verb is singular. 'More' and 'er' never go together. The article follows the sound, not the letter. 'There', 'their' and 'they are' are different. And if you find nothing, choose 'No error'. Practise 10 sentences a day — in 2 weeks you will catch errors in 30 seconds.",
          "त्रुटि पहचान का सूत्र: बाँटो, फिर जाँचो — कर्ता-क्रिया, काल, आर्टिकल/संबंधबोधक, सर्वनाम। 'One of' के बाद एकवचन क्रिया। 'More' और 'er' दोनों एक साथ नहीं। आर्टिकल आवाज़ से लगता है, अक्षर से नहीं। 'There/their/they are' अलग हैं। और अगर कुछ न मिले तो 'No error' चुनो। रोज़ 10 वाक्यों का अभ्यास करो — 2 हफ़्ते में तुम 30 सेकंड में गलती पकड़ने लगोगे।",
        ),
      ],
      mcqs: [
        {
          q: {
            hinglish: '"One of the boys (A) / have finished (B) / his homework (C) / before lunch. (D)" — kis hisse me galti hai?',
            english: '"One of the boys (A) / have finished (B) / his homework (C) / before lunch. (D)" — Which part has the error?',
            hindi: '"One of the boys (A) / have finished (B) / his homework (C) / before lunch. (D)" — किस हिस्से में गलती है?',
          },
          opts: [
            { hinglish: 'A', english: 'A', hindi: 'A' },
            { hinglish: 'B', english: 'B', hindi: 'B' },
            { hinglish: 'C', english: 'C', hindi: 'C' },
            { hinglish: 'D (No error)', english: 'D (No error)', hindi: 'D (No error)' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Subject "One" hai (singular), isliye verb "has finished" hona chahiye, "have finished" nahi. Galti hisse B me hai.',
            english: 'The subject is "One" (singular), so the verb must be "has finished", not "have finished". The error is in part B.',
            hindi: 'कर्ता "One" है (एकवचन), इसलिए क्रिया "has finished" होनी चाहिए, "have finished" नहीं। गलती हिस्से B में है।',
          },
        },
        {
          q: {
            hinglish: '"She is (A) / more smarter (B) / than her sister. (C)" — kis hisse me galti hai?',
            english: '"She is (A) / more smarter (B) / than her sister. (C)" — Which part has the error?',
            hindi: '"She is (A) / more smarter (B) / than her sister. (C)" — किस हिस्से में गलती है?',
          },
          opts: [
            { hinglish: 'A', english: 'A', hindi: 'A' },
            { hinglish: 'B', english: 'B', hindi: 'B' },
            { hinglish: 'C', english: 'C', hindi: 'C' },
            { hinglish: 'No error', english: 'No error', hindi: 'No error' },
          ],
          ans: 1,
          expl: {
            hinglish: '"Smarter" khud hi comparative hai — uske saath "more" nahi lagta. Sahi hai "smarter" ya "more smart".',
            english: '"Smarter" is already comparative — "more" does not go with it. The correct form is "smarter" or "more smart".',
            hindi: '"Smarter" ख़ुद ही तुलनात्मक है — उसके साथ "more" नहीं लगता। सही है "smarter" या "more smart"।',
          },
        },
        {
          q: {
            hinglish: 'Sahi article chuno: "___ university"',
            english: 'Choose the correct article: "___ university"',
            hindi: 'सही आर्टिकल चुनो: "___ university"',
          },
          opts: [
            { hinglish: 'An university', english: 'An university', hindi: 'An university' },
            { hinglish: 'A university', english: 'A university', hindi: 'A university' },
            { hinglish: 'The university (hamesha)', english: 'The university (always)', hindi: 'The university (हमेशा)' },
            { hinglish: 'Koi article nahi', english: 'No article', hindi: 'कोई आर्टिकल नहीं' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Article awaaz se lagta hai. "University" ki awaaz "y" se shuru hoti hai, isliye "a" aayega, "an" nahi.',
            english: 'The article follows the sound. "University" starts with a "y" sound, so it takes "a", not "an".',
            hindi: 'आर्टिकल आवाज़ से लगता है। "University" की आवाज़ "y" से शुरू होती है, इसलिए "a" आएगा, "an" नहीं।',
          },
        },
        {
          q: {
            hinglish: '"The boys, along with their teacher, ___ going." — sahi verb chuno.',
            english: '"The boys, along with their teacher, ___ going." — Choose the correct verb.',
            hindi: '"The boys, along with their teacher, ___ going." — सही क्रिया चुनो।',
          },
          opts: [
            { hinglish: 'is', english: 'is', hindi: 'is' },
            { hinglish: 'are', english: 'are', hindi: 'are' },
            { hinglish: 'was', english: 'was', hindi: 'was' },
            { hinglish: 'has', english: 'has', hindi: 'has' },
          ],
          ans: 1,
          expl: {
            hinglish: '"Along with" subject nahi badalta — subject abhi bhi "The boys" (plural) hai, isliye verb "are" hoga.',
            english: '"Along with" does not change the subject — the subject is still "The boys" (plural), so the verb is "are".',
            hindi: '"Along with" कर्ता नहीं बदलता — कर्ता अभी भी "The boys" (बहुवचन) है, इसलिए क्रिया "are" होगी।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: '10 sentence me galti dhoondho',
          english: 'Find the error in 10 sentences',
          hindi: '10 वाक्यों में गलती खोजो',
        },
        task: {
          hinglish: 'Neeche diye gaye pattern par khud 10 sentence likho — har sentence me ek jaan-boojh kar galti rakho (5 me subject-verb ki, 3 me article/preposition ki, 2 me there/their wali). Phir har sentence ko 4 hisso me baanto aur galti wale hisse ka naam likho. Phir galti ko sahi karke sentence dobara likho. Done tab mano jab 10 ke 10 sentence me galti, uska hissa, aur sahi version — teeno likhe hon.',
          english: 'Write 10 sentences of your own on the pattern below — put one deliberate error in each sentence (5 subject-verb errors, 3 article or preposition errors, 2 there/their errors). Then split each sentence into 4 parts and name the part with the error. Then correct the error and write the sentence again. You are done when all 10 sentences have the error, its part, and the correct version — all three written down.',
          hindi: 'नीचे दिए गए पैटर्न पर ख़ुद 10 वाक्य लिखो — हर वाक्य में एक जान-बूझकर गलती रखो (5 में कर्ता-क्रिया की, 3 में आर्टिकल/संबंधबोधक की, 2 में there/their वाली)। फिर हर वाक्य को 4 हिस्सों में बाँटो और गलती वाले हिस्से का नाम लिखो। फिर गलती को सही करके वाक्य दोबारा लिखो। तब पूरा मानो जब 10 के 10 वाक्यों में गलती, उसका हिस्सा, और सही संस्करण — तीनों लिखे हों।',
        },
        language: 'python',
        starter: '# Task: apne 10 sentences yahan likho — galti, hissa, sahi version.\nsentences = [\n    ("He play football every day.", "error part: verb", "He plays football every day."),\n]\nfor wrong, part, right in sentences:\n    print("Wrong:", wrong)\n    print("Part:", part)\n    print("Right:", right)\n    print()\n',
        expected: '10 sentences print hone chahiye, har ek ke saath galti wala hissa aur sahi version.',
      },
      readMinutes: 10,
    },
    {
      id: 'verbal-sentence-correction',
      subjectId: 'verbal-ability',
      title: {
        hinglish: 'Sentence correction aur para jumbles',
        english: 'Sentence correction and para jumbles',
        hindi: 'वाक्य सुधार और पैरा जंबल',
      },
      summary: {
        hinglish: 'Sentence correction me behtar version chuno, galat version mat dhoondho. Para jumble me pehla sentence dhoondho, phir pronoun aur connector se chain banao. Dono me flow hi jawab hai.',
        english: 'In sentence correction, choose the better version; do not hunt for the wrong version. In para jumbles, find the first sentence, then build the chain with pronouns and connectors. In both, flow is the answer.',
        hindi: 'वाक्य सुधार में बेहतर संस्करण चुनो, गलत संस्करण मत खोजो। पैरा जंबल में पहला वाक्य खोजो, फिर सर्वनाम और संयोजक से शृंखला बनाओ। दोनों में प्रवाह ही उत्तर है।',
      },
      sections: [
        s(
          H_WHAT,
          "Sentence correction me ek sentence diya jata hai, aur neeche 4 options hote hain — ek original, teen badle hue. Tumhe sabse sahi aur sabse natural version chunnna hota hai. Ye error spotting se alag hai: yahan sirf galti nahi, behtar version dhoondhna hota hai. Para jumble me 4-5 sentences ko ulta-pulta karke diya jata hai, aur tumhe unhe sahi order me lagana hota hai. Dono ka ek hi funda hai: sentence ka flow. Sahi sentence woh hota hai jo padhne me natural lage, jisme subject-verb match kare, tense ek ho, aur extra shabd na hon. Para jumble me sahi order woh hota hai jisme ek sentence doosre se judta ho — pronoun pehle wale noun ko refer kare, aur 'therefore', 'however', 'then' jaise connectors sahi jagah aayein. Exam me in dono se 4-6 sawaal aate hain, aur ye sabse zyada time lene wale sawaal hote hain — isliye inka method pehle se pakka hona chahiye.",
          "In sentence correction, you are given a sentence and below it 4 options — one original and three changed. You must choose the most correct and most natural version. This differs from error spotting: here you must find the better version, not only the error. In para jumbles, 4 to 5 sentences are given shuffled, and you must put them in the right order. Both share one idea: the flow of the sentence. The right sentence is the one that reads naturally, where the subject and verb match, the tense is one, and there are no extra words. In a para jumble, the right order is the one where each sentence joins the next — a pronoun refers to a noun from before, and connectors like 'therefore', 'however' and 'then' sit in the right place. Exams ask 4 to 6 questions from these two, and they take the most time — so their method must be fixed in advance.",
          "वाक्य सुधार में एक वाक्य दिया जाता है, और नीचे 4 विकल्प होते हैं — एक मूल, तीन बदले हुए। तुम्हें सबसे सही और सबसे स्वाभाविक संस्करण चुनना होता है। यह त्रुटि पहचान से अलग है: यहाँ सिर्फ़ गलती नहीं, बेहतर संस्करण खोजना होता है। पैरा जंबल में 4-5 वाक्यों को उल्टा-पुल्टा करके दिया जाता है, और तुम्हें उन्हें सही क्रम में लगाना होता है। दोनों का एक ही सिद्धांत है: वाक्य का प्रवाह। सही वाक्य वह होता है जो पढ़ने में स्वाभाविक लगे, जिसमें कर्ता-क्रिया मेल खाए, काल एक हो, और अतिरिक्त शब्द न हों। पैरा जंबल में सही क्रम वह होता है जिसमें एक वाक्य दूसरे से जुड़ता हो — सर्वनाम पहले वाले संज्ञा को दर्शाए, और 'therefore', 'however', 'then' जैसे संयोजक सही जगह आएँ। परीक्षा में इन दोनों से 4-6 सवाल आते हैं, और ये सबसे ज़्यादा समय लेने वाले सवाल होते हैं — इसलिए इनकी विधि पहले से पक्की होनी चाहिए।",
        ),
        s(
          H_REAL,
          "Socho tum apne dost ko message likhte ho: 'Kal main tumhare ghar aa raha hoon, kyunki mujhe tumse ek kitab leni hai.' Ab isko doosre tareeke se likho: 'Kal main tumhare ghar aa raha hoon, kyunki mujhe tumse ek kitab lena hai.' Pehla version natural lagta hai, doosra thoda ajeeb — 'leni hai' ki jagah 'lena hai' kaan ko khatakta hai. Tumne sentence correction kar liya — bina rule yaad kiye. Para jumble bhi roz hota hai: socho tum kahani suna rahe ho — 'Ek baar ek raja tha. Uske paas ek ghoda tha. Ek din ghoda kho gaya. Raja ne ghode ko dhoondha.' Agar tum order badal do — 'Ek din ghoda kho gaya. Ek baar ek raja tha.' — to kahani samajh nahi aayegi. Pehle raja ka introduction aana chahiye, phir ghoda, phir kho jana. Wahi para jumble hai: pehle introduction, phir detail, phir result.",
          "Imagine you write a message to a friend: 'I am coming to your house tomorrow, because I need to borrow a book from you.' Now write it another way: 'I am coming to your house tomorrow, because I need to borrow a book of you.' The first version feels natural, the second feels slightly odd — 'a book of you' jars the ear where 'from you' belongs. You just did sentence correction — without remembering any rule. Para jumbles happen daily too: imagine you are telling a story — 'Once there was a king. He had a horse. One day the horse was lost. The king searched for the horse.' If you change the order — 'One day the horse was lost. Once there was a king.' — the story makes no sense. First the king must be introduced, then the horse, then the loss. That is a para jumble: first the introduction, then the detail, then the result.",
          "सोचो तुम अपने दोस्त को संदेश लिखते हो: 'कल मैं तुम्हारे घर आ रहा हूँ, क्योंकि मुझे तुमसे एक किताब लेनी है।' अब इसे दूसरे तरीक़े से लिखो: 'कल मैं तुम्हारे घर आ रहा हूँ, क्योंकि मुझे तुमसे एक किताब लेना है।' पहला संस्करण स्वाभाविक लगता है, दूसरा थोड़ा अजीब — 'लेनी है' की जगह 'लेना है' कान को खटकता है। तुमने वाक्य सुधार कर लिया — बिना नियम याद किए। पैरा जंबल भी रोज़ होता है: सोचो तुम कहानी सुना रहे हो — 'एक बार एक राजा था। उसके पास एक घोड़ा था। एक दिन घोड़ा खो गया। राजा ने घोड़े को खोजा।' अगर तुम क्रम बदल दो — 'एक दिन घोड़ा खो गया। एक बार एक राजा था।' — तो कहानी समझ नहीं आएगी। पहले राजा का परिचय आना चाहिए, फिर घोड़ा, फिर खो जाना। वही पैरा जंबल है: पहले परिचय, फिर विवरण, फिर परिणाम।",
        ),
        s(
          H_STEPS,
          "Sentence correction ka method: Step 1: original sentence padho aur socho — kya ye natural lag raha hai? Step 2: har option ko sentence me daal kar zor se padho. Step 3: jo option sabse natural aur rule ke hisaab se sahi lage, use chuno. Step 4: agar do options sahi lagain, to chhota aur simple wala chuno — exam me simple version aksar sahi hota hai.\n\nWorked example 1: 'The teacher asked the students that they should submit their homework.' Options: (a) original, (b) 'The teacher asked the students to submit their homework.' Sahi hai (b) — 'asked that they should' lamba aur unnatural hai; 'asked to submit' short aur natural hai. Yahan grammar nahi, flow decide karta hai.\n\nPara jumble ka method: Step 1: pehla sentence dhoondho — woh sentence jo kisi ka introduction deta ho, jisme 'he', 'this', 'therefore' jaise shabd na hon. Step 2: pronoun ka chain banao — 'he' kis 'Ravi' ko refer kar raha hai? Step 3: connector dekho — 'therefore' result ke liye, 'however' contrast ke liye, 'then' sequence ke liye.\n\nWorked example 2 — jumble: (A) 'He opened a small shop in his village.' (B) 'Ravi was a young man who loved books.' (C) 'Soon, children from nearby villages started coming to his shop.' (D) 'He filled the shop with old books from his home.' Sahi order: B pehle (introduction — Ravi kaun hai), phir A (usne dukaan kholi), phir D (dukaan me kitabein bhareen), phir C (result — bacche aane lage). Order: B-A-D-C. 'He' in A refers to Ravi in B — pronoun chain ne order bata diya.",
          "The method for sentence correction: Step 1: read the original sentence and ask — does it feel natural? Step 2: put each option into the sentence and read it aloud. Step 3: choose the option that feels most natural and follows the rules. Step 4: if two options look right, choose the shorter and simpler one — in exams the simple version is often right.\n\nWorked example 1: 'The teacher asked the students that they should submit their homework.' Options: (a) original, (b) 'The teacher asked the students to submit their homework.' The right one is (b) — 'asked that they should' is long and unnatural; 'asked to submit' is short and natural. Here flow decides, not grammar.\n\nThe method for para jumbles: Step 1: find the first sentence — the one that introduces someone, with no words like 'he', 'this' or 'therefore'. Step 2: build the pronoun chain — which 'Ravi' does 'he' refer to? Step 3: look at the connectors — 'therefore' for a result, 'however' for a contrast, 'then' for a sequence.\n\nWorked example 2 — a jumble: (A) 'He opened a small shop in his village.' (B) 'Ravi was a young man who loved books.' (C) 'Soon, children from nearby villages started coming to his shop.' (D) 'He filled the shop with old books from his home.' The right order: B first (introduction — who Ravi is), then A (he opened a shop), then D (he filled the shop with books), then C (result — children started coming). Order: B-A-D-C. 'He' in A refers to Ravi in B — the pronoun chain gave the order away.",
          "वाक्य सुधार की विधि: चरण 1: मूल वाक्य पढ़ो और सोचो — क्या यह स्वाभाविक लग रहा है? चरण 2: हर विकल्प को वाक्य में डालकर ज़ोर से पढ़ो। चरण 3: जो विकल्प सबसे स्वाभाविक और नियम के हिसाब से सही लगे, उसे चुनो। चरण 4: अगर दो विकल्प सही लगें, तो छोटा और सरल वाला चुनो — परीक्षा में सरल संस्करण अक्सर सही होता है।\n\nहल किया गया उदाहरण 1: 'The teacher asked the students that they should submit their homework.' विकल्प: (a) मूल, (b) 'The teacher asked the students to submit their homework.' सही है (b) — 'asked that they should' लंबा और अस्वाभाविक है; 'asked to submit' छोटा और स्वाभाविक है। यहाँ व्याकरण नहीं, प्रवाह तय करता है।\n\nपैरा जंबल की विधि: चरण 1: पहला वाक्य खोजो — वह वाक्य जो किसी का परिचय देता हो, जिसमें 'he', 'this', 'therefore' जैसे शब्द न हों। चरण 2: सर्वनाम की शृंखला बनाओ — 'he' किस 'Ravi' को दर्शा रहा है? चरण 3: संयोजक देखो — 'therefore' परिणाम के लिए, 'however' विरोध के लिए, 'then' क्रम के लिए।\n\nहल किया गया उदाहरण 2 — जंबल: (A) 'He opened a small shop in his village.' (B) 'Ravi was a young man who loved books.' (C) 'Soon, children from nearby villages started coming to his shop.' (D) 'He filled the shop with old books from his home.' सही क्रम: B पहले (परिचय — रवि कौन है), फिर A (उसने दुकान खोली), फिर D (दुकान में किताबें भरीं), फिर C (परिणाम — बच्चे आने लगे)। क्रम: B-A-D-C। A में 'He' B में Ravi को दर्शाता है — सर्वनाम शृंखला ने क्रम बता दिया।",
        ),
        s(
          H_MISTAKES,
          "Galti 1: original option ko bina soche sahi maan lena. Aisa kyun hota hai? Kyunki dimaag ko pehla option familiar lagta hai. Lekin exam me original sentence aksar galat hota hai — isiliye to 3 options diye gaye hain. Har option ko check karo. Galti 2: sabse lamba option chunna. Lamba matlab behtar nahi hota — aksar lamba option extra words se bhara hota hai. Simple aur short version ko pehle dekho. Galti 3: para jumble me pehla sentence galat chunna. Agar pehla sentence 'He' ya 'This' se shuru ho raha hai, to woh pehla nahi ho sakta — kyunki 'he' kisi ko refer kar raha hai, jo pehle aana chahiye. Galti 4: jumble me sirf order yaad karke answer dena, bina dobara padhe. Sahi order milne ke baad poora paragraph ek baar padho — agar flow tootta hai, to order galat hai.",
          "Mistake 1: taking the original option as right without thinking. Why does this happen? Because the first option feels familiar to the mind. But in exams the original sentence is often wrong — that is why 3 options are given. Check every option. Mistake 2: choosing the longest option. Long does not mean better — often the long option is full of extra words. Look at the simple and short version first. Mistake 3: choosing the wrong first sentence in a para jumble. If the first sentence starts with 'He' or 'This', it cannot be first — because 'he' refers to someone who must come before. Mistake 4: answering a jumble from the order alone, without reading it again. After finding the order, read the whole paragraph once — if the flow breaks, the order is wrong.",
          "गलती 1: मूल विकल्प को बिना सोचे सही मान लेना। ऐसा क्यों होता है? क्योंकि दिमाग़ को पहला विकल्प परिचित लगता है। लेकिन परीक्षा में मूल वाक्य अक्सर गलत होता है — इसलिए तो 3 विकल्प दिए गए हैं। हर विकल्प को जाँचो। गलती 2: सबसे लंबा विकल्प चुनना। लंबा मतलब बेहतर नहीं होता — अक्सर लंबा विकल्प अतिरिक्त शब्दों से भरा होता है। सरल और छोटे संस्करण को पहले देखो। गलती 3: पैरा जंबल में पहला वाक्य गलत चुनना। अगर पहला वाक्य 'He' या 'This' से शुरू हो रहा है, तो वह पहला नहीं हो सकता — क्योंकि 'he' किसी को दर्शा रहा है, जो पहले आना चाहिए। गलती 4: जंबल में सिर्फ़ क्रम याद करके उत्तर देना, बिना दोबारा पढ़े। सही क्रम मिलने के बाद पूरा पैराग्राफ़ एक बार पढ़ो — अगर प्रवाह टूटता है, तो क्रम गलत है।",
        ),
        s(
          H_EDGE,
          "Edge case 1: do options dono sahi lagain, bas ek me comma ka fark ho. Tab comma wale rule ko dekho — 'Ravi, who is my friend, is coming' me comma sahi hai, kyunki 'who is my friend' extra jaankari hai. Edge case 2: jumble me 2 sentence ka order ulat jaye to bhi paragraph samajh aaye. Tab 'then' aur 'after that' jaise time wale shabd dekho — time ka order hi sahi order hai. Edge case 3: sentence correction me option me sirf ek shabd badla ho — jaise 'affect' ki jagah 'effect'. Tab wohi ek shabd decide karta hai; poora sentence dobara mat padho, sirf badle hue shabd ko check karo. Edge case 4: jumble ka aakhri sentence — aam taur par woh result ya conclusion deta hai, jaise 'Soon, everyone knew his name.' Conclusion ko pehle mat rakho.",
          "Edge case 1: two options both look right, differing only by a comma. Then look at the comma rule — in 'Ravi, who is my friend, is coming', the comma is right, because 'who is my friend' is extra information. Edge case 2: in a jumble, swapping 2 sentences still leaves the paragraph understandable. Then look at time words like 'then' and 'after that' — the order of time is the right order. Edge case 3: in sentence correction, an option changes only one word — like 'effect' instead of 'affect'. Then that one word decides it; do not re-read the whole sentence, check only the changed word. Edge case 4: the last sentence of a jumble — it usually gives the result or the conclusion, like 'Soon, everyone knew his name.' Do not put the conclusion first.",
          "विशेष स्थिति 1: दो विकल्प दोनों सही लगें, बस एक में अल्पविराम का फ़र्क़ हो। तब अल्पविराम वाले नियम को देखो — 'Ravi, who is my friend, is coming' में अल्पविराम सही है, क्योंकि 'who is my friend' अतिरिक्त जानकारी है। विशेष स्थिति 2: जंबल में 2 वाक्यों का क्रम उलट जाए तो भी पैराग्राफ़ समझ आए। तब 'then' और 'after that' जैसे समय वाले शब्द देखो — समय का क्रम ही सही क्रम है। विशेष स्थिति 3: वाक्य सुधार में विकल्प में सिर्फ़ एक शब्द बदला हो — जैसे 'affect' की जगह 'effect'। तब वही एक शब्द तय करता है; पूरा वाक्य दोबारा मत पढ़ो, सिर्फ़ बदले हुए शब्द को जाँचो। विशेष स्थिति 4: जंबल का आख़िरी वाक्य — आम तौर पर वह परिणाम या निष्कर्ष देता है, जैसे 'Soon, everyone knew his name.' निष्कर्ष को पहले मत रखो।",
        ),
        s(
          H_CHANGE,
          "Agar tum sentence correction me sirf pehla option padh kar answer de do, to kya hoga? Tum 4 me se 3 baar galat hoge — kyunki sahi version aksar doosre ya teesre option me hota hai. Agar tum para jumble me pehle 'He' wale sentence ko pehla maan lo, to kya hoga? Poora chain galat ho jayega, kyunki 'He' kisi pehle wale noun ko refer kar raha hai. Agar tum order milne ke baad paragraph ko ek baar zor se padh lo, to kya hoga? Flow tootta hai to turant pata chal jayega — ye 10 second ka check 1 mark bacha leta hai. Sentence correction aur jumble me jeet ka raaz hai: option ko sentence me daalo, zor se padho, aur flow ko suno.",
          "If you answer sentence correction by reading only the first option, what happens? You will be wrong 3 out of 4 times — because the right version is usually in the second or third option. If in a para jumble you take the sentence starting with 'He' as the first one, what happens? The whole chain goes wrong, because 'He' refers to a noun that must come before. If after finding the order you read the paragraph aloud once, what happens? A broken flow shows up at once — this 10-second check saves 1 mark. The secret of winning sentence correction and jumbles is: put the option in the sentence, read it aloud, and listen to the flow.",
          "अगर तुम वाक्य सुधार में सिर्फ़ पहला विकल्प पढ़कर उत्तर दे दो, तो क्या होगा? तुम 4 में से 3 बार गलत होगे — क्योंकि सही संस्करण अक्सर दूसरे या तीसरे विकल्प में होता है। अगर तुम पैरा जंबल में पहले 'He' वाले वाक्य को पहला मान लो, तो क्या होगा? पूरी शृंखला गलत हो जाएगी, क्योंकि 'He' किसी पहले वाले संज्ञा को दर्शा रहा है। अगर तुम क्रम मिलने के बाद पैराग्राफ़ को एक बार ज़ोर से पढ़ लो, तो क्या होगा? प्रवाह टूटता है तो तुरंत पता चल जाएगा — यह 10 सेकंड की जाँच 1 अंक बचा लेती है। वाक्य सुधार और जंबल में जीत का राज़ है: विकल्प को वाक्य में डालो, ज़ोर से पढ़ो, और प्रवाह को सुनो।",
        ),
        s(
          H_SUMMARY,
          "Sentence correction me har option ko sentence me daal kar padho — jo sabse natural lage, wahi sahi hai. Simple aur short version ko pehle dekho. Para jumble me pehle introduction wala sentence dhoondho, phir pronoun chain se jodo, phir connector se order pakka karo, aur aakhir me poora paragraph padh kar flow check karo. Roz ek jumble aur 5 sentence correction karo — 2 hafte me ye section tumhara sabse strong ban jayega.",
          "In sentence correction, put each option into the sentence and read it — the one that feels most natural is right. Look at the simple and short version first. In para jumbles, find the introduction sentence first, then join with the pronoun chain, then fix the order with connectors, and finally read the whole paragraph to check the flow. Do one jumble and 5 sentence corrections every day — in 2 weeks this section will become your strongest.",
          "वाक्य सुधार में हर विकल्प को वाक्य में डालकर पढ़ो — जो सबसे स्वाभाविक लगे, वही सही है। सरल और छोटे संस्करण को पहले देखो। पैरा जंबल में पहले परिचय वाला वाक्य खोजो, फिर सर्वनाम शृंखला से जोड़ो, फिर संयोजक से क्रम पक्का करो, और आख़िर में पूरा पैराग्राफ़ पढ़कर प्रवाह जाँचो। रोज़ एक जंबल और 5 वाक्य सुधार करो — 2 हफ़्ते में यह सेक्शन तुम्हारा सबसे मज़बूत बन जाएगा।",
        ),
      ],
      mcqs: [
        {
          q: {
            hinglish: 'Behtar version chuno: "The teacher asked the students that they should submit their homework."',
            english: 'Choose the better version: "The teacher asked the students that they should submit their homework."',
            hindi: 'बेहतर संस्करण चुनो: "The teacher asked the students that they should submit their homework."',
          },
          opts: [
            { hinglish: 'The teacher asked the students that they should submit their homework.', english: 'The teacher asked the students that they should submit their homework.', hindi: 'The teacher asked the students that they should submit their homework.' },
            { hinglish: 'The teacher asked the students to submit their homework.', english: 'The teacher asked the students to submit their homework.', hindi: 'The teacher asked the students to submit their homework.' },
            { hinglish: 'The teacher asked to the students that they should submit their homework.', english: 'The teacher asked to the students that they should submit their homework.', hindi: 'The teacher asked to the students that they should submit their homework.' },
            { hinglish: 'The teacher asked the students for to submit their homework.', english: 'The teacher asked the students for to submit their homework.', hindi: 'The teacher asked the students for to submit their homework.' },
          ],
          ans: 1,
          expl: {
            hinglish: '"Asked to submit" short aur natural hai. "Asked that they should" lamba aur unnatural hai; baaki options me "to the students" aur "for to" galat hain.',
            english: '"Asked to submit" is short and natural. "Asked that they should" is long and unnatural; the other options have wrong forms like "to the students" and "for to".',
            hindi: '"Asked to submit" छोटा और स्वाभाविक है। "Asked that they should" लंबा और अस्वाभाविक है; बाकी विकल्पों में "to the students" और "for to" गलत हैं।',
          },
        },
        {
          q: {
            hinglish: 'Jumble: (A) "He opened a small shop in his village." (B) "Ravi was a young man who loved books." (C) "Soon, children started coming to his shop." (D) "He filled the shop with old books from his home." Sahi order kya hai?',
            english: 'Jumble: (A) "He opened a small shop in his village." (B) "Ravi was a young man who loved books." (C) "Soon, children started coming to his shop." (D) "He filled the shop with old books from his home." What is the correct order?',
            hindi: 'जंबल: (A) "He opened a small shop in his village." (B) "Ravi was a young man who loved books." (C) "Soon, children started coming to his shop." (D) "He filled the shop with old books from his home." सही क्रम क्या है?',
          },
          opts: [
            { hinglish: 'A-B-C-D', english: 'A-B-C-D', hindi: 'A-B-C-D' },
            { hinglish: 'B-A-D-C', english: 'B-A-D-C', hindi: 'B-A-D-C' },
            { hinglish: 'C-D-A-B', english: 'C-D-A-B', hindi: 'C-D-A-B' },
            { hinglish: 'D-C-B-A', english: 'D-C-B-A', hindi: 'D-C-B-A' },
          ],
          ans: 1,
          expl: {
            hinglish: 'B pehle aata hai (Ravi ka introduction), phir A (dukaan kholi), phir D (kitabein bhareen), phir C (result — bacche aane lage). A me "He" B ke Ravi ko refer karta hai.',
            english: 'B comes first (introducing Ravi), then A (he opened a shop), then D (he filled it with books), then C (result — children started coming). "He" in A refers to Ravi in B.',
            hindi: 'B पहले आता है (रवि का परिचय), फिर A (दुकान खोली), फिर D (किताबें भरीं), फिर C (परिणाम — बच्चे आने लगे)। A में "He" B के Ravi को दर्शाता है।',
          },
        },
        {
          q: {
            hinglish: 'Para jumble me pehla sentence kaise pehchano?',
            english: 'How do you recognise the first sentence in a para jumble?',
            hindi: 'पैरा जंबल में पहला वाक्य कैसे पहचानो?',
          },
          opts: [
            { hinglish: 'Jo "He" ya "This" se shuru ho', english: 'One that starts with "He" or "This"', hindi: 'जो "He" या "This" से शुरू हो' },
            { hinglish: 'Jo kisi ka introduction de, bina pronoun ke', english: 'One that introduces someone, without a pronoun', hindi: 'जो किसी का परिचय दे, बिना सर्वनाम के' },
            { hinglish: 'Jo sabse lamba ho', english: 'One that is the longest', hindi: 'जो सबसे लंबा हो' },
            { hinglish: 'Jo "therefore" se shuru ho', english: 'One that starts with "therefore"', hindi: 'जो "therefore" से शुरू हो' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Pehla sentence introduction deta hai — usme naam hota hai, pronoun nahi. "He" ya "therefore" se shuru hone wala sentence pehla nahi ho sakta, kyunki woh pehle ki baat ko refer karta hai.',
            english: 'The first sentence introduces — it carries a name, not a pronoun. A sentence starting with "He" or "therefore" cannot be first, because it refers to something said before.',
            hindi: 'पहला वाक्य परिचय देता है — उसमें नाम होता है, सर्वनाम नहीं। "He" या "therefore" से शुरू होने वाला वाक्य पहला नहीं हो सकता, क्योंकि वह पहले की बात को दर्शाता है।',
          },
        },
        {
          q: {
            hinglish: 'Agar do options dono sahi lagain to pehle kya chuno?',
            english: 'If two options both look right, which one should you pick first?',
            hindi: 'अगर दो विकल्प दोनों सही लगें तो पहले क्या चुनो?',
          },
          opts: [
            { hinglish: 'Sabse lamba option', english: 'The longest option', hindi: 'सबसे लंबा विकल्प' },
            { hinglish: 'Sabse chhota aur simple option', english: 'The shortest and simplest option', hindi: 'सबसे छोटा और सरल विकल्प' },
            { hinglish: 'Pehla option', english: 'The first option', hindi: 'पहला विकल्प' },
            { hinglish: 'Jo option sabse mushkil shabd use kare', english: 'The option that uses the hardest words', hindi: 'जो विकल्प सबसे मुश्किल शब्द इस्तेमाल करे' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Exam me simple aur short version aksar sahi hota hai — lamba version extra words se bhara hota hai. Flow ko suno, length ko nahi.',
            english: 'In exams the simple and short version is often right — the long version is full of extra words. Listen to the flow, not the length.',
            hindi: 'परीक्षा में सरल और छोटा संस्करण अक्सर सही होता है — लंबा संस्करण अतिरिक्त शब्दों से भरा होता है। प्रवाह को सुनो, लंबाई को नहीं।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Khud ek para jumble banao aur solve karo',
          english: 'Make a para jumble yourself and solve it',
          hindi: 'ख़ुद एक पैरा जंबल बनाओ और हल करो',
        },
        task: {
          hinglish: 'Apne din ke baare me 4 sentences ka ek chhota paragraph likho (jaise: subah utha, nahaya, school gaya, dost se mila). Phir un 4 sentences ko ulta-pulta karke number do (A, B, C, D) aur ek dost ko solve karne do — ya khud 10 minute baad solve karo. Har sentence ke saath likho ki woh pehla, beech ka, ya aakhri kyun hai (pronoun chain ya connector ka naam likho). Done tab mano jab sahi order ke saath har sentence ki wajah likhi ho.',
          english: 'Write a short paragraph of 4 sentences about your day (for example: woke up in the morning, took a bath, went to school, met a friend). Then shuffle those 4 sentences, label them (A, B, C, D), and let a friend solve it — or solve it yourself after 10 minutes. With each sentence, write why it is first, middle, or last (name the pronoun chain or the connector). You are done when the correct order is written with the reason for each sentence.',
          hindi: 'अपने दिन के बारे में 4 वाक्यों का एक छोटा पैराग्राफ़ लिखो (जैसे: सुबह उठा, नहाया, स्कूल गया, दोस्त से मिला)। फिर उन 4 वाक्यों को उल्टा-पुल्टा करके संख्या दो (A, B, C, D) और एक दोस्त को हल करने दो — या ख़ुद 10 मिनट बाद हल करो। हर वाक्य के साथ लिखो कि वह पहला, बीच का, या आख़िरी क्यों है (सर्वनाम शृंखला या संयोजक का नाम लिखो)। तब पूरा मानो जब सही क्रम के साथ हर वाक्य की वजह लिखी हो।',
        },
        language: 'python',
        starter: '# Task: apna 4-sentence paragraph yahan likho, phir shuffled order.\npara = [\n    "Sentence 1 (introduction): ",\n    "Sentence 2: ",\n    "Sentence 3: ",\n    "Sentence 4 (result): ",\n]\nfor s in para:\n    print(s)\nprint("Sahi order: ")\n',
        expected: '4 sentences print hone chahiye, saath me sahi order aur har sentence ki wajah (pronoun chain ya connector).',
      },
      readMinutes: 10,
    },
  ],
};
