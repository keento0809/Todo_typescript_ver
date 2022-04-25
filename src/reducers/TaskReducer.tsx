import React, { ReducerState } from "react";
import { Task, initialStateType } from "../models/Task";

const reducerState: initialStateType = {
  tasks: [],
};

type ACTIONTYPE = { type: "ADD"; payload: Task };

// original code
const TaskReducer = (state: typeof reducerState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "ADD": {
      return {
        tasks: [...state.tasks, action.payload],
      };
    }
    default: {
      throw new Error();
    }
  }
};

export default TaskReducer;
