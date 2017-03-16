import React, { PropTypes } from 'react';
import Section from 'grommet/components/Section';

import DetailsPanel from './DetailsPanel';
import ImagePanel from './ImagePanel';

const Item = ({ images, name, price, description, colors, materials }) => (
	<Section direction="row" pad={{ between: 'medium' }}>
		<ImagePanel images={images} />
		<DetailsPanel
			name={name} price={price} description={description}
			colors={colors} materials={materials}
		/>
	</Section>
);

Item.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	description: PropTypes.string,
	colors: PropTypes.arrayOf(PropTypes.string).isRequired,
	materials: PropTypes.arrayOf(PropTypes.string).isRequired,
	images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
};

Item.defaultProps = {
	name: 'Sample 1',
	price: 100,
	description: 'Lorem ipsum dolor sit amet, movet scaevola efficiendi nam ut. Sed at illud cotidieque, pro no tale vivendo ocurreret at.',
	colors: ['red', 'white', 'gray'],
	materials: ['cotton'],
	images: [
		{
			original: 'https://placehold.it/570x570',
			thumbnail: 'https://placehold.it/96x96',
		},
		{
			original: 'https://placehold.it/570x570',
			thumbnail: 'https://placehold.it/96x96',
		},
		{
			original: 'https://placehold.it/570x570',
			thumbnail: 'https://placehold.it/96x96',
		},
		{
			original: 'https://placehold.it/570x570',
			thumbnail: 'https://placehold.it/96x96',
		},
		{
			original: 'https://placehold.it/570x570',
			thumbnail: 'https://placehold.it/96x96',
		},
	]
};

export default Item;
