import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'checkout-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `footer.html`,
  styleUrls: ['footer.scss'],
})
export class CheckoutFooter {}
