import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from './Main';

const routes = () => (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute />
		</Route>
	</Router>
);

export default routes;
