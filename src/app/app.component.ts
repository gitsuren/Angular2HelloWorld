import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app written in Angular';
  obj = {
    id: 1,
    name: "Suru"
  };

  arr = ["abc", "def" , "ghi"];

  isTrue = true;
}
