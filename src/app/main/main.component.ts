import { AfterViewInit, Component, EventEmitter, HostListener, OnDestroy, Output } from '@angular/core';

import { PortfolioAnalyticsService } from '../core/analytics/portfolio-analytics.service';

type SectionId = 'home' | 'work' | 'experience' | 'services' | 'about' | 'contact' | string;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit, OnDestroy {
  @Output() sectionChange = new EventEmitter<SectionId>();

  currentYear = new Date().getFullYear();
  showBackToTop = false;

  private observer?: IntersectionObserver;
  private sectionIds: SectionId[] = ['home', 'work', 'experience', 'services', 'about', 'contact'];
  private prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

  constructor(private readonly analytics: PortfolioAnalyticsService) {}

  ngAfterViewInit(): void {
    this.setupObserver();
    this.observeSections();
    this.syncToHashOnLoad();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  scrollToTop(): void {
    this.analytics.trackNavClick('home', 'back_to_top');
    document.getElementById('home')?.scrollIntoView({
      behavior: this.prefersReduced ? 'auto' : 'smooth',
      block: 'start'
    });
  }

  @HostListener('window:hashchange')
  onHashChange(): void {
    const fragment = (location.hash || '#home').slice(1);
    this.scrollToSection(fragment);
  }

  scrollToSection(id: SectionId): void {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }

    el.scrollIntoView({
      behavior: this.prefersReduced ? 'auto' : 'smooth',
      block: 'start'
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const y = window.scrollY || document.documentElement.scrollTop;
    this.showBackToTop = y > 500;
  }

  private setupObserver(): void {
    this.observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      const id = visible?.target?.id as SectionId | undefined;
      if (id) {
        this.sectionChange.emit(id);
        this.analytics.trackSectionView(id);
      }
    }, {
      root: null,
      rootMargin: '-18% 0px -68% 0px',
      threshold: [0.2, 0.4, 0.6, 0.8]
    });
  }

  private observeSections(): void {
    this.sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        this.observer?.observe(el);
      }
    });
  }

  private syncToHashOnLoad(): void {
    const initial = (location.hash || '#home').slice(1);
    setTimeout(() => this.scrollToSection(initial), 0);
  }
}
