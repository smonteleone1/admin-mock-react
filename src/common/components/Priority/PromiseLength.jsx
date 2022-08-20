import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const styles = {
	section: {
		height: '171px',
		width: '328px',
		backgroundColor: '#FFFFFF',
		borderRadius: '6px',
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
		border: '1px solid #DADCE0',
		marginTop: '20px',
		marginLeft: '32px'
	},
	title: {
		marginTop: '16px',
		marginLeft: '30px',
		fontSize: '20px',
		fontFamily: 'sans-serif'
	},
	temp: {
		borderBottom: '1px solid #DADCE0',
		height: '40px'
	},
	flex: {
		display: 'flex'
	},
	p2: {
		fontFamily: 'sans-serif',
		fontSize: '14px',
		margin: 'auto',
		marginLeft: '5px',
		marginTop: '5px',
		fontStyle: 'normal',
		fontWeight: '500'
	},
	check: {
		margin: 'auto'
	}
};

const PromiseLength = () => (
	<section style={ styles.section }>
		<div style={ styles.temp }>
			<div style={ styles.title }> Promise Length </div>
		</div>
		<div style={ styles.flex }>
			<div style={ styles.flex }>
				<Checkbox
					style={ styles.check }
				/>
				<p style={ styles.p2 }>2 Day Shipping</p>
			</div>
		</div>

	</section>
);

export default PromiseLength;
