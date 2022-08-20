import React, { useEffect } from 'react';
// import { TextField } from '@backyard/react';
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';
import moment from 'moment'
import { useSelector } from 'react-redux';


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

	const nodeFormData = useSelector((s) => {
		return s.nodeFormData;
	}); 

	useEffect(() => {
		nodeFormData.nodeMaster.nodeHolidays = props.nodeHoliday;
	});

	const formatDate = (holiday) => {		
		const formatedDate =  moment(holiday).format("YYYY-MM-DD").toString();
		return formatedDate;
	};
	

	const handleDateAdd = () => {
		if(props.nodeHoliday.length <10) {
			props.addNodeHoliday([...props.nodeHoliday, new Date()]);
		}
	};

	const handleDateRemove = (index) => {
		props.removeNodeHoliday(index);
	};

	const handleDateChange = (e, index) => {
		const { value } = e.target;
		props.updateNodeHoliday(index, value);
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
								value={ formatDate(date) }
								onChange={ (e) =>  {
									handleDateChange(e,index)
								 } }
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
