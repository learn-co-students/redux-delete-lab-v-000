import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} bands={this.props.bands} delete={this.props.delete}/>
    
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: id => dispatch({ type: 'DELETE_BAND', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
