import React from 'react';
import { makeStyles } from '@material-ui/styles';
import OperatingHours from './OperatingHours';
// import Holidays from './Holidays';
import Carrier from './Carrier';

const useStyle = makeStyles({
	section: {
		width: '800px',
		height: '425px',
		margin: '8px',
		borderRadius: '6px'
	}
});

const Card = (props) => {
	const classes = useStyle();

	return (
		<div className={ classes.section }>
			<section>
				<OperatingHours
					workingDays={ props.workingDays }
					nodeHoliday={ props.nodeHoliday }
					setDates={ props.setDates }
				/>
			</section>
			<section>
				<Carrier srvcLvl={ props.srvcLvl } />
			</section>
		</div>
	);
};

export default Card;
