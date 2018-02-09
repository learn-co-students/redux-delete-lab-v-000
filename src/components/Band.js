import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.store.dispatch({
      type: "DELETE_BAND",
      id: this.props.band.id
    })
  }

  render() {

    return(
      <li>
        <div>
          {this.props.band.text}
          <button onClick={this.handleClick}/>
        </div>
      </li>
    );
  }
};

export default Band;
