import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Button from 'grommet/components/Button';

import CaretUpIcon from 'grommet/components/icons/base/CaretUp';
import CaretDownIcon from 'grommet/components/icons/base/CaretDown';

const ImagePanel = ({ images, handleClick }) => (
	<Box pad={{ between: 'small' }} full={false} direction="row">
		<Box size="xsmall" pad="none" align="center">
			<Button icon={<CaretUpIcon size="small" />} plain />
			<List selectable onSelect={handleClick}>
				{images.map((image, index) => (
					<ListItem
						pad={{ vertical: (index % 2 > 0 ? 'small' : 'none') }}
						separator="none"
					>
						<Image src={image.thumbnail} fit="contain" />
					</ListItem>))}
			</List>
			<Button icon={<CaretDownIcon size="small" />} plain />
		</Box>
		<Box size="large" colorIndex="grey-2">
			<Image src={images.length > 0 ? images[0].original : ''} fit="contain" />
		</Box>
	</Box>
);

ImagePanel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
	handleClick: PropTypes.func.isRequired
};

export default ImagePanel;
