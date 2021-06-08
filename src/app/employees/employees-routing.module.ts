import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { FirstTabEmployeesComponent } from './first-tab-employees/first-tab-employees.component';
import { SecondTabEmployeesComponent } from './second-tab-employees/second-tab-employees.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent, children: [
    {path: '', component: FirstTabEmployeesComponent},
    {path: 'projects', component: SecondTabEmployeesComponent}
  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
