import { FETCH_TODO_LIST, UPDATE_TODO_LIST } from './todo.action-types';
import { todoItem } from './todo.state';

export function fetchTodoList() {
    return { type: FETCH_TODO_LIST };
}

export function updateTodoList(todoList: Array<todoItem>) {
    return { type: UPDATE_TODO_LIST, todoList };
}