import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div key={this.props.bandId}>
        <li>{this.props.bandName}
        <button onClick={() => this.props.deleteBand(this.props.bandId)}>DELETE</button></li>
      </div>
    );
  }
};

export default Band;
