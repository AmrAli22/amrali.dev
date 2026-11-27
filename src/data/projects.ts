export interface AppLink {
  name: string;
  tagline: string;
  url: string;
  cta: string;
  screenshots: string[];
  note?: string;
}

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  role: string;
  year: string;
  tagline: string;
  impact: string[];
  tech: string[];
  apps?: AppLink[];
}

export const projects: Project[] = [
  {
    slug: 'sadan',
    name: 'SADAN',
    subtitle: 'Saudi PropTech Group',
    role: 'Senior iOS Engineer',
    year: '2023 — Present',
    tagline:
      'Leading iOS across three production apps for a Saudi PropTech group — auctions, property documentation, and commercial leasing — through an incremental UIKit → SwiftUI migration with zero downtime.',
    impact: [
      'Architected an incremental UIKit → SwiftUI migration across multiple production apps, starting from the auth and auctions modules.',
      'Built a real-time auction system using SignalR with JWT-scoped user groups, MapKit, and Arabic countdown timers.',
      'Reduced post-release bugs by 30% through structured code review and added unit and UI test coverage.',
    ],
    tech: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'SignalR', 'Alamofire', 'MapKit', 'Arabic / RTL', 'Interactor-Presenter-View'],
    apps: [
      {
        name: 'Zayid',
        tagline: 'Real-time real estate auctions for the Saudi market.',
        url: 'https://apps.apple.com/eg/app/zayid-%D8%B2%D8%A7%D8%A6%D8%AF/id6480176033',
        cta: 'View on App Store',
        screenshots: [
          '/projects/sadan/zayid-1.jpg',
          '/projects/sadan/zayid-2.jpg',
          '/projects/sadan/zayid-3.jpg',
          '/projects/sadan/zayid-4.jpg',
          '/projects/sadan/zayid-5.jpg',
          '/projects/sadan/zayid-6.jpg',
        ],
      },
      {
        name: 'Damin',
        tagline: 'Residential and commercial property documentation, integrated with Ejar.',
        url: 'https://apps.apple.com/eg/app/damin-%D8%B6%D8%A7%D9%85%D9%86/id6523430369',
        cta: 'View on App Store',
        screenshots: [
          '/projects/sadan/damin-1.png',
          '/projects/sadan/damin-2.png',
          '/projects/sadan/damin-3.jpg',
          '/projects/sadan/damin-4.png',
        ],
      },
      {
        name: 'RealTech',
        tagline: 'AI-assisted platform for commercial real estate operations.',
        url: 'https://therealtech.ai/',
        cta: 'Visit Website',
        screenshots: [
          '/projects/sadan/realtech-preview.png',
        ],
        note: 'iOS app in development',
      },
    ],
  },
  {
    slug: 'asseco',
    name: 'Asseco',
    subtitle: 'European Banking Apps',
    role: 'iOS Engineer',
    year: '2022 — 2023',
    tagline:
      'Hardened security and modernized legacy Objective-C codebases for banks across Bosnia, Croatia, and Romania.',
    impact: [
      'Strengthened encryption protocols, lifting banking-app security compliance by 40%.',
      'Refactored critical Objective-C modules to modern Swift, improving runtime performance by 35%.',
      'Owned the App Store submission process across multiple regional banking apps.',
    ],
    tech: ['Swift', 'Objective-C', 'UIKit', 'Encryption', 'Banking Compliance', 'Multi-region deployment'],
    apps: [
      {
        name: 'CEC Bank Mobile Banking',
        tagline: 'Retail mobile banking for Romania’s CEC Bank — balances, payments, transfers.',
        url: 'https://apps.apple.com/ro/app/cec-bank-mobile-banking/id1071729654',
        cta: 'View on App Store',
        screenshots: [
          '/projects/asseco/cec-1.png',
          '/projects/asseco/cec-2.png',
          '/projects/asseco/cec-3.png',
          '/projects/asseco/cec-4.png',
          '/projects/asseco/cec-5.png',
          '/projects/asseco/cec-6.png',
          '/projects/asseco/cec-7.png',
          '/projects/asseco/cec-8.png',
        ],
      },
    ],
  },
  {
    slug: 'aljoud',
    name: 'Aljoud',
    subtitle: 'University Learning Marketplace',
    role: 'iOS Developer',
    year: '2021 — 2022',
    tagline:
      'An integrated learning platform connecting university students with structured courses, rich study materials, interactive quizzes, and flexible purchasing journeys across multiple universities and majors.',
    impact: [
      'Built the full catalogue experience — universities, majors, and courses — with performant list and detail screens.',
      'Shipped in-app purchases for course access and educational offers, with multiple purchasing journeys.',
      'Rendered PDF study materials inline with PDFKit for a seamless in-app reading experience.',
    ],
    tech: ['Swift', 'UIKit', 'MVVM', 'REST APIs', 'PDFKit', 'In-App Purchases', 'Arabic / RTL'],
    apps: [
      {
        name: 'Aljoud',
        tagline: 'Learning marketplace for university students — curricula, quizzes, and PDF study materials.',
        url: 'https://apps.apple.com/sa/app/aljoud/id1604452873',
        cta: 'View on App Store',
        screenshots: [
          '/projects/aljoud/aljoud-1.png',
          '/projects/aljoud/aljoud-2.png',
          '/projects/aljoud/aljoud-3.png',
          '/projects/aljoud/aljoud-4.png',
          '/projects/aljoud/aljoud-5.png',
          '/projects/aljoud/aljoud-6.png',
          '/projects/aljoud/aljoud-7.png',
        ],
      },
    ],
  },
  {
    slug: 'medica',
    name: 'Medica',
    subtitle: 'Healthcare Platform',
    role: 'iOS Developer',
    year: '2020 — 2021',
    tagline: 'HIPAA-compliant medical app with video consultations, payments, and live tracking.',
    impact: [
      'Cut app load time by 40% through caching, threading, and memory optimization.',
      'Built a CI/CD pipeline with Jenkins and Bitrise, reducing deploy time by 50%.',
      'Reduced crash rate by 25% by introducing unit testing across critical flows.',
    ],
    tech: ['Swift', 'UIKit', 'HealthKit', 'HIPAA', 'Jenkins', 'Bitrise', 'Fastlane', 'AVFoundation'],
    apps: [
      {
        name: 'El Shefaa',
        tagline: 'Patient app connecting users to nearby doctors, clinics, labs, and pharmacies.',
        url: 'https://apps.apple.com/us/app/el-shefaa-%D8%A7%D9%84%D8%B4%D9%81%D8%A7%D8%A1/id1455729523',
        cta: 'View on App Store',
        screenshots: [
          '/projects/medica/shefaa-1.jpg',
          '/projects/medica/shefaa-2.jpg',
          '/projects/medica/shefaa-3.jpg',
        ],
      },
    ],
  },
];
