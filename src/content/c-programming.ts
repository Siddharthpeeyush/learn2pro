// Learn2Pro v2 — C Programming subject content.
// All content written by AI in Learn2Pro's own style. Reference sites were
// used for facts only, never for wording or examples.
import type { Subject } from '../lib/types';

export const cProgramming: Subject = {
  id: 'c-programming',
  name: {
    hinglish: 'C Programming',
    english: 'C Programming',
    hindi: 'सी प्रोग्रामिंग',
  },
  tagline: {
    hinglish: 'Bilkul zero se C seekho — computer se baat karne ki pehli bhasha.',
    english: 'Learn C from absolute zero — the first language for talking to the computer.',
    hindi: 'बिल्कुल शुरुआत से सी सीखें — कंप्यूटर से बात करने की पहली भाषा।',
  },
  icon: '🔵',
  color: '#3b82f6',
  category: 'cse',
  articles: [
    {
      id: 'c-intro',
      subjectId: 'c-programming',
      title: {
        hinglish: 'C se pehchaan aur aapka pehla program',
        english: 'Introduction to C and Your First Program',
        hindi: 'सी से परिचय और आपका पहला प्रोग्राम',
      },
      summary: {
        hinglish: 'C kya hai, computer ise kaise samajhta hai, aur aapka pehla program — Hello, World — line by line.',
        english: 'What C is, how the computer understands it, and your first program — Hello, World — explained line by line.',
        hindi: 'सी क्या है, कंप्यूटर इसे कैसे समझता है, और आपका पहला प्रोग्राम — हैलो, वर्ल्ड — लाइन दर लाइन।',
      },
      readMinutes: 10,
      sections: [
        {
          heading: {
            hinglish: 'C kya hai?',
            english: 'What is C?',
            hindi: 'सी क्या है?',
          },
          body: {
            hinglish: 'C ek programming language hai — matlab computer ko instructions dene ka tareeka. Socho aapke paas ek bahut imaandaar naukar hai jo sirf wahi karta hai jo aap saaf-saaf bolte ho. Computer waisa hi hai. Aap C mein likhte ho "screen par ye likho", aur computer wahi karta hai. C ko 1972 mein Dennis Ritchie ne Bell Labs mein banaya tha. Ye purani hai, lekin aaj bhi operating system, fridge ke chip, car ke system aur phone ke andar ki cheezein C se banti hain. C ko "low-level" language kehte hain, kyunki ye computer ke hardware ke bahut kareeb kaam karti hai. Iska matlab ye hai ki C se aap computer ki memory ko seedha control kar sakte ho. Ye taakat bhi hai aur zimmedari bhi — galti par computer aapko nahi bachata, isliye C seekhna matlab computer ko gehrai se samajhna.',
            english: 'C is a programming language — a way of giving instructions to the computer. Imagine a very honest helper who does exactly what you say clearly, nothing more and nothing less. A computer is like that. You write "show this on the screen" in C, and the computer does exactly that. C was created in 1972 by Dennis Ritchie at Bell Labs. It is old, but it still powers operating systems, the chips inside fridges, car systems, and the inner parts of phones. C is called a "low-level" language because it works very close to the hardware of the computer. That means in C you can control the computer memory directly. This is both power and responsibility — the computer will not save you from a mistake, so learning C means understanding the computer deeply.',
            hindi: 'सी एक प्रोग्रामिंग भाषा है — कंप्यूटर को निर्देश देने का तरीका। सोचिए आपके पास एक बहुत ईमानदार सहायक है जो सिर्फ वही करता है जो आप साफ-साफ कहते हैं। कंप्यूटर वैसा ही है। आप सी में लिखते हैं "स्क्रीन पर यह लिखो", और कंप्यूटर वही करता है। सी को 1972 में डेनिस रिची ने बेल लैब्स में बनाया था। यह पुरानी है, लेकिन आज भी ऑपरेटिंग सिस्टम, फ्रिज की चिप, कार के सिस्टम और फोन के अंदर की चीज़ें सी से बनती हैं। सी को "लो-लेवल" भाषा कहते हैं, क्योंकि यह कंप्यूटर के हार्डवेयर के बहुत करीब काम करती है। इसका मतलब है कि सी से आप कंप्यूटर की मेमोरी को सीधे नियंत्रित कर सकते हैं। यह ताकत भी है और ज़िम्मेदारी भी — गलती पर कंप्यूटर आपको नहीं बचाता, इसलिए सी सीखना मतलब कंप्यूटर को गहराई से समझना।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example: recipe aur C program',
            english: 'Real-life example: a recipe and a C program',
            hindi: 'असल ज़िंदगी का उदाहरण: रेसिपी और सी प्रोग्राम',
          },
          body: {
            hinglish: 'Chai banane ki recipe socho: pehle paani ubalo, phir chai patti daalo, phir doodh daalo, phir chaan lo. Har step ek order mein hai, aur agar aap doodh pehle daal doge to chai kharab ho jayegi. C program bhi bilkul aisa hi hai — instructions ka ek order. Computer recipe ko upar se neeche padhta hai, ek ek karke. Jaise recipe mein "2 cup paani" ek measurement hai, waise hi program mein har cheez ka ek saaf type hota hai. Aur jaise cook ko pata hota hai ki gas par kadhai kab rakhni hai, waise hi C mein har instruction ka ek sahi waqt hota hai. Farq sirf itna hai ki recipe insaan padhta hai aur samajh jaata hai, lekin C program ko pehle compiler naam ki machine ko samjhana padta hai. Compiler aapke C code ko computer ki bhasha mein badalta hai, bilkul waise hi jaise translator Hindi ko English mein badalta hai.',
            english: 'Think of a recipe for making tea: first boil the water, then add the tea leaves, then add the milk, then strain it. Every step is in an order, and if you add the milk first, the tea will be spoiled. A C program is exactly like this — a set of instructions in order. The computer reads the recipe from top to bottom, one step at a time. Just as a recipe says "2 cups of water" as a measurement, every thing in a program has a clear type. And just as a cook knows when to put the pan on the stove, every instruction in C has a right time. The only difference is that a human reads a recipe and understands it, while a C program must first be explained to a machine called the compiler. The compiler changes your C code into the language of the computer, just like a translator changes Hindi into English.',
            hindi: 'चाय बनाने की रेसिपी सोचिए: पहले पानी उबालो, फिर चाय पत्ती डालो, फिर दूध डालो, फिर छान लो। हर कदम एक क्रम में है, और अगर आप दूध पहले डाल दोगे तो चाय खराब हो जाएगी। सी प्रोग्राम भी बिल्कुल ऐसा ही है — निर्देशों का एक क्रम। कंप्यूटर रेसिपी को ऊपर से नीचे पढ़ता है, एक-एक करके। जैसे रेसिपी में "2 कप पानी" एक माप है, वैसे ही प्रोग्राम में हर चीज़ का एक साफ प्रकार होता है। और जैसे रसोइए को पता होता है कि गैस पर कड़ाही कब रखनी है, वैसे ही सी में हर निर्देश का एक सही समय होता है। फर्क सिर्फ इतना है कि रेसिपी इंसान पढ़ता है और समझ जाता है, लेकिन सी प्रोग्राम को पहले कंपाइलर नाम की मशीन को समझाना पड़ता है। कंपाइलर आपके सी कोड को कंप्यूटर की भाषा में बदलता है, बिल्कुल वैसे ही जैसे अनुवादक हिंदी को अंग्रेज़ी में बदलता है।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step: pehla program, line by line',
            english: 'Step-by-step: your first program, line by line',
            hindi: 'चरण-दर-चरण: पहला प्रोग्राम, लाइन दर लाइन',
          },
          body: {
            hinglish: 'Neeche aapka pehla C program hai. Ise line by line samjho. Pehli line #include <stdio.h> ka matlab hai "screen par likhne wale tools le aao". stdio ka matlab hai standard input-output, aur .h ka matlab hai header file — jaise khana banane se pehle bartan nikaalna. Dusri line int main() ka matlab hai "program yahan se shuru hoga". main ek khaas naam hai jise computer hamesha pehle dhoondhta hai. Teesri line { ka matlab hai shuruaat, aur aakhri line } ka matlab hai khatm — ye dono bracket program ka dabba band karte hain. Andar wali line printf("Hello, World"); screen par Hello, World likhti hai. printf ka matlab hai print formatted. Semicolon ; har statement ka full stop hai — ye batata hai ki ek instruction khatm hui. Aakhir mein return 0; ka matlab hai "sab theek raha, program khatm". Jab aap program chalate ho, pehle compiler check karta hai ki sab sahi likha hai, phir computer use chalata hai aur screen par Hello, World dikhata hai.',
            english: 'Below is your first C program. Understand it line by line. The first line, #include <stdio.h>, means "bring in the tools for writing on the screen". stdio means standard input-output, and .h means a header file — like taking out the utensils before cooking. The second line, int main(), means "the program starts here". main is a special name that the computer always looks for first. The third line, {, means the beginning, and the last line, }, means the end — these two brackets close the box of the program. The line inside, printf("Hello, World");, writes Hello, World on the screen. printf means print formatted. The semicolon ; is the full stop of every statement — it tells the computer that one instruction is finished. At the end, return 0; means "everything went fine, the program is over". When you run the program, the compiler first checks that everything is written correctly, then the computer runs it and shows Hello, World on the screen.',
            hindi: 'नीचे आपका पहला सी प्रोग्राम है। इसे लाइन दर लाइन समझिए। पहली लाइन #include <stdio.h> का मतलब है "स्क्रीन पर लिखने वाले उपकरण ले आओ"। stdio का मतलब है स्टैंडर्ड इनपुट-आउटपुट, और .h का मतलब है हेडर फ़ाइल — जैसे खाना बनाने से पहले बर्तन निकालना। दूसरी लाइन int main() का मतलब है "प्रोग्राम यहाँ से शुरू होगा"। main एक खास नाम है जिसे कंप्यूटर हमेशा पहले ढूँढता है। तीसरी लाइन { का मतलब है शुरुआत, और आखिरी लाइन } का मतलब है खत्म — ये दोनों ब्रैकेट प्रोग्राम का डिब्बा बंद करते हैं। अंदर वाली लाइन printf("Hello, World"); स्क्रीन पर Hello, World लिखती है। printf का मतलब है प्रिंट फ़ॉर्मैटेड। सेमीकोलन ; हर स्टेटमेंट का फुल स्टॉप है — यह बताता है कि एक निर्देश खत्म हुआ। आखिर में return 0; का मतलब है "सब ठीक रहा, प्रोग्राम खत्म"। जब आप प्रोग्राम चलाते हैं, पहले कंपाइलर जाँचता है कि सब सही लिखा है, फिर कंप्यूटर उसे चलाता है और स्क्रीन पर Hello, World दिखाता है।',
          },
          code: {
            title: {
              hinglish: 'Pehla program: Hello, World',
              english: 'First program: Hello, World',
              hindi: 'पहला प्रोग्राम: हैलो, वर्ल्ड',
            },
            language: 'c',
            code: `#include <stdio.h>

int main() {
    printf("Hello, World");
    return 0;
}`,
            output: 'Hello, World',
            note: {
              hinglish: 'Har line ka kaam upar wale section mein samjhaya gaya hai. Semicolon mat bhoolna.',
              english: 'The job of every line is explained in the section above. Do not forget the semicolon.',
              hindi: 'हर लाइन का काम ऊपर वाले भाग में समझाया गया है। सेमीकोलन मत भूलना।',
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
            hinglish: 'Pehli galti: semicolon bhoolna. printf("Hello") ke baad ; nahi lagaya to compiler ruk jayega aur error dega. Ye isliye hoti hai kyunki hum bolte waqt full stop par dhyaan nahi dete, lekin computer ko har instruction ka end chahiye. Dusri galti: printf ko Printf ya PRINTF likhna. C case-sensitive hai — chhota p aur bada P alag hain, jaise "ram" aur "Ram" do alag naam hain. Teesri galti: #include wali line mein semicolon lagana. #include ek instruction nahi hai, ek order hai compiler ko, isliye iske baad ; nahi lagta. Chauthi galti: curly bracket band karna bhoolna. Agar } missing hai to compiler samajh nahi pata ki program kahan khatm hota hai. Paanchvi galti: main ke aage int nahi likhna. int batata hai ki main ek number wapas dega, aur ye C ke rule ka hissa hai. In sab galtiyon ka ek hi ilaaj hai — error message ko dhyaan se padho, wo hamesha line number batata hai.',
            english: 'First mistake: forgetting the semicolon. If you do not put ; after printf("Hello"), the compiler will stop and give an error. This happens because when we speak we do not pay attention to full stops, but the computer needs the end of every instruction. Second mistake: writing printf as Printf or PRINTF. C is case-sensitive — a small p and a capital P are different, like "ram" and "Ram" are two different names. Third mistake: putting a semicolon on the #include line. #include is not an instruction, it is an order to the compiler, so no ; comes after it. Fourth mistake: forgetting to close a curly bracket. If } is missing, the compiler cannot understand where the program ends. Fifth mistake: not writing int before main. int tells the computer that main will return a number, and this is part of the rules of C. All these mistakes have one cure — read the error message carefully, because it always tells you the line number.',
            hindi: 'पहली गलती: सेमीकोलन भूलना। printf("Hello") के बाद ; नहीं लगाया तो कंपाइलर रुक जाएगा और एरर देगा। यह इसलिए होती है क्योंकि हम बोलते वक्त फुल स्टॉप पर ध्यान नहीं देते, लेकिन कंप्यूटर को हर निर्देश का अंत चाहिए। दूसरी गलती: printf को Printf या PRINTF लिखना। सी केस-सेंसिटिव है — छोटा p और बड़ा P अलग हैं, जैसे "ram" और "Ram" दो अलग नाम हैं। तीसरी गलती: #include वाली लाइन में सेमीकोलन लगाना। #include एक निर्देश नहीं है, कंपाइलर को एक आदेश है, इसलिए इसके बाद ; नहीं लगता। चौथी गलती: कर्ली ब्रैकेट बंद करना भूलना। अगर } गायब है तो कंपाइलर समझ नहीं पाता कि प्रोग्राम कहाँ खत्म होता है। पाँचवीं गलती: main के आगे int नहीं लिखना। int बताता है कि main एक नंबर वापस देगा, और यह सी के नियम का हिस्सा है। इन सब गलतियों का एक ही इलाज है — एरर मैसेज को ध्यान से पढ़ो, वह हमेशा लाइन नंबर बताता है।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास स्थितियाँ',
          },
          body: {
            hinglish: 'Agar aap printf mein Hello, World ki jagah kuch bhi likh do, to wahi chhap jayega — computer spelling check nahi karta. Agar aap do printf likh do to dono ek hi line mein chipak kar aayenge, kyunki printf khud new line nahi deta; new line ke liye \\n likhna padta hai. Agar aap return 0; ki jagah return 1; likh do to bhi program chalega aur Hello, World dikhega — farq sirf itna hai ki 1 ka matlab hai "kuch gadbad hui". Agar aap main ke andar kuch bhi na likho, sirf return 0; rakho, to program chalega lekin screen par kuch nahi dikhega. Aur agar aap #include <stdio.h> hata do to printf kaam nahi karega, kyunki computer ko pata hi nahi hoga ki printf kya hai. Ye edge cases isliye zaroori hain kyunki inhe samajhne se aapko pata chalta hai ki har line ka asal kaam kya hai, sirf copy-paste karne se nahi.',
            english: 'If you write anything else in place of Hello, World inside printf, exactly that will be printed — the computer does not check spelling. If you write two printf statements, both will stick together on the same line, because printf does not add a new line by itself; for a new line you must write \\n. If you write return 1; instead of return 0;, the program will still run and show Hello, World — the only difference is that 1 means "something went wrong". If you write nothing inside main except return 0;, the program will run but nothing will appear on the screen. And if you remove #include <stdio.h>, printf will not work, because the computer will not even know what printf is. These edge cases matter because understanding them shows you what each line really does, instead of just copying and pasting.',
            hindi: 'अगर आप printf में Hello, World की जगह कुछ भी लिख दो, तो वही छप जाएगा — कंप्यूटर स्पेलिंग चेक नहीं करता। अगर आप दो printf लिख दो तो दोनों एक ही लाइन में चिपक कर आएँगे, क्योंकि printf खुद नई लाइन नहीं देता; नई लाइन के लिए \\n लिखना पड़ता है। अगर आप return 0; की जगह return 1; लिख दो तो भी प्रोग्राम चलेगा और Hello, World दिखेगा — फर्क सिर्फ इतना है कि 1 का मतलब है "कुछ गड़बड़ हुई"। अगर आप main के अंदर कुछ भी न लिखो, सिर्फ return 0; रखो, तो प्रोग्राम चलेगा लेकिन स्क्रीन पर कुछ नहीं दिखेगा। और अगर आप #include <stdio.h> हटा दो तो printf काम नहीं करेगा, क्योंकि कंप्यूटर को पता ही नहीं होगा कि printf क्या है। ये खास स्थितियाँ इसलिए ज़रूरी हैं क्योंकि इन्हें समझने से आपको पता चलता है कि हर लाइन का असल काम क्या है, सिर्फ कॉपी-पेस्ट करने से नहीं।',
          },
        },
        {
          heading: {
            hinglish: 'Agar aap ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर आप यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish: 'Socho aap printf("Hello, World"); ki jagah printf("Namaste, Dosto"); likh do. Kya hoga? Screen par Namaste, Dosto dikhega — kyunki quotes ke andar ka text bilkul waise hi chhapta hai jaise likha hai. Ab socho aap semicolon hata do: printf("Hello, World") return 0; — compiler error dega, kyunki use samajh nahi aayega ki pehli instruction kahan khatm hui. Ab socho aap int main() ki jagah void main() likh do. Bahut purani books mein ye dikhta hai, lekin aaj ke standard mein int main() sahi hai; void main() kuch compilers par chal bhi jayega, lekin ye galat aadat hai. Ab socho aap Hello, World ke aage \\n laga do: printf("Hello, World\\n"); — output wahi rahega, bas cursor agli line par chala jayega. Ye chhote experiments hi seekhne ka asli tareeka hain: ek cheez badlo, chalao, aur dekho kya badla.',
            english: 'Imagine you write printf("Namaste, Dosto"); instead of printf("Hello, World");. What will happen? Namaste, Dosto will appear on the screen — because the text inside the quotes is printed exactly as written. Now imagine you remove the semicolon: printf("Hello, World") return 0; — the compiler will give an error, because it cannot tell where the first instruction ended. Now imagine you write void main() instead of int main(). You will see this in very old books, but in today\'s standard int main() is correct; void main() may still run on some compilers, but it is a bad habit. Now imagine you add \\n after Hello, World: printf("Hello, World\\n"); — the output will look the same, except the cursor will move to the next line. These small experiments are the real way to learn: change one thing, run it, and see what changed.',
            hindi: 'सोचिए आप printf("Hello, World"); की जगह printf("Namaste, Dosto"); लिख दो। क्या होगा? स्क्रीन पर Namaste, Dosto दिखेगा — क्योंकि कोट्स के अंदर का टेक्स्ट बिल्कुल वैसे ही छपता है जैसे लिखा है। अब सोचिए आप सेमीकोलन हटा दो: printf("Hello, World") return 0; — कंपाइलर एरर देगा, क्योंकि उसे समझ नहीं आएगा कि पहली निर्देश कहाँ खत्म हुई। अब सोचिए आप int main() की जगह void main() लिख दो। बहुत पुरानी किताबों में यह दिखता है, लेकिन आज के स्टैंडर्ड में int main() सही है; void main() कुछ कंपाइलरों पर चल भी जाएगा, लेकिन यह गलत आदत है। अब सोचिए आप Hello, World के आगे \\n लगा दो: printf("Hello, World\\n"); — आउटपुट वही रहेगा, बस कर्सर अगली लाइन पर चला जाएगा। ये छोटे प्रयोग ही सीखने का असली तरीका हैं: एक चीज़ बदलो, चलाओ, और देखो क्या बदला।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'C computer ko instructions dene ki bhasha hai, jo 1972 se aaj tak har jagah use hoti hai. Har C program main() se shuru hota hai, printf() screen par likhta hai, semicolon har instruction ko khatm karta hai, aur return 0 batata hai ki sab theek raha. Compiler aapke code ko computer ki bhasha mein badalta hai. Sabse zaroori baat: galtiyan normal hain. Har programmer pehle din semicolon bhoolta hai. Error message dushman nahi hai, wo teacher hai — wo line number batata hai. Agle article mein hum seekhenge ki numbers aur text ko memory mein kaise rakhte hain.',
            english: 'C is a language for giving instructions to the computer, used everywhere since 1972. Every C program starts at main(), printf() writes on the screen, a semicolon ends every instruction, and return 0 says everything went fine. The compiler changes your code into the language of the computer. The most important thing: mistakes are normal. Every programmer forgets the semicolon on day one. An error message is not an enemy, it is a teacher — it tells you the line number. In the next article we will learn how to store numbers and text in memory.',
            hindi: 'सी कंप्यूटर को निर्देश देने की भाषा है, जो 1972 से आज तक हर जगह इस्तेमाल होती है। हर सी प्रोग्राम main() से शुरू होता है, printf() स्क्रीन पर लिखता है, सेमीकोलन हर निर्देश को खत्म करता है, और return 0 बताता है कि सब ठीक रहा। कंपाइलर आपके कोड को कंप्यूटर की भाषा में बदलता है। सबसे ज़रूरी बात: गलतियाँ सामान्य हैं। हर प्रोग्रामर पहले दिन सेमीकोलन भूलता है। एरर मैसेज दुश्मन नहीं है, वह शिक्षक है — वह लाइन नंबर बताता है। अगले लेख में हम सीखेंगे कि नंबर और टेक्स्ट को मेमोरी में कैसे रखते हैं।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'C program kaise chalta hai',
          english: 'How a C program runs',
          hindi: 'सी प्रोग्राम कैसे चलता है',
        },
        nodes: [
          { t: { hinglish: 'Aap code likhte ho', english: 'You write code', hindi: 'आप कोड लिखते हैं' } },
          { t: { hinglish: 'Compiler check karta hai aur badalta hai', english: 'Compiler checks and translates it', hindi: 'कंपाइलर जाँचता है और बदलता है' } },
          { t: { hinglish: 'Computer chalata hai', english: 'Computer runs it', hindi: 'कंप्यूटर चलाता है' } },
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
          language: 'c',
          code: `#include <stdio.h>

int main() {
    printf("Mera naam Sid hai\\n");
    printf("Main C seekh raha hoon");
    return 0;
}`,
          output: 'Mera naam Sid hai\nMain C seekh raha hoon',
          note: {
            hinglish: '\\n cursor ko agli line par le jaata hai. Dusra printf bina \\n ke wahi line continue karta.',
            english: '\\n moves the cursor to the next line. The second printf continues on the same line without \\n.',
            hindi: '\\n कर्सर को अगली लाइन पर ले जाता है। दूसरा printf बिना \\n के वही लाइन जारी रखता है।',
          },
        },
      ],
      mcqs: [
        {
          q: {
            hinglish: 'Program chalane se pehle C code ko computer ki bhasha mein kaun badalta hai?',
            english: 'Who changes C code into the computer’s language before the program runs?',
            hindi: 'प्रोग्राम चलाने से पहले सी कोड को कंप्यूटर की भाषा में कौन बदलता है?',
          },
          opts: [
            { hinglish: 'Compiler', english: 'Compiler', hindi: 'कंपाइलर' },
            { hinglish: 'Printer', english: 'Printer', hindi: 'प्रिंटर' },
            { hinglish: 'Keyboard', english: 'Keyboard', hindi: 'कीबोर्ड' },
            { hinglish: 'Monitor', english: 'Monitor', hindi: 'मॉनिटर' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Compiler hi C code ko machine language mein badalta hai; baaki teen hardware hain, translator nahi.',
            english: 'Only the compiler translates C code into machine language; the other three are hardware, not translators.',
            hindi: 'सिर्फ कंपाइलर ही सी कोड को मशीन भाषा में बदलता है; बाकी तीन हार्डवेयर हैं, अनुवादक नहीं।',
          },
        },
        {
          q: {
            hinglish: 'Neeche wale program ka output kya hoga? printf("A"); printf("B");',
            english: 'What will this program print? printf("A"); printf("B");',
            hindi: 'इस प्रोग्राम का आउटपुट क्या होगा? printf("A"); printf("B");',
          },
          opts: [
            { hinglish: 'AB (ek hi line mein)', english: 'AB (on one line)', hindi: 'AB (एक ही लाइन में)' },
            { hinglish: 'A, phir agli line par B', english: 'A, then B on the next line', hindi: 'A, फिर अगली लाइन पर B' },
            { hinglish: 'Sirf A', english: 'Only A', hindi: 'सिर्फ A' },
            { hinglish: 'Error', english: 'Error', hindi: 'एरर' },
          ],
          ans: 0,
          expl: {
            hinglish: 'printf khud new line nahi deta, isliye dono ek hi line mein chipak kar AB chhapte hain.',
            english: 'printf does not add a new line by itself, so both stick together and print AB on one line.',
            hindi: 'printf खुद नई लाइन नहीं देता, इसलिए दोनों एक ही लाइन में चिपक कर AB छापते हैं।',
          },
        },
        {
          q: {
            hinglish: 'Is code mein bug kya hai? int main() { printf("Hi") return 0; }',
            english: 'What is the bug in this code? int main() { printf("Hi") return 0; }',
            hindi: 'इस कोड में बग क्या है? int main() { printf("Hi") return 0; }',
          },
          opts: [
            { hinglish: 'printf ke baad semicolon missing hai', english: 'The semicolon after printf is missing', hindi: 'printf के बाद सेमीकोलन गायब है' },
            { hinglish: 'main galat naam hai', english: 'main is the wrong name', hindi: 'main गलत नाम है' },
            { hinglish: 'return 0 galat hai', english: 'return 0 is wrong', hindi: 'return 0 गलत है' },
            { hinglish: 'Koi bug nahi hai', english: 'There is no bug', hindi: 'कोई बग नहीं है' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Har statement semicolon se khatm hoti hai. printf("Hi") ke baad ; nahi hai, isliye compiler error dega.',
            english: 'Every statement ends with a semicolon. There is no ; after printf("Hi"), so the compiler will give an error.',
            hindi: 'हर स्टेटमेंट सेमीकोलन से खत्म होती है। printf("Hi") के बाद ; नहीं है, इसलिए कंपाइलर एरर देगा।',
          },
        },
        {
          q: {
            hinglish: 'C mein return 0; ka matlab kya hai?',
            english: 'What does return 0; mean in C?',
            hindi: 'सी में return 0; का क्या मतलब है?',
          },
          opts: [
            { hinglish: 'Program theek se khatm hua', english: 'The program finished fine', hindi: 'प्रोग्राम ठीक से खत्म हुआ' },
            { hinglish: 'Program mein zero error hai', english: 'The program has zero errors', hindi: 'प्रोग्राम में ज़ीरो एरर है' },
            { hinglish: 'Zero print karo', english: 'Print zero', hindi: 'ज़ीरो छापो' },
            { hinglish: 'Program dobara chalao', english: 'Run the program again', hindi: 'प्रोग्राम दोबारा चलाओ' },
          ],
          ans: 0,
          expl: {
            hinglish: 'return 0 operating system ko batata hai ki program bina problem ke khatm hua.',
            english: 'return 0 tells the operating system that the program finished without a problem.',
            hindi: 'return 0 ऑपरेटिंग सिस्टम को बताता है कि प्रोग्राम बिना समस्या के खत्म हुआ।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Output guess karo: do printf',
          english: 'Guess the output: two printf calls',
          hindi: 'आउटपुट अनुमान लगाएँ: दो printf',
        },
        task: {
          hinglish: 'Neeche wale program ko bina chalaye padho aur guess karo ki screen par kya dikhega. Phir apna guess expected output se milao. Done tab mana jayega jab aap bata sako ki dono lines ek hi line mein kyun aayi, aur \\n lagane se kya badlega.',
          english: 'Read the program below without running it and guess what will appear on the screen. Then match your guess with the expected output. You are done when you can say why both lines came on one line, and what \\n would change.',
          hindi: 'नीचे वाले प्रोग्राम को बिना चलाए पढ़ें और अनुमान लगाएँ कि स्क्रीन पर क्या दिखेगा। फिर अपना अनुमान अपेक्षित आउटपुट से मिलाएँ। आप तब सफल हैं जब आप बता सकें कि दोनों लाइनें एक ही लाइन में क्यों आईं, और \\n लगाने से क्या बदलेगा।',
        },
        language: 'c',
        starter: `#include <stdio.h>

int main() {
    printf("Chai");
    printf("Biscuit");
    return 0;
}`,
        expected: 'ChaiBiscuit',
      },
    },
    {
      id: 'c-variables',
      subjectId: 'c-programming',
      title: {
        hinglish: 'Variables aur data types',
        english: 'Variables and Data Types',
        hindi: 'वेरिएबल और डेटा टाइप',
      },
      summary: {
        hinglish: 'Computer memory mein cheezein kaise rakhi jaati hain — dabbe (variables), unke naam, aur int, float, char jaise types.',
        english: 'How things are stored in computer memory — boxes (variables), their names, and types like int, float, and char.',
        hindi: 'कंप्यूटर मेमोरी में चीज़ें कैसे रखी जाती हैं — डिब्बे (वेरिएबल), उनके नाम, और int, float, char जैसे टाइप।',
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
            hinglish: 'Variable ek naam wala dabba hai jisme computer ek value rakhta hai. Socho aapke kitchen mein alag-alag dabbe hain — ek mein cheeni, ek mein namak, ek mein chai patti. Har dabbe par label laga hai taaki aap jaan sako ki andar kya hai. Variable bilkul waisa hi hai: naam label hai, aur value andar rakhi cheez hai. Jaise aap dabbe mein cheeni ki jagah namak nahi daalte, waise hi har variable ka ek type hota hai jo batata hai ki andar kya rakha ja sakta hai. int type ke dabbe mein sirf poora number rakha ja sakta hai, jaise 5 ya 42. float type ke dabbe mein decimal wala number, jaise 3.5 ya 99.99. char type ke dabbe mein ek akshar, jaise A ya z. Jab aap likhte ho int age = 20;, to computer memory mein ek dabba banata hai, us par age ka label lagata hai, aur andar 20 rakh deta hai. Baad mein aap age ki value badal bhi sakte ho, jaise dabbe mein cheez badli ja sakti hai — isiliye iska naam variable hai, matlab badalne wala.',
            english: 'A variable is a named box in which the computer keeps a value. Think of your kitchen, where there are different boxes — one has sugar, one has salt, one has tea leaves. Every box has a label so you know what is inside. A variable is exactly like that: the name is the label, and the value is the thing kept inside. Just as you would not put salt in the sugar box, every variable has a type that says what can go inside it. A box of type int can hold only a whole number, like 5 or 42. A box of type float can hold a number with a decimal point, like 3.5 or 99.99. A box of type char can hold one letter, like A or z. When you write int age = 20;, the computer makes a box in memory, puts the label age on it, and keeps 20 inside. Later you can change the value of age, just as you can change what is inside a box — that is why it is called a variable, meaning something that can change.',
            hindi: 'वेरिएबल एक नाम वाला डिब्बा है जिसमें कंप्यूटर एक वैल्यू रखता है। अपने किचन के बारे में सोचिए — अलग-अलग डिब्बे हैं, एक में चीनी, एक में नमक, एक में चाय पत्ती। हर डिब्बे पर लेबल लगा है ताकि आप जान सकें कि अंदर क्या है। वेरिएबल बिल्कुल वैसा ही है: नाम लेबल है, और वैल्यू अंदर रखी चीज़ है। जैसे आप चीनी के डिब्बे में नमक नहीं डालते, वैसे ही हर वेरिएबल का एक टाइप होता है जो बताता है कि अंदर क्या रखा जा सकता है। int टाइप के डिब्बे में सिर्फ पूरा नंबर रखा जा सकता है, जैसे 5 या 42। float टाइप के डिब्बे में दशमलव वाला नंबर, जैसे 3.5 या 99.99। char टाइप के डिब्बे में एक अक्षर, जैसे A या z। जब आप int age = 20; लिखते हैं, तो कंप्यूटर मेमोरी में एक डिब्बा बनाता है, उस पर age का लेबल लगाता है, और अंदर 20 रख देता है। बाद में आप age की वैल्यू बदल भी सकते हैं, जैसे डिब्बे में चीज़ बदली जा सकती है — इसीलिए इसका नाम वेरिएबल है, मतलब बदलने वाला।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example: dukaan ka hisaab',
            english: 'Real-life example: a shopkeeper’s accounts',
            hindi: 'असल ज़िंदगी का उदाहरण: दुकानदार का हिसाब',
          },
          body: {
            hinglish: 'Ek kirana dukaan wale ko socho. Uske paas ek register hai jisme wo likhta hai: aaj kitne customer aaye (poora number), aaj kitni bikri hui (decimal wala number, jaise 1250.50 rupaye), aur dukaan khuli hai ya band (haan ya na). Ye teenon alag-alag type ki jaankari hain. Customer ki ginti kabhi 12.5 nahi ho sakti — isliye wo int hai. Bikri mein paise aur paise dono hote hain — isliye wo float hai. Aur dukaan ka board par ek akshar likha hai, jaise "K" kirana ke liye — wo char hai. Agar dukaan wala galti se bikri wali jagah par customer ki ginti likh de, to hisaab gadbad ho jayega. Computer bhi aisa hi karta hai: wo har variable ke type ko yaad rakhta hai, aur galat type ki value daalne par ya to mana kar deta hai ya ajeeb result deta hai. Isiliye type samajhna sirf theory nahi hai — ye hisaab ko sahi rakhne ka tareeka hai.',
            english: 'Think of a grocery shopkeeper. He has a register where he writes: how many customers came today (a whole number), how much he sold today (a number with a decimal point, like 1250.50 rupees), and whether the shop is open or closed (yes or no). These are three different kinds of information. The count of customers can never be 12.5 — so it is an int. Sales include rupees and paise — so it is a float. And the board of the shop has one letter on it, like "K" for kirana — that is a char. If the shopkeeper by mistake writes the customer count in the sales place, the accounts will go wrong. The computer does the same thing: it remembers the type of every variable, and if you put a value of the wrong type, it will either refuse or give a strange result. That is why understanding types is not just theory — it is the way to keep the accounts correct.',
            hindi: 'एक किराना दुकानदार के बारे में सोचिए। उसके पास एक रजिस्टर है जिसमें वह लिखता है: आज कितने ग्राहक आए (पूरा नंबर), आज कितनी बिक्री हुई (दशमलव वाला नंबर, जैसे 1250.50 रुपये), और दुकान खुली है या बंद (हाँ या ना)। ये तीनों अलग-अलग तरह की जानकारी हैं। ग्राहकों की गिनती कभी 12.5 नहीं हो सकती — इसलिए वह int है। बिक्री में रुपये और पैसे दोनों होते हैं — इसलिए वह float है। और दुकान के बोर्ड पर एक अक्षर लिखा है, जैसे "K" किराना के लिए — वह char है। अगर दुकानदार गलती से बिक्री वाली जगह पर ग्राहकों की गिनती लिख दे, तो हिसाब गड़बड़ हो जाएगा। कंप्यूटर भी ऐसा ही करता है: वह हर वेरिएबल के टाइप को याद रखता है, और गलत टाइप की वैल्यू डालने पर या तो मना कर देता है या अजीब रिज़ल्ट देता है। इसीलिए टाइप समझना सिर्फ थ्योरी नहीं है — यह हिसाब को सही रखने का तरीका है।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step: teen types, ek program',
            english: 'Step-by-step: three types, one program',
            hindi: 'चरण-दर-चरण: तीन टाइप, एक प्रोग्राम',
          },
          body: {
            hinglish: 'Neeche wale program mein teen variables hain. Pehli line int age = 20; ek poora number rakhti hai. Dusri line float price = 49.99; ek decimal number rakhti hai. Teesri line char grade = \'A\'; ek akshar rakhti hai — dhyaan do, char ke liye single quotes \' \' use hote hain, double quotes nahi. Phir teen printf lines in values ko chhapti hain. Yahan ek nayi cheez hai: %d, %f aur %c. Ye format specifier hain — ye printf ko batate hain ki dabbe ke andar kis type ki cheez hai. %d ka matlab hai "yahan ek int aayega", %f ka matlab hai "yahan ek float aayega", aur %c ka matlab hai "yahan ek char aayega". Agar aap age ko %f se chhapne ki koshish karoge to ajeeb number dikhega, kyunki printf dabbe ko galat tareeke se padhega. Isi liye type aur format specifier hamesha match karne chahiye. Aakhri baat: aap variable ko declare karne ke baad uski value badal sakte ho — age = 21; likhne se dabbe ke andar 20 ki jagah 21 aa jayega, aur purani value hamesha ke liye chali jayegi.',
            english: 'The program below has three variables. The first line, int age = 20;, keeps a whole number. The second line, float price = 49.99;, keeps a decimal number. The third line, char grade = \'A\';, keeps one letter — note that a char uses single quotes \' \', not double quotes. Then three printf lines print these values. Here is something new: %d, %f and %c. These are format specifiers — they tell printf what type of thing is inside the box. %d means "an int will come here", %f means "a float will come here", and %c means "a char will come here". If you try to print age with %f, you will see a strange number, because printf will read the box in the wrong way. That is why the type and the format specifier must always match. One last thing: after declaring a variable you can change its value — writing age = 21; puts 21 in the box instead of 20, and the old value is gone forever.',
            hindi: 'नीचे वाले प्रोग्राम में तीन वेरिएबल हैं। पहली लाइन int age = 20; एक पूरा नंबर रखती है। दूसरी लाइन float price = 49.99; एक दशमलव नंबर रखती है। तीसरी लाइन char grade = \'A\'; एक अक्षर रखती है — ध्यान दें, char के लिए सिंगल कोट्स \' \' इस्तेमाल होते हैं, डबल कोट्स नहीं। फिर तीन printf लाइनें इन वैल्यू को छापती हैं। यहाँ एक नई चीज़ है: %d, %f और %c। ये फ़ॉर्मैट स्पेसिफ़ायर हैं — ये printf को बताते हैं कि डिब्बे के अंदर किस टाइप की चीज़ है। %d का मतलब है "यहाँ एक int आएगा", %f का मतलब है "यहाँ एक float आएगा", और %c का मतलब है "यहाँ एक char आएगा"। अगर आप age को %f से छापने की कोशिश करोगे तो अजीब नंबर दिखेगा, क्योंकि printf डिब्बे को गलत तरीके से पढ़ेगा। इसीलिए टाइप और फ़ॉर्मैट स्पेसिफ़ायर हमेशा मेल खाने चाहिए। आखिरी बात: आप वेरिएबल को घोषित करने के बाद उसकी वैल्यू बदल सकते हो — age = 21; लिखने से डिब्बे के अंदर 20 की जगह 21 आ जाएगा, और पुरानी वैल्यू हमेशा के लिए चली जाएगी।',
          },
          code: {
            title: {
              hinglish: 'Teen types ek saath',
              english: 'Three types together',
              hindi: 'तीन टाइप एक साथ',
            },
            language: 'c',
            code: `#include <stdio.h>

int main() {
    int age = 20;
    float price = 49.99;
    char grade = 'A';
    printf("Age: %d\\n", age);
    printf("Price: %f\\n", price);
    printf("Grade: %c\\n", grade);
    return 0;
}`,
            output: 'Age: 20\nPrice: 49.990002\nGrade: A',
            note: {
              hinglish: 'Price 49.990002 dikhta hai, 49.99 nahi — float decimal ko bilkul sahi se store nahi kar pata. Ye normal hai, aur agle articles mein iska ilaaj aayega.',
              english: 'Price shows as 49.990002, not 49.99 — a float cannot store a decimal exactly. This is normal, and later articles will show the fix.',
              hindi: 'Price 49.990002 दिखता है, 49.99 नहीं — float दशमलव को बिल्कुल सही से स्टोर नहीं कर पाता। यह सामान्य है, और अगले लेखों में इसका इलाज आएगा।',
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
            hinglish: 'Pehli galti: variable ko bina value ke use karna. Agar aap int x; likh kar printf("%d", x); chala do, to jo bhi kachra memory mein pehle se pada tha, wahi chhap jayega. Ye isliye hota hai kyunki C dabba banate waqt use khaali nahi karta — andar purana samaan pada reh sakta hai. Dusri galti: char ke liye double quotes use karna — char grade = "A"; galat hai, kyunki double quotes ka matlab hai string, ek akshar nahi. Teesri galti: galat format specifier, jaise float ko %d se chhapna. Computer dabbe ke bits ko galat tareeke se padhega aur ajeeb number dega. Chauthi galti: variable ka naam number se shuru karna, jaise int 1st = 5;. C mein naam hamesha akshar ya underscore se shuru hota hai. Paanchvi galti: naam mein space dena, jaise int my age = 20;. Computer ko samajh nahi aata ki my kahan khatm hota hai aur age kahan shuru hota hai — isliye underscore use karo: my_age.',
            english: 'First mistake: using a variable without giving it a value. If you write int x; and then run printf("%d", x);, whatever junk was already lying in that memory will be printed. This happens because C does not empty the box when it makes it — old stuff can still be lying inside. Second mistake: using double quotes for a char — char grade = "A"; is wrong, because double quotes mean a string, not one letter. Third mistake: using the wrong format specifier, like printing a float with %d. The computer will read the bits of the box in the wrong way and give a strange number. Fourth mistake: starting a variable name with a number, like int 1st = 5;. In C a name must always start with a letter or an underscore. Fifth mistake: putting a space in a name, like int my age = 20;. The computer cannot tell where my ends and age begins — so use an underscore: my_age.',
            hindi: 'पहली गलती: वेरिएबल को बिना वैल्यू के इस्तेमाल करना। अगर आप int x; लिख कर printf("%d", x); चला दो, तो जो भी कचरा मेमोरी में पहले से पड़ा था, वही छप जाएगा। यह इसलिए होता है क्योंकि सी डिब्बा बनाते वक्त उसे खाली नहीं करता — अंदर पुराना सामान पड़ा रह सकता है। दूसरी गलती: char के लिए डबल कोट्स इस्तेमाल करना — char grade = "A"; गलत है, क्योंकि डबल कोट्स का मतलब है स्ट्रिंग, एक अक्षर नहीं। तीसरी गलती: गलत फ़ॉर्मैट स्पेसिफ़ायर, जैसे float को %d से छापना। कंप्यूटर डिब्बे के बिट्स को गलत तरीके से पढ़ेगा और अजीब नंबर देगा। चौथी गलती: वेरिएबल का नाम नंबर से शुरू करना, जैसे int 1st = 5;। सी में नाम हमेशा अक्षर या अंडरस्कोर से शुरू होता है। पाँचवीं गलती: नाम में स्पेस देना, जैसे int my age = 20;। कंप्यूटर को समझ नहीं आता कि my कहाँ खत्म होता है और age कहाँ शुरू होता है — इसलिए अंडरस्कोर इस्तेमाल करो: my_age।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास स्थितियाँ',
          },
          body: {
            hinglish: 'int ka ek limit hota hai: aam taur par ye -2,147,483,648 se 2,147,483,647 tak ke number rakh sakta hai. Agar aap isse bada number daalte ho, to wo ulta ho kar negative ban sakta hai — ise overflow kehte hain. Jaise train ki seat par 100 log nahi baith sakte, waise hi dabbe ki ek capacity hoti hai. float ke saath ek aur problem hai: 0.1 + 0.2 bilkul 0.3 nahi hota, kyunki computer decimal ko binary mein badalte waqt thoda sa kho deta hai. Isliye paise ka hisaab kabhi float se nahi karna chahiye — bank wale paise ko paise mein (int) rakhte hain. char ke saath bhi ek chaunkane wali baat hai: char mein asal mein ek number rakha hota hai. \'A\' ka number 65 hai, isliye char c = 65; likhne par bhi A chhapega. Ye isliye hai kyunki computer akshar ko bhi number ki tarah yaad rakhta hai.',
            english: 'An int has a limit: usually it can hold numbers from -2,147,483,648 to 2,147,483,647. If you put in a bigger number, it can flip around and become negative — this is called overflow. Just as 100 people cannot sit on one train seat, a box has a capacity. A float has another problem: 0.1 + 0.2 is not exactly 0.3, because the computer loses a little bit when it changes a decimal into binary. That is why money should never be counted with a float — banks keep money in paise (as an int). A char also has a surprising fact: inside a char there is really a number. The number of \'A\' is 65, so writing char c = 65; will also print A. This is because the computer remembers letters as numbers too.',
            hindi: 'int की एक सीमा होती है: आमतौर पर यह -2,147,483,648 से 2,147,483,647 तक के नंबर रख सकता है। अगर आप इससे बड़ा नंबर डालते हो, तो वह उल्टा हो कर नेगेटिव बन सकता है — इसे ओवरफ़्लो कहते हैं। जैसे ट्रेन की सीट पर 100 लोग नहीं बैठ सकते, वैसे ही डिब्बे की एक क्षमता होती है। float के साथ एक और समस्या है: 0.1 + 0.2 बिल्कुल 0.3 नहीं होता, क्योंकि कंप्यूटर दशमलव को बाइनरी में बदलते वक्त थोड़ा सा खो देता है। इसलिए पैसे का हिसाब कभी float से नहीं करना चाहिए — बैंक वाले पैसे को पैसे में (int) रखते हैं। char के साथ भी एक चौंकाने वाली बात है: char में असल में एक नंबर रखा होता है। \'A\' का नंबर 65 है, इसलिए char c = 65; लिखने पर भी A छपेगा। यह इसलिए है क्योंकि कंप्यूटर अक्षर को भी नंबर की तरह याद रखता है।',
          },
        },
        {
          heading: {
            hinglish: 'Agar aap ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर आप यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish: 'Socho aap int age = 20; ki jagah float age = 20; likh do. Program chalega, lekin ab age ek decimal number hai, aur %d se chhapne par ajeeb result milega. Aapko %f use karna padega. Ab socho aap price = 49.99; ko price = 50; se badal do. Koi error nahi aayega — 50 apne aap 50.0 ban jayega, kyunki float dabbe mein int value daalne par computer use convert kar deta hai. Ab socho aap char grade = \'A\'; ki jagah char grade = \'AB\'; likh do. Compiler warning dega, kyunki char dabbe mein sirf ek akshar aata hai, do nahi. Ab socho aap int age = 20; likhne ke baad age = age + 1; likh do. Dabbe ke andar 21 ho jayega — computer pehle purani value padhta hai, usme 1 jodta hai, aur result wapas usi dabbe mein rakh deta hai. Ye ek line poori programming ki jaan hai.',
            english: 'Imagine you write float age = 20; instead of int age = 20;. The program will run, but now age is a decimal number, and printing it with %d will give a strange result. You will have to use %f. Now imagine you change price = 49.99; to price = 50;. No error will come — 50 will quietly become 50.0, because when you put an int value into a float box, the computer converts it. Now imagine you write char grade = \'AB\'; instead of char grade = \'A\';. The compiler will warn you, because a char box holds only one letter, not two. Now imagine that after int age = 20; you write age = age + 1;. The box will hold 21 — the computer first reads the old value, adds 1 to it, and puts the result back in the same box. This one line is the heart of all programming.',
            hindi: 'सोचिए आप int age = 20; की जगह float age = 20; लिख दो। प्रोग्राम चलेगा, लेकिन अब age एक दशमलव नंबर है, और %d से छापने पर अजीब रिज़ल्ट मिलेगा। आपको %f इस्तेमाल करना पड़ेगा। अब सोचिए आप price = 49.99; को price = 50; से बदल दो। कोई एरर नहीं आएगा — 50 अपने आप 50.0 बन जाएगा, क्योंकि float डिब्बे में int वैल्यू डालने पर कंप्यूटर उसे कन्वर्ट कर देता है। अब सोचिए आप char grade = \'A\'; की जगह char grade = \'AB\'; लिख दो। कंपाइलर चेतावनी देगा, क्योंकि char डिब्बे में सिर्फ एक अक्षर आता है, दो नहीं। अब सोचिए आप int age = 20; लिखने के बाद age = age + 1; लिख दो। डिब्बे के अंदर 21 हो जाएगा — कंप्यूटर पहले पुरानी वैल्यू पढ़ता है, उसमें 1 जोड़ता है, और रिज़ल्ट वापस उसी डिब्बे में रख देता है। यह एक लाइन पूरी प्रोग्रामिंग की जान है।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'Variable ek naam wala dabba hai, type batata hai ki andar kya aa sakta hai. int poora number, float decimal number, char ek akshar. Declare karte waqt value dena best practice hai, nahi to andar kachra mil sakta hai. printf mein %d, %f aur %c ka type se match karna zaroori hai. int ki limit hoti hai, float decimal ko bilkul sahi nahi rakh pata, aur char ke andar asal mein ek number hota hai. Agle article mein hum in dabbon par hisaab karna seekhenge — jod, ghata, guna, bhaag.',
            english: 'A variable is a named box, and its type says what can go inside. int is a whole number, float is a decimal number, char is one letter. Giving a value at the time of declaring is best practice, otherwise you may find junk inside. In printf, %d, %f and %c must match the type. An int has a limit, a float cannot keep a decimal exactly, and inside a char there is really a number. In the next article we will learn to do maths on these boxes — add, subtract, multiply, divide.',
            hindi: 'वेरिएबल एक नाम वाला डिब्बा है, टाइप बताता है कि अंदर क्या आ सकता है। int पूरा नंबर, float दशमलव नंबर, char एक अक्षर। घोषित करते वक्त वैल्यू देना सबसे अच्छा तरीका है, नहीं तो अंदर कचरा मिल सकता है। printf में %d, %f और %c का टाइप से मेल खाना ज़रूरी है। int की सीमा होती है, float दशमलव को बिल्कुल सही नहीं रख पाता, और char के अंदर असल में एक नंबर होता है। अगले लेख में हम इन डिब्बों पर हिसाब करना सीखेंगे — जोड़, घटा, गुणा, भाग।',
          },
        },
      ],
      diagram: {
        kind: 'boxes',
        title: {
          hinglish: 'Memory mein teen dabbe',
          english: 'Three boxes in memory',
          hindi: 'मेमोरी में तीन डिब्बे',
        },
        nodes: [
          { t: { hinglish: 'age (int)', english: 'age (int)', hindi: 'age (int)' }, s: { hinglish: '20', english: '20', hindi: '20' } },
          { t: { hinglish: 'price (float)', english: 'price (float)', hindi: 'price (float)' }, s: { hinglish: '49.99', english: '49.99', hindi: '49.99' } },
          { t: { hinglish: 'grade (char)', english: 'grade (char)', hindi: 'grade (char)' }, s: { hinglish: "'A'", english: "'A'", hindi: "'A'" } },
        ],
      },
      codeExamples: [
        {
          title: {
            hinglish: 'Value badalna',
            english: 'Changing a value',
            hindi: 'वैल्यू बदलना',
          },
          language: 'c',
          code: `#include <stdio.h>

int main() {
    int score = 10;
    printf("Pehle: %d\\n", score);
    score = score + 5;
    printf("Baad me: %d\\n", score);
    return 0;
}`,
          output: 'Pehle: 10\nBaad me: 15',
          note: {
            hinglish: 'score = score + 5; mein computer pehle purani value padhta hai, phir jodta hai, phir wapas rakhta hai.',
            english: 'In score = score + 5; the computer first reads the old value, then adds, then puts it back.',
            hindi: 'score = score + 5; में कंप्यूटर पहले पुरानी वैल्यू पढ़ता है, फिर जोड़ता है, फिर वापस रखता है।',
          },
        },
      ],
      mcqs: [
        {
          q: {
            hinglish: 'int marks = 85; ke baad marks = marks + 5; likha. Ab marks ki value kya hai?',
            english: 'After int marks = 85;, we write marks = marks + 5;. What is the value of marks now?',
            hindi: 'int marks = 85; के बाद marks = marks + 5; लिखा। अब marks की वैल्यू क्या है?',
          },
          opts: [
            { hinglish: '90', english: '90', hindi: '90' },
            { hinglish: '85', english: '85', hindi: '85' },
            { hinglish: '5', english: '5', hindi: '5' },
            { hinglish: 'Error', english: 'Error', hindi: 'एरर' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Computer pehle purani value 85 padhta hai, usme 5 jodta hai, aur 90 wapas usi dabbe mein rakh deta hai.',
            english: 'The computer first reads the old value 85, adds 5 to it, and puts 90 back in the same box.',
            hindi: 'कंप्यूटर पहले पुरानी वैल्यू 85 पढ़ता है, उसमें 5 जोड़ता है, और 90 वापस उसी डिब्बे में रख देता है।',
          },
        },
        {
          q: {
            hinglish: 'float ko print karne ke liye sahi format specifier kaun sa hai?',
            english: 'Which format specifier is correct for printing a float?',
            hindi: 'float को प्रिंट करने के लिए सही फ़ॉर्मैट स्पेसिफ़ायर कौन सा है?',
          },
          opts: [
            { hinglish: '%f', english: '%f', hindi: '%f' },
            { hinglish: '%d', english: '%d', hindi: '%d' },
            { hinglish: '%c', english: '%c', hindi: '%c' },
            { hinglish: '%s', english: '%s', hindi: '%s' },
          ],
          ans: 0,
          expl: {
            hinglish: '%f float ke liye hai; %d int ke liye, %c char ke liye, aur %s string ke liye hota hai.',
            english: '%f is for float; %d is for int, %c is for char, and %s is for a string.',
            hindi: '%f float के लिए है; %d int के लिए, %c char के लिए, और %s स्ट्रिंग के लिए होता है।',
          },
        },
        {
          q: {
            hinglish: 'Is code mein bug kya hai? char grade = "A";',
            english: 'What is the bug in this code? char grade = "A";',
            hindi: 'इस कोड में बग क्या है? char grade = "A";',
          },
          opts: [
            { hinglish: 'char ke liye single quotes chahiye, double nahi', english: 'A char needs single quotes, not double', hindi: 'char के लिए सिंगल कोट्स चाहिए, डबल नहीं' },
            { hinglish: 'grade galat naam hai', english: 'grade is the wrong name', hindi: 'grade गलत नाम है' },
            { hinglish: 'Semicolon missing hai', english: 'The semicolon is missing', hindi: 'सेमीकोलन गायब है' },
            { hinglish: 'Koi bug nahi hai', english: 'There is no bug', hindi: 'कोई बग नहीं है' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Double quotes ka matlab string hota hai. Ek akshar ke liye single quotes likho: \'A\'.',
            english: 'Double quotes mean a string. For one letter, use single quotes: \'A\'.',
            hindi: 'डबल कोट्स का मतलब स्ट्रिंग होता है। एक अक्षर के लिए सिंगल कोट्स लिखो: \'A\'।',
          },
        },
        {
          q: {
            hinglish: 'int x; likh kar bina value diye printf("%d", x); chalaya. Kya hoga?',
            english: 'We write int x; and run printf("%d", x); without giving a value. What will happen?',
            hindi: 'int x; लिख कर बिना वैल्यू दिए printf("%d", x); चलाया। क्या होगा?',
          },
          opts: [
            { hinglish: 'Kachra value chhap sakti hai', english: 'A garbage value may be printed', hindi: 'कचरा वैल्यू छप सकती है' },
            { hinglish: 'Hamesha 0 chhapega', english: 'It will always print 0', hindi: 'हमेशा 0 छपेगा' },
            { hinglish: 'Compiler ruk jayega', english: 'The compiler will stop', hindi: 'कंपाइलर रुक जाएगा' },
            { hinglish: 'Kuch nahi chhapega', english: 'Nothing will be printed', hindi: 'कुछ नहीं छपेगा' },
          ],
          ans: 0,
          expl: {
            hinglish: 'C dabba banate waqt use khaali nahi karta — andar jo purana data pada tha, wahi dikh sakta hai.',
            english: 'C does not empty the box when it makes it — whatever old data was lying inside may show up.',
            hindi: 'सी डिब्बा बनाते वक्त उसे खाली नहीं करता — अंदर जो पुराना डेटा पड़ा था, वही दिख सकता है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Output guess karo: dabbe ki value',
          english: 'Guess the output: the value in the box',
          hindi: 'आउटपुट अनुमान लगाएँ: डिब्बे की वैल्यू',
        },
        task: {
          hinglish: 'Neeche wale program ko bina chalaye padho aur guess karo ki screen par kya dikhega. Done tab mana jayega jab aap bata sako ki dusri line mein 12 kyun chhapa, 10 kyun nahi.',
          english: 'Read the program below without running it and guess what will appear on the screen. You are done when you can say why the second line printed 12 and not 10.',
          hindi: 'नीचे वाले प्रोग्राम को बिना चलाए पढ़ें और अनुमान लगाएँ कि स्क्रीन पर क्या दिखेगा। आप तब सफल हैं जब आप बता सकें कि दूसरी लाइन में 12 क्यों छपा, 10 क्यों नहीं।',
        },
        language: 'c',
        starter: `#include <stdio.h>

int main() {
    int runs = 10;
    printf("%d\\n", runs);
    runs = runs + 2;
    printf("%d\\n", runs);
    return 0;
}`,
        expected: '10\n12',
      },
    },
    {
      id: 'c-operators',
      subjectId: 'c-programming',
      title: {
        hinglish: 'Operators aur expressions',
        english: 'Operators and Expressions',
        hindi: 'ऑपरेटर और एक्सप्रेशन',
      },
      summary: {
        hinglish: 'Jod-ghata-guna-bhaag, baaki (%), badhao-ghatao (++ --), aur BODMAS jaisa precedence — hisaab computer kaise karta hai.',
        english: 'Add, subtract, multiply, divide, remainder (%), increment and decrement (++ --), and precedence like BODMAS — how the computer does maths.',
        hindi: 'जोड़-घटा-गुणा-भाग, बाकी (%), बढ़ाओ-घटाओ (++ --), और BODMAS जैसा प्रिसीडेंस — हिसाब कंप्यूटर कैसे करता है।',
      },
      readMinutes: 12,
      sections: [
        {
          heading: {
            hinglish: 'Operator kya hai?',
            english: 'What is an operator?',
            hindi: 'ऑपरेटर क्या है?',
          },
          body: {
            hinglish: 'Operator ek chhota sa symbol hai jo computer ko batata hai ki do values ke saath kya karna hai. Jaise aap kirana dukaan par kehte ho "2 kilo cheeni aur 1 kilo namak" — "aur" yahan ek operator hai, jo jodne ka kaam karta hai. C mein + jodne ke liye, - ghataane ke liye, * guna ke liye, aur / bhaag ke liye use hota hai. Jab aap likhte ho 5 + 3, to ye ek expression hai — matlab ek chhota sa hisaab jiska ek result hota hai, yahan 8. Expression ka matlab hai "kuch aisa jiska ek value nikle". Aap expression ko variable mein rakh sakte ho: int total = 5 + 3; mein computer pehle 5 + 3 ka hisaab karta hai, phir 8 ko total naam ke dabbe mein rakh deta hai. Operator ke do hisse hote hain: operands (jin par kaam hota hai, jaise 5 aur 3) aur operator khud (+). Ye samajhna zaroori hai kyunki aage ke har program mein aap expression hi likhoge — if mein, loop mein, har jagah.',
            english: 'An operator is a small symbol that tells the computer what to do with two values. Just as you say at a grocery shop "2 kilos of sugar and 1 kilo of salt" — "and" is an operator here, doing the job of adding. In C, + is for adding, - for subtracting, * for multiplying, and / for dividing. When you write 5 + 3, that is an expression — a small calculation that has a result, here 8. An expression means "something that produces a value". You can keep an expression in a variable: in int total = 5 + 3; the computer first works out 5 + 3, then puts 8 in the box named total. An operator has two parts: the operands (the things worked on, like 5 and 3) and the operator itself (+). Understanding this matters because in every program ahead you will write expressions — in if, in loops, everywhere.',
            hindi: 'ऑपरेटर एक छोटा सा चिह्न है जो कंप्यूटर को बताता है कि दो वैल्यू के साथ क्या करना है। जैसे आप किराना दुकान पर कहते हैं "2 किलो चीनी और 1 किलो नमक" — "और" यहाँ एक ऑपरेटर है, जो जोड़ने का काम करता है। सी में + जोड़ने के लिए, - घटाने के लिए, * गुणा के लिए, और / भाग के लिए इस्तेमाल होता है। जब आप 5 + 3 लिखते हैं, तो यह एक एक्सप्रेशन है — मतलब एक छोटा सा हिसाब जिसका एक रिज़ल्ट होता है, यहाँ 8। एक्सप्रेशन का मतलब है "कुछ ऐसा जिसका एक वैल्यू निकले"। आप एक्सप्रेशन को वेरिएबल में रख सकते हैं: int total = 5 + 3; में कंप्यूटर पहले 5 + 3 का हिसाब करता है, फिर 8 को total नाम के डिब्बे में रख देता है। ऑपरेटर के दो हिस्से होते हैं: ऑपरेंड (जिन पर काम होता है, जैसे 5 और 3) और ऑपरेटर खुद (+)। यह समझना ज़रूरी है क्योंकि आगे के हर प्रोग्राम में आप एक्सप्रेशन ही लिखेंगे — if में, लूप में, हर जगह।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example: cricket ka score',
            english: 'Real-life example: a cricket score',
            hindi: 'असल ज़िंदगी का उदाहरण: क्रिकेट का स्कोर',
          },
          body: {
            hinglish: 'Cricket match mein scoreboard har ball ke baad badalta hai. Maan lo team ka score 120 hai aur batsman ne 4 run banaye. Scoreboard wala 120 + 4 karta hai aur 124 likh deta hai. Ye + operator hai. Phir ek over mein 6 ball hoti hain — agar 30 over khele gaye to total ball 30 * 6 = 180 hui. Ye * operator hai. Run rate nikaalne ke liye total runs ko overs se bhaag dete hain: 124 / 30. Ye / operator hai. Aur agar 7 wicket par 124 run bane hain, to 10 - 7 = 3 wicket bache hain — ye - operator hai. Ab ek aur cheez: agar 124 runs 30 overs mein bane, to har over mein kitne run bane? 124 / 30 = 4.13, lekin int mein ye 4 ban jayega. Ye int division ka sabse bada surprise hai, jise hum aage samjhenge. Scoreboard wala jo hisaab dimaag mein karta hai, wahi hisaab C mein operator karte hain.',
            english: 'In a cricket match the scoreboard changes after every ball. Suppose the team score is 120 and the batsman scores 4 runs. The scorer does 120 + 4 and writes 124. That is the + operator. Then, there are 6 balls in an over — if 30 overs were played, the total balls are 30 * 6 = 180. That is the * operator. To find the run rate, you divide the total runs by the overs: 124 / 30. That is the / operator. And if 124 runs were made for 7 wickets, then 10 - 7 = 3 wickets are left — that is the - operator. Now one more thing: if 124 runs were made in 30 overs, how many runs were made per over? 124 / 30 = 4.13, but in int it will become 4. This is the biggest surprise of int division, which we will understand below. The maths the scorer does in his head is the same maths that operators do in C.',
            hindi: 'क्रिकेट मैच में स्कोरबोर्ड हर बॉल के बाद बदलता है। मान लो टीम का स्कोर 120 है और बल्लेबाज़ ने 4 रन बनाए। स्कोरबोर्ड वाला 120 + 4 करता है और 124 लिख देता है। यह + ऑपरेटर है। फिर एक ओवर में 6 बॉल होती हैं — अगर 30 ओवर खेले गए तो कुल बॉल 30 * 6 = 180 हुई। यह * ऑपरेटर है। रन रेट निकालने के लिए कुल रन को ओवर से भाग देते हैं: 124 / 30। यह / ऑपरेटर है। और अगर 7 विकेट पर 124 रन बने हैं, तो 10 - 7 = 3 विकेट बचे हैं — यह - ऑपरेटर है। अब एक और चीज़: अगर 124 रन 30 ओवर में बने, तो हर ओवर में कितने रन बने? 124 / 30 = 4.13, लेकिन int में यह 4 बन जाएगा। यह int डिविज़न का सबसे बड़ा सरप्राइज़ है, जिसे हम आगे समझेंगे। स्कोरबोर्ड वाला जो हिसाब दिमाग में करता है, वही हिसाब सी में ऑपरेटर करते हैं।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step: ek dukaan ka bill',
            english: 'Step-by-step: a shop bill',
            hindi: 'चरण-दर-चरण: एक दुकान का बिल',
          },
          body: {
            hinglish: 'Neeche wale program mein ek dukaan ka bill ban raha hai. Pehle do variables: price = 25 (ek packet ka daam) aur qty = 4 (kitne packet). Phir int total = price * qty; — computer 25 * 4 karta hai aur 100 ko total mein rakh deta hai. Phir int change = 500 - total; — customer ne 500 diye, to wapas 400 dene hain. Phir ek nayi cheez: int share = total / 3; — agar bill 3 doston mein baantna hai, to har ek ka hissa 100 / 3 = 33 banta hai, 33.33 nahi, kyunki int division mein decimal kaat diya jata hai. Aur aakhri line mein int left = total % 3; — % operator baaki nikaalta hai. 100 ko 3 se bhaag do to 33 baar poora jata hai aur 1 bachta hai, isliye left = 1. Ye % operator bahut kaam ka hai: ye batata hai ki koi number even hai ya odd, ya 3 se divide hota hai ya nahi. Program ko line by line padho: pehle * hua, phir -, phir / aur %, har line ka result agle hisaab mein use hota hai.',
            english: 'In the program below, a shop bill is being made. First two variables: price = 25 (the price of one packet) and qty = 4 (how many packets). Then int total = price * qty; — the computer does 25 * 4 and puts 100 in total. Then int change = 500 - total; — the customer gave 500, so 400 must be returned. Then something new: int share = total / 3; — if the bill is split among 3 friends, each share is 100 / 3 = 33, not 33.33, because int division cuts off the decimal part. And the last line, int left = total % 3; — the % operator finds the remainder. Divide 100 by 3 and it goes 33 times fully, with 1 left over, so left = 1. This % operator is very useful: it tells you whether a number is even or odd, or whether it divides by 3 or not. Read the program line by line: first * happened, then -, then / and %, and the result of each line is used in the next calculation.',
            hindi: 'नीचे वाले प्रोग्राम में एक दुकान का बिल बन रहा है। पहले दो वेरिएबल: price = 25 (एक पैकेट का दाम) और qty = 4 (कितने पैकेट)। फिर int total = price * qty; — कंप्यूटर 25 * 4 करता है और 100 को total में रख देता है। फिर int change = 500 - total; — ग्राहक ने 500 दिए, तो वापस 400 देने हैं। फिर एक नई चीज़: int share = total / 3; — अगर बिल 3 दोस्तों में बाँटना है, तो हर एक का हिस्सा 100 / 3 = 33 बनता है, 33.33 नहीं, क्योंकि int डिविज़न में दशमलव काट दिया जाता है। और आखिरी लाइन में int left = total % 3; — % ऑपरेटर बाकी निकालता है। 100 को 3 से भाग दो तो 33 बार पूरा जाता है और 1 बचता है, इसलिए left = 1। यह % ऑपरेटर बहुत काम का है: यह बताता है कि कोई नंबर even है या odd, या 3 से divide होता है या नहीं। प्रोग्राम को लाइन दर लाइन पढ़ो: पहले * हुआ, फिर -, फिर / और %, हर लाइन का रिज़ल्ट अगले हिसाब में इस्तेमाल होता है।',
          },
          code: {
            title: {
              hinglish: 'Dukaan ka bill',
              english: 'A shop bill',
              hindi: 'दुकान का बिल',
            },
            language: 'c',
            code: `#include <stdio.h>

int main() {
    int price = 25;
    int qty = 4;
    int total = price * qty;
    int change = 500 - total;
    int share = total / 3;
    int left = total % 3;
    printf("Total: %d\\n", total);
    printf("Change: %d\\n", change);
    printf("Share: %d, Left: %d\\n", share, left);
    return 0;
}`,
            output: 'Total: 100\nChange: 400\nShare: 33, Left: 1',
            note: {
              hinglish: 'Share 33 hai, 33.33 nahi — int division decimal kaat deta hai. Left 1 hai, kyunki 100 ko 3 se bhaag kar 1 bachta hai.',
              english: 'Share is 33, not 33.33 — int division cuts off the decimal part. Left is 1, because dividing 100 by 3 leaves 1.',
              hindi: 'Share 33 है, 33.33 नहीं — int डिविज़न दशमलव काट देता है। Left 1 है, क्योंकि 100 को 3 से भाग कर 1 बचता है।',
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
            hinglish: 'Sabse badi galti: int division ko decimal samajhna. 7 / 2 likhne par C 3 dega, 3.5 nahi. Ye isliye hota hai kyunki dono operands int hain, to result bhi int hota hai. Decimal chahiye to kam se kam ek operand float hona chahiye: 7.0 / 2 = 3.5. Dusri galti: = aur == ko mix karna. a = 5 ka matlab hai "a mein 5 rakho", lekin a == 5 ka matlab hai "kya a 5 ke barabar hai?" — ye aage if mein bahut zaroori hoga. Teesri galti: precedence bhoolna. 2 + 3 * 4 mein pehle 3 * 4 hota hai (12), phir 2 judta hai — total 14, 20 nahi. Ye wahi BODMAS rule hai jo school mein seekha tha: pehle guna-bhaag, phir jod-ghata. Chauthi galti: x++ aur ++x ka farq na samajhna. Dono hi x ko 1 se badhate hain, lekin x++ pehle purani value deta hai phir badhata hai, aur ++x pehle badhata hai phir nayi value deta hai. Paanchvi galti: % ko float par use karna — 5.5 % 2 galat hai, % sirf int par kaam karta hai.',
            english: 'The biggest mistake: thinking int division gives a decimal. Writing 7 / 2 gives 3 in C, not 3.5. This happens because both operands are int, so the result is also int. If you want a decimal, at least one operand must be a float: 7.0 / 2 = 3.5. Second mistake: mixing up = and ==. a = 5 means "put 5 in a", but a == 5 means "is a equal to 5?" — this will matter a lot in if later. Third mistake: forgetting precedence. In 2 + 3 * 4, first 3 * 4 happens (12), then 2 is added — the total is 14, not 20. This is the same BODMAS rule you learned in school: multiply and divide first, then add and subtract. Fourth mistake: not knowing the difference between x++ and ++x. Both increase x by 1, but x++ gives the old value first and then increases it, while ++x increases it first and then gives the new value. Fifth mistake: using % on a float — 5.5 % 2 is wrong, % works only on int.',
            hindi: 'सबसे बड़ी गलती: int डिविज़न को दशमलव समझना। 7 / 2 लिखने पर सी 3 देगा, 3.5 नहीं। यह इसलिए होता है क्योंकि दोनों ऑपरेंड int हैं, तो रिज़ल्ट भी int होता है। दशमलव चाहिए तो कम से कम एक ऑपरेंड float होना चाहिए: 7.0 / 2 = 3.5। दूसरी गलती: = और == को मिलाना। a = 5 का मतलब है "a में 5 रखो", लेकिन a == 5 का मतलब है "क्या a 5 के बराबर है?" — यह आगे if में बहुत ज़रूरी होगा। तीसरी गलती: प्रिसीडेंस भूलना। 2 + 3 * 4 में पहले 3 * 4 होता है (12), फिर 2 जुड़ता है — कुल 14, 20 नहीं। यह वही BODMAS नियम है जो स्कूल में सीखा था: पहले गुणा-भाग, फिर जोड़-घटा। चौथी गलती: x++ और ++x का फर्क न समझना। दोनों ही x को 1 से बढ़ाते हैं, लेकिन x++ पहले पुरानी वैल्यू देता है फिर बढ़ाता है, और ++x पहले बढ़ाता है फिर नई वैल्यू देता है। पाँचवीं गलती: % को float पर इस्तेमाल करना — 5.5 % 2 गलत है, % सिर्फ int पर काम करता है।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास स्थितियाँ',
          },
          body: {
            hinglish: 'Zero se bhaag dena sabse khatarnak edge case hai. int x = 5 / 0; likhne par program crash ho sakta hai, kyunki kisi bhi number ko zero se bhaagna ka koi matlab nahi hota. Computer iska jawab nahi de sakta, isliye program ruk jata hai. Dusra edge case: bahut bade numbers ka guna. int mein 100000 * 100000 overflow kar jayega aur galat negative number dega, kyunki result int ki limit se bahar hai. Teesra edge case: negative number par %. -7 % 3 ka result C mein -1 hota hai, kyunki C baaki ka sign pehle number jaisa rakhta hai. Ye har language mein alag ho sakta hai, isliye negative par % use karte waqt saavdhaan raho. Chautha edge case: x++ ko ek hi line mein do baar use karna, jaise y = x++ + x++; — iska result compiler par depend karta hai, aur aise code ko koi bhi achha programmer nahi likhta. Rule simple hai: ek line mein ek variable ko ek hi baar badlo.',
            english: 'Dividing by zero is the most dangerous edge case. Writing int x = 5 / 0; can crash the program, because dividing any number by zero has no meaning. The computer cannot answer it, so the program stops. Second edge case: multiplying very big numbers. In int, 100000 * 100000 will overflow and give a wrong negative number, because the result is beyond the limit of int. Third edge case: % on a negative number. The result of -7 % 3 in C is -1, because C keeps the sign of the remainder like the first number. This can be different in every language, so be careful when using % on negatives. Fourth edge case: using x++ twice in one line, like y = x++ + x++; — its result depends on the compiler, and no good programmer writes such code. The rule is simple: change one variable only once in one line.',
            hindi: 'ज़ीरो से भाग देना सबसे खतरनाक खास स्थिति है। int x = 5 / 0; लिखने पर प्रोग्राम क्रैश हो सकता है, क्योंकि किसी भी नंबर को ज़ीरो से भागने का कोई मतलब नहीं होता। कंप्यूटर इसका जवाब नहीं दे सकता, इसलिए प्रोग्राम रुक जाता है। दूसरी खास स्थिति: बहुत बड़े नंबरों का गुणा। int में 100000 * 100000 ओवरफ़्लो कर जाएगा और गलत नेगेटिव नंबर देगा, क्योंकि रिज़ल्ट int की सीमा से बाहर है। तीसरी खास स्थिति: नेगेटिव नंबर पर %। -7 % 3 का रिज़ल्ट सी में -1 होता है, क्योंकि सी बाकी का चिह्न पहले नंबर जैसा रखता है। यह हर भाषा में अलग हो सकता है, इसलिए नेगेटिव पर % इस्तेमाल करते वक्त सावधान रहो। चौथी खास स्थिति: x++ को एक ही लाइन में दो बार इस्तेमाल करना, जैसे y = x++ + x++; — इसका रिज़ल्ट कंपाइलर पर निर्भर करता है, और ऐसा कोड कोई भी अच्छा प्रोग्रामर नहीं लिखता। नियम सरल है: एक लाइन में एक वेरिएबल को एक ही बार बदलो।',
          },
        },
        {
          heading: {
            hinglish: 'Agar aap ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर आप यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish: 'Socho aap share = total / 3; ki jagah share = total / 3.0; likh do. Ab share ko float banana padega, aur result 33.33 ban jayega — kyunki ek operand float hai, to division bhi float ban jati hai. Ab socho aap price * qty ki jagah price + qty likh do. Total 100 ki jagah 29 ban jayega, aur bill galat ho jayega — isiliye operator chunna hisaab ka sabse zaroori hissa hai. Ab socho aap 2 + 3 * 4 mein bracket laga do: (2 + 3) * 4. Ab pehle 2 + 3 = 5 hoga, phir 5 * 4 = 20. Bracket precedence ko badal deta hai, bilkul waise hi jaise school ke hisaab mein hota tha. Ab socho aap x = 5; ke baad x++; likhne ki jagah x = x + 1; likh do. Dono ka result ek hi hai — x++ sirf x = x + 1; ka chhota roop hai. Ye chhote badlav aapko operator ki gehrai samjhate hain.',
            english: 'Imagine you write share = total / 3.0; instead of share = total / 3;. Now share must become a float, and the result will be 33.33 — because one operand is a float, so the division also becomes a float. Now imagine you write price + qty instead of price * qty. The total will become 29 instead of 100, and the bill will be wrong — that is why choosing the operator is the most important part of the maths. Now imagine you put brackets in 2 + 3 * 4: (2 + 3) * 4. Now first 2 + 3 = 5 happens, then 5 * 4 = 20. Brackets change the precedence, exactly like in school maths. Now imagine that after x = 5; you write x = x + 1; instead of x++;. Both give the same result — x++ is just a short form of x = x + 1;. These small changes teach you the depth of operators.',
            hindi: 'सोचिए आप share = total / 3; की जगह share = total / 3.0; लिख दो। अब share को float बनाना पड़ेगा, और रिज़ल्ट 33.33 बन जाएगा — क्योंकि एक ऑपरेंड float है, तो डिविज़न भी float बन जाती है। अब सोचिए आप price * qty की जगह price + qty लिख दो। Total 100 की जगह 29 बन जाएगा, और बिल गलत हो जाएगा — इसीलिए ऑपरेटर चुनना हिसाब का सबसे ज़रूरी हिस्सा है। अब सोचिए आप 2 + 3 * 4 में ब्रैकेट लगा दो: (2 + 3) * 4। अब पहले 2 + 3 = 5 होगा, फिर 5 * 4 = 20। ब्रैकेट प्रिसीडेंस को बदल देता है, बिल्कुल वैसे ही जैसे स्कूल के हिसाब में होता था। अब सोचिए आप x = 5; के बाद x++; लिखने की जगह x = x + 1; लिख दो। दोनों का रिज़ल्ट एक ही है — x++ सिर्फ x = x + 1; का छोटा रूप है। ये छोटे बदलाव आपको ऑपरेटर की गहराई समझाते हैं।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'Operator symbol hai jo batata hai ki values ke saath kya karna hai, aur expression ka ek result hota hai. + - * / basic hisaab karte hain, % baaki nikaalta hai, aur ++ / -- value ko 1 se badhate ya ghataate hain. Precedence BODMAS jaisa hai: pehle * / %, phir + -. Sabse badi galti int division hai: 7 / 2 = 3 hota hai, 3.5 nahi. Zero se bhaag kabhi mat do. Agle article mein hum seekhenge ki program khud faisla kaise karta hai — agar ye hua to ye karo, nahi to wo karo.',
            english: 'An operator is a symbol that says what to do with values, and an expression has a result. + - * / do basic maths, % finds the remainder, and ++ / -- increase or decrease a value by 1. Precedence is like BODMAS: first * / %, then + -. The biggest mistake is int division: 7 / 2 = 3, not 3.5. Never divide by zero. In the next article we will learn how a program makes its own decisions — if this happened, do this, otherwise do that.',
            hindi: 'ऑपरेटर चिह्न है जो बताता है कि वैल्यू के साथ क्या करना है, और एक्सप्रेशन का एक रिज़ल्ट होता है। + - * / बुनियादी हिसाब करते हैं, % बाकी निकालता है, और ++ / -- वैल्यू को 1 से बढ़ाते या घटाते हैं। प्रिसीडेंस BODMAS जैसा है: पहले * / %, फिर + -। सबसे बड़ी गलती int डिविज़न है: 7 / 2 = 3 होता है, 3.5 नहीं। ज़ीरो से भाग कभी मत दो। अगले लेख में हम सीखेंगे कि प्रोग्राम खुद फैसला कैसे करता है — अगर यह हुआ तो यह करो, नहीं तो वह करो।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Precedence: pehle kaun?',
          english: 'Precedence: who goes first?',
          hindi: 'प्रिसीडेंस: पहले कौन?',
        },
        nodes: [
          { t: { hinglish: 'Bracket ( )', english: 'Brackets ( )', hindi: 'ब्रैकेट ( )' } },
          { t: { hinglish: '* / %', english: '* / %', hindi: '* / %' } },
          { t: { hinglish: '+ -', english: '+ -', hindi: '+ -' } },
          { t: { hinglish: '= (aakhir mein)', english: '= (at the end)', hindi: '= (आखिर में)' } },
        ],
      },
      codeExamples: [
        {
          title: {
            hinglish: 'Even ya odd check karna',
            english: 'Checking even or odd',
            hindi: 'Even या odd जाँचना',
          },
          language: 'c',
          code: `#include <stdio.h>

int main() {
    int n = 7;
    int r = n % 2;
    printf("Baaki: %d\\n", r);
    return 0;
}`,
          output: 'Baaki: 1',
          note: {
            hinglish: 'Baaki 1 ka matlab hai number odd hai. Agar baaki 0 hota to number even hota.',
            english: 'A remainder of 1 means the number is odd. If the remainder were 0, the number would be even.',
            hindi: 'बाकी 1 का मतलब है नंबर odd है। अगर बाकी 0 होता तो नंबर even होता।',
          },
        },
        {
          title: {
            hinglish: '++ ka farq',
            english: 'The difference of ++',
            hindi: '++ का फर्क',
          },
          language: 'c',
          code: `#include <stdio.h>

int main() {
    int x = 5;
    printf("%d\\n", x++);
    printf("%d\\n", x);
    return 0;
}`,
          output: '5\n6',
          note: {
            hinglish: 'x++ pehle purani value 5 deta hai, phir x ko 6 banata hai. Isliye pehli line 5, dusri 6 chhapti hai.',
            english: 'x++ first gives the old value 5, then makes x 6. That is why the first line prints 5 and the second prints 6.',
            hindi: 'x++ पहले पुरानी वैल्यू 5 देता है, फिर x को 6 बनाता है। इसलिए पहली लाइन 5, दूसरी 6 छापती है।',
          },
        },
      ],
      mcqs: [
        {
          q: {
            hinglish: 'int mein 7 / 2 ka result kya hoga?',
            english: 'What is the result of 7 / 2 in int?',
            hindi: 'int में 7 / 2 का रिज़ल्ट क्या होगा?',
          },
          opts: [
            { hinglish: '3', english: '3', hindi: '3' },
            { hinglish: '3.5', english: '3.5', hindi: '3.5' },
            { hinglish: '4', english: '4', hindi: '4' },
            { hinglish: 'Error', english: 'Error', hindi: 'एरर' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Dono operands int hain, isliye division bhi int hoti hai aur decimal kaat diya jata hai — 3.5 ka 3 ban jata hai.',
            english: 'Both operands are int, so the division is also int and the decimal part is cut off — 3.5 becomes 3.',
            hindi: 'दोनों ऑपरेंड int हैं, इसलिए डिविज़न भी int होती है और दशमलव काट दिया जाता है — 3.5 का 3 बन जाता है।',
          },
        },
        {
          q: {
            hinglish: '2 + 3 * 4 ka result kya hai?',
            english: 'What is the result of 2 + 3 * 4?',
            hindi: '2 + 3 * 4 का रिज़ल्ट क्या है?',
          },
          opts: [
            { hinglish: '14', english: '14', hindi: '14' },
            { hinglish: '20', english: '20', hindi: '20' },
            { hinglish: '24', english: '24', hindi: '24' },
            { hinglish: '9', english: '9', hindi: '9' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Pehle * hota hai: 3 * 4 = 12, phir 2 + 12 = 14. Bracket bina guna pehle hota hai.',
            english: 'First * happens: 3 * 4 = 12, then 2 + 12 = 14. Without brackets, multiplication comes first.',
            hindi: 'पहले * होता है: 3 * 4 = 12, फिर 2 + 12 = 14। ब्रैकेट बिना गुणा पहले होता है।',
          },
        },
        {
          q: {
            hinglish: 'Is code ka output kya hoga? int x = 5; printf("%d", x++);',
            english: 'What will this code print? int x = 5; printf("%d", x++);',
            hindi: 'इस कोड का आउटपुट क्या होगा? int x = 5; printf("%d", x++);',
          },
          opts: [
            { hinglish: '5', english: '5', hindi: '5' },
            { hinglish: '6', english: '6', hindi: '6' },
            { hinglish: '4', english: '4', hindi: '4' },
            { hinglish: 'Error', english: 'Error', hindi: 'एरर' },
          ],
          ans: 0,
          expl: {
            hinglish: 'x++ pehle purani value deta hai (5), aur badhne ka kaam baad mein hota hai. Isliye 5 chhapta hai.',
            english: 'x++ first gives the old value (5), and the increase happens afterwards. So 5 is printed.',
            hindi: 'x++ पहले पुरानी वैल्यू देता है (5), और बढ़ने का काम बाद में होता है। इसलिए 5 छपता है।',
          },
        },
        {
          q: {
            hinglish: '17 % 5 ka result kya hai?',
            english: 'What is the result of 17 % 5?',
            hindi: '17 % 5 का रिज़ल्ट क्या है?',
          },
          opts: [
            { hinglish: '2', english: '2', hindi: '2' },
            { hinglish: '3', english: '3', hindi: '3' },
            { hinglish: '3.4', english: '3.4', hindi: '3.4' },
            { hinglish: '0', english: '0', hindi: '0' },
          ],
          ans: 0,
          expl: {
            hinglish: '17 ko 5 se bhaag do to 3 baar poora jata hai (15), aur 2 bachta hai — % wahi bacha hua 2 deta hai.',
            english: 'Divide 17 by 5 and it goes 3 times fully (15), with 2 left over — % gives that leftover 2.',
            hindi: '17 को 5 से भाग दो तो 3 बार पूरा जाता है (15), और 2 बचता है — % वही बचा हुआ 2 देता है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Output guess karo: bill ka hisaab',
          english: 'Guess the output: a bill calculation',
          hindi: 'आउटपुट अनुमान लगाएँ: बिल का हिसाब',
        },
        task: {
          hinglish: 'Neeche wale program ko bina chalaye padho aur guess karo ki screen par kya dikhega. Done tab mana jayega jab aap bata sako ki total 29 kyun hai aur baaki 1 kyun hai.',
          english: 'Read the program below without running it and guess what will appear on the screen. You are done when you can say why the total is 29 and why the remainder is 1.',
          hindi: 'नीचे वाले प्रोग्राम को बिना चलाए पढ़ें और अनुमान लगाएँ कि स्क्रीन पर क्या दिखेगा। आप तब सफल हैं जब आप बता सकें कि कुल 29 क्यों है और बाकी 1 क्यों है।',
        },
        language: 'c',
        starter: `#include <stdio.h>

int main() {
    int a = 10;
    int b = 4;
    int total = a * 2 + b + 5;
    int left = total % 7;
    printf("%d\\n", total);
    printf("%d\\n", left);
    return 0;
}`,
        expected: '29\n1',
      },
    },
    {
      id: 'c-if-else',
      subjectId: 'c-programming',
      title: {
        hinglish: 'If-else aur switch',
        english: 'If-Else and Switch',
        hindi: 'If-else और switch',
      },
      summary: {
        hinglish: 'Program khud faisla kaise karta hai — if, else if, else, aur switch. Train ticket, exam pass-fail aur menu jaise examples ke saath.',
        english: 'How a program makes its own decisions — if, else if, else, and switch. With examples like a train ticket, exam pass-fail, and a menu.',
        hindi: 'प्रोग्राम खुद फैसला कैसे करता है — if, else if, else, और switch। ट्रेन टिकट, परीक्षा पास-फेल और मेनू जैसे उदाहरणों के साथ।',
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
            hinglish: 'Ab tak ke program ek hi raaste par chalte the — upar se neeche, har line. Lekin asli zindagi mein hum har baar ek hi kaam nahi karte. Agar baarish ho rahi hai to chhata lete hain, nahi to nahi lete. Program mein bhi aisa hi hota hai: if ek condition check karta hai, aur agar condition sach hai to ek block chalata hai, nahi to use chhod deta hai. Condition ka matlab hai ek sawaal jiska jawab haan ya na mein ho, jaise "kya age 18 se bada hai?" C mein is sawaal ko likhte hain age >= 18. Iska jawab 1 hota hai agar sach hai, aur 0 hota hai agar jhooth hai. Comparison operators ye hain: == (barabar), != (barabar nahi), > (bada), < (chhota), >= (bada ya barabar), <= (chhota ya barabar). else ka matlab hai "agar condition jhooth hai to ye karo". else if ka matlab hai "pehli condition jhooth hai, to dusri check karo". Ye teeno mil kar program ko faisla lene ki taakat dete hain.',
            english: 'Until now, programs walked on a single road — from top to bottom, every line. But in real life we do not do the same thing every time. If it is raining, we take an umbrella; if not, we do not. A program works the same way: if checks a condition, and if the condition is true it runs a block, otherwise it skips it. A condition means a question whose answer is yes or no, like "is the age more than 18?" In C this question is written as age >= 18. Its answer is 1 if it is true, and 0 if it is false. The comparison operators are: == (equal), != (not equal), > (greater), < (smaller), >= (greater or equal), <= (smaller or equal). else means "if the condition is false, do this". else if means "the first condition is false, so check the second one". Together, these three give a program the power to make decisions.',
            hindi: 'अब तक के प्रोग्राम एक ही रास्ते पर चलते थे — ऊपर से नीचे, हर लाइन। लेकिन असली ज़िंदगी में हम हर बार एक ही काम नहीं करते। अगर बारिश हो रही है तो छाता लेते हैं, नहीं तो नहीं लेते। प्रोग्राम में भी ऐसा ही होता है: if एक कंडीशन जाँचता है, और अगर कंडीशन सच है तो एक ब्लॉक चलाता है, नहीं तो उसे छोड़ देता है। कंडीशन का मतलब है एक सवाल जिसका जवाब हाँ या ना में हो, जैसे "क्या age 18 से बड़ा है?" सी में इस सवाल को age >= 18 लिखते हैं। इसका जवाब 1 होता है अगर सच है, और 0 होता है अगर झूठ है। तुलना वाले ऑपरेटर ये हैं: == (बराबर), != (बराबर नहीं), > (बड़ा), < (छोटा), >= (बड़ा या बराबर), <= (छोटा या बराबर)। else का मतलब है "अगर कंडीशन झूठ है तो यह करो"। else if का मतलब है "पहली कंडीशन झूठ है, तो दूसरी जाँचो"। ये तीनों मिल कर प्रोग्राम को फैसला लेने की ताकत देते हैं।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example: train ticket aur age',
            english: 'Real-life example: a train ticket and age',
            hindi: 'असल ज़िंदगी का उदाहरण: ट्रेन टिकट और उम्र',
          },
          body: {
            hinglish: 'Train mein ticket checker ke paas ek simple rule hota hai. Agar passenger ki age 5 saal se kam hai, to ticket free hai. Agar age 5 se 12 ke beech hai, to aadha ticket lagta hai. Agar age 12 se zyada hai, to poora ticket lagta hai. Aur agar passenger senior citizen hai, matlab age 60 se zyada hai, to chhoot milti hai. Ye ek hi faisla nahi hai — ye chaar alag faisle hain, jo ek ke baad ek check hote hain. Program mein bhi aisa hi hota hai: pehle if (age < 5) check hota hai, phir else if (age <= 12), phir else if (age >= 60), aur aakhir mein else. Jaise ticket checker har passenger ko ek hi rule se nahi naapta, waise hi program har value ko ek hi condition se nahi naapta. Har condition ek alag raasta kholti hai, aur program sirf wahi raasta chunta hai jiski condition sach hai. Yehi decision making hai.',
            english: 'A ticket checker on a train has a simple rule. If the passenger is younger than 5 years, the ticket is free. If the age is between 5 and 12, a half ticket is charged. If the age is more than 12, a full ticket is charged. And if the passenger is a senior citizen, meaning the age is more than 60, a discount is given. This is not one decision — it is four different decisions, checked one after another. A program works the same way: first if (age < 5) is checked, then else if (age <= 12), then else if (age >= 60), and finally else. Just as the ticket checker does not judge every passenger by one rule, a program does not judge every value by one condition. Every condition opens a different road, and the program picks only the road whose condition is true. That is decision making.',
            hindi: 'ट्रेन में टिकट चेकर के पास एक सरल नियम होता है। अगर यात्री की उम्र 5 साल से कम है, तो टिकट फ्री है। अगर उम्र 5 से 12 के बीच है, तो आधा टिकट लगता है। अगर उम्र 12 से ज़्यादा है, तो पूरा टिकट लगता है। और अगर यात्री सीनियर सिटीज़न है, मतलब उम्र 60 से ज़्यादा है, तो छूट मिलती है। यह एक ही फैसला नहीं है — यह चार अलग फैसले हैं, जो एक के बाद एक जाँचे जाते हैं। प्रोग्राम में भी ऐसा ही होता है: पहले if (age < 5) जाँचा जाता है, फिर else if (age <= 12), फिर else if (age >= 60), और आखिर में else। जैसे टिकट चेकर हर यात्री को एक ही नियम से नहीं नापता, वैसे ही प्रोग्राम हर वैल्यू को एक ही कंडीशन से नहीं नापता। हर कंडीशन एक अलग रास्ता खोलती है, और प्रोग्राम सिर्फ वही रास्ता चुनता है जिसकी कंडीशन सच है। यही डिसिज़न मेकिंग है।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step: exam pass ya fail',
            english: 'Step-by-step: exam pass or fail',
            hindi: 'चरण-दर-चरण: परीक्षा पास या फेल',
          },
          body: {
            hinglish: 'Neeche wale program mein ek student ke marks hain. Pehli line int marks = 72; hai. Phir if (marks >= 90) check hota hai — 72 >= 90 jhooth hai, isliye ye block skip ho jata hai. Phir else if (marks >= 60) check hota hai — 72 >= 60 sach hai, isliye "First Division" chhapta hai, aur baaki ke else if aur else ko computer dekhta bhi nahi. Ye bahut zaroori baat hai: else if ki chain mein sirf pehli sach condition chalti hai, baaki sab skip ho jati hain. Agar marks 95 hote, to pehla if hi sach ho jata aur "Distinction" chhapta. Agar marks 30 hote, to saari conditions jhooth hoti aur aakhir wala else chalta — "Fail". Program ko padhne ka tareeka ye hai: upar se neeche har condition ko check karo, aur jaise hi ek sach mile, wahi block chalao aur chain se bahar nikal jao. Dhyaan do: marks >= 60 likhne se pehle marks >= 90 likhna zaroori hai, kyunki agar ulta likh diya to 95 wala student bhi First Division mein aa jayega.',
            english: 'In the program below, a student has some marks. The first line is int marks = 72;. Then if (marks >= 90) is checked — 72 >= 90 is false, so this block is skipped. Then else if (marks >= 60) is checked — 72 >= 60 is true, so "First Division" is printed, and the computer does not even look at the remaining else if and else. This is a very important point: in an else if chain, only the first true condition runs, and all the rest are skipped. If the marks were 95, the first if would be true and "Distinction" would be printed. If the marks were 30, all the conditions would be false and the last else would run — "Fail". The way to read a program is this: check every condition from top to bottom, and as soon as one is true, run that block and leave the chain. Note that marks >= 90 must be written before marks >= 60, because if you write them in reverse, a student with 95 would also land in First Division.',
            hindi: 'नीचे वाले प्रोग्राम में एक छात्र के मार्क्स हैं। पहली लाइन int marks = 72; है। फिर if (marks >= 90) जाँचा जाता है — 72 >= 90 झूठ है, इसलिए यह ब्लॉक छोड़ दिया जाता है। फिर else if (marks >= 60) जाँचा जाता है — 72 >= 60 सच है, इसलिए "First Division" छपता है, और बाकी के else if और else को कंप्यूटर देखता भी नहीं। यह बहुत ज़रूरी बात है: else if की चेन में सिर्फ पहली सच कंडीशन चलती है, बाकी सब छोड़ दी जाती हैं। अगर मार्क्स 95 होते, तो पहला if ही सच हो जाता और "Distinction" छपता। अगर मार्क्स 30 होते, तो सारी कंडीशन झूठ होतीं और आखिर वाला else चलता — "Fail"। प्रोग्राम को पढ़ने का तरीका यह है: ऊपर से नीचे हर कंडीशन को जाँचो, और जैसे ही एक सच मिले, वही ब्लॉक चलाओ और चेन से बाहर निकल जाओ। ध्यान दो: marks >= 60 लिखने से पहले marks >= 90 लिखना ज़रूरी है, क्योंकि अगर उल्टा लिख दिया तो 95 वाला छात्र भी First Division में आ जाएगा।',
          },
          code: {
            title: {
              hinglish: 'Marks se division',
              english: 'Division from marks',
              hindi: 'मार्क्स से डिविज़न',
            },
            language: 'c',
            code: `#include <stdio.h>

int main() {
    int marks = 72;
    if (marks >= 90) {
        printf("Distinction\\n");
    } else if (marks >= 60) {
        printf("First Division\\n");
    } else if (marks >= 33) {
        printf("Pass\\n");
    } else {
        printf("Fail\\n");
    }
    return 0;
}`,
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
            hinglish: 'Sabse badi galti: = aur == ko mix karna. if (marks = 90) likhne par computer marks mein 90 rakh deta hai aur condition hamesha sach ho jati hai, kyunki 90 zero nahi hai. Aapko if (marks == 90) likhna tha. Ye galti isliye hoti hai kyunki bolne mein dono ek jaise lagte hain, lekin C mein inka matlab bilkul alag hai. Dusri galti: if ke baad semicolon lagana — if (marks > 60); { printf("Pass"); } mein semicolon ki wajah se if ka block khaali ho jata hai aur printf hamesha chalta hai, chahe marks kuch bhi ho. Teesri galti: else if ki chain ka order ulta likhna, jaise pehle marks >= 33 phir marks >= 60. Isse 72 wala student Pass mein aa jayega, First Division mein nahi. Chauthi galti: switch mein break bhoolna — bina break ke ek case ke baad agla case bhi chal padta hai, jise fall-through kehte hain. Paanchvi galti: condition mein do cheezein jodne ke liye && (aur) aur || (ya) ka galat use. "Age 18 se zyada aur 60 se kam" ke liye age > 18 && age < 60 likhna hota hai, sirf ek condition nahi.',
            english: 'The biggest mistake: mixing up = and ==. If you write if (marks = 90), the computer puts 90 in marks and the condition becomes always true, because 90 is not zero. You meant to write if (marks == 90). This mistake happens because both sound the same when spoken, but in C their meaning is completely different. Second mistake: putting a semicolon after if — in if (marks > 60); { printf("Pass"); } the semicolon makes the if block empty, and printf runs always, whatever the marks are. Third mistake: writing the else if chain in reverse order, like marks >= 33 first and then marks >= 60. Then a student with 72 would land in Pass, not First Division. Fourth mistake: forgetting break in a switch — without break, the next case also runs after one case, which is called fall-through. Fifth mistake: using && (and) and || (or) wrongly when joining two things in a condition. For "age more than 18 and less than 60" you must write age > 18 && age < 60, not just one condition.',
            hindi: 'सबसे बड़ी गलती: = और == को मिलाना। if (marks = 90) लिखने पर कंप्यूटर marks में 90 रख देता है और कंडीशन हमेशा सच हो जाती है, क्योंकि 90 ज़ीरो नहीं है। आपको if (marks == 90) लिखना था। यह गलती इसलिए होती है क्योंकि बोलने में दोनों एक जैसे लगते हैं, लेकिन सी में इनका मतलब बिल्कुल अलग है। दूसरी गलती: if के बाद सेमीकोलन लगाना — if (marks > 60); { printf("Pass"); } में सेमीकोलन की वजह से if का ब्लॉक खाली हो जाता है और printf हमेशा चलता है, चाहे मार्क्स कुछ भी हों। तीसरी गलती: else if की चेन का क्रम उल्टा लिखना, जैसे पहले marks >= 33 फिर marks >= 60। इससे 72 वाला छात्र Pass में आ जाएगा, First Division में नहीं। चौथी गलती: switch में break भूलना — बिना break के एक case के बाद अगला case भी चल पड़ता है, जिसे fall-through कहते हैं। पाँचवीं गलती: कंडीशन में दो चीज़ें जोड़ने के लिए && (और) और || (या) का गलत इस्तेमाल। "Age 18 से ज़्यादा और 60 से कम" के लिए age > 18 && age < 60 लिखना होता है, सिर्फ एक कंडीशन नहीं।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास स्थितियाँ',
          },
          body: {
            hinglish: 'Edge case pehla: marks bilkul 60 hain. marks >= 60 sach hai, isliye First Division milega. Agar aapne marks > 60 likha hota to 60 wala student Pass mein chala jata. Boundary values par >= aur > ka farq sabse zyada dikhta hai, isliye hamesha socho ki boundary par kya hona chahiye. Dusra edge case: marks negative ya 100 se zyada, jaise -5 ya 120. Program koi error nahi dega — 120 >= 90 sach hai, isliye Distinction chhap jayega, jo galat hai. Asli program mein pehle ye check karna chahiye ki marks 0 se 100 ke beech hain ya nahi. Teesra edge case: switch mein float ya string use karna. switch sirf int aur char par kaam karta hai, float par nahi. Chautha edge case: if ke andar if, matlab nested if. Ye bilkul allowed hai, lekin zyada gehrai mein jaane se program padhna mushkil ho jata hai — teen se zyada level ki nesting se bacho.',
            english: 'First edge case: the marks are exactly 60. marks >= 60 is true, so First Division is given. If you had written marks > 60, the student with 60 would go to Pass. The difference between >= and > shows most at boundary values, so always think about what should happen at the boundary. Second edge case: marks that are negative or more than 100, like -5 or 120. The program will give no error — 120 >= 90 is true, so Distinction will be printed, which is wrong. In a real program you should first check whether the marks are between 0 and 100 or not. Third edge case: using a float or a string in a switch. A switch works only on int and char, not on float. Fourth edge case: an if inside an if, called a nested if. This is fully allowed, but going too deep makes the program hard to read — avoid more than three levels of nesting.',
            hindi: 'पहली खास स्थिति: मार्क्स बिल्कुल 60 हैं। marks >= 60 सच है, इसलिए First Division मिलेगा। अगर आपने marks > 60 लिखा होता तो 60 वाला छात्र Pass में चला जाता। Boundary values पर >= और > का फर्क सबसे ज़्यादा दिखता है, इसलिए हमेशा सोचो कि boundary पर क्या होना चाहिए। दूसरी खास स्थिति: मार्क्स नेगेटिव या 100 से ज़्यादा, जैसे -5 या 120। प्रोग्राम कोई एरर नहीं देगा — 120 >= 90 सच है, इसलिए Distinction छप जाएगा, जो गलत है। असली प्रोग्राम में पहले यह जाँचना चाहिए कि मार्क्स 0 से 100 के बीच हैं या नहीं। तीसरी खास स्थिति: switch में float या string इस्तेमाल करना। switch सिर्फ int और char पर काम करता है, float पर नहीं। चौथी खास स्थिति: if के अंदर if, मतलब nested if। यह बिल्कुल allowed है, लेकिन ज़्यादा गहराई में जाने से प्रोग्राम पढ़ना मुश्किल हो जाता है — तीन से ज़्यादा level की nesting से बचो।',
          },
        },
        {
          heading: {
            hinglish: 'Agar aap ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर आप यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish: 'Socho aap marks = 72 ki jagah marks = 95 kar do. Ab pehla if (marks >= 90) sach ho jayega aur "Distinction" chhapega. Yehi chain ki taakat hai — ek hi program alag-alag input par alag faisla deta hai. Ab socho aap else if (marks >= 60) ko hata do. Ab 72 wala student seedha else if (marks >= 33) par jayega aur "Pass" chhapega — First Division gayab ho jayega. Ab socho aap saare else if ko alag-alag if bana do. Ab 95 wala student pehle if mein Distinction bhi chhap dega aur dusre if mein First Division bhi — kyunki alag if ek dusre ko nahi rokte. Yehi else if aur alag if ka farq hai. Ab socho aap switch use karo menu ke liye: choice 1 par "Chai", 2 par "Coffee", 3 par "Juice". switch tab best hai jab ek hi variable ki alag-alag values check karni hon, aur if-else tab best hai jab range check karni ho, jaise marks >= 60.',
            english: 'Imagine you change marks = 72 to marks = 95. Now the first if (marks >= 90) will be true and "Distinction" will be printed. That is the power of the chain — one program gives different decisions for different inputs. Now imagine you remove else if (marks >= 60). Now the student with 72 will go straight to else if (marks >= 33) and "Pass" will be printed — First Division will disappear. Now imagine you make all the else if blocks into separate if blocks. Now the student with 95 will print Distinction in the first if and also First Division in the second if — because separate if blocks do not stop each other. That is the difference between else if and separate if. Now imagine you use a switch for a menu: choice 1 gives "Chai", 2 gives "Coffee", 3 gives "Juice". A switch is best when you check different values of one variable, and if-else is best when you check a range, like marks >= 60.',
            hindi: 'सोचिए आप marks = 72 की जगह marks = 95 कर दो। अब पहला if (marks >= 90) सच हो जाएगा और "Distinction" छपेगा। यही चेन की ताकत है — एक ही प्रोग्राम अलग-अलग इनपुट पर अलग फैसला देता है। अब सोचिए आप else if (marks >= 60) को हटा दो। अब 72 वाला छात्र सीधे else if (marks >= 33) पर जाएगा और "Pass" छपेगा — First Division गायब हो जाएगा। अब सोचिए आप सारे else if को अलग-अलग if बना दो। अब 95 वाला छात्र पहले if में Distinction भी छाप देगा और दूसरे if में First Division भी — क्योंकि अलग if एक दूसरे को नहीं रोकते। यही else if और अलग if का फर्क है। अब सोचिए आप switch इस्तेमाल करो मेनू के लिए: choice 1 पर "Chai", 2 पर "Coffee", 3 पर "Juice"। switch तब best है जब एक ही वेरिएबल की अलग-अलग वैल्यू जाँचनी हों, और if-else तब best है जब range जाँचनी हो, जैसे marks >= 60।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'if condition check karta hai aur sach hone par block chalata hai, else jhooth hone par chalta hai, aur else if chain mein agla sawaal poochta hai. Chain mein sirf pehli sach condition chalti hai. Comparison ke liye ==, !=, >, <, >=, <= use hote hain, aur do conditions jodne ke liye && aur ||. switch ek hi variable ki alag values ke liye best hai, aur har case ke baad break zaroori hai. Sabse badi galtiyan: = ki jagah == likhna, if ke baad semicolon lagana, aur chain ka order ulta likhna. Agle article mein hum seekhenge ki ek hi kaam ko baar-baar kaise karwaya jata hai — loops.',
            english: 'if checks a condition and runs a block when it is true, else runs when it is false, and else if asks the next question in the chain. In a chain, only the first true condition runs. For comparison, ==, !=, >, <, >=, <= are used, and && and || join two conditions. A switch is best for the different values of one variable, and break is needed after every case. The biggest mistakes are: writing = instead of ==, putting a semicolon after if, and writing the chain in reverse order. In the next article we will learn how to make the computer repeat one job again and again — loops.',
            hindi: 'if कंडीशन जाँचता है और सच होने पर ब्लॉक चलाता है, else झूठ होने पर चलता है, और else if चेन में अगला सवाल पूछता है। चेन में सिर्फ पहली सच कंडीशन चलती है। तुलना के लिए ==, !=, >, <, >=, <= इस्तेमाल होते हैं, और दो कंडीशन जोड़ने के लिए && और ||। switch एक ही वेरिएबल की अलग वैल्यू के लिए best है, और हर case के बाद break ज़रूरी है। सबसे बड़ी गलतियाँ: = की जगह == लिखना, if के बाद सेमीकोलन लगाना, और चेन का क्रम उल्टा लिखना। अगले लेख में हम सीखेंगे कि एक ही काम को बार-बार कैसे करवाया जाता है — loops।',
          },
        },
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'If-else chain ka flow',
          english: 'The flow of an if-else chain',
          hindi: 'If-else चेन का फ्लो',
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
            hinglish: 'Switch se menu',
            english: 'A menu with switch',
            hindi: 'switch से मेनू',
          },
          language: 'c',
          code: `#include <stdio.h>

int main() {
    int choice = 2;
    switch (choice) {
        case 1:
            printf("Chai\\n");
            break;
        case 2:
            printf("Coffee\\n");
            break;
        default:
            printf("Galat choice\\n");
    }
    return 0;
}`,
          output: 'Coffee',
          note: {
            hinglish: 'choice 2 hai, isliye case 2 chala. break ki wajah se case 3 ya default nahi chala.',
            english: 'choice is 2, so case 2 ran. Because of break, case 3 or default did not run.',
            hindi: 'choice 2 है, इसलिए case 2 चला। break की वजह से case 3 या default नहीं चला।',
          },
        },
        {
          title: {
            hinglish: 'Do conditions ek saath',
            english: 'Two conditions together',
            hindi: 'दो कंडीशन एक साथ',
          },
          language: 'c',
          code: `#include <stdio.h>

int main() {
    int age = 25;
    if (age > 18 && age < 60) {
        printf("Adult\\n");
    } else {
        printf("Child ya Senior\\n");
    }
    return 0;
}`,
          output: 'Adult',
          note: {
            hinglish: '&& ka matlab hai dono conditions sach honi chahiye. 25 dono ko satisfy karta hai.',
            english: '&& means both conditions must be true. 25 satisfies both.',
            hindi: '&& का मतलब है दोनों कंडीशन सच होनी चाहिए। 25 दोनों को satisfy करता है।',
          },
        },
      ],
      mcqs: [
        {
          q: {
            hinglish: 'Is code ka output kya hoga? int a = 10; if (a = 5) { printf("Yes"); } else { printf("No"); }',
            english: 'What will this code print? int a = 10; if (a = 5) { printf("Yes"); } else { printf("No"); }',
            hindi: 'इस कोड का आउटपुट क्या होगा? int a = 10; if (a = 5) { printf("Yes"); } else { printf("No"); }',
          },
          opts: [
            { hinglish: 'Yes', english: 'Yes', hindi: 'Yes' },
            { hinglish: 'No', english: 'No', hindi: 'No' },
            { hinglish: 'Error', english: 'Error', hindi: 'एरर' },
            { hinglish: 'Kuch nahi', english: 'Nothing', hindi: 'कुछ नहीं' },
          ],
          ans: 0,
          expl: {
            hinglish: 'a = 5 assignment hai, comparison nahi. Ye a mein 5 rakh deta hai, aur 5 zero nahi hai isliye condition sach mani jati hai.',
            english: 'a = 5 is an assignment, not a comparison. It puts 5 in a, and since 5 is not zero, the condition is treated as true.',
            hindi: 'a = 5 assignment है, comparison नहीं। यह a में 5 रख देता है, और 5 ज़ीरो नहीं है इसलिए कंडीशन सच मानी जाती है।',
          },
        },
        {
          q: {
            hinglish: 'marks = 85 hai. Kaun sa block chalega? if (marks >= 90) ... else if (marks >= 60) ... else ...',
            english: 'marks is 85. Which block will run? if (marks >= 90) ... else if (marks >= 60) ... else ...',
            hindi: 'marks = 85 है। कौन सा ब्लॉक चलेगा? if (marks >= 90) ... else if (marks >= 60) ... else ...',
          },
          opts: [
            { hinglish: 'else if (marks >= 60) wala', english: 'The else if (marks >= 60) one', hindi: 'else if (marks >= 60) वाला' },
            { hinglish: 'if (marks >= 90) wala', english: 'The if (marks >= 90) one', hindi: 'if (marks >= 90) वाला' },
            { hinglish: 'else wala', english: 'The else one', hindi: 'else वाला' },
            { hinglish: 'Dono pehle wale', english: 'Both of the first two', hindi: 'दोनों पहले वाले' },
          ],
          ans: 0,
          expl: {
            hinglish: '85 >= 90 jhooth hai, isliye pehla if skip hota hai. 85 >= 60 sach hai, isliye dusra block chalta hai aur chain ruk jati hai.',
            english: '85 >= 90 is false, so the first if is skipped. 85 >= 60 is true, so the second block runs and the chain stops.',
            hindi: '85 >= 90 झूठ है, इसलिए पहला if छोड़ दिया जाता है। 85 >= 60 सच है, इसलिए दूसरा ब्लॉक चलता है और चेन रुक जाती है।',
          },
        },
        {
          q: {
            hinglish: 'switch mein ek case ke baad break na likha ho to kya hoga?',
            english: 'What happens if break is not written after a case in a switch?',
            hindi: 'switch में एक case के बाद break न लिखा हो तो क्या होगा?',
          },
          opts: [
            { hinglish: 'Agla case bhi chal padega', english: 'The next case will also run', hindi: 'अगला case भी चल पड़ेगा' },
            { hinglish: 'Program ruk jayega', english: 'The program will stop', hindi: 'प्रोग्राम रुक जाएगा' },
            { hinglish: 'Error aayega', english: 'An error will come', hindi: 'एरर आएगा' },
            { hinglish: 'Kuch nahi hoga', english: 'Nothing will happen', hindi: 'कुछ नहीं होगा' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Bina break ke switch agle case mein gir jata hai — ise fall-through kehte hain. Isiliye har case ke baad break likho.',
            english: 'Without break, a switch falls into the next case — this is called fall-through. That is why break is written after every case.',
            hindi: 'बिना break के switch अगले case में गिर जाता है — इसे fall-through कहते हैं। इसीलिए हर case के बाद break लिखो।',
          },
        },
        {
          q: {
            hinglish: 'Kaun si condition "age 18 se 60 ke beech hai" ko sahi check karti hai?',
            english: 'Which condition correctly checks "age is between 18 and 60"?',
            hindi: 'कौन सी कंडीशन "age 18 से 60 के बीच है" को सही जाँचती है?',
          },
          opts: [
            { hinglish: 'age > 18 && age < 60', english: 'age > 18 && age < 60', hindi: 'age > 18 && age < 60' },
            { hinglish: 'age > 18 || age < 60', english: 'age > 18 || age < 60', hindi: 'age > 18 || age < 60' },
            { hinglish: 'age > 18 && age > 60', english: 'age > 18 && age > 60', hindi: 'age > 18 && age > 60' },
            { hinglish: '18 < age < 60', english: '18 < age < 60', hindi: '18 < age < 60' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Dono conditions ek saath sach honi chahiye, isliye && use hota hai. || se to har age pass ho jati, aur 18 < age < 60 C mein aise kaam nahi karta.',
            english: 'Both conditions must be true together, so && is used. With || almost every age would pass, and 18 < age < 60 does not work like that in C.',
            hindi: 'दोनों कंडीशन एक साथ सच होनी चाहिए, इसलिए && इस्तेमाल होता है। || से तो हर age पास हो जाती, और 18 < age < 60 सी में ऐसे काम नहीं करता।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Output guess karo: ticket ka daam',
          english: 'Guess the output: the ticket price',
          hindi: 'आउटपुट अनुमान लगाएँ: टिकट का दाम',
        },
        task: {
          hinglish: 'Neeche wale program ko bina chalaye padho aur guess karo ki screen par kya dikhega. Done tab mana jayega jab aap bata sako ki kaun si condition sach hui aur baaki kyun skip hui.',
          english: 'Read the program below without running it and guess what will appear on the screen. You are done when you can say which condition was true and why the rest were skipped.',
          hindi: 'नीचे वाले प्रोग्राम को बिना चलाए पढ़ें और अनुमान लगाएँ कि स्क्रीन पर क्या दिखेगा। आप तब सफल हैं जब आप बता सकें कि कौन सी कंडीशन सच हुई और बाकी क्यों छोड़ दी गईं।',
        },
        language: 'c',
        starter: `#include <stdio.h>

int main() {
    int age = 8;
    if (age < 5) {
        printf("Free\\n");
    } else if (age <= 12) {
        printf("Half ticket\\n");
    } else {
        printf("Full ticket\\n");
    }
    return 0;
}`,
        expected: 'Half ticket',
      },
    },
    {
      id: 'c-loops',
      subjectId: 'c-programming',
      title: {
        hinglish: 'Loops — ek kaam baar-baar',
        english: 'Loops — One Job Again and Again',
        hindi: 'Loops — एक काम बार-बार',
      },
      summary: {
        hinglish: 'for, while aur do-while — computer se ek hi kaam sau baar karwana, bina sau baar likhe. Table, sum aur counting examples ke saath.',
        english: 'for, while, and do-while — making the computer repeat one job a hundred times without writing it a hundred times. With table, sum, and counting examples.',
        hindi: 'for, while और do-while — कंप्यूटर से एक ही काम सौ बार करवाना, बिना सौ बार लिखे। टेबल, sum और counting उदाहरणों के साथ।',
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
            hinglish: 'Loop ka matlab hai ek hi kaam ko baar-baar karna, jab tak ek condition sach hai. Socho aapko 1 se 100 tak ke number likhne hain. Bina loop ke aapko 100 printf likhne padenge. Loop se aap ek baar likhte ho "i ko 1 se 100 tak badhao aur har baar chhapo", aur computer baaki kaam kar deta hai. C mein teen loop hote hain. for loop tab use hota hai jab aapko pehle se pata ho ki kaam kitni baar karna hai, jaise 10 baar. while loop tab use hota hai jab aapko nahi pata ki kaam kitni baar hoga, bas itna pata hai ki kab rukna hai, jaise "jab tak user 0 na bole". do-while loop while jaisa hi hai, lekin ye pehle ek baar kaam karta hai aur phir condition check karta hai. Har loop ke teen hisse hote hain: shuruaat (i = 1), condition (i <= 10), aur badlav (i++). Agar inme se ek bhi galat ho, to loop ya to kabhi chalega hi nahi, ya kabhi rukega hi nahi.',
            english: 'A loop means doing one job again and again, as long as a condition is true. Imagine you have to write the numbers from 1 to 100. Without a loop you would have to write 100 printf statements. With a loop you write once, "increase i from 1 to 100 and print it each time", and the computer does the rest. C has three loops. A for loop is used when you already know how many times the job must be done, like 10 times. A while loop is used when you do not know how many times it will run, only when it must stop, like "until the user says 0". A do-while loop is like while, but it does the job once first and then checks the condition. Every loop has three parts: the start (i = 1), the condition (i <= 10), and the change (i++). If any one of these is wrong, the loop will either never run, or never stop.',
            hindi: 'Loop का मतलब है एक ही काम को बार-बार करना, जब तक एक कंडीशन सच है। सोचिए आपको 1 से 100 तक के नंबर लिखने हैं। बिना loop के आपको 100 printf लिखने पड़ेंगे। Loop से आप एक बार लिखते हैं "i को 1 से 100 तक बढ़ाओ और हर बार छापो", और कंप्यूटर बाकी काम कर देता है। सी में तीन loop होते हैं। for loop तब इस्तेमाल होता है जब आपको पहले से पता हो कि काम कितनी बार करना है, जैसे 10 बार। while loop तब इस्तेमाल होता है जब आपको नहीं पता कि काम कितनी बार होगा, बस इतना पता है कि कब रुकना है, जैसे "जब तक user 0 न बोले"। do-while loop while जैसा ही है, लेकिन यह पहले एक बार काम करता है और फिर कंडीशन जाँचता है। हर loop के तीन हिस्से होते हैं: शुरुआत (i = 1), कंडीशन (i <= 10), और बदलाव (i++)। अगर इनमें से एक भी गलत हो, तो loop या तो कभी चलेगा ही नहीं, या कभी रुकेगा ही नहीं।',
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
            hinglish: 'Neeche wale program mein 1 se 10 tak ke numbers ka sum nikaala ja raha hai. Pehli line int sum = 0; ek dabba banati hai jisme total rakha jayega. Dusri line for (int i = 1; i <= 10; i++) loop shuru karti hai. Iske teen hisse semicolon se alag hote hain. Pehla hissa int i = 1; — i ko 1 se shuru karo. Dusra hissa i <= 10; — jab tak i 10 se chhota ya barabar hai, loop chalao. Teesra hissa i++ — har round ke baad i ko 1 se badhao. Loop ke andar sum = sum + i; likha hai. Pehle round mein i = 1 hai, to sum 0 + 1 = 1 ban jata hai. Dusre round mein i = 2 hai, to sum 1 + 2 = 3. Teesre mein 3 + 3 = 6. Aise karte karte jab i = 10 hota hai, to sum 45 + 10 = 55 ban jata hai. Phir i++ se i 11 ho jata hai, aur condition i <= 10 jhooth ho jati hai, isliye loop ruk jata hai. Aakhir mein printf sum ko chhapta hai: 55. Isi program ko while se bhi likha ja sakta hai, lekin for isliye behtar hai kyunki shuruaat, condition aur badlav ek hi line mein dikhte hain.',
            english: 'In the program below, the sum of the numbers from 1 to 10 is being found. The first line, int sum = 0;, makes a box where the total will be kept. The second line, for (int i = 1; i <= 10; i++), starts the loop. Its three parts are separated by semicolons. The first part, int i = 1; — start i at 1. The second part, i <= 10; — run the loop as long as i is smaller than or equal to 10. The third part, i++ — after every round, increase i by 1. Inside the loop it says sum = sum + i;. In the first round i = 1, so sum becomes 0 + 1 = 1. In the second round i = 2, so sum becomes 1 + 2 = 3. In the third, 3 + 3 = 6. Going on like this, when i = 10, sum becomes 45 + 10 = 55. Then i++ makes i 11, and the condition i <= 10 becomes false, so the loop stops. At the end, printf prints the sum: 55. The same program can also be written with while, but for is better here because the start, the condition, and the change are all visible in one line.',
            hindi: 'नीचे वाले प्रोग्राम में 1 से 10 तक के नंबरों का sum निकाला जा रहा है। पहली लाइन int sum = 0; एक डिब्बा बनाती है जिसमें कुल रखा जाएगा। दूसरी लाइन for (int i = 1; i <= 10; i++) loop शुरू करती है। इसके तीन हिस्से सेमीकोलन से अलग होते हैं। पहला हिस्सा int i = 1; — i को 1 से शुरू करो। दूसरा हिस्सा i <= 10; — जब तक i 10 से छोटा या बराबर है, loop चलाओ। तीसरा हिस्सा i++ — हर राउंड के बाद i को 1 से बढ़ाओ। Loop के अंदर sum = sum + i; लिखा है। पहले राउंड में i = 1 है, तो sum 0 + 1 = 1 बन जाता है। दूसरे राउंड में i = 2 है, तो sum 1 + 2 = 3। तीसरे में 3 + 3 = 6। ऐसे करते करते जब i = 10 होता है, तो sum 45 + 10 = 55 बन जाता है। फिर i++ से i 11 हो जाता है, और कंडीशन i <= 10 झूठ हो जाती है, इसलिए loop रुक जाता है। आखिर में printf sum को छापता है: 55। इसी प्रोग्राम को while से भी लिखा जा सकता है, लेकिन for इसलिए बेहतर है क्योंकि शुरुआत, कंडीशन और बदलाव एक ही लाइन में दिखते हैं।',
          },
          code: {
            title: {
              hinglish: '1 se 10 tak ka sum',
              english: 'Sum from 1 to 10',
              hindi: '1 से 10 तक का sum',
            },
            language: 'c',
            code: `#include <stdio.h>

int main() {
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        sum = sum + i;
    }
    printf("Sum: %d\\n", sum);
    return 0;
}`,
            output: 'Sum: 55',
            note: {
              hinglish: 'Har round mein i badhta hai aur sum mein judta hai. 11 par condition jhooth hoti hai aur loop ruk jata hai.',
              english: 'In every round i grows and is added to sum. At 11 the condition becomes false and the loop stops.',
              hindi: 'हर राउंड में i बढ़ता है और sum में जुड़ता है। 11 पर कंडीशन झूठ होती है और loop रुक जाता है।',
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
            hinglish: 'Sabse khatarnak galti: infinite loop. Agar aap for (int i = 1; i <= 10; ) likh kar i++ bhool jao, to i hamesha 1 rahega aur loop kabhi nahi rukega. Ye isliye hota hai kyunki loop ko rukne ka koi tareeka hi nahi diya gaya. Dusri galti: galat condition, jaise i <= 10 ki jagah i < 10 likhna jab 10 bhi chahiye. Isse aakhri value chhoot jati hai — ise off-by-one error kehte hain, aur ye programming ki sabse aam galti hai. Teesri galti: for ke baad semicolon lagana — for (int i = 1; i <= 5; i++); { printf("%d", i); } mein semicolon ki wajah se loop khaali chalta hai aur printf sirf ek baar chalta hai, jab i 6 ho chuka hota hai. Chauthi galti: while loop mein badlav bhoolna. while (n > 0) { printf("%d", n); } mein agar n ko kam nahi kiya to loop hamesha chalega. Paanchvi galti: loop variable ko loop ke baad use karna. for ke andar declare kiya gaya i loop ke baad exist nahi karta — use loop ke pehle declare karna padta hai.',
            english: 'The most dangerous mistake: an infinite loop. If you write for (int i = 1; i <= 10; ) and forget i++, then i will always stay 1 and the loop will never stop. This happens because the loop was never given a way to stop. Second mistake: a wrong condition, like writing i < 10 instead of i <= 10 when you also need 10. Then the last value is missed — this is called an off-by-one error, and it is the most common mistake in programming. Third mistake: putting a semicolon after for — in for (int i = 1; i <= 5; i++); { printf("%d", i); } the semicolon makes the loop run empty, and printf runs only once, when i is already 6. Fourth mistake: forgetting the change in a while loop. In while (n > 0) { printf("%d", n); }, if you do not decrease n, the loop will run forever. Fifth mistake: using the loop variable after the loop. An i declared inside a for does not exist after the loop — it must be declared before the loop.',
            hindi: 'सबसे खतरनाक गलती: infinite loop। अगर आप for (int i = 1; i <= 10; ) लिख कर i++ भूल जाओ, तो i हमेशा 1 रहेगा और loop कभी नहीं रुकेगा। यह इसलिए होता है क्योंकि loop को रुकने का कोई तरीका ही नहीं दिया गया। दूसरी गलती: गलत कंडीशन, जैसे i <= 10 की जगह i < 10 लिखना जब 10 भी चाहिए। इससे आखिरी वैल्यू छूट जाती है — इसे off-by-one error कहते हैं, और यह प्रोग्रामिंग की सबसे आम गलती है। तीसरी गलती: for के बाद सेमीकोलन लगाना — for (int i = 1; i <= 5; i++); { printf("%d", i); } में सेमीकोलन की वजह से loop खाली चलता है और printf सिर्फ एक बार चलता है, जब i 6 हो चुका होता है। चौथी गलती: while loop में बदलाव भूलना। while (n > 0) { printf("%d", n); } में अगर n को कम नहीं किया तो loop हमेशा चलेगा। पाँचवीं गलती: loop variable को loop के बाद इस्तेमाल करना। for के अंदर घोषित किया गया i loop के बाद exist नहीं करता — उसे loop के पहले घोषित करना पड़ता है।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास स्थितियाँ',
          },
          body: {
            hinglish: 'Pehla edge case: loop jo kabhi chale hi nahi. for (int i = 10; i < 5; i++) mein shuruaat mein hi condition jhooth hai, isliye body ek baar bhi nahi chalti. Ye galti nahi hai — kabhi-kabhi ye jaan-boojh kar chahiye hota hai. Dusra edge case: do-while jo hamesha kam se kam ek baar chalta hai, chahe condition pehle se jhooth ho. Ye menu ke liye best hai, kyunki menu kam se kam ek baar to dikhna hi chahiye. Teesra edge case: break aur continue. break loop ko turant tod deta hai, jaise lift ka emergency button. continue sirf current round ko skip karta hai aur agle round par chala jata hai. Chautha edge case: loop ke andar loop, matlab nested loop. Ye table ya pattern chhapne ke liye use hota hai, lekin har nested loop kaam ko bahut badha deta hai — 10 ke andar 10 ka loop 100 baar chalega. Paanchva edge case: bahut bada loop, jaise 1 se 1 crore tak. Ye chalega, lekin time lagega — isliye hamesha socho ki loop kitni baar chalega.',
            english: 'First edge case: a loop that never runs at all. In for (int i = 10; i < 5; i++), the condition is false from the start, so the body does not run even once. This is not a mistake — sometimes this is wanted on purpose. Second edge case: a do-while always runs at least once, even if the condition is false from the start. This is best for a menu, because the menu must be shown at least once. Third edge case: break and continue. break breaks the loop at once, like the emergency button of a lift. continue only skips the current round and moves to the next round. Fourth edge case: a loop inside a loop, called a nested loop. This is used for printing a table or a pattern, but every nested loop multiplies the work a lot — a loop of 10 inside a loop of 10 will run 100 times. Fifth edge case: a very big loop, like from 1 to 1 crore. It will run, but it will take time — so always think about how many times a loop will run.',
            hindi: 'पहली खास स्थिति: loop जो कभी चले ही नहीं। for (int i = 10; i < 5; i++) में शुरुआत में ही कंडीशन झूठ है, इसलिए body एक बार भी नहीं चलती। यह गलती नहीं है — कभी-कभी यह जान-बूझ कर चाहिए होता है। दूसरी खास स्थिति: do-while जो हमेशा कम से कम एक बार चलता है, चाहे कंडीशन पहले से झूठ हो। यह मेनू के लिए best है, क्योंकि मेनू कम से कम एक बार तो दिखना ही चाहिए। तीसरी खास स्थिति: break और continue। break loop को तुरंत तोड़ देता है, जैसे लिफ्ट का emergency button। continue सिर्फ current round को skip करता है और अगले राउंड पर चला जाता है। चौथी खास स्थिति: loop के अंदर loop, मतलब nested loop। यह टेबल या पैटर्न छापने के लिए इस्तेमाल होता है, लेकिन हर nested loop काम को बहुत बढ़ा देता है — 10 के अंदर 10 का loop 100 बार चलेगा। पाँचवीं खास स्थिति: बहुत बड़ा loop, जैसे 1 से 1 करोड़ तक। यह चलेगा, लेकिन समय लगेगा — इसलिए हमेशा सोचो कि loop कितनी बार चलेगा।',
          },
        },
        {
          heading: {
            hinglish: 'Agar aap ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर आप यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish: 'Socho aap i++ ki jagah i = i + 2 likh do. Ab loop sirf odd numbers par chalega: 1, 3, 5, 7, 9 — aur sum 25 ban jayega. Yehi ek chhota sa badlav poora result badal deta hai. Ab socho aap i <= 10 ki jagah i <= 100 kar do. Sum 5050 ban jayega — 1 se 100 tak ka sum. Ab socho aap sum = sum + i ki jagah sum = sum + i * i kar do. Ab squares ka sum niklega: 1 + 4 + 9 + ... + 100 = 385. Ab socho aap for ki jagah while likh do: int i = 1; while (i <= 10) { sum = sum + i; i++; }. Result bilkul wahi 55 hoga — sirf likhne ka tareeka badla hai. Ab socho aap loop ke andar printf("%d\\n", i); bhi laga do. Ab har round mein i chhapega, aur aap dekh sakoge ki loop kaise chal raha hai. Ye debugging ka sabse simple tareeka hai: loop ke andar print lagao aur dekho kya ho raha hai.',
            english: 'Imagine you write i = i + 2 instead of i++. Now the loop will run only on odd numbers: 1, 3, 5, 7, 9 — and the sum will become 25. One small change like this changes the whole result. Now imagine you write i <= 100 instead of i <= 10. The sum will become 5050 — the sum from 1 to 100. Now imagine you write sum = sum + i * i instead of sum = sum + i. Now the sum of squares will come out: 1 + 4 + 9 + ... + 100 = 385. Now imagine you write while instead of for: int i = 1; while (i <= 10) { sum = sum + i; i++; }. The result will be exactly the same 55 — only the way of writing has changed. Now imagine you also put printf("%d\\n", i); inside the loop. Now i will be printed in every round, and you will be able to see how the loop is running. This is the simplest way to debug: put a print inside the loop and see what is happening.',
            hindi: 'सोचिए आप i++ की जगह i = i + 2 लिख दो। अब loop सिर्फ odd नंबरों पर चलेगा: 1, 3, 5, 7, 9 — और sum 25 बन जाएगा। यही एक छोटा सा बदलाव पूरा रिज़ल्ट बदल देता है। अब सोचिए आप i <= 10 की जगह i <= 100 कर दो। Sum 5050 बन जाएगा — 1 से 100 तक का sum। अब सोचिए आप sum = sum + i की जगह sum = sum + i * i कर दो। अब squares का sum निकलेगा: 1 + 4 + 9 + ... + 100 = 385। अब सोचिए आप for की जगह while लिख दो: int i = 1; while (i <= 10) { sum = sum + i; i++; }। रिज़ल्ट बिल्कुल वही 55 होगा — सिर्फ लिखने का तरीका बदला है। अब सोचिए आप loop के अंदर printf("%d\\n", i); भी लगा दो। अब हर राउंड में i छपेगा, और आप देख सकोगे कि loop कैसे चल रहा है। यह debugging का सबसे सरल तरीका है: loop के अंदर print लगाओ और देखो क्या हो रहा है।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'Loop ek hi kaam ko baar-baar karta hai jab tak condition sach hai. for tab use karo jab count pehle se pata ho, while tab jab sirf rukne ki condition pata ho, aur do-while tab jab kaam kam se kam ek baar to hona hi chahiye. Har loop mein shuruaat, condition aur badlav hona chahiye — badlav bhoolne se infinite loop banta hai. i <= 10 aur i < 10 ka farq off-by-one error deta hai, isliye boundary par dhyaan do. break loop todta hai, continue ek round skip karta hai. Agle article mein hum seekhenge ki ek kaam ko naam dekar baar-baar kaise bulaya jata hai — functions.',
            english: 'A loop does one job again and again as long as a condition is true. Use for when the count is known in advance, while when only the stopping condition is known, and do-while when the job must happen at least once. Every loop needs a start, a condition, and a change — forgetting the change makes an infinite loop. The difference between i <= 10 and i < 10 gives an off-by-one error, so pay attention at the boundary. break breaks the loop, continue skips one round. In the next article we will learn how to give a job a name and call it again and again — functions.',
            hindi: 'Loop एक ही काम को बार-बार करता है जब तक कंडीशन सच है। for तब इस्तेमाल करो जब count पहले से पता हो, while तब जब सिर्फ रुकने की कंडीशन पता हो, और do-while तब जब काम कम से कम एक बार तो होना ही चाहिए। हर loop में शुरुआत, कंडीशन और बदलाव होना चाहिए — बदलाव भूलने से infinite loop बनता है। i <= 10 और i < 10 का फर्क off-by-one error देता है, इसलिए boundary पर ध्यान दो। break loop तोड़ता है, continue एक राउंड skip करता है। अगले लेख में हम सीखेंगे कि एक काम को नाम देकर बार-बार कैसे बुलाया जाता है — functions।',
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
          { t: { hinglish: 'i = 1 se shuru', english: 'Start with i = 1', hindi: 'i = 1 से शुरू' } },
          { t: { hinglish: 'Condition check: i <= 10?', english: 'Check condition: i <= 10?', hindi: 'कंडीशन जाँचो: i <= 10?' } },
          { t: { hinglish: 'Sach: body chalao', english: 'True: run the body', hindi: 'सच: body चलाओ' } },
          { t: { hinglish: 'i++ karo, wapas check karo', english: 'Do i++, check again', hindi: 'i++ करो, वापस जाँचो' } },
          { t: { hinglish: 'Jhooth: loop se bahar', english: 'False: leave the loop', hindi: 'झूठ: loop से बाहर' } },
        ],
      },
      codeExamples: [
        {
          title: {
            hinglish: '7 ka table',
            english: 'Table of 7',
            hindi: '7 का टेबल',
          },
          language: 'c',
          code: `#include <stdio.h>

int main() {
    for (int i = 1; i <= 10; i++) {
        printf("7 x %d = %d\\n", i, 7 * i);
    }
    return 0;
}`,
          output: '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70',
          note: {
            hinglish: 'Ek hi printf 10 baar chalti hai, har baar i ki nayi value ke saath.',
            english: 'One printf runs 10 times, each time with a new value of i.',
            hindi: 'एक ही printf 10 बार चलती है, हर बार i की नई वैल्यू के साथ।',
          },
        },
        {
          title: {
            hinglish: 'While se ulta ginna',
            english: 'Counting down with while',
            hindi: 'While से उल्टा गिनना',
          },
          language: 'c',
          code: `#include <stdio.h>

int main() {
    int n = 5;
    while (n > 0) {
        printf("%d\\n", n);
        n--;
    }
    printf("Go!\\n");
    return 0;
}`,
          output: '5\n4\n3\n2\n1\nGo!',
          note: {
            hinglish: 'n-- har round mein n ko 1 se kam karta hai. Jab n 0 hota hai, condition jhooth ho jati hai.',
            english: 'n-- decreases n by 1 in every round. When n becomes 0, the condition becomes false.',
            hindi: 'n-- हर राउंड में n को 1 से कम करता है। जब n 0 होता है, कंडीशन झूठ हो जाती है।',
          },
        },
      ],
      mcqs: [
        {
          q: {
            hinglish: 'Is loop mein printf kitni baar chalega? for (int i = 1; i <= 5; i++) { printf("Hi"); }',
            english: 'How many times will printf run in this loop? for (int i = 1; i <= 5; i++) { printf("Hi"); }',
            hindi: 'इस loop में printf कितनी बार चलेगा? for (int i = 1; i <= 5; i++) { printf("Hi"); }',
          },
          opts: [
            { hinglish: '5 baar', english: '5 times', hindi: '5 बार' },
            { hinglish: '4 baar', english: '4 times', hindi: '4 बार' },
            { hinglish: '6 baar', english: '6 times', hindi: '6 बार' },
            { hinglish: 'Kabhi nahi', english: 'Never', hindi: 'कभी नहीं' },
          ],
          ans: 0,
          expl: {
            hinglish: 'i 1, 2, 3, 4, 5 par chalta hai — kul 5 baar. i <= 5 mein 5 bhi included hai.',
            english: 'i runs at 1, 2, 3, 4, 5 — 5 times in total. In i <= 5, 5 is also included.',
            hindi: 'i 1, 2, 3, 4, 5 पर चलता है — कुल 5 बार। i <= 5 में 5 भी included है।',
          },
        },
        {
          q: {
            hinglish: 'Is code ka output kya hoga? int i = 1; while (i <= 3) { printf("%d", i); i++; }',
            english: 'What will this code print? int i = 1; while (i <= 3) { printf("%d", i); i++; }',
            hindi: 'इस कोड का आउटपुट क्या होगा? int i = 1; while (i <= 3) { printf("%d", i); i++; }',
          },
          opts: [
            { hinglish: '123', english: '123', hindi: '123' },
            { hinglish: '12', english: '12', hindi: '12' },
            { hinglish: '1234', english: '1234', hindi: '1234' },
            { hinglish: '111', english: '111', hindi: '111' },
          ],
          ans: 0,
          expl: {
            hinglish: 'i 1, phir 2, phir 3 chhapta hai. Jab i 4 hota hai to condition jhooth ho jati hai aur loop ruk jata hai.',
            english: 'i prints 1, then 2, then 3. When i becomes 4 the condition becomes false and the loop stops.',
            hindi: 'i 1, फिर 2, फिर 3 छापता है। जब i 4 होता है तो कंडीशन झूठ हो जाती है और loop रुक जाता है।',
          },
        },
        {
          q: {
            hinglish: 'Infinite loop ka sabse aam kaaran kya hai?',
            english: 'What is the most common cause of an infinite loop?',
            hindi: 'Infinite loop का सबसे आम कारण क्या है?',
          },
          opts: [
            { hinglish: 'Loop variable ko badalna bhool jana', english: 'Forgetting to change the loop variable', hindi: 'Loop variable को बदलना भूल जाना' },
            { hinglish: 'printf likhna bhool jana', english: 'Forgetting to write printf', hindi: 'printf लिखना भूल जाना' },
            { hinglish: 'Semicolon lagana bhool jana', english: 'Forgetting to put a semicolon', hindi: 'सेमीकोलन लगाना भूल जाना' },
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
            hinglish: 'do-while loop ki sabse khaas baat kya hai?',
            english: 'What is the most special thing about a do-while loop?',
            hindi: 'do-while loop की सबसे खास बात क्या है?',
          },
          opts: [
            { hinglish: 'Ye kam se kam ek baar zaroor chalta hai', english: 'It runs at least once for sure', hindi: 'यह कम से कम एक बार ज़रूर चलता है' },
            { hinglish: 'Ye kabhi nahi rukta', english: 'It never stops', hindi: 'यह कभी नहीं रुकता' },
            { hinglish: 'Isme condition nahi hoti', english: 'It has no condition', hindi: 'इसमें कंडीशन नहीं होती' },
            { hinglish: 'Ye for se tez hota hai', english: 'It is faster than for', hindi: 'यह for से तेज़ होता है' },
          ],
          ans: 0,
          expl: {
            hinglish: 'do-while mein pehle body chalti hai, phir condition check hoti hai — isliye body kam se kam ek baar chalti hi hai.',
            english: 'In a do-while the body runs first, then the condition is checked — so the body runs at least once.',
            hindi: 'do-while में पहले body चलती है, फिर कंडीशन जाँच होती है — इसलिए body कम से कम एक बार चलती ही है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Output guess karo: sum ka loop',
          english: 'Guess the output: a sum loop',
          hindi: 'आउटपुट अनुमान लगाएँ: sum का loop',
        },
        task: {
          hinglish: 'Neeche wale program ko bina chalaye padho aur guess karo ki screen par kya dikhega. Done tab mana jayega jab aap har round ke baad sum ki value bata sako.',
          english: 'Read the program below without running it and guess what will appear on the screen. You are done when you can say the value of sum after every round.',
          hindi: 'नीचे वाले प्रोग्राम को बिना चलाए पढ़ें और अनुमान लगाएँ कि स्क्रीन पर क्या दिखेगा। आप तब सफल हैं जब आप हर राउंड के बाद sum की वैल्यू बता सकें।',
        },
        language: 'c',
        starter: `#include <stdio.h>

int main() {
    int sum = 0;
    for (int i = 1; i <= 4; i++) {
        sum = sum + i * 2;
    }
    printf("%d\\n", sum);
    return 0;
}`,
        expected: '20',
      },
    },
    {
      id: 'c-functions',
      subjectId: 'c-programming',
      title: {
        hinglish: 'Functions — ek kaam, ek naam, baar-baar use',
        english: 'Functions — One Job, One Name, Use Again and Again',
        hindi: 'Functions — एक काम, एक नाम, बार-बार इस्तेमाल',
      },
      summary: {
        hinglish: 'Function kya hai, parameter aur return value kaise kaam karte hain, aur bada program chhote-chhote hisson mein kaise banta hai.',
        english: 'What a function is, how parameters and return values work, and how a big program is built from small parts.',
        hindi: 'Function क्या है, parameter और return value कैसे काम करते हैं, और बड़ा प्रोग्राम छोटे-छोटे हिस्सों में कैसे बनता है।',
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
            hinglish: 'Function ek naam wala kaam hai. Socho aapke ghar mein ek mixer hai — aap usme aam daalte ho, button dabate ho, aur aam ka juice bahar aata hai. Mixer ko ye nahi pata ki aam kahan se aaya, aur aapko ye nahi pata ki andar blade kaise ghumta hai. Aapko sirf itna pata hai: andar ye daalo, bahar ye milega. Function bilkul waisa hi hai. Aap use kuch input dete ho (parameter), wo andar hisaab karta hai, aur aapko ek result wapas deta hai (return value). Jaise add(5, 3) ko 5 aur 3 do, to wo 8 wapas dega. Function likhne ka fayda ye hai ki ek baar likho aur baar-baar use karo — bina dobara likhe. Bada program bhi chhote-chhote functions se banta hai, jaise ghar eenton se banta hai. Har function ka ek kaam hota hai, aur uska naam batata hai ki wo kya karta hai. main() bhi ek function hai — wo khaas function hai jise computer sabse pehle bulata hai.',
            english: 'A function is a named job. Think of the mixer in your house — you put mangoes in it, press the button, and mango juice comes out. The mixer does not know where the mangoes came from, and you do not know how the blade spins inside. You only know this: put this in, get this out. A function is exactly like that. You give it some input (a parameter), it does the maths inside, and it gives you back a result (a return value). Like add(5, 3): give it 5 and 3, and it will give back 8. The benefit of writing a function is that you write it once and use it again and again — without writing it again. A big program is also made of small functions, like a house is made of bricks. Every function has one job, and its name tells you what it does. main() is also a function — it is the special function the computer calls first.',
            hindi: 'Function एक नाम वाला काम है। सोचिए आपके घर में एक मिक्सर है — आप उसमें आम डालते हैं, बटन दबाते हैं, और आम का जूस बाहर आता है। मिक्सर को यह नहीं पता कि आम कहाँ से आया, और आपको यह नहीं पता कि अंदर ब्लेड कैसे घूमता है। आपको सिर्फ इतना पता है: अंदर यह डालो, बाहर यह मिलेगा। Function बिल्कुल वैसा ही है। आप उसे कुछ इनपुट देते हैं (parameter), वह अंदर हिसाब करता है, और आपको एक रिज़ल्ट वापस देता है (return value)। जैसे add(5, 3) को 5 और 3 दो, तो वह 8 वापस देगा। Function लिखने का फायदा यह है कि एक बार लिखो और बार-बार इस्तेमाल करो — बिना दोबारा लिखे। बड़ा प्रोग्राम भी छोटे-छोटे functions से बनता है, जैसे घर ईंटों से बनता है। हर function का एक काम होता है, और उसका नाम बताता है कि वह क्या करता है। main() भी एक function है — वह खास function है जिसे कंप्यूटर सबसे पहले बुलाता है।',
          },
        },
        {
          heading: {
            hinglish: 'Real-life example: dhaba ka cook aur waiter',
            english: 'Real-life example: a dhaba cook and waiter',
            hindi: 'असल ज़िंदगी का उदाहरण: ढाबे का कुक और वेटर',
          },
          body: {
            hinglish: 'Ek dhabe mein waiter customer se order leta hai aur cook ko batata hai: "ek plate dal fry banao". Cook dal fry banata hai aur waiter ko wapas deta hai. Waiter ko ye nahi pata ki cook ne kaun se masale daale, aur cook ko ye nahi pata ki customer kaun hai. Dono ke beech sirf do cheezein pass hoti hain: order (input) aur khana (output). Function mein bhi aisa hi hota hai. main() waiter hai — wo function ko bulata hai aur input deta hai. Function cook hai — wo input par kaam karta hai aur result wapas deta hai. Agar kal menu mein naya khana aaye, to sirf cook ko naya tareeka seekhna padega, waiter ko nahi. Isi ko separation kehte hain: har function apna kaam khud karta hai, aur dusre function ke andar ki baat nahi jaanta. Isiliye bada program bhi samajhna aasan ho jata hai — aap ek function ko alag se dekh sakte ho, bina poore program ko padhe.',
            english: 'At a dhaba, the waiter takes the order from the customer and tells the cook: "make one plate of dal fry". The cook makes the dal fry and gives it back to the waiter. The waiter does not know which spices the cook used, and the cook does not know who the customer is. Only two things pass between them: the order (input) and the food (output). A function works the same way. main() is the waiter — it calls the function and gives the input. The function is the cook — it works on the input and gives back the result. If a new dish comes on the menu tomorrow, only the cook has to learn the new way, not the waiter. This is called separation: every function does its own job, and does not know what is inside another function. That is why even a big program becomes easy to understand — you can look at one function separately, without reading the whole program.',
            hindi: 'एक ढाबे में वेटर ग्राहक से ऑर्डर लेता है और कुक को बताता है: "एक प्लेट दाल फ्राई बनाओ"। कुक दाल फ्राई बनाता है और वेटर को वापस देता है। वेटर को यह नहीं पता कि कुक ने कौन से मसाले डाले, और कुक को यह नहीं पता कि ग्राहक कौन है। दोनों के बीच सिर्फ दो चीज़ें पास होती हैं: ऑर्डर (इनपुट) और खाना (आउटपुट)। Function में भी ऐसा ही होता है। main() वेटर है — वह function को बुलाता है और इनपुट देता है। Function कुक है — वह इनपुट पर काम करता है और रिज़ल्ट वापस देता है। अगर कल मेनू में नया खाना आए, तो सिर्फ कुक को नया तरीका सीखना पड़ेगा, वेटर को नहीं। इसी को separation कहते हैं: हर function अपना काम खुद करता है, और दूसरे function के अंदर की बात नहीं जानता। इसीलिए बड़ा प्रोग्राम भी समझना आसान हो जाता है — आप एक function को अलग से देख सकते हैं, बिना पूरे प्रोग्राम को पढ़े।',
          },
        },
        {
          heading: {
            hinglish: 'Step-by-step: add function, line by line',
            english: 'Step-by-step: the add function, line by line',
            hindi: 'चरण-दर-चरण: add function, लाइन दर लाइन',
          },
          body: {
            hinglish: 'Neeche wale program mein ek function hai: int add(int a, int b). Ise line by line samjho. int ka matlab hai function ek int number wapas dega. add function ka naam hai. Bracket ke andar int a, int b parameters hain — ye do dabbe hain jinme function ko bulate waqt values aayengi. Function ke andar return a + b; likha hai — ye a aur b ko jod kar result wapas bhej deta hai. Ab main() ko dekho: int result = add(5, 3); mein main function ko bulata hai aur 5 aur 3 deta hai. Computer 5 ko a mein aur 3 ko b mein rakh deta hai, phir function ke andar jata hai, 5 + 3 = 8 karta hai, aur 8 ko result mein rakh deta hai. Phir printf result ko chhapta hai. Dusri baar add(10, 20) bulane par wahi function 30 dega — function ko dobara likhna nahi pada. Dhyaan do: a aur b sirf add function ke andar exist karte hain. main() mein a likhne par error aayega, kyunki main ko pata hi nahi ki a kya hai. Ise scope kehte hain — har variable apne function ke andar hi rehta hai.',
            english: 'In the program below there is a function: int add(int a, int b). Understand it line by line. int means the function will give back an int number. add is the name of the function. Inside the brackets, int a, int b are parameters — two boxes into which values will come when the function is called. Inside the function it says return a + b; — this adds a and b and sends the result back. Now look at main(): in int result = add(5, 3);, main calls the function and gives 5 and 3. The computer puts 5 in a and 3 in b, then goes inside the function, does 5 + 3 = 8, and puts 8 in result. Then printf prints the result. Calling add(10, 20) a second time will give 30 from the same function — the function did not have to be written again. Note that a and b exist only inside the add function. Writing a in main() will give an error, because main does not even know what a is. This is called scope — every variable stays inside its own function.',
            hindi: 'नीचे वाले प्रोग्राम में एक function है: int add(int a, int b)। इसे लाइन दर लाइन समझिए। int का मतलब है function एक int नंबर वापस देगा। add function का नाम है। ब्रैकेट के अंदर int a, int b parameters हैं — ये दो डिब्बे हैं जिनमें function को बुलाते वक्त वैल्यू आएँगी। Function के अंदर return a + b; लिखा है — यह a और b को जोड़ कर रिज़ल्ट वापस भेज देता है। अब main() को देखिए: int result = add(5, 3); में main function को बुलाता है और 5 और 3 देता है। कंप्यूटर 5 को a में और 3 को b में रख देता है, फिर function के अंदर जाता है, 5 + 3 = 8 करता है, और 8 को result में रख देता है। फिर printf result को छापता है। दूसरी बार add(10, 20) बुलाने पर वही function 30 देगा — function को दोबारा लिखना नहीं पड़ा। ध्यान दो: a और b सिर्फ add function के अंदर exist करते हैं। main() में a लिखने पर एरर आएगा, क्योंकि main को पता ही नहीं कि a क्या है। इसे scope कहते हैं — हर variable अपने function के अंदर ही रहता है।',
          },
          code: {
            title: {
              hinglish: 'Add function',
              english: 'Add function',
              hindi: 'Add function',
            },
            language: 'c',
            code: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    printf("Result: %d\\n", result);
    printf("Again: %d\\n", add(10, 20));
    return 0;
}`,
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
            hinglish: 'Pehli galti: return bhoolna. Agar function int wapas dene wala hai aur aap return nahi likhte, to wapas kachra value jayegi. Ye isliye hota hai kyunki computer khud result nahi bhejta — aapko return se bhejna padta hai. Dusri galti: function ko use karne se pehle declare nahi karna. Agar add() main() ke baad likha hai aur upar declare nahi kiya, to compiler ko pata nahi chalega ki add kya hai. Isiliye function ko ya to main() se pehle likho, ya upar uska declaration likho. Teesri galti: parameter aur argument ko mix karna. add(5, 3) mein 5 aur 3 arguments hain (jo bheje gaye), aur int a, int b parameters hain (jo receive karte hain). Chauthi galti: galat type wapas karna — float function se int wapas karna. Paanchvi galti: function ke andar ka variable bahar use karna. a sirf add ke andar hai, main mein nahi. Agar aapko a ki value main mein chahiye, to use return se wapas bhejo.',
            english: 'First mistake: forgetting return. If a function is supposed to give back an int and you do not write return, a garbage value will go back. This happens because the computer does not send the result by itself — you must send it with return. Second mistake: not declaring a function before using it. If add() is written after main() and not declared above, the compiler will not know what add is. So either write the function before main(), or write its declaration above. Third mistake: mixing up parameter and argument. In add(5, 3), 5 and 3 are arguments (what was sent), and int a, int b are parameters (what receives them). Fourth mistake: returning the wrong type — returning an int from a float function. Fifth mistake: using a variable from inside a function outside it. a exists only inside add, not in main. If you need the value of a in main, send it back with return.',
            hindi: 'पहली गलती: return भूलना। अगर function int वापस देने वाला है और आप return नहीं लिखते, तो वापस कचरा वैल्यू जाएगी। यह इसलिए होता है क्योंकि कंप्यूटर खुद रिज़ल्ट नहीं भेजता — आपको return से भेजना पड़ता है। दूसरी गलती: function को इस्तेमाल करने से पहले declare नहीं करना। अगर add() main() के बाद लिखा है और ऊपर declare नहीं किया, तो कंपाइलर को पता नहीं चलेगा कि add क्या है। इसीलिए function को या तो main() से पहले लिखो, या ऊपर उसका declaration लिखो। तीसरी गलती: parameter और argument को मिलाना। add(5, 3) में 5 और 3 arguments हैं (जो भेजे गए), और int a, int b parameters हैं (जो receive करते हैं)। चौथी गलती: गलत टाइप वापस करना — float function से int वापस करना। पाँचवीं गलती: function के अंदर का variable बाहर इस्तेमाल करना। a सिर्फ add के अंदर है, main में नहीं। अगर आपको a की वैल्यू main में चाहिए, तो उसे return से वापस भेजो।',
          },
        },
        {
          heading: {
            hinglish: 'Edge cases',
            english: 'Edge cases',
            hindi: 'खास स्थितियाँ',
          },
          body: {
            hinglish: 'Pehla edge case: void function. Agar function kuch wapas nahi deta, to uska type void hota hai, jaise void greet() { printf("Namaste"); }. Isme return nahi likha jata, ya sirf return; likha jata hai. Dusra edge case: function jo khud ko bulata hai, matlab recursion. factorial(5) andar se factorial(4) bulata hai, phir factorial(3), aur aise chalte chalte factorial(0) par rukta hai. Recursion bahut taakatwar hai, lekin agar rukne ki condition na ho to ye kabhi nahi rukta aur stack overflow kar deta hai. Teesra edge case: ek hi naam ke do function nahi ho sakte — C mein function overloading nahi hoti. add(int, int) aur add(float, float) ek saath nahi likhe ja sakte. Chautha edge case: function mein parameter ki value badalna. add ke andar a = a + 1 likhne se main ke andar ki value nahi badalti, kyunki function ko value ki copy milti hai, original nahi. Ise pass by value kehte hain.',
            english: 'First edge case: a void function. If a function gives back nothing, its type is void, like void greet() { printf("Namaste"); }. No return is written in it, or only return; is written. Second edge case: a function that calls itself, called recursion. factorial(5) calls factorial(4) from inside, then factorial(3), and going on like this it stops at factorial(0). Recursion is very powerful, but if there is no stopping condition it never stops and causes a stack overflow. Third edge case: two functions cannot have the same name — C does not have function overloading. add(int, int) and add(float, float) cannot be written together. Fourth edge case: changing the value of a parameter inside a function. Writing a = a + 1 inside add does not change the value inside main, because the function gets a copy of the value, not the original. This is called pass by value.',
            hindi: 'पहली खास स्थिति: void function। अगर function कुछ वापस नहीं देता, तो उसका टाइप void होता है, जैसे void greet() { printf("Namaste"); }। इसमें return नहीं लिखा जाता, या सिर्फ return; लिखा जाता है। दूसरी खास स्थिति: function जो खुद को बुलाता है, मतलब recursion। factorial(5) अंदर से factorial(4) बुलाता है, फिर factorial(3), और ऐसे चलते चलते factorial(0) पर रुकता है। Recursion बहुत ताकतवर है, लेकिन अगर रुकने की कंडीशन न हो तो यह कभी नहीं रुकता और stack overflow कर देता है। तीसरी खास स्थिति: एक ही नाम के दो function नहीं हो सकते — सी में function overloading नहीं होती। add(int, int) और add(float, float) एक साथ नहीं लिखे जा सकते। चौथी खास स्थिति: function में parameter की वैल्यू बदलना। add के अंदर a = a + 1 लिखने से main के अंदर की वैल्यू नहीं बदलती, क्योंकि function को वैल्यू की कॉपी मिलती है, original नहीं। इसे pass by value कहते हैं।',
          },
        },
        {
          heading: {
            hinglish: 'Agar aap ye badal do to kya hoga?',
            english: 'What if you change this?',
            hindi: 'अगर आप यह बदल दो तो क्या होगा?',
          },
          body: {
            hinglish: 'Socho aap return a + b; ki jagah return a * b; kar do. Ab add(5, 3) 8 ki jagah 15 dega — function ka naam to add hai, lekin kaam guna ka ho gaya. Isiliye function ka naam aur kaam hamesha match karne chahiye, nahi to padhne wala confuse ho jayega. Ab socho aap add(5, 3) ki jagah add(3, 5) kar do. Result wahi 8 hoga, kyunki jodne mein order se farq nahi padta. Lekin agar function subtract hota, to add(5, 3) = 2 aur add(3, 5) = -2 hota — order ka farq dikhta. Ab socho aap int add ki jagah float add kar do. Ab function decimal number wapas de sakta hai, lekin main mein result ko bhi float banana padega. Ab socho aap function ke andar printf laga do. Ab har call par print bhi hoga aur return bhi hoga — function dono kaam kar sakta hai, lekin best practice ye hai ki ek function ya to print kare ya return kare, dono nahi, taaki use dobara use karna aasan rahe.',
            english: 'Imagine you write return a * b; instead of return a + b;. Now add(5, 3) will give 15 instead of 8 — the name of the function is add, but its job has become multiplication. That is why the name and the job of a function must always match, otherwise the reader will get confused. Now imagine you write add(3, 5) instead of add(5, 3). The result will still be 8, because the order does not matter in addition. But if the function were subtract, then add(5, 3) = 2 and add(3, 5) = -2 — the order would matter. Now imagine you write float add instead of int add. Now the function can give back a decimal number, but the result in main must also become a float. Now imagine you put a printf inside the function. Now every call will both print and return — a function can do both, but the best practice is that one function should either print or return, not both, so that it stays easy to reuse.',
            hindi: 'सोचिए आप return a + b; की जगह return a * b; कर दो। अब add(5, 3) 8 की जगह 15 देगा — function का नाम तो add है, लेकिन काम गुणा का हो गया। इसीलिए function का नाम और काम हमेशा मेल खाने चाहिए, नहीं तो पढ़ने वाला confuse हो जाएगा। अब सोचिए आप add(5, 3) की जगह add(3, 5) कर दो। रिज़ल्ट वही 8 होगा, क्योंकि जोड़ने में order से फर्क नहीं पड़ता। लेकिन अगर function subtract होता, तो add(5, 3) = 2 और add(3, 5) = -2 होता — order का फर्क दिखता। अब सोचिए आप int add की जगह float add कर दो। अब function दशमलव नंबर वापस दे सकता है, लेकिन main में result को भी float बनाना पड़ेगा। अब सोचिए आप function के अंदर printf लगा दो। अब हर call पर print भी होगा और return भी होगा — function दोनों काम कर सकता है, लेकिन best practice यह है कि एक function या तो print करे या return करे, दोनों नहीं, ताकि उसे दोबारा इस्तेमाल करना आसान रहे।',
          },
        },
        {
          heading: {
            hinglish: 'Summary',
            english: 'Summary',
            hindi: 'सारांश',
          },
          body: {
            hinglish: 'Function ek naam wala kaam hai jo input leta hai (parameter), hisaab karta hai, aur result wapas deta hai (return value). Ek baar likho, baar-baar use karo. Function ko main() se pehle likho ya declare karo. Parameter wo hai jo function receive karta hai, argument wo hai jo bulane wala bhejta hai. Har variable ka scope apne function tak hota hai. void function kuch wapas nahi deta. Function ke andar parameter badalne se bahar ki value nahi badalti, kyunki copy milti hai. C subject yahin khatm hota hai — aapne pehla program, variables, operators, if-else, loops aur functions seekh liye. Agla subject Python hai, jahan yehi concepts aur bhi simple tareeke se milenge.',
            english: 'A function is a named job that takes input (a parameter), does the maths, and gives back a result (a return value). Write it once, use it again and again. Write a function before main() or declare it. A parameter is what the function receives, an argument is what the caller sends. Every variable has scope only inside its own function. A void function gives back nothing. Changing a parameter inside a function does not change the value outside, because a copy is given. The C subject ends here — you have learned your first program, variables, operators, if-else, loops, and functions. The next subject is Python, where you will meet these same ideas in an even simpler way.',
            hindi: 'Function एक नाम वाला काम है जो इनपुट लेता है (parameter), हिसाब करता है, और रिज़ल्ट वापस देता है (return value)। एक बार लिखो, बार-बार इस्तेमाल करो। Function को main() से पहले लिखो या declare करो। Parameter वह है जो function receive करता है, argument वह है जो बुलाने वाला भेजता है। हर variable का scope अपने function तक होता है। void function कुछ वापस नहीं देता। Function के अंदर parameter बदलने से बाहर की वैल्यू नहीं बदलती, क्योंकि कॉपी मिलती है। सी subject यहीं खत्म होता है — आपने पहला प्रोग्राम, variables, operators, if-else, loops और functions सीख लिए। अगला subject Python है, जहाँ यही concepts और भी सरल तरीके से मिलेंगे।',
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
          { t: { hinglish: 'main() add(5, 3) bulata hai', english: 'main() calls add(5, 3)', hindi: 'main() add(5, 3) बुलाता है' } },
          { t: { hinglish: 'a = 5, b = 3 milte hain', english: 'a = 5, b = 3 are received', hindi: 'a = 5, b = 3 मिलते हैं' } },
          { t: { hinglish: 'Andar hisaab: 5 + 3', english: 'Maths inside: 5 + 3', hindi: 'अंदर हिसाब: 5 + 3' } },
          { t: { hinglish: 'return 8, wapas main() mein', english: 'return 8, back in main()', hindi: 'return 8, वापस main() में' } },
        ],
      },
      codeExamples: [
        {
          title: {
            hinglish: 'Square nikaalne wala function',
            english: 'A function that finds the square',
            hindi: 'Square निकालने वाला function',
          },
          language: 'c',
          code: `#include <stdio.h>

int square(int n) {
    return n * n;
}

int main() {
    printf("%d\\n", square(4));
    printf("%d\\n", square(9));
    return 0;
}`,
          output: '16\n81',
          note: {
            hinglish: 'square(4) mein n = 4 hota hai aur 16 wapas aata hai. square(9) mein n = 9 hota hai aur 81 wapas aata hai.',
            english: 'In square(4), n = 4 and 16 comes back. In square(9), n = 9 and 81 comes back.',
            hindi: 'square(4) में n = 4 होता है और 16 वापस आता है। square(9) में n = 9 होता है और 81 वापस आता है।',
          },
        },
        {
          title: {
            hinglish: 'Void function: greet karna',
            english: 'Void function: greeting',
            hindi: 'Void function: greet करना',
          },
          language: 'c',
          code: `#include <stdio.h>

void greet() {
    printf("Namaste!\\n");
}

int main() {
    greet();
    greet();
    return 0;
}`,
          output: 'Namaste!\nNamaste!',
          note: {
            hinglish: 'void ka matlab hai function kuch wapas nahi deta — sirf kaam karta hai.',
            english: 'void means the function gives back nothing — it only does the job.',
            hindi: 'void का मतलब है function कुछ वापस नहीं देता — सिर्फ काम करता है।',
          },
        },
      ],
      mcqs: [
        {
          q: {
            hinglish: 'Is code ka output kya hoga? int add(int a, int b) { return a + b; } int main() { printf("%d", add(2, 3)); }',
            english: 'What will this code print? int add(int a, int b) { return a + b; } int main() { printf("%d", add(2, 3)); }',
            hindi: 'इस कोड का आउटपुट क्या होगा? int add(int a, int b) { return a + b; } int main() { printf("%d", add(2, 3)); }',
          },
          opts: [
            { hinglish: '5', english: '5', hindi: '5' },
            { hinglish: '23', english: '23', hindi: '23' },
            { hinglish: '6', english: '6', hindi: '6' },
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
            hinglish: 'Function ke andar ka variable bahar use karne par kya hoga?',
            english: 'What happens if you use a variable from inside a function outside it?',
            hindi: 'Function के अंदर का variable बाहर इस्तेमाल करने पर क्या होगा?',
          },
          opts: [
            { hinglish: 'Error aayega — variable ka scope sirf function tak hai', english: 'An error will come — the variable’s scope is only inside the function', hindi: 'एरर आएगा — variable का scope सिर्फ function तक है' },
            { hinglish: 'Value 0 milegi', english: 'You will get the value 0', hindi: 'वैल्यू 0 मिलेगी' },
            { hinglish: 'Purani value milegi', english: 'You will get the old value', hindi: 'पुरानी वैल्यू मिलेगी' },
            { hinglish: 'Kuch nahi hoga', english: 'Nothing will happen', hindi: 'कुछ नहीं होगा' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Har variable sirf apne function ke andar exist karta hai. Bahar use karne par compiler use pehchanta hi nahi.',
            english: 'Every variable exists only inside its own function. If you use it outside, the compiler does not even recognise it.',
            hindi: 'हर variable सिर्फ अपने function के अंदर exist करता है। बाहर इस्तेमाल करने पर कंपाइलर उसे पहचानता ही नहीं।',
          },
        },
        {
          q: {
            hinglish: 'void function ka matlab kya hai?',
            english: 'What does a void function mean?',
            hindi: 'void function का मतलब क्या है?',
          },
          opts: [
            { hinglish: 'Function kuch wapas nahi deta', english: 'The function gives back nothing', hindi: 'Function कुछ वापस नहीं देता' },
            { hinglish: 'Function khaali hai', english: 'The function is empty', hindi: 'Function खाली है' },
            { hinglish: 'Function kabhi nahi chalta', english: 'The function never runs', hindi: 'Function कभी नहीं चलता' },
            { hinglish: 'Function mein koi parameter nahi hai', english: 'The function has no parameter', hindi: 'Function में कोई parameter नहीं है' },
          ],
          ans: 0,
          expl: {
            hinglish: 'void ka matlab hai "kuch nahi" — aisa function sirf kaam karta hai, jaise print karna, lekin koi value wapas nahi deta.',
            english: 'void means "nothing" — such a function only does a job, like printing, but gives back no value.',
            hindi: 'void का मतलब है "कुछ नहीं" — ऐसा function सिर्फ काम करता है, जैसे print करना, लेकिन कोई वैल्यू वापस नहीं देता।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Output guess karo: function ka return',
          english: 'Guess the output: a function’s return',
          hindi: 'आउटपुट अनुमान लगाएँ: function का return',
        },
        task: {
          hinglish: 'Neeche wale program ko bina chalaye padho aur guess karo ki screen par kya dikhega. Done tab mana jayega jab aap bata sako ki pehli call mein n ki value kya thi aur dusri mein kya thi.',
          english: 'Read the program below without running it and guess what will appear on the screen. You are done when you can say what the value of n was in the first call and what it was in the second.',
          hindi: 'नीचे वाले प्रोग्राम को बिना चलाए पढ़ें और अनुमान लगाएँ कि स्क्रीन पर क्या दिखेगा। आप तब सफल हैं जब आप बता सकें कि पहली call में n की वैल्यू क्या थी और दूसरी में क्या थी।',
        },
        language: 'c',
        starter: `#include <stdio.h>

int doubleIt(int n) {
    return n * 2;
}

int main() {
    printf("%d\\n", doubleIt(7));
    printf("%d\\n", doubleIt(10));
    return 0;
}`,
        expected: '14\n20',
      },
    },
  ],
};
