import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from './Main';
import Home from './home/Home';
import Store from './store/Store';
import Item from './item/Item';

const routes = () => (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
			<Route path="/store" component={Store} />
			<Route path="/store/:itemCode" component={Item} />
		</Route>
	</Router>
);

export default routes;
