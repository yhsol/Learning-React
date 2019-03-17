import React, { Component } from 'react';
import Counter from './Counter';
import Form from './Form';
import useRequest from './hooks-API/useRequest';
import Post from './hooks-API/Post';
import Input from './Input';
import Fetch from './hooks-API/Fetch';

class HooksApp extends Component {
	render() {
		return (
			<div>
				<Fetch />
			</div>
		);
	}
}

export default HooksApp;
