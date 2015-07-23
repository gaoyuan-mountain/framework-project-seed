/* global __dirname */

'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

require('angular-ui-router');
require('./templates');

angular.module('controllers', []);
angular.module('services', []);

bulk(__dirname, ['./controllers/**/*.js', './services/**/*.js']);

angular.element(document).ready(function () {
	angular.module('app', ['ui.router', 'templates', 'controllers', 'services']);
	
	angular.module('app').config(require('./router'));
	
	angular.module('app').run(require('./run'));
	
	angular.bootstrap(document, ['app']);
});
