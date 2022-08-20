import axios from 'axios';

let baseURL = '';

// const url = (window.location && window.location.href) || '';
const url = '';
if (url.includes('stg')) {
	baseURL = 'http://localhost:9443/configurator-node';
} else if (url.includes('dtq')) {
	baseURL = 'http://localhost:9443/configurator-node';
} else if (url.includes('dev')) {
	baseURL = 'http://localhost:9444/configurator-node';
} else if (url.includes('local')) {
	baseURL = 'http://localhost:9444/configurator-node';
} else {
	baseURL = '/api/configurator-node';
}

const instance = axios.create({
	baseURL
});
instance.interceptors.request.use((req) => {
	req.headers.sourcingPRVIDisabled = false;
	req.headers['Access-Control-Allow-Origin'] = '*';
	req.headers['x-user-id'] = '4365830';
	return req;
}, (error) => Promise.reject(error));

export default instance;
