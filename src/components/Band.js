import React, { Component } from "react";

class Band extends Component {
  render() {
    return (
      <li>
        {this.props.band.name}
        <button
          type="button"
          onClick={
            this.props.deleteBand
              ? this.props.deleteBand.bind(null, this.props.band.id)
              : ""
          }
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </li>
    );
  }
}

export default Band;
