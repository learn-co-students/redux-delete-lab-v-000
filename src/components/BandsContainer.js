import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => {
  return {
    addBand: name => dispatch({ type: "ADD_BAND", name }),
    delete: id => dispatch({
      type: 'DELETE_BAND', payload: id
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
