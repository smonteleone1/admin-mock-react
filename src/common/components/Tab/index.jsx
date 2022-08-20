import React from 'react';
import {
	Tabs, Tab
} from '@backyard/react';
import NodeInput from '../NodeInput';
import { TabDiv } from './style';

const TabMenu = () => (
	<TabDiv>
		<div className="header">
			<Tabs>
				<Tab className="tab" id="tab-1" label="Node Onboarding">
					<NodeInput />
				</Tab>
			</Tabs>
		</div>
	</TabDiv>

);
export default TabMenu;
