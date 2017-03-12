import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from './Main';
import Home from './home/Home';
import Store from './store/Store';

const routes = () => (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
			<Route path="/store" component={Store} />
		</Route>
	</Router>
);

export default routes;
