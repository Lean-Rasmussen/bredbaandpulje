import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, Route, hashHistory} from 'react-router';

//Components
import App from './App';
import Information from './components/information'
import Tilmelding from './components/tilmelding'
import Progress from './components/progress'
//data
import planInfo from './data/adresser#317'
import information from './data/information'
import produkter from './data/produkter'

ReactDOM.render((
	<Router history={hashHistory}>
		<Route component={App}> 
			<Route path="/" component={Information} information={information} /> 
			<Route path="/tilmelding" component={Tilmelding} planInfo={planInfo} faseBeskrivelse={information} produkter={produkter}/> 
			<Route path="/progress" component={Progress} faseBeskrivelse={information} planInfo={planInfo}/> 
		</Route>
	</Router>
),document.getElementById('root')
);
