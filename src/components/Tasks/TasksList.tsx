import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  Fragment,
} from "react";
import TaskItem from "./TaskItem";
import TaskContext from "../../contexts/task-context";
import { Task } from "../../models/Task";

const TasksList = () => {
  // declare useContext
  const taskCtx = useContext(TaskContext);

  // declare useState
  // test
  const [tasksDisplayed, setTasksDisplayed] = useState(taskCtx.tasks);
  const [isEditing, setIsEditing] = useState(false);
  const [selected, setSelected] = useState(0);

  // declare useRef
  const updateTaskInput = React.useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleOpenEditForm = (index: number) => {
    console.log("Now,,, open editForm");
    setSelected(index);
    setIsEditing(true);
  };

  const handleUpdateTask = (task: Task, content: string) => {
    console.log("Now,,, update task");
    // original code
    // const enteredTaskContent = updateTaskInput.current!.value;
    // test
    const enteredTaskContent = content;
    if (enteredTaskContent.length === 0) {
      alert("Invalid input");
      return;
    }
    taskCtx.updateTask(task, enteredTaskContent);
    setIsEditing(false);
  };

  const handleDeleteTask = (content: string) => {
    taskCtx.removeTask(content);
  };

  useEffect(() => {
    setTasksDisplayed(taskCtx.tasks);
  }, [taskCtx.tasks]);

  const handleCheckSearchWord = () => {
    const searchVal = searchInputRef.current!.value;
    const filteredTasks = taskCtx.tasks.filter((task) =>
      task.content.includes(searchVal)
    );
    setTasksDisplayed(filteredTasks);
  };

  return (
    <Fragment>
      <div>
        <h3>Search task</h3>
        <input
          type="text"
          ref={searchInputRef}
          style={{ outline: "none" }}
          onChange={handleCheckSearchWord}
        />
      </div>
      <ul className="fond-bold" style={{ listStyle: "none", paddingLeft: 0 }}>
        {tasksDisplayed.length === 0 && <p>No tasks found.</p>}
        {/* original code */}
        {/* {taskCtx.tasks.map((task, index) => { */}
        {tasksDisplayed.map((task, index) => {
          return (
            <TaskItem
              key={index}
              isEditing={isEditing}
              task={task}
              index={index}
              selected={selected}
              handleUpdateTask={handleUpdateTask}
              handleOpenEditForm={handleOpenEditForm}
              handleDeleteTask={handleDeleteTask}
            />
          );
        })}
      </ul>
    </Fragment>
  );
};

export default TasksList;
