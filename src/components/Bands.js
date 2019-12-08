import React, { Component } from 'react';
import { connect } from 'react-redux';
import Band from './Band';


class Bands extends Component {

  renderBands = () => {
  return this.props.bands.map(band => <Band band={band}/>)
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

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
};

export default connect(mapStateToProps)(Bands)