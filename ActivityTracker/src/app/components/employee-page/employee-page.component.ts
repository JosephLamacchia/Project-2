import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from 'src/services/task_service/task.service';
import { Task } from 'src/models/Task';


@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})

export class EmployeePageComponent implements OnInit {

  task: Task[] = [];

  constructor(private http: HttpClient, private apiService:TaskService) { }


  ngOnInit() {
    this.refreshTask()
  }
 
  refreshTask() {
    this.apiService.getTask()
      .subscribe(data => {
        console.log(data)
        this.task=data;
      })      
 
  }

}
