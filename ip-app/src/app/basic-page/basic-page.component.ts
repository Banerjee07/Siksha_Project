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
  public firstFieldName: any;
  newAttribute: any = {};
  isEditItems: boolean;
  firstField = true;

  addFieldValue(index) {
    if (this.fieldArray.length <= 3) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {
      this.newAttribute = null;
    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
    localStorage.setItem('Initial IP', JSON.stringify(this.firstFieldName));
    localStorage.setItem('IP', JSON.stringify( this.fieldArray));
    console.log(localStorage);
  }

}
