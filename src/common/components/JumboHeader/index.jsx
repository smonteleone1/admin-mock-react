import React from 'react';
// import { Search } from '@backyard/react';
import { JumboHeaderElement } from './JumboHeader.style';
import SearchBar from '../Search/Search';
// import InventorySearch from '../Inventory-Search';

const styles = {
	flex: {
		display: 'flex'
	},
	search: {
		float: 'right',
		marginLeft: 'auto',
		marginRight: '24px',
		marginBotttom: '18px'
	}
};

const JumboHeader = ({ headerText }) => (
	<JumboHeaderElement>
		<div className="jumboHeader">
			<span className="headerText">{headerText}</span>
			<span style={ styles.search } className="search">
		
				 <SearchBar />
			
			</span>
		</div>

	</JumboHeaderElement>

);

export default JumboHeader;
