import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  today = new Date(2017, 6, 30);

  form;

  ngOnInit(){
      this.form = new FormGroup({
      firstname : new FormControl("Suru"),
      lastname : new FormControl(""),
      languages : new FormControl("")
    });
  }


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
//Template drive form
  onSubmit = function(userdata){
    console.log(userdata);
  }


}
