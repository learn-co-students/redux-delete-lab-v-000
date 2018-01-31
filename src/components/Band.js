import React, { Component } from 'react';

class Band extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id,
    });
  }

  render() {
    let { text, id } = this.props.band

    return(
      <li>
        {text}
        <button
          id={id}
          onClick={this.handleOnClick.bind(this)}
        />
      </li>
    );
  }
};

export default Band;
