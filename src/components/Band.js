import React, { Component } from 'react'

class Band extends Component {
  handleClick (e) {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }
  render () {
    return (
      <li>
        {this.props.band.text}
        <button onClick={(e) => this.handleClick(e)} />
      </li>
    )
  }
}
export default Band
