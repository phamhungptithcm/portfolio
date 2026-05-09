# AGENTS.md

## Project

Angular portfolio for Hung Pham. The site is a recruiter-facing service portfolio, not a generic personal landing page.

Primary audience:

- Recruiters
- Hiring managers
- Engineering leaders evaluating Senior or Staff backend/platform/payments/applied AI fit

Primary story:

- Hung can own payment lifecycle engineering, platform architecture, applied AI developer tooling, release reliability, and production/team delivery systems.

## Working Rules

- Preserve the service-first section order: `home`, `services`, `work`, `experience`, `about`, `contact`.
- Keep services for employers explicit. Do not make visitors infer value only from project cards.
- Treat `work` as proof for services, not as a disconnected portfolio gallery.
- Keep copy specific to payments, platform engineering, applied AI, production ownership, and leadership.
- Use ASCII in source files unless the file already requires non-ASCII.
- Do not edit generated vendor assets under `src/assets/vendor`.
- Do not touch unrelated untracked directories or symlinks unless the user asks.

## Frontend Standards

- Use the existing Angular component structure.
- Keep reusable motion behavior in shared/global styles or shared directives.
- Respect `prefers-reduced-motion`.
- Avoid layout-shifting animation.
- Do not use decorative orbs, generic bento filler, or marketing-only hero sections.
- Use stable dimensions for cards, metrics, buttons, and repeated UI elements.
- Keep letter spacing at `0`.
- Avoid viewport-width font scaling; use breakpoints when type must change.

## Motion System

Reusable pieces:

- `src/app/shared/scroll-reveal.directive.ts`
- `src/assets/scss/_motion.scss`

Preferred patterns:

- Add `appScrollReveal="delay"` to headings, panels, cards, and repeated rows.
- Add `.motion-card` to panels and cards.
- Add `.motion-link` to prominent links.
- Add `.motion-chip` to tags.
- Add `.scan-surface` only to important feature panels.
- Add `.signal-line` to proof rows where the line reinforces hierarchy.

## Commands

Install dependencies:

```bash
npm install
```

Run local dev server:

```bash
npm start
```

Production build:

```bash
npm run build
```

Tests:

```bash
npm test
```

## Graphify

Use Graphify to understand the Angular app graph:

```bash
GRAPHIFY_NO_TIPS=1 graphify update src/app
```

Artifacts live in:

- `src/app/graphify-out/GRAPH_REPORT.md`
- `src/app/graphify-out/graph.json`
- `src/app/graphify-out/graph.html`

If the installed Graphify CLI exits with `_os` `NameError` after the update summary, check whether artifacts were still written.

## GitNexus

Before using GitNexus, list indexed repositories. In the current environment, GitNexus may index a different repo from this portfolio.

If `portfolio` is not indexed:

- Do not use GitNexus answers from another repo as evidence.
- Use `rg`, direct file reads, and Graphify output instead.
- Document the limitation in the handoff if relevant.

## CocoIndex

Use CocoIndex as tooling only, not Angular runtime code.

Good future use:

- Incrementally index portfolio copy, services, case studies, and component ownership.
- Detect stale service claims after code/content changes.
- Sync extracted portfolio facts into a small search or graph artifact.

Keep any CocoIndex implementation under `tools/` or `scripts/`, with Python dependencies isolated from the Angular app.

## Verification Checklist

Before final handoff:

- Run `npm run build`.
- Verify the section order visually or through rendered markup.
- Check desktop and mobile layout.
- Confirm reveal animations do not hide content.
- Confirm reduced-motion fallback keeps content visible.
- Confirm resume/contact/case-study links remain clickable.
