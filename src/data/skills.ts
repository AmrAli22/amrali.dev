export interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: 'Languages',
    icon: 'lucide:code-2',
    items: ['Swift', 'Objective-C'],
  },
  {
    title: 'UI Frameworks',
    icon: 'lucide:layout-grid',
    items: ['SwiftUI', 'UIKit', 'Combine', 'SnapKit'],
  },
  {
    title: 'Architecture',
    icon: 'lucide:git-branch',
    items: ['MVVM', 'VIPER', 'Interactor-Presenter-View', 'Clean Architecture'],
  },
  {
    title: 'Real-time & Networking',
    icon: 'lucide:radio',
    items: ['SignalR', 'Alamofire', 'URLSession', 'REST', 'WebRTC', 'Push Notifications'],
  },
  {
    title: 'Data & Storage',
    icon: 'lucide:database',
    items: ['CoreData', 'Firebase', 'Keychain'],
  },
  {
    title: 'Apple Frameworks',
    icon: 'lucide:apple',
    items: ['MapKit', 'AVFoundation', 'HealthKit', 'Core Animation'],
  },
  {
    title: 'Testing',
    icon: 'lucide:shield-check',
    items: ['XCTest', 'Unit Testing', 'UI Testing', 'TDD'],
  },
  {
    title: 'DevOps & Tooling',
    icon: 'lucide:wrench',
    items: ['Xcode', 'Git', 'Fastlane', 'Jenkins', 'Bitrise', 'GitHub Actions'],
  },
  {
    title: 'Specialty',
    icon: 'lucide:globe',
    items: [
      'Arabic & RTL localization',
      'Banking security',
      'HIPAA compliance',
      'App Store deployment',
    ],
  },
];
