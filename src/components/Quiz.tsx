import { useState } from 'react';
import type { MCQ, Lang } from '../lib/types';
import { t } from '../lib/i18n';
import { renderInline, renderRichText } from '../lib/inline';

interface Props {
  mcqs: MCQ[];
  lang: Lang;
  onFinish?: (score: number) => void;
}

/** Practice MCQs: answer all, submit, see the correct answer + a short
 *  explanation of WHY for every question. */
export default function Quiz({ mcqs, lang, onFinish }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const submit = () => {
    if (Object.keys(answers).length < mcqs.length) return;
    let correct = 0;
    mcqs.forEach((q, i) => {
      if (answers[i] === q.ans) correct++;
    });
    const pct = Math.round((correct / mcqs.length) * 100);
    setScore(pct);
    setSubmitted(true);
    onFinish?.(pct);
  };

  return (
    <div>
      {mcqs.map((q, qi) => (
        <div key={qi} className="mb-5 rounded-2xl border border-[#243424] bg-[#0d1510] p-4">
          <div className="mb-3 font-semibold">
            Q{qi + 1}. {renderRichText(t(q.q, lang))}
          </div>
          <div className="flex flex-col gap-2">
            {q.opts.map((o, oi) => {
              const chosen = answers[qi] === oi;
              const isCorrect = oi === q.ans;
              let cls = 'border-[#243424] bg-[#12210f] hover:border-green-600';
              if (submitted) {
                if (isCorrect) cls = 'border-green-500 bg-green-950';
                else if (chosen) cls = 'border-red-500 bg-red-950';
                else cls = 'border-[#243424] bg-[#12210f] opacity-60';
              } else if (chosen) {
                cls = 'border-green-500 bg-green-950';
              }
              return (
                <button
                  key={oi}
                  disabled={submitted}
                  onClick={() => setAnswers((prev) => ({ ...prev, [qi]: oi }))}
                  className={`rounded-xl border px-3 py-2 text-left ${cls}`}
                >
                  {renderRichText(t(o, lang))}
                </button>
              );
            })}
          </div>
          {submitted ? (
            <div className="mt-3 rounded-xl bg-green-950/60 p-3 text-sm">
              <p>
                <b>{lang === 'hindi' ? 'सही जवाब: ' : lang === 'english' ? 'Correct answer: ' : 'Sahi jawab: '}</b>
                {renderInline(t(q.opts[q.ans], lang))}
              </p>
              <div className="mt-1 text-zinc-300">{renderRichText(t(q.expl, lang))}</div>
            </div>
          ) : null}
        </div>
      ))}
      {!submitted ? (
        <button
          onClick={submit}
          disabled={Object.keys(answers).length < mcqs.length}
          className="rounded-xl bg-green-600 px-5 py-2 font-semibold text-white disabled:opacity-40"
        >
          {lang === 'hindi'
            ? 'टेस्ट जमा करें'
            : lang === 'english'
              ? 'Submit Test'
              : 'Submit Test'}
          {` (${Object.keys(answers).length}/${mcqs.length})`}
        </button>
      ) : (
        <p className="rounded-xl bg-green-950/60 p-3 font-semibold">
          {score}% — {score !== null && score >= 80 ? '🎉 Passed! Great work.' : 'Not yet — 80% needed. Read the explanations above and try again.'}
        </p>
      )}
    </div>
  );
}
