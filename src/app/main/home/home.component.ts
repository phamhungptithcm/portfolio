import { Component, OnInit } from '@angular/core';
import { VisitCountService } from '../../visit-count.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  visitCount: number | null = null;

  constructor(private visitCountService: VisitCountService) {}

  ngOnInit(): void {
    this.visitCountService.getVisitCount().subscribe({
      next: (count) => (this.visitCount = count),
      error: (err) => console.error('Error fetching visit count', err),
    });
  }
}
