import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/Task';
import { Employee } from 'src/models/Employee';
import { TaskHttpService } from 'src/services/task_service/task-http.service';
import { EmployeeHttpService } from 'src/services/employee_service/employee-http.service';

@Component({
  selector: 'app-assigntask',
  templateUrl: './assigntask.component.html',
  styleUrls: ['./assigntask.component.css']
})
export class AssigntaskComponent implements OnInit {
  duedate: number = 0;
  description: string = '';

  task:Task = new Task(0,'',1,1,1,'');
  user:Employee = new Employee(1,'','','','',false,1);

  constructor(private taskhttp:TaskHttpService, private employeehttp: EmployeeHttpService) { }

  ngOnInit(): void {
  }

  addTask(){
    this.task.duedate = this.duedate;
    this.task.taskdescription = this.description;
    this.task.status = "Active";
    let i = window.localStorage.getItem('index');

    this.taskhttp.addTask(this.task).subscribe(
      (Response)=>{
        console.log("Add task Response : " +JSON.stringify(Response));
      }
    )
  }

}
