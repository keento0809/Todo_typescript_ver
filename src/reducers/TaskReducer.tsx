import React, { ReducerState } from "react";
import { Task, initialStateType } from "../models/Task";

const reducerState: initialStateType = {
  tasks: [],
};

type ACTIONTYPE =
  | { type: "ADD"; payload: Task }
  | { type: "REMOVE"; payload: string };

// original code
const TaskReducer = (state: typeof reducerState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "ADD": {
      return {
        tasks: [...state.tasks, action.payload],
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
