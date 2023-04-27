import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'course-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `course-schedule.html`,
  styleUrls: ['course-schedule.scss'],
})
export class CourseSchedule {}
