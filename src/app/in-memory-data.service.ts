import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const COURSES = [
      {
          id: '1',
          name: "Analiza matematyczna",
          ects: 6,
          type: 1,
          semester: 1,
          capacity: 200,
          img: "http://cdn26.us1.fansshare.com/photo/computerwallpaper/engineering-wallpaper-hd-computer-science-wallpaper-552664370.jpg",
          description: "Lorem ipsum",
          rate: [],
          students: []
        },
        {
          id: '2',
          name: "Algebra",
          ects: 6,
          type: 2,
          semester: 1,
          capacity: 180,
          img: "http://cdn26.us1.fansshare.com/photo/computerwallpaper/engineering-wallpaper-hd-computer-science-wallpaper-552664370.jpg",
          description: "Lorem ipsum",
          rate: [],
          students: []
        },
        {
          id: '3',
          name: "Matematyka Dyskretna",
          ects: 6,
          type: 1,
          semester: 1,
          capacity: 180,
          img: "http://cdn26.us1.fansshare.com/photo/computerwallpaper/engineering-wallpaper-hd-computer-science-wallpaper-552664370.jpg",
          description: "Lorem ipsum",
          rate: [],
          students: []
        },
        {
          id: '4',
          name: "Fizyka",
          ects: 6,
          type: 3,
          semester: 2,
          capacity: 180,
          img: "http://cdn26.us1.fansshare.com/photo/computerwallpaper/engineering-wallpaper-hd-computer-science-wallpaper-552664370.jpg",
          description: "Lorem ipsum",
          rate: [],
          students: []
        },
        {
          id: '5',
          name: "Logika Matematyczna",
          ects: 4,
          type: 1,
          semester: 2,
          capacity: 160,
          img: "http://cdn26.us1.fansshare.com/photo/computerwallpaper/engineering-wallpaper-hd-computer-science-wallpaper-552664370.jpg",
          description: "Lorem ipsum",
          rate: [],
          students: []
        },
        {
          id: '6',
          name: "Algorytmy i struktury danych",
          ects: 6,
          type: 1,
          semester: 2,
          capacity: 140,
          img: "http://cdn26.us1.fansshare.com/photo/computerwallpaper/engineering-wallpaper-hd-computer-science-wallpaper-552664370.jpg",
          description: "Lorem ipsum",
          rate: [],
          students: []
        },
        {
          id: '7',
          name: "Programowanie imperatywne",
          ects: 4,
          type: 3,
          semester: 2,
          capacity: 200,
          img: "http://cdn26.us1.fansshare.com/photo/computerwallpaper/engineering-wallpaper-hd-computer-science-wallpaper-552664370.jpg",
          description: "Lorem ipsum",
          rate: [],
          students: []
        },
        {
          id: '8',
          name: "Programowanie funkcyjne",
          ects: 6,
          type: 3,
          semester: 3,
          capacity: 160,
          img: "http://cdn26.us1.fansshare.com/photo/computerwallpaper/engineering-wallpaper-hd-computer-science-wallpaper-552664370.jpg",
          description: "Lorem ipsum",
          rate: [],
          students: []
        },
        {
          id: '9',
          name: "Programowanie obiektowe",
          ects: 4,
          type: 3,
          semester: 3,
          capacity: 160,
          img: "http://cdn26.us1.fansshare.com/photo/computerwallpaper/engineering-wallpaper-hd-computer-science-wallpaper-552664370.jpg",
          description: "Lorem ipsum",
          rate: [],
          students: []
        },
        {
          id: '10',
          name: "Równania różniczkowe",
          ects: 4,
          type: 2,
          semester: 3,
          capacity: 180,
          img: "http://cdn26.us1.fansshare.com/photo/computerwallpaper/engineering-wallpaper-hd-computer-science-wallpaper-552664370.jpg",
          description: "Lorem ipsum",
          rate: [],
          students: []
        },
        {
          id: '11',
          name: "Rachunek prawdopodobieństwa i statystyka",
          ects: 4,
          type: 1,
          semester: 3,
          capacity: 180,
          img: "http://cdn26.us1.fansshare.com/photo/computerwallpaper/engineering-wallpaper-hd-computer-science-wallpaper-552664370.jpg",
          description: "Lorem ipsum",
          rate: [],
          students: []
        },
        {
          id: '12',
          name: "Wprowadzenie do aplikacji internetowych",
          ects: 2,
          type: 3,
          semester: 3,
          capacity: 120,
          img: "http://cdn26.us1.fansshare.com/photo/computerwallpaper/engineering-wallpaper-hd-computer-science-wallpaper-552664370.jpg",
          description: "Lorem ipsum",
          rate: [],
          students: []
        },
    ];
    return{COURSES};
  }
  constructor() { }
}
