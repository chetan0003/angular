import { Component } from '@angular/core';
import { User } from '../classes/user';
import { MyService } from '../service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MyService]
})



export class HomeComponent  {

  currentUser:any;
  
  user:User = new User();
  constructor(private myService:MyService) {
    this.currentUser = localStorage.getItem('currentUser');
  }

  // ngOnInit(): void {
  //   this.getProfile();
  // }
  // getProfile() {
  //     this.myService.getProfile(this.currentUser).subscribe((result) => {
  //     this.user = (result as User)
  //     console.log(this.user);
  //     this.myService.setProfile(this.user);
  //     });
  // }
  
}
