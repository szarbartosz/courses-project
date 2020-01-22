import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { FirestoreService } from './firestore.service';

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
    private http: HttpClient,
    private fireservice: FirestoreService
  ) { }

  getCourses(): Observable<Course[]> {
    //return this.http.get<Course[]>(this.coursesUrl);
    return this.fireservice.getdata();
  }
  
  getCourse(id: string): Observable<Course> {
    // const url = `${this.coursesUrl}/${id}`;
    // return this.http.get<Course>(url);
    return this.fireservice.getOneData(id);
  }

  addCourse(course: Course) {
    // return this.http.post<Course>(this.coursesUrl, course, this.httpOptions)
    //   .subscribe( res => {
    //     this.getCourses().subscribe(resp => {
    //       this.currentCourses.next(resp);
    //   });
    // });
    return this.fireservice.createdata(course);
  }

  deleteCourse(course: Course)/*: Observable<{}>*/ {
    // const url = `${this.coursesUrl}/${course.id}`;
    // return this.http.delete<Course>(url, this.httpOptions);
    return this.fireservice.deletedata(course.id);
  }

  updateCourse(course: Course, id: string) {
    // return this.http.put<Course>(`${this.coursesUrl}/${id}`, course, this.httpOptions)
    //   .subscribe( res => {
    //     this.getCourses().subscribe( resp => {
    //       this.currentCourses.next(resp);
    //     });
    //   });
    return this.fireservice.updatedata(course);
  }  
  
  subscribeCourses(): Observable<Course[]> {
    this.getCourses().subscribe(res => {
      this.currentCourses.next(res);
    });
    return this.currentCourses.asObservable();
  }
}
