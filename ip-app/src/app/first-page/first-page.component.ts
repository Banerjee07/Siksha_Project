import { Component, OnInit, Input } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  myform: FormGroup;
  user: any;
  @Input('value') dropdownValue: any;
  // value: 'option'
  displayLogin: any = 1;
  displayPage: any = 4;

  constructor(private router: Router) {
  }
  
  ngOnInit() {
  }
  
  onSubmit() {
    this.user = {
      value: this.dropdownValue,
    };
    if (this.dropdownValue == 1) {
    this.router.navigate(['/basic']);
    this.displayPage = 3}
    else {
    this.router.navigate(['/premium']);
    this.displayPage = 3}
    this.displayLogin = 0;
    console.log(this.user);
    // if (this.myform.valid) {
    //   console.log("Form Submitted!");
    // }
  }

  // goto(){
  //   if (this.dropdownValue == 1) {
  //     this.router.navigate(['basic']);}
  //     else {
  //     this.router.navigate(['premium']);}
  // }

}
