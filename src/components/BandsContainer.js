import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'
import Bands from './Bands'

import { connect } from 'react-redux'

class BandsContainer extends Component {

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} delete={this.props.deleteBand} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: name => dispatch({type: "DELETE_BAND", payload: name})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
