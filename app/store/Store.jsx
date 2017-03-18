import React, { PropTypes } from 'react';
import Section from 'grommet/components/Section';

import ItemGrid from './ItemGrid';
import Filter from './Filter';

const Store = () => (
	<Section direction="row" pad={{ between: 'medium' }}>
		<Filter />
		<ItemGrid />
	</Section>
);

export default Store;
