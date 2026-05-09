# Portfolio Design

## Positioning

This portfolio is designed for recruiters and hiring managers evaluating Hung Pham for Senior or Staff roles in platform engineering, payment systems, backend architecture, developer tooling, and applied AI.

The first impression should answer one question quickly: what can Hung own for a team?

Primary service promise:

- Own payment lifecycle engineering beyond checkout: cards, bank payments, checks, wallets, PayPal, refunds, reversals, chargebacks, merchant setup, processor handoffs, support flows, and auditability.
- Design cloud-native backend platforms that teams can operate: Spring Boot services, clear boundaries, Kafka integration, Redis/search flows, observability, and release paths.
- Build applied AI engineering tools with memory, guardrails, privacy checks, prompt quality, and measurable workflow value.
- Raise delivery quality through code review, mentoring, technical support, design systems, incident follow-through, and operational documentation.

## Information Architecture

Section order is service-first:

1. `Home`: recruiter-facing pitch, proof metrics, and the services Hung can own.
2. `Services`: the clearest articulation of value for employers.
3. `Proof`: case studies showing the services in real project contexts.
4. `Experience`: employment history and delivery credibility.
5. `About`: working style, leverage areas, operating principles, and skills.
6. `Contact`: outreach path centered on the problem the hiring team needs owned.

This order keeps the hiring value above the fold and turns projects into evidence rather than making visitors infer the value themselves.

## Visual System

The visual direction is a dark developer-tool interface inspired by Linear and Raycast, adapted for a personal portfolio:

- Near-black page canvas with controlled contrast.
- Gold for trust and payment domain signal.
- Cyan and green accents for platform, AI, and production health.
- Compact panels with 18-28px radius, light borders, and restrained elevation.
- Dense but readable service cards rather than decorative landing-page blocks.
- Case studies use structured detail rows: problem, role, solution, impact.

Avoid warm beige-heavy layouts, purple-heavy gradients, marketing hero cards, decorative orbs, and generic icon grids.

## Motion System

Motion should make ownership and hierarchy feel intentional, not distracting.

Implemented primitives:

- `ScrollRevealDirective`: uses `IntersectionObserver` to reveal sections and cards when they enter the viewport.
- `.motion-card`: lift, border, shadow, and scanning highlight on hover.
- `.motion-link`: link-level scan and lift treatment.
- `.motion-chip`: subtle hover feedback for skill/service tags.
- `.scan-surface`: slow signal sweep for high-value panels.
- `.signal-line`: animated underline for structured proof rows.
- `.magnetic-cta`: stronger hover movement for primary resume CTAs.

Accessibility rules:

- Respect `prefers-reduced-motion`.
- Keep text visible and stable after reveal.
- Do not animate layout dimensions in a way that causes content shift.
- Do not rely on motion to communicate required information.

## Component Responsibilities

- `HeaderComponent`: sticky navigation, section awareness, resume CTA, mobile menu.
- `MainComponent`: section ordering, section analytics, back-to-top control, footer.
- `HomeComponent`: service-first hero pitch, proof metrics, employer service promises.
- `ServicesComponent`: main recruiter value proposition and service inventory.
- `WorkComponent`: evidence for each service through case studies and employer signals.
- `ExperienceComponent`: career credibility and production/team leadership history.
- `AboutComponent`: work style, leverage areas, principles, skills, and identity.
- `ContactComponent`: directs outreach around ownership scope and hiring context.

## Tooling Notes

### GitNexus

GitNexus is available in this Codex environment, but the current index lists `BeFree`, not this `portfolio` repository. Start with `gitnexus.list_repos` before relying on graph answers. If `portfolio` is not indexed, do not analyze the wrong repository; use local `rg`, Graphify, and direct code inspection.

### Graphify

Graphify was run against `src/app` to map the Angular codebase.

Generated artifacts:

- `src/app/graphify-out/GRAPH_REPORT.md`
- `src/app/graphify-out/graph.json`
- `src/app/graphify-out/graph.html`

Current graph summary:

- 13 source files
- 106 nodes
- 134 extracted edges
- Core hubs: `PortfolioAnalyticsService`, `HeaderComponent`, `MainComponent`, `ExperienceComponent`, `HomeComponent`, `ContactComponent`, `WorkComponent`, `ScrollRevealDirective`, `AboutComponent`, `ServicesComponent`

Preferred update command:

```bash
GRAPHIFY_NO_TIPS=1 graphify update src/app
```

The installed Graphify CLI currently writes artifacts successfully but can exit with a `_os` `NameError` after printing the update summary. Verify the generated files rather than assuming no output was written.

### CocoIndex

CocoIndex is the right future fit for incremental portfolio intelligence:

- Source state: `src/app/**/*.ts`, `src/app/**/*.html`, `src/app/**/*.scss`, `README.md`, `DESIGN.md`, `AGENTS.md`.
- Transform: extract section copy, services, case-study evidence, skills, CTAs, and component ownership.
- Target state: a small search/index output for recruiter-facing claims, stale content detection, and portfolio graph updates.
- Incremental value: only changed files need reprocessing when content or components change.

Do not add CocoIndex as an Angular runtime dependency. If implemented, keep it as a Python tooling script under `tools/` or `scripts/` with explicit setup instructions.

## Verification

Before handing off frontend changes:

```bash
npm run build
```

For visual work, run the dev server and check:

- Desktop first viewport.
- Mobile viewport.
- Services appears before case studies.
- Reveal animations trigger while scrolling.
- `prefers-reduced-motion` does not hide content.
- Resume, email, GitHub, LinkedIn, and case-study links remain clickable.
