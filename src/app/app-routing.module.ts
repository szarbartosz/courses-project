import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'
import { CoursesListComponent } from './courses-list/courses-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component'


const routes: Routes = [
  {path: '', redirectTo: '/course-list', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'course-list', component: CoursesListComponent},
  {path: 'add-course', component: AddCourseComponent},
  {path: 'course-details/:id', component: CourseDetailsComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
