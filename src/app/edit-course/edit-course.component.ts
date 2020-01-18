import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { Course, Types } from '../course';
import { CourseService } from '../course.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  @Input() course: Course;
  courseSubscription: Subscription;
  courseTypes = Object.values(Types).slice(0, 3);
  @Output() removeCourse = new EventEmitter<Course> ();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.courseSubscription = this.courseService.getCourse(id).subscribe(crs => {
    this.course = crs;
    });
  }

  saveCourse() {
    this.courseService.updateCourse(this.course, this.course.id);
  }

  

}
