import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NewUserRegistrationComponent } from './components/new-user-registration/new-user-registration.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'newUser', component: NewUserRegistrationComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
