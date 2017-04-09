import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Image from 'grommet/components/Image';
import Columns from 'grommet/components/Columns';
import Select from 'grommet/components/Select';
import Sort from 'grommet-addons/components/Sort';
import FormField from 'grommet/components/FormField';

const SORT_OPTIONS = [
	{ label: 'Date Added', value: 'dateAdded' },
	{ label: 'Price', value: 'price' }
];

const DISPLAY_OPTIONS = ['20', '40', '60', '80', '100'];

const Item = ({ code, image, name, price, description }) => (
	<Box size="small" pad="small">
		<Link to={`/store/${code}`}>
			<Image src={image} />
		</Link>
		<Link to={`/store/${code}`}>
			<Label>{name}</Label>
		</Link>
		{`Php ${price}`}<br />
		{description}
	</Box>
);

Item.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	code: PropTypes.string.isRequired
};

const ItemGrid = ({ items, onSort, onChangeDisplay, direction }) => (
	<Box flex>
		<Box direction="row" justify="between">
			<Sort options={SORT_OPTIONS} onChange={onSort} direction={direction} />
			<Select options={DISPLAY_OPTIONS} placeHolder="Display Count" onChange={onChangeDisplay} />
		</Box>
		<Columns size="small" justify="between">
			{items.map(item => <Item key={item.code} {...item} />)}
		</Columns>
	</Box>
);

ItemGrid.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	onSort: PropTypes.func,
	onChangeDisplay: PropTypes.func,
	direction: PropTypes.string.isRequired
};

ItemGrid.defaultProps = {
	onSort: obj => console.log(obj),
	onChangeDisplay: obj => console.log(obj)
};

export default ItemGrid;
