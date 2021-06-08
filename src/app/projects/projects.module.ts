import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { EventEmitterService } from '../event-emitter.service';
import { ProjectsComponent } from './projects/projects.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule, 
  ],
  providers: [EventEmitterService]
})
export class ProjectsModule { }
