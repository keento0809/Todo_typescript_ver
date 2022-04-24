import { Task } from "../models/Task";

export const add = (task: Task) => {
  return {
    type: "ADD",
    payload: task,
  };
};
