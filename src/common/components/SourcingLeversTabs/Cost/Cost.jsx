import React from 'react';
import { TextField } from '@backyard/react';
import { makeStyles } from '@material-ui/styles';
import { CostDiv } from './style';

const useStyle = makeStyles({
	section: {
		border: '1px solid #126BD6',
		borderRadius: '8px',
		height: '200px',
		padding: '16px'
	}
});

const Cost = (props) => {
	const classes = useStyle();

	return (
		<div className={ classes.section }>
			<CostDiv>
				<div className="cost">
					<div className="nodeCost">
						<p className="p">Node Cost</p>
						<TextField
							value={ props.nodeCost }
							onChange={ props.handleNodeCost } label="$"
						/>
					</div>
					<div className="nodeWeight">
						<p className="p">Node Weight</p>
						<TextField value={ props.nodeWeight } onChange={ props.handleNodeWeight } label="%" />
					</div>
					<div>
						<p className="p">Transportation Weight</p>
						<TextField value={ props.transWeight } onChange={ props.handleTransWeight } label="%" />
					</div>
				</div>
			</CostDiv>
		</div>
	);
};
export default Cost;
