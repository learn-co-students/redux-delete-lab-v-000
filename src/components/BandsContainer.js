import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux'

class BandsContainer extends Component {

bands = () => {
  return this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} band={band} />)
}

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.bands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  };
};

const mapDispatchToProps = dispatch => ({
  delete: bandName => dispatch({type: 'DELETE_BAND', payload: bandName })
})




export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
