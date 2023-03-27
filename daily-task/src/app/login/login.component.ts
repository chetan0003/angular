import { Component } from '@angular/core';
import { User } from '../classes/user';
import { Response } from '../classes/response';
import { MyService } from '../service';
import { Token } from '@angular/compiler';
import { Router, RouterLink, RouterLinkWithHref, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  msg:string="";
  userId:string="";
  public user = {
    id: 0,
    userName:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    token:''

  };
  constructor(private myService : MyService,private router:Router) {
    
  }
  
  logIn() {
    console.log(this.user)

    this.myService.logIn(this.user).subscribe((result) => {
      console.log(result);
     if((result as Response).statusCode == 401) {
       this.msg = (result as Response).message;
     } else {
      localStorage.setItem("currentUser",(((result as Response).data) as User).userName);
      localStorage.setItem("token",(((result as Response).data) as User).token);
       console.log((((result as Response).data) as User).id.toString);
       console.log((result as Response));
       
        this.userId = String((((result as Response).data) as User).id)
      localStorage.setItem("userId",this.userId);
      window.location.href = "home"
      }
      
    });
  }

}
