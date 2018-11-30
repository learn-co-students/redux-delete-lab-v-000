import React, { Component } from "react";

class Band extends Component {
  renderBands = () =>
    this.props.bands.map(band => {
      return (
        <li key={band.id} band={band}>
          <span>{band.name}</span>
          <button onClick={() => this.props.delete(band)}>DELETE</button>
        </li>
      );
    });

  render() {
    return (
      <div>
        <ul>{this.renderBands()}</ul>
      </div>
    );
  }
}

export default Band;
