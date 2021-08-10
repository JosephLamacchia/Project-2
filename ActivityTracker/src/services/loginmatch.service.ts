import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/models/Login'

@Injectable({
  providedIn: 'root'
})
export class LoginmatchService {

  currentLogin: Login | undefined;

  private postHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  login(logi: Login): Observable<Login> {
    return this.http.post<Login>('http://localhost:8080/employees/credential', logi, { headers: this.postHeaders });
    
  }

  getEmployeebymanager(id :any): Observable<Login> {
    return this.http.get<Login>('http://localhost:8080/manager/' + id);
  }
}
