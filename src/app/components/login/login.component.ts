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

  submitLogin = (evt: any) => {
    this.welcomeMessage = this.loginInput.username;
  };

  welcomeMessage = '';

}
