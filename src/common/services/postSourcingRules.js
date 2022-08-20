import APIConfig from '../utils/APIConfig';

function postSourcingRules(sourcingRules) {
	const headers = [{ 'x-user-id': '4365830' }];
	return (dispatch) => {
		dispatch({ type: 'INVENTORY_INSIGHTS_SEARCH_REQUEST' });
		APIConfig.post('configurator-node/updateNodeSourcingRules', sourcingRules, headers)
			.then(() => {
				dispatch({ type: 'SOURCING_RULES_SUCCESS' });
			}).catch(() => {
			// console.log(error);
			});
	};
}
// return (dispatch) => {
// 	dispatch({ type: 'INVENTORY_INSIGHTS_SEARCH_REQUEST' });
// 	APIConfig.post('configurator-node/updateNode', dataUpdated, headers)
// 		.then(() => {
// 			dispatch({ type: 'NODE-UPDATE_SUCCESS' });
// 		}).catch(() => {
// 			// console.log(error);
// 		});
// };

export { postSourcingRules };
