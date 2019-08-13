import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  myform: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
    }
  }

}
