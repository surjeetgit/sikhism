import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurtestService {

constructor() { }

  getStudents() {
    return [
      { name: "Jai", age: 17, class: 12 },
      { name: "Harish", age: 15, class: 10 },
      { name: "Raj", age: 14, class: 9 },
      { name: "Naresh", age: 16, class: 11 },
      { name: "Jimmy", age: 17, class: 12 }
    ]
  }
}
