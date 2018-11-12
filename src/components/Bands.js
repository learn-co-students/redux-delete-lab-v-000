import React, { Component } from 'react';
import { connect } from 'react-redux'
import Band from './Band'

class Bands extends Component {
  renderBands = () => {
    return this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} band={band} />)
  }

  render() {
    return(
      <ul>
        {this.renderBands()}
      </ul>
    );
  }
};
const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    delete: id => dispatch({type: 'DELETE_BAND', id: id })
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Bands);
