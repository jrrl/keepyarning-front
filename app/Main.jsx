import React from 'react';
import App from 'grommet/components/App';
import GHeader from 'grommet/components/Header';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';
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

const Header = () => (
	<GHeader>
		<Tiles flush fill>
			{buttons.map(props => <MenuItem {...props} />)}
		</Tiles>
	</GHeader>
);

const Main = () => (
	<App>
		<Header />
	</App>
);

export default Main;
