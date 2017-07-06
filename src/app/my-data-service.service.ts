import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class MyDataServiceService {

  constructor(private http: Http) { }

  getTodos = function(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
    .map(
      (response) => response.json());
  }
}
