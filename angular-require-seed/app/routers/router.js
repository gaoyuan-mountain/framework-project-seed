define([
	'angular'
], function () {

	var module = angular.module('routers');

	module.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/',
				controller: 'listController'
			})
			.when('/list', {
				templateUrl: 'app/templates/list.html',
				controller: 'listController'	
			})
			.when('/detail', {
				templateUrl: 'app/templates/detail.html',
				controller: 'detailController'	
			})
	});

});