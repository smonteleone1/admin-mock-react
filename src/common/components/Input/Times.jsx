import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TimeRow from './TimeRow';

const styles = {
	section: {
		width: '50%',
		borderRight: '1px solid #DADCE0'
		// backgroundColor: '#FFFFFF',
		// height: '150px',
	}
};

const Times = (props) => {
	
	const nodeFormData = useSelector((s) => {
		return s.nodeFormData;
	}); 


	const [workingDays, setWorkingDays] = useState([]);
	const [tempWorkingDays, setTempWorkingDays] = useState([]);


	const getStartTime = (day) => {
		const startTime = day.split(":")[1].split("_")[0]
		return startTime.length === 1 ? `0${startTime}:00` : `${startTime}:00`;
	}

	const getEndTime = (day) => {
		const endTime =day.split(":")[1].split("_")[1];
		return endTime.length === 1 ? `0${endTime}:00` : `${endTime}:00`;
	}

	const getPlanEndTime = (day) => {
		return day.split(":")[1].split("_")[1];
	}

	const getPlanStartTime = (day) => {
		return day.split(":")[1].split("_")[0];
	}

	const getPlanDay = (day) => {
		const currentDay =  day.split(":")[0];
		return currentDay;
	}

	const handleStart = (day, index) => {
		const startDay = day.target.value.split(":")[0];
		const currentWorkingDay  = workingDays[index];
		workingDays[index] =  `${getPlanDay(currentWorkingDay)}:${startDay}_${getPlanEndTime(currentWorkingDay)}`;
		setWorkingDays([...workingDays]);
		nodeFormData.nodeMaster.workingDays = workingDays;	
	}

	const handleEnd = (day, index) => {
		const endDay = day.target.value.split(":")[0];
		const currentWorkingDay  =  workingDays[index];
		workingDays[index] = `${getPlanDay(currentWorkingDay)}:${getPlanStartTime(currentWorkingDay)}_${endDay}`
		setWorkingDays([...workingDays]);
		nodeFormData.nodeMaster.workingDays = workingDays;	
	}

	const handleClosed = (e, index) => {
		const checked = e.target.checked;
		if(checked) {
			const currentWorkingDay=  workingDays[index];
			workingDays[index] = `${getPlanDay(currentWorkingDay)}:00_00`
		} else {
			const currentWorkingDay=  tempWorkingDays[index];
			workingDays[index] = currentWorkingDay;
		}
		setWorkingDays([...workingDays]);
		nodeFormData.nodeMaster.workingDays = workingDays;	
	}

	const getDay = (day) => {
		const currentDay =  day.split(":")[0];
		switch(currentDay) {
		case 'Mon' :
			return 'Monday';
		case 'Tue' :
			return 'Tuesday';
		case 'Wed' :
			return 'Wensday';
		case 'Thu' :
			return 'Thursday';
		case 'Fri' :
			return 'Friday';
		case 'Sat' :
			return 'Satarday';								
		default:
			return currentDay;	
		}
	}

	useEffect(() => {
		nodeFormData.nodeMaster.workingDays = props.workingDays;	
		setWorkingDays(props.workingDays);
		setTempWorkingDays([...props.workingDays]);
	}, [nodeFormData.nodeMaster, props.workingDays]);

	return (
		<div style={styles.section}>
			{workingDays.map((workingDay, index) => (
			  <TimeRow
					startTime={getStartTime(workingDay)}
					endTime={getEndTime(workingDay)}
					handleStart={(e) => handleStart(e,index)}
					handleEnd={(e) => handleEnd(e,index)}
					day={getDay(workingDay)}
					closed={false}
					handleClose={ (e) => handleClosed(e,index)}
					days={workingDays}
				/>
			))}			
		</div>
	);
};
export default Times;
