const initialState = {
	data: [],
	isRequest: false,
	optionType: '',
};

const nodeDetailsSearch = (state = initialState, action) => {
	switch (action.type) {
	case 'INVENTORY_INSIGHTS_SEARCH_REQUEST':
		return {
			...state,
			isRequest: true
		};
	case 'INVENTORY_INSIGHTS_SEARCH_OPTION_TYPE':
		return {
			...state,
			optionType: action.optionType,
			data: []
		};
	case 'INVENTORY_INSIGHTS_SEARCH_SUCCESS':
		return {
			...state,
			isRequest: false,
			data: action.data,
		};
	case 'NODE_DATA_UPDATE':
		return {
			...state,
			dataUpdated: action.dataUpdated
		};
	case 'NODE-UPDATE_SUCCESS':
		return {
			...state,
			isRequest: false
		};
	case 'SOURCING_RULES_UPDATE':
		return {
			...state,
			sourcingRules: action.sourcingRules
		};
	case 'SOURCING_RULES_SUCCESS':
		return {
			...state,
			isRequest: false
		};
	case 'GET_NODE_SOURCING_TYPE_REQUEST':
		return {
			...state,
			data: [],
		};
	case 'GET_NODE_SOURCING_TYPE_SUCCESS':
		return {
			...state,
			data: action.data,
		};		
	case 'UPDATE_NODE_SOURCING_TYPE_SUCCESS':
		return {
			...state,
			data: [],
		};			
	default: return state;
	}
};

export default nodeDetailsSearch;
