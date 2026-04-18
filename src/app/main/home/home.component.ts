import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PortfolioAnalyticsService } from '../../core/analytics/portfolio-analytics.service';

type ProofMetric = {
  value: string;
  label: string;
};

type QuickLink = {
  label: string;
  href: string;
  external?: boolean;
  event: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  roleEyebrow = 'Senior Platform / Applied AI Engineer';
  email = 'phamhung.working@gmail.com';
  resumeUrl = 'assets/Resume-Hung-Pham.pdf?v=20260413';

  proofMetrics: ProofMetric[] = [
    { value: '7+ years', label: 'shipping production systems' },
    { value: '~50%', label: 'faster incident resolution' },
    { value: 'Applied AI', label: 'developer tooling with guardrails' }
  ];

  outcomes = [
    'Reduced incident resolution time by about 50% through observability, better diagnostics, and post-mortem discipline.',
    'Built AI Dev Coach to improve prompt quality and reduce bad AI habits through real-time scoring, redaction, and coaching loops.',
    'Built BeFam as a mobile-first clan operations product spanning Flutter, Firebase, billing, docs, and release workflows.'
  ];

  quickLinks: QuickLink[] = [
    {
      label: 'GitHub',
      href: 'https://github.com/phamhungptithcm',
      external: true,
      event: 'hero_github'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/hunpham/',
      external: true,
      event: 'hero_linkedin'
    },
    {
      label: 'Email',
      href: this.mailtoHref,
      event: 'hero_email'
    }
  ];

  get mailtoHref(): string {
    return `mailto:${this.email}`;
  }

  constructor(private readonly analytics: PortfolioAnalyticsService) {}

  track(actionId: string, target?: string): void {
    if (actionId === 'cta_download_resume') {
      this.analytics.trackResumeDownload('home');
      return;
    }

    this.analytics.trackCtaClick(actionId, 'home', target);
  }

  trackByLabel(_: number, item: ProofMetric): string {
    return item.label;
  }

  trackByValue(_: number, value: string): string {
    return value;
  }

  trackByHref(_: number, item: QuickLink): string {
    return item.href;
  }
}
