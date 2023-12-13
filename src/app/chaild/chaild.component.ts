import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-chaild',
  templateUrl: './chaild.component.html',
  styleUrls: ['./chaild.component.scss']
})
export class ChaildComponent {
  // @Input() iteam=0;

  // value(){
  //   this.iteam = Math.floor(Math.random()*200);
  // }  

  @Output() updateDataEvent= new EventEmitter<string>();
}
