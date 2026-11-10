import { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import type { Lang, Subject } from '../lib/types';
import type { Progress } from '../lib/store';
import { LANGS, t } from '../lib/i18n';

interface Props {
  lang: Lang;
  setLang: (l: Lang) => void;
  progress: Progress;
  subjects: Subject[];
  children: ReactNode;
}

interface ArticleHit {
  subject: Subject;
  articleId: string;
  title: string;
}

/** Live search across subjects + articles, same matching as the Home page
 *  (subject name/tagline, article title/summary/section headings), capped so
 *  the header dropdown stays scannable. */
function searchAll(
  subjects: Subject[],
  query: string,
  lang: Lang,
): { subjectHits: Subject[]; articleHits: ArticleHit[] } {
  const q = query.trim().toLowerCase();
  if (!q) return { subjectHits: [], articleHits: [] };
  const subjectHits = subjects.filter(
    (s) => t(s.name, lang).toLowerCase().includes(q) || t(s.tagline, lang).toLowerCase().includes(q),
  );
  const articleHits: ArticleHit[] = [];
  for (const s of subjects) {
    for (const a of s.articles) {
      const hay = [t(a.title, lang), t(a.summary, lang), ...a.sections.map((sec) => t(sec.heading, lang))]
        .join(' ')
        .toLowerCase();
      if (hay.includes(q)) articleHits.push({ subject: s, articleId: a.id, title: t(a.title, lang) });
      if (articleHits.length >= 8) break;
    }
    if (articleHits.length >= 8) break;
  }
  return { subjectHits, articleHits };
}

const UI: Record<string, { hinglish: string; english: string; hindi: string }> = {
  searchPlaceholder: {
    hinglish: 'Search karo — jaise arrays, SQL joins…',
    english: 'Search — e.g. arrays, SQL joins…',
    hindi: 'खोजें — जैसे arrays, SQL joins…',
  },
  searchLabel: { hinglish: 'Search', english: 'Search', hindi: 'खोजें' },
  menuLabel: { hinglish: 'Menu', english: 'Menu', hindi: 'मेन्यू' },
  subjectsLabel: { hinglish: 'Subjects', english: 'Subjects', hindi: 'विषय' },
  languageLabel: { hinglish: 'Language', english: 'Language', hindi: 'भाषा' },
  noResults: { hinglish: 'Kuch nahi mila', english: 'No results found', hindi: 'कोई परिणाम नहीं मिला' },
  articlesWord: { hinglish: 'articles', english: 'articles', hindi: 'लेख' },
  streakWord: { hinglish: 'day streak', english: 'day streak', hindi: 'दिन की स्ट्रीक' },
};

function ui(key: keyof typeof UI, lang: Lang): string {
  return UI[key][lang] ?? UI[key].hinglish;
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

function SearchResults({
  subjectHits,
  articleHits,
  lang,
  onNavigate,
}: {
  subjectHits: Subject[];
  articleHits: ArticleHit[];
  lang: Lang;
  onNavigate: () => void;
}) {
  if (subjectHits.length === 0 && articleHits.length === 0) {
    return <p className="px-3 py-3 text-sm text-zinc-400">{ui('noResults', lang)} — try a subject or topic name.</p>;
  }
  return (
    <div className="py-1">
      {subjectHits.map((s) => (
        <a
          key={s.id}
          href={`#/subject/${s.id}`}
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-[#12210f]"
        >
          <span className="text-xl">{s.icon}</span>
          <span className="min-w-0 flex-1 truncate font-semibold text-white">{t(s.name, lang)}</span>
          <span className="shrink-0 text-xs text-zinc-400">
            {s.articles.length} {ui('articlesWord', lang)}
          </span>
        </a>
      ))}
      {articleHits.map((r) => (
        <a
          key={r.articleId}
          href={`#/article/${r.subject.id}/${r.articleId}`}
          onClick={onNavigate}
          className="block rounded-xl px-3 py-2 hover:bg-[#12210f]"
        >
          <span className="text-green-400">
            {r.subject.icon} {t(r.subject.name, lang)}
          </span>
          {' — '}
          <span className="text-zinc-200">{r.title}</span>
        </a>
      ))}
    </div>
  );
}

export default function Layout({ lang, setLang, progress, subjects, children }: Props) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const mobileInputRef = useRef<HTMLInputElement>(null);
  const desktopInputRef = useRef<HTMLInputElement>(null);

  const { subjectHits, articleHits } = useMemo(() => searchAll(subjects, query, lang), [query, subjects, lang]);
  const hasQuery = query.trim().length > 0;

  // Navigating anywhere closes the search + menu panels.
  useEffect(() => {
    const onHash = () => {
      setSearchOpen(false);
      setMenuOpen(false);
      setQuery('');
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    if (searchOpen) mobileInputRef.current?.focus();
  }, [searchOpen]);

  const closeAll = () => {
    setSearchOpen(false);
    setMenuOpen(false);
    setQuery('');
  };

  const toggleSearch = () => {
    setMenuOpen(false);
    setSearchOpen((v) => !v);
    if (searchOpen) setQuery('');
  };

  const toggleMenu = () => {
    setSearchOpen(false);
    setMenuOpen((v) => !v);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-[#243424] bg-[#0a0f0a]/95 backdrop-blur">
        <div className="mx-auto max-w-5xl px-3 sm:px-4">
          {/* ── Top row: one line on every width ─────────────────────── */}
          <div className="flex h-14 items-center gap-2">
            <a href="#/" onClick={closeAll} className="shrink-0 text-[22px] font-extrabold tracking-tight text-white">
              Learn<span className="text-green-400">2</span>Pro
            </a>

            {/* Desktop nav */}
            <nav className="ml-2 hidden items-center gap-1 text-sm lg:flex">
              <a href="#/" className="rounded-lg px-2.5 py-1.5 text-zinc-300 hover:bg-[#12210f] hover:text-white">
                Home
              </a>
              <a href="#/compiler" className="rounded-lg px-2.5 py-1.5 text-zinc-300 hover:bg-[#12210f] hover:text-white">
                💻 Compiler
              </a>
              <a href="#/practice" className="rounded-lg px-2.5 py-1.5 text-zinc-300 hover:bg-[#12210f] hover:text-white">
                📝 Practice
              </a>
            </nav>

            {/* Desktop search */}
            <div className="relative ml-2 hidden min-w-0 flex-1 lg:block">
              <div className="flex items-center gap-2 rounded-full border border-[#243424] bg-[#0d1510] px-3 py-1.5">
                <span className="text-zinc-400">
                  <SearchIcon />
                </span>
                <input
                  ref={desktopInputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setSearchOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setQuery('');
                      desktopInputRef.current?.blur();
                    }
                  }}
                  placeholder={ui('searchPlaceholder', lang)}
                  aria-label={ui('searchLabel', lang)}
                  className="min-w-0 flex-1 bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
                />
                {hasQuery ? (
                  <button
                    onClick={() => {
                      setQuery('');
                      desktopInputRef.current?.focus();
                    }}
                    aria-label="Clear search"
                    className="shrink-0 rounded-full p-0.5 text-zinc-400 hover:text-white"
                  >
                    <CloseIcon />
                  </button>
                ) : null}
              </div>
              {searchOpen && hasQuery ? (
                <div className="absolute inset-x-0 top-full mt-2 max-h-[60vh] overflow-y-auto rounded-2xl border border-[#243424] bg-[#0d1510] p-1 shadow-2xl shadow-black/60">
                  <SearchResults
                    subjectHits={subjectHits}
                    articleHits={articleHits}
                    lang={lang}
                    onNavigate={closeAll}
                  />
                </div>
              ) : null}
            </div>

            {/* Right cluster: streak + XP, then mobile controls */}
            <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
              <span
                className="flex items-center gap-1 rounded-full border border-[#243424] bg-[#12210f] px-2.5 py-1.5 text-sm font-bold text-zinc-100"
                title={`${progress.streak} ${ui('streakWord', lang)}`}
              >
                🔥 <span className="tabular-nums">{progress.streak}</span>
              </span>
              <span className="hidden items-center gap-1 rounded-full border border-[#243424] bg-[#12210f] px-2.5 py-1.5 text-sm font-bold text-zinc-100 sm:flex">
                ⭐ <span className="tabular-nums">{progress.xp}</span>
              </span>

              {/* Mobile: search + menu buttons */}
              <button
                onClick={toggleSearch}
                aria-label={ui('searchLabel', lang)}
                aria-expanded={searchOpen}
                className={`flex h-10 w-10 items-center justify-center rounded-xl border text-zinc-200 lg:hidden ${
                  searchOpen ? 'border-green-600 bg-[#12210f] text-green-300' : 'border-[#243424] bg-[#12210f]'
                }`}
              >
                {searchOpen ? <CloseIcon /> : <SearchIcon />}
              </button>
              <button
                onClick={toggleMenu}
                aria-label={ui('menuLabel', lang)}
                aria-expanded={menuOpen}
                className={`flex h-10 w-10 items-center justify-center rounded-xl border text-zinc-200 lg:hidden ${
                  menuOpen ? 'border-green-600 bg-[#12210f] text-green-300' : 'border-[#243424] bg-[#12210f]'
                }`}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>

            {/* Desktop language pills */}
            <div className="ml-1 hidden shrink-0 gap-1 lg:flex">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`rounded-full px-2.5 py-1.5 text-xs font-semibold ${
                    lang === l.code
                      ? 'bg-green-600 text-white'
                      : 'border border-[#243424] bg-[#12210f] text-zinc-300'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Language bar (mobile): the Hinglish / English choice is
              our unique thing, so it stays visible at the top ───────── */}
          <div className="flex items-center gap-2 border-t border-[#243424] py-2 lg:hidden">
            <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-zinc-400">
              🌐 {ui('languageLabel', lang)}
            </span>
            <div className="grid flex-1 grid-cols-2 gap-1 rounded-full border border-[#243424] bg-[#0d1510] p-1">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  aria-pressed={lang === l.code}
                  className={`rounded-full px-2 py-1.5 text-sm font-semibold ${
                    lang === l.code ? 'bg-green-600 text-white' : 'text-zinc-300'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Mobile search panel ──────────────────────────────────── */}
          {searchOpen ? (
            <div className="border-t border-[#243424] pb-3 pt-3 lg:hidden">
              <div className="flex items-center gap-2 rounded-full border border-[#243424] bg-[#0d1510] px-3 py-2">
                <span className="text-zinc-400">
                  <SearchIcon />
                </span>
                <input
                  ref={mobileInputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setQuery('');
                      setSearchOpen(false);
                    }
                  }}
                  placeholder={ui('searchPlaceholder', lang)}
                  aria-label={ui('searchLabel', lang)}
                  className="min-w-0 flex-1 bg-transparent text-base text-zinc-100 outline-none placeholder:text-zinc-500"
                />
                {hasQuery ? (
                  <button
                    onClick={() => setQuery('')}
                    aria-label="Clear search"
                    className="shrink-0 rounded-full p-0.5 text-zinc-400 hover:text-white"
                  >
                    <CloseIcon />
                  </button>
                ) : null}
              </div>
              {hasQuery ? (
                <div className="mt-2 max-h-[55vh] overflow-y-auto">
                  <SearchResults
                    subjectHits={subjectHits}
                    articleHits={articleHits}
                    lang={lang}
                    onNavigate={closeAll}
                  />
                </div>
              ) : null}
            </div>
          ) : null}

          {/* ── Mobile menu panel ────────────────────────────────────── */}
          {menuOpen ? (
            <div className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-[#243424] pb-4 pt-2 lg:hidden">
              <nav className="flex flex-col">
                <a
                  href="#/"
                  onClick={closeAll}
                  className="rounded-xl px-3 py-2.5 font-semibold text-white hover:bg-[#12210f]"
                >
                  🏠 Home
                </a>
                <a
                  href="#/compiler"
                  onClick={closeAll}
                  className="rounded-xl px-3 py-2.5 font-semibold text-white hover:bg-[#12210f]"
                >
                  💻 Compiler
                </a>
                <a
                  href="#/practice"
                  onClick={closeAll}
                  className="rounded-xl px-3 py-2.5 font-semibold text-white hover:bg-[#12210f]"
                >
                  📝 Practice
                </a>
              </nav>

              <p className="mt-3 px-3 text-xs font-bold uppercase tracking-wider text-zinc-500">
                {ui('subjectsLabel', lang)}
              </p>
              <div className="mt-1 flex flex-col">
                {subjects.map((s) => {
                  const done = s.articles.filter((a) => progress.completedArticles[a.id] !== undefined).length;
                  return (
                    <a
                      key={s.id}
                      href={`#/subject/${s.id}`}
                      onClick={closeAll}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-[#12210f]"
                    >
                      <span className="text-xl">{s.icon}</span>
                      <span className="min-w-0 flex-1 truncate font-semibold text-white">{t(s.name, lang)}</span>
                      <span className="shrink-0 text-xs text-zinc-400">
                        {s.articles.length} {ui('articlesWord', lang)}
                        {done > 0 ? ` · ${done} ✓` : ''}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-3 flex gap-2 px-1">
                <span className="flex-1 rounded-xl border border-[#243424] bg-[#12210f] px-3 py-2 text-center text-sm font-bold">
                  🔥 {progress.streak} {ui('streakWord', lang)}
                </span>
                <span className="flex-1 rounded-xl border border-[#243424] bg-[#12210f] px-3 py-2 text-center text-sm font-bold">
                  ⭐ {progress.xp} XP
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
      <footer className="border-t border-[#243424] py-6 text-center text-sm text-zinc-500">
        <p>Learn2Pro — Learn engineering, in depth. Everything free, forever.</p>
        <p className="mt-1">
          All articles are written in our own style for students, in Hinglish and English.
          {' · '}
          <a href="https://learn2pro-app.netlify.app" target="_blank" rel="noreferrer">
            Zero to Pro Path (v1)
          </a>
        </p>
      </footer>
    </div>
  );
}
