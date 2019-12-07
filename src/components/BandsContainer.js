import React, { Component } from 'react'
import BandInput from './BandInput';
import { addBand }from '../actions/bands';
import { connect } from 'react-redux'
import Band from './Band';


class BandsContainer extends Component {
  render() {
    return (
      <div>
        <ul>
        	{this.props.bands.map((band) => <li>{band.name}</li>)}
        </ul>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }

}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => {
      dispatch(addBand(band))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
