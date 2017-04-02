import {hashHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import * as createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from '../rootReducer';
import {rootSaga} from '../rootSaga';

const logger = createLogger({
  collapsed: true,
  level: 'debug'
});
const router = routerMiddleware(hashHistory);
const sagaMiddleware = createSagaMiddleware();

declare const window: any;
declare const module: any;

const enhancer = compose(
  applyMiddleware(reduxImmutableStateInvariant(), sagaMiddleware, router, logger),
  window.devToolsExtension ? window.devToolsExtension() : (noop) => noop
);

export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../rootReducer', () =>
      store.replaceReducer(require('../rootReducer').default)
    );
  }

  return store;
}
