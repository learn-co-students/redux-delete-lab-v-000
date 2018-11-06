import React, { Component } from 'react';
import { connect } from 'react-redux'

class BandInput extends Component {

  constructor() {
    super();
    this.state = {
    bandName: '',
    };
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({bandName: ''});
  }

  handleOnChange(event) {
    this.setState({
      bandName: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={(event) => this.handleOnChange(event)}
            value={this.state.bandName}
             />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: "ADD_BAND", name: formData })
})

export default connect(null, mapDispatchToProps)(BandInput)