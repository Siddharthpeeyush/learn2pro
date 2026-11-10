// Learn2Pro v2 — subject registry.
// To add a subject: create src/content/<id>.ts exporting a Subject, then
// add one import + one line to ALL_SUBJECTS below. No UI code changes.
import type { Subject } from '../lib/types';
import { cProgramming } from './c-programming';
import { pythonProgramming } from './python-programming';
import { javaProgramming } from './java-programming';
import { dsa } from './dsa';
import { dbms } from './dbms';
import { operatingSystems } from './operating-systems';
import { computerNetworks } from './computer-networks';
import { quantitativeAptitude } from './quantitative-aptitude';
import { logicalReasoning } from './logical-reasoning';
import { verbalAbility } from './verbal-ability';
import { placement } from './placement';

export const ALL_SUBJECTS: Subject[] = [
  cProgramming,
  pythonProgramming,
  javaProgramming,
  dsa,
  dbms,
  operatingSystems,
  computerNetworks,
  quantitativeAptitude,
  logicalReasoning,
  verbalAbility,
  placement,
];

export function findSubject(id: string): Subject | undefined {
  return ALL_SUBJECTS.find((s) => s.id === id);
}

export function findArticle(subjectId: string, articleId: string) {
  const subject = findSubject(subjectId);
  return { subject, article: subject?.articles.find((a) => a.id === articleId) };
}
