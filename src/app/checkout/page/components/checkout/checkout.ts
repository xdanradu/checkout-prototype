import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `checkout.html`,
  styleUrls: ['checkout.scss'],
})
export class Checkout {}
