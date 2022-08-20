import APIConfig from '../utils/APIConfig';
import { mapNodeDetails } from './mapper/nodedeatils-mapper';

function postNodeDetails(dataUpdated) {
	const headers = [{ 'x-user-id': '4365830' }];
	return (dispatch) => {
		dispatch({ type: 'INVENTORY_INSIGHTS_SEARCH_REQUEST' });
		APIConfig.post('configurator-node/updateNode', dataUpdated, headers)
			.then(() => {
				dispatch({ type: 'NODE-UPDATE_SUCCESS' });
			}).catch(() => {
				// console.log(error);
			});
	};
}


function saveNodeConfigDetails(nodeData) {
	const headers = [{ 'x-user-id': '4365830' }];
	return (dispatch) => {
		dispatch({ type: 'NODE_SAVE_REQUEST' });
		dispatch({ type: 'SHOW_NO_ERROR' });
		const { nodeMaster : { node } } = nodeData;
		if(node) {
			APIConfig.get(`/getNodeById1?node=${node}`)
				.then((res) => {
					const data = ['node info already existed'];
					dispatch({ type: 'SHOW_ERROR', data });
				}).catch((e) => {
					if(e.response.status === 404) {
						APIConfig.post('/saveNodeData', mapNodeDetails(nodeData), headers)
							.then(() => {
								dispatch({ type: 'NODE_SAVE_SUCCESS' });
							}).catch(() => {
								dispatch({ type: 'NODE_SAVE_ERROR' });
							});
					}
				});
		} else {
			const data = ['invalid node id'];
			dispatch({ type: 'SHOW_ERROR', data });
		}
	};
}

export { postNodeDetails, saveNodeConfigDetails };
