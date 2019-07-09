import React, { Component } from 'react';
import BandInput from './BandInput';

import { connect } from 'react-redux';
import Band from './Band';

class BandsContainer extends Component {
	render() {
		// debugger;
		const renderBand = this.props.bands.map((band) => (
			<Band deleteBand={this.props.deleteBand} band={band} key={band.id} bandName={band.name} />
		));
		return (
			<div>
				<BandInput addBand={this.props.addBand} />
				<ul>{renderBand}</ul>
			</div>
		);
	}
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = (dispatch) => ({
	addBand: (name) => dispatch({ type: 'ADD_BAND', name }),
	// 	delete: (todoText) => dispatch({ type: 'DELETE_TODO', payload: todoText })
	deleteBand: (id) => dispatch({ type: 'DELETE_BAND', id })
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
