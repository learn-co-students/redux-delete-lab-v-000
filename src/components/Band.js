import React, { Component } from 'react';

class Band extends Component {
  render() {
    // console.log(this.props)
    return(
      <div>
        <br />
        <li>{this.props.band.name} <button onClick={() => this.props.delete(this.props.band.id)}>X</button></li>

      </div>
    );
  }
};

export default Band;
