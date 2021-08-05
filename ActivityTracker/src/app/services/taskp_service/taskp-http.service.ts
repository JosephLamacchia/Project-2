import { Injectable } from '@angular/core';
import { Taskpriority } from 'src/app/models/TaskPriority';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskpriorityHttpService {

  private postHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllTaskprioritys(): Observable<Taskpriority[]> {
    return this.http.get<Taskpriority[]>('http://localhost:7000/taskprioritys');
  }

  addTaskpriority(Taskpriority: Taskpriority): Observable<Taskpriority> {
    return this.http.post<Taskpriority>('http://localhost:7000/taskprioritys', Taskpriority, { headers: this.postHeaders });
  }

  getTaskpriority(id_taskpriority: number): Observable<Taskpriority> {
    return this.http.get<Taskpriority>('http://localhost:7000/taskprioritys/' + id_taskpriority);
  }

  updateTaskpriority(Taskpriority: Taskpriority): Observable<Taskpriority> {
    return this.http.put<Taskpriority>('http://localhost:7000/taskprioritys/' + Taskpriority.id_taskpriority, Taskpriority, { headers: this.postHeaders });
  }

}