import React, { Component, PropTypes } from 'react';
import autobind from 'react-autobind';

import ImagePanel from './ImagePanel';

const movePage = value => function (state) {
	return {
		currentPage: (state.currentPage + state.pages.length + value) % state.pages.length
	};
};

const selectImage = imageIndex => function (state) {
	return {
		selectedImage: state.pages[state.currentPage][imageIndex].original
	};
};

const toggleLightbox = open => function () {
	return { isZoomed: open };
};

class ImagePanelContainer extends Component {
	constructor(props) {
		super(props);

		const pages = [];

		for (let i = 0; i < props.images.length; i += 4) {
			pages.push(props.images.slice(i, i + 4));
		}

		this.state = {
			selectedImage: props.images[0],
			pages,
			currentPage: 0,
			isZoomed: false
		};

		autobind(this);
	}

	handleOpenLightbox() {
		this.setState(toggleLightbox(true));
	}

	handleCloseLightbox() {
		this.setState(toggleLightbox(false));
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
			    isZoomed={this.state.isZoomed}
			    onLightboxClose={this.handleCloseLightbox}
			    onZoom={this.handleOpenLightbox}
			/>
		);
	}
}

ImagePanelContainer.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImagePanelContainer;
