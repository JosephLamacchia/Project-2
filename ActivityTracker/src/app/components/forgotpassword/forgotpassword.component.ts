import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {  
  constructor() {}

 public email:string ='';

 
  getVal(val: string){
    console.warn(val)
  }

  
  
  ngOnInit() {
  }


  sendEmail( ){

   console.log(this.email);
  }

}
