import React, { ReactNode, useReducer } from "react";
import TaskContext from "./task-context";
import TaskReducer from "../reducers/TaskReducer";
import { TaskContextObj } from "./task-context";
import { add } from "../actions/task-actions";
import { Task, initialStateType } from "../models/Task";

// type children = {
//   children: ReactNode;
// };
// type Props = {
//   children: JSX.Element;
// };

// original code
// const TaskProvider: React.FC<> = ({ children }: Props) => {
const TaskProvider: React.FC<{ children: ReactNode }> = (props) => {
  const initialState: initialStateType = {
    tasks: [],
  };
  const [tasksState, dispatch] = useReducer(TaskReducer, initialState);

  const handleAddTask = (task: Task) => {
    // original code
    // dispatch(add(task));
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
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
