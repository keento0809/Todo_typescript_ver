import React from "react";

const TaskItem = () => {
  return (
    <div>
      <p>Task title is here.</p>
      <div className="actionButtons">
        <button>EDIT</button>
        <button>DELETE</button>
        <button>DONE</button>
      </div>
    </div>
  );
};

export default TaskItem;
