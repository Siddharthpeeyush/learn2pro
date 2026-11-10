import { useMemo, useState } from 'react';
import type { Lang, Subject } from '../lib/types';
import type { Progress } from '../lib/store';
import { t } from '../lib/i18n';

interface Props {
  subjects: Subject[];
  lang: Lang;
  progress: Progress;
}

const CATEGORY_LABEL: Record<string, { hinglish: string; english: string; hindi?: string }> = {
  cse: { hinglish: 'Computer Science — Engineering Subjects', english: 'Computer Science — Engineering Subjects', hindi: 'कंप्यूटर साइंस — इंजीनियरिंग विषय' },
  aptitude: { hinglish: 'Aptitude', english: 'Aptitude', hindi: 'एप्टीट्यूड' },
  placement: { hinglish: 'Placement', english: 'Placement', hindi: 'प्लेसमेंट' },
};

const CATEGORY_ORDER = ['cse', 'aptitude', 'placement'];

export default function HomePage({ subjects, lang, progress }: Props) {
  const [query, setQuery] = useState('');

  const totalArticles = subjects.reduce((n, s) => n + s.articles.length, 0);
  const doneCount = Object.keys(progress.completedArticles).length;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const hits: { subject: Subject; articleId: string; title: string }[] = [];
    for (const s of subjects) {
      if (t(s.name, lang).toLowerCase().includes(q) || t(s.tagline, lang).toLowerCase().includes(q)) {
        for (const a of s.articles) hits.push({ subject: s, articleId: a.id, title: t(a.title, lang) });
        continue;
      }
      for (const a of s.articles) {
        const hay = [t(a.title, lang), t(a.summary, lang), ...a.sections.map((sec) => t(sec.heading, lang))].join(' ').toLowerCase();
        if (hay.includes(q)) hits.push({ subject: s, articleId: a.id, title: t(a.title, lang) });
      }
    }
    return hits.slice(0, 20);
  }, [query, subjects, lang]);

  // First incomplete article across subjects, for "Continue learning".
  const nextArticle = useMemo(() => {
    for (const s of subjects) {
      for (const a of s.articles) {
        if (progress.completedArticles[a.id] === undefined) return { subject: s, article: a };
      }
    }
    return null;
  }, [subjects, progress]);

  return (
    <div>
      <div className="rounded-3xl border border-[#243424] bg-gradient-to-br from-[#12210f] to-[#0a0f0a] p-6 sm:p-8">
        <h1 className="text-3xl font-bold sm:text-4xl">
          {lang === 'hindi'
            ? 'इंजीनियरिंग सीखें — गहराई से।'
            : lang === 'english'
              ? 'Learn engineering — in depth.'
              : 'Engineering seekho — gehrai se.'}
        </h1>
        <p className="mt-2 max-w-2xl text-zinc-300">
          {lang === 'hindi'
            ? 'C, Python, Java, DSA, DBMS, OS, Networks, Aptitude और Placement — हर विषय के गहरे लेख, काम के उदाहरण, और साथ में compiler जिसमें आप खुद code चला सकते हैं। सब कुछ मुफ़्त।'
            : lang === 'english'
              ? 'C, Python, Java, DSA, DBMS, OS, Networks, Aptitude and Placement — deep articles for every subject, worked examples, and a compiler where you run code yourself. Everything free.'
              : 'C, Python, Java, DSA, DBMS, OS, Networks, Aptitude aur Placement — har subject ke gehre articles, worked examples, aur compiler jisme tum khud code chala sakte ho. Sab kuch free.'}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-[#12210f] border border-[#243424] px-3 py-1">{subjects.length} subjects</span>
          <span className="rounded-full bg-[#12210f] border border-[#243424] px-3 py-1">{totalArticles} articles</span>
          <span className="rounded-full bg-[#12210f] border border-[#243424] px-3 py-1">🔥 {progress.streak} day streak</span>
          <span className="rounded-full bg-[#12210f] border border-[#243424] px-3 py-1">⭐ {progress.xp} XP</span>
          <span className="rounded-full bg-[#12210f] border border-[#243424] px-3 py-1">📖 {doneCount}/{totalArticles} done</span>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={lang === 'hindi' ? 'खोजें — जैसे arrays, SQL joins, percentages…' : lang === 'english' ? 'Search — e.g. arrays, SQL joins, percentages…' : 'Search karo — jaise arrays, SQL joins, percentages…'}
          className="mt-4 w-full rounded-xl border border-[#243424] bg-[#0d1510] px-4 py-3 text-base outline-none focus:border-green-500"
        />
        {query.trim() ? (
          <div className="mt-3">
            {results.length === 0 ? (
              <p className="text-sm text-zinc-400">No results for “{query}” yet — try a subject or topic name.</p>
            ) : (
              results.map((r) => (
                <a
                  key={r.articleId}
                  href={`#/article/${r.subject.id}/${r.articleId}`}
                  className="block rounded-xl px-3 py-2 hover:bg-[#12210f]"
                >
                  <span className="text-green-400">{r.subject.icon} {t(r.subject.name, lang)}</span>
                  {' — '}
                  {r.title}
                </a>
              ))
            )}
          </div>
        ) : null}
        {nextArticle ? (
          <a
            href={`#/article/${nextArticle.subject.id}/${nextArticle.article.id}`}
            className="mt-4 inline-block rounded-xl bg-green-600 px-5 py-2 font-semibold text-white"
          >
            ▶ {lang === 'hindi' ? 'सीखना जारी रखें: ' : lang === 'english' ? 'Continue learning: ' : 'Continue learning: '}
            {t(nextArticle.article.title, lang)}
          </a>
        ) : null}
      </div>

      <a
        href="https://learn2pro-app.netlify.app"
        target="_blank"
        rel="noreferrer"
        className="mt-4 block rounded-2xl border border-[#243424] bg-[#0d1510] p-4 hover:border-green-600"
      >
        <b>🛤️ Zero to Pro Path (v1)</b>
        <span className="text-zinc-400">
          {' — '}
          {lang === 'hindi'
            ? 'बिल्कुल शुरुआत से — कंप्यूटर क्या है, पहली code, वेबसाइट, नौकरी की तैयारी। 18 पाठ, एक रास्ता।'
            : lang === 'english'
              ? 'From absolute zero — what a computer is, first code, websites, job prep. 18 lessons, one path.'
              : 'Bilkul zero se — computer kya hai, pehli code, websites, job prep. 18 lessons, ek rasta.'}
        </span>
      </a>

      {CATEGORY_ORDER.map((cat) => {
        const list = subjects.filter((s) => s.category === cat);
        if (!list.length) return null;
        return (
          <section key={cat} className="mt-8">
            <h2 className="text-xl font-bold">{t(CATEGORY_LABEL[cat], lang)}</h2>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {list.map((s) => {
                const done = s.articles.filter((a) => progress.completedArticles[a.id] !== undefined).length;
                return (
                  <a
                    key={s.id}
                    href={`#/subject/${s.id}`}
                    className="rounded-2xl border border-[#243424] bg-[#0d1510] p-4 hover:border-green-600"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{s.icon}</span>
                      <div>
                        <h3 className="font-bold text-white">{t(s.name, lang)}</h3>
                        <p className="text-sm text-zinc-400">{t(s.tagline, lang)}</p>
                        <p className="mt-2 text-sm text-zinc-300">
                          {s.articles.length} articles · {done}/{s.articles.length} done
                        </p>
                        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-[#1a2a1a]">
                          <div
                            className="h-full bg-green-500"
                            style={{ width: `${s.articles.length ? Math.round((done / s.articles.length) * 100) : 0}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
