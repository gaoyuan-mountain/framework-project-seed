import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import * as UserAction from '../../actions/user.action';
import UserStore from '../../stores/user.store';
import '../../style/css/reset.scss';
import '../../style/css/components/all.scss';
import './todo.scss';

function getState() {
	const user = UserStore.getUser();
	return {
		user
	};
};

class TodoPage extends Component {
	static propTypes = {
		user: PropTypes.object
	};

	constructor(props, context) {
		super(props, context);
		this.onChange = this.onChange.bind(this);
	};

	componentDidMount() {
		UserStore.addChangeListener(this.onChange);
	};

	componentWillUnmount() {
		UserStore.removeChangeListener(this.onChange);
	};

	onChange() {
		this.setState(getState());
	};
	
	render() {
		return (
			<div className="todo-constraint" >
				TO DO PAGE
			</div>
		);
	};
};

export default TodoPage;
