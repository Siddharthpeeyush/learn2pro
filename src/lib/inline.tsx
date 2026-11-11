import type { ReactNode } from 'react';

/**
 * Inline + block markdown used in article content.
 * Content is authored with **bold**, `code`, *italic* (single words),
 * ### sub-headings, --- separators and ``` fenced code blocks (in quiz
 * questions). The article page used to render prose as plain text, so all
 * of these showed up literally on screen. These helpers parse them into
 * real elements. Safe by construction: italic only matches a single word
 * (*andar*), so `a * b` multiplication and `*ptr` pointers never match.
 */

const INLINE_RE = /(\*\*[\s\S]+?\*\*|`[^`]+`|\*[A-Za-z][A-Za-z0-9_-]*\*)/g;

export function renderInline(text: string): ReactNode[] {
  // Non-greedy so **a** and **b** stay separate; [\s\S] lets a bold span
  // contain `code` with * inside it (e.g. **Edge Case 4: `/* ... */` ...**).
  const parts = text.split(INLINE_RE);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={i} className="font-bold text-white">
          {renderInline(part.slice(2, -2))}
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
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2 && !part.startsWith('**')) {
      return (
        <em key={i} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

/** Block-level rendering for section prose: paragraphs, ### sub-headings
 *  and --- separators. Bullet lines (- ...) stay inside their paragraph. */
export function renderBodyBlocks(text: string): ReactNode[] {
  const paras = text.split(/\n\n+/).filter(Boolean);
  const out: ReactNode[] = [];
  let key = 0;
  for (const para of paras) {
    const lines = para.split('\n');
    let buf: string[] = [];
    const flush = () => {
      if (buf.length) {
        out.push(
          <p key={key++} className="whitespace-pre-line">
            {renderInline(buf.join('\n'))}
          </p>
        );
        buf = [];
      }
    };
    for (const line of lines) {
      if (/^#{2,4}\s/.test(line)) {
        flush();
        out.push(
          <h3 key={key++} className="pt-2 text-lg font-bold leading-snug text-white">
            {renderInline(line.replace(/^#{2,4}\s/, ''))}
          </h3>
        );
      } else if (line.trim() === '---') {
        flush();
        out.push(<hr key={key++} className="my-2 border-zinc-700" />);
      } else {
        buf.push(line);
      }
    }
    flush();
  }
  return out;
}

/** Text that may contain ``` fenced code blocks (quiz questions and
 *  explanations). Fences render as small dark code blocks; the prose
 *  around them goes through renderInline. */
export function renderRichText(text: string): ReactNode[] {
  const parts = text.split(/```[a-zA-Z0-9]*\n?([\s\S]*?)```/g);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return (
        <pre
          key={i}
          className="my-2 overflow-x-auto whitespace-pre rounded-xl bg-black/60 p-3 font-mono text-sm leading-relaxed text-zinc-100 ring-1 ring-[#243424]"
        >
          {part.replace(/\n$/, '')}
        </pre>
      );
    }
    return (
      <span key={i} className="whitespace-pre-line">
        {renderInline(part)}
      </span>
    );
  });
}
