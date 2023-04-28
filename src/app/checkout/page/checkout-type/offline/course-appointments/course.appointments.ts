import { CommonModule } from '@angular/common';
import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'course-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `course-appointments.html`,
  styleUrls: ['course-appointments.scss'],
})
export class CourseAppointments {

  @Input()
  public parentForm!: FormGroup;
}
