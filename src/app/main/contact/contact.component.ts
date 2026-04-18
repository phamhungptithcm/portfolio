import { Component } from '@angular/core';

import { PortfolioAnalyticsService } from '../../core/analytics/portfolio-analytics.service';

type ContactAction = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  event: string;
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email = 'phamhung.working@gmail.com';
  resumeUrl = 'assets/Resume-Hung-Pham.pdf?v=20260413';

  talkingPoints = [
    'Best fit: Senior or Staff platform, backend, applied AI, and developer tooling roles.',
    'Strongest domains: cloud-native services, payments, developer tools, operations tooling, and release reliability.',
    'Preferred signal in outreach: scope of ownership, team context, product stage, and technical problems to solve.'
  ];

  actions: ContactAction[] = [
    {
      label: 'Email',
      value: this.email,
      href: this.mailtoHref,
      event: 'contact_email'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/hunpham',
      href: 'https://www.linkedin.com/in/hunpham/',
      external: true,
      event: 'contact_linkedin'
    },
    {
      label: 'GitHub',
      value: 'github.com/phamhungptithcm',
      href: 'https://github.com/phamhungptithcm',
      external: true,
      event: 'contact_github'
    },
    {
      label: 'Resume',
      value: 'Download PDF',
      href: this.resumeUrl,
      event: 'contact_resume'
    }
  ];

  get mailtoHref(): string {
    return `mailto:${this.email}`;
  }

  constructor(private readonly analytics: PortfolioAnalyticsService) {}

  track(actionId: string, target?: string): void {
    if (actionId === 'contact_resume') {
      this.analytics.trackResumeDownload('contact');
      return;
    }

    this.analytics.trackContactClick(actionId, target);
  }

  get contactJsonLd(): string {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      mainEntity: {
        '@type': 'Person',
        email: this.email,
        url: 'https://hunpeo.web.app/'
      }
    });
  }

  trackByValue(_: number, value: string): string {
    return value;
  }

  trackByHref(_: number, action: ContactAction): string {
    return action.href;
  }
}
