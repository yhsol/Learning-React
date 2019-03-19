import React, { Component } from 'react';

class Name extends Component {
	static defaultProps = {
		onSubmit: () => console.warn('onSubmit not defined')
	};
	state = {
		name: ''
	};
	onChange = (e) => {
		this.setState({
			name: e.target.value
		});
	};
	onSubmit = (e) => {
		const { name } = this.state;
		const { onInsert } = this.props;
		onInsert(name);
		this.setState({
			name: ''
		});
		e.preventDefault();
	};

	render() {
		const { onSubmit, onChange } = this;
		const { name } = this.state;
		return (
			<form onSubmit={onSubmit}>
				<label>NAME</label>
				<input type="text" value={name} onChange={onChange} />
				<button type="submit">GO!</button>
			</form>
		);
	}
}

export default Name;
