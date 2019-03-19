import React, { Component } from 'react';
import ReactLifeCycle from './ReactLifeCycle';

function getRandomColor() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class BookApp extends Component {
	state = {
		color: '#000000'
	};

	handleClick = () => {
		this.setState({
			color: getRandomColor()
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>RANDOM COLOR</button>
				<ReactLifeCycle color={this.state.color} />
			</div>
		);
	}
}

export default BookApp;
