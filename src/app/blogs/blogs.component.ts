import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
name="ankit";
disable1=false;

disable2=true;

disable3=true;


enableBox1(){
  this.disable2=false;
}

enableBox2(){
  this.disable3=false;
}

itemImageUrl = '/assets/1.jpg';

}
