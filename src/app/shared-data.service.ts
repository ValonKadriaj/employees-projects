import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  empolyees = [
    {
    "id":1,
    "firstName":"Mujo",
    "lastName":"Mujic",
    "title":"radnik",
    "dateOfBirth":"2017-12-07T13:42:01.068927Z",
    "projects":[
    {
    "id":1,
    "name":"Project 1",
    "startDate":"2017-10-31T22:00:00Z",
    "endDate":"2017-11-29T22:00:00Z",
    "status":"ACTIVE"
    },
    {
    "id":2,
    "name":"Project 2",
    "startDate":"2017-10-31T22:00:00Z",
    "endDate":"2017-11-29T22:00:00Z",
    "status":"ACTIVE"
    }
    ]
    },
    {
    "id":2,
    "firstName":"Suljo",
    "lastName":"Suljic",
    "title":"radnik",
    "dateOfBirth":"2017-12-07T13:42:01.068927Z",
    "projects":[
    {
    "id":1,
    "name":"Project 1",
    "startDate":"2017-10-31T22:00:00Z",
    "endDate":"2017-11-29T22:00:00Z",
    "status":"ACTIVE"
    }
    ]
    }
   ]
   employee;
   projects = [
    {
    "id":1,
    "name":"Project 1",
    "startDate":"2017-10-31T22:00:00Z",
    "endDate":"2017-11-29T22:00:00Z",
    "status":"ACTIVE"
    },
    {
    "id":2,
    "name":"Project 2",
    "startDate":"2017-10-31T22:00:00Z",
    "endDate":"2017-11-29T22:00:00Z",
    "status":"ACTIVE"
    }
   ]
  constructor() { }
}
