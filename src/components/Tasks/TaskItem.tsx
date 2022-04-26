import React, { useRef, useState } from "react";
import { Task } from "../../models/Task";

const TaskItem: React.FC<{
  isEditing: boolean;
  task: Task;
  index: number;
  selected: number;
  handleUpdateTask: (task: Task, content: string) => void;
  handleOpenEditForm: (index: number) => void;
  handleDeleteTask: (content: string) => void;
}> = (props) => {
  // declare useRef
  const updateTaskInput = useRef<HTMLInputElement>(null);
  // declare useState
  const [testInput, setTestInput] = useState("");

  const handleTesting = () => {
    setTestInput(updateTaskInput.current!.value);
  };

  return (
    <div>
      <div className="card どこからマージンrightきた w-100 bg-base-100 shadow-xl mb-4">
        <div className="card-body">
          <div className="min-h-12">
            {!props.isEditing && (
              <h2 className="card-title">{props.task.content}</h2>
            )}
            {props.isEditing && props.index !== props.selected && (
              <h2 className="card-title">{props.task.content}</h2>
            )}
            {props.isEditing && props.index === props.selected && (
              <input
                type="text"
                placeholder={props.task.content}
                onChange={handleTesting}
                ref={updateTaskInput}
                className="input input-bordered input-primary w-full max-w-xs"
              />
            )}
          </div>
          <p>Until {props.task.dueDate}</p>
          <div className="card-actions justify-end">
            <span
              onClick={props.handleDeleteTask.bind(null, props.task.content)}
              style={{
                cursor: "pointer",
                lineHeight: "48px",
                fontSize: "24px",
              }}
            >
              {"🗑"}
            </span>
            <button
              className="btn btn-outline btn-primary"
              onClick={
                !props.isEditing
                  ? props.handleOpenEditForm.bind(null, props.index)
                  : props.handleUpdateTask.bind(
                      null,
                      props.task,
                      // original code
                      // props.task.content
                      testInput
                    )
              }
            >
              {props.isEditing && props.index === props.selected
                ? "UPDATE"
                : "Edit"}
            </button>
            <button className="btn btn-outline btn-primary">
              {props.task.isDone ? "✅" : "DONE"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;

// className="input input-bordered input-primary w-full max-w-xs"
