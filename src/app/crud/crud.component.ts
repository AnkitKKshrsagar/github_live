import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent {
  name: any;
  email: any;
  msg: any;
  data: any = [];
  selectedObj: any;
  selectedIndex: any;
  submitButton = true;
  updateButton = false;

  sub() {
    let obj = {
      name: this.name,
      email: this.email,
      msg: this.msg,
    };
    this.data.push(obj);
    this.clear();
    console.log('submit data =', this.data);

    this.data[this.selectedIndex].email = this.email;
    this.data[this.selectedIndex].name = this.name;
    this.data[this.selectedIndex].msg = this.msg;

    console.log('this is the updated row', this.email);
    console.log('this is the updated row', this.name);
    console.log('this is the updated row', this.msg);
    this.clear();
  }

  delete(index: any) {
    this.data.splice(index, 1);
    console.log('this row is delete', index);
  }

  update() {
    this.submitButton = true;
    this.updateButton = false;
    this.data[this.selectedIndex].email = this.email;
    this.data[this.selectedIndex].name = this.name;
    this.data[this.selectedIndex].msg = this.msg;

    console.log('this is the updated row', this.email);
    console.log('this is the updated row', this.name);
    console.log('this is the updated row', this.msg);
    this.clear();
  }

  edit(index: any, editObj: any) {
    this.submitButton = false;
    this.updateButton = true;
    this.selectedIndex = index;
    this.selectedObj = editObj;

    (this.name = editObj.name),
      (this.email = editObj.email),
      (this.msg = editObj.msg),
      console.log('this is edit row', index);
  }

  clear() {
    (this.name = ''), (this.email = ''), (this.msg = '');
  }
}
