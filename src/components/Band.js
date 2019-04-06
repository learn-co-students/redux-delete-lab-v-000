import React, { Component } from "react";

class Band extends Component {
  handleClick = () => {
    this.props.deleteBand(this.props.id);
  };

  render() {
    return (
      <div>
        <li>
          {this.props.name}
          <button onClick={this.handleClick}>DELETE</button>
        </li>
      </div>
    );
  }
}

export default Band;
