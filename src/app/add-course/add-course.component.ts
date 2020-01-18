import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';
import {ActivatedRoute} from '@angular/router';

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
      id: uuid.v4(),
      name: '',
      ects: 0,
      type: Types.ćwiczenia,
      semester: 1,      
      capacity: null,
      img: '',
      description: '',
      rate: [],
      students: []
    };
  }

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setUp();
  }

  validate(): boolean {
    if (this.course.name === '') {return false; }
    if (this.course.capacity === null || this.course.capacity <= 0) {return false; }
    if (this.course.description === '') {return false; }
    if (this.course.img.match(/https?:[\/|.|\w|\s|-]*\.(?:jpg|gif|png|jpeg).*/g) === null) { return false; }
    return true;
  }

  addCourse() {
    if (this.validate()) {
      this.courseService.addCourse(this.course);
    }
  }

}
