import React, { Component } from 'react';

class Band extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		// debugger;
		// this.props.deleteBand();
		this.props.deleteBand(this.props.band.id);
	}
	render() {
		console.log('Band Component', this.props.bandName);

		return (
			<li>
				{this.props.bandName}
				<button onClick={this.handleClick}>DELETE</button>
			</li>
		);
	}
}

export default Band;
