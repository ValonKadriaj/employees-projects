import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/event-emitter.service';
import { SharedDataService } from 'src/app/shared-data.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ['id','firstName', 'lastName'];
 
  show = false;
  constructor(private sharedData: SharedDataService,
    private eventEmitter: EventEmitterService) { }
  get employees(): any  {
    return this.sharedData.empolyees;
  }
  set emoployee(value) {
     this.sharedData.employee = value;
  }
  ngOnInit(): void {
  }
  getEmpolyee = (id) => {
    let employee =  this.employees.filter((employee) => employee.id === id);
    this.emoployee = employee[0];
    this.eventEmitter.getEmployee();
    this.show = true;
  }
  
}
