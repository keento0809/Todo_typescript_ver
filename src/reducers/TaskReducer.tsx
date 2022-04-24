import React from "react";
import { Task } from "../models/Task";

const initialState = {
  tasks: [],
  addTask: (task: Task) => {},
};

type ACTIONTYPE = { type: "ADD"; payload: Task };

const TaskReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return state;
    }
  }
};

export default TaskReducer;
