import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { Course } from './course';
import { MockCourses } from './mock-courses'


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  coursesNo = 13;
  courses: Course[];
  private currentCourses: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>(null);

  getCourses(): Observable<Course[]> {
    return of(MockCourses.COURSES);
  }

  getCourse(id: string): Course {
    return MockCourses.COURSES.find(course => course.id === id);
  }

  addCourse(course: Course) {
    MockCourses.COURSES.push(course);
    this.coursesNo++;
  }

  deleteCourse(course: Course){
    MockCourses.COURSES.splice(MockCourses.COURSES.indexOf(course),1);
  }

  subscribeCourses(): Observable<Course[]> {
    this.getCourses().subscribe(res => {
      this.currentCourses.next(res);
    });
    return this.currentCourses.asObservable();
  }

  addRating(currentRate: 1 | 2 | 3 | 4 | 5, id: string) {
    const course = this.getCourse(id);
    course.rateSum = course.rateSum + currentRate;
    course.rateNo = course.rateNo + 1;
    course.rate = course.rateSum / course.rateNo;
  }

  constructor() { }
}
