import { Component } from '@angular/core';

type ProjectAction = {
  label: string;
  href: string;
  event: string;
};

type Project = {
  id: string;
  badge: string;
  title: string;
  summary: string;
  problem: string;
  role: string;
  solution: string[];
  impact: string[];
  stack: string[];
  actions: ProjectAction[];
};

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  projects: Project[] = [
    {
      id: 'tolling-platform',
      badge: 'Enterprise Platform',
      title: 'Tolling Management System',
      summary: 'Shared identity and data plane across CRM, fulfillment, and consumer tolling products.',
      problem: 'Separate operational surfaces created duplicated identity flows, fragmented back-office work, and slower change management across tolling workflows.',
      role: 'Senior engineer responsible for secure identity, service boundaries, platform design, and delivery quality across multiple tolling surfaces.',
      solution: [
        'Designed multi-service architecture with Spring Boot, centralized authentication, and reusable service boundaries.',
        'Introduced event-driven integration patterns with Kafka, Redis, and Elasticsearch for search, state propagation, and operational visibility.',
        'Aligned backend platform work with Angular product surfaces so ops teams could use the system effectively, not just technically.'
      ],
      impact: [
        'Established a cleaner platform model for tolling operations with reusable authentication and clearer ownership boundaries.',
        'Made releases easier to reason about by standardizing service contracts, delivery flows, and production diagnostics.',
        'Turned a multi-surface product into something closer to a coherent platform instead of isolated applications.'
      ],
      stack: ['Java 17+', 'Spring Boot', 'Kafka', 'Redis', 'Elasticsearch', 'Angular', 'Docker', 'Kubernetes'],
      actions: [
        { label: 'CRM Demo', href: 'https://beaus-crm-v1.web.app/', event: 'project_tolling_crm' },
        { label: 'Fulfillment Demo', href: 'https://beaus-fulfillment-v1.web.app/fulfillment', event: 'project_tolling_fulfillment' },
        { label: 'Online Demo', href: 'https://beaus-online-v1.web.app/', event: 'project_tolling_online' }
      ]
    },
    {
      id: 'ai-dev-coach',
      badge: 'Applied AI Product',
      title: 'AI Dev Coach',
      summary: 'A Chrome extension that coaches developers to use AI tools without building weak copy-paste habits.',
      problem: 'AI can accelerate learning, but junior developers often skip reasoning, debugging, and prompt discipline when the interface rewards quick answers over better habits.',
      role: 'Product owner and engineer responsible for product framing, prompt quality logic, extension UX, privacy guardrails, docs, and release automation.',
      solution: [
        'Built a role-aware prompt builder, real-time prompt quality scoring engine, and rule-based prompt linter across major AI chat surfaces.',
        'Added local sensitive-data detection and redaction so prompts can be improved without sending raw secrets or risky content upstream.',
        'Designed the product around behavior change and learning loops, not just model access, with docs and release workflows that make the project maintainable.'
      ],
      impact: [
        'Shows applied AI product thinking focused on workflow quality instead of AI novelty.',
        'Demonstrates end-to-end ownership across extension architecture, UX, validation logic, documentation, and release process.',
        'Creates a stronger public signal for developer tooling, prompt systems, and practical AI guardrails.'
      ],
      stack: ['TypeScript', 'Chrome Extension', 'Applied AI', 'Prompt Quality', 'Privacy Guardrails', 'MkDocs'],
      actions: [
        { label: 'Repository', href: 'https://github.com/phamhungptithcm/ai-dev-coach', event: 'project_ai_dev_coach_repo' }
      ]
    },
    {
      id: 'befam',
      badge: 'Mobile Product',
      title: 'BeFam: Genealogy and Clan Operations Platform',
      summary: 'A mobile-first product for genealogy, clan operations, membership access, and community workflows.',
      problem: 'Family and clan operations often live across fragmented chats, spreadsheets, paper records, and informal processes that are hard to manage securely as the community grows.',
      role: 'Product owner and engineer responsible for product direction, mobile architecture, Firebase foundations, documentation, and release operations.',
      solution: [
        'Defined a Flutter and Firebase product stack with OTP authentication, genealogy workspaces, events, funds, scholarship modules, and join-request flows.',
        'Added billing, release scripts, monitoring, and bilingual product documentation so the system can operate beyond a prototype stage.',
        'Treated the repository as a product workspace covering architecture, implementation, runbooks, and CI/CD instead of only app code.'
      ],
      impact: [
        'Shows the ability to turn a culturally specific domain into a structured product with clear system boundaries and operational workflows.',
        'Demonstrates ownership across mobile app delivery, backend rules, billing, docs, and release discipline.',
        'Strengthens the portfolio with a product-led case study that is distinct from enterprise backend consulting work.'
      ],
      stack: ['Flutter', 'Firebase', 'Firestore', 'Cloud Functions', 'Store Billing', 'CI/CD', 'MkDocs'],
      actions: [
        { label: 'Repository', href: 'https://github.com/phamhungptithcm/gia-pha', event: 'project_befam_repo' },
        { label: 'Docs', href: 'https://phamhungptithcm.github.io/gia-pha/', event: 'project_befam_docs' }
      ]
    },
    {
      id: 'gig',
      badge: 'Independent Product',
      title: 'gig: Ticket-aware Release Verification CLI',
      summary: 'A Go CLI for teams that need to verify ticket completeness before promoting code across branches or environments.',
      problem: 'In multi-repo delivery environments, ticket-related changes are easy to miss, and release readiness often lives in tribal knowledge rather than a repeatable workflow.',
      role: 'Product owner and engineer responsible for product framing, CLI design, release workflow modeling, packaging, and public documentation.',
      solution: [
        'Built a Go CLI that inspects repo history, verifies ticket completeness, and generates release packets for QA and release managers.',
        'Designed the tool around operational questions teams actually ask instead of generic Git abstractions.',
        'Published docs, installers, and release flows that make the project usable beyond the repo itself.'
      ],
      impact: [
        'Turned release coordination into a workflow engineers and delivery stakeholders can inspect and trust.',
        'Shows end-to-end ownership across problem framing, implementation, docs, packaging, and distribution.',
        'Provides stronger public proof of product thinking than a standard portfolio demo repo.'
      ],
      stack: ['Go', 'Git tooling', 'CLI UX', 'Release automation', 'Homebrew', 'Scoop'],
      actions: [
        { label: 'Repository', href: 'https://github.com/phamhungptithcm/gig', event: 'project_gig_repo' },
        { label: 'Docs', href: 'https://phamhungptithcm.github.io/gig/', event: 'project_gig_docs' }
      ]
    },
    {
      id: 'transportation-programs',
      badge: 'Production Operations',
      title: 'Transportation and Tolling Programs',
      summary: 'Architecture, diagnostics, and delivery work across OCTA, ORB, KDOT, E-470, and related transportation systems.',
      problem: 'Multiple tolling programs needed secure identity, reliable back-office workflows, and faster diagnosis when incidents affected live operations.',
      role: 'Senior engineer working across system design, performance debugging, observability improvements, and operator-facing delivery for transportation clients and internal teams.',
      solution: [
        'Improved service design, deployment automation, and production diagnostics across Java and Angular systems.',
        'Investigated connection leaks, memory issues, deadlocks, and latency hotspots using operational telemetry and runtime analysis.',
        'Partnered with product and design stakeholders to improve operator usability without losing architectural discipline.'
      ],
      impact: [
        'Reduced incident resolution time by about 50% through better instrumentation, runbooks, and post-mortem discipline.',
        'Improved production visibility and release confidence across systems with real operational consequences.',
        'Demonstrated senior-level ownership beyond a single feature team by operating across products, clients, and incident paths.'
      ],
      stack: ['Java', 'Spring', 'Angular', 'AppDynamics', 'AWS', 'Kafka', 'Redis', 'Elasticsearch'],
      actions: []
    }
  ];

  track(_: string): void {
    // Hook for analytics.
  }

  trackById(_: number, item: Project): string {
    return item.id;
  }

  trackByValue(_: number, value: string): string {
    return value;
  }

  trackByHref(_: number, action: ProjectAction): string {
    return action.href;
  }
}
