import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';

import { addBand, removeBand } from '../actions/bands';
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands removeBand={this.props.removeBand} bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

export default connect(mapStateToProps, { addBand, removeBand })(BandsContainer)
