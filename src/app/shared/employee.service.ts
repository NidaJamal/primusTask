import { Injectable } from '@angular/core';
import { Employee } from './model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  employees : Employee[] = []

  //Get list of all employees
  getEmployees() {
    return this.employees;
  }

  //Get employee details by Index
  getEmployeeById(index : number) {
    return this.employees[index-1]
  }

  //Add new employee record to the list
  addEmployee(data : Employee) {            
    this.employees.push({
        firstName : data.firstName,
        lastName : data.lastName,
        gender : data.gender,
        email : data.email,
        phone : data.phone,
        department : data.department
    });
  }

  //Update employee details
  updateEmployee(index : number, data : Employee) {
    let emp = this.getEmployeeById(index);
      if (!emp) {
        return null;
      }
      Object.assign(emp, data);
  }

  //Delete employee record
  deleteEmployee(index: number) {
    this.employees = this.employees.filter((emp,i) => i !== index);
  }

}
