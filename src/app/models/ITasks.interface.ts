import { Iprojects } from "./IProjects.interface";

export interface Task {
    id?: number;
    title?: string;
    description?: string;
    completed?: boolean;
  }

export interface taskMethods {
  getItems(): any,
  addItems(task: Iprojects | Task): any,
  deleteItems(task: Iprojects | Task): any
}