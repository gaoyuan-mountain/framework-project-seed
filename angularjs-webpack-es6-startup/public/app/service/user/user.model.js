class User {
	constructor(props = {
		_id: '',
		username: '',
		password: ''
	}) {
		this._id = props._id;
		this.username = props.username;
		this.password = props.password;
	}
	get(key) {
		if (this.hasOwnProperty(key)) {
			return this[key];
		} else {
			throw new Error('There has no property named ' + key + ' in User Object.');
		}
	}
	set(key, value) {
		if (this.hasOwnProperty(key)) {
			return this[key] = value;
		} else {
			throw new Error('There has no property named ' + key + ' in User Object.');
		}
	}
};
module.exports = User;