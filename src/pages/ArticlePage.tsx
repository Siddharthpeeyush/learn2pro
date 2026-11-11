import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Article, Lang, Subject } from '../lib/types';
import type { Progress } from '../lib/store';
import { t } from '../lib/i18n';
import DiagramView from '../components/Diagram';
import Quiz from '../components/Quiz';
import CodeRunner from '../components/CodeRunner';

interface Props {
  subject: Subject;
  article: Article;
  lang: Lang;
  progress: Progress;
  onArticleDone: (articleId: string, score: number) => void;
  onCompilerRun: (ok: boolean) => void;
}

/** Render inline markdown used in article prose: **bold** and `code`.
 * Content is written with these markers (C++ prose uses them heavily);
 * without this the markers show up literally on screen. */
function renderInline(text: string): ReactNode[] {
  // Non-greedy so **a** and **b** stay separate; [\s\S] lets a bold span
  // contain `code` with * inside it (e.g. **Edge Case 4: `/* ... */` ...**).
  const parts = text.split(/(\*\*[\s\S]+?\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={i} className="font-bold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code key={i} className="rounded bg-black/50 px-1 py-0.5 font-mono text-[0.9em] text-green-300">
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

/** Language label + a short file-name-style label for the header bar. */
const LANG_FILE: Record<string, string> = {
  python: 'main.py',
  javascript: 'script.js',
  c: 'main.c',
  cpp: 'main.cpp',
  java: 'Main.java',
  sql: 'query.sql',
  html: 'index.html',
};

function CodeBlock({ code, language, title }: { code: string; language: string; title?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="codeblock overflow-hidden rounded-2xl border border-[#243424]">
      <div className="flex items-center gap-2 border-b border-[#243424] bg-[#0a120b] px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </span>
        <span className="truncate font-mono text-xs text-zinc-300">
          {LANG_FILE[language] ?? 'code.txt'}
          {title ? <span className="ml-2 text-zinc-500">— {title}</span> : null}
        </span>
        <span className="ml-auto shrink-0 rounded-md bg-[#12210f] px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wide text-green-300">
          {language}
        </span>
        <button
          onClick={() => {
            navigator.clipboard?.writeText(code).catch(() => undefined);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="shrink-0 rounded-lg border border-[#243424] bg-[#12210f] px-2 py-1 text-xs text-zinc-300"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="codebox">{code}</pre>
    </div>
  );
}

function TryInCompilerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mt-3 inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-900/40 transition active:scale-[0.98]"
    >
      ▶ Try this code in the compiler
    </button>
  );
}

/** Section visual style, detected from the ENGLISH heading text. */
type SectionKind = 'default' | 'warning' | 'action';
function sectionKind(headingEn: string): SectionKind {
  const h = headingEn.toLowerCase();
  if (h.includes('mistake')) return 'warning';
  if (h.includes('change this') || h.includes('try it') || h.includes('try this') || h.includes('your turn')) return 'action';
  return 'default';
}

function SectionBlock({
  sec,
  index,
  lang,
  openInCompiler,
}: {
  sec: Article['sections'][number];
  index: number;
  lang: Lang;
  openInCompiler: (language: string, code: string) => void;
}) {
  const kind = sectionKind(sec.heading.english ?? '');
  const num = String(index + 1).padStart(2, '0');
  const paras = t(sec.body, lang).split(/\n\n+/).filter(Boolean);

  const headingRow = (
    <div className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className={`select-none font-mono text-4xl font-extrabold leading-none sm:text-5xl ${
          kind === 'warning' ? 'text-amber-500/30' : kind === 'action' ? 'text-sky-400/30' : 'text-green-500/25'
        }`}
      >
        {num}
      </span>
      <h2
        className={`pt-1 text-xl font-extrabold leading-snug sm:text-2xl ${
          kind === 'warning' ? 'text-amber-300' : kind === 'action' ? 'text-sky-300' : 'text-white'
        }`}
      >
        {kind === 'warning' ? '⚠️ ' : kind === 'action' ? '✏️ ' : ''}
        {t(sec.heading, lang)}
      </h2>
    </div>
  );

  const body = (
    <div className="mt-3 space-y-4 text-[17px] leading-[1.75] text-zinc-200">
      {paras.map((p, i) => (
        <p key={i} className="whitespace-pre-line">
          {renderInline(p)}
        </p>
      ))}
    </div>
  );

  const code = sec.code ? (
    <div className="mt-4">
      <CodeBlock code={sec.code.code} language={sec.code.language} title={t(sec.code.title, lang)} />
      {sec.code.output ? (
        <div className="mt-2">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-zinc-500">Output</p>
          <p className="output">{sec.code.output}</p>
        </div>
      ) : null}
      {sec.code.note ? <p className="mt-2 text-sm text-zinc-400">{renderInline(t(sec.code.note, lang))}</p> : null}
      <TryInCompilerButton onClick={() => openInCompiler(sec.code!.language, sec.code!.code)} />
    </div>
  ) : null;

  if (kind === 'warning') {
    return (
      <section className="mt-8 rounded-2xl border border-amber-600/50 bg-amber-950/25 p-4 sm:p-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-400">Watch out</p>
        {headingRow}
        {body}
        {code}
      </section>
    );
  }
  if (kind === 'action') {
    return (
      <section className="mt-8 rounded-2xl border border-sky-600/50 bg-sky-950/25 p-4 sm:p-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-sky-400">Try it yourself</p>
        {headingRow}
        {body}
        {code}
      </section>
    );
  }
  return (
    <section className="mt-10">
      {headingRow}
      <div className="mt-2 h-1 w-12 rounded-full bg-green-500/70" aria-hidden="true" />
      {body}
      {code}
    </section>
  );
}

export default function ArticlePage({ subject, article, lang, progress, onArticleDone, onCompilerRun }: Props) {
  const idx = subject.articles.findIndex((a) => a.id === article.id);
  const prev = idx > 0 ? subject.articles[idx - 1] : null;
  const next = idx >= 0 && idx < subject.articles.length - 1 ? subject.articles[idx + 1] : null;
  const score = progress.completedArticles[article.id];
  const [readPct, setReadPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setReadPct(max > 0 ? Math.min(100, Math.max(0, (el.scrollTop / max) * 100)) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [article.id]);

  const openInCompiler = (language: string, code: string) => {
    try {
      sessionStorage.setItem('l2p_compiler', JSON.stringify({ language, code }));
    } catch {
      // ignore
    }
    location.hash = '#/compiler';
  };

  const accent = subject.color || '#22c55e';

  return (
    <div>
      {/* Reading progress — thin bar pinned to the very top of the viewport */}
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-[#12210f]" aria-hidden="true">
        <div
          className="h-full transition-[width] duration-100 ease-out"
          style={{ width: `${readPct}%`, backgroundColor: accent }}
        />
      </div>

      {/* Back link */}
      <a
        href={`#/subject/${subject.id}`}
        className="inline-flex items-center gap-1.5 rounded-full border border-[#243424] bg-[#12210f] px-3 py-1.5 text-sm font-semibold text-zinc-200"
      >
        ← {t(subject.name, lang)}
      </a>

      {/* Hero */}
      <header
        className="mt-4 overflow-hidden rounded-3xl border p-5 sm:p-7"
        style={{
          borderColor: accent + '55',
          background: `linear-gradient(150deg, ${accent}2e 0%, #0d1510 55%, #0a0f0a 100%)`,
        }}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-zinc-950"
            style={{ backgroundColor: accent }}
          >
            <span aria-hidden="true">{subject.icon}</span> {t(subject.name, lang)}
          </span>
          <span className="rounded-full border border-[#243424] bg-black/40 px-3 py-1 text-xs font-semibold text-zinc-200">
            Part {idx + 1} of {subject.articles.length}
          </span>
          <span className="rounded-full border border-[#243424] bg-black/40 px-3 py-1 text-xs font-semibold text-zinc-200">
            ⏱ ~{article.readMinutes} min read
          </span>
          {score !== undefined ? (
            <span className="rounded-full border border-green-700 bg-green-950/70 px-3 py-1 text-xs font-bold text-green-300">
              ✓ Your best: {score}%
            </span>
          ) : null}
        </div>
        <div className="mt-4 flex items-start gap-3 sm:gap-4">
          <span
            aria-hidden="true"
            className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-4xl sm:flex"
            style={{ backgroundColor: accent + '26', border: `2px solid ${accent}66` }}
          >
            {subject.icon}
          </span>
          <div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              {t(article.title, lang)}
            </h1>
            <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-zinc-300">{t(article.summary, lang)}</p>
          </div>
        </div>
      </header>

      {article.diagram ? <DiagramView diagram={article.diagram} lang={lang} /> : null}

      {article.sections.map((sec, i) => (
        <SectionBlock key={i} sec={sec} index={i} lang={lang} openInCompiler={openInCompiler} />
      ))}

      {article.codeExamples?.length ? (
        <section className="mt-10">
          <p className="text-xs font-bold uppercase tracking-widest text-green-400">Worked examples</p>
          <h2 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
            {lang === 'hindi' ? 'और उदाहरण' : lang === 'english' ? 'More worked examples' : 'Aur examples'}
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-green-500/70" aria-hidden="true" />
          {article.codeExamples.map((ex, i) => (
            <div key={i} className="mt-5">
              <CodeBlock code={ex.code} language={ex.language} title={t(ex.title, lang)} />
              {ex.output ? (
                <div className="mt-2">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-zinc-500">Output</p>
                  <p className="output">{ex.output}</p>
                </div>
              ) : null}
              {ex.note ? <p className="mt-2 text-sm text-zinc-400">{renderInline(t(ex.note, lang))}</p> : null}
              <TryInCompilerButton onClick={() => openInCompiler(ex.language, ex.code)} />
            </div>
          ))}
        </section>
      ) : null}

      {article.keyNotes?.length ? (
        <section className="mt-10 rounded-3xl border-2 border-amber-500/60 bg-gradient-to-b from-amber-950/50 to-[#1a1505] p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-2xl"
            >
              📌
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">Before the quiz — quick recap</p>
              <h2 className="text-xl font-extrabold text-amber-200 sm:text-2xl">
                {lang === 'hindi' ? 'याद रखने वाली बातें' : lang === 'english' ? 'Key points to remember' : 'Yaad rakhne wali baatein'}
              </h2>
            </div>
          </div>
          <ol className="mt-4 space-y-3">
            {article.keyNotes.map((n, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-sm font-extrabold text-amber-300 ring-1 ring-amber-500/50">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-[16px] leading-relaxed text-amber-50/95">{renderInline(t(n, lang))}</span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {article.practice ? (
        <section className="mt-10 rounded-3xl border border-[#243424] bg-[#0d1510] p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-green-400">Your turn</p>
          <h2 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
            ✍️ {t(article.practice.title, lang)}
          </h2>
          <p className="mt-3 whitespace-pre-line text-[17px] leading-[1.75] text-zinc-200">{renderInline(t(article.practice.task, lang))}</p>
          {article.practice.expected ? (
            <p className="mt-3 inline-block rounded-xl bg-[#12210f] px-3 py-2 text-sm text-zinc-300 ring-1 ring-[#243424]">
              <span className="font-bold text-green-300">Expected:</span> {article.practice.expected}
            </p>
          ) : null}
          {['python', 'javascript', 'html', 'sql'].includes(article.practice.language) ? (
            <div className="mt-4">
              <CodeRunner
                initialLanguage={article.practice.language as 'python' | 'javascript' | 'html' | 'sql'}
                initialCode={article.practice.starter}
                onRun={onCompilerRun}
              />
            </div>
          ) : (
            <div className="mt-4">
              <CodeBlock code={article.practice.starter} language={article.practice.language} />
              <p className="mt-3 rounded-xl bg-yellow-950/50 p-3 text-sm leading-relaxed text-yellow-200 ring-1 ring-yellow-700/50">
                The {article.practice.language.toUpperCase()} runner is coming soon — trace this code by hand for now: what does each line do, and what is the final output? The answer is in the task above.
              </p>
            </div>
          )}
        </section>
      ) : null}

      <section className="mt-10">
        <p className="text-xs font-bold uppercase tracking-widest text-green-400">Check your understanding</p>
        <h2 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
          📝 {lang === 'hindi' ? 'खुद को परखें' : lang === 'english' ? 'Test yourself' : 'Khud ko parkho'}
        </h2>
        <p className="mb-4 mt-2 text-sm text-zinc-400">
          {article.mcqs.length} questions · 80% to mark this article done · every answer comes with an explanation
        </p>
        <Quiz mcqs={article.mcqs} lang={lang} onFinish={(s) => onArticleDone(article.id, s)} />
      </section>

      {/* Journey-style prev / next */}
      <nav className="mt-12 grid gap-3 sm:grid-cols-2" aria-label="Article navigation">
        {prev ? (
          <a
            href={`#/article/${subject.id}/${prev.id}`}
            className="group rounded-2xl border border-[#243424] bg-[#0d1510] p-4 transition hover:border-green-600 sm:p-5"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">← Previous</p>
            <p className="mt-2 text-base font-bold leading-snug text-zinc-100 group-hover:text-green-300 sm:text-lg">
              {t(prev.title, lang)}
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              Part {idx} of {subject.articles.length} · {t(subject.name, lang)}
            </p>
          </a>
        ) : (
          <a
            href={`#/subject/${subject.id}`}
            className="group rounded-2xl border border-[#243424] bg-[#0d1510] p-4 transition hover:border-green-600 sm:p-5"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">↑ Subject home</p>
            <p className="mt-2 text-base font-bold leading-snug text-zinc-100 group-hover:text-green-300 sm:text-lg">
              {t(subject.name, lang)}
            </p>
            <p className="mt-1 text-sm text-zinc-400">Back to all {subject.articles.length} articles</p>
          </a>
        )}
        {next ? (
          <a
            href={`#/article/${subject.id}/${next.id}`}
            className="group rounded-2xl border border-green-700 bg-gradient-to-br from-green-950/80 to-[#12210f] p-4 transition hover:border-green-500 sm:p-5"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-green-300">Next up →</p>
            <p className="mt-2 text-base font-bold leading-snug text-white sm:text-lg">{t(next.title, lang)}</p>
            <p className="mt-1 text-sm text-zinc-400">
              Part {idx + 2} of {subject.articles.length} · ~{next.readMinutes} min read
            </p>
          </a>
        ) : (
          <a
            href={`#/subject/${subject.id}`}
            className="group rounded-2xl border border-green-700 bg-gradient-to-br from-green-950/80 to-[#12210f] p-4 transition hover:border-green-500 sm:p-5"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-green-300">✓ Subject complete</p>
            <p className="mt-2 text-base font-bold leading-snug text-white sm:text-lg">
              Back to {t(subject.name, lang)}
            </p>
            <p className="mt-1 text-sm text-zinc-400">You finished all {subject.articles.length} articles</p>
          </a>
        )}
      </nav>
    </div>
  );
}
