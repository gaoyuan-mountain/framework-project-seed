define([
	'angular'
], function () {

	var module = angular.module('controllers');

	module.controller('listController', [
		'$scope',
		function ($scope) {
			$scope.page = 'this is list page';
		}
	]);

});