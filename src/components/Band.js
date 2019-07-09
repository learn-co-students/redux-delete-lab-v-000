import React, { Component } from 'react';

class Band extends Component {
	render() {
		console.log('Band Component', this.props);

		return <li>{this.props.name}</li>;
	}
}

export default Band;
