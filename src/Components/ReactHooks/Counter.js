import React, { useState, useEffect } from 'react';

const Counter = () => {
	const [ value, setValue ] = useState(0);

	useEffect(
		() => {
			console.log('rendered: ', value);
		},
		[ value ]
	);

	console.log('rendering: ', value);

	return (
		<div>
			<p>
				<b>{value}</b>번 누르셨습니다.
			</p>
			<button onClick={() => setValue(value + 1)}>+1</button>
			<button onClick={() => setValue(value - 1)}>-1</button>
		</div>
	);
};

export default Counter;
