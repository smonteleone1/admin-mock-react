import React from 'react';
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
// import { Button } from '@backyard/react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import clock from '../images/image/clock.png';

const styles = {
	popup: {
		width: '450px',
		height: '350px',
		padding: '40px'
	},
	p3: {
		fontSize: '28px',
		fontWeight: '700',
		marginBottom: '15px'

	},
	title: {
		display: 'flex',
		borderBottom: '1px solid #E0E2E5'
	},
	section: {
		marginTop: '20px',
		display: 'flex'
	},
	time: {
		display: 'flex',
		marginRight: '10px'
	},
	closed: {
		display: 'flex',
		float: 'right'
	},
	img: {
		height: '15px',
		width: '15px',
		margin: 'auto',
		float: 'left'
	},
	p: {
		fontFamily: 'sans-serif',
		fontSize: '14px',
		margin: 'auto',
		color: '#126BD6',
		marginLeft: '5px'
	},
	p2: {
		fontFamily: 'sans-serif',
		fontSize: '14px',
		margin: 'auto',
		color: '#9C182F'
	},
	check: {
		color: '#9C182F'
	},
	format: {
		marginRight: '10px'
	},
	close: {
		marginRight: '5px',
		margin: 'auto',
		float: 'right'
	},
	popup2: {
		width: '450px',
		height: '350px',
		padding: '40px'
	},
	btn: {
		backgroundColor: 'white'
	}
};

const PopUp = (props) => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	  };

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	return (
		<Dialog open={ props.openPopup }>
			<DialogContent>
				<div style={ styles.popup }>
					<div style={ styles.title }>
						<p style={ styles.p3 }>Carrier</p>
					</div>
					<section style={ styles.section }>
						<div style={ styles.format }>
							<p style={ styles.p }>Weekdays</p>
							<p style={ styles.p }>Monday - Friday</p>
						</div>
						{/* <div style={ styles.time }>
							<img style={ styles.img } src={ clock } alt="clock" />
							<p style={ styles.p }>00:00AM - 00:00PM</p>
						</div> */}
						<Button styles={ styles.btn } aria-describedby={ id } variant="contained" onClick={ handleClick }>
							<div style={ styles.time }>
								<img style={ styles.img } src={ clock } alt="clock" />
								<p style={ styles.p }>00:00AM - 00:00PM</p>
							</div>
						</Button>
						<Popover
							id={ id }
							open={ open }
							anchorEl={ anchorEl }
							onClose={ handleClose }
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left'
							}}
						>
							<Typography sx={{ p: 2 }}>
								<div style={ styles.popup }>
									<div style={ styles.flex }>
										<p style={ styles.p }>Start Time:</p>
										<input style={ styles.border } type="time" valueAsDate={ props.startTime } onChange={ props.handleStart } />
									</div>
									<div style={ styles.flex }>
										<p style={ styles.p }>Close Time:</p>
										<input style={ styles.border } type="time" valueAsDate={ props.endTime } onChange={ props.handleEnd } />
									</div>
								</div>
							</Typography>
						</Popover>
						<span style={ styles.closed }>
							<p style={ styles.p2 }>Closed</p>
							<Checkbox style={ styles.check } value={ props.closed } onChange={ props.handleClose } size="small" />
						</span>
					</section>
					<section style={ styles.section }>
						<div style={ styles.format }>
							<p style={ styles.p }>Weekends</p>
							<p style={ styles.p }>Saturday - Sunday</p>
						</div>
						<div style={ styles.time }>
							<img style={ styles.img } src={ clock } alt="clock" />
							<p style={ styles.p }>00:00AM - 00:00PM</p>
						</div>
						<span style={ styles.closed }>
							<p style={ styles.p2 }>Closed</p>
							<Checkbox style={ styles.check } value={ props.closed } onChange={ props.handleClose } size="small" />
						</span>
					</section>
					<section>
						<Button size="small">Cancel</Button>
						<Button size="small">Apply</Button>
					</section>

				</div>
			</DialogContent>
		</Dialog>
	);
};

export default PopUp;
