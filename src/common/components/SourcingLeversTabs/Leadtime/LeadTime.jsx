import React from 'react';
import { TextField as Text } from '@backyard/react';
import { makeStyles } from '@material-ui/styles';
import { LeadTimeDiv } from './styles';

const useStyle = makeStyles({
	section: {
		border: '1px solid #126BD6',
		borderRadius: '8px',
		height: '200px',
		padding: '16px'
	}
});

const LeadTime = (props) => {
	const classes = useStyle();

	return (
		<div className={ classes.section }>
			<LeadTimeDiv>
				<div className="cost">
					<div className="nodeCost">
						<p className="p">Order Processing Time</p>
						<div className="input">
							<Text value={ props.hours } onChange={ props.handleHours } label="Hours" />
						</div>
						<div className="input2">
							<Text value={ props.mins } onChange={ props.handleMins } label="Minutes" />
						</div>
					</div>
					<div className="nodeWeight">
						<p className="p">Order Cutoff Time</p>
						<Text style={{ cursor: 'pointer' }} type="time" value={ props.cutOffTime } onChange={ props.handleCutOffTime } />
					</div>
					<div>
						<p className="p">Node Buffer</p>
						<Text value={ props.nodeBuffer } onChange={ props.handleNodeBuffer } label="Days" />
					</div>
				</div>
			</LeadTimeDiv>
		</div>
	);
};
export default LeadTime;
