import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const routes = (
	<Router history={hashHistory}>
		<Route path="/">
			<IndexRoute />
		</Route>
	</Router>
);

export default routes;