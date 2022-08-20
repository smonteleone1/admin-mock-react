// import {
// 	Tab, Tabs,
// 	Radio, RadioGroup, FormControl,
// 	FormControlLabel
// } from '@backyard/react';
import React from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import Cost from '../SourcingLeversTabs/Cost';
// import ATP from '../SourcingLeversTabs/ATP';
// import SourcingSetup from '../SourcingLeversTabs/SourcingSetup';
// import TruckInfo from '../SourcingLeversTabs/TruckInfo';
// import Capacity from '../SourcingLeversTabs/Capacity';
// import LeadTime from '../SourcingLeversTabs/LeadTime';
// import LTL from '../SourcingLeversTabMenu/LTL';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import LTL from '../SourcingLeversTabMenu/LTL';
import Parcel from '../SourcingLeversTabMenu/Parcel';
import PUIS from '../SourcingLeversTabMenu/PUIS';
import Truck from '../SourcingLeversTabMenu/Truck';

const styles = {
	container: {
		// width: '50%',
		width: '800px',
		height: '324px',
		// height: '280px',
		backgroundColor: '#FFFFFF',
		border: '1px solid #DADCE0',
		borderRadius: '8px',
		margin: '8px',
		// marginRight: '32px',
		marginTop: '16px',
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'

	},
	container2: {
		paddingLeft: '14px',
		paddingRight: '14px',
		paddingBottom: '14px',
		paddingTop: '11px'
	},
	p: {
		fontFamily: 'sans-serif',
		fontSize: '20px',
		fontWeight: '500',
		marginLeft: '27px',
		marginTop: '15px'
	},
	tabs: {
		backgroundColor: '#FFFFFF',
		// backgroundColor: '#126BD6',
		borderBottom: 'none',
		marginLeft: '10px',
		fontColor: '#898989',
		borderTopLeftRadius: '5px',
		borderTopRightRadius: '5px',
		fontSize: '16px',
		fontFamily: 'sans-serif',
		fontStyle: 'normal',
		fontWeight: '500',
		width: '111px',
		height: '43px'

	},
	activeTab: {
		backgroundColor: '#126BD6',
		marginLeft: '10px',
		fontColor: 'red',
		borderTopLeftRadius: '5px',
		borderTopRightRadius: '5px',
		fontSize: '16px',
		fontFamily: 'sans-serif',
		fontStyle: 'normal',
		fontWeight: '500',
		width: '111px',
		height: '43px'
	},
	checkboxDiv: {
		borderLeft: '1px solid #DADCE0',
		paddingLeft: '29px',
		marginLeft: '38px',
		marginBottom: 'none'
		// margin: 'auto'
	},
	checkbox: {

	},
	flex: {
		display: 'flex'
	},
	title: {
		marginBottom: '11.6px',
		marginLeft: '27px',
		marginTop: '15.5px',
		fontSize: '20px',
		fontFamily: 'sans-serif'
	},
	temp: {
		borderBottom: '1px solid #DADCE0',
		display: 'flex'
	},
	section: {
		border: '1px solid #126BD6',
		borderRadius: '8px',
		height: '200px',
		padding: '16px'
	},
	content: {
		height: '168px',
		backgroundColor: 'rgba(18, 107, 214, 0.1)',
		borderRadius: '8px'
	},
	TextField: {
		length: '48px',
		width: '36px'
	},
	cost: {
		display: 'flex'
	},
	p2: {
		margin: 'auto',
		fontSize: '14px',
		fontFamily: 'sans-serif'
	},
	option: {
		display: 'flex',
		margin: '5px'
	},
	tabLayout: {
		marginBottom: 'none',
		marginTop: '5px',
		marginLeft: '30px'
	},
	borderRight: {
		borderRight: '1px solid #DADCE0',
		paddingRight: '20px'
	}

};

const SourcingLevers = (props) => {
	const [tabActive, setTabActive] = React.useState('Parcel');

	return (
		<div style={styles.container}>
			<div style={styles.temp}>
				<div style={styles.borderRight}>
					<div style={styles.title}> Sourcing Levers </div>
				</div>
				<div style={styles.tabLayout}>
					<FormControl>
						<RadioGroup
							row
							aria-labelledby="demo-radio-buttons-group-label"
							defaultValue={tabActive}
							name="radio-buttons-group"
						>
							<FormControlLabel value="Parcel" control={<Radio checked={tabActive === 'Parcel'} />} label="Parcel" onClick={() => setTabActive('Parcel')} />
							<FormControlLabel value="LTL" control={<Radio />}  checked={tabActive === 'LTL'}  label="LTL" onClick={() => setTabActive('LTL')} />
							<FormControlLabel value="PUIS" control={<Radio />}  checked={tabActive === 'PUIS'} label="PUIS" onClick={() => setTabActive('PUIS')} />
							<FormControlLabel value="Truck" control={<Radio />} checked={tabActive === 'Truck'}  label="Truck Delivery" onClick={() => setTabActive('Truck')} />
						</RadioGroup>
					</FormControl>
				</div>
			</div>
			<div style={styles.container2}>
				{(tabActive === 'LTL') ? <LTL /> : ''}
				{(tabActive === 'Parcel') ? <Parcel /> : ''}
				{(tabActive === 'PUIS') ? <PUIS /> : ''}
				{(tabActive === 'Truck') ? <Truck /> : ''}
			</div>
		</div>
	);
};
export default SourcingLevers;
