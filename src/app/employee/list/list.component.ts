import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/model/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees : Employee[];
  
  //Arrange column names
  displayedColumns: string[] = ['position', 'name', 'gender', 'department', 'phone', 'email','action'];
  
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() : void{
    this.getEmployees();
  }

  //Get employee list
  getEmployees() {
    this.employees =  this.employeeService.getEmployees();
  }

 //Delete employee record
  deleteRecord(index : number) {
    this.employeeService.deleteEmployee(index);
    this.getEmployees();
  }
}
