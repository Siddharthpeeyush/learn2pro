// Learn2Pro v2 — C++ Programming subject content.
// All content written by AI in Learn2Pro's own style. Reference sites were
// used for facts only, never for wording or examples.
// C++ examples are real, compilable C++ (verified with g++); the site's
// compiler shows 'runner coming soon' for C++ until a server runner exists.
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

const cppIntro: Article = {
  id: 'cpp-intro',
  subjectId: 'cpp',
  title: t('C++ Kya Hai Aur Pehla Program', 'What is C++ and Your First Program'),
  summary: t(
    'Zero se samjho ki C++ language kya hai, computer isko machine code mein kaise badalta hai, aur apna pehla C++ program line-by-line dry run ke saath likho.',
    'Understand from scratch what the C++ language is, how a computer translates it into machine code, and write your first C++ program with a line-by-line dry run.'
  ),
  sections: [
    {
      heading: t('1. C++ Kya Hai? (What It Is)', '1. What It Is'),
      body: t(
        'Socho tumhe apne computer se koi kaam karwana hai—jaise do numbers add karna ya screen par apna naam dikhana. Problem yeh hai ki computer ke andar jo processor (CPU) laga hai, woh insaano ki bhasha (English ya Hindi) bilkul nahi samajhta. CPU sirf electricity ke switches samajhta hai: ON (1) aur OFF (0). Isko hum Binary ya Machine Language kehte hain. Agar tumhe CPU ko bolna hai ki 2 aur 3 ko jodo, toh binary mein kuch aisa likhna padega: `10110000 00000010`. Ab socho agar poora game ya software aise 0 aur 1 mein likhna pade, toh dimaag ghoom jayega!\n\nYahin par Programming Languages kaam aati hain. C++ ek High-Level aur Middle-Level Programming Language hai jise 1979 mein Bjarne Stroustrup ne Bell Labs mein banaya tha. Unhone pehle se maujood C language ko liya aur usme naye features (jaise Object-Oriented Programming) jode. Isiliye iska naam "C++" rakha gaya, kyunki programming mein `++` ka matlab hota hai "ek kadam aage badhana" (increment).\n\nC++ itni khaas kyun hai? Kyunki yeh tumhe dono duniya ka fayda deti hai: isme code likhna insaano ke liye aasan bhi hai, aur yeh computer ke hardware (RAM aur CPU) ko bilkul direct control karne ki taqat bhi deti hai. Jab tum C++ mein code likhte ho, toh ek translator program jise **Compiler** kehte hain, tumhare poore C++ code ko ek baar mein check karta hai aur seedha CPU ke samajhne layak `0` aur `1` (Machine Code) mein badal deta hai. Beech mein koi rukaawat nahi hoti, isiliye C++ duniya ki sabse fast languages mein se ek hai. Aaj bhi Unreal Engine ke heavy 3D games, Windows aur macOS ke core hisse, Google Chrome browser, aur high-frequency trading systems C++ mein hi banaye jaate hain.',
        'Imagine you want your computer to perform a task—such as adding two numbers or displaying your name on the screen. The challenge is that the processor (CPU) inside your computer does not understand human languages like English. The CPU only understands electrical switches: ON (1) and OFF (0). We call this Binary or Machine Language. If you wanted to instruct the CPU to add 2 and 3 in binary, you would have to write patterns like `10110000 00000010`. Writing an entire game or software application using billions of zeros and ones is practically impossible for humans.\n\nThis is why programming languages exist. C++ is a general-purpose programming language created by Bjarne Stroustrup at Bell Labs starting in 1979. He took the existing C language and added powerful new capabilities, such as Object-Oriented Programming. The name "C++" comes from the `++` operator in C, which means "increment by one"—signifying that C++ is the next step evolution of C.\n\nWhy is C++ so widely used in engineering? Because it gives you the best of both worlds: it is readable enough for humans to build massive software systems, yet low-level enough to control computer hardware (CPU registers and RAM memory) directly. When you write a program in C++, a special translator called a **Compiler** reads your entire source code, checks it for grammar rules, and converts it directly into native machine code (`0`s and `1`s) specifically tailored for your processor. Because there is no middleman slowing it down while the program runs, C++ is extraordinarily fast. Today, 3D game engines like Unreal Engine, operating system kernels, web browsers like Google Chrome, database engines, and spacecraft control systems rely heavily on C++.'
      ),
      code: {
        title: t('Sabse Pehla C++ Program', 'Your Very First C++ Program'),
        language: 'cpp',
        code: `#include <iostream>

int main() {
    std::cout << "Namaste Engineering Students!";
    return 0;
}`,
        output: `Namaste Engineering Students!`
      }
    },
    {
      heading: t('2. Asliyat Mein Iska Example (Real-Life Example)', '2. Real-Life Example'),
      body: t(
        'Chalo C++ aur doosri languages (jaise Python) ke beech ka farq aur Compiler ka kaam ek asaan real-life kahani se samajhte hain.\n\nMaan lo tumhare paas ek French recipe book hai, aur tumhara cook sirf Hindi samajhta hai. Ab khana banwane ke do tareeke hain:\n1. **Interpreter Tareeka (Jaise Python):** Tum ek translator ko kitchen mein khada kar do. Woh French book ki pehli line padhega, Hindi mein translate karega, aur cook woh step karega. Phir doosri line padhega, translate karega, aur cook karega. Agar tumhe roz wohi dish banwani hai, toh roz translator ko har line translate karne mein time lagega. Khana dhire banega.\n2. **Compiler Tareeka (Jaise C++):** Tum us French book ko ek baar translator ko de do. Translator baith kar poori book check karega ki kahin koi galti toh nahi hai, aur poori book ko ek nayi Hindi notebook mein likh kar cook ko de dega. Ab jab khana banana hai, toh translator ki koi zaroorat nahi! Cook seedha Hindi notebook padhega aur superfast speed se khana bana dega.\n\nYahan tumhara likha hua C++ code (`hello.cpp`) woh French recipe hai. **g++ Compiler** woh translator hai, aur jo nayi file banti hai (Executable file), woh Hindi notebook (Machine Code) hai jise CPU bina ruke dhada-dhad chalata hai.\n\nEk aur example dekho: Car chalana. Automatic scooty chalana bahut aasan hai (jaise Python), bas accelerator ghumao aur chalo, par tum usme heavy pahaad (mountains) par racing ya drifting nahi kar sakte. Wahi Formula-1 manual racing car (jaise C++) mein tumhe clutch, gear, aur engine RPM khud sambhalna padta hai. Shuru mein seekhna thoda dhyan maangta hai, par ek baar samajh aa gaya toh uski speed aur control ka koi muqabla nahi kar sakta!',
        'Let us understand how C++ works and how a compiler operates using an everyday analogy.\n\nSuppose you have a cookbook written in French, and your chef only understands English. You have two ways to prepare the meal:\n1. **The Interpreter Approach (like Python):** You hire a live translator to stand in the kitchen. The translator reads line 1 in French, translates it aloud into English, and the chef performs step 1. Then the translator reads line 2, translates it, and the chef performs step 2. Every single time you want to cook this dish, the live translator must stand there and translate every line again. It works, but the live translation adds a delay at every step.\n2. **The Compiler Approach (like C++):** Before entering the kitchen, you hand the entire French cookbook to a professional translator. They inspect the entire book from start to finish to make sure no pages are missing, translate the whole book into a crisp English booklet, and hand that booklet to the chef. Now, the translator can go home! Whenever the chef needs to cook, they read the English booklet directly at maximum speed with zero waiting time.\n\nIn this analogy, your C++ source code (`hello.cpp`) is the French recipe. The **C++ Compiler** is the translator that checks the whole code and produces an **Executable file** (the English booklet made of binary machine code) that your CPU runs directly.\n\nConsider one more analogy: driving an automatic scooter versus a manual Formula-1 race car. An automatic scooter (like high-level scripting languages) handles gears behind the scenes so you can ride effortlessly, but at the cost of raw speed and fine control. C++ is like a manual race car—you control the gears and engine directly. It requires learning how the machine works underneath, but in return, it gives you unmatched performance and precision.'
      )
    },
    {
      heading: t('3. Step-by-Step: Code Kaise Kaam Karta Hai (Worked Examples + Full Dry Run)', '3. Step-by-Step: How the Code Works (Worked Examples + Full Dry Run)'),
      body: t(
        'Jab bhi hum C++ ka koi program dekhte hain, uski har ek line aur har ek nishaan (symbol) ka ek pakka matlab hota hai. Pehle hum basic building blocks samajhte hain:\n\n- `#include <iostream>`: Isko **Header File** ya Preprocessor Directive kehte hain. C++ language ka core hissa bahut chhota hota hai—usko khud se yeh bhi nahi pata ki screen par kuch print kaise karte hain! `<iostream>` (Input-Output Stream) ek readymade toolbox hai jiske andar screen par dikhane (`cout`) aur keyboard se input lene (`cin`) ke auzar rakhe hain. `#include` bolta hai: "Mere program ko chalane se pehle yeh `<iostream>` wala toolbox mere code mein jod do."\n- `int main()`: Yeh tumhare program ka **Main Gate (Entry Point)** hai. Chahe tumhara program 10 lines ka ho ya 10,000 lines ka, jab computer program chalana shuru karta hai, woh hamesha sabse pehle `main()` ko dhoondhta hai aur uske andar likhi pehli line se shuruat karta hai. `int` ka matlab hai ki jab yeh kaam khatam karega, toh Operating System ko ek integer (whole number) wapas bhejega.\n- `{` aur `}` (Curly Braces): Yeh `main()` ki deewarein hain. `{` batata hai ki `main` ka kamra yahan se shuru hua, aur `}` batata hai ki yahan khatam hua.\n- `std::cout << "..." ;`: `std` ka matlab hai "Standard Library" ka kamra (namespace). `cout` ka matlab hai **Character Output** (yani humari monitor screen). Aur `<<` (Insertion Operator) ek teer (arrow) jaisa dikhta hai—yeh apne right side mein likhe text ko uthata hai aur left side mein rakhe `cout` (screen) ke andar dhakel deta hai.\n- `;` (Semicolon): Jaise English mein sentence khatam hone par full stop (`.`) lagate hain, waise hi C++ mein har instruction (statement) khatam hone par `;` lagana zaroori hai.\n- `return 0;`: Jab program bina kisi error ke poora chal jaata hai, toh `return 0` Operating System (Windows/Linux) ko batata hai: "Sab badhiya raha, 0 errors aaye, ab program band kar do."\n\nChalo ab 3 alag-alag C++ programs dekhte hain aur unka **Line-by-Line Full Dry Run** karte hain.',
        'Every word and symbol in a C++ program has a strict purpose. Before we trace our examples, let us break down the core components of a C++ program:\n\n- `#include <iostream>`: This is a **Preprocessor Directive**. The core C++ language is intentionally minimal—by itself, it does not even know how to print text to a monitor! `<iostream>` (which stands for Input-Output Stream) is a standard library toolbox containing the tools needed to display output (`cout`) and read keyboard input (`cin`). Writing `#include <iostream>` tells the compiler to attach this toolbox to your program before compiling.\n- `int main()`: This is the **Entry Point** (front door) of every C++ program. Whether your project has 5 lines or 50,000 lines, the operating system always begins execution at the very first statement inside `main()`. The word `int` indicates that this function will return an integer status code back to the operating system when it finishes.\n- `{` and `}` (Curly Braces): These define the body block of `main()`. Everything between the opening brace `{` and closing brace `}` belongs to `main`.\n- `std::cout << "..." ;`: Here, `std` stands for the **Standard** namespace, `cout` stands for **Character Output** (representing your console screen), and `<<` is the **Stream Insertion Operator**. Notice how `<<` looks like arrows pointing to the left—it takes the data on its right and pushes it into `std::cout` (the screen) on its left.\n- `;` (Semicolon): Just as an English sentence ends with a period (`.`), every actionable statement in C++ must end with a semicolon (`;`).\n- `return 0;`: This sends the integer `0` back to the operating system. By convention in computing, an exit code of `0` means "The program finished cleanly with zero errors."\n\nNow let us examine 3 complete C++ examples and perform a **Full Line-by-Line Dry Run** of each.'
      ),
      code: {
        title: t('Worked Example 1: Do Alag Statements vs Newline (\\n)', 'Worked Example 1: Two Separate Statements vs Newline (\\n)'),
        language: 'cpp',
        code: `#include <iostream>

int main() {
    std::cout << "Hello ";
    std::cout << "World!\\n";
    std::cout << "Welcome to C++";
    return 0;
}`,
        output: `Hello World!
Welcome to C++`
      }
    },
    {
      heading: t('Step-by-Step Dry Run (Examples 1, 2, aur 3)', 'Step-by-Step Dry Run (Examples 1, 2, and 3)'),
      body: t(
        '### Worked Example 1 ka Full Dry Run:\nBahut saare naye students sochte hain ki agar hum do alag-alag lines mein `std::cout` likhenge, toh output bhi apne aap do alag lines mein aayega. Chalo dekhte hain computer andar kya karta hai (Screen Cursor ki position track karte hain):\n- **Line 1 (`#include <iostream>`):** Compiler ne `<iostream>` toolbox load kiya. Screen abhi khaali hai. `Cursor: [Line 1, Column 1]`.\n- **Line 3 (`int main() {`):** OS ne program start kiya aur `main` ke andar dakhil hua.\n- **Line 4 (`std::cout << "Hello ";`):** `"Hello "` (dhyaan do `o` ke baad space hai) screen par gaya. Kyunki humne nayi line par jaane ka koi instruction nahi diya, cursor usi line par ruka rehta hai! `Screen: Hello _`, `Cursor: [Line 1, Column 7]`.\n- **Line 5 (`std::cout << "World!\\n";`):** Ab `"World!"` wahin se print hona shuru hoga jahan cursor ruka tha (yani `"Hello "` ke turant baad). Iske aage `\\n` (Newline escape character) laga hai. `\\n` screen par chhapta nahi hai, balki cursor ko utha kar agli line ke shuru mein bhej deta hai! `Screen Line 1: Hello World!`, `Cursor: [Line 2, Column 1]`.\n- **Line 6 (`std::cout << "Welcome to C++";`):** Cursor ab Line 2 par hai, toh `"Welcome to C++"` doosri line par print hota hai. `Screen Line 2: Welcome to C++_`.\n- **Line 7 (`return 0;`):** Program OS ko `0` bhej kar safalta se band ho jaata hai.\n\n---\n\n### Worked Example 2: Variables aur Calculation ka Dry Run\nAb niche diye gaye code block mein hum memory ke andar do dabbe (variables) banayenge aur dekhenge ki har line par RAM memory mein unki values kaise badalti hain:\n- **Line 4 (`int a = 10;`):** RAM mein `a` naam ka integer dabba bana aur usme `10` store ho gaya. State: `a = 10`.\n- **Line 5 (`int b = 25;`):** RAM mein `b` naam ka doosra dabba bana aur usme `25` store ho gaya. State: `a = 10, b = 25`.\n- **Line 6 (`int sum = a + b;`):** CPU ne pehle right side (`a + b`) solve kiya: `10 + 25 = 35`. Phir yeh `35` naye dabbe `sum` mein daal diya. State: `a = 10, b = 25, sum = 35`.\n- **Line 7 (`std::cout << "Initial sum: " << sum << "\\n";`):** Dekho humne ek hi `cout` mein teen `<<` lagaye (isko **Chaining** kehte hain). Pehle `"Initial sum: "` print hua, phir `sum` dabbe ke andar ki value (`35`) print hui, aur phir `\\n` ne line badal di. Output: `Initial sum: 35`.\n- **Line 8 (`a = 50;`):** Dabbe `a` ki purani value (`10`) mit gayi aur nayi value `50` aa gayi! Lekin dhyan do: kya `sum` apne aap badla? **Nahi!** Computer khud se purani lines dobara nahi chalata. State: `a = 50, b = 25, sum = 35`.\n- **Line 9 (`std::cout << "Sum before recalculating: " << sum << "\\n";`):** Screen par abhi bhi `35` hi print hoga.\n- **Line 10 (`sum = a + b;`):** Ab humne dobara `a + b` (`50 + 25 = 75`) calculate karwake `sum` mein daala. Ab state: `a = 50, b = 25, sum = 75`.\n- **Line 11 (`std::cout << "Updated sum: " << sum << "\\n";`):** Screen par `Updated sum: 75` print hota hai.',
        '### Full Dry Run of Worked Example 1:\nMany beginners assume that writing two separate `std::cout` statements on different lines in the code will automatically print the text on two separate lines on the screen. Let us trace the exact position of the screen cursor line by line:\n- **Line 1 (`#include <iostream>`):** The compiler loads the input/output definitions. The screen is blank. `Cursor: [Line 1, Column 1]`.\n- **Line 3 (`int main() {`):** Execution begins inside `main`.\n- **Line 4 (`std::cout << "Hello ";`):** The characters `"Hello "` (including the trailing space) are sent to the screen. Because we did not instruct the cursor to move to a new line, it stays right after the space! `Screen: Hello _`, `Cursor: [Line 1, Column 7]`.\n- **Line 5 (`std::cout << "World!\\n";`):** `"World!"` prints starting immediately where the cursor was waiting (right after `"Hello "`). Next comes `\\n` (the newline escape character). Instead of printing literally on the screen, `\\n` moves the cursor to the beginning of the next line. `Screen Line 1: Hello World!`, `Cursor: [Line 2, Column 1]`.\n- **Line 6 (`std::cout << "Welcome to C++";`):** Since the cursor is now at Line 2, Column 1, `"Welcome to C++"` prints on the second line.\n- **Line 7 (`return 0;`):** Execution finishes and returns status `0` to the OS.\n\n---\n\n### Worked Example 2: Tracing Variables and Memory State\nIn the code block below, we create three integer variables in RAM and trace how their values change step by step:\n- **Line 4 (`int a = 10;`):** A memory box named `a` is created and stores `10`. Memory state: `a = 10`.\n- **Line 5 (`int b = 25;`):** A second memory box named `b` is created and stores `25`. Memory state: `a = 10, b = 25`.\n- **Line 6 (`int sum = a + b;`):** The CPU evaluates `a + b` (`10 + 25 = 35`) and stores `35` in `sum`. Memory state: `a = 10, b = 25, sum = 35`.\n- **Line 7 (`std::cout << "Initial sum: " << sum << "\\n";`):** Using multiple `<<` operators in one statement is called **chaining**. First `"Initial sum: "` prints, followed by the value inside `sum` (`35`), followed by a newline.\n- **Line 8 (`a = 50;`):** The value inside `a` is overwritten with `50`. Notice what happens to `sum`: **nothing!** C++ executes sequentially from top to bottom; changing `a` on Line 8 does not retroactively re-run Line 6. Memory state: `a = 50, b = 25, sum = 35`.\n- **Line 9 (`std::cout << "Sum before recalculating: " << sum << "\\n";`):** Prints `35` because `sum` has not been updated yet.\n- **Line 10 (`sum = a + b;`):** Now the CPU recalculates `50 + 25 = 75` and updates `sum`. Memory state: `a = 50, b = 25, sum = 75`.\n- **Line 11 (`std::cout << "Updated sum: " << sum << "\\n";`):** Prints `Updated sum: 75`.'
      ),
      code: {
        title: t('Worked Example 2: Memory Trace aur Sequential Execution', 'Worked Example 2: Memory Trace and Sequential Execution'),
        language: 'cpp',
        code: `#include <iostream>

int main() {
    int a = 10;
    int b = 25;
    int sum = a + b;
    std::cout << "Initial sum: " << sum << "\\n";
    a = 50;
    std::cout << "Sum before recalculating: " << sum << "\\n";
    sum = a + b;
    std::cout << "Updated sum: " << sum << "\\n";
    return 0;
}`,
        output: `Initial sum: 35
Sum before recalculating: 35
Updated sum: 75`
      }
    },
    {
      heading: t('4. Common Mistakes Aur Woh Kyun Hoti Hain (Why They Happen)', '4. Common Mistakes and Why They Happen'),
      body: t(
        'Jab tum pehli baar C++ likhoge, toh compiler error messages dikhayega. Ghabrana mat—har error ke peeche computer ka ek solid reason hota hai:\n\n1. **Semicolon (`;`) bhool jaana:**\n   - **Galti:** `std::cout << "Hi"` likh kar agli line par `return 0;` likh dena.\n   - **Computer ke andar kya galat hota hai (WHY):** C++ compiler tumhare code mein "Enter" (new line) ya spaces ko statement ka ant nahi maanta! Compiler ke liye poora code ek lambi patti jaisa hai. Jab woh `;` nahi dekhta, toh woh agli line (`return 0;`) ko pichli line ke saath chipka deta hai aur padhta hai: `std::cout << "Hi" return 0;`. Ab compiler baukhla jaata hai ki `"Hi"` ke turant baad `return` shabd ka kya matlab hai, aur bolta hai: `error: expected \';\' before \'return\'`.\n\n2. **Double Quotes (`"x"`) aur Bina Quotes (`x`) mein farq na samajhna:**\n   - **Galti:** Maan lo `int score = 95;` banaya, aur print karte waqt `std::cout << "score";` likh diya.\n   - **Computer ke andar kya galat hota hai (WHY):** Jab bhi compiler ko double quotes `"..."` dikhte hain, woh apna dimaag lagana band kar deta hai aur quotes ke andar jo bhi akshar likhe hain unko **String Literal** (as-it-is text) maan kar screen par chhaap deta hai. Woh RAM memory mein `score` naam ka dabba dhoondhne hi nahi jaata! Agar dabbe ki value (`95`) chahiye, toh bina quotes ke `std::cout << score;` likhna padega.\n\n3. **Case Sensitivity ki galti (`Main` ya `COUT` likhna):**\n   - **Galti:** `int Main()` ya `std::COUT` likhna.\n   - **Computer ke andar kya galat hota hai (WHY):** Computer ke andar har akshar ka ek number (ASCII code) hota hai. Capital `M` ka number `77` hai aur small `m` ka number `109` hai. Compiler ke liye `Main` aur `main` do bilkul alag shabd hain. Jab linker program start karne ke liye `main` (109-97-105-110) dhoondhta hai aur usey nahi milta, toh woh `undefined reference to \'main\'` error de deta hai.\n\n4. **`<<` ki jagah `>>` laga dena (`std::cout >> "Hi";`):**\n   - **Computer ke andar kya galat hota hai (WHY):** Operators data ke behne ki disha (direction of flow) dikhate hain. `cout` screen hai—screen ke *andar* data bhejna hota hai (`cout << data`), screen *se* data nikaal kar `"Hi"` mein nahi daal sakte!',
        'When you write your first C++ programs, you will encounter compiler errors. Understanding what the compiler is actually doing internally makes fixing them effortless:\n\n1. **Forgetting the Semicolon (`;`):**\n   - **The Mistake:** Writing `std::cout << "Hi"` and moving to the next line `return 0;` without a semicolon.\n   - **Why It Happens Internally:** The C++ compiler ignores line breaks and spaces (whitespace) when parsing statements! Until it sees a semicolon `;`, it assumes the current instruction is still going. So it merges the two lines together and reads `std::cout << "Hi" return 0;`. The parser then crashes on the word `return` because `return` makes no grammatical sense right after `"Hi"`, reporting `error: expected \';\' before \'return\'`.\n\n2. **Confusing `"variable"` (with quotes) and `variable` (without quotes):**\n   - **The Mistake:** Declaring `int score = 95;` and writing `std::cout << "score";` expecting `95` to print.\n   - **Why It Happens Internally:** Double quotes `"..."` create a **String Literal**. Anything inside double quotes is treated as raw character bytes to be copied verbatim to the screen—the compiler does not look up variable names in memory inside quotes. When you omit quotes (`std::cout << score;`), the compiler treats `score` as an identifier, looks up its memory address in RAM, fetches the number `95`, and prints `95`.\n\n3. **Case Sensitivity (`Main` or `COUT`):**\n   - **The Mistake:** Writing `int Main()` or `std::COUT`.\n   - **Why It Happens Internally:** Computers store characters as numeric ASCII codes. Uppercase `\'M\'` is `77`, while lowercase `\'m\'` is `109`. To the compiler and linker, `Main` and `main` are completely different binary symbols. When the operating system startup routine looks for the exact symbol `main` and cannot find it, linking fails with `undefined reference to \'main\'`.\n\n4. **Pointing arrows the wrong way (`std::cout >> "Hi";`):**\n   - **Why It Happens Internally:** The arrows indicate the direction of data flow. `std::cout` represents the output screen. Data must flow *into* the screen (`std::cout << "Hi"`). Writing `>>` asks the compiler to pull data *out of* the screen and store it into `"Hi"`, which is impossible.'
      ),
      code: {
        title: t('Worked Example 3: Text ("a + b") vs Asli Calculation (a + b)', 'Worked Example 3: String Literal ("a + b") vs Actual Expression (a + b)'),
        language: 'cpp',
        code: `#include <iostream>

int main() {
    int a = 12;
    int b = 8;
    std::cout << "a + b" << "\\n";
    std::cout << a + b << "\\n";
    std::cout << "a + b = " << a + b << "\\n";
    return 0;
}`,
        output: `a + b
20
a + b = 20`
      }
    },
    {
      heading: t('5. Edge Cases (Khaas Situations Aur Unka Asli Output)', '5. Edge Cases (Special Situations and Their Real Output)'),
      body: t(
        'Ab dekhte hain kuch aisi tricky situations (Edge Cases) jahan students aksar confuse ho jaate hain ya viva/interviews mein pooch liya jaata hai:\n\n1. **Edge Case 1: Agar `return 0;` ke baad bhi code likh dein toh kya hoga? (Unreachable Code)**\n   Jaise hi `main()` ke andar `return 0;` chalta hai, control turant function se bahar nikal kar Operating System ke paas wapas chala jaata hai. Uske niche likhi hui koi bhi line kabhi nahi chalegi (aur na hi error aayegi, bas woh ignore ho jayegi).\n\n2. **Edge Case 2: Agar hum `main()` mein `return 0;` likhna hi bhool jayein toh?**\n   C++ ke har normal function mein agar return type `int` hai aur tum `return` na likho, toh gadbad hoti hai. **Lekin `main()` ek special exception hai!** C++ Standard ke mutabiq, agar control `main()` ke aakhiri curly brace `}` tak pahunch jaaye aur wahan `return 0;` na likha ho, toh C++ compiler khud chupke se `return 0;` jod deta hai.\n\n3. **Edge Case 3: Agar string ke andar hi Double Quote (`"`) ya Backslash (`\\`) print karna ho toh?**\n   Agar tum `std::cout << "He said "Hello"";` likhoge, toh compiler `He said "` ke baad wale quote ko dekh kar sochega ki string khatam ho gayi! Isiliye special characters print karne ke liye unke aage backslash (`\\`) lagate hain, jaise `\\"` aur `\\\\`.\n\n4. **Edge Case 4: `/* ... */` aur `//` Comments ka asar:**\n   Comments (`//` single line, `/* */` multi-line) ko compiler bilkul gayab (strip) kar deta hai. Agar tum kisi code line ke aage `//` laga do, toh woh machine code mein banta hi nahi hai.\n\nNiche diye gaye real C++ code aur uske exact output mein yeh saare edge cases ek saath dekho:',
        'Let us explore important edge cases that frequently surprise beginners or appear in lab exams and interviews:\n\n1. **Edge Case 1: Code written after `return 0;` (Unreachable Code)**\n   The moment `return 0;` executes inside `main()`, the function terminates immediately and hands control back to the operating system. Any statements written after `return 0;` inside the same block are completely ignored at runtime.\n\n2. **Edge Case 2: What happens if you omit `return 0;` inside `main()`?**\n   In standard C++, `main()` has a unique rule: if execution reaches the closing brace `}` of `main()` without encountering a `return` statement, the compiler automatically inserts an implicit `return 0;` for you. (Still, writing `return 0;` explicitly is considered clean engineering practice.)\n\n3. **Edge Case 3: Printing double quotes (`"`) or backslashes (`\\`) inside text**\n   If you write `std::cout << "He said "Hello"";`, the compiler thinks the string ends right before `Hello`, causing a syntax error. To print a literal quote or backslash, you must **escape** it with a preceding backslash: `\\"` prints `"`, and `\\\\` prints a single `\\`.\n\n4. **Edge Case 4: Comments (`//` and `/* ... */`) are completely stripped**\n   Before compiling, the preprocessor replaces every comment with a single space. Even if you put valid C++ code inside `//`, the CPU never sees it.\n\nSee all of these edge cases in action in the runnable code below:'
      ),
      code: {
        title: t('Edge Cases Demonstration Code', 'Edge Cases Demonstration Code'),
        language: 'cpp',
        code: `#include <iostream>

int main() {
    // Edge Case 3: Escaping quotes and backslashes
    std::cout << "She said, \\"C++ is fast!\\"\\n";
    std::cout << "Folder path: C:\\\\Users\\\\Student\\n";

    // Edge Case 4: Commented-out code is completely ignored
    // std::cout << "I am inside a comment, so I will not print!\\n";

    std::cout << "Before return 0\\n";
    return 0;

    // Edge Case 1: Unreachable code after return 0
    std::cout << "After return 0 - This line NEVER runs!\\n";
}`,
        output: `She said, "C++ is fast!"
Folder path: C:\\Users\\Student
Before return 0`
      }
    },
    {
      heading: t('6. Kya Hoga Agar Hum Yeh Badal Dein? (What If You Change This?)', '6. What If You Change This?'),
      body: t(
        'Coding seekhne ka sabse best tareeka hai code mein chhed-chhaad karke dekhna ki output kaise badalta hai. Chalo 3 experiments karte hain:\n\n- **Experiment 1: Agar hum har `\\n` ko hata kar uski jagah `\\t` laga dein toh?**\n  `\\t` ka matlab hota hai **Horizontal Tab** (4 se 8 spaces ka barabar gap). Jab hum `\\n` ki jagah `\\t` lagate hain, toh cursor nayi line par jaane ke bajaye usi line mein ek bada tab-space chhod kar aage badh jaata hai. Isse hum table jaise columns bana sakte hain!\n- **Experiment 2: Agar hum `using namespace std;` sabse upar likh dein toh?**\n  Abhi tak hum baar-baar `std::cout` likh rahe the. Agar hum `#include <iostream>` ke niche `using namespace std;` likh dein, toh hum compiler ko bol rahe hain: "Bhai, main jo bhi cheez use karoon, usey pehle se `std` kamre ka hi maan lena." Iske baad hum seedha `cout` likh sakte hain, `std::` lagane ki zaroorat nahi padegi.\n- **Experiment 3: Agar hum maths expression mein brackets `()` laga dein toh?**\n  Agar hum `10 + 5 * 2` print karein, toh BODMAS rule ke hisaab se pehle multiply (`5 * 2 = 10`) hota hai, phir addition (`10 + 10 = 20`). Par agar hum `(10 + 5) * 2` kar dein, toh pehle bracket solve hoga (`15 * 2 = 30`).\n\nNiche wale code mein in teeno badlaav ka asli output dekho:',
        'The fastest way to master programming is to experiment with changes and observe how the output shifts. Let us run 3 experiments:\n\n- **Experiment 1: What if we replace `\\n` (newline) with `\\t` (tab)?**\n  `\\t` is the **Horizontal Tab** escape sequence. Instead of moving the cursor to the next line, it advances the cursor to the next tab stop on the same line, allowing you to align output into neat columns.\n- **Experiment 2: What if we add `using namespace std;` at the top?**\n  Instead of typing `std::cout` every time, adding `using namespace std;` after `#include <iostream>` tells the compiler to automatically look inside the `std` namespace. You can then write `cout` directly.\n- **Experiment 3: What if we add parentheses `()` to an arithmetic expression inside `cout`?**\n  Without parentheses, `10 + 5 * 2` evaluates multiplication first (`5 * 2 = 10`, then `10 + 10 = 20`). Changing it to `(10 + 5) * 2` forces addition to happen first, producing `30`.\n\nSee the exact output of all three modifications below:'
      ),
      code: {
        title: t('Modified Code: \\t, using namespace std, aur Brackets', 'Modified Code: \\t, using namespace std, and Parentheses'),
        language: 'cpp',
        code: `#include <iostream>
using namespace std;

int main() {
    // Experiment 1 & 2: Using cout directly and \\t for tab alignment
    cout << "Roll\\tName\\tMarks\\n";
    cout << "101\\tAarav\\t92\\n";

    // Experiment 3: Changing operator precedence with parentheses
    cout << "Without brackets: " << 10 + 5 * 2 << "\\n";
    cout << "With brackets: " << (10 + 5) * 2 << "\\n";
    return 0;
}`,
        output: `Roll	Name	Marks
101	Aarav	92
Without brackets: 20
With brackets: 30`
      }
    },
    {
      heading: t('7. Summary (Ab Tak Humne Kya Seekha)', '7. Summary'),
      body: t(
        'Is pehle article mein humne C++ ki buniyaad (foundation) rakhi hai:\n- **C++ ek compiled language hai:** Bjarne Stroustrup dwara banayi gayi yeh language compiler ki madad se seedha CPU ke `0` aur `1` (Machine Code) mein badalti hai, jisse yeh behad fast chalti hai.\n- **Header Files (`#include <iostream>`):** Yeh humare program mein input aur output karne ke tools jodti hai.\n- **Entry Point (`int main()`):** Har C++ program ki shuruat hamesha `main()` function ke pehle instruction se hoti hai.\n- **Screen Output (`std::cout <<`):** Insertion operator `<<` data ko utha kar screen (`cout`) ki taraf bhejta hai. Nayi line ke liye `\\n` ya `std::endl` ka istemal hota hai.\n- **Semicolon (`;`) aur Return (`return 0;`):** Har statement `;` se khatam hota hai aur `return 0;` OS ko batata hai ki program bina kisi galti ke poora ho gaya.\n\nAgle article mein hum seekhenge ki apne computer par C++ compiler (`g++`) kaise lagayein aur terminal se code compile karke kaise chalayein!',
        'In this opening article, we built our foundation in C++:\n- **C++ is a compiled language:** Created by Bjarne Stroustrup, C++ translates source code directly into native machine code (`0`s and `1`s) via a compiler, delivering top-tier execution speed and hardware control.\n- **Header Files (`#include <iostream>`):** Imports the standard input-output stream library so your program can communicate with the screen and keyboard.\n- **Entry Point (`int main()`):** Execution of every C++ program always begins at the top of the `main()` function.\n- **Console Output (`std::cout <<`):** The insertion operator `<<` sends data to the standard character output stream (`std::cout`). Newlines are created explicitly using `\\n` or `std::endl`.\n- **Statement Termination and Exit Status:** Every statement ends with a semicolon (`;`), and `return 0;` informs the operating system that the program succeeded.\n\nIn the next article, we will learn how to install the `g++` compiler and compile and run C++ files from the terminal.'
      )
    }
  ],
  diagram: {
    kind: 'boxes',
    title: t('C++ Code Se Screen Output Tak Ka Safar', 'Journey of C++ Code from Source to Screen Output'),
    caption: t(
      'Dekho kaise tumhara likha hua C++ code Preprocessor aur Compiler se guzar kar CPU par chalta hai.',
      'See how your human-readable C++ source code passes through the Preprocessor and Compiler before running on the CPU.'
    ),
    nodes: [
      {
        t: t('1. Source Code (hello.cpp)', '1. Source Code (hello.cpp)'),
        s: t('Insaan ka likha C++ code (#include, main)', 'Human-written C++ code (#include, main)')
      },
      {
        t: t('2. Preprocessor', '2. Preprocessor'),
        s: t('<iostream> jodta hai aur comments hatata hai', 'Attaches <iostream> and strips comments')
      },
      {
        t: t('3. g++ Compiler', '3. g++ Compiler'),
        s: t('Grammar check karke Machine Code (0/1) banata hai', 'Checks syntax and translates to Machine Code (0/1)')
      },
      {
        t: t('4. CPU Execution & Screen', '4. CPU Execution & Screen'),
        s: t('int main() se chalta hai aur cout print karta hai', 'Runs from int main() and prints cout to screen')
      }
    ]
  },
  codeExamples: [
    {
      title: t('Student ID Card Generator (Chaining & Formatting)', 'Student ID Card Generator (Chaining & Formatting)'),
      language: 'cpp',
      code: `#include <iostream>

int main() {
    int semester = 1;
    int year = 2026;

    std::cout << "==============================\\n";
    std::cout << "   LEARN2PRO ENGINEERING ID   \\n";
    std::cout << "==============================\\n";
    std::cout << "Subject\\t\\t: C++ Programming\\n";
    std::cout << "Semester\\t: " << semester << "\\n";
    std::cout << "Batch Year\\t: " << year << "\\n";
    std::cout << "Status\\t\\t: Ready to Code!\\n";
    std::cout << "==============================\\n";
    return 0;
}`,
      output: `==============================
   LEARN2PRO ENGINEERING ID   
==============================
Subject		: C++ Programming
Semester	: 1
Batch Year	: 2026
Status		: Ready to Code!
==============================`
    },
    {
      title: t('Rectangle Area aur Perimeter Calculation', 'Rectangle Area and Perimeter Calculation'),
      language: 'cpp',
      code: `#include <iostream>

int main() {
    int length = 15;
    int width = 6;
    int area = length * width;
    int perimeter = 2 * (length + width);

    std::cout << "Length: " << length << ", Width: " << width << "\\n";
    std::cout << "Area of Rectangle: " << area << "\\n";
    std::cout << "Perimeter of Rectangle: " << perimeter << "\\n";
    return 0;
}`,
      output: `Length: 15, Width: 6
Area of Rectangle: 90
Perimeter of Rectangle: 42`
    }
  ],
  mcqs: [
    {
      q: t(
        'Niche diye gaye C++ code ka exact output kya hoga?\n```cpp\n#include <iostream>\nint main() {\n    int x = 5;\n    std::cout << "x" << x << x + 2;\n    return 0;\n}\n```',
        'What will be the exact output of the following C++ code?\n```cpp\n#include <iostream>\nint main() {\n    int x = 5;\n    std::cout << "x" << x << x + 2;\n    return 0;\n}\n```'
      ),
      opts: [
        t('x57', 'x57'),
        t('557', '557'),
        t('x 5 7', 'x 5 7'),
        t('x55+2', 'x55+2')
      ],
      ans: 0,
      expl: t(
        'Trace karo: Sabse pehle `"x"` double quotes mein hai, toh woh as-it-is akshar `x` print karega. Uske baad `x` bina quotes ke hai, toh variable `x` ki value `5` print hogi (bina kisi space ke, kyunki humne space nahi diya). Phir `x + 2` solve hokar `5 + 2 = 7` print karega. Milakar output bana: `x57`.',
        'Trace step-by-step: First, `"x"` is inside double quotes, so it prints the literal character `x`. Second, `x` without quotes prints the value stored in variable `x`, which is `5` (with no space in between because none was specified). Third, `x + 2` evaluates `5 + 2 = 7` and prints `7`. Combined output: `x57`.'
      )
    },
    {
      q: t(
        'Is code ko chalane par kya print hoga?\n```cpp\n#include <iostream>\nint main() {\n    int p = 10;\n    int q = p + 5;\n    p = 20;\n    std::cout << q;\n    return 0;\n}\n```',
        'What will be printed when this code runs?\n```cpp\n#include <iostream>\nint main() {\n    int p = 10;\n    int q = p + 5;\n    p = 20;\n    std::cout << q;\n    return 0;\n}\n```'
      ),
      opts: [
        t('25', '25'),
        t('15', '15'),
        t('20', '20'),
        t('Compiler Error', 'Compiler Error')
      ],
      ans: 1,
      expl: t(
        'Line-by-line dry run: Pehle `p = 10` bana. Agli line par `q = p + 5` chala, jisse `q` ke dabbe mein `10 + 5 = 15` store ho gaya. Uske baad `p = 20` hua, par `q` ko dobara calculate nahi kiya gaya. Isliye `q` ke andar abhi bhi `15` hi rakha hai.',
        'Line-by-line trace: First, `p` becomes `10`. On the next line, `q = p + 5` evaluates `10 + 5` and stores `15` inside `q`. Later, `p` is changed to `20`, but C++ does not retroactively re-run previous lines. Therefore, `q` still holds `15`.'
      )
    },
    {
      q: t(
        'Niche diye gaye code mein kitni lines screen par dikhengi?\n```cpp\n#include <iostream>\nint main() {\n    std::cout << "Line A\\n";\n    return 0;\n    std::cout << "Line B\\n";\n}\n```',
        'How many lines will be displayed on the screen by the following code?\n```cpp\n#include <iostream>\nint main() {\n    std::cout << "Line A\\n";\n    return 0;\n    std::cout << "Line B\\n";\n}\n```'
      ),
      opts: [
        t('Sirf 1 line: Line A', 'Only 1 line: Line A'),
        t('2 lines: Line A aur Line B', '2 lines: Line A and Line B'),
        t('Kuch nahi chhapega, Compiler Error aayegi', 'Nothing will print; it causes a Compiler Error'),
        t('Sirf 1 line: Line B', 'Only 1 line: Line B')
      ],
      ans: 0,
      expl: t(
        '`std::cout << "Line A\\n";` chalne ke turant baad `return 0;` aa jaata hai. `return 0;` wahin par `main()` function ko khatam kar deta hai, isiliye `Line B` wali line tak CPU kabhi pahunchta hi nahi hai.',
        'Right after `std::cout << "Line A\\n";` executes, the program hits `return 0;`. This immediately terminates the `main()` function and returns control to the OS, making the `Line B` statement unreachable.'
      )
    },
    {
      q: t(
        'Agar hum C++ program mein `#include <iostream>` line hata dein aur baaki code (`std::cout << "Hi";`) waisa hi rehne dein, toh kya hoga?',
        'What happens if we remove `#include <iostream>` from a C++ program that uses `std::cout << "Hi";`?'
      ),
      opts: [
        t('Program normal chalega kyunki cout C++ ka core keyword hai', 'The program runs normally because cout is a built-in C++ keyword'),
        t('Compiler Error aayegi kyunki compiler ko pata hi nahi chalega ki cout kya hai', 'A Compiler Error occurs because the compiler does not know what cout is'),
        t('Program chalega par screen khaali rahegi', 'The program compiles and runs, but prints a blank screen'),
        t('Sirf warning aayegi par output print ho jayega', 'Only a warning is shown and the output still prints')
      ],
      ans: 1,
      expl: t(
        '`cout` C++ ka built-in keyword nahi hai; yeh Standard Library ke `<iostream>` header file ke andar defined ek object hai. Bina `#include <iostream>` ke compiler bolega ki `cout is not a member of std` ya `undeclared identifier`.',
        '`cout` is not a built-in keyword of the core C++ language; it is an object defined inside the `<iostream>` header file. Without `#include <iostream>`, the compiler has no definition for `std::cout` and halts with a compilation error.'
      )
    },
    {
      q: t(
        'Is statement ka exact output kya hoga: `std::cout << "10 + 20 = " << 10 + 20;`?',
        'What is the exact output of the statement: `std::cout << "10 + 20 = " << 10 + 20;`?'
      ),
      opts: [
        t('10 + 20 = 10 + 20', '10 + 20 = 10 + 20'),
        t('30 = 30', '30 = 30'),
        t('10 + 20 = 30', '10 + 20 = 30'),
        t('10 + 20 = 1020', '10 + 20 = 1020')
      ],
      ans: 2,
      expl: t(
        'Pehla hissa `"10 + 20 = "` double quotes mein hai, toh woh bina solve huye jaisa likha hai waisa hi print hoga. Doosra hissa `10 + 20` bina quotes ke hai, toh CPU unhe jod kar `30` print karega. Output: `10 + 20 = 30`.',
        'The first part `"10 + 20 = "` is a string literal in double quotes, so it prints verbatim as text. The second part `10 + 20` is an unquoted arithmetic expression, so the CPU evaluates it to `30` before printing. Output: `10 + 20 = 30`.'
      )
    }
  ],
  keyNotes: [
    t(
      'C++ ek Compiled language hai jisme Compiler poore source code ko ek baar mein CPU ke samajhne layak Machine Code (0 aur 1) mein badalta hai.',
      'C++ is a compiled language where a compiler translates the entire human-readable source code directly into binary machine code (0s and 1s) for the CPU.'
    ),
    t(
      'Har C++ program ki execution hamesha int main() function ke pehle statement se shuru hoti hai aur upar se niche (top-to-bottom) chalti hai.',
      'Execution of every C++ program always starts at the first statement inside the int main() function and proceeds sequentially from top to bottom.'
    ),
    t(
      'Double quotes ("...") ke andar likha har akshar as-it-is text ki tarah print hota hai, jabki bina quotes ke likhe variables aur expressions solve hokar print hote hain.',
      'Text inside double quotes ("...") is printed literally as a string, whereas unquoted variables and arithmetic expressions are evaluated before printing.'
    ),
    t(
      'std::cout apne aap line nahi badalta; nayi line par jaane ke liye \\n ya std::endl lagana zaroori hai.',
      'std::cout does not automatically advance to a new line; you must explicitly output \\n or std::endl to create a line break.'
    )
  ],
  practice: {
    title: t('Apna Course Progress Card Print Karo', 'Print Your Course Progress Card'),
    task: t(
      'Starter code ko poora karo taaki woh exact 3 lines print kare:\nLine 1: Platform: Learn2Pro\nLine 2: Total Articles: 45\nLine 3: Remaining after batch 1: 42\n(Hint: Remaining nikaalne ke liye total - completed ka use karo).',
      'Complete the starter code so that it prints these exact 3 lines:\nLine 1: Platform: Learn2Pro\nLine 2: Total Articles: 45\nLine 3: Remaining after batch 1: 42\n(Hint: Use total - completed to calculate the remaining count).'
    ),
    language: 'cpp',
    starter: `#include <iostream>

int main() {
    int total = 45;
    int completed = 3;

    std::cout << "Platform: Learn2Pro\\n";
    std::cout << "Total Articles: " << total << "\\n";
    // TODO: print "Remaining after batch 1: " and the value of (total - completed)
    return 0;
}`,
    expected: `Platform: Learn2Pro
Total Articles: 45
Remaining after batch 1: 42`
  },
  readMinutes: 12
};

const cppSetup: Article = {
  id: 'cpp-setup',
  subjectId: 'cpp',
  title: t('Compiler Install Karna Aur g++ Se Compile & Run Karna', 'Installing the Compiler and Compiling & Running with g++'),
  summary: t(
    'Apne computer (Windows, Mac, Linux) par g++ compiler setup karna seekho, aur samjho ki ek .cpp file 4 stages (Preprocessing, Compilation, Assembly, Linking) se guzar kar executable kaise banti hai.',
    'Learn how to set up the g++ compiler on Windows, macOS, and Linux, and understand the 4 stages (Preprocessing, Compilation, Assembly, and Linking) that turn a .cpp file into a runnable program.'
  ),
  sections: [
    {
      heading: t('1. Compiler Aur g++ Kya Hai? (What It Is)', '1. What It Is'),
      body: t(
        'Pichle article mein humne seekha ki C++ code (`main.cpp`) sirf ek simple text file hoti hai. Tum isko Notepad ya VS Code kisi mein bhi likh sakte ho. Lekin agar tum us `.cpp` file par double-click karoge, toh woh program ki tarah nahi chalegi! Kyun? Kyunki tumhare Operating System (Windows, Linux, ya macOS) aur CPU ko C++ padhni nahi aati—unhe sirf **Machine Code (Executable Binary)** samajh aata hai.\n\nApni `.cpp` text file ko chalne layak software (Windows par `.exe` file, Linux/Mac par binary file) mein badalne ke liye humein apne computer par ek **C++ Compiler** install karna padta hai. Duniya bhar ke engineering colleges, competitive programming platforms (Codeforces, LeetCode), aur companies mein sabse zyada istemal hone wala free aur open-source C++ compiler hai **g++ (GNU C++ Compiler)**, jo **GCC (GNU Compiler Collection)** ka hissa hai.\n\n### Alag-Alag Operating Systems Par g++ Kaise Install Karein:\n1. **Windows Students ke liye (MinGW-w64):** Windows mein g++ pehle se nahi aata. Hum **MSYS2** ya **MinGW-w64** install karte hain, jo Linux wale `g++` ko Windows par le aata hai. Install karne ke baad uske `bin` folder ka rasta (jaise `C:\\msys64\\ucrt64\\bin`) Windows ke **Environment Variables -> PATH** mein daalna padta hai taaki Command Prompt (`cmd`) ya PowerShell mein kahin se bhi `g++` likhne par computer ko pata ho ki `g++.exe` kahan rakha hai.\n2. **Ubuntu / Linux Students ke liye:** Terminal kholo aur likho: `sudo apt update && sudo apt install build-essential`. Is ek command se `g++` aur saare zaroori tools install ho jaate hain.\n3. **Mac Students ke liye:** Terminal mein `xcode-select --install` likho.\n\nCheck karne ke liye ki compiler sahi se lag gaya hai ya nahi, apne terminal mein `g++ --version` likh kar Enter dabao. Agar version number chhap kar aa gaya, toh badhai ho, tumhara hathiyar taiyar hai!\n\nAb sabse zaroori cheez jo 90% students nahi jaante: Jab tum terminal mein `g++ main.cpp -o app` likhte ho, toh parde ke peeche sirf ek step nahi hota, balki **4 alag-alag stages** chalti hain:\n1. **Preprocessor (`-E`):** Yeh `#` se shuru hone wali lines (jaise `#include <iostream>`) ko padhta hai, header file ka poora code copy-paste karta hai, aur saare comments (`//`) hata deta hai. Isse `.i` file banti hai.\n2. **Compiler (`-S`):** Yeh C++ ke grammar rules check karta hai. Agar koi semicolon chhoota hai toh yahin **Compile-Time Error** deta hai. Sab sahi hone par yeh C++ ko **Assembly Language** (`.s` file, jaise `mov`, `add`, `call`) mein badal deta hai.\n3. **Assembler (`-c`):** Yeh Assembly instructions ko asli binary `0` aur `1` mein badal kar **Object File** (`.o` ya `.obj`) banata hai. Par yeh file abhi akeli nahi chal sakti kyunki isko abhi tak `<iostream>` ke andar wale `cout` ka asli binary code nahi mila hai!\n4. **Linker:** Yeh tumhari `.o` file ko uthata hai, usme C++ Standard Library (`libstdc++`) ka pre-compiled binary code jodta (link karta) hai, aur aakhir mein tumhari final **Executable File** (`app.exe` ya `./app`) banata hai!',
        'In the first article, we learned that a C++ source file (`main.cpp`) is simply a plain text file. You can write it in Notepad, VS Code, or any text editor. However, you cannot run a `.cpp` file directly by double-clicking it because your Operating System (Windows, Linux, or macOS) and CPU only execute **Machine Code Binaries**.\n\nTo transform your `.cpp` text file into an executable program (`.exe` on Windows, or an executable binary on Linux/macOS), you need a **C++ Compiler**. The most widely used free, open-source compiler across universities, coding interviews, and industry is **g++ (the GNU C++ Compiler)**, which is part of **GCC (GNU Compiler Collection)**.\n\n### How to Install g++ on Your System:\n1. **On Windows (via MSYS2 / MinGW-w64):** Install MSYS2 or MinGW-w64, then add its `bin` directory (for example, `C:\\msys64\\ucrt64\\bin`) to your Windows **System PATH Environment Variable**. Adding it to PATH tells Command Prompt and PowerShell where to find `g++.exe` when you type `g++`.\n2. **On Linux (Ubuntu/Debian):** Open your terminal and run `sudo apt update && sudo apt install build-essential`.\n3. **On macOS:** Open Terminal and run `xcode-select --install`.\n\nTo verify your installation, open a terminal and run `g++ --version`. If it prints the version details, your compiler is ready.\n\n### The 4 Hidden Stages of the Build Pipeline:\nWhen you run `g++ main.cpp -o app` in your terminal, `g++` actually coordinates **four distinct stages** behind the scenes:\n1. **Preprocessing (`-E`):** Handles all lines starting with `#` (such as `#include <iostream>`), pastes the contents of included headers into your file, expands macros, and strips out all comments (`//` and `/* */`), producing an expanded `.i` file.\n2. **Compilation (`-S`):** Parses your C++ syntax and checks type rules. If you missed a semicolon or misspelled a variable, a **Compile-Time Error** stops the process right here. If valid, it translates the code into processor-specific **Assembly Language** (`.s` file).\n3. **Assembly (`-c`):** The Assembler translates the human-readable assembly instructions (`mov`, `add`, `ret`) into raw machine-code bytes (`0`s and `1`s), producing an **Object File** (`main.o` or `main.obj`).\n4. **Linking:** Even though `main.o` is binary, it cannot run on its own yet because the actual binary implementation of `std::cout` lives inside the C++ Standard Library (`libstdc++`). The **Linker** stitches your `main.o` together with the required library code to produce the final runnable **Executable** (`app.exe` or `./app`).'
      ),
      code: {
        title: t('g++ Se Compile Aur Run Karne Ke Terminal Commands aur Code', 'Code and Terminal Commands to Compile & Run with g++'),
        language: 'cpp',
        code: `// File name: main.cpp
// Terminal Command 1 (Compile): g++ -std=c++17 -Wall main.cpp -o myprog
// Terminal Command 2 (Run on Linux/Mac): ./myprog
// Terminal Command 2 (Run on Windows): myprog.exe

#include <iostream>

int main() {
    std::cout << "Compiled with g++ successfully!\\n";
    return 0;
}`,
        output: `Compiled with g++ successfully!`
      }
    },
    {
      heading: t('2. Asliyat Mein Iska Example (Real-Life Example)', '2. Real-Life Example'),
      body: t(
        'Chalo in 4 stages (Preprocessor, Compiler, Assembler, Linker) ko ek **Ghar Banane (House Construction)** ke real-life example se samajhte hain:\n\nMaan lo tumne ek kagaz par apne ghar ka naksha banaya aur uske upar likh diya: *"Bathroom ka design Sharma Ji ki Standard Catalog Page 4 se le lena"* (Yeh tumhari `main.cpp` file hai jisme `#include <iostream>` likha hai).\n\n1. **Stage 1 — Preprocessor (Photocopy Boy):** Ek ladka aata hai, Sharma Ji ki catalog se Page 4 photocopy karta hai aur tumhare nakshe ke upar chipka deta hai. Saath hi nakshe ke kinare jo tumne pencil se rough notes (Comments `//`) likhe the, unhe rubber se mita deta hai.\n2. **Stage 2 — Compiler (Structural Engineer):** Ab Engineer us poore nakshe ko check karta hai ki deewarein aur pillars sahi hain ya nahi (Syntax Check). Agar tumne hawa mein bina pillar ke chhat bana di, toh woh wahin kaam rok dega (**Compile Error**). Agar naksha sahi hai, toh woh usey mistri ke samajhne layak step-by-step instructions (Assembly Code) mein likh deta hai.\n3. **Stage 3 — Assembler (Brick Mason / Mistri):** Mistri un instructions ko padh kar eent-patthar se ghar ka dhancha (Object File `main.o`) khada kar deta hai. Lekin ruko—ghar mein abhi bijli aur paani ka main connection nahi juda hai!\n4. **Stage 4 — Linker (Electrician & Plumber):** Aakhir mein Linker aata hai aur tumhare ghar (`main.o`) ki wiring ko shehar ke main power grid (C++ Standard Library `libstdc++`) se jod deta hai. Agar power grid se taar nahi jud paya, toh **Linker Error** aati hai. Jaise hi taar jud gaya, ghar rehne ke liye bilkul taiyar (Executable `app.exe`) ho jaata hai!',
        'Let us compare the 4 stages of the `g++` build pipeline to **constructing a house**:\n\nSuppose you draw a blueprint for your house on paper, and at the top you write a note: *"Attach the standard kitchen layout from Catalog Page 4"* (This is your `main.cpp` file containing `#include <iostream>`).\n\n1. **Stage 1 — The Preprocessor (The Blueprint Assistant):** Before the engineer looks at your sheet, an assistant fetches Page 4 from the catalog and tapes it directly onto your blueprint. They also erase any pencil scribbles in the margins (your `//` comments).\n2. **Stage 2 — The Compiler (The Structural Engineer):** The engineer inspects every measurement and rule on the combined blueprint. If a wall has no support (a syntax error like a missing `;`), the engineer rejects the plan immediately (**Compile-Time Error**). If the design is sound, the engineer converts the blueprint into a detailed work schedule (Assembly Code).\n3. **Stage 3 — The Assembler (The Construction Crew):** The crew follows the schedule and builds the physical walls and rooms of the house (the Object File `main.o`). However, the house still cannot be lived in yet because it is not connected to the city water supply or electrical grid!\n4. **Stage 4 — The Linker (The Utility Connector):** Finally, the Linker connects your house\'s internal pipes and wires (`main.o`) to the city\'s main power grid and water lines (the C++ Standard Library `libstdc++`). Once connected, you get the keys to a fully functional home (the final Executable `app.exe` or `./app`).'
      )
    },
    {
      heading: t('3. Step-by-Step: Worked Examples Aur Full Dry Run', '3. Step-by-Step: Worked Examples and Full Dry Run'),
      body: t(
        'Jab tum terminal mein `g++` chalate ho, toh kuch zaroori flags (options) hote hain jo har ache engineering student ko pata hone chahiye:\n- `g++ main.cpp`: Agar tum `-o` nahi lagate, toh `g++` default naam se file banata hai—Linux/Mac par `a.out` aur Windows par `a.exe`.\n- `g++ main.cpp -o result`: `-o` ka matlab hai **Output Name**. Yeh compiler ko bolta hai ki `a.out` ki jagah executable file ka naam `result` (ya `result.exe`) rakho.\n- `-std=c++17` ya `-std=c++20`: Yeh compiler ko batata hai ki C++ ka kaunsa modern version use karna hai.\n- `-Wall`: Iska matlab hai **Warn All**. Kai baar code mein syntax error nahi hoti par koi khatarnaak galti hoti hai (jaise bina value dale variable use karna). `-Wall` aisi chhupi hui galtiyon par turant Warning dikhata hai.\n\nChalo ab 2 worked examples dekhte hain aur unka **Build Stage + Execution Dry Run** karte hain.',
        'When invoking `g++` from the terminal, understanding its core flags will save you hours of debugging:\n- `g++ main.cpp`: Without specifying an output name, `g++` names the executable `a.out` on Linux/macOS and `a.exe` on Windows.\n- `g++ main.cpp -o result`: The `-o` flag specifies the **output filename**, creating `result` (or `result.exe`) instead of `a.out`.\n- `-std=c++17` or `-std=c++20`: Instructs `g++` which C++ language standard version to enforce.\n- `-Wall`: Stands for **Warn All**. It activates helpful compiler warnings that catch suspicious logic mistakes even when the code is syntactically valid.\n\nLet us walk through 2 worked examples and trace both their **Build Pipeline** and **Runtime Execution** step by step.'
      ),
      code: {
        title: t('Worked Example 1: Compile-Time Calculation aur C++ Standard Version Check', 'Worked Example 1: Compile-Time Calculation and C++ Standard Check'),
        language: 'cpp',
        code: `#include <iostream>

int main() {
    // Check how expressions and preprocessor macros work during compilation
    int filesCompiled = 1;
    int stagesPerFile = 4;
    int totalStages = filesCompiled * stagesPerFile;

    std::cout << "Files compiled: " << filesCompiled << "\\n";
    std::cout << "Pipeline stages run: " << totalStages << "\\n";
    return 0;
}`,
        output: `Files compiled: 1
Pipeline stages run: 4`
      }
    },
    {
      heading: t('Step-by-Step Dry Run (Examples 1 aur 2)', 'Step-by-Step Dry Run (Examples 1 and 2)'),
      body: t(
        '### Worked Example 1 ka Build + Execution Dry Run:\nMaan lo humne upar wale code ko `pipeline.cpp` naam se save kiya aur terminal mein likha: `g++ -Wall pipeline.cpp -o pipeline`.\n1. **Preprocessing Stage:** Preprocessor ne Line 1 (`#include <iostream>`) dekhi aur uski jagah `<iostream>` ke hazaron lines ke declarations jode. Line 4 ka comment (`// Check how...`) poori tarah mita diya gaya.\n2. **Compilation Stage:** Compiler ne check kiya ki `main()` sahi hai, saare `int` variables sahi declare huye hain, aur har line ke aakhir mein `;` laga hai. Zero errors aur zero warnings!\n3. **Assembly & Linking Stage:** `pipeline.o` bani aur standard library se link hokar `pipeline` executable file disk par ban gayi. Abhi tak screen par kuch print **nahi** hua hai! (Bahut students sochte hain ki `g++` command se hi output aa jayega—nahi, `g++` sirf executable banata hai).\n4. **Runtime Execution (`./pipeline` chalane par):**\n   - **Line 5 (`int filesCompiled = 1;`):** RAM mein `filesCompiled = 1` bana.\n   - **Line 6 (`int stagesPerFile = 4;`):** RAM mein `stagesPerFile = 4` bana.\n   - **Line 7 (`int totalStages = filesCompiled * stagesPerFile;`):** `1 * 4 = 4` calculate hokar `totalStages` mein gaya. State: `filesCompiled = 1, stagesPerFile = 4, totalStages = 4`.\n   - **Line 9 & 10:** Screen par `Files compiled: 1` aur `Pipeline stages run: 4` print hua.\n\n---\n\n### Worked Example 2: Custom Function aur Return Value Trace\nNiche diye gaye code mein humne `main()` ke upar ek chhota helper function `square(int n)` banaya hai taaki hum dekh sakein ki compiler aur CPU ek function se doosre function mein kaise jump karte hain:\n- **Line 3-5 (`int square(int n)`):** Compiler upar se niche padhta hai, toh usey pehle hi pata chal gaya ki `square` naam ka function maujood hai jo ek `int` leta hai aur `n * n` wapas karta hai.\n- **Line 7 (`int main()`):** Program hamesha `main()` se start hota hai (Line 3 se nahi!).\n- **Line 8 (`int num = 6;`):** `main` ki memory mein `num = 6` bana.\n- **Line 9 (`int ans = square(num);`):** CPU `num` ki value (`6`) le kar Line 3 par `square` ke andar kooda! Wahan `n = 6` bana. Line 4 par `return n * n;` yani `6 * 6 = 36` wapas Line 9 par aaya aur `ans` mein store ho gaya. State: `num = 6, ans = 36`.\n- **Line 10 (`num = 9;`):** Ab `num` badal kar `9` ho gaya. State: `num = 9, ans = 36`.\n- **Line 11 (`std::cout << ...`):** Pehle `ans` (`36`) print hua, aur phir agle line mein `square(num)` dobara call hua jahan `n = 9` gaya aur `9 * 9 = 81` print hua!',
        '### Build + Runtime Dry Run of Worked Example 1:\nSuppose we save the code above as `pipeline.cpp` and run `g++ -Wall pipeline.cpp -o pipeline` in the terminal:\n1. **Preprocessing Stage:** The preprocessor replaces `#include <iostream>` with the contents of the header and completely deletes the comment on Line 4 (`// Check how...`).\n2. **Compilation Stage:** The compiler verifies that `main()` is properly structured, all `int` declarations are valid, and every statement ends with `;`. Result: 0 errors, 0 warnings.\n3. **Assembly & Linking Stage:** The assembler creates `pipeline.o`, and the linker attaches the standard library to generate the `pipeline` executable on disk. Notice that **nothing is printed to the screen yet**! Running `g++` only builds the program; it does not run it.\n4. **Runtime Execution (when you run `./pipeline`):**\n   - **Line 5 (`int filesCompiled = 1;`):** Memory state: `filesCompiled = 1`.\n   - **Line 6 (`int stagesPerFile = 4;`):** Memory state: `filesCompiled = 1, stagesPerFile = 4`.\n   - **Line 7 (`int totalStages = ...`):** Evaluates `1 * 4 = 4`. Memory state: `filesCompiled = 1, stagesPerFile = 4, totalStages = 4`.\n   - **Lines 9 & 10:** Outputs both lines to the terminal.\n\n---\n\n### Worked Example 2: Tracing Compiler Order and Function Execution\nIn the code below, we define a helper function `square(int n)` above `main()` to trace how the compiler checks declarations and how the CPU jumps between functions:\n- **Lines 3-5 (`int square(int n)`):** Because the compiler reads top-to-bottom, seeing `square` before `main` informs it that `square` takes one `int` and returns `n * n`.\n- **Line 7 (`int main()`):** At runtime, the CPU skips lines 3-5 and starts execution directly at `main()`.\n- **Line 8 (`int num = 6;`):** Inside `main`, `num` is initialized to `6`.\n- **Line 9 (`int ans = square(num);`):** The CPU passes `6` to `square(int n)`. Inside `square`, `n = 6`, and `return n * n;` computes `6 * 6 = 36`, returning `36` to `ans`. State in `main`: `num = 6, ans = 36`.\n- **Line 10 (`num = 9;`):** `num` updates to `9`. State in `main`: `num = 9, ans = 36`.\n- **Lines 11 & 12:** Line 11 prints `ans` (`36`). Line 12 calls `square(num)` with the new `num` (`9`), which computes `9 * 9 = 81` and prints `81`.'
      ),
      code: {
        title: t('Worked Example 2: Top-to-Bottom Compilation aur Execution Trace', 'Worked Example 2: Top-to-Bottom Compilation and Execution Trace'),
        language: 'cpp',
        code: `#include <iostream>

int square(int n) {
    return n * n;
}

int main() {
    int num = 6;
    int ans = square(num);
    num = 9;
    std::cout << "Saved ans: " << ans << "\\n";
    std::cout << "New square(num): " << square(num) << "\\n";
    return 0;
}`,
        output: `Saved ans: 36
New square(num): 81`
      }
    },
    {
      heading: t('4. Common Mistakes Aur Woh Kyun Hoti Hain (Why They Happen)', '4. Common Mistakes and Why They Happen'),
      body: t(
        'Jab students apne computer par code compile aur run karte hain, toh yeh 4 galtiyan sabse zyada hoti hain. Har ek ke peeche ka asli technical reason samjho:\n\n1. **Code Edit Kiya, Save/Re-compile Nahi Kiya, aur Purana Output Aa Raha Hai!**\n   - **Galti:** Tumne VS Code mein `"Hello"` ko badal kar `"Bye"` kiya, aur seedha terminal mein `./app` chala diya. Screen par abhi bhi `"Hello"` hi print ho raha hai!\n   - **Computer ke andar kya galat ho raha hai (WHY):** CPU tumhari `.cpp` file ko kabhi nahi chalata! CPU hamesha disk par padi binary executable file (`./app` ya `app.exe`) ko chalata hai. Jab tak tum file ko **Save (`Ctrl+S`)** karke dobara **`g++ main.cpp -o app`** nahi chalate, tab tak disk par purani `app` file hi padi rehti hai jiske andar `"Hello"` ka machine code bhara hai.\n\n2. **`gcc main.cpp` chalana aur Linker Error aana (`undefined reference to std::cout`):**\n   - **Galti:** `g++` ki jagah `gcc main.cpp` likh dena.\n   - **Computer ke andar kya galat ho raha hai (WHY):** `gcc` aur `g++` dono ek hi compiler collection ka hissa hain, aur `gcc` `.cpp` file ko dekh kar usey compile (Stage 1 se 3) toh kar deta hai, **lekin Stage 4 (Linking) mein `gcc` C++ ki Standard Library (`libstdc++`) ko automatically link nahi karta!** Isiliye Linker ko `std::cout` ka binary code nahi milta aur woh `undefined reference to std::cout` bol kar fail ho jaata hai. C++ ke liye hamesha `g++` hi use karo.\n\n3. **Terminal mein `g++ is not recognized as an internal or external command` aana:**\n   - **Computer ke andar kya galat ho raha hai (WHY):** Jab tum terminal mein `g++` likhte ho, toh Operating System tumhari poori hard disk scan nahi karta. Woh sirf un gine-chune folders mein dhoondhta hai jinka naam **PATH Environment Variable** ki list mein likha hai. Agar MinGW install karne ke baad uska `bin` folder PATH mein nahi daala, toh OS ko `g++.exe` nahi milta.\n\n4. **`g++ -o main.cpp` likh dena (Apna hi code mita baithna!):**\n   - **Galti:** `-o` ke baad output naam likhne ke bajaye galti se `g++ -o main.cpp other.cpp` likh dena.\n   - **Computer ke andar kya galat ho raha hai (WHY):** `-o` flag ke turant baad jo bhi naam likha hota hai, `g++` us naam ki file ko **overwrite** karke usme binary output likh deta hai! Agar `-o` ke turant baad `main.cpp` likh diya, toh tumhara mehnat se likha code gayab ho jayega.',
        'When compiling and running programs locally, beginners run into four classic pitfalls. Here is what the computer is actually doing in each case:\n\n1. **Editing Code Without Saving or Recompiling (Seeing Old Output):**\n   - **The Mistake:** You change `"Hello"` to `"Bye"` in your editor, run `./app` in the terminal, and it still prints `"Hello"`!\n   - **Why It Happens Internally:** The CPU never reads your `.cpp` file at runtime—it only executes the binary executable file (`./app` or `app.exe`) sitting on your hard drive. Until you **save (`Ctrl+S`)** your `.cpp` file and **run `g++` again**, the executable file on disk still contains the old machine code from your previous compilation.\n\n2. **Using `gcc` instead of `g++` (`undefined reference to std::cout`):**\n   - **The Mistake:** Running `gcc main.cpp` to build a C++ program.\n   - **Why It Happens Internally:** While `gcc` recognizes `.cpp` files and compiles them into an object file (`.o`), the `gcc` driver **does not automatically link the C++ Standard Library (`libstdc++`)** during Stage 4 (Linking). When the linker searches for the binary implementation of `std::cout`, it comes up empty and throws `undefined reference to \'std::cout\'`. Always use `g++` for C++ files.\n\n3. **`\'g++\' is not recognized` or `command not found`:**\n   - **Why It Happens Internally:** When you type a command in the terminal, the Operating System does not search your entire hard drive (which would take minutes). Instead, it only checks the specific directories listed in your **PATH environment variable**. If you installed MinGW/g++ but did not add its `bin` folder to PATH, the shell cannot locate `g++.exe`.\n\n4. **Writing `g++ -o main.cpp` (Accidentally Overwriting Your Source Code!):**\n   - **The Mistake:** Forgetting the output name right after `-o`, such as typing `g++ -o main.cpp helper.cpp`.\n   - **Why It Happens Internally:** The `-o` flag blindly takes the very next word on the command line as the destination filename to overwrite with binary output. If the word immediately following `-o` is `main.cpp`, the compiler will overwrite your source file!'
      )
    },
    {
      heading: t('5. Edge Cases (Khaas Situations Aur Unka Asli Output)', '5. Edge Cases (Special Situations and Their Real Output)'),
      body: t(
        'Chalo ab Compiler aur Preprocessor se jude 3 badhiya edge cases dekhte hain:\n\n1. **Edge Case 1: Preprocessor Built-in Macros (`__LINE__` aur `__cplusplus`)**\n   Kya tumhe pata hai ki Stage 1 (Preprocessor) ke paas kuch special jaadui shabd hote hain? Jahan bhi tum `__LINE__` likhoge, Preprocessor compile karne se pehle wahan us line ka exact line number daal dega! Aur `__cplusplus` likhne par woh C++ standard ka version number (jaise C++17 ke liye `201703`) daal deta hai.\n\n2. **Edge Case 2: Multiple Strings Adjacent Concatenation (`"Hello " "World"`)**\n   Agar tum do string literals ko bina kisi `+` ya `<<` ke aamne-saamne likh do—jaise `std::cout << "Learn" "2" "Pro";`—toh kya error aayegi? **Bilkul nahi!** Compilation ke translation phase mein compiler aamne-saamne rakhe string literals ko apne aap chipka kar ek single string `"Learn2Pro"` bana deta hai!\n\n3. **Edge Case 3: Return Code of `main()` in Operating System (`return 0` vs Non-zero)**\n   Hum `main()` mein `return 0;` likhte hain. Par agar hum `int exitCode = 0;` bana kar return karein ya koi calculation check karein, toh woh bina kisi dikkat ke chalta hai.\n\nNiche diye gaye real C++ code mein dekho ki Preprocessor aur Compiler in edge cases ke saath kya karte hain:',
        'Let us examine 3 revealing edge cases handled by the Preprocessor and Compiler during the build process:\n\n1. **Edge Case 1: Predefined Preprocessor Macros (`__LINE__`)**\n   During Stage 1 (Preprocessing), the preprocessor automatically knows which line of code it is currently scanning. Whenever you write the predefined macro `__LINE__`, the preprocessor replaces it with the exact integer line number before the compiler even sees the code!\n\n2. **Edge Case 2: Adjacent String Literal Concatenation (`"Learn" "2" "Pro"`)**\n   What happens if you place two or more string literals right next to each other with only spaces or newlines between them, without `<<` or `+`? Instead of throwing an error, the C++ compiler automatically merges adjacent string literals into a single combined string during compilation!\n\n3. **Edge Case 3: Whitespace-Independent Formatting**\n   Because the compiler tokenizes code by symbols (`;`, `{`, `}`, `<<`) rather than line breaks, writing multiple statements on a single line or splitting one statement across three lines produces the exact same machine code.\n\nObserve all three edge cases in the runnable code below:'
      ),
      code: {
        title: t('Edge Cases: __LINE__, String Concatenation, aur Multi-line Statement', 'Edge Cases: __LINE__, String Concatenation, and Multi-line Statements'),
        language: 'cpp',
        code: `#include <iostream>

int main() {
    // Edge Case 1: Preprocessor replaces __LINE__ with current line number (5)
    std::cout << "This statement is on line: " << __LINE__ << "\\n";

    // Edge Case 2: Adjacent string literals merge automatically at compile time
    std::cout << "Learn" "2" "Pro" " C++ Course\\n";

    // Edge Case 3: One statement split across multiple lines
    std::cout
        << "Split across "
        << "multiple lines!\\n";

    return 0;
}`,
        output: `This statement is on line: 5
Learn2Pro C++ Course
Split across multiple lines!`
      }
    },
    {
      heading: t('6. Kya Hoga Agar Hum Yeh Badal Dein? (What If You Change This?)', '6. What If You Change This?'),
      body: t(
        'Chalo dekhte hain ki agar hum Preprocessor Directives (`#define` aur `#ifdef`) mein badlaav karein toh Compiler kaun sa code compile karega aur kaun sa code gayab kar dega!\n\nSoftware companies mein jab developers code likhte hain, toh woh testing ke liye extra messages print karwate hain (jise **Debug Mode** kehte hain), aur jab app users ko dete hain toh woh extra messages band kar dete hain. Yeh kaam Stage 1 (Preprocessor) mein `#ifdef` se hota hai:\n- Agar hum code ke upar `#define DEBUG_MODE` likh dein, toh `#ifdef DEBUG_MODE` ke andar wala code compile hoga aur screen par print hoga.\n- Aur agar hum `#define DEBUG_MODE` ko comment (`//`) kar dein ya hata dein, toh Preprocessor us `#ifdef` block ko compiler tak pahunchne hi nahi dega!\n\nNiche diye gaye code mein dekho kaise `#define` lagane aur na lagane se program ka behavior badalta hai:',
        'Let us see how changing Preprocessor Directives (`#define` and `#ifdef`) alters which lines of code actually reach the compiler!\n\nIn real-world software engineering, developers often want extra diagnostic messages printed while testing (**Debug Mode**), but want those messages completely removed in the final release. This is controlled in Stage 1 (Preprocessing) using conditional compilation:\n- When `#define DEBUG_MODE` is present at the top of the file, the preprocessor keeps the code inside `#ifdef DEBUG_MODE ... #endif`.\n- If you comment out `// #define DEBUG_MODE`, the preprocessor strips that entire block before compilation even begins!\n\nRun and inspect the code below to see conditional compilation in action:'
      ),
      code: {
        title: t('Preprocessor Conditional Compilation (#define aur #ifdef)', 'Preprocessor Conditional Compilation (#define and #ifdef)'),
        language: 'cpp',
        code: `#include <iostream>

#define DEBUG_MODE

int main() {
    int items = 5;
    int price = 120;
    int total = items * price;

#ifdef DEBUG_MODE
    std::cout << "[DEBUG] items=" << items << ", price=" << price << "\\n";
#endif

    std::cout << "Final Bill: Rs. " << total << "\\n";
    return 0;
}`,
        output: `[DEBUG] items=5, price=120
Final Bill: Rs. 600`
      }
    },
    {
      heading: t('7. Summary (Ab Tak Humne Kya Seekha)', '7. Summary'),
      body: t(
        'Is article ke zaroori points:\n- **g++ Compiler:** C++ code ko machine code mein badalne ke liye hum `g++` (GNU C++ Compiler) use karte hain. Hamesha `g++` use karo, `gcc` nahi (kyunki `gcc` C++ standard library ko apne aap link nahi karta).\n- **Compile & Run Commands:** Compile karne ke liye `g++ -std=c++17 -Wall main.cpp -o app` aur run karne ke liye `./app` (Linux/Mac) ya `app.exe` (Windows) chalate hain.\n- **4 Build Stages:**\n  1. **Preprocessor (`-E`):** `#include` aur `#define` solve karta hai aur comments hatata hai.\n  2. **Compiler (`-S`):** Syntax check karke Assembly code (`.s`) banata hai.\n  3. **Assembler (`-c`):** Assembly ko binary Object file (`.o`) mein badalta hai.\n  4. **Linker:** Object file ko library code ke saath jod kar final Executable banata hai.\n- **Recompile Rule:** Code mein jab bhi koi badlaav karo, file ko Save karke dobara `g++` se compile karna zaroori hai tabhi naya output dikhega.',
        'Key takeaways from this article:\n- **The g++ Compiler:** We use `g++` (GNU C++ Compiler) to build C++ programs. Always use `g++` rather than `gcc`, because `g++` automatically links the C++ Standard Library (`libstdc++`).\n- **Compile & Run Commands:** Compile using `g++ -std=c++17 -Wall main.cpp -o app`, and execute using `./app` (Linux/macOS) or `app.exe` (Windows).\n- **The 4 Build Stages:**\n  1. **Preprocessor (`-E`):** Expands `#include` and `#define` directives and removes comments.\n  2. **Compiler (`-S`):** Validates C++ syntax and generates Assembly code (`.s`).\n  3. **Assembler (`-c`):** Converts Assembly into a binary Object file (`.o`).\n  4. **Linker:** Combines object files with standard library binaries to create the final executable.\n- **Always Recompile After Edits:** Modifying a `.cpp` file does not update the executable automatically; you must save and run `g++` again before running the program.'
      )
    }
  ],
  diagram: {
    kind: 'boxes',
    title: t('g++ Compilation Ke 4 Stages (main.cpp se ./app tak)', 'The 4 Stages of g++ Compilation (from main.cpp to ./app)'),
    caption: t(
      'Jab tum g++ main.cpp -o app chalate ho, toh code in 4 padaav se guzarta hai.',
      'When you run g++ main.cpp -o app, your file passes through these 4 sequential stages.'
    ),
    nodes: [
      {
        t: t('Stage 1: Preprocessor (-E)', 'Stage 1: Preprocessor (-E)'),
        s: t('main.cpp -> main.i (#include expand, comments strip)', 'main.cpp -> main.i (Expands #include, strips comments)')
      },
      {
        t: t('Stage 2: Compiler (-S)', 'Stage 2: Compiler (-S)'),
        s: t('main.i -> main.s (Syntax check + Assembly code)', 'main.i -> main.s (Syntax check + Assembly generation)')
      },
      {
        t: t('Stage 3: Assembler (-c)', 'Stage 3: Assembler (-c)'),
        s: t('main.s -> main.o (Machine level binary Object file)', 'main.s -> main.o (Translates to binary Object file)')
      },
      {
        t: t('Stage 4: Linker', 'Stage 4: Linker'),
        s: t('main.o + libstdc++ -> ./app (Final Executable)', 'main.o + libstdc++ -> ./app (Final Runnable Executable)')
      }
    ]
  },
  codeExamples: [
    {
      title: t('Compile-Time Constants (#define Macro) vs Runtime Variables', 'Compile-Time Constants (#define Macro) vs Runtime Variables'),
      language: 'cpp',
      code: `#include <iostream>

#define MAX_MARKS 100

int main() {
    int scored = 88;
    int graceMarks = 4;
    int finalScore = scored + graceMarks;

    std::cout << "Final Score: " << finalScore << " out of " << MAX_MARKS << "\\n";
    std::cout << "Marks needed for full score: " << (MAX_MARKS - finalScore) << "\\n";
    return 0;
}`,
      output: `Final Score: 92 out of 100
Marks needed for full score: 8`
    }
  ],
  mcqs: [
    {
      q: t(
        'Maan lo tumne `code.cpp` mein `std::cout << "Version 1";` likha, `g++ code.cpp -o app` chalaya, aur `./app` ne `Version 1` print kiya. Ab tumne `code.cpp` mein `"Version 1"` badal kar `"Version 2"` kar diya aur file save kar di, par `g++` dobara nahi chalaya. Agar ab tum seedha `./app` chalaoge toh kya print hoga?',
        'Suppose you write `std::cout << "Version 1";` in `code.cpp`, run `g++ code.cpp -o app`, and `./app` prints `Version 1`. Next, you edit `code.cpp` to say `"Version 2"` and save the file, but you do NOT run `g++` again. What will `./app` print when you run it now?'
      ),
      opts: [
        t('Version 2', 'Version 2'),
        t('Version 1', 'Version 1'),
        t('Version 1 aur Version 2 dono', 'Both Version 1 and Version 2'),
        t('Error: Source file changed', 'Error: Source file changed')
      ],
      ans: 1,
      expl: t(
        'Operating System `./app` (executable binary) ko chalata hai, `code.cpp` ko nahi. Kyunki tumne `code.cpp` badalne ke baad `g++` dobara nahi chalaya, `./app` ke andar abhi bhi purana machine code hai, isliye `Version 1` hi print hoga.',
        'The operating system executes the binary file `./app`, not the text file `code.cpp`. Because you did not re-run `g++` after saving your changes, `./app` still contains the old machine code and prints `Version 1`.'
      )
    },
    {
      q: t(
        'Compilation ke kaun se stage mein `#include <iostream>` ko khola jaata hai aur saare `//` comments ko code se hataya jaata hai?',
        'During which stage of the build process is `#include <iostream>` expanded and all `//` comments stripped from the code?'
      ),
      opts: [
        t('Stage 4: Linking', 'Stage 4: Linking'),
        t('Stage 3: Assembly', 'Stage 3: Assembly'),
        t('Stage 1: Preprocessing', 'Stage 1: Preprocessing'),
        t('Runtime Execution ke waqt', 'At Runtime Execution')
      ],
      ans: 2,
      expl: t(
        'Sabse pehle Stage 1 (Preprocessor) chalta hai jo `#` wale saare directives (`#include`, `#define`) ko process karta hai aur saare comments ko hata deta hai taaki Compiler ko saaf C++ code mile.',
        'Stage 1 (Preprocessing) runs first. It processes all `#` directives (`#include`, `#define`) and strips comments before the actual compiler ever sees the code.'
      )
    },
    {
      q: t(
        'Agar tum C++ program ko `g++` ki jagah `gcc main.cpp` likh kar compile karne ki koshish karo (jisme `std::cout` use hua hai), toh kaun se stage par aur kyun error aayegi?',
        'If you attempt to build a C++ program containing `std::cout` using `gcc main.cpp` instead of `g++ main.cpp`, at which stage will it fail and why?'
      ),
      opts: [
        t('Preprocessor stage par kyunki gcc ko #include samajh nahi aata', 'At the Preprocessor stage because gcc does not understand #include'),
        t('Linking stage par kyunki gcc C++ Standard Library (libstdc++) ko automatically link nahi karta', 'At the Linking stage because gcc does not automatically link the C++ Standard Library (libstdc++)'),
        t('Koi error nahi aayegi, gcc aur g++ bilkul same kaam karte hain', 'No error occurs; gcc and g++ behave identically'),
        t('Syntax check stage par kyunki gcc semicolon nahi pehchanta', 'At the Syntax check stage because gcc does not recognize semicolons')
      ],
      ans: 1,
      expl: t(
        '`gcc` `.cpp` file ko compile karke `.o` object file toh bana deta hai, par Stage 4 (Linking) mein `libstdc++` ko link nahi karta. Is wajah se Linker ko `std::cout` nahi milta aur `undefined reference` error aati hai.',
        '`gcc` will compile a `.cpp` file into an object file, but during Stage 4 (Linking) it does not link `libstdc++` by default. Consequently, the linker cannot find the definition of `std::cout` and fails with an `undefined reference` error.'
      )
    },
    {
      q: t(
        'Niche diye gaye code ka output kya hoga?\n```cpp\n#include <iostream>\n#define BONUS 10\nint main() {\n    int score = 40;\n    std::cout << "Total: " << score + BONUS;\n    return 0;\n}\n```',
        'What will be the output of the following code?\n```cpp\n#include <iostream>\n#define BONUS 10\nint main() {\n    int score = 40;\n    std::cout << "Total: " << score + BONUS;\n    return 0;\n}\n```'
      ),
      opts: [
        t('Total: 40BONUS', 'Total: 40BONUS'),
        t('Total: 50', 'Total: 50'),
        t('Total: 4010', 'Total: 4010'),
        t('Compiler Error kyunki BONUS ka data type nahi likha', 'Compiler Error because BONUS has no data type')
      ],
      ans: 1,
      expl: t(
        'Stage 1 (Preprocessing) mein `#define BONUS 10` jahan bhi code mein `BONUS` likha hai wahan `10` replace kar deta hai. Toh compiler ko `score + 10` dikhta hai, jo `40 + 10 = 50` print karta hai.',
        'In Stage 1 (Preprocessing), `#define BONUS 10` replaces every occurrence of the token `BONUS` with `10`. The compiler then sees `score + 10`, which evaluates `40 + 10 = 50` and prints `Total: 50`.'
      )
    },
    {
      q: t(
        'Terminal command `g++ -Wall solution.cpp -o runner` mein `-o runner` ka kya kaam hai?',
        'In the terminal command `g++ -Wall solution.cpp -o runner`, what does `-o runner` do?'
      ),
      opts: [
        t('Yeh code ko optimize karta hai', 'It optimizes the code for speed'),
        t('Yeh runner naam ki nayi .cpp file banata hai', 'It creates a new .cpp source file named runner'),
        t('Yeh banne wali executable binary file ka naam a.out ki jagah runner rakhta hai', 'It sets the name of the generated executable file to runner instead of the default a.out'),
        t('Yeh program ko compile karne ke turant baad apne aap run bhi kar deta hai', 'It automatically runs the program immediately after compiling')
      ],
      ans: 2,
      expl: t(
        '`-o` flag output executable file ka naam tay karta hai. Bina `-o` ke default naam `a.out` (Linux/Mac) ya `a.exe` (Windows) banta hai, par `-o runner` likhne se executable ka naam `runner` banta hai.',
        'The `-o` flag specifies the output executable filename. Without `-o`, `g++` defaults to `a.out` (on Linux/macOS) or `a.exe` (on Windows); `-o runner` names the resulting executable `runner`.'
      )
    }
  ],
  keyNotes: [
    t(
      'C++ code ko compile karne ke liye hamesha g++ command ka istemal karein, kyunki yeh C++ Standard Library ko automatically link karta hai.',
      'Always use the g++ command to compile C++ programs, as it automatically links the C++ Standard Library during the linking stage.'
    ),
    t(
      'Compilation 4 stages mein poora hota hai: Preprocessor (.i) -> Compiler (.s) -> Assembler (.o) -> Linker (Executable).',
      'Building a C++ program happens in 4 stages: Preprocessor (.i) -> Compiler (.s) -> Assembler (.o) -> Linker (Executable).'
    ),
    t(
      'Source code (.cpp) mein koi bhi badlaav karne ke baad file ko Save karke dobara g++ chalana zaroori hai, warna purana executable hi chalega.',
      'After editing a .cpp file, you must save it and run g++ again to update the executable binary; otherwise, running the binary will execute your old code.'
    ),
    t(
      '-Wall flag compiler warnings ko chalu karta hai jisse chhupi hui galtiyan runtime se pehle hi pakad mein aa jaati hain.',
      'Using the -Wall flag enables important compiler warnings, helping you catch potential bugs before the program ever runs.'
    )
  ],
  practice: {
    title: t('Build Pipeline Time Calculator', 'Build Pipeline Time Calculator'),
    task: t(
      'Maan lo ek project mein Preprocessor ko 2 ms, Compiler ko 15 ms, Assembler ko 5 ms, aur Linker ko 8 ms lagte hain. Starter code ko chala kar total build time print karo.',
      'Suppose building a project takes 2 ms for the Preprocessor, 15 ms for the Compiler, 5 ms for the Assembler, and 8 ms for the Linker. Complete and run the program to print the breakdown and total build time.'
    ),
    language: 'cpp',
    starter: `#include <iostream>

int main() {
    int preprocessMs = 2;
    int compileMs = 15;
    int assembleMs = 5;
    int linkMs = 8;

    int totalBuildMs = 0;
    // TODO: add preprocessMs + compileMs + assembleMs + linkMs and store it in totalBuildMs

    std::cout << "Preprocessor: " << preprocessMs << " ms\\n";
    std::cout << "Compiler: " << compileMs << " ms\\n";
    std::cout << "Assembler: " << assembleMs << " ms\\n";
    std::cout << "Linker: " << linkMs << " ms\\n";
    std::cout << "Total Build Time: " << totalBuildMs << " ms\\n";
    return 0;
}`,
    expected: `Preprocessor: 2 ms
Compiler: 15 ms
Assembler: 5 ms
Linker: 8 ms
Total Build Time: 30 ms`
  },
  readMinutes: 12
};

const cppIo: Article = {
  id: 'cpp-io',
  subjectId: 'cpp',
  title: t('C++ Mein Input Aur Output: cin Aur cout', 'Input and Output in C++: cin and cout'),
  summary: t(
    'Seekho kaise std::cin aur std::cout ke zariye user se keyboard input lete hain aur screen par output dikhate hain, input buffer kaise kaam karta hai, aur multiple inputs ka dry run kaise hota hai.',
    'Learn how to take keyboard input from the user with std::cin and display output with std::cout, how the internal input buffer works, and how to trace multiple inputs step by step.'
  ),
  sections: [
    {
      heading: t('1. cin Aur cout Kya Hain? (What It Is)', '1. What It Is'),
      body: t(
        'Abhi tak humne jo programs banaye, unme numbers (`int a = 10;`) humne pehle se code ke andar hi fix (hardcode) kar rakhe the. Par asali duniya ke softwares aise nahi hote! Jab tum ATM machine par jaate ho, toh ATM har baar Rs. 500 nahi nikaalta—woh pehle tumse poochta hai ki kitne paise nikaalne hain, tum keyboard se number type karte ho, aur woh us hisaab se kaam karta hai.\n\nC++ mein user se keyboard ke zariye data lene aur screen par result dikhane ke liye **Streams** ka concept use hota hai, jo `<iostream>` header file mein aata hai. "Stream" ka matlab hota hai **Nadi ki dhara (Flow of bytes)**. Jaise nadi mein paani ek disha mein behta hai, waise hi C++ mein characters (bytes) keyboard se program ki taraf, aur program se screen ki taraf behte hain:\n\n1. **`std::cout` (Standard Character Output Stream):** Yeh tumhari monitor screen se juda hai. Iske saath **`<<` (Insertion Operator)** lagta hai. Notice karo ki `<<` ka munh `cout` ki taraf hai—yani yeh data ko utha kar Output Stream ke *andar* daalta hai (`std::cout << age;`).\n2. **`std::cin` (Standard Character Input Stream):** Yeh tumhare keyboard se juda hai. Iske saath **`>>` (Extraction Operator)** lagta hai. Notice karo ki `>>` ka munh variable ki taraf hota hai (`std::cin >> age;`)—yani yeh keyboard ki stream se data *kheench kar (extract karke)* right side mein rakhe variable ke dabbe mein bhar deta hai!\n\n### Sabse Zaroori Raaz: `std::cin` Aur Input Buffer Kaise Kaam Karta Hai?\nJab tum `std::cin >> x;` likhte ho aur user keyboard par `42` type karke `Enter` dabata hai, toh `42` seedha `x` mein nahi jaata! Pehle user jo bhi type karta hai, woh RAM mein ek waiting room mein jama hota hai jise **Input Buffer** kehte hain. Buffer ke andar kuch aisa rakha hota hai: `[\'4\', \'2\', \'\\n\']` (yahan `\\n` woh Enter key hai jo user ne dabayi).\n\nJab `std::cin >> x;` chalta hai, toh `>>` operator ke **3 pakke niyam** hain:\n1. **Rule 1 (Leading Whitespace Skip):** Buffer ke shuru mein jitne bhi spaces (`\' \'`), tabs (`\'\\t\'`), ya newlines (`\'\\n\'`) pade hain, `>>` un sabko chupke se kachre mein fek deta hai (skip kar deta hai) jab tak usey koi asli akshar ya digit na mile.\n2. **Rule 2 (Read Characters):** Ab woh characters padhna shuru karta hai jo variable ke type (jaise `int` ke liye digits `0-9`) se match karte hain.\n3. **Rule 3 (Stop at Whitespace):** Jaise hi aage koi space (`\' \'`), tab (`\'\\t\'`), ya Enter (`\'\\n\'`) aata hai, `>>` wahin ruk jaata hai! Aur jo data padha (`42`), usey variable mein daal deta hai.',
        'In our previous programs, all numbers (like `int a = 10;`) were hardcoded directly inside the source file. Real-world applications cannot work that way! An ATM machine or calculator cannot have your withdrawal amount hardcoded in advance—it must wait for you to type numbers on the keypad and respond dynamically to your input.\n\nIn C++, communicating with the user happens through **Streams**, provided by the `<iostream>` library. Think of a "Stream" as a continuous flow of characters (bytes) moving from a source to a destination:\n\n1. **`std::cout` (Standard Character Output Stream):** Connected to your console screen. It uses the **Insertion Operator (`<<`)**. Notice the arrows point *toward* `std::cout` (`std::cout << age;`), pushing data into the output stream.\n2. **`std::cin` (Standard Character Input Stream):** Connected to your keyboard. It uses the **Extraction Operator (`>>`)**. Notice the arrows point *away from* `std::cin` and *into* your variable (`std::cin >> age;`), extracting characters from the input stream and storing them inside the variable in RAM.\n\n### How the Input Buffer Works Internally:\nWhen your program runs `std::cin >> x;` and the user types `42` followed by pressing `Enter`, the characters do not go straight from the keyboard into `x`. Instead, the operating system places the keystrokes into a temporary holding area in memory called the **Input Buffer**. Inside the buffer sits: `[\'4\', \'2\', \'\\n\']` (where `\'\\n\'` represents the Enter key).\n\nWhenever `std::cin >> variable` executes, the extraction operator `>>` follows **3 strict rules**:\n1. **Rule 1 (Skip Leading Whitespace):** It automatically skips and discards any spaces (`\' \'`), tabs (`\'\\t\'`), or newlines (`\'\\n\'`) sitting at the front of the input buffer until it finds a non-whitespace character.\n2. **Rule 2 (Read Matching Characters):** It reads consecutive characters that match the target variable\'s type (for example, digits for an `int`).\n3. **Rule 3 (Stop at Next Whitespace):** The instant it encounters the next space, tab, or newline, it stops reading, converts the characters (`"42"`) into the binary number `42`, and stores it inside `x`.'
      ),
      code: {
        title: t('cin Aur cout Ka Basic Example (Simulated Stream Input)', 'Basic cin and cout Example (with Stream Input)'),
        language: 'cpp',
        code: `#include <iostream>
#include <sstream>

int main() {
    // Simulating user typing "21" on the keyboard for std::cin
    std::istringstream simulatedKeyboard("21\\n");
    std::cin.rdbuf(simulatedKeyboard.rdbuf());

    int age = 0;
    std::cout << "Enter your age: ";
    std::cin >> age;
    std::cout << "\\nNext year you will be " << (age + 1) << " years old.\\n";
    return 0;
}`,
        output: `Enter your age: 
Next year you will be 22 years old.`
      }
    },
    {
      heading: t('2. Asliyat Mein Iska Example (Real-Life Example)', '2. Real-Life Example'),
      body: t(
        'Chalo **Input Buffer** aur `std::cin >>` ke kaam karne ke tareeke ko ek **Metro Ticket Counter ki Conveyor Belt (Patti)** se samajhte hain!\n\nMaan lo ticket counter par ek lambi conveyor belt lagi hai (Yeh **Input Buffer** hai). Ek family aati hai aur belt par ek saath 3 parchiyaan rakh deti hai jinke beech mein thoda-thoda khaali gap (Space) hai: `[ 10 ]  (gap)  [ 25 ]  (gap)  [ 50 ]`.\n\nAb counter ke andar baitha clerk (`std::cin >>`) kaise kaam karega?\n- Jab tum pehli baar bolte ho `std::cin >> a;`, toh clerk belt ke shuru ka khaali gap hatata hai, pehli parchi `[ 10 ]` utha kar `a` ke dabbe mein daalta hai, aur jaise hi aage gap (Space) dikhta hai, clerk ruk jaata hai! Belt par abhi bhi `[ 25 ]` aur `[ 50 ]` pade huye hain.\n- Ab jab agli line mein `std::cin >> b;` aata hai, toh clerk user se dobara parchi nahi maangta! Woh dekhta hai ki belt (Input Buffer) par pehle se hi `[ 25 ]` rakha hua hai! Woh turant gap skip karta hai aur `[ 25 ]` utha kar `b` mein daal deta hai.\n- Aur teesri baar `std::cin >> c;` (ya `std::cin >> a >> b >> c;` ek hi line mein) karne par woh `[ 50 ]` utha kar `c` mein daal deta hai.\n\nIsiliye C++ mein chahe user teen numbers ek hi line mein space dekar type kare (`10 25 50` aur phir Enter), ya teen alag-alag lines mein Enter daba-daba kar type kare—`std::cin >> a >> b >> c;` dono cases mein bilkul barabar kaam karta hai!',
        'Let us visualize the **Input Buffer** and `std::cin >>` as a **Supermarket Checkout Conveyor Belt**:\n\nImagine the customer places three items on the conveyor belt at once, separated by empty gaps (spaces): `[ 10 ]  (space)  [ 25 ]  (space)  [ 50 ]`. Here, the conveyor belt is the **Input Buffer**.\n\nHow does the cashier (`std::cin >>`) process them?\n- When your code runs `std::cin >> a;`, the cashier skips any empty belt space at the front, grabs the first item `[ 10 ]`, puts it into bag `a`, and stops immediately upon seeing the next empty gap (space). Notice that `[ 25 ]` and `[ 50 ]` are still waiting on the conveyor belt!\n- When your code next runs `std::cin >> b;`, the cashier does not wait for the customer to put more items on the belt—they see `[ 25 ]` already waiting on the belt, skip the gap in front of it, and place `25` into bag `b`.\n- Finally, `std::cin >> c;` grabs `[ 50 ]` from the belt and stores it in `c`.\n\nBecause `>>` treats spaces, tabs, and newlines identically as item separators, the user can type `10 25 50` on a single line separated by spaces, or type `10`, press Enter, `25`, press Enter, and `50`, press Enter—`std::cin >> a >> b >> c;` handles both identically!'
      )
    },
    {
      heading: t('3. Step-by-Step: Worked Examples Aur Full Dry Run', '3. Step-by-Step: Worked Examples and Full Dry Run'),
      body: t(
        'Chalo ab 2 alag-alag worked examples dekhte hain aur har step par **Input Buffer** ke andar kya bacha hai aur **Variables** ki value kya bani, uska poora dry run karte hain.\n\n*(Note: Humare examples 100% self-contained aur runnable hone chahiye taaki tum bina rukawat ke exact output dekh sako, isliye humne keyboard input ko `std::istringstream` se buffer mein bhar diya hai—yeh bilkul waisa hi hai jaise user ne keyboard par woh characters type kiye hon).*',
        'Now let us trace 2 complete worked examples. At every single line, we will track the exact contents of the **Input Buffer** alongside the **Variables in RAM**.\n\n*(Note: To make every example 100% self-contained and immediately runnable with deterministic output, we pre-load the keyboard input buffer using `std::istringstream`—this behaves identically to a user typing those exact characters on their keyboard.)*'
      ),
      code: {
        title: t('Worked Example 1: Chained Input (std::cin >> x >> y >> z)', 'Worked Example 1: Chained Input (std::cin >> x >> y >> z)'),
        language: 'cpp',
        code: `#include <iostream>
#include <sstream>

int main() {
    // User types: "   15   40\\n8\\n" on the keyboard
    std::istringstream keyboard("   15   40\\n8\\n");
    std::cin.rdbuf(keyboard.rdbuf());

    int x = 0, y = 0, z = 0;
    std::cin >> x >> y;
    std::cin >> z;

    int total = x + y + z;
    std::cout << "x=" << x << ", y=" << y << ", z=" << z << "\\n";
    std::cout << "Total=" << total << "\\n";
    return 0;
}`,
        output: `x=15, y=40, z=8
Total=63`
      }
    },
    {
      heading: t('Step-by-Step Dry Run (Worked Examples 1 aur 2)', 'Step-by-Step Dry Run (Worked Examples 1 and 2)'),
      body: t(
        '### Worked Example 1 ka Full Buffer + Variable Dry Run:\nUser ne keyboard par type kiya: `"   15   40\\n8\\n"`.\n- **Shuruat mein:**\n  - `Input Buffer`: `"   15   40\\n8\\n"`\n  - `Variables`: `x = 0, y = 0, z = 0`\n- **Line 10 (`std::cin >> x >> y;`):** Yeh left-to-right chalta hai. Pehle `std::cin >> x` chalega:\n  - Rule 1: Shuru ke teen spaces `"   "` skip ho gaye.\n  - Rule 2: Digits `\'1\'` aur `\'5\'` padhe gaye.\n  - Rule 3: Agla character space `\' \'` hai, toh `>>` ruk gaya aur `15` ko `x` mein daal diya!\n  - Ab `Input Buffer` mein bacha: `"   40\\n8\\n"`, aur `x = 15, y = 0, z = 0`.\n  - Ab isi line ka agla hissa `>> y` chala:\n  - Rule 1: Buffer ke shuru ke teen spaces `"   "` skip ho gaye.\n  - Rule 2 & 3: `\'4\'` aur `\'0\'` padhe gaye, aur `\\n` aate hi ruk gaya! `y` mein `40` chala gaya.\n  - Ab `Input Buffer` mein bacha: `"\\n8\\n"`, aur `x = 15, y = 40, z = 0`.\n- **Line 11 (`std::cin >> z;`):**\n  - Rule 1: Buffer ke shuru mein jo `\'\\n\'` pada tha, woh whitespace hai toh skip ho gaya!\n  - Rule 2 & 3: `\'8\'` padha gaya, agle `\'\\n\'` par ruk gaya, aur `z = 8` ho gaya.\n  - Ab `Input Buffer` mein bacha: `"\\n"`, aur `x = 15, y = 40, z = 8`.\n- **Line 13 (`int total = x + y + z;`):** `15 + 40 + 8 = 63` calculate hokar `total` mein gaya.\n- **Line 14 & 15:** Screen par `x=15, y=40, z=8` aur `Total=63` print ho gaya.\n\n---\n\n### Worked Example 2: Alag-Alag Data Types (Roll No, Grade, Marks) Ek Saath Read Karna\nAb niche diye gaye code mein dekho jab user `"104 A 89.5"` input deta hai toh `int`, `char`, aur `double` kaise read hote hain:\n- **Initial Buffer:** `"104 A 89.5\\n"`\n- **`std::cin >> rollNo;` (`int`):** `\'1\'`, `\'0\'`, `\'4\'` padh kar space par ruka. `rollNo = 104`. Buffer bacha: `" A 89.5\\n"`.\n- **`std::cin >> section;` (`char`):** Space skip kiya, ek single character `\'A\'` padha. `section = \'A\'`. Buffer bacha: `" 89.5\\n"`.\n- **`std::cin >> percentage;` (`double`):** Space skip kiya, `\'8\'`, `\'9\'`, `\'.\'`, `\'5\'` padh kar `\\n` par ruka. `percentage = 89.5`. Buffer bacha: `"\\n"`.',
        '### Full Buffer + Variable Dry Run of Worked Example 1:\nThe user typed `"   15   40\\n8\\n"`.\n- **Initial State:**\n  - `Input Buffer`: `"   15   40\\n8\\n"`\n  - `Variables`: `x = 0, y = 0, z = 0`\n- **Line 10 (`std::cin >> x >> y;`):** Evaluates left-to-right. First, `std::cin >> x` runs:\n  - Rule 1: Skips the three leading spaces `"   "`.\n  - Rule 2: Reads digits `\'1\'` and `\'5\'`.\n  - Rule 3: Sees the next space `\' \'`, stops reading, and stores `15` into `x`.\n  - State now: `Input Buffer`: `"   40\\n8\\n"`, `x = 15, y = 0, z = 0`.\n  - Next, the chained `>> y` runs:\n  - Rule 1: Skips the three spaces `"   "`.\n  - Rules 2 & 3: Reads `\'4\'` and `\'0\'`, stops at `\'\\n\'`, and stores `40` into `y`.\n  - State now: `Input Buffer`: `"\\n8\\n"`, `x = 15, y = 40, z = 0`.\n- **Line 11 (`std::cin >> z;`):**\n  - Rule 1: Skips the leading `\'\\n\'` left over from the previous line!\n  - Rules 2 & 3: Reads `\'8\'`, stops at the final `\'\\n\'`, and stores `8` into `z`.\n  - State now: `Input Buffer`: `"\\n"`, `x = 15, y = 40, z = 8`.\n- **Line 13 (`int total = x + y + z;`):** Computes `15 + 40 + 8 = 63`.\n- **Lines 14 & 15:** Prints `x=15, y=40, z=8` and `Total=63`.\n\n---\n\n### Worked Example 2: Reading Mixed Data Types (int, char, double)\nIn the code below, trace what happens when the input buffer contains `"104 A 89.5\\n"`:\n- **Initial Buffer:** `"104 A 89.5\\n"`\n- **`std::cin >> rollNo;` (`int`):** Reads `"104"`, stops at space. `rollNo = 104`. Buffer remaining: `" A 89.5\\n"`.\n- **`std::cin >> section;` (`char`):** Skips space, reads single character `\'A\'`. `section = \'A\'`. Buffer remaining: `" 89.5\\n"`.\n- **`std::cin >> percentage;` (`double`):** Skips space, reads `"89.5"`, stops at `\'\\n\'`. `percentage = 89.5`. Buffer remaining: `"\\n"`.'
      ),
      code: {
        title: t('Worked Example 2: Mixed Types Input (int, char, double)', 'Worked Example 2: Mixed Types Input (int, char, double)'),
        language: 'cpp',
        code: `#include <iostream>
#include <sstream>

int main() {
    std::istringstream keyboard("104 A 89.5\\n");
    std::cin.rdbuf(keyboard.rdbuf());

    int rollNo = 0;
    char section = ' ';
    double percentage = 0.0;

    std::cin >> rollNo >> section >> percentage;

    std::cout << "Student Roll No: " << rollNo << "\\n";
    std::cout << "Section: " << section << "\\n";
    std::cout << "Percentage: " << percentage << "%\\n";
    return 0;
}`,
        output: `Student Roll No: 104
Section: A
Percentage: 89.5%`
      }
    },
    {
      heading: t('4. Common Mistakes Aur Woh Kyun Hoti Hain (Why They Happen)', '4. Common Mistakes and Why They Happen'),
      body: t(
        'Input-Output karte waqt students jo galtiyan karte hain, unke peeche computer aur Input Buffer ka asli khel samjho:\n\n1. **Sabse Badi Galti: `std::cin >> fullName;` se Poora Naam ("Rohit Sharma") Read Karna:**\n   - **Galti:** User ne naam type kiya `Rohit Sharma`, par `fullName` mein sirf `Rohit` aaya aur `Sharma` gayab ho gaya (ya agle `cin` mein chala gaya)!\n   - **Computer ke andar kya galat hota hai (WHY):** Abhi humne `>>` ka **Rule 3** padha tha: jaise hi `>>` ko space (`\' \'`) dikhta hai, woh wahin ruk jaata hai! Toh `std::cin >> fullName;` ne `"Rohit"` padha aur beech ka space dekhte hi ruk gaya. `"Sharma"` abhi bhi Input Buffer mein pada reh gaya! Agar space ke saath poori line padhni hai, toh `std::getline(std::cin, fullName);` ka use karte hain.\n\n2. **`std::cin >>` ke Turant Baad `std::getline()` Use Karne Par `getline()` Khaali Skip Ho Jaana!**\n   - **Galti:** Pehle `std::cin >> age;` liya (user ne `20` likh kar Enter dabaya), aur agli line par `std::getline(std::cin, fullName);` likha. Program user se naam poochhe bina hi aage badh gaya aur `fullName` khaali (`""`) reh gaya!\n   - **Computer ke andar kya galat hota hai (WHY):** Jab user ne `20` likh kar Enter dabaya, toh buffer mein `"20\\n"` tha. `std::cin >> age;` ne `20` toh nikaal liya, par **`\\n` (Enter key) ko buffer ke andar hi chhod diya!** Ab jab `getline()` chala, toh `getline()` ka niyam hai ki woh `\\n` aane tak padhta hai. Usey buffer ke sabse shuru mein hi purana bacha hua `\\n` mil gaya! Usey laga user ne khaali Enter daba diya hai, aur usne `fullName` mein empty string `""` daal di! Iska ilaj: `getline` se pehle `std::cin >> std::ws;` lagao taaki purana `\\n` saaf ho jaaye.\n\n3. **Number (`int`) Mangte Waqt User Ne Letters (`"abc"`) Type Kar Diye (Stream Fail State):**\n   - **Computer ke andar kya galat hota hai (WHY):** Agar `int x;` ke liye `std::cin >> x;` chala aur user ne `"abc"` type kar diya, toh `\'a\'` digit nahi hai. `std::cin` fail ho jaata hai, apna internal **Fail Bit (`failbit`)** ON kar leta hai, `x` mein `0` daal deta hai, aur `"abc"` ko buffer se nikaalta hi nahi! Iske baad aane wale saare `std::cin` bina ruke skip ho jaate hain jab tak stream reset na ki jaaye.\n\n4. **`std::cin >> x >> "\\n";` likh dena:**\n   - **Computer ke andar kya galat hota hai (WHY):** `cin` sirf variables ke andar data daalta hai. `"\\n"` koi variable nahi hai jisme keyboard ka data store ho sake, isliye compiler turant error de dega.',
        'Here are the most frequent pitfalls with `cin` and `cout`, along with what actually happens inside the Input Buffer:\n\n1. **Reading a Full Name with Spaces (`"Rohit Sharma"`) Using `std::cin >> name;`:**\n   - **The Mistake:** The user types `Rohit Sharma`, but `name` only stores `"Rohit"`!\n   - **Why It Happens Internally:** By **Rule 3**, the `>>` operator stops at the very first whitespace character it sees. It reads `"Rohit"`, hits the space `\' \'`, and stops immediately—leaving `"Sharma\\n"` sitting inside the Input Buffer! To read an entire line including spaces, you must use `std::getline(std::cin, name)`.\n\n2. **Calling `std::getline()` Right After `std::cin >>` (The Infamous Skipped Input Bug!):**\n   - **The Mistake:** You read `std::cin >> age;` (user types `20` and hits Enter) and on the very next line you call `std::getline(std::cin, name);`. The program skips waiting for `name` and leaves `name` completely empty (`""`)!\n   - **Why It Happens Internally:** When the user typed `20` and pressed Enter, the buffer held `"20\\n"`. `std::cin >> age;` extracted `20` and stopped at `\'\\n\'`, **leaving that `\'\\n\'` sitting at the front of the buffer**. Unlike `>>`, `std::getline()` does NOT skip leading newlines—it reads until it sees a `\'\\n\'`. Seeing the leftover `\'\\n\'` immediately at the front of the buffer, `getline()` thinks the user pressed Enter on an empty line and returns `""`! Fix: Use `std::getline(std::cin >> std::ws, name);` to discard leading whitespace first.\n\n3. **Typing Letters (`"abc"`) When `std::cin` Expects an `int` (Stream Fail State):**\n   - **Why It Happens Internally:** When `std::cin >> x;` sees `\'a\'` for an integer `x`, conversion fails. In C++11 and later, `x` is set to `0`, `std::cin` enters a **fail state (`failbit`)**, and `"abc"` stays stuck in the buffer. All subsequent `std::cin` calls are silently ignored until the error state is cleared.\n\n4. **Adding `"\\n"` to `std::cin` (Writing `std::cin >> x >> "\\n";`):**\n   - **Why It Happens Internally:** `>>` extracts data from the keyboard *into* a modifiable variable in memory. `"\\n"` is a read-only string literal, not a variable, causing a massive compiler template error.'
      )
    },
    {
      heading: t('5. Edge Cases (Khaas Situations Aur Unka Asli Output)', '5. Edge Cases (Special Situations and Their Real Output)'),
      body: t(
        'Chalo ab `std::cin` ke 3 kamaal ke edge cases ko real code aur unke asli output ke saath dekhte hain:\n\n1. **Edge Case 1: Integer (`int`) ke input mein Decimal (`12.75`) de dena!**\n   Maan lo tumne `int a;` aur `double b;` banaya, aur `std::cin >> a >> b;` likha. User ne sirf ek number type kiya: `12.75`. Kya hoga? Jab `std::cin >> a` chalega, toh `a` ek `int` hai—woh `\'1\'` aur `\'2\'` padhega, aur jaise hi dot `\'.\'` dekhega, ruk jayega kyunki integer mein dot nahi hota! Toh `a` mein `12` chala jayega, aur `".75"` buffer mein bacha reh jayega! Phir jab `>> b` (`double`) chalega, toh woh us bache huye `".75"` ko padh kar `b` mein `0.75` daal dega!\n\n2. **Edge Case 2: Number aur Word bina space ke chipka kar likhna (`"99Apples"`)**\n   Agar `int count;` aur `std::string fruit;` hai, aur user bina space ke `"99Apples"` type kar de, toh `std::cin >> count` `\'9\'` aur `\'9\'` padh kar `\'A\'` dekhte hi ruk jayega (`count = 99`), aur `std::cin >> fruit` bacha hua `"Apples"` padh lega!\n\n3. **Edge Case 3: `std::cin >>` ke baad `std::ws` laga kar `std::getline()` sahi se chalana**\n   Niche diye gaye code mein yeh teeno edge cases live dekho:',
        'Let us test 3 fascinating edge cases of `std::cin` with real code and see their exact output:\n\n1. **Edge Case 1: Typing a Decimal (`12.75`) into an `int` followed by a `double`**\n   Suppose you have `int a;` and `double b;` and execute `std::cin >> a >> b;`. The user types `12.75`. Because `a` is an `int`, `std::cin >> a` reads `\'1\'` and `\'2\'` and stops immediately at the decimal point `\'.\'` (since a period cannot be part of an integer)! Thus, `a` becomes `12`, leaving `".75"` in the buffer. Next, `>> b` (`double`) reads `".75"` and sets `b` to `0.75`!\n\n2. **Edge Case 2: No Space Between a Number and a Word (`"99Apples"`)**\n   If you read `int count;` followed by `std::string item;` from `"99Apples"`, `std::cin >> count` reads digits until it hits `\'A\'`, setting `count = 99`, and `std::cin >> item` immediately reads `"Apples"`!\n\n3. **Edge Case 3: Using `std::ws` to Fix `cin >>` Followed by `std::getline()`**\n   See all three edge cases verified in the runnable code below:'
      ),
      code: {
        title: t('Edge Cases: 12.75 in int/double, 99Apples, aur getline with std::ws', 'Edge Cases: 12.75 in int/double, 99Apples, and getline with std::ws'),
        language: 'cpp',
        code: `#include <iostream>
#include <sstream>
#include <string>

int main() {
    std::istringstream keyboard("12.75\\n99Apples\\n20\\nAarav Kumar\\n");
    std::cin.rdbuf(keyboard.rdbuf());

    // Edge Case 1: Decimal fed into an int then a double
    int a = 0;
    double b = 0.0;
    std::cin >> a >> b;
    std::cout << "Edge Case 1 -> a: " << a << ", b: " << b << "\\n";

    // Edge Case 2: Number stuck directly to text ("99Apples")
    int count = 0;
    std::string word;
    std::cin >> count >> word;
    std::cout << "Edge Case 2 -> count: " << count << ", word: " << word << "\\n";

    // Edge Case 3: Reading full name with spaces after cin >> age
    int age = 0;
    std::string fullName;
    std::cin >> age;
    std::getline(std::cin >> std::ws, fullName);
    std::cout << "Edge Case 3 -> age: " << age << ", fullName: " << fullName << "\\n";

    return 0;
}`,
        output: `Edge Case 1 -> a: 12, b: 0.75
Edge Case 2 -> count: 99, word: Apples
Edge Case 3 -> age: 20, fullName: Aarav Kumar`
      }
    },
    {
      heading: t('6. Kya Hoga Agar Hum Yeh Badal Dein? (What If You Change This?)', '6. What If You Change This?'),
      body: t(
        'Chalo ab Edge Case 3 wale code mein ek chhota sa badlaav karke dekhte hain:\n\n- **Badlaav 1:** Agar hum `std::getline(std::cin >> std::ws, fullName);` mein se `>> std::ws` hata kar seedha `std::getline(std::cin, fullName);` likh dein toh kya hoga?\n  Jaise hi hum `std::ws` hatayenge, `std::cin >> age;` ke baad buffer mein bacha hua `\'\\n\'` seedha `getline` ko mil jayega, aur `fullName` bilkul **khaali (`""`)** print hoga!\n- **Badlaav 2:** Agar hum `char ch;` mein user ka input `"   Z"` do tareekon se padhein—ek baar normal `std::cin >> ch;` se, aur doosri baar `std::cin >> std::noskipws >> ch;` se—toh kya farq padega?\n  Normal `std::cin >> ch` shuru ke spaces skip karke `\'Z\'` padhta hai. Par `std::noskipws` (No Skip Whitespace) lagane par woh space skip nahi karta aur `ch` ke andar pehla space `\' \'` hi bhar deta hai!\n\nNiche diye gaye code aur uske asli output mein dono badlaav ka asar dekho:',
        'Let us test two modifications to see how the input stream reacts:\n\n- **Modification 1: What if we remove `>> std::ws` from `std::getline(std::cin >> std::ws, fullName)`?**\n  Without `std::ws`, the leftover `\'\\n\'` sitting in the buffer after `std::cin >> age;` is immediately consumed by `std::getline()`. Instead of reading `"Aarav Kumar"`, `fullName` becomes completely empty (`""`)!\n- **Modification 2: What if we use `std::noskipws` when reading a `char`?**\n  Normally, `std::cin >> ch;` skips leading spaces. If we pass `std::noskipws` (No Skip Whitespace), `std::cin` stops skipping spaces and reads the literal space character `\' \'` directly into `ch`!\n\nRun the modified code below to observe both differences:'
      ),
      code: {
        title: t('What If: Bina std::ws ke getline() aur std::noskipws ka Asar', 'What If: getline() Without std::ws and Effect of std::noskipws'),
        language: 'cpp',
        code: `#include <iostream>
#include <sstream>
#include <string>

int main() {
    std::istringstream keyboard("20\\nAarav Kumar\\n   Z");
    std::cin.rdbuf(keyboard.rdbuf());

    int age = 0;
    std::string brokenName;
    std::string actualNextLine;

    // Modification 1: Removing std::ws causes brokenName to be empty!
    std::cin >> age;
    std::getline(std::cin, brokenName);
    std::getline(std::cin, actualNextLine);

    std::cout << "age: " << age << "\\n";
    std::cout << "brokenName (without std::ws): [" << brokenName << "]\\n";
    std::cout << "actualNextLine: [" << actualNextLine << "]\\n";

    // Modification 2: Reading with noskipws reads the space itself
    char ch = 'X';
    std::cin >> std::noskipws >> ch;
    std::cout << "Char read with noskipws: [" << ch << "]\\n";

    return 0;
}`,
        output: `age: 20
brokenName (without std::ws): []
actualNextLine: [Aarav Kumar]
Char read with noskipws: [ ]`
      }
    },
    {
      heading: t('7. Summary (Ab Tak Humne Kya Seekha)', '7. Summary'),
      body: t(
        'Is article mein humne C++ ke Input aur Output system ko andar tak samjha:\n- **`std::cout <<` (Output Stream):** Insertion operator `<<` program ke data ko screen ki taraf bhejta hai.\n- **`std::cin >>` (Input Stream):** Extraction operator `>>` Input Buffer se data nikaal kar variables mein store karta hai.\n- **Input Buffer ke 3 Niyam:** `std::cin >>` hamesha (1) shuru ke spaces/tabs/newlines skip karta hai, (2) variable ke data type ke mutabiq characters padhta hai, aur (3) agla whitespace ya non-matching character aate hi ruk jaata hai.\n- **Spaces ke saath poori line padhna:** Kyunki `std::cin >>` space par ruk jaata hai, poora sentence ya full name padhne ke liye `std::getline(std::cin >> std::ws, str)` ka istemal karein.\n\nAb humari Pehli Batch (Articles 1 se 3) poori ho gayi hai! Agli batch mein hum Variables, Data Types, Memory (`sizeof`), Operators, aur Conditionals ko depth mein cover karenge.',
        'In this article, we mastered C++ console Input and Output:\n- **`std::cout <<` (Output Stream):** The insertion operator `<<` sends data from your program to the screen.\n- **`std::cin >>` (Input Stream):** The extraction operator `>>` pulls characters from the Input Buffer and stores them in variables.\n- **The 3 Rules of `>>`:** It always (1) skips leading whitespace (spaces, tabs, newlines), (2) reads characters matching the target data type, and (3) stops immediately at the next whitespace or non-matching character.\n- **Reading Full Lines with Spaces:** Because `std::cin >>` stops at spaces, use `std::getline(std::cin >> std::ws, str)` whenever you need to read a full name or sentence.\n\nThis completes Batch 1 (Articles 1 to 3)! In the next batch, we will dive deep into Variables, Data Types, `sizeof`, Operators, and Conditionals.'
      )
    }
  ],
  diagram: {
    kind: 'boxes',
    title: t('Input Buffer Aur std::cin >> Ka Internal Flow', 'Internal Flow of the Input Buffer and std::cin >>'),
    caption: t(
      'Dekho jab user "  42  99\\n" type karta hai toh std::cin >> x >> y buffer se data kaise nikaalta hai.',
      'See how std::cin >> x >> y extracts values step by step when the user types "  42  99\\n".'
    ),
    nodes: [
      {
        t: t('1. User Keyboard Input', '1. User Keyboard Input'),
        s: t('User type karta hai: "  42  99\\n"', 'User types: "  42  99\\n"')
      },
      {
        t: t('2. Input Buffer (RAM)', '2. Input Buffer (RAM)'),
        s: t('Characters queue mein jama hote hain', 'Characters wait in the stream buffer queue')
      },
      {
        t: t('3. std::cin >> x', '3. std::cin >> x'),
        s: t('Spaces skip karke 42 padhta hai, agle space par rukta hai', 'Skips leading spaces, reads 42, stops at space')
      },
      {
        t: t('4. std::cin >> y', '4. std::cin >> y'),
        s: t('Bache buffer se spaces skip karke 99 padhta hai', 'Skips spaces in remaining buffer and reads 99')
      }
    ]
  },
  codeExamples: [
    {
      title: t('Interactive Bill Splitter Calculator', 'Interactive Bill Splitter Calculator'),
      language: 'cpp',
      code: `#include <iostream>
#include <sstream>

int main() {
    // Simulating user entering total bill (1200) and number of friends (4)
    std::istringstream keyboard("1200 4\\n");
    std::cin.rdbuf(keyboard.rdbuf());

    int totalBill = 0;
    int friends = 0;

    std::cin >> totalBill >> friends;

    int perPerson = totalBill / friends;
    std::cout << "Total Bill: Rs. " << totalBill << "\\n";
    std::cout << "Friends: " << friends << "\\n";
    std::cout << "Each person pays: Rs. " << perPerson << "\\n";
    return 0;
}`,
      output: `Total Bill: Rs. 1200
Friends: 4
Each person pays: Rs. 300`
    }
  ],
  mcqs: [
    {
      q: t(
        'Maan lo code mein likha hai:\n```cpp\nint a; double b;\nstd::cin >> a >> b;\n```\nAgar user keyboard par `45.8` type karke Enter dabaye, toh `a` aur `b` ke andar kya store hoga?',
        'Suppose your code runs:\n```cpp\nint a; double b;\nstd::cin >> a >> b;\n```\nIf the user types `45.8` and presses Enter, what values will be stored inside `a` and `b`?'
      ),
      opts: [
        t('a = 45, aur program b ke liye agle input ka wait karega', 'a = 45, and the program waits for the user to type a second number for b'),
        t('a = 45, b = 0.8', 'a = 45, b = 0.8'),
        t('a = 46, b = 0.0', 'a = 46, b = 0.0'),
        t('Compiler Error aayegi', 'A Compiler Error occurs')
      ],
      ans: 1,
      expl: t(
        '`a` ek `int` hai, toh `std::cin >> a` digits `4` aur `5` padhega aur dot `.` dekhte hi ruk jayega (`a = 45`). Ab buffer mein `.8` bacha hai. Agla `>> b` (`double`) us `.8` ko turant padh lega aur `b = 0.8` bana dega!',
        'Because `a` is an `int`, `std::cin >> a` reads `45` and stops right at the decimal point `.` (`a = 45`). That leaves `.8` inside the input buffer, which `>> b` (`double`) immediately reads as `0.8`!'
      )
    },
    {
      q: t(
        'Agar `std::string word; std::cin >> word;` chalta hai aur user `Indian Institute of Technology` type karke Enter dabata hai, toh `word` mein kya aayega?',
        'If `std::string word; std::cin >> word;` executes and the user types `Indian Institute of Technology` followed by Enter, what will `word` contain?'
      ),
      opts: [
        t('Indian Institute of Technology', 'Indian Institute of Technology'),
        t('Sirf "Indian"', 'Only "Indian"'),
        t('Sirf "Technology"', 'Only "Technology"'),
        t('Space ki wajah se runtime error aayegi', 'A runtime error occurs due to spaces')
      ],
      ans: 1,
      expl: t(
        'Extraction operator `>>` pehla space aate hi ruk jaata hai. Isliye woh sirf `"Indian"` padh kar `word` mein daalega, aur `" Institute of Technology\\n"` Input Buffer mein hi bacha reh jayega.',
        'The extraction operator `>>` stops reading at the first whitespace character. Therefore, it only reads `"Indian"` into `word`, leaving `" Institute of Technology\\n"` in the input buffer.'
      )
    },
    {
      q: t(
        '`std::cin >> x;` ke turant baad `std::getline(std::cin, str);` likhne par `getline` aksar user ka input liye bina khaali string `""` kyun de deta hai?',
        'Why does calling `std::getline(std::cin, str);` immediately after `std::cin >> x;` often return an empty string `""` without waiting for user input?'
      ),
      opts: [
        t('Kyunki cin aur getline ek hi program mein saath use nahi ho sakte', 'Because cin and getline cannot be used together in the same program'),
        t('Kyunki std::cin >> x number padhne ke baad Enter key (\\n) ko buffer mein chhod deta hai, jise getline turant padh kar ruk jaata hai', 'Because std::cin >> x leaves the trailing newline (\\n) in the input buffer, which getline immediately reads as an empty line'),
        t('Kyunki str ka size 0 hota hai', 'Because the string str has a maximum size of 0'),
        t('Kyunki getline sirf numbers padh sakta hai', 'Because getline can only read numeric values')
      ],
      ans: 1,
      expl: t(
        '`std::cin >> x` number padhne ke baad user dwara dabaye gaye Enter (`\\n`) par rukta hai aur us `\\n` ko buffer mein hi chhod deta hai. Jab `getline` chalta hai, toh woh us bache huye `\\n` ko dekh kar samajhta hai ki line khatam ho gayi.',
        '`std::cin >> x` stops right before the newline character (`\\n`) generated by the Enter key, leaving `\\n` at the front of the buffer. When `getline` runs next, it immediately sees that `\\n` and concludes the line is empty.'
      )
    },
    {
      q: t(
        'Niche diye gaye code mein agar input `"75Marks"` hai, toh kya print hoga?\n```cpp\nint n;\nstd::string s;\nstd::cin >> n >> s;\nstd::cout << n + 5 << "-" << s;\n```',
        'If the input to the following code is `"75Marks"`, what will it print?\n```cpp\nint n;\nstd::string s;\nstd::cin >> n >> s;\nstd::cout << n + 5 << "-" << s;\n```'
      ),
      opts: [
        t('80-Marks', '80-Marks'),
        t('755-Marks', '755-Marks'),
        t('0-75Marks', '0-75Marks'),
        t('Compiler Error', 'Compiler Error')
      ],
      ans: 0,
      expl: t(
        '`std::cin >> n` digits `7` aur `5` padhega aur `\'M\'` dekhte hi ruk jayega (`n = 75`). Uske baad `>> s` bacha hua `"Marks"` padh lega (`s = "Marks"`). Phir `n + 5` (`75 + 5 = 80`) aur `"-"` aur `"Marks"` print hokar `80-Marks` banega.',
        '`std::cin >> n` reads the digits `75` and stops when it encounters `\'M\'` (`n = 75`). Then `>> s` reads the remaining characters `"Marks"`. Finally, `n + 5` evaluates to `80`, printing `80-Marks`.'
      )
    },
    {
      q: t(
        'Inme se kaun sa statement C++ mein **GALAT (Compile-Time Error)** hai?',
        'Which of the following statements causes a **Compile-Time Error** in C++?'
      ),
      opts: [
        t('std::cin >> a >> b;', 'std::cin >> a >> b;'),
        t('std::cout << a << "\\n";', 'std::cout << a << "\\n";'),
        t('std::cin >> a >> "\\n";', 'std::cin >> a >> "\\n";'),
        t('std::cout << "a = " << a;', 'std::cout << "a = " << a;')
      ],
      ans: 2,
      expl: t(
        '`std::cin >>` ke right side mein hamesha ek variable hona chahiye jiske andar data store kiya ja sake. `"\\n"` ek string literal constant hai, koi variable nahi, isliye `std::cin >> a >> "\\n";` par compiler error aati hai.',
        'Every target of `std::cin >>` must be a modifiable variable where extracted data can be stored. `"\\n"` is a string literal, not a variable, so `std::cin >> a >> "\\n";` fails to compile.'
      )
    }
  ],
  keyNotes: [
    t(
      'std::cout ke saath << (Insertion Operator) aur std::cin ke saath >> (Extraction Operator) ka istemal hota hai.',
      'Use the insertion operator (<<) with std::cout for output, and the extraction operator (>>) with std::cin for input.'
    ),
    t(
      'std::cin >> hamesha shuru ke whitespaces (spaces, tabs, newlines) ko skip karta hai aur agla whitespace aate hi padhna rok deta hai.',
      'std::cin >> automatically skips all leading whitespace (spaces, tabs, newlines) and stops reading as soon as it hits the next whitespace character.'
    ),
    t(
      'Spaces ke saath poora naam ya sentence padhne ke liye std::getline(std::cin >> std::ws, variableName) ka use karein.',
      'To read a full line of text that contains spaces, use std::getline(std::cin >> std::ws, variableName).'
    ),
    t(
      'Ek hi line mein std::cin >> a >> b >> c; likh kar hum ek saath kai inputs read kar sakte hain, chahe user unhe space dekar likhe ya Enter daba kar.',
      'You can chain multiple inputs like std::cin >> a >> b >> c; regardless of whether the user separates them with spaces or Enter keys.'
    )
  ],
  practice: {
    title: t('Three Subject Marks Average & Total', 'Three Subject Marks Average & Total'),
    task: t(
      'Program mein input buffer se student ka Roll Number aur 3 subjects ke marks (80, 90, 85) read karo, aur unka Total aur Average print karo.',
      'Read a student Roll Number and 3 subject marks (80, 90, 85) from the input stream, then calculate and print their Total and Average.'
    ),
    language: 'cpp',
    starter: `#include <iostream>
#include <sstream>

int main() {
    std::istringstream keyboard("101 80 90 85\\n");
    std::cin.rdbuf(keyboard.rdbuf());

    int roll = 0, m1 = 0, m2 = 0, m3 = 0;
    std::cin >> roll >> m1 >> m2 >> m3;

    int total = 0;
    // TODO: total = m1 + m2 + m3
    int average = 0;
    // TODO: average = total / 3

    std::cout << "Roll No: " << roll << "\\n";
    std::cout << "Total Marks: " << total << "\\n";
    std::cout << "Average Marks: " << average << "\\n";
    return 0;
}`,
    expected: `Roll No: 101
Total Marks: 255
Average Marks: 85`
  },
  readMinutes: 12
};

export const cppProgramming: Subject = {
  id: 'cpp',
  name: t('C++ Programming', 'C++ Programming'),
  tagline: t(
    'Bilkul zero se C++ seekho — speed aur control ki bhasha.',
    'Learn C++ from absolute zero — the language of speed and control.'
  ),
  icon: '🔷',
  color: '#00599C',
  category: 'cse',
  articles: [cppIntro, cppSetup, cppIo],
};
