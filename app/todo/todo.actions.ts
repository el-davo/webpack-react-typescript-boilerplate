import {FETCH_TODO_LIST, FETCH_TODO_LIST_FAILED, UPDATE_TODO_LIST} from './todo.action-types';
import {TodoItem} from './todo.state';

export function fetchTodoList() {
  return {type: FETCH_TODO_LIST};
}

export function updateTodoList(todoList: TodoItem[]) {
  return {type: UPDATE_TODO_LIST, todoList};
}

export function fetchTodoListFailed() {
  return {type: FETCH_TODO_LIST_FAILED};
}
