import React from 'react';
import { TextField } from '@backyard/react';
import { makeStyles } from '@material-ui/styles';
import { ATPDiv } from './style';

const useStyle = makeStyles({
	section: {
		border: '1px solid #126BD6',
		borderRadius: '8px',
		height: '200px',
		padding: '16px'
	}
});

const ATP = (props) => {
	const classes = useStyle();

	return (
		<div className={ classes.section }>
			<ATPDiv>
				<div className="cost">
					<div className="nodeCost">
						<p className="p">Processing Time</p>
						<TextField value={ props.days } onChange={ props.handleDays } label="Days" />
					</div>
				</div>
			</ATPDiv>
		</div>
	);
};
export default ATP;
