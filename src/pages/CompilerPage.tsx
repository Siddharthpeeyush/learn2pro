import { useEffect, useState } from 'react';
import CodeRunner, { type RunnerLang } from '../components/CodeRunner';

interface Props {
  onCompilerRun: (ok: boolean) => void;
}

/** Standalone compiler page. Picks up code sent from an article's
 *  "Try this code in the compiler" button via sessionStorage. */
export default function CompilerPage({ onCompilerRun }: Props) {
  const [initial, setInitial] = useState<{ language: RunnerLang; code: string } | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('l2p_compiler');
      if (raw) {
        const parsed = JSON.parse(raw) as { language: RunnerLang; code: string };
        setInitial(parsed);
        sessionStorage.removeItem('l2p_compiler');
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">💻 Compiler</h1>
      <p className="mt-1 text-zinc-400">
        Write code, press Run, see the output. Python, JavaScript, HTML/CSS and SQL run right in your
        browser — no account, no server. C, C++ and Java show “runner coming soon” until their server
        runner is ready; the compiler never fakes a result.
      </p>
      <div className="mt-4 rounded-2xl border border-[#243424] bg-[#0d1510] p-4">
        <CodeRunner
          key={initial ? `${initial.language}:${initial.code.slice(0, 20)}` : 'default'}
          initialLanguage={initial?.language ?? 'python'}
          initialCode={initial?.code}
          onRun={onCompilerRun}
        />
      </div>
      <p className="mt-3 text-sm text-zinc-500">
        Tip: Python loads from the internet the first time (about 10 MB). After that it is cached.
        JavaScript and HTML work even offline.
      </p>
    </div>
  );
}
