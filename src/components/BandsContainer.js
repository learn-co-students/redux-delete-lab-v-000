import React, { Component } from 'react'
import Bands from './Bands';
import BandInput from './BandInput';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <div>
        <BandInput addBand={this.props.addBand}/>
				<Bands deleteBand={this.props.deleteBand} bands={this.props.bands} />) }
      </div>

      </div>
    )
  }
}
const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
	deleteBand: id => dispatch({ type: 'DELETE_BAND', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
