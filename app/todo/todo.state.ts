export const todo = {
  isFetchingTodos: false,
  todoList: []
};

export interface TodoState {
  isFetchingTodos: boolean;
  todoList: TodoItem[];
}

export interface TodoItem {
  id: string;
  name: string;
  description: string;
}
