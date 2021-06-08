import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project;
  projects = this.sharedData.projects;
  constructor(private sharedData: SharedDataService,
    private formBuilder: FormBuilder) { }
  projectForm = this.formBuilder.group({
    id: [{value: '', disabled: true}, Validators.required],
    name: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    status: [{value: '', disabled: true}, Validators.required],
  });
 

  ngOnInit(): void {
  }
  getProject = (id) => {
    let project =  this.projects.filter((project) => project.id === id);
    this.project = project[0];
    this.setFormValue();
  }
  setFormValue = () => {
    this.projectForm.get('status').setValue(this.project.status);
    this.projectForm.get('endDate').setValue(this.formatDate(this.project.endDate));
    this.projectForm.get('startDate').setValue(this.formatDate(this.project.startDate));
    this.projectForm.get('name').setValue(this.project.name);
    this.projectForm.get('id').setValue(this.project.id);
  }
  createProject = () => {
    const formValue =  this.projectForm.value;
    let project = {
      "id": this.projects.length + 1,
      "name": formValue.name,
      "startDate":formValue.startDate,
      "endDate":formValue.endDate,
      "status":this.checkStatus(formValue.endDate),
    }
    this.projects.push(project);
  }
  formatDate = (date) => {
    date = new Date(date);
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return `${ye}-${mo}-${da}`;
  }
  checkStatus = (endDate) =>{
    endDate = new Date(endDate);
    endDate = endDate.getTime();
    let today = new Date();
    let t = today.getTime();
    if(endDate < t){
      return 'ACTIVE'
    }else {
      return 'NOT_ACTIVE'
    }

  }
  editProject = () => {
    const formValue =  this.projectForm.value;
    this.projects.forEach((project, index) => {
      if(project.id === this.project.id){
        this.projects[index] = {
          "id": project.id,
          "name": formValue.name,
          "startDate":formValue.startDate,
          "endDate":formValue.endDate,
          "status": this.checkStatus(formValue.endDate),
        }
        this.project = {
          "id": project.id,
          "name": formValue.name,
          "startDate":formValue.startDate,
          "endDate":formValue.endDate,
          "status": this.checkStatus(formValue.endDate),
        }
        this.setFormValue();
      }
    })
  }
  
}
