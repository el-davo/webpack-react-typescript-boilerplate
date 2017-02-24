import { takeEvery } from 'redux-saga';
import { select, call, put } from 'redux-saga/effects';
import { FETCH_TODO_LIST } from '../todo.action-types';
import { updateTodoList } from '../todo.actions';
import { fetchTodoList } from '../todo.service';

function* fetch() {
  try {
    let todoList = yield call(fetchTodoList);

    yield put(updateTodoList(todoList));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchTodoListSaga() {
  yield* takeEvery(FETCH_TODO_LIST, fetch);
}