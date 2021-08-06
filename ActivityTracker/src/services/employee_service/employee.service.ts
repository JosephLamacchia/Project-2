import { Injectable } from '@angular/core';
import { Employee } from '../../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  employee: Employee = new Employee(0, '', '', '','',false,0);
}
