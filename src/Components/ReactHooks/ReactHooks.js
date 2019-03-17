import React, { useState, useEffect } from 'react';

function something() {
	const [ some, setSome ] = useState();
	const [ thing, setThing ] = useState();

	const somethingCool = () => {
		setSome();
		setThing();
	};
	useEffect(() => {
		something();
	}, []);
	return { some, thing };
}

const ReactHooks = () => {
	const { some, thing } = something();
	return (
		<div>
			{some}
			{thing}
		</div>
	);
};

export default ReactHooks;
