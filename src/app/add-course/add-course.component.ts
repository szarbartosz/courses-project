import { Component, OnInit } from '@angular/core';

import { Course, Types } from '../course'
import { CourseService } from '../course.service'

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course: Course;
  types = Object.values(Types).slice(0,3);

  error = false;
  correct = false;

  setUp() {
    this.course = {
      id: 0,
      name: '',
      ects: 0,
      type: Types.Ćwiczenia,
      semester: 1,      
      capacity: null,
      img: '',
      description: '',
      rate: 0,
      rateSum: 0,
      rateNo: 0
    };
  }

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.setUp();
  }

  validate(): boolean {
    if (this.course.name === '') {return false; }
    if (this.course.capacity === null) {return false; }
    if (this.course.description === '') {return false; }
    if (this.course.img.match(/https?:[\/|.|\w|\s|-]*\.(?:jpg|gif|png).*/g) === null) { return false; }
    return true;
  }

  addCourse() {
    this.error = false;
    if (this.validate()) {
      const course = {
        id: this.courseService.coursesNo,
        name: this.course.name,
        semester: this.course.semester,
        ects: this.course.ects,
        type: this.course.type,
        capacity: this.course.capacity,
        img: this.course.img,
        description: this.course.description,
        rateSum: this.course.rateSum,
        rateNo: this.course.rateNo,
        rate: this.course.rate
      };
      this.courseService.addCourse(course);
      this.correct = true;
    } else {
      this.error = true;
    }
  }

}
