import React from "react";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";

const Tasks = () => {
  return (
    <div className="pl-4 pr-4">
      <TaskForm />
      <TasksList />
    </div>
  );
};

export default Tasks;
