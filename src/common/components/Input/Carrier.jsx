import { Badge } from '@backyard/react';
import React, { useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
// import Popup from 'reactjs-popup';
import Popup from 'reactjs-popup';
import { useSelector, useDispatch } from 'react-redux';
// import PopUp from './PopUp';
import clock from '../images/image/clock.png';

const styles = {
	section: {
		width: '100%',
		border: '1px solid #DADCE0',
		borderRadius: '8px',
		backgroundColor: '#FFFFFF',
		marginTop: '8px',
		height: '171px',
		// height: '171px',
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
		marginBottom: '10px'
	},
	temp: {
		borderBottom: '1px solid #DADCE0',
		display: 'flex'
	},
	title: {
		marginTop: '16px',
		marginBottom: '16px',
		marginLeft: '24px',
		fontSize: '20px',
		fontFamily: 'sans-serif',
		marginRight: '650px'
	},
	flex: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: '50% 50%'
	},
	p: {
		fontFamily: 'sans-serif',
		fontSize: '14px',
		margin: 'auto',
		marginLeft: '5px',
		fontStyle: 'normal',
		fontWeight: '500'
	},
	borderLeft: {
		borderLeft: '1px solid #DADCE0'
	},
	p2: {
		fontFamily: 'sans-serif',
		fontSize: '14px',
		margin: 'auto',
		marginLeft: '5px',
		fontStyle: 'normal',
		fontWeight: '500'
	},
	check: {
		marginLeft: '10px',
		margin: 'auto',
		marginRight: 'px',
		fontFamily: 'Roboto',
		fontWeight: '400',
		fontStyle: 'normal',
		fontSize: '14px'
	},
	badge: {
		float: 'right'

	},
	popup: {
		background: '#FFFFFF',
		borderRadius: '5px',
		border: '1px solid #126BD6',
		height: '100px',
		width: '220px',
		padding: '5px'
	},
	container: {
		paddingTop: '15px',
		paddingLeft: '30px'
	},
	times: {

	},
	p3: {
		fontFamily: 'sans-serif',
		fontSize: '14px',
		margin: 'auto',
		marginRight: '40px',
		fontStyle: 'normal',
		fontWeight: '500',
		cursor: 'pointer'
	},
	box: {
		display: 'flex',
		flexWrap: 'wrap',
		marginBottom: '5px'
	},
	checkColor: {
		color: '#9C182F'
	},
	closed: {
		fontFamily: 'sans-serif',
		fontSize: '14px',
		margin: 'auto',
		marginLeft: '120px',
		fontStyle: 'normal',
		fontWeight: '500',
		color: '#9C182F'
	},
	popup2: {
		background: '#FFFFFF',
		borderRadius: '5px',
		border: '1px solid #126BD6',
		height: '125px',
		width: '220px',
		padding: '5px'
	},
	img: {
		height: '15px',
		width: '15px',
		margin: 'auto',
		float: 'left',
		marginRight: '5px'
	},
	container2: {
		paddingTop: '15px',
		paddingLeft: '20px',
		borderLeft: '1px solid #DADCE0'
	}
};

const Carrier = (props) => {
	
	const arr = props.srvcLvl;

	const ground = 'GND';
	const all = 'ALL';

	const [supportsGround, setSupportsGround] = React.useState(props.srvcLvl.includes(ground));
	const [twoDayShipping, setTwoDayShipping] = React.useState(props.srvcLvl.includes(all));

	const toggleGround = () => setSupportsGround((prev) => !prev);
	const toggleTwoDay = () => setTwoDayShipping((prev) => !prev);

	useEffect(() => {
		if (supportsGround) {
			if (!arr.includes(ground)) {
				arr.push(ground);
			}
		} else {
			const index = arr.indexOf(ground);
			if (index > -1) { // only splice array when item is found
				arr.splice(index, 1); // 2nd parameter means remove one item only
			}
		}

		if (twoDayShipping) {
			if (!arr.includes(all)) {
				arr.push(all);
			}
		} else {
			const index = arr.indexOf(all);
			if (index > -1) { // only splice array when item is found
				arr.splice(index, 1); // 2nd parameter means remove one item only
			}
		}
	
	}, [supportsGround, twoDayShipping]);

	const [weekStart, setWeekStart] = React.useState('06:00');
	const [weekEnd, setWeekEnd] = React.useState('08:00');

	const [weekendStart, setWeekendStart] = React.useState('');
	const [weekendEnd, setWeekendEnd] = React.useState('');

	// const [openPopup, setOpenPopup] = React.useState(false);

	const [closed, setClosed] = React.useState(true);
	const toggleClosed = () => setClosed((prev) => !prev);

	const handleWeekStart = (e) => {
		setWeekStart(e.target.value);
	};

	const handleWeekEnd = (e) => {
		setWeekEnd(e.target.value);
	};

	const handleWeekendStart = (e) => {
		setWeekendStart(e.target.value);
	};

	const handleWeekendEnd = (e) => {
		setWeekendEnd(e.target.value);
	};

	return (
		<div style={ styles.section }>
			<div style={ styles.temp }>
				<div style={ styles.title }> Carrier </div>

				{/* <Badge onClick={ () => setOpenPopup(true) } variant="outlined">
							Edit
				</Badge> */}
			</div>

			<div style={ styles.grid }>
				<section style={ styles.container }>
					<p style={ styles.p }>Pick Up Days</p>
					<div style={ styles.box }>
						<p style={ styles.p2 }>Monday - Friday</p>
						<Popup trigger={ (
							<div style={ styles.flex }>
								<img style={ styles.img } src={ clock } alt="clock" />
								<p style={ styles.p3 }>{weekStart}AM-{weekEnd}PM</p>
							</div>
						) }
						position="top right"
						>
							<div style={ styles.popup }>
								<p style={ styles.p }>Weekday Times:</p>
								<div style={ styles.box }>
									<p style={ styles.p }>Start Time:</p>
									<input onChange={ handleWeekStart } value={ weekStart } style={ styles.border } type="time" />
								</div>
								<div style={ styles.flex }>
									<p style={ styles.p }>Close Time:</p>
									<input onChange={ handleWeekEnd } value={ weekEnd } style={ styles.border } type="time" />
								</div>
							</div>
						</Popup>
						{/* <p style={ styles.p3 }>{weekStart}AM-{weekEnd}PM</p> */}
					</div>
					<div style={ styles.flex }>
						<p style={ styles.p2 }>Saturday - Sunday</p>
						<Popup trigger={ (

							(closed) ? (
								<Badge style={ styles.p3 } variant="outlined" color="red">
											Closed
								</Badge>
							)
								:	(
									<div style={ styles.flex }>
										<img style={ styles.img } src={ clock } alt="clock" />
										<p style={ styles.p3 }>{weekendStart}AM-{weekendEnd}PM</p>
									</div>
								)
						) }
						position="top right"
						>
							<div style={ styles.popup2 }>
								<p style={ styles.p }>Weekend Times:</p>
								<div style={ styles.box }>
									<p style={ styles.p }>Start Time:</p>
									<input disabled={ closed } onChange={ handleWeekendStart } value={ weekendStart } style={ styles.border } type="time" />
								</div>
								<div style={ styles.flex }>
									<p style={ styles.p }>Close Time:</p>
									<input disabled={ closed } onChange={ handleWeekendEnd } value={ weekendEnd } style={ styles.border } type="time" />
								</div>
								<div style={ styles.flex }>
									<p style={ styles.closed }>Closed</p>
									<Checkbox defaultChecked={ closed } value={ closed }
											  onClick={ toggleClosed } style={ styles.checkColor }
									/>
								</div>
							</div>
						</Popup>
					</div>
				</section>
				<section style={ styles.container2 }>
					<p style={ styles.p }>Service level</p>
					<div style={ styles.flex }>
					
						<span style={ styles.flex }>
							<Checkbox value={ supportsGround }
								onChange={ toggleGround }
								style={ styles.check }
							/>
							<p style={ styles.p2 }>Supports Ground</p>
						</span>
						<span style={ styles.flex }>
							<Checkbox value={ twoDayShipping }
								onChange={ toggleTwoDay }
								style={ styles.check }
							/>
							<p style={ styles.p2 }>All Service Levels</p>
						</span>
					</div>
				</section>

				{/* <PopUp
					openPopup={ openPopup }
					setOpenPopup={ setOpenPopup }
					weekStart={ weekStart }
					weekEnd={ weekEnd }
					setWeekStart={ setWeekStart }
					setWeekEnd={ setWeekEnd }
				/> */}
			</div>
		</div>
	);
};

export default Carrier;
