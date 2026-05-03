import { Component } from '@angular/core';

import { PortfolioAnalyticsService } from '../../core/analytics/portfolio-analytics.service';

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
  resumeUrl = 'assets/Resume-Hung-Pham.pdf?v=20260503';

  constructor(private readonly analytics: PortfolioAnalyticsService) {}

  roles: Role[] = [
    {
      title: 'Senior Software Engineer',
      company: 'FPT Americas',
      location: 'Dallas, Texas',
      start: new Date(2022, 0, 1),
      achievements: [
        'Led backend and platform delivery across tolling and payment workstreams, including card, bank, check, Apple Pay, Google Pay, PayPal, refund, reversal, chargeback, merchant, processor, and bank integration flows.',
        'Led and mentored teams up to 36 engineers through design systems, technical support, code review, API standards, release guardrails, and production-quality expectations.',
        'Reduced checkout latency by about 35% with caching, asynchronous flows, and cleaner service orchestration.',
        'Reduced incident resolution time by about 50% using AppDynamics, heap and thread analysis, stronger diagnostics, and post-mortem follow-through.',
        'Built analytics and observability patterns that improved incident diagnosis and helped product teams reason about system behavior.'
      ],
      skills: ['Java', 'Spring Boot', 'Payments', 'Chargebacks', 'Angular', 'Kafka', 'AWS', 'Mentorship', 'CI/CD']
    },
    {
      title: 'Senior Software Engineer',
      company: 'FPT Software',
      location: 'Vietnam',
      start: new Date(2021, 0, 1),
      end: new Date(2022, 0, 1),
      achievements: [
        'Delivered payment and platform features with maintainable service design, secure token flows, provider integrations, refund/reversal handling, and safer release paths.',
        'Improved DTO, API, and integration patterns so payment behavior was easier to test, support, and reason about across teams.',
        'Introduced centralized logging, diagnostic improvements, mentoring, and review standards that shortened defect triage and support feedback loops.'
      ],
      skills: ['Java', 'Spring', 'Payments', 'Provider Integrations', 'Logging', 'Testing', 'Code Review']
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

  track(actionId: string): void {
    if (actionId === 'resume_download') {
      this.analytics.trackResumeDownload('experience');
    }
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
