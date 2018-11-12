import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {

  mapBands = () => this.props.bands.map(band =><Band key={band.id} band={band} delete={this.props.delete}/>)

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.mapBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", band }),
  delete: bandId => dispatch({type: 'DELETE_BAND', id: bandId })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
