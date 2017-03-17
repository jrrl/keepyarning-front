import React, { PropTypes } from 'react';
import Section from 'grommet/components/Section';

import DetailsPanel from './DetailsPanel';
import ImagePanel from './ImagePanel';

const Item = ({ images, name, price, description, colors, materials, onAddToCart }) => (
	<Section direction="row" pad={{ between: 'medium' }}>
		<ImagePanel images={images} />
		<DetailsPanel
			name={name} price={price} description={description}
			colors={colors} materials={materials} onAddToCart={onAddToCart}
		/>
	</Section>
);

Item.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	colors: PropTypes.arrayOf(PropTypes.string).isRequired,
	materials: PropTypes.arrayOf(PropTypes.string).isRequired,
	images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
	onAddToCart: PropTypes.func.isRequired
};

export default Item;
