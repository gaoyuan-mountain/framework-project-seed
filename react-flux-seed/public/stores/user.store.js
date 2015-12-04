import { register } from '../app.dispatcher';
import { createStore } from '../utils/store.util';
import ActionTypes from '../constants/actionTypes';

const user = {};

const UserStore = createStore({
	getUser() {
		return user;
	}
});

UserStore.dispatchToken = register(action => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			UserStore.emitChange();
			break;
	}
	UserStore.emitChange();
});

export default UserStore;