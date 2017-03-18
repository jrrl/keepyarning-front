import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Image from 'grommet/components/Image';
import Columns from 'grommet/components/Columns';

const SAMPLE_DATA = [
	{ image: 'https://placehold.it/200x200', name: 'Sample', description: 'Lorem Ipsum', price: 100, code: 'prod1' },
	{ image: 'https://placehold.it/200x200', name: 'Sample', description: 'Lorem Ipsum', price: 100, code: 'prod2' },
	{ image: 'https://placehold.it/200x200', name: 'Sample', description: 'Lorem Ipsum', price: 100, code: 'prod3' },
	{ image: 'https://placehold.it/200x200', name: 'Sample', description: 'Lorem Ipsum', price: 100, code: 'prod4' },
	{ image: 'https://placehold.it/200x200', name: 'Sample', description: 'Lorem Ipsum', price: 100, code: 'prod5' },
	{ image: 'https://placehold.it/200x200', name: 'Sample', description: 'Lorem Ipsum', price: 100, code: 'prod6' },
	{ image: 'https://placehold.it/200x200', name: 'Sample', description: 'Lorem Ipsum', price: 100, code: 'prod7' },
	{ image: 'https://placehold.it/200x200', name: 'Sample', description: 'Lorem Ipsum', price: 100, code: 'prod8' },
	{ image: 'https://placehold.it/200x200', name: 'Sample', description: 'Lorem Ipsum', price: 100, code: 'prod9' },
	{ image: 'https://placehold.it/200x200', name: 'Sample', description: 'Lorem Ipsum', price: 100, code: 'prod0' },
	{ image: 'https://placehold.it/200x200', name: 'Sample', description: 'Lorem Ipsum', price: 100, code: 'prod11' },
	{ image: 'https://placehold.it/200x200', name: 'Sample', description: 'Lorem Ipsum', price: 100, code: 'prod12' },
	{ image: 'https://placehold.it/200x200', name: 'Sample', description: 'Lorem Ipsum', price: 100, code: 'prod13' },
	{ image: 'https://placehold.it/200x200', name: 'Sample', description: 'Lorem Ipsum', price: 100, code: 'prod14' },
	{ image: 'https://placehold.it/200x200', name: 'Sample', description: 'Lorem Ipsum', price: 100, code: 'prod15' }
];

const Item = props => (
	<Box size="small" pad="small">
		<Link to={`/store/${props.code}`}>
			<Image src={props.image} />
		</Link>
		<Link to={`/store/${props.code}`}>
			<Label>{props.name}</Label>
		</Link>
		{`Php ${props.price}`}<br />
		{props.description}
	</Box>
);

Item.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	code: PropTypes.string.isRequired
};

const ItemGrid = props => (
	<Columns size="small">
		{props.items.map(item => <Item key={item.code} {...item} />)}
	</Columns>
);

ItemGrid.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object)
};

ItemGrid.defaultProps = {
	items: SAMPLE_DATA
};

export default ItemGrid;
