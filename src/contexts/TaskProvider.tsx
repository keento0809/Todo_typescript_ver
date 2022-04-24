import React, { ReactNode, useReducer } from "react";
import TaskContext from "./task-context";
import TaskReducer from "../reducers/TaskReducer";
import { TaskContextObj } from "./task-context";
import { add } from "../actions/task-actions";
import { Task } from "../models/Task";

type children = {
  children: ReactNode;
};
type Props = {
  children: JSX.Element;
};

const TaskProvider: React.FC<any> = ({ children }: Props) => {
  const initialState = { tasks: [] };
  const [tasksState, dispatchAction] = useReducer(TaskReducer, initialState);

  const handleAddTask = (task: Task) => {
    // original code
    dispatchAction(add(task));
  };

  const taskContextValue: TaskContextObj = {
    tasks: tasksState.tasks,
    addTask: handleAddTask,
    // updateTask: (id: string) => {},
    // removeTask: (id: string) => {},
    // doneTask: () => {},
  };

  return (
    <TaskContext.Provider value={taskContextValue}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
