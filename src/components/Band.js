import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        {this.props.band.name}
        <button onClick={_=> this.props.deleteAction(this.props.band.id)}>delete</button>
      </li>
    );
  }
};

export default Band;
