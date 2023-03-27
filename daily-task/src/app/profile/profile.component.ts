import { Component , OnInit} from '@angular/core';
import { User } from '../classes/user';
import { MyService } from '../service';
import { Response } from '../classes/response';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  currentUser:any;
  userName:any;
  firstName:any;
  lastName:any;
  email:any;
  public user = {

    userName:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    token:''

  };
  
  response:Response= new Response();
  constructor(private myService:MyService) {
    this.currentUser = localStorage.getItem('currentUser');
  }

  ngOnInit(): void {
    this.getProfile();
  }
  getProfile() {
      this.myService.getProfile(this.currentUser).subscribe((result) => {
      this.user = (((result as Response).data) as User)
      this.userName = this.user.userName;
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.email = this.user.email;
      console.log(this.user);
      });
  }
}
