import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Image from 'grommet/components/Image';
import Columns from 'grommet/components/Columns';
import Select from 'grommet/components/Select';
import Sort from 'grommet-addons/components/Sort';
import FormField from 'grommet/components/FormField';

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

const SORT_OPTIONS = [
	{ label: 'Date Added', value: 'dateAdded' },
	{ label: 'Price', value: 'price' }
];

const DISPLAY_OPTIONS = ['20', '40', '60', '80', '100'];

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
	<Box flex>
		<Box direction="row" justify="between">
			<Sort options={SORT_OPTIONS} onChange={obj => console.log(obj)} />
			<Select options={DISPLAY_OPTIONS} placeHolder="Display Count" />
		</Box>
		<Columns size="small" justify="between">
			{props.items.map(item => <Item key={item.code} {...item} />)}
		</Columns>
	</Box>
);

ItemGrid.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object)
};

ItemGrid.defaultProps = {
	items: SAMPLE_DATA
};

export default ItemGrid;
