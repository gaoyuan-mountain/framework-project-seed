define([
	'backbone',
	'views'
	],
	function (Backbone, views) {
		return Backbone.Router.extend({
			routes: {
				'': 'index'
			},
			index: function () {
				var view = new views.index();
			}
		});
	});