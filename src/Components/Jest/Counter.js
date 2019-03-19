import React, { Component } from 'react';

class Counter extends Component {
	state = {
		value: 1
	};
	onIncreate = () => {
		this.setState(({ value }) => ({ value: value + 1 }));
	};
	onDecrease = () => {
		this.setState(({ value }) => ({ value: value - 1 }));
	};

	render() {
		const { value } = this.state;
		const { onIncreate, onDecrease } = this;
		return (
			<div>
				<h1>COUNTER</h1>
				<h2>{value}</h2>
				<button onClick={onIncreate}>+</button>
				<button onClick={onDecrease}>-</button>
			</div>
		);
	}
}

export default Counter;
