import 'angular';
import indexTemp from './index.html';
module.exports = {
	inject: () => {
		let IntroIndexModule = angular.module('IntroIndexModule');
		IntroIndexModule.config(['$stateProvider', '$urlRouterProvider',
			function ($stateProvider, $urlRouterProvider) {
				$urlRouterProvider.otherwise("/");
				$stateProvider.state('index', {
					url: '/',
					templateUrl: indexTemp
				})
			}
		]);
	}
};
