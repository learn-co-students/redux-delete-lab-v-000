import React from 'react'

export default class Band extends React.Component {
  
  handleOnClick() {
    this.props.store.dispatch({
    type: 'DELETE_BAND',
    id: this.props.band.id
    })
  }
  
  render(){
    return (
     <li key={this.props.index} id={this.props.band.id}>
      {this.props.band.text}
      <button onClick={()=>this.handleOnClick()}>Delete</button>
      </li>
      )
  }
}