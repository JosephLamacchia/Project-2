// MODULE IMPORTS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENT IMPORTS
import { EmployeePageComponent } from './components/employee-page/employee-page.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ManagerPageComponent } from './components/manager-page/manager-page.component';
import { NewUserRegistrationComponent } from './components/new-user-registration/new-user-registration.component';

const routes: Routes = [
  {path: 'employee', component: EmployeePageComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'manager', component: ManagerPageComponent},
  {path: 'newUser', component: NewUserRegistrationComponent},

  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
