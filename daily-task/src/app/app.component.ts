import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'daily-task';
  currentUser:any;

  constructor() {
    this.currentUser = localStorage.getItem('currentUser');
  }
}
