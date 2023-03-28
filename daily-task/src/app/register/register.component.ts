import { Component } from '@angular/core';
import { User } from '../classes/user';
import { Response } from '../classes/response';
import { MyService } from '../service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  msg:string="";
  constructor(private myService : MyService){

  }

  public user = {
    id: 0,
    userName:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    token:''

  };

  

  registerUser() {
    if(this.user.userName !== '' && this.user.password !== '') {
    
      this.myService.registerUser(this.user).subscribe((result => {
        console.log((result as Response).statusCode)
        if((result as Response).statusCode == 422) {
          this.msg = (result as Response).message;
          console.log(this.msg);
        } else {
             window.location.href = "login"
         }
      }));
    } else {
      this.msg = "user name and password are mandatory to be registered..!"
    }
      
  }
}
