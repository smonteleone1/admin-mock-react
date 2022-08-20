// import defaultUpdateNodeSourcingRules from './defaultUpdateNodeSourcingRules.json';
// import defaultUpdateNodeData from './defaultUpdateNodeData.json';

const initialState = {
	data: [],
	isRequest: false,
	optionType: '',
	dataUpdated:'',
	nodeSubTypeInfo: []
};

const nodeTypeDetails = (state = initialState, action) => {
	switch (action.type) {
	case 'GET_NODE_TYPE_REQUEST':
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
	case 'GET_NODE_TYPE_SUCCESS':
		return {
			...state,
			isRequest: false,
			data: action.data,
		};
	case 'UPDATE_NODE_TYPE_SUCCESS':
		return {
			...state,
			isRequest: false
		};
	case 'GET_NODE_SUB_TYPE_REQUEST':
		return {
			...state,
			isRequest: true
			
		};
	case 'GET_NODE_SUB_TYPE_SUCCESS':
		return {
			...state,
			isRequest: false,
			nodeSubTypeInfo: action.data
		};
	
	default: return state;
	}
};

export default nodeTypeDetails;
