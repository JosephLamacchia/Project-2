import { Injectable } from '@angular/core';
import { Taskpriority } from '../../models/TaskPriority';

@Injectable({
  providedIn: 'root'
})
export class TaskpriorityService {

  constructor() { }

  taskpriority: Taskpriority = new Taskpriority(0, '');
}
