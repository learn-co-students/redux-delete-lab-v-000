import React, { Component } from "react";

class Band extends Component {
  handleOnClick = () => {
    this.props.deleteBand(this.props.band.id);
  };

  render() {
    return (
      <li>
        {this.props.band.name}{" "}
        <button onClick={this.handleOnClick}>Delete</button>
      </li>
    );
  }
}

export default Band;
