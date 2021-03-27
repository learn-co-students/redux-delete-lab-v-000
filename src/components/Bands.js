import React, { Component } from 'react';
import Band from './Band';
import { connect } from 'react-redux';

class Bands extends Component {

    render() {
      return(
        <div>
          {this.props.bands.map(band => <Band band={band} key={band.id} deleteBand={this.props.deleteBand} />)}
        </div>
      );
    }
  };
  
  const mapDispatchToProps = dispatch => {
      return {
          deleteBand: (id) => dispatch({type: 'DELETE_BAND', id: id})
      }
  }
  export default connect(null, mapDispatchToProps) (Bands);
  