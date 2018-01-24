import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 name:string;
 age: number;
 email: string;
 address: Address; //can use interfaces to map out multiple variables in objects
 hobbies: string[]; //array of strings, can use number or any to put whatever you want in array,i.e. any[];
 hello: any;
posts: Post[];

isEdit= false;

  constructor(private dataService:DataService) {
  console.log('CONSTRUCTOR RAN')

}

  ngOnInit() {
    this.name = 'Jane Doe';
    this.email = 't@t.com'
    this.age = 40;
    this.address = {
      street: '50 main st',
      city: 'boston',
      state: 'MA'
    }
    this.hobbies = ['write code', 'watch movies', 'listen to music'];
    this.hello = 'cool girl';

    this.dataService.getPosts().subscribe((posts)=> {
      this.posts = posts;
    })
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

onClick(){
  this.name= 'Sausage';

};

addHobby(hobby){
  console.log(hobby);
  this.hobbies.unshift(hobby);
  return false;
}

deleteHobby(hobby){
  for(let i=0;i <this.hobbies.length;i++){
    if(this.hobbies[i] == hobby { //match to see if the hobby being passed in is the current iteration, so if this.hobbies[i] is equal to the hobby coming in, then you want to splice it out which takes something out of an array, it'll take i as the index and we want it to be 1 from the index
      this.hobbies.splice(i, 1);
    })
  }



}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Posts {
  id: number,
  title: string,
  body: string,
  userId: number
}

}
