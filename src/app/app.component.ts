import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  baseConverterForm;

  hasBinaryChanged = 0;
  hasHexaChanged = 0

  ngOnInit(){
      this.form = new FormGroup({
      firstname : new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastname : new FormControl(""),
      languages : new FormControl("")
    });

    this.baseConverterForm = new FormGroup({
      decimal : new FormControl(""),
      binary : new FormControl(""),
      hexa : new FormControl("")
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

//Base Converted demo -- 
  decimalChanged = function (oldValue, newValue){
    //console.log(newValue);
    if(newValue != ""){
      this.baseConverterForm.patchValue({binary:parseInt(newValue, 10).toString(2)});
      this.baseConverterForm.patchValue({hexa:parseInt(newValue, 10).toString(16)});
    }
    else{
      this.baseConverterForm.patchValue({binary:""});
      this.baseConverterForm.patchValue({hexa:""});
    }
  }

  binaryChanged = function( oldValue, newValue){
    this.hasBinaryChanged += 1;
    if(this.hasBinaryChanged == 1){
      if(newValue != 1){
        this.baseConverterForm.patchValue({decimal:parseInt(newValue, 2).toString(10)});
      }
      else{
        this.baseConverterForm.patchValue({decimal:""});
      }
      this.hasBinaryChanged = 0;
    }
  }

  hexaChanged = function( oldValue, newValue){
    this.hasHexaChanged += 1;
    if(this.hasHexaChanged == 1){
      if(newValue != ""){
        this.baseConverterForm.patchValue({decimal:parseInt(newValue, 16).toString(10)});
      }
      else{
        this.baseConverterForm.patchValue({decimal:""});
      }
      this.hasHexaChanged = 0;
    }
  }
}
