import React, { Component } from 'react'
import BandInput from './BandInput';
import { addBand }from '../actions/bands';
import { connect } from 'react-redux'


class BandsContainer extends Component {

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => {
      dispatch(addBand(band))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
