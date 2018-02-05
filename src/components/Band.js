import React, { Component } from 'react';

class Band extends Component {
  constructor(props) {
      super(props);

      this.handleOnClick = this.handleOnClick.bind(this)
    }

  handleOnClick() {
    debugger;
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id,
    });
  }

  render() {
    return(
      <div key={this.props.id}>
        <li>{this.props.band.text}</li>
        <button onClick={this.handleOnClick}>Delete Band</button>
      </div>
    );
  }
};

export default Band;
