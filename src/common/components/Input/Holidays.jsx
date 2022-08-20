import React, { useEffect } from 'react';
// import { TextField } from '@backyard/react';
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';
import { useSelector } from 'react-redux';

const styles = {
	section: {
		width: '50%'
		// backgroundColor: '#FFFFFF'
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
	title2: {
		fontFamilty: 'Roboto',
		margin: '8px',
		fontSize: '14px'
	},
	head: {
		display: 'flex',
		margin: '15px'

	},
	btn: {
		float: 'right',
		marginLeft: 'auto'

	},
	input: {
		display: 'flex',
		margin: '5px'
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: '50% 50%'
	},
	datepicker: {
		size: '10px'
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

// const Holidays = () => (

// 	<div style={ styles.section } />

// );

function Holidays(props) {
	// const [dates, setDates] = useState([]);

	// const disPatch = useDispatch();

	const {
		dataUpdated
	} = useSelector((s) => s.nodeDetailsSearch);

	const structureDate = (arr) => {
		const words = arr.split('-');
		if (words[0].length === 4) {
			return arr;
		}
		const first = words[0];
		const second = words[1];
		const third = words[2];
		const temp = `${third}-${first}-${second}`;

		return temp;
	};

	const structureDate2 = (word) => {
		const words = word.split('-');

		const first = words[0];
		const second = words[1];
		const third = words[2];
		const temp = `${second}-${third}-${first}`;

		return temp;
	};

	// // const handleNode = () => {
	// // 	const editedData = dataUpdated;
	// // 	editedData.nodeHoliday = dates;
	// // 	disPatch({ type: 'NODE_DATA_UPDATE', dataUpdated: editedData });
	// // };

	const handleDateAdd = () => {
		if (props.nodeHoliday.length < 10) {
			props.setDates([...props.nodeHoliday, '']);
		}
	};

	const handleDateRemove = (index) => {
		const list = [...props.nodeHoliday];
		list.splice(index, 1);
		props.setDates(list);
	};

	const handleDateChange = (e, index) => {
		const { value } = e.target;
		const list = [...props.nodeHoliday];
		list[index] = structureDate2(value);
		props.setDates(list);
	};

	// // useEffect(() => {
	// // 	for (let i = 0; i < props.nodeHoliday.length; i += 1) {
	// // 		if (dates.length < 8) {
	// // 			if (!dates.some((d) => d.date === props.nodeHoliday[i])) {
	// // 				setDates([...dates, props.nodeHoliday[i]]);
	// // 			}
	// // 		}
	// // 	}
	// // });

	// useEffect(() => {
	// 	if (dates.length < 8) {
	// 		const arr = dates.concat(props.nodeHoliday);
	// 		setDates(arr);
	// 	}
	// }, [props.nodeHoliday]);

	useEffect(() => {
		//const editedData = dataUpdated;
		//editedData.nodeHoliday = props.nodeHoliday;
		// disPatch({ type: 'NODE_DATA_UPDATE', dataUpdated: editedData });
	}, [props.nodeHoliday]);

	return (
		<div style={ styles.section }>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/icon?family=Material+Icons"
			/>
			<div style={ styles.head }>
				<p style={ styles.p }>Holidays</p>
				<Icon
					style={ styles.btn }
					color="primary"
					onClick={ handleDateAdd }
				>
					add_circle
				</Icon>
			</div>
			<div style={ styles.grid }>
				{props.nodeHoliday.map((date, index) => (
					<div style={ styles.input }>
						<div>
							{/* <TextField
								value={ date.date }
								onChange={ (e) => handleDateChange(e, index) }
								type="text"
								label="mm-dd-yyyy"
								size="small"
							/> */}
							<input
								// value={ date.date }
								value={ structureDate(date) }
								onChange={ (e) => handleDateChange(e, index) }
								type="date"
								style={ styles.border }
							/>
						</div>
						<div style={ styles.delete }>
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
