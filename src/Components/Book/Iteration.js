import React, { Component } from 'react';

class Iteration extends Component {
	state = {
		names: [ '눈사람', '얼음', '눈', '바람' ],
		name: ''
	};

	handleChange = (e) => {
		this.setState({
			name: e.target.value
		});
	};

	handleOnInsert = () => {
		this.setState({
			names: [ ...this.state.names, this.state.name ],
			name: ''
		});
	};

	handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			this.handleOnInsert();
		}
	};

	handleRemove = (index) => {
		const { names } = this.state;
		this.setState({
			// names: [ ...names.slice(0, index), ...names.slice(index + 1, names.length) ]
			names: names.filter((item, i) => i !== index)
		});
	};

	render() {
		const { names, name } = this.state;
		const nameList = names.map((name, index) => (
			<li key={index} onDoubleClick={() => this.handleRemove(index)}>
				{name}
			</li>
		));

		return (
			<div>
				<input onChange={this.handleChange} onKeyPress={this.handleKeyPress} value={name} />
				<button onClick={this.handleOnInsert}>추가</button>
				<ul>{nameList}</ul>
			</div>
		);
	}
}

export default Iteration;
