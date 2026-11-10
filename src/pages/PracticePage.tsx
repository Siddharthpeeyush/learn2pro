import { useMemo, useState } from 'react';
import type { Lang, Subject } from '../lib/types';
import { t } from '../lib/i18n';
import Quiz from '../components/Quiz';

interface Props {
  subjects: Subject[];
  lang: Lang;
  selectedSubjectId?: string;
}

/** Practice: all the MCQs of one subject (or every subject) in one big
 *  quiz, with explanations after submit. */
export default function PracticePage({ subjects, lang, selectedSubjectId }: Props) {
  const [subjectId, setSubjectId] = useState(selectedSubjectId ?? subjects[0]?.id ?? '');

  const subject = subjects.find((s) => s.id === subjectId) ?? subjects[0];
  const mcqs = useMemo(() => {
    if (!subject) return [];
    return subject.articles.flatMap((a) => a.mcqs);
  }, [subject]);

  if (!subject) {
    return <p>No practice questions yet — content is still being written.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">📝 Practice</h1>
      <p className="mt-1 text-zinc-400">
        Every question comes with an explanation after you submit. Pick a subject:
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {subjects.map((s) => (
          <button
            key={s.id}
            onClick={() => setSubjectId(s.id)}
            className={`rounded-full px-3 py-1 text-sm font-semibold ${
              s.id === subjectId ? 'bg-green-600 text-white' : 'bg-[#12210f] text-zinc-300 border border-[#243424]'
            }`}
          >
            {s.icon} {t(s.name, lang)}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="mb-3 text-lg font-bold">
          {t(subject.name, lang)} — {mcqs.length} questions
        </h2>
        <Quiz key={subject.id} mcqs={mcqs} lang={lang} />
      </div>
    </div>
  );
}
