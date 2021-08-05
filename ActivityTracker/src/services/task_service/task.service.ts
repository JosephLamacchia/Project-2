import { Injectable } from '@angular/core';
import { Task } from '../../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  task: Task = new Task(0, '','',0,0,'','',0,0,'',0,0,0,0);
}
