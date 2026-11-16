// Learn2Pro v2 — Quantitative Aptitude.
// Own-style AI-written content. Standard aptitude methods are used for facts
// only; every problem, number and setting is invented here.
import type { Subject, Article, LText } from '../lib/types';

const t = (hinglish: string, english: string): LText => ({ hinglish, english });



const quantSimpleInterest: Article = {
    id: 'quant-simple-interest',
    subjectId: 'quantitative-aptitude',
    title: t(
      `Simple Interest — Formula, Shortcut aur Worked Problems`,
      `Simple Interest — Formula, Shortcuts, and Worked Problems`
    ),
    summary: t(
      `Simple interest ko zero se samjho: SI = P x R x T / 100 formula ka matlab, amount kaise nikaalte hain, rate aur time ulta kaise nikaalte hain, aur exam mein time bachane wale shortcuts — sab worked examples ke saath.`,
      `Learn simple interest from scratch: what the formula SI = P x R x T / 100 means, how to find the amount, how to work backwards to find the rate or the time, and the shortcuts that save time in exams — all with worked examples.`
    ),
    sections: [
      {
        heading: t(
          `1. Simple Interest Kya Hai? (Principal, Rate aur Time)`,
          `1. What Is Simple Interest? (Principal, Rate, and Time)`
        ),
        body: t(
          `Simple interest woh extra paisa hai jo udhaar liye hue paison par dena padta hai. Aap bank se Rs. 10,000 udhaar lete ho aur ek saal baad Rs. 10,800 wapas karte ho — woh extra Rs. 800 hi **simple interest (SI)** hai. Is hisaab mein sirf teen cheezein chahiye hoti hain: **P (Principal)** matlab udhaar li gayi asli rakam, **R (Rate)** matlab saal bhar ka percent, aur **T (Time)** matlab kitne saal ke liye paisa liya. Formula hai \`SI = P x R x T / 100\`. 100 se isliye bhaag karte hain kyunki rate percent mein hota hai — 8% ka matlab hai har Rs. 100 par Rs. 8.

Jitna paisa aakhir mein wapas karna hota hai, use **Amount** kehte hain, aur \`Amount = P + SI\` hota hai. Upar wale example mein P = 10,000 aur SI = 800 hai, toh Amount = 10,800. Exam mein aksar SI poochha jaata hai, kabhi Amount poochha jaata hai, aur kabhi SI dekar R ya T ulta nikaalna padta hai — teeno kaam ek hi formula se hote hain, bas formula ko ghumana aana chahiye.

Simple interest ko "simple" isliye kehte hain kyunki interest hamesha sirf **principal par** lagta hai, interest par interest nahi lagta. Agar aapne Rs. 10,000 par 8% se 3 saal ke liye udhaar liya, toh har saal interest Rs. 800 hi rahega — pehle saal 800, doosre saal 800, teesre saal 800, kul Rs. 2,400. Yahi baat compound interest se alag hai, jahan har saal interest badhta jaata hai kyunki interest bhi principal mein jud jaata hai. Agle article mein hum wahi farak detail mein dekhenge.`,
          `Simple interest is the extra money you pay on borrowed money. You borrow Rs. 10,000 from a bank and return Rs. 10,800 after one year — that extra Rs. 800 is the **simple interest (SI)**. This calculation needs only three things: **P (Principal)**, the amount actually borrowed, **R (Rate)**, the percent charged per year, and **T (Time)**, the number of years the money is borrowed for. The formula is \`SI = P x R x T / 100\`. We divide by 100 because the rate is a percent — 8% means Rs. 8 on every Rs. 100.

The total money you finally return is called the **Amount**, and \`Amount = P + SI\`. In the example above, P = 10,000 and SI = 800, so the Amount = 10,800. Exams usually ask for the SI, sometimes for the Amount, and sometimes they give the SI and ask you to work backwards to find R or T — all three jobs use the same formula, you only need to know how to rearrange it.

Simple interest is called "simple" because the interest is always charged only on the **principal**, never on the interest itself. If you borrow Rs. 10,000 at 8% for 3 years, the interest stays Rs. 800 every year — 800 in the first year, 800 in the second, 800 in the third, Rs. 2,400 in total. That is what makes it different from compound interest, where the interest grows every year because the interest itself is added to the principal. We will look at that difference in detail in the next article.`
        )
      },
      {
        heading: t(
          `2. Real-Life Examples: Bank FD, Loan aur Dukaan ka Udhaar`,
          `2. Real-Life Examples: Bank Fixed Deposits, Loans, and Shop Credit`
        ),
        body: t(
          `Simple interest aap roz dekhte ho, bas uska naam nahi jaante. Sabse seedha example hai **bank fixed deposit (FD)**. Aap bank mein Rs. 50,000 jama karte ho aur bank kehta hai 6% saalana simple interest milega. 2 saal baad aapko interest milega 50,000 x 6 x 2 / 100 = Rs. 6,000, aur kul Rs. 56,000 milega. Bank aapko wahi formula laga kar paisa deta hai jo aap exam mein use karte ho.

Doosra example hai **loan**. Maan lo aapne bike ke liye Rs. 80,000 ka loan 9% par 2 saal ke liye liya. Interest hoga 80,000 x 9 x 2 / 100 = Rs. 14,400, aur kul wapas karna hoga Rs. 94,400. EMI nikaalne se pehle bank yahi hisaab karta hai — pehle kul interest, phir mahine ke hisse.

Teesra example hai **dukaan ka udhaar**. Chhoti dukaan par aksar likha hota hai "1 mahine mein paisa do, nahi toh 2% mahina interest". Yahan rate mahine ka hai, saal ka nahi — isliye time ko bhi mahine mein rakhna padta hai, ya rate ko saal mein badalna padta hai. 2% mahina matlab 24% saalana. Exam mein yahi sabse zyada phansata hai: rate aur time ki unit ek jaisi honi chahiye, warna jawab galat aayega.`,
          `You see simple interest every day, you just do not know its name. The simplest example is a **bank fixed deposit (FD)**. You deposit Rs. 50,000 in a bank and the bank offers 6% simple interest per year. After 2 years you earn 50,000 x 6 x 2 / 100 = Rs. 6,000 as interest, and you get Rs. 56,000 in total. The bank pays you using the same formula you use in the exam.

A second example is a **loan**. Suppose you take a loan of Rs. 80,000 for a bike at 9% for 2 years. The interest will be 80,000 x 9 x 2 / 100 = Rs. 14,400, and you must return Rs. 94,400 in total. Before fixing the monthly payment, the bank does exactly this calculation — first the total interest, then the monthly share.

A third example is **shop credit**. Small shops often say "pay within a month, or 2% interest per month". Here the rate is monthly, not yearly — so the time must also be in months, or the rate must be converted to a yearly rate. 2% per month means 24% per year. This is the trap that catches the most people in exams: the rate and the time must use the same unit, or the answer will be wrong.`
        )
      },
      {
        heading: t(
          `3. Step-by-Step: Rs. 10,000 par 8% se 3 Saal ka SI (Dry Run)`,
          `3. Step-by-Step: SI on Rs. 10,000 at 8% for 3 Years (Dry Run)`
        ),
        body: t(
          `Ab hum ek worked example ko step-by-step karte hain. Question hai: Rs. 10,000 par 8% saalana ki dar se 3 saal ka simple interest aur amount nikaalo. Pehle teen values likho: P = 10,000, R = 8, T = 3. Formula hai \`SI = P x R x T / 100\`. Values daalo: SI = 10,000 x 8 x 3 / 100. Pehle upar ka guna karo: 10,000 x 8 = 80,000, phir 80,000 x 3 = 2,40,000. Ab 100 se bhaag do: 2,40,000 / 100 = 2,400. Toh SI = Rs. 2,400. Amount = P + SI = 10,000 + 2,400 = Rs. 12,400.

Shortcut yaad rakho: 100 se bhaag karne ka matlab hai peeche ke do zero kaat dena. 2,40,000 ke peeche se do zero kaato, toh 2,400 bacha. Exam mein yeh ek second bachata hai. Doosra shortcut: pehle R x T nikaal lo. Yahan 8 x 3 = 24, matlab kul 24% interest lagega. 10,000 ka 24% = Rs. 2,400 — ek hi step mein jawab.

Ab ek aur case dekhte hain, taaki method pakka ho jaaye: P = Rs. 5,000, R = 10%, T = 2 saal. SI = 5,000 x 10 x 2 / 100 = 1,00,000 / 100 = Rs. 1,000. Amount = 5,000 + 1,000 = Rs. 6,000. Neeche wala code dono cases ko print karta hai — code ko line-by-line padho aur output ko haath se kiye gaye hisaab se milao.`,
          `Now let us work through one example step by step. The question is: find the simple interest and the amount on Rs. 10,000 at 8% per year for 3 years. First write down the three values: P = 10,000, R = 8, T = 3. The formula is \`SI = P x R x T / 100\`. Put the values in: SI = 10,000 x 8 x 3 / 100. First multiply the top: 10,000 x 8 = 80,000, then 80,000 x 3 = 240,000. Now divide by 100: 240,000 / 100 = 2,400. So SI = Rs. 2,400. Amount = P + SI = 10,000 + 2,400 = Rs. 12,400.

Remember this shortcut: dividing by 100 means cutting off the last two zeroes. Cut two zeroes off 240,000 and 2,400 is left. That saves a second in the exam. A second shortcut: find R x T first. Here 8 x 3 = 24, which means 24% interest in total. 24% of 10,000 = Rs. 2,400 — the answer in a single step.

Now look at one more case so the method becomes solid: P = Rs. 5,000, R = 10%, T = 2 years. SI = 5,000 x 10 x 2 / 100 = 100,000 / 100 = Rs. 1,000. Amount = 5,000 + 1,000 = Rs. 6,000. The code below prints both cases — read it line by line and match the output with the calculation you did by hand.`
        ),
        code: {
          title: t(
            `SI Nikaalna: Rs. 10,000 par 8% se 3 Saal`,
            `Finding SI: Rs. 10,000 at 8% for 3 Years`
          ),
          language: 'python',
          code: `# Simple Interest: SI = P x R x T / 100, Amount = P + SI
P, R, T = 10000, 8, 3
si = P * R * T // 100
amount = P + si
print(f"Principal P = Rs. {P}")
print(f"Rate R = {R}% per year, Time T = {T} years")
print(f"SI = {P} x {R} x {T} / 100 = Rs. {si}")
print(f"Amount = {P} + {si} = Rs. {amount}")
print()
P2, R2, T2 = 5000, 10, 2
si2 = P2 * R2 * T2 // 100
print(f"Case 2: P = Rs. {P2}, R = {R2}%, T = {T2} years")
print(f"SI = Rs. {si2}, Amount = Rs. {P2 + si2}")`,
          output: `Principal P = Rs. 10000
Rate R = 8% per year, Time T = 3 years
SI = 10000 x 8 x 3 / 100 = Rs. 2400
Amount = 10000 + 2400 = Rs. 12400

Case 2: P = Rs. 5000, R = 10%, T = 2 years
SI = Rs. 1000, Amount = Rs. 6000`
        }
      },
      {
        heading: t(
          `4. Common Mistakes: 100 se Bhaag Bhoolna, Mahine ko Saal Samajhna, Amount aur SI ko Mila Dena`,
          `4. Common Mistakes: Forgetting to Divide by 100, Mixing Up Months and Years, Confusing Amount with Interest`
        ),
        body: t(
          `Simple interest mein teen galtiyan sabse zyada hoti hain, aur teeno se bacha ja sakta hai.

**Galti 1: 100 se bhaag bhool jaana.** Log P x R x T guna karke wahi jawab likh dete hain. Rs. 10,000 x 8 x 3 = 2,40,000 likh diya, jabki sahi jawab Rs. 2,400 hai — 100 guna zyada. Hamesha aakhir mein 100 se bhaag karo, ya peeche ke do zero kaato. Apne jawab ko sanity check do: interest principal se chhota hona chahiye jab rate aur time chhote hon.

**Galti 2: mahine ko saal samajh lena.** Agar time 6 mahine diya hai aur rate saalana hai, toh T = 6 nahi, T = 6/12 = 0.5 saal hoga. 6 mahine par 8% se Rs. 10,000 ka SI = 10,000 x 8 x 0.5 / 100 = Rs. 400. Jo log T = 6 likhte hain, unka jawab Rs. 4,800 aata hai — 12 guna zyada. Rule yaad rakho: **rate aur time ki unit ek jaisi honi chahiye** — rate saalana hai toh time saal mein, rate mahina hai toh time mahine mein.

**Galti 3: Amount ko SI samajh lena.** Question poochhe "amount kitna hoga" aur aap sirf SI likh do. Rs. 10,000 par SI Rs. 2,400 hai, par amount Rs. 12,400 hai. Question ko aakhir mein ek baar phir padho: SI maanga hai ya Amount? Agar Amount maanga hai toh P ko jodna mat bhoolo.`,
          `Three mistakes happen most often in simple interest, and all three can be avoided.

**Mistake 1: Forgetting to divide by 100.** People multiply P x R x T and write that as the answer. They write Rs. 10,000 x 8 x 3 = 240,000, when the correct answer is Rs. 2,400 — 100 times smaller. Always divide by 100 at the end, or cut off the last two zeroes. Sanity-check your answer: the interest should be smaller than the principal when the rate and time are small.

**Mistake 2: Treating months as years.** If the time is 6 months and the rate is yearly, then T is not 6, it is T = 6/12 = 0.5 years. SI on Rs. 10,000 at 8% for 6 months = 10,000 x 8 x 0.5 / 100 = Rs. 400. People who write T = 6 get Rs. 4,800 — 12 times too much. Remember the rule: **the rate and the time must use the same unit** — if the rate is yearly, the time must be in years; if the rate is monthly, the time must be in months.

**Mistake 3: Confusing the amount with the interest.** The question asks "what is the amount?" and you write only the SI. On Rs. 10,000 the SI is Rs. 2,400, but the amount is Rs. 12,400. Read the question once more at the end: did it ask for the SI or the Amount? If it asked for the Amount, do not forget to add P.`
        )
      },
      {
        heading: t(
          `5. Edge Cases: Time Mahino mein, Rate Half-Yearly, Zero Rate`,
          `5. Edge Cases: Time in Months, Half-Yearly Rate, Zero Rate`
        ),
        body: t(
          `Edge cases woh situations hain jo normal question mein nahi aati, par exam mein yahi number kaat-ti hain.

**1. Time mahino mein ho.** 18 mahine = 18/12 = 1.5 saal. Rs. 20,000 par 10% se 18 mahine ka SI = 20,000 x 10 x 1.5 / 100 = Rs. 3,000. Mahino ko 12 se bhaag karke saal mein badlo, phir formula lagao.

**2. Rate half-yearly ho.** Agar rate 5% half-yearly hai, toh saalana rate 10% hoga. Ya time ko half-year mein rakho: 2 saal = 4 half-year, rate 5% per half-year. Dono tareeke se ek hi jawab aata hai, bas unit ek jaisi rakhni hai.

**3. Rate ya time zero ho.** Agar R = 0 hai, toh SI = 0 — kitna bhi bada principal ya time ho, interest zero hi rahega. Agar T = 0 hai, toh bhi SI = 0, kyunki paisa ek din bhi udhaar nahi raha. Formula mein zero daal kar dekho, jawab khud zero aayega.

**4. SI principal se zyada ho.** Yeh possible hai: Rs. 10,000 par 20% se 6 saal mein SI = 10,000 x 20 x 6 / 100 = Rs. 12,000 — principal se zyada. Ismein koi galti nahi hai. Jab R x T 100 se zyada ho jaaye, toh SI principal se bada ho jaata hai.`,
          `Edge cases are the situations that never appear in a normal question, but these are the ones that cost marks in exams.

**1. Time given in months.** 18 months = 18/12 = 1.5 years. SI on Rs. 20,000 at 10% for 18 months = 20,000 x 10 x 1.5 / 100 = Rs. 3,000. Divide the months by 12 to get years, then apply the formula.

**2. Rate given half-yearly.** If the rate is 5% half-yearly, the yearly rate is 10%. Or keep the time in half-years: 2 years = 4 half-years at 5% per half-year. Both ways give the same answer, as long as the units match.

**3. Rate or time is zero.** If R = 0, then SI = 0 — no matter how big the principal or the time is, the interest stays zero. If T = 0, SI is also 0, because the money was not borrowed even for a day. Put zero into the formula and the answer comes out zero by itself.

**4. SI bigger than the principal.** This is possible: on Rs. 10,000 at 20% for 6 years, SI = 10,000 x 20 x 6 / 100 = Rs. 12,000 — more than the principal. There is no mistake here. When R x T goes above 100, the SI becomes bigger than the principal.`
        )
      },
      {
        heading: t(
          `6. What If: Rate Double, Time Double, Principal Double`,
          `6. What-If: Doubling the Rate, the Time, or the Principal`
        ),
        body: t(
          `Ab hum "what-if" sawaal poochhte hain — yahi exam mein concept check karne ke liye aate hain.

**What if: rate double kar dein?** SI = P x R x T / 100 mein R double ho jaaye toh SI bhi double ho jaata hai, kyunki formula mein sab guna mein hai. Rs. 10,000 par 8% se 3 saal mein SI Rs. 2,400 hai; rate 16% kar do toh SI Rs. 4,800 ho jaayega. Neeche wala code isko verify karta hai — time nikaalna ho toh formula ko ulta karo.

**What if: time double kar dein?** Wahi baat: T double toh SI double. 3 saal ki jagah 6 saal kar do toh SI Rs. 2,400 se Rs. 4,800 ho jaayega. Isi liye lamba loan hamesha mehenga padta hai.

**What if: principal double kar dein?** P double toh SI double. Rs. 20,000 par 8% se 3 saal mein SI Rs. 4,800 hoga. Teenon mein se koi bhi ek double karo, SI double; do ko double karo, SI chaar guna.

**What if: SI, P aur R dekar T nikaalna ho?** Formula ko ulta karo: \`T = SI x 100 / (P x R)\`. Example: SI = Rs. 1,800, P = Rs. 6,000, R = 6%. T = 1,800 x 100 / (6,000 x 6) = 1,80,000 / 36,000 = 5 saal. Check karo: 6,000 x 6 x 5 / 100 = Rs. 1,800 — sahi hai.`,
          `Now let us ask "what-if" questions — these are the ones exams use to test whether you really understand the concept.

**What if we double the rate?** In SI = P x R x T / 100, if R doubles, the SI also doubles, because everything in the formula is multiplied. On Rs. 10,000 at 8% for 3 years the SI is Rs. 2,400; make the rate 16% and the SI becomes Rs. 4,800. The code below checks this — and to find the time, rearrange the formula.

**What if we double the time?** The same rule: double T and the SI doubles. Change 3 years to 6 years and the SI goes from Rs. 2,400 to Rs. 4,800. That is why a longer loan always costs more.

**What if we double the principal?** Double P and the SI doubles. On Rs. 20,000 at 8% for 3 years the SI will be Rs. 4,800. Double any one of the three and the SI doubles; double two of them and the SI becomes four times.

**What if SI, P, and R are given and T must be found?** Rearrange the formula: \`T = SI x 100 / (P x R)\`. Example: SI = Rs. 1,800, P = Rs. 6,000, R = 6%. T = 1,800 x 100 / (6,000 x 6) = 180,000 / 36,000 = 5 years. Check it: 6,000 x 6 x 5 / 100 = Rs. 1,800 — correct.`
        )
      },
      {
        heading: t(
          `7. Summary: SI ka Poora Picture`,
          `7. Summary: The Full Picture of SI`
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. **Simple interest** ka formula hai \`SI = P x R x T / 100\`, aur **Amount = P + SI**. Interest hamesha sirf principal par lagta hai, isliye har saal ka interest ek jaisa rehta hai. Rate aur time ki unit hamesha ek jaisi rakho — rate saalana hai toh time saal mein, warna mahino ko 12 se bhaag karke saal mein badlo.

Formula ko ulta karna bhi seekho: \`R = SI x 100 / (P x T)\` aur \`T = SI x 100 / (P x R)\`. In teeno roopon ko yaad rakh lo, kyunki exam mein teeno tarah ke sawaal aate hain. Shortcut yaad rakho: pehle R x T nikaal lo — wahi kul percent hota hai, aur principal ka utna percent hi SI hota hai.

Aakhiri check: jawab aane par ek baar socho — kya interest principal se chhota hai jab R x T 100 se kam hai? Kya unit sahi hai? Agar dono haan hain, toh jawab sahi hai. Agle article mein hum compound interest dekhenge — wahan interest par bhi interest lagta hai, isliye hisaab har saal badal jaata hai.`,
          `Let us tie the whole article together. The formula for **simple interest** is \`SI = P x R x T / 100\`, and **Amount = P + SI**. Interest is always charged only on the principal, so the interest stays the same every year. Always keep the rate and the time in the same unit — if the rate is yearly, the time must be in years; otherwise divide the months by 12 to get years.

Also learn to rearrange the formula: \`R = SI x 100 / (P x T)\` and \`T = SI x 100 / (P x R)\`. Remember all three forms, because exams ask all three kinds of questions. Remember the shortcut: find R x T first — that is the total percent, and that percent of the principal is the SI.

One final check: when you get an answer, ask yourself — is the interest smaller than the principal when R x T is below 100? Are the units correct? If both answers are yes, the answer is right. In the next article we will look at compound interest — there, interest is charged on the interest too, so the calculation changes every year.`
        )
      }
    ],
    diagram: {
      kind: 'flow',
      title: t(
        `Simple Interest ka Flow: P, R, T se Amount Tak`,
        `Simple Interest Flow: From P, R, T to the Amount`
      ),
      caption: t(
        `Teen values daalo, formula lagao, interest aur amount nikaalo`,
        `Put in three values, apply the formula, and get the interest and the amount`
      ),
      nodes: [
        {
          t: t('P = Principal (Rs. 10,000)', 'P = Principal (Rs. 10,000)'),
          s: t('Udhaar li gayi asli rakam', 'The amount actually borrowed')
        },
        {
          t: t('R = 8% saalana, T = 3 saal', 'R = 8% per year, T = 3 years'),
          s: t('Rate aur time ki unit ek jaisi rakho', 'Keep the rate and time in the same unit')
        },
        {
          t: t('SI = P x R x T / 100 = Rs. 2,400', 'SI = P x R x T / 100 = Rs. 2,400'),
          s: t('10,000 x 8 x 3 / 100', '10,000 x 8 x 3 / 100')
        },
        {
          t: t('Amount = P + SI = Rs. 12,400', 'Amount = P + SI = Rs. 12,400'),
          s: t('Wapas karne wali kul rakam', 'The total money to be returned')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          `Time Nikaalna: SI, P aur R se T`,
          `Finding Time: T from SI, P, and R`
        ),
        language: 'python',
        code: `# Find Time: T = SI x 100 / (P x R)
P, R, si = 6000, 6, 1800
T = si * 100 // (P * R)
print(f"SI = Rs. {si}, P = Rs. {P}, R = {R}%")
print(f"T = {si} x 100 / ({P} x {R}) = {T} years")
print(f"Check: SI = {P} x {R} x {T} / 100 = Rs. {P * R * T // 100}")`,
        output: `SI = Rs. 1800, P = Rs. 6000, R = 6%
T = 1800 x 100 / (6000 x 6) = 5 years
Check: SI = 6000 x 6 x 5 / 100 = Rs. 1800`
      },
      {
        title: t(
          `Rate Nikaalna: SI, P aur T se R`,
          `Finding Rate: R from SI, P, and T`
        ),
        language: 'python',
        code: `# Find Rate: R = SI x 100 / (P x T)
P, si, T = 8000, 1920, 4
R = si * 100 // (P * T)
print(f"SI = Rs. {si}, P = Rs. {P}, T = {T} years")
print(f"R = {si} x 100 / ({P} x {T}) = {R}% per year")
print(f"Check: SI = {P} x {R} x {T} / 100 = Rs. {P * R * T // 100}")`,
        output: `SI = Rs. 1920, P = Rs. 8000, T = 4 years
R = 1920 x 100 / (8000 x 4) = 6% per year
Check: SI = 8000 x 6 x 4 / 100 = Rs. 1920`
      }
    ],
    mcqs: [
      {
        q: t(
          `Rs. 10,000 par 8% saalana se 3 saal ka simple interest kitna hoga?`,
          `What is the simple interest on Rs. 10,000 at 8% per year for 3 years?`
        ),
        opts: [
          t(`Rs. 1,800`, `Rs. 1,800`),
          t(`Rs. 2,000`, `Rs. 2,000`),
          t(`Rs. 2,400`, `Rs. 2,400`),
          t(`Rs. 3,000`, `Rs. 3,000`)
        ],
        ans: 2,
        expl: t(
          `Sahi jawab: SI = 10,000 x 8 x 3 / 100 = Rs. 2,400.`,
          `Correct answer: SI = 10,000 x 8 x 3 / 100 = Rs. 2,400.`
        )
      },
      {
        q: t(
          `Principal Rs. 5,000 hai aur SI Rs. 1,000 hai. Amount kitna hoga?`,
          `The principal is Rs. 5,000 and the SI is Rs. 1,000. What is the amount?`
        ),
        opts: [
          t(`Rs. 5,500`, `Rs. 5,500`),
          t(`Rs. 6,000`, `Rs. 6,000`),
          t(`Rs. 6,500`, `Rs. 6,500`),
          t(`Rs. 5,000`, `Rs. 5,000`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: Amount = P + SI = 5,000 + 1,000 = Rs. 6,000.`,
          `Correct answer: Amount = P + SI = 5,000 + 1,000 = Rs. 6,000.`
        )
      },
      {
        q: t(
          `SI = Rs. 1,800, P = Rs. 6,000, R = 6% hai. Time kitna hoga?`,
          `SI = Rs. 1,800, P = Rs. 6,000, R = 6%. What is the time?`
        ),
        opts: [
          t(`3 saal`, `3 years`),
          t(`4 saal`, `4 years`),
          t(`5 saal`, `5 years`),
          t(`6 saal`, `6 years`)
        ],
        ans: 2,
        expl: t(
          `Sahi jawab: T = 1,800 x 100 / (6,000 x 6) = 5 saal. Check: 6,000 x 6 x 5 / 100 = Rs. 1,800.`,
          `Correct answer: T = 1,800 x 100 / (6,000 x 6) = 5 years. Check: 6,000 x 6 x 5 / 100 = Rs. 1,800.`
        )
      },
      {
        q: t(
          `SI = Rs. 1,920, P = Rs. 8,000, T = 4 saal hai. Rate kitna hoga?`,
          `SI = Rs. 1,920, P = Rs. 8,000, T = 4 years. What is the rate?`
        ),
        opts: [
          t(`4%`, `4%`),
          t(`5%`, `5%`),
          t(`6%`, `6%`),
          t(`8%`, `8%`)
        ],
        ans: 2,
        expl: t(
          `Sahi jawab: R = 1,920 x 100 / (8,000 x 4) = 6% saalana.`,
          `Correct answer: R = 1,920 x 100 / (8,000 x 4) = 6% per year.`
        )
      },
      {
        q: t(
          `Rate double kar dein aur baaki sab ek jaisa rakhein, toh SI par kya asar hoga?`,
          `If the rate is doubled and everything else stays the same, what happens to the SI?`
        ),
        opts: [
          t(`SI aadha ho jaayega`, `The SI becomes half`),
          t(`SI ek jaisa rahega`, `The SI stays the same`),
          t(`SI double ho jaayega`, `The SI doubles`),
          t(`SI chaar guna ho jaayega`, `The SI becomes four times`)
        ],
        ans: 2,
        expl: t(
          `Sahi jawab: SI = P x R x T / 100 mein sab guna mein hai, isliye R double hone par SI bhi double ho jaata hai.`,
          `Correct answer: in SI = P x R x T / 100 everything is multiplied, so doubling R doubles the SI.`
        )
      }
    ],
    keyNotes: [
      t(
        `SI = P x R x T / 100; Amount = P + SI.`,
        `SI = P x R x T / 100; Amount = P + SI.`
      ),
      t(
        `Interest sirf principal par lagta hai, isliye har saal ka interest ek jaisa rehta hai.`,
        `Interest is charged only on the principal, so the interest stays the same every year.`
      ),
      t(
        `Rate aur time ki unit ek jaisi rakho — mahino ko 12 se bhaag karke saal mein badlo.`,
        `Keep the rate and the time in the same unit — divide months by 12 to get years.`
      ),
      t(
        `R = SI x 100 / (P x T) aur T = SI x 100 / (P x R) se rate aur time ulta nikaalo.`,
        `Find the rate or time backwards with R = SI x 100 / (P x T) and T = SI x 100 / (P x R).`
      ),
      t(
        `Shortcut: pehle R x T nikaalo — wahi kul percent hai, aur principal ka utna percent hi SI hai.`,
        `Shortcut: find R x T first — that is the total percent, and that percent of the principal is the SI.`
      )
    ],
    practice: {
      title: t(
        `Practice: Rs. 12,000 par 5% se 4 Saal ka SI aur Amount`,
        `Practice: SI and Amount on Rs. 12,000 at 5% for 4 Years`
      ),
      task: t(
        `Rs. 12,000 par 5% saalana se 4 saal ka simple interest aur amount nikaalo. Starter code poora runnable hai — isko run karke verify karo ki output expected jaisa aata hai.`,
        `Find the simple interest and the amount on Rs. 12,000 at 5% per year for 4 years. The starter code is complete and runnable — run it and verify the output matches the expected output.`
      ),
      language: 'python',
      starter: `# Practice: P = Rs. 12000, R = 5%, T = 4 years
P, R, T = 12000, 5, 4
si = P * R * T // 100
amount = P + si
print(f"SI = {P} x {R} x {T} / 100 = Rs. {si}")
print(f"Amount = {P} + {si} = Rs. {amount}")`,
      expected: `SI = 12000 x 5 x 4 / 100 = Rs. 2400
Amount = 12000 + 2400 = Rs. 14400`
    },
    readMinutes: 12
  };

const quantCompoundInterest: Article = {
    id: 'quant-compound-interest',
    subjectId: 'quantitative-aptitude',
    title: t(
      `Compound Interest — Formula, CI vs SI, Half-Yearly`,
      `Compound Interest — Formula, CI vs SI, and Half-Yearly`
    ),
    summary: t(
      `Compound interest ko zero se samjho: A = P x (1 + r/100)^n ka matlab, har saal interest principal mein kaise judta hai, CI aur SI ka farak, aur half-yearly compounding ka hisaab — sab worked examples ke saath.`,
      `Learn compound interest from scratch: what A = P x (1 + r/100)^n means, how the interest joins the principal every year, the difference between CI and SI, and how half-yearly compounding works — all with worked examples.`
    ),
    sections: [
      {
        heading: t(
          `1. Compound Interest Kya Hai? (Interest par Interest)`,
          `1. What Is Compound Interest? (Interest on Interest)`
        ),
        body: t(
          `Compound interest mein interest sirf principal par nahi lagta — interest par bhi interest lagta hai. Aap Rs. 10,000 bank mein 10% par jama karte ho. Pehle saal ke aakhir mein interest Rs. 1,000 milta hai, aur ab aapke paas Rs. 11,000 ho gaye. Doosre saal mein interest 10,000 par nahi, **11,000 par** lagega — Rs. 1,100. Kul 2 saal mein interest Rs. 2,100 hoga, jabki simple interest mein sirf Rs. 2,000 hota. Woh extra Rs. 100 hi compound interest ki pehchan hai: **pehle saal ke interest par doosre saal ka interest**.

Formula hai \`A = P x (1 + r/100)^n\`, jahan **A** amount hai, **P** principal, **r** saalana rate, aur **n** saal ki sankhya. CI nikaalne ke liye \`CI = A - P\` karte hain. Upar wale example mein A = 10,000 x (1.10)^2 = 10,000 x 1.21 = Rs. 12,100, aur CI = 12,100 - 10,000 = Rs. 2,100.

Yeh formula yaad rakhne ka tareeka hai: har saal paisa (1 + r/100) guna badhta hai. 10% par har saal paisa 1.10 guna hota hai. 2 saal mein 1.10 x 1.10 = 1.21 guna, 3 saal mein 1.10 x 1.10 x 1.10 = 1.331 guna. Isi liye lamba time ho toh compound interest simple interest se bahut zyada ho jaata hai — interest khud bhi paisa kamane lagta hai.`,
          `In compound interest, interest is charged not only on the principal — it is charged on the interest too. You deposit Rs. 10,000 in a bank at 10%. At the end of the first year you earn Rs. 1,000 as interest, and now you have Rs. 11,000. In the second year the interest is charged not on 10,000 but on **11,000** — Rs. 1,100. Over 2 years the total interest is Rs. 2,100, while simple interest would give only Rs. 2,000. That extra Rs. 100 is the signature of compound interest: **interest on the first year's interest in the second year**.

The formula is \`A = P x (1 + r/100)^n\`, where **A** is the amount, **P** is the principal, **r** is the yearly rate, and **n** is the number of years. To get the CI, use \`CI = A - P\`. In the example above, A = 10,000 x (1.10)^2 = 10,000 x 1.21 = Rs. 12,100, and CI = 12,100 - 10,000 = Rs. 2,100.

The way to remember this formula is: every year the money grows by a factor of (1 + r/100). At 10%, the money becomes 1.10 times every year. In 2 years it becomes 1.10 x 1.10 = 1.21 times, in 3 years 1.10 x 1.10 x 1.10 = 1.331 times. That is why, over a long time, compound interest becomes much bigger than simple interest — the interest itself starts earning money.`
        )
      },
      {
        heading: t(
          `2. Real-Life Examples: FD, Loan aur Paisa Badhna`,
          `2. Real-Life Examples: Fixed Deposits, Loans, and Growing Money`
        ),
        body: t(
          `Compound interest aapke aas-paas har jagah hai. Sabse bada example hai **bank FD aur savings account**. Bank aapke paison par interest deta hai, aur woh interest aapke khaate mein jud jaata hai — agle saal interest us bade balance par milta hai. 5-10 saal mein yahi compounding aapke paison ko bahut bada kar deti hai. Isi liye log kehte hain "jaldi invest karo" — compounding ko time chahiye hota hai.

Doosra example hai **loan aur credit card**. Loan mein compounding aapke khilaf kaam karti hai: jo interest bharna reh jaaye, woh principal mein jud jaata hai aur agle mahine us par bhi interest lagta hai. Credit card ka bill time par na bharo toh karz tezi se badhta hai — yahi compounding hai, ulta direction mein.

Teesra example hai **inflation aur population growth**. Ek sheher ki aabadi har saal 2% badhti hai, toh 10 saal baad woh sirf 20% nahi, lagbhag 22% zyada hogi — kyunki har saal badhi hui aabadi par growth lagti hai. Exam mein bhi aise hi sawaal aate hain: "population 2% saalana badhti hai, 3 saal baad kitni hogi?" — wahi compound interest ka formula lagta hai.`,
          `Compound interest is all around you. The biggest example is a **bank FD or savings account**. The bank pays interest on your money, and that interest is added to your account — next year the interest is paid on the bigger balance. Over 5-10 years, this compounding makes your money grow a lot. That is why people say "start investing early" — compounding needs time.

A second example is a **loan or credit card**. In a loan, compounding works against you: any interest left unpaid is added to the principal, and next month interest is charged on that too. If you do not pay a credit card bill on time, the debt grows fast — that is compounding, in the opposite direction.

A third example is **inflation and population growth**. If a city's population grows 2% every year, after 10 years it will not be just 20% bigger, it will be about 22% bigger — because growth is applied to the increased population every year. Exams ask such questions too: "the population grows 2% a year, how much will it be after 3 years?" — the same compound interest formula applies.`
        )
      },
      {
        heading: t(
          `3. Step-by-Step: Rs. 10,000 par 10% se 2 Saal ka CI (Dry Run)`,
          `3. Step-by-Step: CI on Rs. 10,000 at 10% for 2 Years (Dry Run)`
        ),
        body: t(
          `Ab hum worked example ko saal-dar-saal karte hain, taaki compounding dikhai de. Question hai: Rs. 10,000 par 10% saalana se 2 saal ka compound interest aur amount nikaalo. **Pehla saal:** interest = 10,000 x 10 / 100 = Rs. 1,000. Saal ke aakhir mein balance = 10,000 + 1,000 = Rs. 11,000. **Doosra saal:** interest = 11,000 x 10 / 100 = Rs. 1,100. Saal ke aakhir mein balance = 11,000 + 1,100 = Rs. 12,100.

Toh Amount A = Rs. 12,100 aur CI = 12,100 - 10,000 = Rs. 2,100. Simple interest isi case mein hota 10,000 x 10 x 2 / 100 = Rs. 2,000. Farak hai CI - SI = Rs. 100. Yeh Rs. 100 kahan se aaya? Pehle saal ke Rs. 1,000 interest par doosre saal ka 10% = Rs. 100. Yahi "interest on interest" hai.

Formula se bhi check karo: A = 10,000 x (1 + 10/100)^2 = 10,000 x (1.10)^2 = 10,000 x 1.21 = Rs. 12,100. Dono tareeke se ek hi jawab aata hai. Exam mein chhote n (2 ya 3) ke liye saal-dar-saal method safe hai, aur bade n ke liye formula. Neeche wala code dono tareeke print karta hai.`,
          `Now let us work through an example year by year, so that compounding becomes visible. The question is: find the compound interest and the amount on Rs. 10,000 at 10% per year for 2 years. **First year:** interest = 10,000 x 10 / 100 = Rs. 1,000. Balance at the end of the year = 10,000 + 1,000 = Rs. 11,000. **Second year:** interest = 11,000 x 10 / 100 = Rs. 1,100. Balance at the end of the year = 11,000 + 1,100 = Rs. 12,100.

So Amount A = Rs. 12,100 and CI = 12,100 - 10,000 = Rs. 2,100. Simple interest in the same case would be 10,000 x 10 x 2 / 100 = Rs. 2,000. The difference is CI - SI = Rs. 100. Where did this Rs. 100 come from? It is 10% of the first year's Rs. 1,000 interest, charged in the second year. That is the "interest on interest".

Check it with the formula too: A = 10,000 x (1 + 10/100)^2 = 10,000 x (1.10)^2 = 10,000 x 1.21 = Rs. 12,100. Both methods give the same answer. In exams, the year-by-year method is safe for small n (2 or 3), and the formula is for large n. The code below prints both ways.`
        ),
        code: {
          title: t(
            `CI Nikaalna: Rs. 10,000 par 10% se 2 Saal`,
            `Finding CI: Rs. 10,000 at 10% for 2 Years`
          ),
          language: 'python',
          code: `# Compound Interest: A = P x (1 + r/100)^n, CI = A - P
P, r, n = 10000, 10, 2
A = round(P * (1 + r / 100) ** n)
ci = A - P
si = P * r * n // 100
print(f"P = Rs. {P}, rate = {r}%, years = {n}")
print(f"Year 1: {P} + 10% = Rs. {round(P * 1.10)}")
print(f"Year 2: {round(P * 1.10)} + 10% = Rs. {A}")
print(f"Amount A = Rs. {A}")
print(f"CI = {A} - {P} = Rs. {ci}")
print(f"SI = Rs. {si}, so CI - SI = Rs. {ci - si}")`,
          output: `P = Rs. 10000, rate = 10%, years = 2
Year 1: 10000 + 10% = Rs. 11000
Year 2: 11000 + 10% = Rs. 12100
Amount A = Rs. 12100
CI = 12100 - 10000 = Rs. 2100
SI = Rs. 2000, so CI - SI = Rs. 100`
        }
      },
      {
        heading: t(
          `4. Common Mistakes: SI Formula Lagana, Power Bhoolna, CI ko Amount Samajhna`,
          `4. Common Mistakes: Using the SI Formula, Forgetting the Power, Confusing CI with the Amount`
        ),
        body: t(
          `Compound interest mein teen galtiyan sabse zyada hoti hain.

**Galti 1: CI mein SI ka formula lagana.** Log A = P x (1 + r/100)^n ki jagah SI = P x R x T / 100 laga dete hain aur Rs. 2,000 likh dete hain, jabki sahi CI Rs. 2,100 hai. Question mein "compound" likha ho toh hamesha power wala formula use karo.

**Galti 2: power bhool jaana ya galat lagana.** Kuch log A = P x (1 + r/100) likhte hain bina ^n ke — yeh sirf 1 saal ka hisaab hai. 2 saal ke liye (1.10)^2 = 1.21 chahiye, sirf 1.10 nahi. Power hamesha saal ki sankhya ke barabar hoti hai.

**Galti 3: CI ko Amount samajh lena.** A = Rs. 12,100 hai amount, CI = Rs. 2,100 hai. Question poochhe "compound interest kitna hai" toh A mein se P ghatao. Bahut se log seedha A likh dete hain aur number kaat-te hain.`,
          `Three mistakes happen most often in compound interest.

**Mistake 1: Using the SI formula for CI.** People apply SI = P x R x T / 100 instead of A = P x (1 + r/100)^n and write Rs. 2,000, when the correct CI is Rs. 2,100. When the question says "compound", always use the formula with the power.

**Mistake 2: Forgetting the power or using it wrongly.** Some people write A = P x (1 + r/100) without the ^n — that is the calculation for only 1 year. For 2 years you need (1.10)^2 = 1.21, not just 1.10. The power is always equal to the number of years.

**Mistake 3: Confusing CI with the amount.** A = Rs. 12,100 is the amount, CI = Rs. 2,100 is the interest. If the question asks "what is the compound interest?", subtract P from A. Many people write A directly and lose the mark.`
        )
      },
      {
        heading: t(
          `5. Edge Cases: 1 Saal, Half-Yearly Rate, Rate Badalna`,
          `5. Edge Cases: 1 Year, Half-Yearly Rate, Changing Rate`
        ),
        body: t(
          `Edge cases compound interest mein khaas taur par important hain.

**1. Sirf 1 saal ho.** Jab n = 1 hai, toh CI = SI hota hai — kyunki interest par interest lagne ka mauka hi nahi mila. Rs. 10,000 par 10% se 1 saal mein CI bhi Rs. 1,000 hai aur SI bhi Rs. 1,000. Exam mein yeh ek-line sawaal ban kar aata hai.

**2. Half-yearly compounding.** Agar interest har 6 mahine mein judta hai, toh rate aadha aur periods double ho jaate hain. Rs. 8,000 par 10% saalana, half-yearly: rate = 5% per half-year, periods = 2. A = 8,000 x (1.05)^2 = Rs. 8,820, CI = Rs. 820. Yearly compounding se CI Rs. 800 hota — half-yearly mein Rs. 20 zyada, kyunki interest jaldi jud gaya.

**3. Rate har saal badle.** Agar pehle saal 10% aur doosre saal 20% hai, toh formula ek saath nahi lagta. Saal-dar-saal karo: 10,000 + 10% = 11,000, phir 11,000 + 20% = 13,200. A = Rs. 13,200, CI = Rs. 3,200.

**4. n = 0 ho.** Agar time zero hai, toh A = P x (kuch bhi)^0 = P, aur CI = 0. Paisa ek din bhi nahi raha, toh interest zero.`,
          `Edge cases are especially important in compound interest.

**1. Only 1 year.** When n = 1, CI = SI — because the interest never gets a chance to earn interest itself. On Rs. 10,000 at 10% for 1 year, both CI and SI are Rs. 1,000. Exams ask this as a one-line question.

**2. Half-yearly compounding.** If interest is added every 6 months, the rate is halved and the periods are doubled. Rs. 8,000 at 10% per year, half-yearly: rate = 5% per half-year, periods = 2. A = 8,000 x (1.05)^2 = Rs. 8,820, CI = Rs. 820. Yearly compounding would give CI of Rs. 800 — half-yearly gives Rs. 20 more, because the interest was added sooner.

**3. Rate changes every year.** If the first year is 10% and the second year is 20%, one formula does not work. Go year by year: 10,000 + 10% = 11,000, then 11,000 + 20% = 13,200. A = Rs. 13,200, CI = Rs. 3,200.

**4. n = 0.** If the time is zero, then A = P x (anything)^0 = P, and CI = 0. The money did not stay even for a day, so the interest is zero.`
        )
      },
      {
        heading: t(
          `6. What If: CI vs SI ka Farak, Half-Yearly vs Yearly`,
          `6. What-If: CI vs SI Difference, Half-Yearly vs Yearly`
        ),
        body: t(
          `Ab hum "what-if" sawaal poochhte hain.

**What if: 2 saal mein CI - SI kitna hota hai?** Iska ek direct formula hai: \`CI - SI = P x (r/100)^2\`. Rs. 10,000 par 10% se 2 saal mein farak = 10,000 x (0.10)^2 = 10,000 x 0.01 = Rs. 100. Yahi woh Rs. 100 hai jo humne dry run mein dekha tha. Exam mein yeh formula bahut time bachata hai — poora CI nikaale bina farak mil jaata hai.

**What if: half-yearly aur yearly mein kya farak hai?** Half-yearly mein interest jaldi judta hai, isliye CI thoda zyada hota hai. Rs. 8,000 par 10% se 1 saal mein yearly CI = Rs. 800, half-yearly CI = Rs. 820. Farak sirf Rs. 20 hai, par bade principal aur lambe time par yeh farak bada ho jaata hai.

**What if: n = 3 ho?** Rs. 5,000 par 20% se 3 saal: A = 5,000 x (1.20)^3 = 5,000 x 1.728 = Rs. 8,640, CI = Rs. 3,640. SI hota 5,000 x 20 x 3 / 100 = Rs. 3,000. Farak Rs. 640 — 2 saal se bahut zyada, kyunki compounding har saal tez hoti jaati hai.`,
          `Now let us ask "what-if" questions.

**What if we want CI - SI for 2 years?** There is a direct formula: \`CI - SI = P x (r/100)^2\`. On Rs. 10,000 at 10% for 2 years, the difference = 10,000 x (0.10)^2 = 10,000 x 0.01 = Rs. 100. That is the same Rs. 100 we saw in the dry run. This formula saves a lot of time in exams — you get the difference without finding the full CI.

**What if we compare half-yearly and yearly?** In half-yearly compounding the interest is added sooner, so the CI is a little bigger. On Rs. 8,000 at 10% for 1 year, yearly CI = Rs. 800 and half-yearly CI = Rs. 820. The difference is only Rs. 20, but with a big principal and a long time this gap grows large.

**What if n = 3?** Rs. 5,000 at 20% for 3 years: A = 5,000 x (1.20)^3 = 5,000 x 1.728 = Rs. 8,640, CI = Rs. 3,640. SI would be 5,000 x 20 x 3 / 100 = Rs. 3,000. The difference is Rs. 640 — much bigger than for 2 years, because compounding gets faster every year.`
        )
      },
      {
        heading: t(
          `7. Summary: CI ka Poora Picture`,
          `7. Summary: The Full Picture of CI`
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. **Compound interest** mein interest principal mein judta rehta hai, isliye har saal ka interest pichhle saal se zyada hota hai. Formula hai \`A = P x (1 + r/100)^n\` aur \`CI = A - P\`. Jab n = 1 hai, toh CI = SI; jab n 2 ya zyada hai, toh CI hamesha SI se bada hota hai.

2 saal ke liye farak ka shortcut yaad rakho: \`CI - SI = P x (r/100)^2\`. Half-yearly compounding mein rate aadha aur periods double kar do — CI thoda zyada aayega kyunki interest jaldi judta hai. Rate har saal badle toh saal-dar-saal hisaab karo, ek formula mat lagao.

Aakhiri check: CI kabhi SI se kam nahi ho sakta, aur 1 saal mein dono barabar hote hain. Agar aapka CI, SI se kam aaye, toh hisaab mein galti hai — dobara karo. Agle article mein hum discount dekhenge — wahan paisa badhta nahi, ghat-ta hai, par hisaab ka tareeka wahi percent wala hai.`,
          `Let us tie the whole article together. In **compound interest**, the interest keeps joining the principal, so every year's interest is bigger than the last year's. The formula is \`A = P x (1 + r/100)^n\` and \`CI = A - P\`. When n = 1, CI = SI; when n is 2 or more, CI is always bigger than SI.

Remember the shortcut for the 2-year difference: \`CI - SI = P x (r/100)^2\`. In half-yearly compounding, halve the rate and double the periods — the CI comes out a little bigger because the interest is added sooner. If the rate changes every year, calculate year by year; do not use one formula.

One final check: CI can never be smaller than SI, and for 1 year both are equal. If your CI comes out smaller than the SI, there is a mistake in the calculation — do it again. In the next article we will look at discount — there the money does not grow, it shrinks, but the calculation uses the same percent method.`
        )
      }
    ],
    diagram: {
      kind: 'bars',
      title: t(
        `Rs. 10,000 par 10% se CI vs SI: Saal-dar-Saal Balance`,
        `Rs. 10,000 at 10%: CI vs SI Balance Year by Year`
      ),
      caption: t(
        `Compound mein doosre saal ka interest zyada hai, kyunki pehle saal ka interest bhi principal ban gaya`,
        `In compounding, the second year's interest is bigger because the first year's interest also became principal`
      ),
      nodes: [],
      bars: [
        { label: t(`Shuru: Rs. 10,000`, `Start: Rs. 10,000`), value: 83, note: t(`Principal`, `Principal`) },
        { label: t(`1 saal baad (CI): Rs. 11,000`, `After 1 year (CI): Rs. 11,000`), value: 91, note: t(`+ Rs. 1,000`, `+ Rs. 1,000`) },
        { label: t(`2 saal baad (CI): Rs. 12,100`, `After 2 years (CI): Rs. 12,100`), value: 100, note: t(`+ Rs. 1,100`, `+ Rs. 1,100`) },
        { label: t(`2 saal baad (SI): Rs. 12,000`, `After 2 years (SI): Rs. 12,000`), value: 99, note: t(`+ Rs. 1,000 har saal`, `+ Rs. 1,000 every year`) }
      ]
    },
    codeExamples: [
      {
        title: t(
          `Half-Yearly: Rs. 8,000 par 10% se 1 Saal`,
          `Half-Yearly: Rs. 8,000 at 10% for 1 Year`
        ),
        language: 'python',
        code: `# Half-yearly: 10% per year = 5% per half-year, 1 year = 2 periods
P = 8000
half_rate = 10 // 2
periods = 2
A = round(P * (1 + half_rate / 100) ** periods)
print(f"P = Rs. {P}, half-yearly rate = {half_rate}%, periods = {periods}")
print(f"After 6 months: {P} + 5% = Rs. {round(P * 1.05)}")
print(f"After 12 months: {round(P * 1.05)} + 5% = Rs. {A}")
print(f"CI = {A} - {P} = Rs. {A - P}")`,
        output: `P = Rs. 8000, half-yearly rate = 5%, periods = 2
After 6 months: 8000 + 5% = Rs. 8400
After 12 months: 8400 + 5% = Rs. 8820
CI = 8820 - 8000 = Rs. 820`
      },
      {
        title: t(
          `3 Saal ka CI: Rs. 5,000 par 20%`,
          `3-Year CI: Rs. 5,000 at 20%`
        ),
        language: 'python',
        code: `# P = Rs. 5000, r = 20%, n = 3 years
P, r, n = 5000, 20, 3
A = round(P * (1 + r / 100) ** n)
print(f"P = Rs. {P}, rate = {r}%, years = {n}")
print(f"Amount A = {P} x 1.20^3 = Rs. {A}")
print(f"CI = {A} - {P} = Rs. {A - P}")`,
        output: `P = Rs. 5000, rate = 20%, years = 3
Amount A = 5000 x 1.20^3 = Rs. 8640
CI = 8640 - 5000 = Rs. 3640`
      }
    ],
    mcqs: [
      {
        q: t(
          `Rs. 10,000 par 10% saalana se 2 saal ka compound interest kitna hoga?`,
          `What is the compound interest on Rs. 10,000 at 10% per year for 2 years?`
        ),
        opts: [
          t(`Rs. 2,000`, `Rs. 2,000`),
          t(`Rs. 2,100`, `Rs. 2,100`),
          t(`Rs. 2,200`, `Rs. 2,200`),
          t(`Rs. 12,100`, `Rs. 12,100`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: A = 10,000 x (1.10)^2 = Rs. 12,100, CI = 12,100 - 10,000 = Rs. 2,100. Rs. 2,000 SI hota hai, CI nahi.`,
          `Correct answer: A = 10,000 x (1.10)^2 = Rs. 12,100, CI = 12,100 - 10,000 = Rs. 2,100. Rs. 2,000 is the SI, not the CI.`
        )
      },
      {
        q: t(
          `Rs. 10,000 par 10% se 2 saal mein CI aur SI ka farak kitna hoga?`,
          `What is the difference between CI and SI on Rs. 10,000 at 10% for 2 years?`
        ),
        opts: [
          t(`Rs. 50`, `Rs. 50`),
          t(`Rs. 100`, `Rs. 100`),
          t(`Rs. 200`, `Rs. 200`),
          t(`Rs. 0`, `Rs. 0`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: CI - SI = P x (r/100)^2 = 10,000 x 0.01 = Rs. 100.`,
          `Correct answer: CI - SI = P x (r/100)^2 = 10,000 x 0.01 = Rs. 100.`
        )
      },
      {
        q: t(
          `Rs. 8,000 par 10% saalana, half-yearly compounding se 1 saal ka amount kitna hoga?`,
          `What is the amount on Rs. 8,000 at 10% per year with half-yearly compounding for 1 year?`
        ),
        opts: [
          t(`Rs. 8,800`, `Rs. 8,800`),
          t(`Rs. 8,820`, `Rs. 8,820`),
          t(`Rs. 8,840`, `Rs. 8,840`),
          t(`Rs. 9,000`, `Rs. 9,000`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: half-yearly rate 5%, 2 periods: A = 8,000 x (1.05)^2 = Rs. 8,820. Yearly hota toh Rs. 8,800 hota.`,
          `Correct answer: half-yearly rate 5%, 2 periods: A = 8,000 x (1.05)^2 = Rs. 8,820. Yearly compounding would give Rs. 8,800.`
        )
      },
      {
        q: t(
          `Rs. 5,000 par 20% se 3 saal ka amount kitna hoga?`,
          `What is the amount on Rs. 5,000 at 20% for 3 years?`
        ),
        opts: [
          t(`Rs. 8,600`, `Rs. 8,600`),
          t(`Rs. 8,640`, `Rs. 8,640`),
          t(`Rs. 8,800`, `Rs. 8,800`),
          t(`Rs. 9,000`, `Rs. 9,000`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: A = 5,000 x (1.20)^3 = 5,000 x 1.728 = Rs. 8,640.`,
          `Correct answer: A = 5,000 x (1.20)^3 = 5,000 x 1.728 = Rs. 8,640.`
        )
      },
      {
        q: t(
          `1 saal ke liye CI aur SI mein kya rishta hai?`,
          `What is the relation between CI and SI for 1 year?`
        ),
        opts: [
          t(`CI, SI se bada hota hai`, `CI is bigger than SI`),
          t(`CI, SI se chhota hota hai`, `CI is smaller than SI`),
          t(`CI = SI hota hai`, `CI = SI`),
          t(`CI hamesha zero hota hai`, `CI is always zero`)
        ],
        ans: 2,
        expl: t(
          `Sahi jawab: 1 saal mein interest par interest lagne ka mauka hi nahi milta, isliye CI = SI hota hai.`,
          `Correct answer: in 1 year the interest never gets a chance to earn interest itself, so CI = SI.`
        )
      }
    ],
    keyNotes: [
      t(
        `A = P x (1 + r/100)^n; CI = A - P.`,
        `A = P x (1 + r/100)^n; CI = A - P.`
      ),
      t(
        `Har saal interest principal mein judta hai, isliye CI har saal badhta hai.`,
        `Every year the interest joins the principal, so the CI grows every year.`
      ),
      t(
        `1 saal mein CI = SI; 2 ya zyada saal mein CI hamesha SI se bada hota hai.`,
        `For 1 year CI = SI; for 2 or more years CI is always bigger than SI.`
      ),
      t(
        `2 saal ke liye CI - SI = P x (r/100)^2.`,
        `For 2 years, CI - SI = P x (r/100)^2.`
      ),
      t(
        `Half-yearly mein rate aadha aur periods double kar do.`,
        `For half-yearly compounding, halve the rate and double the periods.`
      )
    ],
    practice: {
      title: t(
        `Practice: Rs. 20,000 par 5% se 2 Saal ka CI aur SI ka Farak`,
        `Practice: CI on Rs. 20,000 at 5% for 2 Years and the CI-SI Difference`
      ),
      task: t(
        `Rs. 20,000 par 5% saalana se 2 saal ka compound interest, simple interest aur dono ka farak nikaalo. Starter code poora runnable hai — isko run karke verify karo ki output expected jaisa aata hai.`,
        `Find the compound interest, the simple interest, and the difference between them on Rs. 20,000 at 5% per year for 2 years. The starter code is complete and runnable — run it and verify the output matches the expected output.`
      ),
      language: 'python',
      starter: `# Practice: P = Rs. 20000, r = 5%, n = 2 years
P, r, n = 20000, 5, 2
A = round(P * (1 + r / 100) ** n)
ci = A - P
si = P * r * n // 100
print(f"Amount A = Rs. {A}")
print(f"CI = Rs. {ci}")
print(f"SI = Rs. {si}")
print(f"CI - SI = Rs. {ci - si}")`,
      expected: `Amount A = Rs. 22050
CI = Rs. 2050
SI = Rs. 2000
CI - SI = Rs. 50`
    },
    readMinutes: 12
  };

const quantDiscount: Article = {
    id: 'quant-discount',
    subjectId: 'quantitative-aptitude',
    title: t(
      `Discount aur Marked Price — Chhoot ka Asli Hisaab`,
      `Discount and Marked Price — The Real Calculation Behind a Sale`
    ),
    summary: t(
      `Discount ko zero se samjho: marked price, selling price aur discount percent ka rishta, ek discount aur successive discounts ka farak, aur SP se MP ulta nikaalna — sab worked examples ke saath.`,
      `Learn discount from scratch: the relation between marked price, selling price, and discount percent, the difference between one discount and successive discounts, and how to work backwards from SP to MP — all with worked examples.`
    ),
    sections: [
      {
        heading: t(
          `1. Discount Kya Hai? (Marked Price, Selling Price aur Chhoot)`,
          `1. What Is Discount? (Marked Price, Selling Price, and the Cut)`
        ),
        body: t(
          `Discount matlab daam mein katauti. Dukaan par har cheez par ek **marked price (MP)** likha hota hai — woh daam jo tag par chhapa hai. Jab dukaan wala kehta hai "20% chhoot", toh aapko marked price se 20% kam dena padta hai. Jo daam aap aakhir mein dete ho, use **selling price (SP)** kehte hain. Formula hai \`SP = MP x (1 - d/100)\`, jahan **d** discount percent hai. Aur discount ki rakam hai \`Discount = MP - SP\`.

Example: ek shirt ka MP Rs. 2,000 hai aur us par 20% discount hai. Discount = 2,000 ka 20% = Rs. 400. SP = 2,000 - 400 = Rs. 1,600. Aap Rs. 400 bachate ho aur shirt Rs. 1,600 mein milti hai.

Discount percent hamesha **marked price par** nikaala jaata hai, selling price par nahi. Yeh baat yaad rakhna bahut zaroori hai, kyunki exam mein isi par trap banta hai. Agar MP Rs. 1,500 hai aur SP Rs. 1,200 hai, toh discount percent = (1,500 - 1,200) x 100 / 1,500 = 20% — 1,200 par nahi.`,
          `A discount means a cut in the price. Every item in a shop has a **marked price (MP)** — the price printed on the tag. When the shop says "20% off", you pay 20% less than the marked price. The price you finally pay is called the **selling price (SP)**. The formula is \`SP = MP x (1 - d/100)\`, where **d** is the discount percent. And the discount amount is \`Discount = MP - SP\`.

Example: a shirt has MP Rs. 2,000 and a 20% discount. Discount = 20% of 2,000 = Rs. 400. SP = 2,000 - 400 = Rs. 1,600. You save Rs. 400 and get the shirt for Rs. 1,600.

The discount percent is always calculated on the **marked price**, never on the selling price. Remembering this is very important, because exams build their trap on exactly this point. If MP is Rs. 1,500 and SP is Rs. 1,200, the discount percent = (1,500 - 1,200) x 100 / 1,500 = 20% — not on 1,200.`
        )
      },
      {
        heading: t(
          `2. Real-Life Examples: Sale, Coupon aur Festival Offer`,
          `2. Real-Life Examples: Sales, Coupons, and Festival Offers`
        ),
        body: t(
          `Discount aap har roz dekhte ho. Sabse bada example hai **festival sale** — Diwali ya saal ke aakhir mein dukaan par "50% tak chhoot" likha hota hai. MP Rs. 4,000 wali jacket 50% par Rs. 2,000 mein milti hai. Par dhyaan do: "50% tak" ka matlab hai har cheez par 50% nahi, kuch par 10%, kuch par 50%.

Doosra example hai **online coupon**. Aap Rs. 1,000 ka samaan khareedte ho, phir 10% coupon lagate ho — Rs. 100 kam, SP Rs. 900. Phir delivery charge jud jaaye toh hisaab badal jaata hai, par discount ka hissa wahi rehta hai.

Teesra example hai **successive discount** — pehle 20% chhoot, phir us par 10% aur. Dukaan wale aksar kehte hain "20% + 10% extra". Log sochte hain kul 30% chhoot mili, par asli chhoot sirf 28% hoti hai — kyunki doosra discount pehle wale ke baad ke daam par lagta hai. Isi farak par exam mein sawaal aate hain, aur aage hum isko detail mein karenge.`,
          `You see discounts every day. The biggest example is a **festival sale** — during Diwali or at the end of the year, shops display "up to 50% off". A jacket with MP Rs. 4,000 sells for Rs. 2,000 at 50% off. But notice: "up to 50%" does not mean 50% on everything — some items are 10% off, some are 50% off.

A second example is an **online coupon**. You buy goods worth Rs. 1,000, then apply a 10% coupon — Rs. 100 less, SP Rs. 900. If a delivery charge is added, the total changes, but the discount part stays the same.

A third example is **successive discount** — first 20% off, then another 10% on top of that. Shops often say "20% + 10% extra". People think they got 30% off in total, but the real discount is only 28% — because the second discount is applied to the price after the first one. Exams ask questions on exactly this difference, and we will work through it in detail next.`
        )
      },
      {
        heading: t(
          `3. Step-by-Step: Rs. 2,000 par 20% Chhoot, phir 10% aur (Dry Run)`,
          `3. Step-by-Step: 20% Off Rs. 2,000, Then 10% More (Dry Run)`
        ),
        body: t(
          `Ab hum ek worked example ko step-by-step karte hain. Question hai: ek cheez ka MP Rs. 2,000 hai. Pehle 20% discount, phir us par 10% aur discount. Aakhiri SP kitna hoga? **Pehla step:** 20% discount. Discount = 2,000 ka 20% = Rs. 400. SP = 2,000 - 400 = Rs. 1,600. Ya shortcut: SP = 2,000 x 0.80 = Rs. 1,600.

**Doosra step:** ab 10% discount Rs. 1,600 par lagega, Rs. 2,000 par nahi. Discount = 1,600 ka 10% = Rs. 160. SP = 1,600 - 160 = Rs. 1,440. Ya shortcut: SP = 1,600 x 0.90 = Rs. 1,440.

Kul discount = 2,000 - 1,440 = Rs. 560, jo 2,000 ka 28% hai — 30% nahi. Iska formula hai: **effective discount = d1 + d2 - (d1 x d2)/100**. Yahan 20 + 10 - (20 x 10)/100 = 30 - 2 = 28%. Ek hi baar mein 28% discount bhi Rs. 1,440 hi deta hai. Neeche wala code dono tareeke print karta hai.`,
          `Now let us work through an example step by step. The question is: an item has MP Rs. 2,000. First a 20% discount, then another 10% on top. What is the final SP? **First step:** 20% discount. Discount = 20% of 2,000 = Rs. 400. SP = 2,000 - 400 = Rs. 1,600. Or the shortcut: SP = 2,000 x 0.80 = Rs. 1,600.

**Second step:** now the 10% discount applies to Rs. 1,600, not to Rs. 2,000. Discount = 10% of 1,600 = Rs. 160. SP = 1,600 - 160 = Rs. 1,440. Or the shortcut: SP = 1,600 x 0.90 = Rs. 1,440.

Total discount = 2,000 - 1,440 = Rs. 560, which is 28% of 2,000 — not 30%. The formula is: **effective discount = d1 + d2 - (d1 x d2)/100**. Here 20 + 10 - (20 x 10)/100 = 30 - 2 = 28%. A single 28% discount also gives Rs. 1,440. The code below prints both ways.`
        ),
        code: {
          title: t(
            `Discount Nikaalna: Rs. 2,000 par 20%, phir 10%`,
            `Finding Discount: 20% Off Rs. 2,000, Then 10%`
          ),
          language: 'python',
          code: `# Discount: SP = MP x (1 - d/100)
MP, d = 2000, 20
sp = round(MP * (1 - d / 100))
print(f"MP = Rs. {MP}, discount = {d}%")
print(f"Discount amount = Rs. {MP - sp}")
print(f"SP = Rs. {sp}")
print()
# Successive discounts 20% then 10%
sp1 = round(MP * (1 - 20 / 100))
sp2 = round(sp1 * (1 - 10 / 100))
eff = 20 + 10 - 20 * 10 // 100
print(f"After 20% off: Rs. {sp1}")
print(f"After 10% more: Rs. {sp2}")
print(f"Effective discount = 20 + 10 - (20 x 10)/100 = {eff}%")
print(f"Single discount of {eff}% on Rs. {MP} also gives Rs. {round(MP * (1 - eff / 100))}")`,
          output: `MP = Rs. 2000, discount = 20%
Discount amount = Rs. 400
SP = Rs. 1600

After 20% off: Rs. 1600
After 10% more: Rs. 1440
Effective discount = 20 + 10 - (20 x 10)/100 = 28%
Single discount of 28% on Rs. 2000 also gives Rs. 1440`
        }
      },
      {
        heading: t(
          `4. Common Mistakes: Discount ko Jodna, SP par Percent Nikaalna, MP Bhoolna`,
          `4. Common Mistakes: Adding Discounts, Taking Percent on SP, Forgetting the MP`
        ),
        body: t(
          `Discount mein teen galtiyan sabse zyada hoti hain.

**Galti 1: successive discount ko jod dena.** 20% + 10% ko 30% samajh lena sabse badi galti hai. Asli effective discount 28% hota hai. Har baar doosra discount chhote daam par lagta hai, isliye kul chhoot jod se kam hoti hai. Formula yaad rakho: d1 + d2 - (d1 x d2)/100.

**Galti 2: discount percent SP par nikaalna.** MP Rs. 1,500 aur SP Rs. 1,200 hai. Kuch log discount percent = 300 x 100 / 1,200 = 25% likhte hain — galat. Percent hamesha MP par nikaalo: 300 x 100 / 1,500 = 20%.

**Galti 3: MP ko SP samajh lena.** Question mein "Rs. 2,000 ki cheez 20% chhoot par" likha ho toh Rs. 2,000 MP hai, SP nahi. Pehle SP nikaalo (Rs. 1,600), phir aage ka hisaab karo. Jo log seedha Rs. 2,000 ko SP maan lete hain, unka poora hisaab galat ho jaata hai.`,
          `Three mistakes happen most often with discounts.

**Mistake 1: Adding successive discounts.** Treating 20% + 10% as 30% is the biggest mistake. The real effective discount is 28%. Every later discount applies to a smaller price, so the total cut is less than the sum. Remember the formula: d1 + d2 - (d1 x d2)/100.

**Mistake 2: Taking the percent on the SP.** MP is Rs. 1,500 and SP is Rs. 1,200. Some people write discount percent = 300 x 100 / 1,200 = 25% — wrong. Always take the percent on the MP: 300 x 100 / 1,500 = 20%.

**Mistake 3: Treating the MP as the SP.** When a question says "an item of Rs. 2,000 at 20% off", Rs. 2,000 is the MP, not the SP. First find the SP (Rs. 1,600), then do the rest of the calculation. People who take Rs. 2,000 as the SP get the whole calculation wrong.`
        )
      },
      {
        heading: t(
          `5. Edge Cases: 100% Discount, SP se MP Nikaalna, Zero Discount`,
          `5. Edge Cases: 100% Discount, Finding MP from SP, Zero Discount`
        ),
        body: t(
          `Edge cases discount mein bhi aate hain.

**1. 100% discount.** SP = MP x (1 - 100/100) = 0. Cheez muft mein milti hai — "buy one get one free" mein doosri cheez par yahi hota hai. 100% se zyada discount possible nahi hai, kyunki SP negative nahi ho sakta.

**2. SP se MP nikaalna.** SP Rs. 900 hai, 10% discount ke baad. MP = SP / (1 - d/100) = 900 / 0.90 = Rs. 1,000. Check karo: 1,000 ka 10% = Rs. 100, 1,000 - 100 = Rs. 900. Sahi hai. Ulta hisaab mein SP ko 0.90 se bhaag karte hain, 10% jodte nahi — 900 + 10% = Rs. 990 galat hota.

**3. Zero discount.** Agar d = 0 hai, toh SP = MP. Koi chhoot nahi, daam wahi jo tag par hai.

**4. Discount ke baad tax judna.** Agar SP Rs. 1,440 par 5% tax lage, toh aakhiri daam = 1,440 x 1.05 = Rs. 1,512. Tax discount ke baad wale daam par lagta hai, MP par nahi.`,
          `Edge cases appear in discounts too.

**1. 100% discount.** SP = MP x (1 - 100/100) = 0. The item is free — that is what happens to the second item in "buy one get one free". More than 100% discount is impossible, because the SP cannot go negative.

**2. Finding MP from SP.** SP is Rs. 900 after a 10% discount. MP = SP / (1 - d/100) = 900 / 0.90 = Rs. 1,000. Check it: 10% of 1,000 = Rs. 100, 1,000 - 100 = Rs. 900. Correct. In the backwards calculation, divide the SP by 0.90; do not add 10% — 900 + 10% = Rs. 990 is wrong.

**3. Zero discount.** If d = 0, then SP = MP. No cut, the price is exactly what is on the tag.

**4. Tax added after discount.** If 5% tax applies on SP Rs. 1,440, the final price = 1,440 x 1.05 = Rs. 1,512. Tax is charged on the discounted price, not on the MP.`
        )
      },
      {
        heading: t(
          `6. What If: Order Badlo, Teen Discount, Single vs Successive`,
          `6. What-If: Changing the Order, Three Discounts, Single vs Successive`
        ),
        body: t(
          `Ab hum "what-if" sawaal poochhte hain.

**What if: discount ka order badal dein?** Pehle 10% phir 20%, ya pehle 20% phir 10% — dono mein aakhiri SP ek hi hota hai: Rs. 1,440. Kyunki 2,000 x 0.80 x 0.90 = 2,000 x 0.90 x 0.80. Guna ka order badalne se jawab nahi badalta. Exam mein yeh ek-line sawaal ban kar aata hai.

**What if: teen successive discount hon?** 10%, 10%, 10% hon toh pehle effective nikalo: pehle do ka effective = 10 + 10 - 1 = 19%. Phir 19% aur 10% ka effective = 19 + 10 - 1.9 = 27.1%. Kul chhoot 27.1% hogi, 30% nahi.

**What if: single discount successive ke barabar ho?** 20% + 10% successive = 28% single. Isi liye dukaan wala "20% + 10% extra" kehta hai — sunne mein 30% lagta hai, par asli chhoot 28% hoti hai. Jo single discount successive ke barabar ho, use **equivalent discount** kehte hain.`,
          `Now let us ask "what-if" questions.

**What if we change the order of the discounts?** First 10% then 20%, or first 20% then 10% — the final SP is the same in both cases: Rs. 1,440. Because 2,000 x 0.80 x 0.90 = 2,000 x 0.90 x 0.80. Changing the order of multiplication does not change the answer. Exams ask this as a one-line question.

**What if there are three successive discounts?** With 10%, 10%, 10%, first find the effective rate of the first two: 10 + 10 - 1 = 19%. Then combine 19% and 10%: 19 + 10 - 1.9 = 27.1%. The total cut is 27.1%, not 30%.

**What if a single discount equals the successive ones?** 20% + 10% successive = 28% single. That is why the shop says "20% + 10% extra" — it sounds like 30%, but the real cut is 28%. A single discount that equals successive discounts is called the **equivalent discount**.`
        )
      },
      {
        heading: t(
          `7. Summary: Discount ka Poora Picture`,
          `7. Summary: The Full Picture of Discount`
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. **Discount** hamesha marked price par lagta hai: \`SP = MP x (1 - d/100)\` aur \`Discount = MP - SP\`. Discount percent nikaalna ho toh \`Discount% = (MP - SP) x 100 / MP\` — hamesha MP se bhaag karo, SP se nahi. SP se MP ulta nikaalna ho toh \`MP = SP / (1 - d/100)\`.

Successive discounts ko kabhi jodo mat: effective discount = \`d1 + d2 - (d1 x d2)/100\`. 20% + 10% ka matlab 28% hai, 30% nahi. Discount ka order badalne se aakhiri SP nahi badalta.

Aakhiri check: kya aapka SP, MP se kam hai? Kya discount percent 100 se kam hai? Agar dono haan hain, toh hisaab sahi hai. Agle article mein hum ratio aur proportion dekhenge — wahan bhi percent jaisa hi hisaab hai, bas baantne ka tareeka alag hai.`,
          `Let us tie the whole article together. **Discount** is always applied on the marked price: \`SP = MP x (1 - d/100)\` and \`Discount = MP - SP\`. To find the discount percent, use \`Discount% = (MP - SP) x 100 / MP\` — always divide by the MP, never by the SP. To find the MP backwards from the SP, use \`MP = SP / (1 - d/100)\`.

Never add successive discounts: effective discount = \`d1 + d2 - (d1 x d2)/100\`. 20% + 10% means 28%, not 30%. Changing the order of the discounts does not change the final SP.

One final check: is your SP smaller than the MP? Is the discount percent below 100? If both answers are yes, the calculation is right. In the next article we will look at ratio and proportion — the calculation there is like percent too, only the way of dividing is different.`
        )
      }
    ],
    diagram: {
      kind: 'table',
      title: t(
        `Discount ke Teen Hisab: Ek Jhalak mein`,
        `Three Discount Calculations at a Glance`
      ),
      caption: t(
        `MP, discount aur SP — teeno mein se koi do diye hon toh teesra nikal lo`,
        `Given any two of MP, discount, and SP, you can find the third`
      ),
      nodes: [],
      headers: [
        t(`Kya diya hai`, `What is given`),
        t(`Formula`, `Formula`),
        t(`Example`, `Example`)
      ],
      rows: [
        [
          t(`MP = 2,000, d = 20%`, `MP = 2,000, d = 20%`),
          t(`SP = MP x (1 - d/100)`, `SP = MP x (1 - d/100)`),
          t(`SP = Rs. 1,600`, `SP = Rs. 1,600`)
        ],
        [
          t(`MP = 1,500, SP = 1,200`, `MP = 1,500, SP = 1,200`),
          t(`d% = (MP - SP) x 100 / MP`, `d% = (MP - SP) x 100 / MP`),
          t(`d = 20%`, `d = 20%`)
        ],
        [
          t(`SP = 900, d = 10%`, `SP = 900, d = 10%`),
          t(`MP = SP / (1 - d/100)`, `MP = SP / (1 - d/100)`),
          t(`MP = Rs. 1,000`, `MP = Rs. 1,000`)
        ],
        [
          t(`20% phir 10%`, `20% then 10%`),
          t(`d1 + d2 - (d1 x d2)/100`, `d1 + d2 - (d1 x d2)/100`),
          t(`Effective = 28%, SP = Rs. 1,440`, `Effective = 28%, SP = Rs. 1,440`)
        ]
      ]
    },
    codeExamples: [
      {
        title: t(
          `MP Nikaalna: SP Rs. 900, 10% Discount ke Baad`,
          `Finding MP: SP Rs. 900 After a 10% Discount`
        ),
        language: 'python',
        code: `# Find MP from SP: MP = SP / (1 - d/100)
SP, d = 900, 10
mp = round(SP / (1 - d / 100))
print(f"SP = Rs. {SP} after {d}% discount")
print(f"MP = {SP} / 0.90 = Rs. {mp}")
print(f"Check: {d}% of {mp} = Rs. {round(mp * d / 100)}, {mp} - {round(mp * d / 100)} = Rs. {SP}")`,
        output: `SP = Rs. 900 after 10% discount
MP = 900 / 0.90 = Rs. 1000
Check: 10% of 1000 = Rs. 100, 1000 - 100 = Rs. 900`
      },
      {
        title: t(
          `Discount Percent Nikaalna: MP Rs. 1,500, SP Rs. 1,200`,
          `Finding Discount Percent: MP Rs. 1,500, SP Rs. 1,200`
        ),
        language: 'python',
        code: `# Find discount %: (MP - SP) / MP x 100
MP, SP = 1500, 1200
disc = (MP - SP) * 100 // MP
print(f"MP = Rs. {MP}, SP = Rs. {SP}")
print(f"Discount = Rs. {MP - SP}")
print(f"Discount % = {MP - SP} x 100 / {MP} = {disc}%")`,
        output: `MP = Rs. 1500, SP = Rs. 1200
Discount = Rs. 300
Discount % = 300 x 100 / 1500 = 20%`
      }
    ],
    mcqs: [
      {
        q: t(
          `MP Rs. 2,000 hai aur discount 20% hai. SP kitna hoga?`,
          `MP is Rs. 2,000 and the discount is 20%. What is the SP?`
        ),
        opts: [
          t(`Rs. 1,500`, `Rs. 1,500`),
          t(`Rs. 1,600`, `Rs. 1,600`),
          t(`Rs. 1,700`, `Rs. 1,700`),
          t(`Rs. 1,800`, `Rs. 1,800`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: SP = 2,000 x 0.80 = Rs. 1,600. Discount Rs. 400 hai.`,
          `Correct answer: SP = 2,000 x 0.80 = Rs. 1,600. The discount is Rs. 400.`
        )
      },
      {
        q: t(
          `Rs. 2,000 par pehle 20% phir 10% discount mile. Aakhiri SP kitna hoga?`,
          `On Rs. 2,000 you get 20% off first, then 10% more. What is the final SP?`
        ),
        opts: [
          t(`Rs. 1,400`, `Rs. 1,400`),
          t(`Rs. 1,440`, `Rs. 1,440`),
          t(`Rs. 1,500`, `Rs. 1,500`),
          t(`Rs. 1,600`, `Rs. 1,600`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: 2,000 x 0.80 = 1,600, phir 1,600 x 0.90 = Rs. 1,440. Effective discount 28% hai, 30% nahi.`,
          `Correct answer: 2,000 x 0.80 = 1,600, then 1,600 x 0.90 = Rs. 1,440. The effective discount is 28%, not 30%.`
        )
      },
      {
        q: t(
          `10% discount ke baad SP Rs. 900 hai. MP kitna tha?`,
          `After a 10% discount the SP is Rs. 900. What was the MP?`
        ),
        opts: [
          t(`Rs. 900`, `Rs. 900`),
          t(`Rs. 990`, `Rs. 990`),
          t(`Rs. 1,000`, `Rs. 1,000`),
          t(`Rs. 1,100`, `Rs. 1,100`)
        ],
        ans: 2,
        expl: t(
          `Sahi jawab: MP = 900 / 0.90 = Rs. 1,000. 900 mein 10% jodna (Rs. 990) galat hai.`,
          `Correct answer: MP = 900 / 0.90 = Rs. 1,000. Adding 10% to 900 (Rs. 990) is wrong.`
        )
      },
      {
        q: t(
          `MP Rs. 1,500 hai aur SP Rs. 1,200 hai. Discount percent kitna hai?`,
          `MP is Rs. 1,500 and SP is Rs. 1,200. What is the discount percent?`
        ),
        opts: [
          t(`15%`, `15%`),
          t(`20%`, `20%`),
          t(`25%`, `25%`),
          t(`30%`, `30%`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: (1,500 - 1,200) x 100 / 1,500 = 20%. Percent hamesha MP par nikaalte hain.`,
          `Correct answer: (1,500 - 1,200) x 100 / 1,500 = 20%. The percent is always taken on the MP.`
        )
      },
      {
        q: t(
          `10% + 10% successive discount ke barabar single discount kitna hoga?`,
          `What single discount equals successive discounts of 10% + 10%?`
        ),
        opts: [
          t(`20%`, `20%`),
          t(`19%`, `19%`),
          t(`18%`, `18%`),
          t(`10%`, `10%`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: 10 + 10 - (10 x 10)/100 = 20 - 1 = 19%.`,
          `Correct answer: 10 + 10 - (10 x 10)/100 = 20 - 1 = 19%.`
        )
      }
    ],
    keyNotes: [
      t(
        `SP = MP x (1 - d/100); Discount = MP - SP.`,
        `SP = MP x (1 - d/100); Discount = MP - SP.`
      ),
      t(
        `Discount percent hamesha MP par nikaalo, SP par nahi.`,
        `Always take the discount percent on the MP, never on the SP.`
      ),
      t(
        `MP = SP / (1 - d/100) se SP se MP ulta nikaalo.`,
        `Find the MP backwards from the SP with MP = SP / (1 - d/100).`
      ),
      t(
        `Successive discount: effective = d1 + d2 - (d1 x d2)/100; 20% + 10% = 28%.`,
        `Successive discount: effective = d1 + d2 - (d1 x d2)/100; 20% + 10% = 28%.`
      ),
      t(
        `Discount ka order badalne se aakhiri SP nahi badalta.`,
        `Changing the order of the discounts does not change the final SP.`
      )
    ],
    practice: {
      title: t(
        `Practice: Rs. 4,000 par 25% phir 20% Discount`,
        `Practice: 25% Then 20% Discount on Rs. 4,000`
      ),
      task: t(
        `Ek cheez ka MP Rs. 4,000 hai. Pehle 25% discount, phir us par 20% aur discount milta hai. Aakhiri SP aur effective discount percent nikaalo. Starter code poora runnable hai — isko run karke verify karo ki output expected jaisa aata hai.`,
        `An item has MP Rs. 4,000. First a 25% discount, then another 20% on top of that. Find the final SP and the effective discount percent. The starter code is complete and runnable — run it and verify the output matches the expected output.`
      ),
      language: 'python',
      starter: `# Practice: MP = Rs. 4000, discounts 25% then 20%
MP = 4000
sp1 = round(MP * (1 - 25 / 100))
sp2 = round(sp1 * (1 - 20 / 100))
eff = 25 + 20 - 25 * 20 // 100
print(f"After 25% off: Rs. {sp1}")
print(f"After 20% more: Rs. {sp2}")
print(f"Effective discount = {eff}%")
print(f"Final SP = Rs. {sp2}")`,
      expected: `After 25% off: Rs. 3000
After 20% more: Rs. 2400
Effective discount = 40%
Final SP = Rs. 2400`
    },
    readMinutes: 12
  };

const quantRatioProportion: Article = {
    id: 'quant-ratio-proportion',
    subjectId: 'quantitative-aptitude',
    title: t(
      `Ratio aur Proportion — Baantne ka Sahi Tareeka`,
      `Ratio and Proportion — The Right Way to Divide Things`
    ),
    summary: t(
      `Ratio aur proportion ko zero se samjho: ratio ka matlab, kisi rakam ko ratio mein baantna, proportion se missing value nikaalna, aur teen ratios ko jodna — sab worked examples ke saath.`,
      `Learn ratio and proportion from scratch: what a ratio means, how to divide an amount in a given ratio, how to find a missing value with proportion, and how to combine three ratios — all with worked examples.`
    ),
    sections: [
      {
        heading: t(
          `1. Ratio Kya Hai? (Hisse aur Proportion)`,
          `1. What Is a Ratio? (Parts and Proportion)`
        ),
        body: t(
          `Ratio do cheezon ki tulna batata hai. Agar ek class mein 12 ladke aur 16 ladkiyan hain, toh ladke aur ladkiyon ka ratio hai 12:16, jo simplify karke 3:4 hota hai. Ratio ka matlab hai: har 3 ladkon par 4 ladkiyan. Ratio koi unit nahi batata — sirf **hisson ka rishta** batata hai. 3:4 ka matlab yeh bhi ho sakta hai 30 ladke aur 40 ladkiyan, ya 300 aur 400 — ratio ek hi rehta hai.

Ratio ko **parts** mein samajhna sabse aasan hai. 3:5 ka matlab hai kul 8 parts — pehle ka 3 parts, doosre ka 5 parts. Agar kul Rs. 64 baantne hain, toh ek part = 64 / 8 = Rs. 8. Pehla hissa = 3 x 8 = Rs. 24, doosra hissa = 5 x 8 = Rs. 40. Yahi ratio ka sabse important kaam hai: **kisi rakam ko hisso mein baantna**.

**Proportion** ka matlab hai do ratios ka barabar hona. 4:5 = x:20 ek proportion hai — iska matlab hai 4/5 = x/20. Cross-multiply karo: 5x = 80, toh x = 16. Proportion se missing value nikaali jaati hai, aur yeh map, recipe aur scale wale sawaalon mein bahut kaam aata hai.`,
          `A ratio compares two things. If a class has 12 boys and 16 girls, the ratio of boys to girls is 12:16, which simplifies to 3:4. The ratio means: for every 3 boys there are 4 girls. A ratio tells you no unit — only the **relation between parts**. 3:4 could also mean 30 boys and 40 girls, or 300 and 400 — the ratio stays the same.

The easiest way to understand a ratio is in **parts**. 3:5 means 8 parts in total — 3 parts for the first, 5 parts for the second. If Rs. 64 must be divided, one part = 64 / 8 = Rs. 8. First share = 3 x 8 = Rs. 24, second share = 5 x 8 = Rs. 40. That is the most important job of a ratio: **dividing an amount into shares**.

A **proportion** means two ratios are equal. 4:5 = x:20 is a proportion — it means 4/5 = x/20. Cross-multiply: 5x = 80, so x = 16. Proportion is used to find a missing value, and it is very useful in questions about maps, recipes, and scales.`
        )
      },
      {
        heading: t(
          `2. Real-Life Examples: Recipe, Map aur Paisa Baantna`,
          `2. Real-Life Examples: Recipes, Maps, and Dividing Money`
        ),
        body: t(
          `Ratio aap roz use karte ho. Sabse seedha example hai **recipe**. Chai banane mein doodh aur paani ka ratio 1:1 hai — ek cup doodh, ek cup paani. 4 cup chai banani hai toh 2 cup doodh aur 2 cup paani. Recipe badhani ho toh ratio ek jaisa rakho, quantity badha do.

Doosra example hai **map**. Map par 1 cm = 10 km likha ho toh yeh ratio 1:10 hai (cm ko km mein). Map par do sheher 6 cm door hain, toh asli doori = 6 x 10 = 60 km. Yeh proportion hai: 1/10 = 6/x, toh x = 60.

Teesra example hai **paisa baantna**. Do doston ne dukaan mein Rs. 30,000 aur Rs. 50,000 lagaye. Munafa Rs. 64,000 hua. Munafa unke paison ke ratio mein batega: 30,000:50,000 = 3:5. Pehle ko 64,000 x 3/8 = Rs. 24,000, doosre ko Rs. 40,000. Yahi hisaab partnership wale sawaalon mein aata hai.`,
          `You use ratio every day. The simplest example is a **recipe**. For tea, the ratio of milk to water is 1:1 — one cup of milk, one cup of water. To make 4 cups of tea you need 2 cups of milk and 2 cups of water. To scale a recipe up, keep the ratio the same and increase the quantity.

A second example is a **map**. If a map says 1 cm = 10 km, that is a ratio of 1:10 (cm to km). Two cities are 6 cm apart on the map, so the real distance = 6 x 10 = 60 km. This is a proportion: 1/10 = 6/x, so x = 60.

A third example is **dividing money**. Two friends invested Rs. 30,000 and Rs. 50,000 in a shop. The profit was Rs. 64,000. The profit is divided in the ratio of their money: 30,000:50,000 = 3:5. The first gets 64,000 x 3/8 = Rs. 24,000, the second gets Rs. 40,000. This is the same calculation that appears in partnership questions.`
        )
      },
      {
        heading: t(
          `3. Step-by-Step: Rs. 64 ko 3:5 mein Baantna aur Proportion (Dry Run)`,
          `3. Step-by-Step: Dividing Rs. 64 in 3:5 and a Proportion (Dry Run)`
        ),
        body: t(
          `Ab hum worked example ko step-by-step karte hain. Question hai: Rs. 64 ko 3:5 ke ratio mein baanto. **Step 1:** kul parts nikaalo: 3 + 5 = 8 parts. **Step 2:** ek part ki value nikaalo: 64 / 8 = Rs. 8. **Step 3:** pehla hissa = 3 x 8 = Rs. 24. **Step 4:** doosra hissa = 5 x 8 = Rs. 40. **Check:** 24 + 40 = 64, sahi hai. Aur ratio 24:40 simplify karke 3:5 hota hai — sahi hai.

Ab proportion wala hissa: 4:5 = x:20 mein x nikaalo. Proportion ka matlab hai 4/5 = x/20. Cross-multiply karo: 4 x 20 = 5 x x, matlab 80 = 5x, toh x = 80 / 5 = 16. Check karo: 16:20 simplify karke 4:5 hota hai — sahi hai. Shortcut: 5 se 20 chaar guna hua, toh 4 bhi chaar guna hoga: 4 x 4 = 16.

Dono kaam ek hi idea par chalte hain: **ratio ko fraction ki tarah dekho**. 3:5 ka matlab hai 3/8 aur 5/8. 4:5 = x:20 ka matlab hai 4/5 = x/20. Fraction dekhte hi hisaab aasan ho jaata hai. Neeche wala code dono hisaab print karta hai.`,
          `Now let us work through an example step by step. The question is: divide Rs. 64 in the ratio 3:5. **Step 1:** find the total parts: 3 + 5 = 8 parts. **Step 2:** find the value of one part: 64 / 8 = Rs. 8. **Step 3:** first share = 3 x 8 = Rs. 24. **Step 4:** second share = 5 x 8 = Rs. 40. **Check:** 24 + 40 = 64, correct. And the ratio 24:40 simplifies to 3:5 — correct.

Now the proportion part: find x in 4:5 = x:20. A proportion means 4/5 = x/20. Cross-multiply: 4 x 20 = 5 x x, so 80 = 5x, and x = 80 / 5 = 16. Check it: 16:20 simplifies to 4:5 — correct. Shortcut: 5 became 20, which is 4 times bigger, so 4 must also become 4 times bigger: 4 x 4 = 16.

Both jobs run on the same idea: **look at a ratio as a fraction**. 3:5 means 3/8 and 5/8. 4:5 = x:20 means 4/5 = x/20. Once you see the fraction, the calculation becomes easy. The code below prints both calculations.`
        ),
        code: {
          title: t(
            `Ratio mein Baantna: Rs. 64 ko 3:5 mein`,
            `Dividing in a Ratio: Rs. 64 in 3:5`
          ),
          language: 'python',
          code: `# Divide Rs. 64 in ratio 3:5
total, a, b = 64, 3, 5
parts = a + b
first = total * a // parts
second = total * b // parts
print(f"Total parts = {a} + {b} = {parts}")
print(f"First share = 64 x 3/8 = Rs. {first}")
print(f"Second share = 64 x 5/8 = Rs. {second}")
print(f"Check: {first} + {second} = {first + second}, ratio {first}:{second} = 3:5")
print()
# Proportion: 4:5 = x:20
x = 4 * 20 // 5
print(f"4:5 = x:20  ->  x = 4 x 20 / 5 = {x}")
print(f"Check: {x}:20 = 4:5")`,
          output: `Total parts = 3 + 5 = 8
First share = 64 x 3/8 = Rs. 24
Second share = 64 x 5/8 = Rs. 40
Check: 24 + 40 = 64, ratio 24:40 = 3:5

4:5 = x:20  ->  x = 4 x 20 / 5 = 16
Check: 16:20 = 4:5`
        }
      },
      {
        heading: t(
          `4. Common Mistakes: Ratio ko Jodna, Parts Galat Ginna, Order Ulta Karna`,
          `4. Common Mistakes: Adding Ratios, Counting Parts Wrong, Reversing the Order`
        ),
        body: t(
          `Ratio mein teen galtiyan sabse zyada hoti hain.

**Galti 1: ratio ke hisso ko jodna bhool jaana.** Rs. 64 ko 3:5 mein baantna ho toh kuch log 64 ko 3 se bhaag kar dete hain ya 5 se. Sahi tareeka hai pehle kul parts nikaalna: 3 + 5 = 8, phir 64 / 8 = 8 per part. Hissa nikaalne se pehle hamesha kul parts jodo.

**Galti 2: simplify kiye bina hisaab karna.** 12:16 ko seedha use karne se hisaab bada ho jaata hai. Pehle simplify karo: 12:16 = 3:4. Phir kul parts = 7. Chhote number se hisaab aasan aur galti kam hoti hai.

**Galti 3: order ulta karna.** "A aur B ka ratio 3:5 hai" ka matlab hai A ka 3 parts, B ka 5 parts. Agar aap ulta karke A ko 5 parts de do, toh poora jawab ulta ho jaayega. Question mein jis order mein naam likhe hain, usi order mein ratio likho.`,
          `Three mistakes happen most often with ratio.

**Mistake 1: Forgetting to add the parts of the ratio.** To divide Rs. 64 in 3:5, some people divide 64 by 3 or by 5. The right way is to first find the total parts: 3 + 5 = 8, then 64 / 8 = 8 per part. Always add the total parts before finding a share.

**Mistake 2: Calculating without simplifying.** Using 12:16 directly makes the calculation big. Simplify first: 12:16 = 3:4. Then the total parts = 7. Small numbers make the calculation easy and reduce mistakes.

**Mistake 3: Reversing the order.** "The ratio of A and B is 3:5" means A gets 3 parts and B gets 5 parts. If you reverse it and give A 5 parts, the whole answer flips. Write the ratio in the same order as the names appear in the question.`
        )
      },
      {
        heading: t(
          `5. Edge Cases: Ratio 1:1, Zero Wala Hissa, Teen Ratios`,
          `5. Edge Cases: Ratio 1:1, a Zero Share, Three Ratios`
        ),
        body: t(
          `Edge cases ratio mein bhi aate hain.

**1. Ratio 1:1 ho.** Iska matlab hai dono barabar — aadha-aadha. Rs. 100 ko 1:1 mein baanto toh dono ko Rs. 50 milega. 1:1 dekhte hi aadha kar do.

**2. Kisi ka hissa zero ho.** Ratio 5:0 ka matlab hai doosre ko kuch nahi milega — pehla sab le lega. Exam mein aisa kam aata hai, par samajhna chahiye: zero wala hissa matlab woh banda hisse mein hai hi nahi.

**3. Teen ratios hon.** A:B = 2:3 aur B:C = 4:5 ho toh A:B:C nikaalne ke liye B ko barabar karo. A:B = 2:3 ko 4 se guna karo: 8:12. B:C = 4:5 ko 3 se guna karo: 12:15. Ab B dono mein 12 hai, toh A:B:C = 8:12:15. Common term ko barabar karna hi poora trick hai.

**4. Ratio mein difference diya ho.** Ratio 7:9 hai aur farak 12 hai. Parts ka farak = 9 - 7 = 2 parts = 12, toh 1 part = 6. Pehla number = 7 x 6 = 42, doosra = 9 x 6 = 54. Check: 54 - 42 = 12, sahi hai.`,
          `Edge cases appear in ratio too.

**1. Ratio is 1:1.** That means both are equal — half and half. Divide Rs. 100 in 1:1 and each gets Rs. 50. The moment you see 1:1, just halve it.

**2. Somebody's share is zero.** Ratio 5:0 means the second person gets nothing — the first takes everything. Exams rarely ask this, but you should understand it: a zero share means that person is not really in the division at all.

**3. Three ratios.** If A:B = 2:3 and B:C = 4:5, make B equal to combine them. Multiply A:B = 2:3 by 4: 8:12. Multiply B:C = 4:5 by 3: 12:15. Now B is 12 in both, so A:B:C = 8:12:15. Making the common term equal is the whole trick.

**4. Difference given in the ratio.** The ratio is 7:9 and the difference is 12. Difference in parts = 9 - 7 = 2 parts = 12, so 1 part = 6. First number = 7 x 6 = 42, second = 9 x 6 = 54. Check: 54 - 42 = 12, correct.`
        )
      },
      {
        heading: t(
          `6. What If: Ratio Badlo, Value Badlo, Teen Ratio Jodo`,
          `6. What-If: Changing the Ratio, Changing the Value, Combining Three Ratios`
        ),
        body: t(
          `Ab hum "what-if" sawaal poochhte hain.

**What if: dono hisso ko ek hi number se guna kar dein?** Ratio nahi badalta. 3:5 ko 2 se guna karo toh 6:10, jo simplify karke phir 3:5 hi hota hai. Isi liye ratio ko simplify karna hamesha safe hai — value ek hi rehti hai.

**What if: kul rakam badal jaaye?** Ratio ek jaisa rakho, per-part value badal jaayegi. Rs. 64 ko 3:5 mein baanta toh hissa 24 aur 40. Rs. 128 baantna ho toh per-part 16 hoga, hissa 48 aur 80. Ratio wahi, rakam double.

**What if: A:B = 2:3 aur B:C = 4:5 ho?** B ko barabar karo: 2:3 ko 4 se guna karo (8:12), 4:5 ko 3 se guna karo (12:15). A:B:C = 8:12:15. Check karo: A/B = 8/12 = 2/3, B/C = 12/15 = 4/5. Dono sahi hain.

**What if: ratio 7:9 aur farak 12 ho?** Parts ka farak 2 hai, 2 parts = 12, toh 1 part = 6. Numbers hain 42 aur 54. Yeh "difference" wale sawaal exam mein bahut aate hain.`,
          `Now let us ask "what-if" questions.

**What if we multiply both parts by the same number?** The ratio does not change. Multiply 3:5 by 2 and you get 6:10, which simplifies back to 3:5. That is why simplifying a ratio is always safe — the value stays the same.

**What if the total amount changes?** Keep the ratio the same, and the per-part value changes. Dividing Rs. 64 in 3:5 gives shares of 24 and 40. To divide Rs. 128, the per-part value is 16, and the shares are 48 and 80. Same ratio, double the money.

**What if A:B = 2:3 and B:C = 4:5?** Make B equal: multiply 2:3 by 4 (8:12) and 4:5 by 3 (12:15). A:B:C = 8:12:15. Check it: A/B = 8/12 = 2/3, B/C = 12/15 = 4/5. Both are correct.

**What if the ratio is 7:9 and the difference is 12?** The difference in parts is 2, so 2 parts = 12, and 1 part = 6. The numbers are 42 and 54. These "difference" questions appear very often in exams.`
        )
      },
      {
        heading: t(
          `7. Summary: Ratio aur Proportion ka Poora Picture`,
          `7. Summary: The Full Picture of Ratio and Proportion`
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. **Ratio** do cheezon ki tulna hai — hisso mein samjho: 3:5 ka matlab kul 8 parts, pehle ka 3, doosre ka 5. Kisi rakam ko baantna ho toh pehle kul parts jodo, phir ek part ki value nikaalo, phir har hissa guna karo. **Proportion** do ratios ka barabar hona hai: a:b = c:d mein cross-multiply karo, missing value mil jaayegi.

Teen ratios ko jodne ke liye common term ko barabar karo. Difference diya ho toh parts ka farak nikaal kar ek part ki value pata karo. Ratio ko simplify karna hamesha safe hai — value nahi badalti.

Aakhiri check: kya saare hisso ka jod kul rakam ke barabar hai? Kya hisson ka ratio diye gaye ratio ke barabar hai? Agar dono haan hain, toh jawab sahi hai. Agle article mein hum mixtures dekhenge — wahan bhi ratio hi kaam aata hai, bas do cheezein milakar teesri banti hai.`,
          `Let us tie the whole article together. A **ratio** compares two things — think in parts: 3:5 means 8 parts in total, 3 for the first and 5 for the second. To divide an amount, first add the total parts, then find the value of one part, then multiply for each share. A **proportion** means two ratios are equal: in a:b = c:d, cross-multiply and the missing value comes out.

To combine three ratios, make the common term equal. If the difference is given, find the difference in parts and get the value of one part. Simplifying a ratio is always safe — the value does not change.

One final check: does the sum of all shares equal the total amount? Does the ratio of the shares equal the given ratio? If both answers are yes, the answer is right. In the next article we will look at mixtures — ratio does the work there too, only now two things are mixed to make a third.`
        )
      }
    ],
    diagram: {
      kind: 'boxes',
      title: t(
        `Rs. 64 ko 3:5 mein Baantna: Parts ka Tareeka`,
        `Dividing Rs. 64 in 3:5: The Parts Method`
      ),
      caption: t(
        `Kul parts jodo, ek part ki value nikaalo, phir har hissa guna karo`,
        `Add the total parts, find the value of one part, then multiply for each share`
      ),
      nodes: [
        {
          t: t('Ratio 3:5', 'Ratio 3:5'),
          s: t('Pehla 3 parts, doosra 5 parts', 'First 3 parts, second 5 parts')
        },
        {
          t: t('Kul parts = 3 + 5 = 8', 'Total parts = 3 + 5 = 8'),
          s: t('Hamesha pehle parts ko jodo', 'Always add the parts first')
        },
        {
          t: t('1 part = 64 / 8 = Rs. 8', '1 part = 64 / 8 = Rs. 8'),
          s: t('Kul rakam ko kul parts se bhaag do', 'Divide the total amount by the total parts')
        },
        {
          t: t('Pehla = 3 x 8 = Rs. 24', 'First = 3 x 8 = Rs. 24'),
          s: t('Doosra = 5 x 8 = Rs. 40; check: 24 + 40 = 64', 'Second = 5 x 8 = Rs. 40; check: 24 + 40 = 64')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          `Teen Ratio Jodna: A:B = 2:3, B:C = 4:5`,
          `Combining Three Ratios: A:B = 2:3, B:C = 4:5`
        ),
        language: 'python',
        code: `# A:B = 2:3 and B:C = 4:5  ->  A:B:C
# Make B equal: 2:3 -> x4 = 8:12 ; 4:5 -> x3 = 12:15
A, B, C = 2 * 4, 3 * 4, 5 * 3
print(f"A:B = 2:3 = 8:12 (x4)")
print(f"B:C = 4:5 = 12:15 (x3)")
print(f"A:B:C = {A}:{B}:{C}")
print(f"Check: A/B = {A}/{B} = 2/3, B/C = {B}/{C} = 4/5")`,
        output: `A:B = 2:3 = 8:12 (x4)
B:C = 4:5 = 12:15 (x3)
A:B:C = 8:12:15
Check: A/B = 8/12 = 2/3, B/C = 12/15 = 4/5`
      },
      {
        title: t(
          `Farak se Number: Ratio 7:9, Farak 12`,
          `Numbers from the Difference: Ratio 7:9, Difference 12`
        ),
        language: 'python',
        code: `# Ratio 7:9, difference = 12
# Difference in parts = 9 - 7 = 2 parts = 12, so 1 part = 6
diff, parts_diff = 12, 9 - 7
one = diff // parts_diff
first = 7 * one
second = 9 * one
print(f"1 part = {diff} / {parts_diff} = {one}")
print(f"First number = 7 x {one} = {first}")
print(f"Second number = 9 x {one} = {second}")
print(f"Check: {second} - {first} = {second - first}, ratio {first}:{second} = 7:9")`,
        output: `1 part = 12 / 2 = 6
First number = 7 x 6 = 42
Second number = 9 x 6 = 54
Check: 54 - 42 = 12, ratio 42:54 = 7:9`
      }
    ],
    mcqs: [
      {
        q: t(
          `Rs. 64 ko 3:5 ke ratio mein baanto. Dono hisse kitne honge?`,
          `Divide Rs. 64 in the ratio 3:5. What are the two shares?`
        ),
        opts: [
          t(`Rs. 20 aur Rs. 44`, `Rs. 20 and Rs. 44`),
          t(`Rs. 24 aur Rs. 40`, `Rs. 24 and Rs. 40`),
          t(`Rs. 16 aur Rs. 48`, `Rs. 16 and Rs. 48`),
          t(`Rs. 30 aur Rs. 34`, `Rs. 30 and Rs. 34`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: kul parts 8, 1 part = Rs. 8. Pehla = 3 x 8 = Rs. 24, doosra = 5 x 8 = Rs. 40.`,
          `Correct answer: total parts 8, 1 part = Rs. 8. First = 3 x 8 = Rs. 24, second = 5 x 8 = Rs. 40.`
        )
      },
      {
        q: t(
          `4:5 = x:20 mein x kitna hoga?`,
          `What is x in 4:5 = x:20?`
        ),
        opts: [
          t(`12`, `12`),
          t(`14`, `14`),
          t(`16`, `16`),
          t(`18`, `18`)
        ],
        ans: 2,
        expl: t(
          `Sahi jawab: cross-multiply karo: 5x = 80, toh x = 16.`,
          `Correct answer: cross-multiply: 5x = 80, so x = 16.`
        )
      },
      {
        q: t(
          `A:B = 2:3 aur B:C = 4:5 hai. A:B:C kitna hoga?`,
          `A:B = 2:3 and B:C = 4:5. What is A:B:C?`
        ),
        opts: [
          t(`8:12:15`, `8:12:15`),
          t(`2:3:5`, `2:3:5`),
          t(`8:12:10`, `8:12:10`),
          t(`4:6:5`, `4:6:5`)
        ],
        ans: 0,
        expl: t(
          `Sahi jawab: B ko barabar karo — 2:3 = 8:12 aur 4:5 = 12:15, toh A:B:C = 8:12:15.`,
          `Correct answer: make B equal — 2:3 = 8:12 and 4:5 = 12:15, so A:B:C = 8:12:15.`
        )
      },
      {
        q: t(
          `Do numbers ka ratio 7:9 hai aur unka farak 12 hai. Numbers kaun se hain?`,
          `Two numbers are in the ratio 7:9 and their difference is 12. What are the numbers?`
        ),
        opts: [
          t(`35 aur 47`, `35 and 47`),
          t(`42 aur 54`, `42 and 54`),
          t(`28 aur 40`, `28 and 40`),
          t(`49 aur 61`, `49 and 61`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: parts ka farak 2 hai, 2 parts = 12, toh 1 part = 6. Numbers 42 aur 54 hain.`,
          `Correct answer: the difference in parts is 2, so 2 parts = 12 and 1 part = 6. The numbers are 42 and 54.`
        )
      },
      {
        q: t(
          `a:b = 3:4 hai aur b = 28 hai. a kitna hoga?`,
          `a:b = 3:4 and b = 28. What is a?`
        ),
        opts: [
          t(`18`, `18`),
          t(`21`, `21`),
          t(`24`, `24`),
          t(`28`, `28`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: b 4 parts = 28, toh 1 part = 7, aur a = 3 x 7 = 21.`,
          `Correct answer: b is 4 parts = 28, so 1 part = 7, and a = 3 x 7 = 21.`
        )
      }
    ],
    keyNotes: [
      t(
        `Ratio hisso mein samjho: 3:5 ka matlab kul 8 parts.`,
        `Think of a ratio in parts: 3:5 means 8 parts in total.`
      ),
      t(
        `Baantna ho toh pehle kul parts jodo, phir ek part ki value nikaalo.`,
        `To divide, first add the total parts, then find the value of one part.`
      ),
      t(
        `Proportion mein cross-multiply karo: a:b = c:d mein a x d = b x c.`,
        `In a proportion, cross-multiply: in a:b = c:d, a x d = b x c.`
      ),
      t(
        `Teen ratio jodne ke liye common term ko barabar karo.`,
        `To combine three ratios, make the common term equal.`
      ),
      t(
        `Ratio ko simplify karna safe hai; order ulta mat karo.`,
        `Simplifying a ratio is safe; do not reverse the order.`
      )
    ],
    practice: {
      title: t(
        `Practice: Rs. 720 ko 5:7 mein Baantna`,
        `Practice: Dividing Rs. 720 in 5:7`
      ),
      task: t(
        `Rs. 720 ko 5:7 ke ratio mein baanto aur dono hisse nikaalo. Starter code poora runnable hai — isko run karke verify karo ki output expected jaisa aata hai.`,
        `Divide Rs. 720 in the ratio 5:7 and find both shares. The starter code is complete and runnable — run it and verify the output matches the expected output.`
      ),
      language: 'python',
      starter: `# Practice: divide Rs. 720 in ratio 5:7
total, a, b = 720, 5, 7
parts = a + b
first = total * a // parts
second = total * b // parts
print(f"Total parts = {parts}")
print(f"First share = 720 x 5/12 = Rs. {first}")
print(f"Second share = 720 x 7/12 = Rs. {second}")
print(f"Check: {first} + {second} = {first + second}")`,
      expected: `Total parts = 12
First share = 720 x 5/12 = Rs. 300
Second share = 720 x 7/12 = Rs. 420
Check: 300 + 420 = 720`
    },
    readMinutes: 12
  };

const quantMixtures: Article = {
    id: 'quant-mixtures',
    subjectId: 'quantitative-aptitude',
    title: t(
      `Mixtures aur Alligation — Milana aur Mean Nikaalna`,
      `Mixtures and Alligation — Mixing and Finding the Mean`
    ),
    summary: t(
      `Mixtures ko zero se samjho: do cheezein milakar mean price ya mean percent kaise nikaalte hain, alligation se ratio kaise milta hai, aur paani milane par ratio kaise badalta hai — sab worked examples ke saath.`,
      `Learn mixtures from scratch: how to find the mean price or mean percent when two things are mixed, how alligation gives the ratio, and how the ratio changes when water is added — all with worked examples.`
    ),
    sections: [
      {
        heading: t(
          `1. Mixture Kya Hai? (Mean Price aur Alligation)`,
          `1. What Is a Mixture? (Mean Price and Alligation)`
        ),
        body: t(
          `Mixture ka matlab hai do ya zyada cheezein milana. Aap Rs. 120 wali chai aur Rs. 180 wali chai milate ho, toh mixture ki ek **mean price** hoti hai — jo dono ke beech mein hoti hai. Kitni kis ratio mein milaya, us par depend karta hai ki mean price kiske kareeb hogi. Zyada mehenga wala daalo toh mean price upar jaayegi, zyada sasta wala daalo toh neeche.

Mean price ka formula hai: \`Mean = (quantity1 x price1 + quantity2 x price2) / (quantity1 + quantity2)\`. Yeh ek weighted average hai — jis cheez ki quantity zyada, uska asar zyada.

**Alligation** ulta kaam karta hai: mean price di ho toh ratio nikaalta hai. Do cheezein — sasti (Rs. 120) aur mehengi (Rs. 180) — milakar mean Rs. 150 banana hai. Ratio = (mehenga - mean) : (mean - sasta) = (180 - 150) : (150 - 120) = 30:30 = 1:1. Matlab dono barabar matra mein milao. Yahi alligation ka rule hai: **ratio = (dearer - mean) : (mean - cheaper)**. Isko cross wala diagram banakar yaad rakhte hain, isliye iska naam alligation hai.`,
          `A mixture means combining two or more things. You mix tea costing Rs. 120 with tea costing Rs. 180, and the mixture has a **mean price** — somewhere between the two. How close it sits to either side depends on how much of each you mixed. Add more of the costly one and the mean price goes up; add more of the cheap one and it goes down.

The formula for the mean price is: \`Mean = (quantity1 x price1 + quantity2 x price2) / (quantity1 + quantity2)\`. This is a weighted average — whichever item has the bigger quantity has the bigger effect.

**Alligation** works backwards: given the mean price, it finds the ratio. Two items — cheap (Rs. 120) and costly (Rs. 180) — are mixed to make a mean of Rs. 150. Ratio = (costly - mean) : (mean - cheap) = (180 - 150) : (150 - 120) = 30:30 = 1:1. That means mix equal amounts of both. That is the rule of alligation: **ratio = (dearer - mean) : (mean - cheaper)**. It is remembered with a cross diagram, which is why it is called alligation.`
        )
      },
      {
        heading: t(
          `2. Real-Life Examples: Chai, Doodh aur Sharbat`,
          `2. Real-Life Examples: Tea, Milk, and Squash`
        ),
        body: t(
          `Mixture aap roz dekhte ho. Sabse seedha example hai **chai ki dukaan**. Dukaan wala sasti aur mehengi patti milakar bechta hai, taaki swad bhi achha rahe aur daam bhi kam ho. Mean price nikaal kar woh apna munafa gin-ta hai.

Doosra example hai **doodh mein paani**. 25 litre doodh mein paani milaya ho toh ratio badal jaata hai. Doodh aur paani ka ratio 4:1 ho toh doodh 20 litre aur paani 5 litre hai. 5 litre paani aur milao toh ratio 20:10 = 2:1 ho jaata hai. Exam mein yahi sawaal aata hai: "paani milane ke baad naya ratio kya hoga?"

Teesra example hai **sharbat ya juice**. Concentrate aur paani ka ratio 1:4 hai — ek hissa concentrate, chaar hisse paani. 5 litre sharbat banane ke liye 1 litre concentrate aur 4 litre paani chahiye. Ratio dekh kar quantity nikaalna hi mixture ka kaam hai.`,
          `You see mixtures every day. The simplest example is a **tea shop**. The shopkeeper mixes cheap and costly tea leaves so that the taste stays good and the price stays low. He works out his profit from the mean price.

A second example is **water in milk**. If water is mixed into 25 litres of milk, the ratio changes. With a milk-to-water ratio of 4:1, there are 20 litres of milk and 5 litres of water. Add 5 more litres of water and the ratio becomes 20:10 = 2:1. Exams ask exactly this question: "what is the new ratio after adding water?"

A third example is **squash or juice**. The ratio of concentrate to water is 1:4 — one part concentrate, four parts water. To make 5 litres of squash you need 1 litre of concentrate and 4 litres of water. Finding quantities from a ratio is the whole job of mixtures.`
        )
      },
      {
        heading: t(
          `3. Step-by-Step: 30% aur 60% Solution se 45% Banana (Dry Run)`,
          `3. Step-by-Step: Making 45% from 30% and 60% Solutions (Dry Run)`
        ),
        body: t(
          `Ab hum worked example ko step-by-step karte hain. Question hai: 30% wale aur 60% wale namak ke solution ko milakar 45% wala solution banana hai. Kul 10 litre chahiye. Kitna-kitna milayein? **Step 1:** alligation lagao. Ratio = (60 - 45) : (45 - 30) = 15:15 = 1:1. **Step 2:** kul 10 litre ko 1:1 mein baanto — dono 5 litre. **Step 3:** check karo. 5 litre mein 30% namak = 1.5 litre namak. 5 litre mein 60% namak = 3 litre namak. Kul namak = 4.5 litre, kul solution = 10 litre, toh percent = 4.5/10 = 45%. Sahi hai.

Dhyaan do: mean 45% dono ke beech mein bilkul aadha hai (30 aur 60 ka average 45 hai), isliye ratio 1:1 aaya. Agar mean 40% hota, toh ratio hota (60 - 40):(40 - 30) = 20:10 = 2:1 — saste wale ka double. Rule yaad rakho: **mean jis cheez ke kareeb ho, usi ki quantity zyada hoti hai**. Neeche wala code poora hisaab print karta hai.`,
          `Now let us work through an example step by step. The question is: mix a 30% salt solution and a 60% salt solution to make a 45% solution. You need 10 litres in total. How much of each? **Step 1:** apply alligation. Ratio = (60 - 45) : (45 - 30) = 15:15 = 1:1. **Step 2:** divide the 10 litres in 1:1 — 5 litres of each. **Step 3:** check it. 5 litres at 30% salt = 1.5 litres of salt. 5 litres at 60% salt = 3 litres of salt. Total salt = 4.5 litres, total solution = 10 litres, so the percent = 4.5/10 = 45%. Correct.

Notice: the mean 45% sits exactly halfway between the two (the average of 30 and 60 is 45), which is why the ratio is 1:1. If the mean were 40%, the ratio would be (60 - 40):(40 - 30) = 20:10 = 2:1 — double the cheap one. Remember the rule: **whichever item the mean is closer to, that item's quantity is bigger**. The code below prints the full calculation.`
        ),
        code: {
          title: t(
            `Alligation: 30% aur 60% se 45% Banana`,
            `Alligation: Making 45% from 30% and 60%`
          ),
          language: 'python',
          code: `# Alligation: mix 30% and 60% solutions to get 45%
# Ratio = (60 - 45) : (45 - 30) = 15 : 15 = 1 : 1
cheap, dear, mean = 30, 60, 45
r1 = dear - mean
r2 = mean - cheap
print(f"Ratio = ({dear} - {mean}) : ({mean} - {cheap}) = {r1}:{r2} = 1:1")
total = 10
first = total * 1 // 2
second = total - first
print(f"For {total} litres: {first} L of {cheap}% + {second} L of {dear}%")
check = (first * cheap + second * dear) // total
print(f"Check: ({first} x {cheap} + {second} x {dear}) / {total} = {check}%")`,
          output: `Ratio = (60 - 45) : (45 - 30) = 15:15 = 1:1
For 10 litres: 5 L of 30% + 5 L of 60%
Check: (5 x 30 + 5 x 60) / 10 = 45%`
        }
      },
      {
        heading: t(
          `4. Common Mistakes: Ulta Ratio, Mean ko Bahar Samajhna, Paani Bhoolna`,
          `4. Common Mistakes: Reversed Ratio, Mean Outside the Range, Forgetting the Water`
        ),
        body: t(
          `Mixture mein teen galtiyan sabse zyada hoti hain.

**Galti 1: ratio ulta likhna.** Alligation mein pehla hissa hamesha **dearer - mean** hota hai, jo saste wale ki quantity batata hai. 30% aur 60% se 45% banana ho toh ratio 1:1 hai, koi farak nahi padta — par 40% banana ho toh ratio 2:1 hai, jismein 2 saste wale ka hai. Ulta kar doge toh 1:2 likh doge aur jawab galat. Hamesha check karo: mean jis ke kareeb hai, uski quantity zyada honi chahiye.

**Galti 2: mean ko range se bahar samajhna.** Do cheezein 30% aur 60% ki milakar 70% wala solution kabhi nahi ban sakta — mean hamesha dono ke beech mein hota hai. Agar question mein mean 70% diya ho toh kuch gadbad hai, ya teesri cheez milani padegi.

**Galti 3: paani milane par kul badalna bhoolna.** 25 litre mixture mein 5 litre paani milao toh kul 30 litre ho jaata hai. Log doodh ko 20 litre rakhte hain (sahi), par paani ko 5 litre hi rakhte hain (galat — 10 litre ho gaya). Naya ratio nikaalne se pehle dono quantities dobara likho.`,
          `Three mistakes happen most often with mixtures.

**Mistake 1: Writing the ratio backwards.** In alligation, the first part is always **dearer - mean**, and it gives the quantity of the cheap item. For making 45% from 30% and 60%, the ratio is 1:1, so it makes no difference — but for 40%, the ratio is 2:1, where 2 is the cheap one. Reverse it and you will write 1:2 and get the answer wrong. Always check: whichever item the mean is closer to, its quantity must be bigger.

**Mistake 2: Placing the mean outside the range.** Mixing a 30% and a 60% solution can never make a 70% solution — the mean always lies between the two. If a question gives a mean of 70%, something is wrong, or a third item must be added.

**Mistake 3: Forgetting that the total changes when water is added.** Add 5 litres of water to 25 litres of mixture and the total becomes 30 litres. People keep the milk at 20 litres (correct) but keep the water at 5 litres (wrong — it is now 10 litres). Before finding the new ratio, write down both quantities again.`
        )
      },
      {
        heading: t(
          `5. Edge Cases: Mean Ek Jaise, Sirf Paani Milana, Teen Cheezein`,
          `5. Edge Cases: Equal Means, Adding Only Water, Three Items`
        ),
        body: t(
          `Edge cases mixture mein bhi aate hain.

**1. Dono ki mean ek jaisi ho.** Agar dono solutions 45% ke hain, toh mixture bhi 45% ka hoga — chahe kis ratio mein milao. Alligation mein (45 - 45) = 0 aayega, ratio 0:0, matlab ratio se koi farak nahi padta.

**2. Sirf paani milana.** Paani mein 0% namak hota hai. 60% wale solution mein paani milakar 30% banana ho toh ratio = (60 - 30):(30 - 0) = 30:30 = 1:1. Matlab barabar paani milao. Paani ko 0% wali cheez samajh kar alligation lagao.

**3. Teen cheezein milana.** Teen cheezein hon toh alligation seedha nahi lagta. Pehle do ko milakar ek mean banao, phir us mean ko teesri se milao. Ya weighted average ka formula use karo: (q1 x p1 + q2 x p2 + q3 x p3) / (q1 + q2 + q3).

**4. Mixture se cheez nikaalna.** 10 litre 45% wale solution mein se 2 litre nikaal lo toh bacha hua 8 litre bhi 45% ka hi rahega — percent nahi badalta, sirf quantity kam hoti hai. Percent tabhi badalta hai jab kuch naya milaya ya nikala jaaye alag percent wala.`,
          `Edge cases appear in mixtures too.

**1. Both means are the same.** If both solutions are 45%, the mixture is also 45% — no matter what ratio you mix them in. In alligation, (45 - 45) = 0, so the ratio is 0:0, which means the ratio makes no difference.

**2. Adding only water.** Water has 0% salt. To make a 30% solution from a 60% solution by adding water, the ratio = (60 - 30):(30 - 0) = 30:30 = 1:1. That means add an equal amount of water. Treat water as the 0% item and apply alligation.

**3. Mixing three items.** With three items, alligation does not apply directly. First mix two of them into one mean, then mix that mean with the third. Or use the weighted average formula: (q1 x p1 + q2 x p2 + q3 x p3) / (q1 + q2 + q3).

**4. Removing some mixture.** Take 2 litres out of 10 litres of a 45% solution and the remaining 8 litres are still 45% — the percent does not change, only the quantity falls. The percent changes only when something new with a different percent is added or removed.`
        )
      },
      {
        heading: t(
          `6. What If: Mean Badlo, Paani Milao, Ratio Ultao`,
          `6. What-If: Changing the Mean, Adding Water, Reversing the Ratio`
        ),
        body: t(
          `Ab hum "what-if" sawaal poochhte hain.

**What if: mean price nikaalni ho?** Rs. 120 aur Rs. 180 wali chai 2:3 mein milayi. Mean = (2 x 120 + 3 x 180) / 5 = (240 + 540) / 5 = 780 / 5 = Rs. 156. 5 kg mixture ki keemat = 156 x 5 = Rs. 780. Check karo: 2 kg x 120 = 240, 3 kg x 180 = 540, kul 780 — sahi hai.

**What if: paani milane par ratio badle?** 25 litre mein doodh:paani = 4:1, matlab doodh 20 litre, paani 5 litre. 5 litre paani aur milao: doodh 20, paani 10, naya ratio 20:10 = 2:1. Doodh ki matra nahi badli, sirf paani badha — isliye ratio aadha ho gaya.

**What if: ratio ulta kar dein?** 30% aur 80% se 50% banana ho toh ratio = (80 - 50):(50 - 30) = 30:20 = 3:2. Matlab 3 hisse 30% wala, 2 hisse 80% wala. 10 litre ke liye 6 litre aur 4 litre. Ulta kar doge toh 4 litre 30% wala aur 6 litre 80% wala milega, aur mean 62% ho jaayega — galat.`,
          `Now let us ask "what-if" questions.

**What if the mean price must be found?** Tea at Rs. 120 and Rs. 180 is mixed in 2:3. Mean = (2 x 120 + 3 x 180) / 5 = (240 + 540) / 5 = 780 / 5 = Rs. 156. Cost of 5 kg of mixture = 156 x 5 = Rs. 780. Check it: 2 kg x 120 = 240, 3 kg x 180 = 540, total 780 — correct.

**What if water is added and the ratio changes?** In 25 litres, milk:water = 4:1, which means 20 litres of milk and 5 litres of water. Add 5 more litres of water: milk 20, water 10, new ratio 20:10 = 2:1. The milk did not change, only the water grew — so the ratio halved.

**What if the ratio is reversed?** To make 50% from 30% and 80%, the ratio = (80 - 50):(50 - 30) = 30:20 = 3:2. That means 3 parts of the 30% one and 2 parts of the 80% one. For 10 litres, 6 litres and 4 litres. Reverse it and you get 4 litres of the 30% one and 6 litres of the 80% one, and the mean becomes 62% — wrong.`
        )
      },
      {
        heading: t(
          `7. Summary: Mixture ka Poora Picture`,
          `7. Summary: The Full Picture of Mixtures`
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. **Mixture** mein mean hamesha dono cheezon ke beech mein hota hai. Mean nikaalna ho toh weighted average lagao: \`Mean = (q1 x p1 + q2 x p2) / (q1 + q2)\`. Ratio nikaalna ho toh **alligation** lagao: \`ratio = (dearer - mean) : (mean - cheaper)\`.

Yaad rakhne ke do niyam hain. Pehla: mean jis cheez ke kareeb ho, usi ki quantity zyada hoti hai. Doosra: paani ko 0% wali cheez samjho. Mixture se kuch nikaal lo toh percent nahi badalta; kuch naya milao toh badalta hai.

Aakhiri check: kya aapka mean dono ke beech mein hai? Kya ratio wale hisso ka jod kul quantity ke barabar hai? Agar dono haan hain, toh jawab sahi hai. Agle article mein hum ages dekhenge — wahan bhi equations banti hain, par milana nahi, saal jodna aur ghataana hota hai.`,
          `Let us tie the whole article together. In a **mixture**, the mean always lies between the two items. To find the mean, use the weighted average: \`Mean = (q1 x p1 + q2 x p2) / (q1 + q2)\`. To find the ratio, use **alligation**: \`ratio = (dearer - mean) : (mean - cheaper)\`.

Remember two rules. First: whichever item the mean is closer to, that item's quantity is bigger. Second: treat water as the 0% item. Taking some mixture out does not change the percent; adding something new does.

One final check: is your mean between the two values? Does the sum of the ratio shares equal the total quantity? If both answers are yes, the answer is right. In the next article we will look at ages — equations appear there too, but nothing is mixed; years are added and subtracted instead.`
        )
      }
    ],
    diagram: {
      kind: 'flow',
      title: t(
        `Alligation ka Flow: Mean se Ratio Tak`,
        `Alligation Flow: From Mean to Ratio`
      ),
      caption: t(
        `Do farak nikaalo, ratio likho, quantity baanto`,
        `Find two differences, write the ratio, divide the quantity`
      ),
      nodes: [
        {
          t: t('Sasta 30%, Mehenga 60%, Mean 45%', 'Cheap 30%, Costly 60%, Mean 45%'),
          s: t('Mean hamesha dono ke beech mein hota hai', 'The mean always lies between the two')
        },
        {
          t: t('Upar ka farak: 60 - 45 = 15', 'Top difference: 60 - 45 = 15'),
          s: t('Yeh saste wale ki quantity batata hai', 'This gives the quantity of the cheap item')
        },
        {
          t: t('Neeche ka farak: 45 - 30 = 15', 'Bottom difference: 45 - 30 = 15'),
          s: t('Yeh mehenge wale ki quantity batata hai', 'This gives the quantity of the costly item')
        },
        {
          t: t('Ratio 15:15 = 1:1, 10 L mein 5 L + 5 L', 'Ratio 15:15 = 1:1, in 10 L: 5 L + 5 L'),
          s: t('Check: (5 x 30 + 5 x 60) / 10 = 45%', 'Check: (5 x 30 + 5 x 60) / 10 = 45%')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          `Mean Price: Rs. 120 aur Rs. 180 wali Chai, 2:3 mein`,
          `Mean Price: Tea at Rs. 120 and Rs. 180, Mixed 2:3`
        ),
        language: 'python',
        code: `# Mean price: tea Rs. 120/kg and Rs. 180/kg mixed in ratio 2:3
p1, p2, r1, r2 = 120, 180, 2, 3
mean = (r1 * p1 + r2 * p2) // (r1 + r2)
print(f"Mean price = (2 x {p1} + 3 x {p2}) / 5")
print(f"Mean price = ({r1 * p1} + {r2 * p2}) / 5 = Rs. {mean}")
print(f"Cost of 5 kg mixture = Rs. {round(mean * 5)}")`,
        output: `Mean price = (2 x 120 + 3 x 180) / 5
Mean price = (240 + 540) / 5 = Rs. 156
Cost of 5 kg mixture = Rs. 780`
      },
      {
        title: t(
          `Paani Milana: 25 L mein Doodh:Paani 4:1, phir 5 L Paani aur`,
          `Adding Water: 25 L with Milk:Water 4:1, Then 5 L More Water`
        ),
        language: 'python',
        code: `# 25 L mixture, milk:water = 4:1, then add 5 L water
total = 25
milk = total * 4 // 5
water = total - milk
print(f"Milk = 25 x 4/5 = {milk} L, Water = {water} L")
water2 = water + 5
print(f"After adding 5 L water: milk = {milk} L, water = {water2} L")
print(f"New ratio = {milk}:{water2} = 2:1")`,
        output: `Milk = 25 x 4/5 = 20 L, Water = 5 L
After adding 5 L water: milk = 20 L, water = 10 L
New ratio = 20:10 = 2:1`
      }
    ],
    mcqs: [
      {
        q: t(
          `30% aur 60% wale solution ko milakar 45% banana hai. Ratio kitna hoga?`,
          `A 30% and a 60% solution are mixed to make 45%. What is the ratio?`
        ),
        opts: [
          t(`1:2`, `1:2`),
          t(`2:1`, `2:1`),
          t(`1:1`, `1:1`),
          t(`3:2`, `3:2`)
        ],
        ans: 2,
        expl: t(
          `Sahi jawab: (60 - 45):(45 - 30) = 15:15 = 1:1. Mean bilkul beech mein hai, isliye barabar matra.`,
          `Correct answer: (60 - 45):(45 - 30) = 15:15 = 1:1. The mean sits exactly in the middle, so equal amounts.`
        )
      },
      {
        q: t(
          `Rs. 120 aur Rs. 180 wali chai 2:3 mein milayi. Mean price kitni hogi?`,
          `Tea at Rs. 120 and Rs. 180 is mixed in 2:3. What is the mean price?`
        ),
        opts: [
          t(`Rs. 150`, `Rs. 150`),
          t(`Rs. 156`, `Rs. 156`),
          t(`Rs. 160`, `Rs. 160`),
          t(`Rs. 144`, `Rs. 144`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: (2 x 120 + 3 x 180) / 5 = 780 / 5 = Rs. 156.`,
          `Correct answer: (2 x 120 + 3 x 180) / 5 = 780 / 5 = Rs. 156.`
        )
      },
      {
        q: t(
          `25 litre mixture mein doodh:paani = 4:1 hai. 5 litre paani aur milaya. Naya ratio kya hoga?`,
          `A 25 litre mixture has milk:water = 4:1. 5 litres of water are added. What is the new ratio?`
        ),
        opts: [
          t(`4:1`, `4:1`),
          t(`2:1`, `2:1`),
          t(`3:1`, `3:1`),
          t(`5:2`, `5:2`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: doodh 20 L, paani 5 + 5 = 10 L. Naya ratio 20:10 = 2:1.`,
          `Correct answer: milk 20 L, water 5 + 5 = 10 L. New ratio 20:10 = 2:1.`
        )
      },
      {
        q: t(
          `30% aur 80% wale acid se 50% wala 10 litre banana hai. Kitna-kitna chahiye?`,
          `To make 10 litres of 50% acid from 30% and 80% acid, how much of each is needed?`
        ),
        opts: [
          t(`5 L aur 5 L`, `5 L and 5 L`),
          t(`6 L aur 4 L`, `6 L and 4 L`),
          t(`4 L aur 6 L`, `4 L and 6 L`),
          t(`7 L aur 3 L`, `7 L and 3 L`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: ratio = (80 - 50):(50 - 30) = 30:20 = 3:2. 10 litre mein 6 L 30% wala aur 4 L 80% wala.`,
          `Correct answer: ratio = (80 - 50):(50 - 30) = 30:20 = 3:2. In 10 litres, 6 L of the 30% one and 4 L of the 80% one.`
        )
      },
      {
        q: t(
          `40% aur 70% wale solution se 55% banana hai. Ratio kitna hoga?`,
          `A 40% and a 70% solution are mixed to make 55%. What is the ratio?`
        ),
        opts: [
          t(`1:1`, `1:1`),
          t(`2:1`, `2:1`),
          t(`1:2`, `1:2`),
          t(`3:2`, `3:2`)
        ],
        ans: 0,
        expl: t(
          `Sahi jawab: (70 - 55):(55 - 40) = 15:15 = 1:1.`,
          `Correct answer: (70 - 55):(55 - 40) = 15:15 = 1:1.`
        )
      }
    ],
    keyNotes: [
      t(
        `Mean = (q1 x p1 + q2 x p2) / (q1 + q2); mean hamesha dono ke beech mein hota hai.`,
        `Mean = (q1 x p1 + q2 x p2) / (q1 + q2); the mean always lies between the two values.`
      ),
      t(
        `Alligation: ratio = (dearer - mean) : (mean - cheaper).`,
        `Alligation: ratio = (dearer - mean) : (mean - cheaper).`
      ),
      t(
        `Mean jis cheez ke kareeb ho, usi ki quantity zyada hoti hai.`,
        `Whichever item the mean is closer to, that item's quantity is bigger.`
      ),
      t(
        `Paani ko 0% wali cheez samjho.`,
        `Treat water as the 0% item.`
      ),
      t(
        `Mixture se kuch nikaal lo toh percent nahi badalta; naya milao toh badalta hai.`,
        `Taking mixture out does not change the percent; adding something new does.`
      )
    ],
    practice: {
      title: t(
        `Practice: 30% aur 80% Acid se 50% wala 10 Litre Banana`,
        `Practice: Making 10 Litres of 50% Acid from 30% and 80% Acid`
      ),
      task: t(
        `30% wale aur 80% wale acid ko milakar 50% wala 10 litre solution banana hai. Dono ki kitni-kitni matra chahiye? Starter code poora runnable hai — isko run karke verify karo ki output expected jaisa aata hai.`,
        `Mix 30% acid and 80% acid to make 10 litres of 50% solution. How much of each is needed? The starter code is complete and runnable — run it and verify the output matches the expected output.`
      ),
      language: 'python',
      starter: `# Practice: mix 30% and 80% acid to make 50%, total 10 L
cheap, dear, mean, total = 30, 80, 50, 10
r1 = dear - mean
r2 = mean - cheap
print(f"Ratio = ({dear} - {mean}) : ({mean} - {cheap}) = {r1}:{r2} = 3:2")
first = total * 3 // 5
second = total - first
print(f"30% acid = {first} L, 80% acid = {second} L")
check = (first * cheap + second * dear) // total
print(f"Check: ({first} x {cheap} + {second} x {dear}) / {total} = {check}%")`,
      expected: `Ratio = (80 - 50) : (50 - 30) = 30:20 = 3:2
30% acid = 6 L, 80% acid = 4 L
Check: (6 x 30 + 4 x 80) / 10 = 50%`
    },
    readMinutes: 12
  };

const quantAges: Article = {
    id: 'quant-ages',
    subjectId: 'quantitative-aptitude',
    title: t(
      `Problems on Ages — Baap-Beta, Pehle aur Baad mein`,
      `Problems on Ages — Father and Son, Before and After`
    ),
    summary: t(
      `Ages ke sawaal ko zero se samjho: present age se equation kaise banayein, "5 saal pehle" aur "6 saal baad" ko kaise handle karein, aur ratio wale age sawaal — sab worked examples ke saath.`,
      `Learn age problems from scratch: how to build an equation from the present age, how to handle "5 years ago" and "6 years later", and age questions with ratios — all with worked examples.`
    ),
    sections: [
      {
        heading: t(
          `1. Ages ke Sawaal Kya Hote Hain? (Present Age aur Equation)`,
          `1. What Are Age Problems? (Present Age and Equations)`
        ),
        body: t(
          `Ages ke sawaal mein do ya zyada logon ki umar ke baare mein jaankari di hoti hai, aur present age nikaalni hoti hai. Trick sirf ek hai: **chhoti umar ko x maan lo, phir baaki sab ko x ke hisaab se likho**. Example: baap apne bete se 3 guna bada hai aur dono ki kul umar 48 saal hai. Beta = x, baap = 3x. Equation: x + 3x = 48, matlab 4x = 48, toh x = 12. Beta 12 saal ka hai, baap 36 saal ka.

Umar ke sawaalon mein time ke teen roop hote hain: **present** (abhi), **past** (pehle, jaise 5 saal pehle), aur **future** (baad mein, jaise 6 saal baad). "5 saal pehle" ka matlab hai present age mein se 5 ghatao. "6 saal baad" ka matlab hai present age mein 6 jodo. Aur sabse important baat: **saal sab ke liye ek jaise beette hain** — 5 saal baad baap bhi 5 saal bada hoga aur beta bhi 5 saal bada hoga. Isi liye farak hamesha ek jaisa rehta hai.

Baap aur bete ki umar ka farak kabhi nahi badalta. Abhi farak 24 saal hai (36 - 12), toh 6 saal baad bhi farak 24 hi rahega (42 - 18). Exam mein yeh baat bahut kaam aati hai.`,
          `In age problems, information is given about the ages of two or more people, and the present age must be found. There is only one trick: **take the smaller age as x, then write everything else in terms of x**. Example: a father is 3 times as old as his son, and their total age is 48 years. Son = x, father = 3x. Equation: x + 3x = 48, so 4x = 48, and x = 12. The son is 12 years old, the father is 36.

Time appears in three forms in age problems: **present** (now), **past** (before, like 5 years ago), and **future** (later, like 6 years from now). "5 years ago" means subtract 5 from the present age. "6 years later" means add 6 to the present age. And the most important fact: **years pass equally for everyone** — 6 years later, the father will be 6 years older and the son will also be 6 years older. That is why the difference always stays the same.

The age difference between father and son never changes. Right now the difference is 24 years (36 - 12), and 6 years later it will still be 24 (42 - 18). This fact is very useful in exams.`
        )
      },
      {
        heading: t(
          `2. Real-Life Examples: Baap-Beta, Bhai-Behen aur Dada-Pota`,
          `2. Real-Life Examples: Father and Son, Siblings, and Grandfather and Grandson`
        ),
        body: t(
          `Ages ke sawaal real life se hi aate hain. Sabse common hai **baap-beta**. Baap 36 saal ka hai, beta 12 saal ka — baap teen guna bada hai. 6 saal baad baap 42 ka aur beta 18 ka hoga — tab baap sirf 42/18 = 2.33 guna bada rahega. Ratio samay ke saath badalta hai, par farak ek jaisa rehta hai.

Doosra example hai **bhai-behen**. Badi behen chhoti se 5 saal badi hai. 10 saal baad bhi woh 5 saal hi badi rahegi. Agar abhi chhoti 10 saal ki hai, toh badi 15 ki hai; 10 saal baad chhoti 20 ki aur badi 25 ki — farak ab bhi 5 hai.

Teesra example hai **dada-pota**. Dada 60 saal ke hain, pota 10 saal ka — dada 6 guna bade hain. 10 saal baad dada 70 ke aur pota 20 ka — tab dada sirf 3.5 guna bade rahenge. Jitna time beet-ta hai, ratio 1 ke kareeb aata jaata hai. Yeh baat samajh lo toh ages ke sawaal aasan ho jaate hain.`,
          `Age problems come from real life. The most common is **father and son**. The father is 36 years old, the son is 12 — the father is three times as old. After 6 years the father will be 42 and the son 18 — then the father will be only 42/18 = 2.33 times as old. The ratio changes with time, but the difference stays the same.

A second example is **siblings**. An elder sister is 5 years older than her younger sister. After 10 years she will still be 5 years older. If the younger one is 10 now, the elder is 15; after 10 years the younger is 20 and the elder is 25 — the difference is still 5.

A third example is **grandfather and grandson**. The grandfather is 60 years old, the grandson is 10 — the grandfather is 6 times as old. After 10 years the grandfather will be 70 and the grandson 20 — then the grandfather will be only 3.5 times as old. As time passes, the ratio moves closer to 1. Once you understand this, age problems become easy.`
        )
      },
      {
        heading: t(
          `3. Step-by-Step: Baap 3 Guna, Kul Umar 48 (Dry Run)`,
          `3. Step-by-Step: Father 3 Times, Total Age 48 (Dry Run)`
        ),
        body: t(
          `Ab hum worked example ko step-by-step karte hain. Question hai: baap apne bete se 3 guna bada hai aur dono ki kul umar 48 saal hai. Dono ki present age nikaalo, aur 6 saal baad ka ratio bhi nikaalo. **Step 1:** bete ki umar ko x maan lo. **Step 2:** baap ki umar = 3x. **Step 3:** equation banao: x + 3x = 48, matlab 4x = 48. **Step 4:** x = 48 / 4 = 12. Beta 12 saal ka hai. **Step 5:** baap = 3 x 12 = 36 saal ka. **Check:** 12 + 36 = 48, sahi hai.

Ab 6 saal baad ka hissa: beta = 12 + 6 = 18, baap = 36 + 6 = 42. Ratio = 42:18. Simplify karo: dono ko 6 se bhaag do, 7:3. Toh 6 saal baad baap aur bete ki umar ka ratio 7:3 hoga. Dhyaan do: farak ab bhi 42 - 18 = 24 hai — wahi jo pehle tha. Neeche wala code poora hisaab print karta hai.`,
          `Now let us work through an example step by step. The question is: a father is 3 times as old as his son, and their total age is 48 years. Find both present ages, and also the ratio after 6 years. **Step 1:** take the son's age as x. **Step 2:** the father's age = 3x. **Step 3:** build the equation: x + 3x = 48, so 4x = 48. **Step 4:** x = 48 / 4 = 12. The son is 12 years old. **Step 5:** the father = 3 x 12 = 36 years old. **Check:** 12 + 36 = 48, correct.

Now the part after 6 years: son = 12 + 6 = 18, father = 36 + 6 = 42. Ratio = 42:18. Simplify it: divide both by 6, 7:3. So after 6 years the ratio of the father's age to the son's age will be 7:3. Notice: the difference is still 42 - 18 = 24 — the same as before. The code below prints the full calculation.`
        ),
        code: {
          title: t(
            `Ages: Baap 3 Guna, Kul 48 Saal`,
            `Ages: Father 3 Times, Total 48 Years`
          ),
          language: 'python',
          code: `# Father is 3 times his son, sum of ages = 48
# Son = x, Father = 3x, 4x = 48
total = 48
son = total // 4
father = 3 * son
print(f"Son = 48 / 4 = {son} years")
print(f"Father = 3 x {son} = {father} years")
print(f"Check: {son} + {father} = {son + father}")
print()
# After 6 years
son2, father2 = son + 6, father + 6
print(f"After 6 years: son = {son2}, father = {father2}")
print(f"Ratio = {father2}:{son2} = 7:3")`,
          output: `Son = 48 / 4 = 12 years
Father = 3 x 12 = 36 years
Check: 12 + 36 = 48

After 6 years: son = 18, father = 42
Ratio = 42:18 = 7:3`
        }
      },
      {
        heading: t(
          `4. Common Mistakes: Sirf Ek ki Umar Badalna, Farak Badalna, x Galat Maanna`,
          `4. Common Mistakes: Ageing Only One Person, Changing the Difference, Picking the Wrong x`
        ),
        body: t(
          `Ages ke sawaalon mein teen galtiyan sabse zyada hoti hain.

**Galti 1: sirf ek ki umar badalna.** "6 saal baad" mein log baap ki umar mein 6 jod dete hain, bete ki mein nahi — ya ulta. Saal sab ke liye ek jaise beette hain: dono mein 6 jodo. Agar ek mein jodo aur doosre mein nahi, toh farak badal jaayega, jo impossible hai.

**Galti 2: farak badalna.** Log sochte hain 6 saal baad baap aur bete ka farak bhi badh jaayega. Nahi — farak hamesha ek jaisa rehta hai. 36 - 12 = 24, aur 42 - 18 = 24. Farak ko equation mein use karo toh hisaab aasan ho jaata hai.

**Galti 3: badi umar ko x maanna.** Agar baap ko x maan lo toh beta = x/3 hota hai — fraction aa jaata hai aur hisaab mushkil ho jaata hai. Hamesha **chhoti umar ko x** maano, taaki badi umar poora guna (3x, 4x) ban jaaye aur fraction na aaye.`,
          `Three mistakes happen most often in age problems.

**Mistake 1: Ageing only one person.** For "6 years later", people add 6 to the father's age but not to the son's — or the reverse. Years pass equally for everyone: add 6 to both. If you add it to one and not the other, the difference changes, which is impossible.

**Mistake 2: Changing the difference.** People think the age difference between father and son will grow after 6 years. No — the difference always stays the same. 36 - 12 = 24, and 42 - 18 = 24. Using the difference in the equation makes the calculation easy.

**Mistake 3: Taking the bigger age as x.** If you take the father as x, the son becomes x/3 — a fraction appears and the calculation gets hard. Always take the **smaller age as x**, so the bigger age becomes a whole multiple (3x, 4x) and no fraction appears.`
        )
      },
      {
        heading: t(
          `5. Edge Cases: Umar Zero, Pehle ka Ratio, Barabar Umar`,
          `5. Edge Cases: Zero Age, Past Ratio, Equal Ages`
        ),
        body: t(
          `Edge cases ages mein bhi aate hain.

**1. Umar zero ya negative aaye.** Agar equation se kisi ki umar zero ya negative aaye, toh question mein kuch gadbad hai ya hisaab galat hai. Umar hamesha positive hoti hai. Example: "Ram Shyam se 5 saal bada hai, 5 saal baad Ram Shyam se double hoga" — ismein Shyam ki umar 0 aati hai, matlab question hi galat hai.

**2. Pehle ka ratio diya ho.** "5 saal pehle A, B se 4 guna bada tha, aur ab dono ki kul umar 45 hai." B ki present umar ko x maano. 5 saal pehle B = x - 5, A = 4(x - 5). Present mein A = 4(x - 5) + 5 = 4x - 15. Kul: (4x - 15) + x = 45, matlab 5x = 60, x = 12. B abhi 12 saal ka hai, A 33 saal ka. Check: 5 saal pehle A 28 aur B 7 — 28 = 4 x 7, sahi hai.

**3. Dono ki umar barabar ho.** Judwa bhaiyon ka farak zero hota hai aur hamesha zero hi rehta hai. Ratio hamesha 1:1 rahega.

**4. Ratio 1 ke kareeb aata jaata hai.** Baap 3 guna bada hai, par samay beetne par ratio 1 ki taraf badhta hai. Kabhi 1 se neeche nahi jaata — baap hamesha bada hi rahega.`,
          `Edge cases appear in ages too.

**1. Age comes out zero or negative.** If the equation gives someone an age of zero or a negative age, either the question is wrong or the calculation is wrong. Age is always positive. Example: "Ram is 5 years older than Shyam, and in 5 years Ram will be twice Shyam" — this gives Shyam's age as 0, which means the question itself is wrong.

**2. Past ratio given.** "5 years ago A was 4 times as old as B, and now their total age is 45." Take B's present age as x. 5 years ago B = x - 5, A = 4(x - 5). In the present, A = 4(x - 5) + 5 = 4x - 15. Total: (4x - 15) + x = 45, so 5x = 60, x = 12. B is 12 now, A is 33. Check: 5 years ago A was 28 and B was 7 — 28 = 4 x 7, correct.

**3. Both ages equal.** Twins have a difference of zero, and it stays zero forever. The ratio is always 1:1.

**4. The ratio moves towards 1.** A father is 3 times as old, but as time passes the ratio moves towards 1. It never goes below 1 — the father will always stay older.`
        )
      },
      {
        heading: t(
          `6. What If: Pehle ka Ratio, Baad ka Ratio, Farak se Umar`,
          `6. What-If: Past Ratio, Future Ratio, Age from Difference`
        ),
        body: t(
          `Ab hum "what-if" sawaal poochhte hain.

**What if: 5 saal pehle ka ratio diya ho?** A 5 saal pehle B se 4 guna bada tha, kul present umar 45 hai. B = x maano: 5 saal pehle A = 4(x - 5), present A = 4x - 15. Equation: 5x - 15 = 45, toh 5x = 60, x = 12. B 12 saal ka, A 33 saal ka. Check: 5 saal pehle 28 aur 7, 28 = 4 x 7.

**What if: baad ka ratio diya ho?** Ram Shyam se double hai, aur 10 saal baad Ram Shyam ka 1.5 guna hoga. Shyam = x, Ram = 2x. 10 saal baad: 2x + 10 = 1.5(x + 10). Matlab 2x + 10 = 1.5x + 15, toh 0.5x = 5, x = 10. Shyam 10 saal ka, Ram 20 saal ka. Check: 10 saal baad 30 aur 20, 30 = 1.5 x 20.

**What if: sirf farak aur ratio diya ho?** Baap bete se 24 saal bada hai aur 3 guna bhi hai. Beta = x, baap = 3x, farak = 2x = 24, toh x = 12. Beta 12, baap 36. Farak wale sawaal mein equation banane ki zaroorat hi nahi — farak ko (guna - 1) se bhaag do.`,
          `Now let us ask "what-if" questions.

**What if a past ratio is given?** A was 4 times as old as B 5 years ago, and their total present age is 45. Take B = x: 5 years ago A = 4(x - 5), present A = 4x - 15. Equation: 5x - 15 = 45, so 5x = 60, x = 12. B is 12 years old, A is 33. Check: 5 years ago 28 and 7, 28 = 4 x 7.

**What if a future ratio is given?** Ram is twice as old as Shyam, and in 10 years Ram will be 1.5 times Shyam. Shyam = x, Ram = 2x. In 10 years: 2x + 10 = 1.5(x + 10). So 2x + 10 = 1.5x + 15, 0.5x = 5, x = 10. Shyam is 10 years old, Ram is 20. Check: in 10 years 30 and 20, 30 = 1.5 x 20.

**What if only the difference and the ratio are given?** A father is 24 years older than his son and also 3 times as old. Son = x, father = 3x, difference = 2x = 24, so x = 12. Son 12, father 36. In difference questions you do not even need a full equation — divide the difference by (multiple - 1).`
        )
      },
      {
        heading: t(
          `7. Summary: Ages ka Poora Picture`,
          `7. Summary: The Full Picture of Ages`
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. Ages ke sawaal mein **chhoti umar ko x maano**, baaki sab ko x ke hisaab se likho, aur equation banao. "Pehle" ka matlab hai ghatao, "baad mein" ka matlab hai jodo — aur dono logon ki umar mein ek jaise saal jodo ya ghatao.

Do niyam hamesha yaad rakho. Pehla: **umar ka farak kabhi nahi badalta**. Doosra: **ratio samay ke saath 1 ki taraf badhta hai** — baap hamesha bada rahega, par guna kam hota jaayega. Farak aur ratio dono diye hon toh farak ko (guna - 1) se bhaag do, seedha chhoti umar mil jaayegi.

Aakhiri check: kya dono ki umar positive hai? Kya unka jod ya farak question se milta hai? Kya "pehle" aur "baad" wali condition check karne par sahi baithti hai? Agar teeno haan hain, toh jawab sahi hai. Agle article mein hum HCF aur LCM dekhenge — wahan umar nahi, numbers ke factors ka khel hai.`,
          `Let us tie the whole article together. In age problems, **take the smaller age as x**, write everything else in terms of x, and build an equation. "Ago" means subtract, "later" means add — and add or subtract the same years for both people.

Always remember two rules. First: **the age difference never changes**. Second: **the ratio moves towards 1 with time** — the father will always stay older, but the multiple keeps shrinking. If both the difference and the ratio are given, divide the difference by (multiple - 1) and you get the smaller age directly.

One final check: are both ages positive? Does their sum or difference match the question? Does the "ago" or "later" condition hold when you check it? If all three answers are yes, the answer is right. In the next article we will look at HCF and LCM — there it is not ages, but the game of factors of numbers.`
        )
      }
    ],
    diagram: {
      kind: 'timeline',
      title: t(
        `Baap aur Beta: Umar ka Timeline`,
        `Father and Son: Age Timeline`
      ),
      caption: t(
        `Ratio badalta hai, farak hamesha 24 hi rehta hai`,
        `The ratio changes, the difference always stays 24`
      ),
      nodes: [
        {
          t: t('Abhi: Beta 12, Baap 36', 'Now: Son 12, Father 36'),
          s: t('Ratio 3:1, farak 24', 'Ratio 3:1, difference 24')
        },
        {
          t: t('6 saal baad: Beta 18, Baap 42', 'After 6 years: Son 18, Father 42'),
          s: t('Ratio 7:3, farak ab bhi 24', 'Ratio 7:3, difference still 24')
        },
        {
          t: t('12 saal baad: Beta 24, Baap 48', 'After 12 years: Son 24, Father 48'),
          s: t('Ratio 2:1, farak ab bhi 24', 'Ratio 2:1, difference still 24')
        },
        {
          t: t('24 saal baad: Beta 36, Baap 60', 'After 24 years: Son 36, Father 60'),
          s: t('Ratio 5:3, farak ab bhi 24', 'Ratio 5:3, difference still 24')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          `Pehle ka Ratio: 5 Saal Pehle A, B se 4 Guna`,
          `Past Ratio: 5 Years Ago A Was 4 Times B`
        ),
        language: 'python',
        code: `# 5 years ago A was 4 times B. Sum of present ages = 45.
# Let B now = x. Then A now = 45 - x.
# 5 years ago: (45 - x - 5) = 4(x - 5) -> 40 - x = 4x - 20 -> 5x = 60
x = 60 // 5
A = 45 - x
print(f"B now = 60 / 5 = {x} years")
print(f"A now = 45 - {x} = {A} years")
print(f"Check 5 years ago: A = {A - 5}, B = {x - 5}, {A - 5} = 4 x {x - 5}")`,
        output: `B now = 60 / 5 = 12 years
A now = 45 - 12 = 33 years
Check 5 years ago: A = 28, B = 7, 28 = 4 x 7`
      },
      {
        title: t(
          `Baad ka Ratio: Ram Double, 10 Saal Baad 1.5 Guna`,
          `Future Ratio: Ram Twice Now, 1.5 Times in 10 Years`
        ),
        language: 'python',
        code: `# Ram is twice as old as Shyam. In 10 years Ram will be 1.5 times Shyam.
# Let Shyam = x, Ram = 2x. Then 2x + 10 = 1.5(x + 10) -> 0.5x = 5
x = 10
ram = 2 * x
print(f"Shyam now = {x} years")
print(f"Ram now = 2 x {x} = {ram} years")
print(f"In 10 years: Ram = {ram + 10}, Shyam = {x + 10}")
print(f"Check: {ram + 10} = 1.5 x {x + 10}")`,
        output: `Shyam now = 10 years
Ram now = 2 x 10 = 20 years
In 10 years: Ram = 30, Shyam = 20
Check: 30 = 1.5 x 20`
      }
    ],
    mcqs: [
      {
        q: t(
          `Baap apne bete se 3 guna bada hai aur dono ki kul umar 48 saal hai. Bete ki umar kitni hai?`,
          `A father is 3 times as old as his son, and their total age is 48 years. How old is the son?`
        ),
        opts: [
          t(`10 saal`, `10 years`),
          t(`12 saal`, `12 years`),
          t(`14 saal`, `14 years`),
          t(`16 saal`, `16 years`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: beta = x, baap = 3x, 4x = 48, toh x = 12 saal. Baap 36 saal ka hai.`,
          `Correct answer: son = x, father = 3x, 4x = 48, so x = 12 years. The father is 36.`
        )
      },
      {
        q: t(
          `5 saal pehle A, B se 4 guna bada tha. Ab dono ki kul umar 45 hai. B ki present umar kitni hai?`,
          `5 years ago A was 4 times as old as B. Now their total age is 45. What is B's present age?`
        ),
        opts: [
          t(`10 saal`, `10 years`),
          t(`11 saal`, `11 years`),
          t(`12 saal`, `12 years`),
          t(`13 saal`, `13 years`)
        ],
        ans: 2,
        expl: t(
          `Sahi jawab: B = x maano, toh 5x - 15 = 45, 5x = 60, x = 12 saal. A 33 saal ka hai; 5 saal pehle 28 aur 7 the.`,
          `Correct answer: take B = x, then 5x - 15 = 45, 5x = 60, x = 12 years. A is 33; 5 years ago they were 28 and 7.`
        )
      },
      {
        q: t(
          `Ram Shyam se double hai. 10 saal baad Ram Shyam ka 1.5 guna hoga. Shyam ki present umar kitni hai?`,
          `Ram is twice as old as Shyam. In 10 years Ram will be 1.5 times Shyam. What is Shyam's present age?`
        ),
        opts: [
          t(`8 saal`, `8 years`),
          t(`10 saal`, `10 years`),
          t(`12 saal`, `12 years`),
          t(`15 saal`, `15 years`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: Shyam = x, Ram = 2x. 2x + 10 = 1.5(x + 10) se x = 10 saal. Ram 20 saal ka hai.`,
          `Correct answer: Shyam = x, Ram = 2x. From 2x + 10 = 1.5(x + 10), x = 10 years. Ram is 20.`
        )
      },
      {
        q: t(
          `Maa apni beti se 4 guna badi hai aur dono ki kul umar 50 saal hai. Maa ki umar kitni hai?`,
          `A mother is 4 times as old as her daughter, and their total age is 50 years. How old is the mother?`
        ),
        opts: [
          t(`36 saal`, `36 years`),
          t(`38 saal`, `38 years`),
          t(`40 saal`, `40 years`),
          t(`42 saal`, `42 years`)
        ],
        ans: 2,
        expl: t(
          `Sahi jawab: beti = x, maa = 4x, 5x = 50, x = 10. Maa = 4 x 10 = 40 saal.`,
          `Correct answer: daughter = x, mother = 4x, 5x = 50, x = 10. Mother = 4 x 10 = 40 years.`
        )
      },
      {
        q: t(
          `6 saal baad baap 42 saal ka aur beta 18 saal ka hoga. Unki umar ka ratio kitna hoga?`,
          `After 6 years the father will be 42 and the son 18. What is the ratio of their ages?`
        ),
        opts: [
          t(`7:3`, `7:3`),
          t(`5:2`, `5:2`),
          t(`2:1`, `2:1`),
          t(`3:1`, `3:1`)
        ],
        ans: 0,
        expl: t(
          `Sahi jawab: 42:18 ko 6 se bhaag do toh 7:3 milta hai. Farak ab bhi 24 hai.`,
          `Correct answer: dividing 42:18 by 6 gives 7:3. The difference is still 24.`
        )
      }
    ],
    keyNotes: [
      t(
        `Chhoti umar ko x maano, baaki sab ko x ke hisaab se likho.`,
        `Take the smaller age as x, and write everything else in terms of x.`
      ),
      t(
        `"Pehle" ka matlab ghatao, "baad mein" ka matlab jodo — dono ki umar mein ek jaise.`,
        `"Ago" means subtract, "later" means add — the same for both people.`
      ),
      t(
        `Umar ka farak kabhi nahi badalta.`,
        `The age difference never changes.`
      ),
      t(
        `Ratio samay ke saath 1 ki taraf badhta hai.`,
        `The ratio moves towards 1 with time.`
      ),
      t(
        `Farak aur ratio diye hon toh farak ko (guna - 1) se bhaag do.`,
        `If the difference and the ratio are given, divide the difference by (multiple - 1).`
      )
    ],
    practice: {
      title: t(
        `Practice: Maa 4 Guna, Kul Umar 50 Saal`,
        `Practice: Mother 4 Times, Total Age 50 Years`
      ),
      task: t(
        `Maa apni beti se 4 guna badi hai aur dono ki kul umar 50 saal hai. Dono ki present age nikaalo aur 10 saal baad ka ratio bhi nikaalo. Starter code poora runnable hai — isko run karke verify karo ki output expected jaisa aata hai.`,
        `A mother is 4 times as old as her daughter, and their total age is 50 years. Find both present ages and the ratio after 10 years. The starter code is complete and runnable — run it and verify the output matches the expected output.`
      ),
      language: 'python',
      starter: `# Practice: mother is 4 times her daughter, sum = 50
total = 50
daughter = total // 5
mother = 4 * daughter
print(f"Daughter = 50 / 5 = {daughter} years")
print(f"Mother = 4 x {daughter} = {mother} years")
print(f"Check: {daughter} + {mother} = {daughter + mother}")
d2, m2 = daughter + 10, mother + 10
print(f"After 10 years: daughter = {d2}, mother = {m2}")
print(f"Ratio = {m2}:{d2} = 5:2")`,
      expected: `Daughter = 50 / 5 = 10 years
Mother = 4 x 10 = 40 years
Check: 10 + 40 = 50
After 10 years: daughter = 20, mother = 50
Ratio = 50:20 = 5:2`
    },
    readMinutes: 12
  };

const quantHcfLcm: Article = {
    id: 'quant-hcf-lcm',
    subjectId: 'quantitative-aptitude',
    title: t(
      `HCF aur LCM — Methods aur Word Problems`,
      `HCF and LCM — Methods and Word Problems`
    ),
    summary: t(
      `HCF aur LCM ko zero se samjho: prime factorisation aur division method, dono ka rishta, aur ghanti, tiles aur race wale word problems — sab worked examples ke saath.`,
      `Learn HCF and LCM from scratch: prime factorisation and the division method, the relation between them, and word problems about bells, tiles, and races — all with worked examples.`
    ),
    sections: [
      {
        heading: t(
          `1. HCF aur LCM Kya Hain? (Factor aur Multiple)`,
          `1. What Are HCF and LCM? (Factors and Multiples)`
        ),
        body: t(
          `**HCF (Highest Common Factor)** woh sabse bada number hai jo diye gaye numbers ko poora-poora bhaag kar de. 48 aur 72 ka HCF 24 hai — 24 se 48 bhi poora bat-ta hai (2 baar) aur 72 bhi (3 baar), aur isse bada koi common factor nahi hai. **LCM (Lowest Common Multiple)** woh sabse chhota number hai jo diye gaye numbers ka multiple ho. 48 aur 72 ka LCM 144 hai — 144, 48 ka multiple hai (3 baar) aur 72 ka bhi (2 baar), aur isse chhota koi common multiple nahi hai.

Dono ka ek bahut kaam ka rishta hai: **HCF x LCM = pehla number x doosra number**. 48 aur 72 ke liye: 24 x 144 = 3,456 aur 48 x 72 = 3,456. Dono barabar hain. Iska matlab hai agar HCF pata hai toh LCM nikaal lo, aur LCM pata hai toh HCF — ek ko jaan kar doosra mil jaata hai. Yeh formula sirf **do numbers** ke liye chalta hai, teen ke liye nahi.

HCF ko **GCD** bhi kehte hain (Greatest Common Divisor) — exam mein dono naam aate hain. LCM ko kabhi-kabhi **LCD** nahi kehte, woh alag cheez hai. HCF hamesha chhote number se chhota ya barabar hota hai, aur LCM hamesha bade number se bada ya barabar hota hai.`,
          `The **HCF (Highest Common Factor)** is the biggest number that divides the given numbers exactly. The HCF of 48 and 72 is 24 — 24 divides 48 exactly (2 times) and 72 exactly (3 times), and no bigger common factor exists. The **LCM (Lowest Common Multiple)** is the smallest number that is a multiple of the given numbers. The LCM of 48 and 72 is 144 — 144 is a multiple of 48 (3 times) and of 72 (2 times), and no smaller common multiple exists.

The two share a very useful relation: **HCF x LCM = first number x second number**. For 48 and 72: 24 x 144 = 3,456 and 48 x 72 = 3,456. Both are equal. That means if you know the HCF you can find the LCM, and if you know the LCM you can find the HCF — knowing one gives you the other. This formula works only for **two numbers**, not for three.

HCF is also called **GCD** (Greatest Common Divisor) — exams use both names. HCF is always smaller than or equal to the smaller number, and LCM is always bigger than or equal to the bigger number.`
        )
      },
      {
        heading: t(
          `2. Real-Life Examples: Ghanti, Tiles aur Race`,
          `2. Real-Life Examples: Bells, Tiles, and Races`
        ),
        body: t(
          `HCF aur LCM roz ki zindagi mein chhupe hote hain. Sabse famous example hai **ghanti (bells)**. Teen ghantiyan har 6, 8 aur 10 minute mein bajti hain. Teenon ek saath kab bajengi? LCM(6, 8, 10) = 120 minute, matlab 2 ghante baad. "Ek saath kab hoga" sunte hi LCM yaad rakho.

Doosra example hai **tiles**. Ek kamra 48 cm x 72 cm ka hai, usmein sabse badi square tile lagani hai bina kaate. Tile ki side hogi HCF(48, 72) = 24 cm. "Sabse bada size, bina kaate" sunte hi HCF yaad rakho.

Teesra example hai **race**. Do dhaavak ek circular track par daudte hain — ek 48 second mein ek chakkar lagata hai, doosra 72 second mein. Dono starting point par phir kab milenge? LCM(48, 72) = 144 second baad. Aur ek chakkar mein kitni baar milenge, woh bhi isi se nikalta hai.`,
          `HCF and LCM hide in everyday life. The most famous example is **bells**. Three bells ring every 6, 8, and 10 minutes. When will all three ring together? LCM(6, 8, 10) = 120 minutes, which means after 2 hours. The moment you hear "when together", think LCM.

A second example is **tiles**. A room is 48 cm x 72 cm, and you want the biggest square tile that fits without cutting. The tile's side is HCF(48, 72) = 24 cm. The moment you hear "biggest size, without cutting", think HCF.

A third example is a **race**. Two runners run on a circular track — one finishes a lap in 48 seconds, the other in 72 seconds. When will they meet again at the starting point? LCM(48, 72) = 144 seconds later. How many times they meet in one lap comes from the same calculation.`
        )
      },
      {
        heading: t(
          `3. Step-by-Step: 48 aur 72 ka HCF aur LCM (Dry Run)`,
          `3. Step-by-Step: HCF and LCM of 48 and 72 (Dry Run)`
        ),
        body: t(
          `Ab hum worked example ko prime factorisation se karte hain. Question hai: 48 aur 72 ka HCF aur LCM nikaalo. **Step 1:** dono ke prime factors nikaalo. 48 = 2 x 2 x 2 x 2 x 3 = \`2^4 x 3\`. 72 = 2 x 2 x 2 x 3 x 3 = \`2^3 x 3^2\`. **Step 2:** HCF ke liye common primes ki **chhoti power** lo: 2 ki chhoti power 2^3 hai, 3 ki chhoti power 3^1 hai. HCF = 2^3 x 3 = 8 x 3 = 24. **Step 3:** LCM ke liye har prime ki **badi power** lo: 2 ki badi power 2^4 hai, 3 ki badi power 3^2 hai. LCM = 2^4 x 3^2 = 16 x 9 = 144.

**Check:** HCF x LCM = 24 x 144 = 3,456. Aur 48 x 72 = 3,456. Dono barabar hain — hisaab sahi hai. **Division method** bhi hai: dono numbers ko ek saath unke common prime se bhaag karte jao jab tak common factor bache. 48 aur 72 ko 2 se bhaago: 24, 36. Phir 2 se: 12, 18. Phir 2 se: 6, 9. Phir 3 se: 2, 3. Ab koi common factor nahi. HCF = 2 x 2 x 2 x 3 = 24. Neeche wala code dono ko verify karta hai.`,
          `Now let us work through an example with prime factorisation. The question is: find the HCF and LCM of 48 and 72. **Step 1:** find the prime factors of both. 48 = 2 x 2 x 2 x 2 x 3 = \`2^4 x 3\`. 72 = 2 x 2 x 2 x 3 x 3 = \`2^3 x 3^2\`. **Step 2:** for the HCF, take the **smaller power** of each common prime: the smaller power of 2 is 2^3, of 3 is 3^1. HCF = 2^3 x 3 = 8 x 3 = 24. **Step 3:** for the LCM, take the **bigger power** of each prime: the bigger power of 2 is 2^4, of 3 is 3^2. LCM = 2^4 x 3^2 = 16 x 9 = 144.

**Check:** HCF x LCM = 24 x 144 = 3,456. And 48 x 72 = 3,456. Both are equal — the calculation is correct. There is also the **division method**: divide both numbers together by their common prime until no common factor is left. Divide 48 and 72 by 2: 24, 36. Again by 2: 12, 18. Again by 2: 6, 9. Then by 3: 2, 3. Now no common factor is left. HCF = 2 x 2 x 2 x 3 = 24. The code below checks both values.`
        ),
        code: {
          title: t(
            `HCF aur LCM: 48 aur 72`,
            `HCF and LCM: 48 and 72`
          ),
          language: 'python',
          code: `# HCF and LCM of 48 and 72
import math
a, b = 48, 72
h = math.gcd(a, b)
l = math.lcm(a, b)
print(f"HCF(48, 72) = {h}")
print(f"LCM(48, 72) = {l}")
print(f"Check: HCF x LCM = {h} x {l} = {h * l}")
print(f"Check: 48 x 72 = {a * b}")
print(f"Prime factors: 48 = 2^4 x 3, 72 = 2^3 x 3^2")
print(f"HCF takes lowest powers: 2^3 x 3 = {h}")
print(f"LCM takes highest powers: 2^4 x 3^2 = {l}")`,
          output: `HCF(48, 72) = 24
LCM(48, 72) = 144
Check: HCF x LCM = 24 x 144 = 3456
Check: 48 x 72 = 3456
Prime factors: 48 = 2^4 x 3, 72 = 2^3 x 3^2
HCF takes lowest powers: 2^3 x 3 = 24
LCM takes highest powers: 2^4 x 3^2 = 144`
        }
      },
      {
        heading: t(
          `4. Common Mistakes: HCF aur LCM ko Ulta Karna, Formula Teen par Lagana, Power Galat Lena`,
          `4. Common Mistakes: Swapping HCF and LCM, Using the Formula for Three Numbers, Picking the Wrong Power`
        ),
        body: t(
          `HCF-LCM mein teen galtiyan sabse zyada hoti hain.

**Galti 1: HCF aur LCM ko ulta karna.** Log 48 aur 72 ka HCF 144 aur LCM 24 likh dete hain. Yaad rakho: HCF chhota hota hai (chhote number se chhota ya barabar), LCM bada hota hai (bade number se bada ya barabar). 24 chhota hai, 144 bada hai — ulta ho hi nahi sakta.

**Galti 2: HCF x LCM wala formula teen numbers par lagana.** Yeh formula sirf do numbers ke liye hai. Teen numbers hon toh pehle do ka HCF/LCM nikaalo, phir teesre ke saath jodo. 6, 8 aur 10 ka LCM seedha formula se nahi nikalta.

**Galti 3: power galat lena.** HCF mein chhoti power, LCM mein badi power. 48 = 2^4 x 3 aur 72 = 2^3 x 3^2 mein HCF ke liye 2^3 lena hai, 2^4 nahi. Ulta kar doge toh HCF 48 aayega, jo 72 ko bhaag hi nahi karta.`,
          `Three mistakes happen most often with HCF and LCM.

**Mistake 1: Swapping HCF and LCM.** People write the HCF of 48 and 72 as 144 and the LCM as 24. Remember: the HCF is small (smaller than or equal to the smaller number), the LCM is big (bigger than or equal to the bigger number). 24 is small, 144 is big — they cannot be swapped.

**Mistake 2: Using the HCF x LCM formula for three numbers.** This formula works only for two numbers. With three numbers, first find the HCF/LCM of two, then combine with the third. The LCM of 6, 8, and 10 cannot be found directly from the formula.

**Mistake 3: Picking the wrong power.** HCF takes the smaller power, LCM takes the bigger power. In 48 = 2^4 x 3 and 72 = 2^3 x 3^2, the HCF needs 2^3, not 2^4. Reverse it and the HCF becomes 48, which does not even divide 72.`
        )
      },
      {
        heading: t(
          `5. Edge Cases: Co-Prime Numbers, Ek Number Doosre ka Multiple, Zero`,
          `5. Edge Cases: Co-Prime Numbers, One Number a Multiple of the Other, Zero`
        ),
        body: t(
          `Edge cases HCF-LCM mein bhi aate hain.

**1. Co-prime numbers.** 8 aur 15 ka koi common factor nahi hai (1 ke alawa). HCF = 1, LCM = 8 x 15 = 120. Co-prime numbers ka HCF hamesha 1 hota hai aur LCM unka guna hota hai.

**2. Ek number doosre ka multiple ho.** 12 aur 36 mein 36, 12 ka multiple hai. HCF = 12 (chhota number), LCM = 36 (bada number). Check karo: HCF x LCM = 12 x 36 = 432 = 12 x 36, sahi hai.

**3. Teen numbers ka LCM.** 6, 8 aur 10 ka LCM: pehle LCM(6, 8) = 24, phir LCM(24, 10) = 120. Toh teenon ghantiyan 120 minute baad ek saath bajengi.

**4. Zero ke saath.** HCF(0, 5) = 5 hota hai aur LCM(0, 5) = 0. Exam mein zero kam aata hai, par pata hona chahiye.`,
          `Edge cases appear in HCF and LCM too.

**1. Co-prime numbers.** 8 and 15 share no common factor (except 1). HCF = 1, LCM = 8 x 15 = 120. For co-prime numbers the HCF is always 1 and the LCM is their product.

**2. One number is a multiple of the other.** In 12 and 36, 36 is a multiple of 12. HCF = 12 (the smaller number), LCM = 36 (the bigger number). Check: HCF x LCM = 12 x 36 = 432 = 12 x 36, correct.

**3. LCM of three numbers.** LCM of 6, 8, and 10: first LCM(6, 8) = 24, then LCM(24, 10) = 120. So all three bells ring together after 120 minutes.

**4. With zero.** HCF(0, 5) = 5 and LCM(0, 5) = 0. Exams rarely ask about zero, but you should know it.`
        )
      },
      {
        heading: t(
          `6. What If: HCF Badlo, LCM Badlo, Word Problem Pehchano`,
          `6. What-If: Changing the HCF, Changing the LCM, Spotting the Word Problem`
        ),
        body: t(
          `Ab hum "what-if" sawaal poochhte hain.

**What if: HCF diya ho, LCM nikaalna ho?** 84 aur 126 ka HCF 42 hai. LCM = (84 x 126) / 42 = 10,584 / 42 = 252. Prime factors se check karo: 84 = 2^2 x 3 x 7, 126 = 2 x 3^2 x 7. HCF = 2 x 3 x 7 = 42, LCM = 2^2 x 3^2 x 7 = 252. Dono tareeke se ek hi jawab.

**What if: ghantiyan 6, 8 aur 10 minute mein bajti hon?** LCM(6, 8) = 24, LCM(24, 10) = 120. Teenon 120 minute, matlab 2 ghante baad ek saath bajengi. Agar subah 9 baje ek saath baji thi, toh phir 11 baje bajegi.

**What if: word problem mein HCF hai ya LCM, kaise pehchanein?** "Sabse bada" ya "bina kaate" sunte hi HCF. "Ek saath kab" ya "kab phir" sunte hi LCM. "Kitne hisso mein baantna hai" — HCF. "Kitne ke baad milega" — LCM. Yeh pehchan hi aadha number hai.`,
          `Now let us ask "what-if" questions.

**What if the HCF is given and the LCM must be found?** The HCF of 84 and 126 is 42. LCM = (84 x 126) / 42 = 10,584 / 42 = 252. Check with prime factors: 84 = 2^2 x 3 x 7, 126 = 2 x 3^2 x 7. HCF = 2 x 3 x 7 = 42, LCM = 2^2 x 3^2 x 7 = 252. Both methods give the same answer.

**What if bells ring every 6, 8, and 10 minutes?** LCM(6, 8) = 24, LCM(24, 10) = 120. All three ring together after 120 minutes, which is 2 hours. If they rang together at 9 in the morning, they will ring together again at 11.

**What if you must spot HCF or LCM in a word problem?** On hearing "biggest" or "without cutting", think HCF. On hearing "when together" or "when again", think LCM. "Into how many parts" — HCF. "After how much will they meet" — LCM. Spotting it right is half the mark.`
        )
      },
      {
        heading: t(
          `7. Summary: HCF aur LCM ka Poora Picture`,
          `7. Summary: The Full Picture of HCF and LCM`
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. **HCF** sabse bada common factor hai — prime factorisation mein common primes ki chhoti power lo. **LCM** sabse chhota common multiple hai — har prime ki badi power lo. Do numbers ke liye \`HCF x LCM = pehla x doosra\` — ek ko jaan kar doosra nikaal lo.

Word problem mein pehchan: "sabse bada, bina kaate" matlab HCF; "ek saath kab, phir kab" matlab LCM. Co-prime numbers ka HCF 1 aur LCM unka guna hota hai. Ek number doosre ka multiple ho toh HCF chhota number aur LCM bada number hota hai.

Aakhiri check: kya HCF dono numbers ko poora bhaag karta hai? Kya LCM dono ka multiple hai? Kya HCF x LCM, dono ke gune ke barabar hai? Agar teeno haan hain, toh jawab sahi hai. Agle article mein hum permutation aur combination dekhenge — wahan factorials ka khel hai, HCF-LCM se bilkul alag.`,
          `Let us tie the whole article together. The **HCF** is the biggest common factor — in prime factorisation, take the smaller power of each common prime. The **LCM** is the smallest common multiple — take the bigger power of each prime. For two numbers, \`HCF x LCM = first x second\` — know one and you can find the other.

Spotting the word problem: "biggest, without cutting" means HCF; "when together, when again" means LCM. For co-prime numbers the HCF is 1 and the LCM is their product. If one number is a multiple of the other, the HCF is the smaller number and the LCM is the bigger number.

One final check: does the HCF divide both numbers exactly? Is the LCM a multiple of both? Does HCF x LCM equal the product of the two? If all three answers are yes, the answer is right. In the next article we will look at permutation and combination — there it is the game of factorials, completely different from HCF and LCM.`
        )
      }
    ],
    diagram: {
      kind: 'tree',
      title: t(
        `48 aur 72 ke Prime Factors: HCF aur LCM ka Ped`,
        `Prime Factors of 48 and 72: The HCF and LCM Tree`
      ),
      caption: t(
        `Common primes ki chhoti power HCF, har prime ki badi power LCM`,
        `Smaller powers of common primes give the HCF, bigger powers of every prime give the LCM`
      ),
      nodes: [
        {
          t: t('48 = 2^4 x 3', '48 = 2^4 x 3'),
          s: t('2 x 2 x 2 x 2 x 3', '2 x 2 x 2 x 2 x 3')
        },
        {
          t: t('72 = 2^3 x 3^2', '72 = 2^3 x 3^2'),
          s: t('2 x 2 x 2 x 3 x 3', '2 x 2 x 2 x 3 x 3')
        },
        {
          t: t('HCF = 2^3 x 3 = 24', 'HCF = 2^3 x 3 = 24'),
          s: t('Common primes ki chhoti power', 'Smaller power of each common prime')
        },
        {
          t: t('LCM = 2^4 x 3^2 = 144', 'LCM = 2^4 x 3^2 = 144'),
          s: t('Har prime ki badi power', 'Bigger power of every prime')
        },
        {
          t: t('Check: 24 x 144 = 48 x 72 = 3,456', 'Check: 24 x 144 = 48 x 72 = 3,456'),
          s: t('HCF x LCM = pehla x doosra', 'HCF x LCM = first x second')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          `HCF aur LCM: 84 aur 126`,
          `HCF and LCM: 84 and 126`
        ),
        language: 'python',
        code: `# HCF and LCM of 84 and 126
import math
a, b = 84, 126
h = math.gcd(a, b)
l = math.lcm(a, b)
print(f"HCF(84, 126) = {h}")
print(f"LCM(84, 126) = {l}")
print(f"Check: {h} x {l} = {h * l}, 84 x 126 = {a * b}")
print(f"Prime factors: 84 = 2^2 x 3 x 7, 126 = 2 x 3^2 x 7")
print(f"HCF = 2 x 3 x 7 = {h}, LCM = 2^2 x 3^2 x 7 = {l}")`,
        output: `HCF(84, 126) = 42
LCM(84, 126) = 252
Check: 42 x 252 = 10584, 84 x 126 = 10584
Prime factors: 84 = 2^2 x 3 x 7, 126 = 2 x 3^2 x 7
HCF = 2 x 3 x 7 = 42, LCM = 2^2 x 3^2 x 7 = 252`
      },
      {
        title: t(
          `Ghantiyan: 6, 8 aur 10 Minute mein Bajti Hain`,
          `Bells: Ringing Every 6, 8, and 10 Minutes`
        ),
        language: 'python',
        code: `# Bells ring every 6, 8 and 10 minutes. When do they ring together?
import math
l = math.lcm(6, 8, 10)
print(f"LCM(6, 8) = {math.lcm(6, 8)}")
print(f"LCM(24, 10) = {l}")
print(f"All three bells ring together after {l} minutes")
print(f"That is {l // 60} hours")`,
        output: `LCM(6, 8) = 24
LCM(24, 10) = 120
All three bells ring together after 120 minutes
That is 2 hours`
      }
    ],
    mcqs: [
      {
        q: t(
          `48 aur 72 ka HCF kitna hai?`,
          `What is the HCF of 48 and 72?`
        ),
        opts: [
          t(`12`, `12`),
          t(`18`, `18`),
          t(`24`, `24`),
          t(`36`, `36`)
        ],
        ans: 2,
        expl: t(
          `Sahi jawab: 48 = 2^4 x 3, 72 = 2^3 x 3^2. HCF = 2^3 x 3 = 24.`,
          `Correct answer: 48 = 2^4 x 3, 72 = 2^3 x 3^2. HCF = 2^3 x 3 = 24.`
        )
      },
      {
        q: t(
          `48 aur 72 ka LCM kitna hai?`,
          `What is the LCM of 48 and 72?`
        ),
        opts: [
          t(`72`, `72`),
          t(`96`, `96`),
          t(`144`, `144`),
          t(`288`, `288`)
        ],
        ans: 2,
        expl: t(
          `Sahi jawab: LCM = 2^4 x 3^2 = 16 x 9 = 144. Check: 24 x 144 = 48 x 72 = 3,456.`,
          `Correct answer: LCM = 2^4 x 3^2 = 16 x 9 = 144. Check: 24 x 144 = 48 x 72 = 3,456.`
        )
      },
      {
        q: t(
          `84 aur 126 ka HCF kitna hai?`,
          `What is the HCF of 84 and 126?`
        ),
        opts: [
          t(`14`, `14`),
          t(`21`, `21`),
          t(`42`, `42`),
          t(`63`, `63`)
        ],
        ans: 2,
        expl: t(
          `Sahi jawab: 84 = 2^2 x 3 x 7, 126 = 2 x 3^2 x 7. HCF = 2 x 3 x 7 = 42.`,
          `Correct answer: 84 = 2^2 x 3 x 7, 126 = 2 x 3^2 x 7. HCF = 2 x 3 x 7 = 42.`
        )
      },
      {
        q: t(
          `Teen ghantiyan har 6, 8 aur 10 minute mein bajti hain. Teenon ek saath kitne minute baad bajengi?`,
          `Three bells ring every 6, 8, and 10 minutes. After how many minutes will all three ring together?`
        ),
        opts: [
          t(`60 minute`, `60 minutes`),
          t(`120 minute`, `120 minutes`),
          t(`240 minute`, `240 minutes`),
          t(`40 minute`, `40 minutes`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: LCM(6, 8, 10) = 120 minute, matlab 2 ghante baad.`,
          `Correct answer: LCM(6, 8, 10) = 120 minutes, which is 2 hours later.`
        )
      },
      {
        q: t(
          `36 aur 60 ka LCM kitna hai?`,
          `What is the LCM of 36 and 60?`
        ),
        opts: [
          t(`120`, `120`),
          t(`180`, `180`),
          t(`360`, `360`),
          t(`60`, `60`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: 36 = 2^2 x 3^2, 60 = 2^2 x 3 x 5. LCM = 2^2 x 3^2 x 5 = 180. Check: HCF 12 hai, 12 x 180 = 36 x 60 = 2,160.`,
          `Correct answer: 36 = 2^2 x 3^2, 60 = 2^2 x 3 x 5. LCM = 2^2 x 3^2 x 5 = 180. Check: HCF is 12, 12 x 180 = 36 x 60 = 2,160.`
        )
      }
    ],
    keyNotes: [
      t(
        `HCF = common primes ki chhoti power; LCM = har prime ki badi power.`,
        `HCF = smaller power of each common prime; LCM = bigger power of every prime.`
      ),
      t(
        `Do numbers ke liye HCF x LCM = pehla x doosra.`,
        `For two numbers, HCF x LCM = first x second.`
      ),
      t(
        `"Sabse bada, bina kaate" matlab HCF; "ek saath kab" matlab LCM.`,
        `"Biggest, without cutting" means HCF; "when together" means LCM.`
      ),
      t(
        `Co-prime numbers ka HCF 1 aur LCM unka guna hota hai.`,
        `For co-prime numbers the HCF is 1 and the LCM is their product.`
      ),
      t(
        `Ek number doosre ka multiple ho toh HCF chhota number aur LCM bada number hota hai.`,
        `If one number is a multiple of the other, the HCF is the smaller number and the LCM is the bigger number.`
      )
    ],
    practice: {
      title: t(
        `Practice: 36 aur 60 ka HCF aur LCM`,
        `Practice: HCF and LCM of 36 and 60`
      ),
      task: t(
        `36 aur 60 ka HCF aur LCM nikaalo aur HCF x LCM wale formula se check karo. Starter code poora runnable hai — isko run karke verify karo ki output expected jaisa aata hai.`,
        `Find the HCF and LCM of 36 and 60 and check with the HCF x LCM formula. The starter code is complete and runnable — run it and verify the output matches the expected output.`
      ),
      language: 'python',
      starter: `# Practice: HCF and LCM of 36 and 60
import math
a, b = 36, 60
h = math.gcd(a, b)
l = math.lcm(a, b)
print(f"HCF(36, 60) = {h}")
print(f"LCM(36, 60) = {l}")
print(f"Check: {h} x {l} = {h * l}, 36 x 60 = {a * b}")`,
      expected: `HCF(36, 60) = 12
LCM(36, 60) = 180
Check: 12 x 180 = 2160, 36 x 60 = 2160`
    },
    readMinutes: 12
  };

const quantPermutation: Article = {
    id: 'quant-permutation',
    subjectId: 'quantitative-aptitude',
    title: t(
      `Permutation aur Combination — nPr, nCr aur Word Problems`,
      `Permutation and Combination — nPr, nCr, and Word Problems`
    ),
    summary: t(
      `Permutation aur combination ko zero se samjho: order matter karta hai ya nahi, nPr aur nCr ke formula, factorial ka use, repeat wale letters, aur committee-handshake wale word problems — sab worked examples ke saath.`,
      `Learn permutation and combination from scratch: whether order matters or not, the nPr and nCr formulas, how factorials work, repeated letters, and committee and handshake word problems — all with worked examples.`
    ),
    sections: [
      {
        heading: t(
          `1. Permutation aur Combination Kya Hain? (Order Matter Karta Hai ya Nahi)`,
          `1. What Are Permutation and Combination? (Does Order Matter?)`
        ),
        body: t(
          `Dono ka sawaal ek hi hai: "kitne tareeke hain?" Farak sirf itna hai ki **order matter karta hai ya nahi**. **Permutation** mein order matter karta hai — arrange karna hai, line mein khada karna hai, pehla-dusra-teesra chunna hai. **Combination** mein order matter nahi karta — sirf chunna hai, kaun pehle aaya isse koi farak nahi padta.

Example: 5 kitaabon mein se 3 kitaabein shelf par sajani hain — kaunsi pehle, kaunsi beech mein, kaunsi aakhir mein, yeh matter karta hai. Yeh permutation hai: 5P3 = 5 x 4 x 3 = 60 tareeke. Wahi 5 kitaabon mein se koi 3 kitaabein bag mein daalni hain — order se koi farak nahi padta. Yeh combination hai: 5C3 = 10 tareeke. Ek hi 5 aur 3, par jawab 60 aur 10 — kyunki permutation mein order ke 3! = 6 tareeke extra gin liye jaate hain.

Formula yaad rakho: \`nPr = n! / (n - r)!\` aur \`nCr = n! / (r! x (n - r)!)\`. Dono ka rishta hai: **nPr = nCr x r!**. Factorial ka matlab hai \`n! = n x (n-1) x ... x 2 x 1\`, aur \`0! = 1\` hota hai.`,
          `Both answer the same question: "in how many ways?" The only difference is whether **order matters or not**. In a **permutation**, order matters — arranging things, standing people in a line, picking a first, second, and third. In a **combination**, order does not matter — only the selection matters, not who came first.

Example: from 5 books, 3 must be arranged on a shelf — which one is first, which is in the middle, and which is last matters. This is a permutation: 5P3 = 5 x 4 x 3 = 60 ways. The same 5 books, but any 3 must go into a bag — the order makes no difference. This is a combination: 5C3 = 10 ways. Same 5 and 3, but the answers are 60 and 10 — because a permutation also counts the 3! = 6 orders.

Remember the formulas: \`nPr = n! / (n - r)!\` and \`nCr = n! / (r! x (n - r)!)\`. They are related: **nPr = nCr x r!**. A factorial means \`n! = n x (n-1) x ... x 2 x 1\`, and \`0! = 1\`.`
        )
      },
      {
        heading: t(
          `2. Real-Life Examples: Team Chunna, Line mein Khada Hona, Password`,
          `2. Real-Life Examples: Picking a Team, Standing in a Line, Passwords`
        ),
        body: t(
          `Permutation aur combination roz ki zindagi mein hain. Sabse seedha example hai **team chunna**. 7 khiladiyon mein se 2 captain chunne hain — kaun pehle chuna gaya, isse koi farak nahi padta. Yeh combination hai: 7C2 = 21 tareeke. Wahi 7 mein se pehla aur doosra captain chunna ho (pehla captain, doosra vice-captain) — toh order matter karega, permutation hoga: 7P2 = 42 tareeke.

Doosra example hai **line mein khada hona**. 4 log ek line mein kitne tareeke se khade ho sakte hain? 4! = 24 tareeke. Photo khinchwani ho toh har arrangement alag photo hai — order matter karta hai.

Teesra example hai **handshake**. 7 log ek kamre mein hain, har do log ek baar haath milate hain. Kul handshake = 7C2 = 21. Har handshake mein 2 log hote hain aur order nahi hota — A ne B se milaya ya B ne A se, ek hi handshake hai. Exam mein handshake, committee aur team wale sawaal combination se hi aate hain.`,
          `Permutation and combination are part of daily life. The simplest example is **picking a team**. From 7 players, 2 captains must be picked — who was picked first makes no difference. This is a combination: 7C2 = 21 ways. But if from the same 7 you must pick a first and a second captain (first captain, second vice-captain) — then order matters, it is a permutation: 7P2 = 42 ways.

A second example is **standing in a line**. In how many ways can 4 people stand in a line? 4! = 24 ways. For a photo, every arrangement is a different photo — order matters.

A third example is a **handshake**. 7 people are in a room, and every pair shakes hands once. Total handshakes = 7C2 = 21. Every handshake has 2 people and no order — whether A shook B's hand or B shook A's, it is one handshake. In exams, handshake, committee, and team questions always come from combination.`
        )
      },
      {
        heading: t(
          `3. Step-by-Step: 5 Kitaabon mein se 3 — Arrange (60) vs Choose (10) (Dry Run)`,
          `3. Step-by-Step: 3 of 5 Books — Arrange (60) vs Choose (10) (Dry Run)`
        ),
        body: t(
          `Ab hum worked example ko step-by-step karte hain. Question hai: 5 alag kitaabon mein se 3 ko shelf par sajana hai, aur 3 ko bag mein daalna hai. Dono ke tareeke nikaalo. **Arrange karna (permutation):** pehli jagah ke liye 5 choice, doosri jagah ke liye bachi 4, teesri ke liye bachi 3. Kul = 5 x 4 x 3 = 60 tareeke. Formula se: 5P3 = 5! / (5-3)! = 120 / 2 = 60.

**Choose karna (combination):** sirf kaunsi 3 kitaabein, order nahi. Formula: 5C3 = 5! / (3! x 2!) = 120 / (6 x 2) = 120 / 12 = 10 tareeke. **Check:** 5P3 = 5C3 x 3! = 10 x 6 = 60. Sahi hai.

Farak samjho: 10 groups hain, aur har group ko 6 tareeke se arrange kar sakte ho (3! = 6). 10 x 6 = 60. Isi liye permutation hamesha combination se bada hota hai — jab tak r = 0 ya 1 na ho. Neeche wala code dono hisaab print karta hai.`,
          `Now let us work through an example step by step. The question is: from 5 different books, 3 must be arranged on a shelf, and 3 must go into a bag. Find the number of ways for both. **Arranging (permutation):** 5 choices for the first place, 4 remaining for the second, 3 remaining for the third. Total = 5 x 4 x 3 = 60 ways. By formula: 5P3 = 5! / (5-3)! = 120 / 2 = 60.

**Choosing (combination):** only which 3 books, no order. By formula: 5C3 = 5! / (3! x 2!) = 120 / (6 x 2) = 120 / 12 = 10 ways. **Check:** 5P3 = 5C3 x 3! = 10 x 6 = 60. Correct.

Understand the difference: there are 10 groups, and each group can be arranged in 6 ways (3! = 6). 10 x 6 = 60. That is why a permutation is always bigger than a combination — unless r = 0 or 1. The code below prints both calculations.`
        ),
        code: {
          title: t(
            `Permutation vs Combination: 5 mein se 3`,
            `Permutation vs Combination: 3 of 5`
          ),
          language: 'python',
          code: `# Permutation (order matters) vs Combination (order does not)
import math
n, r = 5, 3
npr = math.factorial(n) // math.factorial(n - r)
ncr = math.factorial(n) // (math.factorial(r) * math.factorial(n - r))
print(f"5P3 = 5 x 4 x 3 = {npr}  (arrange 3 of 5 books in a row)")
print(f"5C3 = 5! / (3! x 2!) = {ncr}  (choose any 3 of 5 books)")
print(f"Check: 5P3 = 5C3 x 3! = {ncr} x 6 = {ncr * 6}")`,
          output: `5P3 = 5 x 4 x 3 = 60  (arrange 3 of 5 books in a row)
5C3 = 5! / (3! x 2!) = 10  (choose any 3 of 5 books)
Check: 5P3 = 5C3 x 3! = 10 x 6 = 60`
        }
      },
      {
        heading: t(
          `4. Common Mistakes: Order ko Ignore Karna, nCr mein r! Bhoolna, Repeat ko Count Karna`,
          `4. Common Mistakes: Ignoring Order, Forgetting r! in nCr, Counting Repeats`
        ),
        body: t(
          `Permutation-combination mein teen galtiyan sabse zyada hoti hain.

**Galti 1: order ko ignore karna ya ulta samajhna.** "Arrange" ya "line mein" sunte hi permutation lagao, "choose" ya "select" ya "committee" sunte hi combination. Jo log team chunne mein permutation laga dete hain, unka jawab 6 guna zyada aata hai (3! = 6).

**Galti 2: nCr mein r! se bhaag bhoolna.** 5C3 = 5! / 3! likhna galat hai — poora formula hai 5! / (3! x 2!). (n - r)! bhool gaye toh jawab 10 ki jagah 20 aayega. Dono factorial se bhaag karo.

**Galti 3: repeat wale letters ko alag samajhna.** APPLE mein P do baar hai. 5! = 120 likhna galat hai — do P ek jaise hain, isliye 5! / 2! = 60. Repeat wale har letter ke liye uske factorial se bhaag karo.`,
          `Three mistakes happen most often with permutation and combination.

**Mistake 1: Ignoring order or getting it backwards.** On hearing "arrange" or "in a line", use permutation; on hearing "choose", "select", or "committee", use combination. People who use permutation for picking a team get an answer 6 times too big (3! = 6).

**Mistake 2: Forgetting to divide by r! in nCr.** Writing 5C3 = 5! / 3! is wrong — the full formula is 5! / (3! x 2!). Forget the (n - r)! and the answer becomes 20 instead of 10. Divide by both factorials.

**Mistake 3: Treating repeated letters as different.** In APPLE, P appears twice. Writing 5! = 120 is wrong — the two Ps are identical, so it is 5! / 2! = 60. Divide by the factorial of every repeated letter.`
        )
      },
      {
        heading: t(
          `5. Edge Cases: r = 0, r = n, Repeat Letters, nCr = nC(n-r)`,
          `5. Edge Cases: r = 0, r = n, Repeated Letters, nCr = nC(n-r)`
        ),
        body: t(
          `Edge cases permutation-combination mein bahut kaam aate hain.

**1. r = 0 ho.** Kuch bhi na chunna — sirf 1 tareeka: nC0 = 1. Aur nP0 = 1 bhi hota hai. 0! = 1 isliye hota hai taaki yeh formula chale.

**2. r = n ho.** Saare chun lo: nCn = 1 tareeka — sirf ek hi group banta hai. Aur nPn = n! — saare ko arrange karne ke n! tareeke.

**3. Repeat wale letters.** APPLE: 5 letters, P 2 baar. Arrangements = 5! / 2! = 60. Bina repeat ke 120 hote. MISSISSIPPI jaise word mein I 4 baar, S 4 baar, P 2 baar — 11! / (4! x 4! x 2!) tareeke hote hain.

**4. nCr = nC(n-r).** 5C3 = 5C2 = 10. 3 chunna aur 2 chhodna ek hi baat hai. Exam mein bade r ko chhota karke hisaab aasan kar lo: 10C8 = 10C2 = 45.`,
          `Edge cases are very useful in permutation and combination.

**1. r = 0.** Choosing nothing — only 1 way: nC0 = 1. And nP0 = 1 as well. 0! = 1 exists so that this formula works.

**2. r = n.** Choose all of them: nCn = 1 way — only one group is possible. And nPn = n! — there are n! ways to arrange all of them.

**3. Repeated letters.** APPLE: 5 letters, P twice. Arrangements = 5! / 2! = 60. Without the repeat it would be 120. In a word like MISSISSIPPI, I appears 4 times, S 4 times, P 2 times — the arrangements are 11! / (4! x 4! x 2!).

**4. nCr = nC(n-r).** 5C3 = 5C2 = 10. Choosing 3 and leaving 2 is the same thing. In exams, turn a big r into a small one to make the calculation easy: 10C8 = 10C2 = 45.`
        )
      },
      {
        heading: t(
          `6. What If: APPLE, Committee, 4 Log Line mein`,
          `6. What-If: APPLE, Committee, 4 People in a Line`
        ),
        body: t(
          `Ab hum "what-if" sawaal poochhte hain.

**What if: APPLE ke arrangements nikaalne hon?** 5 letters, P 2 baar repeat. Arrangements = 5! / 2! = 120 / 2 = 60. Bina repeat ke 120 hote — repeat ne aadha kar diya. Har repeat wala letter arrangements ko uske factorial se bhaag kar deta hai.

**What if: 6 logon mein se 2 ki committee banani ho?** Order nahi hai, combination: 6C2 = 6! / (2! x 4!) = 15 tareeke. Check karo: 6 x 5 / 2 = 15. Shortcut: nC2 = n(n-1)/2 hamesha hota hai.

**What if: 4 log line mein khade hon?** Order hai, permutation: 4P4 = 4! = 24 tareeke. Pehli jagah 4 choice, doosri 3, teesri 2, aakhiri 1 — 4 x 3 x 2 x 1 = 24.`,
          `Now let us ask "what-if" questions.

**What if the arrangements of APPLE must be found?** 5 letters, P repeated twice. Arrangements = 5! / 2! = 120 / 2 = 60. Without the repeat it would be 120 — the repeat halved it. Every repeated letter divides the arrangements by its factorial.

**What if a committee of 2 must be formed from 6 people?** No order, so combination: 6C2 = 6! / (2! x 4!) = 15 ways. Check it: 6 x 5 / 2 = 15. Shortcut: nC2 = n(n-1)/2 always.

**What if 4 people stand in a line?** Order matters, so permutation: 4P4 = 4! = 24 ways. 4 choices for the first place, 3 for the second, 2 for the third, 1 for the last — 4 x 3 x 2 x 1 = 24.`
        )
      },
      {
        heading: t(
          `7. Summary: Permutation aur Combination ka Poora Picture`,
          `7. Summary: The Full Picture of Permutation and Combination`
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. Pehle yeh decide karo: **order matter karta hai ya nahi?** Arrange karna, line mein khada karna, pehla-dusra chunna — permutation: \`nPr = n! / (n - r)!\`. Sirf chunna, committee banana, team banana — combination: \`nCr = n! / (r! x (n - r)!)\`. Dono ka rishta hai: **nPr = nCr x r!**.

Repeat wale letters hon toh unke factorial se bhaag karo: APPLE mein 5! / 2! = 60. Shortcut yaad rakho: nCr = nC(n-r), aur nC2 = n(n-1)/2. 0! = 1 hota hai, isliye nC0 = 1 aur nCn = 1.

Aakhiri check: kya aapka permutation, combination se bada hai? (r 2 ya zyada ho toh hamesha bada hona chahiye.) Kya repeat wale case mein arrangements bina repeat se kam hain? Agar dono haan hain, toh jawab sahi hai. Yeh batch ka aakhiri article tha — ab aapke paas interest, discount, ratio, mixture, ages, HCF-LCM aur counting, saath mein 8 topics ka poora set hai.`,
          `Let us tie the whole article together. First decide: **does order matter or not?** Arranging, standing in a line, picking a first and second — permutation: \`nPr = n! / (n - r)!\`. Only choosing, forming a committee, making a team — combination: \`nCr = n! / (r! x (n - r)!)\`. They are related: **nPr = nCr x r!**.

If letters repeat, divide by their factorial: in APPLE, 5! / 2! = 60. Remember the shortcuts: nCr = nC(n-r), and nC2 = n(n-1)/2. 0! = 1, so nC0 = 1 and nCn = 1.

One final check: is your permutation bigger than your combination? (With r 2 or more, it must always be bigger.) In a repeat case, are the arrangements fewer than without the repeat? If both answers are yes, the answer is right. This was the last article of the batch — you now have a full set of 8 topics: interest, discount, ratio, mixture, ages, HCF-LCM, and counting.`
        )
      }
    ],
    diagram: {
      kind: 'layers',
      title: t(
        `Pehle Decide Karo: Order Matter Karta Hai?`,
        `Decide First: Does Order Matter?`
      ),
      caption: t(
        `Ek hi sawaal, do raaste — order dekh kar formula chuno`,
        `One question, two paths — look at the order, then pick the formula`
      ),
      nodes: [
        {
          t: t('Sawaal: 5 mein se 3 — kitne tareeke?', 'Question: 3 of 5 — how many ways?'),
          s: t('Pehle poochho: order matter karta hai?', 'First ask: does order matter?')
        },
        {
          t: t('Haan: Permutation — 5P3 = 5 x 4 x 3 = 60', 'Yes: Permutation — 5P3 = 5 x 4 x 3 = 60'),
          s: t('Arrange karna, line mein khada karna', 'Arranging, standing in a line')
        },
        {
          t: t('Nahi: Combination — 5C3 = 10', 'No: Combination — 5C3 = 10'),
          s: t('Sirf chunna, committee, team', 'Only choosing, committee, team')
        },
        {
          t: t('Rishta: 5P3 = 5C3 x 3! = 10 x 6 = 60', 'Relation: 5P3 = 5C3 x 3! = 10 x 6 = 60'),
          s: t('Har group ke 6 arrangements hote hain', 'Each group has 6 arrangements')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          `Repeat Letters: APPLE ke Arrangements`,
          `Repeated Letters: Arrangements of APPLE`
        ),
        language: 'python',
        code: `# Arrangements of APPLE: 5 letters, P repeats twice
import math
total = math.factorial(5) // math.factorial(2)
print(f"5 letters, P repeated 2 times")
print(f"Arrangements = 5! / 2! = 120 / 2 = {total}")
print(f"Without repeat it would be 5! = {math.factorial(5)}")`,
        output: `5 letters, P repeated 2 times
Arrangements = 5! / 2! = 120 / 2 = 60
Without repeat it would be 5! = 120`
      },
      {
        title: t(
          `Committee aur Line: 6C2 aur 4P4`,
          `Committee and Line: 6C2 and 4P4`
        ),
        language: 'python',
        code: `# Committee of 2 from 6 people (order does not matter)
import math
ncr = math.factorial(6) // (math.factorial(2) * math.factorial(4))
print(f"6C2 = 6! / (2! x 4!) = {ncr}")
print()
# Arrange 4 people in a row (order matters)
npr = math.factorial(4)
print(f"4P4 = 4! = {npr}")`,
        output: `6C2 = 6! / (2! x 4!) = 15

4P4 = 4! = 24`
      }
    ],
    mcqs: [
      {
        q: t(
          `5P3 kitna hota hai?`,
          `What is 5P3?`
        ),
        opts: [
          t(`10`, `10`),
          t(`20`, `20`),
          t(`60`, `60`),
          t(`120`, `120`)
        ],
        ans: 2,
        expl: t(
          `Sahi jawab: 5P3 = 5 x 4 x 3 = 60.`,
          `Correct answer: 5P3 = 5 x 4 x 3 = 60.`
        )
      },
      {
        q: t(
          `5C3 kitna hota hai?`,
          `What is 5C3?`
        ),
        opts: [
          t(`10`, `10`),
          t(`20`, `20`),
          t(`60`, `60`),
          t(`120`, `120`)
        ],
        ans: 0,
        expl: t(
          `Sahi jawab: 5C3 = 5! / (3! x 2!) = 120 / 12 = 10.`,
          `Correct answer: 5C3 = 5! / (3! x 2!) = 120 / 12 = 10.`
        )
      },
      {
        q: t(
          `APPLE word ke letters ko kitne tareeke se arrange kar sakte hain? (P do baar hai)`,
          `In how many ways can the letters of APPLE be arranged? (P appears twice)`
        ),
        opts: [
          t(`30`, `30`),
          t(`60`, `60`),
          t(`120`, `120`),
          t(`20`, `20`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: 5! / 2! = 120 / 2 = 60. P do baar repeat hota hai, isliye 2! se bhaag karo.`,
          `Correct answer: 5! / 2! = 120 / 2 = 60. P repeats twice, so divide by 2!.`
        )
      },
      {
        q: t(
          `6 logon mein se 2 ki committee kitne tareeke se ban sakti hai?`,
          `In how many ways can a committee of 2 be formed from 6 people?`
        ),
        opts: [
          t(`12`, `12`),
          t(`15`, `15`),
          t(`30`, `30`),
          t(`36`, `36`)
        ],
        ans: 1,
        expl: t(
          `Sahi jawab: 6C2 = 6! / (2! x 4!) = 15. Committee mein order nahi hota.`,
          `Correct answer: 6C2 = 6! / (2! x 4!) = 15. Order does not matter in a committee.`
        )
      },
      {
        q: t(
          `4 log ek line mein kitne tareeke se khade ho sakte hain?`,
          `In how many ways can 4 people stand in a line?`
        ),
        opts: [
          t(`12`, `12`),
          t(`16`, `16`),
          t(`24`, `24`),
          t(`20`, `20`)
        ],
        ans: 2,
        expl: t(
          `Sahi jawab: 4P4 = 4! = 4 x 3 x 2 x 1 = 24. Line mein order matter karta hai.`,
          `Correct answer: 4P4 = 4! = 4 x 3 x 2 x 1 = 24. Order matters in a line.`
        )
      }
    ],
    keyNotes: [
      t(
        `Order matter kare toh permutation (nPr), na kare toh combination (nCr).`,
        `If order matters, use permutation (nPr); if not, use combination (nCr).`
      ),
      t(
        `nPr = n! / (n - r)!; nCr = n! / (r! x (n - r)!); nPr = nCr x r!.`,
        `nPr = n! / (n - r)!; nCr = n! / (r! x (n - r)!); nPr = nCr x r!.`
      ),
      t(
        `Repeat wale letters hon toh unke factorial se bhaag karo.`,
        `If letters repeat, divide by their factorial.`
      ),
      t(
        `nCr = nC(n-r); nC2 = n(n-1)/2; 0! = 1.`,
        `nCr = nC(n-r); nC2 = n(n-1)/2; 0! = 1.`
      ),
      t(
        `Committee, team aur handshake combination hain; line aur arrangement permutation hain.`,
        `Committee, team, and handshake are combinations; lines and arrangements are permutations.`
      )
    ],
    practice: {
      title: t(
        `Practice: 7 Logon mein Handshake Kitne?`,
        `Practice: How Many Handshakes Among 7 People?`
      ),
      task: t(
        `7 log ek kamre mein hain aur har do log ek baar haath milate hain. Kul kitne handshake honge? Starter code poora runnable hai — isko run karke verify karo ki output expected jaisa aata hai.`,
        `7 people are in a room and every pair shakes hands once. How many handshakes are there in total? The starter code is complete and runnable — run it and verify the output matches the expected output.`
      ),
      language: 'python',
      starter: `# Practice: handshakes among 7 people (each pair shakes once)
import math
n = 7
handshakes = math.factorial(n) // (math.factorial(2) * math.factorial(n - 2))
print(f"7C2 = 7! / (2! x 5!) = {handshakes}")
print(f"So {handshakes} handshakes in total")`,
      expected: `7C2 = 7! / (2! x 5!) = 21
So 21 handshakes in total`
    },
    readMinutes: 12
  };

const quantProbability: Article = {
    id: 'quant-probability',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Probability — Coins, Dice, Cards aur Balls',
      'Probability — Coins, Dice, Cards, and Balls'
    ),
    summary: t(
      'Probability ka matlab, favourable outcomes ko total outcomes se divide karna, coin toss, dice, cards aur balls wale sawaal, aur woh "at least one" wala complement trick jisse exam mein time bachta hai.',
      'What probability means, dividing favourable outcomes by total outcomes, coin toss, dice, cards and balls problems, and the "at least one" complement trick that saves time in exams.'
    ),
    sections: [
      {
        heading: t(
          '1. Probability Kya Hai? (Favourable / Total)',
          '1. What Is Probability? (Favourable / Total)'
        ),
        body: t(
          `Probability ka matlab hai kisi event ke hone ki sambhavna — kitni chance hai ki woh event hoga. Formula bahut simple hai: **P(event) = favourable outcomes / total outcomes**. Favourable outcomes matlab woh results jo humein chahiye, aur total outcomes matlab kul possible results. Agar aap ek sikka uchhalte ho, toh total outcomes 2 hain (head ya tail), aur head aane ke favourable outcomes 1 hai, isliye P(head) = 1/2.

Probability hamesha **0 aur 1 ke beech** mein rehti hai. P = 0 ka matlab hai event kabhi nahi hoga (impossible event), aur P = 1 ka matlab hai event pakka hoga (certain event). Agar P = 0.5 hai, toh event ke hone aur na hone ke chances barabar hain. Probability ko fraction, decimal ya percent — teeno mein likha ja sakta hai. 1/2, 0.5 aur 50% — teeno ka matlab ek hi hai.

Ek zaroori baat: yeh formula tabhi kaam karta hai jab **saare outcomes equally likely** hon. Ek fair coin mein head aur tail dono ke chances barabar hain, isliye P(head) = 1/2. Par agar sikka tedha ho (biased), toh yeh formula seedha nahi lagta. Exam mein jab tak kuch aur na likha ho, coin, dice aur cards ko fair hi maana jaata hai.`,
          `Probability means the chance that an event will happen — how likely it is. The formula is very simple: **P(event) = favourable outcomes / total outcomes**. Favourable outcomes are the results we want, and total outcomes are all the possible results. If you toss a coin, there are 2 total outcomes (head or tail), and 1 favourable outcome for getting a head, so P(head) = 1/2.

Probability always stays **between 0 and 1**. P = 0 means the event can never happen (an impossible event), and P = 1 means the event will certainly happen (a certain event). If P = 0.5, the event is equally likely to happen or not happen. Probability can be written as a fraction, a decimal, or a percent. 1/2, 0.5, and 50% all mean the same thing.

One important point: this formula works only when **all outcomes are equally likely**. In a fair coin, head and tail have equal chances, so P(head) = 1/2. But if the coin is biased, this formula does not apply directly. In exams, unless something else is stated, coins, dice, and cards are taken to be fair.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Coin Toss, Weather Forecast aur Lottery',
          '2. Real-Life Examples: Coin Toss, Weather Forecast, and Lottery'
        ),
        body: t(
          `Probability roz ki zindagi mein har jagah hai. Cricket match shuru hone se pehle **toss** hota hai — captain coin uchhalta hai aur head ya tail mein se ek choose karta hai. Dono ke chances barabar hain, isliye P(head) = 1/2. Koi bhi captain toss ko skill se nahi jeet sakta, sirf luck se. Yahi probability hai.

**Weather forecast** mein bhi probability hi hoti hai. Jab news mein kehte hain "kal baarish ki 70% sambhavna hai", toh iska matlab hai P(rain) = 0.7. Iska matlab yeh nahi hai ki 70% din baarish hogi — iska matlab hai ki aise hi 100 dinon mein se lagbhag 70 din baarish hoti hai. Agar P(rain) = 0.7 hai, toh P(no rain) = 1 − 0.7 = 0.3. Yeh **complement rule** hai: P(not A) = 1 − P(A).

**Lottery aur dice games** mein bhi probability chalti hai. Ludo mein 6 aane par hi goti bahar aati hai, aur ek dice par P(6) = 1/6. Iska matlab hai ki ausat mein har 6 baari mein ek baar 6 aayega — par koi guarantee nahi hai, kabhi 10 baari mein bhi 6 nahi aata. Probability long run ka average batati hai, ek-ek baari ka result nahi.`,
          `Probability is everywhere in daily life. Before a cricket match starts, there is a **toss** — the captain tosses a coin and picks head or tail. Both have equal chances, so P(head) = 1/2. No captain can win a toss by skill, only by luck. That is probability.

A **weather forecast** is also probability. When the news says "there is a 70% chance of rain tomorrow", it means P(rain) = 0.7. It does not mean it will rain for 70% of the day — it means that on about 70 out of 100 such days, it rains. If P(rain) = 0.7, then P(no rain) = 1 − 0.7 = 0.3. This is the **complement rule**: P(not A) = 1 − P(A).

**Lottery and dice games** also run on probability. In Ludo, a token comes out only when you roll a 6, and on one die P(6) = 1/6. That means on average you get a 6 once in every 6 rolls — but there is no guarantee; sometimes you do not get a 6 even in 10 rolls. Probability tells you the long-run average, not the result of a single roll.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: Bag, Do Dice aur 3 Coins ka Dry Run',
          '3. Step-by-Step: A Bag, Two Dice, and 3 Coins — Worked Example with Dry Run'
        ),
        body: t(
          `Ab hum teen worked examples ko step by step karte hain. **Example 1: Bag mein 5 red aur 4 blue balls hain. Ek ball nikaali jaaye toh P(red) kya hai?** Step 1: total outcomes gino — 5 + 4 = 9 balls. Step 2: favourable outcomes gino — red balls 5 hain. Step 3: divide karo — P(red) = 5/9 = 0.5555... Matlab lagbhag 56% chance hai ki red ball niklegi.

**Example 2: Do dice ek saath phenke jaayein toh sum 7 aane ki probability kya hai?** Step 1: total outcomes gino — pehla dice 6 tareeke se, doosra dice 6 tareeke se, kul 6 × 6 = 36 outcomes. Step 2: favourable outcomes gino — sum 7 tab aata hai jab pairs (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) hon — kul 6 pairs. Step 3: P(sum 7) = 6/36 = 1/6. Dhyaan do: sum 7 sabse zyada likely sum hai kyunki uske sabse zyada pairs hain; sum 2 ya sum 12 ke sirf 1-1 pair hain, isliye unki probability sirf 1/36 hai.

**Example 3: 3 coins ek saath uchhale jaayein toh teeno par head aane ki probability kya hai?** Step 1: total outcomes — har coin ke 2 results, kul 2 × 2 × 2 = 8 outcomes (HHH, HHT, HTH, THH, HTT, THT, TTH, TTT). Step 2: favourable — sirf HHH, matlab 1 outcome. Step 3: P(all heads) = 1/8 = 0.125. Neeche wala code teeno examples ko compute karke print karta hai.`,
          `Now let us work through three examples step by step. **Example 1: A bag has 5 red and 4 blue balls. If one ball is drawn, what is P(red)?** Step 1: count the total outcomes — 5 + 4 = 9 balls. Step 2: count the favourable outcomes — there are 5 red balls. Step 3: divide — P(red) = 5/9 = 0.5555... That means there is about a 56% chance of drawing a red ball.

**Example 2: Two dice are thrown together. What is the probability that the sum is 7?** Step 1: count the total outcomes — the first die has 6 ways and the second die has 6 ways, so there are 6 × 6 = 36 outcomes in total. Step 2: count the favourable outcomes — a sum of 7 comes from the pairs (1,6), (2,5), (3,4), (4,3), (5,2), and (6,1) — 6 pairs in total. Step 3: P(sum 7) = 6/36 = 1/6. Notice that a sum of 7 is the most likely sum because it has the most pairs; sums of 2 or 12 have only 1 pair each, so their probability is only 1/36.

**Example 3: 3 coins are tossed together. What is the probability of getting heads on all three?** Step 1: total outcomes — each coin has 2 results, so there are 2 × 2 × 2 = 8 outcomes in total (HHH, HHT, HTH, THH, HTT, THT, TTH, TTT). Step 2: favourable outcomes — only HHH, which is 1 outcome. Step 3: P(all heads) = 1/8 = 0.125. The code below computes and prints all three examples.`
        ),
        code: {
          title: t(
            'Bag, Do Dice aur 3 Coins: Probability Compute Karna',
            'Bag, Two Dice, and 3 Coins: Computing Probability'
          ),
          language: 'python',
          code: `# Bag: 5 red balls, 4 blue balls
red, blue = 5, 4
total = red + blue
print("P(red) =", red, "/", total, "=", red / total)
# Two dice: kitne tareeke se sum 7 aata hai?
ways = 0
for d1 in range(1, 7):
    for d2 in range(1, 7):
        if d1 + d2 == 7:
            ways += 1
print("Two dice sum 7:", ways, "/ 36 =", ways / 36)
# 3 coins: all heads
print("P(all heads, 3 coins) = 1 / 8 =", 1 / 8)`,
          output: `P(red) = 5 / 9 = 0.5555555555555556
Two dice sum 7: 6 / 36 = 0.16666666666666666
P(all heads, 3 coins) = 1 / 8 = 0.125`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Probability 1 se Zyada, "And" vs "Or" aur Galat Total',
          '4. Common Mistakes: Probability Above 1, "And" vs "Or", and a Wrong Total'
        ),
        body: t(
          `Probability mein sabse zyada galtiyan chaar cheezon par hoti hain. **Galti 1: Probability ko 1 se zyada likh dena.** Agar aapka jawab 5/4 ya 1.5 aa raha hai, toh hisaab galat hai — probability kabhi 1 se zyada nahi hoti. Favourable outcomes hamesha total outcomes se kam ya barabar hote hain, isliye fraction kabhi 1 se bada nahi ho sakta. Jawab milte hi check karo: kya yeh 0 aur 1 ke beech hai?

**Galti 2: "And" aur "Or" ko milana.** "And" ka matlab hai dono events ek saath hon (multiply karo, jab events independent hon), aur "Or" ka matlab hai koi ek event ho (add karo, jab events mutually exclusive hon). "Coin par head AND dice par 6" ki probability 1/2 × 1/6 = 1/12 hai, jabki "dice par 1 OR 6" ki probability 1/6 + 1/6 = 1/3 hai. Exam mein pehle dekho sawaal mein "and" hai ya "or", phir multiply ya add karo.

**Galti 3: Total outcomes galat ginna.** Do dice ke total outcomes 12 nahi, 36 hote hain — kyunki har dice ke 6 results hain aur dono independent hain, isliye 6 × 6 = 36. Beginners aksar 6 + 6 = 12 likh dete hain. Yaad rakho: jab do independent cheezein ek saath hon, toh outcomes **multiply** hote hain, add nahi.

**Galti 4: "At least one" ko seedha ginna.** "Kam se kam ek head" ke liye saare cases (ek head, do head, teen head) ginna lamba kaam hai. Aasan tareeka hai complement: P(at least one head) = 1 − P(no head) = 1 − 1/8 = 7/8.`,
          `The most common probability mistakes come from four things. **Mistake 1: Writing a probability greater than 1.** If your answer is 5/4 or 1.5, the calculation is wrong — probability is never greater than 1. Favourable outcomes are always less than or equal to total outcomes, so the fraction can never be bigger than 1. As soon as you get an answer, check: is it between 0 and 1?

**Mistake 2: Mixing up "and" and "or".** "And" means both events happen together (multiply, when the events are independent), and "or" means any one event happens (add, when the events are mutually exclusive). The probability of "head on the coin AND 6 on the die" is 1/2 × 1/6 = 1/12, while the probability of "1 OR 6 on the die" is 1/6 + 1/6 = 1/3. In an exam, first check whether the question says "and" or "or", then multiply or add.

**Mistake 3: Counting the total outcomes wrong.** The total outcomes for two dice are not 12 but 36 — because each die has 6 results and the two are independent, so 6 × 6 = 36. Beginners often write 6 + 6 = 12. Remember: when two independent things happen together, the outcomes **multiply**, they do not add.

**Mistake 4: Counting "at least one" directly.** For "at least one head", counting all the cases (one head, two heads, three heads) is long work. The easy way is the complement: P(at least one head) = 1 − P(no head) = 1 − 1/8 = 7/8.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: P = 0, P = 1, Complement aur Mutually Exclusive',
          '5. Edge Cases: P = 0, P = 1, Complement, and Mutually Exclusive'
        ),
        body: t(
          `Edge cases woh situations hain jo normal sawaalon mein nahi aati, par exam mein yahi trap ban jaati hain. **1. Impossible event (P = 0).** Ek dice par 7 aane ki probability 0 hai, kyunki dice par 1 se 6 tak hi numbers hote hain. Favourable outcomes 0 hain, isliye P = 0/6 = 0.

**2. Certain event (P = 1).** Ek dice par 1 se 6 ke beech koi number aane ki probability 1 hai, kyunki saare 6 outcomes favourable hain: P = 6/6 = 1. Aise sawaal mein log aksar confuse hote hain, par jawab seedha 1 hota hai.

**3. Complement hamesha kaam aata hai.** P(event) + P(not event) = 1 hamesha hota hai. Agar P(rain) = 0.7 hai, toh P(no rain) = 0.3. "At least one" wale sawaalon mein complement sabse tez tareeka hai, kyunki "koi bhi nahi" ka sirf ek hi case hota hai.

**4. Mutually exclusive events.** Do events mutually exclusive hote hain jab dono ek saath kabhi nahi ho sakte — jaise ek dice par 1 aur 6 ek saath nahi aa sakte. Aise events ke liye P(A or B) = P(A) + P(B). Par dhyaan do: yeh add tabhi kar sakte ho jab events mutually exclusive hon; agar overlap ho (jaise cards mein "red OR king" — red kings dono mein aate hain), toh overlap ko ek baar subtract karna padta hai.`,
          `Edge cases are the situations that do not appear in normal questions but become traps in exams. **1. Impossible event (P = 0).** The probability of getting a 7 on a die is 0, because a die only has the numbers 1 to 6. There are 0 favourable outcomes, so P = 0/6 = 0.

**2. Certain event (P = 1).** The probability of getting some number between 1 and 6 on a die is 1, because all 6 outcomes are favourable: P = 6/6 = 1. People often get confused by such questions, but the answer is simply 1.

**3. The complement always works.** P(event) + P(not event) = 1 always holds. If P(rain) = 0.7, then P(no rain) = 0.3. In "at least one" questions the complement is the fastest method, because "none at all" has only one case.

**4. Mutually exclusive events.** Two events are mutually exclusive when both can never happen together — like getting a 1 and a 6 on the same die throw. For such events, P(A or B) = P(A) + P(B). But note: you can only add when the events are mutually exclusive; if they overlap (like "red OR king" in cards — red kings belong to both), you must subtract the overlap once.`
        )
      },
      {
        heading: t(
          '6. What-If: Replacement ke Saath, Bina Replacement aur Bada Sample Space',
          '6. What-If: With Replacement, Without Replacement, and a Bigger Sample Space'
        ),
        body: t(
          `Ab hum "what-if" sawaal poochhte hain. **What if: ball nikaal kar wapas rakh dein (with replacement)?** Bag mein 5 red aur 4 blue balls hain. Pehli ball red nikli aur use wapas rakh diya, toh doosri baari bhi P(red) = 5/9 hi rahega, kyunki bag waisa ka waisa hai. Dono baari red aane ki probability 5/9 × 5/9 = 25/81 hai.

**What if: ball wapas na rakhein (without replacement)?** Pehli ball red nikli aur wapas nahi rakhi, toh bag mein ab 4 red aur 4 blue — kul 8 balls bachi. Ab P(red) = 4/8 = 1/2 ho gaya. Doosri probability pehli par depend karti hai — yahi **dependent events** hain. Exam mein "without replacement" likha ho toh total har baari badal jaata hai, yeh bhoolna sabse badi galti hai.

**What if: sample space bada ho jaaye?** Ek coin ki jagah 4 coins uchhalo toh total outcomes 2 × 2 × 2 × 2 = 16 ho jaate hain. Har coin total ko double kar deta hai. Isi liye 10 coins ke total outcomes 2^10 = 1024 hote hain — sample space bahut tezi se badhta hai.`,
          `Now let us ask "what-if" questions. **What if we put the ball back after drawing it (with replacement)?** A bag has 5 red and 4 blue balls. The first ball drawn is red and is put back, so the second time P(red) is still 5/9, because the bag is exactly as before. The probability of red both times is 5/9 × 5/9 = 25/81.

**What if we do not put the ball back (without replacement)?** The first ball drawn is red and is not put back, so the bag now has 4 red and 4 blue balls — 8 balls in total. Now P(red) = 4/8 = 1/2. The second probability depends on the first — these are **dependent events**. In an exam, when "without replacement" is written, the total changes every time; forgetting that is the biggest mistake.

**What if the sample space grows?** Toss 4 coins instead of 1, and the total outcomes become 2 × 2 × 2 × 2 = 16. Every extra coin doubles the total. That is why 10 coins have 2^10 = 1024 total outcomes — the sample space grows very fast.`
        )
      },
      {
        heading: t(
          '7. Summary: Probability ka Poora Picture',
          '7. Summary: The Full Picture of Probability'
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. **Probability = favourable outcomes / total outcomes**, aur yeh hamesha 0 aur 1 ke beech rehti hai. Coin toss mein P(head) = 1/2, ek dice par kisi ek number ki probability 1/6, aur do dice par sum 7 ki probability 6/36 = 1/6 hai — kyunki sum 7 ke sabse zyada pairs hain.

**Complement rule** yaad rakho: P(not A) = 1 − P(A). "At least one" wale sawaalon mein yahi sabse tez tareeka hai — P(at least one head in 3 tosses) = 1 − 1/8 = 7/8. "And" ka matlab multiply (independent events) aur "Or" ka matlab add (mutually exclusive events). Do independent cheezon ke total outcomes multiply hote hain — do dice ke 36 outcomes, 3 coins ke 8 outcomes.

**With replacement** mein probability har baari same rehti hai, **without replacement** mein total har baari badalta hai. Exam se pehle yeh 5 key notes ek baar phir padh lo, aur practice wala bag problem khud solve karo — 6 red, 4 green, 2 white balls mein P(red) = 1/2, P(green) = 1/3 aur P(not white) = 5/6 aana chahiye.`,
          `Let us tie the whole article together. **Probability = favourable outcomes / total outcomes**, and it always stays between 0 and 1. In a coin toss P(head) = 1/2, on one die the probability of any single number is 1/6, and on two dice the probability of a sum of 7 is 6/36 = 1/6 — because a sum of 7 has the most pairs.

Remember the **complement rule**: P(not A) = 1 − P(A). In "at least one" questions this is the fastest method — P(at least one head in 3 tosses) = 1 − 1/8 = 7/8. "And" means multiply (for independent events) and "or" means add (for mutually exclusive events). The total outcomes of two independent things multiply — 36 outcomes for two dice, 8 outcomes for 3 coins.

**With replacement**, the probability stays the same every time; **without replacement**, the total changes every time. Before an exam, read the 5 key notes once more, and solve the practice bag problem yourself — with 6 red, 4 green, and 2 white balls, you should get P(red) = 1/2, P(green) = 1/3, and P(not white) = 5/6.`
        )
      }
    ],
    diagram: {
      kind: 'boxes',
      title: t(
        'Probability ka Flow: Sample Space se Answer Tak',
        'Probability Flow: From Sample Space to Answer'
      ),
      caption: t(
        'Pehle total outcomes gino, phir favourable, phir divide karo — aur hamesha check karo ki jawab 0 aur 1 ke beech hai',
        'First count the total outcomes, then the favourable ones, then divide — and always check that the answer lies between 0 and 1'
      ),
      nodes: [
        {
          t: t('Sample space: kul possible outcomes', 'Sample space: all possible outcomes'),
          s: t('1 coin = 2, 2 dice = 36, 3 coins = 8', '1 coin = 2, 2 dice = 36, 3 coins = 8')
        },
        {
          t: t('Favourable outcomes: jo chahiye', 'Favourable outcomes: the ones you want'),
          s: t('Sum 7 ke liye 6 pairs, all heads ke liye sirf 1', '6 pairs for a sum of 7, only 1 for all heads')
        },
        {
          t: t('Formula: P = favourable / total', 'Formula: P = favourable / total'),
          s: t('P(red) = 5/9, P(sum 7) = 6/36 = 1/6', 'P(red) = 5/9, P(sum 7) = 6/36 = 1/6')
        },
        {
          t: t('Range check: 0 <= P <= 1', 'Range check: 0 <= P <= 1'),
          s: t('Jawab 1 se zyada aaye toh hisaab galat hai', 'If the answer is above 1, the calculation is wrong')
        },
        {
          t: t('Complement: P(not A) = 1 - P(A)', 'Complement: P(not A) = 1 - P(A)'),
          s: t('"At least one" ke liye sabse tez tareeka', 'The fastest method for "at least one"')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          'Kam se Kam Ek Head: Complement Trick',
          'At Least One Head: The Complement Trick'
        ),
        language: 'python',
        code: `# 3 coins: kam se kam ek head
total_outcomes = 2 ** 3
no_head = 1  # sirf TTT
print("P(at least one head) =", total_outcomes - no_head, "/", total_outcomes, "=", (total_outcomes - no_head) / total_outcomes)`,
        output: `P(at least one head) = 7 / 8 = 0.875`
      },
      {
        title: t(
          '52 Cards: Ace, Red Card aur King of Hearts',
          '52 Cards: Ace, Red Card, and King of Hearts'
        ),
        language: 'python',
        code: `# 52 cards: ace, red card, king of hearts
print("P(ace) = 4 / 52 =", 4 / 52)
print("P(red card) = 26 / 52 =", 26 / 52)
print("P(king of hearts) = 1 / 52 =", 1 / 52)`,
        output: `P(ace) = 4 / 52 = 0.07692307692307693
P(red card) = 26 / 52 = 0.5
P(king of hearts) = 1 / 52 = 0.019230769230769232`
      }
    ],
    mcqs: [
      {
        q: t(
          'Ek fair dice phenka jaaye toh even number aane ki probability kya hai?',
          'A fair die is thrown. What is the probability of getting an even number?'
        ),
        opts: [
          t('1/6', '1/6'),
          t('1/3', '1/3'),
          t('1/2', '1/2'),
          t('2/3', '2/3')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: even numbers 2, 4, 6 hain — 3 favourable outcomes, kul 6, isliye P = 3/6 = 1/2.',
          'Correct answer: the even numbers are 2, 4, and 6 — 3 favourable outcomes out of 6 in total, so P = 3/6 = 1/2.'
        )
      },
      {
        q: t(
          'Bag mein 3 red aur 2 blue balls hain. Ek ball nikaali jaaye toh blue aane ki probability kya hai?',
          'A bag has 3 red and 2 blue balls. If one ball is drawn, what is the probability of getting a blue ball?'
        ),
        opts: [
          t('2/5', '2/5'),
          t('3/5', '3/5'),
          t('1/2', '1/2'),
          t('2/3', '2/3')
        ],
        ans: 0,
        expl: t(
          'Sahi jawab: kul balls 3 + 2 = 5 hain aur blue balls 2 hain, isliye P(blue) = 2/5.',
          'Correct answer: there are 3 + 2 = 5 balls in total and 2 blue balls, so P(blue) = 2/5.'
        )
      },
      {
        q: t(
          'Do coins ek saath uchhale jaayein toh dono par head aane ki probability kya hai?',
          'Two coins are tossed together. What is the probability of getting heads on both?'
        ),
        opts: [
          t('1/2', '1/2'),
          t('1/3', '1/3'),
          t('1/4', '1/4'),
          t('3/4', '3/4')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: kul outcomes 4 hain (HH, HT, TH, TT) aur favourable sirf HH hai, isliye P = 1/4.',
          'Correct answer: there are 4 total outcomes (HH, HT, TH, TT) and only HH is favourable, so P = 1/4.'
        )
      },
      {
        q: t(
          'Ek dice par 4 se bada number aane ki probability kya hai?',
          'What is the probability of getting a number greater than 4 on a die?'
        ),
        opts: [
          t('1/6', '1/6'),
          t('1/2', '1/2'),
          t('1/3', '1/3'),
          t('2/3', '2/3')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: 4 se bade numbers 5 aur 6 hain — 2 favourable outcomes, kul 6, isliye P = 2/6 = 1/3.',
          'Correct answer: the numbers greater than 4 are 5 and 6 — 2 favourable outcomes out of 6, so P = 2/6 = 1/3.'
        )
      },
      {
        q: t(
          '52 cards ki pack se ek card nikaala jaaye toh king aane ki probability kya hai?',
          'One card is drawn from a pack of 52 cards. What is the probability of getting a king?'
        ),
        opts: [
          t('1/13', '1/13'),
          t('1/4', '1/4'),
          t('1/26', '1/26'),
          t('4/13', '4/13')
        ],
        ans: 0,
        expl: t(
          'Sahi jawab: pack mein 4 kings hote hain aur kul 52 cards, isliye P(king) = 4/52 = 1/13.',
          'Correct answer: there are 4 kings in the pack and 52 cards in total, so P(king) = 4/52 = 1/13.'
        )
      }
    ],
    keyNotes: [
      t(
        'P(event) = favourable outcomes / total outcomes, aur probability hamesha 0 aur 1 ke beech rehti hai.',
        'P(event) = favourable outcomes / total outcomes, and probability always stays between 0 and 1.'
      ),
      t(
        'Do dice ke kul outcomes 36 hote hain; sum 7 sabse likely hai (6 pairs, P = 1/6).',
        'Two dice have 36 total outcomes; a sum of 7 is the most likely (6 pairs, P = 1/6).'
      ),
      t(
        'Complement rule: P(not A) = 1 - P(A); "at least one" ke liye yahi sabse tez tareeka hai.',
        'Complement rule: P(not A) = 1 - P(A); this is the fastest method for "at least one".'
      ),
      t(
        '"And" ka matlab multiply (independent), "Or" ka matlab add (mutually exclusive).',
        '"And" means multiply (independent events), "or" means add (mutually exclusive events).'
      ),
      t(
        'Without replacement mein total har baari badalta hai; with replacement mein probability same rehti hai.',
        'Without replacement the total changes every time; with replacement the probability stays the same.'
      )
    ],
    practice: {
      title: t(
        'Practice: Bag mein 6 Red, 4 Green, 2 White Balls',
        'Practice: A Bag with 6 Red, 4 Green, and 2 White Balls'
      ),
      task: t(
        'Bag mein 6 red, 4 green aur 2 white balls hain. Neeche wala starter code run karo aur P(red), P(green) aur P(not white) nikaalo. Done tab maanoge jab output mein Total balls: 12, P(red) = 0.5, P(green) = 0.3333... aur P(not white) = 0.8333... dikhe.',
        'A bag has 6 red, 4 green, and 2 white balls. Run the starter code below and find P(red), P(green), and P(not white). You are done when the output shows Total balls: 12, P(red) = 0.5, P(green) = 0.3333..., and P(not white) = 0.8333....'
      ),
      language: 'python',
      starter: `# Bag: 6 red, 4 green, 2 white
red, green, white = 6, 4, 2
total = red + green + white
print("Total balls:", total)
print("P(red) =", red, "/", total, "=", red / total)
print("P(green) =", green, "/", total, "=", green / total)
print("P(not white) =", total - white, "/", total, "=", (total - white) / total)`,
      expected: `Total balls: 12
P(red) = 6 / 12 = 0.5
P(green) = 4 / 12 = 0.3333333333333333
P(not white) = 10 / 12 = 0.8333333333333334`
    },
    readMinutes: 12
  };

const quantPipesCisterns: Article = {
    id: 'quant-pipes-cisterns',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Pipes & Cisterns — Bharna, Khaali Karna aur Net Rate',
      'Pipes & Cisterns — Filling, Emptying, and Net Rate'
    ),
    summary: t(
      'Pipe ki rate 1/time hoti hai: bharne wale pipe ko plus, khaali karne wale ko minus. Do ya teen pipes ek saath, leak wala tank, aur woh 2.4 hours ko 2 hours 24 minutes mein badalne wala step.',
      'A pipe rate is 1/time: filling pipes count as plus, emptying pipes as minus. Two or three pipes together, a leaking tank, and the step that turns 2.4 hours into 2 hours 24 minutes.'
    ),
    sections: [
      {
        heading: t(
          '1. Pipes & Cisterns Kya Hai? (Rate = 1 / Time)',
          '1. What Are Pipes & Cisterns? (Rate = 1 / Time)'
        ),
        body: t(
          `Pipes and cisterns ka sawaal ek tank ke baare mein hota hai jismein kuch pipes paani bharte hain aur kuch pipes (ya leak) paani nikaalte hain. Poora chapter ek hi idea par chalta hai: **ek pipe ki rate = 1 / uska time**. Agar pipe A tank ko 6 hours mein bharta hai, toh 1 hour mein woh tank ka 1/6 hissa bharta hai. Rate hamesha "1 hour mein kitna hissa" mein sochni hai.

Bharne wale pipe ki rate ko **plus (+)** aur khaali karne wale pipe ya leak ki rate ko **minus (−)** lena hai. Agar A 1/6 per hour bharta hai aur C 1/8 per hour khaali karta hai, toh net rate = 1/6 − 1/8 hai. Net rate mil jaaye toh **time = 1 / net rate** se kul time nikal jaata hai.

Ek aur zaroori baat: time ko rate mein badalna hai, time ko seedha add ya subtract nahi karna. Pipe A 6 hours mein aur pipe B 4 hours mein bharta hai, toh dono mil kar 6 + 4 = 10 hours mein nahi, balki 1/(1/6 + 1/4) = 2.4 hours mein bharte hain. Yahi is chapter ki sabse badi trap hai.`,
          `A pipes and cisterns question is about a tank that some pipes fill and other pipes (or a leak) empty. The whole chapter runs on one idea: **a pipe rate = 1 / its time**. If pipe A fills a tank in 6 hours, then in 1 hour it fills 1/6 of the tank. A rate should always be thought of as "how much of the tank in 1 hour".

A filling pipe rate counts as **plus (+)**, and an emptying pipe or leak rate counts as **minus (−)**. If A fills 1/6 per hour and C empties 1/8 per hour, the net rate is 1/6 − 1/8. Once you have the net rate, the total time is **time = 1 / net rate**.

One more important point: convert times into rates; do not add or subtract times directly. Pipe A fills in 6 hours and pipe B fills in 4 hours, so together they fill in 1/(1/6 + 1/4) = 2.4 hours, not 6 + 4 = 10 hours. That is the biggest trap in this chapter.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Ghar ki Tanki, Balti aur Leak',
          '2. Real-Life Examples: The Home Water Tank, a Bucket, and a Leak'
        ),
        body: t(
          `Har ghar mein yeh scene roz hota hai. **Chhat par tanki** mein do pipes lage hote hain — ek motor se paani chadhata hai, doosra neeche ghar mein paani deta hai. Agar motor tanki ko 2 hours mein bharta hai aur ghar ka use 1 hour mein tanki ka 1/4 hissa khaali karta hai, toh motor chalte hue bhi tanki dheere bharegi, kyunki ek taraf se paani aa raha hai aur doosri taraf se ja raha hai. Yahi net rate hai.

**Balti bharna** bhi wahi hisaab hai. Naal balti ko 5 minutes mein bharta hai, par balti mein ek chhota chhed hai jo use 10 minutes mein khaali kar deta hai. Dono ek saath chalein toh balti 10 minutes mein bharegi, 5 mein nahi — kyunki chhed aadha paani nikaal raha hai. Exam mein leak wale sawaal bilkul aise hi hote hain.

**Swimming pool** bharte waqt bhi yahi hota hai: ek bada pipe pool bharta hai aur ek chhota pipe use saaf karne ke liye khaali karta hai. Dono ka net rate nikaal kar hi pata chalta hai ki pool kab bharega.`,
          `This scene happens in every home, every day. A **roof water tank** has two pipes — one pumps water up from the motor, and the other sends water down into the house. If the motor fills the tank in 2 hours and household use empties 1/4 of the tank per hour, the tank still fills while the motor runs, just more slowly, because water is coming in on one side and going out on the other. That is the net rate.

**Filling a bucket** is the same calculation. A tap fills a bucket in 5 minutes, but the bucket has a small hole that would empty it in 10 minutes. With both running, the bucket fills in 10 minutes, not 5 — because the hole removes half the water. Leak questions in exams work exactly like this.

The same thing happens when a **swimming pool** is filled: one big pipe fills the pool while a small pipe empties it for cleaning. Only the net rate of both tells you when the pool will fill.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: A (6h) + B (4h), phir C (8h) Leak ke Saath',
          '3. Step-by-Step: A (6h) + B (4h), Then C (8h) as a Leak'
        ),
        body: t(
          `Ab hum worked example karte hain. **Pipe A tank ko 6 hours mein bharta hai, pipe B 4 hours mein bharta hai, aur pipe C use 8 hours mein khaali karta hai. A aur B ek saath kitne time mein bharenge? Aur teeno ek saath khole jaayein toh kitna time lagega?**

Step 1: rates nikaalo. A ki rate = 1/6 per hour, B ki rate = 1/4 per hour, C ki rate = 1/8 per hour (khaali karta hai, isliye minus).

Step 2: A + B ki net rate = 1/6 + 1/4 = 2/12 + 3/12 = 5/12 per hour. Time = 1 / (5/12) = 12/5 = **2.4 hours**. Decimal ko hours-minutes mein badlo: 0.4 hours × 60 = 24 minutes, isliye jawab hai **2 hours 24 minutes**.

Step 3: teeno ek saath — net rate = 1/6 + 1/4 − 1/8. LCM 24 lo: 4/24 + 6/24 − 3/24 = 7/24 per hour. Time = 24/7 = **3.43 hours** (lagbhag 3 hours 26 minutes). Dhyaan do: C ke khulne se time 2.4 se badh kar 3.43 hours ho gaya. Neeche wala code dono hisaab print karta hai.`,
          `Now let us work through an example. **Pipe A fills a tank in 6 hours, pipe B fills it in 4 hours, and pipe C empties it in 8 hours. How long do A and B take together? And how long if all three are opened together?**

Step 1: find the rates. A rate = 1/6 per hour, B rate = 1/4 per hour, and C rate = 1/8 per hour (it empties, so it is minus).

Step 2: the net rate of A + B = 1/6 + 1/4 = 2/12 + 3/12 = 5/12 per hour. Time = 1 / (5/12) = 12/5 = **2.4 hours**. Convert the decimal to hours and minutes: 0.4 hours × 60 = 24 minutes, so the answer is **2 hours 24 minutes**.

Step 3: all three together — net rate = 1/6 + 1/4 − 1/8. Take LCM 24: 4/24 + 6/24 − 3/24 = 7/24 per hour. Time = 24/7 = **3.43 hours** (about 3 hours 26 minutes). Notice that opening C pushed the time up from 2.4 to 3.43 hours. The code below prints both calculations.`
        ),
        code: {
          title: t(
            'A (6h) + B (4h), aur C (8h) Leak ke Saath',
            'A (6h) + B (4h), and C (8h) as a Leak'
          ),
          language: 'python',
          code: `# A fills in 6 hours, B fills in 4 hours, C empties in 8 hours
a = 1 / 6
b = 1 / 4
c = 1 / 8
together_ab = 1 / (a + b)
print("A + B together: 1 /", round(a + b, 4), "=", round(together_ab, 2), "hours")
net = a + b - c
print("A + B - C net rate:", round(net, 4), "-> time =", round(1 / net, 2), "hours")
print("2.4 hours =", 2, "hours", round(0.4 * 60), "minutes")`,
          output: `A + B together: 1 / 0.4167 = 2.4 hours
A + B - C net rate: 0.2917 -> time = 3.43 hours
2.4 hours = 2 hours 24 minutes`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Time Add Karna, Leak ka Sign aur Decimal',
          '4. Common Mistakes: Adding Times, the Leak Sign, and Decimals'
        ),
        body: t(
          `Pipes wale sawaalon mein teen galtiyan sabse zyada hoti hain. **Galti 1: Time ko seedha add kar dena.** A 6 hours mein aur B 4 hours mein bharta hai, toh dono mil kar 10 hours mein nahi bharte — 2.4 hours mein bharte hain. Time add nahi hota, **rates add hoti hain**. Pehle har time ko 1/time mein badlo, phir add karo, phir ulta (reciprocal) lo.

**Galti 2: Leak ya emptying pipe ko plus lena.** Khaali karne wale pipe ki rate hamesha minus hoti hai. Agar use plus le liya, toh net rate zyada aa jaayega aur time kam aa jaayega — bilkul ulta jawab. Rate likhte waqt pehle decide karo: bhar raha hai ya khaali kar raha hai.

**Galti 3: Decimal hours ko galat padhna.** 2.4 hours ka matlab 2 hours 40 minutes nahi hota — 2 hours 24 minutes hota hai, kyunki 0.4 × 60 = 24. Exam mein 2.4 ko 2:40 likhna bahut common galti hai. Hamesha decimal hisse ko 60 se multiply karke minutes nikaalo.`,
          `Three mistakes are most common in pipes questions. **Mistake 1: Adding the times directly.** A fills in 6 hours and B fills in 4 hours, so together they do not take 10 hours — they take 2.4 hours. Times do not add; **rates add**. First turn each time into 1/time, then add, then take the reciprocal.

**Mistake 2: Taking a leak or emptying pipe as plus.** An emptying pipe rate is always minus. If you take it as plus, the net rate comes out too high and the time too low — the exact opposite answer. When writing a rate, first decide: is it filling or emptying?

**Mistake 3: Reading decimal hours wrong.** 2.4 hours does not mean 2 hours 40 minutes — it means 2 hours 24 minutes, because 0.4 × 60 = 24. Writing 2.4 as 2:40 is a very common exam mistake. Always multiply the decimal part by 60 to get the minutes.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Sirf Leak, Net Rate Zero aur Aadha Tank',
          '5. Edge Cases: Only a Leak, Zero Net Rate, and a Half Tank'
        ),
        body: t(
          `Edge cases yaad rakho. **1. Sirf leak khula ho.** Agar bhara hua tank sirf leak se khaali ho raha hai, toh time wahi hota hai jo leak ka time hai — jaise leak tank ko 8 hours mein khaali karta hai, toh bhara tank 8 hours mein khaali hoga. Ismein koi net rate nahi, sirf leak ki rate hai.

**2. Net rate zero ho jaaye.** Agar bharne ki rate aur khaali karne ki rate barabar hon — jaise A 1/6 per hour bharta hai aur leak 1/6 per hour khaali karta hai — toh net rate 0 hai aur tank **kabhi nahi bharega**. Paani jitna aa raha hai, utna hi ja raha hai. Aise sawaal ka jawab "never" hota hai, koi number nahi.

**3. Net rate negative ho jaaye.** Agar leak bharne se tez hai, toh net rate negative hoti hai aur tank bharne ki jagah khaali hota jaayega. Aise mein "bharne ka time" ka sawaal hi galat hai — pehle check karo ki net rate positive hai ya nahi.

**4. Aadha tank ya koi hissa.** Agar tank ka aadha hissa bharna hai, toh time bhi aadha lagega: full time × 1/2. Upar wale example mein A + B ko aadha tank bharne mein 2.4/2 = 1.2 hours lagenge.`,
          `Remember these edge cases. **1. Only a leak is open.** If a full tank is emptying only through a leak, the time is just the leak time — if the leak empties the tank in 8 hours, the full tank empties in 8 hours. There is no net rate here, only the leak rate.

**2. The net rate becomes zero.** If the filling rate and the emptying rate are equal — for example, A fills 1/6 per hour and the leak empties 1/6 per hour — the net rate is 0 and the tank will **never fill**. Water leaves as fast as it enters. The answer to such a question is "never", not a number.

**3. The net rate becomes negative.** If the leak is faster than the filling, the net rate is negative and the tank keeps emptying instead of filling. Then the question "how long to fill" is wrong to begin with — first check whether the net rate is positive.

**4. Half a tank or any part.** If only half the tank must be filled, the time is also half: full time × 1/2. In the example above, A + B would take 2.4/2 = 1.2 hours to fill half the tank.`
        )
      },
      {
        heading: t(
          '6. What-If: Teesra Pipe, Bada Leak aur Pipe Band Karna',
          '6. What-If: A Third Pipe, a Bigger Leak, and Closing a Pipe'
        ),
        body: t(
          `Ab "what-if" sawaal. **What if: teesra bharne wala pipe jod dein?** A (6h) aur B (4h) ke saath C bhi bharne lage jo 12 hours mein bharta hai, toh net rate = 1/6 + 1/4 + 1/12 = 2/12 + 3/12 + 1/12 = 6/12 = 1/2, isliye time = 2 hours. Har naya bharne wala pipe time ko kam karta hai.

**What if: leak bharne se bada ho?** A 1/5 per hour bharta hai aur leak 1/4 per hour khaali karta hai, toh net rate = 1/5 − 1/4 = −1/20 — negative. Tank kabhi nahi bharega, balki khaali hota jaayega. Aise sawaal mein pehle sign check karo, phir hisaab.

**What if: ek pipe beech mein band kar dein?** A aur B ek saath 1 hour chalein, phir B band ho jaaye aur sirf A chale. Pehle hour mein 5/12 hissa bhar gaya, bacha 7/12 hissa. Ab sirf A ki rate 1/6 hai, toh bacha hissa bharne mein (7/12)/(1/6) = 3.5 hours aur lagenge. Kul time = 1 + 3.5 = 4.5 hours. Aise do-phase wale sawaalon mein pehle phase ka bhara hissa nikaalo, phir bacha hissa nayi rate se.`,
          `Now some "what-if" questions. **What if we add a third filling pipe?** If C, which fills in 12 hours, joins A (6h) and B (4h), the net rate = 1/6 + 1/4 + 1/12 = 2/12 + 3/12 + 1/12 = 6/12 = 1/2, so the time is 2 hours. Every new filling pipe reduces the time.

**What if the leak is bigger than the filling?** A fills 1/5 per hour and the leak empties 1/4 per hour, so the net rate = 1/5 − 1/4 = −1/20 — negative. The tank will never fill; it will keep emptying. In such a question, check the sign first, then calculate.

**What if one pipe is closed halfway?** A and B run together for 1 hour, then B is closed and only A runs. In the first hour, 5/12 of the tank fills, leaving 7/12. Now only A rate of 1/6 applies, so the remaining part takes (7/12)/(1/6) = 3.5 more hours. Total time = 1 + 3.5 = 4.5 hours. In such two-phase questions, first find how much filled in the first phase, then fill the rest at the new rate.`
        )
      },
      {
        heading: t(
          '7. Summary: Pipes ka Poora Picture',
          '7. Summary: The Full Picture of Pipes'
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. **Rate = 1/time**, bharne wala plus, khaali karne wala minus, aur **time = 1/net rate**. A (6h) + B (4h) = 2.4 hours = 2 hours 24 minutes, aur C (8h leak) ke saath time 3.43 hours ho jaata hai. Rates add hoti hain, time nahi — yahi sabse badi trap hai.

Decimal hours ko minutes mein badalne ke liye decimal hisse ko **60 se multiply** karo: 0.4 hours = 24 minutes, 0.5 hours = 30 minutes. Net rate zero ho toh tank kabhi nahi bharega, aur negative ho toh tank khaali hota jaayega — aise mein pehle sign check karo.

Revision ke liye yeh yaad rakho: pehle har pipe ki rate likho, phir plus-minus ke saath net rate nikaalo, phir uska reciprocal lo. Practice wala problem khud solve karo — A (12h) + B (8h) − C (24h leak) ka net rate 1/6 hai, isliye full tank 6 hours mein aur aadha tank 3 hours mein bharega.`,
          `Let us tie the whole article together. **Rate = 1/time**, filling is plus, emptying is minus, and **time = 1/net rate**. A (6h) + B (4h) = 2.4 hours = 2 hours 24 minutes, and with C (8h leak) the time becomes 3.43 hours. Rates add, times do not — that is the biggest trap.

To turn decimal hours into minutes, multiply the decimal part by **60**: 0.4 hours = 24 minutes, 0.5 hours = 30 minutes. If the net rate is zero, the tank never fills; if it is negative, the tank keeps emptying — so check the sign first.

For revision, remember this: first write every pipe rate, then find the net rate with plus and minus, then take its reciprocal. Solve the practice problem yourself — for A (12h) + B (8h) − C (24h leak) the net rate is 1/6, so the full tank fills in 6 hours and half the tank in 3 hours.`
        )
      }
    ],
    diagram: {
      kind: 'flow',
      title: t(
        'Pipes Sawaal Solve Karne ke Steps',
        'Steps to Solve a Pipes Question'
      ),
      caption: t(
        'Har pipe ki rate likho, plus-minus se net rate nikaalo, phir reciprocal se time',
        'Write every pipe rate, find the net rate with plus and minus, then take the reciprocal for the time'
      ),
      nodes: [
        {
          t: t('Step 1: Har pipe ki rate = 1/time', 'Step 1: Every pipe rate = 1/time'),
          s: t('A 6h -> 1/6, B 4h -> 1/4, C 8h leak -> 1/8', 'A 6h -> 1/6, B 4h -> 1/4, C 8h leak -> 1/8')
        },
        {
          t: t('Step 2: Bharna +, khaali karna -', 'Step 2: Filling +, emptying -'),
          s: t('Net rate = 1/6 + 1/4 - 1/8 = 7/24', 'Net rate = 1/6 + 1/4 - 1/8 = 7/24')
        },
        {
          t: t('Step 3: Time = 1 / net rate', 'Step 3: Time = 1 / net rate'),
          s: t('1 / (7/24) = 24/7 = 3.43 hours', '1 / (7/24) = 24/7 = 3.43 hours')
        },
        {
          t: t('Step 4: Decimal ko hours-minutes mein badlo', 'Step 4: Turn the decimal into hours and minutes'),
          s: t('0.4 hours x 60 = 24 minutes', '0.4 hours x 60 = 24 minutes')
        },
        {
          t: t('Check: Net rate positive hai?', 'Check: Is the net rate positive?'),
          s: t('Zero ho toh kabhi nahi bharega, negative ho toh khaali hoga', 'Zero means it never fills, negative means it empties')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          'Bharna vs Leak: A (5h) bharta hai, B (10h) khaali karta hai',
          'Filling vs Leak: A (5h) Fills, B (10h) Empties'
        ),
        language: 'python',
        code: `# A fills in 5 hours, B empties in 10 hours
net = 1 / 5 - 1 / 10
print("Net rate:", net, "-> time to fill =", 1 / net, "hours")`,
        output: `Net rate: 0.1 -> time to fill = 10.0 hours`
      },
      {
        title: t(
          'Do Pipes: 3 Hours aur 6 Hours',
          'Two Pipes: 3 Hours and 6 Hours'
        ),
        language: 'python',
        code: `# Pipes fill in 3 hours and 6 hours
time = 1 / (1 / 3 + 1 / 6)
print("Together:", time, "hours")`,
        output: `Together: 2.0 hours`
      }
    ],
    mcqs: [
      {
        q: t(
          'Pipe A tank ko 10 hours mein aur pipe B 15 hours mein bharta hai. Dono ek saath kitne time mein bharenge?',
          'Pipe A fills a tank in 10 hours and pipe B fills it in 15 hours. How long will they take together?'
        ),
        opts: [
          t('5 hours', '5 hours'),
          t('6 hours', '6 hours'),
          t('7.5 hours', '7.5 hours'),
          t('12.5 hours', '12.5 hours')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: net rate = 1/10 + 1/15 = 5/30 = 1/6, isliye time = 6 hours.',
          'Correct answer: net rate = 1/10 + 1/15 = 5/30 = 1/6, so the time is 6 hours.'
        )
      },
      {
        q: t(
          'Pipe A tank ko 8 hours mein bharta hai aur ek leak use 12 hours mein khaali karta hai. Dono ek saath khule hon toh tank kitne time mein bharega?',
          'Pipe A fills a tank in 8 hours and a leak empties it in 12 hours. If both are open together, how long will the tank take to fill?'
        ),
        opts: [
          t('4 hours', '4 hours'),
          t('10 hours', '10 hours'),
          t('20 hours', '20 hours'),
          t('24 hours', '24 hours')
        ],
        ans: 3,
        expl: t(
          'Sahi jawab: net rate = 1/8 - 1/12 = 1/24, isliye time = 24 hours.',
          'Correct answer: net rate = 1/8 - 1/12 = 1/24, so the time is 24 hours.'
        )
      },
      {
        q: t(
          'Pipe A 4 hours mein aur pipe B 6 hours mein tank bharta hai. Dono ek saath 2 hours chalein toh tank ka kitna hissa bharega?',
          'Pipe A fills a tank in 4 hours and pipe B fills it in 6 hours. If both run together for 2 hours, what fraction of the tank will fill?'
        ),
        opts: [
          t('1/2', '1/2'),
          t('2/3', '2/3'),
          t('5/6', '5/6'),
          t('1', '1')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: net rate = 1/4 + 1/6 = 5/12 per hour, 2 hours mein 2 x 5/12 = 5/6 hissa bharega.',
          'Correct answer: net rate = 1/4 + 1/6 = 5/12 per hour, so in 2 hours 2 x 5/12 = 5/6 of the tank fills.'
        )
      },
      {
        q: t(
          'A aur B mil kar tank ko 3 hours mein bharte hain. A akela 5 hours mein bharta hai. B akela kitne time mein bharega?',
          'A and B together fill a tank in 3 hours. A alone fills it in 5 hours. How long will B alone take?'
        ),
        opts: [
          t('6 hours', '6 hours'),
          t('7.5 hours', '7.5 hours'),
          t('8 hours', '8 hours'),
          t('15 hours', '15 hours')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: B ki rate = 1/3 - 1/5 = 2/15, isliye B ka time = 15/2 = 7.5 hours.',
          'Correct answer: B rate = 1/3 - 1/5 = 2/15, so B time is 15/2 = 7.5 hours.'
        )
      },
      {
        q: t(
          'Teen pipes tank ko 2, 3 aur 6 hours mein bharte hain. Teeno ek saath kitne time mein bharenge?',
          'Three pipes fill a tank in 2, 3, and 6 hours. How long will all three take together?'
        ),
        opts: [
          t('1 hour', '1 hour'),
          t('2 hours', '2 hours'),
          t('3 hours', '3 hours'),
          t('11 hours', '11 hours')
        ],
        ans: 0,
        expl: t(
          'Sahi jawab: net rate = 1/2 + 1/3 + 1/6 = 1, isliye time = 1/1 = 1 hour.',
          'Correct answer: net rate = 1/2 + 1/3 + 1/6 = 1, so the time is 1/1 = 1 hour.'
        )
      }
    ],
    keyNotes: [
      t(
        'Rate = 1/time; bharne wala pipe plus, khaali karne wala (leak) minus.',
        'Rate = 1/time; a filling pipe is plus, an emptying pipe (leak) is minus.'
      ),
      t(
        'Time = 1 / net rate; time add nahi hota, rates add hoti hain.',
        'Time = 1 / net rate; times do not add, rates add.'
      ),
      t(
        'Decimal hours ko minutes mein badlo: decimal hissa x 60 (0.4 hours = 24 minutes).',
        'Turn decimal hours into minutes: decimal part x 60 (0.4 hours = 24 minutes).'
      ),
      t(
        'Net rate zero ho toh tank kabhi nahi bharega; negative ho toh tank khaali hota jaayega.',
        'If the net rate is zero, the tank never fills; if negative, the tank keeps emptying.'
      ),
      t(
        'Aadha tank bharne mein aadha time lagta hai: full time x hissa.',
        'Filling half a tank takes half the time: full time x fraction.'
      )
    ],
    practice: {
      title: t(
        'Practice: A (12h) + B (8h) - C (24h Leak)',
        'Practice: A (12h) + B (8h) - C (24h Leak)'
      ),
      task: t(
        'Pipe A tank ko 12 hours mein bharta hai, pipe B 8 hours mein bharta hai, aur pipe C use 24 hours mein khaali karta hai. Teeno ek saath khole jaayein toh full tank kitne time mein bharega aur aadha tank kitne time mein? Starter code run karo aur done tab maanoge jab output mein full tank 6.0 hours aur half tank 3.0 hours dikhe.',
        'Pipe A fills a tank in 12 hours, pipe B fills it in 8 hours, and pipe C empties it in 24 hours. If all three are opened together, how long will the full tank take, and how long will half the tank take? Run the starter code; you are done when the output shows the full tank at 6.0 hours and half the tank at 3.0 hours.'
      ),
      language: 'python',
      starter: `# A fills 12 h, B fills 8 h, C empties 24 h
net = 1 / 12 + 1 / 8 - 1 / 24
print("Net rate per hour:", net)
print("Time to fill full tank:", 1 / net, "hours")
print("Time to fill half tank:", (1 / net) / 2, "hours")`,
      expected: `Net rate per hour: 0.16666666666666666
Time to fill full tank: 6.0 hours
Time to fill half tank: 3.0 hours`
    },
    readMinutes: 12
  };

const quantTrains: Article = {
    id: 'quant-trains',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Trains — Relative Speed, Crossing aur Platform',
      'Trains — Relative Speed, Crossing, and Platform'
    ),
    summary: t(
      'Train ke sawaalon ke do rules: km/h ko m/s mein badlo (x 5/18), aur distance mein train ki length jodo. Pole, platform, aadmi aur doosri train — har crossing ka hisaab ek hi tareeke se hota hai.',
      'Two rules for train questions: turn km/h into m/s (x 5/18), and add the train length to the distance. A pole, a platform, a person, or another train — every crossing is solved the same way.'
    ),
    sections: [
      {
        heading: t(
          '1. Trains Kya Hai? (km/h se m/s, Distance = Length)',
          '1. What Are Train Questions? (km/h to m/s, Distance = Length)'
        ),
        body: t(
          `Train ke sawaal speed, time aur distance ke hi sawaal hain, bas do extra rules hain. **Rule 1: km/h ko m/s mein badlo.** Train ki speed aksar km/h mein di hoti hai aur length metre mein, isliye pehle speed ko m/s mein badlo: **km/h × 5/18 = m/s**. 72 km/h × 5/18 = 20 m/s, aur 54 km/h × 5/18 = 15 m/s. Ulta, m/s ko km/h mein badalne ke liye × 18/5 karo.

**Rule 2: distance mein train ki length jodo.** Jab train kisi cheez ko cross karti hai, toh use apni poori length paar karni padti hai. Pole ya aadmi ki length zero hoti hai, isliye distance = train ki length. Platform ya bridge ki length hoti hai, isliye distance = train ki length + platform ki length. Yeh rule bhoolna sabse badi galti hai.

**Rule 3: relative speed.** Do trains ek doosre ki taraf aayein (opposite direction) toh speeds **add** hoti hain; ek hi direction mein jaayein toh speeds **subtract** hoti hain. Yeh relative speed hi crossing time decide karti hai: time = total distance / relative speed.`,
          `Train questions are just speed, time, and distance questions with two extra rules. **Rule 1: turn km/h into m/s.** A train speed is usually given in km/h and its length in metres, so first turn the speed into m/s: **km/h × 5/18 = m/s**. 72 km/h × 5/18 = 20 m/s, and 54 km/h × 5/18 = 15 m/s. To go the other way, multiply m/s by 18/5 to get km/h.

**Rule 2: add the train length to the distance.** When a train crosses something, it must pass its whole length. A pole or a person has zero length, so distance = train length. A platform or bridge has a length, so distance = train length + platform length. Forgetting this rule is the biggest mistake.

**Rule 3: relative speed.** When two trains move towards each other (opposite directions), their speeds **add**; when they move in the same direction, their speeds **subtract**. This relative speed decides the crossing time: time = total distance / relative speed.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Platform, Bridge aur Signal Pole',
          '2. Real-Life Examples: Platform, Bridge, and Signal Pole'
        ),
        body: t(
          `Train mein safar karte waqt yeh sab roz dikhta hai. **Platform par khade hokar** aap dekhte ho ki train aati hai, poori train platform se guzarti hai, aur phir uska aakhiri dibba platform chhodta hai. Train ko platform cross karne mein jo time lagta hai, woh train ki length + platform ki length par depend karta hai — train tab tak "cross" nahi karti jab tak uska aakhiri hissa platform se bahar na aa jaaye.

**Bridge par** bhi wahi hisaab hai: train tab tak bridge cross nahi karti jab tak uska engine bridge ke us paar aur aakhiri dibba bridge ke is paar na ho. Isliye distance = train ki length + bridge ki length hoti hai.

**Signal pole** ke paas se train ek pal mein guzar jaati hai, kyunki pole ki koi length nahi hoti — distance sirf train ki length hoti hai. Isi liye pole wale sawaal sabse aasan hote hain, aur platform wale sawaalon mein length jodni padti hai.`,
          `You see all of this every day while travelling by train. **Standing on a platform**, you watch a train arrive, the whole train pass along the platform, and then its last coach leave the platform. The time a train takes to cross a platform depends on the train length + the platform length — the train has not "crossed" until its last part is past the platform.

On a **bridge** it is the same calculation: the train has not crossed the bridge until its engine is past one end and its last coach is past the other end. So distance = train length + bridge length.

A train passes a **signal pole** in a moment, because a pole has no length — the distance is only the train length. That is why pole questions are the easiest, while platform questions need a length to be added.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: Pole (6s), Platform (26.67s) aur Do Trains (8.64s)',
          '3. Step-by-Step: Pole (6s), Platform (26.67s), and Two Trains (8.64s)'
        ),
        body: t(
          `Ab hum teen worked examples karte hain. **Example 1: 120 m lambi train 72 km/h ki speed se ek pole ko kitne time mein cross karegi?** Step 1: speed badlo — 72 × 5/18 = 20 m/s. Step 2: distance = train ki length = 120 m (pole ki length zero). Step 3: time = 120/20 = **6 seconds**.

**Example 2: 150 m lambi train 54 km/h ki speed se 250 m lambe platform ko kitne time mein cross karegi?** Step 1: speed badlo — 54 × 5/18 = 15 m/s. Step 2: distance = 150 + 250 = 400 m. Step 3: time = 400/15 = **26.67 seconds** (lagbhag 26 seconds 40/60 hissa). Dhyaan do: pole wale sawaal mein sirf train ki length thi, yahan platform ki length bhi judi.

**Example 3: 100 m aur 140 m lambi do trains ek doosre ki taraf 60 km/h aur 40 km/h ki speed se aa rahi hain. Ek doosre ko cross karne mein kitna time lagega?** Step 1: relative speed = 60 + 40 = 100 km/h (opposite direction, isliye add). Step 2: m/s mein badlo — 100 × 5/18 = 27.78 m/s. Step 3: distance = 100 + 140 = 240 m. Step 4: time = 240/27.78 = **8.64 seconds**. Neeche wala code teeno hisaab print karta hai.`,
          `Now let us work through three examples. **Example 1: A 120 m long train travelling at 72 km/h crosses a pole in how much time?** Step 1: convert the speed — 72 × 5/18 = 20 m/s. Step 2: distance = train length = 120 m (a pole has zero length). Step 3: time = 120/20 = **6 seconds**.

**Example 2: A 150 m long train travelling at 54 km/h crosses a 250 m long platform in how much time?** Step 1: convert the speed — 54 × 5/18 = 15 m/s. Step 2: distance = 150 + 250 = 400 m. Step 3: time = 400/15 = **26.67 seconds**. Notice: the pole question used only the train length, but here the platform length is added too.

**Example 3: Two trains, 100 m and 140 m long, move towards each other at 60 km/h and 40 km/h. How long will they take to cross each other?** Step 1: relative speed = 60 + 40 = 100 km/h (opposite directions, so add). Step 2: convert to m/s — 100 × 5/18 = 27.78 m/s. Step 3: distance = 100 + 140 = 240 m. Step 4: time = 240/27.78 = **8.64 seconds**. The code below prints all three calculations.`
        ),
        code: {
          title: t(
            'Pole, Platform aur Do Trains: Time Compute Karna',
            'Pole, Platform, and Two Trains: Computing Time'
          ),
          language: 'python',
          code: `# 72 km/h ko m/s mein badlo: km/h * 5/18
speed_ms = 72 * 5 / 18
print("72 km/h =", speed_ms, "m/s")
print("120 m train, pole cross:", 120 / speed_ms, "seconds")
# 150 m train, 54 km/h, 250 m platform
speed2 = 54 * 5 / 18
print("54 km/h =", speed2, "m/s")
print("Platform cross:", (150 + 250) / speed2, "seconds")
# Opposite trains: 100 m + 140 m, 60 + 40 km/h
rel = (60 + 40) * 5 / 18
print("Relative speed =", round(rel, 2), "m/s")
print("Crossing time:", round((100 + 140) / rel, 2), "seconds")`,
          output: `72 km/h = 20.0 m/s
120 m train, pole cross: 6.0 seconds
54 km/h = 15.0 m/s
Platform cross: 26.666666666666668 seconds
Relative speed = 27.78 m/s
Crossing time: 8.64 seconds`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: km/h bhoolna, Length na jodna aur Add/Subtract ulta',
          '4. Common Mistakes: Forgetting km/h, Not Adding Length, and Reversed Add/Subtract'
        ),
        body: t(
          `Train ke sawaalon mein teen galtiyan sabse zyada hoti hain. **Galti 1: km/h ko m/s mein badle bina hisaab karna.** 72 km/h ko seedha 72 m/s samajh kar 120/72 karna galat hai — pehle 72 × 5/18 = 20 m/s karo, phir 120/20 = 6 seconds. Units hamesha match honi chahiye: length metre mein hai toh speed m/s mein honi chahiye.

**Galti 2: Platform ya bridge ki length na jodna.** 150 m train aur 250 m platform ke sawaal mein sirf 150/15 = 10 seconds likhna galat hai — sahi distance 150 + 250 = 400 m hai aur time 26.67 seconds hai. Train tab tak cross nahi karti jab tak uska aakhiri hissa bhi paar na ho jaaye.

**Galti 3: Same direction mein speeds add kar dena.** Ek hi direction mein jaane wali trains ki relative speed **subtract** hoti hai (tez wali minus dheemi wali), add nahi. 80 km/h aur 60 km/h wali trains ek hi direction mein hon toh relative speed 20 km/h hai, 140 nahi. Opposite direction mein hi add hoti hai.`,
          `Three mistakes are most common in train questions. **Mistake 1: Calculating without turning km/h into m/s.** Taking 72 km/h as 72 m/s and doing 120/72 is wrong — first do 72 × 5/18 = 20 m/s, then 120/20 = 6 seconds. Units must always match: if length is in metres, speed must be in m/s.

**Mistake 2: Not adding the platform or bridge length.** In a question with a 150 m train and a 250 m platform, writing only 150/15 = 10 seconds is wrong — the correct distance is 150 + 250 = 400 m and the time is 26.67 seconds. A train has not crossed until its last part has also passed.

**Mistake 3: Adding speeds in the same direction.** The relative speed of trains moving in the same direction is found by **subtracting** (faster minus slower), not adding. Trains at 80 km/h and 60 km/h in the same direction have a relative speed of 20 km/h, not 140. Speeds add only in opposite directions.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Khadi Train, Chalta Aadmi aur Barabar Speed',
          '5. Edge Cases: A Standing Train, a Walking Person, and Equal Speeds'
        ),
        body: t(
          `Edge cases yaad rakho. **1. Train khadi ho (speed zero).** Agar train ki speed 0 hai, toh woh kisi ko cross hi nahi karegi — time infinite hoga. Aise sawaal mein speed check karo, seedha formula mat lagao.

**2. Aadmi chal raha ho.** Train ek aadmi ko cross kar rahi hai jo khud chal raha hai. Agar aadmi train ki taraf chal raha hai, toh relative speed = train speed + aadmi ki speed. Agar aadmi train ki hi direction mein chal raha hai, toh relative speed = train speed − aadmi ki speed. Aadmi ki length zero hoti hai, isliye distance sirf train ki length hoti hai.

**3. Dono trains ki speed barabar ho aur direction same ho.** Relative speed zero ho jaayegi — tez wali kabhi dheemi wali ko overtake nahi kar paayegi. Aise sawaal ka jawab "never" hota hai.

**4. Train ki length nikaalni ho.** Agar train pole ko 8 seconds mein cross karti hai aur speed 54 km/h (= 15 m/s) hai, toh length = speed × time = 15 × 8 = 120 m. Ulta sawaal bhi aise hi banta hai — formula wahi hai, unknown badal jaata hai.`,
          `Remember these edge cases. **1. The train is standing still (speed zero).** If a train speed is 0, it will never cross anything — the time is infinite. In such a question, check the speed first; do not apply the formula blindly.

**2. The person is walking.** A train crosses a person who is walking too. If the person walks towards the train, relative speed = train speed + person speed. If the person walks in the same direction as the train, relative speed = train speed − person speed. A person has zero length, so the distance is only the train length.

**3. Both trains have equal speed in the same direction.** The relative speed becomes zero — the faster one can never overtake the slower one. The answer to such a question is "never".

**4. Finding the train length.** If a train crosses a pole in 8 seconds at 54 km/h (= 15 m/s), its length = speed × time = 15 × 8 = 120 m. A reversed question is made the same way — the formula is the same, only the unknown changes.`
        )
      },
      {
        heading: t(
          '6. What-If: Speed Double, Platform Lamba aur Overtake',
          '6. What-If: Double Speed, Longer Platform, and Overtaking'
        ),
        body: t(
          `Ab "what-if" sawaal. **What if: speed double ho jaaye?** 120 m train 72 km/h par pole ko 6 seconds mein cross karti hai. Speed double karke 144 km/h (= 40 m/s) kar do, toh time aadha ho jaayega: 120/40 = 3 seconds. Speed aur time inverse proportion mein hote hain — speed double, time aadha.

**What if: platform lamba ho jaaye?** 150 m train 15 m/s par 250 m platform ko 26.67 seconds mein cross karti hai. Platform 400 m ka ho jaaye toh distance 550 m ho jaayega aur time 550/15 = 36.67 seconds. Platform jitna lamba, time utna zyada — seedha proportion.

**What if: ek train doosri ko overtake kare?** 120 m aur 180 m lambi do trains ek hi direction mein 80 km/h aur 60 km/h par ja rahi hain. Peeche wali tez train ko aage wali ko overtake karne ke liye dono ki lengths paar karni padengi: distance = 300 m, relative speed = 20 km/h = 5.56 m/s, time = 300/5.56 = 54 seconds. Overtake mein bhi distance dono lengths ka sum hoti hai.`,
          `Now some "what-if" questions. **What if the speed doubles?** A 120 m train at 72 km/h crosses a pole in 6 seconds. Double the speed to 144 km/h (= 40 m/s), and the time halves: 120/40 = 3 seconds. Speed and time are in inverse proportion — double the speed, half the time.

**What if the platform is longer?** A 150 m train at 15 m/s crosses a 250 m platform in 26.67 seconds. If the platform becomes 400 m, the distance becomes 550 m and the time 550/15 = 36.67 seconds. The longer the platform, the more the time — direct proportion.

**What if one train overtakes another?** Two trains, 120 m and 180 m long, move in the same direction at 80 km/h and 60 km/h. For the faster train behind to overtake the one ahead, it must pass both lengths: distance = 300 m, relative speed = 20 km/h = 5.56 m/s, time = 300/5.56 = 54 seconds. In overtaking too, the distance is the sum of both lengths.`
        )
      },
      {
        heading: t(
          '7. Summary: Trains ka Poora Picture',
          '7. Summary: The Full Picture of Trains'
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. **km/h × 5/18 = m/s**, aur **time = distance / speed**. Pole ya aadmi ke liye distance sirf train ki length hoti hai; platform ya bridge ke liye train ki length + platform ki length. Opposite direction mein speeds add hoti hain, same direction mein subtract.

Upar wale examples yaad rakho: 120 m train, 72 km/h, pole → 6 seconds. 150 m train, 54 km/h, 250 m platform → 26.67 seconds. Do trains (100 m + 140 m), 60 + 40 km/h, opposite → 8.64 seconds. Har sawaal mein pehle units match karo, phir distance tay karo, phir relative speed, phir time.

Revision ke liye yeh checklist use karo: (1) speed m/s mein hai? (2) distance mein train ki length judi hai? (3) direction opposite hai ya same? Practice wala problem solve karo — 240 m train, 108 km/h, 360 m tunnel → 20 seconds, aur pole → 8 seconds aana chahiye.`,
          `Let us tie the whole article together. **km/h × 5/18 = m/s**, and **time = distance / speed**. For a pole or a person, the distance is only the train length; for a platform or bridge, it is train length + platform length. In opposite directions speeds add; in the same direction they subtract.

Remember the examples above: 120 m train, 72 km/h, pole → 6 seconds. 150 m train, 54 km/h, 250 m platform → 26.67 seconds. Two trains (100 m + 140 m), 60 + 40 km/h, opposite → 8.64 seconds. In every question, first match the units, then fix the distance, then the relative speed, then the time.

Use this checklist for revision: (1) is the speed in m/s? (2) is the train length added to the distance? (3) are the directions opposite or the same? Solve the practice problem — a 240 m train at 108 km/h crossing a 360 m tunnel should take 20 seconds, and a pole 8 seconds.`
        )
      }
    ],
    diagram: {
      kind: 'flow',
      title: t(
        'Train Sawaal Solve Karne ke Steps',
        'Steps to Solve a Train Question'
      ),
      caption: t(
        'Pehle speed m/s mein badlo, phir distance tay karo, phir relative speed, phir time',
        'First turn the speed into m/s, then fix the distance, then the relative speed, then the time'
      ),
      nodes: [
        {
          t: t('Step 1: Speed badlo — km/h x 5/18 = m/s', 'Step 1: Convert speed — km/h x 5/18 = m/s'),
          s: t('72 km/h = 20 m/s, 54 km/h = 15 m/s', '72 km/h = 20 m/s, 54 km/h = 15 m/s')
        },
        {
          t: t('Step 2: Distance tay karo', 'Step 2: Fix the distance'),
          s: t('Pole: sirf train ki length; Platform: train + platform', 'Pole: only train length; Platform: train + platform')
        },
        {
          t: t('Step 3: Relative speed', 'Step 3: Relative speed'),
          s: t('Opposite: add karo; Same direction: subtract karo', 'Opposite: add; Same direction: subtract')
        },
        {
          t: t('Step 4: Time = distance / speed', 'Step 4: Time = distance / speed'),
          s: t('120/20 = 6 seconds; 400/15 = 26.67 seconds', '120/20 = 6 seconds; 400/15 = 26.67 seconds')
        },
        {
          t: t('Check: Units match hain?', 'Check: Do the units match?'),
          s: t('Length metre mein hai toh speed m/s mein honi chahiye', 'If length is in metres, speed must be in m/s')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          'Chalta Aadmi: Train (90 km/h) aur Aadmi (6 km/h), Same Direction',
          'Walking Person: Train (90 km/h) and Person (6 km/h), Same Direction'
        ),
        language: 'python',
        code: `# 180 m train, 90 km/h; man walks 6 km/h, same direction
rel = (90 - 6) * 5 / 18
print("Relative speed:", round(rel, 2), "m/s")
print("Time to cross man:", round(180 / rel, 2), "seconds")`,
        output: `Relative speed: 23.33 m/s
Time to cross man: 7.71 seconds`
      },
      {
        title: t(
          'Overtake: 120 m + 180 m, 80 aur 60 km/h, Same Direction',
          'Overtaking: 120 m + 180 m, 80 and 60 km/h, Same Direction'
        ),
        language: 'python',
        code: `# Overtaking: 120 m + 180 m, 80 and 60 km/h, same direction
rel = (80 - 60) * 5 / 18
print("Relative speed:", round(rel, 2), "m/s")
print("Time to overtake:", round((120 + 180) / rel, 2), "seconds")`,
        output: `Relative speed: 5.56 m/s
Time to overtake: 54.0 seconds`
      }
    ],
    mcqs: [
      {
        q: t(
          '90 m lambi train 36 km/h ki speed se ek pole ko kitne time mein cross karegi?',
          'A 90 m long train travelling at 36 km/h crosses a pole in how much time?'
        ),
        opts: [
          t('6 seconds', '6 seconds'),
          t('9 seconds', '9 seconds'),
          t('12 seconds', '12 seconds'),
          t('15 seconds', '15 seconds')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 36 km/h = 10 m/s, time = 90/10 = 9 seconds.',
          'Correct answer: 36 km/h = 10 m/s, so time = 90/10 = 9 seconds.'
        )
      },
      {
        q: t(
          '200 m lambi train 72 km/h ki speed se 300 m lambe bridge ko kitne time mein cross karegi?',
          'A 200 m long train travelling at 72 km/h crosses a 300 m long bridge in how much time?'
        ),
        opts: [
          t('10 seconds', '10 seconds'),
          t('15 seconds', '15 seconds'),
          t('25 seconds', '25 seconds'),
          t('35 seconds', '35 seconds')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: 72 km/h = 20 m/s, distance = 200 + 300 = 500 m, time = 500/20 = 25 seconds.',
          'Correct answer: 72 km/h = 20 m/s, distance = 200 + 300 = 500 m, so time = 500/20 = 25 seconds.'
        )
      },
      {
        q: t(
          '120 m aur 180 m lambi do trains ek doosre ki taraf 50 km/h aur 70 km/h ki speed se aa rahi hain. Cross karne mein kitna time lagega?',
          'Two trains, 120 m and 180 m long, move towards each other at 50 km/h and 70 km/h. How long will they take to cross each other?'
        ),
        opts: [
          t('6 seconds', '6 seconds'),
          t('9 seconds', '9 seconds'),
          t('12 seconds', '12 seconds'),
          t('15 seconds', '15 seconds')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: relative speed = 120 km/h = 33.33 m/s, distance = 300 m, time = 300/33.33 = 9 seconds.',
          'Correct answer: relative speed = 120 km/h = 33.33 m/s, distance = 300 m, so time = 300/33.33 = 9 seconds.'
        )
      },
      {
        q: t(
          'Ek train ek pole ko 8 seconds mein cross karti hai aur uski speed 54 km/h hai. Train ki length kya hai?',
          'A train crosses a pole in 8 seconds and its speed is 54 km/h. What is the length of the train?'
        ),
        opts: [
          t('100 m', '100 m'),
          t('120 m', '120 m'),
          t('150 m', '150 m'),
          t('180 m', '180 m')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 54 km/h = 15 m/s, length = speed x time = 15 x 8 = 120 m.',
          'Correct answer: 54 km/h = 15 m/s, so length = speed x time = 15 x 8 = 120 m.'
        )
      },
      {
        q: t(
          '100 m aur 200 m lambi do trains ek hi direction mein 90 km/h aur 60 km/h ki speed se ja rahi hain. Tez train ko dheemi train ko overtake karne mein kitna time lagega?',
          'Two trains, 100 m and 200 m long, move in the same direction at 90 km/h and 60 km/h. How long will the faster train take to overtake the slower one?'
        ),
        opts: [
          t('20 seconds', '20 seconds'),
          t('30 seconds', '30 seconds'),
          t('36 seconds', '36 seconds'),
          t('45 seconds', '45 seconds')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: relative speed = 30 km/h = 8.33 m/s, distance = 100 + 200 = 300 m, time = 300/8.33 = 36 seconds.',
          'Correct answer: relative speed = 30 km/h = 8.33 m/s, distance = 100 + 200 = 300 m, so time = 300/8.33 = 36 seconds.'
        )
      }
    ],
    keyNotes: [
      t(
        'km/h x 5/18 = m/s; length metre mein hai toh speed m/s mein honi chahiye.',
        'km/h x 5/18 = m/s; if length is in metres, speed must be in m/s.'
      ),
      t(
        'Pole ya aadmi: distance = train ki length; platform ya bridge: train + platform ki length.',
        'Pole or person: distance = train length; platform or bridge: train + platform length.'
      ),
      t(
        'Opposite direction mein speeds add hoti hain, same direction mein subtract.',
        'In opposite directions speeds add; in the same direction they subtract.'
      ),
      t(
        'Time = distance / relative speed; length = speed x time se ulta sawaal bhi banta hai.',
        'Time = distance / relative speed; length = speed x time also makes the reversed question.'
      ),
      t(
        'Speed double ho toh time aadha; platform lamba ho toh time zyada.',
        'If speed doubles, time halves; if the platform is longer, time increases.'
      )
    ],
    practice: {
      title: t(
        'Practice: 240 m Train, 108 km/h, 360 m Tunnel',
        'Practice: 240 m Train, 108 km/h, 360 m Tunnel'
      ),
      task: t(
        'Ek 240 m lambi train 108 km/h ki speed se ja rahi hai. Woh 360 m lambe tunnel ko kitne time mein cross karegi, aur ek pole ko kitne time mein? Starter code run karo aur done tab maanoge jab output mein tunnel cross 20.0 seconds aur pole cross 8.0 seconds dikhe.',
        'A 240 m long train travels at 108 km/h. How long will it take to cross a 360 m long tunnel, and how long to cross a pole? Run the starter code; you are done when the output shows the tunnel cross at 20.0 seconds and the pole cross at 8.0 seconds.'
      ),
      language: 'python',
      starter: `# 240 m train, 108 km/h, 360 m tunnel
speed = 108 * 5 / 18
print("108 km/h =", speed, "m/s")
print("Tunnel cross:", (240 + 360) / speed, "seconds")
print("Pole cross:", 240 / speed, "seconds")`,
      expected: `108 km/h = 30.0 m/s
Tunnel cross: 20.0 seconds
Pole cross: 8.0 seconds`
    },
    readMinutes: 12
  };

const quantBoatsStreams: Article = {
    id: 'quant-boats-streams',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Boats & Streams — Downstream, Upstream aur Still Water',
      'Boats & Streams — Downstream, Upstream, and Still Water'
    ),
    summary: t(
      'Naav ki speed aur dhaara ki speed se downstream aur upstream nikalna: downstream = still + stream, upstream = still - stream. Round trip mein dono taraf alag speed hoti hai, isliye time alag-alag nikaalo.',
      'Finding downstream and upstream speeds from the boat speed and the stream speed: downstream = still + stream, upstream = still - stream. On a round trip each side has a different speed, so find each time separately.'
    ),
    sections: [
      {
        heading: t(
          '1. Boats & Streams Kya Hai? (Downstream aur Upstream)',
          '1. What Are Boats & Streams? (Downstream and Upstream)'
        ),
        body: t(
          `Boats and streams ka sawaal nadi mein chalti naav ke baare mein hota hai. Naav ki apni speed hoti hai (still water speed — bina dhaara ke paani mein speed), aur nadi ki dhaara ki apni speed hoti hai (stream speed). Dono mil kar do nayi speeds banati hain.

**Downstream** matlab dhaara ki direction mein jaana — dhaara naav ko dhakelti hai, isliye speed badh jaati hai: **downstream speed = still water speed + stream speed**. **Upstream** matlab dhaara ke against jaana — dhaara naav ko rokti hai, isliye speed kam ho jaati hai: **upstream speed = still water speed − stream speed**.

Ulta bhi yaad rakho: agar downstream aur upstream speeds pata hon, toh **still water speed = (downstream + upstream) / 2** aur **stream speed = (downstream − upstream) / 2**. Yeh dono formulas exam mein bahut aate hain, isliye dono directions se yaad rakho.`,
          `A boats and streams question is about a boat moving in a river. The boat has its own speed (still water speed — its speed in water without a current), and the river current has its own speed (stream speed). Together they make two new speeds.

**Downstream** means going in the direction of the current — the current pushes the boat, so the speed increases: **downstream speed = still water speed + stream speed**. **Upstream** means going against the current — the current holds the boat back, so the speed decreases: **upstream speed = still water speed − stream speed**.

Also remember the reverse: if the downstream and upstream speeds are known, then **still water speed = (downstream + upstream) / 2** and **stream speed = (downstream − upstream) / 2**. Both formulas appear very often in exams, so remember them in both directions.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Nadi Paar Karna, Rowing aur Ferry',
          '2. Real-Life Examples: Crossing a River, Rowing, and a Ferry'
        ),
        body: t(
          `Nadi mein naav chalana roz ka kaam hai. **Nadi paar karte waqt** agar aap dhaara ki direction mein ja rahe ho, toh aapko lagta hai naav tez chal rahi hai — woh dhaara ki madad hai. Wapas aate waqt wahi doori zyada time leti hai, kyunki ab dhaara ke against chalna padta hai. Yahi downstream aur upstream ka farak hai.

**Rowing (kashti chalana)** mein bhi yahi hota hai: downstream mein chappu kam chalane padte hain, upstream mein zyada mehnat lagti hai. Isi liye nadi ke kinare rehne wale log kehte hain ki jaana aasan hai, aana mushkil.

**Ferry ya steamer** jo nadi ke dono kinaron ke beech chalti hai, uska timetable bhi isi hisaab se banta hai — downstream trip hamesha upstream trip se kam time leti hai. Agar timetable mein dono taraf ka time barabar likha ho, toh samajh lo kuch gadbad hai.`,
          `Boating on a river is everyday work. **While crossing a river**, if you go in the direction of the current, the boat feels fast — that is the current helping. Coming back, the same distance takes longer, because now you must go against the current. That is the difference between downstream and upstream.

The same thing happens in **rowing**: downstream you need fewer strokes, upstream you need much more effort. That is why people living on riverbanks say going is easy and coming back is hard.

A **ferry or steamer** running between the two banks of a river also has its timetable built on this — the downstream trip always takes less time than the upstream trip. If a timetable shows equal times both ways, something is wrong.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: Still 12, Stream 3 — 45 km Down aur Up',
          '3. Step-by-Step: Still 12, Stream 3 — 45 km Down and Up'
        ),
        body: t(
          `Ab hum worked example karte hain. **Naav ki still water speed 12 km/h hai aur dhaara ki speed 3 km/h hai. 45 km downstream jaane mein aur 45 km upstream aane mein kitna time lagega?**

Step 1: downstream speed nikaalo — downstream = still + stream = 12 + 3 = **15 km/h**. Step 2: upstream speed nikaalo — upstream = still − stream = 12 − 3 = **9 km/h**.

Step 3: downstream time = distance / speed = 45/15 = **3 hours**. Step 4: upstream time = 45/9 = **5 hours**. Dhyaan do: wahi 45 km downstream 3 hours mein aur upstream 5 hours mein tay hota hai — kul round trip 3 + 5 = **8 hours** ka hota hai, 2 × 4 = 8 nahi (4 hours ausat nahi hai, kyunki dono taraf ki speeds alag hain).

Step 5: check karo — downstream speed hamesha upstream se zyada hoti hai, aur downstream time hamesha kam hota hai. Agar ulta aa jaaye toh sign galat hai. Neeche wala code poora hisaab print karta hai.`,
          `Now let us work through an example. **A boat has a still water speed of 12 km/h and the stream speed is 3 km/h. How long will it take to go 45 km downstream and come back 45 km upstream?**

Step 1: find the downstream speed — downstream = still + stream = 12 + 3 = **15 km/h**. Step 2: find the upstream speed — upstream = still − stream = 12 − 3 = **9 km/h**.

Step 3: downstream time = distance / speed = 45/15 = **3 hours**. Step 4: upstream time = 45/9 = **5 hours**. Notice: the same 45 km takes 3 hours downstream and 5 hours upstream — the full round trip is 3 + 5 = **8 hours**, not 2 × 4 = 8 (4 hours is not the average, because the two sides have different speeds).

Step 5: check — downstream speed is always higher than upstream speed, and downstream time is always lower. If it comes out reversed, the sign is wrong. The code below prints the full calculation.`
        ),
        code: {
          title: t(
            'Downstream 15, Upstream 9: 45 km Dono Taraf',
            'Downstream 15, Upstream 9: 45 km Each Way'
          ),
          language: 'python',
          code: `still = 12
stream = 3
down = still + stream
up = still - stream
print("Downstream speed:", down, "km/h")
print("Upstream speed:", up, "km/h")
print("45 km downstream:", 45 / down, "hours")
print("45 km upstream:", 45 / up, "hours")`,
          output: `Downstream speed: 15 km/h
Upstream speed: 9 km/h
45 km downstream: 3.0 hours
45 km upstream: 5.0 hours`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Still Speed se Chalna, Sign Ulta aur Average Speed',
          '4. Common Mistakes: Using Still Speed, Reversed Sign, and Average Speed'
        ),
        body: t(
          `Boats wale sawaalon mein teen galtiyan sabse zyada hoti hain. **Galti 1: Downstream ya upstream ki jagah still water speed se time nikaalna.** 45 km downstream jaane mein 45/12 = 3.75 hours likhna galat hai — sahi speed 15 km/h hai aur time 3 hours hai. Hamesha pehle downstream ya upstream speed nikaalo, phir time.

**Galti 2: Sign ulta kar dena.** Downstream mein plus aur upstream mein minus hota hai. Agar ulta kar diya — downstream = 12 − 3 = 9 — toh downstream time 5 hours aa jaayega, jo galat hai. Yaad rakho: dhaara ke saath jaana tez hota hai, against jaana dheema.

**Galti 3: Round trip ka average speed galat nikaalna.** Downstream 15 aur upstream 9 ka simple average (15 + 9)/2 = 12 nahi hota round trip ki average speed. Sahi average speed harmonic mean hoti hai: 2 × 15 × 9 / (15 + 9) = 270/24 = 11.25 km/h. Kyunki upstream mein zyada time lagta hai, average dheemi taraf jhukta hai.`,
          `Three mistakes are most common in boats questions. **Mistake 1: Using the still water speed instead of the downstream or upstream speed.** Writing 45/12 = 3.75 hours for 45 km downstream is wrong — the correct speed is 15 km/h and the time is 3 hours. Always find the downstream or upstream speed first, then the time.

**Mistake 2: Reversing the sign.** Downstream is plus and upstream is minus. If you reverse them — downstream = 12 − 3 = 9 — the downstream time becomes 5 hours, which is wrong. Remember: going with the current is faster, going against it is slower.

**Mistake 3: Finding the round-trip average speed wrong.** The simple average of downstream 15 and upstream 9, (15 + 9)/2 = 12, is not the round-trip average speed. The correct average speed is the harmonic mean: 2 × 15 × 9 / (15 + 9) = 270/24 = 11.25 km/h. Because upstream takes more time, the average leans towards the slower side.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Stream Zero, Stream Naav se Tez aur Barabar Speed',
          '5. Edge Cases: Zero Stream, Stream Faster Than the Boat, and Equal Speeds'
        ),
        body: t(
          `Edge cases yaad rakho. **1. Stream speed zero ho.** Agar nadi mein dhaara hi nahi hai (jaise talab mein), toh downstream = upstream = still water speed. Dono taraf ka time barabar hoga — yahi still water ka matlab hai.

**2. Stream speed naav ki speed se zyada ho.** Agar still water speed 5 km/h hai aur stream 8 km/h hai, toh upstream speed = 5 − 8 = −3 km/h — negative. Iska matlab hai naav upstream ja hi nahi sakti; dhaara use peeche dhakel degi. Aise sawaal mein jawab hai "upstream jaana impossible hai".

**3. Stream speed naav ki speed ke barabar ho.** Upstream speed zero ho jaayegi — naav jagah par hi khadi rahegi, aage badhegi hi nahi. Time infinite hoga.

**4. Sirf ek taraf ki doori di ho.** Agar sirf downstream doori di hai, toh sirf downstream time nikaalo — upstream ka hisaab mat jodo. Sawaal mein jo poochha hai, wahi nikaalo.`,
          `Remember these edge cases. **1. The stream speed is zero.** If the river has no current (like a pond), downstream = upstream = still water speed. Both sides take equal time — that is what still water means.

**2. The stream speed is greater than the boat speed.** If the still water speed is 5 km/h and the stream is 8 km/h, the upstream speed is 5 − 8 = −3 km/h — negative. That means the boat cannot go upstream at all; the current will push it back. The answer to such a question is "going upstream is impossible".

**3. The stream speed equals the boat speed.** The upstream speed becomes zero — the boat stays in place and never moves forward. The time is infinite.

**4. Only one side distance is given.** If only the downstream distance is given, find only the downstream time — do not add an upstream calculation. Find only what the question asks.`
        )
      },
      {
        heading: t(
          '6. What-If: Stream Double, Sirf Ek Taraf aur Ulta Formula',
          '6. What-If: Double Stream, One Side Only, and the Reverse Formula'
        ),
        body: t(
          `Ab "what-if" sawaal. **What if: stream ki speed double ho jaaye?** Still 12, stream 3 se downstream 15 aur upstream 9 tha. Stream 6 ho jaaye toh downstream = 18 aur upstream = 6 ho jaayega. Downstream time 45/18 = 2.5 hours ho jaayega (kam), aur upstream time 45/6 = 7.5 hours (zyada). Stream badhne se farak aur badhta hai.

**What if: sirf downstream aur upstream speeds di hon?** Downstream 20 km/h aur upstream 12 km/h di hai. Ulta formula lagao: still = (20 + 12)/2 = 16 km/h, stream = (20 − 12)/2 = 4 km/h. Yeh ulta formula exam mein bahut aata hai — dono speeds ka sum aadha karo toh still, difference aadha karo toh stream.

**What if: round trip ka total time poochha ho?** Still 10, stream 2, doori 24 km ek taraf. Downstream speed 12, time 24/12 = 2 hours; upstream speed 8, time 24/8 = 3 hours; kul round trip = 5 hours. Dono taraf ka time alag-alag nikaal kar jodo — ek hi speed se dono taraf ka hisaab mat karo.`,
          `Now some "what-if" questions. **What if the stream speed doubles?** With still 12 and stream 3, downstream was 15 and upstream 9. If the stream becomes 6, downstream becomes 18 and upstream 6. Downstream time becomes 45/18 = 2.5 hours (less), and upstream time 45/6 = 7.5 hours (more). A stronger stream widens the gap.

**What if only the downstream and upstream speeds are given?** Downstream is 20 km/h and upstream is 12 km/h. Use the reverse formula: still = (20 + 12)/2 = 16 km/h, stream = (20 − 12)/2 = 4 km/h. This reverse formula appears very often in exams — halve the sum of both speeds for still water, halve the difference for the stream.

**What if the total round-trip time is asked?** Still 10, stream 2, distance 24 km one way. Downstream speed is 12, time 24/12 = 2 hours; upstream speed is 8, time 24/8 = 3 hours; total round trip = 5 hours. Find each side time separately and add them — do not calculate both sides with one speed.`
        )
      },
      {
        heading: t(
          '7. Summary: Boats & Streams ka Poora Picture',
          '7. Summary: The Full Picture of Boats & Streams'
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. **Downstream = still + stream**, **upstream = still − stream**. Ulta: **still = (down + up)/2**, **stream = (down − up)/2**. Upar wale example mein still 12 aur stream 3 se downstream 15, upstream 9 bana, aur 45 km downstream 3 hours mein aur upstream 5 hours mein tay hua.

Round trip mein dono taraf ka time **alag-alag** nikaal kar jodo — kabhi ek hi speed se dono taraf ka hisaab mat karo. Average speed simple average nahi hoti, harmonic mean hoti hai: 15 aur 9 ke liye 11.25 km/h. Aur pehle check karo ki upstream speed positive hai ya nahi — agar stream naav se tez hai, toh upstream jaana impossible hai.

Revision ke liye yeh yaad rakho: pehle poochho — downstream hai ya upstream? Phir speed nikaalo, phir time. Practice wala problem solve karo — still 14, stream 4 mein downstream 18 (90 km = 5 hours) aur upstream 10 (90 km = 9 hours), kul round trip 14 hours aana chahiye.`,
          `Let us tie the whole article together. **Downstream = still + stream**, **upstream = still − stream**. In reverse: **still = (down + up)/2**, **stream = (down − up)/2**. In the example above, still 12 and stream 3 gave downstream 15 and upstream 9, and 45 km took 3 hours downstream and 5 hours upstream.

On a round trip, find each side time **separately** and add them — never calculate both sides with one speed. The average speed is not the simple average; it is the harmonic mean: 11.25 km/h for 15 and 9. And first check whether the upstream speed is positive — if the stream is faster than the boat, going upstream is impossible.

For revision, remember this: first ask — is it downstream or upstream? Then find the speed, then the time. Solve the practice problem — with still 14 and stream 4, downstream is 18 (90 km = 5 hours) and upstream is 10 (90 km = 9 hours), so the total round trip should be 14 hours.`
        )
      }
    ],
    diagram: {
      kind: 'boxes',
      title: t(
        'Boats & Streams ke Chaar Speeds',
        'The Four Speeds of Boats & Streams'
      ),
      caption: t(
        'Do speeds di hon toh baaki do ulta formula se nikal jaati hain',
        'If two speeds are given, the other two come from the reverse formula'
      ),
      nodes: [
        {
          t: t('Still water speed: naav ki apni speed', 'Still water speed: the boat own speed'),
          s: t('Bina dhaara ke paani mein speed', 'Speed in water without a current')
        },
        {
          t: t('Stream speed: dhaara ki speed', 'Stream speed: the current speed'),
          s: t('Nadi kitni tez beh rahi hai', 'How fast the river is flowing')
        },
        {
          t: t('Downstream = still + stream', 'Downstream = still + stream'),
          s: t('12 + 3 = 15 km/h — tez', '12 + 3 = 15 km/h — faster')
        },
        {
          t: t('Upstream = still - stream', 'Upstream = still - stream'),
          s: t('12 - 3 = 9 km/h — dheema', '12 - 3 = 9 km/h — slower')
        },
        {
          t: t('Ulta: still = (down + up)/2, stream = (down - up)/2', 'Reverse: still = (down + up)/2, stream = (down - up)/2'),
          s: t('(20 + 12)/2 = 16, (20 - 12)/2 = 4', '(20 + 12)/2 = 16, (20 - 12)/2 = 4')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          'Ulta Formula: Down 20, Up 12 se Still aur Stream',
          'Reverse Formula: Still and Stream from Down 20 and Up 12'
        ),
        language: 'python',
        code: `down, up = 20, 12
still = (down + up) / 2
stream = (down - up) / 2
print("Still water speed:", still, "km/h")
print("Stream speed:", stream, "km/h")`,
        output: `Still water speed: 16.0 km/h
Stream speed: 4.0 km/h`
      },
      {
        title: t(
          'Round Trip: 24 km Down aur 24 km Up',
          'Round Trip: 24 km Down and 24 km Up'
        ),
        language: 'python',
        code: `# Still 10 km/h, stream 2 km/h, 24 km down and back
down = 10 + 2
up = 10 - 2
print("Down:", 24 / down, "hours, Up:", 24 / up, "hours")
print("Round trip:", 24 / down + 24 / up, "hours")`,
        output: `Down: 2.0 hours, Up: 3.0 hours
Round trip: 5.0 hours`
      }
    ],
    mcqs: [
      {
        q: t(
          'Naav ki still water speed 15 km/h hai aur dhaara ki speed 5 km/h hai. Downstream speed kya hogi?',
          'A boat has a still water speed of 15 km/h and the stream speed is 5 km/h. What is the downstream speed?'
        ),
        opts: [
          t('10 km/h', '10 km/h'),
          t('15 km/h', '15 km/h'),
          t('20 km/h', '20 km/h'),
          t('25 km/h', '25 km/h')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: downstream = still + stream = 15 + 5 = 20 km/h.',
          'Correct answer: downstream = still + stream = 15 + 5 = 20 km/h.'
        )
      },
      {
        q: t(
          'Downstream speed 18 km/h aur upstream speed 10 km/h hai. Dhaara ki speed kya hai?',
          'The downstream speed is 18 km/h and the upstream speed is 10 km/h. What is the stream speed?'
        ),
        opts: [
          t('2 km/h', '2 km/h'),
          t('4 km/h', '4 km/h'),
          t('8 km/h', '8 km/h'),
          t('14 km/h', '14 km/h')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: stream = (downstream - upstream) / 2 = (18 - 10) / 2 = 4 km/h.',
          'Correct answer: stream = (downstream - upstream) / 2 = (18 - 10) / 2 = 4 km/h.'
        )
      },
      {
        q: t(
          'Naav ki still water speed 8 km/h hai aur dhaara ki speed 2 km/h hai. 30 km downstream jaane mein kitna time lagega?',
          'A boat has a still water speed of 8 km/h and the stream speed is 2 km/h. How long will it take to go 30 km downstream?'
        ),
        opts: [
          t('2 hours', '2 hours'),
          t('3 hours', '3 hours'),
          t('4 hours', '4 hours'),
          t('5 hours', '5 hours')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: downstream = 8 + 2 = 10 km/h, time = 30/10 = 3 hours.',
          'Correct answer: downstream = 8 + 2 = 10 km/h, so time = 30/10 = 3 hours.'
        )
      },
      {
        q: t(
          'Downstream speed 24 km/h aur upstream speed 16 km/h hai. Naav ki still water speed kya hai?',
          'The downstream speed is 24 km/h and the upstream speed is 16 km/h. What is the boat still water speed?'
        ),
        opts: [
          t('4 km/h', '4 km/h'),
          t('10 km/h', '10 km/h'),
          t('20 km/h', '20 km/h'),
          t('40 km/h', '40 km/h')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: still = (downstream + upstream) / 2 = (24 + 16) / 2 = 20 km/h.',
          'Correct answer: still = (downstream + upstream) / 2 = (24 + 16) / 2 = 20 km/h.'
        )
      },
      {
        q: t(
          'Ek taraf ki doori 36 km hai. Downstream speed 12 km/h aur upstream speed 8 km/h hai. Round trip mein kul kitna time lagega?',
          'The one-way distance is 36 km. The downstream speed is 12 km/h and the upstream speed is 8 km/h. What is the total round-trip time?'
        ),
        opts: [
          t('6 hours', '6 hours'),
          t('7.5 hours', '7.5 hours'),
          t('8 hours', '8 hours'),
          t('9 hours', '9 hours')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: downstream time = 36/12 = 3 hours, upstream time = 36/8 = 4.5 hours, kul = 3 + 4.5 = 7.5 hours.',
          'Correct answer: downstream time = 36/12 = 3 hours, upstream time = 36/8 = 4.5 hours, so the total is 3 + 4.5 = 7.5 hours.'
        )
      }
    ],
    keyNotes: [
      t(
        'Downstream = still + stream; upstream = still - stream.',
        'Downstream = still + stream; upstream = still - stream.'
      ),
      t(
        'Ulta: still = (down + up)/2; stream = (down - up)/2.',
        'In reverse: still = (down + up)/2; stream = (down - up)/2.'
      ),
      t(
        'Round trip mein dono taraf ka time alag-alag nikaal kar jodo.',
        'On a round trip, find each side time separately and add them.'
      ),
      t(
        'Average speed simple average nahi hoti — harmonic mean hoti hai.',
        'The average speed is not the simple average — it is the harmonic mean.'
      ),
      t(
        'Agar stream naav se tez hai toh upstream jaana impossible hai (speed negative).',
        'If the stream is faster than the boat, going upstream is impossible (negative speed).'
      )
    ],
    practice: {
      title: t(
        'Practice: Still 14, Stream 4 — 90 km Down aur Up',
        'Practice: Still 14, Stream 4 — 90 km Down and Up'
      ),
      task: t(
        'Naav ki still water speed 14 km/h hai aur dhaara ki speed 4 km/h hai. 90 km downstream jaane mein aur 90 km upstream aane mein kitna time lagega, aur kul round trip kitna hoga? Starter code run karo aur done tab maanoge jab output mein downstream 5.0 hours, upstream 9.0 hours aur total 14.0 hours dikhe.',
        'A boat has a still water speed of 14 km/h and the stream speed is 4 km/h. How long will it take to go 90 km downstream and come back 90 km upstream, and what is the total round-trip time? Run the starter code; you are done when the output shows downstream 5.0 hours, upstream 9.0 hours, and the total 14.0 hours.'
      ),
      language: 'python',
      starter: `still, stream = 14, 4
down = still + stream
up = still - stream
print("Downstream:", down, "km/h, Upstream:", up, "km/h")
print("90 km downstream:", 90 / down, "hours")
print("90 km upstream:", 90 / up, "hours")
print("Total round trip:", 90 / down + 90 / up, "hours")`,
      expected: `Downstream: 18 km/h, Upstream: 10 km/h
90 km downstream: 5.0 hours
90 km upstream: 9.0 hours
Total round trip: 14.0 hours`
    },
    readMinutes: 12
  };

const quantClockCalendar: Article = {
    id: 'quant-clock-calendar',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Clocks & Calendars — Angles, Odd Days aur Leap Year',
      'Clocks & Calendars — Angles, Odd Days, and Leap Year'
    ),
    summary: t(
      'Ghadi ki suiyaan: minute hand 6 degree per minute, hour hand 0.5 degree per minute. Calendar: odd days gin kar kisi bhi date ka din nikaalo — 100 saal mein 5, 200 mein 3, 300 mein 1 aur 400 mein 0 odd days.',
      'Clock hands: the minute hand moves 6 degrees per minute, the hour hand 0.5 degrees per minute. Calendar: count odd days to find the weekday of any date — 100 years have 5, 200 have 3, 300 have 1, and 400 have 0 odd days.'
    ),
    sections: [
      {
        heading: t(
          '1. Clocks & Calendars Kya Hai? (Angle aur Odd Days)',
          '1. What Are Clocks & Calendars? (Angle and Odd Days)'
        ),
        body: t(
          `Is article mein do topics hain: ghadi (clock) aur calendar. **Ghadi mein** do suiyaan hoti hain — hour hand (chhoti) aur minute hand (badi). Minute hand 1 minute mein 6 degree chalti hai (360 degree / 60 minutes), aur hour hand 1 minute mein 0.5 degree chalti hai (30 degree per hour / 60 minutes). Kisi bhi time par dono suiyaan ke beech ka angle in dono speeds se nikalta hai.

**Calendar mein** main idea hai **odd days**. Ek week mein 7 din hote hain, isliye kisi bhi period mein 7 se divide karne par jo remainder bachta hai, wahi odd days hote hain. Normal year mein 365 din hote hain — 365 ÷ 7 = 52 weeks aur 1 din bachta hai, isliye normal year mein **1 odd day** hota hai. Leap year mein 366 din hote hain, isliye **2 odd days** hote hain.

Odd days se hi pata chalta hai ki kisi date ka din kya tha. Agar aaj Monday hai aur 10 din baad ka din poochha ho, toh 10 ÷ 7 = 1 week aur 3 din bachte hain, isliye 10 din baad Thursday hoga. Yahi odd days ka tareeka har calendar sawaal mein chalta hai.`,
          `This article covers two topics: clocks and calendars. **In a clock** there are two hands — the hour hand (short) and the minute hand (long). The minute hand moves 6 degrees per minute (360 degrees / 60 minutes), and the hour hand moves 0.5 degrees per minute (30 degrees per hour / 60 minutes). The angle between the two hands at any time comes from these two speeds.

**In a calendar** the main idea is **odd days**. A week has 7 days, so when any period is divided by 7, the remainder left is the odd days. A normal year has 365 days — 365 ÷ 7 = 52 weeks with 1 day left over, so a normal year has **1 odd day**. A leap year has 366 days, so it has **2 odd days**.

Odd days tell you the weekday of any date. If today is Monday and you are asked about the day 10 days later, 10 ÷ 7 = 1 week with 3 days left over, so 10 days later it will be Thursday. This odd-days method runs through every calendar question.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Meeting ka Time, Birthday aur Exam Date',
          '2. Real-Life Examples: Meeting Time, Birthday, and Exam Date'
        ),
        body: t(
          `Ghadi aur calendar roz kaam aate hain. **Meeting ka time** dekh kar aap kehte ho "3 baje milte hain" — aur ghadi ki suiyaan 3:00 par 90 degree ka angle banati hain. Yeh angle dekh kar bhi time ka andaza lagaya ja sakta hai, aur exam mein yahi poochha jaata hai.

**Birthday ka din** nikaalna calendar ka sabse mazedaar use hai. Agar aapka birthday 2025 mein Friday ko tha, toh 2026 mein kaunse din hoga? 2025 normal year hai (1 odd day), isliye birthday ek din aage badh kar Saturday hoga. Har normal year birthday ek din aage badhta hai, leap year ke baad do din.

**Exam date** ka din nikaalna bhi yahi hisaab hai. Agar 1 January 2024 Monday tha, toh 15 August 2026 ka din odd days gin kar nikaala ja sakta hai — bina calendar dekhe. Yahi skill exam mein kaam aati hai.`,
          `Clocks and calendars are used every day. When you look at a **meeting time** and say "let us meet at 3", the clock hands at 3:00 make a 90 degree angle. You can even guess the time from that angle, and that is exactly what exams ask.

Finding the **weekday of a birthday** is the most fun use of a calendar. If your birthday was on a Friday in 2025, what day will it be in 2026? 2025 is a normal year (1 odd day), so the birthday moves one day forward to Saturday. Every normal year pushes a birthday one day forward, and two days after a leap year.

Finding the weekday of an **exam date** is the same calculation. If 1 January 2024 was a Monday, the weekday of 15 August 2026 can be found by counting odd days — without looking at a calendar. That is the skill exams test.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: 4:20 ka Angle 10 Degree aur 1 Jan 2000 Saturday',
          '3. Step-by-Step: The 4:20 Angle Is 10 Degrees, and 1 Jan 2000 Was a Saturday'
        ),
        body: t(
          `Ab hum worked example karte hain. **Example 1: 4:20 par ghadi ki suiyaan ke beech ka angle kya hai?** Step 1: hour hand ki position nikaalo — hour hand 1 hour mein 30 degree chalti hai, isliye 4 hours mein 4 × 30 = 120 degree, plus 20 minutes mein 20 × 0.5 = 10 degree — kul 130 degree. Step 2: minute hand ki position — 20 minutes × 6 = 120 degree. Step 3: farak nikaalo — |130 − 120| = **10 degree**. Dhyaan do: hour hand sirf 4 par nahi hoti, woh 4 se 5 ki taraf 20 minutes badh chuki hoti hai — yahi 10 degree ka farak hai.

**Example 2: 3:00 par angle kya hai?** Hour hand 3 × 30 = 90 degree par, minute hand 0 degree par (12 par). Farak = |90 − 0| = **90 degree**. Yahi sabse aasan angle hai — 3:00 aur 9:00 par suiyaan hamesha 90 degree par hoti hain.

**Example 3: 1 January 2000 ka din kya tha?** Yeh ek standard fact hai jo odd days se verify hota hai: 1 January 2000 **Saturday** tha. Is date ko base bana kar aas-paas ki dates ke din nikaale ja sakte hain. Neeche wala code angle aur date dono compute karta hai.`,
          `Now let us work through examples. **Example 1: What is the angle between the clock hands at 4:20?** Step 1: find the hour hand position — the hour hand moves 30 degrees per hour, so in 4 hours it moves 4 × 30 = 120 degrees, plus in 20 minutes it moves 20 × 0.5 = 10 degrees — 130 degrees in total. Step 2: the minute hand position — 20 minutes × 6 = 120 degrees. Step 3: find the difference — |130 − 120| = **10 degrees**. Notice: the hour hand is not exactly on 4; it has already moved 20 minutes towards 5 — that is where the 10 degree difference comes from.

**Example 2: What is the angle at 3:00?** The hour hand is at 3 × 30 = 90 degrees, and the minute hand is at 0 degrees (on 12). The difference is |90 − 0| = **90 degrees**. This is the easiest angle — at 3:00 and 9:00 the hands are always at 90 degrees.

**Example 3: What day was 1 January 2000?** This is a standard fact that odd days verify: 1 January 2000 was a **Saturday**. Using this date as a base, the weekdays of nearby dates can be found. The code below computes both the angle and the date.`
        ),
        code: {
          title: t(
            '4:20 ka Angle aur 1 January 2000 ka Din',
            'The 4:20 Angle and the Weekday of 1 January 2000'
          ),
          language: 'python',
          code: `# 4:20 par ghadi ki suiyaan
hour_angle = 4 * 30 + 20 * 0.5
minute_angle = 20 * 6
print("Hour hand:", hour_angle, "degrees")
print("Minute hand:", minute_angle, "degrees")
print("Angle between hands:", abs(hour_angle - minute_angle), "degrees")
# 3:00
print("Angle at 3:00:", abs(3 * 30 - 0), "degrees")
from datetime import date
print("1 January 2000 was a", date(2000, 1, 1).strftime("%A"))`,
          output: `Hour hand: 130.0 degrees
Minute hand: 120 degrees
Angle between hands: 10.0 degrees
Angle at 3:00: 90 degrees
1 January 2000 was a Saturday`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Hour Hand ka Minute Shift, Bada Angle aur Leap Year',
          '4. Common Mistakes: The Hour Hand Minute Shift, the Bigger Angle, and Leap Year'
        ),
        body: t(
          `Clock aur calendar mein teen galtiyan sabse zyada hoti hain. **Galti 1: Hour hand ka minute shift bhool jana.** 4:20 par hour hand ko seedha 4 × 30 = 120 degree par maan lena galat hai — woh 20 minutes mein 10 degree aur badh chuki hoti hai, kul 130 degree. Angle 10 degree aata hai, 0 nahi. Har angle wale sawaal mein hour hand mein minutes × 0.5 jodna zaroori hai.

**Galti 2: Bada angle jawab mein likh dena.** Agar farak 270 degree aa raha hai, toh sahi angle 360 − 270 = 90 degree hota hai — hamesha **chhota angle** (180 se kam ya barabar) maanga jaata hai, jab tak sawaal mein "reflex angle" na likha ho. Farak nikaal kar check karo: agar 180 se zyada hai, toh 360 se subtract karo.

**Galti 3: Leap year ka rule galat lagana.** Har 4 se divide hone wala saal leap nahi hota — century saal (jaise 1900) leap tabhi hota hai jab 400 se divide ho. 1900 leap year nahi hai, par 2000 leap year hai. Odd days ginte waqt 1900 ko normal year (1 odd day) ginna hai, leap (2 odd days) nahi.`,
          `Three mistakes are most common in clock and calendar questions. **Mistake 1: Forgetting the hour hand minute shift.** At 4:20, taking the hour hand as exactly 4 × 30 = 120 degrees is wrong — in 20 minutes it has moved 10 more degrees, to 130 degrees in total. The angle is 10 degrees, not 0. In every angle question, minutes × 0.5 must be added to the hour hand.

**Mistake 2: Writing the bigger angle as the answer.** If the difference comes out as 270 degrees, the correct angle is 360 − 270 = 90 degrees — the **smaller angle** (180 or less) is always asked, unless the question says "reflex angle". After finding the difference, check: if it is more than 180, subtract it from 360.

**Mistake 3: Applying the leap year rule wrong.** Not every year divisible by 4 is a leap year — a century year (like 1900) is a leap year only when it is divisible by 400. 1900 is not a leap year, but 2000 is. When counting odd days, 1900 counts as a normal year (1 odd day), not a leap year (2 odd days).`
        )
      },
      {
        heading: t(
          '5. Edge Cases: 12:00, Hands Overlap aur 29 February',
          '5. Edge Cases: 12:00, Hands Overlapping, and 29 February'
        ),
        body: t(
          `Edge cases yaad rakho. **1. 12:00 par angle 0 hai.** Dono suiyaan 12 par hoti hain, farak 0 degree. Yahi ek time hai jab dono suiyaan bilkul overlap karti hain — iske alawa 12 hours mein 11 baar overlap hota hai (lagbhag har 65 5/11 minutes mein ek baar).

**2. Hands 11 baar overlap karti hain.** 12 hours mein suiyaan 11 baar ek doosre par aati hain, 12 baar nahi — kyunki 11:00 ke baad wala overlap seedha 12:00 par hota hai. 24 hours mein 22 baar overlap hota hai. Exam mein "kitni baar" wale sawaal mein yahi 11 yaad rakho.

**3. 29 February sirf leap year mein hoti hai.** Agar sawaal mein 29 February 2023 ka din poochha ho, toh sawaal hi galat hai — 2023 leap year nahi hai. Pehle check karo ki date exist karti hai ya nahi.

**4. 400 saal mein 0 odd days.** 400 saal ka cycle poora hone par calendar wapas wahi din par aa jaata hai — isliye 1 January 2000 Saturday tha toh 1 January 2400 bhi Saturday hoga.`,
          `Remember these edge cases. **1. At 12:00 the angle is 0.** Both hands are on 12, so the difference is 0 degrees. This is one time when both hands exactly overlap — apart from this, they overlap 11 times in 12 hours (about once every 65 5/11 minutes).

**2. The hands overlap 11 times.** In 12 hours the hands meet 11 times, not 12 — because the overlap after 11:00 falls exactly on 12:00. In 24 hours they overlap 22 times. In "how many times" exam questions, remember this 11.

**3. 29 February exists only in a leap year.** If a question asks the weekday of 29 February 2023, the question itself is wrong — 2023 is not a leap year. First check whether the date exists at all.

**4. 400 years have 0 odd days.** After a full 400-year cycle, the calendar returns to the same weekday — so if 1 January 2000 was a Saturday, 1 January 2400 will also be a Saturday.`
        )
      },
      {
        heading: t(
          '6. What-If: 6 ke Baad ka Time, 1900 Leap Nahi aur 7:30 ka Angle',
          '6. What-If: Time After 6, 1900 Is Not a Leap Year, and the 7:30 Angle'
        ),
        body: t(
          `Ab "what-if" sawaal. **What if: time 6 ke baad ho?** 7:30 par hour hand = 7 × 30 + 30 × 0.5 = 210 + 15 = 225 degree, minute hand = 30 × 6 = 180 degree, farak = |225 − 180| = **45 degree**. Formula wahi hai, bas hour hand 180 se upar chala gaya hai — isse ghabrana nahi hai.

**What if: saal 1900 ho?** 1900 ko 4 se divide karne par 475 aata hai, par 1900 ko 400 se divide karne par remainder bachta hai, isliye 1900 **leap year nahi hai**. Odd days ginte waqt 1900 ko normal year gino (1 odd day). 2000 ko 400 se divide karne par 5 aata hai, isliye 2000 leap year hai (2 odd days).

**What if: odd days 100 saal ke liye poochhe hon?** 100 saal mein 76 normal years (76 × 1 = 76 odd days) aur 24 leap years (24 × 2 = 48 odd days) hote hain — kul 124 odd days, 124 ÷ 7 = 17 weeks aur 5 din bachte hain, isliye **5 odd days**. 200 saal mein 3, 300 saal mein 1, aur 400 saal mein 0 odd days hote hain.`,
          `Now some "what-if" questions. **What if the time is after 6?** At 7:30, the hour hand is 7 × 30 + 30 × 0.5 = 210 + 15 = 225 degrees, the minute hand is 30 × 6 = 180 degrees, and the difference is |225 − 180| = **45 degrees**. The formula is the same; the hour hand has just gone past 180 — there is nothing to fear in that.

**What if the year is 1900?** 1900 divides by 4 to give 475, but dividing 1900 by 400 leaves a remainder, so 1900 is **not a leap year**. When counting odd days, count 1900 as a normal year (1 odd day). Dividing 2000 by 400 gives 5, so 2000 is a leap year (2 odd days).

**What if odd days are asked for 100 years?** 100 years have 76 normal years (76 × 1 = 76 odd days) and 24 leap years (24 × 2 = 48 odd days) — 124 odd days in total, and 124 ÷ 7 = 17 weeks with 5 days left over, so **5 odd days**. 200 years have 3, 300 years have 1, and 400 years have 0 odd days.`
        )
      },
      {
        heading: t(
          '7. Summary: Clocks & Calendars ka Poora Picture',
          '7. Summary: The Full Picture of Clocks & Calendars'
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. **Ghadi:** minute hand 6 degree per minute, hour hand 0.5 degree per minute. Angle = |(hour × 30 + minutes × 0.5) − (minutes × 6)|, aur agar jawab 180 se zyada aaye toh 360 se subtract karo. 4:20 par angle 10 degree, 3:00 par 90 degree, 7:30 par 45 degree.

**Calendar:** normal year = 1 odd day, leap year = 2 odd days. Century saal leap tabhi hota hai jab 400 se divide ho (2000 haan, 1900 naa). 100 saal mein 5, 200 mein 3, 300 mein 1, aur 400 mein 0 odd days hote hain. 1 January 2000 Saturday tha — is base date se aas-paas ki dates ke din nikaale ja sakte hain.

Revision ke liye yeh yaad rakho: angle wale sawaal mein hour hand ka minute shift kabhi mat bhoolo, aur calendar wale sawaal mein pehle leap year check karo. Practice mein 5:40 ka angle 70 degree aur 15 August 2026 Saturday aana chahiye.`,
          `Let us tie the whole article together. **Clock:** the minute hand moves 6 degrees per minute, the hour hand 0.5 degrees per minute. Angle = |(hour × 30 + minutes × 0.5) − (minutes × 6)|, and if the answer is more than 180, subtract it from 360. At 4:20 the angle is 10 degrees, at 3:00 it is 90 degrees, and at 7:30 it is 45 degrees.

**Calendar:** a normal year has 1 odd day, a leap year has 2 odd days. A century year is a leap year only when it divides by 400 (2000 yes, 1900 no). 100 years have 5 odd days, 200 have 3, 300 have 1, and 400 have 0. 1 January 2000 was a Saturday — nearby dates can be found from this base date.

For revision, remember this: in angle questions never forget the hour hand minute shift, and in calendar questions first check the leap year. In the practice, the 5:40 angle should be 70 degrees and 15 August 2026 a Saturday.`
        )
      }
    ],
    diagram: {
      kind: 'table',
      title: t(
        'Odd Days Table: 100 se 400 Saal Tak',
        'Odd Days Table: From 100 to 400 Years'
      ),
      caption: t(
        '100 saal mein 76 normal + 24 leap years hote hain; 400 saal ka cycle 0 odd days par wapas aata hai',
        '100 years have 76 normal + 24 leap years; the 400-year cycle returns to 0 odd days'
      ),
      nodes: [],
      headers: [
        t('Period', 'Period'),
        t('Normal years', 'Normal years'),
        t('Leap years', 'Leap years'),
        t('Odd days', 'Odd days')
      ],
      rows: [
        [t('100 saal', '100 years'), t('76', '76'), t('24', '24'), t('5', '5')],
        [t('200 saal', '200 years'), t('152', '152'), t('48', '48'), t('3', '3')],
        [t('300 saal', '300 years'), t('228', '228'), t('72', '72'), t('1', '1')],
        [t('400 saal', '400 years'), t('303', '303'), t('97', '97'), t('0', '0')]
      ]
    },
    codeExamples: [
      {
        title: t(
          '7:30 ka Angle: Hour Hand 225 Degree',
          'The 7:30 Angle: Hour Hand at 225 Degrees'
        ),
        language: 'python',
        code: `# 7:30 angle
hour = 7 * 30 + 30 * 0.5
minute = 30 * 6
print("Hour hand:", hour, "degrees, Minute hand:", minute, "degrees")
print("Angle:", abs(hour - minute), "degrees")`,
        output: `Hour hand: 225.0 degrees, Minute hand: 180 degrees
Angle: 45.0 degrees`
      },
      {
        title: t(
          'Odd Days: 100, 200, 300 aur 400 Saal',
          'Odd Days: 100, 200, 300, and 400 Years'
        ),
        language: 'python',
        code: `# Odd days: normal year 1, leap year 2
print("Odd days in 100 years:", (76 + 24 * 2) % 7)
print("Odd days in 200 years:", (152 + 48 * 2) % 7)
print("Odd days in 300 years:", (228 + 72 * 2) % 7)
print("Odd days in 400 years:", (303 + 97 * 2) % 7)`,
        output: `Odd days in 100 years: 5
Odd days in 200 years: 3
Odd days in 300 years: 1
Odd days in 400 years: 0`
      }
    ],
    mcqs: [
      {
        q: t(
          '6:00 par ghadi ki suiyaan ke beech ka angle kya hai?',
          'What is the angle between the clock hands at 6:00?'
        ),
        opts: [
          t('90 degree', '90 degrees'),
          t('120 degree', '120 degrees'),
          t('180 degree', '180 degrees'),
          t('0 degree', '0 degrees')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: hour hand 6 x 30 = 180 degree par aur minute hand 0 par, farak = 180 degree (suiyaan ulta seedha mein hoti hain).',
          'Correct answer: the hour hand is at 6 x 30 = 180 degrees and the minute hand at 0, so the difference is 180 degrees (the hands point in opposite directions).'
        )
      },
      {
        q: t(
          'Ghadi ki suiyaan kitne time baad ek doosre par aati hain (overlap karti hain)?',
          'After how much time do the clock hands come together (overlap)?'
        ),
        opts: [
          t('Har 60 minutes mein', 'Every 60 minutes'),
          t('Har 65 5/11 minutes mein', 'Every 65 5/11 minutes'),
          t('Har 90 minutes mein', 'Every 90 minutes'),
          t('Har 30 minutes mein', 'Every 30 minutes')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: minute hand hour hand se 5.5 degree per minute (11/2) tez chalti hai, isliye 360 degree ka gap 360/5.5 = 720/11 = 65 5/11 minutes mein bhar jaata hai.',
          'Correct answer: the minute hand moves 5.5 degrees per minute (11/2) faster than the hour hand, so a 360 degree gap closes in 360/5.5 = 720/11 = 65 5/11 minutes.'
        )
      },
      {
        q: t(
          '1 January 2024 ka din kya tha?',
          'What day was 1 January 2024?'
        ),
        opts: [
          t('Saturday', 'Saturday'),
          t('Sunday', 'Sunday'),
          t('Monday', 'Monday'),
          t('Tuesday', 'Tuesday')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: 1 January 2023 Sunday tha aur 2023 normal year hai (1 odd day), isliye 1 January 2024 Monday hua.',
          'Correct answer: 1 January 2023 was a Sunday and 2023 is a normal year (1 odd day), so 1 January 2024 was a Monday.'
        )
      },
      {
        q: t(
          '300 saal mein kitne odd days hote hain?',
          'How many odd days are there in 300 years?'
        ),
        opts: [
          t('0', '0'),
          t('1', '1'),
          t('3', '3'),
          t('5', '5')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 300 saal mein 228 normal + 72 leap years hote hain, kul 228 + 144 = 372 din, 372 % 7 = 1 odd day.',
          'Correct answer: 300 years have 228 normal + 72 leap years, 228 + 144 = 372 days in total, and 372 % 7 = 1 odd day.'
        )
      },
      {
        q: t(
          '12 hours mein ghadi ki suiyaan kitni baar ek doosre par aati hain (overlap karti hain)?',
          'How many times do the clock hands overlap in 12 hours?'
        ),
        opts: [
          t('10 baar', '10 times'),
          t('11 baar', '11 times'),
          t('12 baar', '12 times'),
          t('13 baar', '13 times')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 12 hours mein 11 baar overlap hota hai — 11:00 ke baad wala overlap seedha 12:00 par hota hai, isliye 12 nahi, 11 baar.',
          'Correct answer: they overlap 11 times in 12 hours — the overlap after 11:00 falls exactly on 12:00, so it is 11 times, not 12.'
        )
      }
    ],
    keyNotes: [
      t(
        'Minute hand 6 degree/minute, hour hand 0.5 degree/minute; hour hand mein minutes x 0.5 jodna mat bhoolo.',
        'The minute hand moves 6 degrees/minute, the hour hand 0.5 degrees/minute; never forget to add minutes x 0.5 to the hour hand.'
      ),
      t(
        'Angle 180 se zyada aaye toh 360 se subtract karo — hamesha chhota angle maanga jaata hai.',
        'If the angle is more than 180, subtract it from 360 — the smaller angle is always asked.'
      ),
      t(
        'Normal year = 1 odd day, leap year = 2 odd days; century saal leap tabhi jab 400 se divide ho.',
        'A normal year has 1 odd day, a leap year 2 odd days; a century year is a leap year only when it divides by 400.'
      ),
      t(
        'Odd days: 100 saal = 5, 200 saal = 3, 300 saal = 1, 400 saal = 0.',
        'Odd days: 100 years = 5, 200 years = 3, 300 years = 1, 400 years = 0.'
      ),
      t(
        '1 January 2000 Saturday tha; suiyaan 12 hours mein 11 baar overlap karti hain.',
        '1 January 2000 was a Saturday; the hands overlap 11 times in 12 hours.'
      )
    ],
    practice: {
      title: t(
        'Practice: 5:40 ka Angle aur 15 August 2026 ka Din',
        'Practice: The 5:40 Angle and the Weekday of 15 August 2026'
      ),
      task: t(
        '5:40 par ghadi ki suiyaan ke beech ka angle nikaalo aur 15 August 2026 ka din batao. Starter code run karo aur done tab maanoge jab output mein angle 70.0 degrees aur 15 August 2026 Saturday dikhe.',
        'Find the angle between the clock hands at 5:40 and the weekday of 15 August 2026. Run the starter code; you are done when the output shows the angle as 70.0 degrees and 15 August 2026 as a Saturday.'
      ),
      language: 'python',
      starter: `# 5:40 angle + 15 August 2026 ka din
hour = 5 * 30 + 40 * 0.5
minute = 40 * 6
angle = abs(hour - minute)
print("Hour hand:", hour, "degrees, Minute hand:", minute, "degrees")
print("Angle at 5:40:", angle, "degrees")
from datetime import date
print("15 August 2026 is a", date(2026, 8, 15).strftime("%A"))`,
      expected: `Hour hand: 170.0 degrees, Minute hand: 240 degrees
Angle at 5:40: 70.0 degrees
15 August 2026 is a Saturday`
    },
    readMinutes: 12
  };

const quantGeometry: Article = {
    id: 'quant-geometry',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Geometry — Triangles, Circles aur Angles',
      'Geometry — Triangles, Circles, and Angles'
    ),
    summary: t(
      'Triangle ke angles ka sum 180 degree, circle ka area pi r square aur circumference 2 pi r, aur Pythagoras theorem: 3-4-5 triangle. Radius aur diameter ko milana is chapter ki sabse badi trap hai.',
      'A triangle angles add up to 180 degrees, a circle area is pi r squared and its circumference is 2 pi r, and the Pythagoras theorem: the 3-4-5 triangle. Mixing up radius and diameter is the biggest trap in this chapter.'
    ),
    sections: [
      {
        heading: t(
          '1. Geometry Kya Hai? (Angles, Triangle aur Circle)',
          '1. What Is Geometry? (Angles, Triangle, and Circle)'
        ),
        body: t(
          `Geometry aakaar (shapes) aur unke angles, lengths aur areas ka hisaab hai. Is article mein teen cheezein hain: **angles**, **triangles** aur **circles**. Sabse pehla rule hai: triangle ke teeno angles ka sum hamesha **180 degree** hota hai. Agar do angles pata hon, toh teesra angle = 180 − (pehla + doosra).

**Circle** mein do cheezein yaad rakho: **radius (r)** centre se edge tak ki doori hai, aur **diameter (d)** poori chaudaai hai — diameter = 2 × radius. Circle ka **area = pi × r²** aur **circumference (paridhi) = 2 × pi × r** hota hai. Exam mein pi ki value aksar 22/7 di jaati hai, taaki hisaab saaf aaye.

**Pythagoras theorem** right triangle ke liye hai: agar right triangle ki do chhoti sides a aur b hon aur sabse lambi side (hypotenuse) c ho, toh **a² + b² = c²**. Sabse famous example hai 3-4-5 triangle: 3² + 4² = 9 + 16 = 25 = 5².`,
          `Geometry is the study of shapes and their angles, lengths, and areas. This article covers three things: **angles**, **triangles**, and **circles**. The first rule is: the three angles of a triangle always add up to **180 degrees**. If two angles are known, the third angle = 180 − (first + second).

In a **circle**, remember two things: the **radius (r)** is the distance from the centre to the edge, and the **diameter (d)** is the full width — diameter = 2 × radius. A circle **area = pi × r²** and its **circumference = 2 × pi × r**. In exams, pi is often given as 22/7 so that the calculation comes out clean.

The **Pythagoras theorem** is for right triangles: if the two shorter sides of a right triangle are a and b and the longest side (hypotenuse) is c, then **a² + b² = c²**. The most famous example is the 3-4-5 triangle: 3² + 4² = 9 + 16 = 25 = 5².`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Kamra, Pahiya aur Ramp',
          '2. Real-Life Examples: A Room, a Wheel, and a Ramp'
        ),
        body: t(
          `Geometry roz dikhta hai. **Kamre ke kone** mein do deewarein 90 degree par milti hain — yahi right angle hai. Kamre ki farsh rectangle hoti hai, aur uska diagonal Pythagoras se nikalta hai: 12 m × 9 m wale kamre ka diagonal 15 m hota hai (3-4-5 ka triple).

**Pahiya (wheel)** ek circle hai. Cycle ka pahiya ek chakkar mein 2 × pi × r doori tay karta hai — yahi circumference hai. Agar pahiye ka radius 35 cm hai, toh ek chakkar mein woh 2 × 22/7 × 35 = 220 cm = 2.2 m chalta hai. Pahiye ke chakkar gin kar doori nikaalna bhi circumference ka hi use hai.

**Ramp ya seedhi** right triangle banati hai. Seedhi deewar se 3 m door khadi hai aur deewar par 4 m unchaai par tiki hai, toh seedhi ki lambai 5 m hogi — phir wahi 3-4-5. Builder aur mistri roz yahi hisaab use karte hain.`,
          `Geometry shows up every day. In the **corner of a room**, two walls meet at 90 degrees — that is a right angle. The floor of a room is a rectangle, and its diagonal comes from Pythagoras: a 12 m × 9 m room has a diagonal of 15 m (a 3-4-5 triple).

A **wheel** is a circle. A bicycle wheel covers 2 × pi × r in one turn — that is the circumference. If a wheel radius is 35 cm, one turn covers 2 × 22/7 × 35 = 220 cm = 2.2 m. Counting wheel turns to find a distance is also just using the circumference.

A **ramp or ladder** makes a right triangle. A ladder stands 3 m from a wall and rests 4 m high on the wall, so the ladder length is 5 m — the same 3-4-5 again. Builders use this calculation every day.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: Triangle Angle 70°, Circle Area 154 aur Triangle Area 48',
          '3. Step-by-Step: Triangle Angle 70°, Circle Area 154, and Triangle Area 48'
        ),
        body: t(
          `Ab hum teen worked examples karte hain. **Example 1: Triangle ke do angles 50° aur 60° hain. Teesra angle kya hai?** Step 1: angles ka sum 180 hota hai. Step 2: teesra angle = 180 − 50 − 60 = **70°**. Check karo: 50 + 60 + 70 = 180 — sahi hai.

**Example 2: Circle ka radius 7 cm hai. Area aur circumference kya honge? (pi = 22/7)** Step 1: area = pi × r² = 22/7 × 7 × 7 = 22 × 7 = **154 sq cm**. Step 2: circumference = 2 × pi × r = 2 × 22/7 × 7 = **44 cm**. Dhyaan do: radius 7 lene se 7 se 7 cut gaya aur hisaab saaf aaya — isiliye exam mein radius 7 ya 14 aksar diya jaata hai.

**Example 3: Triangle ka base 12 cm aur height 8 cm hai. Area kya hai?** Area = 1/2 × base × height = 1/2 × 12 × 8 = **48 sq cm**. 1/2 bhoolna is sawaal ki sabse badi galti hai — rectangle ka area base × height hota hai, triangle ka uska aadha. Neeche wala code teeno hisaab print karta hai.`,
          `Now let us work through three examples. **Example 1: Two angles of a triangle are 50° and 60°. What is the third angle?** Step 1: the angles add up to 180. Step 2: third angle = 180 − 50 − 60 = **70°**. Check: 50 + 60 + 70 = 180 — correct.

**Example 2: A circle has a radius of 7 cm. What are its area and circumference? (pi = 22/7)** Step 1: area = pi × r² = 22/7 × 7 × 7 = 22 × 7 = **154 sq cm**. Step 2: circumference = 2 × pi × r = 2 × 22/7 × 7 = **44 cm**. Notice: taking radius 7 cancels the 7 and makes the calculation clean — that is why exams often give a radius of 7 or 14.

**Example 3: A triangle has a base of 12 cm and a height of 8 cm. What is its area?** Area = 1/2 × base × height = 1/2 × 12 × 8 = **48 sq cm**. Forgetting the 1/2 is the biggest mistake in this question — a rectangle area is base × height, and a triangle is half of that. The code below prints all three calculations.`
        ),
        code: {
          title: t(
            'Triangle Angle, Circle Area aur Triangle Area',
            'Triangle Angle, Circle Area, and Triangle Area'
          ),
          language: 'python',
          code: `# Triangle: 50 + 60 + ? = 180
print("Third angle:", 180 - 50 - 60, "degrees")
# Circle radius 7, pi = 22/7
pi = 22 / 7
r = 7
print("Circle area:", pi * r * r)
print("Circumference:", 2 * pi * r)
# Triangle base 12, height 8
print("Triangle area:", 0.5 * 12 * 8)`,
          output: `Third angle: 70 degrees
Circle area: 154.0
Circumference: 44.0
Triangle area: 48.0`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Diameter ko Radius Samajhna, 1/2 Bhoolna aur Area vs Perimeter',
          '4. Common Mistakes: Taking Diameter as Radius, Forgetting 1/2, and Area vs Perimeter'
        ),
        body: t(
          `Geometry mein teen galtiyan sabse zyada hoti hain. **Galti 1: Diameter ko radius samajh lena.** Agar diameter 14 diya hai, toh radius 7 hota hai — area = pi × 7² = 154. Agar 14 ko hi radius maan liya, toh area 616 aa jaayega — chaar guna zyada. Sawaal mein pehle dekho: radius diya hai ya diameter?

**Galti 2: Triangle ke area mein 1/2 bhool jana.** Base 12 aur height 8 ka area 96 nahi, 48 hota hai — 1/2 × 12 × 8. Rectangle mein 1/2 nahi hota, triangle mein hota hai. Dono ko milana bahut common galti hai.

**Galti 3: Area aur perimeter ko milana.** Area square units mein hota hai (sq cm) aur perimeter ya circumference simple units mein (cm). Agar sawaal mein "boundary" ya "paridhi" poochha hai, toh circumference nikaalo; agar "andar kitni jagah" poochha hai, toh area. Units dekh kar bhi pata chal jaata hai ki kya maanga hai.`,
          `Three mistakes are most common in geometry. **Mistake 1: Taking the diameter as the radius.** If the diameter is 14, the radius is 7 — area = pi × 7² = 154. If you take 14 as the radius, the area becomes 616 — four times too much. First check the question: is it the radius or the diameter?

**Mistake 2: Forgetting the 1/2 in a triangle area.** With base 12 and height 8, the area is 48, not 96 — 1/2 × 12 × 8. A rectangle has no 1/2, a triangle does. Mixing the two up is a very common mistake.

**Mistake 3: Mixing up area and perimeter.** Area is in square units (sq cm) and perimeter or circumference in plain units (cm). If the question asks for the "boundary" or "circumference", find the circumference; if it asks "how much space inside", find the area. The units also tell you what is being asked.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Degenerate Triangle, Radius Zero aur 3-4-5 Check',
          '5. Edge Cases: Degenerate Triangle, Zero Radius, and the 3-4-5 Check'
        ),
        body: t(
          `Edge cases yaad rakho. **1. Degenerate triangle.** Agar triangle ki sides 2, 3 aur 5 hon, toh woh triangle banega hi nahi — kyunki 2 + 3 = 5, teesri side ke barabar hai. Triangle tabhi banta hai jab kisi bhi do sides ka sum teesri side se bada ho. Aise sawaal ka jawab hai "triangle possible nahi hai".

**2. Radius zero.** Agar circle ka radius 0 hai, toh woh circle nahi, ek point hai — area 0 aur circumference 0. Aisa sawaal trick ke liye aata hai.

**3. 3-4-5 check.** Agar right triangle ki sides 6, 8 aur 10 hon, toh woh bhi right triangle hai — 3-4-5 ka double. 6² + 8² = 36 + 64 = 100 = 10². Exam mein 3-4-5 ke multiples (6-8-10, 9-12-15) bahut aate hain; inhe pehchanne se hisaab tez ho jaata hai.

**4. Equilateral triangle.** Teeno sides barabar hon toh teeno angles bhi barabar hote hain — 180/3 = 60° har angle. Side 6 ho toh area = (√3/4) × 36 = 9√3 = 15.59 sq cm.`,
          `Remember these edge cases. **1. Degenerate triangle.** If a triangle sides are 2, 3, and 5, no triangle is formed at all — because 2 + 3 = 5, equal to the third side. A triangle forms only when the sum of any two sides is greater than the third side. The answer to such a question is "a triangle is not possible".

**2. Zero radius.** If a circle radius is 0, it is not a circle but a point — area 0 and circumference 0. Such a question comes as a trick.

**3. The 3-4-5 check.** If a right triangle sides are 6, 8, and 10, it is also a right triangle — double of 3-4-5. 6² + 8² = 36 + 64 = 100 = 10². Multiples of 3-4-5 (6-8-10, 9-12-15) appear very often in exams; recognising them makes the calculation fast.

**4. Equilateral triangle.** If all three sides are equal, all three angles are equal too — 180/3 = 60° each. With side 6, area = (√3/4) × 36 = 9√3 = 15.59 sq cm.`
        )
      },
      {
        heading: t(
          '6. What-If: Radius Double, Base Double aur Square ka Diagonal',
          '6. What-If: Double Radius, Double Base, and a Square Diagonal'
        ),
        body: t(
          `Ab "what-if" sawaal. **What if: radius double ho jaaye?** Radius 7 se 14 ho jaaye toh area 154 se 616 ho jaata hai — chaar guna. Kyunki area r² par depend karta hai, radius double karne se area 4 guna hota hai, 2 guna nahi. Circumference 44 se 88 hoti hai — sirf 2 guna, kyunki woh r par depend karti hai.

**What if: triangle ka base double ho jaaye?** Base 12 se 24 ho jaaye aur height wahi 8 rahe, toh area 48 se 96 ho jaata hai — 2 guna. Area base par seedha depend karta hai, isliye base double toh area double.

**What if: square ka diagonal poochha ho?** Square ki side 9 ho toh diagonal = side × √2 = 9 × 1.414 = 12.73. Diagonal Pythagoras se aata hai: 9² + 9² = 162, aur √162 = 12.73. Square ka diagonal hamesha side se bada hota hai, par side ke double se chhota.`,
          `Now some "what-if" questions. **What if the radius doubles?** If the radius goes from 7 to 14, the area goes from 154 to 616 — four times. Because area depends on r², doubling the radius makes the area 4 times, not 2 times. The circumference goes from 44 to 88 — only 2 times, because it depends on r.

**What if the triangle base doubles?** If the base goes from 12 to 24 and the height stays 8, the area goes from 48 to 96 — 2 times. Area depends directly on the base, so doubling the base doubles the area.

**What if a square diagonal is asked?** If a square side is 9, the diagonal is side × √2 = 9 × 1.414 = 12.73. The diagonal comes from Pythagoras: 9² + 9² = 162, and √162 = 12.73. A square diagonal is always bigger than the side, but smaller than double the side.`
        )
      },
      {
        heading: t(
          '7. Summary: Geometry ka Poora Picture',
          '7. Summary: The Full Picture of Geometry'
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. **Triangle ke angles ka sum 180°** — teesra angle = 180 − (do angles). **Circle: area = pi × r², circumference = 2 × pi × r**, aur diameter = 2 × radius. **Triangle ka area = 1/2 × base × height**. **Pythagoras: a² + b² = c²**, jiska sabse famous triple 3-4-5 hai.

Upar wale examples yaad rakho: angles 50° aur 60° hon toh teesra 70°; radius 7 ho toh area 154 aur circumference 44; base 12 aur height 8 ho toh area 48. Radius double ho toh area 4 guna, circumference 2 guna hoti hai.

Revision ke liye yeh checklist use karo: (1) radius hai ya diameter? (2) triangle mein 1/2 lagaya? (3) area maanga hai ya perimeter? Practice mein circle radius 14 ka area 616 aur circumference 88, triangle (base 10, height 6) ka area 30, aur rectangle 15 × 8 ka area 120 aur perimeter 46 aana chahiye.`,
          `Let us tie the whole article together. **A triangle angles add up to 180°** — the third angle = 180 − (two angles). **Circle: area = pi × r², circumference = 2 × pi × r**, and diameter = 2 × radius. **A triangle area = 1/2 × base × height**. **Pythagoras: a² + b² = c²**, whose most famous triple is 3-4-5.

Remember the examples above: with angles 50° and 60°, the third is 70°; with radius 7, the area is 154 and the circumference 44; with base 12 and height 8, the area is 48. If the radius doubles, the area becomes 4 times and the circumference 2 times.

Use this checklist for revision: (1) is it the radius or the diameter? (2) did you apply the 1/2 in the triangle? (3) is area or perimeter asked? In the practice, a circle of radius 14 should give area 616 and circumference 88, a triangle (base 10, height 6) area 30, and a rectangle 15 × 8 area 120 and perimeter 46.`
        )
      }
    ],
    diagram: {
      kind: 'boxes',
      title: t(
        'Geometry ke Teen Main Formulas',
        'The Three Main Geometry Formulas'
      ),
      caption: t(
        'Angles ka sum 180, circle mein pi r square, triangle mein aadha base x height',
        'Angles add to 180, circle uses pi r squared, triangle uses half of base x height'
      ),
      nodes: [
        {
          t: t('Triangle angles: A + B + C = 180 degree', 'Triangle angles: A + B + C = 180 degrees'),
          s: t('50 + 60 + 70 = 180 — teesra angle = 180 - (do angles)', '50 + 60 + 70 = 180 — third angle = 180 - (two angles)')
        },
        {
          t: t('Circle: Area = pi × r², Circumference = 2 × pi × r', 'Circle: Area = pi × r², Circumference = 2 × pi × r'),
          s: t('r = 7: area 154, circumference 44', 'r = 7: area 154, circumference 44')
        },
        {
          t: t('Triangle area = 1/2 x base x height', 'Triangle area = 1/2 x base x height'),
          s: t('Base 12, height 8: area 48', 'Base 12, height 8: area 48')
        },
        {
          t: t('Pythagoras: a² + b² = c² (3-4-5)', 'Pythagoras: a² + b² = c² (3-4-5)'),
          s: t('3² + 4² = 5² — hypotenuse 5', '3² + 4² = 5² — hypotenuse 5')
        },
        {
          t: t('Diameter = 2 x radius', 'Diameter = 2 x radius'),
          s: t('Diameter 14 ho toh radius 7 — pehle check karo', 'If diameter is 14, radius is 7 — check first')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          'Right Triangle 3-4-5: Hypotenuse aur Area',
          'Right Triangle 3-4-5: Hypotenuse and Area'
        ),
        language: 'python',
        code: `# Right triangle 3-4-5
print("Hypotenuse:", (3 ** 2 + 4 ** 2) ** 0.5)
print("Area:", 0.5 * 3 * 4)`,
        output: `Hypotenuse: 5.0
Area: 6.0`
      },
      {
        title: t(
          'Rectangle 12 x 9: Diagonal, Perimeter aur Area',
          'Rectangle 12 x 9: Diagonal, Perimeter, and Area'
        ),
        language: 'python',
        code: `# Rectangle 12 x 9
print("Diagonal:", (12 ** 2 + 9 ** 2) ** 0.5)
print("Perimeter:", 2 * (12 + 9))
print("Area:", 12 * 9)`,
        output: `Diagonal: 15.0
Perimeter: 42
Area: 108`
      }
    ],
    mcqs: [
      {
        q: t(
          'Triangle ke do angles 70 degree aur 80 degree hain. Teesra angle kya hai?',
          'Two angles of a triangle are 70 degrees and 80 degrees. What is the third angle?'
        ),
        opts: [
          t('20 degree', '20 degrees'),
          t('30 degree', '30 degrees'),
          t('40 degree', '40 degrees'),
          t('50 degree', '50 degrees')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: teesra angle = 180 - 70 - 80 = 30 degree.',
          'Correct answer: third angle = 180 - 70 - 80 = 30 degrees.'
        )
      },
      {
        q: t(
          'Circle ka diameter 14 cm hai. Uska circumference kya hoga? (pi = 22/7)',
          'A circle has a diameter of 14 cm. What is its circumference? (pi = 22/7)'
        ),
        opts: [
          t('22 cm', '22 cm'),
          t('44 cm', '44 cm'),
          t('88 cm', '88 cm'),
          t('154 cm', '154 cm')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: radius = 14/2 = 7 cm, circumference = 2 x 22/7 x 7 = 44 cm.',
          'Correct answer: radius = 14/2 = 7 cm, so circumference = 2 x 22/7 x 7 = 44 cm.'
        )
      },
      {
        q: t(
          'Equilateral triangle ki side 6 cm hai. Uska area kya hoga?',
          'An equilateral triangle has a side of 6 cm. What is its area?'
        ),
        opts: [
          t('9 sq cm', '9 sq cm'),
          t('12 sq cm', '12 sq cm'),
          t('15.59 sq cm', '15.59 sq cm'),
          t('18 sq cm', '18 sq cm')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: area = (√3/4) x side² = (√3/4) x 36 = 9√3 = 15.59 sq cm.',
          'Correct answer: area = (√3/4) x side squared = (√3/4) x 36 = 9√3 = 15.59 sq cm.'
        )
      },
      {
        q: t(
          'Square ki side 9 cm hai. Uska diagonal kitna hoga?',
          'A square has a side of 9 cm. What is its diagonal?'
        ),
        opts: [
          t('9 cm', '9 cm'),
          t('12.73 cm', '12.73 cm'),
          t('18 cm', '18 cm'),
          t('13.5 cm', '13.5 cm')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: diagonal = side x √2 = 9 x 1.414 = 12.73 cm (Pythagoras: 9² + 9² = 162, √162 = 12.73).',
          'Correct answer: diagonal = side x √2 = 9 x 1.414 = 12.73 cm (Pythagoras: 9² + 9² = 162, √162 = 12.73).'
        )
      },
      {
        q: t(
          'Quadrilateral ke teen angles 90 degree, 80 degree aur 100 degree hain. Chauthe angle kya hai?',
          'Three angles of a quadrilateral are 90 degrees, 80 degrees, and 100 degrees. What is the fourth angle?'
        ),
        opts: [
          t('70 degree', '70 degrees'),
          t('80 degree', '80 degrees'),
          t('90 degree', '90 degrees'),
          t('100 degree', '100 degrees')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: quadrilateral ke angles ka sum 360 degree hota hai, isliye chautha angle = 360 - 90 - 80 - 100 = 90 degree.',
          'Correct answer: a quadrilateral angles add up to 360 degrees, so the fourth angle = 360 - 90 - 80 - 100 = 90 degrees.'
        )
      }
    ],
    keyNotes: [
      t(
        'Triangle ke angles ka sum 180 degree; quadrilateral ka 360 degree.',
        'A triangle angles add up to 180 degrees; a quadrilateral angles add up to 360 degrees.'
      ),
      t(
        'Circle: area = pi × r², circumference = 2 × pi × r; diameter = 2 × radius.',
        'Circle: area = pi × r squared, circumference = 2 × pi × r; diameter = 2 × radius.'
      ),
      t(
        'Triangle ka area = 1/2 x base x height — 1/2 bhoolna sabse badi galti hai.',
        'A triangle area is 1/2 x base x height — forgetting the 1/2 is the biggest mistake.'
      ),
      t(
        'Pythagoras: a² + b² = c²; 3-4-5 aur uske multiples (6-8-10) pehchano.',
        'Pythagoras: a squared + b squared = c squared; recognise 3-4-5 and its multiples (6-8-10).'
      ),
      t(
        'Radius double ho toh area 4 guna, circumference 2 guna hoti hai.',
        'If the radius doubles, the area becomes 4 times and the circumference 2 times.'
      )
    ],
    practice: {
      title: t(
        'Practice: Circle (r = 14), Triangle aur Rectangle',
        'Practice: Circle (r = 14), Triangle, and Rectangle'
      ),
      task: t(
        'Circle ka radius 14 cm hai — uska area aur circumference nikaalo. Triangle ka base 10 cm aur height 6 cm hai — uska area nikaalo. Rectangle 15 cm x 8 cm hai — uska area aur perimeter nikaalo. Starter code run karo aur done tab maanoge jab output mein circle area 616.0, circumference 88.0, triangle area 30.0, rectangle area 120 aur perimeter 46 dikhe.',
        'A circle has a radius of 14 cm — find its area and circumference. A triangle has a base of 10 cm and a height of 6 cm — find its area. A rectangle is 15 cm x 8 cm — find its area and perimeter. Run the starter code; you are done when the output shows circle area 616.0, circumference 88.0, triangle area 30.0, rectangle area 120, and perimeter 46.'
      ),
      language: 'python',
      starter: `pi = 22 / 7
r = 14
print("Circle area:", pi * r * r)
print("Circumference:", 2 * pi * r)
print("Triangle area (base 10, height 6):", 0.5 * 10 * 6)
print("Rectangle 15 x 8 area:", 15 * 8, "perimeter:", 2 * (15 + 8))`,
      expected: `Circle area: 616.0
Circumference: 88.0
Triangle area (base 10, height 6): 30.0
Rectangle 15 x 8 area: 120 perimeter: 46`
    },
    readMinutes: 12
  };

const quantMensuration: Article = {
    id: 'quant-mensuration',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Mensuration — Areas, Volumes aur Surface Area',
      'Mensuration — Areas, Volumes, and Surface Area'
    ),
    summary: t(
      '2D mein area, 3D mein volume aur surface area: cuboid, cube, cylinder, cone aur sphere ke formulas ek jagah par. CSA aur TSA ka farak, aur side double hone par volume 8 guna kyun hota hai.',
      'Area in 2D, volume and surface area in 3D: cuboid, cube, cylinder, cone, and sphere formulas in one place. The difference between CSA and TSA, and why doubling a side makes the volume 8 times.'
    ),
    sections: [
      {
        heading: t(
          '1. Mensuration Kya Hai? (Area, Volume aur Surface Area)',
          '1. What Is Mensuration? (Area, Volume, and Surface Area)'
        ),
        body: t(
          `Mensuration 2D aur 3D shapes ki naap (measurement) hai. **Area** kisi flat shape ke andar ki jagah hoti hai — square units mein (sq cm). **Volume** kisi 3D shape ke andar ki jagah hoti hai — cubic units mein (cubic cm). **Surface area** 3D shape ki bahari satah ka area hota hai — phir se square units mein.

Teen shapes ke formulas yaad rakho. **Cuboid** (l × b × h): volume = l × b × h, total surface area (TSA) = 2(lb + bh + hl). **Cube** (side a): volume = a³, TSA = 6a². **Cylinder** (radius r, height h): volume = pi × r² × h, curved surface area (CSA) = 2 × pi × r × h, TSA = 2 × pi × r × (r + h).

**CSA aur TSA ka farak** samajhna zaroori hai: CSA sirf gol (curved) satah ka area hota hai, TSA mein upar-neeche ke dono circular faces bhi jud jaate hain. Agar cylinder ka dhakkan khula hai, toh TSA mein sirf ek face judta hai — sawaal mein "open" ya "closed" dekhna mat bhoolo.`,
          `Mensuration is the measurement of 2D and 3D shapes. **Area** is the space inside a flat shape — in square units (sq cm). **Volume** is the space inside a 3D shape — in cubic units (cubic cm). **Surface area** is the area of the outer surface of a 3D shape — again in square units.

Remember the formulas for three shapes. **Cuboid** (l × b × h): volume = l × b × h, total surface area (TSA) = 2(lb + bh + hl). **Cube** (side a): volume = a³, TSA = 6a². **Cylinder** (radius r, height h): volume = pi × r² × h, curved surface area (CSA) = 2 × pi × r × h, TSA = 2 × pi × r × (r + h).

Understanding the **difference between CSA and TSA** matters: CSA is only the area of the curved surface, while TSA also adds the two circular faces on top and bottom. If a cylinder lid is open, TSA adds only one face — never forget to check whether the question says "open" or "closed".`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Kamra Rangna, Tanki aur Gift Box',
          '2. Real-Life Examples: Painting a Room, a Water Tank, and a Gift Box'
        ),
        body: t(
          `Mensuration roz kaam aati hai. **Kamra rangna** ho toh deewaron ka area chahiye hota hai — chaaro deewaron ka area = 2 × height × (length + breadth). 8 m × 6 m × 4 m wale kamre ki chaaro deewarein 2 × 4 × (8 + 6) = 112 sq m hoti hain. Farsh ka area alag hota hai (8 × 6 = 48 sq m) aur chhat ka bhi — rangne wale ko sirf deewaron ka hisaab chahiye hota hai.

**Paani ki tanki** bharte waqt volume kaam aata hai. 5 m × 4 m × 3 m ki tanki ka volume 60 cubic m hota hai, aur 1 cubic m = 1000 litres, isliye tanki mein 60,000 litres paani aata hai. Tanki khareedte waqt yahi hisaab dekhna chahiye.

**Gift box** banate waqt surface area kaam aata hai — kitna kagaz lagega, yeh TSA se pata chalta hai. Side 5 cm wale cube box ko 6 × 25 = 150 sq cm kagaz chahiye hoga.`,
          `Mensuration is used every day. When **painting a room**, you need the area of the walls — the four walls area = 2 × height × (length + breadth). For a room of 8 m × 6 m × 4 m, the four walls are 2 × 4 × (8 + 6) = 112 sq m. The floor area is separate (8 × 6 = 48 sq m), as is the ceiling — the painter only needs the walls.

When **filling a water tank**, volume matters. A tank of 5 m × 4 m × 3 m has a volume of 60 cubic m, and 1 cubic m = 1000 litres, so the tank holds 60,000 litres of water. This is the calculation to check when buying a tank.

When **making a gift box**, surface area matters — how much paper is needed comes from the TSA. A cube box of side 5 cm needs 6 × 25 = 150 sq cm of paper.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: Cuboid (72, 108), Cube (125, 150) aur Cylinder (1540, 440)',
          '3. Step-by-Step: Cuboid (72, 108), Cube (125, 150), and Cylinder (1540, 440)'
        ),
        body: t(
          `Ab hum teen worked examples karte hain. **Example 1: Cuboid 6 cm × 4 cm × 3 cm hai. Volume aur TSA kya honge?** Step 1: volume = l × b × h = 6 × 4 × 3 = **72 cubic cm**. Step 2: TSA = 2(lb + bh + hl) = 2(6×4 + 4×3 + 3×6) = 2(24 + 12 + 18) = 2 × 54 = **108 sq cm**. Dhyaan do: teeno pairs (lb, bh, hl) alag hain — koi pair bhoolna nahi hai.

**Example 2: Cube ki side 5 cm hai. Volume aur TSA kya honge?** Step 1: volume = a³ = 5³ = **125 cubic cm**. Step 2: TSA = 6a² = 6 × 25 = **150 sq cm**. Cube mein 6 faces hote hain, har face ka area a² — isliye 6 se multiply hota hai.

**Example 3: Cylinder ka radius 7 cm aur height 10 cm hai. Volume aur CSA kya honge? (pi = 22/7)** Step 1: volume = pi × r² × h = 22/7 × 49 × 10 = **1540 cubic cm**. Step 2: CSA = 2 × pi × r × h = 2 × 22/7 × 7 × 10 = **440 sq cm**. Radius 7 lene se phir se 7 cut gaya — exam mein yahi pattern aata hai. Neeche wala code teeno hisaab print karta hai.`,
          `Now let us work through three examples. **Example 1: A cuboid is 6 cm × 4 cm × 3 cm. What are its volume and TSA?** Step 1: volume = l × b × h = 6 × 4 × 3 = **72 cubic cm**. Step 2: TSA = 2(lb + bh + hl) = 2(6×4 + 4×3 + 3×6) = 2(24 + 12 + 18) = 2 × 54 = **108 sq cm**. Notice: the three pairs (lb, bh, hl) are all different — do not forget any pair.

**Example 2: A cube has a side of 5 cm. What are its volume and TSA?** Step 1: volume = a³ = 5³ = **125 cubic cm**. Step 2: TSA = 6a² = 6 × 25 = **150 sq cm**. A cube has 6 faces, each with area a² — that is why we multiply by 6.

**Example 3: A cylinder has a radius of 7 cm and a height of 10 cm. What are its volume and CSA? (pi = 22/7)** Step 1: volume = pi × r² × h = 22/7 × 49 × 10 = **1540 cubic cm**. Step 2: CSA = 2 × pi × r × h = 2 × 22/7 × 7 × 10 = **440 sq cm**. Taking radius 7 cancels the 7 again — exams follow this same pattern. The code below prints all three calculations.`
        ),
        code: {
          title: t(
            'Cuboid, Cube aur Cylinder: Volume aur Surface Area',
            'Cuboid, Cube, and Cylinder: Volume and Surface Area'
          ),
          language: 'python',
          code: `# Cuboid 6 x 4 x 3
l, b, h = 6, 4, 3
print("Cuboid volume:", l * b * h)
print("Cuboid surface area:", 2 * (l * b + b * h + h * l))
# Cube side 5
print("Cube volume:", 5 ** 3)
print("Cube surface area:", 6 * 5 ** 2)
# Cylinder r=7, h=10, pi=22/7
pi = 22 / 7
print("Cylinder volume:", pi * 7 ** 2 * 10)
print("Cylinder curved surface area:", 2 * pi * 7 * 10)`,
          output: `Cuboid volume: 72
Cuboid surface area: 108
Cube volume: 125
Cube surface area: 150
Cylinder volume: 1540.0
Cylinder curved surface area: 440.0`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: CSA vs TSA, Units aur Formula Mix-Up',
          '4. Common Mistakes: CSA vs TSA, Units, and Formula Mix-Ups'
        ),
        body: t(
          `Mensuration mein teen galtiyan sabse zyada hoti hain. **Galti 1: CSA ki jagah TSA (ya ulta) nikaalna.** Agar sawaal mein "curved surface" likha hai, toh sirf 2 × pi × r × h nikaalo — dono circular faces mat jodo. Agar "total surface" likha hai, toh 2 × pi × r × (r + h) nikaalo. Sawaal mein kaunsa word hai, wahi tay karta hai kaunsa formula lagega.

**Galti 2: Units milana.** Area square units (sq cm) mein, volume cubic units (cubic cm) mein hota hai. Agar volume ke jawab mein "sq cm" likh diya, toh jawab galat maana jaayega. Litres mein badalte waqt yaad rakho: 1 cubic m = 1000 litres, par 1 cubic cm = 1 ml hota hai.

**Galti 3: Sphere aur cylinder ke formulas milana.** Sphere ka volume (4/3) × pi × r³ hota hai, cylinder ka pi × r² × h. Dono mein r³ aur r² ka farak hai — sphere mein height nahi hoti, cylinder mein hoti hai. Formula likhne se pehle shape pehchano.`,
          `Three mistakes are most common in mensuration. **Mistake 1: Finding TSA instead of CSA (or the reverse).** If the question says "curved surface", find only 2 × pi × r × h — do not add the two circular faces. If it says "total surface", find 2 × pi × r × (r + h). The word in the question decides which formula applies.

**Mistake 2: Mixing up units.** Area is in square units (sq cm), volume in cubic units (cubic cm). If you write "sq cm" for a volume answer, the answer counts as wrong. When converting to litres, remember: 1 cubic m = 1000 litres, but 1 cubic cm = 1 ml.

**Mistake 3: Mixing up sphere and cylinder formulas.** A sphere volume is (4/3) × pi × r³, a cylinder volume is pi × r² × h. The difference is r³ versus r² — a sphere has no height, a cylinder does. Identify the shape before writing the formula.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Khula Box, Zero Height aur Hollow Shape',
          '5. Edge Cases: Open Box, Zero Height, and Hollow Shapes'
        ),
        body: t(
          `Edge cases yaad rakho. **1. Khula box (open box).** Agar cuboid box ka dhakkan nahi hai, toh TSA mein sirf 5 faces hote hain — upar wala face nahi judta. TSA = 2(lb + bh + hl) − lb. "Open" word dekhte hi ek face subtract karo.

**2. Height zero.** Agar cuboid ki height 0 ho, toh woh cuboid nahi, ek flat rectangle hai — volume 0 ho jaata hai. Aisa sawaal trick ke liye aata hai.

**3. Hollow shape (khokhla).** Agar sphere khokhla hai (jaise ball ke andar hawa), toh uska volume sirf bahari aur andar ki radius ke farak se nikalta hai — solid sphere wala formula seedha nahi lagta. Sawaal mein "hollow" likha ho toh dono radii ka hisaab karo.

**4. Cone ka slant height.** Cone mein volume ke liye height (h) chahiye, par CSA ke liye slant height (l) chahiye — l² = r² + h². Radius 3 aur height 4 ho toh slant height 5 hoti hai (3-4-5 phir se).`,
          `Remember these edge cases. **1. Open box.** If a cuboid box has no lid, its TSA has only 5 faces — the top face is not added. TSA = 2(lb + bh + hl) − lb. As soon as you see the word "open", subtract one face.

**2. Zero height.** If a cuboid height is 0, it is not a cuboid but a flat rectangle — the volume becomes 0. Such a question comes as a trick.

**3. Hollow shape.** If a sphere is hollow (like air inside a ball), its volume comes from the difference between the outer and inner radii — the solid sphere formula does not apply directly. If the question says "hollow", calculate with both radii.

**4. Cone slant height.** A cone needs the height (h) for volume, but the slant height (l) for CSA — l² = r² + h². With radius 3 and height 4, the slant height is 5 (3-4-5 again).`
        )
      },
      {
        heading: t(
          '6. What-If: Side Double, Radius Double aur Sphere vs Cube',
          '6. What-If: Double Side, Double Radius, and Sphere vs Cube'
        ),
        body: t(
          `Ab "what-if" sawaal. **What if: cube ki side double ho jaaye?** Side 5 se 10 ho jaaye toh volume 125 se 1000 ho jaata hai — 8 guna. Kyunki volume a³ par depend karta hai, side double karne se volume 2³ = 8 guna hota hai. Surface area 150 se 600 hota hai — 4 guna, kyunki woh a² par depend karta hai.

**What if: cylinder ka radius double ho jaaye?** Radius 7 se 14 ho jaaye aur height wahi 10 rahe, toh volume 1540 se 6160 ho jaata hai — 4 guna (r² ki wajah se). CSA 440 se 880 hoti hai — 2 guna (r ki wajah se).

**What if: sphere aur cube ka volume compare karna ho?** Sphere radius 7 ka volume (4/3) × 22/7 × 343 = 1437.33 cubic cm hai, aur surface area 4 × 22/7 × 49 = 616 sq cm. Cube side 5 ka volume sirf 125 hai — sphere usse 11 guna se zyada bada hai, kyunki radius 7 cube ki side 5 se bada hai.`,
          `Now some "what-if" questions. **What if a cube side doubles?** If the side goes from 5 to 10, the volume goes from 125 to 1000 — 8 times. Because volume depends on a³, doubling the side makes the volume 2³ = 8 times. The surface area goes from 150 to 600 — 4 times, because it depends on a².

**What if a cylinder radius doubles?** If the radius goes from 7 to 14 and the height stays 10, the volume goes from 1540 to 6160 — 4 times (because of r²). The CSA goes from 440 to 880 — 2 times (because of r).

**What if a sphere and a cube volume are compared?** A sphere of radius 7 has a volume of (4/3) × 22/7 × 343 = 1437.33 cubic cm and a surface area of 4 × 22/7 × 49 = 616 sq cm. A cube of side 5 has a volume of only 125 — the sphere is more than 11 times bigger, because radius 7 is bigger than cube side 5.`
        )
      },
      {
        heading: t(
          '7. Summary: Mensuration ka Poora Picture',
          '7. Summary: The Full Picture of Mensuration'
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. **Cuboid:** volume = l × b × h, TSA = 2(lb + bh + hl). **Cube:** volume = a³, TSA = 6a². **Cylinder:** volume = pi × r² × h, CSA = 2 × pi × r × h, TSA = 2 × pi × r × (r + h). **Sphere:** volume = (4/3) × pi × r³, surface area = 4 × pi × r². **Cone:** volume = (1/3) × pi × r² × h.

Upar wale examples yaad rakho: cuboid 6 × 4 × 3 → volume 72, TSA 108; cube side 5 → volume 125, TSA 150; cylinder r = 7, h = 10 → volume 1540, CSA 440. Side double ho toh volume 8 guna aur surface area 4 guna; radius double ho toh volume 4 guna aur CSA 2 guna.

Revision ke liye yeh yaad rakho: pehle shape pehchano, phir sawaal mein CSA hai ya TSA, phir units check karo. Practice mein kamra 8 × 6 × 4 ka volume 192 cubic m, farsh 48 sq m, chaaro deewarein 112 sq m, aur tank 5 × 4 × 3 ki capacity 60,000 litres aani chahiye.`,
          `Let us tie the whole article together. **Cuboid:** volume = l × b × h, TSA = 2(lb + bh + hl). **Cube:** volume = a³, TSA = 6a². **Cylinder:** volume = pi × r² × h, CSA = 2 × pi × r × h, TSA = 2 × pi × r × (r + h). **Sphere:** volume = (4/3) × pi × r³, surface area = 4 × pi × r². **Cone:** volume = (1/3) × pi × r² × h.

Remember the examples above: cuboid 6 × 4 × 3 → volume 72, TSA 108; cube side 5 → volume 125, TSA 150; cylinder r = 7, h = 10 → volume 1540, CSA 440. If a side doubles, volume becomes 8 times and surface area 4 times; if a radius doubles, volume becomes 4 times and CSA 2 times.

For revision, remember this: first identify the shape, then check whether the question asks CSA or TSA, then check the units. In the practice, a room of 8 × 6 × 4 should give volume 192 cubic m, floor 48 sq m, four walls 112 sq m, and a tank of 5 × 4 × 3 a capacity of 60,000 litres.`
        )
      }
    ],
    diagram: {
      kind: 'table',
      title: t(
        'Mensuration Formulas Table',
        'Mensuration Formulas Table'
      ),
      caption: t(
        'CSA sirf curved satah hai, TSA mein saare faces jud jaate hain',
        'CSA is only the curved surface; TSA adds all the faces'
      ),
      nodes: [],
      headers: [
        t('Shape', 'Shape'),
        t('Volume', 'Volume'),
        t('Surface area', 'Surface area')
      ],
      rows: [
        [t('Cuboid (l, b, h)', 'Cuboid (l, b, h)'), t('l x b x h', 'l x b x h'), t('2(lb + bh + hl)', '2(lb + bh + hl)')],
        [t('Cube (side a)', 'Cube (side a)'), t('a³', 'a³'), t('6a²', '6a²')],
        [t('Cylinder (r, h)', 'Cylinder (r, h)'), t('pi × r² × h', 'pi × r² × h'), t('CSA 2 × pi × r × h', 'CSA 2 × pi × r × h')],
        [t('Sphere (r)', 'Sphere (r)'), t('(4/3) × pi × r³', '(4/3) × pi × r³'), t('4 × pi × r²', '4 × pi × r²')],
        [t('Cone (r, h)', 'Cone (r, h)'), t('(1/3) × pi × r² × h', '(1/3) × pi × r² × h'), t('CSA pi × r × l', 'CSA pi × r × l')]
      ]
    },
    codeExamples: [
      {
        title: t(
          'Sphere Radius 7: Volume aur Surface Area',
          'Sphere Radius 7: Volume and Surface Area'
        ),
        language: 'python',
        code: `# Sphere radius 7
pi = 22 / 7
print("Sphere volume:", round(4 / 3 * pi * 7 ** 3, 2))
print("Sphere surface area:", round(4 * pi * 7 ** 2, 2))`,
        output: `Sphere volume: 1437.33
Sphere surface area: 616.0`
      },
      {
        title: t(
          'Cone r = 3, h = 4: Volume aur Slant Height',
          'Cone r = 3, h = 4: Volume and Slant Height'
        ),
        language: 'python',
        code: `# Cone r=3, h=4
import math
print("Cone volume:", round(1 / 3 * math.pi * 3 ** 2 * 4, 2))
print("Slant height:", (3 ** 2 + 4 ** 2) ** 0.5)`,
        output: `Cone volume: 37.7
Slant height: 5.0`
      }
    ],
    mcqs: [
      {
        q: t(
          'Cube ki side 4 cm hai. Uska volume kya hoga?',
          'A cube has a side of 4 cm. What is its volume?'
        ),
        opts: [
          t('16 cubic cm', '16 cubic cm'),
          t('64 cubic cm', '64 cubic cm'),
          t('96 cubic cm', '96 cubic cm'),
          t('48 cubic cm', '48 cubic cm')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: volume = a³ = 4³ = 64 cubic cm.',
          'Correct answer: volume = a cubed = 4 cubed = 64 cubic cm.'
        )
      },
      {
        q: t(
          'Cuboid 5 cm x 4 cm x 2 cm hai. Uska volume kya hoga?',
          'A cuboid is 5 cm x 4 cm x 2 cm. What is its volume?'
        ),
        opts: [
          t('22 cubic cm', '22 cubic cm'),
          t('40 cubic cm', '40 cubic cm'),
          t('44 cubic cm', '44 cubic cm'),
          t('80 cubic cm', '80 cubic cm')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: volume = l x b x h = 5 x 4 x 2 = 40 cubic cm.',
          'Correct answer: volume = l x b x h = 5 x 4 x 2 = 40 cubic cm.'
        )
      },
      {
        q: t(
          'Cylinder ka radius 7 cm aur height 5 cm hai. Uska volume kya hoga? (pi = 22/7)',
          'A cylinder has a radius of 7 cm and a height of 5 cm. What is its volume? (pi = 22/7)'
        ),
        opts: [
          t('770 cubic cm', '770 cubic cm'),
          t('1540 cubic cm', '1540 cubic cm'),
          t('220 cubic cm', '220 cubic cm'),
          t('440 cubic cm', '440 cubic cm')
        ],
        ans: 0,
        expl: t(
          'Sahi jawab: volume = pi × r² × h = 22/7 × 49 × 5 = 770 cubic cm.',
          'Correct answer: volume = pi × r squared × h = 22/7 × 49 × 5 = 770 cubic cm.'
        )
      },
      {
        q: t(
          'Cube ki side 3 cm hai. Uska total surface area kya hoga?',
          'A cube has a side of 3 cm. What is its total surface area?'
        ),
        opts: [
          t('27 sq cm', '27 sq cm'),
          t('36 sq cm', '36 sq cm'),
          t('54 sq cm', '54 sq cm'),
          t('81 sq cm', '81 sq cm')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: TSA = 6a² = 6 × 9 = 54 sq cm.',
          'Correct answer: TSA = 6a squared = 6 × 9 = 54 sq cm.'
        )
      },
      {
        q: t(
          'Sphere ka radius 3 cm hai. Uska volume lagbhag kya hoga?',
          'A sphere has a radius of 3 cm. What is its volume, approximately?'
        ),
        opts: [
          t('36 cubic cm', '36 cubic cm'),
          t('113.10 cubic cm', '113.10 cubic cm'),
          t('84 cubic cm', '84 cubic cm'),
          t('150 cubic cm', '150 cubic cm')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: volume = (4/3) × pi × r³ = 36 × pi = 113.10 cubic cm.',
          'Correct answer: volume = (4/3) × pi × r cubed = 36 × pi = 113.10 cubic cm.'
        )
      }
    ],
    keyNotes: [
      t(
        'Cuboid: volume = l × b × h, TSA = 2(lb + bh + hl); Cube: volume = a³, TSA = 6a².',
        'Cuboid: volume = l × b × h, TSA = 2(lb + bh + hl); Cube: volume = a cubed, TSA = 6a squared.'
      ),
      t(
        'Cylinder: volume = pi × r² × h, CSA = 2 × pi × r × h, TSA = 2 × pi × r × (r + h).',
        'Cylinder: volume = pi × r squared × h, CSA = 2 × pi × r × h, TSA = 2 × pi × r × (r + h).'
      ),
      t(
        'CSA sirf curved satah hai; TSA mein saare faces jud jaate hain. "Open" ho toh ek face kam.',
        'CSA is only the curved surface; TSA adds all faces. If "open", one face less.'
      ),
      t(
        'Sphere: volume = (4/3) × pi × r³, area = 4 × pi × r²; Cone: volume = (1/3) × pi × r² × h.',
        'Sphere: volume = (4/3) × pi × r cubed, area = 4 × pi × r squared; Cone: volume = (1/3) × pi × r squared × h.'
      ),
      t(
        'Side double ho toh volume 8 guna, surface area 4 guna; radius double ho toh volume 4 guna.',
        'If a side doubles, volume becomes 8 times and surface area 4 times; if a radius doubles, volume becomes 4 times.'
      )
    ],
    practice: {
      title: t(
        'Practice: Kamra 8 x 6 x 4 aur Tanki 5 x 4 x 3',
        'Practice: Room 8 x 6 x 4 and Tank 5 x 4 x 3'
      ),
      task: t(
        'Ek kamra 8 m x 6 m x 4 m hai — uska volume, farsh ka area aur chaaro deewaron ka area nikaalo. Ek tanki 5 m x 4 m x 3 m hai — uski capacity litres mein nikaalo (1 cubic m = 1000 litres). Starter code run karo aur done tab maanoge jab output mein volume 192, floor 48, walls 112 aur capacity 60000 litres dikhe.',
        'A room is 8 m x 6 m x 4 m — find its volume, floor area, and the area of its four walls. A tank is 5 m x 4 m x 3 m — find its capacity in litres (1 cubic m = 1000 litres). Run the starter code; you are done when the output shows volume 192, floor 48, walls 112, and capacity 60000 litres.'
      ),
      language: 'python',
      starter: `# Room 8 x 6 x 4
print("Room volume:", 8 * 6 * 4, "cubic m")
print("Floor area:", 8 * 6, "sq m")
print("Four walls area:", 2 * 4 * (8 + 6), "sq m")
# Tank 5 x 4 x 3 metres, 1 cubic m = 1000 litres
print("Tank capacity:", 5 * 4 * 3 * 1000, "litres")`,
      expected: `Room volume: 192 cubic m
Floor area: 48 sq m
Four walls area: 112 sq m
Tank capacity: 60000 litres`
    },
    readMinutes: 12
  };

const quantTrigonometry: Article = {
    id: 'quant-trigonometry',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Trigonometry — Sin, Cos, Tan aur Heights',
      'Trigonometry — Sin, Cos, Tan, and Heights'
    ),
    summary: t(
      'Right triangle mein sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent. 0, 30, 45, 60, 90 degree ke standard values aur unchaai-doori wale sawaal — tower, seedhi aur shadow.',
      'In a right triangle, sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent. Standard values for 0, 30, 45, 60, and 90 degrees, and height-distance questions — tower, ladder, and shadow.'
    ),
    sections: [
      {
        heading: t(
          '1. Trigonometry Kya Hai? (Sin, Cos aur Tan)',
          '1. What Is Trigonometry? (Sin, Cos, and Tan)'
        ),
        body: t(
          `Trigonometry right triangle ke angles aur sides ke beech ka rishta hai. Right triangle mein ek angle 90 degree ka hota hai. Uske saamne wali side ko **hypotenuse** kehte hain — yeh hamesha sabse lambi side hoti hai. Kisi angle theta ke liye, uske saamne wali side **opposite** hoti hai aur uske bagal wali side **adjacent** hoti hai.

Teen ratios yaad rakho: **sin theta = opposite / hypotenuse**, **cos theta = adjacent / hypotenuse**, **tan theta = opposite / adjacent**. Inhe yaad rakhne ka tareeka hai "SOH-CAH-TOA": Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent.

Ek aur zaroori identity hai: **sin² theta + cos² theta = 1**. Yeh har angle ke liye sahi hoti hai, aur exam mein isse ek ratio se doosra ratio nikaala jaata hai. Aur tan theta = sin theta / cos theta bhi hota hai — tan ko sin aur cos se bhi nikaala ja sakta hai.`,
          `Trigonometry is the relationship between the angles and sides of a right triangle. In a right triangle, one angle is 90 degrees. The side opposite it is called the **hypotenuse** — it is always the longest side. For any angle theta, the side opposite it is the **opposite** side and the side next to it is the **adjacent** side.

Remember three ratios: **sin theta = opposite / hypotenuse**, **cos theta = adjacent / hypotenuse**, **tan theta = opposite / adjacent**. A way to remember them is "SOH-CAH-TOA": Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent.

One more important identity is: **sin² theta + cos² theta = 1**. It holds for every angle, and exams use it to find one ratio from another. Also, tan theta = sin theta / cos theta — tan can also be found from sin and cos.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Tower, Seedhi aur Shadow',
          '2. Real-Life Examples: Tower, Ladder, and Shadow'
        ),
        body: t(
          `Trigonometry roz kaam aati hai, khaas taur par unchaai naapne mein. **Tower ki unchaai** naapne ke liye aapko tower par chadhna nahi padta — zameen par khade hokar angle naapo aur doori naapo, phir tan se unchaai nikaal lo. Agar tower se 60 m door khade hokar upar dekhne ka angle 30 degree hai, toh unchaai = 60 × tan 30° = 34.64 m.

**Seedhi (ladder)** deewar par tiki ho toh woh right triangle banati hai. Seedhi 10 m lambi hai aur zameen se 60 degree ka angle banati hai, toh deewar par unchaai = 10 × sin 60° = 8.66 m aur deewar se doori = 10 × cos 60° = 5 m. Mistri aur fire brigade yahi hisaab use karte hain.

**Shadow** se bhi unchaai nikalti hai. Sooraj jab 45 degree par hota hai, toh kisi bhi cheez ki shadow uski unchaai ke barabar hoti hai — kyunki tan 45° = 1. Yahi wajah hai ki dopahar ke aas-paas shadow chhoti aur subah-shaam lambi hoti hai.`,
          `Trigonometry is used every day, especially for measuring heights. To find a **tower height**, you do not need to climb the tower — stand on the ground, measure the angle and the distance, then find the height with tan. If you stand 60 m from a tower and look up at an angle of 30 degrees, the height is 60 × tan 30° = 34.64 m.

A **ladder** leaning on a wall makes a right triangle. If the ladder is 10 m long and makes a 60 degree angle with the ground, the height on the wall is 10 × sin 60° = 8.66 m and the distance from the wall is 10 × cos 60° = 5 m. Builders and the fire brigade use this same calculation.

A **shadow** also gives height. When the sun is at 45 degrees, any object shadow equals its height — because tan 45° = 1. That is why shadows are short around noon and long in the morning and evening.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: 3-4-5 Triangle (sin 0.6, cos 0.8) aur Tower 34.64 m',
          '3. Step-by-Step: 3-4-5 Triangle (sin 0.6, cos 0.8) and Tower 34.64 m'
        ),
        body: t(
          `Ab hum worked example karte hain. **Example 1: Right triangle mein opposite side 3, adjacent side 4 aur hypotenuse 5 hai. Sin, cos aur tan nikaalo.** Step 1: sin = opposite/hypotenuse = 3/5 = **0.6**. Step 2: cos = adjacent/hypotenuse = 4/5 = **0.8**. Step 3: tan = opposite/adjacent = 3/4 = **0.75**. Step 4: check karo — sin² + cos² = 0.36 + 0.64 = **1.0**. Identity sahi hai, isliye ratios sahi hain.

**Example 2: Tower se 60 m door khade hokar upar dekhne ka angle 30 degree hai. Tower ki unchaai kya hai?** Step 1: right triangle banao — doori 60 m adjacent side hai, unchaai opposite side hai, angle 30° hai. Step 2: tan 30° = opposite/adjacent = height/60. Step 3: tan 30° = 1/√3 = 0.5774, isliye height = 60 × 0.5774 = **34.64 m**. Dhyaan do: angle chhota hai (30°), isliye unchaai doori se chhoti aayi — yeh check hamesha karo.

Neeche wala code dono examples ko compute karta hai.`,
          `Now let us work through examples. **Example 1: In a right triangle, the opposite side is 3, the adjacent side is 4, and the hypotenuse is 5. Find sin, cos, and tan.** Step 1: sin = opposite/hypotenuse = 3/5 = **0.6**. Step 2: cos = adjacent/hypotenuse = 4/5 = **0.8**. Step 3: tan = opposite/adjacent = 3/4 = **0.75**. Step 4: check — sin² + cos² = 0.36 + 0.64 = **1.0**. The identity holds, so the ratios are correct.

**Example 2: You stand 60 m from a tower and look up at an angle of 30 degrees. What is the tower height?** Step 1: make a right triangle — the distance of 60 m is the adjacent side, the height is the opposite side, and the angle is 30°. Step 2: tan 30° = opposite/adjacent = height/60. Step 3: tan 30° = 1/√3 = 0.5774, so height = 60 × 0.5774 = **34.64 m**. Notice: the angle is small (30°), so the height came out smaller than the distance — always make this check.

The code below computes both examples.`
        ),
        code: {
          title: t(
            '3-4-5 Triangle ke Ratios aur Tower ki Unchaai',
            'Ratios of the 3-4-5 Triangle and a Tower Height'
          ),
          language: 'python',
          code: `# 3-4-5 right triangle: opposite 3, adjacent 4, hypotenuse 5
print("sin =", 3 / 5)
print("cos =", 4 / 5)
print("tan =", 3 / 4)
print("sin^2 + cos^2 =", (3 / 5) ** 2 + (4 / 5) ** 2)
# Tower: angle 30 degrees, distance 60 m
import math
height = 60 * math.tan(math.radians(30))
print("Tower height:", round(height, 2), "m")`,
          output: `sin = 0.6
cos = 0.8
tan = 0.75
sin^2 + cos^2 = 1.0
Tower height: 34.64 m`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Opposite/Adjacent Milana, Degree vs Radian aur Hypotenuse',
          '4. Common Mistakes: Mixing Opposite/Adjacent, Degree vs Radian, and Hypotenuse'
        ),
        body: t(
          `Trigonometry mein teen galtiyan sabse zyada hoti hain. **Galti 1: Opposite aur adjacent ko milana.** Sin mein angle ke saamne wali side aati hai, cos mein bagal wali. Agar dono ko ulta kar diya, toh sin aur cos swap ho jaayenge. Pehle angle ko mark karo, phir dekho kaunsi side uske saamne hai aur kaunsi bagal mein.

**Galti 2: Degree aur radian milana.** Exam mein angle degree mein diya hota hai (30°, 45°), par calculator ya Python mein \`math.sin\` radian leta hai. Python mein pehle \`math.radians(30)\` se degree ko radian mein badlo, phir sin nikaalo. Seedha \`math.sin(30)\` likhne se galat jawab aayega — 30 radian ka sin nikaal lega.

**Galti 3: Hypotenuse ko side samajhna.** Hypotenuse hamesha sabse lambi side hoti hai aur 90 degree angle ke saamne hoti hai. Sin aur cos kabhi 1 se zyada nahi hote — agar sin = 1.2 aa raha hai, toh hypotenuse galat li hai.`,
          `Three mistakes are most common in trigonometry. **Mistake 1: Mixing up opposite and adjacent.** Sin uses the side opposite the angle, cos uses the side next to it. If you swap them, sin and cos swap too. First mark the angle, then see which side is opposite it and which is next to it.

**Mistake 2: Mixing up degrees and radians.** In exams, angles are given in degrees (30°, 45°), but a calculator or Python \`math.sin\` takes radians. In Python, first turn degrees into radians with \`math.radians(30)\`, then find the sin. Writing \`math.sin(30)\` directly gives a wrong answer — it finds the sin of 30 radians.

**Mistake 3: Taking a side as the hypotenuse.** The hypotenuse is always the longest side and sits opposite the 90 degree angle. Sin and cos are never greater than 1 — if sin comes out as 1.2, the hypotenuse was taken wrong.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Angle 0°, Angle 90° aur Tan 90°',
          '5. Edge Cases: Angle 0°, Angle 90°, and Tan 90°'
        ),
        body: t(
          `Edge cases yaad rakho. **1. Angle 0°.** Sin 0° = 0, cos 0° = 1, tan 0° = 0. Iska matlab hai angle hi nahi hai — triangle flat ho gaya hai, opposite side zero hai.

**2. Angle 90°.** Sin 90° = 1, cos 90° = 0, tan 90° = undefined (1/0). Kyunki tan = sin/cos aur cos 90° = 0 hai, isliye tan 90° ko divide by zero ki wajah se define nahi kiya ja sakta. Exam mein "tan 90° ka maan kya hai?" ka jawab hai "undefined" ya "infinite".

**3. Hypotenuse hamesha sabse lambi.** Kisi bhi right triangle mein hypotenuse opposite aur adjacent dono se badi hoti hai. Agar aapki ginti mein koi side hypotenuse se badi aa rahi hai, toh hisaab galat hai.

**4. 45° par sin = cos.** Angle 45° ho toh sin 45° = cos 45° = 1/√2 = 0.7071 aur tan 45° = 1. Iska matlab hai opposite aur adjacent barabar hain — triangle isosceles right triangle hai.`,
          `Remember these edge cases. **1. Angle 0°.** Sin 0° = 0, cos 0° = 1, tan 0° = 0. That means there is no angle at all — the triangle is flat, and the opposite side is zero.

**2. Angle 90°.** Sin 90° = 1, cos 90° = 0, tan 90° is undefined (1/0). Because tan = sin/cos and cos 90° = 0, tan 90° cannot be defined due to division by zero. In an exam, the answer to "what is the value of tan 90°?" is "undefined" or "infinite".

**3. The hypotenuse is always the longest.** In any right triangle, the hypotenuse is longer than both the opposite and the adjacent sides. If your working shows some side longer than the hypotenuse, the calculation is wrong.

**4. At 45°, sin = cos.** When the angle is 45°, sin 45° = cos 45° = 1/√2 = 0.7071 and tan 45° = 1. That means the opposite and adjacent sides are equal — the triangle is an isosceles right triangle.`
        )
      },
      {
        heading: t(
          '6. What-If: Angle Double, Doori Double aur Seedhi ka Angle',
          '6. What-If: Double Angle, Double Distance, and a Ladder Angle'
        ),
        body: t(
          `Ab "what-if" sawaal. **What if: angle 30° se 45° ho jaaye?** Tower se doori wahi 60 m rahe, par angle 45° ho jaaye, toh unchaai = 60 × tan 45° = 60 × 1 = 60 m ho jaayegi. Angle badhne se unchaai badhti hai — 30° par 34.64 m thi, 45° par 60 m ho gayi.

**What if: doori double ho jaaye?** Angle wahi 30° rahe aur doori 60 se 120 m ho jaaye, toh unchaai = 120 × tan 30° = 69.28 m ho jaayegi — 2 guna. Unchaai doori par seedha depend karti hai, isliye doori double toh unchaai double.

**What if: seedhi ka angle poochha ho?** Seedhi 10 m lambi hai aur deewar par 8.66 m unchaai par tiki hai. Sin theta = 8.66/10 = 0.866, isliye theta = 60°. Seedhi ka angle nikaalne ke liye pehle sin, cos ya tan nikaalo, phir ulta (inverse) se angle nikaalo.`,
          `Now some "what-if" questions. **What if the angle changes from 30° to 45°?** If the distance from the tower stays 60 m but the angle becomes 45°, the height becomes 60 × tan 45° = 60 × 1 = 60 m. As the angle grows, the height grows — at 30° it was 34.64 m, at 45° it is 60 m.

**What if the distance doubles?** If the angle stays 30° and the distance goes from 60 to 120 m, the height becomes 120 × tan 30° = 69.28 m — 2 times. Height depends directly on distance, so doubling the distance doubles the height.

**What if a ladder angle is asked?** A ladder is 10 m long and rests 8.66 m high on a wall. Sin theta = 8.66/10 = 0.866, so theta = 60°. To find a ladder angle, first find sin, cos, or tan, then find the angle with the inverse.`
        )
      },
      {
        heading: t(
          '7. Summary: Trigonometry ka Poora Picture',
          '7. Summary: The Full Picture of Trigonometry'
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. **Sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent** — SOH-CAH-TOA se yaad rakho. **Sin² + cos² = 1** har angle ke liye sahi hai, aur **tan = sin/cos** hota hai.

Standard values yaad rakho: sin 30° = 1/2, cos 60° = 1/2, sin 45° = cos 45° = 0.7071, tan 45° = 1, sin 90° = 1, cos 90° = 0, tan 90° = undefined. Upar wale examples mein 3-4-5 triangle ke ratios sin 0.6, cos 0.8, tan 0.75 the, aur 60 m doori par 30° angle se tower ki unchaai 34.64 m nikli.

Revision ke liye yeh yaad rakho: pehle angle mark karo, phir opposite/adjacent/hypotenuse pehchano, phir sahi ratio lagao. Practice mein hypotenuse 13 aur base 5 se perpendicular 12 niklega, aur sin 0.923, cos 0.385, tan 2.4 aayenge.`,
          `Let us tie the whole article together. **Sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent** — remember them with SOH-CAH-TOA. **Sin² + cos² = 1** holds for every angle, and **tan = sin/cos**.

Remember the standard values: sin 30° = 1/2, cos 60° = 1/2, sin 45° = cos 45° = 0.7071, tan 45° = 1, sin 90° = 1, cos 90° = 0, tan 90° is undefined. In the examples above, the 3-4-5 triangle ratios were sin 0.6, cos 0.8, tan 0.75, and from 60 m away at a 30° angle the tower height was 34.64 m.

For revision, remember this: first mark the angle, then identify opposite/adjacent/hypotenuse, then apply the correct ratio. In the practice, with hypotenuse 13 and base 5, the perpendicular will be 12, and sin 0.923, cos 0.385, and tan 2.4 will follow.`
        )
      }
    ],
    diagram: {
      kind: 'table',
      title: t(
        'Standard Values Table: 0° se 90° Tak',
        'Standard Values Table: From 0° to 90°'
      ),
      caption: t(
        'Sin badhta hai 0 se 1 tak, cos ghatta hai 1 se 0 tak, tan 45° par 1 hota hai',
        'Sin rises from 0 to 1, cos falls from 1 to 0, tan is 1 at 45°'
      ),
      nodes: [],
      headers: [
        t('Angle', 'Angle'),
        t('sin', 'sin'),
        t('cos', 'cos'),
        t('tan', 'tan')
      ],
      rows: [
        [t('0°', '0°'), t('0', '0'), t('1', '1'), t('0', '0')],
        [t('30°', '30°'), t('1/2', '1/2'), t('√3/2', '√3/2'), t('1/√3', '1/√3')],
        [t('45°', '45°'), t('1/√2', '1/√2'), t('1/√2', '1/√2'), t('1', '1')],
        [t('60°', '60°'), t('√3/2', '√3/2'), t('1/2', '1/2'), t('√3', '√3')],
        [t('90°', '90°'), t('1', '1'), t('0', '0'), t('undefined', 'undefined')]
      ]
    },
    codeExamples: [
      {
        title: t(
          'Standard Values: Sin 45, Cos 45, Tan 45, Sin 30, Cos 60',
          'Standard Values: Sin 45, Cos 45, Tan 45, Sin 30, Cos 60'
        ),
        language: 'python',
        code: `import math
print("sin 45 =", round(math.sin(math.radians(45)), 4))
print("cos 45 =", round(math.cos(math.radians(45)), 4))
print("tan 45 =", round(math.tan(math.radians(45)), 4))
print("sin 30 =", round(math.sin(math.radians(30)), 4), "cos 60 =", round(math.cos(math.radians(60)), 4))`,
        output: `sin 45 = 0.7071
cos 45 = 0.7071
tan 45 = 1.0
sin 30 = 0.5 cos 60 = 0.5`
      },
      {
        title: t(
          'Seedhi 10 m, Angle 60°: Unchaai aur Doori',
          'Ladder 10 m, Angle 60°: Height and Distance'
        ),
        language: 'python',
        code: `import math
# Ladder 10 m, angle 60 degrees with ground
print("Height on wall:", round(10 * math.sin(math.radians(60)), 2), "m")
print("Foot from wall:", round(10 * math.cos(math.radians(60)), 2), "m")`,
        output: `Height on wall: 8.66 m
Foot from wall: 5.0 m`
      }
    ],
    mcqs: [
      {
        q: t(
          'Sin 30° ka maan kya hai?',
          'What is the value of sin 30°?'
        ),
        opts: [
          t('1/2', '1/2'),
          t('√3/2', '√3/2'),
          t('1/√2', '1/√2'),
          t('1', '1')
        ],
        ans: 0,
        expl: t(
          'Sahi jawab: sin 30° = 1/2 — yeh standard value hai, yaad rakhni hai.',
          'Correct answer: sin 30° = 1/2 — this is a standard value to remember.'
        )
      },
      {
        q: t(
          'Tan 45° ka maan kya hai?',
          'What is the value of tan 45°?'
        ),
        opts: [
          t('0', '0'),
          t('1/2', '1/2'),
          t('1', '1'),
          t('√3', '√3')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: 45° par opposite aur adjacent barabar hote hain, isliye tan 45° = 1/1 = 1.',
          'Correct answer: at 45° the opposite and adjacent sides are equal, so tan 45° = 1/1 = 1.'
        )
      },
      {
        q: t(
          'Cos 60° ka maan kya hai?',
          'What is the value of cos 60°?'
        ),
        opts: [
          t('1', '1'),
          t('√3/2', '√3/2'),
          t('1/2', '1/2'),
          t('0', '0')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: cos 60° = 1/2 — sin 30° ke barabar, kyunki 30° aur 60° complementary angles hain.',
          'Correct answer: cos 60° = 1/2 — equal to sin 30°, because 30° and 60° are complementary angles.'
        )
      },
      {
        q: t(
          'Sin² theta + cos² theta ka maan kya hota hai?',
          'What is the value of sin² theta + cos² theta?'
        ),
        opts: [
          t('0', '0'),
          t('1', '1'),
          t('2', '2'),
          t('tan theta', 'tan theta')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: yeh identity har angle ke liye 1 hoti hai — 3-4-5 triangle mein bhi 0.36 + 0.64 = 1.',
          'Correct answer: this identity equals 1 for every angle — in the 3-4-5 triangle too, 0.36 + 0.64 = 1.'
        )
      },
      {
        q: t(
          'Agar tan theta = 1 hai, toh theta kya hai?',
          'If tan theta = 1, what is theta?'
        ),
        opts: [
          t('30°', '30°'),
          t('45°', '45°'),
          t('60°', '60°'),
          t('90°', '90°')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: tan 45° = 1, isliye theta = 45° — is angle par opposite aur adjacent barabar hote hain.',
          'Correct answer: tan 45° = 1, so theta = 45° — at this angle the opposite and adjacent sides are equal.'
        )
      }
    ],
    keyNotes: [
      t(
        'Sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent (SOH-CAH-TOA).',
        'Sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent (SOH-CAH-TOA).'
      ),
      t(
        'Sin² + cos² = 1 har angle ke liye; tan = sin/cos.',
        'Sin squared + cos squared = 1 for every angle; tan = sin/cos.'
      ),
      t(
        'Standard values: sin 30° = 1/2, cos 60° = 1/2, tan 45° = 1, sin 90° = 1.',
        'Standard values: sin 30° = 1/2, cos 60° = 1/2, tan 45° = 1, sin 90° = 1.'
      ),
      t(
        'Tan 90° undefined hota hai kyunki cos 90° = 0 (divide by zero).',
        'Tan 90° is undefined because cos 90° = 0 (division by zero).'
      ),
      t(
        'Python mein math.sin degree nahi, radian leta hai — pehle math.radians se badlo.',
        'In Python, math.sin takes radians, not degrees — convert first with math.radians.'
      )
    ],
    practice: {
      title: t(
        'Practice: Hypotenuse 13, Base 5 — Perpendicular aur Ratios',
        'Practice: Hypotenuse 13, Base 5 — Perpendicular and Ratios'
      ),
      task: t(
        'Right triangle mein hypotenuse 13 cm aur base (adjacent) 5 cm hai. Pehle Pythagoras se perpendicular nikaalo, phir sin, cos aur tan nikaalo. Starter code run karo aur done tab maanoge jab output mein perpendicular 12.0, sin 0.923, cos 0.385 aur tan 2.4 dikhe.',
        'In a right triangle, the hypotenuse is 13 cm and the base (adjacent) is 5 cm. First find the perpendicular with Pythagoras, then find sin, cos, and tan. Run the starter code; you are done when the output shows perpendicular 12.0, sin 0.923, cos 0.385, and tan 2.4.'
      ),
      language: 'python',
      starter: `# Hypotenuse 13, base 5 -> perpendicular 12
perp = (13 ** 2 - 5 ** 2) ** 0.5
print("Perpendicular:", perp)
print("sin =", round(perp / 13, 3))
print("cos =", round(5 / 13, 3))
print("tan =", round(perp / 5, 3))`,
      expected: `Perpendicular: 12.0
sin = 0.923
cos = 0.385
tan = 2.4`
    },
    readMinutes: 12
  };

const quantQuadratic: Article = {
    id: 'quant-quadratic',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Quadratic Equations — Roots, Discriminant aur Factoring',
      'Quadratic Equations — Roots, Discriminant, and Factoring'
    ),
    summary: t(
      'ax² + bx + c = 0 ke roots: discriminant D = b² - 4ac se pata chalta hai ki roots real hain ya nahi — D > 0 do alag roots, D = 0 ek double root, D < 0 koi real root nahi. Roots ka sum -b/a aur product c/a hota hai.',
      'Roots of ax² + bx + c = 0: the discriminant D = b² - 4ac tells whether the roots are real — D > 0 means two different roots, D = 0 means one double root, D < 0 means no real roots. The sum of roots is -b/a and the product is c/a.'
    ),
    sections: [
      {
        heading: t(
          '1. Quadratic Equation Kya Hai? (ax² + bx + c = 0)',
          '1. What Is a Quadratic Equation? (ax² + bx + c = 0)'
        ),
        body: t(
          `Quadratic equation woh equation hoti hai jismein variable ki sabse badi power 2 hoti hai. Uska standard form hai **ax² + bx + c = 0**, jahan a, b aur c numbers hain aur **a kabhi 0 nahi hota** (agar a = 0 ho jaaye, toh x² wala term khatam ho jaayega aur equation linear ban jaayegi).

Equation ke **roots** woh x ki values hain jin par equation zero ho jaati hai — matlab jin values ko daalne par left side 0 ban jaaye. Quadratic equation ke zyada se zyada **2 roots** hote hain. Roots nikaalne ke do tareeke hain: **factoring** (jaise x² − 5x + 6 = (x − 2)(x − 3), isliye roots 2 aur 3) aur **quadratic formula** (x = (−b ± √(b² − 4ac)) / 2a).

**Discriminant** D = b² − 4ac formula ke andar wali value hai, aur yeh batata hai ki roots kaise honge: D > 0 ho toh do alag real roots, D = 0 ho toh ek hi root do baar (equal roots), aur D < 0 ho toh koi real root nahi hota.`,
          `A quadratic equation is an equation where the highest power of the variable is 2. Its standard form is **ax² + bx + c = 0**, where a, b, and c are numbers and **a is never 0** (if a becomes 0, the x² term disappears and the equation becomes linear).

The **roots** of an equation are the values of x that make the equation zero — the values that make the left side 0 when substituted. A quadratic equation has at most **2 roots**. There are two ways to find roots: **factoring** (for example, x² − 5x + 6 = (x − 2)(x − 3), so the roots are 2 and 3) and the **quadratic formula** (x = (−b ± √(b² − 4ac)) / 2a).

The **discriminant** D = b² − 4ac is the value inside the formula, and it tells you what the roots are like: if D > 0, there are two different real roots; if D = 0, there is one root twice (equal roots); and if D < 0, there are no real roots.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Area, Profit aur Projectile',
          '2. Real-Life Examples: Area, Profit, and Projectile'
        ),
        body: t(
          `Quadratic equations roz ki problems mein chhupi hoti hain. **Area ka sawaal:** ek rectangle ki length uski breadth se 3 m zyada hai aur area 40 sq m hai. Breadth x ho toh length x + 3, aur area x(x + 3) = 40 — yeh x² + 3x − 40 = 0 ban jaata hai. Iske roots 5 aur −8 hain, aur breadth negative nahi ho sakti, isliye breadth 5 m aur length 8 m hai.

**Profit ka sawaal:** kisi cheez ko x rupees mein bechne par profit (x − 10)(20 − x) ho, toh profit zero kab hoga? Jab x = 10 ya x = 20 — yahi quadratic ke roots hain. Profit ka graph ek ulta U hota hai, aur uska top (maximum profit) dono roots ke beech mein hota hai.

**Projectile (phenki hui cheez):** upar phenki gayi ball ki unchaai time ke saath quadratic hoti hai — h = 20t − 5t². Ball zameen par kab aayegi? Jab h = 0, matlab 5t(4 − t) = 0, isliye t = 0 ya t = 4 seconds. Yahi roots hain.`,
          `Quadratic equations hide inside everyday problems. **Area problem:** a rectangle length is 3 m more than its breadth and its area is 40 sq m. If the breadth is x, the length is x + 3, and the area x(x + 3) = 40 — this becomes x² + 3x − 40 = 0. Its roots are 5 and −8, and breadth cannot be negative, so the breadth is 5 m and the length is 8 m.

**Profit problem:** if selling something for x rupees gives a profit of (x − 10)(20 − x), when is the profit zero? When x = 10 or x = 20 — these are the quadratic roots. The profit graph is an upside-down U, and its top (maximum profit) lies between the two roots.

**Projectile (a thrown object):** the height of a ball thrown upwards is quadratic in time — h = 20t − 5t². When does the ball hit the ground? When h = 0, which means 5t(4 − t) = 0, so t = 0 or t = 4 seconds. These are the roots.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: x² - 5x + 6 = 0 (Roots 2, 3), D = 0 aur D < 0',
          '3. Step-by-Step: x² - 5x + 6 = 0 (Roots 2, 3), D = 0, and D < 0'
        ),
        body: t(
          `Ab hum teen worked examples karte hain. **Example 1: x² − 5x + 6 = 0 ke roots nikaalo.** Step 1: discriminant nikaalo — D = b² − 4ac = (−5)² − 4 × 1 × 6 = 25 − 24 = **1**. D > 0 hai, isliye do alag real roots honge. Step 2: quadratic formula lagao — x = (5 ± √1)/2 = (5 ± 1)/2. Step 3: do roots — (5 + 1)/2 = **3** aur (5 − 1)/2 = **2**. Check karo: 2 + 3 = 5 = −b/a aur 2 × 3 = 6 = c/a — dono sahi hain. Factoring se bhi wahi: (x − 2)(x − 3) = 0.

**Example 2: x² + 4x + 4 = 0.** D = 16 − 16 = **0**. D = 0 ka matlab hai ek hi root do baar — x = −4/2 = **−2** (double root). Factoring se: (x + 2)² = 0, isliye root −2 hai.

**Example 3: x² + 2x + 5 = 0.** D = 4 − 20 = **−16**. D < 0 ka matlab hai koi real root nahi hai — negative number ka square root real nahi hota. Aise sawaal ka jawab hai "no real roots". Neeche wala code teeno examples compute karta hai.`,
          `Now let us work through three examples. **Example 1: Find the roots of x² − 5x + 6 = 0.** Step 1: find the discriminant — D = b² − 4ac = (−5)² − 4 × 1 × 6 = 25 − 24 = **1**. D is greater than 0, so there will be two different real roots. Step 2: apply the quadratic formula — x = (5 ± √1)/2 = (5 ± 1)/2. Step 3: two roots — (5 + 1)/2 = **3** and (5 − 1)/2 = **2**. Check: 2 + 3 = 5 = −b/a and 2 × 3 = 6 = c/a — both correct. Factoring gives the same: (x − 2)(x − 3) = 0.

**Example 2: x² + 4x + 4 = 0.** D = 16 − 16 = **0**. D = 0 means one root twice — x = −4/2 = **−2** (a double root). By factoring: (x + 2)² = 0, so the root is −2.

**Example 3: x² + 2x + 5 = 0.** D = 4 − 20 = **−16**. D < 0 means there are no real roots — the square root of a negative number is not real. The answer to such a question is "no real roots". The code below computes all three examples.`
        ),
        code: {
          title: t(
            'Discriminant aur Roots: Teen Cases',
            'Discriminant and Roots: Three Cases'
          ),
          language: 'python',
          code: `import math
# x^2 - 5x + 6 = 0
a, b, c = 1, -5, 6
d = b ** 2 - 4 * a * c
print("Discriminant:", d)
r1 = (-b + math.sqrt(d)) / (2 * a)
r2 = (-b - math.sqrt(d)) / (2 * a)
print("Roots:", r1, "and", r2)
# x^2 + 4x + 4 = 0
d2 = 4 ** 2 - 4 * 1 * 4
print("x^2 + 4x + 4 discriminant:", d2, "-> equal roots:", -4 / 2)
# x^2 + 2x + 5 = 0
d3 = 2 ** 2 - 4 * 1 * 5
print("x^2 + 2x + 5 discriminant:", d3, "-> no real roots")`,
          output: `Discriminant: 1
Roots: 3.0 and 2.0
x^2 + 4x + 4 discriminant: 0 -> equal roots: -2.0
x^2 + 2x + 5 discriminant: -16 -> no real roots`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Sign Galti, 2a Bhoolna aur D < 0 ka Matlab',
          '4. Common Mistakes: Sign Errors, Forgetting 2a, and What D < 0 Means'
        ),
        body: t(
          `Quadratic equations mein teen galtiyan sabse zyada hoti hain. **Galti 1: Sign ki galti.** Formula mein −b hai — agar b = −5 hai, toh −b = 5 hota hai, −5 nahi. x² − 5x + 6 mein b = −5 hai, isliye formula mein (5 ± √1)/2 aata hai. Sign ulta karne se roots galat ho jaate hain.

**Galti 2: 2a se divide karna bhool jana.** Formula hai x = (−b ± √D) / 2a — poora numerator 2a se divide hota hai, sirf √D nahi. (5 ± 1)/2 mein 5 aur 1 dono 2 se divide hote hain. Sirf root ko divide karne se galat jawab aayega.

**Galti 3: D < 0 ka matlab galat samajhna.** D < 0 ka matlab hai "koi real root nahi hai", "koi root hi nahi hai" nahi. Complex roots hote hain, par aptitude exam mein sirf real roots maange jaate hain, isliye jawab "no real roots" likho. Aur factoring karte waqt do numbers aise chuno jinka sum −b/a ho aur product c/a — jaise x² − 5x + 6 ke liye 2 aur 3 (sum 5, product 6).`,
          `Three mistakes are most common in quadratic equations. **Mistake 1: Sign errors.** The formula has −b — if b = −5, then −b = 5, not −5. In x² − 5x + 6, b = −5, so the formula gives (5 ± √1)/2. Reversing the sign gives wrong roots.

**Mistake 2: Forgetting to divide by 2a.** The formula is x = (−b ± √D) / 2a — the whole numerator is divided by 2a, not just √D. In (5 ± 1)/2, both 5 and 1 are divided by 2. Dividing only the root gives a wrong answer.

**Mistake 3: Misreading D < 0.** D < 0 means "no real roots", not "no roots at all". Complex roots exist, but aptitude exams only ask for real roots, so write "no real roots". And when factoring, pick two numbers whose sum is −b/a and whose product is c/a — for x² − 5x + 6, that is 2 and 3 (sum 5, product 6).`
        )
      },
      {
        heading: t(
          '5. Edge Cases: a = 0, D = 0 aur c = 0',
          '5. Edge Cases: a = 0, D = 0, and c = 0'
        ),
        body: t(
          `Edge cases yaad rakho. **1. a = 0 ho jaaye.** Agar equation mein x² ka coefficient 0 hai, toh woh quadratic hi nahi hai — woh linear equation ban jaati hai. Jaise 0x² + 3x + 2 = 0 matlab 3x + 2 = 0, jiska ek hi root hai: x = −2/3. Sawaal mein pehle check karo ki a zero toh nahi hai.

**2. D = 0 ho.** Discriminant zero ho toh dono roots barabar hote hain — ek hi root do baar. x² + 4x + 4 = 0 mein root −2 double hai. Aise equation ko perfect square likha ja sakta hai: (x + 2)² = 0.

**3. c = 0 ho.** Agar constant term zero hai, jaise x² − 5x = 0, toh ek root hamesha 0 hota hai: x(x − 5) = 0, isliye roots 0 aur 5. c = 0 dekhte hi pehle x common nikaalo — factoring turant ho jaata hai.

**4. b = 0 ho.** Agar middle term zero hai, jaise x² − 9 = 0, toh roots ±3 hote hain: x² = 9, isliye x = 3 ya x = −3. Dono signs mat bhoolo.`,
          `Remember these edge cases. **1. a = 0.** If the x² coefficient is 0, it is not a quadratic at all — it becomes a linear equation. For example, 0x² + 3x + 2 = 0 means 3x + 2 = 0, which has only one root: x = −2/3. First check that a is not zero.

**2. D = 0.** If the discriminant is zero, both roots are equal — one root twice. In x² + 4x + 4 = 0, the root −2 is double. Such an equation can be written as a perfect square: (x + 2)² = 0.

**3. c = 0.** If the constant term is zero, like x² − 5x = 0, one root is always 0: x(x − 5) = 0, so the roots are 0 and 5. As soon as you see c = 0, first take x common — the factoring is instant.

**4. b = 0.** If the middle term is zero, like x² − 9 = 0, the roots are ±3: x² = 9, so x = 3 or x = −3. Do not forget both signs.`
        )
      },
      {
        heading: t(
          '6. What-If: c = 0, Roots se Equation aur Sum-Product Check',
          '6. What-If: c = 0, Equation from Roots, and the Sum-Product Check'
        ),
        body: t(
          `Ab "what-if" sawaal. **What if: c = 0 ho?** x² − 9x = 0 mein x common nikaalo: x(x − 9) = 0, isliye roots 0 aur 9 hain. c = 0 wale sawaalon mein quadratic formula lagane ki zaroorat hi nahi padti — factoring ek step mein ho jaata hai.

**What if: roots diye hon aur equation banani ho?** Roots 3 aur 4 diye hon toh equation banti hai x² − (sum)x + (product) = 0 — sum = 7, product = 12, isliye equation **x² − 7x + 12 = 0**. Yeh ulta sawaal exam mein bahut aata hai: roots se equation banana.

**What if: roots check karne hon?** x² − 7x + 12 = 0 ke roots 3 aur 4 hain — check karo: sum 3 + 4 = 7 = −b/a, product 3 × 4 = 12 = c/a. Agar aapke roots ka sum aur product match nahi kar rahe, toh roots galat hain. Yeh sum-product check har root ke baad karo — yeh 5 seconds mein galti pakad leta hai.`,
          `Now some "what-if" questions. **What if c = 0?** In x² − 9x = 0, take x common: x(x − 9) = 0, so the roots are 0 and 9. In c = 0 questions, there is no need for the quadratic formula at all — the factoring finishes in one step.

**What if roots are given and the equation must be made?** If the roots are 3 and 4, the equation is x² − (sum)x + (product) = 0 — sum = 7, product = 12, so the equation is **x² − 7x + 12 = 0**. This reverse question appears very often in exams: making an equation from roots.

**What if roots must be checked?** The roots of x² − 7x + 12 = 0 are 3 and 4 — check: sum 3 + 4 = 7 = −b/a, product 3 × 4 = 12 = c/a. If your roots sum and product do not match, the roots are wrong. Do this sum-product check after every root — it catches a mistake in 5 seconds.`
        )
      },
      {
        heading: t(
          '7. Summary: Quadratic Equations ka Poora Picture',
          '7. Summary: The Full Picture of Quadratic Equations'
        ),
        body: t(
          `Chalo poora article ek jagah par bandhte hain. **Standard form: ax² + bx + c = 0 (a ≠ 0).** **Discriminant: D = b² − 4ac.** D > 0 ho toh do alag real roots, D = 0 ho toh ek double root, D < 0 ho toh koi real root nahi. **Roots: x = (−b ± √D) / 2a.** **Sum of roots = −b/a, product of roots = c/a.**

Upar wale examples yaad rakho: x² − 5x + 6 = 0 ke roots 2 aur 3 (D = 1); x² + 4x + 4 = 0 ka double root −2 (D = 0); x² + 2x + 5 = 0 ke koi real roots nahi (D = −16). Roots 3 aur 4 se equation banti hai x² − 7x + 12 = 0.

Revision ke liye yeh yaad rakho: pehle D nikaalo (roots ka nature pata chal jaayega), phir formula ya factoring se roots nikaalo, phir sum-product check se verify karo. Practice mein x² − 11x + 30 = 0 ke roots 5 aur 6 (D = 1) aur x² − 8x + 16 = 0 ka double root 4 (D = 0) aana chahiye.`,
          `Let us tie the whole article together. **Standard form: ax² + bx + c = 0 (a ≠ 0).** **Discriminant: D = b² − 4ac.** If D > 0, there are two different real roots; if D = 0, one double root; if D < 0, no real roots. **Roots: x = (−b ± √D) / 2a.** **Sum of roots = −b/a, product of roots = c/a.**

Remember the examples above: x² − 5x + 6 = 0 has roots 2 and 3 (D = 1); x² + 4x + 4 = 0 has a double root of −2 (D = 0); x² + 2x + 5 = 0 has no real roots (D = −16). From roots 3 and 4, the equation is x² − 7x + 12 = 0.

For revision, remember this: first find D (it tells you the nature of the roots), then find the roots by formula or factoring, then verify with the sum-product check. In the practice, x² − 11x + 30 = 0 should give roots 5 and 6 (D = 1), and x² − 8x + 16 = 0 a double root of 4 (D = 0).`
        )
      }
    ],
    diagram: {
      kind: 'flow',
      title: t(
        'Quadratic Equation Solve Karne ke Steps',
        'Steps to Solve a Quadratic Equation'
      ),
      caption: t(
        'Pehle D nikaalo, phir roots, phir sum-product se check karo',
        'First find D, then the roots, then check with sum and product'
      ),
      nodes: [
        {
          t: t('Step 1: a, b, c pehchano', 'Step 1: Identify a, b, c'),
          s: t('x² - 5x + 6 = 0 mein a = 1, b = -5, c = 6', 'In x² - 5x + 6 = 0, a = 1, b = -5, c = 6')
        },
        {
          t: t('Step 2: D = b² - 4ac nikaalo', 'Step 2: Find D = b² - 4ac'),
          s: t('D = 25 - 24 = 1 > 0, isliye do alag real roots', 'D = 25 - 24 = 1 > 0, so two different real roots')
        },
        {
          t: t('Step 3: x = (-b ± √D) / 2a', 'Step 3: x = (-b ± √D) / 2a'),
          s: t('x = (5 ± 1)/2 — roots 3 aur 2', 'x = (5 ± 1)/2 — roots 3 and 2')
        },
        {
          t: t('Step 4: Sum-product se check karo', 'Step 4: Check with sum and product'),
          s: t('Sum 2 + 3 = 5 = -b/a, product 2 x 3 = 6 = c/a', 'Sum 2 + 3 = 5 = -b/a, product 2 x 3 = 6 = c/a')
        },
        {
          t: t('D < 0 ho toh jawab: no real roots', 'If D < 0, the answer is: no real roots'),
          s: t('x² + 2x + 5 = 0 mein D = -16', 'In x² + 2x + 5 = 0, D = -16')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          'x² - 9x + 20 = 0: Roots 5 aur 4',
          'x² - 9x + 20 = 0: Roots 5 and 4'
        ),
        language: 'python',
        code: `import math
# x^2 - 9x + 20 = 0
a, b, c = 1, -9, 20
d = b ** 2 - 4 * a * c
print("Discriminant:", d)
print("Roots:", (-b + math.sqrt(d)) / 2, "and", (-b - math.sqrt(d)) / 2)`,
        output: `Discriminant: 1
Roots: 5.0 and 4.0`
      },
      {
        title: t(
          'Sum aur Product: x² - 7x + 12 = 0 ke Roots 3 aur 4',
          'Sum and Product: Roots 3 and 4 of x² - 7x + 12 = 0'
        ),
        language: 'python',
        code: `# x^2 - 7x + 12 = 0: sum and product of roots
print("Sum of roots = -b/a =", 7)
print("Product of roots = c/a =", 12)
print("Check: 3 + 4 =", 3 + 4, "and 3 * 4 =", 3 * 4)`,
        output: `Sum of roots = -b/a = 7
Product of roots = c/a = 12
Check: 3 + 4 = 7 and 3 * 4 = 12`
      }
    ],
    mcqs: [
      {
        q: t(
          'x² - 7x + 10 = 0 ke roots kya hain?',
          'What are the roots of x² - 7x + 10 = 0?'
        ),
        opts: [
          t('2 aur 5', '2 and 5'),
          t('1 aur 10', '1 and 10'),
          t('3 aur 4', '3 and 4'),
          t('-2 aur -5', '-2 and -5')
        ],
        ans: 0,
        expl: t(
          'Sahi jawab: 2 + 5 = 7 aur 2 x 5 = 10, isliye (x - 2)(x - 5) = 0 aur roots 2 aur 5 hain.',
          'Correct answer: 2 + 5 = 7 and 2 x 5 = 10, so (x - 2)(x - 5) = 0 and the roots are 2 and 5.'
        )
      },
      {
        q: t(
          'x² - 6x + 9 = 0 ka discriminant kya hai?',
          'What is the discriminant of x² - 6x + 9 = 0?'
        ),
        opts: [
          t('36', '36'),
          t('0', '0'),
          t('-9', '-9'),
          t('9', '9')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: D = b² - 4ac = 36 - 36 = 0, isliye ek double root hai (x = 3).',
          'Correct answer: D = b squared - 4ac = 36 - 36 = 0, so there is one double root (x = 3).'
        )
      },
      {
        q: t(
          'x² + 3x + 2 = 0 ke roots kya hain?',
          'What are the roots of x² + 3x + 2 = 0?'
        ),
        opts: [
          t('1 aur 2', '1 and 2'),
          t('-1 aur -2', '-1 and -2'),
          t('-1 aur 2', '-1 and 2'),
          t('1 aur -2', '1 and -2')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: (-1) + (-2) = -3 aur (-1) x (-2) = 2, isliye (x + 1)(x + 2) = 0 aur roots -1 aur -2 hain.',
          'Correct answer: (-1) + (-2) = -3 and (-1) x (-2) = 2, so (x + 1)(x + 2) = 0 and the roots are -1 and -2.'
        )
      },
      {
        q: t(
          'Jin roots 3 aur 4 hon, woh quadratic equation kaunsi hai?',
          'Which quadratic equation has roots 3 and 4?'
        ),
        opts: [
          t('x² - 7x + 12 = 0', 'x² - 7x + 12 = 0'),
          t('x² + 7x + 12 = 0', 'x² + 7x + 12 = 0'),
          t('x² - 12x + 7 = 0', 'x² - 12x + 7 = 0'),
          t('x² - 7x - 12 = 0', 'x² - 7x - 12 = 0')
        ],
        ans: 0,
        expl: t(
          'Sahi jawab: sum = 3 + 4 = 7 aur product = 3 x 4 = 12, isliye equation x² - (sum)x + (product) = x² - 7x + 12 = 0 hai.',
          'Correct answer: sum = 3 + 4 = 7 and product = 3 x 4 = 12, so the equation is x squared - (sum)x + (product) = x squared - 7x + 12 = 0.'
        )
      },
      {
        q: t(
          'Agar discriminant D < 0 hai, toh roots ke baare mein kya sahi hai?',
          'If the discriminant D < 0, what is true about the roots?'
        ),
        opts: [
          t('Do alag real roots hain', 'There are two different real roots'),
          t('Ek double root hai', 'There is one double root'),
          t('Koi real root nahi hai', 'There are no real roots'),
          t('Ek root zero hai', 'One root is zero')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: D < 0 ka matlab hai negative number ka square root lena padega, jo real nahi hota — isliye koi real root nahi hai.',
          'Correct answer: D < 0 means taking the square root of a negative number, which is not real — so there are no real roots.'
        )
      }
    ],
    keyNotes: [
      t(
        'Standard form: ax² + bx + c = 0 (a ≠ 0); discriminant D = b² - 4ac.',
        'Standard form: ax² + bx + c = 0 (a ≠ 0); discriminant D = b² - 4ac.'
      ),
      t(
        'D > 0: do alag real roots; D = 0: ek double root; D < 0: koi real root nahi.',
        'D > 0: two different real roots; D = 0: one double root; D < 0: no real roots.'
      ),
      t(
        'Roots: x = (-b ± √D) / 2a — poora numerator 2a se divide hota hai.',
        'Roots: x = (-b ± √D) / 2a — the whole numerator is divided by 2a.'
      ),
      t(
        'Sum of roots = -b/a, product of roots = c/a — har root ke baad check karo.',
        'Sum of roots = -b/a, product of roots = c/a — check after every root.'
      ),
      t(
        'c = 0 ho toh ek root hamesha 0 hota hai; roots se equation: x² - (sum)x + (product) = 0.',
        'If c = 0, one root is always 0; equation from roots: x² - (sum)x + (product) = 0.'
      )
    ],
    practice: {
      title: t(
        'Practice: x² - 11x + 30 = 0 aur x² - 8x + 16 = 0',
        'Practice: x² - 11x + 30 = 0 and x² - 8x + 16 = 0'
      ),
      task: t(
        'x² - 11x + 30 = 0 ka discriminant nikaalo aur dono roots batao. Phir x² - 8x + 16 = 0 ka discriminant nikaalo aur uska root batao. Starter code run karo aur done tab maanoge jab output mein pehli equation ka discriminant 1 aur roots 6.0 aur 5.0, aur doosri ka discriminant 0 aur equal root 4.0 dikhe.',
        'Find the discriminant of x² - 11x + 30 = 0 and both its roots. Then find the discriminant of x² - 8x + 16 = 0 and its root. Run the starter code; you are done when the output shows the first equation discriminant 1 and roots 6.0 and 5.0, and the second discriminant 0 and equal root 4.0.'
      ),
      language: 'python',
      starter: `import math
# x^2 - 11x + 30 = 0
a, b, c = 1, -11, 30
d = b ** 2 - 4 * a * c
print("Discriminant:", d)
print("Roots:", (-b + math.sqrt(d)) / (2 * a), "and", (-b - math.sqrt(d)) / (2 * a))
# x^2 - 8x + 16 = 0
d2 = (-8) ** 2 - 4 * 1 * 16
print("x^2 - 8x + 16 discriminant:", d2, "-> equal root:", 8 / 2)`,
      expected: `Discriminant: 1
Roots: 6.0 and 5.0
x^2 - 8x + 16 discriminant: 0 -> equal root: 4.0`
    },
    readMinutes: 12
  };

const quantProgressions: Article = {
    id: 'quant-progressions',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Progressions — AP, GP aur HP, Formula se lekar Exam Trick Tak',
      'Progressions — AP, GP, and HP, from Formula to Exam Trick'
    ),
    summary: t(
      'AP mein common difference, GP mein common ratio aur HP mein reciprocal ka khel samjho. nth term aur sum ke formulas ko ek hi worked example se yaad karo, aur woh traps dekho jinmein exam mein sabse zyada marks jaate hain.',
      'Learn the common difference in AP, the common ratio in GP, and the reciprocal trick in HP. Memorise the nth term and sum formulas through one worked example, and see the traps where exams cost the most marks.'
    ),
    sections: [
      {
        heading: t(
          '1. Progression Kya Hai? (AP, GP aur HP)',
          '1. What Is a Progression? (AP, GP, and HP)'
        ),
        body: t(
          `Progression ka matlab hai numbers ki ek aisi list jismein agla number pichhle number se ek fixed rule se banta hai. Teen tarah ki progressions exam mein sabse zyada aati hain. **Arithmetic Progression (AP)** mein har term pichhle term mein ek fixed number jodne se banta hai — is fixed number ko **common difference (d)** kehte hain. Jaise 3, 7, 11, 15 mein har baar 4 jud raha hai, isliye d = 4 hai. **Geometric Progression (GP)** mein har term pichhle term ko ek fixed number se guna karke banta hai — is number ko **common ratio (r)** kehte hain. Jaise 2, 6, 18, 54 mein har baar 3 se guna ho raha hai, isliye r = 3 hai.\n\n**Harmonic Progression (HP)** thodi alag hai: uske terms ke reciprocal (ulta) ek AP banate hain. Jaise 1/2, 1/4, 1/6 ke reciprocal 2, 4, 6 hain, jo ek AP hai (d = 2). Isliye HP ka koi seedha nth term formula nahi hota — pehle reciprocal ko AP samajh kar solve karo, phir answer ka reciprocal le lo. Exam mein HP ka sawaal aksar isi liye diya jaata hai: jo student seedha formula dhoondhta hai, woh fas jaata hai, aur jo reciprocal wala trick jaanta hai, woh ek minute mein kar leta hai.\n\nTeeno mein pehla term **a** se likha jaata hai. AP ka nth term hota hai \`a + (n - 1)d\` aur n terms ka sum hota hai \`n/2 × (2a + (n - 1)d)\`. GP ka nth term hota hai \`a × r^(n - 1)\` aur sum hota hai \`a × (r^n - 1) / (r - 1)\` (jab r 1 se bada ho). Ye chaar formulas hi poora chapter hain — baaki sab inhi ka istemal hai.`,
          `A progression is a list of numbers in which each next number comes from the previous number by a fixed rule. Three kinds of progressions appear most often in exams. In an **Arithmetic Progression (AP)**, each term comes from adding a fixed number to the previous term — this fixed number is called the **common difference (d)**. In 3, 7, 11, 15, we add 4 every time, so d = 4. In a **Geometric Progression (GP)**, each term comes from multiplying the previous term by a fixed number — this number is called the **common ratio (r)**. In 2, 6, 18, 54, we multiply by 3 every time, so r = 3.\n\nA **Harmonic Progression (HP)** is different: the reciprocals of its terms form an AP. The reciprocals of 1/2, 1/4, 1/6 are 2, 4, 6, which is an AP (d = 2). So HP has no direct nth term formula — first solve the reciprocals as an AP, then take the reciprocal of the answer. Exams give HP questions for exactly this reason: a student who hunts for a direct formula gets stuck, while a student who knows the reciprocal trick finishes in one minute.\n\nIn all three, the first term is written as **a**. The nth term of an AP is \`a + (n - 1)d\` and the sum of n terms is \`n/2 × (2a + (n - 1)d)\`. The nth term of a GP is \`a × r^(n - 1)\` and the sum is \`a × (r^n - 1) / (r - 1)\` (when r is greater than 1). These four formulas are the whole chapter — everything else is just using them.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Kiraya, Virus aur Paani ki Tanki',
          '2. Real-Life Examples: Rent, a Virus, and a Water Tank'
        ),
        body: t(
          `AP roz ki zindagi mein wahan dikhta hai jahan har baar ek hi rakam judti hai. Maan lo aapke ghar ka kiraya pehle saal 8,000 rupaye hai aur har saal 500 rupaye badhta hai. Dusre saal 8,500, teesre saal 9,000 — yeh ek AP hai jismein a = 8,000 aur d = 500 hai. Paanchve saal ka kiraya nikaalna ho toh formula lagao: 8,000 + 4 × 500 = 10,000 rupaye. Aise hi koi dukaan har mahine ek hi rakam ki bachat badhaye, toh kul bachat AP ke sum formula se nikalti hai.\n\nGP wahan dikhta hai jahan cheez har baar guna hoti hai. Ek virus se pehle din 2 log bimaar hote hain, dusre din 6, teesre din 18 — har din 3 guna. Yeh GP hai (a = 2, r = 3). Chauthe din 54 log bimaar honge, aur GP itni tez badhta hai ki 10 din mein hi sankhya hazaaron mein pahunch jaati hai. Bank ka compound interest bhi GP jaisa hi badhta hai, isiliye lamba samay aur bada ratio milkar bahut badi rakam bana dete hain.\n\nHP ka sabse mashhoor real-life use **average speed** aur **kaam ke time** mein hai. Agar ek hi doori ko jaane mein 2 ghante aur aane mein 4 ghante lagte hain, toh average speed simple average (3 ghante) se nahi, harmonic mean se nikalti hai. Isi tarah 1/2, 1/3, 1/4 jaise fractions exam mein isliye aate hain kyunki unke reciprocal 2, 3, 4 ek saaf AP banate hain.`,
          `An AP appears in daily life wherever the same amount is added every time. Suppose your house rent is 8,000 rupees in the first year and rises by 500 rupees every year. The second year is 8,500, the third year is 9,000 — this is an AP with a = 8,000 and d = 500. To find the rent in the fifth year, use the formula: 8,000 + 4 × 500 = 10,000 rupees. In the same way, if a shop increases its savings by the same amount every month, the total savings come from the AP sum formula.\n\nA GP appears wherever a quantity multiplies every time. A virus makes 2 people ill on day one, 6 on day two, and 18 on day three — three times as many each day. This is a GP (a = 2, r = 3). On day four, 54 people will be ill, and a GP grows so fast that the number reaches thousands within 10 days. Bank compound interest grows like a GP too, which is why a long time and a large ratio together build a very large amount.\n\nThe most famous real-life use of HP is in **average speed** and **work time**. If the same distance takes 2 hours going and 4 hours returning, the average speed comes from the harmonic mean, not the simple average of 3 hours. Fractions like 1/2, 1/3, 1/4 appear in exams because their reciprocals 2, 3, 4 form a clean AP.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: AP aur GP ka Worked Example (Dry Run)',
          '3. Step-by-Step: Worked Example for AP and GP (Dry Run)'
        ),
        body: t(
          `Ab ek hi example se AP aur GP dono ko step by step karte hain. **AP wala hissa:** a = 3, d = 4, n = 10. Pehla kaam hai 10th term nikaalna. Formula hai \`a + (n - 1)d\`. Ismein values daalo: 3 + (10 - 1) × 4 = 3 + 9 × 4 = 3 + 36 = 39. Toh 10th term **39** hai. Dusra kaam hai 10 terms ka sum. Formula hai \`n/2 × (2a + (n - 1)d)\`. Values daalo: 10/2 × (2 × 3 + 9 × 4) = 5 × (6 + 36) = 5 × 42 = **210**. Check karo: series hai 3, 7, 11, 15, 19, 23, 27, 31, 35, 39 — inko jodo toh 210 hi aata hai.\n\n**GP wala hissa:** a = 2, r = 3, n = 6. 6th term ka formula hai \`a × r^(n - 1)\`. Values daalo: 2 × 3^5 = 2 × 243 = **486**. Sum ka formula hai \`a × (r^n - 1) / (r - 1)\`: 2 × (3^6 - 1) / (3 - 1) = 2 × (729 - 1) / 2 = **728**. Check karo: series hai 2, 6, 18, 54, 162, 486 — jodo toh 728 aata hai. Dekho GP kitni tez badhta hai: sirf 6 terms mein hi sum 728 ho gaya, jabki AP ke 10 terms ka sum 210 tha.\n\n**HP wala hissa:** series hai 1/2, 1/4, 1/6. Reciprocal lo: 2, 4, 6 — yeh AP hai, d = 2. Agla reciprocal term hai 6 + 2 = 8. Iska reciprocal lo: **1/8**. Toh HP ka agla term 1/8 hai. Neeche wala code yahi poora hisaab print karta hai — har line ko formula se milakar dekho.`,
          `Now let us work through AP and GP step by step in one example. **The AP part:** a = 3, d = 4, n = 10. First find the 10th term. The formula is \`a + (n - 1)d\`. Put in the values: 3 + (10 - 1) × 4 = 3 + 9 × 4 = 3 + 36 = 39. So the 10th term is **39**. Next find the sum of 10 terms. The formula is \`n/2 × (2a + (n - 1)d)\`. Put in the values: 10/2 × (2 × 3 + 9 × 4) = 5 × (6 + 36) = 5 × 42 = **210**. Check it: the series is 3, 7, 11, 15, 19, 23, 27, 31, 35, 39 — adding them gives 210.\n\n**The GP part:** a = 2, r = 3, n = 6. The 6th term formula is \`a × r^(n - 1)\`. Put in the values: 2 × 3^5 = 2 × 243 = **486**. The sum formula is \`a × (r^n - 1) / (r - 1)\`: 2 × (3^6 - 1) / (3 - 1) = 2 × (729 - 1) / 2 = **728**. Check it: the series is 2, 6, 18, 54, 162, 486 — adding them gives 728. See how fast a GP grows: just 6 terms already sum to 728, while 10 AP terms sum to only 210.\n\n**The HP part:** the series is 1/2, 1/4, 1/6. Take reciprocals: 2, 4, 6 — this is an AP with d = 2. The next reciprocal term is 6 + 2 = 8. Take its reciprocal: **1/8**. So the next HP term is 1/8. The code below prints this whole calculation — match every line against the formula.`
        ),
        code: {
          title: t(
            'AP aur GP: 10th Term, Sum aur HP ka Agla Term',
            'AP and GP: 10th Term, Sum, and the Next HP Term'
          ),
          language: 'python',
          code: `a, d, n = 3, 4, 10
a_n = a + (n - 1) * d
s_n = n * (2 * a + (n - 1) * d) // 2
print("AP: a =", a, ", d =", d, ", n =", n)
print("10th term =", a_n)
print("Sum of 10 terms =", s_n)
a2, r, n2 = 2, 3, 6
g_n = a2 * r ** (n2 - 1)
g_s = a2 * (r ** n2 - 1) // (r - 1)
print("GP: a =", a2, ", r =", r, ", n =", n2)
print("6th term =", g_n)
print("Sum of 6 terms =", g_s)
print("HP: 1/2, 1/4, 1/6, next = 1/8")`,
          output: `AP: a = 3 , d = 4 , n = 10
10th term = 39
Sum of 10 terms = 210
GP: a = 2 , r = 3 , n = 6
6th term = 486
Sum of 6 terms = 728
HP: 1/2, 1/4, 1/6, next = 1/8`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: n-1 Bhoolna, Sum Formula aur r ka Sign',
          '4. Common Mistakes: Forgetting n - 1, the Sum Formula, and the Sign of r'
        ),
        body: t(
          `Progression mein sabse badi galti hai **(n - 1) ko bhool jaana**. 10th term ke liye formula \`a + (n - 1)d\` hai, \`a + nd\` nahi. Kyunki pehla term khud a hai, usmein sirf 9 baar d judta hai 10th term tak pahunchne ke liye. Jo student \`a + nd\` likhta hai, woh ek extra d jod deta hai aur har baar galat jawab laata hai. Isi tarah GP mein 6th term ke liye \`r^5\` lagta hai, \`r^6\` nahi.\n\nDoosri galti hai **sum formula mein n/2 ki jagah n likh dena**. AP ka sum \`n/2 × (2a + (n - 1)d)\` hai. Agar aap n/2 bhool kar sirf n se guna kar do, toh jawab doguna ho jaayega. Ek chhota sa check yaad rakho: n = 1 par sum hamesha a ke barabar hona chahiye. Formula mein n = 1 daalo: 1/2 × 2a = a. Sahi hai. Agar aapka formula is check ko pass nahi karta, toh formula galat likha hai.\n\nTeesri galti hai **GP mein r ke sign ko ignore karna**. Agar r negative hai, jaise -2, toh terms ka sign badalta rehta hai: 3, -6, 12, -24. Sum nikaalte time \`r^n\` ka sign n ke odd ya even hone par badalta hai. Aur jab r 1 se chhota ho (jaise 1/2), toh sum formula ka denominator \`r - 1\` negative ho jaata hai — phir bhi formula wahi rehta hai, bas sign ka dhyaan rakho. Aakhiri galti: AP aur GP ko pehchanne mein jaldi karna — pehle 2-3 terms ka difference aur ratio dono check karo, phir decide karo.`,
          `The biggest mistake in progressions is **forgetting (n - 1)**. The 10th term formula is \`a + (n - 1)d\`, not \`a + nd\`. Because the first term is a itself, you only add d nine times to reach the 10th term. A student who writes \`a + nd\` adds one extra d and gets the wrong answer every time. In the same way, the 6th GP term needs \`r^5\`, not \`r^6\`.\n\nThe second mistake is **writing n instead of n/2 in the sum formula**. The AP sum is \`n/2 × (2a + (n - 1)d)\`. If you forget the n/2 and multiply by n alone, the answer doubles. Remember one small check: for n = 1, the sum must always equal a. Put n = 1 in the formula: 1/2 × 2a = a. Correct. If your formula fails this check, you wrote the formula wrong.\n\nThe third mistake is **ignoring the sign of r in a GP**. If r is negative, such as -2, the signs of the terms keep changing: 3, -6, 12, -24. When finding the sum, the sign of \`r^n\` changes with n being odd or even. And when r is smaller than 1 (such as 1/2), the denominator \`r - 1\` in the sum formula becomes negative — the formula stays the same, just watch the sign. The last mistake is deciding AP or GP too fast — always check both the difference and the ratio of the first 2-3 terms before deciding.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: r = 1, Negative d aur Infinite GP',
          '5. Edge Cases: r = 1, Negative d, and Infinite GP'
        ),
        body: t(
          `Edge cases woh chhote cases hain jo formula ko tode bina bhi aapko phansa sakte hain. **Pehla: r = 1.** GP mein agar r = 1 ho, toh har term a ke barabar hota hai: a, a, a, a. Sum formula \`a × (r^n - 1) / (r - 1)\` mein denominator zero ho jaata hai, isliye formula kaam nahi karta. Is case mein sum seedha \`n × a\` hota hai. Exam mein r = 1 wala sawaal isi liye aata hai — formula lagane wala zero se bhaag karke fas jaata hai.\n\n**Doosra: negative d.** AP mein d negative bhi ho sakta hai, jaise 20, 17, 14, 11 (d = -3). Formula wahi rehta hai, bas d ki jagah -3 daalo. 10th term = 20 + 9 × (-3) = 20 - 27 = -7. Jo student d ko hamesha positive maan kar chalta hai, woh yahan galat karta hai. **Teesra: n = 1.** Sirf ek term ho toh sum = a aur nth term = a — yeh check har formula par lagao.\n\n**Chautha: infinite GP.** Jab |r| < 1 ho, jaise r = 1/2, toh GP ke terms chhote hote jaate hain aur infinite sum ek fixed number par ruk jaata hai: \`a / (1 - r)\`. Jaise 8, 4, 2, 1, ... ka infinite sum = 8 / (1 - 1/2) = 16 hai. Lekin jab |r| >= 1 ho, toh infinite sum exist hi nahi karta — terms badhte rehte hain ya ghoomte rehte hain. Exam mein infinite sum poochha jaaye toh pehle check karo ki |r| < 1 hai ya nahi.`,
          `Edge cases are the small cases that can trap you without breaking any formula. **First: r = 1.** In a GP with r = 1, every term equals a: a, a, a, a. In the sum formula \`a × (r^n - 1) / (r - 1)\`, the denominator becomes zero, so the formula fails. In this case the sum is simply \`n × a\`. Exams ask the r = 1 case for exactly this reason — a student who applies the formula ends up dividing by zero.\n\n**Second: negative d.** In an AP, d can be negative, such as 20, 17, 14, 11 (d = -3). The formula stays the same; just put -3 in place of d. The 10th term = 20 + 9 × (-3) = 20 - 27 = -7. A student who always treats d as positive goes wrong here. **Third: n = 1.** With only one term, the sum = a and the nth term = a — apply this check to every formula.\n\n**Fourth: infinite GP.** When |r| < 1, such as r = 1/2, the GP terms keep shrinking and the infinite sum settles at a fixed number: \`a / (1 - r)\`. For example, 8, 4, 2, 1, ... has an infinite sum of 8 / (1 - 1/2) = 16. But when |r| >= 1, the infinite sum does not exist at all — the terms keep growing or keep swinging. If an exam asks for an infinite sum, first check whether |r| < 1.`
        )
      },
      {
        heading: t(
          '6. What-If: AP se GP, Sum se n aur HP se Average',
          '6. What-If: From AP to GP, from Sum to n, and from HP to Average'
        ),
        body: t(
          `**What if: sum diya ho aur n nikaalna ho?** AP 5, 9, 13, ... mein 101 kaun sa term hai? Formula ulta chalao: 101 = 5 + (n - 1) × 4. Toh (n - 1) × 4 = 96, n - 1 = 24, n = 25. Matlab 101 is AP ka 25th term hai. Ye ulta hisaab exam mein bahut aata hai — aapko term diya jaata hai aur uski position poochhi jaati hai. Neeche wala code yahi check karta hai aur GP ka sum bhi nikaalta hai: 1 + 3 + 9 + 27 + 81 = 121.\n\n**What if: AP ke terms ko guna kar dein toh kya milega?** AP ke terms ko guna karne se GP nahi banta — jaise 2, 4, 6 ko guna karne se 2, 8, 48 milta hai, jiska ratio fixed nahi hai. Lekin AP ke terms ko kisi fixed number ki power mein daal do (jaise 2^2, 2^4, 2^6), toh GP ban jaata hai. Yeh ek achha interview-style sawaal hai jo AP aur GP ke beech ka connection dikhata hai.\n\n**What if: HP se average speed nikaalni ho?** Ek gaadi 60 km jaati hai 30 km/h se aur wapas aati hai 60 km/h se. Simple average speed (30 + 60) / 2 = 45 km/h galat hai. Sahi tareeka harmonic mean hai: 2 × 30 × 60 / (30 + 60) = 3600 / 90 = 40 km/h. Check karo: jaane mein 2 ghante, aane mein 1 ghanta, kul 120 km / 3 ghante = 40 km/h. Sahi hai. Jab bhi doori same ho aur speed alag ho, harmonic mean hi sahi average deta hai.`,
          `**What if the sum is given and you must find n?** In the AP 5, 9, 13, ..., which term is 101? Run the formula backwards: 101 = 5 + (n - 1) × 4. So (n - 1) × 4 = 96, n - 1 = 24, n = 25. So 101 is the 25th term of this AP. This reverse calculation appears very often in exams — you are given the term and asked for its position. The code below checks exactly this and also finds a GP sum: 1 + 3 + 9 + 27 + 81 = 121.\n\n**What if you multiply the terms of an AP — do you get a GP?** No. Multiplying AP terms, such as 2, 4, 6, gives 2, 8, 48, whose ratio is not fixed. But if you put AP terms as powers of a fixed number (such as 2^2, 2^4, 2^6), you do get a GP. This is a good interview-style question that shows the link between AP and GP.\n\n**What if you must find average speed from HP?** A car travels 60 km at 30 km/h and returns at 60 km/h. The simple average speed (30 + 60) / 2 = 45 km/h is wrong. The correct way is the harmonic mean: 2 × 30 × 60 / (30 + 60) = 3600 / 90 = 40 km/h. Check it: going takes 2 hours, returning takes 1 hour, so 120 km in total / 3 hours = 40 km/h. Correct. Whenever the distance is the same and the speeds differ, only the harmonic mean gives the right average.`
        ),
        code: {
          title: t(
            'Ulta Hisaab: 101 Kaun Sa Term Hai aur GP ka Sum',
            'Reverse Calculation: Which Term Is 101, and a GP Sum'
          ),
          language: 'python',
          code: `a, d, target = 5, 4, 101
n = (target - a) // d + 1
print("Term 101 is term number", n)
total = sum(3 ** i for i in range(5))
print("1 + 3 + 9 + 27 + 81 =", total)`,
          output: `Term 101 is term number 25
1 + 3 + 9 + 27 + 81 = 121`
        }
      },
      {
        heading: t(
          '7. Summary: AP, GP aur HP ka Poora Picture',
          '7. Summary: The Full Picture of AP, GP, and HP'
        ),
        body: t(
          `Poora chapter chaar formulas mein band hota hai. **AP:** nth term \`a + (n - 1)d\`, sum \`n/2 × (2a + (n - 1)d)\`. **GP:** nth term \`a × r^(n - 1)\`, sum \`a × (r^n - 1) / (r - 1)\`. **HP:** reciprocal AP banata hai — pehle reciprocal lo, AP solve karo, phir reciprocal wapas lo. Aaj ke worked example ke numbers yaad rakho: AP 3, 7, 11 mein 10th term 39 aur sum 210; GP 2, 6, 18 mein 6th term 486 aur sum 728; HP 1/2, 1/4, 1/6 ka agla term 1/8.\n\nExam strategy simple hai: pehle difference aur ratio dono check karke progression pehchano, phir a, d/r aur n likho, phir formula lagao. (n - 1) kabhi mat bhoolo, sum mein n/2 ka dhyaan rakho, aur r = 1 ya negative d jaise edge cases ko pehle se pehchan lo. HP dikhe toh turant reciprocal wala trick yaad karo. Infinite GP mein pehle |r| < 1 check karo.\n\nRevision ke liye yahi 5 key notes kaafi hain. Agle article mein hum logarithms dekhenge — jahan bade powers aur guna-bhaag ko jodne-ghatane mein badal kar calculation aasan ho jaata hai.`,
          `The whole chapter fits into four formulas. **AP:** nth term \`a + (n - 1)d\`, sum \`n/2 × (2a + (n - 1)d)\`. **GP:** nth term \`a × r^(n - 1)\`, sum \`a × (r^n - 1) / (r - 1)\`. **HP:** its reciprocals form an AP — take reciprocals first, solve the AP, then take the reciprocal back. Remember the numbers from today's worked example: in AP 3, 7, 11, the 10th term is 39 and the sum is 210; in GP 2, 6, 18, the 6th term is 486 and the sum is 728; the next term of HP 1/2, 1/4, 1/6 is 1/8.\n\nThe exam strategy is simple: first check both the difference and the ratio to identify the progression, then write down a, d or r, and n, then apply the formula. Never forget (n - 1), watch the n/2 in the sum, and spot edge cases like r = 1 or negative d in advance. When you see HP, recall the reciprocal trick at once. For an infinite GP, check |r| < 1 first.\n\nThese 5 key notes are enough for revision. In the next article we will look at logarithms — where big powers and multiplications turn into additions and subtractions, making calculation easy.`
        )
      }
    ],
    diagram: {
      kind: 'table',
      title: t(
        'AP, GP aur HP: Ek Hi Example se Teeno',
        'AP, GP, and HP: All Three from One Example'
      ),
      caption: t(
        'AP mein +4 judta hai, GP mein ×3 guna hota hai, HP mein reciprocal AP banata hai',
        'In AP we add 4, in GP we multiply by 3, in HP the reciprocals form an AP'
      ),
      nodes: [],
      headers: [
        t('Progression', 'Progression'),
        t('Series', 'Series'),
        t('Rule', 'Rule'),
        t('Agla term', 'Next term')
      ],
      rows: [
        [
          t('AP', 'AP'),
          t('3, 7, 11, 15', '3, 7, 11, 15'),
          t('d = 4', 'd = 4'),
          t('19', '19')
        ],
        [
          t('GP', 'GP'),
          t('2, 6, 18, 54', '2, 6, 18, 54'),
          t('r = 3', 'r = 3'),
          t('162', '162')
        ],
        [
          t('HP', 'HP'),
          t('1/2, 1/4, 1/6', '1/2, 1/4, 1/6'),
          t('Reciprocal AP: 2, 4, 6', 'Reciprocal AP: 2, 4, 6'),
          t('1/8', '1/8')
        ]
      ]
    },
    codeExamples: [
      {
        title: t(
            'Ulta Hisaab: 101 Kaun Sa Term Hai aur GP ka Sum',
            'Reverse Calculation: Which Term Is 101, and a GP Sum'
          ),
        language: 'python',
        code: `a, d, target = 5, 4, 101
n = (target - a) // d + 1
print("Term 101 is term number", n)
total = sum(3 ** i for i in range(5))
print("1 + 3 + 9 + 27 + 81 =", total)`,
        output: `Term 101 is term number 25
1 + 3 + 9 + 27 + 81 = 121`
      }
    ],
    mcqs: [
      {
        q: t(
          'AP 7, 11, 15, ... ka 12th term kya hai?',
          'What is the 12th term of the AP 7, 11, 15, ...?'
        ),
        opts: [
          t('47', '47'),
          t('51', '51'),
          t('55', '55'),
          t('59', '59')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: a = 7, d = 4, 12th term = 7 + 11 × 4 = 7 + 44 = 51.',
          'Correct answer: a = 7, d = 4, so the 12th term = 7 + 11 × 4 = 7 + 44 = 51.'
        )
      },
      {
        q: t(
          'GP 3, 6, 12, ... ka 7th term kya hai?',
          'What is the 7th term of the GP 3, 6, 12, ...?'
        ),
        opts: [
          t('96', '96'),
          t('128', '128'),
          t('192', '192'),
          t('384', '384')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: a = 3, r = 2, 7th term = 3 × 2^6 = 3 × 64 = 192.',
          'Correct answer: a = 3, r = 2, so the 7th term = 3 × 2^6 = 3 × 64 = 192.'
        )
      },
      {
        q: t(
          'AP 2, 5, 8, ... ke pehle 10 terms ka sum kya hai?',
          'What is the sum of the first 10 terms of the AP 2, 5, 8, ...?'
        ),
        opts: [
          t('140', '140'),
          t('155', '155'),
          t('170', '170'),
          t('185', '185')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: sum = 10/2 × (2 × 2 + 9 × 3) = 5 × (4 + 27) = 5 × 31 = 155.',
          'Correct answer: sum = 10/2 × (2 × 2 + 9 × 3) = 5 × (4 + 27) = 5 × 31 = 155.'
        )
      },
      {
        q: t(
          'HP 1, 1/2, 1/3, 1/4, ... ka agla term kya hai?',
          'What is the next term of the HP 1, 1/2, 1/3, 1/4, ...?'
        ),
        opts: [
          t('1/5', '1/5'),
          t('1/6', '1/6'),
          t('1/4', '1/4'),
          t('1/3', '1/3')
        ],
        ans: 0,
        expl: t(
          'Sahi jawab: reciprocal hain 1, 2, 3, 4, agla reciprocal 5 hai, isliye agla HP term 1/5 hai.',
          'Correct answer: the reciprocals are 1, 2, 3, 4, so the next reciprocal is 5, and the next HP term is 1/5.'
        )
      },
      {
        q: t(
          '1 + 2 + 4 + 8 + 16 ka sum kya hai?',
          'What is the sum 1 + 2 + 4 + 8 + 16?'
        ),
        opts: [
          t('30', '30'),
          t('31', '31'),
          t('32', '32'),
          t('33', '33')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: yeh GP hai (a = 1, r = 2), sum = (2^5 - 1) / (2 - 1) = 31, ya seedha jodo: 1 + 2 + 4 + 8 + 16 = 31.',
          'Correct answer: this is a GP (a = 1, r = 2), so the sum = (2^5 - 1) / (2 - 1) = 31, or just add: 1 + 2 + 4 + 8 + 16 = 31.'
        )
      }
    ],
    keyNotes: [
      t(
        'AP: nth term a + (n - 1)d, sum n/2 × (2a + (n - 1)d).',
        'AP: nth term a + (n - 1)d, sum n/2 × (2a + (n - 1)d).'
      ),
      t(
        'GP: nth term a × r^(n - 1), sum a × (r^n - 1) / (r - 1).',
        'GP: nth term a × r^(n - 1), sum a × (r^n - 1) / (r - 1).'
      ),
      t(
        'HP mein reciprocal AP banata hai — pehle reciprocal lo, phir AP solve karo.',
        'In HP the reciprocals form an AP — take reciprocals first, then solve the AP.'
      ),
      t(
        'r = 1 par GP ka sum formula fail hota hai, sum n × a hota hai.',
        'When r = 1 the GP sum formula fails; the sum is n × a.'
      ),
      t(
        'Infinite GP ka sum a / (1 - r) sirf tab jab |r| < 1 ho.',
        'The infinite GP sum a / (1 - r) works only when |r| < 1.'
      )
    ],
    practice: {
      title: t(
        'Practice: AP ka 15th Term aur Sum Nikaalo',
        'Practice: Find the 15th Term and Sum of an AP'
      ),
      task: t(
        'AP jismein a = 8 aur d = 6 hai, uska 15th term aur pehle 15 terms ka sum nikaalo. Starter code run karo aur verify karo ki output expected jaisa aata hai: 15th term 92 aur sum 750.',
        'For the AP with a = 8 and d = 6, find the 15th term and the sum of the first 15 terms. Run the starter code and verify the output matches the expected output: 15th term 92 and sum 750.'
      ),
      language: 'python',
      starter: `a, d, n = 8, 6, 15
a_n = a + (n - 1) * d
s_n = n * (2 * a + (n - 1) * d) // 2
print("15th term =", a_n)
print("Sum of 15 terms =", s_n)`,
      expected: `15th term = 92
Sum of 15 terms = 750`
    },
    readMinutes: 12
  };

const quantLogarithms: Article = {
    id: 'quant-logarithms',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Logarithms — Rules, Power ko Ulta Karna aur Exam Problems',
      'Logarithms — Rules, Reversing Powers, and Exam Problems'
    ),
    summary: t(
      'Logarithm ka matlab hai power ko ulta padhna: log2 32 = 5 kyunki 2^5 = 32. Product, quotient aur power ke rules ko worked problems se seekho, aur base change karna bhi ek hi trick se samjho.',
      'A logarithm means reading a power backwards: log2 32 = 5 because 2^5 = 32. Learn the product, quotient, and power rules through worked problems, and learn changing the base with one trick.'
    ),
    sections: [
      {
        heading: t(
          '1. Logarithm Kya Hai? (Power ka Ulta Sawal)',
          '1. What Is a Logarithm? (The Reverse Power Question)'
        ),
        body: t(
          `Logarithm ka matlab bahut simple hai: **log woh power hai jo base ko diya jaaye toh answer mile**. Agar \`2^5 = 32\` hai, toh \`log2 32 = 5\` hai — matlab "2 ko kis power par chadhayein toh 32 mile?" Jawab hai 5. Isi tarah \`10^3 = 1000\` hai, isliye \`log10 1000 = 3\`, aur \`3^4 = 81\` hai, isliye \`log3 81 = 4\`. Har logarithm ke peeche ek power wala hisaab chhupa hota hai, aur yahi soch har sawaal ko aasan bana deti hai.\n\nDo khaas values hamesha yaad rakho. **log 1 = 0** hota hai, kisi bhi base par, kyunki kisi bhi number ki power 0 hamesha 1 hoti hai. **log (base khud) = 1** hota hai, kyunki base ki power 1 khud base hi hoti hai: log2 2 = 1, log10 10 = 1. Jab base nahi likha hota, toh aam taur par base 10 mana jaata hai: log 100 matlab log10 100 = 2.\n\nLogarithm isliye banaya gaya tha taaki bade guna-bhaag ko jodne-ghatane mein badla ja sake. Computer se pehle log table se hi bade hisaab hote the. Exam mein logarithm ke sawaal isiliye aate hain kyunki woh power, exponent aur bade numbers ko ek saath test karte hain — aur jo student log ko power ka ulta samajhta hai, use kabhi formula ratne ki zaroorat nahi padti.`,
          `A logarithm is very simple: **a log is the power you give the base to get the answer**. If \`2^5 = 32\`, then \`log2 32 = 5\` — meaning "to which power must we raise 2 to get 32?" The answer is 5. In the same way, \`10^3 = 1000\`, so \`log10 1000 = 3\`, and \`3^4 = 81\`, so \`log3 81 = 4\`. Behind every logarithm hides a power calculation, and this one idea makes every question easy.\n\nAlways remember two special values. **log 1 = 0** for any base, because any number to the power 0 is always 1. **log of the base itself = 1**, because the base to the power 1 is the base itself: log2 2 = 1, log10 10 = 1. When no base is written, base 10 is usually meant: log 100 means log10 100 = 2.\n\nLogarithms were invented so that big multiplications and divisions could turn into additions and subtractions. Before computers, big calculations were done with log tables. Exams ask logarithm questions because they test powers, exponents, and big numbers together — and a student who sees a log as a reversed power never needs to memorise formulas blindly.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Bank Interest, Awaaz aur Bhookamp',
          '2. Real-Life Examples: Bank Interest, Sound, and Earthquakes'
        ),
        body: t(
          `Logarithm roz ki zindagi mein wahan aata hai jahan cheezein guna hokar badhti hain. Bank mein paisa compound interest se badhta hai: 10,000 rupaye 10% saalana par 2 saal mein 12,100 rupaye ho jaate hain. Ulta sawaal poochho — "kitne saal mein paisa doguna hoga?" — toh jawab logarithm se nikalta hai. Bina log ke aapko saal-dar-saal guna karna padega; log se ek hi step mein pata chal jaata hai.\n\nAwaaz ko **decibel** mein naapa jaata hai, jo ek log scale hai. 20 decibel ki awaaz 10 decibel ki awaaz se sirf doguni tez nahi hoti — woh 10 guna tez hoti hai, kyunki decibel mein har 10 ka badhna matlab 10 guna shakti. Isi liye 80 decibel ka traffic 40 decibel ki baat-cheet se hazaaron guna zyada taakatwar hota hai, halanki number sirf doguna dikhta hai.\n\nBhookamp ki taakat **Richter scale** par naapi jaati hai, jo bhi log scale hai. 6 magnitude ka bhookamp 5 magnitude wale se 10 guna zyada taakatwar hota hai, aur 7 magnitude wala 100 guna zyada. News mein "sirf 1 magnitude zyada" sun kar chhota lagta hai, par log scale par 1 ka farak matlab 10 guna farak hota hai. Yeh teeno examples ek hi baat sikhate hain: jab cheez guna hokar badhe, toh uska sahi scale logarithm hota hai.`,
          `Logarithms appear in daily life wherever things grow by multiplying. Money in a bank grows by compound interest: 10,000 rupees at 10% per year becomes 12,100 rupees in 2 years. Ask the reverse question — "in how many years will the money double?" — and the answer comes from a logarithm. Without logs you would have to multiply year by year; with logs you find it in one step.\n\nSound is measured in **decibels**, which is a log scale. A sound of 20 decibels is not just twice as loud as 10 decibels — it is 10 times as loud, because in decibels every increase of 10 means 10 times the power. That is why 80 decibel traffic is thousands of times more powerful than a 40 decibel conversation, even though the number looks only double.\n\nThe strength of an earthquake is measured on the **Richter scale**, which is also a log scale. An earthquake of magnitude 6 is 10 times stronger than one of magnitude 5, and magnitude 7 is 100 times stronger. On the news, "only 1 magnitude more" sounds small, but on a log scale a difference of 1 means a difference of 10 times. All three examples teach one thing: when a quantity grows by multiplying, its true scale is the logarithm.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: Log ke Rules aur Worked Example (Dry Run)',
          '3. Step-by-Step: Log Rules and a Worked Example (Dry Run)'
        ),
        body: t(
          `Teen rules poora chapter chalate hain. **Product rule:** \`log(xy) = log x + log y\`. **Quotient rule:** \`log(x/y) = log x - log y\`. **Power rule:** \`log(x^n) = n × log x\`. Ab inko worked example se karte hain. Pehla: log2 32. Socho 2 ko kis power par chadhayein toh 32 mile? 2^1 = 2, 2^2 = 4, 2^3 = 8, 2^4 = 16, 2^5 = 32. Toh **log2 32 = 5**.\n\nDoosra: log10 1000. 10^3 = 1000, isliye **log10 1000 = 3**. Teesra: log3 81. 3^4 = 81, isliye **log3 81 = 4**. Chauthe mein power rule ulta chalao: 2^x = 128, toh x = log2 128. 2^7 = 128, isliye x = 7. Paanchva: log10 (100 × 1000). Product rule se yeh log10 100 + log10 1000 = 2 + 3 = **5** hai. Check karo: 100 × 1000 = 100000, aur 10^5 = 100000. Sahi hai.\n\nAakhiri: log10 100000 seedha 5 hai kyunki 10^5 = 100000. Dekho product rule ne guna ko jodne mein badal diya — yahi log ki taakat hai. Neeche wala code in sab answers ko compute karta hai. Code mein \`round\` isliye lagaya hai kyunki computer ka log kabhi-kabhi 2.9999999 jaisa jawab deta hai, jabki sahi jawab poora 3 hota hai.`,
          `Three rules run the whole chapter. **Product rule:** \`log(xy) = log x + log y\`. **Quotient rule:** \`log(x/y) = log x - log y\`. **Power rule:** \`log(x^n) = n × log x\`. Now let us use them in a worked example. First: log2 32. Think — to which power must we raise 2 to get 32? 2^1 = 2, 2^2 = 4, 2^3 = 8, 2^4 = 16, 2^5 = 32. So **log2 32 = 5**.\n\nSecond: log10 1000. 10^3 = 1000, so **log10 1000 = 3**. Third: log3 81. 3^4 = 81, so **log3 81 = 4**. Fourth, run the power rule backwards: 2^x = 128, so x = log2 128. 2^7 = 128, so x = 7. Fifth: log10 (100 × 1000). By the product rule this is log10 100 + log10 1000 = 2 + 3 = **5**. Check it: 100 × 1000 = 100000, and 10^5 = 100000. Correct.\n\nLast: log10 100000 is directly 5, because 10^5 = 100000. See how the product rule turned multiplication into addition — that is the power of logs. The code below computes all these answers. The code uses \`round\` because a computer log sometimes gives an answer like 2.9999999, while the true answer is exactly 3.`
        ),
        code: {
          title: t(
            'Log ke Basic Answers: log2 32, log10 1000, log3 81',
            'Basic Log Answers: log2 32, log10 1000, log3 81'
          ),
          language: 'python',
          code: `import math
print("log2 32 =", round(math.log(32, 2)))
print("log10 1000 =", round(math.log(1000, 10)))
print("log3 81 =", round(math.log(81, 3)))
print("2 to the power 7 =", 2 ** 7)
print("log10 (100 x 1000) =", round(math.log(100 * 1000, 10)))
print("log10 100000 =", round(math.log(100000, 10)))`,
          output: `log2 32 = 5
log10 1000 = 3
log3 81 = 4
2 to the power 7 = 128
log10 (100 x 1000) = 5
log10 100000 = 5`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: log(x + y), Base Bhoolna aur 0 ka Log',
          '4. Common Mistakes: log(x + y), Forgetting the Base, and log of 0'
        ),
        body: t(
          `Sabse badi galti hai **log(x + y) ko log x + log y samajh lena**. Product rule sirf guna par lagta hai, jodne par nahi. log(100 + 1000) = log(1100) hota hai, jo log 100 + log 1000 = 2 + 3 = 5 ke barabar nahi hai. log(1100) lagbhag 3.04 hota hai. Exam mein yeh trap baar-baar aata hai — jahan plus dikhe, wahan product rule mat lagao.\n\nDoosri galti hai **base ko bhool jaana**. log2 32 = 5 hai, par log10 32 lagbhag 1.5 hota hai — base badalte hi jawab badal jaata hai. Har log ke saath uska base likho, aur jab base nahi likha ho toh base 10 maan lo. Teesri galti hai **log 0 ya negative number ka log nikaalne ki koshish**. log 0 exist nahi karta, kyunki kisi bhi base ki koi bhi power 0 nahi hoti. Negative number ka log bhi real numbers mein exist nahi karta. Agar sawaal mein log(x) hai aur x negative nikal raha hai, toh aapne pehle kahin galti ki hai.\n\nChauthi galti hai **power rule mein power ko base se guna kar dena**. log(2^3) = 3 × log 2 hota hai, 2 × log 3 nahi. Power aage aati hai, base nahi badalta. Yaad rakhne ka tareeka: log ke andar jo upar likha hai (power), wohi bahar aata hai.`,
          `The biggest mistake is **treating log(x + y) as log x + log y**. The product rule applies only to multiplication, never to addition. log(100 + 1000) = log(1100), which is not equal to log 100 + log 1000 = 2 + 3 = 5. log(1100) is about 3.04. This trap appears again and again in exams — where you see a plus, do not apply the product rule.\n\nThe second mistake is **forgetting the base**. log2 32 = 5, but log10 32 is about 1.5 — the answer changes as soon as the base changes. Always write the base with every log, and when no base is written, take base 10. The third mistake is **trying to find log 0 or the log of a negative number**. log 0 does not exist, because no power of any base is 0. The log of a negative number does not exist in real numbers either. If a question has log(x) and x comes out negative, you made a mistake earlier.\n\nThe fourth mistake is **multiplying the base instead of the power in the power rule**. log(2^3) = 3 × log 2, not 2 × log 3. The power comes out in front; the base does not change. The way to remember it: whatever is written on top inside the log (the power) is what comes outside.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: log 1, Base 1 aur Change of Base',
          '5. Edge Cases: log 1, Base 1, and Change of Base'
        ),
        body: t(
          `**Pehla edge case: log 1 = 0.** Kisi bhi base par log 1 hamesha 0 hota hai. Iska matlab hai ki agar kisi equation mein log(x) = 0 aaye, toh x = 1 hai. Exam mein log(x - 1) = 0 jaisa sawaal aaye toh turant x - 1 = 1, matlab x = 2 likh do.\n\n**Doosra edge case: base 1 nahi ho sakta.** log1 kuch bhi nahi hota, kyunki 1 ki koi bhi power hamesha 1 hi rehti hai — usse kabhi 32 nahi milega. Isi tarah base negative ya zero bhi nahi ho sakta. Base hamesha positive hona chahiye aur 1 ke barabar nahi hona chahiye. Agar sawaal mein base mein x ho, jaise log_x 49 = 2, toh pehle x = 7 nikaalo, phir check karo ki base valid hai (7 positive hai aur 1 nahi hai). Sahi hai.\n\n**Teesra: change of base.** Agar calculator ya code mein sirf ek base ka log mile, toh formula hai \`log_a b = log b / log a\` (kisi bhi common base mein). Jaise log2 32 = log10 32 / log10 2. Exam mein iska use tab hota hai jab base ajeeb ho, jaise log5 625. Seedha socho: 5^4 = 625, isliye jawab 4 hai — change of base ki zaroorat hi nahi padi. Change of base sirf tab use karo jab seedha power dikhai na de.`,
          `**First edge case: log 1 = 0.** For any base, log 1 is always 0. This means that if an equation gives log(x) = 0, then x = 1. If an exam asks log(x - 1) = 0, write at once x - 1 = 1, so x = 2.\n\n**Second edge case: the base cannot be 1.** log1 of anything means nothing, because any power of 1 is always 1 — you can never get 32 from it. In the same way, the base cannot be negative or zero. The base must always be positive and not equal to 1. If a question has x in the base, such as log_x 49 = 2, first find x = 7, then check that the base is valid (7 is positive and not 1). It is valid.\n\n**Third: change of base.** If a calculator or code gives the log in only one base, the formula is \`log_a b = log b / log a\` (in any common base). For example, log2 32 = log10 32 / log10 2. Exams use this when the base is unusual, such as log5 625. But think directly: 5^4 = 625, so the answer is 4 — no change of base was needed. Use change of base only when the power is not directly visible.`
        )
      },
      {
        heading: t(
          '6. What-If: Ulta Sawaal, Quotient Rule aur Base Change',
          '6. What-If: Reverse Questions, the Quotient Rule, and Base Change'
        ),
        body: t(
          `**What if: log2 x = 6 diya ho aur x nikaalna ho?** Log ko power mein wapas badlo: x = 2^6 = 64. Yeh ulta sawaal exam mein bahut aata hai — log diya hota hai, number poochha jaata hai. Hamesha pehle log ko uske power wale roop mein likho, phir hisaab karo. Neeche wala code yahi karta hai aur quotient rule bhi check karta hai: log10 1000 - log10 10 = 3 - 1 = 2, jo log10 100 = 2 ke barabar hai. Quotient rule ne bhaag ko ghataane mein badal diya.\n\n**What if: log(x^2) = 6 ho?** Power rule se 2 × log x = 6, isliye log x = 3, matlab x = 10^3 = 1000 (base 10 par). Lekin dhyaan rakho: x^2 likha hai, isliye x = -1000 bhi possible hai, kyunki (-1000)^2 bhi 1000000 hota hai aur log(1000000) = 6. Exam mein aise sawaal mein dono signs check karo.\n\n**What if: base hi badal jaaye?** log2 8 = 3 hai aur log4 8 = 3/2 hai, kyunki 4^(3/2) = 8. Base bada hone par log chhota ho jaata hai — yeh samajhna change of base se zyada kaam aata hai. Agar do logs ka base alag ho, toh unko jodne se pehle ek hi base mein badlo, warna jawab galat hoga.`,
          `**What if log2 x = 6 is given and you must find x?** Turn the log back into a power: x = 2^6 = 64. This reverse question appears very often in exams — the log is given and the number is asked. Always write the log in its power form first, then calculate. The code below does exactly this and also checks the quotient rule: log10 1000 - log10 10 = 3 - 1 = 2, which equals log10 100 = 2. The quotient rule turned division into subtraction.\n\n**What if log(x^2) = 6?** By the power rule, 2 × log x = 6, so log x = 3, which means x = 10^3 = 1000 (in base 10). But watch out: x^2 is written, so x = -1000 is also possible, because (-1000)^2 is also 1000000 and log(1000000) = 6. In such questions, check both signs.\n\n**What if the base itself changes?** log2 8 = 3 and log4 8 = 3/2, because 4^(3/2) = 8. When the base grows, the log shrinks — understanding this helps more than change of base. If two logs have different bases, change them to one base before adding, or the answer will be wrong.`
        ),
        code: {
          title: t(
            'Ulta Sawaal aur Quotient Rule ka Check',
            'Reverse Question and a Quotient Rule Check'
          ),
          language: 'python',
          code: `import math
print("If log2 x = 6, then x =", 2 ** 6)
print("log10 1000 - log10 10 =", round(math.log(1000, 10)) - round(math.log(10, 10)))
print("That equals log10 100 =", round(math.log(100, 10)))`,
          output: `If log2 x = 6, then x = 64
log10 1000 - log10 10 = 2
That equals log10 100 = 2`
        }
      },
      {
        heading: t(
          '7. Summary: Logarithm ka Poora Picture',
          '7. Summary: The Full Picture of Logarithms'
        ),
        body: t(
          `Logarithm ka matlab hai power ko ulta padhna: \`log_a b = c\` ka matlab hai \`a^c = b\`. Teen rules yaad rakho: **product** — log(xy) = log x + log y; **quotient** — log(x/y) = log x - log y; **power** — log(x^n) = n × log x. Khaas values: log 1 = 0, log(base) = 1. Aaj ke numbers yaad rakho: log2 32 = 5, log10 1000 = 3, log3 81 = 4, 2^7 = 128, log10 (100 × 1000) = 5.\n\nExam strategy: pehle har log ko power wale roop mein badlo, phir rule lagao. Jodne par product rule kabhi mat lagao, base ko hamesha saath likho, aur log 0 ya negative ka log kabhi mat nikaalo. Base 1 nahi ho sakta, aur change of base sirf tab use karo jab seedha power na dikhe.\n\nRevision ke liye yahi 5 key notes kaafi hain. Agle article mein hum data interpretation dekhenge — table, bar, line aur pie chart se sahi number nikaalna, bina chart ke jaal mein fanse.`,
          `A logarithm means reading a power backwards: \`log_a b = c\` means \`a^c = b\`. Remember three rules: **product** — log(xy) = log x + log y; **quotient** — log(x/y) = log x - log y; **power** — log(x^n) = n × log x. Special values: log 1 = 0, log of the base = 1. Remember today's numbers: log2 32 = 5, log10 1000 = 3, log3 81 = 4, 2^7 = 128, log10 (100 × 1000) = 5.\n\nThe exam strategy: first change every log into its power form, then apply the rule. Never apply the product rule to addition, always write the base with the log, and never find log 0 or the log of a negative number. The base cannot be 1, and use change of base only when the power is not directly visible.\n\nThese 5 key notes are enough for revision. In the next article we will look at data interpretation — pulling the right number from a table, bar, line, or pie chart without falling into the chart trap.`
        )
      }
    ],
    diagram: {
      kind: 'flow',
      title: t(
        'Log kaise Kaam Karta Hai: Power se Log Tak',
        'How a Log Works: From Power to Log'
      ),
      caption: t(
        'Har log ke peeche ek power wala hisaab chhupa hota hai',
        'Behind every log hides a power calculation'
      ),
      nodes: [
        {
          t: t('Power: 2^5 = 32', 'Power: 2^5 = 32'),
          s: t('Base 2, power 5, answer 32', 'Base 2, power 5, answer 32')
        },
        {
          t: t('Log: log2 32 = 5', 'Log: log2 32 = 5'),
          s: t('Ulta sawaal: 2 ko kis power par chadhayein toh 32 mile?', 'Reverse question: to which power must we raise 2 to get 32?')
        },
        {
          t: t('Product rule: log(xy) = log x + log y', 'Product rule: log(xy) = log x + log y'),
          s: t('Guna badal jaata hai jodne mein', 'Multiplication turns into addition')
        },
        {
          t: t('Quotient rule: log(x/y) = log x - log y', 'Quotient rule: log(x/y) = log x - log y'),
          s: t('Bhaag badal jaata hai ghataane mein', 'Division turns into subtraction')
        },
        {
          t: t('Power rule: log(x^n) = n × log x', 'Power rule: log(x^n) = n × log x'),
          s: t('Power bahar aakar aage lag jaati hai', 'The power comes out and sits in front')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
            'Ulta Sawaal aur Quotient Rule ka Check',
            'Reverse Question and a Quotient Rule Check'
          ),
        language: 'python',
        code: `import math
print("If log2 x = 6, then x =", 2 ** 6)
print("log10 1000 - log10 10 =", round(math.log(1000, 10)) - round(math.log(10, 10)))
print("That equals log10 100 =", round(math.log(100, 10)))`,
        output: `If log2 x = 6, then x = 64
log10 1000 - log10 10 = 2
That equals log10 100 = 2`
      }
    ],
    mcqs: [
      {
        q: t(
          'log2 64 ka maan kya hai?',
          'What is the value of log2 64?'
        ),
        opts: [
          t('5', '5'),
          t('6', '6'),
          t('7', '7'),
          t('8', '8')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 2^6 = 64, isliye log2 64 = 6.',
          'Correct answer: 2^6 = 64, so log2 64 = 6.'
        )
      },
      {
        q: t(
          'log10 10000 ka maan kya hai?',
          'What is the value of log10 10000?'
        ),
        opts: [
          t('3', '3'),
          t('4', '4'),
          t('5', '5'),
          t('6', '6')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 10^4 = 10000, isliye log10 10000 = 4.',
          'Correct answer: 10^4 = 10000, so log10 10000 = 4.'
        )
      },
      {
        q: t(
          'log3 27 + log3 9 ka maan kya hai?',
          'What is the value of log3 27 + log3 9?'
        ),
        opts: [
          t('4', '4'),
          t('5', '5'),
          t('6', '6'),
          t('7', '7')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: log3 27 = 3 aur log3 9 = 2, isliye sum = 3 + 2 = 5.',
          'Correct answer: log3 27 = 3 and log3 9 = 2, so the sum = 3 + 2 = 5.'
        )
      },
      {
        q: t(
          'Agar log_x 49 = 2 hai, toh x kya hai?',
          'If log_x 49 = 2, what is x?'
        ),
        opts: [
          t('6', '6'),
          t('7', '7'),
          t('8', '8'),
          t('9', '9')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: x^2 = 49, isliye x = 7 (base positive hota hai, isliye -7 nahi).',
          'Correct answer: x^2 = 49, so x = 7 (the base is positive, so not -7).'
        )
      },
      {
        q: t(
          'log2 512 ka maan kya hai?',
          'What is the value of log2 512?'
        ),
        opts: [
          t('8', '8'),
          t('9', '9'),
          t('10', '10'),
          t('11', '11')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 2^9 = 512, isliye log2 512 = 9.',
          'Correct answer: 2^9 = 512, so log2 512 = 9.'
        )
      }
    ],
    keyNotes: [
      t(
        'log_a b = c ka matlab hai a^c = b — log power ka ulta hai.',
        'log_a b = c means a^c = b — a log is a reversed power.'
      ),
      t(
        'Product: log(xy) = log x + log y; quotient: log(x/y) = log x - log y.',
        'Product: log(xy) = log x + log y; quotient: log(x/y) = log x - log y.'
      ),
      t(
        'Power: log(x^n) = n × log x — power bahar aati hai.',
        'Power: log(x^n) = n × log x — the power comes out.'
      ),
      t(
        'log 1 = 0, log(base) = 1; log 0 aur negative ka log exist nahi karta.',
        'log 1 = 0, log of the base = 1; log 0 and log of a negative number do not exist.'
      ),
      t(
        'Base positive hona chahiye aur 1 ke barabar nahi hona chahiye.',
        'The base must be positive and not equal to 1.'
      )
    ],
    practice: {
      title: t(
        'Practice: Teen Logs Nikaalo',
        'Practice: Find Three Logs'
      ),
      task: t(
        'log2 1024, log5 625 aur log10 1000000 nikaalo. Starter code run karo aur verify karo ki output expected jaisa aata hai: 10, 4 aur 6.',
        'Find log2 1024, log5 625, and log10 1000000. Run the starter code and verify the output matches the expected output: 10, 4, and 6.'
      ),
      language: 'python',
      starter: `import math
print("log2 1024 =", round(math.log(1024, 2)))
print("log5 625 =", round(math.log(625, 5)))
print("log10 1000000 =", round(math.log(1000000, 10)))`,
      expected: `log2 1024 = 10
log5 625 = 4
log10 1000000 = 6`
    },
    readMinutes: 12
  };

const quantDataInterpretation: Article = {
    id: 'quant-data-interpretation',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Data Interpretation — Table, Bar, Line aur Pie Chart se Sahi Jawab',
      'Data Interpretation — The Right Answer from Table, Bar, Line, and Pie Chart'
    ),
    summary: t(
      'Chart ko padhna ek skill hai: pehle sawaal padho, phir sirf wohi number dhoondho jo chahiye. Dukaanon ki sales table aur kharch ke pie chart se total, average aur percent nikaalna seekho.',
      'Reading a chart is a skill: read the question first, then find only the number you need. Learn to find totals, averages, and percents from a shop sales table and a spending pie chart.'
    ),
    sections: [
      {
        heading: t(
          '1. Data Interpretation Kya Hai? (Chart Padhne ka Tareeka)',
          '1. What Is Data Interpretation? (How to Read a Chart)'
        ),
        body: t(
          `Data Interpretation (DI) ka matlab hai table ya chart mein diye gaye numbers se sawaal ka jawab nikaalna. Exam mein DI ke 5 sawaal ek hi chart par aate hain, isliye ek baar chart samajh lo toh 5 marks ek saath mil jaate hain. Chaar tarah ke charts sabse zyada aate hain: **table** (rows aur columns mein numbers), **bar chart** (lambai se comparison), **line chart** (samay ke saath badlav) aur **pie chart** (kul ka hissa, percent mein).\n\nDI karne ka sabse achha tareeka hai **pehle sawaal padho, phir chart dekho**. Jo student pehle poora chart padhne lagta hai, woh time barbaad karta hai aur numbers ko bhool jaata hai. Sawaal padhne se pata chal jaata hai ki kaun sa number chahiye — phir chart mein sirf wahi number dhoondho. Jaise "March mein kul sales kitni thi?" poochha ho toh sirf March wala column jodo, baaki columns ko ignore karo.\n\nHar chart ke saath uski **unit** bhi dekho: sales "hazaar rupaye mein" hai ya "lakh mein"? Percent "kul ka" hai ya "pichhle saal ka"? Unit miss karne se jawab 1000 guna galat ho sakta hai. Aur hamesha total ko check karo: table mein row total aur column total dono ko jodne se ek hi grand total aana chahiye — agar nahi aata, toh aapne koi number galat padha hai.`,
          `Data Interpretation (DI) means finding the answer to a question from numbers given in a table or chart. In exams, 5 DI questions come from one chart, so once you understand the chart, you get 5 marks together. Four kinds of charts appear most often: a **table** (numbers in rows and columns), a **bar chart** (comparison by length), a **line chart** (change over time), and a **pie chart** (a share of the whole, in percent).\n\nThe best way to do DI is **read the question first, then look at the chart**. A student who starts by reading the whole chart wastes time and forgets the numbers. Reading the question tells you which number you need — then find only that number in the chart. For example, if the question asks "what were total sales in March?", add only the March column and ignore the other columns.\n\nAlways check the **unit** with every chart: are sales in "thousands of rupees" or in "lakhs"? Is the percent "of the total" or "of last year"? Missing the unit can make the answer wrong by 1000 times. And always check the total: in a table, adding the row totals and adding the column totals must give the same grand total — if they do not, you misread a number.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Dukaan ki Sales, Budget aur Mausam',
          '2. Real-Life Examples: Shop Sales, a Budget, and the Weather'
        ),
        body: t(
          `Ek dukaan ka malik har mahine apni sales table dekhta hai: kaun si cheez kitni biki, kis mahine sabse zyada biki. Agar March mein sales February se zyada hain, toh woh March wala stock badha deta hai. Yeh bilkul wahi kaam hai jo DI mein karna hota hai — table se trend nikaalna aur faisla lena.\n\nGhar ka budget ek **pie chart** hota hai: kul kharch 36,000 rupaye mein se kiraya 40%, khana 25%, aana-jaana 15% aur bachat 20%. Pie chart dekhte hi pata chal jaata hai ki sabse bada hissa kiska hai aur bachat kitni bachi. Agar kiraya 40% se badh kar 50% ho jaaye, toh bachat par seedha asar padega — yeh samajh pie chart se ek second mein aati hai.\n\nMausam ka **line chart** dikhata hai ki temperature hafte bhar kaise badla. Line upar jaaye toh garmi badhi, neeche aaye toh garmi ghati. Exam mein line chart se aksar poochha jaata hai: "kis din sabse zyada badlav hua?" — iske liye do aas-paas ke points ka farak nikaalo, sabse bada farak hi jawab hai.`,
          `A shop owner looks at the sales table every month: how much of each item sold, and in which month sales were highest. If March sales are higher than February sales, the owner increases the March stock. This is exactly the work DI asks for — finding the trend in a table and making a decision.\n\nA home budget is a **pie chart**: out of total spending of 36,000 rupees, rent is 40%, food is 25%, travel is 15%, and savings are 20%. One look at the pie chart shows whose share is biggest and how much savings are left. If rent rises from 40% to 50%, savings take a direct hit — this is clear from the pie chart in one second.\n\nA weather **line chart** shows how temperature changed through the week. If the line goes up, it got hotter; if it goes down, it got cooler. Exams often ask from a line chart: "on which day was the biggest change?" — for that, find the difference between two nearby points; the biggest difference is the answer.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: Sales Table ka Worked Example (Dry Run)',
          '3. Step-by-Step: Worked Example on a Sales Table (Dry Run)'
        ),
        body: t(
          `Table mein 4 dukaanon (A, B, C, D) ki 3 mahine ki sales hai — January, February, March. Pehla kaam hai har dukaan ka total nikaalna. **A:** 120 + 150 + 180 = **450**. **B:** 100 + 130 + 170 = **400**. **C:** 90 + 110 + 140 = **340**. **D:** 80 + 100 + 120 = **300**. Ab grand total nikaalo: 450 + 400 + 340 + 300 = **1490**.\n\nDoosra kaam hai March ka total nikaalna — sirf March wala column jodo: 180 + 170 + 140 + 120 = **610**. Column se check karo: January ka total hai 120 + 100 + 90 + 80 = 390, February ka total hai 150 + 130 + 110 + 100 = 490, March ka 610. Teenon ko jodo: 390 + 490 + 610 = 1490. Grand total dono tareekon se ek hi aaya — matlab hisaab sahi hai. Yahi cross-check exam mein aapko galti se bachata hai.\n\nTeesra kaam hai average nikaalna: kul 1490 ko 4 dukaanon se bhaag do: 1490 / 4 = **372.5**. Sabse zyada sales A ki (450) aur sabse kam D ki (300) hai. Neeche wala code yahi poora hisaab print karta hai — table ke har number ko code se milakar dekho.`,
          `The table shows 3 months of sales — January, February, March — for 4 shops (A, B, C, D). First find each shop total. **A:** 120 + 150 + 180 = **450**. **B:** 100 + 130 + 170 = **400**. **C:** 90 + 110 + 140 = **340**. **D:** 80 + 100 + 120 = **300**. Now find the grand total: 450 + 400 + 340 + 300 = **1490**.\n\nSecond, find the March total — add only the March column: 180 + 170 + 140 + 120 = **610**. Check it by columns: January total is 120 + 100 + 90 + 80 = 390, February total is 150 + 130 + 110 + 100 = 490, March is 610. Add all three: 390 + 490 + 610 = 1490. The grand total is the same by both methods — so the calculation is correct. This cross-check is what saves you from mistakes in exams.\n\nThird, find the average: divide 1490 by 4 shops: 1490 / 4 = **372.5**. The highest sales are A (450) and the lowest are D (300). The code below prints this whole calculation — match every table number against the code.`
        ),
        code: {
          title: t(
            'Sales Table: Har Dukaan ka Total aur Grand Total',
            'Sales Table: Each Shop Total and the Grand Total'
          ),
          language: 'python',
          code: `shops = {"A": [120, 150, 180], "B": [100, 130, 170], "C": [90, 110, 140], "D": [80, 100, 120]}
total = 0
for name, sales in shops.items():
    print(name, "total =", sum(sales))
    total += sum(sales)
print("Grand total =", total)
print("March total =", sum(s[2] for s in shops.values()))
print("Average total per shop =", total / 4)`,
          output: `A total = 450
B total = 400
C total = 340
D total = 300
Grand total = 1490
March total = 610
Average total per shop = 372.5`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Galat Column, Percent ka Base aur Unit',
          '4. Common Mistakes: Wrong Column, the Percent Base, and the Unit'
        ),
        body: t(
          `Sabse badi galti hai **galat row ya column padh lena**. Table mein A ki February sales 150 hai, par jaldi mein student March wali 180 padh leta hai. Bachne ka tareeka: ungli ya pen se row aur column ko follow karo, aur number likhne se pehle ek baar row ka naam aur column ka naam dono check karo.\n\nDoosri galti hai **percent ka base bhool jaana**. "A ki sales kul ka kitna percent hai?" mein base hai grand total 1490: 450 / 1490 × 100 = lagbhag 30.2%. Lekin "A ki March sales A ke total ka kitna percent hai?" mein base hai 450: 180 / 450 × 100 = 40%. Dono sawaal alag hain — "ka" ke baad jo likha hai, wahi base hai.\n\nTeesri galti hai **unit ignore karna**. Agar table "hazaar rupaye mein" hai aur sales 450 likhi hai, toh asli rakam 4,50,000 rupaye hai, 450 rupaye nahi. Chauthi galti hai **pie chart mein percent ko seedha number samajh lena**. Pie chart mein 40% ka matlab hai kul ka 40% — 36,000 rupaye ke budget mein kiraya 40% matlab 14,400 rupaye, sirf 40 nahi.`,
          `The biggest mistake is **reading the wrong row or column**. In the table, A February sales are 150, but in a hurry a student reads the March value 180. The way to avoid it: follow the row and column with your finger or pen, and check both the row name and the column name once before writing the number.\n\nThe second mistake is **forgetting the base of a percent**. In "what percent of the total are A sales?", the base is the grand total 1490: 450 / 1490 × 100 = about 30.2%. But in "what percent of A total are A March sales?", the base is 450: 180 / 450 × 100 = 40%. The two questions are different — whatever comes after "of" is the base.\n\nThe third mistake is **ignoring the unit**. If the table is "in thousands of rupees" and sales are written as 450, the real amount is 4,50,000 rupees, not 450 rupees. The fourth mistake is **treating a pie chart percent as a plain number**. In a pie chart, 40% means 40% of the whole — in a 36,000 rupee budget, rent at 40% means 14,400 rupees, not just 40.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Missing Data, Zero aur Barabar Values',
          '5. Edge Cases: Missing Data, Zero, and Equal Values'
        ),
        body: t(
          `**Pehla edge case: missing data.** Table mein kabhi koi cell khaali hota hai ya "-" likha hota hai. Iska matlab hai data nahi hai — usko zero mat samjho. Agar D ki February sales missing hoti, toh D ka total nahi nikaal sakte, sirf January + March nikaal sakte. Exam mein aise sawaal ka jawab aksar "cannot be determined" hota hai.\n\n**Doosra: zero value.** Kisi dukaan ki sales ek mahine mein 0 ho sakti hai — iska matlab hai us mahine kuch nahi bika. Zero ko total mein jodne se total nahi badalta, par average mein woh mahina phir bhi gina jaata hai. **Teesra: barabar values.** Agar do dukaanon ka total barabar ho, jaise A aur B dono ka 400 ho, toh "sabse zyada kaun?" ka jawab dono hain — sirf ek ka naam likhna galat hoga.\n\n**Chautha: pie chart ke percent ka sum.** Pie chart ke saare percent milkar hamesha 100 hone chahiye. Agar 40 + 25 + 15 + 20 = 100 hai, toh chart sahi hai. Agar sum 100 se zyada ya kam aaye, toh ya toh koi hissa missing hai ya aapne koi number galat padha hai. Yeh check ek second mein chart ki galti pakad leta hai.`,
          `**First edge case: missing data.** Sometimes a cell in a table is blank or marked "-". That means there is no data — do not treat it as zero. If D February sales were missing, you could not find D total, only January + March. In exams, the answer to such a question is often "cannot be determined".\n\n**Second: zero value.** A shop sales in one month can be 0 — that means nothing sold that month. Adding zero to the total does not change the total, but that month still counts in the average. **Third: equal values.** If two shops have the same total, such as A and B both at 400, then the answer to "who is highest?" is both — writing only one name is wrong.\n\n**Fourth: pie chart percents must add up.** All percents in a pie chart must always add to 100. If 40 + 25 + 15 + 20 = 100, the chart is correct. If the sum is more or less than 100, either a share is missing or you misread a number. This check catches a chart error in one second.`
        )
      },
      {
        heading: t(
          '6. What-If: Pie Chart se Rupaye, Angle aur Badlav',
          '6. What-If: From Pie Chart to Rupees, Angles, and Change'
        ),
        body: t(
          `**What if: pie chart se rupaye nikaalne hon?** Budget 36,000 rupaye hai. Kiraya 40% matlab 36,000 × 40 / 100 = **14,400** rupaye. Khana 25% matlab 9,000 rupaye. Aana-jaana 15% matlab 5,400 rupaye. Bachat 20% matlab 7,200 rupaye. Chaaron ko jodo: 14,400 + 9,000 + 5,400 + 7,200 = 36,000. Kul wapas mil gaya — hisaab sahi hai.\n\n**What if: pie chart ka angle nikaalna ho?** Poora circle 360 degree hota hai, isliye 1% matlab 3.6 degree. Kiraya 40% matlab 40 × 3.6 = **144 degree**. Khana 25% matlab 90 degree, aana-jaana 15% matlab 54 degree, bachat 20% matlab 72 degree. Chaaron angle jodo: 144 + 90 + 54 + 72 = 360 degree. Neeche wala code yahi hisaab karta hai.\n\n**What if: budget badh jaaye?** Agar budget 36,000 se badh kar 45,000 ho jaaye aur percent wahi rahein, toh kiraya hoga 45,000 × 40 / 100 = 18,000 rupaye. Percent same rehta hai, par rupaye badh jaate hain — kyunki percent kul par depend karta hai. Exam mein yeh trap aata hai: percent dekh kar student sochta hai rakam bhi wahi rahegi, par kul badalte hi rakam badal jaati hai.`,
          `**What if you must find rupees from a pie chart?** The budget is 36,000 rupees. Rent at 40% means 36,000 × 40 / 100 = **14,400** rupees. Food at 25% means 9,000 rupees. Travel at 15% means 5,400 rupees. Savings at 20% means 7,200 rupees. Add all four: 14,400 + 9,000 + 5,400 + 7,200 = 36,000. The total comes back — the calculation is correct.\n\n**What if you must find the pie chart angle?** A full circle is 360 degrees, so 1% means 3.6 degrees. Rent at 40% means 40 × 3.6 = **144 degrees**. Food at 25% means 90 degrees, travel at 15% means 54 degrees, savings at 20% means 72 degrees. Add all four angles: 144 + 90 + 54 + 72 = 360 degrees. The code below does this calculation.\n\n**What if the budget grows?** If the budget rises from 36,000 to 45,000 and the percents stay the same, rent becomes 45,000 × 40 / 100 = 18,000 rupees. The percent stays the same, but the rupees grow — because a percent depends on the whole. Exams set this trap: seeing the same percent, a student thinks the amount stays the same, but as soon as the whole changes, the amount changes.`
        ),
        code: {
          title: t(
            'Pie Chart: Percent se Rupaye aur Angle',
            'Pie Chart: From Percent to Rupees and Angle'
          ),
          language: 'python',
          code: `budget = 36000
for item, pct in [("Rent", 40), ("Food", 25), ("Transport", 15), ("Savings", 20)]:
    amount = budget * pct // 100
    angle = 360 * pct // 100
    print(item, pct, "% =", amount, "rupees, angle =", angle, "degrees")
print("Angles add up to 360 degrees")`,
          output: `Rent 40 % = 14400 rupees, angle = 144 degrees
Food 25 % = 9000 rupees, angle = 90 degrees
Transport 15 % = 5400 rupees, angle = 54 degrees
Savings 20 % = 7200 rupees, angle = 72 degrees
Angles add up to 360 degrees`
        }
      },
      {
        heading: t(
          '7. Summary: DI ka Poora Picture',
          '7. Summary: The Full Picture of DI'
        ),
        body: t(
          `DI ka golden rule hai: **pehle sawaal padho, phir sirf wohi number dhoondho**. Table mein row total aur column total dono se grand total check karo. Pie chart mein percent ko kul se guna karke rupaye nikaalo, aur angle ke liye percent ko 3.6 se guna karo. Aaj ke numbers yaad rakho: dukaan A total 450, B 400, C 340, D 300, grand total 1490, March total 610, average 372.5. Budget 36,000 mein kiraya 14,400 (144 degree), khana 9,000 (90 degree), aana-jaana 5,400 (54 degree), bachat 7,200 (72 degree).\n\nExam strategy: unit pehle dekho, base ("ka" ke baad wala) pehchano, aur har jawab ko total se cross-check karo. Missing data ko zero mat samjho, barabar values par dono ka naam likho, aur pie percent ka sum 100 check karo.\n\nRevision ke liye yahi 5 key notes kaafi hain. Agle article mein hum data sufficiency dekhenge — jahan sawaal yeh nahi hota ki jawab kya hai, balki yeh hota hai ki diye gaye statements se jawab nikal sakta hai ya nahi.`,
          `The golden rule of DI is: **read the question first, then find only the number you need**. In a table, check the grand total from both row totals and column totals. In a pie chart, multiply the percent by the whole to get rupees, and multiply the percent by 3.6 to get the angle. Remember today's numbers: shop A total 450, B 400, C 340, D 300, grand total 1490, March total 610, average 372.5. In the 36,000 budget, rent is 14,400 (144 degrees), food 9,000 (90 degrees), travel 5,400 (54 degrees), savings 7,200 (72 degrees).\n\nThe exam strategy: look at the unit first, find the base (whatever comes after "of"), and cross-check every answer against the total. Do not treat missing data as zero, write both names when values are equal, and check that pie percents add to 100.\n\nThese 5 key notes are enough for revision. In the next article we will look at data sufficiency — where the question is not what the answer is, but whether the given statements can give the answer at all.`
        )
      }
    ],
    diagram: {
      kind: 'bars',
      title: t(
        'Dukaanon ki Kul Sales: A Sabse Aage',
        'Total Sales by Shop: A Is Ahead'
      ),
      caption: t(
        'Bar ki lambai kul sales dikhati hai, sabse badi bar A ki hai',
        'Bar length shows total sales; the longest bar is A'
      ),
      nodes: [],
      bars: [
        {
          label: t('Dukaan A: 450', 'Shop A: 450'),
          value: 100,
          note: t('Sabse zyada', 'Highest')
        },
        {
          label: t('Dukaan B: 400', 'Shop B: 400'),
          value: 89,
          note: t('450 ka 89%', '89% of 450')
        },
        {
          label: t('Dukaan C: 340', 'Shop C: 340'),
          value: 76,
          note: t('450 ka 76%', '76% of 450')
        },
        {
          label: t('Dukaan D: 300', 'Shop D: 300'),
          value: 67,
          note: t('Sabse kam', 'Lowest')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
            'Pie Chart: Percent se Rupaye aur Angle',
            'Pie Chart: From Percent to Rupees and Angle'
          ),
        language: 'python',
        code: `budget = 36000
for item, pct in [("Rent", 40), ("Food", 25), ("Transport", 15), ("Savings", 20)]:
    amount = budget * pct // 100
    angle = 360 * pct // 100
    print(item, pct, "% =", amount, "rupees, angle =", angle, "degrees")
print("Angles add up to 360 degrees")`,
        output: `Rent 40 % = 14400 rupees, angle = 144 degrees
Food 25 % = 9000 rupees, angle = 90 degrees
Transport 15 % = 5400 rupees, angle = 54 degrees
Savings 20 % = 7200 rupees, angle = 72 degrees
Angles add up to 360 degrees`
      }
    ],
    mcqs: [
      {
        q: t(
          'Table mein dukaan A ki kul sales kitni hai?',
          'What are the total sales of shop A in the table?'
        ),
        opts: [
          t('400', '400'),
          t('450', '450'),
          t('340', '340'),
          t('300', '300')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: A ki sales 120 + 150 + 180 = 450 hai.',
          'Correct answer: A sales are 120 + 150 + 180 = 450.'
        )
      },
      {
        q: t(
          'March mahine mein chaaron dukaanon ki kul sales kitni thi?',
          'What were the total sales of all four shops in March?'
        ),
        opts: [
          t('490', '490'),
          t('550', '550'),
          t('610', '610'),
          t('1490', '1490')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: March column jodo: 180 + 170 + 140 + 120 = 610.',
          'Correct answer: add the March column: 180 + 170 + 140 + 120 = 610.'
        )
      },
      {
        q: t(
          '36,000 rupaye ke budget mein kiraya 40% hai. Kiraya kitne rupaye hai?',
          'In a budget of 36,000 rupees, rent is 40%. How many rupees is the rent?'
        ),
        opts: [
          t('9,000', '9,000'),
          t('12,000', '12,000'),
          t('14,400', '14,400'),
          t('18,000', '18,000')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: 36,000 × 40 / 100 = 14,400 rupaye.',
          'Correct answer: 36,000 × 40 / 100 = 14,400 rupees.'
        )
      },
      {
        q: t(
          'Kis dukaan ki kul sales sabse kam hai?',
          'Which shop has the lowest total sales?'
        ),
        opts: [
          t('Dukaan A', 'Shop A'),
          t('Dukaan B', 'Shop B'),
          t('Dukaan C', 'Shop C'),
          t('Dukaan D', 'Shop D')
        ],
        ans: 3,
        expl: t(
          'Sahi jawab: D ka total 80 + 100 + 120 = 300 hai, jo sabse kam hai.',
          'Correct answer: D total is 80 + 100 + 120 = 300, which is the lowest.'
        )
      },
      {
        q: t(
          'Chaaron dukaanon ki kul sales ka average kitna hai?',
          'What is the average of the total sales of the four shops?'
        ),
        opts: [
          t('370', '370'),
          t('372.5', '372.5'),
          t('375', '375'),
          t('380', '380')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: grand total 1490 / 4 = 372.5.',
          'Correct answer: grand total 1490 / 4 = 372.5.'
        )
      }
    ],
    keyNotes: [
      t(
        'Pehle sawaal padho, phir chart mein sirf wohi number dhoondho jo chahiye.',
        'Read the question first, then find only the number you need in the chart.'
      ),
      t(
        'Grand total ko row total aur column total dono se check karo.',
        'Check the grand total from both row totals and column totals.'
      ),
      t(
        'Percent ka base "ka" ke baad wala number hota hai.',
        'The base of a percent is the number after "of".'
      ),
      t(
        'Pie chart: rupaye = kul × percent / 100; angle = percent × 3.6 degree.',
        'Pie chart: rupees = whole × percent / 100; angle = percent × 3.6 degrees.'
      ),
      t(
        'Pie chart ke saare percent milkar hamesha 100 hote hain.',
        'All percents in a pie chart always add up to 100.'
      )
    ],
    practice: {
      title: t(
        'Practice: 5 Subjects ke Marks ka Total aur Average',
        'Practice: Total and Average of Marks in 5 Subjects'
      ),
      task: t(
        'Ek student ke 5 subjects mein marks hain: 72, 85, 90, 68, 95. Total, average, sabse zyada aur sabse kam marks nikaalo. Starter code run karo aur verify karo ki output expected jaisa aata hai: total 410, average 82.0, highest 95, lowest 68.',
        'A student scored these marks in 5 subjects: 72, 85, 90, 68, 95. Find the total, the average, the highest, and the lowest marks. Run the starter code and verify the output matches the expected output: total 410, average 82.0, highest 95, lowest 68.'
      ),
      language: 'python',
      starter: `marks = [72, 85, 90, 68, 95]
print("Total =", sum(marks))
print("Average =", sum(marks) / len(marks))
print("Highest =", max(marks))
print("Lowest =", min(marks))`,
      expected: `Total = 410
Average = 82.0
Highest = 95
Lowest = 68`
    },
    readMinutes: 12
  };

const quantDataSufficiency: Article = {
    id: 'quant-data-sufficiency',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Data Sufficiency — Statement Kaafi Hai ya Nahi, Ye Judge Karna',
      'Data Sufficiency — Judging Whether a Statement Is Enough'
    ),
    summary: t(
      'Data sufficiency mein jawab nikaalna nahi hota, sirf ye judge karna hota hai ki Statement I, Statement II, dono ya koi bhi kaafi hai ya nahi. Isi ek skill se 5 sawaal ek saath solve hote hain.',
      'In data sufficiency you do not find the answer; you only judge whether Statement I, Statement II, both, or neither is enough. This one skill solves 5 questions together.'
    ),
    sections: [
      {
        heading: t(
          '1. Data Sufficiency Kya Hai? (Sawaal ka Naya Format)',
          '1. What Is Data Sufficiency? (A New Question Format)'
        ),
        body: t(
          `Data Sufficiency (DS) mein ek sawaal diya hota hai aur uske neeche do statements diye hote hain — **Statement I** aur **Statement II**. Aapko jawab nikaalna nahi hai, sirf ye batana hai ki statements se jawab nikal sakta hai ya nahi. Options hamesha yahi hote hain: **(A)** sirf Statement I kaafi hai, **(B)** sirf Statement II kaafi hai, **(C)** dono milkar kaafi hain, **(D)** dono milkar bhi kaafi nahi hain. (Kuch exams mein paanchva option bhi hota hai: dono mein se koi ek akela kaafi hai.)\n\nDS ka pehla niyam hai: **sawaal ko pehle padho, statements ko baad mein**. Sawaal mein kya poochha ja raha hai, ye samajhna sabse zaroori hai. Jaise sawaal ho "kya x > 0 hai?" toh jawab sirf "haan" ya "naa" mein chahiye — x ka exact value nikaalna zaroori nahi hai. Jo student seedha statements padhne lagta hai, woh bhool jaata hai ki sawaal kya tha.\n\nDoosra niyam hai: **statements ko alag-alag check karo, phir saath mein**. Pehle dekho kya Statement I akela kaafi hai. Phir bhool jao ki I mein kya tha, aur dekho kya Statement II akela kaafi hai. Aakhir mein dono ko saath mein dekho. Ye order bahut zaroori hai — agar aap dono ko ek saath padh loge, toh aapko pata hi nahi chalega ki kaun sa akela kaafi tha.`,
          `In Data Sufficiency (DS), a question is given with two statements below it — **Statement I** and **Statement II**. You do not have to find the answer; you only have to say whether the statements can give the answer or not. The options are always these: **(A)** only Statement I is enough, **(B)** only Statement II is enough, **(C)** both together are enough, **(D)** even both together are not enough. (Some exams also have a fifth option: either statement alone is enough.)\n\nThe first rule of DS is: **read the question first, and the statements after**. Understanding what the question asks is the most important step. For example, if the question is "is x > 0?", the answer only needs to be "yes" or "no" — finding the exact value of x is not needed. A student who jumps straight to the statements forgets what the question was.\n\nThe second rule is: **check the statements one by one, then together**. First see whether Statement I alone is enough. Then forget what I said, and see whether Statement II alone is enough. Finally, look at both together. This order matters a lot — if you read both together from the start, you will never know which one alone was enough.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Doctor, Interview aur Rasta Poochhna',
          '2. Real-Life Examples: a Doctor, an Interview, and Asking Directions'
        ),
        body: t(
          `DS roz ki zindagi mein har jagah hai. Doctor aapse poochhta hai: "kya aapko bukhaar hai?" Statement I: thermometer 102 dikha raha hai — kaafi hai, haan. Statement II: aapko thand lag rahi hai — kaafi nahi hai, kyunki thand bina bukhaar ke bhi lag sakti hai. Doctor ko exact temperature nahi chahiye, sirf haan ya naa chahiye — bilkul DS jaisa.\n\nInterview mein manager poochhta hai: "kya aap ye kaam kar sakte ho?" Statement I: aapke paas 3 saal ka experience hai — kaafi ho sakta hai. Statement II: aapne ye software pehle use kiya hai — shayad kaafi hai. Manager ko aapki poori kahani nahi chahiye, sirf ye jaanna hai ki kaun si baat kaafi hai.\n\nRasta poochhne par bhi yahi hota hai. Sawaal: "kya station yahan se 2 km se kam hai?" Statement I: "station agle chaurahe par hai" — kaafi nahi hai, kyunki chaurahe ki doori nahi pata. Statement II: "paidhal 10 minute lagte hain" — kaafi ho sakta hai, kyunki 10 minute mein lagbhag 800 meter chalte hain. DS ka matlab hi yahi hai: **kaun si jaankari kaafi hai, kaun si nahi**.`,
          `DS is everywhere in daily life. A doctor asks you: "do you have a fever?" Statement I: the thermometer shows 102 — that is enough, yes. Statement II: you feel cold — that is not enough, because you can feel cold without a fever. The doctor does not need the exact temperature, only yes or no — exactly like DS.\n\nIn an interview, a manager asks: "can you do this work?" Statement I: you have 3 years of experience — that may be enough. Statement II: you have used this software before — that may be enough. The manager does not need your whole story, only which fact is enough.\n\nThe same thing happens when you ask for directions. Question: "is the station less than 2 km from here?" Statement I: "the station is at the next crossing" — not enough, because the distance to the crossing is unknown. Statement II: "it takes 10 minutes on foot" — that may be enough, because in 10 minutes you walk about 800 metres. That is what DS means: **which information is enough, and which is not**.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: "Kya x > 0 Hai?" ka Worked Example (Dry Run)',
          '3. Step-by-Step: Worked Example on "Is x > 0?" (Dry Run)'
        ),
        body: t(
          `Sawaal hai: **kya x > 0 hai?** Statement I: x^2 = 25. Statement II: x + 3 > 0. Ab step by step judge karte hain. **Step 1 — Statement I akela:** x^2 = 25 ka matlab hai x = 5 ya x = -5. Dono possible hain. Agar x = 5 hai toh jawab haan hai, agar x = -5 hai toh jawab naa hai. Ek hi statement se do alag jawab mil rahe hain, isliye Statement I akela **kaafi nahi hai**.\n\n**Step 2 — Statement II akela:** x + 3 > 0 ka matlab hai x > -3. Ismein x = 5 bhi aa sakta hai aur x = -2 bhi aa sakta hai. x = 5 par jawab haan hai, x = -2 par jawab naa hai. Phir se do alag jawab, isliye Statement II akela bhi **kaafi nahi hai**.\n\n**Step 3 — Dono saath mein:** I se x hai 5 ya -5. II se x > -3 hai. -5 is shart ko pass nahi karta, sirf 5 bachta hai. Toh x = 5 pakka hai, aur x > 0 ka jawab **haan** pakka hai. Isliye sahi option hai **(C) dono milkar kaafi hain**. Neeche wala code yahi check karta hai: I se dono candidates milte hain, II se sirf 5 bachta hai, aur dono milkar sirf 5 dete hain.`,
          `The question is: **is x > 0?** Statement I: x^2 = 25. Statement II: x + 3 > 0. Now judge it step by step. **Step 1 — Statement I alone:** x^2 = 25 means x = 5 or x = -5. Both are possible. If x = 5, the answer is yes; if x = -5, the answer is no. One statement gives two different answers, so Statement I alone is **not enough**.\n\n**Step 2 — Statement II alone:** x + 3 > 0 means x > -3. Here x can be 5 and x can also be -2. For x = 5 the answer is yes; for x = -2 the answer is no. Again two different answers, so Statement II alone is also **not enough**.\n\n**Step 3 — Both together:** From I, x is 5 or -5. From II, x > -3. -5 fails this test, so only 5 is left. So x = 5 for sure, and the answer to "is x > 0?" is **yes** for sure. So the correct option is **(C) both together are enough**. The code below checks exactly this: I gives both candidates, II leaves only 5, and both together give only 5.`
        ),
        code: {
          title: t(
            'DS Check: x^2 = 25 aur x + 3 > 0 se x Kya Hai?',
            'DS Check: What Is x from x squared = 25 and x + 3 > 0?'
          ),
          language: 'python',
          code: `candidates = [-5, 5]
print("Statement I (x squared = 25) allows:", candidates)
print("Statement II (x + 3 > 0) keeps:", [x for x in candidates if x + 3 > 0])
print("Both together allow only:", [x for x in candidates if x * x == 25 and x + 3 > 0])
print("Answer: both statements together are needed")`,
          output: `Statement I (x squared = 25) allows: [-5, 5]
Statement II (x + 3 > 0) keeps: [5]
Both together allow only: [5]
Answer: both statements together are needed`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Statements ko Jodna, Haan/Naa aur Exact Value',
          '4. Common Mistakes: Mixing Statements, Yes/No, and Exact Value'
        ),
        body: t(
          `Sabse badi galti hai **dono statements ko shuru se hi jod kar padhna**. Agar aap I aur II ko ek saath padhoge, toh aapko lagega jawab mil gaya, aur aap option (C) chun loge — jabki shayad I akela hi kaafi tha aur sahi option (A) tha. Hamesha I ko akela check karo, phir II ko akela, phir dono ko. Ye order tode bina DS mein marks nahi milte.\n\nDoosri galti hai **"haan ya naa" wale sawaal mein exact value dhoondhna**. Sawaal "kya x > 0 hai?" ka jawab sirf haan ya naa hai. Agar Statement I se pata chal jaaye ki x = -5 hai, toh jawab pakka naa hai — aur naa bhi ek pakka jawab hai. Statement kaafi hai, kyunki sawaal ka jawab mil gaya, chahe woh naa hi kyun na ho. Jo student sirf "haan" ko jawab maanta hai, woh yahan galat karta hai.\n\nTeesri galti hai **statement ko sawaal samajh lena**. Statement I mein "x^2 = 25" likha hai — iska matlab ye nahi hai ki x = 5 hai. x = -5 bhi ho sakta hai. Square root mein hamesha do signs check karo. Chauthi galti hai **ek example se kaafi maan lena**. Agar x = 5 se sawaal ka jawab haan mil jaaye, toh ye kaafi nahi hai — aapko ye bhi check karna hai ki koi aur value (jaise -5) bhi possible hai ya nahi.`,
          `The biggest mistake is **reading both statements together from the start**. If you read I and II together, you will feel the answer is found and pick option (C) — when perhaps I alone was enough and the correct option was (A). Always check I alone, then II alone, then both. Without this order, DS gives no marks.\n\nThe second mistake is **hunting for the exact value in a yes-or-no question**. The question "is x > 0?" needs only yes or no. If Statement I shows x = -5, the answer is firmly no — and no is also a firm answer. The statement is enough, because the question is answered, even if the answer is no. A student who counts only "yes" as an answer goes wrong here.\n\nThe third mistake is **treating a statement as the question**. Statement I says "x^2 = 25" — that does not mean x = 5. x = -5 is also possible. In a square root, always check both signs. The fourth mistake is **calling one example enough**. If x = 5 gives the answer yes, that is not enough — you must also check whether another value (such as -5) is possible too.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Dono Akela Kaafi, Contradiction aur "Cannot Be Determined"',
          '5. Edge Cases: Each Alone Enough, Contradiction, and "Cannot Be Determined"'
        ),
        body: t(
          `**Pehla edge case: dono mein se koi ek akela kaafi ho.** Sawaal: "kya y = 12 hai?" Statement I: y / 3 = 4, isliye y = 12 — kaafi hai. Statement II: y - 5 = 7, isliye y = 12 — ye bhi kaafi hai. Dono akela kaafi hain, isliye sahi option hai "dono mein se koi ek akela kaafi hai". Neeche wala code yahi dikhata hai. Is case mein (C) mat chuno — (C) sirf tab hota hai jab dono milkar kaafi hon, akela koi na ho.\n\n**Doosra: contradiction.** Agar Statement I se x = 5 aaye aur Statement II se x = 7 aaye, toh dono saath mein galat hain — koi ek statement galat hai. Exam mein aisa nahi hota; statements hamesha sach hote hain. Agar aapko contradiction dikhe, toh aapne koi statement galat padha hai — wapas check karo.\n\n**Teesra: dono milkar bhi kaafi nahi.** Sawaal: "kya p prime hai?" Statement I: p > 10. Statement II: p odd hai. Dono milkar bhi p = 11 (prime) aur p = 15 (prime nahi) dono possible hain. Isliye jawab hai **(D) dono milkar bhi kaafi nahi hain**. "Cannot be determined" ek poora sahi option hai — isse darr kar (C) mat chuno.`,
          `**First edge case: either statement alone is enough.** Question: "is y = 12?" Statement I: y / 3 = 4, so y = 12 — enough. Statement II: y - 5 = 7, so y = 12 — this is also enough. Each alone is enough, so the correct option is "either statement alone is enough". The code below shows exactly this. Do not pick (C) in this case — (C) is only for when both together are enough and neither alone is.\n\n**Second: contradiction.** If Statement I gives x = 5 and Statement II gives x = 7, the two together are wrong — one statement must be false. Exams never do this; statements are always true. If you see a contradiction, you misread a statement — check again.\n\n**Third: even both together are not enough.** Question: "is p prime?" Statement I: p > 10. Statement II: p is odd. Even together, p = 11 (prime) and p = 15 (not prime) are both possible. So the answer is **(D) even both together are not enough**. "Cannot be determined" is a fully correct option — do not pick (C) out of fear.`
        )
      },
      {
        heading: t(
          '6. What-If: Sirf Ek Statement, Sirf Haan/Naa aur Ulta Order',
          '6. What-If: Only One Statement, Only Yes/No, and Reverse Order'
        ),
        body: t(
          `**What if: sirf Statement I diya hota?** Upar wale example mein sirf I hota (x^2 = 25) toh jawab nahi nikalta — x = 5 ya -5, dono possible. DS mein ek statement ka kaam hi yahi check karna hai: kya is ek se pakka jawab milta hai? Agar ek value se haan aur doosri se naa mile, toh statement kaafi nahi hai.\n\n**What if: sawaal "x ka value kya hai?" hota?** Tab haan/naa kaafi nahi hota — exact value chahiye. x^2 = 25 se exact value nahi milti, x + 3 > 0 se bhi nahi milti, dono milkar x = 5 milta hai. Sawaal ka type badalte hi kaafi hone ka matlab badal jaata hai — isiliye sawaal ko pehle padhna zaroori hai.\n\n**What if: aap II ko pehle check kar lein?** Order badalne se jawab nahi badalta, bas galti ka chance badh jaata hai. Standard order hai: I akela, phir II akela, phir dono. Is order ko exam mein hamesha follow karo — ye aapko (A) aur (C) ke beech ki confusion se bachata hai, jo DS mein sabse zyada marks khaata hai.`,
          `**What if only Statement I were given?** In the example above, with only I (x^2 = 25), the answer would not come out — x = 5 or -5, both possible. The whole job of one statement in DS is this check: does this one statement give a firm answer? If one value gives yes and another gives no, the statement is not enough.\n\n**What if the question were "what is the value of x?"** Then yes or no is not enough — the exact value is needed. x^2 = 25 does not give the exact value, x + 3 > 0 does not either, but both together give x = 5. As soon as the question type changes, the meaning of "enough" changes — which is why reading the question first is essential.\n\n**What if you check II first?** Changing the order does not change the answer, it only raises the chance of a mistake. The standard order is: I alone, then II alone, then both. Always follow this order in exams — it saves you from the confusion between (A) and (C), which costs the most marks in DS.`
        ),
        code: {
          title: t(
            'Dono Akela Kaafi: y / 3 = 4 aur y - 5 = 7',
            'Each Alone Enough: y / 3 = 4 and y - 5 = 7'
          ),
          language: 'python',
          code: `print("Statement I: y / 3 = 4, so y =", 4 * 3)
print("Statement II: y - 5 = 7, so y =", 7 + 5)
print("Each statement alone gives y = 12")`,
          output: `Statement I: y / 3 = 4, so y = 12
Statement II: y - 5 = 7, so y = 12
Each statement alone gives y = 12`
        }
      },
      {
        heading: t(
          '7. Summary: Data Sufficiency ka Poora Picture',
          '7. Summary: The Full Picture of Data Sufficiency'
        ),
        body: t(
          `DS mein jawab nikaalna nahi hota, sirf ye judge karna hota hai ki kaun sa statement kaafi hai. Order yaad rakho: **I akela, phir II akela, phir dono**. Options: (A) sirf I, (B) sirf II, (C) dono milkar, (D) dono milkar bhi nahi. Aaj ka example yaad rakho: "kya x > 0 hai?" mein I se x = 5 ya -5, II se x > -3, dono milkar x = 5 pakka — isliye (C). Aur "kya y = 12 hai?" mein I se y = 12 aur II se bhi y = 12 — dono akela kaafi.\n\nExam strategy: sawaal pehle padho, haan/naa wale sawaal mein "naa" ko bhi pakka jawab maano, square root mein dono signs check karo, aur ek example se kaafi mat maano — saari possible values check karo. "Cannot be determined" se mat daro, woh ek sahi option hai.\n\nRevision ke liye yahi 5 key notes kaafi hain. Agle article mein hum simplification aur approximation dekhenge — BODMAS, percent aur round karke tez hisaab karna.`,
          `In DS you do not find the answer; you only judge which statement is enough. Remember the order: **I alone, then II alone, then both**. Options: (A) only I, (B) only II, (C) both together, (D) even both together are not enough. Remember today's example: for "is x > 0?", I gives x = 5 or -5, II gives x > -3, and both together give x = 5 for sure — so (C). And for "is y = 12?", I gives y = 12 and II also gives y = 12 — each alone is enough.\n\nThe exam strategy: read the question first, count "no" as a firm answer in yes-or-no questions, check both signs in a square root, and never call one example enough — check all possible values. Do not fear "cannot be determined"; it is a correct option.\n\nThese 5 key notes are enough for revision. In the next article we will look at simplification and approximation — fast calculation with BODMAS, percents, and rounding.`
        )
      }
    ],
    diagram: {
      kind: 'boxes',
      title: t(
        'DS Judge Karne ka Order: I, phir II, phir Dono',
        'The DS Judging Order: I, then II, then Both'
      ),
      caption: t(
        'Order tode bina DS mein marks nahi milte',
        'Without this order, DS gives no marks'
      ),
      nodes: [
        {
          t: t('Sawaal padho: kya poochha hai?', 'Read the question: what is asked?'),
          s: t('Haan/naa chahiye ya exact value?', 'Is a yes or no needed, or an exact value?')
        },
        {
          t: t('Step 1: Statement I akela kaafi hai?', 'Step 1: Is Statement I alone enough?'),
          s: t('Haan toh (A) ho sakta hai, naa toh aage badho', 'If yes, (A) is possible; if no, move on')
        },
        {
          t: t('Step 2: Statement II akela kaafi hai?', 'Step 2: Is Statement II alone enough?'),
          s: t('I ko bhool kar sirf II check karo', 'Forget I and check only II')
        },
        {
          t: t('Step 3: Dono milkar kaafi hain?', 'Step 3: Are both together enough?'),
          s: t('Haan toh (C), naa toh (D)', 'If yes, (C); if no, (D)')
        },
        {
          t: t('Dono akela kaafi hon toh alag option', 'If each alone is enough, it is a separate option'),
          s: t('I aur II dono se y = 12 milta hai — dono akela kaafi', 'I and II both give y = 12 — each alone is enough')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
            'Dono Akela Kaafi: y / 3 = 4 aur y - 5 = 7',
            'Each Alone Enough: y / 3 = 4 and y - 5 = 7'
          ),
        language: 'python',
        code: `print("Statement I: y / 3 = 4, so y =", 4 * 3)
print("Statement II: y - 5 = 7, so y =", 7 + 5)
print("Each statement alone gives y = 12")`,
        output: `Statement I: y / 3 = 4, so y = 12
Statement II: y - 5 = 7, so y = 12
Each statement alone gives y = 12`
      }
    ],
    mcqs: [
      {
        q: t(
          'Sawaal: kya x > 0 hai? Statement I: x^2 = 25. Statement II: x + 3 > 0. Kaun sa option sahi hai?',
          'Question: is x > 0? Statement I: x^2 = 25. Statement II: x + 3 > 0. Which option is correct?'
        ),
        opts: [
          t('Sirf Statement I kaafi hai', 'Only Statement I is enough'),
          t('Sirf Statement II kaafi hai', 'Only Statement II is enough'),
          t('Dono milkar kaafi hain', 'Both together are enough'),
          t('Dono milkar bhi kaafi nahi hain', 'Even both together are not enough')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: I se x = 5 ya -5, II se x > -3, dono milkar sirf x = 5 bachta hai, isliye x > 0 pakka haan hai.',
          'Correct answer: I gives x = 5 or -5, II gives x > -3, and both together leave only x = 5, so x > 0 is firmly yes.'
        )
      },
      {
        q: t(
          'Sawaal: kya n even hai? Statement I: n, 6 ka multiple hai. Statement II: n, 5 ka multiple hai. Kaun sa option sahi hai?',
          'Question: is n even? Statement I: n is a multiple of 6. Statement II: n is a multiple of 5. Which option is correct?'
        ),
        opts: [
          t('Sirf Statement I kaafi hai', 'Only Statement I is enough'),
          t('Sirf Statement II kaafi hai', 'Only Statement II is enough'),
          t('Dono milkar kaafi hain', 'Both together are enough'),
          t('Dono milkar bhi kaafi nahi hain', 'Even both together are not enough')
        ],
        ans: 0,
        expl: t(
          'Sahi jawab: 6 ka multiple hamesha even hota hai (6, 12, 18...), isliye I akela kaafi hai. II se n = 5 (odd) ya 10 (even) ho sakta hai, isliye II kaafi nahi hai.',
          'Correct answer: a multiple of 6 is always even (6, 12, 18...), so I alone is enough. II allows n = 5 (odd) or 10 (even), so II is not enough.'
        )
      },
      {
        q: t(
          'Sawaal: Ram ki umar kya hai? Statement I: Ram, Shyam se 5 saal bada hai. Statement II: Shyam 20 saal ka hai. Kaun sa option sahi hai?',
          'Question: what is Ram age? Statement I: Ram is 5 years older than Shyam. Statement II: Shyam is 20 years old. Which option is correct?'
        ),
        opts: [
          t('Sirf Statement I kaafi hai', 'Only Statement I is enough'),
          t('Sirf Statement II kaafi hai', 'Only Statement II is enough'),
          t('Dono milkar kaafi hain', 'Both together are enough'),
          t('Dono milkar bhi kaafi nahi hain', 'Even both together are not enough')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: I se sirf farak pata hai, II se sirf Shyam ki umar pata hai, dono milkar Ram = 20 + 5 = 25 saal milta hai.',
          'Correct answer: I gives only the difference, II gives only Shyam age, and both together give Ram = 20 + 5 = 25 years.'
        )
      },
      {
        q: t(
          'Sawaal: kya x = 10 hai? Statement I: x / 2 = 5. Statement II: x > 9. Kaun sa option sahi hai?',
          'Question: is x = 10? Statement I: x / 2 = 5. Statement II: x > 9. Which option is correct?'
        ),
        opts: [
          t('Sirf Statement I kaafi hai', 'Only Statement I is enough'),
          t('Sirf Statement II kaafi hai', 'Only Statement II is enough'),
          t('Dono milkar kaafi hain', 'Both together are enough'),
          t('Dono milkar bhi kaafi nahi hain', 'Even both together are not enough')
        ],
        ans: 0,
        expl: t(
          'Sahi jawab: I se x = 10 pakka milta hai, isliye I akela kaafi hai. II se x = 10 ya 11 ya 12 ho sakta hai, isliye II kaafi nahi hai.',
          'Correct answer: I gives x = 10 for sure, so I alone is enough. II allows x = 10, 11, or 12, so II is not enough.'
        )
      },
      {
        q: t(
          'Sawaal: kya p prime hai? Statement I: p > 10. Statement II: p odd hai. Kaun sa option sahi hai?',
          'Question: is p prime? Statement I: p > 10. Statement II: p is odd. Which option is correct?'
        ),
        opts: [
          t('Sirf Statement I kaafi hai', 'Only Statement I is enough'),
          t('Sirf Statement II kaafi hai', 'Only Statement II is enough'),
          t('Dono milkar kaafi hain', 'Both together are enough'),
          t('Dono milkar bhi kaafi nahi hain', 'Even both together are not enough')
        ],
        ans: 3,
        expl: t(
          'Sahi jawab: dono milkar bhi p = 11 (prime) aur p = 15 (prime nahi) dono possible hain, isliye kaafi nahi hain.',
          'Correct answer: even together, p = 11 (prime) and p = 15 (not prime) are both possible, so they are not enough.'
        )
      }
    ],
    keyNotes: [
      t(
        'Order: I akela, phir II akela, phir dono — order kabhi mat todo.',
        'Order: I alone, then II alone, then both — never break the order.'
      ),
      t(
        'Haan/naa wale sawaal mein "naa" bhi pakka jawab hai.',
        'In a yes-or-no question, "no" is also a firm answer.'
      ),
      t(
        'x^2 = 25 se x = 5 ya -5 — square root mein dono signs check karo.',
        'x^2 = 25 gives x = 5 or -5 — check both signs in a square root.'
      ),
      t(
        'Ek example se kaafi mat maano — saari possible values check karo.',
        'Never call one example enough — check all possible values.'
      ),
      t(
        '"Cannot be determined" ek sahi option hai — isse mat daro.',
        '"Cannot be determined" is a correct option — do not fear it.'
      )
    ],
    practice: {
      title: t(
        'Practice: "Kya z = 8 Hai?" ko Judge Karo',
        'Practice: Judge "Is z = 8?"'
      ),
      task: t(
        'Sawaal hai: kya z = 8 hai? Statement I: z × 2 = 16. Statement II: z - 3 = 5. Judge karo ki kaun sa statement kaafi hai. Starter code run karo aur verify karo ki output expected jaisa aata hai: dono statements se z = 8 milta hai, isliye har ek akela kaafi hai.',
        'The question is: is z = 8? Statement I: z × 2 = 16. Statement II: z - 3 = 5. Judge which statement is enough. Run the starter code and verify the output matches the expected output: both statements give z = 8, so each alone is enough.'
      ),
      language: 'python',
      starter: `print("Statement I: z x 2 = 16, so z =", 16 // 2)
print("Statement II: z - 3 = 5, so z =", 5 + 3)
print("Verdict: each statement alone is enough")`,
      expected: `Statement I: z x 2 = 16, so z = 8
Statement II: z - 3 = 5, so z = 8
Verdict: each statement alone is enough`
    },
    readMinutes: 12
  };

const quantSimplification: Article = {
    id: 'quant-simplification',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Simplification aur Approximation — BODMAS se Tez Hisaab',
      'Simplification and Approximation — Fast Calculation with BODMAS'
    ),
    summary: t(
      'BODMAS ka sahi order, percent aur fraction ke shortcut, aur round karke tez andaza lagana — ye teen skills har quant section mein time bachate hain. Worked problems se seekho ki pehle kya karna hai.',
      'The right BODMAS order, percent and fraction shortcuts, and fast estimates by rounding — these three skills save time in every quant section. Learn from worked problems what to do first.'
    ),
    sections: [
      {
        heading: t(
          '1. Simplification Kya Hai? (BODMAS ka Sahi Order)',
          '1. What Is Simplification? (The Right BODMAS Order)'
        ),
        body: t(
          `Simplification ka matlab hai ek lambe hisaab ko step by step chhota karke uska sahi jawab nikaalna. Iska sabse bada niyam hai **BODMAS**: **B**racket (koshthak), **O**f (ka), **D**ivision (bhaag), **M**ultiplication (guna), **A**ddition (jod), **S**ubtraction (ghata). Order yahi rehta hai — pehle bracket ke andar ka hisaab, phir bhaag aur guna (left se right), phir jod aur ghata (left se right).\n\nEk example se samjho: 6 + 4 × 3. Jo student left se right chalta hai, woh karta hai (6 + 4) × 3 = 30 — galat. Sahi tareeka hai pehle guna karna: 4 × 3 = 12, phir jodna: 6 + 12 = **18**. BODMAS ka order tode bina simplification mein marks nahi milte.\n\nPercent aur fraction ke shortcuts bhi simplification ka hissa hain. 25% matlab 1/4, 50% matlab 1/2, 20% matlab 1/5, 12.5% matlab 1/8. In fractions ko yaad rakhne se percent ke sawaal ek second mein hote hain: 25% of 160 matlab 160 / 4 = 40. Aur approximation ka matlab hai paas wale round number se andaza lagana — jab options door-door hon, toh exact hisaab ki zaroorat hi nahi padti.`,
          `Simplification means reducing a long calculation step by step to its correct answer. Its biggest rule is **BODMAS**: **B**racket, **O**f, **D**ivision, **M**ultiplication, **A**ddition, **S**ubtraction. The order stays fixed — first the calculation inside brackets, then division and multiplication (left to right), then addition and subtraction (left to right).\n\nUnderstand it with one example: 6 + 4 × 3. A student who goes left to right does (6 + 4) × 3 = 30 — wrong. The right way is to multiply first: 4 × 3 = 12, then add: 6 + 12 = **18**. Without the BODMAS order, simplification gives no marks.\n\nPercent and fraction shortcuts are also part of simplification. 25% means 1/4, 50% means 1/2, 20% means 1/5, 12.5% means 1/8. Remembering these fractions makes percent questions take one second: 25% of 160 means 160 / 4 = 40. And approximation means estimating with a nearby round number — when the options are far apart, no exact calculation is needed at all.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Bill, Discount aur Andaza',
          '2. Real-Life Examples: a Bill, a Discount, and an Estimate'
        ),
        body: t(
          `Dukaan par bill banate time simplification har jagah hai. 3 cheezein hain: 120 rupaye, 80 rupaye aur 50 rupaye, aur 10% discount hai. Pehle total jodo: 120 + 80 + 50 = 250. Phir discount nikaalo: 10% of 250 = 25. Phir ghatao: 250 - 25 = 225 rupaye dene hain. Order galat hua toh bill galat hoga — isiliye BODMAS roz ki zindagi mein bhi kaam aata hai.\n\nDiscount mein percent shortcut sabse zyada kaam aata hai. Jacket 800 rupaye ki hai aur 25% off hai. 25% matlab 1/4, isliye discount = 800 / 4 = 200 rupaye, aur daam = 800 - 200 = 600 rupaye. Ye hisaab calculator bina bhi ek second mein ho jaata hai.\n\nApproximation bazaar mein andaza lagane ka tareeka hai. 49.6 rupaye wali 20 cheezein leni hain — exact hisaab 49.6 × 20.2 jaisa lamba hai, par andaza lagana aasan hai: 50 × 20 = 1000 rupaye. Aapko pata chal jaata hai ki 1000 rupaye kaafi hain ya nahi, bina exact hisaab ke. Exam mein jab options 1000, 2000, 5000 jaise door hon, toh approximation hi kaafi hai.`,
          `Simplification is everywhere when a shop makes a bill. There are 3 items: 120 rupees, 80 rupees, and 50 rupees, with a 10% discount. First add the total: 120 + 80 + 50 = 250. Then find the discount: 10% of 250 = 25. Then subtract: 250 - 25 = 225 rupees to pay. If the order goes wrong, the bill goes wrong — which is why BODMAS matters in daily life too.\n\nThe percent shortcut helps most with discounts. A jacket costs 800 rupees with 25% off. 25% means 1/4, so the discount = 800 / 4 = 200 rupees, and the price = 800 - 200 = 600 rupees. This calculation takes one second even without a calculator.\n\nApproximation is the way to estimate in the market. You must buy 20 items at 49.6 rupees each — the exact calculation like 49.6 × 20.2 is long, but estimating is easy: 50 × 20 = 1000 rupees. You know at once whether 1000 rupees is enough, without any exact calculation. In exams, when options are far apart like 1000, 2000, 5000, approximation alone is enough.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: BODMAS, Percent aur Approximation (Dry Run)',
          '3. Step-by-Step: BODMAS, Percent, and Approximation (Dry Run)'
        ),
        body: t(
          `Pehla worked example hai **(24 + 36) / 5 + 7 × 3**. BODMAS ke hisaab se pehle bracket: 24 + 36 = 60. Phir bhaag: 60 / 5 = 12. Phir guna: 7 × 3 = 21. Aakhir mein jod: 12 + 21 = **33**. Dhyaan do: guna aur bhaag jodne se pehle hote hain, isiliye 12 aur 21 ko aakhir mein joda gaya.\n\nDoosra example hai **15% of 240 + 25% of 160**. Pehle 15% of 240 nikaalo: 240 × 15 / 100 = 36. Phir 25% of 160 nikaalo: 25% matlab 1/4, isliye 160 / 4 = 40. Dono ko jodo: 36 + 40 = **76**. Shortcut se bhi check karo: 15% of 240 mein 240 × 3 / 20 = 36 aata hai, kyunki 15% = 3/20 hota hai.\n\nTeesra example hai **approximation: 49.6 × 20.2**. 49.6 ko 50 round karo aur 20.2 ko 20 round karo: 50 × 20 = **1000**. Exact jawab hai 49.6 × 20.2 = **1001.92**, jo andaze se sirf 1.92 door hai — bahut achha andaza. Aakhiri mein square root: 1225 ka square root 35 hai, kyunki 35 × 35 = 1225. Neeche wala code in sab ko print karta hai.`,
          `The first worked example is **(24 + 36) / 5 + 7 × 3**. By BODMAS, first the bracket: 24 + 36 = 60. Then division: 60 / 5 = 12. Then multiplication: 7 × 3 = 21. Finally addition: 12 + 21 = **33**. Notice that multiplication and division happen before addition, which is why 12 and 21 were added at the end.\n\nThe second example is **15% of 240 + 25% of 160**. First find 15% of 240: 240 × 15 / 100 = 36. Then find 25% of 160: 25% means 1/4, so 160 / 4 = 40. Add both: 36 + 40 = **76**. Check it with a shortcut too: 15% of 240 gives 240 × 3 / 20 = 36, because 15% = 3/20.\n\nThe third example is **approximation: 49.6 × 20.2**. Round 49.6 to 50 and 20.2 to 20: 50 × 20 = **1000**. The exact answer is 49.6 × 20.2 = **1001.92**, which is only 1.92 away from the estimate — a very good estimate. Finally, the square root: the square root of 1225 is 35, because 35 × 35 = 1225. The code below prints all of these.`
        ),
        code: {
          title: t(
            'BODMAS, Percent aur Approximation ka Hisaab',
            'BODMAS, Percent, and Approximation Calculation'
          ),
          language: 'python',
          code: `print("(24 + 36) / 5 + 7 x 3 =", (24 + 36) // 5 + 7 * 3)
print("15% of 240 + 25% of 160 =", 15 * 240 // 100 + 25 * 160 // 100)
print("49.6 x 20.2 =", 49.6 * 20.2)
print("Approximation: 50 x 20 =", 50 * 20)
print("Square root of 1225 =", int(1225 ** 0.5))`,
          output: `(24 + 36) / 5 + 7 x 3 = 33
15% of 240 + 25% of 160 = 76
49.6 x 20.2 = 1001.92
Approximation: 50 x 20 = 1000
Square root of 1225 = 35`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Left-to-Right, Bracket Bhoolna aur Percent ka Base',
          '4. Common Mistakes: Left-to-Right, Forgetting Brackets, and the Percent Base'
        ),
        body: t(
          `Sabse badi galti hai **sab kuch left se right karna**. 6 + 4 × 3 mein pehle jodna galat hai, pehle guna karna sahi hai. BODMAS ka order hamesha yaad rakho: bracket, phir bhaag/guna, phir jod/ghata. Jo student left-to-right chalta hai, woh har simplification sawaal mein galat karta hai.\n\nDoosri galti hai **bracket ko ignore karna**. (24 + 36) / 5 mein bracket pehle karna zaroori hai. Agar aap bracket bhool kar 36 / 5 pehle kar do, toh jawab bilkul galat ho jaayega. Bracket ka matlab hi yahi hai: "pehle mujhe karo".\n\nTeesri galti hai **percent ka base bhool jaana**. 20% of 350 matlab 350 × 20 / 100 = 70. Lekin "20% badh kar 350 ho gaya" ka matlab alag hai — wahan pehle wali rakam 350 / 1.2 hoti hai. "Of" ke baad wala number hi base hota hai. Chauthi galti hai **approximation ko exact samajh lena**. 50 × 20 = 1000 ek andaza hai, exact jawab 1001.92 hai. Jab options paas-paas hon (jaise 1000 aur 1002), toh approximation kaafi nahi hai — exact hisaab karna padega.`,
          `The biggest mistake is **doing everything left to right**. In 6 + 4 × 3, adding first is wrong; multiplying first is right. Always remember the BODMAS order: brackets, then division and multiplication, then addition and subtraction. A student who goes left to right gets every simplification question wrong.\n\nThe second mistake is **ignoring brackets**. In (24 + 36) / 5, the bracket must come first. If you forget the bracket and divide 36 / 5 first, the answer becomes completely wrong. A bracket means exactly this: "do me first".\n\nThe third mistake is **forgetting the base of a percent**. 20% of 350 means 350 × 20 / 100 = 70. But "after rising 20% it became 350" means something different — there the earlier amount is 350 / 1.2. The number after "of" is the base. The fourth mistake is **treating an approximation as exact**. 50 × 20 = 1000 is an estimate; the exact answer is 1001.92. When the options are close together (such as 1000 and 1002), approximation is not enough — you must calculate exactly.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Zero se Bhaag, Negative aur Chhote Options',
          '5. Edge Cases: Division by Zero, Negatives, and Close Options'
        ),
        body: t(
          `**Pehla edge case: zero se bhaag.** Kisi bhi number ko 0 se bhaag nahi kar sakte — jawab exist nahi karta. Agar simplification mein denominator 0 aa jaaye, toh expression ka koi matlab nahi hai. Exam mein aise sawaal mein "undefined" ya "cannot be determined" jawab ho sakta hai.\n\n**Doosra: negative numbers.** -8 + 3 = -5 hota hai, 8 - 3 nahi. Aur (-4) × (-3) = 12 hota hai — do negative guna hokar positive ban jaate hain. Sign ki galti simplification mein sabse aam galti hai, isliye har step mein sign check karo.\n\n**Teesra: options paas-paas hon.** Agar options 1000, 1001, 1002, 1003 hon, toh approximation kaam nahi aayega — exact hisaab karna padega. Approximation sirf tab use karo jab options door hon. **Chautha: square aur square root.** 16^2 - 12^2 = 256 - 144 = 112. Isko shortcut se bhi kar sakte ho: (16 - 12) × (16 + 12) = 4 × 28 = 112. Dono tareeke ek hi jawab dete hain — shortcut sirf tab use karo jab aapko us par poora bharosa ho.`,
          `**First edge case: division by zero.** You cannot divide any number by 0 — the answer does not exist. If a denominator becomes 0 in a simplification, the expression has no meaning. In exams, such a question may have "undefined" or "cannot be determined" as the answer.\n\n**Second: negative numbers.** -8 + 3 = -5, not 8 - 3. And (-4) × (-3) = 12 — two negatives multiplied give a positive. Sign errors are the most common error in simplification, so check the sign at every step.\n\n**Third: options close together.** If the options are 1000, 1001, 1002, 1003, approximation will not work — you must calculate exactly. Use approximation only when the options are far apart. **Fourth: squares and square roots.** 16^2 - 12^2 = 256 - 144 = 112. You can also use a shortcut: (16 - 12) × (16 + 12) = 4 × 28 = 112. Both methods give the same answer — use a shortcut only when you fully trust it.`
        )
      },
      {
        heading: t(
          '6. What-If: Fraction Shortcut, Doosra Rasta aur Tez Check',
          '6. What-If: Fraction Shortcuts, Another Way, and a Fast Check'
        ),
        body: t(
          `**What if: percent ko fraction mein badal dein?** 0.25 × 480 seedha 120 hai, kyunki 0.25 matlab 1/4 hai aur 480 / 4 = 120. 3/4 of 640 matlab 3 × 640 / 4 = 480. 12.5% of 800 matlab 800 / 8 = 100, kyunki 12.5% = 1/8 hai. Neeche wala code in teeno ko print karta hai. Percent ko fraction mein badalne se bhaag aasan ho jaata hai — 100 se guna-bhaag karne ki zaroorat nahi padti.\n\n**What if: hisaab ulta check karna ho?** Jawab milne ke baad ulta hisaab karke check karo. (24 + 36) / 5 + 7 × 3 = 33 aaya. Check karo: 33 - 21 = 12, 12 × 5 = 60, 60 - 36 = 24. Pehla number wapas mil gaya — hisaab sahi hai. Ulta check 10 second mein galti pakad leta hai.\n\n**What if: do tareeke ek hi jawab dein?** 16^2 - 12^2 ko seedha karo toh 112 aata hai, aur (a - b)(a + b) shortcut se bhi 112 aata hai. Jab do tareeke ek hi jawab dein, toh bharosa badh jaata hai. Exam mein time ho toh ek sawaal ko do tareekon se check karna sabse achhi aadat hai.`,
          `**What if you change a percent into a fraction?** 0.25 × 480 is directly 120, because 0.25 means 1/4 and 480 / 4 = 120. 3/4 of 640 means 3 × 640 / 4 = 480. 12.5% of 800 means 800 / 8 = 100, because 12.5% = 1/8. The code below prints all three. Changing a percent into a fraction makes division easy — there is no need to multiply and divide by 100.\n\n**What if you want to check a calculation backwards?** After finding the answer, check it by reversing the calculation. (24 + 36) / 5 + 7 × 3 = 33. Check: 33 - 21 = 12, 12 × 5 = 60, 60 - 36 = 24. The first number comes back — the calculation is correct. A reverse check catches a mistake in 10 seconds.\n\n**What if two methods give the same answer?** 16^2 - 12^2 gives 112 directly, and the (a - b)(a + b) shortcut also gives 112. When two methods give the same answer, confidence grows. In exams, if time allows, checking one question by two methods is the best habit.`
        ),
        code: {
          title: t(
            'Fraction Shortcut: 0.25, 3/4 aur 12.5% ka Hisaab',
            'Fraction Shortcuts: Working with 0.25, 3/4, and 12.5%'
          ),
          language: 'python',
          code: `print("0.25 x 480 =", int(0.25 * 480))
print("3/4 of 640 =", 3 * 640 // 4)
print("12.5% of 800 =", int(0.125 * 800))`,
          output: `0.25 x 480 = 120
3/4 of 640 = 480
12.5% of 800 = 100`
        }
      },
      {
        heading: t(
          '7. Summary: Simplification ka Poora Picture',
          '7. Summary: The Full Picture of Simplification'
        ),
        body: t(
          `Simplification ke teen hathiyaar hain: **BODMAS** (bracket, phir bhaag/guna, phir jod/ghata), **percent-fraction shortcut** (25% = 1/4, 50% = 1/2, 20% = 1/5, 12.5% = 1/8) aur **approximation** (round karke andaza). Aaj ke numbers yaad rakho: (24 + 36) / 5 + 7 × 3 = 33, 15% of 240 + 25% of 160 = 76, 49.6 × 20.2 ka andaza 1000 hai aur exact 1001.92, 1225 ka square root 35 hai.\n\nExam strategy: pehle bracket dekho, phir order follow karo, percent ko fraction mein badlo, aur jab options door hon toh approximation se time bachao. Har step mein sign check karo, aur zero se bhaag kabhi mat karo.\n\nRevision ke liye yahi 5 key notes kaafi hain. Agle article mein hum number series dekhenge — quant wale pattern, jahan agla number dhoondhna hota hai.`,
          `Simplification has three tools: **BODMAS** (brackets, then division and multiplication, then addition and subtraction), **percent-fraction shortcuts** (25% = 1/4, 50% = 1/2, 20% = 1/5, 12.5% = 1/8), and **approximation** (estimate by rounding). Remember today's numbers: (24 + 36) / 5 + 7 × 3 = 33, 15% of 240 + 25% of 160 = 76, the estimate of 49.6 × 20.2 is 1000 and the exact value is 1001.92, and the square root of 1225 is 35.\n\nThe exam strategy: look at brackets first, then follow the order, change percents into fractions, and save time with approximation when the options are far apart. Check the sign at every step, and never divide by zero.\n\nThese 5 key notes are enough for revision. In the next article we will look at number series — quant patterns, where you must find the next number.`
        )
      }
    ],
    diagram: {
      kind: 'flow',
      title: t(
        'BODMAS ka Order: Pehle Kya, Phir Kya',
        'The BODMAS Order: What First, What Next'
      ),
      caption: t(
        'Order tode bina simplification mein marks nahi milte',
        'Without this order, simplification gives no marks'
      ),
      nodes: [
        {
          t: t('1. Bracket ke andar', '1. Inside brackets'),
          s: t('(24 + 36) = 60 pehle karo', 'Do (24 + 36) = 60 first')
        },
        {
          t: t('2. Bhaag aur Guna', '2. Division and multiplication'),
          s: t('60 / 5 = 12 aur 7 × 3 = 21', '60 / 5 = 12 and 7 × 3 = 21')
        },
        {
          t: t('3. Jod aur Ghata', '3. Addition and subtraction'),
          s: t('12 + 21 = 33 aakhir mein', '12 + 21 = 33 at the end')
        },
        {
          t: t('Percent shortcut: 25% = 1/4', 'Percent shortcut: 25% = 1/4'),
          s: t('25% of 160 matlab 160 / 4 = 40', '25% of 160 means 160 / 4 = 40')
        },
        {
          t: t('Approximation: round karke andaza', 'Approximation: estimate by rounding'),
          s: t('49.6 × 20.2 ka andaza 50 × 20 = 1000', 'The estimate of 49.6 × 20.2 is 50 × 20 = 1000')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
            'Fraction Shortcut: 0.25, 3/4 aur 12.5% ka Hisaab',
            'Fraction Shortcuts: Working with 0.25, 3/4, and 12.5%'
          ),
        language: 'python',
        code: `print("0.25 x 480 =", int(0.25 * 480))
print("3/4 of 640 =", 3 * 640 // 4)
print("12.5% of 800 =", int(0.125 * 800))`,
        output: `0.25 x 480 = 120
3/4 of 640 = 480
12.5% of 800 = 100`
      }
    ],
    mcqs: [
      {
        q: t(
          '(18 + 12) / 6 + 4 × 2 ka maan kya hai?',
          'What is the value of (18 + 12) / 6 + 4 × 2?'
        ),
        opts: [
          t('11', '11'),
          t('12', '12'),
          t('13', '13'),
          t('14', '14')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: bracket 18 + 12 = 30, phir 30 / 6 = 5, phir 4 × 2 = 8, phir 5 + 8 = 13.',
          'Correct answer: bracket 18 + 12 = 30, then 30 / 6 = 5, then 4 × 2 = 8, then 5 + 8 = 13.'
        )
      },
      {
        q: t(
          '20% of 350 kitna hota hai?',
          'What is 20% of 350?'
        ),
        opts: [
          t('60', '60'),
          t('70', '70'),
          t('80', '80'),
          t('90', '90')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 20% matlab 1/5, isliye 350 / 5 = 70.',
          'Correct answer: 20% means 1/5, so 350 / 5 = 70.'
        )
      },
      {
        q: t(
          '98.7 × 10.1 ka sabse achha andaza kya hai?',
          'What is the best estimate of 98.7 × 10.1?'
        ),
        opts: [
          t('900', '900'),
          t('990', '990'),
          t('1000', '1000'),
          t('1100', '1100')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 98.7 ko 99 aur 10.1 ko 10 round karo: 99 × 10 = 990. Exact jawab 996.87 hai, jo 990 ke sabse paas hai.',
          'Correct answer: round 98.7 to 99 and 10.1 to 10: 99 × 10 = 990. The exact answer is 996.87, which is closest to 990.'
        )
      },
      {
        q: t(
          '3/5 of 250 kitna hota hai?',
          'What is 3/5 of 250?'
        ),
        opts: [
          t('120', '120'),
          t('150', '150'),
          t('180', '180'),
          t('200', '200')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 250 / 5 = 50, phir 50 × 3 = 150.',
          'Correct answer: 250 / 5 = 50, then 50 × 3 = 150.'
        )
      },
      {
        q: t(
          '16^2 - 12^2 ka maan kya hai?',
          'What is the value of 16^2 - 12^2?'
        ),
        opts: [
          t('100', '100'),
          t('112', '112'),
          t('120', '120'),
          t('128', '128')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 256 - 144 = 112. Shortcut se bhi: (16 - 12) × (16 + 12) = 4 × 28 = 112.',
          'Correct answer: 256 - 144 = 112. By shortcut too: (16 - 12) × (16 + 12) = 4 × 28 = 112.'
        )
      }
    ],
    keyNotes: [
      t(
        'BODMAS: bracket, phir bhaag/guna, phir jod/ghata — order kabhi mat todo.',
        'BODMAS: brackets, then division and multiplication, then addition and subtraction — never break the order.'
      ),
      t(
        '25% = 1/4, 50% = 1/2, 20% = 1/5, 12.5% = 1/8 — percent ko fraction mein badlo.',
        '25% = 1/4, 50% = 1/2, 20% = 1/5, 12.5% = 1/8 — change percents into fractions.'
      ),
      t(
        'Approximation sirf tab use karo jab options door hon.',
        'Use approximation only when the options are far apart.'
      ),
      t(
        'Percent ka base "of" ke baad wala number hota hai.',
        'The base of a percent is the number after "of".'
      ),
      t(
        'Zero se bhaag nahi hota; har step mein sign check karo.',
        'Division by zero is not allowed; check the sign at every step.'
      )
    ],
    practice: {
      title: t(
        'Practice: BODMAS aur Percent ka Hisaab',
        'Practice: BODMAS and Percent Calculation'
      ),
      task: t(
        '(45 + 15) / 4 + 9 × 2 aur 30% of 500 nikaalo. Starter code run karo aur verify karo ki output expected jaisa aata hai: pehla jawab 33 aur doosra 150.',
        'Find (45 + 15) / 4 + 9 × 2 and 30% of 500. Run the starter code and verify the output matches the expected output: the first answer is 33 and the second is 150.'
      ),
      language: 'python',
      starter: `print("(45 + 15) / 4 + 9 x 2 =", (45 + 15) // 4 + 9 * 2)
print("30% of 500 =", 30 * 500 // 100)`,
      expected: `(45 + 15) / 4 + 9 x 2 = 33
30% of 500 = 150`
    },
    readMinutes: 12
  };

const quantNumberSeriesQuant: Article = {
    id: 'quant-number-series-quant',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Number Series — Pattern Pehchano aur Agla Number Dhoondho',
      'Number Series — Spot the Pattern and Find the Next Number'
    ),
    summary: t(
      'Number series mein kaam sirf ek hai: pattern pehchano. Difference, ratio, square, cube, prime aur mixed pattern — har ek ko ek hi checklist se pakdo, aur agla term bina guess kiye nikaalo.',
      'Number series has only one job: spot the pattern. Difference, ratio, square, cube, prime, and mixed patterns — catch each one with a single checklist, and find the next term without guessing.'
    ),
    sections: [
      {
        heading: t(
          '1. Number Series Kya Hai? (Pattern ki Checklist)',
          '1. What Is a Number Series? (A Pattern Checklist)'
        ),
        body: t(
          `Number series ka matlab hai numbers ki ek list jismein har number ek fixed pattern se aata hai. Aapko agla number dhoondhna hota hai. Exam mein pattern dhoondhne ka ek fixed order hai, aur jo student is order ko follow karta hai, woh kabhi guess nahi karta. **Step 1:** aas-paas ke numbers ka **difference** nikaalo. Agar difference fixed hai, toh AP hai. **Step 2:** difference fixed nahi hai toh **ratio** nikaalo — agla number pichhle se bhaag do. Agar ratio fixed hai, toh GP hai.\n\n**Step 3:** difference aur ratio dono fixed nahi hain toh difference ka difference nikaalo. Jaise 2, 6, 12, 20, 30 mein difference hain 4, 6, 8, 10 — ye khud ek AP hai, har baar 2 badh raha hai. Agla difference 12 hoga, isliye agla term 30 + 12 = **42** hai. **Step 4:** square ya cube check karo. 1, 4, 9, 16, 25 squares hain; 1, 8, 27, 64 cubes hain. **Step 5:** prime numbers check karo: 2, 3, 5, 7, 11, 13.\n\n**Step 6:** mixed pattern check karo — do alag series ek ke baad ek aati hain, jaise 5, 10, 7, 14, 9, 18 mein odd position par 5, 7, 9 aur even position par 10, 14, 18 hai. Ye checklist har series par lagao: difference, ratio, difference ka difference, square/cube, prime, mixed.`,
          `A number series is a list of numbers in which each number comes from a fixed pattern. You must find the next number. In exams there is a fixed order for finding the pattern, and a student who follows this order never guesses. **Step 1:** find the **difference** between nearby numbers. If the difference is fixed, it is an AP. **Step 2:** if the difference is not fixed, find the **ratio** — divide the next number by the previous one. If the ratio is fixed, it is a GP.\n\n**Step 3:** if neither difference nor ratio is fixed, find the difference of the differences. In 2, 6, 12, 20, 30, the differences are 4, 6, 8, 10 — these themselves form an AP, rising by 2 each time. The next difference is 12, so the next term is 30 + 12 = **42**. **Step 4:** check squares or cubes. 1, 4, 9, 16, 25 are squares; 1, 8, 27, 64 are cubes. **Step 5:** check prime numbers: 2, 3, 5, 7, 11, 13.\n\n**Step 6:** check for a mixed pattern — two separate series coming one after another, such as 5, 10, 7, 14, 9, 18, where odd positions hold 5, 7, 9 and even positions hold 10, 14, 18. Apply this checklist to every series: difference, ratio, difference of differences, square or cube, prime, mixed.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Seedhi, Lift aur Bus ka Kiraya',
          '2. Real-Life Examples: Stairs, a Lift, and a Bus Fare'
        ),
        body: t(
          `Seedhi chadhte time aap ek pattern follow karte ho: pehli seedhi par 1 kadam, doosri par 2, teesri par 3 — ye ek simple series hai. Agar har baar kadam dogune ho jaayein (1, 2, 4, 8), toh woh GP hai, aur aap bahut jaldi thak jaoge. Series ka pattern samajhna hi uski speed samajhna hai.\n\nLift mein floor numbers ek series hain: 1, 2, 3, 4 — difference fixed hai. Lekin agar lift sirf prime floors par ruke (2, 3, 5, 7, 11), toh agla stop 13 hoga. Prime pattern ko pehchanne wala hi sahi floor bata sakta hai.\n\nBus ka kiraya bhi series jaisa badhta hai: pehle 2 km tak 10 rupaye, phir har 2 km par 5 rupaye zyada. 10, 15, 20, 25 — ye AP hai. Agar aapko 10 km ka kiraya nikaalna ho, toh pattern se seedha nikaal lo: 10 + 4 × 5 = 30 rupaye. Roz ki zindagi mein pattern pehchanna hi hisaab ko tez karta hai.`,
          `When you climb stairs, you follow a pattern: 1 step on the first stair, 2 on the second, 3 on the third — a simple series. If the steps doubled every time (1, 2, 4, 8), that would be a GP, and you would get tired very fast. Understanding the pattern of a series is understanding its speed.\n\nFloor numbers in a lift are a series: 1, 2, 3, 4 — the difference is fixed. But if the lift stopped only on prime floors (2, 3, 5, 7, 11), the next stop would be 13. Only a person who spots the prime pattern can name the right floor.\n\nA bus fare also rises like a series: 10 rupees for the first 2 km, then 5 rupees more for every 2 km. 10, 15, 20, 25 — this is an AP. If you must find the fare for 10 km, use the pattern directly: 10 + 4 × 5 = 30 rupees. In daily life, spotting the pattern is what makes calculation fast.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: Teen Series ka Worked Example (Dry Run)',
          '3. Step-by-Step: Worked Example on Three Series (Dry Run)'
        ),
        body: t(
          `**Pehli series: 2, 6, 12, 20, 30.** Difference nikaalo: 6 - 2 = 4, 12 - 6 = 6, 20 - 12 = 8, 30 - 20 = 10. Difference fixed nahi hai, par difference khud badh raha hai: 4, 6, 8, 10 — har baar 2 zyada. Agla difference hoga 12. Isliye agla term hai 30 + 12 = **42**. Check karo: difference ka pattern 4, 6, 8, 10, 12 poora ho gaya.\n\n**Doosri series: 3, 9, 27, 81.** Difference nikaalo: 6, 18, 54 — fixed nahi hai. Ratio nikaalo: 9 / 3 = 3, 27 / 9 = 3, 81 / 27 = 3. Ratio fixed hai (3), isliye ye GP hai. Agla term hai 81 × 3 = **243**.\n\n**Teesri series: 2, 5, 10, 17, 26.** Difference nikaalo: 3, 5, 7, 9 — odd numbers badh rahe hain. Agla difference hoga 11, isliye agla term hai 26 + 11 = **37**. Doosra tareeka: ye squares + 1 hain: 1^2 + 1 = 2, 2^2 + 1 = 5, 3^2 + 1 = 10, 4^2 + 1 = 17, 5^2 + 1 = 26, 6^2 + 1 = **37**. Dono tareeke ek hi jawab dete hain. Neeche wala code in teeno ko print karta hai.`,
          `**First series: 2, 6, 12, 20, 30.** Find the differences: 6 - 2 = 4, 12 - 6 = 6, 20 - 12 = 8, 30 - 20 = 10. The difference is not fixed, but the differences themselves are rising: 4, 6, 8, 10 — up by 2 each time. The next difference is 12. So the next term is 30 + 12 = **42**. Check it: the difference pattern 4, 6, 8, 10, 12 is complete.\n\n**Second series: 3, 9, 27, 81.** Find the differences: 6, 18, 54 — not fixed. Find the ratios: 9 / 3 = 3, 27 / 9 = 3, 81 / 27 = 3. The ratio is fixed (3), so this is a GP. The next term is 81 × 3 = **243**.\n\n**Third series: 2, 5, 10, 17, 26.** Find the differences: 3, 5, 7, 9 — odd numbers rising. The next difference is 11, so the next term is 26 + 11 = **37**. Another way: these are squares + 1: 1^2 + 1 = 2, 2^2 + 1 = 5, 3^2 + 1 = 10, 4^2 + 1 = 17, 5^2 + 1 = 26, 6^2 + 1 = **37**. Both methods give the same answer. The code below prints all three.`
        ),
        code: {
          title: t(
            'Teen Series: Difference, Ratio aur Squares + 1',
            'Three Series: Difference, Ratio, and Squares + 1'
          ),
          language: 'python',
          code: `series = [2, 6, 12, 20, 30]
diffs = [series[i + 1] - series[i] for i in range(len(series) - 1)]
print("Series:", series)
print("Differences:", diffs)
print("Next difference = 12, so next term =", series[-1] + 12)
print("GP: 3, 9, 27, 81, next =", 81 * 3)
print("Squares + 1: 2, 5, 10, 17, 26, next =", 6 ** 2 + 1)`,
          output: `Series: [2, 6, 12, 20, 30]
Differences: [4, 6, 8, 10]
Next difference = 12, so next term = 42
GP: 3, 9, 27, 81, next = 243
Squares + 1: 2, 5, 10, 17, 26, next = 37`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Pehla Pattern Pakadna aur Guess Karna',
          '4. Common Mistakes: Grabbing the First Pattern and Guessing'
        ),
        body: t(
          `Sabse badi galti hai **pehla dikhne wala pattern pakad lena**. 2, 6, 12, 20, 30 mein difference 4, 6, 8, 10 hai — jo student sirf pehla difference (4) dekhta hai, woh sochta hai AP hai aur agla term 34 likh deta hai. Galat. Saare differences check karo, sirf pehla nahi.\n\nDoosri galti hai **guess karna**. Options mein se ek number "sahi lag raha hai" isliye chun lena, bina pattern check kiye, exam mein marks khaata hai. Hamesha pattern ko aakhiri term tak check karo: agar pattern saare terms par fit hota hai, tabhi woh sahi hai.\n\nTeesri galti hai **square aur cube ko bhool jaana**. 1, 8, 27, 64 dekh kar student difference (7, 19, 37) mein fas jaata hai, jabki ye seedha cubes hain: 1^3, 2^3, 3^3, 4^3, agla 5^3 = 125. Squares (1, 4, 9, 16, 25, 36, 49) aur cubes (1, 8, 27, 64, 125) ko yaad rakhna series ke sawaalon mein aadha kaam hai.`,
          `The biggest mistake is **grabbing the first pattern you see**. In 2, 6, 12, 20, 30, the differences are 4, 6, 8, 10 — a student who looks only at the first difference (4) thinks it is an AP and writes 34 as the next term. Wrong. Check all the differences, not only the first one.\n\nThe second mistake is **guessing**. Picking a number from the options because it "looks right", without checking the pattern, costs marks in exams. Always check the pattern against every term: only if the pattern fits all the terms is it correct.\n\nThe third mistake is **forgetting squares and cubes**. Seeing 1, 8, 27, 64, a student gets stuck in the differences (7, 19, 37), while these are simply cubes: 1^3, 2^3, 3^3, 4^3, and the next is 5^3 = 125. Remembering squares (1, 4, 9, 16, 25, 36, 49) and cubes (1, 8, 27, 64, 125) is half the work in series questions.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Ek hi Term, Negative aur Mixed Series',
          '5. Edge Cases: a Single Term, Negatives, and Mixed Series'
        ),
        body: t(
          `**Pehla edge case: sirf 2-3 terms diye hon.** 5, 10, ... mein agla term 15 bhi ho sakta hai (AP) aur 20 bhi (GP). Kam terms par pattern pakka nahi hota. Exam mein aam taur par 4-5 terms diye hote hain — tabhi pattern pakka hota hai. Agar sirf 3 terms hon toh options se hint lo.\n\n**Doosra: negative numbers.** -2, -6, -18, -54 mein ratio 3 hai, par sign negative hai. Ratio nikaalte time sign ka dhyaan rakho: -6 / -2 = 3, positive. Jo student sign bhool jaata hai, woh ratio galat nikaalta hai.\n\n**Teesra: mixed series.** 5, 10, 7, 14, 9, 18 mein do series chhupi hain: odd position par 5, 7, 9 (har baar +2) aur even position par 10, 14, 18 (har baar +4). Agla term odd position par aayega: 9 + 2 = 11. Mixed series mein hamesha odd aur even positions ko alag-alag check karo. **Chautha: difference doguna hona.** 2, 3, 5, 9, 17 mein difference hain 1, 2, 4, 8 — har baar dogune. Agla difference 16 hoga, isliye agla term 17 + 16 = **33** hai.`,
          `**First edge case: only 2-3 terms are given.** In 5, 10, ..., the next term could be 15 (AP) or 20 (GP). With few terms, the pattern is not certain. Exams usually give 4-5 terms — only then is the pattern certain. If only 3 terms are given, take a hint from the options.\n\n**Second: negative numbers.** In -2, -6, -18, -54, the ratio is 3, but the signs are negative. When finding the ratio, watch the sign: -6 / -2 = 3, positive. A student who forgets the sign finds the wrong ratio.\n\n**Third: mixed series.** In 5, 10, 7, 14, 9, 18, two series hide: odd positions hold 5, 7, 9 (up by 2 each time) and even positions hold 10, 14, 18 (up by 4 each time). The next term comes on an odd position: 9 + 2 = 11. In a mixed series, always check odd and even positions separately. **Fourth: differences that double.** In 2, 3, 5, 9, 17, the differences are 1, 2, 4, 8 — doubling each time. The next difference is 16, so the next term is 17 + 16 = **33**.`
        )
      },
      {
        heading: t(
          '6. What-If: Prime, Cube aur Do Tareeke se Check',
          '6. What-If: Primes, Cubes, and Checking by Two Methods'
        ),
        body: t(
          `**What if: series primes ki ho?** 2, 3, 5, 7, 11, 13 ke baad agla prime 17 hai. Prime series mein difference ka koi pattern nahi hota — bas prime numbers yaad rakho: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. Neeche wala code primes aur cubes dono ko print karta hai: cubes 1, 8, 27, 64 ke baad 125 aata hai, squares 1, 4, 9, 16, 25, 36 ke baad 49 aata hai.\n\n**What if: pattern do tareekon se mile?** 2, 5, 10, 17, 26 ko difference se karo toh agla difference 11 milta hai aur term 37 aata hai. Squares + 1 se karo toh 6^2 + 1 = 37 aata hai. Dono tareeke ek hi jawab dein toh pattern pakka hai. Exam mein time ho toh doosre tareeke se check karna sabse achhi aadat hai.\n\n**What if: series ulta chal rahi ho?** 100, 90, 81, 73, 66 mein difference hain -10, -9, -8, -7 — har baar 1 kam ho raha hai. Agla difference -6 hoga, isliye agla term 66 - 6 = 60 hai. Ghatti hui series mein bhi wahi checklist lagti hai, bas difference negative hota hai.`,
          `**What if the series is primes?** After 2, 3, 5, 7, 11, 13, the next prime is 17. In a prime series there is no difference pattern — just remember the primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. The code below prints both primes and cubes: after cubes 1, 8, 27, 64 comes 125, and after squares 1, 4, 9, 16, 25, 36 comes 49.\n\n**What if the pattern is found by two methods?** For 2, 5, 10, 17, 26, the difference method gives the next difference 11 and the term 37. The squares + 1 method gives 6^2 + 1 = 37. When both methods give the same answer, the pattern is certain. In exams, if time allows, checking by a second method is the best habit.\n\n**What if the series runs backwards?** In 100, 90, 81, 73, 66, the differences are -10, -9, -8, -7 — falling by 1 each time. The next difference is -6, so the next term is 66 - 6 = 60. The same checklist applies to a falling series; only the difference is negative.`
        ),
        code: {
          title: t(
            'Prime, Cube aur Square Series ke Agle Term',
            'Next Terms of Prime, Cube, and Square Series'
          ),
          language: 'python',
          code: `print("Primes: 2, 3, 5, 7, 11, 13, next = 17")
print("Cubes: 1, 8, 27, 64, next =", 5 ** 3)
print("Squares: 1, 4, 9, 16, 25, 36, next =", 7 ** 2)`,
          output: `Primes: 2, 3, 5, 7, 11, 13, next = 17
Cubes: 1, 8, 27, 64, next = 125
Squares: 1, 4, 9, 16, 25, 36, next = 49`
        }
      },
      {
        heading: t(
          '7. Summary: Number Series ka Poora Picture',
          '7. Summary: The Full Picture of Number Series'
        ),
        body: t(
          `Number series ki checklist yaad rakho: **difference, ratio, difference ka difference, square/cube, prime, mixed**. Aaj ke numbers yaad rakho: 2, 6, 12, 20, 30 ka agla term 42 hai (difference 4, 6, 8, 10, 12); 3, 9, 27, 81 ka agla term 243 hai (ratio 3); 2, 5, 10, 17, 26 ka agla term 37 hai (squares + 1); primes ke baad 17, cubes ke baad 125, squares ke baad 49.\n\nExam strategy: pehle difference nikaalo, phir ratio, phir difference ka difference. Pattern ko saare terms par check karo, sirf pehle do par nahi. Squares aur cubes yaad rakho, aur mixed series mein odd/even positions alag karo.\n\nRevision ke liye yahi 5 key notes kaafi hain. Agle article mein hum partnership dekhenge — profit ko capital aur time ke hisaab se baantna.`,
          `Remember the number series checklist: **difference, ratio, difference of differences, square or cube, prime, mixed**. Remember today's numbers: the next term of 2, 6, 12, 20, 30 is 42 (differences 4, 6, 8, 10, 12); the next term of 3, 9, 27, 81 is 243 (ratio 3); the next term of 2, 5, 10, 17, 26 is 37 (squares + 1); after primes comes 17, after cubes comes 125, after squares comes 49.\n\nThe exam strategy: find the difference first, then the ratio, then the difference of differences. Check the pattern against all the terms, not only the first two. Remember squares and cubes, and in a mixed series split odd and even positions.\n\nThese 5 key notes are enough for revision. In the next article we will look at partnership — sharing profit by capital and time.`
        )
      }
    ],
    diagram: {
      kind: 'timeline',
      title: t(
        'Series 2, 6, 12, 20, 30: Difference Har Baar 2 Badhta Hai',
        'Series 2, 6, 12, 20, 30: the Difference Rises by 2 Each Time'
      ),
      caption: t(
        'Difference ka pattern dekho, sirf terms ko mat dekho',
        'Look at the pattern of differences, not only the terms'
      ),
      nodes: [
        {
          t: t('2 se 6: +4', '2 to 6: +4'),
          s: t('Pehla difference 4', 'First difference is 4')
        },
        {
          t: t('6 se 12: +6', '6 to 12: +6'),
          s: t('Difference 2 badha', 'Difference rose by 2')
        },
        {
          t: t('12 se 20: +8', '12 to 20: +8'),
          s: t('Difference phir 2 badha', 'Difference rose by 2 again')
        },
        {
          t: t('20 se 30: +10', '20 to 30: +10'),
          s: t('Pattern saaf hai: 4, 6, 8, 10', 'Pattern is clear: 4, 6, 8, 10')
        },
        {
          t: t('30 se agla: +12 = 42', '30 to next: +12 = 42'),
          s: t('Agla difference 12, isliye agla term 42', 'Next difference is 12, so the next term is 42')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
            'Prime, Cube aur Square Series ke Agle Term',
            'Next Terms of Prime, Cube, and Square Series'
          ),
        language: 'python',
        code: `print("Primes: 2, 3, 5, 7, 11, 13, next = 17")
print("Cubes: 1, 8, 27, 64, next =", 5 ** 3)
print("Squares: 1, 4, 9, 16, 25, 36, next =", 7 ** 2)`,
        output: `Primes: 2, 3, 5, 7, 11, 13, next = 17
Cubes: 1, 8, 27, 64, next = 125
Squares: 1, 4, 9, 16, 25, 36, next = 49`
      }
    ],
    mcqs: [
      {
        q: t(
          '5, 10, 20, 40, ... ka agla term kya hai?',
          'What is the next term of 5, 10, 20, 40, ...?'
        ),
        opts: [
          t('60', '60'),
          t('70', '70'),
          t('80', '80'),
          t('100', '100')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: ratio 2 hai (10/5 = 2, 20/10 = 2), isliye agla term 40 × 2 = 80 hai.',
          'Correct answer: the ratio is 2 (10/5 = 2, 20/10 = 2), so the next term is 40 × 2 = 80.'
        )
      },
      {
        q: t(
          '4, 9, 16, 25, ... ka agla term kya hai?',
          'What is the next term of 4, 9, 16, 25, ...?'
        ),
        opts: [
          t('30', '30'),
          t('32', '32'),
          t('36', '36'),
          t('49', '49')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: ye squares hain: 2^2, 3^2, 4^2, 5^2, agla 6^2 = 36 hai.',
          'Correct answer: these are squares: 2^2, 3^2, 4^2, 5^2, so the next is 6^2 = 36.'
        )
      },
      {
        q: t(
          '2, 3, 5, 9, 17, ... ka agla term kya hai?',
          'What is the next term of 2, 3, 5, 9, 17, ...?'
        ),
        opts: [
          t('31', '31'),
          t('32', '32'),
          t('33', '33'),
          t('34', '34')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: difference hain 1, 2, 4, 8 — har baar dogune. Agla difference 16 hai, isliye agla term 17 + 16 = 33 hai.',
          'Correct answer: the differences are 1, 2, 4, 8 — doubling each time. The next difference is 16, so the next term is 17 + 16 = 33.'
        )
      },
      {
        q: t(
          '1, 4, 9, 16, 25, 36, ... ka agla term kya hai?',
          'What is the next term of 1, 4, 9, 16, 25, 36, ...?'
        ),
        opts: [
          t('42', '42'),
          t('45', '45'),
          t('49', '49'),
          t('64', '64')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: ye squares hain: 1^2, 2^2, 3^2, 4^2, 5^2, 6^2, agla 7^2 = 49 hai.',
          'Correct answer: these are squares: 1^2, 2^2, 3^2, 4^2, 5^2, 6^2, so the next is 7^2 = 49.'
        )
      },
      {
        q: t(
          '7, 14, 28, 56, ... ka agla term kya hai?',
          'What is the next term of 7, 14, 28, 56, ...?'
        ),
        opts: [
          t('84', '84'),
          t('98', '98'),
          t('112', '112'),
          t('120', '120')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: ratio 2 hai, isliye agla term 56 × 2 = 112 hai.',
          'Correct answer: the ratio is 2, so the next term is 56 × 2 = 112.'
        )
      }
    ],
    keyNotes: [
      t(
        'Checklist: difference, ratio, difference ka difference, square/cube, prime, mixed.',
        'Checklist: difference, ratio, difference of differences, square or cube, prime, mixed.'
      ),
      t(
        'Pattern ko saare terms par check karo, sirf pehle do par nahi.',
        'Check the pattern against all the terms, not only the first two.'
      ),
      t(
        'Squares yaad rakho: 1, 4, 9, 16, 25, 36, 49; cubes: 1, 8, 27, 64, 125.',
        'Remember squares: 1, 4, 9, 16, 25, 36, 49; cubes: 1, 8, 27, 64, 125.'
      ),
      t(
        'Mixed series mein odd aur even positions ko alag-alag check karo.',
        'In a mixed series, check odd and even positions separately.'
      ),
      t(
        'Guess mat karo — pattern fit hone par hi option chuno.',
        'Do not guess — pick an option only when the pattern fits.'
      )
    ],
    practice: {
      title: t(
        'Practice: Do Series ke Agle Term Nikaalo',
        'Practice: Find the Next Term of Two Series'
      ),
      task: t(
        'Do series ke agle term nikaalo: (1) 6, 12, 24, 48, ... aur (2) 1, 2, 4, 7, 11, 16, ... Starter code run karo aur verify karo ki output expected jaisa aata hai: pehla agla term 96 aur doosra 22.',
        'Find the next term of two series: (1) 6, 12, 24, 48, ... and (2) 1, 2, 4, 7, 11, 16, ... Run the starter code and verify the output matches the expected output: the first next term is 96 and the second is 22.'
      ),
      language: 'python',
      starter: `print("6, 12, 24, 48, next =", 48 * 2)
print("1, 2, 4, 7, 11, 16, next =", 16 + 6)`,
      expected: `6, 12, 24, 48, next = 96
1, 2, 4, 7, 11, 16, next = 22`
    },
    readMinutes: 12
  };

const quantPartnership: Article = {
    id: 'quant-partnership',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Partnership — Profit ko Capital aur Time ke Hisaab se Baantna',
      'Partnership — Sharing Profit by Capital and Time'
    ),
    summary: t(
      'Partnership mein profit capital aur time dono ke hisaab se banta hai: share capital × time ke ratio mein milta hai. Barabar capital par barabar hissa, alag time par alag hissa — worked examples se seekho.',
      'In partnership, profit is shared by both capital and time: shares come in the ratio of capital × time. Equal capital gives equal shares, different time gives different shares — learn from worked examples.'
    ),
    sections: [
      {
        heading: t(
          '1. Partnership Kya Hai? (Capital × Time ka Rule)',
          '1. What Is Partnership? (The Capital × Time Rule)'
        ),
        body: t(
          `Partnership ka matlab hai do ya zyada log milkar business mein paisa lagate hain aur profit ko baant lete hain. Profit baantne ka rule simple hai: **har partner ka hissa uske capital × time ke ratio mein hota hai**. Matlab jitna zyada paisa, utna zyada hissa; aur jitne zyada time tak paisa laga rahe, utna zyada hissa. Sirf capital dekhna kaafi nahi hai — time bhi utna hi zaroori hai.\n\nEk example se samjho: A ne 40,000 rupaye 12 mahine ke liye lagaye, B ne 60,000 rupaye 8 mahine ke liye lagaye. A ke units hain 40,000 × 12 = 4,80,000. B ke units hain 60,000 × 8 = 4,80,000. Dono ke units barabar hain, isliye profit barabar batega — halanki B ne zyada paisa lagaya tha, par kam time ke liye. Yahi partnership ka sabse bada lesson hai: **capital aur time dono gino**.\n\nAgar saare partners ne ek hi time tak paisa lagaya ho, toh time cancel ho jaata hai aur profit sirf capital ke ratio mein banta hai. Jaise A, B, C ne 2:3:5 ke ratio mein paisa lagaya aur profit 1,00,000 rupaye hua, toh A ko 20,000, B ko 30,000 aur C ko 50,000 milega. Ratio ka total hai 2 + 3 + 5 = 10, isliye har hissa 1,00,000 / 10 = 10,000 ka guna hai.`,
          `Partnership means two or more people put money into a business together and share the profit. The rule for sharing profit is simple: **each partner share is in the ratio of capital × time**. That means more money gives a bigger share, and money kept in for more time also gives a bigger share. Looking at capital alone is not enough — time matters just as much.\n\nUnderstand it with one example: A put in 40,000 rupees for 12 months, B put in 60,000 rupees for 8 months. A units are 40,000 × 12 = 4,80,000. B units are 60,000 × 8 = 4,80,000. Both units are equal, so the profit splits equally — even though B put in more money, it was for less time. This is the biggest lesson of partnership: **count both capital and time**.\n\nIf all partners kept money in for the same time, time cancels out and profit splits only by the capital ratio. For example, if A, B, C put money in the ratio 2:3:5 and the profit is 1,00,000 rupees, then A gets 20,000, B gets 30,000, and C gets 50,000. The ratio total is 2 + 3 + 5 = 10, so each share is a multiple of 1,00,000 / 10 = 10,000.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Dukaan, Kheti aur Flat',
          '2. Real-Life Examples: a Shop, a Farm, and a Flat'
        ),
        body: t(
          `Do dost milkar dukaan kholte hain. Pehla dost 50,000 rupaye lagata hai aur poora saal dukaan chalata hai. Doosra dost 50,000 rupaye lagata hai par 6 mahine baad nikal jaata hai. Saal ke aakhir mein profit 90,000 rupaye hota hai. Pehle dost ko zyada milega, kyunki uska paisa zyada time tak laga raha — capital barabar tha, par time alag tha.\n\nKheti mein bhi partnership hoti hai: ek kisan zameen deta hai, doosra beej aur mehnat deta hai. Fasal bikne par profit dono mein banta hai. Agar ek ne zyada zameen di aur doosre ne zyada mehnat ki, toh hissa usi hisaab se banta hai — yahi capital × time ka rule hai, bas yahan capital ki jagah zameen aur mehnat hai.\n\nFlat khareedne mein bhi partnership dikhti hai: do bhai milkar flat khareedte hain, ek 60% paisa deta hai aur doosra 40%. Flat bechne par profit bhi 60:40 mein banta hai. Jo zyada lagata hai, use zyada milta hai — yahi partnership ka seedha niyam hai.`,
          `Two friends open a shop together. The first friend puts in 50,000 rupees and runs the shop the whole year. The second friend puts in 50,000 rupees but leaves after 6 months. At the end of the year the profit is 90,000 rupees. The first friend gets more, because the money stayed in for more time — the capital was equal, but the time was different.\n\nPartnership also happens in farming: one farmer gives the land, the other gives seeds and labour. When the crop sells, the profit splits between them. If one gave more land and the other gave more labour, the share splits in that same way — this is the capital × time rule, only with land and labour in place of capital.\n\nPartnership also shows in buying a flat: two brothers buy a flat together, one pays 60% of the money and the other pays 40%. When the flat sells, the profit also splits 60:40. Whoever puts in more gets more — that is the plain rule of partnership.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: Barabar Units wala Worked Example (Dry Run)',
          '3. Step-by-Step: Worked Example with Equal Units (Dry Run)'
        ),
        body: t(
          `Sawaal hai: A ne 40,000 rupaye 12 mahine ke liye lagaye, B ne 60,000 rupaye 8 mahine ke liye lagaye. Kul profit 96,000 rupaye hua. Har ek ko kitna milega? **Step 1 — units nikaalo.** A ke units: 40,000 × 12 = 4,80,000. B ke units: 60,000 × 8 = 4,80,000.\n\n**Step 2 — ratio nikaalo.** A : B = 4,80,000 : 4,80,000 = 1 : 1. Ratio barabar hai, isliye profit barabar batega. **Step 3 — profit baanto.** Kul profit 96,000 hai, isliye A ko 96,000 / 2 = **48,000** rupaye aur B ko bhi **48,000** rupaye milenge. Check karo: 48,000 + 48,000 = 96,000. Kul wapas mil gaya.\n\nDekho yahan kya hua: B ne A se 20,000 rupaye zyada lagaye, par 4 mahine kam ke liye. Zyada capital aur kam time ne ek doosre ko cancel kar diya. Jo student sirf capital dekhta, woh B ko zyada deta aur galat karta. Neeche wala code yahi hisaab print karta hai.`,
          `The question is: A put in 40,000 rupees for 12 months, B put in 60,000 rupees for 8 months. The total profit is 96,000 rupees. How much does each get? **Step 1 — find the units.** A units: 40,000 × 12 = 4,80,000. B units: 60,000 × 8 = 4,80,000.\n\n**Step 2 — find the ratio.** A : B = 4,80,000 : 4,80,000 = 1 : 1. The ratio is equal, so the profit splits equally. **Step 3 — share the profit.** The total profit is 96,000, so A gets 96,000 / 2 = **48,000** rupees and B also gets **48,000** rupees. Check it: 48,000 + 48,000 = 96,000. The total comes back.\n\nSee what happened here: B put in 20,000 rupees more than A, but for 4 months less. More capital and less time cancelled each other out. A student who looked only at capital would give B more and go wrong. The code below prints this calculation.`
        ),
        code: {
          title: t(
            'Partnership: A 40000×12 aur B 60000×8, Profit 96000',
            'Partnership: A 40000×12 and B 60000×8, Profit 96000'
          ),
          language: 'python',
          code: `a_units = 40000 * 12
b_units = 60000 * 8
print("A units =", a_units)
print("B units =", b_units)
print("Ratio A : B = 1 : 1")
print("Profit 96000, A gets =", 96000 // 2)
print("Profit 96000, B gets =", 96000 // 2)`,
          output: `A units = 480000
B units = 480000
Ratio A : B = 1 : 1
Profit 96000, A gets = 48000
Profit 96000, B gets = 48000`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Time Bhoolna, Ratio Ulta aur Total Check',
          '4. Common Mistakes: Forgetting Time, Reversing the Ratio, and the Total Check'
        ),
        body: t(
          `Sabse badi galti hai **time ko bhool jaana**. Student capital ka ratio nikaal kar profit baant deta hai: A 40,000 aur B 60,000, ratio 2:3, isliye A ko 38,400 aur B ko 57,600. Galat — kyunki B ka paisa sirf 8 mahine laga tha. Hamesha capital × time karo, sirf capital nahi.\n\nDoosri galti hai **ratio ko ulta likh dena**. A : B = 2 : 1 hai toh A ko bada hissa milega. Jo student B ko bada hissa de deta hai, woh ratio ko ulta padh raha hai. Ratio likhte time pehle A ka number, phir B ka number likho, aur hissa baantte time bhi wahi order rakho.\n\nTeesri galti hai **total check na karna**. Saare hisse jodne par kul profit milna chahiye. Agar A ko 20,000, B ko 30,000 aur C ko 50,000 mile aur kul profit 1,00,000 hai, toh 20,000 + 30,000 + 50,000 = 1,00,000 — sahi hai. Agar total match nahi karta, toh ratio ya bhaag mein galti hai.`,
          `The biggest mistake is **forgetting time**. A student finds the capital ratio and shares the profit: A 40,000 and B 60,000, ratio 2:3, so A gets 38,400 and B gets 57,600. Wrong — because B money stayed in for only 8 months. Always do capital × time, not capital alone.\n\nThe second mistake is **writing the ratio backwards**. If A : B = 2 : 1, A gets the bigger share. A student who gives B the bigger share is reading the ratio backwards. When writing the ratio, put A number first, then B number, and keep the same order when sharing.\n\nThe third mistake is **skipping the total check**. Adding all the shares must give the total profit. If A gets 20,000, B gets 30,000, and C gets 50,000, and the total profit is 1,00,000, then 20,000 + 30,000 + 50,000 = 1,00,000 — correct. If the total does not match, the ratio or the division is wrong.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Beech mein Join Karna, Salary aur Loss',
          '5. Edge Cases: Joining in the Middle, Salary, and Loss'
        ),
        body: t(
          `**Pehla edge case: beech mein join karna.** C 4 mahine baad business mein aata hai aur 8 mahine ke liye paisa lagata hai. Uska time sirf 8 mahine gina jaayega, 12 nahi. Time hamesha woh hota hai jitne time tak paisa laga raha, business ke kul time se nahi.\n\n**Doosra: working partner ki salary.** Kabhi-kabhi ek partner kaam bhi karta hai aur usko profit baantne se pehle salary milti hai. Jaise kul profit 1,00,000 hai aur A ko 10,000 salary milti hai, toh pehle 10,000 alag karo, phir bacha hua 90,000 ratio mein baanto. Salary ko ratio mein mat milao.\n\n**Teesra: loss baantna.** Agar business mein profit ki jagah loss ho, toh loss bhi wahi ratio mein banta hai. A : B = 2 : 1 hai aur loss 30,000 hai, toh A ko 20,000 aur B ko 10,000 ka loss hoga. **Chautha: capital badalna.** Agar A 6 mahine baad aur paisa lagata hai, toh uske units do hisson mein nikaalo: pehle 6 mahine ka purana capital, phir baaki 6 mahine ka naya capital, phir dono ko jodo.`,
          `**First edge case: joining in the middle.** C joins the business after 4 months and keeps money in for 8 months. Only 8 months count for C, not 12. Time is always the time the money stayed in, not the total time of the business.\n\n**Second: a working partner salary.** Sometimes one partner also works and gets a salary before the profit is shared. For example, if the total profit is 1,00,000 and A gets a salary of 10,000, first take out the 10,000, then share the remaining 90,000 by ratio. Do not mix the salary into the ratio.\n\n**Third: sharing a loss.** If the business makes a loss instead of a profit, the loss also splits in the same ratio. If A : B = 2 : 1 and the loss is 30,000, then A takes a loss of 20,000 and B takes a loss of 10,000. **Fourth: changing capital.** If A adds more money after 6 months, find A units in two parts: the old capital for the first 6 months, then the new capital for the remaining 6 months, then add both.`
        )
      },
      {
        heading: t(
          '6. What-If: Alag Ratio, Teen Partner aur Ulta Sawaal',
          '6. What-If: Different Ratios, Three Partners, and Reverse Questions'
        ),
        body: t(
          `**What if: ratio 2:1 ho?** A ne 30,000 rupaye 12 mahine ke liye lagaye (3,60,000 units) aur B ne 20,000 rupaye 9 mahine ke liye lagaye (1,80,000 units). Ratio hai 2:1. Profit 90,000 hai, toh A ko 90,000 × 2 / 3 = **60,000** aur B ko **30,000** milega. Neeche wala code yahi hisaab karta hai aur 2:3:5 wale ratio ka hisaab bhi dikhata hai: profit 1,00,000 par A 20,000, B 30,000, C 50,000.\n\n**What if: ulta sawaal ho — profit se capital nikaalna ho?** A aur B ka profit ratio 3:2 hai aur B ne 40,000 rupaye lagaye (same time). Toh A ka capital hoga 40,000 × 3 / 2 = 60,000 rupaye. Ratio ko ulta chalana bhi aana chahiye — exam mein aise sawaal aate hain.\n\n**What if: ek partner nikal jaaye?** B 6 mahine baad nikal jaata hai, toh uska time 6 mahine hi gina jaayega, chahe business 12 mahine chale. Jo paisa jitne time tak laga raha, utna hi uska hissa.`,
          `**What if the ratio is 2:1?** A put in 30,000 rupees for 12 months (3,60,000 units) and B put in 20,000 rupees for 9 months (1,80,000 units). The ratio is 2:1. The profit is 90,000, so A gets 90,000 × 2 / 3 = **60,000** and B gets **30,000**. The code below does this calculation and also shows the 2:3:5 ratio: on a profit of 1,00,000, A gets 20,000, B gets 30,000, and C gets 50,000.\n\n**What if the question is reversed — find capital from profit?** The profit ratio of A and B is 3:2, and B put in 40,000 rupees (same time). Then A capital is 40,000 × 3 / 2 = 60,000 rupees. Running a ratio backwards is also needed — exams ask such questions.\n\n**What if a partner leaves?** If B leaves after 6 months, only 6 months count for B, even if the business runs 12 months. A share counts only for the time the money stayed in.`
        ),
        code: {
          title: t(
            'Ratio 2:1 aur 2:3:5 se Profit Baantna',
            'Sharing Profit by Ratios 2:1 and 2:3:5'
          ),
          language: 'python',
          code: `print("A: 30000 x 12 =", 30000 * 12)
print("B: 20000 x 9 =", 20000 * 9)
print("Ratio 2 : 1, profit 90000 -> A =", 90000 * 2 // 3, ", B =", 90000 // 3)
print("Ratio 2:3:5, profit 100000 ->", 100000 * 2 // 10, 100000 * 3 // 10, 100000 * 5 // 10)`,
          output: `A: 30000 x 12 = 360000
B: 20000 x 9 = 180000
Ratio 2 : 1, profit 90000 -> A = 60000 , B = 30000
Ratio 2:3:5, profit 100000 -> 20000 30000 50000`
        }
      },
      {
        heading: t(
          '7. Summary: Partnership ka Poora Picture',
          '7. Summary: The Full Picture of Partnership'
        ),
        body: t(
          `Partnership ka ek hi rule hai: **hissa capital × time ke ratio mein milta hai**. Aaj ke numbers yaad rakho: A 40,000 × 12 = 4,80,000 units, B 60,000 × 8 = 4,80,000 units, ratio 1:1, profit 96,000 par dono ko 48,000-48,000. Ratio 2:3:5 par profit 1,00,000 ke hisse hain 20,000, 30,000, 50,000. Ratio 2:1 par profit 90,000 ke hisse hain 60,000 aur 30,000.\n\nExam strategy: pehle har partner ke units (capital × time) nikaalo, phir ratio ko sabse chhota karo, phir profit ko ratio ke total se bhaag karke har hissa nikaalo. Aakhir mein saare hisse jod kar kul se check karo. Salary pehle alag karo, loss bhi wahi ratio mein baanto.\n\nRevision ke liye yahi 5 key notes kaafi hain. Agle article mein hum speed, time aur distance dekhenge — races aur relative speed ke saath.`,
          `Partnership has one rule: **shares come in the ratio of capital × time**. Remember today's numbers: A 40,000 × 12 = 4,80,000 units, B 60,000 × 8 = 4,80,000 units, ratio 1:1, and on a profit of 96,000 both get 48,000 each. On ratio 2:3:5, a profit of 1,00,000 splits as 20,000, 30,000, 50,000. On ratio 2:1, a profit of 90,000 splits as 60,000 and 30,000.\n\nThe exam strategy: first find each partner units (capital × time), then reduce the ratio to its smallest form, then divide the profit by the ratio total to find each share. Finally, add all the shares and check against the total. Take out salary first, and share a loss in the same ratio.\n\nThese 5 key notes are enough for revision. In the next article we will look at speed, time, and distance — with races and relative speed.`
        )
      }
    ],
    diagram: {
      kind: 'table',
      title: t(
        'A aur B ke Units: Capital × Time',
        'A and B Units: Capital × Time'
      ),
      caption: t(
        'Units barabar hain, isliye profit barabar batega',
        'Units are equal, so the profit splits equally'
      ),
      nodes: [],
      headers: [
        t('Partner', 'Partner'),
        t('Capital', 'Capital'),
        t('Time', 'Time'),
        t('Units', 'Units'),
        t('Hissa (96000)', 'Share (96000)')
      ],
      rows: [
        [
          t('A', 'A'),
          t('40,000', '40,000'),
          t('12 mahine', '12 months'),
          t('4,80,000', '4,80,000'),
          t('48,000', '48,000')
        ],
        [
          t('B', 'B'),
          t('60,000', '60,000'),
          t('8 mahine', '8 months'),
          t('4,80,000', '4,80,000'),
          t('48,000', '48,000')
        ]
      ]
    },
    codeExamples: [
      {
        title: t(
            'Ratio 2:1 aur 2:3:5 se Profit Baantna',
            'Sharing Profit by Ratios 2:1 and 2:3:5'
          ),
        language: 'python',
        code: `print("A: 30000 x 12 =", 30000 * 12)
print("B: 20000 x 9 =", 20000 * 9)
print("Ratio 2 : 1, profit 90000 -> A =", 90000 * 2 // 3, ", B =", 90000 // 3)
print("Ratio 2:3:5, profit 100000 ->", 100000 * 2 // 10, 100000 * 3 // 10, 100000 * 5 // 10)`,
        output: `A: 30000 x 12 = 360000
B: 20000 x 9 = 180000
Ratio 2 : 1, profit 90000 -> A = 60000 , B = 30000
Ratio 2:3:5, profit 100000 -> 20000 30000 50000`
      }
    ],
    mcqs: [
      {
        q: t(
          'A ne 20,000 aur B ne 30,000 rupaye lagaye (same time). Profit 50,000 hai. A ko kitna milega?',
          'A put in 20,000 and B put in 30,000 rupees (same time). The profit is 50,000. How much does A get?'
        ),
        opts: [
          t('15,000', '15,000'),
          t('20,000', '20,000'),
          t('25,000', '25,000'),
          t('30,000', '30,000')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: ratio 2:3 hai, total 5, isliye A ko 50,000 × 2 / 5 = 20,000 milega.',
          'Correct answer: the ratio is 2:3, total 5, so A gets 50,000 × 2 / 5 = 20,000.'
        )
      },
      {
        q: t(
          'A ne 40,000 rupaye 12 mahine aur B ne 60,000 rupaye 6 mahine ke liye lagaye. Profit 70,000 hai. A ko kitna milega?',
          'A put in 40,000 rupees for 12 months and B put in 60,000 rupees for 6 months. The profit is 70,000. How much does A get?'
        ),
        opts: [
          t('30,000', '30,000'),
          t('35,000', '35,000'),
          t('40,000', '40,000'),
          t('45,000', '45,000')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: A units 4,80,000, B units 3,60,000, ratio 4:3, total 7, isliye A ko 70,000 × 4 / 7 = 40,000 milega.',
          'Correct answer: A units 4,80,000, B units 3,60,000, ratio 4:3, total 7, so A gets 70,000 × 4 / 7 = 40,000.'
        )
      },
      {
        q: t(
          'A, B, C ka capital ratio 1:2:3 hai aur profit 60,000 hai. B ko kitna milega?',
          'The capital ratio of A, B, C is 1:2:3 and the profit is 60,000. How much does B get?'
        ),
        opts: [
          t('10,000', '10,000'),
          t('20,000', '20,000'),
          t('30,000', '30,000'),
          t('40,000', '40,000')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: ratio total 6 hai, isliye B ko 60,000 × 2 / 6 = 20,000 milega.',
          'Correct answer: the ratio total is 6, so B gets 60,000 × 2 / 6 = 20,000.'
        )
      },
      {
        q: t(
          'A ne 80,000 rupaye 6 mahine aur B ne 40,000 rupaye 12 mahine ke liye lagaye. Profit 48,000 hai. A ko kitna milega?',
          'A put in 80,000 rupees for 6 months and B put in 40,000 rupees for 12 months. The profit is 48,000. How much does A get?'
        ),
        opts: [
          t('16,000', '16,000'),
          t('24,000', '24,000'),
          t('32,000', '32,000'),
          t('40,000', '40,000')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: A units 4,80,000, B units 4,80,000, ratio 1:1, isliye A ko 48,000 / 2 = 24,000 milega.',
          'Correct answer: A units 4,80,000, B units 4,80,000, ratio 1:1, so A gets 48,000 / 2 = 24,000.'
        )
      },
      {
        q: t(
          'A aur B ka profit ratio 3:2 hai aur kul profit 25,000 hai. A ko kitna milega?',
          'The profit ratio of A and B is 3:2 and the total profit is 25,000. How much does A get?'
        ),
        opts: [
          t('10,000', '10,000'),
          t('12,000', '12,000'),
          t('15,000', '15,000'),
          t('18,000', '18,000')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: ratio total 5 hai, isliye A ko 25,000 × 3 / 5 = 15,000 milega.',
          'Correct answer: the ratio total is 5, so A gets 25,000 × 3 / 5 = 15,000.'
        )
      }
    ],
    keyNotes: [
      t(
        'Hissa capital × time ke ratio mein milta hai — sirf capital nahi.',
        'Shares come in the ratio of capital × time — not capital alone.'
      ),
      t(
        'Same time ho toh time cancel ho jaata hai, profit sirf capital ratio mein banta hai.',
        'With the same time, time cancels out and profit splits only by the capital ratio.'
      ),
      t(
        'Ratio ko sabse chhota karo, phir profit ko ratio total se bhaag karke hissa nikaalo.',
        'Reduce the ratio to its smallest form, then divide the profit by the ratio total to find each share.'
      ),
      t(
        'Saare hisse jod kar kul profit se check karo.',
        'Add all the shares and check against the total profit.'
      ),
      t(
        'Working partner ki salary pehle alag karo; loss bhi wahi ratio mein banta hai.',
        'Take out a working partner salary first; a loss also splits in the same ratio.'
      )
    ],
    practice: {
      title: t(
        'Practice: Teen Partners mein Profit Baanto',
        'Practice: Share Profit Among Three Partners'
      ),
      task: t(
        'A ne 60,000 rupaye 12 mahine, B ne 40,000 rupaye 9 mahine aur C ne 20,000 rupaye 6 mahine ke liye lagaye. Kul profit 1,00,000 hai. Har ek ka hissa nikaalo. Starter code run karo aur verify karo ki output expected jaisa aata hai: A 60,000, B 30,000, C 10,000.',
        'A put in 60,000 rupees for 12 months, B put in 40,000 rupees for 9 months, and C put in 20,000 rupees for 6 months. The total profit is 1,00,000. Find each share. Run the starter code and verify the output matches the expected output: A 60,000, B 30,000, C 10,000.'
      ),
      language: 'python',
      starter: `a = 60000 * 12
b = 40000 * 9
c = 20000 * 6
print("Units A, B, C =", a, b, c)
print("Ratio = 6 : 3 : 1")
print("Profit 100000 -> A =", 100000 * 6 // 10, ", B =", 100000 * 3 // 10, ", C =", 100000 // 10)`,
      expected: `Units A, B, C = 720000 360000 120000
Ratio = 6 : 3 : 1
Profit 100000 -> A = 60000 , B = 30000 , C = 10000`
    },
    readMinutes: 12
  };

const quantSpeedTime: Article = {
    id: 'quant-speed-time',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Speed, Time aur Distance Advanced — Races aur Relative Speed',
      'Speed, Time, and Distance Advanced — Races and Relative Speed'
    ),
    summary: t(
      'Speed = distance / time se shuru karke relative speed, train ke sawaal aur races tak jao. Aamne-saamne aane par speed judti hai, peeche se pakadne par ghatti hai — aur race mein jeet ka farak time se nikalta hai.',
      'Start from speed = distance / time and go up to relative speed, train questions, and races. Speeds add when coming face to face and subtract when chasing from behind — and a race win margin comes from time.'
    ),
    sections: [
      {
        heading: t(
          '1. Speed, Time aur Distance Kya Hai? (Basic Formula)',
          '1. What Are Speed, Time, and Distance? (The Basic Formula)'
        ),
        body: t(
          `Teen cheezein ek hi formula se judi hain: **speed = distance / time**. Isi se do aur formulas bante hain: **distance = speed × time** aur **time = distance / speed**. Jaise 120 km ki doori 2 ghante mein tay ho toh speed hai 120 / 2 = **60 km/h**. Aur agar speed 80 km/h ho jaaye toh wahi doori 120 / 80 = **1.5 ghante** mein tay hogi. Ye teen formulas poora chapter chalate hain.\n\nUnit badalna bhi seekhna zaroori hai. **km/h ko m/s mein badalne ke liye 5/18 se guna karo**, aur **m/s ko km/h mein badalne ke liye 18/5 se guna karo**. Jaise 72 km/h matlab 72 × 5/18 = **20 m/s**, aur 90 km/h matlab 90 × 5/18 = **25 m/s**. Train ke sawaalon mein speed hamesha m/s mein chahiye hoti hai, kyunki train ki lambai meter mein hoti hai.\n\n**Relative speed** ka matlab hai do cheezon ki ek doosre ke hisaab se speed. Jab do gaadiyan **aamne-saamne** (opposite direction) aati hain, toh relative speed dono ki speed ka **jod** hoti hai. Jab ek gaadi doosri ka **peechha** karti hai (same direction), toh relative speed dono ki speed ka **farak** hoti hai. Yahi ek rule relative speed ke saare sawaal solve karta hai.`,
          `Three quantities are tied by one formula: **speed = distance / time**. Two more formulas come from it: **distance = speed × time** and **time = distance / speed**. For example, if 120 km is covered in 2 hours, the speed is 120 / 2 = **60 km/h**. And if the speed becomes 80 km/h, the same distance takes 120 / 80 = **1.5 hours**. These three formulas run the whole chapter.\n\nChanging units is also essential. **To change km/h to m/s, multiply by 5/18**, and **to change m/s to km/h, multiply by 18/5**. For example, 72 km/h means 72 × 5/18 = **20 m/s**, and 90 km/h means 90 × 5/18 = **25 m/s**. Train questions always need speed in m/s, because a train length is in metres.\n\n**Relative speed** means the speed of two things compared with each other. When two vehicles come **face to face** (opposite directions), the relative speed is the **sum** of both speeds. When one vehicle **chases** another (same direction), the relative speed is the **difference** of both speeds. This one rule solves all relative speed questions.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Train, Race aur Milna',
          '2. Real-Life Examples: a Train, a Race, and Meeting'
        ),
        body: t(
          `Train jab platform se guzarti hai, toh use apni lambai + platform ki lambai tay karni hoti hai. 180 meter lambi train 20 m/s ki speed se ek khambe ko 180 / 20 = **9 second** mein paar karti hai — kyunki khambe ki lambai zero hoti hai. Lekin 200 meter ke platform ko paar karne mein use 180 + 200 = 380 meter chalna hoga, isliye time hoga 380 / 20 = 19 second.\n\nRace mein **head start** ka matlab hai ek runner ko pehle se aage khada kar dena. 100 meter ki race mein A, B ko 20 meter ka head start deta hai — matlab B ko sirf 80 meter bhaagna hai, A ko poora 100 meter. Agar A ki speed 10 m/s hai aur B ki 8 m/s hai, toh A ko 10 second lagenge aur B ko bhi 80 / 8 = 10 second lagenge — **tie** ho jaayega. Dono barabar aayenge.\n\nDo dost aamne-saamne chal kar milte hain: ek 60 km/h se aur doosra 90 km/h se, aur unke beech 300 km ki doori hai. Relative speed hai 60 + 90 = 150 km/h, isliye milne mein 300 / 150 = **2 ghante** lagenge. Yahi hisaab train, gaadi aur paidal chalne — har jagah lagta hai.`,
          `When a train passes a platform, it must cover its own length + the platform length. A 180 metre train at 20 m/s crosses a pole in 180 / 20 = **9 seconds** — because a pole has zero length. But to cross a 200 metre platform it must travel 180 + 200 = 380 metres, so the time is 380 / 20 = 19 seconds.\n\nIn a race, a **head start** means letting one runner start ahead. In a 100 metre race, if A gives B a 20 metre head start, B must run only 80 metres while A runs the full 100 metres. If A speed is 10 m/s and B speed is 8 m/s, A takes 10 seconds and B also takes 80 / 8 = 10 seconds — it is a **tie**. Both finish together.\n\nTwo friends walk towards each other to meet: one at 60 km/h and the other at 90 km/h, with 300 km between them. The relative speed is 60 + 90 = 150 km/h, so they meet after 300 / 150 = **2 hours**. This same calculation applies to trains, cars, and walking — everywhere.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: Relative Speed, Train aur Race (Dry Run)',
          '3. Step-by-Step: Relative Speed, Train, and Race (Dry Run)'
        ),
        body: t(
          `Sawaal mein do gaadiyan hain: A ki speed 60 km/h aur B ki speed 90 km/h. **Step 1 — same direction relative speed:** 90 - 60 = **30 km/h**. Matlab peeche wali gaadi har ghante 30 km paas aati hai. **Step 2 — opposite direction relative speed:** 60 + 90 = **150 km/h**. Matlab aamne-saamne aane par har ghante doori 150 km kam hoti hai.\n\n**Step 3 — milne ka time:** beech ki doori 300 km hai aur dono aamne-saamne aa rahe hain. Time = distance / relative speed = 300 / 150 = **2 ghante**. Check karo: 2 ghante mein A chalega 60 × 2 = 120 km aur B chalega 90 × 2 = 180 km. Dono milkar 120 + 180 = 300 km — poori doori cover ho gayi.\n\n**Step 4 — train:** 72 km/h ko m/s mein badlo: 72 × 5/18 = **20 m/s**. Train 180 meter lambi hai, khambe ko paar karne mein time = 180 / 20 = **9 second**. **Step 5 — race:** A ko 100 meter bhaagna hai 10 m/s se: time = 100 / 10 = 10 second. B ko 80 meter bhaagna hai 8 m/s se: time = 80 / 8 = 10 second. Dono ka time barabar — **tie**. Neeche wala code yahi poora hisaab print karta hai.`,
          `The question has two vehicles: A speed 60 km/h and B speed 90 km/h. **Step 1 — same direction relative speed:** 90 - 60 = **30 km/h**. That means the vehicle behind gets 30 km closer every hour. **Step 2 — opposite direction relative speed:** 60 + 90 = **150 km/h**. That means coming face to face, the distance shrinks by 150 km every hour.\n\n**Step 3 — meeting time:** the distance between them is 300 km and both come face to face. Time = distance / relative speed = 300 / 150 = **2 hours**. Check it: in 2 hours A travels 60 × 2 = 120 km and B travels 90 × 2 = 180 km. Together they cover 120 + 180 = 300 km — the full distance.\n\n**Step 4 — train:** change 72 km/h to m/s: 72 × 5/18 = **20 m/s**. The train is 180 metres long, so crossing a pole takes 180 / 20 = **9 seconds**. **Step 5 — race:** A must run 100 metres at 10 m/s: time = 100 / 10 = 10 seconds. B must run 80 metres at 8 m/s: time = 80 / 8 = 10 seconds. Both times are equal — a **tie**. The code below prints this whole calculation.`
        ),
        code: {
          title: t(
            'Relative Speed, Milne ka Time, Train aur Race',
            'Relative Speed, Meeting Time, Train, and Race'
          ),
          language: 'python',
          code: `print("Same direction relative speed =", 90 - 60, "km/h")
print("Opposite direction relative speed =", 90 + 60, "km/h")
print("Meet after 300 km =", 300 / (60 + 90), "hours")
print("72 km/h in m/s =", 72 * 5 // 18)
print("Train 180 m crosses a pole in", 180 // 20, "seconds")
print("Race: A takes", 100 // 10, "s, B takes", 80 // 8, "s -> tie")`,
          output: `Same direction relative speed = 30 km/h
Opposite direction relative speed = 150 km/h
Meet after 300 km = 2.0 hours
72 km/h in m/s = 20
Train 180 m crosses a pole in 9 seconds
Race: A takes 10 s, B takes 10 s -> tie`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Direction, Unit aur Train ki Lambai',
          '4. Common Mistakes: Direction, Unit, and Train Length'
        ),
        body: t(
          `Sabse badi galti hai **direction bhool kar relative speed galat nikaalna**. Aamne-saamne aane par speed judti hai (60 + 90 = 150), peeche se pakadne par ghatti hai (90 - 60 = 30). Jo student har baar jod deta hai, woh peeche se pakadne wale sawaal mein galat karta hai. Pehle direction dekho, phir jodo ya ghatao.\n\nDoosri galti hai **unit badle bina hisaab karna**. Train ki lambai meter mein hai aur speed km/h mein hai — bina badle bhaag karoge toh jawab galat hoga. Pehle speed ko m/s mein badlo (5/18 se guna karo), phir time nikaalo. 72 km/h ko seedha 72 maan kar 180 / 72 karna galat hai.\n\nTeesri galti hai **train ki lambai bhool jaana**. Platform paar karte time train ko apni lambai + platform ki lambai tay karni hoti hai. Sirf platform ki lambai lene se time kam aayega. Khamba ya aadmi paar karte time sirf train ki lambai lagti hai, kyunki unki lambai zero hoti hai. Chauthi galti hai **race mein head start ko galat side par lagana**. Head start usko milta hai jo peeche hai — uski doori kam hoti hai, badhti nahi.`,
          `The biggest mistake is **finding the wrong relative speed by forgetting direction**. Coming face to face, speeds add (60 + 90 = 150); chasing from behind, they subtract (90 - 60 = 30). A student who always adds goes wrong on chasing questions. Look at the direction first, then add or subtract.\n\nThe second mistake is **calculating without changing the unit**. A train length is in metres and its speed is in km/h — dividing without converting gives a wrong answer. First change the speed to m/s (multiply by 5/18), then find the time. Taking 72 km/h as 72 directly and doing 180 / 72 is wrong.\n\nThe third mistake is **forgetting the train length**. When crossing a platform, the train must cover its own length + the platform length. Taking only the platform length gives too little time. When crossing a pole or a person, only the train length counts, because their length is zero. The fourth mistake is **putting the head start on the wrong side in a race**. The head start goes to the one who is behind — the distance that runner must cover gets smaller, not bigger.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Barabar Speed, Rukna aur Round Trip',
          '5. Edge Cases: Equal Speed, Stopping, and Round Trips'
        ),
        body: t(
          `**Pehla edge case: barabar speed.** Agar dono gaadiyan ek hi direction mein ek hi speed se chal rahi hain, toh relative speed zero hai — peeche wali kabhi aage wali ko pakad nahi payegi. Exam mein aise sawaal ka jawab "kabhi nahi milegi" hota hai.\n\n**Doosra: beech mein rukna.** Agar gaadi 120 km jaati hai 60 km/h se (2 ghante) aur beech mein 30 minute rukti hai, toh kul time 2.5 ghante hoga. Rukne ka time bhi kul time mein judta hai — use bhoolna ek aam galti hai.\n\n**Teesra: round trip aur average speed.** Aane-jaane ki average speed simple average nahi hoti. 60 km jaana 30 km/h se (2 ghante) aur wapas 60 km/h se (1 ghanta): kul doori 120 km, kul time 3 ghante, average speed = 120 / 3 = **40 km/h**. Simple average (30 + 60) / 2 = 45 galat hai. **Chautha: train ek doosri ko paar karna.** Do trains aamne-saamne aayein toh kul doori dono ki lambai ka jod hoti hai aur relative speed dono ki speed ka jod hoti hai.`,
          `**First edge case: equal speed.** If both vehicles travel in the same direction at the same speed, the relative speed is zero — the one behind can never catch the one ahead. In exams, the answer to such a question is "they never meet".\n\n**Second: stopping in the middle.** If a vehicle travels 120 km at 60 km/h (2 hours) and stops for 30 minutes in the middle, the total time is 2.5 hours. Stopping time also adds to the total time — forgetting it is a common mistake.\n\n**Third: round trip and average speed.** The average speed of a round trip is not the simple average. Going 60 km at 30 km/h (2 hours) and returning at 60 km/h (1 hour): total distance 120 km, total time 3 hours, average speed = 120 / 3 = **40 km/h**. The simple average (30 + 60) / 2 = 45 is wrong. **Fourth: one train crossing another.** When two trains come face to face, the total distance is the sum of both lengths and the relative speed is the sum of both speeds.`
        )
      },
      {
        heading: t(
          '6. What-If: Speed Badhe, Doori Badhe aur Jeet ka Farak',
          '6. What-If: Speed Rises, Distance Grows, and the Win Margin'
        ),
        body: t(
          `**What if: speed badh jaaye?** 120 km ki doori 2 ghante mein 60 km/h se tay hoti hai. Agar speed 80 km/h ho jaaye, toh time hoga 120 / 80 = **1.5 ghante**. Speed badhne par time kam hota hai — speed aur time ulta ratio mein hote hain. Neeche wala code yahi dikhata hai.\n\n**What if: race mein jeet ka farak nikaalna ho?** A 100 meter 10 second mein bhaagta hai (10 m/s) aur B 100 meter 12.5 second mein bhaagta hai (8 m/s). A, B se **2.5 second** pehle finish karta hai. Jeet ka farak time ka farak hota hai, doori ka nahi — kyunki dono ne poori 100 meter hi bhaagi hai.\n\n**What if: doori doguni ho jaaye?** Speed same rahe toh time bhi doguna ho jaayega. 120 km mein 2 ghante lagte hain toh 240 km mein 4 ghante lagenge. Speed same hone par distance aur time seedha ratio mein hote hain.`,
          `**What if the speed rises?** A distance of 120 km takes 2 hours at 60 km/h. If the speed becomes 80 km/h, the time is 120 / 80 = **1.5 hours**. When speed rises, time falls — speed and time are in inverse ratio. The code below shows exactly this.\n\n**What if you must find the win margin in a race?** A runs 100 metres in 10 seconds (10 m/s) and B runs 100 metres in 12.5 seconds (8 m/s). A finishes **2.5 seconds** before B. The win margin is a difference in time, not distance — because both ran the full 100 metres.\n\n**What if the distance doubles?** With the same speed, the time also doubles. If 120 km takes 2 hours, 240 km takes 4 hours. With the same speed, distance and time are in direct ratio.`
        ),
        code: {
          title: t(
            'Speed Badhne par Time Kam: 120 km ka Example',
            'When Speed Rises, Time Falls: the 120 km Example'
          ),
          language: 'python',
          code: `print("120 km in 2 hours: speed =", 120 // 2, "km/h")
print("At 80 km/h, time =", 120 / 80, "hours")
print("120 km at 60 km/h takes 2 hours, at 80 km/h takes 1.5 hours")`,
          output: `120 km in 2 hours: speed = 60 km/h
At 80 km/h, time = 1.5 hours
120 km at 60 km/h takes 2 hours, at 80 km/h takes 1.5 hours`
        }
      },
      {
        heading: t(
          '7. Summary: Speed, Time aur Distance ka Poora Picture',
          '7. Summary: The Full Picture of Speed, Time, and Distance'
        ),
        body: t(
          `Teen formulas yaad rakho: **speed = distance / time**, **distance = speed × time**, **time = distance / speed**. Unit badalna: km/h se m/s ke liye 5/18 se guna karo. Relative speed: aamne-saamne aane par jodo, peeche se pakadne par ghatao. Aaj ke numbers yaad rakho: relative speed same direction 30 km/h, opposite direction 150 km/h, 300 km par milne ka time 2 ghante, 72 km/h = 20 m/s, 180 meter train khambe ko 9 second mein paar karti hai, race mein A 10 second aur B (80 meter) 10 second — tie.\n\nExam strategy: pehle direction dekho, phir relative speed nikaalo, phir time = distance / speed lagao. Train mein pehle unit badlo, phir lambai jodo. Race mein head start wale ki doori kam karo.\n\nRevision ke liye yahi 5 key notes kaafi hain. Agle aur aakhiri article mein hum work aur efficiency dekhenge — kaam ko dinon mein baantna.`,
          `Remember three formulas: **speed = distance / time**, **distance = speed × time**, **time = distance / speed**. To change units: multiply by 5/18 to go from km/h to m/s. Relative speed: add when coming face to face, subtract when chasing from behind. Remember today's numbers: relative speed in the same direction is 30 km/h, in opposite directions 150 km/h, meeting time for 300 km is 2 hours, 72 km/h = 20 m/s, a 180 metre train crosses a pole in 9 seconds, and in the race A takes 10 seconds and B (80 metres) takes 10 seconds — a tie.\n\nThe exam strategy: look at the direction first, then find the relative speed, then apply time = distance / speed. For a train, change the unit first, then add the lengths. In a race, reduce the distance of the runner with the head start.\n\nThese 5 key notes are enough for revision. In the next and last article we will look at work and efficiency — splitting work into days.`
        )
      }
    ],
    diagram: {
      kind: 'flow',
      title: t(
        'Milne ka Hisaab: 300 km, 60 aur 90 km/h',
        'The Meeting Calculation: 300 km, 60 and 90 km/h'
      ),
      caption: t(
        'Aamne-saamne aane par speed judti hai, phir time nikalta hai',
        'Coming face to face, speeds add, then time comes out'
      ),
      nodes: [
        {
          t: t('A: 60 km/h, B: 90 km/h', 'A: 60 km/h, B: 90 km/h'),
          s: t('Dono aamne-saamne aa rahe hain', 'Both are coming face to face')
        },
        {
          t: t('Relative speed = 60 + 90 = 150 km/h', 'Relative speed = 60 + 90 = 150 km/h'),
          s: t('Aamne-saamne aane par speed judti hai', 'Coming face to face, speeds add')
        },
        {
          t: t('Time = 300 / 150 = 2 ghante', 'Time = 300 / 150 = 2 hours'),
          s: t('Time = distance / relative speed', 'Time = distance / relative speed')
        },
        {
          t: t('Check: A 120 km + B 180 km = 300 km', 'Check: A 120 km + B 180 km = 300 km'),
          s: t('Dono milkar poori doori cover karte hain', 'Together they cover the full distance')
        },
        {
          t: t('Train: 72 km/h = 20 m/s, 180 m / 20 = 9 second', 'Train: 72 km/h = 20 m/s, 180 m / 20 = 9 seconds'),
          s: t('Pehle unit badlo, phir time nikaalo', 'Change the unit first, then find the time')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
            'Speed Badhne par Time Kam: 120 km ka Example',
            'When Speed Rises, Time Falls: the 120 km Example'
          ),
        language: 'python',
        code: `print("120 km in 2 hours: speed =", 120 // 2, "km/h")
print("At 80 km/h, time =", 120 / 80, "hours")
print("120 km at 60 km/h takes 2 hours, at 80 km/h takes 1.5 hours")`,
        output: `120 km in 2 hours: speed = 60 km/h
At 80 km/h, time = 1.5 hours
120 km at 60 km/h takes 2 hours, at 80 km/h takes 1.5 hours`
      }
    ],
    mcqs: [
      {
        q: t(
          '240 km ki doori 80 km/h ki speed se kitne ghante mein tay hogi?',
          'How many hours does it take to cover 240 km at 80 km/h?'
        ),
        opts: [
          t('2 ghante', '2 hours'),
          t('3 ghante', '3 hours'),
          t('4 ghante', '4 hours'),
          t('5 ghante', '5 hours')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: time = distance / speed = 240 / 80 = 3 ghante.',
          'Correct answer: time = distance / speed = 240 / 80 = 3 hours.'
        )
      },
      {
        q: t(
          '150 meter lambi train 25 m/s ki speed se ek khambe ko kitne second mein paar karegi?',
          'How many seconds does a 150 metre train at 25 m/s take to cross a pole?'
        ),
        opts: [
          t('4 second', '4 seconds'),
          t('5 second', '5 seconds'),
          t('6 second', '6 seconds'),
          t('8 second', '8 seconds')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: time = 150 / 25 = 6 second. Khambe ki lambai zero hoti hai, isliye sirf train ki lambai lagti hai.',
          'Correct answer: time = 150 / 25 = 6 seconds. A pole has zero length, so only the train length counts.'
        )
      },
      {
        q: t(
          'A 40 km/h aur B 60 km/h se aamne-saamne aa rahe hain. Beech ki doori 200 km hai. Kitne ghante mein milenge?',
          'A at 40 km/h and B at 60 km/h are coming face to face. The distance between them is 200 km. After how many hours do they meet?'
        ),
        opts: [
          t('1 ghanta', '1 hour'),
          t('2 ghante', '2 hours'),
          t('3 ghante', '3 hours'),
          t('4 ghante', '4 hours')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: relative speed = 40 + 60 = 100 km/h, time = 200 / 100 = 2 ghante.',
          'Correct answer: relative speed = 40 + 60 = 100 km/h, so time = 200 / 100 = 2 hours.'
        )
      },
      {
        q: t(
          '90 km/h kitne m/s ke barabar hai?',
          'How many m/s is 90 km/h equal to?'
        ),
        opts: [
          t('15 m/s', '15 m/s'),
          t('20 m/s', '20 m/s'),
          t('25 m/s', '25 m/s'),
          t('30 m/s', '30 m/s')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: 90 × 5/18 = 25 m/s.',
          'Correct answer: 90 × 5/18 = 25 m/s.'
        )
      },
      {
        q: t(
          '100 meter ki race mein A 10 second mein aur B 12.5 second mein finish karta hai. A kitne second se jeetta hai?',
          'In a 100 metre race, A finishes in 10 seconds and B in 12.5 seconds. By how many seconds does A win?'
        ),
        opts: [
          t('2 second', '2 seconds'),
          t('2.5 second', '2.5 seconds'),
          t('3 second', '3 seconds'),
          t('3.5 second', '3.5 seconds')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: jeet ka farak = 12.5 - 10 = 2.5 second.',
          'Correct answer: the win margin = 12.5 - 10 = 2.5 seconds.'
        )
      }
    ],
    keyNotes: [
      t(
        'Speed = distance / time; distance = speed × time; time = distance / speed.',
        'Speed = distance / time; distance = speed × time; time = distance / speed.'
      ),
      t(
        'km/h se m/s ke liye 5/18 se guna karo; m/s se km/h ke liye 18/5 se guna karo.',
        'Multiply by 5/18 to go from km/h to m/s; multiply by 18/5 to go from m/s to km/h.'
      ),
      t(
        'Relative speed: aamne-saamne aane par jodo, peeche se pakadne par ghatao.',
        'Relative speed: add when coming face to face, subtract when chasing from behind.'
      ),
      t(
        'Train platform paar kare toh apni lambai + platform ki lambai; khamba paar kare toh sirf apni lambai.',
        'A train crossing a platform covers its own length + the platform length; crossing a pole, only its own length.'
      ),
      t(
        'Round trip ki average speed simple average nahi hoti — kul doori / kul time se nikaalo.',
        'Round trip average speed is not the simple average — find it from total distance / total time.'
      )
    ],
    practice: {
      title: t(
        'Practice: Do Trains kab Milengi aur 54 km/h kitne m/s Hai?',
        'Practice: When Do Two Trains Meet, and What Is 54 km/h in m/s?'
      ),
      task: t(
        'Do trains aamne-saamne aa rahi hain: ek 54 km/h se aur doosri 36 km/h se. Beech ki doori 270 km hai. Milne ka time nikaalo aur 54 km/h ko m/s mein badlo. Starter code run karo aur verify karo ki output expected jaisa aata hai: relative speed 90 km/h, milne ka time 3 ghante, 54 km/h = 15 m/s.',
        'Two trains are coming face to face: one at 54 km/h and the other at 36 km/h. The distance between them is 270 km. Find the meeting time and change 54 km/h to m/s. Run the starter code and verify the output matches the expected output: relative speed 90 km/h, meeting time 3 hours, 54 km/h = 15 m/s.'
      ),
      language: 'python',
      starter: `print("Relative speed =", 54 + 36, "km/h")
print("Meet after =", 270 // 90, "hours")
print("54 km/h in m/s =", 54 * 5 // 18)`,
      expected: `Relative speed = 90 km/h
Meet after = 3 hours
54 km/h in m/s = 15`
    },
    readMinutes: 12
  };

const quantWorkEfficiency: Article = {
    id: 'quant-work-efficiency',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Work aur Efficiency Deep — Kaam, Din aur Milkar Kaam Karna',
      'Work and Efficiency Deep — Work, Days, and Working Together'
    ),
    summary: t(
      'Kaam ka basic rule hai: ek din ka kaam = 1 / din. A akela 12 din mein, B akela 18 din mein — dono milkar 7.2 din mein. Efficiency ka ratio, ulta sawaal aur teen log milkar kaam — sab ek hi formula se.',
      'The basic rule of work is: one day work = 1 / days. A alone takes 12 days, B alone takes 18 days — together they take 7.2 days. Efficiency ratios, reverse questions, and three people working together — all from one formula.'
    ),
    sections: [
      {
        heading: t(
          '1. Work aur Efficiency Kya Hai? (1 Din ka Kaam)',
          '1. What Are Work and Efficiency? (One Day Work)'
        ),
        body: t(
          `Kaam ke sawaalon ka sabse bada rule hai: **ek din ka kaam = 1 / kul din**. Agar A ek kaam ko 12 din mein poora karta hai, toh A ek din mein kaam ka **1/12** hissa karta hai. Agar B wahi kaam 18 din mein karta hai, toh B ek din mein **1/18** hissa karta hai. Dono milkar ek din mein karenge 1/12 + 1/18 = **5/36** hissa. Kul kaam 1 hai, isliye dono milkar kaam poora karenge 36/5 = **7.2 din** mein.\n\n**Efficiency** ka matlab hai kaam karne ki speed. Jo aadmi kam din mein kaam karta hai, woh zyada efficient hai. A 12 din mein aur B 24 din mein kaam kare, toh A, B se doguna efficient hai — kyunki A ko aadha time lagta hai. Efficiency aur time **ulta ratio** mein hote hain: time doguna ho toh efficiency aadhi ho jaati hai.\n\nEk aur zaroori baat: kaam hamesha **1 unit** mana jaata hai. Poora kaam = 1. Isliye ek din ka kaam jodne par kul 1 aana chahiye. Agar A aur B milkar ek din mein 5/36 kaam karte hain, toh 36/5 din mein 5/36 × 36/5 = 1 — poora kaam ho gaya.`,
          `The biggest rule of work questions is: **one day work = 1 / total days**. If A finishes a job in 12 days, A does **1/12** of the job in one day. If B finishes the same job in 18 days, B does **1/18** of the job in one day. Together in one day they do 1/12 + 1/18 = **5/36** of the job. The whole job is 1, so together they finish it in 36/5 = **7.2 days**.\n\n**Efficiency** means working speed. A person who finishes in fewer days is more efficient. If A takes 12 days and B takes 24 days, A is twice as efficient as B — because A takes half the time. Efficiency and time are in **inverse ratio**: if time doubles, efficiency halves.\n\nOne more essential point: the whole job is always taken as **1 unit**. The full job = 1. So adding one day work must reach 1 in total. If A and B together do 5/36 of the job in one day, then in 36/5 days they do 5/36 × 36/5 = 1 — the whole job is done.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Ghar Banana, Tanki Bharna aur Khet',
          '2. Real-Life Examples: Building a House, Filling a Tank, and a Field'
        ),
        body: t(
          `Ghar banane mein do mazdoor milkar kaam karte hain: ek 12 din mein deewar banata hai, doosra 18 din mein. Dono milkar deewar 7.2 din mein bana lenge — kyunki dono ka ek din ka kaam jud jaata hai. Thekedaar ko yahi hisaab karke pata chalta hai ki kaam kab khatam hoga.\n\nTanki bharne mein bhi wahi rule lagta hai. Nal A tanki ko 6 ghante mein bharta hai, nal B 12 ghante mein khaali karta hai. Dono ek saath khule hon toh ek ghante mein tanki ka 1/6 - 1/12 = **1/12** hissa bharta hai, isliye tanki **12 ghante** mein bharegi. Bharne wale ko jodo, khaali karne wale ko ghatao — yahi pipes wala rule hai.\n\nKhet mein 5 mazdoor 10 din mein kaam karte hain. Agar mazdoor dogune ho jaayein (10 mazdoor), toh kaam aadhe time mein hoga: 5 din. Mazdoor aur din **ulta ratio** mein hote hain — mazdoor badhe toh din ghate. Yahi rule factory, khet aur ghar — har jagah lagta hai.`,
          `When building a house, two workers work together: one builds a wall in 12 days, the other in 18 days. Together they build the wall in 7.2 days — because the one day work of both adds up. A contractor uses this calculation to know when the work will finish.\n\nThe same rule applies to filling a tank. Pipe A fills a tank in 6 hours, pipe B empties it in 12 hours. With both open, the tank fills by 1/6 - 1/12 = **1/12** in one hour, so the tank fills in **12 hours**. Add the filling pipe, subtract the emptying pipe — that is the pipes rule.\n\nIn a field, 5 workers finish the work in 10 days. If the workers double (10 workers), the work takes half the time: 5 days. Workers and days are in **inverse ratio** — when workers rise, days fall. This rule applies in a factory, a field, and a house — everywhere.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: A aur B Milkar ka Worked Example (Dry Run)',
          '3. Step-by-Step: Worked Example on A and B Together (Dry Run)'
        ),
        body: t(
          `Sawaal hai: A ek kaam 12 din mein karta hai, B 18 din mein karta hai. Dono milkar kitne din mein karenge? **Step 1 — ek din ka kaam nikaalo.** A ek din mein 1/12 karta hai, B ek din mein 1/18 karta hai. **Step 2 — dono ka ek din ka kaam jodo.** 1/12 + 1/18 = 3/36 + 2/36 = **5/36**. Matlab dono milkar ek din mein kaam ka 5/36 hissa karte hain.\n\n**Step 3 — kul din nikaalo.** Kul kaam 1 hai, isliye din = 1 / (5/36) = 36/5 = **7.2 din**. Check karo: 7.2 din mein A karega 7.2 / 12 = 0.6 hissa aur B karega 7.2 / 18 = 0.4 hissa. Dono milkar 0.6 + 0.4 = 1 — poora kaam ho gaya.\n\n**Doosra worked example — ulta sawaal:** A aur B milkar 6 din mein kaam karte hain, A akela 10 din mein karta hai. B akela kitne din mein karega? B ka ek din ka kaam = 1/6 - 1/10 = 5/30 - 3/30 = 2/30 = 1/15. Isliye B akela kaam karega 15 din mein. Neeche wala code dono hisaab print karta hai.`,
          `The question is: A does a job in 12 days, B does it in 18 days. In how many days do they do it together? **Step 1 — find one day work.** A does 1/12 in one day, B does 1/18 in one day. **Step 2 — add the one day work of both.** 1/12 + 1/18 = 3/36 + 2/36 = **5/36**. That means together they do 5/36 of the job in one day.\n\n**Step 3 — find the total days.** The whole job is 1, so days = 1 / (5/36) = 36/5 = **7.2 days**. Check it: in 7.2 days A does 7.2 / 12 = 0.6 of the job and B does 7.2 / 18 = 0.4 of the job. Together 0.6 + 0.4 = 1 — the whole job is done.\n\n**Second worked example — the reverse question:** A and B together do the job in 6 days, A alone does it in 10 days. In how many days does B alone do it? B one day work = 1/6 - 1/10 = 5/30 - 3/30 = 2/30 = 1/15. So B alone does the job in 15 days. The code below prints both calculations.`
        ),
        code: {
          title: t(
            'A 12 Din, B 18 Din: Milkar Kitne Din aur B Akela?',
            'A 12 Days, B 18 Days: Together How Many Days, and B Alone?'
          ),
          language: 'python',
          code: `print("A alone: 1/12 of the work per day")
print("B alone: 1/18 of the work per day")
print("Together per day: 1/12 + 1/18 = 5/36")
print("Days together =", round(36 / 5, 1))
print("A + B finish in 6 days, A alone in 10 days")
print("B alone =", round(1 / (1 / 6 - 1 / 10), 1), "days")`,
          output: `A alone: 1/12 of the work per day
B alone: 1/18 of the work per day
Together per day: 1/12 + 1/18 = 5/36
Days together = 7.2
A + B finish in 6 days, A alone in 10 days
B alone = 15.0 days`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Din Jodna, Efficiency Ulta aur Pipe ka Sign',
          '4. Common Mistakes: Adding Days, Reversing Efficiency, and Pipe Signs'
        ),
        body: t(
          `Sabse badi galti hai **dinon ko seedha jodna ya average nikaalna**. A 12 din mein aur B 18 din mein kaam kare, toh dono milkar 15 din mein (average) nahi karenge — woh 7.2 din mein karenge. Dono milkar kaam tez hota hai, slow nahi. Hamesha ek din ka kaam jodo, dinon ko kabhi mat jodo.\n\nDoosri galti hai **efficiency ko ulta samajhna**. A, B se doguna efficient hai, iska matlab hai A ko aadha time lagta hai — doguna time nahi. Agar B 20 din mein kaam karta hai, toh doguna efficient A 10 din mein karega. Efficiency badhe toh time ghate.\n\nTeesri galti hai **pipe wale sawaal mein sign bhool jaana**. Bharne wala pipe jodta hai (+), khaali karne wala pipe ghatata hai (-). A 6 ghante mein bharta hai aur B 12 ghante mein khaali karta hai, toh net hai 1/6 - 1/12 = 1/12, matlab 12 ghante mein tanki bharegi. Agar dono ko jod do (1/6 + 1/12), toh jawab 4 ghante aayega — bilkul galat.`,
          `The biggest mistake is **adding the days directly or taking an average**. If A takes 12 days and B takes 18 days, together they do not take 15 days (the average) — they take 7.2 days. Together the work gets faster, not slower. Always add one day work, never add the days.\n\nThe second mistake is **reading efficiency backwards**. If A is twice as efficient as B, A takes half the time — not double the time. If B does the job in 20 days, A, who is twice as efficient, does it in 10 days. When efficiency rises, time falls.\n\nThe third mistake is **forgetting the sign in pipe questions**. A filling pipe adds (+), an emptying pipe subtracts (-). A fills in 6 hours and B empties in 12 hours, so the net is 1/6 - 1/12 = 1/12, meaning the tank fills in 12 hours. If you add both (1/6 + 1/12), the answer is 4 hours — completely wrong.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Ek Chhod de, Beech mein Aaye aur Zero Kaam',
          '5. Edge Cases: One Leaves, One Joins in the Middle, and Zero Work'
        ),
        body: t(
          `**Pehla edge case: ek beech mein chhod de.** A aur B milkar kaam karte hain, par B 3 din baad chala jaata hai. Pehle 3 din dono ka kaam jodo (3 × 5/36 = 15/36), phir bacha hua kaam (21/36) A akela karega: 21/36 / (1/12) = 7 din. Kul time = 3 + 7 = 10 din. Beech mein chhodne par hisaab do hisson mein karo.\n\n**Doosra: ek beech mein aaye.** A akela 4 din kaam karta hai (4/12 = 1/3 kaam), phir B aata hai aur dono milkar bacha hua 2/3 kaam karte hain: (2/3) / (5/36) = 4.8 din. Kul time = 4 + 4.8 = 8.8 din.\n\n**Teesra: efficiency zero.** Agar koi aadmi kaam hi nahi karta, toh uska ek din ka kaam 0 hai — use jodne se kuch nahi badalta. **Chautha: teen log milkar.** A 10 din, B 15 din, C 30 din mein kaam kare, toh ek din ka kaam hai 1/10 + 1/15 + 1/30 = 3/30 + 2/30 + 1/30 = 6/30 = 1/5. Isliye teenon milkar kaam karenge 5 din mein.`,
          `**First edge case: one leaves in the middle.** A and B work together, but B leaves after 3 days. First add 3 days of both (3 × 5/36 = 15/36), then A alone does the remaining work (21/36): 21/36 / (1/12) = 7 days. Total time = 3 + 7 = 10 days. When someone leaves in the middle, do the calculation in two parts.\n\n**Second: one joins in the middle.** A works alone for 4 days (4/12 = 1/3 of the job), then B joins and both together do the remaining 2/3 of the job: (2/3) / (5/36) = 4.8 days. Total time = 4 + 4.8 = 8.8 days.\n\n**Third: zero efficiency.** If a person does no work at all, one day work is 0 — adding it changes nothing. **Fourth: three people together.** If A takes 10 days, B takes 15 days, and C takes 30 days, one day work is 1/10 + 1/15 + 1/30 = 3/30 + 2/30 + 1/30 = 6/30 = 1/5. So all three together finish the job in 5 days.`
        )
      },
      {
        heading: t(
          '6. What-If: Efficiency Ratio, Mazdoor Badhe aur Teen Log',
          '6. What-If: Efficiency Ratios, More Workers, and Three People'
        ),
        body: t(
          `**What if: efficiency ratio diya ho?** A, B se doguna efficient hai aur B akela 20 din mein kaam karta hai. Toh A akela karega 20 / 2 = **10 din** mein. Dono milkar karenge 1 / (1/10 + 1/20) = 1 / (3/20) = **6.67 din** mein. Neeche wala code yahi hisaab karta hai, aur 3 guna efficient wala bhi: B 30 din mein kare toh A 10 din mein karega.\n\n**What if: mazdoor badh jaayein?** 5 mazdoor 10 din mein kaam karte hain, toh 10 mazdoor 5 din mein karenge. Kul kaam hai 5 × 10 = 50 mazdoor-din. Mazdoor dogune ho toh din aadhe ho jaate hain — kyunki kul kaam wahi rehta hai.\n\n**What if: teen log milkar kaam karein?** A 10 din, B 15 din, C 30 din mein kaam kare, toh teenon milkar 5 din mein karenge (practice mein dekho). Teen log hone par bhi rule wahi hai: ek din ka kaam jodo, phir ulta karke din nikaalo.`,
          `**What if an efficiency ratio is given?** A is twice as efficient as B, and B alone takes 20 days. Then A alone takes 20 / 2 = **10 days**. Together they take 1 / (1/10 + 1/20) = 1 / (3/20) = **6.67 days**. The code below does this calculation, and also the 3 times efficient case: if B takes 30 days, A takes 10 days.\n\n**What if the workers increase?** 5 workers do the job in 10 days, so 10 workers do it in 5 days. The total work is 5 × 10 = 50 worker-days. When workers double, days halve — because the total work stays the same.\n\n**What if three people work together?** If A takes 10 days, B takes 15 days, and C takes 30 days, all three together take 5 days (see the practice). With three people the rule is the same: add one day work, then invert to find the days.`
        ),
        code: {
          title: t(
            'Efficiency Ratio aur Mazdoor Badhne ka Hisaab',
            'Efficiency Ratio and More Workers Calculation'
          ),
          language: 'python',
          code: `print("A is twice as efficient as B; B alone takes 20 days")
print("A alone takes", 20 // 2, "days")
print("Together they take", round(1 / (1 / 10 + 1 / 20), 2), "days")
print("5 workers take 10 days, so 10 workers take", 5 * 10 // 10, "days")
print("A is 3 times as efficient as B; B alone takes 30 days")
print("A alone takes", 30 // 3, "days")`,
          output: `A is twice as efficient as B; B alone takes 20 days
A alone takes 10 days
Together they take 6.67 days
5 workers take 10 days, so 10 workers take 5 days
A is 3 times as efficient as B; B alone takes 30 days
A alone takes 10 days`
        }
      },
      {
        heading: t(
          '7. Summary: Work aur Efficiency ka Poora Picture',
          '7. Summary: The Full Picture of Work and Efficiency'
        ),
        body: t(
          `Work ka ek hi rule hai: **ek din ka kaam = 1 / din**. Milkar kaam karna ho toh ek din ka kaam jodo, phir ulta karke din nikaalo. Ulta sawaal ho toh ek din ka kaam ghatao. Efficiency aur time ulta ratio mein hote hain: efficiency doguni ho toh time aadha. Aaj ke numbers yaad rakho: A 12 din, B 18 din, milkar 7.2 din; A+B 6 din aur A 10 din ho toh B akela 15 din; A 10, B 15, C 30 din hon toh teenon milkar 5 din; A 6 ghante mein bhare aur B 12 ghante mein khaali kare toh tanki 12 ghante mein bharegi.\n\nExam strategy: pehle har ek ka ek din ka kaam likho, phir jodo ya ghatao, phir ulta karke din nikaalo. Dinon ko kabhi seedha mat jodo, pipe mein sign ka dhyaan rakho, aur beech mein aane-jaane par hisaab do hisson mein karo.\n\nRevision ke liye yahi 5 key notes kaafi hain. Is batch ke 9 articles poore hue — progressions, logarithms, data interpretation, data sufficiency, simplification, number series, partnership, speed-time aur work-efficiency.`,
          `Work has one rule: **one day work = 1 / days**. To work together, add one day work, then invert to find the days. For a reverse question, subtract one day work. Efficiency and time are in inverse ratio: if efficiency doubles, time halves. Remember today's numbers: A 12 days, B 18 days, together 7.2 days; if A+B take 6 days and A takes 10 days, B alone takes 15 days; if A takes 10, B takes 15, and C takes 30 days, all three together take 5 days; if A fills in 6 hours and B empties in 12 hours, the tank fills in 12 hours.\n\nThe exam strategy: first write each person one day work, then add or subtract, then invert to find the days. Never add the days directly, watch the sign in pipe questions, and split the calculation into two parts when someone joins or leaves in the middle.\n\nThese 5 key notes are enough for revision. This batch of 9 articles is complete — progressions, logarithms, data interpretation, data sufficiency, simplification, number series, partnership, speed-time, and work-efficiency.`
        )
      }
    ],
    diagram: {
      kind: 'bars',
      title: t(
        'Ek Din ka Kaam: A, B aur Dono Milkar',
        'One Day Work: A, B, and Both Together'
      ),
      caption: t(
        'Ek din ka kaam judta hai, din nahi judte',
        'One day work adds up, days do not'
      ),
      nodes: [],
      bars: [
        {
          label: t('A: 1/12 = 8.33%', 'A: 1/12 = 8.33%'),
          value: 8.33,
          note: t('12 din mein poora', 'Whole job in 12 days')
        },
        {
          label: t('B: 1/18 = 5.56%', 'B: 1/18 = 5.56%'),
          value: 5.56,
          note: t('18 din mein poora', 'Whole job in 18 days')
        },
        {
          label: t('Dono: 5/36 = 13.89%', 'Both: 5/36 = 13.89%'),
          value: 13.89,
          note: t('Milkar 7.2 din mein poora', 'Together in 7.2 days')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
            'Efficiency Ratio aur Mazdoor Badhne ka Hisaab',
            'Efficiency Ratio and More Workers Calculation'
          ),
        language: 'python',
        code: `print("A is twice as efficient as B; B alone takes 20 days")
print("A alone takes", 20 // 2, "days")
print("Together they take", round(1 / (1 / 10 + 1 / 20), 2), "days")
print("5 workers take 10 days, so 10 workers take", 5 * 10 // 10, "days")
print("A is 3 times as efficient as B; B alone takes 30 days")
print("A alone takes", 30 // 3, "days")`,
        output: `A is twice as efficient as B; B alone takes 20 days
A alone takes 10 days
Together they take 6.67 days
5 workers take 10 days, so 10 workers take 5 days
A is 3 times as efficient as B; B alone takes 30 days
A alone takes 10 days`
      }
    ],
    mcqs: [
      {
        q: t(
          'A ek kaam 10 din mein aur B 15 din mein karta hai. Dono milkar kitne din mein karenge?',
          'A does a job in 10 days and B in 15 days. In how many days do they do it together?'
        ),
        opts: [
          t('5 din', '5 days'),
          t('6 din', '6 days'),
          t('7 din', '7 days'),
          t('12 din', '12 days')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: ek din ka kaam 1/10 + 1/15 = 1/6 hai, isliye din = 6.',
          'Correct answer: one day work is 1/10 + 1/15 = 1/6, so days = 6.'
        )
      },
      {
        q: t(
          'A aur B milkar 4 din mein kaam karte hain, A akela 12 din mein karta hai. B akela kitne din mein karega?',
          'A and B together do a job in 4 days, A alone does it in 12 days. In how many days does B alone do it?'
        ),
        opts: [
          t('4 din', '4 days'),
          t('6 din', '6 days'),
          t('8 din', '8 days'),
          t('10 din', '10 days')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: B ka ek din ka kaam = 1/4 - 1/12 = 1/6 hai, isliye B akela 6 din mein karega.',
          'Correct answer: B one day work = 1/4 - 1/12 = 1/6, so B alone takes 6 days.'
        )
      },
      {
        q: t(
          '4 mazdoor ek kaam 8 din mein karte hain. 8 mazdoor kitne din mein karenge?',
          '4 workers do a job in 8 days. In how many days do 8 workers do it?'
        ),
        opts: [
          t('2 din', '2 days'),
          t('4 din', '4 days'),
          t('6 din', '6 days'),
          t('16 din', '16 days')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: kul kaam 4 × 8 = 32 mazdoor-din hai, isliye 8 mazdoor ko 32 / 8 = 4 din lagenge.',
          'Correct answer: total work is 4 × 8 = 32 worker-days, so 8 workers take 32 / 8 = 4 days.'
        )
      },
      {
        q: t(
          'A, B se 3 guna efficient hai. B akela 24 din mein kaam karta hai. A akela kitne din mein karega?',
          'A is 3 times as efficient as B. B alone does a job in 24 days. In how many days does A alone do it?'
        ),
        opts: [
          t('6 din', '6 days'),
          t('8 din', '8 days'),
          t('12 din', '12 days'),
          t('72 din', '72 days')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: efficiency 3 guna hai, isliye time 1/3 hoga: 24 / 3 = 8 din.',
          'Correct answer: efficiency is 3 times, so time is 1/3: 24 / 3 = 8 days.'
        )
      },
      {
        q: t(
          'Nal A tanki ko 6 ghante mein bharta hai aur nal B use 12 ghante mein khaali karta hai. Dono khule hon toh tanki kitne ghante mein bharegi?',
          'Pipe A fills a tank in 6 hours and pipe B empties it in 12 hours. With both open, in how many hours does the tank fill?'
        ),
        opts: [
          t('4 ghante', '4 hours'),
          t('6 ghante', '6 hours'),
          t('9 ghante', '9 hours'),
          t('12 ghante', '12 hours')
        ],
        ans: 3,
        expl: t(
          'Sahi jawab: net ek ghante ka kaam = 1/6 - 1/12 = 1/12 hai, isliye tanki 12 ghante mein bharegi.',
          'Correct answer: net one hour work = 1/6 - 1/12 = 1/12, so the tank fills in 12 hours.'
        )
      }
    ],
    keyNotes: [
      t(
        'Ek din ka kaam = 1 / din; milkar kaam ho toh ek din ka kaam jodo.',
        'One day work = 1 / days; to work together, add one day work.'
      ),
      t(
        'Dinon ko kabhi seedha mat jodo — din jodne se kaam slow nahi, tez hota hai.',
        'Never add the days directly — together the work gets faster, not slower.'
      ),
      t(
        'Efficiency aur time ulta ratio mein hote hain: efficiency doguni ho toh time aadha.',
        'Efficiency and time are in inverse ratio: if efficiency doubles, time halves.'
      ),
      t(
        'Pipe mein bharne wala jodta hai (+), khaali karne wala ghatata hai (-).',
        'In pipes, a filling pipe adds (+), an emptying pipe subtracts (-).'
      ),
      t(
        'Mazdoor aur din ulta ratio mein hote hain: mazdoor dogune ho toh din aadhe.',
        'Workers and days are in inverse ratio: if workers double, days halve.'
      )
    ],
    practice: {
      title: t(
        'Practice: A, B aur C Milkar Kitne Din Mein Karenge?',
        'Practice: In How Many Days Do A, B, and C Together Finish?'
      ),
      task: t(
        'A ek kaam 10 din mein, B 15 din mein aur C 30 din mein karta hai. Teenon milkar kitne din mein kaam poora karenge? Starter code run karo aur verify karo ki output expected jaisa aata hai: ek din ka kaam 1/5 aur kul din 5.',
        'A does a job in 10 days, B in 15 days, and C in 30 days. In how many days do all three together finish the job? Run the starter code and verify the output matches the expected output: one day work 1/5 and total days 5.'
      ),
      language: 'python',
      starter: `from fractions import Fraction
total = Fraction(1, 10) + Fraction(1, 15) + Fraction(1, 30)
print("Together per day =", total, "of the work")
print("Days together =", 1 / total, "days")`,
      expected: `Together per day = 1/5 of the work
Days together = 5 days`
    },
    readMinutes: 12
  };

const quantInequalities: Article = {
    id: 'quant-inequalities',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Inequalities aur Linear Equations — Sign, Interval aur System Solve Karna',
      'Inequalities and Linear Equations — Signs, Intervals, and Solving Systems'
    ),
    summary: t(
      'Inequality ko equation ki tarah solve karna seekho: sign kab flip hota hai, interval kya hota hai, aur do equations wale system ko elimination se kaise solve karte hain — har step hand-check aur Python se verified.',
      'Learn to solve an inequality like an equation: when the sign flips, what an interval means, and how to solve a two-equation system by elimination — every step checked by hand and verified with Python.'
    ),
    sections: [
      {
        heading: t(
          '1. Inequality Kya Hai? (Sign, Interval aur Number Line)',
          '1. What Is an Inequality? (Sign, Interval, and Number Line)'
        ),
        body: t(
          `Equation mein dono side barabar hote hain, jaise \`2x + 6 = 20\`. Inequality mein barabar nahi, **chhota ya bada** hota hai — chaar signs hote hain: \`<\` (chhota), \`>\` (bada), \`<=\` (chhota ya barabar) aur \`>=\` (bada ya barabar). \`3x - 7 < 14\` ek inequality hai, aur iska jawab ek number nahi, ek **interval** hota hai — numbers ka ek poora set, jaise \`x < 7\` matlab 7 se chhote saare numbers. Number line par \`x < 7\` ko 7 par khaali circle aur uske left side ek arrow se dikhate hain, jabki \`x <= 7\` mein 7 par bhara hua circle hota hai kyunki 7 khud bhi included hai.

Inequality solve karne ka basic rule equation jaisa hi hai: dono side mein ek hi number jodo ya ghatao, dono side ko ek hi positive number se multiply ya divide karo — sign waisa ka waisa rehta hai. Sirf **ek rule alag hai, aur wahi sabse important hai**: jab aap dono side ko kisi **negative number** se multiply ya divide karte ho, toh inequality ka sign **flip** ho jaata hai. \`<\` ban jaata hai \`>\`, aur \`>=\` ban jaata hai \`<=\`. Yeh rule bhoolna hi is topic ki sabse badi galti hai, aur exam mein isi par sawaal aate hain.

Inequality ka matlab samajhne ke liye ek chhota test hamesha karo: jawab milne ke baad ek number interval ke andar se aur ek number bahar se lekar original inequality mein daal kar check karo. Agar \`x < 7\` aaya hai, toh \`x = 6\` daalo — \`3 x 6 - 7 = 11 < 14\` sahi hai — aur \`x = 7\` daalo — \`3 x 7 - 7 = 14\`, jo 14 se chhota nahi hai, isliye galat hai. Yeh do-second ka check galat sign ko turant pakad leta hai.`,
          `In an equation both sides are equal, like \`2x + 6 = 20\`. In an inequality they are not equal — one side is **smaller or bigger** — and there are four signs: \`<\` (less than), \`>\` (greater than), \`<=\` (less than or equal to), and \`>=\` (greater than or equal to). \`3x - 7 < 14\` is an inequality, and its answer is not one number but an **interval** — a whole set of numbers, such as \`x < 7\`, which means all numbers smaller than 7. On a number line, \`x < 7\` is shown with an open circle at 7 and an arrow to the left, while \`x <= 7\` uses a filled circle at 7 because 7 itself is included.

The basic rule for solving an inequality is the same as for an equation: add or subtract the same number on both sides, or multiply or divide both sides by the same positive number — the sign stays as it is. There is only **one different rule, and it is the most important one**: when you multiply or divide both sides by a **negative number**, the inequality sign **flips**. \`<\` becomes \`>\`, and \`>=\` becomes \`<=\`. Forgetting this rule is the biggest mistake in this topic, and exam questions are built around it.

To check that you understand an inequality, always run a small test: after finding the answer, take one number from inside the interval and one from outside it and put each into the original inequality. If you got \`x < 7\`, try \`x = 6\` — \`3 x 6 - 7 = 11 < 14\`, correct — and try \`x = 7\` — \`3 x 7 - 7 = 14\`, which is not less than 14, so it fails. This two-second check catches a wrong sign immediately.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Budget, Speed Limit aur Pass Marks',
          '2. Real-Life Examples: Budget, Speed Limit, and Pass Marks'
        ),
        body: t(
          `Inequality roz ki zindagi mein har jagah hai. Maan lo aapke paas shopping ke liye **₹500 se zyada kharch nahi** karna hai, aur ek shirt ₹300 ki hai. Toh doosri cheez par aap zyada se zyada \`500 - 300 = 300\` nahi, \`500 - 300 = 200\` kharch kar sakte ho — matlab doosri cheez ki price \`p <= 200\` honi chahiye. Yeh ek inequality hai jo aap bina soche roz use karte ho: budget hamesha "itne se zyada nahi" hota hai, "itna hi" nahi.

Doosra example hai **speed limit**. Highway par board likha hota hai "Speed limit 80 km/h" — matlab aapki speed \`v <= 80\` honi chahiye. 80 chalana allowed hai (kyunki sign \` <= \` hai, \` < \` nahi), 81 chalana challan hai. Exam mein aksar yahi farak poochha jaata hai: "at most 80" ka matlab \`v <= 80\` hai, "less than 80" ka matlab \`v < 80\` hai. Words ko sign mein badalna hi aadha sawaal hai — **at most** matlab \` <= \`, **at least** matlab \` >= \`, **more than** matlab \` > \` aur **less than** matlab \` < \`.

Teesra example hai **pass marks**. Agar pass hone ke liye 40 marks chahiye, toh \`marks >= 40\` pass hai aur \`marks < 40\` fail hai. Aur agar aapko 5 subjects mein total 200 marks chahiye aur 4 subjects mein aapke 150 marks aa gaye, toh paanchve subject mein \`marks >= 200 - 150 = 50\` chahiye. Yeh linear equation aur inequality ka mix hai — pehle equation se total nikalo, phir inequality se minimum nikalo.`,
          `Inequalities are everywhere in daily life. Suppose you must **not spend more than ₹500** on shopping, and one shirt costs ₹300. Then you can spend at most \`500 - 300 = 200\` on the second item — so the second item's price must satisfy \`p <= 200\`. That is an inequality you use every day without thinking: a budget is always "not more than this much", never "exactly this much".

A second example is a **speed limit**. A highway board says "Speed limit 80 km/h" — your speed must satisfy \`v <= 80\`. Driving at 80 is allowed (because the sign is \` <= \`, not \` < \`); driving at 81 gets a fine. Exams often test exactly this difference: "at most 80" means \`v <= 80\`, while "less than 80" means \`v < 80\`. Turning words into signs is half the question — **at most** means \` <= \`, **at least** means \` >= \`, **more than** means \` > \`, and **less than** means \` < \`.

A third example is **pass marks**. If you need 40 marks to pass, then \`marks >= 40\` is a pass and \`marks < 40\` is a fail. And if you need 200 marks in total across 5 subjects and you already have 150 in 4 subjects, then the fifth subject needs \`marks >= 200 - 150 = 50\`. This is a mix of a linear equation and an inequality — first use the equation to find the total, then use the inequality to find the minimum.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: 3x - 7 < 14 Solve Karna (Dry Run ke Saath)',
          '3. Step-by-Step: Solving 3x - 7 < 14 (with a Dry Run)'
        ),
        body: t(
          `Ab hum \`3x - 7 < 14\` ko step-by-step solve karte hain, bilkul equation ki tarah — bas sign ka dhyaan rakhna hai.
- **Step 1:** Dono side mein 7 jodo, taaki -7 khatm ho jaaye: \`3x - 7 + 7 < 14 + 7\` matlab \`3x < 21\`.
- **Step 2:** Dono side ko 3 se divide karo. 3 positive hai, isliye sign flip **nahi** hoga: \`x < 21 / 3\` matlab \`x < 7\`. Jawab hai \`x < 7\`.
- **Step 3 (dry run):** \`x = 6\` check karo: \`3 x 6 - 7 = 18 - 7 = 11\`, aur \`11 < 14\` sahi hai. \`x = 7\` check karo: \`3 x 7 - 7 = 21 - 7 = 14\`, aur \`14 < 14\` galat hai — isliye 7 included nahi hai. Jawab confirmed hai.

Doosra worked example: \`2x + 5 >= 13\`. Dono side se 5 ghatao: \`2x >= 8\`. Dono side ko 2 se divide karo (positive, no flip): \`x >= 4\`. Check: \`x = 4\` daalo toh \`2 x 4 + 5 = 13\`, aur \`13 >= 13\` sahi hai kyunki \` >= \` mein barabar allowed hai. \`x = 3\` daalo toh \`11 >= 13\` galat hai. Isliye interval \`x >= 4\` sahi hai. Neeche wala code dono inequalities ko solve karta hai aur dono check values ko test karta hai — output dekho, \`True\` aur \`False\` bilkul dry run jaisi aani chahiye.`,
          `Now let us solve \`3x - 7 < 14\` step by step, exactly like an equation — just watch the sign.
- **Step 1:** Add 7 to both sides to remove the -7: \`3x - 7 + 7 < 14 + 7\`, which means \`3x < 21\`.
- **Step 2:** Divide both sides by 3. Since 3 is positive, the sign does **not** flip: \`x < 21 / 3\`, which means \`x < 7\`. The answer is \`x < 7\`.
- **Step 3 (dry run):** Check \`x = 6\`: \`3 x 6 - 7 = 18 - 7 = 11\`, and \`11 < 14\` is true. Check \`x = 7\`: \`3 x 7 - 7 = 21 - 7 = 14\`, and \`14 < 14\` is false — so 7 is not included. The answer is confirmed.

A second worked example: \`2x + 5 >= 13\`. Subtract 5 from both sides: \`2x >= 8\`. Divide both sides by 2 (positive, no flip): \`x >= 4\`. Check: put \`x = 4\` to get \`2 x 4 + 5 = 13\`, and \`13 >= 13\` is true because \` >= \` allows equality. Put \`x = 3\` to get \`11 >= 13\`, which is false. So the interval \`x >= 4\` is correct. The code below solves both inequalities and tests both check values — the \`True\` and \`False\` in the output should match the dry run exactly.`
        ),
        code: {
          title: t(
            'Inequality Solve Karna aur Check Values Test Karna',
            'Solving Inequalities and Testing Check Values'
          ),
          language: 'python',
          code: `# 3x - 7 < 14  ->  3x < 21  ->  x < 7
# 2x + 5 >= 13 -> 2x >= 8  -> x >= 4
print("3x - 7 < 14  =>  x <", (14 + 7) / 3)
print("2x + 5 >= 13 =>  x >=", (13 - 5) / 2)
for x in [6, 7]:
    print("x =", x, ":", 3 * x - 7 < 14)`,
          output: `3x - 7 < 14  =>  x < 7.0
2x + 5 >= 13 =>  x >= 4.0
x = 6 : True
x = 7 : False`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Sign Flip Bhoolna aur Interval Galat Likhna',
          '4. Common Mistakes: Forgetting the Sign Flip and Writing the Interval Wrong'
        ),
        body: t(
          `Is topic mein chaar galtiyan baar-baar hoti hain. **Galti 1: negative se divide karke sign flip na karna.** \`-3x < 12\` ko solve karte waqt log likh dete hain \`x < -4\`, jo galat hai. -3 se divide karne par sign flip hota hai, isliye sahi jawab \`x > -4\` hai. Check karo: \`x = -3\` daalo toh \`-3 x -3 = 9 < 12\` sahi hai, aur -3, -4 se bada hai. Agar aapko \`x < -4\` mila hota, toh \`x = -5\` check karte — \`-3 x -5 = 15 < 12\` galat hai — aur galti pakdi jaati.

**Galti 2: \`<=\` aur \`<\` ka farak bhoolna.** \`x <= 7\` mein 7 included hai, \`x < 7\` mein nahi. Word problem mein "at most 7" ka matlab \`x <= 7\` hai. Agar aap \`x < 7\` likh doge toh 7 wala case galat ho jaayega. Hamesha pehle word ko sign mein badlo, phir solve karo.

**Galti 3: dono side ko ulta-pulta karna.** Inequality mein sirf wahi operation dono side par karo jo equation mein karte ho — ek side par kuchh karke doosri side bhool jaana sabse aam calculation galti hai. Har step ke baad dono side dobara likho.

**Galti 4: system solve karte waqt ek equation ko ignore karna.** Do equations, do unknowns — dono equations ko ek saath use karna hota hai. Sirf ek equation se do unknowns nahi nikalte. Elimination mein ek variable ko khatm karo, doosra nikalo, phir pehla wapas nikalo.`,
          `Four mistakes repeat again and again in this topic. **Mistake 1: dividing by a negative number without flipping the sign.** When solving \`-3x < 12\`, people write \`x < -4\`, which is wrong. Dividing by -3 flips the sign, so the correct answer is \`x > -4\`. Check it: put \`x = -3\` to get \`-3 x -3 = 9 < 12\`, which is true, and -3 is greater than -4. If you had got \`x < -4\`, checking \`x = -5\` would give \`-3 x -5 = 15 < 12\`, which is false — and the mistake would be caught.

**Mistake 2: forgetting the difference between \`<=\` and \`<\`.** In \`x <= 7\`, 7 is included; in \`x < 7\` it is not. In a word problem, "at most 7" means \`x <= 7\`. If you write \`x < 7\`, the case of 7 itself becomes wrong. Always convert the word into a sign first, then solve.

**Mistake 3: changing only one side.** In an inequality, do the same operation on both sides, just as in an equation — changing one side and forgetting the other is the most common calculation error. Rewrite both sides after every step.

**Mistake 4: ignoring one equation while solving a system.** Two equations and two unknowns must be used together. One equation alone cannot give two unknowns. In elimination, remove one variable, find the other, then find the first one back.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: x = 0, Negative x aur Dono Side Negative',
          '5. Edge Cases: x = 0, Negative x, and Both Sides Negative'
        ),
        body: t(
          `Edge cases woh hain jahan normal rule ulajh jaata hai. **Pehla: \`x = 0\` boundary par.** \`x > 0\` mein 0 included nahi hai, \`x >= 0\` mein included hai. Agar sawaal hai "positive number", toh \`x > 0\` likho; "non-negative number" ka matlab \`x >= 0\` hai — zero ko bhoolna mat.

**Doosra: negative x ke saath check.** \`-3x < 12\` ka jawab \`x > -4\` hai. Yahan interval -4 se bada hai, matlab -3, -2, -1, 0, 1... sab allowed hain. Beginners ko yeh ulta lagta hai kyunki original inequality mein -3 tha. Hamesha ek negative aur ek positive test value daal kar check karo — is example mein \`x = -3\` (True) aur \`x = -5\` (False) poora picture de dete hain.

**Teesra: dono side negative hon.** \`-2x > -8\` ko solve karo: -2 se divide karo, sign flip hoga, \`x < 4\`. Check: \`x = 3\` daalo toh \`-6 > -8\` sahi hai. Number line par negative numbers ulta behave karte hain — -6, -8 se bada hota hai — isliye flip ko yaad rakhna aur bhi zaroori ho jaata hai.

**Chautha: system mein ek hi solution.** \`2x + y = 10\` aur \`x - y = 2\` ko jodo: \`3x = 12\`, isliye \`x = 4\`, aur phir \`y = 10 - 2 x 4 = 2\`. Check: \`2 x 4 + 2 = 10\` sahi, \`4 - 2 = 2\` sahi. Agar dono equations ek hi line ko dikhayein (jaise \`x + y = 5\` aur \`2x + 2y = 10\`), toh infinite solutions hote hain — yeh edge case exam mein poochha jaata hai.`,
          `Edge cases are where the normal rule gets confusing. **First: \`x = 0\` on the boundary.** In \`x > 0\`, 0 is not included; in \`x >= 0\` it is. If the question says "positive number", write \`x > 0\`; "non-negative number" means \`x >= 0\` — do not forget zero.

**Second: checking with a negative x.** The answer to \`-3x < 12\` is \`x > -4\`. Here the interval is everything greater than -4, so -3, -2, -1, 0, 1... are all allowed. This feels backwards to beginners because the original inequality had a -3 in it. Always test one negative and one positive value — in this example \`x = -3\` (True) and \`x = -5\` (False) give the full picture.

**Third: both sides negative.** Solve \`-2x > -8\`: divide by -2, the sign flips, giving \`x < 4\`. Check: put \`x = 3\` to get \`-6 > -8\`, which is true. Negative numbers behave in reverse on the number line — -6 is greater than -8 — which is why remembering the flip matters even more here.

**Fourth: a system with exactly one solution.** Add \`2x + y = 10\` and \`x - y = 2\`: \`3x = 12\`, so \`x = 4\`, and then \`y = 10 - 2 x 4 = 2\`. Check: \`2 x 4 + 2 = 10\` is correct, and \`4 - 2 = 2\` is correct. If both equations describe the same line (like \`x + y = 5\` and \`2x + 2y = 10\`), there are infinite solutions — this edge case does appear in exams.`
        )
      },
      {
        heading: t(
          '6. What-If: Equation ki Jagah Inequality, aur Elimination ki Jagah Substitution',
          '6. What-If: Inequality Instead of an Equation, and Substitution Instead of Elimination'
        ),
        body: t(
          `**What if: \`=\` ki jagah \`<\` ho?** Equation \`3x - 7 = 14\` ka ek hi jawab hai: \`x = 7\`. Inequality \`3x - 7 < 14\` ka jawab poora interval hai: \`x < 7\`. Equation ek point deta hai, inequality ek range deta hai. Exam mein jab "kitne tareeke se" ya "maximum kitna" poochha jaaye, toh jawab aksar inequality se nikalta hai, equation se nahi.

**What if: elimination ki jagah substitution use karein?** System \`2x + y = 10\`, \`x - y = 2\` ko substitution se bhi solve kar sakte ho: doosri equation se \`y = x - 2\`, pehli mein daalo — \`2x + (x - 2) = 10\` matlab \`3x = 12\`, \`x = 4\`, \`y = 2\`. Wahi jawab, doosra rasta. Elimination tab fast hai jab ek variable ke coefficients barabar ya opposite hon (yahan \`+y\` aur \`-y\`); substitution tab fast hai jab ek variable pehle se akela ho (jaise \`y = 2x + 1\`).

**What if: sign flip ko bhool jaayein?** \`-3x < 12\` mein flip bhoole toh \`x < -4\` milega. Check karo: \`x = -5\` daalo toh \`-3 x -5 = 15\`, aur \`15 < 12\` galat hai. Ek hi check galti ko pakad leta hai — isliye check karna optional nahi, method ka hissa hai.

**What if: dono variables ko ek saath badhayein?** Agar \`x > 5\` aur \`y < 3\` hai, toh \`x - y > 5 - 3 = 2\` hota hai — kyunki x kam se kam 5 se bada hai aur y zyada se zyada 3 se chhota hai, isliye unka difference 2 se bada hi rahega. Inequalities ko jodna-ghatana bhi exam mein aata hai: add karte waqt sign same rehta hai, subtract karte waqt doosri inequality ko flip karke add karte hain.`,
          `**What if \`=\` becomes \`<\`?** The equation \`3x - 7 = 14\` has exactly one answer: \`x = 7\`. The inequality \`3x - 7 < 14\` has a whole interval as its answer: \`x < 7\`. An equation gives one point; an inequality gives a range. In exams, when the question asks "in how many ways" or "what is the maximum", the answer usually comes from an inequality, not an equation.

**What if we use substitution instead of elimination?** The system \`2x + y = 10\`, \`x - y = 2\` can also be solved by substitution: from the second equation \`y = x - 2\`; put it in the first — \`2x + (x - 2) = 10\`, so \`3x = 12\`, \`x = 4\`, \`y = 2\`. The same answer by a different route. Elimination is faster when one variable has equal or opposite coefficients (here \`+y\` and \`-y\`); substitution is faster when one variable is already alone (like \`y = 2x + 1\`).

**What if we forget the sign flip?** In \`-3x < 12\`, forgetting the flip gives \`x < -4\`. Check it: put \`x = -5\` to get \`-3 x -5 = 15\`, and \`15 < 12\` is false. A single check catches the mistake — so checking is not optional, it is part of the method.

**What if both variables change together?** If \`x > 5\` and \`y < 3\`, then \`x - y > 5 - 3 = 2\` — because x is at least more than 5 and y is at most less than 3, so their difference must stay above 2. Adding and subtracting inequalities also appears in exams: when adding, the sign stays the same; when subtracting, flip the second inequality and add.`
        )
      },
      {
        heading: t(
          '7. Summary: Sign Flip, Check aur System — Teen Cheezein Yaad Rakho',
          '7. Summary: Sign Flip, Check, and System — Remember Three Things'
        ),
        body: t(
          `Poora article teen baaton mein bandhta hai. **Pehli:** inequality equation jaisi hi solve hoti hai, bas negative number se multiply ya divide karne par sign **flip** hota hai — \`-3x < 12\` ka jawab \`x > -4\` hai, \`x < -4\` nahi. **Doosri:** jawab ek interval hota hai, ek number nahi — \`x < 7\` matlab 7 se chhote saare numbers, aur \`x <= 7\` mein 7 bhi included hai. Words ko sign mein badalna seekho: **at most** matlab \` <= \`, **at least** matlab \` >= \`.

**Teesri:** jawab milne ke baad hamesha **check** karo — interval ke andar se ek number aur bahar se ek number lekar original inequality mein daalo. \`x = 6\` ne \`3x - 7 < 14\` ko True kiya aur \`x = 7\` ne False — yahi check galat sign ko pakadta hai. Aur system ke liye: do equations, do unknowns — elimination se ek variable khatm karo, jaise \`2x + y = 10\` aur \`x - y = 2\` se \`x = 4, y = 2\` mila, aur dono equations mein wapas daal kar verify karo.

Revision ke liye yeh teen sawaal khud se karo: \`5x - 3 > 17\` (jawab \`x > 4\`), \`-2x >= 10\` (jawab \`x <= -5\`), aur system \`x + y = 12, x - y = 4\` (jawab \`x = 8, y = 4\`). Agar teeno bina ruke ho jaayein, toh inequalities aapko aa gayi hain.`,
          `The whole article comes down to three points. **First:** an inequality is solved just like an equation, except that multiplying or dividing by a negative number **flips** the sign — the answer to \`-3x < 12\` is \`x > -4\`, not \`x < -4\`. **Second:** the answer is an interval, not one number — \`x < 7\` means all numbers smaller than 7, and \`x <= 7\` also includes 7. Learn to turn words into signs: **at most** means \` <= \`, and **at least** means \` >= \`.

**Third:** always **check** after finding the answer — take one number from inside the interval and one from outside it and put each into the original inequality. \`x = 6\` made \`3x - 7 < 14\` True and \`x = 7\` made it False — that check is what catches a wrong sign. And for a system: two equations, two unknowns — use elimination to remove one variable, as in \`2x + y = 10\` and \`x - y = 2\` giving \`x = 4, y = 2\`, then verify by putting both values back into both equations.

For revision, try these three questions yourself: \`5x - 3 > 17\` (answer \`x > 4\`), \`-2x >= 10\` (answer \`x <= -5\`), and the system \`x + y = 12, x - y = 4\` (answer \`x = 8, y = 4\`). If all three go smoothly, you know inequalities.`
        )
      }
    ],
    diagram: {
      kind: 'flow',
      title: t(
        'Inequality Solve Karne ke Steps',
        'Steps to Solve an Inequality'
      ),
      caption: t(
        'Har step ke baad check karo — sign flip sirf negative se divide karne par hota hai',
        'Check after every step — the sign flips only when dividing by a negative number'
      ),
      nodes: [
        {
          t: t('Step 1: Constant hatayo', 'Step 1: Remove the constant'),
          s: t('Dono side mein 7 jodo: 3x < 21', 'Add 7 to both sides: 3x < 21')
        },
        {
          t: t('Step 2: Coefficient se divide karo', 'Step 2: Divide by the coefficient'),
          s: t('3 positive hai, sign flip nahi: x < 7', '3 is positive, so no sign flip: x < 7')
        },
        {
          t: t('Step 3: Check karo', 'Step 3: Check the answer'),
          s: t('x = 6 True, x = 7 False — jawab sahi hai', 'x = 6 is True, x = 7 is False — the answer is correct')
        },
        {
          t: t('Negative rule: sign flip', 'Negative rule: flip the sign'),
          s: t('-3x < 12 ka jawab x > -4 hai', 'The answer to -3x < 12 is x > -4')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          'System Solve Karna: 2x + y = 10, x - y = 2',
          'Solving a System: 2x + y = 10, x - y = 2'
        ),
        language: 'python',
        code: `# 2x + y = 10 and x - y = 2  ->  add: 3x = 12
x = (10 + 2) / 3
y = 10 - 2 * x
print("x =", x)
print("y =", y)
print("check 1:", 2 * x + y == 10)
print("check 2:", x - y == 2)`,
        output: `x = 4.0
y = 2.0
check 1: True
check 2: True`
      },
      {
        title: t(
          'Sign Flip: -3x < 12 ka Dry Run',
          'Sign Flip: Dry Run of -3x < 12'
        ),
        language: 'python',
        code: `# -3x < 12  ->  divide by -3, sign flips  ->  x > -4
print("x >", 12 / -3)
for x in [-5, -4, -3]:
    print("x =", x, ":", -3 * x < 12)`,
        output: `x > -4.0
x = -5 : False
x = -4 : False
x = -3 : True`
      }
    ],
    mcqs: [
      {
        q: t(
          '5x - 3 > 17 ko solve karo. x kya hoga?',
          'Solve 5x - 3 > 17. What is x?'
        ),
        opts: [
          t('x > 4', 'x > 4'),
          t('x < 4', 'x < 4'),
          t('x > 3', 'x > 3'),
          t('x < 5', 'x < 5')
        ],
        ans: 0,
        expl: t(
          'Sahi jawab: dono side mein 3 jodo — 5x > 20 — phir 5 se divide karo (positive, no flip) — x > 4.',
          'Correct answer: add 3 to both sides — 5x > 20 — then divide by 5 (positive, no flip) — x > 4.'
        )
      },
      {
        q: t(
          '2x + 3 <= 11 ka jawab kya hai?',
          'What is the answer to 2x + 3 <= 11?'
        ),
        opts: [
          t('x >= 4', 'x >= 4'),
          t('x <= 4', 'x <= 4'),
          t('x < 3', 'x < 3'),
          t('x > 4', 'x > 4')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 3 ghatao — 2x <= 8 — phir 2 se divide karo — x <= 4. Check: x = 4 daalo toh 11 <= 11 sahi hai.',
          'Correct answer: subtract 3 — 2x <= 8 — then divide by 2 — x <= 4. Check: putting x = 4 gives 11 <= 11, which is true.'
        )
      },
      {
        q: t(
          '-3x < 12 ka sahi jawab kya hai?',
          'What is the correct answer to -3x < 12?'
        ),
        opts: [
          t('x < -4', 'x < -4'),
          t('x > -4', 'x > -4'),
          t('x < 4', 'x < 4'),
          t('x > 4', 'x > 4')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: -3 se divide karne par sign flip hota hai, isliye < ban jaata hai > — x > -4. Check: x = -3 daalo toh 9 < 12 sahi hai.',
          'Correct answer: dividing by -3 flips the sign, so < becomes > — x > -4. Check: putting x = -3 gives 9 < 12, which is true.'
        )
      },
      {
        q: t(
          'Agar x > 5 aur y < 3 hai, toh x - y ke baare mein kya sahi hai?',
          'If x > 5 and y < 3, what is true about x - y?'
        ),
        opts: [
          t('x - y < 2', 'x - y < 2'),
          t('x - y > 2', 'x - y > 2'),
          t('x - y = 2', 'x - y = 2'),
          t('x - y <= 2', 'x - y <= 2')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: x kam se kam 5 se bada hai aur y zyada se zyada 3 se chhota hai, isliye unka difference 5 - 3 = 2 se bada hi rahega — x - y > 2.',
          'Correct answer: x is at least more than 5 and y is at most less than 3, so their difference must stay above 5 - 3 = 2 — x - y > 2.'
        )
      },
      {
        q: t(
          'System x + y = 12 aur x - y = 4 ka solution kya hai?',
          'What is the solution of the system x + y = 12 and x - y = 4?'
        ),
        opts: [
          t('x = 6, y = 6', 'x = 6, y = 6'),
          t('x = 4, y = 8', 'x = 4, y = 8'),
          t('x = 8, y = 4', 'x = 8, y = 4'),
          t('x = 10, y = 2', 'x = 10, y = 2')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: dono equations jodo — 2x = 16, isliye x = 8 — phir y = 12 - 8 = 4. Check: 8 + 4 = 12 aur 8 - 4 = 4.',
          'Correct answer: add both equations — 2x = 16, so x = 8 — then y = 12 - 8 = 4. Check: 8 + 4 = 12 and 8 - 4 = 4.'
        )
      }
    ],
    keyNotes: [
      t(
        'Negative number se multiply ya divide karne par inequality ka sign flip hota hai.',
        'Multiplying or dividing by a negative number flips the inequality sign.'
      ),
      t(
        'Inequality ka jawab ek interval hota hai — x < 7 matlab 7 se chhote saare numbers.',
        'The answer to an inequality is an interval — x < 7 means all numbers smaller than 7.'
      ),
      t(
        'At most matlab <=, at least matlab >= — words ko pehle sign mein badlo.',
        'At most means <= and at least means >= — convert the words into a sign first.'
      ),
      t(
        'Jawab milne ke baad andar se ek aur bahar se ek number daal kar hamesha check karo.',
        'After finding the answer, always check with one number from inside and one from outside the interval.'
      ),
      t(
        'System mein elimination se ek variable khatm karo, phir doosra nikalo aur dono equations mein verify karo.',
        'In a system, use elimination to remove one variable, find the other, and verify in both equations.'
      )
    ],
    practice: {
      title: t(
        'Practice: 4x - 9 <= 15 Solve Karo aur Check Karo',
        'Practice: Solve 4x - 9 <= 15 and Check It'
      ),
      task: t(
        '4x - 9 <= 15 ko step-by-step solve karo: pehle 9 jodo, phir 4 se divide karo, aur phir x = 5, 6 aur 7 daal kar check karo. Starter code run karo — expected output mein x <= 6.0 aana chahiye, aur x = 5 aur x = 6 True, x = 7 False aana chahiye.',
        'Solve 4x - 9 <= 15 step by step: first add 9, then divide by 4, then check with x = 5, 6, and 7. Run the starter code — the expected output should show x <= 6.0, with x = 5 and x = 6 True and x = 7 False.'
      ),
      language: 'python',
      starter: `# Solve 4x - 9 <= 15  ->  4x <= 24  ->  x <= 6
print("x <=", (15 + 9) / 4)
for x in [5, 6, 7]:
    print("x =", x, ":", 4 * x - 9 <= 15)`,
      expected: `x <= 6.0
x = 5 : True
x = 6 : True
x = 7 : False`
    },
    readMinutes: 12
  };

const quantSurdsIndices: Article = {
    id: 'quant-surds-indices',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Surds aur Indices — Root Simplify Karna aur Power ke Rules',
      'Surds and Indices — Simplifying Roots and the Rules of Powers'
    ),
    summary: t(
      'Surd ko simple form mein laana seekho: perfect square nikaal kar root ke bahar lao, indices ke paanch rules se badi powers ko chhota karo — har simplification hand-check aur Python se verified.',
      'Learn to bring a surd into simple form: pull the perfect square out of the root, and shrink big powers with the five rules of indices — every simplification checked by hand and verified with Python.'
    ),
    sections: [
      {
        heading: t(
          '1. Surd aur Index Kya Hai? (Root aur Power ka Matlab)',
          '1. What Are a Surd and an Index? (What Root and Power Mean)'
        ),
        body: t(
          `**Surd** woh square root hota hai jo poora number nahi ban sakta — jaise \`√2 = 1.414...\`, jo kabhi khatm nahi hota aur repeat nahi karta. \`√9 = 3\` surd nahi hai kyunki woh poora number hai, par \`√50\` surd hai kyunki uska exact value decimal mein khatm nahi hota. Exam mein surd ko decimal mein badalne ki jagah **simplest form** mein likhna hota hai: \`√50 = √(25 x 2) = 5√2\`. Yeh form exact hota hai — decimal approximate hota hai.

**Index** (power) ka matlab hai ek number ko khud se kitni baar multiply karna: \`2^5 = 2 x 2 x 2 x 2 x 2 = 32\`. Yahan 2 **base** hai aur 5 **index** (ya exponent) hai. Indices ke paanch rules poora topic chalate hain: **(1)** \`a^m x a^n = a^(m+n)\` — same base multiply karo toh powers add hoti hain; **(2)** \`a^m / a^n = a^(m-n)\` — divide karo toh powers subtract hoti hain; **(3)** \`(a^m)^n = a^(m x n)\` — power ki power mein powers multiply hoti hain; **(4)** \`a^0 = 1\` — kisi bhi number ki power 0 ek hoti hai; **(5)** \`a^(-n) = 1 / a^n\` — negative power matlab reciprocal.

Surd aur index ek hi cheez ke do roop hain: \`√a = a^(1/2)\` aur \`a^(1/n)\` matlab a ka n-th root. Isliye \`16^(1/4) = 2\` kyunki \`2^4 = 16\`. Yeh connection samajh lo toh dono topics ek saath aasaan ho jaate hain — root wale sawaal ko power wale rule se solve kar sakte ho.`,
          `A **surd** is a square root that cannot become a whole number — like \`√2 = 1.414...\`, which never ends and never repeats. \`√9 = 3\` is not a surd because it is a whole number, but \`√50\` is a surd because its exact value never ends as a decimal. In exams, instead of turning a surd into a decimal, you write it in **simplest form**: \`√50 = √(25 x 2) = 5√2\`. This form is exact — a decimal is only approximate.

An **index** (power) means multiplying a number by itself a certain number of times: \`2^5 = 2 x 2 x 2 x 2 x 2 = 32\`. Here 2 is the **base** and 5 is the **index** (or exponent). Five rules of indices run the whole topic: **(1)** \`a^m x a^n = a^(m+n)\` — when multiplying the same base, add the powers; **(2)** \`a^m / a^n = a^(m-n)\` — when dividing, subtract the powers; **(3)** \`(a^m)^n = a^(m x n)\` — a power of a power multiplies the powers; **(4)** \`a^0 = 1\` — any number to the power 0 is one; **(5)** \`a^(-n) = 1 / a^n\` — a negative power means the reciprocal.

A surd and an index are two forms of the same thing: \`√a = a^(1/2)\` and \`a^(1/n)\` means the n-th root of a. So \`16^(1/4) = 2\` because \`2^4 = 16\`. Once you see this connection, both topics become easy together — a root question can be solved with a power rule.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Square Plot, Compound Growth aur Half-Life',
          '2. Real-Life Examples: Square Plot, Compound Growth, and Half-Life'
        ),
        body: t(
          `Surd ka sabse seedha real-life example hai **square plot**. Agar ek square plot ka area 50 square metre hai, toh uski ek side \`√50 = 5√2 ≈ 7.07\` metre hogi. Builder ko exact side chahiye hoti hai, isliye woh \`5√2\` likhta hai, 7.07 nahi — kyunki 7.07 ko square karne par 49.98 aata hai, 50 nahi. Exact form hi sahi measurement deta hai.

Indices ka real-life example hai **compound growth**. Agar aapke paise har saal 5% badhte hain, toh 2 saal baad amount \`P x (1.05)^2\` hota hai — yahan power 2 do saal dikhata hai. Population wale sawaal mein bhi yahi formula chalta hai: 80,000 ki population 5% saalana badhe toh 2 saal baad \`80000 x 1.05^2 = 88,200\` ho jaati hai. Power ka matlab hai "yeh process kitni baar repeat hua".

Teesra example hai **half-life**. Agar koi cheez har ghante aadhi reh jaati hai, toh 3 ghante baad uska hissa \`(1/2)^3 = 1/8\` reh jaata hai. Negative index bhi yahin aata hai: \`2^(-3) = 1 / 2^3 = 1/8 = 0.125\`. Exam mein indices ke sawaal aksar isi tarah chhupa kar aate hain — "aadha, phir aadha, phir aadha" matlab power 3 hai.`,
          `The simplest real-life example of a surd is a **square plot**. If a square plot has an area of 50 square metres, one side is \`√50 = 5√2 ≈ 7.07\` metres. A builder needs the exact side, so they write \`5√2\`, not 7.07 — because squaring 7.07 gives 49.98, not 50. Only the exact form gives the correct measurement.

A real-life example of indices is **compound growth**. If your money grows by 5% every year, the amount after 2 years is \`P x (1.05)^2\` — the power 2 shows the two years. The same formula runs population questions: a population of 80,000 growing at 5% a year becomes \`80000 x 1.05^2 = 88,200\` after 2 years. The power means "how many times this process repeated".

A third example is **half-life**. If something halves every hour, then after 3 hours only \`(1/2)^3 = 1/8\` of it remains. A negative index appears here too: \`2^(-3) = 1 / 2^3 = 1/8 = 0.125\`. In exams, indices questions are often hidden this way — "half, then half, then half" means a power of 3.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: √50 + √18 Simplify Karna (Dry Run ke Saath)',
          '3. Step-by-Step: Simplifying √50 + √18 (with a Dry Run)'
        ),
        body: t(
          `Ab hum \`√50 + √18\` ko step-by-step simplify karte hain. Rule hai: root ke andar se **sabse bada perfect square** nikaalo aur use root ke bahar lao.
- **Step 1:** \`√50\` ko todo: \`50 = 25 x 2\`, aur 25 perfect square hai (\`5^2\`). Isliye \`√50 = √25 x √2 = 5√2\`.
- **Step 2:** \`√18\` ko todo: \`18 = 9 x 2\`, aur 9 perfect square hai (\`3^2\`). Isliye \`√18 = √9 x √2 = 3√2\`.
- **Step 3:** Ab dono ka surd part ek jaisa hai (\`√2\`), isliye add kar sakte ho: \`5√2 + 3√2 = 8√2\`. Value check: \`8 x 1.414 = 11.31\`.

**Dry run (Python se):** \`√50 = 7.071\`, \`√18 = 4.243\`, dono ka sum \`11.314\`, aur \`8√2 = 11.314\` — dono barabar, isliye simplification sahi hai. Yaad rakho: surd add tabhi kar sakte ho jab unka root part ek jaisa ho. \`√2 + √3\` ko aur simplify nahi kar sakte — woh waisa ka waisa rehta hai.

Indices ka worked example: \`2^5 x 2^3\`. Same base 2 hai, isliye powers add karo: \`2^(5+3) = 2^8 = 256\`. Aur \`(3^4)^(1/2)\`: power ki power mein powers multiply hoti hain — \`3^(4 x 1/2) = 3^2 = 9\`. Dono answers neeche wale code mein verify hain.`,
          `Now let us simplify \`√50 + √18\` step by step. The rule is: pull the **largest perfect square** out of the root.
- **Step 1:** Break up \`√50\`: \`50 = 25 x 2\`, and 25 is a perfect square (\`5^2\`). So \`√50 = √25 x √2 = 5√2\`.
- **Step 2:** Break up \`√18\`: \`18 = 9 x 2\`, and 9 is a perfect square (\`3^2\`). So \`√18 = √9 x √2 = 3√2\`.
- **Step 3:** Now both have the same surd part (\`√2\`), so they can be added: \`5√2 + 3√2 = 8√2\`. Value check: \`8 x 1.414 = 11.31\`.

**Dry run (with Python):** \`√50 = 7.071\`, \`√18 = 4.243\`, their sum is \`11.314\`, and \`8√2 = 11.314\` — both equal, so the simplification is correct. Remember: surds can be added only when their root part is the same. \`√2 + √3\` cannot be simplified further — it stays as it is.

A worked example with indices: \`2^5 x 2^3\`. The base 2 is the same, so add the powers: \`2^(5+3) = 2^8 = 256\`. And \`(3^4)^(1/2)\`: a power of a power multiplies the powers — \`3^(4 x 1/2) = 3^2 = 9\`. Both answers are verified in the code below.`
        ),
        code: {
          title: t(
            'Surd Simplify Karna aur Power Rules Check Karna',
            'Simplifying Surds and Checking Power Rules'
          ),
          language: 'python',
          code: `import math
print("sqrt(50) =", math.sqrt(50))
print("sqrt(18) =", math.sqrt(18))
print("sqrt(50) + sqrt(18) =", math.sqrt(50) + math.sqrt(18))
print("8 * sqrt(2) =", 8 * math.sqrt(2))
print("2^5 * 2^3 =", 2 ** 5 * 2 ** 3)
print("(3^4)^(1/2) =", (3 ** 4) ** 0.5)`,
          output: `sqrt(50) = 7.0710678118654755
sqrt(18) = 4.242640687119285
sqrt(50) + sqrt(18) = 11.31370849898476
8 * sqrt(2) = 11.313708498984761
2^5 * 2^3 = 256
(3^4)^(1/2) = 9.0`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: √a + √b, Power Add karna aur (a^m)^n',
          '4. Common Mistakes: √a + √b, Adding Powers, and (a^m)^n'
        ),
        body: t(
          `Is topic mein chaar galtiyan sabse zyada hoti hain. **Galti 1: \`√a + √b = √(a+b)\` samajh lena.** Yeh bilkul galat hai — \`√9 + √16 = 3 + 4 = 7\` hota hai, jabki \`√(9+16) = √25 = 5\` hota hai. 7 aur 5 barabar nahi hain. Root ke andar add karne se pehle har root ko alag se solve karo.

**Galti 2: multiply karte waqt powers ko multiply kar dena.** \`2^5 x 2^3\` mein log aksar \`2^15\` likh dete hain — galat hai. Same base multiply karne par powers **add** hoti hain: \`2^8 = 256\`. Powers multiply tabhi hoti hain jab power ki power ho: \`(2^3)^2 = 2^6 = 64\`.

**Galti 3: \`a^0 = 0\` likhna.** Kisi bhi non-zero number ki power 0 hoti hai **1**, 0 nahi. \`5^0 = 1\`, \`100^0 = 1\`. Sirf \`0^0\` undefined hota hai, jo exam mein nahi aata.

**Galti 4: negative power ko negative number samajhna.** \`5^(-2)\` ka matlab \`-25\` nahi hai — iska matlab \`1 / 5^2 = 1/25 = 0.04\` hai. Negative power hamesha positive fraction deta hai. Sign power ka nahi, reciprocal ka hota hai.`,
          `Four mistakes are most common in this topic. **Mistake 1: thinking \`√a + √b = √(a+b)\`.** This is completely wrong — \`√9 + √16 = 3 + 4 = 7\`, while \`√(9+16) = √25 = 5\`. 7 and 5 are not equal. Solve each root separately before adding anything inside a root.

**Mistake 2: multiplying the powers when multiplying.** In \`2^5 x 2^3\`, people often write \`2^15\` — wrong. When multiplying the same base, the powers **add**: \`2^8 = 256\`. Powers multiply only for a power of a power: \`(2^3)^2 = 2^6 = 64\`.

**Mistake 3: writing \`a^0 = 0\`.** Any non-zero number to the power 0 is **1**, not 0. \`5^0 = 1\` and \`100^0 = 1\`. Only \`0^0\` is undefined, and that does not appear in exams.

**Mistake 4: treating a negative power as a negative number.** \`5^(-2)\` does not mean \`-25\` — it means \`1 / 5^2 = 1/25 = 0.04\`. A negative power always gives a positive fraction. The sign belongs to the reciprocal, not to the value.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: √0, √1, Negative Base aur Fractional Power',
          '5. Edge Cases: √0, √1, Negative Base, and Fractional Power'
        ),
        body: t(
          `Edge cases yaad rakho, kyunki yahi exam mein phansate hain. **Pehla: \`√0 = 0\` aur \`√1 = 1\`.** Dono perfect hain, surd nahi hain. Agar simplification mein root ke andar 0 ya 1 bache, toh woh wahin khatm ho jaata hai.

**Doosra: negative base ki power.** \`(-2)^3 = -8\` hota hai kyunki odd power sign ko negative rakhti hai, par \`(-2)^4 = 16\` hota hai kyunki even power sign ko positive bana deti hai. Bracket bhoolna mat: \`-2^4 = -16\` hota hai kyunki bracket ke bina power sirf 2 par lagti hai, minus par nahi.

**Teesra: fractional power.** \`8^(1/3) = 2\` kyunki \`2^3 = 8\`. Aur \`4^(3/2) = (√4)^3 = 2^3 = 8\`. Fractional power ko do steps mein todo: pehle root nikalo, phir power lagao — ya ulta, jo aasaan lage.

**Chautha: root ke andar perfect square chhupa hona.** \`√72\` dekh kar log atak jaate hain, par \`72 = 36 x 2\` hai, isliye \`√72 = 6√2\`. Hamesha sabse bada perfect square dhoondho — 72 mein 4 bhi hai aur 9 bhi, par 36 sabse bada hai, isliye wahi use karo. Agar chhota square use karoge toh answer adhoora reh jaayega: \`√72 = 2√18\` galat nahi hai, par simplest form nahi hai.`,
          `Remember these edge cases, because they are the exam traps. **First: \`√0 = 0\` and \`√1 = 1\`.** Both are exact, not surds. If 0 or 1 is left inside a root during simplification, it ends right there.

**Second: a negative base raised to a power.** \`(-2)^3 = -8\` because an odd power keeps the sign negative, but \`(-2)^4 = 16\` because an even power makes the sign positive. Do not forget the brackets: \`-2^4 = -16\` because without brackets the power applies only to 2, not to the minus.

**Third: a fractional power.** \`8^(1/3) = 2\` because \`2^3 = 8\`. And \`4^(3/2) = (√4)^3 = 2^3 = 8\`. Split a fractional power into two steps: take the root first, then apply the power — or the other way round, whichever is easier.

**Fourth: a perfect square hidden inside the root.** People get stuck on \`√72\`, but \`72 = 36 x 2\`, so \`√72 = 6√2\`. Always find the largest perfect square — 72 contains 4 and 9, but 36 is the largest, so use that. If you use a smaller square, the answer stays incomplete: \`√72 = 2√18\` is not wrong, but it is not the simplest form.`
        )
      },
      {
        heading: t(
          '6. What-If: Decimal ki Jagah Surd, aur Base Alag Ho Toh?',
          '6. What-If: Surd Instead of a Decimal, and What If the Base Is Different?'
        ),
        body: t(
          `**What if: decimal use kar lein?** \`√50\` ko 7.07 likhna approximate hai — aage multiply karne par error badhta jaata hai. \`5√2\` exact hai: \`5√2 x 5√2 = 25 x 2 = 50\` bilkul sahi aata hai, jabki \`7.07 x 7.07 = 49.98\` aata hai. Exam mein exact form maanga jaata hai, isliye surd ko surd hi rakho.

**What if: base alag ho?** \`2^3 x 3^3\` mein powers add nahi kar sakte kyunki base alag hai. Iska jawab hai \`8 x 27 = 216\`. Par ek trick hai: agar powers barabar hon, toh base multiply kar sakte ho — \`2^3 x 3^3 = (2 x 3)^3 = 6^3 = 216\`. Wahi jawab, fast rasta.

**What if: divide karte waqt power badi ho?** \`2^3 / 2^5 = 2^(3-5) = 2^(-2) = 1/4\`. Negative power aana normal hai — iska matlab hai answer 1 se chhota hai. \`8 / 32 = 0.25\` check karo: \`1/4 = 0.25\` sahi hai.

**What if: surd ko rationalise karna ho?** \`1/√2\` ko exam mein aise nahi chhodte — upar-neeche \`√2\` se multiply karo: \`√2/2\`. Isse denominator se root khatm ho jaata hai. Yeh step advanced hai, par "simplify" wale sawaal mein aksar chahiye hota hai.`,
          `**What if we use a decimal instead?** Writing \`√50\` as 7.07 is approximate — the error grows when you multiply further. \`5√2\` is exact: \`5√2 x 5√2 = 25 x 2 = 50\` comes out exactly right, while \`7.07 x 7.07 = 49.98\`. Exams ask for the exact form, so keep a surd as a surd.

**What if the base is different?** In \`2^3 x 3^3\` you cannot add the powers because the bases differ. The answer is \`8 x 27 = 216\`. But there is a trick: when the powers are equal, you can multiply the bases — \`2^3 x 3^3 = (2 x 3)^3 = 6^3 = 216\`. The same answer, by a faster route.

**What if the power becomes negative while dividing?** \`2^3 / 2^5 = 2^(3-5) = 2^(-2) = 1/4\`. A negative power is normal — it means the answer is smaller than 1. Check: \`8 / 32 = 0.25\`, and \`1/4 = 0.25\` is correct.

**What if a surd must be rationalised?** \`1/√2\` is not left like that in an exam — multiply top and bottom by \`√2\` to get \`√2/2\`. This removes the root from the denominator. This step is advanced, but "simplify" questions often need it.`
        )
      },
      {
        heading: t(
          '7. Summary: Perfect Square, Paach Rules aur Exact Form',
          '7. Summary: Perfect Square, Five Rules, and Exact Form'
        ),
        body: t(
          `Poora article teen baaton mein bandhta hai. **Pehli:** surd simplify karne ke liye root ke andar se sabse bada **perfect square** nikaalo — \`√50 = 5√2\`, \`√18 = 3√2\`, isliye \`√50 + √18 = 8√2\`. Surd tabhi add karo jab root part ek jaisa ho. **Doosri:** indices ke paanch rules — multiply par powers add, divide par subtract, power ki power par multiply, \`a^0 = 1\`, aur \`a^(-n) = 1/a^n\`. \`2^5 x 2^3 = 2^8 = 256\` inhi rules se aata hai.

**Teesri:** surd ko decimal mein mat badlo — **exact form** rakho, kyunki decimal approximate hota hai aur error badhata hai. Aur \`√a + √b\` kabhi \`√(a+b)\` nahi hota — yeh galti sabse zyada marks khaati hai. Revision ke liye khud se karo: \`√75\` (jawab \`5√3\`), \`√12 + √27\` (jawab \`5√3\`), \`3^4 x 3^(-2)\` (jawab 9), aur \`16^(1/4)\` (jawab 2). Agar chaaro bina ruke ho jaayein, toh surds aur indices aapko aa gaye hain.`,
          `The whole article comes down to three points. **First:** to simplify a surd, pull the largest **perfect square** out of the root — \`√50 = 5√2\` and \`√18 = 3√2\`, so \`√50 + √18 = 8√2\`. Add surds only when the root part is the same. **Second:** the five rules of indices — add powers when multiplying, subtract when dividing, multiply for a power of a power, \`a^0 = 1\`, and \`a^(-n) = 1/a^n\`. \`2^5 x 2^3 = 2^8 = 256\` comes from these rules.

**Third:** do not turn a surd into a decimal — keep the **exact form**, because a decimal is approximate and the error grows. And \`√a + √b\` is never \`√(a+b)\` — that mistake costs the most marks. For revision, try these yourself: \`√75\` (answer \`5√3\`), \`√12 + √27\` (answer \`5√3\`), \`3^4 x 3^(-2)\` (answer 9), and \`16^(1/4)\` (answer 2). If all four go smoothly, you know surds and indices.`
        )
      }
    ],
    diagram: {
      kind: 'boxes',
      title: t(
        'Surd Simplify Karne ka Flow: √50 + √18',
        'Flow for Simplifying a Surd: √50 + √18'
      ),
      caption: t(
        'Sabse bada perfect square nikaalo, root ke bahar lao, phir same surd wale terms add karo',
        'Pull out the largest perfect square, bring it outside the root, then add terms with the same surd'
      ),
      nodes: [
        {
          t: t('√50 = √(25 x 2) = 5√2', '√50 = √(25 x 2) = 5√2'),
          s: t('25 sabse bada perfect square hai', '25 is the largest perfect square')
        },
        {
          t: t('√18 = √(9 x 2) = 3√2', '√18 = √(9 x 2) = 3√2'),
          s: t('9 sabse bada perfect square hai', '9 is the largest perfect square')
        },
        {
          t: t('5√2 + 3√2 = 8√2', '5√2 + 3√2 = 8√2'),
          s: t('Root part ek jaisa hai, isliye add ho sakta hai', 'The root part is the same, so they can be added')
        },
        {
          t: t('Check: 8 x 1.414 = 11.31', 'Check: 8 x 1.414 = 11.31'),
          s: t('√50 + √18 bhi lagbhag 11.31 hota hai', '√50 + √18 is also about 11.31')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          '√72 aur Negative Power Check Karna',
          'Checking √72 and a Negative Power'
        ),
        language: 'python',
        code: `import math
print("sqrt(72) =", math.sqrt(72))
print("6 * sqrt(2) =", 6 * math.sqrt(2))
print("(2^3)^2 =", (2 ** 3) ** 2)
print("5^-2 =", 5 ** -2)
print("16^(1/4) =", 16 ** 0.25)`,
        output: `sqrt(72) = 8.48528137423857
6 * sqrt(2) = 8.485281374238571
(2^3)^2 = 64
5^-2 = 0.04
16^(1/4) = 2.0`
      },
      {
        title: t(
          '√75, √12 + √27 aur Power Rules',
          '√75, √12 + √27, and Power Rules'
        ),
        language: 'python',
        code: `import math
print("sqrt(75) =", math.sqrt(75))
print("5 * sqrt(3) =", 5 * math.sqrt(3))
print("sqrt(12) + sqrt(27) =", math.sqrt(12) + math.sqrt(27))
print("2^5 / 2^2 =", 2 ** 5 / 2 ** 2)
print("3^4 * 3^-2 =", 3 ** 4 * 3 ** -2)`,
        output: `sqrt(75) = 8.660254037844387
5 * sqrt(3) = 8.660254037844386
sqrt(12) + sqrt(27) = 8.660254037844386
2^5 / 2^2 = 8.0
3^4 * 3^-2 = 9.0`
      }
    ],
    mcqs: [
      {
        q: t(
          '√75 ko simplest form mein likho.',
          'Write √75 in its simplest form.'
        ),
        opts: [
          t('5√3', '5√3'),
          t('3√5', '3√5'),
          t('25√3', '25√3'),
          t('√75 hi rahega', 'It stays as √75')
        ],
        ans: 0,
        expl: t(
          'Sahi jawab: 75 = 25 x 3, aur 25 perfect square hai, isliye √75 = 5√3. Check: 5 x 1.732 = 8.66, aur √75 bhi lagbhag 8.66 hota hai.',
          'Correct answer: 75 = 25 x 3, and 25 is a perfect square, so √75 = 5√3. Check: 5 x 1.732 = 8.66, and √75 is also about 8.66.'
        )
      },
      {
        q: t(
          '3^4 x 3^(-2) ka value kya hai?',
          'What is the value of 3^4 x 3^(-2)?'
        ),
        opts: [
          t('3^2 = 9', '3^2 = 9'),
          t('3^6 = 729', '3^6 = 729'),
          t('3^(-8)', '3^(-8)'),
          t('1', '1')
        ],
        ans: 0,
        expl: t(
          'Sahi jawab: same base multiply karne par powers add hoti hain — 4 + (-2) = 2 — isliye 3^2 = 9.',
          'Correct answer: when multiplying the same base, the powers add — 4 + (-2) = 2 — so 3^2 = 9.'
        )
      },
      {
        q: t(
          '(2^5) / (2^2) ka value kya hai?',
          'What is the value of (2^5) / (2^2)?'
        ),
        opts: [
          t('2^7 = 128', '2^7 = 128'),
          t('2^3 = 8', '2^3 = 8'),
          t('2^10 = 1024', '2^10 = 1024'),
          t('2^2 = 4', '2^2 = 4')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: same base divide karne par powers subtract hoti hain — 5 - 2 = 3 — isliye 2^3 = 8. Check: 32 / 4 = 8.',
          'Correct answer: when dividing the same base, the powers subtract — 5 - 2 = 3 — so 2^3 = 8. Check: 32 / 4 = 8.'
        )
      },
      {
        q: t(
          '√12 + √27 ka value kya hai?',
          'What is the value of √12 + √27?'
        ),
        opts: [
          t('√39', '√39'),
          t('6√3', '6√3'),
          t('5√3', '5√3'),
          t('2√3', '2√3')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: √12 = 2√3 aur √27 = 3√3, dono ka root part ek jaisa hai, isliye 2√3 + 3√3 = 5√3.',
          'Correct answer: √12 = 2√3 and √27 = 3√3, both have the same root part, so 2√3 + 3√3 = 5√3.'
        )
      },
      {
        q: t(
          '16^(1/4) ka value kya hai?',
          'What is the value of 16^(1/4)?'
        ),
        opts: [
          t('4', '4'),
          t('8', '8'),
          t('2', '2'),
          t('16', '16')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: 16^(1/4) matlab 16 ka fourth root hai, aur 2^4 = 16, isliye jawab 2 hai.',
          'Correct answer: 16^(1/4) means the fourth root of 16, and 2^4 = 16, so the answer is 2.'
        )
      }
    ],
    keyNotes: [
      t(
        'Surd simplify karo: root ke andar se sabse bada perfect square bahar lao — √50 = 5√2.',
        'Simplify a surd: pull the largest perfect square out of the root — √50 = 5√2.'
      ),
      t(
        'Same base multiply karo toh powers add, divide karo toh subtract, power ki power mein multiply.',
        'Same base: add powers when multiplying, subtract when dividing, multiply for a power of a power.'
      ),
      t(
        'a^0 = 1 aur a^(-n) = 1/a^n — negative power matlab reciprocal, negative number nahi.',
        'a^0 = 1 and a^(-n) = 1/a^n — a negative power means the reciprocal, not a negative number.'
      ),
      t(
        'Surd tabhi add karo jab root part ek jaisa ho; √a + √b kabhi √(a+b) nahi hota.',
        'Add surds only when the root part is the same; √a + √b is never √(a+b).'
      ),
      t(
        'Surd ko exact form mein rakho — decimal approximate hota hai aur error badhata hai.',
        'Keep a surd in exact form — a decimal is approximate and the error grows.'
      )
    ],
    practice: {
      title: t(
        'Practice: √200 - √50 Simplify Karo',
        'Practice: Simplify √200 - √50'
      ),
      task: t(
        '√200 - √50 ko simplest form mein lao: dono mein se perfect square nikaalo, phir subtract karo. Starter code run karo — expected output mein √200 = 14.14..., √50 = 7.07... aur final answer 5√2 = 7.07... aana chahiye.',
        'Bring √200 - √50 into simplest form: pull the perfect square out of both, then subtract. Run the starter code — the expected output should show √200 = 14.14..., √50 = 7.07..., and the final answer 5√2 = 7.07....'
      ),
      language: 'python',
      starter: `import math
print("sqrt(200) =", math.sqrt(200))
print("sqrt(50) =", math.sqrt(50))
print("sqrt(200) - sqrt(50) =", math.sqrt(200) - math.sqrt(50))
print("5 * sqrt(2) =", 5 * math.sqrt(2))`,
      expected: `sqrt(200) = 14.142135623730951
sqrt(50) = 7.0710678118654755
sqrt(200) - sqrt(50) = 7.0710678118654755
5 * sqrt(2) = 7.0710678118654755`
    },
    readMinutes: 12
  };

const quantPercentageAdvanced: Article = {
    id: 'quant-percentage-advanced',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Percentages Advanced — Successive Change aur Population Growth',
      'Percentages Advanced — Successive Change and Population Growth'
    ),
    summary: t(
      'Ek ke baad ek percentage change ko ek saath handle karna seekho: +20% phir -10% ka net effect, do discounts ka single discount, aur saal-dar-saal population growth — har number hand-check aur Python se verified.',
      'Learn to handle one percentage change after another: the net effect of +20% then -10%, two discounts as one single discount, and year-on-year population growth — every number checked by hand and verified with Python.'
    ),
    sections: [
      {
        heading: t(
          '1. Successive Change Kya Hai? (Multiplier ka Concept)',
          '1. What Is Successive Change? (The Multiplier Idea)'
        ),
        body: t(
          `Successive change ka matlab hai ek value par **ek ke baad ek** percentage change lagna. Pehla change nayi value banata hai, aur doosra change us **nayi value** par lagta hai, purani par nahi. Yahi woh point hai jo sabse zyada galat hota hai. Agar price ₹1000 hai, pehle +20% badhe aur phir -10% ghate, toh log aksar sochte hain net +10% hoga — galat hai. Sahi hisaab hai: \`1000 x 1.20 = 1200\`, phir \`1200 x 0.90 = 1080\`. Net change \`+80\` hai, matlab **+8%**, +10% nahi.

Iska shortcut hai **multiplier**. +20% ka multiplier hai \`1.20\`, -10% ka multiplier hai \`0.90\`. Dono ko multiply karo: \`1.20 x 0.90 = 1.08\` — matlab final value original ki 1.08 guna hai, yaani net +8%. Do changes ko ek saath dekhne ka yahi tareeka hai: multipliers ko multiply karo, percentages ko add mat karo. Yeh rule discounts, tax, salary hike aur population — har jagah chalta hai.

Ek aur important baat: **+x% phir -x% kabhi wapas original par nahi laata.** ₹100 par +20% karo toh 120 banta hai, phir -20% karo toh \`120 x 0.80 = 96\` banta hai — 100 nahi. Kyunki doosra change badi value (120) par lagta hai. Net effect hamesha **negative** hota hai jab upar aur neeche ka percent barabar ho: formula hai net = \`-x^2/100\` percent. 20% ke liye net = \`-400/100 = -4%\`, aur 100 ka 96 hona yahi dikhata hai.`,
          `Successive change means **one percentage change after another** on the same value. The first change creates a new value, and the second change applies to that **new value**, not the old one. That is the point most people get wrong. If a price is ₹1000, first rises by 20% and then falls by 10%, people often think the net change is +10% — wrong. The correct working is: \`1000 x 1.20 = 1200\`, then \`1200 x 0.90 = 1080\`. The net change is \`+80\`, which means **+8%**, not +10%.

The shortcut is the **multiplier**. The multiplier for +20% is \`1.20\` and for -10% it is \`0.90\`. Multiply them: \`1.20 x 0.90 = 1.08\` — the final value is 1.08 times the original, which means a net +8%. This is how you see two changes together: multiply the multipliers, never add the percentages. This rule works everywhere — discounts, tax, salary hikes, and population.

One more important point: **+x% then -x% never brings you back to the original.** ₹100 plus 20% becomes 120, then minus 20% becomes \`120 x 0.80 = 96\` — not 100. That is because the second change applies to the bigger value (120). The net effect is always **negative** when the up and down percents are equal: the formula is net = \`-x^2/100\` percent. For 20%, net = \`-400/100 = -4%\`, and 100 becoming 96 shows exactly that.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Sale, Salary aur Sheher ki Population',
          '2. Real-Life Examples: Sale, Salary, and a City Population'
        ),
        body: t(
          `Pehla example hai **sale**. Ek shirt ka marked price ₹1000 hai. Pehle 20% discount, phir us par 10% extra discount. Log aksar kehte hain total discount 30% hai — galat hai. Pehla discount: \`1000 x 0.80 = 800\`. Doosra discount 800 par lagta hai: \`800 x 0.90 = 720\`. Total discount \`1000 - 720 = 280\`, matlab **28%**, 30% nahi. Shop wale isi liye "20% + 10% extra" likhte hain — do discounts judte nahi, multiply hote hain.

Doosra example hai **salary**. Salary ₹40,000 hai. Pehle 25% hike, phir 20% cut. Hike ke baad: \`40000 x 1.25 = 50000\`. Cut ke baad: \`50000 x 0.80 = 40000\`. Salary wapas wahi ₹40,000 ho gayi — coincidence nahi hai: \`1.25 x 0.80 = 1.00\` exactly. Aise numbers exam mein jaan-boojh kar chune jaate hain, isliye multiplier check karna seekho.

Teesra example hai **population**. Ek sheher ki population 80,000 hai aur har saal 5% badhti hai. Ek saal baad: \`80000 x 1.05 = 84,000\`. Do saal baad: \`84000 x 1.05 = 88,200\`. Yeh compound growth hai — har saal ka base badhta jaata hai. Simple interest ki tarah har saal 4,000 add nahi hota; doosre saal mein 5% badi population (84,000) par lagta hai, isliye growth 4,200 hoti hai.`,
          `The first example is a **sale**. A shirt has a marked price of ₹1000. First a 20% discount, then an extra 10% discount on top. People often say the total discount is 30% — wrong. First discount: \`1000 x 0.80 = 800\`. The second discount applies to 800: \`800 x 0.90 = 720\`. The total discount is \`1000 - 720 = 280\`, which means **28%**, not 30%. That is why shops write "20% + 10% extra" — two discounts do not add, they multiply.

The second example is a **salary**. The salary is ₹40,000. First a 25% hike, then a 20% cut. After the hike: \`40000 x 1.25 = 50000\`. After the cut: \`50000 x 0.80 = 40000\`. The salary is back to exactly ₹40,000 — not a coincidence: \`1.25 x 0.80 = 1.00\` exactly. Exams deliberately choose numbers like these, so learn to check the multiplier.

The third example is a **population**. A city has a population of 80,000, growing by 5% every year. After one year: \`80000 x 1.05 = 84,000\`. After two years: \`84000 x 1.05 = 88,200\`. This is compound growth — the base grows every year. It is not like simple interest, where 4,000 is added every year; in the second year the 5% applies to the bigger population (84,000), so the growth is 4,200.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: ₹1000 par +20% phir -10% (Dry Run ke Saath)',
          '3. Step-by-Step: +20% then -10% on ₹1000 (with a Dry Run)'
        ),
        body: t(
          `Ab hum ₹1000 par +20% phir -10% ko step-by-step solve karte hain.
- **Step 1:** +20% ka multiplier 1.20 hai. \`1000 x 1.20 = 1200\`. Price ab ₹1200 hai.
- **Step 2:** -10% ka multiplier 0.90 hai, aur yeh **1200** par lagega, 1000 par nahi. \`1200 x 0.90 = 1080\`. Final price ₹1080 hai.
- **Step 3:** Net change = \`1080 - 1000 = 80\`. Net percent = \`80 / 1000 x 100 = 8%\`. Jawab: **net +8%**.

**Dry run (Python se):** code ne wahi steps chalaye — Start 1000, After +20% 1200.0, After -10% 1080.0, Net change 80.0, Net change % 8.0. Multiplier check bhi karo: \`1.20 x 0.90 = 1.08\`, aur \`1000 x 1.08 = 1080\` — dono tareeke se wahi jawab aata hai. Exam mein multiplier wala tareeka fast hai: ek line mein \`1000 x 1.20 x 0.90\` likho aur seedha 1080 nikalo.

Yaad rakho: doosra percent hamesha **nayi value** par lagta hai. Agar aap galti se dono percent ko original 1000 par lagate — \`1000 + 200 - 100 = 1100\` — toh jawab 1100 aayega, jo galat hai. Yahi "add karne wali galti" hai jo har saal hazaron students karte hain.`,
          `Now let us solve +20% then -10% on ₹1000 step by step.
- **Step 1:** The multiplier for +20% is 1.20. \`1000 x 1.20 = 1200\`. The price is now ₹1200.
- **Step 2:** The multiplier for -10% is 0.90, and it applies to **1200**, not to 1000. \`1200 x 0.90 = 1080\`. The final price is ₹1080.
- **Step 3:** Net change = \`1080 - 1000 = 80\`. Net percent = \`80 / 1000 x 100 = 8%\`. Answer: **net +8%**.

**Dry run (with Python):** the code ran the same steps — Start 1000, After +20% 1200.0, After -10% 1080.0, Net change 80.0, Net change % 8.0. Also check with the multiplier: \`1.20 x 0.90 = 1.08\`, and \`1000 x 1.08 = 1080\` — both routes give the same answer. In an exam the multiplier route is faster: write \`1000 x 1.20 x 0.90\` in one line and get 1080 directly.

Remember: the second percent always applies to the **new value**. If you wrongly apply both percents to the original 1000 — \`1000 + 200 - 100 = 1100\` — you get 1100, which is wrong. That "adding" mistake is the one thousands of students make every year.`
        ),
        code: {
          title: t(
            'Successive Change: +20% phir -10% ka Net Effect',
            'Successive Change: Net Effect of +20% then -10%'
          ),
          language: 'python',
          code: `price = 1000
after_up = price * 1.20
after_down = after_up * 0.90
print("Start:", price)
print("After +20%:", after_up)
print("After -10%:", after_down)
print("Net change:", after_down - price)
print("Net change %:", (after_down - price) / price * 100)`,
          output: `Start: 1000
After +20%: 1200.0
After -10%: 1080.0
Net change: 80.0
Net change %: 8.0`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Percent Add Karna aur Galat Base par Change Lagana',
          '4. Common Mistakes: Adding Percents and Applying the Change to the Wrong Base'
        ),
        body: t(
          `Is topic mein teen galtiyan sabse zyada hoti hain. **Galti 1: percentages ko add kar dena.** +20% phir -10% ka net +10% nahi, +8% hai. 20% + 10% discount ka total 30% nahi, 28% hai. Percentages tabhi add hoti hain jab woh **ek hi base** par lagen — successive change mein base har baar badal jaata hai, isliye multipliers multiply karo.

**Galti 2: doosra change purani value par lagana.** ₹1000 par +20% karke 1200 banaya, phir -10% galti se 1000 par lagakar 100 ghata diya toh 1100 aayega — galat. -10% ko 1200 par lagana hai: \`1200 x 0.10 = 120\` ghatega, 100 nahi. Har step mein poochho: "yeh percent kis value par lag raha hai?"

**Galti 3: reverse percent mein galti.** Agar price 25% badh kar ₹500 ho gayi, toh original price \`500 - 125 = 375\` nahi hai. Sahi tareeka hai divide karna: \`500 / 1.25 = 400\`. Kyunki 25% original (400) par laga tha, final (500) par nahi. Reverse sawaal mein hamesha **divide** karo, subtract mat karo.`,
          `Three mistakes are most common in this topic. **Mistake 1: adding the percents.** +20% then -10% is not a net +10%, it is +8%. A 20% + 10% discount is not 30% in total, it is 28%. Percents can be added only when they apply to the **same base** — in successive change the base changes every time, so multiply the multipliers.

**Mistake 2: applying the second change to the old value.** ₹1000 plus 20% makes 1200; if you then wrongly take 10% off 1000 and subtract 100, you get 1100 — wrong. The 10% must come off 1200: \`1200 x 0.10 = 120\` is removed, not 100. At every step ask: "which value is this percent being applied to?"

**Mistake 3: getting a reverse percent wrong.** If a price rises by 25% to ₹500, the original price is not \`500 - 125 = 375\`. The correct way is to divide: \`500 / 1.25 = 400\`. That is because the 25% applied to the original (400), not to the final (500). In a reverse question, always **divide**, never subtract.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: +x% phir -x%, Zero Change aur Teen Changes',
          '5. Edge Cases: +x% then -x%, Zero Change, and Three Changes'
        ),
        body: t(
          `Edge cases yaad rakho. **Pehla: +x% phir -x%.** ₹100 par +20% phir -20%: \`100 x 1.20 = 120\`, \`120 x 0.80 = 96\`. Net **-4%** — hamesha loss hota hai, kabhi zero nahi. Formula: net = \`-x^2/100\` percent. 10% ke liye net -1%, 50% ke liye net -25% hota hai.

**Doosra: ek change zero ho.** +20% phir 0% ka net +20% hi hota hai — zero change kuchh nahi badalta. Yeh obvious lagta hai, par jab teen changes mein ek zero ho, toh log confuse ho jaate hain. Multiplier 1.00 hai, isliye kuchh nahi badalta.

**Teesra: teen changes ek saath.** ₹1000 par +10%, phir +10%, phir -10%: \`1000 x 1.10 = 1100\`, \`1100 x 1.10 = 1210\`, \`1210 x 0.90 = 1089\`. Net +8.9%. Teen multipliers ko ek saath multiply karo: \`1.10 x 1.10 x 0.90 = 1.089\`. Order se farak nahi padta — multiply commutative hota hai — isliye +10%, -10%, +10% kisi bhi order mein wahi 1089 dega.

**Chautha: population growth mein decrease.** Population 1,20,000 hai, pehle +8% phir -5%: \`120000 x 1.08 = 129600\`, \`129600 x 0.95 = 123120\`. Net change +3120 hai, matlab +2.6%. Decrease ke baad bhi net positive hai kyunki pehla increase bada tha.`,
          `Remember these edge cases. **First: +x% then -x%.** ₹100 plus 20% then minus 20%: \`100 x 1.20 = 120\`, \`120 x 0.80 = 96\`. Net **-4%** — it is always a loss, never zero. Formula: net = \`-x^2/100\` percent. For 10% the net is -1%, and for 50% the net is -25%.

**Second: one change is zero.** +20% then 0% gives a net of +20% — a zero change changes nothing. This looks obvious, but when one of three changes is zero, people get confused. The multiplier is 1.00, so nothing changes.

**Third: three changes together.** ₹1000 plus 10%, then plus 10%, then minus 10%: \`1000 x 1.10 = 1100\`, \`1100 x 1.10 = 1210\`, \`1210 x 0.90 = 1089\`. Net +8.9%. Multiply all three multipliers together: \`1.10 x 1.10 x 0.90 = 1.089\`. The order does not matter — multiplication is commutative — so +10%, -10%, +10% in any order gives the same 1089.

**Fourth: a decrease inside population growth.** A population of 1,20,000 first rises 8% then falls 5%: \`120000 x 1.08 = 129600\`, \`129600 x 0.95 = 123120\`. The net change is +3120, which means +2.6%. The net is still positive after the decrease because the first increase was bigger.`
        )
      },
      {
        heading: t(
          '6. What-If: Discount ki Jagah Tax, aur Growth ki Jagah Depreciation',
          '6. What-If: Tax Instead of a Discount, and Depreciation Instead of Growth'
        ),
        body: t(
          `**What if: discount ki jagah tax ho?** ₹1000 ki cheez par pehle 10% discount, phir 18% GST: \`1000 x 0.90 = 900\`, \`900 x 1.18 = 1062\`. Final price ₹1062 hai. Order badal do — pehle GST phir discount: \`1000 x 1.18 = 1180\`, \`1180 x 0.90 = 1062\` — wahi jawab. Kyunki multipliers multiply hote hain, order se farak nahi padta. Par dhyaan do: GST discount ke **baad** wali price par lagta hai, isliye final price discount se pehle wali price se zyada ho sakti hai.

**What if: growth ki jagah depreciation ho?** Ek car ₹5,00,000 ki hai aur har saal 10% depreciate hoti hai. 2 saal baad value: \`500000 x 0.90 x 0.90 = 500000 x 0.81 = 405000\`. Total depreciation 19% hai, 20% nahi — kyunki doosre saal ka 10% kam value par lagta hai. Yahi successive change ka depreciation version hai.

**What if: percent base hi badal jaaye?** 50 se 65 hona 30% increase hai (\`15/50 x 100\`), par 65 se 50 hona \`15/65 x 100 = 23.08%\` decrease hai — same 15 ka difference, alag percent, kyunki base alag hai. Percent hamesha base ke saath likho: "kis ka percent?" yeh sawaal hamesha poochho.`,
          `**What if there is tax instead of a discount?** An item costs ₹1000, first a 10% discount, then 18% GST: \`1000 x 0.90 = 900\`, \`900 x 1.18 = 1062\`. The final price is ₹1062. Swap the order — GST first, then discount: \`1000 x 1.18 = 1180\`, \`1180 x 0.90 = 1062\` — the same answer. Because multipliers multiply, the order does not matter. But note: GST applies to the price **after** the discount, so the final price can be higher than the pre-discount price.

**What if there is depreciation instead of growth?** A car costs ₹5,00,000 and depreciates by 10% every year. After 2 years its value is: \`500000 x 0.90 x 0.90 = 500000 x 0.81 = 405000\`. The total depreciation is 19%, not 20% — because the second year's 10% applies to a smaller value. This is the depreciation version of successive change.

**What if the base itself changes?** Going from 50 to 65 is a 30% increase (\`15/50 x 100\`), but going from 65 to 50 is a \`15/65 x 100 = 23.08%\` decrease — the same difference of 15, a different percent, because the base is different. Always state the base with a percent: always ask "percent of what?"`
        )
      },
      {
        heading: t(
          '7. Summary: Multiplier, Nayi Value aur Reverse mein Divide',
          '7. Summary: Multiplier, New Value, and Divide for Reverse'
        ),
        body: t(
          `Poora article teen baaton mein bandhta hai. **Pehli:** successive change mein percentages add mat karo — **multipliers multiply** karo. +20% phir -10% ka multiplier \`1.20 x 0.90 = 1.08\` hai, isliye net +8% hai, +10% nahi. **Doosri:** doosra change hamesha **nayi value** par lagta hai — 10% ghatao toh 1200 ka 10% ghatega (120), 1000 ka 10% nahi (100).

**Teesri:** reverse sawaal mein **divide** karo — price 25% badh kar 500 hui toh original \`500 / 1.25 = 400\` hai, \`500 - 125\` nahi. Aur yaad rakho: +x% phir -x% hamesha net loss deta hai (\`-x^2/100\` percent), aur do discounts ka single discount hamesha unke sum se kam hota hai (20% + 10% = 28%, 30% nahi). Revision ke liye khud se karo: population 50,000, +10% har saal, 2 saal baad (jawab 60,500), aur ₹40,000 salary +25% phir -20% (jawab ₹40,000).`,
          `The whole article comes down to three points. **First:** in successive change, never add the percents — **multiply the multipliers**. +20% then -10% has a multiplier of \`1.20 x 0.90 = 1.08\`, so the net is +8%, not +10%. **Second:** the second change always applies to the **new value** — a 10% fall removes 10% of 1200 (120), not 10% of 1000 (100).

**Third:** in a reverse question, **divide** — if a price rose 25% to 500, the original is \`500 / 1.25 = 400\`, not \`500 - 125\`. And remember: +x% then -x% always gives a net loss (\`-x^2/100\` percent), and two discounts as one single discount are always less than their sum (20% + 10% = 28%, not 30%). For revision, try these yourself: a population of 50,000 growing 10% a year, after 2 years (answer 60,500), and a ₹40,000 salary with +25% then -20% (answer ₹40,000).`
        )
      }
    ],
    diagram: {
      kind: 'table',
      title: t(
        'Successive Change: Multiplier Table',
        'Successive Change: Multiplier Table'
      ),
      caption: t(
        'Har change ka multiplier nikalo, phir sabko multiply karo — percentages kabhi add mat karo',
        'Find the multiplier of every change, then multiply them all — never add the percentages'
      ),
      headers: [
        t('Change', 'Change'),
        t('Multiplier', 'Multiplier'),
        t('₹1000 par Result', 'Result on ₹1000')
      ],
      rows: [
        [
          t('+20%', '+20%'),
          t('1.20', '1.20'),
          t('₹1200', '₹1200')
        ],
        [
          t('phir -10%', 'then -10%'),
          t('0.90', '0.90'),
          t('₹1080', '₹1080')
        ],
        [
          t('Net effect', 'Net effect'),
          t('1.20 x 0.90 = 1.08', '1.20 x 0.90 = 1.08'),
          t('Net +8%', 'Net +8%')
        ],
        [
          t('Galat tareeka: +20 - 10', 'Wrong way: +20 - 10'),
          t('+10% add karna', 'adding +10%'),
          t('₹1100 (galat)', '₹1100 (wrong)')
        ]
      ],
      nodes: []
    },
    codeExamples: [
      {
        title: t(
          'Population Growth: 80,000 par 5% saalana, 2 saal',
          'Population Growth: 80,000 at 5% a Year for 2 Years'
        ),
        language: 'python',
        code: `pop = 80000
year1 = pop * 1.05
year2 = year1 * 1.05
print("Start:", pop)
print("After 1 year:", year1)
print("After 2 years:", year2)`,
        output: `Start: 80000
After 1 year: 84000.0
After 2 years: 88200.0`
      },
      {
        title: t(
          'Do Discounts ka Single Discount: 20% phir 10%',
          'Two Discounts as One Single Discount: 20% then 10%'
        ),
        language: 'python',
        code: `mp = 1000
after_first = mp * 0.80
after_second = after_first * 0.90
print("Marked price:", mp)
print("After 20% off:", after_first)
print("After 10% more off:", after_second)
print("Single discount %:", round((mp - after_second) / mp * 100, 2))`,
        output: `Marked price: 1000
After 20% off: 800.0
After 10% more off: 720.0
Single discount %: 28.0`
      }
    ],
    mcqs: [
      {
        q: t(
          '₹100 par pehle +20% phir -20% karo. Final value kya hogi?',
          'Take ₹100, first add 20%, then subtract 20%. What is the final value?'
        ),
        opts: [
          t('₹100', '₹100'),
          t('₹96', '₹96'),
          t('₹104', '₹104'),
          t('₹80', '₹80')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 100 x 1.20 = 120, phir 120 x 0.80 = 96. Net -4% hota hai kyunki doosra change badi value par lagta hai.',
          'Correct answer: 100 x 1.20 = 120, then 120 x 0.80 = 96. The net is -4% because the second change applies to the bigger value.'
        )
      },
      {
        q: t(
          'Population 50,000 hai aur har saal 10% badhti hai. 2 saal baad kitni hogi?',
          'A population is 50,000 and grows by 10% every year. What will it be after 2 years?'
        ),
        opts: [
          t('60,000', '60,000'),
          t('55,000', '55,000'),
          t('60,500', '60,500'),
          t('61,000', '61,000')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: pehle saal 50000 x 1.10 = 55000, doosre saal 55000 x 1.10 = 60500. Simple interest ki tarah 5000 + 5000 nahi judta.',
          'Correct answer: first year 50000 x 1.10 = 55000, second year 55000 x 1.10 = 60500. It is not 5000 + 5000 like simple interest.'
        )
      },
      {
        q: t(
          'Marked price ₹1000 par pehle 10% phir 20% discount mile. Single discount kitna hoga?',
          'A marked price of ₹1000 gets a 10% discount, then a 20% discount. What is the single discount?'
        ),
        opts: [
          t('30%', '30%'),
          t('28%', '28%'),
          t('25%', '25%'),
          t('20%', '20%')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 1000 x 0.90 = 900, phir 900 x 0.80 = 720. Total discount 280 hai, matlab 28% — 30% nahi.',
          'Correct answer: 1000 x 0.90 = 900, then 900 x 0.80 = 720. The total discount is 280, which means 28% — not 30%.'
        )
      },
      {
        q: t(
          'Salary ₹40,000 hai. Pehle +25% hike, phir -20% cut. Final salary kitni hogi?',
          'A salary is ₹40,000. First a 25% hike, then a 20% cut. What is the final salary?'
        ),
        opts: [
          t('₹42,000', '₹42,000'),
          t('₹40,000', '₹40,000'),
          t('₹38,000', '₹38,000'),
          t('₹45,000', '₹45,000')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 40000 x 1.25 = 50000, phir 50000 x 0.80 = 40000. Multiplier 1.25 x 0.80 = 1.00 hai, isliye salary wapas wahi ho gayi.',
          'Correct answer: 40000 x 1.25 = 50000, then 50000 x 0.80 = 40000. The multiplier 1.25 x 0.80 = 1.00, so the salary is back to the same.'
        )
      },
      {
        q: t(
          'Price 25% badh kar ₹500 ho gayi. Original price kitni thi?',
          'A price rose by 25% to ₹500. What was the original price?'
        ),
        opts: [
          t('₹375', '₹375'),
          t('₹400', '₹400'),
          t('₹425', '₹425'),
          t('₹450', '₹450')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: reverse sawaal mein divide karo — 500 / 1.25 = 400. 500 - 125 = 375 galat hai kyunki 25% original price par laga tha.',
          'Correct answer: in a reverse question, divide — 500 / 1.25 = 400. 500 - 125 = 375 is wrong because the 25% applied to the original price.'
        )
      }
    ],
    keyNotes: [
      t(
        'Successive change mein percentages add mat karo — multipliers multiply karo: 1.20 x 0.90 = 1.08.',
        'In successive change, never add percents — multiply the multipliers: 1.20 x 0.90 = 1.08.'
      ),
      t(
        'Doosra change hamesha nayi value par lagta hai, purani par nahi.',
        'The second change always applies to the new value, not the old one.'
      ),
      t(
        '+x% phir -x% hamesha net loss deta hai: net = -x^2/100 percent.',
        '+x% then -x% always gives a net loss: net = -x^2/100 percent.'
      ),
      t(
        'Do discounts ka single discount unke sum se kam hota hai: 20% + 10% = 28%.',
        'Two discounts as one single discount are less than their sum: 20% + 10% = 28%.'
      ),
      t(
        'Reverse sawaal mein divide karo: original = final / multiplier.',
        'In a reverse question, divide: original = final / multiplier.'
      )
    ],
    practice: {
      title: t(
        'Practice: Population 1,20,000 par +8% phir -5%',
        'Practice: Population 1,20,000 with +8% then -5%'
      ),
      task: t(
        'Ek sheher ki population 1,20,000 hai. Pehle saal +8% badhti hai, doosre saal -5% ghatti hai. Dono steps calculate karo aur net change nikalo. Starter code run karo — expected output mein After +8% 129600.0, After -5% 123120.0 aur Net change 3120.0 aana chahiye.',
        'A city has a population of 1,20,000. It rises 8% in the first year, then falls 5% in the second year. Calculate both steps and find the net change. Run the starter code — the expected output should show After +8% 129600.0, After -5% 123120.0, and Net change 3120.0.'
      ),
      language: 'python',
      starter: `pop = 120000
after_up = pop * 1.08
after_down = after_up * 0.95
print("Start:", pop)
print("After +8%:", round(after_up, 2))
print("After -5%:", round(after_down, 2))
print("Net change:", round(after_down - pop, 2))`,
      expected: `Start: 120000
After +8%: 129600.0
After -5%: 123120.0
Net change: 3120.0`
    },
    readMinutes: 12
  };

const quantAveragesAdvanced: Article = {
    id: 'quant-averages-advanced',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Averages Advanced — Weighted Average aur Cricket Average',
      'Averages Advanced — Weighted Average and Cricket Average'
    ),
    summary: t(
      'Simple average se aage badho: jab har item ka weight alag ho toh weighted average kaise nikale, cricket average kaise badalta hai, aur average se total wapas kaise nikale — har number hand-check aur Python se verified.',
      'Go beyond the simple average: how to find a weighted average when every item has a different weight, how a cricket average changes, and how to get the total back from an average — every number checked by hand and verified with Python.'
    ),
    sections: [
      {
        heading: t(
          '1. Weighted Average Kya Hai? (Har Item ka Alag Weight)',
          '1. What Is a Weighted Average? (Every Item Has a Different Weight)'
        ),
        body: t(
          `Simple average mein har number barabar hota hai: \` (80 + 90 + 70) / 3 = 80\`. Par real life mein har cheez barabar nahi hoti. Agar ek subject ke 3 credits hain, doosre ke 2 aur teesre ke 5, toh marks ko credits se **weight** karna padega. **Weighted average** ka formula hai: \`(value1 x weight1 + value2 x weight2 + ...) / (weight1 + weight2 + ...)\`. Example: 80 marks (weight 3), 90 marks (weight 2), 70 marks (weight 5) — weighted average = \`(80x3 + 90x2 + 70x5) / (3+2+5) = (240 + 180 + 350) / 10 = 770 / 10 = 77\`. Simple average 80 hota, par weighted 77 hai kyunki sabse kam marks (70) ka weight sabse zyada (5) hai.

Average ka sabse useful ulta rule hai: **total = average x count**. Agar 10 numbers ka average 25 hai, toh unka total \`25 x 10 = 250\` hai — bina numbers dekhe. Yeh rule hi advanced average ke sawaal solve karta hai: naya number add ho, purana number nikle, ya group badle — pehle total nikalo, phir total ko badlo, phir naya average nikalo. Exam mein average ka sawaal hamesha total se shuru karo.

**Cricket average** bhi yahi formula hai: **average = total runs / innings**. Par cricket mein ek khaas baat hai — **not out** innings count nahi hoti. Agar batsman 45 innings mein 1800 runs banaye aur 5 baar not out raha, toh uska average \`1800 / (45 - 5) = 45\` hota hai, \`1800 / 45 = 40\` nahi. Is article mein hum simple case use karenge (saari innings out), par not out wala rule yaad rakho — exam mein yahi trap hota hai.`,
          `In a simple average every number is equal: \`(80 + 90 + 70) / 3 = 80\`. But in real life not everything is equal. If one subject has 3 credits, another has 2, and a third has 5, the marks must be **weighted** by the credits. The **weighted average** formula is: \`(value1 x weight1 + value2 x weight2 + ...) / (weight1 + weight2 + ...)\`. Example: 80 marks (weight 3), 90 marks (weight 2), 70 marks (weight 5) — weighted average = \`(80x3 + 90x2 + 70x5) / (3+2+5) = (240 + 180 + 350) / 10 = 770 / 10 = 77\`. The simple average would be 80, but the weighted average is 77 because the lowest marks (70) carry the highest weight (5).

The most useful reverse rule of averages is: **total = average x count**. If 10 numbers have an average of 25, their total is \`25 x 10 = 250\` — without seeing the numbers. This rule solves advanced average questions: a new number is added, an old number is removed, or a group changes — first find the total, then change the total, then find the new average. In an exam, always start an average question from the total.

A **cricket average** is the same formula: **average = total runs / innings**. But cricket has one special rule — a **not out** innings does not count. If a batsman scores 1800 runs in 45 innings and was not out 5 times, the average is \`1800 / (45 - 5) = 45\`, not \`1800 / 45 = 40\`. In this article we use the simple case (all innings out), but remember the not-out rule — that is the exam trap.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Result, Cricket aur Average Speed',
          '2. Real-Life Examples: Exam Results, Cricket, and Average Speed'
        ),
        body: t(
          `Pehla example hai **exam result**. Ek student ke 3 subjects mein marks 80, 90 aur 70 hain, par unke credits 3, 2 aur 5 hain. Simple average 80 bolta hai, par college weighted average 77 count karta hai — kyunki 70 marks wale subject ka weight sabse zyada hai. CGPA aur placement shortlisting mein weighted average hi use hota hai, simple average nahi. Isliye "average 80 hai" bolne se pehle poochho: "kis weight se?"

Doosra example hai **cricket average**. Ek batsman 45 innings mein average 40 se khel raha hai — matlab uske total runs \`45 x 40 = 1800\` hain. Agli innings mein woh 80 runs banata hai: naye runs 1880, nayi innings 46, naya average \`1880 / 46 = 40.87\`. Average sirf 0.87 badha, kyunki 80 runs 46 innings mein bat gaye. Cricket average dheere badhta hai — ek badi innings bhi average ko thoda hi hilati hai, kyunki denominator bada hota hai.

Teesra example hai **average speed** — aur yahan sabse badi galti hoti hai. 60 km 30 km/h se aur 60 km 60 km/h se chalo: average speed \`(30 + 60) / 2 = 45\` **nahi** hai. Sahi tareeka hai total distance / total time: distance 120 km, time \`60/30 + 60/60 = 2 + 1 = 3\` ghante, average speed \`120 / 3 = 40\` km/h. Speed ka average hamesha time se weight hota hai, distance se nahi — isliye yeh bhi weighted average hi hai.`,
          `The first example is an **exam result**. A student scores 80, 90, and 70 in 3 subjects, but the credits are 3, 2, and 5. The simple average says 80, but the college counts a weighted average of 77 — because the subject with 70 marks carries the highest weight. CGPA and placement shortlisting use the weighted average, not the simple average. So before saying "the average is 80", ask: "weighted by what?"

The second example is a **cricket average**. A batsman averages 40 over 45 innings — so his total runs are \`45 x 40 = 1800\`. In the next innings he scores 80 runs: new runs 1880, new innings 46, new average \`1880 / 46 = 40.87\`. The average rose by only 0.87, because 80 runs were spread over 46 innings. A cricket average moves slowly — even a big innings moves it only a little, because the denominator is large.

The third example is **average speed** — and this is where the biggest mistake happens. Drive 60 km at 30 km/h and 60 km at 60 km/h: the average speed is **not** \`(30 + 60) / 2 = 45\`. The correct way is total distance / total time: distance 120 km, time \`60/30 + 60/60 = 2 + 1 = 3\` hours, average speed \`120 / 3 = 40\` km/h. The average of speeds is always weighted by time, not by distance — so this is a weighted average too.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: Weighted Average 77 aur Cricket Average 40.87 (Dry Run ke Saath)',
          '3. Step-by-Step: Weighted Average 77 and Cricket Average 40.87 (with a Dry Run)'
        ),
        body: t(
          `Ab hum dono worked examples ko step-by-step solve karte hain.
- **Weighted average:** Values 80, 90, 70 hain aur weights 3, 2, 5 hain. Pehle har value ko uske weight se multiply karo: \`80 x 3 = 240\`, \`90 x 2 = 180\`, \`70 x 5 = 350\`. Phir inko jodo: \`240 + 180 + 350 = 770\`. Phir weights ko jodo: \`3 + 2 + 5 = 10\`. Aakhir mein divide karo: \`770 / 10 = 77\`. Jawab: **77**.
- **Cricket average:** 45 innings, average 40 — pehle total nikalo: \`45 x 40 = 1800\` runs. Nayi innings mein 80 runs add karo: \`1800 + 80 = 1880\`. Innings bhi badhao: \`45 + 1 = 46\`. Naya average: \`1880 / 46 = 40.87\` (2 decimal tak). Jawab: **40.87**.

**Dry run (Python se):** code ne wahi numbers chalaye — Weighted average 77.0, Old runs 1800, New average after 80 runs 40.8695... — jo 2 decimal par 40.87 hota hai. Doosra check bhi karo: \`46 x 40.87 = 1880.02\` lagbhag 1880 hai (rounding ki wajah se 0.02 ka farak hai). Yeh reverse check — average x count = total — har average sawaal mein kaam aata hai.`,
          `Now let us solve both worked examples step by step.
- **Weighted average:** The values are 80, 90, 70 and the weights are 3, 2, 5. First multiply each value by its weight: \`80 x 3 = 240\`, \`90 x 2 = 180\`, \`70 x 5 = 350\`. Then add them: \`240 + 180 + 350 = 770\`. Then add the weights: \`3 + 2 + 5 = 10\`. Finally divide: \`770 / 10 = 77\`. Answer: **77**.
- **Cricket average:** 45 innings, average 40 — first find the total: \`45 x 40 = 1800\` runs. Add 80 runs from the new innings: \`1800 + 80 = 1880\`. Increase the innings too: \`45 + 1 = 46\`. New average: \`1880 / 46 = 40.87\` (to 2 decimals). Answer: **40.87**.

**Dry run (with Python):** the code ran the same numbers — Weighted average 77.0, Old runs 1800, New average after 80 runs 40.8695... — which is 40.87 to 2 decimals. Do a second check as well: \`46 x 40.87 = 1880.02\`, about 1880 (the 0.02 difference is rounding). This reverse check — average x count = total — works in every average question.`
        ),
        code: {
          title: t(
            'Weighted Average aur Cricket Average Calculate Karna',
            'Calculating a Weighted Average and a Cricket Average'
          ),
          language: 'python',
          code: `weighted = (80 * 3 + 90 * 2 + 70 * 5) / (3 + 2 + 5)
print("Weighted average:", weighted)
runs = 45 * 40
new_avg = (runs + 80) / 46
print("Old runs:", runs)
print("New average after 80 runs:", new_avg)`,
          output: `Weighted average: 77.0
Old runs: 1800
New average after 80 runs: 40.869565217391305`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Weight Bhoolna, Count Galat Lena aur Speed ka Simple Average',
          '4. Common Mistakes: Forgetting the Weight, Wrong Count, and Simple Average of Speeds'
        ),
        body: t(
          `Is topic mein chaar galtiyan sabse zyada hoti hain. **Galti 1: weight bhool kar simple average nikalna.** 80 (weight 3), 90 (weight 2), 70 (weight 5) ka simple average 80 hai, par sahi weighted average 77 hai. Jab bhi sawaal mein credits, quantity ya time diya ho, toh woh **weight** hai — use ignore mat karo.

**Galti 2: naya number add karte waqt count badhana bhoolna.** 5 numbers ka average 40 hai (total 200), aur 60 add karte ho toh naya average \`260 / 5 = 52\` nahi hai — count bhi 6 hota hai, isliye \`260 / 6 = 43.33\` hai. Total aur count — dono badalte hain. Sirf ek ko badalna aadha hisaab hai.

**Galti 3: average speed ka simple average lena.** 30 km/h aur 60 km/h ka average 45 nahi, 40 hai (jab distance barabar ho). Formula yaad rakho: average speed = **total distance / total time**. Jab distance barabar ho, toh shortcut hai \`2ab/(a+b)\`: \`2 x 30 x 60 / 90 = 40\`.

**Galti 4: average se total nikalte waqt multiply bhoolna.** "10 numbers ka average 25 hai" sun kar log total 25 samajh lete hain. Total hai \`25 x 10 = 250\`. Average aur total alag cheezein hain — average ek rate hai, total ek sum hai.`,
          `Four mistakes are most common in this topic. **Mistake 1: taking a simple average and forgetting the weight.** For 80 (weight 3), 90 (weight 2), 70 (weight 5), the simple average is 80, but the correct weighted average is 77. Whenever a question gives credits, quantity, or time, that is a **weight** — do not ignore it.

**Mistake 2: forgetting to increase the count when adding a new number.** 5 numbers average 40 (total 200); adding 60 does not give a new average of \`260 / 5 = 52\` — the count also becomes 6, so it is \`260 / 6 = 43.33\`. Both the total and the count change. Changing only one is half the working.

**Mistake 3: taking a simple average of speeds.** The average of 30 km/h and 60 km/h is not 45, it is 40 (when the distances are equal). Remember the formula: average speed = **total distance / total time**. When the distances are equal, the shortcut is \`2ab/(a+b)\`: \`2 x 30 x 60 / 90 = 40\`.

**Mistake 4: forgetting to multiply when getting the total from an average.** Hearing "10 numbers average 25", people take the total as 25. The total is \`25 x 10 = 250\`. Average and total are different things — an average is a rate, a total is a sum.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Number Nikalna, Zero Average aur Not Out Innings',
          '5. Edge Cases: Removing a Number, Zero Average, and Not-Out Innings'
        ),
        body: t(
          `Edge cases yaad rakho. **Pehla: number nikalna.** 5 numbers ka average 60 hai (total 300). Agar 40 wala number nikal do, toh naya total \`300 - 40 = 260\` aur nayi count 4 hai — naya average \`260 / 4 = 65\`. Average badh gaya kyunki nikala hua number (40) average (60) se chhota tha. Rule: average se chhota number nikalo toh average badhta hai, bada number nikalo toh average ghatta hai.

**Doosra: zero wala number.** 5 numbers ka average 40 hai aur ek number 0 hai — total ab bhi \`40 x 5 = 200\` hai. Zero total ko nahi badalta, par count ko badhata hai. Isliye zero ko ignore mat karo — woh average ko neeche kheenchta hai.

**Teesra: not out innings.** Batsman 45 innings mein 1800 runs banaye, par 5 baar not out raha. Average = \`1800 / (45 - 5) = 1800 / 40 = 45\`. Agar not out ko count kar loge toh average 40 aayega — galat. Cricket average mein denominator hamesha **out hone wali innings** hoti hai.

**Chautha: average badhane ke liye kitne runs chahiye.** Batsman ka average 40 hai (45 innings, 1800 runs) aur woh agle innings ke baad average 42 karna chahta hai. Chahiye: \`42 x 46 = 1932\` runs, matlab agle innings mein \`1932 - 1800 = 132\` runs. Yeh reverse sawaal exam mein aata hai — pehle target total nikalo, phir difference nikalo.`,
          `Remember these edge cases. **First: removing a number.** 5 numbers average 60 (total 300). If you remove the number 40, the new total is \`300 - 40 = 260\` and the new count is 4 — the new average is \`260 / 4 = 65\`. The average rose because the removed number (40) was smaller than the average (60). Rule: removing a number smaller than the average raises the average; removing a bigger number lowers it.

**Second: a zero in the numbers.** 5 numbers average 40 and one number is 0 — the total is still \`40 x 5 = 200\`. Zero does not change the total, but it increases the count. So do not ignore zero — it pulls the average down.

**Third: not-out innings.** A batsman scores 1800 runs in 45 innings but was not out 5 times. Average = \`1800 / (45 - 5) = 1800 / 40 = 45\`. If you count the not-out innings, you get 40 — wrong. In a cricket average the denominator is always the innings in which the batsman was **out**.

**Fourth: how many runs are needed to raise the average.** A batsman averages 40 (45 innings, 1800 runs) and wants an average of 42 after the next innings. Needed: \`42 x 46 = 1932\` runs, so the next innings needs \`1932 - 1800 = 132\` runs. This reverse question appears in exams — first find the target total, then find the difference.`
        )
      },
      {
        heading: t(
          '6. What-If: Weight Barabar Ho, Count Badhe, ya Average Zero Ho?',
          '6. What-If: Equal Weights, Growing Count, or Zero Average?'
        ),
        body: t(
          `**What if: saare weights barabar hon?** Agar weights 3, 3, 3 hon, toh weighted average simple average ke barabar ho jaata hai: \`(80x3 + 90x3 + 70x3) / 9 = 240 / 3 = 80\`. Weighted average simple average ka general version hai — simple average uska khaas case hai jab saare weights barabar hon.

**What if: count badhti jaaye?** 8 numbers ka average 45 hai (total 360). 72 add karo toh total 432 aur count 9 — naya average \`432 / 9 = 48\`. Naya number (72) average (45) se bada tha, isliye average badha. Rule yaad rakho: naya number average se bada ho toh average badhta hai, chhota ho toh ghatta hai, barabar ho toh same rehta hai.

**What if: average zero ho?** Agar 5 numbers ka average 0 hai, toh unka total 0 hai — matlab positive aur negative numbers ek doosre ko cancel kar rahe hain. Average zero ka matlab yeh nahi ki saare numbers zero hain.

**What if: do groups ko milana ho?** Group A: 10 students, average 80 (total 800). Group B: 20 students, average 65 (total 1300). Milakar: total \`2100\`, count 30, average \`2100 / 30 = 70\`. Groups ke averages ko simple average mat karo (\`(80+65)/2 = 72.5\` galat hai) — pehle totals nikalo, phir milao.`,
          `**What if all weights are equal?** If the weights are 3, 3, 3, the weighted average equals the simple average: \`(80x3 + 90x3 + 70x3) / 9 = 240 / 3 = 80\`. The weighted average is the general version of the simple average — the simple average is its special case when all weights are equal.

**What if the count keeps growing?** 8 numbers average 45 (total 360). Add 72: total 432, count 9 — new average \`432 / 9 = 48\`. The new number (72) was bigger than the average (45), so the average rose. Remember the rule: a new number bigger than the average raises the average, a smaller one lowers it, and an equal one leaves it unchanged.

**What if the average is zero?** If 5 numbers average 0, their total is 0 — the positive and negative numbers cancel each other out. An average of zero does not mean all the numbers are zero.

**What if two groups are merged?** Group A: 10 students, average 80 (total 800). Group B: 20 students, average 65 (total 1300). Merged: total \`2100\`, count 30, average \`2100 / 30 = 70\`. Do not take a simple average of the group averages (\`(80+65)/2 = 72.5\` is wrong) — first find the totals, then merge them.`
        )
      },
      {
        heading: t(
          '7. Summary: Total = Average x Count, Weight aur Time',
          '7. Summary: Total = Average x Count, Weight, and Time'
        ),
        body: t(
          `Poora article teen baaton mein bandhta hai. **Pehli:** har average sawaal **total = average x count** se shuru karo. Weighted average mein har value ko uske weight se multiply karo, phir totals ko weights ke total se divide karo — 80, 90, 70 weights 3, 2, 5 ke saath **77** deta hai, 80 nahi. **Doosri:** naya number add ho ya purana nikle — total aur count **dono** badlo. Cricket mein 45 innings, average 40 (1800 runs) ke baad 80 runs ki innings se average **40.87** banta hai.

**Teesri:** average speed hamesha **total distance / total time** hoti hai — speeds ka simple average galat hai. Aur cricket mein not out innings denominator mein count nahi hoti. Revision ke liye khud se karo: 60 (weight 2) aur 90 (weight 3) ka weighted average (jawab 78), 20 innings mein average 35 (700 runs) ke baad 100 runs ki innings (jawab 38.10), aur 5 numbers average 40 mein 60 add karna (jawab 43.33).`,
          `The whole article comes down to three points. **First:** start every average question with **total = average x count**. In a weighted average, multiply each value by its weight, then divide the totals by the total of the weights — 80, 90, 70 with weights 3, 2, 5 gives **77**, not 80. **Second:** when a new number is added or an old one removed, change **both** the total and the count. In cricket, 45 innings at an average of 40 (1800 runs) followed by an 80-run innings gives an average of **40.87**.

**Third:** average speed is always **total distance / total time** — a simple average of speeds is wrong. And in cricket, not-out innings do not count in the denominator. For revision, try these yourself: the weighted average of 60 (weight 2) and 90 (weight 3) (answer 78), a 100-run innings after 20 innings at an average of 35 (700 runs) (answer 38.10), and adding 60 to 5 numbers averaging 40 (answer 43.33).`
        )
      }
    ],
    diagram: {
      kind: 'bars',
      title: t(
        'Averages ki Tulna (0-100 Scale)',
        'Comparing Averages (0-100 Scale)'
      ),
      caption: t(
        'Weighted average 77 hai, simple average 80 — weight se farak padta hai; cricket average 40 se 40.87 hua',
        'The weighted average is 77 while the simple average is 80 — weight matters; the cricket average moved from 40 to 40.87'
      ),
      nodes: [],
      bars: [
        {
          label: t('Weighted average (77)', 'Weighted average (77)'),
          value: 77
        },
        {
          label: t('Simple average (80)', 'Simple average (80)'),
          value: 80
        },
        {
          label: t('Cricket purana average (40)', 'Cricket old average (40)'),
          value: 40
        },
        {
          label: t('Cricket naya average (40.87)', 'Cricket new average (40.87)'),
          value: 41
        },
        {
          label: t('40 nikaalne ke baad average (65)', 'Average after removing 40 (65)'),
          value: 65
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          'Number Nikalne ke Baad Naya Average',
          'New Average After Removing a Number'
        ),
        language: 'python',
        code: `total = 60 * 5
print("Sum of 5 numbers:", total)
print("New sum without 40:", total - 40)
print("New average of 4 numbers:", (total - 40) / 4)`,
        output: `Sum of 5 numbers: 300
New sum without 40: 260
New average of 4 numbers: 65.0`
      },
      {
        title: t(
          'Average Speed: Total Distance / Total Time',
          'Average Speed: Total Distance / Total Time'
        ),
        language: 'python',
        code: `total_km = 60 + 60
total_hours = 60 / 30 + 60 / 60
print("Total distance:", total_km)
print("Total time:", total_hours)
print("Average speed:", total_km / total_hours)`,
        output: `Total distance: 120
Total time: 3.0
Average speed: 40.0`
      }
    ],
    mcqs: [
      {
        q: t(
          '10 numbers ka average 25 hai. Unka total kitna hai?',
          '10 numbers have an average of 25. What is their total?'
        ),
        opts: [
          t('25', '25'),
          t('250', '250'),
          t('35', '35'),
          t('100', '100')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: total = average x count = 25 x 10 = 250. Average ko total samajhna sabse aam galti hai.',
          'Correct answer: total = average x count = 25 x 10 = 250. Mistaking the average for the total is the most common error.'
        )
      },
      {
        q: t(
          '60 (weight 2) aur 90 (weight 3) ka weighted average kya hai?',
          'What is the weighted average of 60 (weight 2) and 90 (weight 3)?'
        ),
        opts: [
          t('75', '75'),
          t('78', '78'),
          t('80', '80'),
          t('72', '72')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: (60x2 + 90x3) / (2+3) = (120 + 270) / 5 = 390 / 5 = 78. Simple average 75 galat hai kyunki 90 ka weight zyada hai.',
          'Correct answer: (60x2 + 90x3) / (2+3) = (120 + 270) / 5 = 390 / 5 = 78. The simple average 75 is wrong because 90 carries more weight.'
        )
      },
      {
        q: t(
          'Batsman 20 innings mein average 35 se khel raha hai. Agli innings mein 100 runs banata hai. Naya average kitna hoga?',
          'A batsman averages 35 over 20 innings. He scores 100 runs in the next innings. What is the new average?'
        ),
        opts: [
          t('35.00', '35.00'),
          t('40.00', '40.00'),
          t('38.10', '38.10'),
          t('37.50', '37.50')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: purane runs 20 x 35 = 700, naye runs 800, nayi innings 21 — 800 / 21 = 38.10 (2 decimal tak).',
          'Correct answer: old runs 20 x 35 = 700, new runs 800, new innings 21 — 800 / 21 = 38.10 (to 2 decimals).'
        )
      },
      {
        q: t(
          '5 numbers ka average 40 hai. Unmein 60 add karte hain. Naya average kitna hoga?',
          '5 numbers have an average of 40. We add 60 to them. What is the new average?'
        ),
        opts: [
          t('52.00', '52.00'),
          t('43.33', '43.33'),
          t('40.00', '40.00'),
          t('50.00', '50.00')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: purana total 200 hai, naya total 260 hai, nayi count 6 hai — 260 / 6 = 43.33. Count badhana bhoolne par 52 aayega, jo galat hai.',
          'Correct answer: old total is 200, new total is 260, new count is 6 — 260 / 6 = 43.33. Forgetting to increase the count gives 52, which is wrong.'
        )
      },
      {
        q: t(
          'Pehle 5 odd numbers (1, 3, 5, 7, 9) ka average kitna hai?',
          'What is the average of the first 5 odd numbers (1, 3, 5, 7, 9)?'
        ),
        opts: [
          t('4', '4'),
          t('6', '6'),
          t('5', '5'),
          t('9', '9')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: total 1 + 3 + 5 + 7 + 9 = 25 hai, count 5 hai — 25 / 5 = 5. Odd numbers ka average beech wala number hota hai.',
          'Correct answer: total 1 + 3 + 5 + 7 + 9 = 25, count is 5 — 25 / 5 = 5. The average of odd numbers is the middle number.'
        )
      }
    ],
    keyNotes: [
      t(
        'Har average sawaal total = average x count se shuru karo.',
        'Start every average question with total = average x count.'
      ),
      t(
        'Weighted average: (value x weight) ka sum / weights ka sum — 80, 90, 70 weights 3, 2, 5 ke saath 77 deta hai.',
        'Weighted average: sum of (value x weight) / sum of weights — 80, 90, 70 with weights 3, 2, 5 gives 77.'
      ),
      t(
        'Naya number add ho ya purana nikle — total aur count dono badlo.',
        'When a new number is added or an old one removed, change both the total and the count.'
      ),
      t(
        'Average speed = total distance / total time — speeds ka simple average galat hai.',
        'Average speed = total distance / total time — a simple average of speeds is wrong.'
      ),
      t(
        'Cricket average mein not out innings denominator mein count nahi hoti.',
        'In a cricket average, not-out innings do not count in the denominator.'
      )
    ],
    practice: {
      title: t(
        'Practice: Class ke Baaki 20 Students ka Average Nikalo',
        'Practice: Find the Average of the Other 20 Students'
      ),
      task: t(
        '30 students ki class ka average 72 hai. Unmein se 10 students ka average 80 hai. Baaki 20 students ka average nikalo: pehle class ka total nikalo, phir 10 students ka total ghatao, phir 20 se divide karo. Starter code run karo — expected output mein Average of other 20: 68.0 aana chahiye.',
        'A class of 30 students has an average of 72. Out of them, 10 students have an average of 80. Find the average of the other 20 students: first find the class total, then subtract the total of the 10 students, then divide by 20. Run the starter code — the expected output should show Average of other 20: 68.0.'
      ),
      language: 'python',
      starter: `total = 30 * 72
top10 = 10 * 80
rest = total - top10
print("Class total:", total)
print("Rest total:", rest)
print("Average of other 20:", rest / 20)`,
      expected: `Class total: 2160
Rest total: 1360
Average of other 20: 68.0`
    },
    readMinutes: 12
  };

const quantProfitLossAdvanced: Article = {
    id: 'quant-profit-loss-advanced',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Profit aur Loss Advanced — Successive Discounts aur Faulty Weights',
      'Profit and Loss Advanced — Successive Discounts and Faulty Weights'
    ),
    summary: t(
      'Basic profit-loss se aage badho: do discounts ke baad asli profit, kharab tarazu (faulty weight) se chhupa profit, aur marked price se cost price wapas nikalna — har number hand-check aur Python se verified.',
      'Go beyond basic profit and loss: the real profit after two discounts, the hidden profit from a faulty weight, and finding the cost price back from the marked price — every number checked by hand and verified with Python.'
    ),
    sections: [
      {
        heading: t(
          '1. Advanced Profit-Loss Kya Hai? (CP, MP, SP aur Discount ka Chain)',
          '1. What Is Advanced Profit and Loss? (The CP, MP, SP, and Discount Chain)'
        ),
        body: t(
          `Basic profit-loss mein teen prices hote hain: **CP** (cost price — khareedne ki keemat), **SP** (selling price — bechne ki keemat) aur **MP** (marked price — tag par likhi keemat). Profit ya loss hamesha **CP par** calculate hota hai: profit% = \`(SP - CP) / CP x 100\`. Discount hamesha **MP par** calculate hota hai: discount% = \`(MP - SP) / MP x 100\`. Yeh do alag base hain — profit ka base CP hai, discount ka base MP hai — aur inko mix karna hi sabse badi galti hai.

Advanced sawaal mein chain banti hai: CP se MP (markup), MP se SP (discount), aur phir SP se CP compare karke profit ya loss. Example: CP ₹800 hai, MP ₹1000 hai, phir 10% discount, phir 10% aur discount. Pehla discount: \`1000 x 0.90 = 900\`. Doosra discount: \`900 x 0.90 = 810\`. SP ₹810 hai, CP ₹800 hai — profit sirf ₹10 hai, matlab **1.25%**. Markup 25% tha, par do discounts ne profit ko lagbhag khatm kar diya. Yahi advanced profit-loss hai: ek hi sawaal mein markup, do discounts aur final profit — teeno steps.

**Faulty weight** doosra advanced concept hai: dukaan wala 1 kg ke paise lekar 900 gram deta hai, aur keemat CP par bechta hai. Woh kehta hai "koi profit nahi", par asal mein usne 900 gram ki cheez ke paise mein 1000 gram ki keemat li hai. Profit = \`(1000 - 900) / 900 x 100 = 11.11%\`. Yahan base 900 hai (jo asal mein diya), 1000 nahi (jo charge kiya) — base galat lene par jawab 10% aayega, jo galat hai.`,
          `Basic profit and loss has three prices: **CP** (cost price — the buying price), **SP** (selling price — the selling price), and **MP** (marked price — the price on the tag). Profit or loss is always calculated on **CP**: profit% = \`(SP - CP) / CP x 100\`. Discount is always calculated on **MP**: discount% = \`(MP - SP) / MP x 100\`. These are two different bases — the base for profit is CP, the base for discount is MP — and mixing them up is the biggest mistake.

In advanced questions a chain forms: CP to MP (markup), MP to SP (discount), and then SP compared with CP to find profit or loss. Example: CP is ₹800, MP is ₹1000, then a 10% discount, then another 10% discount. First discount: \`1000 x 0.90 = 900\`. Second discount: \`900 x 0.90 = 810\`. SP is ₹810, CP is ₹800 — the profit is only ₹10, which means **1.25%**. The markup was 25%, but the two discounts almost wiped out the profit. That is advanced profit and loss: markup, two discounts, and the final profit in one question — all three steps.

A **faulty weight** is the second advanced concept: a shopkeeper charges for 1 kg but gives 900 grams, selling at CP. He claims "no profit", but he actually charged the price of 1000 grams for 900 grams of goods. Profit = \`(1000 - 900) / 900 x 100 = 11.11%\`. Here the base is 900 (what was actually given), not 1000 (what was charged) — using the wrong base gives 10%, which is wrong.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Festival Sale, Kirana Shop aur Online Discount',
          '2. Real-Life Examples: Festival Sale, Grocery Shop, and Online Discount'
        ),
        body: t(
          `Pehla example hai **festival sale**. Ek jacket ka CP ₹800 hai aur dukaan wala us par ₹1000 ka tag lagata hai (25% markup). Festival mein pehle 10% off, phir extra 10% off. Final SP ₹810 banta hai aur profit sirf 1.25% rehta hai. Customer ko lagta hai usne 20% bachaya, dukaan wale ko lagta hai usne 25% kamaya — dono galat hain, kyunki discount MP par lagta hai aur profit CP par. Asli hisaab sirf chain se nikalta hai.

Doosra example hai **kirana shop ka tarazu**. Dukaan wala 1 kg ke paise lekar 900 gram deta hai. Har 900 gram par uska profit 100 gram ki keemat hai, matlab \`100/900 x 100 = 11.11%\`. Agar woh 800 gram de, toh profit \`200/800 x 100 = 25%\` ho jaata hai. Jitna kam weight dega, utna zyada profit — aur customer ko pata bhi nahi chalega, kyunki bill par rate sahi likha hota hai.

Teesra example hai **online discount**. Ek phone ka MP ₹20,000 hai, site 20% off aur phir extra 10% off deti hai. Final price: \`20000 x 0.80 = 16000\`, \`16000 x 0.90 = 14400\`. Total discount \`5600\` hai, matlab 28% — site ka "30% off" wala banner galat hai. Successive discounts kabhi add nahi hote, yeh percentages wale article ka wahi rule hai, bas yahan uska profit par asar dikh raha hai.`,
          `The first example is a **festival sale**. A jacket has a CP of ₹800 and the shopkeeper tags it at ₹1000 (25% markup). In the festival sale there is first 10% off, then an extra 10% off. The final SP becomes ₹810 and the profit is only 1.25%. The customer thinks they saved 20%, the shopkeeper thinks he earned 25% — both are wrong, because discount applies to MP and profit applies to CP. Only the chain gives the true figure.

The second example is a **grocery shop scale**. The shopkeeper charges for 1 kg but gives 900 grams. On every 900 grams his profit is the price of 100 grams, which means \`100/900 x 100 = 11.11%\`. If he gives 800 grams, the profit becomes \`200/800 x 100 = 25%\`. The less weight he gives, the more profit he makes — and the customer never knows, because the rate on the bill is correct.

The third example is an **online discount**. A phone has an MP of ₹20,000, and the site gives 20% off and then an extra 10% off. Final price: \`20000 x 0.80 = 16000\`, \`16000 x 0.90 = 14400\`. The total discount is \`5600\`, which means 28% — the site's "30% off" banner is wrong. Successive discounts never add up; this is the same rule from the percentages article, only now you see its effect on profit.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: CP 800, MP 1000, Do Baar 10% Discount (Dry Run ke Saath)',
          '3. Step-by-Step: CP 800, MP 1000, Two 10% Discounts (with a Dry Run)'
        ),
        body: t(
          `Ab hum worked example ko step-by-step solve karte hain: CP ₹800, MP ₹1000, phir 10% discount, phir 10% aur discount.
- **Step 1:** Markup nikalo: MP - CP = \`1000 - 800 = 200\`, matlab markup \`200/800 x 100 = 25%\`. Dukaan wale ne 25% upar tag lagaya.
- **Step 2:** Pehla 10% discount MP par: \`1000 x 0.90 = 900\`. Price ab ₹900 hai.
- **Step 3:** Doosra 10% discount **900** par: \`900 x 0.90 = 810\`. Final SP ₹810 hai.
- **Step 4:** Profit nikalo: SP - CP = \`810 - 800 = 10\`. Profit% = \`10/800 x 100 = 1.25%\`. Jawab: **₹10 profit, 1.25%**.

**Dry run (Python se):** code ne wahi steps chalaye — Cost price 800, Selling price 810.0, Profit 10.0, Profit % 1.25. Check bhi karo: single discount \`1 - 0.90 x 0.90 = 1 - 0.81 = 19%\` hai, isliye SP = \`1000 x 0.81 = 810\` — dono tareeke se wahi jawab. Agar aap 20% discount samajh kar SP 800 nikalte, toh profit zero aata — galat. Do discounts ka single discount 19% hai, 20% nahi.`,
          `Now let us solve the worked example step by step: CP ₹800, MP ₹1000, then a 10% discount, then another 10% discount.
- **Step 1:** Find the markup: MP - CP = \`1000 - 800 = 200\`, which means a markup of \`200/800 x 100 = 25%\`. The shopkeeper tagged it 25% above cost.
- **Step 2:** First 10% discount on MP: \`1000 x 0.90 = 900\`. The price is now ₹900.
- **Step 3:** Second 10% discount on **900**: \`900 x 0.90 = 810\`. The final SP is ₹810.
- **Step 4:** Find the profit: SP - CP = \`810 - 800 = 10\`. Profit% = \`10/800 x 100 = 1.25%\`. Answer: **₹10 profit, 1.25%**.

**Dry run (with Python):** the code ran the same steps — Cost price 800, Selling price 810.0, Profit 10.0, Profit % 1.25. Check it too: the single discount is \`1 - 0.90 x 0.90 = 1 - 0.81 = 19%\`, so SP = \`1000 x 0.81 = 810\` — both routes give the same answer. If you had taken a 20% discount and got SP 800, the profit would be zero — wrong. The single discount of two 10% discounts is 19%, not 20%.`
        ),
        code: {
          title: t(
            'Do Discounts ke Baad Asli Profit Nikalna',
            'Finding the Real Profit After Two Discounts'
          ),
          language: 'python',
          code: `cp = 800
mp = 1000
sp = mp * 0.90 * 0.90
print("Cost price:", cp)
print("Selling price:", sp)
print("Profit:", sp - cp)
print("Profit %:", (sp - cp) / cp * 100)`,
          output: `Cost price: 800
Selling price: 810.0
Profit: 10.0
Profit %: 1.25`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Profit ka Base, Discount Add Karna aur MP ko CP Samajhna',
          '4. Common Mistakes: The Base of Profit, Adding Discounts, and Mistaking MP for CP'
        ),
        body: t(
          `Is topic mein chaar galtiyan sabse zyada hoti hain. **Galti 1: profit ko SP ya MP par calculate karna.** Profit% ka base hamesha **CP** hota hai. CP 500, SP 650 hai toh profit \`150/500 x 100 = 30%\` hai, \`150/650 x 100 = 23.08%\` nahi. Base galat lene par har jawab galat aayega.

**Galti 2: do discounts ko add kar dena.** 10% + 10% ka single discount 20% nahi, 19% hai. MP 1000 par SP \`1000 x 0.81 = 810\` hota hai, \`1000 x 0.80 = 800\` nahi. Yeh percentages wale article ka wahi rule hai — multipliers multiply karo.

**Galti 3: MP ko CP samajh lena.** "₹1000 ki cheez 10% discount par bechi" — yahan 1000 MP hai, CP nahi. Bina CP jaane profit nahi nikal sakta. Agar CP nahi diya, toh pehle CP nikalo (jaise agle section mein), phir profit nikalo.

**Galti 4: faulty weight mein base galat lena.** 900 gram dekar 1000 gram ke paise lene par profit \`100/900 x 100 = 11.11%\` hai, \`100/1000 x 100 = 10%\` nahi. Base woh hai jo **asal mein diya** (900), woh nahi jo charge kiya (1000). Profit hamesha cost par calculate hota hai — aur yahan cost 900 gram ki hai.`,
          `Four mistakes are most common in this topic. **Mistake 1: calculating profit on SP or MP.** The base of profit% is always **CP**. With CP 500 and SP 650, the profit is \`150/500 x 100 = 30%\`, not \`150/650 x 100 = 23.08%\`. A wrong base makes every answer wrong.

**Mistake 2: adding two discounts.** The single discount for 10% + 10% is 19%, not 20%. On MP 1000, SP is \`1000 x 0.81 = 810\`, not \`1000 x 0.80 = 800\`. This is the same rule from the percentages article — multiply the multipliers.

**Mistake 3: mistaking MP for CP.** "An item of ₹1000 sold at a 10% discount" — here 1000 is the MP, not the CP. Without the CP you cannot find the profit. If CP is not given, find it first (as in the next section), then find the profit.

**Mistake 4: using the wrong base for a faulty weight.** Charging for 1000 grams while giving 900 grams gives a profit of \`100/900 x 100 = 11.11%\`, not \`100/1000 x 100 = 10%\`. The base is what was **actually given** (900), not what was charged (1000). Profit is always calculated on cost — and here the cost is 900 grams.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: No Profit No Loss, SP se CP Wapas aur 100% Loss',
          '5. Edge Cases: No Profit No Loss, CP Back from SP, and 100% Loss'
        ),
        body: t(
          `Edge cases yaad rakho. **Pehla: no profit no loss.** CP ₹600 hai, MP ₹750 hai, discount 20% hai: SP = \`750 x 0.80 = 600\` — bilkul CP ke barabar. Profit 0 hai, loss 0 hai. Aisa tab hota hai jab markup aur discount ek doosre ko cancel kar dein: \`1.25 x 0.80 = 1.00\`. Exam mein yeh numbers jaan-boojh kar chune jaate hain.

**Doosra: SP se CP wapas nikalna.** SP ₹1100 hai aur profit 10% hai — CP kitna hai? Galat tareeka: \`1100 - 110 = 990\`. Sahi tareeka: CP = \`SP / 1.10 = 1100 / 1.10 = 1000\`. Kyunki profit CP par laga tha, isliye divide karna hai, subtract nahi. Loss wale case mein bhi wahi: SP ₹900 hai aur loss 10% hai, toh CP = \`900 / 0.90 = 1000\`.

**Teesra: 100% loss.** Agar cheez free mein de di (SP = 0), toh loss \`100%\` hai — isse zyada loss nahi ho sakta. Loss% kabhi 100% se zyada nahi hota, jabki profit% 100% se zyada ho sakta hai (CP 100, SP 300 ho toh profit 200% hai). Yeh asymmetry exam mein poochhi jaati hai.

**Chautha: faulty weight mein discount bhi ho.** Dukaan wala 900 gram de aur upar se 10% discount bhi de: pehle weight ka profit 11.11%, phir discount ka asar. Dono ko ek saath chain mein calculate karo — pehle SP nikalo (discount ke saath), phir uski cost (900 gram) se compare karo.`,
          `Remember these edge cases. **First: no profit, no loss.** CP is ₹600, MP is ₹750, discount is 20%: SP = \`750 x 0.80 = 600\` — exactly equal to CP. Profit is 0 and loss is 0. This happens when the markup and the discount cancel each other out: \`1.25 x 0.80 = 1.00\`. Exams deliberately choose numbers like these.

**Second: finding CP back from SP.** SP is ₹1100 and profit is 10% — what is CP? The wrong way: \`1100 - 110 = 990\`. The correct way: CP = \`SP / 1.10 = 1100 / 1.10 = 1000\`. Because the profit was applied to CP, you must divide, not subtract. The same holds for a loss: SP ₹900 and loss 10% gives CP = \`900 / 0.90 = 1000\`.

**Third: 100% loss.** If an item is given away free (SP = 0), the loss is \`100%\` — a loss can never be more than that. Loss% never exceeds 100%, while profit% can exceed 100% (CP 100, SP 300 means a profit of 200%). This asymmetry is asked in exams.

**Fourth: a discount on top of a faulty weight.** A shopkeeper gives 900 grams and also gives a 10% discount: first the weight profit of 11.11%, then the effect of the discount. Calculate both together in a chain — first find SP (with the discount), then compare it with the cost (900 grams).`
        )
      },
      {
        heading: t(
          '6. What-If: Markup Badhe, Discount Badhe, ya Dono Barabar Hon?',
          '6. What-If: Bigger Markup, Bigger Discount, or Both Equal?'
        ),
        body: t(
          `**What if: markup badha dein?** CP 800, MP 1200 (50% markup), phir do baar 10% discount: SP = \`1200 x 0.81 = 972\`, profit = \`172\`, profit% = \`172/800 x 100 = 21.5%\`. Markup badhane se profit wapas aa gaya. Dukaan wale isi liye pehle MP badha kar discount dete hain — discount ka dikhawa aur profit ka hisaab alag hota hai.

**What if: discount badha dein?** CP 800, MP 1000, phir 20% + 20% discount: SP = \`1000 x 0.80 x 0.80 = 640\`, loss = \`160\`, loss% = \`160/800 x 100 = 20%\`. Discount markup se zyada ho jaaye toh loss hota hai. Break-even point wahan hai jahan SP = CP ho — is example mein single discount \`20%\` hona chahiye (\`1000 x 0.80 = 800\`).

**What if: ek hi discount ho?** CP 800, MP 1000, sirf 10% discount: SP = 900, profit = 100, profit% = 12.5%. Do discounts (19% single) ne profit ko 12.5% se 1.25% kar diya — doosra discount pehle se zyada nuksaan karta hai kyunki woh badi MP par nahi, chhoti price par lagta hai? Nahi — asal wajah hai ki dono discounts mil kar 19% ban jaate hain, aur markup sirf 25% tha. Margin patla ho gaya.

**What if: CP hi pata na ho?** SP 810 hai, do discounts 10% + 10% the, aur profit 1.25% hai — CP nikalo: MP = \`810 / 0.81 = 1000\`, phir CP = \`810 / 1.0125 = 800\`. Chain ko ulta chalao — har step mein divide karo.`,
          `**What if the markup is increased?** CP 800, MP 1200 (50% markup), then two 10% discounts: SP = \`1200 x 0.81 = 972\`, profit = \`172\`, profit% = \`172/800 x 100 = 21.5%\`. Raising the markup brings the profit back. That is why shopkeepers raise the MP before giving a discount — the show of discount and the math of profit are different.

**What if the discount is increased?** CP 800, MP 1000, then 20% + 20% discount: SP = \`1000 x 0.80 x 0.80 = 640\`, loss = \`160\`, loss% = \`160/800 x 100 = 20%\`. When the discount exceeds the markup, there is a loss. The break-even point is where SP = CP — in this example a single discount of \`20%\` is needed (\`1000 x 0.80 = 800\`).

**What if there is only one discount?** CP 800, MP 1000, only a 10% discount: SP = 900, profit = 100, profit% = 12.5%. Two discounts (19% single) cut the profit from 12.5% to 1.25%. The second discount hurts more than the first because the two discounts together make 19% while the markup was only 25%. The margin became thin.

**What if CP itself is unknown?** SP is 810, there were two 10% discounts, and the profit is 1.25% — find CP: MP = \`810 / 0.81 = 1000\`, then CP = \`810 / 1.0125 = 800\`. Run the chain backwards — divide at every step.`
        )
      },
      {
        heading: t(
          '7. Summary: Base, Chain aur Faulty Weight ka Formula',
          '7. Summary: Base, Chain, and the Faulty Weight Formula'
        ),
        body: t(
          `Poora article teen baaton mein bandhta hai. **Pehli:** base kabhi mat bhoolo — **profit CP par, discount MP par**. CP 500, SP 650 ho toh profit 30% hai (\`150/500\`), 23.08% nahi. **Doosri:** chain se chalo — CP se MP (markup), MP se SP (discount, multipliers multiply karo), phir SP se CP compare karo. CP 800, MP 1000, do baar 10% discount ka matlab SP ₹810 aur profit sirf **1.25%** hai, kyunki do discounts ka single discount 19% hota hai, 20% nahi.

**Teesri:** faulty weight mein profit = \`(liya gaya weight - diya gaya weight) / diya gaya weight x 100\`. 900 gram dekar 1000 gram ke paise lene par profit **11.11%** hai; 800 gram dene par **25%** hai. Aur SP se CP wapas nikalna ho toh **divide** karo: SP 1100, profit 10% ho toh CP \`1100 / 1.10 = 1000\` hai. Revision ke liye khud se karo: CP 1200 par 25% profit (jawab SP 1500), aur 10% loss par CP 900 (jawab SP 810).`,
          `The whole article comes down to three points. **First:** never forget the base — **profit on CP, discount on MP**. With CP 500 and SP 650, the profit is 30% (\`150/500\`), not 23.08%. **Second:** work through the chain — CP to MP (markup), MP to SP (discount, multiplying the multipliers), then compare SP with CP. CP 800, MP 1000, and two 10% discounts means SP ₹810 and a profit of only **1.25%**, because two 10% discounts make a single discount of 19%, not 20%.

**Third:** for a faulty weight, profit = \`(weight charged - weight given) / weight given x 100\`. Charging for 1000 grams while giving 900 grams gives a profit of **11.11%**; giving 800 grams gives **25%**. And to find CP back from SP, **divide**: SP 1100 with 10% profit means CP is \`1100 / 1.10 = 1000\`. For revision, try these yourself: 25% profit on CP 1200 (answer SP 1500), and a 10% loss on CP 900 (answer SP 810).`
        )
      }
    ],
    diagram: {
      kind: 'flow',
      title: t(
        'Profit-Loss Chain: CP se MP se SP tak',
        'Profit-Loss Chain: From CP to MP to SP'
      ),
      caption: t(
        'Har step ka base alag hai — markup CP par, discount MP par, profit phir CP par',
        'Every step has a different base — markup on CP, discount on MP, profit back on CP'
      ),
      nodes: [
        {
          t: t('CP ₹800', 'CP ₹800'),
          s: t('Cost price — profit ka base', 'Cost price — the base of profit')
        },
        {
          t: t('MP ₹1000 (markup 25%)', 'MP ₹1000 (markup 25%)'),
          s: t('Tag price — discount ka base', 'Tag price — the base of discount')
        },
        {
          t: t('10% off: ₹900, phir 10% off: ₹810', '10% off: ₹900, then 10% off: ₹810'),
          s: t('Do discounts ka single discount 19% hai', 'Two discounts make a single discount of 19%')
        },
        {
          t: t('SP ₹810 — Profit ₹10 (1.25%)', 'SP ₹810 — Profit ₹10 (1.25%)'),
          s: t('Profit = (810 - 800) / 800 x 100', 'Profit = (810 - 800) / 800 x 100')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          'Faulty Weight: 900 Gram Dekar 1000 Gram ke Paise Lena',
          'Faulty Weight: Charging for 1000 Grams While Giving 900'
        ),
        language: 'python',
        code: `print("Real weight given:", 900)
print("Charged for:", 1000)
print("Profit %:", (1000 - 900) / 900 * 100)`,
        output: `Real weight given: 900
Charged for: 1000
Profit %: 11.11111111111111`
      },
      {
        title: t(
          'Profit, Loss Price aur SP — Teen Hisab Ek Saath',
          'Profit, Loss Price, and SP — Three Calculations Together'
        ),
        language: 'python',
        code: `cp = 500
sp = 650
print("Profit:", sp - cp)
print("Profit %:", (sp - cp) / cp * 100)
print("Loss price at 10% loss on 900:", 900 * 0.90)
print("SP at 25% profit on 1200:", 1200 * 1.25)`,
        output: `Profit: 150
Profit %: 30.0
Loss price at 10% loss on 900: 810.0
SP at 25% profit on 1200: 1500.0`
      }
    ],
    mcqs: [
      {
        q: t(
          'CP ₹500 hai aur SP ₹650 hai. Profit % kitna hai?',
          'CP is ₹500 and SP is ₹650. What is the profit %?'
        ),
        opts: [
          t('23.08%', '23.08%'),
          t('25%', '25%'),
          t('30%', '30%'),
          t('15%', '15%')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: profit 150 hai aur base CP hai — 150/500 x 100 = 30%. SP par calculate karne par 23.08% aayega, jo galat hai.',
          'Correct answer: profit is 150 and the base is CP — 150/500 x 100 = 30%. Calculating on SP gives 23.08%, which is wrong.'
        )
      },
      {
        q: t(
          'MP ₹1000 hai. Pehle 20% phir 10% discount mile. Final SP kitna hoga?',
          'MP is ₹1000. First a 20% discount, then a 10% discount. What is the final SP?'
        ),
        opts: [
          t('₹700', '₹700'),
          t('₹720', '₹720'),
          t('₹800', '₹800'),
          t('₹750', '₹750')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 1000 x 0.80 = 800, phir 800 x 0.90 = 720. Single discount 28% hai, 30% nahi.',
          'Correct answer: 1000 x 0.80 = 800, then 800 x 0.90 = 720. The single discount is 28%, not 30%.'
        )
      },
      {
        q: t(
          'Dukaan wala 1 kg ke paise lekar 800 gram deta hai, CP par bechta hai. Profit % kitna hai?',
          'A shopkeeper charges for 1 kg but gives 800 grams, selling at CP. What is the profit %?'
        ),
        opts: [
          t('20%', '20%'),
          t('11.11%', '11.11%'),
          t('25%', '25%'),
          t('10%', '10%')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: profit = (1000 - 800) / 800 x 100 = 25%. Base diya gaya weight (800) hai, charge kiya gaya weight (1000) nahi.',
          'Correct answer: profit = (1000 - 800) / 800 x 100 = 25%. The base is the weight given (800), not the weight charged (1000).'
        )
      },
      {
        q: t(
          'CP ₹900 par 10% loss ho. SP kitna hoga?',
          'There is a 10% loss on CP ₹900. What is the SP?'
        ),
        opts: [
          t('₹990', '₹990'),
          t('₹810', '₹810'),
          t('₹800', '₹800'),
          t('₹900', '₹900')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: SP = 900 x 0.90 = 810. Loss 90 hai, jo CP ka 10% hai.',
          'Correct answer: SP = 900 x 0.90 = 810. The loss is 90, which is 10% of CP.'
        )
      },
      {
        q: t(
          'CP ₹1200 par 25% profit ho. SP kitna hoga?',
          'There is a 25% profit on CP ₹1200. What is the SP?'
        ),
        opts: [
          t('₹1400', '₹1400'),
          t('₹1500', '₹1500'),
          t('₹1300', '₹1300'),
          t('₹1600', '₹1600')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: SP = 1200 x 1.25 = 1500. Profit 300 hai, jo CP ka 25% hai.',
          'Correct answer: SP = 1200 x 1.25 = 1500. The profit is 300, which is 25% of CP.'
        )
      }
    ],
    keyNotes: [
      t(
        'Profit hamesha CP par, discount hamesha MP par calculate hota hai — base kabhi mix mat karo.',
        'Profit is always calculated on CP, discount always on MP — never mix the bases.'
      ),
      t(
        'Do discounts ka single discount unke sum se kam hota hai: 10% + 10% = 19%.',
        'Two discounts as one single discount are less than their sum: 10% + 10% = 19%.'
      ),
      t(
        'Faulty weight profit = (charge kiya - diya gaya) / diya gaya x 100 — 900 gram par 11.11%.',
        'Faulty weight profit = (charged - given) / given x 100 — 11.11% on 900 grams.'
      ),
      t(
        'SP se CP wapas nikalna ho toh divide karo: CP = SP / (1 + profit%).',
        'To find CP back from SP, divide: CP = SP / (1 + profit%).'
      ),
      t(
        'Loss% kabhi 100% se zyada nahi hota, profit% ho sakta hai.',
        'Loss% can never exceed 100%, but profit% can.'
      )
    ],
    practice: {
      title: t(
        'Practice: CP 600, MP 750, 20% Discount — Profit Kitna?',
        'Practice: CP 600, MP 750, 20% Discount — How Much Profit?'
      ),
      task: t(
        'CP ₹600 hai, MP ₹750 hai aur 20% discount milta hai. SP nikalo, phir profit aur profit% nikalo. Starter code run karo — expected output mein Selling price 600.0, Profit 0.0 aur Profit % 0.0 aana chahiye (no profit, no loss).',
        'CP is ₹600, MP is ₹750, and there is a 20% discount. Find SP, then find the profit and profit%. Run the starter code — the expected output should show Selling price 600.0, Profit 0.0, and Profit % 0.0 (no profit, no loss).'
      ),
      language: 'python',
      starter: `cp = 600
mp = 750
sp = mp * 0.80
print("Selling price:", sp)
print("Profit:", sp - cp)
print("Profit %:", (sp - cp) / cp * 100)`,
      expected: `Selling price: 600.0
Profit: 0.0
Profit %: 0.0`
    },
    readMinutes: 12
  };

const quantMockTest1: Article = {
    id: 'quant-mock-test-1',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Mock Test 1 — Mixed 20 Questions (Full Solutions ke Saath)',
      'Mock Test 1 — Mixed 20 Questions (with Full Solutions)'
    ),
    summary: t(
      'Pehla full mock test: percentages, profit-loss, average, time-speed, ratio, SI-CI aur number system — 20 mixed questions, har ek ka short solution aur Python se verified answer.',
      'The first full mock test: percentages, profit and loss, average, time and speed, ratio, SI and CI, and number systems — 20 mixed questions, each with a short solution and an answer verified with Python.'
    ),
    sections: [
      {
        heading: t(
          '1. Mock Test Kaise Dein? (Time, Scoring aur Strategy)',
          '1. How to Take the Mock Test? (Time, Scoring, and Strategy)'
        ),
        body: t(
          `Yeh mock test 20 questions ka hai — har question 1 mark ka hai, total 20 marks. Time limit **30 minute** rakho, matlab har question ke liye lagbhag 1.5 minute. Pehle saare questions ko ek baar padho, jo aate hain unhe pehle karo, aur mushkil wale ko aakhir ke liye chhodo. Calculator use mat karo — exam mein bhi nahi milega — par har answer ko neeche diye gaye solution se check karo.

Scoring ka matlab samjho: **16-20** ka matlab hai aap exam-ready ho; **12-15** ka matlab hai basics aate hain, par speed badhani hai; **8-11** ka matlab hai 2-3 topics dobara padhne hain; **8 se kam** ka matlab hai pehle wale articles (percentages, profit-loss, averages) ek baar phir se padho. Galat hone wale questions ko sirf answer dekh kar chhod mat do — unka solution dobara khud se karo, tabhi woh dobara galat nahi honge.

Har question ke neeche short solution diya hai — sirf formula nahi, ek line mein kaise nikala. Questions 6-10, 11-15 aur 16-20 ke answers neeche wale Python code se bhi verify kiye gaye hain, isliye answers par bharosa karo. Pehle khud solve karo, phir solutions dekho — ulta karne se mock ka koi fayda nahi hai.`,
          `This mock test has 20 questions — 1 mark each, 20 marks in total. Keep a time limit of **30 minutes**, which means about 1.5 minutes per question. First read all the questions once, do the ones you know first, and leave the hard ones for the end. Do not use a calculator — you will not get one in the exam either — but check every answer against the solution given below.

Understand what your score means: **16-20** means you are exam-ready; **12-15** means the basics are clear but speed must improve; **8-11** means 2-3 topics need to be studied again; **below 8** means read the earlier articles (percentages, profit and loss, averages) once more. Do not just look at the answer for questions you got wrong — solve them again yourself, otherwise you will get them wrong again.

A short solution is given below every question — not just the formula, but how it was worked out in one line. The answers to questions 6-10, 11-15, and 16-20 are also verified with the Python code below, so trust the answers. Solve them yourself first, then look at the solutions — doing it the other way round makes the mock useless.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Questions 1-5 (Percent, Profit, Average, Equation, Root)',
          '2. Real-Life Examples: Questions 1-5 (Percent, Profit, Average, Equation, Root)'
        ),
        body: t(
          `**Q1. 240 ka 35% kitna hai?** Solution: \`240 x 35 / 100 = 84\`. Shortcut: 10% hai 24, 30% hai 72, 5% hai 12 — total 84. **Jawab: 84.**

**Q2. CP ₹800 hai aur SP ₹960 hai. Profit % kitna hai?** Solution: profit = \`960 - 800 = 160\`, profit% = \`160 / 800 x 100 = 20%\`. Base CP hai, SP nahi. **Jawab: 20%.**

**Q3. 12, 18, 24 aur 30 ka average kitna hai?** Solution: total = \`12 + 18 + 24 + 30 = 84\`, count 4 hai, average = \`84 / 4 = 21\`. **Jawab: 21.**

**Q4. 2x + 6 = 20 ho toh x kitna hai?** Solution: \`2x = 20 - 6 = 14\`, isliye \`x = 7\`. Check: \`2 x 7 + 6 = 20\` sahi hai. **Jawab: 7.**

**Q5. √144 + √81 kitna hai?** Solution: \`√144 = 12\` aur \`√81 = 9\`, isliye sum = \`12 + 9 = 21\`. Dono perfect squares hain, isliye seedha root nikalo. **Jawab: 21.**

Pehle 5 questions mein se kitne sahi hue? Agar Q2 mein base galat liya (160/960), toh profit-loss wala article dobara padho. Agar Q3 mein total galat joda, toh average ka total = average x count wala rule yaad karo.`,
          `**Q1. What is 35% of 240?** Solution: \`240 x 35 / 100 = 84\`. Shortcut: 10% is 24, 30% is 72, 5% is 12 — total 84. **Answer: 84.**

**Q2. CP is ₹800 and SP is ₹960. What is the profit %?** Solution: profit = \`960 - 800 = 160\`, profit% = \`160 / 800 x 100 = 20%\`. The base is CP, not SP. **Answer: 20%.**

**Q3. What is the average of 12, 18, 24, and 30?** Solution: total = \`12 + 18 + 24 + 30 = 84\`, count is 4, average = \`84 / 4 = 21\`. **Answer: 21.**

**Q4. If 2x + 6 = 20, what is x?** Solution: \`2x = 20 - 6 = 14\`, so \`x = 7\`. Check: \`2 x 7 + 6 = 20\` is correct. **Answer: 7.**

**Q5. What is √144 + √81?** Solution: \`√144 = 12\` and \`√81 = 9\`, so the sum is \`12 + 9 = 21\`. Both are perfect squares, so take the root directly. **Answer: 21.**

How many of the first 5 did you get right? If you used the wrong base in Q2 (160/960), read the profit and loss article again. If you added the total wrong in Q3, remember the rule total = average x count.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: Questions 6-10 (SI, Distance, Ratio, Discount, Power)',
          '3. Step-by-Step: Questions 6-10 (SI, Distance, Ratio, Discount, Power)'
        ),
        body: t(
          `**Q6. ₹5000 par 8% saalana se 3 saal ka simple interest kitna hai?** Solution: SI = \`P x R x T / 100 = 5000 x 8 x 3 / 100 = 1200\`. **Jawab: ₹1200.**

**Q7. 60 km/h ki speed se 2.5 ghante mein kitni doori tay hogi?** Solution: distance = \`speed x time = 60 x 2.5 = 150\` km. **Jawab: 150 km.**

**Q8. ₹64 ko 3:5 ke ratio mein baanto. Dono hisse kitne honge?** Solution: total parts = \`3 + 5 = 8\`, ek part = \`64 / 8 = 8\`, pehla hissa = \`3 x 8 = 24\`, doosra hissa = \`5 x 8 = 40\`. Check: \`24 + 40 = 64\`. **Jawab: ₹24 aur ₹40.**

**Q9. ₹1200 ki cheez par 15% discount mile. Final price kitni hogi?** Solution: \`1200 x 0.85 = 1020\`. Discount \`180\` hai. **Jawab: ₹1020.**

**Q10. 2^6 ka value kya hai?** Solution: \`2^6 = 64\`. Yaad rakho: \`2^10 = 1024\` hota hai. **Jawab: 64.**

Neeche wala code Q6 se Q10 tak ke saare answers ko verify karta hai — output mein 1200.0, 150.0, 24.0 aur 40.0, 1020.0 aur 64 aane chahiye, bilkul solutions jaisi.`,
          `**Q6. What is the simple interest on ₹5000 at 8% a year for 3 years?** Solution: SI = \`P x R x T / 100 = 5000 x 8 x 3 / 100 = 1200\`. **Answer: ₹1200.**

**Q7. How far will you travel at 60 km/h in 2.5 hours?** Solution: distance = \`speed x time = 60 x 2.5 = 150\` km. **Answer: 150 km.**

**Q8. Divide ₹64 in the ratio 3:5. What are the two parts?** Solution: total parts = \`3 + 5 = 8\`, one part = \`64 / 8 = 8\`, first part = \`3 x 8 = 24\`, second part = \`5 x 8 = 40\`. Check: \`24 + 40 = 64\`. **Answer: ₹24 and ₹40.**

**Q9. An item of ₹1200 gets a 15% discount. What is the final price?** Solution: \`1200 x 0.85 = 1020\`. The discount is \`180\`. **Answer: ₹1020.**

**Q10. What is the value of 2^6?** Solution: \`2^6 = 64\`. Remember: \`2^10 = 1024\`. **Answer: 64.**

The code below verifies all the answers from Q6 to Q10 — the output should show 1200.0, 150.0, 24.0 and 40.0, 1020.0, and 64, exactly like the solutions.`
        ),
        code: {
          title: t(
            'Mock Test 1: Questions 6-10 ke Answers Verify Karna',
            'Mock Test 1: Verifying the Answers to Questions 6-10'
          ),
          language: 'python',
          code: `print("Q6 SI:", 5000 * 0.08 * 3)
print("Q7 distance:", 60 * 2.5)
print("Q8 parts:", 64 * 3 / 8, 64 * 5 / 8)
print("Q9 price after 15% off:", 1200 * 0.85)
print("Q10 2^6:", 2 ** 6)`,
          output: `Q6 SI: 1200.0
Q7 distance: 150.0
Q8 parts: 24.0 40.0
Q9 price after 15% off: 1020.0
Q10 2^6: 64`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Mock Test mein Sabse Zyada Galtiyan Kahan Hoti Hain?',
          '4. Common Mistakes: Where Do the Most Mistakes Happen in a Mock Test?'
        ),
        body: t(
          `Mock test mein galtiyan aksar calculation mein nahi, **tareeke** mein hoti hain. **Galti 1: base galat lena.** Q2 mein profit SP par nikalna, Q9 mein discount CP par nikalna — base hamesha pehle likho: profit ka base CP, discount ka base MP. **Galti 2: average speed ka simple average lena.** Q13 mein (30 + 60) / 2 = 45 likhna galat hai — average speed hamesha total distance / total time hoti hai, jawab 40 hai.

**Galti 3: CI aur SI ko mix karna.** Q12 mein CI ka formula \`P(1 + R/100)^T\` hai — \`10000 x 1.10^2 = 12100\` — SI ki tarah \`10000 + 2000 = 12000\` nahi. CI mein interest par bhi interest lagta hai, isliye CI hamesha SI se zyada hota hai. **Galti 4: ratio mein total parts bhoolna.** Q8 mein 64 ko seedha 3 aur 5 se divide karne ki koshish mat karo — pehle total parts (8) nikalo, phir ek part (8) nikalo, phir multiply karo.

**Galti 5: time pressure mein check chhodna.** Har answer ke baad 5 second ka reverse check karo: Q4 mein x = 7 ko equation mein wapas daalo, Q8 mein 24 + 40 = 64 check karo, Q19 mein 180/20 = 9 check karo. Yeh 5 second ek mark bacha sakte hain.`,
          `In a mock test, mistakes usually happen not in calculation but in the **method**. **Mistake 1: using the wrong base.** Finding profit on SP in Q2, or discount on CP in Q9 — always write the base first: the base of profit is CP, the base of discount is MP. **Mistake 2: taking a simple average of speeds.** Writing (30 + 60) / 2 = 45 in Q13 is wrong — average speed is always total distance / total time, and the answer is 40.

**Mistake 3: mixing up CI and SI.** In Q12 the CI formula is \`P(1 + R/100)^T\` — \`10000 x 1.10^2 = 12100\` — not \`10000 + 2000 = 12000\` like SI. In CI, interest also earns interest, so CI is always more than SI. **Mistake 4: forgetting the total parts in a ratio.** In Q8 do not try to divide 64 directly by 3 and 5 — first find the total parts (8), then one part (8), then multiply.

**Mistake 5: skipping the check under time pressure.** After every answer, spend 5 seconds on a reverse check: put x = 7 back into the equation in Q4, check 24 + 40 = 64 in Q8, check 180/20 = 9 in Q19. Those 5 seconds can save a mark.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Questions 11-15 (Work, CI, Speed, Root, Population)',
          '5. Edge Cases: Questions 11-15 (Work, CI, Speed, Root, Population)'
        ),
        body: t(
          `**Q11. A ek kaam 10 din mein aur B 15 din mein karta hai. Dono mil kar kitne din mein karenge?** Solution: ek din ka kaam = \`1/10 + 1/15 = 5/30 = 1/6\`, isliye total din = **6 din**. Shortcut: \`(10 x 15) / (10 + 15) = 150 / 25 = 6\`.

**Q12. ₹10000 par 10% saalana se 2 saal ka compound interest amount kitna hoga?** Solution: amount = \`10000 x 1.10^2 = 10000 x 1.21 = 12100\`. CI = \`12100 - 10000 = 2100\`. **Jawab: ₹12100 (CI ₹2100).**

**Q13. 60 km 30 km/h se aur 60 km 60 km/h se chalo. Average speed kitni hogi?** Solution: total distance 120 km, total time \`2 + 1 = 3\` ghante, average speed = \`120 / 3 = 40\` km/h. **Jawab: 40 km/h.**

**Q14. x^2 = 81 ho toh x (positive) kitna hai?** Solution: \`x = √81 = 9\`. Negative root -9 bhi hota hai, par sawaal mein positive maanga hai. **Jawab: 9.**

**Q15. Population 20,000 hai aur ek saal mein 10% badhti hai. Nayi population kitni hogi?** Solution: \`20000 x 1.10 = 22000\`. **Jawab: 22,000.**

Neeche wala code Q11 se Q15 tak ke answers verify karta hai — output mein 6.0, 12100.0, 40.0, 9.0 aur 22000.0 aane chahiye.`,
          `**Q11. A does a job in 10 days and B in 15 days. Together, in how many days will they do it?** Solution: one day's work = \`1/10 + 1/15 = 5/30 = 1/6\`, so total days = **6 days**. Shortcut: \`(10 x 15) / (10 + 15) = 150 / 25 = 6\`.

**Q12. What is the compound interest amount on ₹10000 at 10% a year for 2 years?** Solution: amount = \`10000 x 1.10^2 = 10000 x 1.21 = 12100\`. CI = \`12100 - 10000 = 2100\`. **Answer: ₹12100 (CI ₹2100).**

**Q13. Drive 60 km at 30 km/h and 60 km at 60 km/h. What is the average speed?** Solution: total distance 120 km, total time \`2 + 1 = 3\` hours, average speed = \`120 / 3 = 40\` km/h. **Answer: 40 km/h.**

**Q14. If x^2 = 81, what is x (positive)?** Solution: \`x = √81 = 9\`. The negative root -9 also exists, but the question asks for the positive one. **Answer: 9.**

**Q15. A population is 20,000 and grows by 10% in one year. What is the new population?** Solution: \`20000 x 1.10 = 22000\`. **Answer: 22,000.**

The code below verifies the answers from Q11 to Q15 — the output should show 6.0, 12100.0, 40.0, 9.0, and 22000.0.`
        )
      },
      {
        heading: t(
          '6. What-If: Questions 16-20 (Faulty Weight, Ratio, Percent Change, Train, LCM)',
          '6. What-If: Questions 16-20 (Faulty Weight, Ratio, Percent Change, Train, LCM)'
        ),
        body: t(
          `**Q16. Dukaan wala 1 kg ke paise lekar 900 gram deta hai, CP par bechta hai. Profit % kitna hai?** Solution: profit = \`(1000 - 900) / 900 x 100 = 11.11%\`. Base diya gaya weight (900) hai. **Jawab: 11.11%.**

**Q17. Pita ki umar 40 saal hai aur bete ki 10 saal hai. Unki umar ka ratio kitna hai?** Solution: \`40 : 10 = 4 : 1\`. Dono ko 10 se divide karo. **Jawab: 4:1.**

**Q18. Ek number 50 se badh kar 65 ho gaya. Percent increase kitna hai?** Solution: increase = \`15\`, percent = \`15 / 50 x 100 = 30%\`. Base purana number (50) hai. **Jawab: 30%.**

**Q19. 180 metre lambi train 20 m/s ki speed se ek pole ko kitne second mein paar karegi?** Solution: time = \`distance / speed = 180 / 20 = 9\` second. Pole ki length zero hoti hai, isliye sirf train ki length count hoti hai. **Jawab: 9 second.**

**Q20. 12 aur 18 ka LCM kitna hai?** Solution: 12 ke multiples: 12, 24, **36**; 18 ke multiples: 18, **36** — common sabse chhota 36 hai. **Jawab: 36.**

Neeche wala code Q16 se Q20 tak ke answers verify karta hai — output mein 11.111..., 40 aur 10, 30.0, 9.0 aur 36 aane chahiye.`,
          `**Q16. A shopkeeper charges for 1 kg but gives 900 grams, selling at CP. What is the profit %?** Solution: profit = \`(1000 - 900) / 900 x 100 = 11.11%\`. The base is the weight given (900). **Answer: 11.11%.**

**Q17. A father is 40 years old and his son is 10 years old. What is the ratio of their ages?** Solution: \`40 : 10 = 4 : 1\`. Divide both by 10. **Answer: 4:1.**

**Q18. A number grew from 50 to 65. What is the percent increase?** Solution: increase = \`15\`, percent = \`15 / 50 x 100 = 30%\`. The base is the old number (50). **Answer: 30%.**

**Q19. A train 180 metres long crosses a pole at 20 m/s. In how many seconds?** Solution: time = \`distance / speed = 180 / 20 = 9\` seconds. A pole has zero length, so only the train's length counts. **Answer: 9 seconds.**

**Q20. What is the LCM of 12 and 18?** Solution: multiples of 12: 12, 24, **36**; multiples of 18: 18, **36** — the smallest common one is 36. **Answer: 36.**

The code below verifies the answers from Q16 to Q20 — the output should show 11.111..., 40 and 10, 30.0, 9.0, and 36.`
        )
      },
      {
        heading: t(
          '7. Summary: Answer Key, Score aur Agla Step',
          '7. Summary: Answer Key, Score, and Next Step'
        ),
        body: t(
          `**Answer key (20 questions):** Q1 84, Q2 20%, Q3 21, Q4 7, Q5 21, Q6 ₹1200, Q7 150 km, Q8 ₹24 aur ₹40, Q9 ₹1020, Q10 64, Q11 6 din, Q12 ₹12100, Q13 40 km/h, Q14 9, Q15 22,000, Q16 11.11%, Q17 4:1, Q18 30%, Q19 9 second, Q20 36.

**Score ka matlab:** 16-20 — exam-ready ho, ab Mock Test 2 do. 12-15 — basics clear hain, par speed badhao: har question ko 1.5 minute mein karo, aur galat wale questions ke articles dobara padho. 8-11 — 2-3 topics kamzor hain: galat questions ko note karo aur unke articles (percentages, profit-loss, averages) dobara padho. 8 se kam — pehle wale articles ek baar phir se shuru se padho, phir yeh mock dobara do.

**Agla step:** jo questions galat hue, unhe ek list mein likho — jaise "Q13 average speed" ya "Q16 faulty weight" — aur un topics ke articles dobara padho. Phir Mock Test 2 do aur score compare karo. Score badhna chahiye — agar nahi badha, toh galat questions ko dobara khud se solve karo, sirf solution mat padho.`,
          `**Answer key (20 questions):** Q1 84, Q2 20%, Q3 21, Q4 7, Q5 21, Q6 ₹1200, Q7 150 km, Q8 ₹24 and ₹40, Q9 ₹1020, Q10 64, Q11 6 days, Q12 ₹12100, Q13 40 km/h, Q14 9, Q15 22,000, Q16 11.11%, Q17 4:1, Q18 30%, Q19 9 seconds, Q20 36.

**What your score means:** 16-20 — you are exam-ready, now take Mock Test 2. 12-15 — basics are clear, but improve speed: do every question in 1.5 minutes, and re-read the articles of the questions you got wrong. 8-11 — 2-3 topics are weak: note the wrong questions and re-read their articles (percentages, profit and loss, averages). Below 8 — read the earlier articles again from the start, then retake this mock.

**Next step:** write the questions you got wrong in a list — like "Q13 average speed" or "Q16 faulty weight" — and re-read the articles for those topics. Then take Mock Test 2 and compare your score. The score should go up — if it does not, solve the wrong questions again yourself instead of just reading the solution.`
        )
      }
    ],
    diagram: {
      kind: 'boxes',
      title: t(
        'Mock Test 1: 20 Questions ka Map',
        'Mock Test 1: Map of the 20 Questions'
      ),
      caption: t(
        'Har group ke 5 questions — pehle khud solve karo, phir solution aur code se check karo',
        '5 questions in every group — solve them yourself first, then check with the solution and the code'
      ),
      nodes: [
        {
          t: t('Q1-5: Percent, Profit, Average, Equation, Root', 'Q1-5: Percent, Profit, Average, Equation, Root'),
          s: t('Answers: 84, 20%, 21, 7, 21', 'Answers: 84, 20%, 21, 7, 21')
        },
        {
          t: t('Q6-10: SI, Distance, Ratio, Discount, Power', 'Q6-10: SI, Distance, Ratio, Discount, Power'),
          s: t('Answers: 1200, 150 km, 24 aur 40, 1020, 64', 'Answers: 1200, 150 km, 24 and 40, 1020, 64')
        },
        {
          t: t('Q11-15: Work, CI, Speed, Root, Population', 'Q11-15: Work, CI, Speed, Root, Population'),
          s: t('Answers: 6 din, 12100, 40 km/h, 9, 22000', 'Answers: 6 days, 12100, 40 km/h, 9, 22000')
        },
        {
          t: t('Q16-20: Faulty Weight, Ratio, Percent, Train, LCM', 'Q16-20: Faulty Weight, Ratio, Percent, Train, LCM'),
          s: t('Answers: 11.11%, 4:1, 30%, 9 second, 36', 'Answers: 11.11%, 4:1, 30%, 9 seconds, 36')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          'Mock Test 1: Questions 11-15 ke Answers Verify Karna',
          'Mock Test 1: Verifying the Answers to Questions 11-15'
        ),
        language: 'python',
        code: `print("Q11 together:", (10 * 15) / (10 + 15))
print("Q12 CI amount:", round(10000 * 1.10 ** 2, 2))
print("Q13 avg speed:", 120 / (60 / 30 + 60 / 60))
print("Q14 sqrt(81):", 81 ** 0.5)
print("Q15 population:", 20000 * 1.10)`,
        output: `Q11 together: 6.0
Q12 CI amount: 12100.0
Q13 avg speed: 40.0
Q14 sqrt(81): 9.0
Q15 population: 22000.0`
      },
      {
        title: t(
          'Mock Test 1: Questions 16-20 ke Answers Verify Karna',
          'Mock Test 1: Verifying the Answers to Questions 16-20'
        ),
        language: 'python',
        code: `import math
print("Q16 faulty weight profit %:", (1000 - 900) / 900 * 100)
print("Q17 ratio parts:", 40, 10)
print("Q18 increase %:", (65 - 50) / 50 * 100)
print("Q19 time:", 180 / 20)
print("Q20 LCM:", math.lcm(12, 18))`,
        output: `Q16 faulty weight profit %: 11.11111111111111
Q17 ratio parts: 40 10
Q18 increase %: 30.0
Q19 time: 9.0
Q20 LCM: 36`
      }
    ],
    mcqs: [
      {
        q: t(
          '250 ka 20% kitna hai?',
          'What is 20% of 250?'
        ),
        opts: [
          t('40', '40'),
          t('50', '50'),
          t('60', '60'),
          t('25', '25')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 250 x 20 / 100 = 50. Shortcut: 10% hai 25, isliye 20% hai 50.',
          'Correct answer: 250 x 20 / 100 = 50. Shortcut: 10% is 25, so 20% is 50.'
        )
      },
      {
        q: t(
          'CP ₹600 hai aur profit 20% hai. SP kitna hoga?',
          'CP is ₹600 and profit is 20%. What is the SP?'
        ),
        opts: [
          t('₹660', '₹660'),
          t('₹700', '₹700'),
          t('₹720', '₹720'),
          t('₹750', '₹750')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: SP = 600 x 1.20 = 720. Profit 120 hai, jo CP ka 20% hai.',
          'Correct answer: SP = 600 x 1.20 = 720. The profit is 120, which is 20% of CP.'
        )
      },
      {
        q: t(
          '15, 25 aur 35 ka average kitna hai?',
          'What is the average of 15, 25, and 35?'
        ),
        opts: [
          t('20', '20'),
          t('30', '30'),
          t('25', '25'),
          t('35', '35')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: total 75 hai, count 3 hai — 75 / 3 = 25. Beech wala number hi average hai.',
          'Correct answer: total is 75, count is 3 — 75 / 3 = 25. The middle number is the average.'
        )
      },
      {
        q: t(
          '5x = 45 ho toh x kitna hai?',
          'If 5x = 45, what is x?'
        ),
        opts: [
          t('8', '8'),
          t('10', '10'),
          t('9', '9'),
          t('7', '7')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: x = 45 / 5 = 9. Check: 5 x 9 = 45 sahi hai.',
          'Correct answer: x = 45 / 5 = 9. Check: 5 x 9 = 45 is correct.'
        )
      },
      {
        q: t(
          '₹4000 par 10% saalana se 2 saal ka simple interest kitna hai?',
          'What is the simple interest on ₹4000 at 10% a year for 2 years?'
        ),
        opts: [
          t('₹400', '₹400'),
          t('₹800', '₹800'),
          t('₹600', '₹600'),
          t('₹1000', '₹1000')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: SI = 4000 x 10 x 2 / 100 = 800. Har saal 400 interest banta hai, 2 saal mein 800.',
          'Correct answer: SI = 4000 x 10 x 2 / 100 = 800. The interest is 400 every year, so 800 in 2 years.'
        )
      }
    ],
    keyNotes: [
      t(
        'Mock test 30 minute mein do — har question ke liye lagbhag 1.5 minute.',
        'Take the mock test in 30 minutes — about 1.5 minutes per question.'
      ),
      t(
        '16-20 ka matlab exam-ready ho; 12 se kam ho toh galat topics ke articles dobara padho.',
        '16-20 means exam-ready; below 12, re-read the articles of the topics you got wrong.'
      ),
      t(
        'Har answer ke baad 5 second ka reverse check karo — total, equation ya ratio wapas check karo.',
        'After every answer, spend 5 seconds on a reverse check — verify the total, the equation, or the ratio.'
      ),
      t(
        'CI ka formula P(1 + R/100)^T hai — SI ki tarah simple add mat karo.',
        'The CI formula is P(1 + R/100)^T — do not add it like SI.'
      ),
      t(
        'Average speed hamesha total distance / total time hoti hai, speeds ka simple average nahi.',
        'Average speed is always total distance / total time, not a simple average of speeds.'
      )
    ],
    practice: {
      title: t(
        'Practice: Mock Test 1 ke Pehle 5 Answers Khud Verify Karo',
        'Practice: Verify the First 5 Answers of Mock Test 1 Yourself'
      ),
      task: t(
        'Q1 se Q5 tak ke answers ko Python se verify karo: 35% of 240, 12-18-24-30 ka average, 2x + 6 = 20 mein x, √144 + √81, aur ₹5000 par 8% se 3 saal ka SI. Starter code run karo — expected output mein 84.0, 21.0, 7.0, 21.0 aur 1200.0 aane chahiye.',
        'Verify the answers to Q1-Q5 with Python: 35% of 240, the average of 12-18-24-30, x in 2x + 6 = 20, √144 + √81, and SI on ₹5000 at 8% for 3 years. Run the starter code — the expected output should show 84.0, 21.0, 7.0, 21.0, and 1200.0.'
      ),
      language: 'python',
      starter: `print("35% of 240:", 0.35 * 240)
print("Average:", (12 + 18 + 24 + 30) / 4)
print("x in 2x + 6 = 20:", (20 - 6) / 2)
print("sqrt(144) + sqrt(81):", 144 ** 0.5 + 81 ** 0.5)
print("SI:", 5000 * 0.08 * 3)`,
      expected: `35% of 240: 84.0
Average: 21.0
x in 2x + 6 = 20: 7.0
sqrt(144) + sqrt(81): 21.0
SI: 1200.0`
    },
    readMinutes: 12
  };

const quantMockTest2: Article = {
    id: 'quant-mock-test-2',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Mock Test 2 — Mixed 20 Questions (Full Solutions ke Saath)',
      'Mock Test 2 — Mixed 20 Questions (with Full Solutions)'
    ),
    summary: t(
      'Doosra full mock test: Mock Test 1 se alag 20 questions — reverse profit, successive change, work, CI, cricket average aur HCF — har ek ka short solution aur Python se verified answer.',
      'The second full mock test: 20 different questions from Mock Test 1 — reverse profit, successive change, work, CI, cricket average, and HCF — each with a short solution and an answer verified with Python.'
    ),
    sections: [
      {
        heading: t(
          '1. Mock Test 2 Kaise Dein? (Mock 1 se Compare Karo)',
          '1. How to Take Mock Test 2? (Compare It with Mock 1)'
        ),
        body: t(
          `Yeh mock test bhi 20 questions ka hai — har question 1 mark, total 20 marks, time limit **30 minute**. Is baar questions Mock Test 1 se alag hain, par topics wahi hain: percentages, profit-loss, average, time-speed, ratio, SI-CI, work aur number system. Isliye yeh test batata hai ki aapne topics seekhe hain ya sirf Mock 1 ke answers yaad kiye hain.

Score ko Mock 1 se compare karo: **score badha** toh taiyaari sahi direction mein hai; **score same raha** toh galat topics wahi hain — unhe dobara padho; **score gira** toh shayad jaldi mein galtiyan hui — time management par kaam karo, knowledge par nahi. Dono mocks ka average hi aapka asli level batata hai — ek mock ka score kabhi final nahi hota.

Is test mein kuchh questions **reverse** hain — jaise Q2 mein SP se CP nikalna hai, Q15 mein percent se original number nikalna hai. Reverse questions mein hamesha divide karo, subtract mat karo. Aur Q9 mein successive change hai (+10% phir -10%) — percentages add mat karo, multipliers multiply karo.`,
          `This mock test also has 20 questions — 1 mark each, 20 marks in total, time limit **30 minutes**. The questions are different from Mock Test 1, but the topics are the same: percentages, profit and loss, average, time and speed, ratio, SI and CI, work, and number systems. So this test shows whether you have learned the topics or only memorised the answers to Mock 1.

Compare your score with Mock 1: if the **score went up**, the preparation is moving in the right direction; if the **score stayed the same**, the same topics are weak — study them again; if the **score went down**, you probably made rushed mistakes — work on time management, not on knowledge. The average of both mocks shows your real level — one mock score is never final.

Some questions in this test are **reverse** questions — like Q2, where you must find CP from SP, and Q15, where you must find the original number from a percent. In reverse questions, always divide, never subtract. And Q9 has a successive change (+10% then -10%) — do not add the percents, multiply the multipliers.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Questions 1-5 (Percent, Reverse Profit, Even Average, Equation, Root)',
          '2. Real-Life Examples: Questions 1-5 (Percent, Reverse Profit, Even Average, Equation, Root)'
        ),
        body: t(
          `**Q1. 480 ka 25% kitna hai?** Solution: \`480 x 25 / 100 = 120\`. Shortcut: 25% matlab ek chauthai — \`480 / 4 = 120\`. **Jawab: 120.**

**Q2. SP ₹1100 hai aur profit 10% hai. CP kitna hai?** Solution: CP = \`SP / 1.10 = 1100 / 1.10 = 1000\`. Galat tareeka \`1100 - 110 = 990\` hai — profit CP par laga tha, isliye divide karo. **Jawab: ₹1000.**

**Q3. Pehle 6 even numbers (2, 4, 6, 8, 10, 12) ka average kitna hai?** Solution: total = \`2 + 4 + 6 + 8 + 10 + 12 = 42\`, count 6 hai, average = \`42 / 6 = 7\`. **Jawab: 7.**

**Q4. 3x - 5 = 16 ho toh x kitna hai?** Solution: \`3x = 16 + 5 = 21\`, isliye \`x = 7\`. Check: \`3 x 7 - 5 = 16\` sahi hai. **Jawab: 7.**

**Q5. √50 ko simplest form mein likho aur uski approximate value batao.** Solution: \`√50 = 5√2\`, aur \`5 x 1.414 = 7.07\`. **Jawab: 5√2 (lagbhag 7.07).**

Pehle 5 questions mein Q2 sabse important hai — reverse profit har exam mein aata hai. Agar Q2 galat hua, toh profit-loss wala article dobara padho, khaas taur par "SP se CP wapas" wala edge case.`,
          `**Q1. What is 25% of 480?** Solution: \`480 x 25 / 100 = 120\`. Shortcut: 25% means one fourth — \`480 / 4 = 120\`. **Answer: 120.**

**Q2. SP is ₹1100 and profit is 10%. What is CP?** Solution: CP = \`SP / 1.10 = 1100 / 1.10 = 1000\`. The wrong way is \`1100 - 110 = 990\` — the profit was applied to CP, so divide. **Answer: ₹1000.**

**Q3. What is the average of the first 6 even numbers (2, 4, 6, 8, 10, 12)?** Solution: total = \`2 + 4 + 6 + 8 + 10 + 12 = 42\`, count is 6, average = \`42 / 6 = 7\`. **Answer: 7.**

**Q4. If 3x - 5 = 16, what is x?** Solution: \`3x = 16 + 5 = 21\`, so \`x = 7\`. Check: \`3 x 7 - 5 = 16\` is correct. **Answer: 7.**

**Q5. Write √50 in simplest form and give its approximate value.** Solution: \`√50 = 5√2\`, and \`5 x 1.414 = 7.07\`. **Answer: 5√2 (about 7.07).**

Q2 is the most important of the first 5 — reverse profit appears in every exam. If you got Q2 wrong, re-read the profit and loss article, especially the "CP back from SP" edge case.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: Questions 6-10 (SI, Distance, Ratio, Successive Change, Power)',
          '3. Step-by-Step: Questions 6-10 (SI, Distance, Ratio, Successive Change, Power)'
        ),
        body: t(
          `**Q6. ₹8000 par 5% saalana se 4 saal ka simple interest kitna hai?** Solution: SI = \`8000 x 5 x 4 / 100 = 1600\`. **Jawab: ₹1600.**

**Q7. 90 km/h ki speed se 3 ghante mein kitni doori tay hogi?** Solution: distance = \`90 x 3 = 270\` km. **Jawab: 270 km.**

**Q8. ₹100 ko 2:3:5 ke ratio mein baanto. Teenon hisse kitne honge?** Solution: total parts = \`2 + 3 + 5 = 10\`, ek part = \`100 / 10 = 10\`, hisse = \`20, 30, 50\`. Check: \`20 + 30 + 50 = 100\`. **Jawab: ₹20, ₹30 aur ₹50.**

**Q9. ₹1000 par pehle +10% phir -10% karo. Final value kitni hogi?** Solution: \`1000 x 1.10 = 1100\`, \`1100 x 0.90 = 990\`. Net -1% hai, kyunki +x% phir -x% hamesha loss deta hai. **Jawab: ₹990.**

**Q10. 5^3 ka value kya hai?** Solution: \`5^3 = 125\`. **Jawab: 125.**

Neeche wala code Q6 se Q10 tak ke answers verify karta hai — output mein 1600.0, 270, 20.0, 30.0 aur 50.0, 990.0 aur 125 aane chahiye. Q9 par dhyaan do: 990 hai, 1000 nahi — successive change ka rule yaad rakho.`,
          `**Q6. What is the simple interest on ₹8000 at 5% a year for 4 years?** Solution: SI = \`8000 x 5 x 4 / 100 = 1600\`. **Answer: ₹1600.**

**Q7. How far will you travel at 90 km/h in 3 hours?** Solution: distance = \`90 x 3 = 270\` km. **Answer: 270 km.**

**Q8. Divide ₹100 in the ratio 2:3:5. What are the three parts?** Solution: total parts = \`2 + 3 + 5 = 10\`, one part = \`100 / 10 = 10\`, parts = \`20, 30, 50\`. Check: \`20 + 30 + 50 = 100\`. **Answer: ₹20, ₹30, and ₹50.**

**Q9. Take ₹1000, first add 10%, then subtract 10%. What is the final value?** Solution: \`1000 x 1.10 = 1100\`, \`1100 x 0.90 = 990\`. The net is -1%, because +x% then -x% always gives a loss. **Answer: ₹990.**

**Q10. What is the value of 5^3?** Solution: \`5^3 = 125\`. **Answer: 125.**

The code below verifies the answers from Q6 to Q10 — the output should show 1600.0, 270, 20.0, 30.0 and 50.0, 990.0, and 125. Pay attention to Q9: it is 990, not 1000 — remember the successive change rule.`
        ),
        code: {
          title: t(
            'Mock Test 2: Questions 6-10 ke Answers Verify Karna',
            'Mock Test 2: Verifying the Answers to Questions 6-10'
          ),
          language: 'python',
          code: `print("Q6 SI:", 8000 * 0.05 * 4)
print("Q7 distance:", 90 * 3)
print("Q8 parts:", 100 * 2 / 10, 100 * 3 / 10, 100 * 5 / 10)
print("Q9 price:", round(1000 * 1.10 * 0.90, 2))
print("Q10 5^3:", 5 ** 3)`,
          output: `Q6 SI: 1600.0
Q7 distance: 270
Q8 parts: 20.0 30.0 50.0
Q9 price: 990.0
Q10 5^3: 125`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Mock 2 mein Reverse Questions aur Successive Change',
          '4. Common Mistakes: Reverse Questions and Successive Change in Mock 2'
        ),
        body: t(
          `Is mock mein do naye traps hain. **Trap 1: reverse questions.** Q2 mein SP se CP nikalna hai — \`1100 - 110 = 990\` galat hai, \`1100 / 1.10 = 1000\` sahi hai. Q15 mein bhi wahi: 40% of x = 160 ho toh \`x = 160 / 0.40 = 400\` hai, \`160 x 0.40\` nahi. Reverse sawaal mein hamesha **divide** karo — percent ko decimal mein badlo aur divide karo.

**Trap 2: successive change.** Q9 mein +10% phir -10% ka jawab 1000 nahi, 990 hai. Net formula hai \`-x^2/100 = -1%\`. Agar aapne 1000 likha, toh percentages wala article dobara padho — multiplier wala tareeka yaad karo: \`1.10 x 0.90 = 0.99\`.

**Trap 3: work wale sawaal mein ulta formula.** Q11 mein A+B 12 din, A akela 20 din — B akela nikalne ke liye rates **subtract** karo: \`1/12 - 1/20 = 1/30\`, isliye B akela 30 din lega. Galti yeh hoti hai ki log 12 aur 20 ko add ya average kar dete hain. Rates add ya subtract hote hain, din nahi.

**Trap 4: cricket average mein count badhana bhoolna.** Q17 mein 10 innings ke baad 11th innings add hoti hai — denominator 11 hota hai, 10 nahi. Naya average \`600 / 11 = 54.55\` hai.`,
          `This mock has two new traps. **Trap 1: reverse questions.** In Q2 you must find CP from SP — \`1100 - 110 = 990\` is wrong, \`1100 / 1.10 = 1000\` is right. Q15 is the same: if 40% of x = 160, then \`x = 160 / 0.40 = 400\`, not \`160 x 0.40\`. In a reverse question, always **divide** — turn the percent into a decimal and divide.

**Trap 2: successive change.** In Q9, +10% then -10% gives 990, not 1000. The net formula is \`-x^2/100 = -1%\`. If you wrote 1000, re-read the percentages article — remember the multiplier way: \`1.10 x 0.90 = 0.99\`.

**Trap 3: the upside-down formula in work questions.** In Q11, A+B take 12 days and A alone takes 20 days — to find B alone, **subtract** the rates: \`1/12 - 1/20 = 1/30\`, so B alone takes 30 days. The mistake is adding or averaging 12 and 20. Rates add or subtract, days do not.

**Trap 4: forgetting to increase the count in a cricket average.** In Q17, after 10 innings an 11th innings is added — the denominator becomes 11, not 10. The new average is \`600 / 11 = 54.55\`.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Questions 11-15 (Work, CI, Average, Inequality, Reverse Percent)',
          '5. Edge Cases: Questions 11-15 (Work, CI, Average, Inequality, Reverse Percent)'
        ),
        body: t(
          `**Q11. A aur B mil kar ek kaam 12 din mein karte hain. A akela 20 din mein karta hai. B akela kitne din mein karega?** Solution: B ki rate = \`1/12 - 1/20 = (5 - 3) / 60 = 2/60 = 1/30\`, isliye B akela **30 din** lega. Shortcut: \`(12 x 20) / (20 - 12) = 240 / 8 = 30\`.

**Q12. ₹5000 par 10% saalana se 2 saal ka compound interest amount kitna hoga?** Solution: amount = \`5000 x 1.10^2 = 5000 x 1.21 = 6050\`. CI = \`6050 - 5000 = 1050\`. **Jawab: ₹6050 (CI ₹1050).**

**Q13. 8 numbers ka average 45 hai. Unmein 72 add karte hain. Naya average kitna hoga?** Solution: purana total = \`45 x 8 = 360\`, naya total = \`432\`, nayi count 9 hai, naya average = \`432 / 9 = 48\`. **Jawab: 48.**

**Q14. 4x < 28 ho toh x kya hoga?** Solution: \`x < 28 / 4 = 7\`. 4 positive hai, isliye sign flip nahi hoga. **Jawab: x < 7.**

**Q15. Ek number ka 40% 160 hai. Woh number kitna hai?** Solution: \`x = 160 / 0.40 = 400\`. Check: \`400 x 0.40 = 160\` sahi hai. **Jawab: 400.**

Neeche wala code Q11 se Q15 tak ke answers verify karta hai — output mein 30.0, 6050.0, 48.0, x < 7.0 aur 400.0 aane chahiye.`,
          `**Q11. A and B together do a job in 12 days. A alone does it in 20 days. In how many days will B alone do it?** Solution: B's rate = \`1/12 - 1/20 = (5 - 3) / 60 = 2/60 = 1/30\`, so B alone takes **30 days**. Shortcut: \`(12 x 20) / (20 - 12) = 240 / 8 = 30\`.

**Q12. What is the compound interest amount on ₹5000 at 10% a year for 2 years?** Solution: amount = \`5000 x 1.10^2 = 5000 x 1.21 = 6050\`. CI = \`6050 - 5000 = 1050\`. **Answer: ₹6050 (CI ₹1050).**

**Q13. 8 numbers have an average of 45. We add 72 to them. What is the new average?** Solution: old total = \`45 x 8 = 360\`, new total = \`432\`, new count is 9, new average = \`432 / 9 = 48\`. **Answer: 48.**

**Q14. If 4x < 28, what is x?** Solution: \`x < 28 / 4 = 7\`. 4 is positive, so the sign does not flip. **Answer: x < 7.**

**Q15. 40% of a number is 160. What is the number?** Solution: \`x = 160 / 0.40 = 400\`. Check: \`400 x 0.40 = 160\` is correct. **Answer: 400.**

The code below verifies the answers from Q11 to Q15 — the output should show 30.0, 6050.0, 48.0, x < 7.0, and 400.0.`
        )
      },
      {
        heading: t(
          '6. What-If: Questions 16-20 (Discount, Cricket, Profit, Time, HCF)',
          '6. What-If: Questions 16-20 (Discount, Cricket, Profit, Time, HCF)'
        ),
        body: t(
          `**Q16. ₹800 ki cheez par 25% discount mile. Final price kitni hogi?** Solution: \`800 x 0.75 = 600\`. Discount \`200\` hai. **Jawab: ₹600.**

**Q17. Batsman 10 innings mein average 50 se khel raha hai. Agli innings mein 100 runs banata hai. Naya average kitna hoga?** Solution: purane runs = \`10 x 50 = 500\`, naye runs = \`600\`, nayi innings 11 hai, naya average = \`600 / 11 = 54.55\` (2 decimal tak). **Jawab: 54.55.**

**Q18. CP ₹400 hai aur SP ₹500 hai. Profit % kitna hai?** Solution: profit = \`100\`, profit% = \`100 / 400 x 100 = 25%\`. **Jawab: 25%.**

**Q19. 120 km ki doori 40 km/h ki speed se kitne ghante mein tay hogi?** Solution: time = \`distance / speed = 120 / 40 = 3\` ghante. **Jawab: 3 ghante.**

**Q20. 24 aur 36 ka HCF kitna hai?** Solution: 24 ke factors: 1, 2, 3, 4, 6, 8, 12, 24; 36 ke factors: 1, 2, 3, 4, 6, 9, 12, 18, 36 — sabse bada common factor **12** hai. **Jawab: 12.**

Neeche wala code Q16 se Q20 tak ke answers verify karta hai — output mein 600.0, 54.5454..., 25.0, 3.0 aur 12 aane chahiye.`,
          `**Q16. An item of ₹800 gets a 25% discount. What is the final price?** Solution: \`800 x 0.75 = 600\`. The discount is \`200\`. **Answer: ₹600.**

**Q17. A batsman averages 50 over 10 innings. He scores 100 runs in the next innings. What is the new average?** Solution: old runs = \`10 x 50 = 500\`, new runs = \`600\`, new innings is 11, new average = \`600 / 11 = 54.55\` (to 2 decimals). **Answer: 54.55.**

**Q18. CP is ₹400 and SP is ₹500. What is the profit %?** Solution: profit = \`100\`, profit% = \`100 / 400 x 100 = 25%\`. **Answer: 25%.**

**Q19. How many hours will 120 km take at 40 km/h?** Solution: time = \`distance / speed = 120 / 40 = 3\` hours. **Answer: 3 hours.**

**Q20. What is the HCF of 24 and 36?** Solution: factors of 24: 1, 2, 3, 4, 6, 8, 12, 24; factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36 — the largest common factor is **12**. **Answer: 12.**

The code below verifies the answers from Q16 to Q20 — the output should show 600.0, 54.5454..., 25.0, 3.0, and 12.`
        )
      },
      {
        heading: t(
          '7. Summary: Answer Key, Dono Mocks ka Comparison aur Agla Step',
          '7. Summary: Answer Key, Comparison of Both Mocks, and Next Step'
        ),
        body: t(
          `**Answer key (20 questions):** Q1 120, Q2 ₹1000, Q3 7, Q4 7, Q5 5√2 (lagbhag 7.07), Q6 ₹1600, Q7 270 km, Q8 ₹20, ₹30 aur ₹50, Q9 ₹990, Q10 125, Q11 30 din, Q12 ₹6050, Q13 48, Q14 x < 7, Q15 400, Q16 ₹600, Q17 54.55, Q18 25%, Q19 3 ghante, Q20 12.

**Dono mocks ka comparison:** Mock 1 aur Mock 2 ke scores ko side by side likho. Dono ka average aapka asli level hai. Agar dono mein wahi topics galat hue (jaise dono mein cricket average ya faulty weight), toh woh topic abhi bhi kamzor hai — uska article dobara padho aur uske practice questions khud se karo. Agar score 16 se upar hai dono mein, toh aap exam-ready ho — ab speed par kaam karo: har mock ko 25 minute mein karne ki koshish karo.

**Agla step:** Quant placement prep wala article padho — usmein speed tricks, must-know formulas aur revision plan hai. Phir dono mocks ko ek hafte baad dobara do — score aur badhna chahiye. Jo questions dono mocks mein galat hue, unhe ek alag notebook mein likho aur exam se pehle sirf unhe revise karo.`,
          `**Answer key (20 questions):** Q1 120, Q2 ₹1000, Q3 7, Q4 7, Q5 5√2 (about 7.07), Q6 ₹1600, Q7 270 km, Q8 ₹20, ₹30, and ₹50, Q9 ₹990, Q10 125, Q11 30 days, Q12 ₹6050, Q13 48, Q14 x < 7, Q15 400, Q16 ₹600, Q17 54.55, Q18 25%, Q19 3 hours, Q20 12.

**Comparison of both mocks:** Write the scores of Mock 1 and Mock 2 side by side. The average of both is your real level. If the same topics went wrong in both (like cricket average or faulty weight in both), that topic is still weak — re-read its article and do its practice questions yourself. If the score is above 16 in both, you are exam-ready — now work on speed: try to finish each mock in 25 minutes.

**Next step:** Read the quant placement prep article — it has speed tricks, must-know formulas, and a revision plan. Then retake both mocks after a week — the score should rise further. Write the questions you got wrong in both mocks in a separate notebook and revise only those before the exam.`
        )
      }
    ],
    diagram: {
      kind: 'table',
      title: t(
        'Mock Test 2: Answer Key Table',
        'Mock Test 2: Answer Key Table'
      ),
      caption: t(
        'Mock 1 se compare karo — jo topic dono mein galat hua, wahi kamzor hai',
        'Compare with Mock 1 — a topic wrong in both is the weak one'
      ),
      headers: [
        t('Group', 'Group'),
        t('Questions', 'Questions'),
        t('Answers', 'Answers')
      ],
      rows: [
        [
          t('Q1-5', 'Q1-5'),
          t('Percent, Reverse Profit, Average, Equation, Root', 'Percent, Reverse Profit, Average, Equation, Root'),
          t('120, 1000, 7, 7, 5√2', '120, 1000, 7, 7, 5√2')
        ],
        [
          t('Q6-10', 'Q6-10'),
          t('SI, Distance, Ratio, Successive Change, Power', 'SI, Distance, Ratio, Successive Change, Power'),
          t('1600, 270 km, 20-30-50, 990, 125', '1600, 270 km, 20-30-50, 990, 125')
        ],
        [
          t('Q11-15', 'Q11-15'),
          t('Work, CI, Average, Inequality, Reverse Percent', 'Work, CI, Average, Inequality, Reverse Percent'),
          t('30 din, 6050, 48, x < 7, 400', '30 days, 6050, 48, x < 7, 400')
        ],
        [
          t('Q16-20', 'Q16-20'),
          t('Discount, Cricket, Profit, Time, HCF', 'Discount, Cricket, Profit, Time, HCF'),
          t('600, 54.55, 25%, 3 ghante, 12', '600, 54.55, 25%, 3 hours, 12')
        ]
      ],
      nodes: []
    },
    codeExamples: [
      {
        title: t(
          'Mock Test 2: Questions 11-15 ke Answers Verify Karna',
          'Mock Test 2: Verifying the Answers to Questions 11-15'
        ),
        language: 'python',
        code: `print("Q11 B alone:", (12 * 20) / (20 - 12))
print("Q12 CI amount:", round(5000 * 1.10 ** 2, 2))
print("Q13 new average:", (45 * 8 + 72) / 9)
print("Q14 x <", 28 / 4)
print("Q15 x:", 160 / 0.40)`,
        output: `Q11 B alone: 30.0
Q12 CI amount: 6050.0
Q13 new average: 48.0
Q14 x < 7.0
Q15 x: 400.0`
      },
      {
        title: t(
          'Mock Test 2: Questions 16-20 ke Answers Verify Karna',
          'Mock Test 2: Verifying the Answers to Questions 16-20'
        ),
        language: 'python',
        code: `import math
print("Q16 price after 25% off:", 800 * 0.75)
print("Q17 new average:", (50 * 10 + 100) / 11)
print("Q18 profit %:", (500 - 400) / 400 * 100)
print("Q19 time:", 120 / 40)
print("Q20 HCF:", math.gcd(24, 36))`,
        output: `Q16 price after 25% off: 600.0
Q17 new average: 54.54545454545455
Q18 profit %: 25.0
Q19 time: 3.0
Q20 HCF: 12`
      }
    ],
    mcqs: [
      {
        q: t(
          '300 ka 30% kitna hai?',
          'What is 30% of 300?'
        ),
        opts: [
          t('60', '60'),
          t('90', '90'),
          t('100', '100'),
          t('120', '120')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 300 x 30 / 100 = 90. Shortcut: 10% hai 30, isliye 30% hai 90.',
          'Correct answer: 300 x 30 / 100 = 90. Shortcut: 10% is 30, so 30% is 90.'
        )
      },
      {
        q: t(
          'SP ₹900 hai aur loss 10% hai. CP kitna hai?',
          'SP is ₹900 and loss is 10%. What is CP?'
        ),
        opts: [
          t('₹990', '₹990'),
          t('₹810', '₹810'),
          t('₹1000', '₹1000'),
          t('₹950', '₹950')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: CP = SP / 0.90 = 900 / 0.90 = 1000. Loss CP par laga tha, isliye divide karo.',
          'Correct answer: CP = SP / 0.90 = 900 / 0.90 = 1000. The loss was applied to CP, so divide.'
        )
      },
      {
        q: t(
          '8, 12, 16 aur 20 ka average kitna hai?',
          'What is the average of 8, 12, 16, and 20?'
        ),
        opts: [
          t('12', '12'),
          t('16', '16'),
          t('14', '14'),
          t('10', '10')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: total 56 hai, count 4 hai — 56 / 4 = 14. Beech ke do numbers ka average bhi 14 hai.',
          'Correct answer: total is 56, count is 4 — 56 / 4 = 14. The average of the middle two numbers is also 14.'
        )
      },
      {
        q: t(
          '4x - 8 = 12 ho toh x kitna hai?',
          'If 4x - 8 = 12, what is x?'
        ),
        opts: [
          t('4', '4'),
          t('6', '6'),
          t('5', '5'),
          t('3', '3')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: 4x = 12 + 8 = 20, isliye x = 5. Check: 4 x 5 - 8 = 12 sahi hai.',
          'Correct answer: 4x = 12 + 8 = 20, so x = 5. Check: 4 x 5 - 8 = 12 is correct.'
        )
      },
      {
        q: t(
          '√169 ka value kya hai?',
          'What is the value of √169?'
        ),
        opts: [
          t('11', '11'),
          t('12', '12'),
          t('13', '13'),
          t('14', '14')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: 13 x 13 = 169, isliye √169 = 13. 13^2 yaad rakho — exam mein aksar aata hai.',
          'Correct answer: 13 x 13 = 169, so √169 = 13. Remember 13^2 — it appears often in exams.'
        )
      }
    ],
    keyNotes: [
      t(
        'Mock 2 ka score Mock 1 se compare karo — dono ka average hi asli level hai.',
        'Compare the Mock 2 score with Mock 1 — the average of both is the real level.'
      ),
      t(
        'Reverse questions mein divide karo: CP = SP / (1 + profit%), x = value / percent.',
        'In reverse questions, divide: CP = SP / (1 + profit%), x = value / percent.'
      ),
      t(
        '+x% phir -x% hamesha net loss deta hai: 1000 par +10% phir -10% ka jawab 990 hai.',
        '+x% then -x% always gives a net loss: +10% then -10% on 1000 gives 990.'
      ),
      t(
        'Work mein rates add ya subtract hote hain, din nahi — B akela = 1/(1/12 - 1/20) = 30 din.',
        'In work, rates add or subtract, not days — B alone = 1/(1/12 - 1/20) = 30 days.'
      ),
      t(
        'Cricket average mein nayi innings ke baad denominator bhi badhta hai — 600/11 = 54.55.',
        'In a cricket average, the denominator also grows after a new innings — 600/11 = 54.55.'
      )
    ],
    practice: {
      title: t(
        'Practice: Mock Test 2 ke Pehle 5 Answers Khud Verify Karo',
        'Practice: Verify the First 5 Answers of Mock Test 2 Yourself'
      ),
      task: t(
        'Q1 se Q5 tak ke answers ko Python se verify karo: 25% of 480, SP 1100 par 10% profit se CP, pehle 6 even numbers ka average, 3x - 5 = 16 mein x, aur √50. Starter code run karo — expected output mein 120.0, 1000.0, 7.0, 7.0 aur 7.0710678118654755 aane chahiye.',
        'Verify the answers to Q1-Q5 with Python: 25% of 480, CP from SP 1100 at 10% profit, the average of the first 6 even numbers, x in 3x - 5 = 16, and √50. Run the starter code — the expected output should show 120.0, 1000.0, 7.0, 7.0, and 7.0710678118654755.'
      ),
      language: 'python',
      starter: `print("25% of 480:", 0.25 * 480)
print("CP when SP 1100 at 10% profit:", round(1100 / 1.10, 2))
print("Average of first 6 even numbers:", (2 + 4 + 6 + 8 + 10 + 12) / 6)
print("x in 3x - 5 = 16:", (16 + 5) / 3)
print("sqrt(50):", 50 ** 0.5)`,
      expected: `25% of 480: 120.0
CP when SP 1100 at 10% profit: 1000.0
Average of first 6 even numbers: 7.0
x in 3x - 5 = 16: 7.0
sqrt(50): 7.0710678118654755`
    },
    readMinutes: 12
  };

const quantInterview: Article = {
    id: 'quant-interview',
    subjectId: 'quantitative-aptitude',
    title: t(
      'Quant Placement Prep — Speed Tricks, Must-Know Formulas aur Revision Plan',
      'Quant Placement Prep — Speed Tricks, Must-Know Formulas, and Revision Plan'
    ),
    summary: t(
      'Placement se pehle ka final article: percent aur square ke speed tricks, har topic ka must-know formula, exam-day strategy aur 7-din ka revision plan — har trick hand-check aur Python se verified.',
      'The final article before placement: speed tricks for percents and squares, the must-know formula for every topic, exam-day strategy, and a 7-day revision plan — every trick checked by hand and verified with Python.'
    ),
    sections: [
      {
        heading: t(
          '1. Speed Tricks Kya Hai? (Fraction-Percent Table aur Squares)',
          '1. What Are Speed Tricks? (Fraction-Percent Table and Squares)'
        ),
        body: t(
          `Speed trick ka matlab hai calculation ko **yaad kiye hue fact** se badalna. Har percent ko fraction mein badlo: **25% = 1/4**, **12.5% = 1/8**, **37.5% = 3/8**, **20% = 1/5**, **10% = 1/10**, **5% = 1/20**. Ab 25% of 640 nikalna hai toh \`640 / 4 = 160\` karo — multiply karne ki zaroorat hi nahi. 37.5% of 800 hai toh \`800 x 3 / 8 = 300\` karo. Yeh table yaad karne se har percent question 5 second ka ho jaata hai.

Doosra speed trick hai **squares**: \`11^2 = 121\`, \`12^2 = 144\`, \`13^2 = 169\`, \`15^2 = 225\`, \`25^2 = 625\` yaad rakho. \`15^2\` nikalne ka trick hai: 5 se khatm hone wale number ka square — \`15^2 = 1 x 2 = 2\` phir \`25\` jodo = 225. \`25^2\`: \`2 x 3 = 6\` phir 25 jodo = 625. \`45^2\`: \`4 x 5 = 20\` phir 25 jodo = 2025. Yeh trick 5 se khatm hone wale har number par chalti hai.

Teesra trick hai **99 se multiply**: \`99 x 7 = 693\` — kyunki \`100 x 7 = 700\` aur \`700 - 7 = 693\`. \`99 x 23 = 2300 - 23 = 2277\`. 99, 999 ya 98 se multiply karte waqt hamesha 100 se multiply karke ek baar ghatao — yeh lambi multiplication se 10 guna fast hai.`,
          `A speed trick means replacing a calculation with a **memorised fact**. Turn every percent into a fraction: **25% = 1/4**, **12.5% = 1/8**, **37.5% = 3/8**, **20% = 1/5**, **10% = 1/10**, **5% = 1/20**. Now to find 25% of 640, just do \`640 / 4 = 160\` — no multiplication needed. For 37.5% of 800, do \`800 x 3 / 8 = 300\`. Memorising this table makes every percent question a 5-second question.

The second speed trick is **squares**: remember \`11^2 = 121\`, \`12^2 = 144\`, \`13^2 = 169\`, \`15^2 = 225\`, \`25^2 = 625\`. The trick for squaring a number ending in 5 is: for \`15^2\`, do \`1 x 2 = 2\` then add \`25\` to get 225. For \`25^2\`: \`2 x 3 = 6\` then add 25 to get 625. For \`45^2\`: \`4 x 5 = 20\` then add 25 to get 2025. This trick works for every number ending in 5.

The third trick is **multiplying by 99**: \`99 x 7 = 693\` — because \`100 x 7 = 700\` and \`700 - 7 = 693\`. \`99 x 23 = 2300 - 23 = 2277\`. When multiplying by 99, 999, or 98, always multiply by 100 and subtract once — it is 10 times faster than long multiplication.`
        )
      },
      {
        heading: t(
          '2. Real-Life Examples: Exam Hall, Interview aur Bill Split karna',
          '2. Real-Life Examples: Exam Hall, Interview, and Splitting a Bill'
        ),
        body: t(
          `Pehla example hai **exam hall**. Question hai: 15% of 200 kitna hai? Jo student 15% ko fraction mein badalta hai, woh 2 second mein jawab deta hai: 10% hai 20, 5% hai 10 — total 30. Jo student \`200 x 15 / 100\` likhta hai, use 20 second lagte hain. 20 questions mein yeh farak 6 minute ka hota hai — aur 6 minute mein 4 extra questions ho jaate hain. Speed trick time nahi, **marks** bachata hai.

Doosra example hai **interview**. Interviewer poochhta hai: "₹10,000 par 10% se 2 saal ka SI aur CI mein kitna farak hai?" Trick yaad rakho: 2 saal ke liye farak = \`P x (R/100)^2 = 10000 x 0.01 = 100\`. SI hai 2000, CI hai 2100, farak 100. Jo student yeh formula jaanta hai, woh bina CI nikale jawab deta hai — aur interviewer ko yahi dekhna hota hai.

Teesra example hai **bill split karna**. Bill ₹800 hai aur 4 doston mein baantna hai — har ek ka hissa \`800 / 4 = 200\` hai. Agar ek dost 12.5% tip dena chahta hai, toh tip hai \`800 / 8 = 100\`. Fraction-percent table roz ki zindagi mein bhi kaam aata hai — isliye yeh trick sirf exam ke liye nahi hai.`,
          `The first example is the **exam hall**. The question is: what is 15% of 200? The student who turns 15% into a fraction answers in 2 seconds: 10% is 20, 5% is 10 — total 30. The student who writes \`200 x 15 / 100\` takes 20 seconds. Over 20 questions that difference is 6 minutes — and 6 minutes is enough for 4 extra questions. A speed trick does not save time, it saves **marks**.

The second example is an **interview**. The interviewer asks: "What is the difference between SI and CI on ₹10,000 at 10% for 2 years?" Remember the trick: for 2 years the difference is \`P x (R/100)^2 = 10000 x 0.01 = 100\`. SI is 2000, CI is 2100, difference is 100. The student who knows this formula answers without finding CI — and that is exactly what the interviewer wants to see.

The third example is **splitting a bill**. A bill of ₹800 is split among 4 friends — each share is \`800 / 4 = 200\`. If one friend wants to add a 12.5% tip, the tip is \`800 / 8 = 100\`. The fraction-percent table helps in daily life too — so this trick is not only for exams.`
        )
      },
      {
        heading: t(
          '3. Step-by-Step: Percent Tricks ka Dry Run (25%, 15%, 12.5%, 37.5%)',
          '3. Step-by-Step: Dry Run of Percent Tricks (25%, 15%, 12.5%, 37.5%)'
        ),
        body: t(
          `Ab hum chaar percent tricks ko step-by-step chalate hain, har ek ko fraction se.
- **25% of 640:** 25% = 1/4, isliye \`640 / 4 = 160\`. **Jawab: 160.**
- **15% of 200:** 15% = 10% + 5%, isliye \`200 / 10 = 20\` aur \`200 / 20 = 10\` — total \`20 + 10 = 30\`. **Jawab: 30.**
- **12.5% of 800:** 12.5% = 1/8, isliye \`800 / 8 = 100\`. **Jawab: 100.**
- **37.5% of 800:** 37.5% = 3/8, isliye \`800 x 3 / 8 = 300\`. **Jawab: 300.**
- **15 squared:** 5 se khatm hone wale number ka trick — \`1 x 2 = 2\` phir 25 jodo = **225**.
- **45 x 45:** wahi trick — \`4 x 5 = 20\` phir 25 jodo = **2025**.

**Dry run (Python se):** code ne saare tricks chalaye — 25% of 640: 160.0, 15% of 200: 30.0, 12.5% of 800: 100.0, 37.5% of 800: 300.0, 15 squared: 225, 45 x 45: 2025. Har ek trick ka answer code se match karta hai. In tricks ko yaad karne ka tareeka hai roz 5 minute practice: ek number lo, uska 25%, 12.5% aur 37.5% bina calculator ke nikalo.`,
          `Now let us run four percent tricks step by step, each through a fraction.
- **25% of 640:** 25% = 1/4, so \`640 / 4 = 160\`. **Answer: 160.**
- **15% of 200:** 15% = 10% + 5%, so \`200 / 10 = 20\` and \`200 / 20 = 10\` — total \`20 + 10 = 30\`. **Answer: 30.**
- **12.5% of 800:** 12.5% = 1/8, so \`800 / 8 = 100\`. **Answer: 100.**
- **37.5% of 800:** 37.5% = 3/8, so \`800 x 3 / 8 = 300\`. **Answer: 300.**
- **15 squared:** the trick for a number ending in 5 — \`1 x 2 = 2\` then add 25 to get **225**.
- **45 x 45:** the same trick — \`4 x 5 = 20\` then add 25 to get **2025**.

**Dry run (with Python):** the code ran all the tricks — 25% of 640: 160.0, 15% of 200: 30.0, 12.5% of 800: 100.0, 37.5% of 800: 300.0, 15 squared: 225, 45 x 45: 2025. Every trick matches the code. The way to memorise these tricks is 5 minutes of practice a day: take a number and find its 25%, 12.5%, and 37.5% without a calculator.`
        ),
        code: {
          title: t(
            'Speed Tricks: Percent aur Square ka Dry Run',
            'Speed Tricks: Dry Run of Percents and Squares'
          ),
          language: 'python',
          code: `print("25% of 640:", 640 / 4)
print("15% of 200:", 200 * 0.15)
print("12.5% of 800:", 800 / 8)
print("37.5% of 800:", 800 * 3 / 8)
print("15 squared:", 15 ** 2)
print("45 x 45:", 45 * 45)`,
          output: `25% of 640: 160.0
15% of 200: 30.0
12.5% of 800: 100.0
37.5% of 800: 300.0
15 squared: 225
45 x 45: 2025`
        }
      },
      {
        heading: t(
          '4. Common Mistakes: Trick par Bharosa, Formula Bhoolna aur Time Waste Karna',
          '4. Common Mistakes: Trusting a Trick, Forgetting a Formula, and Wasting Time'
        ),
        body: t(
          `Placement prep mein chaar galtiyan sabse zyada hoti hain. **Galti 1: trick ko rule samajh lena.** 5 se khatm hone wale number ka square trick sirf 5 se khatm hone wale numbers par chalta hai — \`16^2\` par nahi. Trick use karne se pehle check karo ki condition match hoti hai ya nahi. **Galti 2: formula yaad kiye bina exam dena.** SI-CI ka farak, average speed, work ka formula — yeh paanch formulas bina yaad kiye exam mein derive karne mein 2 minute lagte hain. Formula sheet ko roz ek baar padho.

**Galti 3: ek question par atak jaana.** Ek question par 3 minute se zyada mat lagao — use chhodo, aage badho, aur aakhir mein wapas aao. Ek question 1 mark ka hai, aur 3 minute mein 2 aasaan questions ho jaate hain. Time management hi placement ka aadha exam hai. **Galti 4: mock test ka analysis na karna.** Mock dekar score dekhna kaafi nahi hai — har galat question ko note karo, uska topic likho, aur us topic ka article dobara padho. Bina analysis ke mock sirf time waste hai.`,
          `Four mistakes are most common in placement prep. **Mistake 1: treating a trick as a rule.** The square trick for numbers ending in 5 works only for numbers ending in 5 — not for \`16^2\`. Before using a trick, check whether the condition matches. **Mistake 2: taking the exam without memorising the formulas.** The SI-CI difference, average speed, and the work formula — deriving these in the exam takes 2 minutes. Read the formula sheet once every day.

**Mistake 3: getting stuck on one question.** Never spend more than 3 minutes on one question — skip it, move on, and come back at the end. One question is worth 1 mark, and 2 easy questions can be done in 3 minutes. Time management is half the placement exam. **Mistake 4: not analysing the mock test.** Taking a mock and looking at the score is not enough — note every wrong question, write down its topic, and re-read that topic's article. A mock without analysis is just wasted time.`
        )
      },
      {
        heading: t(
          '5. Edge Cases: Negative Marking, Sectional Cutoff aur Tie-Breaker',
          '5. Edge Cases: Negative Marking, Sectional Cutoff, and Tie-Breaker'
        ),
        body: t(
          `Edge cases jo exam-day par farak karte hain. **Pehla: negative marking.** Agar har galat answer par 0.25 marks kat-te hain, toh guess mat karo — sirf tab guess karo jab 2 options eliminate kar sako. 4 options mein se 2 eliminate karne ke baad guess ka expected value positive hota hai: \`0.5 x 1 - 0.5 x 0.25 = 0.375\` marks. Bina eliminate kiye guess ka expected value \`0.25 x 1 - 0.75 x 0.25 = 0.0625\` hai — phir bhi positive hai, par bahut kam. Isliye pehle eliminate karo, phir guess karo.

**Doosra: sectional cutoff.** Kai exams mein har section mein minimum marks chahiye hote hain. Sirf apne strong section par dhyaan mat do — kamzor section mein bhi cutoff paar karna zaroori hai. Har section ko kam se kam 30% time do, chahe woh kamzor hi kyun na ho.

**Teesra: tie-breaker.** Agar do candidates ka score barabar ho, toh aksar kam galat answers wale ko upar rakha jaata hai, ya phir specific section ke marks dekhe jaate hain. Isliye accuracy speed se zyada important hai — 20 mein se 18 sahi 20 mein se 20 attempt se behtar hai, agar usmein 5 galat hon.

**Chautha: exam se pehle raat.** Naya topic mat padho — sirf formula sheet aur key notes revise karo. Neend poori lo — neend ki kami calculation speed ko 30% tak gira deti hai.`,
          `Edge cases that matter on exam day. **First: negative marking.** If every wrong answer costs 0.25 marks, do not guess — guess only when you can eliminate 2 options. After eliminating 2 of 4 options, the expected value of a guess is positive: \`0.5 x 1 - 0.5 x 0.25 = 0.375\` marks. Guessing without eliminating gives an expected value of \`0.25 x 1 - 0.75 x 0.25 = 0.0625\` — still positive, but very small. So eliminate first, then guess.

**Second: sectional cutoff.** Many exams need minimum marks in every section. Do not focus only on your strong section — you must also cross the cutoff in the weak section. Give every section at least 30% of your time, however weak it is.

**Third: tie-breaker.** If two candidates have the same score, the one with fewer wrong answers is often ranked higher, or the marks of a specific section are compared. So accuracy matters more than speed — 18 correct out of 20 is better than 20 attempted with 5 wrong.

**Fourth: the night before the exam.** Do not study a new topic — revise only the formula sheet and key notes. Sleep well — lack of sleep can cut calculation speed by up to 30%.`
        )
      },
      {
        heading: t(
          '6. What-If: Formula Bhool Jaayein, Time Kam Pade, ya Question Naya Ho?',
          '6. What-If: Forgetting a Formula, Running Out of Time, or Facing a New Question?'
        ),
        body: t(
          `**What if: exam mein formula bhool jaayein?** Formula ko derive karo, guess mat karo. Average speed bhool gaye toh wapas definition par jao: total distance / total time. CI bhool gaye toh saal-dar-saal calculate karo: pehle saal interest, phir doosre saal interest + interest par interest. Definition se derive karna slow hai, par galat formula se behtar hai.

**What if: time kam pad jaaye?** Aakhri 5 minute mein jo questions bache hain, unmein sabse aasaan wale pehle karo — percent aur average wale. Mushkil wale (work, train) ko chhodo — unmein time zyada lagta hai aur marks utne hi hain. Har question 1 mark ka hai, isliye aasaan questions pehle karo.

**What if: question bilkul naya ho?** Naya question bhi purane formula ka naya roop hota hai. Question ko chhote hisso mein todo: kya diya hai, kya maanga hai, kaunsa formula judta hai. Agar 1 minute mein formula nahi dikha, toh question chhodo aur aage badho — wapas aane par aksar formula dikh jaata hai.

**What if: do answers mein confuse hon?** Dono ko test karo — ek ko equation mein daal kar check karo, doosre ko bhi. Jo check pass kare, wahi sahi hai. Aur agar dono pass karein, toh question dobara padho — shayad koi shart chhoot gayi hai.`,
          `**What if you forget a formula in the exam?** Derive the formula, do not guess it. If you forget average speed, go back to the definition: total distance / total time. If you forget CI, calculate year by year: first year's interest, then second year's interest plus interest on interest. Deriving from the definition is slow, but it is better than a wrong formula.

**What if time runs short?** In the last 5 minutes, do the easiest of the remaining questions first — percent and average ones. Leave the hard ones (work, train) — they take more time for the same marks. Every question is worth 1 mark, so do the easy ones first.

**What if a question is completely new?** A new question is still an old formula in a new form. Break the question into small parts: what is given, what is asked, which formula connects them. If the formula does not appear in 1 minute, skip the question and move on — when you come back, the formula often appears.

**What if you are confused between two answers?** Test both — put one into the equation and check it, then the other. The one that passes the check is correct. And if both pass, read the question again — you probably missed a condition.`
        )
      },
      {
        heading: t(
          '7. Summary: Must-Know Formulas aur 7-Din ka Revision Plan',
          '7. Summary: Must-Know Formulas and a 7-Day Revision Plan'
        ),
        body: t(
          `**Must-know formulas (roz revise karo):** Percent: \`x% of N = N x x / 100\`; successive change: multipliers multiply karo; profit% = \`(SP - CP) / CP x 100\`; discount% = \`(MP - SP) / MP x 100\`; SI = \`P x R x T / 100\`; CI amount = \`P(1 + R/100)^T\`; 2 saal SI-CI farak = \`P x (R/100)^2\`; average = \`total / count\`; weighted average = \`sum(value x weight) / sum(weight)\`; average speed = \`total distance / total time\`; work: \`1/A + 1/B = 1/T\`; distance = \`speed x time\`.

**7-din ka revision plan:** Din 1 — percentages aur successive change; Din 2 — profit-loss aur faulty weight; Din 3 — averages aur cricket average; Din 4 — SI-CI aur work; Din 5 — surds-indices aur inequalities; Din 6 — Mock Test 1 dobara (30 minute); Din 7 — Mock Test 2 dobara + formula sheet. Har din 5 minute speed tricks ki practice karo — 25%, 12.5%, 37.5% aur 5 se khatm hone wale squares.

**Exam-day checklist:** pehle aasaan questions, phir mushkil; har answer ke baad 5 second ka check; ek question par 3 minute se zyada nahi; negative marking ho toh pehle eliminate karo, phir guess karo; aur aakhri 5 minute mein chhute hue aasaan questions karo. All the best — taiyaari poori hai, bas calm rehna hai.`,
          `**Must-know formulas (revise daily):** Percent: \`x% of N = N x x / 100\`; successive change: multiply the multipliers; profit% = \`(SP - CP) / CP x 100\`; discount% = \`(MP - SP) / MP x 100\`; SI = \`P x R x T / 100\`; CI amount = \`P(1 + R/100)^T\`; 2-year SI-CI difference = \`P x (R/100)^2\`; average = \`total / count\`; weighted average = \`sum(value x weight) / sum(weight)\`; average speed = \`total distance / total time\`; work: \`1/A + 1/B = 1/T\`; distance = \`speed x time\`.

**7-day revision plan:** Day 1 — percentages and successive change; Day 2 — profit and loss and faulty weight; Day 3 — averages and cricket average; Day 4 — SI-CI and work; Day 5 — surds, indices, and inequalities; Day 6 — retake Mock Test 1 (30 minutes); Day 7 — retake Mock Test 2 + formula sheet. Practise speed tricks for 5 minutes every day — 25%, 12.5%, 37.5%, and squares of numbers ending in 5.

**Exam-day checklist:** easy questions first, then hard ones; a 5-second check after every answer; never more than 3 minutes on one question; if there is negative marking, eliminate first, then guess; and in the last 5 minutes do the easy questions you skipped. All the best — the preparation is complete, just stay calm.`
        )
      }
    ],
    diagram: {
      kind: 'timeline',
      title: t(
        '7-Din ka Revision Plan',
        '7-Day Revision Plan'
      ),
      caption: t(
        'Har din ek topic + 5 minute speed tricks — din 6 aur 7 mein dono mocks dobara do',
        'One topic a day + 5 minutes of speed tricks — retake both mocks on days 6 and 7'
      ),
      nodes: [
        {
          t: t('Din 1: Percentages aur successive change', 'Day 1: Percentages and successive change'),
          s: t('Multiplier rule + population growth', 'Multiplier rule + population growth')
        },
        {
          t: t('Din 2: Profit-loss aur faulty weight', 'Day 2: Profit and loss and faulty weight'),
          s: t('Base CP/MP + chain + 11.11% rule', 'Base CP/MP + chain + 11.11% rule')
        },
        {
          t: t('Din 3: Averages aur cricket average', 'Day 3: Averages and cricket average'),
          s: t('Total = average x count + weighted average', 'Total = average x count + weighted average')
        },
        {
          t: t('Din 4: SI-CI aur work', 'Day 4: SI-CI and work'),
          s: t('CI formula + 2-saal farak + work rates', 'CI formula + 2-year difference + work rates')
        },
        {
          t: t('Din 5: Surds, indices aur inequalities', 'Day 5: Surds, indices, and inequalities'),
          s: t('Perfect square + 5 rules + sign flip', 'Perfect square + 5 rules + sign flip')
        },
        {
          t: t('Din 6: Mock Test 1 dobara', 'Day 6: Retake Mock Test 1'),
          s: t('30 minute, score Mock 1 se compare karo', '30 minutes, compare the score with Mock 1')
        },
        {
          t: t('Din 7: Mock Test 2 dobara + formula sheet', 'Day 7: Retake Mock Test 2 + formula sheet'),
          s: t('Exam-day checklist yaad karo', 'Remember the exam-day checklist')
        }
      ]
    },
    codeExamples: [
      {
        title: t(
          'SI vs CI Difference: 2 Saal ka Shortcut Formula',
          'SI vs CI Difference: Shortcut Formula for 2 Years'
        ),
        language: 'python',
        code: `p = 10000
si = p * 0.10 * 2
ci = p * 1.10 ** 2 - p
print("SI:", si)
print("CI:", round(ci, 2))
print("Difference:", round(ci - si, 2))`,
        output: `SI: 2000.0
CI: 2100.0
Difference: 100.0`
      },
      {
        title: t(
          'Speed Tricks: 20%, 99 se Multiply aur 25 Squared',
          'Speed Tricks: 20%, Multiplying by 99, and 25 Squared'
        ),
        language: 'python',
        code: `print("20% of 350:", 350 / 5)
print("99 x 7:", 99 * 7)
print("25 squared:", 25 ** 2)
print("10% of 640:", 640 / 10)
print("5% of 640:", 640 / 20)`,
        output: `20% of 350: 70.0
99 x 7: 693
25 squared: 625
10% of 640: 64.0
5% of 640: 32.0`
      }
    ],
    mcqs: [
      {
        q: t(
          '12.5% of 800 kitna hai?',
          'What is 12.5% of 800?'
        ),
        opts: [
          t('80', '80'),
          t('100', '100'),
          t('120', '120'),
          t('200', '200')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 12.5% = 1/8, isliye 800 / 8 = 100. Fraction table yaad rakho — yeh 2 second ka question hai.',
          'Correct answer: 12.5% = 1/8, so 800 / 8 = 100. Remember the fraction table — this is a 2-second question.'
        )
      },
      {
        q: t(
          '15^2 ka value kya hai?',
          'What is the value of 15^2?'
        ),
        opts: [
          t('215', '215'),
          t('225', '225'),
          t('250', '250'),
          t('200', '200')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 5 se khatm hone wale number ka trick — 1 x 2 = 2, phir 25 jodo — 225.',
          'Correct answer: the trick for a number ending in 5 — 1 x 2 = 2, then add 25 — 225.'
        )
      },
      {
        q: t(
          '20% of 350 kitna hai?',
          'What is 20% of 350?'
        ),
        opts: [
          t('60', '60'),
          t('70', '70'),
          t('80', '80'),
          t('35', '35')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 20% = 1/5, isliye 350 / 5 = 70. 10% hai 35, isliye 20% hai 70.',
          'Correct answer: 20% = 1/5, so 350 / 5 = 70. 10% is 35, so 20% is 70.'
        )
      },
      {
        q: t(
          '25^2 ka value kya hai?',
          'What is the value of 25^2?'
        ),
        opts: [
          t('525', '525'),
          t('625', '625'),
          t('600', '600'),
          t('550', '550')
        ],
        ans: 1,
        expl: t(
          'Sahi jawab: 2 x 3 = 6, phir 25 jodo — 625. 5 se khatm hone wale number ka square trick yaad rakho.',
          'Correct answer: 2 x 3 = 6, then add 25 — 625. Remember the square trick for numbers ending in 5.'
        )
      },
      {
        q: t(
          '₹10,000 par 10% saalana se 2 saal ka SI aur CI mein kitna farak hai?',
          'What is the difference between SI and CI on ₹10,000 at 10% a year for 2 years?'
        ),
        opts: [
          t('₹50', '₹50'),
          t('₹200', '₹200'),
          t('₹100', '₹100'),
          t('₹150', '₹150')
        ],
        ans: 2,
        expl: t(
          'Sahi jawab: 2 saal ka farak = P x (R/100)^2 = 10000 x 0.01 = 100. SI 2000 hai, CI 2100 hai.',
          'Correct answer: the 2-year difference = P x (R/100)^2 = 10000 x 0.01 = 100. SI is 2000, CI is 2100.'
        )
      }
    ],
    keyNotes: [
      t(
        'Percent ko fraction mein badlo: 25% = 1/4, 12.5% = 1/8, 37.5% = 3/8, 20% = 1/5.',
        'Turn percents into fractions: 25% = 1/4, 12.5% = 1/8, 37.5% = 3/8, 20% = 1/5.'
      ),
      t(
        '5 se khatm hone wale number ka square: 15^2 = 225, 25^2 = 625, 45^2 = 2025.',
        'Square of a number ending in 5: 15^2 = 225, 25^2 = 625, 45^2 = 2025.'
      ),
      t(
        '2 saal ka SI-CI farak = P x (R/100)^2 — 10000 par 10% se farak 100 hai.',
        'The 2-year SI-CI difference = P x (R/100)^2 — on 10000 at 10% the difference is 100.'
      ),
      t(
        'Ek question par 3 minute se zyada mat lagao — chhodo, aage badho, aakhir mein wapas aao.',
        'Never spend more than 3 minutes on one question — skip it, move on, come back at the end.'
      ),
      t(
        'Mock test ka analysis karo: har galat question ka topic likho aur uska article dobara padho.',
        'Analyse every mock test: write the topic of every wrong question and re-read its article.'
      )
    ],
    practice: {
      title: t(
        'Practice: 37.5% of 800 aur Speed Tricks',
        'Practice: 37.5% of 800 and Speed Tricks'
      ),
      task: t(
        '800 ka 37.5%, 25%, 12.5% aur 50% fraction tricks se nikalo: 37.5% = 3/8, 25% = 1/4, 12.5% = 1/8, 50% = 1/2. Starter code run karo — expected output mein 300.0, 200.0, 100.0 aur 400.0 aane chahiye.',
        'Find 37.5%, 25%, 12.5%, and 50% of 800 with fraction tricks: 37.5% = 3/8, 25% = 1/4, 12.5% = 1/8, 50% = 1/2. Run the starter code — the expected output should show 300.0, 200.0, 100.0, and 400.0.'
      ),
      language: 'python',
      starter: `print("37.5% of 800:", 800 * 3 / 8)
print("25% of 800:", 800 / 4)
print("12.5% of 800:", 800 / 8)
print("50% of 800:", 800 / 2)`,
      expected: `37.5% of 800: 300.0
25% of 800: 200.0
12.5% of 800: 100.0
50% of 800: 400.0`
    },
    readMinutes: 12
  };

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
      keyNotes: [
        {
          hinglish: 'Percent hamesha kisi base ka hota hai — value = base × percent / 100.',
          english: 'A percent always belongs to a base — value = base × percent / 100.',
        },
        {
          hinglish: 'Percent nikalna ho to formula hai (hissa / kul) × 100.',
          english: 'To find a percent, use (part / whole) × 100.',
        },
        {
          hinglish: 'Ek ke baad ek badlav ho to kul badlav = x + y + (x × y) / 100 percent.',
          english: 'For one change after another, total change = x + y + (x × y) / 100 percent.',
        },
        {
          hinglish: '20 percent badha kar 20 percent ghatao to wapas wahi number nahi milta — 4 percent ki kami aati hai.',
          english: 'Adding 20 percent and then taking off 20 percent does not bring back the same number — it leaves a 4 percent fall.',
        },
        {
          hinglish: '10 percent = 1/10, 25 percent = 1/4, 50 percent = 1/2 — ye fraction yaad rakhne se hisaab tez hota hai.',
          english: '10 percent = 1/10, 25 percent = 1/4, 50 percent = 1/2 — knowing these fractions makes the maths faster.',
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
        expected: 'Q1: abhi sahi answer nahi mila. Sahi answer: 45\nQ2: abhi sahi answer nahi mila. Sahi answer: 480\nQ3: abhi sahi answer nahi mila. Sahi answer: 72',
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
      keyNotes: [
        {
          hinglish: 'Profit percent hamesha CP par nikalta hai — (SP − CP) / CP × 100.',
          english: 'Profit percent is always worked out on the cost price — (SP − CP) / CP × 100.',
        },
        {
          hinglish: 'Loss percent bhi CP par nikalta hai — (CP − SP) / CP × 100.',
          english: 'Loss percent is also worked out on the cost price — (CP − SP) / CP × 100.',
        },
        {
          hinglish: 'Discount hamesha MP par lagta hai, profit percent hamesha CP par.',
          english: 'Discount is always given on the marked price, while profit percent is always on the cost price.',
        },
        {
          hinglish: 'SP pata ho aur profit percent pata ho to CP = SP × 100 / (100 + profit percent).',
          english: 'If you know the SP and the profit percent, CP = SP × 100 / (100 + profit percent).',
        },
        {
          hinglish: 'Do cheezein ek hi daam par becho — ek profit par, ek loss par — to kul milakar hamesha loss hota hai: loss percent = x² / 100.',
          english: 'Selling two things at the same price — one at a profit, one at a loss — always gives an overall loss: loss percent = x² / 100.',
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
        expected: 'Q1: abhi sahi answer nahi mila. Sahi answer: 20\nQ2: abhi sahi answer nahi mila. Sahi answer: 1800\nQ3: abhi sahi answer nahi mila. Sahi answer: 900',
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
      keyNotes: [
        {
          hinglish: 'Speed = distance / time; distance = speed × time; time = distance / speed.',
          english: 'Speed = distance / time; distance = speed × time; time = distance / speed.',
        },
        {
          hinglish: 'km/h ko m/s mein badalne ke liye 5/18 se guna karo; m/s ko km/h mein badalne ke liye 18/5 se.',
          english: 'To change km/h into m/s, multiply by 5/18; to change m/s into km/h, multiply by 18/5.',
        },
        {
          hinglish: 'Aamne-saamne aane par relative speed judti hai; ek hi disha mein ho to ghat-ti hai.',
          english: 'When two things move towards each other, their relative speed adds up; in the same direction, it subtracts.',
        },
        {
          hinglish: 'Barabar doori ke liye average speed = 2ab / (a + b) — seedha average mat lo.',
          english: 'For equal distances, average speed = 2ab / (a + b) — do not just take the simple average.',
        },
        {
          hinglish: 'Speed double ho to wahi doori aadhe time mein poori hoti hai.',
          english: 'If the speed doubles, the same distance takes half the time.',
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
        expected: 'Q1: abhi sahi answer nahi mila. Sahi answer: 60\nQ2: abhi sahi answer nahi mila. Sahi answer: 240\nQ3: abhi sahi answer nahi mila. Sahi answer: 15',
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
      keyNotes: [
        {
          hinglish: 'Average = kul yog / kitni sankhyaen; kul yog = average × sankhyaen.',
          english: 'Average = total sum / how many numbers; total sum = average × how many numbers.',
        },
        {
          hinglish: 'Naya number judne par pehle kul yog nikaalo, phir naya average nikaalo.',
          english: 'When a new number joins, first find the new total sum, then the new average.',
        },
        {
          hinglish: 'Ratio se baantna ho to hisson ka yog nikaalo — har hissa = kul × hissa / hisson ka yog.',
          english: 'To split by a ratio, find the sum of the parts — each part = total × part / sum of parts.',
        },
        {
          hinglish: 'Do groups ka average nikaalte waqt hisson ki ginti se weight karo — seedha average galat hota hai.',
          english: 'When you combine two groups, weight each average by its count — a plain average is wrong.',
        },
        {
          hinglish: 'A : B = 3 : 4 ho aur B = 28 ho to A = 28 × 3 / 4 = 21.',
          english: 'If A : B = 3 : 4 and B = 28, then A = 28 × 3 / 4 = 21.',
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
        expected: 'Q1: abhi sahi answer nahi mila. Sahi answer: 15\nQ2: abhi sahi answer nahi mila. Sahi answer: 30\nQ3: abhi sahi answer nahi mila. Sahi answer: 30',
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
      keyNotes: [
        {
          hinglish: 'LCM matlab dono se divide hone wala sabse chhota number; HCF matlab dono ko divide karne wala sabse bada number.',
          english: 'LCM is the smallest number that both numbers divide into; HCF is the biggest number that divides both.',
        },
        {
          hinglish: '1 se n tak ka yog = n(n + 1) / 2 — jaise 1 se 20 tak ka yog 210 hota hai.',
          english: 'The sum from 1 to n is n(n + 1) / 2 — so 1 to 20 adds up to 210.',
        },
        {
          hinglish: '9 se divisibility: ankon ka yog 9 se divide ho to number bhi 9 se divide hota hai.',
          english: 'Divisibility by 9: if the sum of the digits divides by 9, the number divides by 9 too.',
        },
        {
          hinglish: 'Unit digit ke liye sirf unit digit ka cycle dekho — 3 ki powers ka cycle 3, 9, 7, 1 hai.',
          english: 'For the unit digit, look only at the cycle of unit digits — powers of 3 cycle through 3, 9, 7, 1.',
        },
        {
          hinglish: 'HCF ke liye dono numbers ke common factors mein sabse bada lo — jaise 24 aur 36 ka HCF 12 hai.',
          english: 'For the HCF, take the biggest factor common to both numbers — for example, the HCF of 24 and 36 is 12.',
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
        expected: 'Q1: abhi sahi answer nahi mila. Sahi answer: 24\nQ2: abhi sahi answer nahi mila. Sahi answer: 18\nQ3: abhi sahi answer nahi mila. Sahi answer: 1275',
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
      keyNotes: [
        {
          hinglish: 'Ek din ka kaam = 1 / din — ye rate hai, aur saath kaam karne par rate judte hain.',
          english: 'One day of work = 1 / days — that is the rate, and rates add up when people work together.',
        },
        {
          hinglish: 'A 6 din mein aur B 12 din mein kaam kare to saath mein 1/6 + 1/12 = 1/4, matlab 4 din.',
          english: 'If A takes 6 days and B takes 12 days, together they do 1/6 + 1/12 = 1/4, so 4 days.',
        },
        {
          hinglish: 'Aadmi badlo to din ulta badalte hain — man-days hamesha barabar rehta hai.',
          english: 'When the number of workers changes, the days change in the opposite way — man-days always stays the same.',
        },
        {
          hinglish: 'Tank bharne wali pipe aur leak ek saath ho to net rate = bharne ki rate − leak ki rate.',
          english: 'If a filling pipe and a leak work together, net rate = filling rate − leaking rate.',
        },
        {
          hinglish: 'A, B se do guna tez ho to A ka time aadha hota hai — B 12 din mein kare to A 6 din mein.',
          english: 'If A is twice as fast as B, A takes half the time — if B takes 12 days, A takes 6 days.',
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
        expected: 'Q1: abhi sahi answer nahi mila. Sahi answer: 4\nQ2: abhi sahi answer nahi mila. Sahi answer: 5\nQ3: abhi sahi answer nahi mila. Sahi answer: 30',
      },
      readMinutes: 10,
    },
    quantSimpleInterest,
    quantCompoundInterest,
    quantDiscount,
    quantRatioProportion,
    quantMixtures,
    quantAges,
    quantHcfLcm,
    quantPermutation,
    quantProbability,
    quantPipesCisterns,
    quantTrains,
    quantBoatsStreams,
    quantClockCalendar,
    quantGeometry,
    quantMensuration,
    quantTrigonometry,
    quantQuadratic,
    quantProgressions,
    quantLogarithms,
    quantDataInterpretation,
    quantDataSufficiency,
    quantSimplification,
    quantNumberSeriesQuant,
    quantPartnership,
    quantSpeedTime,
    quantWorkEfficiency,
    quantInequalities,
    quantSurdsIndices,
    quantPercentageAdvanced,
    quantAveragesAdvanced,
    quantProfitLossAdvanced,
    quantMockTest1,
    quantMockTest2,
    quantInterview,
  ],
};
