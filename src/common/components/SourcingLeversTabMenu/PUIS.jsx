import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
		// width: '111px',
		// height: '43px'

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
		// width: '111px',
		// height: '43px'
	},
	tabPanel: {
		padding: '0',
		margin: '0'
	}

};

const PUIS = () => {
	const fullFilmentTypecode = 2;
	const nodePuisSourcingRulesData = useSelector((s) => {
		return s.nodeFormData.nodeFulfillmentEntity.nodeSourcingRules.find(propType => propType?.fullFillmentType?.fulfillmentTypeCode === fullFilmentTypecode)
	});

	useEffect(() => {
		if(nodePuisSourcingRulesData && nodePuisSourcingRulesData.fulfillmentTypeEligibity) {
			setDelivery(nodePuisSourcingRulesData.fulfillmentTypeEligibity);
		}
		if(nodePuisSourcingRulesData && nodePuisSourcingRulesData.fulfillmentTypeEnabled) {
			setSourcing(nodePuisSourcingRulesData.fulfillmentTypeEnabled);
		}

		if(nodePuisSourcingRulesData && nodePuisSourcingRulesData.lead_time_details && nodePuisSourcingRulesData.lead_time_details.processingTime) {
			setDays(nodePuisSourcingRulesData.lead_time_details.processingTime);
		}
		if(nodePuisSourcingRulesData && nodePuisSourcingRulesData.lead_time_details && nodePuisSourcingRulesData.lead_time_details.nodeBuffer) {
			setNodeBuffer(nodePuisSourcingRulesData.lead_time_details.nodeBuffer);
		}
		if(nodePuisSourcingRulesData && nodePuisSourcingRulesData.lead_time_details && nodePuisSourcingRulesData.lead_time_details.orderEndTime) {
			setCutOffTime(nodePuisSourcingRulesData.lead_time_details.orderEndTime);
		}

		if(nodePuisSourcingRulesData && nodePuisSourcingRulesData.lead_time_details && nodePuisSourcingRulesData.lead_time_details.hours) {
			setHours(nodePuisSourcingRulesData.lead_time_details.hours);
		}

		if(nodePuisSourcingRulesData && nodePuisSourcingRulesData.lead_time_details && nodePuisSourcingRulesData.lead_time_details.mins) {
			setMins(nodePuisSourcingRulesData.lead_time_details.mins);
		}

	}, [nodePuisSourcingRulesData]);

	
	// Sourcing Setup
	const [delivery, setDelivery] = useState('off');
	const [sourcing, setSourcing] = useState('off');

	const handleDelivery = (e) => {
		const delivery = e.target.value === 'true';
		setDelivery(delivery)
		nodePuisSourcingRulesData.fulfillmentTypeEligibity = delivery;
	};

	const handleSourcing = (e) => {
		const sourcing = e.target.value === 'true';
		setSourcing(sourcing);
		nodePuisSourcingRulesData.fulfillmentTypeEnabled = sourcing;
	};

	// LeadTime
	const [nodeBuffer, setNodeBuffer] = useState(0);
	const [cutOffTime, setCutOffTime] = useState('18:15');
	const [hours, setHours] = useState(0);
	const [mins, setMins] = useState(0);

	const handleNodeBuffer = (e) => {
		setNodeBuffer(e.target.value);
		nodePuisSourcingRulesData.lead_time_details.nodeBuffer = e.target.value;
	};

	const handleCutOffTime = (e) => {
		setCutOffTime(e.target.value);
		nodePuisSourcingRulesData.lead_time_details.orderEndTime = e.target.value;
	};

	const handleDays = (e) => {
		setDays(e.target.value);
		nodePuisSourcingRulesData.lead_time_details.processingTime = e.target.value;
	};

	const handleHours = (e) => {
		setHours(e.target.value);
		nodePuisSourcingRulesData.lead_time_details.hours = e.target.value;
	};

	const handleMins = (e) => {
		setMins(e.target.value);
		nodePuisSourcingRulesData.lead_time_details.mins = e.target.value;
	};


	// ATP
	const [days, setDays] = useState(0);
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
							<TabList onChange={ handleChange } aria-label="tabs">
								<Tab style={ (value === '1') ? styles.activeTab : styles.tabs } label="Sourcing Setup" value="1" />
								<Tab style={ (value === '2') ? styles.activeTab : styles.tabs } label="Leadtime" value="2" />
								<Tab style={ (value === '3') ? styles.activeTab : styles.tabs } label="ATP" value="3" />
							</TabList>
						</Box>
						<TabPanel style={ styles.tabPanel } value="1">
							<SourcingSetup
								delivery={ delivery }
								handleDelivery={ handleDelivery }
								sourcing={ sourcing }
								handleSourcing={ handleSourcing }
							/>
						</TabPanel>
						<TabPanel style={ styles.tabPanel } value="2">
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
						<TabPanel style={ styles.tabPanel } value="3">
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
export default PUIS;
