import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';


import App from './app'


render(
	// <Provider store={store}>
		<App />,
	// </Provider>,
	document.getElementById('App')
)