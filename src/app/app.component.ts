import { Component, HostListener } from '@angular/core';

import { PortfolioAnalyticsService } from './core/analytics/portfolio-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fixedHeader = false;

  constructor(private readonly analytics: PortfolioAnalyticsService) {
    this.analytics.init();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const y = document.documentElement.scrollTop || document.body.scrollTop;
    this.fixedHeader = y >= 100;
  }
}
