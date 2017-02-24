import {fork} from 'redux-saga/effects';
import {fetchTodoListSaga} from './todo/list/fetch-list.saga';

export default function* rootSaga() {
  yield [
    fork(fetchTodoListSaga)
  ];
}