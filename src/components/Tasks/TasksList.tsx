import React, { useContext, useEffect } from "react";
import TaskItem from "./TaskItem";
import TaskContext from "../../contexts/task-context";

const TasksList = () => {
  const taskCtx = useContext(TaskContext);

  useEffect(() => {
    console.log(taskCtx.tasks);
  }, [taskCtx.tasks]);

  return (
    <ul style={{ listStyle: "none" }}>
      <li>task a</li>
      <li>task b</li>
      <li>task c</li>
    </ul>
  );
};

export default TasksList;
