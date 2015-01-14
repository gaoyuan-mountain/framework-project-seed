define([
	'backbone',
	'models'
	],
	function (Backbone, models) {
		return Backbone.Collection.extend({
			model: models.user
		});
	});