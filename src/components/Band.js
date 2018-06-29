import React, { Component } from 'react';

export default class Band extends Component {
  handleOnDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id,
    })
  }
  render() {
    return(
        <li>
          {this.props.band.text}
          <button onClick={this.handleOnDelete}/>
        </li>
    );
  }
};
