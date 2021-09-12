import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFirstComponent } from './employee-first/employee-first.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [  
  {path: 'employees', component:EmployeeFirstComponent},
  {path:'create-employee', component:CreateEmployeeComponent},
  {path:'update-employee/:id',component:UpdateEmployeeComponent},
  {path:'details-employee/:id',component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
