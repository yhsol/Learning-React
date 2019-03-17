import React, { useState, useEffect } from 'react';

function something() {
	const [ some, setSome ] = useState('some');
	const [ thing, setThing ] = useState('thing');

	const somethingCool = () => {
		setSome('some');
		setThing('thing');
	};
	useEffect(() => {
		somethingCool();
		console.log('rendered: ', some);
	}, []);
	console.log('rendering: ', some);
	return { some, setSome, thing, setThing };
}

const ReactHooks = () => {
	const { some, setSome, thing, setThing } = something();
	return (
		<div>
			{some}
			{thing}
			<br />
			<button onClick={() => setSome(some + '1')}>+Some</button>
			<button onClick={() => setThing(thing + '1')}>+Thing</button>
		</div>
	);
};

export default ReactHooks;
