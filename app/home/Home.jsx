import React from 'react';
import Box from 'grommet/components/Box';
import Carousel from 'grommet/components/Carousel';
import Image from 'grommet/components/Image';
import Title from 'grommet/components/Title';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

const Home = () => (
	<Box full="horizontal" pad={{ between: 'large' }}>
		<Box>
			<Carousel persistentNav={false}>
				<Image full src="https://placehold.it/1140x450" />
				<Image full src="https://placehold.it/1140x450" />
			</Carousel>
		</Box>

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

		<Box align="center">
			<Box direction="row" pad={{ between: 'large' }}>
				<Box size="xsmall"><Image src="./assets/home/ICONS for homepage-07.png" /></Box>
				<Box alignSelf="center">
					<Heading tag="h3" strong uppercase>A STORY IN EVERY TWINE</Heading>
				</Box>
			</Box>
			<Paragraph>
				We at Keep Yarning fully support the local industry. Our products are lovingly
				made by human hands. Each product is made through the effort and dedication of
				KY Crafters, who aim to provide alternative means of earning for their families.
				<br /><br />
				Meet some of our crafters here.
			</Paragraph>
		</Box>

		<Box align="center" pad={{ between: 'small' }}>
			<Heading tag="h3" strong uppercase>WHAT WE CAN DO FOR YOU</Heading>
			<Box direction="row" pad={{ vertical: 'medium', horizontal: 'large', between: 'large' }}>
				<Box align="center">
					<Box size="xsmall"><Image src="./assets/home/ICONS for homepage-04.png" /></Box>
					<Title>NEW BEGINNINGS</Title>
					<Paragraph>
						As you start a new chapter in life, we will be there to fil it up with
						products that help you define a home of your own.
					</Paragraph>
				</Box>
				<Box align="center">
					<Box size="xsmall"><Image src="./assets/home/ICONS for homepage-05.png" /></Box>
					<Title>REFINED SPACES</Title>
					<Paragraph>
						We believe that by enriching a space in your home, we can develop a
						memorable and satisfying experience worth sharing.
					</Paragraph>
				</Box>
				<Box align="center">
					<Box size="xsmall"><Image src="./assets/home/ICONS for homepage-06.png" /></Box>
					<Title>HAPPIER HEART</Title>
					<Paragraph>
						Through each space we cultivate comes a happy and memorable experience that
						is healthy and
					</Paragraph>
				</Box>
			</Box>
		</Box>
	</Box>
);

export default Home;
