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
      <li key={props.index}>
        <div className="" style={{ minHeight: "30px" }}>
          {!props.isEditing && (
            <p style={{ margin: 0 }}>{props.task.content}</p>
          )}
          {props.isEditing && props.index !== props.selected && (
            <p style={{ margin: 0 }}>{props.task.content}</p>
          )}
          {props.isEditing && props.index === props.selected && (
            <input
              type="text"
              placeholder={props.task.content}
              onChange={handleTesting}
              ref={updateTaskInput}
              style={{ display: "block" }}
            />
          )}
        </div>
        <span>{props.task.dueDate}</span>
        <span
          onClick={props.handleDeleteTask.bind(null, props.task.content)}
          style={{ cursor: "pointer" }}
        >
          {"🗑"}
        </span>
        <span
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
          style={{
            display: "inline-block",
            padding: "0.2rem 0.8rem",
            marginLeft: "1rem",
            border: "1px solid #333",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {props.isEditing && props.index === props.selected
            ? "UPDATE"
            : "Edit"}
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
        >
          {props.task.isDone ? "✅" : ">DONE"}
        </span>
      </li>
    </div>
  );
};

export default TaskItem;
