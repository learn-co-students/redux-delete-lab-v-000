import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.delete(this.props.band.id)
  }

  render() {
    return(
      <div>
        Band Component
        <li>
          {this.props.band.name}
          <button onClick={this.handleClick}>Delete</button>
          </li>
          
      </div>
    );
  }
};

export default Band;
