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


  //this is for the item lists component
  items = ["AngularJS" , "ReactJS", "Backbone"];

  newItem = "";

  pushItem = function(){
    if(this.newItem != ""){
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }

  removeItem = function(index){
    this.items.splice(index, 1);
  }
}
