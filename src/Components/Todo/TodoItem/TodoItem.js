import React, { Component } from 'react';
import styled from 'styled-components';

const STodoItem = styled.div`
	padding: 10px;
	display: flex;
	align-items: center;
	width: 480px;
	height: 50px;
	cursor: pointer;
	&:nth-child(odd) {
		background: rgba(0, 0, 0, 0.1);
	}
	&:hover {
		background: rgba(0, 0, 0, 0.5);
	}
	border-top: 1px solid gray;
`;

const Tick = styled.input`margin-right: 10px;`;

const SText = styled.div`
	flex: 1;
	word-break: break-all;
	/* &.done {
		text-decoration: line-through;
	} */
	/* styled-components 와 bind 로 css를 구성할 때 달리 해야할 부분이다.
		bind를 사용할 때는 위와같이 &.done 과 같이 사용할 수 있지만
		styled-components 를 쓸 때는 아래와 같이 효과를 설정하고,
		해당 태그의 prosp를 가져와서 그 값의 boolean 값을 확인하고 해당 값을 지정해야한다.
	 */
	text-decoration: ${(props) => (props.current ? 'line-through' : 'none')};
`;

const SDelete = styled.div`
	margin-left: 10px;
	color: green;
	font-size: 10px;
	&:hover {
		color: green;
		text-decoration: underline;
	}
`;

class TodoItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.done !== nextProps.done;
	}
	render() {
		const { done, children, onToggle, onRemove } = this.props;
		return (
			<STodoItem onClick={onToggle}>
				<Tick type="checkbox" checked={done} readOnly />
				<SText current={done === true}>{children}</SText>
				<SDelete
					onClick={(e) => {
						onRemove();
						e.stopPropagation();
					}}
				>
					[DELETE]
				</SDelete>
			</STodoItem>
		);
	}
}

export default TodoItem;
