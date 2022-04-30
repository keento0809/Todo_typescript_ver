import React from "react";
import { Task, TaskContextObj } from "../models/Task";

const TaskContext = React.createContext<TaskContextObj>({
  tasks: [],
  addTask: () => {},
  removeTask: (content: string) => {},
  updateTask: (task: Task) => {},
  //   doneTask: () => {},
});

export default TaskContext;
