import { Injectable } from '@angular/core';
import { TaskType } from '../../models/TaskType';

@Injectable({
  providedIn: 'root'
})
export class TaskTypeService {

  constructor() { }

  tasktype: TaskType = new TaskType(0, '');
}
