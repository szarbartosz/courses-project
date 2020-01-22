import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../course'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-courses-list-element',
  templateUrl: './courses-list-element.component.html',
  styleUrls: ['./courses-list-element.component.css']
})
export class CoursesListElementComponent implements OnInit {

  @Input('kurs') course: Course;
  @Output() removeCourse = new EventEmitter<Course> ();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  deleteCourse() {
    this.removeCourse.emit(this.course);
  }

  // showCourseType(): string {
  //   switch (this.course.type) {
  //     case 0:
  //       return 'Wykład';
  //     case 1:
  //       return 'Ćwiczenia';
  //     case 2:
  //       return 'Labolatoria';
  //     case 3:
  //   }
  // }

  courseRating(): number {
    let sum = 0;
    let counter = 0;
    if (this.course.rate.length > 0) {
      this.course.rate.forEach(e => {
        counter++;
        sum += e;
      });
      return Math.round((sum / counter) * 10) / 10;
    } else {
      return 0;
    }
  }


}
