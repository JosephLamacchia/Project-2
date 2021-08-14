import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { TaskHttpService } from 'src/services/task_service/task-http.service';
import { EmployeeHttpService } from 'src/services/employee_service/employee-http.service';
import { Task } from 'src/models/Task';
import { Employee } from 'src/models/Employee';

@Component({
  selector: 'app-completetask',
  templateUrl: './completetask.component.html',
  styleUrls: ['./completetask.component.css']
})
export class CompletetaskComponent implements OnInit {
task:Task = new Task(1,'',1,1,1,'');
user:Employee = new Employee(1,'','','','',false,1);

  public report: string = '';
  public email = ''


  constructor(private http: TaskHttpService, private http2:EmployeeHttpService ) {

   }

  ngOnInit(): void {
  }

  complete(){

    console.log("complete called");
    let index = window.localStorage.getItem('index');
    

let t: any= window.localStorage.getItem("task" + index)

console.log("t : " + t);

this.task = JSON.parse(t);

this.task.status ='Awaiting Manager Confirmation';

  

 this.http.updateTask(this.task).subscribe(
  (response)=>{
    console.log("Response for task update : " + response)
  });

  //Get Current User And Extract manager id
  let e: any= window.localStorage.getItem("user");

  console.log("User taken from storage : " + e);
  this.user = JSON.parse(e);
  console.log("REPORT : " + this.report);
  
  let id = this.user.m_id;

  //Grab manager by employee id
  this.http2.getEmployeeById(id).subscribe(
    (Response)=>{
      console.log("Fetched manager : " +  JSON.stringify(Response));


      this.http2.sendEmail(Response.email,this.report,'Complete').subscribe(
        (Response)=>{
          console.log("Response From Sending email + " + JSON.stringify(Response))
        });
    
      })
      
    }}





