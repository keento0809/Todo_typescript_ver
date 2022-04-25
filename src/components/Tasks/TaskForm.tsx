import React, { useContext, useRef } from "react";
import TaskContext from "../../contexts/task-context";

const TaskForm = () => {
  const taskCtx = useContext(TaskContext);
  const taskInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("WTF");

    const inputText = taskInputRef.current!.value;

    if (inputText.trim().length === 0) {
      alert("Invalid input");
      return;
    }

    taskCtx.addTask({
      content: inputText,
      dueDate: "22/03/31",
      isDone: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={taskInputRef} />
      <button>ADD</button>
    </form>
  );
};

export default TaskForm;
