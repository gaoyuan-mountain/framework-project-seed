define([
	'react'
	],
	function (React) {
		var UserItem = React.createFactory(
			React.createClass({
				clickHandler: function (event) {
					alert(this.props.user.get('name'));
				},
				componentDidMount: function () {
					var el = this.getDOMNode();
					var $el = $(el);
					this.setPopup(el);

					$el.transition('fade in');

					this.props.user.on('change', function() {
						this.forceUpdate();
						this.setPopup(el);
					}.bind(this));
				},
				setPopup: function (el) {
					$(el).popup({
						title: this.props.user.get('name'),
						content: '',
						position: 'top center'
					});
				},
				render: function () {
					return (
						React.createElement("img", {className: "ui small circular image", src: this.props.user.get('avatar')})
					)
				}
			})
		);

		var ChangeDataButton = React.createFactory(
			React.createClass({
				clickHandler: function () {
					this.props.users.add({
						id: 3,
						name: 'fantuan',
						avatar: '/img/jenny.jpg'
					});
				},
				render: function () {
					return (
						React.createElement("div", {className: "ui inverted orange button", onClick: this.clickHandler}, "Change User info")
					)
				}
			})
		);

		var users = React.createFactory(
			React.createClass({
				componentDidMount: function () {
					this.props.users.on('reset add remove', function () {
						this.forceUpdate();
					}.bind(this));
				},
				render: function () {
					var users = this.props.users.models.map(function (user) {
						return UserItem({
							user: user,
							key: user.get('id')
						});
					});
					var changeDataButton = ChangeDataButton({
						users: this.props.users
					})
					return (
						React.createElement("div", null, 
							React.createElement("div", {className: "ui images"}, users), 
							changeDataButton
						)
					)
				}
			})
		);

		return users;
	});