import React, { Component } from 'react';

class Band extends Component {

handleClick = () => {
  console.log("button clicked");
  this.props.deleteBand(this.props.id)
}
  render() {
    return(
      <div>
        <li key={this.props.id}>{this.props.name}</li>&nbsp;
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
};

export default Band;
