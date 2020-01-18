import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

import { Course } from '../course';
import { CourseService } from '../course.service'

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: Course;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCourse();
  }

  getCourse(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.course = this.courseService.getCourse(id);
  }

  goBack(): void{
    this.location.back();
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
