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
    { value: '8+ years', label: 'shipping production systems' },
    { value: '~50%', label: 'faster incident resolution' },
    { value: '6 repos', label: 'active product and platform portfolio' }
  ];

  outcomes = [
    'Built BeHeart and AI Dev Coach to improve AI-assisted engineering through persistent repo memory, prompt guardrails, and local-first workflows.',
    'Built gig to turn ticket-to-release verification into deterministic evidence for QA, release managers, and engineering leads.',
    'Shaped Beaus Tolling into separate backoffice and roadside platforms with bounded services, Kafka contracts, and operational documentation.'
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
