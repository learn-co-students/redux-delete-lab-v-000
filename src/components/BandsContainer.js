import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map((band) => {
        return <Band id={band.id} key={band.id} bandName={band.bandName} delete={this.props.delete} />
    });
  }

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        { this.renderBands() }
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = (dispatch) => {
    return {
      addBand: (bandName) => { 
        return dispatch({ type: "ADD_BAND", bandName })
      },

      delete: (id) => {
        return dispatch({ type: "DELETE_BAND",
      id: id })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
 