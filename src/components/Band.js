import React, { Component } from 'react';

class Band extends Component {
  handleOnClick = () => {
     this.props.store.dispatch({
       type: 'DELETE_BAND',
       band: this.props.band,
       id: this.props.band.id
     });
   }

  render() {
    return(
      <div>
        <li>{this.props.band.text}</li>
        <button onClick={this.handleOnClick} />
      </div>
    );
  }
};

export default Band;
