import { Component } from '@angular/core';

@Component({
  selector: 'app-task15',
  templateUrl: './task15.component.html',
  styleUrls: ['./task15.component.scss'],
})
export class Task15Component {
  name = '';
  candidate: any = [];
  candidateData: any = [];
  candidateData1: any = [];

  constructor() {}

  ngOnInit(): void {}

  addCandidates() {
    let obj = {
      name: this.name,
    };
    this.candidate.push(obj);
    this.clear();
  }

  clear() {
    this.name = '';
  }

  dose(i: any) {
    this.candidateData.push(this.candidate[i]);
    this.candidate.splice(i, 1);
  }

  dose1(i: any) {
    this.candidateData1.push(this.candidateData[i]);
    this.candidateData.splice(i, 1);
  }

  // dose( i: any){
  //   this.candidateData.push(this.candidate[i])
  //   this.candidate.splice(i,1)
  //   console.log('hello',this.candidate)
  // }

  // dose1(i: any){
  //   this.candidateData1.push(this.candidateData[i])
  //   this.candidateData.splice(i,1)
  //   console.log('hello',this.candidate)
  // }

  delete(i: any) {
    this.candidate.splice(i, 1);
  }

  delete1(i: any) {
    // this.candidateData.splice(i,1)
    this.candidate.push(this.candidateData[i]);
    this.candidateData.splice(i, 1);
  }
  delete2(i: any) {
    // this.candidateData1.splice(i,1)
    this.candidateData.push(this.candidateData1[i]);
    this.candidateData1.splice(i, 1);
  }
}
