define([
	'angular'
], function () {

	var module = angular.module('controllers');

	module.controller('detailController', [
		'$scope',
		function ($scope) {
			$scope.page = 'this is detail page';
		}
	]);
});