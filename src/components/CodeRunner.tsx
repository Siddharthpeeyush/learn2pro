import { useEffect, useRef, useState } from 'react';
import type { CodeLanguage } from '../lib/types';

export type RunnerLang = CodeLanguage;

const RUNNABLE: RunnerLang[] = ['python', 'javascript', 'html', 'sql'];
const COMING_SOON: RunnerLang[] = ['c', 'cpp', 'java'];

export const LANG_LABELS: Record<RunnerLang, string> = {
  python: 'Python',
  javascript: 'JavaScript',
  html: 'HTML / CSS',
  sql: 'SQL',
  c: 'C',
  cpp: 'C++',
  java: 'Java',
};

const SAMPLES: Record<RunnerLang, string> = {
  python: `# Print numbers 1 to 5
for i in range(1, 6):
    print(i)

name = input("Your name: ")
print("Hello,", name)`,
  javascript: `// Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,
  html: `<h1>Hello, Learn2Pro!</h1>
<p>Change this text and press Run to see the preview.</p>
<button onclick="alert('Hi!')">Click me</button>`,
  sql: `-- Sample data is loaded automatically.
-- Try your own query below:
SELECT name, marks FROM students WHERE marks >= 80 ORDER BY marks DESC;`,
  c: `#include <stdio.h>

int main() {
    printf("Hello, C!\\n");
    return 0;
}`,
  cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    return 0;
}`,
  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
};

const SQL_SETUP = `
CREATE TABLE students (id INTEGER, name TEXT, marks INTEGER);
INSERT INTO students VALUES (1, 'Rahul', 85);
INSERT INTO students VALUES (2, 'Priya', 92);
INSERT INTO students VALUES (3, 'Amit', 74);
INSERT INTO students VALUES (4, 'Sana', 88);
`;

// ---- Pyodide (Python in the browser, loaded from CDN on first use) ----
declare global {
  interface Window {
    loadPyodide?: (opts: { indexURL: string }) => Promise<PyodideApi>;
  }
}
interface PyodideApi {
  runPython: (code: string) => unknown;
  setStdout: (opts: { batched: (s: string) => void }) => void;
  setStderr: (opts: { batched: (s: string) => void }) => void;
}
const PYODIDE_URL = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
let pyodidePromise: Promise<PyodideApi> | null = null;

function loadPyodideOnce(): Promise<PyodideApi> {
  if (!pyodidePromise) {
    pyodidePromise = new Promise((resolve, reject) => {
      if (window.loadPyodide) {
        window
          .loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/' })
          .then(resolve, reject);
        return;
      }
      const script = document.createElement('script');
      script.src = PYODIDE_URL;
      script.onload = () => {
        if (!window.loadPyodide) return reject(new Error('Pyodide did not load'));
        window
          .loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/' })
          .then(resolve, reject);
      };
      script.onerror = () => reject(new Error('Could not download Pyodide (check internet)'));
      document.head.appendChild(script);
    });
  }
  return pyodidePromise;
}

async function runPython(code: string, stdin: string): Promise<{ ok: boolean; out: string }> {
  const py = await loadPyodideOnce();
  const lines: string[] = [];
  py.setStdout({ batched: (s) => lines.push(s) });
  py.setStderr({ batched: (s) => lines.push(s) });
  const stdinJson = JSON.stringify(stdin.split('\n').filter((l) => l.length > 0));
  const preamble = [
    'import json as _json',
    `_input_lines = _json.loads(${JSON.stringify(stdinJson)})`,
    '_input_idx = [0]',
    'def input(prompt=""):',
    '    print(prompt, end="")',
    '    if _input_idx[0] < len(_input_lines):',
    '        _v = _input_lines[_input_idx[0]]',
    '        _input_idx[0] += 1',
    '        return _v',
    '    return ""',
    '',
  ].join('\n');
  try {
    py.runPython(preamble + code);
    return { ok: true, out: lines.join('\n') || '(no output — try print)' };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    const tail = msg.split('\n').slice(-3).join('\n');
    return { ok: false, out: (lines.join('\n') + '\nError: ' + tail).trim() };
  }
}

function runJS(code: string): { ok: boolean; out: string } {
  const logs: string[] = [];
  const fake = {
    log: (...a: unknown[]) => logs.push(a.map(String).join(' ')),
    error: (...a: unknown[]) => logs.push('Error: ' + a.map(String).join(' ')),
  };
  try {
    const fn = new Function('console', code);
    fn(fake);
    return { ok: true, out: logs.join('\n') || '(no output — try console.log)' };
  } catch (e) {
    return { ok: false, out: 'Error: ' + (e instanceof Error ? e.message : String(e)) };
  }
}

// ---- SQL via sql.js (WASM) ----
let sqlPromise: Promise<unknown> | null = null;
async function runSQL(code: string): Promise<{ ok: boolean; out: string; table?: { columns: string[]; rows: unknown[][] } }> {
  if (!sqlPromise) {
    sqlPromise = (async () => {
      const mod = (await import('sql.js')) as unknown as { default: (opts: unknown) => Promise<unknown> };
      const initSqlJs = mod.default;
      // WASM is bundled with the app (public/sql-wasm.wasm) so SQL works
      // on any host and offline after first load — no CDN dependency.
      return initSqlJs({ locateFile: () => 'sql-wasm.wasm' });
    })();
  }
  const SQL = (await sqlPromise) as {
    Database: new () => {
      run: (sql: string) => void;
      exec: (sql: string) => { columns: string[]; values: unknown[][] }[];
    };
  };
  const db = new SQL.Database();
  try {
    db.run(SQL_SETUP);
    const results = db.exec(code);
    if (!results.length) return { ok: true, out: 'Query ran OK — no rows returned.' };
    const first = results[0];
    const out = first.columns.join(' | ') + '\n' + first.values.map((r) => r.join(' | ')).join('\n');
    return { ok: true, out, table: { columns: first.columns, rows: first.values } };
  } catch (e) {
    return { ok: false, out: 'Error: ' + (e instanceof Error ? e.message : String(e)) };
  }
}

interface Props {
  initialLanguage?: RunnerLang;
  initialCode?: string;
  onRun?: (ok: boolean) => void;
}

/** The Learn2Pro compiler. Python / JavaScript / HTML / SQL run fully in
 *  the browser. C / C++ / Java honestly say "runner coming soon" — the UI
 *  never pretends to run code it cannot run. */
export default function CodeRunner({ initialLanguage = 'python', initialCode, onRun }: Props) {
  const [lang, setLang] = useState<RunnerLang>(initialLanguage);
  const [code, setCode] = useState(initialCode ?? SAMPLES[initialLanguage]);
  const [stdin, setStdin] = useState('');
  const [output, setOutput] = useState('');
  const [table, setTable] = useState<{ columns: string[]; rows: unknown[][] } | null>(null);
  const [running, setRunning] = useState(false);
  const [pyStatus, setPyStatus] = useState<'idle' | 'loading' | 'ready' | 'failed'>('idle');
  const htmlRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setCode(initialCode ?? SAMPLES[initialLanguage]);
    setOutput('');
    setTable(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLanguage]);

  const run = async () => {
    setRunning(true);
    setTable(null);
    try {
      if (COMING_SOON.includes(lang)) {
        const runnerUrl = (import.meta as unknown as { env?: Record<string, string | undefined> }).env
          ?.VITE_CODE_RUNNER_URL;
        if (runnerUrl) {
          try {
            const res = await fetch(`${runnerUrl}/execute`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ language: lang, source: code, stdin }),
            });
            const data = (await res.json()) as { stdout?: string; stderr?: string; output?: string };
            const out = data.stdout ?? data.output ?? '';
            const err = data.stderr ?? '';
            setOutput((out + (err ? '\n' + err : '')).trim() || '(no output)');
            onRun?.(!err);
            return;
          } catch {
            // fall through to the honest message below
          }
        }
        setOutput(
          `⏳ ${LANG_LABELS[lang]} runner coming soon.\n\nThe ${LANG_LABELS[lang]} runner is a small server we are setting up (free hosting). It is not ready yet, so this code was NOT run — nothing here is a fake result.\n\nPython, JavaScript, HTML/CSS and SQL already run in your browser — switch language above to practise now.`,
        );
        onRun?.(false);
        return;
      }
      if (lang === 'python') {
        if (pyStatus !== 'ready') setPyStatus('loading');
        const r = await runPython(code, stdin);
        setPyStatus('ready');
        setOutput(r.out);
        onRun?.(r.ok);
      } else if (lang === 'javascript') {
        const r = runJS(code);
        setOutput(r.out);
        onRun?.(r.ok);
      } else if (lang === 'html') {
        if (htmlRef.current) htmlRef.current.srcdoc = code;
        setOutput('Preview updated below ✓');
        onRun?.(true);
      } else if (lang === 'sql') {
        const r = await runSQL(code);
        setOutput(r.out);
        setTable(r.table ?? null);
        onRun?.(r.ok);
      }
    } catch (e) {
      if (lang === 'python') setPyStatus('failed');
      setOutput('Error: ' + (e instanceof Error ? e.message : String(e)) + '\n\nPython needs internet the first time to load (about 10 MB). If you are offline, try JavaScript or HTML instead — they work offline.');
      onRun?.(false);
    } finally {
      setRunning(false);
    }
  };

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2">
        {(Object.keys(LANG_LABELS) as RunnerLang[]).map((l) => (
          <button
            key={l}
            onClick={() => {
              setLang(l);
              setCode(SAMPLES[l]);
              setOutput('');
              setTable(null);
            }}
            className={`rounded-full px-3 py-1 text-sm font-semibold ${
              lang === l ? 'bg-green-600 text-white' : 'bg-[#12210f] text-zinc-300 border border-[#243424]'
            }`}
          >
            {LANG_LABELS[l]}
            {COMING_SOON.includes(l) ? ' ⏳' : ''}
          </button>
        ))}
      </div>

      {lang === 'python' && pyStatus === 'loading' ? (
        <p className="mb-2 text-sm text-yellow-300">Loading Python (first time, ~10 MB from the internet)…</p>
      ) : null}
      {lang === 'python' && pyStatus === 'failed' ? (
        <p className="mb-2 text-sm text-red-300">Python could not load — check your internet and try again. JavaScript and HTML work offline.</p>
      ) : null}
      {COMING_SOON.includes(lang) ? (
        <p className="mb-2 text-sm text-yellow-300">
          {LANG_LABELS[lang]} runs on a server runner that is coming soon — pressing Run will tell you that honestly instead of faking a result.
        </p>
      ) : null}

      <textarea
        className="codebox"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        aria-label="Code editor"
      />
      {(lang === 'python' || lang === 'c' || lang === 'cpp' || lang === 'java') ? (
        <div className="mt-2">
          <label className="text-sm text-zinc-400">Input (stdin — one value per line, used by input()):</label>
          <textarea
            className="codebox mt-1"
            style={{ minHeight: 60 }}
            value={stdin}
            onChange={(e) => setStdin(e.target.value)}
            placeholder={'Rahul\n17'}
            spellCheck={false}
          />
        </div>
      ) : null}

      <div className="my-3 flex gap-2">
        <button
          onClick={run}
          disabled={running}
          className="rounded-xl bg-green-600 px-5 py-2 font-semibold text-white disabled:opacity-50"
        >
          {running ? 'Running…' : '▶ Run'}
        </button>
        <button
          onClick={() => {
            setCode(SAMPLES[lang]);
            setOutput('');
            setTable(null);
          }}
          className="rounded-xl border border-[#243424] bg-[#12210f] px-4 py-2"
        >
          Reset sample
        </button>
      </div>

      <div className="output">{output || '— output will appear here —'}</div>

      {table ? (
        <table className="mt-3 w-full border-collapse text-sm">
          <thead>
            <tr>
              {table.columns.map((c) => (
                <th key={c} className="border border-[#243424] bg-[#12210f] px-2 py-1 text-left">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((r, i) => (
              <tr key={i}>
                {r.map((cell, j) => (
                  <td key={j} className="border border-[#243424] px-2 py-1">
                    {String(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      {lang === 'html' ? (
        <iframe
          ref={htmlRef}
          title="HTML preview"
          className="mt-3 w-full rounded-xl border border-[#243424] bg-white"
          style={{ minHeight: 200 }}
        />
      ) : null}
    </div>
  );
}
