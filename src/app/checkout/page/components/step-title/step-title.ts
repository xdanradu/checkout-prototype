import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'step-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `step-title.html`,
  styleUrls: ['step-title.scss'],
})
export class StepTitle {}
