import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'
import Band from './Band'

class BandsContainer extends Component {

	renderBands = () => this.props.bands.map(band => <Band band={band} deleteBand={this.props.deleteBand} />)
  
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

const mapDTP_AddBand = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", band })
})

const mapDTP_DeleteBand = dispatch => ({
  deleteBand: band => dispatch({ type: "DELETE_BAND", band })
})

export default connect(mapStateToProps, {mapDTP_AddBand, mapDTP_DeleteBand})(BandsContainer)
