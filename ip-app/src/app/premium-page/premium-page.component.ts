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
  newAttribute: any = {};

  firstField = true;
  firstFieldName = 'Enter Ip';
  isEditItems: boolean;

  addFieldValue(index) {
    if (this.fieldArray.length <= 8) {
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