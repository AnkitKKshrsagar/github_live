import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
data:any;

AddStyle(){
  return{
    'font-size.px':30, 
    'font-style':'italic', 
    'color':'blue'
  }
}

AddClass(){
  return{
    'btn-bold':true, 
    'btn-lg':true, 
    'btn-primary' :false
  }
}
}
