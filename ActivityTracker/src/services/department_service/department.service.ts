import { Injectable } from '@angular/core';
import { Department } from '../../models/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  department: Department = new Department(0, '', 0);
}
