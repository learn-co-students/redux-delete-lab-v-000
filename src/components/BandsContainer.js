import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {


    renderBands = () => {
    return this.props.bands.map(band => 
      <Band deleteBand={this.props.deleteBand} key={band.id} band={band} />
      )
    }
  render() {  
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => {
  return{
  deleteBand: bandId => dispatch({ type: "DELETE_BAND", bandId }),
  addBand: bandName => dispatch({ type: 'ADD_BAND', bandName })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
