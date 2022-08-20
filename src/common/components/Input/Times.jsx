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
	const {
		dataUpdated
	} = useSelector((s) => s.nodeDetailsSearch);

	const disPatch = useDispatch();

	const [mondayStart, setMondayStart] = useState('');
	const [mondayEnd, setMondayEnd] = useState('');
	const [tuesdayStart, setTuesdayStart] = useState('00:00');
	const [tuesdayEnd, setTuesdayEnd] = useState('00:00');
	const [wednesdayStart, setWednesdayStart] = useState('00:00');
	const [wednesdayEnd, setWednesdayEnd] = useState('00:00');
	const [thursdayStart, setThursdayStart] = useState('00:00');
	const [thursdayEnd, setThursdayEnd] = useState('00:00');
	const [fridayStart, setFridayStart] = useState('00:00');
	const [fridayEnd, setFridayEnd] = useState('00:00');
	const [saturdayStart, setSaturdayStart] = useState('00:00');
	const [saturdayEnd, setSaturdayEnd] = useState('00:00');
	const [sundayStart, setSundayStart] = useState('00:00');
	const [sundayEnd, setSundayEnd] = useState('00:00');

	const [mondayClosed, setMondayClosed] = React.useState(false);
	const toggleChecked1 = () => setMondayClosed((prev) => !prev);

	const resetMondayStart = () => setMondayStart('00:00');
	const resetMondayEnd = () => setMondayEnd('00:00');

	function handleMondayClosed() {
		toggleChecked1();
		resetMondayStart();
		resetMondayEnd();
	}

	const [tuesdayClosed, setTuesdayClosed] = React.useState(false);
	const toggleChecked2 = () => setTuesdayClosed((prev) => !prev);

	const resetTuesdayStart = () => setTuesdayStart('00:00');
	const resetTuesdayEnd = () => setTuesdayEnd('00:00');

	function handleTuesdayClosed() {
		toggleChecked2();
		resetTuesdayStart();
		resetTuesdayEnd();
	}

	const [wednesdayClosed, setWednesdayClosed] = React.useState(false);
	const toggleChecked3 = () => setWednesdayClosed((prev) => !prev);

	const resetWednesdayStart = () => setWednesdayStart('00:00');
	const resetWednesdayEnd = () => setWednesdayEnd('00:00');

	function handleWednesdayClosed() {
		toggleChecked3();
		resetWednesdayStart();
		resetWednesdayEnd();
	}

	const [thursdayClosed, setThursdayClosed] = React.useState(false);
	const toggleChecked4 = () => setThursdayClosed((prev) => !prev);

	const resetThursdayStart = () => setThursdayStart('00:00');
	const resetThursdayEnd = () => setThursdayEnd('00:00');

	function handleThursdayClosed() {
		toggleChecked4();
		resetThursdayStart();
		resetThursdayEnd();
	}

	const [fridayClosed, setFridayClosed] = React.useState(false);
	const toggleChecked5 = () => setFridayClosed((prev) => !prev);

	const resetFridayStart = () => setFridayStart('00:00');
	const resetFridayEnd = () => setFridayEnd('00:00');

	function handleFridayClosed() {
		toggleChecked5();
		resetFridayStart();
		resetFridayEnd();
	}

	const [saturdayClosed, setSaturdayClosed] = React.useState(false);
	const toggleChecked6 = () => setSaturdayClosed((prev) => !prev);

	const resetSaturdayStart = () => setSaturdayStart('00:00');
	const resetSaturdayEnd = () => setSaturdayEnd('00:00');

	function handleSaturdayClosed() {
		toggleChecked6();
		resetSaturdayStart();
		resetSaturdayEnd();
	}

	const [sundayClosed, setSundayClosed] = React.useState(false);
	const toggleChecked7 = () => setSundayClosed((prev) => !prev);

	const resetSundayStart = () => setSundayStart('00:00');
	const resetSundayEnd = () => setSundayEnd('00:00');

	function handleSundayClosed() {
		toggleChecked7();
		resetSundayStart();
		resetSundayEnd();
	}

	function structureStartTime(time) {
		const val = time.split(':');
		const time2 = val[1];
		const start = time2.split('_');
		const startTime = start[0];
		const t1 = (startTime.length === 2) ? `${startTime}:00` : `0${startTime}:00`;

		return t1;
	}

	function structureEndTime(time) {
		const val = time.split(':');
		const time2 = val[1];
		const start = time2.split('_');
		const endTime = start[1];
		const t1 = (endTime.length === 2) ? `${endTime}:00` : `0${endTime}:00`;

		return t1;
	}

	function convertTime(time) {
		const time2 = time.split(':'); // convert to array

		// fetch
		const hours = Number(time2[0]);

		// calculate
		let timeValue;

		if (hours > 0 && hours <= 12) {
			timeValue = `${hours}`;
		} else if (hours > 12) {
			timeValue = `${hours - 12}`;
		} else if (hours === 0) {
			timeValue = '12';
		}

		// timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
		// timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
		// timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

		return timeValue;
	}

	useEffect(() => {
		if (props.workingDays && props.workingDays.length) {
			setMondayStart(structureStartTime(props.workingDays[0]));
			setTuesdayStart(structureStartTime(props.workingDays[1]));
			setWednesdayStart(structureStartTime(props.workingDays[2]));
			setThursdayStart(structureStartTime(props.workingDays[3]));
			setFridayStart(structureStartTime(props.workingDays[4]));
			setSaturdayStart(structureStartTime(props.workingDays[5]));
			setSundayStart(structureStartTime(props.workingDays[6]));

			setMondayEnd(structureEndTime(props.workingDays[0]));
			setTuesdayEnd(structureEndTime(props.workingDays[1]));
			setWednesdayEnd(structureEndTime(props.workingDays[2]));
			setThursdayEnd(structureEndTime(props.workingDays[3]));
			setFridayEnd(structureEndTime(props.workingDays[4]));
			setSaturdayEnd(structureEndTime(props.workingDays[5]));
			setSundayEnd(structureEndTime(props.workingDays[6]));
		}
	}, [props.workingDays]);

	const days = [
		`Mon:${convertTime(mondayStart)}_${convertTime(mondayEnd)}`,
		`Tue:${convertTime(tuesdayStart)}_${convertTime(tuesdayEnd)}`,
		`Wed:${convertTime(wednesdayStart)}_${convertTime(wednesdayEnd)}`,
		`Thu:${convertTime(thursdayStart)}_${convertTime(thursdayEnd)}`,
		`Fri:${convertTime(fridayStart)}_${convertTime(fridayEnd)}`,
		`Sat:${convertTime(saturdayStart)}_${convertTime(saturdayEnd)}`,
		`Sun:${convertTime(sundayStart)}_${convertTime(sundayEnd)}`
	];

	const handleMondayStart = (e) => {
		setMondayStart(e.target.value);
	};

	const handleMondayEnd = (e) => {
		setMondayEnd(e.target.value);
	};

	const handleTuesdayStart = (e) => {
		setTuesdayStart(e.target.value);
	};

	const handleTuesdayEnd = (e) => {
		setTuesdayEnd(e.target.value);
	};

	const handleWednesdayStart = (e) => {
		setWednesdayStart(e.target.value);
	};

	const handleWednesdayEnd = (e) => {
		setWednesdayEnd(e.target.value);
	};

	const handleThursdayStart = (e) => {
		setThursdayStart(e.target.value);
	};

	const handleThursdayEnd = (e) => {
		setThursdayEnd(e.target.value);
	};

	const handleFridayStart = (e) => {
		setFridayStart(e.target.value);
	};

	const handleFridayEnd = (e) => {
		setFridayEnd(e.target.value);
	};

	const handleSaturdayStart = (e) => {
		setSaturdayStart(e.target.value);
	};

	const handleSaturdayEnd = (e) => {
		setSaturdayEnd(e.target.value);
	};

	const handleSundayStart = (e) => {
		setSundayStart(e.target.value);
	};

	const handleSundayEnd = (e) => {
		setSundayEnd(e.target.value);
	};

	// const {
	// 	dataUpdated
	// } = useSelector((s) => s.nodeDetailsSearch);

	useEffect(() => {
		const editedData = dataUpdated;
		if (editedData) {
			editedData.workingDays = days;
			disPatch({ type: 'NODE_DATA_UPDATE', dataUpdated: editedData });
		}
	}, [mondayStart, mondayEnd, mondayClosed,
		tuesdayStart, tuesdayEnd, tuesdayClosed,
		wednesdayStart, wednesdayEnd, wednesdayClosed,
		thursdayStart, thursdayEnd, thursdayClosed,
		fridayStart, fridayEnd, fridayClosed,
		saturdayStart, saturdayEnd, saturdayClosed,
		sundayStart, sundayEnd, sundayClosed

	]);

	return (
		<div style={styles.section}>
			<TimeRow
				startTime={mondayStart}
				endTime={mondayEnd}
				handleStart={handleMondayStart}
				handleEnd={handleMondayEnd}
				day="Monday"
				closed={mondayClosed}
				handleClose={handleMondayClosed}
				days={days}
			/>
			<TimeRow
				startTime={tuesdayStart}
				endTime={tuesdayEnd}
				handleStart={handleTuesdayStart}
				handleEnd={handleTuesdayEnd}
				day="Tuesday"
				stripe
				closed={tuesdayClosed}
				handleClose={handleTuesdayClosed}
				days={days}
			/>
			<TimeRow
				startTime={wednesdayStart}
				endTime={wednesdayEnd}
				handleStart={handleWednesdayStart}
				handleEnd={handleWednesdayEnd}
				day="Wednesday"
				closed={wednesdayClosed}
				handleClose={handleWednesdayClosed}
				days={days}
			/>
			<TimeRow
				startTime={thursdayStart}
				endTime={thursdayEnd}
				handleStart={handleThursdayStart}
				handleEnd={handleThursdayEnd}
				day="Thursday"
				stripe
				closed={thursdayClosed}
				handleClose={handleThursdayClosed}
				days={days}
			/>
			<TimeRow
				startTime={fridayStart}
				endTime={fridayEnd}
				handleStart={handleFridayStart}
				handleEnd={handleFridayEnd}
				day="Friday"
				closed={fridayClosed}
				handleClose={handleFridayClosed}
				days={days}
			/>
			<TimeRow
				startTime={saturdayStart}
				endTime={saturdayEnd}
				handleStart={handleSaturdayStart}
				handleEnd={handleSaturdayEnd}
				day="Saturday"
				stripe
				closed={saturdayClosed}
				handleClose={handleSaturdayClosed}
				days={days}
			/>
			<TimeRow
				startTime={sundayStart}
				endTime={sundayEnd}
				handleStart={handleSundayStart}
				handleEnd={handleSundayEnd}
				day="Sunday"
				closed={sundayClosed}
				handleClose={handleSundayClosed}
				days={days}
			/>
		</div>
	);
};
export default Times;
