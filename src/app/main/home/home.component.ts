import { ChangeDetectionStrategy, Component } from '@angular/core';

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
  roleEyebrow = 'Senior Java / Platform Engineer';
  email = 'phamhung.working@gmail.com';
  resumeUrl = 'assets/Resume-Hung-Pham.pdf';

  proofMetrics: ProofMetric[] = [
    { value: '7+ years', label: 'building cloud-native systems' },
    { value: '~50%', label: 'faster incident resolution' },
    { value: 'Java / Spring / AWS', label: 'core platform stack' }
  ];

  outcomes = [
    'Reduced incident resolution time by about 50% through observability, better diagnostics, and post-mortem discipline.',
    'Reduced checkout latency by about 35% with caching and asynchronous payment workflows.',
    'Delivered secure tolling, payments, and operator tooling across FPT Americas, Quarterhill programs, and independent product work.'
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

  track(_: string): void {
    // Hook for analytics.
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
