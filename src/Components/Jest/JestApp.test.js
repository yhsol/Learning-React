import React from 'react';
import ReactDOM from 'react-dom';
import JestApp from './JestApp';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<JestApp />, div);
	ReactDOM.unmountComponentAtNode(div);
});
