import { Component, Input } from '@angular/core';
import { Task } from '../models/ITasks.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrl: './tasks-details.component.scss'
})
export class TasksDetailsComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TasksService){
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  addNewTask(){
    const newTasks: Task = {
      title: this.form.get("title")?.value,
      description: this.form.get("description")?.value,
      completed: false
    }
    this.taskService.addItems(newTasks);
    this.form.reset();
  }

}
