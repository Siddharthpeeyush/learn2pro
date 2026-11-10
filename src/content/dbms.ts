// Learn2Pro v2 — DBMS (Database Management Systems).
// All content written in our own style for students, in Hinglish, English and Hindi.
// SQL examples run against the site's sample table:
//   students(id, name, marks) — Rahul 85, Priya 92, Amit 74, Sana 88.
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

const dbmsIntro: Article = {
  id: 'dbms-intro',
  subjectId: 'dbms',
  title: t(
    'Database kya hai aur ER model kaise banate hain',
    'What a database is and how to build an ER model',
    'डेटाबेस क्या है और ईआर मॉडल कैसे बनाते हैं',
  ),
  summary: t(
    'Database ka matlab hai data ko organised tarike se store karna, aur DBMS wo software hai jo use sambhalta hai. ER model design ka pehla kadam hai — entities, attributes aur relationships ko kagaz par banakar socho, phir table banao.',
    'A database is a way of storing data in an organised way, and a DBMS is the software that manages it. The ER model is the first step of design — draw the entities, attributes and relationships on paper first, then build the tables.',
    'डेटाबेस का मतलब है डेटा को व्यवस्थित तरीके से स्टोर करना, और DBMS वह सॉफ़्टवेयर है जो उसे संभालता है। ईआर मॉडल डिज़ाइन का पहला कदम है — एंटिटी, एट्रिब्यूट और रिलेशनशिप को कागज़ पर बनाकर सोचो, फिर टेबल बनाओ।',
  ),
  sections: [
    sec(
      H_WHAT[0], H_WHAT[1], H_WHAT[2],
      `Database ka matlab hai data ko aise store karna ki use dhoondhna, badalna aur safe rakhna easy ho. DBMS (Database Management System) wo software hai jo ye kaam karta hai — jaise MySQL, PostgreSQL, SQLite. Tum seedha files mein data likh bhi sakte ho, lekin phir har chhote kaam ke liye khud code likhna padega: dhoondhna, sort karna, do logon ke ek saath badlaav ko sambhalna.\n\nDBMS tumhe chaar bade fayde deta hai. Pehla: data ek jagah rehta hai, har jagah copy nahi. Doosra: ek hi time par kai log use kar sakte hain bina gadbad ke. Teesra: galat data ghusne se rokta hai — jaise marks mein naam likhna. Chautha: data kho jaye to wapas lane ka tareeka hota hai, backup aur recovery.\n\nER model (Entity-Relationship model) database banane se pehle ka design hai. Entity ka matlab hai koi cheez jiske baare mein data rakhna hai — jaise Student ya Book. Attribute ka matlab hai us cheez ki khaasiyat — jaise Student ka naam ya marks. Relationship ka matlab hai do entities ke beech ka connection — jaise Student ek Course mein enrol hota hai.`,
      `A database is a way of storing data so that finding it, changing it and keeping it safe are easy. A DBMS (Database Management System) is the software that does this work — like MySQL, PostgreSQL or SQLite. You could also write data straight into files, but then you would have to write code yourself for every small job: finding, sorting, and handling two people changing the same thing at once.\n\nA DBMS gives you four big benefits. First: the data lives in one place, not in copies everywhere. Second: many people can use it at the same time without a mess. Third: it stops wrong data from getting in — like writing a name in the marks column. Fourth: if data is lost, there is a way to bring it back, through backup and recovery.\n\nThe ER model (Entity-Relationship model) is the design you make before building a database. An entity is a thing you want to keep data about — like a Student or a Book. An attribute is a property of that thing — like the name or marks of a Student. A relationship is a connection between two entities — like a Student enrolling in a Course.`,
      `डेटाबेस का मतलब है डेटा को ऐसे स्टोर करना कि उसे ढूँढना, बदलना और सुरक्षित रखना आसान हो। DBMS (डेटाबेस मैनेजमेंट सिस्टम) वह सॉफ़्टवेयर है जो यह काम करता है — जैसे MySQL, PostgreSQL, SQLite। तुम सीधे फ़ाइलों में डेटा लिख भी सकते हो, लेकिन फिर हर छोटे काम के लिए खुद कोड लिखना पड़ेगा: ढूँढना, सॉर्ट करना, दो लोगों के एक साथ बदलाव को संभालना।\n\nDBMS तुम्हें चार बड़े फ़ायदे देता है। पहला: डेटा एक जगह रहता है, हर जगह कॉपी नहीं। दूसरा: एक ही समय पर कई लोग उसे इस्तेमाल कर सकते हैं बिना गड़बड़ के। तीसरा: गलत डेटा घुसने से रोकता है — जैसे नंबरों में नाम लिखना। चौथा: डेटा खो जाए तो वापस लाने का तरीका होता है, बैकअप और रिकवरी।\n\nईआर मॉडल (एंटिटी-रिलेशनशिप मॉडल) डेटाबेस बनाने से पहले का डिज़ाइन है। एंटिटी का मतलब है कोई चीज़ जिसके बारे में डेटा रखना है — जैसे Student या Book। एट्रिब्यूट का मतलब है उस चीज़ की खासियत — जैसे Student का नाम या नंबर। रिलेशनशिप का मतलब है दो एंटिटी के बीच का संबंध — जैसे Student एक Course में एनरोल होता है।`,
    ),
    sec(
      H_REAL[0], H_REAL[1], H_REAL[2],
      `Kirana dukaan wala socho. Pehle wo har udhaar ko ek copy mein likhta tha. Doosri copy mein rate likhe hote the. Kisi ne udhaar chukaya to pehli copy badlo, lekin rate wali copy mein naam bhi likha ho to wo purana reh jata hai. Ek hi customer ka naam do jagah, dono alag — yehi gadbad database khatam karta hai.\n\nRailway reservation bhi database hai: ek hi seat do logon ko nahi mil sakti, kyunki booking karte hi seat ka status badal jata hai. School ka register bhi database jaisa hai: har student ek line, har line mein naam, class, marks. Lekin kagaz wala register ek time par ek hi teacher dekh sakta hai — database ko poora school ek saath dekh sakta hai.\n\nPhone ke contacts bhi ek chhota database hain: naam, number, photo. Tum naam badalte ho to number apne aap nahi badalta — kyunki dono alag attributes hain, ek hi entity ke.`,
      `Think of a small grocery shop. Earlier, the shopkeeper wrote every credit sale in one notebook. The prices were written in a second notebook. When a customer paid, the first notebook changed, but if the name was also written in the price notebook, that copy stayed old. One customer, one name in two places, both different — that is exactly the mess a database ends.\n\nRailway reservation is also a database: one seat cannot go to two people, because the moment a booking is made, the status of the seat changes. A school register is like a database too: one line per student, with name, class and marks on each line. But a paper register can be seen by only one teacher at a time — a database can be seen by the whole school at once.\n\nThe contacts on a phone are a small database as well: name, number, photo. When you change a name, the number does not change on its own — because they are two different attributes of the same entity.`,
      `किराना दुकान वाला सोचो। पहले वह हर उधार को एक कॉपी में लिखता था। दूसरी कॉपी में रेट लिखे होते थे। किसी ने उधार चुकाया तो पहली कॉपी बदलो, लेकिन रेट वाली कॉपी में नाम भी लिखा हो तो वह पुराना रह जाता है। एक ही ग्राहक का नाम दो जगह, दोनों अलग — यही गड़बड़ डेटाबेस खत्म करता है।\n\nरेलवे रिज़र्वेशन भी डेटाबेस है: एक ही सीट दो लोगों को नहीं मिल सकती, क्योंकि बुकिंग करते ही सीट का स्टेटस बदल जाता है। स्कूल का रजिस्टर भी डेटाबेस जैसा है: हर छात्र एक लाइन, हर लाइन में नाम, क्लास, नंबर। लेकिन कागज़ वाला रजिस्टर एक समय पर एक ही टीचर देख सकता है — डेटाबेस को पूरा स्कूल एक साथ देख सकता है।\n\nफ़ोन के कॉन्टैक्ट्स भी एक छोटा डेटाबेस हैं: नाम, नंबर, फ़ोटो। तुम नाम बदलते हो तो नंबर अपने आप नहीं बदलता — क्योंकि दोनों अलग एट्रिब्यूट हैं, एक ही एंटिटी के।`,
    ),
    sec(
      H_STEP[0], H_STEP[1], H_STEP[2],
      `Chalo ek library ka ER model banate hain. Pehla kadam: entities dhoondho. Kaun-kaun si cheezein hain? Book, Member, aur Borrow (udhaar lena) — ye teen entities hain. Book ke attributes: book_id, title, author. Member ke attributes: member_id, name, phone. Borrow ke attributes: borrow_date, return_date.\n\nDoosra kadam: relationships banao. Member, Book ko Borrow karta hai. Ek member kai books le sakta hai, aur ek book (alag time par) kai members ko mil sakti hai — ye many-to-many relationship hai. ER diagram mein entities ko dabbe mein, attributes ko gol ghare mein, aur relationships ko heere (diamond) mein likhte hain.\n\nTeesra kadam: key chuno. Book ki key book_id hai — har book ka alag id. Member ki key member_id hai. Key wo attribute hai jo har row ko alag pehchan deta hai. Bina key ke tum do ek jaise naam wale members ko alag nahi kar paoge. Neeche is design ko SQL table mein badalte hain — yehi ER model se table banane ka rasta hai.`,
      `Let us build an ER model for a library. First step: find the entities. What things are there? Book, Member, and Borrow — these are three entities. The attributes of Book are: book_id, title, author. The attributes of Member are: member_id, name, phone. The attributes of Borrow are: borrow_date, return_date.\n\nSecond step: make the relationships. A Member borrows a Book. One member can take many books, and one book (at different times) can go to many members — that is a many-to-many relationship. In an ER diagram, entities go in boxes, attributes in circles, and relationships in a diamond.\n\nThird step: choose a key. The key of Book is book_id — every book has a different id. The key of Member is member_id. A key is the attribute that gives every row its own identity. Without a key, you cannot tell apart two members with the same name. Below, this design is turned into a SQL table — that is the path from an ER model to a table.`,
      `चलो एक लाइब्रेरी का ईआर मॉडल बनाते हैं। पहला कदम: एंटिटी ढूँढो। कौन-कौन सी चीज़ें हैं? Book, Member, और Borrow (उधार लेना) — ये तीन एंटिटी हैं। Book के एट्रिब्यूट: book_id, title, author। Member के एट्रिब्यूट: member_id, name, phone। Borrow के एट्रिब्यूट: borrow_date, return_date।\n\nदूसरा कदम: रिलेशनशिप बनाओ। Member, Book को Borrow करता है। एक मेंबर कई किताबें ले सकता है, और एक किताब (अलग समय पर) कई मेंबरों को मिल सकती है — यह मैनी-टू-मैनी रिलेशनशिप है। ईआर डायग्राम में एंटिटी को डिब्बे में, एट्रिब्यूट को गोल घेरे में, और रिलेशनशिप को हीरे (डायमंड) में लिखते हैं।\n\nतीसरा कदम: की चुनो। Book की की book_id है — हर किताब का अलग id। Member की की member_id है। की वह एट्रिब्यूट है जो हर पंक्ति को अलग पहचान देता है। बिना की के तुम दो एक जैसे नाम वाले मेंबरों को अलग नहीं कर पाओगे। नीचे इस डिज़ाइन को SQL टेबल में बदलते हैं — यही ईआर मॉडल से टेबल बनाने का रास्ता है।`,
      {
        title: t('ER design ko table banao — books', 'Turn the ER design into a table — books', 'ईआर डिज़ाइन को टेबल बनाओ — किताबें'),
        language: 'sql',
        code: `CREATE TABLE books (
  book_id INTEGER PRIMARY KEY,
  title TEXT,
  author TEXT
);
INSERT INTO books VALUES (1, 'Godan', 'Premchand');
INSERT INTO books VALUES (2, 'Malgudi Days', 'R. K. Narayan');
SELECT book_id, title FROM books;`,
        output: 'book_id | title\n1 | Godan\n2 | Malgudi Days',
        note: t(
          'ER model ki har entity ek table banti hai, har attribute ek column, aur key PRIMARY KEY banti hai. Yehi aage ke articles ka base hai.',
          'Every entity of an ER model becomes a table, every attribute becomes a column, and the key becomes the PRIMARY KEY. This is the base for the coming articles.',
          'ईआर मॉडल की हर एंटिटी एक टेबल बनती है, हर एट्रिब्यूट एक कॉलम, और की PRIMARY KEY बनती है। यही आगे के आर्टिकल का आधार है।',
        ),
      },
    ),
    sec(
      H_MIST[0], H_MIST[1], H_MIST[2],
      `Sabse badi galti: seedha table banana, bina design soche. Log pehle table bana lete hain, phir yaad aata hai ki ek aur column chahiye tha, phir ek aur. Table badalti rehti hai, purana data gadbad hota hai. Pehle kagaz par ER model banao — 10 minute ka design 10 ghante ki gadbad bachata hai.\n\nDoosri galti: ek hi table mein sab kuch daal dena. Student ka naam, uska course, teacher ka naam, teacher ka phone — sab ek table mein. Phir teacher ka phone badle to 100 rows badalni padengi. Alag cheezein alag tables mein rakho — yehi normalization ki shuruaat hai, jo 5th article mein aayega.\n\nTeesri galti: key ke bina table banana. Bina key ke do ek jaise rows ko alag nahi kar sakte, aur delete karte waqt galat row delete ho sakti hai. Har table mein ek key honi chahiye.`,
      `The biggest mistake is building a table straight away, without thinking about the design. People make a table first, then remember one more column was needed, then another. The table keeps changing and the old data gets messy. First draw the ER model on paper — 10 minutes of design saves 10 hours of mess.\n\nThe second mistake is putting everything into one table. The name of the student, the course, the name of the teacher, the phone of the teacher — all in one table. Then, when the phone of the teacher changes, 100 rows must be changed. Keep different things in different tables — that is the start of normalization, which comes in the 5th article.\n\nThe third mistake is making a table without a key. Without a key, two identical rows cannot be told apart, and while deleting, the wrong row can be deleted. Every table must have a key.`,
      `सबसे बड़ी गलती: सीधे टेबल बनाना, बिना डिज़ाइन सोचे। लोग पहले टेबल बना लेते हैं, फिर याद आता है कि एक और कॉलम चाहिए था, फिर एक और। टेबल बदलती रहती है, पुराना डेटा गड़बड़ होता है। पहले कागज़ पर ईआर मॉडल बनाओ — 10 मिनट का डिज़ाइन 10 घंटे की गड़बड़ बचाता है।\n\nदूसरी गलती: एक ही टेबल में सब कुछ डाल देना। छात्र का नाम, उसका कोर्स, टीचर का नाम, टीचर का फ़ोन — सब एक टेबल में। फिर टीचर का फ़ोन बदले तो 100 पंक्तियाँ बदलनी पड़ेंगी। अलग चीज़ें अलग टेबल में रखो — यही नॉर्मलाइज़ेशन की शुरुआत है, जो 5वें आर्टिकल में आएगा।\n\nतीसरी गलती: की के बिना टेबल बनाना। बिना की के दो एक जैसी पंक्तियों को अलग नहीं कर सकते, और डिलीट करते समय गलत पंक्ति डिलीट हो सकती है। हर टेबल में एक की होनी चाहिए।`,
    ),
    sec(
      H_EDGE[0], H_EDGE[1], H_EDGE[2],
      `Kya har entity ke attributes hone zaroori hain? Ek entity ke sirf key aur naam bhi ho sakte hain — jaise ek "Category" entity jisme sirf category_id aur category_name hon. Lekin bina kisi attribute ke entity ka koi matlab nahi — use pehchanna hi nahi ja sakta.\n\nRelationship bina rows ke bhi ho sakta hai: ek naya member jisne abhi koi book nahi li, wo Borrow relationship mein kahin nahi dikhega — aur ye theek hai. Isi ko optional participation kehte hain. Lekin agar har book ka ek author hona zaroori hai, to wo mandatory participation hai — bina author ke book ka record hi nahi banna chahiye.\n\nKhali database bhi ek database hai — tables hain, rows nahi. Design galat ho to khali database bhi galat hai; design sahi ho to khali database bharna easy hai.`,
      `Must every entity have attributes? An entity can have only a key and a name — like a "Category" entity with only category_id and category_name. But an entity with no attribute at all has no meaning — it cannot be recognised at all.\n\nA relationship can also exist with no rows: a new member who has not taken any book yet appears nowhere in the Borrow relationship — and that is fine. This is called optional participation. But if every book must have an author, that is mandatory participation — a book record should not be made without an author.\n\nAn empty database is still a database — it has tables but no rows. If the design is wrong, even an empty database is wrong; if the design is right, filling an empty database is easy.`,
      `क्या हर एंटिटी के एट्रिब्यूट होना ज़रूरी है? एक एंटिटी के सिर्फ़ की और नाम भी हो सकते हैं — जैसे एक "Category" एंटिटी जिसमें सिर्फ़ category_id और category_name हों। लेकिन बिना किसी एट्रिब्यूट के एंटिटी का कोई मतलब नहीं — उसे पहचाना ही नहीं जा सकता।\n\nरिलेशनशिप बिना पंक्तियों के भी हो सकता है: एक नया मेंबर जिसने अभी कोई किताब नहीं ली, वह Borrow रिलेशनशिप में कहीं नहीं दिखेगा — और यह ठीक है। इसी को ऑप्शनल भागीदारी कहते हैं। लेकिन अगर हर किताब का एक लेखक होना ज़रूरी है, तो वह अनिवार्य भागीदारी है — बिना लेखक के किताब का रिकॉर्ड ही नहीं बनना चाहिए।\n\nखाली डेटाबेस भी एक डेटाबेस है — टेबल हैं, पंक्तियाँ नहीं। डिज़ाइन गलत हो तो खाली डेटाबेस भी गलत है; डिज़ाइन सही हो तो खाली डेटाबेस भरना आसान है।`,
    ),
    sec(
      H_WHATIF[0], H_WHATIF[1], H_WHATIF[2],
      `Agar tum library mein ek naya attribute jodna chaho — jaise book ki language — to ye ek column jodne ka kaam hai, design nahi badalta. Lekin agar tum ek nayi cheez jodna chaho — jaise book ki publisher company, jiske baare mein alag se data rakhna ho — to ek nayi entity aur nayi table banani padegi. Attribute badalna sasta hai, entity badalna mehenga.\n\nAgar tum pehle se hi ek badi table bana chuke ho aur baad mein pata chale ki design galat tha, to data ko nayi tables mein baantna padega — is process ko migration kehte hain, aur bade systems mein ye hafton ka kaam ho sakta hai. Isiliye design pehle, table baad mein.`,
      `If you want to add a new attribute to the library — like the language of a book — that is the job of adding one column; the design does not change. But if you want to add a new thing — like the publishing company of a book, about which separate data must be kept — a new entity and a new table are needed. Changing an attribute is cheap, changing an entity is costly.\n\nIf you have already built one big table and later find out the design was wrong, the data must be split into new tables — this process is called migration, and in big systems it can take weeks. That is why design comes first and tables come later.`,
      `अगर तुम लाइब्रेरी में एक नया एट्रिब्यूट जोड़ना चाहो — जैसे किताब की भाषा — तो यह एक कॉलम जोड़ने का काम है, डिज़ाइन नहीं बदलता। लेकिन अगर तुम एक नई चीज़ जोड़ना चाहो — जैसे किताब की प्रकाशक कंपनी, जिसके बारे में अलग से डेटा रखना हो — तो एक नई एंटिटी और नई टेबल बनानी पड़ेगी। एट्रिब्यूट बदलना सस्ता है, एंटिटी बदलना महँगा।\n\nअगर तुम पहले से ही एक बड़ी टेबल बना चुके हो और बाद में पता चले कि डिज़ाइन गलत था, तो डेटा को नई टेबल में बाँटना पड़ेगा — इस प्रक्रिया को माइग्रेशन कहते हैं, और बड़े सिस्टम में यह हफ़्तों का काम हो सकता है। इसीलिए डिज़ाइन पहले, टेबल बाद में।`,
    ),
    sec(
      H_SUM[0], H_SUM[1], H_SUM[2],
      `Database organised data hai, DBMS use sambhalne wala software hai. ER model design ka pehla kadam hai: entity wo cheez hai jiske baare mein data rakhna hai, attribute uski khaasiyat hai, relationship do entities ka connection hai. Har table mein ek key honi chahiye. Pehle kagaz par design banao, phir table banao — ulta karne se gadbad hoti hai.`,
      `A database is organised data, and a DBMS is the software that manages it. The ER model is the first step of design: an entity is a thing you keep data about, an attribute is its property, and a relationship is a connection between two entities. Every table must have a key. First make the design on paper, then make the table — doing it the other way round creates a mess.`,
      `डेटाबेस व्यवस्थित डेटा है, DBMS उसे संभालने वाला सॉफ़्टवेयर है। ईआर मॉडल डिज़ाइन का पहला कदम है: एंटिटी वह चीज़ है जिसके बारे में डेटा रखना है, एट्रिब्यूट उसकी खासियत है, रिलेशनशिप दो एंटिटी का संबंध है। हर टेबल में एक की होनी चाहिए। पहले कागज़ पर डिज़ाइन बनाओ, फिर टेबल बनाओ — उल्टा करने से गड़बड़ होती है।`,
    ),
  ],
  diagram: {
    kind: 'boxes',
    title: t('Library ka ER model', 'The ER model of a library', 'लाइब्रेरी का ईआर मॉडल'),
    nodes: [
      { t: t('Member', 'Member', 'मेंबर'), s: t('member_id, name, phone', 'member_id, name, phone', 'member_id, name, phone') },
      { t: t('Borrows (diamond)', 'Borrows (diamond)', 'उधार लेता है (हीरा)'), s: t('borrow_date, return_date', 'borrow_date, return_date', 'borrow_date, return_date') },
      { t: t('Book', 'Book', 'किताब'), s: t('book_id, title, author', 'book_id, title, author', 'book_id, title, author') },
      { t: t('Key — har row ki pehchan', 'Key — the identity of every row', 'की — हर पंक्ति की पहचान'), s: t('book_id, member_id', 'book_id, member_id', 'book_id, member_id') },
    ],
  },
  codeExamples: [
    {
      title: t('Students table ko dekho — site ka sample data', 'Look at the students table — the sample data of this site', 'स्टूडेंट्स टेबल को देखो — साइट का सैंपल डेटा'),
      language: 'sql',
      code: `SELECT id, name, marks FROM students;`,
      output: 'id | name | marks\n1 | Rahul | 85\n2 | Priya | 92\n3 | Amit | 74\n4 | Sana | 88',
      note: t(
        'Ye table site mein pehle se loaded hai. Is article se aage ke saare SQL examples isi par chalenge — tumhe dobara banana nahi hai.',
        'This table is already loaded on the site. All the SQL examples from this article onward run on it — you do not need to make it again.',
        'यह टेबल साइट में पहले से लोडेड है। इस आर्टिकल से आगे के सारे SQL उदाहरण इसी पर चलेंगे — तुम्हें दोबारा बनाना नहीं है।',
      ),
    },
  ],
  mcqs: [
    {
      q: t(
        'Library mein Book ek entity hai. "author" kya hai?',
        'In a library, Book is an entity. What is "author"?',
        'लाइब्रेरी में Book एक एंटिटी है। "author" क्या है?',
      ),
      opts: [
        t('Ek aur entity', 'Another entity', 'एक और एंटिटी'),
        t('Book ka ek attribute', 'An attribute of Book', 'Book का एक एट्रिब्यूट'),
        t('Ek relationship', 'A relationship', 'एक रिलेशनशिप'),
        t('Ek key', 'A key', 'एक की'),
      ],
      ans: 1,
      expl: t(
        'Author book ki ek khaasiyat hai — har book ka ek author hota hai. Entity wo cheez hai, attribute uski property hai.',
        'Author is a property of a book — every book has one author. The entity is the thing, and the attribute is its property.',
        'लेखक किताब की एक खासियत है — हर किताब का एक लेखक होता है। एंटिटी वह चीज़ है, एट्रिब्यूट उसकी प्रॉपर्टी है।',
      ),
    },
    {
      q: t(
        'Ek member kai books le sakta hai, aur ek book kai members ko mil sakti hai. Ye relationship kaisi hai?',
        'One member can take many books, and one book can go to many members. What kind of relationship is this?',
        'एक मेंबर कई किताबें ले सकता है, और एक किताब कई मेंबरों को मिल सकती है। यह रिलेशनशिप कैसी है?',
      ),
      opts: [
        t('One-to-one', 'One-to-one', 'वन-टू-वन'),
        t('One-to-many', 'One-to-many', 'वन-टू-मैनी'),
        t('Many-to-many', 'Many-to-many', 'मैनी-टू-मैनी'),
        t('Koi relationship nahi', 'No relationship', 'कोई रिलेशनशिप नहीं'),
      ],
      ans: 2,
      expl: t(
        'Dono taraf "kai" hai — ek member kai books, ek book kai members. Isiliye ye many-to-many hai.',
        '"Many" sits on both sides — one member takes many books, and one book goes to many members. So it is many-to-many.',
        'दोनों तरफ़ "कई" है — एक मेंबर कई किताबें, एक किताब कई मेंबर। इसीलिए यह मैनी-टू-मैनी है।',
      ),
    },
    {
      q: t(
        'Table mein key kyun zaroori hai?',
        'Why is a key needed in a table?',
        'टेबल में की क्यों ज़रूरी है?',
      ),
      opts: [
        t('Table tez chalti hai', 'The table runs faster', 'टेबल तेज़ चलती है'),
        t('Har row ki alag pehchan milti hai', 'Every row gets its own identity', 'हर पंक्ति की अलग पहचान मिलती है'),
        t('Table badi dikhti hai', 'The table looks bigger', 'टेबल बड़ी दिखती है'),
        t('Key ke bina table banti hi nahi', 'A table cannot be made at all without a key', 'की के बिना टेबल बनती ही नहीं'),
      ],
      ans: 1,
      expl: t(
        'Bina key ke do ek jaise rows ko alag nahi kar sakte. Key har row ko ek unique pehchan deti hai, jaise roll number.',
        'Without a key, two identical rows cannot be told apart. A key gives every row a unique identity, like a roll number.',
        'बिना की के दो एक जैसी पंक्तियों को अलग नहीं कर सकते। की हर पंक्ति को एक अनोखी पहचान देती है, जैसे रोल नंबर।',
      ),
    },
    {
      q: t(
        'Database banane se pehle ER model kyun banate hain?',
        'Why is an ER model made before building a database?',
        'डेटाबेस बनाने से पहले ईआर मॉडल क्यों बनाते हैं?',
      ),
      opts: [
        t('Taaki table sundar dikhe', 'So that the table looks nice', 'ताकि टेबल सुंदर दिखे'),
        t('Taaki design ki galti pehle pakdi jaye, table banane se pehle', 'So that a design mistake is caught early, before the table is made', 'ताकि डिज़ाइन की गलती पहले पकड़ी जाए, टेबल बनाने से पहले'),
        t('ER model ke bina SQL chalta hi nahi', 'SQL does not run at all without an ER model', 'ईआर मॉडल के बिना SQL चलता ही नहीं'),
        t('Taaki zyada tables ban sakein', 'So that more tables can be made', 'ताकि ज़्यादा टेबल बन सकें'),
      ],
      ans: 1,
      expl: t(
        'Kagaz par galti sudharna sasta hai, bani hui table aur bhara hua data badalna mehenga hai. ER model design ki galti ko shuru mein pakadta hai.',
        'Fixing a mistake on paper is cheap; changing a built table and filled data is costly. The ER model catches a design mistake at the start.',
        'कागज़ पर गलती सुधारना सस्ता है, बनी हुई टेबल और भरा हुआ डेटा बदलना महँगा है। ईआर मॉडल डिज़ाइन की गलती को शुरू में पकड़ता है।',
      ),
    },
  ],
  practice: {
    title: t('Apni library ki table banao', 'Make a table for your own library', 'अपनी लाइब्रेरी की टेबल बनाओ'),
    task: t(
      'Ek table members banao jisme member_id INTEGER PRIMARY KEY, name TEXT aur phone TEXT hon. Phir do members insert karo: (1, \'Asha\', \'98765\') aur (2, \'Rohan\', \'98766\'). Aakhir mein SELECT se dono dikhao. Done tab maanenge jab output mein dono rows dikhein. Dhyaan do: table ka naam members hai, students nahi — students pehle se loaded hai, use dobara mat banao.',
      'Make a table called members with member_id INTEGER PRIMARY KEY, name TEXT and phone TEXT. Then insert two members: (1, \'Asha\', \'98765\') and (2, \'Rohan\', \'98766\'). At the end, show both with SELECT. You are done when both rows appear in the output. Note: the table is called members, not students — students is already loaded, do not make it again.',
      'एक टेबल members बनाओ जिसमें member_id INTEGER PRIMARY KEY, name TEXT और phone TEXT हों। फिर दो मेंबर इन्सर्ट करो: (1, \'Asha\', \'98765\') और (2, \'Rohan\', \'98766\')। आखिर में SELECT से दोनों दिखाओ। तब पूरा मानेंगे जब आउटपुट में दोनों पंक्तियाँ दिखें। ध्यान दो: टेबल का नाम members है, students नहीं — students पहले से लोडेड है, उसे दोबारा मत बनाओ।',
    ),
    language: 'sql',
    starter: `CREATE TABLE members (
  member_id INTEGER PRIMARY KEY,
  name TEXT,
  phone TEXT
);
INSERT INTO members VALUES (1, 'Asha', '98765');
INSERT INTO members VALUES (2, 'Rohan', '98766');
SELECT member_id, name, phone FROM members;`,
    expected: 'member_id | name | phone\n1 | Asha | 98765\n2 | Rohan | 98766',
  },
  readMinutes: 10,
};

const dbmsRelational: Article = {
  id: 'dbms-relational',
  subjectId: 'dbms',
  title: t(
    'Relational model, keys aur constraints',
    'The relational model, keys and constraints',
    'रिलेशनल मॉडल, कीज़ और कंस्ट्रेंट्स',
  ),
  summary: t(
    'Relational model mein data tables mein rehta hai — rows aur columns. Primary key har row ki pehchan hai, foreign key do tables ko jodti hai, aur constraints galat data ko andar aane se rokte hain.',
    'In the relational model, data lives in tables — rows and columns. A primary key is the identity of every row, a foreign key joins two tables, and constraints stop wrong data from getting in.',
    'रिलेशनल मॉडल में डेटा टेबल में रहता है — पंक्तियाँ और कॉलम। प्राइमरी की हर पंक्ति की पहचान है, फ़ॉरेन की दो टेबल को जोड़ती है, और कंस्ट्रेंट गलत डेटा को अंदर आने से रोकते हैं।',
  ),
  sections: [
    sec(
      H_WHAT[0], H_WHAT[1], H_WHAT[2],
      `Relational model mein poora data tables mein rehta hai. Har table ke columns hote hain (attributes) aur rows hoti hain (records). Students table mein columns hain id, name, marks — aur har student ek row hai. Row ko tuple bhi kehte hain, column ko attribute. Table ka ek fixed structure hota hai: har row mein utne hi columns hote hain, chahe koi value khali ho.\n\nPrimary key wo column (ya columns ka group) hai jo har row ko alag pehchan deta hai. Students mein id primary key hai — do students ka id kabhi ek jaisa nahi ho sakta. Primary key kabhi khali (NULL) nahi ho sakti aur kabhi repeat nahi ho sakti.\n\nForeign key ek table ka wo column hai jo doosri table ki primary key ki taraf ishara karta hai. Jaise marks table mein student_id foreign key hai jo students.id ki taraf ishara karta hai. Isse dono tables jud jaati hain, aur aisa data nahi ghus sakta jiska student hai hi nahi. Constraints wo rules hain jo data par lagte hain — NOT NULL, UNIQUE, CHECK — taaki galat data pehle hi ruk jaye.`,
      `In the relational model, all the data lives in tables. Every table has columns (attributes) and rows (records). The students table has the columns id, name, marks — and every student is one row. A row is also called a tuple, and a column is also called an attribute. A table has a fixed structure: every row has the same columns, even if some value is empty.\n\nA primary key is the column (or group of columns) that gives every row its own identity. In students, id is the primary key — two students can never share the same id. A primary key can never be empty (NULL) and can never repeat.\n\nA foreign key is a column in one table that points at the primary key of another table. For example, in a marks table, student_id is a foreign key that points at students.id. This joins the two tables, and data cannot get in for a student who does not exist at all. Constraints are rules placed on the data — NOT NULL, UNIQUE, CHECK — so that wrong data is stopped at the door.`,
      `रिलेशनल मॉडल में पूरा डेटा टेबल में रहता है। हर टेबल के कॉलम होते हैं (एट्रिब्यूट) और पंक्तियाँ होती हैं (रिकॉर्ड)। स्टूडेंट्स टेबल में कॉलम हैं id, name, marks — और हर छात्र एक पंक्ति है। पंक्ति को टपल भी कहते हैं, कॉलम को एट्रिब्यूट। टेबल का एक निश्चित ढाँचा होता है: हर पंक्ति में उतने ही कॉलम होते हैं, चाहे कोई वैल्यू खाली हो।\n\nप्राइमरी की वह कॉलम (या कॉलमों का समूह) है जो हर पंक्ति को अलग पहचान देता है। स्टूडेंट्स में id प्राइमरी की है — दो छात्रों का id कभी एक जैसा नहीं हो सकता। प्राइमरी की कभी खाली (NULL) नहीं हो सकती और कभी दोहराई नहीं जा सकती।\n\nफ़ॉरेन की एक टेबल का वह कॉलम है जो दूसरी टेबल की प्राइमरी की की तरफ़ इशारा करता है। जैसे मार्क्स टेबल में student_id फ़ॉरेन की है जो students.id की तरफ़ इशारा करता है। इससे दोनों टेबल जुड़ जाती हैं, और ऐसा डेटा नहीं घुस सकता जिसका छात्र है ही नहीं। कंस्ट्रेंट वे नियम हैं जो डेटा पर लगते हैं — NOT NULL, UNIQUE, CHECK — ताकि गलत डेटा पहले ही रुक जाए।`,
    ),
    sec(
      H_REAL[0], H_REAL[1], H_REAL[2],
      `School ka register dekho: har student ka roll number alag hai. Do students ka naam ek jaisa ho sakta hai — do "Rahul" ho sakte hain — lekin roll number kabhi ek jaisa nahi hota. Roll number hi primary key hai. Teacher naam se nahi, roll number se student ko pehchanti hai.\n\nAadhaar number bhi primary key jaisa hai: pure desh mein har vyakti ka alag Aadhaar. Railway ticket ka PNR bhi ek key hai — ek PNR se poori booking mil jaati hai: naam, train, seat, sab kuch.\n\nForeign key ka example: school mein marks wali copy mein har entry ke saath roll number likha hota hai. Roll number hi batata hai ki ye marks kis student ke hain. Agar marks wali copy mein roll number 99 likha ho aur class mein 99 number ka student hi na ho, to wo entry bekaar hai — foreign key aisi entry ko rok deta hai.`,
      `Look at a school register: every student has a different roll number. Two students can share a name — there can be two "Rahuls" — but a roll number is never the same twice. The roll number is the primary key. The teacher recognises a student by the roll number, not by the name.\n\nAn Aadhaar number is like a primary key too: every person in the whole country has a different Aadhaar. The PNR of a railway ticket is also a key — one PNR gives the whole booking: name, train, seat, everything.\n\nHere is an example of a foreign key: in the marks notebook at school, every entry is written with a roll number. The roll number tells you whose marks these are. If the marks notebook has roll number 99, but there is no student with number 99 in the class, that entry is useless — a foreign key blocks such an entry.`,
      `स्कूल का रजिस्टर देखो: हर छात्र का रोल नंबर अलग है। दो छात्रों का नाम एक जैसा हो सकता है — दो "राहुल" हो सकते हैं — लेकिन रोल नंबर कभी एक जैसा नहीं होता। रोल नंबर ही प्राइमरी की है। टीचर नाम से नहीं, रोल नंबर से छात्र को पहचानती है।\n\nआधार नंबर भी प्राइमरी की जैसा है: पूरे देश में हर व्यक्ति का अलग आधार। रेलवे टिकट का PNR भी एक की है — एक PNR से पूरी बुकिंग मिल जाती है: नाम, ट्रेन, सीट, सब कुछ।\n\nफ़ॉरेन की का उदाहरण: स्कूल में मार्क्स वाली कॉपी में हर एंट्री के साथ रोल नंबर लिखा होता है। रोल नंबर ही बताता है कि ये नंबर किस छात्र के हैं। अगर मार्क्स वाली कॉपी में रोल नंबर 99 लिखा हो और क्लास में 99 नंबर का छात्र ही न हो, तो वह एंट्री बेकार है — फ़ॉरेन की ऐसी एंट्री को रोक देता है।`,
    ),
    sec(
      H_STEP[0], H_STEP[1], H_STEP[2],
      `Chalo students table ke saath ek doosri table banate hain: scores, jisme har student ke har subject ke marks hon. Pehle students table yaad karo: (1, Rahul, 85), (2, Priya, 92), (3, Amit, 74), (4, Sana, 88). Ab scores table banao: score_id PRIMARY KEY, student_id INTEGER REFERENCES students(id), subject TEXT, marks INTEGER. Yahan student_id foreign key hai.\n\nAb ek row daalo: (1, 2, 'Maths', 95) — matlab Priya (id 2) ke Maths mein 95. Ye chal jayega, kyunki student 2 hai. Lekin (2, 99, 'Maths', 80) daalne ki koshish karo — student 99 hai hi nahi, to database mana kar dega: foreign key constraint fail. Yehi constraint ki taakat hai — galat data andar hi nahi ghus sakta.\n\nDoosra worked example: constraints. marks par CHECK (marks >= 0 AND marks <= 100) lagao to -5 ya 150 daalne par error aayega. name par NOT NULL lagao to bina naam ke student nahi banega. email par UNIQUE lagao to do students ka email ek jaisa nahi ho sakta. Neeche code mein scores table banti hai aur dono insert karke dikhaye gaye hain — doosra insert error dega, isliye code mein sirf pehla insert chalaya gaya hai, aur error wali line comment mein likhi hai.`,
      `Let us build a second table next to the students table: scores, holding the marks of every student in every subject. First recall the students table: (1, Rahul, 85), (2, Priya, 92), (3, Amit, 74), (4, Sana, 88). Now make the scores table: score_id PRIMARY KEY, student_id INTEGER REFERENCES students(id), subject TEXT, marks INTEGER. Here student_id is a foreign key.\n\nNow add a row: (1, 2, 'Maths', 95) — Priya (id 2) scored 95 in Maths. This works, because student 2 exists. But try adding (2, 99, 'Maths', 80) — student 99 does not exist at all, so the database refuses: the foreign key constraint fails. That is the power of a constraint — wrong data cannot get in at all.\n\nA second worked example: constraints. Put CHECK (marks >= 0 AND marks <= 100) on marks, and adding -5 or 150 gives an error. Put NOT NULL on name, and a student cannot be made without a name. Put UNIQUE on email, and two students cannot share the same email. In the code below, the scores table is made and both inserts are shown — the second insert would give an error, so only the first insert runs in the code, and the error line is written as a comment.`,
      `चलो स्टूडेंट्स टेबल के साथ एक दूसरी टेबल बनाते हैं: scores, जिसमें हर छात्र के हर विषय के नंबर हों। पहले स्टूडेंट्स टेबल याद करो: (1, Rahul, 85), (2, Priya, 92), (3, Amit, 74), (4, Sana, 88)। अब scores टेबल बनाओ: score_id PRIMARY KEY, student_id INTEGER REFERENCES students(id), subject TEXT, marks INTEGER। यहाँ student_id फ़ॉरेन की है।\n\nअब एक पंक्ति डालो: (1, 2, 'Maths', 95) — मतलब प्रिया (id 2) के गणित में 95। यह चल जाएगा, क्योंकि छात्र 2 है। लेकिन (2, 99, 'Maths', 80) डालने की कोशिश करो — छात्र 99 है ही नहीं, तो डेटाबेस मना कर देगा: फ़ॉरेन की कंस्ट्रेंट फ़ेल। यही कंस्ट्रेंट की ताकत है — गलत डेटा अंदर ही नहीं घुस सकता।\n\nदूसरा हल किया हुआ उदाहरण: कंस्ट्रेंट। marks पर CHECK (marks >= 0 AND marks <= 100) लगाओ तो -5 या 150 डालने पर एरर आएगा। name पर NOT NULL लगाओ तो बिना नाम के छात्र नहीं बनेगा। email पर UNIQUE लगाओ तो दो छात्रों का ईमेल एक जैसा नहीं हो सकता। नीचे कोड में scores टेबल बनती है और दोनों इन्सर्ट करके दिखाए गए हैं — दूसरा इन्सर्ट एरर देगा, इसलिए कोड में सिर्फ़ पहला इन्सर्ट चलाया गया है, और एरर वाली लाइन कमेंट में लिखी है।`,
      {
        title: t('Foreign key — scores table students se jodo', 'Foreign key — join the scores table to students', 'फ़ॉरेन की — scores टेबल students से जोड़ो'),
        language: 'sql',
        code: `CREATE TABLE scores (
  score_id INTEGER PRIMARY KEY,
  student_id INTEGER REFERENCES students(id),
  subject TEXT,
  marks INTEGER CHECK (marks >= 0 AND marks <= 100)
);
INSERT INTO scores VALUES (1, 2, 'Maths', 95);
-- INSERT INTO scores VALUES (2, 99, 'Maths', 80);
-- upar wali line error degi: student 99 hai hi nahi
SELECT score_id, student_id, subject, marks FROM scores;`,
        output: 'score_id | student_id | subject | marks\n1 | 2 | Maths | 95',
        note: t(
          'REFERENCES students(id) hi foreign key hai. SQLite mein foreign key check ke liye PRAGMA foreign_keys = ON chahiye hota hai — site ke runner mein ye demo ke liye dikhaya gaya hai, asli databases mein ye hamesha on rehta hai.',
          'REFERENCES students(id) is the foreign key. In real databases like MySQL and PostgreSQL, the second insert is refused. In this site\'s SQL runner, foreign key checks stay off by default, so the wrong insert is shown only as a comment — try it in a real database to see the error.',
          'REFERENCES students(id) ही फ़ॉरेन की है। MySQL और PostgreSQL जैसे असली डेटाबेस में दूसरा इन्सर्ट मना कर दिया जाता है। इस साइट के SQL रनर में फ़ॉरेन की जाँच डिफ़ॉल्ट रूप से बंद रहती है, इसलिए गलत इन्सर्ट सिर्फ़ कमेंट में दिखाया गया है — एरर देखने के लिए इसे असली डेटाबेस में चलाकर देखो।',
        ),
      },
    ),
    sec(
      H_MIST[0], H_MIST[1], H_MIST[2],
      `Sabse badi galti: naam ko primary key banana. "Rahul" naam ka ek student hai, doosra Rahul aa gaya to key repeat ho jayegi aur database mana kar dega — ya usse bura, purani row overwrite ho jayegi. Naam kabhi key nahi hota, kyunki naam badal bhi sakta hai aur repeat bhi ho sakta hai. Key hamesha aisi cheez chuno jo kabhi na badle aur kabhi repeat na ho — jaise id ya roll number.\n\nDoosri galti: foreign key ke bina do tables ko jodna. Log student_id ko sirf ek number samajh kar daal dete hain, REFERENCES likhte hi nahi. Phir 99 number ka student na hone par bhi marks ghus jaate hain, aur baad mein join karne par wo rows gayab ho jaati hain. REFERENCES likhna bhoolna matlab darwaze par taala lagana bhoolna hai.\n\nTeesri galti: UNIQUE aur PRIMARY KEY ko ek samajhna. PRIMARY KEY ek hi hoti hai, NULL nahi ho sakti. UNIQUE kai ho sakte hain, aur kuch databases mein ek NULL bhi chal jata hai. Email UNIQUE ho sakta hai, lekin primary key nahi — kyunki email badal sakta hai.`,
      `The biggest mistake is making a name the primary key. There is one student called "Rahul"; when a second Rahul arrives, the key repeats and the database refuses — or worse, the old row is overwritten. A name is never a key, because a name can change and can repeat. Always choose a key that never changes and never repeats — like an id or a roll number.\n\nThe second mistake is joining two tables without a foreign key. People put student_id in as just a number and never write REFERENCES. Then marks get in even for student 99, who does not exist, and later, when you join, those rows vanish. Forgetting to write REFERENCES is like forgetting to lock the door.\n\nThe third mistake is treating UNIQUE and PRIMARY KEY as the same thing. There is only one PRIMARY KEY, and it can never be NULL. There can be many UNIQUE columns, and in some databases one NULL is allowed. An email can be UNIQUE, but not a primary key — because an email can change.`,
      `सबसे बड़ी गलती: नाम को प्राइमरी की बनाना। "राहुल" नाम का एक छात्र है, दूसरा राहुल आ गया तो की दोहराई जाएगी और डेटाबेस मना कर देगा — या उससे बुरा, पुरानी पंक्ति ओवरराइट हो जाएगी। नाम कभी की नहीं होता, क्योंकि नाम बदल भी सकता है और दोहराया भी जा सकता है। की हमेशा ऐसी चीज़ चुनो जो कभी न बदले और कभी दोहराई न जाए — जैसे id या रोल नंबर।\n\nदूसरी गलती: फ़ॉरेन की के बिना दो टेबल को जोड़ना। लोग student_id को सिर्फ़ एक नंबर समझकर डाल देते हैं, REFERENCES लिखते ही नहीं। फिर 99 नंबर का छात्र न होने पर भी नंबर घुस जाते हैं, और बाद में जॉइन करने पर वह पंक्तियाँ गायब हो जाती हैं। REFERENCES लिखना भूलना मतलब दरवाज़े पर ताला लगाना भूलना है।\n\nतीसरी गलती: UNIQUE और PRIMARY KEY को एक समझना। PRIMARY KEY एक ही होती है, NULL नहीं हो सकती। UNIQUE कई हो सकते हैं, और कुछ डेटाबेस में एक NULL भी चल जाता है। ईमेल UNIQUE हो सकता है, लेकिन प्राइमरी की नहीं — क्योंकि ईमेल बदल सकता है।`,
    ),
    sec(
      H_EDGE[0], H_EDGE[1], H_EDGE[2],
      `Composite key kya hai? Kabhi ek column kaafi nahi hota. Jaise scores table mein (student_id, subject) dono mil kar key ban sakte hain — ek student ka ek subject mein ek hi score hona chahiye. Akele student_id key nahi ban sakta, kyunki ek student ke kai subjects hain. Aise mein PRIMARY KEY (student_id, subject) likhte hain.\n\nForeign key mein NULL chal sakta hai: agar kisi score ka student abhi pata nahi, to student_id NULL ho sakta hai — matlab "abhi joda nahi gaya". Lekin primary key mein NULL kabhi nahi chalega.\n\nKhali table par saare constraints lagte hain, lekin koi error nahi aata — constraints tabhi bolte hain jab galat data daalne ki koshish ho. Isiliye khali table ko test karna kaafi nahi — galat insert karke dekho ki database use rokta hai ya nahi.`,
      `What is a composite key? Sometimes one column is not enough. In the scores table, (student_id, subject) together can form the key — one student should have only one score in one subject. student_id alone cannot be the key, because one student has many subjects. In that case you write PRIMARY KEY (student_id, subject).\n\nA foreign key can hold NULL: if the student for a score is not known yet, student_id can be NULL — meaning "not linked yet". But a primary key can never hold NULL.\n\nAll the constraints apply to an empty table too, but no error appears — constraints speak up only when wrong data is pushed in. That is why testing an empty table is not enough — try a wrong insert and see whether the database stops it.`,
      `कंपोज़िट की क्या है? कभी एक कॉलम काफ़ी नहीं होता। जैसे scores टेबल में (student_id, subject) दोनों मिलकर की बन सकते हैं — एक छात्र का एक विषय में एक ही स्कोर होना चाहिए। अकेले student_id की नहीं बन सकता, क्योंकि एक छात्र के कई विषय हैं। ऐसे में PRIMARY KEY (student_id, subject) लिखते हैं।\n\nफ़ॉरेन की में NULL चल सकता है: अगर किसी स्कोर का छात्र अभी पता नहीं, तो student_id NULL हो सकता है — मतलब "अभी जोड़ा नहीं गया"। लेकिन प्राइमरी की में NULL कभी नहीं चलेगा।\n\nखाली टेबल पर सारे कंस्ट्रेंट लगते हैं, लेकिन कोई एरर नहीं आता — कंस्ट्रेंट तभी बोलते हैं जब गलत डेटा डालने की कोशिश हो। इसीलिए खाली टेबल को टेस्ट करना काफ़ी नहीं — गलत इन्सर्ट करके देखो कि डेटाबेस उसे रोकता है या नहीं।`,
    ),
    sec(
      H_WHATIF[0], H_WHATIF[1], H_WHATIF[2],
      `Agar tum primary key badal do — jaise id ki jagah email ko key bana do — to har foreign key ko bhi badalna padega, kyunki wo purani key ki taraf ishara karti hai. Ek chhota badlaav poore database mein phail jata hai. Isiliye key aisi chuno jo kabhi na badle: id jaisi artificial key (surrogate key) aksar behtar hoti hai, kyunki wo kisi real cheez par depend nahi karti.\n\nAgar tum CHECK constraint hata do, to galat marks (-5, 150) andar ghus jayenge aur baad mein average nikalte waqt galat jawab aayega. Constraint hatana easy hai, galat data saaf karna mushkil.`,
      `If you change the primary key — say you make email the key instead of id — every foreign key must change too, because it points at the old key. One small change spreads through the whole database. So choose a key that never changes: an artificial key like id (a surrogate key) is often better, because it does not depend on any real thing.\n\nIf you remove the CHECK constraint, wrong marks (-5, 150) get inside, and later, when you work out the average, the answer comes out wrong. Removing a constraint is easy; cleaning wrong data is hard.`,
      `अगर तुम प्राइमरी की बदल दो — जैसे id की जगह ईमेल को की बना दो — तो हर फ़ॉरेन की को भी बदलना पड़ेगा, क्योंकि वह पुरानी की की तरफ़ इशारा करती है। एक छोटा बदलाव पूरे डेटाबेस में फैल जाता है। इसीलिए की ऐसी चुनो जो कभी न बदले: id जैसी कृत्रिम की (सरोगेट की) अक्सर बेहतर होती है, क्योंकि वह किसी असली चीज़ पर निर्भर नहीं करती।\n\nअगर तुम CHECK कंस्ट्रेंट हटा दो, तो गलत नंबर (-5, 150) अंदर घुस जाएँगे और बाद में औसत निकालते समय गलत जवाब आएगा। कंस्ट्रेंट हटाना आसान है, गलत डेटा साफ़ करना मुश्किल।`,
    ),
    sec(
      H_SUM[0], H_SUM[1], H_SUM[2],
      `Relational model mein data tables mein rehta hai. Primary key har row ki unique pehchan hai — NULL nahi, repeat nahi. Foreign key ek table ko doosri se jodti hai aur bekaar data ko rokti hai. Constraints — NOT NULL, UNIQUE, CHECK — galat data ko pehle hi rok dete hain. Key hamesha aisi chuno jo kabhi na badle: naam kabhi key nahi hota, id hota hai.`,
      `In the relational model, data lives in tables. A primary key is the unique identity of every row — never NULL, never repeated. A foreign key joins one table to another and blocks useless data. Constraints — NOT NULL, UNIQUE, CHECK — stop wrong data at the door. Always choose a key that never changes: a name is never a key, an id is.`,
      `रिलेशनल मॉडल में डेटा टेबल में रहता है। प्राइमरी की हर पंक्ति की अनोखी पहचान है — NULL नहीं, दोहराव नहीं। फ़ॉरेन की एक टेबल को दूसरी से जोड़ती है और बेकार डेटा को रोकती है। कंस्ट्रेंट — NOT NULL, UNIQUE, CHECK — गलत डेटा को पहले ही रोक देते हैं। की हमेशा ऐसी चुनो जो कभी न बदले: नाम कभी की नहीं होता, id होता है।`,
    ),
  ],
  diagram: {
    kind: 'boxes',
    title: t('Keys — ek nazar mein', 'Keys — at a glance', 'कीज़ — एक नज़र में'),
    nodes: [
      { t: t('Primary key — id', 'Primary key — id', 'प्राइमरी की — id'), s: t('unique, kabhi NULL nahi', 'unique, never NULL', 'अनोखी, कभी NULL नहीं') },
      { t: t('Foreign key — student_id', 'Foreign key — student_id', 'फ़ॉरेन की — student_id'), s: t('doosri table ki taraf ishara', 'points at the other table', 'दूसरी टेबल की तरफ़ इशारा') },
      { t: t('UNIQUE — email', 'UNIQUE — email', 'UNIQUE — ईमेल'), s: t('repeat nahi, NULL kabhi-kabhi', 'no repeats, NULL sometimes', 'दोहराव नहीं, NULL कभी-कभी') },
      { t: t('CHECK — marks 0 se 100', 'CHECK — marks from 0 to 100', 'CHECK — नंबर 0 से 100'), s: t('galat value roko', 'block a wrong value', 'गलत वैल्यू रोको') },
    ],
  },
  codeExamples: [
    {
      title: t('CHECK constraint — galat marks roko', 'CHECK constraint — block wrong marks', 'CHECK कंस्ट्रेंट — गलत नंबर रोको'),
      language: 'sql',
      code: `CREATE TABLE exam (
  exam_id INTEGER PRIMARY KEY,
  marks INTEGER CHECK (marks >= 0 AND marks <= 100)
);
INSERT INTO exam VALUES (1, 88);
SELECT exam_id, marks FROM exam;`,
      output: 'exam_id | marks\n1 | 88',
      note: t(
        'INSERT INTO exam VALUES (2, 150) likh kar dekho — CHECK constraint use rok dega. Constraint ko test karne ka yehi tareeka hai: galat data daal kar dekho.',
        'Try writing INSERT INTO exam VALUES (2, 150) — the CHECK constraint stops it. That is how you test a constraint: push wrong data in and watch.',
        'INSERT INTO exam VALUES (2, 150) लिखकर देखो — CHECK कंस्ट्रेंट उसे रोक देगा। कंस्ट्रेंट को टेस्ट करने का यही तरीका है: गलत डेटा डालकर देखो।',
      ),
    },
  ],
  mcqs: [
    {
      q: t(
        'Students table mein kaun sa column primary key ke liye sabse sahi hai?',
        'Which column is the best choice for the primary key in the students table?',
        'स्टूडेंट्स टेबल में कौन सा कॉलम प्राइमरी की के लिए सबसे सही है?',
      ),
      opts: [
        t('name, kyunki naam se pehchanna jata hai', 'name, because a person is known by name', 'name, क्योंकि नाम से पहचाना जाता है'),
        t('id, kyunki wo unique hai aur kabhi nahi badalta', 'id, because it is unique and never changes', 'id, क्योंकि वह अनोखा है और कभी नहीं बदलता'),
        t('marks, kyunki wo number hai', 'marks, because it is a number', 'marks, क्योंकि वह नंबर है'),
        t('Koi bhi column chalega', 'Any column will do', 'कोई भी कॉलम चलेगा'),
      ],
      ans: 1,
      expl: t(
        'Naam repeat ho sakta hai aur badal bhi sakta hai, marks bhi repeat hote hain. Id unique hai aur stable hai — isiliye wahi key hai.',
        'A name can repeat and can change, and marks repeat too. Id is unique and stable — that is why it is the key.',
        'नाम दोहराया जा सकता है और बदल भी सकता है, नंबर भी दोहराए जाते हैं। Id अनोखा है और स्थिर है — इसीलिए वही की है।',
      ),
    },
    {
      q: t(
        'scores table mein student_id foreign key hai. INSERT INTO scores VALUES (2, 99, \'Maths\', 80) kyun fail hoga?',
        'In the scores table, student_id is a foreign key. Why will INSERT INTO scores VALUES (2, 99, \'Maths\', 80) fail?',
        'scores टेबल में student_id फ़ॉरेन की है। INSERT INTO scores VALUES (2, 99, \'Maths\', 80) क्यों फ़ेल होगा?',
      ),
      opts: [
        t('Kyunki 80 galat marks hain', 'Because 80 is a wrong mark', 'क्योंकि 80 गलत नंबर हैं'),
        t('Kyunki student 99 students table mein hai hi nahi', 'Because student 99 does not exist in the students table at all', 'क्योंकि छात्र 99 स्टूडेंट्स टेबल में है ही नहीं'),
        t('Kyunki Maths subject nahi hai', 'Because Maths is not a subject', 'क्योंकि Maths विषय नहीं है'),
        t('Ye fail nahi hoga', 'It will not fail', 'यह फ़ेल नहीं होगा'),
      ],
      ans: 1,
      expl: t(
        'Foreign key ka matlab hai: student_id ki har value students.id mein honi chahiye. 99 wahan nahi hai, isliye database mana kar deta hai.',
        'A foreign key means this: every value of student_id must exist in students.id. 99 is not there, so the database refuses.',
        'फ़ॉरेन की का मतलब है: student_id की हर वैल्यू students.id में होनी चाहिए। 99 वहाँ नहीं है, इसलिए डेटाबेस मना कर देता है।',
      ),
    },
    {
      q: t(
        'PRIMARY KEY aur UNIQUE mein kya farak hai?',
        'What is the difference between PRIMARY KEY and UNIQUE?',
        'PRIMARY KEY और UNIQUE में क्या फ़र्क है?',
      ),
      opts: [
        t('Koi farak nahi hai', 'There is no difference', 'कोई फ़र्क नहीं है'),
        t('PRIMARY KEY ek hi hoti hai aur NULL nahi ho sakti; UNIQUE kai ho sakte hain', 'There is only one PRIMARY KEY and it can never be NULL; there can be many UNIQUE columns', 'PRIMARY KEY एक ही होती है और NULL नहीं हो सकती; UNIQUE कई हो सकते हैं'),
        t('UNIQUE tez hota hai', 'UNIQUE is faster', 'UNIQUE तेज़ होता है'),
        t('PRIMARY KEY sirf numbers par lagti hai', 'PRIMARY KEY only applies to numbers', 'PRIMARY KEY सिर्फ़ नंबरों पर लगती है'),
      ],
      ans: 1,
      expl: t(
        'Har table mein ek hi primary key hoti hai aur wo kabhi NULL nahi ho sakti. UNIQUE columns kai ho sakte hain — jaise email aur phone dono UNIQUE ho sakte hain.',
        'Every table has only one primary key, and it can never be NULL. There can be many UNIQUE columns — email and phone can both be UNIQUE.',
        'हर टेबल में एक ही प्राइमरी की होती है और वह कभी NULL नहीं हो सकती। UNIQUE कॉलम कई हो सकते हैं — जैसे ईमेल और फ़ोन दोनों UNIQUE हो सकते हैं।',
      ),
    },
    {
      q: t(
        'Scores table mein (student_id, subject) ko mil kar key banana kyun samajhdaari hai?',
        'Why is it sensible to make (student_id, subject) together the key in the scores table?',
        'Scores टेबल में (student_id, subject) को मिलकर की बनाना क्यों समझदारी है?',
      ),
      opts: [
        t('Kyunki ek student ka ek subject mein ek hi score hona chahiye', 'Because one student should have only one score in one subject', 'क्योंकि एक छात्र का एक विषय में एक ही स्कोर होना चाहिए'),
        t('Kyunki subject lamba hota hai', 'Because a subject is long', 'क्योंकि विषय लंबा होता है'),
        t('Kyunki student_id akele kaafi nahi hota, marks bhi chahiye', 'Because student_id alone is not enough, marks are needed too', 'क्योंकि student_id अकेले काफ़ी नहीं होता, नंबर भी चाहिए'),
        t('Ye galat hai, aisa kabhi nahi karte', 'This is wrong, it is never done', 'यह गलत है, ऐसा कभी नहीं करते'),
      ],
      ans: 0,
      expl: t(
        'Akele student_id key nahi ban sakta, kyunki ek student ke kai subjects hain. (student_id, subject) dono mil kar har row ko unique banate hain.',
        'student_id alone cannot be the key, because one student has many subjects. (student_id, subject) together make every row unique.',
        'अकेले student_id की नहीं बन सकता, क्योंकि एक छात्र के कई विषय हैं। (student_id, subject) दोनों मिलकर हर पंक्ति को अनोखा बनाते हैं।',
      ),
    },
  ],
  practice: {
    title: t('Courses table banao — key aur constraint ke saath', 'Make a courses table — with a key and a constraint', 'Courses टेबल बनाओ — की और कंस्ट्रेंट के साथ'),
    task: t(
      'Ek table courses banao: course_id INTEGER PRIMARY KEY, title TEXT NOT NULL, fees INTEGER CHECK (fees >= 0). Phir ek course insert karo: (1, \'Python Basics\', 999). Aakhir mein SELECT se dikhao. Done tab maanenge jab output mein 1 | Python Basics | 999 dikhe. Bonus: INSERT INTO courses VALUES (2, \'SQL\', -50) likh kar dekho — CHECK use rok dega.',
      'Make a table called courses: course_id INTEGER PRIMARY KEY, title TEXT NOT NULL, fees INTEGER CHECK (fees >= 0). Then insert one course: (1, \'Python Basics\', 999). At the end, show it with SELECT. You are done when the output shows 1 | Python Basics | 999. Bonus: try INSERT INTO courses VALUES (2, \'SQL\', -50) — the CHECK will stop it.',
      'एक टेबल courses बनाओ: course_id INTEGER PRIMARY KEY, title TEXT NOT NULL, fees INTEGER CHECK (fees >= 0)। फिर एक कोर्स इन्सर्ट करो: (1, \'Python Basics\', 999)। आखिर में SELECT से दिखाओ। तब पूरा मानेंगे जब आउटपुट में 1 | Python Basics | 999 दिखे। बोनस: INSERT INTO courses VALUES (2, \'SQL\', -50) लिखकर देखो — CHECK उसे रोक देगा।',
    ),
    language: 'sql',
    starter: `CREATE TABLE courses (
  course_id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  fees INTEGER CHECK (fees >= 0)
);
INSERT INTO courses VALUES (1, 'Python Basics', 999);
SELECT course_id, title, fees FROM courses;`,
    expected: 'course_id | title | fees\n1 | Python Basics | 999',
  },
  readMinutes: 10,
};

const dbmsSelect: Article = {
  id: 'dbms-select',
  subjectId: 'dbms',
  title: t(
    'SQL SELECT — chhantna, sort karna, ginna',
    'SQL SELECT — filtering, sorting and counting',
    'SQL SELECT — छाँटना, सॉर्ट करना, गिनना',
  ),
  summary: t(
    'SELECT data ko padhne ka tareeka hai — wo data ko badalta nahi. WHERE se rows chhanto, ORDER BY se sajao, aur COUNT, AVG, MAX jaise aggregates se poori table ka hisaab nikalo.',
    'SELECT is the way to read data — it never changes the data. Use WHERE to filter rows, ORDER BY to arrange them, and aggregates like COUNT, AVG and MAX to work out the summary of a whole table.',
    'SELECT डेटा को पढ़ने का तरीका है — वह डेटा को बदलता नहीं। WHERE से पंक्तियाँ छाँटो, ORDER BY से सजाओ, और COUNT, AVG, MAX जैसे एग्रीगेट से पूरी टेबल का हिसाब निकालो।',
  ),
  sections: [
    sec(
      H_WHAT[0], H_WHAT[1], H_WHAT[2],
      `SELECT SQL ka sabse use hone wala command hai. Iska kaam hai data ko padhna — bina use badle. Tum likhte ho ki kaun se columns chahiye, kis table se, aur kaun si shartein hain. Database tumhe ek nayi table jaisa result deta hai, lekin original table waisi ki waisi rehti hai.\n\nSELECT ke teen dost hain: WHERE, ORDER BY aur aggregates. WHERE rows ko chhant ta hai — sirf wahi rows aati hain jo shart ko poora karti hain. ORDER BY result ko sajata hai — badhte ya ghatte order mein. Aggregates — COUNT, SUM, AVG, MIN, MAX — poori table ya group ka ek number nikalte hain, jaise class ka average.\n\nSQL ke keywords — SELECT, FROM, WHERE, ORDER BY — bade ya chhote, dono mein likh sakte ho. Lekin ek style pakdo aur wahi rakho, taaki query padhne mein easy lage. Semicolon (;) query ka end batata hai.`,
      `SELECT is the most used command in SQL. Its job is to read data — without changing it. You write which columns you need, from which table, and what conditions apply. The database gives you a result that looks like a new table, but the original table stays exactly as it is.\n\nSELECT has three friends: WHERE, ORDER BY and aggregates. WHERE filters the rows — only the rows that meet the condition come back. ORDER BY arranges the result — in rising or falling order. Aggregates — COUNT, SUM, AVG, MIN, MAX — work out one number for a whole table or group, like the average of a class.\n\nThe keywords of SQL — SELECT, FROM, WHERE, ORDER BY — can be written in big or small letters. But pick one style and keep it, so the query stays easy to read. A semicolon (;) marks the end of a query.`,
      `SELECT SQL का सबसे ज़्यादा इस्तेमाल होने वाला कमांड है। इसका काम है डेटा को पढ़ना — बिना उसे बदले। तुम लिखते हो कि कौन से कॉलम चाहिए, किस टेबल से, और कौन सी शर्तें हैं। डेटाबेस तुम्हें एक नई टेबल जैसा रिज़ल्ट देता है, लेकिन मूल टेबल वैसी की वैसी रहती है।\n\nSELECT के तीन दोस्त हैं: WHERE, ORDER BY और एग्रीगेट। WHERE पंक्तियों को छाँटता है — सिर्फ़ वही पंक्तियाँ आती हैं जो शर्त को पूरा करती हैं। ORDER BY रिज़ल्ट को सजाता है — बढ़ते या घटते क्रम में। एग्रीगेट — COUNT, SUM, AVG, MIN, MAX — पूरी टेबल या समूह का एक नंबर निकालते हैं, जैसे क्लास का औसत।\n\nSQL के कीवर्ड — SELECT, FROM, WHERE, ORDER BY — बड़े या छोटे, दोनों में लिख सकते हो। लेकिन एक स्टाइल पकड़ो और वही रखो, ताकि क्वेरी पढ़ने में आसान लगे। सेमीकोलन (;) क्वेरी का अंत बताता है।`,
    ),
    sec(
      H_REAL[0], H_REAL[1], H_REAL[2],
      `School ki marksheet dekho. Teacher ko toppers chahiye: "marks 80 se zyada wale dikhao" — ye WHERE hai. Phir "sabse zyada marks wala pehle dikhao" — ye ORDER BY marks DESC hai. Aur "class ka average kitna hai" — ye AVG hai. Teacher yehi teen kaam roz karti hai, bas kagaz par.\n\nKirana dukaan mein malik poochhta hai: "Aaj kitne customers aaye?" — COUNT. "Kul kitni bikri hui?" — SUM. "Sabse mehenga item kaun sa bika?" — MAX. Ye sab aggregates hain, jo ek poori list ka ek number bata dete hain.\n\nCricket mein commentator kehta hai: "Is series mein sabse zyada runs kisne banaye?" — MAX. "Team ka average score kya hai?" — AVG. "Kitne players ne 50 se zyada banaye?" — COUNT ke saath WHERE.`,
      `Look at a school marksheet. The teacher wants the toppers: "show those with marks above 80" — that is WHERE. Then "show the highest marks first" — that is ORDER BY marks DESC. And "what is the average of the class" — that is AVG. The teacher does these same three jobs every day, just on paper.\n\nIn a grocery shop, the owner asks: "How many customers came today?" — COUNT. "How much was sold in total?" — SUM. "Which was the costliest item sold?" — MAX. These are all aggregates, which tell one number for a whole list.\n\nIn cricket, the commentator asks: "Who scored the most runs in this series?" — MAX. "What is the average score of the team?" — AVG. "How many players scored more than 50?" — COUNT with WHERE.`,
      `स्कूल की मार्कशीट देखो। टीचर को टॉपर चाहिए: "नंबर 80 से ज़्यादा वाले दिखाओ" — यह WHERE है। फिर "सबसे ज़्यादा नंबर वाला पहले दिखाओ" — यह ORDER BY marks DESC है। और "क्लास का औसत कितना है" — यह AVG है। टीचर यही तीन काम रोज़ करती है, बस कागज़ पर।\n\nकिराना दुकान में मालिक पूछता है: "आज कितने ग्राहक आए?" — COUNT। "कुल कितनी बिक्री हुई?" — SUM। "सबसे महँगा आइटम कौन सा बिका?" — MAX। यह सब एग्रीगेट हैं, जो एक पूरी लिस्ट का एक नंबर बता देते हैं।\n\nक्रिकेट में कमेंटेटर कहता है: "इस सीरीज़ में सबसे ज़्यादा रन किसने बनाए?" — MAX। "टीम का औसत स्कोर क्या है?" — AVG। "कितने खिलाड़ियों ने 50 से ज़्यादा बनाए?" — COUNT के साथ WHERE।`,
    ),
    sec(
      H_STEP[0], H_STEP[1], H_STEP[2],
      `Pehla worked example: students table mein toppers dhoondho. Query: SELECT name, marks FROM students WHERE marks >= 80 ORDER BY marks DESC. Pehle WHERE rows ko chhant ta hai: Rahul 85, Priya 92, Sana 88 rehte hain, Amit 74 bahar. Phir ORDER BY marks DESC unhe sajata hai: Priya 92, Sana 88, Rahul 85. Result mein sirf 3 rows aati hain, aur wo bhi sirf 2 columns — name aur marks.\n\nDoosra worked example: class ka hisaab. SELECT COUNT(*) FROM students — 4 dega, kul students. SELECT AVG(marks) FROM students — (85+92+74+88)/4 = 84.75 dega. SELECT MAX(marks) FROM students — 92 dega. Aggregates ek row mein ek number dete hain, poori table ka nichod.\n\nTeesra worked example: naam se dhoondhna. SELECT name FROM students WHERE name = 'Priya' — text ko single quotes mein likho. Aur do shartein jodni hon to AND use karo: WHERE marks >= 80 AND marks < 90 — isse Rahul 85 aur Sana 88 milenge, Priya 92 nahi.`,
      `First worked example: find the toppers in the students table. The query: SELECT name, marks FROM students WHERE marks >= 80 ORDER BY marks DESC. First WHERE filters the rows: Rahul 85, Priya 92 and Sana 88 stay, Amit 74 goes out. Then ORDER BY marks DESC arranges them: Priya 92, Sana 88, Rahul 85. The result has only 3 rows, and only 2 columns — name and marks.\n\nSecond worked example: the summary of the class. SELECT COUNT(*) FROM students gives 4, the total number of students. SELECT AVG(marks) FROM students gives (85+92+74+88)/4 = 84.75. SELECT MAX(marks) FROM students gives 92. Aggregates give one number in one row — the essence of a whole table.\n\nThird worked example: finding by name. SELECT name FROM students WHERE name = 'Priya' — write text in single quotes. And to join two conditions, use AND: WHERE marks >= 80 AND marks < 90 — this gives Rahul 85 and Sana 88, but not Priya 92.`,
      `पहला हल किया हुआ उदाहरण: स्टूडेंट्स टेबल में टॉपर ढूँढो। क्वेरी: SELECT name, marks FROM students WHERE marks >= 80 ORDER BY marks DESC। पहले WHERE पंक्तियों को छाँटता है: राहुल 85, प्रिया 92, सना 88 रहते हैं, अमित 74 बाहर। फिर ORDER BY marks DESC उन्हें सजाता है: प्रिया 92, सना 88, राहुल 85। रिज़ल्ट में सिर्फ़ 3 पंक्तियाँ आती हैं, और वह भी सिर्फ़ 2 कॉलम — name और marks।\n\nदूसरा हल किया हुआ उदाहरण: क्लास का हिसाब। SELECT COUNT(*) FROM students — 4 देगा, कुल छात्र। SELECT AVG(marks) FROM students — (85+92+74+88)/4 = 84.75 देगा। SELECT MAX(marks) FROM students — 92 देगा। एग्रीगेट एक पंक्ति में एक नंबर देते हैं, पूरी टेबल का निचोड़।\n\nतीसरा हल किया हुआ उदाहरण: नाम से ढूँढना। SELECT name FROM students WHERE name = 'Priya' — टेक्स्ट को सिंगल कोट्स में लिखो। और दो शर्तें जोड़नी हों तो AND इस्तेमाल करो: WHERE marks >= 80 AND marks < 90 — इससे राहुल 85 और सना 88 मिलेंगे, प्रिया 92 नहीं।`,
      {
        title: t('Toppers nikalo — WHERE aur ORDER BY', 'Find the toppers — WHERE and ORDER BY', 'टॉपर निकालो — WHERE और ORDER BY'),
        language: 'sql',
        code: `SELECT name, marks FROM students
WHERE marks >= 80
ORDER BY marks DESC;`,
        output: 'name | marks\nPriya | 92\nSana | 88\nRahul | 85',
        note: t(
          'Query likhne ka order yaad rakho: SELECT, phir FROM, phir WHERE, phir ORDER BY. Ulta likhoge to error aayega.',
          'Remember the order of writing a query: SELECT, then FROM, then WHERE, then ORDER BY. Writing it the other way round gives an error.',
          'क्वेरी लिखने का क्रम याद रखो: SELECT, फिर FROM, फिर WHERE, फिर ORDER BY। उल्टा लिखोगे तो एरर आएगा।',
        ),
      },
    ),
    sec(
      H_MIST[0], H_MIST[1], H_MIST[2],
      `Sabse aam galti: text ko bina quotes ke likhna. WHERE name = Priya likhoge to database Priya ko column samjhega aur error dega — "no such column: Priya". Text hamesha single quotes mein: 'Priya'. Numbers ko quotes nahi chahiye: marks >= 80 sahi hai, marks >= '80' bhi chal jata hai lekin galat style hai.\n\nDoosri galti: = aur == ko confuse karna. SQL mein barabari ke liye ek = use hota hai, Python wala == nahi. WHERE marks == 85 likhoge to kuch databases mein error aayega, kuch mein chal jayega — lekin sahi SQL mein ek = hi likho.\n\nTeesri galti: WHERE aur ORDER BY ka order ulta kar dena. SELECT ... ORDER BY marks DESC WHERE marks >= 80 galat hai — WHERE hamesha ORDER BY se pehle aata hai. Database query ko ek fixed order mein padhta hai, aur wahi order tumhe bhi likhna hai.`,
      `The most common mistake is writing text without quotes. If you write WHERE name = Priya, the database reads Priya as a column and gives an error — "no such column: Priya". Text always goes in single quotes: 'Priya'. Numbers need no quotes: marks >= 80 is right, and marks >= '80' also runs but is the wrong style.\n\nThe second mistake is mixing up = and ==. In SQL, equality uses a single =, not the == of Python. If you write WHERE marks == 85, some databases give an error and some let it pass — but in correct SQL, write a single =.\n\nThe third mistake is writing WHERE and ORDER BY in the wrong order. SELECT ... ORDER BY marks DESC WHERE marks >= 80 is wrong — WHERE always comes before ORDER BY. The database reads a query in a fixed order, and you must write it in that same order.`,
      `सबसे आम गलती: टेक्स्ट को बिना कोट्स के लिखना। WHERE name = Priya लिखोगे तो डेटाबेस Priya को कॉलम समझेगा और एरर देगा — "no such column: Priya"। टेक्स्ट हमेशा सिंगल कोट्स में: 'Priya'। नंबरों को कोट्स नहीं चाहिए: marks >= 80 सही है, marks >= '80' भी चल जाता है लेकिन गलत स्टाइल है।\n\nदूसरी गलती: = और == को कन्फ़्यूज़ करना। SQL में बराबरी के लिए एक = इस्तेमाल होता है, पाइथन वाला == नहीं। WHERE marks == 85 लिखोगे तो कुछ डेटाबेस में एरर आएगा, कुछ में चल जाएगा — लेकिन सही SQL में एक = ही लिखो।\n\nतीसरी गलती: WHERE और ORDER BY का क्रम उल्टा कर देना। SELECT ... ORDER BY marks DESC WHERE marks >= 80 गलत है — WHERE हमेशा ORDER BY से पहले आता है। डेटाबेस क्वेरी को एक निश्चित क्रम में पढ़ता है, और वही क्रम तुम्हें भी लिखना है।`,
    ),
    sec(
      H_EDGE[0], H_EDGE[1], H_EDGE[2],
      `Agar koi row shart ko poora na kare, to result khali aayega — error nahi. SELECT ... WHERE marks > 100 likho to 0 rows milengi. Ye theek hai: khali result ka matlab hai "koi match nahi", galti nahi.\n\nNULL marks par dhyaan do: agar kisi student ke marks NULL hon (abhi diye hi nahi), to WHERE marks >= 80 use nahi chunega — kyunki NULL ki kisi se tulna nahi hoti, wo "pata nahi" hota hai. COUNT(*) use ginega, lekin COUNT(marks) nahi ginega, kyunki wo NULL ko chhod deta hai. AVG bhi NULL ko ignore karta hai.\n\nORDER BY mein barabar marks hon to unka order pakka nahi hota: Rahul aur Sana dono ke 85 hote to kaun pehle aayega, ye database par depend karta hai. Pakka order chahiye to do columns likho: ORDER BY marks DESC, name ASC.`,
      `If no row meets the condition, the result comes back empty — not an error. Writing SELECT ... WHERE marks > 100 gives 0 rows. That is fine: an empty result means "no match", not a mistake.\n\nWatch out for NULL marks: if the marks of a student are NULL (not given yet), WHERE marks >= 80 will not pick that student — because NULL cannot be compared with anything; it means "not known". COUNT(*) counts it, but COUNT(marks) does not, because it skips NULL. AVG also ignores NULL.\n\nIn ORDER BY, if two marks are equal, their order is not fixed: if Rahul and Sana both had 85, who comes first depends on the database. If you need a fixed order, write two columns: ORDER BY marks DESC, name ASC.`,
      `अगर कोई पंक्ति शर्त को पूरा न करे, तो रिज़ल्ट खाली आएगा — एरर नहीं। SELECT ... WHERE marks > 100 लिखो तो 0 पंक्तियाँ मिलेंगी। यह ठीक है: खाली रिज़ल्ट का मतलब है "कोई मैच नहीं", गलती नहीं।\n\nNULL नंबरों पर ध्यान दो: अगर किसी छात्र के नंबर NULL हों (अभी दिए ही नहीं), तो WHERE marks >= 80 उसे नहीं चुनेगा — क्योंकि NULL की किसी से तुलना नहीं होती, वह "पता नहीं" होता है। COUNT(*) उसे गिनेगा, लेकिन COUNT(marks) नहीं गिनेगा, क्योंकि वह NULL को छोड़ देता है। AVG भी NULL को नज़रअंदाज़ करता है।\n\nORDER BY में बराबर नंबर हों तो उनका क्रम पक्का नहीं होता: राहुल और सना दोनों के 85 होते तो कौन पहले आएगा, यह डेटाबेस पर निर्भर करता है। पक्का क्रम चाहिए तो दो कॉलम लिखो: ORDER BY marks DESC, name ASC।`,
    ),
    sec(
      H_WHATIF[0], H_WHATIF[1], H_WHATIF[2],
      `Agar >= ki jagah > likh do, to boundary wala row gayab ho jayega. WHERE marks > 80 mein Rahul 85 rehta hai, lekin agar kisi ke marks bilkul 80 hote to wo bahar ho jata. >= aur > ka farak ek number ka hota hai — aur exam mein aksar wahi ek number poochha jata hai.\n\nAgar ORDER BY hata do, to rows kisi bhi order mein aa sakti hain — aksar insert karne wale order mein, lekin iski guarantee nahi hai. Order chahiye to ORDER BY likhna hi padega, "waise bhi sorted aayega" maan kar mat chalo.`,
      `If you write > instead of >=, the row on the boundary disappears. In WHERE marks > 80, Rahul with 85 stays, but if someone had exactly 80, that person would go out. The difference between >= and > is one number — and in exams, that one number is often what is asked.\n\nIf you drop ORDER BY, the rows can come back in any order — often in the order they were inserted, but that is not guaranteed. If you need an order, you must write ORDER BY; never assume "it will come sorted anyway".`,
      `अगर >= की जगह > लिख दो, तो सीमा वाला रो गायब हो जाएगा। WHERE marks > 80 में राहुल 85 रहता है, लेकिन अगर किसी के नंबर बिल्कुल 80 होते तो वह बाहर हो जाता। >= और > का फ़र्क एक नंबर का होता है — और परीक्षा में अक्सर वही एक नंबर पूछा जाता है।\n\nअगर ORDER BY हटा दो, तो पंक्तियाँ किसी भी क्रम में आ सकती हैं — अक्सर डालने वाले क्रम में, लेकिन इसकी गारंटी नहीं है। क्रम चाहिए तो ORDER BY लिखना ही पड़ेगा, "वैसे भी सॉर्टेड आएगा" मानकर मत चलो।`,
    ),
    sec(
      H_SUM[0], H_SUM[1], H_SUM[2],
      `SELECT data ko padhta hai, badalta nahi. WHERE rows ko chhanta hai, ORDER BY sajata hai, aggregates — COUNT, AVG, MAX — poori table ka nichod nikalte hain. Query ka order yaad rakho: SELECT, FROM, WHERE, ORDER BY. Text single quotes mein, numbers bina quotes ke, aur barabari ke liye ek = use karo.`,
      `SELECT reads data, it never changes it. WHERE filters the rows, ORDER BY arranges them, and aggregates — COUNT, AVG, MAX — give the essence of a whole table. Remember the order of a query: SELECT, FROM, WHERE, ORDER BY. Text goes in single quotes, numbers need no quotes, and equality uses a single =.`,
      `SELECT डेटा को पढ़ता है, बदलता नहीं। WHERE पंक्तियों को छाँटता है, ORDER BY सजाता है, एग्रीगेट — COUNT, AVG, MAX — पूरी टेबल का निचोड़ निकालते हैं। क्वेरी का क्रम याद रखो: SELECT, FROM, WHERE, ORDER BY। टेक्स्ट सिंगल कोट्स में, नंबर बिना कोट्स के, और बराबरी के लिए एक = इस्तेमाल करो।`,
    ),
  ],
  diagram: {
    kind: 'flow',
    title: t('SELECT query ka order', 'The order of a SELECT query', 'SELECT क्वेरी का क्रम'),
    nodes: [
      { t: t('SELECT — kaun se columns', 'SELECT — which columns', 'SELECT — कौन से कॉलम'), s: t('name, marks', 'name, marks', 'name, marks') },
      { t: t('FROM — kis table se', 'FROM — from which table', 'FROM — किस टेबल से'), s: t('students', 'students', 'students') },
      { t: t('WHERE — kaun si rows', 'WHERE — which rows', 'WHERE — कौन सी पंक्तियाँ'), s: t('marks >= 80', 'marks >= 80', 'marks >= 80') },
      { t: t('ORDER BY — kis order mein', 'ORDER BY — in what order', 'ORDER BY — किस क्रम में'), s: t('marks DESC', 'marks DESC', 'marks DESC') },
    ],
  },
  codeExamples: [
    {
      title: t('Class ka hisaab — COUNT, AVG, MAX', 'The summary of the class — COUNT, AVG, MAX', 'क्लास का हिसाब — COUNT, AVG, MAX'),
      language: 'sql',
      code: `SELECT COUNT(*) AS total_students, AVG(marks) AS average_marks, MAX(marks) AS top_marks FROM students;`,
      output: 'total_students | average_marks | top_marks\n4 | 84.75 | 92',
      note: t(
        'AS se column ko apna naam do — average_marks padhne mein AVG(marks) se zyada clear hai. Aggregates hamesha ek row dete hain.',
        'Use AS to give a column your own name — average_marks is clearer to read than AVG(marks). Aggregates always give one row.',
        'AS से कॉलम को अपना नाम दो — average_marks पढ़ने में AVG(marks) से ज़्यादा साफ़ है। एग्रीगेट हमेशा एक पंक्ति देते हैं।',
      ),
    },
  ],
  mcqs: [
    {
      q: t(
        'SELECT name, marks FROM students WHERE marks >= 80 ORDER BY marks DESC; ka result kya hoga?',
        'What will SELECT name, marks FROM students WHERE marks >= 80 ORDER BY marks DESC; return?',
        'SELECT name, marks FROM students WHERE marks >= 80 ORDER BY marks DESC; का रिज़ल्ट क्या होगा?',
      ),
      opts: [
        t('Priya 92, Sana 88, Rahul 85', 'Priya 92, Sana 88, Rahul 85', 'Priya 92, Sana 88, Rahul 85'),
        t('Rahul 85, Sana 88, Priya 92', 'Rahul 85, Sana 88, Priya 92', 'Rahul 85, Sana 88, Priya 92'),
        t('Priya 92, Sana 88, Rahul 85, Amit 74', 'Priya 92, Sana 88, Rahul 85, Amit 74', 'Priya 92, Sana 88, Rahul 85, Amit 74'),
        t('Amit 74, Rahul 85, Sana 88, Priya 92', 'Amit 74, Rahul 85, Sana 88, Priya 92', 'Amit 74, Rahul 85, Sana 88, Priya 92'),
      ],
      ans: 0,
      expl: t(
        'WHERE marks >= 80 Amit (74) ko bahar karta hai. ORDER BY marks DESC sabse bada pehle rakhta hai: Priya 92, Sana 88, Rahul 85.',
        'WHERE marks >= 80 leaves out Amit (74). ORDER BY marks DESC puts the biggest first: Priya 92, Sana 88, Rahul 85.',
        'WHERE marks >= 80 अमित (74) को बाहर करता है। ORDER BY marks DESC सबसे बड़ा पहले रखता है: प्रिया 92, सना 88, राहुल 85।',
      ),
    },
    {
      q: t(
        'SELECT AVG(marks) FROM students; kya dega?',
        'What will SELECT AVG(marks) FROM students; give?',
        'SELECT AVG(marks) FROM students; क्या देगा?',
      ),
      opts: [
        t('92', '92', '92'),
        t('85', '85', '85'),
        t('84.75', '84.75', '84.75'),
        t('4', '4', '4'),
      ],
      ans: 2,
      expl: t(
        'Average = (85 + 92 + 74 + 88) / 4 = 339 / 4 = 84.75. MAX 92 hota, COUNT 4 hota.',
        'The average is (85 + 92 + 74 + 88) / 4 = 339 / 4 = 84.75. MAX would be 92, and COUNT would be 4.',
        'औसत = (85 + 92 + 74 + 88) / 4 = 339 / 4 = 84.75। MAX 92 होता, COUNT 4 होता।',
      ),
    },
    {
      q: t(
        'Neeche wali query mein bug kya hai?\nSELECT name FROM students WHERE name = Priya;',
        'What is the bug in this query?\nSELECT name FROM students WHERE name = Priya;',
        'नीचे वाली क्वेरी में बग क्या है?\nSELECT name FROM students WHERE name = Priya;',
      ),
      opts: [
        t('Priya ko single quotes mein likhna tha: \'Priya\'', 'Priya should be in single quotes: \'Priya\'', 'Priya को सिंगल कोट्स में लिखना था: \'Priya\''),
        t('SELECT ki jagah GET likhna tha', 'GET should be written instead of SELECT', 'SELECT की जगह GET लिखना था'),
        t('FROM ki zaroorat nahi hai', 'FROM is not needed', 'FROM की ज़रूरत नहीं है'),
        t('Koi bug nahi hai', 'There is no bug', 'कोई बग नहीं है'),
      ],
      ans: 0,
      expl: t(
        'Bina quotes ke Priya ko column samjha jayega aur error aayega. SQL mein text hamesha single quotes mein likhte hain.',
        'Without quotes, Priya is read as a column and gives an error. In SQL, text is always written in single quotes.',
        'बिना कोट्स के Priya को कॉलम समझा जाएगा और एरर आएगा। SQL में टेक्स्ट हमेशा सिंगल कोट्स में लिखते हैं।',
      ),
    },
    {
      q: t(
        'SELECT ... WHERE marks > 100 likhne par kya hoga?',
        'What happens when you write SELECT ... WHERE marks > 100?',
        'SELECT ... WHERE marks > 100 लिखने पर क्या होगा?',
      ),
      opts: [
        t('Error aayega', 'It gives an error', 'एरर आएगा'),
        t('Khali result aayega — 0 rows', 'An empty result comes back — 0 rows', 'खाली रिज़ल्ट आएगा — 0 पंक्तियाँ'),
        t('Saari rows aayengi', 'All the rows come back', 'सारी पंक्तियाँ आएँगी'),
        t('Sirf Priya ki row aayegi', 'Only the row of Priya comes back', 'सिर्फ़ प्रिया की पंक्ति आएगी'),
      ],
      ans: 1,
      expl: t(
        'Koi student 100 se zyada marks nahi laaya, isliye koi row shart poori nahi karti. Khali result error nahi hota — iska matlab hai "koi match nahi".',
        'No student scored above 100, so no row meets the condition. An empty result is not an error — it means "no match".',
        'कोई छात्र 100 से ज़्यादा नंबर नहीं लाया, इसलिए कोई पंक्ति शर्त पूरी नहीं करती। खाली रिज़ल्ट एरर नहीं होता — इसका मतलब है "कोई मैच नहीं"।',
      ),
    },
  ],
  practice: {
    title: t('85 se zyada wale, badhte order mein', 'Those above 85, in rising order', '85 से ज़्यादा वाले, बढ़ते क्रम में'),
    task: t(
      'Ek query likho jo un students ke naam aur marks dikhaye jinke marks 85 se zyada hain, marks ke badhte order (ASC) mein. Done tab maanenge jab output mein Sana 88 phir Priya 92 dikhe — is order mein. Hint: WHERE marks > 85 aur ORDER BY marks ASC.',
      'Write a query that shows the names and marks of the students whose marks are above 85, in rising order of marks (ASC). You are done when the output shows Sana 88 and then Priya 92 — in that order. Hint: WHERE marks > 85 and ORDER BY marks ASC.',
      'एक क्वेरी लिखो जो उन छात्रों के नाम और नंबर दिखाए जिनके नंबर 85 से ज़्यादा हैं, नंबरों के बढ़ते क्रम (ASC) में। तब पूरा मानेंगे जब आउटपुट में सना 88 फिर प्रिया 92 दिखे — इस क्रम में। संकेत: WHERE marks > 85 और ORDER BY marks ASC।',
    ),
    language: 'sql',
    starter: `SELECT name, marks FROM students
WHERE marks > 85
ORDER BY marks ASC;`,
    expected: 'name | marks\nSana | 88\nPriya | 92',
  },
  readMinutes: 9,
};

const dbmsJoins: Article = {
  id: 'dbms-joins',
  subjectId: 'dbms',
  title: t(
    'SQL joins — do tables ko ek saath padhna',
    'SQL joins — reading two tables together',
    'SQL जॉइन — दो टेबल को एक साथ पढ़ना',
  ),
  summary: t(
    'Join do tables ki rows ko matching key par jodta hai. INNER JOIN sirf wahi rows deta hai jinka match dono taraf ho, LEFT JOIN left table ki saari rows deta hai — match na ho to right taraf NULL bhar deta hai.',
    'A join connects the rows of two tables on a matching key. INNER JOIN gives only the rows that match on both sides, while LEFT JOIN gives all the rows of the left table — filling NULL on the right when there is no match.',
    'जॉइन दो टेबल की पंक्तियों को मैचिंग की पर जोड़ता है। INNER JOIN सिर्फ़ वही पंक्तियाँ देता है जिनका मैच दोनों तरफ़ हो, LEFT JOIN लेफ़्ट टेबल की सारी पंक्तियाँ देता है — मैच न हो तो दाईं तरफ़ NULL भर देता है।',
  ),
  sections: [
    sec(
      H_WHAT[0], H_WHAT[1], H_WHAT[2],
      `Join ka matlab hai do tables ko ek saath padhna. Ek table mein student ka naam hai, doosri mein uske subject ke marks. Alag-alag padhoge to pata nahi chalega ki kis ke marks kitne hain. Join dono ko student_id jaisi common key par jod kar ek result bana deta hai.\n\nINNER JOIN sirf wahi rows deta hai jinka match dono tables mein ho. Agar kisi student ke koi marks nahi hain, to wo student INNER JOIN ke result mein dikhega hi nahi. LEFT JOIN left table (pehle likhi table) ki saari rows deta hai — match mile to right table ka data bhi, na mile to right taraf NULL.\n\nJoin likhne ka tareeka hai: SELECT ... FROM students LEFT JOIN scores ON students.id = scores.student_id. ON batata hai ki rows kaise match karni hain. ON bhool gaye to database har row ko har row se jod dega — use cartesian product kehte hain, aur wo aksar galti hoti hai.`,
      `A join means reading two tables together. One table holds the name of the student, the other holds the marks in a subject. Read separately, you cannot tell whose marks are whose. A join connects both on a common key like student_id and makes one result.\n\nINNER JOIN gives only the rows that match in both tables. If a student has no marks at all, that student does not appear in the result of an INNER JOIN. LEFT JOIN gives all the rows of the left table (the table written first) — with data from the right table when there is a match, and NULL on the right when there is none.\n\nA join is written like this: SELECT ... FROM students LEFT JOIN scores ON students.id = scores.student_id. ON tells the database how the rows must match. If you forget ON, the database joins every row with every row — that is called a cartesian product, and it is usually a mistake.`,
      `जॉइन का मतलब है दो टेबल को एक साथ पढ़ना। एक टेबल में छात्र का नाम है, दूसरी में उसके विषय के नंबर। अलग-अलग पढ़ोगे तो पता नहीं चलेगा कि किसके नंबर कितने हैं। जॉइन दोनों को student_id जैसी कॉमन की पर जोड़कर एक रिज़ल्ट बना देता है।\n\nINNER JOIN सिर्फ़ वही पंक्तियाँ देता है जिनका मैच दोनों टेबल में हो। अगर किसी छात्र के कोई नंबर नहीं हैं, तो वह छात्र INNER JOIN के रिज़ल्ट में दिखेगा ही नहीं। LEFT JOIN लेफ़्ट टेबल (पहले लिखी टेबल) की सारी पंक्तियाँ देता है — मैच मिले तो राइट टेबल का डेटा भी, न मिले तो दाईं तरफ़ NULL।\n\nजॉइन लिखने का तरीका है: SELECT ... FROM students LEFT JOIN scores ON students.id = scores.student_id। ON बताता है कि पंक्तियाँ कैसे मैच करनी हैं। ON भूल गए तो डेटाबेस हर पंक्ति को हर पंक्ति से जोड़ देगा — उसे कार्टेशियन प्रोडक्ट कहते हैं, और वह अक्सर गलती होती है।`,
    ),
    sec(
      H_REAL[0], H_REAL[1], H_REAL[2],
      `Railway ticket dekho: ek list mein passengers ke naam hain, doosri mein unki seat numbers. Alag-alag dekho to pata nahi chalega ki Rahul kis seat par hai. PNR dono list mein common hai — usi par join karo to poori ticket ban jaati hai: naam + seat + train.\n\nSchool mein ek register mein student ka naam aur roll number hai, doosre mein roll number aur marks. Result banate waqt teacher dono ko roll number par jodti hai — yehi join hai, bas wo kagaz par karti hai.\n\nOnline shopping mein ek table mein order hai, doosri mein customer ka address. Order bhejte waqt dono ko order_id par jodna padta hai — nahi to parcel galat pata par chala jayega.`,
      `Look at a railway ticket: one list holds the names of the passengers, another holds their seat numbers. Seen separately, you cannot tell which seat Rahul has. The PNR is common to both lists — join on it, and the full ticket is made: name + seat + train.\n\nIn a school, one register holds the name and roll number of a student, and another holds the roll number and marks. While making the result, the teacher joins both on the roll number — that is a join, just done on paper.\n\nIn online shopping, one table holds the order and another holds the address of the customer. While sending the order, both must be joined on the order_id — otherwise the parcel goes to the wrong address.`,
      `रेलवे टिकट देखो: एक लिस्ट में यात्रियों के नाम हैं, दूसरी में उनकी सीट नंबर। अलग-अलग देखो तो पता नहीं चलेगा कि राहुल किस सीट पर है। PNR दोनों लिस्ट में कॉमन है — उसी पर जॉइन करो तो पूरी टिकट बन जाती है: नाम + सीट + ट्रेन।\n\nस्कूल में एक रजिस्टर में छात्र का नाम और रोल नंबर है, दूसरे में रोल नंबर और नंबर। रिज़ल्ट बनाते समय टीचर दोनों को रोल नंबर पर जोड़ती है — यही जॉइन है, बस वह कागज़ पर करती है।\n\nऑनलाइन शॉपिंग में एक टेबल में ऑर्डर है, दूसरी में ग्राहक का पता। ऑर्डर भेजते समय दोनों को order_id पर जोड़ना पड़ता है — नहीं तो पार्सल गलत पते पर चला जाएगा।`,
    ),
    sec(
      H_STEP[0], H_STEP[1], H_STEP[2],
      `Pehla worked example: students table (Rahul 85, Priya 92, Amit 74, Sana 88) aur ek nayi table enrolments — kis student ne kaun sa course liya. Enrolments mein rows hain: (1, 1, 'Python') — Rahul ne Python liya; (2, 2, 'Python') — Priya ne Python liya; (3, 2, 'SQL') — Priya ne SQL bhi liya. Amit aur Sana ne kuch nahi liya.\n\nINNER JOIN chalao: SELECT students.name, enrolments.course FROM students INNER JOIN enrolments ON students.id = enrolments.student_id. Result mein 3 rows aayengi: Rahul-Python, Priya-Python, Priya-SQL. Amit aur Sana nahi dikhenge, kyunki unka enrolments mein koi match nahi hai.\n\nAb LEFT JOIN chalao: SELECT students.name, enrolments.course FROM students LEFT JOIN enrolments ON students.id = enrolments.student_id. Result mein 5 rows aayengi: Rahul-Python, Priya-Python, Priya-SQL, Amit-NULL, Sana-NULL. Amit aur Sana dikhte hain, lekin course ki jagah NULL hai — matlab "koi course nahi". Yehi farak hai: INNER JOIN match wale hi deta hai, LEFT JOIN sab deta hai.`,
      `First worked example: the students table (Rahul 85, Priya 92, Amit 74, Sana 88) and a new table, enrolments — which student took which course. Enrolments has these rows: (1, 1, 'Python') — Rahul took Python; (2, 2, 'Python') — Priya took Python; (3, 2, 'SQL') — Priya took SQL too. Amit and Sana took nothing.\n\nRun an INNER JOIN: SELECT students.name, enrolments.course FROM students INNER JOIN enrolments ON students.id = enrolments.student_id. The result has 3 rows: Rahul-Python, Priya-Python, Priya-SQL. Amit and Sana do not appear, because they have no match in enrolments.\n\nNow run a LEFT JOIN: SELECT students.name, enrolments.course FROM students LEFT JOIN enrolments ON students.id = enrolments.student_id. The result has 5 rows: Rahul-Python, Priya-Python, Priya-SQL, Amit-NULL, Sana-NULL. Amit and Sana appear, but the course is NULL — meaning "no course". That is the difference: INNER JOIN gives only matches, LEFT JOIN gives everything.`,
      `पहला हल किया हुआ उदाहरण: स्टूडेंट्स टेबल (राहुल 85, प्रिया 92, अमित 74, सना 88) और एक नई टेबल enrolments — किस छात्र ने कौन सा कोर्स लिया। enrolments में पंक्तियाँ हैं: (1, 1, 'Python') — राहुल ने Python लिया; (2, 2, 'Python') — प्रिया ने Python लिया; (3, 2, 'SQL') — प्रिया ने SQL भी लिया। अमित और सना ने कुछ नहीं लिया।\n\nINNER JOIN चलाओ: SELECT students.name, enrolments.course FROM students INNER JOIN enrolments ON students.id = enrolments.student_id। रिज़ल्ट में 3 पंक्तियाँ आएँगी: राहुल-Python, प्रिया-Python, प्रिया-SQL। अमित और सना नहीं दिखेंगे, क्योंकि उनका enrolments में कोई मैच नहीं है।\n\nअब LEFT JOIN चलाओ: SELECT students.name, enrolments.course FROM students LEFT JOIN enrolments ON students.id = enrolments.student_id। रिज़ल्ट में 5 पंक्तियाँ आएँगी: राहुल-Python, प्रिया-Python, प्रिया-SQL, अमित-NULL, सना-NULL। अमित और सना दिखते हैं, लेकिन कोर्स की जगह NULL है — मतलब "कोई कोर्स नहीं"। यही फ़र्क है: INNER JOIN मैच वाले ही देता है, LEFT JOIN सब देता है।`,
      {
        title: t('INNER JOIN vs LEFT JOIN — enrolments ke saath', 'INNER JOIN vs LEFT JOIN — with enrolments', 'INNER JOIN बनाम LEFT JOIN — enrolments के साथ'),
        language: 'sql',
        code: `CREATE TABLE enrolments (
  enrol_id INTEGER PRIMARY KEY,
  student_id INTEGER,
  course TEXT
);
INSERT INTO enrolments VALUES (1, 1, 'Python');
INSERT INTO enrolments VALUES (2, 2, 'Python');
INSERT INTO enrolments VALUES (3, 2, 'SQL');
SELECT students.name, enrolments.course
FROM students
LEFT JOIN enrolments ON students.id = enrolments.student_id;`,
        output: 'name | course\nRahul | Python\nPriya | Python\nPriya | SQL\nAmit | \nSana | ',
        note: t(
          'Amit aur Sana ki course wali jagah khali dikhti hai — wo NULL hai. INNER JOIN likh kar dekho, to sirf 3 rows aayengi, Amit aur Sana gayab ho jayenge.',
          'The course place for Amit and Sana looks empty — that is NULL. Try writing INNER JOIN, and only 3 rows come back, with Amit and Sana gone.',
          'अमित और सना की कोर्स वाली जगह खाली दिखती है — वह NULL है। INNER JOIN लिखकर देखो, तो सिर्फ़ 3 पंक्तियाँ आएँगी, अमित और सना गायब हो जाएँगे।',
        ),
      },
    ),
    sec(
      H_MIST[0], H_MIST[1], H_MIST[2],
      `Sabse badi galti: ON likhna bhool jaana. SELECT ... FROM students, enrolments likhoge to database har student ko har enrolment se jod dega: 4 students x 3 enrolments = 12 rows, jinme se zyada tar bekaar hain. Ye cartesian product hai. Har join mein ON zaroor likho, aur check karo ki ON mein sahi columns hain.\n\nDoosri galti: galat column par join karna. students.id = enrolments.enrol_id likh diya to match galat hoga — enrol_id aur student_id alag cheezein hain. Join hamesha us column par karo jo dono tables mein wahi matlab rakhta hai: id aur student_id.\n\nTeesri galti: ye sochna ki LEFT JOIN mein right table ki saari rows aayengi. Nahi — LEFT JOIN left table ki saari rows deta hai. Agar tumhe enrolments ki saari rows chahiye, to enrolments ko left mein likho, ya RIGHT JOIN use karo. Kaun si table left mein hai, ye matter karta hai.`,
      `The biggest mistake is forgetting to write ON. If you write SELECT ... FROM students, enrolments, the database joins every student with every enrolment: 4 students times 3 enrolments = 12 rows, most of them useless. That is a cartesian product. Always write ON in every join, and check that ON holds the right columns.\n\nThe second mistake is joining on the wrong column. Writing students.id = enrolments.enrol_id gives a wrong match — enrol_id and student_id are different things. Always join on the column that means the same thing in both tables: id and student_id.\n\nThe third mistake is thinking that a LEFT JOIN gives all the rows of the right table. No — a LEFT JOIN gives all the rows of the left table. If you need all the rows of enrolments, write enrolments on the left, or use a RIGHT JOIN. Which table sits on the left matters.`,
      `सबसे बड़ी गलती: ON लिखना भूल जाना। SELECT ... FROM students, enrolments लिखोगे तो डेटाबेस हर छात्र को हर enrolment से जोड़ देगा: 4 छात्र x 3 enrolment = 12 पंक्तियाँ, जिनमें से ज़्यादातर बेकार हैं। यह कार्टेशियन प्रोडक्ट है। हर जॉइन में ON ज़रूर लिखो, और जाँचो कि ON में सही कॉलम हैं।\n\nदूसरी गलती: गलत कॉलम पर जॉइन करना। students.id = enrolments.enrol_id लिख दिया तो मैच गलत होगा — enrol_id और student_id अलग चीज़ें हैं। जॉइन हमेशा उस कॉलम पर करो जो दोनों टेबल में वही मतलब रखता है: id और student_id।\n\nतीसरी गलती: यह सोचना कि LEFT JOIN में राइट टेबल की सारी पंक्तियाँ आएँगी। नहीं — LEFT JOIN लेफ़्ट टेबल की सारी पंक्तियाँ देता है। अगर तुम्हें enrolments की सारी पंक्तियाँ चाहिए, तो enrolments को लेफ़्ट में लिखो, या RIGHT JOIN इस्तेमाल करो। कौन सी टेबल लेफ़्ट में है, यह मायने रखता है।`,
    ),
    sec(
      H_EDGE[0], H_EDGE[1], H_EDGE[2],
      `Agar dono tables khali hon, to join ka result bhi khali hoga — error nahi. Agar left table mein 1 row ho aur right mein uska koi match na ho, to LEFT JOIN 1 row dega (right taraf NULL), lekin INNER JOIN 0 rows dega.\n\nDuplicate keys par dhyaan do: agar enrolments mein ek student_id do baar ho (Priya ke 2 courses), to join mein us student ki row do baar aayegi — ek har match ke liye. Ye galti nahi hai, join ka rule hai: har match ke liye ek row.\n\nNULL key kabhi match nahi karti: agar enrolments mein student_id NULL ho, to wo kisi bhi student se nahi judega — na INNER mein, na LEFT mein right taraf se. NULL ka matlab hai "pata nahi", aur "pata nahi" kisi se barabar nahi hota.`,
      `If both tables are empty, the result of the join is empty too — not an error. If the left table has 1 row and the right table has no match for it, a LEFT JOIN gives 1 row (NULL on the right), but an INNER JOIN gives 0 rows.\n\nWatch out for duplicate keys: if a student_id appears twice in enrolments (Priya has 2 courses), the join shows that student twice — once for every match. That is not a mistake, it is the rule of a join: one row for every match.\n\nA NULL key never matches: if student_id in enrolments is NULL, it joins with no student at all — neither in an INNER join nor on the right side of a LEFT join. NULL means "not known", and "not known" is not equal to anything.`,
      `अगर दोनों टेबल खाली हों, तो जॉइन का रिज़ल्ट भी खाली होगा — एरर नहीं। अगर लेफ़्ट टेबल में 1 पंक्ति हो और राइट में उसका कोई मैच न हो, तो LEFT JOIN 1 पंक्ति देगा (दाईं तरफ़ NULL), लेकिन INNER JOIN 0 पंक्तियाँ देगा।\n\nडुप्लीकेट की पर ध्यान दो: अगर enrolments में एक student_id दो बार हो (प्रिया के 2 कोर्स), तो जॉइन में उस छात्र की पंक्ति दो बार आएगी — एक हर मैच के लिए। यह गलती नहीं है, जॉइन का नियम है: हर मैच के लिए एक पंक्ति।\n\nNULL की कभी मैच नहीं करती: अगर enrolments में student_id NULL हो, तो वह किसी भी छात्र से नहीं जुड़ेगा — न INNER में, न LEFT में दाईं तरफ़ से। NULL का मतलब है "पता नहीं", और "पता नहीं" किसी से बराबर नहीं होता।`,
    ),
    sec(
      H_WHATIF[0], H_WHATIF[1], H_WHATIF[2],
      `Agar INNER JOIN ki jagah LEFT JOIN likh do, to result mein 2 rows badh jayengi — Amit aur Sana aa jayenge. Agar tumhe sirf course lene wale students chahiye the, to ye 2 extra rows galat hain. Aur agar LEFT JOIN ki jagah INNER likh do, to 2 rows gayab ho jayengi — aur agar tumhe saare students ki list chahiye thi, to wo adhuri hogi.\n\nJoin ka order badalne se bhi farak padta hai: students LEFT JOIN enrolments aur enrolments LEFT JOIN students alag results dete hain. Pehle hamesha ye likho ki "kis ki saari rows chahiye" — wahi table left mein aayegi.`,
      `If you write LEFT JOIN instead of INNER JOIN, the result gains 2 rows — Amit and Sana appear. If you only wanted the students who took a course, those 2 extra rows are wrong. And if you write INNER instead of LEFT JOIN, 2 rows vanish — and if you wanted the list of all the students, it is now incomplete.\n\nChanging the order of the join also matters: students LEFT JOIN enrolments and enrolments LEFT JOIN students give different results. First write down "whose rows do I need in full" — that table goes on the left.`,
      `अगर INNER JOIN की जगह LEFT JOIN लिख दो, तो रिज़ल्ट में 2 पंक्तियाँ बढ़ जाएँगी — अमित और सना आ जाएँगे। अगर तुम्हें सिर्फ़ कोर्स लेने वाले छात्र चाहिए थे, तो ये 2 अतिरिक्त पंक्तियाँ गलत हैं। और अगर LEFT JOIN की जगह INNER लिख दो, तो 2 पंक्तियाँ गायब हो जाएँगी — और अगर तुम्हें सारे छात्रों की लिस्ट चाहिए थी, तो वह अधूरी होगी।\n\nजॉइन का क्रम बदलने से भी फ़र्क पड़ता है: students LEFT JOIN enrolments और enrolments LEFT JOIN students अलग रिज़ल्ट देते हैं। पहले हमेशा यह लिखो कि "किसकी सारी पंक्तियाँ चाहिए" — वही टेबल लेफ़्ट में आएगी।`,
    ),
    sec(
      H_SUM[0], H_SUM[1], H_SUM[2],
      `Join do tables ko common key par jodta hai. INNER JOIN sirf match wali rows deta hai, LEFT JOIN left table ki saari rows deta hai aur match na hone par NULL bharta hai. ON likhna kabhi mat bhoolo — bina ON ke cartesian product ban jata hai. Join karne se pehle ye tay karo: kis table ki saari rows chahiye, aur match kis column par hoga.`,
      `A join connects two tables on a common key. INNER JOIN gives only the matching rows, while LEFT JOIN gives all the rows of the left table and fills NULL where there is no match. Never forget to write ON — without ON, a cartesian product is made. Before joining, decide: which table do I need in full, and which column is the match.`,
      `जॉइन दो टेबल को कॉमन की पर जोड़ता है। INNER JOIN सिर्फ़ मैच वाली पंक्तियाँ देता है, LEFT JOIN लेफ़्ट टेबल की सारी पंक्तियाँ देता है और मैच न होने पर NULL भरता है। ON लिखना कभी मत भूलो — बिना ON के कार्टेशियन प्रोडक्ट बन जाता है। जॉइन करने से पहले यह तय करो: किस टेबल की सारी पंक्तियाँ चाहिए, और मैच किस कॉलम पर होगा।`,
    ),
  ],
  diagram: {
    kind: 'boxes',
    title: t('INNER JOIN vs LEFT JOIN', 'INNER JOIN vs LEFT JOIN', 'INNER JOIN बनाम LEFT JOIN'),
    nodes: [
      { t: t('students — 4 rows', 'students — 4 rows', 'students — 4 पंक्तियाँ'), s: t('Rahul, Priya, Amit, Sana', 'Rahul, Priya, Amit, Sana', 'राहुल, प्रिया, अमित, सना') },
      { t: t('enrolments — 3 rows', 'enrolments — 3 rows', 'enrolments — 3 पंक्तियाँ'), s: t('Rahul x1, Priya x2', 'Rahul x1, Priya x2', 'राहुल x1, प्रिया x2') },
      { t: t('INNER JOIN — 3 rows', 'INNER JOIN — 3 rows', 'INNER JOIN — 3 पंक्तियाँ'), s: t('sirf match wale', 'only the matches', 'सिर्फ़ मैच वाले') },
      { t: t('LEFT JOIN — 5 rows', 'LEFT JOIN — 5 rows', 'LEFT JOIN — 5 पंक्तियाँ'), s: t('Amit, Sana NULL ke saath', 'Amit, Sana with NULL', 'अमित, सना NULL के साथ') },
    ],
  },
  codeExamples: [
    {
      title: t('INNER JOIN — sirf course lene wale', 'INNER JOIN — only those who took a course', 'INNER JOIN — सिर्फ़ कोर्स लेने वाले'),
      language: 'sql',
      code: `CREATE TABLE enrolments (
  enrol_id INTEGER PRIMARY KEY,
  student_id INTEGER,
  course TEXT
);
INSERT INTO enrolments VALUES (1, 1, 'Python');
INSERT INTO enrolments VALUES (2, 2, 'Python');
INSERT INTO enrolments VALUES (3, 2, 'SQL');
SELECT students.name, enrolments.course
FROM students
INNER JOIN enrolments ON students.id = enrolments.student_id;`,
      output: 'name | course\nRahul | Python\nPriya | Python\nPriya | SQL',
      note: t(
        'Amit aur Sana gayab hain — unka enrolments mein koi match nahi hai. LEFT JOIN wala example upar dekho, usme wo NULL ke saath dikhte hain.',
        'Amit and Sana are gone — they have no match in enrolments. Look at the LEFT JOIN example above, where they appear with NULL.',
        'अमित और सना गायब हैं — उनका enrolments में कोई मैच नहीं है। LEFT JOIN वाला उदाहरण ऊपर देखो, उसमें वह NULL के साथ दिखते हैं।',
      ),
    },
  ],
  mcqs: [
    {
      q: t(
        'Students (4 rows) aur enrolments (3 rows) par LEFT JOIN chalaya. Kitni rows aayengi?',
        'A LEFT JOIN is run on students (4 rows) and enrolments (3 rows). How many rows will come back?',
        'Students (4 पंक्तियाँ) और enrolments (3 पंक्तियाँ) पर LEFT JOIN चलाया। कितनी पंक्तियाँ आएँगी?',
      ),
      opts: [
        t('3', '3', '3'),
        t('4', '4', '4'),
        t('5', '5', '5'),
        t('12', '12', '12'),
      ],
      ans: 2,
      expl: t(
        'Rahul ki 1 row, Priya ki 2 rows (2 courses), Amit aur Sana ki 1-1 row NULL ke saath — kul 5 rows.',
        'Rahul gives 1 row, Priya gives 2 rows (2 courses), Amit and Sana give 1 row each with NULL — 5 rows in total.',
        'राहुल की 1 पंक्ति, प्रिया की 2 पंक्तियाँ (2 कोर्स), अमित और सना की 1-1 पंक्ति NULL के साथ — कुल 5 पंक्तियाँ।',
      ),
    },
    {
      q: t(
        'INNER JOIN mein Amit kyun nahi dikhta?',
        'Why does Amit not appear in the INNER JOIN?',
        'INNER JOIN में अमित क्यों नहीं दिखता?',
      ),
      opts: [
        t('Kyunki uske marks kam hain', 'Because his marks are low', 'क्योंकि उसके नंबर कम हैं'),
        t('Kyunki enrolments mein uska koi match nahi hai', 'Because he has no match in enrolments', 'क्योंकि enrolments में उसका कोई मैच नहीं है'),
        t('Kyunki uska naam A se shuru hota hai', 'Because his name starts with A', 'क्योंकि उसका नाम A से शुरू होता है'),
        t('Ye galti hai, use dikhna chahiye tha', 'This is a mistake, he should have appeared', 'यह गलती है, उसे दिखना चाहिए था'),
      ],
      ans: 1,
      expl: t(
        'INNER JOIN sirf wahi rows deta hai jinka match dono tables mein ho. Amit ne koi course nahi liya, isliye uska koi match nahi hai.',
        'INNER JOIN gives only the rows that match in both tables. Amit took no course, so he has no match.',
        'INNER JOIN सिर्फ़ वही पंक्तियाँ देता है जिनका मैच दोनों टेबल में हो। अमित ने कोई कोर्स नहीं लिया, इसलिए उसका कोई मैच नहीं है।',
      ),
    },
    {
      q: t(
        'Neeche wali query mein bug kya hai?\nSELECT name, course FROM students, enrolments;',
        'What is the bug in this query?\nSELECT name, course FROM students, enrolments;',
        'नीचे वाली क्वेरी में बग क्या है?\nSELECT name, course FROM students, enrolments;',
      ),
      opts: [
        t('ON aur join condition missing hai — cartesian product banega', 'The ON and the join condition are missing — a cartesian product is made', 'ON और जॉइन कंडीशन गायब है — कार्टेशियन प्रोडक्ट बनेगा'),
        t('SELECT galat hai', 'SELECT is wrong', 'SELECT गलत है'),
        t('Table ke naam galat hain', 'The table names are wrong', 'टेबल के नाम गलत हैं'),
        t('Koi bug nahi hai', 'There is no bug', 'कोई बग नहीं है'),
      ],
      ans: 0,
      expl: t(
        'Bina ON ke har student har enrolment se jud jata hai: 4 x 3 = 12 rows, jinme se zyada tar bekaar hain. Hamesha JOIN ... ON likho.',
        'Without ON, every student joins with every enrolment: 4 times 3 = 12 rows, most of them useless. Always write JOIN ... ON.',
        'बिना ON के हर छात्र हर enrolment से जुड़ जाता है: 4 x 3 = 12 पंक्तियाँ, जिनमें से ज़्यादातर बेकार हैं। हमेशा JOIN ... ON लिखो।',
      ),
    },
    {
      q: t(
        'Tumhe saare students ki list chahiye, course ho ya na ho. Kaun sa join use karoge?',
        'You need the list of all the students, whether they have a course or not. Which join will you use?',
        'तुम्हें सारे छात्रों की लिस्ट चाहिए, कोर्स हो या न हो। कौन सा जॉइन इस्तेमाल करोगे?',
      ),
      opts: [
        t('INNER JOIN', 'INNER JOIN', 'INNER JOIN'),
        t('LEFT JOIN — students left mein', 'LEFT JOIN — with students on the left', 'LEFT JOIN — students लेफ़्ट में'),
        t('CROSS JOIN', 'CROSS JOIN', 'CROSS JOIN'),
        t('Koi join nahi, sirf SELECT', 'No join, just SELECT', 'कोई जॉइन नहीं, सिर्फ़ SELECT'),
      ],
      ans: 1,
      expl: t(
        'LEFT JOIN left table ki saari rows deta hai, match na ho to NULL bhar deta hai. Students ko left mein likho, taaki Amit aur Sana bhi dikhein.',
        'A LEFT JOIN gives all the rows of the left table, filling NULL where there is no match. Put students on the left so that Amit and Sana appear too.',
        'LEFT JOIN लेफ़्ट टेबल की सारी पंक्तियाँ देता है, मैच न हो तो NULL भर देता है। Students को लेफ़्ट में लिखो, ताकि अमित और सना भी दिखें।',
      ),
    },
  ],
  practice: {
    title: t('Kaun se student ne kaun sa course liya — INNER JOIN', 'Which student took which course — INNER JOIN', 'किस छात्र ने कौन सा कोर्स लिया — INNER JOIN'),
    task: t(
      'Enrolments table banao (enrol_id INTEGER PRIMARY KEY, student_id INTEGER, course TEXT) aur 3 rows daalo: (1, 1, \'Python\'), (2, 2, \'Python\'), (3, 2, \'SQL\'). Phir INNER JOIN se students ke naam aur course dikhao. Done tab maanenge jab output mein 3 rows dikhein: Rahul-Python, Priya-Python, Priya-SQL. Hint: ON students.id = enrolments.student_id.',
      'Make the enrolments table (enrol_id INTEGER PRIMARY KEY, student_id INTEGER, course TEXT) and add 3 rows: (1, 1, \'Python\'), (2, 2, \'Python\'), (3, 2, \'SQL\'). Then show the names of the students and their courses with an INNER JOIN. You are done when the output shows 3 rows: Rahul-Python, Priya-Python, Priya-SQL. Hint: ON students.id = enrolments.student_id.',
      'Enrolments टेबल बनाओ (enrol_id INTEGER PRIMARY KEY, student_id INTEGER, course TEXT) और 3 पंक्तियाँ डालो: (1, 1, \'Python\'), (2, 2, \'Python\'), (3, 2, \'SQL\')। फिर INNER JOIN से छात्रों के नाम और कोर्स दिखाओ। तब पूरा मानेंगे जब आउटपुट में 3 पंक्तियाँ दिखें: राहुल-Python, प्रिया-Python, प्रिया-SQL। संकेत: ON students.id = enrolments.student_id।',
    ),
    language: 'sql',
    starter: `CREATE TABLE enrolments (
  enrol_id INTEGER PRIMARY KEY,
  student_id INTEGER,
  course TEXT
);
INSERT INTO enrolments VALUES (1, 1, 'Python');
INSERT INTO enrolments VALUES (2, 2, 'Python');
INSERT INTO enrolments VALUES (3, 2, 'SQL');
SELECT students.name, enrolments.course
FROM students
INNER JOIN enrolments ON students.id = enrolments.student_id;`,
    expected: 'name | course\nRahul | Python\nPriya | Python\nPriya | SQL',
  },
  readMinutes: 10,
};

const dbmsNormalization: Article = {
  id: 'dbms-normalization',
  subjectId: 'dbms',
  title: t(
    'Normalization — 1NF se 3NF tak',
    'Normalization — from 1NF to 3NF',
    'नॉर्मलाइज़ेशन — 1NF से 3NF तक',
  ),
  summary: t(
    'Normalization ka matlab hai tables ko aise baantna ki data repeat na ho aur galti ki gunjaish khatam ho. 1NF har value ko atomic banata hai, 2NF partial dependency hatata hai, 3NF transitive dependency hatata hai.',
    'Normalization means splitting tables so that data is not repeated and mistakes have no room to hide. 1NF makes every value atomic, 2NF removes partial dependency, and 3NF removes transitive dependency.',
    'नॉर्मलाइज़ेशन का मतलब है टेबल को ऐसे बाँटना कि डेटा दोहराया न जाए और गलती की गुंजाइश खत्म हो। 1NF हर वैल्यू को एटॉमिक बनाता है, 2NF पार्शियल डिपेंडेंसी हटाता है, 3NF ट्रांज़िटिव डिपेंडेंसी हटाता है।',
  ),
  sections: [
    sec(
      H_WHAT[0], H_WHAT[1], H_WHAT[2],
      `Normalization ek process hai jisme badi, gadbad wali table ko chhoti, saaf tables mein baanta jata hai. Iska maksad hai redundancy khatam karna — matlab ek hi data ko baar-baar likhne se bachna. Jab ek hi cheez ek jagah likhi hoti hai, to use badalna easy hota hai aur galti nahi hoti.\n\n1NF (First Normal Form) ka rule hai: har cell mein sirf ek value ho — atomic value. Ek cell mein "Python, SQL" jaise do values nahi honi chahiye. Aisi list ko alag rows mein tod do.\n\n2NF ka rule hai: table poori tarah 1NF mein ho, aur har non-key column poori key par depend kare — key ke ek hisse par nahi. Ye rule tab matter karta hai jab key do columns se bani ho (composite key). 3NF ka rule hai: table 2NF mein ho, aur koi non-key column kisi doosre non-key column par depend na kare — matlab transitive dependency na ho.`,
      `Normalization is a process in which a big, messy table is split into small, clean tables. Its aim is to end redundancy — that is, to stop writing the same data again and again. When one thing is written in one place, changing it is easy and mistakes do not happen.\n\nThe rule of 1NF (First Normal Form) is: every cell holds only one value — an atomic value. A cell must not hold two values like "Python, SQL". Break such a list into separate rows.\n\nThe rule of 2NF is: the table is fully in 1NF, and every non-key column depends on the whole key — not on one part of it. This rule matters when the key is made of two columns (a composite key). The rule of 3NF is: the table is in 2NF, and no non-key column depends on another non-key column — that is, there is no transitive dependency.`,
      `नॉर्मलाइज़ेशन एक प्रक्रिया है जिसमें बड़ी, गड़बड़ वाली टेबल को छोटी, साफ़ टेबल में बाँटा जाता है। इसका मकसद है रिडंडेंसी खत्म करना — मतलब एक ही डेटा को बार-बार लिखने से बचना। जब एक ही चीज़ एक जगह लिखी होती है, तो उसे बदलना आसान होता है और गलती नहीं होती।\n\n1NF (फ़र्स्ट नॉर्मल फ़ॉर्म) का नियम है: हर सेल में सिर्फ़ एक वैल्यू हो — एटॉमिक वैल्यू। एक सेल में "Python, SQL" जैसी दो वैल्यू नहीं होनी चाहिए। ऐसी लिस्ट को अलग पंक्तियों में तोड़ दो।\n\n2NF का नियम है: टेबल पूरी तरह 1NF में हो, और हर नॉन-की कॉलम पूरी की पर निर्भर करे — की के एक हिस्से पर नहीं। यह नियम तब मायने रखता है जब की दो कॉलम से बनी हो (कंपोज़िट की)। 3NF का नियम है: टेबल 2NF में हो, और कोई नॉन-की कॉलम किसी दूसरे नॉन-की कॉलम पर निर्भर न करे — मतलब ट्रांज़िटिव डिपेंडेंसी न हो।`,
    ),
    sec(
      H_REAL[0], H_REAL[1], H_REAL[2],
      `Dukaan ka bill dekho: har bill par customer ka naam aur pata likha hota hai. Ek customer 10 baar aaye to uska pata 10 baar likha jayega. Ek baar pata badle to 10 bills badalne padenge — aur ek bill bhool gaye to do pata ho jayenge, ek purana, ek naya. Yehi redundancy hai. Sahi tareeka hai: customer ki ek table, bill ki ek table, aur bill mein sirf customer_id.\n\nSchool mein har student ki row mein teacher ka phone likha ho to teacher ka number badalte hi 40 rows badalni padengi. Teacher ki alag table banao, student ki row mein sirf teacher_id rakho — number ek jagah badlo, sab jagah sahi.\n\nPhone ke contacts mein bhi yehi hota hai: ek dost ka number ek jagah badlo, har jagah badal jata hai — kyunki wo ek hi entry hai, 10 copies nahi.`,
      `Look at a shop bill: every bill carries the name and address of the customer. If one customer comes 10 times, the address is written 10 times. If the address changes once, 10 bills must be changed — and if one bill is forgotten, there are two addresses, one old and one new. That is redundancy. The right way is: one table for customers, one table for bills, and only the customer_id in the bill.\n\nIn a school, if the phone of a teacher is written in the row of every student, changing the number means changing 40 rows. Make a separate table for teachers and keep only the teacher_id in the row of a student — change the number in one place, and it is right everywhere.\n\nThe contacts on a phone work the same way: change the number of a friend in one place, and it changes everywhere — because it is one entry, not 10 copies.`,
      `दुकान का बिल देखो: हर बिल पर ग्राहक का नाम और पता लिखा होता है। एक ग्राहक 10 बार आए तो उसका पता 10 बार लिखा जाएगा। एक बार पता बदले तो 10 बिल बदलने पड़ेंगे — और एक बिल भूल गए तो दो पते हो जाएँगे, एक पुराना, एक नया। यही रिडंडेंसी है। सही तरीका है: ग्राहक की एक टेबल, बिल की एक टेबल, और बिल में सिर्फ़ customer_id।\n\nस्कूल में हर छात्र की पंक्ति में टीचर का फ़ोन लिखा हो तो टीचर का नंबर बदलते ही 40 पंक्तियाँ बदलनी पड़ेंगी। टीचर की अलग टेबल बनाओ, छात्र की पंक्ति में सिर्फ़ teacher_id रखो — नंबर एक जगह बदलो, सब जगह सही।\n\nफ़ोन के कॉन्टैक्ट्स में भी यही होता है: एक दोस्त का नंबर एक जगह बदलो, हर जगह बदल जाता है — क्योंकि वह एक ही एंट्री है, 10 कॉपी नहीं।`,
    ),
    sec(
      H_STEP[0], H_STEP[1], H_STEP[2],
      `Pehla worked example: ek gadbad table orders hai — order_id, customer_name, customer_city, pincode, item. Isme teen problems hain. Pehla: ek order mein do items hon to item wale cell mein "Pen, Notebook" likhna padega — ye 1NF todta hai. Hal: har item ke liye alag row banao, ya items ki alag table banao.\n\nDoosra: key (order_id, item) maan lo. customer_name sirf order_id par depend karta hai, item par nahi — ye partial dependency hai, 2NF todti hai. Hal: customers ki alag table banao (customer_id, customer_name, customer_city, pincode), aur orders mein sirf customer_id rakho.\n\nTeesra: pincode, customer_city par depend karta hai — city se pincode pata chal jata hai. Ye transitive dependency hai: pincode -> city -> customer. Ye 3NF todti hai. Hal: cities ki alag table banao (city, pincode), customer mein sirf city rakho. Aakhir mein 4 saaf tables: customers, cities, orders, order_items. Har cheez ek jagah, koi repeat nahi.`,
      `First worked example: a messy table called orders — order_id, customer_name, customer_city, pincode, item. It has three problems. First: if one order has two items, the item cell must hold "Pen, Notebook" — that breaks 1NF. The fix: make a separate row for every item, or a separate table for items.\n\nSecond: take the key as (order_id, item). customer_name depends only on order_id, not on item — that is a partial dependency, and it breaks 2NF. The fix: make a separate table for customers (customer_id, customer_name, customer_city, pincode), and keep only the customer_id in orders.\n\nThird: pincode depends on customer_city — the pincode can be found from the city. That is a transitive dependency: pincode depends on city, and city depends on the customer. It breaks 3NF. The fix: make a separate table for cities (city, pincode) and keep only the city in the customer. In the end there are 4 clean tables: customers, cities, orders, order_items. Everything in one place, nothing repeated.`,
      `पहला हल किया हुआ उदाहरण: एक गड़बड़ टेबल orders है — order_id, customer_name, customer_city, pincode, item। इसमें तीन समस्याएँ हैं। पहला: एक ऑर्डर में दो आइटम हों तो item वाले सेल में "Pen, Notebook" लिखना पड़ेगा — यह 1NF तोड़ता है। हल: हर आइटम के लिए अलग पंक्ति बनाओ, या आइटम की अलग टेबल बनाओ।\n\nदूसरा: की (order_id, item) मान लो। customer_name सिर्फ़ order_id पर निर्भर करता है, item पर नहीं — यह पार्शियल डिपेंडेंसी है, 2NF तोड़ती है। हल: customers की अलग टेबल बनाओ (customer_id, customer_name, customer_city, pincode), और orders में सिर्फ़ customer_id रखो।\n\nतीसरा: pincode, customer_city पर निर्भर करता है — शहर से पिनकोड पता चल जाता है। यह ट्रांज़िटिव डिपेंडेंसी है: pincode -> city -> customer। यह 3NF तोड़ती है। हल: cities की अलग टेबल बनाओ (city, pincode), customer में सिर्फ़ city रखो। आखिर में 4 साफ़ टेबल: customers, cities, orders, order_items। हर चीज़ एक जगह, कोई दोहराव नहीं।`,
      {
        title: t('3NF design — customers aur cities alag', 'The 3NF design — customers and cities kept apart', '3NF डिज़ाइन — customers और cities अलग'),
        language: 'sql',
        code: `CREATE TABLE cities (
  city TEXT PRIMARY KEY,
  pincode TEXT
);
CREATE TABLE customers (
  customer_id INTEGER PRIMARY KEY,
  customer_name TEXT,
  city TEXT REFERENCES cities(city)
);
INSERT INTO cities VALUES ('Patna', '800001');
INSERT INTO customers VALUES (1, 'Asha', 'Patna');
SELECT customer_id, customer_name, city FROM customers;`,
        output: 'customer_id | customer_name | city\n1 | Asha | Patna',
        note: t(
          'Pincode ab sirf cities table mein hai — ek jagah. Patna ka pincode badle to sirf ek row badalni padegi, 100 customers ki rows nahi.',
          'The pincode now lives only in the cities table — one place. If the pincode of Patna changes, only one row must be changed, not the rows of 100 customers.',
          'पिनकोड अब सिर्फ़ cities टेबल में है — एक जगह। पटना का पिनकोड बदले तो सिर्फ़ एक पंक्ति बदलनी पड़ेगी, 100 ग्राहकों की पंक्तियाँ नहीं।',
        ),
      },
    ),
    sec(
      H_MIST[0], H_MIST[1], H_MIST[2],
      `Sabse badi galti: har chhoti table ko bhi todna — over-normalization. Agar data chhota hai aur kabhi repeat nahi hota, to use todna bekaar hai. Har join ka kharcha hota hai: 4 tables ko jodne ke liye 3 joins lagenge, aur query slow hogi. Normalization ka matlab hai "jitna zaroori ho, utna baanto" — har cheez ko todna nahi.\n\nDoosri galti: ye sochna ki 3NF har redundancy khatam kar deta hai. Nahi karta — 3NF sirf wohi redundancy hatata hai jo dependencies se aati hai. Kuch repeat jaan-boojh kar rakha jata hai, taaki query tez chale — use denormalization kehte hain, aur bade systems mein ye aam hai.\n\nTeesri galti: key ko todte waqt bhool jaana. Table baant te ho to har nayi table mein key honi chahiye, aur purani table mein us key ka reference (foreign key) rehna chahiye. Nahi to dono tables ko dobara jod hi nahi paoge — data to bacha liya, connection kho diya.`,
      `The biggest mistake is splitting even a small table — over-normalization. If the data is small and never repeats, splitting it is a waste. Every join has a cost: joining 4 tables needs 3 joins, and the query becomes slow. Normalization means "split as much as needed" — not splitting everything.\n\nThe second mistake is thinking that 3NF ends all redundancy. It does not — 3NF only removes the redundancy that comes from dependencies. Some repetition is kept on purpose, so that queries run fast — that is called denormalization, and it is common in big systems.\n\nThe third mistake is forgetting the key while splitting. When you split a table, every new table must have a key, and the old table must keep a reference to that key (a foreign key). Otherwise the two tables can never be joined again — you saved the data but lost the connection.`,
      `सबसे बड़ी गलती: हर छोटी टेबल को भी तोड़ना — ओवर-नॉर्मलाइज़ेशन। अगर डेटा छोटा है और कभी दोहराया नहीं जाता, तो उसे तोड़ना बेकार है। हर जॉइन का खर्च होता है: 4 टेबल को जोड़ने के लिए 3 जॉइन लगेंगे, और क्वेरी धीमी होगी। नॉर्मलाइज़ेशन का मतलब है "जितना ज़रूरी हो, उतना बाँटो" — हर चीज़ को तोड़ना नहीं।\n\nदूसरी गलती: यह सोचना कि 3NF हर रिडंडेंसी खत्म कर देता है। नहीं करता — 3NF सिर्फ़ वही रिडंडेंसी हटाता है जो डिपेंडेंसी से आती है। कुछ दोहराव जान-बूझकर रखा जाता है, ताकि क्वेरी तेज़ चले — उसे डीनॉर्मलाइज़ेशन कहते हैं, और बड़े सिस्टम में यह आम है।\n\nतीसरी गलती: की को तोड़ते समय भूल जाना। टेबल बाँटते हो तो हर नई टेबल में की होनी चाहिए, और पुरानी टेबल में उस की का संदर्भ (फ़ॉरेन की) रहना चाहिए। नहीं तो दोनों टेबल को दोबारा जोड़ ही नहीं पाओगे — डेटा तो बचा लिया, कनेक्शन खो दिया।`,
    ),
    sec(
      H_EDGE[0], H_EDGE[1], H_EDGE[2],
      `Agar key sirf ek column ki hai, to 2NF apne aap poora ho jata hai — partial dependency tabhi hoti hai jab key ke do ya zyada hisse hon. Isliye single-column key wali tables mein 2NF ke baare mein sochne ki zaroorat hi nahi padti.\n\nCalculated values — jaise total = price x quantity — ko store karna 3NF todta hai, kyunki total doosre columns par depend karta hai. Lekin aksar use store kiya jata hai, taaki har baar hisaab na lagana pade. Ye jaan-boojh kar kiya gaya denormalization hai, galti nahi.\n\nOptional attributes — jaise kisi customer ka phone na ho — NULL se handle hote hain, alag table banane ki zaroorat nahi. Table tab baanto jab data repeat ho raha ho, har NULL ke liye nahi.`,
      `If the key is a single column, 2NF is complete on its own — a partial dependency only happens when the key has two or more parts. So in tables with a single-column key, there is no need to think about 2NF at all.\n\nStoring calculated values — like total = price times quantity — breaks 3NF, because total depends on other columns. But it is often stored anyway, so the sum does not have to be worked out every time. That is denormalization done on purpose, not a mistake.\n\nOptional attributes — like a customer with no phone — are handled with NULL; there is no need to make a separate table. Split a table when the data is repeating, not for every NULL.`,
      `अगर की सिर्फ़ एक कॉलम की है, तो 2NF अपने आप पूरा हो जाता है — पार्शियल डिपेंडेंसी तभी होती है जब की के दो या ज़्यादा हिस्से हों। इसलिए सिंगल-कॉलम की वाली टेबल में 2NF के बारे में सोचने की ज़रूरत ही नहीं पड़ती।\n\nगणना की हुई वैल्यू — जैसे total = price x quantity — को स्टोर करना 3NF तोड़ता है, क्योंकि total दूसरे कॉलम पर निर्भर करता है। लेकिन अक्सर उसे स्टोर किया जाता है, ताकि हर बार हिसाब न लगाना पड़े। यह जान-बूझकर किया गया डीनॉर्मलाइज़ेशन है, गलती नहीं।\n\nवैकल्पिक एट्रिब्यूट — जैसे किसी ग्राहक का फ़ोन न हो — NULL से संभाले जाते हैं, अलग टेबल बनाने की ज़रूरत नहीं। टेबल तब बाँटो जब डेटा दोहराया जा रहा हो, हर NULL के लिए नहीं।`,
    ),
    sec(
      H_WHATIF[0], H_WHATIF[1], H_WHATIF[2],
      `Agar tum speed ke liye denormalize kar do — jaise har order mein customer ka naam bhi likh do — to read query tez ho jayegi, kyunki join nahi karna padega. Lekin customer ka naam badle to har order badalna padega, aur ek bhool gaye to data galat ho jayega. Ye trade-off hai: tez read ke badle mein mushkil write.\n\nInterview mein aksar poochha jata hai: "3NF tak kafi hai ya BCNF bhi chahiye?" Zyada tar real systems 3NF par rukte hain. BCNF 3NF se ek kadam aage hai, lekin uske cases rare hain. Pehle 3NF ko pakka karo, BCNF baad mein.`,
      `If you denormalize for speed — like writing the name of the customer in every order too — the read query becomes fast, because no join is needed. But when the name of the customer changes, every order must be changed, and if one is forgotten, the data turns wrong. That is the trade-off: a fast read in exchange for a hard write.\n\nInterviews often ask: "Is 3NF enough, or is BCNF needed too?" Most real systems stop at 3NF. BCNF is one step beyond 3NF, but its cases are rare. First make 3NF solid, and leave BCNF for later.`,
      `अगर तुम गति के लिए डीनॉर्मलाइज़ कर दो — जैसे हर ऑर्डर में ग्राहक का नाम भी लिख दो — तो रीड क्वेरी तेज़ हो जाएगी, क्योंकि जॉइन नहीं करना पड़ेगा। लेकिन ग्राहक का नाम बदले तो हर ऑर्डर बदलना पड़ेगा, और एक भूल गए तो डेटा गलत हो जाएगा। यह ट्रेड-ऑफ़ है: तेज़ रीड के बदले में मुश्किल राइट।\n\nइंटरव्यू में अक्सर पूछा जाता है: "3NF तक काफ़ी है या BCNF भी चाहिए?" ज़्यादातर असली सिस्टम 3NF पर रुकते हैं। BCNF 3NF से एक कदम आगे है, लेकिन उसके मामले दुर्लभ हैं। पहले 3NF को पक्का करो, BCNF बाद में।`,
    ),
    sec(
      H_SUM[0], H_SUM[1], H_SUM[2],
      `Normalization ka maksad hai repeat data khatam karna. 1NF: har cell mein ek hi value. 2NF: har column poori key par depend kare. 3NF: koi column kisi doosre non-key column par depend na kare. Table baant te waqt key aur foreign key ko mat bhoolo. Aur yaad rakho: jitna zaroori ho utna baanto — over-normalization query ko slow kar deta hai.`,
      `The aim of normalization is to end repeated data. 1NF: one value in every cell. 2NF: every column depends on the whole key. 3NF: no column depends on another non-key column. While splitting a table, never forget the key and the foreign key. And remember: split only as much as needed — over-normalization makes queries slow.`,
      `नॉर्मलाइज़ेशन का मकसद है दोहराया गया डेटा खत्म करना। 1NF: हर सेल में एक ही वैल्यू। 2NF: हर कॉलम पूरी की पर निर्भर करे। 3NF: कोई कॉलम किसी दूसरे नॉन-की कॉलम पर निर्भर न करे। टेबल बाँटते समय की और फ़ॉरेन की को मत भूलो। और याद रखो: जितना ज़रूरी हो उतना बाँटो — ओवर-नॉर्मलाइज़ेशन क्वेरी को धीमा कर देता है।`,
    ),
  ],
  diagram: {
    kind: 'flow',
    title: t('Gadbad table se 3NF tak', 'From a messy table to 3NF', 'गड़बड़ टेबल से 3NF तक'),
    nodes: [
      { t: t('orders — gadbad', 'orders — messy', 'orders — गड़बड़'), s: t('naam, sheher, pincode repeat', 'name, city, pincode repeated', 'नाम, शहर, पिनकोड दोहराए') },
      { t: t('1NF — ek cell, ek value', '1NF — one cell, one value', '1NF — एक सेल, एक वैल्यू'), s: t('list ko rows mein todo', 'break a list into rows', 'लिस्ट को पंक्तियों में तोड़ो') },
      { t: t('2NF — poori key par depend', '2NF — depends on the whole key', '2NF — पूरी की पर निर्भर'), s: t('customers alag table', 'customers in a separate table', 'customers अलग टेबल') },
      { t: t('3NF — transitive hatayo', '3NF — remove the transitive link', '3NF — ट्रांज़िटिव हटाओ'), s: t('cities alag table', 'cities in a separate table', 'cities अलग टेबल') },
    ],
  },
  codeExamples: [
    {
      title: t('1NF todna — ek cell mein do courses', 'Breaking 1NF — two courses in one cell', '1NF तोड़ना — एक सेल में दो कोर्स'),
      language: 'sql',
      code: `-- GALAT: ek cell mein do values (1NF todta hai)
-- INSERT INTO students_courses VALUES (1, 'Rahul', 'Python, SQL');
-- SAHI: har course ke liye alag row
CREATE TABLE student_courses (
  student_id INTEGER,
  course TEXT,
  PRIMARY KEY (student_id, course)
);
INSERT INTO student_courses VALUES (1, 'Python');
INSERT INTO student_courses VALUES (1, 'SQL');
SELECT student_id, course FROM student_courses;`,
      output: 'student_id | course\n1 | Python\n1 | SQL',
      note: t(
        'Ek hi student ke 2 courses 2 rows mein hain. Ab "Rahul ne kaun se course liye" ka jawab ek simple SELECT se mil jayega, string ko todne ki zaroorat nahi.',
        'The 2 courses of one student sit in 2 rows. Now the answer to "which courses did Rahul take" comes from a simple SELECT, with no need to break a string apart.',
        'एक ही छात्र के 2 कोर्स 2 पंक्तियों में हैं। अब "राहुल ने कौन से कोर्स लिए" का जवाब एक साधारण SELECT से मिल जाएगा, स्ट्रिंग को तोड़ने की ज़रूरत नहीं।',
      ),
    },
  ],
  mcqs: [
    {
      q: t(
        'Ek cell mein "Python, SQL" likha hai. Ye kaun sa normal form todta hai?',
        'One cell holds "Python, SQL". Which normal form does this break?',
        'एक सेल में "Python, SQL" लिखा है। यह कौन सा नॉर्मल फ़ॉर्म तोड़ता है?',
      ),
      opts: [
        t('1NF — har cell mein ek hi value honi chahiye', '1NF — every cell must hold only one value', '1NF — हर सेल में एक ही वैल्यू होनी चाहिए'),
        t('2NF — partial dependency hai', '2NF — it is a partial dependency', '2NF — पार्शियल डिपेंडेंसी है'),
        t('3NF — transitive dependency hai', '3NF — it is a transitive dependency', '3NF — ट्रांज़िटिव डिपेंडेंसी है'),
        t('Koi nahi todta, ye theek hai', 'It breaks none of them, this is fine', 'कोई नहीं तोड़ता, यह ठीक है'),
      ],
      ans: 0,
      expl: t(
        '1NF ka rule hai: har value atomic ho. "Python, SQL" ek cell mein do values hain, isliye 1NF tootta hai.',
        'The rule of 1NF is: every value must be atomic. "Python, SQL" puts two values in one cell, so 1NF breaks.',
        '1NF का नियम है: हर वैल्यू एटॉमिक हो। "Python, SQL" एक सेल में दो वैल्यू हैं, इसलिए 1NF टूटता है।',
      ),
    },
    {
      q: t(
        'Table mein key (order_id, item) hai aur customer_name sirf order_id par depend karta hai. Ye kya hai?',
        'In a table, the key is (order_id, item) and customer_name depends only on order_id. What is this?',
        'टेबल में की (order_id, item) है और customer_name सिर्फ़ order_id पर निर्भर करता है। यह क्या है?',
      ),
      opts: [
        t('1NF violation', 'A 1NF violation', '1NF का उल्लंघन'),
        t('Partial dependency — 2NF todta hai', 'A partial dependency — it breaks 2NF', 'पार्शियल डिपेंडेंसी — 2NF तोड़ता है'),
        t('Transitive dependency — 3NF todta hai', 'A transitive dependency — it breaks 3NF', 'ट्रांज़िटिव डिपेंडेंसी — 3NF तोड़ता है'),
        t('Koi problem nahi hai', 'There is no problem', 'कोई समस्या नहीं है'),
      ],
      ans: 1,
      expl: t(
        'Customer_name poori key (order_id, item) par nahi, sirf uske ek hisse (order_id) par depend karta hai. Yehi partial dependency hai, jo 2NF todti hai.',
        'customer_name depends not on the whole key (order_id, item), but only on one part of it (order_id). That is a partial dependency, and it breaks 2NF.',
        'customer_name पूरी की (order_id, item) पर नहीं, सिर्फ़ उसके एक हिस्से (order_id) पर निर्भर करता है। यही पार्शियल डिपेंडेंसी है, जो 2NF तोड़ती है।',
      ),
    },
    {
      q: t(
        'Pincode, city par depend karta hai, aur city, customer par. Ye kya hai?',
        'Pincode depends on city, and city depends on the customer. What is this?',
        'पिनकोड, शहर पर निर्भर करता है, और शहर, ग्राहक पर। यह क्या है?',
      ),
      opts: [
        t('Partial dependency', 'A partial dependency', 'पार्शियल डिपेंडेंसी'),
        t('Transitive dependency — 3NF todta hai', 'A transitive dependency — it breaks 3NF', 'ट्रांज़िटिव डिपेंडेंसी — 3NF तोड़ता है'),
        t('1NF violation', 'A 1NF violation', '1NF का उल्लंघन'),
        t('Primary key problem', 'A primary key problem', 'प्राइमरी की की समस्या'),
      ],
      ans: 1,
      expl: t(
        'Pincode seedha customer par nahi, city ke through depend karta hai: customer -> city -> pincode. Ye transitive dependency hai, jo 3NF todti hai.',
        'Pincode does not depend on the customer directly, but through the city: customer to city to pincode. That is a transitive dependency, and it breaks 3NF.',
        'पिनकोड सीधे ग्राहक पर नहीं, शहर के माध्यम से निर्भर करता है: ग्राहक -> शहर -> पिनकोड। यह ट्रांज़िटिव डिपेंडेंसी है, जो 3NF तोड़ती है।',
      ),
    },
    {
      q: t(
        'Har chhoti table ko bhi todna kyun galat hai?',
        'Why is it wrong to split even every small table?',
        'हर छोटी टेबल को भी तोड़ना क्यों गलत है?',
      ),
      opts: [
        t('Table chhoti ho jaati hai', 'The table becomes small', 'टेबल छोटी हो जाती है'),
        t('Har join ka kharcha hota hai — query slow ho jaati hai', 'Every join has a cost — the query becomes slow', 'हर जॉइन का खर्च होता है — क्वेरी धीमी हो जाती है'),
        t('Data kho jata hai', 'The data is lost', 'डेटा खो जाता है'),
        t('SQL chalna band kar deta hai', 'SQL stops running', 'SQL चलना बंद कर देता है'),
      ],
      ans: 1,
      expl: t(
        'Zyada tables matlab zyada joins, aur har join kaam badhata hai. Normalization jitna zaroori ho utna karo — over-normalization query ko slow kar deta hai.',
        'More tables mean more joins, and every join adds work. Normalize only as much as needed — over-normalization makes queries slow.',
        'ज़्यादा टेबल मतलब ज़्यादा जॉइन, और हर जॉइन काम बढ़ाता है। नॉर्मलाइज़ेशन जितना ज़रूरी हो उतना करो — ओवर-नॉर्मलाइज़ेशन क्वेरी को धीमा कर देता है।',
      ),
    },
  ],
  practice: {
    title: t('Gadbad table ko pehchano aur todo', 'Spot the messy table and split it', 'गड़बड़ टेबल को पहचानो और तोड़ो'),
    task: t(
      'Neeche wali table mein 1NF violation hai: student_courses(student_id, student_name, courses) mein ek student ke courses ek hi cell mein "Python, SQL" likhe hain. Sahi design mein student_courses(student_id, course) banao jisme har course alag row ho, aur 2 rows insert karo: (1, \'Python\') aur (1, \'SQL\'). Aakhir mein SELECT se dikhao. Done tab maanenge jab output mein 2 rows dikhein: 1 | Python aur 1 | SQL.',
      'The table below breaks 1NF: in student_courses(student_id, student_name, courses), the courses of one student sit in one cell as "Python, SQL". In the right design, make student_courses(student_id, course) with every course in its own row, and insert 2 rows: (1, \'Python\') and (1, \'SQL\'). At the end, show them with SELECT. You are done when the output shows 2 rows: 1 | Python and 1 | SQL.',
      'नीचे वाली टेबल में 1NF का उल्लंघन है: student_courses(student_id, student_name, courses) में एक छात्र के कोर्स एक ही सेल में "Python, SQL" लिखे हैं। सही डिज़ाइन में student_courses(student_id, course) बनाओ जिसमें हर कोर्स अलग पंक्ति हो, और 2 पंक्तियाँ इन्सर्ट करो: (1, \'Python\') और (1, \'SQL\')। आखिर में SELECT से दिखाओ। तब पूरा मानेंगे जब आउटपुट में 2 पंक्तियाँ दिखें: 1 | Python और 1 | SQL।',
    ),
    language: 'sql',
    starter: `CREATE TABLE student_courses (
  student_id INTEGER,
  course TEXT,
  PRIMARY KEY (student_id, course)
);
INSERT INTO student_courses VALUES (1, 'Python');
INSERT INTO student_courses VALUES (1, 'SQL');
SELECT student_id, course FROM student_courses;`,
    expected: 'student_id | course\n1 | Python\n1 | SQL',
  },
  readMinutes: 11,
};

const dbmsTransactions: Article = {
  id: 'dbms-transactions',
  subjectId: 'dbms',
  title: t(
    'Transactions, indexing aur ACID',
    'Transactions, indexing and ACID',
    'ट्रांज़ैक्शन, इंडेक्सिंग और ACID',
  ),
  summary: t(
    'Transaction ka matlab hai kaam ka ek set jo ya to poora hota hai ya bilkul nahi — beech mein rukna mana hai. ACID uski chaar guarantees hain. Index kitaab ki index jaisa hai: dhoondhna tez karta hai, lekin likhna thoda slow kar deta hai.',
    'A transaction is a set of jobs that either completes fully or not at all — stopping in the middle is not allowed. ACID is its four guarantees. An index is like the index of a book: it makes finding fast, but writing a little slower.',
    'ट्रांज़ैक्शन का मतलब है काम का एक सेट जो या तो पूरा होता है या बिल्कुल नहीं — बीच में रुकना मना है। ACID उसकी चार गारंटी हैं। इंडेक्स किताब की इंडेक्स जैसा है: ढूँढना तेज़ करता है, लेकिन लिखना थोड़ा धीमा कर देता है।',
  ),
  sections: [
    sec(
      H_WHAT[0], H_WHAT[1], H_WHAT[2],
      `Transaction database ke kaam ka ek group hai jo ek hi unit ki tarah chalta hai: ya to uske saare steps poore honge, ya ek bhi nahi. Beech mein rukna mana hai. Paise transfer karna ek transaction hai: ek account se paise katna aur doosre mein jodna — dono steps ek saath hone chahiye. Agar pehla ho jaye aur doosra na ho, to paise gayab ho jayenge.\n\nACID transaction ki chaar guarantees hain. Atomicity: sab kuch ya kuch nahi — aadha kaam nahi. Consistency: transaction ke baad database ke saare rules phir bhi sahi hone chahiye — jaise balance kabhi negative nahi. Isolation: do transactions ek saath chal rahi hon to ek ko doosri ka aadha kaam nahi dikhna chahiye. Durability: ek baar transaction commit ho jaye, to bijli chali jaye ya computer band ho jaye, data wapas aana chahiye.\n\nIndex ek alag structure hai jo search ko tez karta hai. Kitaab ke aakhir mein index hota hai: "photos, page 42" — tum poori kitaab nahi padhte, seedha page 42 kholte ho. Database mein index bhi wahi karta hai: marks par index banao to WHERE marks >= 80 wali query ko poori table nahi padhni padti.`,
      `A transaction is a group of database jobs that runs as a single unit: either all its steps complete, or none of them do. Stopping in the middle is not allowed. Transferring money is a transaction: taking money from one account and adding it to another — both steps must happen together. If the first happens and the second does not, the money vanishes.\n\nACID is the four guarantees of a transaction. Atomicity: everything or nothing — no half work. Consistency: after the transaction, all the rules of the database must still hold — like a balance never going negative. Isolation: when two transactions run together, one must not see the half-done work of the other. Durability: once a transaction is committed, the data must come back even if the power fails or the computer shuts down.\n\nAn index is a separate structure that makes searching fast. A book has an index at the end: "photos, page 42" — you do not read the whole book, you open page 42 directly. An index in a database does the same thing: put an index on marks, and a query like WHERE marks >= 80 does not need to read the whole table.`,
      `ट्रांज़ैक्शन डेटाबेस के काम का एक समूह है जो एक ही इकाई की तरह चलता है: या तो उसके सारे कदम पूरे होंगे, या एक भी नहीं। बीच में रुकना मना है। पैसे ट्रांसफ़र करना एक ट्रांज़ैक्शन है: एक खाते से पैसे काटना और दूसरे में जोड़ना — दोनों कदम एक साथ होने चाहिए। अगर पहला हो जाए और दूसरा न हो, तो पैसे गायब हो जाएँगे।\n\nACID ट्रांज़ैक्शन की चार गारंटी हैं। एटॉमिसिटी: सब कुछ या कुछ नहीं — आधा काम नहीं। कंसिस्टेंसी: ट्रांज़ैक्शन के बाद डेटाबेस के सारे नियम फिर भी सही होने चाहिए — जैसे बैलेंस कभी नेगेटिव नहीं। आइसोलेशन: दो ट्रांज़ैक्शन एक साथ चल रही हों तो एक को दूसरी का आधा काम नहीं दिखना चाहिए। ड्यूरेबिलिटी: एक बार ट्रांज़ैक्शन कमिट हो जाए, तो बिजली चली जाए या कंप्यूटर बंद हो जाए, डेटा वापस आना चाहिए।\n\nइंडेक्स एक अलग स्ट्रक्चर है जो सर्च को तेज़ करता है। किताब के आखिर में इंडेक्स होता है: "photos, page 42" — तुम पूरी किताब नहीं पढ़ते, सीधे पेज 42 खोलते हो। डेटाबेस में इंडेक्स भी वही करता है: marks पर इंडेक्स बनाओ तो WHERE marks >= 80 वाली क्वेरी को पूरी टेबल नहीं पढ़नी पड़ती।`,
    ),
    sec(
      H_REAL[0], H_REAL[1], H_REAL[2],
      `UPI se paise bhejna dekho: tumhare account se 500 kat te hain aur dost ke account mein 500 judte hain. Agar beech mein network chala jaye aur sirf pehla step ho, to tumhare 500 gayab — isiliye UPI ise ek transaction mein karta hai: ya to dono steps, ya ek bhi nahi. Fail ho jaye to paise wapas aate hain — ye rollback hai.\n\nRailway mein aakhri seat book karna bhi transaction hai: do log ek saath wahi seat maangein to ek ko milegi, doosre ko "seat nahi hai" dikhega. Dono ko seat mil jaye to train mein ek seat par do log baith jayenge — isiliye isolation zaroori hai.\n\nDictionary ka index dekho: shabd dhoondhne ke liye tum pehle index dekhte ho ki "mango" kis page par hai, phir seedha wahan jaate ho. Bina index ke poori dictionary padhni padti. Database ka index bilkul waisa hi hai.`,
      `Look at sending money by UPI: 500 is taken from your account and 500 is added to the account of your friend. If the network fails in the middle and only the first step happens, your 500 vanish — so UPI does it in one transaction: either both steps, or neither. If it fails, the money comes back — that is a rollback.\n\nBooking the last seat on a train is also a transaction: if two people ask for the same seat at once, one gets it and the other sees "no seat". If both got the seat, two people would sit on one seat in the train — that is why isolation is needed.\n\nLook at the index of a dictionary: to find a word, you first check the index for which page "mango" is on, then go straight there. Without an index you would have to read the whole dictionary. The index of a database is exactly like that.`,
      `यूपीआई से पैसे भेजना देखो: तुम्हारे खाते से 500 कटते हैं और दोस्त के खाते में 500 जुड़ते हैं। अगर बीच में नेटवर्क चला जाए और सिर्फ़ पहला कदम हो, तो तुम्हारे 500 गायब — इसीलिए यूपीआई इसे एक ट्रांज़ैक्शन में करता है: या तो दोनों कदम, या एक भी नहीं। फ़ेल हो जाए तो पैसे वापस आते हैं — यह रोलबैक है।\n\nरेलवे में आखिरी सीट बुक करना भी ट्रांज़ैक्शन है: दो लोग एक साथ वही सीट माँगें तो एक को मिलेगी, दूसरे को "सीट नहीं है" दिखेगा। दोनों को सीट मिल जाए तो ट्रेन में एक सीट पर दो लोग बैठ जाएँगे — इसीलिए आइसोलेशन ज़रूरी है।\n\nडिक्शनरी का इंडेक्स देखो: शब्द ढूँढने के लिए तुम पहले इंडेक्स देखते हो कि "mango" किस पेज पर है, फिर सीधे वहाँ जाते हो। बिना इंडेक्स के पूरी डिक्शनरी पढ़नी पड़ती। डेटाबेस का इंडेक्स बिल्कुल वैसा ही है।`,
    ),
    sec(
      H_STEP[0], H_STEP[1], H_STEP[2],
      `Pehla worked example: marks update karna, transaction mein. Maan lo Rahul ke marks 85 se 90 karne hain, aur saath mein ek log entry bhi likhni hai. BEGIN likho — transaction shuru. UPDATE students SET marks = 90 WHERE id = 1 chalao. Phir INSERT INTO marks_log VALUES (1, 85, 90) chalao — purana aur naya marks likh do. Agar dono chal jayein to COMMIT likho — changes pakke ho gaye. Agar beech mein kuch gadbad ho to ROLLBACK likho — sab wapas, jaise kuch hua hi nahi.\n\nDoosra worked example: index banana. CREATE INDEX idx_marks ON students(marks) likho. Ab SELECT name FROM students WHERE marks >= 80 chalao — database index se seedha un rows tak jayega, poori table scan nahi karega. Chhoti table par farak nahi dikhega, lekin 10 lakh rows par query second se millisecond mein aa jayegi.\n\nTeesra worked example: ACID ko test karna. Atomicity: dono UPDATE mein se ek fail ho to dono wapas hone chahiye. Consistency: CHECK (marks <= 100) ke saath 150 daalne ki koshish fail honi chahiye. Isolation: do log ek saath aakhri seat book karein to ek hi jeete. Durability: COMMIT ke baad computer band karke wapas kholo — data waisa ka waisa milna chahiye.`,
      `First worked example: updating marks, inside a transaction. Suppose the marks of Rahul must change from 85 to 90, and a log entry must be written too. Write BEGIN — the transaction starts. Run UPDATE students SET marks = 90 WHERE id = 1. Then run INSERT INTO marks_log VALUES (1, 85, 90) — writing the old and new marks. If both run, write COMMIT — the changes are now permanent. If something goes wrong in the middle, write ROLLBACK — everything goes back, as if nothing happened.\n\nSecond worked example: making an index. Write CREATE INDEX idx_marks ON students(marks). Now run SELECT name FROM students WHERE marks >= 80 — the database goes straight to those rows through the index, without scanning the whole table. On a small table the difference does not show, but on 10 lakh rows the query drops from seconds to milliseconds.\n\nThird worked example: testing ACID. Atomicity: if one of two UPDATEs fails, both must be undone. Consistency: trying to put 150 with CHECK (marks <= 100) must fail. Isolation: if two people book the last seat at once, only one wins. Durability: after COMMIT, switch the computer off and on again — the data must be exactly as it was.`,
      `पहला हल किया हुआ उदाहरण: नंबर अपडेट करना, ट्रांज़ैक्शन में। मान लो राहुल के नंबर 85 से 90 करने हैं, और साथ में एक लॉग एंट्री भी लिखनी है। BEGIN लिखो — ट्रांज़ैक्शन शुरू। UPDATE students SET marks = 90 WHERE id = 1 चलाओ। फिर INSERT INTO marks_log VALUES (1, 85, 90) चलाओ — पुराना और नया नंबर लिख दो। अगर दोनों चल जाएँ तो COMMIT लिखो — बदलाव पक्के हो गए। अगर बीच में कुछ गड़बड़ हो तो ROLLBACK लिखो — सब वापस, जैसे कुछ हुआ ही नहीं।\n\nदूसरा हल किया हुआ उदाहरण: इंडेक्स बनाना। CREATE INDEX idx_marks ON students(marks) लिखो। अब SELECT name FROM students WHERE marks >= 80 चलाओ — डेटाबेस इंडेक्स से सीधे उन पंक्तियों तक जाएगा, पूरी टेबल स्कैन नहीं करेगा। छोटी टेबल पर फ़र्क नहीं दिखेगा, लेकिन 10 लाख पंक्तियों पर क्वेरी सेकंड से मिलीसेकंड में आ जाएगी।\n\nतीसरा हल किया हुआ उदाहरण: ACID को टेस्ट करना। एटॉमिसिटी: दो UPDATE में से एक फ़ेल हो तो दोनों वापस होने चाहिए। कंसिस्टेंसी: CHECK (marks <= 100) के साथ 150 डालने की कोशिश फ़ेल होनी चाहिए। आइसोलेशन: दो लोग एक साथ आखिरी सीट बुक करें तो एक ही जीते। ड्यूरेबिलिटी: COMMIT के बाद कंप्यूटर बंद करके वापस खोलो — डेटा वैसा का वैसा मिलना चाहिए।`,
      {
        title: t('Transaction — marks badlo aur commit karo', 'Transaction — change the marks and commit', 'ट्रांज़ैक्शन — नंबर बदलो और कमिट करो'),
        language: 'sql',
        code: `BEGIN;
UPDATE students SET marks = 90 WHERE id = 1;
COMMIT;
SELECT id, name, marks FROM students WHERE id = 1;`,
        output: 'id | name | marks\n1 | Rahul | 90',
        note: t(
          'Dhyaan do: site ke runner mein har run par table dobara banti hai, isliye ye change sirf is run tak rehta hai. Asli database mein COMMIT ke baad change hamesha ke liye save ho jata hai.',
          'Note: in the runner of this site, the table is built again on every run, so this change lasts only for this run. In a real database, after COMMIT the change is saved for ever.',
          'ध्यान दो: साइट के रनर में हर रन पर टेबल दोबारा बनती है, इसलिए यह बदलाव सिर्फ़ इस रन तक रहता है। असली डेटाबेस में COMMIT के बाद बदलाव हमेशा के लिए सेव हो जाता है।',
        ),
      },
    ),
    sec(
      H_MIST[0], H_MIST[1], H_MIST[2],
      `Sabse badi galti: UPDATE bina WHERE ke likhna. UPDATE students SET marks = 90 likh diya to saare students ke marks 90 ho jayenge — Rahul, Priya, Amit, Sana, sab ke. WHERE bhoolna database ki sabse mehenga galti hai, kyunki wo chupchaap poori table badal deti hai. Hamesha pehle SELECT ... WHERE se check karo ki kaun si rows badlengi, phir UPDATE likho.\n\nDoosri galti: COMMIT karna bhool jaana. Kuch systems mein transaction tab tak save nahi hoti jab tak COMMIT na likho. Bina COMMIT ke window band kar di to saara kaam wapas ho jayega — aur tum sochoge ki save ho gaya tha.\n\nTeesri galti: har column par index bana dena. Index search ko tez karta hai, lekin har INSERT, UPDATE aur DELETE ko slow kar deta hai — kyunki index ko bhi update karna padta hai. Index sirf un columns par banao jahan tum baar-baar search karte ho, jaise marks ya name. Har column par index matlab kitaab ke har shabd ki index — moti index, slow likhna.`,
      `The biggest mistake is writing UPDATE without WHERE. If you write UPDATE students SET marks = 90, the marks of all the students become 90 — Rahul, Priya, Amit, Sana, everyone. Forgetting WHERE is the costliest mistake in a database, because it quietly changes the whole table. Always check first with SELECT ... WHERE which rows will change, and only then write UPDATE.\n\nThe second mistake is forgetting to COMMIT. In some systems, a transaction is not saved until you write COMMIT. If you close the window without COMMIT, all the work is undone — and you think it was saved.\n\nThe third mistake is putting an index on every column. An index makes searching fast, but it makes every INSERT, UPDATE and DELETE slower — because the index must be updated too. Put an index only on the columns you search again and again, like marks or name. An index on every column is like an index of every word in a book — a fat index, and slow writing.`,
      `सबसे बड़ी गलती: UPDATE बिना WHERE के लिखना। UPDATE students SET marks = 90 लिख दिया तो सारे छात्रों के नंबर 90 हो जाएँगे — राहुल, प्रिया, अमित, सना, सबके। WHERE भूलना डेटाबेस की सबसे महँगी गलती है, क्योंकि वह चुपचाप पूरी टेबल बदल देती है। हमेशा पहले SELECT ... WHERE से जाँचो कि कौन सी पंक्तियाँ बदलेंगी, फिर UPDATE लिखो।\n\nदूसरी गलती: COMMIT करना भूल जाना। कुछ सिस्टम में ट्रांज़ैक्शन तब तक सेव नहीं होती जब तक COMMIT न लिखो। बिना COMMIT के विंडो बंद कर दी तो सारा काम वापस हो जाएगा — और तुम सोचोगे कि सेव हो गया था।\n\nतीसरी गलती: हर कॉलम पर इंडेक्स बना देना। इंडेक्स सर्च को तेज़ करता है, लेकिन हर INSERT, UPDATE और DELETE को धीमा कर देता है — क्योंकि इंडेक्स को भी अपडेट करना पड़ता है। इंडेक्स सिर्फ़ उन कॉलम पर बनाओ जहाँ तुम बार-बार सर्च करते हो, जैसे marks या name। हर कॉलम पर इंडेक्स मतलब किताब के हर शब्द की इंडेक्स — मोटी इंडेक्स, धीमा लिखना।`,
    ),
    sec(
      H_EDGE[0], H_EDGE[1], H_EDGE[2],
      `Crash beech mein ho jaye to kya hoga? Agar crash COMMIT se pehle hua, to transaction aisi treat hoti hai jaise hui hi nahi — database purana data wapas la deta hai. Agar crash COMMIT ke baad hua, to data save rehta hai — yehi durability hai. Iske liye database har change ko pehle ek log file mein likhta hai, phir table mein.\n\nDo log ek saath aakhri seat book karein to kya hoga? Database ek ko lock deta hai, doosre ko wait karwata hai. Pehla commit kare to doosre ko "seat nahi hai" dikhega. Isi ko locking kehte hain — bina lock ke dono ko seat mil jati.\n\nKam variety wale column par index bekaar hai: jaise gender par index banao to aadhi table ek taraf, aadhi doosri taraf — index se kuch fayda nahi, poori table padhna hi padega. Index wahan kaam karta hai jahan values alag-alag hon, jaise id ya marks.`,
      `What happens if there is a crash in the middle? If the crash happens before COMMIT, the transaction is treated as if it never happened — the database brings back the old data. If the crash happens after COMMIT, the data stays saved — that is durability. For this, the database first writes every change into a log file, and only then into the table.\n\nWhat happens if two people book the last seat at once? The database gives a lock to one and makes the other wait. When the first commits, the second sees "no seat". This is called locking — without a lock, both would get the seat.\n\nAn index on a column with little variety is useless: if you put an index on gender, half the table falls on one side and half on the other — the index gives no benefit, and the whole table must still be read. An index works where the values are different from each other, like id or marks.`,
      `क्रैश बीच में हो जाए तो क्या होगा? अगर क्रैश COMMIT से पहले हुआ, तो ट्रांज़ैक्शन ऐसी मानी जाती है जैसे हुई ही नहीं — डेटाबेस पुराना डेटा वापस ला देता है। अगर क्रैश COMMIT के बाद हुआ, तो डेटा सेव रहता है — यही ड्यूरेबिलिटी है। इसके लिए डेटाबेस हर बदलाव को पहले एक लॉग फ़ाइल में लिखता है, फिर टेबल में।\n\nदो लोग एक साथ आखिरी सीट बुक करें तो क्या होगा? डेटाबेस एक को लॉक देता है, दूसरे को इंतज़ार करवाता है। पहला कमिट करे तो दूसरे को "सीट नहीं है" दिखेगा। इसी को लॉकिंग कहते हैं — बिना लॉक के दोनों को सीट मिल जाती।\n\nकम वैरायटी वाले कॉलम पर इंडेक्स बेकार है: जैसे gender पर इंडेक्स बनाओ तो आधी टेबल एक तरफ़, आधी दूसरी तरफ़ — इंडेक्स से कुछ फ़ायदा नहीं, पूरी टेबल पढ़नी ही पड़ेगी। इंडेक्स वहाँ काम करता है जहाँ वैल्यू अलग-अलग हों, जैसे id या marks।`,
    ),
    sec(
      H_WHATIF[0], H_WHATIF[1], H_WHATIF[2],
      `Agar index hata do, to search slow ho jayega — poori table scan karni padegi. Lekin INSERT tez ho jayega, kyunki index update nahi karna padega. Isiliye raat ko bulk data daalne se pehle log index hata dete hain, aur data daalne ke baad dobara bana lete hain.\n\nAgar transaction ki jagah har step ko alag-alag chala do, to beech mein fail hone par aadha kaam save ho jayega. Paise kat jayenge, judenge nahi. Transaction ka poora matlab hi hai "sab ya kuch nahi" — use todna matlab guarantee todna hai.`,
      `If you remove the index, searching becomes slow — the whole table must be scanned. But INSERT becomes fast, because the index does not need updating. That is why, before loading a large amount of data at night, people remove the index and build it again after the data is in.\n\nIf you run every step separately instead of as a transaction, a failure in the middle leaves half the work saved. The money is taken out but never added. The whole meaning of a transaction is "all or nothing" — breaking it means breaking the guarantee.`,
      `अगर इंडेक्स हटा दो, तो सर्च धीमा हो जाएगा — पूरी टेबल स्कैन करनी पड़ेगी। लेकिन INSERT तेज़ हो जाएगा, क्योंकि इंडेक्स अपडेट नहीं करना पड़ेगा। इसीलिए रात को भारी डेटा डालने से पहले लोग इंडेक्स हटा देते हैं, और डेटा डालने के बाद दोबारा बना लेते हैं।\n\nअगर ट्रांज़ैक्शन की जगह हर कदम को अलग-अलग चला दो, तो बीच में फ़ेल होने पर आधा काम सेव हो जाएगा। पैसे कट जाएँगे, जुड़ेंगे नहीं। ट्रांज़ैक्शन का पूरा मतलब ही है "सब या कुछ नहीं" — उसे तोड़ना मतलब गारंटी तोड़ना है।`,
    ),
    sec(
      H_SUM[0], H_SUM[1], H_SUM[2],
      `Transaction ka matlab hai "sab ya kuch nahi" — BEGIN se COMMIT tak ke steps ek unit hain, fail ho to ROLLBACK. ACID uski chaar guarantees hain: Atomicity, Consistency, Isolation, Durability. Index search ko tez karta hai, lekin writes ko slow karta hai — isliye index sirf search wale columns par banao. Aur UPDATE likhte waqt WHERE kabhi mat bhoolo.`,
      `A transaction means "all or nothing" — the steps from BEGIN to COMMIT are one unit, and if they fail, ROLLBACK. ACID is its four guarantees: Atomicity, Consistency, Isolation, Durability. An index makes searching fast but writes slow — so put an index only on the columns you search. And never forget WHERE when you write UPDATE.`,
      `ट्रांज़ैक्शन का मतलब है "सब या कुछ नहीं" — BEGIN से COMMIT तक के कदम एक इकाई हैं, फ़ेल हो तो ROLLBACK। ACID उसकी चार गारंटी हैं: एटॉमिसिटी, कंसिस्टेंसी, आइसोलेशन, ड्यूरेबिलिटी। इंडेक्स सर्च को तेज़ करता है, लेकिन राइट को धीमा करता है — इसलिए इंडेक्स सिर्फ़ सर्च वाले कॉलम पर बनाओ। और UPDATE लिखते समय WHERE कभी मत भूलो।`,
    ),
  ],
  diagram: {
    kind: 'flow',
    title: t('Transaction ka safar — BEGIN se COMMIT tak', 'The journey of a transaction — from BEGIN to COMMIT', 'ट्रांज़ैक्शन का सफ़र — BEGIN से COMMIT तक'),
    nodes: [
      { t: t('BEGIN', 'BEGIN', 'BEGIN'), s: t('transaction shuru', 'the transaction starts', 'ट्रांज़ैक्शन शुरू') },
      { t: t('UPDATE + INSERT', 'UPDATE + INSERT', 'UPDATE + INSERT'), s: t('dono steps ek saath', 'both steps together', 'दोनों कदम एक साथ') },
      { t: t('COMMIT — pakka', 'COMMIT — permanent', 'COMMIT — पक्का'), s: t('sab kuch save', 'everything is saved', 'सब कुछ सेव') },
      { t: t('ROLLBACK — wapas', 'ROLLBACK — undo', 'ROLLBACK — वापस'), s: t('fail ho to sab wapas', 'if it fails, all is undone', 'फ़ेल हो तो सब वापस') },
    ],
  },
  codeExamples: [
    {
      title: t('Index banao — marks par', 'Make an index — on marks', 'इंडेक्स बनाओ — marks पर'),
      language: 'sql',
      code: `CREATE INDEX idx_marks ON students(marks);
SELECT name, marks FROM students WHERE marks >= 80 ORDER BY marks DESC;`,
      output: 'name | marks\nPriya | 92\nSana | 88\nRahul | 85',
      note: t(
        'Chhoti table par index ka fayda dikhta nahi — result wahi aata hai. Index ka fayda badi table par dikhta hai, jahan bina index ke poori table padhni padti.',
        'On a small table, the benefit of an index does not show — the result is the same. The benefit shows on a big table, where without an index the whole table must be read.',
        'छोटी टेबल पर इंडेक्स का फ़ायदा दिखता नहीं — रिज़ल्ट वही आता है। इंडेक्स का फ़ायदा बड़ी टेबल पर दिखता है, जहाँ बिना इंडेक्स के पूरी टेबल पढ़नी पड़ती।',
      ),
    },
  ],
  mcqs: [
    {
      q: t(
        'Paise transfer mein pehla step ho gaya, doosra fail ho gaya. ACID ke hisaab se kya hona chahiye?',
        'In a money transfer, the first step is done and the second one fails. What should happen under ACID?',
        'पैसे ट्रांसफ़र में पहला कदम हो गया, दूसरा फ़ेल हो गया। ACID के हिसाब से क्या होना चाहिए?',
      ),
      opts: [
        t('Pehla step save rahe, doosra bhool jao', 'The first step stays saved, forget the second', 'पहला कदम सेव रहे, दूसरा भूल जाओ'),
        t('Poora transaction rollback ho — jaise kuch hua hi nahi', 'The whole transaction rolls back — as if nothing happened', 'पूरा ट्रांज़ैक्शन रोलबैक हो — जैसे कुछ हुआ ही नहीं'),
        t('Doosra step baad mein kabhi kar lena', 'Do the second step some other time', 'दूसरा कदम बाद में कभी कर लेना'),
        t('Dono accounts se paise kaat lo', 'Take money from both accounts', 'दोनों खातों से पैसे काट लो'),
      ],
      ans: 1,
      expl: t(
        'Atomicity ka matlab hai "sab ya kuch nahi". Aadha transfer mana hai — rollback se pehla step bhi wapas hota hai, paise gayab nahi hote.',
        'Atomicity means "all or nothing". A half transfer is not allowed — rollback undoes the first step too, so the money does not vanish.',
        'एटॉमिसिटी का मतलब है "सब या कुछ नहीं"। आधा ट्रांसफ़र मना है — रोलबैक से पहला कदम भी वापस होता है, पैसे गायब नहीं होते।',
      ),
    },
    {
      q: t(
        'UPDATE students SET marks = 90; likhne par kya hoga?',
        'What happens when you write UPDATE students SET marks = 90;?',
        'UPDATE students SET marks = 90; लिखने पर क्या होगा?',
      ),
      opts: [
        t('Sirf Rahul ke marks 90 honge', 'Only the marks of Rahul become 90', 'सिर्फ़ राहुल के नंबर 90 होंगे'),
        t('Saare students ke marks 90 ho jayenge', 'The marks of all the students become 90', 'सारे छात्रों के नंबर 90 हो जाएँगे'),
        t('Error aayega', 'It gives an error', 'एरर आएगा'),
        t('Kuch nahi hoga', 'Nothing happens', 'कुछ नहीं होगा'),
      ],
      ans: 1,
      expl: t(
        'Bina WHERE ke UPDATE poori table ko badal deta hai. Isiliye pehle SELECT ... WHERE se check karo, phir UPDATE likho.',
        'An UPDATE without WHERE changes the whole table. That is why you check first with SELECT ... WHERE, and only then write UPDATE.',
        'बिना WHERE के UPDATE पूरी टेबल को बदल देता है। इसीलिए पहले SELECT ... WHERE से जाँचो, फिर UPDATE लिखो।',
      ),
    },
    {
      q: t(
        'Index ka sabse bada nuksaan kya hai?',
        'What is the biggest drawback of an index?',
        'इंडेक्स का सबसे बड़ा नुकसान क्या है?',
      ),
      opts: [
        t('Search slow ho jata hai', 'Searching becomes slow', 'सर्च धीमा हो जाता है'),
        t('Har INSERT, UPDATE aur DELETE slow ho jata hai, kyunki index bhi update hota hai', 'Every INSERT, UPDATE and DELETE becomes slow, because the index is updated too', 'हर INSERT, UPDATE और DELETE धीमा हो जाता है, क्योंकि इंडेक्स भी अपडेट होता है'),
        t('Table chhoti ho jati hai', 'The table becomes small', 'टेबल छोटी हो जाती है'),
        t('Data kho jata hai', 'The data is lost', 'डेटा खो जाता है'),
      ],
      ans: 1,
      expl: t(
        'Index ek alag structure hai — data badle to index bhi badalna padta hai. Isiliye index search ko tez karta hai, lekin likhne ko slow kar deta hai.',
        'An index is a separate structure — when the data changes, the index must change too. So an index makes searching fast but writing slow.',
        'इंडेक्स एक अलग स्ट्रक्चर है — डेटा बदले तो इंडेक्स भी बदलना पड़ता है। इसीलिए इंडेक्स सर्च को तेज़ करता है, लेकिन लिखने को धीमा कर देता है।',
      ),
    },
    {
      q: t(
        'COMMIT ke baad bijli chali jaye to data ka kya hoga?',
        'If the power fails after COMMIT, what happens to the data?',
        'COMMIT के बाद बिजली चली जाए तो डेटा का क्या होगा?',
      ),
      opts: [
        t('Data kho jayega', 'The data is lost', 'डेटा खो जाएगा'),
        t('Data wapas milega — ye durability hai', 'The data comes back — that is durability', 'डेटा वापस मिलेगा — यह ड्यूरेबिलिटी है'),
        t('Aadha data milega', 'Half the data comes back', 'आधा डेटा मिलेगा'),
        t('Database khali ho jayega', 'The database becomes empty', 'डेटाबेस खाली हो जाएगा'),
      ],
      ans: 1,
      expl: t(
        'Durability ka matlab hai: ek baar COMMIT ho jaye, to data hamesha ke liye save hai — bijli jaye ya computer band ho, data wapas aata hai.',
        'Durability means this: once COMMIT is done, the data is saved for ever — whether the power fails or the computer shuts down, the data comes back.',
        'ड्यूरेबिलिटी का मतलब है: एक बार COMMIT हो जाए, तो डेटा हमेशा के लिए सेव है — बिजली जाए या कंप्यूटर बंद हो, डेटा वापस आता है।',
      ),
    },
  ],
  practice: {
    title: t('Transaction mein marks badlo — safe tareeke se', 'Change the marks in a transaction — the safe way', 'ट्रांज़ैक्शन में नंबर बदलो — सुरक्षित तरीके से'),
    task: t(
      'Ek transaction mein Amit (id 3) ke marks 74 se 78 karo: BEGIN likho, phir UPDATE students SET marks = 78 WHERE id = 3 chalao, phir COMMIT likho, aur aakhir mein SELECT se Amit ke marks dikhao. Done tab maanenge jab output mein 3 | Amit | 78 dikhe. Dhyaan do: WHERE id = 3 bhool gaye to saare students ke marks 78 ho jayenge — isiliye pehle SELECT se check karo.',
      'In a transaction, change the marks of Amit (id 3) from 74 to 78: write BEGIN, then run UPDATE students SET marks = 78 WHERE id = 3, then write COMMIT, and at the end show the marks of Amit with SELECT. You are done when the output shows 3 | Amit | 78. Note: if you forget WHERE id = 3, the marks of all the students become 78 — so check first with SELECT.',
      'एक ट्रांज़ैक्शन में अमित (id 3) के नंबर 74 से 78 करो: BEGIN लिखो, फिर UPDATE students SET marks = 78 WHERE id = 3 चलाओ, फिर COMMIT लिखो, और आखिर में SELECT से अमित के नंबर दिखाओ। तब पूरा मानेंगे जब आउटपुट में 3 | Amit | 78 दिखे। ध्यान दो: WHERE id = 3 भूल गए तो सारे छात्रों के नंबर 78 हो जाएँगे — इसीलिए पहले SELECT से जाँचो।',
    ),
    language: 'sql',
    starter: `BEGIN;
UPDATE students SET marks = 78 WHERE id = 3;
COMMIT;
SELECT id, name, marks FROM students WHERE id = 3;`,
    expected: 'id | name | marks\n3 | Amit | 78',
  },
  readMinutes: 11,
};

export const dbms: Subject = {
  id: 'dbms',
  name: t(
    'DBMS (Database Management Systems)',
    'DBMS (Database Management Systems)',
    'डीबीएमएस (डेटाबेस मैनेजमेंट सिस्टम)',
  ),
  tagline: t(
    'Data ko sahi se rakho, tez tareeke se dhoondho, aur kabhi khone mat do.',
    'Store data the right way, find it fast, and never lose it.',
    'डेटा को सही से रखो, तेज़ तरीके से ढूँढो, और कभी खोने मत दो।',
  ),
  icon: '🗄️',
  color: '#f59e0b',
  category: 'cse',
  articles: [
    dbmsIntro,
    dbmsRelational,
    dbmsSelect,
    dbmsJoins,
    dbmsNormalization,
    dbmsTransactions,
  ],
};
