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
  // event: React.FormEvent
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
    <form onSubmit={handleSubmit} className="py-4">
      <h3 className="text-xl font-bold">Add task</h3>
      <input
        type="text"
        style={{ outline: "none" }}
        ref={taskInputRef}
        placeholder="Text here"
        className="input input-bordered input-primary w-full max-w-xs p-2"
      ></input>
      <button className="btn btn-outline btn-primary">ADD</button>
    </form>
  );
};

export default TaskForm;
