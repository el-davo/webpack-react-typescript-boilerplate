import * as React from 'react';
import {hashHistory, Route, Router} from 'react-router';
import TodoContainer from './todo/todo.container';

export const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={TodoContainer}/>
  </Router>
);
