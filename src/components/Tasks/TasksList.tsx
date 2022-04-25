import React, { useContext, useEffect } from "react";
import TaskItem from "./TaskItem";
import TaskContext from "../../contexts/task-context";
import { Task } from "../../models/Task";

const TasksList = () => {
  const taskCtx = useContext(TaskContext);

  const handleUpdateTask = (task: Task) => {
    taskCtx.updateTask(task);
  };

  const handleDeleteTask = (content: string) => {
    taskCtx.removeTask(content);
  };

  useEffect(() => {
    console.log(taskCtx.tasks);
  }, [taskCtx.tasks]);

  return (
    <ul style={{ listStyle: "none" }}>
      {taskCtx.tasks.map((task, index) => {
        return (
          <li key={index}>
            <p>{task.content}</p>
            <span>{task.dueDate}</span>
            <span onClick={handleDeleteTask.bind(null, task.content)}>
              {"🗑"}
            </span>
            <span
              onClick={handleUpdateTask.bind(null, task)}
              style={{
                display: "inline-block",
                padding: "0.2rem 0.8rem",
                marginLeft: "1rem",
                border: "1px solid #333",
                borderRadius: "8px",
              }}
            >
              {"Edit"}
            </span>
            <span
              style={{
                display: "inline-block",
                padding: "0.2rem 0.8rem",
                marginLeft: "1rem",
                border: "1px solid #333",
                borderRadius: "8px",
              }}
            >
              {task.isDone ? "✅" : "> DONE"}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default TasksList;
