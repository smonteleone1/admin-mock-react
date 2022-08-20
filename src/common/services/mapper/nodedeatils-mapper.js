import moment from 'moment'

const mapNodeDetails = (nodeData) => {
	debugger;
	const response = {
		...nodeData.nodeMaster,
		nodeHolidays: mapNodeHolidays(nodeData.nodeMaster.nodeHolidays),
		leadTimeInfo : {
			"PARCEL" : getParcelSourceLevellInfo(nodeData,4),
			"PUIS" : getParcelSourceLevellInfo(nodeData,2),
			"LTL" : getParcelSourceLevellInfo(nodeData, 5),
			"TRUCK" : getParcelSourceLevellInfo(nodeData, 3),
		}
	};
	return response;
}

const mapNodeHolidays = (nodeHolidays) => {
	return nodeHolidays && nodeHolidays.length ? nodeHolidays.map(nodeHoliday => moment(nodeHoliday).format("YYYY-MM-DD")) : []
}

const getParcelSourceLevellInfo = (nodeData, fullFilmentTypecode) => {
	const sourceRule = nodeData.nodeFulfillmentEntity.nodeSourcingRules.find(propType => propType?.fullFillmentType?.fulfillmentTypeCode === fullFilmentTypecode);
	return sourceRule;
}

export { mapNodeDetails }