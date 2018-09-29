import React, { Component } from 'react';

class BandInput extends Component {

  state = {
          id: 0,
    bandName: ''
  }

  handleOnChange(event) {
    this.setState({
            id: this.state.id +1,
      bandName: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state.bandName);
    this.setState({
            // id: ""
      bandName: '',
    });
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
