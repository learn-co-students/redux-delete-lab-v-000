import React, { Component } from 'react';
import uuid from 'uuid';

class BandInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bandName: ''
		}
	}

  handleOnChange(event) {
    this.setState({
      bandName: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand({name: this.state.bandName});
    this.setState({
      bandName: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.bandName}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
