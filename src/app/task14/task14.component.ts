import { Component } from '@angular/core';

@Component({
  selector: 'app-task14',
  templateUrl: './task14.component.html',
  styleUrls: ['./task14.component.scss']
})
export class Task14Component {
email:any;
password:any;
gender:any;
data:any = [];

Category="";
  list=[{
    id:1,
    name:'Male'
  },{
    id:2,
    name:'Female'
  },{
    id:2,
    name:'Other'
  }]

submit(){
  let obj={
    email:this.email,
    password:this.password,
    gender:this.gender
  }

  this.data.push(obj);
  console.log('this is data', this.data);
  
}
}
