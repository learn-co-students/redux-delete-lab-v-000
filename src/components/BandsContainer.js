import React, { Component } from 'react';
import BandInput from './BandInput';

import { connect } from 'react-redux';
import Band from './Band';

class BandsContainer extends Component {
	render() {
		const renderBand = this.props.bands.map((band) => <Band key={band.id} bandName={band.bandName} />);
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
	deleteBand: (id) => dispatch({ type: 'DELETE_BAND', id })
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
