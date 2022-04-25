import React from "react";
import { Task } from "../models/Task";

export interface TaskContextObj {
  tasks: Task[];
  addTask: (task: Task) => void;
  //   updateTask: (id: string) => void;
  //   removeTask: (id: string) => void;
  //   doneTask: () => void;
}

const TaskContext = React.createContext<TaskContextObj>({
  tasks: [],
  addTask: () => {},
  //   updateTask: (id: string) => {},
  //   removeTask: (id: string) => {},
  //   doneTask: () => {},
});

export default TaskContext;
