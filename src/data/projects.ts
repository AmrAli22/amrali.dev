export interface AppLink {
  url: string;
  label: string;
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
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    slug: 'bussma',
    name: 'Bussma',
    subtitle: 'Saudi Real Estate Platform',
    role: 'Senior iOS Engineer',
    year: '2023 — Present',
    tagline:
      'Migrating a production real estate app from UIKit to SwiftUI while keeping millions of Arabic-speaking users live.',
    impact: [
      'Architected an incremental UIKit → SwiftUI migration with zero downtime, starting from the auth and auctions modules.',
      'Built a real-time auction system using SignalR with JWT-scoped user groups, MapKit, and Arabic countdown timers.',
      'Reduced post-release bugs by 30% through structured code review and added unit and UI test coverage.',
    ],
    tech: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'SignalR', 'Alamofire', 'MapKit', 'Arabic / RTL', 'Interactor-Presenter-View'],
    apps: [
      { url: 'https://apps.apple.com/eg/app/zayid-%D8%B2%D8%A7%D8%A6%D8%AF/id6480176033', label: 'Zayid · Auctions' },
      { url: 'https://apps.apple.com/eg/app/damin-%D8%B6%D8%A7%D9%85%D9%86/id6523430369', label: 'Damin · Property Docs' },
    ],
    screenshots: [
      '/projects/bussma/zayid-1.jpg',
      '/projects/bussma/zayid-2.jpg',
      '/projects/bussma/zayid-3.jpg',
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
      { url: 'https://apps.apple.com/ro/app/cec-bank-mobile-banking/id1071729654', label: 'CEC Bank · Romania' },
    ],
    screenshots: [
      '/projects/asseco/cec-1.png',
      '/projects/asseco/cec-2.png',
      '/projects/asseco/cec-3.png',
    ],
  },
  {
    slug: 'maqraa',
    name: 'Maqraa',
    subtitle: 'Quran Memorization Platform',
    role: 'iOS Developer',
    year: '2021 — 2022',
    tagline:
      'A learning app connecting Quran teachers and students across the Arab world via live audio and video circles.',
    impact: [
      'Implemented VIPER architecture from scratch, cutting feature development time by 20%.',
      'Integrated real-time audio/video calling and live notifications for group learning sessions.',
      'Built an offline-first data layer with CoreData for low-connectivity regions.',
    ],
    tech: ['Swift', 'SwiftUI', 'VIPER', 'Combine', 'SnapKit', 'CoreData', 'WebRTC', 'Arabic / RTL'],
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
      { url: 'https://apps.apple.com/us/app/el-shefaa-%D8%A7%D9%84%D8%B4%D9%81%D8%A7%D8%A1/id1455729523', label: 'El Shefaa · Patient App' },
    ],
    screenshots: [
      '/projects/medica/shefaa-1.jpg',
      '/projects/medica/shefaa-2.jpg',
      '/projects/medica/shefaa-3.jpg',
    ],
  },
];
