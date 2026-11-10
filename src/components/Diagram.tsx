import type { Diagram } from '../lib/types';
import { t } from '../lib/i18n';
import type { Lang } from '../lib/types';

/** Renders a lesson diagram as labelled boxes (flow) or a grid (boxes).
 *  No external images — pure HTML/CSS so it is sharp on phones and never
 *  404s. */
export default function DiagramView({ diagram, lang }: { diagram: Diagram; lang: Lang }) {
  return (
    <div className="my-4 rounded-2xl border border-[#243424] bg-[#0d1510] p-4">
      <p className="mb-3 text-sm font-semibold text-green-400">{t(diagram.title, lang)}</p>
      {diagram.kind === 'flow' ? (
        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
          {diagram.nodes.map((n, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2 sm:flex-row">
              <div className="w-full rounded-xl border border-green-700/60 bg-[#12210f] px-3 py-3 text-center">
                <div className="font-semibold">{t(n.t, lang)}</div>
                {n.s ? <div className="text-sm text-zinc-400">{t(n.s, lang)}</div> : null}
              </div>
              {i < diagram.nodes.length - 1 ? (
                <div className="text-center text-green-400 sm:rotate-0 rotate-90">→</div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {diagram.nodes.map((n, i) => (
            <div key={i} className="rounded-xl border border-green-700/60 bg-[#12210f] px-3 py-3">
              <div className="font-semibold">{t(n.t, lang)}</div>
              {n.s ? <div className="text-sm text-zinc-400">{t(n.s, lang)}</div> : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
