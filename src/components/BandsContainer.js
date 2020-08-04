import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import Bands from './Bands';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {

    // let bands = this.props.bands.map(band => <Band band={band}/>);

    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} delete={this.props.delete} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

// single time run
const mapDispatchToProps = dispatch => ({
  delete: id => dispatch({ type: 'DELETE_BAND', id: id }),
  addBand: name => dispatch({ type: "ADD_BAND", name: name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
