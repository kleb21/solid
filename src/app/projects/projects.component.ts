import { Component, OnInit } from '@angular/core';
import { Iprojects } from '../models/IProjects.interface';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  public projects!: Iprojects[];
  
  constructor(private projectService: ProjectsService){}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projects = this.projectService.getItems()
  }
}
