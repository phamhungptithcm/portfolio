import { Component } from '@angular/core';

type Role = {
  title: string;
  company: string;
  location?: string;
  start: Date;
  end?: Date;
  achievements: string[];
  skills: string[];
};

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  resumeUrl = 'assets/Resume-Hung-Pham.pdf';

  roles: Role[] = [
    {
      title: 'Senior Software Engineer',
      company: 'FPT Americas',
      location: 'Dallas, Texas',
      start: new Date(2022, 0, 1),
      achievements: [
        'Led backend and platform delivery across payments and tolling workstreams, balancing product needs with reliability and security constraints.',
        'Reduced checkout latency by about 35% with caching, asynchronous flows, and cleaner service orchestration.',
        'Set stronger API and release standards through reviews, CI guardrails, and production-quality expectations across teams.',
        'Built analytics and observability patterns that improved incident diagnosis and helped product teams reason about system behavior.'
      ],
      skills: ['Java', 'Spring Boot', 'Angular', 'Kafka', 'Elasticsearch', 'AWS', 'OAuth2', 'CI/CD']
    },
    {
      title: 'Senior Software Engineer',
      company: 'FPT Software',
      location: 'Vietnam',
      start: new Date(2021, 0, 1),
      end: new Date(2022, 0, 1),
      achievements: [
        'Delivered payment and platform features with a focus on maintainable service design and safer release paths.',
        'Implemented secure token flows, payment integrations, and cleaner DTO and API patterns that improved maintainability.',
        'Introduced centralized logging and diagnostic improvements that shortened defect triage and support feedback loops.'
      ],
      skills: ['Java', 'Spring', 'Payments', 'Logging', 'Testing', 'Clean Architecture']
    },
    {
      title: 'Software Engineer',
      company: 'FPT Software',
      location: 'Vietnam',
      start: new Date(2018, 0, 1),
      end: new Date(2021, 0, 1),
      achievements: [
        'Built core modules across e-commerce and internal systems including authentication, catalog, order, and notification flows.',
        'Optimized SQL and indexing on critical paths, cutting slow queries from multi-second behavior to sub-200ms on high-value pages.',
        'Developed a strong foundation in cross-functional delivery, requirement shaping, and shipping on time with fewer regressions.'
      ],
      skills: ['Java', 'Spring', 'SQL', 'Oracle', 'REST', 'Docker']
    }
  ];

  track(_: string): void {
    // Hook for analytics.
  }

  trackByCompany(_: number, role: Role): string {
    return `${role.company}-${role.title}-${role.start.toISOString()}`;
  }

  trackByValue(_: number, value: string): string {
    return value;
  }

  tenureLabel(start: Date, end?: Date): string {
    const stop = end ?? new Date();
    const months = this.diffInMonths(start, stop);
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    const yearPart = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
    const monthPart = remainingMonths > 0 ? `${remainingMonths} mo` : '';
    return [yearPart, monthPart].filter(Boolean).join(' ');
  }

  private diffInMonths(start: Date, end: Date): number {
    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();
    let total = years * 12 + months;
    if (end.getDate() < start.getDate()) {
      total -= 1;
    }
    return Math.max(0, total);
  }

  get experienceJsonLd(): string {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: this.roles.map((role, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'OrganizationRole',
          roleName: role.title,
          startDate: role.start.toISOString().split('T')[0],
          endDate: role.end ? role.end.toISOString().split('T')[0] : 'Present',
          memberOf: {
            '@type': 'Organization',
            name: role.company
          },
          description: role.achievements.join(' ')
        }
      }))
    });
  }
}
