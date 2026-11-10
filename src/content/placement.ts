// Learn2Pro v2 — Placement Preparation.
// All content written by AI in our own style. The example resume, model
// answers and company guidance are invented here; company round names are
// factual and generic — no cut-offs, salaries or guarantees are claimed.
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

export const placement: Subject = {
  id: 'placement',
  name: {
    hinglish: 'Placement Preparation',
    english: 'Placement Preparation',
    hindi: 'प्लेसमेंट तैयारी',
  },
  tagline: {
    hinglish: 'Resume se lekar final interview tak — har round ki taiyari, step by step.',
    english: 'From resume to final interview — preparation for every round, step by step.',
    hindi: 'रिज़्यूमे से लेकर अंतिम इंटरव्यू तक — हर राउंड की तैयारी, चरण-दर-चरण।',
  },
  icon: '💼',
  color: '#14b8a6',
  category: 'placement',
  articles: [
    {
      id: 'placement-resume',
      subjectId: 'placement',
      title: {
        hinglish: '1-page resume banao — fresher ke liye poora example',
        english: 'Build a 1-page resume — with a full example for a fresher',
        hindi: '1 पेज का रिज़्यूमे बनाओ — फ़्रेशर के लिए पूरा उदाहरण',
      },
      summary: {
        hinglish: 'Recruiter tumhara resume 6 second me scan karta hai. Ek page, ek clear story: kaun ho, kya bana sakte ho, aur kya seekha hai. Is article me ek poora example resume hai — use copy mat karo, apna banao.',
        english: 'A recruiter scans your resume in 6 seconds. One page, one clear story: who you are, what you can build, and what you have learned. This article carries a full example resume — do not copy it, build your own.',
        hindi: 'भर्ती करने वाला तुम्हारा रिज़्यूमे 6 सेकंड में देखता है। एक पेज, एक साफ़ कहानी: तुम कौन हो, क्या बना सकते हो, और क्या सीखा है। इस लेख में एक पूरा उदाहरण रिज़्यूमे है — उसे कॉपी मत करो, अपना बनाओ।',
      },
      sections: [
        s(
          H_WHAT,
          "Resume ek page ka document hai jo recruiter ko 6 second me batata hai: ye ladka ya ladki kaun hai, kya kar sakta hai, aur interview me bulana chahiye ya nahi. Fresher ke resume me 5 hisse hote hain. Pehla: header — naam, phone, email, LinkedIn/GitHub link. Doosra: summary — 2 lines me tum kaun ho aur kya chahte ho. Teesra: skills — languages aur tools jo tum sach me use kar sakte ho. Chautha: projects — 2-3 projects, har ek me kya banaya, kis tool se, aur kya result mila. Paanchva: education — degree, college, saal, aur marks. Fresher ke paas experience nahi hota, isliye projects hi tumhara experience hain. Recruiter ko ye nahi dekhna ki tumne kitne course kiye; use ye dekhna hai ki tumne kya banaya. Ek page ka rule isliye hai kyunki recruiter ke paas 500 resume hote hain — 2 page ka resume woh padhta hi nahi.",
          "A resume is a one-page document that tells a recruiter in 6 seconds: who this person is, what they can do, and whether they should be called for an interview. A fresher's resume has 5 parts. First: the header — name, phone, email, LinkedIn and GitHub links. Second: a summary — in 2 lines, who you are and what you want. Third: skills — languages and tools you can really use. Fourth: projects — 2 to 3 projects, each saying what you built, with which tool, and what result it gave. Fifth: education — degree, college, year, and marks. A fresher has no experience, so projects are your experience. The recruiter does not want to see how many courses you did; they want to see what you built. The one-page rule exists because a recruiter has 500 resumes — a 2-page resume is never read.",
          "रिज़्यूमे एक पेज का दस्तावेज़ है जो भर्ती करने वाले को 6 सेकंड में बताता है: यह लड़का या लड़की कौन है, क्या कर सकता है, और इंटरव्यू में बुलाना चाहिए या नहीं। फ़्रेशर के रिज़्यूमे में 5 हिस्से होते हैं। पहला: हेडर — नाम, फ़ोन, ईमेल, LinkedIn/GitHub लिंक। दूसरा: सारांश — 2 पंक्तियों में तुम कौन हो और क्या चाहते हो। तीसरा: कौशल — भाषाएँ और टूल जो तुम सच में इस्तेमाल कर सकते हो। चौथा: प्रोजेक्ट — 2-3 प्रोजेक्ट, हर एक में क्या बनाया, किस टूल से, और क्या परिणाम मिला। पाँचवाँ: शिक्षा — डिग्री, कॉलेज, साल, और अंक। फ़्रेशर के पास अनुभव नहीं होता, इसलिए प्रोजेक्ट ही तुम्हारा अनुभव हैं। भर्ती करने वाले को यह नहीं देखना कि तुमने कितने कोर्स किए; उसे यह देखना है कि तुमने क्या बनाया। एक पेज का नियम इसलिए है क्योंकि भर्ती करने वाले के पास 500 रिज़्यूमे होते हैं — 2 पेज का रिज़्यूमे वह पढ़ता ही नहीं।",
        ),
        s(
          H_REAL,
          "Socho tum ek dukaan par gaye aur dukaan ke bahar ek board laga hai: 'Yahan sab kuch milta hai — kapde, bartan, bijli ka samaan, dawai, kitaabein.' Tum confuse ho jaoge — ye dukaan kis cheez ki hai? Ab doosri dukaan ka board dekho: 'Yahan sirf school ki kitaabein milti hain.' Tum turant samajh jaoge. Resume bhi ek board hai. Jo student resume me sab kuch likhta hai — 'C, C++, Java, Python, HTML, CSS, JavaScript, React, Node, SQL, MongoDB, AI, ML, blockchain' — woh pehli dukaan jaisa hai: recruiter ko samajh nahi aata ki ye student sach me kya kar sakta hai. Jo student sirf 5-6 skills likhta hai aur har skill ke saath ek project dikhata hai, woh doosri dukaan jaisa hai: clear, focused, aur bharosemand. Recruiter ko 'sab kuch aata hai' nahi chahiye; use 'ye ek kaam achhe se aata hai' chahiye.",
          "Imagine you go to a shop and the board outside says: 'Everything is sold here — clothes, utensils, electrical goods, medicines, books.' You would be confused — what kind of shop is this? Now look at the second shop's board: 'Only school books are sold here.' You understand at once. A resume is also a board. A student who writes everything in the resume — 'C, C++, Java, Python, HTML, CSS, JavaScript, React, Node, SQL, MongoDB, AI, ML, blockchain' — is like the first shop: the recruiter cannot tell what this student can really do. A student who writes only 5 to 6 skills and shows one project for each skill is like the second shop: clear, focused, and trustworthy. The recruiter does not want 'I know everything'; they want 'I can do this one thing well'.",
          "सोचो तुम एक दुकान पर गए और दुकान के बाहर एक बोर्ड लगा है: 'यहाँ सब कुछ मिलता है — कपड़े, बर्तन, बिजली का सामान, दवाई, किताबें।' तुम भ्रमित हो जाओगे — यह दुकान किस चीज़ की है? अब दूसरी दुकान का बोर्ड देखो: 'यहाँ सिर्फ़ स्कूल की किताबें मिलती हैं।' तुम तुरंत समझ जाओगे। रिज़्यूमे भी एक बोर्ड है। जो छात्र रिज़्यूमे में सब कुछ लिखता है — 'C, C++, Java, Python, HTML, CSS, JavaScript, React, Node, SQL, MongoDB, AI, ML, blockchain' — वह पहली दुकान जैसा है: भर्ती करने वाले को समझ नहीं आता कि यह छात्र सच में क्या कर सकता है। जो छात्र सिर्फ़ 5-6 कौशल लिखता है और हर कौशल के साथ एक प्रोजेक्ट दिखाता है, वह दूसरी दुकान जैसा है: साफ़, केंद्रित, और भरोसेमंद। भर्ती करने वाले को 'सब कुछ आता है' नहीं चाहिए; उसे 'यह एक काम अच्छे से आता है' चाहिए।",
        ),
        s(
          H_STEPS,
          "Step 1: header likho — naam bada, neeche phone, email, LinkedIn, GitHub. Step 2: 2-line summary likho — 'B.Tech CSE fresher, Java aur web development me interested, 3 projects banaye hain.' Step 3: skills likho — sirf wohi jo tum interview me prove kar sakte ho. Step 4: 2-3 projects likho, har project 3 lines me: kya banaya, kis tool se, kya result mila. Har bullet 'action verb' se shuru karo — 'Built', 'Created', 'Designed' — aur number daalo jahan ho sake: '500 users', '40% faster'. Step 5: education likho — degree, college, saal, CGPA. Step 6: poora resume ek page me fit karo — font 11 ya 12, margin normal, koi photo nahi, koi rang-biranga design nahi.\n\nPoora example resume — ek fictional student ka (ye example hai, apna resume isse apne details se banao):\n\nAARAV SHARMA\nPhone: +91 98765 43210 | Email: aarav.sharma@example.com | LinkedIn: linkedin.com/in/aaravsharma | GitHub: github.com/aaravsharma\n\nSUMMARY: B.Tech Computer Science fresher (2026) from XYZ Institute of Technology. Interested in Java and web development. Built 3 full projects in React and Java, and solved 250+ DSA problems. Looking for a software developer role where I can learn and ship real features.\n\nSKILLS: Java, Python, JavaScript, React, HTML/CSS, SQL, Git, Data Structures and Algorithms.\n\nPROJECTS:\n1. Expense Tracker Web App (React, Node.js, MongoDB) — Built a web app where users add daily expenses and see monthly charts. 40 users tested it in my college; the app loads the dashboard in under 2 seconds.\n2. Library Management System (Java, MySQL) — Created a desktop app for my college library: issue and return books, search by title, and fine calculation. Used by the librarian for 3 months; 1,200+ books tracked.\n3. Sorting Visualiser (JavaScript, HTML/CSS) — Built a tool that shows bubble sort and merge sort step by step with animation. Shared with 200+ classmates for exam revision.\n\nEDUCATION: B.Tech, Computer Science, XYZ Institute of Technology, 2022–2026, CGPA 7.8/10. Class 12 (CBSE), 2022, 84%. Class 10 (CBSE), 2020, 88%.\n\nCERTIFICATIONS: Google Data Analytics (Coursera), 2025. NPTEL — Programming in Java, 2025.\n\nDekho: har project me 3 cheezein hain — kya banaya, kis tool se, kya result mila. Number hai (40 users, 1,200 books, 200 classmates) — number hi proof hai. Aur poora resume ek page me fit hota hai.",
          "Step 1: write the header — name in big letters, then phone, email, LinkedIn, GitHub. Step 2: write a 2-line summary — 'B.Tech CSE fresher, interested in Java and web development, built 3 projects.' Step 3: write skills — only the ones you can prove in an interview. Step 4: write 2 to 3 projects, each in 3 lines: what you built, with which tool, and what result it gave. Start every bullet with an action verb — 'Built', 'Created', 'Designed' — and add a number wherever you can: '500 users', '40% faster'. Step 5: write education — degree, college, year, CGPA. Step 6: fit the whole resume on one page — font 11 or 12, normal margins, no photo, no colourful design.\n\nA full example resume — for a fictional student (this is an example; build your own resume with your own details):\n\nAARAV SHARMA\nPhone: +91 98765 43210 | Email: aarav.sharma@example.com | LinkedIn: linkedin.com/in/aaravsharma | GitHub: github.com/aaravsharma\n\nSUMMARY: B.Tech Computer Science fresher (2026) from XYZ Institute of Technology. Interested in Java and web development. Built 3 full projects in React and Java, and solved 250+ DSA problems. Looking for a software developer role where I can learn and ship real features.\n\nSKILLS: Java, Python, JavaScript, React, HTML/CSS, SQL, Git, Data Structures and Algorithms.\n\nPROJECTS:\n1. Expense Tracker Web App (React, Node.js, MongoDB) — Built a web app where users add daily expenses and see monthly charts. 40 users tested it in my college; the app loads the dashboard in under 2 seconds.\n2. Library Management System (Java, MySQL) — Created a desktop app for my college library: issue and return books, search by title, and fine calculation. Used by the librarian for 3 months; 1,200+ books tracked.\n3. Sorting Visualiser (JavaScript, HTML/CSS) — Built a tool that shows bubble sort and merge sort step by step with animation. Shared with 200+ classmates for exam revision.\n\nEDUCATION: B.Tech, Computer Science, XYZ Institute of Technology, 2022–2026, CGPA 7.8/10. Class 12 (CBSE), 2022, 84%. Class 10 (CBSE), 2020, 88%.\n\nCERTIFICATIONS: Google Data Analytics (Coursera), 2025. NPTEL — Programming in Java, 2025.\n\nSee: every project has 3 things — what was built, with which tool, and what result it gave. There are numbers (40 users, 1,200 books, 200 classmates) — numbers are the proof. And the whole resume fits on one page.",
          "चरण 1: हेडर लिखो — नाम बड़ा, नीचे फ़ोन, ईमेल, LinkedIn, GitHub। चरण 2: 2 पंक्तियों का सारांश लिखो — 'B.Tech CSE फ़्रेशर, Java और वेब डेवलपमेंट में रुचि, 3 प्रोजेक्ट बनाए हैं।' चरण 3: कौशल लिखो — सिर्फ़ वही जो तुम इंटरव्यू में साबित कर सकते हो। चरण 4: 2-3 प्रोजेक्ट लिखो, हर प्रोजेक्ट 3 पंक्तियों में: क्या बनाया, किस टूल से, क्या परिणाम मिला। हर बुलेट 'एक्शन क्रिया' से शुरू करो — 'Built', 'Created', 'Designed' — और जहाँ हो सके संख्या डालो: '500 users', '40% faster'। चरण 5: शिक्षा लिखो — डिग्री, कॉलेज, साल, CGPA। चरण 6: पूरा रिज़्यूमे एक पेज में फ़िट करो — फ़ॉन्ट 11 या 12, सामान्य मार्जिन, कोई फ़ोटो नहीं, कोई रंग-बिरंगा डिज़ाइन नहीं।\n\nपूरा उदाहरण रिज़्यूमे — एक काल्पनिक छात्र का (यह उदाहरण है, अपना रिज़्यूमे इससे अपने विवरण से बनाओ):\n\nAARAV SHARMA\nPhone: +91 98765 43210 | Email: aarav.sharma@example.com | LinkedIn: linkedin.com/in/aaravsharma | GitHub: github.com/aaravsharma\n\nSUMMARY: B.Tech Computer Science fresher (2026) from XYZ Institute of Technology. Interested in Java and web development. Built 3 full projects in React and Java, and solved 250+ DSA problems. Looking for a software developer role where I can learn and ship real features.\n\nSKILLS: Java, Python, JavaScript, React, HTML/CSS, SQL, Git, Data Structures and Algorithms.\n\nPROJECTS:\n1. Expense Tracker Web App (React, Node.js, MongoDB) — Built a web app where users add daily expenses and see monthly charts. 40 users tested it in my college; the app loads the dashboard in under 2 seconds.\n2. Library Management System (Java, MySQL) — Created a desktop app for my college library: issue and return books, search by title, and fine calculation. Used by the librarian for 3 months; 1,200+ books tracked.\n3. Sorting Visualiser (JavaScript, HTML/CSS) — Built a tool that shows bubble sort and merge sort step by step with animation. Shared with 200+ classmates for exam revision.\n\nEDUCATION: B.Tech, Computer Science, XYZ Institute of Technology, 2022–2026, CGPA 7.8/10. Class 12 (CBSE), 2022, 84%. Class 10 (CBSE), 2020, 88%.\n\nCERTIFICATIONS: Google Data Analytics (Coursera), 2025. NPTEL — Programming in Java, 2025.\n\nदेखो: हर प्रोजेक्ट में 3 चीज़ें हैं — क्या बनाया, किस टूल से, क्या परिणाम मिला। संख्या है (40 users, 1,200 books, 200 classmates) — संख्या ही प्रमाण है। और पूरा रिज़्यूमे एक पेज में फ़िट होता है।",
        ),
        s(
          H_MISTAKES,
          "Galti 1: jhooth likhna — aisi skill likhna jo aati nahi. Aisa kyun hota hai? Kyunki student sochta hai ki zyada skills likhne se selection hoga. Asliyat ulta hai: interviewer wahi skill poochta hai jo resume me likhi hai. Tumne 'Machine Learning' likha aur ek sawaal ka jawab nahi de paye, to interviewer ko lagega ki tum jhooth bolte ho. Galti 2: 'Responsible for' jaise kamzor shabd use karna. 'Responsible for the website' se kuch pata nahi chalta. 'Built the college website with 5 pages' se sab pata chalta hai. Galti 3: photo, date of birth, father ka naam likhna. Ye resume me nahi chahiye — sirf naam, contact, skills, projects, education. Galti 4: spelling aur grammar ki galtiyan. Ek spelling mistake se recruiter ko lagta hai ki tum detail par dhyaan nahi dete. Resume ko 3 baar padho, aur ek dost se bhi padhwao.",
          "Mistake 1: writing lies — listing a skill you do not have. Why does this happen? Because students think more skills mean selection. The truth is the opposite: the interviewer asks about the skills written in the resume. You wrote 'Machine Learning' and cannot answer one question, and the interviewer will think you lie. Mistake 2: using weak words like 'Responsible for'. 'Responsible for the website' says nothing. 'Built the college website with 5 pages' says everything. Mistake 3: adding a photo, date of birth, or father's name. A resume does not need these — only name, contact, skills, projects, education. Mistake 4: spelling and grammar errors. One spelling mistake tells the recruiter you do not pay attention to detail. Read the resume 3 times, and get a friend to read it too.",
          "गलती 1: झूठ लिखना — ऐसी कौशल लिखना जो आती नहीं। ऐसा क्यों होता है? क्योंकि छात्र सोचता है कि ज़्यादा कौशल लिखने से चयन होगा। असलियत उल्टी है: इंटरव्यू लेने वाला वही कौशल पूछता है जो रिज़्यूमे में लिखी है। तुमने 'Machine Learning' लिखा और एक सवाल का जवाब नहीं दे पाए, तो इंटरव्यू लेने वाले को लगेगा कि तुम झूठ बोलते हो। गलती 2: 'Responsible for' जैसे कमज़ोर शब्द इस्तेमाल करना। 'Responsible for the website' से कुछ पता नहीं चलता। 'Built the college website with 5 pages' से सब पता चलता है। गलती 3: फ़ोटो, जन्मतिथि, पिता का नाम लिखना। ये रिज़्यूमे में नहीं चाहिए — सिर्फ़ नाम, संपर्क, कौशल, प्रोजेक्ट, शिक्षा। गलती 4: वर्तनी और व्याकरण की गलतियाँ। एक वर्तनी की गलती से भर्ती करने वाले को लगता है कि तुम विवरण पर ध्यान नहीं देते। रिज़्यूमे को 3 बार पढ़ो, और एक दोस्त से भी पढ़वाओ।",
        ),
        s(
          H_EDGE,
          "Edge case 1: CGPA kam ho (6.5 se neeche). Tab CGPA ko chhupao mat — likho, lekin projects ko upar rakho aur CGPA ko education section me neeche rakho. Recruiter pehle projects dekhta hai. Edge case 2: koi project nahi hai. Tab 2 hafte me ek chhota project banao — ek to-do app, ek calculator, ek portfolio website. Bina project ke resume khaali lagta hai. Edge case 3: gap year ho. Tab gap ko chhupao mat — education me saal saaf likho, aur gap me kya seekha, woh summary ya projects me dikhao. Edge case 4: company ko resume email se bhejna ho. Tab PDF bhejo (Word file nahi), aur file ka naam 'Aarav_Sharma_Resume.pdf' rakho — 'resume_final_v2.pdf' nahi.",
          "Edge case 1: a low CGPA (below 6.5). Do not hide it — write it, but put projects above and CGPA below in the education section. The recruiter looks at projects first. Edge case 2: no projects at all. Then build one small project in 2 weeks — a to-do app, a calculator, a portfolio website. A resume without a project looks empty. Edge case 3: a gap year. Do not hide the gap — write the years clearly in education, and show what you learned in the gap through the summary or projects. Edge case 4: sending the resume by email to a company. Send a PDF (not a Word file), and name the file 'Aarav_Sharma_Resume.pdf' — not 'resume_final_v2.pdf'.",
          "विशेष स्थिति 1: CGPA कम हो (6.5 से नीचे)। तब CGPA को छिपाओ मत — लिखो, लेकिन प्रोजेक्ट को ऊपर रखो और CGPA को शिक्षा वाले हिस्से में नीचे रखो। भर्ती करने वाला पहले प्रोजेक्ट देखता है। विशेष स्थिति 2: कोई प्रोजेक्ट नहीं है। तब 2 हफ़्ते में एक छोटा प्रोजेक्ट बनाओ — एक to-do ऐप, एक कैलकुलेटर, एक पोर्टफ़ोलियो वेबसाइट। बिना प्रोजेक्ट के रिज़्यूमे खाली लगता है। विशेष स्थिति 3: गैप वर्ष हो। तब गैप को छिपाओ मत — शिक्षा में साल साफ़ लिखो, और गैप में क्या सीखा, वह सारांश या प्रोजेक्ट में दिखाओ। विशेष स्थिति 4: कंपनी को रिज़्यूमे ईमेल से भेजना हो। तब PDF भेजो (Word फ़ाइल नहीं), और फ़ाइल का नाम 'Aarav_Sharma_Resume.pdf' रखो — 'resume_final_v2.pdf' नहीं।",
        ),
        s(
          H_CHANGE,
          "Agar tum resume ko 2 page ka bana do, to kya hoga? Recruiter doosra page kholta hi nahi — tumhara best project agar doosre page par hai, to woh kabhi dekha hi nahi jayega. Agar tum skills ki list se 'Python' hata do aur uski jagah ek Python project daal do, to kya hoga? Recruiter ko proof mil jayega — list se zyada project bolta hai. Agar tum har bullet me ek number daal do — '40 users', '2 seconds', '1,200 books' — to kya hoga? Tumhara resume 100 resume me se alag dikhega, kyunki number wale bullet padhne wale ko yaad rehte hain. Resume me ek number, ek poori list se zyada bolta hai.",
          "If you make the resume 2 pages, what happens? The recruiter never opens the second page — if your best project sits on page two, it is never seen. If you remove 'Python' from the skills list and put a Python project in its place, what happens? The recruiter gets proof — a project speaks louder than a list. If you add a number to every bullet — '40 users', '2 seconds', '1,200 books' — what happens? Your resume stands out among 100 resumes, because bullets with numbers stay in the reader's mind. In a resume, one number speaks louder than a whole list.",
          "अगर तुम रिज़्यूमे को 2 पेज का बना दो, तो क्या होगा? भर्ती करने वाला दूसरा पेज खोलता ही नहीं — तुम्हारा सबसे अच्छा प्रोजेक्ट अगर दूसरे पेज पर है, तो वह कभी देखा ही नहीं जाएगा। अगर तुम कौशल की सूची से 'Python' हटा दो और उसकी जगह एक Python प्रोजेक्ट डाल दो, तो क्या होगा? भर्ती करने वाले को प्रमाण मिल जाएगा — सूची से ज़्यादा प्रोजेक्ट बोलता है। अगर तुम हर बुलेट में एक संख्या डाल दो — '40 users', '2 seconds', '1,200 books' — तो क्या होगा? तुम्हारा रिज़्यूमे 100 रिज़्यूमे में से अलग दिखेगा, क्योंकि संख्या वाले बुलेट पढ़ने वाले को याद रहते हैं। रिज़्यूमे में एक संख्या, एक पूरी सूची से ज़्यादा बोलती है।",
        ),
        s(
          H_SUMMARY,
          "Ek page, 5 hisse: header, summary, skills, projects, education. Har project me 3 cheezein: kya banaya, kis tool se, kya result mila. Har bullet action verb se shuru karo aur number daalo. Jo skill aati nahi, woh mat likho. Photo, date of birth, father ka naam — mat likho. PDF bhejo, file ka naam apne naam par rakho. Resume likhne ke baad 3 baar padho aur ek dost se check karwao.",
          "One page, 5 parts: header, summary, skills, projects, education. Every project has 3 things: what you built, with which tool, and what result it gave. Start every bullet with an action verb and add a number. Never list a skill you do not have. No photo, no date of birth, no father's name. Send a PDF, name the file after yourself. After writing the resume, read it 3 times and get a friend to check it.",
          "एक पेज, 5 हिस्से: हेडर, सारांश, कौशल, प्रोजेक्ट, शिक्षा। हर प्रोजेक्ट में 3 चीज़ें: क्या बनाया, किस टूल से, क्या परिणाम मिला। हर बुलेट एक्शन क्रिया से शुरू करो और संख्या डालो। जो कौशल आती नहीं, वह मत लिखो। फ़ोटो, जन्मतिथि, पिता का नाम — मत लिखो। PDF भेजो, फ़ाइल का नाम अपने नाम पर रखो। रिज़्यूमे लिखने के बाद 3 बार पढ़ो और एक दोस्त से जाँच करवाओ।",
        ),
      ],
      diagram: {
        kind: 'flow',
        title: {
          hinglish: 'Resume ka order — upar se neeche',
          english: 'Resume order — top to bottom',
          hindi: 'रिज़्यूमे का क्रम — ऊपर से नीचे',
        },
        nodes: [
          { t: { hinglish: 'Header: naam + contact', english: 'Header: name + contact', hindi: 'हेडर: नाम + संपर्क' } },
          { t: { hinglish: 'Summary: 2 lines', english: 'Summary: 2 lines', hindi: 'सारांश: 2 पंक्तियाँ' } },
          { t: { hinglish: 'Skills: sirf sach wali', english: 'Skills: only the true ones', hindi: 'कौशल: सिर्फ़ सच वाली' } },
          { t: { hinglish: 'Projects: kya + tool + result', english: 'Projects: what + tool + result', hindi: 'प्रोजेक्ट: क्या + टूल + परिणाम' } },
          { t: { hinglish: 'Education + certificate', english: 'Education + certificates', hindi: 'शिक्षा + प्रमाणपत्र' } },
        ],
      },
      mcqs: [
        {
          q: {
            hinglish: 'Kaun sa project bullet behtar hai?',
            english: 'Which project bullet is better?',
            hindi: 'कौन सा प्रोजेक्ट बुलेट बेहतर है?',
          },
          opts: [
            { hinglish: 'Responsible for the college website.', english: 'Responsible for the college website.', hindi: 'Responsible for the college website.' },
            { hinglish: 'Built the college website with 5 pages in HTML and CSS; 500 students use it every month.', english: 'Built the college website with 5 pages in HTML and CSS; 500 students use it every month.', hindi: 'Built the college website with 5 pages in HTML and CSS; 500 students use it every month.' },
            { hinglish: 'Worked on many technologies.', english: 'Worked on many technologies.', hindi: 'Worked on many technologies.' },
            { hinglish: 'I know web development.', english: 'I know web development.', hindi: 'I know web development.' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Behtar bullet me action verb (Built), tool (HTML/CSS) aur number (5 pages, 500 students) — teeno hain. Baaki bullets me kuch prove nahi hota.',
            english: 'The better bullet has an action verb (Built), the tool (HTML/CSS) and numbers (5 pages, 500 students) — all three. The other bullets prove nothing.',
            hindi: 'बेहतर बुलेट में एक्शन क्रिया (Built), टूल (HTML/CSS) और संख्या (5 pages, 500 students) — तीनों हैं। बाकी बुलेट में कुछ साबित नहीं होता।',
          },
        },
        {
          q: {
            hinglish: 'Resume me kaun si skill likhni chahiye?',
            english: 'Which skill should you list in a resume?',
            hindi: 'रिज़्यूमे में कौन सी कौशल लिखनी चाहिए?',
          },
          opts: [
            { hinglish: 'Jo skill exam me aane wali ho', english: 'A skill that may come in the exam', hindi: 'जो कौशल परीक्षा में आने वाली हो' },
            { hinglish: 'Jo skill tum interview me prove kar sakte ho', english: 'A skill you can prove in the interview', hindi: 'जो कौशल तुम इंटरव्यू में साबित कर सकते हो' },
            { hinglish: 'Jo skill tumhare dost ko aati ho', english: 'A skill your friend has', hindi: 'जो कौशल तुम्हारे दोस्त को आती हो' },
            { hinglish: 'Har skill jo tumne kabhi suni ho', english: 'Every skill you have ever heard of', hindi: 'हर कौशल जो तुमने कभी सुनी हो' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Interviewer wahi skill poochta hai jo resume me likhi hai. Jo skill prove nahi kar sakte, woh likhna jhooth bolne jaisa hai.',
            english: 'The interviewer asks about the skills written in the resume. Listing a skill you cannot prove is like telling a lie.',
            hindi: 'इंटरव्यू लेने वाला वही कौशल पूछता है जो रिज़्यूमे में लिखी है। जो कौशल साबित नहीं कर सकते, वह लिखना झूठ बोलने जैसा है।',
          },
        },
        {
          q: {
            hinglish: 'Recruiter resume ko kitne time me scan karta hai?',
            english: 'How fast does a recruiter scan a resume?',
            hindi: 'भर्ती करने वाला रिज़्यूमे को कितने समय में देखता है?',
          },
          opts: [
            { hinglish: '6 second me', english: 'In 6 seconds', hindi: '6 सेकंड में' },
            { hinglish: '30 minute me', english: 'In 30 minutes', hindi: '30 मिनट में' },
            { hinglish: '1 ghante me', english: 'In 1 hour', hindi: '1 घंटे में' },
            { hinglish: 'Poora din lagata hai', english: 'It takes a whole day', hindi: 'पूरा दिन लगाता है' },
          ],
          ans: 0,
          expl: {
            hinglish: 'Recruiter ke paas 500 resume hote hain, isliye woh har resume ko sirf 6 second me scan karta hai. Isiliye resume 1 page ka aur clear hona chahiye.',
            english: 'A recruiter has 500 resumes, so each one is scanned in only 6 seconds. That is why a resume must be one page and clear.',
            hindi: 'भर्ती करने वाले के पास 500 रिज़्यूमे होते हैं, इसलिए वह हर रिज़्यूमे को सिर्फ़ 6 सेकंड में देखता है। इसलिए रिज़्यूमे 1 पेज का और साफ़ होना चाहिए।',
          },
        },
        {
          q: {
            hinglish: 'Company ko resume kaise bhejna chahiye?',
            english: 'How should you send a resume to a company?',
            hindi: 'कंपनी को रिज़्यूमे कैसे भेजना चाहिए?',
          },
          opts: [
            { hinglish: 'Word file, naam "resume_final_v2.docx"', english: 'A Word file named "resume_final_v2.docx"', hindi: 'Word फ़ाइल, नाम "resume_final_v2.docx"' },
            { hinglish: 'PDF, naam "Aarav_Sharma_Resume.pdf"', english: 'A PDF named "Aarav_Sharma_Resume.pdf"', hindi: 'PDF, नाम "Aarav_Sharma_Resume.pdf"' },
            { hinglish: 'Resume ki photo khinch kar', english: 'A photo of the resume', hindi: 'रिज़्यूमे की फ़ोटो खींचकर' },
            { hinglish: 'Resume ko message me type karke', english: 'The resume typed into a message', hindi: 'रिज़्यूमे को संदेश में टाइप करके' },
          ],
          ans: 1,
          expl: {
            hinglish: 'PDF har device par ek jaisa dikhta hai, aur apne naam wali file recruiter ko turant mil jati hai. Word file ka format bigad sakta hai.',
            english: 'A PDF looks the same on every device, and a file named after you is found at once by the recruiter. A Word file can lose its format.',
            hindi: 'PDF हर डिवाइस पर एक जैसा दिखता है, और अपने नाम वाली फ़ाइल भर्ती करने वाले को तुरंत मिल जाती है। Word फ़ाइल का फ़ॉर्मैट बिगड़ सकता है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Apna 1-page resume likho',
          english: 'Write your own 1-page resume',
          hindi: 'अपना 1 पेज का रिज़्यूमे लिखो',
        },
        task: {
          hinglish: 'Upar wale example ko template maan kar apna resume likho: header, 2-line summary, 5-6 skills, 2 projects (har project 3 lines: kya banaya, kis tool se, kya result mila — ek number ke saath), education. Phir check karo: kya ye 1 page me fit hota hai? Kya har bullet action verb se shuru hota hai? Kya koi skill aisi hai jo tum prove nahi kar sakte? Done tab mano jab resume 1 page ka ho, har project me ek number ho, aur tum har line ko interview me explain kar sako.',
          english: 'Using the example above as a template, write your own resume: header, 2-line summary, 5 to 6 skills, 2 projects (each project in 3 lines: what you built, with which tool, what result it gave — with one number), education. Then check: does it fit on one page? Does every bullet start with an action verb? Is there any skill you cannot prove? You are done when the resume is one page, every project has a number, and you can explain every line in an interview.',
          hindi: 'ऊपर वाले उदाहरण को टेम्पलेट मानकर अपना रिज़्यूमे लिखो: हेडर, 2 पंक्तियों का सारांश, 5-6 कौशल, 2 प्रोजेक्ट (हर प्रोजेक्ट 3 पंक्तियों में: क्या बनाया, किस टूल से, क्या परिणाम मिला — एक संख्या के साथ), शिक्षा। फिर जाँचो: क्या यह 1 पेज में फ़िट होता है? क्या हर बुलेट एक्शन क्रिया से शुरू होता है? क्या कोई कौशल ऐसी है जो तुम साबित नहीं कर सकते? तब पूरा मानो जब रिज़्यूमे 1 पेज का हो, हर प्रोजेक्ट में एक संख्या हो, और तुम हर पंक्ति को इंटरव्यू में समझा सको।',
        },
        language: 'python',
        starter: '# Task: apna resume yahan likho — har line ek string.\nresume = [\n    "NAME: ",\n    "SUMMARY: ",\n    "SKILLS: ",\n    "PROJECT 1: Built ... (tool) ... (number/result)",\n    "PROJECT 2: Built ... (tool) ... (number/result)",\n    "EDUCATION: ",\n]\nfor line in resume:\n    print(line)\n',
        expected: 'Resume ki saari lines print honi chahiye — header, summary, skills, 2 projects (har ek me number ke saath), education.',
      },
      readMinutes: 12,
    },
    {
      id: 'placement-hr-questions',
      subjectId: 'placement',
      title: {
        hinglish: '"Tell me about yourself" aur 10 common HR questions',
        english: '"Tell me about yourself" and 10 common HR questions',
        hindi: '"अपने बारे में बताओ" और 10 आम HR सवाल',
      },
      summary: {
        hinglish: 'HR interview me tumhare marks nahi, tumhari kahani check hoti hai. Har jawab 1 minute ka, apni awaaz me, aur ek example ke saath. Is article me 10 sawaalon ke model answers hain — ratto mat, samjho aur apna banao.',
        english: 'In the HR interview, your story is checked, not your marks. Every answer is 1 minute long, in your own voice, and with one example. This article has model answers for 10 questions — do not memorise them, understand them and make them your own.',
        hindi: 'HR इंटरव्यू में तुम्हारे अंक नहीं, तुम्हारी कहानी जाँची जाती है। हर उत्तर 1 मिनट का, अपनी आवाज़ में, और एक उदाहरण के साथ। इस लेख में 10 सवालों के मॉडल उत्तर हैं — रट्टो मत, समझो और अपना बनाओ।',
      },
      sections: [
        s(
          H_WHAT,
          "HR interview ka matlab hai: company ye check karti hai ki tum kaun ho, tum team me kaise kaam karoge, aur tum company me tikoge ya nahi. Isme technical sawaal nahi pooche jate — isme tumhari soch, tumhara attitude aur tumhari honesty check hoti hai. HR round aam taur par technical round ke baad aata hai, aur isme 10-15 minute me 8-10 sawaal pooche jate hain. Har sawaal ka ek maksad hota hai. 'Tell me about yourself' se interviewer ye dekhta hai ki tum apni kahani kitni clear bol sakte ho. 'Strengths' se woh dekhta hai ki tum khud ko kitna jaante ho. 'Weakness' se woh dekhta hai ki tum honest ho ya nahi. 'Why this company' se woh dekhta hai ki tumne company ke baare me padha hai ya bas aise hi aa gaye. Jo student HR ko ek formality samajhta hai, woh yahin haar jata hai — kyunki HR round me bhi log reject hote hain.",
          "The HR interview means this: the company checks who you are, how you will work in a team, and whether you will stay in the company. No technical questions are asked here — your thinking, your attitude and your honesty are checked. The HR round usually comes after the technical round, and in 10 to 15 minutes, 8 to 10 questions are asked. Every question has a purpose. From 'Tell me about yourself', the interviewer sees how clearly you can tell your own story. From 'Strengths', they see how well you know yourself. From 'Weakness', they see whether you are honest. From 'Why this company', they see whether you read about the company or just walked in. A student who treats HR as a formality loses here — because people are rejected in the HR round too.",
          "HR इंटरव्यू का अर्थ है: कंपनी जाँचती है कि तुम कौन हो, तुम टीम में कैसे काम करोगे, और तुम कंपनी में टिकोगे या नहीं। इसमें तकनीकी सवाल नहीं पूछे जाते — इसमें तुम्हारी सोच, तुम्हारा रवैया और तुम्हारी ईमानदारी जाँची जाती है। HR राउंड आम तौर पर तकनीकी राउंड के बाद आता है, और इसमें 10-15 मिनट में 8-10 सवाल पूछे जाते हैं। हर सवाल का एक मकसद होता है। 'Tell me about yourself' से इंटरव्यू लेने वाला देखता है कि तुम अपनी कहानी कितनी साफ़ बोल सकते हो। 'Strengths' से वह देखता है कि तुम ख़ुद को कितना जानते हो। 'Weakness' से वह देखता है कि तुम ईमानदार हो या नहीं। 'Why this company' से वह देखता है कि तुमने कंपनी के बारे में पढ़ा है या बस ऐसे ही आ गए। जो छात्र HR को एक औपचारिकता समझता है, वह यहीं हार जाता है — क्योंकि HR राउंड में भी लोग अस्वीकार होते हैं।",
        ),
        s(
          H_REAL,
          "Socho tum ek naye dost se milte ho. Woh poochta hai: 'Tum kaun ho, kya karte ho?' Tum kya bolte ho? Tum apni poori life story nahi sunate — tum 4-5 lines me batate ho: naam, kahan se ho, kya padh rahe ho, kya pasand hai. Bas. HR interview bhi wahi hai — ek naye insaan se pehli mulaqaat. Interviewer tumhe pehli baar dekh raha hai, aur woh 1 minute me ye samajhna chahta hai ki tum kaun ho. Jo student 5 minute tak bolta rehta hai — 'Main chhota tha tab se...' — woh interviewer ko bore kar deta hai. Jo student 10 second me khatm kar deta hai — 'Main Aarav hoon, B.Tech kar raha hoon' — woh kuch batata hi nahi. Sahi jawab beech me hai: 1 minute, 4 hisse — present, past, skills, future.",
          "Imagine you meet a new friend. They ask: 'Who are you, what do you do?' What do you say? You do not tell your whole life story — you say it in 4 to 5 lines: your name, where you are from, what you are studying, what you like. That is all. The HR interview is the same — a first meeting with a new person. The interviewer is seeing you for the first time, and in 1 minute they want to understand who you are. A student who keeps talking for 5 minutes — 'Since I was small...' — bores the interviewer. A student who finishes in 10 seconds — 'I am Aarav, doing B.Tech' — says nothing at all. The right answer is in the middle: 1 minute, 4 parts — present, past, skills, future.",
          "सोचो तुम एक नए दोस्त से मिलते हो। वह पूछता है: 'तुम कौन हो, क्या करते हो?' तुम क्या बोलते हो? तुम अपनी पूरी जीवन कहानी नहीं सुनाते — तुम 4-5 पंक्तियों में बताते हो: नाम, कहाँ से हो, क्या पढ़ रहे हो, क्या पसंद है। बस। HR इंटरव्यू भी वही है — एक नए इंसान से पहली मुलाक़ात। इंटरव्यू लेने वाला तुम्हें पहली बार देख रहा है, और वह 1 मिनट में यह समझना चाहता है कि तुम कौन हो। जो छात्र 5 मिनट तक बोलता रहता है — 'मैं छोटा था तब से...' — वह इंटरव्यू लेने वाले को उबा देता है। जो छात्र 10 सेकंड में ख़त्म कर देता है — 'मैं आरव हूँ, B.Tech कर रहा हूँ' — वह कुछ बताता ही नहीं। सही उत्तर बीच में है: 1 मिनट, 4 हिस्से — वर्तमान, अतीत, कौशल, भविष्य।",
        ),
        s(
          H_STEPS,
          "Model answer 1 — 'Tell me about yourself' (1 minute, apni awaaz me): 'Good morning, sir. My name is Aarav Sharma. I recently completed my B.Tech in Computer Science from XYZ Institute of Technology. During my degree, I became interested in web development, and I built 3 projects — an expense tracker, a library management system, and a sorting visualiser. I also solved 250+ DSA problems, which improved my problem-solving. I am looking for a software developer role where I can learn from a real team and contribute to real products. Thank you.' Dekho — 4 hisse hain: present (naam, degree), past (projects), skills (DSA), future (kya chahte ho). Koi life story nahi, koi 'I am hardworking' jaisa khaali daava nahi.\n\nBaaki 9 sawaal, model answers ke saath:\n\n2. 'What are your strengths?' — 'My biggest strength is consistency. I solve 3 DSA problems every day, and I have not missed a single day in 6 months. It also helps me in projects — I finish what I start.' (Ek strength + ek example. Teen strengths mat ginao.)\n\n3. 'What is your weakness?' — 'I used to hesitate to ask questions when I was stuck. In my last project, I wasted 2 days on a bug that my senior solved in 10 minutes. Since then, I try for 30 minutes on my own, and then I ask for help.' (Sachchi weakness + us par kaam.)\n\n4. 'Why should we hire you?' — 'Because I can start contributing quickly. I already know Java and React, I have built 3 full projects, and I learn fast — in my internship I learned Git in one week and used it in a team project.'\n\n5. 'Why this company?' — 'I read about your work in banking software, and I liked that freshers get to work on live projects in the first 3 months. I want to start my career where learning is part of the job.' (Company ke baare me ek sachchi baat — pehle website padho, phir bolo.)\n\n6. 'Where do you see yourself in 5 years?' — 'In 5 years, I want to be a developer who can own a full feature — from design to testing. I also want to mentor new freshers, the way my seniors mentored me.'\n\n7. 'Are you willing to relocate?' — 'Yes, I am open to relocating. I have lived in a hostel for 4 years, so adjusting to a new city is not new for me.'\n\n8. 'What are your hobbies?' — 'I like reading about new technology and I play badminton twice a week. Badminton taught me to stay calm under pressure — one point at a time.'\n\n9. 'Do you have any questions for us?' — 'Yes. What does a typical first month look like for a fresher here? And how is performance measured in the first 6 months?' (Ye sawaal poochna zaroori hai — isse lagta hai ki tum interested ho.)\n\n10. 'What is your salary expectation?' (Fresher ke liye) — 'As a fresher, my focus is on learning and growth. I am open to the standard package your company offers for this role.' (Number pehle tum mat bolo — company ko bolne do.)",
          "Model answer 1 — 'Tell me about yourself' (1 minute, in your own voice): 'Good morning, sir. My name is Aarav Sharma. I recently completed my B.Tech in Computer Science from XYZ Institute of Technology. During my degree, I became interested in web development, and I built 3 projects — an expense tracker, a library management system, and a sorting visualiser. I also solved 250+ DSA problems, which improved my problem-solving. I am looking for a software developer role where I can learn from a real team and contribute to real products. Thank you.' See — there are 4 parts: present (name, degree), past (projects), skills (DSA), future (what you want). No life story, no empty claim like 'I am hardworking'.\n\nThe other 9 questions, with model answers:\n\n2. 'What are your strengths?' — 'My biggest strength is consistency. I solve 3 DSA problems every day, and I have not missed a single day in 6 months. It also helps me in projects — I finish what I start.' (One strength plus one example. Do not list three strengths.)\n\n3. 'What is your weakness?' — 'I used to hesitate to ask questions when I was stuck. In my last project, I wasted 2 days on a bug that my senior solved in 10 minutes. Since then, I try for 30 minutes on my own, and then I ask for help.' (A real weakness plus the work on it.)\n\n4. 'Why should we hire you?' — 'Because I can start contributing quickly. I already know Java and React, I have built 3 full projects, and I learn fast — in my internship I learned Git in one week and used it in a team project.'\n\n5. 'Why this company?' — 'I read about your work in banking software, and I liked that freshers get to work on live projects in the first 3 months. I want to start my career where learning is part of the job.' (One true fact about the company — read the website first, then speak.)\n\n6. 'Where do you see yourself in 5 years?' — 'In 5 years, I want to be a developer who can own a full feature — from design to testing. I also want to mentor new freshers, the way my seniors mentored me.'\n\n7. 'Are you willing to relocate?' — 'Yes, I am open to relocating. I have lived in a hostel for 4 years, so adjusting to a new city is not new for me.'\n\n8. 'What are your hobbies?' — 'I like reading about new technology and I play badminton twice a week. Badminton taught me to stay calm under pressure — one point at a time.'\n\n9. 'Do you have any questions for us?' — 'Yes. What does a typical first month look like for a fresher here? And how is performance measured in the first 6 months?' (Asking this question is important — it shows you are interested.)\n\n10. 'What is your salary expectation?' (For a fresher) — 'As a fresher, my focus is on learning and growth. I am open to the standard package your company offers for this role.' (Do not say a number first — let the company speak.)",
          "मॉडल उत्तर 1 — 'Tell me about yourself' (1 मिनट, अपनी आवाज़ में): 'Good morning, sir. My name is Aarav Sharma. I recently completed my B.Tech in Computer Science from XYZ Institute of Technology. During my degree, I became interested in web development, and I built 3 projects — an expense tracker, a library management system, and a sorting visualiser. I also solved 250+ DSA problems, which improved my problem-solving. I am looking for a software developer role where I can learn from a real team and contribute to real products. Thank you.' देखो — 4 हिस्से हैं: वर्तमान (नाम, डिग्री), अतीत (प्रोजेक्ट), कौशल (DSA), भविष्य (क्या चाहते हो)। कोई जीवन कहानी नहीं, कोई 'I am hardworking' जैसा खाली दावा नहीं।\n\nबाकी 9 सवाल, मॉडल उत्तरों के साथ:\n\n2. 'What are your strengths?' — 'My biggest strength is consistency. I solve 3 DSA problems every day, and I have not missed a single day in 6 months. It also helps me in projects — I finish what I start.' (एक मज़बूती + एक उदाहरण। तीन मज़बूतियाँ मत गिनाओ।)\n\n3. 'What is your weakness?' — 'I used to hesitate to ask questions when I was stuck. In my last project, I wasted 2 days on a bug that my senior solved in 10 minutes. Since then, I try for 30 minutes on my own, and then I ask for help.' (सच्ची कमज़ोरी + उस पर काम।)\n\n4. 'Why should we hire you?' — 'Because I can start contributing quickly. I already know Java and React, I have built 3 full projects, and I learn fast — in my internship I learned Git in one week and used it in a team project.'\n\n5. 'Why this company?' — 'I read about your work in banking software, and I liked that freshers get to work on live projects in the first 3 months. I want to start my career where learning is part of the job.' (कंपनी के बारे में एक सच्ची बात — पहले वेबसाइट पढ़ो, फिर बोलो।)\n\n6. 'Where do you see yourself in 5 years?' — 'In 5 years, I want to be a developer who can own a full feature — from design to testing. I also want to mentor new freshers, the way my seniors mentored me.'\n\n7. 'Are you willing to relocate?' — 'Yes, I am open to relocating. I have lived in a hostel for 4 years, so adjusting to a new city is not new for me.'\n\n8. 'What are your hobbies?' — 'I like reading about new technology and I play badminton twice a week. Badminton taught me to stay calm under pressure — one point at a time.'\n\n9. 'Do you have any questions for us?' — 'Yes. What does a typical first month look like for a fresher here? And how is performance measured in the first 6 months?' (यह सवाल पूछना ज़रूरी है — इससे लगता है कि तुम रुचि रखते हो।)\n\n10. 'What is your salary expectation?' (फ़्रेशर के लिए) — 'As a fresher, my focus is on learning and growth. I am open to the standard package your company offers for this role.' (संख्या पहले तुम मत बोलो — कंपनी को बोलने दो।)",
        ),
        s(
          H_MISTAKES,
          "Galti 1: ratt kar bolna. Aisa kyun hota hai? Kyunki student YouTube se answer ratta hai aur wahi bol deta hai. Interviewer 100 baar wahi answer sun chuka hota hai — use turant pata chal jata hai ki ye ratta hua hai. Model answer ko samjho, phir apne shabdon me, apne example ke saath bolo. Galti 2: weakness me jhooth bolna — 'Meri koi weakness nahi hai' ya 'Main perfectionist hoon.' Interviewer ko pata hai ki har insaan me weakness hoti hai; 'koi weakness nahi' ka matlab hai tum honest nahi ho. Galti 3: company ke baare me kuch na jaanna. 'Why this company?' par agar tum bole 'Kyunki ye badi company hai', to interviewer samajh jayega ki tumne homework nahi kiya. Galti 4: 'No questions' bolna. Jab interviewer poochta hai 'Do you have any questions?', to 'No, sir' bolna matlab hai tumhe job me interest hi nahi hai. Hamesha 1-2 sawaal poocho. Galti 5: negative baat karna — purane college ya teacher ki burai karna. Interviewer sochta hai: jo apne college ki burai karta hai, woh company ki bhi karega.",
          "Mistake 1: speaking from memory. Why does this happen? Because students memorise an answer from YouTube and repeat it. The interviewer has heard the same answer 100 times — they know at once that it is memorised. Understand the model answer, then say it in your own words, with your own example. Mistake 2: lying about a weakness — 'I have no weakness' or 'I am a perfectionist.' The interviewer knows every person has a weakness; 'no weakness' means you are not honest. Mistake 3: knowing nothing about the company. If you answer 'Why this company?' with 'Because it is a big company', the interviewer understands you did no homework. Mistake 4: saying 'No questions'. When the interviewer asks 'Do you have any questions?', answering 'No, sir' means you have no interest in the job. Always ask 1 or 2 questions. Mistake 5: speaking negatively — criticising your old college or teacher. The interviewer thinks: someone who criticises their college will criticise the company too.",
          "गलती 1: रटकर बोलना। ऐसा क्यों होता है? क्योंकि छात्र YouTube से उत्तर रटता है और वही बोल देता है। इंटरव्यू लेने वाला 100 बार वही उत्तर सुन चुका होता है — उसे तुरंत पता चल जाता है कि यह रटा हुआ है। मॉडल उत्तर को समझो, फिर अपने शब्दों में, अपने उदाहरण के साथ बोलो। गलती 2: कमज़ोरी में झूठ बोलना — 'मेरी कोई कमज़ोरी नहीं है' या 'मैं perfectionist हूँ।' इंटरव्यू लेने वाला जानता है कि हर इंसान में कमज़ोरी होती है; 'कोई कमज़ोरी नहीं' का अर्थ है तुम ईमानदार नहीं हो। गलती 3: कंपनी के बारे में कुछ न जानना। 'Why this company?' पर अगर तुम बोले 'क्योंकि यह बड़ी कंपनी है', तो इंटरव्यू लेने वाला समझ जाएगा कि तुमने होमवर्क नहीं किया। गलती 4: 'No questions' बोलना। जब इंटरव्यू लेने वाला पूछता है 'Do you have any questions?', तो 'No, sir' बोलना मतलब है तुम्हें नौकरी में रुचि ही नहीं है। हमेशा 1-2 सवाल पूछो। गलती 5: नकारात्मक बात करना — पुराने कॉलेज या शिक्षक की बुराई करना। इंटरव्यू लेने वाला सोचता है: जो अपने कॉलेज की बुराई करता है, वह कंपनी की भी करेगा।",
        ),
        s(
          H_EDGE,
          "Edge case 1: interviewer ne tumhara resume padha hi nahi. Tab 'Tell me about yourself' me resume ki saari baatein dobara bolo — naam, degree, projects, skills. Edge case 2: tumse aisa sawaal poocha jaye jiska jawab tumhe nahi pata — jaise 'Tumhari sabse badi failure kya thi?' Tab jhooth mat bolo; ek chhoti sachchi failure batao aur kya seekha, woh batao. Edge case 3: interviewer Hindi me bole. Tab tum bhi Hindi me jawab de sakte ho — lekin technical shabd English me hi rakho. Edge case 4: tum nervous ho aur jawab bhool gaye. Tab ruko, paani piyo, aur bolo: 'Sorry sir, let me think for a moment.' Rukna kamzori nahi hai — ghabra kar kuch bhi bolna kamzori hai.",
          "Edge case 1: the interviewer has not read your resume at all. Then in 'Tell me about yourself', repeat everything from the resume — name, degree, projects, skills. Edge case 2: you are asked a question you do not know the answer to — like 'What was your biggest failure?' Do not lie; tell one small, true failure and what you learned from it. Edge case 3: the interviewer speaks in Hindi. Then you can answer in Hindi too — but keep technical words in English. Edge case 4: you are nervous and forget the answer. Then stop, drink water, and say: 'Sorry sir, let me think for a moment.' Pausing is not weakness — saying anything in panic is weakness.",
          "विशेष स्थिति 1: इंटरव्यू लेने वाले ने तुम्हारा रिज़्यूमे पढ़ा ही नहीं। तब 'Tell me about yourself' में रिज़्यूमे की सारी बातें दोबारा बोलो — नाम, डिग्री, प्रोजेक्ट, कौशल। विशेष स्थिति 2: तुमसे ऐसा सवाल पूछा जाए जिसका उत्तर तुम्हें नहीं पता — जैसे 'तुम्हारी सबसे बड़ी असफलता क्या थी?' तब झूठ मत बोलो; एक छोटी सच्ची असफलता बताओ और क्या सीखा, वह बताओ। विशेष स्थिति 3: इंटरव्यू लेने वाला हिंदी में बोले। तब तुम भी हिंदी में उत्तर दे सकते हो — लेकिन तकनीकी शब्द अंग्रेज़ी में ही रखो। विशेष स्थिति 4: तुम घबराए हुए हो और उत्तर भूल गए। तब रुको, पानी पियो, और बोलो: 'Sorry sir, let me think for a moment.' रुकना कमज़ोरी नहीं है — घबराकर कुछ भी बोलना कमज़ोरी है।",
        ),
        s(
          H_CHANGE,
          "Agar tum 'Tell me about yourself' ko 5 minute ka bana do, to kya hoga? Interviewer bore ho jayega aur beech me rok dega — aur pehla impression hi kharab ho jayega. Agar tum har jawab me ek example daal do, to kya hoga? Tumhare jawab yaad rehte hain — interviewer 50 students me se tumhe yaad rakhega, kyunki tumne kahani sunayi, daava nahi kiya. Agar tum 'Do you have any questions?' par ek achha sawaal pooch lo, to kya hoga? Interviewer ko lagega ki tum job ko seriously le rahe ho — ye aakhri 2 minute tumhare selection ka faisla kar sakte hain. HR interview me example hi saboot hai.",
          "If you make 'Tell me about yourself' 5 minutes long, what happens? The interviewer gets bored and stops you in the middle — and the first impression itself goes bad. If you add one example to every answer, what happens? Your answers stay in memory — the interviewer will remember you among 50 students, because you told a story instead of making a claim. If you ask one good question at 'Do you have any questions?', what happens? The interviewer feels you are taking the job seriously — those last 2 minutes can decide your selection. In the HR interview, the example is the proof.",
          "अगर तुम 'Tell me about yourself' को 5 मिनट का बना दो, तो क्या होगा? इंटरव्यू लेने वाला उब जाएगा और बीच में रोक देगा — और पहला प्रभाव ही ख़राब हो जाएगा। अगर तुम हर उत्तर में एक उदाहरण डाल दो, तो क्या होगा? तुम्हारे उत्तर याद रहते हैं — इंटरव्यू लेने वाला 50 छात्रों में से तुम्हें याद रखेगा, क्योंकि तुमने कहानी सुनाई, दावा नहीं किया। अगर तुम 'Do you have any questions?' पर एक अच्छा सवाल पूछ लो, तो क्या होगा? इंटरव्यू लेने वाले को लगेगा कि तुम नौकरी को गंभीरता से ले रहे हो — ये आख़िरी 2 मिनट तुम्हारे चयन का फ़ैसला कर सकते हैं। HR इंटरव्यू में उदाहरण ही सबूत है।",
        ),
        s(
          H_SUMMARY,
          "'Tell me about yourself' — 1 minute, 4 hisse: present, past, skills, future. Har jawab me ek example daalo. Weakness sachchi batao, aur us par kya kaam kar rahe ho, woh bhi batao. Company ke baare me pehle padho, phir 'Why this company?' ka jawab do. Salary ka number pehle mat bolo. Aakhir me hamesha 1-2 sawaal poocho. Model answers ko ratto mat — apne shabdon me, apne example ke saath bolo.",
          "'Tell me about yourself' — 1 minute, 4 parts: present, past, skills, future. Add one example to every answer. Tell a real weakness, and also say what you are doing about it. Read about the company first, then answer 'Why this company?' Do not say a salary number first. Always ask 1 or 2 questions at the end. Do not memorise the model answers — say them in your own words, with your own example.",
          "'Tell me about yourself' — 1 मिनट, 4 हिस्से: वर्तमान, अतीत, कौशल, भविष्य। हर उत्तर में एक उदाहरण डालो। कमज़ोरी सच्ची बताओ, और उस पर क्या काम कर रहे हो, वह भी बताओ। कंपनी के बारे में पहले पढ़ो, फिर 'Why this company?' का उत्तर दो। वेतन की संख्या पहले मत बोलो। आख़िर में हमेशा 1-2 सवाल पूछो। मॉडल उत्तरों को रट्टो मत — अपने शब्दों में, अपने उदाहरण के साथ बोलो।",
        ),
      ],
      mcqs: [
        {
          q: {
            hinglish: '"Tell me about yourself" ka behtar jawab kaun sa hai?',
            english: 'Which is the better answer to "Tell me about yourself"?',
            hindi: '"Tell me about yourself" का बेहतर उत्तर कौन सा है?',
          },
          opts: [
            { hinglish: 'Main Aarav hoon, B.Tech kar raha hoon.', english: 'I am Aarav, doing B.Tech.', hindi: 'मैं आरव हूँ, B.Tech कर रहा हूँ।' },
            { hinglish: 'Main chhota tha tab se mujhe computer pasand hai, mere papa... (5 minute ki kahani)', english: 'Since I was small I liked computers, my father... (a 5-minute story)', hindi: 'मैं छोटा था तब से मुझे कंप्यूटर पसंद है, मेरे पापा... (5 मिनट की कहानी)' },
            { hinglish: 'Naam, degree, 3 projects, DSA practice, aur kya role chahte ho — 1 minute me.', english: 'Name, degree, 3 projects, DSA practice, and the role you want — in 1 minute.', hindi: 'नाम, डिग्री, 3 प्रोजेक्ट, DSA अभ्यास, और क्या भूमिका चाहते हो — 1 मिनट में।' },
            { hinglish: 'Main hardworking, honest aur punctual hoon.', english: 'I am hardworking, honest and punctual.', hindi: 'मैं मेहनती, ईमानदार और समय का पाबंद हूँ।' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Sahi jawab 1 minute ka hota hai — present, past, skills, future — bina life story aur bina khaali daavon ke.',
            english: 'The right answer is 1 minute long — present, past, skills, future — with no life story and no empty claims.',
            hindi: 'सही उत्तर 1 मिनट का होता है — वर्तमान, अतीत, कौशल, भविष्य — बिना जीवन कहानी और बिना खाली दावों के।',
          },
        },
        {
          q: {
            hinglish: '"What is your weakness?" — kaun sa jawab behtar hai?',
            english: '"What is your weakness?" — Which answer is better?',
            hindi: '"What is your weakness?" — कौन सा उत्तर बेहतर है?',
          },
          opts: [
            { hinglish: 'Meri koi weakness nahi hai.', english: 'I have no weakness.', hindi: 'मेरी कोई कमज़ोरी नहीं है।' },
            { hinglish: 'Main perfectionist hoon.', english: 'I am a perfectionist.', hindi: 'मैं perfectionist हूँ।' },
            { hinglish: 'Main sawaal poochne me jhijhakta tha; ek bug par 2 din barbaad kiye. Ab 30 minute khud try karta hoon, phir help maangta hoon.', english: 'I used to hesitate to ask questions; I wasted 2 days on one bug. Now I try for 30 minutes on my own, then I ask for help.', hindi: 'मैं सवाल पूछने में झिझकता था; एक बग पर 2 दिन बर्बाद किए। अब 30 मिनट ख़ुद कोशिश करता हूँ, फिर मदद माँगता हूँ।' },
            { hinglish: 'Mujhe kaam karna pasand nahi hai.', english: 'I do not like working.', hindi: 'मुझे काम करना पसंद नहीं है।' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Sachchi weakness + us par kaam — yahi interviewer dekhna chahta hai. "Koi weakness nahi" aur "perfectionist" dono jhooth lagte hain.',
            english: 'A real weakness plus the work on it — that is what the interviewer wants to see. "No weakness" and "perfectionist" both sound false.',
            hindi: 'सच्ची कमज़ोरी + उस पर काम — यही इंटरव्यू लेने वाला देखना चाहता है। "कोई कमज़ोरी नहीं" और "perfectionist" दोनों झूठ लगते हैं।',
          },
        },
        {
          q: {
            hinglish: 'Interviewer pooche "Do you have any questions?" — kya karna chahiye?',
            english: 'The interviewer asks "Do you have any questions?" — What should you do?',
            hindi: 'इंटरव्यू लेने वाला पूछे "Do you have any questions?" — क्या करना चाहिए?',
          },
          opts: [
            { hinglish: '"No, sir" bolna', english: 'Say "No, sir"', hindi: '"No, sir" बोलना' },
            { hinglish: 'Salary ke baare me turant poochna', english: 'Ask about salary at once', hindi: 'वेतन के बारे में तुरंत पूछना' },
            { hinglish: 'Pehle mahine aur performance ke baare me 1-2 sawaal poochna', english: 'Ask 1 or 2 questions about the first month and performance', hindi: 'पहले महीने और प्रदर्शन के बारे में 1-2 सवाल पूछना' },
            { hinglish: 'Chup rehna', english: 'Stay silent', hindi: 'चुप रहना' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Sawaal poochna dikhata hai ki tum job me interested ho. "No, sir" ka matlab hai tumhe interest hi nahi hai.',
            english: 'Asking questions shows you are interested in the job. "No, sir" means you have no interest at all.',
            hindi: 'सवाल पूछना दिखाता है कि तुम नौकरी में रुचि रखते हो। "No, sir" का अर्थ है तुम्हें रुचि ही नहीं है।',
          },
        },
        {
          q: {
            hinglish: '"Why should we hire you?" — kaun sa jawab behtar hai?',
            english: '"Why should we hire you?" — Which answer is better?',
            hindi: '"Why should we hire you?" — कौन सा उत्तर बेहतर है?',
          },
          opts: [
            { hinglish: 'Kyunki mujhe job ki zaroorat hai.', english: 'Because I need the job.', hindi: 'क्योंकि मुझे नौकरी की ज़रूरत है।' },
            { hinglish: 'Kyunki main hardworking hoon.', english: 'Because I am hardworking.', hindi: 'क्योंकि मैं मेहनती हूँ।' },
            { hinglish: 'Kyunki main turant contribute kar sakta hoon — Java aur React aate hain, 3 projects banaye hain, aur internship me Git ek hafte me seekha.', english: 'Because I can contribute at once — I know Java and React, I built 3 projects, and in my internship I learned Git in one week.', hindi: 'क्योंकि मैं तुरंत योगदान कर सकता हूँ — Java और React आते हैं, 3 प्रोजेक्ट बनाए हैं, और इंटर्नशिप में Git एक हफ़्ते में सीखा।' },
            { hinglish: 'Kyunki mere dost bhi yahan kaam karte hain.', english: 'Because my friends also work here.', hindi: 'क्योंकि मेरे दोस्त भी यहाँ काम करते हैं।' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Behtar jawab me proof hai — skills, projects, aur seekhne ki speed. "Zaroorat hai" aur "hardworking hoon" me koi proof nahi hai.',
            english: 'The better answer has proof — skills, projects, and speed of learning. "I need it" and "I am hardworking" carry no proof.',
            hindi: 'बेहतर उत्तर में प्रमाण है — कौशल, प्रोजेक्ट, और सीखने की गति। "ज़रूरत है" और "मेहनती हूँ" में कोई प्रमाण नहीं है।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Apna 1-minute "Tell me about yourself" bolo aur record karo',
          english: 'Say your 1-minute "Tell me about yourself" aloud and record it',
          hindi: 'अपना 1 मिनट का "Tell me about yourself" बोलो और रिकॉर्ड करो',
        },
        task: {
          hinglish: 'Apna "Tell me about yourself" jawab likho — 1 minute, 4 hisse (present, past, skills, future), apne projects ke naam ke saath. Phir use phone par record karke zor se bolo. Recording suno aur check karo: kya ye 1 minute ke andar hai? Kya isme koi khaali daava hai ("hardworking") bina example ke? Kya tumne apne projects ka naam liya? Done tab mano jab tumhara jawab 1 minute ke andar ho, har hisse me ek sachchi detail ho, aur tum use bina padhe bol sako.',
          english: 'Write your "Tell me about yourself" answer — 1 minute, 4 parts (present, past, skills, future), with the names of your projects. Then record yourself saying it aloud on your phone. Listen to the recording and check: is it within 1 minute? Is there any empty claim ("hardworking") without an example? Did you name your projects? You are done when your answer fits in 1 minute, every part has one true detail, and you can say it without reading.',
          hindi: 'अपना "Tell me about yourself" उत्तर लिखो — 1 मिनट, 4 हिस्से (वर्तमान, अतीत, कौशल, भविष्य), अपने प्रोजेक्ट के नाम के साथ। फिर उसे फ़ोन पर रिकॉर्ड करके ज़ोर से बोलो। रिकॉर्डिंग सुनो और जाँचो: क्या यह 1 मिनट के अंदर है? क्या इसमें कोई खाली दावा है ("hardworking") बिना उदाहरण के? क्या तुमने अपने प्रोजेक्ट का नाम लिया? तब पूरा मानो जब तुम्हारा उत्तर 1 मिनट के अंदर हो, हर हिस्से में एक सच्चा विवरण हो, और तुम उसे बिना पढ़े बोल सको।',
        },
        language: 'python',
        starter: '# Task: apna "Tell me about yourself" jawab yahan likho (4 hisse).\nanswer = """Present: My name is ... I completed ...\nPast: I built ...\nSkills: I can ...\nFuture: I want ...\n"""\nprint(answer)\nprint("Words:", len(answer.split()))\n',
        expected: 'Jawab print hona chahiye — 4 hisse, lagbhag 120-150 words (1 minute ke liye), apne projects ke naam ke saath.',
      },
      readMinutes: 12,
    },
    {
      id: 'placement-technical-interview',
      subjectId: 'placement',
      title: {
        hinglish: 'Technical interview — DSA, DBMS aur OS ke sawaalon ke jawab',
        english: 'Technical interview — how to answer DSA, DBMS and OS questions',
        hindi: 'तकनीकी इंटरव्यू — DSA, DBMS और OS के सवालों के उत्तर',
      },
      summary: {
        hinglish: 'Technical interview me sahi answer se zyada tumhari soch check hoti hai. Pehle approach bolo, phir code likho, phir test karo. Har answer me 3 cheezein: definition, example, aur trade-off.',
        english: 'In the technical interview, your thinking is checked more than the right answer. First say the approach, then write the code, then test it. Every answer has 3 things: a definition, an example, and a trade-off.',
        hindi: 'तकनीकी इंटरव्यू में सही उत्तर से ज़्यादा तुम्हारी सोच जाँची जाती है। पहले तरीक़ा बोलो, फिर कोड लिखो, फिर जाँचो। हर उत्तर में 3 चीज़ें: परिभाषा, उदाहरण, और समझौता।',
      },
      sections: [
        s(
          H_WHAT,
          "Technical interview me interviewer tumse DSA (Data Structures and Algorithms), DBMS (Database), OS (Operating System) aur tumhare projects ke baare me poochta hai. Iska maksad ye check karna hai ki tum problem ko kaise sochte ho — kya tum seedha code likhne lagte ho, ya pehle sochte ho? Interview 30-45 minute ka hota hai. Aam taur par 2-3 coding sawaal, 2-3 theory sawaal, aur 2-3 project wale sawaal pooche jate hain. Interviewer ko perfect code nahi chahiye — use ye dekhna hai ki tum apni soch ko bol kar samjha sakte ho ya nahi. Jo student chup-chaap code likhta hai, woh sahi code likh kar bhi reject ho sakta hai. Jo student bol kar sochta hai — 'Pehle main brute force try karunga, phir optimize karunga' — woh galat code par bhi aage badh sakta hai, kyunki interviewer uski soch dekh leta hai.",
          "In the technical interview, the interviewer asks you about DSA (Data Structures and Algorithms), DBMS (Database), OS (Operating System) and your projects. The aim is to check how you think about a problem — do you start writing code at once, or do you think first? The interview lasts 30 to 45 minutes. Usually 2 to 3 coding questions, 2 to 3 theory questions, and 2 to 3 project questions are asked. The interviewer does not want perfect code — they want to see whether you can explain your thinking aloud. A student who writes code in silence can be rejected even with correct code. A student who thinks aloud — 'First I will try brute force, then I will optimise' — can move ahead even with wrong code, because the interviewer has seen their thinking.",
          "तकनीकी इंटरव्यू में इंटरव्यू लेने वाला तुमसे DSA (डेटा संरचना और एल्गोरिदम), DBMS (डेटाबेस), OS (ऑपरेटिंग सिस्टम) और तुम्हारे प्रोजेक्ट के बारे में पूछता है। इसका मकसद यह जाँचना है कि तुम समस्या को कैसे सोचते हो — क्या तुम सीधे कोड लिखने लगते हो, या पहले सोचते हो? इंटरव्यू 30-45 मिनट का होता है। आम तौर पर 2-3 कोडिंग सवाल, 2-3 सिद्धांत सवाल, और 2-3 प्रोजेक्ट वाले सवाल पूछे जाते हैं। इंटरव्यू लेने वाले को परफ़ेक्ट कोड नहीं चाहिए — उसे यह देखना है कि तुम अपनी सोच को बोलकर समझा सकते हो या नहीं। जो छात्र चुप-चाप कोड लिखता है, वह सही कोड लिखकर भी अस्वीकार हो सकता है। जो छात्र बोलकर सोचता है — 'पहले मैं brute force try करूँगा, फिर optimize करूँगा' — वह गलत कोड पर भी आगे बढ़ सकता है, क्योंकि इंटरव्यू लेने वाला उसकी सोच देख लेता है।",
        ),
        s(
          H_REAL,
          "Socho tum ek mechanic ke paas gaye aur bole: 'Meri bike start nahi ho rahi.' Achha mechanic seedha bike kholne nahi lagta — pehle poochta hai: 'Kab se nahi ho rahi? Petrol hai? Awaaz aati hai ya nahi?' Phir woh soch kar batata hai: 'Pehle spark plug check karenge, phir battery.' Wahi technical interview hai. Interviewer tumse problem deta hai — jaise 'Ek array ko reverse karo' — aur woh dekhna chahta hai ki tum pehle kya sochte ho. Jo student turant code likhne lagta hai, woh mechanic hai jo bina pooche bike khol deta hai. Jo student pehle bolta hai — 'Main do pointer use karunga, ek start se, ek end se, aur swap karunga' — woh achha mechanic hai. Interviewer ko tumhara dimaag chahiye, tumhara haath nahi.",
          "Imagine you go to a mechanic and say: 'My bike is not starting.' A good mechanic does not open the bike at once — first they ask: 'Since when? Is there petrol? Does it make a sound or not?' Then they think and say: 'First we will check the spark plug, then the battery.' That is the technical interview. The interviewer gives you a problem — like 'Reverse an array' — and wants to see what you think first. A student who starts writing code at once is a mechanic who opens the bike without asking. A student who first says — 'I will use two pointers, one from the start, one from the end, and swap them' — is a good mechanic. The interviewer wants your mind, not your hands.",
          "सोचो तुम एक मिस्त्री के पास गए और बोले: 'मेरी बाइक स्टार्ट नहीं हो रही।' अच्छा मिस्त्री सीधे बाइक खोलने नहीं लगता — पहले पूछता है: 'कब से नहीं हो रही? पेट्रोल है? आवाज़ आती है या नहीं?' फिर वह सोचकर बताता है: 'पहले spark plug जाँचेंगे, फिर बैटरी।' वही तकनीकी इंटरव्यू है। इंटरव्यू लेने वाला तुमसे समस्या देता है — जैसे 'एक array को reverse करो' — और वह देखना चाहता है कि तुम पहले क्या सोचते हो। जो छात्र तुरंत कोड लिखने लगता है, वह मिस्त्री है जो बिना पूछे बाइक खोल देता है। जो छात्र पहले बोलता है — 'मैं दो pointer इस्तेमाल करूँगा, एक start से, एक end से, और swap करूँगा' — वह अच्छा मिस्त्री है। इंटरव्यू लेने वाले को तुम्हारा दिमाग़ चाहिए, तुम्हारा हाथ नहीं।",
        ),
        s(
          H_STEPS,
          "Har coding sawaal ka method 4 steps ka hai. Step 1: sawaal ko apne shabdon me dobara bolo — 'Toh mujhe ek array ko ulta karna hai, bina extra array use kiye.' Step 2: approach bolo — 'Main do pointer use karunga.' Step 3: example par chala kar dikhao — '[1, 2, 3, 4] me pehle 1 aur 4 swap honge, phir 2 aur 3.' Step 4: code likho, phir test karo.\n\nWorked example 1 — DSA: 'Ek string ko reverse karo.' Approach bolo: 'Main string ko list me badalunga, do pointer lunga — left 0 par, right aakhri par — aur jab tak left chhota hai, swap karunga.' Code (Python): 'def reverse_string(s): chars = list(s); left, right = 0, len(chars) - 1; while left < right: chars[left], chars[right] = chars[right], chars[left]; left += 1; right -= 1; return \"\".join(chars)'. Test: 'reverse_string(\"hello\")' se 'olleh' milta hai. Time complexity O(n), space O(n). Interviewer ko ye bhi batao: 'Agar string bahut badi ho to bhi ye method ek hi baar me kaam karta hai.'\n\nWorked example 2 — DBMS: 'Primary key kya hoti hai?' Jawab: 'Primary key ek column ya columns ka group hota hai jo har row ko uniquely pehchan ta hai — jaise student table me roll number. Roll number kabhi khaali nahi ho sakta aur kabhi repeat nahi ho sakta. Example: agar do students ka naam Aarav hai, to naam se unhe alag nahi kiya ja sakta, lekin roll number se kiya ja sakta hai. Foreign key doosri table ki primary key ko refer karti hai — jaise marks table me roll number, student table se juda hota hai.'\n\nWorked example 3 — OS: 'Deadlock kya hota hai?' Jawab: 'Deadlock tab hota hai jab do processes ek doosre ka wait karte hain aur koi bhi aage nahi badh sakta. Example: Process A ke paas printer hai aur use scanner chahiye; Process B ke paas scanner hai aur use printer chahiye. Dono wait karte rehte hain — ye deadlock hai. Isse rokne ke liye ek rule hai: saare resources ek fixed order me maango, taaki circular wait na bane.'",
          "The method for every coding question has 4 steps. Step 1: repeat the question in your own words — 'So I have to reverse an array, without using an extra array.' Step 2: say the approach — 'I will use two pointers.' Step 3: run it on an example — 'In [1, 2, 3, 4], first 1 and 4 will swap, then 2 and 3.' Step 4: write the code, then test it.\n\nWorked example 1 — DSA: 'Reverse a string.' Say the approach: 'I will change the string into a list, take two pointers — left at 0, right at the last position — and swap while left is smaller.' Code (Python): 'def reverse_string(s): chars = list(s); left, right = 0, len(chars) - 1; while left < right: chars[left], chars[right] = chars[right], chars[left]; left += 1; right -= 1; return \"\".join(chars)'. Test: 'reverse_string(\"hello\")' gives 'olleh'. Time complexity O(n), space O(n). Also tell the interviewer: 'Even if the string is very large, this method works in one pass.'\n\nWorked example 2 — DBMS: 'What is a primary key?' Answer: 'A primary key is a column or a group of columns that identifies each row uniquely — like the roll number in a student table. A roll number can never be empty and can never repeat. Example: if two students are both named Aarav, the name cannot tell them apart, but the roll number can. A foreign key refers to the primary key of another table — like the roll number in a marks table, which joins to the student table.'\n\nWorked example 3 — OS: 'What is a deadlock?' Answer: 'A deadlock happens when two processes wait for each other and neither can move ahead. Example: Process A holds the printer and needs the scanner; Process B holds the scanner and needs the printer. Both keep waiting — that is a deadlock. One rule to stop it is: ask for all resources in a fixed order, so that a circular wait never forms.'",
          "हर कोडिंग सवाल की विधि 4 चरणों की है। चरण 1: सवाल को अपने शब्दों में दोबारा बोलो — 'तो मुझे एक array को उल्टा करना है, बिना extra array इस्तेमाल किए।' चरण 2: तरीक़ा बोलो — 'मैं दो pointer इस्तेमाल करूँगा।' चरण 3: उदाहरण पर चलाकर दिखाओ — '[1, 2, 3, 4] में पहले 1 और 4 swap होंगे, फिर 2 और 3।' चरण 4: कोड लिखो, फिर जाँचो।\n\nहल किया गया उदाहरण 1 — DSA: 'एक string को reverse करो।' तरीक़ा बोलो: 'मैं string को list में बदलूँगा, दो pointer लूँगा — left 0 पर, right आख़िरी पर — और जब तक left छोटा है, swap करूँगा।' कोड (Python): 'def reverse_string(s): chars = list(s); left, right = 0, len(chars) - 1; while left < right: chars[left], chars[right] = chars[right], chars[left]; left += 1; right -= 1; return \"\".join(chars)'। जाँच: 'reverse_string(\"hello\")' से 'olleh' मिलता है। Time complexity O(n), space O(n)। इंटरव्यू लेने वाले को यह भी बताओ: 'अगर string बहुत बड़ी हो तो भी यह विधि एक ही बार में काम करती है।'\n\nहल किया गया उदाहरण 2 — DBMS: 'Primary key क्या होती है?' उत्तर: 'Primary key एक column या columns का समूह होता है जो हर row को विशिष्ट रूप से पहचानता है — जैसे student table में roll number। Roll number कभी खाली नहीं हो सकता और कभी दोहराया नहीं जा सकता। उदाहरण: अगर दो छात्रों का नाम आरव है, तो नाम से उन्हें अलग नहीं किया जा सकता, लेकिन roll number से किया जा सकता है। Foreign key दूसरी table की primary key को दर्शाती है — जैसे marks table में roll number, student table से जुड़ा होता है।'\n\nहल किया गया उदाहरण 3 — OS: 'Deadlock क्या होता है?' उत्तर: 'Deadlock तब होता है जब दो processes एक दूसरे का इंतज़ार करती हैं और कोई भी आगे नहीं बढ़ सकता। उदाहरण: Process A के पास printer है और उसे scanner चाहिए; Process B के पास scanner है और उसे printer चाहिए। दोनों इंतज़ार करते रहते हैं — यह deadlock है। इसे रोकने के लिए एक नियम है: सारे resources एक निश्चित क्रम में माँगो, ताकि circular wait न बने।'",
        ),
        s(
          H_MISTAKES,
          "Galti 1: chup-chaap code likhna. Aisa kyun hota hai? Kyunki student ko lagta hai ki bolne se time barbaad hoga. Asliyat ye hai ki interviewer tumhari soch ko sunna chahta hai — chup rehne se woh kuch nahi dekh pata. Galti 2: 'Mujhe nahi pata' bol kar ruk jana. Sahi tareeka hai: 'Mujhe exact answer nahi pata, lekin main soch kar batata hoon...' — phir jo pata hai, woh bolo. Interviewer ko tumhari approach dekhni hai, perfect answer nahi. Galti 3: code likhne se pehle test case na sochna. Code likhne ke baad ek chhota example par chala kar dikhao — isse galti turant dikh jati hai. Galti 4: project ke baare me jhooth bolna. Interviewer tumhare project se hi sawaal poochta hai — agar tumne project me 'MongoDB' likha hai aur tumhe MongoDB ke baare me kuch nahi pata, to tum fas jaoge. Apne project ka har hissa samajh kar jao.",
          "Mistake 1: writing code in silence. Why does this happen? Because students think speaking wastes time. The truth is that the interviewer wants to hear your thinking — in silence they see nothing. Mistake 2: stopping at 'I do not know'. The right way is: 'I do not know the exact answer, but let me think it through...' — then say what you do know. The interviewer wants to see your approach, not a perfect answer. Mistake 3: not thinking of a test case before writing code. After writing the code, run it on a small example — an error shows up at once. Mistake 4: lying about your project. The interviewer asks questions from your project itself — if you wrote 'MongoDB' in your project and know nothing about MongoDB, you will be caught. Go after understanding every part of your project.",
          "गलती 1: चुप-चाप कोड लिखना। ऐसा क्यों होता है? क्योंकि छात्र को लगता है कि बोलने से समय बर्बाद होगा। असलियत यह है कि इंटरव्यू लेने वाला तुम्हारी सोच को सुनना चाहता है — चुप रहने से वह कुछ नहीं देख पाता। गलती 2: 'मुझे नहीं पता' बोलकर रुक जाना। सही तरीक़ा है: 'मुझे exact answer नहीं पता, लेकिन मैं सोचकर बताता हूँ...' — फिर जो पता है, वह बोलो। इंटरव्यू लेने वाले को तुम्हारी approach देखनी है, perfect answer नहीं। गलती 3: कोड लिखने से पहले test case न सोचना। कोड लिखने के बाद एक छोटे उदाहरण पर चलाकर दिखाओ — इससे गलती तुरंत दिख जाती है। गलती 4: प्रोजेक्ट के बारे में झूठ बोलना। इंटरव्यू लेने वाला तुम्हारे प्रोजेक्ट से ही सवाल पूछता है — अगर तुमने प्रोजेक्ट में 'MongoDB' लिखा है और तुम्हें MongoDB के बारे में कुछ नहीं पता, तो तुम फँस जाओगे। अपने प्रोजेक्ट का हर हिस्सा समझकर जाओ।",
        ),
        s(
          H_EDGE,
          "Edge case 1: interviewer ne aisa sawaal poocha jo tumne kabhi nahi padha — jaise 'HashMap ka internal kaam kya hai?' Tab bolo: 'Mujhe internal detail poori nahi pata, lekin main jitna jaanta hoon woh batata hoon...' — phir basic se shuru karo. Edge case 2: code me bug aa gaya aur time khatm ho raha hai. Tab bug ko chhupao mat — bolo: 'Yahan ek edge case reh gaya hai, main use fix karta hoon.' Interviewer ko tumhari honesty pasand aayegi. Edge case 3: interviewer tumse tumhare project ka code maang le. Tab project ka structure samjhao — 'Ye file login handle karti hai, ye database se connect karti hai.' Poora code yaad rakhne ki zaroorat nahi, structure samajhna kaafi hai. Edge case 4: do interviewer hon aur dono alag sawaal poochain. Tab ek ko jawab do, phir doosre ki taraf mudo — dono ko ignore mat karo.",
          "Edge case 1: the interviewer asks something you never studied — like 'How does a HashMap work internally?' Then say: 'I do not know the full internal detail, but I will tell you what I know...' — then start from the basics. Edge case 2: a bug appears in your code and time is running out. Do not hide the bug — say: 'One edge case is left here, let me fix it.' The interviewer will like your honesty. Edge case 3: the interviewer asks for the code of your project. Then explain the structure of the project — 'This file handles login, this one connects to the database.' You do not need to remember the full code; understanding the structure is enough. Edge case 4: there are two interviewers asking different questions. Answer one, then turn to the other — do not ignore either.",
          "विशेष स्थिति 1: इंटरव्यू लेने वाले ने ऐसा सवाल पूछा जो तुमने कभी नहीं पढ़ा — जैसे 'HashMap का internal काम क्या है?' तब बोलो: 'मुझे internal detail पूरी नहीं पता, लेकिन मैं जितना जानता हूँ वह बताता हूँ...' — फिर basic से शुरू करो। विशेष स्थिति 2: कोड में bug आ गया और समय ख़त्म हो रहा है। तब bug को छिपाओ मत — बोलो: 'यहाँ एक edge case रह गया है, मैं उसे fix करता हूँ।' इंटरव्यू लेने वाले को तुम्हारी ईमानदारी पसंद आएगी। विशेष स्थिति 3: इंटरव्यू लेने वाला तुमसे तुम्हारे प्रोजेक्ट का कोड माँग ले। तब प्रोजेक्ट का structure समझाओ — 'यह फ़ाइल login handle करती है, यह database से connect करती है।' पूरा कोड याद रखने की ज़रूरत नहीं, structure समझना काफ़ी है। विशेष स्थिति 4: दो इंटरव्यू लेने वाले हों और दोनों अलग सवाल पूछें। तब एक को उत्तर दो, फिर दूसरे की तरफ़ मुड़ो — दोनों को ignore मत करो।",
        ),
        s(
          H_CHANGE,
          "Agar tum coding sawaal me seedha code likhne lago, to kya hoga? Tum galat direction me chale jaoge, aur interviewer ko pata bhi nahi chalega ki tum kya soch rahe ho — woh tumhe rok nahi payega. Agar tum pehle approach bol do, to kya hoga? Interviewer tumhe beech me guide kar dega — 'Haan, ye direction sahi hai' — aur tum sahi raaste par rahoge. Agar tum har theory answer me ek example daal do, to kya hoga? Tumhara answer yaad rehta hai — 'primary key' ka definition sab bol dete hain, lekin roll number wala example sirf tum bologe. Technical interview me example hi tumhe alag karta hai.",
          "If you start writing code at once in a coding question, what happens? You go in the wrong direction, and the interviewer cannot even tell what you are thinking — they cannot stop you. If you first say the approach, what happens? The interviewer guides you in the middle — 'Yes, this direction is right' — and you stay on the right path. If you add one example to every theory answer, what happens? Your answer stays in memory — everyone says the definition of 'primary key', but only you give the roll number example. In the technical interview, the example is what sets you apart.",
          "अगर तुम कोडिंग सवाल में सीधे कोड लिखने लगो, तो क्या होगा? तुम गलत दिशा में चले जाओगे, और इंटरव्यू लेने वाले को पता भी नहीं चलेगा कि तुम क्या सोच रहे हो — वह तुम्हें रोक नहीं पाएगा। अगर तुम पहले approach बोल दो, तो क्या होगा? इंटरव्यू लेने वाला तुम्हें बीच में guide कर देगा — 'हाँ, यह दिशा सही है' — और तुम सही रास्ते पर रहोगे। अगर तुम हर theory उत्तर में एक उदाहरण डाल दो, तो क्या होगा? तुम्हारा उत्तर याद रहता है — 'primary key' की परिभाषा सब बोल देते हैं, लेकिन roll number वाला उदाहरण सिर्फ़ तुम बोलोगे। तकनीकी इंटरव्यू में उदाहरण ही तुम्हें अलग करता है।",
        ),
        s(
          H_SUMMARY,
          "Technical interview ka formula: sawaal dobara bolo, approach bolo, example par chalao, phir code likho. Har theory answer me 3 cheezein: definition, example, trade-off. 'Mujhe nahi pata' bol kar ruko mat — jo pata hai, woh bolo. Apne project ka har hissa samajh kar jao, kyunki interviewer wahin se sawaal poochta hai. Roz ek coding sawaal bol kar solve karo — bolna hi practice hai.",
          "The formula for the technical interview: repeat the question, say the approach, run it on an example, then write the code. Every theory answer has 3 things: a definition, an example, a trade-off. Do not stop at 'I do not know' — say what you do know. Go after understanding every part of your project, because the interviewer asks questions from there. Solve one coding question aloud every day — speaking is the practice.",
          "तकनीकी इंटरव्यू का सूत्र: सवाल दोबारा बोलो, approach बोलो, उदाहरण पर चलाओ, फिर कोड लिखो। हर theory उत्तर में 3 चीज़ें: परिभाषा, उदाहरण, समझौता। 'मुझे नहीं पता' बोलकर रुको मत — जो पता है, वह बोलो। अपने प्रोजेक्ट का हर हिस्सा समझकर जाओ, क्योंकि इंटरव्यू लेने वाला वहीं से सवाल पूछता है। रोज़ एक कोडिंग सवाल बोलकर हल करो — बोलना ही अभ्यास है।",
        ),
      ],
      mcqs: [
        {
          q: {
            hinglish: 'Coding sawaal milte hi sabse pehle kya karna chahiye?',
            english: 'What should you do first when you get a coding question?',
            hindi: 'कोडिंग सवाल मिलते ही सबसे पहले क्या करना चाहिए?',
          },
          opts: [
            { hinglish: 'Turant code likhna shuru kar do', english: 'Start writing code at once', hindi: 'तुरंत कोड लिखना शुरू कर दो' },
            { hinglish: 'Sawaal ko apne shabdon me dobara bolo aur approach bolo', english: 'Repeat the question in your own words and say the approach', hindi: 'सवाल को अपने शब्दों में दोबारा बोलो और approach बोलो' },
            { hinglish: 'Chup-chaap socho aur kuch mat bolo', english: 'Think in silence and say nothing', hindi: 'चुप-चाप सोचो और कुछ मत बोलो' },
            { hinglish: 'Interviewer se jawab pooch lo', english: 'Ask the interviewer for the answer', hindi: 'इंटरव्यू लेने वाले से उत्तर पूछ लो' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Pehle approach bolne se interviewer tumhe guide kar sakta hai aur tumhari soch dekh sakta hai. Turant code likhne se galat direction me jaane ka risk hota hai.',
            english: 'Saying the approach first lets the interviewer guide you and see your thinking. Writing code at once risks going in the wrong direction.',
            hindi: 'पहले approach बोलने से इंटरव्यू लेने वाला तुम्हें guide कर सकता है और तुम्हारी सोच देख सकता है। तुरंत कोड लिखने से गलत दिशा में जाने का जोखिम होता है।',
          },
        },
        {
          q: {
            hinglish: 'Primary key ke baare me kaun sa statement sahi hai?',
            english: 'Which statement about a primary key is correct?',
            hindi: 'Primary key के बारे में कौन सा कथन सही है?',
          },
          opts: [
            { hinglish: 'Primary key repeat ho sakti hai', english: 'A primary key can repeat', hindi: 'Primary key दोहराई जा सकती है' },
            { hinglish: 'Primary key khaali ho sakti hai', english: 'A primary key can be empty', hindi: 'Primary key खाली हो सकती है' },
            { hinglish: 'Primary key har row ko uniquely pehchan ti hai aur kabhi repeat nahi hoti', english: 'A primary key identifies each row uniquely and never repeats', hindi: 'Primary key हर row को विशिष्ट रूप से पहचानती है और कभी दोहराई नहीं जाती' },
            { hinglish: 'Har table me primary key hona zaroori nahi hota', english: 'A primary key is not needed in every table', hindi: 'हर table में primary key होना ज़रूरी नहीं होता' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Primary key har row ko uniquely pehchan ti hai — jaise roll number. Woh kabhi khaali aur kabhi repeat nahi ho sakti.',
            english: 'A primary key identifies each row uniquely — like a roll number. It can never be empty and can never repeat.',
            hindi: 'Primary key हर row को विशिष्ट रूप से पहचानती है — जैसे roll number। वह कभी खाली और कभी दोहराई नहीं जा सकती।',
          },
        },
        {
          q: {
            hinglish: 'Deadlock kya hota hai?',
            english: 'What is a deadlock?',
            hindi: 'Deadlock क्या होता है?',
          },
          opts: [
            { hinglish: 'Jab computer slow ho jata hai', english: 'When the computer becomes slow', hindi: 'जब कंप्यूटर धीमा हो जाता है' },
            { hinglish: 'Jab do processes ek doosre ka wait karti hain aur koi aage nahi badh sakta', english: 'When two processes wait for each other and neither can move ahead', hindi: 'जब दो processes एक दूसरे का इंतज़ार करती हैं और कोई आगे नहीं बढ़ सकता' },
            { hinglish: 'Jab memory full ho jati hai', english: 'When the memory becomes full', hindi: 'जब memory full हो जाती है' },
            { hinglish: 'Jab ek process crash ho jati hai', english: 'When one process crashes', hindi: 'जब एक process crash हो जाती है' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Deadlock me do processes ek doosre ke resource ka wait karti hain — jaise ek ke paas printer, doosre ke paas scanner — aur dono atak jati hain.',
            english: 'In a deadlock, two processes wait for each other\'s resource — one holds the printer, the other holds the scanner — and both get stuck.',
            hindi: 'Deadlock में दो processes एक दूसरे के resource का इंतज़ार करती हैं — जैसे एक के पास printer, दूसरे के पास scanner — और दोनों अटक जाती हैं।',
          },
        },
        {
          q: {
            hinglish: 'Interviewer ko "Mujhe nahi pata" kehne par kya karna chahiye?',
            english: 'What should you do after telling the interviewer "I do not know"?',
            hindi: 'इंटरव्यू लेने वाले को "मुझे नहीं पता" कहने पर क्या करना चाहिए?',
          },
          opts: [
            { hinglish: 'Ruk jao aur agle sawaal ka intezaar karo', english: 'Stop and wait for the next question', hindi: 'रुक जाओ और अगले सवाल का इंतज़ार करो' },
            { hinglish: 'Kuch bhi guess karke bol do', english: 'Guess anything and say it', hindi: 'कुछ भी अनुमान लगाकर बोल दो' },
            { hinglish: 'Bolo "Main soch kar batata hoon" aur jo pata hai, woh bolo', english: 'Say "Let me think it through" and say what you do know', hindi: 'बोलो "मैं सोचकर बताता हूँ" और जो पता है, वह बोलो' },
            { hinglish: 'Topic badal do', english: 'Change the topic', hindi: 'विषय बदल दो' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Interviewer ko tumhari approach dekhni hai, perfect answer nahi. Soch kar bolna tumhari problem-solving dikhata hai; ruk jana kuch nahi dikhata.',
            english: 'The interviewer wants to see your approach, not a perfect answer. Thinking aloud shows your problem-solving; stopping shows nothing.',
            hindi: 'इंटरव्यू लेने वाले को तुम्हारी approach देखनी है, perfect answer नहीं। सोचकर बोलना तुम्हारी problem-solving दिखाता है; रुक जाना कुछ नहीं दिखाता।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Ek coding sawaal bol kar solve karo',
          english: 'Solve one coding question by speaking aloud',
          hindi: 'एक कोडिंग सवाल बोलकर हल करो',
        },
        task: {
          hinglish: 'Ye sawaal lo: "Ek string ko reverse karo." Pehle sawaal ko apne shabdon me likho, phir approach likho (do pointer, swap), phir "hello" par step-by-step chalao, phir code likho. Har step ko zor se bolo aur phone par record karo. Phir code ko chalao aur check karo ki "hello" se "olleh" milta hai ya nahi. Done tab mano jab tumne sawaal bol kar solve kiya ho, code chal gaya ho, aur tum time complexity (O(n)) bata sako.',
          english: 'Take this question: "Reverse a string." First write the question in your own words, then write the approach (two pointers, swap), then run it step by step on "hello", then write the code. Say every step aloud and record it on your phone. Then run the code and check whether "hello" gives "olleh". You are done when you solved the question by speaking, the code runs, and you can state the time complexity (O(n)).',
          hindi: 'यह सवाल लो: "एक string को reverse करो।" पहले सवाल को अपने शब्दों में लिखो, फिर approach लिखो (दो pointer, swap), फिर "hello" पर चरण-दर-चरण चलाओ, फिर कोड लिखो। हर चरण को ज़ोर से बोलो और फ़ोन पर रिकॉर्ड करो। फिर कोड को चलाओ और जाँचो कि "hello" से "olleh" मिलता है या नहीं। तब पूरा मानो जब तुमने सवाल बोलकर हल किया हो, कोड चल गया हो, और तुम time complexity (O(n)) बता सको।',
        },
        language: 'python',
        starter: 'def reverse_string(s):\n    chars = list(s)\n    left, right = 0, len(chars) - 1\n    while left < right:\n        chars[left], chars[right] = chars[right], chars[left]\n        left += 1\n        right -= 1\n    return "".join(chars)\n\nprint(reverse_string("hello"))\n',
        expected: '"olleh" print hona chahiye.',
      },
      readMinutes: 12,
    },
    {
      id: 'placement-mock-interview',
      subjectId: 'placement',
      title: {
        hinglish: 'Mock interview practice — akele aur partner ke saath',
        english: 'Mock interview practice — alone and with a partner',
        hindi: 'मॉक इंटरव्यू अभ्यास — अकेले और साथी के साथ',
      },
      summary: {
        hinglish: 'Interview ki taiyari padhne se nahi, bolne se hoti hai. Akele me phone par record karo, partner ke saath real interview jaisa mahaul banao, aur har mock ke baad 3 cheezein likho: kya achha tha, kya kharab tha, agle baar kya badlega.',
        english: 'Interview preparation comes from speaking, not from reading. Record yourself on your phone when alone, create a real interview setting with a partner, and after every mock write 3 things: what was good, what was bad, what will change next time.',
        hindi: 'इंटरव्यू की तैयारी पढ़ने से नहीं, बोलने से होती है। अकेले में फ़ोन पर रिकॉर्ड करो, साथी के साथ असली इंटरव्यू जैसा माहौल बनाओ, और हर मॉक के बाद 3 चीज़ें लिखो: क्या अच्छा था, क्या ख़राब था, अगली बार क्या बदलेगा।',
      },
      sections: [
        s(
          H_WHAT,
          "Mock interview ka matlab hai: asli interview se pehle, nakli interview karke practice karna. Tum interviewer aur candidate dono ka role play karte ho — ya ek dost interviewer banta hai aur tum candidate. Iska maksad ye hai ki asli interview ke din tumhe kuch bhi naya na lage: sawaal pehchane hue hon, jawab bolne ki aadat ho, aur ghabrahat kam ho. Research batati hai ki jo student 5 mock interview karta hai, uski performance pehle mock se 5th mock tak aadhi se zyada badh jati hai — kyunki pehle mock me woh ghabrata hai, aur 5th mock tak woh flow me aa jata hai. Mock interview ke 3 hisse hote hain: pehle, sawaal poocho aur jawab do (15 minute); doosre, feedback lo — kya achha tha, kya kharab tha; teesre, galti ko fix karo aur dobara karo. Bina feedback ke mock sirf baat-cheet hai; feedback ke saath mock hi asli practice hai.",
          "A mock interview means: before the real interview, practising with a fake interview. You play both roles — interviewer and candidate — or a friend becomes the interviewer and you become the candidate. The aim is that on the day of the real interview, nothing feels new: the questions are familiar, answering is a habit, and nervousness is low. Research shows that a student who does 5 mock interviews improves more than halfway from the first mock to the fifth — because in the first mock they are nervous, and by the fifth mock they are in flow. A mock interview has 3 parts: first, ask questions and answer them (15 minutes); second, take feedback — what was good, what was bad; third, fix the mistake and do it again. A mock without feedback is only a chat; a mock with feedback is the real practice.",
          "मॉक इंटरव्यू का अर्थ है: असली इंटरव्यू से पहले, नकली इंटरव्यू करके अभ्यास करना। तुम इंटरव्यू लेने वाले और उम्मीदवार दोनों की भूमिका निभाते हो — या एक दोस्त इंटरव्यू लेने वाला बनता है और तुम उम्मीदवार। इसका मकसद यह है कि असली इंटरव्यू के दिन तुम्हें कुछ भी नया न लगे: सवाल पहचाने हुए हों, उत्तर बोलने की आदत हो, और घबराहट कम हो। शोध बताता है कि जो छात्र 5 मॉक इंटरव्यू करता है, उसका प्रदर्शन पहले मॉक से 5वें मॉक तक आधे से ज़्यादा बढ़ जाता है — क्योंकि पहले मॉक में वह घबराता है, और 5वें मॉक तक वह प्रवाह में आ जाता है। मॉक इंटरव्यू के 3 हिस्से होते हैं: पहले, सवाल पूछो और उत्तर दो (15 मिनट); दूसरे, फ़ीडबैक लो — क्या अच्छा था, क्या ख़राब था; तीसरे, गलती को ठीक करो और दोबारा करो। बिना फ़ीडबैक के मॉक सिर्फ़ बात-चीत है; फ़ीडबैक के साथ मॉक ही असली अभ्यास है।",
        ),
        s(
          H_REAL,
          "Socho tum ek cricket match se pehle net practice karte ho. Net me bowler wahi ball daalta hai jo match me aayegi — fast, slow, spin. Tum net me 100 ball khelte ho, to match me pehli ball par tum ghabrate nahi. Mock interview wahi net practice hai. Asli interview me 'Tell me about yourself' poocha jayega — tumne mock me use 5 baar bola hai, to asli interview me tum ruko ge nahi. Jo student bina mock ke interview deta hai, woh net practice ke bina match khelne jaisa hai — pehli ball par hi out ho sakta hai. Aur ek baat: net practice me coach tumhari galti batata hai — 'Tumhara pair aage nahi aa raha.' Mock me bhi wahi hota hai: partner batata hai — 'Tum bahut tez bol rahe ho' ya 'Tumne example nahi diya.' Ye feedback hi tumhe match ke liye taiyaar karta hai.",
          "Imagine you practise in the nets before a cricket match. In the nets, the bowler bowls the same balls that will come in the match — fast, slow, spin. You play 100 balls in the nets, so in the match you are not nervous on the first ball. A mock interview is that net practice. In the real interview, 'Tell me about yourself' will be asked — you said it 5 times in mocks, so in the real interview you will not stop. A student who gives an interview without mocks is like playing a match without net practice — they can get out on the first ball. And one more thing: in net practice the coach points out your mistake — 'Your foot is not coming forward.' The same happens in a mock: your partner says — 'You are speaking too fast' or 'You gave no example.' That feedback is what prepares you for the match.",
          "सोचो तुम एक क्रिकेट मैच से पहले नेट अभ्यास करते हो। नेट में गेंदबाज़ वही गेंद डालता है जो मैच में आएगी — तेज़, धीमी, स्पिन। तुम नेट में 100 गेंद खेलते हो, तो मैच में पहली गेंद पर तुम घबराते नहीं। मॉक इंटरव्यू वही नेट अभ्यास है। असली इंटरव्यू में 'Tell me about yourself' पूछा जाएगा — तुमने मॉक में उसे 5 बार बोला है, तो असली इंटरव्यू में तुम रुकोगे नहीं। जो छात्र बिना मॉक के इंटरव्यू देता है, वह नेट अभ्यास के बिना मैच खेलने जैसा है — पहली गेंद पर ही आउट हो सकता है। और एक बात: नेट अभ्यास में कोच तुम्हारी गलती बताता है — 'तुम्हारा पैर आगे नहीं आ रहा।' मॉक में भी वही होता है: साथी बताता है — 'तुम बहुत तेज़ बोल रहे हो' या 'तुमने उदाहरण नहीं दिया।' यह फ़ीडबैक ही तुम्हें मैच के लिए तैयार करता है।",
        ),
        s(
          H_STEPS,
          "Akele practice ka method (roz 20 minute): Step 1: phone par timer lagao — 15 minute. Step 2: 5 sawaal likho — 'Tell me about yourself', ek strength, ek weakness, ek technical sawaal (jaise 'Primary key kya hai?'), aur ek project wala sawaal. Step 3: phone ko record par lagao aur har sawaal ka jawab zor se bolo, jaise interviewer saamne baitha ho. Step 4: recording suno aur 3 cheezein likho — (a) kya achha tha, (b) kya kharab tha, (c) agle baar kya badlega.\n\nWorked example — ek mock ka feedback sheet: Sawaal: 'Tell me about yourself.' Tumne bola: 2 minute 10 second (bahut lamba). Achha: projects ka naam liya. Kharab: 'hardworking' bola bina example ke, aur aakhir me 'thank you' bolna bhool gaye. Agle baar: 1 minute me khatm karo, 'hardworking' ki jagah daily DSA practice ka example do.\n\nPartner ke saath practice ka method (hafte me 2 baar, 30 minute): Step 1: ek dost ko interviewer banao — use 10 sawaal ki list do (is article ke sawaal + technical sawaal). Step 2: dost tumse sawaal pooche, tum jawab do. Dost ko ye bhi bolo ki woh beech me ek mushkil sawaal pooche — jaise 'Tumhari sabse badi failure kya thi?' Step 3: interview ke baad dost tumhe 1 se 5 tak number de: clarity (saaf bola ya nahi), confidence (aankh mila kar bola ya nahi), examples (example diye ya nahi), aur time (jawab 1 minute me tha ya nahi). Step 4: roles badlo — ab tum interviewer bano. Interviewer banne se tum samajh jaoge ki interviewer kya sunna chahta hai.\n\nWorked example — partner feedback: Clarity 4/5 (saaf bola, lekin ek baar 'uhh' bola). Confidence 3/5 (neeche dekh kar bola). Examples 2/5 (sirf ek example diya). Time 4/5 (jawab 1 minute 10 second me khatm). Agle mock ka target: examples 4/5 — har jawab me ek example.",
          "The method for practising alone (20 minutes a day): Step 1: set a timer on your phone — 15 minutes. Step 2: write 5 questions — 'Tell me about yourself', one strength, one weakness, one technical question (like 'What is a primary key?'), and one project question. Step 3: start recording on your phone and answer each question aloud, as if the interviewer is sitting in front of you. Step 4: listen to the recording and write 3 things — (a) what was good, (b) what was bad, (c) what will change next time.\n\nWorked example — a feedback sheet from one mock: Question: 'Tell me about yourself.' You spoke for 2 minutes 10 seconds (too long). Good: you named your projects. Bad: you said 'hardworking' without an example, and you forgot to say 'thank you' at the end. Next time: finish in 1 minute, and give the daily DSA practice example instead of 'hardworking'.\n\nThe method for practising with a partner (twice a week, 30 minutes): Step 1: make a friend the interviewer — give them a list of 10 questions (the questions from this article plus technical questions). Step 2: your friend asks questions, you answer. Also tell your friend to ask one hard question in the middle — like 'What was your biggest failure?' Step 3: after the interview, your friend scores you from 1 to 5: clarity (did you speak clearly), confidence (did you make eye contact), examples (did you give examples), and time (was the answer within 1 minute). Step 4: swap roles — now you become the interviewer. Becoming the interviewer teaches you what the interviewer wants to hear.\n\nWorked example — partner feedback: Clarity 4/5 (spoke clearly, but said 'uhh' once). Confidence 3/5 (looked down while speaking). Examples 2/5 (gave only one example). Time 4/5 (answer finished in 1 minute 10 seconds). Target for the next mock: examples 4/5 — one example in every answer.",
          "अकेले अभ्यास की विधि (रोज़ 20 मिनट): चरण 1: फ़ोन पर टाइमर लगाओ — 15 मिनट। चरण 2: 5 सवाल लिखो — 'Tell me about yourself', एक मज़बूती, एक कमज़ोरी, एक तकनीकी सवाल (जैसे 'Primary key क्या है?'), और एक प्रोजेक्ट वाला सवाल। चरण 3: फ़ोन को रिकॉर्ड पर लगाओ और हर सवाल का उत्तर ज़ोर से बोलो, जैसे इंटरव्यू लेने वाला सामने बैठा हो। चरण 4: रिकॉर्डिंग सुनो और 3 चीज़ें लिखो — (a) क्या अच्छा था, (b) क्या ख़राब था, (c) अगली बार क्या बदलेगा।\n\nहल किया गया उदाहरण — एक मॉक की फ़ीडबैक शीट: सवाल: 'Tell me about yourself.' तुमने बोला: 2 मिनट 10 सेकंड (बहुत लंबा)। अच्छा: प्रोजेक्ट का नाम लिया। ख़राब: 'hardworking' बोला बिना उदाहरण के, और आख़िर में 'thank you' बोलना भूल गए। अगली बार: 1 मिनट में ख़त्म करो, 'hardworking' की जगह daily DSA practice का उदाहरण दो।\n\nसाथी के साथ अभ्यास की विधि (हफ़्ते में 2 बार, 30 मिनट): चरण 1: एक दोस्त को इंटरव्यू लेने वाला बनाओ — उसे 10 सवालों की सूची दो (इस लेख के सवाल + तकनीकी सवाल)। चरण 2: दोस्त तुमसे सवाल पूछे, तुम उत्तर दो। दोस्त को यह भी बोलो कि वह बीच में एक मुश्किल सवाल पूछे — जैसे 'तुम्हारी सबसे बड़ी असफलता क्या थी?' चरण 3: इंटरव्यू के बाद दोस्त तुम्हें 1 से 5 तक नंबर दे: स्पष्टता (साफ़ बोला या नहीं), आत्मविश्वास (आँख मिलाकर बोला या नहीं), उदाहरण (उदाहरण दिए या नहीं), और समय (उत्तर 1 मिनट में था या नहीं)। चरण 4: भूमिकाएँ बदलो — अब तुम इंटरव्यू लेने वाले बनो। इंटरव्यू लेने वाला बनने से तुम समझ जाओगे कि इंटरव्यू लेने वाला क्या सुनना चाहता है।\n\nहल किया गया उदाहरण — साथी का फ़ीडबैक: स्पष्टता 4/5 (साफ़ बोला, लेकिन एक बार 'uhh' बोला)। आत्मविश्वास 3/5 (नीचे देखकर बोला)। उदाहरण 2/5 (सिर्फ़ एक उदाहरण दिया)। समय 4/5 (उत्तर 1 मिनट 10 सेकंड में ख़त्म)। अगले मॉक का लक्ष्य: उदाहरण 4/5 — हर उत्तर में एक उदाहरण।",
        ),
        s(
          H_MISTAKES,
          "Galti 1: mock ko sirf padh kar karna — sawaal padho, jawab dimaag me socho, bolna mat. Aisa kyun hota hai? Kyunki bolna mushkil lagta hai. Lekin interview me bolna hi hota hai — dimaag me socha hua jawab bolne par alag lagta hai. Jo jawab dimaag me perfect lagta hai, woh bolne par atak sakta hai. Isliye har mock me zor se bolo. Galti 2: feedback na lena. Mock ke baad agar tumne ye nahi likha ki kya kharab tha, to agle mock me wahi galti dobara hogi. Feedback sheet bharna optional nahi hai — wahi mock ka asli kaam hai. Galti 3: sirf aasan sawaal practice karna. Mushkil sawaal — failure, weakness, gap year — se bhaagna matlab asli interview me unse haar jana. Mushkil sawaal ki practice pehle karo. Galti 4: ek hi baar mock karna. Ek mock se kuch nahi hota — kam se kam 5 mock karo, aur har mock me ek cheez behtar karo.",
          "Mistake 1: doing the mock only by reading — read the question, think the answer in your mind, never speak. Why does this happen? Because speaking feels hard. But in the interview you must speak — an answer that feels perfect in the mind can get stuck when spoken. So speak aloud in every mock. Mistake 2: taking no feedback. If after a mock you did not write what was bad, the same mistake will repeat in the next mock. Filling the feedback sheet is not optional — it is the real work of the mock. Mistake 3: practising only easy questions. Running away from hard questions — failure, weakness, gap year — means losing to them in the real interview. Practise the hard questions first. Mistake 4: doing only one mock. One mock achieves nothing — do at least 5 mocks, and improve one thing in each mock.",
          "गलती 1: मॉक को सिर्फ़ पढ़कर करना — सवाल पढ़ो, उत्तर दिमाग़ में सोचो, बोलना मत। ऐसा क्यों होता है? क्योंकि बोलना मुश्किल लगता है। लेकिन इंटरव्यू में बोलना ही होता है — दिमाग़ में सोचा हुआ उत्तर बोलने पर अलग लगता है। जो उत्तर दिमाग़ में perfect लगता है, वह बोलने पर अटक सकता है। इसलिए हर मॉक में ज़ोर से बोलो। गलती 2: फ़ीडबैक न लेना। मॉक के बाद अगर तुमने यह नहीं लिखा कि क्या ख़राब था, तो अगले मॉक में वही गलती दोबारा होगी। फ़ीडबैक शीट भरना वैकल्पिक नहीं है — वही मॉक का असली काम है। गलती 3: सिर्फ़ आसान सवाल अभ्यास करना। मुश्किल सवाल — असफलता, कमज़ोरी, गैप वर्ष — से भागना मतलब असली इंटरव्यू में उनसे हार जाना। मुश्किल सवाल का अभ्यास पहले करो। गलती 4: एक ही बार मॉक करना। एक मॉक से कुछ नहीं होता — कम से कम 5 मॉक करो, और हर मॉक में एक चीज़ बेहतर करो।",
        ),
        s(
          H_EDGE,
          "Edge case 1: koi partner nahi hai. Tab akele practice karo — phone par record karo, aur apne hi feedback sheet bharo. Akele mock bhi kaam karta hai, bas feedback khud ko dena hota hai. Edge case 2: partner serious nahi hai, hasne lagta hai. Tab use interviewer ki list do aur bolo: '15 minute serious raho, phir has lena.' Agar phir bhi serious na ho, to doosra partner dhoondho. Edge case 3: interview online hai (video call). Tab mock bhi video call par karo — camera on rakho, light face par rakho, aur background saaf rakho. Online mock me ye bhi check karo ki awaaz saaf aa rahi hai ya nahi. Edge case 4: interview kal hai aur time nahi hai. Tab ek hi mock karo — sirf 'Tell me about yourself' aur 2 technical sawaal — aur feedback sheet bharo. Ek mock bhi zero se behtar hai.",
          "Edge case 1: there is no partner. Then practise alone — record on your phone, and fill your own feedback sheet. A solo mock also works; you only have to give yourself the feedback. Edge case 2: the partner is not serious and starts laughing. Then give them the interviewer list and say: 'Stay serious for 15 minutes, then laugh.' If they still are not serious, find another partner. Edge case 3: the interview is online (a video call). Then do the mock on a video call too — keep the camera on, light on your face, and the background clean. In an online mock, also check whether your voice is clear. Edge case 4: the interview is tomorrow and there is no time. Then do just one mock — only 'Tell me about yourself' and 2 technical questions — and fill the feedback sheet. One mock is still better than zero.",
          "विशेष स्थिति 1: कोई साथी नहीं है। तब अकेले अभ्यास करो — फ़ोन पर रिकॉर्ड करो, और अपनी ही फ़ीडबैक शीट भरो। अकेला मॉक भी काम करता है, बस फ़ीडबैक ख़ुद को देना होता है। विशेष स्थिति 2: साथी गंभीर नहीं है, हँसने लगता है। तब उसे इंटरव्यू लेने वाले की सूची दो और बोलो: '15 मिनट गंभीर रहो, फिर हँस लेना।' अगर फिर भी गंभीर न हो, तो दूसरा साथी खोजो। विशेष स्थिति 3: इंटरव्यू ऑनलाइन है (वीडियो कॉल)। तब मॉक भी वीडियो कॉल पर करो — कैमरा ऑन रखो, रोशनी चेहरे पर रखो, और पृष्ठभूमि साफ़ रखो। ऑनलाइन मॉक में यह भी जाँचो कि आवाज़ साफ़ आ रही है या नहीं। विशेष स्थिति 4: इंटरव्यू कल है और समय नहीं है। तब एक ही मॉक करो — सिर्फ़ 'Tell me about yourself' और 2 तकनीकी सवाल — और फ़ीडबैक शीट भरो। एक मॉक भी शून्य से बेहतर है।",
        ),
        s(
          H_CHANGE,
          "Agar tum mock me bolna band kar do aur sirf padhne lago, to kya hoga? Asli interview me tumhara munh khulega hi nahi — kyunki tumne bolne ki practice hi nahi ki. Agar tum har mock ke baad feedback sheet bharna shuru kar do, to kya hoga? Har mock me ek galti kam hogi — 5 mock ke baad tumhari 5 sabse badi galtiyan khatm ho jayengi. Agar tum partner se ek mushkil sawaal poochne ko kaho, to kya hoga? Asli interview me mushkil sawaal aane par tum ghabraoge nahi — kyunki tum use mock me jeet chuke hoge. Mock interview me feedback hi asli teacher hai.",
          "If you stop speaking in mocks and only read, what happens? In the real interview your mouth will not open at all — because you never practised speaking. If you start filling the feedback sheet after every mock, what happens? Every mock removes one mistake — after 5 mocks, your 5 biggest mistakes are gone. If you ask your partner to ask one hard question, what happens? When a hard question comes in the real interview, you will not panic — because you already beat it in a mock. In the mock interview, feedback itself is the real teacher.",
          "अगर तुम मॉक में बोलना बंद कर दो और सिर्फ़ पढ़ने लगो, तो क्या होगा? असली इंटरव्यू में तुम्हारा मुँह खुलेगा ही नहीं — क्योंकि तुमने बोलने का अभ्यास ही नहीं किया। अगर तुम हर मॉक के बाद फ़ीडबैक शीट भरना शुरू कर दो, तो क्या होगा? हर मॉक में एक गलती कम होगी — 5 मॉक के बाद तुम्हारी 5 सबसे बड़ी गलतियाँ ख़त्म हो जाएँगी। अगर तुम साथी से एक मुश्किल सवाल पूछने को कहो, तो क्या होगा? असली इंटरव्यू में मुश्किल सवाल आने पर तुम घबराओगे नहीं — क्योंकि तुम उसे मॉक में जीत चुके होगे। मॉक इंटरव्यू में फ़ीडबैक ही असली शिक्षक है।",
        ),
        s(
          H_SUMMARY,
          "Mock interview = net practice. Akele: roz 20 minute, 5 sawaal, phone par record, phir feedback sheet. Partner ke saath: hafte me 2 baar, 30 minute, 1-5 ki scoring, phir roles badlo. Har mock ke baad 3 cheezein likho: kya achha tha, kya kharab tha, agle baar kya badlega. Kam se kam 5 mock karo — pehla mock ghabrahat ka hai, 5th mock confidence ka.",
          "A mock interview is net practice. Alone: 20 minutes a day, 5 questions, record on your phone, then the feedback sheet. With a partner: twice a week, 30 minutes, scoring from 1 to 5, then swap roles. After every mock, write 3 things: what was good, what was bad, what will change next time. Do at least 5 mocks — the first mock is about nervousness, the fifth mock is about confidence.",
          "मॉक इंटरव्यू = नेट अभ्यास। अकेले: रोज़ 20 मिनट, 5 सवाल, फ़ोन पर रिकॉर्ड, फिर फ़ीडबैक शीट। साथी के साथ: हफ़्ते में 2 बार, 30 मिनट, 1-5 की स्कोरिंग, फिर भूमिकाएँ बदलो। हर मॉक के बाद 3 चीज़ें लिखो: क्या अच्छा था, क्या ख़राब था, अगली बार क्या बदलेगा। कम से कम 5 मॉक करो — पहला मॉक घबराहट का है, 5वाँ मॉक आत्मविश्वास का।",
        ),
      ],
      mcqs: [
        {
          q: {
            hinglish: 'Mock interview ka sabse zaroori hissa kaun sa hai?',
            english: 'What is the most important part of a mock interview?',
            hindi: 'मॉक इंटरव्यू का सबसे ज़रूरी हिस्सा कौन सा है?',
          },
          opts: [
            { hinglish: 'Sawaal padhna', english: 'Reading the questions', hindi: 'सवाल पढ़ना' },
            { hinglish: 'Jawab dimaag me sochna', english: 'Thinking the answers in your mind', hindi: 'उत्तर दिमाग़ में सोचना' },
            { hinglish: 'Zor se bolna aur feedback sheet bharna', english: 'Speaking aloud and filling the feedback sheet', hindi: 'ज़ोर से बोलना और फ़ीडबैक शीट भरना' },
            { hinglish: 'Achhe kapde pehenna', english: 'Wearing good clothes', hindi: 'अच्छे कपड़े पहनना' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Interview me bolna hota hai, isliye bol kar practice zaroori hai. Feedback sheet se galti fix hoti hai — bina feedback ke mock sirf baat-cheet hai.',
            english: 'In the interview you must speak, so speaking practice is essential. The feedback sheet fixes mistakes — a mock without feedback is only a chat.',
            hindi: 'इंटरव्यू में बोलना होता है, इसलिए बोलकर अभ्यास ज़रूरी है। फ़ीडबैक शीट से गलती ठीक होती है — बिना फ़ीडबैक के मॉक सिर्फ़ बात-चीत है।',
          },
        },
        {
          q: {
            hinglish: 'Partner wale mock me scoring kis cheez par hoti hai?',
            english: 'In a partner mock, what is scored?',
            hindi: 'साथी वाले मॉक में स्कोरिंग किस चीज़ पर होती है?',
          },
          opts: [
            { hinglish: 'Sirf sahi jawab par', english: 'Only on the right answer', hindi: 'सिर्फ़ सही उत्तर पर' },
            { hinglish: 'Clarity, confidence, examples, aur time — 1 se 5 tak', english: 'Clarity, confidence, examples, and time — from 1 to 5', hindi: 'स्पष्टता, आत्मविश्वास, उदाहरण, और समय — 1 से 5 तक' },
            { hinglish: 'Sirf kapdon par', english: 'Only on clothes', hindi: 'सिर्फ़ कपड़ों पर' },
            { hinglish: 'Sirf English par', english: 'Only on English', hindi: 'सिर्फ़ अंग्रेज़ी पर' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Mock me sirf sahi jawab nahi, poori delivery check hoti hai — saaf bola ya nahi, example diye ya nahi, time par khatm hua ya nahi.',
            english: 'In a mock, not only the right answer is checked, but the whole delivery — whether you spoke clearly, gave examples, and finished on time.',
            hindi: 'मॉक में सिर्फ़ सही उत्तर नहीं, पूरी प्रस्तुति जाँची जाती है — साफ़ बोला या नहीं, उदाहरण दिए या नहीं, समय पर ख़त्म हुआ या नहीं।',
          },
        },
        {
          q: {
            hinglish: 'Kam se kam kitne mock interview karne chahiye?',
            english: 'How many mock interviews should you do at minimum?',
            hindi: 'कम से कम कितने मॉक इंटरव्यू करने चाहिए?',
          },
          opts: [
            { hinglish: '1', english: '1', hindi: '1' },
            { hinglish: '2', english: '2', hindi: '2' },
            { hinglish: '5', english: '5', hindi: '5' },
            { hinglish: '50', english: '50', hindi: '50' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Ek mock se kuch nahi hota. 5 mock me har baar ek galti fix hoti hai — pehla mock ghabrahat ka, 5th mock confidence ka hota hai.',
            english: 'One mock achieves nothing. In 5 mocks, one mistake is fixed each time — the first mock is about nervousness, the fifth mock is about confidence.',
            hindi: 'एक मॉक से कुछ नहीं होता। 5 मॉक में हर बार एक गलती ठीक होती है — पहला मॉक घबराहट का, 5वाँ मॉक आत्मविश्वास का होता है।',
          },
        },
        {
          q: {
            hinglish: 'Mock me mushkil sawaal (failure, weakness) ki practice kyun karni chahiye?',
            english: 'Why should you practise hard questions (failure, weakness) in mocks?',
            hindi: 'मॉक में मुश्किल सवाल (असफलता, कमज़ोरी) का अभ्यास क्यों करना चाहिए?',
          },
          opts: [
            { hinglish: 'Kyunki mushkil sawaal kabhi nahi pooche jate', english: 'Because hard questions are never asked', hindi: 'क्योंकि मुश्किल सवाल कभी नहीं पूछे जाते' },
            { hinglish: 'Kyunki unse bhaagne se asli interview me wohi sawaal tumhe hara denge', english: 'Because running away from them lets those same questions beat you in the real interview', hindi: 'क्योंकि उनसे भागने से असली इंटरव्यू में वही सवाल तुम्हें हरा देंगे' },
            { hinglish: 'Kyunki mushkil sawaal aasan hote hain', english: 'Because hard questions are easy', hindi: 'क्योंकि मुश्किल सवाल आसान होते हैं' },
            { hinglish: 'Kyunki interviewer ko mushkil sawaal pasand nahi', english: 'Because the interviewer does not like hard questions', hindi: 'क्योंकि इंटरव्यू लेने वाले को मुश्किल सवाल पसंद नहीं' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Mushkil sawaal se bhaagna matlab asli interview me unse haar jana. Mock me unhe jeet lo, to asli interview me woh tumhe ghabra nahi sakte.',
            english: 'Running away from hard questions means losing to them in the real interview. Beat them in a mock, and they cannot scare you in the real interview.',
            hindi: 'मुश्किल सवाल से भागना मतलब असली इंटरव्यू में उनसे हार जाना। मॉक में उन्हें जीत लो, तो असली इंटरव्यू में वह तुम्हें घबरा नहीं सकते।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Apna pehla 15-minute mock karo aur feedback sheet bharo',
          english: 'Do your first 15-minute mock and fill the feedback sheet',
          hindi: 'अपना पहला 15 मिनट का मॉक करो और फ़ीडबैक शीट भरो',
        },
        task: {
          hinglish: 'Aaj hi ek 15-minute mock karo: 5 sawaal likho ("Tell me about yourself", strength, weakness, "Primary key kya hai?", apne project par ek sawaal). Phone par timer lagao aur record karo. Har jawab zor se bolo. Phir recording suno aur feedback sheet bharo: har sawaal ke liye (a) kya achha tha, (b) kya kharab tha, (c) agle baar kya badlega — aur clarity, confidence, examples, time par 1-5 ki scoring do. Done tab mano jab 5 sawaal ke jawab record hue hon aur feedback sheet poori bhari ho.',
          english: 'Do a 15-minute mock today: write 5 questions ("Tell me about yourself", a strength, a weakness, "What is a primary key?", one question on your project). Set a timer on your phone and record. Answer every question aloud. Then listen to the recording and fill the feedback sheet: for each question, (a) what was good, (b) what was bad, (c) what will change next time — and score clarity, confidence, examples and time from 1 to 5. You are done when all 5 answers are recorded and the feedback sheet is fully filled.',
          hindi: 'आज ही एक 15 मिनट का मॉक करो: 5 सवाल लिखो ("Tell me about yourself", मज़बूती, कमज़ोरी, "Primary key क्या है?", अपने प्रोजेक्ट पर एक सवाल)। फ़ोन पर टाइमर लगाओ और रिकॉर्ड करो। हर उत्तर ज़ोर से बोलो। फिर रिकॉर्डिंग सुनो और फ़ीडबैक शीट भरो: हर सवाल के लिए (a) क्या अच्छा था, (b) क्या ख़राब था, (c) अगली बार क्या बदलेगा — और स्पष्टता, आत्मविश्वास, उदाहरण, समय पर 1-5 की स्कोरिंग दो। तब पूरा मानो जब 5 सवालों के उत्तर रिकॉर्ड हुए हों और फ़ीडबैक शीट पूरी भरी हो।',
        },
        language: 'python',
        starter: '# Task: apni mock feedback sheet yahan likho.\nfeedback = [\n    ("Tell me about yourself", "achha: ", "kharab: ", "agle baar: ", "clarity /5, confidence /5, examples /5, time /5"),\n]\nfor q, good, bad, nxt, score in feedback:\n    print("Q:", q)\n    print("Good:", good)\n    print("Bad:", bad)\n    print("Next:", nxt)\n    print("Score:", score)\n    print()\n',
        expected: '5 sawaal ki feedback sheet print honi chahiye — har sawaal ke saath achha, kharab, agle baar, aur 1-5 scoring.',
      },
      readMinutes: 10,
    },
    {
      id: 'placement-company-prep',
      subjectId: 'placement',
      title: {
        hinglish: 'Company-wise prep — TCS, Infosys aur Wipro-style rounds',
        english: 'Company-wise prep — what TCS, Infosys and Wipro-style rounds test',
        hindi: 'कंपनी-वार तैयारी — TCS, Infosys और Wipro-शैली के राउंड',
      },
      summary: {
        hinglish: 'Har company ka pattern alag hota hai, lekin rounds ek jaise hote hain: aptitude test, coding test, technical interview, HR interview. Is article me TCS, Infosys aur Wipro-style rounds ka generic pattern hai — kya test hota hai aur har round ki taiyari kaise karo.',
        english: 'Every company has a different pattern, but the rounds are similar: an aptitude test, a coding test, a technical interview, and an HR interview. This article gives the generic pattern of TCS, Infosys and Wipro-style rounds — what is tested and how to prepare for each round.',
        hindi: 'हर कंपनी का पैटर्न अलग होता है, लेकिन राउंड एक जैसे होते हैं: योग्यता परीक्षा, कोडिंग परीक्षा, तकनीकी इंटरव्यू, HR इंटरव्यू। इस लेख में TCS, Infosys और Wipro-शैली के राउंड का सामान्य पैटर्न है — क्या जाँचा जाता है और हर राउंड की तैयारी कैसे करो।',
      },
      sections: [
        s(
          H_WHAT,
          "Service-based companies (jaise TCS, Infosys, Wipro) ki hiring aam taur par 4 rounds me hoti hai. Round 1: online aptitude test — quantitative aptitude, logical reasoning, aur verbal ability. Round 2: coding test — 1-2 coding sawaal, aam taur par easy ya medium level ke. Round 3: technical interview — DSA, DBMS, OS, aur tumhare projects. Round 4: HR interview — tumhari kahani, attitude, aur company fit. Kuch companies me Round 1 aur 2 ek hi test me hote hain. Har round ek filter hai: Round 1 me 1000 students me se 300 aage badhte hain, Round 2 me 300 me se 150, Round 3 me 150 me se 80, aur Round 4 me 80 me se 60 select hote hain. Isliye har round ki alag taiyari chahiye — sirf coding padhne se Round 1 nahi niklega, aur sirf aptitude padhne se Round 3 nahi niklega.",
          "Hiring at service-based companies (like TCS, Infosys and Wipro) usually happens in 4 rounds. Round 1: an online aptitude test — quantitative aptitude, logical reasoning, and verbal ability. Round 2: a coding test — 1 to 2 coding questions, usually easy or medium level. Round 3: a technical interview — DSA, DBMS, OS, and your projects. Round 4: an HR interview — your story, attitude, and company fit. In some companies, Rounds 1 and 2 happen in a single test. Every round is a filter: in Round 1, 300 of 1,000 students move ahead; in Round 2, 150 of 300; in Round 3, 80 of 150; and in Round 4, 60 of 80 are selected. So every round needs separate preparation — only studying coding will not clear Round 1, and only studying aptitude will not clear Round 3.",
          "सर्विस-आधारित कंपनियों (जैसे TCS, Infosys, Wipro) की भर्ती आम तौर पर 4 राउंड में होती है। राउंड 1: ऑनलाइन योग्यता परीक्षा — मात्रात्मक योग्यता, तार्किक चिंतन, और मौखिक क्षमता। राउंड 2: कोडिंग परीक्षा — 1-2 कोडिंग सवाल, आम तौर पर आसान या मध्यम स्तर के। राउंड 3: तकनीकी इंटरव्यू — DSA, DBMS, OS, और तुम्हारे प्रोजेक्ट। राउंड 4: HR इंटरव्यू — तुम्हारी कहानी, रवैया, और कंपनी में फ़िट। कुछ कंपनियों में राउंड 1 और 2 एक ही परीक्षा में होते हैं। हर राउंड एक फ़िल्टर है: राउंड 1 में 1000 छात्रों में से 300 आगे बढ़ते हैं, राउंड 2 में 300 में से 150, राउंड 3 में 150 में से 80, और राउंड 4 में 80 में से 60 चुने जाते हैं। इसलिए हर राउंड की अलग तैयारी चाहिए — सिर्फ़ कोडिंग पढ़ने से राउंड 1 नहीं निकलेगा, और सिर्फ़ योग्यता पढ़ने से राउंड 3 नहीं निकलेगा।",
        ),
        s(
          H_REAL,
          "Socho tum ek cricket tournament khel rahe ho. Pehla match group stage hai — sabse aasan, lekin haar gaye to tournament se bahar. Doosra match quarter-final hai — thoda mushkil. Teesra semi-final — aur mushkil. Chautha final — sabse mushkil, lekin jeet gaye to trophy. Placement bhi wahi tournament hai. Aptitude test group stage hai — aasan lagta hai, lekin isme sabse zyada log bahar hote hain. Coding test quarter-final hai. Technical interview semi-final hai. HR interview final hai — aasan lagta hai, lekin final me bhi log haar jate hain. Jo player sirf final ki practice karta hai, woh group stage me hi bahar ho jata hai. Isliye har round ki practice karo, pehle round se lekar aakhri round tak.",
          "Imagine you are playing a cricket tournament. The first match is the group stage — the easiest, but if you lose, you are out of the tournament. The second match is the quarter-final — a little harder. The third is the semi-final — harder still. The fourth is the final — the hardest, but win it and you get the trophy. Placement is the same tournament. The aptitude test is the group stage — it looks easy, but the most people go out here. The coding test is the quarter-final. The technical interview is the semi-final. The HR interview is the final — it looks easy, but people lose in the final too. A player who practises only for the final goes out in the group stage itself. So practise every round, from the first to the last.",
          "सोचो तुम एक क्रिकेट टूर्नामेंट खेल रहे हो। पहला मैच ग्रुप चरण है — सबसे आसान, लेकिन हार गए तो टूर्नामेंट से बाहर। दूसरा मैच क्वार्टर-फ़ाइनल है — थोड़ा मुश्किल। तीसरा सेमी-फ़ाइनल — और मुश्किल। चौथा फ़ाइनल — सबसे मुश्किल, लेकिन जीत गए तो ट्रॉफ़ी। प्लेसमेंट भी वही टूर्नामेंट है। योग्यता परीक्षा ग्रुप चरण है — आसान लगती है, लेकिन इसमें सबसे ज़्यादा लोग बाहर होते हैं। कोडिंग परीक्षा क्वार्टर-फ़ाइनल है। तकनीकी इंटरव्यू सेमी-फ़ाइनल है। HR इंटरव्यू फ़ाइनल है — आसान लगता है, लेकिन फ़ाइनल में भी लोग हार जाते हैं। जो खिलाड़ी सिर्फ़ फ़ाइनल का अभ्यास करता है, वह ग्रुप चरण में ही बाहर हो जाता है। इसलिए हर राउंड का अभ्यास करो, पहले राउंड से लेकर आख़िरी राउंड तक।",
        ),
        s(
          H_STEPS,
          "Har round ki taiyari, step by step:\n\nRound 1 — Aptitude test: Isme 3 hisse hote hain — quantitative (percentage, profit-loss, time-speed, ratio), logical reasoning (series, blood relation, coding-decoding), aur verbal (reading comprehension, grammar, vocabulary). Taiyari: roz 20 aptitude sawaal karo — 10 quant, 5 reasoning, 5 verbal. Pehle concept seekho, phir speed badhao. Mock test me time check karo — har sawaal ke liye 1 minute se zyada mat lo.\n\nRound 2 — Coding test: Isme 1-2 coding sawaal hote hain — array, string, ya basic math par. Taiyari: roz 2 easy coding sawaal karo (array reverse, palindrome check, prime number, factorial). Code ko chalao, test karo, aur time complexity batao. Interview me bol kar solve karne ki practice karo.\n\nRound 3 — Technical interview: Isme DSA (array, linked list, stack, queue), DBMS (primary key, SQL queries, normalization), OS (deadlock, process vs thread), aur tumhare projects pooche jate hain. Taiyari: har topic ka ek example yaad rakho — definition ke saath example. Apne project ka har hissa samajh kar jao.\n\nRound 4 — HR interview: Isme 'Tell me about yourself', strengths, weakness, 'Why this company?' pooche jate hain. Taiyari: apna 1-minute introduction likho aur roz bol kar practice karo. Company ki website padho — company kya karti hai, uske kaun se products hain.\n\nCompany-wise pattern (generic — exact pattern har saal badal sakta hai, isliye company ki official hiring page hamesha check karo): TCS-style hiring me aptitude test (NQT-type) ke baad coding aur interview hote hain; verbal aur reasoning par zyada focus hota hai. Infosys-style hiring me aptitude ke saath pseudo-code aur puzzle-type sawaal aate hain; reasoning strong hona chahiye. Wipro-style hiring me aptitude, coding aur communication par focus hota hai; essay ya email-writing type task bhi aa sakta hai. Pattern generic hai — exact sections aur sawaalon ki sankhya company ke official page se confirm karo.",
          "Preparation for each round, step by step:\n\nRound 1 — Aptitude test: It has 3 parts — quantitative (percentage, profit and loss, time and speed, ratio), logical reasoning (series, blood relations, coding-decoding), and verbal (reading comprehension, grammar, vocabulary). Preparation: solve 20 aptitude questions a day — 10 quant, 5 reasoning, 5 verbal. Learn the concept first, then build speed. Check the time in mock tests — do not take more than 1 minute per question.\n\nRound 2 — Coding test: It has 1 to 2 coding questions — on arrays, strings, or basic maths. Preparation: solve 2 easy coding questions a day (array reverse, palindrome check, prime number, factorial). Run the code, test it, and state the time complexity. Practise solving by speaking aloud.\n\nRound 3 — Technical interview: It asks DSA (array, linked list, stack, queue), DBMS (primary key, SQL queries, normalisation), OS (deadlock, process versus thread), and your projects. Preparation: remember one example for every topic — an example with the definition. Go after understanding every part of your project.\n\nRound 4 — HR interview: It asks 'Tell me about yourself', strengths, weakness, and 'Why this company?' Preparation: write your 1-minute introduction and practise it aloud every day. Read the company website — what the company does, what its products are.\n\nCompany-wise pattern (generic — the exact pattern can change every year, so always check the company's official hiring page): in TCS-style hiring, an aptitude test (NQT-type) is followed by coding and interviews; there is more focus on verbal and reasoning. In Infosys-style hiring, aptitude comes with pseudo-code and puzzle-type questions; reasoning must be strong. In Wipro-style hiring, the focus is on aptitude, coding and communication; an essay or email-writing type task can also appear. This pattern is generic — confirm the exact sections and number of questions from the company's official page.",
          "हर राउंड की तैयारी, चरण-दर-चरण:\n\nराउंड 1 — योग्यता परीक्षा: इसमें 3 हिस्से होते हैं — मात्रात्मक (प्रतिशत, लाभ-हानि, समय-गति, अनुपात), तार्किक चिंतन (शृंखला, रक्त संबंध, कोडिंग-डिकोडिंग), और मौखिक (रीडिंग कॉम्प्रिहेंशन, व्याकरण, शब्दावली)। तैयारी: रोज़ 20 योग्यता सवाल करो — 10 quant, 5 reasoning, 5 verbal। पहले concept सीखो, फिर गति बढ़ाओ। मॉक टेस्ट में समय जाँचो — हर सवाल के लिए 1 मिनट से ज़्यादा मत लो।\n\nराउंड 2 — कोडिंग परीक्षा: इसमें 1-2 कोडिंग सवाल होते हैं — array, string, या बुनियादी गणित पर। तैयारी: रोज़ 2 आसान कोडिंग सवाल करो (array reverse, palindrome check, prime number, factorial)। कोड को चलाओ, जाँचो, और time complexity बताओ। बोलकर हल करने का अभ्यास करो।\n\nराउंड 3 — तकनीकी इंटरव्यू: इसमें DSA (array, linked list, stack, queue), DBMS (primary key, SQL queries, normalization), OS (deadlock, process vs thread), और तुम्हारे प्रोजेक्ट पूछे जाते हैं। तैयारी: हर विषय का एक उदाहरण याद रखो — परिभाषा के साथ उदाहरण। अपने प्रोजेक्ट का हर हिस्सा समझकर जाओ।\n\nराउंड 4 — HR इंटरव्यू: इसमें 'Tell me about yourself', मज़बूती, कमज़ोरी, 'Why this company?' पूछे जाते हैं। तैयारी: अपना 1 मिनट का परिचय लिखो और रोज़ बोलकर अभ्यास करो। कंपनी की वेबसाइट पढ़ो — कंपनी क्या करती है, उसके कौन से उत्पाद हैं।\n\nकंपनी-वार पैटर्न (सामान्य — सटीक पैटर्न हर साल बदल सकता है, इसलिए कंपनी का आधिकारिक भर्ती पेज हमेशा जाँचो): TCS-शैली की भर्ती में योग्यता परीक्षा (NQT-प्रकार) के बाद कोडिंग और इंटरव्यू होते हैं; मौखिक और तर्क पर ज़्यादा ध्यान होता है। Infosys-शैली की भर्ती में योग्यता के साथ pseudo-code और पहेली-प्रकार के सवाल आते हैं; तर्क मज़बूत होना चाहिए। Wipro-शैली की भर्ती में योग्यता, कोडिंग और संचार पर ध्यान होता है; निबंध या ईमेल-लेखन प्रकार का कार्य भी आ सकता है। पैटर्न सामान्य है — सटीक हिस्से और सवालों की संख्या कंपनी के आधिकारिक पेज से पुष्टि करो।",
        ),
        s(
          H_MISTAKES,
          "Galti 1: sirf ek round ki taiyari karna. Aisa kyun hota hai? Kyunki student ko coding pasand hai, to woh sirf coding karta hai — aur aptitude test me fail ho jata hai. Har round ek filter hai; ek bhi round fail ho to selection nahi hota. Galti 2: company ka pattern purane saal ka yaad karke jana. Pattern har saal badal sakta hai — official hiring page check karo, seniors se poocho, lekin purane pattern par bharosa mat karo. Galti 3: aptitude me speed par dhyaan na dena. Aptitude me sawaal aasan hote hain, lekin time kam hota hai — 60 sawaal, 60 minute. Jo student har sawaal par 2 minute lagata hai, woh aadha paper bhi poora nahi kar pata. Galti 4: HR round ko halke me lena. HR round me bhi log reject hote hain — 'Why this company?' ka jawab bina homework ke dena, ya 'No questions' bolna, selection khatm kar sakta hai.",
          "Mistake 1: preparing for only one round. Why does this happen? Because a student likes coding, so they only do coding — and fail the aptitude test. Every round is a filter; failing even one round ends the selection. Mistake 2: going by last year's pattern. The pattern can change every year — check the official hiring page, ask seniors, but do not trust the old pattern. Mistake 3: ignoring speed in aptitude. Aptitude questions are easy, but time is short — 60 questions, 60 minutes. A student who takes 2 minutes per question cannot even finish half the paper. Mistake 4: taking the HR round lightly. People are rejected in the HR round too — answering 'Why this company?' without homework, or saying 'No questions', can end the selection.",
          "गलती 1: सिर्फ़ एक राउंड की तैयारी करना। ऐसा क्यों होता है? क्योंकि छात्र को कोडिंग पसंद है, तो वह सिर्फ़ कोडिंग करता है — और योग्यता परीक्षा में असफल हो जाता है। हर राउंड एक फ़िल्टर है; एक भी राउंड असफल हो तो चयन नहीं होता। गलती 2: कंपनी का पैटर्न पिछले साल का याद करके जाना। पैटर्न हर साल बदल सकता है — आधिकारिक भर्ती पेज जाँचो, सीनियर्स से पूछो, लेकिन पुराने पैटर्न पर भरोसा मत करो। गलती 3: योग्यता में गति पर ध्यान न देना। योग्यता में सवाल आसान होते हैं, लेकिन समय कम होता है — 60 सवाल, 60 मिनट। जो छात्र हर सवाल पर 2 मिनट लगाता है, वह आधा पेपर भी पूरा नहीं कर पाता। गलती 4: HR राउंड को हल्के में लेना। HR राउंड में भी लोग अस्वीकार होते हैं — 'Why this company?' का उत्तर बिना होमवर्क के देना, या 'No questions' बोलना, चयन ख़त्म कर सकता है।",
        ),
        s(
          H_EDGE,
          "Edge case 1: company ka test online hai aur ghar se dena hai. Tab ek shaant kamra chuno, internet stable rakho, aur test se pehle laptop charge karo. Edge case 2: tum ek round me fail ho gaye. Tab usi company me dobara try karne ka wait mat karo — doosri companies me apply karo, aur fail hue round ki taiyari aur strong karo. Edge case 3: ek hi din me do companies ke test hon. Tab pehle wale test ke baad 30 minute break lo — dimaag ko rest do, phir doosre test ki taiyari karo. Edge case 4: company ne tumhe interview ke liye bulaya lekin tumne us company ke baare me kuch nahi padha. Tab interview se pehle 30 minute me company ki website padho — company kya karti hai, uske main products kya hain, aur freshers ke liye kya likha hai.",
          "Edge case 1: the company test is online and must be taken from home. Then choose a quiet room, keep the internet stable, and charge the laptop before the test. Edge case 2: you failed one round. Then do not wait to try again at the same company — apply to other companies, and make the preparation for the failed round stronger. Edge case 3: two companies have tests on the same day. Then take a 30-minute break after the first test — rest your mind, then prepare for the second test. Edge case 4: the company called you for an interview but you read nothing about it. Then in the 30 minutes before the interview, read the company website — what the company does, what its main products are, and what is written for freshers.",
          "विशेष स्थिति 1: कंपनी की परीक्षा ऑनलाइन है और घर से देनी है। तब एक शांत कमरा चुनो, इंटरनेट स्थिर रखो, और परीक्षा से पहले लैपटॉप चार्ज करो। विशेष स्थिति 2: तुम एक राउंड में असफल हो गए। तब उसी कंपनी में दोबारा कोशिश का इंतज़ार मत करो — दूसरी कंपनियों में आवेदन करो, और असफल हुए राउंड की तैयारी और मज़बूत करो। विशेष स्थिति 3: एक ही दिन में दो कंपनियों की परीक्षा हों। तब पहली परीक्षा के बाद 30 मिनट का विराम लो — दिमाग़ को आराम दो, फिर दूसरी परीक्षा की तैयारी करो। विशेष स्थिति 4: कंपनी ने तुम्हें इंटरव्यू के लिए बुलाया लेकिन तुमने उस कंपनी के बारे में कुछ नहीं पढ़ा। तब इंटरव्यू से पहले 30 मिनट में कंपनी की वेबसाइट पढ़ो — कंपनी क्या करती है, उसके मुख्य उत्पाद क्या हैं, और फ़्रेशर्स के लिए क्या लिखा है।",
        ),
        s(
          H_CHANGE,
          "Agar tum sirf coding ki taiyari karo aur aptitude ko chhod do, to kya hoga? Tum Round 1 me hi bahar ho jaoge — coding ka mauka kabhi aayega hi nahi. Agar tum roz 20 aptitude sawaal karna shuru kar do, to kya hoga? 30 din me tum 600 sawaal kar chuke hoge — aur Round 1 tumhare liye sabse aasan round ban jayega. Agar tum interview se pehle company ki website padh lo, to kya hoga? 'Why this company?' ka jawab tumhare paas pehle se hoga — aur interviewer ko lagega ki tum serious ho. Placement me jeet ka raaz hai: har round ki thodi-thodi taiyari, roz.",
          "If you prepare only for coding and skip aptitude, what happens? You go out in Round 1 itself — the chance to show coding never comes. If you start solving 20 aptitude questions a day, what happens? In 30 days you will have solved 600 questions — and Round 1 becomes your easiest round. If you read the company website before the interview, what happens? You already have the answer to 'Why this company?' — and the interviewer feels you are serious. The secret of winning placement is: a little preparation for every round, every day.",
          "अगर तुम सिर्फ़ कोडिंग की तैयारी करो और योग्यता को छोड़ दो, तो क्या होगा? तुम राउंड 1 में ही बाहर हो जाओगे — कोडिंग का मौका कभी आएगा ही नहीं। अगर तुम रोज़ 20 योग्यता सवाल करना शुरू कर दो, तो क्या होगा? 30 दिन में तुम 600 सवाल कर चुके होगे — और राउंड 1 तुम्हारे लिए सबसे आसान राउंड बन जाएगा। अगर तुम इंटरव्यू से पहले कंपनी की वेबसाइट पढ़ लो, तो क्या होगा? 'Why this company?' का उत्तर तुम्हारे पास पहले से होगा — और इंटरव्यू लेने वाले को लगेगा कि तुम गंभीर हो। प्लेसमेंट में जीत का राज़ है: हर राउंड की थोड़ी-थोड़ी तैयारी, रोज़।",
        ),
        s(
          H_SUMMARY,
          "4 rounds yaad rakho: aptitude, coding, technical interview, HR interview. Har round ek filter hai — ek bhi fail ho to selection nahi. Roz 20 aptitude sawaal, 2 coding sawaal, 1 technical topic ka example, aur 1 HR jawab ki practice karo. Company ka pattern official hiring page se check karo — purane pattern par bharosa mat karo. Interview se pehle company ki website padho. Har round ki thodi taiyari, roz — yahi placement ka formula hai.",
          "Remember the 4 rounds: aptitude, coding, technical interview, HR interview. Every round is a filter — failing even one ends the selection. Every day, do 20 aptitude questions, 2 coding questions, one example for a technical topic, and one HR answer. Check the company pattern on the official hiring page — do not trust the old pattern. Read the company website before the interview. A little preparation for every round, every day — that is the formula for placement.",
          "4 राउंड याद रखो: योग्यता, कोडिंग, तकनीकी इंटरव्यू, HR इंटरव्यू। हर राउंड एक फ़िल्टर है — एक भी असफल हो तो चयन नहीं। रोज़ 20 योग्यता सवाल, 2 कोडिंग सवाल, 1 तकनीकी विषय का उदाहरण, और 1 HR उत्तर का अभ्यास करो। कंपनी का पैटर्न आधिकारिक भर्ती पेज से जाँचो — पुराने पैटर्न पर भरोसा मत करो। इंटरव्यू से पहले कंपनी की वेबसाइट पढ़ो। हर राउंड की थोड़ी तैयारी, रोज़ — यही प्लेसमेंट का सूत्र है।",
        ),
      ],
      mcqs: [
        {
          q: {
            hinglish: 'Placement ke 4 rounds ka sahi order kya hai?',
            english: 'What is the correct order of the 4 placement rounds?',
            hindi: 'प्लेसमेंट के 4 राउंड का सही क्रम क्या है?',
          },
          opts: [
            { hinglish: 'HR, Technical, Coding, Aptitude', english: 'HR, Technical, Coding, Aptitude', hindi: 'HR, Technical, Coding, Aptitude' },
            { hinglish: 'Aptitude, Coding, Technical interview, HR interview', english: 'Aptitude, Coding, Technical interview, HR interview', hindi: 'Aptitude, Coding, Technical interview, HR interview' },
            { hinglish: 'Coding, HR, Aptitude, Technical', english: 'Coding, HR, Aptitude, Technical', hindi: 'Coding, HR, Aptitude, Technical' },
            { hinglish: 'Technical, Aptitude, HR, Coding', english: 'Technical, Aptitude, HR, Coding', hindi: 'Technical, Aptitude, HR, Coding' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Aam taur par pehle aptitude test hota hai, phir coding test, phir technical interview, aur aakhir me HR interview.',
            english: 'Usually the aptitude test comes first, then the coding test, then the technical interview, and finally the HR interview.',
            hindi: 'आम तौर पर पहले योग्यता परीक्षा होती है, फिर कोडिंग परीक्षा, फिर तकनीकी इंटरव्यू, और आख़िर में HR इंटरव्यू।',
          },
        },
        {
          q: {
            hinglish: 'Aptitude test me sabse zyada log kyun bahar hote hain?',
            english: 'Why do the most people go out in the aptitude test?',
            hindi: 'योग्यता परीक्षा में सबसे ज़्यादा लोग क्यों बाहर होते हैं?',
          },
          opts: [
            { hinglish: 'Kyunki sawaal bahut mushkil hote hain', english: 'Because the questions are very hard', hindi: 'क्योंकि सवाल बहुत मुश्किल होते हैं' },
            { hinglish: 'Kyunki sawaal aasan hote hain lekin time kam hota hai, aur bahut se log sirf coding ki taiyari karte hain', english: 'Because the questions are easy but time is short, and many students prepare only for coding', hindi: 'क्योंकि सवाल आसान होते हैं लेकिन समय कम होता है, और बहुत से लोग सिर्फ़ कोडिंग की तैयारी करते हैं' },
            { hinglish: 'Kyunki aptitude me koi pass nahi hota', english: 'Because nobody passes aptitude', hindi: 'क्योंकि योग्यता में कोई पास नहीं होता' },
            { hinglish: 'Kyunki aptitude test optional hota hai', english: 'Because the aptitude test is optional', hindi: 'क्योंकि योग्यता परीक्षा वैकल्पिक होती है' },
          ],
          ans: 1,
          expl: {
            hinglish: 'Aptitude ke sawaal aasan hote hain, lekin time kam hota hai — aur jo student sirf coding padhta hai, woh Round 1 me hi fail ho jata hai.',
            english: 'Aptitude questions are easy, but time is short — and a student who only studies coding fails in Round 1 itself.',
            hindi: 'योग्यता के सवाल आसान होते हैं, लेकिन समय कम होता है — और जो छात्र सिर्फ़ कोडिंग पढ़ता है, वह राउंड 1 में ही असफल हो जाता है।',
          },
        },
        {
          q: {
            hinglish: 'Company ka exact pattern kahan se confirm karna chahiye?',
            english: 'Where should you confirm a company\'s exact pattern?',
            hindi: 'कंपनी का सटीक पैटर्न कहाँ से पुष्टि करना चाहिए?',
          },
          opts: [
            { hinglish: 'Dost ki baaton se', english: 'From a friend\'s words', hindi: 'दोस्त की बातों से' },
            { hinglish: 'Pichle saal ke pattern se', english: 'From last year\'s pattern', hindi: 'पिछले साल के पैटर्न से' },
            { hinglish: 'Company ke official hiring page se', english: 'From the company\'s official hiring page', hindi: 'कंपनी के आधिकारिक भर्ती पेज से' },
            { hinglish: 'Kahin se nahi — pattern kabhi nahi badalta', english: 'From nowhere — the pattern never changes', hindi: 'कहीं से नहीं — पैटर्न कभी नहीं बदलता' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Pattern har saal badal sakta hai. Official hiring page hi sahi source hai; pichle saal ka pattern sirf idea deta hai.',
            english: 'The pattern can change every year. The official hiring page is the right source; last year\'s pattern only gives an idea.',
            hindi: 'पैटर्न हर साल बदल सकता है। आधिकारिक भर्ती पेज ही सही स्रोत है; पिछले साल का पैटर्न सिर्फ़ विचार देता है।',
          },
        },
        {
          q: {
            hinglish: 'Roz ki taiyari me kya hona chahiye?',
            english: 'What should daily preparation include?',
            hindi: 'रोज़ की तैयारी में क्या होना चाहिए?',
          },
          opts: [
            { hinglish: 'Sirf coding', english: 'Only coding', hindi: 'सिर्फ़ कोडिंग' },
            { hinglish: 'Sirf aptitude', english: 'Only aptitude', hindi: 'सिर्फ़ योग्यता' },
            { hinglish: '20 aptitude sawaal, 2 coding sawaal, 1 technical example, 1 HR jawab', english: '20 aptitude questions, 2 coding questions, 1 technical example, 1 HR answer', hindi: '20 योग्यता सवाल, 2 कोडिंग सवाल, 1 तकनीकी उदाहरण, 1 HR उत्तर' },
            { hinglish: 'Sirf HR answers ratna', english: 'Only memorising HR answers', hindi: 'सिर्फ़ HR उत्तर रटना' },
          ],
          ans: 2,
          expl: {
            hinglish: 'Har round ek filter hai, isliye har round ki thodi-thodi taiyari roz chahiye. Sirf ek round ki taiyari se baaki rounds me fail ho jaoge.',
            english: 'Every round is a filter, so every round needs a little preparation each day. Preparing for only one round means failing the other rounds.',
            hindi: 'हर राउंड एक फ़िल्टर है, इसलिए हर राउंड की थोड़ी-थोड़ी तैयारी रोज़ चाहिए। सिर्फ़ एक राउंड की तैयारी से बाकी राउंड में असफल हो जाओगे।',
          },
        },
      ],
      practice: {
        title: {
          hinglish: 'Apna 30-din ka placement plan banao',
          english: 'Make your own 30-day placement plan',
          hindi: 'अपनी 30 दिन की प्लेसमेंट योजना बनाओ',
        },
        task: {
          hinglish: 'Ek 30-din ka plan likho: har din 20 aptitude sawaal (10 quant, 5 reasoning, 5 verbal), 2 coding sawaal, 1 technical topic ka example (DSA/DBMS/OS), aur 1 HR jawab ki practice. Plan me ye bhi likho: hafte me 2 mock interview (ek akele, ek partner ke saath), aur har hafte ke aakhir me ek full mock test. Apne target companies ke naam likho aur unki official hiring page check karne ki date likho. Done tab mano jab 30 din ka plan likha ho, har din ke 4 kaam saaf hon, aur mock interview ki dates likhi hon.',
          english: 'Write a 30-day plan: every day, 20 aptitude questions (10 quant, 5 reasoning, 5 verbal), 2 coding questions, one example for a technical topic (DSA/DBMS/OS), and one HR answer. In the plan, also write: 2 mock interviews a week (one alone, one with a partner), and one full mock test at the end of every week. Write the names of your target companies and the date you will check their official hiring pages. You are done when the 30-day plan is written, the 4 tasks for each day are clear, and the mock interview dates are written down.',
          hindi: 'एक 30 दिन की योजना लिखो: हर दिन 20 योग्यता सवाल (10 quant, 5 reasoning, 5 verbal), 2 कोडिंग सवाल, 1 तकनीकी विषय का उदाहरण (DSA/DBMS/OS), और 1 HR उत्तर का अभ्यास। योजना में यह भी लिखो: हफ़्ते में 2 मॉक इंटरव्यू (एक अकेले, एक साथी के साथ), और हर हफ़्ते के आख़िर में एक पूरा मॉक टेस्ट। अपने लक्ष्य कंपनियों के नाम लिखो और उनके आधिकारिक भर्ती पेज जाँचने की तारीख़ लिखो। तब पूरा मानो जब 30 दिन की योजना लिखी हो, हर दिन के 4 काम साफ़ हों, और मॉक इंटरव्यू की तारीख़ें लिखी हों।',
        },
        language: 'python',
        starter: '# Task: apna 30-din ka plan yahan likho.\nplan = {\n    "daily": "20 aptitude + 2 coding + 1 technical example + 1 HR answer",\n    "weekly": "2 mock interviews + 1 full mock test",\n    "companies": ["Company 1: ", "Company 2: ", "Company 3: "],\n}\nfor key, value in plan.items():\n    print(key, "->", value)\n',
        expected: 'Plan print hona chahiye — daily ke 4 kaam, weekly mocks, aur target companies ke naam.',
      },
      readMinutes: 12,
    },
  ],
};
