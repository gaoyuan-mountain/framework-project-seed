import request from 'superagent';

function checkStatus(response) {
	if (response.status >=200 && response.status < 300) {
		return response;
	} else {
		const error = new Error(response.statusText);
		error.response = response;
		throw error;
	}
};

function parseJSON(response) {
	return response.json();
};

export function get(url, props) {
	return new Promise((resolve, reject) => {
		request.get(url)
			.on('error', error => {
				reject(error);
			})
			.end((error, response) => {
				if (error) {
					reject(error);
				} else {
					resolve(response.body, result);
				}
			});
	});
};

export function post(url, data) {
	return new Promise((resolve, reject) => {
		request.post(url)
			.send(data)
			.on('error', error => {
				reject(error);
			})
			.end((error, response) => {
				if (error) {
					reject(error);
				} else {
					resolve(response.body, result);
				}
			});
	});
};