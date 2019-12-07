import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addBand }from '../actions/bands';


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
    event.preventDefault();
    const newBand = {...this.state, id: uuid() };
    this.props.addBand(newBand);
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

const mapDispatchToProps = dispatch => {
  return {
    addBand: (newBand) => {
      dispatch(addBand(newBand))
    }
  };
};

export default connect(null, mapDispatchToProps)(BandInput);
