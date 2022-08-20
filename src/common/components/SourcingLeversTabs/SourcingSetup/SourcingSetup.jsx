import React from 'react';
import {
	Select, Option
} from '@backyard/react';
import { makeStyles } from '@material-ui/styles';
import { SourcingDiv } from './style';

const useStyle = makeStyles({
	section: {
		border: '1px solid #126BD6',
		borderRadius: '8px',
		height: '200px',
		padding: '16px'
	}
});

const SourcingSetup = (props) => {
	const classes = useStyle();
	return (
		<div className={ classes.section }>
			<SourcingDiv>
				<div className="cost">
					<div className="nodeCost">
						<p className="p">Delivery</p>
						<Select
							value={ props.delivery }
							onChange={ props.handleDelivery }
							style={{ cursor: 'pointer' }}
						>
							<Option value={ false }>Off</Option>
							<Option value={ true }>Eligable</Option>
						</Select>
					</div>

					<div className="nodeCost">
						<p className="p">Sourcing</p>
						<Select
							value={ props.sourcing }
							onChange={ props.handleSourcing }
							style={{ cursor: 'pointer' }}
						>
							<Option value={ false }>Off</Option>
							<Option value={ true }>Active</Option>
						</Select>
					</div>
				</div>
			</SourcingDiv>
		</div>
	);
};
export default SourcingSetup;
