import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskHttpService } from 'src/services/task_service/task-http.service';
import { LoginmatchService } from 'src/services/loginmatch.service';
import { Login } from 'src/models/Login';
import { Task } from 'src/models/Task';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})

export class EmployeePageComponent implements OnInit {
 //we need to make sure after we log in we can still retrieve the current employee
 tasks :Task[] = [];
 curTasks :Task[] = [];
 currentEmployee :Login | undefined;
 curEmployeeString :any;
 firstname: string | undefined;
 lastname: string | undefined;
 duedates: Date[] = [];
 datepipe: DatePipe = new DatePipe('en-US');

 constructor(private http: HttpClient, private ts: TaskHttpService, private ls: LoginmatchService) { }

 ngOnInit(): void {
   this.getTasks();
 }

 // onSubmit(data: any)
 // {
 //   this.http.post('http://localhost:8080/task', data)
 //   .subscribe((result) =>{
 //     console.warn("result", result)
 //   })
 //   console.warn(data);
 // }
 
 getTasks() {
       //get the currently logged in employee
       this.curEmployeeString = window.localStorage.getItem("currentEmployee");
       this.currentEmployee = JSON.parse(this.curEmployeeString);
       console.log(this.curEmployeeString);
       this.firstname=this.currentEmployee?.firstname
       //on init I will load all of the tasks this employee currently has
       //call the get all tasks method in the task services
       this.ts.getAllTasks().subscribe(
         (reponse) => {
           //okay we can properly get all of the tasks
           //console.log(reponse);
           this.tasks = reponse;
           console.log(this.tasks);
           //now we need to sort through them and take out any which don't apply to the current employee
           //I didn't know how to remove things from an array easily in typescript, so I just added them to another array.
           for(let i = 0; i < this.tasks.length; i++) {
             if(this.tasks[i].e_id == this.currentEmployee?.id) {
               this.curTasks.push(this.tasks[i]);
               let myDate = new Date(+this.tasks[i].duedate + (24*60*60*1000));
               this.duedates.push(myDate);
               let lsObject = JSON.stringify(this.tasks[i]);
               window.localStorage.setItem("task" + i, lsObject);
               console.log(window.localStorage.getItem("task" + i))
             }
           }
           console.log(this.curTasks);
         }
       )
       //filter out all of the tasks not associated to this employee
 }



 saveIndex(index:number){

  let indexString:string = index.toString();
  window.localStorage.setItem('index',indexString);

 }
}
