import React, { ReactNode, useReducer } from "react";
import TaskContext from "./task-context";
import TaskReducer from "../reducers/TaskReducer";
import { add } from "../actions/task-actions";
import { Task } from "../models/Task";

type children = {
  children: ReactNode;
};

const TaskProvider: React.FC = (props: children) => {
  const initialState = { tasks: [] };
  const [tasksState, dispatchAction] = useReducer(TaskReducer, initialState);

  const handleAddTask = (task: Task) => {
    dispatchAction(add(task));
  };

  const taskContextValue = {
    tasks: tasksState.tasks,
    addTask: handleAddTask,
    // updateTask: (id: string) => {},
    // removeTask: (id: string) => {},
    // doneTask: () => {},
  };

  return (
    <TaskContext.Provider value={taskContextValue}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
