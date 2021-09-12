import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  
  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  onSumit(){
    console.log(this.employee);
    this.saveEmloyee();
  }

  saveEmloyee(){
    this.employeeService.createEmployee(this.employee).subscribe(
      data => console.log(data)
    )
    this.goToEmployeeList();
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }


}
