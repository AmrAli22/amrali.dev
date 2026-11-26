export interface DegreeEntry {
  year: string;
  kind: string;
  title: string;
  institution: string;
  location: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export const degrees: DegreeEntry[] = [
  {
    year: '2019',
    kind: 'Degree',
    title: 'B.Sc. in Computer Science',
    institution: 'Suez Canal University',
    location: 'Egypt',
  },
];

export const certifications: Certification[] = [
  {
    name: 'Mobile Mastery — Kotlin Multiplatform for Android & iOS',
    issuer: 'Catalyst AI',
    year: '2026',
    url: 'https://catalystai.llc/programs/mobile-mastery',
  },
  {
    name: 'Advanced iOS Development',
    issuer: 'LintSchool',
    year: '2021',
  },
  {
    name: 'Android Basics Development',
    issuer: 'IT-Share',
    year: '2018',
  },
  {
    name: 'Adobe Certified Web Designer',
    issuer: 'Applied Syndicate',
    year: '2016',
  },
];
