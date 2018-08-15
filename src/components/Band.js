import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li><p key={this.props.key}>{this.props.name}</p><button onClick={() => this.props.delete(this.props.id)}>DELETE</button></li>
      </div>
    );
  }
};

export default Band;
