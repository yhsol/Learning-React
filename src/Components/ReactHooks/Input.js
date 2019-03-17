import React, { useState } from 'react';

function useInput(defaultValue) {
	const [ value, setValue ] = useState(defaultValue);

	const onChange = (e) => {
		const { target: { value } } = e;
		setValue(value);
	};
	return { value, setValue, onChange };
}

const Input = () => {
	const name = useInput('');
	console.log(name);
	return (
		<div>
			{/* {...name} 은 value={name.value} onChange={name.onChange} 와 같다. */}
			<input value={name.value} onChange={name.onChange} placeholder="write something" />
			<div>{name.value}</div>
		</div>
	);
};

export default Input;
