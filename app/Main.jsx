import React from 'react';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Columns from 'grommet/components/Columns';
import { Link } from 'react-router';

import 'grommet/scss/vanilla/index.scss';
import 'rc-slider/assets/index.css';

const buttons = [
	{ label: 'HOME', url: '/' },
	{ label: 'ABOUT', url: '/about' },
	{ label: 'STORE', url: '/store' },
	{ label: 'CONTACT', url: '/contact' },
];

const MenuItem = ({ label, url }) => (
	<Tile>
		<Box><Link to={url}>{label}</Link></Box>
	</Tile>
);

MenuItem.propTypes = {
	label: React.PropTypes.string.isRequired,
	url: React.PropTypes.string.isRequired,
};

const MainMenu = () => (
	<Header>
		<Tiles fill>
			{buttons.map(button => <MenuItem key={button.label} {...button} />)}
		</Tiles>
	</Header>
);

const Main = props => (
	<App>
		<Box align="center" full="horizontal">
			<Image alt="Keep Yarning" src="assets/final_logo_1.png" style={{ width: '140px', height: 'auto' }} />
		</Box>
		<Box align="center" full="horizontal">
			<em>Cultivating spaces for Yearners</em>
		</Box>
		<MainMenu />
		{props.children}
		<Box align="center" full="horizontal" pad={{ between: 'small' }}>
			<Image alt="Keep Yarning" src="assets/final_logo_1.png" style={{ width: '100px', height: 'auto' }} />
			<Columns justify="center" maxCount={2}>
				<Box align="center" alignContent="center">
					<span>info@keepyarning.com</span>
					<span>+63.900.000.000</span>
					<span>+63.900.000.000</span>
				</Box>
				<Box align="center">
					<span>Quezon City</span>
					<span>Philippines</span>
				</Box>
			</Columns>
			<Box align="center" alignContent="center">
				<span><em>Lovingly coded, crafted, and formed in the Philippines, Copyright 2016</em></span>
			</Box>
		</Box>
	</App>
);

Main.propTypes = {
	children: React.PropTypes.node
};

export default Main;
