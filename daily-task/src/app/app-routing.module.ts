import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HolidayComponent } from './holiday/holiday.component';
import { ProfileComponent } from './profile/profile.component';
import { TaskComponent } from './task/task.component';



const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path: 'header',component:HeaderComponent
  },
  {
    path: 'holiday',component:HolidayComponent
  },
  {
    path: 'profile',component:ProfileComponent
  },
  {
    path: 'task',component:TaskComponent
  }
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
