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
}
