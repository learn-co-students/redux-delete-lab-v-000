import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    bandName: ''
  }

  handleOnChange = event => {
    this.setState({
    bandName: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state.bandName);
    this.setState({
      bandName: '',
    });
  }

  render() {
    return (
      <div>
         Enter Band Name
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.bandName}
            name= "bandName"
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
