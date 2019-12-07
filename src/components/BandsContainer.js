import React, { Component } from 'react'
import BandInput from './BandInput';
import { addBand }from '../actions/bands';
import { connect } from 'react-redux'
import Band from './Band';


class BandsContainer extends Component {

renderBands = () => {
  return this.props.bands.map(band => <Band delete={this.props.delete} band={band} />)
} 
  render() {
    return (
      <div>
        <ul>
          	{console.log(this)}

        	{this.renderBands()}
        </ul>
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
