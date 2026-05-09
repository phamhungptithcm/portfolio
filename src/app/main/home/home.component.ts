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

type ServicePromise = {
  label: string;
  value: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  roleEyebrow = 'Services for hiring teams';
  email = 'phamhung.working@gmail.com';
  resumeUrl = 'assets/Resume-Hung-Pham.pdf?v=20260503';

  proofMetrics: ProofMetric[] = [
    { value: '8+ years', label: 'backend, payments, and platform delivery' },
    { value: '36', label: 'engineers led through reviews and support' },
    { value: '~50%', label: 'faster production incident resolution' }
  ];

  servicePromises: ServicePromise[] = [
    {
      label: 'Payment and platform ownership',
      value: 'Checkout, refunds, reversals, chargebacks, merchant setup, provider handoffs, service boundaries, and audit-ready support flows.'
    },
    {
      label: 'Applied AI and delivery systems',
      value: 'Repo memory, prompt guardrails, release verification, observability, mentoring, and operational documentation.'
    }
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

  trackByPromise(_: number, item: ServicePromise): string {
    return item.label;
  }

  trackByHref(_: number, item: QuickLink): string {
    return item.href;
  }
}
