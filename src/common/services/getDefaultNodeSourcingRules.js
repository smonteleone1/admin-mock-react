import APIConfig from '../utils/APIConfig';


function getDefaultNodeSourcingRules() {
	// console.log('itemType', itemType);
	return (dispatch) => {
		dispatch({ type: 'GET_NODE_SOURCING_TYPE_REQUEST' });
		APIConfig.get('/getDefaultNodeSourcingRules')
			.then((res) => {
				const { data } = res;
				const nodeSourcingRulesData = { nodeFulfillmentEntity: { nodeSourcingRules: data }} ;
				dispatch({ type: 'NODE_DATA_UPDATE', data: nodeSourcingRulesData });
			}).catch(() => {
				dispatch({ type: 'UPDATE_NODE_SOURCING_TYPE_SUCCESS' });
			});
	};
}


function getNodeSourcingRulesByNodeId(nodeId) {
	// console.log('itemType', itemType);
	return (dispatch) => {
		dispatch({ type: 'GET_NODE_SOURCING_TYPE_REQUEST' });
		APIConfig.get(`/getSourcingRulesByNode?nodeId=${nodeId}`)
			.then((res) => {
				const { data } = res;
				const nodeSourcingRulesData = { nodeFulfillmentEntity: { nodeSourcingRules: data }} ;
				dispatch({ type: 'NODE_DATA_UPDATE', data: nodeSourcingRulesData });
			}).catch(() => {
				dispatch({ type: 'UPDATE_NODE_SOURCING_TYPE_SUCCESS' });
			});
	};
}

export { getDefaultNodeSourcingRules, getNodeSourcingRulesByNodeId };
