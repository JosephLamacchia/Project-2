import { Injectable } from '@angular/core';
import { Employee } from 'src/models/Employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {

  private postHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:7000/employees');
  }

  addEmployee(Employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('http://localhost:7000/employees', Employee, { headers: this.postHeaders });
  }

  getEmployee(email: string): Observable<Employee> {
    return this.http.get<Employee>('http://localhost:7000/employees/' + email);
  }

  updateEmployee(Employee: Employee): Observable<Employee> {
    return this.http.put<Employee>('http://localhost:7000/employees/' + Employee.id, Employee, { headers: this.postHeaders });
  }

}