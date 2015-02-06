define([
    'angular'
], function() {

    var module = angular.module('routes');

    module.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/index',
                controller: 'indexController'
            })
            .when('/index', {
                templateUrl: 'partials/index',
                controller: 'indexController'
            });
        $locationProvider.html5Mode(true);
    });

});
