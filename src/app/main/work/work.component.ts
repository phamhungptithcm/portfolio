import { Component } from '@angular/core';

import { PortfolioAnalyticsService } from '../../core/analytics/portfolio-analytics.service';

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
      id: 'be-ai-heart',
      badge: 'AI Infrastructure',
      title: 'BeHeart: Persistent Context Layer for AI Coding',
      summary: 'A local-first CLI and MCP product that gives AI coding tools reusable project memory instead of forcing every session to relearn the repo.',
      problem: 'AI coding tools lose context between sessions, burn tokens restating the same project knowledge, and miss existing code paths when teams use them inside real repositories.',
      role: 'Product owner and engineer responsible for product strategy, architecture, CLI/MCP workflows, document-aware memory, policy direction, and benchmark framing.',
      solution: [
        'Designed a scanner, symbol extractor, project graph, context compiler, policy engine, CLI, MCP server, and benchmark workflow.',
        'Added document-aware memory so product requirements, architecture notes, and implementation intent can be retrieved alongside code.',
        'Shaped the product around cost-aware AI workflows for teams using Codex, Cursor, Claude Code, Copilot, or internal agent tools.'
      ],
      impact: [
        'Shows senior product architecture in a high-leverage applied AI problem space: reusable context, agent guardrails, and delivery consistency.',
        'Demonstrates depth across developer tooling, local-first execution, MCP integration, graph-oriented retrieval, and benchmark strategy.',
        'Positions AI work as infrastructure for engineering teams rather than a thin wrapper around model calls.'
      ],
      stack: ['Node.js', 'TypeScript', 'CLI', 'MCP', 'Project Graph', 'Policy Engine', 'Benchmarks'],
      actions: [
        { label: 'Repository', href: 'https://github.com/phamhungptithcm/be-ai-heart', event: 'project_beheart_repo' }
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
      id: 'gig',
      badge: 'Developer Tooling',
      title: 'gig: Ticket-aware Release Verification CLI',
      summary: 'A remote-first Go CLI that answers whether every change for a ticket actually made it into a release.',
      problem: 'Release day slows down when teams have to manually reconcile tickets across commits, branches, pull requests, deployments, checks, linked work, and release notes.',
      role: 'Product owner and engineer responsible for product framing, provider workflows, CLI UX, release evidence modeling, packaging, docs, and demo assets.',
      solution: [
        'Built inspect, verify, and packet workflows that return deterministic release decisions such as ready, needs review, blocked, or unknown.',
        'Designed remote-first provider support for GitHub, GitLab, Bitbucket, Azure DevOps, and SVN while preserving zero-config local checkout mode.',
        'Added release exports for QA, release managers, and compliance reviewers through XLSX, CSV, JSON, and terminal-friendly human output.'
      ],
      impact: [
        'Turns ticket reconciliation into a repeatable release-audit workflow instead of tribal knowledge.',
        'Shows end-to-end product ownership across CLI ergonomics, provider integrations, packaging, documentation, and demo strategy.',
        'Creates strong public proof for developer productivity tooling, release governance, and operationally useful automation.'
      ],
      stack: ['Go', 'CLI UX', 'GitHub', 'GitLab', 'Azure DevOps', 'XLSX', 'Release Automation'],
      actions: [
        { label: 'Repository', href: 'https://github.com/phamhungptithcm/gig', event: 'project_gig_repo' },
        { label: 'Docs', href: 'https://phamhungptithcm.github.io/gig/', event: 'project_gig_docs' }
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
      id: 'beaus-tolling',
      badge: 'Tolling Backoffice Platform',
      title: 'Beaus Tolling Backoffice',
      summary: 'A modular tolling operations monorepo for CRM, case management, fulfillment, configuration, reporting, payments, identity, and customer self-service.',
      problem: 'Tolling operators need to modernize backoffice workflows without risky monolithic replacement programs, while still integrating with roadside, payments, DMV, reporting, and agency ecosystems.',
      role: 'Platform architect and product engineer shaping the repository model, bounded contexts, service portfolio, UI portfolio, integration contracts, and strategic documentation pack.',
      solution: [
        'Split the platform into clear backoffice domains including account, vehicle, trip, case, payment, notification, DMV, batch, report, core, and SSO services.',
        'Defined Angular application surfaces for CRM, fulfillment, case management, configuration, reporting, and online customer workflows.',
        'Established OpenAPI and AsyncAPI contracts, Kafka integration patterns, PostgreSQL-per-service ownership, Redis sessions, and Kubernetes runtime direction.'
      ],
      impact: [
        'Demonstrates staff-level system thinking across commercial modularity, operational reliability, integration freedom, and enterprise governance.',
        'Turns earlier tolling demo work into a more credible product platform with architecture, operating model, roadmap, security, and release governance.',
        'Strengthens backend/platform positioning with a domain-rich enterprise system rather than isolated UI demos.'
      ],
      stack: ['Java 21', 'Spring Boot', 'Angular 17', 'Kafka', 'PostgreSQL', 'Redis', 'Kubernetes', 'OpenAPI'],
      actions: [
        { label: 'Repository', href: 'https://github.com/phamhungptithcm/beaus-tolling', event: 'project_beaus_tolling_repo' }
      ]
    },
    {
      id: 'beaus-tolling-roadside',
      badge: 'Roadside Ingestion Platform',
      title: 'Beaus Tolling Roadside',
      summary: 'A separate roadside platform for low-latency lane event ingest, field-device state, image evidence, and evidence-ready Kafka publication.',
      problem: 'Roadside capture and device operations have different latency, reliability, and release needs than backoffice case, payment, and operator workflows.',
      role: 'Platform architect and engineer responsible for service boundaries, ingest architecture, event contracts, reliability posture, and repository separation from backoffice domains.',
      solution: [
        'Defined lane-event-ingest, device-management, and image-evidence services around raw capture, telemetry, evidence lifecycle, and downstream event publication.',
        'Kept roadside independent from backoffice release cycles while connecting the systems through Kafka events, signed APIs, and shared contract governance.',
        'Designed for burst-heavy traffic, asynchronous handoff, failure-domain isolation, and sustained ingest throughput.'
      ],
      impact: [
        'Shows domain-aware architecture for edge ingestion and operational reliability in a high-throughput transportation environment.',
        'Makes the backoffice platform more credible by separating raw capture and device telemetry from operator-facing workflows.',
        'Demonstrates event-driven integration discipline without shared schemas or tightly coupled database access.'
      ],
      stack: ['Java', 'Spring Boot', 'Kafka', 'AsyncAPI', 'Kubernetes', 'Device Telemetry', 'Image Evidence'],
      actions: [
        { label: 'Repository', href: 'https://github.com/phamhungptithcm/beaus-tolling-roadside', event: 'project_beaus_roadside_repo' }
      ]
    }
  ];

  constructor(private readonly analytics: PortfolioAnalyticsService) {}

  track(actionId: string, projectId: string, target?: string): void {
    this.analytics.trackCaseStudyClick(actionId, projectId, target);
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
