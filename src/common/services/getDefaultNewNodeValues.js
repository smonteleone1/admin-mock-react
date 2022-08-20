import APIConfig from '../utils/APIConfig';

function getDefaultNewNodeValues() {
	// console.log('itemType', itemType);
	return (dispatch) => {
		dispatch({ type: 'GET_NODE_VALUES_REQUEST' });
		APIConfig.get(`/getDefaultNewNodeValues`)
			.then((res) => {
				const { data } = res;
				dispatch({ type: 'GET_NODE_VALUES_SUCCESS', data });
			}).catch(() => {
				dispatch({ type: 'UPDATE_NODE_VALUES_SUCCESS' });
			});
	};
}

export { getDefaultNewNodeValues };