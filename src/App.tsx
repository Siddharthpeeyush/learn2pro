import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import ArticlePage from './pages/ArticlePage';
import CompilerPage from './pages/CompilerPage';
import PracticePage from './pages/PracticePage';
import { ALL_SUBJECTS } from './content';
import type { Lang } from './lib/types';
import { loadProgress, saveProgress, touchDay, markArticleDone, countCompilerRun, type Progress } from './lib/store';

const LANG_KEY = 'learn2pro_v2_lang';

function getLang(): Lang {
  try {
    const v = localStorage.getItem(LANG_KEY);
    if (v === 'english' || v === 'hinglish') return v;
  } catch {
    // ignore
  }
  return 'hinglish';
}

function getHash(): string {
  return location.hash.replace(/^#/, '') || '/';
}

export default function App() {
  const [lang, setLangState] = useState<Lang>(getLang);
  const [progress, setProgress] = useState<Progress>(() => touchDay(loadProgress()));
  const [route, setRoute] = useState(getHash);

  useEffect(() => {
    const onHash = () => {
      setRoute(getHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(LANG_KEY, l);
    } catch {
      // ignore
    }
  };

  const handleArticleDone = (articleId: string, score: number) => {
    setProgress((p) => markArticleDone(p, articleId, score));
  };

  const handleCompilerRun = (ok: boolean) => {
    if (ok) setProgress((p) => countCompilerRun(p));
    else setProgress((p) => {
      // still save progress object so streak stays fresh
      saveProgress(p);
      return p;
    });
  };

  const parts = route.split('/').filter(Boolean);

  let page: React.ReactNode;
  if (parts[0] === 'subject' && parts[1]) {
    const subject = ALL_SUBJECTS.find((s) => s.id === parts[1]);
    page = subject ? (
      <SubjectPage subject={subject} lang={lang} progress={progress} />
    ) : (
      <p>Subject not found. <a href="#/">Back home</a></p>
    );
  } else if (parts[0] === 'article' && parts[1] && parts[2]) {
    const subject = ALL_SUBJECTS.find((s) => s.id === parts[1]);
    const article = subject?.articles.find((a) => a.id === parts[2]);
    page =
      subject && article ? (
        <ArticlePage
          subject={subject}
          article={article}
          lang={lang}
          progress={progress}
          onArticleDone={handleArticleDone}
          onCompilerRun={handleCompilerRun}
        />
      ) : (
        <p>Article not found. <a href="#/">Back home</a></p>
      );
  } else if (parts[0] === 'compiler') {
    page = <CompilerPage onCompilerRun={handleCompilerRun} />;
  } else if (parts[0] === 'practice') {
    page = <PracticePage subjects={ALL_SUBJECTS} lang={lang} selectedSubjectId={parts[1]} />;
  } else {
    page = <HomePage subjects={ALL_SUBJECTS} lang={lang} progress={progress} />;
  }

  return (
    <Layout lang={lang} setLang={setLang} progress={progress} subjects={ALL_SUBJECTS}>
      {page}
    </Layout>
  );
}
