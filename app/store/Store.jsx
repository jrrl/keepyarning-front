import React from 'react';
import Section from 'grommet/components/Section';

import ItemGrid from './ItemGrid';
import Filter from './Filter';

const Store = () => (
	<Section direction="row">
		<Filter />
		<ItemGrid />
	</Section>
);

export default Store;
