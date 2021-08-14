import { Injectable } from '@angular/core';
import { Task } from 'src/models/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskHttpService {

  private postHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:8080/task');
  }

  addTask(Task: Task): Observable<Task> {
    return this.http.post<Task>('http://localhost:8080/task', Task, { headers: this.postHeaders });
  }

  getTask(id_task: number): Observable<Task> {
    return this.http.get<Task>('http://localhost:8080/task/' + id_task);
  }

  updateTask(Task: Task): Observable<Task> {
    return this.http.put<Task>('http://localhost:8080/task/' + Task.id, Task, { headers: this.postHeaders });
  }

}