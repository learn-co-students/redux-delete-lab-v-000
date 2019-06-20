import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'
import Band from './Band'

class BandsContainer extends Component {

	renderBands = () => this.props.bands.map(band => {return <Band key={band.id} band={band} deleteBand={this.props.deleteBand} /> })
  
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
				<ul>
					{this.renderBands()}
				</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", band }),
  deleteBand: band => dispatch({ type: "DELETE_BAND", band })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
