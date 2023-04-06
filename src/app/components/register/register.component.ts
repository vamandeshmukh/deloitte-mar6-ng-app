// Forms in angular 
// 1. template driven forms - https://angular.io/guide/forms
// 2. reactive forms - https://angular.io/guide/reactive-forms 

// 1. template driven form 
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerData: any = { username: '', password: '' };

  submitRegister = (regForm: NgForm) => {
    console.log(regForm.value);
    this.registerData = regForm.value;
    console.log(this.registerData);
  };

}

