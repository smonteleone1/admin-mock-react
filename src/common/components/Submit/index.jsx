import React from 'react';
import { Button } from '@backyard/react';
import { useSelector, useDispatch } from 'react-redux';

import { saveNodeConfigDetails } from '../../services/postNodeDetails';
import { SubmitDiv } from './style';

const SaveNodeSubmit = () => {

	const nodeFormData = useSelector((s) => {
		return s.nodeFormData;
	}); 
	const dispatch = useDispatch();

	const handleNodeDetailsSubmit = async () => {
		dispatch(saveNodeConfigDetails(nodeFormData));
	};

	return (
		<SubmitDiv>
			<div>
				<Button onClick={ handleNodeDetailsSubmit } className="btn">Submit</Button>
			</div>
		</SubmitDiv>
	);
};
export default SaveNodeSubmit;
