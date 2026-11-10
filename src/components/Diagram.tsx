import type { Diagram, DiagramBar, DiagramNode } from '../lib/types';
import { t } from '../lib/i18n';
import type { Lang } from '../lib/types';

/** Renders a lesson diagram as a BIG, colourful, real illustrated figure.
 *  No external images — pure HTML/CSS so it is sharp on phones and never
 *  404s. flow/boxes keep their existing layout, only bigger and coloured;
 *  memory / table / bars / tree / layers / cycle / timeline are new kinds. */

const PALETTE = [
  '#22c55e',
  '#38bdf8',
  '#f59e0b',
  '#f43f5e',
  '#a78bfa',
  '#fb923c',
  '#2dd4bf',
  '#ec4899',
];

function colorAt(i: number): string {
  return PALETTE[i % PALETTE.length];
}

/** Soft tinted background + 2px coloured border for one element. */
function tintStyle(color: string): React.CSSProperties {
  return { backgroundColor: color + '22', borderColor: color };
}

/** Shared big label + subtitle for a node. */
function NodeText({ node, lang }: { node: DiagramNode; lang: Lang }) {
  return (
    <>
      <div className="text-base font-bold leading-snug">{t(node.t, lang)}</div>
      {node.s ? <div className="mt-1 text-sm text-zinc-300">{t(node.s, lang)}</div> : null}
    </>
  );
}

function FlowDiagram({ diagram, lang }: { diagram: Diagram; lang: Lang }) {
  const nodes = diagram.nodes ?? [];
  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
      {nodes.map((n, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-3 sm:flex-row">
          <div
            className="w-full rounded-2xl border-2 px-4 py-4 text-center"
            style={tintStyle(colorAt(i))}
          >
            <NodeText node={n} lang={lang} />
          </div>
          {i < nodes.length - 1 ? (
            <div className="rotate-90 text-center text-2xl font-bold leading-none text-green-400 sm:rotate-0">
              →
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function BoxesDiagram({ diagram, lang }: { diagram: Diagram; lang: Lang }) {
  const nodes = diagram.nodes ?? [];
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {nodes.map((n, i) => (
        <div
          key={i}
          className="rounded-2xl border-2 px-4 py-4"
          style={tintStyle(colorAt(i))}
        >
          <NodeText node={n} lang={lang} />
        </div>
      ))}
    </div>
  );
}

function MemoryDiagram({ diagram, lang }: { diagram: Diagram; lang: Lang }) {
  const nodes = diagram.nodes ?? [];
  return (
    <div className="flex flex-col gap-3">
      {nodes.map((n, i) => {
        const color = colorAt(i);
        return (
          <div
            key={i}
            className="flex flex-col gap-2 rounded-2xl border-2 px-4 py-4 sm:flex-row sm:items-center sm:gap-3"
          >
            <span
              className="shrink-0 rounded-xl border-2 px-4 py-2 text-base font-bold"
              style={tintStyle(color)}
            >
              {t(n.t, lang)}
            </span>
            <span className="hidden text-2xl font-bold text-zinc-400 sm:block">→</span>
            <span className="flex-1 rounded-xl border border-zinc-700 bg-zinc-950/70 px-4 py-2 font-mono text-base text-zinc-100">
              {n.s ? t(n.s, lang) : '—'}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function TableDiagram({ diagram, lang }: { diagram: Diagram; lang: Lang }) {
  const headers = diagram.headers ?? [];
  const rows = diagram.rows ?? [];
  if (headers.length === 0 && rows.length === 0) return null;
  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className="w-full border-collapse text-base">
        {headers.length > 0 ? (
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="border border-green-800 bg-green-600 px-4 py-3 text-left font-bold text-white"
                >
                  {t(h, lang)}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800/70'}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`border border-zinc-700 px-4 py-3 text-zinc-100 ${
                    ci === 0 ? 'font-bold' : ''
                  }`}
                >
                  {t(cell, lang)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BarsDiagram({ diagram, lang }: { diagram: Diagram; lang: Lang }) {
  const bars: DiagramBar[] = diagram.bars ?? [];
  if (bars.length === 0) return null;
  const max = Math.max(...bars.map((b) => b.value), 1);
  return (
    <div className="flex flex-col gap-4">
      {bars.map((b, i) => {
        const color = colorAt(i);
        const widthPct = max > 0 ? (b.value / max) * 100 : 0;
        return (
          <div key={i}>
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-base font-bold">{t(b.label, lang)}</span>
              <span className="text-base font-bold" style={{ color }}>
                {b.value}
                {b.note ? (
                  <span className="ml-2 text-sm font-normal text-zinc-300">{t(b.note, lang)}</span>
                ) : null}
              </span>
            </div>
            <div className="h-7 w-full overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full"
                style={{ width: `${widthPct}%`, backgroundColor: color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function TreeDiagram({ diagram, lang }: { diagram: Diagram; lang: Lang }) {
  const nodes = diagram.nodes ?? [];
  return (
    <div className="flex flex-col gap-2">
      {nodes.map((n, i) => {
        const depth = n.depth ?? 0;
        const color = colorAt(i);
        return (
          <div key={i} style={{ marginLeft: `${depth * 2}rem` }}>
            <span
              className={`inline-block rounded-2xl border-2 px-4 py-3 ${
                depth === 0 ? 'text-lg font-extrabold' : 'text-base font-bold'
              }`}
              style={tintStyle(color)}
            >
              {depth > 0 ? <span className="mr-2 text-zinc-400">└─</span> : null}
              {t(n.t, lang)}
              {n.s ? (
                <span className="ml-2 text-sm font-normal text-zinc-300">{t(n.s, lang)}</span>
              ) : null}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function LayersDiagram({ diagram, lang }: { diagram: Diagram; lang: Lang }) {
  const nodes = diagram.nodes ?? [];
  return (
    <div className="flex flex-col gap-3">
      {nodes.map((n, i) => (
        <div
          key={i}
          className="w-full rounded-2xl border-2 px-4 py-4 text-center"
          style={tintStyle(colorAt(i))}
        >
          <NodeText node={n} lang={lang} />
        </div>
      ))}
    </div>
  );
}

function CycleDiagram({ diagram, lang }: { diagram: Diagram; lang: Lang }) {
  const nodes = diagram.nodes ?? [];
  return (
    <div className="flex flex-col">
      {nodes.map((n, i) => {
        const color = colorAt(i);
        return (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-extrabold text-zinc-950"
                style={{ backgroundColor: color }}
              >
                {i + 1}
              </span>
              {i < nodes.length - 1 ? (
                <span className="w-0.5 flex-1 bg-zinc-700" aria-hidden="true" />
              ) : null}
            </div>
            <div
              className="mb-3 flex-1 rounded-2xl border-2 px-4 py-4"
              style={tintStyle(color)}
            >
              <NodeText node={n} lang={lang} />
            </div>
          </div>
        );
      })}
      <div className="flex items-center gap-3 pl-1">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-400 text-2xl font-bold text-green-400">
          ↺
        </span>
        <span className="text-base font-bold text-green-400">
          {t({ hinglish: 'Phir se shuru — cycle repeat hota hai', english: 'Back to the start — the cycle repeats', hindi: 'फिर से शुरू — चक्र दोहराता है' }, lang)}
        </span>
      </div>
    </div>
  );
}

function TimelineDiagram({ diagram, lang }: { diagram: Diagram; lang: Lang }) {
  const nodes = diagram.nodes ?? [];
  return (
    <div className="flex flex-col">
      {nodes.map((n, i) => {
        const color = colorAt(i);
        return (
          <div key={i} className="relative flex gap-4 pb-4 last:pb-0">
            {i < nodes.length - 1 ? (
              <span
                className="absolute left-[0.6875rem] top-6 h-full w-0.5 bg-zinc-700"
                aria-hidden="true"
              />
            ) : null}
            <span
              className="relative z-10 mt-1.5 h-6 w-6 shrink-0 rounded-full border-4 border-zinc-950"
              style={{ backgroundColor: color }}
              aria-hidden="true"
            />
            <div
              className="flex-1 rounded-2xl border-2 px-4 py-4"
              style={tintStyle(color)}
            >
              <NodeText node={n} lang={lang} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function DiagramView({ diagram, lang }: { diagram: Diagram; lang: Lang }) {
  return (
    <div className="my-4 rounded-2xl border border-[#243424] bg-[#0d1510] p-5">
      <p className="mb-4 text-base font-bold text-green-400 sm:text-lg">
        <span className="mr-2" aria-hidden="true">
          🖼️
        </span>
        {t(diagram.title, lang)}
      </p>
      {diagram.kind === 'flow' ? (
        <FlowDiagram diagram={diagram} lang={lang} />
      ) : diagram.kind === 'boxes' ? (
        <BoxesDiagram diagram={diagram} lang={lang} />
      ) : diagram.kind === 'memory' ? (
        <MemoryDiagram diagram={diagram} lang={lang} />
      ) : diagram.kind === 'table' ? (
        <TableDiagram diagram={diagram} lang={lang} />
      ) : diagram.kind === 'bars' ? (
        <BarsDiagram diagram={diagram} lang={lang} />
      ) : diagram.kind === 'tree' ? (
        <TreeDiagram diagram={diagram} lang={lang} />
      ) : diagram.kind === 'layers' ? (
        <LayersDiagram diagram={diagram} lang={lang} />
      ) : diagram.kind === 'cycle' ? (
        <CycleDiagram diagram={diagram} lang={lang} />
      ) : (
        <TimelineDiagram diagram={diagram} lang={lang} />
      )}
      {diagram.caption ? (
        <p className="mt-4 text-sm italic text-zinc-400">{t(diagram.caption, lang)}</p>
      ) : null}
    </div>
  );
}
