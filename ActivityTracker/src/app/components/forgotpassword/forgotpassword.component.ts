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

  public success:boolean = false;

 public invalid:boolean = false;

 public title: boolean = true;
 public email:string ='';

 
  ngOnInit() {
  }

  sendEmail(){

   
      //Send Email
      this.http.sendEmail(this.email,'none','pass').subscribe(
        (response)=>{

          console.log("Response : " + JSON.stringify(response))
          if(response){
            this.success= true; 
            this.title = false;     
            this.invalid = false;

    }
    else{
      this.invalid = true;
      this.title = false; 
      this.success= false; 
    

    }
  })

}

}
