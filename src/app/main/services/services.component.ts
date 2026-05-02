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
      kicker: 'AI Engineering Infrastructure',
      title: 'AI workflows with memory, guardrails, and measurable context quality',
      description: 'I build AI products that improve engineering work through reusable repo memory, prompt quality scoring, local safety checks, and interfaces that reinforce better behavior.',
      details: [
        'Persistent codebase context and MCP workflows for AI tools that should not relearn the same repo every session.',
        'Real-time prompt scoring and linter patterns for AI chat and copilot-style developer workflows.',
        'Local redaction and privacy-minded guardrails before prompts leave the browser.',
        'Product framing that treats AI as workflow infrastructure, not just model integration.'
      ],
      tags: ['Applied AI', 'MCP', 'Prompt Quality', 'Chrome Extension', 'TypeScript', 'LLM UX']
    },
    {
      id: 'enterprise-platforms',
      kicker: 'Enterprise + Product Platforms',
      title: 'Domain-rich systems teams can release, operate, and evolve',
      description: 'I turn product ideas into systems with service boundaries, identity, billing, release governance, docs, CI/CD, and monitoring so the product can survive beyond the first demo.',
      details: [
        'Tolling backoffice and roadside platforms split by domain, latency profile, and release cadence.',
        'Flutter and Firebase foundations for mobile-first products with secure access and operational workflows.',
        'Release automation, health checks, and documentation that keep independent products maintainable.'
      ],
      tags: ['Spring Boot', 'Kafka', 'Flutter', 'Firebase', 'CI/CD', 'Monitoring']
    }
  ];

  trackById(_: number, item: Service): string {
    return item.id;
  }

  trackByValue(_: number, value: string): string {
    return value;
  }
}
