import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fixedHeader = false;

  @HostListener('window:scroll')
  onScroll(): void {
    const y = document.documentElement.scrollTop || document.body.scrollTop;
    this.fixedHeader = y >= 100;
  }
}
