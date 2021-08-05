import { Injectable } from '@angular/core';
import { TaskType } from 'src/app/models/TaskType';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskTypeHttpService {

  private postHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllTaskTypes(): Observable<TaskType[]> {
    return this.http.get<TaskType[]>('http://localhost:7000/tasktypes');
  }

  addTaskType(TaskType: TaskType): Observable<TaskType> {
    return this.http.post<TaskType>('http://localhost:7000/tasktypes', TaskType, { headers: this.postHeaders });
  }

  getTaskType(id_tasktype: number): Observable<TaskType> {
    return this.http.get<TaskType>('http://localhost:7000/tasktypes/' + id_tasktype);
  }

  updateTaskType(TaskType: TaskType): Observable<TaskType> {
    return this.http.put<TaskType>('http://localhost:7000/tasktypes/' + TaskType.id_tasktype, TaskType, { headers: this.postHeaders });
  }

}