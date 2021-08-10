import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginmatchService } from 'src/services/loginmatch.service';
import { Login } from 'src/models/Login'


@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css']
})
export class ManagerPageComponent implements OnInit {

  constructor(private http: HttpClient,private loginServ: LoginmatchService) { }



  employeelist: Login[] = [];
 // employeelist: Login[] =[{ "id": 1, "firstname": "The Avengers", "lastname": "lolo", "email": "lolo", "password" : "ok","manager":true,"m_id" :1}
//,{ "id": 1, "firstname": "The Avengers", "lastname": "lolo", "email": "lolo", "password" : "ok","manager":true,"m_id" :1}];

  ngOnInit(): void {
    this.getEmployeebymanager();
   // this.displayAllEmployee();
//this.displayAllEmployeetest() ;

  



  }


  id: number | undefined ;
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  password: string| undefined;
  manager: boolean| undefined;
  m_id :number| undefined;

 // employeelist = [
   // { "id": 1, "title": "The Avengers", "price": 5.00, "available": true, "returnDate": 0 },
   // { "id": 2, "title": "Black Widow", "price": 30.00, "available": true, "returnDate": 0 }
 // ]

 getEmployeebymanager() {
    
  this.loginServ.getEmployeebymanager(1).subscribe(
    (response) => {
      //console.log(response);
     
     this.employeelist=response;
     //for(let employee of response) {
     // this.employeelist.push(employee);
     //}
      


      console.log(this.employeelist);

   }
  
  );
}

 displayAllEmployee() {

  this.loginServ.getAllEmployee().subscribe(
    (response) => {
     // console.log(response);
   
      this.employeelist = response;

      console.log(this.employeelist)

    
     
    
    }
  );

}

displayAllEmployeetest() {

  this.loginServ.getEmployeebymanager(1).subscribe(
    (response) => {
     // console.log(response);
     for(let employee of response) {
      this.employeelist.push(employee);
     }

      console.log(this.employeelist)
    }
  );

}




  onSubmit(data: any)
  {
    this.http.post('http://localhost:8080/task', data)
    .subscribe((result) =>{
      console.warn("result", result)
    })
    console.warn(data);
  }

}
