import 'angular';

class User {
	constructor (props = {_id: '', username: '', password: ''}) {
		this._id = props._id;
		this.username = props.username;
		this.password = props.password;
	}

	get (key) {
		if (this.hasOwnProperty(key)) {
			return this[key];
		} else {
			throw new Error('There has no property named ' + key + 'in User Object.');
		}
	}

	set (key, value) {
		if (this.hasOwnProperty(key)) {
			return this[key] = value;
		} else {
			throw new Error('There has no property named ' + key + 'in User Object.');
		}	
	}
};

module.exports = {
	inject: function () {
		let ServiceModule = angular.module('ServiceModule');

		ServiceModule.provider('UserService', function () {
			this.$get = [
				'$http',
				function ($http) {
					return {
						getInstance: function (props) {
							return new User(props);
						},
						login: function (user) {
							return $http.post('/users/login', {
								username: user.username,
								password: user.password
							});
						}
					}
				}
			];
		});
	}
};