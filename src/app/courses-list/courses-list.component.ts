import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Course } from '../course';
import { CourseService } from '../course.service';
import { FilterService } from '../filter.service';
import { CourseFilter } from '../search.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  
  courses: Course[];
  filterFlag: Boolean = false;
  courseSubscription: Subscription;
  filterSubscription: Subscription;
  courseFilter: CourseFilter = null;

  // getCourses(): void{
  //   this.courseService.getCourses()
  //     .subscribe(courses => this.courses = courses);
  // }

  removeCourse(course: Course): void {
    this.courses = this.courses.filter(c => c !== course);
    this.courseService.deleteCourse(course)/*.subscribe()*/;
  }

  negateFilterFlag(){
    this.filterFlag = !this.filterFlag;
  }

  constructor(
    private courseService: CourseService,
    private filterService: FilterService
  ) {
    this.filterSubscription = this.filterService.getFilter().subscribe(filter => {
      if (filter) {
        this.courseFilter = filter;
      } else {
        this.courseFilter = null;
      }
    });
   }

  ngOnInit() {
    this.courseSubscription = this.courseService.subscribeCourses().subscribe(crs => {
      if(crs) {
        this.courses = crs;
      } else {
        this.courses = null;
      }
      });
  }

}
