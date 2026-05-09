import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  NgZone,
  OnDestroy,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input('appScrollReveal') delay: string | number = '0';
  @Input() revealOnce = true;

  @HostBinding('class.reveal-ready') ready = true;

  private observer?: IntersectionObserver;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    private readonly zone: NgZone
  ) {}

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    const delayValue = Number(this.delay) || 0;
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    this.renderer.setStyle(element, '--reveal-delay', `${delayValue}ms`);

    if (prefersReduced || !('IntersectionObserver' in window)) {
      this.reveal();
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.reveal();

              if (this.revealOnce) {
                this.observer?.unobserve(entry.target);
              }
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -12% 0px',
          threshold: 0.16
        }
      );

      this.observer.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private reveal(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'is-revealed');
  }
}
