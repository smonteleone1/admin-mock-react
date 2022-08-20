import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Popup from 'reactjs-popup';
import clock from '../images/image/clock.png';

const styles = {
	section: {
		width: '50%',
		borderRight: '1px solid #DADCE0'
		// backgroundColor: '#FFFFFF',
		// height: '150px',
	},
	temp: {
		borderBottom: '1px solid #DADCE0'
	},
	title: {
		marginTop: '16px',
		marginBottom: '16px',
		marginLeft: '24px',
		fontSize: '20px'
	},
	p: {
		fontFamily: 'sans-serif',
		fontSize: '14px',
		margin: 'auto',
		marginLeft: '2px'
	},
	p2: {
		fontFamily: 'sans-serif',
		fontSize: '14px',
		margin: 'auto',
		color: '#9C182F'
	},
	timeRange: {
		display: 'flex',
		// marginRight: '40px',
		marginLeft: '16px'
	},
	timeRange2: {
		display: 'flex',
		// marginRight: '40px',
		background: '#F7F7F7',
		marginLeft: '16px'
	},
	check: {
		color: '#9C182F'
	},
	img: {
		height: '15px',
		width: '15px',
		margin: 'auto',
		float: 'left'
	},
	popup: {
		background: '#FFFFFF',
		borderRadius: '5px',
		border: '1px solid #126BD6',
		height: '75px',
		width: '220px',
		padding: '5px'
	},
	time: {
		fontFamily: 'sans-serif',
		fontSize: '14px',
		margin: 'auto',
		color: '#126BD6',
		marginLeft: '5px'
	},
	time2: {
		display: 'flex',
		marginRight: '48px',
		cursor: 'pointer'
	},
	bigDiv: {
		display: 'flex',
		marginLeft: '10px'
	},
	marginTop: {
		margin: '10px'
	},
	border: {
		border: '1px solid #126BD6'
	},
	flex: {
		display: 'flex',
		margin: '6px'
	}
};

const TimeRow = (props) => (
	<div style={ props.stripe ? styles.timeRange2 : styles.timeRange }>
		<p style={ styles.p }>{props.day}</p>
		<Popup disabled={ props.closed } trigger={ (
			<div style={ styles.time2 }>
				<img style={ styles.img } src={ clock } alt="clock" />
				<p style={ styles.time }>{props.startTime}AM - {props.endTime}PM</p>
			</div>
		) }
		position="left"
		>
			<div style={ styles.popup }>
				<div style={ styles.flex }>
					<p style={ styles.p }>Start Time:</p>
					<input style={ styles.border } type="time" value={ props.startTime } onChange={ props.handleStart } />
				</div>
				<div style={ styles.flex }>
					<p style={ styles.p }>Close Time:</p>
					<input style={ styles.border } type="time" value={ props.endTime } onChange={ props.handleEnd } />
				</div>
			</div>
		</Popup>
		<span style={ styles.bigDiv }>
			<p style={ styles.p2 }>Closed</p>
			<Checkbox value={ props.closed } onChange={ props.handleClose } style={ styles.check } size="small" />
		</span>
	</div>
);
export default TimeRow;
