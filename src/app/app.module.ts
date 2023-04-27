import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CheckoutPage} from "./checkout/page/checkout-page";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        CheckoutPage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
