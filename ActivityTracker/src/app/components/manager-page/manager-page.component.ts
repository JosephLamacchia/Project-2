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
 
  ngOnInit(): void {
    this.getEmployeebymanager();

  }


  id: number | undefined ;
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  password: string| undefined;
  manager: boolean| undefined;
  m_id :number| undefined;
  curemployee :Login | undefined;

 
  mn :any  ;

 



 getEmployeebymanager() {
   this.curemployee=this.loginServ.currentLogin;
    this.mn=this.curemployee?.m_id;

  
  this.loginServ.getEmployeebymanager(this.mn).subscribe(
    (response) => {
      //console.log(response);
     this.employeelist=response;
   
      


      console.log(this.employeelist);

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
