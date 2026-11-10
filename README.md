/* Learn2Pro — all engineering subjects, in depth, free forever */
# Learn2Pro v2

GeeksforGeeks-style engineering learning site: CSE subjects (deep) + Aptitude + Placement, with an in-browser compiler. Everything free, no pricing, no accounts yet (progress in localStorage).

## Stack
- React 19 + Vite + TypeScript + Tailwind CSS v4
- Static build for Netlify: `npm run build` → `dist/` (publish `dist`, build command `npm run build`)
- Hash routing (works on static hosting with no special config); `public/_redirects` also ships `/* /index.html 200`
- Content lives in TypeScript data files under `src/content/` — one file per subject. Adding a subject = add one file + one line in `src/content/index.ts`. No UI code changes needed.

## Commands
```bash
npm install
npm run dev      # local dev server
npm run build    # tsc + vite build -> dist/
npm run preview  # serve the production build on http://localhost:4173
```

## Compiler
- Python: Pyodide (WASM, loaded from CDN on first use; shows a loading/offline state if it cannot load)
- JavaScript: sandboxed Function, runs fully in-browser
- HTML/CSS: iframe preview
- SQL: sql.js (WASM) — if it cannot load, the UI says so honestly
- C / C++ / Java: UI present with language picker, but honestly says "runner coming soon" — no fake execution. The public Piston API is whitelist-only (verified 10 Nov 2026); a self-hosted runner (Piston/Judge0 on Render free) is a later phase, configured via `VITE_CODE_RUNNER_URL`.

## Structure
- `src/lib/types.ts` — content schema (Subject / Article / MCQ / Diagram / CodeExample)
- `src/lib/store.ts` — localStorage progress (key `learn2pro_v2`), streak, XP
- `src/lib/i18n.ts` — language helpers (Hinglish default / English Only / Hindi)
- `src/content/*.ts` — one file per subject
- `src/components/` — App shell, search, diagram renderer, code runner, MCQ quiz
- `src/pages/` — Home, Subject, Article, Compiler, Practice
