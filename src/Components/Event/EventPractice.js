import React, { Component } from 'react';

class EventPractice extends Component {
	state = {
		username: '',
		message: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleClick = () => {
		alert(`${this.state.username} : ${this.state.message} hello!`);
		this.setState({ username: '', message: '' });
	};

	handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			this.handleClick();
		}
	};

	render() {
		const { message, username } = this.state;
		const { handleChange, handleClick, handleKeyPress } = this;
		return (
			<div>
				<h1>EVENT PRACTICE</h1>
				<input
					type="text"
					name="username"
					placeholder="Write your name"
					value={username}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="message"
					placeholder="Write someting you want"
					value={message}
					onChange={handleChange}
					// onKeyPress={(e) => {
					// 	if (e.key === 'Enter') {
					// 		handleClick();
					// 	}
					// }}
					onKeyPress={handleKeyPress}
				/>
				<button onClick={handleClick}>Comment!</button>
			</div>
		);
	}
}

export default EventPractice;
