/* global __dirname */

'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

require('angular-ui-router');
require('./templates');

angular.module('controllers', []);

bulk(__dirname, ['./controllers/**/*.js']);

angular.element(document).ready(function () {
	angular.module('app', ['ui.router', 'templates', 'controllers']);
	
	angular.module('app').config(require('./router'));
	
	angular.module('app').run(require('./run'));
	
	angular.bootstrap(document, ['app']);
});
