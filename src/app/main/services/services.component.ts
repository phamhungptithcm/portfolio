import { Component } from '@angular/core';

type Service = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  details: string[];
  tags: string[];
};

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 'platforms',
      kicker: 'Platform Engineering',
      title: 'Cloud-native backends for complex operational workflows',
      description: 'I design Java services that can handle secure identity, real-time processing, and multi-service coordination without becoming fragile to operate.',
      details: [
        'Spring Boot services with clear boundaries, SLAs, and failure handling.',
        'Event-driven integration with Kafka, Redis, and search-oriented data flows.',
        'Architecture decisions grounded in support burden, not just implementation speed.'
      ],
      tags: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'Elasticsearch']
    },
    {
      id: 'tooling',
      kicker: 'Frontend + Operations',
      title: 'Operator-facing products that make backend complexity usable',
      description: 'I build Angular surfaces for support, operations, and internal teams where correctness, accessibility, and clarity matter more than visual novelty.',
      details: [
        'Angular workflows that expose the right system state to the people running the business.',
        'Payment and tolling experiences designed around trust, validation, and operational edge cases.',
        'UI decisions made with platform constraints and support outcomes in mind.'
      ],
      tags: ['Angular', 'TypeScript', 'Accessibility', 'Payments']
    },
    {
      id: 'delivery',
      kicker: 'Reliability + Delivery',
      title: 'Observability and release standards that teams can trust',
      description: 'I improve production readiness through dashboards, diagnostics, CI guardrails, and practical standards that reduce release friction and incident cost.',
      details: [
        'Observability patterns, incident diagnostics, and post-mortem follow-through.',
        'Release automation and quality gates that make multi-repo delivery safer.',
        'Mentorship and review standards that raise the engineering bar across teams.'
      ],
      tags: ['AWS', 'Kubernetes', 'CI/CD', 'Observability', 'Mentorship']
    }
  ];

  trackById(_: number, item: Service): string {
    return item.id;
  }

  trackByValue(_: number, value: string): string {
    return value;
  }
}
