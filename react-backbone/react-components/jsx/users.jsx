define([
	'react'
	],
	function (React) {
		var UserItem = React.createClass({
			clickHandler: function (event) {
				alert(this.props.user.get('name'));
			},
			componentDidMount: function () {
				var el = this.getDOMNode();
				
				this.setPopup(el);

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
					<img className="ui small circular image" src={this.props.user.get('avatar')} />
				)
			}
		});

		var ChangeDataButton = React.createClass({
			clickHandler: function () {
				var user_first = this.props.users.at(0);
				user_first.set({
					name: 'fantuan',
					avatar: '/img/jenny.jpg'
				})
			},
			render: function () {
				return (
					<div className="ui inverted orange button" onClick={this.clickHandler}>Change User info</div>
				)
			}
		});

		return React.createClass({
			render: function () {
				var users = [];
				for (var i=0 ; i<this.props.users.length ; i++) {
					var user = this.props.users.at(i);
					//users.push(<userItem user={user} />);
					users.push(<UserItem user={user} />);
				}
				return (
					<div>
						<div className="ui images">{users}</div>
						<ChangeDataButton users={this.props.users} />
					</div>
				)
			}
		});
	});