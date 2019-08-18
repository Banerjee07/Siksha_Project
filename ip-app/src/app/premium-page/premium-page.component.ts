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

  public fieldArray: Array<any> = [];
  public firstFieldName: any;
  newAttribute: any = {};

  firstField = true;
  isEditItems: boolean;

  addFieldValue(index) {
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

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
    localStorage.setItem('Initial IP', JSON.stringify(this.firstFieldName));
    localStorage.setItem('IP', JSON.stringify( this.fieldArray));
    console.log(localStorage);
  }
}