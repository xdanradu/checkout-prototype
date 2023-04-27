import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'course-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `course-appointments.html`,
  styleUrls: ['course-appointments.scss'],
})
export class CourseAppointments {}
