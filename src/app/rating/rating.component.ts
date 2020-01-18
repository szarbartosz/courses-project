import { Component, Input, OnInit } from '@angular/core';

import { Course } from '../course';
import { CourseService } from '../course.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input('kurs') course: Course;

  currentRate: 1 | 2 | 3 | 4 | 5 = 5;

  constructor(
    private courseService: CourseService,
    config: NgbRatingConfig
  ) {
    config.max = 5;
   }

   rate() {
    this.courseService.addRating(this.currentRate, this.course.id);
  }

  ngOnInit() {
  }

}
