import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>
          { this.props.name }
          <button onClick={this.handleOnClick}>DELETE</button>
        </li>
      </div>
    );
  }
};

export default Band;
