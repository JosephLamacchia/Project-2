import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginmatchService } from 'src/services/loginmatch.service';
import { Login } from 'src/models/Login'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{
  constructor(private loginServ: LoginmatchService, private router :Router) { };

  ngOnInit(): void {

  }

  isDisplayed: boolean |undefined;
  
  id: number=1 ;
  firstname: string='';
  lastname: string='';
  email: string='';
  password: string='';
      ismanager: boolean=false;
      m_id :number=1;
 // username :string='';  
 // password:string='';
  invalidLogin: boolean = false;
  welcomemanager : boolean = false;
  welcomesimple : boolean = false; 


  loginto() {
     //console.log(this.username + " " + this.password);
     this.invalidLogin = false;
     let user = new Login(1,'fn','ln',this.email,this.password,true,1);
    // let user = new Login(3, this.firstname, this.password,true);
     this.loginServ.login(user).subscribe(
       (response) => {
         if (response.id) {

          window.localStorage.setItem('user',JSON.stringify(response));

if (response.manager==true) {
  this.welcomemanager=true;
  this.welcomesimple=false;
  
} else {
  this.welcomesimple=true;
  this.welcomemanager=false;
}

           this.loginServ.currentLogin = response;
           console.log(this.loginServ.currentLogin);
           window.localStorage.setItem("currentEmployee", JSON.stringify(this.loginServ.currentLogin));
           if(this.loginServ.currentLogin.manager == true) {
              this.router.navigate(['manager']);
           } else if (this.loginServ.currentLogin.manager == false){
            this.router.navigate(['employee']);
           }
           
         } else {
           this.invalidLogin = true;
           this.welcomesimple=false;
           this.welcomemanager=false;
           console.log(response);
           this.email="";
           this.password="";
         }
       },
       (response) => {
         this.invalidLogin = true;
         this.welcomemanager=false;
         this.welcomesimple=false;
         console.log(response);
       }
     );
  }

}
