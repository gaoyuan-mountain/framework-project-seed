define([
    'angular',
    'ngCookies',
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngBindonce'
], function() {
    var initialize = function() {
        var controllersModule = angular.module('controllers', []);
        var directivesModule = angular.module('directives', []);
        var servicesModule = angular.module('services', []);
        var filtersModule = angular.module('filters', []);
        var routesModule = angular.module('routes', ['ngRoute']);
        var app = angular.module('app', ['ngAnimate', 'ngCookies', 'ngSanitize', 'pasvaz.bindonce', 'controllers', 'directives', 'services', 'filters', 'routes']);

        app.config(function($interpolateProvider) {
            $interpolateProvider.startSymbol('{[{');
            $interpolateProvider.endSymbol('}]}');
        });

        require([
            'appServices',
            'appControllers',
            'appDirectives',
            'appFilters',
            'route'
        ], function() {
            angular.element(document).ready(function() {
                angular.bootstrap(document, ["app"]);
            });
        });
    };
    return {
        initialize: initialize
    };
});
