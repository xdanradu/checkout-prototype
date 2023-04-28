import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  featureToggle$ = new BehaviorSubject(false);

  getCart(): Observable<any> {
    return of({
      entry: {
        product: {
          name: 'The 4 hour work week',
          courseLocationType: 'OFFLINE',
        },
      },
    });
  }

  loadUser(): Observable<any> {
    return of({ id: 1, email: 'john@wick.com', hasVouchers: true });
  }

  loadFeatureToggle(): Observable<any> {
    return this.featureToggle$.asObservable();
  }

  enableFeatureToggle(): any {
    this.featureToggle$.next(true);
  }

  getCourseSchedules(): Observable<any> {
    return of([
      {
        id: 'date-1',
        label: '11.10.2023'
      },
      {
        id: 'date-2',
        label: '22.10.2024'
      },
      {
        id: 'date-3',
        label: '23.10.2024'
      },
      {
        id: 'date-4',
        label: '24.10.2024'
      },
      {
        id: 'date-5',
        label: '25.10.2024'
      }
    ]);
  }
}
