import {FETCH_TODO_LIST, FETCH_TODO_LIST_FAILED, UPDATE_TODO_LIST} from './todo.action-types';
import {fetchTodoList, fetchTodoListFailed, updateTodoList} from './todo.actions';
import {TodoItem} from './todo.state';

describe('Todo Actions', () => {

  describe('fetchTodoList()', () => {

    it('should fetch a list of todo items', () => {
      fetchTodoList().should.eql({type: FETCH_TODO_LIST});
    });
  });

  describe('updateTodoList()', () => {

    it('should update the todo list items', () => {
      const todoList: TodoItem[] = [{id: '1', name: 'test', description: 'test'}];
      updateTodoList(todoList).should.eql({type: UPDATE_TODO_LIST, todoList});
    });
  });

  describe('fetchTodoListFailed()', () => {

    it('should alert the user that a fetch has failed', () => {
      fetchTodoListFailed().should.eql({type: FETCH_TODO_LIST_FAILED});
    });
  });
});
