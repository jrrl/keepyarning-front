import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import Value from 'grommet/components/Value';
import Paragraph from 'grommet/components/Paragraph';
import Button from 'grommet/components/Button';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import CartIcon from 'grommet/components/icons/base/Cart';
import Heading from 'grommet/components/Heading';

const DetailsPanel = ({ name, price, description, colors, materials, onAddToCart }) => (
	<Box pad={{ between: 'medium' }} size="medium" >
		<Box>
			<Title>{name}</Title>
			<Value value={price} icon={<Heading tag="h2" margin="none" strong>Php </Heading>} align="start" />
			<Paragraph>{description}</Paragraph>
		</Box>
		<Box>
			<Button primary icon={<CartIcon />} label="Add to Cart" onClick={onAddToCart} />
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
					<span>{colors.join()}</span>
				</ListItem>
				<ListItem justify="between">
					<span>Material</span>
					<span>{materials.join()}</span>
				</ListItem>
			</List>
		</Box>
	</Box>
);

DetailsPanel.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	colors: PropTypes.arrayOf(PropTypes.string).isRequired,
	materials: PropTypes.arrayOf(PropTypes.string).isRequired,
	onAddToCart: PropTypes.func.isRequired
};

export default DetailsPanel;
