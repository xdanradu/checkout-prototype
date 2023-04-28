import { CommonModule } from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import { CheckoutFooter } from '../../components/footer/footer';
import { CheckoutHeader } from '../../components/header/header';
import { StepTitle } from '../../components/step-title/step-title';
import { Checkout } from '../../components/checkout/checkout';
import { Stepper } from '../../components/stepper/stepper';
import { CourseSchedule } from './course-schedule/course-schedule';
import { MockDataService } from '../../../mocks/mock-data';
import { CourseAppointments } from './course-appointments/course.appointments';
import { CheckoutPayment } from './checkout-payment/checkout-payment';
import { CheckoutOverview } from './checkout-overview/checkout-overview';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ScheduleDate} from "./course-schedule/schedule-date/schedule-date";

@Component({
  selector: 'offline-checkout',
  standalone: true,
  imports: [
    CommonModule,
    Checkout,
    CheckoutHeader,
    CheckoutFooter,
    Stepper,
    CourseSchedule,
    StepTitle,
    CourseAppointments,
    CheckoutPayment,
    CheckoutOverview,
    ScheduleDate,
    ReactiveFormsModule
  ],
  templateUrl: `offline-checkout.html`,
  styleUrls: ['offline-checkout.scss'],
})
export class OfflineCheckout {
  @Input()
  cart: any;

  @Input()
  user: any;

  @Input()
  warningFeatureToggle: any;

  @Input()
  courseSchedules: any;

  constructor(private mockDataService: MockDataService) {
  }

  numberOfSteps = 4;
  currentStep = 1;

  courseScheduleForm = new FormGroup({
    courseSchedules: new FormControl(null, Validators.required)
  });

  get schedules(): FormControl {
    return this.courseScheduleForm.controls['courseSchedules'] as FormControl;
  }

  back(): any {
    if (this.currentStep > 1) this.currentStep--;
    if (this.currentStep == 1) this.close();
  }

  next(): any {
    if (this.currentStep < this.numberOfSteps) this.currentStep++;
  }

  featureToggleOn(): any {
    /* The feature toggle needs to be refreshed at each step (next/back/refresh). The next line simulates the enabling of the feature toggle
     */
    this.mockDataService.enableFeatureToggle();
    this.next();
  }

  book(): any {
    if (this.currentStep === this.numberOfSteps)
      console.log('Book request and navigate to the previous page');
  }

  close(): any {
    console.log('Close offline checkout and navigate to the previous page');
  }
}
