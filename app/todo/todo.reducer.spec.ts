import {FETCH_TODO_LIST, FETCH_TODO_LIST_FAILED, UPDATE_TODO_LIST} from './todo.action-types';
import {todoReducer} from './todo.reducer';
import {todo} from './todo.state';

describe('Todo Reducer', () => {

  describe('FETCH_TODO_LIST', () => {

    it('should update apps list', () => {
      const action = {type: FETCH_TODO_LIST};
      const state = {...todo, isFetchingTodos: false};

      todoReducer(todo, action).should.eql({...todo, isFetchingTodos: true});
    });
  });

  describe('UPDATE_TODO_LIST', () => {

    it('should update apps list', () => {
      const action = {type: UPDATE_TODO_LIST, todoList: [{id: '1', name: 'test', description: 'test'}]};
      const state = {...todo, todoList: []};

      todoReducer(state, action).should.eql({...todo, isFetchingTodos: false, todoList: action.todoList});
    });
  });

  describe('FETCH_TODO_LIST_FAILED', () => {

    it('should update apps list', () => {
      const action = {type: FETCH_TODO_LIST_FAILED};
      const state = {...todo, isFetchingTodos: true};

      todoReducer(state, action).should.eql({...todo, isFetchingTodos: false});
    });
  });
});
