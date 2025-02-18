import { atom } from "jotai";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Send invites for party",
    done: true,
  },
  {
    id: 2,
    title: "Buy groceries",
    done: false,
  },
];

export const NewTask = atom("");
export const Task = atom<Task[]>(initialTasks);
