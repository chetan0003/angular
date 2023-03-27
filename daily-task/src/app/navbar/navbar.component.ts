import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkWithHref, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  links="Navigation Bar"

  currentUser:any;

  constructor(private router:Router) {
    this.currentUser = localStorage.getItem('currentUser');
  }

  logOut(){
    console.log("clear storage");
    localStorage.clear();
    window.location.href = "/"
  }

}
