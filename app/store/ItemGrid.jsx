import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';

const SAMPLE_DATA = [
	{ image: 'https://placehold.it/200x200', name: 'Sample 1', description: 'Lorem Ipsum' },
	{ image: 'https://placehold.it/200x200', name: 'Sample 2', description: 'Lorem Ipsum' },
	{ image: 'https://placehold.it/200x200', name: 'Sample 3', description: 'Lorem Ipsum' },
	{ image: 'https://placehold.it/200x200', name: 'Sample 4', description: 'Lorem Ipsum' },
	{ image: 'https://placehold.it/200x200', name: 'Sample 5', description: 'Lorem Ipsum' },
	{ image: 'https://placehold.it/200x200', name: 'Sample 51', description: 'Lorem Ipsum' },
	{ image: 'https://placehold.it/200x200', name: 'Sample 52', description: 'Lorem Ipsum' },
	{ image: 'https://placehold.it/200x200', name: 'Sample 53', description: 'Lorem Ipsum' },
	{ image: 'https://placehold.it/200x200', name: 'Sample 54', description: 'Lorem Ipsum' },
	{ image: 'https://placehold.it/200x200', name: 'Sample 55', description: 'Lorem Ipsum' },
	{ image: 'https://placehold.it/200x200', name: 'Sample 6', description: 'Lorem Ipsum' }
];

const Item = props => (
	<Tile>
		<Card
			size="small" thumbnail={props.image} label={props.name}
			description={props.description} textSize="small"
		/>
	</Tile>
);

Item.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

const ItemGrid = props => (
	<Box>
		<Tiles fill flush={false} size="small" selectable>
			{props.items.map(item => <Item key={item.name} {...item} />)}
		</Tiles>
	</Box>
);

ItemGrid.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object)
};

ItemGrid.defaultProps = {
	items: SAMPLE_DATA
};

export default ItemGrid;
