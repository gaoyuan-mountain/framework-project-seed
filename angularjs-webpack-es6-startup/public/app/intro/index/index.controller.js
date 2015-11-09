import 'angular';

module.exports = {
	inject: () => {
		let IntroIndexModule = angular.module('IntroIndexModule');
		IntroIndexModule.controller('LoginController', [
			'$window',
			'$scope',
			'UserService',
			function ($window, $scope, UserService) {
				$scope.user = UserService.getInstance();

				$scope.login = function () {
					if ($scope.loginForm.$invalid) {
						return;
					}
					UserService.login($scope.user)
						.then(function (response) {
							if (response.data.status === 'success') {
								$window.location = 'todo.html';
							}
						});
				};
			}
		])
	}
};