import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, Renderer2 } from '@angular/core';

import { PortfolioAnalyticsService } from '../core/analytics/portfolio-analytics.service';

type NavLink = { id: string; label: string };

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  @Input() brandName = 'Hung Pham';

  resumeUrl = 'assets/Resume-Hung-Pham.pdf?v=20260503';
  sidebarOpen = false;
  currentSection = 'home';

  links: NavLink[] = [
    { id: 'work', label: 'Case Studies' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'What I Lead' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  private observer?: IntersectionObserver;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    private readonly analytics: PortfolioAnalyticsService
  ) {}

  ngAfterViewInit(): void {
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    this.observer = new IntersectionObserver((entries) => {
      const topEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (topEntry?.target?.id && this.currentSection !== topEntry.target.id) {
        this.currentSection = topEntry.target.id;
      }
    }, {
      root: null,
      rootMargin: prefersReduced ? '-15% 0px -70% 0px' : '-22% 0px -60% 0px',
      threshold: [0.2, 0.4, 0.6, 0.8]
    });

    ['home', ...this.links.map((link) => link.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        this.observer?.observe(el);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.unlockBodyScroll();
  }

  toggleMenu(): void {
    this.sidebarOpen = !this.sidebarOpen;
    this.sidebarOpen ? this.lockBodyScroll() : this.unlockBodyScroll();
  }

  closeMenu(): void {
    if (!this.sidebarOpen) {
      return;
    }

    this.sidebarOpen = false;
    this.unlockBodyScroll();
  }

  fullPageScroll(sectionId: string): void {
    const el = document.getElementById(sectionId);
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    if (el) {
      el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    }

    this.closeMenu();
  }

  onBrandClick(): void {
    this.analytics.trackNavClick('home', 'header_brand');
    this.fullPageScroll('home');
  }

  onNavClick(sectionId: string): void {
    this.analytics.trackNavClick(sectionId, 'header_nav');
    this.fullPageScroll(sectionId);
  }

  onResumeClick(): void {
    this.analytics.trackResumeDownload('header');
    this.closeMenu();
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.closeMenu();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as Node | null;
    if (!target || this.elementRef.nativeElement.contains(target)) {
      return;
    }

    this.closeMenu();
  }

  private lockBodyScroll(): void {
    this.renderer.addClass(document.body, 'no-scroll');
  }

  private unlockBodyScroll(): void {
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  trackById(_: number, item: NavLink): string {
    return item.id;
  }
}
