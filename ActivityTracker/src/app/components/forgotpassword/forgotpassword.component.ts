import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Employee } from 'src/models/Employee';
import { EmployeeHttpService } from 'src/services/employee_service/employee-http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {  
  constructor(private http: EmployeeHttpService, private router: Router) {

  }


 public invalid:boolean = false;
 public success:boolean = false;

 public email:string ='';

 
  getVal(val: string){
    console.warn(val)
  }

  
  
  ngOnInit() {
  }

  sendEmail( ){

    console.log("sendEmail called")
    
      //Send Email
      this.http.sendEmail(this.email).subscribe(
        (response)=>{

          console.log("Response : " + JSON.stringify(response))
          if(JSON.stringify(response)){
            this.success= true;
          }
          else{this.invalid = false;}}
          )
     



}}
