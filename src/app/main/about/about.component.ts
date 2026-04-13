import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  name = 'Hung Pham';
  title = 'Senior Java / Platform Engineer';
  location = 'Dallas, Texas';

  avatarUrl = 'assets/img/avatar/avatar.JPEG';
  resumeUrl = 'assets/Resume-Hung-Pham.pdf';
  linkedinUrl = 'https://www.linkedin.com/in/hunpham/';
  email = 'phamhung.working@gmail.com';
  websiteUrl = 'https://hunpeo.web.app/';

  leverageAreas = [
    'Service boundaries, API contracts, and event-driven integration.',
    'Production observability, incident response, and post-mortem follow-through.',
    'Operator-facing Angular tooling that supports real business workflows.',
    'Cross-team delivery quality through reviews, standards, and mentorship.'
  ];

  operatingPrinciples = [
    'Design for the support burden, not just the happy path.',
    'Ship observability with the feature, not after the incident.',
    'Use metrics and failure modes to guide architecture decisions.',
    'Favor systems that teams can understand and own over clever abstractions.'
  ];

  skills = [
    'Java 17+',
    'Spring Boot',
    'Microservices',
    'AWS',
    'Kubernetes',
    'Kafka',
    'Redis',
    'Elasticsearch',
    'Angular',
    'TypeScript',
    'Payments',
    'Observability'
  ];

  track(_: string): void {
    // Hook for analytics.
  }

  get personJsonLd(): string {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: this.name,
      jobTitle: this.title,
      address: this.location,
      image: this.avatarUrl,
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
