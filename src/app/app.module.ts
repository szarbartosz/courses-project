import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesListElementComponent } from './courses-list-element/courses-list-element.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FilterComponent } from './filter/filter.component';
import { SearchPipe } from './search.pipe';
import { Ng5SliderModule } from 'ng5-slider';
import { RatingComponent } from './rating/rating.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

const firebaseConfig = {
  apiKey: "AIzaSyDxnejX1tdsjc4tSlFe9oLJVJv6xI2c0Uo",
  authDomain: "kursywieit.firebaseapp.com",
  databaseURL: "https://kursywieit.firebaseio.com",
  projectId: "kursywieit",
  storageBucket: "kursywieit.appspot.com",
  messagingSenderId: "965350392569",
  appId: "1:965350392569:web:174f30a8c4adc965fa1828"
}



@NgModule({
  declarations: [
    AppComponent,
    CoursesListElementComponent,
    CoursesListComponent,
    NavbarComponent,
    AddCourseComponent,
    DashboardComponent,
    CourseDetailsComponent,
    FilterComponent,
    SearchPipe,
    RatingComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng5SliderModule,
    NgbRatingModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,// do obsługi autentykacji
    AngularFirestoreModule,        //  do obslugibaz danych
    AngularFireDatabaseModule//  do obslugibaz danych
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
