import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

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

  public fieldArray: Array<any> = [];
  public firstFieldName: any;
  newAttribute: any = {};
  isEditItems: boolean;
  firstField = true;
  
  addFieldValue() {
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
  
  onCloseItems() {
    this.isEditItems = !this.isEditItems;
    localStorage.setItem('Initial IP', JSON.stringify(this.firstFieldName));
    localStorage.setItem('IP', JSON.stringify( this.fieldArray));
    console.log(localStorage);
    
    // ValidateIPaddress(ipaddress) {  
      if (/^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$/.test(this.firstFieldName)) {  
        return (true)  
      }  
      if (/^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$/.test( this.fieldArray)) {  
        return (true)  
      }
      alert("You have entered an invalid IP address!")  
      return (false)  
    // }
    
    // if (/^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$/.test(fieldArray)) {  
    //   return (true)  
    // }  
    // alert("You have entered an invalid IP address!")  
    // return (false)
  }

}
