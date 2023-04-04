import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginInput = {
    username: '',
    password: ''
  };

  welcomeMessage = '';

  submitLogin = (evt: any) => {
    this.welcomeMessage = 'Hi ' + this.loginInput.username + '!'; //
    this.loginInput = { username: '', password: '' }; // clear form values 
  }

}
