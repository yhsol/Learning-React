import React, { Component } from 'react';
import './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind();

// 기존에는 scss 를 가져올 때 styles from ".scss" 와 같이 가져왔었기 때문에
// const cx = classNames.bind(); 와 같이 써줘야 했지만 CRA 버전이 바뀌면서 지금과 같은 형태로 가져오게 되었다.
// 그러니 bind 를 쓸때에도 기존에 bind 의 parameter 로 styles 를 넣어주던 것을 넣지 않아도 작동한다.

class TodoItem extends Component {
	render() {
		const { done, children, handleOnToggle, handleOnRemove } = this.props;
		return (
			<div className="todo-item" onClick={handleOnToggle}>
				<input className="tick" type="checkbox" ckecked={done} readOnly />
				<div className={cx('text', { done })}>{children}</div>
				<div className="delete" onClick={handleOnRemove}>
					[DELETE]
				</div>
			</div>
		);
	}
}

export default TodoItem;
