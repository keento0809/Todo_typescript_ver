import React from "react";
import { Task } from "../models/Task";

const initialState = {
  tasks: [],
  addTask: (task: Task) => {},
};

type ACTIONTYPE = { type: "ADD"; payload: Task };

const TaskReducer = (state: typeof initialState, action: ACTIONTYPE) => {
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
