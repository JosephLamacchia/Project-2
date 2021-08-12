import { Component, OnInit } from '@angular/core';
import { TaskHttpService } from 'src/services/task_service/task-http.service';
import { Task } from 'src/models/Task';
import { EmployeeHttpService } from 'src/services/employee_service/employee-http.service';
import { Employee } from 'src/models/Employee';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {
  duedate: number = 0;
  description: string = '';

  task:Task = new Task(1,'',1,1,1,'');
  user:Employee = new Employee(1,'','','','',false,1);
  constructor(private emphttp: EmployeeHttpService, private taskhttp:TaskHttpService ) { }

  ngOnInit(): void {
  }

  populate(){
    let i = window.localStorage.getItem('index');
    let t:any = window.localStorage.getItem('task'+i);
    this.task = JSON.parse(t);

    this.description = this.task.taskdescription;
    this.duedate = this.task.duedate;

  }

  updateTask(){
   
    this.task.taskdescription = this.description;
    this.task.duedate = this.duedate;
    
    this.taskhttp.updateTask(this.task).subscribe(
      (Response)=>{
        console.log("Response from update task request : " + JSON.stringify(Response));
      }
    )

    this.emphttp.getEmployeeById(this.task.e_id).subscribe(
      (Response)=>{
        
        this.emphttp.sendEmail(Response.email,this.description,'Update').subscribe(
          (Response)=>{
            console.log("Update email response : " + Response);
          }
        )
      }
    )

  }

}
