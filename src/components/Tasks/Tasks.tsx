import React from "react";
import TaskForm from "./TaskForm";
import SearchTask from "./SearchTask";
import TasksList from "./TasksList";

const Tasks = () => {
  return (
    <div>
      <TaskForm />
      {/* <SearchTask /> */}
      <TasksList />
    </div>
  );
};

export default Tasks;
