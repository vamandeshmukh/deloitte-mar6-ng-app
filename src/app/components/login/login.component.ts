import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// client to make HTTP requests 

export class LoginComponent {

  constructor(private http: HttpClient) { }

  loginInput = {
    username: '',
    password: ''
  };

  isLoggedIn = false;

  welcomeMessage: any = '';

  submitLogin = () => {

    this.http.get('https://jsonplaceholder.typicode.com/users/')
      .subscribe((resp: any) => {
        console.log(resp);
        resp.forEach((element: any) => {
          if (element.username === this.loginInput.username) {
            this.isLoggedIn = true;
          }
          if (this.isLoggedIn) {
            console.log(this.loginInput.username);
            this.welcomeMessage = 'Logged in successfully!';
          }
          else {
            this.welcomeMessage = 'Invalid Credentials!';
          }
          this.loginInput = { username: '', password: '' }; // clear form values
        });
      });
  };
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// export class LoginComponent {

//   loginInput = {
//     username: '',
//     password: ''
//   };

//   welcomeMessage = '';

//   submitLogin = () => {
//     this.welcomeMessage = 'Hi ' + this.loginInput.username + '!';
//     this.loginInput = { username: '', password: '' }; // clear form values
//   };

// }












// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// // export class LoginComponent {

// //   constructor(private http: HttpClient) { }


// //   loginInput = {
// //     username: '',
// //     password: ''
// //   };

// //   welcomeMessage: any = '';

// //   submitLogin = () => {
// //     this.http.post('https://jsonplaceholder.typicode.com/users/', this.loginInput)
// //       .subscribe((resp: any) => {
// //         console.log(resp.username);
// //         this.welcomeMessage = 'Hi ' + resp.username + '!'; //
// //       });
// //     this.loginInput = { username: '', password: '' }; // clear form values 
// //   }

// // }
