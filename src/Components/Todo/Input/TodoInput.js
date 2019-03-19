import React from 'react';
import './TodoInput.scss';

const TodoInput = ({ value, handleChange, handleOnInsert }) => {
	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleOnInsert();
		}
	};

	return (
		<div className="todo-input">
			<input onChange={handleChange} value={value} onKeyPress={handleKeyPress} />
			<div className="add-button" onClick={handleOnInsert}>
				ADD
			</div>
		</div>
	);
};

export default TodoInput;
