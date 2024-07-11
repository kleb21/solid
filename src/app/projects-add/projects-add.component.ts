import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Iprojects } from '../models/IProjects.interface';
import { ProjectsService } from '../services/projects.service';
import { Task } from '../models/ITasks.interface';

@Component({
  selector: 'app-projects-add',
  templateUrl: './projects-add.component.html',
  styleUrl: './projects-add.component.scss'
})
export class ProjectsAddComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private projectsService: ProjectsService){
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      tasks: this.fb.array([this.createTask()])
    });
  }
  
  createTask(): FormGroup {
    return this.fb.group({
      taskName: [''],
      taskDescription: ['']
    });
  }
  
  get tasks(): FormArray {
    return this.form.get('tasks') as FormArray;
  }
  
  addNewProjects(){
    const tasks: Task[] = this.tasks.controls.map((taskGroup, index) => {
      return {
        title: taskGroup.get('taskName')?.value,
        description: taskGroup.get('taskDescription')?.value,
        completed: false
      }
    });
  
    const newProject: Iprojects = {
      title: this.form.get("title")?.value,
      description: this.form.get("description")?.value,
      tasks: tasks
    }
    
    this.projectsService.addItems(newProject);
    this.form.reset();
  }
  
}
