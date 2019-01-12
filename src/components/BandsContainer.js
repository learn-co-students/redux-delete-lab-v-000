import React, { Component } from 'react'
import { connect } from 'react-redux'
import Band from '../components/Band'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map(band => <Band deleteBand={this.props.deleteBand} key ={band.id} band={band} />)
  }
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}


const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', name: formData.name}),
  deleteBand: formData => dispatch({type: 'DELETE_BAND', id: formData})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
