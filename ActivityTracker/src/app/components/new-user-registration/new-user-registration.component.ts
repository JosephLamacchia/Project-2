import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Employee } from 'src/models/Employee';
import { EmployeeHttpService } from 'src/services/employee_service/employee-http.service';

//need to inject the Http service and the user service into this component
@Component({
  selector: 'app-new-user-registration',
  templateUrl: './new-user-registration.component.html',
  styleUrls: ['./new-user-registration.component.css']
})
export class NewUserRegistrationComponent{

  //I need to use the get all employees and filter our the managers to populate this list
  managers :string[] = ['Chris', 'Jugue', 'Joseph', 'Nicolis', 'Dwayne'];

  firstName :string="";
  lastName :string="";
  email :string="";
  password :string="";
  isManager :boolean = false;
  m_id :number | undefined;

  constructor(public fb :FormBuilder, public eHttpService: EmployeeHttpService) { }

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
    if(this.managersForm.value.name == "true") {
      this.isManager = true;
    } else {
      this.isManager = false;
    }
    console.log(this.managersForm.value.name);
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.email);
    console.log(this.password);
    console.log(this.isManager);

    let employee = new Employee(0, this.email, this.password, this.firstName, this.lastName, this.isManager, 0);
    console.log(employee);

    this.eHttpService.addEmployee(employee).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

}
