import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  courses = [
    'A',
    'B',
    'C'
  ];

  getCourses = function () {
    return this.courses;
  };

}
