# Graph Report - src/app  (2026-05-08)

## Corpus Check
- 13 files · ~6,497 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 106 nodes · 134 edges · 12 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]

## God Nodes (most connected - your core abstractions)
1. `PortfolioAnalyticsService` - 20 edges
2. `HeaderComponent` - 15 edges
3. `MainComponent` - 11 edges
4. `ExperienceComponent` - 8 edges
5. `HomeComponent` - 8 edges
6. `ContactComponent` - 7 edges
7. `WorkComponent` - 6 edges
8. `ScrollRevealDirective` - 5 edges
9. `AboutComponent` - 5 edges
10. `ServicesComponent` - 4 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "Community 0"
Cohesion: 0.21
Nodes (1): PortfolioAnalyticsService

### Community 1 - "Community 1"
Cohesion: 0.21
Nodes (1): HeaderComponent

### Community 2 - "Community 2"
Cohesion: 0.23
Nodes (1): MainComponent

### Community 3 - "Community 3"
Cohesion: 0.25
Nodes (1): ExperienceComponent

### Community 4 - "Community 4"
Cohesion: 0.22
Nodes (1): HomeComponent

### Community 5 - "Community 5"
Cohesion: 0.25
Nodes (1): ContactComponent

### Community 6 - "Community 6"
Cohesion: 0.29
Nodes (1): WorkComponent

### Community 7 - "Community 7"
Cohesion: 0.4
Nodes (1): ScrollRevealDirective

### Community 8 - "Community 8"
Cohesion: 0.33
Nodes (1): AboutComponent

### Community 9 - "Community 9"
Cohesion: 0.4
Nodes (1): ServicesComponent

### Community 10 - "Community 10"
Cohesion: 0.5
Nodes (1): AppComponent

### Community 11 - "Community 11"
Cohesion: 1.0
Nodes (1): AppModule

## Knowledge Gaps
- **1 isolated node(s):** `AppModule`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 0`** (21 nodes): `PortfolioAnalyticsService`, `.compact()`, `.constructor()`, `.dispatch()`, `.ensureAnalytics()`, `.extractHost()`, `.init()`, `.initializeAnalytics()`, `.isLocalHost()`, `.limit()`, `.readQueryValue()`, `.resolveTargetType()`, `.track()`, `.trackCaseStudyClick()`, `.trackContactClick()`, `.trackCtaClick()`, `.trackLandingContext()`, `.trackNavClick()`, `.trackResumeDownload()`, `.trackSectionView()`, `portfolio-analytics.service.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 1`** (16 nodes): `HeaderComponent`, `.closeMenu()`, `.constructor()`, `.fullPageScroll()`, `.lockBodyScroll()`, `.ngAfterViewInit()`, `.ngOnDestroy()`, `.onBrandClick()`, `.onDocumentClick()`, `.onEsc()`, `.onNavClick()`, `.onResumeClick()`, `.toggleMenu()`, `.trackById()`, `.unlockBodyScroll()`, `header.component.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 2`** (12 nodes): `MainComponent`, `.constructor()`, `.ngAfterViewInit()`, `.ngOnDestroy()`, `.observeSections()`, `.onHashChange()`, `.onWindowScroll()`, `.scrollToSection()`, `.scrollToTop()`, `.setupObserver()`, `.syncToHashOnLoad()`, `main.component.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 3`** (9 nodes): `ExperienceComponent`, `.constructor()`, `.diffInMonths()`, `.experienceJsonLd()`, `.tenureLabel()`, `.track()`, `.trackByCompany()`, `.trackByValue()`, `experience.component.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 4`** (9 nodes): `HomeComponent`, `.constructor()`, `.mailtoHref()`, `.track()`, `.trackByHref()`, `.trackByLabel()`, `.trackByPromise()`, `.trackByValue()`, `home.component.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 5`** (8 nodes): `ContactComponent`, `.constructor()`, `.contactJsonLd()`, `.mailtoHref()`, `.track()`, `.trackByHref()`, `.trackByValue()`, `contact.component.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 6`** (7 nodes): `work.component.ts`, `WorkComponent`, `.constructor()`, `.track()`, `.trackByHref()`, `.trackById()`, `.trackByValue()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 7`** (6 nodes): `ScrollRevealDirective`, `.constructor()`, `.ngAfterViewInit()`, `.ngOnDestroy()`, `.reveal()`, `scroll-reveal.directive.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (6 nodes): `AboutComponent`, `.constructor()`, `.personJsonLd()`, `.track()`, `.trackByValue()`, `about.component.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9`** (5 nodes): `services.component.ts`, `ServicesComponent`, `.trackById()`, `.trackBySignal()`, `.trackByValue()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (4 nodes): `AppComponent`, `.constructor()`, `.onScroll()`, `app.component.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (2 nodes): `AppModule`, `app.module.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `AppModule` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._