import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './Components/Todo/TodoApp';
import CounterApp from './Components/Redux-counter/Container/CounterApp';
import { createStore } from 'redux';
import reducers from './Components/Redux-counter/Reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<CounterApp />
	</Provider>,
	document.getElementById('root')
);
