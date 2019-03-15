import React, { Component } from 'react';
import Buttons from '../Presenter/Buttons';
import CounterListContainer from '../Container/CounterListContainer';
import getRandomColor from '../Lib/getRandomColor';

import { connect } from 'react-redux';
import * as actions from '../Actions';

class CounterApp extends Component {
	render() {
		const { onCreate, onRemove } = this.props;
		return (
			<div>
				<Buttons onCreate={onCreate} onRemove={onRemove} />
				<CounterListContainer />
			</div>
		);
	}
}

const mapTodispatch = (dispatch) => ({
	onCreate: () => dispatch(actions.create(getRandomColor())),
	onRemove: () => dispatch(actions.remove())
});

export default connect(null, mapTodispatch)(CounterApp);
