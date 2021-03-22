import React, { Component } from 'react'
import BandInput from './BandInput';
import { connect } from 'react-redux'
import Bands from './Bands';

class BandsContainer extends Component {

  render() {
    console.log('this.props in BandsContainer:', this.props);
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
