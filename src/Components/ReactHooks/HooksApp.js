import React, { Component } from 'react';
import Counter from './Counter';
import Form from './Form';
import useRequest from './hooks/useRequest';
import Post from './Post';

class HooksApp extends Component {
	render() {
		return (
			<div>
				<Post />
			</div>
		);
	}
}

export default HooksApp;
