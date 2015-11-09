/* global angular */
import 'angular';
import 'angular-deferred-bootstrap';

import '../service/startup';
import './index/index.module';

//import global style
import '../../style/css/reset.scss';
import '../../style/css/components/all.scss';

var app = angular.module('app', [
	'ServiceModule',
	'IntroIndexModule'
]).config([
	($locationProvider, $interpolateProvider) => {}
]);

angular.element(document).ready(() => {
	angular.bootstrap(document, ['app']);
});

module.exports = app;