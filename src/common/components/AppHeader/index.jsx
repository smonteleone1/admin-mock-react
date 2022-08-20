import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/styles';
import { AppBar } from '@mui/material';

import lowes from '../images/image/lowes.png';
import { HeaderDiv } from './style';

const useStyle = makeStyles(() => ({
	root: {
		backgroundColor: '#17233D !important',
		height: '59px',
		border: '0',
		boxSizing: 'border-box',
		margin: '0',
		padding: '0'
	}
}));

const Header = () => {
	const classes = useStyle();

	return (
		<Fragment>
			<AppBar
				classes={{ root: classes.root }}
			>
				<HeaderDiv>
					<img className="lowesStyle" src={ lowes } alt="Lowe's" />
					<div style={{ flexGrow: '1' }} />
				</HeaderDiv>
			</AppBar>
		</Fragment>
	);
};

export default Header;
