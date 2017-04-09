import React, { Component } from 'react';
import autoBind from 'react-autobind';
import Section from 'grommet/components/Section';

import ItemGrid from './ItemGrid';
import Filter from './Filter';

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

class StoreContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: SAMPLE_DATA,
			direction: 'asc'
		};
		autoBind(this);
	}

	render() {
		return (
			<Section direction="row" pad={{ between: 'medium' }}>
				<Filter />
				<ItemGrid
					items={this.state.items}
					direction={this.state.direction}
				/>
			</Section>
		);
	}
}

export default StoreContainer;
