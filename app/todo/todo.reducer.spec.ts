import { FETCH_TODO_LIST, UPDATE_TODO_LIST, FETCH_TODO_LIST_FAILED } from './todo.action-types';
import { todoReducer } from './todo.reducer';
import { todo, TodoItem, TodoState } from './todo.state';

describe('Todo Reducer', () => {

    describe('FETCH_TODO_LIST', () => {

        it('should update apps list', () => {
            let action = { type: FETCH_TODO_LIST };
            let state = { ...todo, isFetchingTodos: false };

            todoReducer(todo, action).should.eql({ ...todo, isFetchingTodos: true });
        });
    });

    describe('UPDATE_TODO_LIST', () => {

        it('should update apps list', () => {
            let action = { type: UPDATE_TODO_LIST, todoList: [{ id: "1", name: 'test', description: 'test' }] };
            let state = { ...todo, todoList: [] };

            todoReducer(state, action).should.eql({ ...todo, isFetchingTodos: false, todoList: action.todoList });
        });
    });

    describe('FETCH_TODO_LIST_FAILED', () => {

        it('should update apps list', () => {
            let action = { type: FETCH_TODO_LIST_FAILED };
            let state = { ...todo, isFetchingTodos: true };

            todoReducer(state, action).should.eql({ ...todo, isFetchingTodos: false });
        });
    });
});