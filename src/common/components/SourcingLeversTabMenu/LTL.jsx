import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cost from '../SourcingLeversTabs/Cost/Cost';
import SourcingSetup from '../SourcingLeversTabs/SourcingSetup/SourcingSetup';
import LeadTime from '../SourcingLeversTabs/Leadtime/LeadTime';
import ATP from '../SourcingLeversTabs/ATP/ATP';

const styles = {
	tabs: {
		marginLeft: '10px',
		fontSize: '16px',
		fontFamily: 'sans-serif',
		fontStyle: 'normal',
		fontWeight: '500',
		textTransform: 'none'
	},
	activeTab: {
		backgroundColor: '#126BD6',
		borderRadius: '5px',
		marginLeft: '10px',
		color: 'white',
		fontSize: '16px',
		fontFamily: 'sans-serif',
		fontStyle: 'normal',
		fontWeight: '500',
		textTransform: 'none'
	},
	tabPanel: {
		padding: '0',
		margin: '0'
	}
};

const LTL = () => {
	const fullFilmentTypecode = 5;
	const nodeLtlSourcingRules = useSelector((s) => {
		return s.nodeFormData.nodeFulfillmentEntity.nodeSourcingRules.find(propType => propType?.fullFillmentType?.fulfillmentTypeCode === fullFilmentTypecode )
	}); 




	//default data update to form
	useEffect(() => {
		if(nodeLtlSourcingRules && nodeLtlSourcingRules.nodeProcessingCost) {
			setNodeCost(nodeLtlSourcingRules.nodeProcessingCost);
		}

		if(nodeLtlSourcingRules && nodeLtlSourcingRules.nodeProcessingWeight) {
			setNodeWeight(nodeLtlSourcingRules.nodeProcessingWeight);
		}

		if(nodeLtlSourcingRules && nodeLtlSourcingRules.outboundTransportationWeight) {
			setTransWeight(nodeLtlSourcingRules.outboundTransportationWeight);
		}

		if(nodeLtlSourcingRules && nodeLtlSourcingRules.fulfillmentTypeEligibity) {
			setDelivery(nodeLtlSourcingRules.fulfillmentTypeEligibity);
		}
		if(nodeLtlSourcingRules && nodeLtlSourcingRules.fulfillmentTypeEnabled) {
			setSourcing(nodeLtlSourcingRules.fulfillmentTypeEnabled);
		}

		if(nodeLtlSourcingRules && nodeLtlSourcingRules.lead_time_details && nodeLtlSourcingRules.lead_time_details.processingTime) {
			setDays(nodeLtlSourcingRules.lead_time_details.processingTime);
		}
		if(nodeLtlSourcingRules && nodeLtlSourcingRules.lead_time_details && nodeLtlSourcingRules.lead_time_details.nodeBuffer) {
			setNodeBuffer(nodeLtlSourcingRules.lead_time_details.nodeBuffer);
		}
		if(nodeLtlSourcingRules && nodeLtlSourcingRules.lead_time_details && nodeLtlSourcingRules.lead_time_details.orderEndTime) {
			setCutOffTime(nodeLtlSourcingRules.lead_time_details.orderEndTime);
		}
	}, [nodeLtlSourcingRules]);

	const [nodeCost, setNodeCost] = useState(0);
	const [nodeWeight, setNodeWeight] = useState(100);
	const [transWeight, setTransWeight] = useState(100);

	const handleNodeCost = (e) => {
		setNodeCost(e.target.value);
		nodeLtlSourcingRules.nodeProcessingCost = e.target.value;
	};

	const handleNodeWeight = (e) => {
		setNodeWeight(e.target.value);
		nodeLtlSourcingRules.nodeProcessingWeight = e.target.value;
	};

	const handleTransWeight = (e) => {
		setTransWeight(e.target.value);
		nodeLtlSourcingRules.outboundTransportationWeight = e.target.value;
	};

	// Sourcing Setup
	const [delivery, setDelivery] = useState('off');
	const [sourcing, setSourcing] = useState('off');

	const handleDelivery = (e) => {
		setDelivery(e.target.value);
		nodeLtlSourcingRules.fulfillmentTypeEligibity = (e.target.value === 'true');
	};

	const handleSourcing = (e) => {
		setSourcing(e.target.value);
		nodeLtlSourcingRules.fulfillmentTypeEnabled = (e.target.value === 'true');
	};

	// LeadTime
	const [nodeBuffer, setNodeBuffer] = useState(0);
	const [cutOffTime, setCutOffTime] = useState('18:15');
	const [hours, setHours] = useState(0);
	const [mins, setMins] = useState(0);

	const handleNodeBuffer = (e) => {
		setNodeBuffer(e.target.value);
		nodeLtlSourcingRules.lead_time_details.nodeBuffer = parseInt(e.target.value, 10);
	};

	const handleCutOffTime = (e) => {
		setCutOffTime(e.target.value);
		nodeLtlSourcingRules.lead_time_details.orderEndTime = parseInt(e.target.value, 10);
	};

	const handleHours = (e) => {
		setHours(e.target.value);
	};

	const handleMins = (e) => {
		setMins(e.target.value);
	};

	const totalTime = ((hours * 60) + parseInt(mins, 10));


	// ATP
	const [days, setDays] = useState(0);

	const handleDays = (e) => {
		setDays(e.target.value);
		nodeLtlSourcingRules.processingTime = e.target.value;
	};

	const [value, setValue] = React.useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div>
			<div>
				<Box sx={{ width: '100%', typography: 'body1' }}>
					<TabContext value={ value }>
						<Box>
							<TabList onChange={ handleChange } aria-label="lab API tabs example">
								<Tab style={ (value === '1') ? styles.activeTab : styles.tabs } label="Leadtime" value="1" />
								<Tab style={ (value === '2') ? styles.activeTab : styles.tabs } label="Sourcing Setup" value="2" />
								<Tab style={ (value === '3') ? styles.activeTab : styles.tabs } label="Cost" value="3" />
								<Tab style={ (value === '4') ? styles.activeTab : styles.tabs } label="ATP" value="4" />
							</TabList>
						</Box>
						<TabPanel style={ styles.tabPanel } value="1">
							<LeadTime
								nodeBuffer={ nodeBuffer }
								handleNodeBuffer={ handleNodeBuffer }
								cutOffTime={ cutOffTime }
								handleCutOffTime={ handleCutOffTime }
								hours={ hours }
								handleHours={ handleHours }
								mins={ mins }
								handleMins={ handleMins }
							/>
						</TabPanel>
						<TabPanel style={ styles.tabPanel } value="2">
							<SourcingSetup
								delivery={ delivery }
								handleDelivery={ handleDelivery }
								sourcing={ sourcing }
								handleSourcing={ handleSourcing }
							/>
						</TabPanel>
						<TabPanel style={ styles.tabPanel } value="3">
							<Cost
								nodeCost={ nodeCost }
								handleNodeCost={ handleNodeCost }
								nodeWeight={ nodeWeight }
								handleNodeWeight={ handleNodeWeight }
								transWeight={ transWeight }
								handleTransWeight={ handleTransWeight }
							/>
						</TabPanel>
						<TabPanel style={ styles.tabPanel } value="4">
							<ATP
								days={ days }
								handleDays={ handleDays }
							/>
						</TabPanel>
					</TabContext>
				</Box>
			</div>
		</div>
	);
};
export default LTL;
