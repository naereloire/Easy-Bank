/** @format */

import axios from 'axios';

const easyBankApi = 'http://localhost:8080/api/';
const axiosInstance = axios.create({
	baseURL: easyBankApi,
	headers: { 'Content-Type': 'application/json' },
});

export function USER_POST(body) {
	return {
		url: API_URL + '/api/titular/',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		},
	};
}

export function LOGGED_USER_GET(body) {
	return {
		url: API_URL + '/api/titular/loggeduser',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		},
	};
}

export default axiosInstance;
