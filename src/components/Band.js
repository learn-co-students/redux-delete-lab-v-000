import React, { Component } from "react";

class Band extends Component {
  render() {
    return (
      <li>
        <span>{this.props.name}</span>
        <button onClick={(_) => this.props.delete(this.props.id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default Band;
