import { Component } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent {
  // data=10;

  data="x";
updateData(iteam:string)
{
  console.warn(iteam)
  this.data=iteam;
}



 
}
