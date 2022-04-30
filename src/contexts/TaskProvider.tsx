import React, { ReactNode, useReducer } from "react";
import TaskContext from "./task-context";
import TaskReducer from "../reducers/TaskReducer";
import { TaskContextObj } from "../models/Task";
import { add } from "../actions/task-actions";
import { Task, initialStateType, PropsChildren } from "../models/Task";

const TaskProvider: React.FC<PropsChildren> = ({ children }) => {
  const initialState: initialStateType = {
    tasks: [],
  };
  const [tasksState, dispatch] = useReducer(TaskReducer, initialState);

  const handleAddTask = (task: Task) => {
    dispatch({ type: "ADD", payload: task });
  };

  const handleUpdateTask = (task: Task, content: string) => {
    dispatch({ type: "UPDATE", payload: task, content });
  };

  const handleRemoveTask = (content: string) => {
    dispatch({ type: "REMOVE", payload: content });
  };

  const taskContextValue: TaskContextObj = {
    tasks: tasksState.tasks,
    addTask: handleAddTask,
    removeTask: handleRemoveTask,
    updateTask: handleUpdateTask,
    // doneTask: () => {},
  };

  return (
    <TaskContext.Provider value={taskContextValue}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
