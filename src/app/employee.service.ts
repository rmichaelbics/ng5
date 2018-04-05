import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EmployeeService {

  employee: Employee[];

  // private emp = new Employee();

  constructor() { }
}

