import React from "react";
import { Task } from "../models/Task";

export interface TaskContextObj {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (content: string) => void;
  updateTask: (task: Task, content: string) => void;
  //   doneTask: () => void;
}

const TaskContext = React.createContext<TaskContextObj>({
  tasks: [],
  addTask: () => {},
  removeTask: (content: string) => {},
  updateTask: (task: Task) => {},
  //   doneTask: () => {},
});

export default TaskContext;
