// import defaultUpdateNodeSourcingRules from './defaultUpdateNodeSourcingRules.json';
// import defaultUpdateNodeData from './defaultUpdateNodeData.json';

const initialState = {
	data: [],
	isRequest: false,
	optionType: '',
	dataUpdated:'',
};

const nodeDefaultValues = (state = initialState, action) => {
	switch (action.type) {
	case 'GET_NODE_VALUES_REQUEST':
		return {
			...state,
			isRequest: true
		};
	case 'GET_NODE_VALUES_SUCCESS':
		return {
			...state,
			isRequest: false,
			data: action.data
		};
	case 'UPDATE_NODE_VALUES_SUCCESS':
		return {
			...state,
			isRequest: false,
		};
	
	default: return state;
	}
};

export default nodeDefaultValues;
