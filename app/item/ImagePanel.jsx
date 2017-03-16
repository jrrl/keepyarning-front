import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

const ImagePanel = ({ images, handleClick, selectedImage }) => (
	<Box pad={{ between: 'small' }} full={false} direction="row">
		<Box size="xsmall">
			<List selectable onSelect={handleClick}>
				{images.map(image => (
					<ListItem pad={{ vertical: 'small' }} separator="none">
						<Image src={image.thumbnail} />
					</ListItem>))}
			</List>
		</Box>
		<Box size="large">
			<Image src={images[selectedImage].original} fit="cover" />
		</Box>
	</Box>
);

ImagePanel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
	handleClick: PropTypes.func,
	selectedImage: PropTypes.number
};

ImagePanel.defaultProps = {
	handleClick: () => {},
	selectedImage: 0
};

export default ImagePanel;
