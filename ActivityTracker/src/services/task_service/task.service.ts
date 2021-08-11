import { Injectable } from '@angular/core';
import { Task } from '../../models/Task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  
  baseURL: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {
  }
 
  getTask(): Observable<any> {
    console.log('getTask '+this.baseURL + 'task')
    return this.http.get(this.baseURL + 'task')
  }
}