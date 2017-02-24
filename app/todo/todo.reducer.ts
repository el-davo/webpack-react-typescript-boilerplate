import { FETCH_TODO_LIST, UPDATE_TODO_LIST } from './todo.action-types';
import { todo, todoState, todoItem } from './todo.state';

interface action {
  type: string;
  todoList?: Array<todoItem>;
}

export function todoReducer(state: todoState = todo, action: action): todoState {
  switch (action.type) {
    case FETCH_TODO_LIST:
      return { ...state, isFetchingTodos: true };
    case UPDATE_TODO_LIST:
      return { ...state, todoList: action.todoList, isFetchingTodos: false }
    default:
      return state;
  }
}