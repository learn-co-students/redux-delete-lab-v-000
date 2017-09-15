import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Band extends Component {
  // add a constructor for state using 'reactstate'
  static propTypes = {
    band: PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }),
    store: PropTypes.object.isRequired
  };

  handleDeleteBand(id) {
    this.props.store.dispatch({
      type: 'DELETE_BAND', 
      id
    });
  }
  
  render() {
    const {text, id} = this.props.band;
    return (
      <li>
        {text}
        <button 
          style={{ background: 'red'}}
          onClick={() => this.handleDeleteBand(id)}
        >
          X
        </button>
      </li>
    );
  }
}

export default Band
