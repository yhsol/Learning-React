import React from 'react';
import styled from 'styled-components';

const STodoInput = styled.div`
	border-top: 1px solid rgba(0, 0, 0, 0.6);
	border-bottom: 1px solid rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: space-between;
	padding: 8px 0;
	height: 30px;
`;

const SInput = styled.input`
	flex: 1;
	font-size: 14px;
	outline: none;
	border: none;
	background: transparent;
	padding: 8px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.8);
	&:focus {
		border-bottom: 1px solid green;
	}
`;

const SButton = styled.div`
	width: 50px;
	height: 30px;
	margin-left: 2px;
	border: 1px solid green;
	color: green;
	background: white;
	font-weight: 500;
	font-size: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:hover {
		background: green;
		color: white;
	}
	&:active {
		background: green;
	}
`;

const TodoInput = ({ value, onChange, onInsert }) => {
	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			onInsert();
		}
	};

	return (
		<STodoInput>
			<SInput onChange={onChange} value={value} onKeyPress={handleKeyPress} placeholder="Write Your Todo" />
			<SButton onClick={onInsert}>ADD</SButton>
		</STodoInput>
	);
};

export default TodoInput;
