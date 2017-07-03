import { Injectable } from '@angular/core';

@Injectable()
export class MyDataServiceService {

  constructor() { }

  getLanguageList = function(){
    return ['Java', 'C#', '.Net'];
  }

}
