import React from 'react';
import {
	TextField, Select, Option, FormControl
} from '@backyard/react';

// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';

const styles = {
	container: {
		// width: '50%',
		width: '800px',
		height: '324px',
		// height: '280px',
		margin: '8px',
		// marginLeft: '32px',
		marginTop: '16px',
		padding: '16px',
		backgroundColor: '#FFFFFF',
		borderRadius: '6px',
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
		border: '1px solid #DADCE0'
	},
	title: {
		marginBottom: '16px',
		marginLeft: '16px',
		fontSize: '20px',
		fontFamily: 'sans-serif'
	},
	nodeDetails: {
		display: 'grid',
		gridTemplateColumns: '30% 30% 30%',
		marginLeft: '16px'

	},
	inputBox: {
		marginRight: '16px',
		marginBottom: '24px',
		// whiteSpace: 'noWrap',
		textOverflow: 'ellipsis',
		overFlow: 'hidden'
	},
	address: {
		display: 'grid',
		gridTemplateColumns: '30% 20% 20% 20%',
		marginBottom: '20px',
		marginLeft: '16px'
	},
	form: {
		marginTop: '20px'
	},
	temp: {
		borderBottom: '1px solid #DADCE0'
	},
	addressBox: {
		marginLeft: '16px'
	},
	new: {
		marginBottom: '16px',
		marginLeft: '16px',
		fontSize: '20px',
		fontStyle: 'normal',
		fontWeight: '500',
		lineHeight: '23px'
	},
	fixed: {
		color: 'rgba(143, 143, 143, 1)'
	},
	dropDown: {
		borderRadius: '5px'
	},
	st: {
		fontColor: 'red'
	}
};

const Address = (props) => {
	const states = [
		{
			name: 'State',
			abbreviation: 'State',
			type: true

		},
		{
			name: 'Alabama',
			abbreviation: 'AL'
		},
		{
			name: 'Alaska',
			abbreviation: 'AK'
		},
		{
			name: 'American Samoa',
			abbreviation: 'AS'
		},
		{
			name: 'Arizona',
			abbreviation: 'AZ'
		},
		{
			name: 'Arkansas',
			abbreviation: 'AR'
		},
		{
			name: 'California',
			abbreviation: 'CA'
		},
		{
			name: 'Colorado',
			abbreviation: 'CO'
		},
		{
			name: 'Connecticut',
			abbreviation: 'CT'
		},
		{
			name: 'Delaware',
			abbreviation: 'DE'
		},
		{
			name: 'District Of Columbia',
			abbreviation: 'DC'
		},
		{
			name: 'Federated States Of Micronesia',
			abbreviation: 'FM'
		},
		{
			name: 'Florida',
			abbreviation: 'FL'
		},
		{
			name: 'Georgia',
			abbreviation: 'GA'
		},
		{
			name: 'Guam',
			abbreviation: 'GU'
		},
		{
			name: 'Hawaii',
			abbreviation: 'HI'
		},
		{
			name: 'Idaho',
			abbreviation: 'ID'
		},
		{
			name: 'Illinois',
			abbreviation: 'IL'
		},
		{
			name: 'Indiana',
			abbreviation: 'IN'
		},
		{
			name: 'Iowa',
			abbreviation: 'IA'
		},
		{
			name: 'Kansas',
			abbreviation: 'KS'
		},
		{
			name: 'Kentucky',
			abbreviation: 'KY'
		},
		{
			name: 'Louisiana',
			abbreviation: 'LA'
		},
		{
			name: 'Maine',
			abbreviation: 'ME'
		},
		{
			name: 'Marshall Islands',
			abbreviation: 'MH'
		},
		{
			name: 'Maryland',
			abbreviation: 'MD'
		},
		{
			name: 'Massachusetts',
			abbreviation: 'MA'
		},
		{
			name: 'Michigan',
			abbreviation: 'MI'
		},
		{
			name: 'Minnesota',
			abbreviation: 'MN'
		},
		{
			name: 'Mississippi',
			abbreviation: 'MS'
		},
		{
			name: 'Missouri',
			abbreviation: 'MO'
		},
		{
			name: 'Montana',
			abbreviation: 'MT'
		},
		{
			name: 'Nebraska',
			abbreviation: 'NE'
		},
		{
			name: 'Nevada',
			abbreviation: 'NV'
		},
		{
			name: 'New Hampshire',
			abbreviation: 'NH'
		},
		{
			name: 'New Jersey',
			abbreviation: 'NJ'
		},
		{
			name: 'New Mexico',
			abbreviation: 'NM'
		},
		{
			name: 'New York',
			abbreviation: 'NY'
		},
		{
			name: 'North Carolina',
			abbreviation: 'NC'
		},
		{
			name: 'North Dakota',
			abbreviation: 'ND'
		},
		{
			name: 'Northern Mariana Islands',
			abbreviation: 'MP'
		},
		{
			name: 'Ohio',
			abbreviation: 'OH'
		},
		{
			name: 'Oklahoma',
			abbreviation: 'OK'
		},
		{
			name: 'Oregon',
			abbreviation: 'OR'
		},
		{
			name: 'Palau',
			abbreviation: 'PW'
		},
		{
			name: 'Pennsylvania',
			abbreviation: 'PA'
		},
		{
			name: 'Puerto Rico',
			abbreviation: 'PR'
		},
		{
			name: 'Rhode Island',
			abbreviation: 'RI'
		},
		{
			name: 'South Carolina',
			abbreviation: 'SC'
		},
		{
			name: 'South Dakota',
			abbreviation: 'SD'
		},
		{
			name: 'Tennessee',
			abbreviation: 'TN'
		},
		{
			name: 'Texas',
			abbreviation: 'TX'
		},
		{
			name: 'Utah',
			abbreviation: 'UT'
		},
		{
			name: 'Vermont',
			abbreviation: 'VT'
		},
		{
			name: 'Virgin Islands',
			abbreviation: 'VI'
		},
		{
			name: 'Virginia',
			abbreviation: 'VA'
		},
		{
			name: 'Washington',
			abbreviation: 'WA'
		},
		{
			name: 'West Virginia',
			abbreviation: 'WV'
		},
		{
			name: 'Wisconsin',
			abbreviation: 'WI'
		},
		{
			name: 'Wyoming',
			abbreviation: 'WY'
		}
	];

	return (
		<div style={ styles.container } className="container">
			<div style={ styles.temp } className="temp">
				<div style={ styles.title } className="title"> Address </div>
			</div>
			<form style={ styles.form } className="form">
				<div style={ styles.nodeDetails } className="nodeDetails">
					<div style={ styles.inputBox } className="inputBox">
						<TextField label="Enter Node ID" value={ props.node } onChange={ props.handleNode } />
					</div>
					<div style={ styles.inputBox } className="inputBox">
						<TextField label="Latitude" value={ props.latitude } onChange={ props.handleLatitude } />
					</div>
					<div style={ styles.inputBox } className="inputBox">
						<TextField label="Longitude" value={ props.longitude } onChange={ props.handleLongitude } />
					</div>
				</div>
				<div style={ styles.addressBox } className="addressBox">
					<div style={ styles.inputBox } className="inputBox">
						<TextField label="Address" value={ props.address } onChange={ props.handleAddress } />
					</div>
				</div>
				<div style={ styles.address } className="address">
					<div style={ styles.inputBox } className="inputBox">
						<TextField label="City" value={ props.city } onChange={ props.handleCity } />
					</div>
					<div style={ styles.inputBox } className="inputBox">
						<TextField label="Zip Code" value={ props.zipcode } onChange={ props.handleZipCode } />
					</div>
					<div style={ styles.inputBox } className="inputBox">
						<FormControl>
							<Select
								value={ props.stateCode } onChange={ props.handleStateCode }
								className="st" style={ styles.st }
							>
								{states.map((state) => (
									<Option disabled={ state.type } hidden={ state.type }
										value={ state.abbreviation }
									>
										{state.abbreviation}
									</Option>
								))}
							</Select>
						</FormControl>
					</div>
					<div style={ styles.inputBox } className="inputBox">
						<TextField label="Country" value={ props.countryCode } onChange={ props.handleCountryCode } />
					</div>
				</div>
			</form>
		</div>

	);
};

export default Address;
