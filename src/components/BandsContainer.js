import React, { Component } from 'react'
import Band from './Band';
import BandInput from './BandInput';

import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map(band =>
//console.log(band))
  <Band delete={this.props.deleteBand} key={band.id} band={band} />)

  render() {
    return (
      <ul>
      {this.renderBands()}
      <BandInput addBand={this.props.addBand}/>
      </ul>
    )
  }
}


const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
