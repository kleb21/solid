import { Injectable } from '@angular/core';
import { Task, taskMethods } from '../models/ITasks.interface';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TasksService implements taskMethods {
  private tasks: Task[] = [
    { id: 1, title: 'Finish Report', description: 'Complete the annual financial report by the end of the week.', completed: true },
    { id: 2, title: 'Team Meeting', description: 'Attend the weekly team meeting on project updates.', completed: false },
    { id: 3, title: 'Code Review', description: 'Review the new code submissions from the development team.', completed: true },
    { id: 4, title: 'Client Presentation', description: 'Prepare and present the project proposal to the client.', completed: false },
    { id: 5, title: 'Market Research', description: 'Conduct research on the latest market trends and competitors.', completed: true },
    { id: 6, title: 'Update Website', description: 'Implement new design changes to the company website.', completed: false }
];

  
  constructor() { }

  getItems() {
    return this.tasks;
  }

  addItems(newItems: Task){
    this.tasks.push(newItems)
  }

  deleteItems(item: Task): any{
    this.tasks = this.tasks.filter((data) => data.title !== item.title);
    this.getItems()
  }
}
