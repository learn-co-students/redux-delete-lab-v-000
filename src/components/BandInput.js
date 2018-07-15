import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND', 
      band: {
        text: this.state.text,
        id: this.state.id,
      },
    });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
      <p>
      <label> label </label>
      <input type="text"
      value={this.state.text}
      onChange={(event) => this.handleOnChange(event)}
       />
     </p>
     <input type="submit"  />
</form>
    );
  }
};

export default BandInput;
