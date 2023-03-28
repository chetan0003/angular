import { Injectable } from '@angular/core';
import { User } from './classes/user';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Holiday } from './classes/holiday';
import { Task } from './classes/task';



@Injectable({
  providedIn: 'root'
})
export class MyService {
  
  
  
  currentUser:any;
  user:User = new User();
  constructor(private http: HttpClient) {
    
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer' + localStorage.getItem('token'),
      'Access-Control-Allow-Origin': '*'
    })
  };



  //Login 
  logIn(user:User) {
    return this.http.post('http://localhost:9999/authenticate', user);
  }

  //Register User
  registerUser(user:User) {
    
    console.log(user)
     return this.http.post('http://localhost:9999/user/create', user);
  }

  inLogin() {
    let token = localStorage.getItem("token");
    if(token == null || token =='' || token == undefined){
       return false;
    } else {
      return true;
    }
  }
  setProfile(user:User) {
    this.user = user;
    console.log("in service" +this.user);
  }

  getSetProfile(){
    return this.user;
  }
  getProfile(userName:string) {
    this.currentUser = localStorage.getItem('currentUser')
    return this.http.get('http://localhost:9999/user/getUser/'+userName)
  }

  addHoliday(holiday:Holiday) {
   console.log(holiday);
   return this.http.post('http://localhost:9999/holiday/create',holiday);
  }

  geAllHoliday(userId:number) {
    return this.http.get('http://localhost:9999/holiday/getAllHolidays/'+userId)
  }

  updateHoliday(holiday:Holiday) {
    return this.http.post('http://localhost:9999/holiday/update',holiday);
  }

  deleteHoliday(id:number) {
    console.log('http://localhost:9999/holiday/'+id);
    return this.http.delete('http://localhost:9999/holiday/'+id)
  }

  calculateEndDate(task:Task) {
    return this.http.post('http://localhost:9999/task',task);
  }
} 