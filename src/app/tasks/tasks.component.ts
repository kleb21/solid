import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/ITasks.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  public tasks!: Task[]; 
  constructor(public taskService: TasksService){}

  ngOnInit() {
    this.tasks = this.taskService.getItems();
  }

  // deleteTask(task: Task){
  //   this.taskService.deleteItems(task);
  // }

}
