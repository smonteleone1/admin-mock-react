import APIConfig from '../utils/APIConfig';


async function getValidNode(nodeID) {
	const result = await APIConfig.get(`configurator-node/getNodeById?node=${nodeID}`)
		.catch((e) => e);
	return result
}

export { getValidNode }