const mapNodeDetails = (nodeData) => {
	const response = {
		...nodeData.nodeMaster,
		leadTimeInfo : {
			"PARCEL" : getParcelSourceLevellInfo(nodeData,4),
			"PUIS" : getParcelSourceLevellInfo(nodeData,2),
			"LTL" : getParcelSourceLevellInfo(nodeData, 5),
			"TRUCK" : getParcelSourceLevellInfo(nodeData, 3),
		}
	};
	return response;
}

const getParcelSourceLevellInfo = (nodeData, fullFilmentTypecode) => {
	const sourceRule = nodeData.nodeFulfillmentEntity.nodeSourcingRules.find(propType => propType?.fullFillmentType?.fulfillmentTypeCode === fullFilmentTypecode);
	return sourceRule;
}

export { mapNodeDetails }