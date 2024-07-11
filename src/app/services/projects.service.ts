import { Injectable } from '@angular/core';
import { taskMethods } from '../models/ITasks.interface';
import { Iprojects } from '../models/IProjects.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService implements taskMethods {

  private projects: Iprojects[] = [
    {
        title: 'Website Redesign',
        description: 'Complete overhaul of the company website to improve user experience and modernize the design.',
        tasks: [
            { id: 1, title: 'Design Mockups', description: 'Create design mockups for the new website layout.', completed: false },
            { id: 2, title: 'Content Review', description: 'Review and update the website content for accuracy and relevance.', completed: true },
            { id: 3, title: 'Development', description: 'Implement the new design using modern web technologies.', completed: false }
        ]
    },
    {
        title: 'Marketing Campaign',
        description: 'Launch a new marketing campaign to increase brand awareness and attract new customers.',
        tasks: [
            { id: 4, title: 'Market Research', description: 'Conduct market research to identify target audience and preferences.', completed: true },
            { id: 5, title: 'Create Ad Content', description: 'Develop compelling ad content for social media and online platforms.', completed: false },
            { id: 6, title: 'Launch Campaign', description: 'Execute the marketing campaign across various channels.', completed: false }
        ]
    },
    {
        title: 'Product Development',
        description: 'Develop a new product line to expand the company’s offerings and meet customer demand.',
        tasks: [
            { id: 7, title: 'Ideation', description: 'Brainstorm and outline potential product ideas.', completed: true },
            { id: 8, title: 'Prototype', description: 'Create prototypes of the most promising product ideas.', completed: false },
            { id: 9, title: 'Testing', description: 'Test the prototypes and gather feedback for improvements.', completed: false }
        ]
    }
];

  getItems() {
    return this.projects
  }

  addItems(projects: Iprojects): any {
    this.projects.push(projects);
  }

  deleteItems() {}
}
