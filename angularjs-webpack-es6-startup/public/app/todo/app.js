/* global angular */
import 'angular';
import 'angular-deferred-bootstrap';

import './index/index.module';

//import global style
import '../../style/css/reset.scss';

var app = angular.module('app', [
	'TodoIndexModule'
]).config([
	($locationProvider, $interpolateProvider) => {}
]);

angular.element(document).ready(() => {
	angular.bootstrap(document, ['app']);
});

module.exports = app;