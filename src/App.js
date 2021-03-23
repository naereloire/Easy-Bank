/** @format */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Finance from './pages/finance/finance';
import { useSelector, useDispatch } from 'react-redux';
import { incrementar, reduzir } from './Store/contador';
import Contador from './Contador';

const App = () => {
	// const state = useSelector((state) => state.contador);
	// console.log(state);
	// const dispatch = useDispatch();
	return (
		<div>
			<Contador />
		</div>

		// <Router>
		// 	<Switch>
		// 		<Route path='/' exact>
		// 			<Login />
		// 		</Route>
		// 		<Route path='/register'>
		// 			<Register />
		// 		</Route>
		// 		<Route path='/home'>
		// 			<Home />
		// 		</Route>
		// 		<Route path='/finance'>
		// 			<Finance />
		// 		</Route>
		// 	</Switch>
		// </Router>
	);
};
export default App;
