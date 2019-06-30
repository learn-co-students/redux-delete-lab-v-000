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
    event.preventDefault();
    this.props.addBand(this.state.bandName);
    this.setState({
      bandName: '',
    });
  }

  render() {
    return (
      <div>
        <h3>Enter Your Favorite Bands</h3>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>  {/*don't need to pass event if you do arrow function for handleOnSubmit*/}
          <input
            type="text"
            value={this.state.text}
          onChange={(event) => this.handleOnChange(event)} />   {/*same as above*/}
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
