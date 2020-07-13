import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/shared/model/employee.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  title : string = 'Add';
  profileForm : FormGroup;  
  gender: string[] = ['Male','Female','Other'];
  id : number;

  data : Employee;

  constructor(private employeeService : EmployeeService,
              private _activatedRoute : ActivatedRoute,
              private router : Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
			'firstName' : new FormControl(null,[Validators.required]),
			'lastName' : new FormControl(null),
			'gender' : new FormControl(null),
			'email' : new FormControl(null,[Validators.email]),
			'phone' : new FormControl(null),
			'department' : new FormControl(null),
    });

    //for editing employee record, based on Id
    this._activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id');
      if (this.id) {
        this.title = 'Update'
        this.data = this.employeeService.getEmployeeById(this.id);
        this.profileForm.setValue({  
          firstName: this.data.firstName,  
          lastName: this.data.lastName,  
          gender: this.data.gender,  
          email: this.data.email,  
          phone: this.data.phone,  
          department: this.data.department,            
      });  
      }
    })
  }

  //Add or edit employee record, if form is valid.
  addEmployee() {       
    if(this.profileForm.invalid) { return; }     
    else if(this.id) {
      this.employeeService.updateEmployee(this.id,this.profileForm.value);   
      this.openSnackBar("Updated successfully !");
      this.router.navigate(['/list']);
    }
    else {
    this.employeeService.addEmployee(this.profileForm.value);   
    this.openSnackBar("Added successfully !");
    this.profileForm.reset(); 
  }
}
  
  //SnackBar for success message
  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
    });
  }
  
}
