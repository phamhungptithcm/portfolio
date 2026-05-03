import { Component } from '@angular/core';

import { PortfolioAnalyticsService } from '../../core/analytics/portfolio-analytics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  name = 'Hung Pham';
  title = 'Senior Platform, Payments & Applied AI Engineer';
  location = 'Dallas, Texas';

  avatarUrl = 'assets/img/avatar/hung-pham-avatar-640.jpg';
  avatarWebpSrcset = 'assets/img/avatar/hung-pham-avatar-320.webp 320w, assets/img/avatar/hung-pham-avatar-640.webp 640w';
  avatarJpegSrcset = 'assets/img/avatar/hung-pham-avatar-320.jpg 320w, assets/img/avatar/hung-pham-avatar-640.jpg 640w';
  resumeUrl = 'assets/Resume-Hung-Pham.pdf?v=20260503';
  linkedinUrl = 'https://www.linkedin.com/in/hunpham/';
  email = 'phamhung.working@gmail.com';
  websiteUrl = 'https://hunpeo.web.app/';

  leverageAreas = [
    'Payment systems across card, bank, check, wallet, PayPal, refund, reversal, chargeback, merchant setup, and processor/bank integration flows.',
    'Service boundaries, API contracts, and event-driven integration.',
    'Applied AI workflows with repo memory, prompt quality guardrails, local privacy checks, and behavior-aware UX.',
    'Production observability, incident response, and post-mortem follow-through.',
    'Mobile and operator-facing products that turn backend complexity into usable workflows.',
    'Engineering leadership through design systems, technical support, code review, mentoring, and leading teams up to 36 engineers.'
  ];

  operatingPrinciples = [
    'Design for the support burden, not just the happy path.',
    'Treat payment as a lifecycle: authorization, settlement, refunds, reversals, chargebacks, reconciliation, and auditability.',
    'Ship observability with the feature, not after the incident.',
    'Use AI where it improves workflow quality, not just output volume.',
    'Favor systems that teams can understand and own over clever abstractions.'
  ];

  skills = [
    'Java 17+',
    'Spring Boot',
    'Microservices',
    'Applied AI',
    'MCP',
    'Payment Systems',
    'Refunds / Chargebacks',
    'Merchant Integrations',
    'AWS',
    'Kubernetes',
    'Kafka',
    'Redis',
    'Elasticsearch',
    'Angular',
    'Flutter',
    'Firebase',
    'Chrome Extensions',
    'TypeScript',
    'Design Systems',
    'Technical Leadership',
    'Observability'
  ];

  constructor(private readonly analytics: PortfolioAnalyticsService) {}

  track(actionId: string, target?: string): void {
    if (actionId === 'about_resume') {
      this.analytics.trackResumeDownload('about');
      return;
    }

    this.analytics.trackCtaClick(actionId, 'about', target);
  }

  get personJsonLd(): string {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: this.name,
      jobTitle: this.title,
      address: this.location,
      image: `${this.websiteUrl}${this.avatarUrl}`,
      email: this.email,
      url: this.websiteUrl,
      sameAs: [
        this.linkedinUrl,
        'https://github.com/phamhungptithcm'
      ]
    });
  }

  trackByValue(_: number, value: string): string {
    return value;
  }
}
