import CounterPresenter from '../Presenter/CounterPresenter';
import * as actions from '../Actions';
import { connect } from 'react-redux';

export function getRandomColor() {
	const color = [
		'#495057',
		'#f03e3e',
		'#d6336c',
		'#ae3ec9',
		'#7048e8',
		'#4263eb',
		'#1c7cd6',
		'#1098ad',
		'#0ca678',
		'#37b24d',
		'#74b816',
		'#f59f00',
		'#f76707',
		'##1abc9c'
	];

	const random = Math.floor(Math.random() * 14);

	return color[random];
}

const mapStateToProps = (state) => ({
	color: state.colorData.color,
	number: state.numberData.number
});

const mapDispatchToProps = (dispatch) => ({
	onIncrement: () => dispatch(actions.increment()),
	onDecrement: () => dispatch(actions.decrement()),
	onSetColor: () => {
		const color = getRandomColor();
		dispatch(actions.setColor(color));
	}
});

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterPresenter);

export default CounterContainer;
