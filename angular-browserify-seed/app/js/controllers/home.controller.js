'use strict';

var angular = require('angular');

var module = angular.module('controllers');

module.exports = module.controller('homeController', [
	'$scope',
	function ($scope) {
		$scope.page = 'this is home page';
	}
]);