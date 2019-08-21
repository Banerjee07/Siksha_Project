import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-premium-page',
  templateUrl: './premium-page.component.html',
  styleUrls: ['./premium-page.component.css']
})
export class PremiumPageComponent  {

  // constructor(private router: Router) { }

  // ngOnInit() {
  // }

  fieldArray: Array<any> = [];
  public firstFieldName: any;
  newAttribute: any = {};
  isEditItems: boolean;
  firstField = true;
  
  addFieldValue() {
    if (this.fieldArray.length <= 8) {
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
    
   
      if (/^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$/.test(this.firstFieldName)) {  
        return (true)  
      }  
      if (/^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$/.test(this.fieldArray)) {  
        return (true)  
      }
      alert("You have entered an invalid IP address!")  
      return (false)  

  }

}