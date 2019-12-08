import React, { Component } from 'react';
import { connect } from 'react-redux';
import Band from './Band';
import { deleteBand } from '../actions/bands';


class Bands extends Component {

  renderBands = () => {
  return this.props.bands.map(band => <Band band={band} delete={this.props.deleteBand}/>)
} 

  render() {
    return(
      <div>
        Bands Component
        {this.renderBands()}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteBand: (id) => {
      dispatch(deleteBand(id))
    }
  };
};

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bands)