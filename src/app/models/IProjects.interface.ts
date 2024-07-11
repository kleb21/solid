import { Task } from "./ITasks.interface";

export interface Iprojects {
    title: string;
    description: string;
    tasks: Task[];
}