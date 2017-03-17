import React, { Component, PropTypes } from 'react';
import autobind from 'react-autobind';

import Item from './Item';

const ITEM_PLACEHOLDER = {
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
		// {
		// 	original: 'https://placehold.it/570x570',
		// 	thumbnail: 'https://placehold.it/96x96',
		// },
	]
};

const addToCart = (state) => {
	// do nothing
	console.log(`added product ${state.itemId} to cart`);
};

const getItem = (itemId) => {
	const state = ITEM_PLACEHOLDER;
	state.itemId = itemId;
	return state;
};

class ItemContainer extends Component {
	constructor(props) {
		super(props);
		this.state = getItem(props.params.itemCode);

		autobind(this);
	}

	handleAddToCart() {
		this.setState(addToCart);
	}

	render() {
		return (
			<Item
				name={this.state.name}
				price={this.state.price}
				colors={this.state.colors}
				materials={this.state.materials}
				images={this.state.images}
				description={this.state.description}
				onAddToCart={this.handleAddToCart}
			/>
		);
	}
}

ItemContainer.propTypes = {
	params: PropTypes.any.isRequired
}

export default ItemContainer;
