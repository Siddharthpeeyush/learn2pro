// Learn2Pro v2 — content schema.
// One file per subject under src/content/. Adding a subject = one new file
// + one import line in src/content/index.ts. No UI code changes needed.

export type Lang = 'hinglish' | 'english' | 'hindi';

/** Text in up to 3 languages. Hinglish + English are required; Hindi optional
 *  (rendering falls back Hinglish -> English). English Only mode must be plain
 *  simple English — NO Hinglish words inside `english` strings. */
export interface LText {
  hinglish: string;
  english: string;
  hindi?: string;
}

export type CodeLanguage =
  | 'python'
  | 'javascript'
  | 'c'
  | 'cpp'
  | 'java'
  | 'sql'
  | 'html';

export interface CodeExample {
  /** Short label, e.g. "Print your name" */
  title: LText;
  language: CodeLanguage;
  code: string;
  /** What the program prints / shows when run (plain text). */
  output?: string;
  note?: LText;
}

export interface MCQ {
  q: LText;
  /** Exactly 4 options. */
  opts: [LText, LText, LText, LText];
  /** Index (0-3) of the correct option. */
  ans: number;
  /** 1-2 line explanation of WHY the answer is right. Shown after submit. */
  expl: LText;
}

/** Simple labelled diagram rendered inline (no external images). */
export interface Diagram {
  kind: 'flow' | 'boxes';
  title: LText;
  nodes: { t: LText; s?: LText }[];
}

export interface ArticleSection {
  heading: LText;
  /** Body text. Use \n\n between paragraphs. 400-700 words TOTAL per
   *  article per language, spread across sections. */
  body: LText;
  code?: CodeExample;
}

export interface PracticeTask {
  title: LText;
  /** The task, with a clear done-condition and expected output. */
  task: LText;
  language: CodeLanguage;
  /** Starter code shown in the compiler. Must run in that language's runner. */
  starter: string;
  expected?: string;
}

export interface Article {
  id: string; // e.g. 'c-variables'
  subjectId: string; // must match the owning Subject.id
  title: LText;
  summary: LText;
  /** Sections in reading order. Suggested order: What it is / Real-life
   *  example / Step-by-step (with worked example) / Common mistakes /
   *  Summary. */
  sections: ArticleSection[];
  diagram?: Diagram;
  /** Extra runnable examples beyond the ones inside sections. */
  codeExamples?: CodeExample[];
  /** 3-5 MCQs, each with an explanation. */
  mcqs: MCQ[];
  practice?: PracticeTask;
  /** Rough reading time in minutes (used by the UI). */
  readMinutes: number;
}

export type SubjectCategory = 'cse' | 'aptitude' | 'placement';

export interface Subject {
  id: string; // e.g. 'c-programming'
  name: LText;
  tagline: LText;
  /** One emoji used as the subject's icon. */
  icon: string;
  /** Hex colour for the subject card accent, e.g. '#22c55e'. */
  color: string;
  category: SubjectCategory;
  articles: Article[];
}
