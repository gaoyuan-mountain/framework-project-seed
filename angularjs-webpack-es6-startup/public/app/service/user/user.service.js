import 'angular';
import User from './user.model.js';
let inject = function () {
	let ServiceModule = angular.module('ServiceModule');
	ServiceModule.provider('UserService', function () {
		this.$get = ['$http',
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
				};
			}
		];
	});
};
module.exports = {
	inject
};
