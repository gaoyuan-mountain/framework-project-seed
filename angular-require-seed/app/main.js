require.config({
	baseUrl: '/',
	paths: {
		angular: 'vendor/angular/angular',
		ngAnimate: 'vendor/angular/angular-animate',
		ngCookies: 'vendor/angular/angular-cookies',
		ngRoute: 'vendor/angular/angular-route',
		ngSanitize: 'vendor/angular/angular-sanitize',
		ngBindonce: 'vendor/angular/bindonce.min',
		i18n_en: 'i18n/i18n_en',
		i18n_kr: 'i18n/i18n_kr',
		router: 'app/routers/router',
		appServices: 'app/services/all',
		appControllers: 'app/controllers/all',
		appDirectives: 'app/directives/all',
		appFilters: 'app/filters/all'
	},
	shim: {
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

require([
	'app/app'
], function (app) {
	app.initialize();
});