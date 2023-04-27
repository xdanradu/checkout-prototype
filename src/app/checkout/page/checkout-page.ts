import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CheckoutService } from './checkout.service';
import { AppCheckout } from './checkout-type/app/app';
import { NoVoucherCheckout } from './checkout-type/no-vouchers/no-voucher';
import { OfflineCheckout } from './checkout-type/offline/offline-checkout';
import { OnlineCheckout } from './checkout-type/online/online-checkout';

@Component({
  selector: 'checkout-page',
  standalone: true,
  imports: [
    CommonModule,
    NoVoucherCheckout,
    OfflineCheckout,
    OnlineCheckout,
    AppCheckout,
  ],
  templateUrl: 'checkout-page.html',
})
export class CheckoutPage {
  /* Should provide all data needed for starting the checkout process */
  data$ = this.checkoutService.getData();

  constructor(private checkoutService: CheckoutService) {}
}
