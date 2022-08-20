// const inventoryInsightsMockData = require('./inventoryInsightsAssisted.modal.json');

import inventoryInsightsMockData from './inventoryInsightsAssisted.modal.json';

const INVENTORY_INSIGHTS_ASSISTED_DATA_INITIAL_STATE = 'INVENTORY_INSIGHTS_ASSISTED_DATA_INITIAL_STATE';

//  const initialState =  {
//     data: nodeStarAssistedMockData,
//     isRequest: false
// }

const nodeDetailsData = (state = inventoryInsightsMockData, action) => {
	switch (action.type) {
	case INVENTORY_INSIGHTS_ASSISTED_DATA_INITIAL_STATE:
		return {
			...state
		};
	default: return state;
	}
};

export default nodeDetailsData;
