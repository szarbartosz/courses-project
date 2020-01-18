import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

import { FilterService } from '../filter.service';
import { CourseFilter } from '../search.pipe';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  name = '';
  minects = 0;
  maxects = 12;
  semester = 0;
  minrate = 0;
  maxrate = 5;
  nameCheck = false;
  semesterCheck = false;
  ectsOptions: Options = {
    floor: 0,
    ceil: 12,
    showTicks: true,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value.toString();
        case LabelType.High:
          return value.toString();
        default:
          return value.toString();
      }
    }
  };
  rateOptions: Options = {
    floor: 0,
    ceil: 5,
    step: 0.1,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value.toString();
        case LabelType.High:
          return value.toString();
        default:
          return value.toString();
      }
    }
  };
  semesterOptions: Options = {
    floor: 0,
    ceil: 10,
    showTicks: true,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Semestr: </b> ' + value;
        default:
          return value.toString();
      }
    }
  };

  constructor(private filterService: FilterService) { }

  sendFilter(filter): void {
    this.filterService.sendFilter(filter);
  }

  clearFilter(): void {
    this.name = '';
    this.minects = 0;
    this.maxects = 15;
    this.semester = 0;
    this.minrate = 0;
    this.maxrate = 5;
    this.nameCheck = false;
    this.semesterCheck = false;
    this.filterService.clearFilter();
  }

  filter() {
    if ( this.name !== '') {
      this.nameCheck = true;
    }
    if (this.semester !== 0) {
      this.semesterCheck = true;
    }
    const filter: CourseFilter = {
      name: {active: this.nameCheck, value: this.name},
      ects: { active: true, minvalue: this.minects, maxvalue: this.maxects},
      semester: {active: this.semesterCheck, value: this.semester},
      rating: { active: true, minvalue: this.minrate, maxvalue: this.maxrate}
    };
    this.sendFilter(filter);
  }

  ngOnInit() {
  }

}
