import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {


  mapBands = () => {
    return this.props.bands.map((band, id) => <Band delete={this.props.delete} key={band.id} band={band} />)}

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.mapBands()}
      </div>
    )
  }
}

//const mapStateToProps = ({ bands }) => ({ bands })

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", payload: name }),
   delete: id => dispatch({type: 'DELETE_BAND', payload: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
