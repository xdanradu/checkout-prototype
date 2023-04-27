import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { MockDataService } from '../mocks/mock-data';
@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  cart$ = this.mockDataService
    .getCart()
    .pipe(map((cart) => this.getCheckoutCart(cart)));
  user$ = this.mockDataService.loadUser();
  featureToggle$ = this.mockDataService.loadFeatureToggle();

  constructor(private mockDataService: MockDataService) {}

  getCheckoutCart(cart: any): any {
    const isOffline = cart.entry.product.courseLocationType === 'OFFLINE';
    const isOnline = cart.entry.product.courseLocationType === 'ONLINE';
    const isApp = cart.entry.product.courseLocationType === 'APP';
    return { ...cart, isOffline, isOnline, isApp };
  }

  getData(): Observable<any> {
    return combineLatest([this.cart$, this.user$, this.featureToggle$]).pipe(
      map(([$cart, $user, $featureToggle]) => ({
        cart: $cart,
        user: $user,
        warningFeatureToggle: $featureToggle,
      }))
    );
  }
}
