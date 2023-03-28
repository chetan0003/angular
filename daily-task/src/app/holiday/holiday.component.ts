import { Component ,OnInit} from '@angular/core';
import { User } from '../classes/user';
import { Holiday } from '../classes/holiday'
import { Response } from '../classes/response';
import { MyService } from '../service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {

  currentUser:any;
  userId:any;
  counter:number = 0;
  updaeBtnFlag:number = 0;
  msg:any;
  ngOnInit(): void {
    this.getAllHolidays();
  }
  
  public holiday = {
    id: 0,
    name:'',
    date: new Date,
    userId: 0
  };
  holidayArray=new Array<Holiday>();
  constructor(private myService:MyService,private router:Router) {
    this.currentUser = localStorage.getItem('currentUser');
    this.userId = localStorage.getItem('userId');
  }

  addHoliday() {
   
    this.holiday.userId = this.userId;
    console.log(this.holiday.name);
    
    if(this.holiday.name !== '' ) {
      this.myService.addHoliday(this.holiday).subscribe((result => {
        if((result as Response).statusCode == 201) {
          
          this.getAllHolidays();
        }
      }))
    } else {
      this.msg = "holiday name field mandatory";
      console.log(this.msg)
    }
    
  }

  getAllHolidays(){
    
      this.myService.geAllHoliday(Number(this.userId)).subscribe((result => {
      this.holidayArray = ((result as Response).data) as Array<Holiday>; 
      console.log(this.holidayArray);
      
    }));
  }

  editHoliday(holiday:Holiday) {
    this.holiday.id = holiday.id;
    this.holiday.name = holiday.name;
    this.holiday.date = holiday.date;
    holiday.userId = this.userId;
    this.updaeBtnFlag = 1;
    console.log(holiday);
  }

  updateHoliday(holiday:Holiday) {
   console.log(holiday);
   holiday.userId = this.userId;
   this.myService.updateHoliday(holiday).subscribe((result => {
    this.getAllHolidays();
   }));
   
  }

  deleteHoliday(holiday:Holiday) {
    this.myService.deleteHoliday(holiday.id).subscribe((result => {
     this.getAllHolidays();
    }))
  }
}
