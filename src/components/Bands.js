import React, { Component } from "react";
import Band from "./Band";

class Bands extends Component {
  render() {
    return (
      <ul>
        {this.props.bands.map(({ id, name }, idx) => (
          <Band key={idx} id={id} name={name} delete={this.props.delete} />
        ))}
      </ul>
    );
  }
}
export default Bands;
