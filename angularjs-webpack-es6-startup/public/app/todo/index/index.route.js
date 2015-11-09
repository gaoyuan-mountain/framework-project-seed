/* global angular */
import 'angular';

import indexTemp from './index.html';

module.exports = {
	inject: () => {
		let TodoIndexModule = angular.module('TodoIndexModule');
		TodoIndexModule.config([
			'$stateProvider',
			'$urlRouterProvider',
			function ($stateProvider, $urlRouterProvider) {
				$urlRouterProvider.otherwise("/");
				$stateProvider
					.state('index', {
						url: '/',
						templateUrl: indexTemp
					})
			}
		]);
	}
};