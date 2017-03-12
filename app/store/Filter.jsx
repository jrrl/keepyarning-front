import React, { PropTypes } from 'react';
import Sidebar from 'grommet/components/Sidebar';
import Label from 'grommet/components/Label';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import { Range } from 'rc-slider';

const CollectionBlock = props => (
	<Box>
		<Heading tag="h4">CATEGORIES</Heading>
		<List selectable>
			{props.categories.map(name => (<ListItem key={name}>{name}</ListItem>))}
		</List>
	</Box>
);

CollectionBlock.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

CollectionBlock.defaultProps = {
	categories: ['Home', 'Kitchen', 'Decor', 'Pets']
};

const FilterBlock = () => (
	<Box>
		<Heading tag="h4">FILTER</Heading>
		<Label>Price (PHP)</Label>
		<Range min={0} max={100000} defaultValue={[0, 100000]} style={{ width: '315px' }} />
	</Box>
);

const Filter = () => (
	<Sidebar full={false} pad={{ between: 'large' }}>
		<CollectionBlock />
		<FilterBlock />
	</Sidebar>
);

export default Filter;
