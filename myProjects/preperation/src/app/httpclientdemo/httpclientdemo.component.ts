import { Component } from '@angular/core';
import { SurtestService } from '../surtest.service';
import { IStudent } from '../student';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-httpclientdemo',
  templateUrl: './httpclientdemo.component.html',
  styleUrls: ['./httpclientdemo.component.css']
})
export class HttpclientdemoComponent {
  public students: any = [];
  public error: any;
  constructor(private _surtestservice: SurtestService) { }
  
  ngOnInit() {
    this._surtestservice.getStudents()
      .subscribe(data => this.students=data)
  }
}
