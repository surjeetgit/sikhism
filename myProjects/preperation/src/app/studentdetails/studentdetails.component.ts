import { Component } from '@angular/core';
import { SurtestService } from '../surtest.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {

  public studentdetails: any = []
  
  constructor(private _surtestService: SurtestService) { }
  
  ngOnInit() {
    this.studentdetails = this._surtestService.getStudents();

  }
}