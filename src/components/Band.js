import React, { Component, Fragment } from 'react';

class Band extends Component {

  render() {
    return(
      <Fragment>
        <ul>
          <li>{this.props.band.name}</li>
          <button onClick={() => this.props.delete(this.props.band.id)}>Delete</button>
        </ul>
      </Fragment>
    );
  }
};

export default Band;
