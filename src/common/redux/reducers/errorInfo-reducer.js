const initialState = {
	errorList: [],
	showError: true,
};

const errorInfo = (state = initialState, action) => {
	switch (action.type) {
	case 'SHOW_NO_ERROR':
		return {
			...state,
			showError: false,
			errorList: [],
		};
	case 'SHOW_ERROR':
		return {
			...state,
			showError: true,
			errorList: action.data,
		};


	default: return state;
	}
};

export default errorInfo;