import React, { useRef, useState } from "react";
import { Task, TaskItemType } from "../../models/Task";

const TaskItem: React.FC<TaskItemType> = ({
  isEditing,
  task,
  index,
  selected,
  handleUpdateTask,
  handleOpenEditForm,
  handleDeleteTask,
}) => {
  // declare useRef
  const updateTaskInput = useRef<HTMLInputElement>(null);
  // declare useState
  const [testInput, setTestInput] = useState("");

  const handleCheckTextInput = () => {
    setTestInput(updateTaskInput.current!.value);
  };

  return (
    <div>
      <div className="card w-100 bg-primary shadow-xl mb-4">
        <div className="card-body">
          <div className="min-h-12">
            {!isEditing && (
              <h2 className="card-title text-white text-2xl">{task.content}</h2>
            )}
            {isEditing && index !== selected && (
              <h2 className="card-title text-white text-2xl">{task.content}</h2>
            )}
            {isEditing && index === selected && (
              <input
                type="text"
                placeholder={task.content}
                onChange={handleCheckTextInput}
                ref={updateTaskInput}
                className="input input-bordered input-primary w-full max-w-xs bg-secondary text-white text-2xl"
              />
            )}
          </div>
          <p className="text-white">Until {task.dueDate}</p>
          <div className="card-actions justify-end">
            <span
              onClick={handleDeleteTask.bind(null, task.content)}
              style={{
                cursor: "pointer",
                lineHeight: "48px",
                fontSize: "24px",
              }}
            >
              {"🗑"}
            </span>
            <button
              className="btn btn-outline btn-secondary"
              onClick={
                !isEditing
                  ? handleOpenEditForm.bind(null, index)
                  : handleUpdateTask.bind(null, task, testInput)
              }
            >
              {isEditing && index === selected ? "UPDATE" : "Edit"}
            </button>
            <button className="btn btn-outline btn-secondary">
              {task.isDone ? "✅" : "DONE"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;

// className="input input-bordered input-primary w-full max-w-xs"
