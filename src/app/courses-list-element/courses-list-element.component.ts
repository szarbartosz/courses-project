import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../course'

@Component({
  selector: 'app-courses-list-element',
  templateUrl: './courses-list-element.component.html',
  styleUrls: ['./courses-list-element.component.css']
})
export class CoursesListElementComponent implements OnInit {

  @Input('kurs') course: Course;
  @Output() removeCourse = new EventEmitter<Course> ();

  constructor() { }

  ngOnInit() {
  }

  deleteCourse() {
    this.removeCourse.emit(this.course);
  }

  showCourseType(): string {
    switch (this.course.type) {
      case 0:
        return 'Wykład';
      case 1:
        return 'Ćwiczenia';
      case 2:
        return 'Labolatoria';
      case 3:
    }
  }

}
