import type { ReactNode } from 'react';
import type { Lang } from '../lib/types';
import { LANGS } from '../lib/i18n';

interface Props {
  lang: Lang;
  setLang: (l: Lang) => void;
  children: ReactNode;
}

export default function Layout({ lang, setLang, children }: Props) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-[#243424] bg-[#0a0f0a]/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-3 px-4 py-3">
          <a href="#/" className="text-xl font-bold text-white">
            Learn<span className="text-green-400">2</span>Pro
          </a>
          <nav className="flex flex-wrap gap-1 text-sm">
            <a href="#/" className="rounded-lg px-3 py-1 text-zinc-300 hover:bg-[#12210f] hover:text-white">Home</a>
            <a href="#/compiler" className="rounded-lg px-3 py-1 text-zinc-300 hover:bg-[#12210f] hover:text-white">💻 Compiler</a>
            <a href="#/practice" className="rounded-lg px-3 py-1 text-zinc-300 hover:bg-[#12210f] hover:text-white">📝 Practice</a>
          </nav>
          <div className="ml-auto flex gap-1">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  lang === l.code ? 'bg-green-600 text-white' : 'bg-[#12210f] text-zinc-300 border border-[#243424]'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
      <footer className="border-t border-[#243424] py-6 text-center text-sm text-zinc-500">
        <p>Learn2Pro — Learn engineering, in depth. Everything free, forever.</p>
        <p className="mt-1">
          All articles are written in our own style for students, in Hinglish, English and Hindi.
          {' · '}
          <a href="https://learn2pro-app.netlify.app" target="_blank" rel="noreferrer">
            Zero to Pro Path (v1)
          </a>
        </p>
      </footer>
    </div>
  );
}
