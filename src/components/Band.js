import React, { Component } from 'react';

class Band extends Component {
  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    });
  }

  render() {
    return(
      <div>
        <li key={this.props.band.id}>
          {this.props.band.text}
          <button onClick={this.handleOnClick} />
        </li>
      </div>
    );
  }
};

export default Band;
