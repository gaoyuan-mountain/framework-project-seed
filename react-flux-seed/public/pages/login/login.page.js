import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import * as UserAction from '../../actions/user.action';
import UserStore from '../../stores/user.store';
import '../../style/css/reset.scss';
import '../../style/css/components/all.scss';
import './login.scss';

function getState() {
	const user = UserStore.getUser();
	return {
		user
	};
};

class LoginPage extends Component {
	static propTypes = {
		user: PropTypes.object
	};

	static contextTypes = {
		history: React.PropTypes.object
	};

	constructor(props, context) {
		super(props, context);
		this.onChange = this.onChange.bind(this);
		this.login = this.login.bind(this);
	};

	componentDidMount() {
		UserStore.addChangeListener(this.onChange);
	};

	componentWillUnmount() {
		UserStore.removeChangeListener(this.onChange);
	};

	onChange() {
		this.setState(getState());
		if (getState().user.id) {
			this.context.history.pushState(null, '/todo');
		}
	};

	login(event) {
		event.preventDefault();
		UserAction.login({
			username: ReactDOM.findDOMNode(this.refs.username).value,
			password: ReactDOM.findDOMNode(this.refs.password).value
		});
	};
	
	render() {
		return (
			<div className="login-constraint" >
				<div className="banner"></div>
				<div className="main">
					<form name="loginForm" onSubmit={this.login}>
						<div className="form-group">
							<input required className="form-control" type="text" placeholder="Username" ref="username" />
						</div>
						<div className="form-group">
							<input required className="form-control" type="password" placeholder="Password" ref="password" />
						</div>
						<div className="form-group">
							<input type="submit" className="btn-line-green" value="Sign In" />
						</div>
					</form>
				</div>
			</div>
		);
	};
};

export default LoginPage;
