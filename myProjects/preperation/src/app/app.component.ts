import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'preperation';
  name: string = "surjeet";
  textVal: string = "ttttttt";

  onClick() {
    console.log("how are you?");
  }
}
