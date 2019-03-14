import CounterList from '../Presenter/CounterList';
import * as actions from '../Actions';
import { connect } from 'react-redux';
import getRandomColor from '../Lib/getRandomColor';
// 위의 getRandomColor 는 다른 디렉터리에 있는 js 파일이다.
// 파일은 export defualt function 으로 진행되며 구성되어 있다.
// 그런식으로 구성했을 때, 그것을 다른 파일에서 위와 같이 가져와서
// 아래의 getRandomColor()와 같이 바로 쓸 수 있다.
// 자주 쓰거나 재사용해야 하는 메서드들은 이렇게 관리하면 편하겠다.

const mapStateToProps = (state) => ({ counters: state.counters });

const mapDispatchToProps = (dispatch) => ({
	onIncrement: (index) => dispatch(actions.increment(index)),
	onDecrement: (index) => dispatch(actions.decrement(index)),
	setColor: (index) => {
		const color = getRandomColor();
		dispatch(actions.setColor({ index, color }));
	}
});

const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);

export default CounterListContainer;
