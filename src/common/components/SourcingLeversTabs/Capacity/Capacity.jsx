import React from 'react';
import { TextField } from '@backyard/react';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@material-ui/styles';

const styles = {
	textFeild: {
		backgroundColor: '#FFFFFF',
		width: '50px',
		height: '45px',
		borderRadius: '5px'
	}
};

const useStyle = makeStyles({
	section: {
		border: '1px solid #126BD6',
		borderRadius: '8px',
		height: '200px',
		padding: '16px'
	},
	content: {
		height: '168px',
		backgroundColor: 'rgba(18, 107, 214, 0.1)',
		borderRadius: '8px',
		display: 'flex',
		flexWrap: 'wrap'
	},
	block: {
		width: '50px',
		textAlign: 'center',
		marginRight: '70px',
		marginLeft: '30px'
	},
	p: {
		fontSize: '14px',
		fontWeight: '500',
		fontFamily: 'sans-serif',
		margin: 'auto',
		marginRight: '10px'
	},
	check: {
		margin: 'auto'

	},
	flex: {
		display: 'flex'
	},
	bigDiv: {
		display: 'flex',
		marginLeft: '10px',
		marginTop: '20px',
		lineHeight: '16px'
	},
	p2: {
		fontFamily: 'sans-serif',
		fontSize: '14px',
		marginLeft: '10px',
		margin: 'auto'
	}
});

const Cost = (props) => {
	const classes = useStyle();

	return (
		<section className={ classes.section }>
			<div className={ classes.content }>
				<div className={ classes.block }>
					<p className={ classes.p }>Monday</p>
					<TextField
						onChange={ (props.check) ? props.handleAllChange : props.handleMonCap }
						value={ props.monCap }
						style={ styles.textFeild }
					/>
				</div>
				<div className={ classes.block }>
					<p className={ classes.p }>Tuesday</p>
					<TextField
						value={ props.tueCap }
						onChange={ (props.check) ? props.handleAllChange : props.handleTueCap }
						style={ styles.textFeild }
					/>
				</div>
				<div className={ classes.block }>
					<p className={ classes.p }>Wednesday</p>
					<TextField
						value={ props.wedCap }
						onChange={ (props.check) ? props.handleAllChange : props.handleWedCap }
						style={ styles.textFeild }
					/>
				</div>
				<div className={ classes.block }>
					<p className={ classes.p }>Thursday</p>
					<TextField
						value={ props.thurCap }
						onChange={ (props.check) ? props.handleAllChange : props.handleThurCap }
						style={ styles.textFeild }
					/>
				</div>
				<div className={ classes.block }>
					<p className={ classes.p }>Friday</p>
					<TextField
						value={ props.friCap }
						onChange={ (props.check) ? props.handleAllChange : props.handleFriCap }
						style={ styles.textFeild }
					/>
				</div>
				<div className={ classes.block }>
					<p className={ classes.p }>Saturday</p>
					<TextField
						value={ props.satCap }
						onChange={ (props.check) ? props.handleAllChange : props.handleSatCap }
						style={ styles.textFeild }
					/>
				</div>
				<div className={ classes.block }>
					<p className={ classes.p }>Sunday</p>
					<TextField
						value={ props.sunCap }
						onChange={ (props.check) ? props.handleAllChange : props.handleSunCap }
						style={ styles.textFeild }
					/>
				</div>
				<span className={ classes.bigDiv }>
					<Checkbox onClick={ props.toggleChecked } value={ props.check } className={ classes.check } size="small" />
					<p className={ classes.p2 }>Apply same limit to multiple days?</p>
				</span>
			</div>

		</section>
	);
};
export default Cost;
