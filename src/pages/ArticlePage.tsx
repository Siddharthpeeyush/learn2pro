import { useState } from 'react';
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

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative">
      <pre className="codebox">{code}</pre>
      <button
        onClick={() => {
          navigator.clipboard?.writeText(code).catch(() => undefined);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="absolute right-2 top-2 rounded-lg bg-[#12210f] px-2 py-1 text-xs text-zinc-300 border border-[#243424]"
      >
        {copied ? 'Copied!' : `Copy · ${language}`}
      </button>
    </div>
  );
}

export default function ArticlePage({ subject, article, lang, progress, onArticleDone, onCompilerRun }: Props) {
  const idx = subject.articles.findIndex((a) => a.id === article.id);
  const prev = idx > 0 ? subject.articles[idx - 1] : null;
  const next = idx >= 0 && idx < subject.articles.length - 1 ? subject.articles[idx + 1] : null;
  const score = progress.completedArticles[article.id];

  const openInCompiler = (language: string, code: string) => {
    try {
      sessionStorage.setItem('l2p_compiler', JSON.stringify({ language, code }));
    } catch {
      // ignore
    }
    location.hash = '#/compiler';
  };

  return (
    <div>
      <a href={`#/subject/${subject.id}`} className="text-sm">
        ← {t(subject.name, lang)}
      </a>
      <h1 className="mt-2 text-2xl font-bold sm:text-3xl">{t(article.title, lang)}</h1>
      <p className="mt-1 text-zinc-400">
        {subject.icon} {t(subject.name, lang)} · ~{article.readMinutes} min read
        {score !== undefined ? ` · your best: ${score}%` : ''}
      </p>

      {article.diagram ? <DiagramView diagram={article.diagram} lang={lang} /> : null}

      {article.sections.map((sec, i) => (
        <section key={i} className="mt-6">
          <h2 className="text-lg font-bold text-green-400">{t(sec.heading, lang)}</h2>
          <p className="mt-2 whitespace-pre-line leading-relaxed text-zinc-200">{t(sec.body, lang)}</p>
          {sec.code ? (
            <div className="mt-3">
              <p className="mb-1 text-sm font-semibold">{t(sec.code.title, lang)}</p>
              <CodeBlock code={sec.code.code} language={sec.code.language} />
              {sec.code.output ? (
                <p className="output mt-2">{sec.code.output}</p>
              ) : null}
              {sec.code.note ? <p className="mt-1 text-sm text-zinc-400">{t(sec.code.note, lang)}</p> : null}
              <button
                onClick={() => openInCompiler(sec.code!.language, sec.code!.code)}
                className="mt-2 rounded-xl border border-green-700 bg-[#12210f] px-3 py-1 text-sm text-green-300"
              >
                ▶ Try this code in the compiler
              </button>
            </div>
          ) : null}
        </section>
      ))}

      {article.codeExamples?.length ? (
        <section className="mt-6">
          <h2 className="text-lg font-bold text-green-400">
            {lang === 'hindi' ? 'और उदाहरण' : lang === 'english' ? 'More worked examples' : 'Aur examples'}
          </h2>
          {article.codeExamples.map((ex, i) => (
            <div key={i} className="mt-3">
              <p className="mb-1 text-sm font-semibold">{t(ex.title, lang)}</p>
              <CodeBlock code={ex.code} language={ex.language} />
              {ex.output ? <p className="output mt-2">{ex.output}</p> : null}
              {ex.note ? <p className="mt-1 text-sm text-zinc-400">{t(ex.note, lang)}</p> : null}
              <button
                onClick={() => openInCompiler(ex.language, ex.code)}
                className="mt-2 rounded-xl border border-green-700 bg-[#12210f] px-3 py-1 text-sm text-green-300"
              >
                ▶ Try this code in the compiler
              </button>
            </div>
          ))}
        </section>
      ) : null}

      {article.practice ? (
        <section className="mt-8 rounded-2xl border border-[#243424] bg-[#0d1510] p-4">
          <h2 className="text-lg font-bold text-green-400">
            ✍️ {t(article.practice.title, lang)}
          </h2>
          <p className="mt-2 whitespace-pre-line text-zinc-200">{t(article.practice.task, lang)}</p>
          {article.practice.expected ? (
            <p className="mt-2 text-sm text-zinc-400">Expected: {article.practice.expected}</p>
          ) : null}
          {['python', 'javascript', 'html', 'sql'].includes(article.practice.language) ? (
            <div className="mt-3">
              <CodeRunner
                initialLanguage={article.practice.language as 'python' | 'javascript' | 'html' | 'sql'}
                initialCode={article.practice.starter}
                onRun={onCompilerRun}
              />
            </div>
          ) : (
            <div className="mt-3">
              <CodeBlock code={article.practice.starter} language={article.practice.language} />
              <p className="mt-2 text-sm text-yellow-300">
                The {article.practice.language.toUpperCase()} runner is coming soon — trace this code by hand for now: what does each line do, and what is the final output? The answer is in the task above.
              </p>
            </div>
          )}
        </section>
      ) : null}

      <section className="mt-8">
        <h2 className="text-lg font-bold text-green-400">
          📝 {lang === 'hindi' ? 'खुद को परखें' : lang === 'english' ? 'Test yourself' : 'Khud ko parkho'}
        </h2>
        <p className="mb-3 text-sm text-zinc-400">
          {article.mcqs.length} questions · 80% to mark this article done · every answer comes with an explanation
        </p>
        <Quiz mcqs={article.mcqs} lang={lang} onFinish={(s) => onArticleDone(article.id, s)} />
      </section>

      <div className="mt-8 flex flex-wrap justify-between gap-2">
        {prev ? (
          <a href={`#/article/${subject.id}/${prev.id}`} className="rounded-xl border border-[#243424] bg-[#12210f] px-4 py-2">
            ← {t(prev.title, lang)}
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a href={`#/article/${subject.id}/${next.id}`} className="rounded-xl bg-green-600 px-4 py-2 font-semibold text-white">
            {t(next.title, lang)} →
          </a>
        ) : (
          <a href={`#/subject/${subject.id}`} className="rounded-xl bg-green-600 px-4 py-2 font-semibold text-white">
            Back to {t(subject.name, lang)}
          </a>
        )}
      </div>
    </div>
  );
}
