import React, { ReactNode, useReducer } from "react";
import TaskContext from "./task-context";
import TaskReducer from "../reducers/TaskReducer";

type children = {
  children: ReactNode;
};

const TaskProvider: React.FC = (props: children) => {
  const initialState = { tasks: [] };
  const [tasksState, dispatchAction] = useReducer(TaskReducer, initialState);

  const handleAddTask = () => {
    // dispatchAction();
  };

  const taskContextValue = {
    tasks: [],
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
