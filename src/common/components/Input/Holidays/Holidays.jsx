import React from 'react';
// import { TextField } from '@backyard/react';
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';
import { useSelector } from 'react-redux';
import moment from 'moment'


const styles = {
	section: {
		width: '50%'
		// backgroundColor: '#FFFFFF'
	},
	head: {
		display: 'flex',
		margin: '15px'

	},
	btn: {
		float: 'right',
		marginLeft: 'auto',
		cursor: 'pointer'

	},
	input: {
		display: 'flex',
		margin: '5px'
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: '50% 50%'
	},
	p: {
		fontFamily: 'sans-serif',
		fontWeight: '500',
		fontSize: '14px',
		marginLeft: '16px'
	},
	border: {
		border: '1px solid #126BD6',
		padding: '5px',
		borderRadius: '4px'
	},
	delete: {
		margin: 'auto'
	}
};

function Holidays(props) {

	const structureDate = (holiday) => {		
		return moment(new Date()).format("YYYY-DD-MM")
	};
	

	const handleDateAdd = () => {
		props.addNodeHoliday([...props.nodeHoliday, '']);
	};

	const handleDateRemove = (index) => {
		const list = [...props.nodeHoliday];
		list.splice(index, 1);
		props.removeNodeHoliday(list);
	};

	const handleDateChange = (e, index) => {
		const { value } = e.target;
		const list = [...props.nodeHoliday, value];
		props.addNodeHoliday(list);
	};

	return (
		<div style={ styles.section }>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/icon?family=Material+Icons"
			/>
			<div className="head" style={ styles.head }>
				<p className="p" style={ styles.p }>Holidays</p>
				<Icon
					className="btn"
					style={ styles.btn }
					color="primary"
					onClick={ handleDateAdd }
				>
					add_circle
				</Icon>
			</div>
			<div className="grid" style={ styles.grid }>
				{props.nodeHoliday.map((date, index) => (
					<div className="input" style={ styles.input }>
						<div>
							<input
								// value={ date.date }
								value={ structureDate(date) }
								onChange={ (e) => handleDateChange(e, index) }
								type="date"
								style={ styles.border }
								className="border"
							/>
						</div>
						<div className="delete" style={ styles.delete }>
							<DeleteIcon
								sx={{ color: '#9C182F' }}
								onClick={ () => handleDateRemove(index) }
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Holidays;
