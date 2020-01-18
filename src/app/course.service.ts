import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';

import { Course } from './course';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[];
  coursesChanged = new Subject<Course[]>();
  private currentCourses: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>(null);
  private coursesUrl = 'api/COURSES';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl);
  }
  
  getCourse(id: string): Observable<Course> {
    const url = `${this.coursesUrl}/${id}`;
    return this.http.get<Course>(url);
  }

  addCourse(course: Course) {
    return this.http.post<Course>(this.coursesUrl, course, this.httpOptions)
      .subscribe( res => {
        this.getCourses().subscribe(resp => {
          this.currentCourses.next(resp);
      });
    });
  }

  deleteCourse(course: Course): Observable<{}> {
    const url = `${this.coursesUrl}/${course.id}`;
    return this.http.delete<Course>(url, this.httpOptions);
  }

  subscribeCourses(): Observable<Course[]> {
    this.getCourses().subscribe(res => {
      this.currentCourses.next(res);
    });
    return this.currentCourses.asObservable();
  }

  updateCourse(course: Course, id: string) {
    return this.http.put<Course>(`${this.coursesUrl}/${id}`, course, this.httpOptions)
      .subscribe( res => {
        this.getCourses().subscribe( resp => {
          this.currentCourses.next(resp);
        });
      });
  }

  // addRating(currentRate: 1 | 2 | 3 | 4 | 5, id: string) {
  //   const course = this.getCourse(id);
  //   course.rateSum = course.rateSum + currentRate;
  //   course.rateNo = course.rateNo + 1;
  //   course.rate = course.rateSum / course.rateNo;
  // }

  
}
