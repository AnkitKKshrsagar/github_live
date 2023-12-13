import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
name = "ankit"; //dynamic binding or One way binding
x=10;

book(){
  if(this.x!=0)
  this.x--;
  alert('Are you sure want to book ticket');
  console.log('booked ticket', this.x);
}

cancle(){
  if(this.x!=10)
  this.x++;
  alert('Are you sure want to Cancled ticket');
  console.log('cancled ticket', this.x);
}

}
