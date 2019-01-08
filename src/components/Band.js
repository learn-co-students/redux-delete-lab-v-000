import React, { Component } from 'react';

class Band extends Component {
debugger;
handleOnClick = () => {
  this.props.delete(this.props.id)
}

render() {
    return(
      <div>
        <li>{this.props.name}</li>
          <button onClick={this.handleOnClick}>delete</button>
      </div>
    )

}
}
export default Band;
