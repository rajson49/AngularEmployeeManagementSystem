import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-first',
  templateUrl: './employee-first.component.html',
  styleUrls: ['./employee-first.component.css']
})
export class EmployeeFirstComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  } 

  private getEmployees(){
    this.employeeService.getEmloyeesList().subscribe(data => {
      this.employees = data; 
      console.log(data)
    })
  }

  updateEmployee(id:number){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(
      data=>{
        console.log(data);
        this.getEmployees();
      }
    );
  }

  employeeDetails(id:number){
    this.router.navigate(['details-employee',id]);
  }

}
