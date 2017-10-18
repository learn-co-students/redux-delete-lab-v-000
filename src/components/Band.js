import React, { Component } from 'react';

class Band extends Component {
  
  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND'
    });
  }


  render() {
    return(
      <div>
        <li>
          {this.props.text}
          <button onClick={this.handleOnClick} />
        </li>
      </div>
    );
  }


};

export default Band;
