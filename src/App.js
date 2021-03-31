/** @format */

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';

const App = () => {
	return (
		<Router>
			<Routes>
			<Route path='/' exact element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/home' element={<Home />} />
			</Routes>
		</Router>
	);
};
export default App;
