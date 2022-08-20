import APIConfig from '../utils/APIConfig';

function getNodeTypeDetails() {
	// console.log('itemType', itemType);
	return (dispatch) => {
		dispatch({ type: 'GET_NODE_TYPE_REQUEST' });
		APIConfig.get('/getNodeType')
			.then((res) => {
				const { data } = res;
				dispatch({ type: 'GET_NODE_TYPE_SUCCESS', data });
			}).catch(() => {
				dispatch({ type: 'UPDATE_NODE_TYPE_FAILURE' });
			});
	};
}

function getNodeSubTypeDetails() {
	return (dispatch) => {
		dispatch({ type: 'GET_NODE_SUB_TYPE_REQUEST' });
		APIConfig.get(`/getNodeSubType`)
			.then((res) => {
				const { data } = res;
				dispatch({ type: 'GET_NODE_SUB_TYPE_SUCCESS', data });
				
			}).catch(() => {
				dispatch({ type: 'UPDATE_NODE_TYPE_SUCCESS' });
			});
	};
}


export { getNodeTypeDetails, getNodeSubTypeDetails };
