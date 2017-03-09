import React, { Component } from 'react'

class Band extends Component {
  handleClick() {
    const { id } = this.props
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id
    })
  }

  render(){
    return(
      <div>
        <li>{this.props.text}</li>
        <button onClick={() => this.handleClick()}>Delete</button>
      </div>
    )
  }
}

export default Band
