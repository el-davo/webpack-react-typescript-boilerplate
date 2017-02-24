import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {todoReducer as todo} from './todo/todo.reducer';

export default combineReducers({
  routing,
  todo
});