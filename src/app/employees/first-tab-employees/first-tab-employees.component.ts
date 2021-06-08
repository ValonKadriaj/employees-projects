import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventEmitterService } from 'src/app/event-emitter.service';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-first-tab-employees',
  templateUrl: './first-tab-employees.component.html',
  styleUrls: ['./first-tab-employees.component.css']
})
export class FirstTabEmployeesComponent implements OnInit {
  employee;
  employees = this.sharedData.empolyees;
  employeeForm = this.formBuilder.group({
    id: [{value: '', disabled: true}, Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    title: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
  });
  
  constructor(
    private sharedData: SharedDataService,
    private eventEmitter: EventEmitterService,
    private formBuilder: FormBuilder
    ) { 
      this.eventEmitter.invokeEvent.subscribe(value => {
        if(value === 'get-employee'){
          this.getEmployee();
        }
      }); 
    }
 
  ngOnInit(): void {
    this.getEmployee();
    
  }
  formatDate = (date) => {
    date = new Date(date);
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return `${ye}-${mo}-${da}`;
  }
  getEmployee = () => {
    this.employee = this.sharedData.employee;
    this.setFormValue();
  }
  getEmployees = () => {
    this.employees = this.sharedData.empolyees;
  }
  setFormValue = () => {
    this.employeeForm.get('id').setValue(this.employee.id);
    this.employeeForm.get('firstName').setValue(this.employee.firstName);
    this.employeeForm.get('lastName').setValue(this.employee.lastName);
    this.employeeForm.get('title').setValue(this.employee.title);
    this.employeeForm.get('dateOfBirth').setValue(this.formatDate(this.employee.dateOfBirth));
  }
  createEmployee = () => {
    const formValue =  this.employeeForm.value;
    let employee = {
      "id": this.employees.length + 1,
      "firstName": formValue.firstName,
      "lastName":formValue.lastName,
      "title":formValue.title,
      "dateOfBirth":formValue.dateOfBirth,
      "projects": []
    }
    this.employees.push(employee);
  }
  editEmployee = () => {
    const formValue =  this.employeeForm.value;
    this.employees.forEach((employee, index) => {
      if(employee.id === this.employee.id){
        this.employees[index] = {
          "id": employee.id,
          "firstName": formValue.firstName,
          "lastName":formValue.lastName,
          "title":formValue.title,
          "dateOfBirth":formValue.dateOfBirth,
          "projects": employee.projects,
        }
      }
    })
  }
}
