import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import Root from './root';

const rootEl = document.getElementById('root');
const history = createHashHistory({
	queryKey: false
});

ReactDOM.render(<Root history={history} />, rootEl);