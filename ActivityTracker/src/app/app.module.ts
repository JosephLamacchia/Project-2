// MODULE IMPORTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// COMPONENT IMPORTS
import { AppComponent } from './app.component';
import { EmployeePageComponent } from './components/employee-page/employee-page.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ManagerPageComponent } from './components/manager-page/manager-page.component';
import { NewUserRegistrationComponent } from './components/new-user-registration/new-user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeePageComponent,
    ForgotpasswordComponent,
    LoginPageComponent,
    ManagerPageComponent,
    NewUserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
