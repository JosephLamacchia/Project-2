import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//need to inject the Http service and the user service into this component
@Component({
  selector: 'app-new-user-registration',
  templateUrl: './new-user-registration.component.html',
  styleUrls: ['./new-user-registration.component.css']
})
export class NewUserRegistrationComponent{

  //this is just a list of fake managers, I will create a real list once we have all of the 
  //back end capabilities and database 
  managers :string[] = ['Chris', 'Jugue', 'Joseph', 'Nicolis', 'Dwayne'];

  name :string | undefined;
  email :string | undefined;
  password :string | undefined;

  constructor(public fb :FormBuilder) { }

  managersForm = this.fb.group({
    name :['']
  })

  onSubmit() {
    alert(JSON.stringify(this.managersForm.value));
  }

  //in this create user method, I will create a user to pass into an http request body, then
  //the http request will be sent, after that a confirmation notice will come up on the screen and the input
  //fields should be cleared
  createUser() {
    console.log(this.managersForm.value.name);
    console.log(this.name);
    console.log(this.email);
    console.log(this.password);
  }

}
