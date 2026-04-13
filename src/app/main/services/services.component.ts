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
      id: 'applied-ai',
      kicker: 'Applied AI Products',
      title: 'AI workflows with guardrails, feedback loops, and useful UX',
      description: 'I build AI products that improve how people work, with prompt quality scoring, local safety checks, and interfaces that reinforce better behavior instead of blind copy-paste.',
      details: [
        'Real-time prompt scoring and linter patterns for AI chat and copilot-style workflows.',
        'Local redaction and privacy-minded guardrails before prompts leave the browser.',
        'Product framing that treats AI as workflow design, not just model integration.'
      ],
      tags: ['Applied AI', 'Prompt Quality', 'Chrome Extension', 'TypeScript', 'LLM UX']
    },
    {
      id: 'product-systems',
      kicker: 'Product + Delivery Systems',
      title: 'Mobile products and release systems teams can actually operate',
      description: 'I turn product ideas into systems with identity, billing, docs, CI/CD, and monitoring so the product can survive beyond the first demo.',
      details: [
        'Flutter and Firebase foundations for mobile-first products with secure access and operational workflows.',
        'Release automation, health checks, and documentation that keep independent products maintainable.',
        'Delivery standards that make multi-repo changes safer for product, QA, and support.'
      ],
      tags: ['Flutter', 'Firebase', 'CI/CD', 'Monitoring', 'Billing']
    }
  ];

  trackById(_: number, item: Service): string {
    return item.id;
  }

  trackByValue(_: number, value: string): string {
    return value;
  }
}
