/* global angular */

import 'angular-route';
import 'angular-ui-router';
import 'angular-sanitize';
import 'angular-bindonce';

import './index.scss';

import * as todoRoute from './index.route';

let TodoIndexModule = angular.module('TodoIndexModule', [
	'ngSanitize',
	'pasvaz.bindonce',
	'ui.router'
]);

todoRoute.inject();

module.exports = TodoIndexModule;