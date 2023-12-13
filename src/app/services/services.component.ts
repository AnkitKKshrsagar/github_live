import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
data1:any;
data2:any;
data3:any;

x=10;

book(){
  if(this.x!=0)
  this.x--;
  alert('Are you sure want to book product');
  console.log('booked product', this.x);
}

cancle(){
  if(this.x!=10)
  this.x++;
  alert('Are you sure want to Cancled product');
  console.log('cancled product', this.x);
}

}
