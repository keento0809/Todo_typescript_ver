import React, { useContext, useEffect, useState, useRef } from "react";
import TaskItem from "./TaskItem";
import TaskContext from "../../contexts/task-context";
import { Task } from "../../models/Task";

const TasksList = () => {
  const taskCtx = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);

  const updateTaskInput = useRef<HTMLInputElement>(null);

  const handleOpenEditForm = (e: any) => {
    setIsEditing(true);
  };

  const handleUpdateTask = (task: Task, content: string) => {
    const enteredTaskContent = updateTaskInput.current!.value;

    if (
      enteredTaskContent!.trim().length === 0 ||
      enteredTaskContent === undefined
    ) {
      alert("Invalid input");
      return;
    }
    console.log(enteredTaskContent);
    // I also need to forward enteredTaskContent: string
    taskCtx.updateTask(task, enteredTaskContent);
    setIsEditing(false);
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
            <div className="" style={{ minHeight: "30px" }}>
              {!isEditing && <p style={{ margin: 0 }}>{task.content}</p>}
              {isEditing && (
                <input
                  type="text"
                  placeholder={task.content}
                  ref={updateTaskInput}
                  style={{ display: "block" }}
                />
              )}
            </div>
            <span>{task.dueDate}</span>
            <span onClick={handleDeleteTask.bind(null, task.content)}>
              {"🗑"}
            </span>
            <span
              onClick={
                !isEditing
                  ? handleOpenEditForm
                  : handleUpdateTask.bind(null, task, task.content)
              }
              style={{
                display: "inline-block",
                padding: "0.2rem 0.8rem",
                marginLeft: "1rem",
                border: "1px solid #333",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              {!isEditing ? "Edit" : "UPDATE"}
            </span>
            <span
              style={{
                display: "inline-block",
                padding: "0.2rem 0.8rem",
                marginLeft: "1rem",
                border: "1px solid #333",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              // onClick={handleUpdateTask.bind(null, task, task.content)}
            >
              {task.isDone ? "✅" : ">DONE"}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default TasksList;
