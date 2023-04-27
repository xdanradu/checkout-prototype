import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'stepper',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: `stepper.html`,
  styleUrls: ['stepper.scss'],
})
export class Stepper {
  @Input()
  numberOfSteps;

  @Input()
  currentStep;
}
