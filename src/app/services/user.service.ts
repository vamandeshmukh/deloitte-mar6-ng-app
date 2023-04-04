import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) { }

  login = (userDetails: any) => {
    console.log(userDetails);
    return this.http.get(this.userUrl);
  };

  // register = () => { };

  // logout = () => { };

}

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor(private http: HttpClient) { }

//   loginUrl: string = 'https://jsonplaceholder.typicode.com/users/';



//   loginService = (userDetails: any) => {

//     return this.http.get(this.loginUrl);

//   };


// }
