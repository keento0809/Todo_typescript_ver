import { Task } from "../models/Task";

type add = (task: Task) => {};

export const add: add = (task) => {
  return {
    type: "ADD",
    payload: task,
  };
};
