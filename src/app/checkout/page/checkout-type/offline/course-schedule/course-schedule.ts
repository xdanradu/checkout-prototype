import { CommonModule } from '@angular/common';
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  FormsModule, NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule, ValidationErrors, Validator,
  Validators
} from "@angular/forms";
import {ScheduleDate} from "./schedule-date/schedule-date";
import {Subscription} from "rxjs";

@Component({
  selector: 'course-schedule',
  standalone: true,
  imports: [CommonModule, ScheduleDate, ReactiveFormsModule, ScheduleDate, FormsModule],
  templateUrl: `course-schedule.html`,
  styleUrls: ['course-schedule.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CourseSchedule
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: CourseSchedule
    }
  ]
})
export class CourseSchedule implements ControlValueAccessor, Validator, OnDestroy {
  @Input()
  scheduleDates!: any;

  form = new FormGroup({
    schedule: new FormControl(null, Validators.required),
  });

  get courseScheduleFormControl(): FormControl {
    return this.form.get('schedule') as FormControl;
  }

  onTouched!:  () => {};

  onChangeSubs: Subscription[] = [];

  registerOnChange(onChange: any): void {
    const sub = this.form.valueChanges.subscribe(onChange);
    this.onChangeSubs.push(sub);
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean): void {
    if (disabled) {
      this.form.disable();
    }
    else {
      this.form.enable();
    }
  }

  writeValue(value: any): void {
    if (value) {
      this.form.setValue(value, { emitEvent: false });
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log(this.courseScheduleFormControl);
    /* manage errors here, null means ok*/
    return null;
  }

  ngOnDestroy() {
    for (let sub of this.onChangeSubs) {
      sub.unsubscribe();
    }
  }
}
