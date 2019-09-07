import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    bandName: ''
  }

  handleOnChange(event) {
    this.setState({
      bandName: event.target.value,
    });
  }

  handleOnSubmit(event) {
    console.log('handleOnSubmit - event', event);

    event.preventDefault();
    this.props.addBand(this.state.bandName)
    console.log('handleOnSubmit - this.state', this.state);

    this.setState({
      bandName: ''
    });
    console.log('handleOnSubmit after setState- this.state', this.state);

  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
