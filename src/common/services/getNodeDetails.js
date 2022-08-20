import APIConfig from '../utils/APIConfig';

// const inventoryInsightsSearch = require('./inventoryInsightsSearch.json');
// const inventoryInsightsSearchSos = require('./inventoryInsightsSearchSos.json');

// import inventoryInsightsSearchSos from './inventoryInsightsSearchSos.json';

function getNodeDetails(nodeId) {
	// console.log('itemType', itemType);
	return (dispatch) => {
		dispatch({ type: 'INVENTORY_INSIGHTS_SEARCH_REQUEST' });
		APIConfig.get(`/getNodeById?node=${nodeId}`)
			.then((res) => {
				const { data } = res;
				//const nodeMaster = { nodeMaster : data };
				dispatch({ type: 'INVENTORY_INSIGHTS_SEARCH_SUCCESS', data });
				//dispatch({ type: 'NODE_MASTER_DATA_UPDATE', data: nodeMaster });
			}).catch(() => {
				dispatch({ type: 'NODE-UPDATE_SUCCESS' });
			});
	};
}



export { getNodeDetails };
