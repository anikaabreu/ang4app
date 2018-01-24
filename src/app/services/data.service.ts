import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'


@Injectable()
export class DataService {

//the lowercase can be anything, it's just the name that will be used in the function to do the get/post request, conditionally http but can be whatever, is h to illustrate it can be whatever

  constructor(public h:Http) {
    console.log('data service connected')
  }

getPosts(){
 return this.h.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json())
} //returns an observable

}
