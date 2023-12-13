import { Component } from '@angular/core';

@Component({
  selector: 'app-task15-arrayofobj',
  templateUrl: './task15-arrayofobj.component.html',
  styleUrls: ['./task15-arrayofobj.component.scss']
})
export class Task15ArrayofobjComponent {
name = "";

candidateList =[
  { id:0 , name: 'Rani Mohadikar'},
  { id:1 , name: 'preeti Mandalkar'},
  { id:2 , name: 'trisha pounikar'},
  { id:3 , name: 'sneha Mondekar'},
  { id:4 , name: 'disha khunbhare'},
  { id:5 , name: 'sneha nandanwar'},
  { id:6 , name: 'trishali baitule'},
  { id:7 , name: 'Usha dhopodkar'},
  { id:8 , name: 'sureh Mohadikar'},
  { id:9 , name: 'chandani Mohadikar'},
  { id:10 , name: 'Ankit kshirsagar'},
]
candidateData:any =[];

candidateDose2:any =[];

candidateDose:any =[];
  constructor() { }

  ngOnInit(): void {
  }

  Dose1(i: any){
  this.candidateDose2.push(this.candidateData[i])
  this.candidateData.splice(i,1)
  console.log('dose1 completed!!:', this.candidateDose2)
  }

  Dose2(i: any) {
    this.candidateDose.push(this.candidateDose2[i])
    this.candidateDose2.splice(i,1)
    console.log('dose1 completed!!:', this.candidateDose2)
  }

  submit(){
    let obj={
      name : this.name
    }
    this.candidateData.push(obj)
    this.clear();
    console.log('name:', this.candidateData)
  }

  clear(){
 this.name ='';
}

}
