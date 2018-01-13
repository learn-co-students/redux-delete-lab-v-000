import React, { Component } from 'react';

class Band extends Component {

  handeOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id,
    })
  }

  render() {
    return(
      <li>
        {this.props.band.text}
        <button onClick={() => this.handeOnClick()}
          Delete />
      </li>
    );
  }
};

export default Band;
