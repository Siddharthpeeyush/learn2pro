// Learn2Pro v2 — Python Programming subject content.
// All content written by AI in Learn2Pro's own style. Reference sites were
// used for facts only, never for wording or examples.
import type { Subject } from '../lib/types';

export const pythonProgramming: Subject = {
  id: 'python-programming',
  name: {
    hinglish: 'Python Programming',
    english: 'Python Programming',
    hindi: 'पायथन प्रोग्रामिंग',
  },
  tagline: {
    hinglish: 'Bilkul zero se Python seekho — sabse simple aur sabse popular bhasha.',
    english: 'Learn Python from absolute zero — the simplest and most popular language.',
    hindi: 'बिल्कुल शुरुआत से पायथन सीखें — सबसे सरल और सबसे लोकप्रिय भाषा।',
  },
  icon: '🐍',
  color: '#22c55e',
  category: 'cse',
  articles: [
    {
      id: 'py-intro',
      subjectId: 'python-programming',
      title: {
        hinglish: 'Python se pehchaan aur aapka pehla program',
        english: 'Introduction to Python and Your First Program',
        hindi: 'पायथन से परिचय और आपका पहला प्रोग्राम',
      },
      summary: {
        hinglish: 'Python kya hai, ye itni popular kyun hai, aur aapka pehla program — print() se Hello, World — line by line.',
        english: 'What Python is, why it is so popular, and your first program — Hello, World with print() — explained line by line.',
        hindi: 'पायथन क्या है, यह इतनी लोकप्रिय क्यों है, और आपका पहला प्रोग्राम — print() से हैलो, वर्ल्ड — लाइन दर लाइन।',
      },
      readMinutes: 10,
      sections: [
        {
          heading: {
            hinglish: 'Python kya hai?',
            english: 'What is Python?',
            hindi: 'पायथन क्या है?',
          },
          body: {
            hinglish: 'Python ek programming language hai — matlab computer ko instructions dene ka tareeka. Iska naam ek saamp ke naam par nahi, ek comedy show Monty Python ke naam par rakha gaya tha, jise iske banane wale Guido van Rossum ko pasand tha. Python 1991 mein aaya tha, aur aaj ye duniya ki sabse popular languages mein se ek hai. Iski sabse badi khaasiyat ye hai ki iska code English jaisa padhta hai. C mein Hello, World chhapne ke liye 5 line likhni padti hain, lekin Python mein sirf ek line: print("Hello, World"). Python ka use har jagah hota hai — website banana, data analyse karna, AI banana, aur chhote-chhote tools banana. Instagram, YouTube aur Netflix jaise bade products ke andar bhi Python kaam karta hai. Python ek interpreted language hai, matlab aapka code line by line turant chalta hai, pehle poora translate karne ka intezaar nahi karna padta. Isiliye Python seekhne ke liye best pehli language mani jati hai.',
            english: 'Python is a programming language — a way of giving instructions to the computer. Its name does not come from a snake, but from a comedy show called Monty Python, which its creator Guido van Rossum liked. Python came out in 1991, and today it is one of the most popular languages in the world. Its biggest speciality is that its code reads like English. In C you must write 5 lines to print Hello, World, but in Python only one line: print("Hello, World"). Python is used everywhere — making websites, analysing data, building AI, and making small tools. Python also works inside big products like Instagram, YouTube, and Netflix. Python is an interpreted language, which means your code runs line by line at once, without waiting for the whole thing to be translated first. That is why Python is considered the best first language to learn.',
            hindi: 'पायथन एक प्रोग्रामिंग भाषा है — कंप्यूटर को निर्देश देने का तरीका। इसका नाम एक साँप के नाम पर नहीं, एक कॉमेडी शो मोंटी पायथन के नाम पर रखा गया था, जिसे इसके बनाने वाले गुइडो वान रोसुम को पसंद था। पायथन 1991 में आया था, और आज यह दुनिया की सबसे लोकप्रिय भाषाओं में से एक है। इसकी सबसे बड़ी खासियत यह है कि इसका कोड अंग्रेज़ी जैसा पढ़ता है। सी में Hello, World छापने के लिए 5 लाइन लिखनी पड़ती हैं, लेकिन पायथन में सिर्फ एक लाइन: print("Hello, World")। पायथन का इस्तेमाल हर जगह होता है — वेबसाइट बनाना, डेटा analyse करना, AI बनाना, और छोटे-छोटे टूल बनाना। Instagram, YouTube और Netflix जैसे बड़े प्रोडक्ट के अंदर भी पायथन काम करता है। पायथन एक interpreted भाषा है, मतलब आपका कोड लाइन दर लाइन तुरंत चलता है, पहले पूरा translate करने का इंतज़ार नहीं करना पड़ता। इसीलिए पायथन सीखने के लिए सबसे अच्छी पहली भाषा मानी जाती है।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example: dukaan ka board aur Python',
            english: 'Real-life example: a shop board and Python',
            hindi: 'असल ज़िंदगी का उदाहरण: दुकान का बोर्ड और पायथन',
          },
          body: {
            hinglish: 'Ek kirana dukaan ke board par likha hota hai "Cheeni 45 rupaye kilo". Ye board koi bhi padh sakta hai — na koi code hai, na koi secret. Python ka code bhi aisa hi hai: print("Cheeni 45 rupaye kilo") padh kar koi bhi samajh jayega ki screen par kya chhapega. Dusri languages mein aise board par likhna ho to pehle board ka frame banana padta hai, phir rang bharna padta hai, phir akshar likhne padte hain. Python mein aap seedha akshar likhte ho — frame aur rang Python khud sambhal leta hai. Jaise aap phone par message type karte ho aur send dabate ho, bina ye soche ki message tower tak kaise pahuncha, waise hi Python mein aap likhte ho aur chalate ho, bina ye soche ki andar kya hota hai. Ye simplicity hi Python ki taakat hai. Lekin dhyaan rahe: simple hone ka matlab kamzor hona nahi hai. Python se bade-bade AI model aur crore logon ki website chalti hai.',
            english: 'On the board of a grocery shop it says "Sugar 45 rupees a kilo". Anyone can read this board — there is no code, no secret. Python code is like that too: anyone who reads print("Sugar 45 rupees a kilo") will understand what will appear on the screen. In other languages, to write on such a board you must first build the frame of the board, then fill in the colour, then write the letters. In Python you write the letters directly — Python handles the frame and the colour by itself. Just as you type a message on your phone and press send, without thinking about how the message reached the tower, in Python you write and run, without thinking about what happens inside. This simplicity is the strength of Python. But remember: simple does not mean weak. Python runs big AI models and websites used by crores of people.',
            hindi: 'एक किराना दुकान के बोर्ड पर लिखा होता है "चीनी 45 रुपये किलो"। यह बोर्ड कोई भी पढ़ सकता है — न कोई कोड है, न कोई secret। पायथन का कोड भी ऐसा ही है: print("चीनी 45 रुपये किलो") पढ़ कर कोई भी समझ जाएगा कि स्क्रीन पर क्या छपेगा। दूसरी भाषाओं में ऐसे बोर्ड पर लिखना हो तो पहले बोर्ड का फ्रेम बनाना पड़ता है, फिर रंग भरना पड़ता है, फिर अक्षर लिखने पड़ते हैं। पायथन में आप सीधे अक्षर लिखते हो — फ्रेम और रंग पायथन खुद संभाल लेता है। जैसे आप फोन पर मैसेज टाइप करते हो और send दबाते हो, बिना यह सोचे कि मैसेज टावर तक कैसे पहुँचा, वैसे ही पायथन में आप लिखते हो और चलाते हो, बिना यह सोचे कि अंदर क्या होता है। यह simplicity ही पायथन की ताकत है। लेकिन ध्यान रहे: सरल होने का मतलब कमज़ोर होना नहीं है। पायथन से बड़े-बड़े AI मॉडल और करोड़ लोगों की वेबसाइट चलती है।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step: pehla program, line by line',
            english: 'Step-by-step: your first program, line by line',
            hindi: 'चरण-दर-चरण: पहला प्रोग्राम, लाइन दर लाइन',
          },
          body: {
            hinglish: 'Aapka pehla Python program sirf ek line ka hai: print("Hello, World"). Ise samjho. print ek function hai — matlab ek naam wala kaam, jo screen par kuch likhta hai. Bracket ke andar jo likha hai, wahi chhapta hai. Double quotes " " ka matlab hai ki andar ka text hai, koi number ya variable nahi. Agar aap print(5) likhte ho, to 5 chhapega, kyunki 5 ek number hai aur uske aage quotes nahi hain. Agar aap print("5") likhte ho, to bhi 5 chhapega, lekin ab wo text hai, number nahi — farq baad mein hisaab karte waqt dikhega. Python mein line ke aakhir mein semicolon nahi lagta, aur curly bracket bhi nahi hote. Har line apne aap mein poori hoti hai. Dusra program dekho: print("Mera naam Sid hai") ke baad print("Main Python seekh raha hoon") likha hai. Dono alag-alag lines mein chhapenge, kyunki print har baar apne aap new line par chala jata hai. Ye C se alag hai, jahan new line ke liye \\n likhna padta tha. Python mein aap code likhte ho, run dabate ho, aur turant output dekhte ho.',
            english: 'Your first Python program is only one line: print("Hello, World"). Understand it. print is a function — a named job that writes something on the screen. Whatever is written inside the brackets is what gets printed. Double quotes " " mean that what is inside is text, not a number or a variable. If you write print(5), then 5 will be printed, because 5 is a number and has no quotes around it. If you write print("5"), then 5 will also be printed, but now it is text, not a number — the difference will show later when you do maths. In Python, no semicolon is put at the end of a line, and there are no curly brackets either. Every line is complete by itself. Look at the second program: after print("My name is Sid") comes print("I am learning Python"). Both will be printed on different lines, because print moves to a new line by itself every time. This is different from C, where you had to write \\n for a new line. In Python you write the code, press run, and see the output at once.',
            hindi: 'आपका पहला पायथन प्रोग्राम सिर्फ एक लाइन का है: print("Hello, World")। इसे समझिए। print एक function है — मतलब एक नाम वाला काम, जो स्क्रीन पर कुछ लिखता है। ब्रैकेट के अंदर जो लिखा है, वही छपता है। डबल कोट्स " " का मतलब है कि अंदर का टेक्स्ट है, कोई नंबर या variable नहीं। अगर आप print(5) लिखते हो, तो 5 छपेगा, क्योंकि 5 एक नंबर है और उसके आगे कोट्स नहीं हैं। अगर आप print("5") लिखते हो, तो भी 5 छपेगा, लेकिन अब वह टेक्स्ट है, नंबर नहीं — फर्क बाद में हिसाब करते वक्त दिखेगा। पायथन में लाइन के आखिर में सेमीकोलन नहीं लगता, और कर्ली ब्रैकेट भी नहीं होते। हर लाइन अपने आप में पूरी होती है। दूसरा प्रोग्राम देखिए: print("मेरा नाम सिड है") के बाद print("मैं पायथन सीख रहा हूँ") लिखा है। दोनों अलग-अलग लाइनों में छपेंगे, क्योंकि print हर बार अपने आप नई लाइन पर चला जाता है। यह सी से अलग है, जहाँ नई लाइन के लिए \\n लिखना पड़ता था। पायथन में आप कोड लिखते हो, run दबाते हो, और तुरंत आउटपुट देखते हो।',
          },
          code: {
            title: {
              hinglish: 'Pehla program: Hello, World',
              english: 'First program: Hello, World',
              hindi: 'पहला प्रोग्राम: हैलो, वर्ल्ड',
            },
            language: 'python',
            code: `print("Hello, World")`,
            output: 'Hello, World',
            note: {
              hinglish: 'Sirf ek line. C mein isi kaam ke liye 5 line chahiye thi — yehi Python ki simplicity hai.',
              english: 'Just one line. In C the same job needed 5 lines — that is the simplicity of Python.',
              hindi: 'सिर्फ एक लाइन। सी में इसी काम के लिए 5 लाइन चाहिए थी — यही पायथन की simplicity है।',
            },
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur ye hoti kyun hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और ये होती क्यों हैं',
          },
          body: {
            hinglish: 'Pehli galti: bracket band karna bhoolna. print("Hello" likhne par Python error dega, kyunki use samajh nahi aata ki print kahan khatm hota hai. Ye isliye hoti hai kyunki hum bolte waqt bracket ka dhyaan nahi rakhte, lekin Python ko har khula bracket band chahiye. Dusri galti: quotes mix karna. print("Hello\') mein shuruaat double quote se aur ant single quote se hua — Python confuse ho jayega. Dono taraf ek hi type ka quote use karo. Teesri galti: print ko Print ya PRINT likhna. Python case-sensitive hai — chhota p aur bada P alag hain. Chauthi galti: indentation ka galat use. Python mein space ka matlab hota hai, isliye line ke shuru mein extra space dena error de sakta hai. Ye galti isliye hoti hai kyunki dusri languages mein space se koi farq nahi padta, lekin Python mein padta hai. Paanchvi galti: text aur number ko mix karna, jaise print("Age: " + 20). Python text aur number ko + se nahi jodta — iske liye comma ya f-string use karni padti hai, jo agle article mein aayegi.',
            english: 'First mistake: forgetting to close a bracket. If you write print("Hello", Python will give an error, because it cannot tell where print ends. This happens because when we speak we do not keep track of brackets, but Python needs every open bracket to be closed. Second mistake: mixing quotes. In print("Hello\') the start uses a double quote and the end uses a single quote — Python will get confused. Use the same type of quote on both sides. Third mistake: writing print as Print or PRINT. Python is case-sensitive — a small p and a capital P are different. Fourth mistake: wrong use of indentation. In Python, space has meaning, so putting an extra space at the start of a line can give an error. This mistake happens because in other languages space makes no difference, but in Python it does. Fifth mistake: mixing text and a number, like print("Age: " + 20). Python does not join text and a number with + — for that you need a comma or an f-string, which will come in the next article.',
            hindi: 'पहली गलती: ब्रैकेट बंद करना भूलना। print("Hello" लिखने पर पायथन एरर देगा, क्योंकि उसे समझ नहीं आता कि print कहाँ खत्म होता है। यह इसलिए होती है क्योंकि हम बोलते वक्त ब्रैकेट का ध्यान नहीं रखते, लेकिन पायथन को हर खुला ब्रैकेट बंद चाहिए। दूसरी गलती: कोट्स मिलाना। print("Hello\') में शुरुआत डबल कोट से और अंत सिंगल कोट से हुआ — पायथन confuse हो जाएगा। दोनों तरफ एक ही तरह का कोट इस्तेमाल करो। तीसरी गलती: print को Print या PRINT लिखना। पायथन केस-सेंसिटिव है — छोटा p और बड़ा P अलग हैं। चौथी गलती: indentation का गलत इस्तेमाल। पायथन में स्पेस का मतलब होता है, इसलिए लाइन के शुरू में extra स्पेस देना एरर दे सकता है। यह गलती इसलिए होती है क्योंकि दूसरी भाषाओं में स्पेस से कोई फर्क नहीं पड़ता, लेकिन पायथन में पड़ता है। पाँचवीं गलती: टेक्स्ट और नंबर को मिलाना, जैसे print("Age: " + 20)। पायथन टेक्स्ट और नंबर को + से नहीं जोड़ता — इसके लिए comma या f-string इस्तेमाल करनी पड़ती है, जो अगले लेख में आएगी।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास स्थितियाँ',
          },
          body: {
            hinglish: 'Pehla edge case: khaali print(). print() bina kuch likhe sirf ek khaali line chhapta hai. Ye do sections ke beech gap dene ke liye kaam aata hai. Dusra edge case: print mein comma se alag cheezein. print("Age:", 20) dono ko ek space ke saath chhapta hai — text aur number dono chal jate hain, kyunki comma jodne ka kaam nahi karta, sirf alag-alag cheezein dikhata hai. Teesra edge case: ek hi line mein do print. Python mein har print apne aap nayi line par jata hai, isliye ek line mein do cheezein chhapne ke liye end=" " likhna padta hai: print("Chai", end=" ") ke baad agla print usi line mein aayega. Chautha edge case: quotes ke andar quotes. Agar aapko print karna hai He said "Hi", to bahar single quotes use karo: print(\'He said "Hi"\'). Ye isliye hai kyunki andar wale quotes bahar wale quotes se alag hone chahiye. Paanchva edge case: bahut lamba text. Python mein text kitna bhi lamba ho sakta hai, lekin code ko padhne ke liye use chhote hisson mein todna behtar hota hai.',
            english: 'First edge case: an empty print(). print() with nothing inside prints just an empty line. This is useful for giving a gap between two sections. Second edge case: different things separated by a comma in print. print("Age:", 20) prints both with one space between them — text and number both work, because a comma does not join things, it only shows separate things. Third edge case: two prints on one line. In Python every print goes to a new line by itself, so to print two things on one line you must write end=" ": after print("Chai", end=" "), the next print will come on the same line. Fourth edge case: quotes inside quotes. If you want to print He said "Hi", use single quotes outside: print(\'He said "Hi"\'). This is because the inner quotes must be different from the outer quotes. Fifth edge case: very long text. In Python, text can be as long as you want, but for reading the code it is better to break it into small parts.',
            hindi: 'पहली खास स्थिति: खाली print()। print() बिना कुछ लिखे सिर्फ एक खाली लाइन छापता है। यह दो sections के बीच gap देने के लिए काम आता है। दूसरी खास स्थिति: print में comma से अलग चीज़ें। print("Age:", 20) दोनों को एक स्पेस के साथ छापता है — टेक्स्ट और नंबर दोनों चल जाते हैं, क्योंकि comma जोड़ने का काम नहीं करता, सिर्फ अलग-अलग चीज़ें दिखाता है। तीसरी खास स्थिति: एक ही लाइन में दो print। पायथन में हर print अपने आप नई लाइन पर जाता है, इसलिए एक लाइन में दो चीज़ें छापने के लिए end=" " लिखना पड़ता है: print("Chai", end=" ") के बाद अगला print उसी लाइन में आएगा। चौथी खास स्थिति: कोट्स के अंदर कोट्स। अगर आपको He said "Hi" छापना है, तो बाहर सिंगल कोट्स इस्तेमाल करो: print(\'He said "Hi"\')। यह इसलिए है क्योंकि अंदर वाले कोट्स बाहर वाले कोट्स से अलग होने चाहिए। पाँचवीं खास स्थिति: बहुत लंबा टेक्स्ट। पायथन में टेक्स्ट कितना भी लंबा हो सकता है, लेकिन कोड को पढ़ने के लिए उसे छोटे हिस्सों में तोड़ना बेहतर होता है।',
          },
        },
        {
          heading: {
            hinglish: 'Agar aap ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर आप यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish: 'Socho aap print("Hello, World") ki jagah print("Namaste, Dosto") likh do. Screen par Namaste, Dosto dikhega — kyunki quotes ke andar ka text bilkul waise hi chhapta hai jaise likha hai. Ab socho aap print(5 + 3) likh do. Screen par 8 dikhega, 5 + 3 nahi — kyunki quotes nahi hain, isliye Python pehle hisaab karta hai aur phir result chhapta hai. Ab socho aap print("5 + 3") likh do. Ab screen par 5 + 3 dikhega, kyunki quotes ke andar ka text hisaab nahi banta, sirf text banta hai. Yehi quotes ka sabse bada farq hai. Ab socho aap print ke baad bracket hi hata do: print "Hello". Python error dega, kyunki Python 3 mein print ek function hai aur use bracket chahiye. Purane Python 2 mein bina bracket ke chalta tha, lekin ab nahi. Ab socho aap do print ek ke baad ek likh do. Dono alag lines mein chhapenge — yehi print ki default aadat hai.',
            english: 'Imagine you write print("Namaste, Dosto") instead of print("Hello, World"). Namaste, Dosto will appear on the screen — because the text inside the quotes is printed exactly as written. Now imagine you write print(5 + 3). The screen will show 8, not 5 + 3 — because there are no quotes, Python first does the maths and then prints the result. Now imagine you write print("5 + 3"). Now the screen will show 5 + 3, because text inside quotes does not become maths, it stays text. That is the biggest difference quotes make. Now imagine you remove the brackets after print: print "Hello". Python will give an error, because in Python 3 print is a function and needs brackets. In old Python 2 it worked without brackets, but not now. Now imagine you write two prints one after another. Both will be printed on different lines — that is the default habit of print.',
            hindi: 'सोचिए आप print("Hello, World") की जगह print("Namaste, Dosto") लिख दो। स्क्रीन पर Namaste, Dosto दिखेगा — क्योंकि कोट्स के अंदर का टेक्स्ट बिल्कुल वैसे ही छपता है जैसे लिखा है। अब सोचिए आप print(5 + 3) लिख दो। स्क्रीन पर 8 दिखेगा, 5 + 3 नहीं — क्योंकि कोट्स नहीं हैं, इसलिए पायथन पहले हिसाब करता है और फिर रिज़ल्ट छापता है। अब सोचिए आप print("5 + 3") लिख दो। अब स्क्रीन पर 5 + 3 दिखेगा, क्योंकि कोट्स के अंदर का टेक्स्ट हिसाब नहीं बनता, सिर्फ टेक्स्ट बनता है। यही कोट्स का सबसे बड़ा फर्क है। अब सोचिए आप print के बाद ब्रैकेट ही हटा दो: print "Hello"। पायथन एरर देगा, क्योंकि पायथन 3 में print एक function है और उसे ब्रैकेट चाहिए। पुराने पायथन 2 में बिना ब्रैकेट के चलता था, लेकिन अब नहीं। अब सोचिए आप दो print एक के बाद एक लिख दो। दोनों अलग लाइनों में छपेंगे — यही print की default आदत है।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'Python ek simple aur popular language hai jo English jaisa padhti hai. print() screen par likhta hai, quotes ke andar text hota hai, aur bina quotes ke hisaab hota hai. Python mein semicolon aur curly bracket nahi hote, aur har print apne aap nayi line par jata hai. Galtiyan normal hain — bracket band karna, quotes match karna, aur print ko chhote akshar mein likhna yaad rakho. Error message teacher hai, wo line number batata hai. Agle article mein hum seekhenge ki numbers aur text ko variables mein kaise rakha jata hai.',
            english: 'Python is a simple and popular language that reads like English. print() writes on the screen, text goes inside quotes, and maths happens without quotes. Python has no semicolons and no curly brackets, and every print moves to a new line by itself. Mistakes are normal — remember to close brackets, match quotes, and write print in small letters. An error message is a teacher, it tells you the line number. In the next article we will learn how numbers and text are kept in variables.',
            hindi: 'पायथन एक सरल और लोकप्रिय भाषा है जो अंग्रेज़ी जैसा पढ़ती है। print() स्क्रीन पर लिखता है, कोट्स के अंदर टेक्स्ट होता है, और बिना कोट्स के हिसाब होता है। पायथन में सेमीकोलन और कर्ली ब्रैकेट नहीं होते, और हर print अपने आप नई लाइन पर जाता है। गलतियाँ सामान्य हैं — ब्रैकेट बंद करना, कोट्स match करना, और print को छोटे अक्षर में लिखना याद रखो। एरर मैसेज शिक्षक है, वह लाइन नंबर बताता है। अगले लेख में हम सीखेंगे कि नंबर और टेक्स्ट को variables में कैसे रखा जाता है।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Python program kaise chalta hai',
          english: 'How a Python program runs',
          hindi: 'पायथन प्रोग्राम कैसे चलता है',
        },
        nodes: [
          { t: { hinglish: 'Aap code likhte ho', english: 'You write code', hindi: 'आप कोड लिखते हैं' } },
          { t: { hinglish: 'Interpreter line by line padhta hai', english: 'Interpreter reads line by line', hindi: 'इंटरप्रेटर लाइन दर लाइन पढ़ता है' } },
          { t: { hinglish: 'Har line turant chalti hai', english: 'Every line runs at once', hindi: 'हर लाइन तुरंत चलती है' } },
          { t: { hinglish: 'Screen par output', english: 'Output on screen', hindi: 'स्क्रीन पर आउटपुट' } },
        ],
      },
      codeExamples: [
        {
          title: {
            hinglish: 'Do line print karna',
            english: 'Printing two lines',
            hindi: 'दो लाइनें छापना',
          },
          language: 'python',
          code: `print("Mera naam Sid hai")
print("Main Python seekh raha hoon")`,
          output: 'Mera naam Sid hai\nMain Python seekh raha hoon',
          note: {
            hinglish: 'Har print apne aap nayi line par jata hai — \\n likhne ki zaroorat nahi.',
            english: 'Every print moves to a new line by itself — there is no need to write \\n.',
            hindi: 'हर print अपने आप नई लाइन पर जाता है — \\n लिखने की ज़रूरत नहीं।',
          },
        },
        {
          title: {
            hinglish: 'Hisaab print karna',
            english: 'Printing a calculation',
            hindi: 'हिसाब छापना',
          },
          language: 'python',
          code: `print(5 + 3)
print("5 + 3")`,
          output: '8\n5 + 3',
          note: {
            hinglish: 'Bina quotes ke Python pehle hisaab karta hai. Quotes ke andar sab text ban jata hai.',
            english: 'Without quotes, Python first does the maths. Inside quotes, everything becomes text.',
            hindi: 'बिना कोट्स के पायथन पहले हिसाब करता है। कोट्स के अंदर सब टेक्स्ट बन जाता है।',
          },
        },
      ],
      mcqs: [
        {
          q: {
            hinglish: 'Python mein screen par likhne ke liye kaun sa function use hota hai?',
            english: 'Which function is used to write on the screen in Python?',
            hindi: 'पायथन में स्क्रीन पर लिखने के लिए कौन सा function इस्तेमाल होता है?',
          },
          opts: [
            { hinglish: 'print()', english: 'print()', hindi: 'print()' },
            { hinglish: 'printf()', english: 'printf()', hindi: 'printf()' },
            { hinglish: 'echo()', english: 'echo()', hindi: 'echo()' },
            { hinglish: 'show()', english: 'show()', hindi: 'show()' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Python mein print() hi screen par likhta hai. printf() C ka function hai.',
            english: 'In Python, only print() writes on the screen. printf() is a C function.',
            hindi: 'पायथन में print() ही स्क्रीन पर लिखता है। printf() सी का function है।',
          },
        },
        {
          q: {
            hinglish: 'print(5 + 3) ka output kya hoga?',
            english: 'What will print(5 + 3) output?',
            hindi: 'print(5 + 3) का आउटपुट क्या होगा?',
          },
          opts: [
            { hinglish: '8', english: '8', hindi: '8' },
            { hinglish: '5 + 3', english: '5 + 3', hindi: '5 + 3' },
            { hinglish: '53', english: '53', hindi: '53' },
            { hinglish: 'Error', english: 'Error', hindi: 'एरर' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Quotes nahi hain, isliye Python pehle 5 + 3 ka hisaab karta hai aur 8 chhapta hai.',
            english: 'There are no quotes, so Python first works out 5 + 3 and prints 8.',
            hindi: 'कोट्स नहीं हैं, इसलिए पायथन पहले 5 + 3 का हिसाब करता है और 8 छापता है।',
          },
        },
        {
          q: {
            hinglish: 'Is code mein bug kya hai? Print("Hello")',
            english: 'What is the bug in this code? Print("Hello")',
            hindi: 'इस कोड में बग क्या है? Print("Hello")',
          },
          opts: [
            { hinglish: 'Print bada P se likha hai — Python mein print chhota hota hai', english: 'Print is written with a capital P — in Python print is small', hindi: 'Print बड़ा P से लिखा है — पायथन में print छोटा होता है' },
            { hinglish: 'Quotes galat hain', english: 'The quotes are wrong', hindi: 'कोट्स गलत हैं' },
            { hinglish: 'Bracket missing hai', english: 'The bracket is missing', hindi: 'ब्रैकेट गायब है' },
            { hinglish: 'Koi bug nahi hai', english: 'There is no bug', hindi: 'कोई बग नहीं है' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Python case-sensitive hai. Print aur print do alag naam hain — sirf chhota print kaam karega.',
            english: 'Python is case-sensitive. Print and print are two different names — only the small print will work.',
            hindi: 'पायथन केस-सेंसिटिव है। Print और print दो अलग नाम हैं — सिर्फ छोटा print काम करेगा।',
          },
        },
        {
          q: {
            hinglish: 'print("Age:", 20) ka output kya hoga?',
            english: 'What will print("Age:", 20) output?',
            hindi: 'print("Age:", 20) का आउटपुट क्या होगा?',
          },
          opts: [
            { hinglish: 'Age: 20', english: 'Age: 20', hindi: 'Age: 20' },
            { hinglish: 'Age:20', english: 'Age:20', hindi: 'Age:20' },
            { hinglish: 'Error', english: 'Error', hindi: 'एरर' },
            { hinglish: 'Age:', english: 'Age:', hindi: 'Age:' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Comma se alag cheezein ek space ke saath chhapti hain, isliye Age: aur 20 ke beech mein ek space aata hai.',
            english: 'Things separated by a comma are printed with one space between them, so one space comes between Age: and 20.',
            hindi: 'Comma से अलग चीज़ें एक स्पेस के साथ छपती हैं, इसलिए Age: और 20 के बीच में एक स्पेस आता है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Apna pehla program badlo',
          english: 'Change your first program',
          hindi: 'अपना पहला प्रोग्राम बदलो',
        },
        task: {
          hinglish: 'Starter code ko chalao. Phir apna naam aur apne sheher ka naam print karne wali do line jodo. Done tab mana jayega jab output mein 3 lines hon: pehli line Hello, World, dusri mein aapka naam, teesri mein aapka sheher.',
          english: 'Run the starter code. Then add two lines that print your name and the name of your city. You are done when the output has 3 lines: the first line Hello, World, the second your name, and the third your city.',
          hindi: 'Starter कोड को चलाएँ। फिर अपना नाम और अपने शहर का नाम छापने वाली दो लाइनें जोड़ें। आप तब सफल हैं जब आउटपुट में 3 लाइनें हों: पहली लाइन Hello, World, दूसरी में आपका नाम, तीसरी में आपका शहर।',
        },
        language: 'python',
        starter: `print("Hello, World")`,
        expected: 'Hello, World\n(plus your name and city on two more lines)',
      },
    },
    {
      id: 'py-variables',
      subjectId: 'python-programming',
      title: {
        hinglish: 'Variables aur data types',
        english: 'Variables and Data Types',
        hindi: 'वेरिएबल और डेटा टाइप',
      },
      summary: {
        hinglish: 'Python mein dabbe (variables) kaise bante hain, int, float, str aur bool kya hain, aur f-string se values ko kaise chhapte hain.',
        english: 'How boxes (variables) are made in Python, what int, float, str, and bool are, and how to print values with an f-string.',
        hindi: 'पायथन में डिब्बे (वेरिएबल) कैसे बनते हैं, int, float, str और bool क्या हैं, और f-string से वैल्यू को कैसे छापते हैं।',
      },
      readMinutes: 12,
      sections: [
        {
          heading: {
            hinglish: 'Variable kya hai?',
            english: 'What is a variable?',
            hindi: 'वेरिएबल क्या है?',
          },
          body: {
            hinglish: 'Variable ek naam wala dabba hai jisme computer ek value rakhta hai. Python mein dabba banana bahut simple hai: age = 20 likho, bas ho gaya. C mein aapko pehle batana padta tha ki dabbe mein kya aayega — int age = 20. Python mein ye batane ki zaroorat nahi hai, kyunki Python khud dekh leta hai ki value kya hai. 20 dekh kar Python samajh jata hai ki ye int hai, 49.99 dekh kar samajh jata hai ki ye float hai, aur "Sid" dekh kar samajh jata hai ki ye str hai, matlab string. Ise dynamically typed kehte hain. Python mein chaar basic types hote hain: int (poora number, jaise 20), float (decimal number, jaise 49.99), str (text, jaise "Sid"), aur bool (sach ya jhooth, True ya False). Ek hi variable mein pehle number aur baad mein text bhi rakha ja sakta hai — Python mana nahi karta, lekin ye achhi aadat nahi hai, kyunki padhne wala confuse ho jata hai. Variable ka naam hamesha clear hona chahiye: age, price, name jaise naam samajh mein aate hain, lekin x, a, b jaise naam samajh mein nahi aate.',
            english: 'A variable is a named box in which the computer keeps a value. In Python, making a box is very simple: write age = 20, and it is done. In C you had to first say what would go in the box — int age = 20. In Python there is no need to say that, because Python itself sees what the value is. Seeing 20, Python understands it is an int; seeing 49.99, it understands it is a float; and seeing "Sid", it understands it is a str, meaning a string. This is called dynamically typed. Python has four basic types: int (a whole number, like 20), float (a decimal number, like 49.99), str (text, like "Sid"), and bool (true or false, True or False). One variable can first hold a number and later hold text — Python will not stop you, but it is not a good habit, because the reader gets confused. The name of a variable must always be clear: names like age, price, and name make sense, but names like x, a, and b do not.',
            hindi: 'वेरिएबल एक नाम वाला डिब्बा है जिसमें कंप्यूटर एक वैल्यू रखता है। पायथन में डिब्बा बनाना बहुत सरल है: age = 20 लिखो, बस हो गया। सी में आपको पहले बताना पड़ता था कि डिब्बे में क्या आएगा — int age = 20। पायथन में यह बताने की ज़रूरत नहीं है, क्योंकि पायथन खुद देख लेता है कि वैल्यू क्या है। 20 देख कर पायथन समझ जाता है कि यह int है, 49.99 देख कर समझ जाता है कि यह float है, और "Sid" देख कर समझ जाता है कि यह str है, मतलब string। इसे dynamically typed कहते हैं। पायथन में चार बुनियादी टाइप होते हैं: int (पूरा नंबर, जैसे 20), float (दशमलव नंबर, जैसे 49.99), str (टेक्स्ट, जैसे "Sid"), और bool (सच या झूठ, True या False)। एक ही variable में पहले नंबर और बाद में टेक्स्ट भी रखा जा सकता है — पायथन मना नहीं करता, लेकिन यह अच्छी आदत नहीं है, क्योंकि पढ़ने वाला confuse हो जाता है। Variable का नाम हमेशा clear होना चाहिए: age, price, name जैसे नाम समझ में आते हैं, लेकिन x, a, b जैसे नाम समझ में नहीं आते।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example: school ka register',
            english: 'Real-life example: a school register',
            hindi: 'असल ज़िंदगी का उदाहरण: स्कूल का रजिस्टर',
          },
          body: {
            hinglish: 'School ke register mein har student ki ek line hoti hai: naam, roll number, fees, aur pass hua ya nahi. Naam text hai — "Sid". Roll number poora number hai — 12. Fees decimal hai — 1250.50. Pass hua ya nahi, ye haan ya na hai — True ya False. Register mein har column ka ek type hota hai, aur teacher galti se naam wale column mein number nahi likhti. Python mein bhi aisa hi hai: har value ka ek type hota hai, aur type se pata chalta hai ki us value ke saath kya kiya ja sakta hai. Number ko joda ja sakta hai, text ko joda nahi ja sakta — "Sid" + "Kumar" se "SidKumar" banta hai, lekin "Sid" + 5 se error aata hai. bool ka use aage if mein hoga: agar pass True hai to certificate do, nahi to mat do. Register ka ek aur lesson hai: ek hi cheez ko do jagah alag tareeke se mat likho. Agar fees ek jagah 1250.50 hai aur dusri jagah 1250 hai, to hisaab gadbad ho jayega. Isiliye ek value ko ek variable mein rakho aur har jagah usi ko use karo.',
            english: 'In a school register, every student has one line: name, roll number, fees, and whether they passed or not. The name is text — "Sid". The roll number is a whole number — 12. The fees are a decimal — 1250.50. Whether they passed or not is yes or no — True or False. Every column in the register has a type, and the teacher never by mistake writes a number in the name column. In Python it is the same: every value has a type, and the type tells you what can be done with that value. Numbers can be added, text cannot be added in the same way — "Sid" + "Kumar" makes "SidKumar", but "Sid" + 5 gives an error. bool will be used later in if: if pass is True, give the certificate, otherwise do not. The register has one more lesson: do not write the same thing in two places in different ways. If the fees are 1250.50 in one place and 1250 in another, the accounts will go wrong. That is why you should keep one value in one variable and use that same one everywhere.',
            hindi: 'स्कूल के रजिस्टर में हर छात्र की एक लाइन होती है: नाम, रोल नंबर, फीस, और पास हुआ या नहीं। नाम टेक्स्ट है — "Sid"। रोल नंबर पूरा नंबर है — 12। फीस दशमलव है — 1250.50। पास हुआ या नहीं, यह हाँ या ना है — True या False। रजिस्टर में हर कॉलम का एक टाइप होता है, और शिक्षिका गलती से नाम वाले कॉलम में नंबर नहीं लिखती। पायथन में भी ऐसा ही है: हर वैल्यू का एक टाइप होता है, और टाइप से पता चलता है कि उस वैल्यू के साथ क्या किया जा सकता है। नंबर को जोड़ा जा सकता है, टेक्स्ट को जोड़ा नहीं जा सकता — "Sid" + "Kumar" से "SidKumar" बनता है, लेकिन "Sid" + 5 से एरर आता है। bool का इस्तेमाल आगे if में होगा: अगर pass True है तो सर्टिफिकेट दो, नहीं तो मत दो। रजिस्टर का एक और lesson है: एक ही चीज़ को दो जगह अलग तरीके से मत लिखो। अगर फीस एक जगह 1250.50 है और दूसरी जगह 1250 है, तो हिसाब गड़बड़ हो जाएगा। इसीलिए एक वैल्यू को एक variable में रखो और हर जगह उसी को इस्तेमाल करो।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step: teen types, ek program',
            english: 'Step-by-step: three types, one program',
            hindi: 'चरण-दर-चरण: तीन टाइप, एक प्रोग्राम',
          },
          body: {
            hinglish: 'Neeche wale program mein teen variables hain. Pehli line name = "Sid" ek string rakhti hai. Dusri line age = 20 ek int rakhti hai. Teesri line price = 49.99 ek float rakhti hai. Phir print mein ek nayi cheez hai: f-string. f"Mera naam {name} hai" mein f ka matlab hai formatted, aur curly bracket { } ke andar variable ka naam likhne par uski value wahan aa jati hai. Ye C ke %d aur %f se bahut aasan hai, kyunki aapko type yaad rakhne ki zaroorat nahi hai. Dusri line print(f"Age: {age}") mein age ki value 20 aa jayegi. Teesri line mein price ki value aayegi. Aakhri line mein ek aur kaam hai: age = age + 1. Python pehle purani value 20 padhta hai, usme 1 jodta hai, aur 21 ko wapas age mein rakh deta hai. Yehi variable ki khaasiyat hai — dabbe ke andar ki cheez badli ja sakti hai, lekin dabbe ka naam wahi rehta hai. Program ko chalao aur dekho: pehle 20 chhapega, phir 21.',
            english: 'In the program below there are three variables. The first line, name = "Sid", keeps a string. The second line, age = 20, keeps an int. The third line, price = 49.99, keeps a float. Then in print there is something new: an f-string. In f"My name is {name}", f means formatted, and writing a variable name inside curly brackets { } puts its value there. This is much easier than the %d and %f of C, because you do not need to remember the type. In the second line, print(f"Age: {age}"), the value of age, 20, will come. In the third line, the value of price will come. The last line does one more job: age = age + 1. Python first reads the old value 20, adds 1 to it, and puts 21 back in age. That is the speciality of a variable — the thing inside the box can change, but the name of the box stays the same. Run the program and see: first 20 will be printed, then 21.',
            hindi: 'नीचे वाले प्रोग्राम में तीन वेरिएबल हैं। पहली लाइन name = "Sid" एक string रखती है। दूसरी लाइन age = 20 एक int रखती है। तीसरी लाइन price = 49.99 एक float रखती है। फिर print में एक नई चीज़ है: f-string। f"मेरा नाम {name} है" में f का मतलब है formatted, और curly bracket { } के अंदर variable का नाम लिखने पर उसकी वैल्यू वहाँ आ जाती है। यह सी के %d और %f से बहुत आसान है, क्योंकि आपको टाइप याद रखने की ज़रूरत नहीं है। दूसरी लाइन print(f"Age: {age}") में age की वैल्यू 20 आ जाएगी। तीसरी लाइन में price की वैल्यू आएगी। आखिरी लाइन में एक और काम है: age = age + 1। पायथन पहले पुरानी वैल्यू 20 पढ़ता है, उसमें 1 जोड़ता है, और 21 को वापस age में रख देता है। यही variable की खासियत है — डिब्बे के अंदर की चीज़ बदली जा सकती है, लेकिन डिब्बे का नाम वही रहता है। प्रोग्राम को चलाओ और देखो: पहले 20 छपेगा, फिर 21।',
          },
          code: {
            title: {
              hinglish: 'Teen types aur f-string',
              english: 'Three types and an f-string',
              hindi: 'तीन टाइप और f-string',
            },
            language: 'python',
            code: `name = "Sid"
age = 20
price = 49.99
print(f"Mera naam {name} hai")
print(f"Age: {age}")
print(f"Price: {price}")
age = age + 1
print(f"Ab age: {age}")`,
            output: 'Mera naam Sid hai\nAge: 20\nPrice: 49.99\nAb age: 21',
            note: {
              hinglish: 'f-string mein { } ke andar variable ka naam likho — uski value wahan aa jayegi, type ki chinta kiye bina.',
              english: 'In an f-string, write the variable name inside { } — its value will come there, without worrying about the type.',
              hindi: 'f-string में { } के अंदर variable का नाम लिखो — उसकी वैल्यू वहाँ आ जाएगी, टाइप की चिंता किए बिना।',
            },
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur ye hoti kyun hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और ये होती क्यों हैं',
          },
          body: {
            hinglish: 'Pehli galti: text aur number ko + se jodna. "Age: " + 20 likhne par Python error dega, kyunki + ka matlab text ke liye "chipkana" aur number ke liye "jodna" hai, aur Python ko samajh nahi aata ki aap kya chahte ho. Ilaaj hai f-string ya comma use karna. Dusri galti: = aur == ko mix karna. age = 20 ka matlab hai "age mein 20 rakho", lekin age == 20 ka matlab hai "kya age 20 ke barabar hai?" Teesri galti: variable ko use karne se pehle banana bhoolna. print(score) likhne par agar score kabhi banaya hi nahi gaya, to NameError aayega. Ye isliye hota hai kyunki Python ko pata hi nahi ki score kya hai. Chauthi galti: naam mein space ya number se shuruaat, jaise my age = 20 ya 1st = 5. Python mein naam hamesha akshar ya underscore se shuru hota hai. Paanchvi galti: True aur False ko true aur false likhna. Python mein ye bade akshar se shuru hote hain — true likhne par NameError aayega, kyunki Python use ek variable samjhega.',
            english: 'First mistake: joining text and a number with +. Writing "Age: " + 20 will give an error in Python, because for text + means "stick together" and for a number it means "add", and Python cannot tell what you want. The cure is to use an f-string or a comma. Second mistake: mixing up = and ==. age = 20 means "put 20 in age", but age == 20 means "is age equal to 20?" Third mistake: forgetting to make a variable before using it. If you write print(score) and score was never made, a NameError will come. This happens because Python does not even know what score is. Fourth mistake: a space in a name or starting with a number, like my age = 20 or 1st = 5. In Python a name must always start with a letter or an underscore. Fifth mistake: writing True and False as true and false. In Python these start with a capital letter — writing true will give a NameError, because Python will treat it as a variable.',
            hindi: 'पहली गलती: टेक्स्ट और नंबर को + से जोड़ना। "Age: " + 20 लिखने पर पायथन एरर देगा, क्योंकि + का मतलब टेक्स्ट के लिए "चिपकाना" और नंबर के लिए "जोड़ना" है, और पायथन को समझ नहीं आता कि आप क्या चाहते हो। इलाज है f-string या comma इस्तेमाल करना। दूसरी गलती: = और == को मिलाना। age = 20 का मतलब है "age में 20 रखो", लेकिन age == 20 का मतलब है "क्या age 20 के बराबर है?" तीसरी गलती: variable को इस्तेमाल करने से पहले बनाना भूलना। print(score) लिखने पर अगर score कभी बनाया ही नहीं गया, तो NameError आएगा। यह इसलिए होता है क्योंकि पायथन को पता ही नहीं कि score क्या है। चौथी गलती: नाम में स्पेस या नंबर से शुरुआत, जैसे my age = 20 या 1st = 5। पायथन में नाम हमेशा अक्षर या अंडरस्कोर से शुरू होता है। पाँचवीं गलती: True और False को true और false लिखना। पायथन में ये बड़े अक्षर से शुरू होते हैं — true लिखने पर NameError आएगा, क्योंकि पायथन उसे एक variable समझेगा।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास स्थितियाँ',
          },
          body: {
            hinglish: 'Pehla edge case: float ka hisaab. 0.1 + 0.2 Python mein 0.30000000000000004 deta hai, bilkul 0.3 nahi. Ye isliye hota hai kyunki computer decimal ko binary mein badalte waqt thoda sa kho deta hai. Isliye paise ka hisaab float se nahi, paise mein int se karna chahiye. Dusra edge case: type badalna. int("20") string ko number bana deta hai, aur str(20) number ko string bana deta hai. Lekin int("Sid") error dega, kyunki "Sid" number nahi hai. Teesra edge case: bool asal mein number hai. True ki value 1 hoti hai aur False ki 0, isliye True + True = 2 hota hai. Ye jaan-na zaroori hai, lekin code mein bool ko number ki tarah use karna achhi aadat nahi hai. Chautha edge case: ek hi line mein kai variables. a, b = 5, 10 likhne par a mein 5 aur b mein 10 aa jata hai. Ye shortcut hai, lekin beginners ke liye alag-alag line likhna zyada clear hota hai.',
            english: 'First edge case: maths with a float. 0.1 + 0.2 gives 0.30000000000000004 in Python, not exactly 0.3. This happens because the computer loses a little bit when it changes a decimal into binary. That is why money should not be counted with a float, but in paise as an int. Second edge case: changing type. int("20") turns a string into a number, and str(20) turns a number into a string. But int("Sid") will give an error, because "Sid" is not a number. Third edge case: a bool is really a number. The value of True is 1 and of False is 0, so True + True = 2. It is important to know this, but using a bool like a number in code is not a good habit. Fourth edge case: many variables in one line. Writing a, b = 5, 10 puts 5 in a and 10 in b. This is a shortcut, but for beginners writing separate lines is clearer.',
            hindi: 'पहली खास स्थिति: float का हिसाब। 0.1 + 0.2 पायथन में 0.30000000000000004 देता है, बिल्कुल 0.3 नहीं। यह इसलिए होता है क्योंकि कंप्यूटर दशमलव को बाइनरी में बदलते वक्त थोड़ा सा खो देता है। इसलिए पैसे का हिसाब float से नहीं, पैसे में int से करना चाहिए। दूसरी खास स्थिति: टाइप बदलना। int("20") string को नंबर बना देता है, और str(20) नंबर को string बना देता है। लेकिन int("Sid") एरर देगा, क्योंकि "Sid" नंबर नहीं है। तीसरी खास स्थिति: bool असल में नंबर है। True की वैल्यू 1 होती है और False की 0, इसलिए True + True = 2 होता है। यह जानना ज़रूरी है, लेकिन कोड में bool को नंबर की तरह इस्तेमाल करना अच्छी आदत नहीं है। चौथी खास स्थिति: एक ही लाइन में कई variables। a, b = 5, 10 लिखने पर a में 5 और b में 10 आ जाता है। यह shortcut है, लेकिन beginners के लिए अलग-अलग लाइन लिखना ज़्यादा clear होता है।',
          },
        },
        {
          heading: {
            hinglish: 'Agar aap ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर आप यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish: 'Socho aap age = 20 ki jagah age = "20" kar do. Ab age ek string hai, number nahi. age + 1 likhne par error aayega, kyunki string mein number nahi joda ja sakta. Lekin age + " saal" likhne par "20 saal" ban jayega, kyunki dono string hain. Ab socho aap price = 49.99 ki jagah price = 50 kar do. Ab price int hai, aur print karne par 50 dikhega, 50.0 nahi. Ab socho aap f-string ki jagah comma use karo: print("Age:", age). Output wahi hoga — Age: 20 — lekin f-string mein aap text ke beech mein value daal sakte ho, comma mein nahi. Ab socho aap name = "Sid" ke baad name = "Siddharth" kar do. Pehla naam hamesha ke liye chala jayega, kyunki dabbe mein sirf ek cheez aati hai. Ab socho aap type(age) print karo. Output <class \'int\'> dikhega — ye Python ka tareeka hai ye batane ka ki dabbe mein kis type ki cheez hai.',
            english: 'Imagine you write age = "20" instead of age = 20. Now age is a string, not a number. Writing age + 1 will give an error, because a number cannot be added to a string. But writing age + " saal" will make "20 saal", because both are strings. Now imagine you write price = 50 instead of price = 49.99. Now price is an int, and printing it will show 50, not 50.0. Now imagine you use a comma instead of an f-string: print("Age:", age). The output will be the same — Age: 20 — but in an f-string you can put a value in the middle of text, and with a comma you cannot. Now imagine that after name = "Sid" you write name = "Siddharth". The first name will be gone forever, because only one thing fits in a box. Now imagine you print type(age). The output will be <class \'int\'> — that is Python\'s way of telling you what type of thing is in the box.',
            hindi: 'सोचिए आप age = 20 की जगह age = "20" कर दो। अब age एक string है, नंबर नहीं। age + 1 लिखने पर एरर आएगा, क्योंकि string में नंबर नहीं जोड़ा जा सकता। लेकिन age + " saal" लिखने पर "20 saal" बन जाएगा, क्योंकि दोनों string हैं। अब सोचिए आप price = 49.99 की जगह price = 50 कर दो। अब price int है, और print करने पर 50 दिखेगा, 50.0 नहीं। अब सोचिए आप f-string की जगह comma इस्तेमाल करो: print("Age:", age)। आउटपुट वही होगा — Age: 20 — लेकिन f-string में आप टेक्स्ट के बीच में वैल्यू डाल सकते हो, comma में नहीं। अब सोचिए आप name = "Sid" के बाद name = "Siddharth" कर दो। पहला नाम हमेशा के लिए चला जाएगा, क्योंकि डिब्बे में सिर्फ एक चीज़ आती है। अब सोचिए आप type(age) print करो। आउटपुट <class \'int\'> दिखेगा — यह पायथन का तरीका है यह बताने का कि डिब्बे में किस टाइप की चीज़ है।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'Python mein variable banana simple hai: naam = value likho, type Python khud samajh leta hai. int poora number, float decimal number, str text, bool True ya False. f-string se value ko text ke beech mein chhap sakte ho: f"Age: {age}". Text aur number ko + se mat jodo — f-string ya comma use karo. Variable ko use karne se pehle banana zaroori hai, nahi to NameError aayega. float ka hisaab bilkul sahi nahi hota, isliye paise int mein rakho. Agle article mein hum seekhenge ki program khud faisla kaise karta hai — if-else.',
            english: 'In Python, making a variable is simple: write name = value, and Python understands the type by itself. int is a whole number, float is a decimal number, str is text, bool is True or False. With an f-string you can print a value in the middle of text: f"Age: {age}". Do not join text and a number with + — use an f-string or a comma. A variable must be made before you use it, otherwise a NameError will come. Maths with a float is not exactly right, so keep money as an int. In the next article we will learn how a program makes its own decisions — if-else.',
            hindi: 'पायथन में variable बनाना सरल है: नाम = value लिखो, टाइप पायथन खुद समझ लेता है। int पूरा नंबर, float दशमलव नंबर, str टेक्स्ट, bool True या False। f-string से वैल्यू को टेक्स्ट के बीच में छाप सकते हो: f"Age: {age}"। टेक्स्ट और नंबर को + से मत जोड़ो — f-string या comma इस्तेमाल करो। Variable को इस्तेमाल करने से पहले बनाना ज़रूरी है, नहीं तो NameError आएगा। float का हिसाब बिल्कुल सही नहीं होता, इसलिए पैसे int में रखो। अगले लेख में हम सीखेंगे कि प्रोग्राम खुद फैसला कैसे करता है — if-else।',
          },
        },
      ],
      diagram: {
        kind: 'boxes',
        title: {
          hinglish: 'Memory mein teen dabbe (Python)',
          english: 'Three boxes in memory (Python)',
          hindi: 'मेमोरी में तीन डिब्बे (पायथन)',
        },
        nodes: [
          { t: { hinglish: 'name (str)', english: 'name (str)', hindi: 'name (str)' }, s: { hinglish: '"Sid"', english: '"Sid"', hindi: '"Sid"' } },
          { t: { hinglish: 'age (int)', english: 'age (int)', hindi: 'age (int)' }, s: { hinglish: '20', english: '20', hindi: '20' } },
          { t: { hinglish: 'price (float)', english: 'price (float)', hindi: 'price (float)' }, s: { hinglish: '49.99', english: '49.99', hindi: '49.99' } },
        ],
      },
      codeExamples: [
        {
          title: {
            hinglish: 'Type check karna',
            english: 'Checking the type',
            hindi: 'टाइप जाँचना',
          },
          language: 'python',
          code: `print(type(20))
print(type(49.99))
print(type("Sid"))
print(type(True))`,
          output: "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>",
          note: {
            hinglish: 'type() batata hai ki value kis type ki hai. Ye debugging mein bahut kaam aata hai.',
            english: 'type() tells you what type a value is. This is very useful in debugging.',
            hindi: 'type() बताता है कि वैल्यू किस टाइप की है। यह debugging में बहुत काम आता है।',
          },
        },
      ],
      mcqs: [
        {
          q: {
            hinglish: 'Python mein variable banane ke liye kya likhna padta hai?',
            english: 'What must you write to make a variable in Python?',
            hindi: 'पायथन में variable बनाने के लिए क्या लिखना पड़ता है?',
          },
          opts: [
            { hinglish: 'Sirf naam = value', english: 'Just name = value', hindi: 'सिर्फ नाम = value' },
            { hinglish: 'int naam = value', english: 'int name = value', hindi: 'int नाम = value' },
            { hinglish: 'var naam = value', english: 'var name = value', hindi: 'var नाम = value' },
            { hinglish: 'let naam = value', english: 'let name = value', hindi: 'let नाम = value' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Python mein type likhne ki zaroorat nahi hai — naam = value likhte hi variable ban jata hai aur type khud samajh liya jata hai.',
            english: 'In Python there is no need to write the type — writing name = value makes the variable, and the type is understood by itself.',
            hindi: 'पायथन में टाइप लिखने की ज़रूरत नहीं है — नाम = value लिखते ही variable बन जाता है और टाइप खुद समझ लिया जाता है।',
          },
        },
        {
          q: {
            hinglish: 'Is code ka output kya hoga? age = 20; age = age + 1; print(age)',
            english: 'What will this code print? age = 20; age = age + 1; print(age)',
            hindi: 'इस कोड का आउटपुट क्या होगा? age = 20; age = age + 1; print(age)',
          },
          opts: [
            { hinglish: '21', english: '21', hindi: '21' },
            { hinglish: '20', english: '20', hindi: '20' },
            { hinglish: '201', english: '201', hindi: '201' },
            { hinglish: 'Error', english: 'Error', hindi: 'एरर' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Python pehle purani value 20 padhta hai, usme 1 jodta hai, aur 21 ko wapas age mein rakh deta hai.',
            english: 'Python first reads the old value 20, adds 1 to it, and puts 21 back in age.',
            hindi: 'पायथन पहले पुरानी वैल्यू 20 पढ़ता है, उसमें 1 जोड़ता है, और 21 को वापस age में रख देता है।',
          },
        },
        {
          q: {
            hinglish: 'print("Age: " + 20) chalane par kya hoga?',
            english: 'What happens when you run print("Age: " + 20)?',
            hindi: 'print("Age: " + 20) चलाने पर क्या होगा?',
          },
          opts: [
            { hinglish: 'Error — text aur number + se nahi judte', english: 'Error — text and a number do not join with +', hindi: 'एरर — टेक्स्ट और नंबर + से नहीं जुड़ते' },
            { hinglish: 'Age: 20 chhapega', english: 'Age: 20 will be printed', hindi: 'Age: 20 छपेगा' },
            { hinglish: 'Age:20 chhapega', english: 'Age:20 will be printed', hindi: 'Age:20 छपेगा' },
            { hinglish: 'Kuch nahi chhapega', english: 'Nothing will be printed', hindi: 'कुछ नहीं छपेगा' },
          ],
          ans: 0,
          expl: {
            hinglish: '+ text ko text se chipkata hai, number ko number se jodta hai — dono ko ek saath nahi. f-string ya comma use karo.',
            english: '+ sticks text to text and adds number to number — not both together. Use an f-string or a comma.',
            hindi: '+ टेक्स्ट को टेक्स्ट से चिपकाता है, नंबर को नंबर से जोड़ता है — दोनों को एक साथ नहीं। f-string या comma इस्तेमाल करो।',
          },
        },
        {
          q: {
            hinglish: 'type(49.99) ka result kya hoga?',
            english: 'What will type(49.99) give?',
            hindi: 'type(49.99) का रिज़ल्ट क्या होगा?',
          },
          opts: [
            { hinglish: "<class 'float'>", english: "<class 'float'>", hindi: "<class 'float'>" },
            { hinglish: "<class 'int'>", english: "<class 'int'>", hindi: "<class 'int'>" },
            { hinglish: "<class 'str'>", english: "<class 'str'>", hindi: "<class 'str'>" },
            { hinglish: "<class 'number'>", english: "<class 'number'>", hindi: "<class 'number'>" },
          ],
          ans: 0,
          expl: {
            hinglish: '49.99 mein decimal point hai, isliye ye float hai. Poora number int hota, aur quotes wala text str hota.',
            english: '49.99 has a decimal point, so it is a float. A whole number would be an int, and text in quotes would be a str.',
            hindi: '49.99 में दशमलव बिंदु है, इसलिए यह float है। पूरा नंबर int होता, और कोट्स वाला टेक्स्ट str होता।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Bill banao f-string se',
          english: 'Make a bill with an f-string',
          hindi: 'f-string से बिल बनाओ',
        },
        task: {
          hinglish: 'Starter code ko chalao. Phir ek naya variable total = price * qty banao aur use f-string se print karo. Done tab mana jayega jab output ki aakhri line "Total: 100" ho.',
          english: 'Run the starter code. Then make a new variable total = price * qty and print it with an f-string. You are done when the last line of the output is "Total: 100".',
          hindi: 'Starter कोड को चलाएँ। फिर एक नया variable total = price * qty बनाएँ और उसे f-string से print करें। आप तब सफल हैं जब आउटपुट की आखिरी लाइन "Total: 100" हो।',
        },
        language: 'python',
        starter: `price = 25
qty = 4
print(f"Price: {price}")
print(f"Qty: {qty}")`,
        expected: 'Price: 25\nQty: 4\nTotal: 100',
      },
    },
    {
      id: 'py-if-else',
      subjectId: 'python-programming',
      title: {
        hinglish: 'If-else — program khud faisla kare',
        english: 'If-Else — Let the Program Decide',
        hindi: 'If-else — प्रोग्राम खुद फैसला करे',
      },
      summary: {
        hinglish: 'Python mein if, elif aur else kaise likhe jate hain, indentation ka kya role hai, aur train ticket aur exam jaise examples.',
        english: 'How if, elif, and else are written in Python, what role indentation plays, with examples like a train ticket and an exam.',
        hindi: 'पायथन में if, elif और else कैसे लिखे जाते हैं, indentation की क्या भूमिका है, और ट्रेन टिकट और परीक्षा जैसे उदाहरण।',
      },
      readMinutes: 13,
      sections: [
        {
          heading: {
            hinglish: 'If kya hai?',
            english: 'What is if?',
            hindi: 'If क्या है?',
          },
          body: {
            hinglish: 'Ab tak ke program ek hi raaste par chalte the — upar se neeche, har line. Lekin asli zindagi mein hum har baar ek hi kaam nahi karte. Agar baarish ho rahi hai to chhata lete hain, nahi to nahi lete. Program mein bhi aisa hi hota hai: if ek condition check karta hai, aur agar condition sach hai to ek block chalata hai, nahi to use chhod deta hai. Python mein if aise likha jata hai: if age >= 18: — dhyaan do, line ke aakhir mein colon : lagta hai, aur agle line mein 4 space ka indentation hota hai. Ye indentation hi batata hai ki kaun si lines if ke andar hain. C mein is kaam ke liye curly bracket hote the, Python mein space hote hain. elif ka matlab hai "pehli condition jhooth hai, to dusri check karo" — ye C ke else if ka chhota roop hai. else ka matlab hai "agar sab jhooth hai to ye karo". Comparison operators ye hain: == (barabar), != (barabar nahi), > (bada), < (chhota), >= (bada ya barabar), <= (chhota ya barabar). Inhe yaad rakhna zaroori hai, kyunki inke bina koi faisla nahi ho sakta.',
            english: 'Until now, programs walked on a single road — from top to bottom, every line. But in real life we do not do the same thing every time. If it is raining, we take an umbrella; if not, we do not. A program works the same way: if checks a condition, and if the condition is true it runs a block, otherwise it skips it. In Python, if is written like this: if age >= 18: — note that a colon : comes at the end of the line, and the next line has an indentation of 4 spaces. This indentation is what tells which lines are inside the if. In C, curly brackets did this job; in Python, spaces do it. elif means "the first condition is false, so check the second one" — it is the short form of C\'s else if. else means "if everything is false, do this". The comparison operators are: == (equal), != (not equal), > (greater), < (smaller), >= (greater or equal), <= (smaller or equal). It is important to remember them, because without them no decision can be made.',
            hindi: 'अब तक के प्रोग्राम एक ही रास्ते पर चलते थे — ऊपर से नीचे, हर लाइन। लेकिन असली ज़िंदगी में हम हर बार एक ही काम नहीं करते। अगर बारिश हो रही है तो छाता लेते हैं, नहीं तो नहीं लेते। प्रोग्राम में भी ऐसा ही होता है: if एक कंडीशन जाँचता है, और अगर कंडीशन सच है तो एक ब्लॉक चलाता है, नहीं तो उसे छोड़ देता है। पायथन में if ऐसे लिखा जाता है: if age >= 18: — ध्यान दो, लाइन के आखिर में colon : लगता है, और अगली लाइन में 4 स्पेस का indentation होता है। यह indentation ही बताता है कि कौन सी लाइनें if के अंदर हैं। सी में इस काम के लिए कर्ली ब्रैकेट होते थे, पायथन में स्पेस होते हैं। elif का मतलब है "पहली कंडीशन झूठ है, तो दूसरी जाँचो" — यह सी के else if का छोटा रूप है। else का मतलब है "अगर सब झूठ है तो यह करो"। तुलना वाले ऑपरेटर ये हैं: == (बराबर), != (बराबर नहीं), > (बड़ा), < (छोटा), >= (बड़ा या बराबर), <= (छोटा या बराबर)। इन्हें याद रखना ज़रूरी है, क्योंकि इनके बिना कोई फैसला नहीं हो सकता।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example: train ticket aur age',
            english: 'Real-life example: a train ticket and age',
            hindi: 'असल ज़िंदगी का उदाहरण: ट्रेन टिकट और उम्र',
          },
          body: {
            hinglish: 'Train mein ticket checker ke paas ek simple rule hota hai. Agar passenger ki age 5 saal se kam hai, to ticket free hai. Agar age 5 se 12 ke beech hai, to aadha ticket lagta hai. Agar age 12 se zyada hai, to poora ticket lagta hai. Aur agar passenger senior citizen hai, matlab age 60 se zyada hai, to chhoot milti hai. Ye ek hi faisla nahi hai — ye chaar alag faisle hain, jo ek ke baad ek check hote hain. Program mein bhi aisa hi hota hai: pehle if age < 5 check hota hai, phir elif age <= 12, phir elif age >= 60, aur aakhir mein else. Jaise ticket checker har passenger ko ek hi rule se nahi naapta, waise hi program har value ko ek hi condition se nahi naapta. Har condition ek alag raasta kholti hai, aur program sirf wahi raasta chunta hai jiski condition sach hai. Python mein ye chain aur bhi saaf dikhti hai, kyunki elif ek hi shabd hai aur indentation se pata chalta hai ki kaun sa block kahan khatm hota hai.',
            english: 'A ticket checker on a train has a simple rule. If the passenger is younger than 5 years, the ticket is free. If the age is between 5 and 12, a half ticket is charged. If the age is more than 12, a full ticket is charged. And if the passenger is a senior citizen, meaning the age is more than 60, a discount is given. This is not one decision — it is four different decisions, checked one after another. A program works the same way: first if age < 5 is checked, then elif age <= 12, then elif age >= 60, and finally else. Just as the ticket checker does not judge every passenger by one rule, a program does not judge every value by one condition. Every condition opens a different road, and the program picks only the road whose condition is true. In Python this chain looks even cleaner, because elif is a single word and the indentation shows where each block ends.',
            hindi: 'ट्रेन में टिकट चेकर के पास एक सरल नियम होता है। अगर यात्री की उम्र 5 साल से कम है, तो टिकट फ्री है। अगर उम्र 5 से 12 के बीच है, तो आधा टिकट लगता है। अगर उम्र 12 से ज़्यादा है, तो पूरा टिकट लगता है। और अगर यात्री सीनियर सिटीज़न है, मतलब उम्र 60 से ज़्यादा है, तो छूट मिलती है। यह एक ही फैसला नहीं है — यह चार अलग फैसले हैं, जो एक के बाद एक जाँचे जाते हैं। प्रोग्राम में भी ऐसा ही होता है: पहले if age < 5 जाँचा जाता है, फिर elif age <= 12, फिर elif age >= 60, और आखिर में else। जैसे टिकट चेकर हर यात्री को एक ही नियम से नहीं नापता, वैसे ही प्रोग्राम हर वैल्यू को एक ही कंडीशन से नहीं नापता। हर कंडीशन एक अलग रास्ता खोलती है, और प्रोग्राम सिर्फ वही रास्ता चुनता है जिसकी कंडीशन सच है। पायथन में यह चेन और भी साफ दिखती है, क्योंकि elif एक ही शब्द है और indentation से पता चलता है कि कौन सा ब्लॉक कहाँ खत्म होता है।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step: exam pass ya fail',
            english: 'Step-by-step: exam pass or fail',
            hindi: 'चरण-दर-चरण: परीक्षा पास या फेल',
          },
          body: {
            hinglish: 'Neeche wale program mein ek student ke marks hain. Pehli line marks = 72 hai. Phir if marks >= 90: check hota hai — 72 >= 90 jhooth hai, isliye ye block skip ho jata hai. Phir elif marks >= 60: check hota hai — 72 >= 60 sach hai, isliye "First Division" chhapta hai, aur baaki ke elif aur else ko Python dekhta bhi nahi. Ye bahut zaroori baat hai: elif ki chain mein sirf pehli sach condition chalti hai, baaki sab skip ho jati hain. Agar marks 95 hote, to pehla if hi sach ho jata aur "Distinction" chhapta. Agar marks 30 hote, to saari conditions jhooth hoti aur aakhir wala else chalta — "Fail". Program ko padhne ka tareeka ye hai: upar se neeche har condition ko check karo, aur jaise hi ek sach mile, wahi block chalao aur chain se bahar nikal jao. Dhyaan do: marks >= 90 likhne se pehle marks >= 60 likhna zaroori hai, kyunki agar ulta likh diya to 95 wala student bhi First Division mein aa jayega. Aur dhyaan do: har block ki lines 4 space andar hain — ye space hi Python ko batata hai ki block kahan shuru aur kahan khatm hota hai.',
            english: 'In the program below, a student has some marks. The first line is marks = 72. Then if marks >= 90: is checked — 72 >= 90 is false, so this block is skipped. Then elif marks >= 60: is checked — 72 >= 60 is true, so "First Division" is printed, and Python does not even look at the remaining elif and else. This is a very important point: in an elif chain, only the first true condition runs, and all the rest are skipped. If the marks were 95, the first if would be true and "Distinction" would be printed. If the marks were 30, all the conditions would be false and the last else would run — "Fail". The way to read a program is this: check every condition from top to bottom, and as soon as one is true, run that block and leave the chain. Note that marks >= 90 must be written before marks >= 60, because if you write them in reverse, a student with 95 would also land in First Division. And note this: the lines of every block are 4 spaces inside — these spaces are what tell Python where a block starts and where it ends.',
            hindi: 'नीचे वाले प्रोग्राम में एक छात्र के मार्क्स हैं। पहली लाइन marks = 72 है। फिर if marks >= 90: जाँचा जाता है — 72 >= 90 झूठ है, इसलिए यह ब्लॉक छोड़ दिया जाता है। फिर elif marks >= 60: जाँचा जाता है — 72 >= 60 सच है, इसलिए "First Division" छपता है, और बाकी के elif और else को पायथन देखता भी नहीं। यह बहुत ज़रूरी बात है: elif की चेन में सिर्फ पहली सच कंडीशन चलती है, बाकी सब छोड़ दी जाती हैं। अगर मार्क्स 95 होते, तो पहला if ही सच हो जाता और "Distinction" छपता। अगर मार्क्स 30 होते, तो सारी कंडीशन झूठ होतीं और आखिर वाला else चलता — "Fail"। प्रोग्राम को पढ़ने का तरीका यह है: ऊपर से नीचे हर कंडीशन को जाँचो, और जैसे ही एक सच मिले, वही ब्लॉक चलाओ और चेन से बाहर निकल जाओ। ध्यान दो: marks >= 90 लिखने से पहले marks >= 60 लिखना ज़रूरी है, क्योंकि अगर उल्टा लिख दिया तो 95 वाला छात्र भी First Division में आ जाएगा। और ध्यान दो: हर ब्लॉक की लाइनें 4 स्पेस अंदर हैं — यह स्पेस ही पायथन को बताता है कि ब्लॉक कहाँ शुरू और कहाँ खत्म होता है।',
          },
          code: {
            title: {
              hinglish: 'Marks se division',
              english: 'Division from marks',
              hindi: 'मार्क्स से डिविज़न',
            },
            language: 'python',
            code: `marks = 72
if marks >= 90:
    print("Distinction")
elif marks >= 60:
    print("First Division")
elif marks >= 33:
    print("Pass")
else:
    print("Fail")`,
            output: 'First Division',
            note: {
              hinglish: 'Sirf pehli sach condition chalti hai. 72 >= 60 sach hai, isliye First Division chhapa aur chain ruk gayi.',
              english: 'Only the first true condition runs. 72 >= 60 is true, so First Division was printed and the chain stopped.',
              hindi: 'सिर्फ पहली सच कंडीशन चलती है। 72 >= 60 सच है, इसलिए First Division छपा और चेन रुक गई।',
            },
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur ye hoti kyun hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और ये होती क्यों हैं',
          },
          body: {
            hinglish: 'Sabse badi galti: = aur == ko mix karna. if marks = 90: likhne par Python error dega, kyunki if ke andar assignment nahi ho sakta. Aapko if marks == 90: likhna tha. Ye galti isliye hoti hai kyunki bolne mein dono ek jaise lagte hain, lekin Python mein inka matlab bilkul alag hai. Dusri galti: colon bhoolna. if marks > 60 likhne par Python error dega — line ke aakhir mein : zaroori hai. Teesri galti: indentation galat hona. Agar print wali line mein 4 space ki jagah 3 space hain, to Python IndentationError dega. Ye isliye hota hai kyunki Python mein space ka matlab hota hai, aur har block mein space ek jaise hone chahiye. Chauthi galti: elif ki chain ka order ulta likhna, jaise pehle marks >= 33 phir marks >= 60. Isse 72 wala student Pass mein aa jayega, First Division mein nahi. Paanchvi galti: do conditions jodne ke liye and aur or ka galat use. "Age 18 se zyada aur 60 se kam" ke liye age > 18 and age < 60 likhna hota hai. Python mein && nahi, and likha jata hai.',
            english: 'The biggest mistake: mixing up = and ==. If you write if marks = 90:, Python will give an error, because an assignment cannot be done inside an if. You meant to write if marks == 90:. This mistake happens because both sound the same when spoken, but in Python their meaning is completely different. Second mistake: forgetting the colon. If you write if marks > 60, Python will give an error — a : is needed at the end of the line. Third mistake: wrong indentation. If the print line has 3 spaces instead of 4, Python will give an IndentationError. This happens because in Python space has meaning, and the spaces must be the same in every block. Fourth mistake: writing the elif chain in reverse order, like marks >= 33 first and then marks >= 60. Then a student with 72 would land in Pass, not First Division. Fifth mistake: using and and or wrongly when joining two conditions. For "age more than 18 and less than 60" you must write age > 18 and age < 60. In Python you write and, not &&.',
            hindi: 'सबसे बड़ी गलती: = और == को मिलाना। if marks = 90: लिखने पर पायथन एरर देगा, क्योंकि if के अंदर assignment नहीं हो सकता। आपको if marks == 90: लिखना था। यह गलती इसलिए होती है क्योंकि बोलने में दोनों एक जैसे लगते हैं, लेकिन पायथन में इनका मतलब बिल्कुल अलग है। दूसरी गलती: colon भूलना। if marks > 60 लिखने पर पायथन एरर देगा — लाइन के आखिर में : ज़रूरी है। तीसरी गलती: indentation गलत होना। अगर print वाली लाइन में 4 स्पेस की जगह 3 स्पेस हैं, तो पायथन IndentationError देगा। यह इसलिए होता है क्योंकि पायथन में स्पेस का मतलब होता है, और हर ब्लॉक में स्पेस एक जैसे होने चाहिए। चौथी गलती: elif की चेन का क्रम उल्टा लिखना, जैसे पहले marks >= 33 फिर marks >= 60। इससे 72 वाला छात्र Pass में आ जाएगा, First Division में नहीं। पाँचवीं गलती: दो कंडीशन जोड़ने के लिए and और or का गलत इस्तेमाल। "Age 18 से ज़्यादा और 60 से कम" के लिए age > 18 and age < 60 लिखना होता है। पायथन में && नहीं, and लिखा जाता है।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास स्थितियाँ',
          },
          body: {
            hinglish: 'Pehla edge case: marks bilkul 60 hain. marks >= 60 sach hai, isliye First Division milega. Agar aapne marks > 60 likha hota to 60 wala student Pass mein chala jata. Boundary values par >= aur > ka farq sabse zyada dikhta hai, isliye hamesha socho ki boundary par kya hona chahiye. Dusra edge case: marks negative ya 100 se zyada, jaise -5 ya 120. Program koi error nahi dega — 120 >= 90 sach hai, isliye Distinction chhap jayega, jo galat hai. Asli program mein pehle ye check karna chahiye ki marks 0 se 100 ke beech hain ya nahi. Teesra edge case: khaali string ya zero bhi jhooth mana jata hai. if "" ya if 0 likhne par block nahi chalega, kyunki Python inhe False manta hai. Chautha edge case: if ke andar if, matlab nested if. Ye bilkul allowed hai, lekin zyada gehrai mein jaane se program padhna mushkil ho jata hai — teen se zyada level ki nesting se bacho. Paanchva edge case: sirf ek line wala if. Python mein if marks > 60: print("Pass") ek hi line mein likha ja sakta hai, lekin ye padhne mein mushkil hota hai, isliye beginners ko alag lines likhni chahiye.',
            english: 'First edge case: the marks are exactly 60. marks >= 60 is true, so First Division is given. If you had written marks > 60, the student with 60 would go to Pass. The difference between >= and > shows most at boundary values, so always think about what should happen at the boundary. Second edge case: marks that are negative or more than 100, like -5 or 120. The program will give no error — 120 >= 90 is true, so Distinction will be printed, which is wrong. In a real program you should first check whether the marks are between 0 and 100 or not. Third edge case: an empty string or zero is also treated as false. If you write if "" or if 0, the block will not run, because Python treats them as False. Fourth edge case: an if inside an if, called a nested if. This is fully allowed, but going too deep makes the program hard to read — avoid more than three levels of nesting. Fifth edge case: a one-line if. In Python, if marks > 60: print("Pass") can be written in one line, but it is hard to read, so beginners should write separate lines.',
            hindi: 'पहली खास स्थिति: मार्क्स बिल्कुल 60 हैं। marks >= 60 सच है, इसलिए First Division मिलेगा। अगर आपने marks > 60 लिखा होता तो 60 वाला छात्र Pass में चला जाता। Boundary values पर >= और > का फर्क सबसे ज़्यादा दिखता है, इसलिए हमेशा सोचो कि boundary पर क्या होना चाहिए। दूसरी खास स्थिति: मार्क्स नेगेटिव या 100 से ज़्यादा, जैसे -5 या 120। प्रोग्राम कोई एरर नहीं देगा — 120 >= 90 सच है, इसलिए Distinction छप जाएगा, जो गलत है। असली प्रोग्राम में पहले यह जाँचना चाहिए कि मार्क्स 0 से 100 के बीच हैं या नहीं। तीसरी खास स्थिति: खाली string या ज़ीरो भी झूठ माना जाता है। if "" या if 0 लिखने पर ब्लॉक नहीं चलेगा, क्योंकि पायथन इन्हें False मानता है। चौथी खास स्थिति: if के अंदर if, मतलब nested if। यह बिल्कुल allowed है, लेकिन ज़्यादा गहराई में जाने से प्रोग्राम पढ़ना मुश्किल हो जाता है — तीन से ज़्यादा level की nesting से बचो। पाँचवीं खास स्थिति: सिर्फ एक लाइन वाला if। पायथन में if marks > 60: print("Pass") एक ही लाइन में लिखा जा सकता है, लेकिन यह पढ़ने में मुश्किल होता है, इसलिए beginners को अलग लाइनें लिखनी चाहिए।',
          },
        },
        {
          heading: {
            hinglish: 'Agar aap ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर आप यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish: 'Socho aap marks = 72 ki jagah marks = 95 kar do. Ab pehla if (marks >= 90) sach ho jayega aur "Distinction" chhapega. Yehi chain ki taakat hai — ek hi program alag-alag input par alag faisla deta hai. Ab socho aap elif marks >= 60 ko hata do. Ab 72 wala student seedha elif marks >= 33 par jayega aur "Pass" chhapega — First Division gayab ho jayega. Ab socho aap saare elif ko alag-alag if bana do. Ab 95 wala student pehle if mein Distinction bhi chhap dega aur dusre if mein First Division bhi — kyunki alag if ek dusre ko nahi rokte. Yehi elif aur alag if ka farq hai. Ab socho aap and ki jagah or likh do: age > 18 or age < 60. Ab har age pass ho jayegi, kyunki har number ya to 18 se bada hota hai ya 60 se chhota. Ab socho aap condition mein not laga do: if not (marks >= 33): print("Fail"). Ab fail tab chhapega jab marks 33 se kam honge — not ka matlab hai ulta kar do.',
            english: 'Imagine you change marks = 72 to marks = 95. Now the first if (marks >= 90) will be true and "Distinction" will be printed. That is the power of the chain — one program gives different decisions for different inputs. Now imagine you remove elif marks >= 60. Now the student with 72 will go straight to elif marks >= 33 and "Pass" will be printed — First Division will disappear. Now imagine you make all the elif blocks into separate if blocks. Now the student with 95 will print Distinction in the first if and also First Division in the second if — because separate if blocks do not stop each other. That is the difference between elif and separate if. Now imagine you write or instead of and: age > 18 or age < 60. Now every age will pass, because every number is either more than 18 or less than 60. Now imagine you put not in the condition: if not (marks >= 33): print("Fail"). Now Fail will be printed when the marks are less than 33 — not means turn it around.',
            hindi: 'सोचिए आप marks = 72 की जगह marks = 95 कर दो। अब पहला if (marks >= 90) सच हो जाएगा और "Distinction" छपेगा। यही चेन की ताकत है — एक ही प्रोग्राम अलग-अलग इनपुट पर अलग फैसला देता है। अब सोचिए आप elif marks >= 60 को हटा दो। अब 72 वाला छात्र सीधे elif marks >= 33 पर जाएगा और "Pass" छपेगा — First Division गायब हो जाएगा। अब सोचिए आप सारे elif को अलग-अलग if बना दो। अब 95 वाला छात्र पहले if में Distinction भी छाप देगा और दूसरे if में First Division भी — क्योंकि अलग if एक दूसरे को नहीं रोकते। यही elif और अलग if का फर्क है। अब सोचिए आप and की जगह or लिख दो: age > 18 or age < 60। अब हर age पास हो जाएगी, क्योंकि हर नंबर या तो 18 से बड़ा होता है या 60 से छोटा। अब सोचिए आप कंडीशन में not लगा दो: if not (marks >= 33): print("Fail")। अब fail तब छपेगा जब मार्क्स 33 से कम होंगे — not का मतलब है उल्टा कर दो।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'if condition check karta hai aur sach hone par block chalata hai, elif agla sawaal poochta hai, aur else tab chalta hai jab sab jhooth hon. Chain mein sirf pehli sach condition chalti hai. Python mein block ko curly bracket nahi, 4 space ka indentation batata hai, aur har if line ke aakhir mein colon : lagta hai. Comparison ke liye ==, !=, >, <, >=, <= use hote hain, aur do conditions jodne ke liye and, or aur not. Sabse badi galtiyan: = ki jagah == likhna, colon bhoolna, indentation galat karna, aur chain ka order ulta likhna. Agle article mein hum seekhenge ki ek hi kaam ko baar-baar kaise karwaya jata hai — loops.',
            english: 'if checks a condition and runs a block when it is true, elif asks the next question, and else runs when everything is false. In a chain, only the first true condition runs. In Python, a block is shown not by curly brackets but by an indentation of 4 spaces, and every if line ends with a colon :. For comparison, ==, !=, >, <, >=, <= are used, and and, or, and not join two conditions. The biggest mistakes are: writing = instead of ==, forgetting the colon, getting the indentation wrong, and writing the chain in reverse order. In the next article we will learn how to make the computer repeat one job again and again — loops.',
            hindi: 'if कंडीशन जाँचता है और सच होने पर ब्लॉक चलाता है, elif अगला सवाल पूछता है, और else तब चलता है जब सब झूठ हों। चेन में सिर्फ पहली सच कंडीशन चलती है। पायथन में ब्लॉक को कर्ली ब्रैकेट नहीं, 4 स्पेस का indentation बताता है, और हर if लाइन के आखिर में colon : लगता है। तुलना के लिए ==, !=, >, <, >=, <= इस्तेमाल होते हैं, और दो कंडीशन जोड़ने के लिए and, or और not। सबसे बड़ी गलतियाँ: = की जगह == लिखना, colon भूलना, indentation गलत करना, और चेन का क्रम उल्टा लिखना। अगले लेख में हम सीखेंगे कि एक ही काम को बार-बार कैसे करवाया जाता है — loops।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'If-elif-else chain ka flow',
          english: 'The flow of an if-elif-else chain',
          hindi: 'If-elif-else चेन का फ्लो',
        },
        nodes: [
          { t: { hinglish: 'marks >= 90?', english: 'marks >= 90?', hindi: 'marks >= 90?' } },
          { t: { hinglish: 'Haan: Distinction', english: 'Yes: Distinction', hindi: 'हाँ: Distinction' } },
          { t: { hinglish: 'Nahi: marks >= 60?', english: 'No: marks >= 60?', hindi: 'नहीं: marks >= 60?' } },
          { t: { hinglish: 'Nahi: marks >= 33?', english: 'No: marks >= 33?', hindi: 'नहीं: marks >= 33?' } },
          { t: { hinglish: 'Nahi: Fail', english: 'No: Fail', hindi: 'नहीं: Fail' } },
        ],
      },
      codeExamples: [
        {
          title: {
            hinglish: 'Do conditions ek saath',
            english: 'Two conditions together',
            hindi: 'दो कंडीशन एक साथ',
          },
          language: 'python',
          code: `age = 25
if age > 18 and age < 60:
    print("Adult")
else:
    print("Child ya Senior")`,
          output: 'Adult',
          note: {
            hinglish: 'and ka matlab hai dono conditions sach honi chahiye. 25 dono ko satisfy karta hai.',
            english: 'and means both conditions must be true. 25 satisfies both.',
            hindi: 'and का मतलब है दोनों कंडीशन सच होनी चाहिए। 25 दोनों को satisfy करता है।',
          },
        },
        {
          title: {
            hinglish: 'Ticket ka daam',
            english: 'The ticket price',
            hindi: 'टिकट का दाम',
          },
          language: 'python',
          code: `age = 8
if age < 5:
    print("Free")
elif age <= 12:
    print("Half ticket")
else:
    print("Full ticket")`,
          output: 'Half ticket',
          note: {
            hinglish: '8 < 5 jhooth hai, 8 <= 12 sach hai — isliye Half ticket chhapa.',
            english: '8 < 5 is false, 8 <= 12 is true — so Half ticket was printed.',
            hindi: '8 < 5 झूठ है, 8 <= 12 सच है — इसलिए Half ticket छपा।',
          },
        },
      ],
      mcqs: [
        {
          q: {
            hinglish: 'Python mein if ke block ko kya batata hai?',
            english: 'What shows the block of an if in Python?',
            hindi: 'पायथन में if के ब्लॉक को क्या बताता है?',
          },
          opts: [
            { hinglish: 'Indentation (4 space)', english: 'Indentation (4 spaces)', hindi: 'Indentation (4 स्पेस)' },
            { hinglish: 'Curly bracket { }', english: 'Curly brackets { }', hindi: 'कर्ली ब्रैकेट { }' },
            { hinglish: 'Semicolon ;', english: 'Semicolon ;', hindi: 'सेमीकोलन ;' },
            { hinglish: 'Brackets ( )', english: 'Brackets ( )', hindi: 'ब्रैकेट ( )' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Python mein block ko space se pehchana jata hai. Curly bracket C mein use hote hain, Python mein nahi.',
            english: 'In Python, a block is recognised by spaces. Curly brackets are used in C, not in Python.',
            hindi: 'पायथन में ब्लॉक को स्पेस से पहचाना जाता है। कर्ली ब्रैकेट सी में इस्तेमाल होते हैं, पायथन में नहीं।',
          },
        },
        {
          q: {
            hinglish: 'Is code ka output kya hoga? marks = 85; if marks >= 90: print("A") elif marks >= 60: print("B") else: print("C")',
            english: 'What will this code print? marks = 85; if marks >= 90: print("A") elif marks >= 60: print("B") else: print("C")',
            hindi: 'इस कोड का आउटपुट क्या होगा? marks = 85; if marks >= 90: print("A") elif marks >= 60: print("B") else: print("C")',
          },
          opts: [
            { hinglish: 'B', english: 'B', hindi: 'B' },
            { hinglish: 'A', english: 'A', hindi: 'A' },
            { hinglish: 'C', english: 'C', hindi: 'C' },
            { hinglish: 'A aur B dono', english: 'Both A and B', hindi: 'A और B दोनों' },
          ],
          ans: 0,
          expl: {
            hinglish: '85 >= 90 jhooth hai, isliye pehla if skip hota hai. 85 >= 60 sach hai, isliye B chhapta hai aur chain ruk jati hai.',
            english: '85 >= 90 is false, so the first if is skipped. 85 >= 60 is true, so B is printed and the chain stops.',
            hindi: '85 >= 90 झूठ है, इसलिए पहला if छोड़ दिया जाता है। 85 >= 60 सच है, इसलिए B छपता है और चेन रुक जाती है।',
          },
        },
        {
          q: {
            hinglish: 'Is code mein bug kya hai? if age > 18 print("Adult")',
            english: 'What is the bug in this code? if age > 18 print("Adult")',
            hindi: 'इस कोड में बग क्या है? if age > 18 print("Adult")',
          },
          opts: [
            { hinglish: 'Colon : missing hai aur indentation bhi nahi hai', english: 'The colon : is missing and there is no indentation either', hindi: 'Colon : गायब है और indentation भी नहीं है' },
            { hinglish: 'age galat naam hai', english: 'age is the wrong name', hindi: 'age गलत नाम है' },
            { hinglish: 'print galat hai', english: 'print is wrong', hindi: 'print गलत है' },
            { hinglish: 'Koi bug nahi hai', english: 'There is no bug', hindi: 'कोई बग नहीं है' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Python mein if line ke aakhir mein : chahiye aur agle line mein indentation chahiye. Dono missing hain, isliye error aayega.',
            english: 'In Python, an if line needs a : at the end and indentation on the next line. Both are missing, so an error will come.',
            hindi: 'पायथन में if लाइन के आखिर में : चाहिए और अगली लाइन में indentation चाहिए। दोनों गायब हैं, इसलिए एरर आएगा।',
          },
        },
        {
          q: {
            hinglish: 'Kaun si condition "age 18 se 60 ke beech hai" ko sahi check karti hai?',
            english: 'Which condition correctly checks "age is between 18 and 60"?',
            hindi: 'कौन सी कंडीशन "age 18 से 60 के बीच है" को सही जाँचती है?',
          },
          opts: [
            { hinglish: 'age > 18 and age < 60', english: 'age > 18 and age < 60', hindi: 'age > 18 and age < 60' },
            { hinglish: 'age > 18 or age < 60', english: 'age > 18 or age < 60', hindi: 'age > 18 or age < 60' },
            { hinglish: 'age > 18 and age > 60', english: 'age > 18 and age > 60', hindi: 'age > 18 and age > 60' },
            { hinglish: '18 < age < 60', english: '18 < age < 60', hindi: '18 < age < 60' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Dono conditions ek saath sach honi chahiye, isliye and use hota hai. or se to har age pass ho jati. 18 < age < 60 Python mein chalta to hai, lekin ye do alag comparison ka shortcut hai — beginners ke liye and wala roop zyada clear hai.',
            english: 'Both conditions must be true together, so and is used. With or, almost every age would pass. 18 < age < 60 does work in Python, but it is a shortcut for two separate comparisons — the and form is clearer for beginners.',
            hindi: 'दोनों कंडीशन एक साथ सच होनी चाहिए, इसलिए and इस्तेमाल होता है। or से तो हर age पास हो जाती। 18 < age < 60 पायथन में चलता तो है, लेकिन यह दो अलग comparison का shortcut है — beginners के लिए and वाला रूप ज़्यादा clear है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Apna if-else banao: paani piyo ya nahi',
          english: 'Make your own if-else: drink water or not',
          hindi: 'अपना if-else बनाओ: पानी पियो या नहीं',
        },
        task: {
          hinglish: 'Starter code ko chalao. Phir ek naya if-else jodo: agar temp 30 se zyada hai to "Paani piyo" print karo, nahi to "Sab theek hai" print karo. Done tab mana jayega jab output mein "Paani piyo" dikhe.',
          english: 'Run the starter code. Then add a new if-else: if temp is more than 30, print "Paani piyo", otherwise print "Sab theek hai". You are done when the output shows "Paani piyo".',
          hindi: 'Starter कोड को चलाएँ। फिर एक नया if-else जोड़ें: अगर temp 30 से ज़्यादा है तो "Paani piyo" print करें, नहीं तो "Sab theek hai" print करें। आप तब सफल हैं जब आउटपुट में "Paani piyo" दिखे।',
        },
        language: 'python',
        starter: `temp = 35
print(f"Temp: {temp}")`,
        expected: 'Temp: 35\nPaani piyo',
      },
    },
    {
      id: 'py-loops',
      subjectId: 'python-programming',
      title: {
        hinglish: 'Loops — ek kaam baar-baar',
        english: 'Loops — One Job Again and Again',
        hindi: 'Loops — एक काम बार-बार',
      },
      summary: {
        hinglish: 'for aur while loop, range() kya hai, aur list ke upar loop kaise chalate hain. Table, sum aur counting examples ke saath.',
        english: 'for and while loops, what range() is, and how to loop over a list. With table, sum, and counting examples.',
        hindi: 'for और while loop, range() क्या है, और list के ऊपर loop कैसे चलाते हैं। टेबल, sum और counting उदाहरणों के साथ।',
      },
      readMinutes: 14,
      sections: [
        {
          heading: {
            hinglish: 'Loop kya hai?',
            english: 'What is a loop?',
            hindi: 'Loop क्या है?',
          },
          body: {
            hinglish: 'Loop ka matlab hai ek hi kaam ko baar-baar karna, jab tak ek condition sach hai. Socho aapko 1 se 100 tak ke number likhne hain. Bina loop ke aapko 100 print likhne padenge. Loop se aap ek baar likhte ho "1 se 100 tak har number chhapo", aur computer baaki kaam kar deta hai. Python mein do loop hote hain. for loop tab use hota hai jab aapko pehle se pata ho ki kaam kitni baar karna hai, ya jab aapko ek list ke har item par kaam karna ho. while loop tab use hota hai jab aapko nahi pata ki kaam kitni baar hoga, bas itna pata hai ki kab rukna hai, jaise "jab tak user 0 na bole". Python ka for loop C se alag hai — isme aap range() use karte ho. range(1, 11) ka matlab hai 1 se 10 tak ke number. Ye range ek sequence banata hai, aur for loop us sequence ke har number par ek baar chalta hai. Har loop mein ek variable hota hai jo har round mein badalta hai, jaise i, aur ek body hoti hai jo har round mein chalti hai.',
            english: 'A loop means doing one job again and again, as long as a condition is true. Imagine you have to write the numbers from 1 to 100. Without a loop you would have to write 100 print statements. With a loop you write once, "print every number from 1 to 100", and the computer does the rest. Python has two loops. A for loop is used when you already know how many times the job must be done, or when you must do a job on every item of a list. A while loop is used when you do not know how many times it will run, only when it must stop, like "until the user says 0". Python\'s for loop is different from C — here you use range(). range(1, 11) means the numbers from 1 to 10. This range makes a sequence, and the for loop runs once on every number of that sequence. Every loop has a variable that changes in every round, like i, and a body that runs in every round.',
            hindi: 'Loop का मतलब है एक ही काम को बार-बार करना, जब तक एक कंडीशन सच है। सोचिए आपको 1 से 100 तक के नंबर लिखने हैं। बिना loop के आपको 100 print लिखने पड़ेंगे। Loop से आप एक बार लिखते हैं "1 से 100 तक हर नंबर छापो", और कंप्यूटर बाकी काम कर देता है। पायथन में दो loop होते हैं। for loop तब इस्तेमाल होता है जब आपको पहले से पता हो कि काम कितनी बार करना है, या जब आपको एक list के हर item पर काम करना हो। while loop तब इस्तेमाल होता है जब आपको नहीं पता कि काम कितनी बार होगा, बस इतना पता है कि कब रुकना है, जैसे "जब तक user 0 न बोले"। पायथन का for loop सी से अलग है — इसमें आप range() इस्तेमाल करते हो। range(1, 11) का मतलब है 1 से 10 तक के नंबर। यह range एक sequence बनाता है, और for loop उस sequence के हर नंबर पर एक बार चलता है। हर loop में एक variable होता है जो हर राउंड में बदलता है, जैसे i, और एक body होती है जो हर राउंड में चलती है।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example: subah ki chai aur table',
            english: 'Real-life example: morning tea and a table',
            hindi: 'असल ज़िंदगी का उदाहरण: सुबह की चाय और टेबल',
          },
          body: {
            hinglish: 'School mein jab teacher 7 ka table likhwati thi, to wo har baar ek hi pattern bolti thi: "7 ekam 7, 7 duna 14, 7 tiya 21..." Pattern ek hi tha, sirf number badal raha tha. Loop bilkul wahi kaam karta hai — ek pattern ko baar-baar chalata hai, har baar ek nayi value ke saath. Dusra example: subah chai banate waqt aap ek hi kaam baar-baar karte ho — har cup mein chai daalo, cheeni daalo, doodh daalo. Agar ghar mein 5 log hain, to ye kaam 5 baar hota hai. Loop mein bhi aap kehte ho "har cup ke liye ye karo", aur computer ginta rehta hai ki kitne cup ho gaye. Teesra example: lift. Lift har floor par rukti hai, darwaza kholta hai, band karta hai, phir agle floor par jati hai — jab tak aakhri floor na aa jaye. Lift ka loop tab rukta hai jab condition poori ho jati hai. Ye teenon examples ek hi baat kehte hain: jab kaam repeat ho raha ho, to loop likho, copy-paste mat karo.',
            english: 'In school, when the teacher made you write the table of 7, she said the same pattern every time: "7 ones are 7, 7 twos are 14, 7 threes are 21..." The pattern was the same, only the number changed. A loop does exactly that job — it runs one pattern again and again, each time with a new value. A second example: while making tea in the morning, you repeat the same job — for every cup, add tea, add sugar, add milk. If there are 5 people at home, this job happens 5 times. In a loop you also say "for every cup, do this", and the computer keeps count of how many cups are done. A third example: a lift. The lift stops at every floor, opens the door, closes it, then goes to the next floor — until the last floor comes. The lift loop stops when the condition is met. All three examples say one thing: when a job repeats, write a loop, do not copy-paste.',
            hindi: 'स्कूल में जब शिक्षिका 7 का टेबल लिखवाती थी, तो वह हर बार एक ही पैटर्न बोलती थी: "7 एकम 7, 7 दूना 14, 7 तिया 21..." पैटर्न एक ही था, सिर्फ नंबर बदल रहा था। Loop बिल्कुल वही काम करता है — एक पैटर्न को बार-बार चलाता है, हर बार एक नई वैल्यू के साथ। दूसरा उदाहरण: सुबह चाय बनाते वक्त आप एक ही काम बार-बार करते हो — हर कप में चाय डालो, चीनी डालो, दूध डालो। अगर घर में 5 लोग हैं, तो यह काम 5 बार होता है। Loop में भी आप कहते हो "हर कप के लिए यह करो", और कंप्यूटर गिनता रहता है कि कितने कप हो गए। तीसरा उदाहरण: लिफ्ट। लिफ्ट हर फ्लोर पर रुकती है, दरवाज़ा खोलती है, बंद करती है, फिर अगले फ्लोर पर जाती है — जब तक आखिरी फ्लोर न आ जाए। लिफ्ट का loop तब रुकता है जब कंडीशन पूरी हो जाती है। ये तीनों उदाहरण एक ही बात कहते हैं: जब काम repeat हो रहा हो, तो loop लिखो, कॉपी-पेस्ट मत करो।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step: 1 se 10 tak ka sum',
            english: 'Step-by-step: the sum from 1 to 10',
            hindi: 'चरण-दर-चरण: 1 से 10 तक का sum',
          },
          body: {
            hinglish: 'Neeche wale program mein 1 se 10 tak ke numbers ka sum nikaala ja raha hai. Pehli line sum = 0 ek dabba banati hai jisme total rakha jayega. Dusri line for i in range(1, 11): loop shuru karti hai. range(1, 11) ka matlab hai 1 se 10 tak — dhyaan do, aakhri number 11 likha hai lekin 10 tak hi chalta hai, kyunki range ka end exclusive hota hai, matlab aakhri number included nahi hota. Ye Python ki sabse aam confusion hai. Loop ke andar sum = sum + i likha hai. Pehle round mein i = 1 hai, to sum 0 + 1 = 1 ban jata hai. Dusre round mein i = 2 hai, to sum 1 + 2 = 3. Teesre mein 3 + 3 = 6. Aise karte karte jab i = 10 hota hai, to sum 45 + 10 = 55 ban jata hai. Phir range khatm ho jata hai aur loop ruk jata hai. Aakhir mein print sum ko chhapta hai: 55. Isi program ko while se bhi likha ja sakta hai: i = 1 se shuru karo, jab tak i <= 10 hai sum mein jodo, aur har baar i = i + 1 karo. for isliye behtar hai kyunki isme shuruaat aur badlav khud ho jata hai — aapko i badlana nahi padta.',
            english: 'In the program below, the sum of the numbers from 1 to 10 is being found. The first line, sum = 0, makes a box where the total will be kept. The second line, for i in range(1, 11):, starts the loop. range(1, 11) means from 1 to 10 — note that the last number is written as 11 but it only goes up to 10, because the end of a range is exclusive, meaning the last number is not included. This is the most common confusion in Python. Inside the loop it says sum = sum + i. In the first round i = 1, so sum becomes 0 + 1 = 1. In the second round i = 2, so sum becomes 1 + 2 = 3. In the third, 3 + 3 = 6. Going on like this, when i = 10, sum becomes 45 + 10 = 55. Then the range ends and the loop stops. At the end, print prints the sum: 55. The same program can also be written with while: start with i = 1, add to sum as long as i <= 10, and do i = i + 1 every time. for is better here because the start and the change happen by themselves — you do not have to change i.',
            hindi: 'नीचे वाले प्रोग्राम में 1 से 10 तक के नंबरों का sum निकाला जा रहा है। पहली लाइन sum = 0 एक डिब्बा बनाती है जिसमें कुल रखा जाएगा। दूसरी लाइन for i in range(1, 11): loop शुरू करती है। range(1, 11) का मतलब है 1 से 10 तक — ध्यान दो, आखिरी नंबर 11 लिखा है लेकिन 10 तक ही चलता है, क्योंकि range का end exclusive होता है, मतलब आखिरी नंबर included नहीं होता। यह पायथन की सबसे आम confusion है। Loop के अंदर sum = sum + i लिखा है। पहले राउंड में i = 1 है, तो sum 0 + 1 = 1 बन जाता है। दूसरे राउंड में i = 2 है, तो sum 1 + 2 = 3। तीसरे में 3 + 3 = 6। ऐसे करते करते जब i = 10 होता है, तो sum 45 + 10 = 55 बन जाता है। फिर range खत्म हो जाता है और loop रुक जाता है। आखिर में print sum को छापता है: 55। इसी प्रोग्राम को while से भी लिखा जा सकता है: i = 1 से शुरू करो, जब तक i <= 10 है sum में जोड़ो, और हर बार i = i + 1 करो। for इसलिए बेहतर है क्योंकि इसमें शुरुआत और बदलाव खुद हो जाता है — आपको i बदलना नहीं पड़ता।',
          },
          code: {
            title: {
              hinglish: '1 se 10 tak ka sum',
              english: 'Sum from 1 to 10',
              hindi: '1 से 10 तक का sum',
            },
            language: 'python',
            code: `sum = 0
for i in range(1, 11):
    sum = sum + i
print(f"Sum: {sum}")`,
            output: 'Sum: 55',
            note: {
              hinglish: 'range(1, 11) 1 se 10 tak chalta hai — 11 included nahi hota. Har round mein i badhta hai aur sum mein judta hai.',
              english: 'range(1, 11) runs from 1 to 10 — 11 is not included. In every round i grows and is added to sum.',
              hindi: 'range(1, 11) 1 से 10 तक चलता है — 11 included नहीं होता। हर राउंड में i बढ़ता है और sum में जुड़ता है।',
            },
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur ye hoti kyun hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और ये होती क्यों हैं',
          },
          body: {
            hinglish: 'Sabse badi galti: range ka end bhoolna. range(1, 10) 1 se 9 tak chalta hai, 10 tak nahi. Agar aapko 10 bhi chahiye to range(1, 11) likhna padega. Ye isliye hota hai kyunki Python mein range ka end exclusive hota hai — ye rule har jagah ek jaisa hai, isliye ise yaad kar lo. Dusri galti: while loop mein badlav bhoolna. n = 5; while n > 0: print(n) mein agar n = n - 1 nahi likha to loop hamesha chalega — ise infinite loop kehte hain. Teesri galti: indentation galat hona. Loop ki body ki lines 4 space andar honi chahiye. Agar print loop se bahar likh diya to wo sirf ek baar chalega, har round mein nahi. Chauthi galti: loop variable ko loop ke andar badalna. for i in range(1, 11): ke andar i = 5 likhne se loop ka flow nahi badalta — agle round mein i phir range ki agli value ban jayega. Paanchvi galti: sum = 0 bhoolna. Agar sum ko pehle 0 nahi kiya to pehle round mein sum + i likhne par NameError aayega, kyunki sum exist hi nahi karta.',
            english: 'The biggest mistake: forgetting the end of range. range(1, 10) runs from 1 to 9, not up to 10. If you also need 10, you must write range(1, 11). This happens because in Python the end of a range is exclusive — this rule is the same everywhere, so remember it. Second mistake: forgetting the change in a while loop. In n = 5; while n > 0: print(n), if you do not write n = n - 1, the loop will run forever — this is called an infinite loop. Third mistake: wrong indentation. The lines of the loop body must be 4 spaces inside. If you write print outside the loop, it will run only once, not in every round. Fourth mistake: changing the loop variable inside the loop. Writing i = 5 inside for i in range(1, 11): does not change the flow of the loop — in the next round i will again become the next value of the range. Fifth mistake: forgetting sum = 0. If you do not first set sum to 0, then writing sum + i in the first round will give a NameError, because sum does not even exist.',
            hindi: 'सबसे बड़ी गलती: range का end भूलना। range(1, 10) 1 से 9 तक चलता है, 10 तक नहीं। अगर आपको 10 भी चाहिए तो range(1, 11) लिखना पड़ेगा। यह इसलिए होता है क्योंकि पायथन में range का end exclusive होता है — यह नियम हर जगह एक जैसा है, इसलिए इसे याद कर लो। दूसरी गलती: while loop में बदलाव भूलना। n = 5; while n > 0: print(n) में अगर n = n - 1 नहीं लिखा तो loop हमेशा चलेगा — इसे infinite loop कहते हैं। तीसरी गलती: indentation गलत होना। Loop की body की लाइनें 4 स्पेस अंदर होनी चाहिए। अगर print loop से बाहर लिख दिया तो वह सिर्फ एक बार चलेगा, हर राउंड में नहीं। चौथी गलती: loop variable को loop के अंदर बदलना। for i in range(1, 11): के अंदर i = 5 लिखने से loop का flow नहीं बदलता — अगले राउंड में i फिर range की अगली वैल्यू बन जाएगा। पाँचवीं गलती: sum = 0 भूलना। अगर sum को पहले 0 नहीं किया तो पहले राउंड में sum + i लिखने पर NameError आएगा, क्योंकि sum exist ही नहीं करता।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास स्थितियाँ',
          },
          body: {
            hinglish: 'Pehla edge case: khaali range. range(5, 1) mein shuruaat end se badi hai, isliye loop ek baar bhi nahi chalta. Ye galti nahi hai — kabhi-kabhi ye jaan-boojh kar chahiye hota hai. Dusra edge case: ulta ginna. range(5, 0, -1) 5, 4, 3, 2, 1 deta hai — teesra number step hota hai, jo batata hai ki kitne se badhna ya ghatna hai. Teesra edge case: break aur continue. break loop ko turant tod deta hai, jaise lift ka emergency button. continue sirf current round ko skip karta hai aur agle round par chala jata hai. Chautha edge case: loop ke andar loop, matlab nested loop. Ye table ya pattern chhapne ke liye use hota hai, lekin har nested loop kaam ko bahut badha deta hai — 10 ke andar 10 ka loop 100 baar chalega. Paanchva edge case: list par loop. for name in ["Sid", "Asha", "Ravi"]: har naam par ek baar chalega — iske liye range ki zaroorat nahi hoti, aur ye Python ka sabse natural loop hai.',
            english: 'First edge case: an empty range. In range(5, 1), the start is bigger than the end, so the loop does not run even once. This is not a mistake — sometimes this is wanted on purpose. Second edge case: counting down. range(5, 0, -1) gives 5, 4, 3, 2, 1 — the third number is the step, which says by how much to increase or decrease. Third edge case: break and continue. break breaks the loop at once, like the emergency button of a lift. continue only skips the current round and moves to the next round. Fourth edge case: a loop inside a loop, called a nested loop. This is used for printing a table or a pattern, but every nested loop multiplies the work a lot — a loop of 10 inside a loop of 10 will run 100 times. Fifth edge case: a loop over a list. for name in ["Sid", "Asha", "Ravi"]: will run once on every name — no range is needed for this, and this is the most natural loop in Python.',
            hindi: 'पहली खास स्थिति: खाली range। range(5, 1) में शुरुआत end से बड़ी है, इसलिए loop एक बार भी नहीं चलता। यह गलती नहीं है — कभी-कभी यह जान-बूझ कर चाहिए होता है। दूसरी खास स्थिति: उल्टा गिनना। range(5, 0, -1) 5, 4, 3, 2, 1 देता है — तीसरा नंबर step होता है, जो बताता है कि कितने से बढ़ना या घटना है। तीसरी खास स्थिति: break और continue। break loop को तुरंत तोड़ देता है, जैसे लिफ्ट का emergency button। continue सिर्फ current round को skip करता है और अगले राउंड पर चला जाता है। चौथी खास स्थिति: loop के अंदर loop, मतलब nested loop। यह टेबल या पैटर्न छापने के लिए इस्तेमाल होता है, लेकिन हर nested loop काम को बहुत बढ़ा देता है — 10 के अंदर 10 का loop 100 बार चलेगा। पाँचवीं खास स्थिति: list पर loop। for name in ["Sid", "Asha", "Ravi"]: हर नाम पर एक बार चलेगा — इसके लिए range की ज़रूरत नहीं होती, और यह पायथन का सबसे natural loop है।',
          },
        },
        {
          heading: {
            hinglish: 'Agar aap ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर आप यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish: 'Socho aap range(1, 11) ki jagah range(1, 11, 2) kar do. Ab loop sirf odd numbers par chalega: 1, 3, 5, 7, 9 — aur sum 25 ban jayega. Yehi ek chhota sa badlav poora result badal deta hai. Ab socho aap range(1, 11) ki jagah range(1, 101) kar do. Sum 5050 ban jayega — 1 se 100 tak ka sum. Ab socho aap sum = sum + i ki jagah sum = sum + i * i kar do. Ab squares ka sum niklega: 1 + 4 + 9 + ... + 100 = 385. Ab socho aap for ki jagah while likh do: i = 1; while i <= 10: sum = sum + i; i = i + 1. Result bilkul wahi 55 hoga — sirf likhne ka tareeka badla hai. Ab socho aap loop ke andar print(i) bhi laga do. Ab har round mein i chhapega, aur aap dekh sakoge ki loop kaise chal raha hai. Ye debugging ka sabse simple tareeka hai: loop ke andar print lagao aur dekho kya ho raha hai.',
            english: 'Imagine you write range(1, 11, 2) instead of range(1, 11). Now the loop will run only on odd numbers: 1, 3, 5, 7, 9 — and the sum will become 25. One small change like this changes the whole result. Now imagine you write range(1, 101) instead of range(1, 11). The sum will become 5050 — the sum from 1 to 100. Now imagine you write sum = sum + i * i instead of sum = sum + i. Now the sum of squares will come out: 1 + 4 + 9 + ... + 100 = 385. Now imagine you write while instead of for: i = 1; while i <= 10: sum = sum + i; i = i + 1. The result will be exactly the same 55 — only the way of writing has changed. Now imagine you also put print(i) inside the loop. Now i will be printed in every round, and you will be able to see how the loop is running. This is the simplest way to debug: put a print inside the loop and see what is happening.',
            hindi: 'सोचिए आप range(1, 11) की जगह range(1, 11, 2) कर दो। अब loop सिर्फ odd नंबरों पर चलेगा: 1, 3, 5, 7, 9 — और sum 25 बन जाएगा। यही एक छोटा सा बदलाव पूरा रिज़ल्ट बदल देता है। अब सोचिए आप range(1, 11) की जगह range(1, 101) कर दो। Sum 5050 बन जाएगा — 1 से 100 तक का sum। अब सोचिए आप sum = sum + i की जगह sum = sum + i * i कर दो। अब squares का sum निकलेगा: 1 + 4 + 9 + ... + 100 = 385। अब सोचिए आप for की जगह while लिख दो: i = 1; while i <= 10: sum = sum + i; i = i + 1। रिज़ल्ट बिल्कुल वही 55 होगा — सिर्फ लिखने का तरीका बदला है। अब सोचिए आप loop के अंदर print(i) भी लगा दो। अब हर राउंड में i छपेगा, और आप देख सकोगे कि loop कैसे चल रहा है। यह debugging का सबसे सरल तरीका है: loop के अंदर print लगाओ और देखो क्या हो रहा है।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'Loop ek hi kaam ko baar-baar karta hai. for tab use karo jab count pehle se pata ho ya list par kaam karna ho, while tab jab sirf rukne ki condition pata ho. range(1, 11) 1 se 10 tak chalta hai — end exclusive hota hai, ye hamesha yaad rakho. while mein badlav bhoolne se infinite loop banta hai. Loop ki body 4 space andar likhi jati hai. break loop todta hai, continue ek round skip karta hai. Agle article mein hum seekhenge ki ek kaam ko naam dekar baar-baar kaise bulaya jata hai — functions.',
            english: 'A loop does one job again and again. Use for when the count is known in advance or when you must work on a list, and while when only the stopping condition is known. range(1, 11) runs from 1 to 10 — the end is exclusive, always remember this. Forgetting the change in a while makes an infinite loop. The body of a loop is written 4 spaces inside. break breaks the loop, continue skips one round. In the next article we will learn how to give a job a name and call it again and again — functions.',
            hindi: 'Loop एक ही काम को बार-बार करता है। for तब इस्तेमाल करो जब count पहले से पता हो या list पर काम करना हो, while तब जब सिर्फ रुकने की कंडीशन पता हो। range(1, 11) 1 से 10 तक चलता है — end exclusive होता है, यह हमेशा याद रखो। while में बदलाव भूलने से infinite loop बनता है। Loop की body 4 स्पेस अंदर लिखी जाती है। break loop तोड़ता है, continue एक राउंड skip करता है। अगले लेख में हम सीखेंगे कि एक काम को नाम देकर बार-बार कैसे बुलाया जाता है — functions।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'For loop ka ek round',
          english: 'One round of a for loop',
          hindi: 'For loop का एक राउंड',
        },
        nodes: [
          { t: { hinglish: 'range(1, 11) se i = 1', english: 'i = 1 from range(1, 11)', hindi: 'range(1, 11) से i = 1' } },
          { t: { hinglish: 'Body chalao: sum = sum + i', english: 'Run the body: sum = sum + i', hindi: 'Body चलाओ: sum = sum + i' } },
          { t: { hinglish: 'Agla i: 2, phir 3...', english: 'Next i: 2, then 3...', hindi: 'अगला i: 2, फिर 3...' } },
          { t: { hinglish: 'Range khatm: loop se bahar', english: 'Range ends: leave the loop', hindi: 'Range खत्म: loop से बाहर' } },
        ],
      },
      codeExamples: [
        {
          title: {
            hinglish: '7 ka table',
            english: 'Table of 7',
            hindi: '7 का टेबल',
          },
          language: 'python',
          code: `for i in range(1, 11):
    print(f"7 x {i} = {7 * i}")`,
          output: '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70',
          note: {
            hinglish: 'Ek hi print 10 baar chalti hai, har baar i ki nayi value ke saath.',
            english: 'One print runs 10 times, each time with a new value of i.',
            hindi: 'एक ही print 10 बार चलती है, हर बार i की नई वैल्यू के साथ।',
          },
        },
        {
          title: {
            hinglish: 'While se ulta ginna',
            english: 'Counting down with while',
            hindi: 'While से उल्टा गिनना',
          },
          language: 'python',
          code: `n = 5
while n > 0:
    print(n)
    n = n - 1
print("Go!")`,
          output: '5\n4\n3\n2\n1\nGo!',
          note: {
            hinglish: 'n = n - 1 har round mein n ko 1 se kam karta hai. Jab n 0 hota hai, condition jhooth ho jati hai.',
            english: 'n = n - 1 decreases n by 1 in every round. When n becomes 0, the condition becomes false.',
            hindi: 'n = n - 1 हर राउंड में n को 1 से कम करता है। जब n 0 होता है, कंडीशन झूठ हो जाती है।',
          },
        },
      ],
      mcqs: [
        {
          q: {
            hinglish: 'range(1, 6) mein loop kitni baar chalega?',
            english: 'How many times will a loop over range(1, 6) run?',
            hindi: 'range(1, 6) में loop कितनी बार चलेगा?',
          },
          opts: [
            { hinglish: '5 baar (1, 2, 3, 4, 5)', english: '5 times (1, 2, 3, 4, 5)', hindi: '5 बार (1, 2, 3, 4, 5)' },
            { hinglish: '6 baar (1 se 6 tak)', english: '6 times (1 to 6)', hindi: '6 बार (1 से 6 तक)' },
            { hinglish: '4 baar', english: '4 times', hindi: '4 बार' },
            { hinglish: 'Kabhi nahi', english: 'Never', hindi: 'कभी नहीं' },
          ],
          ans: 0,
          expl: {
            hinglish: 'range ka end exclusive hota hai — 6 included nahi hota, isliye sirf 1, 2, 3, 4, 5 aate hain, kul 5 baar.',
            english: 'The end of a range is exclusive — 6 is not included, so only 1, 2, 3, 4, 5 come, 5 times in total.',
            hindi: 'range का end exclusive होता है — 6 included नहीं होता, इसलिए सिर्फ 1, 2, 3, 4, 5 आते हैं, कुल 5 बार।',
          },
        },
        {
          q: {
            hinglish: 'Is code ka output kya hoga? total = 0; for i in range(1, 4): total = total + i; print(total)',
            english: 'What will this code print? total = 0; for i in range(1, 4): total = total + i; print(total)',
            hindi: 'इस कोड का आउटपुट क्या होगा? total = 0; for i in range(1, 4): total = total + i; print(total)',
          },
          opts: [
            { hinglish: '6', english: '6', hindi: '6' },
            { hinglish: '10', english: '10', hindi: '10' },
            { hinglish: '3', english: '3', hindi: '3' },
            { hinglish: '0', english: '0', hindi: '0' },
          ],
          ans: 0,
          expl: {
            hinglish: 'range(1, 4) 1, 2, 3 deta hai. total 0 + 1 = 1, phir 1 + 2 = 3, phir 3 + 3 = 6 ban jata hai.',
            english: 'range(1, 4) gives 1, 2, 3. total becomes 0 + 1 = 1, then 1 + 2 = 3, then 3 + 3 = 6.',
            hindi: 'range(1, 4) 1, 2, 3 देता है। total 0 + 1 = 1, फिर 1 + 2 = 3, फिर 3 + 3 = 6 बन जाता है।',
          },
        },
        {
          q: {
            hinglish: 'While loop kabhi na rukne ka sabse aam kaaran kya hai?',
            english: 'What is the most common cause of a while loop that never stops?',
            hindi: 'While loop कभी न रुकने का सबसे आम कारण क्या है?',
          },
          opts: [
            { hinglish: 'Loop variable ko badalna bhool jana', english: 'Forgetting to change the loop variable', hindi: 'Loop variable को बदलना भूल जाना' },
            { hinglish: 'print likhna bhool jana', english: 'Forgetting to write print', hindi: 'print लिखना भूल जाना' },
            { hinglish: 'Colon lagana bhool jana', english: 'Forgetting to put a colon', hindi: 'Colon लगाना भूल जाना' },
            { hinglish: 'int ki jagah float likhna', english: 'Writing float instead of int', hindi: 'int की जगह float लिखना' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Agar loop variable kabhi badle hi nahi, to condition hamesha sach rahegi aur loop kabhi nahi rukega.',
            english: 'If the loop variable never changes, the condition will stay true forever and the loop will never stop.',
            hindi: 'अगर loop variable कभी बदले ही नहीं, तो कंडीशन हमेशा सच रहेगी और loop कभी नहीं रुकेगा।',
          },
        },
        {
          q: {
            hinglish: 'break aur continue mein kya farq hai?',
            english: 'What is the difference between break and continue?',
            hindi: 'break और continue में क्या फर्क है?',
          },
          opts: [
            { hinglish: 'break loop todta hai, continue sirf ek round skip karta hai', english: 'break breaks the loop, continue only skips one round', hindi: 'break loop तोड़ता है, continue सिर्फ एक राउंड skip करता है' },
            { hinglish: 'continue loop todta hai, break ek round skip karta hai', english: 'continue breaks the loop, break skips one round', hindi: 'continue loop तोड़ता है, break एक राउंड skip करता है' },
            { hinglish: 'Dono ek hi kaam karte hain', english: 'Both do the same job', hindi: 'दोनों एक ही काम करते हैं' },
            { hinglish: 'Dono loop ko tez karte hain', english: 'Both make the loop faster', hindi: 'दोनों loop को तेज़ करते हैं' },
          ],
          ans: 0,
          expl: {
            hinglish: 'break loop se bahar nikal jata hai aur loop dobara nahi chalta. continue sirf current round ko chhod kar agle round par chala jata hai.',
            english: 'break leaves the loop and the loop never runs again. continue only leaves the current round and moves to the next round.',
            hindi: 'break loop से बाहर निकल जाता है और loop दोबारा नहीं चलता। continue सिर्फ current round को छोड़ कर अगले राउंड पर चला जाता है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Even numbers ka sum',
          english: 'Sum of even numbers',
          hindi: 'Even नंबरों का sum',
        },
        task: {
          hinglish: 'Starter code ko chalao. Phir ek for loop jodo jo 1 se 10 tak ke even numbers (2, 4, 6, 8, 10) ka sum nikaale aur print kare. Done tab mana jayega jab output ki aakhri line "Even sum: 30" ho. Hint: i % 2 == 0 se even check hota hai.',
          english: 'Run the starter code. Then add a for loop that finds the sum of the even numbers from 1 to 10 (2, 4, 6, 8, 10) and prints it. You are done when the last line of the output is "Even sum: 30". Hint: i % 2 == 0 checks for even.',
          hindi: 'Starter कोड को चलाएँ। फिर एक for loop जोड़ें जो 1 से 10 तक के even नंबरों (2, 4, 6, 8, 10) का sum निकाले और print करे। आप तब सफल हैं जब आउटपुट की आखिरी लाइन "Even sum: 30" हो। Hint: i % 2 == 0 से even जाँचा जाता है।',
        },
        language: 'python',
        starter: `total = 0
for i in range(1, 11):
    total = total + i
print(f"Total: {total}")`,
        expected: 'Total: 55\nEven sum: 30',
      },
    },
    {
      id: 'py-functions',
      subjectId: 'python-programming',
      title: {
        hinglish: 'Functions — ek kaam, ek naam, baar-baar use',
        english: 'Functions — One Job, One Name, Use Again and Again',
        hindi: 'Functions — एक काम, एक नाम, बार-बार इस्तेमाल',
      },
      summary: {
        hinglish: 'Python mein def se function kaise banate hain, parameter aur return value kaise kaam karte hain, aur print aur return ka farq.',
        english: 'How to make a function with def in Python, how parameters and return values work, and the difference between print and return.',
        hindi: 'पायथन में def से function कैसे बनाते हैं, parameter और return value कैसे काम करते हैं, और print और return का फर्क।',
      },
      readMinutes: 14,
      sections: [
        {
          heading: {
            hinglish: 'Function kya hai?',
            english: 'What is a function?',
            hindi: 'Function क्या है?',
          },
          body: {
            hinglish: 'Function ek naam wala kaam hai. Socho aapke ghar mein ek mixer hai — aap usme aam daalte ho, button dabate ho, aur aam ka juice bahar aata hai. Mixer ko ye nahi pata ki aam kahan se aaya, aur aapko ye nahi pata ki andar blade kaise ghumta hai. Aapko sirf itna pata hai: andar ye daalo, bahar ye milega. Function bilkul waisa hi hai. Aap use kuch input dete ho (parameter), wo andar hisaab karta hai, aur aapko ek result wapas deta hai (return value). Jaise add(5, 3) ko 5 aur 3 do, to wo 8 wapas dega. Python mein function def se banta hai: def add(a, b): likho, phir andar return a + b likho. Function likhne ka fayda ye hai ki ek baar likho aur baar-baar use karo — bina dobara likhe. Bada program bhi chhote-chhote functions se banta hai, jaise ghar eenton se banta hai. Har function ka ek kaam hota hai, aur uska naam batata hai ki wo kya karta hai. print() bhi ek function hai — wo Python ne pehle se bana kar diya hai, aur aap apne function bhi bana sakte ho.',
            english: 'A function is a named job. Think of the mixer in your house — you put mangoes in it, press the button, and mango juice comes out. The mixer does not know where the mangoes came from, and you do not know how the blade spins inside. You only know this: put this in, get this out. A function is exactly like that. You give it some input (a parameter), it does the maths inside, and it gives you back a result (a return value). Like add(5, 3): give it 5 and 3, and it will give back 8. In Python, a function is made with def: write def add(a, b):, then write return a + b inside. The benefit of writing a function is that you write it once and use it again and again — without writing it again. A big program is also made of small functions, like a house is made of bricks. Every function has one job, and its name tells you what it does. print() is also a function — Python has already made it for you, and you can also make your own functions.',
            hindi: 'Function एक नाम वाला काम है। सोचिए आपके घर में एक मिक्सर है — आप उसमें आम डालते हैं, बटन दबाते हैं, और आम का जूस बाहर आता है। मिक्सर को यह नहीं पता कि आम कहाँ से आया, और आपको यह नहीं पता कि अंदर ब्लेड कैसे घूमता है। आपको सिर्फ इतना पता है: अंदर यह डालो, बाहर यह मिलेगा। Function बिल्कुल वैसा ही है। आप उसे कुछ इनपुट देते हैं (parameter), वह अंदर हिसाब करता है, और आपको एक रिज़ल्ट वापस देता है (return value)। जैसे add(5, 3) को 5 और 3 दो, तो वह 8 वापस देगा। पायथन में function def से बनता है: def add(a, b): लिखो, फिर अंदर return a + b लिखो। Function लिखने का फायदा यह है कि एक बार लिखो और बार-बार इस्तेमाल करो — बिना दोबारा लिखे। बड़ा प्रोग्राम भी छोटे-छोटे functions से बनता है, जैसे घर ईंटों से बनता है। हर function का एक काम होता है, और उसका नाम बताता है कि वह क्या करता है। print() भी एक function है — वह पायथन ने पहले से बना कर दिया है, और आप अपने function भी बना सकते हो।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example: dhaba ka cook aur waiter',
            english: 'Real-life example: a dhaba cook and waiter',
            hindi: 'असल ज़िंदगी का उदाहरण: ढाबे का कुक और वेटर',
          },
          body: {
            hinglish: 'Ek dhabe mein waiter customer se order leta hai aur cook ko batata hai: "ek plate dal fry banao". Cook dal fry banata hai aur waiter ko wapas deta hai. Waiter ko ye nahi pata ki cook ne kaun se masale daale, aur cook ko ye nahi pata ki customer kaun hai. Dono ke beech sirf do cheezein pass hoti hain: order (input) aur khana (output). Function mein bhi aisa hi hota hai. Jo code function ko bulata hai, wo waiter hai — wo function ko bulata hai aur input deta hai. Function cook hai — wo input par kaam karta hai aur result wapas deta hai. Agar kal menu mein naya khana aaye, to sirf cook ko naya tareeka seekhna padega, waiter ko nahi. Isi ko separation kehte hain: har function apna kaam khud karta hai, aur dusre function ke andar ki baat nahi jaanta. Isiliye bada program bhi samajhna aasan ho jata hai — aap ek function ko alag se dekh sakte ho, bina poore program ko padhe. Python mein ye separation aur bhi saaf hai, kyunki function sirf def aur indentation se banta hai.',
            english: 'At a dhaba, the waiter takes the order from the customer and tells the cook: "make one plate of dal fry". The cook makes the dal fry and gives it back to the waiter. The waiter does not know which spices the cook used, and the cook does not know who the customer is. Only two things pass between them: the order (input) and the food (output). A function works the same way. The code that calls the function is the waiter — it calls the function and gives the input. The function is the cook — it works on the input and gives back the result. If a new dish comes on the menu tomorrow, only the cook has to learn the new way, not the waiter. This is called separation: every function does its own job, and does not know what is inside another function. That is why even a big program becomes easy to understand — you can look at one function separately, without reading the whole program. In Python this separation is even cleaner, because a function is made only with def and indentation.',
            hindi: 'एक ढाबे में वेटर ग्राहक से ऑर्डर लेता है और कुक को बताता है: "एक प्लेट दाल फ्राई बनाओ"। कुक दाल फ्राई बनाता है और वेटर को वापस देता है। वेटर को यह नहीं पता कि कुक ने कौन से मसाले डाले, और कुक को यह नहीं पता कि ग्राहक कौन है। दोनों के बीच सिर्फ दो चीज़ें पास होती हैं: ऑर्डर (इनपुट) और खाना (आउटपुट)। Function में भी ऐसा ही होता है। जो कोड function को बुलाता है, वह वेटर है — वह function को बुलाता है और इनपुट देता है। Function कुक है — वह इनपुट पर काम करता है और रिज़ल्ट वापस देता है। अगर कल मेनू में नया खाना आए, तो सिर्फ कुक को नया तरीका सीखना पड़ेगा, वेटर को नहीं। इसी को separation कहते हैं: हर function अपना काम खुद करता है, और दूसरे function के अंदर की बात नहीं जानता। इसीलिए बड़ा प्रोग्राम भी समझना आसान हो जाता है — आप एक function को अलग से देख सकते हैं, बिना पूरे प्रोग्राम को पढ़े। पायथन में यह separation और भी साफ है, क्योंकि function सिर्फ def और indentation से बनता है।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step: add function, line by line',
            english: 'Step-by-step: the add function, line by line',
            hindi: 'चरण-दर-चरण: add function, लाइन दर लाइन',
          },
          body: {
            hinglish: 'Neeche wale program mein ek function hai: def add(a, b):. Ise line by line samjho. def ka matlab hai "ek function define kar raha hoon". add function ka naam hai. Bracket ke andar a, b parameters hain — ye do dabbe hain jinme function ko bulate waqt values aayengi. Agli line mein 4 space ka indentation hai aur return a + b likha hai — ye a aur b ko jod kar result wapas bhej deta hai. Ab neeche wali lines dekho: result = add(5, 3) mein function ko bulaya jata hai aur 5 aur 3 diye jate hain. Python 5 ko a mein aur 3 ko b mein rakh deta hai, phir function ke andar jata hai, 5 + 3 = 8 karta hai, aur 8 ko result mein rakh deta hai. Phir print(result) 8 chhapta hai. Dusri baar add(10, 20) bulane par wahi function 30 dega — function ko dobara likhna nahi pada. Dhyaan do: a aur b sirf add function ke andar exist karte hain. Function ke bahar a likhne par NameError aayega, kyunki bahar wale code ko pata hi nahi ki a kya hai. Ise scope kehte hain — har variable apne function ke andar hi rehta hai.',
            english: 'In the program below there is a function: def add(a, b):. Understand it line by line. def means "I am defining a function". add is the name of the function. Inside the brackets, a, b are parameters — two boxes into which values will come when the function is called. The next line has an indentation of 4 spaces and says return a + b — this adds a and b and sends the result back. Now look at the lines below: in result = add(5, 3), the function is called and 5 and 3 are given. Python puts 5 in a and 3 in b, then goes inside the function, does 5 + 3 = 8, and puts 8 in result. Then print(result) prints 8. Calling add(10, 20) a second time will give 30 from the same function — the function did not have to be written again. Note that a and b exist only inside the add function. Writing a outside the function will give a NameError, because the code outside does not even know what a is. This is called scope — every variable stays inside its own function.',
            hindi: 'नीचे वाले प्रोग्राम में एक function है: def add(a, b):। इसे लाइन दर लाइन समझिए। def का मतलब है "एक function define कर रहा हूँ"। add function का नाम है। ब्रैकेट के अंदर a, b parameters हैं — ये दो डिब्बे हैं जिनमें function को बुलाते वक्त वैल्यू आएँगी। अगली लाइन में 4 स्पेस का indentation है और return a + b लिखा है — यह a और b को जोड़ कर रिज़ल्ट वापस भेज देता है। अब नीचे वाली लाइनें देखिए: result = add(5, 3) में function को बुलाया जाता है और 5 और 3 दिए जाते हैं। पायथन 5 को a में और 3 को b में रख देता है, फिर function के अंदर जाता है, 5 + 3 = 8 करता है, और 8 को result में रख देता है। फिर print(result) 8 छापता है। दूसरी बार add(10, 20) बुलाने पर वही function 30 देगा — function को दोबारा लिखना नहीं पड़ा। ध्यान दो: a और b सिर्फ add function के अंदर exist करते हैं। Function के बाहर a लिखने पर NameError आएगा, क्योंकि बाहर वाले कोड को पता ही नहीं कि a क्या है। इसे scope कहते हैं — हर variable अपने function के अंदर ही रहता है।',
          },
          code: {
            title: {
              hinglish: 'Add function',
              english: 'Add function',
              hindi: 'Add function',
            },
            language: 'python',
            code: `def add(a, b):
    return a + b

result = add(5, 3)
print(f"Result: {result}")
print(f"Again: {add(10, 20)}")`,
            output: 'Result: 8\nAgain: 30',
            note: {
              hinglish: 'add ek baar likha gaya, do baar use hua. Pehli call mein a=5, b=3; dusri mein a=10, b=20.',
              english: 'add was written once and used twice. In the first call a=5, b=3; in the second a=10, b=20.',
              hindi: 'add एक बार लिखा गया, दो बार इस्तेमाल हुआ। पहली call में a=5, b=3; दूसरी में a=10, b=20।',
            },
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur ye hoti kyun hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और ये होती क्यों हैं',
          },
          body: {
            hinglish: 'Sabse badi galti: print aur return ko mix karna. Agar function ke andar sirf print(a + b) likha hai aur return nahi, to function kuch wapas nahi deta — wo None deta hai. Phir result = add(5, 3) mein result None ban jayega, aur print(result) None chhapega. Ye isliye hota hai kyunki print sirf screen par dikhata hai, wapas nahi bhejta. Dusri galti: return ke baad code likhna. return ke baad wali line kabhi nahi chalti, kyunki return function ko turant khatm kar deta hai. Teesri galti: function ko define karne se pehle bulana. Python upar se neeche chalta hai, isliye add(5, 3) se pehle def add likhna zaroori hai. Chauthi galti: parameter aur argument ko mix karna. add(5, 3) mein 5 aur 3 arguments hain (jo bheje gaye), aur a, b parameters hain (jo receive karte hain). Paanchvi galti: indentation bhoolna. def add(a, b): ke baad agli line 4 space andar honi chahiye, nahi to IndentationError aayega.',
            english: 'The biggest mistake: mixing up print and return. If inside a function you only write print(a + b) and no return, then the function gives back nothing — it gives None. Then in result = add(5, 3), result will become None, and print(result) will print None. This happens because print only shows on the screen, it does not send anything back. Second mistake: writing code after return. A line after return never runs, because return ends the function at once. Third mistake: calling a function before defining it. Python runs from top to bottom, so def add must be written before add(5, 3). Fourth mistake: mixing up parameter and argument. In add(5, 3), 5 and 3 are arguments (what was sent), and a, b are parameters (what receives them). Fifth mistake: forgetting indentation. After def add(a, b):, the next line must be 4 spaces inside, otherwise an IndentationError will come.',
            hindi: 'सबसे बड़ी गलती: print और return को मिलाना। अगर function के अंदर सिर्फ print(a + b) लिखा है और return नहीं, तो function कुछ वापस नहीं देता — वह None देता है। फिर result = add(5, 3) में result None बन जाएगा, और print(result) None छापेगा। यह इसलिए होता है क्योंकि print सिर्फ स्क्रीन पर दिखाता है, वापस नहीं भेजता। दूसरी गलती: return के बाद कोड लिखना। return के बाद वाली लाइन कभी नहीं चलती, क्योंकि return function को तुरंत खत्म कर देता है। तीसरी गलती: function को define करने से पहले बुलाना। पायथन ऊपर से नीचे चलता है, इसलिए add(5, 3) से पहले def add लिखना ज़रूरी है। चौथी गलती: parameter और argument को मिलाना। add(5, 3) में 5 और 3 arguments हैं (जो भेजे गए), और a, b parameters हैं (जो receive करते हैं)। पाँचवीं गलती: indentation भूलना। def add(a, b): के बाद अगली लाइन 4 स्पेस अंदर होनी चाहिए, नहीं तो IndentationError आएगा।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास स्थितियाँ',
          },
          body: {
            hinglish: 'Pehla edge case: bina return wala function. Agar function mein return nahi hai, to wo None wapas deta hai. Ye koi error nahi hai — aise function sirf kaam karte hain, jaise print karna. Dusra edge case: default parameter. def greet(name="Dost"): mein agar aap greet() bina argument ke bulate ho, to name ki value "Dost" ban jayegi. Ye tab kaam aata hai jab koi value optional ho. Teesra edge case: function jo khud ko bulata hai, matlab recursion. factorial(5) andar se factorial(4) bulata hai, phir factorial(3), aur aise chalte chalte factorial(0) par rukta hai. Recursion bahut taakatwar hai, lekin agar rukne ki condition na ho to ye kabhi nahi rukta aur RecursionError de deta hai. Chautha edge case: ek function se kai values wapas karna. Python mein return a, b likh kar do values wapas bheji ja sakti hain — ye ek tuple ban jata hai, jise aap x, y = func() se pakad sakte ho. Paanchva edge case: function ke andar parameter ki value badalna. add ke andar a = a + 1 likhne se bahar ki value nahi badalti, kyunki number ki copy milti hai — lekin list jaise type mein aisa nahi hota, jo agle article mein aayega.',
            english: 'First edge case: a function without return. If there is no return in a function, it gives back None. This is not an error — such functions only do a job, like printing. Second edge case: a default parameter. In def greet(name="Dost"):, if you call greet() without an argument, the value of name will become "Dost". This is useful when a value is optional. Third edge case: a function that calls itself, called recursion. factorial(5) calls factorial(4) from inside, then factorial(3), and going on like this it stops at factorial(0). Recursion is very powerful, but if there is no stopping condition it never stops and gives a RecursionError. Fourth edge case: giving back many values from one function. In Python you can send back two values by writing return a, b — this becomes a tuple, which you can catch with x, y = func(). Fifth edge case: changing the value of a parameter inside a function. Writing a = a + 1 inside add does not change the value outside, because a copy of the number is given — but this is not the case for a type like a list, which will come in the next article.',
            hindi: 'पहली खास स्थिति: बिना return वाला function। अगर function में return नहीं है, तो वह None वापस देता है। यह कोई एरर नहीं है — ऐसे function सिर्फ काम करते हैं, जैसे print करना। दूसरी खास स्थिति: default parameter। def greet(name="Dost"): में अगर आप greet() बिना argument के बुलाते हो, तो name की वैल्यू "Dost" बन जाएगी। यह तब काम आता है जब कोई वैल्यू optional हो। तीसरी खास स्थिति: function जो खुद को बुलाता है, मतलब recursion। factorial(5) अंदर से factorial(4) बुलाता है, फिर factorial(3), और ऐसे चलते चलते factorial(0) पर रुकता है। Recursion बहुत ताकतवर है, लेकिन अगर रुकने की कंडीशन न हो तो यह कभी नहीं रुकता और RecursionError दे देता है। चौथी खास स्थिति: एक function से कई वैल्यू वापस करना। पायथन में return a, b लिख कर दो वैल्यू वापस भेजी जा सकती हैं — यह एक tuple बन जाता है, जिसे आप x, y = func() से पकड़ सकते हो। पाँचवीं खास स्थिति: function के अंदर parameter की वैल्यू बदलना। add के अंदर a = a + 1 लिखने से बाहर की वैल्यू नहीं बदलती, क्योंकि नंबर की कॉपी मिलती है — लेकिन list जैसे टाइप में ऐसा नहीं होता, जो अगले लेख में आएगा।',
          },
        },
        {
          heading: {
            hinglish: 'Agar aap ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर आप यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish: 'Socho aap return a + b ki jagah return a * b kar do. Ab add(5, 3) 8 ki jagah 15 dega — function ka naam to add hai, lekin kaam guna ka ho gaya. Isiliye function ka naam aur kaam hamesha match karne chahiye, nahi to padhne wala confuse ho jayega. Ab socho aap add(5, 3) ki jagah add(3, 5) kar do. Result wahi 8 hoga, kyunki jodne mein order se farq nahi padta. Lekin agar function subtract hota, to 5 - 3 = 2 aur 3 - 5 = -2 hota — order ka farq dikhta. Ab socho aap return ki jagah print(a + b) likh do. Ab function 8 chhap dega, lekin result = add(5, 3) mein result None ban jayega, aur aage ka hisaab gadbad ho jayega. Ab socho aap function ke andar print bhi laga do aur return bhi. Ab har call par print bhi hoga aur return bhi hoga — function dono kaam kar sakta hai, lekin best practice ye hai ki ek function ya to print kare ya return kare, dono nahi, taaki use dobara use karna aasan rahe.',
            english: 'Imagine you write return a * b instead of return a + b. Now add(5, 3) will give 15 instead of 8 — the name of the function is add, but its job has become multiplication. That is why the name and the job of a function must always match, otherwise the reader will get confused. Now imagine you write add(3, 5) instead of add(5, 3). The result will still be 8, because the order does not matter in addition. But if the function were subtract, then 5 - 3 = 2 and 3 - 5 = -2 — the order would matter. Now imagine you write print(a + b) instead of return. Now the function will print 8, but in result = add(5, 3), result will become None, and the maths ahead will go wrong. Now imagine you put both a print and a return inside the function. Now every call will both print and return — a function can do both, but the best practice is that one function should either print or return, not both, so that it stays easy to reuse.',
            hindi: 'सोचिए आप return a + b की जगह return a * b कर दो। अब add(5, 3) 8 की जगह 15 देगा — function का नाम तो add है, लेकिन काम गुणा का हो गया। इसीलिए function का नाम और काम हमेशा मेल खाने चाहिए, नहीं तो पढ़ने वाला confuse हो जाएगा। अब सोचिए आप add(5, 3) की जगह add(3, 5) कर दो। रिज़ल्ट वही 8 होगा, क्योंकि जोड़ने में order से फर्क नहीं पड़ता। लेकिन अगर function subtract होता, तो 5 - 3 = 2 और 3 - 5 = -2 होता — order का फर्क दिखता। अब सोचिए आप return की जगह print(a + b) लिख दो। अब function 8 छाप देगा, लेकिन result = add(5, 3) में result None बन जाएगा, और आगे का हिसाब गड़बड़ हो जाएगा। अब सोचिए आप function के अंदर print भी लगा दो और return भी। अब हर call पर print भी होगा और return भी होगा — function दोनों काम कर सकता है, लेकिन best practice यह है कि एक function या तो print करे या return करे, दोनों नहीं, ताकि उसे दोबारा इस्तेमाल करना आसान रहे।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'Function ek naam wala kaam hai jo def se banta hai, input leta hai (parameter), hisaab karta hai, aur result wapas deta hai (return value). Ek baar likho, baar-baar use karo. print aur return alag hain: print sirf dikhata hai, return value wapas bhejta hai. Function ko bulane se pehle define karna zaroori hai. Parameter wo hai jo function receive karta hai, argument wo hai jo bulane wala bhejta hai. Har variable ka scope apne function tak hota hai. Bina return wala function None deta hai. Agle article mein hum seekhenge ki kai values ko ek saath kaise rakha jata hai — lists aur dictionaries.',
            english: 'A function is a named job made with def, which takes input (a parameter), does the maths, and gives back a result (a return value). Write it once, use it again and again. print and return are different: print only shows, return sends the value back. A function must be defined before it is called. A parameter is what the function receives, an argument is what the caller sends. Every variable has scope only inside its own function. A function without return gives None. In the next article we will learn how many values are kept together — lists and dictionaries.',
            hindi: 'Function एक नाम वाला काम है जो def से बनता है, इनपुट लेता है (parameter), हिसाब करता है, और रिज़ल्ट वापस देता है (return value)। एक बार लिखो, बार-बार इस्तेमाल करो। print और return अलग हैं: print सिर्फ दिखाता है, return वैल्यू वापस भेजता है। Function को बुलाने से पहले define करना ज़रूरी है। Parameter वह है जो function receive करता है, argument वह है जो बुलाने वाला भेजता है। हर variable का scope अपने function तक होता है। बिना return वाला function None देता है। अगले लेख में हम सीखेंगे कि कई वैल्यू को एक साथ कैसे रखा जाता है — lists और dictionaries।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Function call ka flow',
          english: 'The flow of a function call',
          hindi: 'Function call का फ्लो',
        },
        nodes: [
          { t: { hinglish: 'add(5, 3) bulaya gaya', english: 'add(5, 3) is called', hindi: 'add(5, 3) बुलाया गया' } },
          { t: { hinglish: 'a = 5, b = 3 milte hain', english: 'a = 5, b = 3 are received', hindi: 'a = 5, b = 3 मिलते हैं' } },
          { t: { hinglish: 'Andar hisaab: 5 + 3', english: 'Maths inside: 5 + 3', hindi: 'अंदर हिसाब: 5 + 3' } },
          { t: { hinglish: 'return 8, wapas bulane wale ko', english: 'return 8, back to the caller', hindi: 'return 8, वापस बुलाने वाले को' } },
        ],
      },
      codeExamples: [
        {
          title: {
            hinglish: 'Square nikaalne wala function',
            english: 'A function that finds the square',
            hindi: 'Square निकालने वाला function',
          },
          language: 'python',
          code: `def square(n):
    return n * n

print(square(4))
print(square(9))`,
          output: '16\n81',
          note: {
            hinglish: 'square(4) mein n = 4 hota hai aur 16 wapas aata hai. square(9) mein n = 9 hota hai aur 81 wapas aata hai.',
            english: 'In square(4), n = 4 and 16 comes back. In square(9), n = 9 and 81 comes back.',
            hindi: 'square(4) में n = 4 होता है और 16 वापस आता है। square(9) में n = 9 होता है और 81 वापस आता है।',
          },
        },
        {
          title: {
            hinglish: 'Print vs return ka farq',
            english: 'The difference between print and return',
            hindi: 'Print vs return का फर्क',
          },
          language: 'python',
          code: `def show(n):
    print(n)

def give(n):
    return n

x = show(5)
y = give(5)
print(f"x: {x}, y: {y}")`,
          output: '5\nx: None, y: 5',
          note: {
            hinglish: 'show sirf chhapta hai, isliye x None ban jata hai. give value wapas bhejta hai, isliye y 5 ban jata hai.',
            english: 'show only prints, so x becomes None. give sends the value back, so y becomes 5.',
            hindi: 'show सिर्फ छापता है, इसलिए x None बन जाता है। give वैल्यू वापस भेजता है, इसलिए y 5 बन जाता है।',
          },
        },
      ],
      mcqs: [
        {
          q: {
            hinglish: 'Is code ka output kya hoga? def add(a, b): return a + b; print(add(2, 3))',
            english: 'What will this code print? def add(a, b): return a + b; print(add(2, 3))',
            hindi: 'इस कोड का आउटपुट क्या होगा? def add(a, b): return a + b; print(add(2, 3))',
          },
          opts: [
            { hinglish: '5', english: '5', hindi: '5' },
            { hinglish: '23', english: '23', hindi: '23' },
            { hinglish: 'None', english: 'None', hindi: 'None' },
            { hinglish: 'Error', english: 'Error', hindi: 'एरर' },
          ],
          ans: 0,
          expl: {
            hinglish: 'add(2, 3) mein a = 2, b = 3 hote hain, aur return 2 + 3 = 5 karta hai.',
            english: 'In add(2, 3), a = 2, b = 3, and return gives 2 + 3 = 5.',
            hindi: 'add(2, 3) में a = 2, b = 3 होते हैं, और return 2 + 3 = 5 करता है।',
          },
        },
        {
          q: {
            hinglish: 'add(5, 3) mein 5 aur 3 ko kya kehte hain?',
            english: 'In add(5, 3), what are 5 and 3 called?',
            hindi: 'add(5, 3) में 5 और 3 को क्या कहते हैं?',
          },
          opts: [
            { hinglish: 'Arguments', english: 'Arguments', hindi: 'Arguments' },
            { hinglish: 'Parameters', english: 'Parameters', hindi: 'Parameters' },
            { hinglish: 'Variables', english: 'Variables', hindi: 'Variables' },
            { hinglish: 'Return values', english: 'Return values', hindi: 'Return values' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Jo values bulate waqt bheji jati hain, wo arguments hoti hain. Jo function receive karta hai (a, b), wo parameters hote hain.',
            english: 'The values sent at the time of calling are arguments. What the function receives (a, b) are parameters.',
            hindi: 'जो वैल्यू बुलाते वक्त भेजी जाती हैं, वह arguments होती हैं। जो function receive करता है (a, b), वह parameters होते हैं।',
          },
        },
        {
          q: {
            hinglish: 'Function ke andar sirf print hai, return nahi. x = func() ke baad x ki value kya hogi?',
            english: 'A function has only print inside, no return. After x = func(), what will the value of x be?',
            hindi: 'Function के अंदर सिर्फ print है, return नहीं। x = func() के बाद x की वैल्यू क्या होगी?',
          },
          opts: [
            { hinglish: 'None', english: 'None', hindi: 'None' },
            { hinglish: '0', english: '0', hindi: '0' },
            { hinglish: 'Jo print hua, wahi', english: 'Whatever was printed', hindi: 'जो print हुआ, वही' },
            { hinglish: 'Error', english: 'Error', hindi: 'एरर' },
          ],
          ans: 0,
          expl: {
            hinglish: 'print sirf screen par dikhata hai, value wapas nahi bhejta. Bina return ke function None deta hai.',
            english: 'print only shows on the screen, it does not send a value back. A function without return gives None.',
            hindi: 'print सिर्फ स्क्रीन पर दिखाता है, वैल्यू वापस नहीं भेजता। बिना return के function None देता है।',
          },
        },
        {
          q: {
            hinglish: 'Function ko bulane se pehle kya zaroori hai?',
            english: 'What is necessary before calling a function?',
            hindi: 'Function को बुलाने से पहले क्या ज़रूरी है?',
          },
          opts: [
            { hinglish: 'Function ko pehle define karna', english: 'Define the function first', hindi: 'Function को पहले define करना' },
            { hinglish: 'Function ko import karna', english: 'Import the function', hindi: 'Function को import करना' },
            { hinglish: 'Function ko print karna', english: 'Print the function', hindi: 'Function को print करना' },
            { hinglish: 'Kuch nahi — kahin se bhi bula sakte ho', english: 'Nothing — you can call it from anywhere', hindi: 'कुछ नहीं — कहीं से भी बुला सकते हो' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Python upar se neeche chalta hai, isliye def wali line call se pehle aani chahiye, nahi to NameError aayega.',
            english: 'Python runs from top to bottom, so the def line must come before the call, otherwise a NameError will come.',
            hindi: 'पायथन ऊपर से नीचे चलता है, इसलिए def वाली लाइन call से पहले आनी चाहिए, नहीं तो NameError आएगा।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Apna function banao: double karo',
          english: 'Make your own function: double it',
          hindi: 'अपना function बनाओ: double करो',
        },
        task: {
          hinglish: 'Starter code ko chalao. Phir ek function double_it(n) banao jo n * 2 return kare, aur use 7 aur 10 par bula kar print karo. Done tab mana jayega jab output mein 14 aur 20 dikhe.',
          english: 'Run the starter code. Then make a function double_it(n) that returns n * 2, and call it on 7 and 10 and print the results. You are done when the output shows 14 and 20.',
          hindi: 'Starter कोड को चलाएँ। फिर एक function double_it(n) बनाएँ जो n * 2 return करे, और उसे 7 और 10 पर बुला कर print करें। आप तब सफल हैं जब आउटपुट में 14 और 20 दिखें।',
        },
        language: 'python',
        starter: `def add(a, b):
    return a + b

print(add(2, 3))`,
        expected: '5\n14\n20',
      },
    },
    {
      id: 'py-lists-dicts',
      subjectId: 'python-programming',
      title: {
        hinglish: 'Lists aur dictionaries — kai values ek saath',
        english: 'Lists and Dictionaries — Many Values Together',
        hindi: 'Lists और Dictionaries — कई वैल्यू एक साथ',
      },
      summary: {
        hinglish: 'List kya hai, index kaise kaam karta hai, append aur loop kaise use hote hain, aur dictionary mein key-value pairs kaise rakhe jate hain.',
        english: 'What a list is, how indexes work, how append and loops are used, and how key-value pairs are kept in a dictionary.',
        hindi: 'List क्या है, index कैसे काम करता है, append और loop कैसे इस्तेमाल होते हैं, और dictionary में key-value pairs कैसे रखे जाते हैं।',
      },
      readMinutes: 15,
      sections: [
        {
          heading: {
            hinglish: 'List kya hai?',
            english: 'What is a list?',
            hindi: 'List क्या है?',
          },
          body: {
            hinglish: 'Ab tak har variable mein ek hi value rakhi jati thi — ek naam, ek age, ek price. Lekin asli zindagi mein cheezein group mein aati hain: class mein 30 students ke naam, dukaan mein 50 items ke daam, cricket team mein 11 players. In sab ko alag-alag variable mein rakhna pagalpan hoga. List ek hi variable mein kai values rakhne ka tareeka hai. Python mein list square bracket se banti hai: names = ["Sid", "Asha", "Ravi"]. Ye ek dabba hai jisme teen chhote dabbe hain. Har value ka ek index hota hai — matlab uski position. Pehli value ka index 0 hota hai, dusri ka 1, teesri ka 2. Ye 0 se shuru hona beginners ko hamesha confuse karta hai, lekin ye programming ki duniya ka rule hai. names[0] se "Sid" milega, names[1] se "Asha" milega. List mein values badli bhi ja sakti hain: names[1] = "Asha Verma" likhne par dusri value badal jayegi. Aur nayi value jodi bhi ja sakti hai: names.append("Karan") se list mein ek aur naam jud jayega.',
            english: 'Until now, every variable held only one value — one name, one age, one price. But in real life things come in groups: the names of 30 students in a class, the prices of 50 items in a shop, 11 players in a cricket team. Keeping all of these in separate variables would be madness. A list is a way to keep many values in one variable. In Python, a list is made with square brackets: names = ["Sid", "Asha", "Ravi"]. This is one box that has three small boxes inside it. Every value has an index — its position. The first value has index 0, the second has 1, the third has 2. This starting from 0 always confuses beginners, but it is the rule of the programming world. names[0] will give "Sid", names[1] will give "Asha". Values in a list can also be changed: writing names[1] = "Asha Verma" will change the second value. And a new value can also be added: names.append("Karan") will add one more name to the list.',
            hindi: 'अब तक हर variable में एक ही वैल्यू रखी जाती थी — एक नाम, एक age, एक price। लेकिन असली ज़िंदगी में चीज़ें group में आती हैं: क्लास में 30 छात्रों के नाम, दुकान में 50 items के दाम, क्रिकेट टीम में 11 players। इन सब को अलग-अलग variable में रखना पागलपन होगा। List एक ही variable में कई वैल्यू रखने का तरीका है। पायथन में list square bracket से बनती है: names = ["Sid", "Asha", "Ravi"]। यह एक डिब्बा है जिसमें तीन छोटे डिब्बे हैं। हर वैल्यू का एक index होता है — मतलब उसकी position। पहली वैल्यू का index 0 होता है, दूसरी का 1, तीसरी का 2। यह 0 से शुरू होना beginners को हमेशा confuse करता है, लेकिन यह प्रोग्रामिंग की दुनिया का नियम है। names[0] से "Sid" मिलेगा, names[1] से "Asha" मिलेगा। List में वैल्यू बदली भी जा सकती हैं: names[1] = "Asha Verma" लिखने पर दूसरी वैल्यू बदल जाएगी। और नई वैल्यू जोड़ी भी जा सकती है: names.append("Karan") से list में एक और नाम जुड़ जाएगा।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example: train ki berth aur phone ki contact list',
            english: 'Real-life example: a train berth and a phone contact list',
            hindi: 'असल ज़िंदगी का उदाहरण: ट्रेन की बर्थ और फोन की contact list',
          },
          body: {
            hinglish: 'Train ke coach mein berth number 1 se shuru hote hain, lekin list mein index 0 se shuru hota hai — ye farq yaad rakhna zaroori hai. Dusra example: aapke phone ki contact list. Har contact ka ek naam hai aur ek number hai. Agar aap sirf naam ki list rakho, to number dhoondhna mushkil hoga. Isiliye contact list mein naam aur number ek saath rakhe jate hain — yehi dictionary hai. Dictionary mein har value ka ek key hota hai, jaise naam key hai aur number value hai. phone = {"Sid": 98765, "Asha": 91234} mein "Sid" key hai aur 98765 uski value hai. phone["Sid"] likhne par 98765 milega. List aur dictionary ka farq simple hai: list mein position se dhoondhte ho (pehla, dusra), dictionary mein naam se dhoondhte ho (Sid ka number). Jaise dukaan mein saaman shelf number se milta hai, aur phone mein contact naam se milta hai.',
            english: 'In a train coach, berth numbers start from 1, but in a list the index starts from 0 — it is important to remember this difference. A second example: the contact list in your phone. Every contact has a name and a number. If you kept only a list of names, finding the number would be hard. That is why in a contact list the name and the number are kept together — that is a dictionary. In a dictionary, every value has a key, like the name is the key and the number is the value. In phone = {"Sid": 98765, "Asha": 91234}, "Sid" is the key and 98765 is its value. Writing phone["Sid"] will give 98765. The difference between a list and a dictionary is simple: in a list you search by position (first, second), in a dictionary you search by name (Sid\'s number). Just as goods in a shop are found by shelf number, and a contact in a phone is found by name.',
            hindi: 'ट्रेन के कोच में बर्थ नंबर 1 से शुरू होते हैं, लेकिन list में index 0 से शुरू होता है — यह फर्क याद रखना ज़रूरी है। दूसरा उदाहरण: आपके फोन की contact list। हर contact का एक नाम है और एक नंबर है। अगर आप सिर्फ नाम की list रखो, तो नंबर ढूँढना मुश्किल होगा। इसीलिए contact list में नाम और नंबर एक साथ रखे जाते हैं — यही dictionary है। Dictionary में हर वैल्यू का एक key होता है, जैसे नाम key है और नंबर value है। phone = {"Sid": 98765, "Asha": 91234} में "Sid" key है और 98765 उसकी वैल्यू है। phone["Sid"] लिखने पर 98765 मिलेगा। List और dictionary का फर्क सरल है: list में position से ढूँढते हो (पहला, दूसरा), dictionary में नाम से ढूँढते हो (Sid का नंबर)। जैसे दुकान में सामान shelf नंबर से मिलता है, और फोन में contact नाम से मिलता है।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step: list par loop aur dictionary se hisaab',
            english: 'Step-by-step: a loop over a list and maths with a dictionary',
            hindi: 'चरण-दर-चरण: list पर loop और dictionary से हिसाब',
          },
          body: {
            hinglish: 'Neeche wale program mein pehle ek list hai: marks = [70, 80, 90]. Phir total = 0 banaya gaya hai. Phir for m in marks: loop chalta hai — ye loop list ke har item par ek baar chalta hai, bina range ke. Pehle round mein m = 70 hai, to total 0 + 70 = 70 ban jata hai. Dusre round mein m = 80 hai, to total 70 + 80 = 150. Teesre round mein m = 90 hai, to total 150 + 90 = 240. Phir avg = total / 3 likha hai — 240 / 3 = 80.0. Dhyaan do: Python mein / hamesha float deta hai, C ki tarah int nahi. Phir ek dictionary hai: student = {"name": "Sid", "age": 20, "marks": 240}. Isme teen key-value pairs hain. student["name"] se "Sid" milega, student["age"] se 20 milega. Aakhir mein print dono ko chhapta hai. Program ko padhne ka tareeka ye hai: pehle list ko samjho, phir loop ko samjho, phir dictionary ko samjho. Teenon mil kar ek poora student record banate hain — bina list aur dictionary ke ye record banane ke liye 6 alag variables chahiye hote.',
            english: 'In the program below, first there is a list: marks = [70, 80, 90]. Then total = 0 is made. Then the loop for m in marks: runs — this loop runs once on every item of the list, without a range. In the first round m = 70, so total becomes 0 + 70 = 70. In the second round m = 80, so total becomes 70 + 80 = 150. In the third round m = 90, so total becomes 150 + 90 = 240. Then avg = total / 3 is written — 240 / 3 = 80.0. Note that in Python, / always gives a float, not an int like in C. Then there is a dictionary: student = {"name": "Sid", "age": 20, "marks": 240}. It has three key-value pairs. student["name"] will give "Sid", student["age"] will give 20. At the end, print prints both. The way to read the program is this: first understand the list, then understand the loop, then understand the dictionary. All three together make one complete student record — without a list and a dictionary, making this record would need 6 separate variables.',
            hindi: 'नीचे वाले प्रोग्राम में पहले एक list है: marks = [70, 80, 90]। फिर total = 0 बनाया गया है। फिर for m in marks: loop चलता है — यह loop list के हर item पर एक बार चलता है, बिना range के। पहले राउंड में m = 70 है, तो total 0 + 70 = 70 बन जाता है। दूसरे राउंड में m = 80 है, तो total 70 + 80 = 150। तीसरे राउंड में m = 90 है, तो total 150 + 90 = 240। फिर avg = total / 3 लिखा है — 240 / 3 = 80.0। ध्यान दो: पायथन में / हमेशा float देता है, सी की तरह int नहीं। फिर एक dictionary है: student = {"name": "Sid", "age": 20, "marks": 240}। इसमें तीन key-value pairs हैं। student["name"] से "Sid" मिलेगा, student["age"] से 20 मिलेगा। आखिर में print दोनों को छापता है। प्रोग्राम को पढ़ने का तरीका यह है: पहले list को समझो, फिर loop को समझो, फिर dictionary को समझो। तीनों मिल कर एक पूरा student record बनाते हैं — बिना list और dictionary के यह record बनाने के लिए 6 अलग variables चाहिए होते।',
          },
          code: {
            title: {
              hinglish: 'Marks ka average aur student record',
              english: 'Average of marks and a student record',
              hindi: 'Marks का average और student record',
            },
            language: 'python',
            code: `marks = [70, 80, 90]
total = 0
for m in marks:
    total = total + m
avg = total / 3
student = {"name": "Sid", "age": 20, "marks": total}
print(f"Average: {avg}")
print(f"Name: {student['name']}")`,
            output: 'Average: 80.0\nName: Sid',
            note: {
              hinglish: 'for m in marks mein m har round mein list ki agli value ban jata hai. student["name"] dictionary se value nikaalta hai.',
              english: 'In for m in marks, m becomes the next value of the list in every round. student["name"] takes the value out of the dictionary.',
              hindi: 'for m in marks में m हर राउंड में list की अगली वैल्यू बन जाता है। student["name"] dictionary से वैल्यू निकालता है।',
            },
          },
        },
        {
          heading: {
            hinglish: 'Common mistakes — aur ye hoti kyun hain',
            english: 'Common mistakes — and why they happen',
            hindi: 'आम गलतियाँ — और ये होती क्यों हैं',
          },
          body: {
            hinglish: 'Sabse badi galti: index 1 se shuru karna. names = ["Sid", "Asha", "Ravi"] mein names[1] "Asha" hai, "Sid" nahi. Pehla item hamesha index 0 par hota hai. Ye galti isliye hoti hai kyunki real life mein hum 1 se ginte hain, lekin programming mein 0 se. Dusri galti: list ke bahar ka index use karna. names[5] likhne par IndexError aayega, kyunki list mein sirf 3 items hain. Teesri galti: dictionary mein galat key likhna. student["Name"] likhne par KeyError aayega, kyunki key "name" chhote n se hai, "Name" bade N se nahi. Python mein key case-sensitive hoti hai. Chauthi galti: list ko copy samajhna. b = a likhne par b ek nayi list nahi banti — b aur a ek hi list ki taraf point karte hain. b.append(4) karne par a mein bhi 4 jud jayega. Ye isliye hota hai kyunki list mutable hai, matlab badli ja sakti hai, aur = sirf naam deta hai, copy nahi banata. Paanchvi galti: append ko = se likhna. names = names.append("Karan") galat hai, kyunki append kuch wapas nahi deta — wo None deta hai, aur names None ban jayega.',
            english: 'The biggest mistake: starting the index from 1. In names = ["Sid", "Asha", "Ravi"], names[1] is "Asha", not "Sid". The first item is always at index 0. This mistake happens because in real life we count from 1, but in programming we count from 0. Second mistake: using an index outside the list. Writing names[5] will give an IndexError, because the list has only 3 items. Third mistake: writing the wrong key in a dictionary. Writing student["Name"] will give a KeyError, because the key is "name" with a small n, not "Name" with a capital N. In Python, a key is case-sensitive. Fourth mistake: thinking a list is copied. Writing b = a does not make a new list — b and a point to the same list. Doing b.append(4) will also add 4 to a. This happens because a list is mutable, meaning it can be changed, and = only gives a name, it does not make a copy. Fifth mistake: writing append with =. names = names.append("Karan") is wrong, because append gives back nothing — it gives None, and names will become None.',
            hindi: 'सबसे बड़ी गलती: index 1 से शुरू करना। names = ["Sid", "Asha", "Ravi"] में names[1] "Asha" है, "Sid" नहीं। पहला item हमेशा index 0 पर होता है। यह गलती इसलिए होती है क्योंकि real life में हम 1 से गिनते हैं, लेकिन प्रोग्रामिंग में 0 से। दूसरी गलती: list के बाहर का index इस्तेमाल करना। names[5] लिखने पर IndexError आएगा, क्योंकि list में सिर्फ 3 items हैं। तीसरी गलती: dictionary में गलत key लिखना। student["Name"] लिखने पर KeyError आएगा, क्योंकि key "name" छोटे n से है, "Name" बड़े N से नहीं। पायथन में key case-sensitive होती है। चौथी गलती: list को copy समझना। b = a लिखने पर b एक नई list नहीं बनती — b और a एक ही list की तरफ point करते हैं। b.append(4) करने पर a में भी 4 जुड़ जाएगा। यह इसलिए होता है क्योंकि list mutable है, मतलब बदली जा सकती है, और = सिर्फ नाम देता है, copy नहीं बनाता। पाँचवीं गलती: append को = से लिखना। names = names.append("Karan") गलत है, क्योंकि append कुछ वापस नहीं देता — वह None देता है, और names None बन जाएगा।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास स्थितियाँ',
          },
          body: {
            hinglish: 'Pehla edge case: khaali list. items = [] mein koi item nahi hai, aur items[0] likhne par IndexError aayega. Khaali list par loop chalane se kuch nahi hota — loop ek baar bhi nahi chalta. Dusra edge case: negative index. names[-1] aakhri item deta hai, names[-2] usse pehle wala. Ye Python ki khaasiyat hai — C mein aisa nahi hota. Teesra edge case: dictionary mein key nahi milna. student.get("city") likhne par error nahi aayega — None milega. .get() safe tareeka hai key dhoondhne ka. Chautha edge case: list mein alag-alag types. [1, "Sid", 3.5] bilkul allowed hai, lekin aisa karna achhi aadat nahi hai, kyunki loop mein har item ka type alag hoga aur hisaab gadbad ho sakta hai. Paanchva edge case: list ke andar list. [[1, 2], [3, 4]] mein do lists hain, aur grid[0][1] se 2 milega. Ye aage 2D data ke liye kaam aayega, jaise chess board ya spreadsheet.',
            english: 'First edge case: an empty list. In items = [], there is no item, and writing items[0] will give an IndexError. Running a loop over an empty list does nothing — the loop does not run even once. Second edge case: a negative index. names[-1] gives the last item, names[-2] gives the one before it. This is a speciality of Python — it does not happen in C. Third edge case: a key not found in a dictionary. Writing student.get("city") will not give an error — it will give None. .get() is the safe way to look for a key. Fourth edge case: different types in a list. [1, "Sid", 3.5] is fully allowed, but doing this is not a good habit, because in a loop every item will have a different type and the maths can go wrong. Fifth edge case: a list inside a list. In [[1, 2], [3, 4]] there are two lists, and grid[0][1] will give 2. This will be useful later for 2D data, like a chess board or a spreadsheet.',
            hindi: 'पहली खास स्थिति: खाली list। items = [] में कोई item नहीं है, और items[0] लिखने पर IndexError आएगा। खाली list पर loop चलाने से कुछ नहीं होता — loop एक बार भी नहीं चलता। दूसरी खास स्थिति: negative index। names[-1] आखिरी item देता है, names[-2] उससे पहले वाला। यह पायथन की खासियत है — सी में ऐसा नहीं होता। तीसरी खास स्थिति: dictionary में key नहीं मिलना। student.get("city") लिखने पर एरर नहीं आएगा — None मिलेगा। .get() safe तरीका है key ढूँढने का। चौथी खास स्थिति: list में अलग-अलग types। [1, "Sid", 3.5] बिल्कुल allowed है, लेकिन ऐसा करना अच्छी आदत नहीं है, क्योंकि loop में हर item का टाइप अलग होगा और हिसाब गड़बड़ हो सकता है। पाँचवीं खास स्थिति: list के अंदर list। [[1, 2], [3, 4]] में दो lists हैं, और grid[0][1] से 2 मिलेगा। यह आगे 2D डेटा के लिए काम आएगा, जैसे chess board या spreadsheet।',
          },
        },
        {
          heading: {
            hinglish: 'Agar aap ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर आप यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish: 'Socho aap marks = [70, 80, 90] ki jagah marks = [70, 80] kar do. Ab total 150 ban jayega aur avg 75.0 ban jayega — kyunki total / 3 ki jagah total / 2 likhna padega, nahi to avg galat ho jayega. Isiliye avg = total / len(marks) likhna behtar hai — len() list ki length deta hai, aur list badalne par avg khud sahi ho jata hai. Ab socho aap for m in marks ki jagah for i in range(len(marks)): total = total + marks[i] likh do. Result wahi 240 hoga — sirf likhne ka tareeka badla hai. Pehla tareeka zyada Pythonic hai, dusra C jaisa hai. Ab socho aap student["marks"] = 250 kar do. Dictionary ki value badal jayegi, aur purani value 240 chali jayegi. Ab socho aap student["city"] = "Patna" kar do. Dictionary mein ek nayi key-value pair jud jayegi — dictionary mein nayi key banana itna hi simple hai. Ab socho aap marks.append(100) kar do. List mein 100 jud jayega aur total 340 ban jayega.',
            english: 'Imagine you write marks = [70, 80] instead of marks = [70, 80, 90]. Now total will become 150 and avg will become 75.0 — because instead of total / 3 you must write total / 2, otherwise avg will be wrong. That is why writing avg = total / len(marks) is better — len() gives the length of the list, and when the list changes, avg fixes itself. Now imagine you write for i in range(len(marks)): total = total + marks[i] instead of for m in marks. The result will still be 240 — only the way of writing has changed. The first way is more Pythonic, the second is like C. Now imagine you write student["marks"] = 250. The value in the dictionary will change, and the old value 240 will be gone. Now imagine you write student["city"] = "Patna". A new key-value pair will be added to the dictionary — making a new key in a dictionary is that simple. Now imagine you write marks.append(100). 100 will be added to the list and total will become 340.',
            hindi: 'सोचिए आप marks = [70, 80, 90] की जगह marks = [70, 80] कर दो। अब total 150 बन जाएगा और avg 75.0 बन जाएगा — क्योंकि total / 3 की जगह total / 2 लिखना पड़ेगा, नहीं तो avg गलत हो जाएगा। इसीलिए avg = total / len(marks) लिखना बेहतर है — len() list की length देता है, और list बदलने पर avg खुद सही हो जाता है। अब सोचिए आप for m in marks की जगह for i in range(len(marks)): total = total + marks[i] लिख दो। रिज़ल्ट वही 240 होगा — सिर्फ लिखने का तरीका बदला है। पहला तरीका ज़्यादा Pythonic है, दूसरा सी जैसा है। अब सोचिए आप student["marks"] = 250 कर दो। Dictionary की वैल्यू बदल जाएगी, और पुरानी वैल्यू 240 चली जाएगी। अब सोचिए आप student["city"] = "Patna" कर दो। Dictionary में एक नई key-value pair जुड़ जाएगी — dictionary में नई key बनाना इतना ही सरल है। अब सोचिए आप marks.append(100) कर दो। List में 100 जुड़ जाएगा और total 340 बन जाएगा।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'List ek hi variable mein kai values rakhti hai, aur index 0 se shuru hota hai. names[0] pehla item deta hai, names[-1] aakhri item deta hai. append() se nayi value judti hai, aur for loop se list ke har item par kaam hota hai. Dictionary mein key-value pairs hote hain, jaise {"name": "Sid"} — value key se milti hai, position se nahi. Key case-sensitive hoti hai, aur .get() se missing key par error nahi aata. b = a se list copy nahi hoti — dono ek hi list ki taraf point karte hain. Python subject yahin khatm hota hai — aapne pehla program, variables, if-else, loops, functions aur lists-dictionaries seekh liye. Ab aap chhote-chhote real programs bana sakte ho: bill banana, marks ka average nikaalna, aur contact list banana.',
            english: 'A list keeps many values in one variable, and the index starts from 0. names[0] gives the first item, names[-1] gives the last item. append() adds a new value, and a for loop works on every item of the list. A dictionary has key-value pairs, like {"name": "Sid"} — the value is found by key, not by position. A key is case-sensitive, and .get() does not give an error for a missing key. b = a does not copy a list — both point to the same list. The Python subject ends here — you have learned your first program, variables, if-else, loops, functions, and lists and dictionaries. Now you can make small real programs: making a bill, finding the average of marks, and making a contact list.',
            hindi: 'List एक ही variable में कई वैल्यू रखती है, और index 0 से शुरू होता है। names[0] पहला item देता है, names[-1] आखिरी item देता है। append() से नई वैल्यू जुड़ती है, और for loop से list के हर item पर काम होता है। Dictionary में key-value pairs होते हैं, जैसे {"name": "Sid"} — वैल्यू key से मिलती है, position से नहीं। Key case-sensitive होती है, और .get() से missing key पर एरर नहीं आता। b = a से list copy नहीं होती — दोनों एक ही list की तरफ point करते हैं। पायथन subject यहीं खत्म होता है — आपने पहला प्रोग्राम, variables, if-else, loops, functions और lists-dictionaries सीख लिए। अब आप छोटे-छोटे real प्रोग्राम बना सकते हो: बिल बनाना, marks का average निकालना, और contact list बनाना।',
          },
        },
      ],
      diagram: {
        kind: 'boxes',
        title: {
          hinglish: 'List: index aur value',
          english: 'List: index and value',
          hindi: 'List: index और value',
        },
        nodes: [
          { t: { hinglish: 'Index 0', english: 'Index 0', hindi: 'Index 0' }, s: { hinglish: '"Sid"', english: '"Sid"', hindi: '"Sid"' } },
          { t: { hinglish: 'Index 1', english: 'Index 1', hindi: 'Index 1' }, s: { hinglish: '"Asha"', english: '"Asha"', hindi: '"Asha"' } },
          { t: { hinglish: 'Index 2', english: 'Index 2', hindi: 'Index 2' }, s: { hinglish: '"Ravi"', english: '"Ravi"', hindi: '"Ravi"' } },
        ],
      },
      codeExamples: [
        {
          title: {
            hinglish: 'List mein naam jodna',
            english: 'Adding a name to a list',
            hindi: 'List में नाम जोड़ना',
          },
          language: 'python',
          code: `names = ["Sid", "Asha"]
names.append("Ravi")
print(names)
print(len(names))`,
          output: "['Sid', 'Asha', 'Ravi']\n3",
          note: {
            hinglish: 'append() list ke aakhir mein value jodta hai. len() batata hai ki list mein kitne items hain.',
            english: 'append() adds a value at the end of the list. len() tells you how many items are in the list.',
            hindi: 'append() list के आखिर में वैल्यू जोड़ता है। len() बताता है कि list में कितने items हैं।',
          },
        },
        {
          title: {
            hinglish: 'Dictionary se contact dhoondhna',
            english: 'Finding a contact from a dictionary',
            hindi: 'Dictionary से contact ढूँढना',
          },
          language: 'python',
          code: `phone = {"Sid": 98765, "Asha": 91234}
print(phone["Sid"])
print(phone.get("Ravi", "Nahi mila"))`,
          output: '98765\nNahi mila',
          note: {
            hinglish: '.get() mein dusri value default hoti hai — key na mile to wahi milti hai, error nahi aata.',
            english: 'In .get(), the second value is the default — if the key is not found, you get that instead of an error.',
            hindi: '.get() में दूसरी वैल्यू default होती है — key न मिले तो वही मिलती है, एरर नहीं आता।',
          },
        },
      ],
      mcqs: [
        {
          q: {
            hinglish: 'names = ["Sid", "Asha", "Ravi"] mein names[1] kya dega?',
            english: 'In names = ["Sid", "Asha", "Ravi"], what will names[1] give?',
            hindi: 'names = ["Sid", "Asha", "Ravi"] में names[1] क्या देगा?',
          },
          opts: [
            { hinglish: '"Asha"', english: '"Asha"', hindi: '"Asha"' },
            { hinglish: '"Sid"', english: '"Sid"', hindi: '"Sid"' },
            { hinglish: '"Ravi"', english: '"Ravi"', hindi: '"Ravi"' },
            { hinglish: 'Error', english: 'Error', hindi: 'एरर' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Index 0 se shuru hota hai: 0 = Sid, 1 = Asha, 2 = Ravi. Isliye names[1] Asha hai.',
            english: 'The index starts from 0: 0 = Sid, 1 = Asha, 2 = Ravi. So names[1] is Asha.',
            hindi: 'Index 0 से शुरू होता है: 0 = Sid, 1 = Asha, 2 = Ravi। इसलिए names[1] Asha है।',
          },
        },
        {
          q: {
            hinglish: 'Is code ka output kya hoga? nums = [2, 4]; nums.append(6); print(len(nums))',
            english: 'What will this code print? nums = [2, 4]; nums.append(6); print(len(nums))',
            hindi: 'इस कोड का आउटपुट क्या होगा? nums = [2, 4]; nums.append(6); print(len(nums))',
          },
          opts: [
            { hinglish: '3', english: '3', hindi: '3' },
            { hinglish: '2', english: '2', hindi: '2' },
            { hinglish: '6', english: '6', hindi: '6' },
            { hinglish: 'Error', english: 'Error', hindi: 'एरर' },
          ],
          ans: 0,
          expl: {
            hinglish: 'append(6) se list mein ek aur item jud jata hai, to list [2, 4, 6] ban jati hai aur len 3 ho jata hai.',
            english: 'append(6) adds one more item to the list, so the list becomes [2, 4, 6] and len becomes 3.',
            hindi: 'append(6) से list में एक और item जुड़ जाता है, तो list [2, 4, 6] बन जाती है और len 3 हो जाता है।',
          },
        },
        {
          q: {
            hinglish: 'student = {"name": "Sid", "age": 20} mein student["age"] kya dega?',
            english: 'In student = {"name": "Sid", "age": 20}, what will student["age"] give?',
            hindi: 'student = {"name": "Sid", "age": 20} में student["age"] क्या देगा?',
          },
          opts: [
            { hinglish: '20', english: '20', hindi: '20' },
            { hinglish: '"Sid"', english: '"Sid"', hindi: '"Sid"' },
            { hinglish: '"age"', english: '"age"', hindi: '"age"' },
            { hinglish: 'Error', english: 'Error', hindi: 'एरर' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Dictionary mein value key se milti hai. "age" key ki value 20 hai, isliye student["age"] 20 deta hai.',
            english: 'In a dictionary, the value is found by key. The value of the key "age" is 20, so student["age"] gives 20.',
            hindi: 'Dictionary में वैल्यू key से मिलती है। "age" key की वैल्यू 20 है, इसलिए student["age"] 20 देता है।',
          },
        },
        {
          q: {
            hinglish: 'a = [1, 2]; b = a; b.append(3); — ab a kya hai?',
            english: 'a = [1, 2]; b = a; b.append(3); — what is a now?',
            hindi: 'a = [1, 2]; b = a; b.append(3); — अब a क्या है?',
          },
          opts: [
            { hinglish: '[1, 2, 3]', english: '[1, 2, 3]', hindi: '[1, 2, 3]' },
            { hinglish: '[1, 2]', english: '[1, 2]', hindi: '[1, 2]' },
            { hinglish: '[3]', english: '[3]', hindi: '[3]' },
            { hinglish: 'Error', english: 'Error', hindi: 'एरर' },
          ],
          ans: 0,
          expl: {
            hinglish: 'b = a se copy nahi banti — dono ek hi list ki taraf point karte hain. b mein append karne par a mein bhi jud jata hai.',
            english: 'b = a does not make a copy — both point to the same list. Appending to b also adds to a.',
            hindi: 'b = a से copy नहीं बनती — दोनों एक ही list की तरफ point करते हैं। b में append करने पर a में भी जुड़ जाता है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Shopping list banao',
          english: 'Make a shopping list',
          hindi: 'Shopping list बनाओ',
        },
        task: {
          hinglish: 'Starter code mein sirf ek list hai. Pehle list mein "Atta" jodo (append se), phir poori list print karo, phir ek for loop se har item ko alag line mein print karo, aur aakhir mein f"Total items: {len(items)}" print karo. Done tab mana jayega jab output ki pehli line [\'Chai\', \'Cheeni\', \'Doodh\', \'Atta\'] ho aur aakhri line "Total items: 4" ho.',
          english: 'The starter code has only a list. First add "Atta" to the list (with append), then print the whole list, then print every item on its own line with a for loop, and finally print f"Total items: {len(items)}". You are done when the first line of the output is [\'Chai\', \'Cheeni\', \'Doodh\', \'Atta\'] and the last line is "Total items: 4".',
          hindi: 'Starter कोड में सिर्फ एक list है। पहले list में "Atta" जोड़ें (append से), फिर पूरी list print करें, फिर एक for loop से हर item को अलग लाइन में print करें, और आखिर में f"Total items: {len(items)}" print करें। आप तब सफल हैं जब आउटपुट की पहली लाइन [\'Chai\', \'Cheeni\', \'Doodh\', \'Atta\'] हो और आखिरी लाइन "Total items: 4" हो।',
        },
        language: 'python',
        starter: `items = ["Chai", "Cheeni", "Doodh"]`,
        expected: "['Chai', 'Cheeni', 'Doodh', 'Atta']\nChai\nCheeni\nDoodh\nAtta\nTotal items: 4",
      },
    },
  ],
};
