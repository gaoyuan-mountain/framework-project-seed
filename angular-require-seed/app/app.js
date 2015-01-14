define([
	'angular',
	'ngCookies',
	'ngAnimate',
	'ngRoute',
	'ngSanitize',
	'ngBindonce'
], function () {

	var initialize = function () {
		var i18n = angular.module('i18n', ['ngCookies']);
		var controllersModule = angular.module('controllers', []);
		var directivesModule = angular.module('directives', []);
		var servicesModule = angular.module('services', []);
		var filtersModule = angular.module('filters', []);
		var routesModule = angular.module('routers', ['ngRoute']);

		var app = angular.module('app', ['ngAnimate', 'ngCookies', 'ngSanitize', 'pasvaz.bindonce', 'controllers', 'directives', 'i18n', 'services', 'filters', 'routers']);

		require([
			'appServices',
			'appControllers',
			'appDirectives',
			'appFilters',
			'router'
		], function () {
			angular.element(document).ready(function () {
				angular.bootstrap(document, ["app"]);
			});
		});
	};

	return {
		initialize: initialize
	};

});