export interface Task {
  taskId: string;
  content: string;
  dueDate: string;
  isDone: boolean;
}

export interface initialStateType {
  tasks: Task[];
}

// test
export interface PropsChildren {
  children?: React.ReactNode;
}

export interface TaskContextObj {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (content: string) => void;
  updateTask: (task: Task, content: string) => void;
  //   doneTask: () => void;
}

export interface TaskItemType {
  isEditing: boolean;
  task: Task;
  index: number;
  selected: number;
  handleUpdateTask: (task: Task, content: string) => void;
  handleOpenEditForm: (index: number) => void;
  handleDeleteTask: (content: string) => void;
}
