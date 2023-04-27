import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'checkout-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `header.html`,
  styleUrls: ['header.scss'],
})
export class CheckoutHeader {
  @Output() backEvent: EventEmitter<any> = new EventEmitter();
  @Output() closeEvent: EventEmitter<any> = new EventEmitter();

  back(): void {
    this.backEvent.emit();
  }

  close(): void {
    this.closeEvent.emit();
  }
}
