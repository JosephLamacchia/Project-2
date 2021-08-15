import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginmatchService } from 'src/services/loginmatch.service';
import { Login } from 'src/models/Login'
import { TaskHttpService } from 'src/services/task_service/task-http.service';
import { Task } from 'src/models/Task';
import { EmployeeHttpService } from 'src/services/employee_service/employee-http.service';
import { Employee } from 'src/models/Employee';



@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css']
})
export class ManagerPageComponent implements OnInit {


  constructor(private http: HttpClient,private loginServ: LoginmatchService, private ts: TaskHttpService, private es : EmployeeHttpService) { }


  pending: boolean = false;
  employeelist: Login[] = [];
  tasks :Task[] = [];
  curTasks :Task[] = [];
  task: Task = new Task(0,'',1,1,0,'');
  
 
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
  x:number = 0;
 



 getEmployeebymanager() {
   this.curEmployeeString = window.localStorage.getItem("currentEmployee");
   this.curemployee = JSON.parse(this.curEmployeeString);
   //this.curemployee=this.loginServ.currentLogin;
    this.mn=this.curemployee?.id;
    this.firstname=this.curemployee?.firstname

  
  this.loginServ.getEmployeebymanager(this.mn).subscribe(
    (response) => {
      //console.log(response);
     this.employeelist=response;
   
      for(var emp of this.employeelist){

        let i = 0;
        window.localStorage.setItem('emp' + i++,JSON.stringify(emp) )
        console.log("Placed into storage : " + JSON.stringify(emp));
        
      }


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
          console.log('This is what is places into storage upon viewing tasks : ' + JSON.stringify(this.tasks[i]))
          window.localStorage.setItem('task'+i,JSON.stringify(this.tasks[i]));
        }
      }
      console.log(this.curTasks);
    }
  )
}

approve(id :number) {

  console.log("aproove task called")
  this.ts.getTask(id).subscribe(
  (Response)=>{
    this.task = Response;
    this.task.status = 'Completed';


    this.ts.updateTask(this.task).subscribe(
      (Response)=>{
        console.log("Returned from update task : " + JSON.stringify(Response));
      }
    )

    this.es.getEmployeeById(this.task.e_id).subscribe(
      (Response)=> {
    
        this.es.sendEmail(Response.email,'23223','Approved').subscribe(
          (Response)=>{
            console.log("Email Response");
            window.location.reload();
          }
        )
      }
    )
    
    
  }

  
)


}

deny(id:number){
  console.log("aproove task called")
  this.ts.getTask(id).subscribe(
  (Response)=>{
    this.task = Response;
    this.task.status = 'Active';


    this.ts.updateTask(this.task).subscribe(
      (Response)=>{
        console.log("Returned from update task : " + JSON.stringify(Response));
      }
    )

    this.es.getEmployeeById(this.task.e_id).subscribe(
      (Response)=> {
    
        this.es.sendEmail(Response.email,'23223','Denied').subscribe(
          (Response)=>{
            console.log("Email Response");
            window.location.reload();
          }
        )
      }
    )
    

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

  
 saveIndex(index:number ){

 
  console.log("index placed into storage" + index);
  window.localStorage.setItem('index',JSON.stringify(index));

 }

 saveEmpId(empid:number){
  console.log("index placed into storage" + empid);
  window.localStorage.setItem('empid',JSON.stringify(empid));
 }
}
