import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
	return {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	}
}

function createUser(user) {
	return axios.post(`${BASE_URL}/sign-up`, user)
}

async function login(data) {
	const token = await axios.post(`${BASE_URL}/sign-in`, data);
	return token;
}

const api = {
	createConfig,
	createUser,
	login
}

export default api;