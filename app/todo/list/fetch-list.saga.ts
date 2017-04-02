import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {FETCH_TODO_LIST} from '../todo.action-types';
import {fetchTodoListFailed, updateTodoList} from '../todo.actions';
import {fetchTodoList} from '../todo.service';

function* fetch() {
  try {
    const todoList = yield call(fetchTodoList);

    yield put(updateTodoList(todoList));
  } catch (err) {
    yield put(fetchTodoListFailed());
  }
}

export function* fetchTodoListSaga() {
  yield* takeEvery(FETCH_TODO_LIST, fetch);
}
