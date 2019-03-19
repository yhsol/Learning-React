import React, { Component } from 'react';

class ReactLifeCycle extends Component {
	state = {
		number: 0,
		color: null
	};

	myRef = null;

	constructor(props) {
		super(props);
		console.log('constructor');
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		// 전달되는 props 갑솨 기존의 state 값이 다를 때 기존의 state 값을 전달되는 props 값과 동기화 한다.
		// setState 로 값을 변경하지 않아도 state 값이 변경 됨.
		if (nextProps !== prevState) {
			return { color: nextProps.color };
		}
		return null;
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate', nextProps, nextState);
		return nextState.number % 10 !== 4;
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	handleClick = () => {
		this.setState({
			number: this.state.number + 1
		});
	};

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('getSnapshotBeforeUpdate');
		if (prevProps.color !== this.props.color) {
			return this.myRef.style.color;
		}
		return null;
	}

	// getSnapshotBeforeUpdate 를 통해 componentDidUpdate 에서 snapshot 값을 확인 할 수 있다.

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate', prevProps, prevState);
		if (snapshot) {
			console.log('업데이트 되기 전 생상: ', snapshot);
		}
	}

	render() {
		console.log('render');
		const style = {
			color: this.props.color
		};
		return (
			<div>
				<h1 style={style} ref={(ref) => (this.myRef = ref)}>
					{this.state.number}
				</h1>
				<p>color: {this.state.color}</p>
				<button onClick={this.handleClick}>plus button</button>
			</div>
		);
	}
}

export default ReactLifeCycle;
