import React from 'react';
import Box from 'grommet/components/Box';
import Carousel from 'grommet/components/Carousel';
import Image from 'grommet/components/Image';

const Home = () => (
	<Box full="horizontal" pad={{ between: 'large' }}>
		<Carousel persistentNav={false}>
			<Image full src="https://placehold.it/1140x450" />
			<Image full src="https://placehold.it/1140x450" />
		</Carousel>

		<Box direction="row" full="horizontal" pad={{ between: 'small' }}>
			<Box pad={{ between: 'small' }}>
				<Image alt="DECOR" src="./assets/home/DECOR.png" />
				<Image alt="KIDS" src="./assets/home/KIDS.png" />
			</Box>
			<Box pad={{ between: 'small' }}>
				<Image alt="KITCHEN" src="./assets/home/KITCHEN.png" />
				<Image alt="WHAT WE CAN DO FOR YOU" src="./assets/home/WHAT WE CAN DO FOR YOU-01.png" />
			</Box>
			<Box pad={{ between: 'small' }}>
				<Image alt="HOME" src="./assets/home/HOME.png" />
			</Box>
			<Box pad={{ between: 'small' }}>
				<Image alt="PERSONAL" src="./assets/home/PERSONAL.png" />
				<Image alt="COLLECTION" src="./assets/home/COLLECTION.png" />
			</Box>
		</Box>
	</Box>
);

export default Home;
