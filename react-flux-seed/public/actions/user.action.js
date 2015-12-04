import { dispatchAsync } from '../app.dispatcher';
import ActionTypes from '../constants/actionTypes';
import * as UserAPI from '../api/user.api';

export function login(user) {
	dispatchAsync(UserAPI.login(user), {
		request: ActionTypes.LOGIN,
		success: ActionTypes.LOGIN_SUCCESS,
		failure: ActionTypes.LOGIN_ERROR
	}, {});
};