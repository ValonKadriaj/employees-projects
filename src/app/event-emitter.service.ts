import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  constructor() { }
  invokeEvent: Subject<any> = new Subject(); 

  getEmployee() { 
    this.invokeEvent.next('get-employee')      
  }
  getProject = () => {
    this.invokeEvent.next('get-project') 
  }
  
}
