export interface ExperienceEntry {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  summary: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Bussma Real Estate',
    role: 'Senior iOS Engineer',
    start: 'Jul 2023',
    end: 'Present',
    location: 'Saudi Arabia · Remote',
    summary:
      'Leading the incremental UIKit-to-SwiftUI migration of a production real estate platform. Architected the auctions and auth modules, integrated SignalR for real-time bidding, and instituted code review and testing standards that cut post-release bugs by 30%.',
  },
  {
    company: 'Asseco South Eastern Europe',
    role: 'iOS Engineer',
    start: 'Apr 2022',
    end: 'Jul 2023',
    location: 'Europe · Remote',
    summary:
      'Hardened encryption protocols and modernized legacy Objective-C codebases for banking apps across Bosnia, Croatia, and Romania. Lifted runtime performance by 35% and improved security compliance by 40% while owning regional App Store submissions.',
  },
  {
    company: 'Uram-IT',
    role: 'iOS Developer',
    start: 'Dec 2021',
    end: 'Apr 2022',
    location: 'Remote',
    summary:
      'Built Maqraa Unizah — a Quran-memorization platform connecting teachers and students across the Arab world via live audio/video circles. Adopted VIPER from scratch (-20% feature dev time) and engineered an offline-first CoreData layer for low-connectivity regions.',
  },
  {
    company: 'Medica Healthy',
    role: 'iOS Developer',
    start: 'Aug 2020',
    end: 'Dec 2021',
    location: 'Remote',
    summary:
      'Shipped a HIPAA-compliant medical app with video consultations, payments, and live tracking. Cut load times by 40% via caching and threading work, halved deploy time with a Jenkins + Bitrise CI/CD pipeline, and reduced crashes by 25% by introducing unit tests across critical flows.',
  },
  {
    company: 'Chatomaps',
    role: 'iOS Developer',
    start: 'Feb 2020',
    end: 'Jul 2020',
    location: 'Remote',
    summary:
      'Built offline-first functionality with CoreData that lifted user retention by 30% in low-connectivity regions. Profiled the app with Xcode Instruments to drive memory and runtime optimizations.',
  },
  {
    company: 'Hamza Software House',
    role: 'iOS Developer',
    start: 'Sep 2018',
    end: 'Oct 2019',
    location: 'On-site',
    summary:
      'Established the studio\u2019s iOS division and ported five Android apps to iOS. Set the early codebase patterns around OOP and SOLID, and shipped against fixed client milestones.',
  },
];
