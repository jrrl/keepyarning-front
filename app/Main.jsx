import React from 'react';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import { Link } from 'react-router';

import 'grommet/scss/vanilla/index.scss';

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
		<Tiles flush fill>
			{buttons.map(button => <MenuItem key={button.label} {...button} />)}
		</Tiles>
	</Header>
);

const Main = props => (
	<App>
		<Box align="center" full="horizontal">
			<img alt="Keep Yarning" src="assets/final_logo_1.png" style={{ width: '140px', height: 'auto' }} />
		</Box>
		<Box align="center" full="horizontal">
			<em>Cultivating spaces for Yearners</em>
		</Box>
		<MainMenu />
		{props.children}
		<Box align="center" full="horizontal">
			<img alt="Keep Yarning" src="assets/final_logo_1.png" style={{ width: '100px', height: 'auto' }} />
		</Box>
	</App>
);

Main.propTypes = {
	children: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default Main;
