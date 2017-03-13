import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Image from 'grommet/components/Image';
import Value from 'grommet/components/Value';
import Paragraph from 'grommet/components/Paragraph';
import Title from 'grommet/components/Title';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Button from 'grommet/components/Button';
import CartIcon from 'grommet/components/icons/base/Cart';

const ImageBlock = props => (
	<Box pad={{ between: 'small' }} full={false} flex direction="row">
		<Box>
			<Box pad={{ between: 'small' }} size="xsmall">
				{props.images.map(image => <Image src={image.thumbnail} />)}
			</Box>
		</Box>
		<Box size="large">
			<Image src={props.images[0].original} fit="cover" />
		</Box>
	</Box>
);

ImageBlock.propTypes = {
	images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
};

const DetailsBlock = props => (
	<Box pad={{ between: 'medium' }} size="medium" >
		<Box>
			<Title>{props.name}</Title>
			<Value value={props.price} units="Php" align="start" />
			<Paragraph>{props.description}</Paragraph>
		</Box>
		<Box>
			<Button primary icon={<CartIcon />} label="Add to Cart" />
		</Box>
		<Box>
			<Title>Product Details</Title>
			<List >
				<ListItem justify="between">
					<span>Dimensions</span>
					<span>W 0" x H 0" x L 0"</span>
				</ListItem>
				<ListItem justify="between">
					<span>Colors</span>
					<span>red, white, blue</span>
				</ListItem>
				<ListItem justify="between">
					<span>Material</span>
					<span>Cotton</span>
				</ListItem>
			</List>
		</Box>
	</Box>
);

DetailsBlock.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	description: PropTypes.string
};

const Item = props => (
	<Section direction="row" pad={{ between: 'medium' }}>
		<ImageBlock images={props.images} />
		<DetailsBlock name={props.name} price={props.price} description={props.description} />
	</Section>
);

Item.propTypes = {
	name: PropTypes.string.isRequired,
	images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
};

Item.defaultProps = {
	name: 'Sample 1',
	price: 100,
	description: 'Lorem ipsum dolor sit amet, movet scaevola efficiendi nam ut. Sed at illud cotidieque, pro no tale vivendo ocurreret at.',
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
