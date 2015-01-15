define([
	'react',
	'backbone',
	'models',
	'collections',
	'components'
	],
	function (React, Backbone, models, collections, components) {
		var main = Backbone.View.extend({
			tagName: 'div',
			className: 'user-info',
			render: function () {
				this.$el.appendTo($(document.body));

				React.render(new components.users({
						users: this.collection
					}),
					this.$el.get(0)
				);
				return this;
			},
			initialize: function () {
				this.collection = new collections.users([
					{id: 1, name: 'gaoyuan', avatar: '/img/elliot.jpg'},
					{id: 2, name: 'wufang', avatar: '/img/stevie.jpg'}
				]);
				this.render();
			}
		});

		return main;
	});