export interface ImpactStat {
  value: string;
  label: string;
  caption: string;
}

export const impactStats: ImpactStat[] = [
  {
    value: '7+',
    label: 'Years',
    caption: 'Shipping production iOS apps end-to-end.',
  },
  {
    value: '10+',
    label: 'Apps shipped',
    caption: 'Across PropTech, banking, healthcare, and education.',
  },
  {
    value: '6',
    label: 'Countries',
    caption: 'Saudi Arabia, UAE, Egypt, Bosnia, Croatia, Romania.',
  },
  {
    value: '30%',
    label: 'Fewer bugs',
    caption: 'Post-release, through code review and test coverage.',
  },
  {
    value: '40%',
    label: 'Faster load',
    caption: 'Via caching, threading, and memory optimization.',
  },
  {
    value: 'RTL',
    label: 'Arabic-first',
    caption: 'Full right-to-left across every shipped product.',
  },
];
