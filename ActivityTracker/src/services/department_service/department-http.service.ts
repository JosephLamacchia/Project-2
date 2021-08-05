import { Injectable } from '@angular/core';
import { Department } from 'src/app/models/Department';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentHttpService {

  private postHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>('http://localhost:7000/departments');
  }

  addDepartment(Department: Department): Observable<Department> {
    return this.http.post<Department>('http://localhost:7000/departments', Department, { headers: this.postHeaders });
  }

  getDepartment(id_department: number): Observable<Department> {
    return this.http.get<Department>('http://localhost:7000/departments/' + id_department);
  }

  updateDepartment(Department: Department): Observable<Department> {
    return this.http.put<Department>('http://localhost:7000/departments/' + Department.id_department, Department, { headers: this.postHeaders });
  }

}