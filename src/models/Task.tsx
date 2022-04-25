export interface Task {
  content: string;
  dueDate: string;
  isDone: boolean;
}

export type initialStateType = {
  tasks: Task[];
};
