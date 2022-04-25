import React, { useContext, useRef } from "react";
import TaskContext from "../../contexts/task-context";

const TaskForm = () => {
  const taskCtx = useContext(TaskContext);
  const taskInputRef = useRef<HTMLInputElement>(null);

  // create taskId
  function generateTaskId(length: number) {
    var newId = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
      newId += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return newId;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("WTF");

    const inputText = taskInputRef.current!.value;

    if (inputText.trim().length === 0) {
      alert("Invalid input");
      return;
    }

    taskCtx.addTask({
      taskId: generateTaskId(16),
      content: inputText,
      dueDate: "22/03/31",
      isDone: false,
    });
    taskInputRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={taskInputRef} style={{ outline: "none" }} />
      <button>ADD</button>
    </form>
  );
};

export default TaskForm;
