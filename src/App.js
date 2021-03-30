/** @format */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Finance from './pages/finance/finance';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<Login />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
				<Route path='/home'>
					<Home />
				</Route>
				<Route path='/finance'>
					<Finance />
				</Route>
			</Switch>
		</Router>
	);
};
export default App;
