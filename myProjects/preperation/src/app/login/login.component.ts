import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submit(login: any) {
    console.log("form is submitted!!", login)
  }

  submit2(course: any) {
    console.log("course information is submitted!!", course)
  }
}
