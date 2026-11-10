// Progress + streak + XP, stored in localStorage only (no account yet).
// Key pattern matches v1 (learn2pro_v1) but under its own key.

export const LS_KEY = 'learn2pro_v2';

export interface Progress {
  completedArticles: Record<string, number>; // articleId -> best MCQ % (0-100)
  xp: number;
  streak: number;
  lastDay: string; // YYYY-MM-DD
  compilerRuns: number;
}

const empty: Progress = {
  completedArticles: {},
  xp: 0,
  streak: 0,
  lastDay: '',
  compilerRuns: 0,
};

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return { ...empty };
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return { ...empty, ...parsed, completedArticles: parsed.completedArticles ?? {} };
  } catch {
    return { ...empty };
  }
}

export function saveProgress(p: Progress): void {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(p));
  } catch {
    // storage full / private mode — progress just won't persist
  }
}

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayStr(): string {
  return new Date(Date.now() - 86400000).toISOString().slice(0, 10);
}

/** Call once per app load: keeps the daily streak alive. */
export function touchDay(p: Progress): Progress {
  const d = todayStr();
  if (p.lastDay === d) return p;
  const next: Progress = {
    ...p,
    streak: p.lastDay === yesterdayStr() ? p.streak + 1 : 1,
    lastDay: d,
  };
  saveProgress(next);
  return next;
}

export function markArticleDone(p: Progress, articleId: string, score: number): Progress {
  const prev = p.completedArticles[articleId] ?? 0;
  const next: Progress = {
    ...p,
    completedArticles: { ...p.completedArticles, [articleId]: Math.max(prev, score) },
    xp: p.xp + (score >= 80 ? 50 : 10),
  };
  saveProgress(next);
  return next;
}

export function countCompilerRun(p: Progress): Progress {
  const next: Progress = { ...p, compilerRuns: p.compilerRuns + 1, xp: p.xp + 5 };
  saveProgress(next);
  return next;
}
