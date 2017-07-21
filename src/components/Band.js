import React, { Component } from 'react'

class Band extends Component {

  handleClick = () => {
     this.props.store.dispatch({
       id: this.props.band.id,
       type: 'DELETE_BAND',
     });
  }

  render() {
    return (
      <li>{this.props.band.text}
        <button onClick={this.handleClick}>Delete Band</button>
      </li>
    );
  }
};

export default Band;


//In the Band component, you will need to add a button that dispatches an action of type 'DELETE_BAND' and then passes through that band's id as the action.id.
