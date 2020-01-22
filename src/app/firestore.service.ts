import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getdata(): Observable<any> {
    return this.firestore.collection('/courses').valueChanges();
  }

  getOneData(id: string): Observable<any> {
    return this.firestore.doc('/courses/' + id).valueChanges();
  }

  createdata(course: Course) {
    return this.firestore.collection('/courses').doc('/' + course.id).set(course);
  }

  updatedata(course: Course) {
    this.firestore.doc('/courses/' + course.id).update(course);
  }

  deletedata(id: string) {
    this.firestore.doc('/courses/' + id).delete();
  }
}
