export const todo = {
    isFetchingTodos: false,
    todoList: []
}

export interface todoState {
    isFetchingTodos: boolean;
    todoList: Array<todoItem>;
}

export interface todoItem {
    id: string;
    name: string;
    description: string;
}