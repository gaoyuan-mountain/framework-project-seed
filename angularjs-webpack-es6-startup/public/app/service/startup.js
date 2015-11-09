import 'angular';

import * as UserService from './user.service.js';

let ServiceModule = angular.module('ServiceModule', []);

UserService.inject();

module.exports = ServiceModule;