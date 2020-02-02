import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.delete(this.props.id);
  }

  render() {
    return(
      <li key={this.props.id}>{this.props.name}<button onClick={this.handleOnClick}>DELETE</button></li>
    );
  }
}



export default Band;
