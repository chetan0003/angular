import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyService } from './service';
import { HolidayComponent } from './holiday/holiday.component';
import { ProfileComponent } from './profile/profile.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HolidayComponent,
    ProfileComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule , HttpClientModule
  ],
  providers: [MyService,HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
