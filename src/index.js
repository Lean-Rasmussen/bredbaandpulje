import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, Route, hashHistory} from 'react-router';

//Components
import App from './App';
import Information from './components/information'
import Tilmelding from './components/tilmelding'
import Progress from './components/progress'


ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}> 
			<Route path="/information" component={Information} /> 
			<Route path="/tilmelding" component={Tilmelding} /> 
			<Route path="/progress" component={Progress} /> 
		</Route>
	</Router>
),document.getElementById('root')
);
