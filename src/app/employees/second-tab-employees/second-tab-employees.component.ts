import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/event-emitter.service';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-second-tab-employees',
  templateUrl: './second-tab-employees.component.html',
  styleUrls: ['./second-tab-employees.component.css']
})
export class SecondTabEmployeesComponent implements OnInit {
  projects= [];
  displayedColumns: string[] = ['id', 'name'];
  constructor(
    private sharedData: SharedDataService,
    private eventEmitter: EventEmitterService
    ) { 
      this.eventEmitter.invokeEvent.subscribe(value => {
        if(value === 'get-employee'){
          this.getProjects();
        }
      }); 
    }
 
  ngOnInit(): void {
    this.getProjects();
  }
  getProjects = () => {
    this.projects = this.sharedData.employee.projects;
  }

}
