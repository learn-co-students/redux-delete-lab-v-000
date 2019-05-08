import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import uuid from 'uuid';
import { connect } from 'react-redux'

class BandsContainer extends Component {

  deleteOnClick = (bandId) => {
    // The event target's id is the name of the band
    // that we want to remove, cf Band.js
    this.props.deleteBand(bandId);
  }

  generateBands = () => {
    console.log("What is in this.props.bands? ", this.props)
    return this.props.bands.map( band => (
      <Band key={band.id} bandName={band.bandName} bandId={band.id} deleteOnClick={this.deleteOnClick} />
    ));
  }

  render() {

    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands ? this.generateBands() : null}
      </div>
    )
  }

}

// pass in the state, which contains a property "bands"
// with value being the value of "bands" and then return
// to our local props a prop called "bands" with value
// being the value of "bands"
const mapStateToProps = ({ bands }) => ({ bands })

// We don't have a separate actions script, so we're 
// passing in the action object to dispatch. It's
// payload is the band name.
const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch(
    { 
      type: "ADD_BAND", 
      band: {bandName: name, id: uuid() }
    }
  ),
  deleteBand: id => dispatch({ type: 'DELETE_BAND', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
