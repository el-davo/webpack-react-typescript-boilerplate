import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {todoReducer as todo} from './todo/todo.reducer';

export const rootReducer = combineReducers({
  routing,
  todo
});
