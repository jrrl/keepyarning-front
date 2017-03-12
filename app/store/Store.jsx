import React from 'react';
import Split from 'grommet/components/Split';

import ItemGrid from './ItemGrid';
import Filter from './Filter';

const Store = () => (
	<Split flex="right" separator={false}>
		<Filter />
		<ItemGrid />
	</Split>
);

export default Store;
