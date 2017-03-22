import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';

import CaretUpIcon from 'grommet/components/icons/base/CaretUp';
import CaretDownIcon from 'grommet/components/icons/base/CaretDown';

const ImagePanel = ({ images, onImageSelect, currentImage, onPageUp, onPageDown }) => (
	<Box pad={{ between: 'small' }} full={false} direction="row">
		<Box size="xsmall" pad="none" align="center" alignSelf="stretch">
			<Button icon={<CaretUpIcon size="small" />} plain onClick={onPageUp} />
			<Box flex basis="full">
			<List selectable onSelect={onImageSelect}>
				{images.map(image => (
					<ListItem pad={{ vertical: 'small' }} separator="none">
						<Image src={image.thumbnail} fit="contain" />
					</ListItem>
				))}
			</List>
			</Box>
			<Button icon={<CaretDownIcon size="small" />} plain onClick={onPageDown} />
		</Box>
		<Box size="large" colorIndex="grey-2">
			<Anchor>
				<Image src={currentImage} fit="contain" />
			</Anchor>
		</Box>
	</Box>
);

ImagePanel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
	currentImage: PropTypes.string.isRequired,
	onImageSelect: PropTypes.func.isRequired,
	onPageUp: PropTypes.func.isRequired,
	onPageDown: PropTypes.func.isRequired
};

export default ImagePanel;
