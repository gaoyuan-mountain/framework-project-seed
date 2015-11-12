import 'angular';
import * as UserService from './user/user.service.js';
let ServiceModule = angular.module('ServiceModule', []);
UserService.inject();
module.exports = ServiceModule;
