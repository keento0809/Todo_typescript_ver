import React, { ReducerState } from "react";
import { Task, initialStateType } from "../models/Task";

const reducerState: initialStateType = {
  tasks: [],
};

type ACTIONTYPE =
  | { type: "ADD"; payload: Task }
  | { type: "REMOVE"; payload: string }
  | { type: "UPDATE"; payload: Task };

// original code
const TaskReducer = (state: typeof reducerState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "ADD": {
      return {
        tasks: [...state.tasks, action.payload],
      };
    }
    case "UPDATE": {
      const updatingTaskId = action.payload.taskId;
      const updatingTask = state.tasks.find(
        (task) => task.taskId === updatingTaskId
      );
      return {
        tasks: state.tasks,
      };
    }
    case "REMOVE": {
      const deletingTaskContent = action.payload;
      const renewedTasks = state.tasks.filter(
        (task) => task.content !== deletingTaskContent
      );
      return {
        tasks: renewedTasks,
      };
    }
    default: {
      throw new Error();
    }
  }
};

export default TaskReducer;
