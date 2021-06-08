import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { FirstTabEmployeesComponent } from './first-tab-employees/first-tab-employees.component';
import { EmployeesComponent } from './employees/employees.component';
import {MatTableModule} from '@angular/material/table';
import { EventEmitterService } from '../event-emitter.service';
import { SecondTabEmployeesComponent } from './second-tab-employees/second-tab-employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FirstTabEmployeesComponent, EmployeesComponent, SecondTabEmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EventEmitterService]
})
export class EmployeesModule { }
