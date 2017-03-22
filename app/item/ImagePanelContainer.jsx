import React, { Component, PropTypes } from 'react';
import autobind from 'react-autobind';

import ImagePanel from './ImagePanel';

const movePage = value => function (state) {
	let page = (state.currentPage + value) % state.pages.length;
	page = page < 0 ? state.pages.length - 1 : page;
	return {
		currentPage: page
	};
};

const selectImage = imageIndex => function (state) {
	return {
		selectedImage: state.pages[state.currentPage][imageIndex].original
	};
};

class ImagePanelContainer extends Component {
	constructor(props) {
		super(props);

		const pages = [];

		for (let i = 0; i < props.images.length; i += 4) {
			pages.push(props.images.slice(i, i + 4));
		}

		this.state = {
			selectedImage: props.images[0].original,
			pages,
			currentPage: 0
		};

		autobind(this);
	}

	handleZoomImage() {
		//
	}

	handlePageUp() {
		this.setState(movePage(-1));
	}

	handlePageDown() {
		this.setState(movePage(1));
	}

	handleImageSelection(selected) {
		this.setState(selectImage(selected));
	}

	render() {
		return (
			<ImagePanel
				images={this.state.pages[this.state.currentPage]}
				currentImage={this.state.selectedImage}
				onPageDown={this.handlePageDown}
			    onPageUp={this.handlePageUp}
			    onImageSelect={this.handleImageSelection}
			/>
		);
	}
}

ImagePanelContainer.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImagePanelContainer;
