import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Employee } from 'src/models/Employee';
import { EmployeeHttpService } from 'src/services/employee_service/employee-http.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {  
  constructor(private http: EmployeeHttpService) {

  }


 public invalid:boolean = false;
 public email:string ='';

 
  getVal(val: string){
    console.warn(val)
  }

  
  
  ngOnInit() {
  }

  sendEmail( ){

    if(true){
      //Send Email
      this.http.sendEmail(this.email).subscribe()
      
    }
    else{
      this.invalid = true;
    }
  }

}
