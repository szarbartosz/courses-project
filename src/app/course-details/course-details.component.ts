import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { Subscription } from 'rxjs';

import { Course } from '../course';
import { CourseService } from '../course.service'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  @Input() course$: Course;
  courseSubscription: Subscription;
  @Input() selected = 0;
  hovered = 0;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private authService: AuthService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.courseSubscription = this.courseService.getCourse(id).subscribe(crs => {
      this.course$ = crs;
    });
  }

  getCourse(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
      .subscribe(course => this.course$ = course);
  }

  goBack(): void{
    this.location.back();
  }

  showCourseType(): string {
    switch (this.course$.type) {
      case 0:
        return 'Wykład';
      case 1:
        return 'Ćwiczenia';
      case 2:
        return 'Labolatoria';
      case 3:
    }
  }

  courseRating(): number {
    let sum = 0;
    let length = this.course$.rate.length;
    this.course$.rate.forEach(element => {
      sum += element;
    });
    if (sum === 0) {return 0; }
    return Math.round((sum / length) * 10) / 10;
  }

  addRate(): void {
    this.course$.rate.push(this.hovered);
    this.courseService.updateCourse(this.course$, this.course$.id);
  }

  enroll() {
    if (this.course$.students.length === undefined || this.course$.students.length < this.course$.capacity) {
      let id = this.authService.getCurrentUser().uid;
      this.course$.students.push(id);
      this.courseService.updateCourse(this.course$, this.course$.id);
      console.log('Na kurs zapisano ' + id);
    } else {
      alert('Osiągnięto limit studentów na kursie.');
    }
  }

  disenroll() {
    let id = this.authService.getCurrentUser().uid;
    let index = this.course$.students.indexOf(id);
    if (index >= 0) {
      this.course$.students.splice(index, 1);
      this.courseService.updateCourse(this.course$, this.course$.id);
      console.log('Z kursu wypisano ' + id);
    } else {
      console.log('Wypisanie z kursu nie jest możliwe przed uprzednim zapisaniem się naniego.');
    }
  }

  ifEnrolled() {
    return this.course$.students.find( x => x === this.authService.getCurrentUser().uid);
  }

}
