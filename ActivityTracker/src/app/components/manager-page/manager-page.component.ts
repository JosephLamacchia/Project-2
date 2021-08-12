import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginmatchService } from 'src/services/loginmatch.service';
import { Login } from 'src/models/Login'
import { TaskHttpService } from 'src/services/task_service/task-http.service';
import { Task } from 'src/models/Task';



@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css']
})
export class ManagerPageComponent implements OnInit {


  constructor(private http: HttpClient,private loginServ: LoginmatchService, private ts: TaskHttpService) { }



  employeelist: Login[] = [];
  tasks :Task[] = [];
  curTasks :Task[] = [];
  
 
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
  curEmployeeString: any;
 
  mn :any;

 



 getEmployeebymanager() {
   this.curEmployeeString = window.localStorage.getItem("currentEmployee");
   this.curemployee = JSON.parse(this.curEmployeeString);
   //this.curemployee=this.loginServ.currentLogin;
    this.mn=this.curemployee?.id;

  
  this.loginServ.getEmployeebymanager(this.mn).subscribe(
    (response) => {
      //console.log(response);
     this.employeelist=response;
   
      


      console.log(this.employeelist);

   }
  
  );
}




getTasksByEmployee(id :number) {
  //so here we will get all tasks for each employee, this should be exactly like the one I used in the 
  //employee page.
  //Then after I get the tasks I need to show a table with all of the tasks and the update task, and approve task button 
  //on each of the tasks.
  this.curTasks = [];
  this.ts.getAllTasks().subscribe(
    (response) => {
      console.log(response);
      this.tasks = response;
      console.log(id);
      for(let i = 0; i < this.tasks.length; i++) {
        if(this.tasks[i].e_id == id) {
          this.curTasks.push(this.tasks[i]);
          window.localStorage.setItem('task'+i,JSON.stringify(this.tasks[i]));
        }
      }
      console.log(this.curTasks);
    }
  )
}



 
  onSubmit(data: any)
  {
    this.http.post('http://localhost:8080/task', data)
    .subscribe((result) =>{
      console.warn("result", result)
    })
    console.warn(data);
  }

  
 saveIndex(index:number){

  let indexString:string = index.toString();
  window.localStorage.setItem('index',indexString);

 }
}
