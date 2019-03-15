import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';

const Buttons = ({ onCreate, onRemove }) => {
	return (
		<div className="Buttons">
			<div className="btn add" onClick={onCreate}>
				CREATE
			</div>
			<div className="btn remove" onClick={onRemove}>
				REMOVE
			</div>
		</div>
	);
};

Buttons.porpTypes = {
	onCreate: PropTypes.func,
	onRemove: PropTypes.func
};

Buttons.defaultProps = {
	onCreate: () => console.log('onCreate not defined'),
	onRemove: () => console.log('onRemove not defined')
};

export default Buttons;
