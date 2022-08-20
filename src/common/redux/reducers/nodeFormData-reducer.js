
const initialState = {
	nodeMaster :{
		leadTimeInfo : {
			PARCEL : {}
		}
	},
	nodeFulfillmentEntity:{
		nodeSourcingRules:[],
		nodeCapacity: []
	}
};



const nodeFormData = (state = initialState, action) => {
	switch (action.type) {
	case 'NODE_DATA_UPDATE':
		return {
			...state,
			...action.data,
			//dataUpdated: action.dataUpdated
		};   
	default: return state;
	}
}

export default nodeFormData;