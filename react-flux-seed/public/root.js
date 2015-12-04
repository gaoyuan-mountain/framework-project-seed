import React, { PropTypes, Component } from 'react';
import { Router, Route } from 'react-router';

import Login from './pages/login/login.page';
import Todo from './pages/todo/todo.page';

class Root extends Component {
   static propTypes = {
      history: PropTypes.object.isRequired
   }

   render() {
      const { history } = this.props;
      return (
         <Router history={history}>
            <Route name="login" path="/login" component={Login}></Route>
            <Route name="todo" path="/todo" component={Todo}></Route>
         </Router>
      );
   }
};

export default Root;