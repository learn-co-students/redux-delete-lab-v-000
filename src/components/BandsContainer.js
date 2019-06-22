import React, { Component } from 'react'

import BandInput from './BandInput';
import Bands from './Bands';

import { addBand } from '../actions/bands'
import { deleteBand } from '../actions/bands'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log("state", state)
  return ({
    bands: state.bands
  })
}

export default connect(mapStateToProps, { addBand, deleteBand })(BandsContainer)

// This was provided in lab, decided to use bulkier sytanx
// const mapStateToProps = ({ bands }) => ({ bands })

// using action creator instead of mapDispatchToProps
// const mapDispatchToProps = dispatch => ({
//   addBand: name => dispatch({ type: "ADD_BAND", name })
// })
