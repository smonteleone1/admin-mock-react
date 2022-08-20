import React from 'react';
import { Search } from '@backyard/react';
// import { Button } from '@backyard/react';
import { useDispatch } from 'react-redux';
import { getNodeDetails } from '../../services';

import { SearchDiv } from './style';
import { getNodeSourcingRulesByNodeId } from '../../services/getDefaultNodeSourcingRules';
import { Button } from '@mui/material';

const SearchBar = () => {
	const [nodeId, setNodeId] = React.useState('');
	const dispatch = useDispatch();

	const handleNodeDetails = () => {
		dispatch(getNodeDetails(nodeId));
		dispatch(getNodeSourcingRulesByNodeId(nodeId));
	};

	// const handleNodeSubmitDetails = (nodeId) => {
	// 	dispatch(getNodeDetails(nodeId));
	// 	dispatch(getNodeSourcingRulesByNodeId(nodeId));
	// };

	return (
		<SearchDiv>
			<form className="search">
				<Search id="input" placeholder="Node Search" value={nodeId}
					onSearchClick={handleNodeDetails}
					onChange={(e) => setNodeId(e.target.value)} />
				
			</form>
			{/* <Button onClick={ (e) => handleNodeSubmitDetails(123) } className="btn">Submit</Button> */}
		</SearchDiv>
	);
};

export default SearchBar;
