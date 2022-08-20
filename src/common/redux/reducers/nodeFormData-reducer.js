
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
		};   

	case 'NODE_MASTER_DATA_UPDATE': {
		return {
			...state,
			...action.data,
		};   		
	}
	default: return state;
	}
}

export default nodeFormData;