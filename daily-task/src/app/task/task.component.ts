import { Component } from '@angular/core';
import { Task } from '../classes/task'
import { MyService } from '../service';
import { Response } from '../classes/response';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  
  

  public task = {
    startDate: new Date,
    endDate: new Date,
    days: 0,
    userId: 0
  }

  currentUser:any;
  userId:any;
  endDateResult:any;
  msg:any;
  constructor(private myService:MyService) {
    this.currentUser = localStorage.getItem('currentUser');
    this.userId = localStorage.getItem('userId');
  }

  calculateEndDate() {
    console.log(this.task);
    this.task.userId = this.userId;
    if(this.task.days !== 0 ) {
    this.myService.calculateEndDate(this.task).subscribe((result) => {
    console.log(this.task);
    if((result as Response).statusCode == 200) {
          this.endDateResult = (result as Response).data
    } else {
      this.msg = (result as Response).message;
    }
  })
} else {
   this.msg = "number of days is mandaory..";
}
  }

}
