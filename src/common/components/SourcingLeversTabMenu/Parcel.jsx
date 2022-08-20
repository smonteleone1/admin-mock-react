import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Capacity from '../SourcingLeversTabs/Capacity/Capacity';
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

const Parcel = () => {
	const disPatch = useDispatch();
	const fullFilmentTypecoe = 4;
	const nodeParcelSourcingRules = useSelector((s) => {
		return s.nodeFormData.nodeFulfillmentEntity.nodeSourcingRules.find(propType => propType?.fullFillmentType?.fulfillmentTypeCode === fullFilmentTypecoe )
	}); 

	const nodeFormData = useSelector((s) => {
		return s.nodeFormData;
	}); 
	
	// Cost
	const [nodeCost, setNodeCost] = useState(0);
	const [nodeWeight, setNodeWeight] = useState(100);
	const [transWeight, setTransWeight] = useState(100);
	// LeadTime
	const [nodeBuffer, setNodeBuffer] = useState(0);
	const [cutOffTime, setCutOffTime] = useState('18:15');
	const [hours, setHours] = useState(0);
	const [mins, setMins] = useState(0);

	// ATP
	const [days, setDays] = useState(0);
	
	
	useEffect(() => {
		const setCapacities = (capacity) => {
			if(capacity && capacity.length > 0) {
				const mondayCapacity = capacity.find(cap => cap.workingDayCode === 1);
				if(mondayCapacity) {
					setMonCap(mondayCapacity);
				}
				const tusdayCapacity = capacity.find(cap => cap.workingDayCode === 2);
				if(tusdayCapacity) {
					setTueCap(tusdayCapacity);
				}
				const wensdayCapacity = capacity.find(cap => cap.workingDayCode === 3);
				if(wensdayCapacity) {
					setWedCap(wensdayCapacity);
				}
				const thursdayCapacity = capacity.find(cap => cap.workingDayCode === 4);
				if(thursdayCapacity) {
					setThurCap(thursdayCapacity);
				}
				const fridayCapacity = capacity.find(cap => cap.workingDayCode === 5);
				if(fridayCapacity) {
					setFriCap(fridayCapacity);
				}
				const satardayCapacity = capacity.find(cap => cap.workingDayCode === 6);
				if(satardayCapacity) {
					setSatCap(satardayCapacity);
				}
				const sundayCapacity = capacity.find(cap => cap.workingDayCode === 0);
				if(sundayCapacity) {
					setSunCap(sundayCapacity);
				}
			}
		}

		if(nodeParcelSourcingRules) {
			setCapacities(nodeParcelSourcingRules.nodeCapacity);
			if(nodeParcelSourcingRules.lead_time_details && nodeParcelSourcingRules.lead_time_details.processingTime) {
				setDays(nodeParcelSourcingRules.lead_time_details.processingTime);
			}
			if(nodeParcelSourcingRules.lead_time_details && nodeParcelSourcingRules.lead_time_details.nodeBufferDays) {
				setNodeBuffer(nodeParcelSourcingRules.lead_time_details.nodeBufferDays);
			}
			if(nodeParcelSourcingRules.lead_time_details && nodeParcelSourcingRules.lead_time_details.orderCutoffTime) {
				setCutOffTime(nodeParcelSourcingRules.lead_time_details.orderCutoffTime);
			}

			if(nodeParcelSourcingRules.lead_time_details && nodeParcelSourcingRules.lead_time_details.orderStartTime) {
				setHours(nodeParcelSourcingRules.lead_time_details.orderStartTime);
			}

			if(nodeParcelSourcingRules.lead_time_details && nodeParcelSourcingRules.lead_time_details.mins) {
				setMins(nodeParcelSourcingRules.lead_time_details.mins);
			}
			if(nodeParcelSourcingRules.fulfillmentTypeEligibity) {
				setDelivery(nodeParcelSourcingRules.fulfillmentTypeEligibity);
			}
			if(nodeParcelSourcingRules.fulfillmentTypeEnabled) {
				setSourcing(nodeParcelSourcingRules.fulfillmentTypeEnabled);
			}
			if(nodeParcelSourcingRules.nodeProcessingCost) {
				setNodeCost(nodeParcelSourcingRules.nodeProcessingCost);
			}
			if(nodeParcelSourcingRules.nodeProcessingWeight) {
				setNodeWeight(nodeParcelSourcingRules.nodeProcessingWeight);
			}
			if(nodeParcelSourcingRules.outboundTransportationWeight) {
				setTransWeight(nodeParcelSourcingRules.outboundTransportationWeight);
			}
		}
	}, [nodeParcelSourcingRules, nodeFormData])


	const handleNodeCost = (e) => {
		setNodeCost(e.target.value);
		nodeFormData.nodeMaster.nodeProcessingCost = e.target.value;
		nodeParcelSourcingRules.nodeProcessingCost = e.target.value;
	};

	const handleNodeWeight = (e) => {
		setNodeWeight(e.target.value);
		nodeFormData.nodeMaster.nodeProcessingWeight = e.target.value;
		nodeParcelSourcingRules.nodeProcessingWeight = e.target.value;
	};

	const handleTransWeight = (e) => {
		nodeFormData.nodeMaster.outboundTransportationWeight = e.target.value;
		nodeParcelSourcingRules.outboundTransportationWeight = e.target.value;
	};

	// Sourcing Setup
	const [delivery, setDelivery] = useState('off');
	const [sourcing, setSourcing] = useState('off');

	const handleDelivery = (e) => {
		const delivery = e.target.value === 'true';
		setDelivery(delivery)
		nodeParcelSourcingRules.fulfillmentTypeEligibity = delivery;
	};

	const handleSourcing = (e) => {
		const sourcing = e.target.value === 'true';
		setSourcing(sourcing);
		nodeParcelSourcingRules.fulfillmentTypeEnabled = sourcing;
	};


	const handleDays = (e) => {
		setDays(e.target.value);
		nodeParcelSourcingRules.lead_time_details.processingTime = e.target.value;
	};

	const handleNodeBuffer = (e) => {
		setNodeBuffer(e.target.value);
		nodeParcelSourcingRules.lead_time_details.nodeBufferDays = e.target.value;
	};

	const handleCutOffTime = (e) => {
		setCutOffTime(e.target.value);
		nodeParcelSourcingRules.lead_time_details.orderCutoffTime = e.target.value;
	};

	const handleHours = (e) => {
		setHours(e.target.value);
		nodeParcelSourcingRules.lead_time_details.orderStartTime = e.target.value;
	};

	const handleMins = (e) => {
		setMins(e.target.value);
		nodeParcelSourcingRules.lead_time_details.mins = e.target.value;
	};

	
	
	// Capacity
	const [monCap, setMonCap] = React.useState({});
	const [tueCap, setTueCap] = React.useState({});
	const [wedCap, setWedCap] = React.useState({});
	const [thurCap, setThurCap] = React.useState({});
	const [friCap, setFriCap] = React.useState({});
	const [satCap, setSatCap] = React.useState({});
	const [sunCap, setSunCap] = React.useState({});

	const [check, setCheck] = React.useState(false);
	const toggleChecked = () => setCheck((prev) => !prev);


	const handleCapacity = (e, propTypeCode, workingDayCode) => {
		const nodeSourcingRule = nodeFormData.nodeFulfillmentEntity.nodeSourcingRules.find(propType => propType?.fullFillmentType?.fulfillmentTypeCode === propTypeCode);
		const capacityObj = nodeSourcingRule.nodeCapacity.find(cap => cap.workingDayCode === workingDayCode);
		if(capacityObj) {
			capacityObj.capacity = e.target.value;
			disPatch({ type: 'NODE_DATA_UPDATE', data: nodeFormData });
		}
	}

	const handleMonCap = (e) => {
		handleCapacity(e, 4, 1);
	};

	const handleTueCap = (e) => {
		handleCapacity(e, 4, 2);
	};

	const handleWedCap = (e) => {
		handleCapacity(e, 4, 3);
	};

	const handleThurCap = (e) => {
		handleCapacity(e, 4, 4);
	};

	const handleFriCap = (e) => {
		handleCapacity(e, 4, 5);
	};

	const handleSatCap = (e) => {
		handleCapacity(e, 4, 6);
	};

	const handleSunCap = (e) => {
		handleCapacity(e, 4, 0);
	};

	function handleAllChange(e) {
		handleMonCap(e);
		handleTueCap(e);
		handleWedCap(e);
		handleThurCap(e);
		handleFriCap(e);
		handleSatCap(e);
		handleSunCap(e);
	}

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
								<Tab style={ (value === '1') ? styles.activeTab : styles.tabs } label="Capacity" value="1" />
								<Tab style={ (value === '2') ? styles.activeTab : styles.tabs } label="Leadtime" value="2" />
								<Tab style={ (value === '3') ? styles.activeTab : styles.tabs } label="Sourcing Setup" value="3" />
								<Tab style={ (value === '4') ? styles.activeTab : styles.tabs } label="Cost" value="4" />
								<Tab style={ (value === '5') ? styles.activeTab : styles.tabs } label="ATP" value="5" />
							</TabList>
						</Box>
						<TabPanel style={ styles.tabPanel } value="1">
							<Capacity
								monCap={ monCap.capacity || 0 }
								handleMonCap={ handleMonCap }
								tueCap={ tueCap.capacity || 0 }
								handleTueCap={ handleTueCap }
								wedCap={ wedCap.capacity || 0 }
								handleWedCap={ handleWedCap }
								thurCap={ thurCap.capacity || 0 }
								handleThurCap={ handleThurCap }
								friCap={ friCap.capacity || 0 }
								handleFriCap={ handleFriCap }
								satCap={ satCap.capacity || 0 }
								handleSatCap={ handleSatCap }
								sunCap={ sunCap.capacity || 0 }
								handleSunCap={ handleSunCap }
								handleAllChange={ handleAllChange }
								check={ check }
								toggleChecked={ toggleChecked }
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
							<SourcingSetup
								delivery={ delivery }
								handleDelivery={ handleDelivery }
								sourcing={ sourcing }
								handleSourcing={ handleSourcing }
							/>
						</TabPanel>
						<TabPanel style={ styles.tabPanel } value="4">
							<Cost
								nodeCost={ nodeCost }
								handleNodeCost={ handleNodeCost }
								nodeWeight={ nodeWeight }
								handleNodeWeight={ handleNodeWeight }
								transWeight={ transWeight }
								handleTransWeight={ handleTransWeight }
							/>
						</TabPanel>
						<TabPanel style={ styles.tabPanel } value="5">
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
export default Parcel;
