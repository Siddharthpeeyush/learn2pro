// Learn2Pro v2 — Data Structures & Algorithms.
// All content written in our own style for students, in Hinglish, English and Hindi.
// Python examples are runnable in the site's Python runner.
import type {
  Subject,
  Article,
  LText,
  ArticleSection,
  CodeExample,
  MCQ,
  PracticeTask,
} from '../lib/types';

const t = (hinglish: string, english: string, hindi?: string): LText => ({
  hinglish,
  english,
  ...(hindi ? { hindi } : {}),
});

const sec = (
  hH: string,
  hE: string,
  hHi: string,
  bH: string,
  bE: string,
  bHi: string,
  code?: CodeExample,
): ArticleSection => ({
  heading: t(hH, hE, hHi),
  body: t(bH, bE, bHi),
  ...(code ? { code } : {}),
});

const H_WHAT = ['Ye kya hai?', 'What it is', 'यह क्या है?'] as const;
const H_REAL = [
  'Roz ki zindagi se example',
  'A real-life example',
  'रोज़ की ज़िंदगी से उदाहरण',
] as const;
const H_STEP = [
  'Step-by-step — worked example',
  'Step by step — a worked example',
  'स्टेप-बाय-स्टेप — हल किया हुआ उदाहरण',
] as const;
const H_MIST = [
  'Common mistakes — aur ye kyun hoti hain',
  'Common mistakes — and why they happen',
  'आम गलतियाँ — और ये क्यों होती हैं',
] as const;
const H_EDGE = [
  'Edge cases — chhote cases jo sab bhool jaate hain',
  'Edge cases — the small cases everyone forgets',
  'एज केस — छोटे मामले जो सब भूल जाते हैं',
] as const;
const H_WHATIF = [
  'Agar ye badal diya to kya hoga?',
  'What if you change this?',
  'अगर इसे बदल दिया तो क्या होगा?',
] as const;
const H_SUM = [
  'Summary — yaad rakhne wali baatein',
  'Summary — what to remember',
  'सार — याद रखने वाली बातें',
] as const;

const dsaIntro: Article = {
  id: 'dsa-intro',
  subjectId: 'dsa',
  title: t(
    'DSA kya hai aur Big-O kya hota hai',
    'What DSA is and what Big-O means',
    'डीएसए क्या है और बिग-O क्या होता है',
  ),
  summary: t(
    'Data structure matlab data ko sahi tarike se rakhna, algorithm matlab problem solve karne ke steps. Big-O batata hai ki data badhne par kaam kitna badhega — yehi DSA ki neev hai.',
    'A data structure is a way of storing data so it is easy to use, and an algorithm is a set of steps that solves a problem. Big-O tells you how the work grows when the data grows — that is the foundation of DSA.',
    'डेटा स्ट्रक्चर का मतलब है डेटा को सही तरीके से रखना, और एल्गोरिदम का मतलब है समस्या सुलझाने के कदम। बिग-O बताता है कि डेटा बढ़ने पर काम कितना बढ़ेगा — यही डीएसए की नींव है।',
  ),
  sections: [
    sec(
      H_WHAT[0], H_WHAT[1], H_WHAT[2],
      `Data structure ka matlab hai data ko rakhne ka tarika. Algorithm ka matlab hai kisi problem ko solve karne ke steps, ek ke baad ek, sahi order mein. Dono alag cheezein hain, lekin hamesha saath kaam karte hain — achha structure bina achhe steps ke bekaar hai, aur achhe steps bhi galat structure par slow ho jaate hain.\n\nSocho, tumhare paas 1000 doston ke phone number hain. Agar tum unhe ek diary mein bina order ke likh lo, to ek number dhoondhne mein poori diary palatni padegi. Lekin agar wahi numbers naam ke hisaab se A se Z tak sajaye hon, to tum seedha sahi page par ja sakte ho. Diary wahi hai, numbers wahi hain — farak sirf rakhne ke tarike ka hai. Yehi data structure hai.\n\nAlgorithm uske upar ka plan hai: number kaise dhoondhna hai — pehle page se ek-ek karke dekhna, ya beech se shuru karke aadha-aadha kaatna. Pehla plan simple hai, doosra tez hai. DSA seekhne ka matlab hai ye dono sawaal ek saath poochhna: data kaise rakhu, aur us par kaam kaise karu.`,
      `A data structure is a way of arranging data so that it is easy to use. An algorithm is a set of steps, in the right order, that solves a problem. They are two different things, but they always work together — a good structure is useless without good steps, and good steps become slow on the wrong structure.\n\nImagine you have the phone numbers of 1000 friends. If you write them in a diary with no order at all, finding one number means turning every page. But if the same numbers are arranged from A to Z by name, you can jump straight to the right page. The diary is the same and the numbers are the same — only the way they are stored is different. That is a data structure.\n\nThe algorithm is the plan on top of it: how to find the number — checking one page after another from the start, or starting in the middle and cutting the search in half each time. The first plan is simple, the second is fast. Learning DSA means asking both questions together: how should I store the data, and how should I work on it.`,
      `डेटा स्ट्रक्चर का मतलब है डेटा को इस तरह रखना कि उसे इस्तेमाल करना आसान हो। एल्गोरिदम का मतलब है किसी समस्या को सुलझाने के कदम, सही क्रम में। ये दो अलग चीज़ें हैं, लेकिन हमेशा साथ काम करती हैं — अच्छे कदमों के बिना अच्छा स्ट्रक्चर बेकार है, और गलत स्ट्रक्चर पर अच्छे कदम भी धीमे हो जाते हैं।\n\nसोचो, तुम्हारे पास 1000 दोस्तों के फ़ोन नंबर हैं। अगर तुम उन्हें बिना किसी क्रम के डायरी में लिख लो, तो एक नंबर ढूँढने में पूरी डायरी पलटनी पड़ेगी। लेकिन अगर वही नंबर नाम के हिसाब से A से Z तक सजे हों, तो तुम सीधे सही पेज पर जा सकते हो। डायरी वही है, नंबर वही हैं — फ़र्क सिर्फ़ रखने के तरीके का है। यही डेटा स्ट्रक्चर है।\n\nएल्गोरिदम उसके ऊपर की योजना है: नंबर कैसे ढूँढना है — पहले पेज से एक-एक करके देखना, या बीच से शुरू करके हर बार आधी खोज काट देना। पहली योजना सरल है, दूसरी तेज़ है। डीएसए सीखने का मतलब है दोनों सवाल एक साथ पूछना: डेटा कैसे रखूँ, और उस पर काम कैसे करूँ।`,
    ),
    sec(
      H_REAL[0], H_REAL[1], H_REAL[2],
      `Railway station par ticket ki line dekho. Log ek ke peeche ek khade hain — jo pehle aaya, uska kaam pehle hota hai. Ye queue hai, ek data structure. Ab library dekho: kitaabein almari mein subject ke hisaab se saji hain, taaki tum seedha sahi shelf par jao. Ye bhi ek structure hai, bas alag tarike ka.\n\nPhone mein contacts dekho. Tum naam type karte ho aur phone turant number dikha deta hai — wo 1000 naam ek-ek karke nahi padhta. Uske peeche ek tez tareeka hai, ek algorithm. Aur jab tum YouTube par video search karte ho, to lakhon videos mein se sahi wali second bhar mein mil jaati hai. Ye sab DSA ka roz ka kaam hai, bas hume dikhta nahi.\n\nIsliye DSA sirf interview ke liye nahi hai. Har app, har website, har game ke andar yehi sawaal chhupa hai: data kahan rakha hai, aur use kitni jaldi nikala ja sakta hai.`,
      `Look at the ticket line at a railway station. People stand one behind another — whoever came first is served first. That is a queue, a data structure. Now look at a library: books sit on shelves by subject, so you can walk straight to the right shelf. That is also a structure, just a different kind.\n\nLook at the contacts on your phone. You type a name and the phone shows the number at once — it does not read all 1000 names one by one. Behind that sits a fast method, an algorithm. And when you search for a video on YouTube, the right one appears from millions in a second. All of this is the everyday work of DSA, even though we never see it.\n\nSo DSA is not only for interviews. Inside every app, every website and every game hides the same question: where is the data kept, and how quickly can it be found.`,
      `रेलवे स्टेशन पर टिकट की लाइन देखो। लोग एक के पीछे एक खड़े हैं — जो पहले आया, उसका काम पहले होता है। यह क्यू है, एक डेटा स्ट्रक्चर। अब लाइब्रेरी देखो: किताबें अलमारी में विषय के हिसाब से सजी हैं, ताकि तुम सीधे सही शेल्फ़ पर जाओ। यह भी एक स्ट्रक्चर है, बस अलग तरह का।\n\nफ़ोन में कॉन्टैक्ट्स देखो। तुम नाम टाइप करते हो और फ़ोन तुरंत नंबर दिखा देता है — वह 1000 नाम एक-एक करके नहीं पढ़ता। उसके पीछे एक तेज़ तरीका है, एक एल्गोरिदम। और जब तुम यूट्यूब पर वीडियो खोजते हो, तो लाखों वीडियो में से सही वाली एक सेकंड में मिल जाती है। यह सब डीएसए का रोज़ का काम है, बस हमें दिखता नहीं।\n\nइसलिए डीएसए सिर्फ़ इंटरव्यू के लिए नहीं है। हर ऐप, हर वेबसाइट, हर गेम के अंदर यही सवाल छिपा है: डेटा कहाँ रखा है, और उसे कितनी जल्दी निकाला जा सकता है।`,
    ),
    sec(
      H_STEP[0], H_STEP[1], H_STEP[2],
      `Maan lo tumhare paas 8 doston ke marks hain: [55, 70, 62, 90, 48, 81, 73, 66]. Tumhe 90 dhoondhna hai. Pehla tareeka, linear search: pehle number se shuru karo, ek-ek karke check karo. 55 nahi, 70 nahi, 62 nahi, 90 mil gaya — 4 steps lage. Agar 90 aakhir mein hota, to 8 steps lagte. Data doguna ho jaye to steps bhi lagbhag dogune ho jaate hain. Iska Big-O hai O(n), matlab kaam data ke size ke saath seedha badhta hai.\n\nAb doosra tareeka dekho, lekin iske liye list sorted honi chahiye: [48, 55, 62, 66, 70, 73, 81, 90]. Binary search beech wala number dekhta hai — 66. 90 isse bada hai, to left wala aadha hissa kaat do. Bache [70, 73, 81, 90], beech mein 73 dekho — 90 isse bhi bada hai, to phir aadha kaato. Bache [81, 90], beech mein 81 dekho — 90 bada hai, aakhri number 90 mil gaya. Kul 4 steps lage. Data doguna karne par sirf 1 step aur lagta hai. Iska Big-O hai O(log n). Neeche wala code dono tareeke gin kar dikhata hai.\n\nBig-O ko seconds mein mat socho — wo computer ki speed par depend karta hai. Big-O ye batata hai ki jab data 10 se 1000 ya 10 lakh ho jaye, to steps kaise badhenge. O(1) matlab ek hi step, chahe data kitna bhi ho — jaise list ka pehla element nikalna. O(n) matlab ek loop. O(n²) matlab loop ke andar loop, jaise har student ko har doosre student se compare karna.`,
      `Suppose you have the marks of 8 friends: [55, 70, 62, 90, 48, 81, 73, 66]. You need to find 90. The first method, linear search, starts at the first number and checks one by one. 55 no, 70 no, 62 no, 90 found — 4 steps. If 90 had been at the end, it would take 8 steps. If the data doubles, the steps roughly double too. Its Big-O is O(n), which means the work grows directly with the size of the data.\n\nNow look at the second method, but it needs a sorted list: [48, 55, 62, 66, 70, 73, 81, 90]. Binary search looks at the middle number — 66. 90 is bigger than that, so throw away the left half. From the rest [70, 73, 81, 90], check the middle, 73 — 90 is bigger still, so cut the half again. From [81, 90], check 81 — 90 is bigger, and the last number, 90, is found. That took 4 steps in total. Doubling the data adds just 1 more step. Its Big-O is O(log n). The code below counts the steps for both methods.\n\nDo not think of Big-O in seconds — that depends on how fast the computer is. Big-O tells you how the steps grow when the data grows from 10 to 1000 or to 10 lakh. O(1) means a single step, no matter how much data there is — like taking the first element of a list. O(n) means one loop. O(n²) means a loop inside a loop, like comparing every student with every other student.`,
      `मान लो तुम्हारे पास 8 दोस्तों के नंबर हैं: [55, 70, 62, 90, 48, 81, 73, 66]। तुम्हें 90 ढूँढना है। पहला तरीका, लीनियर सर्च: पहले नंबर से शुरू करो, एक-एक करके जाँचो। 55 नहीं, 70 नहीं, 62 नहीं, 90 मिल गया — 4 कदम लगे। अगर 90 आखिर में होता, तो 8 कदम लगते। डेटा दोगुना हो जाए तो कदम भी लगभग दोगुने हो जाते हैं। इसका बिग-O है O(n), मतलब काम डेटा के आकार के साथ सीधे बढ़ता है।\n\nअब दूसरा तरीका देखो, लेकिन इसके लिए लिस्ट सॉर्टेड होनी चाहिए: [48, 55, 62, 66, 70, 73, 81, 90]। बाइनरी सर्च बीच वाला नंबर देखता है — 66। 90 इससे बड़ा है, तो बायाँ आधा हिस्सा काट दो। बचे [70, 73, 81, 90] में बीच देखो, 73 — 90 इससे भी बड़ा है, तो फिर आधा काटो। बचे [81, 90] में 81 देखो — 90 बड़ा है, आखिरी नंबर 90 मिल गया। कुल 4 कदम लगे। डेटा दोगुना करने पर सिर्फ़ 1 कदम और लगता है। इसका बिग-O है O(log n)। नीचे वाला कोड दोनों तरीकों के कदम गिनकर दिखाता है।\n\nबिग-O को सेकंड में मत सोचो — वह कंप्यूटर की गति पर निर्भर करता है। बिग-O यह बताता है कि जब डेटा 10 से 1000 या 10 लाख हो जाए, तो कदम कैसे बढ़ेंगे। O(1) मतलब एक ही कदम, चाहे डेटा कितना भी हो — जैसे लिस्ट का पहला एलिमेंट निकालना। O(n) मतलब एक लूप। O(n²) मतलब लूप के अंदर लूप, जैसे हर छात्र की तुलना हर दूसरे छात्र से करना।`,
      {
        title: t('Linear search vs binary search — steps ginna', 'Linear search vs binary search — counting the steps', 'लीनियर सर्च बनाम बाइनरी सर्च — कदम गिनना'),
        language: 'python',
        code: `marks = [55, 70, 62, 90, 48, 81, 73, 66]
target = 90

# Linear search: ek-ek karke check karo
steps = 0
for m in marks:
    steps += 1
    if m == target:
        break
print("Linear search steps:", steps)

# Binary search: sorted list par aadha-aadha kaato
sorted_marks = sorted(marks)
low, high = 0, len(sorted_marks) - 1
steps = 0
while low <= high:
    steps += 1
    mid = (low + high) // 2
    if sorted_marks[mid] == target:
        break
    elif sorted_marks[mid] < target:
        low = mid + 1
    else:
        high = mid - 1
print("Binary search steps:", steps)`,
        output: 'Linear search steps: 4\nBinary search steps: 4',
        note: t(
          '8 numbers par farak chhota dikhta hai. 10 lakh numbers par linear search 10 lakh steps le sakta hai, binary search sirf 20.',
          'On 8 numbers the difference looks small. On 10 lakh numbers, linear search can take 10 lakh steps, while binary search takes only 20.',
          '8 नंबरों पर फ़र्क छोटा दिखता है। 10 लाख नंबरों पर लीनियर सर्च 10 लाख कदम ले सकता है, जबकि बाइनरी सर्च सिर्फ़ 20 लेता है।',
        ),
      },
    ),
    sec(
      H_MIST[0], H_MIST[1], H_MIST[2],
      `Sabse badi galti: ye sochna ki tez computer kharab algorithm ko bacha lega. Computer 10 guna tez ho jaye, to O(n²) wala kaam sirf 10 guna tez hoga — lekin data 100 guna badh gaya to kaam 10,000 guna badh jayega. Speed se algorithm ki kamzori nahi chhupti, wo sirf thodi der ke liye chhoti dikhti hai.\n\nDoosri galti: Big-O ko exact time samajhna. O(n) ka matlab "n seconds" nahi hai. Iska matlab sirf ye hai ki kaam n ke saath badhta hai. Ek O(n) program ek O(1) program se hamesha slow nahi hota — chhote data par simple tareeka aksar jeet jaata hai, kyunki uska setup halka hota hai.\n\nTeesri galti: har jagah binary search laga dena. Binary search sirf sorted data par chalta hai. Bina sort kiye list par binary search galat jawab dega, aur wo bhi bina error ke — sabse khatarnak bug wahi hota hai jo chupchaap galat jawab de.`,
      `The biggest mistake is thinking that a faster computer will save a bad algorithm. If the computer becomes 10 times faster, an O(n²) task only becomes 10 times faster — but if the data grows 100 times, the work grows 10,000 times. Speed does not hide a weak algorithm, it only makes it look small for a while.\n\nThe second mistake is treating Big-O as an exact time. O(n) does not mean "n seconds". It only means the work grows with n. An O(n) program is not always slower than an O(1) program — on small data the simple method often wins, because its setup is lighter.\n\nThe third mistake is using binary search everywhere. Binary search only works on sorted data. On an unsorted list it gives a wrong answer without any error — and the most dangerous bug is the one that quietly gives a wrong answer.`,
      `सबसे बड़ी गलती: यह सोचना कि तेज़ कंप्यूटर खराब एल्गोरिदम को बचा लेगा। कंप्यूटर 10 गुना तेज़ हो जाए, तो O(n²) वाला काम सिर्फ़ 10 गुना तेज़ होगा — लेकिन डेटा 100 गुना बढ़ गया तो काम 10,000 गुना बढ़ जाएगा। गति से एल्गोरिदम की कमज़ोरी नहीं छिपती, वह सिर्फ़ थोड़ी देर के लिए छोटी दिखती है।\n\nदूसरी गलती: बिग-O को सटीक समय समझना। O(n) का मतलब "n सेकंड" नहीं है। इसका मतलब सिर्फ़ यह है कि काम n के साथ बढ़ता है। एक O(n) प्रोग्राम O(1) प्रोग्राम से हमेशा धीमा नहीं होता — छोटे डेटा पर सरल तरीका अक्सर जीत जाता है, क्योंकि उसकी तैयारी हल्की होती है।\n\nतीसरी गलती: हर जगह बाइनरी सर्च लगा देना। बाइनरी सर्च सिर्फ़ सॉर्टेड डेटा पर चलता है। बिना सॉर्ट की हुई लिस्ट पर बाइनरी सर्च गलत जवाब देगा, और वह भी बिना किसी एरर के — सबसे खतरनाक बग वही होता है जो चुपचाप गलत जवाब दे।`,
    ),
    sec(
      H_EDGE[0], H_EDGE[1], H_EDGE[2],
      `Khali list par dono search kya karenge? Linear search ek bhi step nahi lega, seedha "nahi mila" bolega. Binary search mein low = 0, high = -1 hoga, to while loop ek baar bhi nahi chalega. Dono sahi hain, lekin code mein ye check likhna tumhara kaam hai — nahi to IndexError aa sakta hai.\n\nEk element wali list par binary search ek step mein faisla karta hai. Aur agar list mein saare numbers ek jaise hon, jaise [70, 70, 70], to binary search koi ek 70 dhoondh lega, lekin kaun sa wala — ye pakka nahi. Agar tumhe pehla wala chahiye, to alag logic likhna padega.\n\nSabse mushkil edge case: data pehle se sorted hai ya nahi, ye assume mat karo. User se aaya data hamesha ganda ho sakta hai. Search se pehle ya to sort karo, ya linear search use karo.`,
      `What will both searches do on an empty list? Linear search takes no steps at all and simply says "not found". In binary search, low is 0 and high is -1, so the while loop never runs even once. Both are correct, but writing that check is your job — otherwise you can get an IndexError.\n\nOn a list with one element, binary search decides in a single step. And if all the numbers in the list are the same, like [70, 70, 70], binary search will find one of the 70s, but which one is not guaranteed. If you need the first one, you must write different logic.\n\nThe hardest edge case is this: never assume the data is already sorted. Data that comes from a user can always be messy. Before searching, either sort it or use linear search.`,
      `खाली लिस्ट पर दोनों सर्च क्या करेंगे? लीनियर सर्च एक भी कदम नहीं लेगा, सीधे "नहीं मिला" बोलेगा। बाइनरी सर्च में low = 0, high = -1 होगा, तो while लूप एक बार भी नहीं चलेगा। दोनों सही हैं, लेकिन यह जाँच लिखना तुम्हारा काम है — नहीं तो IndexError आ सकता है।\n\nएक एलिमेंट वाली लिस्ट पर बाइनरी सर्च एक कदम में फ़ैसला करता है। और अगर लिस्ट में सारे नंबर एक जैसे हों, जैसे [70, 70, 70], तो बाइनरी सर्च कोई एक 70 ढूँढ लेगा, लेकिन कौन सा वाला — यह पक्का नहीं। अगर तुम्हें पहला वाला चाहिए, तो अलग लॉजिक लिखना पड़ेगा।\n\nसबसे मुश्किल एज केस: डेटा पहले से सॉर्टेड है या नहीं, यह मान मत लो। यूज़र से आया डेटा हमेशा गड़बड़ हो सकता है। सर्च से पहले या तो सॉर्ट करो, या लीनियर सर्च इस्तेमाल करो।`,
    ),
    sec(
      H_WHATIF[0], H_WHATIF[1], H_WHATIF[2],
      `Agar list 8 se 16 numbers ki ho jaye, to linear search ke steps dogune ho sakte hain — 4 se 8. Binary search mein sirf 1 step badhega — 4 se 5. Ab socho list 10 lakh ki ho: linear search 10 lakh steps tak ja sakta hai, binary search 20 steps mein kaam khatam karta hai. Yehi farak hai jo bade apps mein second aur ghante ka farak bana deta hai.\n\nAur agar tum search ki jagah har baar poori list ko sort karne lago, to sort karne ka kharcha hi search se bada ho jayega. Sorting O(n log n) leti hai — ek baar search ke liye sort karna ghode ke aage gaadi jodna hai. Sort tab karo jab baar-baar search karna ho.`,
      `If the list grows from 8 numbers to 16, the steps of linear search can double — from 4 to 8. Binary search gains only 1 step — from 4 to 5. Now imagine a list of 10 lakh: linear search can go up to 10 lakh steps, while binary search finishes in 20 steps. That is the difference that turns seconds into hours in big apps.\n\nAnd if you sort the whole list every time before searching, the cost of sorting becomes bigger than the search itself. Sorting takes O(n log n) — sorting for a single search is like putting the cart before the horse. Sort when you need to search again and again.`,
      `अगर लिस्ट 8 से 16 नंबरों की हो जाए, तो लीनियर सर्च के कदम दोगुने हो सकते हैं — 4 से 8। बाइनरी सर्च में सिर्फ़ 1 कदम बढ़ेगा — 4 से 5। अब सोचो लिस्ट 10 लाख की हो: लीनियर सर्च 10 लाख कदमों तक जा सकता है, जबकि बाइनरी सर्च 20 कदमों में काम खत्म करता है। यही फ़र्क है जो बड़े ऐप्स में सेकंड और घंटे का फ़र्क बना देता है।\n\nऔर अगर तुम सर्च की जगह हर बार पूरी लिस्ट को सॉर्ट करने लगो, तो सॉर्ट करने का खर्च ही सर्च से बड़ा हो जाएगा। सॉर्टिंग O(n log n) लेती है — एक बार सर्च के लिए सॉर्ट करना घोड़े के आगे गाड़ी जोड़ना है। सॉर्ट तब करो जब बार-बार सर्च करना हो।`,
    ),
    sec(
      H_SUM[0], H_SUM[1], H_SUM[2],
      `Data structure data ko rakhne ka tarika hai, algorithm us par kaam karne ke steps hain. Big-O batata hai ki data badhne par kaam kaise badhta hai — O(1) ek step, O(n) ek loop, O(log n) aadha-aadha kaatna, O(n²) loop ke andar loop. Linear search har jagah chalta hai, binary search sirf sorted list par, lekin bahut tez hai. Interview mein ya real app mein, hamesha yehi do sawaal poochho: data kitna badhega, aur kaunsa tareeka us badhotri ko jhel payega.`,
      `A data structure is the way data is stored, and an algorithm is the set of steps that works on it. Big-O tells you how the work grows when the data grows — O(1) is one step, O(n) is one loop, O(log n) is cutting in half again and again, and O(n²) is a loop inside a loop. Linear search works everywhere, binary search works only on a sorted list but is very fast. In an interview or a real app, always ask the same two questions: how much will the data grow, and which method can handle that growth.`,
      `डेटा स्ट्रक्चर डेटा को रखने का तरीका है, एल्गोरिदम उस पर काम करने के कदम हैं। बिग-O बताता है कि डेटा बढ़ने पर काम कैसे बढ़ता है — O(1) एक कदम, O(n) एक लूप, O(log n) आधा-आधा काटना, O(n²) लूप के अंदर लूप। लीनियर सर्च हर जगह चलता है, बाइनरी सर्च सिर्फ़ सॉर्टेड लिस्ट पर, लेकिन बहुत तेज़ है। इंटरव्यू में या असली ऐप में, हमेशा यही दो सवाल पूछो: डेटा कितना बढ़ेगा, और कौन सा तरीका उस बढ़ोतरी को झेल पाएगा।`,
    ),
  ],
  diagram: {
    kind: 'boxes',
    title: t('Data badhe to steps kaise badhte hain', 'How the steps grow when data grows', 'डेटा बढ़े तो कदम कैसे बढ़ते हैं'),
    nodes: [
      { t: t('O(1) — ek step', 'O(1) — one step', 'O(1) — एक कदम'), s: t('pehla element nikalna', 'taking the first element', 'पहला एलिमेंट निकालना') },
      { t: t('O(log n) — aadha kaato', 'O(log n) — keep halving', 'O(log n) — आधा काटो'), s: t('binary search', 'binary search', 'बाइनरी सर्च') },
      { t: t('O(n) — ek loop', 'O(n) — one loop', 'O(n) — एक लूप'), s: t('linear search', 'linear search', 'लीनियर सर्च') },
      { t: t('O(n²) — loop ke andar loop', 'O(n²) — a loop inside a loop', 'O(n²) — लूप के अंदर लूप'), s: t('har jodi compare karna', 'comparing every pair', 'हर जोड़ी की तुलना करना') },
    ],
  },
  codeExamples: [
    {
      title: t('O(n²) ka dard — har jodi compare karna', 'The pain of O(n²) — comparing every pair', 'O(n²) का दर्द — हर जोड़ी की तुलना करना'),
      language: 'python',
      code: `scores = [70, 85, 70, 90, 85]
pairs = 0
for i in range(len(scores)):
    for j in range(i + 1, len(scores)):
        pairs += 1
        if scores[i] == scores[j]:
            print("Same marks:", scores[i], "at", i, "and", j)
print("Total pairs checked:", pairs)`,
      output: 'Same marks: 70 at 0 and 2\nSame marks: 85 at 1 and 4\nTotal pairs checked: 10',
      note: t(
        '5 numbers ke liye 10 jodiyaan. 100 numbers ke liye 4950 jodiyaan — isiliye nested loop bade data par bhaari padta hai.',
        'For 5 numbers there are 10 pairs. For 100 numbers there are 4950 pairs — that is why a nested loop becomes heavy on big data.',
        '5 नंबरों के लिए 10 जोड़ियाँ। 100 नंबरों के लिए 4950 जोड़ियाँ — इसीलिए नेस्टेड लूप बड़े डेटा पर भारी पड़ता है।',
      ),
    },
  ],
  mcqs: [
    {
      q: t(
        'Sorted list [10, 20, 30, 40, 50, 60, 70, 80] mein binary search se 70 dhoondho. Pehla mid kaun sa number check hoga?',
        'In the sorted list [10, 20, 30, 40, 50, 60, 70, 80], find 70 with binary search. Which number is checked as the first middle value?',
        'सॉर्टेड लिस्ट [10, 20, 30, 40, 50, 60, 70, 80] में बाइनरी सर्च से 70 ढूँढो। पहला mid कौन सा नंबर चेक होगा?',
      ),
      opts: [
        t('10', '10', '10'),
        t('40', '40', '40'),
        t('50', '50', '50'),
        t('70', '70', '70'),
      ],
      ans: 1,
      expl: t(
        'low = 0, high = 7, mid = 3, aur index 3 par 40 hai. 70 isse bada hai, to left aadha kaat kar aage badho.',
        'low is 0, high is 7, mid is 3, and index 3 holds 40. 70 is bigger than 40, so the left half is dropped and the search moves on.',
        'low = 0, high = 7, mid = 3, और इंडेक्स 3 पर 40 है। 70 इससे बड़ा है, तो बायाँ आधा काटकर आगे बढ़ो।',
      ),
    },
    {
      q: t(
        '10 lakh sorted numbers mein ek number dhoondhna hai. Kaun sa tareeka sabse tez hoga?',
        'You must find one number among 10 lakh sorted numbers. Which method will be fastest?',
        '10 लाख सॉर्टेड नंबरों में एक नंबर ढूँढना है। कौन सा तरीका सबसे तेज़ होगा?',
      ),
      opts: [
        t('Linear search, pehle se aakhir tak', 'Linear search, from start to end', 'लीनियर सर्च, पहले से आखिर तक'),
        t('Binary search, aadha-aadha kaat kar', 'Binary search, cutting in half each time', 'बाइनरी सर्च, आधा-आधा काटकर'),
        t('Har number ko print karke dekhna', 'Printing every number and looking at it', 'हर नंबर को प्रिंट करके देखना'),
        t('List ko dobara sort karke dhoondhna', 'Sorting the list again and then searching', 'लिस्ट को दोबारा सॉर्ट करके ढूँढना'),
      ],
      ans: 1,
      expl: t(
        'Binary search har step mein aadha data kaat deta hai, isliye 10 lakh numbers par sirf lagbhag 20 steps lagte hain.',
        'Binary search throws away half the data at every step, so on 10 lakh numbers it takes only about 20 steps.',
        'बाइनरी सर्च हर कदम में आधा डेटा काट देता है, इसलिए 10 लाख नंबरों पर सिर्फ़ लगभग 20 कदम लगते हैं।',
      ),
    },
    {
      q: t(
        'Neeche wale code mein bug kya hai? Binary search bina sort ki list par chalaya gaya hai: marks = [90, 20, 70, 40].',
        'What is the bug in this code? Binary search is run on an unsorted list: marks = [90, 20, 70, 40].',
        'नीचे वाले कोड में बग क्या है? बाइनरी सर्च बिना सॉर्ट की लिस्ट पर चलाया गया है: marks = [90, 20, 70, 40]।',
      ),
      opts: [
        t('Code chalega hi nahi, error aayega', 'The code will not run at all, it will give an error', 'कोड चलेगा ही नहीं, एरर आएगा'),
        t('Ye galat jawab de sakta hai, bina error ke', 'It can give a wrong answer, without any error', 'यह गलत जवाब दे सकता है, बिना एरर के'),
        t('Ye hamesha pehla element dega', 'It will always give the first element', 'यह हमेशा पहला एलिमेंट देगा'),
        t('Koi bug nahi hai', 'There is no bug', 'कोई बग नहीं है'),
      ],
      ans: 1,
      expl: t(
        'Binary search maan kar chalta hai ki list sorted hai. Unsorted list par wo galat hissa kaat sakta hai aur number hone par bhi "nahi mila" bol sakta hai.',
        'Binary search assumes the list is sorted. On an unsorted list it can throw away the wrong half and say "not found" even when the number is there.',
        'बाइनरी सर्च मानकर चलता है कि लिस्ट सॉर्टेड है। अनसॉर्टेड लिस्ट पर वह गलत हिस्सा काट सकता है और नंबर होने पर भी "नहीं मिला" बोल सकता है।',
      ),
    },
    {
      q: t(
        'Ek loop ke andar ek aur loop hai, dono list par chalte hain. Iska Big-O kya hoga?',
        'There is one loop inside another loop, and both run over the list. What is its Big-O?',
        'एक लूप के अंदर एक और लूप है, दोनों लिस्ट पर चलते हैं। इसका बिग-O क्या होगा?',
      ),
      opts: [
        t('O(1)', 'O(1)', 'O(1)'),
        t('O(log n)', 'O(log n)', 'O(log n)'),
        t('O(n)', 'O(n)', 'O(n)'),
        t('O(n²)', 'O(n²)', 'O(n²)'),
      ],
      ans: 3,
      expl: t(
        'Bahar wala loop n baar aur andar wala har baar n baar chalta hai, to kul steps n x n hote hain — isiliye O(n²).',
        'The outer loop runs n times and the inner loop runs n times for each of those, so the total steps are n times n — that is why it is O(n²).',
        'बाहर वाला लूप n बार और अंदर वाला हर बार n बार चलता है, तो कुल कदम n x n होते हैं — इसीलिए O(n²)।',
      ),
    },
  ],
  practice: {
    title: t('Linear search likho — index dhoondho', 'Write a linear search — find the index', 'लीनियर सर्च लिखो — इंडेक्स ढूँढो'),
    task: t(
      'Ek function linear_search(nums, target) likho jo target ka pehla index return kare, aur agar target na mile to -1 return kare. Starter mein list [12, 45, 23, 67, 34] hai. Done tab maanenge jab 67 ke liye 3 aur 99 ke liye -1 print ho. Expected output neeche diya hai.',
      'Write a function linear_search(nums, target) that returns the first index of the target, and returns -1 if the target is not there. The starter has the list [12, 45, 23, 67, 34]. You are done when it prints 3 for 67 and -1 for 99. The expected output is given below.',
      'एक फ़ंक्शन linear_search(nums, target) लिखो जो target का पहला इंडेक्स लौटाए, और अगर target न मिले तो -1 लौटाए। स्टार्टर में लिस्ट [12, 45, 23, 67, 34] है। तब पूरा मानेंगे जब 67 के लिए 3 और 99 के लिए -1 प्रिंट हो। अपेक्षित आउटपुट नीचे दिया है।',
    ),
    language: 'python',
    starter: `def linear_search(nums, target):
    # Har index par jao, match milte hi index return karo
    for i in range(len(nums)):
        if nums[i] == target:
            return i
    return -1

nums = [12, 45, 23, 67, 34]
print(linear_search(nums, 67))
print(linear_search(nums, 99))`,
    expected: '3\n-1',
  },
  readMinutes: 10,
};

const dsaArrays: Article = {
  id: 'dsa-arrays',
  subjectId: 'dsa',
  title: t(
    'Arrays — ek line mein saje hue dabbe',
    'Arrays — boxes lined up in a row',
    'ऐरे — एक लाइन में सजे हुए डिब्बे',
  ),
  summary: t(
    'Array mein saare elements ek ke baad ek, lagatar jagah par rakhe hote hain. Index se koi bhi element ek step mein mil jaata hai, lekin beech mein daalna ya nikaalna mehenga padta hai, kyunki baaki elements ko khisakna padta hai.',
    'In an array, all the elements sit one after another in continuous space. Any element can be reached in one step by its index, but inserting or removing in the middle is costly, because the other elements must be shifted.',
    'ऐरे में सारे एलिमेंट एक के बाद एक, लगातार जगह पर रखे होते हैं। इंडेक्स से कोई भी एलिमेंट एक कदम में मिल जाता है, लेकिन बीच में डालना या निकालना महँगा पड़ता है, क्योंकि बाकी एलिमेंट को खिसकना पड़ता है।',
  ),
  sections: [
    sec(
      H_WHAT[0], H_WHAT[1], H_WHAT[2],
      `Array ek hi type ke elements ko ek line mein rakhne ka tareeka hai. Har element ka ek number hota hai — index — jo 0 se shuru hota hai. Pehla element index 0 par, doosra 1 par, teesra 2 par. Ye index hi array ki sabse badi taakat hai: tumhe pata ho ki cheez kahan rakhi hai, to tum seedha wahan ja sakte ho, bina ek-ek karke dhoondhe.\n\nComputer memory mein array ke saare dabbe lagatar bane hote hain, ek ke baad ek, bina gap ke. Isiliye computer index se address nikaal leta hai: pehle dabbe ka pata + index x dabbe ka size. Ye hisaab ek step mein hota hai, isliye array mein kisi bhi element ko nikaalna O(1) hota hai — chahe list mein 10 cheezein hon ya 10 lakh.\n\nPython mein list dikhne mein array jaisi hai, lekin andar se thodi alag hai — wo alag size ki cheezein bhi rakh leti hai. Phir bhi index wala rule wahi hai: marks[0] pehla number dega, marks[-1] aakhri number dega. Is article mein hum list ko hi array ki tarah use karenge, kyunki tumhara runner Python ka hai.`,
      `An array is a way of keeping elements of the same kind in a single line. Every element has a number — an index — that starts from 0. The first element sits at index 0, the second at 1, the third at 2. This index is the greatest strength of an array: when you know where a thing is kept, you can go straight to it without searching one by one.\n\nIn the memory of a computer, all the boxes of an array are made in a continuous line, one after another with no gaps. So the computer works out an address from the index: the address of the first box plus index times the size of one box. That sum takes one step, which is why taking any element from an array is O(1) — whether the list holds 10 things or 10 lakh.\n\nIn Python, a list looks like an array but is a little different inside — it can hold things of different sizes too. Even so, the index rule is the same: marks[0] gives the first number and marks[-1] gives the last number. In this article we will use a list as an array, because your runner uses Python.`,
      `ऐरे एक ही तरह के एलिमेंट को एक लाइन में रखने का तरीका है। हर एलिमेंट का एक नंबर होता है — इंडेक्स — जो 0 से शुरू होता है। पहला एलिमेंट इंडेक्स 0 पर, दूसरा 1 पर, तीसरा 2 पर। यह इंडेक्स ही ऐरे की सबसे बड़ी ताकत है: तुम्हें पता हो कि चीज़ कहाँ रखी है, तो तुम सीधे वहाँ जा सकते हो, बिना एक-एक करके ढूँढे।\n\nकंप्यूटर की मेमोरी में ऐरे के सारे डिब्बे लगातार बने होते हैं, एक के बाद एक, बिना गैप के। इसीलिए कंप्यूटर इंडेक्स से पता निकाल लेता है: पहले डिब्बे का पता + इंडेक्स x डिब्बे का आकार। यह हिसाब एक कदम में होता है, इसलिए ऐरे में किसी भी एलिमेंट को निकालना O(1) होता है — चाहे लिस्ट में 10 चीज़ें हों या 10 लाख।\n\nपाइथन में लिस्ट दिखने में ऐरे जैसी है, लेकिन अंदर से थोड़ी अलग है — वह अलग आकार की चीज़ें भी रख लेती है। फिर भी इंडेक्स वाला नियम वही है: marks[0] पहला नंबर देगा, marks[-1] आखिरी नंबर देगा। इस आर्टिकल में हम लिस्ट को ही ऐरे की तरह इस्तेमाल करेंगे, क्योंकि तुम्हारा रनर पाइथन का है।`,
    ),
    sec(
      H_REAL[0], H_REAL[1], H_REAL[2],
      `Train mein seat numbers dekho: S1, S2, S3... Tumhe apni seat dhoondhne ke liye poori bogie nahi ghoomni padti — number dekh kar seedha jaate ho. Yehi array ka index hai. Ande ka tray bhi array hai: 12 khane, ek line mein, har khane mein ek anda.\n\nSchool mein roll number bhi yahi karta hai. Teacher ko "roll number 7" bulaana ho, to wo 7 bachchon ko gin kar nahi dhoondhti — register mein seedha 7th line dekhti hai. Aur cricket mein scorecard: har ball ka score ek ke baad ek likha jaata hai, to pata chal jaata hai ki 10th ball par kya hua tha.\n\nLekin socho, train ke beech mein ek nayi seat daalni ho to kya hoga? Uske baad wali saari seats ko ek-ek karke peeche khisakna padega. Yehi array ki kamzori hai — beech mein daalna mehenga hai.`,
      `Look at the seat numbers in a train: S1, S2, S3... To find your seat you do not walk through the whole coach — you look at the number and go straight to it. That is exactly the index of an array. An egg tray is also an array: 12 slots in a line, one egg in each slot.\n\nA roll number in school does the same thing. When a teacher has to call "roll number 7", she does not count 7 children one by one — she looks straight at the 7th line in the register. And in cricket, the scorecard writes the score of every ball one after another, so you can see what happened on the 10th ball.\n\nBut think: what happens if a new seat must be added in the middle of the train? Every seat after it would have to be shifted back one by one. That is the weakness of an array — inserting in the middle is costly.`,
      `ट्रेन में सीट नंबर देखो: S1, S2, S3... तुम्हें अपनी सीट ढूँढने के लिए पूरी बोगी नहीं घूमनी पड़ती — नंबर देखकर सीधे जाते हो। यही ऐरे का इंडेक्स है। अंडे की ट्रे भी ऐरे है: 12 खाने, एक लाइन में, हर खाने में एक अंडा।\n\nस्कूल में रोल नंबर भी यही करता है। टीचर को "रोल नंबर 7" बुलाना हो, तो वह 7 बच्चों को गिनकर नहीं ढूँढती — रजिस्टर में सीधे 7वीं लाइन देखती है। और क्रिकेट में स्कोरकार्ड: हर बॉल का स्कोर एक के बाद एक लिखा जाता है, तो पता चल जाता है कि 10वीं बॉल पर क्या हुआ था।\n\nलेकिन सोचो, ट्रेन के बीच में एक नई सीट डालनी हो तो क्या होगा? उसके बाद वाली सारी सीटों को एक-एक करके पीछे खिसकना पड़ेगा। यही ऐरे की कमज़ोरी है — बीच में डालना महँगा है।`,
    ),
    sec(
      H_STEP[0], H_STEP[1], H_STEP[2],
      `Maan lo class ke 5 students ke marks hain: marks = [78, 85, 92, 64, 88]. Index yaad rakho: 78 index 0 par hai, 85 index 1 par, 92 index 2 par, 64 index 3 par, 88 index 4 par. marks[2] likhte hi 92 mil jaata hai — computer ko poori list nahi padhni padti. Aakhri element ke liye marks[-1] likho, 88 milega. Length nikalne ke liye len(marks) — 5.\n\nAb beech mein ek naya mark daalna hai: 95 ko index 2 par daalo. Python mein marks.insert(2, 95) likho. Andar kya hota hai? 92, 64 aur 88 ek-ek karke ek jagah peeche khisakte hain, phir 95 apni jagah leta hai. List ban jaati hai [78, 85, 95, 92, 64, 88]. Daalna ek kaam tha, lekin khisakna 3 elements ka pada — isiliye beech mein insert karna O(n) hai.\n\nDoosra worked example: sabse bada mark dhoondhna. Pehle element ko "ab tak ka sabse bada" maan lo, phir baaki sab se compare karo. 78 se shuru karo, 85 bada hai to wahi naya champion, 92 usse bhi bada, 64 aur 88 chhote. Aakhir mein 92 jeetta hai. Ye ek loop hai, O(n). Neeche dono kaam code mein dikhaye gaye hain.`,
      `Suppose the marks of 5 students in a class are: marks = [78, 85, 92, 64, 88]. Remember the indexes: 78 is at index 0, 85 at index 1, 92 at index 2, 64 at index 3, 88 at index 4. Writing marks[2] gives 92 at once — the computer does not need to read the whole list. For the last element write marks[-1] and you get 88. To get the length, use len(marks) — 5.\n\nNow a new mark must be added in the middle: put 95 at index 2. In Python write marks.insert(2, 95). What happens inside? 92, 64 and 88 shift back one place each, and then 95 takes its place. The list becomes [78, 85, 95, 92, 64, 88]. Adding was one job, but 3 elements had to shift — that is why inserting in the middle is O(n).\n\nA second worked example: finding the biggest mark. Take the first element as the "biggest so far", then compare it with all the rest. Start with 78, 85 is bigger so it becomes the new champion, 92 is bigger still, 64 and 88 are smaller. In the end 92 wins. That is one loop, O(n). Both jobs are shown in the code below.`,
      `मान लो क्लास के 5 छात्रों के नंबर हैं: marks = [78, 85, 92, 64, 88]। इंडेक्स याद रखो: 78 इंडेक्स 0 पर है, 85 इंडेक्स 1 पर, 92 इंडेक्स 2 पर, 64 इंडेक्स 3 पर, 88 इंडेक्स 4 पर। marks[2] लिखते ही 92 मिल जाता है — कंप्यूटर को पूरी लिस्ट नहीं पढ़नी पड़ती। आखिरी एलिमेंट के लिए marks[-1] लिखो, 88 मिलेगा। लंबाई निकालने के लिए len(marks) — 5।\n\nअब बीच में एक नया नंबर डालना है: 95 को इंडेक्स 2 पर डालो। पाइथन में marks.insert(2, 95) लिखो। अंदर क्या होता है? 92, 64 और 88 एक-एक करके एक जगह पीछे खिसकते हैं, फिर 95 अपनी जगह लेता है। लिस्ट बन जाती है [78, 85, 95, 92, 64, 88]। डालना एक काम था, लेकिन खिसकना 3 एलिमेंट का पड़ा — इसीलिए बीच में डालना O(n) है।\n\nदूसरा हल किया हुआ उदाहरण: सबसे बड़ा नंबर ढूँढना। पहले एलिमेंट को "अब तक का सबसे बड़ा" मान लो, फिर बाकी सबसे तुलना करो। 78 से शुरू करो, 85 बड़ा है तो वही नया चैंपियन, 92 उससे भी बड़ा, 64 और 88 छोटे। आखिर में 92 जीतता है। यह एक लूप है, O(n)। नीचे दोनों काम कोड में दिखाए गए हैं।`,
      {
        title: t('Index se nikalna, beech mein daalna, sabse bada dhoondhna', 'Taking by index, inserting in the middle, finding the biggest', 'इंडेक्स से निकालना, बीच में डालना, सबसे बड़ा ढूँढना'),
        language: 'python',
        code: `marks = [78, 85, 92, 64, 88]
print(marks[2])        # index 2 -> 92, ek step mein
print(marks[-1])       # aakhri element -> 88

marks.insert(2, 95)    # 95 ko index 2 par daalo
print(marks)           # [78, 85, 95, 92, 64, 88]

# Sabse bada mark dhoondho
biggest = marks[0]
for m in marks:
    if m > biggest:
        biggest = m
print("Sabse bada:", biggest)`,
        output: '92\n88\n[78, 85, 95, 92, 64, 88]\nSabse bada: 95',
        note: t(
          'Dhyaan do: insert ke baad sabse bada 95 ban gaya, 92 nahi. Code ko line-by-line padho, output ko guess karke phir run karo.',
          'Notice: after the insert, the biggest is 95, not 92. Read the code line by line, guess the output first, and then run it.',
          'ध्यान दो: इन्सर्ट के बाद सबसे बड़ा 95 बन गया, 92 नहीं। कोड को लाइन-बाय-लाइन पढ़ो, आउटपुट को पहले अंदाज़ा लगाकर फिर रन करो।',
        ),
      },
    ),
    sec(
      H_MIST[0], H_MIST[1], H_MIST[2],
      `Sabse aam galti hai off-by-one error: list mein 5 elements hon to valid index 0 se 4 tak hain, 5 nahi. marks[5] likhte hi IndexError aayega. Aisa isliye hota hai kyunki dimaag "5 cheezein" ko "index 5" samajh leta hai, lekin computer 0 se ginna shuru karta hai. Aakhri element ke liye hamesha len(marks) - 1 ya marks[-1] use karo.\n\nDoosri galti: ye sochna ki beech mein daalna free hai. Naye log insert ko append jaisa samajhte hain. Append aakhir mein daalta hai — O(1). Insert beech mein daalta hai — O(n), kyunki shift karna padta hai. Agar tumhe baar-baar beech mein daalna hai, to array galat choice hai.\n\nTeesri galti: list ko copy kiye bina badal dena. a = marks likhne se nayi list nahi banti — dono ek hi list ki taraf ishara karte hain. a mein badlaav karoge to marks bhi badal jayega. Asli copy ke liye marks.copy() ya marks[:] likho.`,
      `The most common mistake is the off-by-one error: if a list has 5 elements, the valid indexes are 0 to 4, not 5. Writing marks[5] gives an IndexError at once. This happens because the mind reads "5 things" as "index 5", but the computer starts counting from 0. For the last element, always use len(marks) - 1 or marks[-1].\n\nThe second mistake is thinking that inserting in the middle is free. New learners treat insert like append. Append adds at the end — O(1). Insert adds in the middle — O(n), because shifting is needed. If you must insert in the middle again and again, an array is the wrong choice.\n\nThe third mistake is changing a list without really copying it. Writing a = marks does not make a new list — both names point at the same list. If you change a, marks changes too. For a real copy, write marks.copy() or marks[:].`,
      `सबसे आम गलती है ऑफ-बाय-वन एरर: लिस्ट में 5 एलिमेंट हों तो वैलिड इंडेक्स 0 से 4 तक हैं, 5 नहीं। marks[5] लिखते ही IndexError आएगा। ऐसा इसलिए होता है क्योंकि दिमाग "5 चीज़ें" को "इंडेक्स 5" समझ लेता है, लेकिन कंप्यूटर 0 से गिनना शुरू करता है। आखिरी एलिमेंट के लिए हमेशा len(marks) - 1 या marks[-1] इस्तेमाल करो।\n\nदूसरी गलती: यह सोचना कि बीच में डालना मुफ़्त है। नए लोग इन्सर्ट को अपेंड जैसा समझते हैं। अपेंड आखिर में डालता है — O(1)। इन्सर्ट बीच में डालता है — O(n), क्योंकि शिफ़्ट करना पड़ता है। अगर तुम्हें बार-बार बीच में डालना है, तो ऐरे गलत चुनाव है।\n\nतीसरी गलती: लिस्ट को कॉपी किए बिना बदल देना। a = marks लिखने से नई लिस्ट नहीं बनती — दोनों एक ही लिस्ट की तरफ़ इशारा करते हैं। a में बदलाव करोगे तो marks भी बदल जाएगा। असली कॉपी के लिए marks.copy() या marks[:] लिखो।`,
    ),
    sec(
      H_EDGE[0], H_EDGE[1], H_EDGE[2],
      `Khali list par marks[0] likho to IndexError aayega — isliye pehle check karo ki list khali to nahi: if marks: likhna safe hai. Ek element wali list par insert aur delete dono simple hain, lekin marks[1] phir bhi galat hai.\n\nDuplicate values par dhyaan do: [85, 92, 85] mein 85 do baar hai. marks.index(85) sirf pehla index dega — 0. Doosra 85 dhoondhne ke liye loop likhna padega. Aur negative index mein marks[-6] 5 elements wali list par error dega, kyunki -5 se -1 hi valid hain.\n\nBade index par loop chalate waqt range(len(marks)) likhna safe hai, range(len(marks) + 1) nahi. Wo +1 hi off-by-one ka sabse aam roop hai.`,
      `On an empty list, writing marks[0] gives an IndexError — so first check whether the list is empty: writing if marks: is safe. On a list with one element, insert and delete are both simple, but marks[1] is still wrong.\n\nWatch out for duplicate values: in [85, 92, 85], 85 appears twice. marks.index(85) gives only the first index — 0. To find the second 85 you must write a loop. And with a negative index, marks[-6] gives an error on a list of 5 elements, because only -5 to -1 are valid.\n\nWhen you run a loop over a big index, writing range(len(marks)) is safe, but range(len(marks) + 1) is not. That +1 is the most common form of the off-by-one error.`,
      `खाली लिस्ट पर marks[0] लिखो तो IndexError आएगा — इसलिए पहले जाँचो कि लिस्ट खाली तो नहीं: if marks: लिखना सुरक्षित है। एक एलिमेंट वाली लिस्ट पर इन्सर्ट और डिलीट दोनों सरल हैं, लेकिन marks[1] फिर भी गलत है।\n\nडुप्लीकेट वैल्यू पर ध्यान दो: [85, 92, 85] में 85 दो बार है। marks.index(85) सिर्फ़ पहला इंडेक्स देगा — 0। दूसरा 85 ढूँढने के लिए लूप लिखना पड़ेगा। और नेगेटिव इंडेक्स में marks[-6] 5 एलिमेंट वाली लिस्ट पर एरर देगा, क्योंकि -5 से -1 ही वैलिड हैं।\n\nबड़े इंडेक्स पर लूप चलाते समय range(len(marks)) लिखना सुरक्षित है, range(len(marks) + 1) नहीं। वह +1 ही ऑफ-बाय-वन का सबसे आम रूप है।`,
    ),
    sec(
      H_WHATIF[0], H_WHATIF[1], H_WHATIF[2],
      `Agar tumhe har baar aakhir mein hi daalna hai aur index se nikaalna hai, to array perfect hai — O(1) dono kaam. Lekin agar tumhe har baar shuru mein daalna hai, to har baar poori list khisakni padegi. 10 lakh elements hon to ek insert mein 10 lakh shift — bahut mehenga.\n\nAgar size pehle se pata nahi aur baar-baar badhta hai, to Python list khud hi jagah badha leti hai, lekin uske peeche bhi kabhi-kabhi poori list ko nayi jagah copy karna padta hai. Isliye bade data par "array vs linked list" ka sawaal phir se aata hai — agle article mein wahi dekhenge.`,
      `If you only ever add at the end and take out by index, an array is perfect — both jobs are O(1). But if you must add at the start every time, the whole list has to shift every time. With 10 lakh elements, one insert means 10 lakh shifts — very costly.\n\nIf the size is not known in advance and keeps growing, a Python list expands its space on its own, but behind that the whole list sometimes has to be copied to a new place. That is why the question "array or linked list" comes up again on big data — we will look at exactly that in the next article.`,
      `अगर तुम्हें हर बार आखिर में ही डालना है और इंडेक्स से निकालना है, तो ऐरे परफ़ेक्ट है — O(1) दोनों काम। लेकिन अगर तुम्हें हर बार शुरू में डालना है, तो हर बार पूरी लिस्ट खिसकनी पड़ेगी। 10 लाख एलिमेंट हों तो एक इन्सर्ट में 10 लाख शिफ़्ट — बहुत महँगा।\n\nअगर आकार पहले से पता नहीं और बार-बार बढ़ता है, तो पाइथन लिस्ट खुद ही जगह बढ़ा लेती है, लेकिन उसके पीछे भी कभी-कभी पूरी लिस्ट को नई जगह कॉपी करना पड़ता है। इसीलिए बड़े डेटा पर "ऐरे बनाम लिंक्ड लिस्ट" का सवाल फिर से आता है — अगले आर्टिकल में वही देखेंगे।`,
    ),
    sec(
      H_SUM[0], H_SUM[1], H_SUM[2],
      `Array mein elements lagatar rakhe hote hain, index 0 se shuru hota hai. Index se nikaalna O(1) hai, aakhir mein daalna O(1) hai, beech mein daalna ya nikaalna O(n) hai kyunki shift karna padta hai. Sabse aam galti off-by-one hai — 5 elements hon to aakhri index 4 hai. Jab kaam index se nikaalne ka ho, array best hai; jab baar-baar beech mein daalna ho, to koi aur structure chahiye.`,
      `In an array the elements sit in continuous space, and the index starts at 0. Taking out by index is O(1), adding at the end is O(1), and adding or removing in the middle is O(n) because shifting is needed. The most common mistake is off-by-one — with 5 elements the last index is 4. When the job is taking things out by index, an array is best; when you must keep adding in the middle, you need a different structure.`,
      `ऐरे में एलिमेंट लगातार रखे होते हैं, इंडेक्स 0 से शुरू होता है। इंडेक्स से निकालना O(1) है, आखिर में डालना O(1) है, बीच में डालना या निकालना O(n) है क्योंकि शिफ़्ट करना पड़ता है। सबसे आम गलती ऑफ-बाय-वन है — 5 एलिमेंट हों तो आखिरी इंडेक्स 4 है। जब काम इंडेक्स से निकालने का हो, ऐरे बेस्ट है; जब बार-बार बीच में डालना हो, तो कोई और स्ट्रक्चर चाहिए।`,
    ),
  ],
  diagram: {
    kind: 'boxes',
    title: t('Array — index aur cost ek nazar mein', 'Array — index and cost at a glance', 'ऐरे — इंडेक्स और लागत एक नज़र में'),
    nodes: [
      { t: t('index 0, 1, 2...', 'index 0, 1, 2...', 'इंडेक्स 0, 1, 2...'), s: t('seedha jump', 'jump straight to it', 'सीधे जाओ') },
      { t: t('nikaalna O(1)', 'taking out is O(1)', 'निकालना O(1)'), s: t('marks[2]', 'marks[2]', 'marks[2]') },
      { t: t('aakhir mein daalna O(1)', 'adding at the end is O(1)', 'आखिर में डालना O(1)'), s: t('append', 'append', 'अपेंड') },
      { t: t('beech mein daalna O(n)', 'adding in the middle is O(n)', 'बीच में डालना O(n)'), s: t('shift karna padta hai', 'shifting is needed', 'शिफ़्ट करना पड़ता है') },
    ],
  },
  codeExamples: [
    {
      title: t('Aakhri element aur off-by-one se bachna', 'The last element and avoiding off-by-one', 'आखिरी एलिमेंट और ऑफ-बाय-वन से बचना'),
      language: 'python',
      code: `marks = [78, 85, 92, 64, 88]
print(marks[len(marks) - 1])   # aakhri element, safe tareeka
print(marks[-1])               # wahi kaam, chhota tareeka
print(marks[0] + marks[-1])    # pehla + aakhri = 166`,
      output: '88\n88\n166',
      note: t(
        'len(marks) - 1 hamesha aakhri index hota hai. Ye pattern har list par kaam karta hai, size kuch bhi ho.',
        'len(marks) - 1 is always the last index. This pattern works on every list, whatever its size.',
        'len(marks) - 1 हमेशा आखिरी इंडेक्स होता है। यह पैटर्न हर लिस्ट पर काम करता है, आकार कुछ भी हो।',
      ),
    },
  ],
  mcqs: [
    {
      q: t(
        'marks = [78, 85, 92, 64, 88] hai. marks[3] kya dega?',
        'marks = [78, 85, 92, 64, 88]. What will marks[3] give?',
        'marks = [78, 85, 92, 64, 88] है। marks[3] क्या देगा?',
      ),
      opts: [
        t('78', '78', '78'),
        t('85', '85', '85'),
        t('92', '92', '92'),
        t('64', '64', '64'),
      ],
      ans: 3,
      expl: t(
        'Index 0 se shuru hota hai: 0 -> 78, 1 -> 85, 2 -> 92, 3 -> 64. Isliye marks[3] = 64.',
        'The index starts at 0: 0 gives 78, 1 gives 85, 2 gives 92, 3 gives 64. So marks[3] is 64.',
        'इंडेक्स 0 से शुरू होता है: 0 -> 78, 1 -> 85, 2 -> 92, 3 -> 64। इसलिए marks[3] = 64।',
      ),
    },
    {
      q: t(
        '1000 elements wale array mein beech mein ek element daalne ka cost kya hoga?',
        'What is the cost of adding one element in the middle of an array with 1000 elements?',
        '1000 एलिमेंट वाले ऐरे में बीच में एक एलिमेंट डालने का खर्च क्या होगा?',
      ),
      opts: [
        t('O(1), kyunki sirf ek daalna hai', 'O(1), because only one thing is added', 'O(1), क्योंकि सिर्फ़ एक डालना है'),
        t('O(log n), aadha kaat kar', 'O(log n), by cutting in half', 'O(log n), आधा काटकर'),
        t('O(n), kyunki baad wale elements khisakne padenge', 'O(n), because the later elements must shift', 'O(n), क्योंकि बाद वाले एलिमेंट खिसकने पड़ेंगे'),
        t('O(n²), kyunki poora array dobara banta hai', 'O(n²), because the whole array is built again', 'O(n²), क्योंकि पूरा ऐरे दोबारा बनता है'),
      ],
      ans: 2,
      expl: t(
        'Insert ke baad wale lagbhag saare elements ko ek jagah khisakna padta hai, isliye cost data ke size par depend karti hai — O(n).',
        'Nearly all the elements after the insert point must shift one place, so the cost depends on the size of the data — O(n).',
        'इन्सर्ट के बाद वाले लगभग सारे एलिमेंट को एक जगह खिसकना पड़ता है, इसलिए लागत डेटा के आकार पर निर्भर करती है — O(n)।',
      ),
    },
    {
      q: t(
        'Neeche wale code mein bug kya hai?\nfor i in range(len(marks) + 1):\n    print(marks[i])',
        'What is the bug in this code?\nfor i in range(len(marks) + 1):\n    print(marks[i])',
        'नीचे वाले कोड में बग क्या है?\nfor i in range(len(marks) + 1):\n    print(marks[i])',
      ),
      opts: [
        t('Loop ek baar kam chalega', 'The loop runs one time too few', 'लूप एक बार कम चलेगा'),
        t('Aakhri baar marks[len(marks)] par IndexError aayega', 'On the last run, marks[len(marks)] gives an IndexError', 'आखिरी बार marks[len(marks)] पर IndexError आएगा'),
        t('Pehla element chhoot jayega', 'The first element will be skipped', 'पहला एलिमेंट छूट जाएगा'),
        t('Koi bug nahi hai', 'There is no bug', 'कोई बग नहीं है'),
      ],
      ans: 1,
      expl: t(
        'Valid index 0 se len(marks) - 1 tak hain. range mein +1 likhne se loop len(marks) tak jaata hai, jo valid index nahi hai.',
        'The valid indexes run from 0 to len(marks) - 1. The +1 in the range makes the loop reach len(marks), which is not a valid index.',
        'वैलिड इंडेक्स 0 से len(marks) - 1 तक हैं। रेंज में +1 लिखने से लूप len(marks) तक जाता है, जो वैलिड इंडेक्स नहीं है।',
      ),
    },
    {
      q: t(
        'Tumhe baar-baar kisi bhi index ka element nikaalna hai, aur kabhi beech mein daalna nahi hai. Kaun sa structure best hai?',
        'You must keep taking out elements by index, and never insert in the middle. Which structure is best?',
        'तुम्हें बार-बार किसी भी इंडेक्स का एलिमेंट निकालना है, और कभी बीच में डालना नहीं है। कौन सा स्ट्रक्चर बेस्ट है?',
      ),
      opts: [
        t('Array, kyunki index se nikaalna O(1) hai', 'Array, because taking out by index is O(1)', 'ऐरे, क्योंकि इंडेक्स से निकालना O(1) है'),
        t('Linked list, kyunki wo flexible hoti hai', 'Linked list, because it is flexible', 'लिंक्ड लिस्ट, क्योंकि वह लचीली होती है'),
        t('Stack, kyunki wo tez hoti hai', 'Stack, because it is fast', 'स्टैक, क्योंकि वह तेज़ होती है'),
        t('Koi bhi, sab barabar hain', 'Any of them, they are all equal', 'कोई भी, सब बराबर हैं'),
      ],
      ans: 0,
      expl: t(
        'Index se seedha jump array ki sabse badi taakat hai. Beech mein daalna yahan hota hi nahi, to uski kamzori kabhi saamne nahi aayegi.',
        'Jumping straight to an index is the greatest strength of an array. Inserting in the middle never happens here, so that weakness never shows up.',
        'इंडेक्स से सीधे जाना ऐरे की सबसे बड़ी ताकत है। बीच में डालना यहाँ होता ही नहीं, तो उसकी कमज़ोरी कभी सामने नहीं आएगी।',
      ),
    },
  ],
  practice: {
    title: t('List ulta karo — bina reverse() ke', 'Reverse a list — without reverse()', 'लिस्ट उल्टी करो — बिना reverse() के'),
    task: t(
      'Ek function reverse_list(nums) likho jo list ko ulta karke nayi list return kare, bina reverse() ya slicing ([::-1]) ke. Starter mein nums = [10, 20, 30, 40, 50] hai. Done tab maanenge jab output [50, 40, 30, 20, 10] print ho aur original list same rahe. Hint: aakhir se shuru karke ek-ek element nayi list mein append karo.',
      'Write a function reverse_list(nums) that returns a new list in reverse order, without using reverse() or slicing ([::-1]). The starter has nums = [10, 20, 30, 40, 50]. You are done when it prints [50, 40, 30, 20, 10] and the original list stays the same. Hint: start from the end and append one element at a time to a new list.',
      'एक फ़ंक्शन reverse_list(nums) लिखो जो लिस्ट को उल्टी करके नई लिस्ट लौटाए, बिना reverse() या स्लाइसिंग ([::-1]) के। स्टार्टर में nums = [10, 20, 30, 40, 50] है। तब पूरा मानेंगे जब आउटपुट [50, 40, 30, 20, 10] प्रिंट हो और मूल लिस्ट वैसी ही रहे। संकेत: आखिर से शुरू करके एक-एक एलिमेंट नई लिस्ट में अपेंड करो।',
    ),
    language: 'python',
    starter: `def reverse_list(nums):
    result = []
    for i in range(len(nums) - 1, -1, -1):
        result.append(nums[i])
    return result

nums = [10, 20, 30, 40, 50]
print(reverse_list(nums))
print(nums)`,
    expected: '[50, 40, 30, 20, 10]\n[10, 20, 30, 40, 50]',
  },
  readMinutes: 9,
};

const dsaLinkedLists: Article = {
  id: 'dsa-linked-lists',
  subjectId: 'dsa',
  title: t(
    'Linked lists — dibbe jo ek-doosre ko pakde hain',
    'Linked lists — boxes holding on to each other',
    'लिंक्ड लिस्ट — डिब्बे जो एक-दूसरे को पकड़े हैं',
  ),
  summary: t(
    'Linked list mein har element ek node hota hai — data plus agle node ka pata. Shuru mein daalna O(1) hai, lekin kisi bhi index tak pahunchne ke liye ek-ek node se hokar jaana padta hai, isliye wahan pahunchna O(n) hai.',
    'In a linked list, every element is a node — data plus the address of the next node. Adding at the start is O(1), but reaching any index means walking through the nodes one by one, so reaching there is O(n).',
    'लिंक्ड लिस्ट में हर एलिमेंट एक नोड होता है — डेटा और अगले नोड का पता। शुरू में डालना O(1) है, लेकिन किसी भी इंडेक्स तक पहुँचने के लिए एक-एक नोड से होकर जाना पड़ता है, इसलिए वहाँ पहुँचना O(n) है।',
  ),
  sections: [
    sec(
      H_WHAT[0], H_WHAT[1], H_WHAT[2],
      `Linked list mein data lagatar nahi rakha hota. Har element ek node hai — ek chhota dabba jisme do cheezein hain: apna data, aur agle node ka pata (next). Pehle node ko head kehte hain. Aakhri node ka next khali hota hai — Python mein None. List ko padhne ke liye head se shuru karo, phir har node ka next pakad kar aage badho, jab tak None na mil jaye.\n\nIska sabse bada fayda hai: beech mein ya shuru mein daalna sasta hai. Naya node banao, uska next purane head ki taraf kar do, aur head ko naye node par le aao — bas, ho gaya. Kisi ko khisakna nahi padta, kyunki nodes lagatar rakhe hi nahi hote. Yehi wajah hai ki linked list ko "flexible" kehte hain.\n\nLekin iski keemat bhi hai: koi index nahi hota. 5th element chahiye to head se chal kar 5 nodes paar karne padenge. Array mein tum seedha jump karte the, yahan tumhe chalna padta hai. Isliye linked list mein kisi jagah tak pahunchna O(n) hai.`,
      `In a linked list, the data is not kept in a continuous line. Every element is a node — a small box holding two things: its own data, and the address of the next node (next). The first node is called the head. The next of the last node is empty — None in Python. To read the list, start at the head, then follow the next of each node until you reach None.\n\nIts biggest advantage is this: adding in the middle or at the start is cheap. Make a new node, point its next at the old head, and move the head to the new node — done. Nobody has to shift, because the nodes are not stored in a line at all. That is why a linked list is called "flexible".\n\nBut there is a price: there is no index. If you want the 5th element, you must walk past 5 nodes from the head. In an array you jumped straight to it; here you must walk. So reaching a place in a linked list is O(n).`,
      `लिंक्ड लिस्ट में डेटा लगातार नहीं रखा होता। हर एलिमेंट एक नोड है — एक छोटा डिब्बा जिसमें दो चीज़ें हैं: अपना डेटा, और अगले नोड का पता (next)। पहले नोड को हेड कहते हैं। आखिरी नोड का next खाली होता है — पाइथन में None। लिस्ट को पढ़ने के लिए हेड से शुरू करो, फिर हर नोड का next पकड़कर आगे बढ़ो, जब तक None न मिल जाए।\n\nइसका सबसे बड़ा फ़ायदा है: बीच में या शुरू में डालना सस्ता है। नया नोड बनाओ, उसका next पुराने हेड की तरफ़ कर दो, और हेड को नए नोड पर ले आओ — बस, हो गया। किसी को खिसकना नहीं पड़ता, क्योंकि नोड लगातार रखे ही नहीं होते। यही वजह है कि लिंक्ड लिस्ट को "लचीली" कहते हैं।\n\nलेकिन इसकी कीमत भी है: कोई इंडेक्स नहीं होता। 5वाँ एलिमेंट चाहिए तो हेड से चलकर 5 नोड पार करने पड़ेंगे। ऐरे में तुम सीधे जाते थे, यहाँ तुम्हें चलना पड़ता है। इसलिए लिंक्ड लिस्ट में किसी जगह तक पहुँचना O(n) है।`,
    ),
    sec(
      H_REAL[0], H_REAL[1], H_REAL[2],
      `Train ke dibbe dekho: har dibba agle dibbe se juda hota hai. Engine se shuru karo to ek-ek dibba paar karke aakhir tak pahunchte ho. Beech mein naya dibba jodna ho to sirf do jod kholne padte hain — poori train ko khisakna nahi padta. Yehi linked list hai.\n\nKhazane ki khoj wala khel yaad karo: pehle kagaz par likha hota hai ki doosra kagaz kahan hai, doosre par teesre ka pata. Tum seedha teesre kagaz par nahi ja sakte — pehle do se hokar jaana padega. Har kagaz ek node hai.\n\nMusic app ki playlist bhi aisi hi hoti hai: har gaane ke baad agla gaana bajta hai. Beech mein gaana daalna ho to sirf us jagah ka link badalna padta hai, poori playlist dobara nahi banti.`,
      `Look at the coaches of a train: every coach is joined to the next one. Starting from the engine, you pass one coach at a time to reach the end. To add a new coach in the middle, you only open two joints — the whole train does not have to shift. That is exactly a linked list.\n\nRemember the treasure-hunt game: the first paper tells you where the second paper is, and the second tells you about the third. You cannot jump straight to the third paper — you must pass through the first two. Every paper is a node.\n\nThe playlist in a music app works the same way: after each song, the next song plays. To add a song in the middle, only the link at that place changes — the whole playlist is not built again.`,
      `ट्रेन के डिब्बे देखो: हर डिब्बा अगले डिब्बे से जुड़ा होता है। इंजन से शुरू करो तो एक-एक डिब्बा पार करके आखिर तक पहुँचते हो। बीच में नया डिब्बा जोड़ना हो तो सिर्फ़ दो जोड़ खोलने पड़ते हैं — पूरी ट्रेन को खिसकना नहीं पड़ता। यही लिंक्ड लिस्ट है।\n\nखज़ाने की खोज वाला खेल याद करो: पहले कागज़ पर लिखा होता है कि दूसरा कागज़ कहाँ है, दूसरे पर तीसरे का पता। तुम सीधे तीसरे कागज़ पर नहीं जा सकते — पहले दो से होकर जाना पड़ेगा। हर कागज़ एक नोड है।\n\nम्यूज़िक ऐप की प्लेलिस्ट भी ऐसी ही होती है: हर गाने के बाद अगला गाना बजता है। बीच में गाना डालना हो तो सिर्फ़ उस जगह का लिंक बदलना पड़ता है, पूरी प्लेलिस्ट दोबारा नहीं बनती।`,
    ),
    sec(
      H_STEP[0], H_STEP[1], H_STEP[2],
      `Chalo ek list banate hain: 10 -> 20 -> 30. Pehle ek Node class banao jisme data aur next ho. Node(10) banao — uska next None hai. Node(20) banao, aur pehle node ka next iski taraf kar do. Phir Node(30) banao, doosre ka next iski taraf. Head pehle node par hai. List padhne ke liye current = head se shuru karo: current ka data print karo, phir current = current.next. Jab current None ho jaye, ruk jao. Ye traversal hai — O(n).\n\nAb shuru mein 5 daalna hai. Naya node Node(5) banao. Uska next head ki taraf kar do — matlab 10 wale node ki taraf. Phir head ko naye node par le aao. List ban gayi: 5 -> 10 -> 20 -> 30. Sirf do links badle, koi shift nahi. Yehi O(1) insert hai.\n\nDoosra worked example: beech se 20 ko nikaalna. 10 wale node tak chalo, phir uska next seedha 30 ki taraf kar do — 20 ka link toot gaya, wo list se bahar. Dhyaan do: 20 ko nikaalne ke liye pehle us tak pahunchna pada, jo O(n) hai. Pahunchna mehenga, nikaalna sasta — ye linked list ka rule hai.`,
      `Let us build a list: 10 -> 20 -> 30. First make a Node class with data and next. Make Node(10) — its next is None. Make Node(20), and point the first node's next at it. Then make Node(30) and point the second node's next at it. The head sits on the first node. To read the list, start with current = head: print the data of current, then set current = current.next. When current becomes None, stop. That is traversal — O(n).\n\nNow add 5 at the start. Make a new node Node(5). Point its next at the head — that is, at the node holding 10. Then move the head to the new node. The list is now: 5 -> 10 -> 20 -> 30. Only two links changed, nothing shifted. That is an O(1) insert.\n\nA second worked example: removing 20 from the middle. Walk to the node holding 10, then point its next straight at 30 — the link to 20 breaks and 20 falls out of the list. Notice: to remove 20 you first had to reach it, which is O(n). Reaching is costly, removing is cheap — that is the rule of a linked list.`,
      `चलो एक लिस्ट बनाते हैं: 10 -> 20 -> 30। पहले एक Node क्लास बनाओ जिसमें data और next हो। Node(10) बनाओ — उसका next None है। Node(20) बनाओ, और पहले नोड का next इसकी तरफ़ कर दो। फिर Node(30) बनाओ, दूसरे का next इसकी तरफ़। हेड पहले नोड पर है। लिस्ट पढ़ने के लिए current = head से शुरू करो: current का डेटा प्रिंट करो, फिर current = current.next। जब current None हो जाए, रुक जाओ। यह ट्रैवर्सल है — O(n)।\n\nअब शुरू में 5 डालना है। नया नोड Node(5) बनाओ। उसका next हेड की तरफ़ कर दो — मतलब 10 वाले नोड की तरफ़। फिर हेड को नए नोड पर ले आओ। लिस्ट बन गई: 5 -> 10 -> 20 -> 30। सिर्फ़ दो लिंक बदले, कोई शिफ़्ट नहीं। यही O(1) इन्सर्ट है।\n\nदूसरा हल किया हुआ उदाहरण: बीच से 20 को निकालना। 10 वाले नोड तक चलो, फिर उसका next सीधे 30 की तरफ़ कर दो — 20 का लिंक टूट गया, वह लिस्ट से बाहर। ध्यान दो: 20 को निकालने के लिए पहले उस तक पहुँचना पड़ा, जो O(n) है। पहुँचना महँगा, निकालना सस्ता — यह लिंक्ड लिस्ट का नियम है।`,
      {
        title: t('Node banao, list jodo, shuru mein daalo', 'Make a node, join the list, add at the start', 'नोड बनाओ, लिस्ट जोड़ो, शुरू में डालो'),
        language: 'python',
        code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# 10 -> 20 -> 30 banao
head = Node(10)
head.next = Node(20)
head.next.next = Node(30)

# Shuru mein 5 daalo: naya node, uska next purana head
new_node = Node(5)
new_node.next = head
head = new_node

# List ko padho: head se None tak chalo
current = head
while current is not None:
    print(current.data, end=" -> ")
    current = current.next
print("None")`,
        output: '5 -> 10 -> 20 -> 30 -> None',
        note: t(
          'Har line ko dhyaan se padho: new_node.next = head purani list ko pakadta hai, aur head = new_node shuruaat ko badal deta hai. Order ulta karoge to list kho jayegi.',
          'Read every line with care: new_node.next = head holds on to the old list, and head = new_node moves the start. If you swap the order, the list is lost.',
          'हर लाइन को ध्यान से पढ़ो: new_node.next = head पुरानी लिस्ट को पकड़ता है, और head = new_node शुरुआत को बदल देता है। ऑर्डर उल्टा करोगे तो लिस्ट खो जाएगी।',
        ),
      },
    ),
    sec(
      H_MIST[0], H_MIST[1], H_MIST[2],
      `Sabse badi galti: head ko kho dena. Agar tum head = head.next bina purane head ko kahin save kiye likh do, to pehla node hamesha ke liye kho jayega — uska pata kisi ke paas nahi rahega. Isliye pehle naya node banao, link jodo, phir head badlo. Order bahut matter karta hai.\n\nDoosri galti: current.next ko update karna bhool jaana. Insert karte waqt sirf naya node bana lena kaafi nahi — uska next set karna zaroori hai. Agar next None reh gaya, to baaki list kat jayegi aur sirf naya node dikhega.\n\nTeesri galti: None par .next maangna. Jab current None ho jaye aur tum current.next likho, to error aayega. Loop mein hamesha while current is not None likho, aur current = current.next se pehle check karo.`,
      `The biggest mistake is losing the head. If you write head = head.next without saving the old head anywhere, the first node is lost for ever — nobody holds its address any more. So first make the new node, join the link, and only then move the head. The order matters a lot.\n\nThe second mistake is forgetting to update current.next. When you insert, just making the new node is not enough — its next must be set. If next stays None, the rest of the list is cut off and only the new node shows.\n\nThe third mistake is asking for .next on None. When current becomes None and you write current.next, you get an error. In a loop always write while current is not None, and check before writing current = current.next.`,
      `सबसे बड़ी गलती: हेड को खो देना। अगर तुम head = head.next बिना पुराने हेड को कहीं सेव किए लिख दो, तो पहला नोड हमेशा के लिए खो जाएगा — उसका पता किसी के पास नहीं रहेगा। इसलिए पहले नया नोड बनाओ, लिंक जोड़ो, फिर हेड बदलो। ऑर्डर बहुत मायने रखता है।\n\nदूसरी गलती: current.next को अपडेट करना भूल जाना। इन्सर्ट करते समय सिर्फ़ नया नोड बना लेना काफ़ी नहीं — उसका next सेट करना ज़रूरी है। अगर next None रह गया, तो बाकी लिस्ट कट जाएगी और सिर्फ़ नया नोड दिखेगा।\n\nतीसरी गलती: None पर .next माँगना। जब current None हो जाए और तुम current.next लिखो, तो एरर आएगा। लूप में हमेशा while current is not None लिखो, और current = current.next से पहले जाँच करो।`,
    ),
    sec(
      H_EDGE[0], H_EDGE[1], H_EDGE[2],
      `Khali list mein head None hota hai. Us par insert karna simple hai — naya node hi head ban jaata hai. Lekin khali list par delete karne ki koshish karoge to kuch nahi milega, isliye pehle if head is None check karo.\n\nEk node wali list mein delete karne par head None ho jaata hai — list khali. Aakhri node ko delete karne ke liye usse pehle wale node tak jaana padta hai, aur uska next None karna padta hai. Aur agar galti se kisi node ka next khud ki taraf kar diya, to loop hamesha chalta rahega — infinite loop. Aisa tab hota hai jab link galat jud jaye.`,
      `In an empty list the head is None. Inserting there is simple — the new node itself becomes the head. But if you try to delete from an empty list you will find nothing, so first check if head is None.\n\nIn a list with one node, deleting it makes the head None — the list is empty. To delete the last node you must walk to the node before it and set its next to None. And if you point a node's next at itself by mistake, the loop runs for ever — an infinite loop. That happens when a link is joined wrongly.`,
      `खाली लिस्ट में हेड None होता है। उस पर इन्सर्ट करना सरल है — नया नोड ही हेड बन जाता है। लेकिन खाली लिस्ट पर डिलीट करने की कोशिश करोगे तो कुछ नहीं मिलेगा, इसलिए पहले if head is None जाँचो।\n\nएक नोड वाली लिस्ट में डिलीट करने पर हेड None हो जाता है — लिस्ट खाली। आखिरी नोड को डिलीट करने के लिए उससे पहले वाले नोड तक जाना पड़ता है, और उसका next None करना पड़ता है। और अगर गलती से किसी नोड का next खुद की तरफ़ कर दिया, तो लूप हमेशा चलता रहेगा — इनफ़िनाइट लूप। ऐसा तब होता है जब लिंक गलत जुड़ जाए।`,
    ),
    sec(
      H_WHATIF[0], H_WHATIF[1], H_WHATIF[2],
      `Agar tumhe baar-baar shuru mein daalna hai aur kabhi index se nikaalna nahi hai, to linked list array se behtar hai — har insert O(1), koi shift nahi. Lekin agar tumhe baar-baar 100th element chahiye, to linked list har baar 100 nodes chalegi, jabki array seedha jump karega.\n\nAur agar tumhe dono taraf se chalna ho — aage bhi, peeche bhi — to doubly linked list hoti hai, jisme har node mein prev bhi hota hai. Usme peeche jaana bhi easy ho jaata hai, lekin har node mein ek extra pata rakhna padta hai. Har structure ek trade-off hai: kuch paane ke liye kuch dena padta hai.`,
      `If you must keep adding at the start and never take things out by index, a linked list is better than an array — every insert is O(1) and nothing shifts. But if you keep needing the 100th element, a linked list walks 100 nodes every time, while an array jumps straight to it.\n\nAnd if you need to walk in both directions — forward and backward — there is a doubly linked list, where every node also holds a prev. Walking backward becomes easy there, but every node must store one extra address. Every structure is a trade-off: to gain something you must give something.`,
      `अगर तुम्हें बार-बार शुरू में डालना है और कभी इंडेक्स से निकालना नहीं है, तो लिंक्ड लिस्ट ऐरे से बेहतर है — हर इन्सर्ट O(1), कोई शिफ़्ट नहीं। लेकिन अगर तुम्हें बार-बार 100वाँ एलिमेंट चाहिए, तो लिंक्ड लिस्ट हर बार 100 नोड चलेगी, जबकि ऐरे सीधे जाएगा।\n\nऔर अगर तुम्हें दोनों तरफ़ से चलना हो — आगे भी, पीछे भी — तो डबली लिंक्ड लिस्ट होती है, जिसमें हर नोड में prev भी होता है। उसमें पीछे जाना भी आसान हो जाता है, लेकिन हर नोड में एक अतिरिक्त पता रखना पड़ता है। हर स्ट्रक्चर एक ट्रेड-ऑफ़ है: कुछ पाने के लिए कुछ देना पड़ता है।`,
    ),
    sec(
      H_SUM[0], H_SUM[1], H_SUM[2],
      `Linked list mein har node mein data aur agle node ka pata hota hai. Shuru mein daalna O(1) hai, kisi jagah tak pahunchna O(n) hai, aur traversal head se None tak chalta hai. Head ko kabhi bina save kiye mat badlo, aur None par .next mat maango. Array index se tez hai, linked list insert mein tez hai — kaam dekh kar chunna hai, aadat se nahi.`,
      `In a linked list every node holds data and the address of the next node. Adding at the start is O(1), reaching a place is O(n), and traversal runs from the head to None. Never move the head without saving it first, and never ask for .next on None. An array is fast by index, a linked list is fast at inserting — choose by the job, not by habit.`,
      `लिंक्ड लिस्ट में हर नोड में डेटा और अगले नोड का पता होता है। शुरू में डालना O(1) है, किसी जगह तक पहुँचना O(n) है, और ट्रैवर्सल हेड से None तक चलता है। हेड को कभी बिना सेव किए मत बदलो, और None पर .next मत माँगो। ऐरे इंडेक्स से तेज़ है, लिंक्ड लिस्ट इन्सर्ट में तेज़ है — काम देखकर चुनना है, आदत से नहीं।`,
    ),
  ],
  diagram: {
    kind: 'flow',
    title: t('Linked list — head se None tak', 'Linked list — from head to None', 'लिंक्ड लिस्ट — हेड से None तक'),
    nodes: [
      { t: t('head', 'head', 'हेड'), s: t('shuruaat', 'the start', 'शुरुआत') },
      { t: t('Node(10)', 'Node(10)', 'नोड(10)'), s: t('next -> 20', 'next points to 20', 'next -> 20') },
      { t: t('Node(20)', 'Node(20)', 'नोड(20)'), s: t('next -> 30', 'next points to 30', 'next -> 30') },
      { t: t('Node(30)', 'Node(30)', 'नोड(30)'), s: t('next -> None', 'next points to None', 'next -> None') },
    ],
  },
  codeExamples: [
    {
      title: t('List mein kitne nodes hain — ginna', 'How many nodes are in the list — counting them', 'लिस्ट में कितने नोड हैं — गिनना'),
      language: 'python',
      code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

head = Node(10)
head.next = Node(20)
head.next.next = Node(30)

count = 0
current = head
while current is not None:
    count += 1
    current = current.next
print("Nodes:", count)`,
      output: 'Nodes: 3',
      note: t(
        'Yehi traversal pattern har kaam mein use hota hai — dhoondhna, ginna, print karna. Sirf loop ke andar ka kaam badalta hai.',
        'This same traversal pattern is used in every job — finding, counting, printing. Only the work inside the loop changes.',
        'यही ट्रैवर्सल पैटर्न हर काम में इस्तेमाल होता है — ढूँढना, गिनना, प्रिंट करना। सिर्फ़ लूप के अंदर का काम बदलता है।',
      ),
    },
  ],
  mcqs: [
    {
      q: t(
        'Linked list mein shuru mein naya node daalne ke liye kaun se steps sahi order mein hain?',
        'What are the correct steps, in order, to add a new node at the start of a linked list?',
        'लिंक्ड लिस्ट में शुरू में नया नोड डालने के लिए कौन से कदम सही क्रम में हैं?',
      ),
      opts: [
        t('Head badlo, phir naya node banao', 'Move the head first, then make the new node', 'हेड बदलो, फिर नया नोड बनाओ'),
        t('Naya node banao, uska next head ki taraf karo, phir head badlo', 'Make the new node, point its next at the head, then move the head', 'नया नोड बनाओ, उसका next हेड की तरफ़ करो, फिर हेड बदलो'),
        t('Naya node banao, head ko None karo', 'Make the new node, then set the head to None', 'नया नोड बनाओ, हेड को None करो'),
        t('Seedha head ko naye node se replace kar do', 'Just replace the head with the new node directly', 'सीधे हेड को नए नोड से बदल दो'),
      ],
      ans: 1,
      expl: t(
        'Pehle naya node banao aur uska next purane head se jodo — nahi to purani list ka pata kho jayega. Aakhir mein head badlo.',
        'First make the new node and join its next to the old head — otherwise the address of the old list is lost. Move the head at the end.',
        'पहले नया नोड बनाओ और उसका next पुराने हेड से जोड़ो — नहीं तो पुरानी लिस्ट का पता खो जाएगा। आखिर में हेड बदलो।',
      ),
    },
    {
      q: t(
        '100 nodes wali linked list mein 50th node tak pahunchne ka cost kya hai?',
        'What is the cost of reaching the 50th node in a linked list of 100 nodes?',
        '100 नोड वाली लिंक्ड लिस्ट में 50वें नोड तक पहुँचने का खर्च क्या है?',
      ),
      opts: [
        t('O(1), seedha jump', 'O(1), a straight jump', 'O(1), सीधा जंप'),
        t('O(log n), aadha kaat kar', 'O(log n), by cutting in half', 'O(log n), आधा काटकर'),
        t('O(n), ek-ek node se hokar jaana padta hai', 'O(n), you must walk through the nodes one by one', 'O(n), एक-एक नोड से होकर जाना पड़ता है'),
        t('O(n²), do loop chahiye', 'O(n²), two loops are needed', 'O(n²), दो लूप चाहिए'),
      ],
      ans: 2,
      expl: t(
        'Linked list mein koi index nahi hota. Head se shuru karke 50 nodes paar karne padenge, isliye cost O(n) hai.',
        'A linked list has no index. You must start at the head and pass 50 nodes, so the cost is O(n).',
        'लिंक्ड लिस्ट में कोई इंडेक्स नहीं होता। हेड से शुरू करके 50 नोड पार करने पड़ेंगे, इसलिए लागत O(n) है।',
      ),
    },
    {
      q: t(
        'Neeche wale code mein bug kya hai?\ncurrent = head\nwhile current.next is not None:\n    print(current.data)\n    current = current.next',
        'What is the bug in this code?\ncurrent = head\nwhile current.next is not None:\n    print(current.data)\n    current = current.next',
        'नीचे वाले कोड में बग क्या है?\ncurrent = head\nwhile current.next is not None:\n    print(current.data)\n    current = current.next',
      ),
      opts: [
        t('Aakhri node print nahi hoga', 'The last node will not be printed', 'आखिरी नोड प्रिंट नहीं होगा'),
        t('Pehla node print nahi hoga', 'The first node will not be printed', 'पहला नोड प्रिंट नहीं होगा'),
        t('Infinite loop chalega', 'It will run an infinite loop', 'इनफ़िनाइट लूप चलेगा'),
        t('Koi bug nahi hai', 'There is no bug', 'कोई बग नहीं है'),
      ],
      ans: 0,
      expl: t(
        'Loop tab ruk jaata hai jab current aakhri node par ho, kyunki uska next None hai. Isliye aakhri node ka data kabhi print nahi hota.',
        'The loop stops when current reaches the last node, because its next is None. So the data of the last node is never printed.',
        'लूप तब रुक जाता है जब current आखिरी नोड पर हो, क्योंकि उसका next None है। इसलिए आखिरी नोड का डेटा कभी प्रिंट नहीं होता।',
      ),
    },
    {
      q: t(
        'Tumhe baar-baar list ke shuru mein daalna hai aur kabhi index se nikaalna nahi hai. Kaun sa structure chunoge?',
        'You must keep adding at the start of the list and never take things out by index. Which structure will you choose?',
        'तुम्हें बार-बार लिस्ट के शुरू में डालना है और कभी इंडेक्स से निकालना नहीं है। कौन सा स्ट्रक्चर चुनोगे?',
      ),
      opts: [
        t('Array, kyunki wo simple hai', 'Array, because it is simple', 'ऐरे, क्योंकि वह सरल है'),
        t('Linked list, kyunki shuru mein daalna O(1) hai', 'Linked list, because adding at the start is O(1)', 'लिंक्ड लिस्ट, क्योंकि शुरू में डालना O(1) है'),
        t('Stack, kyunki wo hamesha tez hoti hai', 'Stack, because it is always fast', 'स्टैक, क्योंकि वह हमेशा तेज़ होती है'),
        t('Koi bhi, dono barabar hain', 'Any of them, both are equal', 'कोई भी, दोनों बराबर हैं'),
      ],
      ans: 1,
      expl: t(
        'Shuru mein daalna linked list mein O(1) hai aur kuch khisakna nahi padta. Array mein har baar poori list khisakti.',
        'Adding at the start is O(1) in a linked list and nothing shifts. In an array the whole list would shift every time.',
        'शुरू में डालना लिंक्ड लिस्ट में O(1) है और कुछ खिसकना नहीं पड़ता। ऐरे में हर बार पूरी लिस्ट खिसकती।',
      ),
    },
  ],
  practice: {
    title: t('Linked list mein value dhoondho', 'Find a value in a linked list', 'लिंक्ड लिस्ट में वैल्यू ढूँढो'),
    task: t(
      'Ek function find_value(head, target) likho jo True return kare agar target list mein ho, warna False. Starter mein list 10 -> 20 -> 30 bani hui hai. Done tab maanenge jab find_value(head, 20) True aur find_value(head, 99) False print ho. Hint: head se shuru karo, har node ka data check karo, phir next par jao.',
      'Write a function find_value(head, target) that returns True if the target is in the list, and False otherwise. The starter already builds the list 10 -> 20 -> 30. You are done when find_value(head, 20) prints True and find_value(head, 99) prints False. Hint: start at the head, check the data of every node, then move to next.',
      'एक फ़ंक्शन find_value(head, target) लिखो जो True लौटाए अगर target लिस्ट में हो, वरना False। स्टार्टर में लिस्ट 10 -> 20 -> 30 बनी हुई है। तब पूरा मानेंगे जब find_value(head, 20) True और find_value(head, 99) False प्रिंट हो। संकेत: हेड से शुरू करो, हर नोड का डेटा जाँचो, फिर next पर जाओ।',
    ),
    language: 'python',
    starter: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

head = Node(10)
head.next = Node(20)
head.next.next = Node(30)

def find_value(head, target):
    current = head
    while current is not None:
        if current.data == target:
            return True
        current = current.next
    return False

print(find_value(head, 20))
print(find_value(head, 99))`,
    expected: 'True\nFalse',
  },
  readMinutes: 10,
};

const dsaStacksQueues: Article = {
  id: 'dsa-stacks-queues',
  subjectId: 'dsa',
  title: t(
    'Stacks aur queues — pehle aaya ya aakhir mein aaya',
    'Stacks and queues — first in or last in',
    'स्टैक और क्यू — पहले आया या आखिर में आया',
  ),
  summary: t(
    'Stack mein jo aakhir mein daala, wo pehle nikalta hai (LIFO) — jaise bartan ka dher. Queue mein jo pehle aaya, wo pehle nikalta hai (FIFO) — jaise ticket ki line. Dono ke saare kaam O(1) hote hain, bas galat jagah se nikaalna mana hai.',
    'In a stack, the thing added last comes out first (LIFO) — like a pile of plates. In a queue, whoever came first goes out first (FIFO) — like a ticket line. Every job on both is O(1); only taking from the wrong end is not allowed.',
    'स्टैक में जो आखिर में डाला, वह पहले निकलता है (LIFO) — जैसे बर्तन का ढेर। क्यू में जो पहले आया, वह पहले निकलता है (FIFO) — जैसे टिकट की लाइन। दोनों के सारे काम O(1) होते हैं, बस गलत जगह से निकालना मना है।',
  ),
  sections: [
    sec(
      H_WHAT[0], H_WHAT[1], H_WHAT[2],
      `Stack ek aisi list hai jisme daalna aur nikaalna sirf ek hi taraf se hota hai — upar se. Jo cheez aakhir mein daali, wo pehle nikalti hai. Ise LIFO kehte hain: Last In, First Out. Upar wali cheez ko top kehte hain. Push ka matlab upar daalna, pop ka matlab upar se nikaalna.\n\nQueue iska ulta hai: daalna peeche se, nikaalna aage se. Jo pehle aaya, wo pehle jayega. Ise FIFO kehte hain: First In, First Out. Aage wale ko front aur peeche wale ko rear kehte hain. Enqueue ka matlab peeche jodna, dequeue ka matlab aage se nikaalna.\n\nDono mein ek hi rule hai: beech mein se kuch nahi nikaal sakte. Tum stack ke beech wale bartan ko nahi nikaal sakte bina upar wale hataye. Ye pabandi hi inki taakat hai — isse computer ko hamesha pata hota hai ki agla kaam kaun sa hai, isliye push, pop, enqueue aur dequeue sab O(1) hote hain.`,
      `A stack is a list where adding and removing happen from only one side — the top. The thing added last comes out first. This is called LIFO: Last In, First Out. The thing on top is called the top. Push means adding on top, pop means removing from the top.\n\nA queue is the opposite: add at the back, remove from the front. Whoever came first goes out first. This is called FIFO: First In, First Out. The front is called the front and the back is called the rear. Enqueue means joining at the back, dequeue means removing from the front.\n\nBoth share one rule: nothing can be taken from the middle. You cannot take a plate from the middle of a stack without lifting the ones above it. That restriction is their strength — the computer always knows what the next job is, so push, pop, enqueue and dequeue are all O(1).`,
      `स्टैक एक ऐसी लिस्ट है जिसमें डालना और निकालना सिर्फ़ एक ही तरफ़ से होता है — ऊपर से। जो चीज़ आखिर में डाली, वह पहले निकलती है। इसे LIFO कहते हैं: Last In, First Out। ऊपर वाली चीज़ को टॉप कहते हैं। पुश का मतलब ऊपर डालना, पॉप का मतलब ऊपर से निकालना।\n\nक्यू इसका उल्टा है: डालना पीछे से, निकालना आगे से। जो पहले आया, वह पहले जाएगा। इसे FIFO कहते हैं: First In, First Out। आगे वाले को फ्रंट और पीछे वाले को रियर कहते हैं। एनक्यू का मतलब पीछे जोड़ना, डीक्यू का मतलब आगे से निकालना।\n\nदोनों में एक ही नियम है: बीच में से कुछ नहीं निकाल सकते। तुम स्टैक के बीच वाले बर्तन को नहीं निकाल सकते बिना ऊपर वाले हटाए। यह पाबंदी ही इनकी ताकत है — इससे कंप्यूटर को हमेशा पता होता है कि अगला काम कौन सा है, इसलिए पुश, पॉप, एनक्यू और डीक्यू सब O(1) होते हैं।`,
    ),
    sec(
      H_REAL[0], H_REAL[1], H_REAL[2],
      `Rasoi mein bartan ka dher stack hai: jo bartan aakhir mein dhoya, wo upar hai, aur khana paroste waqt wahi pehle uthta hai. Neeche wala bartan tab tak nahi milega jab tak upar wale na hat jayein. Browser ka back button bhi stack hai: tum jis page par aakhir mein gaye, back dabate hi wahi pehle band hota hai.\n\nRailway ticket ki line queue hai: jo pehle aaya, uska ticket pehle banta hai. Printer bhi queue hai: jo document pehle bheja, wo pehle chhapta hai. Aur jab tumhare phone mein ek ke baad ek notification aati hai, to wo bhi line mein lag kar ek-ek karke dikhti hai.\n\nUndo button bhi stack hai: Ctrl+Z dabao to aakhri badlaav pehle wapas hota hai. Agar tumne pehle ek line likhi aur phir ek word mitaya, to pehla undo word wapas layega, line nahi.`,
      `The pile of plates in a kitchen is a stack: the plate washed last sits on top, and when food is served, that one is lifted first. The plate at the bottom cannot be reached until the ones above are moved. The back button of a browser is also a stack: the page you visited last is the first to close when you press back.\n\nThe ticket line at a railway station is a queue: whoever came first gets a ticket first. A printer is also a queue: the document sent first prints first. And when notifications arrive on your phone one after another, they also stand in a line and appear one by one.\n\nThe undo button is a stack too: press Ctrl+Z and the last change is undone first. If you first wrote a line and then deleted a word, the first undo brings back the word, not the line.`,
      `रसोई में बर्तन का ढेर स्टैक है: जो बर्तन आखिर में धोया, वह ऊपर है, और खाना परोसते समय वही पहले उठता है। नीचे वाला बर्तन तब तक नहीं मिलेगा जब तक ऊपर वाले न हट जाएँ। ब्राउज़र का बैक बटन भी स्टैक है: तुम जिस पेज पर आखिर में गए, बैक दबाते ही वही पहले बंद होता है।\n\nरेलवे टिकट की लाइन क्यू है: जो पहले आया, उसका टिकट पहले बनता है। प्रिंटर भी क्यू है: जो डॉक्यूमेंट पहले भेजा, वह पहले छपता है। और जब तुम्हारे फ़ोन में एक के बाद एक नोटिफ़िकेशन आती है, तो वह भी लाइन में लगकर एक-एक करके दिखती है।\n\nअंडू बटन भी स्टैक है: Ctrl+Z दबाओ तो आखिरी बदलाव पहले वापस होता है। अगर तुमने पहले एक लाइन लिखी और फिर एक शब्द मिटाया, तो पहला अंडू शब्द वापस लाएगा, लाइन नहीं।`,
    ),
    sec(
      H_STEP[0], H_STEP[1], H_STEP[2],
      `Pehla worked example: brackets check karna. Expression hai "{[()]}" — kya ye balanced hai? Stack khali se shuru karo. '{' mile to push karo. '[' mile to push karo. '(' mile to push karo. Ab ')' mila — stack ke top par '(' hai, match karta hai, to pop karo. ']' mila — top par '[' hai, match, pop karo. '}' mila — top par '{' hai, match, pop karo. Aakhir mein stack khali hai, matlab sab balanced hain.\n\nAb galat example lo: "{[(])}". '{' push, '[' push, '(' push. Phir ']' mila, lekin top par '(' hai — match nahi karta. Bas, yahin ruk jao: expression galat hai. Stack ne ye kaam O(n) mein kiya, ek hi baar string padh kar. Har opening bracket push hota hai, har closing bracket top se match karta hai.\n\nDoosra worked example: queue. Ticket line mein pehle Rahul aaya, phir Priya, phir Amit. Enqueue teenon ko: [Rahul, Priya, Amit]. Dequeue karo to Rahul pehle nikalta hai, phir Priya. Python mein list se pop(0) karoge to har baar poori list khisakti hai — O(n). Isliye queue ke liye collections.deque use karo, jisme popleft() O(1) hota hai.`,
      `First worked example: checking brackets. The expression is "{[()]}" — is it balanced? Start with an empty stack. Seeing '{', push it. Seeing '[', push it. Seeing '(', push it. Now ')' appears — the top of the stack holds '(', which matches, so pop it. ']' appears — the top holds '[', which matches, so pop it. '}' appears — the top holds '{', which matches, so pop it. In the end the stack is empty, which means everything is balanced.\n\nNow take a wrong example: "{[(])}". Push '{', push '[', push '('. Then ']' appears, but the top holds '(' — no match. Stop right there: the expression is wrong. The stack did this job in O(n), reading the string just once. Every opening bracket is pushed, and every closing bracket matches with the top.\n\nSecond worked example: a queue. In a ticket line, Rahul comes first, then Priya, then Amit. Enqueue all three: [Rahul, Priya, Amit]. Dequeue, and Rahul comes out first, then Priya. In Python, if you use pop(0) on a list, the whole list shifts every time — O(n). So for a queue use collections.deque, where popleft() is O(1).`,
      `पहला हल किया हुआ उदाहरण: ब्रैकेट जाँचना। एक्सप्रेशन है "{[()]}" — क्या यह संतुलित है? खाली स्टैक से शुरू करो। '{' मिले तो पुश करो। '[' मिले तो पुश करो। '(' मिले तो पुश करो। अब ')' मिला — स्टैक के टॉप पर '(' है, मेल खाता है, तो पॉप करो। ']' मिला — टॉप पर '[' है, मेल, पॉप करो। '}' मिला — टॉप पर '{' है, मेल, पॉप करो। आखिर में स्टैक खाली है, मतलब सब संतुलित हैं।\n\nअब गलत उदाहरण लो: "{[(])}"। '{' पुश, '[' पुश, '(' पुश। फिर ']' मिला, लेकिन टॉप पर '(' है — मेल नहीं खाता। बस, यहीं रुक जाओ: एक्सप्रेशन गलत है। स्टैक ने यह काम O(n) में किया, एक ही बार स्ट्रिंग पढ़कर। हर खुला ब्रैकेट पुश होता है, हर बंद ब्रैकेट टॉप से मेल खाता है।\n\nदूसरा हल किया हुआ उदाहरण: क्यू। टिकट लाइन में पहले राहुल आया, फिर प्रिया, फिर अमित। तीनों को एनक्यू करो: [राहुल, प्रिया, अमित]। डीक्यू करो तो राहुल पहले निकलता है, फिर प्रिया। पाइथन में लिस्ट से pop(0) करोगे तो हर बार पूरी लिस्ट खिसकती है — O(n)। इसलिए क्यू के लिए collections.deque इस्तेमाल करो, जिसमें popleft() O(1) होता है।`,
      {
        title: t('Stack se brackets check karo', 'Check brackets with a stack', 'स्टैक से ब्रैकेट जाँचो'),
        language: 'python',
        code: `def is_balanced(expr):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    for ch in expr:
        if ch in '([{':
            stack.append(ch)          # opening bracket -> push
        elif ch in ')]}':
            if not stack or stack[-1] != pairs[ch]:
                return False          # top match nahi karta
            stack.pop()               # match hua -> pop
    return len(stack) == 0            # khali stack = balanced

print(is_balanced("{[()]}"))
print(is_balanced("{[(])}"))`,
        output: 'True\nFalse',
        note: t(
          'stack[-1] top ko bina hataye dekhta hai. Pehle check karo ki stack khali to nahi — nahi to IndexError aayega.',
          'stack[-1] looks at the top without removing it. First check that the stack is not empty — otherwise you get an IndexError.',
          'stack[-1] टॉप को बिना हटाए देखता है। पहले जाँचो कि स्टैक खाली तो नहीं — नहीं तो IndexError आएगा।',
        ),
      },
    ),
    sec(
      H_MIST[0], H_MIST[1], H_MIST[2],
      `Sabse aam galti: khali stack se pop karna. Python mein [].pop() likhte hi IndexError aayega. Isliye pop se pehle hamesha check karo: if stack:. Ye galti isliye hoti hai kyunki hum maan lete hain ki stack mein kuch hoga, lekin user ka data hamesha waisa nahi hota jaisa hum sochte hain.\n\nDoosri galti: queue ke liye list ka pop(0) use karna. Kaam to ho jayega, lekin har dequeue mein poori list khisakti hai — O(n). Chhoti list par pata nahi chalega, lekin 10 lakh items par program ruk-ruk kar chalega. Queue ke liye deque use karo, yehi sahi tool hai.\n\nTeesri galti: stack aur queue ko ulta kar dena. Undo stack hai, ticket line queue hai. Agar tum ticket line ko stack bana do, to jo aakhir mein aaya uska kaam pehle hoga — log gussa ho jayenge. Structure chunne se pehle hamesha poochho: pehle aane wale ka kaam pehle hona chahiye, ya aakhir mein aane wale ka?`,
      `The most common mistake is popping from an empty stack. In Python, writing [].pop() gives an IndexError at once. So always check before popping: if stack:. This mistake happens because we assume the stack holds something, but the data from a user is not always what we expect.\n\nThe second mistake is using pop(0) on a list for a queue. The job gets done, but every dequeue shifts the whole list — O(n). On a small list you will not notice, but with 10 lakh items the program will crawl. For a queue use deque; that is the right tool.\n\nThe third mistake is mixing up a stack and a queue. Undo is a stack, a ticket line is a queue. If you make a ticket line into a stack, whoever came last is served first — people will be angry. Before choosing a structure, always ask: should the one who came first be served first, or the one who came last?`,
      `सबसे आम गलती: खाली स्टैक से पॉप करना। पाइथन में [].pop() लिखते ही IndexError आएगा। इसलिए पॉप से पहले हमेशा जाँचो: if stack:। यह गलती इसलिए होती है क्योंकि हम मान लेते हैं कि स्टैक में कुछ होगा, लेकिन यूज़र का डेटा हमेशा वैसा नहीं होता जैसा हम सोचते हैं।\n\nदूसरी गलती: क्यू के लिए लिस्ट का pop(0) इस्तेमाल करना। काम तो हो जाएगा, लेकिन हर डीक्यू में पूरी लिस्ट खिसकती है — O(n)। छोटी लिस्ट पर पता नहीं चलेगा, लेकिन 10 लाख आइटम पर प्रोग्राम रुक-रुककर चलेगा। क्यू के लिए deque इस्तेमाल करो, यही सही टूल है।\n\nतीसरी गलती: स्टैक और क्यू को उल्टा कर देना। अंडू स्टैक है, टिकट लाइन क्यू है। अगर तुम टिकट लाइन को स्टैक बना दो, तो जो आखिर में आया उसका काम पहले होगा — लोग गुस्सा हो जाएँगे। स्ट्रक्चर चुनने से पहले हमेशा पूछो: पहले आने वाले का काम पहले होना चाहिए, या आखिर में आने वाले का?`,
    ),
    sec(
      H_EDGE[0], H_EDGE[1], H_EDGE[2],
      `Sirf opening brackets wali string, jaise "(((", par stack mein 3 items reh jayenge aur aakhir mein len(stack) == 0 False dega — sahi jawab, unbalanced. Sirf closing brackets, jaise ")))", par pehla hi bracket stack khali hone par milega — isliye not stack wala check zaroori hai, nahi to crash.\n\nKhali string "" balanced hai — kuch khula hi nahi, to kuch band karne ki zaroorat nahi. Queue mein bhi khali queue se dequeue karne par deque popleft() IndexError dega, isliye pehle if queue: check karo.\n\nEk element wali stack par push aur pop dono O(1) hain, lekin pop ke baad stack khali ho jaati hai — doosra pop bina check ke error dega.`,
      `For a string with only opening brackets, like "(((", 3 items stay in the stack and len(stack) == 0 gives False at the end — the right answer, unbalanced. For only closing brackets, like ")))", the very first bracket meets an empty stack — that is why the not stack check is needed, or the program crashes.\n\nAn empty string "" is balanced — nothing was opened, so nothing needs closing. In a queue too, calling popleft() on an empty deque gives an IndexError, so first check if queue:.\n\nOn a stack with one element, push and pop are both O(1), but after the pop the stack is empty — a second pop without a check gives an error.`,
      `सिर्फ़ खुले ब्रैकेट वाली स्ट्रिंग, जैसे "(((", पर स्टैक में 3 आइटम रह जाएँगे और आखिर में len(stack) == 0 False देगा — सही जवाब, असंतुलित। सिर्फ़ बंद ब्रैकेट, जैसे ")))", पर पहला ही ब्रैकेट खाली स्टैक से मिलेगा — इसलिए not stack वाली जाँच ज़रूरी है, नहीं तो क्रैश।\n\nखाली स्ट्रिंग "" संतुलित है — कुछ खुला ही नहीं, तो कुछ बंद करने की ज़रूरत नहीं। क्यू में भी खाली क्यू से डीक्यू करने पर deque popleft() IndexError देगा, इसलिए पहले if queue: जाँचो।\n\nएक एलिमेंट वाले स्टैक पर पुश और पॉप दोनों O(1) हैं, लेकिन पॉप के बाद स्टैक खाली हो जाती है — दूसरा पॉप बिना जाँच के एरर देगा।`,
    ),
    sec(
      H_WHATIF[0], H_WHATIF[1], H_WHATIF[2],
      `Agar tumhe order ulta karna hai — jaise list ko ulta print karna — to stack best hai: sab push karo, phir pop karte jao, ulta order mil jayega. Lekin agar tumhe order same rakhna hai aur bas line mein kaam karna hai, to queue best hai.\n\nAgar stack ki jagah queue use kar li, to brackets wala program bhi galat ho jayega: queue pehle wala bracket pehle nikaalega, jabki match ke liye aakhri wala chahiye. Structure badalte hi answer badal jaata hai — isliye pehle order samjho, phir structure chuno.`,
      `If you need to turn the order around — like printing a list in reverse — a stack is best: push everything, then keep popping, and you get the reverse order. But if you need to keep the same order and just work through a line, a queue is best.\n\nIf you use a queue where a stack belongs, even the brackets program goes wrong: a queue takes out the first bracket first, but a match needs the last one. Changing the structure changes the answer — so first understand the order, then choose the structure.`,
      `अगर तुम्हें ऑर्डर उल्टा करना है — जैसे लिस्ट को उल्टा प्रिंट करना — तो स्टैक बेस्ट है: सब पुश करो, फिर पॉप करते जाओ, उल्टा ऑर्डर मिल जाएगा। लेकिन अगर तुम्हें ऑर्डर वही रखना है और बस लाइन में काम करना है, तो क्यू बेस्ट है।\n\nअगर स्टैक की जगह क्यू इस्तेमाल कर ली, तो ब्रैकेट वाला प्रोग्राम भी गलत हो जाएगा: क्यू पहला वाला ब्रैकेट पहले निकालेगा, जबकि मैच के लिए आखिरी वाला चाहिए। स्ट्रक्चर बदलते ही जवाब बदल जाता है — इसलिए पहले ऑर्डर समझो, फिर स्ट्रक्चर चुनो।`,
    ),
    sec(
      H_SUM[0], H_SUM[1], H_SUM[2],
      `Stack LIFO hai — push upar se, pop upar se. Queue FIFO hai — enqueue peeche se, dequeue aage se. Dono ke kaam O(1) hain. Brackets check karna stack ka sabse mashhoor kaam hai. Khali stack se pop mat karo, aur queue ke liye list ka pop(0) mat use karo — deque use karo. Order dekh kar structure chuno: ulta chahiye to stack, same chahiye to queue.`,
      `A stack is LIFO — push from the top, pop from the top. A queue is FIFO — enqueue at the back, dequeue from the front. The jobs on both are O(1). Checking brackets is the most famous job of a stack. Never pop from an empty stack, and never use pop(0) on a list for a queue — use deque. Choose by the order you need: reversed means a stack, the same order means a queue.`,
      `स्टैक LIFO है — पुश ऊपर से, पॉप ऊपर से। क्यू FIFO है — एनक्यू पीछे से, डीक्यू आगे से। दोनों के काम O(1) हैं। ब्रैकेट जाँचना स्टैक का सबसे मशहूर काम है। खाली स्टैक से पॉप मत करो, और क्यू के लिए लिस्ट का pop(0) मत इस्तेमाल करो — deque इस्तेमाल करो। ऑर्डर देखकर स्ट्रक्चर चुनो: उल्टा चाहिए तो स्टैक, वही चाहिए तो क्यू।`,
    ),
  ],
  diagram: {
    kind: 'boxes',
    title: t('Stack vs queue — ek nazar mein', 'Stack vs queue — at a glance', 'स्टैक बनाम क्यू — एक नज़र में'),
    nodes: [
      { t: t('Stack — LIFO', 'Stack — LIFO', 'स्टैक — LIFO'), s: t('aakhir mein aaya, pehle gaya', 'last in, first out', 'आखिर में आया, पहले गया') },
      { t: t('push / pop — upar se', 'push / pop — from the top', 'पुश / पॉप — ऊपर से'), s: t('bartan ka dher', 'a pile of plates', 'बर्तन का ढेर') },
      { t: t('Queue — FIFO', 'Queue — FIFO', 'क्यू — FIFO'), s: t('pehle aaya, pehle gaya', 'first in, first out', 'पहले आया, पहले गया') },
      { t: t('enqueue / dequeue', 'enqueue / dequeue', 'एनक्यू / डीक्यू'), s: t('ticket ki line', 'a ticket line', 'टिकट की लाइन') },
    ],
  },
  codeExamples: [
    {
      title: t('Queue — deque se sahi tareeka', 'Queue — the right way with deque', 'क्यू — deque से सही तरीका'),
      language: 'python',
      code: `from collections import deque

line = deque()
line.append("Rahul")   # enqueue: peeche jodo
line.append("Priya")
line.append("Amit")
print(line.popleft())  # dequeue: aage se nikalo -> Rahul
print(line.popleft())  # -> Priya
print(list(line))      # bacha: ['Amit']`,
      output: "Rahul\nPriya\n['Amit']",
      note: t(
        'deque ka popleft() O(1) hai. List ka pop(0) bhi wahi kaam karta hai, lekin O(n) mein — badi line par farak dikhega.',
        'The popleft() of deque is O(1). The pop(0) of a list does the same job, but in O(n) — on a long line the difference shows.',
        'deque का popleft() O(1) है। लिस्ट का pop(0) भी वही काम करता है, लेकिन O(n) में — बड़ी लाइन पर फ़र्क दिखेगा।',
      ),
    },
  ],
  mcqs: [
    {
      q: t(
        'Stack mein 10, 20, 30 is order mein push kiye. Pehla pop kya dega?',
        '10, 20 and 30 are pushed onto a stack in that order. What will the first pop give?',
        'स्टैक में 10, 20, 30 इस क्रम में पुश किए। पहला पॉप क्या देगा?',
      ),
      opts: [
        t('10', '10', '10'),
        t('20', '20', '20'),
        t('30', '30', '30'),
        t('Kuch nahi, error aayega', 'Nothing, it will give an error', 'कुछ नहीं, एरर आएगा'),
      ],
      ans: 2,
      expl: t(
        'Stack LIFO hai — jo aakhir mein daala, wo pehle nikalta hai. 30 aakhir mein push hua, to wahi pehle niklega.',
        'A stack is LIFO — the thing added last comes out first. 30 was pushed last, so it comes out first.',
        'स्टैक LIFO है — जो आखिर में डाला, वह पहले निकलता है। 30 आखिर में पुश हुआ, तो वही पहले निकलेगा।',
      ),
    },
    {
      q: t(
        'Queue mein 10, 20, 30 is order mein enqueue kiye. Pehla dequeue kya dega?',
        '10, 20 and 30 are enqueued into a queue in that order. What will the first dequeue give?',
        'क्यू में 10, 20, 30 इस क्रम में एनक्यू किए। पहला डीक्यू क्या देगा?',
      ),
      opts: [
        t('10', '10', '10'),
        t('20', '20', '20'),
        t('30', '30', '30'),
        t('Kuch nahi, error aayega', 'Nothing, it will give an error', 'कुछ नहीं, एरर आएगा'),
      ],
      ans: 0,
      expl: t(
        'Queue FIFO hai — jo pehle aaya, wo pehle jayega. 10 pehle aaya, to wahi pehle niklega.',
        'A queue is FIFO — whoever came first goes out first. 10 came first, so it comes out first.',
        'क्यू FIFO है — जो पहले आया, वह पहले जाएगा। 10 पहले आया, तो वही पहले निकलेगा।',
      ),
    },
    {
      q: t(
        'is_balanced("([)]") ka jawab kya hoga, aur kyun?',
        'What will is_balanced("([)]") return, and why?',
        'is_balanced("([)]") का जवाब क्या होगा, और क्यों?',
      ),
      opts: [
        t('True, kyunki saare brackets hain', 'True, because all the brackets are there', 'True, क्योंकि सारे ब्रैकेट हैं'),
        t('False, kyunki ] ka match top par ( hai, [ nahi', 'False, because ] meets ( on the top, not [', 'False, क्योंकि ] का मैच टॉप पर ( है, [ नहीं'),
        t('True, kyunki count barabar hai', 'True, because the count is equal', 'True, क्योंकि गिनती बराबर है'),
        t('Error aayega', 'It will give an error', 'एरर आएगा'),
      ],
      ans: 1,
      expl: t(
        'Jab ] aata hai, to stack ke top par ( hota hai. ] ko [ chahiye, isliye match fail hota hai aur function False deta hai.',
        'When ] arrives, the top of the stack holds (. The ] needs a [, so the match fails and the function returns False.',
        'जब ] आता है, तो स्टैक के टॉप पर ( होता है। ] को [ चाहिए, इसलिए मैच फ़ेल होता है और फ़ंक्शन False देता है।',
      ),
    },
    {
      q: t(
        'Badi queue ke liye list ka pop(0) kyun galat choice hai?',
        'Why is pop(0) on a list a wrong choice for a big queue?',
        'बड़ी क्यू के लिए लिस्ट का pop(0) क्यों गलत चुनाव है?',
      ),
      opts: [
        t('Wo kaam hi nahi karta', 'It does not work at all', 'वह काम ही नहीं करता'),
        t('Har baar poori list khisakti hai — O(n)', 'Every time, the whole list shifts — O(n)', 'हर बार पूरी लिस्ट खिसकती है — O(n)'),
        t('Wo galat element nikaalta hai', 'It removes the wrong element', 'वह गलत एलिमेंट निकालता है'),
        t('Wo sirf numbers par chalta hai', 'It only works on numbers', 'वह सिर्फ़ नंबरों पर चलता है'),
      ],
      ans: 1,
      expl: t(
        'pop(0) pehla element hata kar baaki sab ko ek jagah aage khisakta hai. deque ka popleft() bina shift ke O(1) mein kaam karta hai.',
        'pop(0) removes the first element and shifts all the rest one place forward. The popleft() of deque does the job in O(1) with no shifting.',
        'pop(0) पहला एलिमेंट हटाकर बाकी सबको एक जगह आगे खिसकाता है। deque का popleft() बिना शिफ़्ट के O(1) में काम करता है।',
      ),
    },
  ],
  practice: {
    title: t('Stack se string ulta karo', 'Reverse a string with a stack', 'स्टैक से स्ट्रिंग उल्टी करो'),
    task: t(
      'Ek function reverse_string(s) likho jo stack (list) ka use karke string ko ulta karke return kare. Starter mein s = "learn" hai. Done tab maanenge jab output "nrael" print ho. Hint: har character ko push karo, phir pop karte jao aur jodte jao.',
      'Write a function reverse_string(s) that uses a stack (a list) to return the string in reverse. The starter has s = "learn". You are done when it prints "nrael". Hint: push every character, then keep popping and joining them.',
      'एक फ़ंक्शन reverse_string(s) लिखो जो स्टैक (लिस्ट) का इस्तेमाल करके स्ट्रिंग को उल्टी करके लौटाए। स्टार्टर में s = "learn" है। तब पूरा मानेंगे जब आउटपुट "nrael" प्रिंट हो। संकेत: हर कैरेक्टर को पुश करो, फिर पॉप करते जाओ और जोड़ते जाओ।',
    ),
    language: 'python',
    starter: `def reverse_string(s):
    stack = []
    for ch in s:
        stack.append(ch)      # push
    result = ""
    while stack:
        result += stack.pop() # pop: aakhir wala pehle
    return result

print(reverse_string("learn"))`,
    expected: 'nrael',
  },
  readMinutes: 9,
};

const dsaTrees: Article = {
  id: 'dsa-trees',
  subjectId: 'dsa',
  title: t(
    'Trees — jad se patton tak, aur BST',
    'Trees — from the root to the leaves, and the BST',
    'ट्री — जड़ से पत्तों तक, और बीएसटी',
  ),
  summary: t(
    'Tree mein ek root hota hai, uske neeche children, aur aakhir mein leaves. Binary search tree (BST) mein left mein chhota aur right mein bada number hota hai — isliye search, insert aur sorted order sab O(log n) mein ho jaate hain, jab tak tree balanced rahe.',
    'A tree has one root, children below it, and leaves at the end. In a binary search tree (BST), smaller numbers sit on the left and bigger numbers on the right — so search, insert and sorted order all take O(log n), as long as the tree stays balanced.',
    'ट्री में एक रूट होता है, उसके नीचे चिल्ड्रन, और आखिर में लीव्स। बाइनरी सर्च ट्री (BST) में बाईं तरफ़ छोटा और दाईं तरफ़ बड़ा नंबर होता है — इसलिए सर्च, इन्सर्ट और सॉर्टेड ऑर्डर सब O(log n) में हो जाते हैं, जब तक ट्री संतुलित रहे।',
  ),
  sections: [
    sec(
      H_WHAT[0], H_WHAT[1], H_WHAT[2],
      `Tree ek aisa structure hai jo upar se neeche badhta hai. Sabse upar root hota hai. Root ke neeche uske children hote hain, har child ke neeche uske children. Jiske neeche koi child na ho, use leaf kehte hain. Root se leaf tak ke raste ko path kehte hain, aur us raste ki lambai ko height.\n\nBinary tree mein har node ke zyada se zyada 2 children hote hain — left aur right. Binary search tree (BST) ek khaas binary tree hai jiska ek rule hai: left wale hisse mein root se chhote numbers hote hain, right wale hisse mein bade. Ye ek rule poori tree mein, har node par lagu hota hai.\n\nYe rule hi BST ki jaan hai. Search karte waqt tum har node par ye faisla kar sakte ho: number chhota hai to left jao, bada hai to right jao. Har step mein aadha tree kaat jata hai — bilkul binary search jaisa. Isliye BST mein search O(log n) hota hai, jab tak tree balanced ho.`,
      `A tree is a structure that grows from the top down. At the very top sits the root. Below the root are its children, and below each child are its children. A node with no child below it is called a leaf. The path from the root to a leaf is called a path, and the length of that path is the height.\n\nIn a binary tree, every node has at most 2 children — left and right. A binary search tree (BST) is a special binary tree with one rule: the left part holds numbers smaller than the root, and the right part holds bigger numbers. This one rule applies at every node in the whole tree.\n\nThat rule is the life of a BST. While searching, at every node you can decide: if the number is smaller, go left; if it is bigger, go right. Every step throws away half the tree — just like binary search. So searching in a BST is O(log n), as long as the tree is balanced.`,
      `ट्री एक ऐसा स्ट्रक्चर है जो ऊपर से नीचे बढ़ता है। सबसे ऊपर रूट होता है। रूट के नीचे उसके चिल्ड्रन होते हैं, हर चाइल्ड के नीचे उसके चिल्ड्रन। जिसके नीचे कोई चाइल्ड न हो, उसे लीफ़ कहते हैं। रूट से लीफ़ तक के रास्ते को पाथ कहते हैं, और उस रास्ते की लंबाई को हाइट।\n\nबाइनरी ट्री में हर नोड के ज़्यादा से ज़्यादा 2 चिल्ड्रन होते हैं — लेफ़्ट और राइट। बाइनरी सर्च ट्री (BST) एक खास बाइनरी ट्री है जिसका एक नियम है: बाईं तरफ़ वाले हिस्से में रूट से छोटे नंबर होते हैं, दाईं तरफ़ वाले हिस्से में बड़े। यह एक नियम पूरी ट्री में, हर नोड पर लागू होता है।\n\nयह नियम ही BST की जान है। सर्च करते समय तुम हर नोड पर यह फ़ैसला कर सकते हो: नंबर छोटा है तो लेफ़्ट जाओ, बड़ा है तो राइट जाओ। हर कदम में आधी ट्री कट जाती है — बिल्कुल बाइनरी सर्च जैसा। इसलिए BST में सर्च O(log n) होता है, जब तक ट्री संतुलित हो।`,
    ),
    sec(
      H_REAL[0], H_REAL[1], H_REAL[2],
      `Apna parivaar ka ped dekho: sabse upar dada-dadi, unke neeche unke bachche, unke neeche unke bachche. Har shakha aage badhti hai, lekin peeche nahi mudti. Yehi tree hai. File manager mein folders bhi tree hain: ek main folder, uske andar doosre folders, unke andar files.\n\nCricket tournament ka bracket bhi tree hai: pehle round mein 8 teams, jeetne wali 4, phir 2, phir 1 champion. Har match ek node hai, aur haarne wali team aage nahi badhti. Kitaab ki index bhi tree jaisi hoti hai: chapter, uske andar sections, unke andar topics.\n\nPhone mein contacts ko socho: agar wo BST mein rakhe hon, to naam dhoondhne ke liye tum har baar aadha hissa kaat sakte ho — bilkul dictionary mein shabd dhoondhne jaisa.`,
      `Look at your family tree: grandparents at the top, their children below them, and their children below those. Every branch grows forward and never turns back. That is a tree. The folders in a file manager are trees too: one main folder, other folders inside it, and files inside those.\n\nThe bracket of a cricket tournament is also a tree: 8 teams in the first round, 4 winners, then 2, then 1 champion. Every match is a node, and the losing team does not move ahead. The index of a book is tree-like too: chapters, sections inside them, topics inside those.\n\nThink of the contacts on a phone: if they were kept in a BST, you could throw away half the names at every step while searching — just like finding a word in a dictionary.`,
      `अपना परिवार का पेड़ देखो: सबसे ऊपर दादा-दादी, उनके नीचे उनके बच्चे, उनके नीचे उनके बच्चे। हर शाखा आगे बढ़ती है, लेकिन पीछे नहीं मुड़ती। यही ट्री है। फ़ाइल मैनेजर में फ़ोल्डर भी ट्री हैं: एक मुख्य फ़ोल्डर, उसके अंदर दूसरे फ़ोल्डर, उनके अंदर फ़ाइलें।\n\nक्रिकेट टूर्नामेंट का ब्रैकेट भी ट्री है: पहले राउंड में 8 टीमें, जीतने वाली 4, फिर 2, फिर 1 चैंपियन। हर मैच एक नोड है, और हारने वाली टीम आगे नहीं बढ़ती। किताब की इंडेक्स भी ट्री जैसी होती है: चैप्टर, उसके अंदर सेक्शन, उनके अंदर टॉपिक।\n\nफ़ोन में कॉन्टैक्ट्स को सोचो: अगर वह BST में रखे हों, तो नाम ढूँढने के लिए तुम हर बार आधा हिस्सा काट सकते हो — बिल्कुल डिक्शनरी में शब्द ढूँढने जैसा।`,
    ),
    sec(
      H_STEP[0], H_STEP[1], H_STEP[2],
      `Chalo numbers 50, 30, 70, 20, 40, 60, 80 ko BST mein daalte hain. Pehle 50 root banta hai. 30 chhota hai, to left jata hai. 70 bada hai, to right jata hai. 20 aata hai: 50 se chhota, left jao — 30 se bhi chhota, uske left jao, khali jagah mili, wahin baith jao. 40 aata hai: 50 se chhota, left — 30 se bada, uske right jao, khali jagah, baith jao. Aise hi 60 aur 80 apni jagah lete hain.\n\nAb is tree ko inorder mein padho: left, phir node, phir right. Inorder hamesha sorted order deta hai: 20, 30, 40, 50, 60, 70, 80. Ye BST ka jaadu hai — bina sort kiye sorted list mil jaati hai. Search karo 60: 50 se bada, right jao — 70 se chhota, left jao — mil gaya, sirf 3 steps.\n\nDoosra worked example: 20 ko dhoondhna. 50 se chhota, left — 30 se chhota, left — mil gaya. Har step mein ek faisla, ek aadha hissa kaat diya. Neeche code mein insert aur inorder dono likhe hain — recursion se, kyunki tree khud hi repeat hone wala structure hai.`,
      `Let us put the numbers 50, 30, 70, 20, 40, 60, 80 into a BST. First, 50 becomes the root. 30 is smaller, so it goes left. 70 is bigger, so it goes right. 20 arrives: smaller than 50, go left — smaller than 30 too, go to its left, find an empty place, and sit there. 40 arrives: smaller than 50, go left — bigger than 30, go to its right, find an empty place, and sit there. In the same way, 60 and 80 take their places.\n\nNow read this tree in inorder: left, then the node, then right. Inorder always gives sorted order: 20, 30, 40, 50, 60, 70, 80. That is the magic of a BST — a sorted list without sorting. Search for 60: bigger than 50, go right — smaller than 70, go left — found, only 3 steps.\n\nSecond worked example: finding 20. Smaller than 50, go left — smaller than 30, go left — found. Every step makes one decision and throws away one half. The code below has both insert and inorder, written with recursion, because a tree is itself a repeating structure.`,
      `चलो नंबर 50, 30, 70, 20, 40, 60, 80 को BST में डालते हैं। पहले 50 रूट बनता है। 30 छोटा है, तो लेफ़्ट जाता है। 70 बड़ा है, तो राइट जाता है। 20 आता है: 50 से छोटा, लेफ़्ट जाओ — 30 से भी छोटा, उसके लेफ़्ट जाओ, खाली जगह मिली, वहीं बैठ जाओ। 40 आता है: 50 से छोटा, लेफ़्ट — 30 से बड़ा, उसके राइट जाओ, खाली जगह, बैठ जाओ। ऐसे ही 60 और 80 अपनी जगह लेते हैं।\n\nअब इस ट्री को इनऑर्डर में पढ़ो: लेफ़्ट, फिर नोड, फिर राइट। इनऑर्डर हमेशा सॉर्टेड ऑर्डर देता है: 20, 30, 40, 50, 60, 70, 80। यह BST का जादू है — बिना सॉर्ट किए सॉर्टेड लिस्ट मिल जाती है। 60 खोजो: 50 से बड़ा, राइट जाओ — 70 से छोटा, लेफ़्ट जाओ — मिल गया, सिर्फ़ 3 कदम।\n\nदूसरा हल किया हुआ उदाहरण: 20 को ढूँढना। 50 से छोटा, लेफ़्ट — 30 से छोटा, लेफ़्ट — मिल गया। हर कदम में एक फ़ैसला, एक आधा हिस्सा काट दिया। नीचे कोड में इन्सर्ट और इनऑर्डर दोनों लिखे हैं — रिकर्शन से, क्योंकि ट्री खुद ही दोहराया जाने वाला स्ट्रक्चर है।`,
      {
        title: t('BST banao aur inorder mein padho', 'Build a BST and read it in inorder', 'BST बनाओ और इनऑर्डर में पढ़ो'),
        language: 'python',
        code: `class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def insert(root, value):
    if root is None:            # khali jagah mili -> naya node
        return Node(value)
    if value < root.data:
        root.left = insert(root.left, value)
    else:
        root.right = insert(root.right, value)
    return root

def inorder(root):
    if root is None:            # base case: rukne ki jagah
        return
    inorder(root.left)
    print(root.data, end=" ")
    inorder(root.right)

root = None
for v in [50, 30, 70, 20, 40, 60, 80]:
    root = insert(root, v)
inorder(root)`,
        output: '20 30 40 50 60 70 80',
        note: t(
          'Inorder left -> node -> right padhta hai, isliye output sorted aata hai. Base case (root is None) bhool gaye to recursion kabhi rukega nahi.',
          'Inorder reads left, then the node, then right, so the output comes out sorted. If you forget the base case (root is None), the recursion never stops.',
          'इनऑर्डर लेफ़्ट -> नोड -> राइट पढ़ता है, इसलिए आउटपुट सॉर्टेड आता है। बेस केस (root is None) भूल गए तो रिकर्शन कभी रुकेगा नहीं।',
        ),
      },
    ),
    sec(
      H_MIST[0], H_MIST[1], H_MIST[2],
      `Sabse badi galatfehmi: ye sochna ki BST hamesha balanced rehta hai. Nahi rehta. Agar tum 10, 20, 30, 40, 50 is order mein daalo, to har naya number right jayega aur tree ek seedhi line ban jayegi — height 5, search O(n). BST sirf tab tez hai jab data aane ka order mix ho, ya tree ko balance kiya jaye.\n\nDoosri galti: recursion mein base case bhoolna. insert ya inorder mein agar root is None wala check na ho, to function khud ko hamesha bulata rahega aur RecursionError aayega. Har recursive function mein pehle ye likho: rukna kab hai.\n\nTeesri galti: insert karte waqt galat side chunna. Value chhoti ho to left, badi ho to right — ek baar ulta kar diya to BST ka rule toot jayega aur search galat jawab dega, bina error ke.`,
      `The biggest misunderstanding is thinking that a BST always stays balanced. It does not. If you add 10, 20, 30, 40, 50 in that order, every new number goes right and the tree becomes a straight line — height 5, search O(n). A BST is fast only when the data arrives in a mixed order, or when the tree is balanced on purpose.\n\nThe second mistake is forgetting the base case in recursion. If insert or inorder has no check for root is None, the function keeps calling itself for ever and you get a RecursionError. In every recursive function, first write down when it must stop.\n\nThe third mistake is choosing the wrong side while inserting. A smaller value goes left, a bigger value goes right — if you swap them even once, the rule of the BST breaks and search gives a wrong answer with no error.`,
      `सबसे बड़ी गलतफ़हमी: यह सोचना कि BST हमेशा संतुलित रहता है। नहीं रहता। अगर तुम 10, 20, 30, 40, 50 इस क्रम में डालो, तो हर नया नंबर राइट जाएगा और ट्री एक सीधी लाइन बन जाएगी — हाइट 5, सर्च O(n)। BST सिर्फ़ तब तेज़ है जब डेटा आने का क्रम मिला-जुला हो, या ट्री को संतुलित किया जाए।\n\nदूसरी गलती: रिकर्शन में बेस केस भूलना। इन्सर्ट या इनऑर्डर में अगर root is None वाला जाँच न हो, तो फ़ंक्शन खुद को हमेशा बुलाता रहेगा और RecursionError आएगा। हर रिकर्सिव फ़ंक्शन में पहले यह लिखो: रुकना कब है।\n\nतीसरी गलती: इन्सर्ट करते समय गलत साइड चुनना। वैल्यू छोटी हो तो लेफ़्ट, बड़ी हो तो राइट — एक बार उल्टा कर दिया तो BST का नियम टूट जाएगा और सर्च गलत जवाब देगा, बिना एरर के।`,
    ),
    sec(
      H_EDGE[0], H_EDGE[1], H_EDGE[2],
      `Khali tree mein root None hota hai. Pehla insert hi root banta hai — isliye insert function ko root return karna padta hai, nahi to pehla node kho jayega. Ek node wale tree ki height 1 hoti hai (kuch log 0 kehte hain — dono conventions hain, bas ek hi use karo).\n\nDuplicate values ka kya? Hamare code mein value < root.data nahi hai to right jata hai — matlab duplicate right mein baithta hai. Ye ek choice hai; kuch log duplicate ko mana karte hain. Bas apne code mein ek hi rule rakho, nahi to search confuse ho jayega.\n\nSorted input sabse khatarnak edge case hai: 7 sorted numbers se tree ki height 7 ho jaati hai, balanced tree mein sirf 3 hoti. Isiliye bade systems mein AVL ya Red-Black tree use hote hain, jo khud ko balance karte hain.`,
      `In an empty tree the root is None. The first insert itself becomes the root — that is why the insert function must return the root, or the first node is lost. A tree with one node has height 1 (some people say 0 — both conventions exist, just use one of them).\n\nWhat about duplicate values? In our code, a value that is not less than root.data goes right — so a duplicate sits on the right. That is one choice; some people do not allow duplicates at all. Just keep one rule in your code, or search gets confused.\n\nSorted input is the most dangerous edge case: 7 sorted numbers make a tree of height 7, while a balanced tree would have height 3. That is why big systems use AVL or Red-Black trees, which balance themselves.`,
      `खाली ट्री में रूट None होता है। पहला इन्सर्ट ही रूट बनता है — इसीलिए इन्सर्ट फ़ंक्शन को रूट लौटाना पड़ता है, नहीं तो पहला नोड खो जाएगा। एक नोड वाली ट्री की हाइट 1 होती है (कुछ लोग 0 कहते हैं — दोनों परंपराएँ हैं, बस एक ही इस्तेमाल करो)।\n\nडुप्लीकेट वैल्यू का क्या? हमारे कोड में value < root.data नहीं है तो राइट जाता है — मतलब डुप्लीकेट राइट में बैठता है। यह एक चुनाव है; कुछ लोग डुप्लीकेट को मना करते हैं। बस अपने कोड में एक ही नियम रखो, नहीं तो सर्च कन्फ़्यूज़ हो जाएगा।\n\nसॉर्टेड इनपुट सबसे खतरनाक एज केस है: 7 सॉर्टेड नंबरों से ट्री की हाइट 7 हो जाती है, संतुलित ट्री में सिर्फ़ 3 होती। इसीलिए बड़े सिस्टम में AVL या रेड-ब्लैक ट्री इस्तेमाल होते हैं, जो खुद को संतुलित करते हैं।`,
    ),
    sec(
      H_WHATIF[0], H_WHATIF[1], H_WHATIF[2],
      `Agar numbers sorted order mein aane lagen, to BST line ban jayega aur search O(n) ho jayega — array se bhi slow, kyunki har step mein pointer follow karna padta hai. Isse bachne ke liye data ko pehle shuffle karo, ya balanced tree use karo.\n\nAgar tumhe sirf sorted order chahiye aur search nahi, to array ko sort karna bhi kaafi hai. BST tab jeetta hai jab insert aur search dono baar-baar karne hon — sorted array mein insert O(n) hai, BST mein O(log n). Kaam dekh kar chunna hai.`,
      `If the numbers start arriving in sorted order, the BST becomes a line and search turns into O(n) — even slower than an array, because every step must follow a pointer. To avoid that, shuffle the data first, or use a balanced tree.\n\nIf you only need sorted order and never search, sorting an array is enough. A BST wins when you must insert and search again and again — inserting into a sorted array is O(n), while in a BST it is O(log n). Choose by the job.`,
      `अगर नंबर सॉर्टेड ऑर्डर में आने लगें, तो BST लाइन बन जाएगा और सर्च O(n) हो जाएगा — ऐरे से भी धीमा, क्योंकि हर कदम में पॉइंटर का पीछा करना पड़ता है। इससे बचने के लिए डेटा को पहले शफ़ल करो, या संतुलित ट्री इस्तेमाल करो।\n\nअगर तुम्हें सिर्फ़ सॉर्टेड ऑर्डर चाहिए और सर्च नहीं, तो ऐरे को सॉर्ट करना भी काफ़ी है। BST तब जीतता है जब इन्सर्ट और सर्च दोनों बार-बार करने हों — सॉर्टेड ऐरे में इन्सर्ट O(n) है, BST में O(log n)। काम देखकर चुनना है।`,
    ),
    sec(
      H_SUM[0], H_SUM[1], H_SUM[2],
      `Tree mein root, children aur leaves hote hain. BST mein left chhota, right bada — is rule se search aur insert O(log n) mein hote hain. Inorder traversal hamesha sorted order deta hai. Lekin BST khud balance nahi karta: sorted input se wo line ban jata hai aur O(n) ho jata hai. Recursion likhte waqt base case kabhi mat bhoolo.`,
      `A tree has a root, children and leaves. In a BST, the left is smaller and the right is bigger — that rule makes search and insert O(log n). Inorder traversal always gives sorted order. But a BST does not balance itself: sorted input turns it into a line and it becomes O(n). When you write recursion, never forget the base case.`,
      `ट्री में रूट, चिल्ड्रन और लीव्स होते हैं। BST में लेफ़्ट छोटा, राइट बड़ा — इस नियम से सर्च और इन्सर्ट O(log n) में होते हैं। इनऑर्डर ट्रैवर्सल हमेशा सॉर्टेड ऑर्डर देता है। लेकिन BST खुद संतुलन नहीं करता: सॉर्टेड इनपुट से वह लाइन बन जाता है और O(n) हो जाता है। रिकर्शन लिखते समय बेस केस कभी मत भूलो।`,
    ),
  ],
  diagram: {
    kind: 'boxes',
    title: t('BST — 50, 30, 70, 20, 40, 60, 80', 'BST — 50, 30, 70, 20, 40, 60, 80', 'BST — 50, 30, 70, 20, 40, 60, 80'),
    nodes: [
      { t: t('50 — root', '50 — root', '50 — रूट'), s: t('sabse upar', 'at the very top', 'सबसे ऊपर') },
      { t: t('30 left, 70 right', '30 left, 70 right', '30 लेफ़्ट, 70 राइट'), s: t('chhota left, bada right', 'smaller on the left, bigger on the right', 'छोटा लेफ़्ट, बड़ा राइट') },
      { t: t('20, 40 — 30 ke neeche', '20, 40 — below 30', '20, 40 — 30 के नीचे'), s: t('60, 80 — 70 ke neeche', '60, 80 — below 70', '60, 80 — 70 के नीचे') },
      { t: t('inorder: 20 30 40 50 60 70 80', 'inorder: 20 30 40 50 60 70 80', 'इनऑर्डर: 20 30 40 50 60 70 80'), s: t('hamesha sorted', 'always sorted', 'हमेशा सॉर्टेड') },
    ],
  },
  codeExamples: [
    {
      title: t('BST mein search — 60 dhoondho', 'Search in a BST — find 60', 'BST में सर्च — 60 ढूँढो'),
      language: 'python',
      code: `class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def insert(root, value):
    if root is None:
        return Node(value)
    if value < root.data:
        root.left = insert(root.left, value)
    else:
        root.right = insert(root.right, value)
    return root

def search(root, value):
    if root is None:
        return False
    if root.data == value:
        return True
    if value < root.data:
        return search(root.left, value)
    return search(root.right, value)

root = None
for v in [50, 30, 70, 20, 40, 60, 80]:
    root = insert(root, v)
print(search(root, 60))
print(search(root, 25))`,
      output: 'True\nFalse',
      note: t(
        'Search har node par ek faisla karta hai: chhota hai to left, bada hai to right. 60 dhoondhne mein sirf 3 nodes dekhe gaye.',
        'Search makes one decision at every node: smaller means left, bigger means right. Finding 60 looked at only 3 nodes.',
        'सर्च हर नोड पर एक फ़ैसला करता है: छोटा है तो लेफ़्ट, बड़ा है तो राइट। 60 ढूँढने में सिर्फ़ 3 नोड देखे गए।',
      ),
    },
  ],
  mcqs: [
    {
      q: t(
        'BST mein 50, 30, 70, 20, 40 daale gaye. Inorder traversal kya dega?',
        '50, 30, 70, 20 and 40 are added to a BST. What will inorder traversal give?',
        'BST में 50, 30, 70, 20, 40 डाले गए। इनऑर्डर ट्रैवर्सल क्या देगा?',
      ),
      opts: [
        t('50 30 70 20 40', '50 30 70 20 40', '50 30 70 20 40'),
        t('20 30 40 50 70', '20 30 40 50 70', '20 30 40 50 70'),
        t('70 50 40 30 20', '70 50 40 30 20', '70 50 40 30 20'),
        t('20 40 30 70 50', '20 40 30 70 50', '20 40 30 70 50'),
      ],
      ans: 1,
      expl: t(
        'Inorder left -> node -> right padhta hai, aur BST ke rule se ye hamesha sorted order deta hai: 20 30 40 50 70.',
        'Inorder reads left, then the node, then right, and by the rule of a BST that always gives sorted order: 20 30 40 50 70.',
        'इनऑर्डर लेफ़्ट -> नोड -> राइट पढ़ता है, और BST के नियम से यह हमेशा सॉर्टेड ऑर्डर देता है: 20 30 40 50 70।',
      ),
    },
    {
      q: t(
        'BST mein 10, 20, 30, 40 is order mein daalo. Tree kaisa banega aur search ka cost kya hoga?',
        'Add 10, 20, 30 and 40 to a BST in that order. What shape does the tree take, and what is the cost of search?',
        'BST में 10, 20, 30, 40 इस क्रम में डालो। ट्री कैसा बनेगा और सर्च का खर्च क्या होगा?',
      ),
      opts: [
        t('Balanced tree, O(log n)', 'A balanced tree, O(log n)', 'संतुलित ट्री, O(log n)'),
        t('Seedhi line right ki taraf, O(n)', 'A straight line to the right, O(n)', 'सीधी लाइन राइट की तरफ़, O(n)'),
        t('Seedhi line left ki taraf, O(n)', 'A straight line to the left, O(n)', 'सीधी लाइन लेफ़्ट की तरफ़, O(n)'),
        t('Tree banega hi nahi', 'No tree is formed at all', 'ट्री बनेगा ही नहीं'),
      ],
      ans: 1,
      expl: t(
        'Har naya number pichle se bada hai, to har baar right jayega. Tree ek line ban jata hai, height 4, search O(n).',
        'Every new number is bigger than the last one, so it goes right every time. The tree becomes a line, height 4, search O(n).',
        'हर नया नंबर पिछले से बड़ा है, तो हर बार राइट जाएगा। ट्री एक लाइन बन जाता है, हाइट 4, सर्च O(n)।',
      ),
    },
    {
      q: t(
        'BST mein 60 dhoondh rahe ho. Root 50 hai, phir 70 mila, phir 60 mila. Kitne steps lage?',
        'You are finding 60 in a BST. The root is 50, then you reach 70, then 60. How many steps did it take?',
        'BST में 60 ढूँढ रहे हो। रूट 50 है, फिर 70 मिला, फिर 60 मिला। कितने कदम लगे?',
      ),
      opts: [
        t('1', '1', '1'),
        t('2', '2', '2'),
        t('3', '3', '3'),
        t('7', '7', '7'),
      ],
      ans: 2,
      expl: t(
        '50 dekho (60 bada hai, right jao), 70 dekho (60 chhota hai, left jao), 60 mil gaya — kul 3 nodes dekhe gaye.',
        'Look at 50 (60 is bigger, go right), look at 70 (60 is smaller, go left), find 60 — 3 nodes looked at in total.',
        '50 देखो (60 बड़ा है, राइट जाओ), 70 देखो (60 छोटा है, लेफ़्ट जाओ), 60 मिल गया — कुल 3 नोड देखे गए।',
      ),
    },
    {
      q: t(
        'Neeche wale code mein bug kya hai? insert function root return karna bhool gaya hai.',
        'What is the bug in this code? The insert function forgot to return the root.',
        'नीचे वाले कोड में बग क्या है? इन्सर्ट फ़ंक्शन रूट लौटाना भूल गया है।',
      ),
      opts: [
        t('Pehla node hi root nahi ban payega, tree khali rahega', 'The first node never becomes the root, so the tree stays empty', 'पहला नोड ही रूट नहीं बन पाएगा, ट्री खाली रहेगा'),
        t('Sirf search slow hoga', 'Only search becomes slow', 'सिर्फ़ सर्च धीमा होगा'),
        t('Inorder ulta dega', 'Inorder gives a reversed order', 'इनऑर्डर उल्टा देगा'),
        t('Koi bug nahi hai', 'There is no bug', 'कोई बग नहीं है'),
      ],
      ans: 0,
      expl: t(
        'Jab root None hota hai, to insert naya Node banata hai aur use return karta hai. Return na ho to root = None hi reh jata hai aur tree kabhi banta hi nahi.',
        'When the root is None, insert makes a new Node and returns it. Without that return, root stays None and the tree is never built at all.',
        'जब रूट None होता है, तो इन्सर्ट नया Node बनाता है और उसे लौटाता है। लौटाए बिना रूट None ही रह जाता है और ट्री कभी बनता ही नहीं।',
      ),
    },
  ],
  practice: {
    title: t('BST mein sabse chhota number dhoondho', 'Find the smallest number in a BST', 'BST में सबसे छोटा नंबर ढूँढो'),
    task: t(
      'Ek function find_min(root) likho jo BST ka sabse chhota number return kare. Starter mein tree 50, 30, 70, 20, 40, 60, 80 se bana hai. Done tab maanenge jab output 20 print ho. Hint: sabse chhota number sabse left wale leaf par hota hai — left jate jao jab tak left None na ho.',
      'Write a function find_min(root) that returns the smallest number in a BST. The starter builds the tree from 50, 30, 70, 20, 40, 60, 80. You are done when it prints 20. Hint: the smallest number sits on the leftmost leaf — keep going left until left is None.',
      'एक फ़ंक्शन find_min(root) लिखो जो BST का सबसे छोटा नंबर लौटाए। स्टार्टर में ट्री 50, 30, 70, 20, 40, 60, 80 से बना है। तब पूरा मानेंगे जब आउटपुट 20 प्रिंट हो। संकेत: सबसे छोटा नंबर सबसे लेफ़्ट वाले लीफ़ पर होता है — लेफ़्ट जाते जाओ जब तक लेफ़्ट None न हो।',
    ),
    language: 'python',
    starter: `class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def insert(root, value):
    if root is None:
        return Node(value)
    if value < root.data:
        root.left = insert(root.left, value)
    else:
        root.right = insert(root.right, value)
    return root

def find_min(root):
    current = root
    while current.left is not None:
        current = current.left
    return current.data

root = None
for v in [50, 30, 70, 20, 40, 60, 80]:
    root = insert(root, v)
print(find_min(root))`,
    expected: '20',
  },
  readMinutes: 11,
};

const dsaSortingSearching: Article = {
  id: 'dsa-sorting-searching',
  subjectId: 'dsa',
  title: t(
    'Sorting aur searching — pehle sajao, phir dhoondho',
    'Sorting and searching — arrange first, then find',
    'सॉर्टिंग और सर्चिंग — पहले सजाओ, फिर ढूँढो',
  ),
  summary: t(
    'Sorting ka matlab hai order mein sajana, searching ka matlab hai dhoondhna. Bubble sort simple hai lekin O(n²) hai, isliye bade data par slow hai. Binary search O(log n) mein dhoondhta hai, lekin sirf sorted list par chalta hai.',
    'Sorting means putting things in order, and searching means finding something. Bubble sort is simple but O(n²), so it is slow on big data. Binary search finds in O(log n), but it only works on a sorted list.',
    'सॉर्टिंग का मतलब है क्रम में सजाना, सर्चिंग का मतलब है ढूँढना। बबल सॉर्ट सरल है लेकिन O(n²) है, इसलिए बड़े डेटा पर धीमा है। बाइनरी सर्च O(log n) में ढूँढता है, लेकिन सिर्फ़ सॉर्टेड लिस्ट पर चलता है।',
  ),
  sections: [
    sec(
      H_WHAT[0], H_WHAT[1], H_WHAT[2],
      `Sorting ka matlab hai cheezon ko ek order mein sajana — chhote se bada, ya A se Z. Searching ka matlab hai sajayi hui ya bina sajayi list mein kisi khaas cheez ko dhoondhna. Dono alag kaam hain, lekin ek-doosre se jude hain: tez search ke liye aksar pehle sort karna padta hai.\n\nBubble sort sabse simple sorting hai: paas wale do numbers ko compare karo, agar galat order mein hon to swap kar do. Ye kaam baar-baar karo, jab tak poori list sort na ho jaye. Har pass mein sabse bada number aakhir mein "bubble" ki tarah upar aa jata hai — isiliye iska naam bubble sort hai.\n\nBinary search tez searching hai: sorted list ke beech wale number ko dekho, target chhota hai to left aadha rakho, bada hai to right aadha. Har step mein aadha data kaat do. Ye wahi tareeka hai jo hum pehle article mein dekh chuke hain — yahan hum ise sorting se jod kar poora karenge.`,
      `Sorting means putting things in order — smallest to biggest, or A to Z. Searching means finding one particular thing in a list, sorted or not. They are two different jobs, but they are linked: fast searching often needs sorting first.\n\nBubble sort is the simplest sorting method: compare two numbers standing next to each other, and swap them if they are in the wrong order. Repeat this until the whole list is sorted. In every pass, the biggest number rises to the end like a bubble — that is why it is called bubble sort.\n\nBinary search is fast searching: look at the middle number of a sorted list; if the target is smaller, keep the left half, and if it is bigger, keep the right half. Throw away half the data at every step. This is the same method we saw in the first article — here we complete it by joining it with sorting.`,
      `सॉर्टिंग का मतलब है चीज़ों को एक क्रम में सजाना — छोटे से बड़ा, या A से Z। सर्चिंग का मतलब है सजी हुई या बिना सजी लिस्ट में किसी खास चीज़ को ढूँढना। दोनों अलग काम हैं, लेकिन एक-दूसरे से जुड़े हैं: तेज़ सर्च के लिए अक्सर पहले सॉर्ट करना पड़ता है।\n\nबबल सॉर्ट सबसे सरल सॉर्टिंग है: पास वाले दो नंबरों की तुलना करो, अगर गलत क्रम में हों तो स्वैप कर दो। यह काम बार-बार करो, जब तक पूरी लिस्ट सॉर्ट न हो जाए। हर पास में सबसे बड़ा नंबर आखिर में "बबल" की तरह ऊपर आ जाता है — इसीलिए इसका नाम बबल सॉर्ट है।\n\nबाइनरी सर्च तेज़ सर्चिंग है: सॉर्टेड लिस्ट के बीच वाले नंबर को देखो, टार्गेट छोटा है तो बायाँ आधा रखो, बड़ा है तो दायाँ आधा। हर कदम में आधा डेटा काट दो। यह वही तरीका है जो हम पहले आर्टिकल में देख चुके हैं — यहाँ हम इसे सॉर्टिंग से जोड़कर पूरा करेंगे।`,
    ),
    sec(
      H_REAL[0], H_REAL[1], H_REAL[2],
      `Library mein kitaabein height ke hisaab se saji hon to tumhe pata hota hai ki sabse chhoti kitaab kahan hai — ye sorting hai. Dictionary mein shabd dhoondhna searching hai: tum beech se kholte ho, phir aadha hissa kaat te ho, bilkul binary search jaisa.\n\nCricket mein scoreboard par players ke runs badhte order mein dikhte hon, to top scorer turant dikhta hai. Lekin scoreboard ko har ball ke baad sort karna mehenga hai — isliye real apps mein score ko ek baar sort karke rakhte hain, ya aisi structure use karte hain jisme order apne aap bana rehta hai, jaise BST.\n\nPhone mein contacts A se Z sajaye hote hain, isiliye tum "S" wale naam ke liye seedha neeche scroll karte ho, upar se ek-ek naam nahi padhte. Sorting ek baar ki mehnat hai, searching ka fayda baar-baar milta hai.`,
      `In a library, if books are arranged by height, you know where the shortest book is — that is sorting. Finding a word in a dictionary is searching: you open it in the middle, then throw away half, exactly like binary search.\n\nIn cricket, when the players on a scoreboard are shown in order of runs, the top scorer is visible at once. But sorting the scoreboard after every ball is costly — so real apps sort the scores once and keep them, or use a structure where the order stays on its own, like a BST.\n\nThe contacts on a phone are arranged from A to Z, which is why you scroll straight down for a name starting with "S" instead of reading one name after another from the top. Sorting is hard work done once, and searching pays off again and again.`,
      `लाइब्रेरी में किताबें ऊँचाई के हिसाब से सजी हों तो तुम्हें पता होता है कि सबसे छोटी किताब कहाँ है — यह सॉर्टिंग है। डिक्शनरी में शब्द ढूँढना सर्चिंग है: तुम बीच से खोलते हो, फिर आधा हिस्सा काटते हो, बिल्कुल बाइनरी सर्च जैसा।\n\nक्रिकेट में स्कोरबोर्ड पर खिलाड़ियों के रन बढ़ते क्रम में दिखते हों, तो टॉप स्कोरर तुरंत दिखता है। लेकिन स्कोरबोर्ड को हर बॉल के बाद सॉर्ट करना महँगा है — इसलिए असली ऐप्स में स्कोर को एक बार सॉर्ट करके रखते हैं, या ऐसी स्ट्रक्चर इस्तेमाल करते हैं जिसमें ऑर्डर अपने आप बना रहता है, जैसे BST।\n\nफ़ोन में कॉन्टैक्ट्स A से Z सजाए होते हैं, इसीलिए तुम "S" वाले नाम के लिए सीधे नीचे स्क्रॉल करते हो, ऊपर से एक-एक नाम नहीं पढ़ते। सॉर्टिंग एक बार की मेहनत है, सर्चिंग का फ़ायदा बार-बार मिलता है।`,
    ),
    sec(
      H_STEP[0], H_STEP[1], H_STEP[2],
      `Pehla worked example: bubble sort [5, 2, 9, 1] par. Pehla pass: 5 aur 2 compare karo — galat order, swap karo: [2, 5, 9, 1]. 5 aur 9 sahi hain, kuch nahi. 9 aur 1 galat, swap: [2, 5, 1, 9]. Sabse bada 9 aakhir mein pahunch gaya. Doosra pass: 2 aur 5 sahi, 5 aur 1 galat, swap: [2, 1, 5, 9]. Teesra pass: 2 aur 1 galat, swap: [1, 2, 5, 9]. Ab sorted hai. Har pass mein ek number apni sahi jagah baith jata hai.\n\nBubble sort mein n numbers ke liye n-1 pass lagte hain, aur har pass mein n tak compare hote hain — kul O(n²). Chhoti list par theek hai, 10,000 numbers par 10 crore compare ho jayenge. Isliye bade data par merge sort ya quick sort use hota hai, jo O(n log n) hain.\n\nDoosra worked example: sorted list [1, 2, 5, 9] mein 5 dhoondhna. Binary search: beech mein 2 hai (index 1). 5 bada hai, to right aadha [5, 9] rakho. Beech mein 5 hai — mil gaya, sirf 2 steps. Neeche dono ka code hai.`,
      `First worked example: bubble sort on [5, 2, 9, 1]. First pass: compare 5 and 2 — wrong order, swap them: [2, 5, 9, 1]. 5 and 9 are fine, do nothing. 9 and 1 are wrong, swap: [2, 5, 1, 9]. The biggest, 9, has reached the end. Second pass: 2 and 5 are fine, 5 and 1 are wrong, swap: [2, 1, 5, 9]. Third pass: 2 and 1 are wrong, swap: [1, 2, 5, 9]. Now it is sorted. In every pass, one number sits in its right place.\n\nIn bubble sort, n numbers need n-1 passes, and every pass makes up to n comparisons — O(n²) in total. That is fine for a small list, but 10,000 numbers need 10 crore comparisons. So for big data, merge sort or quick sort is used, which are O(n log n).\n\nSecond worked example: finding 5 in the sorted list [1, 2, 5, 9]. Binary search: the middle holds 2 (index 1). 5 is bigger, so keep the right half [5, 9]. The middle holds 5 — found, only 2 steps. The code for both is below.`,
      `पहला हल किया हुआ उदाहरण: बबल सॉर्ट [5, 2, 9, 1] पर। पहला पास: 5 और 2 की तुलना करो — गलत क्रम, स्वैप करो: [2, 5, 9, 1]। 5 और 9 सही हैं, कुछ नहीं। 9 और 1 गलत, स्वैप: [2, 5, 1, 9]। सबसे बड़ा 9 आखिर में पहुँच गया। दूसरा पास: 2 और 5 सही, 5 और 1 गलत, स्वैप: [2, 1, 5, 9]। तीसरा पास: 2 और 1 गलत, स्वैप: [1, 2, 5, 9]। अब सॉर्टेड है। हर पास में एक नंबर अपनी सही जगह बैठ जाता है।\n\nबबल सॉर्ट में n नंबरों के लिए n-1 पास लगते हैं, और हर पास में n तक तुलना होती है — कुल O(n²)। छोटी लिस्ट पर ठीक है, 10,000 नंबरों पर 10 करोड़ तुलना हो जाएँगी। इसलिए बड़े डेटा पर मर्ज सॉर्ट या क्विक सॉर्ट इस्तेमाल होता है, जो O(n log n) हैं।\n\nदूसरा हल किया हुआ उदाहरण: सॉर्टेड लिस्ट [1, 2, 5, 9] में 5 ढूँढना। बाइनरी सर्च: बीच में 2 है (इंडेक्स 1)। 5 बड़ा है, तो दायाँ आधा [5, 9] रखो। बीच में 5 है — मिल गया, सिर्फ़ 2 कदम। नीचे दोनों का कोड है।`,
      {
        title: t('Bubble sort aur binary search — ek saath', 'Bubble sort and binary search — together', 'बबल सॉर्ट और बाइनरी सर्च — एक साथ'),
        language: 'python',
        code: `def bubble_sort(nums):
    n = len(nums)
    for i in range(n):
        for j in range(n - 1 - i):
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]
    return nums

def binary_search(nums, target):
    low, high = 0, len(nums) - 1
    while low <= high:
        mid = (low + high) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

nums = bubble_sort([5, 2, 9, 1])
print(nums)
print(binary_search(nums, 5))`,
        output: '[1, 2, 5, 9]\n2',
        note: t(
          'Bubble sort mein andar wala loop har pass mein ek kam chalta hai, kyunki aakhri numbers pehle hi sort ho chuke hote hain. Binary search sirf sorted list par chalao.',
          'In bubble sort, the inner loop runs one time fewer in every pass, because the last numbers are already sorted. Run binary search only on a sorted list.',
          'बबल सॉर्ट में अंदर वाला लूप हर पास में एक कम चलता है, क्योंकि आखिरी नंबर पहले ही सॉर्ट हो चुके होते हैं। बाइनरी सर्च सिर्फ़ सॉर्टेड लिस्ट पर चलाओ।',
        ),
      },
    ),
    sec(
      H_MIST[0], H_MIST[1], H_MIST[2],
      `Sabse badi galti: binary search ko unsorted list par chalana. Ye pehle article mein bhi thi, aur yahan phir aati hai kyunki ye sabse aam interview bug hai. Agar list sort nahi hai, to binary search galat hissa kaat dega aur number hone par bhi -1 de dega.\n\nDoosri galti: bubble sort mein swap ki direction ulta kar dena. Agar tum nums[j] < nums[j+1] par swap karoge, to list bade se chhote order mein sort hogi — descending. Galat nahi hai, lekin agar tumhe ascending chahiye tha to answer galat hoga. Hamesha pehle likho ki kaun sa order chahiye.\n\nTeesri galti: ye sochna ki har sorting O(n log n) hoti hai. Nahi — bubble, selection aur insertion sort O(n²) hain. Interview mein jab tum "sort karo" suno, to pehle poochho: data kitna hai, aur kya wo pehle se lagbhag sorted hai? Jawab par algorithm depend karta hai.`,
      `The biggest mistake is running binary search on an unsorted list. It appeared in the first article too, and it comes up again here because it is the most common interview bug. If the list is not sorted, binary search throws away the wrong half and returns -1 even when the number is there.\n\nThe second mistake is swapping the direction in bubble sort. If you swap when nums[j] < nums[j+1], the list sorts from big to small — descending. That is not wrong by itself, but if you wanted ascending order, the answer is wrong. Always write down first which order you want.\n\nThe third mistake is thinking that every sorting method is O(n log n). No — bubble, selection and insertion sort are O(n²). When you hear "sort it" in an interview, first ask: how much data is there, and is it already almost sorted? The answer decides the algorithm.`,
      `सबसे बड़ी गलती: बाइनरी सर्च को अनसॉर्टेड लिस्ट पर चलाना। यह पहले आर्टिकल में भी थी, और यहाँ फिर आती है क्योंकि यह सबसे आम इंटरव्यू बग है। अगर लिस्ट सॉर्ट नहीं है, तो बाइनरी सर्च गलत हिस्सा काट देगा और नंबर होने पर भी -1 दे देगा।\n\nदूसरी गलती: बबल सॉर्ट में स्वैप की दिशा उल्टा कर देना। अगर तुम nums[j] < nums[j+1] पर स्वैप करोगे, तो लिस्ट बड़े से छोटे क्रम में सॉर्ट होगी — डिसेंडिंग। गलत नहीं है, लेकिन अगर तुम्हें असेंडिंग चाहिए था तो जवाब गलत होगा। हमेशा पहले लिखो कि कौन सा क्रम चाहिए।\n\nतीसरी गलती: यह सोचना कि हर सॉर्टिंग O(n log n) होती है। नहीं — बबल, सिलेक्शन और इन्सर्शन सॉर्ट O(n²) हैं। इंटरव्यू में जब तुम "सॉर्ट करो" सुनो, तो पहले पूछो: डेटा कितना है, और क्या वह पहले से लगभग सॉर्टेड है? जवाब पर एल्गोरिदम निर्भर करता है।`,
    ),
    sec(
      H_EDGE[0], H_EDGE[1], H_EDGE[2],
      `Pehle se sorted list par bubble sort phir bhi saare pass chalata hai, jab tak tum "koi swap nahi hua to ruk jao" wala check na lagao. Is chhote se check se best case O(n) ho jata hai — yehi woh detail hai jo interview mein alag karti hai.\n\nReverse sorted list bubble sort ka worst case hai: har pair ko swap karna padta hai. Duplicate values par bubble sort stable rehta hai — matlab barabar wale numbers ka pehle wala order nahi badalta. Ye tab matter karta hai jab tum pehle naam se aur phir marks se sort karte ho.\n\nKhali list aur ek element wali list dono pehle se sorted hain — bubble sort ka loop ek baar bhi swap nahi karega, binary search turant -1 ya index de dega.`,
      `On a list that is already sorted, bubble sort still runs all the passes, unless you add the check "stop if no swap happened". That small check makes the best case O(n) — that is the detail that stands out in an interview.\n\nA reverse-sorted list is the worst case for bubble sort: every pair must be swapped. On duplicate values, bubble sort stays stable — the earlier order of equal numbers does not change. That matters when you sort by name first and then by marks.\n\nAn empty list and a list with one element are both already sorted — the loop of bubble sort swaps nothing even once, and binary search at once returns -1 or the index.`,
      `पहले से सॉर्टेड लिस्ट पर बबल सॉर्ट फिर भी सारे पास चलाता है, जब तक तुम "कोई स्वैप नहीं हुआ तो रुक जाओ" वाला जाँच न लगाओ। इस छोटे से जाँच से बेस्ट केस O(n) हो जाता है — यही वह डिटेल है जो इंटरव्यू में अलग करती है।\n\nरिवर्स सॉर्टेड लिस्ट बबल सॉर्ट का वर्स्ट केस है: हर जोड़ी को स्वैप करना पड़ता है। डुप्लीकेट वैल्यू पर बबल सॉर्ट स्थिर रहता है — मतलब बराबर वाले नंबरों का पहले वाला क्रम नहीं बदलता। यह तब मायने रखता है जब तुम पहले नाम से और फिर नंबरों से सॉर्ट करते हो।\n\nखाली लिस्ट और एक एलिमेंट वाली लिस्ट दोनों पहले से सॉर्टेड हैं — बबल सॉर्ट का लूप एक बार भी स्वैप नहीं करेगा, बाइनरी सर्च तुरंत -1 या इंडेक्स दे देगा।`,
    ),
    sec(
      H_WHATIF[0], H_WHATIF[1], H_WHATIF[2],
      `Agar list lagbhag sorted ho — jaise 1000 numbers mein sirf 2-3 galat jagah par hon — to insertion sort bubble sort se tez hota hai, kyunki wo har element ko sirf utna hi peeche le jata hai jitni zaroorat ho. Isiliye Python ka sort bhi andar se aise hi cases ko pehchan kar tez chalta hai.\n\nAgar tumhe sirf ek baar dhoondhna hai, to sort karna bekaar hai — linear search O(n) mein kaam kar dega, jabki sort O(n log n) lega. Sort tab karo jab baar-baar dhoondhna ho. Har baar ye hisaab lagao: ek baar ki mehnat, kitni baar ka fayda?`,
      `If the list is almost sorted — say only 2 or 3 numbers out of 1000 are in the wrong place — insertion sort is faster than bubble sort, because it moves each element back only as far as needed. That is why Python's sort also runs fast by recognising such cases inside.\n\nIf you need to search only once, sorting is a waste — linear search finishes the job in O(n), while sorting takes O(n log n). Sort when you must search again and again. Every time, do this sum: hard work done once, benefit gained how many times?`,
      `अगर लिस्ट लगभग सॉर्टेड हो — जैसे 1000 नंबरों में सिर्फ़ 2-3 गलत जगह पर हों — तो इन्सर्शन सॉर्ट बबल सॉर्ट से तेज़ होता है, क्योंकि वह हर एलिमेंट को सिर्फ़ उतना ही पीछे ले जाता है जितनी ज़रूरत हो। इसीलिए पाइथन का सॉर्ट भी अंदर से ऐसे ही मामलों को पहचानकर तेज़ चलता है।\n\nअगर तुम्हें सिर्फ़ एक बार ढूँढना है, तो सॉर्ट करना बेकार है — लीनियर सर्च O(n) में काम कर देगा, जबकि सॉर्ट O(n log n) लेगा। सॉर्ट तब करो जब बार-बार ढूँढना हो। हर बार यह हिसाब लगाओ: एक बार की मेहनत, कितनी बार का फ़ायदा?`,
    ),
    sec(
      H_SUM[0], H_SUM[1], H_SUM[2],
      `Sorting sajana hai, searching dhoondhna hai. Bubble sort simple hai, O(n²) hai, aur "koi swap nahi" wala check use best case mein O(n) bana deta hai. Binary search O(log n) hai, lekin sirf sorted list par. Ek baar search ke liye sort mat karo — linear search kaafi hai. Baar-baar search ke liye sort karo, phir binary search use karo.`,
      `Sorting is arranging, searching is finding. Bubble sort is simple, it is O(n²), and the "no swap happened" check makes its best case O(n). Binary search is O(log n), but only on a sorted list. Do not sort for a single search — linear search is enough. Sort when you must search again and again, and then use binary search.`,
      `सॉर्टिंग सजाना है, सर्चिंग ढूँढना है। बबल सॉर्ट सरल है, O(n²) है, और "कोई स्वैप नहीं" वाला जाँच उसे बेस्ट केस में O(n) बना देता है। बाइनरी सर्च O(log n) है, लेकिन सिर्फ़ सॉर्टेड लिस्ट पर। एक बार सर्च के लिए सॉर्ट मत करो — लीनियर सर्च काफ़ी है। बार-बार सर्च के लिए सॉर्ट करो, फिर बाइनरी सर्च इस्तेमाल करो।`,
    ),
  ],
  diagram: {
    kind: 'flow',
    title: t('Sort karo, phir dhoondho', 'Sort first, then find', 'सॉर्ट करो, फिर ढूँढो'),
    nodes: [
      { t: t('Unsorted list', 'Unsorted list', 'अनसॉर्टेड लिस्ट'), s: t('linear search O(n)', 'linear search O(n)', 'लीनियर सर्च O(n)') },
      { t: t('Sort karo', 'Sort it', 'सॉर्ट करो'), s: t('bubble O(n²), merge O(n log n)', 'bubble O(n²), merge O(n log n)', 'बबल O(n²), मर्ज O(n log n)') },
      { t: t('Sorted list', 'Sorted list', 'सॉर्टेड लिस्ट'), s: t('binary search O(log n)', 'binary search O(log n)', 'बाइनरी सर्च O(log n)') },
      { t: t('Ek baar search? Sort mat karo', 'Searching only once? Do not sort', 'एक बार सर्च? सॉर्ट मत करो'), s: t('linear search hi kaafi hai', 'linear search is enough', 'लीनियर सर्च ही काफ़ी है') },
    ],
  },
  codeExamples: [
    {
      title: t('Insertion sort — lagbhag sorted list ke liye', 'Insertion sort — for an almost sorted list', 'इन्सर्शन सॉर्ट — लगभग सॉर्टेड लिस्ट के लिए'),
      language: 'python',
      code: `def insertion_sort(nums):
    for i in range(1, len(nums)):
        key = nums[i]
        j = i - 1
        while j >= 0 and nums[j] > key:
            nums[j + 1] = nums[j]
            j -= 1
        nums[j + 1] = key
    return nums

print(insertion_sort([1, 2, 4, 3, 5]))`,
      output: '[1, 2, 3, 4, 5]',
      note: t(
        'Sirf 4 galat jagah par tha, to sirf ek shift hua. Lagbhag sorted data par insertion sort bubble sort se tez hota hai.',
        'Only 4 was in the wrong place, so only one shift happened. On almost sorted data, insertion sort is faster than bubble sort.',
        'सिर्फ़ 4 गलत जगह पर था, तो सिर्फ़ एक शिफ़्ट हुआ। लगभग सॉर्टेड डेटा पर इन्सर्शन सॉर्ट बबल सॉर्ट से तेज़ होता है।',
      ),
    },
  ],
  mcqs: [
    {
      q: t(
        'Bubble sort [5, 2, 9, 1] par pehla pass khatam hone ke baad list kaisi hogi?',
        'After the first pass of bubble sort on [5, 2, 9, 1], what will the list look like?',
        'बबल सॉर्ट [5, 2, 9, 1] पर पहला पास खत्म होने के बाद लिस्ट कैसी होगी?',
      ),
      opts: [
        t('[2, 5, 1, 9]', '[2, 5, 1, 9]', '[2, 5, 1, 9]'),
        t('[1, 2, 5, 9]', '[1, 2, 5, 9]', '[1, 2, 5, 9]'),
        t('[5, 2, 1, 9]', '[5, 2, 1, 9]', '[5, 2, 1, 9]'),
        t('[2, 1, 5, 9]', '[2, 1, 5, 9]', '[2, 1, 5, 9]'),
      ],
      ans: 0,
      expl: t(
        'Pehle pass mein 5-2 swap hote hain, 5-9 sahi rehte hain, 9-1 swap hote hain. Sabse bada 9 aakhir mein pahunch jata hai: [2, 5, 1, 9].',
        'In the first pass, 5 and 2 swap, 5 and 9 stay as they are, and 9 and 1 swap. The biggest, 9, reaches the end: [2, 5, 1, 9].',
        'पहले पास में 5-2 स्वैप होते हैं, 5-9 सही रहते हैं, 9-1 स्वैप होते हैं। सबसे बड़ा 9 आखिर में पहुँच जाता है: [2, 5, 1, 9]।',
      ),
    },
    {
      q: t(
        'Sorted list [10, 20, 30, 40, 50, 60] mein binary search se 20 dhoondho. Pehla mid kaun sa hoga?',
        'In the sorted list [10, 20, 30, 40, 50, 60], find 20 with binary search. What is the first middle value?',
        'सॉर्टेड लिस्ट [10, 20, 30, 40, 50, 60] में बाइनरी सर्च से 20 ढूँढो। पहला mid कौन सा होगा?',
      ),
      opts: [
        t('10', '10', '10'),
        t('20', '20', '20'),
        t('30', '30', '30'),
        t('40', '40', '40'),
      ],
      ans: 2,
      expl: t(
        'low = 0, high = 5, mid = 2, index 2 par 30 hai. 20 isse chhota hai, to right aadha kaat kar left mein dhoondho.',
        'low is 0, high is 5, mid is 2, and index 2 holds 30. 20 is smaller than 30, so the right half is dropped and the search moves left.',
        'low = 0, high = 5, mid = 2, इंडेक्स 2 पर 30 है। 20 इससे छोटा है, तो दायाँ आधा काटकर बाईं तरफ़ ढूँढो।',
      ),
    },
    {
      q: t(
        'Tumhe list mein sirf ek baar ek number dhoondhna hai. Sabse samajhdaar tareeka kya hai?',
        'You need to find a number in a list only once. What is the most sensible method?',
        'तुम्हें लिस्ट में सिर्फ़ एक बार एक नंबर ढूँढना है। सबसे समझदार तरीका क्या है?',
      ),
      opts: [
        t('Pehle sort karo, phir binary search', 'Sort first, then binary search', 'पहले सॉर्ट करो, फिर बाइनरी सर्च'),
        t('Linear search — sort karne ka kharcha bekaar hai', 'Linear search — the cost of sorting is a waste', 'लीनियर सर्च — सॉर्ट करने का खर्च बेकार है'),
        t('Bubble sort teen baar chalao', 'Run bubble sort three times', 'बबल सॉर्ट तीन बार चलाओ'),
        t('List ko ulta karke dhoondho', 'Turn the list around and then search', 'लिस्ट को उल्टा करके ढूँढो'),
      ],
      ans: 1,
      expl: t(
        'Sort karna O(n log n) leta hai, linear search O(n). Ek baar ke search ke liye sort ka kharcha fayde se bada hai.',
        'Sorting takes O(n log n), while linear search takes O(n). For one search, the cost of sorting is bigger than the benefit.',
        'सॉर्ट करना O(n log n) लेता है, लीनियर सर्च O(n)। एक बार के सर्च के लिए सॉर्ट का खर्च फ़ायदे से बड़ा है।',
      ),
    },
    {
      q: t(
        'Bubble sort mein "koi swap nahi hua to ruk jao" wala check kya karta hai?',
        'What does the "stop if no swap happened" check do in bubble sort?',
        'बबल सॉर्ट में "कोई स्वैप नहीं हुआ तो रुक जाओ" वाला जाँच क्या करता है?',
      ),
      opts: [
        t('Worst case ko O(n) bana deta hai', 'It makes the worst case O(n)', 'वर्स्ट केस को O(n) बना देता है'),
        t('Pehle se sorted list par best case O(n) bana deta hai', 'It makes the best case O(n) on an already sorted list', 'पहले से सॉर्टेड लिस्ट पर बेस्ट केस O(n) बना देता है'),
        t('List ko ulta sort karta hai', 'It sorts the list in reverse', 'लिस्ट को उल्टा सॉर्ट करता है'),
        t('Kuch nahi karta', 'It does nothing', 'कुछ नहीं करता'),
      ],
      ans: 1,
      expl: t(
        'Agar ek pass mein koi swap nahi hua, to list pehle se sorted hai. Ruk jaane se best case mein sirf ek pass chalta hai — O(n).',
        'If no swap happened in a pass, the list is already sorted. Stopping means only one pass runs in the best case — O(n).',
        'अगर एक पास में कोई स्वैप नहीं हुआ, तो लिस्ट पहले से सॉर्टेड है। रुक जाने से बेस्ट केस में सिर्फ़ एक पास चलता है — O(n)।',
      ),
    },
  ],
  practice: {
    title: t('Binary search likho — index dhoondho', 'Write a binary search — find the index', 'बाइनरी सर्च लिखो — इंडेक्स ढूँढो'),
    task: t(
      'Ek function binary_search(nums, target) likho jo sorted list mein target ka index return kare, aur na mile to -1 return kare. Starter mein nums = [11, 22, 33, 44, 55, 66] hai. Done tab maanenge jab 44 ke liye 3 aur 50 ke liye -1 print ho. Hint: low aur high se mid nikaalo, har baar aadha hissa kaato.',
      'Write a function binary_search(nums, target) that returns the index of the target in a sorted list, and returns -1 if it is not there. The starter has nums = [11, 22, 33, 44, 55, 66]. You are done when it prints 3 for 44 and -1 for 50. Hint: work out mid from low and high, and throw away half each time.',
      'एक फ़ंक्शन binary_search(nums, target) लिखो जो सॉर्टेड लिस्ट में target का इंडेक्स लौटाए, और न मिले तो -1 लौटाए। स्टार्टर में nums = [11, 22, 33, 44, 55, 66] है। तब पूरा मानेंगे जब 44 के लिए 3 और 50 के लिए -1 प्रिंट हो। संकेत: low और high से mid निकालो, हर बार आधा हिस्सा काटो।',
    ),
    language: 'python',
    starter: `def binary_search(nums, target):
    low, high = 0, len(nums) - 1
    while low <= high:
        mid = (low + high) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

nums = [11, 22, 33, 44, 55, 66]
print(binary_search(nums, 44))
print(binary_search(nums, 50))`,
    expected: '3\n-1',
  },
  readMinutes: 11,
};

const dsaGraphs: Article = {
  id: 'dsa-graphs',
  subjectId: 'dsa',
  title: t(
    'Graphs — Nodes, Edges, Adjacency List/Matrix, BFS aur DFS',
    'Graphs — Nodes, Edges, Adjacency List/Matrix, BFS and DFS'
  ),
  summary: t(
    'Graphs ko zero se samjho: nodes aur edges kya hote hain, adjacency matrix aur adjacency list mein graph kaise store karte hain, aur BFS/DFS algorithms ka step-by-step dry run kaise kaam karta hai.',
    'Learn graphs from scratch: understand nodes and edges, how to store graphs using adjacency matrices and adjacency lists, and how BFS and DFS algorithms work through complete step-by-step dry runs.'
  ),
  sections: [
    {
      heading: t(
        '1. Graph Kya Hai? (Nodes, Edges, Directed vs Undirected)',
        '1. What Is a Graph? (Nodes, Edges, Directed vs Undirected)'
      ),
      body: t(
        `Abhi tak humne Arrays, Linked Lists aur Trees dekhe. Array aur Linked List mein data ek seedhi line (linear order) mein hota hai. Tree mein ek hierarchy hoti hai jahan ek root node upar hota hai aur baaki nodes uske neeche parent-child relation mein hote hain. Par agar humein aisi cheezein connect karni hon jahan koi fixed top-bottom hierarchy na ho aur koi bhi element kisi bhi doosre element se jud sake, toh wahan Graph kaam aata hai.

Ek Graph do cheezon se milkar banta hai:
1. Nodes (jinhe Vertices bhi bolte hain, singular: Vertex): Yeh woh points ya objects hain jinhe hum store kar rahe hain. Hum apni examples mein nodes ko simple numbers 0, 1, 2, 3, 4 se represent karenge.
2. Edges: Do nodes ko jodne wali line ya connection ko edge bolte hain. Agar node 0 aur node 1 ke beech connection hai, toh hum bolenge unke beech ek edge hai: (0, 1).

Graphs mainly do tarah ke hote hain:
- Undirected Graph: Ismein edge ka koi direction nahi hota. Agar node 0 aur node 1 jude hain, toh aap 0 se 1 par bhi ja sakte ho aur 1 se 0 par bhi. Jaise do doston ka relation: agar A, B ka dost hai toh B bhi A ka dost hai.
- Directed Graph (Digraph): Ismein har edge par ek arrow (direction) hota hai. Agar edge 0 -> 1 hai, iska matlab aap 0 se 1 par ja sakte ho, par 1 se wapas 0 par nahi aa sakte jab tak 1 -> 0 ki alag edge na ho.

Ek aur chhota term yaad rakho: Degree. Kisi node se kitni edges judi hain, usse us node ki degree kehte hain. Directed graph mein aane wali edges ko In-degree aur bahar jaane wali edges ko Out-degree bolte hain. Jab hum graph ke saare nodes ko ek-ek karke visit karte hain, toh us process ko Graph Traversal kehte hain, jiske do sabse bade tarike hain: BFS (Breadth-First Search) aur DFS (Depth-First Search).`,
        `So far we have seen Arrays, Linked Lists, and Trees. In an Array or Linked List, items sit in a single straight line. In a Tree, items follow a strict top-to-bottom parent-child hierarchy with no loops. However, when we need to model connections where any item can link to any other item freely—including loops and cycles—we use a Graph.

A Graph is made of two core parts:
1. Nodes (also called Vertices, singular: Vertex): These are the individual points or entities in the structure. In our code examples, we will label nodes with simple integers such as 0, 1, 2, 3, and 4.
2. Edges: An edge is a link connecting two nodes. If node 0 and node 1 are connected, we write that edge as the pair (0, 1).

Graphs come in two main types based on edge direction:
- Undirected Graph: Edges have no arrow or direction. An edge between 0 and 1 works like a two-way street: you can travel from 0 to 1 and from 1 to 0.
- Directed Graph (Digraph): Every edge has a strict one-way direction. An edge 0 -> 1 lets you move from node 0 to node 1, but you cannot go back from 1 to 0 unless a separate edge 1 -> 0 also exists.

Another useful term is Degree. In an undirected graph, the degree of a node is the number of edges attached to it. In a directed graph, we split this into In-degree (the number of incoming edges pointing to the node) and Out-degree (the number of outgoing edges leaving the node). Visiting nodes systematically across edges is called Graph Traversal, and its two foundational methods are Breadth-First Search (BFS) and Depth-First Search (DFS).`
      )
    },
    {
      heading: t(
        '2. Real-Life Examples: Maps, Social Networks aur Metro Routes',
        '2. Real-Life Examples: Maps, Social Networks, and Metro Routes'
      ),
      body: t(
        `Graphs sirf textbook ka topic nahi hai, aapke phone ki har badi app andar se graph chala rahi hai:

1. Metro Routes aur Google Maps: Delhi ya Mumbai Metro ka map socho. Har metro station ek Node hai (jaise Rajiv Chowk = 0, Kashmere Gate = 1, Mandi House = 2). Do stations ke beech jo patri (track) hai woh Edge hai. Kyunki metro dono taraf aati-jaati hai, yeh ek Undirected Graph hai. Par agar aap Google Maps par city roads dekho jahan kuch raaste "One-Way" hote hain, toh woh Directed Graph ban jaata hai. Jab aap shortest route dhoondhte ho (kam se kam stations change karke pahunchna), toh background mein BFS jaisa algorithm kaam karta hai.

2. Social Media (WhatsApp / LinkedIn vs Instagram): LinkedIn ya Facebook par jab aap kisi se connect hote ho aur woh request accept karta hai, toh dono ek doosre ke connections ban jaate hain. Yeh Undirected Graph hai. Wahin Instagram par agar Node 0 (aap) ne Node 1 (Virat Kohli) ko follow kiya, toh edge 0 -> 1 bani, par zaroori nahi ki Node 1 bhi aapko wapas follow kare. Isliye Instagram followers ka network ek Directed Graph hai. Jab Instagram aapko "Suggested Friends" (dost ke dost) dikhata hai, toh woh aapke node se 2 steps door wale nodes (Level 2 in BFS) nikaal kar laata hai.

3. Course Prerequisites aur Web Links: Engineering mein "Data Structures" padhne se pehle "Programming in C/Python" aana zaroori hai. Yahan C/Python -> DSA ek directed edge hai. Isi tarah internet par har webpage ek node hai aur uske andar laga hyperlink ek directed edge hai jo doosre page par le jaata hai.`,
        `Graphs are not just a textbook concept; almost every major application you use daily relies on graphs behind the scenes:

1. Metro Routes and Road Maps: Think of a city metro network. Every station is a Node (for example, Station 0, Station 1, Station 2), and every direct rail track between two adjacent stations is an Edge. Because trains travel in both directions between stations, a basic metro map forms an Undirected Graph. By contrast, city road maps on GPS navigation apps include one-way streets, making them Directed Graphs. When you search for a route with the fewest station stops, Breadth-First Search (BFS) finds that path directly.

2. Social Networks (Mutual Friends vs Followers): On platforms like Facebook or LinkedIn, friendships are mutual: if person 0 is connected to person 1, person 1 is automatically connected to person 0. That is an Undirected Graph. On Instagram or X, following is one-way: user 0 can follow user 1 (edge 0 -> 1) without user 1 following user 0 back. That forms a Directed Graph. When a platform recommends "People You May Know" (friends of your friends), it runs a graph traversal to find nodes that are exactly two edges away from your node.

3. Course Prerequisites and Web Pages: In a university curriculum, taking "Introduction to Programming" before "Data Structures" is represented as a directed edge from the introductory course to the advanced course. Similarly, the World Wide Web is a massive directed graph where every web page is a node and every clickable link is a directed edge pointing to another page.`
      )
    },
    {
      heading: t(
        '3. Step-by-Step: Adjacency Matrix, Adjacency List, BFS aur DFS Dry Run',
        '3. Step-by-Step: Adjacency Matrix, Adjacency List, BFS, and DFS Dry Run'
      ),
      body: t(
        `Computer ki memory mein graph banane ke do standard tarike hain. Maan lo humare paas 5 nodes hain (0, 1, 2, 3, 4) aur 5 undirected edges hain: (0,1), (0,2), (1,3), (2,4), (3,4).

Tarika 1: Adjacency Matrix (2D Grid)
Hum V x V (yahan 5 x 5) ka ek 2D list banate hain jismein shuru mein sab 0 hota hai. Agar node i aur node j ke beech edge hai, toh matrix[i][j] = 1 kar dete hain. Undirected graph mein matrix[i][j] = 1 ke saath matrix[j][i] = 1 bhi karte hain.
- Fayda: Do nodes ke beech edge hai ya nahi (matrix[1][3] == 1), yeh O(1) time mein turant pata chal jaata hai.
- Nuksaan: Chahe graph mein sirf 2 edges hon, memory hamesha O(V^2) lagti hai. Agar 10,000 nodes hain toh 10,000 x 10,000 = 10 crore cells lagenge!

Tarika 2: Adjacency List (Array of Lists)
Har node ke liye hum sirf uske direct padosiyon (neighbors) ki list banate hain. Jaise humare graph ke liye:
adj[0] = [1, 2]
adj[1] = [0, 3]
adj[2] = [0, 4]
adj[3] = [1, 4]
adj[4] = [2, 3]
- Fayda: Memory sirf O(V + E) lagti hai (jahan V nodes hain aur E edges). Real life ke 95% graphs sparse hote hain (kam edges wale), isliye coding interviews aur projects mein Adjacency List hi sabse zyada use hoti hai.

Ab BFS (Breadth-First Search) ka Line-by-Line Dry Run samjho:
BFS paani mein patthar phenkne se banne wali waves (laharon) ki tarah kaam karta hai. Yeh Queue (First-In, First-Out) use karta hai. Pehle starting node (0), phir 1 kadam door wale nodes (1, 2), phir 2 kadam door wale nodes (3, 4).
Hum do structures rakhte hain: \`visited\` set aur \`queue\` (deque).
- Start: \`visited = {0}\`, \`queue = deque([0])\`, \`order = []\`.
- Iteration 1: \`queue.popleft()\` se \`curr = 0\` nikla. \`order = [0]\`. Node 0 ke neighbors \`adj[0] = [1, 2]\` dekho. Dono \`visited\` mein nahi hain, toh dono ko mark karo aur queue mein daalo: \`visited = {0, 1, 2}\`, \`queue = deque([1, 2])\`.
- Iteration 2: \`queue.popleft()\` se \`curr = 1\` nikla. \`order = [0, 1]\`. Node 1 ke neighbors \`[0, 3]\` hain. 0 pehle se visited hai, 3 naya hai. Toh \`visited = {0, 1, 2, 3}\`, \`queue = deque([2, 3])\`.
- Iteration 3: \`queue.popleft()\` se \`curr = 2\` nikla. \`order = [0, 1, 2]\`. Node 2 ke neighbors \`[0, 4]\` hain. 0 visited hai, 4 naya hai. Toh \`visited = {0, 1, 2, 3, 4}\`, \`queue = deque([3, 4])\`.
- Iteration 4: \`queue.popleft()\` se \`curr = 3\` nikla. \`order = [0, 1, 2, 3]\`. Neighbors \`[1, 4]\` dono visited hain. Queue ab \`deque([4])\` bachi.
- Iteration 5: \`queue.popleft()\` se \`curr = 4\` nikla. \`order = [0, 1, 2, 3, 4]\`. Neighbors \`[2, 3]\` dono visited hain. Queue khali \`deque([])\` ho gayi, loop khatam!

Ab DFS (Depth-First Search) ka Dry Run samjho:
DFS ek bhool-bhulaiya (maze) mein ek raaste par tab tak aage badhta rehta hai jab tak dead-end na aa jaaye, aur phir peeche mudkar (backtrack karke) doosra raasta pakadta hai. Yeh Recursion (Call Stack) use karta hai:
- \`dfs(0)\`: \`visited = {0}\`, \`order = [0]\`. Pehla neighbor 1 hai -> call \`dfs(1)\`.
- \`dfs(1)\`: \`visited = {0, 1}\`, \`order = [0, 1]\`. Neighbors \`[0, 3]\`: 0 visited hai, 3 par jao -> call \`dfs(3)\`.
- \`dfs(3)\`: \`visited = {0, 1, 3}\`, \`order = [0, 1, 3]\`. Neighbors \`[1, 4]\`: 1 visited hai, 4 par jao -> call \`dfs(4)\`.
- \`dfs(4)\`: \`visited = {0, 1, 3, 4}\`, \`order = [0, 1, 3, 4]\`. Neighbors \`[2, 3]\`: 2 unvisited hai -> call \`dfs(2)\`.
- \`dfs(2)\`: \`visited = {0, 1, 3, 4, 2}\`, \`order = [0, 1, 3, 4, 2]\`. Neighbors \`[0, 4]\` dono visited hain. Ab sab calls backtrack hokar return ho jaayengi!`,
        `There are two standard ways to represent a graph in memory. Suppose we have 5 nodes (0, 1, 2, 3, 4) and 5 undirected edges: (0,1), (0,2), (1,3), (2,4), and (3,4).

Method 1: Adjacency Matrix (2D Grid)
We create a V x V (here 5 x 5) 2D table filled with 0s. Whenever an edge connects node i and node j, we set matrix[i][j] = 1. For an undirected graph, we set both matrix[i][j] = 1 and matrix[j][i] = 1.
- Advantage: Checking whether an edge exists between any two nodes (matrix[1][3] == 1) takes O(1) instant time.
- Disadvantage: It always consumes O(V^2) memory regardless of how few edges exist. A graph with 10,000 nodes requires 100,000,000 matrix entries even if it only has 5 edges.

Method 2: Adjacency List (List of Neighbor Lists)
For each node, we store a dynamic list containing only its direct neighbors:
adj[0] = [1, 2]
adj[1] = [0, 3]
adj[2] = [0, 4]
adj[3] = [1, 4]
adj[4] = [2, 3]
- Advantage: It uses only O(V + E) memory (where V is the number of nodes and E is the number of edges). Because most real-world graphs are sparse (few edges relative to V^2), the Adjacency List is the default choice in interviews and production code.

Line-by-Line Dry Run of BFS (Breadth-First Search):
BFS explores a graph in ripples, level by level, using a FIFO Queue (collections.deque). It visits the start node (distance 0), then all nodes at distance 1, then all nodes at distance 2.
We track a \`visited\` set and a \`queue\`:
- Start: \`visited = {0}\`, \`queue = deque([0])\`, \`order = []\`.
- Step 1: Pop \`curr = 0\` from the left of the queue. \`order = [0]\`. Inspect \`adj[0] = [1, 2]\`. Neither 1 nor 2 is in \`visited\`, so mark both visited and append them: \`visited = {0, 1, 2}\`, \`queue = deque([1, 2])\`.
- Step 2: Pop \`curr = 1\`. \`order = [0, 1]\`. Inspect \`adj[1] = [0, 3]\`. Node 0 is already visited; node 3 is unvisited, so mark and enqueue 3: \`visited = {0, 1, 2, 3}\`, \`queue = deque([2, 3])\`.
- Step 3: Pop \`curr = 2\`. \`order = [0, 1, 2]\`. Inspect \`adj[2] = [0, 4]\`. Node 0 is visited; node 4 is unvisited, so mark and enqueue 4: \`visited = {0, 1, 2, 3, 4}\`, \`queue = deque([3, 4])\`.
- Step 4: Pop \`curr = 3\`. \`order = [0, 1, 2, 3]\`. Both neighbors \`[1, 4]\` are already in \`visited\`. Queue becomes \`deque([4])\`.
- Step 5: Pop \`curr = 4\`. \`order = [0, 1, 2, 3, 4]\`. Both neighbors \`[2, 3]\` are already in \`visited\`. Queue is now empty \`deque([])\`, so the loop terminates.

Line-by-Line Dry Run of DFS (Depth-First Search):
DFS dives as deep as possible down one path before backtracking, using recursion (the call stack):
- \`dfs(0)\`: \`visited = {0}\`, \`order = [0]\`. First neighbor of 0 is 1 -> calls \`dfs(1)\`.
- \`dfs(1)\`: \`visited = {0, 1}\`, \`order = [0, 1]\`. Neighbors of 1 are \`[0, 3]\`: 0 is visited, so it moves to 3 -> calls \`dfs(3)\`.
- \`dfs(3)\`: \`visited = {0, 1, 3}\`, \`order = [0, 1, 3]\`. Neighbors of 3 are \`[1, 4]\`: 1 is visited, so it moves to 4 -> calls \`dfs(4)\`.
- \`dfs(4)\`: \`visited = {0, 1, 3, 4}\`, \`order = [0, 1, 3, 4]\`. Neighbors of 4 are \`[2, 3]\`: 2 is unvisited -> calls \`dfs(2)\`.
- \`dfs(2)\`: \`visited = {0, 1, 3, 4, 2}\`, \`order = [0, 1, 3, 4, 2]\`. Both neighbors \`[0, 4]\` are visited, so all recursive calls unwind and finish.`
      ),
      code: {
        title: t(
          'Adjacency Matrix, Adjacency List, BFS aur DFS Ek Saath',
          'Adjacency Matrix, Adjacency List, BFS, and DFS Together'
        ),
        language: 'python',
        code: `from collections import deque

# 5 nodes (0 to 4) and undirected edges
n = 5
edges = [(0, 1), (0, 2), (1, 3), (2, 4), (3, 4)]

# 1. Build Adjacency Matrix
matrix = [[0] * n for _ in range(n)]
# 2. Build Adjacency List
adj = [[] for _ in range(n)]

for u, v in edges:
    matrix[u][v] = 1
    matrix[v][u] = 1
    adj[u].append(v)
    adj[v].append(u)

print("Row 0 of Matrix:", matrix[0])
print("Adj List:", adj)

# 3. BFS Traversal from node 0
visited_bfs = {0}
queue = deque([0])
bfs_order = []

while queue:
    curr = queue.popleft()
    bfs_order.append(curr)
    for nxt in adj[curr]:
        if nxt not in visited_bfs:
            visited_bfs.add(nxt)
            queue.append(nxt)

print("BFS Order:", bfs_order)

# 4. DFS Traversal from node 0
visited_dfs = set()
dfs_order = []

def dfs(node):
    visited_dfs.add(node)
    dfs_order.append(node)
    for nxt in adj[node]:
        if nxt not in visited_dfs:
            dfs(nxt)

dfs(0)
print("DFS Order:", dfs_order)`,
        output: `Row 0 of Matrix: [0, 1, 1, 0, 0]
Adj List: [[1, 2], [0, 3], [0, 4], [1, 4], [2, 3]]
BFS Order: [0, 1, 2, 3, 4]
DFS Order: [0, 1, 3, 4, 2]`
      }
    },
    {
      heading: t(
        '4. Common Mistakes aur Woh Kyun Hoti Hain',
        '4. Common Mistakes and Why They Happen'
      ),
      body: t(
        `Beginners jab pehli baar graph code likhte hain, toh yeh 4 galtiyan sabse zyada hoti hain. Samjho computer andar kya galat karta hai:

Galti 1: \`visited\` set bhool jaana (Infinite Loop / RecursionError)
Tree mein koi cycle nahi hoti, isliye wahan \`visited\` set nahi lagta. Par undirected graph mein agar edge (0, 1) hai, toh \`adj[0]\` mein 1 hai aur \`adj[1]\` mein 0 hai. Agar aap \`visited\` set nahi rakhoge, toh DFS 0 se 1 par jaayega, 1 ka neighbor 0 dekh kar wapas 0 par jaayega, phir 0 se 1 par... aur 0 -> 1 -> 0 -> 1 chalta rahega jab tak Python \`RecursionError: maximum recursion depth exceeded\` dekar crash na ho jaaye!

Galti 2: BFS mein node ko pop karte waqt \`visited\` mark karna (Duplicate Queue Entries)
Bahut students node ko queue mein daalte waqt \`visited.add(nxt)\` nahi karte, balki jab woh \`popleft()\` hota hai tab mark karte hain. Isse kya bura hota hai? Humare upar wale graph mein:
- 0 pop hua, usne 1 aur 2 ko queue mein daala: \`queue = [1, 2]\`.
- Ab 1 pop hua, usne dekha 4 ke paas jaane se pehle 3 hai, toh 3 queue mein gaya: \`queue = [2, 3]\`.
- Jab 2 pop hua, usne 4 ko queue mein daala: \`queue = [3, 4]\`.
- Ab jab 3 pop hua, uska neighbor 4 abhi queue mein baitha hai par pop nahi hua! Kyunki aapne queue mein daalte waqt 4 ko visited mark nahi kiya tha, 3 bhi 4 ko dobara queue mein daal dega (\`queue = [4, 4]\`)! Isse node 4 do baar visit ho jaayega aur bade graphs mein Memory Limit Exceeded (MLE) ya Time Limit Exceeded (TLE) aa jaayega. Hamesha \`queue.append(nxt)\` ke turant saath \`visited.add(nxt)\` karo.

Galti 3: 2D Matrix banate waqt \`[[0] * n] * n\` likhna (Shallow Copy Bug)
Python mein \`[[0] * n] * n\` n alag-alag rows nahi banata, balki ek hi row ke n references bana deta hai! Toh agar aap \`bad_matrix[0][1] = 1\` karoge, toh \`bad_matrix[1][1]\`, \`bad_matrix[2][1]\` sab apne aap 1 ho jaayenge. Hamesha \`[[0] * n for _ in range(n)]\` use karo.

Galti 4: 1-based nodes ko 0-based list mein daalna (\`IndexError\`)
Kai coding questions mein nodes 1 se N tak numbered hote hain (jaise 1, 2, 3, 4, 5). Agar aap \`adj = [[] for _ in range(n)]\` banaoge, toh indices sirf \`0\` se \`n - 1\` (0..4) tak banenge. Jaise hi code \`adj[5]\` access karega, Python \`IndexError: list index out of range\` phenk dega. 1-based nodes ke liye hamesha \`range(n + 1)\` ki list banao.`,
        `When writing graph code for the first time, four bugs appear constantly. Understanding what the computer actually does in memory explains why each mistake happens:

Mistake 1: Forgetting the \`visited\` set (Infinite Loop / RecursionError)
In a binary tree, pointers only go downward, so you cannot revisit an ancestor. In an undirected graph, edge (0, 1) means 1 is in \`adj[0]\` and 0 is in \`adj[1]\`. Without a \`visited\` set, DFS moves from 0 to 1, sees 0 in \`adj[1]\`, moves back to 0, then back to 1 (0 -> 1 -> 0 -> 1) endlessly until Python crashes with \`RecursionError: maximum recursion depth exceeded\`.

Mistake 2: Marking nodes \`visited\` on pop instead of on enqueue in BFS (Duplicate Visits)
Many students add \`visited.add(curr)\` only after \`curr = queue.popleft()\` instead of marking \`nxt\` when pushing it into the queue. Watch what goes wrong in our 5-node graph:
- Node 0 pops and pushes 1 and 2 (\`queue = [1, 2]\`).
- Node 1 pops and pushes 3 (\`queue = [2, 3]\`).
- Node 2 pops and pushes 4 (\`queue = [3, 4]\`).
- Now node 3 pops and inspects its neighbor 4. Because 4 is still sitting in the queue waiting to be popped, it has not been marked visited yet! So node 3 pushes a second copy of 4 into the queue (\`queue = [4, 4]\`). Node 4 gets processed twice. On dense graphs, this blows up the queue size from O(V) to O(E) and causes Time Limit Exceeded. Always mark \`visited.add(nxt)\` at the exact moment you call \`queue.append(nxt)\`.

Mistake 3: Creating a 2D Matrix with \`[[0] * n] * n\` (Shallow Reference Bug)
In Python, multiplying a list of lists (\`* n\`) does not create \`n\` independent rows; it copies the memory reference of the exact same row \`n\` times. Setting \`bad_matrix[0][1] = 1\` mutates column 1 across every single row simultaneously. Always use a list comprehension: \`[[0] * n for _ in range(n)]\`.

Mistake 4: 1-Based Node Labels in a Size-\`n\` List (\`IndexError\`)
Many problem statements number nodes from \`1\` to \`n\` instead of \`0\` to \`n - 1\`. Allocating \`[[] for _ in range(n)]\` only creates indices \`0\` through \`n - 1\`, so accessing node \`n\` via \`adj[n]\` immediately raises \`IndexError: list index out of range\`. For 1-indexed graphs, allocate \`range(n + 1)\`.`
      ),
      code: {
        title: t(
          'Late Visited Bug aur Shallow Matrix Bug ka Live Proof',
          'Live Proof of the Late Visited Bug and Shallow Matrix Bug'
        ),
        language: 'python',
        code: `from collections import deque

adj = [[1, 2], [0, 3], [0, 4], [1, 4], [2, 3]]

# BUG 1: Marking visited on popleft() instead of append()
visited_late = set()
q = deque([0])
order_wrong = []

while q:
    curr = q.popleft()
    visited_late.add(curr)  # Too late! 4 gets pushed by both 2 and 3
    order_wrong.append(curr)
    for nxt in adj[curr]:
        if nxt not in visited_late:
            q.append(nxt)

print("Wrong BFS (4 visited twice):", order_wrong)

# BUG 2: [[0] * 3] * 3 shallow copy trap
bad_matrix = [[0] * 3] * 3
bad_matrix[0][1] = 1
print("Bad Matrix (all rows changed!):", bad_matrix)`,
        output: `Wrong BFS (4 visited twice): [0, 1, 2, 3, 4, 4]
Bad Matrix (all rows changed!): [[0, 1, 0], [0, 1, 0], [0, 1, 0]]`
      }
    },
    {
      heading: t(
        '5. Edge Cases: Empty Graph, Single Node, Disconnected Graph aur Self-Loop',
        '5. Edge Cases: Empty Graph, Single Node, Disconnected Graph, and Self-Loop'
      ),
      body: t(
        `Interviews mein aapka code tab pass hota hai jab woh har corner case (edge case) ko bina fatte handle kare:

1. Empty Graph (0 Nodes): Agar \`n = 0\` hai aur \`adj = []\` hai, toh bina check kiye \`queue = deque([0])\` chalane par \`adj[0]\` \`IndexError\` de dega. Isliye traversal shuru karne se pehle check karo: \`if n == 0: return []\`.

2. Single Node with No Edges (\`n = 1\`, \`adj = [[]]\`): Yahan sirf node 0 hai aur uska koi neighbor nahi hai. BFS queue mein 0 daalega, \`popleft()\` karega, \`for nxt in adj[0]\` loop 0 baar chalega, aur sahi answer \`[0]\` return ho jaayega.

3. Self-Loop (Node khud se juda ho, jaise \`0 -> 0\`) aur Parallel Edges: Agar node 0 par self-loop hai (\`adj[0] = [0, 1]\`), toh kyunki hum shuru mein hi \`visited = {0}\` kar dete hain, jab loop \`nxt = 0\` dekhega toh \`0 not in visited\` False ho jaayega aur code infinite loop mein nahi fansega.

4. Disconnected Graph (Sabse Important Edge Case!):
Maan lo 5 nodes hain, jismein \`0 - 1 - 2\` aapas mein jude hain (Component 1), aur \`3 - 4\` alag aapas mein jude hain (Component 2), par {0, 1, 2} se {3, 4} tak koi pul (edge) nahi hai. Agar aap sirf \`bfs(0)\` chalaoge, toh woh [0, 1, 2] visit karke ruk jaayega — nodes 3 aur 4 kabhi visit hi nahi honge!
Iska ilaaj kya hai? Hum \`0\` se \`n - 1\` tak ek outer \`for\` loop lagate hain. Jo bhi node abhi tak \`visited\` mein nahi hai, wahan se naya BFS start karte hain. Isse saare disconnected tukde (Connected Components) cover ho jaate hain!`,
        `In coding interviews and production systems, your graph code must handle four classic edge cases cleanly:

1. Empty Graph (0 Nodes): If \`n = 0\` and \`adj = []\`, unconditionally starting BFS at node \`0\` crashes on \`adj[0]\` with an \`IndexError\`. Always guard the entry point with \`if not adj: return []\`.

2. Single Isolated Node (\`n = 1\`, \`adj = [[]]\`): Node 0 exists but has zero edges. BFS initializes \`visited = {0}\` and \`queue = deque([0])\`, pops \`0\`, skips the empty \`for nxt in adj[0]\` loop, and cleanly returns \`[0]\`.

3. Self-Loop (An edge from a node to itself, \`0 -> 0\`): Suppose \`adj[0] = [0, 1]\`. Because \`0\` is added to \`visited\` before its neighbors are inspected, the check \`if nxt not in visited\` evaluates to \`False\` when \`nxt == 0\`, preventing a self-loop from re-adding node 0.

4. Disconnected Graph (The Most Frequently Missed Edge Case):
Suppose a 5-node graph has two separate islands (Connected Components): nodes \`0 - 1 - 2\` form one island, and nodes \`3 - 4\` form a second island with no edge connecting the two groups. Running a single \`bfs(0)\` only visits \`[0, 1, 2]\` and completely misses nodes \`3\` and \`4\`.
To guarantee visiting every node in a disconnected graph, wrap your traversal in an outer loop \`for start in range(n):\` and trigger a new BFS/DFS whenever \`start not in visited\`.`
      ),
      code: {
        title: t(
          'Edge Cases: Empty, Single, Self-Loop aur Disconnected Graph',
          'Edge Cases: Empty, Single, Self-Loop, and Disconnected Graph'
        ),
        language: 'python',
        code: `from collections import deque

def bfs_full_graph(adj):
    n = len(adj)
    if n == 0:
        return []
    visited = set()
    components = []
    for start in range(n):
        if start not in visited:
            comp = []
            visited.add(start)
            q = deque([start])
            while q:
                curr = q.popleft()
                comp.append(curr)
                for nxt in adj[curr]:
                    if nxt not in visited:
                        visited.add(nxt)
                        q.append(nxt)
            components.append(comp)
    return components

# Case 1: Empty graph
print("Empty:", bfs_full_graph([]))

# Case 2: Single node with self-loop (0 -> 0)
print("Self-loop:", bfs_full_graph([[0]]))

# Case 3: Disconnected graph: {0, 1, 2} and {3, 4}
disconnected_adj = [[1, 2], [0], [0], [4], [3]]
print("Disconnected components:", bfs_full_graph(disconnected_adj))`,
        output: `Empty: []
Self-loop: [[0]]
Disconnected components: [[0, 1, 2], [3, 4]]`
      }
    },
    {
      heading: t(
        '6. What If You Change This? (BFS vs DFS Path, Undirected vs Directed)',
        '6. What If You Change This? (BFS vs DFS Path, Undirected vs Directed)'
      ),
      body: t(
        `Chalo ab apne code mein do chhote badlaav (experiments) karke dekhte hain ki output kaise aur kyun badalta hai:

Experiment 1: Queue (\`popleft()\`) ki jagah Stack (\`pop()\`) kar dein toh kya hoga? (Shortest Path Test)
Maan lo humare graph mein edges hain: (0, 1), (0, 2), (1, 2), (1, 3), (2, 3), aur humein node 0 se node 3 tak pahunchna hai.
- Jab hum BFS (\`queue.popleft()\`) chalate hain, toh woh level-by-level chalta hai: 0 -> 1 -> 3 (sirf 2 edges). BFS hamesha unweighted graph mein sabse chhota raasta (Shortest Path) deta hai!
- Par agar hum usi graph par DFS chalayein, toh woh 0 se 1 par jaayega, 1 ka pehla unvisited neighbor 2 dekhega toh 2 par chala jaayega, aur 2 se 3 par pahunchega: path banega \`[0, 1, 2, 3]\` (3 edges!). Yani DFS shortest path ki guarantee nahi deta.

Experiment 2: Undirected graph ko Directed bana dein (\`adj[v].append(u)\` hata dein) toh kya hoga?
Agar hum edges \`[(0, 1), (2, 0), (2, 3), (3, 4)]\` mein sirf one-way edges \`u -> v\` rakhein (\`0 -> 1\`, \`2 -> 0\`, \`2 -> 3\`, \`3 -> 4\`):
- Undirected graph mein node 0 se start karne par saare 5 nodes [0, 1, 2, 3, 4] the, kyunki \`0 - 2\` two-way tha.
- Par Directed graph mein \`2 -> 0\` ka arrow 2 se 0 ki taraf hai, 0 se 2 ki taraf nahi! Isliye jab aap node 0 se BFS chalaoge, toh aap sirf \`0 -> 1\` tak ja paoge (\`[0, 1]\`), aur nodes 2, 3, 4 tak kabhi nahi pahunch paoge! Neeche code mein dono experiments ka asli output dekho.`,
        `Let us run two concrete experiments by modifying small parts of our code and observing how the output changes:

Experiment 1: BFS vs DFS when finding a path from node 0 to node 3
Suppose our graph has edges (0, 1), (0, 2), (1, 2), (1, 3), and (2, 3), so \`adj[1] = [0, 2, 3]\`. We want a path from node 0 to node 3.
- BFS (\`queue.popleft()\`) explores nodes in order of distance from 0. From 0 it visits distance-1 neighbors 1 and 2, and from 1 it immediately reaches 3, giving the path \`[0, 1, 3]\` (2 edges). In any unweighted graph, BFS is guaranteed to find the shortest path (minimum number of edges).
- DFS dives into the first available neighbor at every step: from 0 it goes to 1, from 1 its first unvisited neighbor in \`[0, 2, 3]\` is 2, and from 2 it reaches 3, producing the longer path \`[0, 1, 2, 3]\` (3 edges). DFS finds a valid path, but does not guarantee the shortest path.

Experiment 2: Removing \`adj[v].append(u)\` (Undirected vs Directed Reachability)
Consider the edge list \`[(0, 1), (2, 0), (2, 3), (3, 4)]\`:
- If we add both \`adj[u].append(v)\` and \`adj[v].append(u)\` (Undirected), starting BFS from node 0 reaches all 5 nodes: \`[0, 1, 2, 3, 4]\`.
- If we remove \`adj[v].append(u)\` so edges are strictly one-way \`u -> v\` (Directed), the edge \`2 -> 0\` points into 0, not out of 0. Starting BFS from node 0 can only follow \`0 -> 1\`, returning \`[0, 1]\`. Nodes 2, 3, and 4 become unreachable from node 0.`
      ),
      code: {
        title: t(
          'Experiment: BFS vs DFS Path Length aur Undirected vs Directed',
          'Experiment: BFS vs DFS Path Length and Undirected vs Directed'
        ),
        language: 'python',
        code: `from collections import deque

# Experiment 1: Shortest path from 0 to 3
adj_exp1 = [[1, 2], [0, 2, 3], [0, 1, 3], [1, 2]]

# BFS Path from 0 to 3
q = deque([(0, [0])])
visited = {0}
bfs_path = []
while q:
    node, path = q.popleft()
    if node == 3:
        bfs_path = path
        break
    for nxt in adj_exp1[node]:
        if nxt not in visited:
            visited.add(nxt)
            q.append((nxt, path + [nxt]))

# DFS Path from 0 to 3
visited_dfs = set()
def dfs_find(node, path):
    if node == 3:
        return path
    visited_dfs.add(node)
    for nxt in adj_exp1[node]:
        if nxt not in visited_dfs:
            res = dfs_find(nxt, path + [nxt])
            if res:
                return res
    return None

print("BFS Path (shortest):", bfs_path)
print("DFS Path (not shortest):", dfs_find(0, [0]))

# Experiment 2: Undirected vs Directed from node 0
edges2 = [(0, 1), (2, 0), (2, 3), (3, 4)]
undir = [[] for _ in range(5)]
dir_g = [[] for _ in range(5)]
for u, v in edges2:
    undir[u].append(v)
    undir[v].append(u)
    dir_g[u].append(v)  # One-way only

def reach_from_0(adj):
    vis = {0}
    q = deque([0])
    out = []
    while q:
        c = q.popleft()
        out.append(c)
        for nxt in adj[c]:
            if nxt not in vis:
                vis.add(nxt)
                q.append(nxt)
    return out

print("Undirected from 0:", reach_from_0(undir))
print("Directed from 0:", reach_from_0(dir_g))`,
        output: `BFS Path (shortest): [0, 1, 3]
DFS Path (not shortest): [0, 1, 2, 3]
Undirected from 0: [0, 1, 2, 3, 4]
Directed from 0: [0, 1]`
      }
    },
    {
      heading: t(
        '7. Summary aur Quick Comparison',
        '7. Summary and Quick Comparison'
      ),
      body: t(
        `Chalo poore chapter ko ek baar crisp points mein revise karte hain:

1. Graph Basics: Graph mein Nodes (V) aur Edges (E) hote hain. Undirected graph mein edges two-way hoti hain (\`u <-> v\`), jabki Directed graph mein one-way (\`u -> v\`).
2. Storage Choice:
   - Adjacency Matrix: \`O(V^2)\` space leta hai, edge lookup \`O(1)\` mein karta hai. Sirf tab use karo jab \`V\` bahut chhota ho (jaise \`V <= 500\`) ya graph bahut dense ho.
   - Adjacency List: \`O(V + E)\` space leta hai. Lagbhag har coding problem aur real-world network ke liye best hai.
3. BFS (Breadth-First Search):
   - Queue (\`collections.deque\`) use karta hai.
   - Level-by-level visit karta hai aur unweighted graph mein Shortest Path ki guarantee deta hai.
   - Time Complexity: \`O(V + E)\`, Space Complexity: \`O(V)\`.
4. DFS (Depth-First Search):
   - Recursion ya Stack use karta hai, ek raaste ki gehraai (depth) mein poora jaata hai aur phir backtrack karta hai.
   - Cycle detection, connected components, topological sort aur maze solving mein bahut kaam aata hai.
   - Time Complexity: \`O(V + E)\`, Space Complexity: \`O(V)\`.
5. Golden Rule: BFS mein neighbor ko queue mein \`append()\` karte hi usi line par \`visited.add()\` karo, aur disconnected graphs ke liye hamesha \`0\` se \`n - 1\` tak outer loop lagao.`,
        `Here is a concise review of everything we covered:

1. Graph Fundamentals: A graph consists of Nodes (V) and Edges (E). Undirected edges allow two-way movement (\`u <-> v\`), whereas Directed edges allow one-way movement (\`u -> v\`).
2. Choosing a Representation:
   - Adjacency Matrix: Takes \`O(V^2)\` memory and checks edge existence in \`O(1)\` time. Use it only for small or dense graphs.
   - Adjacency List: Takes \`O(V + E)\` memory and iterates over actual neighbors efficiently. Use it as your default representation.
3. Breadth-First Search (BFS):
   - Uses a FIFO Queue (\`collections.deque\`).
   - Explores level by level and guarantees the shortest path (fewest edges) in an unweighted graph.
   - Time Complexity: \`O(V + E)\`, Space Complexity: \`O(V)\`.
4. Depth-First Search (DFS):
   - Uses Recursion (the call stack) or an explicit Stack to explore deep along each branch before backtracking.
   - Ideal for cycle detection, finding connected components, and exploring mazes.
   - Time Complexity: \`O(V + E)\`, Space Complexity: \`O(V)\`.
5. Golden Rules: Always mark a node \`visited\` at the exact moment you enqueue it in BFS, and always loop over all nodes \`0\` to \`n - 1\` when a graph might be disconnected.`
      )
    }
  ],
  diagram: {
    kind: 'boxes',
    title: t(
      '5-Node Graph par BFS Level-by-Level Kaise Chalta Hai',
      'How BFS Visits a 5-Node Graph Level by Level'
    ),
    caption: t(
      'Edges: (0,1), (0,2), (1,3), (2,4), (3,4). Node 0 se start karne par BFS distance (levels) ke hisaab se nodes visit karta hai.',
      'Edges: (0,1), (0,2), (1,3), (2,4), (3,4). Starting at Node 0, BFS visits nodes strictly in order of their distance (level) from Node 0.'
    ),
    nodes: [
      {
        t: t('Level 0: Node 0 (Start)', 'Level 0: Node 0 (Start)'),
        s: t(
          'Distance 0 | Queue: [0] | Visited: {0} -> Neighbors 1 aur 2 ko queue mein daala',
          'Distance 0 | Queue: [0] | Visited: {0} -> Enqueues direct neighbors 1 and 2'
        )
      },
      {
        t: t('Level 1 (Left): Node 1', 'Level 1 (Left): Node 1'),
        s: t(
          'Distance 1 from 0 | Queue: [1, 2] -> 1 pop hua, naya neighbor 3 queue mein gaya',
          'Distance 1 from 0 | Queue: [1, 2] -> Pops 1, enqueues unvisited neighbor 3'
        )
      },
      {
        t: t('Level 1 (Right): Node 2', 'Level 1 (Right): Node 2'),
        s: t(
          'Distance 1 from 0 | Queue: [2, 3] -> 2 pop hua, naya neighbor 4 queue mein gaya',
          'Distance 1 from 0 | Queue: [2, 3] -> Pops 2, enqueues unvisited neighbor 4'
        )
      },
      {
        t: t('Level 2 (Left): Node 3', 'Level 2 (Left): Node 3'),
        s: t(
          'Distance 2 from 0 | Queue: [3, 4] -> 3 pop hua, neighbors (1, 4) pehle se visited hain',
          'Distance 2 from 0 | Queue: [3, 4] -> Pops 3, neighbors (1, 4) are already visited'
        )
      },
      {
        t: t('Level 2 (Right): Node 4', 'Level 2 (Right): Node 4'),
        s: t(
          'Distance 2 from 0 | Queue: [4] -> 4 pop hua, queue khali, Final BFS: [0, 1, 2, 3, 4]',
          'Distance 2 from 0 | Queue: [4] -> Pops 4, queue empty, Final BFS: [0, 1, 2, 3, 4]'
        )
      }
    ]
  },
  codeExamples: [
    {
      title: t(
        'BFS se Har Node ka Shortest Distance (Levels) Nikaalna',
        'Finding Shortest Distance (Levels) to Every Node Using BFS'
      ),
      language: 'python',
      code: `from collections import deque

# Graph: 0 connected to 1, 2; 1 to 3; 2 to 4; 3 to 4
adj = [[1, 2], [0, 3], [0, 4], [1, 4], [2, 3]]
n = len(adj)

dist = [-1] * n
dist[0] = 0
queue = deque([0])

while queue:
    curr = queue.popleft()
    for nxt in adj[curr]:
        if dist[nxt] == -1:  # Not visited yet
            dist[nxt] = dist[curr] + 1
            queue.append(nxt)

for node in range(n):
    print(f"Node {node} is at distance {dist[node]} from Node 0")`,
      output: `Node 0 is at distance 0 from Node 0
Node 1 is at distance 1 from Node 0
Node 2 is at distance 1 from Node 0
Node 3 is at distance 2 from Node 0
Node 4 is at distance 2 from Node 0`
    },
    {
      title: t(
        'Recursive DFS ke Har Step (Enter aur Backtrack) ka Trace',
        'Tracing Every Step (Enter and Backtrack) of Recursive DFS'
      ),
      language: 'python',
      code: `adj = [[1, 2], [0, 3], [0], [1]]
visited = set()

def dfs_trace(node):
    visited.add(node)
    print(f"Enter node {node}")
    for nxt in adj[node]:
        if nxt not in visited:
            dfs_trace(nxt)
    print(f"Backtrack from node {node}")

dfs_trace(0)`,
      output: `Enter node 0
Enter node 1
Enter node 3
Backtrack from node 3
Backtrack from node 1
Enter node 2
Backtrack from node 2
Backtrack from node 0`
    }
  ],
  mcqs: [
    {
      q: t(
        'Agar adj = [[1, 2], [0, 3], [0, 3], [1, 2]] hai aur hum node 0 se standard BFS chalate hain (jahan queue mein append karte waqt visited mark hota hai), toh visit order kya print hoga?',
        'Given adj = [[1, 2], [0, 3], [0, 3], [1, 2]], what visit order will standard BFS print when starting from node 0 (marking nodes visited upon enqueue)?'
      ),
      opts: [
        t('[0, 1, 2, 3]', '[0, 1, 2, 3]'),
        t('[0, 1, 3, 2]', '[0, 1, 3, 2]'),
        t('[0, 2, 1, 3]', '[0, 2, 1, 3]'),
        t('[0, 1, 2, 3, 3]', '[0, 1, 2, 3, 3]')
      ],
      ans: 0,
      expl: t(
        'Node 0 pop hokar 1 aur 2 ko queue mein daalta hai (queue=[1, 2]). Phir 1 pop hokar 3 ko queue mein daalta hai aur visited mark karta hai (queue=[2, 3]). Jab 2 pop hota hai, 3 pehle se visited hai, isliye final order [0, 1, 2, 3] aata hai.',
        'Node 0 pops and enqueues 1 and 2 (queue=[1, 2]). Next, 1 pops and enqueues 3 while marking 3 visited (queue=[2, 3]). When 2 pops, 3 is already visited, resulting in [0, 1, 2, 3].'
      )
    },
    {
      q: t(
        'Usi graph adj = [[1, 2], [0, 3], [0, 3], [1, 2]] par agar hum node 0 se recursive DFS chalayein, toh visit order kya hoga?',
        'On the same graph adj = [[1, 2], [0, 3], [0, 3], [1, 2]], what visit order will recursive DFS produce starting from node 0?'
      ),
      opts: [
        t('[0, 1, 2, 3]', '[0, 1, 2, 3]'),
        t('[0, 1, 3, 2]', '[0, 1, 3, 2]'),
        t('[0, 3, 1, 2]', '[0, 3, 1, 2]'),
        t('[0, 2, 3, 1]', '[0, 2, 3, 1]')
      ],
      ans: 1,
      expl: t(
        'DFS 0 se pehle neighbor 1 par jaata hai, 1 se unvisited neighbor 3 par jaata hai, aur 3 (`adj[3] = [1, 2]`) se unvisited neighbor 2 par jaata hai. Isliye order [0, 1, 3, 2] banta hai.',
        'DFS starts at 0, visits its first neighbor 1, then moves from 1 to unvisited neighbor 3, and from 3 (adj[3] = [1, 2]) moves directly to unvisited neighbor 2, producing [0, 1, 3, 2].'
      )
    },
    {
      q: t(
        'Agar BFS mein hum visited.add(node) ko queue.append() ke bajaye sirf queue.popleft() ke waqt karein, toh graph adj = [[1, 2], [0, 3], [0, 3], [1, 2]] mein kya hoga?',
        'If we call visited.add(node) only when popping from the queue instead of when appending, what happens on adj = [[1, 2], [0, 3], [0, 3], [1, 2]] starting at 0?'
      ),
      opts: [
        t('Code RecursionError dekar crash ho jaayega', 'The code crashes with a RecursionError'),
        t('Node 3 queue mein do baar push hoga aur output [0, 1, 2, 3, 3] aayega', 'Node 3 is pushed into the queue twice and the output becomes [0, 1, 2, 3, 3]'),
        t('Node 3 kabhi visit nahi hoga', 'Node 3 is never visited'),
        t('Output [0, 1, 2, 3] hi rahega, koi farak nahi padega', 'The output stays [0, 1, 2, 3] with no difference')
      ],
      ans: 1,
      expl: t(
        'Jab 1 pop hota hai toh woh 3 ko queue mein daalta hai, par 3 abhi visited mark nahi hua. Agle step mein jab 2 pop hota hai, toh woh bhi 3 ko unvisited dekh kar dobara queue mein daal deta hai, jisse [0, 1, 2, 3, 3] banta hai.',
        'When node 1 pops, it appends node 3 to the queue without marking 3 visited. When node 2 pops next, 3 is still not in visited, so node 2 appends a second copy of 3, producing [0, 1, 2, 3, 3].'
      )
    },
    {
      q: t(
        'Ek graph mein 10,000 nodes (V = 10,000) aur sirf 15,000 edges (E = 15,000) hain. Adjacency Matrix aur Adjacency List mein se kaunsi representation memory bachayegi aur kyun?',
        'A graph has 10,000 nodes (V = 10,000) and only 15,000 edges (E = 15,000). Which representation saves more memory and why?'
      ),
      opts: [
        t('Adjacency Matrix, kyunki woh O(1) lookup deta hai', 'Adjacency Matrix, because it provides O(1) edge lookup'),
        t('Adjacency List, kyunki woh V^2 (10 crore) cells ke bajaye sirf O(V + E) space leti hai', 'Adjacency List, because it uses O(V + E) space instead of V^2 (100,000,000) matrix cells'),
        t('Dono barabar memory lengi', 'Both representations use the exact same amount of memory'),
        t('Adjacency Matrix, kyunki sparse graph mein 0 store karna free hota hai', 'Adjacency Matrix, because storing 0s in a sparse graph takes no memory')
      ],
      ans: 1,
      expl: t(
        'Adjacency Matrix ko 10,000 x 10,000 = 10,00,00,000 (10 crore) integers store karne padenge, jabki Adjacency List sirf 10,000 lists aur 30,000 neighbor entries (O(V + E)) store karegi.',
        'An Adjacency Matrix allocates 10,000 x 10,000 = 100,000,000 cells, whereas an Adjacency List stores only 10,000 list headers and 30,000 neighbor integers (O(V + E)).'
      )
    },
    {
      q: t(
        '5 nodes (0 se 4) ke ek directed graph mein sirf 3 edges hain: 0 -> 1, 1 -> 2, aur 3 -> 4. Agar hum sirf node 0 se BFS chalayein, toh kitne nodes visit honge?',
        'A directed graph with 5 nodes (0 to 4) has only 3 directed edges: 0 -> 1, 1 -> 2, and 3 -> 4. If we run BFS starting only from node 0, how many nodes are visited?'
      ),
      opts: [
        t('Saare 5 nodes (0, 1, 2, 3, 4)', 'All 5 nodes (0, 1, 2, 3, 4)'),
        t('Sirf 1 node (0)', 'Only 1 node (0)'),
        t('Sirf 3 nodes (0, 1, 2)', 'Only 3 nodes (0, 1, 2)'),
        t('Sirf 2 nodes (3, 4)', 'Only 2 nodes (3, 4)')
      ],
      ans: 2,
      expl: t(
        'Node 0 se hum 0 -> 1 -> 2 tak ja sakte hain, par {0, 1, 2} se {3, 4} tak koi edge nahi hai. Isliye bina outer loop ke sirf 3 nodes (0, 1, 2) visit honge.',
        'From node 0, BFS can follow the directed edges 0 -> 1 -> 2, but no edge connects {0, 1, 2} to {3, 4}, so only the 3 nodes (0, 1, 2) are visited.'
      )
    }
  ],
  keyNotes: [
    t(
      'Sparse graphs ke liye hamesha Adjacency List (O(V + E) memory) use karo; Adjacency Matrix (O(V^2) memory) sirf chhote ya dense graphs ke liye rakho.',
      'Always prefer an Adjacency List (O(V + E) memory) for sparse graphs; reserve the Adjacency Matrix (O(V^2) memory) for small or dense graphs.'
    ),
    t(
      'BFS Queue (deque) use karke level-by-level chalta hai aur unweighted graph mein Shortest Path (minimum edges) ki guarantee deta hai.',
      'BFS uses a FIFO Queue (deque) to explore level by level and guarantees the shortest path (minimum edges) in an unweighted graph.'
    ),
    t(
      'BFS mein duplicate visits aur TLE se bachne ke liye node ko queue.append() karte waqt hi visited set mein add karo, popleft() ke waqt nahi.',
      'In BFS, mark each neighbor visited at the exact moment you append it to the queue—not when you pop it—to prevent duplicate queue entries.'
    ),
    t(
      'Disconnected graphs ke saare components cover karne ke liye 0 se n - 1 tak har unvisited node se BFS/DFS trigger karo.',
      'To traverse all components of a disconnected graph, loop from 0 to n - 1 and start a BFS/DFS from every node not yet in the visited set.'
    )
  ],
  practice: {
    title: t(
      'Practice: 5-Node Graph par BFS Visit Order Print Karo',
      'Practice: Print the BFS Visit Order on a 5-Node Graph'
    ),
    task: t(
      'Neeche diye gaye 5-node graph (adj = [[1, 3], [0, 2, 4], [1], [0, 4], [1, 3]]) par node 0 se BFS chalao aur visit order ki list print karo. Starter code poora runnable hai — isko run karke verify karo.',
      'Run Breadth-First Search starting from node 0 on the given 5-node graph (adj = [[1, 3], [0, 2, 4], [1], [0, 4], [1, 3]]) and print the visit order list. The starter code is complete and runnable.'
    ),
    language: 'python',
    starter: `from collections import deque

def bfs_from_zero(adj):
    visited = {0}
    queue = deque([0])
    order = []

    while queue:
        curr = queue.popleft()
        order.append(curr)
        for nxt in adj[curr]:
            if nxt not in visited:
                visited.add(nxt)
                queue.append(nxt)

    return order

adj = [
    [1, 3],     # Neighbors of node 0
    [0, 2, 4],  # Neighbors of node 1
    [1],        # Neighbors of node 2
    [0, 4],     # Neighbors of node 3
    [1, 3]      # Neighbors of node 4
]

print(bfs_from_zero(adj))`,
    expected: `[0, 1, 3, 2, 4]`
  },
  readMinutes: 12,
};

const dsaHashing: Article = {
  id: 'dsa-hashing',
  subjectId: 'dsa',
  title: t(
    'Hashing — Hash Function, Hash Table, Dict, Collisions aur Two Sum',
    'Hashing — Hash Function, Hash Table, Dict, Collisions, and Two Sum'
  ),
  summary: t(
    'Hashing ko zero se samjho: hash function key ko table index mein kaise badalta hai, Python dict aur set andar se kaise kaam karte hain, collision par chaining aur linear probing kya karte hain, load factor aur rehashing kab hota hai, aur Two Sum jaise interview questions mein dict kaise O(n) solution deta hai.',
    'Learn hashing from scratch: how a hash function turns a key into a table index, how Python dict and set work under the hood, what chaining and linear probing do when keys collide, when load factor triggers rehashing, and how a dict gives an O(n) solution to interview questions like Two Sum.'
  ),
  sections: [
    {
      heading: t(
        '1. Hashing Kya Hai? (Hash Function, Hash Table aur Dict)',
        '1. What Is Hashing? (Hash Function, Hash Table, and Dict)'
      ),
      body: t(
        `Hashing ek aisi technique hai jo kisi bhi key ko ek number mein badal deti hai, aur phir us number ko table ke andar ek jagah (index) ki tarah use karti hai. Socho aapke paas ek bada sa dabba hai jismein 7 khaane (buckets) bane hain, aur aapko 4 numbers store karne hain: 21, 35, 14 aur 28. Agar aap seedha list mein store karo, toh kisi number ko dhoondhne ke liye aapko poori list scan karni padegi. Hashing mein hum ek chhota sa formula lagate hain, jise **hash function** kehte hain. Is article mein hamara hash function hai \`key % 7\`, matlab key ko 7 se bhaag karke remainder lena. 21 % 7 = 0, 35 % 7 = 0, 14 % 7 = 0, 28 % 7 = 0. Har key ka hash 0 aaya, toh saari keys bucket 0 mein chali gayi. Yahi **collision** hai — jab do ya zyada keys ka hash ek hi index par aa jaaye.

Hash function ka kaam sirf index nikaalna hai, aur **hash table** woh table hai jismein keys apne hash index par store hoti hain. Python ka \`dict\` aur \`set\` andar se hash table hi hote hain. Jab aap \`marks = {'Ram': 90, 'Sita': 85}\` likhte ho, toh Python har key ('Ram', 'Sita') ka hash nikaalta hai aur us hash ke hisaab se value ko table mein rakhta hai. Isi liye \`marks['Ram']\` likhte hi answer turant mil jaata hai — Python ko poori dict scan nahi karni padti, woh seedha sahi bucket par jaata hai.

Yahi hashing ki sabse badi taakat hai: average case mein **lookup, insert aur delete — teeno O(1)** time mein hote hain, matlab table mein 10 items hon ya 10 lakh, ek key ko dhoondhne ka time lagbhag ek jaisa rehta hai. List mein aisa nahi hota: list mein kisi value ko dhoondhna O(n) hota hai kyunki worst case mein poori list scan karni padti hai. Isi farak ki wajah se jab bhi humein baar-baar "yeh cheez hai ya nahi" ya "is key ki value kya hai" poochhna ho, hum list ki jagah dict ya set use karte hain.

Ek important baat: hash function **deterministic** hota hai — ek hi key ka hash hamesha ek hi aayega, warna hum value ko dhoondh hi nahi paayenge. Aur ek achhi hash function keys ko table mein **evenly spread** karti hai, taaki ek hi bucket mein sab keys na gir jaayein. Hamara \`key % 7\` wala function is example mein bura nikla kyunki saari keys 7 ke multiples thi, isliye sab ek hi bucket mein gir gayi. Real life mein Python ka hash function zyada smart hai — woh keys ko poori table mein faila deta hai, isliye collisions kam hote hain aur dict fast rehta hai. Agle sections mein hum dekhenge ki collision aane par Python kya karta hai, aur dict kab slow ho jaata hai.`,
        `Hashing is a technique that converts any key into a number and then uses that number as a position (index) inside a table. Imagine a box with 7 slots (buckets) and 4 numbers to store: 21, 35, 14, and 28. If you store them in a plain list, finding any number means scanning the whole list. In hashing, we apply a small formula called a **hash function**. In this article our hash function is \`key % 7\`, which means dividing the key by 7 and taking the remainder. 21 % 7 = 0, 35 % 7 = 0, 14 % 7 = 0, and 28 % 7 = 0. Every key hashed to 0, so all four keys landed in bucket 0. That is a **collision** — when two or more keys hash to the same index.

The hash function only computes the index, and the **hash table** is the table where keys are stored at their hash index. Python's \`dict\` and \`set\` are hash tables under the hood. When you write \`marks = {'Ram': 90, 'Sita': 85}\`, Python computes the hash of every key ('Ram', 'Sita') and places each value in the table according to that hash. That is why \`marks['Ram']\` returns the answer instantly — Python does not scan the whole dict; it jumps straight to the correct bucket.

That is the greatest strength of hashing: on average, **lookup, insert, and delete all take O(1)** time, which means finding a key takes almost the same time whether the table holds 10 items or 1,000,000 items. A list cannot do this: searching a list is O(n) because in the worst case you must scan every element. This difference is why we use a dict or set instead of a list whenever we repeatedly need to ask "does this item exist?" or "what is the value of this key?".

One important point: a hash function is **deterministic** — the same key must always produce the same hash, otherwise we could never find the value again. A good hash function also spreads keys **evenly** across the table so that all keys do not pile into one bucket. Our \`key % 7\` function was bad in this example because all four keys were multiples of 7, so they all fell into the same bucket. In real life, Python's hash function is much smarter — it spreads keys across the whole table, which keeps collisions rare and the dict fast. In the next sections we will see what Python does when a collision does happen, and when a dict becomes slow.`
      )
    },
    {
      heading: t(
        '2. Real-Life Examples: Phone Contacts, Word Counting aur Caching',
        '2. Real-Life Examples: Phone Contacts, Word Counting, and Caching'
      ),
      body: t(
        `Hashing aapki roz ki zindagi mein har jagah hai, bas aapko dikhai nahi deta. Sabse seedha example hai **phone contacts**. Aapke phone mein 2,000 contacts hain. Jab aap "Rahul" search karte ho, toh phone poori list ek-ek karke scan nahi karta — woh naam ka hash nikaal kar seedha sahi jagah par jaata hai aur number dikha deta hai. Agar phone har baar 2,000 naam scan karta, toh har search mein der lagti. Contacts app andar se ek hash table ki tarah kaam karti hai: naam key hai, number value hai.

Doosra example hai **word counting**. Maan lo aapke paas ek bada paragraph hai aur aapko batana hai ki har word kitni baar aaya. List se karoge toh har word ke liye poori list scan karni padegi — bahut slow. Dict se aap ek hi pass mein kaam khatam kar dete ho: har word ko key banao aur uski count ko value. Word pehli baar aaye toh count 1, dobara aaye toh count badha do. Dict mein \`counts[word]\` dekhna O(1) hota hai, isliye poora paragraph ginne mein sirf O(n) time lagta hai, jahan n total words hain. Interview mein yeh pattern baar-baar aata hai — "first non-repeating character", "most frequent word", "check if two strings are anagrams" — sab ke peeche yahi dict counting hai.

Teesra example hai **caching aur memoization**. Jab koi function baar-baar ek hi input par chalta hai, toh hum uska result ek dict mein save kar lete hain: input key, result value. Agli baar wahi input aaye toh dobara calculate karne ki jagah dict se result nikaal lo. Ise **memoization** kehte hain, aur yeh dynamic programming ki jaan hai — Fibonacci jaise recursive functions ko exponential se linear time mein laane ka yahi tareeka hai. Browser bhi visited websites ko cache karta hai, aur database bhi frequently poochhe jaane wale queries ke results ko hash table mein rakhta hai.

Ek aur jagah jahan hashing chhup kar kaam karta hai woh hai **password storage**. Websites aapka password seedha store nahi karti — woh password ka hash store karti hain. Jab aap login karte ho, toh typed password ka hash nikaal kar stored hash se compare kiya jaata hai. Hash one-way hota hai: hash se original password wapas nahi nikaala ja sakta. Isliye agar database leak bhi ho jaaye, toh chor ko sirf hash milta hai, password nahi. Yeh hashing ka ek alag use hai — yahan hash function ko index ke liye nahi, security ke liye use kiya jaata hai. Aapko dono uses ka farak samajhna chahiye: hash table mein hash se jagah milti hai, password hashing mein hash se pehchan hoti hai.`,
        `Hashing is everywhere in your daily life, even though you never see it. The simplest example is **phone contacts**. Your phone holds 2,000 contacts. When you search for "Rahul", the phone does not scan all 2,000 names one by one — it hashes the name, jumps straight to the right place, and shows the number. If the phone scanned 2,000 names on every search, every search would feel slow. A contacts app works like a hash table inside: the name is the key and the number is the value.

A second example is **word counting**. Suppose you have a long paragraph and must report how many times each word appears. With a list you would scan the whole list for every word — very slow. With a dict you finish the job in a single pass: make each word a key and its count the value. The first time a word appears, set its count to 1; every later time, increase the count. Looking up \`counts[word]\` in a dict is O(1), so counting the whole paragraph takes only O(n) time, where n is the total number of words. This pattern appears again and again in interviews — "first non-repeating character", "most frequent word", "check if two strings are anagrams" — and dict counting sits behind all of them.

A third example is **caching and memoization**. When a function runs repeatedly on the same input, we save its result in a dict: the input is the key and the result is the value. The next time the same input arrives, we fetch the result from the dict instead of computing it again. This is called **memoization**, and it is the heart of dynamic programming — it is how recursive functions like Fibonacci go from exponential time to linear time. Browsers cache visited websites, and databases keep the results of frequently asked queries in hash tables too.

One more place where hashing works quietly is **password storage**. Websites do not store your password directly — they store the hash of your password. When you log in, the typed password is hashed and compared with the stored hash. A hash is one-way: you cannot recover the original password from the hash. So even if the database leaks, a thief only gets hashes, not passwords. This is a different use of hashing — here the hash is used for security, not for finding a position. You should understand the difference between the two uses: in a hash table the hash gives you a location, while in password hashing the hash gives you an identity check.`
      )
    },
    {
      heading: t(
        '3. Step-by-Step: Size 7 ki Table Haath se Banana aur Two Sum ka Dry Run',
        '3. Step-by-Step: Building a Size 7 Table by Hand and a Two Sum Dry Run'
      ),
      body: t(
        `Ab hum ek hash table ko haath se banakar dekhenge, taaki chaining bilkul clear ho jaaye. Table ka size 7 hai, matlab buckets 0 se 6 tak hain. Hash function hai \`key % 7\`. Keys hain 21, 35, 14 aur 28. Pehle har key ka hash nikaalte hain: 21 % 7 = 0, 35 % 7 = 0, 14 % 7 = 0, 28 % 7 = 0. Chaaro keys ka hash 0 aaya. Aisa isliye hua kyunki chaaro keys 7 ke multiples hain — 21 = 7 x 3, 35 = 7 x 5, 14 = 7 x 2, 28 = 7 x 4. Yeh ek bahut bura hash function hota agar keys hamesha aisi hoti, par seekhne ke liye yeh perfect hai kyunki isse collision saaf dikhai deta hai.

Ab insert karte hain, ek-ek karke:
- **21 insert karo:** hash 0 hai, bucket 0 khaali hai. 21 bucket 0 mein chala gaya. Bucket 0 = [21].
- **35 insert karo:** hash 0 hai, par bucket 0 mein pehle se 21 hai. Yeh **collision** hai. Chaining mein hum 35 ko bucket 0 ki list mein peeche jod dete hain. Bucket 0 = [21, 35].
- **14 insert karo:** hash phir 0, bucket 0 mein pehle se [21, 35] hai. Phir collision, phir chaining. Bucket 0 = [21, 35, 14].
- **28 insert karo:** hash phir 0. Bucket 0 = [21, 35, 14, 28].

Final table mein bucket 0 mein 4 keys ki chain hai, aur buckets 1 se 6 poori tarah khaali hain. Ab agar aapko 35 dhoondhna hai, toh aap hash nikaalte ho (35 % 7 = 0), bucket 0 par jaate ho, aur uski chain ko scan karte ho: 21 nahi, 35 mil gaya. Chain mein 4 items hain, isliye search mein 4 steps lage — yeh O(n) ho gaya, O(1) nahi. Yahi woh point hai jo interviewer poochhta hai: collision badhne par hash table list jaisi slow ho jaati hai. Iska solution hai achha hash function aur **rehashing** — jab load factor badh jaaye, toh table ko bada karke saari keys dobara hash karo, taaki keys phir se fail jaayein.

Ab doosra worked example: **Two Sum**. Problem hai nums = [2, 7, 11, 15] aur target = 9. Aise do numbers dhoondho jinka sum 9 ho. List wale tareeke mein aap har pair check karte — O(n^2) time. Dict wale tareeke mein aap ek hi pass mein kaam khatam kar dete ho. Idea simple hai: har number ke liye poochho, "target minus number" pehle dikha hai kya? Dict \`seen\` mein hum woh numbers rakhte hain jo ab tak dekhe hain, unke index ke saath.
- **i = 0, num = 2:** need = 9 - 2 = 7. \`seen\` abhi khaali hai {}, usmein 7 nahi hai. Toh 2 ko store karo: \`seen = {2: 0}\`.
- **i = 1, num = 7:** need = 9 - 7 = 2. \`seen\` mein 2 hai, uska index 0 hai. Mil gaya! Answer hai indices (0, 1), kyunki nums[0] + nums[1] = 2 + 7 = 9.
Loop yahin ruk gaya — 11 aur 15 ko dekhne ki zaroorat hi nahi padi. Har step mein dict lookup O(1) hai, isliye poora solution **O(n) time aur O(n) space** mein chalta hai. Yahi pattern interview mein baar-baar aata hai: "kya complement pehle dikha hai?" — jab bhi yeh sawaal ho, dict nikaalo. Neeche wala code upar wali table banane ka process print karta hai, isko line-by-line padho.`,
        `Now let us build a hash table by hand so that chaining becomes completely clear. The table size is 7, so the buckets are numbered 0 to 6. The hash function is \`key % 7\`. The keys are 21, 35, 14, and 28. First compute the hash of every key: 21 % 7 = 0, 35 % 7 = 0, 14 % 7 = 0, and 28 % 7 = 0. All four keys hash to 0. That happened because all four keys are multiples of 7 — 21 = 7 x 3, 35 = 7 x 5, 14 = 7 x 2, and 28 = 7 x 4. This would be a terrible hash function if keys were always like this, but for learning it is perfect because the collision is completely visible.

Now insert the keys one by one:
- **Insert 21:** the hash is 0 and bucket 0 is empty. 21 goes into bucket 0. Bucket 0 = [21].
- **Insert 35:** the hash is 0, but bucket 0 already holds 21. This is a **collision**. With chaining, we append 35 to the list inside bucket 0. Bucket 0 = [21, 35].
- **Insert 14:** the hash is 0 again, and bucket 0 already holds [21, 35]. Another collision, another chain link. Bucket 0 = [21, 35, 14].
- **Insert 28:** the hash is 0 again. Bucket 0 = [21, 35, 14, 28].

In the final table, bucket 0 holds a chain of 4 keys, and buckets 1 to 6 are completely empty. Now suppose you must find 35. You compute the hash (35 % 7 = 0), go to bucket 0, and scan its chain: 21 is not it, 35 is found. The chain has 4 items, so the search took 4 steps — that is O(n), not O(1). This is exactly the point interviewers ask about: as collisions grow, a hash table becomes as slow as a list. The fix is a good hash function plus **rehashing** — when the load factor grows, make the table bigger and hash every key again so the keys spread out once more.

Now the second worked example: **Two Sum**. The problem gives nums = [2, 7, 11, 15] and target = 9. Find two numbers whose sum is 9. The list approach checks every pair — O(n^2) time. The dict approach finishes the job in a single pass. The idea is simple: for every number, ask "has target minus this number appeared before?" The dict \`seen\` stores the numbers we have already visited, together with their index.
- **i = 0, num = 2:** need = 9 - 2 = 7. \`seen\` is still empty {}, so 7 is not in it. Store 2: \`seen = {2: 0}\`.
- **i = 1, num = 7:** need = 9 - 7 = 2. \`seen\` contains 2, at index 0. Found it! The answer is indices (0, 1), because nums[0] + nums[1] = 2 + 7 = 9.
The loop stops right here — 11 and 15 never even need to be looked at. Every step uses an O(1) dict lookup, so the whole solution runs in **O(n) time and O(n) space**. This pattern appears again and again in interviews: "has the complement appeared before?" — whenever that is the question, reach for a dict. The code below prints this table-building process; read it line by line.`
      ),
      code: {
        title: t(
          'Chaining: Size 7 ki Table mein 21, 35, 14, 28 Insert Karna',
          'Chaining: Inserting 21, 35, 14, 28 into a Size 7 Table'
        ),
        language: 'python',
        code: `# Hash function: key % 7 (table size 7)
# Buckets: 7 khaali lists, collision par chaining

table = [[] for _ in range(7)]

def hash_key(key):
    return key % 7

def insert(key):
    index = hash_key(key)
    table[index].append(key)
    print(f"key {key} -> bucket {index} : {table[index]}")

for key in [21, 35, 14, 28]:
    insert(key)

print()
print("Final table:")
for i, bucket in enumerate(table):
    print(f"bucket {i}: {bucket}")`,
        output: `key 21 -> bucket 0 : [21]
key 35 -> bucket 0 : [21, 35]
key 14 -> bucket 0 : [21, 35, 14]
key 28 -> bucket 0 : [21, 35, 14, 28]

Final table:
bucket 0: [21, 35, 14, 28]
bucket 1: []
bucket 2: []
bucket 3: []
bucket 4: []
bucket 5: []
bucket 6: []`
      }
    },
    {
      heading: t(
        '4. Common Mistakes: Unhashable Keys, O(1) ka Galat Matlab aur Key Badalna',
        '4. Common Mistakes: Unhashable Keys, Misreading O(1), and Changing a Key'
      ),
      body: t(
        `Hashing mein sabse zyada galtiyan teen cheezon par hoti hain, aur teeno ke peeche ek hi wajah hai — hash ka matlab theek se samajhna nahi.

**Galti 1: List ko dict key banana.** Beginners aksar \`d = {[1, 2]: 'x'}\` likh dete hain aur Python turant error deta hai: \`TypeError: unhashable type: 'list'\`. Kyun? Kyunki dict key ka hash nikaal kar usse bucket mein rakhta hai, aur hash tabhi stable rehta hai jab key kabhi change na ho. List **mutable** hoti hai — uske andar ke items badal sakte hain. Agar list key ban jaaye aur baad mein list change ho jaaye, toh uska hash bhi badal jaayega, aur dict apni hi value ko dhoondh nahi paayega. Isliye Python sirf **hashable** (immutable) cheezon ko key banne deta hai: string, number, tuple. Tuple key ban sakta hai kyunki tuple change nahi hota — \`d[(1, 2)] = 'x'\` bilkul chalega. Yaad rakhne ka tareeka: agar cheez badal sakti hai, toh woh key nahi ban sakti.

**Galti 2: O(1) ko guarantee samajh lena.** Log aksar kehte hain "dict lookup hamesha O(1) hota hai" — yeh aadha sach hai. Dict lookup **average case** mein O(1) hota hai, **worst case** mein O(n). Worst case tab aata hai jab saari keys ek hi bucket mein gir jaayein, jaise hamare size 7 wale example mein chaaro keys bucket 0 mein gir gayi thi. Tab search ko poori chain scan karni padti hai. Real life mein Python ka hash function achha hai, isliye aisa kam hota hai, par interviewer yahi poochhta hai: "dict kab slow ho jaata hai?" Answer hai — jab hash function bura ho ya attacker jaan-boojh kar colliding keys bhej de. Isi liye load factor par nazar rakhi jaati hai.

**Galti 3: Key ko insert ke baad badal dena.** Maan lo aapne kisi object ko key banaya aur baad mein us object ko mutate kar diya. Ab uska hash badal gaya, par dict mein woh purane hash wale bucket mein pada hai. Aap us key se value dhoondhoge toh dict naye hash wale bucket mein dekhega aur bolega "key nahi mili" — jabki value andar hi hai. Python mein yeh galti tuple ke andar list rakhne se hoti hai: \`t = ([1, 2], 3)\` — tuple immutable hai par uske andar ki list mutable hai, isliye poora tuple unhashable ho jaata hai aur key ban hi nahi sakta. Isi liye hamesha poori tarah immutable keys use karo.

**Galti 4: Dict ko sorted samajh lena.** Python 3.7 ke baad se dict **insertion order** yaad rakhta hai — jis order mein keys daali, usi order mein iteration hoti hai. Par yeh sorted order nahi hai. \`{'b': 1, 'a': 2}\` ko iterate karoge toh 'b' pehle aayega, 'a' baad mein. Agar sorted chahiye toh \`sorted(d)\` likhna padega. Interview mein is confusion se galat answer aata hai, isliye order aur sorted ka farak yaad rakho.`,
        `The most common hashing mistakes come from three misunderstandings, and all three trace back to one thing — not fully understanding what a hash means.

**Mistake 1: Using a list as a dict key.** Beginners often write \`d = {[1, 2]: 'x'}\` and Python immediately raises \`TypeError: unhashable type: 'list'\`. Why? Because a dict hashes the key and stores it in a bucket, and the hash only stays valid if the key never changes. A list is **mutable** — its contents can change. If a list became a key and later changed, its hash would change too, and the dict would be unable to find its own value. That is why Python only allows **hashable** (immutable) things as keys: strings, numbers, and tuples. A tuple works as a key because it never changes — \`d[(1, 2)] = 'x'\` runs fine. The rule to remember: if a thing can change, it cannot be a key.

**Mistake 2: Treating O(1) as a guarantee.** People often say "dict lookup is always O(1)" — that is only half true. Dict lookup is O(1) in the **average case** and O(n) in the **worst case**. The worst case arrives when all keys fall into the same bucket, exactly like our size 7 example where all four keys landed in bucket 0. Then a search must scan the whole chain. In real life Python's hash function is good, so this rarely happens, but interviewers ask exactly this: "when does a dict become slow?" The answer is — when the hash function is bad, or when an attacker deliberately sends colliding keys. That is why the load factor is watched so closely.

**Mistake 3: Changing a key after inserting it.** Suppose you use some object as a key and later mutate that object. Its hash changes, but the dict still holds it in the old hash's bucket. When you search with that key, the dict looks in the new hash's bucket and reports "key not found" — even though the value is sitting right there inside. In Python this trap appears when you put a list inside a tuple: \`t = ([1, 2], 3)\` — the tuple is immutable, but the list inside it is mutable, so the whole tuple becomes unhashable and cannot be a key at all. Always use fully immutable keys.

**Mistake 4: Assuming a dict is sorted.** Since Python 3.7, a dict remembers **insertion order** — iterating visits keys in the order they were added. But that is not sorted order. Iterating \`{'b': 1, 'a': 2}\` gives 'b' first and 'a' second. If you want sorted order, you must write \`sorted(d)\`. This confusion causes wrong answers in interviews, so remember the difference between insertion order and sorted order.`
      )
    },
    {
      heading: t(
        '5. Edge Cases: Khaali Dict, Sab Keys Ek Bucket mein aur Load Factor 0.7',
        '5. Edge Cases: Empty Dict, All Keys in One Bucket, and Load Factor 0.7'
      ),
      body: t(
        `Edge cases woh situations hain jo normal test mein kabhi nahi aati, par interview aur real bugs mein yahi phansate hain. Hashing ke paanch edge cases yaad rakho.

**1. Khaali dict.** \`d = {}\` par \`d['x']\` likhoge toh \`KeyError\` aayega, kyunki key hai hi nahi. Safe tareeka hai \`d.get('x')\` — key nahi mili toh \`None\` milega, error nahi. Ya \`d.get('x', 0)\` likho, toh default value 0 milegi. Counting wale code mein \`d.get(word, 0) + 1\` yahi pattern use hota hai. Interview mein jab bhi key missing ho sakti ho, \`get\` use karo.

**2. Saari keys ek hi bucket mein.** Hamare size 7 wale example mein yahi hua — 21, 35, 14, 28 chaaro bucket 0 mein gir gayi. Aisi situation mein chaining wali table mein search O(n) ho jaata hai. Real life mein aisa tab hota hai jab hash function bura ho ya keys khaas taur par chuni gayi hon. Python isse bachne ke liye achha hash function use karta hai aur load factor badhne par rehash karta hai, par concept samajhna zaroori hai: hashing ki speed hash function ki quality par depend karti hai, magic par nahi.

**3. Duplicate keys value ko overwrite kar deti hain.** Dict mein ek key sirf ek baar reh sakti hai. Agar aap \`d['a'] = 1\` ke baad \`d['a'] = 2\` likho, toh purani value 1 chali jaayegi aur 'a' ki value 2 ho jaayegi. Yeh bug bhi hai aur feature bhi — counting mein hum isi ka fayda uthate hain, par jab aapko ek key ke saath multiple values rakhni hon, toh value ko list banana padta hai: \`d['a'] = [1, 2]\`. Beginners aksar sochte hain ki do baar insert karne se do entries banengi — nahi, dict mein key unique hoti hai.

**4. Unhashable key (list ya dict).** \`d[[1, 2]] = 'x'\` ya \`d[{'a': 1}] = 'x'\` dono par \`TypeError: unhashable type\` aayega. List aur dict mutable hain, isliye key nahi ban sakte. Solution hai tuple use karna: \`d[(1, 2)] = 'x'\` chal jaata hai. Yaad rakho — set bhi unhashable hai, isliye set ko key nahi bana sakte, par \`frozenset\` bana sakte ho kyunki woh immutable hota hai.

**5. Load factor 0.7 se upar.** **Load factor** matlab table mein bhari hui jagah ka ratio: items / table size. Agar size 7 ki table mein 5 items hain, toh load factor 5/7 = 0.71 hai. Python (aur zyada tar hash table implementations) jab load factor lagbhag 0.7 ko paar karta hai, toh table ko bada kar deta hai — aam taur par double — aur saari keys ko naye size ke hisaab se dobara hash karta hai. Is process ko **rehashing** kehte hain. Rehashing mein ek baar O(n) time lagta hai, par uske baad table phir se khaali-khaali ho jaata hai aur lookup wapas O(1) ho jaata hai. Isi liye dict mein insert kabhi-kabhi achanak slow lag sakta hai — woh rehash ka moment hota hai.`,
        `Edge cases are the situations that never appear in normal tests but cause real bugs and interview traps. Remember these five hashing edge cases.

**1. Empty dict.** Writing \`d['x']\` on \`d = {}\` raises a \`KeyError\` because the key simply is not there. The safe way is \`d.get('x')\` — if the key is missing you get \`None\`, not an error. Or write \`d.get('x', 0)\` to get a default value of 0. Counting code uses exactly this pattern: \`d.get(word, 0) + 1\`. Whenever a key might be missing in an interview, use \`get\`.

**2. All keys in one bucket.** That is what happened in our size 7 example — 21, 35, 14, and 28 all fell into bucket 0. In that situation, searching a chaining table becomes O(n). In real life this happens when the hash function is bad or the keys are deliberately chosen to collide. Python avoids it with a good hash function and by rehashing when the load factor grows, but the concept matters: hashing speed depends on the quality of the hash function, not on magic.

**3. Duplicate keys overwrite the value.** A dict holds each key only once. If you write \`d['a'] = 1\` and then \`d['a'] = 2\`, the old value 1 is gone and 'a' now holds 2. This is both a bug source and a feature — counting relies on it, but when you need several values under one key, you must make the value a list: \`d['a'] = [1, 2]\`. Beginners often think inserting twice creates two entries — it does not; keys in a dict are unique.

**4. Unhashable key (list or dict).** Both \`d[[1, 2]] = 'x'\` and \`d[{'a': 1}] = 'x'\` raise \`TypeError: unhashable type\`. Lists and dicts are mutable, so they cannot be keys. The fix is to use a tuple: \`d[(1, 2)] = 'x'\` works fine. Remember — a set is unhashable too, so a set cannot be a key, but a \`frozenset\` can, because it is immutable.

**5. Load factor above 0.7.** The **load factor** is the ratio of filled space in the table: items / table size. If a size 7 table holds 5 items, the load factor is 5/7 = 0.71. Python (and most hash table implementations) grows the table — usually doubling it — when the load factor passes roughly 0.7, and re-hashes every key for the new size. This process is called **rehashing**. Rehashing costs O(n) time once, but afterwards the table is spacious again and lookups return to O(1). That is why inserting into a dict can occasionally feel suddenly slow — that is the rehash moment.`
      )
    },
    {
      heading: t(
        '6. What-If: Dict vs List, Chaining vs Linear Probing aur Rehashing',
        '6. What-If: Dict vs List, Chaining vs Linear Probing, and Rehashing'
      ),
      body: t(
        `Ab hum "what-if" sawaal poochhte hain — yahi woh sawaal hain jo interviewer poochhta hai.

**What if: dict ki jagah list use kar lein?** Word counting wala kaam list se karne ki koshish karo: har word ke liye poori list mein dhoondho ki woh pehle aaya hai ya nahi. Har word par O(n) scan, total O(n^2) time. Dict se wahi kaam O(n) mein hota hai kyunki har lookup O(1) hai. Neeche wala code dict se word counting karta hai — isko run karo aur output dekho. Par list hamesha buri nahi hoti: agar aapko order maintain karna hai aur sirf end mein items add karne hain, toh list behtar hai. Dict tab jeetta hai jab aapko baar-baar search, insert ya delete karna ho. Interview mein "kab dict, kab list" ka answer yahi hai: search-heavy kaam mein dict, order-heavy kaam mein list.

**What if: chaining ki jagah linear probing use karein?** Collision handle karne ke do main tareeke hain. **Chaining** mein har bucket mein ek list hoti hai aur colliding keys usi list mein jud jaati hain — yahi humne size 7 wale example mein dekha. **Open addressing** mein har bucket mein sirf ek key rehti hai; collision aane par hum agla khaali bucket dhoondhte hain. **Linear probing** open addressing ka sabse simple tareeka hai: hash 0 par collision hua toh bucket 1 dekho, phir 2, phir 3 — jab tak khaali bucket na mil jaaye. Chaining simple hai aur table full hone par bhi kaam karta hai, par usmein extra memory lagti hai lists ke liye. Linear probing mein memory kam lagti hai par table bharne par **clustering** ho jaata hai — keys ke bade-bade groups ban jaate hain aur search slow ho jaata hai. Python ka dict open addressing ka ek advanced version use karta hai, isliye usmein chaining wali lists nahi dikhti.

**What if: load factor ko ignore kar dein?** Agar table ko kabhi bada na karo aur keys badhti rahein, toh chains lambi hoti jaayengi aur lookup O(n) ki taraf badh jaayega — hash table list ban jaayegi. Isi liye rehashing zaroori hai: jab load factor 0.7 ke aas-paas pahunche, table ko double karo aur saari keys ko naye size se dobara hash karo. Rehashing ek baar mein O(n) time leta hai, par yeh cost saare inserts par **amortized** ho jaati hai — matlab average insert ab bhi O(1) rehta hai. Yeh amortized analysis ka classic example hai, aur interviewer ko yeh sunna pasand hai.

**What if: set chahiye, dict nahi?** Jab sirf yeh check karna ho ki item hai ya nahi, value ki zaroorat na ho, toh \`set\` use karo — woh bhi hash table hi hai, bas value ke bina. \`if x in my_set\` O(1) mein chalta hai, jabki \`if x in my_list\` O(n) mein. Duplicate hatana ho toh \`set(items)\` ek line mein kaam kar deta hai.`,
        `Now let us ask "what-if" questions — these are exactly the questions interviewers ask.

**What if we use a list instead of a dict?** Try word counting with a list: for every word, scan the whole list to check whether it appeared before. Each word costs an O(n) scan, so the total is O(n^2) time. With a dict the same job is O(n), because every lookup is O(1). The code below counts words with a dict — run it and look at the output. But a list is not always worse: if you must keep order and only add items at the end, a list is better. A dict wins when you repeatedly search, insert, or delete. That is the interview answer to "when dict, when list": dict for search-heavy work, list for order-heavy work.

**What if we use linear probing instead of chaining?** There are two main ways to handle a collision. In **chaining**, every bucket holds a list, and colliding keys join that list — that is what we saw in the size 7 example. In **open addressing**, every bucket holds only one key; on a collision you look for the next empty bucket. **Linear probing** is the simplest form of open addressing: if bucket 0 collides, check bucket 1, then 2, then 3, until an empty bucket appears. Chaining is simple and keeps working even when the table is full, but it spends extra memory on the lists. Linear probing uses less memory, but as the table fills up it suffers **clustering** — big groups of keys form together and searches slow down. Python's dict uses an advanced form of open addressing, which is why you never see chaining lists inside it.

**What if we ignore the load factor?** If the table never grows while keys keep arriving, the chains keep getting longer and lookups drift toward O(n) — the hash table becomes a list. That is why rehashing is essential: when the load factor reaches about 0.7, double the table and re-hash every key for the new size. Rehashing costs O(n) time once, but that cost is **amortized** across all inserts — so the average insert still stays O(1). This is a classic example of amortized analysis, and interviewers like hearing it.

**What if you need a set, not a dict?** When you only need to check whether an item exists and do not need a value, use a \`set\` — it is also a hash table, just without values. \`if x in my_set\` runs in O(1), while \`if x in my_list\` runs in O(n). Removing duplicates is one line: \`set(items)\`.`
      ),
      code: {
        title: t(
          'Dict se Word Counting: List se O(n^2), Dict se O(n)',
          'Word Counting with a Dict: O(n^2) with a List, O(n) with a Dict'
        ),
        language: 'python',
        code: `sentence = "ram ne aam khaya ram ne aam khaya ram"
counts = {}

for word in sentence.split():
    if word in counts:
        counts[word] += 1
    else:
        counts[word] = 1

for word in counts:
    print(word, "->", counts[word])`,
        output: `ram -> 3
ne -> 2
aam -> 2
khaya -> 2`
      }
    },
    {
      heading: t(
        '7. Summary: Hashing se Interview Tak ka Poora Picture',
        '7. Summary: The Full Picture, from Hashing to the Interview'
      ),
      body: t(
        `Chalo poora article ek jagah par bandhte hain. **Hashing** ka matlab hai key ko hash function se ek number mein badalna aur us number ko table index ki tarah use karna. **Hash table** mein keys apne hash index par store hoti hain. Python ka \`dict\` aur \`set\` andar se hash table hain, isliye unmein lookup, insert aur delete average case mein **O(1)** hote hain, jabki list mein search O(n) hota hai. Yahi O(1) hashing ki sabse badi jeet hai — aur yahi wajah hai ki counting, caching, memoization aur Two Sum jaise problems mein dict sabse pehla hathiyaar hota hai.

**Collision** tab hota hai jab do keys ka hash ek hi index par aa jaaye. **Chaining** mein bucket ke andar ek list banti hai aur colliding keys usmein jud jaati hain; **linear probing** mein hum agla khaali bucket dhoondhte hain. Collision badhne par search O(n) ki taraf badh jaata hai, isliye achha hash function aur **rehashing** zaroori hai. **Load factor** (items / table size) jab 0.7 ke aas-paas pahunche, toh table double hota hai aur saari keys dobara hash hoti hain — ek baar ka O(n) kharcha, par uske baad lookup wapas O(1).

Keys ke baare mein teen baatein yaad rakho: sirf **hashable** (immutable) cheezein key ban sakti hain — string, number, tuple haan; list, dict, set naa. Duplicate key purani value ko **overwrite** kar deti hai. Aur dict **insertion order** yaad rakhta hai, sorted order nahi. Khaali dict par direct access \`KeyError\` deta hai, isliye \`get\` use karo.

Interview mein hashing ke sawaal aksar ek hi pattern mein aate hain: "kya complement pehle dikha hai?" (Two Sum), "pehla non-repeating character kaunsa hai?", "do strings anagrams hain?", "array mein duplicate hai?" — har ek ka answer ek hi hai: ek dict banao, ek pass mein scan karo, aur har step par O(1) lookup karo. Agar aapko yeh pattern dikhne lag gaya hai, toh hashing aapko aa gaya hai.

Revision ke liye yeh article ek baar phir se is order mein padho: pehle size 7 wali table ko khud haath se banao — 21, 35, 14, 28 ke hash nikaalo aur chain dekho. Phir Two Sum ko bina code dekhe khud trace karo: nums = [2, 7, 11, 15], target = 9. Agar dono dry run bina ruke ho jaayein, toh hashing aapko aa gaya hai. Aakhiri mein 5 key notes ko ek baar zor se padh lo — interview se pehle yahi 5 lines kaafi hain. Agle article mein hum Heaps dekhenge — jahan sabse chhota ya sabse bada element turant nikaalna hota hai, wahan hashing kaam nahi aata aur heap aata hai.`,
        `Let us tie the whole article together. **Hashing** means turning a key into a number with a hash function and using that number as a table index. In a **hash table**, keys are stored at their hash index. Python's \`dict\` and \`set\` are hash tables inside, so lookup, insert, and delete take **O(1)** on average, while searching a list takes O(n). That O(1) is hashing's biggest win — and the reason a dict is the first tool you reach for in counting, caching, memoization, and problems like Two Sum.

A **collision** happens when two keys hash to the same index. In **chaining**, the bucket holds a list and colliding keys join it; in **linear probing**, you look for the next empty bucket. As collisions grow, search drifts toward O(n), so a good hash function and **rehashing** are essential. When the **load factor** (items / table size) reaches about 0.7, the table doubles and every key is re-hashed — a one-time O(n) cost, after which lookups return to O(1).

Remember three things about keys: only **hashable** (immutable) things can be keys — strings, numbers, and tuples yes; lists, dicts, and sets no. A duplicate key **overwrites** the old value. And a dict remembers **insertion order**, not sorted order. Direct access on an empty dict raises a \`KeyError\`, so use \`get\`.

Interview questions on hashing usually follow one pattern: "has the complement appeared before?" (Two Sum), "which is the first non-repeating character?", "are two strings anagrams?", "does the array contain a duplicate?" — the answer to every one is the same: build a dict, scan in a single pass, and use an O(1) lookup at every step. Once you start seeing that pattern, you know hashing.

To revise, read this article once more in this order: first build the size 7 table by hand — compute the hashes of 21, 35, 14, and 28 and draw the chain. Then trace Two Sum without looking at the code: nums = [2, 7, 11, 15], target = 9. If both dry runs go smoothly, you know hashing. Finally, read the 5 key notes out loud once — those 5 lines are enough before an interview. In the next article we will look at Heaps — where you need the smallest or largest element instantly, hashing does not help and a heap does.`
      )
    },
  ],
  diagram: {
    kind: 'boxes',
    title: t(
      'Size 7 ki Hash Table: 21, 35, 14, 28 aur Collision',
      'Size 7 Hash Table: 21, 35, 14, 28 and the Collision'
    ),
    caption: t(
      'Chaaro keys 7 ke multiples hain, isliye sabka hash 0 aaya aur sab bucket 0 ki chain mein gaye',
      'All four keys are multiples of 7, so they all hash to 0 and land in bucket 0 as a chain'
    ),
    nodes: [
      {
        t: t('Hash function: key % 7', 'Hash function: key % 7'),
        s: t(
          '21 % 7 = 0, 35 % 7 = 0, 14 % 7 = 0, 28 % 7 = 0',
          '21 % 7 = 0, 35 % 7 = 0, 14 % 7 = 0, 28 % 7 = 0'
        )
      },
      {
        t: t('Bucket 0: [21, 35, 14, 28]', 'Bucket 0: [21, 35, 14, 28]'),
        s: t(
          'Collision! Chaining se chaaro keys ek hi bucket ki list mein',
          'Collision! Chaining stores all four keys in one bucket list'
        )
      },
      {
        t: t('Buckets 1-6: khaali []', 'Buckets 1-6: empty []'),
        s: t(
          'Koi key yahan nahi aayi, table ka zyada hissa bekaar pada hai',
          'No key landed here, most of the table sits unused'
        )
      },
      {
        t: t('Dict lookup: O(1) average', 'Dict lookup: O(1) average'),
        s: t(
          'Achhe hash par seedha sahi bucket, bura hash par chain scan O(n)',
          'Good hash jumps straight to the bucket, bad hash scans a chain in O(n)'
        )
      },
      {
        t: t('Load factor > 0.7: rehash', 'Load factor > 0.7: rehash'),
        s: t(
          'Table double hoti hai aur saari keys naye size se dobara hash hoti hain',
          'Table doubles and every key is re-hashed for the new size'
        )
      }
    ]
  },  mcqs: [
    {
      q: t(
        'Table size 7 hai aur hash function key % 7 hai. Key 35 kis bucket mein jaayegi?',
        'The table size is 7 and the hash function is key % 7. Which bucket does key 35 go to?'
      ),
      opts: [
        t('Bucket 5', 'Bucket 5'),
        t('Bucket 2', 'Bucket 2'),
        t('Bucket 0', 'Bucket 0'),
        t('Bucket 1', 'Bucket 1')
      ],
      ans: 2,
      expl: t(
        'Sahi jawab: 35 % 7 = 0, isliye 35 bucket 0 mein jaayegi aur wahan pehle se pada 21 se collide karegi.',
        'Correct answer: 35 % 7 = 0, so 35 goes to bucket 0 and collides with 21, which is already there.'
      )
    },
    {
      q: t(
        'Python dict mein ek key ko dhoondhne ka average time complexity kya hota hai?',
        'What is the average time complexity of looking up a key in a Python dict?'
      ),
      opts: [
        t('O(n)', 'O(n)'),
        t('O(log n)', 'O(log n)'),
        t('O(n log n)', 'O(n log n)'),
        t('O(1)', 'O(1)')
      ],
      ans: 3,
      expl: t(
        'Sahi jawab: dict hash se seedha sahi bucket par jaata hai, isliye average lookup O(1) hota hai — worst case O(n) hota hai jab sab keys ek hi bucket mein gir jaayein.',
        'Correct answer: a dict jumps straight to the right bucket using the hash, so average lookup is O(1) — worst case is O(n) when all keys fall into one bucket.'
      )
    },
    {
      q: t(
        'Inmein se kaunsi cheez Python dict ki key ban sakti hai?',
        'Which of these can be a key in a Python dict?'
      ),
      opts: [
        t('List [1, 2]', 'List [1, 2]'),
        t('Tuple (1, 2)', 'Tuple (1, 2)'),
        t('Set {1, 2}', 'Set {1, 2}'),
        t("Dict {'a': 1}", "Dict {'a': 1}")
      ],
      ans: 1,
      expl: t(
        'Sahi jawab: tuple immutable hota hai isliye hashable hai, jabki list, set aur dict mutable hain aur key nahi ban sakte.',
        'Correct answer: a tuple is immutable, so it is hashable, while a list, a set, and a dict are mutable and cannot be keys.'
      )
    },
    {
      q: t(
        'Jab hash table ka load factor 0.7 se upar chala jaaye, toh kya hota hai?',
        'What happens when a hash table load factor goes above 0.7?'
      ),
      opts: [
        t('Table double hoti hai aur saari keys dobara hash hoti hain (rehashing)', 'The table doubles and every key is re-hashed (rehashing)'),
        t('Saari keys delete ho jaati hain', 'All keys are deleted'),
        t('Lookup hamesha ke liye O(n) ho jaata hai', 'Lookup becomes O(n) forever'),
        t('Kuch nahi badalta', 'Nothing changes')
      ],
      ans: 0,
      expl: t(
        'Sahi jawab: load factor badhne par table bada kiya jaata hai aur rehashing se keys phir se fail jaati hain, taaki lookup wapas O(1) ho jaaye.',
        'Correct answer: when the load factor grows, the table is enlarged and rehashing spreads the keys out again, so lookups return to O(1).'
      )
    },
    {
      q: t(
        'Two Sum problem mein dict mein kya store karte hain?',
        'In the Two Sum problem, what do we store in the dict?'
      ),
      opts: [
        t('Saare possible pairs', 'All possible pairs'),
        t('Sorted array', 'The sorted array'),
        t('Ab tak dekhe gaye numbers aur unke index', 'The numbers seen so far and their index'),
        t('Sirf target value', 'Only the target value')
      ],
      ans: 2,
      expl: t(
        'Sahi jawab: har number ke liye check karte hain ki target minus number pehle dikha hai kya, isliye dekhe gaye numbers aur unke index store karte hain.',
        'Correct answer: for each number we check whether target minus that number appeared before, so we store the numbers seen so far and their index.'
      )
    }
  ],
  keyNotes: [
    t(
      'Hash function key ko table index mein badalta hai; achha hash keys ko table mein evenly spread karta hai.',
      'A hash function turns a key into a table index; a good hash spreads keys evenly across the table.'
    ),
    t(
      'Dict aur set ka lookup average O(1) hota hai, worst case O(n) jab sab keys ek hi bucket mein collide karein.',
      'Dict and set lookup is O(1) on average, and O(n) in the worst case when all keys collide in one bucket.'
    ),
    t(
      'Sirf hashable (immutable) cheezein key ban sakti hain — tuple haan, list/dict/set naa.',
      'Only hashable (immutable) things can be keys — a tuple yes, a list, dict, or set no.'
    ),
    t(
      'Load factor = items / table size; 0.7 se upar jaane par table double hoti hai aur rehashing hota hai.',
      'Load factor = items / table size; above 0.7 the table doubles and rehashing happens.'
    ),
    t(
      'Collision chaining (bucket mein list) ya open addressing (agla khaali bucket) se handle hota hai.',
      'A collision is handled by chaining (a list inside the bucket) or open addressing (the next empty bucket).'
    )
  ],
  practice: {
    title: t(
      'Practice: Sabse Zyada Baar Aane Wala Word Dhoondho',
      'Practice: Find the Most Frequent Word'
    ),
    task: t(
      'Neeche diye gaye sentence mein dict se har word ki count nikaalo, phir sabse zyada baar aane wala word aur uski count print karo. Starter code poora runnable hai — isko run karke verify karo ki output expected jaisa aata hai.',
      'Use a dict to count every word in the sentence below, then print the most frequent word and its count. The starter code is complete and runnable — run it and verify the output matches the expected output.'
    ),
    language: 'python',
    starter: `sentence = "chai chai coffee chai juice coffee chai"
counts = {}

for word in sentence.split():
    counts[word] = counts.get(word, 0) + 1

most = None
most_count = 0
for word in counts:
    if counts[word] > most_count:
        most = word
        most_count = counts[word]

print("counts:", counts)
print("Sabse zyada baar:", most, "->", most_count, "baar")`,
    expected: `counts: {'chai': 4, 'coffee': 2, 'juice': 1}
Sabse zyada baar: chai -> 4 baar`
  },
  readMinutes: 12,
};

export const dsa: Subject = {
  id: 'dsa',
  name: t(
    'Data Structures & Algorithms',
    'Data Structures & Algorithms',
    'डेटा स्ट्रक्चर्स और एल्गोरिदम',
  ),
  tagline: t(
    'Data ko sahi se rakho, tez tareeke se dhoondho — interview aur real apps, dono ke liye.',
    'Store data the right way and find it fast — for interviews and real apps alike.',
    'डेटा को सही से रखो, तेज़ तरीके से ढूँढो — इंटरव्यू और असली ऐप्स, दोनों के लिए।',
  ),
  icon: '🧩',
  color: '#a855f7',
  category: 'cse',
  articles: [
    dsaIntro,
    dsaArrays,
    dsaLinkedLists,
    dsaStacksQueues,
    dsaTrees,
    dsaSortingSearching,
    dsaGraphs,
    dsaHashing,
  ],
};
