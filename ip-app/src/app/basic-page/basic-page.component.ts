import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent  {
  myform: FormGroup;
  // constructor() { }

  // ngOnInit() {
  // }

  fieldArray: Array<any> = [];
  newAttribute: any = {};
  isEditItems: boolean;
  firstField = true;
  firstFieldName = 'Enter Ip';

  addFieldValue(index) {
    if (this.fieldArray.length <= 3) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {
      
    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
  }

}
