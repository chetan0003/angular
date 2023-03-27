import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  currentUser:any;

  constructor() {
    this.currentUser = localStorage.getItem('currentUser');
  }

}
