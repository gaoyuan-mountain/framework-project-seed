import * as HttpUtil from '../utils/api.util';

const api = {
	login: '/user/login'
};

export function login(user) {
	return HttpUtil.post(api.login, user);
};