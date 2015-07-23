'use strict';

var angular = require('angular');

var module = angular.module('services');

module.service('userService', function () {
	this.getUser = function () {
		return 'I am mountain.';
	}
});