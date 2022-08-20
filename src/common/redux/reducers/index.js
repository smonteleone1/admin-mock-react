import { combineReducers } from 'redux';
// import inventoryInsightsData from './inventoryInsightsAssistedModelData-reducer';
// import inventoryInsightsSearch from './inventoryInsightsSearch-reducer';

import nodeDetailsData from './nodeDetailsAssistedModelData-reducer';
import nodeDetailsSearch from './nodeDetailsSearch-reducer';
import nodeTypeDetails from './getNodeTypeDetails-reducer';
import nodeDefaultValues from './getNodeDefaultValuesData-reducer.js'
import nodeFormData from './nodeFormData-reducer.js'
import errorInfo from './errorInfo-reducer.js'


const reducer = combineReducers({
	nodeDetailsData,
	nodeDetailsSearch,
	nodeTypeDetails,
	nodeDefaultValues,
	nodeFormData,
	errorInfo
});

export default reducer;
