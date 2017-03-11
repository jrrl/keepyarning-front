import React from 'react';
import Box from 'grommet/components/Box';
import Carousel from 'grommet/components/Carousel';
import Image from 'grommet/components/Image';

const Home = () => (
	<Box full="horizontal" flush>
		<Carousel persistentNav="false">
			<Image full src="https://placehold.it/1140x450" />
			<Image full src="https://placehold.it/1140x450" />
		</Carousel>
	</Box>
);

export default Home;
