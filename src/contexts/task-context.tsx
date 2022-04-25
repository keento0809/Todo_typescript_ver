import React from "react";
import { Task } from "../models/Task";

export interface TaskContextObj {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (content: string) => void;
  //   updateTask: (id: string) => void;
  //   doneTask: () => void;
}

const TaskContext = React.createContext<TaskContextObj>({
  tasks: [],
  addTask: () => {},
  removeTask: (content: string) => {},
  //   updateTask: (id: string) => {},
  //   doneTask: () => {},
});

export default TaskContext;
