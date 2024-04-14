import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

import { throttleTime} from 'rxjs/operators';
import { ScrollSpyService } from 'ng-spy';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  public fixedHeader: boolean = false;
  private windowScroll$: Subscription = Subscription.EMPTY;
  constructor(private spyService: ScrollSpyService){}
  
  ngOnInit() {
    this.windowScroll$ = fromEvent(window, 'scroll')
      .pipe(throttleTime(30))
      .subscribe(() => this.onScroll());
  }

  ngAfterViewInit() {
    this.spyService.spy({ thresholdBottom: 50 });
  }

  ngOnDestroy() {
    this.windowScroll$.unsubscribe();
  }
  
  onScroll(){
    //code to fix header on scroll
    if (document.documentElement.scrollTop >= 100 || document.body.scrollTop >= 100) {
      this.fixedHeader = true;
    } else {
      this.fixedHeader = false;
    }
  }
}
