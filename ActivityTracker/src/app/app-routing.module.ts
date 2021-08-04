import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserRegistrationComponent } from './components/new-user-registration/new-user-registration.component';

const routes: Routes = [
  {path: 'newUser', component: NewUserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
