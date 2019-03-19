import React, { Component } from 'react';
import './Validation.css';

class Validation extends Component {
	state = {
		password: '',
		clicked: false,
		validated: false
	};

	handleChange = (e) => {
		this.setState({
			password: e.target.value
		});
	};

	handleButtonClick = () => {
		this.setState({
			clicked: true,
			validated: this.state.password === '0000'
		});
		this.input.focus();
	};

	render() {
		return (
			<div>
				<input
					ref={(ref) => (this.input = ref)}
					type="password"
					value={this.state.password}
					onChange={this.handleChange}
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							this.handleButtonClick();
						}
					}}
					className={this.state.clicked ? this.state.validated ? 'sucess' : 'failure' : ''}
				/>
				<button onClick={this.handleButtonClick}>CLICK!</button>
			</div>
		);
	}
}

export default Validation;
