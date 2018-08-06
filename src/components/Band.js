import React, { Component } from 'react';

class Band extends Component {
  
  handleClick = () => {
    this.props.delete(this.props.band.id);
  }

  render() {
    return(
      <div>
        <li>
          <span>{this.props.band.name}</span>
          <span><button onClick={this.handleClick}>DELETE</button></span>
        </li>
      </div>
    );
  }
};

export default Band;
