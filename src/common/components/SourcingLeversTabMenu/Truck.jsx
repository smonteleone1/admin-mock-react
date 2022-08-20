import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TruckInfo from '../SourcingLeversTabs/TruckInfo/TruckInfo';
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

const trucks = [{
	truckTypeCode: 1,
	shortDescription: 'Box Truck'
}, {
	truckTypeCode: 2,
	shortDescription: 'Large Flat Bed'
}, {
	truckTypeCode: 3,
	shortDescription: 'Pro Flat Bed'
}];

const Truck = () => {
	const fullFilmentTypecoe = 3;
	const nodeDeliverySourcingRulesData = useSelector((s) => {
		return s.nodeFormData.nodeFulfillmentEntity.nodeSourcingRules.find(propType => propType?.fullFillmentType?.fulfillmentTypeCode === fullFilmentTypecoe)
	});
	
	const [miles, setMiles] = useState(0);
	const [truckType, setTruckType] = useState('box-truck');
	const [selectedTrucks, setSelectedTrucks] = React.useState([]);


	useEffect(() => {
		if (nodeDeliverySourcingRulesData && nodeDeliverySourcingRulesData.deliveryDriveMiles) {
			setMiles(nodeDeliverySourcingRulesData.deliveryDriveMiles);
		}
		if (nodeDeliverySourcingRulesData && nodeDeliverySourcingRulesData.selectedTrucks) {
			setSelectedTrucks(nodeDeliverySourcingRulesData.selectedTrucks);
		}
		if (nodeDeliverySourcingRulesData && nodeDeliverySourcingRulesData.processingTime) {
			setDays(nodeDeliverySourcingRulesData.processingTime);
		}
	}, [nodeDeliverySourcingRulesData]);

	const handleTrucks = (e) => {
		const {
			target: { value }
		} = e;
		setSelectedTrucks(value);
		nodeDeliverySourcingRulesData.selectedTrucks = value;
	};

	const handleMiles = (e) => {
		setMiles(e.target.value);
		nodeDeliverySourcingRulesData.deliveryDriveMiles = e.target.value
	};

	const handleTruckType = (e) => {
		setTruckType(e.target.value);
		nodeDeliverySourcingRulesData.truckType = e.target.value
	};

	// ATP
	const [days, setDays] = useState(0);
	const handleDays = (e) => {
		setDays(e.target.value);
		nodeDeliverySourcingRulesData.processingTime = e.target.value;
	};

	const [value, setValue] = React.useState('1');
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div>
			<div>
				<Box sx={{ width: '100%', typography: 'body1' }}>
					<TabContext value={value}>
						<Box>
							<TabList onChange={handleChange} aria-label="tabs">
								<Tab style={(value === '1') ? styles.activeTab : styles.tabs} label="Truck Info" value="1" />
								<Tab style={(value === '2') ? styles.activeTab : styles.tabs} label="ATP" value="2" />
							</TabList>
						</Box>
						<TabPanel style={styles.tabPanel} value="1">
							<TruckInfo
								miles={miles}
								handleMiles={handleMiles}
								truckType={truckType}
								truckinfo
								handleTruckType={handleTruckType}
								trucks={trucks}
								selectedTrucks= {selectedTrucks}
								handleTrucks={handleTrucks}
							/>
						</TabPanel>
						<TabPanel style={{ margin: '0', padding: '0' }} value="2">
							<ATP
								days={days}
								handleDays={handleDays}
							/>
						</TabPanel>
					</TabContext>
				</Box>
			</div>
		</div>
	);
};
export default Truck;
