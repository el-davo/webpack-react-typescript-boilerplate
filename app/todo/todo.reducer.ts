import {FETCH_TODO_LIST, FETCH_TODO_LIST_FAILED, UPDATE_TODO_LIST} from './todo.action-types';
import {todo, TodoItem, TodoState} from './todo.state';

interface Action {
  type: string;
  todoList?: TodoItem[];
}

export function todoReducer(state: TodoState = todo, action: Action): TodoState {
  switch (action.type) {
    case FETCH_TODO_LIST:
      return {...state, isFetchingTodos: true};
    case FETCH_TODO_LIST_FAILED:
      return {...state, isFetchingTodos: false};
    case UPDATE_TODO_LIST:
      return {...state, todoList: action.todoList, isFetchingTodos: false};
    default:
      return state;
  }
}
