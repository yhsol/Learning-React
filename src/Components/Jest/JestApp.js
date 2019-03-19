import React, { Component } from 'react';
import Counter from './Counter';
import Name from './Name';
import NameList from './NameList';

class JestApp extends Component {
	state = {
		names: [ 'A', 'B' ]
	};

	onInsert = (name) => {
		this.setState(({ names }) => ({ names: names.concat(name) }));
	};

	render() {
		const { names } = this.state;
		const { onInsert } = this;
		return (
			<div>
				<Counter />
				<hr />
				<h1>NAMELIST</h1>
				<Name onInsert={onInsert} />
				<NameList names={names} />
			</div>
		);
	}
}

export default JestApp;
