import React from "react";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";

const Tasks = () => {
  return (
    <div style={{ paddingLeft: "1rem" }}>
      <TaskForm />
      <TasksList />
    </div>
  );
};

export default Tasks;
