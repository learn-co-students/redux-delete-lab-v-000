import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from "./Band"

import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => {return this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} band={band} />)}
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/><br/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: band => dispatch({type: "DELETE_BAND", id: band})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
