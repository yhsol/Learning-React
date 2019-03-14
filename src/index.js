import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './Components/Redux-counter/Container/CounterApp';
import { createStore } from 'redux';
import reducers from './Components/Redux-counter/Reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
	<Provider store={store}>
		<CounterApp />
	</Provider>,
	document.getElementById('root')
);
