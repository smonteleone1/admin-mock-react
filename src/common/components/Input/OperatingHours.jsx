import React from 'react';
import Holidays from './Holidays/Holidays';
import Times from './Times';

const styles = {
	section: {
		width: '100%',
		height: '335px',
		// height: '250px',
		border: '1px solid #DADCE0',
		borderRadius: '8px',
		backgroundColor: '#FFFFFF',
		marginRight: '8px',
		marginBottom: '8px',
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
	},
	temp: {
		borderBottom: '1px solid #DADCE0'
	},
	title: {
		marginTop: '16px',
		marginBottom: '16px',
		marginLeft: '24px',
		fontSize: '20px',
		fontFamily: 'sans-serif'
	},
	flex: {
		display: 'flex'
		// margin: '8px'
	}
};

const OperatingHours = (props) => (
	<div style={ styles.section }>
		<div style={ styles.temp }>
			<div style={ styles.title }> Operating Hours & Holidays </div>
		</div>
		<div style={ styles.flex }>
			<Times workingDays={ props.workingDays } />
			<Holidays
				nodeHoliday={ props.nodeHoliday }
				addNodeHoliday={ props.addNodeHoliday }
			/>
		</div>
	</div>
);

export default OperatingHours;
