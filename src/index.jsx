/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import store from './Store/configureStore';
import App from './App.js';
import { Provider } from 'react-redux';
import { GlobalStyle } from './styledComponents/styledComponents';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<GlobalStyle />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
