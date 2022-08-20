import React from 'react';
import {
	TextField
} from '@backyard/react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@material-ui/styles';
import { TruckDiv } from './style';

const useStyle = makeStyles({
	section: {
		border: '1px solid #126BD6',
		borderRadius: '8px',
		height: '200px',
		padding: '16px'
	}
});

const TruckInfo = (props) => {
	const classes = useStyle();

	return (
		<div className={ classes.section }>
			<TruckDiv>
				<div className="cost">
					<div className="nodeCost">
						<p className="p">Drive Radius</p>
						<TextField value={ props.miles } onChange={ props.handleMiles } label="Miles" />
					</div>
					<div className="nodeCost">
						<p className="p2">Truck Supported</p>
						<FormControl sx={{ width: 150 }}>
							<Select multiple value={ props.selectedTrucks } onChange={ props.handleTrucks }>
								{props.trucks && props.trucks.length>0 && props.trucks.map((item)=> (
									<MenuItem key={item.truckTypeCode} value={ item.truckTypeCode }>{item.shortDescription}</MenuItem>
								))
							 }
							</Select>
						</FormControl>
					</div>
				</div>
			</TruckDiv>
		</div>
	);
};
export default TruckInfo;
