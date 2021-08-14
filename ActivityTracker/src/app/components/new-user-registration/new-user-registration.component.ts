import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/Employee';
import { EmployeeHttpService } from 'src/services/employee_service/employee-http.service';
import { Router } from '@angular/router';

//need to inject the Http service and the user service into this component
@Component({
  selector: 'app-new-user-registration',
  templateUrl: './new-user-registration.component.html',
  styleUrls: ['./new-user-registration.component.css']
})
export class NewUserRegistrationComponent {

  managers: Employee[] | undefined;
  employees: Employee[] = [];
  selected: any;
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  isManager: boolean = false;
  m_id: number | undefined;
  invalidInput: boolean = false;
  duplicateEmail: boolean = false;

  constructor(public eHttpService: EmployeeHttpService, public router: Router) { }


  onSubmit() {
  }

  ngOnInit() {
    this.isManager = false;
    this.invalidInput = false;
    this.duplicateEmail = false;
    this.getManagers();
    this.getEmployees();
  }

  //in this create user method, I will create a user to pass into an http request body, then
  //the http request will be sent, after that a confirmation notice will come up on the screen and the input
  //fields should be cleared
  createUser() {
    if (this.selected == "true") {
      this.isManager = true;
    } else {
      this.isManager = false;
    }
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.email);
    console.log(this.password);
    console.log(this.isManager);

    //checking if any of the fields are left blank
    if(this.firstName == "" || this.lastName == "" || this.email == "" || this.password == "" || this.selected == undefined) {
      //if they are then this is an invalid input
      //don't create that account and send an error
      this.invalidInput = true;
    }
    //checking if the input email is the same as one already in the system
    for (let i: number = 0; i < this.employees?.length; i++) {
      if (this.employees[i].email == this.email){
        //if so then duplicateEmail == true, break out of the loop and send an error to the screen
        this.duplicateEmail = true;
        break;
      }
    }

    if (this.invalidInput == true || this.duplicateEmail == true) {
      //do nothing and put up the error sign
    } else { //if everything is entered and the email is not a duplicate, then we will create a new user with those credentials

      let employee = new Employee(0, this.email, this.password, this.firstName, this.lastName, this.isManager, 0);
      if (this.isManager != true) {
        employee.m_id = this.selected.id;
        console.log(employee);
      }
      if (employee.email == "" || employee.firstname == "" || employee.lastname == "" || employee.password == "" || employee.m_id == undefined) {
        //add an alert to say that not all fields are filled out correctly
      } else {
        this.eHttpService.addEmployee(employee).subscribe(
          (response) => {
            console.log(response);
          }
        )
        //now here we should redirect to the login page after a successful account addition
        this.router.navigate(["/login"]);
      }
    }
  }

  //this gets all of the managers from our database
  getManagers() {
    this.eHttpService.getAllManagers().subscribe(
      (response) => {
        console.log(response);
        this.managers = response;
      }
    )
  }

  getEmployees() {
    this.eHttpService.getAllEmployees().subscribe(
      (response) => {
        this.employees = response;
      }
    )
  }

  goHome() {
    this.router.navigate(["/login"]);
  }

}
