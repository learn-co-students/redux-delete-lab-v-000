import React, { Component } from 'react';

class Band extends Component {
	render() {
		// debugger;
		console.log('Band Component', this.props.bandName);

		return (
			<li>
				{this.props.bandName}
				<button
					onClick={() => {
						// debugger;

						// _this2.props.delete is not a function
						this.props.deleteBand(this.props.id);
					}}
				>
					DELETE
				</button>
			</li>
		);
	}
}

export default Band;
