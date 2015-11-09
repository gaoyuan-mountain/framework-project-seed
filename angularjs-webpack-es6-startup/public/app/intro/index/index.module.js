import 'angular-route';
import 'angular-ui-router';
import 'angular-sanitize';
import 'angular-bindonce';

import './index.scss';

import * as IntroRoute from './index.route';
import * as LoginController from './index.controller';

let IntroIndexModule = angular.module('IntroIndexModule', [
	'ngSanitize',
	'pasvaz.bindonce',
	'ui.router'
]);

IntroRoute.inject();
LoginController.inject();

module.exports = IntroIndexModule;