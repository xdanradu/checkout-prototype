import { CommonModule } from '@angular/common';
import {Component, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'schedule-date',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: `schedule-date.html`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ScheduleDate
    }
  ]
})
export class ScheduleDate implements ControlValueAccessor {
  @Input()
  formGroup!: any;

  @Input()
  schedule!: any;

  public value!: string;
  public changed!: ( value: string) => void;
  public touched!: () => void;
  public isDisabled!: boolean;

  writeValue(value: string): void {
    this.value = value;
  }

  public onChange( event: Event): void {
    const value: string = ( event.target as HTMLInputElement).value;
    this.changed(value);
    // this.touched();
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
