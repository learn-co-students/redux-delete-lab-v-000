import React from 'react'

class Band extends React.Component {


  
  handleClick = (e) => {
    //need to pass down function in props to delete band
  
    this.props.deleteBand(this.props.band.id)
  }
 
  render(){
    
    return(
      <div>
        <li>{this.props.band.name}</li>
        <button onClick={(event) => this.handleClick(event)}>delete</button>
      </div>
    )
  }
};

export default Band;
