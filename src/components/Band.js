import React, { Component } from 'react';
import BandsContainer from './BandsContainer';


class Band extends Component {

  render() {
    return(
      <div>
      console.log({this.props.band})
        Band Component
        {<li key={this.props.band.id}>{this.props.band.name}</li>}
        <button onClick={() => props.delete(props.band.id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
