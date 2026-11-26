export interface Principle {
  number: string;
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    number: '01',
    title: 'Work where others don’t',
    body: 'Arabic-first product with full RTL, deep context for the Saudi and Gulf markets, and the regulated-industry patterns most teams never need to touch — HIPAA, banking security, App Store submissions across regions.',
  },
  {
    number: '02',
    title: 'Architect for change',
    body: 'Live codebases get refactored, not rewritten. I lead incremental UIKit → SwiftUI migrations, pick architectures (MVVM, VIPER, IPV) that fit the team, and set review and testing standards that hold up as the product grows.',
  },
  {
    number: '03',
    title: 'Ship, then own it',
    body: 'A release is the start of the work. I track crashes, load times, and post-release bug counts, and I measure what I improve — 30% fewer post-release bugs, 40% faster load times, 25% lower crash rates, all shipped and verified.',
  },
];
