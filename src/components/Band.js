import React, { Component } from 'react';

class Band extends Component {
  handleClick(){
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.id
    })
  }

  render() {
    return(
      <div>
        <li>{this.props.band.text}
        <button onClick={this.handleClick.bind(this)}></button>
        </li>
        
      </div>
    );
  }
};

export default Band;
