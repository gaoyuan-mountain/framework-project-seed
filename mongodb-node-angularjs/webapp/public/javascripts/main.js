require.config({
	baseUrl: "/",
	paths: {
		jquery: 'vendor/jquery/jquery-2.1.1.min',
		route: 'javascripts/route',
		semantic: 'vendor/semantic/semantic',
		angular: 'vendor/angular/angular',
		ngAnimate: 'vendor/angular/angular-animate',
		ngCookies: 'vendor/angular/angular-cookies',
		ngRoute: 'vendor/angular/angular-route',
		ngSanitize: 'vendor/angular/angular-sanitize',
		ngBindonce: 'vendor/angular/bindonce.min',
		app: 'javascripts/app',
		appServices: 'javascripts/services/all',
		appControllers: 'javascripts/controllers/all',
		appDirectives: 'javascripts/directives/all',
		appFilters: 'javascripts/filters/all'
	},
	shim: {
		jquery: {
			exports: "$"
		},
		semantic: {
			deps: [
				'jquery'
			],
			exports: 'semantic'
		},
		ngAnimate: {
			exports: 'ngAnimate',
			deps: ['angular']
		},
		ngCookies: {
			exports: 'ngCookies',
			deps: ['angular']
		},
		ngRoute: {
			exports: 'ngRoute',
			deps: ['angular']
		},
		ngSanitize: {
			exports: 'ngSanitize',
			deps: ['angular']
		},
		ngBindonce: {
			exports: 'ngBindonce',
			deps: ['angular']
		}
	}
});

require(['app', 'semantic'], function(app) {
	app.initialize();
});