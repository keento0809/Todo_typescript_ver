export interface Task {
  taskId: string;
  content: string;
  dueDate: string;
  isDone: boolean;
}

export type initialStateType = {
  tasks: Task[];
  // addTask: (task: Task) => void;
};
