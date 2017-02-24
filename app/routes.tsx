import * as React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import TodoContainer from './todo/todo.container';

export default (
	<Router history={hashHistory}>
		<Route path="/" component={TodoContainer}>
		</Route>
	</Router>
);