require.config({
	baseUrl: "/",
	paths: {
		jquery: 'vender/jquery/jquery-2.1.1.min',
		underscore: 'vender/lodash/lodash',
		backbone: 'vender/backbone/backbone-min',
		text: 'vender/require/text',
		react: 'vender/react/react',
		models: 'scripts/models/all',
		collections: 'scripts/collections/all',
		views: 'scripts/views/all',
		router: 'scripts/router',
		components: 'react-components/all',
		semantic: 'vender/semantic/semantic'
	},
	shim: {
		backbone: {
			deps: [
				"jquery",
				"underscore"
			],
			exports: "Backbone"
		},
		jquery: {
			exports: "$"
		},
		underscore: {
			exports: "_"
		},
		components: {
			deps: [
				'react'
			],
			exports: 'components'
		},
		semantic: {
			deps: [
				'jquery'
			],
			exports: 'semantic'
		}
	}
});

require(["backbone", "router", 'semantic'], function(Backbone, Router) {
	new Router();
	Backbone.history.start();
});