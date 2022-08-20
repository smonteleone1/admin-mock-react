import React, { useEffect, useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Search } from '@backyard/react';
import { useSelector } from 'react-redux';

const styles = {
	container: {
		border: '1px solid #DADCE0',
		// width: '50%',
		width: '800px',
		height: '514px',
		// height: '425px',
		margin: '8px',
		// marginLeft: '32px',
		backgroundColor: '#FFFFFF',
		borderRadius: '6px',
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
	},
	title: {
		marginTop: '16px',
		marginBottom: '16px',
		marginLeft: '24px',
		fontSize: '20px',
		fontFamily: 'sans-serif'
	},
	nodeDetails: {
		marginLeft: '30px'

	},
	inputBox: {
		margin: '8px',
		wordBreak: 'break-all',
		marginLeft: '15px'
	},
	address: {
		display: 'grid',
		gridTemplateColumns: '20% 20% 20% 20%'
	},
	form: {
		marginTop: '15px',
		marginLeft: '32px',
		fontFamily: 'sans-serif'

	},
	form2: {
		marginTop: '50px',
		marginLeft: '32px'

	},
	temp: {
		borderBottom: '1px solid #DADCE0'
	},
	section: {
		margin: '20px',
		marginLeft: '32px',
		display: 'flex',
		paddingBottom: '10px',
		maxWidth: '50%'
	},
	borderBottom: {
		borderBottom: '1px solid #DADCE0'
	},
	search: {
		display: 'flex',
		maxWidth: '80%'
	},
	search2: {
		display: 'flex',
		maxWidth: '53%'
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: '26% 26% 26%'
	},
	temp2: {
		height: '10px'
	}
};

const NodeDetails = (props) => {
	const [nodeSearch1, setnodeSearch1] = useState('');
	const [nodeSearch2, setnodeSearch2] = useState('');
	const [nodeSearch3, setnodeSearch3] = useState('');
	const [nodeSearch4, setnodeSearch4] = useState('');
	const [nodeSearch5, setnodeSearch5] = useState('');
	const [nodeTypeCode, setNodeTypeCode] = useState('');
	const [nodeSubTypeCode, setSubNodeTypeCode] = useState('');

	useEffect(() => {
		setNodeTypeCode(props.nodeType.value);
		setSubNodeTypeCode(props.nodeSubType.value);
	},[props.nodeType, props.nodeSubType]);

	return (
		<div style={ styles.container }>
			<div style={ styles.temp }>
				<div style={ styles.title }> Node Details </div>
			</div>
			<div style={ styles.form }>Node Type</div>
			<div style={ styles.borderBottom }>
				<section style={ styles.section }>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Node Type </InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={nodeTypeCode}
							label="Node Type"
							onChange={ props.handleNodeTypeState }
						>
							  {props.nodeTypeList.map((item) => (
								<MenuItem key={item.value} value={ item.value }>{item.label}</MenuItem>
							))}
							 {/* <MenuItem value="store">Store</MenuItem>
							<MenuItem value="DC">DC</MenuItem> */}
						</Select>
					</FormControl>
					<FormControl style={ styles.nodeDetails } fullWidth>
						<InputLabel id="demo-simple-select-label">Node Subtype</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={ nodeSubTypeCode }
							label="Node Subtype"
							onChange={ props.handleNodeSubTypeState }
						>
							 {props.nodeSubTypeList && props.nodeSubTypeList.length>0 && props.nodeSubTypeList.map((item)=> (
								<MenuItem key={item.value} value={ item.value }>{item.label}</MenuItem>
							))
							 }
					
						</Select>
					</FormControl>
				</section>
			</div>
			<div style={ styles.form }>Node Priority</div>
			<section style={ styles.grid }>
				<div style={ styles.form }>
					<Search value={ nodeSearch1 } onChange={ (e) => setnodeSearch1(e.target.value) }placeholder="Node Search" />
				</div>
				<div style={ styles.form }>
					<Search value={ nodeSearch2 } onChange={ (e) => setnodeSearch2(e.target.value) } placeholder="Node Search" />
				</div>
				<div style={ styles.form }>
					<Search value={ nodeSearch3 } onChange={ (e) => setnodeSearch3(e.target.value) } placeholder="Node Search" />
				</div>
				<div style={ styles.form2 }>
					<Search value={ nodeSearch4 } onChange={ (e) => setnodeSearch4(e.target.value) } placeholder="Node Search" />
				</div>
				<div style={ styles.form2 }>
					<Search value={ nodeSearch5 } onChange={ (e) => setnodeSearch5(e.target.value) } placeholder="Node Search" />
				</div>
			</section>
		</div>
	);
};

export default NodeDetails;
