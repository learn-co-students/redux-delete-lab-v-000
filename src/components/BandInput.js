import React, { Component } from 'react';
import uuid from 'uuid';

class BandInput extends Component {
  id = uuid()
  state = {
    name: ""
  }
  
  baseState = this.state;

  handleOnChange = event => {
    this.setState({
      name: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();

    this.props.addBand(this.state);
    this.setState(this.baseState);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
