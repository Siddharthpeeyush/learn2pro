import type { Lang, LText } from './types';

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'hinglish', label: 'Hinglish' },
  { code: 'english', label: 'English Only' },
  { code: 'hindi', label: 'हिंदी' },
];

/** Resolve a multi-language string for the active language, with fallback. */
export function t(text: LText | string | undefined, lang: Lang): string {
  if (!text) return '';
  if (typeof text === 'string') return text;
  return text[lang] ?? text.hinglish ?? text.english ?? '';
}
