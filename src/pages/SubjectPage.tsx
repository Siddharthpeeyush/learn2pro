import type { Lang, Subject } from '../lib/types';
import type { Progress } from '../lib/store';
import { t } from '../lib/i18n';

interface Props {
  subject: Subject;
  lang: Lang;
  progress: Progress;
}

export default function SubjectPage({ subject, lang, progress }: Props) {
  const done = subject.articles.filter((a) => progress.completedArticles[a.id] !== undefined).length;
  return (
    <div>
      <a href="#/" className="text-sm">← Home</a>
      <div className="mt-2 rounded-3xl border border-[#243424] bg-[#0d1510] p-6">
        <div className="text-4xl">{subject.icon}</div>
        <h1 className="mt-2 text-2xl font-bold">{t(subject.name, lang)}</h1>
        <p className="mt-1 text-zinc-300">{t(subject.tagline, lang)}</p>
        <p className="mt-2 text-sm text-zinc-400">
          {subject.articles.length} articles · {done}/{subject.articles.length} done · read in order, each one builds on the last
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {subject.articles.map((a, i) => {
          const score = progress.completedArticles[a.id];
          return (
            <a
              key={a.id}
              href={`#/article/${subject.id}/${a.id}`}
              className="rounded-2xl border border-[#243424] bg-[#0d1510] p-4 hover:border-green-600"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#12210f] font-bold text-green-400">
                  {score !== undefined ? '✓' : i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-white">{t(a.title, lang)}</h3>
                  <p className="text-sm text-zinc-400">{t(a.summary, lang)}</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    ~{a.readMinutes} min read · {a.mcqs.length} practice questions
                    {score !== undefined ? ` · best ${score}%` : ''}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
