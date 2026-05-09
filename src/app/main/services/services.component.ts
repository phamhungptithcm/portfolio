import { Component } from '@angular/core';

type Service = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  promise: string;
  details: string[];
  tags: string[];
};

type ServiceSignal = {
  label: string;
  value: string;
};

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  serviceSignals: ServiceSignal[] = [
    { label: 'Best hiring fit', value: 'Senior / Staff platform, backend, payments, applied AI' },
    { label: 'Value in 30 days', value: 'Find service boundaries, reliability gaps, and release risks' },
    { label: 'Value in 90 days', value: 'Ship production improvements with docs, metrics, and team habits' }
  ];

  services: Service[] = [
    {
      id: 'payments',
      kicker: 'Payment Systems',
      title: 'Own the full payment lifecycle',
      description: 'I work on payment systems as money-movement platforms, not just buttons that collect funds. The hard parts are state, risk, providers, exceptions, support, and auditability.',
      promise: 'A hiring team can hand me ambiguous payment problems and get safer flows, clearer ownership, and better support paths.',
      details: [
        'Credit card, bank, check, Apple Pay, Google Pay, PayPal, refund, reversal, undo, and chargeback flows.',
        'Merchant setup, processor integration, bank-side behavior, provider handoffs, token flows, and failure states.',
        'Support-ready workflows for customer service, reconciliation, dispute handling, and production diagnosis.'
      ],
      tags: ['Payments', 'Credit Card', 'Bank Payments', 'Digital Wallets', 'Refunds', 'Chargebacks']
    },
    {
      id: 'platforms',
      kicker: 'Platform Engineering',
      title: 'Design backends teams can operate',
      description: 'I design Java services that can handle secure identity, real-time processing, and multi-service coordination without becoming fragile to operate.',
      promise: 'I turn backend complexity into service boundaries, API contracts, observability, and release paths that teams can maintain.',
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
      title: 'Build AI tools that improve engineering behavior',
      description: 'I build AI products that improve engineering work through reusable repo memory, prompt quality scoring, local safety checks, and interfaces that reinforce better behavior.',
      promise: 'I can help teams use AI with repo memory, privacy checks, and guardrails instead of unstructured prompt sprawl.',
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
      title: 'Turn domain complexity into product systems',
      description: 'I turn product ideas into systems with service boundaries, identity, billing, release governance, docs, CI/CD, and monitoring so the product can survive beyond the first demo.',
      promise: 'I connect product intent to practical architecture, roadmap, governance, docs, and operational readiness.',
      details: [
        'Tolling backoffice and roadside platforms split by domain, latency profile, and release cadence.',
        'Flutter and Firebase foundations for mobile-first products with secure access and operational workflows.',
        'Release automation, health checks, and documentation that keep independent products maintainable.'
      ],
      tags: ['Spring Boot', 'Kafka', 'Flutter', 'Firebase', 'CI/CD', 'Monitoring']
    },
    {
      id: 'engineering-leadership',
      kicker: 'Engineering Leadership',
      title: 'Raise delivery quality across a team',
      description: 'I create leverage through the engineering systems around the code: design systems, technical support, code review, mentoring, operating standards, and production feedback loops.',
      promise: 'I improve the human system around delivery: reviews, debugging, mentoring, production follow-through, and shared standards.',
      details: [
        'Led and mentored teams up to 36 engineers across delivery, review, support, and release responsibilities.',
        'Built shared design-system and API patterns so teams ship consistent user experiences and service contracts.',
        'Raised quality through code review, debugging support, incident follow-through, documentation, and repeatable delivery habits.'
      ],
      tags: ['Mentorship', 'Code Review', 'Design Systems', 'Technical Support', 'Standards', 'Delivery']
    }
  ];

  trackById(_: number, item: Service): string {
    return item.id;
  }

  trackByValue(_: number, value: string): string {
    return value;
  }

  trackBySignal(_: number, item: ServiceSignal): string {
    return item.label;
  }
}
