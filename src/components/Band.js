import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.id
    });
  }
  render() {
    return(
      <div>
        <li>
        {this.props.text}
        <button onClick={this.handleOnClick}>Delete?</button>
        </li>
      </div>
    );
  }
};

export default Band;
