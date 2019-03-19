import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class EventApp extends Component {
	render() {
		return (
			<div>
				<ScrollBox
					ref={(ref) => {
						this.scrollBox = ref;
					}}
				/>
				<button onClick={() => this.scrollBox.scrollToBottom()}>Bottom</button>
				<button onClick={() => this.scrollBox.scrollToTop()}>Top</button>
			</div>
		);
	}
}

export default EventApp;
