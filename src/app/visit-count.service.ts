import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VisitCountService {
  private readonly countAPIUrl =
    'https://api.countapi.xyz/hit/hunpeo97.web.app/visits';

  constructor(private http: HttpClient) {}

  getVisitCount(): Observable<number> {
    return this.http
      .get<{ value: number }>(this.countAPIUrl)
      .pipe(map((res) => res.value));
  }
}
