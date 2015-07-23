'use strict';

var angular = require('angular');

var module = angular.module('controllers');

module.exports = module.controller('homeController', [
	'$scope',
	'userService',
	function ($scope, userService) {
		$scope.page = 'Hello!' + userService.getUser();
	}
]);