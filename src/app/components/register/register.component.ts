// Forms in angular 
// 1. template driven forms 
// 2. reactive forms 

import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerData: any = { username: '', password: '' };

  constructor(private userService: UserService) { }

  submitRegister = () => {
    this.userService.register(this.registerData)
      .subscribe((resp: any) => {
        console.log(resp);
      }
      );
  };

}

